var M=Object.defineProperty;var I=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var x=(u,l,a)=>l in u?M(u,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):u[l]=a,y=(u,l)=>{for(var a in l||(l={}))N.call(l,a)&&x(u,a,l[a]);if(I)for(var a of I(l))D.call(l,a)&&x(u,a,l[a]);return u};import{x as d,y as V,D as L,o as g,g as b,j as w,s as z,r as c,h as n,w as s,m as k,F as H,z as P,k as R,q as S,B as j}from"./vendor.604b4b01.js";import{g as $}from"./type.6dadbe3f.js";import{b as A,u as G,c as J}from"./chapter.a1872eec.js";import{d as K,_ as O,g as Q}from"./index.ab2eedc5.js";import{T as q,c as C,P as U}from"./prism-tomorrow.622d34cc.js";const W={props:{height:{type:String,default:"500px"},vertical:{type:Boolean,default:!0},modelValue:String},emits:["update:modelValue"],setup(u,{emit:l}){const a=u,i=d(),t=d();function h(){l("update:modelValue",i.value.getMarkdown())}const p=K(h,300);V(()=>{i.value=new q({el:t.value,previewStyle:a.vertical?"vertical":"tab",height:a.height,plugins:[[C,{highlighter:U}]]})});const m=L(a,v=>{!t.value||(t.value.childNodes.forEach(r=>r.remove()),i.value=new q({el:t.value,previewStyle:a.vertical?"vertical":"tab",height:v.height,initialValue:v.modelValue,plugins:[[C,{highlighter:U}]]}),m())});return(v,r)=>(g(),b("div",{id:"edit",ref:(e,f)=>{f.el=e,t.value=e},onInput:r[0]||(r[0]=(...e)=>w(p)&&w(p)(...e))},null,544))}};const X={class:"content"},Y={setup(u){const l=z(),a=d(!1),i=d(!1),t=d({title:"",content:"",typeId:"",briefIntroduction:""}),h={title:{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898",trigger:"blur"},typeId:{required:!0,message:"\u8BF7\u9009\u62E9\u7C7B\u578B"},content:{required:!0,message:"\u8BF7\u8F93\u5165\u5185\u5BB9",trigger:"input"},briefIntroduction:{required:!0,message:"\u8BF7\u8F93\u5165\u7B80\u4ECB",trigger:"blur"}},p=d([]);let m;V(()=>{$().then(e=>{p.value=e.data});const{chapterId:r}=l.query;!r||A(r).then(e=>{a.value=!0,m=e.data._id,t.value.typeId=e.data.typeId,t.value.content=e.data.content,t.value.title=e.data.title,t.value.briefIntroduction=e.data.briefIntroduction,console.log(t.value)})});function v(r){i.value=!0,a.value?G(y({chapterId:m},t.value)).then(e=>{console.log(e.data),k.success(e.msg)}).finally(()=>{i.value=!1}):J(y({userId:Q().id},t.value)).then(e=>{console.log(e.data),k.success(e.msg)}).finally(()=>{i.value=!1})}return(r,e)=>{const f=c("a-input"),_=c("a-form-item"),B=c("a-select-option"),E=c("a-select"),T=c("a-button"),F=c("a-form");return g(),b("div",X,[n(F,{model:t.value,rules:h,onFinish:v},{default:s(()=>[n(_,{label:"\u6587\u7AE0\u6807\u9898",name:"title"},{default:s(()=>[n(f,{placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",value:t.value.title,"onUpdate:value":e[0]||(e[0]=o=>t.value.title=o)},null,8,["value"])]),_:1}),n(_,{label:"\u6587\u7AE0\u7C7B\u578B",name:"typeId"},{default:s(()=>[n(E,{value:t.value.typeId,"onUpdate:value":e[1]||(e[1]=o=>t.value.typeId=o)},{default:s(()=>[(g(!0),b(H,null,P(p.value,o=>(g(),R(B,{value:o._id,key:o._id},{default:s(()=>[S(j(o.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),n(_,{label:"\u6587\u7AE0\u7B80\u4ECB",name:"briefIntroduction"},{default:s(()=>[n(f,{placeholder:"\u8BF7\u8F93\u5165\u7B80\u4ECB",value:t.value.briefIntroduction,"onUpdate:value":e[2]||(e[2]=o=>t.value.briefIntroduction=o)},null,8,["value"])]),_:1}),n(_,{label:"\u6587\u7AE0\u5185\u5BB9",name:"content"},{default:s(()=>[n(W,{class:"_mark_down_edit",vertical:!1,modelValue:t.value.content,"onUpdate:modelValue":e[3]||(e[3]=o=>t.value.content=o)},null,8,["modelValue"])]),_:1}),n(_,null,{default:s(()=>[n(T,{block:"",type:"primary","html-type":"submit",loading:i.value},{default:s(()=>[S(j(a.value?"\u66F4\u65B0":"\u63D0\u4EA4"),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}};var ne=O(Y,[["__scopeId","data-v-3ff88e32"]]);export{ne as default};