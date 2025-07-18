<template><div><h3 id="任务" tabindex="-1"><a class="header-anchor" href="#任务" aria-hidden="true">#</a> 任务</h3>
<ul>
<li>[x] 分库分表组件</li>
</ul>
<h3 id="遇到的问题" tabindex="-1"><a class="header-anchor" href="#遇到的问题" aria-hidden="true">#</a> 遇到的问题</h3>
<p>问题就不说了，这一章节全是问题 T.T，基础不牢，地动山摇啊！！！</p>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<p>首先建立一个大局观，要实现一个分库分表组件，那么先要学会如何编写 SpringBoot Starter，然后这个 Starter 需要实现的功能是分库分表，那么一定是有多个数据源，这个数据源从项目的 yml 配置文件传进来，然后就要实现多数据源的切换，然后分表操作就是要修改 SQL 的表名，所以需要做的事情大概是如下：</p>
<ol>
<li>读取数据源信息</li>
<li>动态修改数据源</li>
<li>动态修改 SQL</li>
</ol>
<p>那么细节该如何实现呢？需要想几个问题，某条数据应该分到哪个库的哪个表呢？这个库表信息该存到哪里进行共享呢？如何动态修改数据源呢？如何动态修改 SQL 呢？那么就需要对应的技术进行支持：</p>
<ol>
<li>Spring &amp; SpringBoot 基础框架，提供依赖注入、配置管理功能</li>
<li><code v-pre>AbstractRoutingDataSource </code> 实现动态数据源的路由逻辑</li>
<li><code v-pre>AspectJ</code> 切面编程，运行时动态拦截方法调用</li>
<li>反射 API，从方法参数中提取路由键的值</li>
<li>正则表达式，解析和修改 SQL</li>
<li>ThreadLocal，存储路由信息，以支持动态数据源路由</li>
</ol>
<p>总体执行流程：</p>
<ol>
<li>调用被 <code v-pre>@DBRouter</code> 注解的方法</li>
<li>然后被切面进行拦截，拦截之后先进行路由计算，然后把计算结果保存到 ThreadLocal 中</li>
<li>然后 DynamicDataSource 通过保存到 ThreadLocal 中的数据确定使用哪一个数据源</li>
<li>然后 MyBatis 插件修改 SQL 中的表字段</li>
<li>然后数据库操作执行完成</li>
<li>切面清理 ThreadLocal 里面的数据</li>
<li>方法执行完成，返回结果</li>
</ol>
<p>虽然步骤不多，但是稍不注意就会出现小 bug，抑或扰动函数算法出错，抑或解析 yml 配置出错等等诸多问题，也是花了两三天才大致搞明白这个路由组件，因为这里面的东西大部分之前都没接触过，查阅了许多文档，毕竟之前连切面都不怎么用，最多也就是拿来做全局日志处理</p>
<p>总之，要先在大脑里面理清总体的一个执行流程，然后根据这个流程再去看代码要清晰很多，最开始的时候没理清步骤，直接看的代码，那种感觉就像第一天学 DDD 一样，直接一脸懵逼，怎么这么多包，卧槽，第一遍下来大概只学到了百分之五十吧，这一遍大概只学到了整体架构，具体的细节还没掌握，下一次努力啃啃细节，如果要我写整个这一套代码，我肯定写出来会报很多错，但是第一次就想学透整个路程怎么可能呢？好在这一次理清了整体架构，至少有了头绪，不至于开不了头，有了头绪，到处搜一搜，拼拼凑凑也能写，哈哈哈</p>
</div></template>


