_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[31],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(c.default.useContext(a.AmpStateContext))};var r,c=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,c=void 0!==r&&r,a=e.hasQuery,s=void 0!==a&&a;return n||c&&s}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";var r=n("lSNA");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=j,t.default=void 0;var a,s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if(Object.prototype.hasOwnProperty.call(e,c)){var a=r?Object.getOwnPropertyDescriptor(e,c):null;a&&(a.get||a.set)?Object.defineProperty(n,c,a):n[c]=e[c]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(a=n("Xuae"))&&a.__esModule?a:{default:a},o=n("lwAK"),l=n("FYa8"),d=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function j(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[s.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function h(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function b(e,t){return e.reduce((function(e,t){var n=s.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(h,[]).reverse().concat(j(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(c){var a=!0,s=!1;if(c.key&&"number"!==typeof c.key&&c.key.indexOf("$")>0){s=!0;var i=c.key.slice(c.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(c.type){case"title":case"base":t.has(c.type)?a=!1:t.add(c.type);break;case"meta":for(var o=0,l=f.length;o<l;o++){var d=f[o];if(c.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?a=!1:n.add(d);else{var u=c.props[d],j=r[d]||new Set;"name"===d&&s||!j.has(u)?(j.add(u),r[d]=j):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,s.default.cloneElement(e,i)}return s.default.cloneElement(e,{key:a})}))}function p(e){var t=e.children,n=(0,s.useContext)(o.AmpStateContext),r=(0,s.useContext)(l.HeadManagerContext);return s.default.createElement(i.default,{reduceComponentsToState:b,headManager:r,inAmpMode:(0,d.isInAmpMode)(n)},t)}p.rewind=function(){};var m=p;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var c=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=c},HRFe:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),c=n("q1tI"),a=n.n(c),s=n("Ix5F"),i=n("g4pe"),o=n.n(i),l=n("YFqc"),d=n.n(l),u=n("y1kX");t.default=function(){return Object(r.jsxs)(a.a.Fragment,{children:[Object(r.jsx)(o.a,{children:Object(r.jsx)("title",{children:"Rivguru - Your Career Partner"})}),Object(r.jsx)(s.a,{pageTitle:"Blog Right Sidebar",homePageUrl:"/",homePageText:"Home",activePageText:"Blog Right Sidebar"}),Object(r.jsx)("div",{className:"blog-area ptb-100",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-lg-8 col-md-12",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-lg-12 col-md-6",children:Object(r.jsxs)("div",{className:"single-blog-post",children:[Object(r.jsx)("div",{className:"post-image",children:Object(r.jsx)(d.a,{href:"/single-blog-1",children:Object(r.jsx)("a",{className:"d-block",children:Object(r.jsx)("img",{src:"/images/blog/blog1.jpg",alt:"image"})})})}),Object(r.jsxs)("div",{className:"post-content",children:[Object(r.jsx)(d.a,{href:"#",children:Object(r.jsx)("a",{className:"category",children:"Education"})}),Object(r.jsx)("h3",{children:Object(r.jsx)(d.a,{href:"/single-blog-1",children:Object(r.jsx)("a",{children:"The Beat Goes On: High School Choirs Improvise In The Age Of Coronavirus"})})}),Object(r.jsxs)("ul",{className:"post-content-footer d-flex justify-content-between align-items-center",children:[Object(r.jsx)("li",{children:Object(r.jsxs)("div",{className:"post-author d-flex align-items-center",children:[Object(r.jsx)("img",{src:"/images/user1.jpg",className:"rounded-circle",alt:"image"}),Object(r.jsx)("span",{children:"Alex Morgan"})]})}),Object(r.jsxs)("li",{children:[Object(r.jsx)("i",{className:"flaticon-calendar"})," April 30, 2020"]})]})]})]})}),Object(r.jsx)("div",{className:"col-lg-12 col-md-6",children:Object(r.jsxs)("div",{className:"single-blog-post",children:[Object(r.jsx)("div",{className:"post-image",children:Object(r.jsx)(d.a,{href:"/single-blog-1",children:Object(r.jsx)("a",{className:"d-block",children:Object(r.jsx)("img",{src:"/images/blog/blog2.jpg",alt:"image"})})})}),Object(r.jsxs)("div",{className:"post-content",children:[Object(r.jsx)(d.a,{href:"#",children:Object(r.jsx)("a",{className:"category",children:"Online"})}),Object(r.jsx)("h3",{children:Object(r.jsx)(d.a,{href:"/single-blog-1",children:Object(r.jsx)("a",{children:"How Online Book Read-Alouds Can Help Students' Literacy and Connection During Social Distancing"})})}),Object(r.jsxs)("ul",{className:"post-content-footer d-flex justify-content-between align-items-center",children:[Object(r.jsx)("li",{children:Object(r.jsxs)("div",{className:"post-author d-flex align-items-center",children:[Object(r.jsx)("img",{src:"/images/user2.jpg",className:"rounded-circle",alt:"image"}),Object(r.jsx)("span",{children:"Sarah Taylor"})]})}),Object(r.jsxs)("li",{children:[Object(r.jsx)("i",{className:"flaticon-calendar"})," April 29, 2020"]})]})]})]})}),Object(r.jsx)("div",{className:"col-lg-12 col-md-6",children:Object(r.jsxs)("div",{className:"single-blog-post",children:[Object(r.jsx)("div",{className:"post-image",children:Object(r.jsx)(d.a,{href:"/single-blog-1",children:Object(r.jsx)("a",{className:"d-block",children:Object(r.jsx)("img",{src:"/images/blog/blog3.jpg",alt:"image"})})})}),Object(r.jsxs)("div",{className:"post-content",children:[Object(r.jsx)(d.a,{href:"#",children:Object(r.jsx)("a",{className:"category",children:"Learning"})}),Object(r.jsx)("h3",{children:Object(r.jsx)(d.a,{href:"/single-blog-1",children:Object(r.jsx)("a",{children:"How To Secure Remote Workers During The COVID-19 Outbreak"})})}),Object(r.jsxs)("ul",{className:"post-content-footer d-flex justify-content-between align-items-center",children:[Object(r.jsx)("li",{children:Object(r.jsxs)("div",{className:"post-author d-flex align-items-center",children:[Object(r.jsx)("img",{src:"/images/user3.jpg",className:"rounded-circle",alt:"image"}),Object(r.jsx)("span",{children:"David Warner"})]})}),Object(r.jsxs)("li",{children:[Object(r.jsx)("i",{className:"flaticon-calendar"})," April 28, 2020"]})]})]})]})}),Object(r.jsx)("div",{className:"col-lg-12 col-md-6",children:Object(r.jsxs)("div",{className:"single-blog-post",children:[Object(r.jsx)("div",{className:"post-image",children:Object(r.jsx)(d.a,{href:"/single-blog-1",children:Object(r.jsx)("a",{className:"d-block",children:Object(r.jsx)("img",{src:"/images/blog/blog7.jpg",alt:"image"})})})}),Object(r.jsxs)("div",{className:"post-content",children:[Object(r.jsx)(d.a,{href:"#",children:Object(r.jsx)("a",{className:"category",children:"Learning"})}),Object(r.jsx)("h3",{children:Object(r.jsx)(d.a,{href:"/single-blog-1",children:Object(r.jsx)("a",{children:"What A Company Needs To Provide Employees For Effective Remote Work"})})}),Object(r.jsxs)("ul",{className:"post-content-footer d-flex justify-content-between align-items-center",children:[Object(r.jsx)("li",{children:Object(r.jsxs)("div",{className:"post-author d-flex align-items-center",children:[Object(r.jsx)("img",{src:"/images/user1.jpg",className:"rounded-circle",alt:"image"}),Object(r.jsx)("span",{children:"Alex Morgan"})]})}),Object(r.jsxs)("li",{children:[Object(r.jsx)("i",{className:"flaticon-calendar"})," April 30, 2020"]})]})]})]})}),Object(r.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(r.jsxs)("div",{className:"pagination-area text-center",children:[Object(r.jsx)("a",{href:"#",className:"prev page-numbers",children:Object(r.jsx)("i",{className:"bx bx-chevrons-left"})}),Object(r.jsx)("span",{className:"page-numbers current","aria-current":"page",children:"1"}),Object(r.jsx)("a",{href:"#",className:"page-numbers",children:"2"}),Object(r.jsx)("a",{href:"#",className:"page-numbers",children:"3"}),Object(r.jsx)("a",{href:"#",className:"page-numbers",children:"4"}),Object(r.jsx)("a",{href:"#",className:"next page-numbers",children:Object(r.jsx)("i",{className:"bx bx-chevrons-right"})})]})})]})}),Object(r.jsx)("div",{className:"col-lg-4 col-md-12",children:Object(r.jsx)(u.a,{})})]})})})]})}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),c=n("EbDI"),a=n("ZhPi"),s=n("Bnag");e.exports=function(e){return r(e)||c(e)||a(e)||s()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),c=n("lwsE"),a=n("W8MJ"),s=(n("PJYZ"),n("7W2i")),i=n("a1gu"),o=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var c=o(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),u=function(e){s(n,e);var t=l(n);function n(e){var a;return c(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=u},a1gu:function(e,t,n){var r=n("cDf5"),c=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?c(e):t}},"b/wm":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog-4",function(){return n("HRFe")}])},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var c=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=c}},[["b/wm",0,2,1,9]]]);