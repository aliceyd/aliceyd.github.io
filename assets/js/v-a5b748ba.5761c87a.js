(self.webpackChunkvuepress_starter=self.webpackChunkvuepress_starter||[]).push([[124],{1562:(s,a,n)=>{"use strict";n.r(a),n.d(a,{data:()=>e});const e={key:"v-a5b748ba",path:"/guide/MySQL.html",title:"MySQL",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"启动",slug:"启动",children:[]},{level:2,title:"MySQL 5.7",slug:"mysql-5-7",children:[{level:3,title:"创建",slug:"创建",children:[]},{level:3,title:"修改密码",slug:"修改密码",children:[]},{level:3,title:"授权",slug:"授权",children:[]},{level:3,title:"查看用户",slug:"查看用户",children:[]},{level:3,title:"查看当前用户",slug:"查看当前用户",children:[]},{level:3,title:"查看用户授权信息",slug:"查看用户授权信息",children:[]},{level:3,title:"撤销权限",slug:"撤销权限",children:[]},{level:3,title:"删除用户",slug:"删除用户",children:[]},{level:3,title:"刷新",slug:"刷新",children:[]}]},{level:2,title:"MySQL 8.0",slug:"mysql-8-0",children:[{level:3,title:"授权",slug:"授权-1",children:[]}]},{level:2,title:"CURD",slug:"curd",children:[{level:3,title:"查询",slug:"查询",children:[]},{level:3,title:"关联",slug:"关联",children:[]}]},{level:2,title:"理论",slug:"理论",children:[{level:3,title:"基础",slug:"基础",children:[]},{level:3,title:"索引",slug:"索引",children:[]},{level:3,title:"SQl 语句",slug:"sql-语句",children:[]},{level:3,title:"查询优化",slug:"查询优化",children:[]},{level:3,title:"高可扩展和高可用",slug:"高可扩展和高可用",children:[]},{level:3,title:"安全性",slug:"安全性",children:[]}]}],filePathRelative:"guide/MySQL.md",git:{updatedTime:163057832e4,contributors:[{name:"Alice",email:"862312883@qq.com",commits:2}]}}},9779:(s,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>l});const e=(0,n(6252).uE)('<h1 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h1><h2 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h2><blockquote><p>以管理员身份</p></blockquote><ul><li>Ubuntu</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">service</span> mysql start\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>MAC</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysql.server start\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>Window</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>net start mysql\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>重启<code>restart</code>/停止<code>stop</code></p><h2 id="mysql-5-7" tabindex="-1"><a class="header-anchor" href="#mysql-5-7" aria-hidden="true">#</a> MySQL 5.7</h2><blockquote><p>以 root 用户登录数据库</p></blockquote><h3 id="创建" tabindex="-1"><a class="header-anchor" href="#创建" aria-hidden="true">#</a> 创建</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>create user <span class="token string">&#39;用户名&#39;</span>@<span class="token string">&#39;主机&#39;</span> identified by <span class="token string">&#39;密码&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>其中 localhost 指本地才可连接</p><p>可以将其换成%指任意 ip 都能连接</p><p>也可以指定 ip 连接</p><h3 id="修改密码" tabindex="-1"><a class="header-anchor" href="#修改密码" aria-hidden="true">#</a> 修改密码</h3><p>修改用户密码的方式包括：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Alter user <span class="token string">&#39;用户名&#39;</span>@<span class="token string">&#39;主机&#39;</span> IDENTIFIED by <span class="token string">&#39;新密码&#39;</span><span class="token punctuation">;</span>\nSET PASSWORD FOR <span class="token string">&#39;用户名&#39;</span>@<span class="token string">&#39;主机&#39;</span> <span class="token operator">=</span> PASSWORD<span class="token punctuation">(</span><span class="token string">&#39;新密码&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nGRANT USAGE ON *.* TO <span class="token string">&#39;用户名&#39;</span>@<span class="token string">&#39;主机&#39;</span> IDENTIFIED BY <span class="token string">&#39;新密码&#39;</span><span class="token punctuation">;</span>\nmysqladmin -u 用户名 -h 主机 password <span class="token string">&quot;新密码&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="授权" tabindex="-1"><a class="header-anchor" href="#授权" aria-hidden="true">#</a> 授权</h3><p><code>with gran option</code>表示该用户可给其它用户赋予权限，但不可能超过该用户已有的权限</p><p>比如 a 用户有<code>select,insert</code>权限，也可给其它用户赋权，但它不可能给其它用户赋<code>delete</code>权限，除了<code>select,insert</code>以外的都不能</p><p>这句话可加可不加，视情况而定</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>grant all privileges on *.* to <span class="token string">&#39;用户名&#39;</span>@<span class="token string">&#39;主机&#39;</span> with grant option<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p><code>all privileges</code> 可换成<code>select,update,insert,delete,drop,create</code>等操作</p></blockquote><blockquote><p>如：<code>grant select,insert,update,delete on *.* to &#39;test1&#39;@&#39;localhost&#39;</code>;</p></blockquote><p>第一个*表示通配数据库，可指定新建用户只可操作的数据库</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>grant all privileges on 数据库.* to <span class="token string">&#39;用户名&#39;</span>@<span class="token string">&#39;主机&#39;</span> identified by <span class="token string">&#39;用户密码&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>第二个*表示通配表，可指定新建用户只可操作的数据库下的某个表</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>grant all privileges on 数据库.指定表名 to <span class="token string">&#39;用户名&#39;</span>@<span class="token string">&#39;主机&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="查看用户" tabindex="-1"><a class="header-anchor" href="#查看用户" aria-hidden="true">#</a> 查看用户</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">select</span> user,host from mysql.user<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="查看当前用户" tabindex="-1"><a class="header-anchor" href="#查看当前用户" aria-hidden="true">#</a> 查看当前用户</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">select</span> user<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="查看用户授权信息" tabindex="-1"><a class="header-anchor" href="#查看用户授权信息" aria-hidden="true">#</a> 查看用户授权信息</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>show grants <span class="token keyword">for</span> <span class="token string">&#39;用户名&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="撤销权限" tabindex="-1"><a class="header-anchor" href="#撤销权限" aria-hidden="true">#</a> 撤销权限</h3><p>用户有什么权限就撤什么权限</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>revoke all privileges on *.* from <span class="token string">&#39;test1&#39;</span>@<span class="token string">&#39;localhost&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="删除用户" tabindex="-1"><a class="header-anchor" href="#删除用户" aria-hidden="true">#</a> 删除用户</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>drop user <span class="token string">&#39;test1&#39;</span>@<span class="token string">&#39;localhost&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="刷新" tabindex="-1"><a class="header-anchor" href="#刷新" aria-hidden="true">#</a> 刷新</h3><p>对用户进行更改后记得刷新</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>flush privileges<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="mysql-8-0" tabindex="-1"><a class="header-anchor" href="#mysql-8-0" aria-hidden="true">#</a> MySQL 8.0</h2><h3 id="授权-1" tabindex="-1"><a class="header-anchor" href="#授权-1" aria-hidden="true">#</a> 授权</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#　不用密码</span>\ngrant all privileges on 数据库.* to <span class="token string">&#39;用户名&#39;</span>@<span class="token string">&#39;主机&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="curd" tabindex="-1"><a class="header-anchor" href="#curd" aria-hidden="true">#</a> CURD</h2><h3 id="查询" tabindex="-1"><a class="header-anchor" href="#查询" aria-hidden="true">#</a> 查询</h3><ul><li>查询 A 或者 B</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>where<span class="token punctuation">(</span>A<span class="token punctuation">)</span>-<span class="token operator">&gt;</span>whereOr<span class="token punctuation">(</span>B<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="关联" tabindex="-1"><a class="header-anchor" href="#关联" aria-hidden="true">#</a> 关联</h3><ul><li>A 模型关联 B 模型只显示 B 的 ba 和 bb 字段</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>A::with<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;B&#39;</span><span class="token operator">=</span><span class="token operator">&gt;</span>function<span class="token punctuation">(</span><span class="token variable">$query</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n      <span class="token variable">$query</span>-<span class="token operator">&gt;</span>field<span class="token punctuation">(</span><span class="token string">&#39;A,B&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span>-<span class="token operator">&gt;</span>where<span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span>,<span class="token variable">$id</span><span class="token punctuation">)</span>-<span class="token operator">&gt;</span>field<span class="token punctuation">(</span><span class="token string">&#39;id,name&#39;</span><span class="token punctuation">)</span>-<span class="token operator">&gt;</span>find<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="理论" tabindex="-1"><a class="header-anchor" href="#理论" aria-hidden="true">#</a> 理论</h2><h3 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h3><ul><li>POD</li></ul><h3 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h3><h3 id="sql-语句" tabindex="-1"><a class="header-anchor" href="#sql-语句" aria-hidden="true">#</a> SQl 语句</h3><h3 id="查询优化" tabindex="-1"><a class="header-anchor" href="#查询优化" aria-hidden="true">#</a> 查询优化</h3><h3 id="高可扩展和高可用" tabindex="-1"><a class="header-anchor" href="#高可扩展和高可用" aria-hidden="true">#</a> 高可扩展和高可用</h3><h3 id="安全性" tabindex="-1"><a class="header-anchor" href="#安全性" aria-hidden="true">#</a> 安全性</h3>',63),l={render:function(s,a){return e}}}}]);