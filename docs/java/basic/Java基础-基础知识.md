# Java基础-基础语法

### 数据类型

Java 是一种**静态类型**语言，它包括了两种数据类型：

- 基本数据类型（Primitive Data Types）：int, char, byte, short, long, float, double, boolean。
- 引用数据类型（Reference Data Types）：类（Class）、接口（Interface）和数组（Array）。

**补充**

1、其中String，Integer，Long这些都属于类，因此属于「引用数据类型」

2、基本数据类型占用的字节

| 基本数据类型 | 字节数 | 数据范围                                 |
| ------------ | ------ | ---------------------------------------- |
| int          | 4      | -2147483648~2147483647                   |
| char         | 2      | 0~65535                                  |
| byte         | 1      | -128~127                                 |
| short        | 2      | -32768~31767                             |
| long         | 8      | -9223372036854775808~9223372036854775807 |
| float        | 4      | 1.4e-45f ~ 3.4028235e+38f                |
| double       | 8      | 4.9e-324 ~ 1.7976931348623157e+308       |
| boolean      | 1      | true / false                             |



### 变量

Java 中的变量必须先声明后使用，声明时需要指定变量的数据类型。

变量的命名规则

1. **字母数字字符和下划线**：变量名可以包含字母、数字、下划线（_）和美元符号（$），但不能以数字开头。
2. **区分大小写**：Java是区分大小写的编程语言，这意味着`variable`和`Variable`是两个不同的变量名。
3. **不可以是关键字**：变量名不能使用Java的保留关键字。例如，你不能将变量命名为`int`或`class`。
4. **长度限制**：理论上，变量名的长度没有限制，但为了代码的可读性和可维护性，应该使用适当长度的变量名。
5. **Unicode字符**：变量名可以使用任何Unicode字符，但不推荐使用，因为它会使代码难以阅读和理解。

此外，虽然不是硬性规则，还有一些命名约定应该遵守，以提高代码的可读性和一致性：

- **驼峰命名法**：在Java中，变量名通常采用所谓的驼峰命名法。对于局部变量和实例变量，通常使用小驼峰式命名法（lowerCamelCase），即变量名的第一个单词首字母小写，之后每个单词的首字母都大写，比如`localVariable`、`studentName`。
- **有意义的名称**：变量名应该有描述性，能够表明变量的用途，如`employeeSalary`，`totalCount`。
- **常量命名**：如果变量是常量（即使用`final`关键字修饰的变量），则应该全部使用大写字母，并且单词之间用下划线分隔，如`MAX_CODE`。

例子：

```java
1int count;      // 符合规则，使用小写字母开头
2String myName;  // 符合规则，使用小驼峰式命名法
3final double PI_VALUE = 3.14159;  // 符合规则，常量全部大写，单词间用下划线分隔
```



### 修饰符

Java 提供了多种修饰符来设置类、变量和方法的访问规则和其他功能。主要分为访问控制修饰符（public, private, protected）和非访问控制修饰符（static, final, abstract 等）

1. **访问修饰符**：在Java中，访问权限修饰符决定了类、变量、方法和构造器的可访问性。主要有四种访问修饰符：
   - `public`：公开的，可以被任何其他类访问。
   - `protected`：受保护的，可以被同一个包内的类以及不同包中的子类访问。
   - `default`（没有修饰符）：默认访问，仅能被同一个包内的类访问。
   - `private`：私有的，只能在定义它们的类内部访问。
2. **非访问修饰符**：这些修饰符不控制访问级别，但提供了其他功能。主要包括：
   - `static`：静态修饰符，用于创建类的静态成员，它们可以在未实例化类的情况下访问。
   - `final`：表示最终的，可以修饰类、方法和变量。修饰类时，表明类不能被继承；修饰方法时，表明方法不能被重写；修饰变量时，表示变量的值一旦赋值后不能被改变。
   - `abstract`：抽象的，用于创建抽象类和抽象方法。抽象类不能被实例化，抽象方法必须由子类提供实现。
   - `synchronized`：表示同步，用于多线程编程中，可以用于方法或代码块。加了此关键字的方法或代码块在任何时刻只能有一个线程执行。
   - `transient`：瞬态的，用在序列化过程中，表示某个属性不需要序列化。
   - `volatile`：易变的，用于告知虚拟机该变量可能会被多个线程同时访问，从而确保每次都从主内存中读取变量值。
3. **类成员修饰符**：类成员包括变量、方法和构造器，它们可以使用访问修饰符和非访问修饰符。
4. **类修饰符**：用于修饰类的声明。除了上述修饰符外，还可以使用`strictfp`关键字，它可以保证类中的浮点运算在不同平台上结果一致。
5. **常见的访问修饰符组合及其含义**：比如`public static final`经常用来定义常量。
6. **修饰符的规则和最佳实践**：比如使用最小访问原则，即只为其他类提供必要的访问权限，以及理解哪些修饰符组合是合法的（例如，方法不能同时是`abstract`和`final`）



### 运算符

Java 支持多种运算符来对数据进行操作，包括算术运算符（+,-,*,/,% 等）、关系运算符（==,!=,>,<,>=,<=）、逻辑运算符（&&,||, !）、赋值运算符（=, +=, -= 等）和位运算符。

1. **算术运算符**：
   - 加法（`+`）
   - 减法（`-`）
   - 乘法（`*`）
   - 除法（`/`）
   - 取余（模运算）（`%`）
   - 自增（`++`）
   - 自减（`--`）
2. **关系运算符**：
   - 等于（`==`）
   - 不等于（`!=`）
   - 大于（`>`）
   - 小于（`<`）
   - 大于等于（`>=`）
   - 小于等于（`<=`）
3. **逻辑运算符**：
   - 逻辑与（`&&`）
   - 逻辑或（`||`）
   - 逻辑非（`!`）
4. **位运算符**：
   - 位与（`&`）
   - 位或（`|`）
   - 位异或（`^`）
   - 位非（取反）（`~`）
   - 左移（`<<`）
   - 右移（`>>`）
   - 无符号右移（`>>>`）
5. **赋值运算符**：
   - 简单赋值（`=`）
   - 加法赋值（`+=`）
   - 减法赋值（`-=`）
   - 乘法赋值（`*=`）
   - 除法赋值（`/=`）
   - 取余赋值（`%=`）
   - 左移赋值（`<<=`）
   - 右移赋值（`>>=`）
   - 位与赋值（`&=`）
   - 位或赋值（`|=`）
   - 位异或赋值（`^=`）
6. **条件运算符**（也称为三元运算符）：
   - `? :`，用于简单的条件赋值，形式为 `条件 ? 表达式1 : 表达式2`，如果条件为真，则结果为表达式1，否则为表达式2。
7. **类型相关的运算符**：
   - 类型转换运算符，例如 `(int)`, `(double)` 等，用于将表达式显式转换为其他类型。
   - `instanceof`，用于检查一个对象是否是特定类的实例。
8. **运算符的优先级和结合性**：
   - 理解不同运算符之间的优先级关系，比如乘除的优先级高于加减。
   - 理解同一优先级运算符的计算顺序，也就是结合性，比如赋值运算符的结合性是从右到左。
9. **运算符的重载**：
   - Java中唯一支持运算符重载的是加号（`+`），主要用于字符串的连接

**注意点**

- =和==的区别





### 控制流程语句

控制程序流程的语句，包括条件语句（if-else, switch-case）和循环语句（for, while, do-while）等

1. **条件语句**：这些语句根据条件的真假来决定程序的执行路径。
   - `if`语句：用于基于条件执行代码块。
   - `if...else`语句：当`if`条件为真时执行一个代码块，否则执行`else`部分的代码。
   - `else if`链：用于创建多个条件分支。
   - `switch`语句：选择多个代码块之一去执行。`switch`可以使用`case`语句来定义不同的分支，以及`default`来定义当没有匹配的`case`时的默认行为。
2. **循环语句**：这些语句允许代码重复执行，直到满足某个条件。
   - `while`循环：当条件为真时，循环会一直执行。
   - `do-while`循环：与`while`循环类似，但保证至少执行一次循环体，然后再检查条件。
   - `for`循环：允许在循环声明中初始化变量，定义循环条件以及更新循环变量。
   - `for-each`循环：Java 5引入的增强型`for`循环，用于遍历数组或集合中的元素。
3. **跳转语句**：这些语句用于改变执行流程，跳过某些代码的执行。
   - `break`：立即退出最近的包围`switch`语句或循环。
   - `continue`：跳过当前循环的剩余部分，并开始下一个循环迭代。
   - `return`：退出当前方法，并可选地返回一个值（如果方法不是`void`类型的话）。
4. **异常处理**：用于处理程序运行时可能出现的意外情况或错误。
   - `try`块：包围可能会抛出异常的代码。
   - `catch`块：捕捉异常并定义如何处理它们。
   - `finally`块：无论是否捕捉到异常，`finally`块中的代码总是会被执行。
   - `throw`：用于手动抛出异常。
   - `throws`：在方法签名中声明可能抛出的异常。
5. **控制流程的最佳实践**：理解如何有效地使用控制流程语句，例如：
   - 避免过度使用`break`和`continue`，因为它们可能会使循环逻辑变得难以跟踪。
   - 使用有意义的条件表达式以提高代码的可读性。
   - 在`switch`语句中不要忘记`break`，以避免无意的“穿透”到下一个`case`。
   - 尽量使循环和条件语句简单，避免嵌套过深，从而提高代码的可理解性。
   - 在适当的时候使用异常处理来增强程序的健壮性。



### 数组

定义：数组是用来存储固定大小的同类型元素的集合。

1. **数组的基本概念**：
   - 定义：数组是一种存储**固定**大小的**同类型**元素的**顺序**集合。
   - 数组是一个对象。
2. **数组的声明、创建和初始化**：
   - 如何声明数组，例如 `int[] myArray;`。
   - 如何创建数组实例，例如 `myArray = new int[10];`，这里分配了一个可以存储10个整数的空间。
   - 如何同时声明和创建数组，例如 `int[] myArray = new int[10];`。
   - 如何对数组进行初始化，例如 `int[] myArray = {1, 2, 3, 4, 5};`。
   - 数组一旦创建后，大小就是固定的。
3. **数组元素的访问和修改**：
   - 如何通过下标（索引）访问数组元素，例如 `int x = myArray[0];`。
   - 如何通过下标修改数组元素的值，例如 `myArray[0] = 10;`。
   - **数组下标是从0开始的，最大的索引是数组长度减1**。
4. **数组的特性和属性**：
   - 如何使用数组的`length`属性来获取数组的大小，例如 `int size = myArray.length;`。
   - Java数组在内存中的连续存储特性
5. **数组的遍历**：
   - 使用传统的`for`循环遍历数组。
   - 使用增强的`for`循环（也称为`for-each`循环）来遍历数组，例如 `for(int element : myArray) {...}`。
6. **多维数组**：
   - Java支持多维数组（数组的数组），例如二维数组 `int[][] matrix;`。
   - 如何声明、创建和初始化多维数组。
7. **常见操作和算法**：
   - 常见的数组操作，如排序、搜索、复制、反转等。
   - 如何使用Java标准库中的`Arrays`类进行数组操作，例如 `Arrays.sort(myArray);`。
8. **数组和函数**：
   - 如何将数组作为参数传递给函数。
   - 如何从函数返回数组。
9. **数组的局限性和替代方案**：
   - 数组的局限性，例如无法动态改变大小、缺乏某些方便的操作方法等。
   - Java集合框架（如`ArrayList`），它提供了更加灵活的数据结构。





### 方法

方法是一组用来执行特定任务的语句的集合。方法可以带有参数并且可以返回值。

1. **方法的定义和调用**：

   - 方法是一段具有特定功能的代码块，可以被调用执行。
   - 如何定义一个方法，包括指定方法名、返回类型、参数列表和方法体。

   **示例**：

   ```java
   1// 定义一个方法，计算两个整数的和
   2public int add(int num1, int num2) {
   3    return num1 + num2;
   4}
   5
   6// 调用方法
   7public static void main(String[] args) {
   8    MyClass myClass = new MyClass();
   9    int result = myClass.add(5, 10);
   10    System.out.println("Sum is: " + result);
   11}
   ```

2. **参数传递**：

   - 如何向方法传递参数。
   - java中参数传递是按值传递，对于基本数据类型传递的是值副本，对于对象传递的是引用副本。

   **示例**：

   ```java
   1public void greet(String name) {
   2    System.out.println("Hello, " + name);
   3}
   4
   5// 调用方法
   6public static void main(String[] args) {
   7    MyClass myClass = new MyClass();
   8    myClass.greet("Alice");
   9}
   ```

3. **方法重载（Overloading）**：

   - 定义：多个具有相同名称但参数列表不同的方法。

   参数列表不同可以体现在以下几个方面：

   1. **参数的数量不同**：方法的参数个数可以不同。
      - 示例：`void display(int a)` 和 `void display(int a, int b)`
   2. **参数的类型不同**：即使参数的数量相同，但数据类型不同，也构成方法重载。
      - 示例：`void display(int a)` 和 `void display(String a)`
   3. **参数的顺序不同**：参数的数据类型顺序不同，即使它们的数量和类型相同。
      - 示例：`void display(int a, String b)` 和 `void display(String a, int b)`

   以下是一个具体的Java方法重载的例子：

   ```java
   public class OverloadingExample {
   
       // 方法1：一个参数
       public void print(String content) {
           System.out.println(content);
       }
   
       // 方法2：两个参数，类型相同
       public void print(String content1, String content2) {
           System.out.println(content1 + ", " + content2);
       }
   
       // 方法3：两个参数，类型不同
       public void print(String content, int repeat) {
           for (int i = 0; i < repeat; i++) {
               System.out.println(content);
           }
       }
   
       // 方法4：两个参数，顺序不同
       public void print(int repeat, String content) {
           for (int i = 0; i < repeat; i++) {
               System.out.print(content);
           }
           System.out.println();
       }
   
       public static void main(String[] args) {
           OverloadingExample example = new OverloadingExample();
           example.print("Hello World");           // 调用方法1
           example.print("Hello", "World");        // 调用方法2
           example.print("Hello World", 3);        // 调用方法3
           example.print(3, "Hello World");        // 调用方法4
       }
   }
   
   ```

4. **递归方法**：

   - 定义：方法自己调用自己，这称为递归。

   **示例**：

   ```java
   1public int factorial(int n) {
   2    if (n <= 1) {
   3        return 1;
   4    }
   5    return n * factorial(n - 1);
   6}
   ```

5. **返回值**：

   - 方法可以有返回值，也可以没有返回值（使用`void`）。
   - 如何使用`return`语句从方法返回值。

   **示例**：

   ```java
   1public boolean isEven(int number) {
   2    return number % 2 == 0;
   3}
   ```

6. **变长参数（Varargs）**：

   - 如何定义接受任意数量参数的方法。

   **示例**：

   ```java
   1public void printNumbers(int... numbers) {
   2    for (int number : numbers) {
   3        System.out.print(number + " ");
   4    }
   5    System.out.println();
   6}
   ```

7. **作用域**：

   - 局部变量的作用域限制在方法内部。

   **示例**：

   ```java
   1public void testScope() {
   2    int localVar = 5; // localVar 的作用域限于 testScope 方法内
   3    System.out.println(localVar);
   4}
   ```



### 类与对象

Java 是一种面向对象的编程语言，类（Class）是对象的模板，对象（Object）是类的实例。

```java
// 定义一个简单的类
2public class Person {
3    // 字段定义（属性）
4    private String name;
5    private int age;
6
7    // 构造方法
8    public Person(String name, int age) {
9        this.name = name;
10        this.age = age;
11    }
12
13    // 方法定义（行为）
14    public void introduce() {
15        System.out.println("Hello, my name is " + name + " and I am " + age + " years old.");
16    }
17
18    // Getter 和 Setter 方法
19    public String getName() {
20        return name;
21    }
22
23    public void setName(String name) {
24        this.name = name;
25    }
26
27    public int getAge() {
28        return age;
29    }
30
31    public void setAge(int age) {
32        this.age = age;
33    }
34
35    // 静态方法示例
36    public static void sayHello() {
37        System.out.println("Hello!");
38    }
39}
40
41// 类的使用
42public class Main {
43    public static void main(String[] args) {
44        // 创建对象
45        Person person1 = new Person("Alice", 25);
46        Person person2 = new Person("Bob", 30);
47
48        // 调用对象的方法
49        person1.introduce();
50        person2.introduce();
51
52        // 访问静态方法
53        Person.sayHello();
54    }
55}
```

### 继承

1. **继承的基本概念**：
   - 继承是OOP中的一个核心概念，子类可以继承父类的属性和方法。
2. **方法重写（Override）**：
   - 子类可以重写父类的方法以提供特定的实现。
   - 如何使用`@Override`注解来显式标记一个方法为重写父类方法。
3. **super关键字的使用**：
   - `super`关键字如何用于在子类中访问父类的构造方法、属性和方法。
4. **构造方法和继承**：
   - 子类如何通过`super()`调用父类的构造方法。
   - 默认情况下，子类的构造方法会自动调用父类无参的构造方法。
5. **继承的访问控制**：
   - 不同访问修饰符对继承的影响，如`public`、`protected`、默认（包访问权限）和`private`。
6. **final关键字**：
   - `final`关键字的作用，它可以防止类被继承、方法被重写或属性被改变。
7. **抽象类和方法**：
   - 抽象类不能被实例化，子类必须实现（重写）父类的抽象方法。

```java
// 父类
class Animal {
    protected String name;

    public Animal(String name) {
        this.name = name;
    }

    public void eat() {
        System.out.println(name + " is eating.");
    }

    public void sleep() {
        System.out.println(name + " is sleeping.");
    }
}

// 子类继承父类
class Dog extends Animal {
    public Dog(String name) {
        super(name); // 调用父类的构造方法
    }

    // 方法重写
    @Override
    public void eat() {
        System.out.println(name + " is eating dog food.");
    }

    // 子类特有方法
    public void bark() {
        System.out.println(name + " is barking.");
    }
}

// 使用继承
public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog("Buddy");
        dog.eat(); // 输出：Buddy is eating dog food.
        dog.sleep(); // 输出：Buddy is sleeping.
        dog.bark(); // 输出：Buddy is barking.
    }
}
```

`Animal`类是一个基类，它有两个方法：`eat`和`sleep`。`Dog`类通过`extends`关键字继承了`Animal`类，并重写了`eat`方法以提供特定于狗的吃食行为。此外，`Dog`类还定义了一个它自己特有的方法，`bark`。



### 接口

1. **接口的定义和基本概念**：
   - 接口（Interface）是一种完全抽象的类，它允许多个类实现相同的方法。
2. **接口中的方法**：
   - 接口可以包含抽象方法（在Java 8之前）和默认方法（Java 8+），以及静态方法（Java 8+）。
3. **默认方法和静态方法**：
   - 默认方法允许你在接口中定义具有实现的方法，而不需要在每个实现类中重写它们。
   - 静态方法属于接口，不可被实现类继承或重写。
4. **实现接口**：
   - 如何使用`implements`关键字来实现一个或多个接口。
   - 一个类可以实现多个接口。
5. **接口的继承**：
   - 接口可以继承一个或多个其他接口，并且子接口继承父接口的所有方法。
6. **接口与多态**：
   - 接口如何被用于实现多态性，即通过接口引用可以指向不同实现该接口的类的对象。

```java
// 定义一个接口
interface Movable {
    // 抽象方法
    void move();
    
    // 默认方法（Java 8+）
    default void description() {
        System.out.println("I can move!");
    }
}

// 实现接口的类
class Car implements Movable {
    @Override
    public void move() {
        System.out.println("Car is moving.");
    }
}

class Human implements Movable {
    @Override
    public void move() {
        System.out.println("Human is walking.");
    }
}

// 使用接口
public class Main {
    public static void main(String[] args) {
        Movable movable1 = new Car();
        Movable movable2 = new Human();

        movable1.move(); // 输出：Car is moving.
        movable2.move(); // 输出：Human is walking.

        // 调用默认方法
        movable1.description(); // 输出：I can move!
        movable2.description(); // 输出：I can move!
    }
}
```

`Movable`是一个接口，它定义了一个抽象方法`move`和一个默认方法`description`。`Car`和`Human`都实现了`Movable`接口，并提供了`move`方法的具体实现。

通过实现接口，可以使`Car`和`Human`类在保持独立性的同时共享`Movable`接口的行为规范。此外，可以通过`Movable`接口的引用来指向任何实现了该接口的对象，体现了多态性的概念。

### 异常处理

1. **异常的概念**：
   - 异常是程序运行过程中出现的非预期事件，它会打断正常的程序流程。
2. **异常的分类**：
   - 学习Java中异常的两大类：`Error`和`Exception`。
   - `Error`是指程序无法处理的严重问题，如`OutOfMemoryError`。
   - `Exception`分为两种：检查型异常（checked exceptions）和非检查型异常（unchecked exceptions）。
3. **try-catch-finally**：
   - 使用`try`块捕获可能出现异常的代码。
   - 使用`catch`块处理异常。
   - 使用`finally`块执行无论是否发生异常都需要执行的代码。
4. **抛出异常**：
   - 使用`throw`关键字手动抛出异常的情况。
   - 创建和使用自定义异常。
5. **异常的传播**：
   - 未被当前方法捕获的异常将被传递到调用栈中的上一层方法。
6. **throws关键字**：
   - 当方法不处理检查型异常时，如何使用`throws`关键字在方法签名中声明异常。
7. **自定义异常**：
   - 如何继承`Exception`或`RuntimeException`类创建自定义异常。

```java
// 自定义异常
class MyException extends Exception {
    public MyException(String message) {
        super(message);
    }
}

public class Main {
    public static void main(String[] args) {
        try {
            // 可能抛出异常的代码块
            checkValue(-5);
        } catch (MyException e) {
            // 捕获并处理异常
            System.err.println("Caught Exception: " + e.getMessage());
        } finally {
            // 无论是否发生异常都会执行的代码
            System.out.println("Finally block is executed.");
        }
    }
    
    // 使用throws声明方法可能抛出的异常
    public static void checkValue(int value) throws MyException {
        if (value < 0) {
            // 手动抛出异常
            throw new MyException("Value can't be negative!");
        }
        System.out.println("Value is: " + value);
    }
}
```

我们定义了一个自定义异常`MyException`，然后在`main`方法中使用了`try-catch-finally`结构来处理`checkValue`方法可能抛出的异常。

`checkValue`方法检查传入的值是否为负数，如果是，它将抛出一个`MyException`。如果在`try`块中抛出异常，`catch`块将会捕获它并打印详细信息。无论是否捕获到异常，`finally`块都会被执行，这通常用于资源清理等操作。

### 包（Package）

1. **包的概念**：
   - 包（Package）是Java用于组织类和接口的一种命名空间。
   - 包可以避免命名冲突，方便管理大型软件项目中的类结构，并可提供访问保护。
2. **创建包**：
   - 使用`package`关键字定义包。通常，包的命名规则遵循公司或组织的反向互联网域名，以确保全球唯一性。
3. **导入包**：
   - 使用`import`关键字导入其他包中的类或接口。
   - 可以使用单个导入声明或使用通配符`*`导入一个包下的所有类。
4. **类路径**：
   - Java如何使用类路径（classpath）来定位和加载类文件。
   - 如何设置类路径，让Java虚拟机能找到你的类文件。
5. **访问修饰符与包**：
   - 掌握不同访问修饰符（`public`、`protected`、默认（无修饰符）和`private`）对类和类成员在包内外的可见性影响。

示例

1.**创建包**：

假设你要为一个名为`com.mycompany.myapp`的应用程序创建一个包含用户类的包：

```java
1// 在文件 User.java 的顶部声明包
2package com.mycompany.myapp;
3
4public class User {
5    private String name;
6    private int age;
7
8    public User(String name, int age) {
9        this.name = name;
10        this.age = age;
11    }
12
13    // ... 其他方法 ...
14}
```

2.**导入包**：

现在，假设你要在另一个包中创建一个类，这个类需要使用`User`类：

```java
1// 在文件 UserService.java 的顶部导入 User 类
2package com.mycompany.myapp.service;
3
4import com.mycompany.myapp.User;
5
6public class UserService {
7    public void printUserDetails(User user) {
8        // ... 使用 User 类的方法 ...
9    }
10
11    // ... 其他方法 ...
12}
```

或者，如果你想要导入`com.mycompany.myapp`包下的所有类，你可以这样写：

```java
1import com.mycompany.myapp.*;
```

3.**设置类路径**：

在命令行中编译和运行Java程序时，你可能需要设置类路径，例如：

```
1# 设置编译时的类路径
2javac -cp .;lib/* com/mycompany/myapp/User.java
3
4# 设置运行时的类路径（Windows系统使用分号；Linux/macOS使用冒号）
5java -cp .;lib/* com.mycompany.myapp.Main
```

`.`表示当前目录，`lib/*`表示`lib`目录下所有的JAR文件。分号`;`是Windows系统的路径分隔符，而Linux和macOS使用冒号`:`作为路径分隔符。





### 多态

1. **多态的概念**：
   - 多态允许你将对象视作它们的基类类型，而实际上运行的是对象的实际类型的方法。
2. **继承或接口**
   - 继承多态和接口多态
3. **方法覆盖（Override）**：
   - 子类可以重写父类的方法。在多态中，子类对象会调用重写后的方法，而非父类中定义的版本。
4. **向上转型（Upcasting）**：
   - 将子类对象赋值给父类引用的过程，这种转换总是安全的。
5. **方法动态绑定**：
   - 在多态中，方法调用是在运行时而不是编译时确定的。Java虚拟机（JVM）在运行时确定要调用对象的实际类型的方法。
6. **向下转型（Downcasting）和类型转换**：
   - 当你需要访问子类特有的成员时，如果你拥有的是一个父类引用，你可以将其向下转型到子类，但这可能不安全，因此通常需要进行类型检查。

```java
// 父类
class Animal {
    public void makeSound() {
        System.out.println("Some sound");
    }
}

// 子类
class Dog extends Animal {
    // 方法覆盖
    @Override
    public void makeSound() {
        System.out.println("Bark");
    }

    // 子类特有的方法
    public void fetch() {
        System.out.println("Fetches the ball");
    }
}

public class Main {
    public static void main(String[] args) {
        // 向上转型
        Animal myDog = new Dog(); // Dog对象被视作Animal类型

        // 动态绑定方法调用
        myDog.makeSound(); // 输出: Bark

        // 尝试访问子类特有的方法 - 错误的做法
        // myDog.fetch(); // 编译错误: Animal类中没有定义fetch方法

        // 向下转型
        if (myDog instanceof Dog) { // 检查myDog是否是Dog类的实例
            Dog dog = (Dog) myDog; // 安全的向下转型
            dog.fetch(); // 现在可以调用子类特有的方法
        }
    }
}
```

`Animal`是一个父类，它有一个方法`makeSound`。`Dog`是`Animal`的子类，并重写了`makeSound`方法。在`main`方法中，我们创建了一个`Dog`对象，但是将它赋值给了`Animal`类型的变量`myDog`，这是一个向上转型的过程，`myDog`的静态类型是`Animal`，但它的动态类型是`Dog`。因此，当调用`myDog.makeSound()`时，会执行`Dog`类中覆盖后的方法。

注意，在向上转型后，`myDog`引用无法直接调用`Dog`类中特有的方法，如`fetch`。为了调用这些方法，我们需要先进行类型检查（使用`instanceof`关键字），然后将`myDog`向下转型为`Dog`类型。

### 泛型

1.什么是泛型？

Java 泛型（Generics）是 Java 语言中的一个特性，它允许在编译时提供类型检查并消除强制类型转换

2.泛型的特点

- **类型安全**：泛型提供编译时类型检查，这意味着只能将正确的类型的对象添加到集合中。这减少了运行时出现`ClassCastException`的可能性。

- **消除强制类型转换**：由于泛型提供了类型检查，因此不需要在获取集合中的元素时进行显式的类型转换。

- **泛化代码**：通过泛型，可以编写更加通用的代码，以处理不同类型的数据。例如，可以编写一个排序列表的方法，这个方法可以对任何类型的列表工作，而不仅仅是特定类型的列表。

- **类型参数**：可以在类、接口和方法创建时声明类型参数。这些类型参数在使用时由具体的类型替换。

3.泛型的基本语法涉及到几个关键符号：

- `<T>`：表示一个类型参数，`T` 是一个占位符，可以在实例化类或调用方法时被实际的类型（如`Integer`、`String`等）替换。
- `<?>`：表示不确定的类型，也被称为通配符。
- `<T extends B>`：有界类型参数，`T` 必须是 `B` 类型或者 `B` 的子类型。
- `<T super B>`：`T` 必须是 `B` 类型或者 `B` 的父类型。

4.泛型的使用场景

泛型类（Generic Classes）：创建可以操作不同数据类型的类。

```java
1public class Box<T> {
2    private T t; // T stands for "Type"
3
4    public void set(T t) {
5        this.t = t;
6    }
7
8    public T get() {
9        return t;
10    }
11}
12// 使用：
13Box<Integer> integerBox = new Box<>();
14integerBox.set(10); // 装入整数
15Integer someInteger = integerBox.get();
16
17Box<String> stringBox = new Box<>();
18stringBox.set("Hello World"); // 装入字符串
19String someString = stringBox.get();
```

泛型接口（Generic Interfaces）：创建通用接口。

```java
1interface Pair<K, V> {
2    public K getKey();
3    public V getValue();
4}
5
6class OrderedPair<K, V> implements Pair<K, V> {
7    private K key;
8    private V value;
9
10    public OrderedPair(K key, V value) {
11        this.key = key;
12        this.value = value;
13    }
14
15    public K getKey()   { return key; }
16    public V getValue() { return value; }
17}
18// 使用：
19Pair<Integer, String> p1 = new OrderedPair<>(1, "Apple");
20Pair<Integer, String> p2 = new OrderedPair<>(2, "Orange");
```

泛型方法（Generic Methods）：创建可用于多种数据类型的方法。

```java
1public class Util {
2    public static <K, V> boolean compare(Pair<K, V> p1, Pair<K, V> p2) {
3        return p1.getKey().equals(p2.getKey()) &&
4               p1.getValue().equals(p2.getValue());
5    }
6}
7// 使用：
8Pair<Integer, String> p1 = new OrderedPair<>(1, "Apple");
9Pair<Integer, String> p2 = new OrderedPair<>(1, "Apple");
10boolean same = Util.compare(p1, p2); // 返回 true
```

泛型通配符（Generic Wildcards）：使用通配符（?）来表示未知的类型。

- 无界通配符（Unbounded Wildcard）：`?`
- 有界通配符（Bounded Wildcard）
  - 上界通配符（Upper Bounded Wildcard）：`<? extends Type>`
  - 下界通配符（Lower Bounded Wildcard）：`<? super Type>`

```java
1public void printList(List<?> list) {
2    for (Object elem : list)
3        System.out.print(elem + " ");
4    System.out.println();
5}
6
7List<Integer> li = Arrays.asList(1, 2, 3);
8List<String>  ls = Arrays.asList("one", "two", "three");
9printList(li); // 正确，输出 1 2 3 
10printList(ls); // 正确，输出 one two three
```

类型擦除（Type Erasure）：了解Java泛型背后的原理，即泛型信息只存在于编译阶段，在运行时会被擦除，并用具体的类或桥接方法来替换。



### 反射

1.什么是反射？

Java反射是Java编程语言提供的一组API，它允许程序在运行时对类和对象进行自省（introspection）和操作。通过反射API，你可以在运行时获取类的信息（比如类的方法、构造函数、属性、注解等），创建和操作对象，甚至修改字段内容和调用方法。

2.反射有什么特点？

- **运行时行为**：反射允许程序在运行时动态地查询和操作类和对象的信息。

- **灵活性**：通过反射，可以编写不依赖于特定类的通用代码。

- **封装性破坏**：反射有能力操作类的私有成员，因而可以破坏封装性。

- **性能开销**：相比于直接代码调用，使用反射执行方法或访问属性会有额外的性能开销。

3.反射能解决什么问题？

- **动态加载**：在运行时加载、检查、使用编译期间未知的类。

- **检查类属性**：程序可以在运行时检查对象的属性，使得代码可以在不知道具体类信息的情况下工作。

- **动态代理机制**：反射机制是实现动态代理的基础，可以在运行时创建代理对象，动态地处理对真实对象的方法调用。

- **泛型擦除后的类型获取**：在运行时获取泛型信息，尽管Java中的泛型信息在编译时会被擦除。

反射的使用场景？

- **开发框架和库**：许多流行的开发框架，如Spring、Hibernate等，都大量使用反射来实现依赖注入、ORM映射等功能。

- **插件和模块化系统**：反射允许动态加载模块或插件，增加系统的可扩展性。

- **单元测试框架**：如JUnit，使用反射来动态调用测试方法。

- **动态代理**：创建动态代理对象，用于添加额外的操作，如事务管理、日志记录等。

- **IDE工具**：在集成开发环境中，有时需要使用反射来进行代码的分析或调试。

示例

1. **获取 Class 对象**：反射的起点是获取代表类的 `Class` 对象。

   ```
   1// 获取 Class 对象的三种方式
   2Class<?> c1 = Class.forName("java.lang.String"); // 使用类的全限定名
   3Class<?> c2 = String.class; // 使用类字面量
   4Class<?> c3 = "Hello, World!".getClass(); // 调用实例的 getClass() 方法
   ```

2. **检查类的信息**：你可以使用 `Class` 对象来获取类的信息，如方法、构造器、成员变量、父类等。

   ```
   1Class<?> clazz = Class.forName("java.lang.String");
   2// 获取所有公共方法
   3Method[] methods = clazz.getMethods();
   4
   5// 获取所有构造器
   6Constructor<?>[] constructors = clazz.getConstructors();
   7
   8// 获取所有公共字段
   9Field[] fields = clazz.getFields();
   10
   11// 获取父类
   12Class<?> superclass = clazz.getSuperclass();
   ```

3. **创建实例**：使用 `Class` 对象的 `newInstance()` 方法或者获取构造函数并调用 `newInstance()` 方法来创建类的实例。

   ```
   1Class<?> clazz = Class.forName("java.util.ArrayList");
   2Object instance = clazz.newInstance(); // 创建 ArrayList 的实例
   ```

4. **访问字段**：使用 `Field` 类的方法来访问和修改对象的字段。

   ```
   1Class<?> clazz = Class.forName("java.lang.String");
   2Field field = clazz.getField("CASE_INSENSITIVE_ORDER");
   3Object value = field.get(null); // 静态字段，所以传入 null
   ```

5. **调用方法**：使用 `Method` 类的 `invoke()` 方法来调用对象的方法。

   ```
   1Class<?> clazz = Class.forName("java.lang.String");
   2Method method = clazz.getMethod("substring", int.class, int.class);
   3String str = "Hello, World!";
   4Object result = method.invoke(str, 7, 12); // 调用 str 的 substring 方法
   ```

6. **操作数组**：反射提供了 `Array` 类来动态创建和操作数组。

   ```
   1int[] intArray = (int[]) Array.newInstance(int.class, 5); // 创建数组
   2Array.set(intArray, 0, 123); // 设置数组元素
   3int value = Array.getInt(intArray, 0); // 获取数组元素
   ```

7. **处理异常**：反射相关的方法可能会抛出 `IllegalAccessException`, `InstantiationException`, `ClassNotFoundException`, `NoSuchMethodException`, `NoSuchFieldException` 等异常，需要妥善处理。

### 序列化

1. **序列化接口**：
   - `java.io.Serializable`接口。任何需要序列化的类都需要实现这个接口，它是一个标记接口，不包含任何方法。
2. **ObjectOutputStream 和 ObjectInputStream**：
   - 如何使用`ObjectOutputStream`类来序列化对象（写入字节流）。
   - 如何使用`ObjectInputStream`类来反序列化对象（从字节流读取）。
3. **transient关键字**：
   - `transient`关键字。使用这个关键字标记的成员变量不会被序列化。
4. **序列化ID**：
   - `serialVersionUID`的作用。这是一个用来辅助序列化和反序列化过程的版本控制标识符。如果你没有显式声明，Java会根据类的详情自动生成一个，但是最好是自己声明以避免因版本不一致导致反序列化失败。
5. **序列化的注意事项**：
   - 不是所有的对象都可以序列化，例如IO流对象和线程对象就不可以序列化。
   - 序列化对于单例模式和类加载器的影响。

```java
import java.io.*;

// Person类实现了Serializable接口以便可以被序列化
class Person implements Serializable {
    // 序列化版本号
    private static final long serialVersionUID = 1L;

    // 成员变量
    public String name;
    public int age;
    
    // 标记为transient的变量不会被序列化
    transient public String password;

    // 构造方法
    public Person(String name, int age, String password) {
        this.name = name;
        this.age = age;
        this.password = password;
    }
    
    // 自定义的toString方法
    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + ", password='" + password + "'}";
    }
}

public class SerializationDemo {
    public static void main(String[] args) {
        // 创建Person对象
        Person person = new Person("Alice", 30, "secret");

        // 序列化对象
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("person.ser"))) {
            oos.writeObject(person);
            System.out.println("Object has been serialized: " + person);
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        // 反序列化对象
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream("person.ser"))) {
            Person deserializedPerson = (Person) ois.readObject();
            System.out.println("Object has been deserialized: " + deserializedPerson);
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
```

我们定义了一个`Person`类，它实现了`Serializable`接口，并声明了一个`serialVersionUID`。我们创建了一个`Person`对象，使用`ObjectOutputStream`将其序列化到一个文件“person.ser”中。然后，我们使用`ObjectInputStream`读取这个文件，并将字节流反序列化为一个新的`Person`对象。

请注意，虽然`password`成员被标记为`transient`，因此它不会被序列化。在反序列化过程中，`password`字段的值将为`null`, 因为它没有在序列化数据中保留。

## 什么是静态类型语言？

**定义**

Java 被称为一种静态类型语言（statically typed language），这意味着所有的变量和表达式的类型在编译时期就已经确定，并且在整个程序运行期间不会改变。这与动态类型语言（dynamically typed languages）不同，后者允许变量的类型在程序运行时改变或者在声明时不显式指定类型。

**静态类型语言有什么特点**

1. 类型检查：编译器在编译阶段就会对代码进行类型检查，如果类型不匹配，编译器会报错。例如，如果你尝试将一个字符串赋值给一个整型变量，编译器会抛出错误。

2. 变量声明：在 Java 中，每个变量在使用前都需要声明，并且在声明时指定其数据类型。例如：

   ```
   1int number = 5; // 显式声明number是int类型
   ```

3. 性能：静态类型语言通常在性能上有优势，因为编译器对类型的了解使得可以生成更优化的机器码。

4. 可读性和可维护性：静态类型有助于提高代码的可读性和可维护性。因为数据类型是显式声明的，所以读代码的人可以更容易地理解每个变量的预期用途。

5. 工具支持：静态类型语言通常提供更好的开发工具支持，如自动完成、重构工具和更严格的编码规范检查，因为编译器在编码时就了解了代码结构。

**对比：动态类型语言有哪些特点的特性**

1. 类型推断：动态类型语言依赖于运行时来确定实际的数据类型，并且在声明变量时不一定需要指定数据类型。
2. 灵活性：动态类型语言通常更灵活，因为它们在运行时允许类型更改或不要求在初始声明时就确定类型。
3. 编写速度：动态类型语言可能会加快初期开发速度，因为程序员可以快速编写代码，而不需要花时间声明类型。

**例子**

举例来说，对比 **Python（一种动态类型语言）和 Java（一种静态类型语言）**：

```
1# Python (动态类型)
2number = "123"      # 初始为字符串
3number = 123        # 同一变量可以改变类型，赋值为整数
1// Java (静态类型)
2String number = "123"; // 显式声明为String类型
3number = 123;          // 编译错误，不能将整数赋值给字符串类型的变量
```

在 Java 中，类型是在编译时确定的，并且一旦声明，变量的类型就不能更改。这有助于捕捉错误并提高代码的稳定性，但也使得语言在某些方面不如动态类型语言灵活。



## 深入分析修饰符和包

Java的访问修饰符用于控制类、方法、变量等成员的访问级别。Java中的访问修饰符主要有四种：`public`、`protected`、默认（无修饰符，也称为包私有）和`private`。这些修饰符决定了其他类对这些成员的访问权限。

1. **public**：
   - 可以被任何其他类访问，不论这些类是否在同一个包内或是不同包中。
2. **protected**：
   - 可以被同一个包内的所有类访问，以及不同包中的子类访问。
3. **默认（无修饰符，包私有）**：
   - 只能被同一个包内的类访问。
4. **private**：
   - 只能在声明它们的类中访问。

**访问级别总结**：

| Modifier    | Class | Package | Subclass | World |
| ----------- | :---: | :-----: | :------: | :---: |
| public      |   Y   |    Y    |    Y     |   Y   |
| protected   |   Y   |    Y    |    Y     |   N   |
| no modifier |   Y   |    Y    |    N     |   N   |
| private     |   Y   |    N    |    N     |   N   |

**Y 表示允许访问，N 表示不允许。**

**示例**：

```java
// 文件：com/company/package1/FirstClass.java
package com.company.package1;

public class FirstClass {
    public int publicVar = 1;
    protected int protectedVar = 2;
    int packagePrivateVar = 3; // 默认，无修饰符
    private int privateVar = 4;

    public void publicMethod() {
        // ...
    }

    protected void protectedMethod() {
        // ...
    }

    void packagePrivateMethod() { // 默认，无修饰符
        // ...
    }

    private void privateMethod() {
        // ...
    }
}

// 文件：com/company/package1/SecondClass.java
package com.company.package1;

public class SecondClass {
    FirstClass firstClass = new FirstClass();

    public void accessFirstClass() {
        System.out.println(firstClass.publicVar);
        System.out.println(firstClass.protectedVar);
        System.out.println(firstClass.packagePrivateVar);
        // System.out.println(firstClass.privateVar); // 错误：privateVar在FirstClass中是私有的
    }
}

// 文件：com/company/package2/Subclass.java
package com.company.package2;

import com.company.package1.FirstClass;

public class Subclass extends FirstClass {
    public void accessFirstClass() {
        System.out.println(publicVar);
        System.out.println(protectedVar);
        // System.out.println(packagePrivateVar); // 错误：packagePrivateVar不可见
        // System.out.println(privateVar); // 错误：privateVar在FirstClass中是私有的
    }
}

// 文件：com/company/package2/NonSubclass.java
package com.company.package2;

import com.company.package1.FirstClass;

public class NonSubclass {
    FirstClass firstClass = new FirstClass();

    public void accessFirstClass() {
        System.out.println(firstClass.publicVar);
        // System.out.println(firstClass.protectedVar); // 错误：protectedVar在FirstClass中不可见
        // System.out.println(firstClass.packagePrivateVar); // 错误：packagePrivateVar不可见
        // System.out.println(firstClass.privateVar); // 错误：privateVar在FirstClass中是私有的
    }
}
```

`FirstClass`定义了四个具有不同访问修饰符的变量和方法。`SecondClass`在同一个包`com.company.package1`中，因此可以访问`FirstClass`的`publicVar`、`protectedVar`和`packagePrivateVar`，但不能访问`privateVar`。

`Subclass`是`FirstClass`的子类，位于不同包`com.company.package2`，可以访问`FirstClass`的`publicVar`和`protectedVar`，但不能访问`packagePrivateVar`和`privateVar`。

`NonSubclass`不是`FirstClass`的子类，也位于不同包`com.company.package2`，只能访问`FirstClass`的`publicVar`，不能访问其他变量。



## 继承多态和接口多态

在Java中，多态（Polymorphism）通常指的是一个引用变量（比如父类或接口类型的变量）在运行时可以引用多种类型的对象，并且可以通过这个引用变量调用这些对象共有的方法，而实际执行的是各自对象的方法版本。Java 中的多态主要分为两种形式：

1. 继承多态（Inheritance Polymorphism）：通过类的继承关系来实现。当一个子类继承自父类时，它可以继承父类的方法和属性。如果子类重写了父类的方法（即方法覆盖，Method Overriding），则可以通过父类的引用来调用这些方法，运行时会执行子类的版本，这体现了多态性。

```java
1class Animal {
2    void sound() {
3        System.out.println("Animal sound");
4    }
5}
6
7class Dog extends Animal {
8    @Override
9    void sound() {
10        System.out.println("Woof woof");
11    }
12}
13
14public class Test {
15    public static void main(String[] args) {
16        Animal animal = new Dog();
17        animal.sound(); // 输出: Woof woof
18    }
19}
```

1. 接口多态（Interface Polymorphism）：通过接口实现。在Java中，接口定义了一组方法规范，但不提供实现。当一个类实现一个接口时，它必须实现接口中的所有方法。你可以使用接口类型的引用来指向实现了该接口的任何类的对象。当通过这个引用调用接口中的方法时，执行的是实际对象的实现方法，这也是多态的一种表现。

```java
1interface Movable {
2    void move();
3}
4
5class Car implements Movable {
6    public void move() {
7        System.out.println("Car is moving");
8    }
9}
10
11public class Test {
12    public static void main(String[] args) {
13        Movable movable = new Car();
14        movable.move(); // 输出: Car is moving
15    }
16}
```

无论是继承还是接口，多态都允许你通过一个基类型的引用（父类或接口）来操作不同的子类型对象，而具体执行哪个对象的方法，则取决于对象的实际类型，这是在运行时动态决定的。这种机制使得你可以编写更通用和可扩展的代码。



## 序列化对于单例模式和类加载器的影响

**序列化对于单例模式的影响：**

在单例模式中，我们的目标是确保一个类只有一个实例，并提供全局访问点来获取这个实例。然而，序列化和反序列化机制默认的行为会破坏单例模式的规则，因为每次反序列化时都会创建一个新的实例。

为了解决这个问题，我们可以在单例类中添加一个`readResolve`方法，它在反序列化时会被调用，你可以通过它来返回单例实例。

```java
1import java.io.*;
2
3class Singleton implements Serializable {
4    private static final long serialVersionUID = 1L;
5
6    // 静态属性存储单例实例
7    private static Singleton instance = new Singleton();
8
9    // 私有构造函数，防止外部直接创建实例
10    private Singleton() {}
11
12    // 全局访问点
13    public static Singleton getInstance() {
14        return instance;
15    }
16
17    // 保护单例状态，返回现有实例
18    protected Object readResolve() {
19        return getInstance();
20    }
21}
```

在上述代码中，`readResolve`方法保证了即使在序列化过程中，我们仍然维护单例的状态，保证只有一个实例存在。

**序列化对类加载器的影响：**

Java序列化机制在反序列化对象时，使用了定义了该对象的类的类加载器来创建实例。如果在不同的环境（不同的虚拟机或者不同的类加载器设置）中序列化和反序列化对象，可能会导致一些问题。

例如，在使用了不同类加载器的环境中，即使两个类来自同一份字节码文件，它们也被认为是不同的类，如果尝试将一个环境中序列化的对象在另一个环境中反序列化，可能会抛出`ClassNotFoundException`或者`InvalidClassException`。

为了解决这个问题，你需要确保使用相同的类加载器来序列化和反序列化对象。如果这不可能（例如，在分布式应用中），你可能需要在应用的不同部分之间共享类的字节码。

示例：

假设我们有两个类加载器A和B，它们分别加载了相同的类。我们使用类加载器A序列化一个对象，然后尝试使用类加载器B来反序列化它。

```java
1public class ClassLoaderDemo {
2    public static void main(String[] args) throws Exception {
3        // 假设这是类加载器A加载的Person类
4        ClassLoader classLoaderA = new CustomClassLoader();
5        Class<?> classA = classLoaderA.loadClass("Person");
6        Object personA = classA.newInstance();
7
8        // 序列化对象
9        ByteArrayOutputStream bos = new ByteArrayOutputStream();
10        ObjectOutputStream oos = new ObjectOutputStream(bos);
11        oos.writeObject(personA);
12
13        // 假设这是类加载器B加载的Person类
14        ClassLoader classLoaderB = new CustomClassLoader();
15        Class<?> classB = classLoaderB.loadClass("Person");
16
17        // 尝试使用类加载器B来反序列化对象
18        ByteArrayInputStream bis = new ByteArrayInputStream(bos.toByteArray());
19        ObjectInputStream ois = new ObjectInputStream(bis) {
20            @Override
21            protected Class<?> resolveClass(ObjectStreamClass desc) throws IOException, ClassNotFoundException {
22                // 指定使用类加载器B
23                return classLoaderB.loadClass(desc.getName());
24            }
25        };
26
27        // 会抛出ClassCastException，因为类加载器A和B加载的Person类是不同的
28        Object personB = classB.cast(ois.readObject());
29    }
30}
```

在这个示例中，尽管`Person`类的字节码相同，但由于使用了两个不同的类加载器，所以类加载器A和B加载的`Person`类被视为不同的类。尝试将使用类加载器A序列化的对象传递给使用类加载器B反序列化会导致`ClassCastException`。在实际应用中，解决这个问题通常需要确保序列化和反序列化使用相同的类加载器，或者共享相同的类字节码。
