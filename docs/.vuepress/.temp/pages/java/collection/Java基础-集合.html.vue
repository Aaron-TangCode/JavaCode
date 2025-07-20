<template><div><h1 id="java基础-集合类" tabindex="-1"><a class="header-anchor" href="#java基础-集合类" aria-hidden="true">#</a> Java基础-集合类</h1>
<ol>
<li>
<p>集合框架的基本概念</p>
<ul>
<li>集合与数组的区别</li>
<li>集合的优点（动态扩容、提供多种数据结构等）</li>
</ul>
</li>
<li>
<p>接口与实现</p>
<ul>
<li>
<p>Collection 接口：是最基本的集合接口，其他集合接口都继承自 Collection。</p>
</li>
<li>
<p>List 接口：一个有序的集合，可以包含重复的元素，提供索引访问方式。 例子：ArrayList、LinkedList</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"Java"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"Python"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"C++"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Set 接口：一个不允许有重复元素的集合。 例子：HashSet、LinkedHashSet、TreeSet</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"Java"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"Java"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 重复元素，不会被加入</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Queue 接口：提供先进先出队列的操作。 例子：LinkedList、PriorityQueue</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token string">"Java"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 移除并返回队列头部的元素</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Map 接口：提供键值对映射，一个键对应一个值。 例子：HashMap、TreeMap、LinkedHashMap</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">></span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"Java"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"Python"</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>迭代器（Iterator）</p>
<ul>
<li>
<p>使用迭代器遍历集合元素。 例子：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> iterator <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> element <span class="token operator">=</span> iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>泛型（Generics）</p>
<ul>
<li>
<p>泛型的引入是为了指定集合中元素的类型，以避免类型转换错误。 例子：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> strings <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 指定集合元素只能是 String 类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>集合的排序</p>
<ul>
<li>
<p>使用 Collections.sort() 方法或其他相关方法对集合进行排序。 例子：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 对 List 集合进行排序</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>集合的同步</p>
<ul>
<li>
<p>Java 集合框架中有些实现是非同步的，可以使用 Collections 类中的静态方法来包装成同步集合。 例子：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> syncList <span class="token operator">=</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">synchronizedList</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>性能考量</p>
<ul>
<li>理解不同集合实现的性能特点，例如 ArrayList 与 LinkedList 的插入、移除和随机访问的性能差异。</li>
</ul>
</li>
</ol>
<h5 id="数组和集合的区别" tabindex="-1"><a class="header-anchor" href="#数组和集合的区别" aria-hidden="true">#</a> 数组和集合的区别</h5>
<p>在 Java 中，集合（Collections）和数组（Arrays）都是用来存储对象引用的容器，但它们之间有一些显著的区别：</p>
<ol>
<li>大小可变性：
<ul>
<li>数组的大小是固定的。一旦数组被创建，其大小就不能改变。</li>
<li>集合的大小是可变的。集合可以根据需要动态地增长或缩减。</li>
</ul>
</li>
<li>类型安全性：
<ul>
<li>数组是类型安全的，它们在声明时就确定了存储的数据类型。</li>
<li>集合可以使用泛型来实现类型安全，但在泛型出现之前，集合可以存储任意类型的对象，这可能导致运行时错误。</li>
</ul>
</li>
<li>性能：
<ul>
<li>数组有更好的性能，因为它们是固定大小和连续存储的，这使得数组的随机访问非常快。</li>
<li>集合提供更复杂的数据结构，如链表、树和哈希表等，这些数据结构对特定操作有优化，但可能不如数组在随机访问上高效。</li>
</ul>
</li>
<li>功能丰富性：
<ul>
<li>数组功能相对简单，主要支持基本的索引访问。</li>
<li>集合框架提供了大量的功能，如自动扩容、排序、搜索、插入和删除元素等，以及更丰富的接口和实现。</li>
</ul>
</li>
<li>遍历方式：
<ul>
<li>数组可以通过普通的 for 循环和 for-each 循环进行遍历。</li>
<li>集合可以通过迭代器（Iterator）、for-each 循环，以及（对于 List）列表迭代器（ListIterator）进行遍历。</li>
</ul>
</li>
<li>内存占用：
<ul>
<li>数组通常占用较少的内存，因为它们是连续存储的，并且没有额外的空间开销。</li>
<li>集合因为其动态扩容和更复杂的数据结构，可能会占用更多的内存。</li>
</ul>
</li>
</ol>
<p>下面是一个简单的比较示例：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token number">1</span><span class="token comment">// 数组示例</span>
<span class="token number">2</span>int<span class="token punctuation">[</span><span class="token punctuation">]</span> numbersArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 大小固定为 5</span>
<span class="token number">3</span>numbersArray<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token number">4</span><span class="token comment">// ...</span>
<span class="token number">5</span>
<span class="token number">6</span><span class="token comment">// 集合示例</span>
<span class="token number">7L</span>ist<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> numbersList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 大小可动态改变</span>
<span class="token number">8</span>numbersList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">9</span><span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7.应用场景：</p>
<ul>
<li>集合提供了可动态扩展的丰富接口和更加灵活的数据结构，适合用在需要频繁插入、删除和排序等操作的场景。</li>
<li>数组由于其性能优势，适用于大小固定，重视随机访问效率的场景。</li>
</ul>
<h5 id="map、list、set、collection的关系" tabindex="-1"><a class="header-anchor" href="#map、list、set、collection的关系" aria-hidden="true">#</a> Map、List、Set、Collection的关系</h5>
<p>在 Java 中，Map、List、Set 和 Collection 属于 Java 集合框架的一部分，它们之间的关系如下：</p>
<ol>
<li>Collection 接口：
<ul>
<li>Collection 是 Java 集合框架中的根接口，但它不包括 Map 接口。</li>
<li>它定义了所有单列集合共有的操作，如添加元素、删除元素、清空集合、判断集合是否包含某元素等。</li>
<li>任何实现了 Collection 接口的集合类（不包括 Map）都有这些基本操作。</li>
</ul>
</li>
<li>List 接口：
<ul>
<li>List 继承自 Collection 接口，是一个有序集合，可以包含重复的元素，且每个元素都有其对应的索引。</li>
<li>List 的典型实现有 ArrayList、LinkedList 等。</li>
<li>List 允许对元素进行位置（索引）的精确控制，可以通过索引访问元素。</li>
</ul>
</li>
<li>Set 接口：
<ul>
<li>Set 也是继承自 Collection 接口，是一个不允许有重复元素的集合，也是无序的（TreeSet 是有序的，但它的顺序是元素的排序顺序，而不是插入顺序）。</li>
<li>Set 的实现类有 HashSet、LinkedHashSet（保持插入顺序）和 TreeSet（有序集合，基于红黑树）等。</li>
<li>Set 通常用于存放不重复的元素集。</li>
</ul>
</li>
<li>Map 接口：
<ul>
<li>Map 并不继承自 Collection 接口，它是一个完全独立的接口。</li>
<li>Map 存储键值对（key-value pairs），每个键映射到一个值，键不允许重复（必须唯一），值可以重复。</li>
<li>Map 的实现类有 HashMap、LinkedHashMap（保持插入顺序）和 TreeMap（有序映射，基于红黑树）等。</li>
</ul>
</li>
</ol>
<p>在 Java 集合框架中，Collection 和 Map 是两大主要的根接口，分别代表了两种不同的存储和操作数据的方式。Collection 主要是单个元素的集合，而 Map 是键值对的集合。List 和 Set 是 Collection 的两个主要子接口，它们定义了集合的特定行为。</p>
<p>下面是一个简单的图表说明了它们之间的关系：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>             <span class="token class-name">Iterable</span>
                 <span class="token operator">|</span>
            <span class="token class-name">Collection</span>
             <span class="token operator">/</span>      \
           <span class="token operator">/</span>         \
         <span class="token class-name">List</span>        <span class="token class-name">Set</span>
        <span class="token operator">/</span>  <span class="token operator">|</span>  \      <span class="token operator">/</span>  <span class="token operator">|</span>  \
<span class="token class-name">ArrayList</span> <span class="token class-name">LinkedList</span> <span class="token class-name">HashSet</span> <span class="token class-name">LinkedHashSet</span> <span class="token class-name">TreeSet</span>

                <span class="token class-name">Map</span>
              <span class="token operator">/</span>  <span class="token operator">|</span>  \
    <span class="token class-name">HashMap</span> <span class="token class-name">LinkedHashMap</span> <span class="token class-name">TreeMap</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，虽然 Map 不是 Collection 的子接口，但它是 Java 集合框架的一部分，并且它具有与 Collection 相似的功能，如存储和操作一组对象。</p>
</div></template>


