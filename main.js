(()=>{"use strict";var n={815:(n,e,r)=>{r.d(e,{A:()=>f});var t=r(601),o=r.n(t),a=r(314),c=r.n(a),i=r(417),d=r.n(i),l=new URL(r(724),r.b),s=new URL(r(172),r.b),u=c()(o()),p=d()(l),m=d()(s);u.push([n.id,`@font-face {\n    font-family: 'rich';\n    src: url(${p});\n}\n:root{\n    --primary-color: #1c1917; /*stone like color */\n    --secondary-color: #f59e0b;\n    --fourth-color: #fef08a;\n    --third-color: #d4d4d4;\n}\nbody{\n    background-color: var(--primary-color);\n    background-image: url(${m});\n    background-size: 20rem;\n    height: 100vh;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    overflow: scroll;\n}\n#content{\n    flex: 6;\n    background-color: var(--primary-color);\n    align-self: center;\n    min-width: 80rem;\n    min-height: 70rem;\n    display: flex;\n    flex-direction: column;\n    border: solid 4px var(--fourth-color);\n    border-radius: 2rem;\n}\n.h-1{\n    flex: 1;\n    display: flex;\n    justify-content: center;\n}\n.h-1 div{\n    font-family: 'rich';\n    color: var(--fourth-color);\n    font-size: 4rem;\n}\n.h-2{\n    flex: 4;\n    display: flex;\n    justify-content: center;\n}\n.main-c{\n    flex: 1;\n    max-width: 35rem;\n    background-color: var(--third-color);\n    border: solid var(--fourth-color) 6px;\n    border-radius: 2rem;\n}\n.c-1{\n    margin-left: auto;\n    margin-right: auto;\n    width: 25rem;\n    height: 22rem;\n    font-size: 1.8rem;\n    color: black;\n    font-family: 'monospaced';\n}\n.auth{\n    font-weight: bold;\n    font-size: 2rem;\n    color: black;\n}\n.h-3{\n    flex: 2;\n    display: flex;\n    justify-content: center;\n}\n.g-c{\n    min-width: 50rem;\n    max-height: 8rem;\n    margin-top: 2rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr ;\n    column-gap: 8px;\n    grid-template-rows: 1fr 1fr;\n}\n.g-c div{\n    border: solid 2px var(--fourth-color);\n    background-color: black;\n    color: wheat;\n    display: flex;\n    flex-direction: column;\n}\n.g-c p{\n    padding: 0;\n    margin: 0;\n    flex: 1;\n    text-align: center;\n}\n.day{\n    padding-top: 10px;\n    font-family: 'rich';\n    font-weight: bold;\n    font-size: 40px;\n    color: var(--fourth-color);\n}\n.sunday{\n    grid-column: 1/4;\n}\n.h-4{\n    flex: 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.address{\n    flex: 1;\n    max-height: 8rem;\n    height: 100%;\n    max-width: 40rem;\n    border: solid 4px var(--fourth-color);\n    border-radius: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: black;\n}\n.address div{\n    height: 5rem;\n    width: 20rem;\n    font-size: 1.5rem;\n    font-weight: bold;\n    color: white;\n    font-family: 'Courier New', Courier, monospace;\n}\n.address div p{\n    margin: 0;\n}\n.footer{\n    flex: 1;\n}\nheader{\n    flex: 1;\n    height: 5rem;\n}\nnav{\n    display: flex;\n    height: 3rem;\n    justify-content: center;\n    gap: 3rem;\n    margin-top: 2rem;\n}\nnav button{\n    flex: auto;\n    max-width: 5rem;\n    max-height: 2rem;\n    border-radius: 14px;\n    color: var(--third-color);\n    font-weight: bold;\n    font-size: 1rem;\n    border: none;\n    background-color: var(--primary-color);\n    border-bottom: 2px solid var(--secondary-color);\n    font-family: 'Courier New', Courier, monospace;\n}\nnav button:hover{\n    background-color: var(--secondary-color);\n    color: var(--primary-color);\n    font-weight: bold;\n    border-bottom: solid var(--third-color) 4px;\n}`,""]);const f=u},775:(n,e,r)=>{r.d(e,{A:()=>$});var t=r(601),o=r.n(t),a=r(314),c=r.n(a),i=r(417),d=r.n(i),l=new URL(r(612),r.b),s=new URL(r(933),r.b),u=new URL(r(373),r.b),p=new URL(r(112),r.b),m=new URL(r(610),r.b),f=new URL(r(528),r.b),h=new URL(r(233),r.b),g=new URL(r(489),r.b),b=new URL(r(219),r.b),v=new URL(r(125),r.b),y=new URL(r(922),r.b),x=c()(o()),k=d()(l),w=d()(s),C=d()(u),L=d()(p),E=d()(m),A=d()(f),M=d()(h),S=d()(g),z=d()(b),R=d()(v),T=d()(y);x.push([n.id,`:root{\n    --primary-color: #1c1917; /*stone like color */\n    --secondary-color: #f59e0b;\n    --fourth-color: #fef08a;\n    --third-color: #d4d4d4;\n}\n.border{\n    border-left: solid .4rem var(--third-color);\n    border-right: solid .3rem var(--third-color);\n}\n.last-b{\n    border-bottom-left-radius: 2rem;\n    border-bottom-right-radius: 2rem;\n}\n.m-title{\n    background-color: black;\n    flex: .8;\n    border-top-right-radius: 2rem;\n    border-top-left-radius: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-image: url(${k});\n    background-size:20rem;\n    background-position: 10%;\n}\n.mL{\n    flex: auto;\n    max-width: 15rem;\n    min-height: 4rem;\n    color: var(--fourth-color);\n    font-weight: 50%;\n    text-align: center;\n    font-family: 'rich';\n    font-size: 8rem;\n}\n.a-title{\n    flex: 1;\n    background-color: black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.aL{\n    flex: auto;\n    max-width: 15rem;\n    min-height: 4rem;\n    color: white;\n    font-weight: 50%;\n    text-align: center;\n    font-family: 'rich';\n    font-size: 5rem;\n}\n.appetizers{\n    flex: 1;\n    display: flex;\n    background-color: black;\n}\n.appe{\n    flex: 1;\n    border: solid 2px var(--fourth-color);\n}\n.a1{\n    background-image: url(${w});\n}\n.a2{\n    background-image: url(${C});\n}\n.a3{\n    background-image: url(${L});\n    background-size: cover;\n}\n.a4{\n    background-image: url(${E});\n    background-size: cover;\n}\n.main-title{\n    flex: 1;\n    background-color: maroon;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.m{\n    flex: auto;\n    max-width: 25rem;\n    min-height: 4rem;\n    color: var(--fourth-color);\n    font-weight: 50%;\n    text-align: center;\n    font-family: 'rich';\n    font-size: 5rem;\n}\n.main-course{\n    flex: 1;\n    display: flex;\n    background-color: maroon;\n}\n.main{\n    flex: 1;\n}\n.steak{\n    background-image: url(${A});\n    background-repeat: no-repeat;\n    background-size: 35rem 13rem;\n    background-position: center;\n    border: solid 2px var(--secondary-color);\n}\n.pasta{\n    background-image: url(${M});\n    background-repeat: no-repeat;\n    background-size: 35rem 13rem;\n    background-position: center;\n    border: solid 2px var(--secondary-color);\n}\n.d-title{\n    flex: 1;\n    background-color: var(--third-color);\n    \n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.ad{\n    flex: auto;\n    max-width: 15rem;\n    min-height: 4rem;\n    color: black;\n    font-weight: 50%;\n    text-align: center;\n    font-family: 'rich';\n    font-size: 5rem;\n}\n.dessert{\n    flex: 1;\n    display: flex;\n    background-color: var(--third-color);\n}\n.des{\n    flex: 1;\n    border: solid 3px var(--fourth-color);\n    border-radius: 2rem;\n}\n.ice{\n    background-image: url(${S});\n    background-size: cover;\n    background-position: center;\n}\n.pana{\n    background-image: url(${z});\n    background-size: cover;\n    background-position: center;\n}\n.moch{\n    background-image: url(${R});\n    background-size: cover;\n    background-position: center;\n}\n.cake{\n    background-image: url(${T});\n    background-size: cover;\n    background-position: center;\n}`,""]);const $=x},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(t)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);t&&c[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),r&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=r):s[2]=r),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},c=[],i=0;i<n.length;i++){var d=n[i],l=t.base?d[0]+t.base:d[0],s=a[l]||0,u="".concat(l," ").concat(s);a[l]=s+1;var p=r(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,t);t.byIndex=i,e.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=r(a[c]);e[i].references--}for(var d=t(n,o),l=0;l<a.length;l++){var s=r(a[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=d}}},659:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},724:(n,e,r)=>{n.exports=r.p+"39b1e5219121a87addc2.otf"},219:(n,e,r)=>{n.exports=r.p+"864441ae287b9c372b56.png"},933:(n,e,r)=>{n.exports=r.p+"41d01d7bc214e4ca55fd.png"},112:(n,e,r)=>{n.exports=r.p+"6337aea5947dbec308c5.png"},610:(n,e,r)=>{n.exports=r.p+"e43d464a6c614fa24a28.png"},922:(n,e,r)=>{n.exports=r.p+"5ccebd81d7bfd618b3b7.png"},172:(n,e,r)=>{n.exports=r.p+"200120738dcae04296dc.png"},373:(n,e,r)=>{n.exports=r.p+"daa1596c2ed44f769c36.png"},489:(n,e,r)=>{n.exports=r.p+"a11e0c8e2e12dad3fcd0.png"},125:(n,e,r)=>{n.exports=r.p+"e8e8db3f326aeef4f8bb.png"},233:(n,e,r)=>{n.exports=r.p+"a40ceee8055340d6a998.png"},528:(n,e,r)=>{n.exports=r.p+"90f475873a35de4e09db.png"},612:(n,e,r)=>{n.exports=r.p+"459d766081f0307b55a6.webp"}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.m=n,r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=t[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),r.b=document.baseURI||self.location.href,r.nc=void 0,(()=>{var n=r(72),e=r.n(n),t=r(825),o=r.n(t),a=r(659),c=r.n(a),i=r(56),d=r.n(i),l=r(540),s=r.n(l),u=r(113),p=r.n(u),m=r(815),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=s(),e()(m.A,f),m.A&&m.A.locals&&m.A.locals;var h=r(775),g={};g.styleTagTransform=p(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=s(),e()(h.A,g),h.A&&h.A.locals&&h.A.locals,document.querySelector("#home").addEventListener("click",(()=>{(()=>{const n=document.querySelector("#content");for(;n.firstChild;)n.removeChild(n.lastChild);const e=document.createElement("div");e.classList.add("h-1"),n.appendChild(e);const r=document.createElement("div");r.classList.add("title"),r.textContent="My Restaurant Page",e.appendChild(r);const t=document.createElement("div");t.classList.add("h-2"),n.appendChild(t);const o=document.createElement("div");o.classList.add("main-c"),t.appendChild(o);const a=document.createElement("div");a.classList.add("c-1"),o.appendChild(a);const c=document.createElement("p");c.textContent="Nestled in Cebu's vibrant culinary scene, our restaurant shines as a beacon of excellence, renowned for its fusion of flavors, impeccable service, and inviting ambiance. With dishes crafted with passion and precision, we're honored to be one of Cebu's premier dining destinations, where each meal is a celebration of gastronomy.",a.appendChild(c);const i=document.createElement("p");i.classList.add("auth"),i.textContent="-Cebu's Top 10",a.appendChild(i);const d=document.createElement("div");d.classList.add("h-3"),n.appendChild(d);const l=document.createElement("div");l.classList.add("g-c"),d.appendChild(l);const s=[{day:"Monday",open:"10-00 AM",close:"10:00 PM,"},{day:"Tuesday",open:"10-00 AM",close:"10:00 PM,"},{day:"Wednesday",open:"10-00 AM",close:"10:00 PM,"},{day:"Thursday",open:"10-00 AM",close:"10:00 PM,"},{day:"Friday",open:"10-00 AM",close:"10:00 PM,"},{day:"Saturday",open:"8-00 AM",close:"11:00 PM,"},{day:"Sunday",open:"Closed"}];for(let n=0;n<7;n++){const e=s[n].open,r=s[n].close,t=s[n].day,o=document.createElement("div");"Sunday"==t&&o.classList.add("sunday");const a=document.createElement("p");a.classList.add("day"),a.textContent=t,o.appendChild(a);const c=document.createElement("p");c.textContent=e,o.appendChild(c);const i=document.createElement("p");i.textContent=r,o.appendChild(i),l.appendChild(o)}const u=document.createElement("div");u.classList.add("h-4"),n.appendChild(u);const p=document.createElement("div");p.classList.add("address"),u.appendChild(p);const m=document.createElement("div");p.appendChild(m);const f=document.createElement("p");f.textContent="Address";const h=document.createElement("p");h.textContent="666 St. Sanciangko St. Cebu City",m.appendChild(f),m.appendChild(h)})()})),document.querySelector("#menu").addEventListener("click",(()=>{(()=>{const n=document.querySelector("#content");for(;n.firstChild;)n.removeChild(n.lastChild)})()}))})()})();