"use strict";(self.webpackChunkmidjourney_proxy_admin=self.webpackChunkmidjourney_proxy_admin||[]).push([[185],{16755:function(D,h,r){r.r(h),r.d(h,{default:function(){return ge}});var b=r(5574),I=r.n(b),P=r(66927),k=r(90930),M=r(80854),$=r(9361),R=r(38437),N=r(4393),B=r(71230),C=r(15746),m=r(67294),H=r(57838),W=r(96159),L=r(93967),U=r.n(L),Q=r(64217),V=r(53124),X=r(99559),K=n=>{const{value:t,formatter:s,precision:e,decimalSeparator:o,groupSeparator:f="",prefixCls:d}=n;let a;if(typeof s=="function")a=s(t);else{const l=String(t),u=l.match(/^(-?)(\d*)(\.(\d+))?$/);if(!u||l==="-")a=l;else{const g=u[1];let p=u[2]||"0",c=u[4]||"";p=p.replace(/\B(?=(\d{3})+(?!\d))/g,f),typeof e=="number"&&(c=c.padEnd(e,"0").slice(0,e>0?e:0)),c&&(c=`${o}${c}`),a=[m.createElement("span",{key:"int",className:`${d}-content-value-int`},g,p),c&&m.createElement("span",{key:"decimal",className:`${d}-content-value-decimal`},c)]}}return m.createElement("span",{className:`${d}-content-value`},a)},Y=r(14747),G=r(83559),J=r(83262);const q=n=>{const{componentCls:t,marginXXS:s,padding:e,colorTextDescription:o,titleFontSize:f,colorTextHeading:d,contentFontSize:a,fontFamily:l}=n;return{[`${t}`]:Object.assign(Object.assign({},(0,Y.Wf)(n)),{[`${t}-title`]:{marginBottom:s,color:o,fontSize:f},[`${t}-skeleton`]:{paddingTop:e},[`${t}-content`]:{color:d,fontSize:a,fontFamily:l,[`${t}-content-value`]:{display:"inline-block",direction:"ltr"},[`${t}-content-prefix, ${t}-content-suffix`]:{display:"inline-block"},[`${t}-content-prefix`]:{marginInlineEnd:s},[`${t}-content-suffix`]:{marginInlineStart:s}}})}},_=n=>{const{fontSizeHeading3:t,fontSize:s}=n;return{titleFontSize:s,contentFontSize:t}};var ee=(0,G.I$)("Statistic",n=>{const t=(0,J.IX)(n,{});return[q(t)]},_),te=function(n,t){var s={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(s[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(n);o<e.length;o++)t.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(n,e[o])&&(s[e[o]]=n[e[o]]);return s},w=n=>{const{prefixCls:t,className:s,rootClassName:e,style:o,valueStyle:f,value:d=0,title:a,valueRender:l,prefix:u,suffix:g,loading:p=!1,formatter:c,precision:x,decimalSeparator:T=".",groupSeparator:A=",",onMouseEnter:y,onMouseLeave:S}=n,F=te(n,["prefixCls","className","rootClassName","style","valueStyle","value","title","valueRender","prefix","suffix","loading","formatter","precision","decimalSeparator","groupSeparator","onMouseEnter","onMouseLeave"]),{getPrefixCls:fe,direction:pe,statistic:j}=m.useContext(V.E_),v=fe("statistic",t),[ve,xe,ye]=ee(v),z=m.createElement(K,{decimalSeparator:T,groupSeparator:A,prefixCls:v,formatter:c,precision:x,value:d}),he=U()(v,{[`${v}-rtl`]:pe==="rtl"},j==null?void 0:j.className,s,e,xe,ye),Se=(0,Q.Z)(F,{aria:!0,data:!0});return ve(m.createElement("div",Object.assign({},Se,{className:he,style:Object.assign(Object.assign({},j==null?void 0:j.style),o),onMouseEnter:y,onMouseLeave:S}),a&&m.createElement("div",{className:`${v}-title`},a),m.createElement(X.Z,{paragraph:!1,loading:p,className:`${v}-skeleton`},m.createElement("div",{style:f,className:`${v}-content`},u&&m.createElement("span",{className:`${v}-content-prefix`},u),l?l(z):z,g&&m.createElement("span",{className:`${v}-content-suffix`},g)))))};const ne=[["Y",1e3*60*60*24*365],["M",1e3*60*60*24*30],["D",1e3*60*60*24],["H",1e3*60*60],["m",1e3*60],["s",1e3],["S",1]];function ae(n,t){let s=n;const e=/\[[^\]]*]/g,o=(t.match(e)||[]).map(l=>l.slice(1,-1)),f=t.replace(e,"[]"),d=ne.reduce((l,u)=>{let[g,p]=u;if(l.includes(g)){const c=Math.floor(s/p);return s-=c*p,l.replace(new RegExp(`${g}+`,"g"),x=>{const T=x.length;return c.toString().padStart(T,"0")})}return l},f);let a=0;return d.replace(e,()=>{const l=o[a];return a+=1,l})}function oe(n,t){const{format:s=""}=t,e=new Date(n).getTime(),o=Date.now(),f=Math.max(e-o,0);return ae(f,s)}var re=function(n,t){var s={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(s[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(n);o<e.length;o++)t.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(n,e[o])&&(s[e[o]]=n[e[o]]);return s};const se=1e3/30;function ie(n){return new Date(n).getTime()}const le=n=>{const{value:t,format:s="HH:mm:ss",onChange:e,onFinish:o}=n,f=re(n,["value","format","onChange","onFinish"]),d=(0,H.Z)(),a=m.useRef(null),l=()=>{o==null||o(),a.current&&(clearInterval(a.current),a.current=null)},u=()=>{const c=ie(t);c>=Date.now()&&(a.current=setInterval(()=>{d(),e==null||e(c-Date.now()),c<Date.now()&&l()},se))};m.useEffect(()=>(u(),()=>{a.current&&(clearInterval(a.current),a.current=null)}),[t]);const g=(c,x)=>oe(c,Object.assign(Object.assign({},x),{format:s})),p=c=>(0,W.Tm)(c,{title:void 0});return m.createElement(w,Object.assign({},f,{value:t,valueRender:p,formatter:g}))};var ce=m.memo(le);w.Countdown=ce;var E=w,de=r(96074),Z=r(2487),ue=r(66309),i=r(85893),O=function(t){var s=t.title,e=t.href,o=t.index,f=t.desc,d=(0,M.useIntl)(),a=$.Z.useToken,l=a(),u=l.token;return(0,i.jsxs)("div",{style:{backgroundColor:u.colorBgContainer,boxShadow:u.boxShadow,borderRadius:"8px",fontSize:"14px",color:u.colorTextSecondary,lineHeight:"22px",padding:"16px 19px",minWidth:"220px",flex:1},children:[(0,i.jsxs)("div",{style:{display:"flex",gap:"4px",alignItems:"center"},children:[(0,i.jsx)("div",{style:{width:48,height:48,lineHeight:"22px",backgroundSize:"100%",textAlign:"center",padding:"8px 16px 16px 12px",color:"#FFF",fontWeight:"bold",backgroundImage:"url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')"},children:o}),(0,i.jsx)("div",{style:{fontSize:"16px",color:u.colorText,paddingBottom:8},children:s})]}),(0,i.jsx)("div",{style:{fontSize:"14px",color:u.colorTextSecondary,textAlign:"justify",lineHeight:"22px",marginBottom:8},children:f}),(0,i.jsxs)("a",{href:e,target:"_blank",rel:"noreferrer",children:[d.formatMessage({id:"pages.welcome.learnMore"})," ",">"]})]})},me=function(){var t,s,e=$.Z.useToken(),o=e.token,f=(0,M.useModel)("@@initialState"),d=f.initialState,a=(0,M.useIntl)(),l=(0,m.useState)(),u=I()(l,2),g=u[0],p=u[1],c=(0,m.useState)(),x=I()(c,2),T=x[0],A=x[1];return(0,m.useEffect)(function(){(0,P.rw)().then(function(y){if(y.success&&y.data){p(y.data);var S=Object.keys(y.data.tops).map(function(F){return{ip:F,count:y.data.tops[F]}});A(S)}})},[]),(0,i.jsxs)(k._z,{children:[g&&g.notify&&(0,i.jsx)(R.Z,{message:g.notify,banner:!0,closable:!0,style:{marginBottom:16}}),(0,i.jsx)(N.Z,{style:{borderRadius:8},bodyStyle:{backgroundImage:(d==null||(t=d.settings)===null||t===void 0?void 0:t.navTheme)==="realDark"?"background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)":"background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)"},children:(0,i.jsxs)("div",{style:{backgroundPosition:"100% -30%",backgroundRepeat:"no-repeat",backgroundSize:"274px auto",backgroundImage:"url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')"},children:[(0,i.jsxs)("div",{style:{fontSize:"20px",color:o.colorTextHeading},children:[a.formatMessage({id:"pages.welcome.link"})," Midjourney Proxy Admin"]}),(0,i.jsx)("p",{style:{fontSize:"14px",color:o.colorTextSecondary,lineHeight:"22px",marginTop:16,marginBottom:32,width:"65%"},children:a.formatMessage({id:"pages.welcome.description"})}),(0,i.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:16},children:[(0,i.jsx)(O,{index:1,href:"https://github.com/trueai-org/midjourney-proxy",title:a.formatMessage({id:"pages.welcome.learn"})+" Midjourney Proxy",desc:a.formatMessage({id:"pages.welcome.midjourney-proxy"})}),(0,i.jsx)(O,{index:3,title:a.formatMessage({id:"pages.welcome.learn"})+" Swagger Api Doc",href:"/swagger",desc:a.formatMessage({id:"pages.activate.apiDoc"})}),(0,i.jsx)(O,{index:2,title:a.formatMessage({id:"pages.welcome.learn"})+" Midjourney Proxy Web UI",href:"https://github.com/trueai-org/midjourney-proxy-webui",desc:a.formatMessage({id:"pages.welcome.midjourney-proxy-webui"})})]})]})}),g&&(0,i.jsxs)(N.Z,{style:{borderRadius:8,marginTop:16},bodyStyle:{backgroundImage:(d==null||(s=d.settings)===null||s===void 0?void 0:s.navTheme)==="realDark"?"background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)":"background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)"},children:[(0,i.jsxs)(B.Z,{gutter:16,children:[(0,i.jsx)(C.Z,{span:8,children:(0,i.jsx)(E,{title:a.formatMessage({id:"pages.welcome.todayDraw"}),value:g.todayDraw})}),(0,i.jsx)(C.Z,{span:8,children:(0,i.jsx)(E,{title:a.formatMessage({id:"pages.welcome.yesterdayDraw"}),value:g.yesterdayDraw})}),(0,i.jsx)(C.Z,{span:8,children:(0,i.jsx)(E,{title:a.formatMessage({id:"pages.welcome.totalDraw"}),value:g.totalDraw})})]}),(0,i.jsx)(de.Z,{orientation:"left",children:a.formatMessage({id:"pages.welcome.top5"})}),(0,i.jsx)(Z.Z,{dataSource:T,renderItem:function(S){return(0,i.jsxs)(Z.Z.Item,{children:[(0,i.jsx)(ue.Z,{children:S.ip})," ",S.count," ",a.formatMessage({id:"pages.welcome.unit"})]})}})]})]})},ge=me},15746:function(D,h,r){var b=r(21584);h.Z=b.Z},71230:function(D,h,r){var b=r(92820);h.Z=b.Z}}]);
