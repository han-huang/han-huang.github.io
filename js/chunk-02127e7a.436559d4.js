(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02127e7a"],{5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var a=n("1d80"),r=n("5899"),i="["+r+"]",s=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),c=function(t){return function(e){var n=String(a(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},"5e89":function(t,e,n){var a=n("861d"),r=Math.floor;t.exports=function(t){return!a(t)&&isFinite(t)&&r(t)===t}},7156:function(t,e,n){var a=n("861d"),r=n("d2bb");t.exports=function(t,e,n){var i,s;return r&&"function"==typeof(i=e.constructor)&&i!==n&&a(s=i.prototype)&&s!==n.prototype&&r(t,s),t}},"8ba4":function(t,e,n){var a=n("23e7"),r=n("5e89");a({target:"Number",stat:!0},{isInteger:r})},a9e3:function(t,e,n){"use strict";var a=n("83ab"),r=n("da84"),i=n("94ca"),s=n("6eeb"),o=n("5135"),c=n("c6b6"),l=n("7156"),u=n("c04e"),d=n("d039"),f=n("7c73"),p=n("241c").f,h=n("06cf").f,g=n("9bf2").f,v=n("58a8").trim,m="Number",b=r[m],y=b.prototype,S=c(f(y))==m,k=function(t){var e,n,a,r,i,s,o,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=v(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+l}for(i=l.slice(2),s=i.length,o=0;o<s;o++)if(c=i.charCodeAt(o),c<48||c>r)return NaN;return parseInt(i,a)}return+l};if(i(m,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var I,C=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof C&&(S?d((function(){y.valueOf.call(n)})):c(n)!=m)?l(new b(k(e)),n,C):k(e)},x=a?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;x.length>_;_++)o(b,I=x[_])&&!o(C,I)&&g(C,I,h(b,I));C.prototype=y,y.constructor=C,s(r,m,C)}},de9f:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-row",[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"progressbar-container text-center"},[n("ul",{staticClass:"progressbar"},[n("li",{staticClass:"progressbar-active"},[t._v("檢視購物車")]),n("li",[t._v("付款方式及寄送資訊")]),n("li",[t._v("確認訂單資料")]),n("li",[t._v("訂單成立")])])])])]),n("b-row",{staticClass:"mt-3"},[n("b-col",{attrs:{lg:"12",md:"12"}},[n("b-tabs",[n("b-tab",{attrs:{title:"購物明細"}},[n("b-form",[n("b-table",{ref:"selectableTable",attrs:{striped:"",hover:"",stacked:"lg",fields:t.fields,items:t.items,"head-variant":t.headVariant},scopedSlots:t._u([{key:"head(checkbox)",fn:function(){return[n("input",{directives:[{name:"model",rawName:"v-model",value:t.allSelected,expression:"allSelected"}],staticClass:"checkAll",attrs:{type:"checkbox",id:"checkAll",name:"checkAll"},domProps:{checked:Array.isArray(t.allSelected)?t._i(t.allSelected,null)>-1:t.allSelected},on:{change:[function(e){var n=t.allSelected,a=e.target,r=!!a.checked;if(Array.isArray(n)){var i=null,s=t._i(n,i);a.checked?s<0&&(t.allSelected=n.concat([i])):s>-1&&(t.allSelected=n.slice(0,s).concat(n.slice(s+1)))}else t.allSelected=r},function(e){return t.toggleAll(t.allSelected)}]}})]},proxy:!0},{key:"cell()",fn:function(e){return[n("span",{domProps:{textContent:t._s(e.value)}})]}},{key:"cell(checkbox)",fn:function(e){return[n("input",{key:"checkbox"+e.item.isbn,attrs:{type:"checkbox",id:"checkbox"+e.item.isbn},domProps:{value:e.item.isbn,checked:e.item.checked},on:{change:function(e){return t.setChecked(e)}}})]}},{key:"cell(pic)",fn:function(t){return[n("router-link",{attrs:{to:"/product/"+t.item.isbn}},[n("img",{staticStyle:{display:"block",margin:"0 auto",height:"100px"},attrs:{src:t.item.src,alt:""}})])]}},{key:"cell(name)",fn:function(e){return[n("router-link",{staticClass:"text-decoration-none text-primary",attrs:{to:"/product/"+e.item.isbn}},[n("span",{domProps:{textContent:t._s(e.value)}})])]}},{key:"cell(salePrice)",fn:function(e){return[n("span",{domProps:{textContent:t._s(t.salePrice(e))}})]}},{key:"cell(quantity)",fn:function(e){return[n("input",{key:"quantity"+e.item.isbn,class:t.validateClass(e.item.quantityState),staticStyle:{width:"90px"},attrs:{type:"number",min:"1",max:"100",oncut:"return false;",onpaste:"return false;"},domProps:{value:e.item.quantity},on:{input:function(n){return t.changeQuantity(n,e.item.isbn)}}}),t.isSmallAmount(e.item.isbn)?n("div",{staticClass:"mt-1 text-danger"},[t._v(" 只剩 "+t._s(t.getInventory(e.item.isbn))+" 件 ")]):t._e()]}},{key:"cell(subtotal)",fn:function(e){return[n("span",{domProps:{textContent:t._s(t.calSubTotal(e))}})]}},{key:"cell(changeItem)",fn:function(e){return[n("b-button",{attrs:{variant:"outline-dark"},on:{click:function(n){return t.deleteItem({isbn:e.item.isbn})}}},[t._v("刪除")])]}}])}),n("div",{staticClass:"d-flex bg-light"},[n("div",{staticClass:"p-3 mr-auto"},[n("b-button",{attrs:{variant:"outline-dark"},on:{click:t.deleteSelected}},[t._v("刪除勾選項目")])],1),n("div",{staticClass:"d-flex align-items-center"},[n("p",{staticClass:"mt-3 mr-3"},[t._v(" 共 "),n("span",{staticClass:"text-danger"},[t._v(t._s(t.items.length))]),t._v(" 項商品，數量 "),n("span",{staticClass:"text-danger",domProps:{textContent:t._s(t.totalQuantity())}}),t._v(" 個，總金額 NT$ "),n("span",{staticClass:"text-danger",domProps:{textContent:t._s(t.totalAmount())}}),t._v(" 元 ")])])]),n("div",{staticClass:"text-right mt-3"},[n("b-button",{staticClass:"mr-3",attrs:{variant:"outline-primary"},on:{click:t.goHome}},[t._v("繼續購物")]),n("b-button",{staticClass:"mr-3",attrs:{disabled:0==t.items.length||isNaN(t.totalQuantity())||0==t.totalQuantity(),variant:"outline-primary"},on:{click:t.goDeliver}},[t._v("結帳")])],1)],1)],1)],1)],1)],1)],1)},r=[],i=(n("4de4"),n("7db0"),n("4160"),n("d81d"),n("13d5"),n("a9e3"),n("8ba4"),n("159b"),n("b85c")),s=n("5530"),o=(n("7947"),n("a49b")),c=n("2f62"),l=n("4360"),u=n("5ce5"),d={name:"Shoppingcart",data:function(){return{allSelected:!1,headVariant:"dark",fields:o["b"].shoppingcartFields}},components:{},mounted:function(){},beforeCreate:function(){console.log("Shoppingcart.vue beforeCreate")},beforeRouteEnter:function(t,e,n){console.log("Shoppingcart.vue beforeRouteEnter");var a=l["a"].getters["cart/cartProducts"],r=l["a"].getters["cart/cartProducts"].map((function(t){return t.isbn}));console.log("Shoppingcart.vue beforeRouteEnter isbnArray",r),r.length?u["a"].post("products/inventory",{isbn:r}).then((function(t){console.log("Shoppingcart.vue beforeRouteEnter response : "+JSON.stringify(t)),n((function(e){t.data.forEach((function(t){e.updateInventory(t);var n=a.find((function(e){return e.isbn===t.isbn}));t.inventory<n.quantity&&e.setQuantityInCart(t.isbn,t.inventory)}))}))})).catch((function(t){console.log("err : "+t),console.log("err.response : "+JSON.stringify(t.response))})):n()},computed:{items:function(){return this.$store.getters["cart/cartProducts"]},products:function(){return this.$store.getters["products/getItems"]}},methods:Object(s["a"])(Object(s["a"])({validateClass:function(t){return{"form-control":!0,"is-invalid":null!==t}},updateInventory:function(t){console.log("Shoppingcart.vue updateInventory",JSON.stringify(t)),this.$store.dispatch("products/changeInventory",t)},goHome:function(){this.$router.push({name:"index"})},goDeliver:function(){var t=this.items.filter((function(t){return 0==t.quantity.length}));if(console.log(JSON.stringify(t)),t.length){var e,n=Object(i["a"])(t);try{for(n.s();!(e=n.n()).done;){var a=e.value;this.$store.dispatch("cart/changeQuantityState",{isbn:a.isbn,quantityState:!1}).then((function(t){console.log("changeQuantityState response",t)})).catch((function(t){console.log("changeQuantityState err",t)})),this.$toastr.e("請填入正確的數量")}}catch(r){n.e(r)}finally{n.f()}}else this.$router.push({name:"deliver"})},getInventory:function(t){var e=this.products.find((function(e){return e.isbn===t}));return e?e.inventory:0},isSmallAmount:function(t){return this.getInventory(t)<=10},salePrice:function(t){return t.item.salePrice=this.calSalePrice(t.item.listPrice,t.item.discount),t.item.salePrice},calSalePrice:function(t,e){return Math.round(t*e/100)},calSubTotal:function(t){return t.item.salePrice*t.item.quantity},setChecked:function(t){console.log(t.target.id,t.target.checked,t.target.value),this.$store.dispatch("cart/setChecked",{isbn:t.target.value,checked:t.target.checked})},setQuantityInCart:function(t,e){this.$store.dispatch("cart/changeQuantity",{isbn:t,quantity:e}).then((function(t){console.log("setQuantityInCart response",t)})).catch((function(t){console.log("setQuantityInCart err",t)}))},changeQuantity:function(t,e){var n=this;console.log(t.target.value,Number.isInteger(t.target.value),e);var a=1;Number.isInteger(parseInt(t.target.value,10))&&parseInt(t.target.value,10)>0?a=parseInt(t.target.value,10)<100?parseInt(t.target.value,10):100:0==t.target.value.length&&(a=t.target.value),this.$store.dispatch("cart/changeQuantityState",{isbn:e,quantityState:null}).then((function(t){console.log("changeQuantityState response",t)})).catch((function(t){console.log("changeQuantityState err",t)})),console.log("changeQuantity",t.target.value,a),this.$store.dispatch("cart/changeQuantity",{isbn:e,quantity:a}).then((function(t){console.log("response",t)})).catch((function(t){n.$store.dispatch("modal/setModalMsg",t),n.$store.dispatch("modal/setModalShow",!0)}))}},Object(c["b"])("cart",["deleteItem","toggleAll"])),{},{deleteSelected:function(){this.$store.dispatch("cart/deleteSelected"),this.allSelected=!1},totalQuantity:function(){return this.items.map((function(t){return isNaN(t.quantity)||0==t.quantity.length?0:parseInt(t.quantity,10)})).reduce((function(t,e){return t+e}),0)},totalAmount:function(){var t=this;return this.items.map((function(e){var n;return n=isNaN(e.quantity)||0==e.quantity.length?0:parseInt(e.quantity,10),t.calSalePrice(e.listPrice,e.discount)*n})).reduce((function(t,e){return t+e}),0)}})},f=d,p=n("2877"),h=Object(p["a"])(f,a,r,!1,null,"6a238380",null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-02127e7a.436559d4.js.map