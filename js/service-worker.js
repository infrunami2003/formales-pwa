const cacheName = 'my-pwa-cache-v1';
const assetsToCache = [
    '/',
    '/index.html',
    '/about.html',
    '/gallery.html',
    '/css/styles.css',
    '/js/main.js',
    '/manifest.json',
    '/images/icons-256.png',
    '/images/icons-512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll(assetsToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
