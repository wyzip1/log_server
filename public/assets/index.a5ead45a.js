import{c as e,a as t,E as o,r as n,o as r,b as s,d as a}from"./vendor.3ed85b8c.js";let i;const p={},c=function(e,t){if(!t)return e();if(void 0===i){const e=document.createElement("link").relList;i=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in p)return;p[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":i,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))},d=[{path:"/",component:()=>c((()=>import("./Home.9646da92.js")),["/assets/Home.9646da92.js","/assets/Home.ea169308.css","/assets/chapter.361d8079.js","/assets/util.232713f0.js","/assets/vendor.3ed85b8c.js"])},{path:"/login",component:()=>c((()=>import("./Login.31aa2fbe.js")),["/assets/Login.31aa2fbe.js","/assets/Login.2e0a18a3.css","/assets/Button.65a163e2.js","/assets/Button.3e11ab55.css","/assets/vendor.3ed85b8c.js","/assets/util.232713f0.js"])},{path:"/center",component:()=>c((()=>import("./Center.d650bcba.js")),["/assets/Center.d650bcba.js","/assets/Center.c457ea90.css","/assets/vendor.3ed85b8c.js","/assets/monokai-sublime.56e75829.js","/assets/monokai-sublime.f2722a35.css","/assets/Button.65a163e2.js","/assets/Button.3e11ab55.css","/assets/util.232713f0.js","/assets/chapter.361d8079.js"]),beforeEnter:async(e,t,n)=>{let{data:r}=await o.post("/auth");r.status?n("/login"):n()}},{path:"/content",component:()=>c((()=>import("./Content.1947a74f.js")),["/assets/Content.1947a74f.js","/assets/vendor.3ed85b8c.js"]),children:[{path:"detail/:id",component:()=>c((()=>import("./Detail.cd0892b3.js")),["/assets/Detail.cd0892b3.js","/assets/Detail.64dedc2a.css","/assets/vendor.3ed85b8c.js","/assets/monokai-sublime.56e75829.js","/assets/monokai-sublime.f2722a35.css","/assets/chapter.361d8079.js","/assets/util.232713f0.js"])}]}],l=new e({history:t(),routes:d});const m={expose:[],setup:e=>(e,t)=>{const o=n("router-view");return r(),s(o)}};o.interceptors.request.use((e=>(e.headers.authorization=localStorage.getItem("token"),e))),a(m).use(l).mount("#app");