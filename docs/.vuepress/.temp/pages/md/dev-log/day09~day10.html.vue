<template><div><h3 id="任务" tabindex="-1"><a class="header-anchor" href="#任务" aria-hidden="true">#</a> 任务</h3>
<ul>
<li>[x] 在应用层编排抽奖过程</li>
</ul>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<p>有了前面的模板模式的基础，这一章节相对来说比较容易，自己实现的时候也没有什么大问题，大体流程就是写接口，编排流程，然后写实现类，然后写 Mapper，至于为什么花了两三天，这就不得不说上一章的分库分表了，没写过 SpringBoot Starter，没写过 MyBatis 插件，对 AOP 没有深刻的理解，纯硬啃下来的，但是记不太劳，所以晚上睡不着觉，总感觉缺点什么东西，就花了两天干了如下几件事：</p>
<ol>
<li>
<p>新建一个空的 SpringBoot 项目，从 <code v-pre>SpringApplication.run()</code> 方法开始 debug，一步一步看，在这一个过程中主要学到了如下几点：</p>
<ul>
<li>一个 SpringBoot 项目是如何初始化的，在哪里创建的容器等等</li>
<li>如何加载第三方 Starter 的</li>
<li><s>在哪里打印的Banner 以及如何设置</s> 这个不是重点，哈哈哈，但是挺好玩的</li>
<li>还有 <code v-pre>ApplicationRunner</code> 和 <code v-pre>CommandLineRunner</code></li>
<li>还有异常报告器 <code v-pre>exceptionReporters</code></li>
<li>还有几个关于上下文环境的重要方法 <code v-pre>prepareContext()</code> 、<code v-pre>refreshContext()</code>、<code v-pre>afterRefresh()</code></li>
</ul>
<p>明白了 SpringBoot 应用初始化流程就知道所写的分录分表路由 starter 是在哪个阶段进行数据源设置以及为什么要在 <code v-pre>AutoConfig</code> 类下进行 Bean 的注入了</p>
</li>
<li>
<p>看了看 MyBatis 插件相关的文档，大致了解了一个 MyBatis 插件如何编写，看了这个以后看 MyBatis-Plus 源码的时候可能会轻松一点</p>
</li>
<li>
<p>复习了一下 AOP，注解的属性有哪些以及该怎么写都有点忘了</p>
</li>
<li>
<p>在这个 debug 的过程中其实画了一些图，但是因为没有 OSS，所以图片不太好展示，所以使用 vuepress + github pages + github actions 搭建了一个博客，后面有空了会把看源码的过程发上去</p>
</li>
</ol>
<p>虽然很想继续往下学，但是感觉这个项目里面，分库分表这一章节应该是灵魂所在了，虽然还没学后面，但是感觉其他章节更多的是关注业务层面，主要是来解决业务问题的，但是分库分表这一章节感觉能彻彻底底搞明白的话收获应该是很大的，虽然进度慢了，但是通过对源码的阅读也学到了很多东西，比如代码规范，在阅读 SpringBoot 源码的时候，给我最大的感觉就是，其实好的东西是不需要太多注释的，因为他每一步所调用的方法都给你写的很明白，比如 SpringBoot 程序初始化过程，只要英文够好，就跟看<s>小学阅读一样</s>，不知道花的这两天值不值，毕竟还有一个月就找工作了，是不是应该快点把项目做完</p>
</div></template>


