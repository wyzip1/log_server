import{p as a,b as e,r as t,n as l,o as s,f as i,g as n,q as o,F as d,m as u,t as r}from"./vendor.da39e7fd.js";a("data-v-6705e494");const v={class:"pagination"},p=n("i",{class:"fa fa-angle-left","aria-hidden":"true"},null,-1),c=n("i",{class:"fa fa-angle-right","aria-hidden":"true"},null,-1);e();const f={expose:[],props:{total:{type:Number,require:!0}},emits:["onChange"],setup(a,{emit:e}){const f=a,g=t(1),m=l((()=>1==g.value)),h=l((()=>g.value==f.total)),b=l((()=>{let a=[];if(f.total<=5||g.value<=3)for(let e=0;e<f.total&&e<5;e++)a.push(e+1);else if(g.value>=f.total-2)for(let e=f.total-5;e<f.total;e++)a.push(e+1);else for(let e=-2;e<3;e++)a.push(g.value+e);return a}));function C(a,t){void 0!==t&&t||(g.value=a,e("onChange",a))}return(a,e)=>(s(),i("div",v,[n("div",{class:"pagination-item prev",onClick:e[1]||(e[1]=a=>C(g.value-1,o(m))),disabled:o(m)},[p],8,["disabled"]),(s(!0),i(d,null,u(o(b),(a=>(s(),i("div",{class:{"pagination-item":!0,active:g.value===a},key:a,onClick:e=>C(a)},r(a),11,["onClick"])))),128)),n("div",{class:"pagination-item next",onClick:e[2]||(e[2]=a=>C(g.value+1,o(h))),disabled:o(h)},[c],8,["disabled"])]))},__scopeId:"data-v-6705e494"};export{f as _};
