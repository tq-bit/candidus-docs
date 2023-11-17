import{S as o}from"./chunks/SiteOutput.5RGIxmlI.js";import{C as i,c as p,k as e,a,H as s,w as n,Q as l,o as r}from"./chunks/framework.j8jn4pyW.js";const c="/candidus-docs/assets/candidus-feature-static-page-login.HHULXRWr.png",h="/candidus-docs/assets/candidus-feature-static-page-signup.0Iw6i1Lk.png",u=l('<h1 id="login-signup-pages" tabindex="-1">Login &amp; Signup pages <a class="header-anchor" href="#login-signup-pages" aria-label="Permalink to &quot;Login &amp; Signup pages&quot;">​</a></h1><p>Candidus ships with two static member-focused pages. They differ from <a href="https://ghost.org/docs/publishing/#pages" target="_blank" rel="noreferrer">the default Ghost pages</a> insofar as they&#39;re shipped with the theme. All you have to do is to <strong>create</strong> an empty page with the right name and you&#39;re done.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This feature is <strong>disabled</strong> by default</p></div><ul><li><a href="#login-page">Example: preview image login page</a></li><li><a href="#signup-page">Example: preview image signup page</a></li></ul><h2 id="activate-this-feature" tabindex="-1">Activate this feature <a class="header-anchor" href="#activate-this-feature" aria-label="Permalink to &quot;Activate this feature&quot;">​</a></h2><p>In order to use static login &amp; signup pages, you have to follow these steps:</p><ol><li>Enable the ghost feature for <code>memberships</code></li><li>Create an empty page named <code>login</code></li><li>Create an empty page named <code>signup</code></li><li>Add a custom background image</li><li>Overwrite sidebar navigation (optional)</li></ol><h2 id="_1-enable-memberships" tabindex="-1">1. Enable memberships <a class="header-anchor" href="#_1-enable-memberships" aria-label="Permalink to &quot;1. Enable memberships&quot;">​</a></h2><p>You can enable memberships in your settings. Select one of the following <code>Subscription access</code> options to get started:</p><ul><li>Anyone can sign up</li><li>Only people I invite</li></ul>',10),g=e("h2",{id:"_2-create-the-login-page",tabindex:"-1"},[a("2. Create the login page "),e("a",{class:"header-anchor",href:"#_2-create-the-login-page","aria-label":'Permalink to "2. Create the login page"'},"​")],-1),d=e("p",null,[a("Create a new page with the exact name of "),e("code",null,"login"),a(" under your publication's pages. Publish it. It must not have any other content but the headline.")],-1),m={class:"tip custom-block"},y=e("p",{class:"custom-block-title"},"TIP",-1),b=e("h2",{id:"_3-create-the-signup-page",tabindex:"-1"},[a("3. Create the signup page "),e("a",{class:"header-anchor",href:"#_3-create-the-signup-page","aria-label":'Permalink to "3. Create the signup page"'},"​")],-1),_=e("p",null,[a("Create a new page with the exact name of "),e("code",null,"signup"),a(" under your publication's pages: Publish it. It must not have any other content but the headline. publication's pages. Publish it. It must not have any other content but the headline.")],-1),f={class:"tip custom-block"},E=e("p",{class:"custom-block-title"},"TIP",-1),v=e("h2",{id:"_4-use-a-custom-member-form-image",tabindex:"-1"},[a("4. Use a custom member form image "),e("a",{class:"header-anchor",href:"#_4-use-a-custom-member-form-image","aria-label":'Permalink to "4. Use a custom member form image"'},"​")],-1),w=e("p",null,"Candidus allows you to add your own background image to both of these pages. If you do not specify one, the publication cover will be used by default.",-1),C=e("code",null,"> Site-wide > Member form image",-1),F=e("code",null,"Upload",-1),k=e("h2",{id:"_5-overwrite-sidebar-navigation-optional",tabindex:"-1"},[a("5. Overwrite sidebar navigation (optional) "),e("a",{class:"header-anchor",href:"#_5-overwrite-sidebar-navigation-optional","aria-label":'Permalink to "5. Overwrite sidebar navigation (optional)"'},"​")],-1),S=e("p",null,"Now that you have both member pages available, you might want to overwrite the 'Sign up' and 'Log in' - buttons of your sidebar navigation.",-1),x=e("code",null,"> Site-wide > Use static member pages",-1),P=l(`<h2 id="how-does-it-work" tabindex="-1">How does it work? <a class="header-anchor" href="#how-does-it-work" aria-label="Permalink to &quot;How does it work?&quot;">​</a></h2><p>Static pages are built into Ghost&#39;s core. Candidus ships with two pre-built, custom pages. The documentation on these is rather light - they were mentioned in a blog post from version 0.4.2. -&gt; <a href="https://ghost.org/changelog/new-for-themes-0-4-2/#custompagetemplates" target="_blank" rel="noreferrer">Check it out here</a>.</p><p>By creating a static page with the same name as the custom page, Ghost maps these two together. When a user visits your site, Ghost will pick up the custom page template rather than the empty static page.</p><div class="warning custom-block"><p class="custom-block-title">MIND THE NAMES</p><p>For this to work, the static page must have the exact same name as the custom page</p></div><p>The custom login &amp; signup pages still use the Ghost Portal features under the hood. Instead of opening a modal, they use custom <a href="https://ghost.org/docs/themes/members/#signup-forms" target="_blank" rel="noreferrer">Signup Forms</a> to authorize a user.</p><p>As for the sidebar overwrite - I am using a simple if-else helper to map either the <code>data-portal</code> property or a <code>href</code> to the respective form page:</p><div class="language-hbs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">hbs</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">tabindex=</span><span style="color:#9ECBFF;">&#39;-1&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class=</span><span style="color:#9ECBFF;">&#39;px-4 py-2&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">{{</span><span style="color:#F97583;">#if</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">@custom.use_static_member_pages</span><span style="color:#79B8FF;">}}</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">href=</span><span style="color:#9ECBFF;">&#39;/signup&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">{{</span><span style="color:#F97583;">else</span><span style="color:#79B8FF;">}}</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">href=</span><span style="color:#9ECBFF;">&quot;#&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">data-portal=</span><span style="color:#9ECBFF;">&quot;signup&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">{{</span><span style="color:#F97583;">/if</span><span style="color:#79B8FF;">}}</span></span>
<span class="line"><span style="color:#E1E4E8;">  &gt;Sign up&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">a</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">tabindex=</span><span style="color:#032F62;">&#39;-1&#39;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class=</span><span style="color:#032F62;">&#39;px-4 py-2&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">{{</span><span style="color:#D73A49;">#if</span><span style="color:#24292E;"> </span><span style="color:#E36209;">@custom.use_static_member_pages</span><span style="color:#005CC5;">}}</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">href=</span><span style="color:#032F62;">&#39;/signup&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">{{</span><span style="color:#D73A49;">else</span><span style="color:#005CC5;">}}</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">href=</span><span style="color:#032F62;">&quot;#&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">data-portal=</span><span style="color:#032F62;">&quot;signup&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">{{</span><span style="color:#D73A49;">/if</span><span style="color:#005CC5;">}}</span></span>
<span class="line"><span style="color:#24292E;">  &gt;Sign up&lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="login-page" tabindex="-1">Login page <a class="header-anchor" href="#login-page" aria-label="Permalink to &quot;Login page&quot;">​</a></h3><p><img src="`+c+'" alt=""></p><h3 id="signup-page" tabindex="-1">Signup page <a class="header-anchor" href="#signup-page" aria-label="Permalink to &quot;Signup page&quot;">​</a></h3><p><img src="'+h+'" alt=""></p>',11),O=JSON.parse('{"title":"Login & Signup pages","description":"","frontmatter":{},"headers":[],"relativePath":"customization/site/static-pages.md","filePath":"customization/site/static-pages.md","lastUpdated":1675346604000}'),A={name:"customization/site/static-pages.md"},L=Object.assign(A,{setup(B){return(T,q)=>{const t=i("ClientOnly");return r(),p("div",null,[u,e("p",null,[a("Link: "),s(t,null,{default:n(()=>[s(o,{path:"ghost/#/settings/members"})]),_:1})]),g,d,e("p",null,[a("Add the page here: "),s(t,null,{default:n(()=>[s(o,{path:"ghost/#/pages"})]),_:1})]),e("div",m,[y,e("p",null,[a("You can check if the page creation was successful by visiting "),s(t,null,{default:n(()=>[s(o,{path:"login"})]),_:1})])]),b,_,e("p",null,[a("Add the page here: "),s(t,null,{default:n(()=>[s(o,{path:"ghost/#/pages"})]),_:1})]),e("div",f,[E,e("p",null,[a("You can check if the page creation was successful by visiting "),s(t,null,{default:n(()=>[s(o,{path:"signup"})]),_:1})])]),v,w,e("p",null,[a("To change the image, go to "),s(t,null,{default:n(()=>[s(o,{path:"ghost/#/settings/design"})]),_:1}),a(),C,a(". Click on "),F,a(" and select an image of your liking.")]),k,S,e("p",null,[a("By default, these buttons will activate the built-in Ghost 'Portal' - feature and open a modal rather than directing to the member pages. You can overwrite this behavior by going into your design settings under "),s(t,null,{default:n(()=>[s(o,{path:"ghost/#/settings/design"})]),_:1}),a(),x,a(". Once this is done, 'Sign up' and 'Login' will direct a user to the respective pages.")]),e("p",null,[a("Alternatively, you can add the respective links into your page's secondary navigation: "),s(t,null,{default:n(()=>[s(o,{path:"ghost/#/settings/navigation"})]),_:1})]),P])}}});export{O as __pageData,L as default};
