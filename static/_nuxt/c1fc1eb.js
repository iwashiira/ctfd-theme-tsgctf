(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{583:function(t,e,n){"use strict";var r=n(1),o=n(584).start;r({target:"String",proto:!0,forced:n(585)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},584:function(t,e,n){"use strict";var r=n(5),o=n(98),c=n(17),l=n(323),d=n(46),f=r(l),m=r("".slice),h=Math.ceil,v=function(t){return function(e,n,r){var l,v,x=c(d(e)),w=o(n),y=x.length,O=void 0===r?" ":c(r);return w<=y||""===O?x:((v=f(O,h((l=w-y)/O.length))).length>l&&(v=m(v,0,l)),t?x+v:v+x)}};t.exports={start:v(!1),end:v(!0)}},585:function(t,e,n){"use strict";var r=n(61);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},607:function(t,e,n){var content=n(649);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("fcfa0f56",content,!0,{sourceMap:!1})},648:function(t,e,n){"use strict";n(607)},649:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,'.Index{align-items:center;display:flex;height:calc(100vh - 4rem);justify-content:center;margin:0 auto;text-align:center}.Index .index-content{max-width:100%}.Index .ctf-logo{-webkit-text-fill-color:transparent;animation:blinkLogo 10s infinite;animation-timing-function:step-end;background:linear-gradient(90deg,#974dff,#29d277);-webkit-background-clip:text;background-clip:text;color:#0096fa;display:block;font-family:"Fredoka One",cursive;font-size:8rem;font-weight:300;letter-spacing:1px;mix-blend-mode:screen;text-shadow:0 0 3px var(--shadow-color),0 0 10px var(--shadow-color),0 0 20px var(--shadow-color),0 0 30px var(--shadow-color),0 0 40px var(--shadow-color),0 0 50px var(--shadow-color),0 0 70px var(--shadow-color),0 0 100px var(--shadow-color)}@media (max-width:900px){.Index .ctf-logo{font-size:18vw}}.Index .subtitle{font-family:"Roboto",sans-serif;font-size:1.5rem;margin-top:-1rem;opacity:.3}.Index .buttons{display:flex;justify-content:center;margin-top:1rem}.Index .button{border-radius:9999px;display:block;font-family:"Fredoka One",cursive;font-size:1.5rem;font-weight:300;height:2.6rem;line-height:2.6rem;margin:0 .5rem;width:10rem}.Index .button.login{background:linear-gradient(90deg,#6299a7,#21207d)}.Index .button.register{background:linear-gradient(90deg,#ffc107,#f44336)}.Index .timer{font-family:"Roboto",sans-serif;font-size:4rem;margin-top:1rem}',""]),r.locals={},t.exports=r},665:function(t,e,n){"use strict";n.r(e);n(35),n(23),n(28),n(37),n(26),n(38);var r=n(13),o=(n(583),n(15),n(54),n(80),n(99),n(196)),c=n(53);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var d=new Date("2023-11-25T11:33:00+0900").getTime(),f=new Date("2023-11-25T13:13:00+0900").getTime(),m={components:{IsoLink:o.a},data:function(){return{remainingTime:this.getRemaining()}},head:function(){return{title:"TSG LIVE! 11 CTF"}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({timer:function(){var t=Math.floor(this.remainingTime/1e3/60/60/24).toString().padStart(2,"0"),e=(Math.floor(this.remainingTime/1e3/60/60)%24).toString().padStart(2,"0"),n=(Math.floor(this.remainingTime/1e3/60)%60).toString().padStart(2,"0"),r=(Math.floor(this.remainingTime/1e3)%60).toString().padStart(2,"0");return"".concat(t,":").concat(e,":").concat(n,":").concat(r)}},Object(c.c)(["isLoggedIn"])),mounted:function(){var t=this;this.interval=setInterval((function(){t.remainingTime=t.getRemaining()}),1e3)},destroyed:function(){clearInterval(this.interval)},methods:{getRemaining:function(){var t=Date.now();return t>f?0:t>d?f-t:d-t}}},h=m,v=(n(648),n(60)),component=Object(v.a)(h,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"Index"},[e("div",{staticClass:"index-content"},[e("h1",{staticClass:"ctf-logo"},[t._v("TSG LIVE! 11 CTF")]),t._v(" "),e("p",{staticClass:"subtitle"},[t._v("Pwn, Rev, Web, Crypto, etc...")]),t._v(" "),e("div",{staticClass:"timer"},[t._v(t._s(t.timer))]),t._v(" "),t.isLoggedIn?t._e():e("div",{staticClass:"buttons"},[e("iso-link",{staticClass:"button login",attrs:{to:"/login"}},[t._v("Login")]),t._v(" "),e("iso-link",{staticClass:"button register",attrs:{to:"/register"}},[t._v("Register")])],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);