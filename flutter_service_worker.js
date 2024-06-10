'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "0208beb4c7dee4b8b67e56f605b4a539",
"index.html": "09075c7c302f4c39ef192090a76b1b0c",
"/": "09075c7c302f4c39ef192090a76b1b0c",
"main.dart.js": "2f67702b386024d6fcfd25c042cdfa91",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "53111fed3eabc3c9caa677437559ca79",
".git/ORIG_HEAD": "ec4b22655cc65ed33a8f4b5c2103f8dd",
".git/config": "af5b1b2b14223eea53d6b885c8fbf889",
".git/objects/50/fa17dc59973ca1ec573358a4120c0c0680736d": "c0be7f4c2be98117b9fafe06b1c5aecd",
".git/objects/57/6d217d7638c694f4774c4cd3fd7ba05190f62c": "92d9c5af5720290de2b1d3aee0994744",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/03/0ff314fd49bed5f39aa8938e7754cf23306230": "b547f997722cd18bac3339c013e16ad0",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/a4/82f8318b504a847d17a25d1e4cad322d226cfa": "05916615ae0cf45fdfe40857ae28ed05",
".git/objects/a3/b18cc21a6b98c0e5156b1b36a31c27ffda6b7f": "34c3bade0a4d4290632b40ec9ff1f574",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/d7/6ca795e346e6e56b562bfb7202f686f706242e": "ed3d6e90c556fac5f26d0e07fe2c14a4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/7f57fa21a9b511ec38913ce273a1dca36a166a": "22dff2c1cc36e4bc74da497d8ff123d3",
".git/objects/c9/da55c589ff016e068b692d296e0359d1aa467c": "9dfc78f6ce1017fcdb6a5de34c482002",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/4bd02339eddb21f42dda03fc1e4be2dd1b1ac6": "f5204527de8b59b9df4bc4db9deea084",
".git/objects/ed/2167b103851892fbc88afe5d72027948feb717": "94a2c095b7932fa0f3e7f125393c0930",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/8a/4a720ce55a1ba5294ff64e4dfe5b6ef4bbf0ee": "cfaf0f6864c47d49f6dc789291c6d934",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/9297befac84a0bbe994ae06af170e9dc27bc5e": "dbe6f4c746f2130bba1d106865366e7d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/9a/1918e620a3fba2a9d31bf49491ff9369575f46": "d3de17330015bf7adf638ce77952823d",
".git/objects/65/1a9ff94d2fe3e736a87fd83234774f097b033a": "07746767a0db326bceb685caf2bc1fc0",
".git/objects/30/5b6619104ea01baa0105930a7ed318bd1c3a82": "d0544c6da93faa65adea35b4fe0fff69",
".git/objects/5e/8798fadf6f85abf98ccd84f3621a42b163092e": "643e3508a000666e5188ff0e02e1b1c9",
".git/objects/39/b7079405c47207f9137f0eb96c1974333a150e": "c242ab0e6a2ceab922a2629228ea8ea8",
".git/objects/90/81fde442795ae36c8005f1493fc8846b74fb9c": "d62e960e219992d78e8d301b0e2004c5",
".git/objects/d3/62ad73967f6fd2d3b71247728280484191438a": "b5d9fdc873749e57fc6534560dbb9f5e",
".git/objects/d3/430240505bc5710ce68d423750e9a51e4a8156": "da821af23ddf88bd8df2a24a70a570b1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/23165b6f7ddb145cf4b19f3ca5834eb3f4854d": "ec2724f16e373a0149de78f8fff83d9a",
".git/objects/d2/c978b85fad7b3726eaebdf87a738dfdd90c117": "bb8b4c82374d3af528b6ae3b1ae080ca",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/d952d4af96a117a7e3059b728748ed1f5877ad": "2205389733ed4e98287f773e7a8a2cb1",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/f3caf61ac450b7cfdaad645d26725b7aea7b96": "022147b4089e63fd3b4702aa56da1ca0",
".git/objects/c4/d5745b3975ef46ea02d4b2fdcac847af957048": "e05cc4a3018d891c384333a71de1250f",
".git/objects/ea/9efc55bb3705063cb780aeaae1c9f5b8501a56": "fca75ce62ae755605a60976b305d9ebf",
".git/objects/e1/4c676d701aeb0f4ab65240393eb71f3e2480ab": "21802e8d6a5bc338ad00b76743603d06",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/e1/2a73e159262ec3e7c66d1193d4efe5d8bb65ce": "d4da9c6ed67d2d62f892ede793bcf16b",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/e9/0fa6fd277e87c05830d9d7b892149f2ff27158": "f678acb17702031ae10dd2b5e66ff0e9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/82/9f59ab33b3956330c740a63452cf5056719f29": "568bf46383db06aca011626755364fc4",
".git/objects/2b/257c368cf1db6dfa5d1e1cfdae11723a6da7b6": "31b61effa75dae4323a79f84b8973032",
".git/objects/47/1963517866ee62cf44ae901a67b8bd7357ab7f": "9785ac6601b53762e7ecf67238053c4b",
".git/objects/13/364a9dd49dff9bfd83320dade1f7617a4ce645": "aeb9097c9c0230869cf963ac90f5acb8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "68ddb1784998510549a08b48af1267a9",
".git/logs/refs/heads/master": "e7aba51e3e83a43bafa2cc41bc205257",
".git/logs/refs/heads/main": "cc6f074fd3b60ee054ca8735759033fc",
".git/logs/refs/remotes/origin/main": "ccd5d84b3bd601073d856ba33e2b9960",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "c602975120376923af88f73a0e2102a3",
".git/refs/heads/main": "e9f1c68137a6b2828f2bfbf230af19e1",
".git/refs/remotes/origin/main": "e9f1c68137a6b2828f2bfbf230af19e1",
".git/index": "424e672d00b4434f14216bc5ec409480",
".git/COMMIT_EDITMSG": "024806f2fa97902441809b55769a3504",
".git/FETCH_HEAD": "12d1a6fa40862908c5cedbfc5e4fd9bb",
"assets/AssetManifest.json": "46539a6d277251764528a2edcccfa869",
"assets/NOTICES": "8d988a541d013c6ccfa03d01dd669994",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "a78748f790019a59714383170c8b0fc9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "a7619270b18783bf3c34eb50d102f2a4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "77055ce7b07c1d4aae8f615333bebbb3",
"assets/fonts/MaterialIcons-Regular.otf": "8d1f1f0d26a0ac9eb3a8de5d35b32e82",
"assets/assets/images/image_placeholder.png": "dc95e6954b52c0a24c8afbbe2490bb33",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
