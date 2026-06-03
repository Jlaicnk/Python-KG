var graphData = {
  "nodes": [
    {
      "id": "python语言概述",
      "name": "python语言概述",
      "category": 0,
      "symbolSize": 80,
      "desc": "python语言概述介绍了python语言的基本概念、特点和技术优势，是学习python语言的起点。"
    },
    {
      "id": "python基本语法",
      "name": "python基本语法",
      "category": 0,
      "symbolSize": 80,
      "desc": "数据类型、常量、变量和表达式是python语言的基础，涵盖了基本数据表示和操作方式。"
    },
    {
      "id": "选择（分支）结构",
      "name": "选择（分支）结构",
      "category": 0,
      "symbolSize": 80,
      "desc": "选择结构通过if、else、嵌套选择结构等语句实现程序的分支逻辑，满足不同条件的处理需求。"
    },
    {
      "id": "循环结构",
      "name": "循环结构",
      "category": 0,
      "symbolSize": 80,
      "desc": "循环结构程序设计通过for、while等循环语句实现重复执行，是解决迭代问题的核心。"
    },
    {
      "id": "列表",
      "name": "列表",
      "category": 0,
      "symbolSize": 80,
      "desc": "列表用于存储批量数据，包括一维数据、二维数据等，同时可以对数据进行增删改查"
    },
    {
      "id": "元组",
      "name": "元组",
      "category": 0,
      "symbolSize": 80,
      "desc": "列表也用于存储批量数据，但只能对数据进行查询"
    },
    {
      "id": "集合",
      "name": "集合",
      "category": 0,
      "symbolSize": 80,
      "desc": "集合也是用于存储批量数据，但集合中的元素彼此不能相同（保持唯一性）并且不按照任何特定的顺序放置（集合中的元素，没有序号的概念）,底层采用哈希方式存储"
    },
    {
      "id": "字典",
      "name": "字典",
      "category": 0,
      "symbolSize": 80,
      "desc": "字典是一个存储键值对集合的Python容器。它通过使用关键字来快速获取、删除和更新值。"
    },
    {
      "id": "字符串",
      "name": "字符串",
      "category": 0,
      "symbolSize": 80,
      "desc": "字符串是一个字符序列，在计算机内部，所有的字符都是以某种编码的二进制方式进行存储和处理的。Python提供了丰富的字符串处理函数"
    },
    {
      "id": "函数",
      "name": "函数",
      "category": 0,
      "symbolSize": 80,
      "desc": "函数是Python语言的核心模块化结构，通过定义和调用来实现代码的复用和逻辑封装。"
    },
    {
      "id": "异常处理",
      "name": "异常处理",
      "category": 0,
      "symbolSize": 80,
      "desc": "Python提供了异常处理模块实现程序中系统异常和自定义异常的处理"
    },
    {
      "id": "文件处理",
      "name": "文件处理",
      "category": 0,
      "symbolSize": 80,
      "desc": "文件用于永久存储数据。根据存储数据的格式分为:文本文件、二进制文件、CSV文件、JSon文件、Excel文件等"
    },
    {
      "id": "jieba和图形绘制",
      "name": "jieba和图形绘制",
      "category": 0,
      "symbolSize": 80,
      "desc": "jieba是Python提供的中文分词组件，用于从中文文件中提取出词语。图形绘制是根据数据绘制出折线图、饼图等"
    },
    {
      "id": "程序设计语言",
      "name": "程序设计语言",
      "category": 1,
      "symbolSize": 50,
      "desc": "程序设计语言是计算机与人类沟通的桥梁，用于描述程序逻辑和实现算法。"
    },
    {
      "id": "算法基础",
      "name": "算法基础",
      "category": 1,
      "symbolSize": 50,
      "desc": "算法基础是编程的核心，包括算法概念、设计方法和复杂度分析，是解决问题的基石。"
    },
    {
      "id": "python语言的发展历史及特点",
      "name": "python语言的发展历史及特点",
      "category": 1,
      "symbolSize": 50,
      "desc": "python语言发展历史回顾了其起源与演进，特点在于高效性、简洁性和广泛适用性。"
    },
    {
      "id": "程序设计语言发展",
      "name": "程序设计语言发展",
      "category": 2,
      "symbolSize": 25,
      "desc": "程序设计语言经历了从机器语言到高级语言的演化过程。早期的程序设计语言是面向机器的，随着计算机的进步，开发出了更加抽象、易于理解的高级语言，如C、C++、Java、python等。"
    },
    {
      "id": "程序设计语言概述",
      "name": "程序设计语言概述",
      "category": 2,
      "symbolSize": 25,
      "desc": "程序设计语言是计算机编程中用于编写源代码的语言，分为低级语言（如汇编语言）和高级语言（如C语言）。高级语言抽象性高，便于开发者编写和维护代码。"
    },
    {
      "id": "计算机语言",
      "name": "计算机语言",
      "category": 2,
      "symbolSize": 25,
      "desc": "计算机语言是人类与计算机之间交流的桥梁，分为机器语言、汇编语言和高级语言。机器语言直接与计算机硬件通信，汇编语言为机器语言的简化，高级语言更接近人类思维方式。"
    },
    {
      "id": "二进制数字的基本知识――计算机系统",
      "name": "二进制数字的基本知识――计算机系统",
      "category": 2,
      "symbolSize": 25,
      "desc": "二进制是计算机内部使用的数字表示系统。计算机通过0和1的状态表示数据，所有程序和数据都可以转换为二进制形式进行存储和计算。"
    },
    {
      "id": "编程风格",
      "name": "编程风格",
      "category": 2,
      "symbolSize": 25,
      "desc": "编程风格是指程序员在编写代码时遵循的一些习惯和规范，包括命名规则、代码缩进、注释规范等。良好的编程风格可以提高代码的可读性和维护性。"
    },
    {
      "id": "算法概念",
      "name": "算法概念",
      "category": 2,
      "symbolSize": 25,
      "desc": "算法是解决特定问题的一组明确的指令或规则。它通常由输入、输出、步骤、条件判断和循环等构成，具有效率性、清晰性和可行性等特点。算法设计是编程的核心。"
    },
    {
      "id": "算法描述",
      "name": "算法描述",
      "category": 2,
      "symbolSize": 25,
      "desc": "算法描述是指对算法进行准确表达，通常采用自然语言、伪代码或流程图等形式。伪代码是一种非正式的描述方法，便于开发者理解算法的基本逻辑和步骤。"
    },
    {
      "id": "算法控制结构",
      "name": "算法控制结构",
      "category": 2,
      "symbolSize": 25,
      "desc": "算法控制结构包括顺序结构、选择结构和循环结构，决定了程序执行的路径。选择结构和循环结构使得算法能够处理复杂的逻辑分支和反复执行的操作。"
    },
    {
      "id": "python程序",
      "name": "python程序",
      "category": 2,
      "symbolSize": 25,
      "desc": "python程序是一种采用python语言编写的计算机程序，具有高效、简洁的特点。python语言广泛应用于机器学习、数据分析等领域。"
    },
    {
      "id": "python语言的诞生",
      "name": "python语言的诞生",
      "category": 2,
      "symbolSize": 25,
      "desc": "第一个Python编译器在1991年诞生，使用C语言实现，可以调用C语言编写的库文件。Python是全球前四大流行编程语言之一。"
    },
    {
      "id": "python语言的发展",
      "name": "python语言的发展",
      "category": 2,
      "symbolSize": 25,
      "desc": "python语言自诞生以来经历了多个版本的演变，目前最新版本是3.14.13。Python的各个版本可以在www.python.org获取 。"
    },
    {
      "id": "python语言的流行性",
      "name": "python语言的流行性",
      "category": 2,
      "symbolSize": 25,
      "desc": "python语言凭借其高效、便捷、跨平台（跨硬件和跨软件）的特点，广泛应用于后端开发、游戏开发、网站开发、科学运算、大数据分析、机器学习、云计算、图形开发等领域。"
    },
    {
      "id": "python语言的用途",
      "name": "python语言的用途",
      "category": 2,
      "symbolSize": 25,
      "desc": "python语言用于后端开发、游戏开发、网站开发、科学运算、大数据分析、机器学习、云计算、图形开发等领域。"
    },
    {
      "id": "python语言的特点",
      "name": "python语言的特点",
      "category": 2,
      "symbolSize": 25,
      "desc": "Python语言具有很强的面向对象特性，提供了丰富的类库，方便了功能的编程实现。Python提供了异常处理机制、堆栈跟踪机制和垃圾回收机制。Python的语言设计使得Python程序短小精悍，并且有很高的可读性。"
    },
    {
      "id": "不同数据类型详解",
      "name": "不同数据类型详解",
      "category": 1,
      "symbolSize": 50,
      "desc": "不同数据类型详解分析了python语言中各种数据类型的分类、特点和用法。"
    },
    {
      "id": "常量",
      "name": "常量",
      "category": 1,
      "symbolSize": 50,
      "desc": "常量介绍了python语言中的常量定义和使用，包括数值常量和符号常量。"
    },
    {
      "id": "变量",
      "name": "变量",
      "category": 1,
      "symbolSize": 50,
      "desc": "变量讲解了变量的声明、赋值和作用，以及在程序中的动态特性。"
    },
    {
      "id": "运算符和表达式",
      "name": "运算符和表达式",
      "category": 1,
      "symbolSize": 50,
      "desc": "运算符和表达式涵盖了算术、逻辑、关系等运算符，以及表达式的构造和应用。"
    },
    {
      "id": "类型转换",
      "name": "类型转换",
      "category": 1,
      "symbolSize": 50,
      "desc": "本节分析强制类型转换的触发条件与规则，强调数据精度丢失的风险及合理转换的策略。"
    },
    {
      "id": "数据的输入与输出",
      "name": "数据的输入与输出",
      "category": 1,
      "symbolSize": 50,
      "desc": "数据的输入与输出是Python程序中处理外部数据的重要功能，包括从文件读取数据和将数据写入文件等操作。"
    },
    {
      "id": "数据类型导入",
      "name": "数据类型导入",
      "category": 2,
      "symbolSize": 25,
      "desc": "在python语言中，数据类型有基本数据类型（整数、实数、字符串、复数、布尔值、空值等）和对象类型（列表、元组、字典、集合等）。"
    },
    {
      "id": "实型常量表示方法",
      "name": "实型常量表示方法",
      "category": 2,
      "symbolSize": 25,
      "desc": "实型常量通常使用浮点数表示，如3.14、-5.67e-3等。"
    },
    {
      "id": "整型常量表示方法",
      "name": "整型常量表示方法",
      "category": 2,
      "symbolSize": 25,
      "desc": "整型常量表示方法通常是整数形式，如10、-256，并可以通过加前缀（如0x表示十六进制，0O表示八进制）来表示不同的进制。"
    },
    {
      "id": "变量的含义与意义",
      "name": "变量的含义与意义",
      "category": 2,
      "symbolSize": 25,
      "desc": "变量是用于存储数据的内存位置，通过变量名可以访问和操作存储的数据。它在程序中占有特定的内存空间。"
    },
    {
      "id": "变量名的命名规则",
      "name": "变量名的命名规则",
      "category": 2,
      "symbolSize": 25,
      "desc": "变量名必须遵循一定的规则，如必须以字母或下划线开头，后续可以包含字母、数字或下划线；不能使用Python语言的关键字作为变量名。"
    },
    {
      "id": "\"None\"",
      "name": "\"None\"",
      "category": 2,
      "symbolSize": 25,
      "desc": "空值"
    },
    {
      "id": "变量的操作",
      "name": "变量的操作",
      "category": 2,
      "symbolSize": 25,
      "desc": "变量的操作包括赋值、运算、比较等。Python语言支持各种运算符来操作变量，如算术运算符、关系运算符、逻辑运算符等。"
    },
    {
      "id": "强制类型转换",
      "name": "强制类型转换",
      "category": 2,
      "symbolSize": 25,
      "desc": "强制类型转换通过(type)语法实现，例如：int(3.14)将得到浮点数的整数部分3。它常用于不同类型之间的转换，可能会丢失数据。"
    },
    {
      "id": "eval类型转换函数",
      "name": "eval类型转换函数",
      "category": 2,
      "symbolSize": 25,
      "desc": "eval(str),str必须为字符串，用来计算在字符串中的有效Python表达式,并返回一个对象（对象的值，根据计算结果确定）。 例如：x=eval(‘56*10’)，则x=560。例如：x=eval(input())，输入3+4,则x=7。"
    },
    {
      "id": "str类型转换函数",
      "name": "str类型转换函数",
      "category": 2,
      "symbolSize": 25,
      "desc": "str(object)，将object的值转换为字符串 。例如：y=str(56) ，则y=‘56’。例如：y=str(23.5+78.9),则y=‘102.4’"
    },
    {
      "id": "repr类型转换函数",
      "name": "repr类型转换函数",
      "category": 2,
      "symbolSize": 25,
      "desc": "repr(object)，将object的值转换为表达式字符串。例如：y=repr(56) ,则y=‘56’"
    },
    {
      "id": "算术运算符",
      "name": "算术运算符",
      "category": 2,
      "symbolSize": 25,
      "desc": "算术运算符用于执行常见的数学运算，如乘方**、加法+、减法-、乘法*、除法/、除法//、取余%等。它们在数值计算中经常使用。例如：4//5  =0，4/5=0.8"
    },
    {
      "id": "算数运算符的优先级",
      "name": "算数运算符的优先级",
      "category": 2,
      "symbolSize": 25,
      "desc": "优先级有高到低依次为：**,*///,+-"
    },
    {
      "id": "算术表达式",
      "name": "算术表达式",
      "category": 2,
      "symbolSize": 25,
      "desc": "算术表达式由常量、变量和算术运算符组成，用于计算数值结果。例如，-7%3=2。例如：12/6.0-2*2=-2.0。"
    },
    {
      "id": "赋值运算符",
      "name": "赋值运算符",
      "category": 2,
      "symbolSize": 25,
      "desc": "赋值运算符用于将赋值号右边表达式的值赋给变量，赋值运算符为=，复合赋值运算符为*=等。例如：x=3表示将3赋给x,x的值为3。例如：x,y,z=34,67,89，则x=34，y=67，z=89 。例如：a *= b 等价于 a = a * b。"
    },
    {
      "id": "运算符的概念",
      "name": "运算符的概念",
      "category": 2,
      "symbolSize": 25,
      "desc": "运算符是用于执行某种运算的符号，Python语言提供了多种运算符，如算术运算符、逻辑运算符、关系运算符、位运算符等。"
    },
    {
      "id": "运算符的分类",
      "name": "运算符的分类",
      "category": 2,
      "symbolSize": 25,
      "desc": "运算符可分为算术运算符、关系运算符、逻辑运算符、赋值运算符等。每种运算符有不同的作用和优先级，决定了表达式的计算顺序。"
    },
    {
      "id": "表达式的组成",
      "name": "表达式的组成",
      "category": 2,
      "symbolSize": 25,
      "desc": "表达式是由操作数、运算符和括号组成的，操作数可以是常量、变量、函数调用等，运算符用于对操作数进行操作，括号用于控制运算顺序。"
    },
    {
      "id": "逻辑运算符",
      "name": "逻辑运算符",
      "category": 2,
      "symbolSize": 25,
      "desc": "逻辑运算符用于处理布尔值（真和假）。and（与）、or(或者)、not(逻辑取反)"
    },
    {
      "id": "关系运算符与关系表达式",
      "name": "关系运算符与关系表达式",
      "category": 2,
      "symbolSize": 25,
      "desc": "关系运算符用于比较两个值的大小或关系，常用的关系运算符有==、!=、>、<、>=、<=等。关系表达式的结果是布尔值，通常用于条件判断中。"
    },
    {
      "id": "与逻辑表达式",
      "name": "与逻辑表达式",
      "category": 2,
      "symbolSize": 25,
      "desc": "表达多个条件同时存在。例如:a和b不能同时存在,用Python描述的表达式为:not(a&&b)  。例如：grade大于等于90或者jiangli超过3次\r\n，用Python描述的表达式为:grade>=90 or jiangli>3 。"
    },
    {
      "id": "或逻辑表达式",
      "name": "或逻辑表达式",
      "category": 2,
      "symbolSize": 25,
      "desc": "表达多个条件只要有一个存在即可。例如:15>=45  or 3<=6  结果为：True"
    },
    {
      "id": "取反逻辑表达式",
      "name": "取反逻辑表达式",
      "category": 2,
      "symbolSize": 25,
      "desc": "例如：not 3的结果为False"
    },
    {
      "id": "成员运算符in、not in",
      "name": "成员运算符in、not in",
      "category": 2,
      "symbolSize": 25,
      "desc": "判断数据之间的包含关系。例如:'a' in 'abc' 返回True 。例如：\"ac\" in \"dfackj\"返回True"
    },
    {
      "id": "数据的输入",
      "name": "数据的输入",
      "category": 2,
      "symbolSize": 25,
      "desc": "数据输入常通过input函数实现，可以从键盘获取用户输入的数据，并根据数据类型格式化输入内容。"
    },
    {
      "id": "数据的输出",
      "name": "数据的输出",
      "category": 2,
      "symbolSize": 25,
      "desc": "数据输出常通过print函数实现，能够打印变量的值、文本和格式化数据。输出格式可以指定宽度、精度等，适应不同的显示需求。"
    },
    {
      "id": "无格式输出",
      "name": "无格式输出",
      "category": 2,
      "symbolSize": 25,
      "desc": "无格式输出print语句。假设：x=3，y=6，那么：print(\"x=\",x,\"y=\",y,\"x+y=\",x+y)输出结果为：x= 3 y= 6  x+y= 9"
    },
    {
      "id": "有格式输出",
      "name": "有格式输出",
      "category": 2,
      "symbolSize": 25,
      "desc": "可以控制数据的对齐占位个数等。假设：x=9.4567，y=12.3456，那么：print(\"test:%s=%7.2f\"%(\"x+y\",x+y))输出结果为：test:x+y=  21.80"
    },
    {
      "id": "利用format有格式输出",
      "name": "利用format有格式输出",
      "category": 2,
      "symbolSize": 25,
      "desc": "例如：print(format(97,'c'),format(3.14159626,'4.2f'))，输出结果为:a    3.14"
    },
    {
      "id": "input输入",
      "name": "input输入",
      "category": 2,
      "symbolSize": 25,
      "desc": "例如: test=input()语句执行时,假设输入3,4,5,那么: test的值为'3,4,5’"
    },
    {
      "id": "结构化程序设计思想",
      "name": "结构化程序设计思想",
      "category": 1,
      "symbolSize": 50,
      "desc": "结构化程序设计强调通过函数和模块化的方式组织程序，避免使用不清晰的跳转结构，推动代码的可读性和维护性。"
    },
    {
      "id": "顺序结构引入",
      "name": "顺序结构引入",
      "category": 1,
      "symbolSize": 50,
      "desc": "顺序结构引入讲解程序按步骤执行的特性，是理解程序流程的基础。"
    },
    {
      "id": "顺序结构与语句",
      "name": "顺序结构与语句",
      "category": 2,
      "symbolSize": 25,
      "desc": "顺序结构是最简单的程序结构，代码按照从上到下的顺序逐行执行。顺序结构适合执行不需要选择或循环的简单操作。"
    },
    {
      "id": "选择结构的引入",
      "name": "选择结构的引入",
      "category": 1,
      "symbolSize": 50,
      "desc": "选择结构用于根据条件判断决定程序执行路径。if语句是常见的选择结构。选择结构可以处理不同的输入情况，实现程序的逻辑分支。"
    },
    {
      "id": "二分支选择结构",
      "name": "二分支选择结构",
      "category": 1,
      "symbolSize": 50,
      "desc": "两种条件的分类,条件成立执行A,不成立执行B"
    },
    {
      "id": "二分支选择结构形式",
      "name": "二分支选择结构形式",
      "category": 2,
      "symbolSize": 25,
      "desc": "if…else…"
    },
    {
      "id": "多分支选择结构",
      "name": "多分支选择结构",
      "category": 1,
      "symbolSize": 50,
      "desc": "多种条件的分类实现"
    },
    {
      "id": "多分支选择结构形式",
      "name": "多分支选择结构形式",
      "category": 2,
      "symbolSize": 25,
      "desc": "if…elif…elif…elif…else…"
    },
    {
      "id": "条件表达式",
      "name": "条件表达式",
      "category": 1,
      "symbolSize": 50,
      "desc": "条件表达式用于执行简单的条件分类,并得到一个表达式的值"
    },
    {
      "id": "选择结构的嵌套",
      "name": "选择结构的嵌套",
      "category": 1,
      "symbolSize": 50,
      "desc": "选择结构的嵌套：一个选择结构子句中的语句也可以包括另一个选择结构。 嵌套的深度是没有限制的。使用嵌套的if语句时，需要更加注意代码的缩进量，因为这决定了代码是处在哪一级代码块中的，从而影响程序的逻辑是否被正确地实现。"
    },
    {
      "id": "嵌套选择结构与级联选择结构的区别",
      "name": "嵌套选择结构与级联选择结构的区别",
      "category": 2,
      "symbolSize": 25,
      "desc": "在批量数据分类处理时，如果数据的分布有一定的概率差异，使用嵌套选择比级联选择效率高"
    },
    {
      "id": "选择结构综合型实验",
      "name": "选择结构综合型实验",
      "category": 2,
      "symbolSize": 25,
      "desc": "选择结构综合型实验帮助学生通过案例学习如何使用级联选择、嵌套选择等选择结构来解决不同条件下的问题，增强分支结构的理解和应用。"
    },
    {
      "id": "嵌套选择结构形式",
      "name": "嵌套选择结构形式",
      "category": 2,
      "symbolSize": 25,
      "desc": "if  (if…else…)  else   (if…else…)"
    },
    {
      "id": "循环的概念",
      "name": "循环的概念",
      "category": 1,
      "symbolSize": 50,
      "desc": "理解重复执行的概念"
    },
    {
      "id": "循环语句的选择",
      "name": "循环语句的选择",
      "category": 1,
      "symbolSize": 50,
      "desc": "循环语句用于重复执行某些代码，直到满足条件。for、while和do-while是常见的循环结构，它们在处理多次重复任务时非常高效。"
    },
    {
      "id": "while循环",
      "name": "while循环",
      "category": 1,
      "symbolSize": 50,
      "desc": "理解while循环的执行过程以及循环条件的表达，注意循环体需要缩进"
    },
    {
      "id": "for循环",
      "name": "for循环",
      "category": 1,
      "symbolSize": 50,
      "desc": "理解for循环的执行过程以及序列的概念，注意循环体需要缩进"
    },
    {
      "id": "多重循环",
      "name": "多重循环",
      "category": 1,
      "symbolSize": 50,
      "desc": "多重循环是指在一个循环内部嵌套另一个循环，常用于二维数组的遍历和矩阵运算等场景。适当控制循环次数和条件，避免不必要的计算。"
    },
    {
      "id": "break和continue语句",
      "name": "break和continue语句",
      "category": 1,
      "symbolSize": 50,
      "desc": "break语句用于跳出当前循环，continue语句用于跳过当前循环的剩余部分，进入下一次循环。两者都能控制循环流程，增强程序的灵活性。"
    },
    {
      "id": "循环语句应用",
      "name": "循环语句应用",
      "category": 2,
      "symbolSize": 25,
      "desc": "循环语句常用于解决需要重复计算的任务，如遍历数组、求和、查找等。通过合适的条件控制循环的结束，避免死循环发生。"
    },
    {
      "id": "循环结构综合型实验",
      "name": "循环结构综合型实验",
      "category": 2,
      "symbolSize": 25,
      "desc": "循环结构综合型实验通过实践加强对不同类型循环结构的理解，掌握如何高效地使用循环结构解决实际问题。"
    },
    {
      "id": "常见错误分析",
      "name": "常见错误分析",
      "category": 2,
      "symbolSize": 25,
      "desc": "常见错误包括语法错误、运行时错误和逻辑错误。程序员应当掌握调试技巧和错误排查方法，如通过调试器、日志等手段分析错误的来源。"
    },
    {
      "id": "range函数",
      "name": "range函数",
      "category": 1,
      "symbolSize": 50,
      "desc": "该函数用于构造序列。range函数语法格式:    range([m,]n[,t])。其中，m表示序列的初始值，n表示序列的终止值，t表示步长。返回的数字序列对象为：(m,m+t,m+2t,m+3t…..)。说明：m可以省略，表示从0开始。t也可以省略，表示步长为1."
    },
    {
      "id": "字符串序列",
      "name": "字符串序列",
      "category": 2,
      "symbolSize": 25,
      "desc": "['apple','banana','mango']"
    },
    {
      "id": "整数列表序列",
      "name": "整数列表序列",
      "category": 2,
      "symbolSize": 25,
      "desc": "[1,3,5,7,9]"
    },
    {
      "id": "整数集合序列",
      "name": "整数集合序列",
      "category": 2,
      "symbolSize": 25,
      "desc": "{1,3,5,7,9}"
    },
    {
      "id": "range(1,13,3)",
      "name": "range(1,13,3)",
      "category": 2,
      "symbolSize": 25,
      "desc": "结果为： (1,4,7,10)，是一个等差数列"
    },
    {
      "id": "列表的引入",
      "name": "列表的引入",
      "category": 1,
      "symbolSize": 50,
      "desc": "列表的引入介绍了列表作为Python中有序可变序列的基本概念，是组织批量数据的常用数据结构。"
    },
    {
      "id": "列表的定义",
      "name": "列表的定义",
      "category": 1,
      "symbolSize": 50,
      "desc": "列表的定义介绍了如何使用方括号[]或list()函数创建列表对象，列表可以存储任意类型的元素。"
    },
    {
      "id": "列表的运算符",
      "name": "列表的运算符",
      "category": 1,
      "symbolSize": 50,
      "desc": "列表支持加号(+)拼接、乘号(*)重复、in运算符判断元素是否存在等常用运算符操作。"
    },
    {
      "id": "python提供的内置函数用于操作列表",
      "name": "python提供的内置函数用于操作列表",
      "category": 1,
      "symbolSize": 50,
      "desc": "python提供了列表相关的内置函数实现列表数据的增删改查统计等,函数的参数是列表对象"
    },
    {
      "id": "列表内置的操作函数",
      "name": "列表内置的操作函数",
      "category": 1,
      "symbolSize": 50,
      "desc": "列表类提供了相关的成员函数：用于添加、删除等,通过列表对象操作"
    },
    {
      "id": "多维列表的引入",
      "name": "多维列表的引入",
      "category": 1,
      "symbolSize": 50,
      "desc": "多维列表：列表中的元素可以是任何类型的对象，包括用列表来作为其元素。"
    },
    {
      "id": "二维列表",
      "name": "二维列表",
      "category": 1,
      "symbolSize": 50,
      "desc": "二维列表可以理解为一个由行组成的多个一维列表。"
    },
    {
      "id": "二维列表查找",
      "name": "二维列表查找",
      "category": 1,
      "symbolSize": 50,
      "desc": "掌握查找算法"
    },
    {
      "id": "二维列表排序",
      "name": "二维列表排序",
      "category": 1,
      "symbolSize": 50,
      "desc": "掌握排序算法"
    },
    {
      "id": "定义空列表",
      "name": "定义空列表",
      "category": 2,
      "symbolSize": 25,
      "desc": "可以通过直接赋值空方括号[]或调用list()函数定义空列表，之后可使用append()等方法添加元素。"
    },
    {
      "id": "利用构造函数定义列表",
      "name": "利用构造函数定义列表",
      "category": 2,
      "symbolSize": 25,
      "desc": "利用构造函数list()可以将其他可迭代对象（如字符串、元组、集合）转换为列表。"
    },
    {
      "id": "利用列表推导式建立一维列表",
      "name": "利用列表推导式建立一维列表",
      "category": 2,
      "symbolSize": 25,
      "desc": "列表推导式是一种简洁高效的列表创建方式，通过for循环表达式在一行代码中生成新列表。"
    },
    {
      "id": "利用已经有的字符序列、元组转换为列表",
      "name": "利用已经有的字符序列、元组转换为列表",
      "category": 2,
      "symbolSize": 25,
      "desc": "利用list()函数可以将已有的字符串或元组转换为列表，转换后每个字符或元素成为一个独立的列表元素。"
    },
    {
      "id": "列表的类型",
      "name": "列表的类型",
      "category": 2,
      "symbolSize": 25,
      "desc": "列表通过Python内置的list类进行定义"
    },
    {
      "id": "取片段",
      "name": "取片段",
      "category": 2,
      "symbolSize": 25,
      "desc": "Start:end:length"
    },
    {
      "id": "Index",
      "name": "Index",
      "category": 2,
      "symbolSize": 25,
      "desc": "取元素， Index是下标"
    },
    {
      "id": "+",
      "name": "+",
      "category": 2,
      "symbolSize": 25,
      "desc": "列表连接"
    },
    {
      "id": "*",
      "name": "*",
      "category": 2,
      "symbolSize": 25,
      "desc": "列表复制"
    },
    {
      "id": "in/not in",
      "name": "in/not in",
      "category": 2,
      "symbolSize": 25,
      "desc": "使用in/not in运算符可以判断一个元素是否在列表中"
    },
    {
      "id": "=",
      "name": "=",
      "category": 2,
      "symbolSize": 25,
      "desc": "可以将一个序列赋给一个列表变量，也可以将序列拆分，赋给多个变量"
    },
    {
      "id": "列表更新",
      "name": "列表更新",
      "category": 2,
      "symbolSize": 25,
      "desc": "更新列表的连续数据，离散数据"
    },
    {
      "id": "all(iterable)",
      "name": "all(iterable)",
      "category": 2,
      "symbolSize": 25,
      "desc": "用于判断列表中元素是否都为真"
    },
    {
      "id": "any(iterable)",
      "name": "any(iterable)",
      "category": 2,
      "symbolSize": 25,
      "desc": "用于判断列表中元素是否有一个为真"
    },
    {
      "id": "len(s)",
      "name": "len(s)",
      "category": 2,
      "symbolSize": 25,
      "desc": "求列表长度"
    },
    {
      "id": "max(iterable）",
      "name": "max(iterable）",
      "category": 2,
      "symbolSize": 25,
      "desc": "求列表最大值"
    },
    {
      "id": "sorted(iterable, cmp=None, key, reverse=False)",
      "name": "sorted(iterable, cmp=None, key, reverse=False)",
      "category": 2,
      "symbolSize": 25,
      "desc": "对列表升序排序，key是函数名，确定了根据什么来进行排序；cmp比较的方法，与key类似； reverse = True 降序 ， reverse = False 升序（默认）"
    },
    {
      "id": "reversed(iterable)",
      "name": "reversed(iterable)",
      "category": 2,
      "symbolSize": 25,
      "desc": "倒序列表中的元素"
    },
    {
      "id": "list.append(x)",
      "name": "list.append(x)",
      "category": 2,
      "symbolSize": 25,
      "desc": "x可以是一个值，也可以是一个列表类型的数据"
    },
    {
      "id": "list.extend(L)",
      "name": "list.extend(L)",
      "category": 2,
      "symbolSize": 25,
      "desc": "L必须是一个列表类的对象"
    },
    {
      "id": "list.insert(index, x)",
      "name": "list.insert(index, x)",
      "category": 2,
      "symbolSize": 25,
      "desc": "x可以是一个值，也可以是一个列表类型的数据"
    },
    {
      "id": "list.remove(x)",
      "name": "list.remove(x)",
      "category": 2,
      "symbolSize": 25,
      "desc": "删除不存在的元素，产生异常"
    },
    {
      "id": "list.pop([i])",
      "name": "list.pop([i])",
      "category": 2,
      "symbolSize": 25,
      "desc": "删除第I个元素，或删除最后一个元素"
    },
    {
      "id": "list.index(x)",
      "name": "list.index(x)",
      "category": 2,
      "symbolSize": 25,
      "desc": "得到某个元素的下标，不存在的元素产生异常"
    },
    {
      "id": "list.count(x)",
      "name": "list.count(x)",
      "category": 2,
      "symbolSize": 25,
      "desc": "统计某个元素个数"
    },
    {
      "id": "list.sort(cmp=None, key=None, reverse=False)",
      "name": "list.sort(cmp=None, key=None, reverse=False)",
      "category": 2,
      "symbolSize": 25,
      "desc": "列表排序"
    },
    {
      "id": "list.reverse()",
      "name": "list.reverse()",
      "category": 2,
      "symbolSize": 25,
      "desc": "列表倒序"
    },
    {
      "id": "行下标、列下标",
      "name": "行下标、列下标",
      "category": 2,
      "symbolSize": 25,
      "desc": "二维列表用行下标和列下标处理元素"
    },
    {
      "id": "二维列表的直接定义",
      "name": "二维列表的直接定义",
      "category": 2,
      "symbolSize": 25,
      "desc": "data=[[1,2,3,4],[11,22,33,44],[111,222,333,444]]"
    },
    {
      "id": "利用列表推导式建立二维列表",
      "name": "利用列表推导式建立二维列表",
      "category": 2,
      "symbolSize": 25,
      "desc": "[[x,5] for x in range(4) ]"
    },
    {
      "id": "二维列表取值",
      "name": "二维列表取值",
      "category": 2,
      "symbolSize": 25,
      "desc": "二维列表用行下标和列下标取元素"
    },
    {
      "id": "元组的引入",
      "name": "元组的引入",
      "category": 1,
      "symbolSize": 50,
      "desc": "元组是不可变的，即元组一旦创建，其中的元素就不可以被修改"
    },
    {
      "id": "元组的定义",
      "name": "元组的定义",
      "category": 1,
      "symbolSize": 50,
      "desc": "元组由用逗号分隔的若干值组成。如果在使用中不会对列表的内容进行修改，那么可以使用元组来代替列表。"
    },
    {
      "id": "元组的类型",
      "name": "元组的类型",
      "category": 1,
      "symbolSize": 50,
      "desc": "元组通过Python内置的tuple类进行定义"
    },
    {
      "id": "元组的创建",
      "name": "元组的创建",
      "category": 1,
      "symbolSize": 50,
      "desc": "元组的创建介绍了如何使用圆括号()或tuple()函数创建不可变序列，元组创建后元素不可修改。"
    },
    {
      "id": "元组与列表的比较",
      "name": "元组与列表的比较",
      "category": 1,
      "symbolSize": 50,
      "desc": "元组和列表都属于序列。但列表属于可变序列，可以随意地修改列表汇总的元素值、增加和删除元素；而元组属于不可变序列，元组中的元素一旦定义就不允许进行增加、删除和替换操作。因此，tuple类没有提供append()、insert()和remove()等函数。在使用下标访问或者切片操作时，也只允许读取元组中的值而不能对其进行修改。"
    },
    {
      "id": "元组的操作",
      "name": "元组的操作",
      "category": 1,
      "symbolSize": 50,
      "desc": "元组：具有max,min,len,[i]等方法，没有sort（）方法（排序相当于改变了元组的元素值），如果需要排序，转换成列表"
    },
    {
      "id": "定义空元组",
      "name": "定义空元组",
      "category": 2,
      "symbolSize": 25,
      "desc": "可以通过直接赋值空圆括号()或调用tuple()函数定义空元组。"
    },
    {
      "id": "利用构造函数定义元组",
      "name": "利用构造函数定义元组",
      "category": 2,
      "symbolSize": 25,
      "desc": "利用构造函数tuple()可以将其他可迭代对象（如列表、字符串）转换为元组。"
    },
    {
      "id": "利用列表推导式建立一维元组",
      "name": "利用列表推导式建立一维元组",
      "category": 2,
      "symbolSize": 25,
      "desc": "可以利用生成器表达式配合tuple()构造函数创建元组，与列表推导式语法类似。"
    },
    {
      "id": "利用已经有的字符序列、列表转换为元组",
      "name": "利用已经有的字符序列、列表转换为元组",
      "category": 2,
      "symbolSize": 25,
      "desc": "利用tuple()函数可以将已有的字符串或列表转换为元组，转换后内容不可修改。"
    },
    {
      "id": "集合的定义",
      "name": "集合的定义",
      "category": 1,
      "symbolSize": 50,
      "desc": "可以将若干个元素用一对花括号（{}）括起来以创建一个集合。集合内的元素同样使用逗号分隔。一个集合也可以包含不同类型的元素。"
    },
    {
      "id": "集合的类型",
      "name": "集合的类型",
      "category": 1,
      "symbolSize": 50,
      "desc": "Python使用内置类set来定义集合。使用set函数可以将列表、元组、字符串等类型转换为集合。"
    },
    {
      "id": "集合专用运算符",
      "name": "集合专用运算符",
      "category": 1,
      "symbolSize": 50,
      "desc": "Python提供了求交集、并集、差集和对称差集等集合运算。"
    },
    {
      "id": "集合的比较运算符",
      "name": "集合的比较运算符",
      "category": 1,
      "symbolSize": 50,
      "desc": "用于判断两个集合是否完全相同，或者包含关系"
    },
    {
      "id": "集合的操作",
      "name": "集合的操作",
      "category": 1,
      "symbolSize": 50,
      "desc": "空"
    },
    {
      "id": "直接定义",
      "name": "直接定义",
      "category": 2,
      "symbolSize": 25,
      "desc": "s={1,2,3,4,5}"
    },
    {
      "id": "利用构造函数定义集合",
      "name": "利用构造函数定义集合",
      "category": 2,
      "symbolSize": 25,
      "desc": "set4=set()，set4.add(90)"
    },
    {
      "id": "利用已经有的字符序列、列表、元组转换为集合",
      "name": "利用已经有的字符序列、列表、元组转换为集合",
      "category": 2,
      "symbolSize": 25,
      "desc": "set2=set(‘high’)"
    },
    {
      "id": "& 或 intersection",
      "name": "& 或 intersection",
      "category": 2,
      "symbolSize": 25,
      "desc": "使用s1.intersection(s2)或者 s1&s2可以计算两个集合的交集。"
    },
    {
      "id": "| 或 union",
      "name": "| 或 union",
      "category": 2,
      "symbolSize": 25,
      "desc": "使用s1.union(s2)或者   s1|s2可以计算两个集合的并集。"
    },
    {
      "id": "#NAME?",
      "name": "#NAME?",
      "category": 2,
      "symbolSize": 25,
      "desc": "使用s1.difference(s2)或者  s1-s2可以计算两个集合的差集。"
    },
    {
      "id": "^ 或 symmetric_difference",
      "name": "^ 或 symmetric_difference",
      "category": 2,
      "symbolSize": 25,
      "desc": "使用s1.symmetric_difference(s2)或者  s1^s2可以计算两个集合的对称差集（ s1|s2 ?C s1&s2 ）"
    },
    {
      "id": "==",
      "name": "==",
      "category": 2,
      "symbolSize": 25,
      "desc": "(两集合是否具有完全相同的元素)"
    },
    {
      "id": "!=",
      "name": "!=",
      "category": 2,
      "symbolSize": 25,
      "desc": "(两集合是否有不同的元素)"
    },
    {
      "id": "<",
      "name": "<",
      "category": 2,
      "symbolSize": 25,
      "desc": "（两集合是否存在纯子集关系，不相同，完全包含，元素位置无所谓）"
    },
    {
      "id": "<=",
      "name": "<=",
      "category": 2,
      "symbolSize": 25,
      "desc": "（两集合是子集关系）"
    },
    {
      "id": ">",
      "name": ">",
      "category": 2,
      "symbolSize": 25,
      "desc": "（两集合是否存在超集关系，不相同，完全包含，元素位置无所谓）"
    },
    {
      "id": ">=",
      "name": ">=",
      "category": 2,
      "symbolSize": 25,
      "desc": "（两集合是超集关系）"
    },
    {
      "id": "len(set)",
      "name": "len(set)",
      "category": 2,
      "symbolSize": 25,
      "desc": "可以使用len函数求集合的元素个数"
    },
    {
      "id": "max(set)",
      "name": "max(set)",
      "category": 2,
      "symbolSize": 25,
      "desc": "使用max函数求集合中的最大元素"
    },
    {
      "id": "sum(set)",
      "name": "sum(set)",
      "category": 2,
      "symbolSize": 25,
      "desc": "使用sum函数计算集合内所有元素的和"
    },
    {
      "id": "in  或  not in",
      "name": "in  或  not in",
      "category": 2,
      "symbolSize": 25,
      "desc": "使用in或not in运算符可以判断一个元素是否在一个集合中"
    },
    {
      "id": "add(elem)",
      "name": "add(elem)",
      "category": 2,
      "symbolSize": 25,
      "desc": "向集合添加元素"
    },
    {
      "id": "remove(elem)",
      "name": "remove(elem)",
      "category": 2,
      "symbolSize": 25,
      "desc": "删除集合中的元素，不存在有异常"
    },
    {
      "id": "discard(elem）",
      "name": "discard(elem）",
      "category": 2,
      "symbolSize": 25,
      "desc": "删除集合中的元素，即使数据不存在，也不会产生异常"
    },
    {
      "id": "pop()",
      "name": "pop()",
      "category": 2,
      "symbolSize": 25,
      "desc": "弹出集合中的最后一个元素，同时从集合中删除掉该元素"
    },
    {
      "id": "clear()",
      "name": "clear()",
      "category": 2,
      "symbolSize": 25,
      "desc": "一次性删除集合的所有元素"
    },
    {
      "id": "字典的概念",
      "name": "字典的概念",
      "category": 1,
      "symbolSize": 50,
      "desc": "字典是一个存储键值对集合的Python容器。它通过使用关键字来快速获取、删除和更新值。字典是按照关键字存储值的集合。一个字典对象中无序地存储了若干个条目。每个条目都是一个键值对，即一个关键字和一个对应值。关键字在字典中必须是唯一的，每个关键字唯一地匹配一个值。"
    },
    {
      "id": "字典的类型",
      "name": "字典的类型",
      "category": 1,
      "symbolSize": 50,
      "desc": "Python使用内置类dict来定义字典。"
    },
    {
      "id": "字典的定义",
      "name": "字典的定义",
      "category": 1,
      "symbolSize": 50,
      "desc": "字典的定义介绍了如何使用花括号{}或dict()函数创建键值对数据结构，每个元素由键和值组成。"
    },
    {
      "id": "字典的使用",
      "name": "字典的使用",
      "category": 1,
      "symbolSize": 50,
      "desc": "字典的使用包括通过键访问值、添加新键值对、修改已有值、删除键值对等常用操作。"
    },
    {
      "id": "字典的遍历",
      "name": "字典的遍历",
      "category": 1,
      "symbolSize": 50,
      "desc": "使用for…in循环可以遍历一个字典。"
    },
    {
      "id": "字典类的的基本操作",
      "name": "字典类的的基本操作",
      "category": 1,
      "symbolSize": 50,
      "desc": "字典的基本操作包括使用方括号赋值添加或修改键值对、del语句删除键、pop()方法弹出键值对等。"
    },
    {
      "id": "定义字典列表",
      "name": "定义字典列表",
      "category": 2,
      "symbolSize": 25,
      "desc": "Student=[{'name': 'peter', 'age': 40}, {'name': 'john', 'age': 35}]"
    },
    {
      "id": "字典的读",
      "name": "字典的读",
      "category": 2,
      "symbolSize": 25,
      "desc": "通过关键字进行读写操作"
    },
    {
      "id": "按照字典的关键字进行遍历",
      "name": "按照字典的关键字进行遍历",
      "category": 2,
      "symbolSize": 25,
      "desc": "可以使用keys()方法或直接for循环遍历字典的所有键，获取字典中全部关键字。"
    },
    {
      "id": "按照字典的值进行遍历",
      "name": "按照字典的值进行遍历",
      "category": 2,
      "symbolSize": 25,
      "desc": "可以使用values()方法遍历字典的所有值，获取字典中全部值。"
    },
    {
      "id": "按元素进行遍历",
      "name": "按元素进行遍历",
      "category": 2,
      "symbolSize": 25,
      "desc": "可以使用items()方法同时遍历字典的键(key)和值(value)，每次迭代返回一个(键, 值)二元组。"
    },
    {
      "id": "in/not in运算符",
      "name": "in/not in运算符",
      "category": 2,
      "symbolSize": 25,
      "desc": "使用in或not in运算符可以用来判断一个关键字是否在字典中。"
    },
    {
      "id": "比较运算符",
      "name": "比较运算符",
      "category": 2,
      "symbolSize": 25,
      "desc": "可以使用运算符==和!=来检测两个字典中的条目内容是否完全相同"
    },
    {
      "id": "del",
      "name": "del",
      "category": 2,
      "symbolSize": 25,
      "desc": "从字典中删除一个条目，可使用del关键字进行删除"
    },
    {
      "id": "copy()",
      "name": "copy()",
      "category": 2,
      "symbolSize": 25,
      "desc": "字典的拷贝"
    },
    {
      "id": "字符串的概念",
      "name": "字符串的概念",
      "category": 1,
      "symbolSize": 50,
      "desc": "字符串是一个字符序列，在计算机内部，所有的字符都是以某种编码的二进制方式进行存储和处理的。"
    },
    {
      "id": "字符编码",
      "name": "字符编码",
      "category": 1,
      "symbolSize": 50,
      "desc": "字符编码是将字符映射为数字的标准，Python支持ASCII、UTF-8、GBK等多种编码方式，通过encode()和decode()方法进行编解码。"
    },
    {
      "id": "字符串的操作",
      "name": "字符串的操作",
      "category": 1,
      "symbolSize": 50,
      "desc": "字符串的操作包括拼接、切片、格式化、查找、替换等常用功能，提供丰富的方法集。"
    },
    {
      "id": "字符串相关函数",
      "name": "字符串相关函数",
      "category": 1,
      "symbolSize": 50,
      "desc": "Python提供了丰富的字符串处理函数，如len()、split()、join()、strip()、upper()、lower()、find()、replace()等。"
    },
    {
      "id": "ACSII编码",
      "name": "ACSII编码",
      "category": 2,
      "symbolSize": 25,
      "desc": "American Standard Code for Information Interchange，美国标准信息交换编码"
    },
    {
      "id": "GBK编码",
      "name": "GBK编码",
      "category": 2,
      "symbolSize": 25,
      "desc": "汉字编码字符集，收集了21003个汉字，用2个字节表示一个汉字， GBK编码向下兼容GB3212编码"
    },
    {
      "id": "Unicode编码",
      "name": "Unicode编码",
      "category": 2,
      "symbolSize": 25,
      "desc": "收集了所有的字符，定义用4字节编码来表示一个符号。目前普遍采用的是UCS-2标准,即用两个字节来编码一个Unicode字符，简称unicode编码（ Windows NT从底层支持unicode 编码），最多能编码65536个字符。（英文字符也用两个字节。在存储时，会浪费空间。）简体和繁体总共有六七万个汉字，而UCS-2最多能表示65536个，才六万 多个，所以unicode编码只能排除一些几乎不用的汉字，好在常用的简体汉字 也不过七千多个，为了能表示所有汉字，Unicode也有UCS-4规范，就是用 4个字节来编码字符。"
    },
    {
      "id": "UTF-8编码",
      "name": "UTF-8编码",
      "category": 2,
      "symbolSize": 25,
      "desc": "unicode transformation format ,是为传送unicode字符而设计出来的一种编码，在网络使用较多，称为不定长unicode编码（英文字符1字节，拉丁符用2个字节，中文3字节，有些符号采用4字节编码）"
    },
    {
      "id": "unicode编码和UTF-8编码的转换规则",
      "name": "unicode编码和UTF-8编码的转换规则",
      "category": 2,
      "symbolSize": 25,
      "desc": "string.encode(“utf-8”), 把unicode字符串转换为utf-8编码格式; string.decode(“utf-8”),把utf-8编码的字符串转换为unicode编码格式"
    },
    {
      "id": "切片操作",
      "name": "切片操作",
      "category": 2,
      "symbolSize": 25,
      "desc": "切片操作通过[start:end:step]语法从序列中提取子序列，是Python处理序列数据的高效工具。"
    },
    {
      "id": "字符串拼接",
      "name": "字符串拼接",
      "category": 2,
      "symbolSize": 25,
      "desc": "'great'+'wall'"
    },
    {
      "id": "字符串复制",
      "name": "字符串复制",
      "category": 2,
      "symbolSize": 25,
      "desc": "'great'*3"
    },
    {
      "id": "字符串的格式化",
      "name": "字符串的格式化",
      "category": 2,
      "symbolSize": 25,
      "desc": "strig.format"
    },
    {
      "id": "join操作",
      "name": "join操作",
      "category": 2,
      "symbolSize": 25,
      "desc": "用分隔符将字符串数组中的元素，连接成一个新的字符串。字符串数组可以用字符串、元组、列表、集合、字典表示。语法格式：? 'sep'.join(seq)"
    },
    {
      "id": "比较运算符：>,<,!=,==",
      "name": "比较运算符：>,<,!=,==",
      "category": 2,
      "symbolSize": 25,
      "desc": "比较运算符可以用来对字符串进行比较。 按字典顺序比较"
    },
    {
      "id": "str.find(sub[, start[, end]])",
      "name": "str.find(sub[, start[, end]])",
      "category": 2,
      "symbolSize": 25,
      "desc": "字符串的查找函数"
    },
    {
      "id": "str.isdigit()",
      "name": "str.isdigit()",
      "category": 2,
      "symbolSize": 25,
      "desc": "是否全部是数字的判断函数"
    },
    {
      "id": "str.split([sep[, maxsplit]])",
      "name": "str.split([sep[, maxsplit]])",
      "category": 2,
      "symbolSize": 25,
      "desc": "字符串的分隔函数"
    },
    {
      "id": "str.replace(old, new[, count])",
      "name": "str.replace(old, new[, count])",
      "category": 2,
      "symbolSize": 25,
      "desc": "字符串的替换函数"
    },
    {
      "id": "函数的概念",
      "name": "函数的概念",
      "category": 1,
      "symbolSize": 50,
      "desc": "为实现一个功能操作而集合在一起的语句集。函数不仅可以实现代码的复用，还可以保证代码的一致性。"
    },
    {
      "id": "函数的定义",
      "name": "函数的定义",
      "category": 1,
      "symbolSize": 50,
      "desc": "函数的定义包括函数头和函数体两部分。函数头以def关键字开始，其后必须跟着函数名和形参列表，并以冒号结束。函数头中的参数被称为形式参数（简称形参）。函数可以有0到多个参数。即使函数中没有参数，也需要保留括号。"
    },
    {
      "id": "函数的分类",
      "name": "函数的分类",
      "category": 2,
      "symbolSize": 25,
      "desc": "函数可以根据功能划分为不同类型，如标准库函数、自定义函数、第三方库函数等。每类函数具有不同的功能和适用场景。"
    },
    {
      "id": "函数调用",
      "name": "函数调用",
      "category": 1,
      "symbolSize": 50,
      "desc": "函数调用时依次列出的参数称为实际参数(实参),可以是常量、变量或表达式"
    },
    {
      "id": "函数的嵌套调用",
      "name": "函数的嵌套调用",
      "category": 2,
      "symbolSize": 25,
      "desc": "函数的嵌套调用指一个函数内部调用另一个函数。嵌套调用使得程序结构更加模块化，避免重复代码。例如，函数A内部调用函数B，函数B再调用函数C。"
    },
    {
      "id": "函数的递归调用",
      "name": "函数的递归调用",
      "category": 1,
      "symbolSize": 50,
      "desc": "个函数直接或间接地调用自己叫递归调用，在python中，有两种递归调用：直接递归:即在函数A的定义中调用函数A。间接递归:即在函数A的定义中调用函数B，而在函数B的定义中又调用了函数A。"
    },
    {
      "id": "递归的应用",
      "name": "递归的应用",
      "category": 2,
      "symbolSize": 25,
      "desc": "递归广泛应用于解决一些具有递推关系的问题，如计算阶乘、斐波那契数列、树的遍历、图的深度优先搜索等。递归能简化问题的表达，便于代码实现。"
    },
    {
      "id": "异常的概念",
      "name": "异常的概念",
      "category": 1,
      "symbolSize": 50,
      "desc": "在程序运行时产生的例外、违例情况被称为异常。如果不能在异常发生时及时妥善地处理它们，程序将崩溃，无法继续运行下去。"
    },
    {
      "id": "异常的分类",
      "name": "异常的分类",
      "category": 1,
      "symbolSize": 50,
      "desc": "。 BaseException类是所有异常类的基类，而其子类Exception类则是除了SystemExit、GeneratorExit和KeybaordInterrupt三个系统级异常之外所有内置异常类和用户自定义异常类的基类。"
    },
    {
      "id": "异常的抛出",
      "name": "异常的抛出",
      "category": 1,
      "symbolSize": 50,
      "desc": "程序在运行过程中出现错误而无法正常运行时，系统会自动抛出异常。"
    },
    {
      "id": "异常的捕获",
      "name": "异常的捕获",
      "category": 1,
      "symbolSize": 50,
      "desc": "异常的捕获通过try-except语句处理程序运行时可能出现的错误，保证程序的健壮性和用户体验。"
    },
    {
      "id": "try...except …",
      "name": "try...except …",
      "category": 2,
      "symbolSize": 25,
      "desc": "try...except语句是捕获处理异常的常用语句之一"
    },
    {
      "id": "多个异常类型",
      "name": "多个异常类型",
      "category": 2,
      "symbolSize": 25,
      "desc": "try:    可能抛出异常的代码段  except [Exception1[, Exception2[,...ExceptionN]]]]:    若发生以上多个异常中的一个，则执行这块代码"
    },
    {
      "id": "异常处理的else和finally两个子句",
      "name": "异常处理的else和finally两个子句",
      "category": 2,
      "symbolSize": 25,
      "desc": "try:    可能抛出异常的代码段  except :   若发生以上多个异常中的一个，则执行这块代码  else:     若没有异常，则执行这块代码  finally:    无论异常是否发生均执行该块代码"
    },
    {
      "id": "异常的处理过程",
      "name": "异常的处理过程",
      "category": 2,
      "symbolSize": 25,
      "desc": "异常是一个完整的语句块，无论异常是否发生，其后续语句都会正常执行"
    },
    {
      "id": "自定义异常",
      "name": "自定义异常",
      "category": 1,
      "symbolSize": 50,
      "desc": "对于用户特定的业务需求异常，python使用raise语句在合理的场合手工触发异常。"
    },
    {
      "id": "数据文件的格式",
      "name": "数据文件的格式",
      "category": 1,
      "symbolSize": 50,
      "desc": "常用的数据存储方式有：文本格式、二进制文件、 CSV格式、Excel格式、JSon格式和数据库格式"
    },
    {
      "id": "文本文件的打开",
      "name": "文本文件的打开",
      "category": 1,
      "symbolSize": 50,
      "desc": "fp = open(name[, mode[, buffering]])，参数name是要打开或创建的文件路径；mode是可选参数，指明打开方式和文件类型的字符串；buffering也是可选参数，用来指明缓冲模式"
    },
    {
      "id": "文本文件的关闭",
      "name": "文本文件的关闭",
      "category": 1,
      "symbolSize": 50,
      "desc": "fp.close()"
    },
    {
      "id": "文本文件的read读取",
      "name": "文本文件的read读取",
      "category": 1,
      "symbolSize": 50,
      "desc": "Str=文件对象.read()，返回文件的内容字符串"
    },
    {
      "id": "文本文件的readline读取",
      "name": "文本文件的readline读取",
      "category": 1,
      "symbolSize": 50,
      "desc": "使用readline函数按行读取文件内容，通过循环处理每一行内容"
    },
    {
      "id": "文本文件的readlines读取",
      "name": "文本文件的readlines读取",
      "category": 1,
      "symbolSize": 50,
      "desc": "函数readlines以每次一行的方式读取全部文件内容，并返回由单行字符串组成的列表。"
    },
    {
      "id": "使用write()函数实现文本文件的写入",
      "name": "使用write()函数实现文本文件的写入",
      "category": 1,
      "symbolSize": 50,
      "desc": "文件对象.write(字符串),返回写入字符的个数"
    },
    {
      "id": "中文分词的概念",
      "name": "中文分词的概念",
      "category": 1,
      "symbolSize": 50,
      "desc": "从文本中，将词汇分割出来"
    },
    {
      "id": "Python 中文分词组件Jieba",
      "name": "Python 中文分词组件Jieba",
      "category": 1,
      "symbolSize": 50,
      "desc": "Jieba支持三种分词模式：精确模式，试图将句子最精确地切开，适合文本分析；全模式，把句子中,所有的可以成词的词语都扫描出来（生成的词汇列表会有包含现象），速度非常快，但是不能解决歧义；搜索引擎模式，在精确模式的基础上，对长词再次切分，提高召回率，适合用于搜索引擎分词。"
    },
    {
      "id": "自定义分词",
      "name": "自定义分词",
      "category": 1,
      "symbolSize": 50,
      "desc": "Jieba支持自定义词典（结合自己的文本特点来分词，在文本中提供特定分词，以和jiaba词库一起，实现更加精准的分词）"
    },
    {
      "id": "数据可视化概念",
      "name": "数据可视化概念",
      "category": 1,
      "symbolSize": 50,
      "desc": "数据处理的结果，进行图形显示。称为数据的可视化。Python提供Echarts和Matplotlib模块实现数据的可视化"
    },
    {
      "id": "折线图函数plot",
      "name": "折线图函数plot",
      "category": 1,
      "symbolSize": 50,
      "desc": "plot([x], y, [fmt], data=None, **kwargs)   函数用于绘制一条折线图，x若省略，则plot函数自动创建从0开始的 x坐标；fmt是字符串类型，用于描述颜色标志线型属性的值，格式为：'[color][marker][line]'；kwargs用于设定线型、线宽、坐标点的标志等等图形的其他属性。"
    },
    {
      "id": "条形图函数bar",
      "name": "条形图函数bar",
      "category": 1,
      "symbolSize": 50,
      "desc": "例如：plt.bar([1,3,5,7,9],[5,2,7,8,2], label=\"Example one\")"
    },
    {
      "id": "饼图函数pie",
      "name": "饼图函数pie",
      "category": 1,
      "symbolSize": 50,
      "desc": "绘制饼图函数"
    },
    {
      "id": "文件",
      "name": "文件",
      "category": 0,
      "symbolSize": 80,
      "desc": "文件操作包括使用open()函数打开文件、read()读取内容、write()写入内容、close()关闭文件等基本功能。"
    },
    {
      "id": "文件引入",
      "name": "文件引入",
      "category": 2,
      "symbolSize": 25,
      "desc": "文件引入介绍了Python中文件操作的基本概念，包括文件路径、打开模式(r/w/a)和open()函数的基本用法。"
    },
    {
      "id": "选择（分支）结构程序设计",
      "name": "选择（分支）结构程序设计",
      "category": 1,
      "symbolSize": 50,
      "desc": "选择结构是程序根据条件判断执行不同代码分支的基本控制结构，包括if、if-else、if-elif-else、嵌套选择等形式。"
    }
  ],
  "links": [
    {
      "source": "文件",
      "target": "文件引入",
      "name": "contain"
    },
    {
      "source": "python语言概述",
      "target": "程序设计语言",
      "name": "contain"
    },
    {
      "source": "python语言概述",
      "target": "算法基础",
      "name": "contain"
    },
    {
      "source": "python语言概述",
      "target": "python语言的发展历史及特点",
      "name": "contain"
    },
    {
      "source": "程序设计语言",
      "target": "程序设计语言发展",
      "name": "contain"
    },
    {
      "source": "程序设计语言",
      "target": "程序设计语言概述",
      "name": "contain"
    },
    {
      "source": "程序设计语言",
      "target": "计算机语言",
      "name": "contain"
    },
    {
      "source": "程序设计语言",
      "target": "二进制数字的基本知识――计算机系统",
      "name": "contain"
    },
    {
      "source": "算法基础",
      "target": "编程风格",
      "name": "contain"
    },
    {
      "source": "算法基础",
      "target": "算法概念",
      "name": "contain"
    },
    {
      "source": "算法基础",
      "target": "算法描述",
      "name": "contain"
    },
    {
      "source": "算法基础",
      "target": "算法控制结构",
      "name": "contain"
    },
    {
      "source": "python语言的发展历史及特点",
      "target": "python程序",
      "name": "contain"
    },
    {
      "source": "python语言的发展历史及特点",
      "target": "python语言的诞生",
      "name": "contain"
    },
    {
      "source": "python语言的发展历史及特点",
      "target": "python语言的发展历史及特点",
      "name": "contain"
    },
    {
      "source": "python语言的发展历史及特点",
      "target": "python语言的流行性",
      "name": "contain"
    },
    {
      "source": "python语言的发展历史及特点",
      "target": "python语言的用途",
      "name": "contain"
    },
    {
      "source": "python语言的发展历史及特点",
      "target": "python语言的特点",
      "name": "contain"
    },
    {
      "source": "python基本语法",
      "target": "不同数据类型详解",
      "name": "contain"
    },
    {
      "source": "python基本语法",
      "target": "常量",
      "name": "contain"
    },
    {
      "source": "python基本语法",
      "target": "变量",
      "name": "contain"
    },
    {
      "source": "python基本语法",
      "target": "运算符和表达式",
      "name": "contain"
    },
    {
      "source": "python基本语法",
      "target": "类型转换",
      "name": "contain"
    },
    {
      "source": "python基本语法",
      "target": "数据的输入与输出",
      "name": "contain"
    },
    {
      "source": "不同数据类型详解",
      "target": "数据类型导入",
      "name": "contain"
    },
    {
      "source": "常量",
      "target": "实型常量表示方法",
      "name": "contain"
    },
    {
      "source": "常量",
      "target": "整型常量表示方法",
      "name": "contain"
    },
    {
      "source": "变量",
      "target": "变量的含义与意义",
      "name": "contain"
    },
    {
      "source": "变量",
      "target": "变量名的命名规则",
      "name": "contain"
    },
    {
      "source": "变量",
      "target": "\"None\"",
      "name": "contain"
    },
    {
      "source": "变量",
      "target": "变量的操作",
      "name": "contain"
    },
    {
      "source": "类型转换",
      "target": "强制类型转换",
      "name": "contain"
    },
    {
      "source": "类型转换",
      "target": "eval类型转换函数",
      "name": "contain"
    },
    {
      "source": "类型转换",
      "target": "str类型转换函数",
      "name": "contain"
    },
    {
      "source": "类型转换",
      "target": "repr类型转换函数",
      "name": "contain"
    },
    {
      "source": "运算符和表达式",
      "target": "算术运算符",
      "name": "contain"
    },
    {
      "source": "运算符和表达式",
      "target": "算数运算符的优先级",
      "name": "contain"
    },
    {
      "source": "运算符和表达式",
      "target": "算术表达式",
      "name": "contain"
    },
    {
      "source": "运算符和表达式",
      "target": "赋值运算符",
      "name": "contain"
    },
    {
      "source": "运算符和表达式",
      "target": "运算符的概念",
      "name": "contain"
    },
    {
      "source": "运算符和表达式",
      "target": "运算符的分类",
      "name": "contain"
    },
    {
      "source": "运算符和表达式",
      "target": "表达式的组成",
      "name": "contain"
    },
    {
      "source": "运算符和表达式",
      "target": "逻辑运算符",
      "name": "contain"
    },
    {
      "source": "运算符和表达式",
      "target": "关系运算符与关系表达式",
      "name": "contain"
    },
    {
      "source": "运算符和表达式",
      "target": "与逻辑表达式",
      "name": "contain"
    },
    {
      "source": "运算符和表达式",
      "target": "或逻辑表达式",
      "name": "contain"
    },
    {
      "source": "运算符和表达式",
      "target": "取反逻辑表达式",
      "name": "contain"
    },
    {
      "source": "运算符和表达式",
      "target": "成员运算符in、not in",
      "name": "contain"
    },
    {
      "source": "数据的输入与输出",
      "target": "数据的输入",
      "name": "contain"
    },
    {
      "source": "数据的输入与输出",
      "target": "数据的输出",
      "name": "contain"
    },
    {
      "source": "数据的输入与输出",
      "target": "无格式输出",
      "name": "contain"
    },
    {
      "source": "数据的输入与输出",
      "target": "有格式输出",
      "name": "contain"
    },
    {
      "source": "数据的输入与输出",
      "target": "利用format有格式输出",
      "name": "contain"
    },
    {
      "source": "数据的输入与输出",
      "target": "input输入",
      "name": "contain"
    },
    {
      "source": "选择（分支）结构程序设计",
      "target": "结构化程序设计思想",
      "name": "contain"
    },
    {
      "source": "选择（分支）结构程序设计",
      "target": "顺序结构引入",
      "name": "contain"
    },
    {
      "source": "选择（分支）结构程序设计",
      "target": "选择结构的引入",
      "name": "contain"
    },
    {
      "source": "选择（分支）结构程序设计",
      "target": "二分支选择结构",
      "name": "contain"
    },
    {
      "source": "选择（分支）结构程序设计",
      "target": "多分支选择结构",
      "name": "contain"
    },
    {
      "source": "选择（分支）结构程序设计",
      "target": "条件表达式",
      "name": "contain"
    },
    {
      "source": "选择（分支）结构程序设计",
      "target": "选择结构的嵌套",
      "name": "contain"
    },
    {
      "source": "顺序结构引入",
      "target": "顺序结构与语句",
      "name": "contain"
    },
    {
      "source": "二分支选择结构",
      "target": "二分支选择结构形式",
      "name": "contain"
    },
    {
      "source": "多分支选择结构",
      "target": "多分支选择结构形式",
      "name": "contain"
    },
    {
      "source": "选择结构的嵌套",
      "target": "嵌套选择结构与级联选择结构的区别",
      "name": "contain"
    },
    {
      "source": "选择结构的嵌套",
      "target": "选择结构综合型实验",
      "name": "contain"
    },
    {
      "source": "选择结构的嵌套",
      "target": "嵌套选择结构形式",
      "name": "contain"
    },
    {
      "source": "循环结构",
      "target": "循环的概念",
      "name": "contain"
    },
    {
      "source": "循环结构",
      "target": "循环语句的选择",
      "name": "contain"
    },
    {
      "source": "循环结构",
      "target": "while循环",
      "name": "contain"
    },
    {
      "source": "循环结构",
      "target": "for循环",
      "name": "contain"
    },
    {
      "source": "循环结构",
      "target": "多重循环",
      "name": "contain"
    },
    {
      "source": "循环结构",
      "target": "break和continue语句",
      "name": "contain"
    },
    {
      "source": "循环结构",
      "target": "range函数",
      "name": "contain"
    },
    {
      "source": "break和continue语句",
      "target": "循环语句应用",
      "name": "contain"
    },
    {
      "source": "break和continue语句",
      "target": "循环结构综合型实验",
      "name": "contain"
    },
    {
      "source": "break和continue语句",
      "target": "常见错误分析",
      "name": "contain"
    },
    {
      "source": "range函数",
      "target": "字符串序列",
      "name": "contain"
    },
    {
      "source": "range函数",
      "target": "整数列表序列",
      "name": "contain"
    },
    {
      "source": "range函数",
      "target": "整数集合序列",
      "name": "contain"
    },
    {
      "source": "range函数",
      "target": "range(1,13,3)",
      "name": "contain"
    },
    {
      "source": "列表",
      "target": "列表的引入",
      "name": "contain"
    },
    {
      "source": "列表",
      "target": "列表的定义",
      "name": "contain"
    },
    {
      "source": "列表",
      "target": "列表的运算符",
      "name": "contain"
    },
    {
      "source": "列表",
      "target": "python提供的内置函数用于操作列表",
      "name": "contain"
    },
    {
      "source": "列表",
      "target": "列表内置的操作函数",
      "name": "contain"
    },
    {
      "source": "列表",
      "target": "多维列表的引入",
      "name": "contain"
    },
    {
      "source": "列表",
      "target": "二维列表",
      "name": "contain"
    },
    {
      "source": "列表",
      "target": "二维列表查找",
      "name": "contain"
    },
    {
      "source": "列表",
      "target": "二维列表排序",
      "name": "contain"
    },
    {
      "source": "列表的定义",
      "target": "定义空列表",
      "name": "contain"
    },
    {
      "source": "列表的定义",
      "target": "利用构造函数定义列表",
      "name": "contain"
    },
    {
      "source": "列表的定义",
      "target": "利用列表推导式建立一维列表",
      "name": "contain"
    },
    {
      "source": "列表的定义",
      "target": "利用已经有的字符序列、元组转换为列表",
      "name": "contain"
    },
    {
      "source": "列表的定义",
      "target": "列表的类型",
      "name": "contain"
    },
    {
      "source": "列表的运算符",
      "target": "取片段",
      "name": "contain"
    },
    {
      "source": "列表的运算符",
      "target": "Index",
      "name": "contain"
    },
    {
      "source": "列表的运算符",
      "target": "+",
      "name": "contain"
    },
    {
      "source": "列表的运算符",
      "target": "*",
      "name": "contain"
    },
    {
      "source": "列表的运算符",
      "target": "in/not in",
      "name": "contain"
    },
    {
      "source": "列表的运算符",
      "target": "=",
      "name": "contain"
    },
    {
      "source": "列表的运算符",
      "target": "列表更新",
      "name": "contain"
    },
    {
      "source": "python提供的内置函数用于操作列表",
      "target": "all(iterable)",
      "name": "contain"
    },
    {
      "source": "python提供的内置函数用于操作列表",
      "target": "any(iterable)",
      "name": "contain"
    },
    {
      "source": "python提供的内置函数用于操作列表",
      "target": "len(s)",
      "name": "contain"
    },
    {
      "source": "python提供的内置函数用于操作列表",
      "target": "max(iterable）",
      "name": "contain"
    },
    {
      "source": "python提供的内置函数用于操作列表",
      "target": "sorted(iterable, cmp=None, key, reverse=False)",
      "name": "contain"
    },
    {
      "source": "python提供的内置函数用于操作列表",
      "target": "reversed(iterable)",
      "name": "contain"
    },
    {
      "source": "列表内置的操作函数",
      "target": "list.append(x)",
      "name": "contain"
    },
    {
      "source": "列表内置的操作函数",
      "target": "list.extend(L)",
      "name": "contain"
    },
    {
      "source": "列表内置的操作函数",
      "target": "list.insert(index, x)",
      "name": "contain"
    },
    {
      "source": "列表内置的操作函数",
      "target": "list.remove(x)",
      "name": "contain"
    },
    {
      "source": "列表内置的操作函数",
      "target": "list.pop([i])",
      "name": "contain"
    },
    {
      "source": "列表内置的操作函数",
      "target": "list.index(x)",
      "name": "contain"
    },
    {
      "source": "列表内置的操作函数",
      "target": "list.count(x)",
      "name": "contain"
    },
    {
      "source": "列表内置的操作函数",
      "target": "list.sort(cmp=None, key=None, reverse=False)",
      "name": "contain"
    },
    {
      "source": "列表内置的操作函数",
      "target": "list.reverse()",
      "name": "contain"
    },
    {
      "source": "二维列表",
      "target": "行下标、列下标",
      "name": "contain"
    },
    {
      "source": "二维列表",
      "target": "二维列表的直接定义",
      "name": "contain"
    },
    {
      "source": "二维列表",
      "target": "利用列表推导式建立二维列表",
      "name": "contain"
    },
    {
      "source": "二维列表",
      "target": "二维列表取值",
      "name": "contain"
    },
    {
      "source": "元组",
      "target": "元组的引入",
      "name": "contain"
    },
    {
      "source": "元组",
      "target": "元组的定义",
      "name": "contain"
    },
    {
      "source": "元组",
      "target": "元组的类型",
      "name": "contain"
    },
    {
      "source": "元组",
      "target": "元组的创建",
      "name": "contain"
    },
    {
      "source": "元组",
      "target": "元组与列表的比较",
      "name": "contain"
    },
    {
      "source": "元组",
      "target": "元组的操作",
      "name": "contain"
    },
    {
      "source": "元组的创建",
      "target": "定义空元组",
      "name": "contain"
    },
    {
      "source": "元组的创建",
      "target": "利用构造函数定义元组",
      "name": "contain"
    },
    {
      "source": "元组的创建",
      "target": "利用列表推导式建立一维元组",
      "name": "contain"
    },
    {
      "source": "元组的创建",
      "target": "利用已经有的字符序列、列表转换为元组",
      "name": "contain"
    },
    {
      "source": "集合",
      "target": "集合的定义",
      "name": "contain"
    },
    {
      "source": "集合",
      "target": "集合的类型",
      "name": "contain"
    },
    {
      "source": "集合",
      "target": "集合专用运算符",
      "name": "contain"
    },
    {
      "source": "集合",
      "target": "集合的比较运算符",
      "name": "contain"
    },
    {
      "source": "集合",
      "target": "集合的操作",
      "name": "contain"
    },
    {
      "source": "集合的定义",
      "target": "直接定义",
      "name": "contain"
    },
    {
      "source": "集合的定义",
      "target": "利用构造函数定义集合",
      "name": "contain"
    },
    {
      "source": "集合的定义",
      "target": "利用列表推导式建立一维列表",
      "name": "contain"
    },
    {
      "source": "集合的定义",
      "target": "利用已经有的字符序列、列表、元组转换为集合",
      "name": "contain"
    },
    {
      "source": "集合专用运算符",
      "target": "& 或 intersection",
      "name": "contain"
    },
    {
      "source": "集合专用运算符",
      "target": "| 或 union",
      "name": "contain"
    },
    {
      "source": "集合专用运算符",
      "target": "#NAME?",
      "name": "contain"
    },
    {
      "source": "集合专用运算符",
      "target": "^ 或 symmetric_difference",
      "name": "contain"
    },
    {
      "source": "集合的比较运算符",
      "target": "==",
      "name": "contain"
    },
    {
      "source": "集合的比较运算符",
      "target": "!=",
      "name": "contain"
    },
    {
      "source": "集合的比较运算符",
      "target": "<",
      "name": "contain"
    },
    {
      "source": "集合的比较运算符",
      "target": "<=",
      "name": "contain"
    },
    {
      "source": "集合的比较运算符",
      "target": ">",
      "name": "contain"
    },
    {
      "source": "集合的比较运算符",
      "target": ">=",
      "name": "contain"
    },
    {
      "source": "集合的操作",
      "target": "len(set)",
      "name": "contain"
    },
    {
      "source": "集合的操作",
      "target": "max(set)",
      "name": "contain"
    },
    {
      "source": "集合的操作",
      "target": "sum(set)",
      "name": "contain"
    },
    {
      "source": "集合的操作",
      "target": "in  或  not in",
      "name": "contain"
    },
    {
      "source": "集合的操作",
      "target": "add(elem)",
      "name": "contain"
    },
    {
      "source": "集合的操作",
      "target": "remove(elem)",
      "name": "contain"
    },
    {
      "source": "集合的操作",
      "target": "discard(elem）",
      "name": "contain"
    },
    {
      "source": "集合的操作",
      "target": "pop()",
      "name": "contain"
    },
    {
      "source": "集合的操作",
      "target": "clear()",
      "name": "contain"
    },
    {
      "source": "字典",
      "target": "字典的概念",
      "name": "contain"
    },
    {
      "source": "字典",
      "target": "字典的类型",
      "name": "contain"
    },
    {
      "source": "字典",
      "target": "字典的定义",
      "name": "contain"
    },
    {
      "source": "字典",
      "target": "字典的使用",
      "name": "contain"
    },
    {
      "source": "字典",
      "target": "字典的遍历",
      "name": "contain"
    },
    {
      "source": "字典",
      "target": "字典类的的基本操作",
      "name": "contain"
    },
    {
      "source": "字典的定义",
      "target": "直接定义",
      "name": "contain"
    },
    {
      "source": "字典的定义",
      "target": "利用构造函数定义集合",
      "name": "contain"
    },
    {
      "source": "字典的定义",
      "target": "利用列表推导式建立一维列表",
      "name": "contain"
    },
    {
      "source": "字典的定义",
      "target": "定义字典列表",
      "name": "contain"
    },
    {
      "source": "字典的使用",
      "target": "字典的读",
      "name": "contain"
    },
    {
      "source": "字典的遍历",
      "target": "按照字典的关键字进行遍历",
      "name": "contain"
    },
    {
      "source": "字典的遍历",
      "target": "按照字典的值进行遍历",
      "name": "contain"
    },
    {
      "source": "字典的遍历",
      "target": "按元素进行遍历",
      "name": "contain"
    },
    {
      "source": "字典类的的基本操作",
      "target": "in/not in运算符",
      "name": "contain"
    },
    {
      "source": "字典类的的基本操作",
      "target": "比较运算符",
      "name": "contain"
    },
    {
      "source": "字典类的的基本操作",
      "target": "del",
      "name": "contain"
    },
    {
      "source": "字典类的的基本操作",
      "target": "clear()",
      "name": "contain"
    },
    {
      "source": "字典类的的基本操作",
      "target": "copy()",
      "name": "contain"
    },
    {
      "source": "字符串",
      "target": "字符串的概念",
      "name": "contain"
    },
    {
      "source": "字符串",
      "target": "字符编码",
      "name": "contain"
    },
    {
      "source": "字符串",
      "target": "字符串的操作",
      "name": "contain"
    },
    {
      "source": "字符串",
      "target": "字符串相关函数",
      "name": "contain"
    },
    {
      "source": "字符编码",
      "target": "ACSII编码",
      "name": "contain"
    },
    {
      "source": "字符编码",
      "target": "GBK编码",
      "name": "contain"
    },
    {
      "source": "字符编码",
      "target": "Unicode编码",
      "name": "contain"
    },
    {
      "source": "字符编码",
      "target": "UTF-8编码",
      "name": "contain"
    },
    {
      "source": "字符编码",
      "target": "unicode编码和UTF-8编码的转换规则",
      "name": "contain"
    },
    {
      "source": "字符串的操作",
      "target": "切片操作",
      "name": "contain"
    },
    {
      "source": "字符串的操作",
      "target": "字符串拼接",
      "name": "contain"
    },
    {
      "source": "字符串的操作",
      "target": "字符串复制",
      "name": "contain"
    },
    {
      "source": "字符串的操作",
      "target": "字符串的格式化",
      "name": "contain"
    },
    {
      "source": "字符串的操作",
      "target": "join操作",
      "name": "contain"
    },
    {
      "source": "字符串的操作",
      "target": "in/not in运算符",
      "name": "contain"
    },
    {
      "source": "字符串的操作",
      "target": "比较运算符：>,<,!=,==",
      "name": "contain"
    },
    {
      "source": "字符串相关函数",
      "target": "str.find(sub[, start[, end]])",
      "name": "contain"
    },
    {
      "source": "字符串相关函数",
      "target": "str.isdigit()",
      "name": "contain"
    },
    {
      "source": "字符串相关函数",
      "target": "str.split([sep[, maxsplit]])",
      "name": "contain"
    },
    {
      "source": "字符串相关函数",
      "target": "str.replace(old, new[, count])",
      "name": "contain"
    },
    {
      "source": "函数",
      "target": "函数的概念",
      "name": "contain"
    },
    {
      "source": "函数",
      "target": "函数的定义",
      "name": "contain"
    },
    {
      "source": "函数的定义",
      "target": "函数的分类",
      "name": "contain"
    },
    {
      "source": "函数",
      "target": "函数调用",
      "name": "contain"
    },
    {
      "source": "函数调用",
      "target": "函数的嵌套调用",
      "name": "contain"
    },
    {
      "source": "函数",
      "target": "函数的递归调用",
      "name": "contain"
    },
    {
      "source": "函数的递归调用",
      "target": "递归的应用",
      "name": "contain"
    },
    {
      "source": "异常处理",
      "target": "异常的概念",
      "name": "contain"
    },
    {
      "source": "异常处理",
      "target": "异常的分类",
      "name": "contain"
    },
    {
      "source": "异常处理",
      "target": "异常的抛出",
      "name": "contain"
    },
    {
      "source": "异常处理",
      "target": "异常的捕获",
      "name": "contain"
    },
    {
      "source": "异常的捕获",
      "target": "try...except …",
      "name": "contain"
    },
    {
      "source": "异常的捕获",
      "target": "多个异常类型",
      "name": "contain"
    },
    {
      "source": "异常的捕获",
      "target": "异常处理的else和finally两个子句",
      "name": "contain"
    },
    {
      "source": "异常的捕获",
      "target": "异常的处理过程",
      "name": "contain"
    },
    {
      "source": "异常处理",
      "target": "自定义异常",
      "name": "contain"
    },
    {
      "source": "文件处理",
      "target": "数据文件的格式",
      "name": "contain"
    },
    {
      "source": "文件处理",
      "target": "文本文件的打开",
      "name": "contain"
    },
    {
      "source": "文件处理",
      "target": "文本文件的关闭",
      "name": "contain"
    },
    {
      "source": "文件处理",
      "target": "文本文件的read读取",
      "name": "contain"
    },
    {
      "source": "文件处理",
      "target": "文本文件的readline读取",
      "name": "contain"
    },
    {
      "source": "文件处理",
      "target": "文本文件的readlines读取",
      "name": "contain"
    },
    {
      "source": "文件处理",
      "target": "使用write()函数实现文本文件的写入",
      "name": "contain"
    },
    {
      "source": "jieba和图形绘制",
      "target": "中文分词的概念",
      "name": "contain"
    },
    {
      "source": "jieba和图形绘制",
      "target": "Python 中文分词组件Jieba",
      "name": "contain"
    },
    {
      "source": "jieba和图形绘制",
      "target": "自定义分词",
      "name": "contain"
    },
    {
      "source": "jieba和图形绘制",
      "target": "数据可视化概念",
      "name": "contain"
    },
    {
      "source": "jieba和图形绘制",
      "target": "折线图函数plot",
      "name": "contain"
    },
    {
      "source": "jieba和图形绘制",
      "target": "条形图函数bar",
      "name": "contain"
    },
    {
      "source": "jieba和图形绘制",
      "target": "饼图函数pie",
      "name": "contain"
    },
    {
      "source": "python语言概述",
      "target": "python基本语法",
      "name": "follow_up"
    },
    {
      "source": "顺序结构与语句",
      "target": "选择（分支）结构",
      "name": "follow_up"
    },
    {
      "source": "选择（分支）结构",
      "target": "循环结构",
      "name": "follow_up"
    },
    {
      "source": "循环结构",
      "target": "列表",
      "name": "follow_up"
    },
    {
      "source": "循环结构",
      "target": "元组",
      "name": "follow_up"
    },
    {
      "source": "循环结构",
      "target": "集合",
      "name": "follow_up"
    },
    {
      "source": "循环结构",
      "target": "字典",
      "name": "follow_up"
    },
    {
      "source": "循环结构",
      "target": "字符串",
      "name": "follow_up"
    },
    {
      "source": "循环结构",
      "target": "函数",
      "name": "follow_up"
    },
    {
      "source": "循环结构",
      "target": "文件处理",
      "name": "follow_up"
    },
    {
      "source": "函数",
      "target": "jieba和图形绘制",
      "name": "follow_up"
    },
    {
      "source": "算术运算符",
      "target": "关系运算符与关系表达式",
      "name": "follow_up"
    },
    {
      "source": "关系运算符与关系表达式",
      "target": "逻辑运算符",
      "name": "follow_up"
    },
    {
      "source": "二分支选择结构",
      "target": "条件表达式",
      "name": "follow_up"
    },
    {
      "source": "二分支选择结构",
      "target": "多分支选择结构",
      "name": "follow_up"
    },
    {
      "source": "多分支选择结构",
      "target": "选择结构的嵌套",
      "name": "follow_up"
    },
    {
      "source": "for循环",
      "target": "break和continue语句",
      "name": "follow_up"
    },
    {
      "source": "for循环",
      "target": "range函数",
      "name": "follow_up"
    },
    {
      "source": "列表的定义",
      "target": "二维列表",
      "name": "follow_up"
    },
    {
      "source": "列表的定义",
      "target": "列表的运算符",
      "name": "follow_up"
    },
    {
      "source": "列表的定义",
      "target": "python提供的内置函数用于操作列表",
      "name": "follow_up"
    },
    {
      "source": "列表的定义",
      "target": "列表内置的操作函数",
      "name": "follow_up"
    },
    {
      "source": "列表",
      "target": "元组",
      "name": "follow_up"
    },
    {
      "source": "集合的定义",
      "target": "集合专用运算符",
      "name": "follow_up"
    },
    {
      "source": "集合的定义",
      "target": "集合的比较运算符",
      "name": "follow_up"
    },
    {
      "source": "集合的定义",
      "target": "集合的操作",
      "name": "follow_up"
    },
    {
      "source": "字典的定义",
      "target": "字典的使用",
      "name": "follow_up"
    },
    {
      "source": "字典的定义",
      "target": "字典的遍历",
      "name": "follow_up"
    },
    {
      "source": "字典的定义",
      "target": "字典类的的基本操作",
      "name": "follow_up"
    },
    {
      "source": "字符串的概念",
      "target": "字符编码",
      "name": "follow_up"
    },
    {
      "source": "字符串的概念",
      "target": "字符串的操作",
      "name": "follow_up"
    },
    {
      "source": "字符串的概念",
      "target": "字符串相关函数",
      "name": "follow_up"
    },
    {
      "source": "函数的定义",
      "target": "函数调用",
      "name": "follow_up"
    },
    {
      "source": "函数调用",
      "target": "函数的嵌套调用",
      "name": "follow_up"
    },
    {
      "source": "函数的嵌套调用",
      "target": "函数的递归调用",
      "name": "follow_up"
    },
    {
      "source": "函数的递归调用",
      "target": "递归的应用",
      "name": "follow_up"
    },
    {
      "source": "异常的概念",
      "target": "异常的分类",
      "name": "follow_up"
    },
    {
      "source": "异常的概念",
      "target": "异常的抛出",
      "name": "follow_up"
    },
    {
      "source": "异常的概念",
      "target": "异常的捕获",
      "name": "follow_up"
    },
    {
      "source": "异常的捕获",
      "target": "try...except …",
      "name": "follow_up"
    },
    {
      "source": "异常的捕获",
      "target": "多个异常类型",
      "name": "follow_up"
    },
    {
      "source": "异常的捕获",
      "target": "异常处理的else和finally两个子句",
      "name": "follow_up"
    },
    {
      "source": "异常的捕获",
      "target": "异常的处理过程",
      "name": "follow_up"
    },
    {
      "source": "异常的抛出",
      "target": "自定义异常",
      "name": "follow_up"
    },
    {
      "source": "try...except …",
      "target": "自定义异常",
      "name": "follow_up"
    },
    {
      "source": "文本文件的打开",
      "target": "文本文件的关闭",
      "name": "follow_up"
    },
    {
      "source": "文本文件的打开",
      "target": "文本文件的read读取",
      "name": "follow_up"
    },
    {
      "source": "文本文件的打开",
      "target": "文本文件的readlines读取",
      "name": "follow_up"
    },
    {
      "source": "文本文件的打开",
      "target": "使用write()函数实现文本文件的写入",
      "name": "follow_up"
    },
    {
      "source": "列表",
      "target": "jieba和图形绘制",
      "name": "follow_up"
    },
    {
      "source": "中文分词的概念",
      "target": "Python 中文分词组件Jieba",
      "name": "follow_up"
    },
    {
      "source": "中文分词的概念",
      "target": "自定义分词",
      "name": "follow_up"
    },
    {
      "source": "数据可视化概念",
      "target": "折线图函数plot",
      "name": "follow_up"
    },
    {
      "source": "数据可视化概念",
      "target": "条形图函数bar",
      "name": "follow_up"
    },
    {
      "source": "数据可视化概念",
      "target": "饼图函数pie",
      "name": "follow_up"
    }
  ]
};
