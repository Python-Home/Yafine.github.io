"use strict";function _typeof(e){function t(e){return n.apply(this,arguments)}var n,r;function a(e){return r.apply(this,arguments)}return(_typeof="function"==typeof Symbol&&"symbol"===_typeof(Symbol.iterator)?(r=function(e){return void 0===e?"undefined":_typeof(e)},a.toString=function(){return r.toString()},a):(n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":_typeof(e)},t.toString=function(){return n.toString()},t))(e)}var precacheConfig=[["/404.html","66a80fcbacadf96c049151c9562c8520"],["/about/index.html","efac7372e5d474dcdec47b43a1e45e43"],["/archives/2019/10/index.html","395b09e00a46292f8d2c596c1e579ae3"],["/archives/2019/11/index.html","c7da018e9cf0fc4a16191ef3bbb5d175"],["/archives/2019/index.html","b830edc3bf4c998903f2f4aa3d93f8cf"],["/archives/2020/01/index.html","f92404077c8b119347bc60b1da590832"],["/archives/2020/02/index.html","bba6b82cfa4cdd37ce6c51d71d6e7138"],["/archives/2020/03/index.html","255ef556cd91dacb9a053287f564650e"],["/archives/2020/04/index.html","accc17f7c256ee8893cdc9279f3acc24"],["/archives/2020/index.html","1511632a9f269a6f3eaeee14da82f3ec"],["/archives/2020/page/2/index.html","ca6f725c5c00913f39c2649e2e786ec8"],["/archives/2020/page/3/index.html","6efb328e7c7273f0cd7db6b139713b4b"],["/archives/index.html","222a7209292956a74c063acdeb49008c"],["/archives/page/2/index.html","ba6093199e6e7157156a6253e3a006aa"],["/archives/page/3/index.html","6e45d346bd507f6b3a6367b8a4cc88a1"],["/box/about/index.html","f2f2b7f3afc8da8b3fab24e0ff6eefc1"],["/box/index.html","4238cae3793b16146ebc809bc1d320c6"],["/categories/Hexo博客/index.html","84d917ad9145685f6bf5a3cdb483554d"],["/categories/Hexo博客/page/2/index.html","15c74a27b955d1e7c32ae62fb29780db"],["/categories/Hexo博客/page/3/index.html","0c4f3399b75d375611ef38d8b05ee86e"],["/categories/Web前端/CSS3/index.html","dadac0597a8c1c2879adfe015874f3ea"],["/categories/Web前端/HTML/index.html","873388a65c1cbdccb816d0d09be06b2c"],["/categories/Web前端/JavaScript/index.html","f862e9b2d8e85767523ee91d7f8b83ac"],["/categories/Web前端/Node-js/index.html","4be03d60833747aacf9f734800ed29c2"],["/categories/Web前端/index.html","cb4ff635bb5a8ac679cb192c210f2db3"],["/categories/index.html","9dbd022f5e82aebff7b52b9c028e5dab"],["/categories/实用工具集合/index.html","db14944cc4e15a03d29eca2fdcabff93"],["/contact/index.html","aff6837a305c72c2ae19b204346f595c"],["/css/index.css","cfbe20356f64ef475a185269197263a3"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.jpg","9700c340ed4f44b9c7e2e7fcdfebe2cf"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/index.jpg","d927a557249cb371230a85a2d7fb0dd4"],["/img/loading.gif","b59a03f99648be1b99339f8b3b1705d5"],["/img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["/img/post.png","33cc44a54b13bd143ca5570d06cc59ff"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/img/pwa/128.png","cdd2b0f8581df30a39ba9b5e4f909514"],["/img/pwa/144.png","2763d3c6854318fdfa3908ce4577f096"],["/img/pwa/16.png","7abb9aa1c71ff050ad6173269ef2affe"],["/img/pwa/180.png","018431391c50275ed081554f2cf9efcf"],["/img/pwa/192.png","573d44ff7b8b31881b23e176e0fd6a6e"],["/img/pwa/32.png","83e36632004f1d5a3df6ad6e66240154"],["/img/pwa/36.png","9ced1102ed9c301a614a8e1574263ddd"],["/img/pwa/48.png","19cc096370a4b1c55f5a23d19ff21f5a"],["/img/pwa/512.png","a37111ea8ebb81d80bf4be3c4c8c93fa"],["/img/pwa/72.png","c3f886d26784449a62506cd6abae86b2"],["/img/pwa/96.png","f88d7845eafa46554fdd7cb5f3ef5ae0"],["/img/pwa/apple-touch-icon.png","95aea55af878f621de9bfcfc9a10030a"],["/img/pwa/safari-pinned-tab.svg","adfbb1f7d8a18e5c53c3712454af9408"],["/index.html","60a7957a841e023c40e8df62dd917a5c"],["/js/main.js","6e53629a64295e746e51c3f5b403dccf"],["/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["/link/index.html","d6d8e7c40b746c4325b84de3ca323beb"],["/page/2/index.html","f1c88a124586b2a1f8cfcbd4e794f1d0"],["/page/3/index.html","9e70f2f0364ae8b244099650a21aaaac"],["/posts/10d0c9f1.html","8c69352fb451221ba8c0ebf797f966ef"],["/posts/12b4.html","780088021f56f79bd22fd1c9633b4d67"],["/posts/153b.html","0136171d58f0172535146b4a67f8b5ca"],["/posts/15cb.html","1a14ecb2b81bc098181b4a864a59d208"],["/posts/3b98.html","20dd78aeb0853c07ab28aa17fb523c9c"],["/posts/49fb.html","59683e5178f33b0a1f01df4e108dc6d0"],["/posts/4ab2.html","b8850182cb34482bac16c01ee61e4f1a"],["/posts/4e9b.html","7f5a383a8b6a67bc534ebc67ea91df8f"],["/posts/51fb.html","5715ed67e61fd896521d9fb9e8565e28"],["/posts/5dbf.html","2d90aac879b2deec3944dbf03e379422"],["/posts/6da42d6b.html","839b5f1a5cb03728aa405c47a34b2c45"],["/posts/724a.html","3adc39f729d66a3d348e6983a90547d1"],["/posts/7400.html","32dc68bc1a8c919413d7f06c4a338ecd"],["/posts/7aedb564.html","56ca8dc47b5a7f74ae9ecc29879b7eab"],["/posts/7de0.html","d8c4173778393c1a17f4bdeccfb77fb4"],["/posts/7fe2.html","7685fd54a76bc2037d6150d2201ca856"],["/posts/8094.html","42e81fdfba8acab96352b0233f70878f"],["/posts/8c84.html","2c883dd70f4e22d7060c07ce9ed6e272"],["/posts/9620.html","a8e6eed0dd5f98ecf4bc957c42a74894"],["/posts/a170.html","b33da6d60da2203e29c716401985ef4e"],["/posts/b93d.html","d1514283aa8f65903d9eb301b1550652"],["/posts/bb7.html","8fd9812e5bc1f70e14b27c49f7037475"],["/posts/bc77.html","b95660ad52d39105db59b54132d2ebc1"],["/posts/d0e9.html","ac9f571c8c2916b78bbddadfa871633e"],["/posts/d17e.html","83b10efc2fc912913a36f358a2aee37f"],["/posts/eb3a.html","243cc7099bd7938cfb6b9cccc3d64fa4"],["/posts/ebb2.html","614e56ee9a24ed6f463e9d1b5ff7632b"],["/posts/ee35.html","7530f142440059109b7013e68a0f6adb"],["/posts/f295.html","5f653be32c6b27cffc0ce06b6126e682"],["/posts/fc0.html","42d45f99e504c48c8145df0c9bc0b451"],["/tags/CSS3/index.html","24f63988ed75e8d578749586b5c9b98a"],["/tags/HTML/index.html","d0dacfd13e8e007054f7d1d1298d0cdc"],["/tags/Hexo/index.html","7a0128bf04e0a6ccce55c3b912fa83b3"],["/tags/Hexo/page/2/index.html","30e144e2757421f583e03cb19c574b80"],["/tags/Hexo/page/3/index.html","62a0220dc8524b39ec47767e878f203a"],["/tags/JavaScript/index.html","734eb76b6ad949c92ece0ae97217f6dd"],["/tags/PWA/index.html","7ed8b029ffa9c595e1848c7bf90429e7"],["/tags/cdn/index.html","8e471e538dd47f521f0f27d9594a9da3"],["/tags/index.html","eb42d33cf58a4a9e1094294a09a8b8b8"],["/tags/jsdelivr/index.html","ca62cc46f2eeb17edcfd4b8829485c8e"],["/tags/matery主题/index.html","771dc2b55c771283a8ca2fb0302c0bf9"],["/tags/nodejs/index.html","e8293c248660a29f06d4cbb866339b2e"],["/tags/图床搭建/index.html","2386345406618c39980ebd6e140b3aa1"],["/tags/开发工具/index.html","5e5c5c26707a75f55864e247a3060f6f"],["/tags/效率工具/index.html","c2cfc203d35bb7d71817a66afaef9e3c"],["/tags/浏览器知识/index.html","f866c8149f38e8b6af211d843d888608"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,!1);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),e=urlsToCacheKeys.has(n));0,e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}}),function(e){if("object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function c(o,i,s){function f(n,e){if(!i[n]){if(!o[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(u)return u(n,!0);var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}var a=i[n]={exports:{}};o[n][0].call(a.exports,function(e){var t=o[n][1][e];return f(t||e)},a,a.exports,c,o,i,s)}return i[n].exports}for(var u="function"==typeof require&&require,e=0;e<s.length;e++)f(s[e]);return f}({1:[function(e,t,n){function s(e,t){((t=t||{}).debug||i.debug)&&console.log("[sw-toolbox] "+e)}function c(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||i.cache.name,caches.open(t)}function r(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var o,i=e("./options"),f=e("./idb-cache-expiration");t.exports={debug:s,fetchAndCache:function(r,a){var t=(a=a||{}).successResponses||i.successResponses;return fetch(r.clone()).then(function(e){return"GET"===r.method&&t.test(e.status)&&c(a).then(function(n){n.put(r,e).then(function(){var e,t=a.cache||i.cache;(t.maxEntries||t.maxAgeSeconds)&&t.name&&(e=function(e,n,t){var r=e.url,a=t.maxAgeSeconds,c=t.maxEntries,o=t.name,i=Date.now();return s("Updating LRU order for "+r+". Max entries is "+c+", max age is "+a),f.getDb(o).then(function(e){return f.setTimestampForUrl(e,r,i)}).then(function(e){return f.expireEntries(e,c,a,i)}).then(function(e){s("Successfully updated IDB.");var t=e.map(function(e){return n.delete(e)});return Promise.all(t).then(function(){s("Done with cache cleanup.")})}).catch(function(e){s(e)})}.bind(null,r,n,t),o=o?o.then(e):e())})}),e.clone()})},openCache:c,renameCache:function(t,e,n){return s("Renaming cache: ["+t+"] to ["+e+"]",n),caches.delete(e).then(function(){return Promise.all([caches.open(t),caches.open(e)]).then(function(e){var n=e[0],r=e[1];return n.keys().then(function(e){return Promise.all(e.map(function(t){return n.match(t).then(function(e){return r.put(t,e)})}))}).then(function(){return caches.delete(t)})})})},cache:function(t,e){return c(e).then(function(e){return e.add(t)})},uncache:function(t,e){return c(e).then(function(e){return e.delete(t)})},precache:function(e){e instanceof Promise||r(e),i.preCacheItems=i.preCacheItems.concat(e)},validatePrecacheInput:r,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r)if(new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var a="sw-toolbox-",c=1,f="store",u="url",d="timestamp",o={};t.exports={getDb:function(e){return e in o||(o[e]=(r=e,new Promise(function(e,t){var n=indexedDB.open(a+r,c);n.onupgradeneeded=function(){n.result.createObjectStore(f,{keyPath:u}).createIndex(d,d,{unique:!1})},n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}}))),o[e];var r},setTimestampForUrl:function(r,a,c){return new Promise(function(e,t){var n=r.transaction(f,"readwrite");n.objectStore(f).put({url:a,timestamp:c}),n.oncomplete=function(){e(r)},n.onabort=function(){t(n.error)}})},expireEntries:function(e,n,t,r){return o=e,s=r,((i=t)?new Promise(function(e,t){var r=1e3*i,a=[],n=o.transaction(f,"readwrite"),c=n.objectStore(f);c.index(d).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&s-r>t.value[d]){var n=t.value[u];a.push(n),c.delete(n),t.continue()}},n.oncomplete=function(){e(a)},n.onabort=t}):Promise.resolve([])).then(function(t){return r=e,((s=n)?new Promise(function(e,t){var a=[],n=r.transaction(f,"readwrite"),c=n.objectStore(f),o=c.index(d),i=o.count();o.count().onsuccess=function(){var r=i.result;s<r&&(o.openCursor().onsuccess=function(e){var t=e.target.result;if(t){var n=t.value[u];a.push(n),c.delete(n),r-a.length>s&&t.continue()}})},n.oncomplete=function(){e(a)},n.onabort=t}):Promise.resolve([])).then(function(e){return t.concat(e)});var r,s});var o,i,s}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var a=e("./helpers"),c=e("./router"),o=e("./options");t.exports={fetchListener:function(e){var t=c.match(e.request);t?e.respondWith(t(e.request)):c.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(c.default(e.request))},activateListener:function(e){a.debug("activate event fired");var t=o.cache.name+"$$$inactive$$$";e.waitUntil(a.renameCache(t,o.cache.name))},installListener:function(e){var t=o.cache.name+"$$$inactive$$$";a.debug("install event fired"),a.debug("creating cache ["+t+"]"),e.waitUntil(a.openCache({cache:{name:t}}).then(function(t){return Promise.all(o.preCacheItems).then(r).then(a.validatePrecacheInput).then(function(e){return a.debug("preCache list: "+(e.join(", ")||"(none)")),t.addAll(e)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){function r(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=a+t),this.keys=[],this.regexp=c(t,this.keys)),this.method=e,this.options=r,this.handler=n}var a=new URL("./",self.location).pathname,c=e("path-to-regexp");r.prototype.makeHandler=function(e){var n;if(this.regexp){var r=this.regexp.exec(e);n={},this.keys.forEach(function(e,t){n[e.name]=r[t+1]})}return function(e){return this.handler(e,n,this.options)}.bind(this)},t.exports=r},{"path-to-regexp":15}],6:[function(e,t,n){function i(e,t){for(var n=e.entries(),r=n.next(),a=[];!r.done;){new RegExp(r.value[0]).test(t)&&a.push(r.value[1]),r=n.next()}return a}function a(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null}var f=e("./route"),u=e("./helpers");["get","post","put","delete","head","any"].forEach(function(r){a.prototype[r]=function(e,t,n){return this.add(r,e,t,n)}}),a.prototype.add=function(e,t,n,r){var a;r=r||{},a=t instanceof RegExp?RegExp:(a=r.origin||self.location.origin)instanceof RegExp?a.source:a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),e=e.toLowerCase();var c=new f(e,t,n,r);this.routes.has(a)||this.routes.set(a,new Map);var o=this.routes.get(a);o.has(e)||o.set(e,new Map);var i=o.get(e),s=c.regexp||c.fullUrlRegExp;i.has(s.source)&&u.debug('"'+t+'" resolves to same regex as existing route.'),i.set(s.source,c)},a.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,a=n.pathname;return this._match(e,i(this.routes,r),a)||this._match(e,[this.routes.get(RegExp)],t)},a.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var a=t[r],c=a&&a.get(e.toLowerCase());if(c){var o=i(c,n);if(0<o.length)return o[0].makeHandler(n)}}return null},a.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new a},{"./helpers":1,"./route":5}],7:[function(e,t,n){var c=e("../options"),o=e("../helpers");t.exports=function(r,e,a){return a=a||{},o.debug("Strategy: cache first ["+r.url+"]",a),o.openCache(a).then(function(e){return e.match(r).then(function(e){var t=a.cache||c.cache,n=Date.now();return o.isResponseFresh(e,t.maxAgeSeconds,n)?e:o.fetchAndCache(r,a)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var a=e("../options"),c=e("../helpers");t.exports=function(t,e,r){return r=r||{},c.debug("Strategy: cache only ["+t.url+"]",r),c.openCache(r).then(function(e){return e.match(t).then(function(e){var t=r.cache||a.cache,n=Date.now();if(c.isResponseFresh(e,t.maxAgeSeconds,n))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var f=e("../helpers"),u=e("./cacheOnly");t.exports=function(o,i,s){return f.debug("Strategy: fastest ["+o.url+"]",s),new Promise(function(t,n){function r(e){c.push(e.toString()),a?n(new Error('Both cache and network failed: "'+c.join('", "')+'"')):a=!0}function e(e){e instanceof Response?t(e):r("No result returned")}var a=!1,c=[];f.fetchAndCache(o.clone(),s).then(e,r),u(o,i,s).then(e,r)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var u=e("../options"),d=e("../helpers");t.exports=function(o,e,i){var s=(i=i||{}).successResponses||u.successResponses,f=i.networkTimeoutSeconds||u.networkTimeoutSeconds;return d.debug("Strategy: network first ["+o.url+"]",i),d.openCache(i).then(function(e){var t,n,r=[];if(f){var a=new Promise(function(a){t=setTimeout(function(){e.match(o).then(function(e){var t=i.cache||u.cache,n=Date.now(),r=t.maxAgeSeconds;d.isResponseFresh(e,r,n)&&a(e)})},1e3*f)});r.push(a)}var c=d.fetchAndCache(o,i).then(function(e){if(t&&clearTimeout(t),s.test(e.status))return e;throw d.debug("Response was an HTTP error: "+e.statusText,i),n=e,new Error("Bad response")}).catch(function(t){return d.debug("Network or response error, fallback to cache ["+o.url+"]",i),e.match(o).then(function(e){if(e)return e;if(n)return n;throw t})});return r.push(c),Promise.race(r)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),a=e("./router"),c=e("./helpers"),o=e("./strategies"),i=e("./listeners");c.debug("Service Worker Toolbox is loading"),self.addEventListener("install",i.installListener),self.addEventListener("activate",i.activateListener),self.addEventListener("fetch",i.fetchListener),t.exports={networkOnly:o.networkOnly,networkFirst:o.networkFirst,cacheOnly:o.cacheOnly,cacheFirst:o.cacheFirst,fastest:o.fastest,router:a,options:r,cache:c.cache,uncache:c.uncache,precache:c.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function c(e,t){for(var n,r=[],a=0,c=0,o="",i=t&&t.delimiter||"/";null!=(n=C.exec(e));){var s=n[0],f=n[1],u=n.index;if(o+=e.slice(c,u),c=u+s.length,f)o+=f[1];else{var d=e[c],h=n[2],l=n[3],p=n[4],b=n[5],m=n[6],g=n[7];o&&(r.push(o),o="");var v=null!=h&&null!=d&&d!==h,x="+"===m||"*"===m,w="?"===m||"*"===m,y=n[2]||i,E=p||b;r.push({name:l||a++,prefix:h||"",delimiter:y,optional:w,repeat:x,partial:v,asterisk:!!g,pattern:E?E.replace(/([=!:$\/()])/g,"\\$1"):g?".*":"[^"+R(y)+"]+?"})}}return c<e.length&&(o+=e.substr(c)),o&&r.push(o),r}function h(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function r(u){for(var d=new Array(u.length),e=0;e<u.length;e++)"object"==_typeof(u[e])&&(d[e]=new RegExp("^(?:"+u[e].pattern+")$"));return function(e,t){for(var n="",r=e||{},a=(t||{}).pretty?h:encodeURIComponent,c=0;c<u.length;c++){var o=u[c];if("string"!=typeof o){var i,s=r[o.name];if(null==s){if(o.optional){o.partial&&(n+=o.prefix);continue}throw new TypeError('Expected "'+o.name+'" to be defined')}if(b(s)){if(!o.repeat)throw new TypeError('Expected "'+o.name+'" to not repeat, but received `'+JSON.stringify(s)+"`");if(0===s.length){if(o.optional)continue;throw new TypeError('Expected "'+o.name+'" to not be empty')}for(var f=0;f<s.length;f++){if(i=a(s[f]),!d[c].test(i))throw new TypeError('Expected all "'+o.name+'" to match "'+o.pattern+'", but received `'+JSON.stringify(i)+"`");n+=(0===f?o.prefix:o.delimiter)+i}}else{if(i=o.asterisk?encodeURI(s).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}):a(s),!d[c].test(i))throw new TypeError('Expected "'+o.name+'" to match "'+o.pattern+'", but received "'+i+'"');n+=o.prefix+i}}else n+=o}return n}}function R(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function l(e,t){return e.keys=t,e}function p(e){return e.sensitive?"":"i"}function o(e,t,n){b(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,a=!1!==n.end,c="",o=0;o<e.length;o++){var i=e[o];if("string"==typeof i)c+=R(i);else{var s=R(i.prefix),f="(?:"+i.pattern+")";t.push(i),i.repeat&&(f+="(?:"+s+f+")*"),c+=f=i.optional?i.partial?s+"("+f+")?":"(?:"+s+"("+f+"))?":s+"("+f+")"}}var u=R(n.delimiter||"/"),d=c.slice(-u.length)===u;return r||(c=(d?c.slice(0,-u.length):c)+"(?:"+u+"(?=$))?"),c+=a?"$":r&&d?"":"(?="+u+"|$)",l(new RegExp("^"+c,p(n)),t)}function i(e,t,n){return b(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(e,t)}(e,t):b(e)?function(e,t,n){for(var r=[],a=0;a<e.length;a++)r.push(i(e[a],t,n).source);return l(new RegExp("(?:"+r.join("|")+")",p(n)),t)}(e,t,n):(r=t,o(c(e,a=n),r,a));var r,a}var b=e("isarray");t.exports=i,t.exports.parse=c,t.exports.compile=function(e,t){return r(c(e,t))},t.exports.tokensToFunction=r,t.exports.tokensToRegExp=o;var C=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&46<=r||"Chrome"===n&&50<=r)||(Cache.prototype.addAll=function(n){function r(e){this.name="NetworkError",this.code=19,this.message=e}var a=this;return r.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return n=n.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(n.map(function(e){"string"==typeof e&&(e=new Request(e));var t=new URL(e.url).protocol;if("http:"!==t&&"https:"!==t)throw new r("Invalid scheme");return fetch(e.clone())}))}).then(function(e){if(e.some(function(e){return!e.ok}))throw new r("Incorrect response status");return Promise.all(e.map(function(e,t){return a.put(n[t],e)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"https://yafine-blog.cn"});