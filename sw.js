if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>s(e,t),f={module:{uri:t},exports:o,require:c};i[t]=Promise.all(n.map((e=>f[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BeP_uL0N.css",revision:null},{url:"assets/index-CuiA16iz.js",revision:null},{url:"index.html",revision:"8bf4265728f169c08377fcd2b2c21fae"},{url:"registerSW.js",revision:"360ccc32197a1bc94e6eab0ee96443b7"},{url:"pwa-192x192.png",revision:"3da1c89f3f392c53cae4c539c06a0036"},{url:"pwa-512x512.png",revision:"3788065d776d85831b53b301b75e9109"},{url:"pwa-maskable-192x192.png",revision:"ff00636b90c939dc7d6750fff911b635"},{url:"pwa-maskable-512x512.png",revision:"380adf3f0a92669affff620a7bed620d"},{url:"manifest.webmanifest",revision:"67474a360821df1e44ee7c2ec850b3ae"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));