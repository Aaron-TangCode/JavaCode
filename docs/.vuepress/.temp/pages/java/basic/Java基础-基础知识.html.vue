<template><div><h1 id="java基础-基础语法" tabindex="-1"><a class="header-anchor" href="#java基础-基础语法" aria-hidden="true">#</a> Java基础-基础语法</h1>
<h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h3>
<p>Java 是一种<strong>静态类型</strong>语言，它包括了两种数据类型：</p>
<ul>
<li>基本数据类型（Primitive Data Types）：int, char, byte, short, long, float, double, boolean。</li>
<li>引用数据类型（Reference Data Types）：类（Class）、接口（Interface）和数组（Array）。</li>
</ul>
<p><strong>补充</strong></p>
<p>1、其中String，Integer，Long这些都属于类，因此属于「引用数据类型」</p>
<p>2、基本数据类型占用的字节</p>
<table>
<thead>
<tr>
<th>基本数据类型</th>
<th>字节数</th>
<th>数据范围</th>
</tr>
</thead>
<tbody>
<tr>
<td>int</td>
<td>4</td>
<td>-2147483648~2147483647</td>
</tr>
<tr>
<td>char</td>
<td>2</td>
<td>0~65535</td>
</tr>
<tr>
<td>byte</td>
<td>1</td>
<td>-128~127</td>
</tr>
<tr>
<td>short</td>
<td>2</td>
<td>-32768~31767</td>
</tr>
<tr>
<td>long</td>
<td>8</td>
<td>-9223372036854775808~9223372036854775807</td>
</tr>
<tr>
<td>float</td>
<td>4</td>
<td>1.4e-45f ~ 3.4028235e+38f</td>
</tr>
<tr>
<td>double</td>
<td>8</td>
<td>4.9e-324 ~ 1.7976931348623157e+308</td>
</tr>
<tr>
<td>boolean</td>
<td>1</td>
<td>true / false</td>
</tr>
</tbody>
</table>
<h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h3>
<p>Java 中的变量必须先声明后使用，声明时需要指定变量的数据类型。</p>
<p>变量的命名规则</p>
<ol>
<li><strong>字母数字字符和下划线</strong>：变量名可以包含字母、数字、下划线（_）和美元符号（$），但不能以数字开头。</li>
<li><strong>区分大小写</strong>：Java是区分大小写的编程语言，这意味着<code v-pre>variable</code>和<code v-pre>Variable</code>是两个不同的变量名。</li>
<li><strong>不可以是关键字</strong>：变量名不能使用Java的保留关键字。例如，你不能将变量命名为<code v-pre>int</code>或<code v-pre>class</code>。</li>
<li><strong>长度限制</strong>：理论上，变量名的长度没有限制，但为了代码的可读性和可维护性，应该使用适当长度的变量名。</li>
<li><strong>Unicode字符</strong>：变量名可以使用任何Unicode字符，但不推荐使用，因为它会使代码难以阅读和理解。</li>
</ol>
<p>此外，虽然不是硬性规则，还有一些命名约定应该遵守，以提高代码的可读性和一致性：</p>
<ul>
<li><strong>驼峰命名法</strong>：在Java中，变量名通常采用所谓的驼峰命名法。对于局部变量和实例变量，通常使用小驼峰式命名法（lowerCamelCase），即变量名的第一个单词首字母小写，之后每个单词的首字母都大写，比如<code v-pre>localVariable</code>、<code v-pre>studentName</code>。</li>
<li><strong>有意义的名称</strong>：变量名应该有描述性，能够表明变量的用途，如<code v-pre>employeeSalary</code>，<code v-pre>totalCount</code>。</li>
<li><strong>常量命名</strong>：如果变量是常量（即使用<code v-pre>final</code>关键字修饰的变量），则应该全部使用大写字母，并且单词之间用下划线分隔，如<code v-pre>MAX_CODE</code>。</li>
</ul>
<p>例子：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token number">1</span>int count<span class="token punctuation">;</span>      <span class="token comment">// 符合规则，使用小写字母开头</span>
<span class="token number">2</span>String myName<span class="token punctuation">;</span>  <span class="token comment">// 符合规则，使用小驼峰式命名法</span>
<span class="token number">3f</span>inal <span class="token keyword">double</span> <span class="token constant">PI_VALUE</span> <span class="token operator">=</span> <span class="token number">3.14159</span><span class="token punctuation">;</span>  <span class="token comment">// 符合规则，常量全部大写，单词间用下划线分隔</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修饰符" tabindex="-1"><a class="header-anchor" href="#修饰符" aria-hidden="true">#</a> 修饰符</h3>
<p>Java 提供了多种修饰符来设置类、变量和方法的访问规则和其他功能。主要分为访问控制修饰符（public, private, protected）和非访问控制修饰符（static, final, abstract 等）</p>
<ol>
<li><strong>访问修饰符</strong>：在Java中，访问权限修饰符决定了类、变量、方法和构造器的可访问性。主要有四种访问修饰符：
<ul>
<li><code v-pre>public</code>：公开的，可以被任何其他类访问。</li>
<li><code v-pre>protected</code>：受保护的，可以被同一个包内的类以及不同包中的子类访问。</li>
<li><code v-pre>default</code>（没有修饰符）：默认访问，仅能被同一个包内的类访问。</li>
<li><code v-pre>private</code>：私有的，只能在定义它们的类内部访问。</li>
</ul>
</li>
<li><strong>非访问修饰符</strong>：这些修饰符不控制访问级别，但提供了其他功能。主要包括：
<ul>
<li><code v-pre>static</code>：静态修饰符，用于创建类的静态成员，它们可以在未实例化类的情况下访问。</li>
<li><code v-pre>final</code>：表示最终的，可以修饰类、方法和变量。修饰类时，表明类不能被继承；修饰方法时，表明方法不能被重写；修饰变量时，表示变量的值一旦赋值后不能被改变。</li>
<li><code v-pre>abstract</code>：抽象的，用于创建抽象类和抽象方法。抽象类不能被实例化，抽象方法必须由子类提供实现。</li>
<li><code v-pre>synchronized</code>：表示同步，用于多线程编程中，可以用于方法或代码块。加了此关键字的方法或代码块在任何时刻只能有一个线程执行。</li>
<li><code v-pre>transient</code>：瞬态的，用在序列化过程中，表示某个属性不需要序列化。</li>
<li><code v-pre>volatile</code>：易变的，用于告知虚拟机该变量可能会被多个线程同时访问，从而确保每次都从主内存中读取变量值。</li>
</ul>
</li>
<li><strong>类成员修饰符</strong>：类成员包括变量、方法和构造器，它们可以使用访问修饰符和非访问修饰符。</li>
<li><strong>类修饰符</strong>：用于修饰类的声明。除了上述修饰符外，还可以使用<code v-pre>strictfp</code>关键字，它可以保证类中的浮点运算在不同平台上结果一致。</li>
<li><strong>常见的访问修饰符组合及其含义</strong>：比如<code v-pre>public static final</code>经常用来定义常量。</li>
<li><strong>修饰符的规则和最佳实践</strong>：比如使用最小访问原则，即只为其他类提供必要的访问权限，以及理解哪些修饰符组合是合法的（例如，方法不能同时是<code v-pre>abstract</code>和<code v-pre>final</code>）</li>
</ol>
<h3 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h3>
<p>Java 支持多种运算符来对数据进行操作，包括算术运算符（+,-,*,/,% 等）、关系运算符（==,!=,&gt;,&lt;,&gt;=,&lt;=）、逻辑运算符（&amp;&amp;,||, !）、赋值运算符（=, +=, -= 等）和位运算符。</p>
<ol>
<li><strong>算术运算符</strong>：
<ul>
<li>加法（<code v-pre>+</code>）</li>
<li>减法（<code v-pre>-</code>）</li>
<li>乘法（<code v-pre>*</code>）</li>
<li>除法（<code v-pre>/</code>）</li>
<li>取余（模运算）（<code v-pre>%</code>）</li>
<li>自增（<code v-pre>++</code>）</li>
<li>自减（<code v-pre>--</code>）</li>
</ul>
</li>
<li><strong>关系运算符</strong>：
<ul>
<li>等于（<code v-pre>==</code>）</li>
<li>不等于（<code v-pre>!=</code>）</li>
<li>大于（<code v-pre>&gt;</code>）</li>
<li>小于（<code v-pre>&lt;</code>）</li>
<li>大于等于（<code v-pre>&gt;=</code>）</li>
<li>小于等于（<code v-pre>&lt;=</code>）</li>
</ul>
</li>
<li><strong>逻辑运算符</strong>：
<ul>
<li>逻辑与（<code v-pre>&amp;&amp;</code>）</li>
<li>逻辑或（<code v-pre>||</code>）</li>
<li>逻辑非（<code v-pre>!</code>）</li>
</ul>
</li>
<li><strong>位运算符</strong>：
<ul>
<li>位与（<code v-pre>&amp;</code>）</li>
<li>位或（<code v-pre>|</code>）</li>
<li>位异或（<code v-pre>^</code>）</li>
<li>位非（取反）（<code v-pre>~</code>）</li>
<li>左移（<code v-pre>&lt;&lt;</code>）</li>
<li>右移（<code v-pre>&gt;&gt;</code>）</li>
<li>无符号右移（<code v-pre>&gt;&gt;&gt;</code>）</li>
</ul>
</li>
<li><strong>赋值运算符</strong>：
<ul>
<li>简单赋值（<code v-pre>=</code>）</li>
<li>加法赋值（<code v-pre>+=</code>）</li>
<li>减法赋值（<code v-pre>-=</code>）</li>
<li>乘法赋值（<code v-pre>*=</code>）</li>
<li>除法赋值（<code v-pre>/=</code>）</li>
<li>取余赋值（<code v-pre>%=</code>）</li>
<li>左移赋值（<code v-pre>&lt;&lt;=</code>）</li>
<li>右移赋值（<code v-pre>&gt;&gt;=</code>）</li>
<li>位与赋值（<code v-pre>&amp;=</code>）</li>
<li>位或赋值（<code v-pre>|=</code>）</li>
<li>位异或赋值（<code v-pre>^=</code>）</li>
</ul>
</li>
<li><strong>条件运算符</strong>（也称为三元运算符）：
<ul>
<li><code v-pre>? :</code>，用于简单的条件赋值，形式为 <code v-pre>条件 ? 表达式1 : 表达式2</code>，如果条件为真，则结果为表达式1，否则为表达式2。</li>
</ul>
</li>
<li><strong>类型相关的运算符</strong>：
<ul>
<li>类型转换运算符，例如 <code v-pre>(int)</code>, <code v-pre>(double)</code> 等，用于将表达式显式转换为其他类型。</li>
<li><code v-pre>instanceof</code>，用于检查一个对象是否是特定类的实例。</li>
</ul>
</li>
<li><strong>运算符的优先级和结合性</strong>：
<ul>
<li>理解不同运算符之间的优先级关系，比如乘除的优先级高于加减。</li>
<li>理解同一优先级运算符的计算顺序，也就是结合性，比如赋值运算符的结合性是从右到左。</li>
</ul>
</li>
<li><strong>运算符的重载</strong>：
<ul>
<li>Java中唯一支持运算符重载的是加号（<code v-pre>+</code>），主要用于字符串的连接</li>
</ul>
</li>
</ol>
<p><strong>注意点</strong></p>
<ul>
<li>=和==的区别</li>
</ul>
<h3 id="控制流程语句" tabindex="-1"><a class="header-anchor" href="#控制流程语句" aria-hidden="true">#</a> 控制流程语句</h3>
<p>控制程序流程的语句，包括条件语句（if-else, switch-case）和循环语句（for, while, do-while）等</p>
<ol>
<li><strong>条件语句</strong>：这些语句根据条件的真假来决定程序的执行路径。
<ul>
<li><code v-pre>if</code>语句：用于基于条件执行代码块。</li>
<li><code v-pre>if...else</code>语句：当<code v-pre>if</code>条件为真时执行一个代码块，否则执行<code v-pre>else</code>部分的代码。</li>
<li><code v-pre>else if</code>链：用于创建多个条件分支。</li>
<li><code v-pre>switch</code>语句：选择多个代码块之一去执行。<code v-pre>switch</code>可以使用<code v-pre>case</code>语句来定义不同的分支，以及<code v-pre>default</code>来定义当没有匹配的<code v-pre>case</code>时的默认行为。</li>
</ul>
</li>
<li><strong>循环语句</strong>：这些语句允许代码重复执行，直到满足某个条件。
<ul>
<li><code v-pre>while</code>循环：当条件为真时，循环会一直执行。</li>
<li><code v-pre>do-while</code>循环：与<code v-pre>while</code>循环类似，但保证至少执行一次循环体，然后再检查条件。</li>
<li><code v-pre>for</code>循环：允许在循环声明中初始化变量，定义循环条件以及更新循环变量。</li>
<li><code v-pre>for-each</code>循环：Java 5引入的增强型<code v-pre>for</code>循环，用于遍历数组或集合中的元素。</li>
</ul>
</li>
<li><strong>跳转语句</strong>：这些语句用于改变执行流程，跳过某些代码的执行。
<ul>
<li><code v-pre>break</code>：立即退出最近的包围<code v-pre>switch</code>语句或循环。</li>
<li><code v-pre>continue</code>：跳过当前循环的剩余部分，并开始下一个循环迭代。</li>
<li><code v-pre>return</code>：退出当前方法，并可选地返回一个值（如果方法不是<code v-pre>void</code>类型的话）。</li>
</ul>
</li>
<li><strong>异常处理</strong>：用于处理程序运行时可能出现的意外情况或错误。
<ul>
<li><code v-pre>try</code>块：包围可能会抛出异常的代码。</li>
<li><code v-pre>catch</code>块：捕捉异常并定义如何处理它们。</li>
<li><code v-pre>finally</code>块：无论是否捕捉到异常，<code v-pre>finally</code>块中的代码总是会被执行。</li>
<li><code v-pre>throw</code>：用于手动抛出异常。</li>
<li><code v-pre>throws</code>：在方法签名中声明可能抛出的异常。</li>
</ul>
</li>
<li><strong>控制流程的最佳实践</strong>：理解如何有效地使用控制流程语句，例如：
<ul>
<li>避免过度使用<code v-pre>break</code>和<code v-pre>continue</code>，因为它们可能会使循环逻辑变得难以跟踪。</li>
<li>使用有意义的条件表达式以提高代码的可读性。</li>
<li>在<code v-pre>switch</code>语句中不要忘记<code v-pre>break</code>，以避免无意的“穿透”到下一个<code v-pre>case</code>。</li>
<li>尽量使循环和条件语句简单，避免嵌套过深，从而提高代码的可理解性。</li>
<li>在适当的时候使用异常处理来增强程序的健壮性。</li>
</ul>
</li>
</ol>
<h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h3>
<p>定义：数组是用来存储固定大小的同类型元素的集合。</p>
<ol>
<li><strong>数组的基本概念</strong>：
<ul>
<li>定义：数组是一种存储<strong>固定</strong>大小的<strong>同类型</strong>元素的<strong>顺序</strong>集合。</li>
<li>数组是一个对象。</li>
</ul>
</li>
<li><strong>数组的声明、创建和初始化</strong>：
<ul>
<li>如何声明数组，例如 <code v-pre>int[] myArray;</code>。</li>
<li>如何创建数组实例，例如 <code v-pre>myArray = new int[10];</code>，这里分配了一个可以存储10个整数的空间。</li>
<li>如何同时声明和创建数组，例如 <code v-pre>int[] myArray = new int[10];</code>。</li>
<li>如何对数组进行初始化，例如 <code v-pre>int[] myArray = {1, 2, 3, 4, 5};</code>。</li>
<li>数组一旦创建后，大小就是固定的。</li>
</ul>
</li>
<li><strong>数组元素的访问和修改</strong>：
<ul>
<li>如何通过下标（索引）访问数组元素，例如 <code v-pre>int x = myArray[0];</code>。</li>
<li>如何通过下标修改数组元素的值，例如 <code v-pre>myArray[0] = 10;</code>。</li>
<li><strong>数组下标是从0开始的，最大的索引是数组长度减1</strong>。</li>
</ul>
</li>
<li><strong>数组的特性和属性</strong>：
<ul>
<li>如何使用数组的<code v-pre>length</code>属性来获取数组的大小，例如 <code v-pre>int size = myArray.length;</code>。</li>
<li>Java数组在内存中的连续存储特性</li>
</ul>
</li>
<li><strong>数组的遍历</strong>：
<ul>
<li>使用传统的<code v-pre>for</code>循环遍历数组。</li>
<li>使用增强的<code v-pre>for</code>循环（也称为<code v-pre>for-each</code>循环）来遍历数组，例如 <code v-pre>for(int element : myArray) {...}</code>。</li>
</ul>
</li>
<li><strong>多维数组</strong>：
<ul>
<li>Java支持多维数组（数组的数组），例如二维数组 <code v-pre>int[][] matrix;</code>。</li>
<li>如何声明、创建和初始化多维数组。</li>
</ul>
</li>
<li><strong>常见操作和算法</strong>：
<ul>
<li>常见的数组操作，如排序、搜索、复制、反转等。</li>
<li>如何使用Java标准库中的<code v-pre>Arrays</code>类进行数组操作，例如 <code v-pre>Arrays.sort(myArray);</code>。</li>
</ul>
</li>
<li><strong>数组和函数</strong>：
<ul>
<li>如何将数组作为参数传递给函数。</li>
<li>如何从函数返回数组。</li>
</ul>
</li>
<li><strong>数组的局限性和替代方案</strong>：
<ul>
<li>数组的局限性，例如无法动态改变大小、缺乏某些方便的操作方法等。</li>
<li>Java集合框架（如<code v-pre>ArrayList</code>），它提供了更加灵活的数据结构。</li>
</ul>
</li>
</ol>
<h3 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h3>
<p>方法是一组用来执行特定任务的语句的集合。方法可以带有参数并且可以返回值。</p>
<ol>
<li>
<p><strong>方法的定义和调用</strong>：</p>
<ul>
<li>方法是一段具有特定功能的代码块，可以被调用执行。</li>
<li>如何定义一个方法，包括指定方法名、返回类型、参数列表和方法体。</li>
</ul>
<p><strong>示例</strong>：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token number">1</span><span class="token comment">// 定义一个方法，计算两个整数的和</span>
<span class="token number">2</span>public <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span> <span class="token keyword">int</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">3</span>    <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
<span class="token number">4</span><span class="token punctuation">}</span>
<span class="token number">5</span>
<span class="token number">6</span><span class="token comment">// 调用方法</span>
<span class="token number">7</span>public <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">8</span>    <span class="token class-name">MyClass</span> myClass <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">9</span>    <span class="token keyword">int</span> result <span class="token operator">=</span> myClass<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">10</span>    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Sum is: "</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">11</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>参数传递</strong>：</p>
<ul>
<li>如何向方法传递参数。</li>
<li>java中参数传递是按值传递，对于基本数据类型传递的是值副本，对于对象传递的是引用副本。</li>
</ul>
<p><strong>示例</strong>：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token number">1</span>public <span class="token keyword">void</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">2</span>    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello, "</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">3</span><span class="token punctuation">}</span>
<span class="token number">4</span>
<span class="token number">5</span><span class="token comment">// 调用方法</span>
<span class="token number">6</span>public <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">7</span>    <span class="token class-name">MyClass</span> myClass <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">8</span>    myClass<span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token string">"Alice"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">9</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>方法重载（Overloading）</strong>：</p>
<ul>
<li>定义：多个具有相同名称但参数列表不同的方法。</li>
</ul>
<p>参数列表不同可以体现在以下几个方面：</p>
<ol>
<li><strong>参数的数量不同</strong>：方法的参数个数可以不同。
<ul>
<li>示例：<code v-pre>void display(int a)</code> 和 <code v-pre>void display(int a, int b)</code></li>
</ul>
</li>
<li><strong>参数的类型不同</strong>：即使参数的数量相同，但数据类型不同，也构成方法重载。
<ul>
<li>示例：<code v-pre>void display(int a)</code> 和 <code v-pre>void display(String a)</code></li>
</ul>
</li>
<li><strong>参数的顺序不同</strong>：参数的数据类型顺序不同，即使它们的数量和类型相同。
<ul>
<li>示例：<code v-pre>void display(int a, String b)</code> 和 <code v-pre>void display(String a, int b)</code></li>
</ul>
</li>
</ol>
<p>以下是一个具体的Java方法重载的例子：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OverloadingExample</span> <span class="token punctuation">{</span>

    <span class="token comment">// 方法1：一个参数</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">String</span> content<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 方法2：两个参数，类型相同</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">String</span> content1<span class="token punctuation">,</span> <span class="token class-name">String</span> content2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>content1 <span class="token operator">+</span> <span class="token string">", "</span> <span class="token operator">+</span> content2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 方法3：两个参数，类型不同</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">String</span> content<span class="token punctuation">,</span> <span class="token keyword">int</span> repeat<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> repeat<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 方法4：两个参数，顺序不同</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token keyword">int</span> repeat<span class="token punctuation">,</span> <span class="token class-name">String</span> content<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> repeat<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">OverloadingExample</span> example <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OverloadingExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        example<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"Hello World"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">// 调用方法1</span>
        example<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">,</span> <span class="token string">"World"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// 调用方法2</span>
        example<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"Hello World"</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// 调用方法3</span>
        example<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">"Hello World"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// 调用方法4</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>递归方法</strong>：</p>
<ul>
<li>定义：方法自己调用自己，这称为递归。</li>
</ul>
<p><strong>示例</strong>：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token number">1</span>public <span class="token keyword">int</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">2</span>    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">3</span>        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token number">4</span>    <span class="token punctuation">}</span>
<span class="token number">5</span>    <span class="token keyword">return</span> n <span class="token operator">*</span> <span class="token function">factorial</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">6</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>返回值</strong>：</p>
<ul>
<li>方法可以有返回值，也可以没有返回值（使用<code v-pre>void</code>）。</li>
<li>如何使用<code v-pre>return</code>语句从方法返回值。</li>
</ul>
<p><strong>示例</strong>：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token number">1</span>public <span class="token keyword">boolean</span> <span class="token function">isEven</span><span class="token punctuation">(</span><span class="token keyword">int</span> number<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">2</span>    <span class="token keyword">return</span> number <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token number">3</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>变长参数（Varargs）</strong>：</p>
<ul>
<li>如何定义接受任意数量参数的方法。</li>
</ul>
<p><strong>示例</strong>：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token number">1</span>public <span class="token keyword">void</span> <span class="token function">printNumbers</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> numbers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">2</span>    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> number <span class="token operator">:</span> numbers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">3</span>        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>number <span class="token operator">+</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">4</span>    <span class="token punctuation">}</span>
<span class="token number">5</span>    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">6</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>作用域</strong>：</p>
<ul>
<li>局部变量的作用域限制在方法内部。</li>
</ul>
<p><strong>示例</strong>：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token number">1</span>public <span class="token keyword">void</span> <span class="token function">testScope</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">2</span>    <span class="token keyword">int</span> localVar <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// localVar 的作用域限于 testScope 方法内</span>
<span class="token number">3</span>    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>localVar<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">4</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="类与对象" tabindex="-1"><a class="header-anchor" href="#类与对象" aria-hidden="true">#</a> 类与对象</h3>
<p>Java 是一种面向对象的编程语言，类（Class）是对象的模板，对象（Object）是类的实例。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 定义一个简单的类</span>
<span class="token number">2</span>public <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
<span class="token number">3</span>    <span class="token comment">// 字段定义（属性）</span>
<span class="token number">4</span>    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
<span class="token number">5</span>    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token number">6</span>
<span class="token number">7</span>    <span class="token comment">// 构造方法</span>
<span class="token number">8</span>    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">9</span>        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token number">10</span>        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token number">11</span>    <span class="token punctuation">}</span>
<span class="token number">12</span>
<span class="token number">13</span>    <span class="token comment">// 方法定义（行为）</span>
<span class="token number">14</span>    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">introduce</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">15</span>        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello, my name is "</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">" and I am "</span> <span class="token operator">+</span> age <span class="token operator">+</span> <span class="token string">" years old."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">16</span>    <span class="token punctuation">}</span>
<span class="token number">17</span>
<span class="token number">18</span>    <span class="token comment">// Getter 和 Setter 方法</span>
<span class="token number">19</span>    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">20</span>        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
<span class="token number">21</span>    <span class="token punctuation">}</span>
<span class="token number">22</span>
<span class="token number">23</span>    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">24</span>        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token number">25</span>    <span class="token punctuation">}</span>
<span class="token number">26</span>
<span class="token number">27</span>    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">28</span>        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
<span class="token number">29</span>    <span class="token punctuation">}</span>
<span class="token number">30</span>
<span class="token number">31</span>    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">32</span>        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token number">33</span>    <span class="token punctuation">}</span>
<span class="token number">34</span>
<span class="token number">35</span>    <span class="token comment">// 静态方法示例</span>
<span class="token number">36</span>    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">37</span>        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">38</span>    <span class="token punctuation">}</span>
<span class="token number">39</span><span class="token punctuation">}</span>
<span class="token number">40</span>
<span class="token number">41</span><span class="token comment">// 类的使用</span>
<span class="token number">42</span>public <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
<span class="token number">43</span>    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">44</span>        <span class="token comment">// 创建对象</span>
<span class="token number">45</span>        <span class="token class-name">Person</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"Alice"</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">46</span>        <span class="token class-name">Person</span> person2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"Bob"</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">47</span>
<span class="token number">48</span>        <span class="token comment">// 调用对象的方法</span>
<span class="token number">49</span>        person1<span class="token punctuation">.</span><span class="token function">introduce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">50</span>        person2<span class="token punctuation">.</span><span class="token function">introduce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">51</span>
<span class="token number">52</span>        <span class="token comment">// 访问静态方法</span>
<span class="token number">53</span>        <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">54</span>    <span class="token punctuation">}</span>
<span class="token number">55</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3>
<ol>
<li><strong>继承的基本概念</strong>：
<ul>
<li>继承是OOP中的一个核心概念，子类可以继承父类的属性和方法。</li>
</ul>
</li>
<li><strong>方法重写（Override）</strong>：
<ul>
<li>子类可以重写父类的方法以提供特定的实现。</li>
<li>如何使用<code v-pre>@Override</code>注解来显式标记一个方法为重写父类方法。</li>
</ul>
</li>
<li><strong>super关键字的使用</strong>：
<ul>
<li><code v-pre>super</code>关键字如何用于在子类中访问父类的构造方法、属性和方法。</li>
</ul>
</li>
<li><strong>构造方法和继承</strong>：
<ul>
<li>子类如何通过<code v-pre>super()</code>调用父类的构造方法。</li>
<li>默认情况下，子类的构造方法会自动调用父类无参的构造方法。</li>
</ul>
</li>
<li><strong>继承的访问控制</strong>：
<ul>
<li>不同访问修饰符对继承的影响，如<code v-pre>public</code>、<code v-pre>protected</code>、默认（包访问权限）和<code v-pre>private</code>。</li>
</ul>
</li>
<li><strong>final关键字</strong>：
<ul>
<li><code v-pre>final</code>关键字的作用，它可以防止类被继承、方法被重写或属性被改变。</li>
</ul>
</li>
<li><strong>抽象类和方法</strong>：
<ul>
<li>抽象类不能被实例化，子类必须实现（重写）父类的抽象方法。</li>
</ul>
</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 父类</span>
<span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">" is eating."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">" is sleeping."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 子类继承父类</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用父类的构造方法</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 方法重写</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">" is eating dog food."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 子类特有方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">" is barking."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用继承</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Dog</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">"Buddy"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dog<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：Buddy is eating dog food.</span>
        dog<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：Buddy is sleeping.</span>
        dog<span class="token punctuation">.</span><span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：Buddy is barking.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Animal</code>类是一个基类，它有两个方法：<code v-pre>eat</code>和<code v-pre>sleep</code>。<code v-pre>Dog</code>类通过<code v-pre>extends</code>关键字继承了<code v-pre>Animal</code>类，并重写了<code v-pre>eat</code>方法以提供特定于狗的吃食行为。此外，<code v-pre>Dog</code>类还定义了一个它自己特有的方法，<code v-pre>bark</code>。</p>
<h3 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h3>
<ol>
<li><strong>接口的定义和基本概念</strong>：
<ul>
<li>接口（Interface）是一种完全抽象的类，它允许多个类实现相同的方法。</li>
</ul>
</li>
<li><strong>接口中的方法</strong>：
<ul>
<li>接口可以包含抽象方法（在Java 8之前）和默认方法（Java 8+），以及静态方法（Java 8+）。</li>
</ul>
</li>
<li><strong>默认方法和静态方法</strong>：
<ul>
<li>默认方法允许你在接口中定义具有实现的方法，而不需要在每个实现类中重写它们。</li>
<li>静态方法属于接口，不可被实现类继承或重写。</li>
</ul>
</li>
<li><strong>实现接口</strong>：
<ul>
<li>如何使用<code v-pre>implements</code>关键字来实现一个或多个接口。</li>
<li>一个类可以实现多个接口。</li>
</ul>
</li>
<li><strong>接口的继承</strong>：
<ul>
<li>接口可以继承一个或多个其他接口，并且子接口继承父接口的所有方法。</li>
</ul>
</li>
<li><strong>接口与多态</strong>：
<ul>
<li>接口如何被用于实现多态性，即通过接口引用可以指向不同实现该接口的类的对象。</li>
</ul>
</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 定义一个接口</span>
<span class="token keyword">interface</span> <span class="token class-name">Movable</span> <span class="token punctuation">{</span>
    <span class="token comment">// 抽象方法</span>
    <span class="token keyword">void</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 默认方法（Java 8+）</span>
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">description</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"I can move!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实现接口的类</span>
<span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token keyword">implements</span> <span class="token class-name">Movable</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Car is moving."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Human</span> <span class="token keyword">implements</span> <span class="token class-name">Movable</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Human is walking."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用接口</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Movable</span> movable1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Movable</span> movable2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Human</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        movable1<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：Car is moving.</span>
        movable2<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：Human is walking.</span>

        <span class="token comment">// 调用默认方法</span>
        movable1<span class="token punctuation">.</span><span class="token function">description</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：I can move!</span>
        movable2<span class="token punctuation">.</span><span class="token function">description</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：I can move!</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Movable</code>是一个接口，它定义了一个抽象方法<code v-pre>move</code>和一个默认方法<code v-pre>description</code>。<code v-pre>Car</code>和<code v-pre>Human</code>都实现了<code v-pre>Movable</code>接口，并提供了<code v-pre>move</code>方法的具体实现。</p>
<p>通过实现接口，可以使<code v-pre>Car</code>和<code v-pre>Human</code>类在保持独立性的同时共享<code v-pre>Movable</code>接口的行为规范。此外，可以通过<code v-pre>Movable</code>接口的引用来指向任何实现了该接口的对象，体现了多态性的概念。</p>
<h3 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理" aria-hidden="true">#</a> 异常处理</h3>
<ol>
<li><strong>异常的概念</strong>：
<ul>
<li>异常是程序运行过程中出现的非预期事件，它会打断正常的程序流程。</li>
</ul>
</li>
<li><strong>异常的分类</strong>：
<ul>
<li>学习Java中异常的两大类：<code v-pre>Error</code>和<code v-pre>Exception</code>。</li>
<li><code v-pre>Error</code>是指程序无法处理的严重问题，如<code v-pre>OutOfMemoryError</code>。</li>
<li><code v-pre>Exception</code>分为两种：检查型异常（checked exceptions）和非检查型异常（unchecked exceptions）。</li>
</ul>
</li>
<li><strong>try-catch-finally</strong>：
<ul>
<li>使用<code v-pre>try</code>块捕获可能出现异常的代码。</li>
<li>使用<code v-pre>catch</code>块处理异常。</li>
<li>使用<code v-pre>finally</code>块执行无论是否发生异常都需要执行的代码。</li>
</ul>
</li>
<li><strong>抛出异常</strong>：
<ul>
<li>使用<code v-pre>throw</code>关键字手动抛出异常的情况。</li>
<li>创建和使用自定义异常。</li>
</ul>
</li>
<li><strong>异常的传播</strong>：
<ul>
<li>未被当前方法捕获的异常将被传递到调用栈中的上一层方法。</li>
</ul>
</li>
<li><strong>throws关键字</strong>：
<ul>
<li>当方法不处理检查型异常时，如何使用<code v-pre>throws</code>关键字在方法签名中声明异常。</li>
</ul>
</li>
<li><strong>自定义异常</strong>：
<ul>
<li>如何继承<code v-pre>Exception</code>或<code v-pre>RuntimeException</code>类创建自定义异常。</li>
</ul>
</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 自定义异常</span>
<span class="token keyword">class</span> <span class="token class-name">MyException</span> <span class="token keyword">extends</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">MyException</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 可能抛出异常的代码块</span>
            <span class="token function">checkValue</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">MyException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 捕获并处理异常</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Caught Exception: "</span> <span class="token operator">+</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token comment">// 无论是否发生异常都会执行的代码</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Finally block is executed."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 使用throws声明方法可能抛出的异常</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">checkValue</span><span class="token punctuation">(</span><span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">MyException</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 手动抛出异常</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">MyException</span><span class="token punctuation">(</span><span class="token string">"Value can't be negative!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Value is: "</span> <span class="token operator">+</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们定义了一个自定义异常<code v-pre>MyException</code>，然后在<code v-pre>main</code>方法中使用了<code v-pre>try-catch-finally</code>结构来处理<code v-pre>checkValue</code>方法可能抛出的异常。</p>
<p><code v-pre>checkValue</code>方法检查传入的值是否为负数，如果是，它将抛出一个<code v-pre>MyException</code>。如果在<code v-pre>try</code>块中抛出异常，<code v-pre>catch</code>块将会捕获它并打印详细信息。无论是否捕获到异常，<code v-pre>finally</code>块都会被执行，这通常用于资源清理等操作。</p>
<h3 id="包-package" tabindex="-1"><a class="header-anchor" href="#包-package" aria-hidden="true">#</a> 包（Package）</h3>
<ol>
<li><strong>包的概念</strong>：
<ul>
<li>包（Package）是Java用于组织类和接口的一种命名空间。</li>
<li>包可以避免命名冲突，方便管理大型软件项目中的类结构，并可提供访问保护。</li>
</ul>
</li>
<li><strong>创建包</strong>：
<ul>
<li>使用<code v-pre>package</code>关键字定义包。通常，包的命名规则遵循公司或组织的反向互联网域名，以确保全球唯一性。</li>
</ul>
</li>
<li><strong>导入包</strong>：
<ul>
<li>使用<code v-pre>import</code>关键字导入其他包中的类或接口。</li>
<li>可以使用单个导入声明或使用通配符<code v-pre>*</code>导入一个包下的所有类。</li>
</ul>
</li>
<li><strong>类路径</strong>：
<ul>
<li>Java如何使用类路径（classpath）来定位和加载类文件。</li>
<li>如何设置类路径，让Java虚拟机能找到你的类文件。</li>
</ul>
</li>
<li><strong>访问修饰符与包</strong>：
<ul>
<li>掌握不同访问修饰符（<code v-pre>public</code>、<code v-pre>protected</code>、默认（无修饰符）和<code v-pre>private</code>）对类和类成员在包内外的可见性影响。</li>
</ul>
</li>
</ol>
<p>示例</p>
<p>1.<strong>创建包</strong>：</p>
<p>假设你要为一个名为<code v-pre>com.mycompany.myapp</code>的应用程序创建一个包含用户类的包：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token number">1</span><span class="token comment">// 在文件 User.java 的顶部声明包</span>
<span class="token number">2</span>package com<span class="token punctuation">.</span>mycompany<span class="token punctuation">.</span>myapp<span class="token punctuation">;</span>
<span class="token number">3</span>
<span class="token number">4</span>public <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
<span class="token number">5</span>    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
<span class="token number">6</span>    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token number">7</span>
<span class="token number">8</span>    <span class="token keyword">public</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">9</span>        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token number">10</span>        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token number">11</span>    <span class="token punctuation">}</span>
<span class="token number">12</span>
<span class="token number">13</span>    <span class="token comment">// ... 其他方法 ...</span>
<span class="token number">14</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.<strong>导入包</strong>：</p>
<p>现在，假设你要在另一个包中创建一个类，这个类需要使用<code v-pre>User</code>类：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token number">1</span><span class="token comment">// 在文件 UserService.java 的顶部导入 User 类</span>
<span class="token number">2</span>package com<span class="token punctuation">.</span>mycompany<span class="token punctuation">.</span>myapp<span class="token punctuation">.</span>service<span class="token punctuation">;</span>
<span class="token number">3</span>
<span class="token number">4</span>import <span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>mycompany<span class="token punctuation">.</span>myapp<span class="token punctuation">.</span></span>User</span><span class="token punctuation">;</span>
<span class="token number">5</span>
<span class="token number">6</span>public <span class="token keyword">class</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
<span class="token number">7</span>    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printUserDetails</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">8</span>        <span class="token comment">// ... 使用 User 类的方法 ...</span>
<span class="token number">9</span>    <span class="token punctuation">}</span>
<span class="token number">10</span>
<span class="token number">11</span>    <span class="token comment">// ... 其他方法 ...</span>
<span class="token number">12</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者，如果你想要导入<code v-pre>com.mycompany.myapp</code>包下的所有类，你可以这样写：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token number">1</span>import com<span class="token punctuation">.</span>mycompany<span class="token punctuation">.</span>myapp<span class="token punctuation">.</span>*<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.<strong>设置类路径</strong>：</p>
<p>在命令行中编译和运行Java程序时，你可能需要设置类路径，例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1# 设置编译时的类路径
2javac -cp .;lib/* com/mycompany/myapp/User.java
3
4# 设置运行时的类路径（Windows系统使用分号；Linux/macOS使用冒号）
5java -cp .;lib/* com.mycompany.myapp.Main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>.</code>表示当前目录，<code v-pre>lib/*</code>表示<code v-pre>lib</code>目录下所有的JAR文件。分号<code v-pre>;</code>是Windows系统的路径分隔符，而Linux和macOS使用冒号<code v-pre>:</code>作为路径分隔符。</p>
<h3 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h3>
<ol>
<li><strong>多态的概念</strong>：
<ul>
<li>多态允许你将对象视作它们的基类类型，而实际上运行的是对象的实际类型的方法。</li>
</ul>
</li>
<li><strong>继承或接口</strong>
<ul>
<li>继承多态和接口多态</li>
</ul>
</li>
<li><strong>方法覆盖（Override）</strong>：
<ul>
<li>子类可以重写父类的方法。在多态中，子类对象会调用重写后的方法，而非父类中定义的版本。</li>
</ul>
</li>
<li><strong>向上转型（Upcasting）</strong>：
<ul>
<li>将子类对象赋值给父类引用的过程，这种转换总是安全的。</li>
</ul>
</li>
<li><strong>方法动态绑定</strong>：
<ul>
<li>在多态中，方法调用是在运行时而不是编译时确定的。Java虚拟机（JVM）在运行时确定要调用对象的实际类型的方法。</li>
</ul>
</li>
<li><strong>向下转型（Downcasting）和类型转换</strong>：
<ul>
<li>当你需要访问子类特有的成员时，如果你拥有的是一个父类引用，你可以将其向下转型到子类，但这可能不安全，因此通常需要进行类型检查。</li>
</ul>
</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 父类</span>
<span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Some sound"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 子类</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token comment">// 方法覆盖</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Bark"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 子类特有的方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Fetches the ball"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 向上转型</span>
        <span class="token class-name">Animal</span> myDog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Dog对象被视作Animal类型</span>

        <span class="token comment">// 动态绑定方法调用</span>
        myDog<span class="token punctuation">.</span><span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Bark</span>

        <span class="token comment">// 尝试访问子类特有的方法 - 错误的做法</span>
        <span class="token comment">// myDog.fetch(); // 编译错误: Animal类中没有定义fetch方法</span>

        <span class="token comment">// 向下转型</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>myDog <span class="token keyword">instanceof</span> <span class="token class-name">Dog</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 检查myDog是否是Dog类的实例</span>
            <span class="token class-name">Dog</span> dog <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Dog</span><span class="token punctuation">)</span> myDog<span class="token punctuation">;</span> <span class="token comment">// 安全的向下转型</span>
            dog<span class="token punctuation">.</span><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 现在可以调用子类特有的方法</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Animal</code>是一个父类，它有一个方法<code v-pre>makeSound</code>。<code v-pre>Dog</code>是<code v-pre>Animal</code>的子类，并重写了<code v-pre>makeSound</code>方法。在<code v-pre>main</code>方法中，我们创建了一个<code v-pre>Dog</code>对象，但是将它赋值给了<code v-pre>Animal</code>类型的变量<code v-pre>myDog</code>，这是一个向上转型的过程，<code v-pre>myDog</code>的静态类型是<code v-pre>Animal</code>，但它的动态类型是<code v-pre>Dog</code>。因此，当调用<code v-pre>myDog.makeSound()</code>时，会执行<code v-pre>Dog</code>类中覆盖后的方法。</p>
<p>注意，在向上转型后，<code v-pre>myDog</code>引用无法直接调用<code v-pre>Dog</code>类中特有的方法，如<code v-pre>fetch</code>。为了调用这些方法，我们需要先进行类型检查（使用<code v-pre>instanceof</code>关键字），然后将<code v-pre>myDog</code>向下转型为<code v-pre>Dog</code>类型。</p>
<h3 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h3>
<p>1.什么是泛型？</p>
<p>Java 泛型（Generics）是 Java 语言中的一个特性，它允许在编译时提供类型检查并消除强制类型转换</p>
<p>2.泛型的特点</p>
<ul>
<li>
<p><strong>类型安全</strong>：泛型提供编译时类型检查，这意味着只能将正确的类型的对象添加到集合中。这减少了运行时出现<code v-pre>ClassCastException</code>的可能性。</p>
</li>
<li>
<p><strong>消除强制类型转换</strong>：由于泛型提供了类型检查，因此不需要在获取集合中的元素时进行显式的类型转换。</p>
</li>
<li>
<p><strong>泛化代码</strong>：通过泛型，可以编写更加通用的代码，以处理不同类型的数据。例如，可以编写一个排序列表的方法，这个方法可以对任何类型的列表工作，而不仅仅是特定类型的列表。</p>
</li>
<li>
<p><strong>类型参数</strong>：可以在类、接口和方法创建时声明类型参数。这些类型参数在使用时由具体的类型替换。</p>
</li>
</ul>
<p>3.泛型的基本语法涉及到几个关键符号：</p>
<ul>
<li><code v-pre>&lt;T&gt;</code>：表示一个类型参数，<code v-pre>T</code> 是一个占位符，可以在实例化类或调用方法时被实际的类型（如<code v-pre>Integer</code>、<code v-pre>String</code>等）替换。</li>
<li><code v-pre>&lt;?&gt;</code>：表示不确定的类型，也被称为通配符。</li>
<li><code v-pre>&lt;T extends B&gt;</code>：有界类型参数，<code v-pre>T</code> 必须是 <code v-pre>B</code> 类型或者 <code v-pre>B</code> 的子类型。</li>
<li><code v-pre>&lt;T super B&gt;</code>：<code v-pre>T</code> 必须是 <code v-pre>B</code> 类型或者 <code v-pre>B</code> 的父类型。</li>
</ul>
<p>4.泛型的使用场景</p>
<p>泛型类（Generic Classes）：创建可以操作不同数据类型的类。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token number">1</span>public <span class="token keyword">class</span> <span class="token class-name">Box</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
<span class="token number">2</span>    <span class="token keyword">private</span> <span class="token class-name">T</span> t<span class="token punctuation">;</span> <span class="token comment">// T stands for "Type"</span>
<span class="token number">3</span>
<span class="token number">4</span>    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">T</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">5</span>        <span class="token keyword">this</span><span class="token punctuation">.</span>t <span class="token operator">=</span> t<span class="token punctuation">;</span>
<span class="token number">6</span>    <span class="token punctuation">}</span>
<span class="token number">7</span>
<span class="token number">8</span>    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">9</span>        <span class="token keyword">return</span> t<span class="token punctuation">;</span>
<span class="token number">10</span>    <span class="token punctuation">}</span>
<span class="token number">11</span><span class="token punctuation">}</span>
<span class="token number">12</span><span class="token comment">// 使用：</span>
<span class="token number">13</span>Box<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> integerBox <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Box</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">14</span>integerBox<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 装入整数</span>
<span class="token number">15</span>Integer someInteger <span class="token operator">=</span> integerBox<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">16</span>
<span class="token number">17</span>Box<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> stringBox <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Box</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">18</span>stringBox<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"Hello World"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 装入字符串</span>
<span class="token number">19</span>String someString <span class="token operator">=</span> stringBox<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>泛型接口（Generic Interfaces）：创建通用接口。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token number">1</span>interface <span class="token class-name">Pair</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
<span class="token number">2</span>    <span class="token keyword">public</span> <span class="token class-name">K</span> <span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">3</span>    <span class="token keyword">public</span> <span class="token class-name">V</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">4</span><span class="token punctuation">}</span>
<span class="token number">5</span>
<span class="token number">6</span>class <span class="token class-name">OrderedPair</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">></span></span> <span class="token keyword">implements</span> <span class="token class-name">Pair</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
<span class="token number">7</span>    <span class="token keyword">private</span> <span class="token class-name">K</span> key<span class="token punctuation">;</span>
<span class="token number">8</span>    <span class="token keyword">private</span> <span class="token class-name">V</span> value<span class="token punctuation">;</span>
<span class="token number">9</span>
<span class="token number">10</span>    <span class="token keyword">public</span> <span class="token class-name">OrderedPair</span><span class="token punctuation">(</span><span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">V</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">11</span>        <span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> key<span class="token punctuation">;</span>
<span class="token number">12</span>        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
<span class="token number">13</span>    <span class="token punctuation">}</span>
<span class="token number">14</span>
<span class="token number">15</span>    <span class="token keyword">public</span> <span class="token class-name">K</span> <span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token punctuation">{</span> <span class="token keyword">return</span> key<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token number">16</span>    <span class="token keyword">public</span> <span class="token class-name">V</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> value<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token number">17</span><span class="token punctuation">}</span>
<span class="token number">18</span><span class="token comment">// 使用：</span>
<span class="token number">19</span>Pair<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrderedPair</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"Apple"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">20</span>Pair<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrderedPair</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"Orange"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>泛型方法（Generic Methods）：创建可用于多种数据类型的方法。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token number">1</span>public <span class="token keyword">class</span> <span class="token class-name">Util</span> <span class="token punctuation">{</span>
<span class="token number">2</span>    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">></span></span> <span class="token keyword">boolean</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">Pair</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">></span></span> p1<span class="token punctuation">,</span> <span class="token class-name">Pair</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">></span></span> p2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">3</span>        <span class="token keyword">return</span> p1<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>p2<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
<span class="token number">4</span>               p1<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>p2<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">5</span>    <span class="token punctuation">}</span>
<span class="token number">6</span><span class="token punctuation">}</span>
<span class="token number">7</span><span class="token comment">// 使用：</span>
<span class="token number">8</span>Pair<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrderedPair</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"Apple"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">9</span>Pair<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrderedPair</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"Apple"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">10</span>boolean same <span class="token operator">=</span> <span class="token class-name">Util</span><span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>泛型通配符（Generic Wildcards）：使用通配符（?）来表示未知的类型。</p>
<ul>
<li>无界通配符（Unbounded Wildcard）：<code v-pre>?</code></li>
<li>有界通配符（Bounded Wildcard）
<ul>
<li>上界通配符（Upper Bounded Wildcard）：<code v-pre>&lt;? extends Type&gt;</code></li>
<li>下界通配符（Lower Bounded Wildcard）：<code v-pre>&lt;? super Type&gt;</code></li>
</ul>
</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token number">1</span>public <span class="token keyword">void</span> <span class="token function">printList</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">2</span>    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Object</span> elem <span class="token operator">:</span> list<span class="token punctuation">)</span>
<span class="token number">3</span>        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>elem <span class="token operator">+</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">4</span>    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">5</span><span class="token punctuation">}</span>
<span class="token number">6</span>
<span class="token number">7L</span>ist<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> li <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">8L</span>ist<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span>  ls <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">"one"</span><span class="token punctuation">,</span> <span class="token string">"two"</span><span class="token punctuation">,</span> <span class="token string">"three"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">9printList</span><span class="token punctuation">(</span>li<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 正确，输出 1 2 3 </span>
<span class="token function">10printList</span><span class="token punctuation">(</span>ls<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 正确，输出 one two three</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类型擦除（Type Erasure）：了解Java泛型背后的原理，即泛型信息只存在于编译阶段，在运行时会被擦除，并用具体的类或桥接方法来替换。</p>
<h3 id="反射" tabindex="-1"><a class="header-anchor" href="#反射" aria-hidden="true">#</a> 反射</h3>
<p>1.什么是反射？</p>
<p>Java反射是Java编程语言提供的一组API，它允许程序在运行时对类和对象进行自省（introspection）和操作。通过反射API，你可以在运行时获取类的信息（比如类的方法、构造函数、属性、注解等），创建和操作对象，甚至修改字段内容和调用方法。</p>
<p>2.反射有什么特点？</p>
<ul>
<li>
<p><strong>运行时行为</strong>：反射允许程序在运行时动态地查询和操作类和对象的信息。</p>
</li>
<li>
<p><strong>灵活性</strong>：通过反射，可以编写不依赖于特定类的通用代码。</p>
</li>
<li>
<p><strong>封装性破坏</strong>：反射有能力操作类的私有成员，因而可以破坏封装性。</p>
</li>
<li>
<p><strong>性能开销</strong>：相比于直接代码调用，使用反射执行方法或访问属性会有额外的性能开销。</p>
</li>
</ul>
<p>3.反射能解决什么问题？</p>
<ul>
<li>
<p><strong>动态加载</strong>：在运行时加载、检查、使用编译期间未知的类。</p>
</li>
<li>
<p><strong>检查类属性</strong>：程序可以在运行时检查对象的属性，使得代码可以在不知道具体类信息的情况下工作。</p>
</li>
<li>
<p><strong>动态代理机制</strong>：反射机制是实现动态代理的基础，可以在运行时创建代理对象，动态地处理对真实对象的方法调用。</p>
</li>
<li>
<p><strong>泛型擦除后的类型获取</strong>：在运行时获取泛型信息，尽管Java中的泛型信息在编译时会被擦除。</p>
</li>
</ul>
<p>反射的使用场景？</p>
<ul>
<li>
<p><strong>开发框架和库</strong>：许多流行的开发框架，如Spring、Hibernate等，都大量使用反射来实现依赖注入、ORM映射等功能。</p>
</li>
<li>
<p><strong>插件和模块化系统</strong>：反射允许动态加载模块或插件，增加系统的可扩展性。</p>
</li>
<li>
<p><strong>单元测试框架</strong>：如JUnit，使用反射来动态调用测试方法。</p>
</li>
<li>
<p><strong>动态代理</strong>：创建动态代理对象，用于添加额外的操作，如事务管理、日志记录等。</p>
</li>
<li>
<p><strong>IDE工具</strong>：在集成开发环境中，有时需要使用反射来进行代码的分析或调试。</p>
</li>
</ul>
<p>示例</p>
<ol>
<li>
<p><strong>获取 Class 对象</strong>：反射的起点是获取代表类的 <code v-pre>Class</code> 对象。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1// 获取 Class 对象的三种方式
2Class&lt;?> c1 = Class.forName("java.lang.String"); // 使用类的全限定名
3Class&lt;?> c2 = String.class; // 使用类字面量
4Class&lt;?> c3 = "Hello, World!".getClass(); // 调用实例的 getClass() 方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>检查类的信息</strong>：你可以使用 <code v-pre>Class</code> 对象来获取类的信息，如方法、构造器、成员变量、父类等。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1Class&lt;?> clazz = Class.forName("java.lang.String");
2// 获取所有公共方法
3Method[] methods = clazz.getMethods();
4
5// 获取所有构造器
6Constructor&lt;?>[] constructors = clazz.getConstructors();
7
8// 获取所有公共字段
9Field[] fields = clazz.getFields();
10
11// 获取父类
12Class&lt;?> superclass = clazz.getSuperclass();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>创建实例</strong>：使用 <code v-pre>Class</code> 对象的 <code v-pre>newInstance()</code> 方法或者获取构造函数并调用 <code v-pre>newInstance()</code> 方法来创建类的实例。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1Class&lt;?> clazz = Class.forName("java.util.ArrayList");
2Object instance = clazz.newInstance(); // 创建 ArrayList 的实例
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>访问字段</strong>：使用 <code v-pre>Field</code> 类的方法来访问和修改对象的字段。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1Class&lt;?> clazz = Class.forName("java.lang.String");
2Field field = clazz.getField("CASE_INSENSITIVE_ORDER");
3Object value = field.get(null); // 静态字段，所以传入 null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>调用方法</strong>：使用 <code v-pre>Method</code> 类的 <code v-pre>invoke()</code> 方法来调用对象的方法。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1Class&lt;?> clazz = Class.forName("java.lang.String");
2Method method = clazz.getMethod("substring", int.class, int.class);
3String str = "Hello, World!";
4Object result = method.invoke(str, 7, 12); // 调用 str 的 substring 方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>操作数组</strong>：反射提供了 <code v-pre>Array</code> 类来动态创建和操作数组。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1int[] intArray = (int[]) Array.newInstance(int.class, 5); // 创建数组
2Array.set(intArray, 0, 123); // 设置数组元素
3int value = Array.getInt(intArray, 0); // 获取数组元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>处理异常</strong>：反射相关的方法可能会抛出 <code v-pre>IllegalAccessException</code>, <code v-pre>InstantiationException</code>, <code v-pre>ClassNotFoundException</code>, <code v-pre>NoSuchMethodException</code>, <code v-pre>NoSuchFieldException</code> 等异常，需要妥善处理。</p>
</li>
</ol>
<h3 id="序列化" tabindex="-1"><a class="header-anchor" href="#序列化" aria-hidden="true">#</a> 序列化</h3>
<ol>
<li><strong>序列化接口</strong>：
<ul>
<li><code v-pre>java.io.Serializable</code>接口。任何需要序列化的类都需要实现这个接口，它是一个标记接口，不包含任何方法。</li>
</ul>
</li>
<li><strong>ObjectOutputStream 和 ObjectInputStream</strong>：
<ul>
<li>如何使用<code v-pre>ObjectOutputStream</code>类来序列化对象（写入字节流）。</li>
<li>如何使用<code v-pre>ObjectInputStream</code>类来反序列化对象（从字节流读取）。</li>
</ul>
</li>
<li><strong>transient关键字</strong>：
<ul>
<li><code v-pre>transient</code>关键字。使用这个关键字标记的成员变量不会被序列化。</li>
</ul>
</li>
<li><strong>序列化ID</strong>：
<ul>
<li><code v-pre>serialVersionUID</code>的作用。这是一个用来辅助序列化和反序列化过程的版本控制标识符。如果你没有显式声明，Java会根据类的详情自动生成一个，但是最好是自己声明以避免因版本不一致导致反序列化失败。</li>
</ul>
</li>
<li><strong>序列化的注意事项</strong>：
<ul>
<li>不是所有的对象都可以序列化，例如IO流对象和线程对象就不可以序列化。</li>
<li>序列化对于单例模式和类加载器的影响。</li>
</ul>
</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token comment">// Person类实现了Serializable接口以便可以被序列化</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    <span class="token comment">// 序列化版本号</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>

    <span class="token comment">// 成员变量</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    
    <span class="token comment">// 标记为transient的变量不会被序列化</span>
    <span class="token keyword">transient</span> <span class="token keyword">public</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>

    <span class="token comment">// 构造方法</span>
    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">,</span> <span class="token class-name">String</span> password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>password <span class="token operator">=</span> password<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 自定义的toString方法</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"Person{name='"</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">"', age="</span> <span class="token operator">+</span> age <span class="token operator">+</span> <span class="token string">", password='"</span> <span class="token operator">+</span> password <span class="token operator">+</span> <span class="token string">"'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SerializationDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建Person对象</span>
        <span class="token class-name">Person</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"Alice"</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token string">"secret"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 序列化对象</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">ObjectOutputStream</span> oos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectOutputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">"person.ser"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            oos<span class="token punctuation">.</span><span class="token function">writeObject</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Object has been serialized: "</span> <span class="token operator">+</span> person<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token comment">// 反序列化对象</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">ObjectInputStream</span> ois <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectInputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">"person.ser"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Person</span> deserializedPerson <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">)</span> ois<span class="token punctuation">.</span><span class="token function">readObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Object has been deserialized: "</span> <span class="token operator">+</span> deserializedPerson<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> <span class="token operator">|</span> <span class="token class-name">ClassNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们定义了一个<code v-pre>Person</code>类，它实现了<code v-pre>Serializable</code>接口，并声明了一个<code v-pre>serialVersionUID</code>。我们创建了一个<code v-pre>Person</code>对象，使用<code v-pre>ObjectOutputStream</code>将其序列化到一个文件“person.ser”中。然后，我们使用<code v-pre>ObjectInputStream</code>读取这个文件，并将字节流反序列化为一个新的<code v-pre>Person</code>对象。</p>
<p>请注意，虽然<code v-pre>password</code>成员被标记为<code v-pre>transient</code>，因此它不会被序列化。在反序列化过程中，<code v-pre>password</code>字段的值将为<code v-pre>null</code>, 因为它没有在序列化数据中保留。</p>
<h2 id="什么是静态类型语言" tabindex="-1"><a class="header-anchor" href="#什么是静态类型语言" aria-hidden="true">#</a> 什么是静态类型语言？</h2>
<p><strong>定义</strong></p>
<p>Java 被称为一种静态类型语言（statically typed language），这意味着所有的变量和表达式的类型在编译时期就已经确定，并且在整个程序运行期间不会改变。这与动态类型语言（dynamically typed languages）不同，后者允许变量的类型在程序运行时改变或者在声明时不显式指定类型。</p>
<p><strong>静态类型语言有什么特点</strong></p>
<ol>
<li>
<p>类型检查：编译器在编译阶段就会对代码进行类型检查，如果类型不匹配，编译器会报错。例如，如果你尝试将一个字符串赋值给一个整型变量，编译器会抛出错误。</p>
</li>
<li>
<p>变量声明：在 Java 中，每个变量在使用前都需要声明，并且在声明时指定其数据类型。例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1int number = 5; // 显式声明number是int类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>性能：静态类型语言通常在性能上有优势，因为编译器对类型的了解使得可以生成更优化的机器码。</p>
</li>
<li>
<p>可读性和可维护性：静态类型有助于提高代码的可读性和可维护性。因为数据类型是显式声明的，所以读代码的人可以更容易地理解每个变量的预期用途。</p>
</li>
<li>
<p>工具支持：静态类型语言通常提供更好的开发工具支持，如自动完成、重构工具和更严格的编码规范检查，因为编译器在编码时就了解了代码结构。</p>
</li>
</ol>
<p><strong>对比：动态类型语言有哪些特点的特性</strong></p>
<ol>
<li>类型推断：动态类型语言依赖于运行时来确定实际的数据类型，并且在声明变量时不一定需要指定数据类型。</li>
<li>灵活性：动态类型语言通常更灵活，因为它们在运行时允许类型更改或不要求在初始声明时就确定类型。</li>
<li>编写速度：动态类型语言可能会加快初期开发速度，因为程序员可以快速编写代码，而不需要花时间声明类型。</li>
</ol>
<p><strong>例子</strong></p>
<p>举例来说，对比 <strong>Python（一种动态类型语言）和 Java（一种静态类型语言）</strong>：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1# Python (动态类型)
2number = "123"      # 初始为字符串
3number = 123        # 同一变量可以改变类型，赋值为整数
1// Java (静态类型)
2String number = "123"; // 显式声明为String类型
3number = 123;          // 编译错误，不能将整数赋值给字符串类型的变量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Java 中，类型是在编译时确定的，并且一旦声明，变量的类型就不能更改。这有助于捕捉错误并提高代码的稳定性，但也使得语言在某些方面不如动态类型语言灵活。</p>
<h2 id="深入分析修饰符和包" tabindex="-1"><a class="header-anchor" href="#深入分析修饰符和包" aria-hidden="true">#</a> 深入分析修饰符和包</h2>
<p>Java的访问修饰符用于控制类、方法、变量等成员的访问级别。Java中的访问修饰符主要有四种：<code v-pre>public</code>、<code v-pre>protected</code>、默认（无修饰符，也称为包私有）和<code v-pre>private</code>。这些修饰符决定了其他类对这些成员的访问权限。</p>
<ol>
<li><strong>public</strong>：
<ul>
<li>可以被任何其他类访问，不论这些类是否在同一个包内或是不同包中。</li>
</ul>
</li>
<li><strong>protected</strong>：
<ul>
<li>可以被同一个包内的所有类访问，以及不同包中的子类访问。</li>
</ul>
</li>
<li><strong>默认（无修饰符，包私有）</strong>：
<ul>
<li>只能被同一个包内的类访问。</li>
</ul>
</li>
<li><strong>private</strong>：
<ul>
<li>只能在声明它们的类中访问。</li>
</ul>
</li>
</ol>
<p><strong>访问级别总结</strong>：</p>
<table>
<thead>
<tr>
<th>Modifier</th>
<th style="text-align:center">Class</th>
<th style="text-align:center">Package</th>
<th style="text-align:center">Subclass</th>
<th style="text-align:center">World</th>
</tr>
</thead>
<tbody>
<tr>
<td>public</td>
<td style="text-align:center">Y</td>
<td style="text-align:center">Y</td>
<td style="text-align:center">Y</td>
<td style="text-align:center">Y</td>
</tr>
<tr>
<td>protected</td>
<td style="text-align:center">Y</td>
<td style="text-align:center">Y</td>
<td style="text-align:center">Y</td>
<td style="text-align:center">N</td>
</tr>
<tr>
<td>no modifier</td>
<td style="text-align:center">Y</td>
<td style="text-align:center">Y</td>
<td style="text-align:center">N</td>
<td style="text-align:center">N</td>
</tr>
<tr>
<td>private</td>
<td style="text-align:center">Y</td>
<td style="text-align:center">N</td>
<td style="text-align:center">N</td>
<td style="text-align:center">N</td>
</tr>
</tbody>
</table>
<p><strong>Y 表示允许访问，N 表示不允许。</strong></p>
<p><strong>示例</strong>：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 文件：com/company/package1/FirstClass.java</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>company<span class="token punctuation">.</span>package1</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FirstClass</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> publicVar <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token keyword">int</span> protectedVar <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> packagePrivateVar <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// 默认，无修饰符</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> privateVar <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">publicMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">protectedMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">void</span> <span class="token function">packagePrivateMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 默认，无修饰符</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">privateMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 文件：com/company/package1/SecondClass.java</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>company<span class="token punctuation">.</span>package1</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SecondClass</span> <span class="token punctuation">{</span>
    <span class="token class-name">FirstClass</span> firstClass <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FirstClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">accessFirstClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>firstClass<span class="token punctuation">.</span>publicVar<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>firstClass<span class="token punctuation">.</span>protectedVar<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>firstClass<span class="token punctuation">.</span>packagePrivateVar<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// System.out.println(firstClass.privateVar); // 错误：privateVar在FirstClass中是私有的</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 文件：com/company/package2/Subclass.java</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>company<span class="token punctuation">.</span>package2</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>company<span class="token punctuation">.</span>package1<span class="token punctuation">.</span></span><span class="token class-name">FirstClass</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Subclass</span> <span class="token keyword">extends</span> <span class="token class-name">FirstClass</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">accessFirstClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>publicVar<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>protectedVar<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// System.out.println(packagePrivateVar); // 错误：packagePrivateVar不可见</span>
        <span class="token comment">// System.out.println(privateVar); // 错误：privateVar在FirstClass中是私有的</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 文件：com/company/package2/NonSubclass.java</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>company<span class="token punctuation">.</span>package2</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>company<span class="token punctuation">.</span>package1<span class="token punctuation">.</span></span><span class="token class-name">FirstClass</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NonSubclass</span> <span class="token punctuation">{</span>
    <span class="token class-name">FirstClass</span> firstClass <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FirstClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">accessFirstClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>firstClass<span class="token punctuation">.</span>publicVar<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// System.out.println(firstClass.protectedVar); // 错误：protectedVar在FirstClass中不可见</span>
        <span class="token comment">// System.out.println(firstClass.packagePrivateVar); // 错误：packagePrivateVar不可见</span>
        <span class="token comment">// System.out.println(firstClass.privateVar); // 错误：privateVar在FirstClass中是私有的</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>FirstClass</code>定义了四个具有不同访问修饰符的变量和方法。<code v-pre>SecondClass</code>在同一个包<code v-pre>com.company.package1</code>中，因此可以访问<code v-pre>FirstClass</code>的<code v-pre>publicVar</code>、<code v-pre>protectedVar</code>和<code v-pre>packagePrivateVar</code>，但不能访问<code v-pre>privateVar</code>。</p>
<p><code v-pre>Subclass</code>是<code v-pre>FirstClass</code>的子类，位于不同包<code v-pre>com.company.package2</code>，可以访问<code v-pre>FirstClass</code>的<code v-pre>publicVar</code>和<code v-pre>protectedVar</code>，但不能访问<code v-pre>packagePrivateVar</code>和<code v-pre>privateVar</code>。</p>
<p><code v-pre>NonSubclass</code>不是<code v-pre>FirstClass</code>的子类，也位于不同包<code v-pre>com.company.package2</code>，只能访问<code v-pre>FirstClass</code>的<code v-pre>publicVar</code>，不能访问其他变量。</p>
<h2 id="继承多态和接口多态" tabindex="-1"><a class="header-anchor" href="#继承多态和接口多态" aria-hidden="true">#</a> 继承多态和接口多态</h2>
<p>在Java中，多态（Polymorphism）通常指的是一个引用变量（比如父类或接口类型的变量）在运行时可以引用多种类型的对象，并且可以通过这个引用变量调用这些对象共有的方法，而实际执行的是各自对象的方法版本。Java 中的多态主要分为两种形式：</p>
<ol>
<li>继承多态（Inheritance Polymorphism）：通过类的继承关系来实现。当一个子类继承自父类时，它可以继承父类的方法和属性。如果子类重写了父类的方法（即方法覆盖，Method Overriding），则可以通过父类的引用来调用这些方法，运行时会执行子类的版本，这体现了多态性。</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token number">1</span>class <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
<span class="token number">2</span>    <span class="token keyword">void</span> <span class="token function">sound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">3</span>        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Animal sound"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">4</span>    <span class="token punctuation">}</span>
<span class="token number">5</span><span class="token punctuation">}</span>
<span class="token number">6</span>
<span class="token number">7</span>class <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
<span class="token number">8</span>    <span class="token annotation punctuation">@Override</span>
<span class="token number">9</span>    <span class="token keyword">void</span> <span class="token function">sound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">10</span>        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Woof woof"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">11</span>    <span class="token punctuation">}</span>
<span class="token number">12</span><span class="token punctuation">}</span>
<span class="token number">13</span>
<span class="token number">14</span>public <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
<span class="token number">15</span>    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">16</span>        <span class="token class-name">Animal</span> animal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">17</span>        animal<span class="token punctuation">.</span><span class="token function">sound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Woof woof</span>
<span class="token number">18</span>    <span class="token punctuation">}</span>
<span class="token number">19</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>接口多态（Interface Polymorphism）：通过接口实现。在Java中，接口定义了一组方法规范，但不提供实现。当一个类实现一个接口时，它必须实现接口中的所有方法。你可以使用接口类型的引用来指向实现了该接口的任何类的对象。当通过这个引用调用接口中的方法时，执行的是实际对象的实现方法，这也是多态的一种表现。</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token number">1</span>interface <span class="token class-name">Movable</span> <span class="token punctuation">{</span>
<span class="token number">2</span>    <span class="token keyword">void</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">3</span><span class="token punctuation">}</span>
<span class="token number">4</span>
<span class="token number">5</span>class <span class="token class-name">Car</span> <span class="token keyword">implements</span> <span class="token class-name">Movable</span> <span class="token punctuation">{</span>
<span class="token number">6</span>    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">7</span>        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Car is moving"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">8</span>    <span class="token punctuation">}</span>
<span class="token number">9</span><span class="token punctuation">}</span>
<span class="token number">10</span>
<span class="token number">11</span>public <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
<span class="token number">12</span>    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">13</span>        <span class="token class-name">Movable</span> movable <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">14</span>        movable<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Car is moving</span>
<span class="token number">15</span>    <span class="token punctuation">}</span>
<span class="token number">16</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>无论是继承还是接口，多态都允许你通过一个基类型的引用（父类或接口）来操作不同的子类型对象，而具体执行哪个对象的方法，则取决于对象的实际类型，这是在运行时动态决定的。这种机制使得你可以编写更通用和可扩展的代码。</p>
<h2 id="序列化对于单例模式和类加载器的影响" tabindex="-1"><a class="header-anchor" href="#序列化对于单例模式和类加载器的影响" aria-hidden="true">#</a> 序列化对于单例模式和类加载器的影响</h2>
<p><strong>序列化对于单例模式的影响：</strong></p>
<p>在单例模式中，我们的目标是确保一个类只有一个实例，并提供全局访问点来获取这个实例。然而，序列化和反序列化机制默认的行为会破坏单例模式的规则，因为每次反序列化时都会创建一个新的实例。</p>
<p>为了解决这个问题，我们可以在单例类中添加一个<code v-pre>readResolve</code>方法，它在反序列化时会被调用，你可以通过它来返回单例实例。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token number">1</span>import java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>*<span class="token punctuation">;</span>
<span class="token number">2</span>
<span class="token number">3</span>class <span class="token class-name">Singleton</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
<span class="token number">4</span>    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>
<span class="token number">5</span>
<span class="token number">6</span>    <span class="token comment">// 静态属性存储单例实例</span>
<span class="token number">7</span>    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">8</span>
<span class="token number">9</span>    <span class="token comment">// 私有构造函数，防止外部直接创建实例</span>
<span class="token number">10</span>    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token number">11</span>
<span class="token number">12</span>    <span class="token comment">// 全局访问点</span>
<span class="token number">13</span>    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">14</span>        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
<span class="token number">15</span>    <span class="token punctuation">}</span>
<span class="token number">16</span>
<span class="token number">17</span>    <span class="token comment">// 保护单例状态，返回现有实例</span>
<span class="token number">18</span>    <span class="token keyword">protected</span> <span class="token class-name">Object</span> <span class="token function">readResolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">19</span>        <span class="token keyword">return</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">20</span>    <span class="token punctuation">}</span>
<span class="token number">21</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述代码中，<code v-pre>readResolve</code>方法保证了即使在序列化过程中，我们仍然维护单例的状态，保证只有一个实例存在。</p>
<p><strong>序列化对类加载器的影响：</strong></p>
<p>Java序列化机制在反序列化对象时，使用了定义了该对象的类的类加载器来创建实例。如果在不同的环境（不同的虚拟机或者不同的类加载器设置）中序列化和反序列化对象，可能会导致一些问题。</p>
<p>例如，在使用了不同类加载器的环境中，即使两个类来自同一份字节码文件，它们也被认为是不同的类，如果尝试将一个环境中序列化的对象在另一个环境中反序列化，可能会抛出<code v-pre>ClassNotFoundException</code>或者<code v-pre>InvalidClassException</code>。</p>
<p>为了解决这个问题，你需要确保使用相同的类加载器来序列化和反序列化对象。如果这不可能（例如，在分布式应用中），你可能需要在应用的不同部分之间共享类的字节码。</p>
<p>示例：</p>
<p>假设我们有两个类加载器A和B，它们分别加载了相同的类。我们使用类加载器A序列化一个对象，然后尝试使用类加载器B来反序列化它。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token number">1</span>public <span class="token keyword">class</span> <span class="token class-name">ClassLoaderDemo</span> <span class="token punctuation">{</span>
<span class="token number">2</span>    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
<span class="token number">3</span>        <span class="token comment">// 假设这是类加载器A加载的Person类</span>
<span class="token number">4</span>        <span class="token class-name">ClassLoader</span> classLoaderA <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CustomClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">5</span>        <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> classA <span class="token operator">=</span> classLoaderA<span class="token punctuation">.</span><span class="token function">loadClass</span><span class="token punctuation">(</span><span class="token string">"Person"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">6</span>        <span class="token class-name">Object</span> personA <span class="token operator">=</span> classA<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">7</span>
<span class="token number">8</span>        <span class="token comment">// 序列化对象</span>
<span class="token number">9</span>        <span class="token class-name">ByteArrayOutputStream</span> bos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ByteArrayOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">10</span>        <span class="token class-name">ObjectOutputStream</span> oos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectOutputStream</span><span class="token punctuation">(</span>bos<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">11</span>        oos<span class="token punctuation">.</span><span class="token function">writeObject</span><span class="token punctuation">(</span>personA<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">12</span>
<span class="token number">13</span>        <span class="token comment">// 假设这是类加载器B加载的Person类</span>
<span class="token number">14</span>        <span class="token class-name">ClassLoader</span> classLoaderB <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CustomClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">15</span>        <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> classB <span class="token operator">=</span> classLoaderB<span class="token punctuation">.</span><span class="token function">loadClass</span><span class="token punctuation">(</span><span class="token string">"Person"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">16</span>
<span class="token number">17</span>        <span class="token comment">// 尝试使用类加载器B来反序列化对象</span>
<span class="token number">18</span>        <span class="token class-name">ByteArrayInputStream</span> bis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ByteArrayInputStream</span><span class="token punctuation">(</span>bos<span class="token punctuation">.</span><span class="token function">toByteArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">19</span>        <span class="token class-name">ObjectInputStream</span> ois <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectInputStream</span><span class="token punctuation">(</span>bis<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">20</span>            <span class="token annotation punctuation">@Override</span>
<span class="token number">21</span>            <span class="token keyword">protected</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> <span class="token function">resolveClass</span><span class="token punctuation">(</span><span class="token class-name">ObjectStreamClass</span> desc<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span>
<span class="token number">22</span>                <span class="token comment">// 指定使用类加载器B</span>
<span class="token number">23</span>                <span class="token keyword">return</span> classLoaderB<span class="token punctuation">.</span><span class="token function">loadClass</span><span class="token punctuation">(</span>desc<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">24</span>            <span class="token punctuation">}</span>
<span class="token number">25</span>        <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token number">26</span>
<span class="token number">27</span>        <span class="token comment">// 会抛出ClassCastException，因为类加载器A和B加载的Person类是不同的</span>
<span class="token number">28</span>        <span class="token class-name">Object</span> personB <span class="token operator">=</span> classB<span class="token punctuation">.</span><span class="token function">cast</span><span class="token punctuation">(</span>ois<span class="token punctuation">.</span><span class="token function">readObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">29</span>    <span class="token punctuation">}</span>
<span class="token number">30</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，尽管<code v-pre>Person</code>类的字节码相同，但由于使用了两个不同的类加载器，所以类加载器A和B加载的<code v-pre>Person</code>类被视为不同的类。尝试将使用类加载器A序列化的对象传递给使用类加载器B反序列化会导致<code v-pre>ClassCastException</code>。在实际应用中，解决这个问题通常需要确保序列化和反序列化使用相同的类加载器，或者共享相同的类字节码。</p>
</div></template>


