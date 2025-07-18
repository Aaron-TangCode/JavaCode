<template><div><h3 id="任务" tabindex="-1"><a class="header-anchor" href="#任务" aria-hidden="true">#</a> 任务</h3>
<ul>
<li>[x] 在应用层编排抽奖过程</li>
</ul>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<p>今天的内容比较简单，最主要的问题就是表改了，然后花了很多时间去改对应的 PO 以及 SQL，然后今天第一次开发 application 层，感觉就是把 domain 层各个领域进行组装，然后形成一个又一个的流程，在这里面会使用 MQ 把流程进行切片，之后写门面接口应该就是调 application 层里面各个流程了，这样对于 Controller 层感觉挺好的，只需要简单的封装一下前端传进来的参数，然后调用 application 层执行各个流程就可以了</p>
<p>感觉今天最大的收获就在于学到了在开发的过程中要把整个流程切分一下，分成一块一块的，然后用 MQ 进行后续的操作，用户不需要感知到这一切，他只需要点进去，然后执行一个小的片段，然后剩下的操作可以使用 MQ 来慢慢操作，而不是之前那样直接单线程一个流程写完，又臭又长，返回得还慢，用户体验很不好，学到了流程切片，今天不亏，哈哈哈哈，这个东西还是很有用的</p>
</div></template>


