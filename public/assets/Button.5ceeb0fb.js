import{p as e,b as t,o as a,f as l,g as o,h as n,r as s,k as p,t as r}from"./vendor.da39e7fd.js";e("data-v-047b8e22");const i={class:"input-group"},u={key:0,class:"icon"};t();const d={expose:[],props:{icon:String,modelValue:String,placeholder:String,type:{type:String,default:"text"}},setup:e=>(t,s)=>(a(),l("div",i,[e.icon?(a(),l("span",u,[o("i",{class:["fa",e.icon],"aria-hidden":"true"},null,2)])):n("",!0),o("input",{type:e.type,onInput:s[1]||(s[1]=e=>t.$emit("update:modelValue",e.target.value)),value:e.modelValue,placeholder:e.placeholder},null,40,["type","value","placeholder"])])),__scopeId:"data-v-047b8e22"};const c={expose:[],props:{value:{type:String},time:{type:String,default:"300"},rColor:{type:String,default:"#fff"}},setup(e){const t=e,n=s();function i({clientX:e,clientY:a}){let{left:l,top:o}=n.value.getBoundingClientRect(),s=document.createElement("span");s.style.left=e-l+"px",s.style.top=a-o+"px",n.value.appendChild(s),setTimeout((()=>{s.remove()}),1*t.time)}return p((()=>{n.value.style.setProperty("--animationTime",t.time+"ms"),n.value.style.setProperty("--rColor",t.rColor)})),(t,s)=>(a(),l("div",{class:"button-group",ref:n,onClick:i},[o("button",null,r(e.value),1)],512))},__scopeId:"data-v-96fb2a9c"};export{d as _,c as a};
