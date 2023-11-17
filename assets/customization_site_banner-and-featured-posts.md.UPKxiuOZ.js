import{S as o}from"./chunks/SiteOutput.5RGIxmlI.js";import{C as s,c as r,H as e,w as i,a as n,Q as t,o as l}from"./chunks/framework.j8jn4pyW.js";const d=t('<h1 id="banner-featured-posts" tabindex="-1">Banner &amp; featured posts <a class="header-anchor" href="#banner-featured-posts" aria-label="Permalink to &quot;Banner &amp; featured posts&quot;">​</a></h1><p>When you first see your new Ghost site, you&#39;ll see a big banner on the front page. This is your <a href="https://ghost.org/help/branding-settings/#cover-image" target="_blank" rel="noreferrer">publication&#39;s cover image</a>. Candidus will remove the cover image in favour of any featured posts you have. In case this is not the behavior you wish, here&#39;s how to get your publication&#39;s cover image back.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This feature&#39;s default is set to <strong>Featured Posts</strong>. <br><u>Note that you cannot have both, featured posts AND a cover image, active at the same time.</u></p></div><h2 id="customize-this-feature" tabindex="-1">Customize this feature <a class="header-anchor" href="#customize-this-feature" aria-label="Permalink to &quot;Customize this feature&quot;">​</a></h2><p>You can change the behavior of the cover image in your design settings:</p>',5),u=t('<code>&gt; Homepage &gt; Select homepage banner style</code><p>Options:</p><table><thead><tr><th>Homepage banner style</th><th>Shows</th><th>Hides</th></tr></thead><tbody><tr><td>Featured posts</td><td>Slider of featured posts</td><td>Publication cover</td></tr><tr><td>Homepage banner</td><td>Publication cover</td><td>Slider of featured posts</td></tr></tbody></table><h2 id="how-does-it-work" tabindex="-1">How does it work? <a class="header-anchor" href="#how-does-it-work" aria-label="Permalink to &quot;How does it work?&quot;">​</a></h2><p>This feature incorporates the following ruleset:</p><ul><li>Check for the selection of &#39;Homepage banner style&#39;</li><li>Case 1: &quot;Featured posts&quot; <ul><li>Get all featured posts</li><li>If there are no featured posts -&gt; Gracefully fall back to homepage banner</li><li>Else, show a slideshow of all featured posts</li></ul></li><li>Case 2: Homepage banner <ul><li>Show the homepage banner</li></ul></li></ul>',6),b=JSON.parse('{"title":"Banner & featured posts","description":"","frontmatter":{},"headers":[],"relativePath":"customization/site/banner-and-featured-posts.md","filePath":"customization/site/banner-and-featured-posts.md","lastUpdated":1675346604000}'),h={name:"customization/site/banner-and-featured-posts.md"},g=Object.assign(h,{setup(c){return(p,f)=>{const a=s("ClientOnly");return l(),r("div",null,[d,e(a,null,{default:i(()=>[e(o,{path:"ghost/#/settings/design"})]),_:1}),n(),u])}}});export{b as __pageData,g as default};
