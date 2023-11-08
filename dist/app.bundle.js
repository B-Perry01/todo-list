(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(537),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,"body {\n    margin: 0;\n    padding: 0;\n}\n\n.container {\n    display: grid;\n    grid-template-rows: clamp(100px, 1fr, 150px) 3fr;\n    padding: 1rem 2rem;\n\n    border: 1px solid black;\n}\n\n.header {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n\n    padding: 0.5rem 1rem;\n    gap: 1rem;\n    border: 1px solid black;\n}\n\n.content {\n    display: flex;\n    \n\n    border: 1px solid black;\n}\n\n.hidden {\n    display: none;\n}\n\n#nav-btn {\n    justify-self: start;\n}\n#nav-bar {\n    width: max(200px, 20%);\n    padding: 0.5rem 1rem;\n\n    border: 1px solid black;\n}\n#nav-bar ul, \n#nav-bar ul li {\n    list-style: none;\n    margin: 0.2rem 0.5rem;\n}\n\n#add-task {\n    justify-self: end;\n}\n#tasks {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 0.5rem;\n    padding: 1rem;\n}\n\n.todo {\n    border: 1px solid black;\n    padding: 0.25rem 0.5rem;\n}\n.todo-header {\n    display: grid;\n    grid-template-columns: 4fr 1fr;\n    align-items: center;\n}\n.header-sub {\n    display: grid;\n    grid-template-columns: 3fr 1fr 1fr;\n    align-items: center;\n    gap: 0.5rem;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,gDAAgD;IAChD,kBAAkB;;IAElB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;;IAEnB,oBAAoB;IACpB,SAAS;IACT,uBAAuB;AAC3B;;AAEA;IACI,aAAa;;;IAGb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,mBAAmB;AACvB;AACA;IACI,sBAAsB;IACtB,oBAAoB;;IAEpB,uBAAuB;AAC3B;AACA;;IAEI,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,wBAAwB;IACxB,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,kCAAkC;IAClC,mBAAmB;IACnB,WAAW;AACf",sourcesContent:["body {\n    margin: 0;\n    padding: 0;\n}\n\n.container {\n    display: grid;\n    grid-template-rows: clamp(100px, 1fr, 150px) 3fr;\n    padding: 1rem 2rem;\n\n    border: 1px solid black;\n}\n\n.header {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n\n    padding: 0.5rem 1rem;\n    gap: 1rem;\n    border: 1px solid black;\n}\n\n.content {\n    display: flex;\n    \n\n    border: 1px solid black;\n}\n\n.hidden {\n    display: none;\n}\n\n#nav-btn {\n    justify-self: start;\n}\n#nav-bar {\n    width: max(200px, 20%);\n    padding: 0.5rem 1rem;\n\n    border: 1px solid black;\n}\n#nav-bar ul, \n#nav-bar ul li {\n    list-style: none;\n    margin: 0.2rem 0.5rem;\n}\n\n#add-task {\n    justify-self: end;\n}\n#tasks {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 0.5rem;\n    padding: 1rem;\n}\n\n.todo {\n    border: 1px solid black;\n    padding: 0.25rem 0.5rem;\n}\n.todo-header {\n    display: grid;\n    grid-template-columns: 4fr 1fr;\n    align-items: center;\n}\n.header-sub {\n    display: grid;\n    grid-template-columns: 3fr 1fr 1fr;\n    align-items: center;\n    gap: 0.5rem;\n}"],sourceRoot:""}]);const u=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var u=0;u<this.length;u++){var d=this[u][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},537:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */");return[t].concat([o]).join("\n")}return[t].join("\n")}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],u=0;u<e.length;u++){var d=e[u],s=r.base?d[0]+r.base:d[0],l=o[s]||0,c="".concat(s," ").concat(l);o[s]=l+1;var f=n(c),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==f)t[f].references++,t[f].updater(m);else{var h=a(m,r);r.byIndex=u,t.splice(u,0,{identifier:c,updater:h,references:1})}i.push(c)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var u=n(o[i]);t[u].references--}for(var d=r(e,a),s=0;s<o.length;s++){var l=n(o[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),i=n.n(o),u=n(565),d=n.n(u),s=n(216),l=n.n(s),c=n(589),f=n.n(c),m=n(426),h={};function g(e="title",t="",n="No date set",r=!1){const a=()=>e,o=()=>t,i=()=>n,u=()=>r;let d=!1;const s=()=>d;return{getTitle:a,getDesc:o,changeDate:e=>n=e,getDate:i,changePrio:()=>r=!r,getPrio:u,getStatus:s,changeStatus:()=>d=!d,logValues:function(){console.log(`${a()}, ${o()}, ${i()}, ${u()}, ${s()}`)}}}function v(e="Title"){let t=[];return{todos:t,getTask:e=>t.filter((t=>t.getTitle()===e))[0],addTask:e=>t.push(e),removeTask:e=>t=t.filter((t=>t.getTitle()!==e)),getTitle:()=>e,changeTitle:t=>e=t,displayProject:()=>{console.log("\n"+e),t.forEach((e=>e.logValues()))}}}function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function w(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function b(e){w(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===p(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function y(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function A(e){w(1,arguments);var t=b(e),n=t.getUTCDay(),r=(n<1?7:0)+n-1;return t.setUTCDate(t.getUTCDate()-r),t.setUTCHours(0,0,0,0),t}function C(e){w(1,arguments);var t=b(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=A(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=A(o);return t.getTime()>=a.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}h.styleTagTransform=f(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var T={};function k(){return T}function x(e,t){var n,r,a,o,i,u,d,s;w(1,arguments);var l=k(),c=y(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.weekStartsOn)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==a?a:l.weekStartsOn)&&void 0!==r?r:null===(d=l.locale)||void 0===d||null===(s=d.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==n?n:0);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=b(e),m=f.getUTCDay(),h=(m<c?7:0)+m-c;return f.setUTCDate(f.getUTCDate()-h),f.setUTCHours(0,0,0,0),f}function D(e,t){var n,r,a,o,i,u,d,s;w(1,arguments);var l=b(e),c=l.getUTCFullYear(),f=k(),m=y(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:f.firstWeekContainsDate)&&void 0!==r?r:null===(d=f.locale)||void 0===d||null===(s=d.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==n?n:1);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(c+1,0,m),h.setUTCHours(0,0,0,0);var g=x(h,t),v=new Date(0);v.setUTCFullYear(c,0,m),v.setUTCHours(0,0,0,0);var p=x(v,t);return l.getTime()>=g.getTime()?c+1:l.getTime()>=p.getTime()?c:c-1}function M(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const B=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return M("yy"===t?r%100:r,t.length)},S=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):M(n+1,2)},E=function(e,t){return M(e.getUTCDate(),t.length)},P=function(e,t){return M(e.getUTCHours()%12||12,t.length)},I=function(e,t){return M(e.getUTCHours(),t.length)},U=function(e,t){return M(e.getUTCMinutes(),t.length)},W=function(e,t){return M(e.getUTCSeconds(),t.length)},j=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return M(Math.floor(r*Math.pow(10,n-3)),t.length)};var O={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return B(e,t)},Y:function(e,t,n,r){var a=D(e,r),o=a>0?a:1-a;return"YY"===t?M(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):M(o,t.length)},R:function(e,t){return M(C(e),t.length)},u:function(e,t){return M(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return M(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return M(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return S(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return M(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){w(1,arguments);var n=b(e),r=x(n,t).getTime()-function(e,t){var n,r,a,o,i,u,d,s;w(1,arguments);var l=k(),c=y(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:l.firstWeekContainsDate)&&void 0!==r?r:null===(d=l.locale)||void 0===d||null===(s=d.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==n?n:1),f=D(e,t),m=new Date(0);return m.setUTCFullYear(f,0,c),m.setUTCHours(0,0,0,0),x(m,t)}(n,t).getTime();return Math.round(r/6048e5)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):M(a,t.length)},I:function(e,t,n){var r=function(e){w(1,arguments);var t=b(e),n=A(t).getTime()-function(e){w(1,arguments);var t=C(e),n=new Date(0);return n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0),A(n)}(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):M(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):E(e,t)},D:function(e,t,n){var r=function(e){w(1,arguments);var t=b(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=n-t.getTime();return Math.floor(r/864e5)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):M(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return M(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return M(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return M(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return P(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):I(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):M(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):M(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):U(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):W(e,t)},S:function(e,t){return j(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return N(a);case"XXXX":case"XX":return L(a);default:return L(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return N(a);case"xxxx":case"xx":return L(a);default:return L(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Y(a,":");default:return"GMT"+L(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Y(a,":");default:return"GMT"+L(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return M(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return M((r._originalDate||e).getTime(),t.length)}};function Y(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=t||"";return n+String(a)+i+M(o,2)}function N(e,t){return e%60==0?(e>0?"-":"+")+M(Math.abs(e)/60,2):L(e,t)}function L(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+M(Math.floor(a/60),2)+n+M(a%60,2)}const q=O;var H=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},F=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}};const z={p:F,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return H(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",H(a,t)).replace("{{time}}",F(o,t))}};var R=["D","DD"],G=["YY","YYYY"];function Q(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var X={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function J(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const _={date:J({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:J({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:J({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var $={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function Z(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var a=e.defaultFormattingWidth||e.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=e.formattingValues[o]||e.formattingValues[a]}else{var i=e.defaultWidth,u=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[u]||e.values[i]}return r[e.argumentCallback?e.argumentCallback(t):t]}}const V={ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:Z({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:Z({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:Z({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:Z({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:Z({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function K(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;var i,u=o[0],d=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(d)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(u))return n}(d):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(u))return n}(d);return i=e.valueCallback?e.valueCallback(s):s,{value:i=n.valueCallback?n.valueCallback(i):i,rest:t.slice(u.length)}}}var ee,te={ordinalNumber:(ee={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(ee.matchPattern);if(!n)return null;var r=n[0],a=e.match(ee.parsePattern);if(!a)return null;var o=ee.valueCallback?ee.valueCallback(a[0]):a[0];return{value:o=t.valueCallback?t.valueCallback(o):o,rest:e.slice(r.length)}}),era:K({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:K({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:K({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:K({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:K({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const ne={code:"en-US",formatDistance:function(e,t,n){var r,a=X[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:_,formatRelative:function(e,t,n,r){return $[e]},localize:V,match:te,options:{weekStartsOn:0,firstWeekContainsDate:1}};var re=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ae=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,oe=/^'([^]*?)'?$/,ie=/''/g,ue=/[a-zA-Z]/;function de(e,t,n){var r,a,o,i,u,d,s,l,c,f,m,h,g,v,A,C,T,x;w(2,arguments);var D=String(t),M=k(),B=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:M.locale)&&void 0!==r?r:ne,S=y(null!==(o=null!==(i=null!==(u=null!==(d=null==n?void 0:n.firstWeekContainsDate)&&void 0!==d?d:null==n||null===(s=n.locale)||void 0===s||null===(l=s.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==u?u:M.firstWeekContainsDate)&&void 0!==i?i:null===(c=M.locale)||void 0===c||null===(f=c.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==o?o:1);if(!(S>=1&&S<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var E=y(null!==(m=null!==(h=null!==(g=null!==(v=null==n?void 0:n.weekStartsOn)&&void 0!==v?v:null==n||null===(A=n.locale)||void 0===A||null===(C=A.options)||void 0===C?void 0:C.weekStartsOn)&&void 0!==g?g:M.weekStartsOn)&&void 0!==h?h:null===(T=M.locale)||void 0===T||null===(x=T.options)||void 0===x?void 0:x.weekStartsOn)&&void 0!==m?m:0);if(!(E>=0&&E<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!B.localize)throw new RangeError("locale must contain localize property");if(!B.formatLong)throw new RangeError("locale must contain formatLong property");var P=b(e);if(!function(e){if(w(1,arguments),!function(e){return w(1,arguments),e instanceof Date||"object"===p(e)&&"[object Date]"===Object.prototype.toString.call(e)}(e)&&"number"!=typeof e)return!1;var t=b(e);return!isNaN(Number(t))}(P))throw new RangeError("Invalid time value");var I=function(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}(P),U=function(e,t){return w(2,arguments),function(e,t){w(2,arguments);var n=b(e).getTime(),r=y(t);return new Date(n+r)}(e,-y(t))}(P,I),W={firstWeekContainsDate:S,weekStartsOn:E,locale:B,_originalDate:P};return D.match(ae).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,z[t])(e,B.formatLong):e})).join("").match(re).map((function(r){if("''"===r)return"'";var a,o,i=r[0];if("'"===i)return(o=(a=r).match(oe))?o[1].replace(ie,"'"):a;var u,d=q[i];if(d)return null!=n&&n.useAdditionalWeekYearTokens||(u=r,-1===G.indexOf(u))||Q(r,t,String(e)),null!=n&&n.useAdditionalDayOfYearTokens||!function(e){return-1!==R.indexOf(e)}(r)||Q(r,t,String(e)),d(U,r,B.localize,W);if(i.match(ue))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return r})).join("")}function se(e){w(1,arguments);var t=b(e);return t.setHours(0,0,0,0),t}function le(e){return w(1,arguments),function(e,t){w(2,arguments);var n=se(e),r=se(t);return n.getTime()===r.getTime()}(e,Date.now())}function ce(e,t){var n,r,a,o,i,u,d,s;w(1,arguments);var l=k(),c=y(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.weekStartsOn)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==a?a:l.weekStartsOn)&&void 0!==r?r:null===(d=l.locale)||void 0===d||null===(s=d.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==n?n:0);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=b(e),m=f.getDay(),h=(m<c?7:0)+m-c;return f.setDate(f.getDate()-h),f.setHours(0,0,0,0),f}function fe(e,t){return w(1,arguments),function(e,t,n){w(2,arguments);var r=ce(e,n),a=ce(t,n);return r.getTime()===a.getTime()}(e,Date.now(),t)}function me(e){const t=document.getElementById("tasks");t.innerHTML="",document.getElementById("proj-title").textContent=e.getTitle(),e.todos.forEach((e=>{const n=document.createElement("div"),r=document.createElement("div"),a=document.createElement("h3"),o=document.createElement("div"),i=document.createElement("h4"),u=document.createElement("img"),d=document.createElement("button"),s=document.createElement("p");n.classList.add("todo"),r.classList.add("todo-header"),a.classList.add("title"),o.classList.add("header-sub"),i.classList.add("date"),!0===e.getPrio()?(u.classList.add("starred"),u.src="#",u.alt="golden star"):(u.src="#",u.alt="colourless star"),s.classList.add("desc"),a.textContent=e.getTitle(),d.textContent="Edit/Del",s.textContent=e.getDesc(),i.textContent=de(e.getDate(),"dd/MM/yy"),o.appendChild(i),o.appendChild(u),o.appendChild(d),r.appendChild(a),r.appendChild(o),n.appendChild(r),n.appendChild(s),t.appendChild(n)}))}const he=v("Example Project");he.addTask(g("Title 1","First Project",Date.now(),!0)),he.addTask(g("Title 2","Second Project",new Date(null))),he.addTask(g("Title 3","Third Project",Date.now())),he.addTask(g("Car maintenance","Change oil and oil filter, air filter and cabin filter",Date.now(),!0)),he.addTask(g("Replace hard drive","A hard drive in NAS has went, replace before second harddrive fails and we lose our data!",Date.now(),!0)),he.addTask(g("Wash car","Take it to the car wash on 34th Street, it's pretty dirty!",Date.now())),he.addTask(g("Dog walk!","Walk dog",new Date(null))),he.getTask("Title 1").changeStatus(),he.removeTask("Title 2");const ge=[];ge.push(he),function(e){const t=document.getElementById("nav-btn"),n=document.getElementById("nav-bar");t.addEventListener("click",(e=>n.classList.toggle("hidden")));const r=document.getElementById("all-tasks"),a=document.getElementById("today"),o=document.getElementById("week"),i=document.getElementById("starred");r.addEventListener("click",(()=>me(function(e){if(e.length>0){const t=v("All Tasks");for(let n=0;n<e.length;n++)e[n].todos.forEach((e=>t.addTask(e)));return t.displayProject(),t}return null}(e)))),a.addEventListener("click",(()=>me(function(e){if(e.length>0){const t=v("Today");for(let n=0;n<e.length;n++)e[n].todos.forEach((e=>{le(e.getDate())&&t.addTask(e)}));return t.displayProject(),t}}(e)))),o.addEventListener("click",(()=>me(function(e){if(e.length>0){const t=v("This Week");for(let n=0;n<e.length;n++)e[n].todos.forEach((e=>{fe(e.getDate())&&t.addTask(e)}));return t.displayProject(),t}}(e)))),i.addEventListener("click",(()=>me(function(e){if(e.length>0){const t=v("Important");for(let n=0;n<e.length;n++)return e[n].todos.forEach((e=>{e.getPrio()&&t.addTask(e)})),t.displayProject(),t}}(e)))),document.getElementById("add-proj")}(ge)})()})();
//# sourceMappingURL=app.bundle.js.map