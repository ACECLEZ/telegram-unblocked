"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[7265],{97265:(e,a,n)=>{n.d(a,{R:()=>c});const t=("undefined"!=typeof window&&window.innerHeight,Math.round(450),new Set(["newMessage","newScheduledMessage","deleteMessages","deleteScheduledMessages","deleteHistory"]),new Set(["image/png","image/jpeg","image/gif"])),s=new Set(["video/mp4"]);new Set(["audio/mp3","audio/ogg","audio/wav","audio/mpeg","audio/flac","audio/aac","audio/m4a","audio/mp4","audio/x-m4a"]),new Set([...t,...s]),new Set(["t.me","web.t.me","a.t.me","k.t.me","z.t.me"]),new Set(["AU","BD","CA","CO","EG","HN","IE","IN","JO","MX","MY","NI","NZ","PH","PK","SA","SV","US"]);var o=n(16063);const r=new Map,i=(0,o._)();function c(e,a){function n(e,n){e.channel=a,n?postMessage(e,n):postMessage(e)}!function(e){self.onerror=a=>{console.error(a),e({type:"unhandledError",error:{message:a.error.message||"Uncaught exception in worker"}})},self.addEventListener("unhandledrejection",(a=>{console.error(a),e({type:"unhandledError",error:{message:a.reason.message||"Uncaught rejection in worker"}})}))}(n),i.addCallback((t=>{t.data?.channel===a&&async function(e,a,n,t){switch(t||(t=e=>{n({type:"update",update:e})}),a.type){case"init":{const{args:n}=a,s="function"==typeof e?e("init",t,...n):e.init?.(t,...n);await s;break}case"callMethod":{const{messageId:t,name:s,args:o,withCallback:i}=a;try{if("function"!=typeof e&&!e[s])return;if(t&&i){const e=function(){for(var e=arguments.length,a=new Array(e),s=0;s<e;s++)a[s]=arguments[s];const o=a[a.length-1];n({type:"methodCallback",messageId:t,callbackArgs:a},d(o)?[o]:void 0)};r.set(t,e),o.push(e)}const a="function"==typeof e?await e(s,...o):await e[s](...o),{arrayBuffer:c}="object"==typeof a&&"arrayBuffer"in a&&a||{};t&&n({type:"methodResponse",messageId:t,response:a},c?[c]:void 0)}catch(e){t&&n({type:"methodResponse",messageId:t,error:{message:e.message}})}t&&r.delete(t);break}case"cancelProgress":{const e=r.get(a.messageId);e&&(e.isCanceled=!0);break}}}(e,t.data,n)}))}function d(e){return e instanceof ArrayBuffer||e instanceof ImageBitmap}onmessage=i.runCallbacks}}]);
//# sourceMappingURL=7265.dfb5b89231e9be584b5a.js.map