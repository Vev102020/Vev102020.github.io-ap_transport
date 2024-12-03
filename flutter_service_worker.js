'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "9656b46edadff4cd2a26aa85fb9d9abf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "38e34dd19c99b0d161176334819e9593",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "9d85d6f417adc4dbcfbd8c2261400866",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c470d92c42f6a694649595a312b51bcc",
".git/logs/refs/heads/main": "2d74a3100eecfafd092e68e3a47a4e58",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0a/42081146a5cb9dc77f12ac38ae60762bf7b584": "beb0044b54403e5c72eb5ba7b99c5e0b",
".git/objects/0f/22e92188694428e115a862ee3ae931fcc8b3c3": "564fd29a452d25f667a9ba5c088b05cf",
".git/objects/0f/43126c7bf5c29a270009e1a3abe3ca9acc36cb": "8ee3f8e8229fbc5d212e38d702bf4d7d",
".git/objects/11/5ec6a26d0b434a25fe461112caf4ca5608571b": "d0fb9fbc85555be609a382a778fd718a",
".git/objects/17/adbd1f5033832692cee93d5fff361cbe09261e": "fb9c1def891102f7c9b15911315c1b64",
".git/objects/18/9ce9d0c60c76251cf57657cee1e3e068feaaab": "a4a9e29fbae182a03bbf2790b10f6b59",
".git/objects/1a/9412d93d1e7a93b121535e276c4b91d285b4bf": "40c04288f2159f46fdea47ba411e238e",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/82b2db6e7f870de115d3228546c05a2a130342": "6698a1368a7fbf93ad1b78d5520b0531",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/09a87001b3f3801d1d5f2a060f46a0424f8246": "ae4215bb1866ecc5946410fade1b583a",
".git/objects/27/c20ed5b817deffff912ac0ac164a098bb155f2": "931ba969582a1fb95389af90be5c04d0",
".git/objects/2a/175ee8b2289b19550ba6507b9a26d7eb875a0f": "a477ff98f743286e8a07eed256569638",
".git/objects/2a/2fb23337408334a4910bf9553f7c17ac9f5c46": "cc14d87aa2d25d3bc7ed03e6cbcffee1",
".git/objects/2c/06cb5e6d0264830c06fc3f962ddd2d5cff0f79": "be85418ecbc832be0e26d4b89b21541b",
".git/objects/31/94f024b16030ebc38ee9c913729b004b132452": "b0d0b9143526ac4203ccae4a38c6ec03",
".git/objects/33/764a7dc0ef6fe9b83e253a479c2a8c3c1dd0be": "c7ca1ce9373e5f728e3fff19930b477d",
".git/objects/34/fa769e6734238f8deaaf84172bf5d723a016be": "8e573e85ec24fd15820e569d6cc8c23b",
".git/objects/40/12225c0b220d0e1d67001daa7e01bba3df6953": "62a756494cd4486a4ac4ba6c10ccb080",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/4775f4813a30455d2dbc43e7fe094a272f3711": "11f61a7dcce6deb670eab3ce1b584d2e",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/8ef18661a8b45093190b4d1b9c78be29551d7a": "38a5f41fd70b9036995ae30bc67c1d13",
".git/objects/4e/d5275a2519666644ef898f29bb3a45e049e7ec": "98424987e6f953dc71877074c52eb1cf",
".git/objects/58/d15fe220a0c23d5d2b2cac06f266332b3cd3dd": "df9ba71b2c717c626d4898b45688ac63",
".git/objects/5e/3db04a24326a9d031d2d42390ac49b73f4d20e": "4116b8ef8f74a89a53bf3a3ba74866dd",
".git/objects/67/ade69bdca58c7ae73fb36b9b7e6d87c7140235": "88a1f892faf39d4768c48c2fb190abce",
".git/objects/6b/a9bb8e6ff6876cbaad554e889a9af35eb6b0d6": "d818ce361b2e5efd94380c40f744dfff",
".git/objects/72/611059bf544da9fc1e25da07b26101b8b9cf8e": "45103c8cb9fbeea7dd832c0e29dccdcc",
".git/objects/78/8ad25766c79a91fa09d281dd14c9c6aadc254f": "ff356fe0bee4892eddf4ce723f69d393",
".git/objects/7a/ea122427bda73f5417213b39991ec0f0eafc00": "96a2bf1f8ef3a13a9dbe5bd94652a0fe",
".git/objects/7e/bb2f8cd479d6c96f5c00d59bdedd90957a080e": "0f1e65d37a0e95fbcf9968076ab9069a",
".git/objects/81/70e2a9989d39f99a400fe25277088f3de9edd7": "e949f93d65b56b41a20a8a33eede5bb0",
".git/objects/82/9e32f4677a162338d05daafca06bcd496827f7": "70346f1faed62366c2fc8bfe3a9a5469",
".git/objects/82/e9a180d0dca467c7031dad025d44271fb8e649": "dd37d67203ab10efa1ffb0baaca75b36",
".git/objects/84/aa78a1435525da052a9d6b754674381fec0cf9": "7deee86f48789f2e337cb71fd2a05c1e",
".git/objects/85/30ccd085a2980eac078908491225b42b32fe16": "d82da30d1d6c3e74e9d7c94ed5ae6f04",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8b/44d9bc6e90ba9ab0bae7b37a88a3da3053b9f9": "97cc00c663c9f7b7aedc4f47b9994ab4",
".git/objects/8f/8d09c86fb4f82170a0dd95477658a3f66f5575": "430434b527adb950d288d5bdf5b212cb",
".git/objects/92/ae1bc03b0a8c8882c51d029a80e30b1e00c2d0": "4f343d1c69002f6fd4a8eb6899c6cb0b",
".git/objects/93/e61355a690a07410dc71c2007b9b7069592b5e": "a55aedc8b19771190eb171a3145be832",
".git/objects/a1/89a6f38a936c77e0a8ae1d15a2d4a3da5be446": "8080cdb6e56f7519c78f8347db3d30cd",
".git/objects/b3/a21a2554953bdbcc481bf4ba04acb4ac8dd522": "6b16958e536df4b217cbfded89f342cb",
".git/objects/b5/2272b302ab1cc79cc3846e758435fb8b128802": "f6b72734b118856eed04a4ccae6a4e40",
".git/objects/b6/b116c0490fb1d3280ce35a6b01982fb9cb225d": "693c538289fea5156a9cfcd7d3ee2c9b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/c1/cd3fb1868880d408b9044d695cead92edb7c1e": "a5ed1f498de573e5156ac69d495ffc08",
".git/objects/cf/025f99dd89ecd84cc3330a60008ba25ded3b83": "3164cc5448887e8425e786ef9dca6c87",
".git/objects/d0/a02f9642080792408a2d357983e909e16318e3": "763e4573934ec82b1d47dbeb310b6ce8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/c79cbe3772beb1f1a4bd0cecf30285cba145df": "88fe182b79508888e987467b65057f35",
".git/objects/f4/a266dd37d5066da46c9a6b8898073ae2930a64": "90c22367f91de9fd622ad04f0a5fd7c8",
".git/objects/f7/307797c206300edb467d38c1ab2dd7ccfd1038": "227bb662779beaa60798ff84b95e5994",
".git/objects/fb/3f799ceba5d02a8da448ef1a382fddd936c1f2": "98291601ec7fb236188c9143ef814b69",
".git/objects/fd/e189581651dd2bea0531b3fb26fe5077f32364": "c323e6b11a62c7493c129402422209c6",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "92cb664c8fba63e13c4a98d3d373288b",
"assets/AssetManifest.bin": "897e4e81513056f9fd89419a3d55337b",
"assets/AssetManifest.bin.json": "0af913a0a9be4f36c899642278b8ae3b",
"assets/AssetManifest.json": "68e7978794c8452319724a5a266bbd64",
"assets/assets/icons/add.svg": "ac248133e3c37bdd85be17e14ba097af",
"assets/assets/icons/arrow.svg": "dee895dca62b3c67e27ca70ebc2a997a",
"assets/assets/icons/back.svg": "71760d9200cc9590c771f936372ef7c2",
"assets/assets/icons/del.svg": "dd9c3b9d0fedfb26b2379dd15eea0188",
"assets/assets/icons/edit.svg": "cf7f9aefa0928289582de863de204b38",
"assets/assets/icons/img.svg": "e1aea25a0500018d4dfdba6a2f11fd00",
"assets/assets/icons/map.svg": "353c8a463d8e7ac08e6e2a836d880708",
"assets/assets/icons/menu.svg": "a7573a9f582bff9877b66f6a3bc04340",
"assets/assets/icons/min_munu.svg": "4c91ce097db5e625ad885b35c01f0222",
"assets/assets/icons/reload.svg": "421727ed47952ff6cf9dfb0b40c931e2",
"assets/assets/icons/remove.svg": "7f1f719ec01fc72385b2f0f938ce5270",
"assets/assets/icons/support.svg": "13a028f4655935b3b0422a25a734ae00",
"assets/assets/images/logo.png": "28c11d16a5351fddd58c0109338f31e4",
"assets/FontManifest.json": "82ec216a3309eb00965a4ea415b75b79",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/fonts/Montserrat-Medium.ttf": "bdb7ba651b7bdcda6ce527b3b6705334",
"assets/fonts/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/fonts/Montserrat-SemiBold.ttf": "cc10461cb5e0a6f2621c7179f4d6de17",
"assets/NOTICES": "bce12b6600de31ccd271ec7cbb4c41d4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "321aa0c874f6112cabafc27a74a784b4",
"canvaskit/canvaskit.js.symbols": "fe1e5fbef6409fecc878e0cbdcf3b562",
"canvaskit/canvaskit.wasm": "53f54a6449129dcba94ff26fa5488cf2",
"canvaskit/chromium/canvaskit.js": "bc979fce6b4b3cc75d54b0d162cafaa7",
"canvaskit/chromium/canvaskit.js.symbols": "2be9dcced9c492f1f1e475aa9ccf511f",
"canvaskit/chromium/canvaskit.wasm": "26c5ab26b384a8c52d0ba93d23596723",
"canvaskit/skwasm.js": "411f776c9a5204d1e466141767f5a8fa",
"canvaskit/skwasm.js.symbols": "e03a50cb20ff6c262729d11295ac5454",
"canvaskit/skwasm.wasm": "feeb27aea29a9e626a87f2dac168933a",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "976b5544eb305a8d4ee723a1e88bbba4",
"/": "976b5544eb305a8d4ee723a1e88bbba4",
"main.dart.js": "cd36e0e72138cb6491c998cc13a81474",
"manifest.json": "9e090cb9a35d9b88562167c31ce170fd",
"version.json": "4a6a08fc8dc9a4aa4108ca0374cc18cb"};
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
