// Cache names

const dataCacheName = 'TODOData-v1.1.4'

const cacheName = 'todoPWA-1.5'

// Application shell files to be cached

const filesToCache = [

    '/',
    '/home',
    '/js/react.js',
    '/js/reactDOM.js',
    '/js/app.js',
    '/js/index.js',
    '/styles/main.css',
    '/bower_components/bootstrap/dist/css/bootstrap.css',
    '/images/splash.svg',
    '/bower_components/bootstrap/dist/js/bootstrap.js',
    '/bower_components/jquery/dist/jquery.js'


]

self.addEventListener('install', function (e) {

    console.log('[ServiceWorker] Install')

    e.waitUntil(
        caches.open(cacheName).then(function (cache) {

            console.log('[ServiceWorker] Caching app shell')

            return cache.addAll(filesToCache)

        })
    )

})

self.addEventListener('activate', function (e) {

    console.log('[ServiceWorker] Activate')

    e.waitUntil(
        caches.keys().then(function (keyList) {

            return Promise.all(keyList.map(function (key) {

                if (key !== cacheName && key !== dataCacheName) {

                    console.log('[ServiceWorker] Removing old cache', key)

                    return caches.delete(key)

                }

            }))

        })
    )

    return self.clients.claim()

})

self.addEventListener('fetch', function (e) {

    console.log('[ServiceWorker] Fetch', e.request.url)

    e.respondWith(
        caches.match(e.request).then(function (response) {

            return response || fetch(e.request)

        })
    )

})