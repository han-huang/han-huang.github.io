(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8333df7e"],{"029e":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.listData,(function(e,r){return n("ListMenu",{key:r,attrs:{nodes:e.nodes,depth:0,label:e.label,url:e.url},on:{hide:t.hide},scopedSlots:t._u([{key:"listMenu",fn:function(){},proxy:!0}],null,!0)})})),1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.nodes?t._t("listMenu",[n("div",{staticClass:"list-group"},[n("button",{staticClass:"list-group-item list-group-item-action",style:t.indent,attrs:{type:"button"},on:{click:t.toggleChildren}},[t._v(" "+t._s(t.label)+" "),n("span"),n("font-awesome-icon",{attrs:{icon:["fas",t.iconClasses]}})],1),t._l(t.nodes,(function(e,r){return t.showChildren?n("ListMenu",{key:r,attrs:{nodes:e.nodes,label:e.label,url:e.url,depth:t.depth+1},on:{hide:t.hide}}):t._e()}))],2)]):t._t("listMenu",[n("router-link",{staticClass:"list-group-item list-group-item-action",style:t.indent,attrs:{to:t.url},on:{click:t.hide}},[t._v(t._s(t.label))])])],2)},a=[],s=n("ecee"),c=n("c074");s["c"].add(c["d"],c["c"]);var u={name:"ListMenu",props:["nodes","label","url","depth"],data:function(){return{showChildren:!1}},computed:{iconClasses:function(){return this.showChildren?"caret-up":"caret-down"},indent:function(){return{"padding-left":"".concat(20+10*this.depth,"px")}}},methods:{toggleChildren:function(){this.showChildren=!this.showChildren},hide:function(){this.$emit("hide")}},mounted:function(){}},l=u,f=n("2877"),d=Object(f["a"])(l,i,a,!1,null,"4eb4e325",null),b=d.exports,p={name:"TreeMenu",props:{listData:Array},components:{ListMenu:b},mounted:function(){},methods:{hide:function(){this.$emit("hide")}}},h=p,m=Object(f["a"])(h,r,o,!1,null,"002ca329",null);e["a"]=m.exports},"057f":function(t,e,n){var r=n("fc6a"),o=n("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?s(t):o(r(t))}},"24ec":function(t,e,n){},"4de4":function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").filter,i=n("1dde"),a=n("ae40"),s=i("filter"),c=a("filter");r({target:"Array",proto:!0,forced:!s||!c},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var r=n("ade3");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"746f":function(t,e,n){var r=n("428f"),o=n("5135"),i=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},9839:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{attrs:{sticky:"",toggleable:"lg",type:"light",variant:"info"}},[n("b-navbar-brand",{attrs:{href:"javascript:void(0)"}},[n("b-icon-arrow-bar-right",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar",modifiers:{sidebar:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-light.bottomright",value:"側邊選單",expression:"'側邊選單'",modifiers:{hover:!0,"v-light":!0,bottomright:!0}}]})],1),n("b-sidebar",{attrs:{id:"sidebar",shadow:""},scopedSlots:t._u([{key:"title",fn:function(){return[n("span",{},[t._v("書目分類")])]},proxy:!0},{key:"default",fn:function(e){var r=e.hide;return[n("div",{staticClass:"list-group"},[n("TreeMenu",{attrs:{listData:t.list},on:{hide:r}})],1)]}}])}),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:"/"}},[n("font-awesome-icon",{attrs:{icon:["fas","home"]}}),t._v(" 回首頁 ")],1),t.isAuthenticated?n("b-nav-item",{on:{click:t.logout}},[n("font-awesome-icon",{attrs:{icon:["fas","sign-out-alt"]}}),t._v(" 登出 ")],1):n("b-nav-item",{attrs:{to:"/login"}},[n("font-awesome-icon",{attrs:{icon:["fas","sign-in-alt"]}}),t._v(" 登入 ")],1),n("b-nav-item",{attrs:{to:{path:"/query"}}},[n("font-awesome-icon",{attrs:{icon:["far","list-alt"]}}),t._v(" 查詢訂單 ")],1),n("b-nav-item",{attrs:{to:"/shoppingcart"}},[n("div",{on:{mouseenter:t.refresh}},[n("b-icon-cart-fill",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-light.bottomright",value:"購物車",expression:"'購物車'",modifiers:{hover:!0,"v-light":!0,bottomright:!0}}]}),n("b-badge",{staticClass:"align-top",staticStyle:{"margin-top":"-5px","margin-left":"-5px"},attrs:{pill:"",variant:"light"}},[t._v(t._s(t.productItems))])],1)]),t.isAuthenticated?n("b-nav-item",[t._v(" "+t._s(t.getUserChName)+" 您好 ")]):t._e()],1)],1)],1)},o=[],i=n("5530"),a=n("2f62"),s=n("a49b"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown"},[n("button",{class:t.dropdownBtnClass,attrs:{type:"button",id:t.btnID,"aria-haspopup":"true","aria-expanded":"false",onmouseover:"this.style.background='#17a2b8';this.style.borderColor='#17a2b8'",onmouseout:"this.style.background='#17a2b8'"}},[t._v(t._s(t.menuData.name))]),n("ul",{staticClass:"dropdown-menu",attrs:{role:"menu","aria-labelledby":"dropdownMenu"}},t._l(t.menuData.children,(function(t,e){return n("SubMenu",{key:e,attrs:{item:t}})})),1)])},u=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isSubmenu?n("li",{staticClass:"dropdown-submenu"},[n("span",{staticClass:"dropdown-item"},[t._v(t._s(t.item.name))]),n("ul",{staticClass:"dropdown-menu"},t._l(t.item.children,(function(t,e){return n("SubMenu",{key:e,attrs:{item:t}})})),1)]):n("li",{staticClass:"dropdown-item"},[n("router-link",{staticClass:"text-decoration-none",attrs:{to:t.item.url}},[t._v(t._s(t.item.name))])],1)},f=[],d={name:"SubMenu",props:{item:Object},computed:{isSubmenu:function(){return this.item.children&&this.item.children.length}}},b=d,p=(n("ed4a"),n("2877")),h=Object(p["a"])(b,l,f,!1,null,"8f14cb0c",null),m=h.exports,v={name:"DropDownMenu",props:{menuData:Object,dropdownBtnClass:String,btnID:String},components:{SubMenu:m}},g=v,y=(n("daf7"),Object(p["a"])(g,c,u,!1,null,"6e6f1cb6",null)),w=y.exports,O=n("029e"),_=n("ecee"),C=n("c074"),j=n("b702");_["c"].add(C["g"],C["l"],C["m"],j["d"]);var S={name:"MyHeader",data:function(){return{menuData:s["b"].menuData,btnClass:s["b"].btnClass,btnID:s["b"].btnID,list:s["b"].treeMenu,form:{search:""}}},components:{DropDownMenu:w,TreeMenu:O["a"]},mounted:function(){},computed:Object(i["a"])({productItems:function(){return this.$store.getters["cart/cartProducts"].length},getUserChName:function(){return this.currentUser.chName}},Object(a["c"])("auth",["isAuthenticated","currentUser"])),methods:{refresh:function(){this.$store.dispatch("products/refresh"),this.$store.dispatch("cart/refresh")},logout:function(){var t=this;this.$bvModal.msgBoxConfirm("請確認是否登出?",{title:"登出",size:"md",buttonSize:"md",okVariant:"danger",okTitle:"是",cancelTitle:"否",footerClass:"p-2",hideHeaderClose:!1,centered:!0}).then((function(e){console.log("logout : ",e),e&&(t.$store.dispatch("auth/logout"),t.$store.dispatch("deliver/clearState"),t.$store.dispatch("complete/clearState"),t.$router.push({name:"index"}).catch((function(t){return console.log("MyHeader.vue",t)})))})).catch((function(t){console.log("msgBoxConfirm : ",t)}))},onSubmit:function(t){t.preventDefault(),console.log(JSON.stringify(this.form))}}},x=S,k=Object(p["a"])(x,r,o,!1,null,"3ff4b545",null);e["a"]=k.exports},a3d9:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"text-center bg-white text-dark mt-5"},[n("p",{},[t._v(" Copyright "),n("font-awesome-icon",{attrs:{icon:["far","copyright"]}}),t._v(" DemoSite ")],1),n("ol",{staticClass:"breadcrumb justify-content-center bg-white"},t._l(t.footerData,(function(e,r){return n("li",{key:r,staticClass:"breadcrumb-item"},[n("router-link",{staticClass:"text-decoration-none",class:t.textClass(e),attrs:{"tex-active":e.isActive,to:e.url}},[t._v(t._s(e.text))])],1)})),0)])},o=[],i={name:"MyFooter",props:["textActive"],data:function(){return{footerData:[{text:"網站地圖",url:"#",isActive:!1},{text:"隱私權條款",url:"#",isActive:!1},{text:"服務條款",url:"#",isActive:!0},{text:"人力招聘",url:"#",isActive:!1},{text:"聯絡我們",url:"#",isActive:!1}]}},mounted:function(){},methods:{textClass:function(t){return{"text-dark":!t.isActive,"text-secondary":t.isActive}}}},a=i,s=n("2877"),c=Object(s["a"])(a,r,o,!1,null,"666bda24",null);e["a"]=c.exports},a4d3:function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),i=n("d066"),a=n("c430"),s=n("83ab"),c=n("4930"),u=n("fdbf"),l=n("d039"),f=n("5135"),d=n("e8b5"),b=n("861d"),p=n("825a"),h=n("7b0b"),m=n("fc6a"),v=n("c04e"),g=n("5c6c"),y=n("7c73"),w=n("df75"),O=n("241c"),_=n("057f"),C=n("7418"),j=n("06cf"),S=n("9bf2"),x=n("d1e7"),k=n("9112"),D=n("6eeb"),M=n("5692"),P=n("f772"),$=n("d012"),A=n("90e3"),E=n("b622"),N=n("e538"),I=n("746f"),T=n("d44e"),J=n("69f3"),B=n("b727").forEach,L=P("hidden"),U="Symbol",F="prototype",H=E("toPrimitive"),z=J.set,q=J.getterFor(U),Q=Object[F],V=o.Symbol,W=i("JSON","stringify"),G=j.f,K=S.f,R=_.f,X=x.f,Y=M("symbols"),Z=M("op-symbols"),tt=M("string-to-symbol-registry"),et=M("symbol-to-string-registry"),nt=M("wks"),rt=o.QObject,ot=!rt||!rt[F]||!rt[F].findChild,it=s&&l((function(){return 7!=y(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=G(Q,e);r&&delete Q[e],K(t,e,n),r&&t!==Q&&K(Q,e,r)}:K,at=function(t,e){var n=Y[t]=y(V[F]);return z(n,{type:U,tag:t,description:e}),s||(n.description=e),n},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof V},ct=function(t,e,n){t===Q&&ct(Z,e,n),p(t);var r=v(e,!0);return p(n),f(Y,r)?(n.enumerable?(f(t,L)&&t[L][r]&&(t[L][r]=!1),n=y(n,{enumerable:g(0,!1)})):(f(t,L)||K(t,L,g(1,{})),t[L][r]=!0),it(t,r,n)):K(t,r,n)},ut=function(t,e){p(t);var n=m(e),r=w(n).concat(pt(n));return B(r,(function(e){s&&!ft.call(n,e)||ct(t,e,n[e])})),t},lt=function(t,e){return void 0===e?y(t):ut(y(t),e)},ft=function(t){var e=v(t,!0),n=X.call(this,e);return!(this===Q&&f(Y,e)&&!f(Z,e))&&(!(n||!f(this,e)||!f(Y,e)||f(this,L)&&this[L][e])||n)},dt=function(t,e){var n=m(t),r=v(e,!0);if(n!==Q||!f(Y,r)||f(Z,r)){var o=G(n,r);return!o||!f(Y,r)||f(n,L)&&n[L][r]||(o.enumerable=!0),o}},bt=function(t){var e=R(m(t)),n=[];return B(e,(function(t){f(Y,t)||f($,t)||n.push(t)})),n},pt=function(t){var e=t===Q,n=R(e?Z:m(t)),r=[];return B(n,(function(t){!f(Y,t)||e&&!f(Q,t)||r.push(Y[t])})),r};if(c||(V=function(){if(this instanceof V)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=A(t),n=function(t){this===Q&&n.call(Z,t),f(this,L)&&f(this[L],e)&&(this[L][e]=!1),it(this,e,g(1,t))};return s&&ot&&it(Q,e,{configurable:!0,set:n}),at(e,t)},D(V[F],"toString",(function(){return q(this).tag})),D(V,"withoutSetter",(function(t){return at(A(t),t)})),x.f=ft,S.f=ct,j.f=dt,O.f=_.f=bt,C.f=pt,N.f=function(t){return at(E(t),t)},s&&(K(V[F],"description",{configurable:!0,get:function(){return q(this).description}}),a||D(Q,"propertyIsEnumerable",ft,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:V}),B(w(nt),(function(t){I(t)})),r({target:U,stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var n=V(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!s},{create:lt,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:l((function(){C.f(1)}))},{getOwnPropertySymbols:function(t){return C.f(h(t))}}),W){var ht=!c||l((function(){var t=V();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));r({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,n){var r,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(r=e,(b(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!st(e))return e}),o[1]=e,W.apply(null,o)}})}V[F][H]||k(V[F],H,V[F].valueOf),T(V,U),$[L]=!0},ade3:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},daf7:function(t,e,n){"use strict";var r=n("24ec"),o=n.n(r);o.a},dbb4:function(t,e,n){var r=n("23e7"),o=n("83ab"),i=n("56ef"),a=n("fc6a"),s=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,n,r=a(t),o=s.f,u=i(r),l={},f=0;while(u.length>f)n=o(r,e=u[f++]),void 0!==n&&c(l,e,n);return l}})},e439:function(t,e,n){var r=n("23e7"),o=n("d039"),i=n("fc6a"),a=n("06cf").f,s=n("83ab"),c=o((function(){a(1)})),u=!s||c;r({target:"Object",stat:!0,forced:u,sham:!s},{getOwnPropertyDescriptor:function(t,e){return a(i(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},e84a:function(t,e,n){},ed4a:function(t,e,n){"use strict";var r=n("e84a"),o=n.n(r);o.a}}]);
//# sourceMappingURL=chunk-8333df7e.2937c8ce.js.map