import{h as s,i as r,o as p,c as u,t as g,u as o}from"../app.15e96037.js";const n=typeof window<"u",a="candidus.docs.blog-url",l=s(n?localStorage==null?void 0:localStorage.getItem(a):""),_=t=>{n&&(l.value=t,localStorage==null||localStorage.setItem(a,t))},d=r(()=>l.value),f={setBlogUrl:_,getBlogUrl:d},S=["href"],U={__name:"SiteOutput",props:{path:{type:String}},setup(t){const c=t,i=window?f.getBlogUrl:s(""),e=r(()=>`https://${i.value}/${c.path}`);return(h,m)=>(p(),u("a",{href:o(e),target:"_blank"},g(o(e)),9,S))}};export{U as _,f as u};
