!function(){function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return e};var e={},r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{s({},"")}catch(O){s=function(t,n,e){return t[n]=e}}function f(t,n,e,r){var o=n&&n.prototype instanceof d?n:d,i=Object.create(o.prototype),u=new E(r||[]);return i._invoke=function(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return S()}for(e.method=o,e.arg=i;;){var u=e.delegate;if(u){var a=x(u,e);if(a){if(a===h)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var c=l(t,n,e);if("normal"===c.type){if(r=e.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r="completed",e.method="throw",e.arg=c.arg)}}}(t,e,u),i}function l(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(O){return{type:"throw",arg:O}}}e.wrap=f;var h={};function d(){}function y(){}function p(){}var v={};s(v,u,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(j([])));m&&m!==r&&o.call(m,u)&&(v=m);var w=p.prototype=d.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(n){s(t,n,(function(t){return this._invoke(n,t)}))}))}function _(n,e){function r(i,u,a,c){var s=l(n[i],n,u);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"==t(h)&&o.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(h).then((function(t){f.value=t,a(f)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var i;this._invoke=function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}}function x(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,x(t,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=l(e,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,h;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,h):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function k(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function L(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function j(t){if(t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,r=function n(){for(;++e<t.length;)if(o.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return r.next=r}}return{next:S}}function S(){return{value:void 0,done:!0}}return y.prototype=p,s(w,"constructor",p),s(p,"constructor",y),y.displayName=s(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===y||"GeneratorFunction"===(n.displayName||n.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},b(_.prototype),s(_.prototype,a,(function(){return this})),e.AsyncIterator=_,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var u=new _(f(t,n,r,o),i);return e.isGeneratorFunction(n)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},b(w),s(w,c,"Generator"),s(w,u,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=j,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,r){return u.type="throw",u.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],u=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var a=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(a&&c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=n,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(u)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),h},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),L(e),h}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;L(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:j(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},e}function e(t,n,e,r,o,i,u){try{var a=t[i](u),c=a.value}catch(s){return void e(s)}a.done?n(c):Promise.resolve(c).then(r,o)}function r(t){return function(){var n=this,r=arguments;return new Promise((function(o,i){var u=t.apply(n,r);function a(t){e(u,o,i,a,c,"next",t)}function c(t){e(u,o,i,a,c,"throw",t)}a(void 0)}))}}function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,i=[],u=!0,a=!1;try{for(e=e.call(t);!(u=(r=e.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(c){a=!0,o=c}finally{try{u||null==e.return||e.return()}finally{if(a)throw o}}return i}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return i(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}System.register(["./index-legacy.fc0c8bfe.js","./useTitle-legacy.68cc5769.js","./index-legacy.97a85df7.js","./SettingItem-legacy.2dcd942f.js","./index-legacy.ecbf20ad.js","./index-legacy.63f082bb.js","./item_type-legacy.d1f1c701.js"],(function(t){"use strict";var e,i,u,a,c,s,f,l,h,d,y,p,v,g,m,w,b,_;return{setters:[function(t){e=t.a,i=t.m,u=t.aW,a=t.b9,c=t.bI,s=t.h,f=t.bP,l=t.d1,h=t.E,d=t.C,y=t.ba,p=t.n,v=t.I,g=t.ae,m=t.a8},function(t){w=t.b},function(t){b=t.G},function(t){_=t.I},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=e();w("manage.sidemenu.other");var x=o(i(""),2),k=x[0],L=x[1],E=o(i(""),2),j=E[0],S=E[1],O=o(i(""),2),C=O[0],$=O[1],I=o(i(""),2),A=I[0],G=I[1],N=o(i(""),2),P=N[0],q=N[1],T=o(i(""),2),F=T[0],Y=T[1],M=o(i(""),2),R=M[0],U=M[1],W=o(i([]),2),z=W[0],B=W[1],D=o(u((function(){return a.get("/admin/setting/list?groups=".concat(b.ARIA2,",").concat(b.SINGLE))})),2),H=D[0],J=D[1],K=o(u((function(){return a.post("/admin/setting/set_aria2",{uri:k(),secret:j()})})),2),Q=K[0],V=K[1],X=o(u((function(){return a.post("/admin/setting/set_qbit",{url:C(),seedtime:A()})})),2),Z=X[0],tt=X[1],nt=o(u((function(){return a.post("/admin/setting/set_transmission",{uri:P(),seedtime:F()})})),2),et=nt[0],rt=nt[1],ot=function(){var t=r(n().mark((function t(){var e;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J();case 2:e=t.sent,y(e,(function(t){var n,e,r,o,i,u,a;L((null===(n=t.find((function(t){return"aria2_uri"===t.key})))||void 0===n?void 0:n.value)||""),S((null===(e=t.find((function(t){return"aria2_secret"===t.key})))||void 0===e?void 0:e.value)||""),U((null===(r=t.find((function(t){return"token"===t.key})))||void 0===r?void 0:r.value)||""),$((null===(o=t.find((function(t){return"qbittorrent_url"===t.key})))||void 0===o?void 0:o.value)||""),G((null===(i=t.find((function(t){return"qbittorrent_seedtime"===t.key})))||void 0===i?void 0:i.value)||""),q((null===(u=t.find((function(t){return"transmission_uri"===t.key})))||void 0===u?void 0:u.value)||""),Y((null===(a=t.find((function(t){return"transmission_seedtime"===t.key})))||void 0===a?void 0:a.value)||""),B(t)}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();ot();var it=o(u((function(){return a.post("/admin/setting/reset_token")})),2),ut=it[0],at=it[1],ct=c().copy;return s(m,{get loading(){return H()},get children(){return[s(f,{mb:"$2",get children(){return t("settings_other.aria2")}}),s(l,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[s(_,h((function(){return z().find((function(t){return"aria2_uri"===t.key}))}),{get value(){return k()},onChange:function(t){return L(t)}})),s(_,h((function(){return z().find((function(t){return"aria2_secret"===t.key}))}),{get value(){return j()},onChange:function(t){return S(t)}}))]}}),s(d,{my:"$2",get loading(){return Q()},onClick:(i=r(n().mark((function e(){var r;return n().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,V();case 2:r=n.sent,y(r,(function(n){p.success("".concat(t("settings_other.aria2_version")," ").concat(n))}));case 4:case"end":return n.stop()}}),e)}))),function(){return i.apply(this,arguments)}),get children(){return t("settings_other.set_aria2")}}),s(f,{my:"$2",get children(){return t("settings_other.qbittorrent")}}),s(l,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[s(_,h((function(){return z().find((function(t){return"qbittorrent_url"===t.key}))}),{get value(){return C()},onChange:function(t){return $(t)}})),s(_,h((function(){return z().find((function(t){return"qbittorrent_seedtime"===t.key}))}),{get value(){return A()},onChange:function(t){return G(t)}}))]}}),s(d,{my:"$2",get loading(){return Z()},onClick:(o=r(n().mark((function t(){var e;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,tt();case 2:e=t.sent,y(e,(function(t){p.success(t)}));case 4:case"end":return t.stop()}}),t)}))),function(){return o.apply(this,arguments)}),get children(){return t("settings_other.set_qbit")}}),s(f,{my:"$2",get children(){return t("settings_other.transmission")}}),s(l,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[s(_,h((function(){return z().find((function(t){return"transmission_uri"===t.key}))}),{get value(){return P()},onChange:function(t){return q(t)}})),s(_,h((function(){return z().find((function(t){return"transmission_seedtime"===t.key}))}),{get value(){return F()},onChange:function(t){return Y(t)}}))]}}),s(d,{my:"$2",get loading(){return et()},onClick:(e=r(n().mark((function t(){var e;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,rt();case 2:e=t.sent,y(e,(function(t){p.success(t)}));case 4:case"end":return t.stop()}}),t)}))),function(){return e.apply(this,arguments)}),get children(){return t("settings_other.set_transmission")}}),s(f,{my:"$2",get children(){return t("settings.token")}}),s(v,{get value(){return R()},readOnly:!0}),s(g,{my:"$2",spacing:"$2",get children(){return[s(d,{onClick:function(){ct(R())},get children(){return t("settings_other.copy_token")}}),s(d,{colorScheme:"danger",get loading(){return ut()},onClick:(e=r(n().mark((function e(){var r;return n().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,at();case 2:r=n.sent,y(r,(function(n){p.success(t("settings_other.reset_token_success")),U(n)}));case 4:case"end":return n.stop()}}),e)}))),function(){return e.apply(this,arguments)}),get children(){return t("settings_other.reset_token")}})];var e}})];var e,o,i}})}))}}}))}();
