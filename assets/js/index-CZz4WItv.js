import{r as O,a as Om,R as Yu}from"./react-vendor-nf7bT_Uh.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Zu={exports:{}},xi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm=O,Lm=Symbol.for("react.element"),Fm=Symbol.for("react.fragment"),Um=Object.prototype.hasOwnProperty,jm=Mm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bm={key:!0,ref:!0,__self:!0,__source:!0};function eh(r,e,t){var n,s={},i=null,o=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(n in e)Um.call(e,n)&&!Bm.hasOwnProperty(n)&&(s[n]=e[n]);if(r&&r.defaultProps)for(n in e=r.defaultProps,e)s[n]===void 0&&(s[n]=e[n]);return{$$typeof:Lm,type:r,key:i,ref:o,props:s,_owner:jm.current}}xi.Fragment=Fm;xi.jsx=eh;xi.jsxs=eh;Zu.exports=xi;var v=Zu.exports,Lo={},al=Om;Lo.createRoot=al.createRoot,Lo.hydrateRoot=al.hydrateRoot;const th=["小琪","小八","小吕"],cl={id:"",amount:"",agent:th[0],received:!1,receiveDate:"",remark:""},qm=["客服","订单号","金额","备注","状态","收货日期","录入日期","操作"],$m=[{value:"all",label:"全部"},{value:"received",label:"已收货"},{value:"pending",label:"未收货"}];function Gm(){const[r,e]=O.useState({isInstallable:!1,isInstalled:!1,isOffline:!navigator.onLine,deferredPrompt:null});O.useEffect(()=>{"serviceWorker"in navigator&&(window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(s=>{console.log("[PWA] SW registered:",s.scope),s.addEventListener("updatefound",()=>{const i=s.installing;i&&i.addEventListener("statechange",()=>{i.state==="installed"&&navigator.serviceWorker.controller&&window.confirm("发现新版本，是否立即更新？")&&(i.postMessage("skipWaiting"),window.location.reload())})})}).catch(s=>{console.error("[PWA] SW registration failed:",s)})}),navigator.serviceWorker.addEventListener("controllerchange",()=>{console.log("[PWA] Controller changed, reloading..."),window.location.reload()}))},[]),O.useEffect(()=>{const s=()=>{e(o=>({...o,isOffline:!1})),console.log("[PWA] 网络已连接")},i=()=>{e(o=>({...o,isOffline:!0})),console.log("[PWA] 网络已断开")};return window.addEventListener("online",s),window.addEventListener("offline",i),()=>{window.removeEventListener("online",s),window.removeEventListener("offline",i)}},[]),O.useEffect(()=>{const s=o=>{o.preventDefault(),e(c=>({...c,deferredPrompt:o,isInstallable:!0})),console.log("[PWA] App is installable")},i=()=>{e(o=>({...o,isInstalled:!0,isInstallable:!1,deferredPrompt:null})),console.log("[PWA] App was installed")};return window.addEventListener("beforeinstallprompt",s),window.addEventListener("appinstalled",i),window.matchMedia("(display-mode: standalone)").matches&&e(o=>({...o,isInstalled:!0})),()=>{window.removeEventListener("beforeinstallprompt",s),window.removeEventListener("appinstalled",i)}},[]);const t=O.useCallback(async()=>{if(!r.deferredPrompt)return;r.deferredPrompt.prompt();const{outcome:s}=await r.deferredPrompt.userChoice;console.log(s==="accepted"?"[PWA] User accepted install":"[PWA] User dismissed install"),e(i=>({...i,deferredPrompt:null,isInstallable:!1}))},[r.deferredPrompt]),n=O.useCallback(async()=>{"serviceWorker"in navigator&&(await(await navigator.serviceWorker.ready).update(),console.log("[PWA] Checking for updates..."))},[]);return{...r,promptInstall:t,checkUpdate:n}}var ll={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},zm=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],c=r[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},rh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,c=o?r[s+1]:0,l=s+2<r.length,h=l?r[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let _=(c&15)<<2|h>>6,A=h&63;l||(A=64,o||(_=64)),n.push(t[f],t[p],t[_],t[A])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(nh(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):zm(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],c=s<r.length?t[r.charAt(s)]:0;++s;const h=s<r.length?t[r.charAt(s)]:64;++s;const p=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new Km;const _=i<<2|c>>4;if(n.push(_),h!==64){const A=c<<4&240|h>>2;if(n.push(A),p!==64){const C=h<<6&192|p;n.push(C)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Km extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wm=function(r){const e=nh(r);return rh.encodeByteArray(e,!0)},ui=function(r){return Wm(r).replace(/\./g,"")},sh=function(r){try{return rh.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm=()=>Hm().__FIREBASE_DEFAULTS__,Xm=()=>{if(typeof process>"u"||typeof ll>"u")return;const r=ll.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Jm=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&sh(r[1]);return e&&JSON.parse(e)},ki=()=>{try{return Qm()||Xm()||Jm()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},ih=r=>{var e,t;return(t=(e=ki())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},Ym=r=>{const e=ih(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},oh=()=>{var r;return(r=ki())===null||r===void 0?void 0:r.config},ah=r=>{var e;return(e=ki())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},r);return[ui(JSON.stringify(t)),ui(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function np(){var r;const e=(r=ki())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function sp(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function ip(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function op(){const r=we();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function ch(){return!np()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lh(){try{return typeof indexedDB=="object"}catch{return!1}}function ap(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="FirebaseError";class Tt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=cp,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fs.prototype.create)}}class fs{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?lp(i,n):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Tt(s,c,n)}}function lp(r,e){return r.replace(up,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const up=/\{\$([^}]+)}/g;function hp(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function hi(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(ul(i)&&ul(o)){if(!hi(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function ul(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Br(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,i]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function qr(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function dp(r,e){const t=new fp(r,e);return t.subscribe.bind(t)}class fp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");mp(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=Ao),s.error===void 0&&(s.error=Ao),s.complete===void 0&&(s.complete=Ao);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mp(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Ao(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(r){return r&&r._delegate?r._delegate:r}class fn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Zm;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_p(e))try{this.getOrInitializeService({instanceIdentifier:sn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=sn){return this.instances.has(e)}getOptions(e=sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);n===c&&o.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),i=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:gp(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=sn){return this.component?this.component.multipleInstances?e:sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gp(r){return r===sn?void 0:r}function _p(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new pp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(J||(J={}));const Ip={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},vp=J.INFO,Ep={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},Tp=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=Ep[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fa{constructor(e){this.name=e,this._logLevel=vp,this._logHandler=Tp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ip[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const wp=(r,e)=>e.some(t=>r instanceof t);let hl,dl;function Ap(){return hl||(hl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bp(){return dl||(dl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uh=new WeakMap,Fo=new WeakMap,hh=new WeakMap,bo=new WeakMap,ma=new WeakMap;function Rp(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(Lt(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&uh.set(t,r)}).catch(()=>{}),ma.set(e,r),e}function Pp(r){if(Fo.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});Fo.set(r,e)}let Uo={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Fo.get(r);if(e==="objectStoreNames")return r.objectStoreNames||hh.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Lt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Sp(r){Uo=r(Uo)}function Cp(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Ro(this),e,...t);return hh.set(n,e.sort?e.sort():[e]),Lt(n)}:bp().includes(r)?function(...e){return r.apply(Ro(this),e),Lt(uh.get(this))}:function(...e){return Lt(r.apply(Ro(this),e))}}function Dp(r){return typeof r=="function"?Cp(r):(r instanceof IDBTransaction&&Pp(r),wp(r,Ap())?new Proxy(r,Uo):r)}function Lt(r){if(r instanceof IDBRequest)return Rp(r);if(bo.has(r))return bo.get(r);const e=Dp(r);return e!==r&&(bo.set(r,e),ma.set(e,r)),e}const Ro=r=>ma.get(r);function xp(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),c=Lt(o);return n&&o.addEventListener("upgradeneeded",l=>{n(Lt(o.result),l.oldVersion,l.newVersion,Lt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const kp=["get","getKey","getAll","getAllKeys","count"],Np=["put","add","delete","clear"],Po=new Map;function fl(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Po.get(e))return Po.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=Np.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||kp.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return n&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return Po.set(e,i),i}Sp(r=>({...r,get:(e,t,n)=>fl(e,t)||r.get(e,t,n),has:(e,t)=>!!fl(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Op(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Op(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jo="@firebase/app",ml="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new fa("@firebase/app"),Mp="@firebase/app-compat",Lp="@firebase/analytics-compat",Fp="@firebase/analytics",Up="@firebase/app-check-compat",jp="@firebase/app-check",Bp="@firebase/auth",qp="@firebase/auth-compat",$p="@firebase/database",Gp="@firebase/data-connect",zp="@firebase/database-compat",Kp="@firebase/functions",Wp="@firebase/functions-compat",Hp="@firebase/installations",Qp="@firebase/installations-compat",Xp="@firebase/messaging",Jp="@firebase/messaging-compat",Yp="@firebase/performance",Zp="@firebase/performance-compat",eg="@firebase/remote-config",tg="@firebase/remote-config-compat",ng="@firebase/storage",rg="@firebase/storage-compat",sg="@firebase/firestore",ig="@firebase/vertexai-preview",og="@firebase/firestore-compat",ag="firebase",cg="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo="[DEFAULT]",lg={[jo]:"fire-core",[Mp]:"fire-core-compat",[Fp]:"fire-analytics",[Lp]:"fire-analytics-compat",[jp]:"fire-app-check",[Up]:"fire-app-check-compat",[Bp]:"fire-auth",[qp]:"fire-auth-compat",[$p]:"fire-rtdb",[Gp]:"fire-data-connect",[zp]:"fire-rtdb-compat",[Kp]:"fire-fn",[Wp]:"fire-fn-compat",[Hp]:"fire-iid",[Qp]:"fire-iid-compat",[Xp]:"fire-fcm",[Jp]:"fire-fcm-compat",[Yp]:"fire-perf",[Zp]:"fire-perf-compat",[eg]:"fire-rc",[tg]:"fire-rc-compat",[ng]:"fire-gcs",[rg]:"fire-gcs-compat",[sg]:"fire-fst",[og]:"fire-fst-compat",[ig]:"fire-vertex","fire-js":"fire-js",[ag]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=new Map,ug=new Map,qo=new Map;function pl(r,e){try{r.container.addComponent(e)}catch(t){It.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Jn(r){const e=r.name;if(qo.has(e))return It.debug(`There were multiple attempts to register component ${e}.`),!1;qo.set(e,r);for(const t of di.values())pl(t,r);for(const t of ug.values())pl(t,r);return!0}function pa(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function st(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ft=new fs("app","Firebase",hg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=cg;function dh(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:Bo,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Ft.create("bad-app-name",{appName:String(s)});if(t||(t=oh()),!t)throw Ft.create("no-options");const i=di.get(s);if(i){if(hi(t,i.options)&&hi(n,i.config))return i;throw Ft.create("duplicate-app",{appName:s})}const o=new yp(s);for(const l of qo.values())o.addComponent(l);const c=new dg(t,n,o);return di.set(s,c),c}function fh(r=Bo){const e=di.get(r);if(!e&&r===Bo&&oh())return dh();if(!e)throw Ft.create("no-app",{appName:r});return e}function Ut(r,e,t){var n;let s=(n=lg[r])!==null&&n!==void 0?n:r;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),It.warn(c.join(" "));return}Jn(new fn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg="firebase-heartbeat-database",mg=1,es="firebase-heartbeat-store";let So=null;function mh(){return So||(So=xp(fg,mg,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(es)}catch(t){console.warn(t)}}}}).catch(r=>{throw Ft.create("idb-open",{originalErrorMessage:r.message})})),So}async function pg(r){try{const t=(await mh()).transaction(es),n=await t.objectStore(es).get(ph(r));return await t.done,n}catch(e){if(e instanceof Tt)It.warn(e.message);else{const t=Ft.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});It.warn(t.message)}}}async function gl(r,e){try{const n=(await mh()).transaction(es,"readwrite");await n.objectStore(es).put(e,ph(r)),await n.done}catch(t){if(t instanceof Tt)It.warn(t.message);else{const n=Ft.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});It.warn(n.message)}}}function ph(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=1024,_g=30*24*60*60*1e3;class yg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new vg(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=_l();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=_g}),this._storage.overwrite(this._heartbeatsCache))}catch(n){It.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=_l(),{heartbeatsToSend:n,unsentEntries:s}=Ig(this._heartbeatsCache.heartbeats),i=ui(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return It.warn(t),""}}}function _l(){return new Date().toISOString().substring(0,10)}function Ig(r,e=gg){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),yl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),yl(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class vg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lh()?ap().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await pg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return gl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return gl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function yl(r){return ui(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(r){Jn(new fn("platform-logger",e=>new Vp(e),"PRIVATE")),Jn(new fn("heartbeat",e=>new yg(e),"PRIVATE")),Ut(jo,ml,r),Ut(jo,ml,"esm2017"),Ut("fire-js","")}Eg("");function ga(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(r);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(r,n[s])&&(t[n[s]]=r[n[s]]);return t}function gh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Tg=gh,_h=new fs("auth","Firebase",gh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=new fa("@firebase/auth");function wg(r,...e){fi.logLevel<=J.WARN&&fi.warn(`Auth (${cr}): ${r}`,...e)}function Xs(r,...e){fi.logLevel<=J.ERROR&&fi.error(`Auth (${cr}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(r,...e){throw _a(r,...e)}function at(r,...e){return _a(r,...e)}function yh(r,e,t){const n=Object.assign(Object.assign({},Tg()),{[e]:t});return new fs("auth","Firebase",n).create(e,{appName:r.name})}function _t(r){return yh(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _a(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return _h.create(r,...e)}function G(r,e,...t){if(!r)throw _a(e,...t)}function ft(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Xs(e),new Error(e)}function vt(r,e){r||ft(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Ag(){return Il()==="http:"||Il()==="https:"}function Il(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ag()||sp()||"connection"in navigator)?navigator.onLine:!0}function Rg(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,t){this.shortDelay=e,this.longDelay=t,vt(t>e,"Short delay should be less than long delay!"),this.isMobile=tp()||ip()}get(){return bg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(r,e){vt(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=new ps(3e4,6e4);function wt(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function ut(r,e,t,n,s={}){return vh(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const c=ms(Object.assign({key:r.config.apiKey},o)).slice(1),l=await r._getAdditionalHeaders();l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode);const h=Object.assign({method:e,headers:l},i);return rp()||(h.referrerPolicy="no-referrer"),Ih.fetch()(Eh(r,r.config.apiHost,t,c),h)})}async function vh(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},Pg),e);try{const s=new Dg(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw $s(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $s(r,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw $s(r,"email-already-in-use",o);if(l==="USER_DISABLED")throw $s(r,"user-disabled",o);const f=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw yh(r,f,h);tt(r,f)}}catch(s){if(s instanceof Tt)throw s;tt(r,"network-request-failed",{message:String(s)})}}async function gs(r,e,t,n,s={}){const i=await ut(r,e,t,n,s);return"mfaPendingCredential"in i&&tt(r,"multi-factor-auth-required",{_serverResponse:i}),i}function Eh(r,e,t,n){const s=`${e}${t}?${n}`;return r.config.emulator?ya(r.config,s):`${r.config.apiScheme}://${s}`}function Cg(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Dg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(at(this.auth,"network-request-failed")),Sg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $s(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=at(r,e,n);return s.customData._tokenResponse=t,s}function vl(r){return r!==void 0&&r.enterprise!==void 0}class xg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Cg(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function kg(r,e){return ut(r,"GET","/v2/recaptchaConfig",wt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ng(r,e){return ut(r,"POST","/v1/accounts:delete",e)}async function Th(r,e){return ut(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Vg(r,e=!1){const t=Ee(r),n=await t.getIdToken(e),s=Ia(n);G(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:n,authTime:Hr(Co(s.auth_time)),issuedAtTime:Hr(Co(s.iat)),expirationTime:Hr(Co(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Co(r){return Number(r)*1e3}function Ia(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return Xs("JWT malformed, contained fewer than 3 sections"),null;try{const s=sh(t);return s?JSON.parse(s):(Xs("Failed to decode base64 JWT payload"),null)}catch(s){return Xs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function El(r){const e=Ia(r);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yn(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Tt&&Og(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function Og({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hr(this.lastLoginAt),this.creationTime=Hr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(r){var e;const t=r.auth,n=await r.getIdToken(),s=await Yn(r,Th(t,{idToken:n}));G(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];r._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?wh(i.providerUserInfo):[],c=Fg(r.providerData,o),l=r.isAnonymous,h=!(r.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Go(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(r,p)}async function Lg(r){const e=Ee(r);await mi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Fg(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function wh(r){return r.map(e=>{var{providerId:t}=e,n=ga(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ug(r,e){const t=await vh(r,{},async()=>{const n=ms({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=Eh(r,s,"/v1/token",`key=${i}`),c=await r._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ih.fetch()(o,{method:"POST",headers:c,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function jg(r,e){return ut(r,"POST","/v2/accounts:revokeToken",wt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):El(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){G(e.length!==0,"internal-error");const t=El(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await Ug(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new Kn;return n&&(G(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(G(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(G(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kn,this.toJSON())}_performRefresh(){return ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(r,e){G(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class mt{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,i=ga(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Mg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Go(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Yn(this,this.stsTokenManager.getToken(this.auth,e));return G(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Vg(this,e)}reload(){return Lg(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new mt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await mi(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(st(this.auth.app))return Promise.reject(_t(this.auth));const e=await this.getIdToken();return await Yn(this,Ng(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,i,o,c,l,h,f;const p=(n=t.displayName)!==null&&n!==void 0?n:void 0,_=(s=t.email)!==null&&s!==void 0?s:void 0,A=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=t.photoURL)!==null&&o!==void 0?o:void 0,x=(c=t.tenantId)!==null&&c!==void 0?c:void 0,k=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,$=(h=t.createdAt)!==null&&h!==void 0?h:void 0,V=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:B,emailVerified:X,isAnonymous:ne,providerData:H,stsTokenManager:E}=t;G(B&&E,e,"internal-error");const g=Kn.fromJSON(this.name,E);G(typeof B=="string",e,"internal-error"),St(p,e.name),St(_,e.name),G(typeof X=="boolean",e,"internal-error"),G(typeof ne=="boolean",e,"internal-error"),St(A,e.name),St(C,e.name),St(x,e.name),St(k,e.name),St($,e.name),St(V,e.name);const I=new mt({uid:B,auth:e,email:_,emailVerified:X,displayName:p,isAnonymous:ne,photoURL:C,phoneNumber:A,tenantId:x,stsTokenManager:g,createdAt:$,lastLoginAt:V});return H&&Array.isArray(H)&&(I.providerData=H.map(T=>Object.assign({},T))),k&&(I._redirectEventId=k),I}static async _fromIdTokenResponse(e,t,n=!1){const s=new Kn;s.updateFromServerResponse(t);const i=new mt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await mi(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];G(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?wh(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Kn;c.updateFromIdToken(n);const l=new mt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Go(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=new Map;function pt(r){vt(r instanceof Function,"Expected a class definition");let e=Tl.get(r);return e?(vt(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Tl.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ah.type="NONE";const wl=Ah;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(r,e,t){return`firebase:${r}:${e}:${t}`}class Wn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=Js(this.userKey,s.apiKey,i),this.fullPersistenceKey=Js("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Wn(pt(wl),e,n);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||pt(wl);const o=Js(n,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){const p=mt._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Wn(i,e,n):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Wn(i,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dh(e))return"Blackberry";if(xh(e))return"Webos";if(Rh(e))return"Safari";if((e.includes("chrome/")||Ph(e))&&!e.includes("edge/"))return"Chrome";if(Ch(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function bh(r=we()){return/firefox\//i.test(r)}function Rh(r=we()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ph(r=we()){return/crios\//i.test(r)}function Sh(r=we()){return/iemobile/i.test(r)}function Ch(r=we()){return/android/i.test(r)}function Dh(r=we()){return/blackberry/i.test(r)}function xh(r=we()){return/webos/i.test(r)}function va(r=we()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Bg(r=we()){var e;return va(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qg(){return op()&&document.documentMode===10}function kh(r=we()){return va(r)||Ch(r)||xh(r)||Dh(r)||/windows phone/i.test(r)||Sh(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(r,e=[]){let t;switch(r){case"Browser":t=Al(we());break;case"Worker":t=`${Al(we())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${cr}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gg(r,e={}){return ut(r,"GET","/v2/passwordPolicy",wt(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=6;class Kg{constructor(e){var t,n,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:zg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(n=l.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bl(this),this.idTokenSubscription=new bl(this),this.beforeStateQueue=new $g(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_h,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=pt(t)),this._initializationPromise=this.queue(async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await Wn.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Th(this,{idToken:e}),n=await mt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(st(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await mi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Rg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(st(this.app))return Promise.reject(_t(this));const t=e?Ee(e):null;return t&&G(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return st(this.app)?Promise.reject(_t(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return st(this.app)?Promise.reject(_t(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Gg(this),t=new Kg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fs("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await jg(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&pt(e)||this._popupRedirectResolver;G(t,this,"argument-error"),this.redirectPersistenceManager=await Wn.create(this,[pt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&wg(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Kt(r){return Ee(r)}class bl{constructor(e){this.auth=e,this.observer=null,this.addObserver=dp(t=>this.observer=t)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ni={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Hg(r){Ni=r}function Vh(r){return Ni.loadJS(r)}function Qg(){return Ni.recaptchaEnterpriseScript}function Xg(){return Ni.gapiScript}function Jg(r){return`__${r}${Math.floor(Math.random()*1e6)}`}const Yg="recaptcha-enterprise",Zg="NO_RECAPTCHA";class e_{constructor(e){this.type=Yg,this.auth=Kt(e)}async verify(e="verify",t=!1){async function n(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{kg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new xg(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;vl(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(Zg)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{n(this.auth).then(c=>{if(!t&&vl(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Qg();l.length!==0&&(l+=c),Vh(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function Rl(r,e,t,n=!1){const s=new e_(r);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const o=Object.assign({},e);return n?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function pi(r,e,t,n){var s;if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Rl(r,e,t,t==="getOobCode");return n(r,i)}else return n(r,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Rl(r,e,t,t==="getOobCode");return n(r,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(r,e){const t=pa(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(hi(i,e??{}))return s;tt(s,"already-initialized")}return t.initialize({options:e})}function n_(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(pt);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function r_(r,e,t){const n=Kt(r);G(n._canInitEmulator,n,"emulator-config-failed"),G(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=Oh(e),{host:o,port:c}=s_(e),l=c===null?"":`:${c}`;n.config.emulator={url:`${i}//${o}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),i_()}function Oh(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function s_(r){const e=Oh(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:Pl(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:Pl(o)}}}function Pl(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function i_(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ft("not implemented")}_getIdTokenResponse(e){return ft("not implemented")}_linkToIdToken(e,t){return ft("not implemented")}_getReauthenticationResolver(e){return ft("not implemented")}}async function o_(r,e){return ut(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a_(r,e){return gs(r,"POST","/v1/accounts:signInWithPassword",wt(r,e))}async function c_(r,e){return ut(r,"POST","/v1/accounts:sendOobCode",wt(r,e))}async function l_(r,e){return c_(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u_(r,e){return gs(r,"POST","/v1/accounts:signInWithEmailLink",wt(r,e))}async function h_(r,e){return gs(r,"POST","/v1/accounts:signInWithEmailLink",wt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends Ea{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ts(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ts(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pi(e,t,"signInWithPassword",a_);case"emailLink":return u_(e,{email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pi(e,n,"signUpPassword",o_);case"emailLink":return h_(e,{idToken:t,email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(r,e){return gs(r,"POST","/v1/accounts:signInWithIdp",wt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_="http://localhost";class mn extends Ea{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new mn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,i=ga(t,["providerId","signInMethod"]);if(!n||!s)return null;const o=new mn(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Hn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Hn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Hn(e,t)}buildRequest(){const e={requestUri:d_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ms(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function m_(r){const e=Br(qr(r)).link,t=e?Br(qr(e)).deep_link_id:null,n=Br(qr(r)).deep_link_id;return(n?Br(qr(n)).link:null)||n||t||e||r}class Ta{constructor(e){var t,n,s,i,o,c;const l=Br(qr(e)),h=(t=l.apiKey)!==null&&t!==void 0?t:null,f=(n=l.oobCode)!==null&&n!==void 0?n:null,p=f_((s=l.mode)!==null&&s!==void 0?s:null);G(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=m_(e);try{return new Ta(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.providerId=lr.PROVIDER_ID}static credential(e,t){return ts._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ta.parseLink(t);return G(n,"argument-error"),ts._fromEmailAndCode(e,n.code,n.tenantId)}}lr.PROVIDER_ID="password";lr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";lr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s extends Mh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends _s{constructor(){super("facebook.com")}static credential(e){return mn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch{return null}}}xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";xt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends _s{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return mn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return kt.credential(t,n)}catch{return null}}}kt.GOOGLE_SIGN_IN_METHOD="google.com";kt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends _s{constructor(){super("github.com")}static credential(e){return mn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nt.credential(e.oauthAccessToken)}catch{return null}}}Nt.GITHUB_SIGN_IN_METHOD="github.com";Nt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends _s{constructor(){super("twitter.com")}static credential(e,t){return mn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Vt.credential(t,n)}catch{return null}}}Vt.TWITTER_SIGN_IN_METHOD="twitter.com";Vt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p_(r,e){return gs(r,"POST","/v1/accounts:signUp",wt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await mt._fromIdTokenResponse(e,n,s),o=Sl(n);return new pn({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=Sl(n);return new pn({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function Sl(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends Tt{constructor(e,t,n,s){var i;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,gi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new gi(e,t,n,s)}}function Lh(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?gi._fromErrorAndOperation(r,i,e,n):i})}async function g_(r,e,t=!1){const n=await Yn(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return pn._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function __(r,e,t=!1){const{auth:n}=r;if(st(n.app))return Promise.reject(_t(n));const s="reauthenticate";try{const i=await Yn(r,Lh(n,s,e,r),t);G(i.idToken,n,"internal-error");const o=Ia(i.idToken);G(o,n,"internal-error");const{sub:c}=o;return G(r.uid===c,n,"user-mismatch"),pn._forOperation(r,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&tt(n,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fh(r,e,t=!1){if(st(r.app))return Promise.reject(_t(r));const n="signIn",s=await Lh(r,n,e),i=await pn._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}async function y_(r,e){return Fh(Kt(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uh(r){const e=Kt(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function I_(r,e,t){const n=Kt(r);await pi(n,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",l_)}async function v_(r,e,t){if(st(r.app))return Promise.reject(_t(r));const n=Kt(r),o=await pi(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",p_).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Uh(r),l}),c=await pn._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(c.user),c}function E_(r,e,t){return st(r.app)?Promise.reject(_t(r)):y_(Ee(r),lr.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Uh(r),n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T_(r,e){return ut(r,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w_(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const n=Ee(r),i={idToken:await n.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Yn(n,T_(n.auth,i));n.displayName=o.displayName||null,n.photoURL=o.photoUrl||null;const c=n.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=n.displayName,c.photoURL=n.photoURL),await n._updateTokensIfNecessary(o)}function A_(r,e,t,n){return Ee(r).onIdTokenChanged(e,t,n)}function b_(r,e,t){return Ee(r).beforeAuthStateChanged(e,t)}function R_(r,e,t,n){return Ee(r).onAuthStateChanged(e,t,n)}function P_(r){return Ee(r).signOut()}const _i="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(_i,"1"),this.storage.removeItem(_i),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=1e3,C_=10;class Bh extends jh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);qg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,C_):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},S_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bh.type="LOCAL";const D_=Bh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh extends jh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}qh.type="SESSION";const $h=qh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new Vi(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const c=Array.from(o).map(async h=>h(t.origin,i)),l=await x_(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=wa("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(p){const _=p;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return window}function N_(r){ct().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(){return typeof ct().WorkerGlobalScope<"u"&&typeof ct().importScripts=="function"}async function V_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function O_(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function M_(){return Gh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh="firebaseLocalStorageDb",L_=1,yi="firebaseLocalStorage",Kh="fbase_key";class ys{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Oi(r,e){return r.transaction([yi],e?"readwrite":"readonly").objectStore(yi)}function F_(){const r=indexedDB.deleteDatabase(zh);return new ys(r).toPromise()}function zo(){const r=indexedDB.open(zh,L_);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(yi,{keyPath:Kh})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(yi)?e(n):(n.close(),await F_(),e(await zo()))})})}async function Cl(r,e,t){const n=Oi(r,!0).put({[Kh]:e,value:t});return new ys(n).toPromise()}async function U_(r,e){const t=Oi(r,!1).get(e),n=await new ys(t).toPromise();return n===void 0?null:n.value}function Dl(r,e){const t=Oi(r,!0).delete(e);return new ys(t).toPromise()}const j_=800,B_=3;class Wh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>B_)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vi._getInstance(M_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await V_(),!this.activeServiceWorker)return;this.sender=new k_(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||O_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zo();return await Cl(e,_i,"1"),await Dl(e,_i),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cl(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>U_(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Dl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Oi(s,!1).getAll();return new ys(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),j_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wh.type="LOCAL";const q_=Wh;new ps(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(r,e){return e?pt(e):(G(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends Ea{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Hn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Hn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function G_(r){return Fh(r.auth,new Aa(r),r.bypassAuthState)}function z_(r){const{auth:e,user:t}=r;return G(t,e,"internal-error"),__(t,new Aa(r),r.bypassAuthState)}async function K_(r){const{auth:e,user:t}=r;return G(t,e,"internal-error"),g_(t,new Aa(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return G_;case"linkViaPopup":case"linkViaRedirect":return K_;case"reauthViaPopup":case"reauthViaRedirect":return z_;default:tt(this.auth,"internal-error")}}resolve(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_=new ps(2e3,1e4);class zn extends Hh{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,zn.currentPopupAction&&zn.currentPopupAction.cancel(),zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){vt(this.filter.length===1,"Popup operations only handle one event");const e=wa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(at(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,W_.get())};e()}}zn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_="pendingRedirect",Ys=new Map;class Q_ extends Hh{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Ys.get(this.auth._key());if(!e){try{const n=await X_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Ys.set(this.auth._key(),e)}return this.bypassAuthState||Ys.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function X_(r,e){const t=Z_(e),n=Y_(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function J_(r,e){Ys.set(r._key(),e)}function Y_(r){return pt(r._redirectPersistence)}function Z_(r){return Js(H_,r.config.apiKey,r.name)}async function ey(r,e,t=!1){if(st(r.app))return Promise.reject(_t(r));const n=Kt(r),s=$_(n,e),o=await new Q_(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=10*60*1e3;class ny{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ry(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Qh(e)){const s=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(at(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ty&&this.cachedEventUids.clear(),this.cachedEventUids.has(xl(e))}saveEventToCache(e){this.cachedEventUids.add(xl(e)),this.lastProcessedEventTime=Date.now()}}function xl(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Qh({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ry(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qh(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sy(r,e={}){return ut(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oy=/^https?/;async function ay(r){if(r.config.emulator)return;const{authorizedDomains:e}=await sy(r);for(const t of e)try{if(cy(t))return}catch{}tt(r,"unauthorized-domain")}function cy(r){const e=$o(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!oy.test(t))return!1;if(iy.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly=new ps(3e4,6e4);function kl(){const r=ct().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function uy(r){return new Promise((e,t)=>{var n,s,i;function o(){kl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kl(),t(at(r,"network-request-failed"))},timeout:ly.get()})}if(!((s=(n=ct().gapi)===null||n===void 0?void 0:n.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ct().gapi)===null||i===void 0)&&i.load)o();else{const c=Jg("iframefcb");return ct()[c]=()=>{gapi.load?o():t(at(r,"network-request-failed"))},Vh(`${Xg()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Zs=null,e})}let Zs=null;function hy(r){return Zs=Zs||uy(r),Zs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=new ps(5e3,15e3),fy="__/auth/iframe",my="emulator/auth/iframe",py={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _y(r){const e=r.config;G(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?ya(e,my):`https://${r.config.authDomain}/${fy}`,n={apiKey:e.apiKey,appName:r.name,v:cr},s=gy.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${ms(n).slice(1)}`}async function yy(r){const e=await hy(r),t=ct().gapi;return G(t,r,"internal-error"),e.open({where:document.body,url:_y(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:py,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=at(r,"network-request-failed"),c=ct().setTimeout(()=>{i(o)},dy.get());function l(){ct().clearTimeout(c),s(n)}n.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vy=500,Ey=600,Ty="_blank",wy="http://localhost";class Nl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ay(r,e,t,n=vy,s=Ey){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Iy),{width:n.toString(),height:s.toString(),top:i,left:o}),h=we().toLowerCase();t&&(c=Ph(h)?Ty:t),bh(h)&&(e=e||wy,l.scrollbars="yes");const f=Object.entries(l).reduce((_,[A,C])=>`${_}${A}=${C},`,"");if(Bg(h)&&c!=="_self")return by(e||"",c),new Nl(null);const p=window.open(e||"",c,f);G(p,r,"popup-blocked");try{p.focus()}catch{}return new Nl(p)}function by(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="__/auth/handler",Py="emulator/auth/handler",Sy=encodeURIComponent("fac");async function Vl(r,e,t,n,s,i){G(r.config.authDomain,r,"auth-domain-config-required"),G(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:cr,eventId:s};if(e instanceof Mh){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",hp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof _s){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}r.tenantId&&(o.tid=r.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await r._getAppCheckToken(),h=l?`#${Sy}=${encodeURIComponent(l)}`:"";return`${Cy(r)}?${ms(c).slice(1)}${h}`}function Cy({config:r}){return r.emulator?ya(r,Py):`https://${r.authDomain}/${Ry}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do="webStorageSupport";class Dy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$h,this._completeRedirectFn=ey,this._overrideRedirectResult=J_}async _openPopup(e,t,n,s){var i;vt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Vl(e,t,n,$o(),s);return Ay(e,o,wa())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await Vl(e,t,n,$o(),s);return N_(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(vt(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await yy(e),n=new ny(e);return t.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Do,{type:Do},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Do];o!==void 0&&t(!!o),tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ay(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return kh()||Rh()||va()}}const xy=Dy;var Ol="@firebase/auth",Ml="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Vy(r){Jn(new fn("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nh(r)},h=new Wg(n,s,i,l);return n_(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Jn(new fn("auth-internal",e=>{const t=Kt(e.getProvider("auth").getImmediate());return(n=>new ky(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ut(Ol,Ml,Ny(r)),Ut(Ol,Ml,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=5*60,My=ah("authIdTokenMaxAge")||Oy;let Ll=null;const Ly=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>My)return;const s=t==null?void 0:t.token;Ll!==s&&(Ll=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Fy(r=fh()){const e=pa(r,"auth");if(e.isInitialized())return e.getImmediate();const t=t_(r,{popupRedirectResolver:xy,persistence:[q_,D_,$h]}),n=ah("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=Ly(i.toString());b_(t,o,()=>o(t.currentUser)),A_(t,c=>o(c))}}const s=ih("auth");return s&&r_(t,`http://${s}`),t}function Uy(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}Hg({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=at("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",Uy().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Vy("Browser");var jy="firebase",By="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ut(jy,By,"app");var Fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hn,Xh;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function I(){}I.prototype=g.prototype,E.D=g.prototype,E.prototype=new I,E.prototype.constructor=E,E.C=function(T,w,R){for(var y=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)y[Je-2]=arguments[Je];return g.prototype[w].apply(T,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,g,I){I||(I=0);var T=Array(16);if(typeof g=="string")for(var w=0;16>w;++w)T[w]=g.charCodeAt(I++)|g.charCodeAt(I++)<<8|g.charCodeAt(I++)<<16|g.charCodeAt(I++)<<24;else for(w=0;16>w;++w)T[w]=g[I++]|g[I++]<<8|g[I++]<<16|g[I++]<<24;g=E.g[0],I=E.g[1],w=E.g[2];var R=E.g[3],y=g+(R^I&(w^R))+T[0]+3614090360&4294967295;g=I+(y<<7&4294967295|y>>>25),y=R+(w^g&(I^w))+T[1]+3905402710&4294967295,R=g+(y<<12&4294967295|y>>>20),y=w+(I^R&(g^I))+T[2]+606105819&4294967295,w=R+(y<<17&4294967295|y>>>15),y=I+(g^w&(R^g))+T[3]+3250441966&4294967295,I=w+(y<<22&4294967295|y>>>10),y=g+(R^I&(w^R))+T[4]+4118548399&4294967295,g=I+(y<<7&4294967295|y>>>25),y=R+(w^g&(I^w))+T[5]+1200080426&4294967295,R=g+(y<<12&4294967295|y>>>20),y=w+(I^R&(g^I))+T[6]+2821735955&4294967295,w=R+(y<<17&4294967295|y>>>15),y=I+(g^w&(R^g))+T[7]+4249261313&4294967295,I=w+(y<<22&4294967295|y>>>10),y=g+(R^I&(w^R))+T[8]+1770035416&4294967295,g=I+(y<<7&4294967295|y>>>25),y=R+(w^g&(I^w))+T[9]+2336552879&4294967295,R=g+(y<<12&4294967295|y>>>20),y=w+(I^R&(g^I))+T[10]+4294925233&4294967295,w=R+(y<<17&4294967295|y>>>15),y=I+(g^w&(R^g))+T[11]+2304563134&4294967295,I=w+(y<<22&4294967295|y>>>10),y=g+(R^I&(w^R))+T[12]+1804603682&4294967295,g=I+(y<<7&4294967295|y>>>25),y=R+(w^g&(I^w))+T[13]+4254626195&4294967295,R=g+(y<<12&4294967295|y>>>20),y=w+(I^R&(g^I))+T[14]+2792965006&4294967295,w=R+(y<<17&4294967295|y>>>15),y=I+(g^w&(R^g))+T[15]+1236535329&4294967295,I=w+(y<<22&4294967295|y>>>10),y=g+(w^R&(I^w))+T[1]+4129170786&4294967295,g=I+(y<<5&4294967295|y>>>27),y=R+(I^w&(g^I))+T[6]+3225465664&4294967295,R=g+(y<<9&4294967295|y>>>23),y=w+(g^I&(R^g))+T[11]+643717713&4294967295,w=R+(y<<14&4294967295|y>>>18),y=I+(R^g&(w^R))+T[0]+3921069994&4294967295,I=w+(y<<20&4294967295|y>>>12),y=g+(w^R&(I^w))+T[5]+3593408605&4294967295,g=I+(y<<5&4294967295|y>>>27),y=R+(I^w&(g^I))+T[10]+38016083&4294967295,R=g+(y<<9&4294967295|y>>>23),y=w+(g^I&(R^g))+T[15]+3634488961&4294967295,w=R+(y<<14&4294967295|y>>>18),y=I+(R^g&(w^R))+T[4]+3889429448&4294967295,I=w+(y<<20&4294967295|y>>>12),y=g+(w^R&(I^w))+T[9]+568446438&4294967295,g=I+(y<<5&4294967295|y>>>27),y=R+(I^w&(g^I))+T[14]+3275163606&4294967295,R=g+(y<<9&4294967295|y>>>23),y=w+(g^I&(R^g))+T[3]+4107603335&4294967295,w=R+(y<<14&4294967295|y>>>18),y=I+(R^g&(w^R))+T[8]+1163531501&4294967295,I=w+(y<<20&4294967295|y>>>12),y=g+(w^R&(I^w))+T[13]+2850285829&4294967295,g=I+(y<<5&4294967295|y>>>27),y=R+(I^w&(g^I))+T[2]+4243563512&4294967295,R=g+(y<<9&4294967295|y>>>23),y=w+(g^I&(R^g))+T[7]+1735328473&4294967295,w=R+(y<<14&4294967295|y>>>18),y=I+(R^g&(w^R))+T[12]+2368359562&4294967295,I=w+(y<<20&4294967295|y>>>12),y=g+(I^w^R)+T[5]+4294588738&4294967295,g=I+(y<<4&4294967295|y>>>28),y=R+(g^I^w)+T[8]+2272392833&4294967295,R=g+(y<<11&4294967295|y>>>21),y=w+(R^g^I)+T[11]+1839030562&4294967295,w=R+(y<<16&4294967295|y>>>16),y=I+(w^R^g)+T[14]+4259657740&4294967295,I=w+(y<<23&4294967295|y>>>9),y=g+(I^w^R)+T[1]+2763975236&4294967295,g=I+(y<<4&4294967295|y>>>28),y=R+(g^I^w)+T[4]+1272893353&4294967295,R=g+(y<<11&4294967295|y>>>21),y=w+(R^g^I)+T[7]+4139469664&4294967295,w=R+(y<<16&4294967295|y>>>16),y=I+(w^R^g)+T[10]+3200236656&4294967295,I=w+(y<<23&4294967295|y>>>9),y=g+(I^w^R)+T[13]+681279174&4294967295,g=I+(y<<4&4294967295|y>>>28),y=R+(g^I^w)+T[0]+3936430074&4294967295,R=g+(y<<11&4294967295|y>>>21),y=w+(R^g^I)+T[3]+3572445317&4294967295,w=R+(y<<16&4294967295|y>>>16),y=I+(w^R^g)+T[6]+76029189&4294967295,I=w+(y<<23&4294967295|y>>>9),y=g+(I^w^R)+T[9]+3654602809&4294967295,g=I+(y<<4&4294967295|y>>>28),y=R+(g^I^w)+T[12]+3873151461&4294967295,R=g+(y<<11&4294967295|y>>>21),y=w+(R^g^I)+T[15]+530742520&4294967295,w=R+(y<<16&4294967295|y>>>16),y=I+(w^R^g)+T[2]+3299628645&4294967295,I=w+(y<<23&4294967295|y>>>9),y=g+(w^(I|~R))+T[0]+4096336452&4294967295,g=I+(y<<6&4294967295|y>>>26),y=R+(I^(g|~w))+T[7]+1126891415&4294967295,R=g+(y<<10&4294967295|y>>>22),y=w+(g^(R|~I))+T[14]+2878612391&4294967295,w=R+(y<<15&4294967295|y>>>17),y=I+(R^(w|~g))+T[5]+4237533241&4294967295,I=w+(y<<21&4294967295|y>>>11),y=g+(w^(I|~R))+T[12]+1700485571&4294967295,g=I+(y<<6&4294967295|y>>>26),y=R+(I^(g|~w))+T[3]+2399980690&4294967295,R=g+(y<<10&4294967295|y>>>22),y=w+(g^(R|~I))+T[10]+4293915773&4294967295,w=R+(y<<15&4294967295|y>>>17),y=I+(R^(w|~g))+T[1]+2240044497&4294967295,I=w+(y<<21&4294967295|y>>>11),y=g+(w^(I|~R))+T[8]+1873313359&4294967295,g=I+(y<<6&4294967295|y>>>26),y=R+(I^(g|~w))+T[15]+4264355552&4294967295,R=g+(y<<10&4294967295|y>>>22),y=w+(g^(R|~I))+T[6]+2734768916&4294967295,w=R+(y<<15&4294967295|y>>>17),y=I+(R^(w|~g))+T[13]+1309151649&4294967295,I=w+(y<<21&4294967295|y>>>11),y=g+(w^(I|~R))+T[4]+4149444226&4294967295,g=I+(y<<6&4294967295|y>>>26),y=R+(I^(g|~w))+T[11]+3174756917&4294967295,R=g+(y<<10&4294967295|y>>>22),y=w+(g^(R|~I))+T[2]+718787259&4294967295,w=R+(y<<15&4294967295|y>>>17),y=I+(R^(w|~g))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(w+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+w&4294967295,E.g[3]=E.g[3]+R&4294967295}n.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var I=g-this.blockSize,T=this.B,w=this.h,R=0;R<g;){if(w==0)for(;R<=I;)s(this,E,R),R+=this.blockSize;if(typeof E=="string"){for(;R<g;)if(T[w++]=E.charCodeAt(R++),w==this.blockSize){s(this,T),w=0;break}}else for(;R<g;)if(T[w++]=E[R++],w==this.blockSize){s(this,T),w=0;break}}this.h=w,this.o+=g},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var I=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=I&255,I/=256;for(this.u(E),E=Array(16),g=I=0;4>g;++g)for(var T=0;32>T;T+=8)E[I++]=this.g[g]>>>T&255;return E};function i(E,g){var I=c;return Object.prototype.hasOwnProperty.call(I,E)?I[E]:I[E]=g(E)}function o(E,g){this.h=g;for(var I=[],T=!0,w=E.length-1;0<=w;w--){var R=E[w]|0;T&&R==g||(I[w]=R,T=!1)}this.g=I}var c={};function l(E){return-128<=E&&128>E?i(E,function(g){return new o([g|0],0>g?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return k(h(-E));for(var g=[],I=1,T=0;E>=I;T++)g[T]=E/I|0,I*=4294967296;return new o(g,0)}function f(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return k(f(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(g,8)),T=p,w=0;w<E.length;w+=8){var R=Math.min(8,E.length-w),y=parseInt(E.substring(w,w+R),g);8>R?(R=h(Math.pow(g,R)),T=T.j(R).add(h(y))):(T=T.j(I),T=T.add(h(y)))}return T}var p=l(0),_=l(1),A=l(16777216);r=o.prototype,r.m=function(){if(x(this))return-k(this).m();for(var E=0,g=1,I=0;I<this.g.length;I++){var T=this.i(I);E+=(0<=T?T:4294967296+T)*g,g*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(x(this))return"-"+k(this).toString(E);for(var g=h(Math.pow(E,6)),I=this,T="";;){var w=X(I,g).g;I=$(I,w.j(g));var R=((0<I.g.length?I.g[0]:I.h)>>>0).toString(E);if(I=w,C(I))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function x(E){return E.h==-1}r.l=function(E){return E=$(this,E),x(E)?-1:C(E)?0:1};function k(E){for(var g=E.g.length,I=[],T=0;T<g;T++)I[T]=~E.g[T];return new o(I,~E.h).add(_)}r.abs=function(){return x(this)?k(this):this},r.add=function(E){for(var g=Math.max(this.g.length,E.g.length),I=[],T=0,w=0;w<=g;w++){var R=T+(this.i(w)&65535)+(E.i(w)&65535),y=(R>>>16)+(this.i(w)>>>16)+(E.i(w)>>>16);T=y>>>16,R&=65535,y&=65535,I[w]=y<<16|R}return new o(I,I[I.length-1]&-2147483648?-1:0)};function $(E,g){return E.add(k(g))}r.j=function(E){if(C(this)||C(E))return p;if(x(this))return x(E)?k(this).j(k(E)):k(k(this).j(E));if(x(E))return k(this.j(k(E)));if(0>this.l(A)&&0>E.l(A))return h(this.m()*E.m());for(var g=this.g.length+E.g.length,I=[],T=0;T<2*g;T++)I[T]=0;for(T=0;T<this.g.length;T++)for(var w=0;w<E.g.length;w++){var R=this.i(T)>>>16,y=this.i(T)&65535,Je=E.i(w)>>>16,Qt=E.i(w)&65535;I[2*T+2*w]+=y*Qt,V(I,2*T+2*w),I[2*T+2*w+1]+=R*Qt,V(I,2*T+2*w+1),I[2*T+2*w+1]+=y*Je,V(I,2*T+2*w+1),I[2*T+2*w+2]+=R*Je,V(I,2*T+2*w+2)}for(T=0;T<g;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=g;T<2*g;T++)I[T]=0;return new o(I,0)};function V(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function B(E,g){this.g=E,this.h=g}function X(E,g){if(C(g))throw Error("division by zero");if(C(E))return new B(p,p);if(x(E))return g=X(k(E),g),new B(k(g.g),k(g.h));if(x(g))return g=X(E,k(g)),new B(k(g.g),g.h);if(30<E.g.length){if(x(E)||x(g))throw Error("slowDivide_ only works with positive integers.");for(var I=_,T=g;0>=T.l(E);)I=ne(I),T=ne(T);var w=H(I,1),R=H(T,1);for(T=H(T,2),I=H(I,2);!C(T);){var y=R.add(T);0>=y.l(E)&&(w=w.add(I),R=y),T=H(T,1),I=H(I,1)}return g=$(E,w.j(g)),new B(w,g)}for(w=p;0<=E.l(g);){for(I=Math.max(1,Math.floor(E.m()/g.m())),T=Math.ceil(Math.log(I)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=h(I),y=R.j(g);x(y)||0<y.l(E);)I-=T,R=h(I),y=R.j(g);C(R)&&(R=_),w=w.add(R),E=$(E,y)}return new B(w,E)}r.A=function(E){return X(this,E).h},r.and=function(E){for(var g=Math.max(this.g.length,E.g.length),I=[],T=0;T<g;T++)I[T]=this.i(T)&E.i(T);return new o(I,this.h&E.h)},r.or=function(E){for(var g=Math.max(this.g.length,E.g.length),I=[],T=0;T<g;T++)I[T]=this.i(T)|E.i(T);return new o(I,this.h|E.h)},r.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),I=[],T=0;T<g;T++)I[T]=this.i(T)^E.i(T);return new o(I,this.h^E.h)};function ne(E){for(var g=E.g.length+1,I=[],T=0;T<g;T++)I[T]=E.i(T)<<1|E.i(T-1)>>>31;return new o(I,E.h)}function H(E,g){var I=g>>5;g%=32;for(var T=E.g.length-I,w=[],R=0;R<T;R++)w[R]=0<g?E.i(R+I)>>>g|E.i(R+I+1)<<32-g:E.i(R+I);return new o(w,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Xh=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,hn=o}).apply(typeof Fl<"u"?Fl:typeof self<"u"?self:typeof window<"u"?window:{});var Gs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jh,$r,Yh,ei,Ko,Zh,ed,td;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gs=="object"&&Gs];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function s(a,u){if(u)e:{var d=n;a=a.split(".");for(var m=0;m<a.length-1;m++){var b=a[m];if(!(b in d))break e;d=d[b]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,m=!1,b={next:function(){if(!m&&d<a.length){var S=d++;return{value:u(S,a[S]),done:!1}}return m=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,m),a.apply(u,b)}}return function(){return a.apply(u,arguments)}}function _(a,u,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,_.apply(null,arguments)}function A(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function C(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,b,S){for(var M=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)M[oe-2]=arguments[oe];return u.prototype[b].apply(m,M)}}function x(a){const u=a.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function k(a,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(l(m)){const b=a.length||0,S=m.length||0;a.length=b+S;for(let M=0;M<S;M++)a[b+M]=m[M]}else a.push(m)}}class ${constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function V(a){return/^[\s\xa0]*$/.test(a)}function B(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function X(a){return X[" "](a),a}X[" "]=function(){};var ne=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function H(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function E(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function g(a){const u={};for(const d in a)u[d]=a[d];return u}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,u){let d,m;for(let b=1;b<arguments.length;b++){m=arguments[b];for(d in m)a[d]=m[d];for(let S=0;S<I.length;S++)d=I[S],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function w(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function R(a){c.setTimeout(()=>{throw a},0)}function y(){var a=mr;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Je{constructor(){this.h=this.g=null}add(u,d){const m=Qt.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Qt=new $(()=>new qe,a=>a.reset());class qe{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let We,$e=!1,mr=new Je,nt=()=>{const a=c.Promise.resolve(void 0);We=()=>{a.then(eo)}};var eo=()=>{for(var a;a=y();){try{a.h.call(a.g)}catch(d){R(d)}var u=Qt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}$e=!1};function rt(){this.s=this.s,this.C=this.C}rt.prototype.s=!1,rt.prototype.ma=function(){this.s||(this.s=!0,this.N())},rt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function be(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var to=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a}();function Xt(a,u){if(be.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(ne){e:{try{X(u.nodeName);var b=!0;break e}catch{}b=!1}b||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:no[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Xt.aa.h.call(this)}}C(Xt,be);var no={2:"touch",3:"pen",4:"mouse"};Xt.prototype.h=function(){Xt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Cn="closure_listenable_"+(1e6*Math.random()|0),ro=0;function so(a,u,d,m,b){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=b,this.key=++ro,this.da=this.fa=!1}function Dn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Jt(a){this.src=a,this.g={},this.h=0}Jt.prototype.add=function(a,u,d,m,b){var S=a.toString();a=this.g[S],a||(a=this.g[S]=[],this.h++);var M=gr(a,u,m,b);return-1<M?(u=a[M],d||(u.fa=!1)):(u=new so(u,this.src,S,!!m,b),u.fa=d,a.push(u)),u};function pr(a,u){var d=u.type;if(d in a.g){var m=a.g[d],b=Array.prototype.indexOf.call(m,u,void 0),S;(S=0<=b)&&Array.prototype.splice.call(m,b,1),S&&(Dn(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function gr(a,u,d,m){for(var b=0;b<a.length;++b){var S=a[b];if(!S.da&&S.listener==u&&S.capture==!!d&&S.ha==m)return b}return-1}var _r="closure_lm_"+(1e6*Math.random()|0),yr={};function Rs(a,u,d,m,b){if(Array.isArray(u)){for(var S=0;S<u.length;S++)Rs(a,u[S],d,m,b);return null}return d=hc(d),a&&a[Cn]?a.K(u,d,h(m)?!!m.capture:!1,b):z(a,u,d,!1,m,b)}function z(a,u,d,m,b,S){if(!u)throw Error("Invalid event type");var M=h(b)?!!b.capture:!!b,oe=io(a);if(oe||(a[_r]=oe=new Jt(a)),d=oe.add(u,d,m,M,S),d.proxy)return d;if(m=_e(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)to||(b=M),b===void 0&&(b=!1),a.addEventListener(u.toString(),m,b);else if(a.attachEvent)a.attachEvent(uc(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function _e(){function a(d){return u.call(a.src,a.listener,d)}const u=cm;return a}function Oe(a,u,d,m,b){if(Array.isArray(u))for(var S=0;S<u.length;S++)Oe(a,u[S],d,m,b);else m=h(m)?!!m.capture:!!m,d=hc(d),a&&a[Cn]?(a=a.i,u=String(u).toString(),u in a.g&&(S=a.g[u],d=gr(S,d,m,b),-1<d&&(Dn(S[d]),Array.prototype.splice.call(S,d,1),S.length==0&&(delete a.g[u],a.h--)))):a&&(a=io(a))&&(u=a.g[u.toString()],a=-1,u&&(a=gr(u,d,m,b)),(d=-1<a?u[a]:null)&&Ir(d))}function Ir(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Cn])pr(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(uc(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=io(u))?(pr(d,a),d.h==0&&(d.src=null,u[_r]=null)):Dn(a)}}}function uc(a){return a in yr?yr[a]:yr[a]="on"+a}function cm(a,u){if(a.da)a=!0;else{u=new Xt(u,this);var d=a.listener,m=a.ha||a.src;a.fa&&Ir(a),a=d.call(m,u)}return a}function io(a){return a=a[_r],a instanceof Jt?a:null}var oo="__closure_events_fn_"+(1e9*Math.random()>>>0);function hc(a){return typeof a=="function"?a:(a[oo]||(a[oo]=function(u){return a.handleEvent(u)}),a[oo])}function De(){rt.call(this),this.i=new Jt(this),this.M=this,this.F=null}C(De,rt),De.prototype[Cn]=!0,De.prototype.removeEventListener=function(a,u,d,m){Oe(this,a,u,d,m)};function Me(a,u){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new be(u,a);else if(u instanceof be)u.target=u.target||a;else{var b=u;u=new be(m,a),T(u,b)}if(b=!0,d)for(var S=d.length-1;0<=S;S--){var M=u.g=d[S];b=Ps(M,m,!0,u)&&b}if(M=u.g=a,b=Ps(M,m,!0,u)&&b,b=Ps(M,m,!1,u)&&b,d)for(S=0;S<d.length;S++)M=u.g=d[S],b=Ps(M,m,!1,u)&&b}De.prototype.N=function(){if(De.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],m=0;m<d.length;m++)Dn(d[m]);delete a.g[u],a.h--}}this.F=null},De.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},De.prototype.L=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function Ps(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var b=!0,S=0;S<u.length;++S){var M=u[S];if(M&&!M.da&&M.capture==d){var oe=M.listener,Pe=M.ha||M.src;M.fa&&pr(a.i,M),b=oe.call(Pe,m)!==!1&&b}}return b&&!m.defaultPrevented}function dc(a,u,d){if(typeof a=="function")d&&(a=_(a,d));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function fc(a){a.g=dc(()=>{a.g=null,a.i&&(a.i=!1,fc(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class lm extends rt{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:fc(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vr(a){rt.call(this),this.h=a,this.g={}}C(vr,rt);var mc=[];function pc(a){H(a.g,function(u,d){this.g.hasOwnProperty(d)&&Ir(u)},a),a.g={}}vr.prototype.N=function(){vr.aa.N.call(this),pc(this)},vr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ao=c.JSON.stringify,um=c.JSON.parse,hm=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function co(){}co.prototype.h=null;function gc(a){return a.h||(a.h=a.i())}function _c(){}var Er={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function lo(){be.call(this,"d")}C(lo,be);function uo(){be.call(this,"c")}C(uo,be);var Yt={},yc=null;function Ss(){return yc=yc||new De}Yt.La="serverreachability";function Ic(a){be.call(this,Yt.La,a)}C(Ic,be);function Tr(a){const u=Ss();Me(u,new Ic(u))}Yt.STAT_EVENT="statevent";function vc(a,u){be.call(this,Yt.STAT_EVENT,a),this.stat=u}C(vc,be);function Le(a){const u=Ss();Me(u,new vc(u,a))}Yt.Ma="timingevent";function Ec(a,u){be.call(this,Yt.Ma,a),this.size=u}C(Ec,be);function wr(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function Ar(){this.g=!0}Ar.prototype.xa=function(){this.g=!1};function dm(a,u,d,m,b,S){a.info(function(){if(a.g)if(S)for(var M="",oe=S.split("&"),Pe=0;Pe<oe.length;Pe++){var ee=oe[Pe].split("=");if(1<ee.length){var xe=ee[0];ee=ee[1];var ke=xe.split("_");M=2<=ke.length&&ke[1]=="type"?M+(xe+"="+ee+"&"):M+(xe+"=redacted&")}}else M=null;else M=S;return"XMLHTTP REQ ("+m+") [attempt "+b+"]: "+u+`
`+d+`
`+M})}function fm(a,u,d,m,b,S,M){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+b+"]: "+u+`
`+d+`
`+S+" "+M})}function xn(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+pm(a,d)+(m?" "+m:"")})}function mm(a,u){a.info(function(){return"TIMEOUT: "+u})}Ar.prototype.info=function(){};function pm(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var b=m[1];if(Array.isArray(b)&&!(1>b.length)){var S=b[0];if(S!="noop"&&S!="stop"&&S!="close")for(var M=1;M<b.length;M++)b[M]=""}}}}return ao(d)}catch{return u}}var Cs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Tc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ho;function Ds(){}C(Ds,co),Ds.prototype.g=function(){return new XMLHttpRequest},Ds.prototype.i=function(){return{}},ho=new Ds;function bt(a,u,d,m){this.j=a,this.i=u,this.l=d,this.R=m||1,this.U=new vr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wc}function wc(){this.i=null,this.g="",this.h=!1}var Ac={},fo={};function mo(a,u,d){a.L=1,a.v=Vs(ht(u)),a.m=d,a.P=!0,bc(a,null)}function bc(a,u){a.F=Date.now(),xs(a),a.A=ht(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Uc(d.i,"t",m),a.C=0,d=a.j.J,a.h=new wc,a.g=rl(a.j,d?u:null,!a.m),0<a.O&&(a.M=new lm(_(a.Y,a,a.g),a.O)),u=a.U,d=a.g,m=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(mc[0]=b.toString()),b=mc);for(var S=0;S<b.length;S++){var M=Rs(d,b[S],m||u.handleEvent,!1,u.h||u);if(!M)break;u.g[M.key]=M}u=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Tr(),dm(a.i,a.u,a.A,a.l,a.R,a.m)}bt.prototype.ca=function(a){a=a.target;const u=this.M;u&&dt(a)==3?u.j():this.Y(a)},bt.prototype.Y=function(a){try{if(a==this.g)e:{const ke=dt(this.g);var u=this.g.Ba();const Vn=this.g.Z();if(!(3>ke)&&(ke!=3||this.g&&(this.h.h||this.g.oa()||Kc(this.g)))){this.J||ke!=4||u==7||(u==8||0>=Vn?Tr(3):Tr(2)),po(this);var d=this.g.Z();this.X=d;t:if(Rc(this)){var m=Kc(this.g);a="";var b=m.length,S=dt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zt(this),br(this);var M="";break t}this.h.i=new c.TextDecoder}for(u=0;u<b;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(S&&u==b-1)});m.length=0,this.h.g+=a,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=d==200,fm(this.i,this.u,this.A,this.l,this.R,ke,d),this.o){if(this.T&&!this.K){t:{if(this.g){var oe,Pe=this.g;if((oe=Pe.g?Pe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(oe)){var ee=oe;break t}}ee=null}if(d=ee)xn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,go(this,d);else{this.o=!1,this.s=3,Le(12),Zt(this),br(this);break e}}if(this.P){d=!0;let et;for(;!this.J&&this.C<M.length;)if(et=gm(this,M),et==fo){ke==4&&(this.s=4,Le(14),d=!1),xn(this.i,this.l,null,"[Incomplete Response]");break}else if(et==Ac){this.s=4,Le(15),xn(this.i,this.l,M,"[Invalid Chunk]"),d=!1;break}else xn(this.i,this.l,et,null),go(this,et);if(Rc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ke!=4||M.length!=0||this.h.h||(this.s=1,Le(16),d=!1),this.o=this.o&&d,!d)xn(this.i,this.l,M,"[Invalid Chunked Response]"),Zt(this),br(this);else if(0<M.length&&!this.W){this.W=!0;var xe=this.j;xe.g==this&&xe.ba&&!xe.M&&(xe.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),To(xe),xe.M=!0,Le(11))}}else xn(this.i,this.l,M,null),go(this,M);ke==4&&Zt(this),this.o&&!this.J&&(ke==4?Zc(this.j,this):(this.o=!1,xs(this)))}else Nm(this.g),d==400&&0<M.indexOf("Unknown SID")?(this.s=3,Le(12)):(this.s=0,Le(13)),Zt(this),br(this)}}}catch{}finally{}};function Rc(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function gm(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?fo:(d=Number(u.substring(d,m)),isNaN(d)?Ac:(m+=1,m+d>u.length?fo:(u=u.slice(m,m+d),a.C=m+d,u)))}bt.prototype.cancel=function(){this.J=!0,Zt(this)};function xs(a){a.S=Date.now()+a.I,Pc(a,a.I)}function Pc(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=wr(_(a.ba,a),u)}function po(a){a.B&&(c.clearTimeout(a.B),a.B=null)}bt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(mm(this.i,this.A),this.L!=2&&(Tr(),Le(17)),Zt(this),this.s=2,br(this)):Pc(this,this.S-a)};function br(a){a.j.G==0||a.J||Zc(a.j,a)}function Zt(a){po(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,pc(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function go(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||_o(d.h,a))){if(!a.K&&_o(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var b=m;if(b[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)js(d),Fs(d);else break e;Eo(d),Le(18)}}else d.za=b[1],0<d.za-d.T&&37500>b[2]&&d.F&&d.v==0&&!d.C&&(d.C=wr(_(d.Za,d),6e3));if(1>=Dc(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else tn(d,11)}else if((a.K||d.g==a)&&js(d),!V(u))for(b=d.Da.g.parse(u),u=0;u<b.length;u++){let ee=b[u];if(d.T=ee[0],ee=ee[1],d.G==2)if(ee[0]=="c"){d.K=ee[1],d.ia=ee[2];const xe=ee[3];xe!=null&&(d.la=xe,d.j.info("VER="+d.la));const ke=ee[4];ke!=null&&(d.Aa=ke,d.j.info("SVER="+d.Aa));const Vn=ee[5];Vn!=null&&typeof Vn=="number"&&0<Vn&&(m=1.5*Vn,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const et=a.g;if(et){const qs=et.g?et.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qs){var S=m.h;S.g||qs.indexOf("spdy")==-1&&qs.indexOf("quic")==-1&&qs.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(yo(S,S.h),S.h=null))}if(m.D){const wo=et.g?et.g.getResponseHeader("X-HTTP-Session-Id"):null;wo&&(m.ya=wo,ae(m.I,m.D,wo))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var M=a;if(m.qa=nl(m,m.J?m.ia:null,m.W),M.K){xc(m.h,M);var oe=M,Pe=m.L;Pe&&(oe.I=Pe),oe.B&&(po(oe),xs(oe)),m.g=M}else Jc(m);0<d.i.length&&Us(d)}else ee[0]!="stop"&&ee[0]!="close"||tn(d,7);else d.G==3&&(ee[0]=="stop"||ee[0]=="close"?ee[0]=="stop"?tn(d,7):vo(d):ee[0]!="noop"&&d.l&&d.l.ta(ee),d.v=0)}}Tr(4)}catch{}}var _m=class{constructor(a,u){this.g=a,this.map=u}};function Sc(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Cc(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Dc(a){return a.h?1:a.g?a.g.size:0}function _o(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function yo(a,u){a.g?a.g.add(u):a.h=u}function xc(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Sc.prototype.cancel=function(){if(this.i=kc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function kc(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return x(a.i)}function ym(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],d=a.length,m=0;m<d;m++)u.push(a[m]);return u}u=[],d=0;for(m in a)u[d++]=a[m];return u}function Im(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const m in a)u[d++]=m;return u}}}function Nc(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=Im(a),m=ym(a),b=m.length,S=0;S<b;S++)u.call(void 0,m[S],d&&d[S],a)}var Vc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vm(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),b=null;if(0<=m){var S=a[d].substring(0,m);b=a[d].substring(m+1)}else S=a[d];u(S,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function en(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof en){this.h=a.h,ks(this,a.j),this.o=a.o,this.g=a.g,Ns(this,a.s),this.l=a.l;var u=a.i,d=new Sr;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Oc(this,d),this.m=a.m}else a&&(u=String(a).match(Vc))?(this.h=!1,ks(this,u[1]||"",!0),this.o=Rr(u[2]||""),this.g=Rr(u[3]||"",!0),Ns(this,u[4]),this.l=Rr(u[5]||"",!0),Oc(this,u[6]||"",!0),this.m=Rr(u[7]||"")):(this.h=!1,this.i=new Sr(null,this.h))}en.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Pr(u,Mc,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Pr(u,Mc,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Pr(d,d.charAt(0)=="/"?wm:Tm,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Pr(d,bm)),a.join("")};function ht(a){return new en(a)}function ks(a,u,d){a.j=d?Rr(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Ns(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Oc(a,u,d){u instanceof Sr?(a.i=u,Rm(a.i,a.h)):(d||(u=Pr(u,Am)),a.i=new Sr(u,a.h))}function ae(a,u,d){a.i.set(u,d)}function Vs(a){return ae(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Rr(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Pr(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,Em),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Em(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Mc=/[#\/\?@]/g,Tm=/[#\?:]/g,wm=/[#\?]/g,Am=/[#\?@]/g,bm=/#/g;function Sr(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Rt(a){a.g||(a.g=new Map,a.h=0,a.i&&vm(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}r=Sr.prototype,r.add=function(a,u){Rt(this),this.i=null,a=kn(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Lc(a,u){Rt(a),u=kn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Fc(a,u){return Rt(a),u=kn(a,u),a.g.has(u)}r.forEach=function(a,u){Rt(this),this.g.forEach(function(d,m){d.forEach(function(b){a.call(u,b,m,this)},this)},this)},r.na=function(){Rt(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const b=a[m];for(let S=0;S<b.length;S++)d.push(u[m])}return d},r.V=function(a){Rt(this);let u=[];if(typeof a=="string")Fc(this,a)&&(u=u.concat(this.g.get(kn(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},r.set=function(a,u){return Rt(this),this.i=null,a=kn(this,a),Fc(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},r.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Uc(a,u,d){Lc(a,u),0<d.length&&(a.i=null,a.g.set(kn(a,u),x(d)),a.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const S=encodeURIComponent(String(m)),M=this.V(m);for(m=0;m<M.length;m++){var b=S;M[m]!==""&&(b+="="+encodeURIComponent(String(M[m]))),a.push(b)}}return this.i=a.join("&")};function kn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Rm(a,u){u&&!a.j&&(Rt(a),a.i=null,a.g.forEach(function(d,m){var b=m.toLowerCase();m!=b&&(Lc(this,m),Uc(this,b,d))},a)),a.j=u}function Pm(a,u){const d=new Ar;if(c.Image){const m=new Image;m.onload=A(Pt,d,"TestLoadImage: loaded",!0,u,m),m.onerror=A(Pt,d,"TestLoadImage: error",!1,u,m),m.onabort=A(Pt,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=A(Pt,d,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function Sm(a,u){const d=new Ar,m=new AbortController,b=setTimeout(()=>{m.abort(),Pt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(S=>{clearTimeout(b),S.ok?Pt(d,"TestPingServer: ok",!0,u):Pt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(b),Pt(d,"TestPingServer: error",!1,u)})}function Pt(a,u,d,m,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),m(d)}catch{}}function Cm(){this.g=new hm}function Dm(a,u,d){const m=d||"";try{Nc(a,function(b,S){let M=b;h(b)&&(M=ao(b)),u.push(m+S+"="+encodeURIComponent(M))})}catch(b){throw u.push(m+"type="+encodeURIComponent("_badmap")),b}}function Os(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Os,co),Os.prototype.g=function(){return new Ms(this.l,this.j)},Os.prototype.i=function(a){return function(){return a}}({});function Ms(a,u){De.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Ms,De),r=Ms.prototype,r.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Dr(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cr(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Dr(this)),this.g&&(this.readyState=3,Dr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;jc(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function jc(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Cr(this):Dr(this),this.readyState==3&&jc(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,Cr(this))},r.Qa=function(a){this.g&&(this.response=a,Cr(this))},r.ga=function(){this.g&&Cr(this)};function Cr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Dr(a)}r.setRequestHeader=function(a,u){this.u.append(a,u)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Dr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ms.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Bc(a){let u="";return H(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Io(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Bc(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ae(a,u,d))}function pe(a){De.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(pe,De);var xm=/^https?$/i,km=["POST","PUT"];r=pe.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ho.g(),this.v=this.o?gc(this.o):gc(ho),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(S){qc(this,S);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var b in m)d.set(b,m[b]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const S of m.keys())d.set(S,m.get(S));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),b=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(km,u,void 0))||m||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,M]of d)this.g.setRequestHeader(S,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zc(this),this.u=!0,this.g.send(a),this.u=!1}catch(S){qc(this,S)}};function qc(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,$c(a),Ls(a)}function $c(a){a.A||(a.A=!0,Me(a,"complete"),Me(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Me(this,"complete"),Me(this,"abort"),Ls(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ls(this,!0)),pe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Gc(this):this.bb())},r.bb=function(){Gc(this)};function Gc(a){if(a.h&&typeof o<"u"&&(!a.v[1]||dt(a)!=4||a.Z()!=2)){if(a.u&&dt(a)==4)dc(a.Ea,0,a);else if(Me(a,"readystatechange"),dt(a)==4){a.h=!1;try{const M=a.Z();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=M===0){var b=String(a.D).match(Vc)[1]||null;!b&&c.self&&c.self.location&&(b=c.self.location.protocol.slice(0,-1)),m=!xm.test(b?b.toLowerCase():"")}d=m}if(d)Me(a,"complete"),Me(a,"success");else{a.m=6;try{var S=2<dt(a)?a.g.statusText:""}catch{S=""}a.l=S+" ["+a.Z()+"]",$c(a)}}finally{Ls(a)}}}}function Ls(a,u){if(a.g){zc(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||Me(a,"ready");try{d.onreadystatechange=m}catch{}}}function zc(a){a.I&&(c.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function dt(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<dt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),um(u)}};function Kc(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Nm(a){const u={};a=(a.g&&2<=dt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(V(a[m]))continue;var d=w(a[m]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=u[b]||[];u[b]=S,S.push(d)}E(u,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function xr(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Wc(a){this.Aa=0,this.i=[],this.j=new Ar,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=xr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=xr("baseRetryDelayMs",5e3,a),this.cb=xr("retryDelaySeedMs",1e4,a),this.Wa=xr("forwardChannelMaxRetries",2,a),this.wa=xr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Sc(a&&a.concurrentRequestLimit),this.Da=new Cm,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Wc.prototype,r.la=8,r.G=1,r.connect=function(a,u,d,m){Le(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=nl(this,null,this.W),Us(this)};function vo(a){if(Hc(a),a.G==3){var u=a.U++,d=ht(a.I);if(ae(d,"SID",a.K),ae(d,"RID",u),ae(d,"TYPE","terminate"),kr(a,d),u=new bt(a,a.j,u),u.L=2,u.v=Vs(ht(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=rl(u.j,null),u.g.ea(u.v)),u.F=Date.now(),xs(u)}tl(a)}function Fs(a){a.g&&(To(a),a.g.cancel(),a.g=null)}function Hc(a){Fs(a),a.u&&(c.clearTimeout(a.u),a.u=null),js(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Us(a){if(!Cc(a.h)&&!a.s){a.s=!0;var u=a.Ga;We||nt(),$e||(We(),$e=!0),mr.add(u,a),a.B=0}}function Vm(a,u){return Dc(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=wr(_(a.Ga,a,u),el(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new bt(this,this.j,a);let S=this.o;if(this.S&&(S?(S=g(S),T(S,this.S)):S=this.S),this.m!==null||this.O||(b.H=S,S=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Xc(this,b,u),d=ht(this.I),ae(d,"RID",a),ae(d,"CVER",22),this.D&&ae(d,"X-HTTP-Session-Id",this.D),kr(this,d),S&&(this.O?u="headers="+encodeURIComponent(String(Bc(S)))+"&"+u:this.m&&Io(d,this.m,S)),yo(this.h,b),this.Ua&&ae(d,"TYPE","init"),this.P?(ae(d,"$req",u),ae(d,"SID","null"),b.T=!0,mo(b,d,null)):mo(b,d,u),this.G=2}}else this.G==3&&(a?Qc(this,a):this.i.length==0||Cc(this.h)||Qc(this))};function Qc(a,u){var d;u?d=u.l:d=a.U++;const m=ht(a.I);ae(m,"SID",a.K),ae(m,"RID",d),ae(m,"AID",a.T),kr(a,m),a.m&&a.o&&Io(m,a.m,a.o),d=new bt(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Xc(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),yo(a.h,d),mo(d,m,u)}function kr(a,u){a.H&&H(a.H,function(d,m){ae(u,m,d)}),a.l&&Nc({},function(d,m){ae(u,m,d)})}function Xc(a,u,d){d=Math.min(a.i.length,d);var m=a.l?_(a.l.Na,a.l,a):null;e:{var b=a.i;let S=-1;for(;;){const M=["count="+d];S==-1?0<d?(S=b[0].g,M.push("ofs="+S)):S=0:M.push("ofs="+S);let oe=!0;for(let Pe=0;Pe<d;Pe++){let ee=b[Pe].g;const xe=b[Pe].map;if(ee-=S,0>ee)S=Math.max(0,b[Pe].g-100),oe=!1;else try{Dm(xe,M,"req"+ee+"_")}catch{m&&m(xe)}}if(oe){m=M.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,m}function Jc(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;We||nt(),$e||(We(),$e=!0),mr.add(u,a),a.v=0}}function Eo(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=wr(_(a.Fa,a),el(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,Yc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=wr(_(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Le(10),Fs(this),Yc(this))};function To(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Yc(a){a.g=new bt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=ht(a.qa);ae(u,"RID","rpc"),ae(u,"SID",a.K),ae(u,"AID",a.T),ae(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&ae(u,"TO",a.ja),ae(u,"TYPE","xmlhttp"),kr(a,u),a.m&&a.o&&Io(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Vs(ht(u)),d.m=null,d.P=!0,bc(d,a)}r.Za=function(){this.C!=null&&(this.C=null,Fs(this),Eo(this),Le(19))};function js(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Zc(a,u){var d=null;if(a.g==u){js(a),To(a),a.g=null;var m=2}else if(_o(a.h,u))d=u.D,xc(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var b=a.B;m=Ss(),Me(m,new Ec(m,d)),Us(a)}else Jc(a);else if(b=u.s,b==3||b==0&&0<u.X||!(m==1&&Vm(a,u)||m==2&&Eo(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),b){case 1:tn(a,5);break;case 4:tn(a,10);break;case 3:tn(a,6);break;default:tn(a,2)}}}function el(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function tn(a,u){if(a.j.info("Error code "+u),u==2){var d=_(a.fb,a),m=a.Xa;const b=!m;m=new en(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ks(m,"https"),Vs(m),b?Pm(m.toString(),d):Sm(m.toString(),d)}else Le(2);a.G=0,a.l&&a.l.sa(u),tl(a),Hc(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Le(2)):(this.j.info("Failed to ping google.com"),Le(1))};function tl(a){if(a.G=0,a.ka=[],a.l){const u=kc(a.h);(u.length!=0||a.i.length!=0)&&(k(a.ka,u),k(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function nl(a,u,d){var m=d instanceof en?ht(d):new en(d);if(m.g!="")u&&(m.g=u+"."+m.g),Ns(m,m.s);else{var b=c.location;m=b.protocol,u=u?u+"."+b.hostname:b.hostname,b=+b.port;var S=new en(null);m&&ks(S,m),u&&(S.g=u),b&&Ns(S,b),d&&(S.l=d),m=S}return d=a.D,u=a.ya,d&&u&&ae(m,d,u),ae(m,"VER",a.la),kr(a,m),m}function rl(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new pe(new Os({eb:d})):new pe(a.pa),u.Ha(a.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function sl(){}r=sl.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Bs(){}Bs.prototype.g=function(a,u){return new He(a,u)};function He(a,u){De.call(this),this.g=new Wc(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!V(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!V(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Nn(this)}C(He,De),He.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},He.prototype.close=function(){vo(this.g)},He.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=ao(a),a=d);u.i.push(new _m(u.Ya++,a)),u.G==3&&Us(u)},He.prototype.N=function(){this.g.l=null,delete this.j,vo(this.g),delete this.g,He.aa.N.call(this)};function il(a){lo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}C(il,lo);function ol(){uo.call(this),this.status=1}C(ol,uo);function Nn(a){this.g=a}C(Nn,sl),Nn.prototype.ua=function(){Me(this.g,"a")},Nn.prototype.ta=function(a){Me(this.g,new il(a))},Nn.prototype.sa=function(a){Me(this.g,new ol)},Nn.prototype.ra=function(){Me(this.g,"b")},Bs.prototype.createWebChannel=Bs.prototype.g,He.prototype.send=He.prototype.o,He.prototype.open=He.prototype.m,He.prototype.close=He.prototype.close,td=function(){return new Bs},ed=function(){return Ss()},Zh=Yt,Ko={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Cs.NO_ERROR=0,Cs.TIMEOUT=8,Cs.HTTP_ERROR=6,ei=Cs,Tc.COMPLETE="complete",Yh=Tc,_c.EventType=Er,Er.OPEN="a",Er.CLOSE="b",Er.ERROR="c",Er.MESSAGE="d",De.prototype.listen=De.prototype.K,$r=_c,pe.prototype.listenOnce=pe.prototype.L,pe.prototype.getLastError=pe.prototype.Ka,pe.prototype.getLastErrorCode=pe.prototype.Ba,pe.prototype.getStatus=pe.prototype.Z,pe.prototype.getResponseJson=pe.prototype.Oa,pe.prototype.getResponseText=pe.prototype.oa,pe.prototype.send=pe.prototype.ea,pe.prototype.setWithCredentials=pe.prototype.Ha,Jh=pe}).apply(typeof Gs<"u"?Gs:typeof self<"u"?self:typeof window<"u"?window:{});const Ul="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Se.UNAUTHENTICATED=new Se(null),Se.GOOGLE_CREDENTIALS=new Se("google-credentials-uid"),Se.FIRST_PARTY=new Se("first-party-uid"),Se.MOCK_USER=new Se("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ur="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=new fa("@firebase/firestore");function Un(){return gn.logLevel}function N(r,...e){if(gn.logLevel<=J.DEBUG){const t=e.map(ba);gn.debug(`Firestore (${ur}): ${r}`,...t)}}function Fe(r,...e){if(gn.logLevel<=J.ERROR){const t=e.map(ba);gn.error(`Firestore (${ur}): ${r}`,...t)}}function _n(r,...e){if(gn.logLevel<=J.WARN){const t=e.map(ba);gn.warn(`Firestore (${ur}): ${r}`,...t)}}function ba(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(r="Unexpected state"){const e=`FIRESTORE (${ur}) INTERNAL ASSERTION FAILED: `+r;throw Fe(e),new Error(e)}function j(r,e){r||U()}function K(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends Tt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Se.UNAUTHENTICATED))}shutdown(){}}class $y{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Gy{constructor(e){this.t=e,this.currentUser=Se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){j(this.o===void 0);let n=this.i;const s=l=>this.i!==n?(n=this.i,t(l)):Promise.resolve();let i=new jt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new jt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new jt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(j(typeof n.accessToken=="string"),new nd(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return j(e===null||typeof e=="string"),new Se(e)}}class zy{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Se.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ky{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new zy(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Se.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Hy{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){j(this.o===void 0);const n=i=>{i.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>n(i))};const s=i=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(j(typeof t.token=="string"),this.R=t.token,new Wy(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const s=Qy(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%e.length))}return n}}function W(r,e){return r<e?-1:r>e?1:0}function Zn(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}function sd(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new L(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return le.fromMillis(Date.now())}static fromDate(e){return le.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new le(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new le(0,0))}static max(){return new q(new le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t,n){t===void 0?t=0:t>e.length&&U(),n===void 0?n=e.length-t:n>e.length-t&&U(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return ns.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ns?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class re extends ns{construct(e,t,n){return new re(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new L(D.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new re(t)}static emptyPath(){return new re([])}}const Xy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class me extends ns{construct(e,t,n){return new me(e,t,n)}static isValidIdentifier(e){return Xy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new me(["__name__"])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new L(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new L(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(n+=c,s++):(i(),s++)}if(i(),o)throw new L(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new me(t)}static emptyPath(){return new me([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(re.fromString(e))}static fromName(e){return new F(re.fromString(e).popFirst(5))}static empty(){return new F(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new re(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function Wo(r){return r.fields.find(e=>e.kind===2)}function on(r){return r.fields.filter(e=>e.kind!==2)}Ii.UNKNOWN_ID=-1;class ti{constructor(e,t){this.fieldPath=e,this.kind=t}}class rs{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new rs(0,Xe.min())}}function Jy(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=q.fromTimestamp(n===1e9?new le(t+1,0):new le(t,n));return new Xe(s,F.empty(),e)}function id(r){return new Xe(r.readTime,r.key,-1)}class Xe{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Xe(q.min(),F.empty(),-1)}static max(){return new Xe(q.max(),F.empty(),-1)}}function Ra(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=F.comparator(r.documentKey,e.documentKey),t!==0?t:W(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ad{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(r){if(r.code!==D.FAILED_PRECONDITION||r.message!==od)throw r;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,n)=>{t(e)})}static reject(e){return new P((t,n)=>{n(e)})}static waitFor(e){return new P((t,n)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&t()},l=>n(l))}),o=!0,i===s&&t()})}static or(e){let t=P.resolve(!1);for(const n of e)t=t.next(s=>s?P.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,i)=>{n.push(t.call(this,s,i))}),this.waitFor(n)}static mapArray(e,t){return new P((n,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(f=>{o[h]=f,++c,c===i&&n(o)},f=>s(f))}})}static doWhile(e,t){return new P((n,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):n()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new jt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Qr(e,t.error)):this.V.resolve()},this.transaction.onerror=n=>{const s=Pa(n.target.error);this.V.reject(new Qr(e,s))}}static open(e,t,n,s){try{return new Mi(t,e.transaction(s,n))}catch(i){throw new Qr(t,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(N("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Zy(t)}}class Bt{constructor(e,t,n){this.name=e,this.version=t,this.p=n,Bt.S(we())===12.2&&Fe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return N("SimpleDb","Removing database:",e),an(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!lh())return!1;if(Bt.v())return!0;const e=we(),t=Bt.S(e),n=0<t&&t<10,s=cd(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(e){return this.db||(N("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{n(new Qr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?n(new L(D.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new L(D.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new Qr(e,o))},s.onupgradeneeded=i=>{N("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.O(o,s.transaction,i.oldVersion,this.version).next(()=>{N("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const c=Mi.open(this.db,e,i?"readonly":"readwrite",n),l=s(c).next(h=>(c.g(),h)).catch(h=>(c.abort(h),P.reject(h))).toPromise();return l.catch(()=>{}),await c.m,l}catch(c){const l=c,h=l.name!=="FirebaseError"&&o<3;if(N("SimpleDb","Transaction failed with error:",l.message,"Retrying:",h),this.close(),!h)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function cd(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class Yy{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return an(this.B.delete())}}class Qr extends L{constructor(e,t){super(D.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Wt(r){return r.name==="IndexedDbTransactionError"}class Zy{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(N("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(N("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),an(n)}add(e){return N("SimpleDb","ADD",this.store.name,e,e),an(this.store.add(e))}get(e){return an(this.store.get(e)).next(t=>(t===void 0&&(t=null),N("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return N("SimpleDb","DELETE",this.store.name,e),an(this.store.delete(e))}count(){return N("SimpleDb","COUNT",this.store.name),an(this.store.count())}U(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new P((o,c)=>{i.onerror=l=>{c(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(n),o=[];return this.W(i,(c,l)=>{o.push(l)}).next(()=>o)}}G(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new P((s,i)=>{n.onerror=o=>{i(o.target.error)},n.onsuccess=o=>{s(o.target.result)}})}j(e,t){N("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const s=this.cursor(n);return this.W(s,(i,o,c)=>c.delete())}J(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.W(s,t)}Y(e){const t=this.cursor({});return new P((n,s)=>{t.onerror=i=>{const o=Pa(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():n()}):n()}})}W(e,t){const n=[];return new P((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const l=new Yy(c),h=t(c.primaryKey,c.value,l);if(h instanceof P){const f=h.catch(p=>(l.done(),P.reject(p)));n.push(f)}l.isDone?s():l.K===null?c.continue():c.continue(l.K)}}).next(()=>P.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function an(r){return new P((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=Pa(n.target.error);t(s)}})}let jl=!1;function Pa(r){const e=Bt.S(we());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new L("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return jl||(jl=!0,setTimeout(()=>{throw n},0)),n}}return r}class eI{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){N("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{N("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Wt(t)?N("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await bn(t)}await this.X(6e4)})}}class tI{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const n=new Set;let s=t,i=!0;return P.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!n.has(o))return N("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,s).next(c=>{s-=c,n.add(o)});i=!1})).next(()=>t-s)}ne(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(s,i)).next(c=>(N("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}re(e,t){let n=e;return t.changes.forEach((s,i)=>{const o=id(i);Ra(o,n)>0&&(n=o)}),new Xe(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ye.oe=-1;function Li(r){return r==null}function ss(r){return r===0&&1/r==-1/0}function nI(r){return typeof r=="number"&&Number.isInteger(r)&&!ss(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Bl(e)),e=rI(r.get(t),e);return Bl(e)}function rI(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function Bl(r){return r+""}function it(r){const e=r.length;if(j(e>=2),e===2)return j(r.charAt(0)===""&&r.charAt(1)===""),re.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const o=r.indexOf("",i);switch((o<0||o>t)&&U(),r.charAt(o+1)){case"":const c=r.substring(i,o);let l;s.length===0?l=c:(s+=c,l=s,s=""),n.push(l);break;case"":s+=r.substring(i,o),s+="\0";break;case"":s+=r.substring(i,o+1);break;default:U()}i=o+2}return new re(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(r,e){return[r,je(e)]}function ld(r,e,t){return[r,je(e),t]}const sI={},iI=["prefixPath","collectionGroup","readTime","documentId"],oI=["prefixPath","collectionGroup","documentId"],aI=["collectionGroup","readTime","prefixPath","documentId"],cI=["canonicalId","targetId"],lI=["targetId","path"],uI=["path","targetId"],hI=["collectionId","parent"],dI=["indexId","uid"],fI=["uid","sequenceNumber"],mI=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],pI=["indexId","uid","orderedDocumentKey"],gI=["userId","collectionPath","documentId"],_I=["userId","collectionPath","largestBatchId"],yI=["userId","collectionGroup","largestBatchId"],ud=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],II=[...ud,"documentOverlays"],hd=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],dd=hd,Sa=[...dd,"indexConfiguration","indexState","indexEntries"],vI=Sa,EI=[...Sa,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho extends ad{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function Ae(r,e){const t=K(r);return Bt.F(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Rn(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function fd(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,t){this.comparator=e,this.root=t||Ce.EMPTY}insert(e,t){return new de(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ce.BLACK,null,null))}remove(e){return new de(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ce.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zs(this.root,e,this.comparator,!1)}getReverseIterator(){return new zs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zs(this.root,e,this.comparator,!0)}}class zs{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ce{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??Ce.RED,this.left=s??Ce.EMPTY,this.right=i??Ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new Ce(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ce.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}Ce.EMPTY=null,Ce.RED=!0,Ce.BLACK=!1;Ce.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(e,t,n,s,i){return this}insert(e,t,n){return new Ce(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.comparator=e,this.data=new de(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Gl(this.data.getIterator())}getIteratorFrom(e){return new Gl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof ie)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ie(this.comparator);return t.data=e,t}}class Gl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function On(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.fields=e,e.sort(me.comparator)}static empty(){return new ze([])}unionWith(e){let t=new ie(me.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new ze(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zn(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new md("Invalid base64 string: "+i):i}}(e);return new Te(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Te(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const TI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Et(r){if(j(!!r),typeof r=="string"){let e=0;const t=TI.exec(r);if(j(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:he(r.seconds),nanos:he(r.nanos)}}function he(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function $t(r){return typeof r=="string"?Te.fromBase64String(r):Te.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Da(r){const e=r.mapValue.fields.__previous_value__;return Ca(e)?Da(e):e}function is(r){const e=Et(r.mapValue.fields.__local_write_time__.timestampValue);return new le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,t,n,s,i,o,c,l,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class yn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new yn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof yn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ri={nullValue:"NULL_VALUE"};function In(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Ca(r)?4:pd(r)?9007199254740991:Fi(r)?10:11:U()}function lt(r,e){if(r===e)return!0;const t=In(r);if(t!==In(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return is(r).isEqual(is(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Et(s.timestampValue),c=Et(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(s,i){return $t(s.bytesValue).isEqual($t(i.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(s,i){return he(s.geoPointValue.latitude)===he(i.geoPointValue.latitude)&&he(s.geoPointValue.longitude)===he(i.geoPointValue.longitude)}(r,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return he(s.integerValue)===he(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=he(s.doubleValue),c=he(i.doubleValue);return o===c?ss(o)===ss(c):isNaN(o)&&isNaN(c)}return!1}(r,e);case 9:return Zn(r.arrayValue.values||[],e.arrayValue.values||[],lt);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if($l(o)!==$l(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!lt(o[l],c[l])))return!1;return!0}(r,e);default:return U()}}function os(r,e){return(r.values||[]).find(t=>lt(t,e))!==void 0}function Gt(r,e){if(r===e)return 0;const t=In(r),n=In(e);if(t!==n)return W(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return W(r.booleanValue,e.booleanValue);case 2:return function(i,o){const c=he(i.integerValue||i.doubleValue),l=he(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(r,e);case 3:return zl(r.timestampValue,e.timestampValue);case 4:return zl(is(r),is(e));case 5:return W(r.stringValue,e.stringValue);case 6:return function(i,o){const c=$t(i),l=$t(o);return c.compareTo(l)}(r.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=W(c[h],l[h]);if(f!==0)return f}return W(c.length,l.length)}(r.referenceValue,e.referenceValue);case 8:return function(i,o){const c=W(he(i.latitude),he(o.latitude));return c!==0?c:W(he(i.longitude),he(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Kl(r.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,f;const p=i.fields||{},_=o.fields||{},A=(c=p.value)===null||c===void 0?void 0:c.arrayValue,C=(l=_.value)===null||l===void 0?void 0:l.arrayValue,x=W(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return x!==0?x:Kl(A,C)}(r.mapValue,e.mapValue);case 11:return function(i,o){if(i===Mt.mapValue&&o===Mt.mapValue)return 0;if(i===Mt.mapValue)return 1;if(o===Mt.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const _=W(l[p],f[p]);if(_!==0)return _;const A=Gt(c[l[p]],h[f[p]]);if(A!==0)return A}return W(l.length,f.length)}(r.mapValue,e.mapValue);default:throw U()}}function zl(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return W(r,e);const t=Et(r),n=Et(e),s=W(t.seconds,n.seconds);return s!==0?s:W(t.nanos,n.nanos)}function Kl(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=Gt(t[s],n[s]);if(i)return i}return W(t.length,n.length)}function er(r){return Qo(r)}function Qo(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=Et(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return $t(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return F.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=Qo(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${Qo(t.fields[o])}`;return s+"}"}(r.mapValue):U()}function as(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Xo(r){return!!r&&"integerValue"in r}function cs(r){return!!r&&"arrayValue"in r}function Wl(r){return!!r&&"nullValue"in r}function Hl(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function si(r){return!!r&&"mapValue"in r}function Fi(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Xr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Rn(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Xr(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Xr(r.arrayValue.values[t]);return e}return Object.assign({},r)}function pd(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const gd={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function AI(r){return"nullValue"in r?ri:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?as(yn.empty(),F.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Fi(r)?gd:{mapValue:{}}:U()}function bI(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?as(yn.empty(),F.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?gd:"mapValue"in r?Fi(r)?{mapValue:{}}:Mt:U()}function Ql(r,e){const t=Gt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function Xl(r,e){const t=Gt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.value=e}static empty(){return new Ve({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!si(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xr(t)}setAll(e){let t=me.emptyPath(),n={},s=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,n,s),n={},s=[],t=c.popLast()}o?n[c.lastSegment()]=Xr(o):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());si(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return lt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];si(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){Rn(t,(s,i)=>e[s]=i);for(const s of n)delete e[s]}clone(){return new Ve(Xr(this.value))}}function _d(r){const e=[];return Rn(r.fields,(t,n)=>{const s=new me([t]);if(si(n)){const i=_d(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new ze(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t,n,s,i,o,c){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ge(e,0,q.min(),q.min(),q.min(),Ve.empty(),0)}static newFoundDocument(e,t,n,s){return new ge(e,1,t,q.min(),n,s,0)}static newNoDocument(e,t){return new ge(e,2,t,q.min(),q.min(),Ve.empty(),0)}static newUnknownDocument(e,t){return new ge(e,3,t,q.min(),q.min(),Ve.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ve.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t){this.position=e,this.inclusive=t}}function Jl(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=F.comparator(F.fromName(o.referenceValue),t.key):n=Gt(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Yl(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!lt(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,t="asc"){this.field=e,this.dir=t}}function RI(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{}class Y extends yd{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new PI(e,t,n):t==="array-contains"?new DI(e,n):t==="in"?new Ad(e,n):t==="not-in"?new xI(e,n):t==="array-contains-any"?new kI(e,n):new Y(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new SI(e,n):new CI(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Gt(t,this.value)):t!==null&&In(this.value)===In(t)&&this.matchesComparison(Gt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class se extends yd{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new se(e,t)}matches(e){return nr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function nr(r){return r.op==="and"}function Jo(r){return r.op==="or"}function xa(r){return Id(r)&&nr(r)}function Id(r){for(const e of r.filters)if(e instanceof se)return!1;return!0}function Yo(r){if(r instanceof Y)return r.field.canonicalString()+r.op.toString()+er(r.value);if(xa(r))return r.filters.map(e=>Yo(e)).join(",");{const e=r.filters.map(t=>Yo(t)).join(",");return`${r.op}(${e})`}}function vd(r,e){return r instanceof Y?function(n,s){return s instanceof Y&&n.op===s.op&&n.field.isEqual(s.field)&&lt(n.value,s.value)}(r,e):r instanceof se?function(n,s){return s instanceof se&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,o,c)=>i&&vd(o,s.filters[c]),!0):!1}(r,e):void U()}function Ed(r,e){const t=r.filters.concat(e);return se.create(t,r.op)}function Td(r){return r instanceof Y?function(t){return`${t.field.canonicalString()} ${t.op} ${er(t.value)}`}(r):r instanceof se?function(t){return t.op.toString()+" {"+t.getFilters().map(Td).join(" ,")+"}"}(r):"Filter"}class PI extends Y{constructor(e,t,n){super(e,t,n),this.key=F.fromName(n.referenceValue)}matches(e){const t=F.comparator(e.key,this.key);return this.matchesComparison(t)}}class SI extends Y{constructor(e,t){super(e,"in",t),this.keys=wd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class CI extends Y{constructor(e,t){super(e,"not-in",t),this.keys=wd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function wd(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>F.fromName(n.referenceValue))}class DI extends Y{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return cs(t)&&os(t.arrayValue,this.value)}}class Ad extends Y{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&os(this.value.arrayValue,t)}}class xI extends Y{constructor(e,t){super(e,"not-in",t)}matches(e){if(os(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!os(this.value.arrayValue,t)}}class kI extends Y{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!cs(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>os(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,t=null,n=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function Zo(r,e=null,t=[],n=[],s=null,i=null,o=null){return new NI(r,e,t,n,s,i,o)}function vn(r){const e=K(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Yo(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),Li(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>er(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>er(n)).join(",")),e.ue=t}return e.ue}function Is(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!RI(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!vd(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Yl(r.startAt,e.startAt)&&Yl(r.endAt,e.endAt)}function vi(r){return F.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Ei(r,e){return r.filters.filter(t=>t instanceof Y&&t.field.isEqual(e))}function Zl(r,e,t){let n=ri,s=!0;for(const i of Ei(r,e)){let o=ri,c=!0;switch(i.op){case"<":case"<=":o=AI(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=ri}Ql({value:n,inclusive:s},{value:o,inclusive:c})<0&&(n=o,s=c)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];Ql({value:n,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}function eu(r,e,t){let n=Mt,s=!0;for(const i of Ei(r,e)){let o=Mt,c=!0;switch(i.op){case">=":case">":o=bI(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=Mt}Xl({value:n,inclusive:s},{value:o,inclusive:c})>0&&(n=o,s=c)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];Xl({value:n,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,t=null,n=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function VI(r,e,t,n,s,i,o,c){return new hr(r,e,t,n,s,i,o,c)}function Ui(r){return new hr(r)}function tu(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function bd(r){return r.collectionGroup!==null}function Jr(r){const e=K(r);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ie(me.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ls(i,n))}),t.has(me.keyField().canonicalString())||e.ce.push(new ls(me.keyField(),n))}return e.ce}function Ze(r){const e=K(r);return e.le||(e.le=OI(e,Jr(r))),e.le}function OI(r,e){if(r.limitType==="F")return Zo(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ls(s.field,i)});const t=r.endAt?new tr(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new tr(r.startAt.position,r.startAt.inclusive):null;return Zo(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function ea(r,e){const t=r.filters.concat([e]);return new hr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function ta(r,e,t){return new hr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function ji(r,e){return Is(Ze(r),Ze(e))&&r.limitType===e.limitType}function Rd(r){return`${vn(Ze(r))}|lt:${r.limitType}`}function jn(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Td(s)).join(", ")}]`),Li(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>er(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>er(s)).join(",")),`Target(${n})`}(Ze(r))}; limitType=${r.limitType})`}function vs(r,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):F.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(const i of Jr(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(o,c,l){const h=Jl(o,c,l);return o.inclusive?h<=0:h<0}(n.startAt,Jr(n),s)||n.endAt&&!function(o,c,l){const h=Jl(o,c,l);return o.inclusive?h>=0:h>0}(n.endAt,Jr(n),s))}(r,e)}function MI(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Pd(r){return(e,t)=>{let n=!1;for(const s of Jr(r)){const i=LI(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function LI(r,e,t){const n=r.field.isKeyField()?F.comparator(e.key,t.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?Gt(l,h):U()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return U()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Rn(this.inner,(t,n)=>{for(const[s,i]of n)e(s,i)})}isEmpty(){return fd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=new de(F.comparator);function Qe(){return FI}const Sd=new de(F.comparator);function Gr(...r){let e=Sd;for(const t of r)e=e.insert(t.key,t);return e}function Cd(r){let e=Sd;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function ot(){return Yr()}function Dd(){return Yr()}function Yr(){return new Ht(r=>r.toString(),(r,e)=>r.isEqual(e))}const UI=new de(F.comparator),jI=new ie(F.comparator);function Q(...r){let e=jI;for(const t of r)e=e.add(t);return e}const BI=new ie(W);function qI(){return BI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ss(e)?"-0":e}}function xd(r){return{integerValue:""+r}}function $I(r,e){return nI(e)?xd(e):ka(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this._=void 0}}function GI(r,e,t){return r instanceof us?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ca(i)&&(i=Da(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):r instanceof rr?Nd(r,e):r instanceof sr?Vd(r,e):function(s,i){const o=kd(s,i),c=nu(o)+nu(s.Pe);return Xo(o)&&Xo(s.Pe)?xd(c):ka(s.serializer,c)}(r,e)}function zI(r,e,t){return r instanceof rr?Nd(r,e):r instanceof sr?Vd(r,e):t}function kd(r,e){return r instanceof hs?function(n){return Xo(n)||function(i){return!!i&&"doubleValue"in i}(n)}(e)?e:{integerValue:0}:null}class us extends Bi{}class rr extends Bi{constructor(e){super(),this.elements=e}}function Nd(r,e){const t=Od(e);for(const n of r.elements)t.some(s=>lt(s,n))||t.push(n);return{arrayValue:{values:t}}}class sr extends Bi{constructor(e){super(),this.elements=e}}function Vd(r,e){let t=Od(e);for(const n of r.elements)t=t.filter(s=>!lt(s,n));return{arrayValue:{values:t}}}class hs extends Bi{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function nu(r){return he(r.integerValue||r.doubleValue)}function Od(r){return cs(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,t){this.field=e,this.transform=t}}function WI(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof rr&&s instanceof rr||n instanceof sr&&s instanceof sr?Zn(n.elements,s.elements,lt):n instanceof hs&&s instanceof hs?lt(n.Pe,s.Pe):n instanceof us&&s instanceof us}(r.transform,e.transform)}class HI{constructor(e,t){this.version=e,this.transformResults=t}}class Ue{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ue}static exists(e){return new Ue(void 0,e)}static updateTime(e){return new Ue(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ii(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class qi{}function Md(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new $i(r.key,Ue.none()):new dr(r.key,r.data,Ue.none());{const t=r.data,n=Ve.empty();let s=new ie(me.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new At(r.key,n,new ze(s.toArray()),Ue.none())}}function QI(r,e,t){r instanceof dr?function(s,i,o){const c=s.value.clone(),l=su(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(r,e,t):r instanceof At?function(s,i,o){if(!ii(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=su(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Ld(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(r,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Zr(r,e,t,n){return r instanceof dr?function(i,o,c,l){if(!ii(i.precondition,o))return c;const h=i.value.clone(),f=iu(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof At?function(i,o,c,l){if(!ii(i.precondition,o))return c;const h=iu(i.fieldTransforms,l,o),f=o.data;return f.setAll(Ld(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(r,e,t,n):function(i,o,c){return ii(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(r,e,t)}function XI(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=kd(n.transform,s||null);i!=null&&(t===null&&(t=Ve.empty()),t.set(n.field,i))}return t||null}function ru(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Zn(n,s,(i,o)=>WI(i,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class dr extends qi{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class At extends qi{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ld(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function su(r,e,t){const n=new Map;j(r.length===t.length);for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,c=e.data.field(i.field);n.set(i.field,zI(o,c,t[s]))}return n}function iu(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,GI(i,o,e))}return n}class $i extends qi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Fd extends qi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&QI(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Zr(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Zr(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Dd();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=Md(o,c);l!==null&&n.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(q.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Q())}isEqual(e){return this.batchId===e.batchId&&Zn(this.mutations,e.mutations,(t,n)=>ru(t,n))&&Zn(this.baseMutations,e.baseMutations,(t,n)=>ru(t,n))}}class Va{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){j(e.mutations.length===n.length);let s=function(){return UI}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new Va(e,t,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve,Z;function YI(r){switch(r){default:return U();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function Ud(r){if(r===void 0)return Fe("GRPC error has no .code"),D.UNKNOWN;switch(r){case ve.OK:return D.OK;case ve.CANCELLED:return D.CANCELLED;case ve.UNKNOWN:return D.UNKNOWN;case ve.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case ve.INTERNAL:return D.INTERNAL;case ve.UNAVAILABLE:return D.UNAVAILABLE;case ve.UNAUTHENTICATED:return D.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case ve.NOT_FOUND:return D.NOT_FOUND;case ve.ALREADY_EXISTS:return D.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return D.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case ve.ABORTED:return D.ABORTED;case ve.OUT_OF_RANGE:return D.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return D.UNIMPLEMENTED;case ve.DATA_LOSS:return D.DATA_LOSS;default:return U()}}(Z=ve||(ve={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=new hn([4294967295,4294967295],0);function ou(r){const e=ZI().encode(r),t=new Xh;return t.update(e),new Uint8Array(t.digest())}function au(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new hn([t,n],0),new hn([s,i],0)]}class Ma{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new zr(`Invalid padding: ${t}`);if(n<0)throw new zr(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new zr(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new zr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=hn.fromNumber(this.Ie)}Ee(e,t,n){let s=e.add(t.multiply(hn.fromNumber(n)));return s.compare(ev)===1&&(s=new hn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=ou(e),[n,s]=au(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(n,s,i);if(!this.de(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ma(i,s,t);return n.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const t=ou(e),[n,s]=au(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(n,s,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class zr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,Es.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Gi(q.min(),s,new de(W),Qe(),Q())}}class Es{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Es(n,t,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,t,n,s){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=s}}class jd{constructor(e,t){this.targetId=e,this.me=t}}class Bd{constructor(e,t,n=Te.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class cu{constructor(){this.fe=0,this.ge=uu(),this.pe=Te.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Q(),t=Q(),n=Q();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:U()}}),new Es(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=uu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,j(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class tv{constructor(e){this.Le=e,this.Be=new Map,this.ke=Qe(),this.qe=lu(),this.Qe=new de(W)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:U()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,n=e.me.count,s=this.Je(t);if(s){const i=s.target;if(vi(i))if(n===0){const o=new F(i.path);this.Ue(t,o,ge.newNoDocument(o,q.min()))}else j(n===1);else{const o=this.Ye(t);if(o!==n){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=$t(n).toUint8Array()}catch(l){if(l instanceof md)return _n("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Ma(o,s,i)}catch(l){return _n(l instanceof zr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let s=0;return n.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&vi(c.target)){const l=new F(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,ge.newNoDocument(l,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let n=Q();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Gi(e,t,this.Qe,this.ke,n);return this.ke=Qe(),this.qe=lu(),this.Qe=new de(W),s}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new cu,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ie(W),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||N("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new cu),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function lu(){return new de(F.comparator)}function uu(){return new de(F.comparator)}const nv={asc:"ASCENDING",desc:"DESCENDING"},rv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sv={and:"AND",or:"OR"};class iv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function na(r,e){return r.useProto3Json||Li(e)?e:{value:e}}function ir(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qd(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function ov(r,e){return ir(r,e.toTimestamp())}function Be(r){return j(!!r),q.fromTimestamp(function(t){const n=Et(t);return new le(n.seconds,n.nanos)}(r))}function La(r,e){return ra(r,e).canonicalString()}function ra(r,e){const t=function(s){return new re(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function $d(r){const e=re.fromString(r);return j(Yd(e)),e}function Ti(r,e){return La(r.databaseId,e.path)}function dn(r,e){const t=$d(e);if(t.get(1)!==r.databaseId.projectId)throw new L(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new L(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new F(Kd(t))}function Gd(r,e){return La(r.databaseId,e)}function zd(r){const e=$d(r);return e.length===4?re.emptyPath():Kd(e)}function sa(r){return new re(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Kd(r){return j(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function hu(r,e,t){return{name:Ti(r,e),fields:t.value.mapValue.fields}}function av(r,e,t){const n=dn(r,e.name),s=Be(e.updateTime),i=e.createTime?Be(e.createTime):q.min(),o=new Ve({mapValue:{fields:e.fields}}),c=ge.newFoundDocument(n,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function cv(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(j(f===void 0||typeof f=="string"),Te.fromBase64String(f||"")):(j(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Te.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?D.UNKNOWN:Ud(h.code);return new L(f,h.message||"")}(o);t=new Bd(n,s,i,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=dn(r,n.document.name),i=Be(n.document.updateTime),o=n.document.createTime?Be(n.document.createTime):q.min(),c=new Ve({mapValue:{fields:n.document.fields}}),l=ge.newFoundDocument(s,i,o,c),h=n.targetIds||[],f=n.removedTargetIds||[];t=new oi(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=dn(r,n.document),i=n.readTime?Be(n.readTime):q.min(),o=ge.newNoDocument(s,i),c=n.removedTargetIds||[];t=new oi([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=dn(r,n.document),i=n.removedTargetIds||[];t=new oi([],i,s,null)}else{if(!("filter"in e))return U();{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new JI(s,i),c=n.targetId;t=new jd(c,o)}}return t}function wi(r,e){let t;if(e instanceof dr)t={update:hu(r,e.key,e.value)};else if(e instanceof $i)t={delete:Ti(r,e.key)};else if(e instanceof At)t={update:hu(r,e.key,e.data),updateMask:mv(e.fieldMask)};else{if(!(e instanceof Fd))return U();t={verify:Ti(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,o){const c=o.transform;if(c instanceof us)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof rr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof sr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof hs)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw U()}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ov(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U()}(r,e.precondition)),t}function ia(r,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?Ue.updateTime(Be(i.updateTime)):i.exists!==void 0?Ue.exists(i.exists):Ue.none()}(e.currentDocument):Ue.none(),n=e.updateTransforms?e.updateTransforms.map(s=>function(o,c){let l=null;if("setToServerValue"in c)j(c.setToServerValue==="REQUEST_TIME"),l=new us;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];l=new rr(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];l=new sr(f)}else"increment"in c?l=new hs(o,c.increment):U();const h=me.fromServerFormat(c.fieldPath);return new KI(h,l)}(r,s)):[];if(e.update){e.update.name;const s=dn(r,e.update.name),i=new Ve({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const h=l.fieldPaths||[];return new ze(h.map(f=>me.fromServerFormat(f)))}(e.updateMask);return new At(s,i,o,t,n)}return new dr(s,i,t,n)}if(e.delete){const s=dn(r,e.delete);return new $i(s,t)}if(e.verify){const s=dn(r,e.verify);return new Fd(s,t)}return U()}function lv(r,e){return r&&r.length>0?(j(e!==void 0),r.map(t=>function(s,i){let o=s.updateTime?Be(s.updateTime):Be(i);return o.isEqual(q.min())&&(o=Be(i)),new HI(o,s.transformResults||[])}(t,e))):[]}function Wd(r,e){return{documents:[Gd(r,e.path)]}}function Hd(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Gd(r,s);const i=function(h){if(h.length!==0)return Jd(se.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:Bn(_.field),direction:hv(_.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=na(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function Qd(r){let e=zd(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){j(n===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const _=Xd(p);return _ instanceof se&&xa(_)?_.getFilters():[_]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(_=>function(C){return new ls(qn(C.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(_))}(t.orderBy));let c=null;t.limit&&(c=function(p){let _;return _=typeof p=="object"?p.value:p,Li(_)?null:_}(t.limit));let l=null;t.startAt&&(l=function(p){const _=!!p.before,A=p.values||[];return new tr(A,_)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const _=!p.before,A=p.values||[];return new tr(A,_)}(t.endAt)),VI(e,s,o,i,c,"F",l,h)}function uv(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Xd(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=qn(t.unaryFilter.field);return Y.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=qn(t.unaryFilter.field);return Y.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=qn(t.unaryFilter.field);return Y.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=qn(t.unaryFilter.field);return Y.create(o,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(r):r.fieldFilter!==void 0?function(t){return Y.create(qn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return se.create(t.compositeFilter.filters.map(n=>Xd(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return U()}}(t.compositeFilter.op))}(r):U()}function hv(r){return nv[r]}function dv(r){return rv[r]}function fv(r){return sv[r]}function Bn(r){return{fieldPath:r.canonicalString()}}function qn(r){return me.fromServerFormat(r.fieldPath)}function Jd(r){return r instanceof Y?function(t){if(t.op==="=="){if(Hl(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NAN"}};if(Wl(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Hl(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NOT_NAN"}};if(Wl(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bn(t.field),op:dv(t.op),value:t.value}}}(r):r instanceof se?function(t){const n=t.getFilters().map(s=>Jd(s));return n.length===1?n[0]:{compositeFilter:{op:fv(t.op),filters:n}}}(r):U()}function mv(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Yd(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,t,n,s,i=q.min(),o=q.min(),c=Te.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new gt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new gt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e){this.ct=e}}function pv(r,e){let t;if(e.document)t=av(r.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=F.fromSegments(e.noDocument.path),s=Tn(e.noDocument.readTime);t=ge.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return U();{const n=F.fromSegments(e.unknownDocument.path),s=Tn(e.unknownDocument.version);t=ge.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime(function(s){const i=new le(s[0],s[1]);return q.fromTimestamp(i)}(e.readTime)),t}function du(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Ai(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(i,o){return{name:Ti(i,o.key),fields:o.data.value.mapValue.fields,updateTime:ir(i,o.version.toTimestamp()),createTime:ir(i,o.createTime.toTimestamp())}}(r.ct,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:En(e.version)};else{if(!e.isUnknownDocument())return U();n.unknownDocument={path:t.path.toArray(),version:En(e.version)}}return n}function Ai(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function En(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Tn(r){const e=new le(r.seconds,r.nanoseconds);return q.fromTimestamp(e)}function cn(r,e){const t=(e.baseMutations||[]).map(i=>ia(r.ct,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map(i=>ia(r.ct,i)),s=le.fromMillis(e.localWriteTimeMs);return new Na(e.batchId,s,t,n)}function Kr(r){const e=Tn(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?Tn(r.lastLimboFreeSnapshotVersion):q.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){return j(i.documents.length===1),Ze(Ui(zd(i.documents[0])))}(r.query):function(i){return Ze(Qd(i))}(r.query),new gt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,Te.fromBase64String(r.resumeToken))}function ef(r,e){const t=En(e.snapshotVersion),n=En(e.lastLimboFreeSnapshotVersion);let s;s=vi(e.target)?Wd(r.ct,e.target):Hd(r.ct,e.target)._t;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:vn(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function tf(r){const e=Qd({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ta(e,e.limit,"L"):e}function xo(r,e){return new Oa(e.largestBatchId,ia(r.ct,e.overlayMutation))}function fu(r,e){const t=e.path.lastSegment();return[r,je(e.path.popLast()),t]}function mu(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:En(n.readTime),documentKey:je(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{getBundleMetadata(e,t){return pu(e).get(t).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:Tn(i.createTime),version:i.version}}(n)})}saveBundleMetadata(e,t){return pu(e).put(function(s){return{bundleId:s.id,createTime:En(Be(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return gu(e).get(t).next(n=>{if(n)return function(i){return{name:i.name,query:tf(i.bundledQuery),readTime:Tn(i.readTime)}}(n)})}saveNamedQuery(e,t){return gu(e).put(function(s){return{name:s.name,readTime:En(Be(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function pu(r){return Ae(r,"bundles")}function gu(r){return Ae(r,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const n=t.uid||"";return new zi(e,n)}getOverlay(e,t){return Nr(e).get(fu(this.userId,t)).next(n=>n?xo(this.serializer,n):null)}getOverlays(e,t){const n=ot();return P.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){const s=[];return n.forEach((i,o)=>{const c=new Oa(t,o);s.push(this.ht(e,c))}),P.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach(o=>s.add(je(o.getCollectionPath())));const i=[];return s.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);i.push(Nr(e).j("collectionPathOverlayIndex",c))}),P.waitFor(i)}getOverlaysForCollection(e,t,n){const s=ot(),i=je(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Nr(e).U("collectionPathOverlayIndex",o).next(c=>{for(const l of c){const h=xo(this.serializer,l);s.set(h.getKey(),h)}return s})}getOverlaysForCollectionGroup(e,t,n,s){const i=ot();let o;const c=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Nr(e).J({index:"collectionGroupOverlayIndex",range:c},(l,h,f)=>{const p=xo(this.serializer,h);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):f.done()}).next(()=>i)}ht(e,t){return Nr(e).put(function(s,i,o){const[c,l,h]=fu(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:wi(s.ct,o.mutation)}}(this.serializer,this.userId,t))}}function Nr(r){return Ae(r,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{Pt(e){return Ae(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?Te.fromUint8Array(n):Te.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(he(e.integerValue));else if("doubleValue"in e){const n=he(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),ss(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),typeof n=="string"&&(n=Et(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt($t(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?pd(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Fi(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):U()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const n=e.fields||{};this.dt(t,55);for(const s of Object.keys(n))this.Vt(s,t),this.Tt(n[s],t)}wt(e,t){var n,s;const i=e.fields||{};this.dt(t,53);const o="value",c=((s=(n=i[o].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.dt(t,15),t.At(he(c)),this.Vt(o,t),this.Tt(i[o],t)}bt(e,t){const n=e.values||[];this.dt(t,50);for(const s of n)this.Tt(s,t)}yt(e,t){this.dt(t,37),F.fromName(e).path.forEach(n=>{this.dt(t,60),this.Dt(n,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}ln.vt=new ln;function yv(r){if(r===0)return 8;let e=0;return!(r>>4)&&(e+=4,r<<=4),!(r>>6)&&(e+=2,r<<=2),!(r>>7)&&(e+=1),e}function _u(r){const e=64-function(n){let s=0;for(let i=0;i<8;++i){const o=yv(255&n[i]);if(s+=o,o!==8)break}return s}(r);return Math.ceil(e/8)}class Iv{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ft(n.value),n=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ot(n.value),n=t.next();this.Nt()}Lt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ft(n);else if(n<2048)this.Ft(960|n>>>6),this.Ft(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|n>>>12),this.Ft(128|63&n>>>6),this.Ft(128|63&n);else{const s=t.codePointAt(0);this.Ft(240|s>>>18),this.Ft(128|63&s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s)}}this.Mt()}Bt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ot(n);else if(n<2048)this.Ot(960|n>>>6),this.Ot(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|n>>>12),this.Ot(128|63&n>>>6),this.Ot(128|63&n);else{const s=t.codePointAt(0);this.Ot(240|s>>>18),this.Ot(128|63&s>>>12),this.Ot(128|63&s>>>6),this.Ot(128|63&s)}}this.Nt()}kt(e){const t=this.qt(e),n=_u(t);this.Qt(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Kt(e){const t=this.qt(e),n=_u(t);this.Qt(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),n=(128&t[0])!=0;t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class vv{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class Ev{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Vr{constructor(){this.jt=new Iv,this.Ht=new vv(this.jt),this.Jt=new Ev(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,t,n,s){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=s}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new un(this.indexId,this.documentKey,this.arrayValue,n)}}function Ct(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=yu(r.arrayValue,e.arrayValue),t!==0?t:(t=yu(r.directionalValue,e.directionalValue),t!==0?t:F.comparator(r.documentKey,e.documentKey)))}function yu(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e){this.Xt=new ie((t,n)=>me.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const n=t;n.isInequality()?this.Xt=this.Xt.add(n):this.tn.push(n)}}get nn(){return this.Xt.size>1}rn(e){if(j(e.collectionGroup===this.collectionId),this.nn)return!1;const t=Wo(e);if(t!==void 0&&!this.sn(t))return!1;const n=on(e);let s=new Set,i=0,o=0;for(;i<n.length&&this.sn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Xt.size>0){const c=this.Xt.getIterator().getNext();if(!s.has(c.field.canonicalString())){const l=n[i];if(!this.on(c,l)||!this._n(this.en[o++],l))return!1}++i}for(;i<n.length;++i){const c=n[i];if(o>=this.en.length||!this._n(this.en[o++],c))return!1}return!0}an(){if(this.nn)return null;let e=new ie(me.comparator);const t=[];for(const n of this.tn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new ti(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new ti(n.field,0))}for(const n of this.en)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new ti(n.field,n.dir==="asc"?0:1)));return new Ii(Ii.UNKNOWN_ID,this.collectionId,t,rs.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(r){var e,t;if(j(r instanceof Y||r instanceof se),r instanceof Y){if(r instanceof Ad){const s=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>Y.create(r.field,"==",i)))||[];return se.create(s,"or")}return r}const n=r.filters.map(s=>nf(s));return se.create(n,r.op)}function Tv(r){if(r.getFilters().length===0)return[];const e=ca(nf(r));return j(rf(e)),oa(e)||aa(e)?[e]:e.getFilters()}function oa(r){return r instanceof Y}function aa(r){return r instanceof se&&xa(r)}function rf(r){return oa(r)||aa(r)||function(t){if(t instanceof se&&Jo(t)){for(const n of t.getFilters())if(!oa(n)&&!aa(n))return!1;return!0}return!1}(r)}function ca(r){if(j(r instanceof Y||r instanceof se),r instanceof Y)return r;if(r.filters.length===1)return ca(r.filters[0]);const e=r.filters.map(n=>ca(n));let t=se.create(e,r.op);return t=bi(t),rf(t)?t:(j(t instanceof se),j(nr(t)),j(t.filters.length>1),t.filters.reduce((n,s)=>Fa(n,s)))}function Fa(r,e){let t;return j(r instanceof Y||r instanceof se),j(e instanceof Y||e instanceof se),t=r instanceof Y?e instanceof Y?function(s,i){return se.create([s,i],"and")}(r,e):vu(r,e):e instanceof Y?vu(e,r):function(s,i){if(j(s.filters.length>0&&i.filters.length>0),nr(s)&&nr(i))return Ed(s,i.getFilters());const o=Jo(s)?s:i,c=Jo(s)?i:s,l=o.filters.map(h=>Fa(h,c));return se.create(l,"or")}(r,e),bi(t)}function vu(r,e){if(nr(e))return Ed(e,r.getFilters());{const t=e.filters.map(n=>Fa(r,n));return se.create(t,"or")}}function bi(r){if(j(r instanceof Y||r instanceof se),r instanceof Y)return r;const e=r.getFilters();if(e.length===1)return bi(e[0]);if(Id(r))return r;const t=e.map(s=>bi(s)),n=[];return t.forEach(s=>{s instanceof Y?n.push(s):s instanceof se&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:se.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(){this.un=new Ua}addToCollectionParentIndex(e,t){return this.un.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(Xe.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(Xe.min())}updateCollectionGroup(e,t,n){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class Ua{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new ie(re.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new ie(re.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=new Uint8Array(0);class Av{constructor(e,t){this.databaseId=t,this.cn=new Ua,this.ln=new Ht(n=>vn(n),(n,s)=>Is(n,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const i={collectionId:n,parent:je(s)};return Eu(e).put(i)}return P.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[sd(t),""],!1,!0);return Eu(e).U(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;n.push(it(o.parent))}return n})}addFieldIndex(e,t){const n=Or(e),s=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete s.indexId;const i=n.add(s);if(t.indexState){const o=Ln(e);return i.next(c=>{o.put(mu(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=Or(e),s=Ln(e),i=Mn(e);return n.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Or(e),n=Mn(e),s=Ln(e);return t.j().next(()=>n.j()).next(()=>s.j())}createTargetIndexes(e,t){return P.forEach(this.hn(t),n=>this.getIndexType(e,n).next(s=>{if(s===0||s===1){const i=new Iu(n).an();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const n=Mn(e);let s=!0;const i=new Map;return P.forEach(this.hn(t),o=>this.Pn(e,o).next(c=>{s&&(s=!!c),i.set(o,c)})).next(()=>{if(s){let o=Q();const c=[];return P.forEach(i,(l,h)=>{N("IndexedDbIndexManager",`Using index ${function(B){return`id=${B.indexId}|cg=${B.collectionGroup}|f=${B.fields.map(X=>`${X.fieldPath}:${X.kind}`).join(",")}`}(l)} to execute ${vn(t)}`);const f=function(B,X){const ne=Wo(X);if(ne===void 0)return null;for(const H of Ei(B,ne.fieldPath))switch(H.op){case"array-contains-any":return H.value.arrayValue.values||[];case"array-contains":return[H.value]}return null}(h,l),p=function(B,X){const ne=new Map;for(const H of on(X))for(const E of Ei(B,H.fieldPath))switch(E.op){case"==":case"in":ne.set(H.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return ne.set(H.fieldPath.canonicalString(),E.value),Array.from(ne.values())}return null}(h,l),_=function(B,X){const ne=[];let H=!0;for(const E of on(X)){const g=E.kind===0?Zl(B,E.fieldPath,B.startAt):eu(B,E.fieldPath,B.startAt);ne.push(g.value),H&&(H=g.inclusive)}return new tr(ne,H)}(h,l),A=function(B,X){const ne=[];let H=!0;for(const E of on(X)){const g=E.kind===0?eu(B,E.fieldPath,B.endAt):Zl(B,E.fieldPath,B.endAt);ne.push(g.value),H&&(H=g.inclusive)}return new tr(ne,H)}(h,l),C=this.In(l,h,_),x=this.In(l,h,A),k=this.Tn(l,h,p),$=this.En(l.indexId,f,C,_.inclusive,x,A.inclusive,k);return P.forEach($,V=>n.G(V,t.limit).next(B=>{B.forEach(X=>{const ne=F.fromSegments(X.documentKey);o.has(ne)||(o=o.add(ne),c.push(ne))})}))}).next(()=>c)}return P.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=Tv(se.create(e.filters,"and")).map(n=>Zo(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,n,s,i,o,c){const l=(t!=null?t.length:1)*Math.max(n.length,i.length),h=l/(t!=null?t.length:1),f=[];for(let p=0;p<l;++p){const _=t?this.dn(t[p/h]):Ks,A=this.An(e,_,n[p%h],s),C=this.Rn(e,_,i[p%h],o),x=c.map(k=>this.An(e,_,k,!0));f.push(...this.createRange(A,C,x))}return f}An(e,t,n,s){const i=new un(e,F.empty(),t,n);return s?i:i.Zt()}Rn(e,t,n,s){const i=new un(e,F.empty(),t,n);return s?i.Zt():i}Pn(e,t){const n=new Iu(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const c of i)n.rn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let n=2;const s=this.hn(t);return P.forEach(s,i=>this.Pn(e,i).next(o=>{o?n!==0&&o.fields.length<function(l){let h=new ie(me.comparator),f=!1;for(const p of l.filters)for(const _ of p.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?f=!0:h=h.add(_.field));for(const p of l.orderBy)p.field.isKeyField()||(h=h.add(p.field));return h.size+(f?1:0)}(i)&&(n=1):n=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&n===2?1:n)}Vn(e,t){const n=new Vr;for(const s of on(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=n.Yt(s.kind);ln.vt.It(i,o)}return n.zt()}dn(e){const t=new Vr;return ln.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const n=new Vr;return ln.vt.It(as(this.databaseId,t),n.Yt(function(i){const o=on(i);return o.length===0?0:o[o.length-1].kind}(e))),n.zt()}Tn(e,t,n){if(n===null)return[];let s=[];s.push(new Vr);let i=0;for(const o of on(e)){const c=n[i++];for(const l of s)if(this.fn(t,o.fieldPath)&&cs(c))s=this.gn(s,o,c);else{const h=l.Yt(o.kind);ln.vt.It(c,h)}}return this.pn(s)}In(e,t,n){return this.Tn(e,t,n.position)}pn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].zt();return t}gn(e,t,n){const s=[...e],i=[];for(const o of n.arrayValue.values||[])for(const c of s){const l=new Vr;l.seed(c.zt()),ln.vt.It(o,l.Yt(t.kind)),i.push(l)}return i}fn(e,t){return!!e.filters.find(n=>n instanceof Y&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=Or(e),s=Ln(e);return(t?n.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.U()).next(i=>{const o=[];return P.forEach(i,c=>s.get([c.indexId,this.uid]).next(l=>{o.push(function(f,p){const _=p?new rs(p.sequenceNumber,new Xe(Tn(p.readTime),new F(it(p.documentKey)),p.largestBatchId)):rs.empty(),A=f.fields.map(([C,x])=>new ti(me.fromServerFormat(C),x));return new Ii(f.indexId,f.collectionGroup,A,_)}(c,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:W(n.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const s=Or(e),i=Ln(e);return this.yn(e).next(o=>s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>P.forEach(c,l=>i.put(mu(l.indexId,this.uid,o,n)))))}updateIndexEntries(e,t){const n=new Map;return P.forEach(t,(s,i)=>{const o=n.get(s.collectionGroup);return(o?P.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(c=>(n.set(s.collectionGroup,c),P.forEach(c,l=>this.wn(e,s,l).next(h=>{const f=this.Sn(i,l);return h.isEqual(f)?P.resolve():this.bn(e,i,l,h,f)}))))})}Dn(e,t,n,s){return Mn(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.mn(n,t.key),documentKey:t.key.path.toArray()})}vn(e,t,n,s){return Mn(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.mn(n,t.key),t.key.path.toArray()])}wn(e,t,n){const s=Mn(e);let i=new ie(Ct);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.mn(n,t)])},(o,c)=>{i=i.add(new un(n.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>i)}Sn(e,t){let n=new ie(Ct);const s=this.Vn(t,e);if(s==null)return n;const i=Wo(t);if(i!=null){const o=e.data.field(i.fieldPath);if(cs(o))for(const c of o.arrayValue.values||[])n=n.add(new un(t.indexId,e.key,this.dn(c),s))}else n=n.add(new un(t.indexId,e.key,Ks,s));return n}bn(e,t,n,s,i){N("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(l,h,f,p,_){const A=l.getIterator(),C=h.getIterator();let x=On(A),k=On(C);for(;x||k;){let $=!1,V=!1;if(x&&k){const B=f(x,k);B<0?V=!0:B>0&&($=!0)}else x!=null?V=!0:$=!0;$?(p(k),k=On(C)):V?(_(x),x=On(A)):(x=On(A),k=On(C))}}(s,i,Ct,c=>{o.push(this.Dn(e,t,n,c))},c=>{o.push(this.vn(e,t,n,c))}),P.waitFor(o)}yn(e){let t=1;return Ln(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((o,c)=>Ct(o,c)).filter((o,c,l)=>!c||Ct(o,l[c-1])!==0);const s=[];s.push(e);for(const o of n){const c=Ct(o,e),l=Ct(o,t);if(c===0)s[0]=e.Zt();else if(c>0&&l<0)s.push(o),s.push(o.Zt());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Cn(s[o],s[o+1]))return[];const c=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,Ks,[]],l=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,Ks,[]];i.push(IDBKeyRange.bound(c,l))}return i}Cn(e,t){return Ct(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Tu)}getMinOffset(e,t){return P.mapArray(this.hn(t),n=>this.Pn(e,n).next(s=>s||U())).next(Tu)}}function Eu(r){return Ae(r,"collectionParents")}function Mn(r){return Ae(r,"indexEntries")}function Or(r){return Ae(r,"indexConfiguration")}function Ln(r){return Ae(r,"indexState")}function Tu(r){j(r.length!==0);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Ra(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new Xe(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ge{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Ge(e,Ge.DEFAULT_COLLECTION_PERCENTILE,Ge.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(r,e,t){const n=r.store("mutations"),s=r.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const l=n.J({range:o},(f,p,_)=>(c++,_.delete()));i.push(l.next(()=>{j(c===1)}));const h=[];for(const f of t.mutations){const p=ld(e,f.key.path,t.batchId);i.push(s.delete(p)),h.push(f.key)}return P.waitFor(i).next(()=>h)}function Ri(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw U();e=r.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ge.DEFAULT_COLLECTION_PERCENTILE=10,Ge.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ge.DEFAULT=new Ge(41943040,Ge.DEFAULT_COLLECTION_PERCENTILE,Ge.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ge.DISABLED=new Ge(-1,0,0);class Ki{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.Fn={}}static lt(e,t,n,s){j(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Ki(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Dt(e).J({index:"userMutationsIndex",range:n},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,n,s){const i=$n(e),o=Dt(e);return o.add({}).next(c=>{j(typeof c=="number");const l=new Na(c,t,n,s),h=function(A,C,x){const k=x.baseMutations.map(V=>wi(A.ct,V)),$=x.mutations.map(V=>wi(A.ct,V));return{userId:C,batchId:x.batchId,localWriteTimeMs:x.localWriteTime.toMillis(),baseMutations:k,mutations:$}}(this.serializer,this.userId,l),f=[];let p=new ie((_,A)=>W(_.canonicalString(),A.canonicalString()));for(const _ of s){const A=ld(this.userId,_.key.path,c);p=p.add(_.key.path.popLast()),f.push(o.put(h)),f.push(i.put(A,sI))}return p.forEach(_=>{f.push(this.indexManager.addToCollectionParentIndex(e,_))}),e.addOnCommittedListener(()=>{this.Fn[c]=l.keys()}),P.waitFor(f).next(()=>l)})}lookupMutationBatch(e,t){return Dt(e).get(t).next(n=>n?(j(n.userId===this.userId),cn(this.serializer,n)):null)}Mn(e,t){return this.Fn[t]?P.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const s=n.keys();return this.Fn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Dt(e).J({index:"userMutationsIndex",range:s},(o,c,l)=>{c.userId===this.userId&&(j(c.batchId>=n),i=cn(this.serializer,c)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Dt(e).J({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{n=i.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Dt(e).U("userMutationsIndex",t).next(n=>n.map(s=>cn(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=ni(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return $n(e).J({range:s},(o,c,l)=>{const[h,f,p]=o,_=it(f);if(h===this.userId&&t.path.isEqual(_))return Dt(e).get(p).next(A=>{if(!A)throw U();j(A.userId===this.userId),i.push(cn(this.serializer,A))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ie(W);const s=[];return t.forEach(i=>{const o=ni(this.userId,i.path),c=IDBKeyRange.lowerBound(o),l=$n(e).J({range:c},(h,f,p)=>{const[_,A,C]=h,x=it(A);_===this.userId&&i.path.isEqual(x)?n=n.add(C):p.done()});s.push(l)}),P.waitFor(s).next(()=>this.xn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=ni(this.userId,n),o=IDBKeyRange.lowerBound(i);let c=new ie(W);return $n(e).J({range:o},(l,h,f)=>{const[p,_,A]=l,C=it(_);p===this.userId&&n.isPrefixOf(C)?C.length===s&&(c=c.add(A)):f.done()}).next(()=>this.xn(e,c))}xn(e,t){const n=[],s=[];return t.forEach(i=>{s.push(Dt(e).get(i).next(o=>{if(o===null)throw U();j(o.userId===this.userId),n.push(cn(this.serializer,o))}))}),P.waitFor(s).next(()=>n)}removeMutationBatch(e,t){return sf(e._e,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),P.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return P.resolve();const n=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return $n(e).J({range:n},(i,o,c)=>{if(i[0]===this.userId){const l=it(i[1]);s.push(l)}else c.done()}).next(()=>{j(s.length===0)})})}containsKey(e,t){return of(e,this.userId,t)}Nn(e){return af(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function of(r,e,t){const n=ni(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let o=!1;return $n(r).J({range:i,H:!0},(c,l,h)=>{const[f,p,_]=c;f===e&&p===s&&(o=!0),h.done()}).next(()=>o)}function Dt(r){return Ae(r,"mutations")}function $n(r){return Ae(r,"documentMutations")}function af(r){return Ae(r,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new wn(0)}static kn(){return new wn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const n=new wn(t.highestTargetId);return t.highestTargetId=n.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>q.fromTimestamp(new le(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.qn(e).next(s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Qn(e,s)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(n=>(n.targetCount+=1,this.$n(t,n),this.Qn(e,n))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Fn(e).delete(t.targetId)).next(()=>this.qn(e)).next(n=>(j(n.targetCount>0),n.targetCount-=1,this.Qn(e,n)))}removeTargets(e,t,n){let s=0;const i=[];return Fn(e).J((o,c)=>{const l=Kr(c);l.sequenceNumber<=t&&n.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))}).next(()=>P.waitFor(i)).next(()=>s)}forEachTarget(e,t){return Fn(e).J((n,s)=>{const i=Kr(s);t(i)})}qn(e){return Au(e).get("targetGlobalKey").next(t=>(j(t!==null),t))}Qn(e,t){return Au(e).put("targetGlobalKey",t)}Kn(e,t){return Fn(e).put(ef(this.serializer,t))}$n(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const n=vn(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Fn(e).J({range:s,index:"queryTargetsIndex"},(o,c,l)=>{const h=Kr(c);Is(t,h.target)&&(i=h,l.done())}).next(()=>i)}addMatchingKeys(e,t,n){const s=[],i=Ot(e);return t.forEach(o=>{const c=je(o.path);s.push(i.put({targetId:n,path:c})),s.push(this.referenceDelegate.addReference(e,n,o))}),P.waitFor(s)}removeMatchingKeys(e,t,n){const s=Ot(e);return P.forEach(t,i=>{const o=je(i.path);return P.waitFor([s.delete([n,o]),this.referenceDelegate.removeReference(e,n,i)])})}removeMatchingKeysForTargetId(e,t){const n=Ot(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=Ot(e);let i=Q();return s.J({range:n,H:!0},(o,c,l)=>{const h=it(o[1]),f=new F(h);i=i.add(f)}).next(()=>i)}containsKey(e,t){const n=je(t.path),s=IDBKeyRange.bound([n],[sd(n)],!1,!0);let i=0;return Ot(e).J({index:"documentTargetsIndex",H:!0,range:s},([o,c],l,h)=>{o!==0&&(i++,h.done())}).next(()=>i>0)}ot(e,t){return Fn(e).get(t).next(n=>n?Kr(n):null)}}function Fn(r){return Ae(r,"targets")}function Au(r){return Ae(r,"targetGlobal")}function Ot(r){return Ae(r,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu([r,e],[t,n]){const s=W(r,t);return s===0?W(e,n):s}class Rv{constructor(e){this.Un=e,this.buffer=new ie(bu),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();bu(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Pv{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){N("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Wt(t)?N("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await bn(t)}await this.Hn(3e5)})}}class Sv{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return P.resolve(Ye.oe);const n=new Rv(t);return this.Jn.forEachTarget(e,s=>n.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(e,s=>n.zn(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(wu)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wu):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let n,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(n=p,c=Date.now(),this.removeTargets(e,n,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,n))).next(p=>(h=Date.now(),Un()<=J.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Cv(r,e){return new Sv(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e,t){this.db=e,this.garbageCollector=Cv(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}er(e){let t=0;return this.Zn(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(n,s)=>t(s))}addReference(e,t,n){return Ws(e,n)}removeReference(e,t,n){return Ws(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Ws(e,t)}nr(e,t){return function(s,i){let o=!1;return af(s).Y(c=>of(s,c,i).next(l=>(l&&(o=!0),P.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.tr(e,(o,c)=>{if(c<=t){const l=this.nr(e,o).next(h=>{if(!h)return i++,n.getEntry(e,o).next(()=>(n.removeEntry(o,q.min()),Ot(e).delete(function(p){return[0,je(p.path)]}(o))))});s.push(l)}}).next(()=>P.waitFor(s)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Ws(e,t)}tr(e,t){const n=Ot(e);let s,i=Ye.oe;return n.J({index:"documentTargetsIndex"},([o,c],{path:l,sequenceNumber:h})=>{o===0?(i!==Ye.oe&&t(new F(it(s)),i),i=h,s=l):i=Ye.oe}).next(()=>{i!==Ye.oe&&t(new F(it(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ws(r,e){return Ot(r).put(function(n,s){return{targetId:0,path:je(n.path),sequenceNumber:s}}(e,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){this.changes=new Ht(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ge.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?P.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return nn(e).put(n)}removeEntry(e,t,n){return nn(e).delete(function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Ai(o),c[c.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.rr(e,n)))}getEntry(e,t){let n=ge.newInvalidDocument(t);return nn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Mr(t))},(s,i)=>{n=this.ir(t,i)}).next(()=>n)}sr(e,t){let n={size:0,document:ge.newInvalidDocument(t)};return nn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Mr(t))},(s,i)=>{n={document:this.ir(t,i),size:Ri(i)}}).next(()=>n)}getEntries(e,t){let n=Qe();return this._r(e,t,(s,i)=>{const o=this.ir(s,i);n=n.insert(s,o)}).next(()=>n)}ar(e,t){let n=Qe(),s=new de(F.comparator);return this._r(e,t,(i,o)=>{const c=this.ir(i,o);n=n.insert(i,c),s=s.insert(i,Ri(o))}).next(()=>({documents:n,ur:s}))}_r(e,t,n){if(t.isEmpty())return P.resolve();let s=new ie(Su);t.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(Mr(s.first()),Mr(s.last())),o=s.getIterator();let c=o.getNext();return nn(e).J({index:"documentKeyIndex",range:i},(l,h,f)=>{const p=F.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&Su(c,p)<0;)n(c,null),c=o.getNext();c&&c.isEqual(p)&&(n(c,h),c=o.hasNext()?o.getNext():null),c?f.$(Mr(c)):f.done()}).next(()=>{for(;c;)n(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,n,s,i){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),Ai(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return nn(e).U(IDBKeyRange.bound(c,l,!0)).next(h=>{i==null||i.incrementDocumentReadCount(h.length);let f=Qe();for(const p of h){const _=this.ir(F.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);_.isFoundDocument()&&(vs(t,_)||s.has(_.key))&&(f=f.insert(_.key,_))}return f})}getAllFromCollectionGroup(e,t,n,s){let i=Qe();const o=Pu(t,n),c=Pu(t,Xe.max());return nn(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,c,!0)},(l,h,f)=>{const p=this.ir(F.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);i=i.insert(p.key,p),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(e){return new kv(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Ru(e).get("remoteDocumentGlobalKey").next(t=>(j(!!t),t))}rr(e,t){return Ru(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const n=pv(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(q.min())))return n}return ge.newInvalidDocument(e)}}function lf(r){return new xv(r)}class kv extends cf{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new Ht(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(e){const t=[];let n=0,s=new ie((i,o)=>W(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const c=this.lr.get(i);if(t.push(this.cr.removeEntry(e,i,c.readTime)),o.isValidDocument()){const l=du(this.cr.serializer,o);s=s.add(i.path.popLast());const h=Ri(l);n+=h-c.size,t.push(this.cr.addEntry(e,i,l))}else if(n-=c.size,this.trackRemovals){const l=du(this.cr.serializer,o.convertToNoDocument(q.min()));t.push(this.cr.addEntry(e,i,l))}}),s.forEach(i=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.cr.updateMetadata(e,n)),P.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(n=>(this.lr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:n,ur:s})=>(s.forEach((i,o)=>{this.lr.set(i,{size:o,readTime:n.get(i).readTime})}),n))}}function Ru(r){return Ae(r,"remoteDocumentGlobal")}function nn(r){return Ae(r,"remoteDocumentsV14")}function Mr(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Pu(r,e){const t=e.documentKey.path.toArray();return[r,Ai(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Su(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=W(t[i],n[i]),s)return s;return s=W(t.length,n.length),s||(s=W(t[t.length-2],n[n.length-2]),s||W(t[t.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&Zr(n.mutation,s,ze.empty(),le.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,Q()).next(()=>n))}getLocalViewOfDocuments(e,t,n=Q()){const s=ot();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let o=Gr();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=ot();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Q()))}populateOverlays(e,t,n){const s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,n,s){let i=Qe();const o=Yr(),c=function(){return Yr()}();return t.forEach((l,h)=>{const f=n.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof At)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Zr(f.mutation,h,f.mutation.getFieldMask(),le.now())):o.set(h.key,ze.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var p;return c.set(h,new Nv(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){const n=Yr();let s=new de((o,c)=>o-c),i=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let f=n.get(l)||ze.empty();f=c.applyToLocalView(h,f),n.set(l,f);const p=(s.get(c.batchId)||Q()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=Dd();f.forEach(_=>{if(!i.has(_)){const A=Md(t.get(_),n.get(_));A!==null&&p.set(_,A),i=i.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return P.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return function(o){return F.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):bd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):P.resolve(ot());let c=-1,l=i;return o.next(h=>P.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?P.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{l=l.insert(f,_)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,Q())).next(f=>({batchId:c,changes:Cd(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new F(t)).next(n=>{let s=Gr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=Gr();return this.indexManager.getCollectionParents(e,i).next(c=>P.forEach(c,l=>{const h=function(p,_){return new hr(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,n,s).next(f=>{f.forEach((p,_)=>{o=o.insert(p,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ge.newInvalidDocument(f)))});let c=Gr();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&Zr(f.mutation,h,ze.empty(),le.now()),vs(t,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return P.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Be(s.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:tf(s.bundledQuery),readTime:Be(s.readTime)}}(t)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(){this.overlays=new de(F.comparator),this.Ir=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const n=ot();return P.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.ht(e,t,i)}),P.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Ir.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(n)),P.resolve()}getOverlaysForCollection(e,t,n){const s=ot(),i=t.length+1,o=new F(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new de((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=i.get(h.largestBatchId);f===null&&(f=ot(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=ot(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return P.resolve(c)}ht(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(n.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Oa(t,n));let i=this.Ir.get(t);i===void 0&&(i=Q(),this.Ir.set(t,i)),this.Ir.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(){this.sessionToken=Te.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(){this.Tr=new ie(Re.Er),this.dr=new ie(Re.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new Re(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Vr(new Re(e,t))}mr(e,t){e.forEach(n=>this.removeReference(n,t))}gr(e){const t=new F(new re([])),n=new Re(t,e),s=new Re(t,e+1),i=[];return this.dr.forEachInRange([n,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new F(new re([])),n=new Re(t,e),s=new Re(t,e+1);let i=Q();return this.dr.forEachInRange([n,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Re(e,0),n=this.Tr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Re{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return F.comparator(e.key,t.key)||W(e.wr,t.wr)}static Ar(e,t){return W(e.wr,t.wr)||F.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ie(Re.Er)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Na(i,t,n,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new Re(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,t){return P.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.vr(n),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Re(t,0),s=new Re(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([n,s],o=>{const c=this.Dr(o.wr);i.push(c)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ie(W);return t.forEach(s=>{const i=new Re(s,0),o=new Re(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{n=n.add(c.wr)})}),P.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;F.isDocumentKey(i)||(i=i.child(""));const o=new Re(new F(i),0);let c=new ie(W);return this.br.forEachWhile(l=>{const h=l.key.path;return!!n.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.wr)),!0)},o),P.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(n=>{const s=this.Dr(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){j(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return P.forEach(t.mutations,s=>{const i=new Re(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,t){const n=new Re(t,0),s=this.br.firstAfterOrEqual(n);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e){this.Mr=e,this.docs=function(){return new de(F.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return P.resolve(n?n.document.mutableCopy():ge.newInvalidDocument(t))}getEntries(e,t){let n=Qe();return t.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():ge.newInvalidDocument(s))}),P.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=Qe();const o=t.path,c=new F(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Ra(id(f),n)<=0||(s.has(f.key)||vs(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,t,n,s){U()}Or(e,t){return P.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new Uv(this)}getSize(e){return P.resolve(this.size)}}class Uv extends cf{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(n)}),P.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e){this.persistence=e,this.Nr=new Ht(t=>vn(t),Is),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ja,this.targetCount=0,this.kr=wn.Bn()}forEachTarget(e,t){return this.Nr.forEach((n,s)=>t(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),P.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new wn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Kn(t),P.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),P.waitFor(i).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return P.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),P.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return P.resolve(n)}containsKey(e,t){return P.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Ye(0),this.Kr=!1,this.Kr=!0,this.$r=new Mv,this.referenceDelegate=e(this),this.Ur=new jv(this),this.indexManager=new wv,this.remoteDocumentCache=function(s){return new Fv(s)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new Zd(t),this.Gr=new Vv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ov,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new Lv(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){N("MemoryPersistence","Starting transaction:",e);const s=new Bv(this.Qr.next());return this.referenceDelegate.zr(),n(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return P.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,t)))}}class Bv extends ad{constructor(e){super(),this.currentSequenceNumber=e}}class Wi{constructor(e){this.persistence=e,this.Jr=new ja,this.Yr=null}static Zr(e){return new Wi(e)}get Xr(){if(this.Yr)return this.Yr;throw U()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),P.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),P.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Xr,n=>{const s=F.fromPath(n);return this.ei(e,s).next(i=>{i||t.removeEntry(s,q.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(n=>{n?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return P.or([()=>P.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e){this.serializer=e}O(e,t,n,s){const i=new Mi("createOrUpgrade",t);n<1&&s>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ql,{unique:!0}),l.createObjectStore("documentMutations")}(e),Cu(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=P.resolve();return n<3&&s>=3&&(n!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),Cu(e)),o=o.next(()=>function(l){const h=l.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:q.min().toTimestamp(),targetCount:0};return h.put("targetGlobalKey",f)}(i))),n<4&&s>=4&&(n!==0&&(o=o.next(()=>function(l,h){return h.store("mutations").U().next(f=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ql,{unique:!0});const p=h.store("mutations"),_=f.map(A=>p.put(A));return P.waitFor(_)})}(e,i))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),n<5&&s>=5&&(o=o.next(()=>this.ni(i))),n<6&&s>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(i)))),n<7&&s>=7&&(o=o.next(()=>this.ii(i))),n<8&&s>=8&&(o=o.next(()=>this.si(e,i))),n<9&&s>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&s>=10&&(o=o.next(()=>this.oi(i))),n<11&&s>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&s>=12&&(o=o.next(()=>{(function(l){const h=l.createObjectStore("documentOverlays",{keyPath:gI});h.createIndex("collectionPathOverlayIndex",_I,{unique:!1}),h.createIndex("collectionGroupOverlayIndex",yI,{unique:!1})})(e)})),n<13&&s>=13&&(o=o.next(()=>function(l){const h=l.createObjectStore("remoteDocumentsV14",{keyPath:iI});h.createIndex("documentKeyIndex",oI),h.createIndex("collectionGroupIndex",aI)}(e)).next(()=>this._i(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&s>=14&&(o=o.next(()=>this.ai(e,i))),n<15&&s>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:dI}).createIndex("sequenceNumberIndex",fI,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:mI}).createIndex("documentKeyIndex",pI,{unique:!1})}(e))),n<16&&s>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),n<17&&s>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((n,s)=>{t+=Ri(s)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ni(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.U().next(s=>P.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",o).next(c=>P.forEach(c,l=>{j(l.userId===i.userId);const h=cn(this.serializer,l);return sf(e,i.userId,h).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return n.J((o,c)=>{const l=new re(o),h=function(p){return[0,je(p)]}(l);i.push(t.get(h).next(f=>f?P.resolve():(p=>t.put({targetId:0,path:je(p),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>P.waitFor(i))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:hI});const n=t.store("collectionParents"),s=new Ua,i=o=>{if(s.add(o)){const c=o.lastSegment(),l=o.popLast();return n.put({collectionId:c,parent:je(l)})}};return t.store("remoteDocuments").J({H:!0},(o,c)=>{const l=new re(o);return i(l.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,c,l],h)=>{const f=it(c);return i(f.popLast())}))}oi(e){const t=e.store("targets");return t.J((n,s)=>{const i=Kr(s),o=ef(this.serializer,i);return t.put(o)})}_i(e,t){const n=t.store("remoteDocuments"),s=[];return n.J((i,o)=>{const c=t.store("remoteDocumentsV14"),l=function(p){return p.document?new F(re.fromString(p.document.name).popFirst(5)):p.noDocument?F.fromSegments(p.noDocument.path):p.unknownDocument?F.fromSegments(p.unknownDocument.path):U()}(o).path.toArray(),h={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(h))}).next(()=>P.waitFor(s))}ai(e,t){const n=t.store("mutations"),s=lf(this.serializer),i=new hf(Wi.Zr,this.serializer.ct);return n.U().next(o=>{const c=new Map;return o.forEach(l=>{var h;let f=(h=c.get(l.userId))!==null&&h!==void 0?h:Q();cn(this.serializer,l).keys().forEach(p=>f=f.add(p)),c.set(l.userId,f)}),P.forEach(c,(l,h)=>{const f=new Se(h),p=zi.lt(this.serializer,f),_=i.getIndexManager(f),A=Ki.lt(f,this.serializer,_,i.referenceDelegate);return new uf(s,A,p,_).recalculateAndSaveOverlaysForDocumentKeys(new Ho(t,Ye.oe),l).next()})})}}function Cu(r){r.createObjectStore("targetDocuments",{keyPath:lI}).createIndex("documentTargetsIndex",uI,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",cI,{unique:!0}),r.createObjectStore("targetGlobal")}const ko="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Ba{constructor(e,t,n,s,i,o,c,l,h,f,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ui=i,this.window=o,this.document=c,this.ci=h,this.li=f,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=_=>Promise.resolve(),!Ba.D())throw new L(D.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Dv(this,s),this.Ai=t+"main",this.serializer=new Zd(l),this.Ri=new Bt(this.Ai,this.hi,new qv(this.serializer)),this.$r=new _v,this.Ur=new bv(this.referenceDelegate,this.serializer),this.remoteDocumentCache=lf(this.serializer),this.Gr=new gv,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&Fe("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new L(D.FAILED_PRECONDITION,ko);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Ye(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Hs(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(Wt(e))return N("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return N("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Lr(e).get("owner").next(t=>P.resolve(this.vi(t)))}Ci(e){return Hs(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=Ae(t,"clientMetadata");return n.U().next(s=>{const i=this.xi(s,18e5),o=s.filter(c=>i.indexOf(c)===-1);return P.forEach(o,c=>n.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?P.resolve(!0):Lr(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new L(D.FAILED_PRECONDITION,ko);return!1}}return!(!this.networkEnabled||!this.inForeground)||Hs(e).U().next(n=>this.xi(n,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&N("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Ho(e,Ye.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(n=>this.Mi(n.updateTimeMs,t)&&!this.Ni(n.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Hs(e).U().next(t=>this.xi(t,18e5).map(n=>n.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return Ki.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Av(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return zi.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,n){N("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(l){return l===17?EI:l===16?vI:l===15?Sa:l===14?dd:l===13?hd:l===12?II:l===11?ud:void U()}(this.hi);let o;return this.Ri.runTransaction(e,s,i,c=>(o=new Ho(c,this.Qr?this.Qr.next():Ye.oe),t==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw Fe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new L(D.FAILED_PRECONDITION,od);return n(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>n(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ki(e){return Lr(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new L(D.FAILED_PRECONDITION,ko)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Lr(e).put("owner",t)}static D(){return Bt.D()}bi(e){const t=Lr(e);return t.get("owner").next(n=>this.vi(n)?(N("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):P.resolve())}Mi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Fe(`Detected an update time that is in the future: ${e} > ${n}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;ch()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const n=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return N("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return Fe("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){Fe("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Lr(r){return Ae(r,"owner")}function Hs(r){return Ae(r,"clientMetadata")}function $v(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=s}static Wi(e,t){let n=Q(),s=Q();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new qa(e,t.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ch()?8:cd(we())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.Yi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,t,s,n).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Gv;return this.Xi(e,t,o).next(c=>{if(i.result=c,this.zi)return this.es(e,t,o,c.size)})}).next(()=>i.result)}es(e,t,n,s){return n.documentReadCount<this.ji?(Un()<=J.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",jn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),P.resolve()):(Un()<=J.DEBUG&&N("QueryEngine","Query:",jn(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Hi*s?(Un()<=J.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",jn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ze(t))):P.resolve())}Yi(e,t){if(tu(t))return P.resolve(null);let n=Ze(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ta(t,null,"F"),n=Ze(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const o=Q(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,n).next(l=>{const h=this.ts(t,c);return this.ns(t,h,o,l.readTime)?this.Yi(e,ta(t,null,"F")):this.rs(e,h,t,l)}))})))}Zi(e,t,n,s){return tu(t)||s.isEqual(q.min())?P.resolve(null):this.Ji.getDocuments(e,n).next(i=>{const o=this.ts(t,i);return this.ns(t,o,n,s)?P.resolve(null):(Un()<=J.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),jn(t)),this.rs(e,o,t,Jy(s,-1)).next(c=>c))})}ts(e,t){let n=new ie(Pd(e));return t.forEach((s,i)=>{vs(e,i)&&(n=n.add(i))}),n}ns(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,n){return Un()<=J.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",jn(t)),this.Ji.getDocumentsMatchingQuery(e,t,Xe.min(),n)}rs(e,t,n,s){return this.Ji.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,t,n,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new de(W),this._s=new Ht(i=>vn(i),Is),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new uf(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function ff(r,e,t,n){return new zv(r,e,t,n)}async function mf(r,e){const t=K(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const o=[],c=[];let l=Q();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(n,l).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:c}))})})}function Kv(r,e){const t=K(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,_=p.keys();let A=P.resolve();return _.forEach(C=>{A=A.next(()=>f.getEntry(l,C)).next(x=>{const k=h.docVersions.get(C);j(k!==null),x.version.compareTo(k)<0&&(p.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),f.addEntry(x)))})}),A.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let l=Q();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function pf(r){const e=K(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Wv(r,e){const t=K(r),n=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((f,p)=>{const _=s.get(p);if(!_)return;c.push(t.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(i,f.addedDocuments,p)));let A=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken(Te.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,n)),s=s.insert(p,A),function(x,k,$){return x.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(_,A,f)&&c.push(t.Ur.updateTargetData(i,A))});let l=Qe(),h=Q();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(Hv(i,o,e.documentUpdates).next(f=>{l=f.Ps,h=f.Is})),!n.isEqual(q.min())){const f=t.Ur.getLastRemoteSnapshotVersion(i).next(p=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,n));c.push(f)}return P.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.os=s,i))}function Hv(r,e,t){let n=Q(),s=Q();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let o=Qe();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(q.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):N("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function Qv(r,e){const t=K(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function Xv(r,e){const t=K(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.Ur.getTargetData(n,e).next(i=>i?(s=i,P.resolve(s)):t.Ur.allocateTargetId(n).next(o=>(s=new gt(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Ur.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.os.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(n.targetId,n),t._s.set(e,n.targetId)),n})}async function la(r,e,t){const n=K(r),s=n.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,o=>n.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Wt(o))throw o;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}n.os=n.os.remove(e),n._s.delete(s.target)}function Du(r,e,t){const n=K(r);let s=q.min(),i=Q();return n.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=K(l),_=p._s.get(f);return _!==void 0?P.resolve(p.os.get(_)):p.Ur.getTargetData(h,f)}(n,o,Ze(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>n.ss.getDocumentsMatchingQuery(o,e,t?s:q.min(),t?i:Q())).next(c=>(Jv(n,MI(e),c),{documents:c,Ts:i})))}function Jv(r,e,t){let n=r.us.get(e)||q.min();t.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.us.set(e,n)}class xu{constructor(){this.activeTargetIds=qI()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gf{constructor(){this.so=new xu,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new xu,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qs=null;function No(){return Qs===null?Qs=function(){return 268435456+Math.round(2147483648*Math.random())}():Qs++,"0x"+Qs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne="WebChannelConnection";class tE extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,n,s,i,o){const c=No(),l=this.xo(t,n.toUriEncodedString());N("RestConnection",`Sending RPC '${t}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(t,l,h,s).then(f=>(N("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw _n("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(t,n,s,i,o,c){return this.Mo(t,n,s,i,o)}Oo(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ur}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}xo(t,n){const s=Zv[t];return`${this.Do}/v1/${n}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,s){const i=No();return new Promise((o,c)=>{const l=new Jh;l.setWithCredentials(!0),l.listenOnce(Yh.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ei.NO_ERROR:const f=l.getResponseJson();N(Ne,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case ei.TIMEOUT:N(Ne,`RPC '${e}' ${i} timed out`),c(new L(D.DEADLINE_EXCEEDED,"Request time out"));break;case ei.HTTP_ERROR:const p=l.getStatus();if(N(Ne,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let _=l.getResponseJson();Array.isArray(_)&&(_=_[0]);const A=_==null?void 0:_.error;if(A&&A.status&&A.message){const C=function(k){const $=k.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf($)>=0?$:D.UNKNOWN}(A.status);c(new L(C,A.message))}else c(new L(D.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new L(D.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{N(Ne,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);N(Ne,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",h,n,15)})}Bo(e,t,n){const s=No(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=td(),c=ed(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const f=i.join("");N(Ne,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);let _=!1,A=!1;const C=new eE({Io:k=>{A?N(Ne,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(_||(N(Ne,`Opening RPC '${e}' stream ${s} transport.`),p.open(),_=!0),N(Ne,`RPC '${e}' stream ${s} sending:`,k),p.send(k))},To:()=>p.close()}),x=(k,$,V)=>{k.listen($,B=>{try{V(B)}catch(X){setTimeout(()=>{throw X},0)}})};return x(p,$r.EventType.OPEN,()=>{A||(N(Ne,`RPC '${e}' stream ${s} transport opened.`),C.yo())}),x(p,$r.EventType.CLOSE,()=>{A||(A=!0,N(Ne,`RPC '${e}' stream ${s} transport closed`),C.So())}),x(p,$r.EventType.ERROR,k=>{A||(A=!0,_n(Ne,`RPC '${e}' stream ${s} transport errored:`,k),C.So(new L(D.UNAVAILABLE,"The operation could not be completed")))}),x(p,$r.EventType.MESSAGE,k=>{var $;if(!A){const V=k.data[0];j(!!V);const B=V,X=B.error||(($=B[0])===null||$===void 0?void 0:$.error);if(X){N(Ne,`RPC '${e}' stream ${s} received error:`,X);const ne=X.status;let H=function(I){const T=ve[I];if(T!==void 0)return Ud(T)}(ne),E=X.message;H===void 0&&(H=D.INTERNAL,E="Unknown error status: "+ne+" with message "+X.message),A=!0,C.So(new L(H,E)),p.close()}else N(Ne,`RPC '${e}' stream ${s} received:`,V),C.bo(V)}}),x(c,Zh.STAT_EVENT,k=>{k.stat===Ko.PROXY?N(Ne,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===Ko.NOPROXY&&N(Ne,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(){return typeof window<"u"?window:null}function ai(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(r){return new iv(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,t,n=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-n);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,t,n,s,i,o,c,l){this.ui=e,this.Ho=n,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new _f(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(Fe(t.toString()),Fe("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Yo===t&&this.P_(n,s)},n=>{e(()=>{const s=new L(D.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(s)})})}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{n(()=>this.I_(s))}),this.stream.onMessage(s=>{n(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rE extends yf{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=cv(this.serializer,e),n=function(i){if(!("targetChange"in i))return q.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?q.min():o.readTime?Be(o.readTime):q.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=sa(this.serializer),t.addTarget=function(i,o){let c;const l=o.target;if(c=vi(l)?{documents:Wd(i,l)}:{query:Hd(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=qd(i,o.resumeToken);const h=na(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(q.min())>0){c.readTime=ir(i,o.snapshotVersion.toTimestamp());const h=na(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const n=uv(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=sa(this.serializer),t.removeTarget=e,this.a_(t)}}class sE extends yf{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return j(!!e.streamToken),this.lastStreamToken=e.streamToken,j(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){j(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=lv(e.writeResults,e.commitTime),n=Be(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=sa(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>wi(this.serializer,n))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE extends class{}{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new L(D.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,ra(t,n),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(D.UNKNOWN,i.toString())})}Lo(e,t,n,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,ra(t,n),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(D.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class oE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Fe(t),this.D_=!1):N("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{n.enqueueAndForget(async()=>{Pn(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=K(l);h.L_.add(4),await Ts(h),h.q_.set("Unknown"),h.L_.delete(4),await Qi(h)}(this))})}),this.q_=new oE(n,s)}}async function Qi(r){if(Pn(r))for(const e of r.B_)await e(!0)}async function Ts(r){for(const e of r.B_)await e(!1)}function If(r,e){const t=K(r);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Ka(t)?za(t):fr(t).r_()&&Ga(t,e))}function $a(r,e){const t=K(r),n=fr(t);t.N_.delete(e),n.r_()&&vf(t,e),t.N_.size===0&&(n.r_()?n.o_():Pn(t)&&t.q_.set("Unknown"))}function Ga(r,e){if(r.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}fr(r).A_(e)}function vf(r,e){r.Q_.xe(e),fr(r).R_(e)}function za(r){r.Q_=new tv({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.N_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),fr(r).start(),r.q_.v_()}function Ka(r){return Pn(r)&&!fr(r).n_()&&r.N_.size>0}function Pn(r){return K(r).L_.size===0}function Ef(r){r.Q_=void 0}async function cE(r){r.q_.set("Online")}async function lE(r){r.N_.forEach((e,t)=>{Ga(r,e)})}async function uE(r,e){Ef(r),Ka(r)?(r.q_.M_(e),za(r)):r.q_.set("Unknown")}async function hE(r,e,t){if(r.q_.set("Online"),e instanceof Bd&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(r,e)}catch(n){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Pi(r,n)}else if(e instanceof oi?r.Q_.Ke(e):e instanceof jd?r.Q_.He(e):r.Q_.We(e),!t.isEqual(q.min()))try{const n=await pf(r.localStore);t.compareTo(n)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(Te.EMPTY_BYTE_STRING,f.snapshotVersion)),vf(i,l);const p=new gt(f.target,l,h,f.sequenceNumber);Ga(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(r,t)}catch(n){N("RemoteStore","Failed to raise snapshot:",n),await Pi(r,n)}}async function Pi(r,e,t){if(!Wt(e))throw e;r.L_.add(1),await Ts(r),r.q_.set("Offline"),t||(t=()=>pf(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await t(),r.L_.delete(1),await Qi(r)})}function Tf(r,e){return e().catch(t=>Pi(r,t,e))}async function ws(r){const e=K(r),t=zt(e);let n=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;dE(e);)try{const s=await Qv(e.localStore,n);if(s===null){e.O_.length===0&&t.o_();break}n=s.batchId,fE(e,s)}catch(s){await Pi(e,s)}wf(e)&&Af(e)}function dE(r){return Pn(r)&&r.O_.length<10}function fE(r,e){r.O_.push(e);const t=zt(r);t.r_()&&t.V_&&t.m_(e.mutations)}function wf(r){return Pn(r)&&!zt(r).n_()&&r.O_.length>0}function Af(r){zt(r).start()}async function mE(r){zt(r).p_()}async function pE(r){const e=zt(r);for(const t of r.O_)e.m_(t.mutations)}async function gE(r,e,t){const n=r.O_.shift(),s=Va.from(n,e,t);await Tf(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await ws(r)}async function _E(r,e){e&&zt(r).V_&&await async function(n,s){if(function(o){return YI(o)&&o!==D.ABORTED}(s.code)){const i=n.O_.shift();zt(n).s_(),await Tf(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ws(n)}}(r,e),wf(r)&&Af(r)}async function Nu(r,e){const t=K(r);t.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const n=Pn(t);t.L_.add(3),await Ts(t),n&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Qi(t)}async function yE(r,e){const t=K(r);e?(t.L_.delete(2),await Qi(t)):e||(t.L_.add(2),await Ts(t),t.q_.set("Unknown"))}function fr(r){return r.K_||(r.K_=function(t,n,s){const i=K(t);return i.w_(),new rE(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Eo:cE.bind(null,r),Ro:lE.bind(null,r),mo:uE.bind(null,r),d_:hE.bind(null,r)}),r.B_.push(async e=>{e?(r.K_.s_(),Ka(r)?za(r):r.q_.set("Unknown")):(await r.K_.stop(),Ef(r))})),r.K_}function zt(r){return r.U_||(r.U_=function(t,n,s){const i=K(t);return i.w_(),new sE(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:mE.bind(null,r),mo:_E.bind(null,r),f_:pE.bind(null,r),g_:gE.bind(null,r)}),r.B_.push(async e=>{e?(r.U_.s_(),await ws(r)):(await r.U_.stop(),r.O_.length>0&&(N("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new jt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,c=new Wa(e,t,o,s,i);return c.start(n),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ha(r,e){if(Fe("AsyncQueue",`${e}: ${r}`),Wt(r))return new L(D.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.comparator=e?(t,n)=>e(t,n)||F.comparator(t.key,n.key):(t,n)=>F.comparator(t.key,n.key),this.keyedMap=Gr(),this.sortedSet=new de(this.comparator)}static emptySet(e){return new Qn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Qn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Qn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(){this.W_=new de(F.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?e.type!==0&&n.type===3?this.W_=this.W_.insert(t,e):e.type===3&&n.type!==1?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.W_=this.W_.remove(t):e.type===1&&n.type===2?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):U():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,n)=>{e.push(n)}),e}}class or{constructor(e,t,n,s,i,o,c,l,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new or(e,t,Qn.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ji(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class vE{constructor(){this.queries=Ou(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,n){const s=K(t),i=s.queries;s.queries=Ou(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(n)})})(this,new L(D.ABORTED,"Firestore shutting down"))}}function Ou(){return new Ht(r=>Rd(r),ji)}async function EE(r,e){const t=K(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(n=2):(i=new IE,n=e.J_()?0:1);try{switch(n){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=Ha(o,`Initialization of query '${jn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Qa(t)}async function TE(r,e){const t=K(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function wE(r,e){const t=K(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(n=!0);o.z_=s}}n&&Qa(t)}function AE(r,e,t){const n=K(r),s=n.queries.get(e);if(s)for(const i of s.j_)i.onError(t);n.queries.delete(e)}function Qa(r){r.Y_.forEach(e=>{e.next()})}var ua,Mu;(Mu=ua||(ua={})).ea="default",Mu.Cache="cache";class bE{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new or(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const n=t!=="Offline";return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=or.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ua.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e){this.key=e}}class Rf{constructor(e){this.key=e}}class RE{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Q(),this.mutatedKeys=Q(),this.Aa=Pd(e),this.Ra=new Qn(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new Vu,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const _=s.get(f),A=vs(this.query,p)?p:null,C=!!_&&this.mutatedKeys.has(_.key),x=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let k=!1;_&&A?_.data.isEqual(A.data)?C!==x&&(n.track({type:3,doc:A}),k=!0):this.ga(_,A)||(n.track({type:2,doc:A}),k=!0,(l&&this.Aa(A,l)>0||h&&this.Aa(A,h)<0)&&(c=!0)):!_&&A?(n.track({type:0,doc:A}),k=!0):_&&!A&&(n.track({type:1,doc:_}),k=!0,(l||h)&&(c=!0)),k&&(A?(o=o.add(A),i=x?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{Ra:o,fa:n,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(A,C){const x=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return x(A)-x(C)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(n),s=s!=null&&s;const c=t&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,o.length!==0||h?{snapshot:new or(this.query,e.Ra,i,o,e.mutatedKeys,l===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Vu,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Q(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const t=[];return e.forEach(n=>{this.da.has(n)||t.push(new Rf(n))}),this.da.forEach(n=>{e.has(n)||t.push(new bf(n))}),t}ba(e){this.Ta=e.Ts,this.da=Q();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return or.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class PE{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class SE{constructor(e){this.key=e,this.va=!1}}class CE{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ht(c=>Rd(c),ji),this.Ma=new Map,this.xa=new Set,this.Oa=new de(F.comparator),this.Na=new Map,this.La=new ja,this.Ba={},this.ka=new Map,this.qa=wn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function DE(r,e,t=!0){const n=kf(r);let s;const i=n.Fa.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Pf(n,e,t,!0),s}async function xE(r,e){const t=kf(r);await Pf(t,e,!0,!1)}async function Pf(r,e,t,n){const s=await Xv(r.localStore,Ze(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let c;return n&&(c=await kE(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&If(r.remoteStore,s),c}async function kE(r,e,t,n,s){r.Ka=(p,_,A)=>async function(x,k,$,V){let B=k.view.ma($);B.ns&&(B=await Du(x.localStore,k.query,!1).then(({documents:E})=>k.view.ma(E,B)));const X=V&&V.targetChanges.get(k.targetId),ne=V&&V.targetMismatches.get(k.targetId)!=null,H=k.view.applyChanges(B,x.isPrimaryClient,X,ne);return Fu(x,k.targetId,H.wa),H.snapshot}(r,p,_,A);const i=await Du(r.localStore,e,!0),o=new RE(e,i.Ts),c=o.ma(i.documents),l=Es.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),h=o.applyChanges(c,r.isPrimaryClient,l);Fu(r,t,h.wa);const f=new PE(e,t,o);return r.Fa.set(e,f),r.Ma.has(t)?r.Ma.get(t).push(e):r.Ma.set(t,[e]),h.snapshot}async function NE(r,e,t){const n=K(r),s=n.Fa.get(e),i=n.Ma.get(s.targetId);if(i.length>1)return n.Ma.set(s.targetId,i.filter(o=>!ji(o,e))),void n.Fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await la(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&$a(n.remoteStore,s.targetId),ha(n,s.targetId)}).catch(bn)):(ha(n,s.targetId),await la(n.localStore,s.targetId,!0))}async function VE(r,e){const t=K(r),n=t.Fa.get(e),s=t.Ma.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),$a(t.remoteStore,n.targetId))}async function OE(r,e,t){const n=Nf(r);try{const s=await function(o,c){const l=K(o),h=le.now(),f=c.reduce((A,C)=>A.add(C.key),Q());let p,_;return l.persistence.runTransaction("Locally write mutations","readwrite",A=>{let C=Qe(),x=Q();return l.cs.getEntries(A,f).next(k=>{C=k,C.forEach(($,V)=>{V.isValidDocument()||(x=x.add($))})}).next(()=>l.localDocuments.getOverlayedDocuments(A,C)).next(k=>{p=k;const $=[];for(const V of c){const B=XI(V,p.get(V.key).overlayedDocument);B!=null&&$.push(new At(V.key,B,_d(B.value.mapValue),Ue.exists(!0)))}return l.mutationQueue.addMutationBatch(A,h,$,c)}).next(k=>{_=k;const $=k.applyToLocalDocumentSet(p,x);return l.documentOverlayCache.saveOverlays(A,k.batchId,$)})}).then(()=>({batchId:_.batchId,changes:Cd(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Ba[o.currentUser.toKey()];h||(h=new de(W)),h=h.insert(c,l),o.Ba[o.currentUser.toKey()]=h}(n,s.batchId,t),await As(n,s.changes),await ws(n.remoteStore)}catch(s){const i=Ha(s,"Failed to persist write");t.reject(i)}}async function Sf(r,e){const t=K(r);try{const n=await Wv(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Na.get(i);o&&(j(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?j(o.va):s.removedDocuments.size>0&&(j(o.va),o.va=!1))}),await As(t,n,e)}catch(n){await bn(n)}}function Lu(r,e,t){const n=K(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=K(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const _ of p.j_)_.Z_(c)&&(h=!0)}),h&&Qa(l)}(n.eventManager,e),s.length&&n.Ca.d_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function ME(r,e,t){const n=K(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Na.get(e),i=s&&s.key;if(i){let o=new de(F.comparator);o=o.insert(i,ge.newNoDocument(i,q.min()));const c=Q().add(i),l=new Gi(q.min(),new Map,new de(W),o,c);await Sf(n,l),n.Oa=n.Oa.remove(i),n.Na.delete(e),Xa(n)}else await la(n.localStore,e,!1).then(()=>ha(n,e,t)).catch(bn)}async function LE(r,e){const t=K(r),n=e.batch.batchId;try{const s=await Kv(t.localStore,e);Df(t,n,null),Cf(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await As(t,s)}catch(s){await bn(s)}}async function FE(r,e,t){const n=K(r);try{const s=await function(o,c){const l=K(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(j(p!==null),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(n.localStore,e);Df(n,e,t),Cf(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await As(n,s)}catch(s){await bn(s)}}function Cf(r,e){(r.ka.get(e)||[]).forEach(t=>{t.resolve()}),r.ka.delete(e)}function Df(r,e,t){const n=K(r);let s=n.Ba[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.Ba[n.currentUser.toKey()]=s}}function ha(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Ma.get(e))r.Fa.delete(n),t&&r.Ca.$a(n,t);r.Ma.delete(e),r.isPrimaryClient&&r.La.gr(e).forEach(n=>{r.La.containsKey(n)||xf(r,n)})}function xf(r,e){r.xa.delete(e.path.canonicalString());const t=r.Oa.get(e);t!==null&&($a(r.remoteStore,t),r.Oa=r.Oa.remove(e),r.Na.delete(t),Xa(r))}function Fu(r,e,t){for(const n of t)n instanceof bf?(r.La.addReference(n.key,e),UE(r,n)):n instanceof Rf?(N("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,e),r.La.containsKey(n.key)||xf(r,n.key)):U()}function UE(r,e){const t=e.key,n=t.path.canonicalString();r.Oa.get(t)||r.xa.has(n)||(N("SyncEngine","New document in limbo: "+t),r.xa.add(n),Xa(r))}function Xa(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const e=r.xa.values().next().value;r.xa.delete(e);const t=new F(re.fromString(e)),n=r.qa.next();r.Na.set(n,new SE(t)),r.Oa=r.Oa.insert(t,n),If(r.remoteStore,new gt(Ze(Ui(t.path)),n,"TargetPurposeLimboResolution",Ye.oe))}}async function As(r,e,t){const n=K(r),s=[],i=[],o=[];n.Fa.isEmpty()||(n.Fa.forEach((c,l)=>{o.push(n.Ka(l,e,t).then(h=>{var f;if((h||t)&&n.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=qa.Wi(l.targetId,h);i.push(p)}}))}),await Promise.all(o),n.Ca.d_(s),await async function(l,h){const f=K(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>P.forEach(h,_=>P.forEach(_.$i,A=>f.persistence.referenceDelegate.addReference(p,_.targetId,A)).next(()=>P.forEach(_.Ui,A=>f.persistence.referenceDelegate.removeReference(p,_.targetId,A)))))}catch(p){if(!Wt(p))throw p;N("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const _=p.targetId;if(!p.fromCache){const A=f.os.get(_),C=A.snapshotVersion,x=A.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(_,x)}}}(n.localStore,i))}async function jE(r,e){const t=K(r);if(!t.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const n=await mf(t.localStore,e);t.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new L(D.CANCELLED,o))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await As(t,n.hs)}}function BE(r,e){const t=K(r),n=t.Na.get(e);if(n&&n.va)return Q().add(n.key);{let s=Q();const i=t.Ma.get(e);if(!i)return s;for(const o of i){const c=t.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}function kf(r){const e=K(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=BE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ME.bind(null,e),e.Ca.d_=wE.bind(null,e.eventManager),e.Ca.$a=AE.bind(null,e.eventManager),e}function Nf(r){const e=K(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=FE.bind(null,e),e}class ds{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Hi(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return ff(this.persistence,new df,e.initialUser,this.serializer)}Ga(e){return new hf(Wi.Zr,this.serializer)}Wa(e){return new gf}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ds.provider={build:()=>new ds};class qE extends ds{constructor(e,t,n){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await Nf(this.Ja.syncEngine),await ws(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return ff(this.persistence,new df,e.initialUser,this.serializer)}ja(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Pv(n,e.asyncQueue,t)}Ha(e,t){const n=new tI(t,this.persistence);return new eI(e.asyncQueue,n)}Ga(e){const t=$v(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Ge.withCacheSize(this.cacheSizeBytes):Ge.DEFAULT;return new Ba(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,nE(),ai(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new gf}}class Si{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Lu(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=jE.bind(null,this.syncEngine),await yE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vE}()}createDatastore(e){const t=Hi(e.databaseInfo.databaseId),n=function(i){return new tE(i)}(e.databaseInfo);return function(i,o,c,l){return new iE(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,o,c){return new aE(n,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Lu(this.syncEngine,t,0),function(){return ku.D()?new ku:new Yv}())}createSyncEngine(e,t){return function(s,i,o,c,l,h,f){const p=new CE(s,i,o,c,l,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=K(s);N("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Ts(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Si.provider={build:()=>new Si};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Fe("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=Se.UNAUTHENTICATED,this.clientId=rd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async o=>{N("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(N("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Ha(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Vo(r,e){r.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await mf(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Uu(r,e){r.asyncQueue.verifyOperationInProgress();const t=await zE(r);N("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>Nu(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Nu(e.remoteStore,s)),r._onlineComponents=e}async function zE(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vo(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;_n("Error using user provided cache. Falling back to memory cache: "+t),await Vo(r,new ds)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await Vo(r,new ds);return r._offlineComponents}async function Vf(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await Uu(r,r._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await Uu(r,new Si))),r._onlineComponents}function KE(r){return Vf(r).then(e=>e.syncEngine)}async function ju(r){const e=await Vf(r),t=e.eventManager;return t.onListen=DE.bind(null,e.syncEngine),t.onUnlisten=NE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=xE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=VE.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(r,e,t){if(!t)throw new L(D.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function WE(r,e,t,n){if(e===!0&&n===!0)throw new L(D.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function qu(r){if(!F.isDocumentKey(r))throw new L(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function $u(r){if(F.isDocumentKey(r))throw new L(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Xi(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":U()}function yt(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new L(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xi(r);throw new L(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new L(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Of((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ji{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gu({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gu(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new qy;switch(n.type){case"firstParty":return new Ky(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new L(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Bu.get(t);n&&(N("ComponentProvider","Removing Datastore"),Bu.delete(t),n.terminate())}(this),Promise.resolve()}}function HE(r,e,t,n={}){var s;const i=(r=yt(r,Ji))._getSettings(),o=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&_n("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),n.mockUserToken){let c,l;if(typeof n.mockUserToken=="string")c=n.mockUserToken,l=Se.MOCK_USER;else{c=ep(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const h=n.mockUserToken.sub||n.mockUserToken.user_id;if(!h)throw new L(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Se(h)}r._authCredentials=new $y(new nd(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Sn(this.firestore,e,this._query)}}class Ke{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}}class qt extends Sn{constructor(e,t,n){super(e,t,Ui(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new F(e))}withConverter(e){return new qt(this.firestore,e,this._path)}}function zu(r,e,...t){if(r=Ee(r),Mf("collection","path",e),r instanceof Ji){const n=re.fromString(e,...t);return $u(n),new qt(r,null,n)}{if(!(r instanceof Ke||r instanceof qt))throw new L(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(re.fromString(e,...t));return $u(n),new qt(r.firestore,null,n)}}function ci(r,e,...t){if(r=Ee(r),arguments.length===1&&(e=rd.newId()),Mf("doc","path",e),r instanceof Ji){const n=re.fromString(e,...t);return qu(n),new Ke(r,null,new F(n))}{if(!(r instanceof Ke||r instanceof qt))throw new L(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(re.fromString(e,...t));return qu(n),new Ke(r.firestore,r instanceof qt?r.converter:null,new F(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new _f(this,"async_queue_retry"),this.Vu=()=>{const n=ai();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=e;const t=ai();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=ai();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new jt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Wt(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(n=>{this.Eu=n,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(n);throw Fe("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.du=!1,n))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=Wa.createAndSchedule(this,e,t,n,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&U()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Wu(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}class An extends Ji{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new Ku,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ku(e),this._firestoreClient=void 0,await e}}}function QE(r,e){const t=typeof r=="object"?r:fh(),n=typeof r=="string"?r:"(default)",s=pa(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=Ym("firestore");i&&HE(s,...i)}return s}function Lf(r){if(r._terminated)throw new L(D.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Ff(r),r._firestoreClient}function Ff(r){var e,t,n;const s=r._freezeSettings(),i=function(c,l,h,f){return new wI(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Of(f.experimentalLongPollingOptions),f.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new GE(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(r._componentsProvider))}function XE(r,e){_n("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return JE(r,Si.provider,{build:n=>new qE(n,t.cacheSizeBytes,void 0)}),Promise.resolve()}function JE(r,e,t){if((r=yt(r,An))._firestoreClient||r._terminated)throw new L(D.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new L(D.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},Ff(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ar(Te.fromBase64String(e))}catch(t){throw new L(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ar(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE=/^__.*__$/;class ZE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new At(e,this.data,this.fieldMask,t,this.fieldTransforms):new dr(e,this.data,t,this.fieldTransforms)}}class Uf{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new At(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function jf(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class ec{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new ec(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:n,xu:!1});return s.Ou(e),s}Nu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:n,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ci(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(jf(this.Cu)&&YE.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class eT{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Hi(e)}Qu(e,t,n,s=!1){return new ec({Cu:e,methodName:t,qu:n,path:me.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function tc(r){const e=r._freezeSettings(),t=Hi(r._databaseId);return new eT(r._databaseId,!!e.ignoreUndefinedProperties,t)}function tT(r,e,t,n,s,i={}){const o=r.Qu(i.merge||i.mergeFields?2:0,e,t,s);nc("Data must be an object, but it was:",o,n);const c=Bf(n,o);let l,h;if(i.merge)l=new ze(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const _=da(e,p,t);if(!o.contains(_))throw new L(D.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);$f(f,_)||f.push(_)}l=new ze(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new ZE(new Ve(c),l,h)}class Zi extends Ja{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Zi}}function nT(r,e,t,n){const s=r.Qu(1,e,t);nc("Data must be an object, but it was:",s,n);const i=[],o=Ve.empty();Rn(n,(l,h)=>{const f=rc(e,l,t);h=Ee(h);const p=s.Nu(f);if(h instanceof Zi)i.push(f);else{const _=bs(h,p);_!=null&&(i.push(f),o.set(f,_))}});const c=new ze(i);return new Uf(o,c,s.fieldTransforms)}function rT(r,e,t,n,s,i){const o=r.Qu(1,e,t),c=[da(e,n,t)],l=[s];if(i.length%2!=0)throw new L(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)c.push(da(e,i[_])),l.push(i[_+1]);const h=[],f=Ve.empty();for(let _=c.length-1;_>=0;--_)if(!$f(h,c[_])){const A=c[_];let C=l[_];C=Ee(C);const x=o.Nu(A);if(C instanceof Zi)h.push(A);else{const k=bs(C,x);k!=null&&(h.push(A),f.set(A,k))}}const p=new ze(h);return new Uf(f,p,o.fieldTransforms)}function sT(r,e,t,n=!1){return bs(t,r.Qu(n?4:3,e))}function bs(r,e){if(qf(r=Ee(r)))return nc("Unsupported field value:",e,r),Bf(r,e);if(r instanceof Ja)return function(n,s){if(!jf(s.Cu))throw s.Bu(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(n,s){const i=[];let o=0;for(const c of n){let l=bs(c,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(r,e)}return function(n,s){if((n=Ee(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return $I(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=le.fromDate(n);return{timestampValue:ir(s.serializer,i)}}if(n instanceof le){const i=new le(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ir(s.serializer,i)}}if(n instanceof Ya)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ar)return{bytesValue:qd(s.serializer,n._byteString)};if(n instanceof Ke){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:La(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Za)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return ka(c.serializer,l)})}}}}}}(n,s);throw s.Bu(`Unsupported field value: ${Xi(n)}`)}(r,e)}function Bf(r,e){const t={};return fd(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rn(r,(n,s)=>{const i=bs(s,e.Mu(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function qf(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof le||r instanceof Ya||r instanceof ar||r instanceof Ke||r instanceof Ja||r instanceof Za)}function nc(r,e,t){if(!qf(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const n=Xi(t);throw n==="an object"?e.Bu(r+" a custom object"):e.Bu(r+" "+n)}}function da(r,e,t){if((e=Ee(e))instanceof Yi)return e._internalPath;if(typeof e=="string")return rc(r,e);throw Ci("Field path arguments must be of type string or ",r,!1,void 0,t)}const iT=new RegExp("[~\\*/\\[\\]]");function rc(r,e,t){if(e.search(iT)>=0)throw Ci(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Yi(...e.split("."))._internalPath}catch{throw Ci(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Ci(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${n}`),o&&(l+=` in document ${s}`),l+=")"),new L(D.INVALID_ARGUMENT,c+r+l)}function $f(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new oT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(sc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class oT extends Gf{data(){return super.data()}}function sc(r,e){return typeof e=="string"?rc(r,e):e instanceof Yi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new L(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ic{}class zf extends ic{}function cT(r,e,...t){let n=[];e instanceof ic&&n.push(e),n=n.concat(t),function(i){const o=i.filter(l=>l instanceof ac).length,c=i.filter(l=>l instanceof oc).length;if(o>1||o>0&&c>0)throw new L(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class oc extends zf{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new oc(e,t,n)}_apply(e){const t=this._parse(e);return Kf(e._query,t),new Sn(e.firestore,e.converter,ea(e._query,t))}_parse(e){const t=tc(e.firestore);return function(i,o,c,l,h,f,p){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new L(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Qu(p,f);const A=[];for(const C of p)A.push(Hu(l,i,C));_={arrayValue:{values:A}}}else _=Hu(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Qu(p,f),_=sT(c,o,p,f==="in"||f==="not-in");return Y.create(h,f,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class ac extends ic{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ac(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:se.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Kf(o,l),o=ea(o,l)}(e._query,t),new Sn(e.firestore,e.converter,ea(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class cc extends zf{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new cc(e,t)}_apply(e){const t=function(s,i,o){if(s.startAt!==null)throw new L(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new L(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ls(i,o)}(e._query,this._field,this._direction);return new Sn(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new hr(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function lT(r,e="asc"){const t=e,n=sc("orderBy",r);return cc._create(n,t)}function Hu(r,e,t){if(typeof(t=Ee(t))=="string"){if(t==="")throw new L(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bd(e)&&t.indexOf("/")!==-1)throw new L(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(re.fromString(t));if(!F.isDocumentKey(n))throw new L(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return as(r,new F(n))}if(t instanceof Ke)return as(r,t._key);throw new L(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xi(t)}.`)}function Qu(r,e){if(!Array.isArray(r)||r.length===0)throw new L(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Kf(r,e){const t=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new L(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class uT{convertValue(e,t="none"){switch(In(e)){case 0:return null;case 1:return e.booleanValue;case 2:return he(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes($t(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw U()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Rn(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){var t,n,s;const i=(s=(n=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(o=>he(o.doubleValue));return new Za(i)}convertGeoPoint(e){return new Ya(he(e.latitude),he(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Da(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(is(e));default:return null}}convertTimestamp(e){const t=Et(e);return new le(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=re.fromString(e);j(Yd(n));const s=new yn(n.get(1),n.get(3)),i=new F(n.popFirst(5));return s.isEqual(t)||Fe(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(r,e,t){let n;return n=r?r.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Wf extends Gf{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new li(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(sc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class li extends Wf{data(e={}){return super.data(e)}}class dT{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Wr(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new li(this._firestore,this._userDataWriter,n.key,n,new Wr(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new li(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Wr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new li(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Wr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:fT(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function fT(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}class Hf extends uT{constructor(e){super(),this.firestore=e}convertBytes(e){return new ar(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,t)}}function mT(r,e,t,...n){r=yt(r,Ke);const s=yt(r.firestore,An),i=tc(s);let o;return o=typeof(e=Ee(e))=="string"||e instanceof Yi?rT(i,"updateDoc",r._key,e,t,n):nT(i,"updateDoc",r._key,e),lc(s,[o.toMutation(r._key,Ue.exists(!0))])}function Xu(r){return lc(yt(r.firestore,An),[new $i(r._key,Ue.none())])}function pT(r,e){const t=yt(r.firestore,An),n=ci(r),s=hT(r.converter,e);return lc(t,[tT(tc(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,Ue.exists(!1))]).then(()=>n)}function gT(r,...e){var t,n,s;r=Ee(r);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Wu(e[o])||(i=e[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Wu(e[o])){const p=e[o];e[o]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[o+1]=(n=p.error)===null||n===void 0?void 0:n.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,h,f;if(r instanceof Ke)h=yt(r.firestore,An),f=Ui(r._key.path),l={next:p=>{e[o]&&e[o](_T(h,r,p))},error:e[o+1],complete:e[o+2]};else{const p=yt(r,Sn);h=yt(p.firestore,An),f=p._query;const _=new Hf(h);l={next:A=>{e[o]&&e[o](new dT(h,_,p,A))},error:e[o+1],complete:e[o+2]},aT(r._query)}return function(_,A,C,x){const k=new $E(x),$=new bE(A,k,C);return _.asyncQueue.enqueueAndForget(async()=>EE(await ju(_),$)),()=>{k.Za(),_.asyncQueue.enqueueAndForget(async()=>TE(await ju(_),$))}}(Lf(h),f,c,l)}function lc(r,e){return function(n,s){const i=new jt;return n.asyncQueue.enqueueAndForget(async()=>OE(await KE(n),s,i)),i.promise}(Lf(r),e)}function _T(r,e,t){const n=t.docs.get(e._key),s=new Hf(r);return new Wf(r,s,e._key,n,new Wr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){ur=s})(cr),Jn(new fn("firestore",(n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),c=new An(new Gy(n.getProvider("auth-internal")),new Hy(n.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new L(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yn(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Ut(Ul,"4.7.3",e),Ut(Ul,"4.7.3","esm2017")})();const yT={apiKey:"AIzaSyDS8jEcdPzYcDiDRZpvopMM6qxX1t6nNzU",authDomain:"order-management-62810.firebaseapp.com",projectId:"order-management-62810",storageBucket:"order-management-62810.firebasestorage.app",messagingSenderId:"593654538436",appId:"1:593654538436:web:322125e0c1bba4f0086991"},Qf=dh(yT),Fr=Fy(Qf),Gn=QE(Qf);XE(Gn).catch(r=>{r.code==="failed-precondition"?console.warn("Firebase persistence failed: Multiple tabs open"):r.code==="unimplemented"&&console.warn("Firebase persistence not supported in this browser")});function IT(){var c,l,h;const[r,e]=O.useState({user:null,loading:!0,error:null});O.useEffect(()=>{const f=R_(Fr,p=>{e({user:p,loading:!1,error:null})},p=>{e({user:null,loading:!1,error:p.message})});return()=>f()},[]);const t=O.useCallback(async(f,p,_)=>{try{e(C=>({...C,loading:!0,error:null}));const A=await v_(Fr,f,p);return _&&A.user&&await w_(A.user,{displayName:_}),e({user:A.user,loading:!1,error:null}),A.user}catch(A){const C=Oo(A.code);throw e(x=>({...x,loading:!1,error:C})),new Error(C)}},[]),n=O.useCallback(async(f,p)=>{try{e(A=>({...A,loading:!0,error:null}));const _=await E_(Fr,f,p);return e({user:_.user,loading:!1,error:null}),_.user}catch(_){const A=Oo(_.code);throw e(C=>({...C,loading:!1,error:A})),new Error(A)}},[]),s=O.useCallback(async()=>{try{await P_(Fr),e({user:null,loading:!1,error:null})}catch(f){throw e(p=>({...p,error:f.message})),f}},[]),i=O.useCallback(async f=>{try{await I_(Fr,f)}catch(p){const _=Oo(p.code);throw new Error(_)}},[]),o=O.useCallback(()=>{e(f=>({...f,error:null}))},[]);return{...r,register:t,login:n,logout:s,resetPassword:i,clearError:o,isLoggedIn:!!r.user,userId:((c=r.user)==null?void 0:c.uid)||null,displayName:((l=r.user)==null?void 0:l.displayName)||((h=r.user)==null?void 0:h.email)||null}}function Oo(r){return{"auth/email-already-in-use":"该邮箱已被注册","auth/invalid-email":"邮箱格式不正确","auth/operation-not-allowed":"该登录方式未启用","auth/weak-password":"密码太弱，请使用至少6位密码","auth/user-disabled":"该账号已被禁用","auth/user-not-found":"该邮箱未注册","auth/wrong-password":"密码错误","auth/invalid-credential":"邮箱或密码错误","auth/too-many-requests":"登录失败次数过多，请稍后再试","auth/network-request-failed":"网络连接失败"}[r]||"操作失败，请重试"}function vT(r){const[e,t]=O.useState([]),[n,s]=O.useState({syncing:!1,lastSync:null,error:null});O.useEffect(()=>{if(!r){t([]);return}s(x=>({...x,syncing:!0}));const _=zu(Gn,"users",r,"orders"),A=cT(_,lT("entryDate","desc")),C=gT(A,x=>{const k=[];x.forEach($=>{const V=$.data();k.push({id:$.id,amount:V.amount,agent:V.agent,received:V.received,receiveDate:V.receiveDate,entryDate:V.entryDate,remark:V.remark||"",paid:V.paid||!1,paidDate:V.paidDate||null})}),t(k),s({syncing:!1,lastSync:new Date,error:null})},x=>{console.error("Firestore sync error:",x),s(k=>({...k,syncing:!1,error:"同步失败，请检查网络连接"}))});return()=>C()},[r]);const i=O.useCallback(async _=>{if(!r)throw new Error("请先登录");const A=zu(Gn,"users",r,"orders");await pT(A,{..._,createdAt:le.now()})},[r]),o=O.useCallback(async(_,A)=>{if(!r)throw new Error("请先登录");const C=ci(Gn,"users",r,"orders",_);await mT(C,{...A,updatedAt:le.now()})},[r]),c=O.useCallback(async _=>{if(!r)throw new Error("请先登录");const A=ci(Gn,"users",r,"orders",_);await Xu(A)},[r]),l=O.useCallback(async _=>{if(!r)throw new Error("请先登录");const A=_.map(C=>{const x=ci(Gn,"users",r,"orders",C);return Xu(x)});await Promise.all(A)},[r]),h=O.useCallback(async(_,A)=>{await o(_,{received:!0,receiveDate:A})},[o]),f=O.useCallback(async(_,A)=>{await o(_,{paid:!0,paidDate:A})},[o]),p=O.useCallback(async(_,A)=>{await o(_,{remark:A})},[o]);return{orders:e,syncState:n,addOrder:i,updateOrder:o,deleteOrder:c,batchDelete:l,markReceived:h,markPaid:f,updateRemark:p}}function Xn(){const r=new Date;return`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`}function Ju(r){const[e,t,n]=r.split("-").map(Number);return new Date(e,t-1,n)}function Xf(){const r=new Date,e=r.getFullYear(),t=r.getMonth(),n=r.getDate();let s;return n<16?s=new Date(e,t,16):s=new Date(e,t+1,1),`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`}function Jf(r){if(!r.received||!r.receiveDate||r.paid)return!1;const e=new Date(Ju(r.receiveDate));e.setDate(e.getDate()+7);const t=new Date(Ju(Xf()));return e<=t}function Di(r){if(!r)return"—";const[,e,t]=r.split("-");return`${e}月${t}日`}function ET(r){return r.trim()?/^\d{6}-\d{15}$/.test(r.trim())?{valid:!0,message:""}:{valid:!1,message:"订单号格式应为：YYMMDD-XXXXXXXXXXXXXXX"}:{valid:!1,message:"订单号不能为空"}}function TT(r){if(!r)return{valid:!1,message:"金额不能为空"};const e=Number(r);return isNaN(e)||e<=0?{valid:!1,message:"请输入有效的正数金额"}:{valid:!0,message:""}}function wT(r,e,t){return r.filter(n=>{const s=e==="all"||(e==="received"?n.received:!n.received),i=t.toLowerCase(),o=n.id.toLowerCase().includes(i)||n.agent.includes(t)||(n.remark||"").toLowerCase().includes(i);return s&&o})}function AT(r){const e=["订单号","金额（¥）","客服","收货状态","收货日期","收款状态","收款日期","录入日期","备注"],t=r.map(c=>[c.id,c.amount.toString(),c.agent,c.received?"已收货":"未收货",c.receiveDate||"",c.paid?"已收款":"未收款",c.paidDate||"",c.entryDate||"历史",c.remark||""]),n=[e,...t].map(c=>c.map(l=>`"${String(l).replace(/"/g,'""')}"`).join(",")).join(`
`),s=new Blob(["\uFEFF"+n],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(s),o=document.createElement("a");o.href=i,o.download=`订单台账_${Xn()}.csv`,o.click(),URL.revokeObjectURL(i)}function bT(r,e,t){const n=O.useMemo(()=>wT(r,e,t),[r,e,t]),s=O.useMemo(()=>n.filter(h=>!h.paid),[n]),i=O.useMemo(()=>n.filter(h=>h.paid),[n]),o=O.useMemo(()=>{const h=r.length,f=r.reduce((x,k)=>x+k.amount,0),p=r.filter(x=>x.received&&!x.paid).reduce((x,k)=>x+k.amount,0),_=r.filter(x=>x.paid).reduce((x,k)=>x+k.amount,0),A=Xf(),C=r.filter(x=>Jf(x)&&x.receiveDate===A).reduce((x,k)=>x+k.amount,0);return{totalOrders:h,totalAmount:f,receivedAmount:p,paidAmount:_,settleableAmount:C,nextDateStr:A||"-"}},[r]),c=O.useMemo(()=>{const h={};return s.forEach((f,p)=>{f.agent in h||(h[f.agent]=p)}),h},[s]),l=O.useMemo(()=>{const h={};return i.forEach((f,p)=>{f.agent in h||(h[f.agent]=p)}),h},[i]);return{filteredOrders:n,filteredUnpaid:s,filteredPaid:i,stats:o,agentFirstIndex:c,paidAgentFirstIndex:l}}function RT(){const[r,e]=O.useState(null),t=O.useCallback(s=>{e(s)},[]),n=O.useCallback(()=>{e(null)},[]);return{toast:r,notify:t,hideToast:n}}const PT="Toast-module__toast___FLdHz",ST={toast:PT},Yf=O.memo(({message:r,onClose:e})=>(O.useEffect(()=>{const t=setTimeout(e,2e3);return()=>clearTimeout(t)},[e]),v.jsx("div",{className:ST.toast,children:r})));Yf.displayName="Toast";const CT="OrderForm-module__form___qdAdW",DT="OrderForm-module__title___dl6ju",xT="OrderForm-module__grid___DYyIt",kT="OrderForm-module__grid2___akE4T",NT="OrderForm-module__label___vLfkw",VT="OrderForm-module__input___940nH",OT="OrderForm-module__inputError___7ksAa",MT="OrderForm-module__error___poWSm",LT="OrderForm-module__checkboxContainer___Saj1-",FT="OrderForm-module__checkboxLabel___WQDa2",UT="OrderForm-module__dateRow___-QvaB",jT="OrderForm-module__dateInput___FcTgS",BT="OrderForm-module__hint___Mx0Dv",qT="OrderForm-module__actions___Z4N06",$T="OrderForm-module__btnPrimary___B7LvR",GT="OrderForm-module__btnGhost___dE22k",ce={form:CT,title:DT,grid:xT,grid2:kT,label:NT,input:VT,inputError:OT,error:MT,checkboxContainer:LT,checkboxLabel:FT,dateRow:UT,dateInput:jT,hint:BT,actions:qT,btnPrimary:$T,btnGhost:GT},Zf=O.memo(({onSubmit:r,onClose:e,existingIds:t})=>{const[n,s]=O.useState(cl),[i,o]=O.useState({}),c=O.useCallback((h,f)=>{s(p=>({...p,[h]:f})),h in i&&o(p=>({...p,[h]:void 0}))},[i]),l=O.useCallback(()=>{const h=ET(n.id);if(!h.valid){o(p=>({...p,id:h.message}));return}if(t.includes(n.id.trim())){o(p=>({...p,id:"订单号已存在"}));return}const f=TT(n.amount);if(!f.valid){o(p=>({...p,amount:f.message}));return}r({id:n.id.trim(),amount:Number(n.amount),agent:n.agent,received:n.received,receiveDate:n.received?n.receiveDate||Xn():"",remark:n.remark}),s(cl),o({}),e()},[n,t,r,e]);return v.jsxs("div",{className:ce.form,children:[v.jsx("div",{className:ce.title,children:"新增订单"}),v.jsxs("div",{className:ce.grid,children:[v.jsxs("div",{children:[v.jsx("div",{className:ce.label,children:"订单号"}),v.jsx("input",{className:`${ce.input} ${i.id?ce.inputError:""}`,placeholder:"260418-XXXXXXXXXXXXXXX",value:n.id,onChange:h=>c("id",h.target.value)}),i.id&&v.jsx("div",{className:ce.error,children:i.id})]}),v.jsxs("div",{children:[v.jsx("div",{className:ce.label,children:"金额（¥）"}),v.jsx("input",{className:`${ce.input} ${i.amount?ce.inputError:""}`,type:"number",placeholder:"170",value:n.amount,onChange:h=>c("amount",h.target.value)}),i.amount&&v.jsx("div",{className:ce.error,children:i.amount})]}),v.jsxs("div",{children:[v.jsx("div",{className:ce.label,children:"客服"}),v.jsx("select",{className:ce.input,value:n.agent,onChange:h=>c("agent",h.target.value),children:th.map(h=>v.jsx("option",{children:h},h))})]})]}),v.jsxs("div",{className:ce.grid2,children:[v.jsxs("div",{children:[v.jsx("div",{className:ce.label,children:"备注（房子名称等）"}),v.jsx("input",{className:ce.input,placeholder:"如：万科翡翠山 A栋",value:n.remark,onChange:h=>c("remark",h.target.value)})]}),v.jsx("div",{className:ce.checkboxContainer,children:v.jsxs("label",{className:ce.checkboxLabel,children:[v.jsx("input",{type:"checkbox",checked:n.received,onChange:h=>c("received",h.target.checked)}),"已收货"]})})]}),n.received&&v.jsxs("div",{className:ce.dateRow,children:[v.jsx("span",{className:ce.label,children:"收货日期"}),v.jsx("input",{className:ce.dateInput,type:"date",value:n.receiveDate,onChange:h=>c("receiveDate",h.target.value)})]}),v.jsxs("div",{className:ce.hint,children:["录入日期将自动记录为今天：",Xn()]}),v.jsxs("div",{className:ce.actions,children:[v.jsx("button",{className:ce.btnPrimary,onClick:l,children:"确认添加"}),v.jsx("button",{className:ce.btnGhost,onClick:e,children:"取消"})]})]})});Zf.displayName="OrderForm";const zT="StatusBadge-module__container___MFHY9",KT="StatusBadge-module__paid___EbkKZ",WT="StatusBadge-module__received___k-Fcv",HT="StatusBadge-module__pending___MD6U-",QT="StatusBadge-module__settleable___lgOCE",Ur={container:zT,paid:KT,received:WT,pending:HT,settleable:QT},em=O.memo(({order:r})=>{if(r.paid)return v.jsx("span",{className:Ur.paid,children:"已收款"});if(r.received){const e=Jf(r);return v.jsxs("div",{className:Ur.container,children:[v.jsx("span",{className:Ur.received,children:"已收货"}),e&&v.jsx("span",{className:Ur.settleable,children:"✦ 可结算"})]})}return v.jsx("span",{className:Ur.pending,children:"未收货"})});em.displayName="StatusBadge";const XT="RemarkCell-module__editContainer___HHFi1",JT="RemarkCell-module__input___4KraE",YT="RemarkCell-module__saveBtn___b7Qn2",ZT="RemarkCell-module__cancelBtn___v5KBh",ew="RemarkCell-module__display___uB0Kh",jr={editContainer:XT,input:JT,saveBtn:YT,cancelBtn:ZT,display:ew},tm=O.memo(({value:r,onSave:e})=>{const[t,n]=O.useState(!1),[s,i]=O.useState(r||""),o=O.useCallback(()=>{e(s),n(!1)},[s,e]),c=O.useCallback(h=>{h.key==="Enter"&&o(),h.key==="Escape"&&n(!1)},[o]),l=O.useCallback(()=>{i(r||""),n(!0)},[r]);return t?v.jsxs("div",{className:jr.editContainer,children:[v.jsx("input",{autoFocus:!0,value:s,onChange:h=>i(h.target.value),onKeyDown:c,className:jr.input}),v.jsx("button",{onClick:o,className:jr.saveBtn,children:"✓"}),v.jsx("button",{onClick:()=>n(!1),className:jr.cancelBtn,children:"✕"})]}):v.jsx("div",{onClick:l,title:"点击编辑备注",className:jr.display,children:r||"添加备注…"})});tm.displayName="RemarkCell";const tw="OrderRow-module__row___udPZW",nw="OrderRow-module__groupRow___Zv9Q9",rw="OrderRow-module__cell___fBCcW",sw="OrderRow-module__checkboxCell___9lrbS",iw="OrderRow-module__checkbox___iRa35",ow="OrderRow-module__agentName___o-1F1",aw="OrderRow-module__agentCount___myAPo",cw="OrderRow-module__indent___sqViW",lw="OrderRow-module__orderId___TSi6f",uw="OrderRow-module__amount___FOtLD",hw="OrderRow-module__date___IvGVN",dw="OrderRow-module__entryDate___R3lRm",fw="OrderRow-module__history___GNgho",mw="OrderRow-module__actions___uwRKy",pw="OrderRow-module__btnGhost___eIhAA",gw="OrderRow-module__btnPaid___ckdCv",_w="OrderRow-module__btnDanger___-DvgM",ye={row:tw,groupRow:nw,cell:rw,checkboxCell:sw,checkbox:iw,agentName:ow,agentCount:aw,indent:cw,orderId:lw,amount:uw,date:hw,entryDate:dw,history:fw,actions:mw,btnGhost:pw,btnPaid:gw,btnDanger:_w},nm=O.memo(({order:r,isGroupStart:e,agentCount:t,isSelected:n,onSelect:s,onMarkReceived:i,onMarkPaid:o,onUpdateRemark:c,onDelete:l})=>{const h=O.useCallback(()=>{s(r.id)},[r.id,s]),f=O.useCallback(()=>{i(r.id)},[r.id,i]),p=O.useCallback(()=>{o(r.id)},[r.id,o]),_=O.useCallback(C=>{c(r.id,C)},[r.id,c]),A=O.useCallback(()=>{l(r.id)},[r.id,l]);return v.jsxs("tr",{className:`${ye.row} ${e?ye.groupRow:""}`,children:[v.jsx("td",{className:ye.cell,children:v.jsxs("div",{className:ye.checkboxCell,children:[v.jsx("input",{type:"checkbox",checked:n,onChange:h,className:ye.checkbox}),e?v.jsxs("div",{children:[v.jsx("div",{className:ye.agentName,children:r.agent}),v.jsxs("div",{className:ye.agentCount,children:[t," 单"]})]}):v.jsx("span",{className:ye.indent,children:"↓"})]})}),v.jsx("td",{className:ye.orderId,children:r.id}),v.jsxs("td",{className:ye.amount,children:["¥",r.amount]}),v.jsx("td",{className:ye.cell,children:v.jsx(tm,{value:r.remark,onSave:_})}),v.jsx("td",{className:ye.cell,children:v.jsx(em,{order:r})}),v.jsx("td",{className:ye.date,children:r.receiveDate?Di(r.receiveDate):"—"}),v.jsx("td",{className:ye.date,children:r.entryDate?v.jsx("span",{className:ye.entryDate,children:Di(r.entryDate)}):v.jsx("span",{className:ye.history,children:"历史"})}),v.jsx("td",{className:ye.cell,children:v.jsxs("div",{className:ye.actions,children:[!r.received&&v.jsx("button",{className:ye.btnGhost,onClick:f,children:"确认收货"}),r.received&&!r.paid&&v.jsx("button",{className:ye.btnPaid,onClick:p,children:"确认收款"}),v.jsx("button",{className:ye.btnDanger,onClick:A,children:"删除"})]})})]})});nm.displayName="OrderRow";const yw="StatsCard-module__card___KGiVf",Iw="StatsCard-module__label___ZxnJS",vw="StatsCard-module__value___tfHwR",Mo={card:yw,label:Iw,value:vw},rm=O.memo(({stats:r})=>{const e=r.bg==="#1a1a1a";return v.jsxs("div",{className:Mo.card,style:{background:r.bg,borderColor:r.border},children:[v.jsx("div",{className:Mo.label,style:{color:e?"#666":"#aaa"},children:r.label}),v.jsx("div",{className:Mo.value,style:{color:r.color},children:r.value})]})});rm.displayName="StatsCard";const Ew="PaidOrdersSection-module__section___6TiW-",Tw="PaidOrdersSection-module__header___1bgFZ",ww="PaidOrdersSection-module__headerLeft___uh6SZ",Aw="PaidOrdersSection-module__title___roxwF",bw="PaidOrdersSection-module__badge___xDZwe",Rw="PaidOrdersSection-module__arrow___MC-ka",Pw="PaidOrdersSection-module__content___TqdJc",Sw="PaidOrdersSection-module__table___u0pCg",Cw="PaidOrdersSection-module__th___E-fe1",Dw="PaidOrdersSection-module__row___W-xVd",xw="PaidOrdersSection-module__td___e77Or",kw="PaidOrdersSection-module__agentName___-0tSy",Nw="PaidOrdersSection-module__agentCount___69NgG",Vw="PaidOrdersSection-module__indent___IxoIY",Ow="PaidOrdersSection-module__orderId___kByTX",Mw="PaidOrdersSection-module__amount___gz7lb",Lw="PaidOrdersSection-module__noRemark___VzxA3",Fw="PaidOrdersSection-module__date___Gn7QH",Uw="PaidOrdersSection-module__paidDate___gNB9y",jw="PaidOrdersSection-module__empty___1mnSc",Bw="PaidOrdersSection-module__btnDanger___J7I-a",fe={section:Ew,header:Tw,headerLeft:ww,title:Aw,badge:bw,arrow:Rw,content:Pw,table:Sw,th:Cw,row:Dw,td:xw,agentName:kw,agentCount:Nw,indent:Vw,orderId:Ow,amount:Mw,noRemark:Lw,date:Fw,paidDate:Uw,empty:jw,btnDanger:Bw},sm=O.memo(({orders:r,agentFirstIndex:e,onDelete:t})=>{const[n,s]=Yu.useState(!1),i=r.reduce((c,l)=>c+l.amount,0),o=O.useCallback(c=>{t(c)},[t]);return v.jsxs("div",{className:fe.section,children:[v.jsxs("div",{className:fe.header,onClick:()=>s(c=>!c),children:[v.jsxs("div",{className:fe.headerLeft,children:[v.jsx("span",{className:fe.title,children:"已收款订单"}),v.jsxs("span",{className:fe.badge,children:[r.length," 单 · ¥",i.toLocaleString()]})]}),v.jsx("span",{className:fe.arrow,style:{transform:n?"rotate(180deg)":"rotate(0deg)"},children:"▾"})]}),n&&v.jsx("div",{className:fe.content,children:v.jsxs("table",{className:fe.table,children:[v.jsx("thead",{children:v.jsx("tr",{children:["客服","订单号","金额","备注","收货日期","收款日期","操作"].map(c=>v.jsx("th",{className:fe.th,children:c},c))})}),v.jsx("tbody",{children:r.length===0?v.jsx("tr",{children:v.jsx("td",{colSpan:7,className:fe.empty,children:"暂无已收款订单"})}):r.map((c,l)=>{const h=e[c.agent]===l,f=r.filter(p=>p.agent===c.agent).length;return v.jsxs("tr",{className:fe.row,children:[v.jsx("td",{className:fe.td,children:h?v.jsxs("div",{children:[v.jsx("div",{className:fe.agentName,children:c.agent}),v.jsxs("div",{className:fe.agentCount,children:[f," 单"]})]}):v.jsx("span",{className:fe.indent,children:"↓"})}),v.jsx("td",{className:fe.orderId,children:c.id}),v.jsxs("td",{className:fe.amount,children:["¥",c.amount]}),v.jsx("td",{className:fe.td,children:c.remark||v.jsx("span",{className:fe.noRemark,children:"—"})}),v.jsx("td",{className:fe.date,children:c.receiveDate?Di(c.receiveDate):"—"}),v.jsx("td",{className:fe.paidDate,children:c.paidDate?Di(c.paidDate):"—"}),v.jsx("td",{className:fe.td,children:v.jsx("button",{className:fe.btnDanger,onClick:()=>o(c.id),children:"删除"})})]},c.id)})})]})})]})});sm.displayName="PaidOrdersSection";const qw="InstallPrompt-module__container___zgP6A",$w="InstallPrompt-module__prompt___XA9zt",Gw="InstallPrompt-module__installed___jRhkB",zw="InstallPrompt-module__offline___lYLiA",Kw="InstallPrompt-module__icon___QxhrQ",Ww="InstallPrompt-module__content___iV3rk",Hw="InstallPrompt-module__title___uc9XD",Qw="InstallPrompt-module__desc___5Dylf",Xw="InstallPrompt-module__actions___NtXtX",Jw="InstallPrompt-module__installBtn___03SP8",Yw="InstallPrompt-module__dismissBtn___jSj1r",Zw="InstallPrompt-module__closeBtn___3pCYV",ue={container:qw,prompt:$w,installed:Gw,offline:zw,icon:Kw,content:Ww,title:Hw,desc:Qw,actions:Xw,installBtn:Jw,dismissBtn:Yw,closeBtn:Zw},im=O.memo(({isVisible:r,isInstallable:e,isInstalled:t,isOffline:n,onInstall:s,onDismiss:i})=>r?t?v.jsx("div",{className:ue.container,children:v.jsxs("div",{className:`${ue.prompt} ${ue.installed}`,children:[v.jsx("div",{className:ue.icon,children:"✓"}),v.jsxs("div",{className:ue.content,children:[v.jsx("div",{className:ue.title,children:"应用已安装"}),v.jsx("div",{className:ue.desc,children:"您可以从主屏幕快速访问订单管理"})]}),v.jsx("button",{className:ue.closeBtn,onClick:i,children:"✕"})]})}):n?v.jsx("div",{className:ue.container,children:v.jsxs("div",{className:`${ue.prompt} ${ue.offline}`,children:[v.jsx("div",{className:ue.icon,children:"📡"}),v.jsxs("div",{className:ue.content,children:[v.jsx("div",{className:ue.title,children:"离线模式"}),v.jsx("div",{className:ue.desc,children:"您正在离线使用，数据将保存在本地"})]})]})}):e?v.jsx("div",{className:ue.container,children:v.jsxs("div",{className:ue.prompt,children:[v.jsx("div",{className:ue.icon,children:"📱"}),v.jsxs("div",{className:ue.content,children:[v.jsx("div",{className:ue.title,children:"添加到主屏幕"}),v.jsx("div",{className:ue.desc,children:"安装后像 App 一样使用，离线也能访问"})]}),v.jsxs("div",{className:ue.actions,children:[v.jsx("button",{className:ue.installBtn,onClick:s,children:"安装"}),v.jsx("button",{className:ue.dismissBtn,onClick:i,children:"稍后"})]})]})}):null:null);im.displayName="InstallPrompt";const eA="AuthForm-module__container___dipm9",tA="AuthForm-module__card___zCPey",nA="AuthForm-module__header___T3m2B",rA="AuthForm-module__title___L4eK-",sA="AuthForm-module__subtitle___5gZRt",iA="AuthForm-module__form___Ry1iO",oA="AuthForm-module__field___cnbtJ",aA="AuthForm-module__label___Kwv8E",cA="AuthForm-module__input___OhFTr",lA="AuthForm-module__error___btaoz",uA="AuthForm-module__submitBtn___1Z2oX",hA="AuthForm-module__footer___zmVTj",dA="AuthForm-module__footerText___8z8mv",fA="AuthForm-module__switchBtn___xA3aH",mA="AuthForm-module__hint___-FXdv",Ie={container:eA,card:tA,header:nA,title:rA,subtitle:sA,form:iA,field:oA,label:aA,input:cA,error:lA,submitBtn:uA,footer:hA,footerText:dA,switchBtn:fA,hint:mA},om=O.memo(({onLogin:r,onRegister:e,loading:t,error:n,clearError:s})=>{const[i,o]=O.useState(!1),[c,l]=O.useState(""),[h,f]=O.useState(""),[p,_]=O.useState(""),[A,C]=O.useState(""),x=async V=>{if(V.preventDefault(),s(),C(""),!c.trim()){C("请输入邮箱");return}if(!h){C("请输入密码");return}if(h.length<6){C("密码至少6位");return}if(i){if(h!==p){C("两次密码不一致");return}await e(c.trim(),h)}else await r(c.trim(),h)},k=()=>{o(!i),C(""),s()},$=A||n;return v.jsx("div",{className:Ie.container,children:v.jsxs("div",{className:Ie.card,children:[v.jsxs("div",{className:Ie.header,children:[v.jsx("h1",{className:Ie.title,children:"订单管理系统"}),v.jsx("p",{className:Ie.subtitle,children:i?"创建账号，开启云端同步":"登录账号，同步您的数据"})]}),v.jsxs("form",{onSubmit:x,className:Ie.form,children:[v.jsxs("div",{className:Ie.field,children:[v.jsx("label",{className:Ie.label,children:"邮箱"}),v.jsx("input",{type:"email",className:Ie.input,placeholder:"your@email.com",value:c,onChange:V=>l(V.target.value),disabled:t})]}),v.jsxs("div",{className:Ie.field,children:[v.jsx("label",{className:Ie.label,children:"密码"}),v.jsx("input",{type:"password",className:Ie.input,placeholder:"至少6位密码",value:h,onChange:V=>f(V.target.value),disabled:t})]}),i&&v.jsxs("div",{className:Ie.field,children:[v.jsx("label",{className:Ie.label,children:"确认密码"}),v.jsx("input",{type:"password",className:Ie.input,placeholder:"再次输入密码",value:p,onChange:V=>_(V.target.value),disabled:t})]}),$&&v.jsx("div",{className:Ie.error,children:$}),v.jsx("button",{type:"submit",className:Ie.submitBtn,disabled:t,children:t?"处理中...":i?"注册":"登录"})]}),v.jsxs("div",{className:Ie.footer,children:[v.jsx("span",{className:Ie.footerText,children:i?"已有账号？":"没有账号？"}),v.jsx("button",{type:"button",className:Ie.switchBtn,onClick:k,children:i?"立即登录":"立即注册"})]}),v.jsxs("div",{className:Ie.hint,children:[v.jsx("p",{children:"💡 注册后可在多设备间同步数据"}),v.jsx("p",{children:"🔒 数据安全存储在云端"})]})]})})});om.displayName="AuthForm";const pA="UserInfo-module__container___F2PW5",gA="UserInfo-module__info___MQLet",_A="UserInfo-module__avatar___HuFlI",yA="UserInfo-module__details___QViyI",IA="UserInfo-module__email___JQcvd",vA="UserInfo-module__syncing___B0ZWb",EA="UserInfo-module__logoutBtn___RXq6G",rn={container:pA,info:gA,avatar:_A,details:yA,email:IA,syncing:vA,logoutBtn:EA},am=O.memo(({email:r,onLogout:e,syncing:t})=>v.jsxs("div",{className:rn.container,children:[v.jsxs("div",{className:rn.info,children:[v.jsx("div",{className:rn.avatar,children:r.charAt(0).toUpperCase()}),v.jsxs("div",{className:rn.details,children:[v.jsx("div",{className:rn.email,children:r}),t&&v.jsx("div",{className:rn.syncing,children:"同步中..."})]})]}),v.jsx("button",{className:rn.logoutBtn,onClick:e,children:"退出登录"})]}));am.displayName="UserInfo";const TA="App-module__container___7v2Yg",wA="App-module__content___KyCTW",AA="App-module__btnPrimary___CjPav",bA="App-module__btnGhost___Ipnwx",RA="App-module__btnGreen___MeOim",PA="App-module__btnDanger___IobJ-",SA="App-module__input___-D9Bz",CA="App-module__tab___OY-In",DA="App-module__tabActive___PxvTA",xA="App-module__saveBadge___VPhG2",kA="App-module__table___PYfsX",NA="App-module__tableHeader___3nN-g",VA="App-module__statsGrid___y4zF-",OA="App-module__header___DVhBb",MA="App-module__headerSubtitle___OKyxa",LA="App-module__headerTitle___-BLPn",FA="App-module__headerActions___BJmv2",UA="App-module__filterBar___BPNDq",jA="App-module__filterTabs___r6kLy",BA="App-module__tableContainer___l7LMN",qA="App-module__footer___oi28L",$A="App-module__footerInfo___ohuNi",GA="App-module__emptyState___vXMa1",zA="App-module__batchBar___H6lfE",KA="App-module__batchInfo___J6Y6h",WA="App-module__batchActions___RolMz",HA="App-module__checkbox___j2xuN",te={container:TA,content:wA,btnPrimary:AA,btnGhost:bA,btnGreen:RA,btnDanger:PA,input:SA,tab:CA,tabActive:DA,saveBadge:xA,table:kA,tableHeader:NA,statsGrid:VA,header:OA,headerSubtitle:MA,headerTitle:LA,headerActions:FA,filterBar:UA,filterTabs:jA,tableContainer:BA,footer:qA,footerInfo:$A,emptyState:GA,batchBar:zA,batchInfo:KA,batchActions:WA,checkbox:HA};function QA(){const{loading:r,error:e,login:t,register:n,logout:s,clearError:i,isLoggedIn:o,userId:c,displayName:l}=IT(),{orders:h,syncState:f,addOrder:p,markReceived:_,markPaid:A,updateRemark:C,deleteOrder:x,batchDelete:k}=vT(c),{toast:$,notify:V,hideToast:B}=RT(),{isInstallable:X,isInstalled:ne,isOffline:H,promptInstall:E}=Gm(),[g,I]=O.useState(!0),[T,w]=O.useState(!1),[R,y]=O.useState("all"),[Je,Qt]=O.useState(""),[qe,We]=O.useState(new Set),{filteredUnpaid:$e,filteredPaid:mr,stats:nt,agentFirstIndex:eo,paidAgentFirstIndex:rt}=bT(h,R,Je),be=O.useMemo(()=>[{label:"订单总数",value:`${nt.totalOrders} 单`,color:"#1a1a1a",bg:"#fff",border:"#e8e4de"},{label:"订单总金额",value:`¥${nt.totalAmount.toLocaleString()}`,color:"#1a1a1a",bg:"#fff",border:"#e8e4de"},{label:"待收款金额",value:`¥${nt.receivedAmount.toLocaleString()}`,color:"#065f46",bg:"#fff",border:"#e8e4de"},{label:`本次可结算 (${nt.nextDateStr})`,value:`¥${nt.settleableAmount.toLocaleString()}`,color:"#fff",bg:"#1a1a1a",border:"#1a1a1a"},{label:"累计已收款",value:`¥${nt.paidAmount.toLocaleString()}`,color:"#5b21b6",bg:"#f5f3ff",border:"#ddd6fe"}],[nt]),to=O.useCallback(async(z,_e)=>{await t(z,_e),V("✅ 登录成功")},[t,V]),Xt=O.useCallback(async(z,_e)=>{await n(z,_e),V("✅ 注册成功")},[n,V]),no=O.useCallback(async()=>{await s(),V("已退出登录")},[s,V]),Cn=O.useCallback(async z=>{await p(z),V("✅ 订单已添加")},[p,V]),ro=O.useCallback(async z=>{await _(z,Xn()),V("✅ 已标记收货")},[_,V]),so=O.useCallback(async z=>{await A(z,Xn()),V("💰 已标记收款")},[A,V]),Dn=O.useCallback(async(z,_e)=>{await C(z,_e),V("✅ 备注已保存")},[C,V]),Jt=O.useCallback(async z=>{await x(z),V("🗑 订单已删除"),We(_e=>{const Oe=new Set(_e);return Oe.delete(z),Oe})},[x,V]),pr=O.useCallback(()=>{AT(h),V("📥 CSV 文件已导出")},[h,V]),gr=O.useCallback(z=>{We(_e=>{const Oe=new Set(_e);return Oe.has(z)?Oe.delete(z):Oe.add(z),Oe})},[]),_r=O.useCallback(()=>{qe.size===$e.length?We(new Set):We(new Set($e.map(z=>z.id)))},[qe.size,$e]),yr=O.useCallback(async()=>{qe.size!==0&&(await k(Array.from(qe)),V(`🗑 已删除 ${qe.size} 个订单`),We(new Set))},[qe,k,V]),Rs=O.useCallback(async()=>{const z=Array.from(qe).filter(_e=>{const Oe=h.find(Ir=>Ir.id===_e);return Oe&&!Oe.received});if(z.length===0){V("没有可标记收货的订单");return}for(const _e of z)await _(_e,Xn());V(`✅ 已标记 ${z.length} 个订单收货`),We(new Set)},[qe,h,_,V]);return r?v.jsx("div",{className:te.container,children:v.jsx("div",{className:te.loading,children:"加载中..."})}):o?v.jsxs("div",{className:te.container,children:[v.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&display=swap');
        * { box-sizing: border-box; }
        input, select { font-family: inherit; }
      `}),v.jsx(im,{isVisible:g,isInstallable:X,isInstalled:ne,isOffline:H,onInstall:E,onDismiss:()=>I(!1)}),$&&v.jsx(Yf,{message:$,onClose:B}),v.jsxs("div",{className:te.content,children:[v.jsx(am,{email:l||"",onLogout:no,syncing:f.syncing}),v.jsxs("div",{className:te.header,children:[v.jsxs("div",{children:[v.jsx("div",{className:te.headerSubtitle,children:"订单管理系统"}),v.jsx("h1",{className:te.headerTitle,children:"收货台账"}),v.jsx("div",{style:{marginTop:6},children:v.jsx("span",{className:te.saveBadge,children:"☁️ 云端同步 · 多设备互通"})})]}),v.jsxs("div",{className:te.headerActions,children:[v.jsx("button",{className:te.btnGreen,onClick:pr,children:"导出 CSV"}),v.jsx("button",{className:te.btnPrimary,onClick:()=>w(z=>!z),children:T?"取消":"+ 新增订单"})]})]}),v.jsx("div",{className:te.statsGrid,children:be.map((z,_e)=>v.jsx(rm,{stats:z},_e))}),T&&v.jsx(Zf,{onSubmit:Cn,onClose:()=>w(!1),existingIds:h.map(z=>z.id)}),qe.size>0&&v.jsxs("div",{className:te.batchBar,children:[v.jsxs("span",{className:te.batchInfo,children:["已选择 ",qe.size," 个订单"]}),v.jsxs("div",{className:te.batchActions,children:[v.jsx("button",{className:te.btnGhost,onClick:Rs,children:"批量确认收货"}),v.jsx("button",{className:te.btnDanger,onClick:yr,children:"批量删除"}),v.jsx("button",{className:te.btnGhost,onClick:()=>We(new Set),children:"取消选择"})]})]}),v.jsxs("div",{className:te.filterBar,children:[v.jsx("div",{className:te.filterTabs,children:$m.map(({value:z,label:_e})=>v.jsx("button",{className:`${te.tab} ${R===z?te.tabActive:""}`,onClick:()=>y(z),children:_e},z))}),v.jsx("input",{className:te.input,style:{width:230},placeholder:"搜索订单号 / 客服 / 备注",value:Je,onChange:z=>Qt(z.target.value)})]}),v.jsx("div",{className:te.tableContainer,children:v.jsxs("table",{className:te.table,children:[v.jsx("thead",{children:v.jsxs("tr",{children:[v.jsx("th",{className:te.tableHeader,style:{width:40},children:v.jsx("input",{type:"checkbox",checked:qe.size===$e.length&&$e.length>0,onChange:_r,className:te.checkbox})}),qm.map(z=>v.jsx("th",{className:te.tableHeader,children:z},z))]})}),v.jsx("tbody",{children:$e.length===0?v.jsx("tr",{children:v.jsx("td",{colSpan:9,className:te.emptyState,children:"暂无待收款订单"})}):$e.map((z,_e)=>v.jsx(nm,{order:z,isGroupStart:eo[z.agent]===_e,agentCount:$e.filter(Oe=>Oe.agent===z.agent).length,isSelected:qe.has(z.id),onSelect:gr,onMarkReceived:ro,onMarkPaid:so,onUpdateRemark:Dn,onDelete:Jt},z.id))})]})}),v.jsx(sm,{orders:mr,agentFirstIndex:rt,onDelete:Jt}),v.jsx("div",{className:te.footer,children:v.jsxs("div",{className:te.footerInfo,children:["共 ",h.length," 条记录 · 云端实时同步"]})})]})]}):v.jsxs("div",{className:te.container,children:[v.jsx("style",{children:`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&display=swap');
        `}),v.jsx(om,{onLogin:to,onRegister:Xt,loading:r,error:e,clearError:i})]})}const XA=Lo.createRoot(document.getElementById("root"));XA.render(v.jsx(Yu.StrictMode,{children:v.jsx(QA,{})}));
