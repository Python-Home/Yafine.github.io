"use strict";function _typeof(e){function t(e){return n.apply(this,arguments)}var n,r;function a(e){return r.apply(this,arguments)}return(_typeof="function"==typeof Symbol&&"symbol"===_typeof(Symbol.iterator)?(r=function(e){return void 0===e?"undefined":_typeof(e)},a.toString=function(){return r.toString()},a):(n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":_typeof(e)},t.toString=function(){return n.toString()},t))(e)}var precacheConfig=[["/404.html","dff5e610142dd53e1c1610f2d443ea59"],["/about/index.html","99d24df9bc6970801d15b0f82f4174a9"],["/archives/2019/10/index.html","9e6cd8eb9f9d9657e25c15c15e8b85e7"],["/archives/2019/11/index.html","ccaf173dc647b7683c061d4992b850c3"],["/archives/2019/index.html","6257d6e76ecf706be21346d40f1a61ca"],["/archives/2020/01/index.html","455cca8321fd3c9ab9866286d2f657d7"],["/archives/2020/02/index.html","5c8c13dd41b4d02e752c24924ab5b80a"],["/archives/2020/03/index.html","eedde339faef997fe3fd767c7788affc"],["/archives/2020/04/index.html","76e3fb177a04ec242deb93af843f11d9"],["/archives/2020/index.html","5b4c4da7768da1ed060fbb6b24a6a9e1"],["/archives/2020/page/2/index.html","bd4e316a6f9020417b8feca37c5e3a46"],["/archives/index.html","d640e052da8194ef110d159f6667e0cd"],["/archives/page/2/index.html","bb55be6a42de40e4ccd1a2580318a4b9"],["/archives/page/3/index.html","80ee6c0a37b4baf8453eb5b30e03991b"],["/categories/Hexo博客/index.html","6297a5013164ecb6935844847a2e539c"],["/categories/Hexo博客/page/2/index.html","35dcebcbeecf6b678bcf6fb38965255d"],["/categories/Web前端/CSS3/index.html","26562e74b5fadceb84290bb8483c8393"],["/categories/Web前端/HTML/index.html","5e9ccec395fc688a99cccc26e4ac4878"],["/categories/Web前端/JavaScript/index.html","e27add0b00d39404deb5151e605d36d9"],["/categories/Web前端/Node-js/index.html","28a00e732e6c0665a66cd024306aecc0"],["/categories/Web前端/index.html","561838f86db5465977f159dedfbb6dfd"],["/categories/index.html","54b09992f4af8865db9e9870f3443c1e"],["/categories/实用工具集合/index.html","dba3b75b63fe0d058436cc5023fb4f41"],["/categories/转载/index.html","24fd6dc462de90e5e8f79905faa331d9"],["/contact/index.html","62d289a0a60c58adbf7982246039901f"],["/css/flink.min.css","e461de45f17cf745239d6a9be0fd9529"],["/css/index.css","66731e21b80c1f16ece09ddb958d8f39"],["/css/plugins.min.css","60e2a225b9cab5769eaae2b1659f5921"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","9700c340ed4f44b9c7e2e7fcdfebe2cf"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/index.jpg","d927a557249cb371230a85a2d7fb0dd4"],["/img/loading.gif","b59a03f99648be1b99339f8b3b1705d5"],["/img/post.png","33cc44a54b13bd143ca5570d06cc59ff"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/img/pwa/128.png","cdd2b0f8581df30a39ba9b5e4f909514"],["/img/pwa/144.png","2763d3c6854318fdfa3908ce4577f096"],["/img/pwa/16.png","7abb9aa1c71ff050ad6173269ef2affe"],["/img/pwa/180.png","018431391c50275ed081554f2cf9efcf"],["/img/pwa/192.png","573d44ff7b8b31881b23e176e0fd6a6e"],["/img/pwa/32.png","83e36632004f1d5a3df6ad6e66240154"],["/img/pwa/36.png","9ced1102ed9c301a614a8e1574263ddd"],["/img/pwa/48.png","19cc096370a4b1c55f5a23d19ff21f5a"],["/img/pwa/512.png","a37111ea8ebb81d80bf4be3c4c8c93fa"],["/img/pwa/72.png","c3f886d26784449a62506cd6abae86b2"],["/img/pwa/96.png","f88d7845eafa46554fdd7cb5f3ef5ae0"],["/img/pwa/apple-touch-icon.png","95aea55af878f621de9bfcfc9a10030a"],["/img/pwa/safari-pinned-tab.svg","adfbb1f7d8a18e5c53c3712454af9408"],["/index.html","1cd9788e5af1ac51ef2c38939928e75f"],["/js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/third-party/switch_comments.js","3edb51fc581b346005ad063c493c272c"],["/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["/link/index.html","20e0afb83f7fb216347398f4a6638a5c"],["/page/2/index.html","f9b2c2185928a6d48f43b07ec9013c73"],["/page/3/index.html","72ca3259736dd074273e097b9b268ece"],["/page/4/index.html","6789a67fb41d67bbd42a11909bb4ed21"],["/posts/10d0c9f1.html","d207bc24ae2093fc93e91df89c75f47b"],["/posts/153b.html","c1cf42fc0ed49a34f6d4ee41cce75f1a"],["/posts/15cb.html","897a87a736244f11c5709c86967846a7"],["/posts/3b98.html","466537d350755aa12185cb49cf57d9b7"],["/posts/49fb.html","c9e9fe72e8b7dd9be7ae596a25da3190"],["/posts/4ab2.html","d1fb5422ec1a682fd4c6dcdac3fe4fbc"],["/posts/4e9b.html","db6eb76d9241b1f5fe3221268ea65055"],["/posts/51fb.html","cb1a7e53919879218af5f75dcaab2dfb"],["/posts/5dbf.html","897e6983e250f44f21c60a928a260cdb"],["/posts/6da42d6b.html","a71e4770f37c2c87582b5b2273215df1"],["/posts/724a.html","6db35a4d055d758fbae90faddea95aa5"],["/posts/7400.html","5bedab88a55f00665f8dbef11b8cbba4"],["/posts/7aedb564.html","1115bfa2e940a3abf5928169573fecef"],["/posts/7de0.html","8981cc08811756a3b5a6dab7698a8771"],["/posts/7fe2.html","54adb6e8e18a44ab1dac5fb952b25e54"],["/posts/8094.html","dc2660f8b022da22664312afed634ad6"],["/posts/8c84.html","e6773218818aba8d980cf8c4dfbbb5c9"],["/posts/9620.html","323eacd6bc8d747b398ab688521e22e7"],["/posts/a170.html","fbef2e7701bddf0f06e663749f98b329"],["/posts/b93d.html","993a7046f40b6558e0b9e72ff81d7ec6"],["/posts/bb7.html","80e921f5ce4c5e6f7428562f93bc98b6"],["/posts/bc77.html","ba41a6127388277629bba54d5d6316d2"],["/posts/d0e9.html","8def743d7abb425330db9eb5d9d1beb0"],["/posts/d17e.html","d5d8454a36a7f48c49a424f1b6e8eedf"],["/posts/eb3a.html","b5f70ff54b106e145198453d21cc69e8"],["/posts/ee35.html","cc53f569bb4cbc603847ef7ec163555e"],["/posts/f295.html","68f6eeb80c5022898e4b7bf1fb6fa9c7"],["/posts/fc0.html","77909279e58a1f33b9519a7f6461eaf5"],["/relax/2048/amam.png","952cb93e5881707dd59413e7d38ee74e"],["/relax/2048/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["/relax/2048/css/style.css","b5fc3c1bf80fd597756d15e41edf73eb"],["/relax/2048/css/xsStyle.css","33098ea9bb75de29f1b3378ed7e97dcd"],["/relax/2048/index.html","80d0fa23480d9c165d20493fd77f0501"],["/relax/2048/js/animation.js","906e40f34f22bbe6c5c4aeb7eea7a6d4"],["/relax/2048/js/cellStyle.js","23153259cfc5800d193e78eca016e21a"],["/relax/2048/js/game.js","1d55c8d59ea3d55365db169348bd2319"],["/relax/mofang/index.html","fa64c4c6e9deeee212ae44a6886034ac"],["/tags/CSS3/index.html","4769c22073d7ea3d3ef9cbd65d3ea626"],["/tags/HTML/index.html","de792f7eb096e5e02910eb7049c7ad3a"],["/tags/Hexo/index.html","9ba86dea5346e3d36ba8065b0f069e42"],["/tags/Hexo/page/2/index.html","04507225fc9987e1477bebd40b53d97a"],["/tags/JavaScript/index.html","2760966e0e95c532885d70ff44d96075"],["/tags/PWA/index.html","f827aca5c850f5205697612128e408bf"],["/tags/cdn/index.html","c48b02f351729cad024eb4f10b3971c3"],["/tags/index.html","0e6de7c67e3a587e7c3c75dd7bc53f2f"],["/tags/jsdelivr/index.html","a9f3944cda26600c1b6dfa891c8f4cdc"],["/tags/matery主题/index.html","f1d10c918703263b4b1aee7e1b75ab89"],["/tags/nodejs/index.html","69925fb6da7b5f548069aa5c80525261"],["/tags/图床搭建/index.html","aabcdd87831af874ebb49039fdb96e54"],["/tags/开发工具/index.html","16bdc166f500820115169ec59865fbe4"],["/tags/效率工具/index.html","facdc793f370bf98c7e797de8c4af634"],["/tags/浏览器知识/index.html","72b58006d435723b17aa1cc1d9730392"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,!1);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),e=urlsToCacheKeys.has(n));0,e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}}),function(e){if("object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function c(o,s,i){function f(n,e){if(!s[n]){if(!o[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(d)return d(n,!0);var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}var a=s[n]={exports:{}};o[n][0].call(a.exports,function(e){var t=o[n][1][e];return f(t||e)},a,a.exports,c,o,s,i)}return s[n].exports}for(var d="function"==typeof require&&require,e=0;e<i.length;e++)f(i[e]);return f}({1:[function(e,t,n){function i(e,t){((t=t||{}).debug||s.debug)&&console.log("[sw-toolbox] "+e)}function c(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||s.cache.name,caches.open(t)}function r(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var o,s=e("./options"),f=e("./idb-cache-expiration");t.exports={debug:i,fetchAndCache:function(r,a){var t=(a=a||{}).successResponses||s.successResponses;return fetch(r.clone()).then(function(e){return"GET"===r.method&&t.test(e.status)&&c(a).then(function(n){n.put(r,e).then(function(){var e,t=a.cache||s.cache;(t.maxEntries||t.maxAgeSeconds)&&t.name&&(e=function(e,n,t){var r=e.url,a=t.maxAgeSeconds,c=t.maxEntries,o=t.name,s=Date.now();return i("Updating LRU order for "+r+". Max entries is "+c+", max age is "+a),f.getDb(o).then(function(e){return f.setTimestampForUrl(e,r,s)}).then(function(e){return f.expireEntries(e,c,a,s)}).then(function(e){i("Successfully updated IDB.");var t=e.map(function(e){return n.delete(e)});return Promise.all(t).then(function(){i("Done with cache cleanup.")})}).catch(function(e){i(e)})}.bind(null,r,n,t),o=o?o.then(e):e())})}),e.clone()})},openCache:c,renameCache:function(t,e,n){return i("Renaming cache: ["+t+"] to ["+e+"]",n),caches.delete(e).then(function(){return Promise.all([caches.open(t),caches.open(e)]).then(function(e){var n=e[0],r=e[1];return n.keys().then(function(e){return Promise.all(e.map(function(t){return n.match(t).then(function(e){return r.put(t,e)})}))}).then(function(){return caches.delete(t)})})})},cache:function(t,e){return c(e).then(function(e){return e.add(t)})},uncache:function(t,e){return c(e).then(function(e){return e.delete(t)})},precache:function(e){e instanceof Promise||r(e),s.preCacheItems=s.preCacheItems.concat(e)},validatePrecacheInput:r,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r)if(new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var a="sw-toolbox-",c=1,f="store",d="url",u="timestamp",o={};t.exports={getDb:function(e){return e in o||(o[e]=(r=e,new Promise(function(e,t){var n=indexedDB.open(a+r,c);n.onupgradeneeded=function(){n.result.createObjectStore(f,{keyPath:d}).createIndex(u,u,{unique:!1})},n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}}))),o[e];var r},setTimestampForUrl:function(r,a,c){return new Promise(function(e,t){var n=r.transaction(f,"readwrite");n.objectStore(f).put({url:a,timestamp:c}),n.oncomplete=function(){e(r)},n.onabort=function(){t(n.error)}})},expireEntries:function(e,n,t,r){return o=e,i=r,((s=t)?new Promise(function(e,t){var r=1e3*s,a=[],n=o.transaction(f,"readwrite"),c=n.objectStore(f);c.index(u).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&i-r>t.value[u]){var n=t.value[d];a.push(n),c.delete(n),t.continue()}},n.oncomplete=function(){e(a)},n.onabort=t}):Promise.resolve([])).then(function(t){return r=e,((i=n)?new Promise(function(e,t){var a=[],n=r.transaction(f,"readwrite"),c=n.objectStore(f),o=c.index(u),s=o.count();o.count().onsuccess=function(){var r=s.result;i<r&&(o.openCursor().onsuccess=function(e){var t=e.target.result;if(t){var n=t.value[d];a.push(n),c.delete(n),r-a.length>i&&t.continue()}})},n.oncomplete=function(){e(a)},n.onabort=t}):Promise.resolve([])).then(function(e){return t.concat(e)});var r,i});var o,s,i}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var a=e("./helpers"),c=e("./router"),o=e("./options");t.exports={fetchListener:function(e){var t=c.match(e.request);t?e.respondWith(t(e.request)):c.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(c.default(e.request))},activateListener:function(e){a.debug("activate event fired");var t=o.cache.name+"$$$inactive$$$";e.waitUntil(a.renameCache(t,o.cache.name))},installListener:function(e){var t=o.cache.name+"$$$inactive$$$";a.debug("install event fired"),a.debug("creating cache ["+t+"]"),e.waitUntil(a.openCache({cache:{name:t}}).then(function(t){return Promise.all(o.preCacheItems).then(r).then(a.validatePrecacheInput).then(function(e){return a.debug("preCache list: "+(e.join(", ")||"(none)")),t.addAll(e)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){function r(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=a+t),this.keys=[],this.regexp=c(t,this.keys)),this.method=e,this.options=r,this.handler=n}var a=new URL("./",self.location).pathname,c=e("path-to-regexp");r.prototype.makeHandler=function(e){var n;if(this.regexp){var r=this.regexp.exec(e);n={},this.keys.forEach(function(e,t){n[e.name]=r[t+1]})}return function(e){return this.handler(e,n,this.options)}.bind(this)},t.exports=r},{"path-to-regexp":15}],6:[function(e,t,n){function s(e,t){for(var n=e.entries(),r=n.next(),a=[];!r.done;){new RegExp(r.value[0]).test(t)&&a.push(r.value[1]),r=n.next()}return a}function a(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null}var f=e("./route"),d=e("./helpers");["get","post","put","delete","head","any"].forEach(function(r){a.prototype[r]=function(e,t,n){return this.add(r,e,t,n)}}),a.prototype.add=function(e,t,n,r){var a;r=r||{},a=t instanceof RegExp?RegExp:(a=r.origin||self.location.origin)instanceof RegExp?a.source:a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),e=e.toLowerCase();var c=new f(e,t,n,r);this.routes.has(a)||this.routes.set(a,new Map);var o=this.routes.get(a);o.has(e)||o.set(e,new Map);var s=o.get(e),i=c.regexp||c.fullUrlRegExp;s.has(i.source)&&d.debug('"'+t+'" resolves to same regex as existing route.'),s.set(i.source,c)},a.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,a=n.pathname;return this._match(e,s(this.routes,r),a)||this._match(e,[this.routes.get(RegExp)],t)},a.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var a=t[r],c=a&&a.get(e.toLowerCase());if(c){var o=s(c,n);if(0<o.length)return o[0].makeHandler(n)}}return null},a.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new a},{"./helpers":1,"./route":5}],7:[function(e,t,n){var c=e("../options"),o=e("../helpers");t.exports=function(r,e,a){return a=a||{},o.debug("Strategy: cache first ["+r.url+"]",a),o.openCache(a).then(function(e){return e.match(r).then(function(e){var t=a.cache||c.cache,n=Date.now();return o.isResponseFresh(e,t.maxAgeSeconds,n)?e:o.fetchAndCache(r,a)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var a=e("../options"),c=e("../helpers");t.exports=function(t,e,r){return r=r||{},c.debug("Strategy: cache only ["+t.url+"]",r),c.openCache(r).then(function(e){return e.match(t).then(function(e){var t=r.cache||a.cache,n=Date.now();if(c.isResponseFresh(e,t.maxAgeSeconds,n))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var f=e("../helpers"),d=e("./cacheOnly");t.exports=function(o,s,i){return f.debug("Strategy: fastest ["+o.url+"]",i),new Promise(function(t,n){function r(e){c.push(e.toString()),a?n(new Error('Both cache and network failed: "'+c.join('", "')+'"')):a=!0}function e(e){e instanceof Response?t(e):r("No result returned")}var a=!1,c=[];f.fetchAndCache(o.clone(),i).then(e,r),d(o,s,i).then(e,r)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var d=e("../options"),u=e("../helpers");t.exports=function(o,e,s){var i=(s=s||{}).successResponses||d.successResponses,f=s.networkTimeoutSeconds||d.networkTimeoutSeconds;return u.debug("Strategy: network first ["+o.url+"]",s),u.openCache(s).then(function(e){var t,n,r=[];if(f){var a=new Promise(function(a){t=setTimeout(function(){e.match(o).then(function(e){var t=s.cache||d.cache,n=Date.now(),r=t.maxAgeSeconds;u.isResponseFresh(e,r,n)&&a(e)})},1e3*f)});r.push(a)}var c=u.fetchAndCache(o,s).then(function(e){if(t&&clearTimeout(t),i.test(e.status))return e;throw u.debug("Response was an HTTP error: "+e.statusText,s),n=e,new Error("Bad response")}).catch(function(t){return u.debug("Network or response error, fallback to cache ["+o.url+"]",s),e.match(o).then(function(e){if(e)return e;if(n)return n;throw t})});return r.push(c),Promise.race(r)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),a=e("./router"),c=e("./helpers"),o=e("./strategies"),s=e("./listeners");c.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:o.networkOnly,networkFirst:o.networkFirst,cacheOnly:o.cacheOnly,cacheFirst:o.cacheFirst,fastest:o.fastest,router:a,options:r,cache:c.cache,uncache:c.uncache,precache:c.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function c(e,t){for(var n,r=[],a=0,c=0,o="",s=t&&t.delimiter||"/";null!=(n=S.exec(e));){var i=n[0],f=n[1],d=n.index;if(o+=e.slice(c,d),c=d+i.length,f)o+=f[1];else{var u=e[c],h=n[2],l=n[3],p=n[4],b=n[5],m=n[6],g=n[7];o&&(r.push(o),o="");var x=null!=h&&null!=u&&u!==h,v="+"===m||"*"===m,w="?"===m||"*"===m,y=n[2]||s,E=p||b;r.push({name:l||a++,prefix:h||"",delimiter:y,optional:w,repeat:v,partial:x,asterisk:!!g,pattern:E?E.replace(/([=!:$\/()])/g,"\\$1"):g?".*":"[^"+R(y)+"]+?"})}}return c<e.length&&(o+=e.substr(c)),o&&r.push(o),r}function h(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function r(d){for(var u=new Array(d.length),e=0;e<d.length;e++)"object"==_typeof(d[e])&&(u[e]=new RegExp("^(?:"+d[e].pattern+")$"));return function(e,t){for(var n="",r=e||{},a=(t||{}).pretty?h:encodeURIComponent,c=0;c<d.length;c++){var o=d[c];if("string"!=typeof o){var s,i=r[o.name];if(null==i){if(o.optional){o.partial&&(n+=o.prefix);continue}throw new TypeError('Expected "'+o.name+'" to be defined')}if(b(i)){if(!o.repeat)throw new TypeError('Expected "'+o.name+'" to not repeat, but received `'+JSON.stringify(i)+"`");if(0===i.length){if(o.optional)continue;throw new TypeError('Expected "'+o.name+'" to not be empty')}for(var f=0;f<i.length;f++){if(s=a(i[f]),!u[c].test(s))throw new TypeError('Expected all "'+o.name+'" to match "'+o.pattern+'", but received `'+JSON.stringify(s)+"`");n+=(0===f?o.prefix:o.delimiter)+s}}else{if(s=o.asterisk?encodeURI(i).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}):a(i),!u[c].test(s))throw new TypeError('Expected "'+o.name+'" to match "'+o.pattern+'", but received "'+s+'"');n+=o.prefix+s}}else n+=o}return n}}function R(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function l(e,t){return e.keys=t,e}function p(e){return e.sensitive?"":"i"}function o(e,t,n){b(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,a=!1!==n.end,c="",o=0;o<e.length;o++){var s=e[o];if("string"==typeof s)c+=R(s);else{var i=R(s.prefix),f="(?:"+s.pattern+")";t.push(s),s.repeat&&(f+="(?:"+i+f+")*"),c+=f=s.optional?s.partial?i+"("+f+")?":"(?:"+i+"("+f+"))?":i+"("+f+")"}}var d=R(n.delimiter||"/"),u=c.slice(-d.length)===d;return r||(c=(u?c.slice(0,-d.length):c)+"(?:"+d+"(?=$))?"),c+=a?"$":r&&u?"":"(?="+d+"|$)",l(new RegExp("^"+c,p(n)),t)}function s(e,t,n){return b(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(e,t)}(e,t):b(e)?function(e,t,n){for(var r=[],a=0;a<e.length;a++)r.push(s(e[a],t,n).source);return l(new RegExp("(?:"+r.join("|")+")",p(n)),t)}(e,t,n):(r=t,o(c(e,a=n),r,a));var r,a}var b=e("isarray");t.exports=s,t.exports.parse=c,t.exports.compile=function(e,t){return r(c(e,t))},t.exports.tokensToFunction=r,t.exports.tokensToRegExp=o;var S=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&46<=r||"Chrome"===n&&50<=r)||(Cache.prototype.addAll=function(n){function r(e){this.name="NetworkError",this.code=19,this.message=e}var a=this;return r.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return n=n.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(n.map(function(e){"string"==typeof e&&(e=new Request(e));var t=new URL(e.url).protocol;if("http:"!==t&&"https:"!==t)throw new r("Invalid scheme");return fetch(e.clone())}))}).then(function(e){if(e.some(function(e){return!e.ok}))throw new r("Incorrect response status");return Promise.all(e.map(function(e,t){return a.put(n[t],e)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"https://yafine-blog.cn"});