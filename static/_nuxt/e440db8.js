(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{600:function(e,t,r){var content=r(630);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(151).default)("08f1435a",content,!0,{sourceMap:!1})},629:function(e,t,r){"use strict";r(600)},630:function(e,t,r){var n=r(150)((function(i){return i[1]}));n.push([e.i,".Reset{text-align:center}.Reset .title{margin-bottom:3rem}.Reset .subtitle{font-size:1.5rem;margin-bottom:1rem}",""]),n.locals={},e.exports=n},658:function(e,t,r){"use strict";r.r(t);r(35),r(23),r(28),r(37),r(26),r(38);var n=r(13),o=r(4),c=(r(15),r(27),r(30),r(321),r(195),r(29),r(53));function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var l={asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.store.dispatch("updateCsrfToken",e);case 2:case"end":return t.stop()}}),t)})))()},data:function(){return{isError:!1}},head:function(){return{title:"Reset Password - TSG LIVE! 11 CTF"}},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},Object(c.c)(["isLoggedIn","csrfToken"])),mounted:function(){document.referrer&&("/reset_password"===new URL(document.referrer).pathname&&(this.isError=!0))}},d=l,O=(r(629),r(60)),component=Object(O.a)(d,(function(){this._self._c;return this._m(0)}),[function(){var e=this,t=e._self._c;return t("section",{staticClass:"Reset"},[t("h2",{staticClass:"title"},[t("span",[e._v("Reset Password")])]),e._v(" "),t("p",[e._v("Sorry, please contact an organizer to have your password reset")])])}],!1,null,null,null);t.default=component.exports}}]);