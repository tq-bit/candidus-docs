import{S as t}from"./chunks/SiteOutput.5RGIxmlI.js";import{C as n,c as o,H as e,w as r,k as a,a as s,Q as p,o as i}from"./chunks/framework.j8jn4pyW.js";const c="/candidus-docs/assets/candidus-feature-syntax-highlight.yU3EHZ8T.gif",h=a("h1",{id:"syntax-highlighting",tabindex:"-1"},[s("Syntax highlighting "),a("a",{class:"header-anchor",href:"#syntax-highlighting","aria-label":'Permalink to "Syntax highlighting"'},"​")],-1),g=a("p",null,[s("Candidus uses "),a("a",{href:"https://prismjs.com/",target:"_blank",rel:"noreferrer"},"Prismjs"),s(" for color highlighting. Its "),a("a",{href:"https://prismjs.com/plugins/autoloader/",target:"_blank",rel:"noreferrer"},"autoloader plugin"),s(" makes sure that only the code grammars you need are loaded. Additional scripts and styles are only loaded if this plugin is enabled.")],-1),d=p(`<h2 id="add-syntax-highlighting-to-your-page" tabindex="-1">Add syntax highlighting to your page <a class="header-anchor" href="#add-syntax-highlighting-to-your-page" aria-label="Permalink to &quot;Add syntax highlighting to your page&quot;">​</a></h2><p>Syntax highlighting uses Candidus&#39; Plugin System. It will style the code according to the language you specify and your reader&#39;s theme preference (light or dark).</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">window.</span><span style="color:#79B8FF;">CANDIDUS</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  SYNTAX_HIGHLIGHTER: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  	type: </span><span style="color:#9ECBFF;">&quot;prism&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ... other plugin options</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">window.</span><span style="color:#005CC5;">CANDIDUS</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  SYNTAX_HIGHLIGHTER: {</span></span>
<span class="line"><span style="color:#24292E;">  	type: </span><span style="color:#032F62;">&quot;prism&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ... other plugin options</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><ul><li>Candidus supports <a href="https://prismjs.com/download.html#themes=prism-twilight&amp;languages=markup+css+clike+javascript+abap+abnf+actionscript+ada+agda+al+antlr4+apacheconf+apex+apl+applescript+aql+arduino+arff+armasm+arturo+asciidoc+aspnet+asm6502+asmatmel+autohotkey+autoit+avisynth+avro-idl+awk+bash+basic+batch+bbcode+bbj+bicep+birb+bison+bnf+bqn+brainfuck+brightscript+bro+bsl+c+csharp+cpp+cfscript+chaiscript+cil+cilkc+cilkcpp+clojure+cmake+cobol+coffeescript+concurnas+csp+cooklang+coq+crystal+css-extras+csv+cue+cypher+d+dart+dataweave+dax+dhall+diff+django+dns-zone-file+docker+dot+ebnf+editorconfig+eiffel+ejs+elixir+elm+etlua+erb+erlang+excel-formula+fsharp+factor+false+firestore-security-rules+flow+fortran+ftl+gml+gap+gcode+gdscript+gedcom+gettext+gherkin+git+glsl+gn+linker-script+go+go-module+gradle+graphql+groovy+haml+handlebars+haskell+haxe+hcl+hlsl+hoon+http+hpkp+hsts+ichigojam+icon+icu-message-format+idris+ignore+inform7+ini+io+j+java+javadoc+javadoclike+javastacktrace+jexl+jolie+jq+jsdoc+js-extras+json+json5+jsonp+jsstacktrace+js-templates+julia+keepalived+keyman+kotlin+kumir+kusto+latex+latte+less+lilypond+liquid+lisp+livescript+llvm+log+lolcode+lua+magma+makefile+markdown+markup-templating+mata+matlab+maxscript+mel+mermaid+metafont+mizar+mongodb+monkey+moonscript+n1ql+n4js+nand2tetris-hdl+naniscript+nasm+neon+nevod+nginx+nim+nix+nsis+objectivec+ocaml+odin+opencl+openqasm+oz+parigp+parser+pascal+pascaligo+psl+pcaxis+peoplecode+perl+php+phpdoc+php-extras+plant-uml+plsql+powerquery+powershell+processing+prolog+promql+properties+protobuf+pug+puppet+pure+purebasic+purescript+python+qsharp+q+qml+qore+r+racket+cshtml+jsx+tsx+reason+regex+rego+renpy+rescript+rest+rip+roboconf+robotframework+ruby+rust+sas+sass+scss+scala+scheme+shell-session+smali+smalltalk+smarty+sml+solidity+solution-file+soy+sparql+splunk-spl+sqf+sql+squirrel+stan+stata+iecst+stylus+supercollider+swift+systemd+t4-templating+t4-cs+t4-vb+tap+tcl+tt2+textile+toml+tremor+turtle+twig+typescript+typoscript+unrealscript+uorazor+uri+v+vala+vbnet+velocity+verilog+vhdl+vim+visual-basic+warpscript+wasm+web-idl+wgsl+wiki+wolfram+wren+xeora+xml-doc+xojo+xquery+yaml+yang+zig&amp;plugins=autoloader" target="_blank" rel="noreferrer">all language libraries</a> you can download from the project&#39;s homepage.</li><li>The necessary grammar libraries are part of the theme and do not rely on any third-party infrastructure.</li><li>Only language grammars that are part of your article will be loaded</li></ul><p><img src="`+c+'" alt=""></p>',6),x=JSON.parse('{"title":"Syntax highlighting","description":"","frontmatter":{},"headers":[],"relativePath":"plugins/syntax-highlighting.md","filePath":"plugins/syntax-highlighting.md","lastUpdated":1700222803000}'),m={name:"plugins/syntax-highlighting.md"},k=Object.assign(m,{setup(u){return(y,f)=>{const l=n("ClientOnly");return i(),o("div",null,[h,g,e(l,null,{default:r(()=>[e(t,{path:"ghost/#/settings/code-injection"})]),_:1}),d])}}});export{x as __pageData,k as default};