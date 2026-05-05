const CACHE_NAME = "copa-2026-album-v21";
const FLAG_CODES = [
  "ar",
  "at",
  "au",
  "ba",
  "be",
  "br",
  "ca",
  "cd",
  "ch",
  "ci",
  "co",
  "cv",
  "cw",
  "cz",
  "de",
  "dz",
  "ec",
  "eg",
  "es",
  "fr",
  "gb-eng",
  "gb-sct",
  "gh",
  "hr",
  "ht",
  "iq",
  "ir",
  "jo",
  "jp",
  "kr",
  "ma",
  "mx",
  "nl",
  "no",
  "nz",
  "pa",
  "pt",
  "py",
  "qa",
  "sa",
  "se",
  "sn",
  "tn",
  "tr",
  "us",
  "uy",
  "uz",
  "za"
];
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/icon.svg",
  "./assets/icon-180.png",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/ui/share-2.svg",
  "./assets/ui/whatsapp.svg",
  ...FLAG_CODES.map((code) => `./assets/flags/${code}.svg`)
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      });
    })
  );
});
