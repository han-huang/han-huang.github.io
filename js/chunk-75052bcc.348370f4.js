(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75052bcc"],{"1c17":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("SliderThird")],1)},i=[],s=r("b487"),c={name:"app",components:{SliderThird:s["a"]}},a=c,o=(r("b380"),r("2877")),l=Object(o["a"])(a,n,i,!1,null,"e2441d10",null);e["default"]=l.exports},b380:function(t,e,r){"use strict";var n=r("f9c9"),i=r.n(n);i.a},b487:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("transition-group",{staticClass:"relative center mw-100",style:t.dimension,attrs:{name:"fade",tag:"div"}},t._l([t.currentIndex],(function(e){return r("div",{key:e,staticClass:"center"},[r("router-link",{attrs:{to:t.currentUrl}},[r("img",{staticClass:"mw-100",style:t.dimension,attrs:{src:t.currentImg}})])],1)})),0),r("div",{staticClass:"center"},[r("a",{staticClass:"prev",attrs:{href:"javascript:void(0)"},on:{click:t.prev}},[r("font-awesome-icon",{style:{color:"LightSlateGrey"},attrs:{icon:["fas","chevron-circle-left"],size:"lg"}})],1),t._l(t.images,(function(e,n){return r("span",{key:n,class:t.dotClass(t.currentIndex===n),attrs:{id:"slide"+n},on:{click:function(e){return t.selected(n)}}})})),r("a",{staticClass:"next",attrs:{href:"javascript:void(0)"},on:{click:t.next}},[r("font-awesome-icon",{style:{color:"LightSlateGrey"},attrs:{icon:["fas","chevron-circle-right"],size:"lg"}})],1)],2)],1)},i=[],s=r("ecee"),c=r("c074");s["c"].add(c["e"],c["f"]);var a={name:"SliderThird",props:{dimension:{type:String,default:"height:300px;"},images:{type:Array,default:[{src:"https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",url:"#1"},{src:"https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",url:"#2"},{src:"https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg",url:"#3"},{src:"https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg",url:"#4"}]}},data:function(){return{timer:null,currentIndex:0}},mounted:function(){this.startSlide()},methods:{startSlide:function(){this.timer=setInterval(this.next,4e3)},next:function(){this.currentIndex=(this.currentIndex+1)%this.images.length,this.resetTimer()},prev:function(){this.currentIndex=(this.currentIndex+this.images.length-1)%this.images.length,this.resetTimer()},selected:function(t){this.currentIndex=t,this.resetTimer()},resetTimer:function(){clearInterval(this.timer),this.timer=setInterval(this.next,4e3)},dotClass:function(t){return{dot:!t,"dot-active":t,"mx-1":!0}}},computed:{currentImg:function(){return this.images[Math.abs(this.currentIndex)%this.images.length].src},currentUrl:function(){return this.images[Math.abs(this.currentIndex)%this.images.length].url}}},o=a,l=(r("e627"),r("2877")),u=Object(l["a"])(o,n,i,!1,null,null,null);e["a"]=u.exports},e627:function(t,e,r){"use strict";var n=r("f8bb"),i=r.n(n);i.a},f8bb:function(t,e,r){},f9c9:function(t,e,r){}}]);
//# sourceMappingURL=chunk-75052bcc.348370f4.js.map