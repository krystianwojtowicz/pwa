const staticStrongman = "strongman-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/pudzian.jpg",
  "/images/bjornsson.jpg",
  "/images/caron.jpg",
  "/images/hall.jpg",
  "/images/kieliszkowski.jpg",
  "/images/licis.jpg",
  "/images/pritchett.jpg",
  "/images/radzikowski.jpg",
  "/images/shaw.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticStrongman).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
