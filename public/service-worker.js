if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return r[s]||(e=new Promise((async e=>{if("document"in self){const r=document.createElement("script");r.src=s,document.head.appendChild(r),r.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!r[s])throw new Error(`Module ${s} didn’t register its module`);return r[s]}))},e=(e,r)=>{Promise.all(e.map(s)).then((s=>r(1===s.length?s[0]:s)))},r={require:Promise.resolve(e)};self.define=(e,l,c)=>{r[e]||(r[e]=Promise.resolve().then((()=>{let r={};const i={uri:location.origin+e.slice(1)};return Promise.all(l.map((e=>{switch(e){case"exports":return r;case"module":return i;default:return s(e)}}))).then((s=>{const e=c(...s);return r.default||(r.default=e),r}))})))}}define("./service-worker.js",["./workbox-cf684d81"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/../resources/views/paginas/webpack_compilado/index.blade.php",revision:"71322b296ed0daab5b9c4629ad4604c8"},{url:"/assets/analiabcd9091642be49cd1d8f3c563ff9bcdb.jpg",revision:null},{url:"/assets/contactard1293318dbda91902a9d4331b1e1fdb2.jpg",revision:null},{url:"/assets/leandro80d3653005bfd15a5760176751263652.jpg",revision:null},{url:"/assets/logo-v-y-v-ingenieriaf84a6c4e15717679d15c696033cdeb76.png",revision:null},{url:"/assets/mariano71f9898ca71c663a49afcfa0cda63eef.jpg",revision:null},{url:"/assets/presupuesto672abec04f625c2bb2951cabeb68ad0c.png",revision:null},{url:"/assets/proyectos9e1822673f1819f577fcae0c1a428f75.jpg",revision:null},{url:"/assets/proyectosfd5af164ff5a1bf7575b12a9942830d0.jpg",revision:null},{url:"/assets/servicios2233dae9933d63ee99ea5bd3372bd27c.jpg",revision:null},{url:"/assets/serviciose0ece72b866f7991f10a06e30f5fed7c.jpg",revision:null},{url:"/assets/sobre291c746472aa6d9ec5689088f2a3a32b.jpg",revision:null},{url:"/assets/somo-v-y-v-portada-home7123b901ebef7e74f3c30b6b6820b10c.jpg",revision:null},{url:"/css/10.9f6bf253d3ac9f51b606.css",revision:null},{url:"/css/140.bacfac53c077d1fcf765.css",revision:null},{url:"/css/280.c5f10bdada416ba10f2c.css",revision:null},{url:"/css/806.c5f10bdada416ba10f2c.css",revision:null},{url:"/css/868.704ef8fa20bd42df752c.css",revision:null},{url:"/css/942.c5f10bdada416ba10f2c.css",revision:null},{url:"/css/home.bcf625776c07be801d55.css",revision:null},{url:"/js/10.dc538169b735a54e0305.js",revision:null},{url:"/js/140.af7bc0b2629f0a19b470.js",revision:null},{url:"/js/280.7042d25b520f3f235636.js",revision:null},{url:"/js/626.e40d220755205c8f24c4.js",revision:null},{url:"/js/806.7d900a4c485eb9d7499a.js",revision:null},{url:"/js/868.cf28ee003d5a6659c6f3.js",revision:null},{url:"/js/942.4ef4672453d08b071ec9.js",revision:null},{url:"/js/home.15161a2c64f76ebfd9ad.js",revision:null},{url:"/js/home.15161a2c64f76ebfd9ad.js.LICENSE.txt",revision:"3c73c585782ac05880c0f89bcfdbba5a"}],{})}));