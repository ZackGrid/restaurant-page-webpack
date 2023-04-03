(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>h});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),d=t.n(c),s=new URL(t(791),t.b),p=new URL(t(180),t.b),u=i()(o()),l=d()(s),m=d()(p);u.push([e.id,"* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n:root {\n  --white: rgb(250, 245, 245);\n  --main: rgba(241, 97, 39, 0.9);\n  --secondary: rgb(64, 137, 233);\n  --grey: rgb(183, 189, 194);\n  --dark-grey: rgb(99, 103, 105);\n}\n\n@font-face {\n  font-family: 'orkney-medium';\n  src: url("+l+") format('woff2'),\n    url("+m+") format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\nbody {\n  background-color: var(--grey);\n  font-family: 'orkney-medium';\n}\n\n#content {\n  display: grid;\n  background-color: var(--white);\n}\n\n/* Homepage--------------------------------- */\n\n.header p {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  padding: 12px;\n  letter-spacing: 1px;\n}\n\n.header p:hover {\n  cursor: pointer;\n  text-shadow: 3px 3px rgba(39, 50, 75, 0.8);\n  transition: 0.5s ease;\n  background-color: var(--main);\n}\n\n.header p:active {\n  background-color: var(--secondary);\n  transition: none;\n}\n\n.header {\n  display: grid;\n  height: 60px;\n  grid-template-columns: 2fr repeat(3, 1fr);\n  justify-items: center;\n  color: var(--white);\n  background-color: var(--secondary);\n  font-weight: bold;\n  font-size: 1.4rem;\n  box-shadow: 0px 5px 10px 2px var(--grey);\n}\n\n.order-button {\n  border: none;\n  font: inherit;\n  font-weight: bold;\n  font-size: 1.1rem;\n  letter-spacing: 1px;\n  color: var(--white);\n  background-color: var(--main);\n  padding: 10px;\n  box-shadow: 0px 8px 12px -5px rgb(157, 160, 161);\n  text-shadow: 2px 3px rgba(39, 50, 75, 0.8);\n}\n\n.order-button:hover {\n  cursor: pointer;\n  text-shadow: -3px 4px 2px rgba(19, 26, 43, 0.8);\n  transition: 0.5s ease;\n}\n\n.order-button:active {\n  background-color: var(--secondary);\n  transition: none;\n}\n\n.home-images {\n  display: grid;\n  margin: 80px;\n  gap: 25px;\n  grid-template-columns: repeat(2, 1fr);\n  align-items: center;\n  background-color: var(--white);\n}\n\nimg {\n  box-shadow: 0px 0px 15px 2px var(--grey);\n}\n\n.cosmos-pizza {\n  width: 67%;\n  border-radius: 10px;\n  justify-self: center;\n}\n\n.yard-pizza {\n  grid-column: 2 / 3;\n  width: 100%;\n  border-radius: 10px;\n}\n\n.call-to-action {\n  display: grid;\n  justify-content: center;\n  gap: 20px;\n}\n\n.cucumber-pizza {\n  font-size: 2rem;\n  font-style: italic;\n  color: var(--dark-grey);\n}\n\n.kramer-throw {\n  border-radius: 10px;\n  height: 70%;\n  justify-self: center;\n}\n\n.footer {\n  background-color: var(--grey);\n}\n\n.footer>p {\n  text-align: center;\n  padding: 10px;\n}\n\n/* Menu/Order --------------------------------- */\n\n.order-form {\n  margin: 25px auto;\n  padding: 10px;\n  width: clamp(350px, 50%, 800px);\n}\n\nfieldset {\n  border-radius: 10px;\n  padding: 25px;\n  border: 2px solid var(--main);\n  margin-bottom: 25px;\n}\n\nlegend {\n  background-color: var(--secondary);\n  color: var(--white);\n  border-radius: 10px;\n  padding: 8px;\n  font-size: 1.1rem;\n}\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin-right: 10px;\n}\n\n.choose-size {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: center;\n}\n\n.choose-top {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n\n}\n\n.choose-top div {\n  margin-bottom: 10px;\n}\n\n#buttons {\n  display: flex;\n  justify-content: space-around;\n}\n\n#buttons button {\n  padding: 10px;\n  border: none;\n  border-radius: 10px;\n  font-family: inherit;\n  font-size: 1rem;\n  font-weight: bold;\n  letter-spacing: 1px;\n  color: var(--white);\n}\n\n#reset-bttn {\n  background-color: var(--secondary);\n}\n\n#order-bttn {\n  background-color: var(--main);\n}\n\n#buttons button:hover {\n  cursor: pointer;\n  box-shadow: -5px 8px var(--dark-grey);\n  transition: 0.5s ease;\n}\n\n#buttons button:active {\n  background-color: var(--white);\n  color: var(--dark-grey);\n  transition: none;\n}\n\n/* About--------------------------------- */\n\n.about-tab {\n  display: grid;\n  justify-items: center;\n  margin: 30px auto;\n  width: 50%;\n  gap: 25px;\n}\n\n.kramer-img {\n  width: 50%;\n  border-radius: 10px;\n}\n\n.intern-wanted {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: auto;\n  justify-items: center;\n  place-items: center;\n  text-align: center;\n  margin: 30px auto;\n  background-color: var(--secondary);\n  color: var(--white);\n  width: 50%;\n  border-radius: 10px;\n  padding: 10px;\n}\n\n.intern-wanted-txt {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  font-weight: bold;\n  font-size: 1.1rem;\n  letter-spacing: 1px;\n}\n\n.experience {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n}\n\n.apply {\n  grid-column: 2 / 3;\n  grid-row: 1 / 3;\n  border: 2px solid var(--white);\n  background-color: var(--main);\n  color: var(--white);\n  border-radius: 10px;\n  padding: 10px;\n}\n\n.apply:hover {\n  cursor: pointer;\n  box-shadow: -5px 5px black;\n  transition: 0.5s ease;\n}\n\n.apply:active {\n  box-shadow: none;\n  background-color: var(--secondary);\n  color: var(--white);\n  transition: none;\n}\n\n/* Media query for cellphones --------------------------- */\n@media only screen and (max-width: 800px) {\n\n  .header p {\n    padding: 8px;\n  }\n\n  .header {\n    font-size: 1rem;\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  .home-images {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto;\n    margin: 20px;\n    justify-items: center;\n  }\n\n  .cosmos-pizza {\n    width: 80%;\n  }\n\n  .yard-pizza {\n    width: 80%;\n    grid-column: auto;\n    grid-row: auto;\n  }\n\n  .cucumber-pizza {\n    margin-top: 20px;\n    text-align: center;\n    font-size: 1.5rem;\n  }\n\n  .kramer-throw {\n    height: 60%;\n  }\n\n  .kramer-img {\n    width: 70%;\n  }\n\n  .about-tab {\n    width: 70%;\n  }\n\n  .intern-wanted {\n    width: 70%;\n  }\n}",""]);const h=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var p=[].concat(e[s]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],p=a[s]||0,u="".concat(s," ").concat(p);a[s]=p+1;var l=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==l)n[l].references++,n[l].updater(m);else{var h=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=r(e,o),s=0;s<a.length;s++){var p=t(a[s]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},180:(e,n,t)=>{e.exports=t.p+"2c9414a5a40ae7a9fd6a.woff"},791:(e,n,t)=>{e.exports=t.p+"549260e1fdc96af467b5.woff2"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),d=t.n(c),s=t(216),p=t.n(s),u=t(589),l=t.n(u),m=t(426),h={};h.styleTagTransform=l(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=p(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const g=t.p+"273d861de6c3c4589bf1.jpg",f=t.p+"e90580745b0a02e4e5b8.avif",b=t.p+"7c4d657308c8251e8e98.gif",y=(e,n,t)=>{const r=document.createElement("p");r.innerHTML=e,r.className=n,t.appendChild(r)},x=(e,n,t)=>{const r=document.createElement("img");r.src=e,r.className=n,t.appendChild(r)},v=(e,n)=>{const t=document.createElement("fieldset");return t.className=e,t.innerHTML="<legend>"+n+"</legend>",t},w=(e,n,t,r,o,a)=>{const i=document.createElement("div");i.className=r,i.innerHTML='<input type="'+e+'" name="'+n+'" id="'+r+'" value="'+r+'" '+o+'><label for="'+r+'">'+t+"</label>",a.appendChild(i)},k=t.p+"044358b96c269b96be6c.jpg";(()=>{const e=document.querySelector("#content"),n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div"),o=document.createElement("button"),a=document.createElement("div");o.className="header-bttn order-button",n.className="header",t.className="footer",r.className="call-to-action",a.className="home-images",y("COSMO's","header-bttn cosmos",n),y("HOME","header-bttn home",n),y("MENU","header-bttn menu",n),y("ABOUT","header-bttn about",n),y("ORDER NOW &#127829","order-now",o),x(g,"cosmos-pizza",a),x(f,"yard-pizza",a),y(" - You can even put cucumbers on your pie! - ","cucumber-pizza",r),x(b,"kramer-throw",r),y("Copyright&copy; Kramerica Industries","kramerica-copyright",t),e.appendChild(n),e.appendChild(o),e.appendChild(a),e.appendChild(r),e.appendChild(t)})();const z=document.querySelector(".home-images"),C=document.querySelector(".call-to-action"),S=document.querySelectorAll(".header-bttn"),E=document.querySelector(".footer"),N=document.querySelector(".title");S.forEach((e=>e.addEventListener("click",(()=>{if((e.className.includes("home")||e.className.includes("cosmos"))&&window.location.reload(),e.className.includes("menu")||e.className.includes("order-button")){if(z.remove(),C.remove(),E.remove(),document.querySelector(".about-tab")){const e=document.querySelector(".about-tab"),n=document.querySelector(".intern-wanted"),t=document.querySelector(".footer");e.remove(),n.remove(),t.remove()}N.textContent="Menu - Order",!document.querySelector(".order-form")&&(()=>{const e=document.querySelector("#content"),n=document.createElement("form"),t=document.createElement("div"),r=document.createElement("button"),o=document.createElement("button"),a=document.createElement("div");a.id="buttons",r.id="order-bttn",o.id="reset-bttn",t.className="footer",n.className="order-form";const i=v("choose-size","Choose the size of your pizza"),c=v("choose-top","Choose your toppings");w("radio","pizza-size","Small","small","",i),w("radio","pizza-size","Medium","medium","checked",i),w("radio","pizza-size","Large","large","",i),w("checkbox","topping","Tomato Sauce","tomato-sauce","checked",c),w("checkbox","topping","Mozzarella","mozzarella","checked",c),w("checkbox","topping","Pepperoni","pepperoni","",c),w("checkbox","topping","Cheddar","cheddar","",c),w("checkbox","topping","Onions","onions","",c),w("checkbox","topping","Garlic","garlic","",c),w("checkbox","topping","Cucumber","cucumber","checked",c),w("checkbox","topping","Pineapple","pineapple","",c),w("checkbox","topping","Bacon","bacon","",c),w("checkbox","topping","Zucchini","zucchini","",c),w("checkbox","topping","Sausage","sausage","",c),w("checkbox","topping","Fried Chicken","fried-chicken","",c),y("Copyright&copy; Kramerica Industries","kramerica-copyright",t),r.innerHTML="ORDER PIZZA",r.setAttribute("type","submit"),o.innerHTML="RESET ORDER",o.setAttribute("type","reset"),n.appendChild(i),n.appendChild(c),a.appendChild(r),a.appendChild(o),n.appendChild(a),e.appendChild(n),e.appendChild(t)})()}if(e.className.includes("about")){if(z.remove(),C.remove(),E.remove(),document.querySelector(".order-form")){const e=document.querySelector(".order-form"),n=document.querySelector(".footer");e.remove(),n.remove()}N.textContent="About",!document.querySelector(".about-tab")&&(()=>{const e=document.querySelector("#content"),n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div");t.className="intern-wanted",n.className="about-tab",n.innerHTML="<h2>About</h2>",r.className="footer",y("“It's a pizza place where you make your own pie! We give you the dough, the sauce, the cheese...you pound it, slap it, you flip it up into the air...you put your toppings on and you slide it into the oven! Sounds good, huh?”  — Cosmo Kramer, Seinfeld, Season 6: The Couch","about-txt",n),x(k,"kramer-img",n),y("Address: 129 west 81st street, New York/NY","address",n),y("Intern Wanted!","intern-wanted-txt",t),y("Get real-world corporate experience","experience",t),y("Apply","apply",t),y("Copyright&copy; Kramerica Industries","kramerica-copyright",r),e.appendChild(n),e.appendChild(t),e.appendChild(r)})()}}))))})()})();