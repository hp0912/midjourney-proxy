"use strict";(self.webpackChunkmidjourney_proxy_admin=self.webpackChunkmidjourney_proxy_admin||[]).push([[971],{23391:function(re,U,s){s.r(U),s.d(U,{default:function(){return te}});var z=s(15009),E=s.n(z),W=s(99289),k=s.n(W),K=s(5574),h=s.n(K),f=s(67294),Q=s(74981),oe=s(90252),ge=s(22777),e=s(85893),X=function(y){var C=y.value,g=C===void 0?{}:C,a=y.onChange,P=f.useState(JSON.stringify(g,null,2)),Z=h()(P,2),j=Z[0],m=Z[1],I=f.useState(!0),T=h()(I,2),F=T[0],v=T[1];(0,f.useEffect)(function(){var A=JSON.stringify(g),x=JSON.stringify(JSON.parse(j));A!==x&&m(JSON.stringify(g,null,2))},[g]);var M=function(x){m(x);try{var L=JSON.parse(x);v(!0),a&&a(L)}catch(R){v(!1)}};return(0,e.jsxs)("div",{style:{width:"100%"},children:[(0,e.jsx)(Q.ZP,{mode:"json",theme:"textmate",value:j,onChange:M,name:"json-editor",editorProps:{$blockScrolling:!0},height:"auto",maxLines:1/0,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:2,useWorker:!1},style:{width:"100%",minHeight:"80px"},fontSize:14,lineHeight:19,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0}),!F&&(0,e.jsx)("div",{style:{color:"red",marginTop:"8px"},children:"JSON \u683C\u5F0F\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\u8F93\u5165\uFF01"})]})},l=X,b=s(66927),Y=s(60219),w=s(90930),q=s(94272),t=s(53025),d=s(2453),_=s(74330),V=s(42075),J=s(40056),ee=s(83062),c=s(26915),O=s(28036),G=s(71230),N=s(15746),D=s(4393),n=s(72269),S=s(37804),i=s(74656),ae=function(){var y=t.Z.useForm(),C=h()(y,1),g=C[0],a=(0,q.useIntl)(),P=(0,f.useState)(!1),Z=h()(P,2),j=Z[0],m=Z[1],I=function(){m(!0),(0,b.iE)().then(function(r){m(!1),r.success&&g.setFieldsValue(r.data)})};(0,f.useEffect)(function(){I()},[]);var T=function(){g.validateFields().then(function(r){m(!0),(0,b.rF)(r).then(function(p){m(!1),p.success?(d.ZP.success(a.formatMessage({id:"pages.setting.saveSuccess"})),I()):d.ZP.error(p.message||a.formatMessage({id:"pages.setting.error"}))})}).catch(function(){d.ZP.error(a.formatMessage({id:"pages.setting.error"}))})},F=(0,f.useState)(""),v=h()(F,2),M=v[0],A=v[1],x=(0,f.useState)(""),L=h()(x,2),R=L[0],ne=L[1],ie=function(){var u=k()(E()().mark(function r(p,H){var $,B;return E()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,m(!0),$={Host:p,ApiSecret:H},o.next=5,(0,b.gU)($);case 5:B=o.sent,B.success?d.ZP.success(a.formatMessage({id:"pages.setting.migrateSuccess"})):d.ZP.error(B.message),o.next=12;break;case 9:o.prev=9,o.t0=o.catch(0),d.ZP.error(o.t0);case 12:return o.prev=12,m(!1),o.finish(12);case 15:case"end":return o.stop()}},r,null,[[0,9,12,15]])}));return function(p,H){return u.apply(this,arguments)}}(),le=function(){M?ie(M,R):d.ZP.warning(a.formatMessage({id:"pages.setting.migrateTips"}))};return(0,e.jsx)(w._z,{children:(0,e.jsx)(t.Z,{form:g,labelAlign:"left",layout:"horizontal",labelCol:{span:6},wrapperCol:{span:18},children:(0,e.jsxs)(_.Z,{spinning:j,children:[(0,e.jsxs)(V.Z,{style:{marginBottom:"10px",display:"flex",justifyContent:"space-between"},children:[(0,e.jsx)(J.Z,{type:"info",style:{paddingTop:"4px",paddingBottom:"4px"},description:a.formatMessage({id:"pages.setting.tips"})}),(0,e.jsxs)(V.Z,{children:[(0,e.jsx)(ee.Z,{placement:"bottom",title:(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8,padding:8},children:[(0,e.jsx)(c.Z,{style:{marginBottom:8},placeholder:"mjplus host",value:M,onChange:function(r){return A(r.target.value)}}),(0,e.jsx)(c.Z,{placeholder:"mj-api-secret",value:R,onChange:function(r){return ne(r.target.value)}})]}),children:(0,e.jsx)(O.ZP,{loading:j,type:"primary",ghost:!0,onClick:le,children:a.formatMessage({id:"pages.setting.migrate"})})}),(0,e.jsx)(O.ZP,{loading:j,icon:(0,e.jsx)(Y.Z,{}),type:"primary",onClick:T,children:a.formatMessage({id:"pages.setting.save"})})]})]}),(0,e.jsxs)(G.Z,{gutter:16,children:[(0,e.jsx)(N.Z,{span:12,children:(0,e.jsxs)(D.Z,{title:a.formatMessage({id:"pages.setting.accountSetting"}),bordered:!1,children:[(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.enableSwagger"}),name:"enableSwagger",extra:g.getFieldValue("enableSwagger")?(0,e.jsx)("a",{href:"/swagger",target:"_blank",rel:"noreferrer",children:a.formatMessage({id:"pages.setting.swaggerLink"})}):"",children:(0,e.jsx)(n.Z,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.mongoDefaultConnectionString"}),name:"mongoDefaultConnectionString",extra:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(O.ZP,{style:{marginTop:8},type:"primary",onClick:function(){var r=g.getFieldValue("mongoDefaultConnectionString");r?(m(!0),(0,b.yk)().then(function(p){m(!1),p.success?d.ZP.success(a.formatMessage({id:"pages.setting.connectSuccess"})):d.ZP.error(p.message||a.formatMessage({id:"pages.setting.connectError"}))})):d.ZP.warning(a.formatMessage({id:"pages.setting.mongoDefaultConnectionStringTips"}))},children:a.formatMessage({id:"pages.setting.testConnect"})}),g&&!g.getFieldValue("isMongo")&&(0,e.jsx)(J.Z,{style:{marginTop:8},message:a.formatMessage({id:"pages.setting.mongoNotUsed"}),type:"warning"})]}),children:(0,e.jsx)(c.Z,{placeholder:"mongodb://mongoadmin:***admin@192.168.x.x"})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.mongoDefaultDatabase"}),name:"mongoDefaultDatabase",children:(0,e.jsx)(c.Z,{placeholder:"mj"})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.isMongoAutoMigrate"}),name:"isMongoAutoMigrate",tooltip:a.formatMessage({id:"pages.setting.isMongoAutoMigrateTips"}),children:(0,e.jsx)(n.Z,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.maxCount"}),name:"maxCount",children:(0,e.jsx)(S.Z,{min:-1})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.accountChooseRule"}),name:"accountChooseRule",children:(0,e.jsxs)(i.Z,{allowClear:!0,children:[(0,e.jsx)(i.Z.Option,{value:"BestWaitIdle",children:"BestWaitIdle"}),(0,e.jsx)(i.Z.Option,{value:"Random",children:"Random"}),(0,e.jsx)(i.Z.Option,{value:"Weight",children:"Weight"}),(0,e.jsx)(i.Z.Option,{value:"Polling",children:"Polling"})]})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.discordConfig"}),name:"ngDiscord",children:(0,e.jsx)(l,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.proxyConfig"}),name:"proxy",children:(0,e.jsx)(l,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.imageStorageType"}),name:"imageStorageType",children:(0,e.jsxs)(i.Z,{allowClear:!0,children:[(0,e.jsx)(i.Z.Option,{value:"NONE",children:"NULL"}),(0,e.jsx)(i.Z.Option,{value:"LOCAL",children:"LOCAL"}),(0,e.jsx)(i.Z.Option,{value:"OSS",children:"Aliyun OSS"}),(0,e.jsx)(i.Z.Option,{value:"COS",children:"Tencent COS"}),(0,e.jsx)(i.Z.Option,{value:"R2",children:"Cloudflare R2"})]})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.localStorage"}),name:"localStorage",children:(0,e.jsx)(l,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.aliyunOss"}),name:"aliyunOss",children:(0,e.jsx)(l,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.tencentCos"}),name:"tencentCos",children:(0,e.jsx)(l,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.cloudflareR2"}),name:"cloudflareR2",children:(0,e.jsx)(l,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.replicate"}),name:"replicate",children:(0,e.jsx)(l,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.translate"}),name:"translateWay",children:(0,e.jsxs)(i.Z,{allowClear:!0,children:[(0,e.jsx)(i.Z.Option,{value:"NULL",children:"NULL"}),(0,e.jsx)(i.Z.Option,{value:"BAIDU",children:"BAIDU"}),(0,e.jsx)(i.Z.Option,{value:"GPT",children:"GPT"})]})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.baiduTranslate"}),name:"baiduTranslate",children:(0,e.jsx)(l,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.openai"}),name:"openai",children:(0,e.jsx)(l,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.smtp"}),name:"smtp",children:(0,e.jsx)(l,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.notifyHook"}),name:"notifyHook",children:(0,e.jsx)(c.Z,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.notifyPoolSize"}),name:"notifyPoolSize",children:(0,e.jsx)(S.Z,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.captchaServer"}),name:"captchaServer",help:a.formatMessage({id:"pages.setting.captchaServerTip"}),children:(0,e.jsx)(c.Z,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.captchaNotifyHook"}),name:"captchaNotifyHook",help:a.formatMessage({id:"pages.setting.captchaNotifyHookTip"}),children:(0,e.jsx)(c.Z,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.captchaNotifySecret"}),name:"captchaNotifySecret",help:a.formatMessage({id:"pages.setting.captchaNotifySecretTip"}),children:(0,e.jsx)(c.Z,{})})]})}),(0,e.jsx)(N.Z,{span:12,children:(0,e.jsxs)(D.Z,{title:a.formatMessage({id:"pages.setting.otherSetting"}),bordered:!1,children:[(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.enableAccountSponsor"}),name:"enableAccountSponsor",help:a.formatMessage({id:"pages.setting.enableAccountSponsorTips"}),children:(0,e.jsx)(n.Z,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.isVerticalDomain"}),name:"isVerticalDomain",help:a.formatMessage({id:"pages.setting.isVerticalDomainTips"}),children:(0,e.jsx)(n.Z,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.enableRegister"}),name:"enableRegister",children:(0,e.jsx)(n.Z,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.registerUserDefaultDayLimit"}),name:"registerUserDefaultDayLimit",children:(0,e.jsx)(S.Z,{min:-1})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.enableGuest"}),name:"enableGuest",children:(0,e.jsx)(n.Z,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.guestDefaultDayLimit"}),name:"guestDefaultDayLimit",children:(0,e.jsx)(S.Z,{min:-1})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.bannedLimiting"}),name:"bannedLimiting",children:(0,e.jsx)(l,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.ipRateLimiting"}),name:"ipRateLimiting",children:(0,e.jsx)(l,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.ipBlackRateLimiting"}),name:"ipBlackRateLimiting",children:(0,e.jsx)(l,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.notify"}),name:"notify",children:(0,e.jsx)(c.Z.TextArea,{autoSize:{minRows:1,maxRows:10}})})]})})]}),(0,e.jsx)(G.Z,{gutter:16,style:{marginTop:"16px"},children:(0,e.jsx)(N.Z,{span:12,children:(0,e.jsxs)(D.Z,{title:a.formatMessage({id:"pages.setting.discordSetting"}),bordered:!1,children:[(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.enableAutoGetPrivateId"}),name:"enableAutoGetPrivateId",help:a.formatMessage({id:"pages.setting.enableAutoGetPrivateIdTips"}),children:(0,e.jsx)(n.Z,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.enableAutoVerifyAccount"}),name:"enableAutoVerifyAccount",help:a.formatMessage({id:"pages.setting.enableAutoVerifyAccountTips"}),children:(0,e.jsx)(n.Z,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.enableAutoSyncInfoSetting"}),name:"enableAutoSyncInfoSetting",help:a.formatMessage({id:"pages.setting.enableAutoSyncInfoSettingTips"}),children:(0,e.jsx)(n.Z,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.enableAutoExtendToken"}),name:"enableAutoExtendToken",help:a.formatMessage({id:"pages.setting.enableAutoExtendTokenTips"}),children:(0,e.jsx)(n.Z,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.enableUserCustomUploadBase64"}),name:"enableUserCustomUploadBase64",help:a.formatMessage({id:"pages.setting.enableUserCustomUploadBase64Tips"}),children:(0,e.jsx)(n.Z,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.enableConvertOfficialLink"}),name:"enableConvertOfficialLink",help:a.formatMessage({id:"pages.setting.enableConvertOfficialLinkTips"}),children:(0,e.jsx)(n.Z,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.enableConvertAliyunLink"}),name:"enableConvertAliyunLink",help:a.formatMessage({id:"pages.setting.enableConvertAliyunLinkTips"}),children:(0,e.jsx)(n.Z,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.enableMjTranslate"}),name:"enableMjTranslate",help:a.formatMessage({id:"pages.setting.enableMjTranslateTips"}),children:(0,e.jsx)(n.Z,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.enableNijiTranslate"}),name:"enableNijiTranslate",help:a.formatMessage({id:"pages.setting.enableNijiTranslateTips"}),children:(0,e.jsx)(n.Z,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.enableConvertNijiToMj"}),name:"enableConvertNijiToMj",help:a.formatMessage({id:"pages.setting.enableConvertNijiToMjTips"}),children:(0,e.jsx)(n.Z,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.enableConvertNijiToNijiBot"}),name:"enableConvertNijiToNijiBot",help:a.formatMessage({id:"pages.setting.enableConvertNijiToNijiBotTips"}),children:(0,e.jsx)(n.Z,{})}),(0,e.jsx)(t.Z.Item,{label:a.formatMessage({id:"pages.setting.enableAutoLogin"}),name:"enableAutoLogin",help:a.formatMessage({id:"pages.setting.enableAutoLoginTips"}),children:(0,e.jsx)(n.Z,{disabled:!0})})]})})})]})})})},te=ae}}]);
