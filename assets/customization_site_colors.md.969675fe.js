import{_ as l}from"./chunks/SiteOutput.77088f76.js";import{_ as o}from"./chunks/Color.ee72665e.js";import{r as t,o as r,c,d as e,w as i,e as a,a as s,b as p}from"./app.15e96037.js";const d=a('<h1 id="customize-candidus-colors" tabindex="-1">Customize Candidus colors <a class="header-anchor" href="#customize-candidus-colors" aria-hidden="true">#</a></h1><p>Candidus ships with two default colors and uses <a href="https://ghost.org/help/branding-settings/" target="_blank" rel="noreferrer">Ghost&#39;s accent color</a>. All three can be customized under the design section in Ghost&#39;s admin panel.</p><div class="tip custom-block"><p class="custom-block-title">GHOST ACCENT COLOR</p><p>Ghost&#39;s default color is not automatically changed when you upload the theme. <br> You must manually change it to <code>#bdc5d4</code></p></div><h2 id="customize-this-feature" tabindex="-1">Customize this feature <a class="header-anchor" href="#customize-this-feature" aria-hidden="true">#</a></h2><p>You can change the default colors in your design settings:</p>',5),h=s("ul",null,[s("li",null,[s("code",null,"Settings > Design > Site Wide > Primary/Secondary Color")]),s("li",null,[s("code",null,"Settings > Design > Brand > Accent color")])],-1),y=s("h2",{id:"default-colors",tabindex:"-1"},[p("Default colors "),s("a",{class:"header-anchor",href:"#default-colors","aria-hidden":"true"},"#")],-1),C=s("p",null,"We ship (and recommend) a combination of the following three colors:",-1),u=a(`<h2 id="considerations-when-changing-colors" tabindex="-1">Considerations when changing colors <a class="header-anchor" href="#considerations-when-changing-colors" aria-hidden="true">#</a></h2><p>The default pallette is optimized to be displayed with <a href="./../../customization/site/theming.html">Candidus&#39; light and dark theme</a>. If you decide to make changes, we recommend considering the following points:</p><ul><li>Consider <a href="https://en.wikipedia.org/wiki/Color_theory" target="_blank" rel="noreferrer">color theory</a>. Use it to give visitors a sense of formality or a warm welcome</li><li>Check how the colors play together with the theme&#39;s font family</li><li>Have a look at <a href="./../../intro/pages.html">all sites of the theme</a> in light &amp; dark mode</li></ul><h2 id="how-does-it-work" tabindex="-1">How does it work? <a class="header-anchor" href="#how-does-it-work" aria-hidden="true">#</a></h2><p>All three colors variables are directly injected into the DOM. They&#39;re available on every page and operate independently from all other style parts of the theme.</p><div class="tip custom-block"><p class="custom-block-title">MIND THE SYNTAX</p><p>Please note that this is Ghost Handlebars syntax. Implementing theming is commonly done by giving the root-element a special CSS - class or data-attribute</p></div><p>This is the ruleset that incorporates Candidus&#39; primary and secondary colors.</p><div class="language-hbs"><button title="Copy Code" class="copy"></button><span class="lang">hbs</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    {{#if @custom.primary_color</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      --color-primary: </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">{@custom.primary_color</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">{/if</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">{#if @custom.secondary_color</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      --color-secondary: </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">{@custom.secondary_color</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">{/if</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>Ghost&#39;s accent color is injected in a very similar fashion:</p><div class="language-hbs"><button title="Copy Code" class="copy"></button><span class="lang">hbs</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      --ghost-accent-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">bdc5d4</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,10),b=JSON.parse('{"title":"Customize Candidus colors","description":"","frontmatter":{},"headers":[{"level":2,"title":"Customize this feature","slug":"customize-this-feature","link":"#customize-this-feature","children":[]},{"level":2,"title":"Default colors","slug":"default-colors","link":"#default-colors","children":[]},{"level":2,"title":"Considerations when changing colors","slug":"considerations-when-changing-colors","link":"#considerations-when-changing-colors","children":[]},{"level":2,"title":"How does it work?","slug":"how-does-it-work","link":"#how-does-it-work","children":[]}],"relativePath":"customization/site/colors.md"}'),D={name:"customization/site/colors.md"},w=Object.assign(D,{setup(m){return(g,A)=>{const n=t("ClientOnly");return r(),c("div",null,[d,e(n,null,{default:i(()=>[e(l,{path:"ghost/#/settings/design"})]),_:1}),h,y,C,e(o,{text:"Primary Color: Dark Blue - Hex Code #3f4d63",color:"#3f4d63"}),e(o,{text:"Secondary Color: Light Orange - Hex Code #f7c59f",color:"#f7c59f"}),e(o,{text:"Ghost Accent Color: Light Blue - Hex Code #bdc5d4",color:"#bdc5d4"}),u])}}});export{b as __pageData,w as default};
