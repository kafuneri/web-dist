!function(){function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy.fc0c8bfe.js","./Folder-legacy.04c515b7.js","./index-legacy.0bf188a7.js","./index-legacy.ecbf20ad.js","./ImageWithError-legacy.6e179fda.js","./icon-legacy.1a968c87.js","./helper-legacy.61123a76.js"],(function(n){"use strict";var r,o,i,a,l,u,c,f,s,b,d,g,h,p,m,y,j,v,w,x,$,S,k,O,I,A,C,P,_,M;return{setters:[function(e){r=e.bI,o=e.h,i=e.al,a=e.l,l=e.ax,u=e.m,c=e.k,f=e.aM,s=e.b,b=e.a4,d=e.L,g=e.az,h=e.dk,p=e.t,m=e.aO,y=e.aC,j=e.aw,v=e.S,w=e.av,x=e.b5,$=e.ad},function(e){S=e.b},function(e){k=e.u},function(e){O=e.q},function(e){I=e.I},function(e){A=e.g,C=e.O},function(e){P=e.u,_=e.I,M=e.a}],execute:function(){n("G",(function(n){if((0,r().isHide)(n.obj))return null;var z=k().setPathAs,E=o(l,{get color(){return i()},get boxSize(){return"".concat(parseInt(a.grid_item_size)-30,"px")},get as(){return A(n.obj)}}),D=t(u(!1),2),G=D[0],H=D[1],K=c((function(){return f()&&(G()||n.obj.selected)})),L=S({id:1}).show,W=s(),q=W.pushHref,F=W.to,T=M().isMouseSupported,U=P();return o($.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){var t,r,i;return o(b,(r={get classList(){return{selected:!!n.obj.selected}},class:"grid-item viselect-item"},(i={})[t="data-index"]=i[t]||{},i[t].get=function(){return n.index},e(r,"w","$full"),e(r,"p","$1"),e(r,"spacing","$1"),e(r,"rounded","$lg"),e(r,"transition","all 0.3s"),"_hover",i._hover=i._hover||{},i._hover.get=function(){return{transform:"scale(1.06)",bgColor:d()}},e(r,"as",O),"href",i.href=i.href||{},i.href.get=function(){return n.obj.name},"cursor",i.cursor=i.cursor||{},i.cursor.get=function(){return T()||f()&&!U()?"default":"pointer"},"bgColor",i.bgColor=i.bgColor||{},i.bgColor.get=function(){return g((function(){return!!n.obj.selected}),!0)()?d():void 0},e(r,"on:dblclick",(function(e){T()&&(e.ctrlKey||e.metaKey||e.shiftKey||F(q(n.obj.name)))})),e(r,"on:click",(function(e){if(T())return e.preventDefault();f()&&(e.preventDefault(),U()?F(q(n.obj.name)):h(n.index,!n.obj.selected))})),e(r,"onMouseEnter",(function(){H(!0),z(n.obj.name,n.obj.is_dir,!0)})),e(r,"onMouseLeave",(function(){H(!1)})),e(r,"onContextMenu",(function(e){p((function(){m(!1),h(n.index,!0,!0)})),L(e,{props:n.obj})})),"children",i.children=i.children||{},i.children.get=function(){return[o(y,{class:"item-thumbnail",get h(){return"".concat(parseInt(a.grid_item_size),"px")},w:"$full","on:dblclick":function(e){T()&&n.obj.type===C.IMAGE&&(e.stopPropagation(),e.preventDefault(),j.emit("gallery",n.obj.name))},"on:click":function(e){T()||f()&&!U()||n.obj.type===C.IMAGE&&(e.stopPropagation(),e.preventDefault(),j.emit("gallery",n.obj.name))},pos:"relative",get children(){return[o(v,{get when(){return K()},get children(){return o(_,{pos:"absolute",left:"$1",top:"$1","on:click":function(e){e.stopPropagation()},get checked(){return n.obj.selected},onChange:function(e){h(n.index,e.target.checked)}})}}),o(v,{get when(){return n.obj.thumb},fallback:E,get children(){return o(I,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return o(w,{size:"lg"})},fallbackErr:E,get src(){return n.obj.thumb},loading:"lazy"})}})]}}),o(x,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return n.obj.name},get children(){return n.obj.name}})]},function(e,t){for(var n in t)(i=t[n]).configurable=i.enumerable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,n,i);if(Object.getOwnPropertySymbols)for(var r=Object.getOwnPropertySymbols(t),o=0;o<r.length;o++){var i,a=r[o];(i=t[a]).configurable=i.enumerable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,a,i)}}(r,i),r))}})}))}}}))}();
