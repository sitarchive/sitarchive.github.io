const CACHE_NAME = 'sit-archive-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/browse.html',
  '/css/tailwind.css',
  '/css/animations.css',
  '/css/custom.css',
  '/js/data.js',
  '/js/theme.js',
  '/js/animations.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
