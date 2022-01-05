---
title: Vue
date: 2021-10-21 10:48:19
permalink: /pages/a3d7d0/
categories:
  - notes
  - Vue
tags:
  - Vue2
---
# --



# Vue 概述

## 1 Vue是什么

### 1.1 定义

- Vue 是一套用于构建用户界面的渐进式框架
- 使用Vue框架，可以完全在浏览器端渲染页面，服务端只提供数据
- 使用Vue框架可以非常方便的构建 单页面应用 (SPA)

### 1.2 关于作者

- 国人 尤雨溪
- 百科介绍： [https://baike.baidu.com/item/%E5%B0%A4%E9%9B%A8%E6%BA%AA/2281470?fr=aladdin](https://baike.baidu.com/item/尤雨溪/2281470?fr=aladdin)
- 微博： https://weibo.com/arttechdesign?is_hot=1#1528176039582

### 1.3 相关网站

- 官方网站： https://cn.vuejs.org/
- GitHub： https://github.com/vuejs/vue

## 2 前端框架

### 2.1 三足鼎立

- React
- Angular
- Vue

### 2.2 Angular、Vue、React的区别

#### Vue与React

- React与Vue 都采用虚拟DOM
- 核心功能都在核心库中，其他类似路由这样的功能则由其他库进行处理
- React的生态系统更庞大，由ReactNative来进行混合App开发; Vue更轻量
- React由独特的JSX语法; Vue是基于传统的Web计数进行扩展(HTML、CSS、JavaScript)，更容易学习

#### Vue与Angular

- Angular1和Angular2以后的版本 是完全不同的两个框架； 一般Angular1被称作Angular.js, Angular之后的版本被称作 Angular
- Vue与Angular的语法非常相似
- Vue没有像Angular一样深入开发，只保证了基本功能。 Angular过于笨重
- Vue的运行速度比Angular快得多
- Angular的脏检查机制带来诸多性能问题

### 2.3 Vue的优点

- 不存在依赖
- 轻便（25k min）
- 适用范围广(大中小型项目、PC、移动端、混合开发)
- 本土框架,社区非常活跃
- 语法简单、学习成本低
- 双向数据绑定（所见即所得）

### 2.4 使用框架开展一个项目的时候，需要考虑哪些方面？

1.性能

如果一个网站在性能方面存在问题，它将会损失超过一半以上的用户。

对于框架性能，你可以在网上查询到各类测试，你可以了解框架的代码结构、逻辑处理，判断是否能够满足你对性能的需求。

2.扩展性

对于一个需要长期维护的项目而言，经常会有各种各样的功能添加进来，这时扩展性就显得尤为重要，如果你在前期选择了一款满足前期的框架，但后期你需要使用某个插件来完成某个功能，或者基于什么完成一个功能，这时候你发现网上并没有检索到相关内容，内心是否充满了心塞。

3.维护性

一个项目的生命周期不是三天两天，而前端的发展则是爆炸式的。在你选择框架的时候是否考虑过官方在后续的一段时间是否会一直对框架进行更新维护？如果不确定，是否已经有了官方放弃维护后的解决方案？

4.兼容性

这里的兼容性指的不是浏览器兼容，而是框架与其他框架及工具的兼容，使用这个框架对于你的开发环境是否有影响，对于你的开发 IDE 是否有影响。

Vue.js 适用具有以下性质的项目：

- 对浏览器兼容要求不高，不需要兼容至IE6-8；
- SPA开发；
- 对性能较高要求;
- 组件化。

总的来说，如果你是一个 MVVM 框架新手，那么 Vue.js 就是你最好的进阶工具，如果你是一个已经掌握了其他 MVVM 框架的老手，那你会发现 Vue.js 更加简单轻便。

## 3 多页面应用和单页面应用

### 3.1 多页面应用（MultiPage Application，MPA）

多页面跳转刷新所有资源，每个公共资源(js、css等)需选择性重新加载，常用于 app 或 客户端等

![img](data:image/jpeg;base64,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)

### 3.2 单页面应用（SinglePage Web Application，SPA）

只有一张Web页面的应用，是一种从Web服务器加载的富客户端，单页面跳转仅刷新局部资源 ，公共资源(js、css等)仅需加载一次，常用于PC端官网、购物等网站

![img](data:image/jpeg;base64,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)

### 3.3 两者对比

|                   | 单页面应用                                                   | 多页面应用                                   |
| ----------------- | ------------------------------------------------------------ | -------------------------------------------- |
| 组成              | 一个外壳页面和多个页面片段组成                               | 多个完整页面构成                             |
| 资源公用(css,js)  | 共用，只需在外壳部分加载                                     | 不共用，每个页面都需要加载                   |
| 刷新方式          | 页面局部刷新或更改                                           | 整页刷新                                     |
| url 模式          | a.com/#/pagetwo a.com/#/pagetwo                              | a.com/pageone.html a.com/pagetwo.html        |
| 用户体验          | 页面片段间的切换快，用户体验良好                             | 页面切换加载缓慢，流畅度不够，用户体验比较差 |
| 转场动画          | 容易实现                                                     | 无法实现                                     |
| 数据传递          | 容易                                                         | 依赖 url传参、或者cookie 、localStorage等    |
| 搜索引擎优化(SEO) | 需要单独方案、实现较为困难、适用于追求高度支持搜索引擎的应用 | 实现方法简易                                 |
| 试用范围          | 高要求的体验度、追求界面流畅的应用                           | 适用于追求高度支持搜索引擎的应用             |
| 开发成本          | 较高，常需借助专业的框架                                     | 较低 ，但页面重复代码多                      |
| 维护成本          | 相对容易                                                     | 相对复杂                                     |

# Vue核心

本章节主要介绍Vue的核心语法，包括以下几个部分

- [Vue入门](http://learn.fuming.site/front-end/vue/Vue/Vue入门.html)
- [Vue实例](http://learn.fuming.site/front-end/vue/Vue/Vue实例.html)
- [Vue视图](http://learn.fuming.site/front-end/vue/Vue/Vue视图.html)
- [Vue组件](http://learn.fuming.site/front-end/vue/Vue/Vue组件.html)
- [Vue动画过渡效果](http://learn.fuming.site/front-end/vue/Vue/Vue动画过渡效果.md)

# Vue入门

## 1 安装

### 1.1 直接`script标签`引入

#### 下载地址

- 开发环境版本 https://vuejs.org/js/vue.js 包含完整的警告和调试模式
- 生成环境版本 https://vuejs.org/js/vue.min.js 删除了警告、进行了压缩

#### CDN

```
https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.min.js
https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js
# 以手动指定版本号
```

#### NPM

在用 Vue 构建大型应用时推荐使用 NPM 安装[1]。NPM 能很好地和诸如 webpack 或 Browserify 模块打包器配合使用。同时 Vue 也提供配套工具来开发单文件组件。

```
npm install vue
```

### 1.2 构建工具 (CLI)

```
npm install -g @vue/cli
vue create my-project
```

## 2 Vue基本演示

#### 创建实例

```javascript
var app = new Vue({
  el: '#app',

})
```

#### 添加数据

```javascript
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

#### 模板渲染（文本差值）

```html
<div id="app">

</div>
或者
<div id="app" v-text="message">  
</div>
```

#### 绑定属性的值

```html
<span v-bind:title="message">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
 </span>
```

#### 双向数据绑定

```javascript
 <p></p>
 <input v-model="message">
```

#### 事件

```html
<div id="app">  <p></p>  <button v-on:click="reverseMessage">逆转消息</button></div>var app = new Vue({  el: '#app-5',  data: {    message: 'Hello Vue.js!'  },  methods: {    reverseMessage: function () {      this.message = this.message.split('').reverse().join('')    }  }})
```

#### 循环

```html
<ol>  <li v-for="todo in todos">  </li></ol>
```

#### 条件

```html
<p v-if="seen">现在你看到我了</p>
```

#### Vue组件化

```javascript
// 定义名为 todo-item 的新组件Vue.component('todo-item', {  template: '<li>这是个待办项</li>'})<ol>  <!-- 创建一个 todo-item 组件的实例 -->  <todo-item></todo-item></ol>
```

## 3 MVVM

`MVVM`是前端应用主流的软件架构模式，MVVM有助于将[图形用户界面](https://zh.wikipedia.org/wiki/图形用户界面)的开发与[业务逻辑](https://zh.wikipedia.org/w/index.php?title=业务逻辑&action=edit&redlink=1)或[后端](https://zh.wikipedia.org/wiki/前端和后端)逻辑（*数据模型*）的开发[分离](https://zh.wikipedia.org/wiki/关注点分离)开来

- M Model 模型
- V View 视图
- VM ViewModel 视图模型

> MVVM旨在利用WPF中的数据绑定函数，通过从视图层中几乎删除所有GUI代码（代码隐藏），更好地促进视图层开发与模式其余部分的分离。[10] 不需要用户体验（UX）开发人员编写GUI代码，他们可以使用框架标记语言（如XAML），并创建到应用程序开发人员编写和维护的视图模型的数据绑定。角色的分离使得交互设计师可以专注于用户体验需求，而不是对业务逻辑进行编程。这样，应用程序的层次可以在多个工作流中进行开发以提高生产力。即使一个开发人员在整个代码库上工作，视图与模型的适当分离也会更加高效，因为基于最终用户反馈，用户界面通常在开发周期中经常发生变化，而且处于开发周期后期。
>
> MVVM模式试图获得MVC提供的功能性开发分离的两个优点，同时利用数据绑定的优势和通过绑定数据的框架尽可能接近纯应用程序模型。[10][11][12] 它使用绑定器、视图模型和任何业务层的数据检查功能来验证传入的数据。结果是模型和框架驱动尽可能多的操作，消除或最小化直接操纵视图的应用程序逻辑（如代码隐藏）。
>
> 《摘自维基百科》

Vue的设计收到了`MVVM`的启发，如果你之前已经习惯了用jQuery操作DOM，学习Vue.js时请先抛开手动操作DOM的思维，因为Vue.js是数据驱动的，你无需手动操作DOM。它通过一些特殊的HTML语法，将DOM和数据绑定起来。一旦你创建了绑定，DOM将和数据保持同步，每当变更了数据，DOM也会相应地更新。

![MVVM](http://learn.fuming.site/front-end/vue/images/mvvm.png)

# Vue实例

## 1 创建实例

```javascript
var vm = new Vue({  // 选项})
```

- 每个 Vue 应用都是通过用 Vue 函数创建一个新的 Vue 实例开始的
- 一个 Vue 应用由一个通过 new Vue 创建的根 Vue 实例，以及可选的嵌套的、可复用的组件树组成。

## 2 数据与方法

### 2.1 数据

- 当一个 Vue 实例被创建时，它向 Vue 的响应式系统中加入了其 data 对象中能找到的所有的属性。当这些属性的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。
- 只有当实例被创建时 data 中存在的属性才是响应式的
- 如果你知道你会在晚些时候需要一个属性，但是一开始它为空或不存在，那么你仅需要设置一些初始值

### 2.2 实例方法

Vue 实例还暴露了一些有用的实例属性与方法。它们都有前缀 $，以便与用户定义的属性区分开来

- vm.$el
- vm.$data
- vm.$watch(dataAttr, fn)

## 3 计算属性和侦听器

### 3.1 methods

methods用来装载可以调用的函数，你可以直接通过 Vue 实例访问这些方法，或者在指令表达式中使用。方法中的 this 自动绑定为 Vue 实例。

> 注意，不应该使用箭头函数来定义 methods 函数（例如 plus: () => this.a++）。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.a 将是 undefined。示例代码如下。

如果你要通过对 DOM 的操作来触发这些函数，那么应该使用 v-on 对操作和事件进行绑定

```javascript
var vm = new Vue({  data: { a: 1 },  methods: {    plus: function () {      this.a++    }  }})vm.plus()vm.a // 2
```

### 3.2 computed 计算属性

模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护,这时候应该使用计算属性

```html
<div id="example">  {{ message.split('').reverse().join('') }}</div><!--以下是计算属性的用法--><div id="example">  <p>Original message: "{{ message }}"</p>  <p>Computed reversed message: "{{ reversedMessage }}"</p></div>var vm = new Vue({  el: '#example',  data: {    message: 'Hello'  },  computed: {    // 计算属性的 getter    reversedMessage: function () {      // `this` 指向 vm 实例      return this.message.split('').reverse().join('')    }  }})
```

### 3.3 watch 监听器

虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的

```javascript
var vm = new Vue({    data: {        question: ''    },    watch: {        // 如果 `question` 发生改变，这个函数就会运行        question: function (newQuestion, oldQuestion) {          this.answer = 'Waiting for you to stop typing...'          this.debouncedGetAnswer()        }  },})
```

### 3.4 三者区别

它们三者都是以函数为主体，但是它们之间却各有区别。

#### 计算属行与方法

我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。然而，不同的是计算属性是基于它们的依赖进行缓存的。计算属性只有在它的相关依赖发生改变时才会重新求值。这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。

相比之下，每当触发重新渲染时，调用方法将总会再次执行函数。

#### 计算属性与侦听属性

- watch擅长处理的场景：一个数据影响多个数据
- computed擅长处理的场景：一个数据受多个数据影响

## 4 生命周期

### 4.1 生命周期钩子函数

**1.beforeCreate**

在实例初始化之后，数据观测（data observer）和 event/watcher 事件配置之前被调用。

**2.created**

在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测（data observer）、属性和方法的运算、watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。

**3.beforeMount**

在挂载开始之前被调用，相关的 render 函数将首次被调用。

注意：该钩子在服务器端渲染期间不被调用。

**4.mounted**

el 被新创建的 vm.el替换，并挂载到实例上去之后调用该钩子。如果root实例挂载了一个文档内元素，当mounted被调用时vm.el 也在文档内。页面渲染完成后初始化的处理都可以放在这里。

注意：mounted 不会承诺所有的子组件也都一起被挂载。

**5.beforeUpdate**

数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。

你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。

**6.updated**

由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。

当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。

注意：updated 不会承诺所有的子组件也都一起被重绘。

**7.activated**

keep-alive 组件激活时调用。

**8.deactivated**

keep-alive 组件停用时调用。

**9.beforeDestroy**

实例销毁之前调用。在这一步，实例仍然完全可用。

**10.destroyed**

Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

### 4.2 生命周期图示

![下载](C:\Users\54112\Desktop\下载.png)

# Vue 视图

## 1. 基本模板语法

### 1.1 插值

#### 文本

- 数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值
- `v-text` 指令也可以用于数据绑定，如果要更新部分的 textContent ，需要使用 插值。
- 通过使用 `v-once` 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新

#### 原始HTML

双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，你需要使用 v-html 指令

> 你的站点上动态渲染的任意 HTML 可能会非常危险，因为它很容易导致 XSS 攻击。请只对可信内容使用 HTML 插值，绝不要对用户提供的内容使用插值。

#### 属性

- Mustache语法不能作用在 HTML 特性上，遇到这种情况应该使用 v-bind 指令
- 在布尔属性的情况下，它们的存在即暗示为 true， 如果值是 null、undefined 或 false，则属性不会被包含在渲染出来的

#### 使用JavaScript表达式

```html
{{ number + 1 }}{{ ok ? 'YES' : 'NO' }}{{ message.split('').reverse().join('') }}<div v-bind:id="'list-' + id"></div><!-- 这是语句，不是表达式 -->{{ var a = 1 }}<!-- 流控制也不会生效，请使用三元表达式 -->{{ if (ok) { return message } }}
```

#### 防止刷新或加载闪烁

```html
<style>    [v-cloak] {          display: none !important;    }</style><div v-cloak>  {{ message }}</div>
```

- v-cloak并不需要添加到每个标签，只要在el挂载的标签上添加就可以

### 1.2 指令

#### 指令

- 指令 (Directives) 是带有 v- 前缀的特殊属性。
- 指令特性的值预期是单个 JavaScript 表达式
- 指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。

#### 指令列表

- v-text
- v-html
- v-show
- v-if
- v-else
- v-else-if
- v-for
- v-on
- v-bind
- v-model
- v-pre
- v-cloak
- v-once

#### 缩写

**v-bind缩写**

```html
<!-- 完整语法 --><a v-bind:href="url">...</a><!-- 缩写 --><a :href="url">...</a>
```

**v-on缩写**

```html
<!-- 完整语法 --><a v-on:click="doSomething">...</a><!-- 缩写 --><a @click="doSomething">...</a>
```

## 2. 条件渲染与列表渲染

### 2.1 条件渲染

#### 相关指令

- v-if
- v-else
- v-else-if

#### 控制多个元素

```html
<template v-if="ok">  <h1>Title</h1>  <p>Paragraph 1</p>  <p>Paragraph 2</p></template>
```

#### 复用已有元素

- Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染
- 要想每次都重新渲染，只需添加一个具有唯一值的 key 属性

#### v-show

```html
<h1 v-show="ok">Hello!</h1>
```

与 v-if 的区别

- `v-if` 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
- `v-show` 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
- 一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

### 2.2 列表渲染

#### 遍历数组

```html
<ul id="example-1">  <li v-for="item in items">    {{ item.message }}  </li></ul>
```

v-for 还支持一个可选的第二个参数为当前项的索引

```html
<ul id="example-2">  <li v-for="(item, index) in items">    {{ index }} - {{ item.message }}  </li></ul>
```

#### 遍历对象

```html
<!-- 只取值 --><li v-for="value in object">  {{ value }}</li><!-- 值、属性名 --><div v-for="(value, key) in object">  {{ key }}: {{ value }}</div><!--值、属性名、索引--><div v-for="(value, key, index) in object">  {{ index }}. {{ key }}: {{ value }}</div>
```

#### key

- 当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。
- 这个默认的模式是高效的，但是只适用于不依赖子组件状态或临时 DOM 状态 的列表渲染输出。
- 为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key 属性。因为在遍历，需要用 v-bind 来绑定动态值
- 建议尽可能在使用 v-for 时提供 key，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升。

#### 更新检测

**数组**

由于 JavaScript 的限制，Vue 不能检测以下变动的数组：

 当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue 当你修改数组的长度时，例如：vm.items.length = newLength

**对象**

还是由于 JavaScript 的限制，Vue 不能检测对象属性的添加或删除

**方法**

- `Vue.set()`
- `vm.$set()`

#### 遍历数字

```html
<div>  <span v-for="n in 10">{{ n }} </span></div>
```

#### `v-for` on `<tmplate>`

```html
<ul>  <template v-for="item in items">    <li>{{ item.msg }}</li>    <li class="divider" role="presentation"></li>  </template></ul>
```

#### `v-for` 和 `v-if`

当它们处于同一节点，v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中。

```html
<li v-for="todo in todos" v-if="!todo.isComplete">  {{ todo }}</li>
```

## 3 样式

### 3.1 绑定HTML Class

#### 对象语法

```html
<div v-bind:class="{ active: isActive }"></div><div class="static"     v-bind:class="{ active: isActive, 'text-danger': hasError }"></div><div v-bind:class="classObject"></div>
```

#### 数组语法

```html
<div v-bind:class="[activeClass, errorClass]"></div>
```

### 3.2 绑定内联样式

#### 对象语法

```html
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div><div v-bind:style="styleObject"></div>
```

#### 数组语法

数组语法可以将多个样式对象应用到同一个元素上

```html
div v-bind:style="[baseStyles, overridingStyles]"></div>
```

#### 自动添加前缀

当 `v-bind:style` 使用需要添加浏览器引擎前缀的 CSS 属性时，如 transform，Vue.js 会自动侦测并添加相应的前缀。

#### 多重值

从 2.3.0 起你可以为 style 绑定中的属性提供一个包含多个值的数组，常用于提供多个带前缀的值

```html
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```

这样写只会渲染数组中最后一个被浏览器支持的值。在本例中，如果浏览器支持不带浏览器前缀的 flexbox，那么就只会渲染 display: flex。

## 4. 事件

### 4.1 事件绑定

#### 监听事件

```html
<div id="example-1">  <button v-on:click="counter += 1">Add 1</button>  <p>The button above has been clicked {{ counter }} times.</p></div>
```

#### 事件处理方法

```html
<div id="example-2">  <!-- `greet` 是在下面定义的方法名 -->  <button v-on:click="greet">Greet</button></div>
```

#### 内联调用方法

```html
<div id="example-3">  <button v-on:click="say('hi')">Say hi</button>  <button v-on:click="say('what')">Say what</button></div>
```

有时也需要在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 $event 把它传入方法

```html
<button v-on:click="warn('Form cannot be submitted yet.', $event)">  Submit</button>
```

### 4.2 事件修饰符

- `.stop`
- `.prevent`
- `.capture`
- `.self`
- `.once`
- `.passive`

```html
<!-- 阻止单击事件继续传播 阻止事件冒泡--><a v-on:click.stop="doThis"></a><!-- 提交事件不再重载页面 阻止默认事件--><form v-on:submit.prevent="onSubmit"></form><!-- 修饰符可以串联 --><a v-on:click.stop.prevent="doThat"></a><!-- 只有修饰符 --><form v-on:submit.prevent></form><!-- 添加事件监听器时使用事件捕获模式 --><!-- 即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理 --><div v-on:click.capture="doThis">...</div><!-- 只当在 event.target 是当前元素自身时触发处理函数 --><!-- 即事件不是从内部元素触发的 --><div v-on:click.self="doThat">...</div><!-- 点击事件将只会触发一次 2.1.4新增--><a v-on:click.once="doThis"></a><!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 2.3.0新增--><!-- 而不会等待 `onScroll` 完成  --><!-- 这其中包含 `event.preventDefault()` 的情况 --><!--.passive 修饰符尤其能够提升移动端的性能。--><div v-on:scroll.passive="onScroll">...</div>
```

### 4.3 按键修饰符

#### 数字

```html
<!-- 只有在 `keyCode` 是 13 时调用 `vm.submit()` --><input v-on:keyup.13="submit">
```

#### 按键别名

```html
<!-- 回车键 --><input v-on:keyup.enter="submit">
```

- .enter
- .tab
- .delete (捕获“删除”和“退格”键)
- .esc
- .space
- .up
- .down
- .left
- .right

可以通过全局 config.keyCodes 对象自定义按键修饰符别名：

```javascript
// 可以使用 `v-on:keyup.f1`Vue.config.keyCodes.f1 = 112
```

### 4.4 系统修饰键

可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。

- .ctrl
- .alt
- .shift
- .meta

> 注意：在 Mac 系统键盘上，meta 对应 command 键 (⌘)。在 Windows 系统键盘 meta 对应 Windows 徽标键 (⊞)。在 Sun 操作系统键盘上，meta 对应实心宝石键 (◆)。在其他特定键盘上，尤其在 MIT 和 Lisp 机器的键盘、以及其后继产品，比如 Knight 键盘、space-cadet 键盘，meta 被标记为“META”。在 Symbolics 键盘上，meta 被标记为“META”或者“Meta”。

```html
<!-- Alt + C --><input @keyup.alt.67="clear"><!-- Ctrl + Click --><div @click.ctrl="doSomething">Do something</div>
```

## 5 表单输入绑定

你可以用 `v-model` 指令在表单 `<input>` 及 `<textarea>` 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。

`v-model` 会忽略所有表单元素的 value、checked、selected 特性的初始值而总是将 Vue 实例的数据作为数据来源。你应该通过 JavaScript 在组件的 data 选项中声明初始值。

### 5.1 基础用法

#### 文本

```html
<input v-model="message" placeholder="edit me"><textarea v-model="message" placeholder="add multiple lines"></textarea>
```

#### 复选框

单个复选框，绑定到布尔值：

```html
<input type="checkbox" id="checkbox" v-model="checked"><input  type="checkbox"  v-model="toggle"  true-value="yes"  false-value="no">
```

多个复选框，绑定到同一个数组

```html
<div id='example'>  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">  <label for="jack">Jack</label>  <input type="checkbox" id="john" value="John" v-model="checkedNames">  <label for="john">John</label>  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">  <label for="mike">Mike</label>  <br>  <span>Checked names: {{ checkedNames }}</span></div>
```

#### 单选按钮

绑定value对应的字符串

```html
<div id="example">  <input type="radio" id="one" value="One" v-model="picked">  <label for="one">One</label>  <br>  <input type="radio" id="two" value="Two" v-model="picked">  <label for="two">Two</label>  <br>  <span>Picked: {{ picked }}</span></div>
```

#### 选择框

单选，绑定对应所选的值

```html
<div id="example">  <select v-model="selected">    <option disabled value="">请选择</option>    <option>A</option>    <option>B</option>    <option>C</option>  </select>  <span>Selected: {{ selected }}</span></div>
```

多选时 ，绑定到一个数组

```html
<div id="example">  <select v-model="selected" multiple style="width: 50px;">    <option>A</option>    <option>B</option>    <option>C</option>  </select>  <br>  <span>Selected: {{ selected }}</span></div>
```

### 5.2 修饰符

#### `.lazy`

在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步

添加 lazy 修饰符，从而转变为使用 change 事件进行同步

```html
<!-- 在“change”时而非“input”时更新 --><input v-model.lazy="msg" >
```

#### `.number`

如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符

```html
<input v-model.number="age" type="number">
```

#### `.trim`

自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符

```html
<input v-model.trim="msg">
```

# Vue组件

## 1 组件基础

### 1.1 什么是组件

#### 组件的概念

组件（Component）是 Vue.js 最强大的功能之一。组件可以扩展 HTML 元素，封装可重用的代码。在较高层面上，组件是自定义元素，Vue.js 的编译器为它添加特殊功能。在有些情况下，组件也可以表现为用 is 特性进行了扩展的原生 HTML 元素。

所有的 Vue 组件同时也都是 Vue 的实例，所以可接受相同的选项对象（除了一些根级特有的选项）并提供相同的生命周期钩子。

#### 如何理解组件

简单理解，组件其实就是一个独立的 HTML，它的内部可能有各种结构、样式、逻辑，某些地方来说有些像 iframe，它都是在页面中引入之后展现另一个页面的内容，但实际上它与 iframe 又完全不同，iframe 是一个独立封闭的内容，而组件既是一个独立的内容，还是一个受引入页面控制的内容。

通常一个应用会以一棵嵌套的组件树的形式来组织：

![img](data:image/png;base64,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)

例如，你可能会有页头、侧边栏、内容区等组件，每个组件又包含了其它的像导航链接、博文之类的组件。

#### 为什么要使用组件

举个简单的列子，最近我的项目中有一个日历模块，多个页面都要用这个日历，而每个页面的日历都存在一些差别，如果不使用组件，我要完成这个项目，做到各个页面的日历大体一致，而部分地方存在差异，我可能就需要写几套日历代码了。

而使用组件呢？一套代码，一个标签，然后分别在不同地方引用，根据不同的需求进行差异控制即可。

```html
<calendar></calendar>
```

我可以通过给 calendar 传递值实现在本页面对日历的控制，让它满足我这个页面的某些单独需求。

有人会问，你 calendar 标签是什么鬼？前面有这么一句话，组件是自定义元素。calendar 就是我自定义的元素，它就是一个组件。所以在项目中，你会发现有各种五花八门的标签名，他们就是一个个组件。

#### 

### 1.2 创建组件

#### 注册组件

我们把创建一个组件称为注册组件，如果你把组件理解成为变量，那么注册组件你就可以理解为声明变量。我们通过 Vue.component 来注册一个全局组件

```Javascript
Vue.component(componentName, {    //选项})
```

对于自定义组件的命名，Vue.js 不强制遵循 W3C 规则（小写，并且包含一个短杠），尽管这被认为是最佳实践。

#### 组件的选项

- 与创建Vue示例时的选项相同（除了一些根级特有的选项）
- 一个组件的 data 选项必须是一个函数 （每个组件实例具有自己的作用域，组件复用不会互相影响）

```javascript
// 定义一个名为 button-counter 的新组件Vue.component('button-counter', {  data: function () {    return {      count: 0    }  },  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'})
```

#### 组件的使用

```html
<div id="components-demo">  <button-counter></button-counter></div>
```

组件可以复用

```html
<div id="components-demo">  <button-counter></button-counter>  <button-counter></button-counter>  <button-counter></button-counter></div>
```

#### 组件模板

每个组件模板必须只有一个根元素

模板的形式：

- template 选项指定字符串 （模板字符串）

- 单文件组件(.vue)

- 内联模板 (不推荐)

  ```html
  <my-component inline-template>  <div>    <p>These are compiled as the component's own template.</p>    <p>Not parent's transclusion content.</p>  </div></my-component>
  ```

- X-Templates

  ```Html
  <script type="text/x-template" id="hello-world-template">  <p>Hello hello hello</p></script>
  ```

  ```javascript
  Vue.component('hello-world', {  template: '#hello-world-template'})
  ```

#### 全局组件和局部组件

使用 `Vue.component()`注册的组件都是全局组件

我们可以定义局部组件

```javascript
var ComponentA = { /* ... */ }var ComponentB = { /* ... */ }var ComponentC = { /* ... */ }new Vue({  el: '#app'  components: {    'component-a': ComponentA,    'component-b': ComponentB  }})
```

## 2. 组件之间的嵌套使用和互相通信

组件设计初衷就是要配合使用的，最常见的就是形成父子组件的关系：组件 A 在它的模板中使用了组件 B。它们之间必然需要相互通信：父组件可能要给子组件下发数据，子组件则可能要将它内部发生的事情告知父组件。

每个组件的作用域都是独立的，所以在组件嵌套使用的时候子组件不能直接使用父组件中的数据。

![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAxYAAAKGCAIAAABYzZoHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgTWFjaW50b3NoIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQwRDk1OTAzNzIxQTExRTY5OUZEQTFCMkQ3QTFGMzZGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQwRDk1OTA0NzIxQTExRTY5OUZEQTFCMkQ3QTFGMzZGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDBEOTU5MDE3MjFBMTFFNjk5RkRBMUIyRDdBMUYzNkYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDBEOTU5MDI3MjFBMTFFNjk5RkRBMUIyRDdBMUYzNkYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5MVSkLAABkJUlEQVR42uzd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)

### 2.1 通过Prop向子组件传递数据

#### 基本使用

在子组件中声明 prop，然后添加一个 message

```javascript
Vue.component('child', {  // 声明 props  props: ['message'],  // 就像 data 一样，prop 也可以在模板中使用  // 同样也可以在 vm 实例中通过 this.message 来使用  template: '<span>{{ message }}</span>'})
```

一个组件默认可以拥有任意数量的 prop，任何值都可以传递给任何 prop。我们能够在组件实例中访问这个值，

然后直接传入值就可以在子组件中使用 message。

```Html
<child message="hello!"></child>
```

#### 

#### Prop 的大小写

HTML 中的特性名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。这意味着当你使用 DOM 中的模板时，camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短横线分隔命名) 命名

#### 传入一个对象的所有属性

```html
<blog-post v-bind="post"></blog-post>
```

等价于

```html
<blog-post  v-bind:id="post.id"  v-bind:title="post.title"></blog-post>
```

#### Prop验证

我们可以为组件的 prop 指定验证要求

```javascript
Vue.component('my-component', {  props: {    // 基础的类型检查 (`null` 匹配任何类型)    propA: Number,    // 多个可能的类型    propB: [String, Number],    // 必填的字符串    propC: {      type: String,      required: true    },    // 带有默认值的数字    propD: {      type: Number,      default: 100    },    // 带有默认值的对象    propE: {      type: Object,      // 对象或数组且一定会从一个工厂函数返回默认值      default: function () {        return { message: 'hello' }      }    },    // 自定义验证函数    propF: {      validator: function (value) {        // 这个值必须匹配下列字符串中的一个        return ['success', 'warning', 'danger'].indexOf(value) !== -1      }    }  }})
```

类型列表：

- String
- Number
- Boolean
- Array
- Object
- Date
- Function
- Symbol
- 自定义的构造函数

### 2.2 通过事件向父级组件发送消息

#### on(eventName)+on(eventName)+emit(eventName) 实现通讯

在父组件中使用 on(eventName)监听事件，然后在子组件中使用on(eventName)监听事件，然后在子组件中使用emit(eventName) 触发事件，这样就能实现子组件向父组件传值。

```javascript
Vue.component('button-counter', {  template: '<button v-on:click="incrementCounter">{{ counter }}</button>',  data: function () {    return {      counter: 0    }  },  methods: {    incrementCounter: function () {      this.counter += 1      this.$emit('increment')    }  },})new Vue({  el: '#counter-event-example',  data: {    total: 0  },  methods: {    incrementTotal: function () {      this.total += 1      console.log('第'+this.total+'次点击')    }  }})<div id="counter-event-example">  <p>{{ total }}</p>  <button-counter v-on:increment="incrementTotal"></button-counter>  <button-counter v-on:increment="incrementTotal"></button-counter></div>
```

#### 使用事件抛出一个值

有的时候用一个事件来抛出一个特定的值是非常有用的。这时可以使用 `$emit` 的第二个参数来提供这个值

```javascript
 incrementCounter: function () {      this.counter += 1      this.$emit('increment', this.counter) }
```

然后当在父级组件监听这个事件的时候，我们可以通过 `$event` 访问到被抛出的这个值

```html
 <button-counter v-on:increment="postFontSize + $event"></button-counter>
```

或者，如果这个事件处理函数是一个方法：那么这个值将会作为第一个参数传入这个方法：

```vue
<button-counter v-on:increment="incrementTotal"></button-counter>methods: {  incrementTotal: function (enlargeAmount) {    this.postFontSize += enlargeAmount  }}
```

#### 在组件上使用 `v-model`

组件内input需要满足条件：

- 将其 `value` 特性绑定到一个名叫 `value` 的 prop 上
- 在其 `input` 事件被触发时，将新的值通过自定义的 `input` 事件抛出

```javascript
Vue.component('custom-input', {  props: ['value'],  template: `    <input      v-bind:value="value"      v-on:input="$emit('input', $event.target.value)"    >  `})
```

`v-model` 在组件上的使用

```html
<custom-input v-model="searchText"></custom-input><!-- 上面的写法 等价于 下面的写法 --><custom-input  v-bind:value="searchText"  v-on:input="searchText = $event"></custom-input>
```

## 3 插槽 slot

### 3.1 通过插槽分发内容

```javascript
Vue.component('alert-box', {  template: `    <div class="demo-alert-box">      <strong>Error!</strong>      <slot></slot>    </div>  `})<alert-box>  Something bad happened.</alert-box>
```

·Something bad happened.· 会替换掉 slot标签

### 3.2 模板中多个插槽

组件模板

```html
<div class="container">  <header>    <slot name="header"></slot>  </header>  <main>    <slot></slot>  </main>  <footer>    <slot name="footer"></slot>  </footer></div>
```

调用组件

```html
<base-layout>  <template slot="header">    <h1>Here might be a page title</h1>  </template>  <p>A paragraph for the main content.</p>  <p>And another one.</p>  <p slot="footer">Here's some contact info</p></base-layout>
```

### 3.3 插槽默认内容

```vue
<button type="submit">  <slot>Submit</slot></button>
```

## 4. 动态组件

### 4.1 实现动态组件

在不同组件之间进行动态切换

```html
<component is="组件名" class="tab"></component>
```

实现选项卡案例

### 4.2 在动态组件上使用 `keep-alive`

包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们

主要用于保留组件状态或避免重新渲染

```html
<!-- 基本 --><keep-alive>  <component :is="view"></component></keep-alive><!-- 多个条件判断的子组件 --><keep-alive>  <comp-a v-if="a > 1"></comp-a>  <comp-b v-else></comp-b></keep-alive>
```

### 4.3 绑定组件选项对象

动态组件可以绑定 组件选项对象（有component属性的对象），而不是已注册组件名的示例

```javascript
var tabs = [  {    name: 'Home',     component: {       template: '<div>Home component</div>'     }  },  {    name: 'Posts',    component: {      template: '<div>Posts component</div>'    }  },  {    name: 'Archive',    component: {      template: '<div>Archive component</div>',    }  }]new Vue({  el: '#dynamic-component-demo',  data: {      tabs: tabs,    currentTab: tabs[0]  }})<component    v-bind:is="currentTab.component"    class="tab" ></component>
```

## 5 组件的其他特性

### 5.1 解析 DOM 模板时的注意事项

有些 HTML 元素，诸如 `<ul>`、`<ol>`、`<table>` 和 `<select>`，对于哪些元素可以出现在其内部是有严格限制的。而有些元素，诸如 `<li>`、`<tr>` 和 `<option>`，只能出现在其它某些特定的元素内部。

```html
<table>  <blog-post-row></blog-post-row></table>
```

上面的写法，渲染效果会不甚理想，可以采用以下写法

```html
<table>  <tr is="blog-post-row"></tr></table>
```

需要注意的是如果我们从以下来源使用模板的话，这条限制是不存在的：

- 字符串 (例如：template: '...')
- 单文件组件 (.vue)
- `<script type="text/x-template">`

### 5.2 Prop的一些问题

#### Prop的属性名问题

HTML 中的特性名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。这意味着当你使用 DOM 中的模板时，camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短横线分隔命名) 命名

如果你使用字符串模板，那么这个限制就不存在了。

#### 非Prop属性

组件上定义的非Prop属性 会传递到 组件模板的根元素上

class 和 style 特性会非常智能，即两边的值会被合并起来

#### 对prop重新赋值

子组件中，对prop重新赋值，会报警告

### 5.3 组件事件的相关问题

#### 将原生事件绑定到组件

想要在一个组件的根元素上直接监听一个原生事件。这时，你可以使用 v-on 的 .native 修饰符

```html
<base-input v-on:focus.native="onFocus"></base-input>
```

#### .sync 修饰符

在有些情况下，我们可能需要对一个 prop 进行“双向绑定”

推荐以 update:my-prop-name 的模式触发事件

```javascript
//子组件中this.$emit('update:title', newTitle)<!-- 上级组件 模板中 --><text-document  v-bind:title="doc.title"  v-on:update:title="doc.title = $event"></text-document>
```

以上写法可以换成下列写法

```html
<text-document v-bind:title.sync="doc.title"></text-document>
```

### 5.4 官方文档-组件

深入了解组件

网址： https://cn.vuejs.org/v2/guide/components-registration.html

# Vue过渡动画效果

## 1 过渡基础

### 1.1 过渡的方式

Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。 包括以下工具：

- 在 CSS 过渡和动画中自动应用 class
- 可以配合使用第三方 CSS 动画库，如 Animate.css
- 在过渡钩子函数中使用 JavaScript 直接操作 DOM
- 可以配合使用第三方 JavaScript 动画库，如 Velocity.js

### 1.2 过渡的情形

- 条件渲染 (使用 `v-if`)
- 条件展示 (使用 `v-show`)
- 动态组件
- 组件根节点

### 1.3 基本过渡实例

```vue
<template>    <div id="demo">          <button v-on:click="show = !show">            Toggle          </button>          <transition name="fade">            <p v-if="show">hello</p>          </transition>    </div></template><script>    export default {        data() {            return {                show: true            }        }    }</script><style scoped>    .fade-enter-active, .fade-leave-active {         transition: opacity .5s;    }    .fade-enter, .fade-leave-to {          opacity: 0;    }</script>
```

## 2. CSS 实现过渡效果

### 2.1 过渡的类名

1. `v-enter`：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
2. `v-enter-active`：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
3. `v-enter-to`: **2.1.8版及以上** 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 `v-enter` 被移除)，在过渡/动画完成之后移除。
4. `v-leave`: 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
5. `v-leave-active`：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
6. `v-leave-to`: **2.1.8版及以上** 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 `v-leave` 被删除)，在过渡/动画完成之后移除。

![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAAJYCAMAAABFOO8oAAAC/VBMVEX////+///8/f///P///fv///r///X/+vT9+Pj/+vr59/r19/7y+//y///4///4/P76+v/89fT+9u3/9uv99On98uf+8OD67ODy7eL65ub76+v64OD43t743Nz31NX0zMzuy8zny8zcyszfwsbqw8P0yMf0zMX0y7r1x670v6j7yKH6zqH21Z/416X43aT54a371rD83r/75bn+6b//8Mb/8M7/9tL/+dL/99j//N3/++X//+n//+/u8fPt9fvm8fvg7/jZ6PbS5fXN4vPD2/C+5fbA7f/J8v/P9v/W9//d+f/l+//o///k7e3l5+Tj5OTn49vd3dnS1dbQxszHyMi8wcq9wLmtuMicsMSPrsaCpb6Cp651m7d2ladzi5x4hIWAioKCkoWFkImZnJWonYO6oIPOp4fkqojun4vqlpbrmprlnKXspKLtqq/wtbXburnhxbLd0L/o2Lzy3b704Mj85c7+58n96NP27tLy3vP05Pr26frw0urrxObovOHwxtjlsdTlpcfgk8jghrvkjp7niorjdHTjc3PgZmbrZmbtg2brj2bzj2b1n2b4smb2smv3tXD2soD4voL0wIvws43xtZz5xZfwzZbkxZno16PIvJ/VsarDrKy8paC5spOoqqGssqyguayapLGcvdKbxeKfxeijyemqy+umyuKzzt241Oux3/Sz5Pyn2/Sg1/SY0vKJy+iDxOV6u99ps9pcrdZcptJVoNFZmcBaja1Xf5dPdYVbbGtod2+GfWabfVyqeVO2fFG+h1vGkVXNjWPUj2jZm3PPpm3XqmrdrXHdtHXjvYLGnWzInGGxjmybiHambFCtbFCmYVCeYVCUZ1KSVFCSTFCbVFCAPlB3PlBzPlBpPlBbPlBUPlBBPlAsPlAsPlUsPlwsPmEsPmQsPmgsPmwsPnMsPn8sPowtUoMsXYosU5QsU50sY6MsbaYsbZdCfaEsfLQsi8FBj8JBn9A2ZXQsU24sUVFBVFRdUlFaY1R0XFJ+a1ThZojhZp/gZrNDMgYFAAAqeElEQVR42uzAgQAAAACAoP2pF6kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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)

对于这些在过渡中切换的类名来说，如果你使用一个没有名字的 `<transition>`，则 `v-` 是这些类名的默认前缀。如果你使用了 `<transition name="my-transition">`，那么 `v-enter` 会替换为 `my-transition-enter`

### 2.2 CSS transition

```css
/* 可以设置不同的进入和离开动画 *//* 设置持续时间和动画函数 */.v-enter-active {  transition: all .3s ease;}.v-leave-active {  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);}.v-enter, .v-leave-to/* .slide-fade-leave-active for below version 2.1.8 */ {  transform: translateX(10px);  opacity: 0;}
```

### 2.3 CSS animation

```css
.v-enter-active {  animation: bounce-in .5s;}.v-leave-active {  animation: bounce-in .5s reverse;}@keyframes bounce-in {  0% {    transform: scale(0);  }  50% {    transform: scale(1.5);  }  100% {    transform: scale(1);  }}
```

### 2.4 自定义过渡的类名 和 第三方 CSS动画库

我们可以在`<transtion>组件上`通过以下属性来自定义过渡类名：

- enter-class
- enter-active-class
- enter-to-class`(2.1.8+)`
- leave-class
- leave-active-class
- leave-to-class (2.1.8+)

他们的优先级高于普通的类名，这对于 Vue 的过渡系统和其他第三方 CSS 动画库，如 [Animate.css](https://daneden.github.io/animate.css/)结合使用十分有用。

```html
<transition    name="custom-classes-transition"    enter-active-class="animated tada"    leave-active-class="animated bounceOutRight">    <p v-if="show">hello</p></transition>
```

### 2.6 设置过渡持续时间

在很多情况下，Vue 可以自动得出过渡效果的完成时机。默认情况下，Vue 会等待其在过渡效果的根元素的第一个 `transitionend` 或 `animationend` 事件。然而也可以不这样设定——比如，我们可以拥有一个精心编排的一系列过渡效果，其中一些嵌套的内部元素相比于过渡效果的根元素有延迟的或更长的过渡效果。

在这种情况下你可以用 `<transition>` 组件上的 `duration` 属性定制一个显性的过渡持续时间 (以毫秒计)：

```HTML
<transition :duration="1000">...</transition>
```

定制进入和移出的持续时间：

```HTML
<transition :duration="{ enter: 500, leave: 800 }">...</transition>
```

## 3 JavaScript 实现过渡效果

### 3.1 JavaScript 钩子

```html
<transition  v-on:before-enter="beforeEnter"  v-on:enter="enter"  v-on:after-enter="afterEnter"  v-on:enter-cancelled="enterCancelled"  v-on:before-leave="beforeLeave"  v-on:leave="leave"  v-on:after-leave="afterLeave"  v-on:leave-cancelled="leaveCancelled">  <!-- ... --></transition>// ...methods: {  // --------  // 进入中  // --------  beforeEnter: function (el) {    // ...  },  // 此回调函数是可选项的设置  // 与 CSS 结合时使用  enter: function (el, done) {    // ...    done()  },  afterEnter: function (el) {    // ...  },  enterCancelled: function (el) {    // ...  },  // --------  // 离开时  // --------  beforeLeave: function (el) {    // ...  },  // 此回调函数是可选项的设置  // 与 CSS 结合时使用  leave: function (el, done) {    // ...    done()  },  afterLeave: function (el) {    // ...  },  // leaveCancelled 只用于 v-show 中  leaveCancelled: function (el) {    // ...  }}
```

JavaScript 钩子 适合 JavaScript过渡

> 当只用 JavaScript 过渡的时候， **在 enter 和 leave 中，回调函数 done 是必须的** 。否则，它们会被同步调用，过渡会立即完成。
>
> 推荐对于仅使用 JavaScript 过渡的元素添加 `v-bind:css="false"`，Vue 会跳过 CSS 的检测。这也可以避免过渡过程中 CSS 的影响。

### 3.2 第三方 JavaScript 动画库

使用 Velocity.js 的案例

```html
 <transition    v-on:before-enter="beforeEnter"    v-on:enter="enter"    v-on:leave="leave"    v-bind:css="false"  >    <p v-if="show">      Demo    </p>  </transition> methods: {    beforeEnter: function (el) {      el.style.opacity = 0      el.style.transformOrigin = 'left'    },    enter: function (el, done) {      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })      Velocity(el, { fontSize: '1em' }, { complete: done })    },    leave: function (el, done) {      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })      Velocity(el, {        rotateZ: '45deg',        translateY: '30px',        translateX: '30px',        opacity: 0      }, { complete: done })    }  }
```

# Vue Router

本章节主要介绍Vue Router, Vue Router 是 Vue 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。包含内容如下：

- [介绍和安装](http://learn.fuming.site/front-end/vue/VueRouter/介绍和安装.html)
- [基本使用](http://learn.fuming.site/front-end/vue/VueRouter/基本使用.html)
- [高级操作](http://learn.fuming.site/front-end/vue/VueRouter/高级操作.html)
- [导航守卫](http://learn.fuming.site/front-end/vue/VueRouter/导航守卫.html)
- [进阶](http://learn.fuming.site/front-end/vue/VueRouter/进阶.html)

# 介绍和安装

## 1 VueRouter 介绍

Vue Router 是 Vue 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。包含的功能有：

- 嵌套的路由/视图表
- 模块化的、基于组件的路由配置
- 路由参数、查询、通配符
- 基于 Vue.js 过渡系统的视图过渡效果
- 细粒度的导航控制
- 带有自动激活的 CSS class 的链接
- HTML5 历史模式或 hash 模式，在 IE9 中自动降级
- 自定义的滚动条行为

## 2 安装

### 2.1 直接引入

- 直接 [下载](https://unpkg.com/vue-router/dist/vue-router.js)
- 使用CDN [Unpkg.com](https://unpkg.com/) 提供了基于 NPM 的 CDN 链接

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script><script src="https://unpkg.com/vue-router@2.0.0/dist/vue-router.js"></script>
```

### 2.2 模块化引入

```
#使用npm 安装npm install  vue-routerimport Vue from 'vue'import VueRouter from 'vue-router'Vue.use(VueRouter)
```

### 2.3 构建开发版

如果你想使用最新的开发版，就得从 GitHub 上直接 clone，然后自己 build 一个 `vue-router`。

```
git clone https://github.com/vuejs/vue-router.git node_modules/vue-routercd node_modules/vue-routernpm installnpm run build
```

# 基本使用

## 1. 快速入门

用 Vue.js + Vue Router 创建单页应用，是非常简单的。使用 Vue.js ，我们已经可以通过组合组件来组成应用程序，当你要把 Vue Router 添加进来，我们需要做的是，将组件 (components) 映射到路由 (routes)，然后告诉 Vue Router 在哪里渲染它们。下面是个基本例子：

**HTML**

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script><script src="https://unpkg.com/vue-router/dist/vue-router.js"></script><div id="app">  <h1>Hello App!</h1>  <p>    <!-- 使用 router-link 组件来导航. -->    <!-- 通过传入 `to` 属性指定链接. -->    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->    <router-link to="/foo">Go to Foo</router-link>    <router-link to="/bar">Go to Bar</router-link>  </p>  <!-- 路由出口 -->  <!-- 路由匹配到的组件将渲染在这里 -->  <router-view></router-view></div>
```

**javascript**

```js
// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)// 1. 定义 (路由) 组件。// 可以从其他文件 import 进来const Foo = { template: '<div>foo</div>' }const Bar = { template: '<div>bar</div>' }// 2. 定义路由// 每个路由应该映射一个组件。 其中"component" 可以是// 通过 Vue.extend() 创建的组件构造器，// 或者，只是一个组件配置对象。// 我们晚点再讨论嵌套路由。const routes = [  { path: '/foo', component: Foo },  { path: '/bar', component: Bar }]// 3. 创建 router 实例，然后传 `routes` 配置// 你还可以传别的配置参数, 不过先这么简单着吧。const router = new VueRouter({  routes // (缩写) 相当于 routes: routes})// 4. 创建和挂载根实例。// 记得要通过 router 配置参数注入路由，// 从而让整个应用都有路由功能const app = new Vue({  router}).$mount('#app')// 现在，应用已经启动了！
```

通过注入路由器，我们可以在任何组件内通过 `this.$router` 访问路由器，也可以通过 `this.$route`访问当前路由：

```js
// Home.vueexport default {  computed: {    username () {      // 我们很快就会看到 `params` 是什么      return this.$route.params.username    }  },  methods: {    goBack () {      window.history.length > 1        ? this.$router.go(-1)        : this.$router.push('/')    }  }}
```

该文档通篇都常使用 `router` 实例。留意一下 `this.$router` 和 `router` 使用起来完全一样。我们使用 `this.$router` 的原因是我们并不想在每个独立需要封装路由的组件中都导入路由。

要注意，当 `<router-link>` 对应的路由匹配成功，将自动设置 class 属性值 `.router-link-active`。

## 2 动态路由匹配

### 2.1 动态路径参数 dynamic segment

我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。例如，我们有一个 `User` 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 `vue-router` 的路由路径中使用“动态路径参数”(dynamic segment) 来达到这个效果：

```js
const User = {  template: '<div>User</div>'}const router = new VueRouter({  routes: [    // 动态路径参数 以冒号开头    { path: '/user/:id', component: User }  ]})
```

现在呢，像 `/user/foo` 和 `/user/bar` 都将映射到相同的路由。

一个“路径参数”使用冒号 `:` 标记。当匹配到一个路由时，参数值会被设置到 `this.$route.params`，可以在每个组件内使用。于是，我们可以更新 `User` 的模板，输出当前用户的 ID：

```js
const User = {  template: '<div>User {{ $route.params.id }}</div>'}
```

你可以在一个路由中设置多段“路径参数”，对应的值都会设置到 `$route.params` 中。例如：

| 模式                          | 匹配路径            | $route.params                        |
| ----------------------------- | ------------------- | ------------------------------------ |
| /user/:username               | /user/evan          | `{ username: 'evan' }`               |
| /user/:username/post/:post_id | /user/evan/post/123 | `{ username: 'evan', post_id: 123 }` |

除了 `$route.params` 外，`$route` 对象还提供了其它有用的信息，例如，`$route.query` (如果 URL 中有查询参数)、`$route.hash`等等。你可以查看 [API 文档](https://router.vuejs.org/zh/api/#路由对象) 的详细说明。

### 2.2 响应路由参数的变化

提醒一下，当使用路由参数时，例如从 `/user/foo` 导航到 `/user/bar`，**原来的组件实例会被复用**。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。**不过，这也意味着组件的生命周期钩子不会再被调用**。

复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch (监测变化) `$route` 对象：

```js
const User = {  template: '...',  watch: {    '$route' (to, from) {      // 对路由变化作出响应...    }  }}
```

或者使用 2.2 中引入的 `beforeRouteUpdate` 守卫：

```js
const User = {  template: '...',  beforeRouteUpdate (to, from, next) {    // react to route changes...    // don't forget to call next()  }}
```

### 2.3 高级匹配模式

`vue-router` 使用 [path-to-regexp](https://github.com/pillarjs/path-to-regexp) 作为路径匹配引擎，所以支持很多高级的匹配模式，例如：可选的动态路径参数、匹配零个或多个、一个或多个，甚至是自定义正则匹配。查看它的 [文档](https://github.com/pillarjs/path-to-regexp#parameters) 学习高阶的路径匹配，

### 2.4 匹配优先级

有时候，同一个路径可以匹配多个路由，此时，匹配的优先级就按照路由的定义顺序：谁先定义的，谁的优先级就最高。

## 3 嵌套路由

实际生活中的应用界面，通常由多层嵌套的组件组合而成。同样地，URL 中各段动态路径也按某种结构对应嵌套的各层组件，例如：

```
/user/foo/profile                     /user/foo/posts+------------------+                  +-----------------+| User             |                  | User            || +--------------+ |                  | +-------------+ || | Profile      | |  +------------>  | | Posts       | || |              | |                  | |             | || +--------------+ |                  | +-------------+ |+------------------+                  +-----------------+
```

借助 `vue-router`，使用嵌套路由配置，就可以很简单地表达这种关系。

接着上节创建的 app：

```html
<div id="app">  <router-view></router-view></div>const User = {  template: '<div>User {{ $route.params.id }}</div>'}const router = new VueRouter({  routes: [    { path: '/user/:id', component: User }  ]})
```

这里的 `<router-view>` 是最顶层的出口，渲染最高级路由匹配到的组件。同样地，一个被渲染组件同样可以包含自己的嵌套 `<router-view>`。例如，在 `User` 组件的模板添加一个 `<router-view>`：

```html
const User = {  template: `    <div class="user">      <h2>User {{ $route.params.id }}</h2>      <router-view></router-view>    </div>  `}
```

要在嵌套的出口中渲染组件，需要在 `VueRouter` 的参数中使用 `children` 配置：

```js
const router = new VueRouter({  routes: [    { path: '/user/:id', component: User,      children: [        {          // 当 /user/:id/profile 匹配成功，          // UserProfile 会被渲染在 User 的 <router-view> 中          path: 'profile',          component: UserProfile        },        {          // 当 /user/:id/posts 匹配成功          // UserPosts 会被渲染在 User 的 <router-view> 中          path: 'posts',          component: UserPosts        }      ]    }  ]})
```

**要注意，以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。**

你会发现，`children` 配置就是像 `routes` 配置一样的路由配置数组，所以呢，你可以嵌套多层路由。

此时，基于上面的配置，当你访问 `/user/foo` 时，`User` 的出口是不会渲染任何东西，这是因为没有匹配到合适的子路由。如果你想要渲染点什么，可以提供一个 空的 子路由：

```js
const router = new VueRouter({  routes: [    {      path: '/user/:id', component: User,      children: [        // 当 /user/:id 匹配成功，        // UserHome 会被渲染在 User 的 <router-view> 中        { path: '', component: UserHome },        // ...其他子路由      ]    }  ]})
```

## 4 编程式导航

除了使用 `<router-link>` 创建 a 标签来定义导航链接，我们还可以借助 router 的实例方法，通过编写代码来实现。

### 4.1 router.push()

```js
router.push(location, onComplete?, onAbort?)
```

**注意：在 Vue 实例内部，你可以通过 $router 访问路由实例。因此你可以调用 this.$router.push。**

想要导航到不同的 URL，则使用 `router.push` 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。

当你点击 `<router-link>` 时，这个方法会在内部调用，所以说，点击 `<router-link to="...">` 等同于调用 `router.push(...)`。

| 声明式                   | 编程式             |
| ------------------------ | ------------------ |
| `<router-link to="...">` | `router.push(...)` |

该方法的参数可以是一个字符串路径，或者一个描述地址的对象。例如：

```js
// 字符串router.push('home')// 对象router.push({ path: 'home' })// 命名的路由router.push({ name: 'user', params: { userId: 123 }})// 带查询参数，变成 /register?plan=privaterouter.push({ path: 'register', query: { plan: 'private' }})
```

**注意：如果提供了 path，params 会被忽略，上述例子中的 query 并不属于这种情况。取而代之的是下面例子的做法，你需要提供路由的 name 或手写完整的带有参数的 path：**

```js
const userId = 123router.push({ name: 'user', params: { userId }}) // -> /user/123router.push({ path: `/user/${userId}` }) // -> /user/123// 这里的 params 不生效router.push({ path: '/user', params: { userId }}) // -> /user
```

同样的规则也适用于 `router-link` 组件的 `to` 属性。

在 2.2.0+，可选的在 `router.push` 或 `router.replace` 中提供 `onComplete` 和 `onAbort` 回调作为第二个和第三个参数。这些回调将会在导航成功完成 (在所有的异步钩子被解析之后) 或终止 (导航到相同的路由、或在当前导航完成之前导航到另一个不同的路由) 的时候进行相应的调用。

**注意：**如果目的地和当前路由相同，只有参数发生了改变 (比如从一个用户资料到另一个 `/users/1`-> `/users/2`)，你需要使用 `beforeRouteUpdate`来响应这个变化 (比如抓取用户信息)

### 4.2 router.replace()

跟 `router.push` 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。

| 声明式                            | 编程式                |
| --------------------------------- | --------------------- |
| `<router-link :to="..." replace>` | `router.replace(...)` |

### 4.3 router.go()

这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 `window.history.go(n)`。

例子

```js
// 在浏览器记录中前进一步，等同于 history.forward()router.go(1)// 后退一步记录，等同于 history.back()router.go(-1)// 前进 3 步记录router.go(3)// 如果 history 记录不够用，那就默默地失败呗router.go(-100)router.go(100)
```

### 4.4 操作History

你也许注意到 `router.push`、 `router.replace` 和 `router.go` 跟 `window.history.pushState`、 `window.history.replaceState` 和 `window.history.go`好像， 实际上它们确实是效仿 `window.history` API 的`

还有值得提及的，Vue Router 的导航方法 (`push`、 `replace`、 `go`) 在各类路由模式 (`history`、 `hash` 和 `abstract`) 下表现一致。

# 高级操作

## 1 命名路由

有时候，通过一个名称来标识一个路由显得更方便一些，特别是在链接一个路由，或者是执行一些跳转的时候。你可以在创建 Router 实例的时候，在 `routes` 配置中给某个路由设置名称。

```js
const router = new VueRouter({  routes: [    {      path: '/user/:userId',      name: 'user',      component: User    }  ]})
```

要链接到一个命名路由，可以给 `router-link` 的 `to` 属性传一个对象：

```vue
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
```

这跟代码调用 `router.push()` 是一回事：

```js
router.push({ name: 'user', params: { userId: 123 }})
```

这两种方式都会把路由导航到 `/user/123` 路径。

## 2 命名视图

### 2.1 命名视图

有时候想同时 (同级) 展示多个视图，而不是嵌套展示，例如创建一个布局，有 `sidebar` (侧导航) 和 `main` (主内容) 两个视图，这个时候命名视图就派上用场了。你可以在界面中拥有多个单独命名的视图，而不是只有一个单独的出口。如果 `router-view` 没有设置名字，那么默认为 `default`。

```vue
<router-view class="view one"></router-view><router-view class="view two" name="a"></router-view><router-view class="view three" name="b"></router-view>
```

一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要多个组件。确保正确使用 `components` 配置 (带上 s)：

```js
const router = new VueRouter({  routes: [    {      path: '/',      components: {        default: Foo,        a: Bar,        b: Baz      }    }  ]})
```

### 2.2 嵌套命名视图

我们也有可能使用命名视图创建嵌套视图的复杂布局。这时你也需要命名用到的嵌套 `router-view` 组件。我们以一个设置面板为例：

```
/settings/emails                                       /settings/profile+-----------------------------------+                  +------------------------------+| UserSettings                      |                  | UserSettings                 || +-----+-------------------------+ |                  | +-----+--------------------+ || | Nav | UserEmailsSubscriptions | |  +------------>  | | Nav | UserProfile        | || |     +-------------------------+ |                  | |     +--------------------+ || |     |                         | |                  | |     | UserProfilePreview | || +-----+-------------------------+ |                  | +-----+--------------------+ |+-----------------------------------+                  +------------------------------+
```

- `Nav` 只是一个常规组件。
- `UserSettings` 是一个视图组件。
- `UserEmailsSubscriptions`、`UserProfile`、`UserProfilePreview` 是嵌套的视图组件。

**注意**：*我们先忘记 HTML/CSS 具体的布局的样子，只专注在用到的组件上*

`UserSettings` 组件的 `<template>` 部分应该是类似下面的这段代码：

```vue
<!-- UserSettings.vue --><div>  <h1>User Settings</h1>  <NavBar/>  <router-view/>  <router-view name="helper"/></div>
```

*嵌套的视图组件在此已经被忽略了，但是你可以在这里找到完整的源代码*

然后你可以用这个路由配置完成该布局：

```js
{  path: '/settings',  // 你也可以在顶级路由就配置命名视图  component: UserSettings,  children: [{    path: 'emails',    component: UserEmailsSubscriptions  }, {    path: 'profile',    components: {      default: UserProfile,      helper: UserProfilePreview    }  }]}
```

## 3 重定向和别名

### 3.1 重定向

重定向也是通过 `routes` 配置来完成，下面例子是从 `/a` 重定向到 `/b`：

```js
const router = new VueRouter({  routes: [    { path: '/a', redirect: '/b' }  ]})
```

重定向的目标也可以是一个命名的路由：

```js
const router = new VueRouter({  routes: [    { path: '/a', redirect: { name: 'foo' }}  ]})
```

甚至是一个方法，动态返回重定向目标：

```js
const router = new VueRouter({  routes: [    { path: '/a', redirect: to => {      // 方法接收 目标路由 作为参数      // return 重定向的 字符串路径/路径对象    }}  ]})
```

注意导航守卫并没有应用在跳转路由上，而仅仅应用在其目标上。在下面这个例子中，为 `/a` 路由添加一个 `beforeEach` 或 `beforeLeave` 守卫并不会有任何效果。

### 3.2 别名

“重定向”的意思是，当用户访问 `/a`时，URL 将会被替换成 `/b`，然后匹配路由为 `/b`，那么“别名”又是什么呢？

**/a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样。**

上面对应的路由配置为：

```js
const router = new VueRouter({  routes: [    { path: '/a', component: A, alias: '/b' }  ]})
```

“别名”的功能让你可以自由地将 UI 结构映射到任意的 URL，而不是受限于配置的嵌套路由结构。

## 4 路由组件传参

### 4.1 组件和路由解耦

在组件中使用 `$route` 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。

使用 `props` 将组件和路由解耦：

**取代与 $route 的耦合**

```js
const User = {  template: '<div>User {{ $route.params.id }}</div>'}const router = new VueRouter({  routes: [    { path: '/user/:id', component: User }  ]})
```

**通过 props 解耦**

```js
const User = {  props: ['id'],  template: '<div>User {{ id }}</div>'}const router = new VueRouter({  routes: [    { path: '/user/:id', component: User, props: true },    // 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项：    {      path: '/user/:id',      components: { default: User, sidebar: Sidebar },      props: { default: true, sidebar: false }    }  ]})
```

这样你便可以在任何地方使用该组件，使得该组件更易于重用和测试。

### 4.2 布尔模式

如果 `props` 被设置为 `true`，`route.params` 将会被设置为组件属性。

### 4.3 对象模式

如果 `props` 是一个对象，它会被按原样设置为组件属性。当 `props` 是静态的时候有用。

```js
const router = new VueRouter({  routes: [    { path: '/promotion/from-newsletter', component: Promotion, props: { newsletterPopup: false } }  ]})
```

### 4.4 函数模式

你可以创建一个函数返回 `props`。这样你便可以将参数转换成另一种类型，将静态值与基于路由的值结合等等。

```js
const router = new VueRouter({  routes: [    { path: '/search', component: SearchUser, props: (route) => ({ query: route.query.q }) }  ]})
```

URL `/search?q=vue` 会将 `{query: 'vue'}` 作为属性传递给 `SearchUser` 组件。

请尽可能保持 `props` 函数为无状态的，因为它只会在路由发生变化时起作用。如果你需要状态来定义 `props`，请使用包装组件，这样 Vue 才可以对状态变化做出反应。

## 5 HTML5 History 模式

### 5.1 history 模式

`vue-router` 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。

如果不想要很丑的 hash，我们可以用路由的 **history 模式**，这种模式充分利用 `history.pushState` API 来完成 URL 跳转而无须重新加载页面。

```js
const router = new VueRouter({  mode: 'history',  routes: [...]})
```

当你使用 history 模式时，URL 就像正常的 url，例如 `http://yoursite.com/user/id`，也好看！

不过这种模式要玩好，还需要后台配置支持。因为我们的应用是个单页客户端应用，如果后台没有正确的配置，当用户在浏览器直接访问 `http://oursite.com/user/id` 就会返回 404，这就不好看了。

所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 `index.html` 页面，这个页面就是你 app 依赖的页面。

### 5.2 后端配置

#### Apache

```
<IfModule mod_rewrite.c>  RewriteEngine On  RewriteBase /  RewriteRule ^index\.html$ - [L]  RewriteCond %{REQUEST_FILENAME} !-f  RewriteCond %{REQUEST_FILENAME} !-d  RewriteRule . /index.html [L]</IfModule>
```

除了 mod_rewrite，你也可以使用 FallbackResource

#### nginx

```nginx
location / {  try_files $uri $uri/ /index.html;}
```

#### Node.js

```js
const http = require('http')const fs = require('fs')const httpPort = 80http.createServer((req, res) => {  fs.readFile('index.htm', 'utf-8', (err, content) => {    if (err) {      console.log('We cannot open "index.htm" file.')    }    res.writeHead(200, {      'Content-Type': 'text/html; charset=utf-8'    })    res.end(content)  })}).listen(httpPort, () => {  console.log('Server listening on: http://localhost:%s', httpPort)})
```

#### 基于 Node.js 的 Express

对于 Node.js/Express，请考虑使用 [connect-history-api-fallback 中间件](https://github.com/bripkens/connect-history-api-fallback)

#### Internet Information Services (IIS)

1. 安装 [IIS UrlRewrite](https://www.iis.net/downloads/microsoft/url-rewrite)
2. 在你的网站根目录中创建一个 `web.config` 文件，内容如下：

```xml
<?xml version="1.0" encoding="UTF-8"?><configuration>  <system.webServer>    <rewrite>      <rules>        <rule name="Handle History Mode and custom 404/500" stopProcessing="true">          <match url="(.*)" />          <conditions logicalGrouping="MatchAll">            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />          </conditions>          <action type="Rewrite" url="/" />        </rule>      </rules>    </rewrite>  </system.webServer></configuration>
```

#### Caddy

```
rewrite {    regexp .*    to {path} /}
```

#### Firebase 主机

在你的 `firebase.json` 中加入：

```json
{  "hosting": {    "public": "dist",    "rewrites": [      {        "source": "**",        "destination": "/index.html"      }    ]  }}
```

### 5.3 警告

给个警告，因为这么做以后，你的服务器就不再返回 404 错误页面，因为对于所有路径都会返回 `index.html` 文件。为了避免这种情况，你应该在 Vue 应用里面覆盖所有的路由情况，然后在给出一个 404 页面。

```js
const router = new VueRouter({  mode: 'history',  routes: [    { path: '*', component: NotFoundComponent }  ]})
```

或者，如果你使用 Node.js 服务器，你可以用服务端路由匹配到来的 URL，并在没有匹配到路由的时候返回 404，以实现回退。

# 导航守卫

> “导航”表示路由正在发生改变。

正如其名，`vue-router` 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。有多种机会植入路由导航过程中：全局的, 单个路由独享的, 或者组件级的。

记住**参数或查询的改变并不会触发进入/离开的导航守卫**。你可以通过观察 `$route` 对象来应对这些变化，或使用 `beforeRouteUpdate` 的组件内守卫。

## 1 全局守卫

你可以使用 `router.beforeEach` 注册一个全局前置守卫：

```js
const router = new VueRouter({ ... })router.beforeEach((to, from, next) => {  // ...})
```

当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 **等待中**。

每个守卫方法接收三个参数：

- **to: Route**: 即将要进入的目标 [路由对象](https://router.vuejs.org/zh/api/#路由对象)

- **from: Route**: 当前导航正要离开的路由

- next: Function

  : 一定要调用该方法来

   

  resolve

   

  这个钩子。执行效果依赖

   

  ```
  next
  ```

   

  方法的调用参数。

  - **next()**: 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 **confirmed** (确认的)。
  - **next(false)**: 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 `from` 路由对应的地址。
  - **next('/') 或者 next({ path: '/' })**: 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 `next` 传递任意位置对象，且允许设置诸如 `replace: true`、`name: 'home'` 之类的选项以及任何用在 [`router-link` 的 `to` prop](https://router.vuejs.org/zh/api/#to) 或 [`router.push`](https://router.vuejs.org/zh/api/#router-push) 中的选项。
  - **next(error)**: (2.4.0+) 如果传入 `next` 的参数是一个 `Error` 实例，则导航会被终止且该错误会被传递给 [`router.onError()`](https://router.vuejs.org/zh/api/#router-onerror) 注册过的回调。

**确保要调用 next 方法，否则钩子就不会被 resolved。**

## 2 全局解析守卫

> 2.5.0新增

在 2.5.0+ 你可以用 `router.beforeResolve` 注册一个全局守卫。这和 `router.beforeEach` 类似，区别是在导航被确认之前，**同时在所有组件内守卫和异步路由组件被解析之后**，解析守卫就被调用。

## 3 全局后置钩子

你也可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 `next` 函数也不会改变导航本身：

```js
router.afterEach((to, from) => {  // ...})
```

## 4 路由独享的守卫

你可以在路由配置上直接定义 `beforeEnter` 守卫：

```js
const router = new VueRouter({  routes: [    {      path: '/foo',      component: Foo,      beforeEnter: (to, from, next) => {        // ...      }    }  ]})
```

这些守卫与全局前置守卫的方法参数是一样的。

## 5 组件内的守卫

最后，你可以在路由组件内直接定义以下路由导航守卫：

- `beforeRouteEnter`
- `beforeRouteUpdate` (2.2 新增)
- `beforeRouteLeave`

```js
const Foo = {  template: `...`,  beforeRouteEnter (to, from, next) {    // 在渲染该组件的对应路由被 confirm 前调用    // 不！能！获取组件实例 `this`    // 因为当守卫执行前，组件实例还没被创建  },  beforeRouteUpdate (to, from, next) {    // 在当前路由改变，但是该组件被复用时调用    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。    // 可以访问组件实例 `this`  },  beforeRouteLeave (to, from, next) {    // 导航离开该组件的对应路由时调用    // 可以访问组件实例 `this`  }}
```

`beforeRouteEnter` 守卫 **不能** 访问 `this`，因为守卫在导航确认前被调用,因此即将登场的新组件还没被创建。

不过，你可以通过传一个回调给 `next`来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数。

```js
beforeRouteEnter (to, from, next) {  next(vm => {    // 通过 `vm` 访问组件实例  })}
```

注意 `beforeRouteEnter` 是支持给 `next` 传递回调的唯一守卫。对于 `beforeRouteUpdate` 和 `beforeRouteLeave` 来说，`this` 已经可用了，所以**不支持**传递回调，因为没有必要了。

```js
beforeRouteUpdate (to, from, next) {  // just use `this`  this.name = to.params.name  next()}
```

这个离开守卫通常用来禁止用户在还未保存修改前突然离开。该导航可以通过 `next(false)` 来取消。

```js
beforeRouteLeave (to, from , next) {  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')  if (answer) {    next()  } else {    next(false)  }}
```

## 6 完整的导航解析流程

1. 导航被触发。
2. 在失活的组件里调用离开守卫。
3. 调用全局的 `beforeEach` 守卫。
4. 在重用的组件里调用 `beforeRouteUpdate` 守卫 (2.2+)。
5. 在路由配置里调用 `beforeEnter`。
6. 解析异步路由组件。
7. 在被激活的组件里调用 `beforeRouteEnter`。
8. 调用全局的 `beforeResolve` 守卫 (2.5+)。
9. 导航被确认。
10. 调用全局的 `afterEach` 钩子。
11. 触发 DOM 更新。
12. 用创建好的实例调用 `beforeRouteEnter` 守卫中传给 `next` 的回调函数。

# 进阶

## 1 路由元信息

定义路由的时候可以配置 `meta` 字段：

```js
const router = new VueRouter({  routes: [    {      path: '/foo',      component: Foo,      children: [        {          path: 'bar',          component: Bar,          // a meta field          meta: { requiresAuth: true }        }      ]    }  ]})
```

那么如何访问这个 `meta` 字段呢？

首先，我们称呼 `routes` 配置中的每个路由对象为 **路由记录**。路由记录可以是嵌套的，因此，当一个路由匹配成功后，他可能匹配多个路由记录

例如，根据上面的路由配置，`/foo/bar` 这个 URL 将会匹配父路由记录以及子路由记录。

一个路由匹配到的所有路由记录会暴露为 `$route` 对象 (还有在导航守卫中的路由对象) 的 `$route.matched` 数组。因此，我们需要遍历 `$route.matched` 来检查路由记录中的 `meta` 字段。

下面例子展示在全局导航守卫中检查元字段：

```js
router.beforeEach((to, from, next) => {  if (to.matched.some(record => record.meta.requiresAuth)) {    // this route requires auth, check if logged in    // if not, redirect to login page.    if (!auth.loggedIn()) {      next({        path: '/login',        query: { redirect: to.fullPath }      })    } else {      next()    }  } else {    next() // 确保一定要调用 next()  }})
```

## 2 过渡动效

`<router-view>` 是基本的动态组件，所以我们可以用 `<transition>` 组件给它添加一些过渡效果：

```vue
<transition>  <router-view></router-view></transition>
```

[Transition 的所有功能](https://cn.vuejs.org/guide/transitions.html) 在这里同样适用。

### 2.1 单个路由的过渡

上面的用法会给所有路由设置一样的过渡效果，如果你想让每个路由组件有各自的过渡效果，可以在各路由组件内使用 `<transition>` 并设置不同的 name。

```js
const Foo = {  template: `    <transition name="slide">      <div class="foo">...</div>    </transition>  `}const Bar = {  template: `    <transition name="fade">      <div class="bar">...</div>    </transition>  `}
```

## 2.2 基于路由的动态过渡

还可以基于当前路由与目标路由的变化关系，动态设置过渡效果：

```vue
<!-- 使用动态的 transition name --><transition :name="transitionName">  <router-view></router-view></transition>// 接着在父组件内// watch $route 决定使用哪种过渡watch: {  '$route' (to, from) {    const toDepth = to.path.split('/').length    const fromDepth = from.path.split('/').length    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'  }}
```

## 3 数据获取

有时候，进入某个路由后，需要从服务器获取数据。例如，在渲染用户信息时，你需要从服务器获取用户的数据。我们可以通过两种方式来实现：

- **导航完成之后获取**：先完成导航，然后在接下来的组件生命周期钩子中获取数据。在数据获取期间显示“加载中”之类的指示。
- **导航完成之前获取**：导航完成前，在路由进入的守卫中获取数据，在数据获取成功后执行导航。

从技术角度讲，两种方式都不错 —— 就看你想要的用户体验是哪种。

### 3.1 导航完成后获取数据

当你使用这种方式时，我们会马上导航和渲染组件，然后在组件的 `created` 钩子中获取数据。这让我们有机会在数据获取期间展示一个 loading 状态，还可以在不同视图间展示不同的 loading 状态。

假设我们有一个 `Post` 组件，需要基于 `$route.params.id` 获取文章数据：

```vue
<template>  <div class="post">    <div class="loading" v-if="loading">      Loading...    </div>    <div v-if="error" class="error">      {{ error }}    </div>    <div v-if="post" class="content">      <h2>{{ post.title }}</h2>      <p>{{ post.body }}</p>    </div>  </div></template>export default {  data () {    return {      loading: false,      post: null,      error: null    }  },  created () {    // 组件创建完后获取数据，    // 此时 data 已经被 observed 了    this.fetchData()  },  watch: {    // 如果路由有变化，会再次执行该方法    '$route': 'fetchData'  },  methods: {    fetchData () {      this.error = this.post = null      this.loading = true      // replace getPost with your data fetching util / API wrapper      getPost(this.$route.params.id, (err, post) => {        this.loading = false        if (err) {          this.error = err.toString()        } else {          this.post = post        }      })    }  }}
```

### 3.2 在导航完成前获取数据

通过这种方式，我们在导航转入新的路由前获取数据。我们可以在接下来的组件的 `beforeRouteEnter`守卫中获取数据，当数据获取成功后只调用 `next` 方法。

```js
export default {  data () {    return {      post: null,      error: null    }  },  beforeRouteEnter (to, from, next) {    getPost(to.params.id, (err, post) => {      next(vm => vm.setData(err, post))    })  },  // 路由改变前，组件就已经渲染完了  // 逻辑稍稍不同  beforeRouteUpdate (to, from, next) {    this.post = null    getPost(to.params.id, (err, post) => {      this.setData(err, post)      next()    })  },  methods: {    setData (err, post) {      if (err) {        this.error = err.toString()      } else {        this.post = post      }    }  }}
```

在为后面的视图获取数据时，用户会停留在当前的界面，因此建议在数据获取期间，显示一些进度条或者别的指示。如果数据获取失败，同样有必要展示一些全局的错误提醒。

## 4 滚动行为

### 4.1 滚动行为

使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。 `vue-router` 能做到，而且更好，它让你可以自定义路由切换时页面如何滚动。

**注意: 这个功能只在支持 history.pushState 的浏览器中可用。**

当创建一个 Router 实例，你可以提供一个 `scrollBehavior` 方法：

```js
const router = new VueRouter({  routes: [...],  scrollBehavior (to, from, savedPosition) {    // return 期望滚动到哪个的位置  }})
```

`scrollBehavior` 方法接收 `to` 和 `from` 路由对象。第三个参数 `savedPosition` 当且仅当 `popstate` 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。

这个方法返回滚动位置的对象信息，长这样：

- `{ x: number, y: number }`
- `{ selector: string, offset? : { x: number, y: number }}` (offset 只在 2.6.0+ 支持)

如果返回一个 falsy (译者注：falsy 不是 `false`，[参考这里](https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy))的值，或者是一个空对象，那么不会发生滚动。

举例：

```js
scrollBehavior (to, from, savedPosition) {  return { x: 0, y: 0 }}
```

对于所有路由导航，简单地让页面滚动到顶部。

返回 `savedPosition`，在按下 后退/前进 按钮时，就会像浏览器的原生表现那样：

```js
scrollBehavior (to, from, savedPosition) {  if (savedPosition) {    return savedPosition  } else {    return { x: 0, y: 0 }  }}
```

如果你要模拟“滚动到锚点”的行为：

```js
scrollBehavior (to, from, savedPosition) {  if (to.hash) {    return {      selector: to.hash    }  }}
```

### 4.2 异步滚动

> 2.8.0 新增

你也可以返回一个 Promise 来得出预期的位置描述：

```
scrollBehavior (to, from, savedPosition) {  return new Promise((resolve, reject) => {    setTimeout(() => {      resolve({ x: 0, y: 0 })    }, 500)  })}
```

将其挂载到从页面级别的过渡组件的事件上，令其滚动行为和页面过渡一起良好运行是可能的。但是考虑到用例的多样性和复杂性，我们仅提供这个原始的接口，以支持不同用户场景的具体实现。

## 5 路由懒加载

### 5.1 懒加载

当打包构建应用时，Javascript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。

结合 Vue 的[异步组件](https://cn.vuejs.org/v2/guide/components-dynamic-async.html#异步组件)和 Webpack 的[代码分割功能](https://doc.webpack-china.org/guides/code-splitting-async/#require-ensure-/)，轻松实现路由组件的懒加载。

首先，可以将异步组件定义为返回一个 Promise 的工厂函数 (该函数返回的 Promise 应该 resolve 组件本身)：

```js
const Foo = () => Promise.resolve({ /* 组件定义对象 */ })
```

第二，在 Webpack 2 中，我们可以使用[动态 import](https://github.com/tc39/proposal-dynamic-import)语法来定义代码分块点 (split point)：

```js
import('./Foo.vue') // 返回 Promise
```

注意

如果您使用的是 Babel，你将需要添加 [`syntax-dynamic-import`](https://babeljs.io/docs/plugins/syntax-dynamic-import/) 插件，才能使 Babel 可以正确地解析语法。

结合这两者，这就是如何定义一个能够被 Webpack 自动代码分割的异步组件。

```js
const Foo = () => import('./Foo.vue')
```

在路由配置中什么都不需要改变，只需要像往常一样使用 `Foo`：

```js
const router = new VueRouter({  routes: [    { path: '/foo', component: Foo }  ]})
```

### 5.2 把组件按组分块

有时候我们想把某个路由下的所有组件都打包在同个异步块 (chunk) 中。只需要使用 [命名 chunk](https://webpack.js.org/guides/code-splitting-require/#chunkname)，一个特殊的注释语法来提供 chunk name (需要 Webpack > 2.4)。

```js
const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')const Bar = () => import(/* webpackChunkName: "group-foo" */ './Bar.vue')const Baz = () => import(/* webpackChunkName: "group-foo" */ './Baz.vue')
```

Webpack 会将任何一个异步模块与相同的块名称组合到相同的异步块中。

# Vuex

本章主要介绍V，Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式**。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。本章内容包括：

- [关于状态管理](http://learn.fuming.site/front-end/vue/Vuex/状态管理.html)
- [Vuex的基本使用](http://learn.fuming.site/front-end/vue/Vuex/Vuex的基本使用.html)
- [核心概念-State](http://learn.fuming.site/front-end/vue/Vuex/State.html)
- [核心概念-Getter](http://learn.fuming.site/front-end/vue/Vuex/getter.html)
- [核心概念-Mutation](http://learn.fuming.site/front-end/vue/Vuex/Mutation.html)
- [核心概念-Action](http://learn.fuming.site/front-end/vue/Vuex/Action.html)
- [核心概念-Module](http://learn.fuming.site/front-end/vue/Vuex/Module.html)
- [项目结构](http://learn.fuming.site/front-end/vue/Vuex/项目结构.html)
- [插件](http://learn.fuming.site/front-end/vue/Vuex/插件.html)
- [严格模式](http://learn.fuming.site/front-end/vue/Vuex/严格模式.html)
- [表单处理](http://learn.fuming.site/front-end/vue/Vuex/表单处理.html)
- [热重载](http://learn.fuming.site/front-end/vue/Vuex/热重载.html)
