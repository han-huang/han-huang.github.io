(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21e4edfe"],{"0257":function(t,e,r){t.exports=r.p+"img/9789864344895.ba45f72b.jpg"},"0565":function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("transition-group",{staticClass:"relative center",style:t.dimension,attrs:{name:"fade",tag:"div"}},t._l([t.currentIndex],(function(e){return r("div",{key:e,staticClass:"center"},[r("img",{style:t.dimension,attrs:{src:t.currentImg}})])})),0),r("div",{staticClass:"center"},[r("a",{staticClass:"prev",attrs:{href:"javascript:void(0)"},on:{click:t.prev}},[t._v("❮")]),t._l(t.images,(function(e,i){return r("input",{key:i,attrs:{type:"radio",id:"slide"+i},domProps:{checked:t.currentIndex===i},on:{click:function(e){return t.selected(i)}}})})),r("a",{staticClass:"next",attrs:{href:"javascript:void(0)"},on:{click:t.next}},[t._v("❯")])],2)],1)},s=[],a={name:"SliderSecond",props:{dimension:{type:String,default:"height:300px;max-width:100%"}},data:function(){return{images:["https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg","https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg","https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg","https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"],timer:null,currentIndex:0}},mounted:function(){this.startSlide()},methods:{startSlide:function(){this.timer=setInterval(this.next,4e3)},next:function(){this.currentIndex=(this.currentIndex+1)%this.images.length,this.resetTimer()},prev:function(){this.currentIndex=(this.currentIndex+this.images.length-1)%this.images.length,this.resetTimer()},selected:function(t){this.currentIndex=t,this.resetTimer()},resetTimer:function(){clearInterval(this.timer),this.timer=setInterval(this.next,4e3)}},computed:{currentImg:function(){return this.images[Math.abs(this.currentIndex)%this.images.length]}}},n=a,o=(r("b2cf"),r("2877")),c=Object(o["a"])(n,i,s,!1,null,null,null);e["a"]=c.exports},"0ba0":function(t,e,r){t.exports=r.p+"img/9789864344994.a3033bf0.jpg"},"1a9c":function(t,e,r){t.exports=r.p+"img/9789865024895.813d53ee.jpg"},"2aec":function(t,e,r){t.exports=r.p+"img/9789865026011.61b49d41.webp"},"2c2b":function(t,e,r){},3191:function(t,e,r){"use strict";var i=[{src:r("3b5a"),url:"/product/9789865025977"},{src:r("1a9c"),url:"/product/9789865024895"},{src:r("bafa"),url:"/product/9789863126263"},{src:r("fd2f"),url:"/product/9789863126331"},{src:r("0ba0"),url:"/product/9789864344994"},{src:r("ae77"),url:"/product/9789864342662"},{src:r("0257"),url:"/product/9789864344895"},{src:r("f492"),url:"/product/9789864344130"},{src:r("36b0"),url:"/product/9789864342945"},{src:r("63f4"),url:"/product/9789864344987"},{src:r("a447"),url:"/product/9789865024864"}],s=[{title:"無瑕的程式碼－整潔的軟體設計與架構篇 (Clean Architecture: A Craftsman's Guide to Software Structure and Design) ",img:r("36b0"),url:"/product/9789864342945"},{title:"為你自己學 Git",img:r("ae77"),url:"/product/9789864342662"},{title:"依賴注入：原理、實作與設計模式 (Dependency Injection: Principles, Practices, Patterns, 2/e)",img:r("63f4"),url:"/product/9789864344987"},{title:"Kubernetes：建置與執行, 2/e (Kubernetes: Up and Running: Dive into the Future of Infrastructure, 2/e)",img:r("1a9c"),url:"/product/9789865024895"},{title:"精通 Python｜運用簡單的套件進行現代運算, 2/e",img:r("a447"),url:"/product/9789865024864"}],a=[{title:"深度學習的數學地圖 - 用 Python 實作神經網路的數學模型",img:r("bafa"),url:"/product/9789863126263"},{title:"決心打底！Python 深度學習基礎養成",img:r("fd2f"),url:"/product/9789863126331"},{title:"0 陷阱！0 誤解！8 天重新認識 JavaScript！",img:r("f492"),url:"/product/9789864344130"},{title:"金魚都能懂的 CSS 選取器：金魚都能懂了你還怕學不會嗎",img:r("0ba0"),url:"/product/9789864344994"},{title:"讓 TypeScript 成為你全端開發的 ACE！",img:r("0257"),url:"/product/9789864344895"}],n=[{title:"架構模式｜使用 Python",img:r("a726"),url:"/product/9789865025960"},{title:"Python 自動化的樂趣｜搞定重複瑣碎&單調無聊的工作, 2/e",img:r("3b5a"),url:"/product/9789865025977"},{title:"邁向 Linux 工程師之路：Superuser 一定要懂的技術與運用, 2/e",img:r("dc6f"),url:"/product/9789864344383"},{title:"網站可靠性工程工作手冊｜導入SRE的實用方法",img:r("2aec"),url:"/product/9789865026011"},{title:"Python 非同步設計｜使用 Asyncio",img:r("5910"),url:"/product/9789865025915"}],o=[{title:"精通 Python｜運用簡單的套件進行現代運算, 2/e",img:r("a447"),url:"/product/9789865024864"},{title:"決心打底！Python 深度學習基礎養成",img:r("fd2f"),url:"/product/9789863126331"},{title:"架構模式｜使用 Python",img:r("a726"),url:"/product/9789865025960"},{title:"Python 自動化的樂趣｜搞定重複瑣碎&單調無聊的工作, 2/e",img:r("3b5a"),url:"/product/9789865025977"},{title:"邁向 Linux 工程師之路：Superuser 一定要懂的技術與運用, 2/e",img:r("dc6f"),url:"/product/9789864344383"}];e["a"]={newBookReleases:i,weeklyHot:s,monthlyHot:a,seasonalHot:n,yearlyHot:o}},"36b0":function(t,e,r){t.exports=r.p+"img/9789864342945.06635376.jpg"},"3b5a":function(t,e,r){t.exports=r.p+"img/9789865025977.eb497a30.jpg"},5910:function(t,e,r){t.exports=r.p+"img/9789865025915.bcbab43f.webp"},"63f4":function(t,e,r){t.exports=r.p+"img/9789864344987.64a2f4ec.jpg"},a447:function(t,e,r){t.exports=r.p+"img/9789865024864.fd848747.jpg"},a726:function(t,e,r){t.exports=r.p+"img/9789865025960.a2568bdb.webp"},ae77:function(t,e,r){t.exports=r.p+"img/9789864342662.8b3e70ce.jpg"},b2cf:function(t,e,r){"use strict";var i=r("2c2b"),s=r.n(i);s.a},b487:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("transition-group",{staticClass:"relative center mw-100",style:t.dimension,attrs:{name:"fade",tag:"div"}},t._l([t.currentIndex],(function(e){return r("div",{key:e,staticClass:"center"},[r("router-link",{attrs:{to:t.currentUrl}},[r("img",{staticClass:"mw-100",style:t.dimension,attrs:{src:t.currentImg}})])],1)})),0),r("div",{staticClass:"center"},[r("a",{staticClass:"prev",attrs:{href:"javascript:void(0)"},on:{click:t.prev}},[r("font-awesome-icon",{style:{color:"LightSlateGrey"},attrs:{icon:["fas","chevron-circle-left"],size:"lg"}})],1),t._l(t.images,(function(e,i){return r("span",{key:i,class:t.dotClass(t.currentIndex===i),attrs:{id:"slide"+i},on:{click:function(e){return t.selected(i)}}})})),r("a",{staticClass:"next",attrs:{href:"javascript:void(0)"},on:{click:t.next}},[r("font-awesome-icon",{style:{color:"LightSlateGrey"},attrs:{icon:["fas","chevron-circle-right"],size:"lg"}})],1)],2)],1)},s=[],a=r("ecee"),n=r("c074");a["c"].add(n["e"],n["f"]);var o={name:"SliderThird",props:{dimension:{type:String,default:"height:300px;"},images:{type:Array,default:[{src:"https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",url:"#1"},{src:"https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",url:"#2"},{src:"https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg",url:"#3"},{src:"https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg",url:"#4"}]}},data:function(){return{timer:null,currentIndex:0}},mounted:function(){this.startSlide()},methods:{startSlide:function(){this.timer=setInterval(this.next,4e3)},next:function(){this.currentIndex=(this.currentIndex+1)%this.images.length,this.resetTimer()},prev:function(){this.currentIndex=(this.currentIndex+this.images.length-1)%this.images.length,this.resetTimer()},selected:function(t){this.currentIndex=t,this.resetTimer()},resetTimer:function(){clearInterval(this.timer),this.timer=setInterval(this.next,4e3)},dotClass:function(t){return{dot:!t,"dot-active":t,"mx-1":!0}}},computed:{currentImg:function(){return this.images[Math.abs(this.currentIndex)%this.images.length].src},currentUrl:function(){return this.images[Math.abs(this.currentIndex)%this.images.length].url}}},c=o,l=(r("e627"),r("2877")),d=Object(l["a"])(c,i,s,!1,null,null,null);e["a"]=d.exports},b6c9:function(t,e,r){},bafa:function(t,e,r){t.exports=r.p+"img/9789863126263.2525a3f0.jpg"},bb51:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-container",[i("MyHeader"),i("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{id:"loading_spinner"}},[i("font-awesome-icon",{attrs:{icon:["fas","spinner"],pulse:"",size:"3x"}}),i("span",{staticClass:"sr-only"},[t._v("Loading...")])],1),i("b-row",{staticClass:"mt-4"},[i("b-col",{attrs:{lg:"12"}},[i("h5",{staticClass:"bottom-border"},[t._v("最近新書")])])],1),i("b-row",{staticClass:"mt-3"},[i("b-col",{attrs:{lg:"12"}},[i("splide",{attrs:{slides:t.slides,options:t.options}},t._l(t.slides,(function(t){return i("splide-slide",{key:t.index},[i("a",{attrs:{href:t.url,target:"_blank"}},[i("img",{attrs:{src:t.src}})])])})),1)],1)],1),i("b-row",{staticClass:"mt-5"},[i("b-tabs",{attrs:{"content-class":"mt-3",justified:""}},t._l(t.tabTiles,(function(e,r){return i("b-tab",{key:r,attrs:{title:e}},[i("b-card-group",{attrs:{deck:""}},t._l(t.hotProducts[r],(function(e){return i("b-card",{key:e.index,attrs:{"border-variant":"white"}},[i("a",{staticClass:"text-decoration-none",attrs:{href:e.url,target:"_blank"}},[i("b-card-img",{attrs:{src:e.img,alt:e.img,top:""}})],1),i("b-card-text",[i("a",{staticClass:"text-decoration-none",attrs:{href:e.url,target:"_blank"}},[i("small",{staticClass:"text-muted"},[t._v(t._s(e.title))])])])],1)})),1)],1)})),1)],1),i("MyFooter"),i("b-row",{staticClass:"mt-1"},[i("b-col",{attrs:{lg:"3"}},[i("div",{staticClass:"list-group"},[i("li",{staticClass:"list-group-item list-group-item-primary"},[t._v("書目分類")]),i("TreeMenu",{attrs:{listData:t.list}})],1)]),i("b-col",{attrs:{lg:"9"}},[i("b-col",{attrs:{md:"12"}},[i("SliderThird",{attrs:{images:t.banner,dimension:t.bannerDimension}})],1),i("b-col",{attrs:{md:"12"}},[i("div",[i("b-card",{attrs:{overlay:"","img-src":r("f2ac"),"img-alt":"Card Image","text-variant":"black",title:"Image Overlay","sub-title":"Subtitle"}},[i("b-card-text",[t._v("Some quick example text to build on the card and make up the bulk of the card's content.")])],1)],1)]),i("b-col",{attrs:{md:"12"}},[i("b-tabs",{staticClass:"mt-5",attrs:{"content-class":"mt-3",justified:""}},[i("b-tab",{attrs:{title:"First",active:""}},[i("p",[t._v("I'm the first tab")])]),i("b-tab",{attrs:{title:"Second"}},[i("p",[t._v("I'm the second tab")])]),i("b-tab",{attrs:{title:"Long title"}},[i("p",[t._v("I'm the tab with the very, very long title")])]),i("b-tab",{attrs:{title:"Disabled",disabled:""}},[i("p",[t._v("I'm a disabled tab!")])])],1)],1)],1)],1),i("div",{staticClass:"mt-3"},[i("b-tabs",{attrs:{"content-class":"mt-3",justified:""}},[i("b-tab",{attrs:{title:"First",active:""}},[i("p",[t._v("I'm the first tab")])]),i("b-tab",{attrs:{title:"Second"}},[i("p",[t._v("I'm the second tab")])]),i("b-tab",{attrs:{title:"Very, very long title"}},[i("p",[t._v("I'm the tab with the very, very long title")])]),i("b-tab",{attrs:{title:"Disabled",disabled:""}},[i("p",[t._v("I'm a disabled tab!")])])],1)],1),i("b-row",[i("b-col",{attrs:{cols:"12"}},[i("SliderSecond",{staticClass:"mt-3 mb-3",attrs:{dimension:t.myDimension}})],1)],1),i("b-row",[i("b-col",{attrs:{lg:"12"}},[i("splide",{attrs:{slides:t.slides,options:t.options}},t._l(t.slides,(function(t){return i("splide-slide",{key:t.index},[i("a",{attrs:{href:t.url,target:"_blank"}},[i("img",{attrs:{src:t.src}})])])})),1)],1)],1),i("footer",{staticClass:"text-center bg-white text-dark mt-5"},[i("p",[t._v(" Copyright "),i("font-awesome-icon",{attrs:{icon:["far","copyright"]}}),t._v(" DemoSite ")],1),i("ol",{staticClass:"breadcrumb justify-content-center bg-white"},[i("li",{staticClass:"breadcrumb-item"},[i("a",{staticClass:"text-decoration-none text-dark",attrs:{href:"#"}},[t._v("網站地圖")])]),i("li",{staticClass:"breadcrumb-item"},[i("a",{staticClass:"text-decoration-none text-dark",attrs:{href:"#"}},[t._v("隱私權條款")])]),i("li",{staticClass:"breadcrumb-item"},[i("a",{staticClass:"text-decoration-none text-dark",attrs:{href:"#"}},[t._v("服務條款")])]),i("li",{staticClass:"breadcrumb-item"},[i("a",{staticClass:"text-decoration-none text-dark",attrs:{href:"#"}},[t._v("人力招聘")])]),i("li",{staticClass:"breadcrumb-item"},[i("a",{staticClass:"text-decoration-none text-secondary",attrs:{href:"#"}},[t._v("聯絡我們")])])])])],1)},s=[],a=r("029e"),n=r("a3d9"),o=r("9839"),c=r("3191"),l=r("a49b"),d=r("0565"),u=r("b487"),p=r("ecee"),m=r("c074");p["c"].add(m["n"]);var b=[c["a"].weeklyHot,c["a"].monthlyHot,c["a"].seasonalHot,c["a"].yearlyHot],h={name:"Home",data:function(){return{slide:0,sliding:null,list:l["b"].treeMenu,loading:!1,banner:l["b"].banner,bannerDimension:"height:180px;",myDimension:"height:500px;max-width:100%;",tinyML:r("f2ac"),tabTiles:l["b"].tabTiles,hotProducts:b,weeklyHot:c["a"].weeklyHot,monthlyHot:c["a"].monthlyHot,seasonalHot:c["a"].seasonalHot,yearlyHot:c["a"].yearlyHot,options:{type:"loop",arrows:!0,autoplay:!0,interval:2e3,trimSpace:!0,pagination:!0,rewind:!0,autoWidth:!0,perPage:5,perMove:1,gap:"1rem",focus:"center"},slides:c["a"].newBookReleases}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;console.log(t),console.log("document.documentElement.scrollTop: "+document.documentElement.scrollTop),console.log("window.pageYOffset: "+window.pageYOffset),console.log("document.body.scrollTop: "+document.body.scrollTop);var e=window.innerHeight;console.log("windowHeight: "+e),console.log("document.body.clientHeight: "+document.body.clientHeight),t+e+250>=document.body.clientHeight?(this.loading=!0,console.log("this.loading: "+this.loading)):this.loading=!1}},components:{MyHeader:o["a"],TreeMenu:a["a"],MyFooter:n["a"],SliderSecond:d["a"],SliderThird:u["a"]},mounted:function(){},destroyed:function(){}},g=h,f=(r("fb49"),r("2877")),v=Object(f["a"])(g,i,s,!1,null,"202cf61d",null);e["default"]=v.exports},dc6f:function(t,e,r){t.exports=r.p+"img/9789864344383.d71d3826.webp"},e627:function(t,e,r){"use strict";var i=r("f8bb"),s=r.n(i);s.a},f2ac:function(t,e,r){t.exports=r.p+"img/TinyML.bee1e208.webp"},f492:function(t,e,r){t.exports=r.p+"img/9789864344130.879ce843.jpg"},f8bb:function(t,e,r){},fb49:function(t,e,r){"use strict";var i=r("b6c9"),s=r.n(i);s.a},fd2f:function(t,e,r){t.exports=r.p+"img/9789863126331.de34b8e0.jpg"}}]);
//# sourceMappingURL=chunk-21e4edfe.8fe29d64.js.map