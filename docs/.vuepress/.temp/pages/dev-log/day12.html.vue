<template><div><h3 id="任务" tabindex="-1"><a class="header-anchor" href="#任务" aria-hidden="true">#</a> 任务</h3>
<ul>
<li>[x] 规则引擎量化人群参与活动</li>
</ul>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>首先先去了解了一下组合模式和决策树，然后看了看数据库，其实就是把一个类似于二叉树的结构存到了数据库里，分别对应了三个东西，一个表用来保存决策树的树根信息，然后一个表用来保存树上的所有节点的信息，然后一个表用来存决策树的连接信息，我们可以通过树根的 ID 拿到所有相关的连线信息以及所有相关的节点信息，明白了数据库相关的东西之后屡屡代码结构</p>
<p>什么是组合模式呢？先看看维基百科对组合模式的定义，然后直接看代码，给我的第一感觉就是把每一个 if-else 的条件抽取出来，然后变成一个又一个的 filter，然后在规则引擎中进行使用，首先把一个个 filter 包装到 map 中，供子类使用</p>
<p>其中最重要的代码我觉得是这个：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>    <span class="token keyword">protected</span> <span class="token class-name">TreeNodeVO</span> <span class="token function">engineDecisionMaker</span><span class="token punctuation">(</span><span class="token class-name">TreeRuleRich</span> treeRuleRich<span class="token punctuation">,</span> <span class="token class-name">DecisionMatterReq</span> matterReq<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TreeRootVO</span> treeRoot <span class="token operator">=</span> treeRuleRich<span class="token punctuation">.</span><span class="token function">getTreeRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">TreeNodeVO</span><span class="token punctuation">></span></span> treeNodeMap <span class="token operator">=</span> treeRuleRich<span class="token punctuation">.</span><span class="token function">getTreeNodeMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Long</span> rootNodeId <span class="token operator">=</span> treeRoot<span class="token punctuation">.</span><span class="token function">getTreeRootNodeId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TreeNodeVO</span> treeNodeInfo <span class="token operator">=</span> treeNodeMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>rootNodeId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token class-name">Constants<span class="token punctuation">.</span>NodeType</span><span class="token punctuation">.</span><span class="token constant">STEM</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>treeNodeInfo<span class="token punctuation">.</span><span class="token function">getNodeType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> ruleKey <span class="token operator">=</span> treeNodeInfo<span class="token punctuation">.</span><span class="token function">getRuleKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">LogicFilter</span> logicFilter <span class="token operator">=</span> logicFilterMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>ruleKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> matterValue <span class="token operator">=</span> logicFilter<span class="token punctuation">.</span><span class="token function">matterValue</span><span class="token punctuation">(</span>matterReq<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Long</span> nextNode <span class="token operator">=</span> logicFilter<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>matterValue<span class="token punctuation">,</span> treeNodeInfo<span class="token punctuation">.</span><span class="token function">getTreeNodeLineInfoList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            treeNodeInfo <span class="token operator">=</span> treeNodeMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>nextNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> treeNodeInfo<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>获取树根节点信息</li>
<li>获取树根所对应的所有节点信息</li>
<li>判断每个节点是不是叶子节点
<ol>
<li>如果不是，就执行决策，如果通过就返回下一个节点</li>
<li>如果是叶子节点，也就是找到了对应的活动号，表示可以参与</li>
</ol>
</li>
</ol>
<p>那么就可以将代码结构分为两个部分，一个是决策者，提供决策相关逻辑，一个是执行者，对决策链条进行链路执行，然后返回最终结果，那么到这里应该代码逻辑就清晰了，决策者根据一定的比较规则，返回 ture 或者 false，执行者根据这个结果来判断是否要继续进行下一个判断，直到判断到叶子节点</p>
<p>了解了这个之后代码就好写了</p>
<p>感觉这个章节最大的难点就在于如果之前没有设计模式基础的话，会很难受，代码跳过去跳过来有时候找不到方向，一般我遇到这种情况的时候我就会梳理一下业务逻辑，代码结构无论怎么变，也一定是根据业务逻辑来的，之前做的事情一样不少，所以就按照自己想的逻辑去代码中找对应，去看看哪里做的比较，哪里拿到的链路结构，这样就将大问题化成了小问题，然后去对应代码中的每一个部分，这里也就是将逻辑执行步骤进行“打散”的过程，找到了每段代码对应那一段逻辑之后，看一看代码的继承体系，大概也就了解个七七八八了</p>
</div></template>


