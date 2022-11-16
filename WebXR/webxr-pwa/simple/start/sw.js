self.addEventListener("install", e => {
    console.log("Intall!");
    e.waitUntil(
        caches.open('static').then(cache => {
            return cache.addAll([
                './',
                './css/styles.css',
                './images/logo192.png',
                './js/index.js'
            ])
        })
    )
})

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
})