import{k as c,d,o as i,a as h,b as o,F as m,l as r}from"./app.069b597e.js";import{F as b}from"./mitt.c9901edb.js";import{a as k}from"./index.6cddeaff.js";import"./index.4415e93f.js";import"./lodash.2e1e3599.js";const F=({url:s="",filename:e=""})=>{const t=s.split("/"),u=e||t[t.length-1],a=c({downloading:!1,request:{}});return a.request=new Promise((p,l)=>{a.downloading=!0,k.get(s,{responseType:"blob"}).then(n=>{b.exports.saveAs(n.data,u),p(n.data)}).catch(n=>{l(n)}).finally(()=>{a.downloading=!1})}),a},E=r('<h1 id="usedownloader" tabindex="-1"><a class="header-anchor" href="#usedownloader" aria-hidden="true">#</a> useDownloader</h1><p>\u6587\u4EF6\u4E0B\u8F7D\u5668</p><h2 id="\u4EE3\u7801\u6F14\u793A" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A" aria-hidden="true">#</a> \u4EE3\u7801\u6F14\u793A</h2><h3 id="\u57FA\u7840\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u7840\u4F7F\u7528</h3>',4),f=r(`<h2 id="\u793A\u4F8B\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B\u4EE3\u7801" aria-hidden="true">#</a> \u793A\u4F8B\u4EE3\u7801</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useDownloader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@lib&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleDownload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u9ED8\u8BA4\u4F1A\u4ECEurl\u4E2D\u63D0\u53D6\u6587\u4EF6\u540D</span>
  <span class="token function">useDownloader</span><span class="token punctuation">(</span><span class="token punctuation">{</span>url<span class="token operator">:</span> <span class="token string">&quot;https://file-examples-com.github.io/uploads/2018/04/file_example_AVI_480_750kB.avi&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>url</td><td>\u6587\u4EF6\u94FE\u63A5</td><td><code>string</code></td><td>-</td></tr><tr><td>filename</td><td>\u8981\u4FDD\u5B58\u7684\u6587\u4EF6\u540D</td><td><code>string</code></td><td>-</td></tr></tbody></table>`,4),w=d({setup(s){const e=()=>{F({url:"https://file-examples-com.github.io/uploads/2018/04/file_example_AVI_480_750kB.avi"})};return(t,u)=>(i(),h(m,null,[E,o("p",null,[o("button",{onClick:e},"\u70B9\u51FB\u4E0B\u8F7D\u6587\u4EF6")]),f],64))}});export{w as default};
