<template><div><h3 id="任务" tabindex="-1"><a class="header-anchor" href="#任务" aria-hidden="true">#</a> 任务</h3>
<ul>
<li>[x] 简单工厂搭建发奖领域</li>
</ul>
<h3 id="学习过程" tabindex="-1"><a class="header-anchor" href="#学习过程" aria-hidden="true">#</a> 学习过程</h3>
<ol>
<li>
<p>表结构变了，先导入 SQL，然后该对应的 PO 类，然后改一下 Mapper 文件</p>
</li>
<li>
<p>先把包结构建好</p>
<ol>
<li>新建一个领域包，负责发奖</li>
<li>领域包内建三个子包，model 实体封装包、repository 提供仓储服务、service 提供具体的服务（重点内容）</li>
</ol>
</li>
<li>
<p>看一下代码的继承关系</p>
</li>
<li>
<p>debug 看一下代码执行流程，了解其中的调用关系</p>
<ol>
<li>先执行抽奖，返回抽奖结果</li>
<li>对抽奖结果进行判断，如果是未中奖，直接返回</li>
<li>中奖了就保存用户信息以及订单信息</li>
<li>根据中奖结果中的奖品类型获取对应的服务</li>
<li>然后把第三步保存的用户信息以及订单信息传进去，做一个发奖的操作</li>
<li>然后返回发奖结果</li>
</ol>
</li>
</ol>
<h2 id="遇到的问题" tabindex="-1"><a class="header-anchor" href="#遇到的问题" aria-hidden="true">#</a> 遇到的问题</h2>
<p>今天还没遇到啥问题，代码比较简单，主要是数据库字段规范之后，好多 Mapper 要改 T.T，最开始我还在纠结要不要当初建表的时候就改了</p>
<p><strong>就很气，本来能学两小节的，md，电脑被亲戚孩子给整挂了，直接开不了机了，麻了，修电脑都修了两小时，系统还重装了，又重装环境</strong></p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ol>
<li>越来越喜欢 DDD 架构这种包的组织方式了，虽然包很多，看着有点复杂，但是真的理解了之后，就感觉很干净，扩展性也很好，虽然目前还没完全搞清楚 DDD</li>
<li>学会了工厂模式，根据奖品类型，从工厂里面拿对应的实现类进行发奖操作</li>
</ol>
</div></template>


