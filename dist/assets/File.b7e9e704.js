import{h as e,au as T,ax as _,al as P,a1 as o,a4 as l,bP as x,b5 as L,az as v,cl as A,cQ as k,a as w,k as d,cR as D,a5 as f,at as S,aj as $,C as m,ap as V,G as j,aq as R,cw as O,S as g,aI as C,ae as y,cz as z,L as M,cS as F,V as t,W as n,b as B,cA as W,cT as U,m as H,bc as X,Y as G,Z as q,ar as Q}from"./index.8937afbd.js";import{g as Y,O as u}from"./icon.ea8353fb.js";import{o as Z}from"./index.de59fe98.js";import{T as J}from"./Layout.54d6a090.js";const K=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(T,{boxSize:"$20",get fallback(){return e(_,{get color(){return P()},boxSize:"$20",get as(){return Y(o.obj)}})},get src(){return o.obj.thumb}}),e(l,{spacing:"$2",get children(){return[e(x,{size:"lg",css:{wordBreak:"break-all"},get children(){return o.obj.name}}),e(L,{color:"$neutral10",size:"sm",get children(){return[v(()=>A(o.obj.size))," \xB7 ",v(()=>k(o.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),I=()=>{const r=w(),a=d(()=>D(o.obj.name)),{currentObjLink:i}=f();return e(g,{get when(){return a().length},get children(){return e(S,{get children(){return[e($,{as:m,colorScheme:"success",get rightIcon(){return e(_,{as:Z})},get children(){return r("home.preview.open_with")}}),e(V,{get children(){return e(j,{get each(){return a()},children:s=>e(R,{as:"a",target:"_blank",get href(){return O(s.value,{raw_url:o.raw_url,name:o.obj.name,d_url:i(!0)})},get children(){return s.key}})})}})]}})}})},p=r=>{const a=w(),{copyCurrentRawLink:i}=C();return e(K,{get children(){return[e(y,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>i(!0),get children(){return a("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return o.raw_url},target:"_blank",get children(){return a("home.preview.download")}})]}}),e(g,{get when(){return r.openWith},get children(){return e(I,{})}})]}})},N=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),ee=r=>{const{currentObjLink:a}=f(),i=d(()=>O(r.scheme,{raw_url:o.raw_url,name:o.obj.name,d_url:a(!0),ts:!0}));return e(F,{w:"$full",h:"70vh",get children(){return[e(z.iframe,{w:"$full",h:"$full",get src(){return i()}}),e(_,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:J,onClick:()=>{window.open(i(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return M()},p:"$1",boxSize:"$7"})]}})},re=r=>()=>e(ee,{scheme:r}),te=[{name:"HTML render",exts:["html"],component:t(()=>n(()=>import("./html.3e3a0dda.js"),["assets/html.3e3a0dda.js","assets/index.8937afbd.js","assets/index.c4c82a28.css"]))},{name:"Aliyun Video Previewer",type:u.VIDEO,provider:/^Aliyundrive(Open)?$/,component:t(()=>n(()=>import("./aliyun_video.3ce9cb31.js"),["assets/aliyun_video.3ce9cb31.js","assets/index.8937afbd.js","assets/index.c4c82a28.css","assets/icon.ea8353fb.js","assets/index.de59fe98.js","assets/Layout.54d6a090.js","assets/useTitle.17039b30.js","assets/index.39ae3315.js","assets/FolderTree.6d1b387d.js","assets/index.58977aab.js","assets/video_box.cb597406.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.734b2194.js"]))},{name:"Markdown",type:u.TEXT,component:t(()=>n(()=>import("./markdown.440dd643.js"),["assets/markdown.440dd643.js","assets/index.8937afbd.js","assets/index.c4c82a28.css"]))},{name:"Markdown with word wrap",type:u.TEXT,component:t(()=>n(()=>import("./markdown_with_word_wrap.c4a6f34d.js"),["assets/markdown_with_word_wrap.c4a6f34d.js","assets/index.8937afbd.js","assets/index.c4c82a28.css"]))},{name:"Url Open",exts:["url"],component:t(()=>n(()=>import("./url.08fa21f0.js"),["assets/url.08fa21f0.js","assets/index.8937afbd.js","assets/index.c4c82a28.css","assets/icon.ea8353fb.js","assets/index.de59fe98.js","assets/Layout.54d6a090.js","assets/useTitle.17039b30.js","assets/index.39ae3315.js","assets/FolderTree.6d1b387d.js","assets/index.58977aab.js"]))},{name:"Text Editor",type:u.TEXT,exts:["url"],component:t(()=>n(()=>import("./text-editor.23ee1753.js"),["assets/text-editor.23ee1753.js","assets/index.8937afbd.js","assets/index.c4c82a28.css","assets/index.890702c9.js"]))},{name:"Image",type:u.IMAGE,component:t(()=>n(()=>import("./image.5a7e8638.js"),["assets/image.5a7e8638.js","assets/index.8937afbd.js","assets/index.c4c82a28.css","assets/ImageWithError.b3d79dde.js"]))},{name:"Video",type:u.VIDEO,component:t(()=>n(()=>import("./video.de49ac9e.js"),["assets/video.de49ac9e.js","assets/index.8937afbd.js","assets/index.c4c82a28.css","assets/icon.ea8353fb.js","assets/index.de59fe98.js","assets/Layout.54d6a090.js","assets/useTitle.17039b30.js","assets/index.39ae3315.js","assets/FolderTree.6d1b387d.js","assets/index.58977aab.js","assets/video_box.cb597406.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.734b2194.js"]))},{name:"Audio",type:u.AUDIO,component:t(()=>n(()=>import("./audio.1970df30.js"),["assets/audio.1970df30.js","assets/audio.e5b5af14.css","assets/index.8937afbd.js","assets/index.c4c82a28.css","assets/icon.ea8353fb.js","assets/index.de59fe98.js","assets/Layout.54d6a090.js","assets/useTitle.17039b30.js","assets/index.39ae3315.js","assets/FolderTree.6d1b387d.js","assets/index.58977aab.js"]))},{name:"Ipa",exts:["ipa","tipa"],component:t(()=>n(()=>import("./ipa.523eab15.js"),["assets/ipa.523eab15.js","assets/index.8937afbd.js","assets/index.c4c82a28.css","assets/icon.ea8353fb.js","assets/index.de59fe98.js","assets/Layout.54d6a090.js","assets/useTitle.17039b30.js","assets/index.39ae3315.js","assets/FolderTree.6d1b387d.js","assets/index.58977aab.js"]))},{name:"Plist",exts:["plist"],component:t(()=>n(()=>import("./plist.2a5bec84.js"),["assets/plist.2a5bec84.js","assets/index.8937afbd.js","assets/index.c4c82a28.css","assets/icon.ea8353fb.js","assets/index.de59fe98.js","assets/Layout.54d6a090.js","assets/useTitle.17039b30.js","assets/index.39ae3315.js","assets/FolderTree.6d1b387d.js","assets/index.58977aab.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:t(()=>n(()=>import("./aliyun_office.ecb1cadb.js"),["assets/aliyun_office.ecb1cadb.js","assets/index.8937afbd.js","assets/index.c4c82a28.css"]))},{name:"Asciinema",exts:["cast"],component:t(()=>n(()=>import("./asciinema.a4d414fb.js"),["assets/asciinema.a4d414fb.js","assets/asciinema.53412307.css","assets/index.8937afbd.js","assets/index.c4c82a28.css"]))},{name:"Video360",type:u.VIDEO,component:t(()=>n(()=>import("./video360.52596919.js"),["assets/video360.52596919.js","assets/video360.f0192288.css","assets/index.8937afbd.js","assets/index.c4c82a28.css","assets/video_box.cb597406.js","assets/icon.ea8353fb.js","assets/index.de59fe98.js","assets/Layout.54d6a090.js","assets/useTitle.17039b30.js","assets/index.39ae3315.js","assets/FolderTree.6d1b387d.js","assets/index.58977aab.js","assets/_commonjs-dynamic-modules.30ae7933.js"]))}],ne=r=>{var b;const{searchParams:a}=B(),i=u[(b=a.type)==null?void 0:b.toUpperCase()],s=[];return te.forEach(c=>{var E;c.provider&&!c.provider.test(r.provider)||(c.type===r.type||i&&c.type===i||c.exts==="*"||((E=c.exts)==null?void 0:E.includes(W(r.name).toLowerCase())))&&s.push({name:c.name,component:c.component})}),U(r.name).forEach(c=>{s.push({name:c.key,component:re(c.value)})}),s.push({name:"Download",component:t(()=>n(()=>Promise.resolve().then(()=>N),void 0))}),s},oe=()=>{const r=d(()=>ne({...o.obj,provider:o.provider})),[a,i]=H(r()[0]);return e(g,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(y,{w:"$full",spacing:"$2",get children(){return[e(X,{alwaysShowBorder:!0,get value(){return a().name},onChange:s=>{i(r().find(h=>h.name===s))},get options(){return r().map(s=>({value:s.name}))}}),e(I,{})]}}),e(G,{get fallback(){return e(q,{})},get children(){return e(Q,{get component(){return a().component}})}})]}})}})},ue=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"}));export{K as F,ue as a};
