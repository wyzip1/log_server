import{x as i,D as _,o as u,g as d,s as m,y as v,i as o,B as r,h}from"./vendor.604b4b01.js";import{b as f}from"./chapter.a1872eec.js";import{_ as g,f as x}from"./index.ab2eedc5.js";import{T as y,c as w,P as T}from"./prism-tomorrow.622d34cc.js";const b={props:{height:{type:String,default:"500px"},content:{type:String,default:""}},setup(c){const n=c,t=i(),e=i();return _(n,s=>{!e.value||(e.value.childNodes.forEach(a=>a.remove()),t.value=y.factory({el:e.value,viewer:!0,height:s.height,initialValue:s.content,plugins:[[w,{highlighter:T}]]}))},{immediate:!0}),(s,a)=>(u(),d("div",{id:"view",ref:(l,p)=>{p.el=l,e.value=l}},null,512))}};const j={class:"container"},B={class:"content"},S={setup(c){const n=m(),t=i({});return v(async()=>{let e=await f(n.params.id);e.data.formatUpdateTime=x(e.data.updateTime),t.value=e.data}),(e,s)=>{var a;return u(),d("div",j,[o("h1",null,r(t.value.title),1),o("p",null,r(t.value.type),1),o("span",null,r(t.value.formatUpdateTime)+" -- "+r(((a=t.value.user)==null?void 0:a.username)||"???"),1),o("div",B,[h(b,{content:t.value.content},null,8,["content"])])])}}};var U=g(S,[["__scopeId","data-v-3275805d"]]);export{U as default};
