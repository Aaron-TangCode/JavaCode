<template><div><h2 id="任务" tabindex="-1"><a class="header-anchor" href="#任务" aria-hidden="true">#</a> 任务</h2>
<ul>
<li>[x] 活动领域的配置与状态</li>
</ul>
<h2 id="学习过程" tabindex="-1"><a class="header-anchor" href="#学习过程" aria-hidden="true">#</a> 学习过程</h2>
<ol>
<li>包结构变化，调整对应的包</li>
<li>了解活动创建的整个流程，然后将流程进行编排(其实就是落库的步骤呗)，写对应的 repository 层代码
<ol>
<li>首先明确要做哪些操作
<ol>
<li>添加活动</li>
<li>添加奖品</li>
<li>添加活动配置</li>
<li>添加策略</li>
<li>添加策略明细</li>
</ol>
</li>
<li>编写对应的 repository 接口和实现类</li>
<li></li>
</ol>
</li>
<li>debug 了解状态模式如何进行的状态判断(感觉不用刻意去学这个设计模式，通过对项目的学习，从而达到状态模式的学习，<strong>后期进行设计模式的统一学习</strong>）
<ol>
<li>首先定义一个状态处理的接口，入参统一是活动ID和当前状态</li>
<li>定义一个活动状态抽象类，这个抽象类的子类用来判断某种状态是否可以流转</li>
<li>编写抽象类的实现，里面定义是否可以流转</li>
<li>编写状态配置类，把每一种活动状态抽象类的实现注入进去并放入 Map 中，供状态处理服务使用</li>
<li>编写状态处理接口的实现类
<ol>
<li>先从状态配置中获取当前状态所对应的活动状态流转实现类</li>
<li>然后实现类调用方法，通过方法的返回值来确定是否能进行操作
<ol>
<li>如果能进行变更的，先进行落库操作，然后根据 MyBatis 返回值返回对应信息</li>
<li>如果不能进行变更的，直接返回对应的错误信息</li>
</ol>
</li>
</ol>
</li>
</ol>
</li>
</ol>
<h2 id="遇到的问题" tabindex="-1"><a class="header-anchor" href="#遇到的问题" aria-hidden="true">#</a> 遇到的问题</h2>
<ol>
<li>
<p>为什么要使用 <code v-pre>BeanUtils.copyProperties()</code></p>
<p>因为原来很少使用这种方法，以前都是 new 对象，然后把传进来的对象手动一个一个赋值，对这个方法不太了解，简单来说就是实现对象的拷贝，属性名相同的就进行拷贝，属性名不相同的就不进行操作，底层使用反射，首先把读写权限都设置为 true，然后再进行获取和赋值操作，这种操作是 <strong>浅拷贝</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">Modifier</span><span class="token punctuation">.</span><span class="token function">isPublic</span><span class="token punctuation">(</span>readMethod<span class="token punctuation">.</span><span class="token function">getDeclaringClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getModifiers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    readMethod<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Object</span> value <span class="token operator">=</span> readMethod<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">Modifier</span><span class="token punctuation">.</span><span class="token function">isPublic</span><span class="token punctuation">(</span>writeMethod<span class="token punctuation">.</span><span class="token function">getDeclaringClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getModifiers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    writeMethod<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
writeMethod<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>数据库 bug <code v-pre>### Error updating database.  Cause: java.sql.SQLException: Incorrect string value: '\xE4\xB8\x80\xE7\xAD\x89...' for column 'award_name' at row 1</code></p>
<p>中文插入乱码问题，我建数据库的时候设置了 utf8，但是建表的时候默认没有设置成 <code v-pre>utf8</code>，使用的编码是 <code v-pre>latin1</code>，所以需要修改字段的编码为 <code v-pre>utf8</code></p>
</li>
</ol>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ol>
<li>
<p>包结果的变化</p>
<ol>
<li>首先呢这个解决了我之前的一个疑问：为啥要把数据库的真实操作写到领域层呢？这不应该写到基础服务层更符合逻辑吗？</li>
<li>更改详情：基础服务模块引入领域模块，在领域层写 repository 接口，在基础服务层写实现</li>
</ol>
</li>
<li>
<p>状态流程处理</p>
<p>相对于普通的 if-else 处理流程，状态模式设计模式把状态的流转转化为方法，从而简化了 if-else 一坨接着一坨的形式，如果有新的状态，只需要添加对应的抽象实现以及在其他实现中添加对应的流转方法</p>
<p><em>后期对设计模式进行统一的学习，目前只了解了基础的程序运行流程，根据流程来了解对应的设计模式，目前对于状态模式的了解仅限于以下两点</em></p>
<ol>
<li>将一种状态的流转包装成一个类，然后在类里面定义是否可以流转</li>
<li>状态的流转通过调用方法的形式进行，而不是通过 if-else 去判断，比如要把状态修改为审核通过，那么直接调用 <code v-pre>checkPass()</code> 然后找到当前状态处理类，调用处理类的 <code v-pre>checkPass()</code> 方法，然后返回结果就可以了</li>
</ol>
</li>
<li>
<p>对于学习的思考</p>
<p>最近陷入了日夜颠倒的死循环，主要就是晚上窝在床上玩手机呢，然后看了会儿星球就想起床学习，一学又搞到两三点三四点，搞不好 bug 多还通了个宵，导致第二天甚至第三天状态低迷，后面要压制学习欲望了，每天该做的做完了就休息，以后每周日休息一天，晚上一点前就睡觉，避免陷入死循环，再多的任务，人的精力也是有限的，只要按部就班稳扎稳打，相信最后也会有收获，不必急于求成</p>
</li>
</ol>
</div></template>


