if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,c,i)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const a={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return n;case"module":return a;default:return e(s)}}))).then((e=>{const s=i(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-030153e1"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/7a77c005af06c17f66acf16a1ca1de1f11c11202.ef883c8f7131c257ea44.js",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/chunks/925febf11989cb40a2d3c771211b4e2232762877.0b95e84c5a5272b6b535.js",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/chunks/c2774c4d9490c5317d05840cab37f6e9d573fbd3.8e7bc205ca95ef9023ed.js",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/chunks/c2774c4d9490c5317d05840cab37f6e9d573fbd3_CSS.dd32408e2471bd10af40.js",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/chunks/ca5b1d8c8bb8fd22d2555c0bffc49f60dab237f0.e6b77e4d0bbfd95cf2aa.js",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/chunks/commons.d5a1537a268992e742db.js",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/chunks/fee7cf806698984e876b945944f099067246824d.7392404151785a1146db.js",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/chunks/framework.29f9e2f3d4a33bafbaa5.js",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/chunks/main-0f5f4aeea07ff14d6844.js",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/chunks/pages/%5BblogId%5D-2e072d9a346d26a91b9f.js",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/chunks/pages/404-05f2c3b50ddb1cdf4e14.js",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/chunks/pages/_app-2bf79673700efdaf8459.js",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/chunks/pages/_error-2307e6622b8aac79d9e5.js",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/chunks/pages/archive/%5Bdate%5D/page/%5Bpage%5D-fad8a913d2ef3b951cd0.js",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/chunks/pages/category/%5BcategoryId%5D/page/%5Bpage%5D-29fcef1de9a607d29a7e.js",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/chunks/pages/index-08049ce17c5f330829c6.js",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/chunks/pages/page/%5Bpage%5D-7b0fe84e863c526f7e0b.js",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/chunks/pages/policy-ada622606bd78969d2e2.js",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/chunks/pages/profile-547cb7d4aa0696b8104b.js",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/chunks/pages/search-25119ca13214ae067c5a.js",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/chunks/pages/term-fd3ec594b2b94068f420.js",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/chunks/polyfills-b7b042dafc30d210a3d4.js",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/css/01cc08738b66632ea7e7.css",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/css/17ddf560bb4e516a9651.css",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/css/1a5f907cdfa719c4f450.css",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/css/2b9c3429b57239e7520e.css",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/css/37ad40a7b21e8d85425b.css",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/css/3cf9a6653bbd9f71c678.css",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/css/6c10e2f69ab3f59d195a.css",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/css/737391eba523039e464f.css",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/css/b83aea1365891baf62eb.css",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/css/bdc02e6b0ab5c970bee3.css",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/css/f816b855042ecfbe0881.css",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/css/f9eac8b22d4956f2e832.css",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/media/check.789fb72eb4548277ae09e2fcbd53ca77.svg",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/sz-879TwYmqfLER7gRCnZ/_buildManifest.js",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/_next/static/sz-879TwYmqfLER7gRCnZ/_ssgManifest.js",revision:"sz-879TwYmqfLER7gRCnZ"},{url:"/android-chrome-192x192.png",revision:"0b74f0bbbb75936a86b00f255484b6ec"},{url:"/android-chrome-512x512.png",revision:"1e3f7943d86995f8bbd23b98bdb516e7"},{url:"/apple-touch-icon.png",revision:"80b1e8d90aea3a6712ed801f109c8175"},{url:"/assets/share_image.png",revision:"fd682135d53eaf17e878c376cfaf09bd"},{url:"/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/favicon-16x16.png",revision:"8a5e0dbfb44e5832e609eb07030d2419"},{url:"/favicon-32x32.png",revision:"ec8ce2dd40a5545272e690b6135382a1"},{url:"/favicon.ico",revision:"3c51dc9c9ad8eb42efbbdcf5adde4d85"},{url:"/favicon.png",revision:"863be1f4047866240c4d93d6549df187"},{url:"/manifest.json",revision:"69acd801dcfb1cc39902620612e00595"},{url:"/mstile-150x150.png",revision:"5a19076014bdcb6b2ebe141528b60254"},{url:"/no_image.png",revision:"f49c0c1b080d638411f4bdbe930b5a1e"},{url:"/pwa.png",revision:"483d9c3d71923ff4f95f8eca73f91191"},{url:"/pwa.svg",revision:"c537ab3adab8fec252b30ef258024626"},{url:"/safari-pinned-tab.svg",revision:"0435cf7c7e540e41957617dd9fcbceb4"},{url:"/site.webmanifest",revision:"37e2170532a3d2befdfe79fa03f6dbfb"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
