(()=>{"use strict";var n={364:(n,e,t)=>{t.d(e,{A:()=>m});var o=t(601),r=t.n(o),a=t(314),d=t.n(a),c=t(417),i=t.n(c),l=new URL(t(858),t.b),s=d()(r()),p=i()(l);s.push([n.id,`:root{\n    --primary-color: #1c1917; /*stone like color */\n    --secondary-color: #f59e0b;\n    --fourth-color: #fef08a;\n    --third-color: #d4d4d4;\n}\n.profiles{\n    flex:1;\n    width: 80%;\n    max-height: 80%;\n    align-self: center;\n    margin-top: 7rem;\n    display: flex;\n    flex-direction: column;\n}\n.chefs{\n    flex: 1;\n    display: flex;\n}\n.chef{\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n}\n.tit{\n    flex: .5;\n    display: flex;\n    justify-content: center;\n}\n.c-t{\n    color: white;\n    font-size: 2rem;\n}\n.pic{\n    flex: 1;\n    border: solid 4px var(--fourth-color);\n    max-width: 50%;\n    margin-left: 8rem;\n    background-image: url(${p});\n}\n.con{\n    flex: .5;\n    display: flex;\n    flex-direction: column;\n}\n.con div{\n    flex: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n}\n.con div span{\n    flex: auto;\n    max-width: 50%;\n    color: white;\n    font-size: 1.3rem;\n}\n.house{\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n}\n.inquiry{\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.in-container{\n    flex: 1;\n    max-width: 50%;\n    max-height: 80%;\n    height: 100%;\n    border: solid 4px var(--fourth-color);\n    background-color: black;\n    display: flex;\n    flex-direction: column;\n}\n.i-title{\n    flex: 1;\n    display: flex;\n    justify-content: center;\n}\n.i-title span{\n    justify-content: center;\n    font-size: 2rem;\n    padding-top: 5px;\n    color: white;\n}\n.i-content{\n    flex: 2;\n    display: flex;\n}\n.i-content div{\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n}\n.i-content div p{\n    text-align: center;\n    color: white;\n    font-size: 1.5rem;\n}`,""]);const m=s},815:(n,e,t)=>{t.d(e,{A:()=>f});var o=t(601),r=t.n(o),a=t(314),d=t.n(a),c=t(417),i=t.n(c),l=new URL(t(724),t.b),s=new URL(t(172),t.b),p=d()(r()),m=i()(l),u=i()(s);p.push([n.id,`@font-face {\n    font-family: 'rich';\n    src: url(${m});\n}\n:root{\n    --primary-color: #1c1917; /*stone like color */\n    --secondary-color: #f59e0b;\n    --fourth-color: #fef08a;\n    --third-color: #d4d4d4;\n}\nbody{\n    background-color: var(--primary-color);\n    background-image: url(${u});\n    background-size: 20rem;\n    height: 100vh;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    overflow: scroll;\n}\n#content{\n    flex: 6;\n    background-color: var(--primary-color);\n    align-self: center;\n    min-width: 80rem;\n    min-height: 70rem;\n    display: flex;\n    flex-direction: column;\n    border: solid 4px var(--fourth-color);\n    border-radius: 2rem;\n}\n.h-1{\n    flex: 1;\n    display: flex;\n    justify-content: center;\n}\n.h-1 div{\n    font-family: 'rich';\n    color: var(--fourth-color);\n    font-size: 4rem;\n}\n.h-2{\n    flex: 4;\n    display: flex;\n    justify-content: center;\n}\n.main-c{\n    flex: 1;\n    max-width: 35rem;\n    background-color: var(--third-color);\n    border: solid var(--fourth-color) 6px;\n    border-radius: 2rem;\n}\n.c-1{\n    margin-left: auto;\n    margin-right: auto;\n    width: 25rem;\n    height: 22rem;\n    font-size: 1.8rem;\n    color: black;\n    font-family: 'monospaced';\n}\n.auth{\n    font-weight: bold;\n    font-size: 2rem;\n    color: black;\n}\n.h-3{\n    flex: 2;\n    display: flex;\n    justify-content: center;\n}\n.g-c{\n    min-width: 50rem;\n    max-height: 8rem;\n    margin-top: 2rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr ;\n    column-gap: 8px;\n    grid-template-rows: 1fr 1fr;\n}\n.g-c div{\n    border: solid 2px var(--fourth-color);\n    background-color: black;\n    color: wheat;\n    display: flex;\n    flex-direction: column;\n}\n.g-c p{\n    padding: 0;\n    margin: 0;\n    flex: 1;\n    text-align: center;\n}\n.day{\n    padding-top: 10px;\n    font-family: 'rich';\n    font-weight: bold;\n    font-size: 40px;\n    color: var(--fourth-color);\n}\n.sunday{\n    grid-column: 1/4;\n}\n.h-4{\n    flex: 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.address{\n    flex: 1;\n    max-height: 8rem;\n    height: 100%;\n    max-width: 40rem;\n    border: solid 4px var(--fourth-color);\n    border-radius: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: black;\n}\n.address div{\n    height: 5rem;\n    width: 20rem;\n    font-size: 1.5rem;\n    font-weight: bold;\n    color: white;\n    font-family: 'Courier New', Courier, monospace;\n}\n.address div p{\n    margin: 0;\n}\n.footer{\n    flex: 1;\n}\nheader{\n    flex: 1;\n    height: 5rem;\n}\nnav{\n    display: flex;\n    height: 3rem;\n    justify-content: center;\n    gap: 3rem;\n    margin-top: 2rem;\n}\nnav button{\n    flex: auto;\n    max-width: 5rem;\n    max-height: 2rem;\n    border-radius: 14px;\n    color: var(--third-color);\n    font-weight: bold;\n    font-size: 1rem;\n    border: none;\n    background-color: var(--primary-color);\n    border-bottom: 2px solid var(--secondary-color);\n    font-family: 'Courier New', Courier, monospace;\n}\nnav button:hover{\n    background-color: var(--secondary-color);\n    color: var(--primary-color);\n    font-weight: bold;\n    border-bottom: solid var(--third-color) 4px;\n}`,""]);const f=p},775:(n,e,t)=>{t.d(e,{A:()=>j});var o=t(601),r=t.n(o),a=t(314),d=t.n(a),c=t(417),i=t.n(c),l=new URL(t(612),t.b),s=new URL(t(933),t.b),p=new URL(t(373),t.b),m=new URL(t(112),t.b),u=new URL(t(610),t.b),f=new URL(t(528),t.b),h=new URL(t(233),t.b),g=new URL(t(489),t.b),b=new URL(t(219),t.b),x=new URL(t(125),t.b),v=new URL(t(922),t.b),y=d()(r()),C=i()(l),L=i()(s),E=i()(p),w=i()(m),k=i()(u),A=i()(f),M=i()(h),S=i()(g),z=i()(b),R=i()(x),T=i()(v);y.push([n.id,`:root{\n    --primary-color: #1c1917; /*stone like color */\n    --secondary-color: #f59e0b;\n    --fourth-color: #fef08a;\n    --third-color: #d4d4d4;\n}\n.border{\n    border-left: solid .4rem var(--third-color);\n    border-right: solid .3rem var(--third-color);\n}\n.last-b{\n    border-bottom-left-radius: 2rem;\n    border-bottom-right-radius: 2rem;\n}\n.m-title{\n    background-color: black;\n    flex: .8;\n    border-top-right-radius: 2rem;\n    border-top-left-radius: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-image: url(${C});\n    background-size:20rem;\n    background-position: 10%;\n}\n.mL{\n    flex: auto;\n    max-width: 15rem;\n    min-height: 4rem;\n    color: var(--fourth-color);\n    font-weight: 50%;\n    text-align: center;\n    font-family: 'rich';\n    font-size: 8rem;\n}\n.a-title{\n    flex: 1;\n    background-color: black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.aL{\n    flex: auto;\n    max-width: 15rem;\n    min-height: 4rem;\n    color: white;\n    font-weight: 50%;\n    text-align: center;\n    font-family: 'rich';\n    font-size: 5rem;\n}\n.appetizers{\n    flex: 1;\n    display: flex;\n    background-color: black;\n}\n.appe{\n    flex: 1;\n    border: solid 2px var(--fourth-color);\n}\n.a1{\n    background-image: url(${L});\n}\n.a2{\n    background-image: url(${E});\n}\n.a3{\n    background-image: url(${w});\n    background-size: cover;\n}\n.a4{\n    background-image: url(${k});\n    background-size: cover;\n}\n.main-title{\n    flex: 1;\n    background-color: maroon;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.m{\n    flex: auto;\n    max-width: 25rem;\n    min-height: 4rem;\n    color: var(--fourth-color);\n    font-weight: 50%;\n    text-align: center;\n    font-family: 'rich';\n    font-size: 5rem;\n}\n.main-course{\n    flex: 1;\n    display: flex;\n    background-color: maroon;\n}\n.main{\n    flex: 1;\n}\n.steak{\n    background-image: url(${A});\n    background-repeat: no-repeat;\n    background-size: 35rem 13rem;\n    background-position: center;\n    border: solid 2px var(--secondary-color);\n}\n.pasta{\n    background-image: url(${M});\n    background-repeat: no-repeat;\n    background-size: 35rem 13rem;\n    background-position: center;\n    border: solid 2px var(--secondary-color);\n}\n.d-title{\n    flex: 1;\n    background-color: var(--third-color);\n    \n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.ad{\n    flex: auto;\n    max-width: 15rem;\n    min-height: 4rem;\n    color: black;\n    font-weight: 50%;\n    text-align: center;\n    font-family: 'rich';\n    font-size: 5rem;\n}\n.dessert{\n    flex: 1;\n    display: flex;\n    background-color: var(--third-color);\n}\n.des{\n    flex: 1;\n    border: solid 3px var(--fourth-color);\n    border-radius: 2rem;\n}\n.ice{\n    background-image: url(${S});\n    background-size: cover;\n    background-position: center;\n}\n.pana{\n    background-image: url(${z});\n    background-size: cover;\n    background-position: center;\n}\n.moch{\n    background-image: url(${R});\n    background-size: cover;\n    background-position: center;\n}\n.cake{\n    background-image: url(${T});\n    background-size: cover;\n    background-position: center;\n}`,""]);const j=y},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var d={};if(o)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(d[i]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);o&&d[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},d=[],c=0;c<n.length;c++){var i=n[c],l=o.base?i[0]+o.base:i[0],s=a[l]||0,p="".concat(l," ").concat(s);a[l]=s+1;var m=t(p),u={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var f=r(u,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}d.push(p)}return d}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var d=0;d<a.length;d++){var c=t(a[d]);e[c].references--}for(var i=o(n,r),l=0;l<a.length;l++){var s=t(a[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=i}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},724:(n,e,t)=>{n.exports=t.p+"39b1e5219121a87addc2.otf"},219:(n,e,t)=>{n.exports=t.p+"864441ae287b9c372b56.png"},933:(n,e,t)=>{n.exports=t.p+"41d01d7bc214e4ca55fd.png"},112:(n,e,t)=>{n.exports=t.p+"6337aea5947dbec308c5.png"},610:(n,e,t)=>{n.exports=t.p+"e43d464a6c614fa24a28.png"},922:(n,e,t)=>{n.exports=t.p+"5ccebd81d7bfd618b3b7.png"},172:(n,e,t)=>{n.exports=t.p+"200120738dcae04296dc.png"},373:(n,e,t)=>{n.exports=t.p+"daa1596c2ed44f769c36.png"},489:(n,e,t)=>{n.exports=t.p+"a11e0c8e2e12dad3fcd0.png"},125:(n,e,t)=>{n.exports=t.p+"e8e8db3f326aeef4f8bb.png"},233:(n,e,t)=>{n.exports=t.p+"a40ceee8055340d6a998.png"},858:(n,e,t)=>{n.exports=t.p+"a8aab10be82893ec5f59.png"},528:(n,e,t)=>{n.exports=t.p+"90f475873a35de4e09db.png"},612:(n,e,t)=>{n.exports=t.p+"459d766081f0307b55a6.webp"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),o=t(825),r=t.n(o),a=t(659),d=t.n(a),c=t(56),i=t.n(c),l=t(540),s=t.n(l),p=t(113),m=t.n(p),u=t(815),f={};f.styleTagTransform=m(),f.setAttributes=i(),f.insert=d().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=s(),e()(u.A,f),u.A&&u.A.locals&&u.A.locals;var h=t(775),g={};g.styleTagTransform=m(),g.setAttributes=i(),g.insert=d().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=s(),e()(h.A,g),h.A&&h.A.locals&&h.A.locals;var b=t(364),x={};x.styleTagTransform=m(),x.setAttributes=i(),x.insert=d().bind(null,"head"),x.domAPI=r(),x.insertStyleElement=s(),e()(b.A,x),b.A&&b.A.locals&&b.A.locals;const v=()=>{const n=document.querySelector("#content");for(;n.firstChild;)n.removeChild(n.lastChild);const e=document.createElement("div");e.classList.add("h-1"),n.appendChild(e);const t=document.createElement("div");t.classList.add("title"),t.textContent="My Restaurant Page",e.appendChild(t);const o=document.createElement("div");o.classList.add("h-2"),n.appendChild(o);const r=document.createElement("div");r.classList.add("main-c"),o.appendChild(r);const a=document.createElement("div");a.classList.add("c-1"),r.appendChild(a);const d=document.createElement("p");d.textContent="Nestled in Cebu's vibrant culinary scene, our restaurant shines as a beacon of excellence, renowned for its fusion of flavors, impeccable service, and inviting ambiance. With dishes crafted with passion and precision, we're honored to be one of Cebu's premier dining destinations, where each meal is a celebration of gastronomy.",a.appendChild(d);const c=document.createElement("p");c.classList.add("auth"),c.textContent="-Cebu's Top 10",a.appendChild(c);const i=document.createElement("div");i.classList.add("h-3"),n.appendChild(i);const l=document.createElement("div");l.classList.add("g-c"),i.appendChild(l);const s=[{day:"Monday",open:"10-00 AM",close:"10:00 PM,"},{day:"Tuesday",open:"10-00 AM",close:"10:00 PM,"},{day:"Wednesday",open:"10-00 AM",close:"10:00 PM,"},{day:"Thursday",open:"10-00 AM",close:"10:00 PM,"},{day:"Friday",open:"10-00 AM",close:"10:00 PM,"},{day:"Saturday",open:"8-00 AM",close:"11:00 PM,"},{day:"Sunday",open:"Closed"}];for(let n=0;n<7;n++){const e=s[n].open,t=s[n].close,o=s[n].day,r=document.createElement("div");"Sunday"==o&&r.classList.add("sunday");const a=document.createElement("p");a.classList.add("day"),a.textContent=o,r.appendChild(a);const d=document.createElement("p");d.textContent=e,r.appendChild(d);const c=document.createElement("p");c.textContent=t,r.appendChild(c),l.appendChild(r)}const p=document.createElement("div");p.classList.add("h-4"),n.appendChild(p);const m=document.createElement("div");m.classList.add("address"),p.appendChild(m);const u=document.createElement("div");m.appendChild(u);const f=document.createElement("p");f.textContent="Address";const h=document.createElement("p");h.textContent="666 St. Sanciangko St. Cebu City",u.appendChild(f),u.appendChild(h)};v(),document.querySelector("#home").addEventListener("click",(()=>{v()})),document.querySelector("#menu").addEventListener("click",(()=>{(()=>{const n=document.querySelector("#content");for(;n.firstChild;)n.removeChild(n.lastChild);const e=document.createElement("div");e.classList.add("m-title"),e.classList.add("border");const t=document.createElement("div");t.classList.add("mL"),t.textContent="Menu",e.appendChild(t),n.appendChild(e);const o=document.createElement("div");o.classList.add("a-title"),o.classList.add("border");const r=document.createElement("div");r.classList.add("aL"),r.textContent="Appetizers",o.appendChild(r),n.appendChild(o);const a=document.createElement("div");a.classList.add("appetizers"),a.classList.add("border");const d=["a1","a2","a3","a4"];for(let n=0;n<d.length;n++){const e=document.createElement("div");e.classList.add("appe"),e.classList.add(d[n]),a.appendChild(e)}n.appendChild(a);const c=document.createElement("div");c.classList.add("main-title"),c.classList.add("border");const i=document.createElement("div");i.classList.add("m"),i.textContent="Main Course",c.appendChild(i),n.appendChild(c);const l=document.createElement("div");l.classList.add("main-course"),l.classList.add("border");for(let n=0;n<2;n++){const e=document.createElement("div");e.classList.add("main"),0==n?e.classList.add("steak"):e.classList.add("pasta"),l.appendChild(e)}n.appendChild(l);const s=document.createElement("div");s.classList.add("d-title"),s.classList.add("border");const p=document.createElement("div");p.classList.add("ad"),p.textContent="Desserts",s.appendChild(p),n.appendChild(s);const m=document.createElement("div");m.classList.add("dessert"),s.classList.add("border");const u=["cake","ice","pana","moch"];for(let n=0;n<4;n++){const e=document.createElement("div");e.classList.add("des"),e.classList.add(u[n]),m.appendChild(e)}n.appendChild(m)})()})),document.querySelector("#contact").addEventListener("click",(()=>{(()=>{const n=document.querySelector("#content");for(;n.firstChild;)n.removeChild(n.lastChild);const e=document.createElement("div");e.classList.add("profiles"),n.appendChild(e);const t=[{Title:"Head Chef",Name:"John Legend",Num:"+63 923959383"},{Title:"Assistant Chef",Name:"Not John Legend",Num:"+63 123421323"}],o=document.createElement("div");o.classList.add("chefs"),e.appendChild(o);for(let n=0;n<2;n++){const e=document.createElement("div");e.classList.add("chef"),o.appendChild(e);const r=document.createElement("div");r.classList.add("tit"),e.appendChild(r);const a=document.createElement("div");a.classList.add("c-t"),a.textContent=t[n].Title,r.appendChild(a);const d=document.createElement("div");d.classList.add("pic"),e.appendChild(d);const c=document.createElement("div");c.classList.add("con"),e.appendChild(c);const i=document.createElement("div");i.classList.add("nam"),c.appendChild(i);const l=document.createElement("div");l.classList.add("num"),c.appendChild(l);const s=document.createElement("span");s.textContent=t[n].Name,i.appendChild(s);const p=document.createElement("span");p.textContent=t[n].Num,l.appendChild(p)}const r=document.createElement("div");r.classList.add("house"),n.appendChild(r);const a=[{Span:"General Inquies",Resto:"Restaurant's Hotline:",RestoH:"26-3434-450",Man:"Manager's Contact:",ManC:"+63 2344423424"},{Span:"Reservation Inquiry",Num:"+666 666 999 666"}];for(let n=0;n<2;n++){const e=document.createElement("div");e.classList.add("inquiry"),r.appendChild(e);const t=document.createElement("div");t.classList.add("in-container"),e.appendChild(t);const o=document.createElement("div");o.classList.add("i-title"),t.appendChild(o);const d=document.createElement("div");if(d.classList.add("i-content"),t.appendChild(d),1==n){const e=document.createElement("span");e.textContent=a[n].Span,o.appendChild(e);const t=document.createElement("div");d.appendChild(t);const r=document.createElement("p");r.textContent=a[n].Num,t.appendChild(r)}else{const e=document.createElement("span");e.textContent=a[n].Span,o.appendChild(e);const t=document.createElement("div");t.classList.add("h-num"),d.appendChild(t);const r=document.createElement("div");t.appendChild(r);const c=document.createElement("p");c.textContent=a[n].Resto,r.appendChild(c);const i=document.createElement("p");i.textContent=a[n].RestoH,r.appendChild(i);const l=document.createElement("div");l.classList.add("man-num"),d.appendChild(l);const s=document.createElement("div");l.appendChild(s);const p=document.createElement("p");p.textContent=a[n].Man,s.appendChild(p);const m=document.createElement("p");m.textContent=a[n].ManC,s.appendChild(m)}}})()}))})()})();