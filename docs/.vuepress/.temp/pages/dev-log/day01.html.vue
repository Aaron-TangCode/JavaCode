<template><div><h2 id="任务" tabindex="-1"><a class="header-anchor" href="#任务" aria-hidden="true">#</a> 任务</h2>
<ul>
<li>[x] 环境配置</li>
<li>[x] 搭建项目结构</li>
<li>[x] 跑通广播模式 RPC 过程调用</li>
</ul>
<h2 id="学习过程" tabindex="-1"><a class="header-anchor" href="#学习过程" aria-hidden="true">#</a> 学习过程</h2>
<ol>
<li>
<p>项目整体了解</p>
<p>通过对第一节文档的阅读，了解整个项目的生命周期、所需要的技术以及代码提交规范</p>
</li>
<li>
<p>搭建项目结构，理解每个模块应该干什么</p>
<table>
<thead>
<tr>
<th>模块</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>Lottery</td>
<td>总项目，用来管理整个项目的依赖</td>
</tr>
<tr>
<td>lottery-application</td>
<td>应用层，为用户接口层提供各种应用数据展现支持服务</td>
</tr>
<tr>
<td>lottery-common</td>
<td>定义通用数据，比如统一响应数据、常量、异常、枚举等</td>
</tr>
<tr>
<td>lottery-domain</td>
<td>领域层，核心业务逻辑</td>
</tr>
<tr>
<td>lottery-infrastructure</td>
<td>基础层，为其他各层提供通用技术能力，包括数据库、Redis、ES 等</td>
</tr>
<tr>
<td>lottery-interfaces</td>
<td>用户接口层，存放与前端交互、展现数据相关的代码</td>
</tr>
<tr>
<td>lottery-rpc</td>
<td>RPC 接口文件</td>
</tr>
</tbody>
</table>
<blockquote>
<p>注：因为并不了解 DDD 架构，所以每个模块目前只有模糊的概念，具体的东西在后续代码编写中进行体会</p>
</blockquote>
</li>
<li>
<p>阅读 <a href="https://gitcode.net/KnowledgePlanet/Lottery/-/tree/210801_xfg_initProject" target="_blank" rel="noopener noreferrer">210801_xfg_initProject<ExternalLinkIcon/></a> 分支上的 POM 文件</p>
<p>通过对 POM 文件的阅读，更加清楚的了解这个项目所使用的技术，并且通过阅读发现项目没有添加 Lombok 来简化开发，具体项目开发是否使用这个插件我不知道，但是我想用，因为我<strong>懒</strong>，所以就给加上了😄</p>
</li>
<li>
<p>跑通 RPC</p>
<ol>
<li>定义 response 状态码枚举供通用返回对象 Result 进行使用</li>
<li>定义通用返回对象 Result 类</li>
<li>定义 activity 表的持久化对象</li>
<li>定义 activity 表的 Mapper 接口</li>
<li>定义 mybatis 配置文件</li>
<li>定义 activity 表的 mapper.xml 文件</li>
<li>定义 rpc 的数据传输对象(DTO) ActivityDto</li>
<li>定义 rpc 的 请求对象 ActivityReq</li>
<li>定义 rpc 的响应对象 ActivityRes</li>
<li>定义 rpc 接口 IActivityBooth</li>
<li>实现 IActivityBooth 接口</li>
<li>编写启动类</li>
<li>编写配置文件 application.yml</li>
<li>编写测试模块 <strong>这个我是直接加在工程里面的，教程是单独开了一个项目</strong></li>
</ol>
</li>
</ol>
<h2 id="遇到的问题" tabindex="-1"><a class="header-anchor" href="#遇到的问题" aria-hidden="true">#</a> 遇到的问题</h2>
<ol>
<li>
<p>代码分层不清晰，不知道每个模块应该干什么事</p>
<p>这个问题该怎么解决呢？我觉得最好的解决办法就是不解决，哈哈哈，因为当初学 MVC 的时候最开始也不清楚为什么要这样分层，为什么就要分 Controller、Service 和 DAO，但是后来经过大量代码的编写，也逐渐熟悉了这样的分层架构，所以现在并不想解决这个问题，具体还是靠后面的代码进行了解和熟悉吧</p>
</li>
<li>
<p>JSON.toJSonString() 方法返回了空 <code v-pre>{}</code></p>
<p>问题出现原因，忘了加 <code v-pre>@Data</code> 注解，导致没有 <code v-pre>getter/setter</code> 就导致了这个问题，加上注解即可</p>
<p>解决！</p>
</li>
<li>
<p>数据库乱码问题</p>
<p>测试模块 RPC 远程调用返回的结果为:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>测试结果：<span class="token punctuation">{</span><span class="token property">"activity"</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">"activityDesc"</span><span class="token operator">:</span><span class="token string">"?????????"</span><span class="token punctuation">,</span><span class="token property">"activityId"</span><span class="token operator">:</span><span class="token number">100002</span><span class="token punctuation">,</span><span class="token property">"activityName"</span><span class="token operator">:</span><span class="token string">"????"</span><span class="token punctuation">,</span><span class="token property">"beginDateTime"</span><span class="token operator">:</span><span class="token number">1705215282000</span><span class="token punctuation">,</span><span class="token property">"endDateTime"</span><span class="token operator">:</span><span class="token number">1705215282000</span><span class="token punctuation">,</span><span class="token property">"stockCount"</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token property">"takeCount"</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token property">"result"</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">"code"</span><span class="token operator">:</span><span class="token string">"0000"</span><span class="token punctuation">,</span><span class="token property">"info"</span><span class="token operator">:</span><span class="token string">"成功"</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>明显的乱码问题，查看数据库，发现插入的时候就以及乱码了，看了一下配置文件中的数据库连接 url，发现使用了 useUnicode=true，并没有指定字符集，所以添加一下 utf-8 字符集即可，完整 url: <code v-pre>jdbc:mysql://127.0.0.1:3306/lottery?useUnicode=true&amp;characterEncoding=UTF-8</code></p>
<p>再进行一轮测试，测试结果：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>测试结果：<span class="token punctuation">{</span><span class="token property">"activity"</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">"activityDesc"</span><span class="token operator">:</span><span class="token string">"仅用于插入数据测试"</span><span class="token punctuation">,</span><span class="token property">"activityId"</span><span class="token operator">:</span><span class="token number">100003</span><span class="token punctuation">,</span><span class="token property">"activityName"</span><span class="token operator">:</span><span class="token string">"测试活动"</span><span class="token punctuation">,</span><span class="token property">"beginDateTime"</span><span class="token operator">:</span><span class="token number">1705218054000</span><span class="token punctuation">,</span><span class="token property">"endDateTime"</span><span class="token operator">:</span><span class="token number">1705218054000</span><span class="token punctuation">,</span><span class="token property">"stockCount"</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token property">"takeCount"</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token property">"result"</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">"code"</span><span class="token operator">:</span><span class="token string">"0000"</span><span class="token punctuation">,</span><span class="token property">"info"</span><span class="token operator">:</span><span class="token string">"成功"</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解决！</p>
</li>
</ol>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>今天干了说明呢？</p>
<ol>
<li>配置环境</li>
<li>跑通 RPC</li>
</ol>
<p>具体怎么跑通 RPC 的呢？</p>
<ol>
<li>在 common 模块创建通用类</li>
<li>在 infrastructure 模块创建 dao 接口以及和数据库相对应的 po 类</li>
<li>在 rpc 模块下创建 RPC 通信接口以及对应的请求和响应的封装类</li>
<li>然后在 interfaces 模块下实现 rpc 模块的接口，在这里调用 Mapper 进行增删改查</li>
<li>然后就写配置呗，SpringBoot 配置、Dubbo 配置、MyBatis 配置</li>
</ol>
<p>学到了什么呢？</p>
<ol>
<li>由于之前学习一直使用的是 MVC 架构，并且命名不太规范，所以对于包的命名现在很不适应，比如什么dto、vo啥的各种 o 不太熟悉，这个就不准备纠结了，准备靠代码量进行熟悉</li>
<li>对每个模块有了大概的了解，至少知道了接口写在哪个模块，接口实现类在哪个模块以及 Mapper 写在哪</li>
<li>现在在我眼中，这个 interfaces 模块，就跟以前学的 Dubbo 的服务提供者一样吧？因为这个模块用来实现接口的，所以就会引用其他模块，要调用其他模块的东西就要添加依赖，所以这个模块起起来之后，就带动了所有模块，整个项目也就 run 起来了</li>
</ol>
<p>第一天，脑子还有点迷糊，因为基础不太牢固，所以有些小 bug 花费了挺长时间的，但是至少是跑起来了吧？也还行，路虽远，行则将至嘛，虽然年后要找实习，但是还是慌不得，慢慢来，一口吃不成个大胖子，准备晚上再补一补 Dubbo 基础</p>
</div></template>


