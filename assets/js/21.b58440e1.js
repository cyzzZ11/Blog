(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{466:function(n,s,a){"use strict";a.r(s);var t=a(27),e=Object(t.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"防抖和节流的实现与实际应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防抖和节流的实现与实际应用场景"}},[n._v("#")]),n._v(" 防抖和节流的实现与实际应用场景")]),n._v(" "),a("p",[n._v("防抖实际运用场景：input输入框 onChange的时候触发查询接口调用debounce是每次触发时清除上一次的callback，直到最后一次输入完成之后，间隔指定时间后再去调用callback。 例如用户在input框中不断的输入文字，只有在用户停止输入后一段时间才会去调用查询接口；防抖就是防止用户短时间内连续多次触发事件， 可以用定时器控制一定的时间内不能再触发，如果再触发就return出去，等时间到了后再关闭定时器，用户就能再次触发该事件；")]),n._v(" "),a("p",[n._v("节流运用场景：页面滚动onScroll时需要做一些操作的时候。区别于防抖的点在于 防抖可能只会触发一次，而节流在连续的过程中每间隔 指定的时间 就会触发一次； 节流是解决一个需要频繁触发的事件，但防止事件触发太多次，所以我们用定时器设置每当用户触发了这个事件后重新计时")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 防抖\nfunction debounce(fn,wait){\n    let timer=null\n    return function(){\n        let args=arguments\n        clearTimeout(timer)\n        timer=setTimeout(()=>{\n            fn.apply(this,args)\n        },wait)\n    }\n}\nfunction f1(){\n    console.log('111')\n}\nvar db=debounce(f1,500)\n\n// 节流\nfunction throttle(fn,wait){\n    let timer=null\n    return function(){\n        let args=arguments\n        if(!timer){\n            timer=setTimeout(()=>{\n                timer=null\n                fn.apply(this,args)\n            },wait)\n        }      \n    }\n}\n\nfunction f2(){\n    console.log('222')\n}\nvar db=throttle(f2,500)\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);