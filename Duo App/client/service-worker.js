const cacheName="MARIO_V2";
const appFiles=[
	"/manifest.json",
  "/images/allergy.png",
  "/images/allergy-cereals.png",
  "/images/allergy-garlic.png",
  "/images/allergy-peanuts.png",
"/images/healthy.png",
  "/images/nothealthy.png",
  "/css/style.css",
  "/css/stylesheet.css",
    "/history.html",
  "/historyProduct-info.html",
      "/info.html",
  "/mylist.html",
    "/product-info.html",
  "/indexoffline.html",
  "/script.js",
   "/js/fetchHistory.js",
   "/js/history.js",
   "/js/list.js",
   "/"
];
//Put important offline files in cache on installation of the service worker


self.addEventListener("install",(installing)=>{
    console.log("Service Worker: I am being installed, hello world!");
    installing.waitUntil(
      caches.open(cacheName).then((cache)=>{
        console.log("Service Worker: Caching important offline files");
        return cache.addAll(appFiles);
      })
    );
  });
  
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
          return Promise.all(keyList.map((key) => {
        if(key !== cacheName) {
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener("fetch",(fetching)=>{ 	
	fetching.respondWith(
		caches.match(fetching.request.url).then((response)=>{
			console.log("Service Worker: Fetching resource "+fetching.request.url);
			return response||fetch(fetching.request).then((response)=>{
				return caches.open(cacheName).then((cache)=>{
					console.log("Service Worker: Giving back from cache > "+fetching.request.url);
					return response;
				});
			}).catch(function(){
				console.log("Service Worker: No cache for > "+fetching.request.url);
				if (fetching.request.mode==='navigate'||(fetching.request.method === 'GET' && fetching.request.headers.get('accept').includes('text/html'))){
					console.log("Service Worker: Serve offline HTML for > "+fetching.request.url);
					return caches.match("indexoffline.html");
				}
			}) 
		})
	); 
});

  
  self.addEventListener("push",(pushing)=>{
      console.log("Service Worker: I received some push data, but because I am still very simple I don't know what to do with it :(");
      if(pushing.data){
        pushdata=JSON.parse(pushing.data.text());		
        console.log("Service Worker: I received this:",pushdata);
        if((pushdata["title"]!="")&&(pushdata["message"]!="")){			
          const options={ body:pushdata["message"]}
          self.registration.showNotification(pushdata["title"],options);
          console.log("Service Worker: I made a notification for the user");
        } else {
          console.log("Service Worker: I didn't make a notification for the user, not all the info was there :(");			
        }
      }
  });
  
  self.addEventListener("notificationclick",function(clicking){
    const pageToOpen="/";
    const promiseChain=clients.openWindow(pageToOpen);
    event.waitUntil(promiseChain);
  });