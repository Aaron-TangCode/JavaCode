<template><div><h1 id="如何防止接口被盗刷" tabindex="-1"><a class="header-anchor" href="#如何防止接口被盗刷" aria-hidden="true">#</a> 如何防止接口被盗刷</h1>
<p>接口被盗刷，就是指某些用户对某个接口进行频繁访问。</p>
<p>有哪些方法可以对防止接口被盗刷？</p>
<ul>
<li>
<p>验证码，比如登录的时候，就使用到验证码，这种方法可以有效防止普通用户频繁访问，但是如果用户是一个黑客，是可以绕过验证码，直接访问后端的接口的。这个时候可以用到限流。</p>
<p>![image-20240128182509762](/Users/aaron/Library/Application Support/typora-user-images/image-20240128182509762.png)</p>
</li>
<li>
<p>限流：就是限制一段时间内接口的访问频率。比如QPS 50 ，即每秒50次。超过这个频率就拒绝访问接口。</p>
</li>
<li>
<p>IP黑名单</p>
<ul>
<li>如果是已某些IP用户是恶意用户，可以通过IP黑名单进行限制访问</li>
</ul>
</li>
</ul>
<p>针对使用限流方案，目前最佳实践是：sentinel和hystrix</p>
<p>Hytstrix:https://github.com/Netflix/Hystrix</p>
<p>Sentinel:https://github.com/alibaba/Sentinel</p>
</div></template>


