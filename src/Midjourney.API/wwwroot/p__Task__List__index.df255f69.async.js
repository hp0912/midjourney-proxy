"use strict";(self.webpackChunkmidjourney_proxy_admin=self.webpackChunkmidjourney_proxy_admin||[]).push([[502],{12154:function(ee,b,i){i.r(b),i.d(b,{default:function(){return me}});var P=i(97857),y=i.n(P),F=i(15009),h=i.n(F),v=i(99289),S=i.n(v),N=i(5574),p=i.n(N),D=i(27986),A=i(80854),I=i(66309),$=i(38703),ae=i(83062),R=i(11499),x=i(74330),w=i(4393),n=i(26412),se=i(86250),e=i(85893),te=function(V){var r=V.record,l=(0,A.useIntl)(),C=sessionStorage.getItem("mj-image-prefix")||"",W=function(a){var g="default";return a=="NOT_START"?g="default":a=="SUBMITTED"?g="lime":a=="MODAL"?g="warning":a=="IN_PROGRESS"?g="processing":a=="FAILURE"?g="error":a=="SUCCESS"?g="success":a=="CANCEL"&&(g="magenta"),(0,e.jsx)(I.Z,{color:g,children:r.displays.status})},k=function(a){var g=0;a&&a.indexOf("%")>0&&(g=parseInt(a.substring(0,a.indexOf("%"))));var T="normal";return r.status=="SUCCESS"?T="success":r.status=="FAILURE"&&(T="exception"),(0,e.jsx)("div",{style:{width:200},children:(0,e.jsx)($.Z,{percent:g,status:T})})},f=function(a){return!a||a.length<30?a:(0,e.jsx)(ae.Z,{title:a,children:a.substring(0,30)+"..."})},U=function(a){return a&&(0,e.jsx)(R.Z,{width:200,src:C+a,placeholder:(0,e.jsx)(x.Z,{tip:"Loading",size:"large"})})},B=function(a){return a&&(0,e.jsx)("video",{width:"200",controls:!0,src:C+a,placeholder:(0,e.jsx)(x.Z,{tip:"Loading",size:"large"})})},O=function(a){return a=="NIJI_JOURNEY"?(0,e.jsx)(I.Z,{color:"green",children:"niji\u30FBjourney"}):a=="INSIGHT_FACE"||a=="FACE_SWAP"||a=="FACE_SWAP_VIDEO"?(0,e.jsx)(I.Z,{color:"volcano",children:"InsightFace"}):a=="MID_JOURNEY"?(0,e.jsx)(I.Z,{color:"blue",children:"Midjourney"}):"-"},z=function(a){if(!(a==null||!a))return(0,e.jsx)(I.Z,{color:"green",children:l.formatMessage({id:"pages.yes"})})};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(w.Z,{type:"inner",title:l.formatMessage({id:"pages.account.basicInfo"}),style:{margin:"10px"},children:(0,e.jsxs)(n.Z,{column:2,children:[(0,e.jsx)(n.Z.Item,{label:"ID",children:r.id}),(0,e.jsx)(n.Z.Item,{label:l.formatMessage({id:"pages.task.type"}),children:r.displays.action}),(0,e.jsx)(n.Z.Item,{label:l.formatMessage({id:"pages.task.status"}),children:W(r.status)}),(0,e.jsx)(n.Z.Item,{label:l.formatMessage({id:"pages.task.progress"}),children:k(r.progress)}),(0,e.jsx)(n.Z.Item,{label:l.formatMessage({id:"pages.task.prompt"}),children:f(r.prompt)}),(0,e.jsx)(n.Z.Item,{label:l.formatMessage({id:"pages.task.promptEn"}),children:f(r.promptEn)}),(0,e.jsx)(n.Z.Item,{label:l.formatMessage({id:"pages.task.description"}),children:f(r.description)}),(0,e.jsx)(n.Z.Item,{label:l.formatMessage({id:"pages.task.submitTime"}),children:r.displays.submitTime}),(0,e.jsx)(n.Z.Item,{label:l.formatMessage({id:"pages.task.startTime"}),children:r.displays.startTime}),(0,e.jsx)(n.Z.Item,{label:l.formatMessage({id:"pages.task.finishTime"}),children:r.displays.finishTime}),(0,e.jsx)(n.Z.Item,{label:l.formatMessage({id:"pages.task.failReason"}),children:f(r.failReason)}),(0,e.jsx)(n.Z.Item,{label:l.formatMessage({id:"pages.task.state"}),children:f(r.state)}),r.action==="SWAP_VIDEO_FACE"?(0,e.jsx)(n.Z.Item,{label:l.formatMessage({id:"pages.task.video"}),children:(0,e.jsx)(se.Z,{vertical:!0,children:B(r.imageUrl)})}):(0,e.jsx)(n.Z.Item,{label:l.formatMessage({id:"pages.task.image"}),children:U(r.imageUrl)})]})}),(0,e.jsx)(w.Z,{type:"inner",title:l.formatMessage({id:"pages.task.extendedInfo"}),style:{margin:"10px"},children:(0,e.jsxs)(n.Z,{column:2,children:[(0,e.jsx)(n.Z.Item,{label:l.formatMessage({id:"pages.task.botType"}),children:O(r.botType)}),(0,e.jsx)(n.Z.Item,{label:"Nonce",children:r.nonce}),(0,e.jsx)(n.Z.Item,{label:l.formatMessage({id:"pages.account.channelId"}),children:r.properties.discordInstanceId}),(0,e.jsx)(n.Z.Item,{label:l.formatMessage({id:"pages.task.instanceId"}),children:r.properties.discordInstanceId}),(0,e.jsx)(n.Z.Item,{label:"Hash",children:r.properties.messageHash}),(0,e.jsx)(n.Z.Item,{label:l.formatMessage({id:"pages.task.messageContent"}),children:f(r.properties.messageContent)}),(0,e.jsx)(n.Z.Item,{label:l.formatMessage({id:"pages.task.finalPrompt"}),children:f(r.properties.finalPrompt)}),(0,e.jsx)(n.Z.Item,{label:l.formatMessage({id:"pages.task.finalPromptZh"}),children:f(r.promptCn||"-")}),(0,e.jsx)(n.Z.Item,{label:l.formatMessage({id:"pages.task.actionId"}),children:f(r.properties.custom_id||"-")}),(0,e.jsx)(n.Z.Item,{label:l.formatMessage({id:"pages.task.modalConfirm"}),children:z(r.properties.needModel)||"-"}),(0,e.jsx)(n.Z.Item,{label:l.formatMessage({id:"pages.task.imageSeed"}),children:r.seed||"-"}),(0,e.jsx)(n.Z.Item,{label:l.formatMessage({id:"pages.task.notifyHook"}),children:f(r.properties.notifyHook||"-")}),(0,e.jsx)(n.Z.Item,{label:l.formatMessage({id:"pages.task.ip"}),children:r.clientIp||"-"})]})})]})},re=te,H=i(66927),ie=i(82061),ne=i(90930),le=i(17873),oe=i(53025),de=i(16568),ue=i(86738),ce=i(14726),M=i(67294),ge=function(){var V=(0,M.useState)(!1),r=p()(V,2),l=r[0],C=r[1],W=(0,M.useState)({}),k=p()(W,2),f=k[0],U=k[1],B=(0,M.useState)(""),O=p()(B,2),z=O[0],j=O[1],a=(0,M.useState)({}),g=p()(a,2),T=g[0],J=g[1],pe=(0,M.useState)(1e3),K=p()(pe,2),he=K[0],ve=K[1],Ie=oe.Z.useForm(),je=p()(Ie,1),Me=je[0],u=(0,A.useIntl)(),Se=sessionStorage.getItem("mj-image-prefix")||"",xe=de.ZP.useNotification(),Y=p()(xe,2),Q=Y[0],Ze=Y[1],X=(0,M.useRef)(),Ce=function(){U({}),J({}),C(!1)},Te=function(t,s,o,d){Me.resetFields(),j(t),U(s),J(o),ve(d),C(!0)},Ee=function(){var c=S()(h()().mark(function t(s){var o,d;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.prev=0,m.next=3,(0,H._5)(s);case 3:o=m.sent,o.success?(Q.success({message:"success",description:u.formatMessage({id:"pages.task.deleteSuccess"})}),(d=X.current)===null||d===void 0||d.reload()):Q.error({message:"error",description:o.message}),m.next=10;break;case 7:m.prev=7,m.t0=m.catch(0),console.error(m.t0);case 10:return m.prev=10,m.finish(10);case 12:case"end":return m.stop()}},t,null,[[0,7,10,12]])}));return function(s){return c.apply(this,arguments)}}(),be=(0,M.useState)(!0),q=p()(be,2),G=q[0],ye=q[1],_=function(){ye(!1)},Re=function(t){return t&&(0,e.jsx)("video",{width:"200",controls:!0,src:Se+t,placeholder:(0,e.jsx)(x.Z,{tip:"Loading",size:"large"})})},Ae=[{title:"ID",dataIndex:"id",width:160,align:"center",fixed:"left",render:function(t,s){return(0,e.jsx)("a",{onClick:function(){return Te(u.formatMessage({id:"pages.task.info"}),(0,e.jsx)(re,{record:s}),null,1100)},children:t})}},{title:u.formatMessage({id:"pages.task.type"}),dataIndex:"action",width:140,align:"center",request:function(){var c=S()(h()().mark(function s(){return h()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",[{label:"Imagine",value:"IMAGINE"},{label:"Upscale",value:"UPSCALE"},{label:"Variation",value:"VARIATION"},{label:"Zoom",value:"ZOOM"},{label:"Pan",value:"PAN"},{label:"Describe",value:"DESCRIBE"},{label:"Blend",value:"BLEND"},{label:"Shorten",value:"SHORTEN"},{label:"SwapFace",value:"SWAP_FACE"},{label:"SwapVideoFace",value:"SWAP_VIDEO_FACE"}]);case 1:case"end":return d.stop()}},s)}));function t(){return c.apply(this,arguments)}return t}(),render:function(t,s){return s.displays.action}},{title:u.formatMessage({id:"pages.task.preview"}),dataIndex:"imageUrl",width:80,align:"center",hideInSearch:!0,render:function(t,s,o){return s.action==="SWAP_VIDEO_FACE"?s.thumbnailUrl&&(0,e.jsx)(R.Z,{style:{borderRadius:0,maxWidth:120,objectFit:"cover",cursor:"pointer"},height:60,src:s.thumbnailUrl,preview:!1,onClick:function(){window.open(s.imageUrl)},loading:"lazy",onLoad:_,placeholder:(0,e.jsx)("div",{style:{width:120,height:60,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,e.jsx)(x.Z,{spinning:G})})},o):(s.thumbnailUrl||s.imageUrl)&&(0,e.jsx)(R.Z.PreviewGroup,{items:s.images||[],children:(0,e.jsx)(R.Z,{style:{borderRadius:0,maxWidth:120,objectFit:"cover"},height:60,src:s.thumbnailUrl||s.imageUrl,preview:{src:s.imageUrl,mask:(0,e.jsx)(x.Z,{spinning:G})},loading:"lazy",onLoad:_,placeholder:(0,e.jsx)("div",{style:{width:120,height:60,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,e.jsx)(x.Z,{spinning:G})})},o)})}},{title:u.formatMessage({id:"pages.task.instanceId"}),dataIndex:"instanceId",width:180,align:"center",render:function(t,s){return s.properties.discordInstanceId}},{title:u.formatMessage({id:"pages.task.submitTime"}),dataIndex:"submitTime",width:160,hideInSearch:!0,align:"center",render:function(t,s){return s.displays.submitTime}},{title:u.formatMessage({id:"pages.task.status"}),dataIndex:"status",width:90,align:"center",request:function(){var c=S()(h()().mark(function s(){return h()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",[{label:u.formatMessage({id:"pages.task.NOT_START"}),value:"NOT_START"},{label:u.formatMessage({id:"pages.task.SUBMITTED"}),value:"SUBMITTED"},{label:u.formatMessage({id:"pages.task.MODAL"}),value:"MODAL"},{label:u.formatMessage({id:"pages.task.IN_PROGRESS"}),value:"IN_PROGRESS"},{label:u.formatMessage({id:"pages.task.FAILURE"}),value:"FAILURE"},{label:u.formatMessage({id:"pages.task.SUCCESS"}),value:"SUCCESS"},{label:u.formatMessage({id:"pages.task.CANCEL"}),value:"CANCEL"}]);case 1:case"end":return d.stop()}},s)}));function t(){return c.apply(this,arguments)}return t}(),render:function(t,s){var o="default";return t=="NOT_START"?o="default":t=="SUBMITTED"?o="lime":t=="MODAL"?o="warning":t=="IN_PROGRESS"?o="processing":t=="FAILURE"?o="error":t=="SUCCESS"?o="success":t=="CANCEL"&&(o="magenta"),(0,e.jsx)(I.Z,{color:o,children:s.displays.status})}},{title:u.formatMessage({id:"pages.task.progress"}),dataIndex:"progress",width:130,showInfo:!1,hideInSearch:!0,render:function(t,s){var o=0;t&&t.indexOf("%")>0&&(o=parseInt(t.substring(0,t.indexOf("%"))));var d="normal";return s.status=="SUCCESS"?d="success":s.status=="FAILURE"&&(d="exception"),(0,e.jsx)($.Z,{percent:o,status:d,size:"small"})}},{title:u.formatMessage({id:"pages.task.description"}),dataIndex:"description",width:250,ellipsis:!0},{title:u.formatMessage({id:"pages.task.failReason"}),dataIndex:"failReason",width:220,ellipsis:!0},{title:u.formatMessage({id:"pages.operation"}),dataIndex:"operation",width:100,key:"operation",fixed:"right",align:"center",hideInSearch:!0,render:function(t,s){return(0,e.jsx)(ue.Z,{title:u.formatMessage({id:"pages.task.delete"}),description:u.formatMessage({id:"pages.task.deleteTitle"}),onConfirm:function(){return Ee(s.id)},children:(0,e.jsx)(ce.ZP,{danger:!0,icon:(0,e.jsx)(ie.Z,{})})})}}];return(0,e.jsxs)(ne._z,{children:[Ze,(0,e.jsx)(w.Z,{children:(0,e.jsx)(le.Z,{columns:Ae,scroll:{x:1e3},search:{defaultCollapsed:!0},pagination:{pageSize:10,showQuickJumper:!1,showSizeChanger:!1},rowKey:"id",actionRef:X,request:function(){var c=S()(h()().mark(function t(s){var o,d,L;return h()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,(0,H.Pn)(y()(y()({},s),{},{pageNumber:s.current-1}));case 2:return o=Z.sent,d=o.list.map(function(E){return E.imageUrl||""}).filter(function(E){return E!=""}),L=o.list,L.forEach(function(E,ke){E.images=d}),Z.abrupt("return",{data:L,total:o.pagination.total,success:!0});case 7:case"end":return Z.stop()}},t)}));return function(t){return c.apply(this,arguments)}}()})}),(0,e.jsx)(D.Z,{title:z,modalVisible:l,hideModal:Ce,modalContent:f,footer:T,modalWidth:he})]})},me=ge},27986:function(ee,b,i){var P=i(17910),y=i(85893),F=function(v){var S=v.title,N=v.modalVisible,p=v.hideModal,D=v.modalContent,A=v.footer,I=v.modalWidth;return(0,y.jsx)(P.Z,{title:S,open:N,onCancel:p,footer:A,width:I,children:D})};b.Z=F}}]);