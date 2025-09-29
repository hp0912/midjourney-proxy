using System.Collections.Concurrent;
using System.Text;
using Consul;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using Microsoft.Extensions.Options;
using Midjourney.YarpProxy.Middleware;
using Midjourney.YarpProxy.Models;
using Midjourney.YarpProxy.Services;
using Serilog;
using Yarp.ReverseProxy.Configuration;
using Yarp.ReverseProxy.LoadBalancing;
using Yarp.ReverseProxy.Model;

// ���� Serilog
Log.Logger = new LoggerConfiguration()
    .ReadFrom.Configuration(new ConfigurationBuilder()
        .AddJsonFile("appsettings.json")
        .AddJsonFile($"appsettings.{Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Production"}.json", optional: true)
        .Build())
    .CreateLogger();

try
{
    Log.Information("���� YARP ����...");

    var builder = WebApplication.CreateBuilder(args);

    // ����ת��ͷ
    builder.Services.Configure<ForwardedHeadersOptions>(options =>
    {
        options.ForwardedHeaders = ForwardedHeaders.XForwardedFor |
                                  ForwardedHeaders.XForwardedProto |
                                  ForwardedHeaders.XForwardedHost;

        // �����֪������������� IP��������ӵ���֪�����б�
        // options.KnownProxies.Add(IPAddress.Parse("192.168.1.1"));

        // ����� Docker �� Kubernetes �����У�������Ҫ�����֪����
        options.KnownNetworks.Clear();
        options.KnownProxies.Clear();
    });

    // ��� Consul ����
    builder.Services.Configure<ConsulOptions>(builder.Configuration.GetSection(nameof(ConsulOptions)));

    // ��� YARP ����
    builder.Services.AddSingleton<IProxyConfigProvider>(new InMemoryConfigProvider([], []));
    builder.Services.AddReverseProxy().LoadFromMemory([], []);

    // ��� Consul ������
    builder.Services.AddSingleton<IConsulClient>(sp =>
    {
        var consulOptions = sp.GetRequiredService<IOptions<ConsulOptions>>().Value;
        return new ConsulClient(config =>
        {
            config.Address = new Uri(consulOptions.ConsulUrl);
        });
    });

    builder.Services.AddHealthChecks()
        .AddCheck("YARP Gateway Health Check", () => HealthCheckResult.Healthy("YARP ������������"));

    builder.Services.AddSingleton<ILoadBalancingPolicy, WeightedRandomLoadBalancingPolicy>();

    // ��� Consul �����ֺ�̨����
    builder.Services.AddHostedService<ConsulServiceDiscoveryHostedService>();

    var app = builder.Build();

    // ʹ��ת��ͷ�м����Ӧ���������м��֮ǰ��
    app.UseForwardedHeaders(new ForwardedHeadersOptions
    {
        ForwardedHeaders = ForwardedHeaders.All
    });

    // �����м���ܵ�
    app.UseMiddleware<RequestLoggingMiddleware>();

    // ���ά��ģʽ�м��
    app.UseMiddleware<MaintenanceModeMiddleware>();

    app.UseRouting();

    // �������˵�
    app.MapHealthChecks("/health");

    // ���һ������·��
    app.MapGet("/debug/routes", (IProxyConfigProvider provider) =>
    {
        var config = provider.GetConfig();
        return Results.Ok(new
        {
            Routes = config.Routes.Select(r => new
            {
                r.RouteId,
                Path = r.Match.Path,
                ClusterId = r.ClusterId
            }),
            Clusters = config.Clusters.Select(c => new
            {
                c.ClusterId,
                c.Destinations.Count,
                Destinations = c.Destinations.Select(d => new
                {
                    d.Key,
                    Address = d.Value.Address
                })
            })
        });
    });

    app.MapGet("/debug/headers", (HttpContext context) =>
    {
        var headers = context.Request.Headers
            .ToDictionary(h => h.Key, h => h.Value.ToArray());

        var request = context.Request;

        var ipInfo = new
        {
            RemoteIp = context.Connection.RemoteIpAddress?.ToString(),
            XForwardedFor = request.Headers["X-Forwarded-For"],
            XRealIp = request.Headers["X-Real-IP"],
            XOriginalFor = request.Headers["X-Original-For"],
            CFConnectingIp = request.Headers["CF-Connecting-IP"], // Cloudflare
            XClientIp = request.Headers["X-Client-IP"],
            UserAgent = request.Headers["User-Agent"]
        };

        return Results.Ok(new
        {
            request.Method,
            request.Path,
            IpInfo = ipInfo,
            RemoteIpAddress = context.Connection.RemoteIpAddress?.ToString(),
            LocalIpAddress = context.Connection.LocalIpAddress?.ToString(),
            Headers = headers,
            UserAgent = context.Request.Headers["User-Agent"].FirstOrDefault()
        });
    });

    // ��¶һ�� API ·����ʾ������
    app.MapGet("/debug/connection-counts", () =>
    {
        var connectionCounts = ProxyConnectionCountMiddleware.GetConnectionCounts();
        return Results.Ok(connectionCounts);
    });

    // YARP �������
    app.MapReverseProxy();

    //// YARP ����������ȴ���
    //app.MapReverseProxy(proxyPipeline => {
    //    // ������������Ӷ����ǰ�û���ô���
    //    proxyPipeline.Use((context, next) => {
    //        // ��¼ת��ǰ����Ϣ
    //        return next();
    //    });
    //});

    //// ע������м��
    //app.MapReverseProxy(proxyPipeline =>
    //{
    //    // 1. ��ѡ���������ֶ�ѡ�� cluster
    //    proxyPipeline.Use((context, next) =>
    //    {
    //        var lookup = context.RequestServices.GetRequiredService<IProxyStateLookup>();
    //        if (lookup.TryGetCluster(ChooseCluster(context), out var cluster))
    //        {
    //            context.ReassignProxyRequest(cluster);
    //        }

    //        return next();
    //    });

    //    proxyPipeline.UseLoadBalancing();

    //    // ������ LoadBalancing ֮���ȡ��ѡ destination ������
    //    // ʹ�� ProxyRequest �м������Ŀ�걻ѡ���󴥷���
    //    proxyPipeline.Use(async (context, next) =>
    //    {
    //        var proxyFeature = context.Features.Get<IReverseProxyFeature>();
    //        if (proxyFeature?.ProxiedDestination != null)
    //        {
    //        }

    //        var destinationAddress = proxyFeature?.ProxiedDestination?.Model?.Config?.Address;

    //        try
    //        {
    //            // ����ʼʱ����������
    //            ProxyConnectionCountMiddleware.IncrementConnection(destinationAddress);

    //            // �ȴ�����Ŀ�걻ѡ�񣨴�ʱ ProxiedDestination Ӧ�ò�Ϊ null��
    //            await next(); // ����ִ�д���ܵ�
    //        }
    //        finally
    //        {
    //            ProxyConnectionCountMiddleware.DecrementConnection(destinationAddress);
    //        }
    //    });
    //});

    // Ĭ��·�ɣ�����δƥ�������
    app.MapFallback(async context =>
    {
        context.Response.StatusCode = 404;
        //context.Response.ContentType = "text/html; charset=utf-8";
        context.Response.ContentType = "application/json";

        await context.Response.WriteAsync($$"""
        {
            "error": "Not Found",
            "message": "�����·��δ�ҵ�ƥ��ķ���",
            "path": "{{context.Request.Path}}",
            "timestamp": "{{DateTime.UtcNow:O}}"
        }
        """, Encoding.UTF8);
    });

    await app.RunAsync();
}
catch (Exception ex)
{
    Log.Fatal(ex, "YARP ��������ʧ��");
}
finally
{
    Log.CloseAndFlush();
}

//string ChooseCluster(HttpContext context)
//{
//    // Decide which cluster to use. This could be random, weighted, based on headers, etc.
//    //return Random.Shared.Next(2) == 1 ? "midjourney-cluster" : "cluster2";

//    //// �����ȡһ�����õļ�Ⱥ
//    //var clusterNames = destinations
//    //    .Select(d => d.Model.Config.Address)
//    //    .Distinct()
//    //    .ToList();

//    //return clusterNames.Count > 0
//    //    ? clusterNames[Random.Shared.Next(clusterNames.Count)]
//    //    : "midjourney-cluster"; // Ĭ�ϼ�Ⱥ

//    var proxyFeature = context.Features.Get<IReverseProxyFeature>();
//    return proxyFeature?.Route?.Config.ClusterId ?? "midjourney-cluster";
//}

public class ProxyConnectionCountMiddleware
{
    private static readonly ConcurrentDictionary<string, int> _connectionCounts = new();

    public static void IncrementConnection(string destinationAddress)
    {
        if (string.IsNullOrEmpty(destinationAddress))
            return;

        _connectionCounts.AddOrUpdate(destinationAddress, 1, (_, count) => count + 1);
    }

    public static void DecrementConnection(string destinationAddress)
    {
        if (string.IsNullOrEmpty(destinationAddress))
            return;

        _connectionCounts.AddOrUpdate(destinationAddress, 0, (_, count) => Math.Max(0, count - 1));
    }

    public static IReadOnlyDictionary<string, int> GetConnectionCounts()
    {
        return _connectionCounts;
    }
}

/// <summary>
/// ��Ȩ������ؾ������ʵ��
/// - ��ÿ�� destination �� metadata �ж�ȡ "Weight"�������ִ�Сд����
/// - Ȩ�� <= 0 �� destination �ᱻ��Ϊ����ѡ����������
/// - ������������κ�Ȩ�ػ�����Ȩ��Ϊ 0�����˻�Ϊ���ص�һ������ destination��
///
/// ʹ�ã�
///   builder.Services.AddSingleton<ILoadBalancingPolicy, WeightedRandomLoadBalancingPolicy>();
/// �� Cluster ��������ָ�� LoadBalancing.Policy = "WeightedRandom"����ʹ�� Name �ַ��� "WeightedRandom"��
/// </summary>
public class WeightedRandomLoadBalancingPolicy : ILoadBalancingPolicy
{
    private readonly Random _random = Random.Shared;

    /// <summary>
    /// �������ƣ����������ô�������ʹ�øò��ԣ�
    /// </summary>
    public string Name => "WeightedRandom";

    /// <summary>
    /// ѡ��һ�� destination��
    /// </summary>
    /// <param name="context">��ǰ HttpContext�������ڰ�������������������ߣ�</param>
    /// <param name="cluster">��Ⱥ״̬</param>
    /// <param name="availableDestinations">����Ŀ���б�</param>
    /// <returns>ѡ�е� DestinationState�����û�п�ѡ��� null</returns>
    public DestinationState PickDestination(HttpContext context, ClusterState cluster, IReadOnlyList<DestinationState> availableDestinations)
    {
        if (availableDestinations == null || availableDestinations.Count == 0)
            return null;

        var weighted = new List<(DestinationState dest, int weight)>(availableDestinations.Count);

        var cfg = context.RequestServices.GetRequiredService<IProxyConfigProvider>().GetConfig();

        foreach (var dest in availableDestinations)
        {
            var metadata = cfg.Clusters.FirstOrDefault(x => x.ClusterId == cluster.ClusterId)
                ?.Destinations.FirstOrDefault(c => c.Key == dest.DestinationId).Value.Metadata;
            int weight = 1;
            if (metadata != null)
            {
                if (metadata.TryGetValue("Weight", out var ws) && int.TryParse(ws, out var parsed))
                {
                    weight = Math.Max(0, parsed);
                }
            }

            if (weight > 0)
                weighted.Add((dest, weight));
        }

        DestinationState selected;

        if (weighted.Count == 0)
        {
            selected = availableDestinations[0];
        }
        else
        {
            var total = weighted.Sum(t => t.weight);
            var r = _random.Next(0, total);
            int acc = 0;
            selected = weighted[0].dest;
            foreach (var (dest, w) in weighted)
            {
                acc += w;
                if (r < acc)
                {
                    selected = dest;
                    break;
                }
            }
        }

        try
        {
            // --- �����ѡ��ʱ�����м�������ע���������ʱ�Ļص��Լ����� ---
            var address = selected.Model.Config.Address;
            ProxyConnectionCountMiddleware.IncrementConnection(address);

            // ע��ص���ȷ���������ʱ������
            // ע�⣺����������/�м��Ҳע�� OnCompleted������ص��Իᱻִ��
            context.Response.OnCompleted(() =>
            {
                ProxyConnectionCountMiddleware.DecrementConnection(address);
                return Task.CompletedTask;
            });
        }
        catch (Exception ex)
        {
            Log.Warning(ex, "Failed to register connection counting for selected destination.");
        }

        return selected;
    }
}