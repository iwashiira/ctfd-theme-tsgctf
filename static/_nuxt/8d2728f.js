(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{583:function(t,e,n){"use strict";var r=n(1),o=n(584).start;r({target:"String",proto:!0,forced:n(585)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},584:function(t,e,n){"use strict";var r=n(5),o=n(98),c=n(17),l=n(323),f=n(46),d=r(l),h=r("".slice),v=Math.ceil,m=function(t){return function(e,n,r){var l,m,O=c(f(e)),w=o(n),y=O.length,x=void 0===r?" ":c(r);return w<=y||""===x?O:((m=d(x,v((l=w-y)/x.length))).length>l&&(m=h(m,0,l)),t?O+m:m+O)}};t.exports={start:m(!1),end:m(!0)}},585:function(t,e,n){"use strict";var r=n(61);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},588:function(t,e,n){"use strict";var r=n(1),o=n(324).trim;r({target:"String",proto:!0,forced:n(589)("trim")},{trim:function(){return o(this)}})},589:function(t,e,n){"use strict";var r=n(117).PROPER,o=n(6),c=n(325);t.exports=function(t){return o((function(){return!!c[t]()||"​᠎"!=="​᠎"[t]()||r&&c[t].name!==t}))}},590:function(t,e,n){"use strict";var r=n(118),o=n(9),c=n(5),l=n(154),f=n(19),d=n(49),h=n(198),v=n(46),m=n(197),O=n(200),w=n(98),y=n(17),x=n(82),_=n(152),j=n(155),C=n(153),S=n(199),N=n(6),P=S.UNSUPPORTED_Y,k=4294967295,D=Math.min,R=[].push,E=c(/./.exec),M=c(R),T=c("".slice),z=!N((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));l("split",(function(t,e,n){var c;return c="c"==="abbc".split(/(b)*/)[1]||4!=="test".split(/(?:)/,-1).length||2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var c=y(v(this)),l=void 0===n?k:n>>>0;if(0===l)return[];if(void 0===t)return[c];if(!h(t))return o(e,c,t,l);for(var f,d,m,output=[],O=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),w=0,x=new RegExp(t.source,O+"g");(f=o(C,x,c))&&!((d=x.lastIndex)>w&&(M(output,T(c,w,f.index)),f.length>1&&f.index<c.length&&r(R,output,_(f,1)),m=f[0].length,w=d,output.length>=l));)x.lastIndex===f.index&&x.lastIndex++;return w===c.length?!m&&E(x,"")||M(output,""):M(output,T(c,w)),output.length>l?_(output,0,l):output}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:o(e,this,t,n)}:e,[function(e,n){var r=v(this),l=d(e)?void 0:x(e,t);return l?o(l,e,r,n):o(c,y(r),e,n)},function(t,r){var o=f(this),l=y(t),d=n(c,o,l,r,c!==e);if(d.done)return d.value;var h=m(o,RegExp),v=o.unicode,x=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(P?"g":"y"),_=new h(P?"^(?:"+o.source+")":o,x),C=void 0===r?k:r>>>0;if(0===C)return[];if(0===l.length)return null===j(_,l)?[l]:[];for(var p=0,q=0,S=[];q<l.length;){_.lastIndex=P?0:q;var N,R=j(_,P?T(l,q):l);if(null===R||(N=D(w(_.lastIndex+(P?q:0)),l.length))===p)q=O(l,q,v);else{if(M(S,T(l,p,q)),S.length===C)return S;for(var i=1;i<=R.length-1;i++)if(M(S,R[i]),S.length===C)return S;q=p=N}}return M(S,T(l,p)),S}]}),!z,P)},591:function(t,e,n){"use strict";n(35),n(23),n(28),n(37),n(26),n(38);var r=n(13),o=(n(322),n(583),n(15),n(54),n(80),n(53));function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f={props:{klass:{required:!1,default:"",type:String},datetime:{required:!0,type:Date},autoUpdate:{required:!0,type:Number}},computed:l(l({},Object(o.c)(["isStatic"])),{},{date:function(){return new Date(this.datetime)},dateText:function(){var t=(this.date.getUTCMonth()+1).toString().padStart(2,"0"),e=this.date.getUTCDate().toString().padStart(2,"0"),n=this.date.getUTCHours().toString().padStart(2,"0"),r=this.date.getUTCMinutes().toString().padStart(2,"0"),o=this.date.getUTCSeconds().toString().padStart(2,"0");return"".concat(t,"/").concat(e," ").concat(n,":").concat(r,":").concat(o)}})},d=n(60),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return t.isStatic?e("time",{class:t.klass,attrs:{datetime:t.datetime}},[t._v("\n\t"+t._s(t.dateText)+"\n")]):e("timeago",{class:t.klass,attrs:{datetime:t.datetime,"auto-update":t.autoUpdate}})}),[],!1,null,null,null);e.a=component.exports},598:function(t,e,n){var content=n(626);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("6b993fe4",content,!0,{sourceMap:!1})},625:function(t,e,n){"use strict";n(598)},626:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,'.Notifications .lang-switcher{font-size:1.5rem;margin-bottom:5rem;text-align:center}.Notifications .lang-switcher .lang{cursor:pointer;display:inline-block}.Notifications .lang-switcher .lang.active{border-bottom:1.5px solid #fff}.Notifications .lang-switcher .lang-name,.Notifications .lang-switcher img{vertical-align:middle}.Notifications .notification{border-radius:3px;box-sizing:border-box;color:#fff;margin:1rem auto;max-width:50rem;position:relative;width:100%}.Notifications .notification .title{font-family:"Fredoka One",cursive;font-size:2rem;font-weight:300;letter-spacing:1px;margin-top:3rem;text-align:center;text-transform:uppercase;word-break:break-word}.Notifications .notification .date{font-size:1rem;margin-bottom:1rem;text-align:center}.Notifications .notification .content{font-family:"Roboto";font-size:1.5rem;text-align:justify;white-space:pre-line}.Notifications .no-notification{font-family:"Fredoka One",cursive;font-size:2.5rem;font-weight:300;line-height:2rem;padding:0;text-align:center}',""]),r.locals={},t.exports=r},653:function(t,e,n){"use strict";n.r(e);n(35),n(23),n(28),n(15),n(37),n(26),n(38);var r=n(13),o=n(4),c=(n(39),n(590),n(588),n(29),n(591)),l=n(53),f=(n(322),{name:"BellRingIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}),d=n(60),h=Object(d.a)(f,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon bell-ring-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21M19.75,3.19L18.33,4.61C20.04,6.3 21,8.6 21,11H23C23,8.07 21.84,5.25 19.75,3.19M1,11H3C3,8.6 3.96,6.3 5.67,4.61L4.25,3.19C2.16,5.25 1,8.07 1,11Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports;function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var O={components:{IsoTimeago:c.a,BellRing:h},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.store.dispatch("notifications/updateNotifications",t);case 2:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Notifications - TSG LIVE! 11 CTF"}},computed:m(m({},Object(l.b)({notifications:"notifications/getNotifications"})),Object(l.c)(["language"])),methods:{getContent:function(t){var e=t.content.split(/^---$/m);return e.length<2||"ja"!==this.language?e[0].trim():e[1].trim()},enableNotifications:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$OneSignal.showNativePrompt();case 2:t.$store.commit("setIsPushEnabled",!0);case 3:case"end":return e.stop()}}),e)})))()}}},w=(n(625),Object(d.a)(O,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"Notifications"},[t._m(0),t._v(" "),e("div",{staticClass:"lang-switcher"},[e("span",{staticClass:"lang",class:{active:"ja"===t.language},on:{click:function(e){return t.$store.commit("setLanguage","ja")}}},[e("img",{attrs:{src:"https://hatscripts.github.io/circle-flags/flags/jp.svg",width:"15"}}),t._v(" "),e("span",{staticClass:"lang-name"},[t._v("JA")])]),t._v(" /\n\t\t"),e("span",{staticClass:"lang",class:{active:"en"===t.language},on:{click:function(e){return t.$store.commit("setLanguage","en")}}},[e("img",{attrs:{src:"https://hatscripts.github.io/circle-flags/flags/gb.svg",width:"15"}}),t._v(" "),e("span",{staticClass:"lang-name"},[t._v("EN")])])]),t._v(" "),t._l(t.notifications,(function(n,i){return e("div",{key:n.id,staticClass:"notification"},[0!==i?e("hr"):t._e(),t._v(" "),e("div",{staticClass:"title"},[t._v(t._s(n.title))]),t._v(" "),e("div",{staticClass:"date"},[e("iso-timeago",{attrs:{datetime:n.date,"auto-update":60}})],1),t._v(" "),e("div",{staticClass:"content"},[t._v(t._s(t.getContent(n)))])])})),t._v(" "),0===t.notifications.length?e("div",{staticClass:"no-notification"},[t._v("\n\t\tNo notifications yet!\n\t")]):t._e()],2)}),[function(){var t=this._self._c;return t("h2",{staticClass:"title"},[t("span",[this._v("Notifications")])])}],!1,null,null,null));e.default=w.exports}}]);