import{a as V,m as i,aW as c,b9 as u,bI as X,h as t,bP as d,d1 as _,E as o,C as m,ba as l,n as h,I as Y,ae as Z,a8 as ee}from"./index.6abf65f8.js";import{b as te}from"./useTitle.44a49460.js";import{G as O}from"./index.c0047ad3.js";import{I as g}from"./SettingItem.6966b6bf.js";import"./index.e7c0e54a.js";import"./index.13a77161.js";import"./item_type.be442da4.js";const ue=()=>{const r=V();te("manage.sidemenu.other");const[p,y]=i(""),[k,f]=i(""),[b,$]=i(""),[v,C]=i(""),[T,S]=i(""),[q,I]=i(""),[L,U]=i(""),[a,P]=i([]),[R,x]=c(()=>u.get(`/admin/setting/list?groups=${O.ARIA2},${O.SINGLE}`)),[B,D]=c(()=>u.post("/admin/setting/set_aria2",{uri:p(),secret:k()})),[F,N]=c(()=>u.post("/admin/setting/set_qbit",{url:b(),seedtime:v()})),[W,j]=c(()=>u.post("/admin/setting/set_transmission",{uri:T(),seedtime:q()}));(async()=>{const e=await x();l(e,n=>{var w,A,G,Q,E,H,M;y(((w=n.find(s=>s.key==="aria2_uri"))==null?void 0:w.value)||""),f(((A=n.find(s=>s.key==="aria2_secret"))==null?void 0:A.value)||""),U(((G=n.find(s=>s.key==="token"))==null?void 0:G.value)||""),$(((Q=n.find(s=>s.key==="qbittorrent_url"))==null?void 0:Q.value)||""),C(((E=n.find(s=>s.key==="qbittorrent_seedtime"))==null?void 0:E.value)||""),S(((H=n.find(s=>s.key==="transmission_uri"))==null?void 0:H.value)||""),I(((M=n.find(s=>s.key==="transmission_seedtime"))==null?void 0:M.value)||""),P(n)})})();const[z,J]=c(()=>u.post("/admin/setting/reset_token")),{copy:K}=X();return t(ee,{get loading(){return R()},get children(){return[t(d,{mb:"$2",get children(){return r("settings_other.aria2")}}),t(_,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[t(g,o(()=>a().find(e=>e.key==="aria2_uri"),{get value(){return p()},onChange:e=>y(e)})),t(g,o(()=>a().find(e=>e.key==="aria2_secret"),{get value(){return k()},onChange:e=>f(e)}))]}}),t(m,{my:"$2",get loading(){return B()},onClick:async()=>{const e=await D();l(e,n=>{h.success(`${r("settings_other.aria2_version")} ${n}`)})},get children(){return r("settings_other.set_aria2")}}),t(d,{my:"$2",get children(){return r("settings_other.qbittorrent")}}),t(_,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[t(g,o(()=>a().find(e=>e.key==="qbittorrent_url"),{get value(){return b()},onChange:e=>$(e)})),t(g,o(()=>a().find(e=>e.key==="qbittorrent_seedtime"),{get value(){return v()},onChange:e=>C(e)}))]}}),t(m,{my:"$2",get loading(){return F()},onClick:async()=>{const e=await N();l(e,n=>{h.success(n)})},get children(){return r("settings_other.set_qbit")}}),t(d,{my:"$2",get children(){return r("settings_other.transmission")}}),t(_,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[t(g,o(()=>a().find(e=>e.key==="transmission_uri"),{get value(){return T()},onChange:e=>S(e)})),t(g,o(()=>a().find(e=>e.key==="transmission_seedtime"),{get value(){return q()},onChange:e=>I(e)}))]}}),t(m,{my:"$2",get loading(){return W()},onClick:async()=>{const e=await j();l(e,n=>{h.success(n)})},get children(){return r("settings_other.set_transmission")}}),t(d,{my:"$2",get children(){return r("settings.token")}}),t(Y,{get value(){return L()},readOnly:!0}),t(Z,{my:"$2",spacing:"$2",get children(){return[t(m,{onClick:()=>{K(L())},get children(){return r("settings_other.copy_token")}}),t(m,{colorScheme:"danger",get loading(){return z()},onClick:async()=>{const e=await J();l(e,n=>{h.success(r("settings_other.reset_token_success")),U(n)})},get children(){return r("settings_other.reset_token")}})]}})]}})};export{ue as default};
