import{_ as k,o as n,c as i,F as f,j as y,a as t,t as m,h as b,r as x,b as s,d as l,w as p}from"./app.15e96037.js";import{_ as v}from"./chunks/Color.ee72665e.js";import{_ as C}from"./chunks/SiteOutput.77088f76.js";const w=["onChange","name","checked"],G=["for"],$=["href"],I={key:1},S={__name:"Checklist",props:{items:{type:Array}},emits:["change-item"],setup(r,{emit:c}){return(u,h)=>(n(),i("form",null,[(n(!0),i(f,null,y(r.items,e=>(n(),i("div",{key:e.id},[t("input",{type:"checkbox",onChange:g=>c("change-item",e),name:e.text,checked:e.done},null,40,w),t("label",{for:e.text},[e.link?(n(),i("a",{key:0,href:e.link},m(e.text),9,$)):(n(),i("span",I,m(e.text),1))],8,G)]))),128))]))}},z=k(S,[["__scopeId","data-v-a024cd2c"]]),A=t("h1",{id:"getting-started-with-candidus",tabindex:"-1"},[s("Getting started with Candidus "),t("a",{class:"header-anchor",href:"#getting-started-with-candidus","aria-hidden":"true"},"#")],-1),N=t("h2",{id:"quickstart",tabindex:"-1"},[s("Quickstart "),t("a",{class:"header-anchor",href:"#quickstart","aria-hidden":"true"},"#")],-1),O=t("br",null,null,-1),q=t("code",null,"Settings > Design > Brand > Accent color",-1),B=t("li",null,[s("If you're using "),t("a",{href:"https://ghost.org/help/topic/members/",target:"_blank",rel:"noreferrer"},"Ghost's membership flow"),s(", activate the built-in "),t("a",{href:"./../customization/site/static-pages.html"},"static member pages")],-1),L=t("h2",{id:"checklist",tabindex:"-1"},[s("Checklist "),t("a",{class:"header-anchor",href:"#checklist","aria-hidden":"true"},"#")],-1),j=t("p",null,"For your convenience, we've compiled a checklist to make the most out of your purchase. Its progress will be stored in your browser, so you can stop anytime and come back later.",-1),D=t("blockquote",null,[t("p",null,"We only assume that you've already setup your Ghost site and added a custom domain.")],-1),F=t("h2",{id:"get-candidus",tabindex:"-1"},[s("Get Candidus "),t("a",{class:"header-anchor",href:"#get-candidus","aria-hidden":"true"},"#")],-1),Q=JSON.parse('{"title":"Getting started with Candidus","description":"","frontmatter":{},"headers":[{"level":2,"title":"Quickstart","slug":"quickstart","link":"#quickstart","children":[]},{"level":2,"title":"Checklist","slug":"checklist","link":"#checklist","children":[]},{"level":2,"title":"Get Candidus","slug":"get-candidus","link":"#get-candidus","children":[]}],"relativePath":"intro/getting-started.md"}'),J={name:"intro/getting-started.md"},U=Object.assign(J,{setup(r){const c="checklist",u=[{id:1,done:!1,text:"Get Candidus",link:""},{id:2,done:!1,text:"Upload it to your publication (external link)",link:"https://ghost.org/help/installing-a-theme/"},{id:3,done:!1,text:"Adjust colors to match your brand",link:"/candidus-docs/customization/site/colors.html"},{id:4,done:!1,text:"Add your social media channels",link:"/candidus-docs/plugins/social-icons.html"},{id:5,done:!1,text:"Activate static membership pages",link:"/candidus-docs/customization/site/static-pages"},{id:6,done:!1,text:"Customize your site",link:"/candidus-docs/customization/"},{id:7,done:!1,text:"Write your first post and publish it 🎉",link:""}],h=o=>{d.value=d.value.map(a=>(a.id===o.id&&(a.done=!o.done),a)),e(c,d)},e=(o,a)=>{localStorage.setItem(o,JSON.stringify(a.value))},d=b((()=>JSON.parse(localStorage.getItem(c)))()||u);return(o,a)=>{const _=x("ClientOnly");return n(),i("div",null,[A,N,t("p",null,[s("At a bare minimum, you should customize the following in your Ghost admin panel: "),O,s(),l(_,null,{default:p(()=>[l(C,{path:"ghost/#/settings"})]),_:1})]),t("ul",null,[t("li",null,[s("Change the Ghost accent color under "),q,s(". "),l(v,{text:"We recommend using this light blue variation - #bdc5d4",color:"#bdc5d4"})]),B]),L,j,D,l(_,null,{default:p(()=>[l(z,{items:d.value,onChangeItem:h},null,8,["items"])]),_:1}),F])}}});export{Q as __pageData,U as default};
