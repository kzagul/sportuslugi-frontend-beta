if(!self.define){let e,n={};const i=(i,l)=>(i=new URL(i+".js",l).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const u=e||("document"in self?document.currentScript.src:"")||location.href;if(n[u])return;let s={};const o=e=>i(e,u),t={module:{uri:u},exports:s,require:o};n[u]=Promise.all(l.map((e=>t[e]||o(e)))).then((e=>(r(...e),s)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_nuxt/account.8b47d494.js",revision:null},{url:"_nuxt/admin-only.e1635377.js",revision:null},{url:"_nuxt/admin.e572e868.js",revision:null},{url:"_nuxt/default.661f431a.js",revision:null},{url:"_nuxt/entry.01793946.css",revision:null},{url:"_nuxt/entry.8383e925.js",revision:null},{url:"_nuxt/error-component.0fa2ee9d.js",revision:null},{url:"_nuxt/guest-only.b491ff53.js",revision:null},{url:"_nuxt/guest.cd5a7318.js",revision:null},{url:"_nuxt/index.4849e921.js",revision:null},{url:"_nuxt/indexm.004a5cbe.js",revision:null},{url:"_nuxt/login.005f0a88.js",revision:null},{url:"_nuxt/nuxt-link.da4dd4bb.js",revision:null},{url:"_nuxt/PageUser.vue.53b58512.js",revision:null},{url:"_nuxt/private.ae6cf639.js",revision:null},{url:"_nuxt/swiper-vue.98e2697f.css",revision:null},{url:"_nuxt/test.cd4948ba.js",revision:null},{url:"_nuxt/ua-parser.e04bf7da.js",revision:null},{url:"_nuxt/useAdmin.0546178b.js",revision:null},{url:"_nuxt/user-only.a07d7c93.js",revision:null},{url:"_nuxt/workbox-window.prod.es5.295a6886.js",revision:null},{url:"_payload.js",revision:"22bb47257fe2de3448caa72b5b1f3887"},{url:"200",revision:"14407a15a0a45a79265c6f6c4e9f5db9"},{url:"404",revision:"14407a15a0a45a79265c6f6c4e9f5db9"},{url:"account/_payload.js",revision:"991f14121ec0e3ba65d8cf298afb7e89"},{url:"account",revision:"517f77b4c3e33cad342bf8382ebe01c0"},{url:"guest/_payload.js",revision:"9b993c936b5b22fe3b243fcab234b9c5"},{url:"guest",revision:"9d86f9fed8f3b7f7b3bd77a129f72983"},{url:"/sportuslugi-frontend/",revision:"56d94c9247a981ddfc3f42bdb529fe2e"},{url:"indexm/_payload.js",revision:"76c54194bc46666a346e1860e8f045ac"},{url:"indexm",revision:"709488601a1e06479065994e3c2b3140"},{url:"login/_payload.js",revision:"220f3b1818beba99a4e516b79d2deafd"},{url:"login",revision:"cae6995204ab7921043674e88b0fc221"},{url:"test/_payload.js",revision:"51201765fa0f38bda8d4734ca45f6d0f"},{url:"test",revision:"b9fca097ded23e6d8777061357451c12"},{url:"manifest.webmanifest",revision:"e814bef43b21575ada183a4eceb4a83e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
