"use strict";function _typeof(e){function t(e){return n.apply(this,arguments)}var n,r;function a(e){return r.apply(this,arguments)}return(_typeof="function"==typeof Symbol&&"symbol"===_typeof(Symbol.iterator)?(r=function(e){return void 0===e?"undefined":_typeof(e)},a.toString=function(){return r.toString()},a):(n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":_typeof(e)},t.toString=function(){return n.toString()},t))(e)}var precacheConfig=[["/404.html","85aa856020122086952e7e958c389322"],["/about/index.html","f02107534d6f2c477f3d7535c2530257"],["/archives/2019/10/index.html","ab43b3dd912294d8718498f609900da1"],["/archives/2019/11/index.html","eb99fa573ac2e3e4a67aef4ce5fe2761"],["/archives/2019/index.html","6598ebd22efa95538fa5cd1cef114745"],["/archives/2020/01/index.html","6f102523768186e9a0a130cb0889701e"],["/archives/2020/02/index.html","fd32f01bbb074fb7d3d6eb55b11aa70b"],["/archives/2020/03/index.html","75dab551b125ba56107a58c47e2d77ef"],["/archives/2020/04/index.html","dc740e186ab31f1e3e8bc07a32279c75"],["/archives/2020/index.html","2c16162e5dfd7f02024021faa1a957ec"],["/archives/2020/page/2/index.html","31bcc8a6208c4d51d834a6dd8b6743e3"],["/archives/2020/page/3/index.html","b73d162397c8bbbcb8bba309b30505c2"],["/archives/index.html","73f205e830817416d28cebb72751df30"],["/archives/page/2/index.html","f4357f5932b08ea734b2a081854cacca"],["/archives/page/3/index.html","ec4dc3beabfa5b03dee6a63dc33fbdc7"],["/categories/Hexo博客/index.html","37b124b537a4ae64f2a0f1fda8399230"],["/categories/Hexo博客/page/2/index.html","47f2d0038d1d119eedb0464e7b8fdeb6"],["/categories/Hexo博客/page/3/index.html","99a9c1e0e359fb1f40b411365523ad1c"],["/categories/Web前端/CSS3/index.html","afcf5e273d6ff3f02c6afb11d09c7937"],["/categories/Web前端/HTML/index.html","a507463393fe544cc2fe0b28eeb0286c"],["/categories/Web前端/JavaScript/index.html","6c16339feee4cc2285ea45732cd2642a"],["/categories/Web前端/Node-js/index.html","14e469e02c0bbca836f79776629e08cd"],["/categories/Web前端/index.html","59394f253d5d97827d506d73037dce07"],["/categories/index.html","492ffc8a20cec8a8ed55f0681f2a608b"],["/categories/实用工具集合/index.html","2810bd06b8214561346f3fe583a68083"],["/contact/index.html","055c7c796c5088a90fc32d277e95832a"],["/css/index.css","9ab8d7bc5671fcb78fa31c8ecbf24274"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","941bac4eb84441d045b6c6111b2bf5ca"],["/js/main.js","6e53629a64295e746e51c3f5b403dccf"],["/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["/link/index.html","2464a47e1acece2407840f37a97a1375"],["/page/2/index.html","0031cd5178d2bf406fb21da0d2102648"],["/page/3/index.html","d1d9068a67008bc8864b165b9fb0d690"],["/page/4/index.html","1ff7bca4129b4e04be76db645248aa32"],["/posts/10d0c9f1.html","564fb48aa83780b98028d33bb1eb6b60"],["/posts/12b4.html","5468e413a492ed2da921a92ed40df36d"],["/posts/153b.html","08085b9b99b1b8604bb6df6e8ab335a2"],["/posts/15cb.html","00e70a0315f7d4bae4d6d36e0800fd0f"],["/posts/49fb.html","8aa82b57e1cffe928750e5fd2c29ca67"],["/posts/4ab2.html","b18caaae90a533ec403106c072a24eda"],["/posts/4e9b.html","8dd59ce8cce8adef8ac422cc45d0eb55"],["/posts/51fb.html","1b5cc063ab568a3786c215f5cbe70bb5"],["/posts/5dbf.html","8d958ba0894a18648c54ee08610dce5b"],["/posts/6da42d6b.html","6d3b24f84f846c55cf7b25d719fd5d21"],["/posts/724a.html","9380f1c971c408fefb36537baeb16c5d"],["/posts/7400.html","9a3c76c0278e6f6c95a703e6c1ca3e39"],["/posts/7aedb564.html","a99021b757bdc9d54cd4f03ec9d864af"],["/posts/7de0.html","78973d3b5eb4085f0708985736abf203"],["/posts/7fe2.html","df4db6e744de4a92293289cbb3061fca"],["/posts/8094.html","052182149505f34b36a5d69ed99200b1"],["/posts/8c84.html","3d3a497263a83d20144b8f340fe0c913"],["/posts/9620.html","e12ad6cc3ca36809ab70d83c8b8330b4"],["/posts/a170.html","fd6d2451a1d747909b03f1fc26722ca9"],["/posts/b93d.html","afe3631ab44cf0de7c20c68c7ac811cd"],["/posts/bb7.html","7a156afc2d766e1384f986e891c7b10a"],["/posts/bc77.html","4a324c55010495d884d4f7164a65413b"],["/posts/d0e9.html","df5a3ebf3c86b301dcad73e66495f4c1"],["/posts/d17e.html","39421fcad1db211f9d7642755f76d883"],["/posts/eb3a.html","0f45e22882059b100c0df4482d04b211"],["/posts/ebb2.html","e65bdd7f6eee59891ec98869dfd9d7bc"],["/posts/ee35.html","eb286eedefe661a7039cec42b9b2198b"],["/posts/f295.html","3442d47e0593442c378bfd66b7906928"],["/posts/fc0.html","16a265f7979556de52b1f3ec0e2c138a"],["/relax/2048/amam.png","952cb93e5881707dd59413e7d38ee74e"],["/relax/2048/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["/relax/2048/css/style.css","b5fc3c1bf80fd597756d15e41edf73eb"],["/relax/2048/css/xsStyle.css","33098ea9bb75de29f1b3378ed7e97dcd"],["/relax/2048/index.html","4dd447dbd424ed09952932407fecdd7a"],["/relax/2048/js/animation.js","906e40f34f22bbe6c5c4aeb7eea7a6d4"],["/relax/2048/js/cellStyle.js","23153259cfc5800d193e78eca016e21a"],["/relax/2048/js/game.js","1d55c8d59ea3d55365db169348bd2319"],["/relax/mofang/index.html","9229e650fb6b47435cc9a22c8c88de89"],["/tags/CSS3/index.html","7862f852d2c4b48e089fb0df6a9070b8"],["/tags/HTML/index.html","cabd571839c81a40334d3cde6316e31f"],["/tags/Hexo/index.html","f614029a9770c922a5c6d793c88115d5"],["/tags/Hexo/page/2/index.html","34107e004288e5e5397f9d6e0c95891a"],["/tags/Hexo/page/3/index.html","f07e157542bc1016d51c03f413ff1589"],["/tags/JavaScript/index.html","5513e1480fee605397d677063a0a46d0"],["/tags/PWA/index.html","d82e5d423f89b908bed1b69ca0ef62a5"],["/tags/cdn/index.html","1f3d049838060d8c30a220fd6f82daae"],["/tags/index.html","129cb91febee5fb5333388cb9eae4778"],["/tags/jsdelivr/index.html","2a104bc691de311f1149f9314ff460b2"],["/tags/matery主题/index.html","13d78f6ef008620e7f552855cb4360e5"],["/tags/nodejs/index.html","2c5f007bb677be290dcb849522afc719"],["/tags/图床搭建/index.html","627a8c078b2e165cf05c88302be90998"],["/tags/开发工具/index.html","557d6ab3f204384ca2285241ac3c3625"],["/tags/效率工具/index.html","d27c6d14f3565f6867f180a709c34026"],["/tags/浏览器知识/index.html","08f7285c56dbbc327b6470bbb6a7d454"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,!1);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),e=urlsToCacheKeys.has(n));0,e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}}),function(e){if("object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function c(o,s,i){function f(n,e){if(!s[n]){if(!o[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(d)return d(n,!0);var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}var a=s[n]={exports:{}};o[n][0].call(a.exports,function(e){var t=o[n][1][e];return f(t||e)},a,a.exports,c,o,s,i)}return s[n].exports}for(var d="function"==typeof require&&require,e=0;e<i.length;e++)f(i[e]);return f}({1:[function(e,t,n){function i(e,t){((t=t||{}).debug||s.debug)&&console.log("[sw-toolbox] "+e)}function c(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||s.cache.name,caches.open(t)}function r(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var o,s=e("./options"),f=e("./idb-cache-expiration");t.exports={debug:i,fetchAndCache:function(r,a){var t=(a=a||{}).successResponses||s.successResponses;return fetch(r.clone()).then(function(e){return"GET"===r.method&&t.test(e.status)&&c(a).then(function(n){n.put(r,e).then(function(){var e,t=a.cache||s.cache;(t.maxEntries||t.maxAgeSeconds)&&t.name&&(e=function(e,n,t){var r=e.url,a=t.maxAgeSeconds,c=t.maxEntries,o=t.name,s=Date.now();return i("Updating LRU order for "+r+". Max entries is "+c+", max age is "+a),f.getDb(o).then(function(e){return f.setTimestampForUrl(e,r,s)}).then(function(e){return f.expireEntries(e,c,a,s)}).then(function(e){i("Successfully updated IDB.");var t=e.map(function(e){return n.delete(e)});return Promise.all(t).then(function(){i("Done with cache cleanup.")})}).catch(function(e){i(e)})}.bind(null,r,n,t),o=o?o.then(e):e())})}),e.clone()})},openCache:c,renameCache:function(t,e,n){return i("Renaming cache: ["+t+"] to ["+e+"]",n),caches.delete(e).then(function(){return Promise.all([caches.open(t),caches.open(e)]).then(function(e){var n=e[0],r=e[1];return n.keys().then(function(e){return Promise.all(e.map(function(t){return n.match(t).then(function(e){return r.put(t,e)})}))}).then(function(){return caches.delete(t)})})})},cache:function(t,e){return c(e).then(function(e){return e.add(t)})},uncache:function(t,e){return c(e).then(function(e){return e.delete(t)})},precache:function(e){e instanceof Promise||r(e),s.preCacheItems=s.preCacheItems.concat(e)},validatePrecacheInput:r,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r)if(new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var a="sw-toolbox-",c=1,f="store",d="url",u="timestamp",o={};t.exports={getDb:function(e){return e in o||(o[e]=(r=e,new Promise(function(e,t){var n=indexedDB.open(a+r,c);n.onupgradeneeded=function(){n.result.createObjectStore(f,{keyPath:d}).createIndex(u,u,{unique:!1})},n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}}))),o[e];var r},setTimestampForUrl:function(r,a,c){return new Promise(function(e,t){var n=r.transaction(f,"readwrite");n.objectStore(f).put({url:a,timestamp:c}),n.oncomplete=function(){e(r)},n.onabort=function(){t(n.error)}})},expireEntries:function(e,n,t,r){return o=e,i=r,((s=t)?new Promise(function(e,t){var r=1e3*s,a=[],n=o.transaction(f,"readwrite"),c=n.objectStore(f);c.index(u).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&i-r>t.value[u]){var n=t.value[d];a.push(n),c.delete(n),t.continue()}},n.oncomplete=function(){e(a)},n.onabort=t}):Promise.resolve([])).then(function(t){return r=e,((i=n)?new Promise(function(e,t){var a=[],n=r.transaction(f,"readwrite"),c=n.objectStore(f),o=c.index(u),s=o.count();o.count().onsuccess=function(){var r=s.result;i<r&&(o.openCursor().onsuccess=function(e){var t=e.target.result;if(t){var n=t.value[d];a.push(n),c.delete(n),r-a.length>i&&t.continue()}})},n.oncomplete=function(){e(a)},n.onabort=t}):Promise.resolve([])).then(function(e){return t.concat(e)});var r,i});var o,s,i}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var a=e("./helpers"),c=e("./router"),o=e("./options");t.exports={fetchListener:function(e){var t=c.match(e.request);t?e.respondWith(t(e.request)):c.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(c.default(e.request))},activateListener:function(e){a.debug("activate event fired");var t=o.cache.name+"$$$inactive$$$";e.waitUntil(a.renameCache(t,o.cache.name))},installListener:function(e){var t=o.cache.name+"$$$inactive$$$";a.debug("install event fired"),a.debug("creating cache ["+t+"]"),e.waitUntil(a.openCache({cache:{name:t}}).then(function(t){return Promise.all(o.preCacheItems).then(r).then(a.validatePrecacheInput).then(function(e){return a.debug("preCache list: "+(e.join(", ")||"(none)")),t.addAll(e)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){function r(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=a+t),this.keys=[],this.regexp=c(t,this.keys)),this.method=e,this.options=r,this.handler=n}var a=new URL("./",self.location).pathname,c=e("path-to-regexp");r.prototype.makeHandler=function(e){var n;if(this.regexp){var r=this.regexp.exec(e);n={},this.keys.forEach(function(e,t){n[e.name]=r[t+1]})}return function(e){return this.handler(e,n,this.options)}.bind(this)},t.exports=r},{"path-to-regexp":15}],6:[function(e,t,n){function s(e,t){for(var n=e.entries(),r=n.next(),a=[];!r.done;){new RegExp(r.value[0]).test(t)&&a.push(r.value[1]),r=n.next()}return a}function a(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null}var f=e("./route"),d=e("./helpers");["get","post","put","delete","head","any"].forEach(function(r){a.prototype[r]=function(e,t,n){return this.add(r,e,t,n)}}),a.prototype.add=function(e,t,n,r){var a;r=r||{},a=t instanceof RegExp?RegExp:(a=r.origin||self.location.origin)instanceof RegExp?a.source:a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),e=e.toLowerCase();var c=new f(e,t,n,r);this.routes.has(a)||this.routes.set(a,new Map);var o=this.routes.get(a);o.has(e)||o.set(e,new Map);var s=o.get(e),i=c.regexp||c.fullUrlRegExp;s.has(i.source)&&d.debug('"'+t+'" resolves to same regex as existing route.'),s.set(i.source,c)},a.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,a=n.pathname;return this._match(e,s(this.routes,r),a)||this._match(e,[this.routes.get(RegExp)],t)},a.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var a=t[r],c=a&&a.get(e.toLowerCase());if(c){var o=s(c,n);if(0<o.length)return o[0].makeHandler(n)}}return null},a.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new a},{"./helpers":1,"./route":5}],7:[function(e,t,n){var c=e("../options"),o=e("../helpers");t.exports=function(r,e,a){return a=a||{},o.debug("Strategy: cache first ["+r.url+"]",a),o.openCache(a).then(function(e){return e.match(r).then(function(e){var t=a.cache||c.cache,n=Date.now();return o.isResponseFresh(e,t.maxAgeSeconds,n)?e:o.fetchAndCache(r,a)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var a=e("../options"),c=e("../helpers");t.exports=function(t,e,r){return r=r||{},c.debug("Strategy: cache only ["+t.url+"]",r),c.openCache(r).then(function(e){return e.match(t).then(function(e){var t=r.cache||a.cache,n=Date.now();if(c.isResponseFresh(e,t.maxAgeSeconds,n))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var f=e("../helpers"),d=e("./cacheOnly");t.exports=function(o,s,i){return f.debug("Strategy: fastest ["+o.url+"]",i),new Promise(function(t,n){function r(e){c.push(e.toString()),a?n(new Error('Both cache and network failed: "'+c.join('", "')+'"')):a=!0}function e(e){e instanceof Response?t(e):r("No result returned")}var a=!1,c=[];f.fetchAndCache(o.clone(),i).then(e,r),d(o,s,i).then(e,r)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var d=e("../options"),u=e("../helpers");t.exports=function(o,e,s){var i=(s=s||{}).successResponses||d.successResponses,f=s.networkTimeoutSeconds||d.networkTimeoutSeconds;return u.debug("Strategy: network first ["+o.url+"]",s),u.openCache(s).then(function(e){var t,n,r=[];if(f){var a=new Promise(function(a){t=setTimeout(function(){e.match(o).then(function(e){var t=s.cache||d.cache,n=Date.now(),r=t.maxAgeSeconds;u.isResponseFresh(e,r,n)&&a(e)})},1e3*f)});r.push(a)}var c=u.fetchAndCache(o,s).then(function(e){if(t&&clearTimeout(t),i.test(e.status))return e;throw u.debug("Response was an HTTP error: "+e.statusText,s),n=e,new Error("Bad response")}).catch(function(t){return u.debug("Network or response error, fallback to cache ["+o.url+"]",s),e.match(o).then(function(e){if(e)return e;if(n)return n;throw t})});return r.push(c),Promise.race(r)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),a=e("./router"),c=e("./helpers"),o=e("./strategies"),s=e("./listeners");c.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:o.networkOnly,networkFirst:o.networkFirst,cacheOnly:o.cacheOnly,cacheFirst:o.cacheFirst,fastest:o.fastest,router:a,options:r,cache:c.cache,uncache:c.uncache,precache:c.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function c(e,t){for(var n,r=[],a=0,c=0,o="",s=t&&t.delimiter||"/";null!=(n=j.exec(e));){var i=n[0],f=n[1],d=n.index;if(o+=e.slice(c,d),c=d+i.length,f)o+=f[1];else{var u=e[c],h=n[2],l=n[3],p=n[4],b=n[5],m=n[6],g=n[7];o&&(r.push(o),o="");var x=null!=h&&null!=u&&u!==h,v="+"===m||"*"===m,y="?"===m||"*"===m,w=n[2]||s,E=p||b;r.push({name:l||a++,prefix:h||"",delimiter:w,optional:y,repeat:v,partial:x,asterisk:!!g,pattern:E?E.replace(/([=!:$\/()])/g,"\\$1"):g?".*":"[^"+R(w)+"]+?"})}}return c<e.length&&(o+=e.substr(c)),o&&r.push(o),r}function h(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function r(d){for(var u=new Array(d.length),e=0;e<d.length;e++)"object"==_typeof(d[e])&&(u[e]=new RegExp("^(?:"+d[e].pattern+")$"));return function(e,t){for(var n="",r=e||{},a=(t||{}).pretty?h:encodeURIComponent,c=0;c<d.length;c++){var o=d[c];if("string"!=typeof o){var s,i=r[o.name];if(null==i){if(o.optional){o.partial&&(n+=o.prefix);continue}throw new TypeError('Expected "'+o.name+'" to be defined')}if(b(i)){if(!o.repeat)throw new TypeError('Expected "'+o.name+'" to not repeat, but received `'+JSON.stringify(i)+"`");if(0===i.length){if(o.optional)continue;throw new TypeError('Expected "'+o.name+'" to not be empty')}for(var f=0;f<i.length;f++){if(s=a(i[f]),!u[c].test(s))throw new TypeError('Expected all "'+o.name+'" to match "'+o.pattern+'", but received `'+JSON.stringify(s)+"`");n+=(0===f?o.prefix:o.delimiter)+s}}else{if(s=o.asterisk?encodeURI(i).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}):a(i),!u[c].test(s))throw new TypeError('Expected "'+o.name+'" to match "'+o.pattern+'", but received "'+s+'"');n+=o.prefix+s}}else n+=o}return n}}function R(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function l(e,t){return e.keys=t,e}function p(e){return e.sensitive?"":"i"}function o(e,t,n){b(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,a=!1!==n.end,c="",o=0;o<e.length;o++){var s=e[o];if("string"==typeof s)c+=R(s);else{var i=R(s.prefix),f="(?:"+s.pattern+")";t.push(s),s.repeat&&(f+="(?:"+i+f+")*"),c+=f=s.optional?s.partial?i+"("+f+")?":"(?:"+i+"("+f+"))?":i+"("+f+")"}}var d=R(n.delimiter||"/"),u=c.slice(-d.length)===d;return r||(c=(u?c.slice(0,-d.length):c)+"(?:"+d+"(?=$))?"),c+=a?"$":r&&u?"":"(?="+d+"|$)",l(new RegExp("^"+c,p(n)),t)}function s(e,t,n){return b(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(e,t)}(e,t):b(e)?function(e,t,n){for(var r=[],a=0;a<e.length;a++)r.push(s(e[a],t,n).source);return l(new RegExp("(?:"+r.join("|")+")",p(n)),t)}(e,t,n):(r=t,o(c(e,a=n),r,a));var r,a}var b=e("isarray");t.exports=s,t.exports.parse=c,t.exports.compile=function(e,t){return r(c(e,t))},t.exports.tokensToFunction=r,t.exports.tokensToRegExp=o;var j=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&46<=r||"Chrome"===n&&50<=r)||(Cache.prototype.addAll=function(n){function r(e){this.name="NetworkError",this.code=19,this.message=e}var a=this;return r.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return n=n.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(n.map(function(e){"string"==typeof e&&(e=new Request(e));var t=new URL(e.url).protocol;if("http:"!==t&&"https:"!==t)throw new r("Invalid scheme");return fetch(e.clone())}))}).then(function(e){if(e.some(function(e){return!e.ok}))throw new r("Incorrect response status");return Promise.all(e.map(function(e,t){return a.put(n[t],e)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"https://yafine-blog.cn"});