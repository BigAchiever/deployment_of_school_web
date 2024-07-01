'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "aeba37a3aaffc93567a61d9a67466fdf",
".git/config": "9aab0442fbd36f86ae7de7c7d214a0c2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0737bd328c90f9f6239ad8d46c589656",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6d26fd86b226d581398e2b72ae8a3059",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "78e0a0979d59677de4911d08227fc40b",
".git/logs/refs/heads/main": "109bae07170ba166dc4452d938279096",
".git/logs/refs/heads/master": "94cf3e75d457aed879047bfa8d6aabd8",
".git/logs/refs/heads/secondary": "04afcbbfef06d3aff75bb61e94e4a6a1",
".git/logs/refs/remotes/origin/main": "8a14e3119210b35217965a86cc83382e",
".git/logs/refs/remotes/origin/secondary": "6882e160a777a927835ff7b3adf26ddb",
".git/objects/01/f33cbfa73e053dcb93504ae7dc46d6946e35e2": "ec7077729f2cd94cc43871d2a563f895",
".git/objects/1a/5022a4b8402807464ee3f6533febc7fbd63634": "1030fdad1f8bed45ebc19055aae3e2be",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/fe7f4a82e2f24f340ac4a5db4a4eb215369f72": "6829d3dff8abf53ee315e3b74e98d97f",
".git/objects/23/ef9072a5b92e85651ae44845226c20f1dd100d": "392b6d763a00d079aa153c8125e8dbf5",
".git/objects/24/894fe9000576a207961875cd25d3b22ae0837e": "e12b684d8bef316ccbca8bb6012e2016",
".git/objects/2f/b3f86a75e7dcbbe6e0fd499b11a8149e9df9ce": "e1f3dbedcfb8663a066a34a76420f544",
".git/objects/30/c85040566fceefc2c716a2de20e9cd1dfad804": "bb5357633342197768e4b77c6a1e18bb",
".git/objects/37/9ff0bedda262c0c8a8c008720cdeb153d58be6": "5e9776fb05b5108d5e5d6d15a2338aa1",
".git/objects/38/540c3531e728f36e751a0cb5b4b837a00684dc": "b2eb65b3b37f302e044fc442a9de9a25",
".git/objects/3e/1f2da7206b1a5d61cb3aff81e9a4e064e67782": "b6b15c4ca5342da8b624ac10c5c9e63f",
".git/objects/40/8608f626024b5baa8967e53fd30c2a4d865f23": "51ae935b80c6a0b3731230792aadcc34",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/53/6d2ebe7c2732d4173124b5d7fa3af6771f5f7e": "8b268bef693563972ad8706107d393a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5e/7e14466a2b4516e73e6369695c735ee6cfeef3": "cbc626de31a7839fb64e689ff04f8db9",
".git/objects/5f/68066a055087991931cc7f7319ae81ce537986": "810250b03d10197b63e38d723e3e11b8",
".git/objects/67/5f6cd961b6e8e20ed2f59f6d9784e19d42899f": "86c8f1d530615236e665d6f8e122db98",
".git/objects/69/04a8529e3e162af4951599db66539c0a1ea7ac": "aabab51bbf8cd01e447ed0d31212b965",
".git/objects/6c/ef56a4c4de884add360ceadb63a41d59ac58f0": "15cfc49d0c60453399c0db3132ab6ace",
".git/objects/74/d2e614d481c4133e18f2c4de08fc25df76206a": "d53b06adc66e1166ce32bfe225c049d9",
".git/objects/75/b833370b60945436cd12691596ce832ec59633": "5860baaab22ceb7784cef3e499c84759",
".git/objects/8a/67d1ec6e839fe0541dc98446479443a9950c60": "a671cf148f2574ac7409a320b26e018d",
".git/objects/8f/86ceb3f680733b7bd1c47c51fda55578e67cdc": "9a79f60c90651c192ce5c9fb04bf3c04",
".git/objects/b9/059c12a02a406a95a89ff881e78bb01eff6419": "9fe70e1e78d6f0515d5f7442f192e73f",
".git/objects/ba/7a9c6ca05ea4aed64936ac8564fdc4013c0767": "95c87eaf277681fc3846134142f0648f",
".git/objects/bd/2f1ae379881b3174cf3c72cfd773b8d4ad411e": "521f4bedddb12193a9f92b641ccde14a",
".git/objects/c0/9a4f3edd86bf49324a861132224e171f103615": "3256fca6a7be00ffb41d372a81d3536a",
".git/objects/c3/5014b29b514bfed04432dd36b794d6358babaf": "af94dc04cca3134b5f516912a2da033b",
".git/objects/c6/917335d37e45e1a521b73c0066099c03ec6e08": "62a9c33e729db2655c2d74fccff01718",
".git/objects/c8/5dbb7ede36338dbfc8b28c43ad04f1d7a88a89": "d9cdfd35496351f9ac66407dcf859a38",
".git/objects/cc/b6e5456fc912b9276c6d46731be79ea33db312": "04aca541c21cfb45e775a9cfc23bc764",
".git/objects/d3/e8aae9c554923781fdc6e674d2e3b6e38f5377": "a07e2a110ca2a51b16c5843a5ca89def",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/ce1d418669ae0bad6b7a0c3ee386bb8b258a1f": "fcea0a07f1841a72e17b16962958d113",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e4/73488ce295bafcd91b3078551d6081c229b329": "7cf4dbaeabf96d0bb6b49034974440bb",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/f605f1e3805d66769450cfbfba6987adc5bff3": "b3a8a862456ccd7ddac304618fa34fdd",
".git/objects/e7/68b28bbaa56be993d9639ab212f01fd6bb0edf": "2e5171acad540d19e4f97f91acb16fc1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/pack/pack-f0015fa2ebefd94119c15a541d7841a7b7663c08.idx": "5249e6de15b362be36bc697e3cfffcd1",
".git/objects/pack/pack-f0015fa2ebefd94119c15a541d7841a7b7663c08.pack": "2d7be99d9647cf84f5f7d6a4c4219a7f",
".git/ORIG_HEAD": "2638948ceed9fb11939d1c32cd884379",
".git/refs/heads/main": "2638948ceed9fb11939d1c32cd884379",
".git/refs/heads/master": "f430a3935596c526c9ce80851e1fe872",
".git/refs/heads/secondary": "f430a3935596c526c9ce80851e1fe872",
".git/refs/remotes/origin/main": "2638948ceed9fb11939d1c32cd884379",
".git/refs/remotes/origin/secondary": "f430a3935596c526c9ce80851e1fe872",
"404.html": "40d1eac948b9676790e5850c262d5eee",
"assets/AssetManifest.bin": "413b92fdfdc598585c10dad5d1e6574e",
"assets/AssetManifest.bin.json": "7639a5d59418a808eb75e625ffcbc03f",
"assets/AssetManifest.json": "3e21aad7615b4fb12062223fb27aa00d",
"assets/assets/fonts/dk-magical-brush/magical_brush.otf": "22842e3ac77483882d784a422e003eee",
"assets/assets/fonts/pfdinserif-1/DINBold.otf": "84a689f5f8748b5848c3dcbfa2be006e",
"assets/assets/fonts/pfdinserif-1/DINPro.otf": "48fcd5814250f4405be88910bfb1484f",
"assets/assets/image/ani2.json": "eaa31ff1924fda1f2f89d2ffabe558b8",
"assets/assets/image/award.jpg": "87b1157423f97cc5a49230edad89f57c",
"assets/assets/image/award2.jpeg": "814d9eb767d71b2a5245a908d431dd44",
"assets/assets/image/award3.jpeg": "09788208225a9dd2d0fd07c9457317b7",
"assets/assets/image/car.json": "eef89bb17d84e77ce99e1a1cbc4bc55e",
"assets/assets/image/contact.json": "eaa31ff1924fda1f2f89d2ffabe558b8",
"assets/assets/image/dads.png": "99ddee4d6ecbda7152ce62c6a8e32fad",
"assets/assets/image/dot.png": "240803f1510a8a21b7be51b4846a2f8f",
"assets/assets/image/error.json": "4a61d51cbb1148f2b3a8a3cbbb027f63",
"assets/assets/image/fb.svg": "3b54f84534999f24e78efb2fdd4ed1b2",
"assets/assets/image/hat.svg": "bc73cd074761aa6a7a928c516da94c80",
"assets/assets/image/hero-background-1.png": "b549692c1e34f0b1f68a44ff9db79d17",
"assets/assets/image/ig.svg": "d4222a15684c9192af9c3af460d34d5e",
"assets/assets/image/iti.svg": "e5742d6b295e189e3f1cefd9cef370df",
"assets/assets/image/kids.jpg": "430b15df02e44aeb2396464efc52fdc0",
"assets/assets/image/kids2.jpg": "8d60187f3346142b0820a9ac962773ee",
"assets/assets/image/ln.svg": "194301918f95bb08124e3796f0ddc4cc",
"assets/assets/image/logo.png": "c6ffd74cd5146e9f001ca2f7549ed84e",
"assets/assets/image/map-mobile.svg": "6518e1b2652dc57069c2495a5551fa44",
"assets/assets/image/map.svg": "ba78a41f4ac3d88199aef7506525f33a",
"assets/assets/image/paper-background.png": "f05de2fe8091aa2f68c702f7f482faf7",
"assets/assets/image/plane.svg": "371dc362ac6cd43285ad7f1a78520c33",
"assets/assets/image/puzzle.svg": "bba1b533dfcb7183f76f8c628eea5e45",
"assets/assets/image/result1.jpeg": "6178b94aead7fc9ab4eca92f18bccf41",
"assets/assets/image/result2.jpeg": "2441816097a5908c1c596fa9911a7494",
"assets/assets/image/rocket.svg": "12711eae5b69f2f682468ce1d59fb5ec",
"assets/assets/image/tower.png": "7166a4d0395c7c8948c8a563c3a01b9f",
"assets/assets/image/tree.jpg": "8d9d9dc6305f8b2af23f0a6fc7322620",
"assets/assets/image/yt.svg": "562924efaad0d4899e00c135d617e97f",
"assets/FontManifest.json": "99e2fea253fef2c319a06d8cb1563cc2",
"assets/fonts/MaterialIcons-Regular.otf": "dba821f825cbcfa14b7dd3f7c6ed6369",
"assets/NOTICES": "54990319de0d3a0127abb8be585303a4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"build.js": "216e19ee7898869fa792fbe4e17cff6b",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.js.symbols": "4e6e9cb94178bb5bbe82867a529bf1cf",
"canvaskit/canvaskit.wasm": "64cc1c11c34313697f61d40fa90dd69d",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.js.symbols": "4a107a709d356e8c98df2d6a1dd3793e",
"canvaskit/chromium/canvaskit.wasm": "b5348b696a8243904761bc52959a4b29",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "ab9b8605641422ec29a99434f3c5e2d5",
"canvaskit/skwasm.wasm": "a57540484eaaf16cabc66dae4959e60d",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/logo.png": "c6ffd74cd5146e9f001ca2f7549ed84e",
"index.html": "cfc648a674539199b1380eb07e5f468f",
"/": "cfc648a674539199b1380eb07e5f468f",
"loading.gif": "917cf8b79ee6f970a6e12faae132758a",
"main.dart.js": "b38727f32bf60213a40ed794e24cd88e",
"manifest.json": "3c85fe627b251384e98d984f6eba8126",
"README.md": "9a29b808a490ca4ced757f46a5bd6f1a",
"version.json": "b492f1a4da66bef905e542cdbcc0a4a2"};
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
