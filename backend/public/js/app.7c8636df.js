(function(){"use strict";var n={64:function(n,r,t){var e=t(9242),o=t(3396);function i(n,r,t,e,i,u){const c=(0,o.up)("HelloWorld"),s=(0,o.up)("DishList");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c,{msg:"Welcome to Your Vue.js App"}),(0,o.Wm)(s)],64)}var u=t(7139);const c={class:"hello"};function s(n,r,t,e,i,s){return(0,o.wg)(),(0,o.iD)("div",c,[(0,o._)("h1",null,(0,u.zw)(t.msg),1)])}var a={name:"HelloWorld",props:{msg:String}},f=t(89);const l=(0,f.Z)(a,[["render",s],["__scopeId","data-v-43f48a4c"]]);var d=l;function p(n,r,t,e,i,c){return(0,o.wg)(),(0,o.iD)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.dishes,(n=>((0,o.wg)(),(0,o.iD)("li",{key:n.name},(0,u.zw)(n.name),1)))),128))])}var v={name:"DishList",data(){return{dishes:[]}},async created(){const n=await fetch("/dishes");this.dishes=await n.json()}};const h=(0,f.Z)(v,[["render",p]]);var g=h,m={name:"App",components:{HelloWorld:d,DishList:g}};const w=(0,f.Z)(m,[["render",i]]);var b=w;(0,e.ri)(b).mount("#app")}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return n[e](i,i.exports,t),i.exports}t.m=n,function(){var n=[];t.O=function(r,e,o,i){if(!e){var u=1/0;for(f=0;f<n.length;f++){e=n[f][0],o=n[f][1],i=n[f][2];for(var c=!0,s=0;s<e.length;s++)(!1&i||u>=i)&&Object.keys(t.O).every((function(n){return t.O[n](e[s])}))?e.splice(s--,1):(c=!1,i<u&&(u=i));if(c){n.splice(f--,1);var a=o();void 0!==a&&(r=a)}}return r}i=i||0;for(var f=n.length;f>0&&n[f-1][2]>i;f--)n[f]=n[f-1];n[f]=[e,o,i]}}(),function(){t.n=function(n){var r=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(r,{a:r}),r}}(),function(){t.d=function(n,r){for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)}}(),function(){var n={143:0};t.O.j=function(r){return 0===n[r]};var r=function(r,e){var o,i,u=e[0],c=e[1],s=e[2],a=0;if(u.some((function(r){return 0!==n[r]}))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(s)var f=s(t)}for(r&&r(e);a<u.length;a++)i=u[a],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(f)},e=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))}();var e=t.O(void 0,[998],(function(){return t(64)}));e=t.O(e)})();
//# sourceMappingURL=app.7c8636df.js.map