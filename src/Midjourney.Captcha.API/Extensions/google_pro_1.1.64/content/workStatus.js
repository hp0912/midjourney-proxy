(()=>{"use strict";new(function(){function t(){var t=this;window.addEventListener("message",(function(n){var i=n.data,a=i.crx,e=i.type;"yesCaptcha"===a&&("workStatusChange"==e&&(null==i?void 0:i.result)&&t.updateStatus(i.result),"initWorkStatus"==e&&(null==i?void 0:i.result)&&t.initConfig(null==i?void 0:i.result))}))}return t.prototype.initConfig=function(t){this.flagName=t,window[this.flagName]="unknown"},t.prototype.updateStatus=function(t){this.flagName&&(window[this.flagName]=t)},t}())})();