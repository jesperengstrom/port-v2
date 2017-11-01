"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/port-v2/index.html","ba53601938f156577f7426e5f78f50ec"],["/port-v2/static/css/main.1f8316a3.css","eddf32e5b8fccb179f60fa53b59cd195"],["/port-v2/static/js/main.604e9bb2.js","f76fc34c149123ff3c6072550c25698f"],["/port-v2/static/media/Neuzeit S LT Book.3f81fb5f.ttf","3f81fb5f3e17701d3bed4ec9855fa638"],["/port-v2/static/media/asap-dev.10c77c6e.jpg","10c77c6ecdf216c0a84eae5feb630617"],["/port-v2/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/port-v2/static/media/font-mfizz.19778cf9.ttf","19778cf9c33d0c98076aeffd7dd100aa"],["/port-v2/static/media/font-mfizz.4d03e427.eot","4d03e427f13a893d5e9ce14ff5ed8287"],["/port-v2/static/media/font-mfizz.5cd77363.svg","5cd7736320021318ac88ef393240125a"],["/port-v2/static/media/font-mfizz.64c7cf6c.woff","64c7cf6cb98b1297cd522df93db3d0d2"],["/port-v2/static/media/front-end-blog.2a22847e.jpg","2a22847e098df454214c81875ffc598f"],["/port-v2/static/media/iconfont.524781df.woff","524781dfef675a4af82dd14fd6f9e12f"],["/port-v2/static/media/iconfont.a40b6b28.ttf","a40b6b285526376dbeb09b6cb766b932"],["/port-v2/static/media/iconfont.da59b3e6.eot","da59b3e69b878c9490fb7d7bc65761b0"],["/port-v2/static/media/iconfont.f876b6a3.svg","f876b6a3ea1f4a97d8e118654b4a8984"],["/port-v2/static/media/icons.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/port-v2/static/media/icons.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/port-v2/static/media/icons.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/port-v2/static/media/icons.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/port-v2/static/media/icons.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/port-v2/static/media/j.c62bba23.jpg","c62bba23e59af6f3a702802c525cced9"],["/port-v2/static/media/jmdb.c6d698db.jpg","c6d698db4721601fac133c0a4275f25a"],["/port-v2/static/media/luffarschapp.cf408e10.jpg","cf408e10b4a136d09584be15dbdffe8f"],["/port-v2/static/media/palmekartan.db297138.jpg","db297138fd118d27713453f0583d02cb"],["/port-v2/static/media/sanka-skepp.c910a4b4.jpg","c910a4b45ad9ccc5f2b04c25e014e51d"],["/port-v2/static/media/talartoppen.42e87961.jpg","42e87961d8841e80ab2581f6ad740eb1"],["/port-v2/static/media/todo.44d83bab.jpg","44d83bab067c0e32c1b3b8d96a35a9ad"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/port-v2/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});