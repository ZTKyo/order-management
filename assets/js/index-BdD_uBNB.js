import{r as V,a as md,R as yl}from"./react-vendor-nf7bT_Uh.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var vl={exports:{}},Ds={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d=V,gd=Symbol.for("react.element"),yd=Symbol.for("react.fragment"),vd=Object.prototype.hasOwnProperty,Ed=_d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Id={key:!0,ref:!0,__self:!0,__source:!0};function El(n,e,t){var r,s={},i=null,a=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)vd.call(e,r)&&!Id.hasOwnProperty(r)&&(s[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:gd,type:n,key:i,ref:a,props:s,_owner:Ed.current}}Ds.Fragment=yd;Ds.jsx=El;Ds.jsxs=El;vl.exports=Ds;var v=vl.exports,Ni={},Qa=md;Ni.createRoot=Qa.createRoot,Ni.hydrateRoot=Qa.hydrateRoot;const Xa="custom_agents_v1",Il=["小琪","小八","小吕"],Td=Il,Ya={id:"",amount:"",agent:Td[0],received:!1,receiveDate:"",remark:""},wd=["客服","订单号","金额","备注","状态","收货日期","录入日期","操作"],Ad=[{value:"all",label:"全部"},{value:"received",label:"已收货"},{value:"pending",label:"未收货"}];function Rd(){const[n,e]=V.useState({isInstallable:!1,isInstalled:!1,isOffline:!navigator.onLine,deferredPrompt:null});V.useEffect(()=>{"serviceWorker"in navigator&&(window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(s=>{console.log("[PWA] SW registered:",s.scope),s.addEventListener("updatefound",()=>{const i=s.installing;i&&i.addEventListener("statechange",()=>{i.state==="installed"&&navigator.serviceWorker.controller&&window.confirm("发现新版本，是否立即更新？")&&(i.postMessage("skipWaiting"),window.location.reload())})})}).catch(s=>{console.error("[PWA] SW registration failed:",s)})}),navigator.serviceWorker.addEventListener("controllerchange",()=>{console.log("[PWA] Controller changed, reloading..."),window.location.reload()}))},[]),V.useEffect(()=>{const s=()=>{e(a=>({...a,isOffline:!1})),console.log("[PWA] 网络已连接")},i=()=>{e(a=>({...a,isOffline:!0})),console.log("[PWA] 网络已断开")};return window.addEventListener("online",s),window.addEventListener("offline",i),()=>{window.removeEventListener("online",s),window.removeEventListener("offline",i)}},[]),V.useEffect(()=>{const s=a=>{a.preventDefault(),e(l=>({...l,deferredPrompt:a,isInstallable:!0})),console.log("[PWA] App is installable")},i=()=>{e(a=>({...a,isInstalled:!0,isInstallable:!1,deferredPrompt:null})),console.log("[PWA] App was installed")};return window.addEventListener("beforeinstallprompt",s),window.addEventListener("appinstalled",i),window.matchMedia("(display-mode: standalone)").matches&&e(a=>({...a,isInstalled:!0})),()=>{window.removeEventListener("beforeinstallprompt",s),window.removeEventListener("appinstalled",i)}},[]);const t=V.useCallback(async()=>{if(!n.deferredPrompt)return;n.deferredPrompt.prompt();const{outcome:s}=await n.deferredPrompt.userChoice;console.log(s==="accepted"?"[PWA] User accepted install":"[PWA] User dismissed install"),e(i=>({...i,deferredPrompt:null,isInstallable:!1}))},[n.deferredPrompt]),r=V.useCallback(async()=>{"serviceWorker"in navigator&&(await(await navigator.serviceWorker.ready).update(),console.log("[PWA] Checking for updates..."))},[]);return{...n,promptInstall:t,checkUpdate:r}}var Ja={};/**
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
 */const Tl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},bd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},wl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,p=i>>2,y=(i&3)<<4|l>>4;let E=(l&15)<<2|d>>6,S=d&63;u||(S=64,a||(E=64)),r.push(t[p],t[y],t[E],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Tl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):bd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const y=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||d==null||y==null)throw new Sd;const E=i<<2|l>>4;if(r.push(E),d!==64){const S=l<<4&240|d>>2;if(r.push(S),y!==64){const P=d<<6&192|y;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Sd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pd=function(n){const e=Tl(n);return wl.encodeByteArray(e,!0)},Al=function(n){return Pd(n).replace(/\./g,"")},Rl=function(n){try{return wl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Cd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kd=()=>Cd().__FIREBASE_DEFAULTS__,Nd=()=>{if(typeof process>"u"||typeof Ja>"u")return;const n=Ja.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Dd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Rl(n[1]);return e&&JSON.parse(e)},Vs=()=>{try{return kd()||Nd()||Dd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Vd=n=>{var e,t;return(t=(e=Vs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},bl=()=>{var n;return(n=Vs())===null||n===void 0?void 0:n.config},Sl=n=>{var e;return(e=Vs())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Od{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function Ld(){var n;const e=(n=Vs())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Md(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Fd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ud(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jd(){const n=ke();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Bd(){return!Ld()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $d(){try{return typeof indexedDB=="object"}catch{return!1}}function qd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const zd="FirebaseError";class dt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=zd,Object.setPrototypeOf(this,dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ar.prototype.create)}}class Ar{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Wd(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new dt(s,l,r)}}function Wd(n,e){return n.replace(Gd,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Gd=/\{\$([^}]+)}/g;function Hd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function fr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Za(i)&&Za(a)){if(!fr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Za(n){return n!==null&&typeof n=="object"}/**
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
 */function Rr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function nr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function rr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Kd(n,e){const t=new Qd(n,e);return t.subscribe.bind(t)}class Qd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Xd(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=yi),s.error===void 0&&(s.error=yi),s.complete===void 0&&(s.complete=yi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function yi(){}/**
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
 */function ye(n){return n&&n._delegate?n._delegate:n}class Wt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ut="[DEFAULT]";/**
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
 */class Yd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Od;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zd(e))try{this.getOrInitializeService({instanceIdentifier:Ut})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ut){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ut){return this.instances.has(e)}getOptions(e=Ut){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Jd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ut){return this.component?this.component.multipleInstances?e:Ut:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jd(n){return n===Ut?void 0:n}function Zd(n){return n.instantiationMode==="EAGER"}/**
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
 */class ef{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Yd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const tf={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},nf=H.INFO,rf={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},sf=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=rf[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class no{constructor(e){this.name=e,this._logLevel=nf,this._logHandler=sf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const of=(n,e)=>e.some(t=>n instanceof t);let ec,tc;function af(){return ec||(ec=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cf(){return tc||(tc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pl=new WeakMap,Di=new WeakMap,Cl=new WeakMap,vi=new WeakMap,ro=new WeakMap;function lf(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(wt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Pl.set(t,n)}).catch(()=>{}),ro.set(e,n),e}function uf(n){if(Di.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Di.set(n,e)}let Vi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Di.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Cl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return wt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function hf(n){Vi=n(Vi)}function df(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ei(this),e,...t);return Cl.set(r,e.sort?e.sort():[e]),wt(r)}:cf().includes(n)?function(...e){return n.apply(Ei(this),e),wt(Pl.get(this))}:function(...e){return wt(n.apply(Ei(this),e))}}function ff(n){return typeof n=="function"?df(n):(n instanceof IDBTransaction&&uf(n),of(n,af())?new Proxy(n,Vi):n)}function wt(n){if(n instanceof IDBRequest)return lf(n);if(vi.has(n))return vi.get(n);const e=ff(n);return e!==n&&(vi.set(n,e),ro.set(e,n)),e}const Ei=n=>ro.get(n);function pf(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=wt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(wt(a.result),u.oldVersion,u.newVersion,wt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const mf=["get","getKey","getAll","getAllKeys","count"],_f=["put","add","delete","clear"],Ii=new Map;function nc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ii.get(e))return Ii.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=_f.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||mf.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),s&&u.done]))[0]};return Ii.set(e,i),i}hf(n=>({...n,get:(e,t,r)=>nc(e,t)||n.get(e,t,r),has:(e,t)=>!!nc(e,t)||n.has(e,t)}));/**
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
 */class gf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(yf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function yf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Oi="@firebase/app",rc="0.10.13";/**
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
 */const ct=new no("@firebase/app"),vf="@firebase/app-compat",Ef="@firebase/analytics-compat",If="@firebase/analytics",Tf="@firebase/app-check-compat",wf="@firebase/app-check",Af="@firebase/auth",Rf="@firebase/auth-compat",bf="@firebase/database",Sf="@firebase/data-connect",Pf="@firebase/database-compat",Cf="@firebase/functions",kf="@firebase/functions-compat",Nf="@firebase/installations",Df="@firebase/installations-compat",Vf="@firebase/messaging",Of="@firebase/messaging-compat",xf="@firebase/performance",Lf="@firebase/performance-compat",Mf="@firebase/remote-config",Ff="@firebase/remote-config-compat",Uf="@firebase/storage",jf="@firebase/storage-compat",Bf="@firebase/firestore",$f="@firebase/vertexai-preview",qf="@firebase/firestore-compat",zf="firebase",Wf="10.14.1";/**
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
 */const xi="[DEFAULT]",Gf={[Oi]:"fire-core",[vf]:"fire-core-compat",[If]:"fire-analytics",[Ef]:"fire-analytics-compat",[wf]:"fire-app-check",[Tf]:"fire-app-check-compat",[Af]:"fire-auth",[Rf]:"fire-auth-compat",[bf]:"fire-rtdb",[Sf]:"fire-data-connect",[Pf]:"fire-rtdb-compat",[Cf]:"fire-fn",[kf]:"fire-fn-compat",[Nf]:"fire-iid",[Df]:"fire-iid-compat",[Vf]:"fire-fcm",[Of]:"fire-fcm-compat",[xf]:"fire-perf",[Lf]:"fire-perf-compat",[Mf]:"fire-rc",[Ff]:"fire-rc-compat",[Uf]:"fire-gcs",[jf]:"fire-gcs-compat",[Bf]:"fire-fst",[qf]:"fire-fst-compat",[$f]:"fire-vertex","fire-js":"fire-js",[zf]:"fire-js-all"};/**
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
 */const _s=new Map,Hf=new Map,Li=new Map;function sc(n,e){try{n.container.addComponent(e)}catch(t){ct.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function gn(n){const e=n.name;if(Li.has(e))return ct.debug(`There were multiple attempts to register component ${e}.`),!1;Li.set(e,n);for(const t of _s.values())sc(t,n);for(const t of Hf.values())sc(t,n);return!0}function so(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ke(n){return n.settings!==void 0}/**
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
 */const Kf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},At=new Ar("app","Firebase",Kf);/**
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
 */class Qf{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}/**
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
 */const bn=Wf;function kl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xi,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw At.create("bad-app-name",{appName:String(s)});if(t||(t=bl()),!t)throw At.create("no-options");const i=_s.get(s);if(i){if(fr(t,i.options)&&fr(r,i.config))return i;throw At.create("duplicate-app",{appName:s})}const a=new ef(s);for(const u of Li.values())a.addComponent(u);const l=new Qf(t,r,a);return _s.set(s,l),l}function Xf(n=xi){const e=_s.get(n);if(!e&&n===xi&&bl())return kl();if(!e)throw At.create("no-app",{appName:n});return e}function Rt(n,e,t){var r;let s=(r=Gf[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ct.warn(l.join(" "));return}gn(new Wt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Yf="firebase-heartbeat-database",Jf=1,pr="firebase-heartbeat-store";let Ti=null;function Nl(){return Ti||(Ti=pf(Yf,Jf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(pr)}catch(t){console.warn(t)}}}}).catch(n=>{throw At.create("idb-open",{originalErrorMessage:n.message})})),Ti}async function Zf(n){try{const t=(await Nl()).transaction(pr),r=await t.objectStore(pr).get(Dl(n));return await t.done,r}catch(e){if(e instanceof dt)ct.warn(e.message);else{const t=At.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ct.warn(t.message)}}}async function ic(n,e){try{const r=(await Nl()).transaction(pr,"readwrite");await r.objectStore(pr).put(e,Dl(n)),await r.done}catch(t){if(t instanceof dt)ct.warn(t.message);else{const r=At.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ct.warn(r.message)}}}function Dl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ep=1024,tp=30*24*60*60*1e3;class np{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new sp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=oc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=tp}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ct.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=oc(),{heartbeatsToSend:r,unsentEntries:s}=rp(this._heartbeatsCache.heartbeats),i=Al(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return ct.warn(t),""}}}function oc(){return new Date().toISOString().substring(0,10)}function rp(n,e=ep){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),ac(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ac(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class sp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $d()?qd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Zf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ic(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ic(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ac(n){return Al(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function ip(n){gn(new Wt("platform-logger",e=>new gf(e),"PRIVATE")),gn(new Wt("heartbeat",e=>new np(e),"PRIVATE")),Rt(Oi,rc,n),Rt(Oi,rc,"esm2017"),Rt("fire-js","")}ip("");function io(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Vl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const op=Vl,Ol=new Ar("auth","Firebase",Vl());/**
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
 */const gs=new no("@firebase/auth");function ap(n,...e){gs.logLevel<=H.WARN&&gs.warn(`Auth (${bn}): ${n}`,...e)}function os(n,...e){gs.logLevel<=H.ERROR&&gs.error(`Auth (${bn}): ${n}`,...e)}/**
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
 */function ze(n,...e){throw oo(n,...e)}function Qe(n,...e){return oo(n,...e)}function xl(n,e,t){const r=Object.assign(Object.assign({},op()),{[e]:t});return new Ar("auth","Firebase",r).create(e,{appName:n.name})}function at(n){return xl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function oo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ol.create(n,...e)}function B(n,e,...t){if(!n)throw oo(e,...t)}function st(n){const e="INTERNAL ASSERTION FAILED: "+n;throw os(e),new Error(e)}function lt(n,e){n||st(e)}/**
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
 */function Mi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function cp(){return cc()==="http:"||cc()==="https:"}function cc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function lp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cp()||Fd()||"connection"in navigator)?navigator.onLine:!0}function up(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class br{constructor(e,t){this.shortDelay=e,this.longDelay=t,lt(t>e,"Short delay should be less than long delay!"),this.isMobile=xd()||Ud()}get(){return lp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ao(n,e){lt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ll{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const hp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const dp=new br(3e4,6e4);function ft(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function et(n,e,t,r,s={}){return Ml(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Rr(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:u},i);return Md()||(d.referrerPolicy="no-referrer"),Ll.fetch()(Fl(n,n.config.apiHost,t,l),d)})}async function Ml(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},hp),e);try{const s=new pp(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ts(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ts(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw ts(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw ts(n,"user-disabled",a);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw xl(n,p,d);ze(n,p)}}catch(s){if(s instanceof dt)throw s;ze(n,"network-request-failed",{message:String(s)})}}async function Sr(n,e,t,r,s={}){const i=await et(n,e,t,r,s);return"mfaPendingCredential"in i&&ze(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Fl(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?ao(n.config,s):`${n.config.apiScheme}://${s}`}function fp(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Qe(this.auth,"network-request-failed")),dp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ts(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Qe(n,e,r);return s.customData._tokenResponse=t,s}function lc(n){return n!==void 0&&n.enterprise!==void 0}class mp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return fp(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function _p(n,e){return et(n,"GET","/v2/recaptchaConfig",ft(n,e))}/**
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
 */async function gp(n,e){return et(n,"POST","/v1/accounts:delete",e)}async function Ul(n,e){return et(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function cr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yp(n,e=!1){const t=ye(n),r=await t.getIdToken(e),s=co(r);B(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:cr(wi(s.auth_time)),issuedAtTime:cr(wi(s.iat)),expirationTime:cr(wi(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function wi(n){return Number(n)*1e3}function co(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return os("JWT malformed, contained fewer than 3 sections"),null;try{const s=Rl(t);return s?JSON.parse(s):(os("Failed to decode base64 JWT payload"),null)}catch(s){return os("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function uc(n){const e=co(n);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function yn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof dt&&vp(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function vp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Ep{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Fi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=cr(this.lastLoginAt),this.creationTime=cr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ys(n){var e;const t=n.auth,r=await n.getIdToken(),s=await yn(n,Ul(t,{idToken:r}));B(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?jl(i.providerUserInfo):[],l=Tp(n.providerData,a),u=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),p=u?d:!1,y={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Fi(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(n,y)}async function Ip(n){const e=ye(n);await ys(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Tp(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function jl(n){return n.map(e=>{var{providerId:t}=e,r=io(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function wp(n,e){const t=await Ml(n,{},async()=>{const r=Rr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=Fl(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Ll.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ap(n,e){return et(n,"POST","/v2/accounts:revokeToken",ft(n,e))}/**
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
 */class fn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){B(e.length!==0,"internal-error");const t=uc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await wp(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new fn;return r&&(B(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(B(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fn,this.toJSON())}_performRefresh(){return st("not implemented")}}/**
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
 */function gt(n,e){B(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class it{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=io(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ep(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Fi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await yn(this,this.stsTokenManager.getToken(this.auth,e));return B(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return yp(this,e)}reload(){return Ip(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new it(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ys(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ke(this.auth.app))return Promise.reject(at(this.auth));const e=await this.getIdToken();return await yn(this,gp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,l,u,d,p;const y=(r=t.displayName)!==null&&r!==void 0?r:void 0,E=(s=t.email)!==null&&s!==void 0?s:void 0,S=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,P=(a=t.photoURL)!==null&&a!==void 0?a:void 0,D=(l=t.tenantId)!==null&&l!==void 0?l:void 0,N=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,j=(d=t.createdAt)!==null&&d!==void 0?d:void 0,x=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:W,emailVerified:ee,isAnonymous:oe,providerData:ne,stsTokenManager:w}=t;B(W&&w,e,"internal-error");const m=fn.fromJSON(this.name,w);B(typeof W=="string",e,"internal-error"),gt(y,e.name),gt(E,e.name),B(typeof ee=="boolean",e,"internal-error"),B(typeof oe=="boolean",e,"internal-error"),gt(S,e.name),gt(P,e.name),gt(D,e.name),gt(N,e.name),gt(j,e.name),gt(x,e.name);const g=new it({uid:W,auth:e,email:E,emailVerified:ee,displayName:y,isAnonymous:oe,photoURL:P,phoneNumber:S,tenantId:D,stsTokenManager:m,createdAt:j,lastLoginAt:x});return ne&&Array.isArray(ne)&&(g.providerData=ne.map(I=>Object.assign({},I))),N&&(g._redirectEventId=N),g}static async _fromIdTokenResponse(e,t,r=!1){const s=new fn;s.updateFromServerResponse(t);const i=new it({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ys(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];B(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?jl(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new fn;l.updateFromIdToken(r);const u=new it({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Fi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const hc=new Map;function ot(n){lt(n instanceof Function,"Expected a class definition");let e=hc.get(n);return e?(lt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,hc.set(n,e),e)}/**
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
 */class Bl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Bl.type="NONE";const dc=Bl;/**
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
 */function as(n,e,t){return`firebase:${n}:${e}:${t}`}class pn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=as(this.userKey,s.apiKey,i),this.fullPersistenceKey=as("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?it._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new pn(ot(dc),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||ot(dc);const a=as(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const p=await d._get(a);if(p){const y=it._fromJSON(e,p);d!==i&&(l=y),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new pn(i,e,r):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new pn(i,e,r))}}/**
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
 */function fc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($l(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hl(e))return"Blackberry";if(Kl(e))return"Webos";if(ql(e))return"Safari";if((e.includes("chrome/")||zl(e))&&!e.includes("edge/"))return"Chrome";if(Gl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $l(n=ke()){return/firefox\//i.test(n)}function ql(n=ke()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zl(n=ke()){return/crios\//i.test(n)}function Wl(n=ke()){return/iemobile/i.test(n)}function Gl(n=ke()){return/android/i.test(n)}function Hl(n=ke()){return/blackberry/i.test(n)}function Kl(n=ke()){return/webos/i.test(n)}function lo(n=ke()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Rp(n=ke()){var e;return lo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bp(){return jd()&&document.documentMode===10}function Ql(n=ke()){return lo(n)||Gl(n)||Kl(n)||Hl(n)||/windows phone/i.test(n)||Wl(n)}/**
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
 */function Xl(n,e=[]){let t;switch(n){case"Browser":t=fc(ke());break;case"Worker":t=`${fc(ke())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${bn}/${r}`}/**
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
 */class Sp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Pp(n,e={}){return et(n,"GET","/v2/passwordPolicy",ft(n,e))}/**
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
 */const Cp=6;class kp{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Cp,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Np{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pc(this),this.idTokenSubscription=new pc(this),this.beforeStateQueue=new Sp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ol,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ot(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await pn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ul(this,{idToken:e}),r=await it._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ke(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ys(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=up()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ke(this.app))return Promise.reject(at(this));const t=e?ye(e):null;return t&&B(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ke(this.app)?Promise.reject(at(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ke(this.app)?Promise.reject(at(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ot(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Pp(this),t=new kp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ar("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ap(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ot(e)||this._popupRedirectResolver;B(t,this,"argument-error"),this.redirectPersistenceManager=await pn.create(this,[ot(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&ap(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function kt(n){return ye(n)}class pc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kd(t=>this.observer=t)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Os={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Dp(n){Os=n}function Yl(n){return Os.loadJS(n)}function Vp(){return Os.recaptchaEnterpriseScript}function Op(){return Os.gapiScript}function xp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Lp="recaptcha-enterprise",Mp="NO_RECAPTCHA";class Fp{constructor(e){this.type=Lp,this.auth=kt(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{_p(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new mp(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{l(u)})})}function s(i,a,l){const u=window.grecaptcha;lc(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(Mp)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{r(this.auth).then(l=>{if(!t&&lc(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Vp();u.length!==0&&(u+=l),Yl(u).then(()=>{s(l,i,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function mc(n,e,t,r=!1){const s=new Fp(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function vs(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await mc(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await mc(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(i)})}/**
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
 */function Up(n,e){const t=so(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(fr(i,e??{}))return s;ze(s,"already-initialized")}return t.initialize({options:e})}function jp(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ot);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Bp(n,e,t){const r=kt(n);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Jl(e),{host:a,port:l}=$p(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),qp()}function Jl(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function $p(n){const e=Jl(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:_c(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:_c(a)}}}function _c(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function qp(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class uo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return st("not implemented")}_getIdTokenResponse(e){return st("not implemented")}_linkToIdToken(e,t){return st("not implemented")}_getReauthenticationResolver(e){return st("not implemented")}}async function zp(n,e){return et(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Wp(n,e){return Sr(n,"POST","/v1/accounts:signInWithPassword",ft(n,e))}async function Gp(n,e){return et(n,"POST","/v1/accounts:sendOobCode",ft(n,e))}async function Hp(n,e){return Gp(n,e)}/**
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
 */async function Kp(n,e){return Sr(n,"POST","/v1/accounts:signInWithEmailLink",ft(n,e))}async function Qp(n,e){return Sr(n,"POST","/v1/accounts:signInWithEmailLink",ft(n,e))}/**
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
 */class mr extends uo{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new mr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new mr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vs(e,t,"signInWithPassword",Wp);case"emailLink":return Kp(e,{email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vs(e,r,"signUpPassword",zp);case"emailLink":return Qp(e,{idToken:t,email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function mn(n,e){return Sr(n,"POST","/v1/accounts:signInWithIdp",ft(n,e))}/**
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
 */const Xp="http://localhost";class Gt extends uo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Gt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ze("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=io(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Gt(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return mn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,mn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mn(e,t)}buildRequest(){const e={requestUri:Xp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Rr(t)}return e}}/**
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
 */function Yp(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Jp(n){const e=nr(rr(n)).link,t=e?nr(rr(e)).deep_link_id:null,r=nr(rr(n)).deep_link_id;return(r?nr(rr(r)).link:null)||r||t||e||n}class ho{constructor(e){var t,r,s,i,a,l;const u=nr(rr(e)),d=(t=u.apiKey)!==null&&t!==void 0?t:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,y=Yp((s=u.mode)!==null&&s!==void 0?s:null);B(d&&p&&y,"argument-error"),this.apiKey=d,this.operation=y,this.code=p,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=Jp(e);try{return new ho(t)}catch{return null}}}/**
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
 */class Sn{constructor(){this.providerId=Sn.PROVIDER_ID}static credential(e,t){return mr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ho.parseLink(t);return B(r,"argument-error"),mr._fromEmailAndCode(e,r.code,r.tenantId)}}Sn.PROVIDER_ID="password";Sn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Sn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Zl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pr extends Zl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class yt extends Pr{constructor(){super("facebook.com")}static credential(e){return Gt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";yt.PROVIDER_ID="facebook.com";/**
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
 */class vt extends Pr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Gt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return vt.credential(t,r)}catch{return null}}}vt.GOOGLE_SIGN_IN_METHOD="google.com";vt.PROVIDER_ID="google.com";/**
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
 */class Et extends Pr{constructor(){super("github.com")}static credential(e){return Gt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com";Et.PROVIDER_ID="github.com";/**
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
 */class It extends Pr{constructor(){super("twitter.com")}static credential(e,t){return Gt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return It.credential(t,r)}catch{return null}}}It.TWITTER_SIGN_IN_METHOD="twitter.com";It.PROVIDER_ID="twitter.com";/**
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
 */async function Zp(n,e){return Sr(n,"POST","/v1/accounts:signUp",ft(n,e))}/**
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
 */class Ht{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await it._fromIdTokenResponse(e,r,s),a=gc(r);return new Ht({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=gc(r);return new Ht({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function gc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Es extends dt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Es.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Es(e,t,r,s)}}function eu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Es._fromErrorAndOperation(n,i,e,r):i})}async function em(n,e,t=!1){const r=await yn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ht._forOperation(n,"link",r)}/**
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
 */async function tm(n,e,t=!1){const{auth:r}=n;if(Ke(r.app))return Promise.reject(at(r));const s="reauthenticate";try{const i=await yn(n,eu(r,s,e,n),t);B(i.idToken,r,"internal-error");const a=co(i.idToken);B(a,r,"internal-error");const{sub:l}=a;return B(n.uid===l,r,"user-mismatch"),Ht._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ze(r,"user-mismatch"),i}}/**
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
 */async function tu(n,e,t=!1){if(Ke(n.app))return Promise.reject(at(n));const r="signIn",s=await eu(n,r,e),i=await Ht._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function nm(n,e){return tu(kt(n),e)}/**
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
 */async function nu(n){const e=kt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function rm(n,e,t){const r=kt(n);await vs(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Hp)}async function sm(n,e,t){if(Ke(n.app))return Promise.reject(at(n));const r=kt(n),a=await vs(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Zp).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&nu(n),u}),l=await Ht._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function im(n,e,t){return Ke(n.app)?Promise.reject(at(n)):nm(ye(n),Sn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&nu(n),r})}/**
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
 */async function om(n,e){return et(n,"POST","/v1/accounts:update",e)}/**
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
 */async function am(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=ye(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await yn(r,om(r.auth,i));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function cm(n,e,t,r){return ye(n).onIdTokenChanged(e,t,r)}function lm(n,e,t){return ye(n).beforeAuthStateChanged(e,t)}function um(n,e,t,r){return ye(n).onAuthStateChanged(e,t,r)}function hm(n){return ye(n).signOut()}const Is="__sak";/**
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
 */class ru{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Is,"1"),this.storage.removeItem(Is),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const dm=1e3,fm=10;class su extends ru{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ql(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);bp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,fm):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},dm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}su.type="LOCAL";const pm=su;/**
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
 */class iu extends ru{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}iu.type="SESSION";const ou=iu;/**
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
 */function mm(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class xs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new xs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async d=>d(t.origin,i)),u=await mm(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xs.receivers=[];/**
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
 */function fo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class _m{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const d=fo("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(y){const E=y;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(E.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Xe(){return window}function gm(n){Xe().location.href=n}/**
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
 */function au(){return typeof Xe().WorkerGlobalScope<"u"&&typeof Xe().importScripts=="function"}async function ym(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vm(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Em(){return au()?self:null}/**
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
 */const cu="firebaseLocalStorageDb",Im=1,Ts="firebaseLocalStorage",lu="fbase_key";class Cr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ls(n,e){return n.transaction([Ts],e?"readwrite":"readonly").objectStore(Ts)}function Tm(){const n=indexedDB.deleteDatabase(cu);return new Cr(n).toPromise()}function Ui(){const n=indexedDB.open(cu,Im);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ts,{keyPath:lu})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ts)?e(r):(r.close(),await Tm(),e(await Ui()))})})}async function yc(n,e,t){const r=Ls(n,!0).put({[lu]:e,value:t});return new Cr(r).toPromise()}async function wm(n,e){const t=Ls(n,!1).get(e),r=await new Cr(t).toPromise();return r===void 0?null:r.value}function vc(n,e){const t=Ls(n,!0).delete(e);return new Cr(t).toPromise()}const Am=800,Rm=3;class uu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ui(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Rm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return au()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xs._getInstance(Em()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ym(),!this.activeServiceWorker)return;this.sender=new _m(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ui();return await yc(e,Is,"1"),await vc(e,Is),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>yc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>wm(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>vc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ls(s,!1).getAll();return new Cr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Am)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uu.type="LOCAL";const bm=uu;new br(3e4,6e4);/**
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
 */function Sm(n,e){return e?ot(e):(B(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class po extends uo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return mn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return mn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Pm(n){return tu(n.auth,new po(n),n.bypassAuthState)}function Cm(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),tm(t,new po(n),n.bypassAuthState)}async function km(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),em(t,new po(n),n.bypassAuthState)}/**
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
 */class hu{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pm;case"linkViaPopup":case"linkViaRedirect":return km;case"reauthViaPopup":case"reauthViaRedirect":return Cm;default:ze(this.auth,"internal-error")}}resolve(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Nm=new br(2e3,1e4);class dn extends hu{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,dn.currentPopupAction&&dn.currentPopupAction.cancel(),dn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){lt(this.filter.length===1,"Popup operations only handle one event");const e=fo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Nm.get())};e()}}dn.currentPopupAction=null;/**
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
 */const Dm="pendingRedirect",cs=new Map;class Vm extends hu{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=cs.get(this.auth._key());if(!e){try{const r=await Om(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}cs.set(this.auth._key(),e)}return this.bypassAuthState||cs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Om(n,e){const t=Mm(e),r=Lm(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function xm(n,e){cs.set(n._key(),e)}function Lm(n){return ot(n._redirectPersistence)}function Mm(n){return as(Dm,n.config.apiKey,n.name)}async function Fm(n,e,t=!1){if(Ke(n.app))return Promise.reject(at(n));const r=kt(n),s=Sm(r,e),a=await new Vm(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Um=10*60*1e3;class jm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Bm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!du(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Qe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Um&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ec(e))}saveEventToCache(e){this.cachedEventUids.add(Ec(e)),this.lastProcessedEventTime=Date.now()}}function Ec(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function du({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Bm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return du(n);default:return!1}}/**
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
 */async function $m(n,e={}){return et(n,"GET","/v1/projects",e)}/**
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
 */const qm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zm=/^https?/;async function Wm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await $m(n);for(const t of e)try{if(Gm(t))return}catch{}ze(n,"unauthorized-domain")}function Gm(n){const e=Mi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!zm.test(t))return!1;if(qm.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Hm=new br(3e4,6e4);function Ic(){const n=Xe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Km(n){return new Promise((e,t)=>{var r,s,i;function a(){Ic(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ic(),t(Qe(n,"network-request-failed"))},timeout:Hm.get()})}if(!((s=(r=Xe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Xe().gapi)===null||i===void 0)&&i.load)a();else{const l=xp("iframefcb");return Xe()[l]=()=>{gapi.load?a():t(Qe(n,"network-request-failed"))},Yl(`${Op()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw ls=null,e})}let ls=null;function Qm(n){return ls=ls||Km(n),ls}/**
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
 */const Xm=new br(5e3,15e3),Ym="__/auth/iframe",Jm="emulator/auth/iframe",Zm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},e_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function t_(n){const e=n.config;B(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ao(e,Jm):`https://${n.config.authDomain}/${Ym}`,r={apiKey:e.apiKey,appName:n.name,v:bn},s=e_.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Rr(r).slice(1)}`}async function n_(n){const e=await Qm(n),t=Xe().gapi;return B(t,n,"internal-error"),e.open({where:document.body,url:t_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zm,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Qe(n,"network-request-failed"),l=Xe().setTimeout(()=>{i(a)},Xm.get());function u(){Xe().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const r_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},s_=500,i_=600,o_="_blank",a_="http://localhost";class Tc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function c_(n,e,t,r=s_,s=i_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},r_),{width:r.toString(),height:s.toString(),top:i,left:a}),d=ke().toLowerCase();t&&(l=zl(d)?o_:t),$l(d)&&(e=e||a_,u.scrollbars="yes");const p=Object.entries(u).reduce((E,[S,P])=>`${E}${S}=${P},`,"");if(Rp(d)&&l!=="_self")return l_(e||"",l),new Tc(null);const y=window.open(e||"",l,p);B(y,n,"popup-blocked");try{y.focus()}catch{}return new Tc(y)}function l_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const u_="__/auth/handler",h_="emulator/auth/handler",d_=encodeURIComponent("fac");async function wc(n,e,t,r,s,i){B(n.config.authDomain,n,"auth-domain-config-required"),B(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:bn,eventId:s};if(e instanceof Zl){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Hd(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,y]of Object.entries({}))a[p]=y}if(e instanceof Pr){const p=e.getScopes().filter(y=>y!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await n._getAppCheckToken(),d=u?`#${d_}=${encodeURIComponent(u)}`:"";return`${f_(n)}?${Rr(l).slice(1)}${d}`}function f_({config:n}){return n.emulator?ao(n,h_):`https://${n.authDomain}/${u_}`}/**
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
 */const Ai="webStorageSupport";class p_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ou,this._completeRedirectFn=Fm,this._overrideRedirectResult=xm}async _openPopup(e,t,r,s){var i;lt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await wc(e,t,r,Mi(),s);return c_(e,a,fo())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await wc(e,t,r,Mi(),s);return gm(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(lt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await n_(e),r=new jm(e);return t.register("authEvent",s=>(B(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ai,{type:Ai},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ai];a!==void 0&&t(!!a),ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Wm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ql()||ql()||lo()}}const m_=p_;var Ac="@firebase/auth",Rc="1.7.9";/**
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
 */class __{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function g_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function y_(n){gn(new Wt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;B(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xl(n)},d=new Np(r,s,i,u);return jp(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),gn(new Wt("auth-internal",e=>{const t=kt(e.getProvider("auth").getImmediate());return(r=>new __(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rt(Ac,Rc,g_(n)),Rt(Ac,Rc,"esm2017")}/**
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
 */const v_=5*60,E_=Sl("authIdTokenMaxAge")||v_;let bc=null;const I_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>E_)return;const s=t==null?void 0:t.token;bc!==s&&(bc=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function T_(n=Xf()){const e=so(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Up(n,{popupRedirectResolver:m_,persistence:[bm,pm,ou]}),r=Sl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=I_(i.toString());lm(t,a,()=>a(t.currentUser)),cm(t,l=>a(l))}}const s=Vd("auth");return s&&Bp(t,`http://${s}`),t}function w_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Dp({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Qe("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",w_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});y_("Browser");var A_="firebase",R_="10.14.1";/**
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
 */Rt(A_,R_,"app");var Sc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bt,fu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function g(){}g.prototype=m.prototype,w.D=m.prototype,w.prototype=new g,w.prototype.constructor=w,w.C=function(I,T,R){for(var _=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)_[Be-2]=arguments[Be];return m.prototype[T].apply(I,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,m,g){g||(g=0);var I=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)I[T]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(T=0;16>T;++T)I[T]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=w.g[0],g=w.g[1],T=w.g[2];var R=w.g[3],_=m+(R^g&(T^R))+I[0]+3614090360&4294967295;m=g+(_<<7&4294967295|_>>>25),_=R+(T^m&(g^T))+I[1]+3905402710&4294967295,R=m+(_<<12&4294967295|_>>>20),_=T+(g^R&(m^g))+I[2]+606105819&4294967295,T=R+(_<<17&4294967295|_>>>15),_=g+(m^T&(R^m))+I[3]+3250441966&4294967295,g=T+(_<<22&4294967295|_>>>10),_=m+(R^g&(T^R))+I[4]+4118548399&4294967295,m=g+(_<<7&4294967295|_>>>25),_=R+(T^m&(g^T))+I[5]+1200080426&4294967295,R=m+(_<<12&4294967295|_>>>20),_=T+(g^R&(m^g))+I[6]+2821735955&4294967295,T=R+(_<<17&4294967295|_>>>15),_=g+(m^T&(R^m))+I[7]+4249261313&4294967295,g=T+(_<<22&4294967295|_>>>10),_=m+(R^g&(T^R))+I[8]+1770035416&4294967295,m=g+(_<<7&4294967295|_>>>25),_=R+(T^m&(g^T))+I[9]+2336552879&4294967295,R=m+(_<<12&4294967295|_>>>20),_=T+(g^R&(m^g))+I[10]+4294925233&4294967295,T=R+(_<<17&4294967295|_>>>15),_=g+(m^T&(R^m))+I[11]+2304563134&4294967295,g=T+(_<<22&4294967295|_>>>10),_=m+(R^g&(T^R))+I[12]+1804603682&4294967295,m=g+(_<<7&4294967295|_>>>25),_=R+(T^m&(g^T))+I[13]+4254626195&4294967295,R=m+(_<<12&4294967295|_>>>20),_=T+(g^R&(m^g))+I[14]+2792965006&4294967295,T=R+(_<<17&4294967295|_>>>15),_=g+(m^T&(R^m))+I[15]+1236535329&4294967295,g=T+(_<<22&4294967295|_>>>10),_=m+(T^R&(g^T))+I[1]+4129170786&4294967295,m=g+(_<<5&4294967295|_>>>27),_=R+(g^T&(m^g))+I[6]+3225465664&4294967295,R=m+(_<<9&4294967295|_>>>23),_=T+(m^g&(R^m))+I[11]+643717713&4294967295,T=R+(_<<14&4294967295|_>>>18),_=g+(R^m&(T^R))+I[0]+3921069994&4294967295,g=T+(_<<20&4294967295|_>>>12),_=m+(T^R&(g^T))+I[5]+3593408605&4294967295,m=g+(_<<5&4294967295|_>>>27),_=R+(g^T&(m^g))+I[10]+38016083&4294967295,R=m+(_<<9&4294967295|_>>>23),_=T+(m^g&(R^m))+I[15]+3634488961&4294967295,T=R+(_<<14&4294967295|_>>>18),_=g+(R^m&(T^R))+I[4]+3889429448&4294967295,g=T+(_<<20&4294967295|_>>>12),_=m+(T^R&(g^T))+I[9]+568446438&4294967295,m=g+(_<<5&4294967295|_>>>27),_=R+(g^T&(m^g))+I[14]+3275163606&4294967295,R=m+(_<<9&4294967295|_>>>23),_=T+(m^g&(R^m))+I[3]+4107603335&4294967295,T=R+(_<<14&4294967295|_>>>18),_=g+(R^m&(T^R))+I[8]+1163531501&4294967295,g=T+(_<<20&4294967295|_>>>12),_=m+(T^R&(g^T))+I[13]+2850285829&4294967295,m=g+(_<<5&4294967295|_>>>27),_=R+(g^T&(m^g))+I[2]+4243563512&4294967295,R=m+(_<<9&4294967295|_>>>23),_=T+(m^g&(R^m))+I[7]+1735328473&4294967295,T=R+(_<<14&4294967295|_>>>18),_=g+(R^m&(T^R))+I[12]+2368359562&4294967295,g=T+(_<<20&4294967295|_>>>12),_=m+(g^T^R)+I[5]+4294588738&4294967295,m=g+(_<<4&4294967295|_>>>28),_=R+(m^g^T)+I[8]+2272392833&4294967295,R=m+(_<<11&4294967295|_>>>21),_=T+(R^m^g)+I[11]+1839030562&4294967295,T=R+(_<<16&4294967295|_>>>16),_=g+(T^R^m)+I[14]+4259657740&4294967295,g=T+(_<<23&4294967295|_>>>9),_=m+(g^T^R)+I[1]+2763975236&4294967295,m=g+(_<<4&4294967295|_>>>28),_=R+(m^g^T)+I[4]+1272893353&4294967295,R=m+(_<<11&4294967295|_>>>21),_=T+(R^m^g)+I[7]+4139469664&4294967295,T=R+(_<<16&4294967295|_>>>16),_=g+(T^R^m)+I[10]+3200236656&4294967295,g=T+(_<<23&4294967295|_>>>9),_=m+(g^T^R)+I[13]+681279174&4294967295,m=g+(_<<4&4294967295|_>>>28),_=R+(m^g^T)+I[0]+3936430074&4294967295,R=m+(_<<11&4294967295|_>>>21),_=T+(R^m^g)+I[3]+3572445317&4294967295,T=R+(_<<16&4294967295|_>>>16),_=g+(T^R^m)+I[6]+76029189&4294967295,g=T+(_<<23&4294967295|_>>>9),_=m+(g^T^R)+I[9]+3654602809&4294967295,m=g+(_<<4&4294967295|_>>>28),_=R+(m^g^T)+I[12]+3873151461&4294967295,R=m+(_<<11&4294967295|_>>>21),_=T+(R^m^g)+I[15]+530742520&4294967295,T=R+(_<<16&4294967295|_>>>16),_=g+(T^R^m)+I[2]+3299628645&4294967295,g=T+(_<<23&4294967295|_>>>9),_=m+(T^(g|~R))+I[0]+4096336452&4294967295,m=g+(_<<6&4294967295|_>>>26),_=R+(g^(m|~T))+I[7]+1126891415&4294967295,R=m+(_<<10&4294967295|_>>>22),_=T+(m^(R|~g))+I[14]+2878612391&4294967295,T=R+(_<<15&4294967295|_>>>17),_=g+(R^(T|~m))+I[5]+4237533241&4294967295,g=T+(_<<21&4294967295|_>>>11),_=m+(T^(g|~R))+I[12]+1700485571&4294967295,m=g+(_<<6&4294967295|_>>>26),_=R+(g^(m|~T))+I[3]+2399980690&4294967295,R=m+(_<<10&4294967295|_>>>22),_=T+(m^(R|~g))+I[10]+4293915773&4294967295,T=R+(_<<15&4294967295|_>>>17),_=g+(R^(T|~m))+I[1]+2240044497&4294967295,g=T+(_<<21&4294967295|_>>>11),_=m+(T^(g|~R))+I[8]+1873313359&4294967295,m=g+(_<<6&4294967295|_>>>26),_=R+(g^(m|~T))+I[15]+4264355552&4294967295,R=m+(_<<10&4294967295|_>>>22),_=T+(m^(R|~g))+I[6]+2734768916&4294967295,T=R+(_<<15&4294967295|_>>>17),_=g+(R^(T|~m))+I[13]+1309151649&4294967295,g=T+(_<<21&4294967295|_>>>11),_=m+(T^(g|~R))+I[4]+4149444226&4294967295,m=g+(_<<6&4294967295|_>>>26),_=R+(g^(m|~T))+I[11]+3174756917&4294967295,R=m+(_<<10&4294967295|_>>>22),_=T+(m^(R|~g))+I[2]+718787259&4294967295,T=R+(_<<15&4294967295|_>>>17),_=g+(R^(T|~m))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,w.g[2]=w.g[2]+T&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var g=m-this.blockSize,I=this.B,T=this.h,R=0;R<m;){if(T==0)for(;R<=g;)s(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<m;)if(I[T++]=w.charCodeAt(R++),T==this.blockSize){s(this,I),T=0;break}}else for(;R<m;)if(I[T++]=w[R++],T==this.blockSize){s(this,I),T=0;break}}this.h=T,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var g=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=g&255,g/=256;for(this.u(w),w=Array(16),m=g=0;4>m;++m)for(var I=0;32>I;I+=8)w[g++]=this.g[m]>>>I&255;return w};function i(w,m){var g=l;return Object.prototype.hasOwnProperty.call(g,w)?g[w]:g[w]=m(w)}function a(w,m){this.h=m;for(var g=[],I=!0,T=w.length-1;0<=T;T--){var R=w[T]|0;I&&R==m||(g[T]=R,I=!1)}this.g=g}var l={};function u(w){return-128<=w&&128>w?i(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return y;if(0>w)return N(d(-w));for(var m=[],g=1,I=0;w>=g;I++)m[I]=w/g|0,g*=4294967296;return new a(m,0)}function p(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return N(p(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=d(Math.pow(m,8)),I=y,T=0;T<w.length;T+=8){var R=Math.min(8,w.length-T),_=parseInt(w.substring(T,T+R),m);8>R?(R=d(Math.pow(m,R)),I=I.j(R).add(d(_))):(I=I.j(g),I=I.add(d(_)))}return I}var y=u(0),E=u(1),S=u(16777216);n=a.prototype,n.m=function(){if(D(this))return-N(this).m();for(var w=0,m=1,g=0;g<this.g.length;g++){var I=this.i(g);w+=(0<=I?I:4294967296+I)*m,m*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(D(this))return"-"+N(this).toString(w);for(var m=d(Math.pow(w,6)),g=this,I="";;){var T=ee(g,m).g;g=j(g,T.j(m));var R=((0<g.g.length?g.g[0]:g.h)>>>0).toString(w);if(g=T,P(g))return R+I;for(;6>R.length;)R="0"+R;I=R+I}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function D(w){return w.h==-1}n.l=function(w){return w=j(this,w),D(w)?-1:P(w)?0:1};function N(w){for(var m=w.g.length,g=[],I=0;I<m;I++)g[I]=~w.g[I];return new a(g,~w.h).add(E)}n.abs=function(){return D(this)?N(this):this},n.add=function(w){for(var m=Math.max(this.g.length,w.g.length),g=[],I=0,T=0;T<=m;T++){var R=I+(this.i(T)&65535)+(w.i(T)&65535),_=(R>>>16)+(this.i(T)>>>16)+(w.i(T)>>>16);I=_>>>16,R&=65535,_&=65535,g[T]=_<<16|R}return new a(g,g[g.length-1]&-2147483648?-1:0)};function j(w,m){return w.add(N(m))}n.j=function(w){if(P(this)||P(w))return y;if(D(this))return D(w)?N(this).j(N(w)):N(N(this).j(w));if(D(w))return N(this.j(N(w)));if(0>this.l(S)&&0>w.l(S))return d(this.m()*w.m());for(var m=this.g.length+w.g.length,g=[],I=0;I<2*m;I++)g[I]=0;for(I=0;I<this.g.length;I++)for(var T=0;T<w.g.length;T++){var R=this.i(I)>>>16,_=this.i(I)&65535,Be=w.i(T)>>>16,Dt=w.i(T)&65535;g[2*I+2*T]+=_*Dt,x(g,2*I+2*T),g[2*I+2*T+1]+=R*Dt,x(g,2*I+2*T+1),g[2*I+2*T+1]+=_*Be,x(g,2*I+2*T+1),g[2*I+2*T+2]+=R*Be,x(g,2*I+2*T+2)}for(I=0;I<m;I++)g[I]=g[2*I+1]<<16|g[2*I];for(I=m;I<2*m;I++)g[I]=0;return new a(g,0)};function x(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function W(w,m){this.g=w,this.h=m}function ee(w,m){if(P(m))throw Error("division by zero");if(P(w))return new W(y,y);if(D(w))return m=ee(N(w),m),new W(N(m.g),N(m.h));if(D(m))return m=ee(w,N(m)),new W(N(m.g),m.h);if(30<w.g.length){if(D(w)||D(m))throw Error("slowDivide_ only works with positive integers.");for(var g=E,I=m;0>=I.l(w);)g=oe(g),I=oe(I);var T=ne(g,1),R=ne(I,1);for(I=ne(I,2),g=ne(g,2);!P(I);){var _=R.add(I);0>=_.l(w)&&(T=T.add(g),R=_),I=ne(I,1),g=ne(g,1)}return m=j(w,T.j(m)),new W(T,m)}for(T=y;0<=w.l(m);){for(g=Math.max(1,Math.floor(w.m()/m.m())),I=Math.ceil(Math.log(g)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),R=d(g),_=R.j(m);D(_)||0<_.l(w);)g-=I,R=d(g),_=R.j(m);P(R)&&(R=E),T=T.add(R),w=j(w,_)}return new W(T,w)}n.A=function(w){return ee(this,w).h},n.and=function(w){for(var m=Math.max(this.g.length,w.g.length),g=[],I=0;I<m;I++)g[I]=this.i(I)&w.i(I);return new a(g,this.h&w.h)},n.or=function(w){for(var m=Math.max(this.g.length,w.g.length),g=[],I=0;I<m;I++)g[I]=this.i(I)|w.i(I);return new a(g,this.h|w.h)},n.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),g=[],I=0;I<m;I++)g[I]=this.i(I)^w.i(I);return new a(g,this.h^w.h)};function oe(w){for(var m=w.g.length+1,g=[],I=0;I<m;I++)g[I]=w.i(I)<<1|w.i(I-1)>>>31;return new a(g,w.h)}function ne(w,m){var g=m>>5;m%=32;for(var I=w.g.length-g,T=[],R=0;R<I;R++)T[R]=0<m?w.i(R+g)>>>m|w.i(R+g+1)<<32-m:w.i(R+g);return new a(T,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,fu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Bt=a}).apply(typeof Sc<"u"?Sc:typeof self<"u"?self:typeof window<"u"?window:{});var ns=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pu,sr,mu,us,ji,_u,gu,yu;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ns=="object"&&ns];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,c){if(c)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var A=o[f];if(!(A in h))break e;h=h[A]}o=o[o.length-1],f=h[o],c=c(f),c!=f&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var h=0,f=!1,A={next:function(){if(!f&&h<o.length){var b=h++;return{value:c(b,o[b]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function p(o,c,h){return o.call.apply(o.bind,arguments)}function y(o,c,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),o.apply(c,A)}}return function(){return o.apply(c,arguments)}}function E(o,c,h){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:y,E.apply(null,arguments)}function S(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function P(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,A,b){for(var O=Array(arguments.length-2),te=2;te<arguments.length;te++)O[te-2]=arguments[te];return c.prototype[A].apply(f,O)}}function D(o){const c=o.length;if(0<c){const h=Array(c);for(let f=0;f<c;f++)h[f]=o[f];return h}return[]}function N(o,c){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(u(f)){const A=o.length||0,b=f.length||0;o.length=A+b;for(let O=0;O<b;O++)o[A+O]=f[O]}else o.push(f)}}class j{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function x(o){return/^[\s\xa0]*$/.test(o)}function W(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function ee(o){return ee[" "](o),o}ee[" "]=function(){};var oe=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function ne(o,c,h){for(const f in o)c.call(h,o[f],f,o)}function w(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function m(o){const c={};for(const h in o)c[h]=o[h];return c}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,c){let h,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(h in f)o[h]=f[h];for(let b=0;b<g.length;b++)h=g[b],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function T(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function R(o){l.setTimeout(()=>{throw o},0)}function _(){var o=Dn;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class Be{constructor(){this.h=this.g=null}add(c,h){const f=Dt.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var Dt=new j(()=>new Ve,o=>o.reset());class Ve{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Fe,tt=!1,Dn=new Be,Vn=()=>{const o=l.Promise.resolve(void 0);Fe=()=>{o.then(Ge)}};var Ge=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){R(h)}var c=Dt;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}tt=!1};function He(){this.s=this.s,this.C=this.C}He.prototype.s=!1,He.prototype.ma=function(){this.s||(this.s=!0,this.N())},He.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var Qs=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return o}();function Vt(o,c){if(ae.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(oe){e:{try{ee(c.nodeName);var A=!0;break e}catch{}A=!1}A||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Xs[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Vt.aa.h.call(this)}}P(Vt,ae);var Xs={2:"touch",3:"pen",4:"mouse"};Vt.prototype.h=function(){Vt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var en="closure_listenable_"+(1e6*Math.random()|0),Ys=0;function Js(o,c,h,f,A){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=A,this.key=++Ys,this.da=this.fa=!1}function tn(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function nn(o){this.src=o,this.g={},this.h=0}nn.prototype.add=function(o,c,h,f,A){var b=o.toString();o=this.g[b],o||(o=this.g[b]=[],this.h++);var O=xn(o,c,f,A);return-1<O?(c=o[O],h||(c.fa=!1)):(c=new Js(c,this.src,b,!!f,A),c.fa=h,o.push(c)),c};function On(o,c){var h=c.type;if(h in o.g){var f=o.g[h],A=Array.prototype.indexOf.call(f,c,void 0),b;(b=0<=A)&&Array.prototype.splice.call(f,A,1),b&&(tn(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function xn(o,c,h,f){for(var A=0;A<o.length;++A){var b=o[A];if(!b.da&&b.listener==c&&b.capture==!!h&&b.ha==f)return A}return-1}var rn="closure_lm_"+(1e6*Math.random()|0),Ln={};function Mr(o,c,h,f,A){if(Array.isArray(c)){for(var b=0;b<c.length;b++)Mr(o,c[b],h,f,A);return null}return h=Zo(h),o&&o[en]?o.K(c,h,d(f)?!!f.capture:!1,A):Zs(o,c,h,!1,f,A)}function Zs(o,c,h,f,A,b){if(!c)throw Error("Invalid event type");var O=d(A)?!!A.capture:!!A,te=Mn(o);if(te||(o[rn]=te=new nn(o)),h=te.add(c,h,f,O,b),h.proxy)return h;if(f=ei(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)Qs||(A=O),A===void 0&&(A=!1),o.addEventListener(c.toString(),f,A);else if(o.attachEvent)o.attachEvent(J(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function ei(){function o(h){return c.call(o.src,o.listener,h)}const c=Oe;return o}function Fr(o,c,h,f,A){if(Array.isArray(c))for(var b=0;b<c.length;b++)Fr(o,c[b],h,f,A);else f=d(f)?!!f.capture:!!f,h=Zo(h),o&&o[en]?(o=o.i,c=String(c).toString(),c in o.g&&(b=o.g[c],h=xn(b,h,f,A),-1<h&&(tn(b[h]),Array.prototype.splice.call(b,h,1),b.length==0&&(delete o.g[c],o.h--)))):o&&(o=Mn(o))&&(c=o.g[c.toString()],o=-1,c&&(o=xn(c,h,f,A)),(h=-1<o?c[o]:null)&&F(h))}function F(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[en])On(c.i,o);else{var h=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(h,f,o.capture):c.detachEvent?c.detachEvent(J(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=Mn(c))?(On(h,o),h.h==0&&(h.src=null,c[rn]=null)):tn(o)}}}function J(o){return o in Ln?Ln[o]:Ln[o]="on"+o}function Oe(o,c){if(o.da)o=!0;else{c=new Vt(c,this);var h=o.listener,f=o.ha||o.src;o.fa&&F(o),o=h.call(f,c)}return o}function Mn(o){return o=o[rn],o instanceof nn?o:null}var ti="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zo(o){return typeof o=="function"?o:(o[ti]||(o[ti]=function(c){return o.handleEvent(c)}),o[ti])}function Re(){He.call(this),this.i=new nn(this),this.M=this,this.F=null}P(Re,He),Re.prototype[en]=!0,Re.prototype.removeEventListener=function(o,c,h,f){Fr(this,o,c,h,f)};function Ne(o,c){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new ae(c,o);else if(c instanceof ae)c.target=c.target||o;else{var A=c;c=new ae(f,o),I(c,A)}if(A=!0,h)for(var b=h.length-1;0<=b;b--){var O=c.g=h[b];A=Ur(O,f,!0,c)&&A}if(O=c.g=o,A=Ur(O,f,!0,c)&&A,A=Ur(O,f,!1,c)&&A,h)for(b=0;b<h.length;b++)O=c.g=h[b],A=Ur(O,f,!1,c)&&A}Re.prototype.N=function(){if(Re.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],f=0;f<h.length;f++)tn(h[f]);delete o.g[c],o.h--}}this.F=null},Re.prototype.K=function(o,c,h,f){return this.i.add(String(o),c,!1,h,f)},Re.prototype.L=function(o,c,h,f){return this.i.add(String(o),c,!0,h,f)};function Ur(o,c,h,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var A=!0,b=0;b<c.length;++b){var O=c[b];if(O&&!O.da&&O.capture==h){var te=O.listener,Ee=O.ha||O.src;O.fa&&On(o.i,O),A=te.call(Ee,f)!==!1&&A}}return A&&!f.defaultPrevented}function ea(o,c,h){if(typeof o=="function")h&&(o=E(o,h));else if(o&&typeof o.handleEvent=="function")o=E(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function ta(o){o.g=ea(()=>{o.g=null,o.i&&(o.i=!1,ta(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class qh extends He{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ta(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fn(o){He.call(this),this.h=o,this.g={}}P(Fn,He);var na=[];function ra(o){ne(o.g,function(c,h){this.g.hasOwnProperty(h)&&F(c)},o),o.g={}}Fn.prototype.N=function(){Fn.aa.N.call(this),ra(this)},Fn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ni=l.JSON.stringify,zh=l.JSON.parse,Wh=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function ri(){}ri.prototype.h=null;function sa(o){return o.h||(o.h=o.i())}function ia(){}var Un={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function si(){ae.call(this,"d")}P(si,ae);function ii(){ae.call(this,"c")}P(ii,ae);var Ot={},oa=null;function jr(){return oa=oa||new Re}Ot.La="serverreachability";function aa(o){ae.call(this,Ot.La,o)}P(aa,ae);function jn(o){const c=jr();Ne(c,new aa(c))}Ot.STAT_EVENT="statevent";function ca(o,c){ae.call(this,Ot.STAT_EVENT,o),this.stat=c}P(ca,ae);function De(o){const c=jr();Ne(c,new ca(c,o))}Ot.Ma="timingevent";function la(o,c){ae.call(this,Ot.Ma,o),this.size=c}P(la,ae);function Bn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function $n(){this.g=!0}$n.prototype.xa=function(){this.g=!1};function Gh(o,c,h,f,A,b){o.info(function(){if(o.g)if(b)for(var O="",te=b.split("&"),Ee=0;Ee<te.length;Ee++){var X=te[Ee].split("=");if(1<X.length){var be=X[0];X=X[1];var Se=be.split("_");O=2<=Se.length&&Se[1]=="type"?O+(be+"="+X+"&"):O+(be+"=redacted&")}}else O=null;else O=b;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+c+`
`+h+`
`+O})}function Hh(o,c,h,f,A,b,O){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+c+`
`+h+`
`+b+" "+O})}function sn(o,c,h,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Qh(o,h)+(f?" "+f:"")})}function Kh(o,c){o.info(function(){return"TIMEOUT: "+c})}$n.prototype.info=function(){};function Qh(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var b=A[0];if(b!="noop"&&b!="stop"&&b!="close")for(var O=1;O<A.length;O++)A[O]=""}}}}return ni(h)}catch{return c}}var Br={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ua={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},oi;function $r(){}P($r,ri),$r.prototype.g=function(){return new XMLHttpRequest},$r.prototype.i=function(){return{}},oi=new $r;function pt(o,c,h,f){this.j=o,this.i=c,this.l=h,this.R=f||1,this.U=new Fn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ha}function ha(){this.i=null,this.g="",this.h=!1}var da={},ai={};function ci(o,c,h){o.L=1,o.v=Gr(nt(c)),o.m=h,o.P=!0,fa(o,null)}function fa(o,c){o.F=Date.now(),qr(o),o.A=nt(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),Sa(h.i,"t",f),o.C=0,h=o.j.J,o.h=new ha,o.g=Wa(o.j,h?c:null,!o.m),0<o.O&&(o.M=new qh(E(o.Y,o,o.g),o.O)),c=o.U,h=o.g,f=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(na[0]=A.toString()),A=na);for(var b=0;b<A.length;b++){var O=Mr(h,A[b],f||c.handleEvent,!1,c.h||c);if(!O)break;c.g[O.key]=O}c=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),jn(),Gh(o.i,o.u,o.A,o.l,o.R,o.m)}pt.prototype.ca=function(o){o=o.target;const c=this.M;c&&rt(o)==3?c.j():this.Y(o)},pt.prototype.Y=function(o){try{if(o==this.g)e:{const Se=rt(this.g);var c=this.g.Ba();const cn=this.g.Z();if(!(3>Se)&&(Se!=3||this.g&&(this.h.h||this.g.oa()||Oa(this.g)))){this.J||Se!=4||c==7||(c==8||0>=cn?jn(3):jn(2)),li(this);var h=this.g.Z();this.X=h;t:if(pa(this)){var f=Oa(this.g);o="";var A=f.length,b=rt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xt(this),qn(this);var O="";break t}this.h.i=new l.TextDecoder}for(c=0;c<A;c++)this.h.h=!0,o+=this.h.i.decode(f[c],{stream:!(b&&c==A-1)});f.length=0,this.h.g+=o,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=h==200,Hh(this.i,this.u,this.A,this.l,this.R,Se,h),this.o){if(this.T&&!this.K){t:{if(this.g){var te,Ee=this.g;if((te=Ee.g?Ee.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(te)){var X=te;break t}}X=null}if(h=X)sn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ui(this,h);else{this.o=!1,this.s=3,De(12),xt(this),qn(this);break e}}if(this.P){h=!0;let $e;for(;!this.J&&this.C<O.length;)if($e=Xh(this,O),$e==ai){Se==4&&(this.s=4,De(14),h=!1),sn(this.i,this.l,null,"[Incomplete Response]");break}else if($e==da){this.s=4,De(15),sn(this.i,this.l,O,"[Invalid Chunk]"),h=!1;break}else sn(this.i,this.l,$e,null),ui(this,$e);if(pa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Se!=4||O.length!=0||this.h.h||(this.s=1,De(16),h=!1),this.o=this.o&&h,!h)sn(this.i,this.l,O,"[Invalid Chunked Response]"),xt(this),qn(this);else if(0<O.length&&!this.W){this.W=!0;var be=this.j;be.g==this&&be.ba&&!be.M&&(be.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),_i(be),be.M=!0,De(11))}}else sn(this.i,this.l,O,null),ui(this,O);Se==4&&xt(this),this.o&&!this.J&&(Se==4?Ba(this.j,this):(this.o=!1,qr(this)))}else fd(this.g),h==400&&0<O.indexOf("Unknown SID")?(this.s=3,De(12)):(this.s=0,De(13)),xt(this),qn(this)}}}catch{}finally{}};function pa(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Xh(o,c){var h=o.C,f=c.indexOf(`
`,h);return f==-1?ai:(h=Number(c.substring(h,f)),isNaN(h)?da:(f+=1,f+h>c.length?ai:(c=c.slice(f,f+h),o.C=f+h,c)))}pt.prototype.cancel=function(){this.J=!0,xt(this)};function qr(o){o.S=Date.now()+o.I,ma(o,o.I)}function ma(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Bn(E(o.ba,o),c)}function li(o){o.B&&(l.clearTimeout(o.B),o.B=null)}pt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Kh(this.i,this.A),this.L!=2&&(jn(),De(17)),xt(this),this.s=2,qn(this)):ma(this,this.S-o)};function qn(o){o.j.G==0||o.J||Ba(o.j,o)}function xt(o){li(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,ra(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function ui(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||hi(h.h,o))){if(!o.K&&hi(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Jr(h),Xr(h);else break e;mi(h),De(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=Bn(E(h.Za,h),6e3));if(1>=ya(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Mt(h,11)}else if((o.K||h.g==o)&&Jr(h),!x(c))for(A=h.Da.g.parse(c),c=0;c<A.length;c++){let X=A[c];if(h.T=X[0],X=X[1],h.G==2)if(X[0]=="c"){h.K=X[1],h.ia=X[2];const be=X[3];be!=null&&(h.la=be,h.j.info("VER="+h.la));const Se=X[4];Se!=null&&(h.Aa=Se,h.j.info("SVER="+h.Aa));const cn=X[5];cn!=null&&typeof cn=="number"&&0<cn&&(f=1.5*cn,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const $e=o.g;if($e){const es=$e.g?$e.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(es){var b=f.h;b.g||es.indexOf("spdy")==-1&&es.indexOf("quic")==-1&&es.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(di(b,b.h),b.h=null))}if(f.D){const gi=$e.g?$e.g.getResponseHeader("X-HTTP-Session-Id"):null;gi&&(f.ya=gi,se(f.I,f.D,gi))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var O=o;if(f.qa=za(f,f.J?f.ia:null,f.W),O.K){va(f.h,O);var te=O,Ee=f.L;Ee&&(te.I=Ee),te.B&&(li(te),qr(te)),f.g=O}else Ua(f);0<h.i.length&&Yr(h)}else X[0]!="stop"&&X[0]!="close"||Mt(h,7);else h.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?Mt(h,7):pi(h):X[0]!="noop"&&h.l&&h.l.ta(X),h.v=0)}}jn(4)}catch{}}var Yh=class{constructor(o,c){this.g=o,this.map=c}};function _a(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ga(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ya(o){return o.h?1:o.g?o.g.size:0}function hi(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function di(o,c){o.g?o.g.add(c):o.h=c}function va(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}_a.prototype.cancel=function(){if(this.i=Ea(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ea(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return D(o.i)}function Jh(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],h=o.length,f=0;f<h;f++)c.push(o[f]);return c}c=[],h=0;for(f in o)c[h++]=o[f];return c}function Zh(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const f in o)c[h++]=f;return c}}}function Ia(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=Zh(o),f=Jh(o),A=f.length,b=0;b<A;b++)c.call(void 0,f[b],h&&h[b],o)}var Ta=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ed(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),A=null;if(0<=f){var b=o[h].substring(0,f);A=o[h].substring(f+1)}else b=o[h];c(b,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Lt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Lt){this.h=o.h,zr(this,o.j),this.o=o.o,this.g=o.g,Wr(this,o.s),this.l=o.l;var c=o.i,h=new Gn;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),wa(this,h),this.m=o.m}else o&&(c=String(o).match(Ta))?(this.h=!1,zr(this,c[1]||"",!0),this.o=zn(c[2]||""),this.g=zn(c[3]||"",!0),Wr(this,c[4]),this.l=zn(c[5]||"",!0),wa(this,c[6]||"",!0),this.m=zn(c[7]||"")):(this.h=!1,this.i=new Gn(null,this.h))}Lt.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Wn(c,Aa,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Wn(c,Aa,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Wn(h,h.charAt(0)=="/"?rd:nd,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Wn(h,id)),o.join("")};function nt(o){return new Lt(o)}function zr(o,c,h){o.j=h?zn(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Wr(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function wa(o,c,h){c instanceof Gn?(o.i=c,od(o.i,o.h)):(h||(c=Wn(c,sd)),o.i=new Gn(c,o.h))}function se(o,c,h){o.i.set(c,h)}function Gr(o){return se(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function zn(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Wn(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,td),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function td(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Aa=/[#\/\?@]/g,nd=/[#\?:]/g,rd=/[#\?]/g,sd=/[#\?@]/g,id=/#/g;function Gn(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function mt(o){o.g||(o.g=new Map,o.h=0,o.i&&ed(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=Gn.prototype,n.add=function(o,c){mt(this),this.i=null,o=on(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function Ra(o,c){mt(o),c=on(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function ba(o,c){return mt(o),c=on(o,c),o.g.has(c)}n.forEach=function(o,c){mt(this),this.g.forEach(function(h,f){h.forEach(function(A){o.call(c,A,f,this)},this)},this)},n.na=function(){mt(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let f=0;f<c.length;f++){const A=o[f];for(let b=0;b<A.length;b++)h.push(c[f])}return h},n.V=function(o){mt(this);let c=[];if(typeof o=="string")ba(this,o)&&(c=c.concat(this.g.get(on(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},n.set=function(o,c){return mt(this),this.i=null,o=on(this,o),ba(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function Sa(o,c,h){Ra(o,c),0<h.length&&(o.i=null,o.g.set(on(o,c),D(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var f=c[h];const b=encodeURIComponent(String(f)),O=this.V(f);for(f=0;f<O.length;f++){var A=b;O[f]!==""&&(A+="="+encodeURIComponent(String(O[f]))),o.push(A)}}return this.i=o.join("&")};function on(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function od(o,c){c&&!o.j&&(mt(o),o.i=null,o.g.forEach(function(h,f){var A=f.toLowerCase();f!=A&&(Ra(this,f),Sa(this,A,h))},o)),o.j=c}function ad(o,c){const h=new $n;if(l.Image){const f=new Image;f.onload=S(_t,h,"TestLoadImage: loaded",!0,c,f),f.onerror=S(_t,h,"TestLoadImage: error",!1,c,f),f.onabort=S(_t,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=S(_t,h,"TestLoadImage: timeout",!1,c,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function cd(o,c){const h=new $n,f=new AbortController,A=setTimeout(()=>{f.abort(),_t(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(b=>{clearTimeout(A),b.ok?_t(h,"TestPingServer: ok",!0,c):_t(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),_t(h,"TestPingServer: error",!1,c)})}function _t(o,c,h,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(h)}catch{}}function ld(){this.g=new Wh}function ud(o,c,h){const f=h||"";try{Ia(o,function(A,b){let O=A;d(A)&&(O=ni(A)),c.push(f+b+"="+encodeURIComponent(O))})}catch(A){throw c.push(f+"type="+encodeURIComponent("_badmap")),A}}function Hr(o){this.l=o.Ub||null,this.j=o.eb||!1}P(Hr,ri),Hr.prototype.g=function(){return new Kr(this.l,this.j)},Hr.prototype.i=function(o){return function(){return o}}({});function Kr(o,c){Re.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Kr,Re),n=Kr.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Kn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Kn(this)),this.g&&(this.readyState=3,Kn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Pa(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Pa(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Hn(this):Kn(this),this.readyState==3&&Pa(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Hn(this))},n.Qa=function(o){this.g&&(this.response=o,Hn(this))},n.ga=function(){this.g&&Hn(this)};function Hn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Kn(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Kn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Kr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ca(o){let c="";return ne(o,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function fi(o,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=Ca(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):se(o,c,h))}function he(o){Re.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(he,Re);var hd=/^https?$/i,dd=["POST","PUT"];n=he.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():oi.g(),this.v=this.o?sa(this.o):sa(oi),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(b){ka(this,b);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)h.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const b of f.keys())h.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(b=>b.toLowerCase()=="content-type"),A=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(dd,c,void 0))||f||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,O]of h)this.g.setRequestHeader(b,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Va(this),this.u=!0,this.g.send(o),this.u=!1}catch(b){ka(this,b)}};function ka(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Na(o),Qr(o)}function Na(o){o.A||(o.A=!0,Ne(o,"complete"),Ne(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ne(this,"complete"),Ne(this,"abort"),Qr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qr(this,!0)),he.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Da(this):this.bb())},n.bb=function(){Da(this)};function Da(o){if(o.h&&typeof a<"u"&&(!o.v[1]||rt(o)!=4||o.Z()!=2)){if(o.u&&rt(o)==4)ea(o.Ea,0,o);else if(Ne(o,"readystatechange"),rt(o)==4){o.h=!1;try{const O=o.Z();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=O===0){var A=String(o.D).match(Ta)[1]||null;!A&&l.self&&l.self.location&&(A=l.self.location.protocol.slice(0,-1)),f=!hd.test(A?A.toLowerCase():"")}h=f}if(h)Ne(o,"complete"),Ne(o,"success");else{o.m=6;try{var b=2<rt(o)?o.g.statusText:""}catch{b=""}o.l=b+" ["+o.Z()+"]",Na(o)}}finally{Qr(o)}}}}function Qr(o,c){if(o.g){Va(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Ne(o,"ready");try{h.onreadystatechange=f}catch{}}}function Va(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function rt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<rt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),zh(c)}};function Oa(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function fd(o){const c={};o=(o.g&&2<=rt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(x(o[f]))continue;var h=T(o[f]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const b=c[A]||[];c[A]=b,b.push(h)}w(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qn(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function xa(o){this.Aa=0,this.i=[],this.j=new $n,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qn("baseRetryDelayMs",5e3,o),this.cb=Qn("retryDelaySeedMs",1e4,o),this.Wa=Qn("forwardChannelMaxRetries",2,o),this.wa=Qn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new _a(o&&o.concurrentRequestLimit),this.Da=new ld,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=xa.prototype,n.la=8,n.G=1,n.connect=function(o,c,h,f){De(0),this.W=o,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=za(this,null,this.W),Yr(this)};function pi(o){if(La(o),o.G==3){var c=o.U++,h=nt(o.I);if(se(h,"SID",o.K),se(h,"RID",c),se(h,"TYPE","terminate"),Xn(o,h),c=new pt(o,o.j,c),c.L=2,c.v=Gr(nt(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=Wa(c.j,null),c.g.ea(c.v)),c.F=Date.now(),qr(c)}qa(o)}function Xr(o){o.g&&(_i(o),o.g.cancel(),o.g=null)}function La(o){Xr(o),o.u&&(l.clearTimeout(o.u),o.u=null),Jr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Yr(o){if(!ga(o.h)&&!o.s){o.s=!0;var c=o.Ga;Fe||Vn(),tt||(Fe(),tt=!0),Dn.add(c,o),o.B=0}}function pd(o,c){return ya(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Bn(E(o.Ga,o,c),$a(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const A=new pt(this,this.j,o);let b=this.o;if(this.S&&(b?(b=m(b),I(b,this.S)):b=this.S),this.m!==null||this.O||(A.H=b,b=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Fa(this,A,c),h=nt(this.I),se(h,"RID",o),se(h,"CVER",22),this.D&&se(h,"X-HTTP-Session-Id",this.D),Xn(this,h),b&&(this.O?c="headers="+encodeURIComponent(String(Ca(b)))+"&"+c:this.m&&fi(h,this.m,b)),di(this.h,A),this.Ua&&se(h,"TYPE","init"),this.P?(se(h,"$req",c),se(h,"SID","null"),A.T=!0,ci(A,h,null)):ci(A,h,c),this.G=2}}else this.G==3&&(o?Ma(this,o):this.i.length==0||ga(this.h)||Ma(this))};function Ma(o,c){var h;c?h=c.l:h=o.U++;const f=nt(o.I);se(f,"SID",o.K),se(f,"RID",h),se(f,"AID",o.T),Xn(o,f),o.m&&o.o&&fi(f,o.m,o.o),h=new pt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Fa(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),di(o.h,h),ci(h,f,c)}function Xn(o,c){o.H&&ne(o.H,function(h,f){se(c,f,h)}),o.l&&Ia({},function(h,f){se(c,f,h)})}function Fa(o,c,h){h=Math.min(o.i.length,h);var f=o.l?E(o.l.Na,o.l,o):null;e:{var A=o.i;let b=-1;for(;;){const O=["count="+h];b==-1?0<h?(b=A[0].g,O.push("ofs="+b)):b=0:O.push("ofs="+b);let te=!0;for(let Ee=0;Ee<h;Ee++){let X=A[Ee].g;const be=A[Ee].map;if(X-=b,0>X)b=Math.max(0,A[Ee].g-100),te=!1;else try{ud(be,O,"req"+X+"_")}catch{f&&f(be)}}if(te){f=O.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,f}function Ua(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Fe||Vn(),tt||(Fe(),tt=!0),Dn.add(c,o),o.v=0}}function mi(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Bn(E(o.Fa,o),$a(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,ja(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Bn(E(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,De(10),Xr(this),ja(this))};function _i(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function ja(o){o.g=new pt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=nt(o.qa);se(c,"RID","rpc"),se(c,"SID",o.K),se(c,"AID",o.T),se(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&se(c,"TO",o.ja),se(c,"TYPE","xmlhttp"),Xn(o,c),o.m&&o.o&&fi(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Gr(nt(c)),h.m=null,h.P=!0,fa(h,o)}n.Za=function(){this.C!=null&&(this.C=null,Xr(this),mi(this),De(19))};function Jr(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Ba(o,c){var h=null;if(o.g==c){Jr(o),_i(o),o.g=null;var f=2}else if(hi(o.h,c))h=c.D,va(o.h,c),f=1;else return;if(o.G!=0){if(c.o)if(f==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var A=o.B;f=jr(),Ne(f,new la(f,h)),Yr(o)}else Ua(o);else if(A=c.s,A==3||A==0&&0<c.X||!(f==1&&pd(o,c)||f==2&&mi(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),A){case 1:Mt(o,5);break;case 4:Mt(o,10);break;case 3:Mt(o,6);break;default:Mt(o,2)}}}function $a(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function Mt(o,c){if(o.j.info("Error code "+c),c==2){var h=E(o.fb,o),f=o.Xa;const A=!f;f=new Lt(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||zr(f,"https"),Gr(f),A?ad(f.toString(),h):cd(f.toString(),h)}else De(2);o.G=0,o.l&&o.l.sa(c),qa(o),La(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function qa(o){if(o.G=0,o.ka=[],o.l){const c=Ea(o.h);(c.length!=0||o.i.length!=0)&&(N(o.ka,c),N(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function za(o,c,h){var f=h instanceof Lt?nt(h):new Lt(h);if(f.g!="")c&&(f.g=c+"."+f.g),Wr(f,f.s);else{var A=l.location;f=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;var b=new Lt(null);f&&zr(b,f),c&&(b.g=c),A&&Wr(b,A),h&&(b.l=h),f=b}return h=o.D,c=o.ya,h&&c&&se(f,h,c),se(f,"VER",o.la),Xn(o,f),f}function Wa(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new he(new Hr({eb:h})):new he(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ga(){}n=Ga.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Zr(){}Zr.prototype.g=function(o,c){return new Ue(o,c)};function Ue(o,c){Re.call(this),this.g=new xa(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!x(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!x(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new an(this)}P(Ue,Re),Ue.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ue.prototype.close=function(){pi(this.g)},Ue.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=ni(o),o=h);c.i.push(new Yh(c.Ya++,o)),c.G==3&&Yr(c)},Ue.prototype.N=function(){this.g.l=null,delete this.j,pi(this.g),delete this.g,Ue.aa.N.call(this)};function Ha(o){si.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}P(Ha,si);function Ka(){ii.call(this),this.status=1}P(Ka,ii);function an(o){this.g=o}P(an,Ga),an.prototype.ua=function(){Ne(this.g,"a")},an.prototype.ta=function(o){Ne(this.g,new Ha(o))},an.prototype.sa=function(o){Ne(this.g,new Ka)},an.prototype.ra=function(){Ne(this.g,"b")},Zr.prototype.createWebChannel=Zr.prototype.g,Ue.prototype.send=Ue.prototype.o,Ue.prototype.open=Ue.prototype.m,Ue.prototype.close=Ue.prototype.close,yu=function(){return new Zr},gu=function(){return jr()},_u=Ot,ji={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Br.NO_ERROR=0,Br.TIMEOUT=8,Br.HTTP_ERROR=6,us=Br,ua.COMPLETE="complete",mu=ua,ia.EventType=Un,Un.OPEN="a",Un.CLOSE="b",Un.ERROR="c",Un.MESSAGE="d",Re.prototype.listen=Re.prototype.K,sr=ia,he.prototype.listenOnce=he.prototype.L,he.prototype.getLastError=he.prototype.Ka,he.prototype.getLastErrorCode=he.prototype.Ba,he.prototype.getStatus=he.prototype.Z,he.prototype.getResponseJson=he.prototype.Oa,he.prototype.getResponseText=he.prototype.oa,he.prototype.send=he.prototype.ea,he.prototype.setWithCredentials=he.prototype.Ha,pu=he}).apply(typeof ns<"u"?ns:typeof self<"u"?self:typeof window<"u"?window:{});const Pc="@firebase/firestore";/**
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
 */class xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xe.UNAUTHENTICATED=new xe(null),xe.GOOGLE_CREDENTIALS=new xe("google-credentials-uid"),xe.FIRST_PARTY=new xe("first-party-uid"),xe.MOCK_USER=new xe("mock-user");/**
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
 */let Pn="10.14.0";/**
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
 */const Kt=new no("@firebase/firestore");function Yn(){return Kt.logLevel}function M(n,...e){if(Kt.logLevel<=H.DEBUG){const t=e.map(mo);Kt.debug(`Firestore (${Pn}): ${n}`,...t)}}function ut(n,...e){if(Kt.logLevel<=H.ERROR){const t=e.map(mo);Kt.error(`Firestore (${Pn}): ${n}`,...t)}}function _r(n,...e){if(Kt.logLevel<=H.WARN){const t=e.map(mo);Kt.warn(`Firestore (${Pn}): ${n}`,...t)}}function mo(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function $(n="Unexpected state"){const e=`FIRESTORE (${Pn}) INTERNAL ASSERTION FAILED: `+n;throw ut(e),new Error(e)}function Z(n,e){n||$()}function z(n,e){return n}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends dt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $t{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class b_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class S_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(xe.UNAUTHENTICATED))}shutdown(){}}class P_{constructor(e){this.t=e,this.currentUser=xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Z(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new $t;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new $t,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new $t)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string"),new b_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string"),new xe(e)}}class C_{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=xe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class k_{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new C_(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class N_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class D_{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Z(this.o===void 0);const r=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Z(typeof t.token=="string"),this.R=t.token,new N_(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function V_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class vu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=V_(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function Y(n,e){return n<e?-1:n>e?1:0}function vn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class me{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new me(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new me(0,0))}static max(){return new q(new me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class gr{constructor(e,t,r){t===void 0?t=0:t>e.length&&$(),r===void 0?r=e.length-t:r>e.length-t&&$(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return gr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof gr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ie extends gr{construct(e,t,r){return new ie(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ie(t)}static emptyPath(){return new ie([])}}const O_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Te extends gr{construct(e,t,r){return new Te(e,t,r)}static isValidIdentifier(e){return O_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Te.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Te(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new L(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new L(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new L(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new L(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Te(t)}static emptyPath(){return new Te([])}}/**
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
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(ie.fromString(e))}static fromName(e){return new U(ie.fromString(e).popFirst(5))}static empty(){return new U(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new ie(e.slice()))}}function x_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=q.fromTimestamp(r===1e9?new me(t+1,0):new me(t,r));return new St(s,U.empty(),e)}function L_(n){return new St(n.readTime,n.key,-1)}class St{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new St(q.min(),U.empty(),-1)}static max(){return new St(q.max(),U.empty(),-1)}}function M_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:Y(n.largestBatchId,e.largestBatchId))}/**
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
 */const F_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class U_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function kr(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==F_)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):k.reject(t)}static resolve(e){return new k((t,r)=>{t(e)})}static reject(e){return new k((t,r)=>{r(e)})}static waitFor(e){return new k((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next(s=>s?k.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new k((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(p=>{a[d]=p,++l,l===i&&r(a)},p=>s(p))}})}static doWhile(e,t){return new k((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function j_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Nr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class _o{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}_o.oe=-1;function Ms(n){return n==null}function ws(n){return n===0&&1/n==-1/0}function B_(n){return typeof n=="number"&&Number.isInteger(n)&&!ws(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Cc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Yt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Eu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ue{constructor(e,t){this.comparator=e,this.root=t||Ie.EMPTY}insert(e,t){return new ue(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ie.BLACK,null,null))}remove(e){return new ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ie.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new rs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new rs(this.root,e,this.comparator,!1)}getReverseIterator(){return new rs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new rs(this.root,e,this.comparator,!0)}}class rs{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ie{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ie.RED,this.left=s??Ie.EMPTY,this.right=i??Ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ie(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ie.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ie.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}Ie.EMPTY=null,Ie.RED=!0,Ie.BLACK=!1;Ie.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ie(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class we{constructor(e){this.comparator=e,this.data=new ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new kc(this.data.getIterator())}getIteratorFrom(e){return new kc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof we)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new we(this.comparator);return t.data=e,t}}class kc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class je{constructor(e){this.fields=e,e.sort(Te.comparator)}static empty(){return new je([])}unionWith(e){let t=new we(Te.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new je(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return vn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Iu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ae{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Iu("Invalid base64 string: "+i):i}}(e);return new Ae(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Ae(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ae.EMPTY_BYTE_STRING=new Ae("");const $_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pt(n){if(Z(!!n),typeof n=="string"){let e=0;const t=$_.exec(n);if(Z(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:pe(n.seconds),nanos:pe(n.nanos)}}function pe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Qt(n){return typeof n=="string"?Ae.fromBase64String(n):Ae.fromUint8Array(n)}/**
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
 */function go(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function yo(n){const e=n.mapValue.fields.__previous_value__;return go(e)?yo(e):e}function yr(n){const e=Pt(n.mapValue.fields.__local_write_time__.timestampValue);return new me(e.seconds,e.nanos)}/**
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
 */class q_{constructor(e,t,r,s,i,a,l,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class vr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new vr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof vr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ss={mapValue:{}};function Xt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?go(n)?4:W_(n)?9007199254740991:z_(n)?10:11:$()}function Ze(n,e){if(n===e)return!0;const t=Xt(n);if(t!==Xt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return yr(n).isEqual(yr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Pt(s.timestampValue),l=Pt(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Qt(s.bytesValue).isEqual(Qt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return pe(s.geoPointValue.latitude)===pe(i.geoPointValue.latitude)&&pe(s.geoPointValue.longitude)===pe(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return pe(s.integerValue)===pe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=pe(s.doubleValue),l=pe(i.doubleValue);return a===l?ws(a)===ws(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return vn(n.arrayValue.values||[],e.arrayValue.values||[],Ze);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Cc(a)!==Cc(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Ze(a[u],l[u])))return!1;return!0}(n,e);default:return $()}}function Er(n,e){return(n.values||[]).find(t=>Ze(t,e))!==void 0}function En(n,e){if(n===e)return 0;const t=Xt(n),r=Xt(e);if(t!==r)return Y(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Y(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=pe(i.integerValue||i.doubleValue),u=pe(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Nc(n.timestampValue,e.timestampValue);case 4:return Nc(yr(n),yr(e));case 5:return Y(n.stringValue,e.stringValue);case 6:return function(i,a){const l=Qt(i),u=Qt(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const p=Y(l[d],u[d]);if(p!==0)return p}return Y(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=Y(pe(i.latitude),pe(a.latitude));return l!==0?l:Y(pe(i.longitude),pe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Dc(n.arrayValue,e.arrayValue);case 10:return function(i,a){var l,u,d,p;const y=i.fields||{},E=a.fields||{},S=(l=y.value)===null||l===void 0?void 0:l.arrayValue,P=(u=E.value)===null||u===void 0?void 0:u.arrayValue,D=Y(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((p=P==null?void 0:P.values)===null||p===void 0?void 0:p.length)||0);return D!==0?D:Dc(S,P)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===ss.mapValue&&a===ss.mapValue)return 0;if(i===ss.mapValue)return 1;if(a===ss.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=a.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let y=0;y<u.length&&y<p.length;++y){const E=Y(u[y],p[y]);if(E!==0)return E;const S=En(l[u[y]],d[p[y]]);if(S!==0)return S}return Y(u.length,p.length)}(n.mapValue,e.mapValue);default:throw $()}}function Nc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Y(n,e);const t=Pt(n),r=Pt(e),s=Y(t.seconds,r.seconds);return s!==0?s:Y(t.nanos,r.nanos)}function Dc(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=En(t[s],r[s]);if(i)return i}return Y(t.length,r.length)}function In(n){return Bi(n)}function Bi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Pt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Qt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return U.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Bi(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Bi(t.fields[a])}`;return s+"}"}(n.mapValue):$()}function Vc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function $i(n){return!!n&&"integerValue"in n}function vo(n){return!!n&&"arrayValue"in n}function Oc(n){return!!n&&"nullValue"in n}function xc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function hs(n){return!!n&&"mapValue"in n}function z_(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function lr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Yt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=lr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=lr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function W_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Le{constructor(e){this.value=e}static empty(){return new Le({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!hs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=lr(t)}setAll(e){let t=Te.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=lr(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());hs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ze(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];hs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Yt(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Le(lr(this.value))}}function Tu(n){const e=[];return Yt(n.fields,(t,r)=>{const s=new Te([t]);if(hs(r)){const i=Tu(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new je(e)}/**
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
 */class Ce{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ce(e,0,q.min(),q.min(),q.min(),Le.empty(),0)}static newFoundDocument(e,t,r,s){return new Ce(e,1,t,q.min(),r,s,0)}static newNoDocument(e,t){return new Ce(e,2,t,q.min(),q.min(),Le.empty(),0)}static newUnknownDocument(e,t){return new Ce(e,3,t,q.min(),q.min(),Le.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Le.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Le.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class As{constructor(e,t){this.position=e,this.inclusive=t}}function Lc(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=U.comparator(U.fromName(a.referenceValue),t.key):r=En(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Mc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ze(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ir{constructor(e,t="asc"){this.field=e,this.dir=t}}function G_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class wu{}class ge extends wu{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new K_(e,t,r):t==="array-contains"?new Y_(e,r):t==="in"?new J_(e,r):t==="not-in"?new Z_(e,r):t==="array-contains-any"?new eg(e,r):new ge(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Q_(e,r):new X_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(En(t,this.value)):t!==null&&Xt(this.value)===Xt(t)&&this.matchesComparison(En(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class We extends wu{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new We(e,t)}matches(e){return Au(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Au(n){return n.op==="and"}function Ru(n){return H_(n)&&Au(n)}function H_(n){for(const e of n.filters)if(e instanceof We)return!1;return!0}function qi(n){if(n instanceof ge)return n.field.canonicalString()+n.op.toString()+In(n.value);if(Ru(n))return n.filters.map(e=>qi(e)).join(",");{const e=n.filters.map(t=>qi(t)).join(",");return`${n.op}(${e})`}}function bu(n,e){return n instanceof ge?function(r,s){return s instanceof ge&&r.op===s.op&&r.field.isEqual(s.field)&&Ze(r.value,s.value)}(n,e):n instanceof We?function(r,s){return s instanceof We&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&bu(a,s.filters[l]),!0):!1}(n,e):void $()}function Su(n){return n instanceof ge?function(t){return`${t.field.canonicalString()} ${t.op} ${In(t.value)}`}(n):n instanceof We?function(t){return t.op.toString()+" {"+t.getFilters().map(Su).join(" ,")+"}"}(n):"Filter"}class K_ extends ge{constructor(e,t,r){super(e,t,r),this.key=U.fromName(r.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class Q_ extends ge{constructor(e,t){super(e,"in",t),this.keys=Pu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class X_ extends ge{constructor(e,t){super(e,"not-in",t),this.keys=Pu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Pu(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>U.fromName(r.referenceValue))}class Y_ extends ge{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return vo(t)&&Er(t.arrayValue,this.value)}}class J_ extends ge{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Er(this.value.arrayValue,t)}}class Z_ extends ge{constructor(e,t){super(e,"not-in",t)}matches(e){if(Er(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Er(this.value.arrayValue,t)}}class eg extends ge{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!vo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Er(this.value.arrayValue,r))}}/**
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
 */class tg{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function Fc(n,e=null,t=[],r=[],s=null,i=null,a=null){return new tg(n,e,t,r,s,i,a)}function Eo(n){const e=z(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>qi(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ms(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>In(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>In(r)).join(",")),e.ue=t}return e.ue}function Io(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!G_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!bu(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Mc(n.startAt,e.startAt)&&Mc(n.endAt,e.endAt)}function zi(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Cn{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ng(n,e,t,r,s,i,a,l){return new Cn(n,e,t,r,s,i,a,l)}function To(n){return new Cn(n)}function Uc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Cu(n){return n.collectionGroup!==null}function ur(n){const e=z(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new we(Te.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ir(i,r))}),t.has(Te.keyField().canonicalString())||e.ce.push(new Ir(Te.keyField(),r))}return e.ce}function Ye(n){const e=z(n);return e.le||(e.le=rg(e,ur(n))),e.le}function rg(n,e){if(n.limitType==="F")return Fc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ir(s.field,i)});const t=n.endAt?new As(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new As(n.startAt.position,n.startAt.inclusive):null;return Fc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Wi(n,e){const t=n.filters.concat([e]);return new Cn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Gi(n,e,t){return new Cn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Fs(n,e){return Io(Ye(n),Ye(e))&&n.limitType===e.limitType}function ku(n){return`${Eo(Ye(n))}|lt:${n.limitType}`}function ln(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Su(s)).join(", ")}]`),Ms(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>In(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>In(s)).join(",")),`Target(${r})`}(Ye(n))}; limitType=${n.limitType})`}function Us(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):U.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of ur(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,u){const d=Lc(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,ur(r),s)||r.endAt&&!function(a,l,u){const d=Lc(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,ur(r),s))}(n,e)}function sg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Nu(n){return(e,t)=>{let r=!1;for(const s of ur(n)){const i=ig(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function ig(n,e,t){const r=n.field.isKeyField()?U.comparator(e.key,t.key):function(i,a,l){const u=a.data.field(i),d=l.data.field(i);return u!==null&&d!==null?En(u,d):$()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
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
 */class kn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Yt(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Eu(this.inner)}size(){return this.innerSize}}/**
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
 */const og=new ue(U.comparator);function ht(){return og}const Du=new ue(U.comparator);function ir(...n){let e=Du;for(const t of n)e=e.insert(t.key,t);return e}function Vu(n){let e=Du;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function jt(){return hr()}function Ou(){return hr()}function hr(){return new kn(n=>n.toString(),(n,e)=>n.isEqual(e))}const ag=new ue(U.comparator),cg=new we(U.comparator);function G(...n){let e=cg;for(const t of n)e=e.add(t);return e}const lg=new we(Y);function ug(){return lg}/**
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
 */function wo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ws(e)?"-0":e}}function xu(n){return{integerValue:""+n}}function hg(n,e){return B_(e)?xu(e):wo(n,e)}/**
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
 */class js{constructor(){this._=void 0}}function dg(n,e,t){return n instanceof Rs?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&go(i)&&(i=yo(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof Tr?Mu(n,e):n instanceof wr?Fu(n,e):function(s,i){const a=Lu(s,i),l=jc(a)+jc(s.Pe);return $i(a)&&$i(s.Pe)?xu(l):wo(s.serializer,l)}(n,e)}function fg(n,e,t){return n instanceof Tr?Mu(n,e):n instanceof wr?Fu(n,e):t}function Lu(n,e){return n instanceof bs?function(r){return $i(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Rs extends js{}class Tr extends js{constructor(e){super(),this.elements=e}}function Mu(n,e){const t=Uu(e);for(const r of n.elements)t.some(s=>Ze(s,r))||t.push(r);return{arrayValue:{values:t}}}class wr extends js{constructor(e){super(),this.elements=e}}function Fu(n,e){let t=Uu(e);for(const r of n.elements)t=t.filter(s=>!Ze(s,r));return{arrayValue:{values:t}}}class bs extends js{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function jc(n){return pe(n.integerValue||n.doubleValue)}function Uu(n){return vo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function pg(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Tr&&s instanceof Tr||r instanceof wr&&s instanceof wr?vn(r.elements,s.elements,Ze):r instanceof bs&&s instanceof bs?Ze(r.Pe,s.Pe):r instanceof Rs&&s instanceof Rs}(n.transform,e.transform)}class mg{constructor(e,t){this.version=e,this.transformResults=t}}class qe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new qe}static exists(e){return new qe(void 0,e)}static updateTime(e){return new qe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ds(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Bs{}function ju(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ao(n.key,qe.none()):new Dr(n.key,n.data,qe.none());{const t=n.data,r=Le.empty();let s=new we(Te.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Nt(n.key,r,new je(s.toArray()),qe.none())}}function _g(n,e,t){n instanceof Dr?function(s,i,a){const l=s.value.clone(),u=$c(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Nt?function(s,i,a){if(!ds(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=$c(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Bu(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function dr(n,e,t,r){return n instanceof Dr?function(i,a,l,u){if(!ds(i.precondition,a))return l;const d=i.value.clone(),p=qc(i.fieldTransforms,u,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Nt?function(i,a,l,u){if(!ds(i.precondition,a))return l;const d=qc(i.fieldTransforms,u,a),p=a.data;return p.setAll(Bu(i)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(i,a,l){return ds(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function gg(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Lu(r.transform,s||null);i!=null&&(t===null&&(t=Le.empty()),t.set(r.field,i))}return t||null}function Bc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&vn(r,s,(i,a)=>pg(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Dr extends Bs{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Nt extends Bs{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Bu(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function $c(n,e,t){const r=new Map;Z(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,fg(a,l,t[s]))}return r}function qc(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,dg(i,a,e))}return r}class Ao extends Bs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yg extends Bs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class vg{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&_g(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=dr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=dr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Ou();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const u=ju(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),G())}isEqual(e){return this.batchId===e.batchId&&vn(this.mutations,e.mutations,(t,r)=>Bc(t,r))&&vn(this.baseMutations,e.baseMutations,(t,r)=>Bc(t,r))}}class Ro{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Z(e.mutations.length===r.length);let s=function(){return ag}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Ro(e,t,r,s)}}/**
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
 */class Eg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ig{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var _e,K;function Tg(n){switch(n){default:return $();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function $u(n){if(n===void 0)return ut("GRPC error has no .code"),C.UNKNOWN;switch(n){case _e.OK:return C.OK;case _e.CANCELLED:return C.CANCELLED;case _e.UNKNOWN:return C.UNKNOWN;case _e.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case _e.INTERNAL:return C.INTERNAL;case _e.UNAVAILABLE:return C.UNAVAILABLE;case _e.UNAUTHENTICATED:return C.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case _e.NOT_FOUND:return C.NOT_FOUND;case _e.ALREADY_EXISTS:return C.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return C.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case _e.ABORTED:return C.ABORTED;case _e.OUT_OF_RANGE:return C.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return C.UNIMPLEMENTED;case _e.DATA_LOSS:return C.DATA_LOSS;default:return $()}}(K=_e||(_e={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function wg(){return new TextEncoder}/**
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
 */const Ag=new Bt([4294967295,4294967295],0);function zc(n){const e=wg().encode(n),t=new fu;return t.update(e),new Uint8Array(t.digest())}function Wc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Bt([t,r],0),new Bt([s,i],0)]}class bo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new or(`Invalid padding: ${t}`);if(r<0)throw new or(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new or(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new or(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Bt.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(Bt.fromNumber(r)));return s.compare(Ag)===1&&(s=new Bt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=zc(e),[r,s]=Wc(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new bo(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=zc(e),[r,s]=Wc(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class or extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class $s{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Vr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new $s(q.min(),s,new ue(Y),ht(),G())}}class Vr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Vr(r,t,G(),G(),G())}}/**
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
 */class fs{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class qu{constructor(e,t){this.targetId=e,this.me=t}}class zu{constructor(e,t,r=Ae.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Gc{constructor(){this.fe=0,this.ge=Kc(),this.pe=Ae.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=G(),t=G(),r=G();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:$()}}),new Vr(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Kc()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Z(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Rg{constructor(e){this.Le=e,this.Be=new Map,this.ke=ht(),this.qe=Hc(),this.Qe=new ue(Y)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:$()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(zi(i))if(r===0){const a=new U(i.path);this.Ue(t,a,Ce.newNoDocument(a,q.min()))}else Z(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),u=l?this.Xe(l,e,a):1;if(u!==0){this.je(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=Qt(r).toUint8Array()}catch(u){if(u instanceof Iu)return _r("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new bo(a,s,i)}catch(u){return _r(u instanceof or?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const l=this.Je(a);if(l){if(i.current&&zi(l.target)){const u=new U(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Ce.newNoDocument(u,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=G();this.qe.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new $s(e,t,this.Qe,this.ke,r);return this.ke=ht(),this.qe=Hc(),this.Qe=new ue(Y),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Gc,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new we(Y),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Gc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Hc(){return new ue(U.comparator)}function Kc(){return new ue(U.comparator)}const bg={asc:"ASCENDING",desc:"DESCENDING"},Sg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Pg={and:"AND",or:"OR"};class Cg{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Hi(n,e){return n.useProto3Json||Ms(e)?e:{value:e}}function Ss(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wu(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function kg(n,e){return Ss(n,e.toTimestamp())}function Je(n){return Z(!!n),q.fromTimestamp(function(t){const r=Pt(t);return new me(r.seconds,r.nanos)}(n))}function So(n,e){return Ki(n,e).canonicalString()}function Ki(n,e){const t=function(s){return new ie(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Gu(n){const e=ie.fromString(n);return Z(Yu(e)),e}function Qi(n,e){return So(n.databaseId,e.path)}function Ri(n,e){const t=Gu(e);if(t.get(1)!==n.databaseId.projectId)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new U(Ku(t))}function Hu(n,e){return So(n.databaseId,e)}function Ng(n){const e=Gu(n);return e.length===4?ie.emptyPath():Ku(e)}function Xi(n){return new ie(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ku(n){return Z(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Qc(n,e,t){return{name:Qi(n,e),fields:t.value.mapValue.fields}}function Dg(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,p){return d.useProto3Json?(Z(p===void 0||typeof p=="string"),Ae.fromBase64String(p||"")):(Z(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Ae.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const p=d.code===void 0?C.UNKNOWN:$u(d.code);return new L(p,d.message||"")}(a);t=new zu(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ri(n,r.document.name),i=Je(r.document.updateTime),a=r.document.createTime?Je(r.document.createTime):q.min(),l=new Le({mapValue:{fields:r.document.fields}}),u=Ce.newFoundDocument(s,i,a,l),d=r.targetIds||[],p=r.removedTargetIds||[];t=new fs(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ri(n,r.document),i=r.readTime?Je(r.readTime):q.min(),a=Ce.newNoDocument(s,i),l=r.removedTargetIds||[];t=new fs([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ri(n,r.document),i=r.removedTargetIds||[];t=new fs([],i,s,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Ig(s,i),l=r.targetId;t=new qu(l,a)}}return t}function Vg(n,e){let t;if(e instanceof Dr)t={update:Qc(n,e.key,e.value)};else if(e instanceof Ao)t={delete:Qi(n,e.key)};else if(e instanceof Nt)t={update:Qc(n,e.key,e.data),updateMask:$g(e.fieldMask)};else{if(!(e instanceof yg))return $();t={verify:Qi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof Rs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Tr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof wr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof bs)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw $()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:kg(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$()}(n,e.precondition)),t}function Og(n,e){return n&&n.length>0?(Z(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Je(s.updateTime):Je(i);return a.isEqual(q.min())&&(a=Je(i)),new mg(a,s.transformResults||[])}(t,e))):[]}function xg(n,e){return{documents:[Hu(n,e.path)]}}function Lg(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Hu(n,s);const i=function(d){if(d.length!==0)return Xu(We.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(p=>function(E){return{field:un(E.field),direction:Ug(E.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Hi(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:s}}function Mg(n){let e=Ng(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Z(r===1);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=function(y){const E=Qu(y);return E instanceof We&&Ru(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(E=>function(P){return new Ir(hn(P.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(E))}(t.orderBy));let l=null;t.limit&&(l=function(y){let E;return E=typeof y=="object"?y.value:y,Ms(E)?null:E}(t.limit));let u=null;t.startAt&&(u=function(y){const E=!!y.before,S=y.values||[];return new As(S,E)}(t.startAt));let d=null;return t.endAt&&(d=function(y){const E=!y.before,S=y.values||[];return new As(S,E)}(t.endAt)),ng(e,s,a,i,l,"F",u,d)}function Fg(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Qu(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=hn(t.unaryFilter.field);return ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=hn(t.unaryFilter.field);return ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hn(t.unaryFilter.field);return ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=hn(t.unaryFilter.field);return ge.create(a,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(n):n.fieldFilter!==void 0?function(t){return ge.create(hn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return We.create(t.compositeFilter.filters.map(r=>Qu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return $()}}(t.compositeFilter.op))}(n):$()}function Ug(n){return bg[n]}function jg(n){return Sg[n]}function Bg(n){return Pg[n]}function un(n){return{fieldPath:n.canonicalString()}}function hn(n){return Te.fromServerFormat(n.fieldPath)}function Xu(n){return n instanceof ge?function(t){if(t.op==="=="){if(xc(t.value))return{unaryFilter:{field:un(t.field),op:"IS_NAN"}};if(Oc(t.value))return{unaryFilter:{field:un(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(xc(t.value))return{unaryFilter:{field:un(t.field),op:"IS_NOT_NAN"}};if(Oc(t.value))return{unaryFilter:{field:un(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:un(t.field),op:jg(t.op),value:t.value}}}(n):n instanceof We?function(t){const r=t.getFilters().map(s=>Xu(s));return r.length===1?r[0]:{compositeFilter:{op:Bg(t.op),filters:r}}}(n):$()}function $g(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Yu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Tt{constructor(e,t,r,s,i=q.min(),a=q.min(),l=Ae.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Tt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Tt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Tt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Tt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class qg{constructor(e){this.ct=e}}function zg(n){const e=Mg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Gi(e,e.limit,"L"):e}/**
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
 */class Wg{constructor(){this.un=new Gg}addToCollectionParentIndex(e,t){return this.un.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(St.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(St.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class Gg{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new we(ie.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new we(ie.comparator)).toArray()}}/**
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
 */class Tn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Tn(0)}static kn(){return new Tn(-1)}}/**
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
 */class Hg{constructor(){this.changes=new kn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ce.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Kg{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Qg{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&dr(r.mutation,s,je.empty(),me.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,G()).next(()=>r))}getLocalViewOfDocuments(e,t,r=G()){const s=jt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=ir();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=jt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,G()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=ht();const a=hr(),l=function(){return hr()}();return t.forEach((u,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof Nt)?i=i.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),dr(p.mutation,d,p.mutation.getFieldMask(),me.now())):a.set(d.key,je.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var y;return l.set(d,new Kg(p,(y=a.get(d))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(e,t){const r=hr();let s=new ue((a,l)=>a-l),i=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let p=r.get(u)||je.empty();p=l.applyToLocalView(d,p),r.set(u,p);const y=(s.get(l.batchId)||G()).add(u);s=s.insert(l.batchId,y)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,p=u.value,y=Ou();p.forEach(E=>{if(!i.has(E)){const S=ju(t.get(E),r.get(E));S!==null&&y.set(E,S),i=i.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return k.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return U.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Cu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):k.resolve(jt());let l=-1,u=i;return a.next(d=>k.forEach(d,(p,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),i.get(p)?k.resolve():this.remoteDocumentCache.getEntry(e,p).next(E=>{u=u.insert(p,E)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,G())).next(p=>({batchId:l,changes:Vu(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next(r=>{let s=ir();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=ir();return this.indexManager.getCollectionParents(e,i).next(l=>k.forEach(l,u=>{const d=function(y,E){return new Cn(E,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(p=>{p.forEach((y,E)=>{a=a.insert(y,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Ce.newInvalidDocument(p)))});let l=ir();return a.forEach((u,d)=>{const p=i.get(u);p!==void 0&&dr(p.mutation,d,je.empty(),me.now()),Us(t,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class Xg{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return k.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Je(s.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:zg(s.bundledQuery),readTime:Je(s.readTime)}}(t)),k.resolve()}}/**
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
 */class Yg{constructor(){this.overlays=new ue(U.comparator),this.Ir=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=jt();return k.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),k.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const s=jt(),i=t.length+1,a=new U(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return k.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ue((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=i.get(d.largestBatchId);p===null&&(p=jt(),i=i.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=jt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=s)););return k.resolve(l)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Eg(t,r));let i=this.Ir.get(t);i===void 0&&(i=G(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class Jg{constructor(){this.sessionToken=Ae.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
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
 */class Po{constructor(){this.Tr=new we(ve.Er),this.dr=new we(ve.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new ve(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new ve(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new U(new ie([])),r=new ve(t,e),s=new ve(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new U(new ie([])),r=new ve(t,e),s=new ve(t,e+1);let i=G();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new ve(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ve{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return U.comparator(e.key,t.key)||Y(e.wr,t.wr)}static Ar(e,t){return Y(e.wr,t.wr)||U.comparator(e.key,t.key)}}/**
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
 */class Zg{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new we(ve.Er)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new vg(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.br=this.br.add(new ve(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ve(t,0),s=new ve(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const l=this.Dr(a.wr);i.push(l)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new we(Y);return t.forEach(s=>{const i=new ve(s,0),a=new ve(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],l=>{r=r.add(l.wr)})}),k.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;U.isDocumentKey(i)||(i=i.child(""));const a=new ve(new U(i),0);let l=new we(Y);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.wr)),!0)},a),k.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Z(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return k.forEach(t.mutations,s=>{const i=new ve(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new ve(t,0),s=this.br.firstAfterOrEqual(r);return k.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class ey{constructor(e){this.Mr=e,this.docs=function(){return new ue(U.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():Ce.newInvalidDocument(t))}getEntries(e,t){let r=ht();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ce.newInvalidDocument(s))}),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=ht();const a=t.path,l=new U(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||M_(L_(p),r)<=0||(s.has(p.key)||Us(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,r,s){$()}Or(e,t){return k.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new ty(this)}getSize(e){return k.resolve(this.size)}}class ty extends Hg{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),k.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class ny{constructor(e){this.persistence=e,this.Nr=new kn(t=>Eo(t),Io),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Po,this.targetCount=0,this.kr=Tn.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),k.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Tn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.Kn(t),k.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.Br.containsKey(t))}}/**
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
 */class ry{constructor(e,t){this.qr={},this.overlays={},this.Qr=new _o(0),this.Kr=!1,this.Kr=!0,this.$r=new Jg,this.referenceDelegate=e(this),this.Ur=new ny(this),this.indexManager=new Wg,this.remoteDocumentCache=function(s){return new ey(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new qg(t),this.Gr=new Xg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Yg,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new Zg(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){M("MemoryPersistence","Starting transaction:",e);const s=new sy(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return k.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class sy extends U_{constructor(e){super(),this.currentSequenceNumber=e}}class Co{constructor(e){this.persistence=e,this.Jr=new Po,this.Yr=null}static Zr(e){return new Co(e)}get Xr(){if(this.Yr)return this.Yr;throw $()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),k.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Xr,r=>{const s=U.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,q.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return k.or([()=>k.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class ko{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=G(),s=G();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ko(e,t.fromCache,r,s)}}/**
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
 */class iy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class oy{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Bd()?8:j_(ke())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new iy;return this.Xi(e,t,a).next(l=>{if(i.result=l,this.zi)return this.es(e,t,a,l.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(Yn()<=H.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",ln(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),k.resolve()):(Yn()<=H.DEBUG&&M("QueryEngine","Query:",ln(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Yn()<=H.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",ln(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ye(t))):k.resolve())}Yi(e,t){if(Uc(t))return k.resolve(null);let r=Ye(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Gi(t,null,"F"),r=Ye(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=G(...i);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(t,l);return this.ns(t,d,a,u.readTime)?this.Yi(e,Gi(t,null,"F")):this.rs(e,d,t,u)}))})))}Zi(e,t,r,s){return Uc(t)||s.isEqual(q.min())?k.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?k.resolve(null):(Yn()<=H.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ln(t)),this.rs(e,a,t,x_(s,-1)).next(l=>l))})}ts(e,t){let r=new we(Nu(e));return t.forEach((s,i)=>{Us(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return Yn()<=H.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",ln(t)),this.Ji.getDocumentsMatchingQuery(e,t,St.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class ay{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new ue(Y),this._s=new kn(i=>Eo(i),Io),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Qg(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function cy(n,e,t,r){return new ay(n,e,t,r)}async function Ju(n,e){const t=z(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=G();for(const d of s){a.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of i){l.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:l}))})})}function ly(n,e){const t=z(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,p){const y=d.batch,E=y.keys();let S=k.resolve();return E.forEach(P=>{S=S.next(()=>p.getEntry(u,P)).next(D=>{const N=d.docVersions.get(P);Z(N!==null),D.version.compareTo(N)<0&&(y.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),p.addEntry(D)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,y))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=G();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Zu(n){const e=z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function uy(n,e){const t=z(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const l=[];e.targetChanges.forEach((p,y)=>{const E=s.get(y);if(!E)return;l.push(t.Ur.removeMatchingKeys(i,p.removedDocuments,y).next(()=>t.Ur.addMatchingKeys(i,p.addedDocuments,y)));let S=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(y)!==null?S=S.withResumeToken(Ae.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),s=s.insert(y,S),function(D,N,j){return D.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(E,S,p)&&l.push(t.Ur.updateTargetData(i,S))});let u=ht(),d=G();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))}),l.push(hy(i,a,e.documentUpdates).next(p=>{u=p.Ps,d=p.Is})),!r.isEqual(q.min())){const p=t.Ur.getLastRemoteSnapshotVersion(i).next(y=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(p)}return k.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.os=s,i))}function hy(n,e,t){let r=G(),s=G();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=ht();return t.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(q.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):M("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:a,Is:s}})}function dy(n,e){const t=z(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function fy(n,e){const t=z(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,k.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new Tt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Yi(n,e,t){const r=z(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Nr(a))throw a;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Xc(n,e,t){const r=z(n);let s=q.min(),i=G();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,p){const y=z(u),E=y._s.get(p);return E!==void 0?k.resolve(y.os.get(E)):y.Ur.getTargetData(d,p)}(r,a,Ye(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:q.min(),t?i:G())).next(l=>(py(r,sg(e),l),{documents:l,Ts:i})))}function py(n,e,t){let r=n.us.get(e)||q.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class Yc{constructor(){this.activeTargetIds=ug()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class my{constructor(){this.so=new Yc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Yc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class _y{_o(e){}shutdown(){}}/**
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
 */class Jc{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let is=null;function bi(){return is===null?is=function(){return 268435456+Math.round(2147483648*Math.random())}():is++,"0x"+is.toString(16)}/**
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
 */const gy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class yy{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Pe="WebChannelConnection";class vy extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const l=bi(),u=this.xo(t,r.toUriEncodedString());M("RestConnection",`Sending RPC '${t}' ${l}:`,u,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,a),this.No(t,u,d,s).then(p=>(M("RestConnection",`Received RPC '${t}' ${l}: `,p),p),p=>{throw _r("RestConnection",`RPC '${t}' ${l} failed with error: `,p,"url: ",u,"request:",s),p})}Lo(t,r,s,i,a,l){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Pn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=gy[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=bi();return new Promise((a,l)=>{const u=new pu;u.setWithCredentials(!0),u.listenOnce(mu.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case us.NO_ERROR:const p=u.getResponseJson();M(Pe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),a(p);break;case us.TIMEOUT:M(Pe,`RPC '${e}' ${i} timed out`),l(new L(C.DEADLINE_EXCEEDED,"Request time out"));break;case us.HTTP_ERROR:const y=u.getStatus();if(M(Pe,`RPC '${e}' ${i} failed with status:`,y,"response text:",u.getResponseText()),y>0){let E=u.getResponseJson();Array.isArray(E)&&(E=E[0]);const S=E==null?void 0:E.error;if(S&&S.status&&S.message){const P=function(N){const j=N.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(j)>=0?j:C.UNKNOWN}(S.status);l(new L(P,S.message))}else l(new L(C.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new L(C.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{M(Pe,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);M(Pe,`RPC '${e}' ${i} sending request:`,s),u.send(t,"POST",d,r,15)})}Bo(e,t,r){const s=bi(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=yu(),l=gu(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const p=i.join("");M(Pe,`Creating RPC '${e}' stream ${s}: ${p}`,u);const y=a.createWebChannel(p,u);let E=!1,S=!1;const P=new yy({Io:N=>{S?M(Pe,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(E||(M(Pe,`Opening RPC '${e}' stream ${s} transport.`),y.open(),E=!0),M(Pe,`RPC '${e}' stream ${s} sending:`,N),y.send(N))},To:()=>y.close()}),D=(N,j,x)=>{N.listen(j,W=>{try{x(W)}catch(ee){setTimeout(()=>{throw ee},0)}})};return D(y,sr.EventType.OPEN,()=>{S||(M(Pe,`RPC '${e}' stream ${s} transport opened.`),P.yo())}),D(y,sr.EventType.CLOSE,()=>{S||(S=!0,M(Pe,`RPC '${e}' stream ${s} transport closed`),P.So())}),D(y,sr.EventType.ERROR,N=>{S||(S=!0,_r(Pe,`RPC '${e}' stream ${s} transport errored:`,N),P.So(new L(C.UNAVAILABLE,"The operation could not be completed")))}),D(y,sr.EventType.MESSAGE,N=>{var j;if(!S){const x=N.data[0];Z(!!x);const W=x,ee=W.error||((j=W[0])===null||j===void 0?void 0:j.error);if(ee){M(Pe,`RPC '${e}' stream ${s} received error:`,ee);const oe=ee.status;let ne=function(g){const I=_e[g];if(I!==void 0)return $u(I)}(oe),w=ee.message;ne===void 0&&(ne=C.INTERNAL,w="Unknown error status: "+oe+" with message "+ee.message),S=!0,P.So(new L(ne,w)),y.close()}else M(Pe,`RPC '${e}' stream ${s} received:`,x),P.bo(x)}}),D(l,_u.STAT_EVENT,N=>{N.stat===ji.PROXY?M(Pe,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===ji.NOPROXY&&M(Pe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function Si(){return typeof document<"u"?document:null}/**
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
 */function qs(n){return new Cg(n,!0)}/**
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
 */class eh{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class th{constructor(e,t,r,s,i,a,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new eh(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(ut(t.toString()),ut("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new L(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ey extends th{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Dg(this.serializer,e),r=function(i){if(!("targetChange"in i))return q.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?q.min():a.readTime?Je(a.readTime):q.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Xi(this.serializer),t.addTarget=function(i,a){let l;const u=a.target;if(l=zi(u)?{documents:xg(i,u)}:{query:Lg(i,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Wu(i,a.resumeToken);const d=Hi(i,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(q.min())>0){l.readTime=Ss(i,a.snapshotVersion.toTimestamp());const d=Hi(i,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=Fg(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Xi(this.serializer),t.removeTarget=e,this.a_(t)}}class Iy extends th{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Z(!!e.streamToken),this.lastStreamToken=e.streamToken,Z(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Og(e.writeResults,e.commitTime),r=Je(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Xi(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Vg(this.serializer,r))};this.a_(t)}}/**
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
 */class Ty extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,Ki(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(C.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,Ki(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(C.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class wy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ut(t),this.D_=!1):M("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Ay{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{Jt(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=z(u);d.L_.add(4),await Or(d),d.q_.set("Unknown"),d.L_.delete(4),await zs(d)}(this))})}),this.q_=new wy(r,s)}}async function zs(n){if(Jt(n))for(const e of n.B_)await e(!0)}async function Or(n){for(const e of n.B_)await e(!1)}function nh(n,e){const t=z(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Oo(t)?Vo(t):Nn(t).r_()&&Do(t,e))}function No(n,e){const t=z(n),r=Nn(t);t.N_.delete(e),r.r_()&&rh(t,e),t.N_.size===0&&(r.r_()?r.o_():Jt(t)&&t.q_.set("Unknown"))}function Do(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Nn(n).A_(e)}function rh(n,e){n.Q_.xe(e),Nn(n).R_(e)}function Vo(n){n.Q_=new Rg({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Nn(n).start(),n.q_.v_()}function Oo(n){return Jt(n)&&!Nn(n).n_()&&n.N_.size>0}function Jt(n){return z(n).L_.size===0}function sh(n){n.Q_=void 0}async function Ry(n){n.q_.set("Online")}async function by(n){n.N_.forEach((e,t)=>{Do(n,e)})}async function Sy(n,e){sh(n),Oo(n)?(n.q_.M_(e),Vo(n)):n.q_.set("Unknown")}async function Py(n,e,t){if(n.q_.set("Online"),e instanceof zu&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.N_.delete(l),s.Q_.removeTarget(l))}(n,e)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ps(n,r)}else if(e instanceof fs?n.Q_.Ke(e):e instanceof qu?n.Q_.He(e):n.Q_.We(e),!t.isEqual(q.min()))try{const r=await Zu(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.Q_.rt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.N_.get(d);p&&i.N_.set(d,p.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const p=i.N_.get(u);if(!p)return;i.N_.set(u,p.withResumeToken(Ae.EMPTY_BYTE_STRING,p.snapshotVersion)),rh(i,u);const y=new Tt(p.target,u,d,p.sequenceNumber);Do(i,y)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await Ps(n,r)}}async function Ps(n,e,t){if(!Nr(e))throw e;n.L_.add(1),await Or(n),n.q_.set("Offline"),t||(t=()=>Zu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await zs(n)})}function ih(n,e){return e().catch(t=>Ps(n,t,e))}async function Ws(n){const e=z(n),t=Ct(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Cy(e);)try{const s=await dy(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,ky(e,s)}catch(s){await Ps(e,s)}oh(e)&&ah(e)}function Cy(n){return Jt(n)&&n.O_.length<10}function ky(n,e){n.O_.push(e);const t=Ct(n);t.r_()&&t.V_&&t.m_(e.mutations)}function oh(n){return Jt(n)&&!Ct(n).n_()&&n.O_.length>0}function ah(n){Ct(n).start()}async function Ny(n){Ct(n).p_()}async function Dy(n){const e=Ct(n);for(const t of n.O_)e.m_(t.mutations)}async function Vy(n,e,t){const r=n.O_.shift(),s=Ro.from(r,e,t);await ih(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ws(n)}async function Oy(n,e){e&&Ct(n).V_&&await async function(r,s){if(function(a){return Tg(a)&&a!==C.ABORTED}(s.code)){const i=r.O_.shift();Ct(r).s_(),await ih(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ws(r)}}(n,e),oh(n)&&ah(n)}async function Zc(n,e){const t=z(n);t.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=Jt(t);t.L_.add(3),await Or(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await zs(t)}async function xy(n,e){const t=z(n);e?(t.L_.delete(2),await zs(t)):e||(t.L_.add(2),await Or(t),t.q_.set("Unknown"))}function Nn(n){return n.K_||(n.K_=function(t,r,s){const i=z(t);return i.w_(),new Ey(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:Ry.bind(null,n),Ro:by.bind(null,n),mo:Sy.bind(null,n),d_:Py.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Oo(n)?Vo(n):n.q_.set("Unknown")):(await n.K_.stop(),sh(n))})),n.K_}function Ct(n){return n.U_||(n.U_=function(t,r,s){const i=z(t);return i.w_(),new Iy(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Ny.bind(null,n),mo:Oy.bind(null,n),f_:Dy.bind(null,n),g_:Vy.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Ws(n)):(await n.U_.stop(),n.O_.length>0&&(M("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class xo{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new $t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new xo(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lo(n,e){if(ut("AsyncQueue",`${e}: ${n}`),Nr(n))return new L(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class _n{constructor(e){this.comparator=e?(t,r)=>e(t,r)||U.comparator(t.key,r.key):(t,r)=>U.comparator(t.key,r.key),this.keyedMap=ir(),this.sortedSet=new ue(this.comparator)}static emptySet(e){return new _n(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof _n)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new _n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class el{constructor(){this.W_=new ue(U.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):$():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class wn{constructor(e,t,r,s,i,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new wn(e,t,_n.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Ly{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class My{constructor(){this.queries=tl(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=z(t),i=s.queries;s.queries=tl(),i.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new L(C.ABORTED,"Firestore shutting down"))}}function tl(){return new kn(n=>ku(n),Fs)}async function Fy(n,e){const t=z(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new Ly,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Lo(a,`Initialization of query '${ln(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Mo(t)}async function Uy(n,e){const t=z(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function jy(n,e){const t=z(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.j_)l.X_(s)&&(r=!0);a.z_=s}}r&&Mo(t)}function By(n,e,t){const r=z(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function Mo(n){n.Y_.forEach(e=>{e.next()})}var Ji,nl;(nl=Ji||(Ji={})).ea="default",nl.Cache="cache";class $y{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new wn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=wn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ji.Cache}}/**
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
 */class ch{constructor(e){this.key=e}}class lh{constructor(e){this.key=e}}class qy{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=G(),this.mutatedKeys=G(),this.Aa=Nu(e),this.Ra=new _n(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new el,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,y)=>{const E=s.get(p),S=Us(this.query,y)?y:null,P=!!E&&this.mutatedKeys.has(E.key),D=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let N=!1;E&&S?E.data.isEqual(S.data)?P!==D&&(r.track({type:3,doc:S}),N=!0):this.ga(E,S)||(r.track({type:2,doc:S}),N=!0,(u&&this.Aa(S,u)>0||d&&this.Aa(S,d)<0)&&(l=!0)):!E&&S?(r.track({type:0,doc:S}),N=!0):E&&!S&&(r.track({type:1,doc:E}),N=!0,(u||d)&&(l=!0)),N&&(S?(a=a.add(S),i=D?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{Ra:a,fa:r,ns:l,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((p,y)=>function(S,P){const D=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return D(S)-D(P)}(p.type,y.type)||this.Aa(p.doc,y.doc)),this.pa(r),s=s!=null&&s;const l=t&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,d=u!==this.Ea;return this.Ea=u,a.length!==0||d?{snapshot:new wn(this.query,e.Ra,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new el,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=G(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new lh(r))}),this.da.forEach(r=>{e.has(r)||t.push(new ch(r))}),t}ba(e){this.Ta=e.Ts,this.da=G();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return wn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class zy{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Wy{constructor(e){this.key=e,this.va=!1}}class Gy{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new kn(l=>ku(l),Fs),this.Ma=new Map,this.xa=new Set,this.Oa=new ue(U.comparator),this.Na=new Map,this.La=new Po,this.Ba={},this.ka=new Map,this.qa=Tn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Hy(n,e,t=!0){const r=mh(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await uh(r,e,t,!0),s}async function Ky(n,e){const t=mh(n);await uh(t,e,!0,!1)}async function uh(n,e,t,r){const s=await fy(n.localStore,Ye(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await Qy(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&nh(n.remoteStore,s),l}async function Qy(n,e,t,r,s){n.Ka=(y,E,S)=>async function(D,N,j,x){let W=N.view.ma(j);W.ns&&(W=await Xc(D.localStore,N.query,!1).then(({documents:w})=>N.view.ma(w,W)));const ee=x&&x.targetChanges.get(N.targetId),oe=x&&x.targetMismatches.get(N.targetId)!=null,ne=N.view.applyChanges(W,D.isPrimaryClient,ee,oe);return sl(D,N.targetId,ne.wa),ne.snapshot}(n,y,E,S);const i=await Xc(n.localStore,e,!0),a=new qy(e,i.Ts),l=a.ma(i.documents),u=Vr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,u);sl(n,t,d.wa);const p=new zy(e,t,a);return n.Fa.set(e,p),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function Xy(n,e,t){const r=z(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!Fs(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Yi(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&No(r.remoteStore,s.targetId),Zi(r,s.targetId)}).catch(kr)):(Zi(r,s.targetId),await Yi(r.localStore,s.targetId,!0))}async function Yy(n,e){const t=z(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),No(t.remoteStore,r.targetId))}async function Jy(n,e,t){const r=iv(n);try{const s=await function(a,l){const u=z(a),d=me.now(),p=l.reduce((S,P)=>S.add(P.key),G());let y,E;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let P=ht(),D=G();return u.cs.getEntries(S,p).next(N=>{P=N,P.forEach((j,x)=>{x.isValidDocument()||(D=D.add(j))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,P)).next(N=>{y=N;const j=[];for(const x of l){const W=gg(x,y.get(x.key).overlayedDocument);W!=null&&j.push(new Nt(x.key,W,Tu(W.value.mapValue),qe.exists(!0)))}return u.mutationQueue.addMutationBatch(S,d,j,l)}).next(N=>{E=N;const j=N.applyToLocalDocumentSet(y,D);return u.documentOverlayCache.saveOverlays(S,N.batchId,j)})}).then(()=>({batchId:E.batchId,changes:Vu(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let d=a.Ba[a.currentUser.toKey()];d||(d=new ue(Y)),d=d.insert(l,u),a.Ba[a.currentUser.toKey()]=d}(r,s.batchId,t),await xr(r,s.changes),await Ws(r.remoteStore)}catch(s){const i=Lo(s,"Failed to persist write");t.reject(i)}}async function hh(n,e){const t=z(n);try{const r=await uy(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(Z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?Z(a.va):s.removedDocuments.size>0&&(Z(a.va),a.va=!1))}),await xr(t,r,e)}catch(r){await kr(r)}}function rl(n,e,t){const r=z(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const l=a.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=z(a);u.onlineState=l;let d=!1;u.queries.forEach((p,y)=>{for(const E of y.j_)E.Z_(l)&&(d=!0)}),d&&Mo(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Zy(n,e,t){const r=z(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new ue(U.comparator);a=a.insert(i,Ce.newNoDocument(i,q.min()));const l=G().add(i),u=new $s(q.min(),new Map,new ue(Y),a,l);await hh(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),Fo(r)}else await Yi(r.localStore,e,!1).then(()=>Zi(r,e,t)).catch(kr)}async function ev(n,e){const t=z(n),r=e.batch.batchId;try{const s=await ly(t.localStore,e);fh(t,r,null),dh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await xr(t,s)}catch(s){await kr(s)}}async function tv(n,e,t){const r=z(n);try{const s=await function(a,l){const u=z(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,l).next(y=>(Z(y!==null),p=y.keys(),u.mutationQueue.removeMutationBatch(d,y))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,e);fh(r,e,t),dh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await xr(r,s)}catch(s){await kr(s)}}function dh(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function fh(n,e,t){const r=z(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Zi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||ph(n,r)})}function ph(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(No(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Fo(n))}function sl(n,e,t){for(const r of t)r instanceof ch?(n.La.addReference(r.key,e),nv(n,r)):r instanceof lh?(M("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||ph(n,r.key)):$()}function nv(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(M("SyncEngine","New document in limbo: "+t),n.xa.add(r),Fo(n))}function Fo(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new U(ie.fromString(e)),r=n.qa.next();n.Na.set(r,new Wy(t)),n.Oa=n.Oa.insert(t,r),nh(n.remoteStore,new Tt(Ye(To(t.path)),r,"TargetPurposeLimboResolution",_o.oe))}}async function xr(n,e,t){const r=z(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const y=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(d){s.push(d);const y=ko.Wi(u.targetId,d);i.push(y)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(u,d){const p=z(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>k.forEach(d,E=>k.forEach(E.$i,S=>p.persistence.referenceDelegate.addReference(y,E.targetId,S)).next(()=>k.forEach(E.Ui,S=>p.persistence.referenceDelegate.removeReference(y,E.targetId,S)))))}catch(y){if(!Nr(y))throw y;M("LocalStore","Failed to update sequence numbers: "+y)}for(const y of d){const E=y.targetId;if(!y.fromCache){const S=p.os.get(E),P=S.snapshotVersion,D=S.withLastLimboFreeSnapshotVersion(P);p.os=p.os.insert(E,D)}}}(r.localStore,i))}async function rv(n,e){const t=z(n);if(!t.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const r=await Ju(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new L(C.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await xr(t,r.hs)}}function sv(n,e){const t=z(n),r=t.Na.get(e);if(r&&r.va)return G().add(r.key);{let s=G();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const l=t.Fa.get(a);s=s.unionWith(l.view.Va)}return s}}function mh(n){const e=z(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=hh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Zy.bind(null,e),e.Ca.d_=jy.bind(null,e.eventManager),e.Ca.$a=By.bind(null,e.eventManager),e}function iv(n){const e=z(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ev.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tv.bind(null,e),e}class Cs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qs(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return cy(this.persistence,new oy,e.initialUser,this.serializer)}Ga(e){return new ry(Co.Zr,this.serializer)}Wa(e){return new my}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cs.provider={build:()=>new Cs};class eo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>rl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rv.bind(null,this.syncEngine),await xy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new My}()}createDatastore(e){const t=qs(e.databaseInfo.databaseId),r=function(i){return new vy(i)}(e.databaseInfo);return function(i,a,l,u){return new Ty(i,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new Ay(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>rl(this.syncEngine,t,0),function(){return Jc.D()?new Jc:new _y}())}createSyncEngine(e,t){return function(s,i,a,l,u,d,p){const y=new Gy(s,i,a,l,u,d);return p&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=z(s);M("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Or(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}eo.provider={build:()=>new eo};/**
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
 */class ov{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):ut("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class av{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=xe.UNAUTHENTICATED,this.clientId=vu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{M("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(M("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $t;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Lo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Pi(n,e){n.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ju(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function il(n,e){n.asyncQueue.verifyOperationInProgress();const t=await cv(n);M("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Zc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Zc(e.remoteStore,s)),n._onlineComponents=e}async function cv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await Pi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;_r("Error using user provided cache. Falling back to memory cache: "+t),await Pi(n,new Cs)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await Pi(n,new Cs);return n._offlineComponents}async function _h(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await il(n,n._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await il(n,new eo))),n._onlineComponents}function lv(n){return _h(n).then(e=>e.syncEngine)}async function ol(n){const e=await _h(n),t=e.eventManager;return t.onListen=Hy.bind(null,e.syncEngine),t.onUnlisten=Xy.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Ky.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Yy.bind(null,e.syncEngine),t}/**
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
 */function gh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const al=new Map;/**
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
 */function yh(n,e,t){if(!t)throw new L(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function uv(n,e,t,r){if(e===!0&&r===!0)throw new L(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function cl(n){if(!U.isDocumentKey(n))throw new L(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ll(n){if(U.isDocumentKey(n))throw new L(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Gs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":$()}function qt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Gs(n);throw new L(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class ul{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Uo{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ul({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ul(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new S_;switch(r.type){case"firstParty":return new k_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=al.get(t);r&&(M("ComponentProvider","Removing Datastore"),al.delete(t),r.terminate())}(this),Promise.resolve()}}/**
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
 */class Zt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zt(this.firestore,e,this._query)}}class Me{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Me(this.firestore,e,this._key)}}class bt extends Zt{constructor(e,t,r){super(e,t,To(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new U(e))}withConverter(e){return new bt(this.firestore,e,this._path)}}function hl(n,e,...t){if(n=ye(n),yh("collection","path",e),n instanceof Uo){const r=ie.fromString(e,...t);return ll(r),new bt(n,null,r)}{if(!(n instanceof Me||n instanceof bt))throw new L(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ie.fromString(e,...t));return ll(r),new bt(n.firestore,null,r)}}function ps(n,e,...t){if(n=ye(n),arguments.length===1&&(e=vu.newId()),yh("doc","path",e),n instanceof Uo){const r=ie.fromString(e,...t);return cl(r),new Me(n,null,new U(r))}{if(!(n instanceof Me||n instanceof bt))throw new L(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ie.fromString(e,...t));return cl(r),new Me(n.firestore,n instanceof bt?n.converter:null,new U(r))}}/**
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
 */class dl{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new eh(this,"async_queue_retry"),this.Vu=()=>{const r=Si();r&&M("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Si();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Si();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new $t;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Nr(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw ut("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=xo.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&$()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function fl(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}/**
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
 */const hv=-1;class An extends Uo{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new dl,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new dl(e),this._firestoreClient=void 0,await e}}}function dv(n,e,t){t||(t="(default)");const r=so(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(fr(i,e))return s;throw new L(C.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new L(C.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:t})}function vh(n){if(n._terminated)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||fv(n),n._firestoreClient}function fv(n){var e,t,r;const s=n._freezeSettings(),i=function(l,u,d,p){return new q_(l,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,gh(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new av(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class Rn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rn(Ae.fromBase64String(e))}catch(t){throw new L(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Rn(Ae.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Hs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Te(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class jo{constructor(e){this._methodName=e}}/**
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
 */class Bo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}/**
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
 */class $o{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const pv=/^__.*__$/;class mv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Nt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Dr(e,this.data,t,this.fieldTransforms)}}class Eh{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Nt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ih(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class qo{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new qo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ks(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Ih(this.Cu)&&pv.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class _v{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||qs(e)}Qu(e,t,r,s=!1){return new qo({Cu:e,methodName:t,qu:r,path:Te.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zo(n){const e=n._freezeSettings(),t=qs(n._databaseId);return new _v(n._databaseId,!!e.ignoreUndefinedProperties,t)}function gv(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);Wo("Data must be an object, but it was:",a,r);const l=Th(r,a);let u,d;if(i.merge)u=new je(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const y of i.mergeFields){const E=to(e,y,t);if(!a.contains(E))throw new L(C.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);Ah(p,E)||p.push(E)}u=new je(p),d=a.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,d=a.fieldTransforms;return new mv(new Le(l),u,d)}class Ks extends jo{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ks}}function yv(n,e,t,r){const s=n.Qu(1,e,t);Wo("Data must be an object, but it was:",s,r);const i=[],a=Le.empty();Yt(r,(u,d)=>{const p=Go(e,u,t);d=ye(d);const y=s.Nu(p);if(d instanceof Ks)i.push(p);else{const E=Lr(d,y);E!=null&&(i.push(p),a.set(p,E))}});const l=new je(i);return new Eh(a,l,s.fieldTransforms)}function vv(n,e,t,r,s,i){const a=n.Qu(1,e,t),l=[to(e,r,t)],u=[s];if(i.length%2!=0)throw new L(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<i.length;E+=2)l.push(to(e,i[E])),u.push(i[E+1]);const d=[],p=Le.empty();for(let E=l.length-1;E>=0;--E)if(!Ah(d,l[E])){const S=l[E];let P=u[E];P=ye(P);const D=a.Nu(S);if(P instanceof Ks)d.push(S);else{const N=Lr(P,D);N!=null&&(d.push(S),p.set(S,N))}}const y=new je(d);return new Eh(p,y,a.fieldTransforms)}function Ev(n,e,t,r=!1){return Lr(t,n.Qu(r?4:3,e))}function Lr(n,e){if(wh(n=ye(n)))return Wo("Unsupported field value:",e,n),Th(n,e);if(n instanceof jo)return function(r,s){if(!Ih(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let u=Lr(l,s.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return hg(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=me.fromDate(r);return{timestampValue:Ss(s.serializer,i)}}if(r instanceof me){const i=new me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ss(s.serializer,i)}}if(r instanceof Bo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rn)return{bytesValue:Wu(s.serializer,r._byteString)};if(r instanceof Me){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:So(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof $o)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return wo(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Gs(r)}`)}(n,e)}function Th(n,e){const t={};return Eu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yt(n,(r,s)=>{const i=Lr(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function wh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof me||n instanceof Bo||n instanceof Rn||n instanceof Me||n instanceof jo||n instanceof $o)}function Wo(n,e,t){if(!wh(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Gs(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function to(n,e,t){if((e=ye(e))instanceof Hs)return e._internalPath;if(typeof e=="string")return Go(n,e);throw ks("Field path arguments must be of type string or ",n,!1,void 0,t)}const Iv=new RegExp("[~\\*/\\[\\]]");function Go(n,e,t){if(e.search(Iv)>=0)throw ks(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Hs(...e.split("."))._internalPath}catch{throw ks(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ks(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new L(C.INVALID_ARGUMENT,l+n+u)}function Ah(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Rh{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Tv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ho("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Tv extends Rh{data(){return super.data()}}function Ho(n,e){return typeof e=="string"?Go(n,e):e instanceof Hs?e._internalPath:e._delegate._internalPath}/**
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
 */function wv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ko{}class bh extends Ko{}function Av(n,e,...t){let r=[];e instanceof Ko&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof Xo).length,l=i.filter(u=>u instanceof Qo).length;if(a>1||a>0&&l>0)throw new L(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Qo extends bh{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Qo(e,t,r)}_apply(e){const t=this._parse(e);return Sh(e._query,t),new Zt(e.firestore,e.converter,Wi(e._query,t))}_parse(e){const t=zo(e.firestore);return function(i,a,l,u,d,p,y){let E;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new L(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){ml(y,p);const S=[];for(const P of y)S.push(pl(u,i,P));E={arrayValue:{values:S}}}else E=pl(u,i,y)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||ml(y,p),E=Ev(l,a,y,p==="in"||p==="not-in");return ge.create(d,p,E)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Xo extends Ko{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Xo(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:We.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const u of l)Sh(a,u),a=Wi(a,u)}(e._query,t),new Zt(e.firestore,e.converter,Wi(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Yo extends bh{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Yo(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new L(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new L(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ir(i,a)}(e._query,this._field,this._direction);return new Zt(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new Cn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function Rv(n,e="asc"){const t=e,r=Ho("orderBy",n);return Yo._create(r,t)}function pl(n,e,t){if(typeof(t=ye(t))=="string"){if(t==="")throw new L(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Cu(e)&&t.indexOf("/")!==-1)throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ie.fromString(t));if(!U.isDocumentKey(r))throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Vc(n,new U(r))}if(t instanceof Me)return Vc(n,t._key);throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gs(t)}.`)}function ml(n,e){if(!Array.isArray(n)||n.length===0)throw new L(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Sh(n,e){const t=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new L(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class bv{convertValue(e,t="none"){switch(Xt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Qt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw $()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Yt(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>pe(a.doubleValue));return new $o(i)}convertGeoPoint(e){return new Bo(pe(e.latitude),pe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=yo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(yr(e));default:return null}}convertTimestamp(e){const t=Pt(e);return new me(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ie.fromString(e);Z(Yu(r));const s=new vr(r.get(1),r.get(3)),i=new U(r.popFirst(5));return s.isEqual(t)||ut(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Sv(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class ar{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ph extends Rh{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ms(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ho("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ms extends Ph{data(e={}){return super.data(e)}}class Pv{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ar(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ms(this._firestore,this._userDataWriter,r.key,r,new ar(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new ms(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ar(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new ms(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ar(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:Cv(l.type),doc:u,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Cv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}class Ch extends bv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,t)}}function kv(n,e,t,...r){n=qt(n,Me);const s=qt(n.firestore,An),i=zo(s);let a;return a=typeof(e=ye(e))=="string"||e instanceof Hs?vv(i,"updateDoc",n._key,e,t,r):yv(i,"updateDoc",n._key,e),Jo(s,[a.toMutation(n._key,qe.exists(!0))])}function _l(n){return Jo(qt(n.firestore,An),[new Ao(n._key,qe.none())])}function Nv(n,e){const t=qt(n.firestore,An),r=ps(n),s=Sv(n.converter,e);return Jo(t,[gv(zo(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,qe.exists(!1))]).then(()=>r)}function Dv(n,...e){var t,r,s;n=ye(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||fl(e[a])||(i=e[a],a++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(fl(e[a])){const y=e[a];e[a]=(t=y.next)===null||t===void 0?void 0:t.bind(y),e[a+1]=(r=y.error)===null||r===void 0?void 0:r.bind(y),e[a+2]=(s=y.complete)===null||s===void 0?void 0:s.bind(y)}let u,d,p;if(n instanceof Me)d=qt(n.firestore,An),p=To(n._key.path),u={next:y=>{e[a]&&e[a](Vv(d,n,y))},error:e[a+1],complete:e[a+2]};else{const y=qt(n,Zt);d=qt(y.firestore,An),p=y._query;const E=new Ch(d);u={next:S=>{e[a]&&e[a](new Pv(d,E,y,S))},error:e[a+1],complete:e[a+2]},wv(n._query)}return function(E,S,P,D){const N=new ov(D),j=new $y(S,N,P);return E.asyncQueue.enqueueAndForget(async()=>Fy(await ol(E),j)),()=>{N.Za(),E.asyncQueue.enqueueAndForget(async()=>Uy(await ol(E),j))}}(vh(d),p,l,u)}function Jo(n,e){return function(r,s){const i=new $t;return r.asyncQueue.enqueueAndForget(async()=>Jy(await lv(r),s,i)),i.promise}(vh(n),e)}function Vv(n,e,t){const r=t.docs.get(e._key),s=new Ch(n);return new Ph(n,s,e._key,r,new ar(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Pn=s})(bn),gn(new Wt("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new An(new P_(r.getProvider("auth-internal")),new D_(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new L(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vr(d.options.projectId,p)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Rt(Pc,"4.7.3",e),Rt(Pc,"4.7.3","esm2017")})();const Ov={apiKey:"AIzaSyDS8jEcdPzYcDiDRZpvopMM6qxX1t6nNzU",authDomain:"order-management-62810.firebaseapp.com",projectId:"order-management-62810",storageBucket:"order-management-62810.firebasestorage.app",messagingSenderId:"593654538436",appId:"1:593654538436:web:322125e0c1bba4f0086991"},kh=kl(Ov),Jn=T_(kh),Zn=dv(kh,{cacheSizeBytes:hv});function xv(){var l,u,d;const[n,e]=V.useState({user:null,loading:!0,error:null});V.useEffect(()=>{const p=um(Jn,y=>{e({user:y,loading:!1,error:null})},y=>{e({user:null,loading:!1,error:y.message})});return()=>p()},[]);const t=V.useCallback(async(p,y,E)=>{try{e(P=>({...P,loading:!0,error:null}));const S=await sm(Jn,p,y);return E&&S.user&&await am(S.user,{displayName:E}),e({user:S.user,loading:!1,error:null}),S.user}catch(S){const P=Ci(S.code);throw e(D=>({...D,loading:!1,error:P})),new Error(P)}},[]),r=V.useCallback(async(p,y)=>{try{e(S=>({...S,loading:!0,error:null}));const E=await im(Jn,p,y);return e({user:E.user,loading:!1,error:null}),E.user}catch(E){const S=Ci(E.code);throw e(P=>({...P,loading:!1,error:S})),new Error(S)}},[]),s=V.useCallback(async()=>{try{await hm(Jn),e({user:null,loading:!1,error:null})}catch(p){throw e(y=>({...y,error:p.message})),p}},[]),i=V.useCallback(async p=>{try{await rm(Jn,p)}catch(y){const E=Ci(y.code);throw new Error(E)}},[]),a=V.useCallback(()=>{e(p=>({...p,error:null}))},[]);return{...n,register:t,login:r,logout:s,resetPassword:i,clearError:a,isLoggedIn:!!n.user,userId:((l=n.user)==null?void 0:l.uid)||null,displayName:((u=n.user)==null?void 0:u.displayName)||((d=n.user)==null?void 0:d.email)||null}}function Ci(n){return{"auth/email-already-in-use":"该邮箱已被注册","auth/invalid-email":"邮箱格式不正确","auth/operation-not-allowed":"该登录方式未启用","auth/weak-password":"密码太弱，请使用至少6位密码","auth/user-disabled":"该账号已被禁用","auth/user-not-found":"该邮箱未注册","auth/wrong-password":"密码错误","auth/invalid-credential":"邮箱或密码错误","auth/too-many-requests":"登录失败次数过多，请稍后再试","auth/network-request-failed":"网络连接失败"}[n]||"操作失败，请重试"}function zt(){const n=new Date;return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}function gl(n){if(!n||typeof n!="string")return new Date(NaN);const e=n.split("-");if(e.length!==3)return new Date(NaN);const[t,r,s]=e.map(Number);return isNaN(t)||isNaN(r)||isNaN(s)||r<1||r>12||s<1||s>31?new Date(NaN):new Date(t,r-1,s)}function Nh(){const n=new Date,e=n.getFullYear(),t=n.getMonth(),r=n.getDate();let s;return r<16?s=new Date(e,t,16):s=new Date(e,t+1,1),`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`}function Dh(n){if(!n.received||!n.receiveDate||n.paid)return!1;const e=new Date(gl(n.receiveDate));e.setDate(e.getDate()+7);const t=new Date(gl(Nh()));return e<=t}function Ns(n){if(!n||typeof n!="string")return"—";const e=n.split("-");if(e.length!==3)return"—";const[,t,r]=e;return!t||!r?"—":`${t}月${r}日`}function Lv(n){return n.trim()?/^\d{6}-\d{15}$/.test(n.trim())?{valid:!0,message:""}:{valid:!1,message:"订单号格式应为：YYMMDD-XXXXXXXXXXXXXXX"}:{valid:!1,message:"订单号不能为空"}}function Mv(n){if(!n)return{valid:!1,message:"金额不能为空"};const e=Number(n);return isNaN(e)||e<=0?{valid:!1,message:"请输入有效的正数金额"}:{valid:!0,message:""}}function Fv(n){return[...n].sort((e,t)=>e.agent<t.agent?-1:e.agent>t.agent?1:e.received!==t.received?e.received?-1:1:(t.receiveDate||"").localeCompare(e.receiveDate||""))}function Uv(n,e,t){return n.filter(r=>{const s=e==="all"||(e==="received"?r.received:!r.received),i=t.toLowerCase(),a=r.id.toLowerCase().includes(i)||r.agent.toLowerCase().includes(i)||(r.remark||"").toLowerCase().includes(i);return s&&a})}function jv(n){const e=["订单号","金额（¥）","客服","收货状态","收货日期","收款状态","收款日期","录入日期","备注"],t=n.map(l=>[l.id,l.amount.toString(),l.agent,l.received?"已收货":"未收货",l.receiveDate||"",l.paid?"已收款":"未收款",l.paidDate||"",l.entryDate||"历史",l.remark||""]),r=[e,...t].map(l=>l.map(u=>`"${String(u).replace(/"/g,'""')}"`).join(",")).join(`
`),s=new Blob(["\uFEFF"+r],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(s),a=document.createElement("a");a.href=i,a.download=`订单台账_${zt()}.csv`,a.click(),URL.revokeObjectURL(i)}function Bv(n){const[e,t]=V.useState([]),[r,s]=V.useState({}),[i,a]=V.useState({syncing:!1,lastSync:null,error:null});V.useEffect(()=>{if(!n){t([]),s({});return}a(j=>({...j,syncing:!0}));const P=hl(Zn,"users",n,"orders"),D=Av(P,Rv("entryDate","desc")),N=Dv(D,j=>{const x=[],W={};j.forEach(ee=>{const oe=ee.data(),ne=oe.id||ee.id;x.push({id:ne,amount:oe.amount,agent:oe.agent,received:oe.received,receiveDate:oe.receiveDate,entryDate:oe.entryDate,remark:oe.remark||"",paid:oe.paid||!1,paidDate:oe.paidDate||null}),W[ne]=ee.id}),t(Fv(x)),s(W),a({syncing:!1,lastSync:new Date,error:null})},j=>{console.error("Firestore sync error:",j),a(x=>({...x,syncing:!1,error:"同步失败，请检查网络连接"}))});return()=>N()},[n]),V.useCallback(P=>r[P]||P,[r]);const l=V.useCallback(async P=>{if(!n)throw new Error("请先登录");const D=hl(Zn,"users",n,"orders");await Nv(D,{...P,createdAt:me.now()})},[n]),u=V.useCallback(async(P,D)=>{if(!n)throw new Error("请先登录");const N=r[P]||P,j=ps(Zn,"users",n,"orders",N);await kv(j,{...D,updatedAt:me.now()})},[n,r]),d=V.useCallback(async P=>{if(!n)throw new Error("请先登录");const D=r[P]||P,N=ps(Zn,"users",n,"orders",D);await _l(N)},[n,r]),p=V.useCallback(async P=>{if(!n)throw new Error("请先登录");const D=P.map(N=>{const j=r[N]||N,x=ps(Zn,"users",n,"orders",j);return _l(x)});await Promise.all(D)},[n,r]),y=V.useCallback(async(P,D)=>{await u(P,{received:!0,receiveDate:D})},[u]),E=V.useCallback(async(P,D)=>{await u(P,{paid:!0,paidDate:D})},[u]),S=V.useCallback(async(P,D)=>{await u(P,{remark:D})},[u]);return{orders:e,syncState:i,addOrder:l,updateOrder:u,deleteOrder:d,batchDelete:p,markReceived:y,markPaid:E,updateRemark:S}}function $v(n,e,t){const r=V.useMemo(()=>Uv(n,e,t),[n,e,t]),s=V.useMemo(()=>r.filter(d=>!d.paid),[r]),i=V.useMemo(()=>r.filter(d=>d.paid),[r]),a=V.useMemo(()=>{const d=n.length,p=n.reduce((D,N)=>D+N.amount,0),y=n.filter(D=>D.received&&!D.paid).reduce((D,N)=>D+N.amount,0),E=n.filter(D=>D.paid).reduce((D,N)=>D+N.amount,0),S=Nh(),P=n.filter(D=>Dh(D)).reduce((D,N)=>D+N.amount,0);return{totalOrders:d,totalAmount:p,receivedAmount:y,paidAmount:E,settleableAmount:P,nextDateStr:S||"-"}},[n]),l=V.useMemo(()=>{const d={};return s.forEach((p,y)=>{p.agent in d||(d[p.agent]=y)}),d},[s]),u=V.useMemo(()=>{const d={};return i.forEach((p,y)=>{p.agent in d||(d[p.agent]=y)}),d},[i]);return{filteredOrders:r,filteredUnpaid:s,filteredPaid:i,stats:a,agentFirstIndex:l,paidAgentFirstIndex:u}}function qv(){const[n,e]=V.useState(null),t=V.useCallback(s=>{e(s)},[]),r=V.useCallback(()=>{e(null)},[]);return{toast:n,notify:t,hideToast:r}}const zv="Toast-module__toast___FLdHz",Wv={toast:zv},Vh=V.memo(({message:n,onClose:e})=>(V.useEffect(()=>{const t=setTimeout(e,2e3);return()=>clearTimeout(t)},[e]),v.jsx("div",{className:Wv.toast,children:n})));Vh.displayName="Toast";const Gv="OrderForm-module__form___qdAdW",Hv="OrderForm-module__title___dl6ju",Kv="OrderForm-module__grid___DYyIt",Qv="OrderForm-module__grid2___akE4T",Xv="OrderForm-module__label___vLfkw",Yv="OrderForm-module__input___940nH",Jv="OrderForm-module__inputError___7ksAa",Zv="OrderForm-module__error___poWSm",eE="OrderForm-module__checkboxContainer___Saj1-",tE="OrderForm-module__checkboxLabel___WQDa2",nE="OrderForm-module__dateRow___-QvaB",rE="OrderForm-module__dateInput___FcTgS",sE="OrderForm-module__hint___Mx0Dv",iE="OrderForm-module__actions___Z4N06",oE="OrderForm-module__btnPrimary___B7LvR",aE="OrderForm-module__btnGhost___dE22k",cE="OrderForm-module__btnAddAgent___yl6lZ",re={form:Gv,title:Hv,grid:Kv,grid2:Qv,label:Xv,input:Yv,inputError:Jv,error:Zv,checkboxContainer:eE,checkboxLabel:tE,dateRow:nE,dateInput:rE,hint:sE,actions:iE,btnPrimary:oE,btnGhost:aE,btnAddAgent:cE},Oh=V.memo(({onSubmit:n,onClose:e,existingIds:t,agents:r,onAddAgent:s})=>{const[i,a]=V.useState(Ya),[l,u]=V.useState({}),d=V.useCallback((E,S)=>{a(P=>({...P,[E]:S})),u(P=>E in P?{...P,[E]:void 0}:P)},[]),p=V.useCallback(()=>{const E=prompt("请输入新客服名称：");E&&E.trim()&&(s(E.trim()),d("agent",E.trim()))},[s]),y=V.useCallback(()=>{const E=Lv(i.id);if(!E.valid){u(P=>({...P,id:E.message}));return}if(t.includes(i.id.trim())){u(P=>({...P,id:"订单号已存在"}));return}const S=Mv(i.amount);if(!S.valid){u(P=>({...P,amount:S.message}));return}n({id:i.id.trim(),amount:Number(i.amount),agent:i.agent,received:i.received,receiveDate:i.received?i.receiveDate||zt():"",entryDate:zt(),remark:i.remark,paid:!1,paidDate:null}),a(Ya),u({}),e()},[i,t,n,e]);return v.jsxs("div",{className:re.form,children:[v.jsx("div",{className:re.title,children:"新增订单"}),v.jsxs("div",{className:re.grid,children:[v.jsxs("div",{children:[v.jsx("div",{className:re.label,children:"订单号"}),v.jsx("input",{className:`${re.input} ${l.id?re.inputError:""}`,placeholder:"260418-XXXXXXXXXXXXXXX",value:i.id,onChange:E=>d("id",E.target.value)}),l.id&&v.jsx("div",{className:re.error,children:l.id})]}),v.jsxs("div",{children:[v.jsx("div",{className:re.label,children:"金额（¥）"}),v.jsx("input",{className:`${re.input} ${l.amount?re.inputError:""}`,type:"number",placeholder:"170",value:i.amount,onChange:E=>d("amount",E.target.value)}),l.amount&&v.jsx("div",{className:re.error,children:l.amount})]}),v.jsxs("div",{children:[v.jsx("div",{className:re.label,children:"客服"}),v.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center"},children:[v.jsx("select",{className:re.input,value:i.agent,onChange:E=>d("agent",E.target.value),style:{flex:1},children:r.map(E=>v.jsx("option",{children:E},E))}),v.jsx("button",{type:"button",className:re.btnAddAgent,onClick:p,title:"添加新客服",children:"+"})]})]})]}),v.jsxs("div",{className:re.grid2,children:[v.jsxs("div",{children:[v.jsx("div",{className:re.label,children:"备注（房子名称等）"}),v.jsx("input",{className:re.input,placeholder:"如：万科翡翠山 A栋",value:i.remark,onChange:E=>d("remark",E.target.value)})]}),v.jsx("div",{className:re.checkboxContainer,children:v.jsxs("label",{className:re.checkboxLabel,children:[v.jsx("input",{type:"checkbox",checked:i.received,onChange:E=>d("received",E.target.checked)}),"已收货"]})})]}),i.received&&v.jsxs("div",{className:re.dateRow,children:[v.jsx("span",{className:re.label,children:"收货日期"}),v.jsx("input",{className:re.dateInput,type:"date",value:i.receiveDate,onChange:E=>d("receiveDate",E.target.value)})]}),v.jsxs("div",{className:re.hint,children:["录入日期将自动记录为今天：",zt()]}),v.jsxs("div",{className:re.actions,children:[v.jsx("button",{className:re.btnPrimary,onClick:y,children:"确认添加"}),v.jsx("button",{className:re.btnGhost,onClick:e,children:"取消"})]})]})});Oh.displayName="OrderForm";const lE="StatusBadge-module__container___MFHY9",uE="StatusBadge-module__paid___EbkKZ",hE="StatusBadge-module__received___k-Fcv",dE="StatusBadge-module__pending___MD6U-",fE="StatusBadge-module__settleable___lgOCE",er={container:lE,paid:uE,received:hE,pending:dE,settleable:fE},xh=V.memo(({order:n})=>{if(n.paid)return v.jsx("span",{className:er.paid,children:"已收款"});if(n.received){const e=Dh(n);return v.jsxs("div",{className:er.container,children:[v.jsx("span",{className:er.received,children:"已收货"}),e&&v.jsx("span",{className:er.settleable,children:"✦ 可结算"})]})}return v.jsx("span",{className:er.pending,children:"未收货"})});xh.displayName="StatusBadge";const pE="RemarkCell-module__editContainer___HHFi1",mE="RemarkCell-module__input___4KraE",_E="RemarkCell-module__saveBtn___b7Qn2",gE="RemarkCell-module__cancelBtn___v5KBh",yE="RemarkCell-module__display___uB0Kh",tr={editContainer:pE,input:mE,saveBtn:_E,cancelBtn:gE,display:yE},Lh=V.memo(({value:n,onSave:e})=>{const[t,r]=V.useState(!1),[s,i]=V.useState(n||""),a=V.useCallback(()=>{e(s),r(!1)},[s,e]),l=V.useCallback(d=>{d.key==="Enter"&&a(),d.key==="Escape"&&r(!1)},[a]),u=V.useCallback(()=>{i(n||""),r(!0)},[n]);return t?v.jsxs("div",{className:tr.editContainer,children:[v.jsx("input",{autoFocus:!0,value:s,onChange:d=>i(d.target.value),onKeyDown:l,className:tr.input}),v.jsx("button",{onClick:a,className:tr.saveBtn,children:"✓"}),v.jsx("button",{onClick:()=>r(!1),className:tr.cancelBtn,children:"✕"})]}):v.jsx("div",{onClick:u,title:"点击编辑备注",className:tr.display,children:n||"添加备注…"})});Lh.displayName="RemarkCell";const vE="OrderRow-module__row___udPZW",EE="OrderRow-module__groupRow___Zv9Q9",IE="OrderRow-module__cell___fBCcW",TE="OrderRow-module__checkbox___iRa35",wE="OrderRow-module__agentName___o-1F1",AE="OrderRow-module__agentCount___myAPo",RE="OrderRow-module__indent___sqViW",bE="OrderRow-module__orderId___TSi6f",SE="OrderRow-module__amount___FOtLD",PE="OrderRow-module__date___IvGVN",CE="OrderRow-module__entryDate___R3lRm",kE="OrderRow-module__history___GNgho",NE="OrderRow-module__actions___uwRKy",DE="OrderRow-module__btnGhost___eIhAA",VE="OrderRow-module__btnPaid___ckdCv",OE="OrderRow-module__btnDanger___-DvgM",de={row:vE,groupRow:EE,cell:IE,checkbox:TE,agentName:wE,agentCount:AE,indent:RE,orderId:bE,amount:SE,date:PE,entryDate:CE,history:kE,actions:NE,btnGhost:DE,btnPaid:VE,btnDanger:OE},Mh=V.memo(({order:n,isGroupStart:e,agentCount:t,isSelected:r,onSelect:s,onMarkReceived:i,onMarkPaid:a,onUpdateRemark:l,onDelete:u})=>{const d=V.useCallback(()=>{s(n.id)},[n.id,s]),p=V.useCallback(()=>{i(n.id)},[n.id,i]),y=V.useCallback(()=>{a(n.id)},[n.id,a]),E=V.useCallback(P=>{l(n.id,P)},[n.id,l]),S=V.useCallback(()=>{u(n.id)},[n.id,u]);return v.jsxs("tr",{className:`${de.row} ${e?de.groupRow:""}`,children:[v.jsx("td",{className:de.cell,children:v.jsx("input",{type:"checkbox",checked:r,onChange:d,className:de.checkbox})}),v.jsx("td",{className:de.cell,children:e?v.jsxs("div",{children:[v.jsx("div",{className:de.agentName,children:n.agent}),v.jsxs("div",{className:de.agentCount,children:[t," 单"]})]}):v.jsx("span",{className:de.indent,children:"↓"})}),v.jsx("td",{className:de.orderId,children:n.id}),v.jsxs("td",{className:de.amount,children:["¥",n.amount]}),v.jsx("td",{className:de.cell,children:v.jsx(Lh,{value:n.remark,onSave:E})}),v.jsx("td",{className:de.cell,children:v.jsx(xh,{order:n})}),v.jsx("td",{className:de.date,children:n.receiveDate?Ns(n.receiveDate):"—"}),v.jsx("td",{className:de.date,children:n.entryDate?v.jsx("span",{className:de.entryDate,children:Ns(n.entryDate)}):v.jsx("span",{className:de.history,children:"历史"})}),v.jsx("td",{className:de.cell,children:v.jsxs("div",{className:de.actions,children:[!n.received&&v.jsx("button",{className:de.btnGhost,onClick:p,children:"确认收货"}),n.received&&!n.paid&&v.jsx("button",{className:de.btnPaid,onClick:y,children:"确认收款"}),v.jsx("button",{className:de.btnDanger,onClick:S,children:"删除"})]})})]})});Mh.displayName="OrderRow";const xE="StatsCard-module__card___KGiVf",LE="StatsCard-module__label___ZxnJS",ME="StatsCard-module__value___tfHwR",ki={card:xE,label:LE,value:ME},Fh=V.memo(({stats:n})=>{const e=n.bg==="#1a1a1a";return v.jsxs("div",{className:ki.card,style:{background:n.bg,borderColor:n.border},children:[v.jsx("div",{className:ki.label,style:{color:e?"#666":"#aaa"},children:n.label}),v.jsx("div",{className:ki.value,style:{color:n.color},children:n.value})]})});Fh.displayName="StatsCard";const FE="PaidOrdersSection-module__section___6TiW-",UE="PaidOrdersSection-module__header___1bgFZ",jE="PaidOrdersSection-module__headerLeft___uh6SZ",BE="PaidOrdersSection-module__title___roxwF",$E="PaidOrdersSection-module__badge___xDZwe",qE="PaidOrdersSection-module__arrow___MC-ka",zE="PaidOrdersSection-module__content___TqdJc",WE="PaidOrdersSection-module__table___u0pCg",GE="PaidOrdersSection-module__th___E-fe1",HE="PaidOrdersSection-module__row___W-xVd",KE="PaidOrdersSection-module__td___e77Or",QE="PaidOrdersSection-module__agentName___-0tSy",XE="PaidOrdersSection-module__agentCount___69NgG",YE="PaidOrdersSection-module__indent___IxoIY",JE="PaidOrdersSection-module__orderId___kByTX",ZE="PaidOrdersSection-module__amount___gz7lb",eI="PaidOrdersSection-module__noRemark___VzxA3",tI="PaidOrdersSection-module__date___Gn7QH",nI="PaidOrdersSection-module__paidDate___gNB9y",rI="PaidOrdersSection-module__empty___1mnSc",sI="PaidOrdersSection-module__btnDanger___J7I-a",le={section:FE,header:UE,headerLeft:jE,title:BE,badge:$E,arrow:qE,content:zE,table:WE,th:GE,row:HE,td:KE,agentName:QE,agentCount:XE,indent:YE,orderId:JE,amount:ZE,noRemark:eI,date:tI,paidDate:nI,empty:rI,btnDanger:sI},Uh=V.memo(({orders:n,agentFirstIndex:e,onDelete:t})=>{const[r,s]=yl.useState(!1),i=n.reduce((l,u)=>l+u.amount,0),a=V.useCallback(l=>{t(l)},[t]);return v.jsxs("div",{className:le.section,children:[v.jsxs("div",{className:le.header,onClick:()=>s(l=>!l),children:[v.jsxs("div",{className:le.headerLeft,children:[v.jsx("span",{className:le.title,children:"已收款订单"}),v.jsxs("span",{className:le.badge,children:[n.length," 单 · ¥",i.toLocaleString()]})]}),v.jsx("span",{className:le.arrow,style:{transform:r?"rotate(180deg)":"rotate(0deg)"},children:"▾"})]}),r&&v.jsx("div",{className:le.content,children:v.jsxs("table",{className:le.table,children:[v.jsx("thead",{children:v.jsx("tr",{children:["客服","订单号","金额","备注","收货日期","收款日期","操作"].map(l=>v.jsx("th",{className:le.th,children:l},l))})}),v.jsx("tbody",{children:n.length===0?v.jsx("tr",{children:v.jsx("td",{colSpan:7,className:le.empty,children:"暂无已收款订单"})}):n.map((l,u)=>{const d=e[l.agent]===u,p=n.filter(y=>y.agent===l.agent).length;return v.jsxs("tr",{className:le.row,children:[v.jsx("td",{className:le.td,children:d?v.jsxs("div",{children:[v.jsx("div",{className:le.agentName,children:l.agent}),v.jsxs("div",{className:le.agentCount,children:[p," 单"]})]}):v.jsx("span",{className:le.indent,children:"↓"})}),v.jsx("td",{className:le.orderId,children:l.id}),v.jsxs("td",{className:le.amount,children:["¥",l.amount]}),v.jsx("td",{className:le.td,children:l.remark||v.jsx("span",{className:le.noRemark,children:"—"})}),v.jsx("td",{className:le.date,children:l.receiveDate?Ns(l.receiveDate):"—"}),v.jsx("td",{className:le.paidDate,children:l.paidDate?Ns(l.paidDate):"—"}),v.jsx("td",{className:le.td,children:v.jsx("button",{className:le.btnDanger,onClick:()=>a(l.id),children:"删除"})})]},l.id)})})]})})]})});Uh.displayName="PaidOrdersSection";const iI="InstallPrompt-module__container___zgP6A",oI="InstallPrompt-module__prompt___XA9zt",aI="InstallPrompt-module__installed___jRhkB",cI="InstallPrompt-module__offline___lYLiA",lI="InstallPrompt-module__icon___QxhrQ",uI="InstallPrompt-module__content___iV3rk",hI="InstallPrompt-module__title___uc9XD",dI="InstallPrompt-module__desc___5Dylf",fI="InstallPrompt-module__actions___NtXtX",pI="InstallPrompt-module__installBtn___03SP8",mI="InstallPrompt-module__dismissBtn___jSj1r",_I="InstallPrompt-module__closeBtn___3pCYV",ce={container:iI,prompt:oI,installed:aI,offline:cI,icon:lI,content:uI,title:hI,desc:dI,actions:fI,installBtn:pI,dismissBtn:mI,closeBtn:_I},jh=V.memo(({isVisible:n,isInstallable:e,isInstalled:t,isOffline:r,onInstall:s,onDismiss:i})=>n?t?v.jsx("div",{className:ce.container,children:v.jsxs("div",{className:`${ce.prompt} ${ce.installed}`,children:[v.jsx("div",{className:ce.icon,children:"✓"}),v.jsxs("div",{className:ce.content,children:[v.jsx("div",{className:ce.title,children:"应用已安装"}),v.jsx("div",{className:ce.desc,children:"您可以从主屏幕快速访问订单管理"})]}),v.jsx("button",{className:ce.closeBtn,onClick:i,children:"✕"})]})}):r?v.jsx("div",{className:ce.container,children:v.jsxs("div",{className:`${ce.prompt} ${ce.offline}`,children:[v.jsx("div",{className:ce.icon,children:"📡"}),v.jsxs("div",{className:ce.content,children:[v.jsx("div",{className:ce.title,children:"离线模式"}),v.jsx("div",{className:ce.desc,children:"您正在离线使用，数据将保存在本地"})]})]})}):e?v.jsx("div",{className:ce.container,children:v.jsxs("div",{className:ce.prompt,children:[v.jsx("div",{className:ce.icon,children:"📱"}),v.jsxs("div",{className:ce.content,children:[v.jsx("div",{className:ce.title,children:"添加到主屏幕"}),v.jsx("div",{className:ce.desc,children:"安装后像 App 一样使用，离线也能访问"})]}),v.jsxs("div",{className:ce.actions,children:[v.jsx("button",{className:ce.installBtn,onClick:s,children:"安装"}),v.jsx("button",{className:ce.dismissBtn,onClick:i,children:"稍后"})]})]})}):null:null);jh.displayName="InstallPrompt";const gI="AuthForm-module__container___dipm9",yI="AuthForm-module__card___zCPey",vI="AuthForm-module__header___T3m2B",EI="AuthForm-module__title___L4eK-",II="AuthForm-module__subtitle___5gZRt",TI="AuthForm-module__form___Ry1iO",wI="AuthForm-module__field___cnbtJ",AI="AuthForm-module__label___Kwv8E",RI="AuthForm-module__input___OhFTr",bI="AuthForm-module__error___btaoz",SI="AuthForm-module__submitBtn___1Z2oX",PI="AuthForm-module__footer___zmVTj",CI="AuthForm-module__footerText___8z8mv",kI="AuthForm-module__switchBtn___xA3aH",NI="AuthForm-module__hint___-FXdv",fe={container:gI,card:yI,header:vI,title:EI,subtitle:II,form:TI,field:wI,label:AI,input:RI,error:bI,submitBtn:SI,footer:PI,footerText:CI,switchBtn:kI,hint:NI},Bh=V.memo(({onLogin:n,onRegister:e,loading:t,error:r,clearError:s})=>{const[i,a]=V.useState(!1),[l,u]=V.useState(""),[d,p]=V.useState(""),[y,E]=V.useState(""),[S,P]=V.useState(""),D=async x=>{if(x.preventDefault(),s(),P(""),!l.trim()){P("请输入邮箱");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l.trim())){P("请输入有效的邮箱地址");return}if(!d){P("请输入密码");return}if(d.length<6){P("密码至少6位");return}if(i){if(d!==y){P("两次密码不一致");return}await e(l.trim(),d)}else await n(l.trim(),d)},N=()=>{a(!i),P(""),s()},j=S||r;return v.jsx("div",{className:fe.container,children:v.jsxs("div",{className:fe.card,children:[v.jsxs("div",{className:fe.header,children:[v.jsx("h1",{className:fe.title,children:"订单管理系统"}),v.jsx("p",{className:fe.subtitle,children:i?"创建账号，开启云端同步":"登录账号，同步您的数据"})]}),v.jsxs("form",{onSubmit:D,className:fe.form,children:[v.jsxs("div",{className:fe.field,children:[v.jsx("label",{className:fe.label,children:"邮箱"}),v.jsx("input",{type:"email",className:fe.input,placeholder:"your@email.com",value:l,onChange:x=>u(x.target.value),disabled:t})]}),v.jsxs("div",{className:fe.field,children:[v.jsx("label",{className:fe.label,children:"密码"}),v.jsx("input",{type:"password",className:fe.input,placeholder:"至少6位密码",value:d,onChange:x=>p(x.target.value),disabled:t})]}),i&&v.jsxs("div",{className:fe.field,children:[v.jsx("label",{className:fe.label,children:"确认密码"}),v.jsx("input",{type:"password",className:fe.input,placeholder:"再次输入密码",value:y,onChange:x=>E(x.target.value),disabled:t})]}),j&&v.jsx("div",{className:fe.error,children:j}),v.jsx("button",{type:"submit",className:fe.submitBtn,disabled:t,children:t?"处理中...":i?"注册":"登录"})]}),v.jsxs("div",{className:fe.footer,children:[v.jsx("span",{className:fe.footerText,children:i?"已有账号？":"没有账号？"}),v.jsx("button",{type:"button",className:fe.switchBtn,onClick:N,children:i?"立即登录":"立即注册"})]}),v.jsxs("div",{className:fe.hint,children:[v.jsx("p",{children:"💡 注册后可在多设备间同步数据"}),v.jsx("p",{children:"🔒 数据安全存储在云端"})]})]})})});Bh.displayName="AuthForm";const DI="UserInfo-module__container___F2PW5",VI="UserInfo-module__info___MQLet",OI="UserInfo-module__avatar___HuFlI",xI="UserInfo-module__details___QViyI",LI="UserInfo-module__email___JQcvd",MI="UserInfo-module__syncing___B0ZWb",FI="UserInfo-module__logoutBtn___RXq6G",Ft={container:DI,info:VI,avatar:OI,details:xI,email:LI,syncing:MI,logoutBtn:FI},$h=V.memo(({email:n,onLogout:e,syncing:t})=>v.jsxs("div",{className:Ft.container,children:[v.jsxs("div",{className:Ft.info,children:[v.jsx("div",{className:Ft.avatar,children:n.charAt(0).toUpperCase()}),v.jsxs("div",{className:Ft.details,children:[v.jsx("div",{className:Ft.email,children:n}),t&&v.jsx("div",{className:Ft.syncing,children:"同步中..."})]})]}),v.jsx("button",{className:Ft.logoutBtn,onClick:e,children:"退出登录"})]}));$h.displayName="UserInfo";const UI="App-module__container___7v2Yg",jI="App-module__content___KyCTW",BI="App-module__btnPrimary___CjPav",$I="App-module__btnGhost___Ipnwx",qI="App-module__btnGreen___MeOim",zI="App-module__btnDanger___IobJ-",WI="App-module__input___-D9Bz",GI="App-module__tab___OY-In",HI="App-module__tabActive___PxvTA",KI="App-module__saveBadge___VPhG2",QI="App-module__table___PYfsX",XI="App-module__tableHeader___3nN-g",YI="App-module__statsGrid___y4zF-",JI="App-module__header___DVhBb",ZI="App-module__headerSubtitle___OKyxa",eT="App-module__headerTitle___-BLPn",tT="App-module__headerActions___BJmv2",nT="App-module__filterBar___BPNDq",rT="App-module__filterTabs___r6kLy",sT="App-module__tableContainer___l7LMN",iT="App-module__footer___oi28L",oT="App-module__footerInfo___ohuNi",aT="App-module__emptyState___vXMa1",cT="App-module__batchBar___H6lfE",lT="App-module__batchInfo___J6Y6h",uT="App-module__batchActions___RolMz",hT="App-module__checkbox___j2xuN",dT="App-module__loading___ujnQZ",Q={container:UI,content:jI,btnPrimary:BI,btnGhost:$I,btnGreen:qI,btnDanger:zI,input:WI,tab:GI,tabActive:HI,saveBadge:KI,table:QI,tableHeader:XI,statsGrid:YI,header:JI,headerSubtitle:ZI,headerTitle:eT,headerActions:tT,filterBar:nT,filterTabs:rT,tableContainer:sT,footer:iT,footerInfo:oT,emptyState:aT,batchBar:cT,batchInfo:lT,batchActions:uT,checkbox:hT,loading:dT};function fT(){const{loading:n,error:e,login:t,register:r,logout:s,clearError:i,isLoggedIn:a,userId:l,displayName:u}=xv(),{orders:d,syncState:p,addOrder:y,markReceived:E,markPaid:S,updateRemark:P,deleteOrder:D,batchDelete:N}=Bv(l),{toast:j,notify:x,hideToast:W}=qv(),{isInstallable:ee,isInstalled:oe,isOffline:ne,promptInstall:w}=Rd(),[m,g]=V.useState(!0),[I,T]=V.useState(!1),[R,_]=V.useState("all"),[Be,Dt]=V.useState(""),[Ve,Fe]=V.useState(new Set),[tt,Dn]=V.useState(()=>{try{const F=localStorage.getItem(Xa);if(F){const J=JSON.parse(F);if(Array.isArray(J)&&J.length>0)return J}}catch{}return Il});V.useEffect(()=>{try{localStorage.setItem(Xa,JSON.stringify(tt))}catch{}},[tt]);const Vn=V.useCallback(F=>{Dn(J=>J.includes(F)?J:[...J,F])},[]),{filteredUnpaid:Ge,filteredPaid:He,stats:ae,agentFirstIndex:Qs,paidAgentFirstIndex:Vt}=$v(d,R,Be),Xs=V.useMemo(()=>[{label:"订单总数",value:`${ae.totalOrders} 单`,color:"#1a1a1a",bg:"#fff",border:"#e8e4de"},{label:"订单总金额",value:`¥${ae.totalAmount.toLocaleString()}`,color:"#1a1a1a",bg:"#fff",border:"#e8e4de"},{label:"待收款金额",value:`¥${ae.receivedAmount.toLocaleString()}`,color:"#065f46",bg:"#fff",border:"#e8e4de"},{label:`本次可结算 (${ae.nextDateStr})`,value:`¥${ae.settleableAmount.toLocaleString()}`,color:"#fff",bg:"#1a1a1a",border:"#1a1a1a"},{label:"累计已收款",value:`¥${ae.paidAmount.toLocaleString()}`,color:"#5b21b6",bg:"#f5f3ff",border:"#ddd6fe"}],[ae]),en=V.useCallback(async(F,J)=>{try{await t(F,J),x("✅ 登录成功")}catch{x("❌ 操作失败，请重试")}},[t,x]),Ys=V.useCallback(async(F,J)=>{try{await r(F,J),x("✅ 注册成功")}catch{x("❌ 操作失败，请重试")}},[r,x]),Js=V.useCallback(async()=>{await s(),x("已退出登录")},[s,x]),tn=V.useCallback(async F=>{try{await y(F),x("✅ 订单已添加")}catch{x("❌ 操作失败，请重试")}},[y,x]),nn=V.useCallback(async F=>{try{await E(F,zt()),x("✅ 已标记收货")}catch{x("❌ 操作失败，请重试")}},[E,x]),On=V.useCallback(async F=>{try{await S(F,zt()),x("💰 已标记收款")}catch{x("❌ 操作失败，请重试")}},[S,x]),xn=V.useCallback(async(F,J)=>{try{await P(F,J),x("✅ 备注已保存")}catch{x("❌ 操作失败，请重试")}},[P,x]),rn=V.useCallback(async F=>{try{await D(F),x("🗑 订单已删除"),Fe(J=>{const Oe=new Set(J);return Oe.delete(F),Oe})}catch{x("❌ 操作失败，请重试")}},[D,x]),Ln=V.useCallback(()=>{jv(d),x("📥 CSV 文件已导出")},[d,x]),Mr=V.useCallback(F=>{Fe(J=>{const Oe=new Set(J);return Oe.has(F)?Oe.delete(F):Oe.add(F),Oe})},[]),Zs=V.useCallback(()=>{Ve.size===Ge.length?Fe(new Set):Fe(new Set(Ge.map(F=>F.id)))},[Ve.size,Ge]),ei=V.useCallback(async()=>{if(Ve.size!==0)try{await N(Array.from(Ve)),x(`🗑 已删除 ${Ve.size} 个订单`),Fe(new Set)}catch{x("❌ 操作失败，请重试")}},[Ve,N,x]),Fr=V.useCallback(async()=>{const F=Array.from(Ve).filter(J=>{const Oe=d.find(Mn=>Mn.id===J);return Oe&&!Oe.received});if(F.length===0){x("没有可标记收货的订单");return}try{for(const J of F)await E(J,zt());x(`✅ 已标记 ${F.length} 个订单收货`),Fe(new Set)}catch{x("❌ 操作失败，请重试")}},[Ve,d,E,x]);return n?v.jsx("div",{className:Q.container,children:v.jsx("div",{className:Q.loading,children:"加载中..."})}):a?v.jsxs("div",{className:Q.container,children:[v.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&display=swap');
        * { box-sizing: border-box; }
        input, select { font-family: inherit; }
      `}),v.jsx(jh,{isVisible:m,isInstallable:ee,isInstalled:oe,isOffline:ne,onInstall:w,onDismiss:()=>g(!1)}),j&&v.jsx(Vh,{message:j,onClose:W}),v.jsxs("div",{className:Q.content,children:[v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[v.jsx($h,{email:u||"",onLogout:Js,syncing:p.syncing}),v.jsx("button",{className:Q.btnGhost,onClick:()=>{const F=prompt("请输入新客服名称：");F&&F.trim()&&(Vn(F.trim()),x(`✅ 已添加客服：${F.trim()}`))},title:"管理客服列表",children:"管理客服"})]}),v.jsxs("div",{className:Q.header,children:[v.jsxs("div",{children:[v.jsx("div",{className:Q.headerSubtitle,children:"订单管理系统"}),v.jsx("h1",{className:Q.headerTitle,children:"收货台账"}),v.jsx("div",{style:{marginTop:6},children:v.jsx("span",{className:Q.saveBadge,children:"☁️ 云端同步 · 多设备互通"})})]}),v.jsxs("div",{className:Q.headerActions,children:[v.jsx("button",{className:Q.btnGreen,onClick:Ln,children:"导出 CSV"}),v.jsx("button",{className:Q.btnPrimary,onClick:()=>T(F=>!F),children:I?"取消":"+ 新增订单"})]})]}),v.jsx("div",{className:Q.statsGrid,children:Xs.map((F,J)=>v.jsx(Fh,{stats:F},J))}),I&&v.jsx(Oh,{onSubmit:tn,onClose:()=>T(!1),existingIds:d.map(F=>F.id),agents:tt,onAddAgent:Vn}),Ve.size>0&&v.jsxs("div",{className:Q.batchBar,children:[v.jsxs("span",{className:Q.batchInfo,children:["已选择 ",Ve.size," 个订单"]}),v.jsxs("div",{className:Q.batchActions,children:[v.jsx("button",{className:Q.btnGhost,onClick:Fr,children:"批量确认收货"}),v.jsx("button",{className:Q.btnDanger,onClick:ei,children:"批量删除"}),v.jsx("button",{className:Q.btnGhost,onClick:()=>Fe(new Set),children:"取消选择"})]})]}),v.jsxs("div",{className:Q.filterBar,children:[v.jsx("div",{className:Q.filterTabs,children:Ad.map(({value:F,label:J})=>v.jsx("button",{className:`${Q.tab} ${R===F?Q.tabActive:""}`,onClick:()=>_(F),children:J},F))}),v.jsx("input",{className:Q.input,style:{width:230},placeholder:"搜索订单号 / 客服 / 备注",value:Be,onChange:F=>Dt(F.target.value)})]}),v.jsx("div",{className:Q.tableContainer,children:v.jsxs("table",{className:Q.table,children:[v.jsx("thead",{children:v.jsxs("tr",{children:[v.jsx("th",{className:Q.tableHeader,style:{width:40},children:v.jsx("input",{type:"checkbox",checked:Ve.size===Ge.length&&Ge.length>0,onChange:Zs,className:Q.checkbox})}),wd.map(F=>v.jsx("th",{className:Q.tableHeader,children:F},F))]})}),v.jsx("tbody",{children:Ge.length===0?v.jsx("tr",{children:v.jsx("td",{colSpan:9,className:Q.emptyState,children:"暂无待收款订单"})}):Ge.map((F,J)=>v.jsx(Mh,{order:F,isGroupStart:Qs[F.agent]===J,agentCount:Ge.filter(Oe=>Oe.agent===F.agent).length,isSelected:Ve.has(F.id),onSelect:Mr,onMarkReceived:nn,onMarkPaid:On,onUpdateRemark:xn,onDelete:rn},F.id))})]})}),v.jsx(Uh,{orders:He,agentFirstIndex:Vt,onDelete:rn}),v.jsx("div",{className:Q.footer,children:v.jsxs("div",{className:Q.footerInfo,children:["共 ",d.length," 条记录 · 云端实时同步"]})})]})]}):v.jsxs("div",{className:Q.container,children:[v.jsx("style",{children:`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&display=swap');
        `}),v.jsx(Bh,{onLogin:en,onRegister:Ys,loading:n,error:e,clearError:i})]})}const pT=Ni.createRoot(document.getElementById("root"));pT.render(v.jsx(yl.StrictMode,{children:v.jsx(fT,{})}));
