(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>h});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),d=t.n(c),s=new URL(t(791),t.b),p=new URL(t(180),t.b),u=i()(o()),l=d()(s),m=d()(p);u.push([n.id,"* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n:root {\n  --white: rgb(250, 245, 245);\n  --main: rgba(241, 97, 39, 0.9);\n  --secondary: rgb(64, 137, 233);\n  --grey: rgb(183, 189, 194);\n  --dark-grey: rgb(99, 103, 105);\n}\n\n@font-face {\n  font-family: 'orkney-medium';\n  src: url("+l+") format('woff2'),\n    url("+m+") format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\nbody {\n  background-color: var(--grey);\n  font-family: 'orkney-medium';\n}\n\n#content {\n  display: grid;\n  background-color: var(--white);\n}\n\n/* Homepage--------------------------------- */\n\n.header p {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  padding: 12px;\n  letter-spacing: 1px;\n}\n\n.header p:hover {\n  cursor: pointer;\n  text-shadow: 3px 3px rgba(39, 50, 75, 0.8);\n  transition: 0.5s ease;\n  background-color: var(--main);\n}\n\n.header p:active {\n  background-color: var(--secondary);\n  transition: none;\n}\n\n.header {\n  display: grid;\n  height: 60px;\n  grid-template-columns: 2fr repeat(3, 1fr);\n  justify-items: center;\n  color: var(--white);\n  background-color: var(--secondary);\n  font-weight: bold;\n  font-size: 1.4rem;\n  box-shadow: 0px 5px 10px 2px var(--grey);\n}\n\n.order-button {\n  border: none;\n  font: inherit;\n  font-weight: bold;\n  font-size: 1.1rem;\n  letter-spacing: 1px;\n  color: var(--white);\n  background-color: var(--main);\n  padding: 10px;\n  box-shadow: 0px 8px 12px -5px rgb(157, 160, 161);\n  text-shadow: 2px 3px rgba(39, 50, 75, 0.8);\n}\n\n.order-button:hover {\n  cursor: pointer;\n  text-shadow: -3px 4px 2px rgba(19, 26, 43, 0.8);\n  transition: 0.5s ease;\n}\n\n.order-button:active {\n  background-color: var(--secondary);\n  transition: none;\n}\n\n.home-images {\n  display: grid;\n  margin: 80px;\n  gap: 25px;\n  grid-template-columns: repeat(2, 1fr);\n  align-items: center;\n  background-color: var(--white);\n}\n\nimg {\n  box-shadow: 0px 0px 15px 2px var(--grey);\n}\n\n.cosmos-pizza {\n  width: 67%;\n  border-radius: 10px;\n  justify-self: center;\n}\n\n.yard-pizza {\n  grid-column: 2 / 3;\n  width: 100%;\n  border-radius: 10px;\n}\n\n.call-to-action {\n  display: grid;\n  justify-content: center;\n  gap: 20px;\n}\n\n.cucumber-pizza {\n  font-size: 2rem;\n  font-style: italic;\n  color: var(--dark-grey);\n}\n\n.kramer-throw {\n  border-radius: 10px;\n  height: 70%;\n  justify-self: center;\n}\n\n.footer {\n  background-color: var(--grey);\n}\n\n.footer>p {\n  text-align: center;\n  padding: 10px;\n}\n\n/* Menu--------------------------------- */\n\n.order-form {\n  margin: 25px auto;\n  padding: 10px;\n  width: clamp(350px, 50%, 800px);\n}\n\nfieldset {\n  border-radius: 10px;\n  padding: 25px;\n  border: 2px solid var(--main);\n  margin-bottom: 25px;\n}\n\nlegend {\n  background-color: var(--secondary);\n  color: var(--white);\n  border-radius: 10px;\n  padding: 8px;\n  font-size: 1.1rem;\n}\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin-right: 10px;\n}\n\n.choose-size {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: center;\n}\n\n.choose-top {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n\n}\n\n.choose-top div {\n  margin-bottom: 10px;\n}\n\n#buttons {\n  display: flex;\n  justify-content: space-around;\n}\n\n#buttons button {\n  padding: 10px;\n  border: none;\n  border-radius: 10px;\n  font-family: inherit;\n  font-size: 1rem;\n  font-weight: bold;\n  letter-spacing: 1px;\n  color: var(--white);\n}\n\n#reset-bttn {\n  background-color: var(--secondary);\n}\n\n#order-bttn {\n  background-color: var(--main);\n}\n\n#buttons button:hover {\n  cursor: pointer;\n  box-shadow: -5px 8px var(--dark-grey);\n  transition: 0.5s ease;\n}\n\n#buttons button:active {\n  background-color: var(--white);\n  color: var(--dark-grey);\n  transition: none;\n}\n\n/* About--------------------------------- */\n\n.about-tab {\n  display: grid;\n  justify-items: center;\n  margin: 30px auto;\n  width: 50%;\n  gap: 25px;\n}\n\n.kramer-img {\n  width: 50%;\n  border-radius: 10px;\n}\n\n.intern-wanted {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: auto;\n  justify-items: center;\n  place-items: center;\n  text-align: center;\n  margin: 30px auto;\n  background-color: var(--secondary);\n  color: var(--white);\n  width: 50%;\n  border-radius: 10px;\n  padding: 10px;\n}\n\n.intern-wanted-txt {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  font-weight: bold;\n  font-size: 1.1rem;\n  letter-spacing: 1px;\n}\n\n.experience {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n}\n\n.apply {\n  grid-column: 2 / 3;\n  grid-row: 1 / 3;\n  border: 2px solid var(--white);\n  background-color: var(--main);\n  color: var(--white);\n  border-radius: 10px;\n  padding: 10px;\n}\n\n.apply:hover {\n  cursor: pointer;\n  box-shadow: -5px 5px black;\n  transition: 0.5s ease;\n}\n\n.apply:active {\n  box-shadow: none;\n  background-color: var(--secondary);\n  color: var(--white);\n  transition: none;\n}\n\n@media only screen and (max-width: 800px) {\n\n  .header p {\n    padding: 10px;\n  }\n\n  .header {\n    font-size: 1.1rem;\n  }\n\n  .home-images {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto;\n    margin: 20px;\n  }\n\n  .cosmos-pizza {\n    width: 100%;\n  }\n\n  .yard-pizza {\n    grid-column: auto;\n    grid-row: auto;\n  }\n\n  .cucumber-pizza {\n    margin-top: 20px;\n    text-align: center;\n    font-size: 1.5rem;\n  }\n\n  .kramer-throw {\n    height: 70%;\n  }\n\n  .kramer-img {\n    width: 70%;\n  }\n\n  .about-tab {\n    width: 70%;\n  }\n\n  .intern-wanted {\n    width: 70%;\n  }\n}",""]);const h=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var p=[].concat(n[s]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],s=r.base?d[0]+r.base:d[0],p=a[s]||0,u="".concat(s," ").concat(p);a[s]=p+1;var l=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==l)e[l].references++,e[l].updater(m);else{var h=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=r(n,o),s=0;s<a.length;s++){var p=t(a[s]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},180:(n,e,t)=>{n.exports=t.p+"2c9414a5a40ae7a9fd6a.woff"},791:(n,e,t)=>{n.exports=t.p+"549260e1fdc96af467b5.woff2"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),d=t.n(c),s=t(216),p=t.n(s),u=t(589),l=t.n(u),m=t(426),h={};h.styleTagTransform=l(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=p(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const g=t.p+"273d861de6c3c4589bf1.jpg",f=t.p+"e90580745b0a02e4e5b8.avif",b=t.p+"7c4d657308c8251e8e98.gif",y=(n,e,t)=>{const r=document.createElement("p");r.innerHTML=n,r.className=e,t.appendChild(r)},v=(n,e,t)=>{const r=document.createElement("img");r.src=n,r.className=e,t.appendChild(r)},x=(n,e)=>{const t=document.createElement("fieldset");return t.className=n,t.innerHTML="<legend>"+e+"</legend>",t},w=(n,e,t,r,o,a)=>{const i=document.createElement("div");i.className=r,i.innerHTML='<input type="'+n+'" name="'+e+'" id="'+r+'" value="'+r+'" '+o+'><label for="'+r+'">'+t+"</label>",a.appendChild(i)},k=t.p+"044358b96c269b96be6c.jpg";(()=>{const n=document.querySelector("#content"),e=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div"),o=document.createElement("button"),a=document.createElement("div");o.className="header-bttn order-button",e.className="header",t.className="footer",r.className="call-to-action",a.className="home-images",y("COSMO's","header-bttn cosmos",e),y("HOME","header-bttn home",e),y("MENU","header-bttn menu",e),y("ABOUT","header-bttn about",e),y("ORDER NOW &#127829","order-now",o),v(g,"cosmos-pizza",a),v(f,"yard-pizza",a),y(" - You can even put cucumbers on your pie! - ","cucumber-pizza",r),v(b,"kramer-throw",r),y("Copyright&copy; Kramerica Industries","kramerica-copyright",t),n.appendChild(e),n.appendChild(o),n.appendChild(a),n.appendChild(r),n.appendChild(t)})();const z=document.querySelector(".home-images"),C=document.querySelector(".call-to-action"),S=document.querySelectorAll(".header-bttn"),E=document.querySelector(".footer");S.forEach((n=>n.addEventListener("click",(()=>{if((n.className.includes("home")||n.className.includes("cosmos"))&&window.location.reload(),n.className.includes("menu")||n.className.includes("order-button")){if(z.remove(),C.remove(),E.remove(),document.querySelector(".about-tab")){const n=document.querySelector(".about-tab"),e=document.querySelector(".intern-wanted"),t=document.querySelector(".footer");n.remove(),e.remove(),t.remove()}!document.querySelector(".order-form")&&(()=>{const n=document.querySelector("#content"),e=document.createElement("form"),t=document.createElement("div"),r=document.createElement("button"),o=document.createElement("button"),a=document.createElement("div");a.id="buttons",r.id="order-bttn",o.id="reset-bttn",t.className="footer",e.className="order-form";const i=x("choose-size","Choose the size of your pizza"),c=x("choose-top","Choose your toppings");w("radio","pizza-size","Small","small","",i),w("radio","pizza-size","Medium","medium","checked",i),w("radio","pizza-size","Large","large","",i),w("checkbox","topping","Tomato Sauce","tomato-sauce","checked",c),w("checkbox","topping","Mozzarella","mozzarella","checked",c),w("checkbox","topping","Pepperoni","pepperoni","",c),w("checkbox","topping","Cheddar","cheddar","",c),w("checkbox","topping","Onions","onions","",c),w("checkbox","topping","Garlic","garlic","",c),w("checkbox","topping","Cucumber","cucumber","checked",c),w("checkbox","topping","Pineapple","pineapple","",c),w("checkbox","topping","Bacon","bacon","",c),w("checkbox","topping","Zucchini","zucchini","",c),w("checkbox","topping","Sausage","sausage","",c),w("checkbox","topping","Fried Chicken","fried-chicken","",c),y("Copyright&copy; Kramerica Industries","kramerica-copyright",t),r.innerHTML="ORDER PIZZA",r.setAttribute("type","submit"),o.innerHTML="RESET ORDER",o.setAttribute("type","reset"),e.appendChild(i),e.appendChild(c),a.appendChild(r),a.appendChild(o),e.appendChild(a),n.appendChild(e),n.appendChild(t)})()}if(n.className.includes("about")){if(z.remove(),C.remove(),E.remove(),document.querySelector(".order-form")){const n=document.querySelector(".order-form"),e=document.querySelector(".footer");n.remove(),e.remove()}!document.querySelector(".about-tab")&&(()=>{const n=document.querySelector("#content"),e=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div");t.className="intern-wanted",e.className="about-tab",e.innerHTML="<h2>About</h2>",r.className="footer",y("“It's a pizza place where you make your own pie! We give you the dough, the sauce, the cheese...you pound it, slap it, you flip it up into the air...you put your toppings on and you slide it into the oven! Sounds good, huh?”  — Cosmo Kramer, Seinfeld, Season 6: The Couch","about-txt",e),v(k,"kramer-img",e),y("Address: 129 west 81st street, New York/NY","address",e),y("Intern Wanted!","intern-wanted-txt",t),y("Get real-world corporate experience","experience",t),y("Apply","apply",t),y("Copyright&copy; Kramerica Industries","kramerica-copyright",r),n.appendChild(e),n.appendChild(t),n.appendChild(r)})()}}))))})()})();