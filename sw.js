const CACHE='dino-crossing-navigation-fix-20261026';
const APP=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(APP)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()]));});
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET')return;
 const u=new URL(req.url);
 if(u.origin===self.location.origin){
  if(req.mode==='navigate'||req.destination==='document'){
   event.respondWith(fetch(new Request(req,{cache:'no-store'})).catch(()=>caches.match('./index.html')));
   return;
  }
  event.respondWith((async()=>{try{const response=await fetch(req);if(response.ok){const c=await caches.open(CACHE);c.put(req,response.clone());}return response;}catch(e){return (await caches.match(req))||Response.error();}})());
 }else if((u.hostname==='cdn.jsdelivr.net'||u.hostname==='unpkg.com')&&u.pathname.includes('/three@0.160.1/')){
  event.respondWith((async()=>{const cached=await caches.match(req);if(cached)return cached;const response=await fetch(req);if(response.ok){const c=await caches.open(CACHE);await c.put(req,response.clone());}return response;})());
 }
});
