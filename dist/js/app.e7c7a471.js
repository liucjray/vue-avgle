(function(e){function t(t){for(var n,i,s=t[0],l=t[1],u=t[2],c=0,f=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);v&&v(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==o[l]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},a=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1bbc696d"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var u=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(c);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",u.name="ChunkLoadError",u.type=n,u.request=a,r[1](u)}o[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var v=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},1240:function(e,t,r){},"4c05":function(e,t,r){"use strict";r("1240")},"516f":function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div")},o=[]},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=(r("d3b7"),r("bc3a")),a=r.n(o),i={},s=a.a.create(i);s.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=s,window.axios=s,Object.defineProperties(e.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},n["default"].use(Plugin);Plugin;var l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v("| "),r("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" | "),r("router-link",{attrs:{to:"/avgle"}},[e._v("Avgle")])],1),r("router-view")],1)},u=[],c=(r("034f"),r("2877")),v={},f=Object(c["a"])(v,l,u,!1,null,null,null),p=f.exports,d=(r("3ca3"),r("ddb0"),r("8c4f")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},h=[],m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},b=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest",target:"_blank",rel:"noopener"}},[e._v("unit-jest")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],_={name:"HelloWorld",props:{msg:String}},k=_,w=(r("4c05"),Object(c["a"])(k,m,b,!1,null,"6b74f606",null)),j=w.exports,y={name:"Home",components:{HelloWorld:j}},C=y,x=Object(c["a"])(C,g,h,!1,null,null,null),P=x.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"avgle"},[r("AvgleCategory"),r("AvgleSearch")],1)},H=[],S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-tabs",{staticStyle:{},attrs:{type:"card",tabPosition:"left"},on:{"tab-click":e.switchCategory},model:{value:e.activeCHID,callback:function(t){e.activeCHID=t},expression:"activeCHID"}},e._l(e.categories,(function(t){return r("el-tab-pane",{key:t.CHID,attrs:{label:t.shortname,name:t.CHID}},[r("el-pagination",{staticStyle:{width:"50%"},attrs:{background:"",layout:"prev, pager, next","page-size":e.videosLimit,total:e.videosTotal},on:{"current-change":e.vidoePageClick,"prev-click":e.videosPrevClick,"next-click":e.videosNextClick}}),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],attrs:{data:e.videos,"element-loading-text":"載入中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[r("el-table-column",{attrs:{prop:"preview_url",label:"預覽圖"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("a",{attrs:{target:"_blank",href:e.row.video_url}},[r("img",{attrs:{src:e.row.preview_url,height:"80",content:"no-referrer"}})])]}}],null,!0)}),r("el-table-column",{attrs:{prop:"title",label:"片名",width:"500px"}}),r("el-table-column",{attrs:{prop:"duration",label:"時長"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{icon:"el-icon-timer",effect:"dark"}},[e._v(" "+e._s(e.transformHumanTime(t.row.duration))+" ")])]}}],null,!0)})],1)],1)})),1)],1),r("el-col",{attrs:{span:4}},[r("el-input",{staticStyle:{"margin-bottom":"20px"},attrs:{size:"medium",placeholder:"搜寻","suffix-icon":"el-icon-search"}})],1)],1)},E=[],L=(r("99af"),{name:"categories",data:function(){return{isLoading:!1,activeCHID:"1",categories:[],videos:[],videosLimit:8,videosTotal:0,videosCurrentPage:0}},beforeMount:function(){this.getCategories(),this.switchCategory(this.activeCHID)},methods:{switchCategory:function(){this.videosCurrentPage=0,this.getVideos()},getCategories:function(){var e=this;this.isLoading=!0,axios.get("https://api.avgle.com/v1/categories").then((function(t){var r=t.data;e.isLoading=1!=r.success,e.categories=r.response.categories})).catch((function(e){console.error(e)}))},getVideos:function(){var e=this;this.isLoading=!0;var t="https://api.avgle.com/v1/videos/".concat(this.videosCurrentPage,"?c=").concat(this.activeCHID,"&limit=").concat(this.videosLimit);axios.get(t).then((function(t){var r=t.data;e.isLoading=1!=r.success,e.videosTotal=r.response.total_videos,e.videos=r.response.videos})).catch((function(e){console.error(e)}))},videosPrevClick:function(){this.videosCurrentPage-=1,this.getVideos()},videosNextClick:function(){this.videosCurrentPage+=1,this.getVideos()},vidoePageClick:function(e){this.videosCurrentPage=e-1,this.getVideos()},transformHumanTime:function(e){var t=new Date(1e3*e).toISOString().substr(11,8);return t}},computed:{}}),$=L,A=Object(c["a"])($,S,E,!1,null,null,null),I=A.exports,T=r("c0f0"),D={name:"AvgleView",components:{AvgleCategory:I,AvgleSearch:T["default"]},data:function(){return{}}},V=D,M=Object(c["a"])(V,O,H,!1,null,null,null),N=M.exports;n["default"].use(d["a"]);var W=[{path:"/",name:"Home",component:P},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/avgle",name:"Avgle",component:N}],z=new d["a"]({mode:"hash",base:"/",routes:W}),q=z,F=r("2f62");n["default"].use(F["a"]);var J=new F["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Y=r("5c96"),B=r.n(Y),G=(r("0fae"),r("c87b")),K=r.n(G);n["default"].use(B.a,{locale:K.a}),n["default"].config.productionTip=!1,new n["default"]({router:q,store:J,render:function(e){return e(p)}}).$mount("#app")},"85ec":function(e,t,r){},"9fc6":function(e,t){},ab03:function(e,t,r){"use strict";var n=r("9fc6"),o=r.n(n);t["default"]=o.a},c0f0:function(e,t,r){"use strict";var n=r("516f"),o=r("ab03"),a=r("2877"),i=Object(a["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=i.exports},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.e7c7a471.js.map