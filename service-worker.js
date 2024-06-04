// service-worker.js
const CACHE_NAME = 'pwa-example-cache';
const urlsToCache = [
    '/',
    'index.html',
    'home_json.json',
    'movies_and_music.json',
    'programming_languages.json',
    'sports_and_hobbies.json',
    'assets/css/style.css',
    'assets/css/animate.css',
    'assets/css/bootsnav.css',
    'assets/css/bootstrap.min.css',
    'assets/css/owl.carousel.min.css',
    'assets/css/flaticon.css',
    'assets/css/font-awesome.min.css',
    'assets/css/owl.theme.default.min.css',
    'assets/css/responsive.css',
    'assets/js/bootsnav.js',
    'assets/js/bootstrap.min.js',
    'assets/js/custom.js',
    'assets/js/jquery.appear.js',
    'assets/js/jquery.js',
    'assets/js/jquery.sticky.js',
    'assets/js/owl.carousel.min.js',
    'assets/js/progressbar.js',
    'assets/images/about/profile_image.jpg',
    'assets/images/about/welcome-banner.jpg',
    'assets/images/musicnmovies/awalktoremember.jpg',
    'assets/images/musicnmovies/dilaw.jpg',
    'assets/images/musicnmovies/heavenknows.jpg',
    'assets/images/musicnmovies/parasyte.jpg',
    'assets/images/musicnmovies/saturn.jpg',
    'assets/images/musicnmovies/sevensundays.jpg',
    'assets/images/musicnmovies/sparkle.jpg',
    'assets/images/musicnmovies/yourname.jpg',
    'assets/logo/favicon-60.png',
    'assets/logo/favicon-90.png',
    'assets/logo/favicon-100.png',
    'assets/logo/favicon-512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});