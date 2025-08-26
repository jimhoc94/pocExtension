(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();/**
* @vue/shared v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function zi(t){const e=Object.create(null);for(const o of t.split(","))e[o]=1;return o=>o in e}const de={},No=[],mt=()=>{},Kl=()=>!1,An=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Bi=t=>t.startsWith("onUpdate:"),Te=Object.assign,Vi=(t,e)=>{const o=t.indexOf(e);o>-1&&t.splice(o,1)},Zc=Object.prototype.hasOwnProperty,se=(t,e)=>Zc.call(t,e),L=Array.isArray,Uo=t=>Ds(t)==="[object Map]",es=t=>Ds(t)==="[object Set]",$r=t=>Ds(t)==="[object Date]",F=t=>typeof t=="function",Ie=t=>typeof t=="string",Rt=t=>typeof t=="symbol",ve=t=>t!==null&&typeof t=="object",Gl=t=>(ve(t)||F(t))&&F(t.then)&&F(t.catch),Yl=Object.prototype.toString,Ds=t=>Yl.call(t),qc=t=>Ds(t).slice(8,-1),Jl=t=>Ds(t)==="[object Object]",Li=t=>Ie(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,bs=zi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),On=t=>{const e=Object.create(null);return o=>e[o]||(e[o]=t(o))},Wc=/-(\w)/g,pt=On(t=>t.replace(Wc,(e,o)=>o?o.toUpperCase():"")),Kc=/\B([A-Z])/g,Po=On(t=>t.replace(Kc,"-$1").toLowerCase()),Pn=On(t=>t.charAt(0).toUpperCase()+t.slice(1)),Xn=On(t=>t?`on${Pn(t)}`:""),so=(t,e)=>!Object.is(t,e),sn=(t,...e)=>{for(let o=0;o<t.length;o++)t[o](...e)},Xl=(t,e,o,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:o})},dn=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let kr;const Tn=()=>kr||(kr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Di(t){if(L(t)){const e={};for(let o=0;o<t.length;o++){const s=t[o],n=Ie(s)?Xc(s):Di(s);if(n)for(const i in n)e[i]=n[i]}return e}else if(Ie(t)||ve(t))return t}const Gc=/;(?![^(]*\))/g,Yc=/:([^]+)/,Jc=/\/\*[^]*?\*\//g;function Xc(t){const e={};return t.replace(Jc,"").split(Gc).forEach(o=>{if(o){const s=o.split(Yc);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function oo(t){let e="";if(Ie(t))e=t;else if(L(t))for(let o=0;o<t.length;o++){const s=oo(t[o]);s&&(e+=s+" ")}else if(ve(t))for(const o in t)t[o]&&(e+=o+" ");return e.trim()}const Qc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ed=zi(Qc);function Ql(t){return!!t||t===""}function td(t,e){if(t.length!==e.length)return!1;let o=!0;for(let s=0;o&&s<t.length;s++)o=ko(t[s],e[s]);return o}function ko(t,e){if(t===e)return!0;let o=$r(t),s=$r(e);if(o||s)return o&&s?t.getTime()===e.getTime():!1;if(o=Rt(t),s=Rt(e),o||s)return t===e;if(o=L(t),s=L(e),o||s)return o&&s?td(t,e):!1;if(o=ve(t),s=ve(e),o||s){if(!o||!s)return!1;const n=Object.keys(t).length,i=Object.keys(e).length;if(n!==i)return!1;for(const r in t){const l=t.hasOwnProperty(r),c=e.hasOwnProperty(r);if(l&&!c||!l&&c||!ko(t[r],e[r]))return!1}}return String(t)===String(e)}function Mi(t,e){return t.findIndex(o=>ko(o,e))}const ea=t=>!!(t&&t.__v_isRef===!0),X=t=>Ie(t)?t:t==null?"":L(t)||ve(t)&&(t.toString===Yl||!F(t.toString))?ea(t)?X(t.value):JSON.stringify(t,ta,2):String(t),ta=(t,e)=>ea(e)?ta(t,e.value):Uo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((o,[s,n],i)=>(o[Qn(s,i)+" =>"]=n,o),{})}:es(e)?{[`Set(${e.size})`]:[...e.values()].map(o=>Qn(o))}:Rt(e)?Qn(e):ve(e)&&!L(e)&&!Jl(e)?String(e):e,Qn=(t,e="")=>{var o;return Rt(t)?`Symbol(${(o=t.description)!=null?o:e})`:t};/**
* @vue/reactivity v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xe;class od{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Xe,!e&&Xe&&(this.index=(Xe.scopes||(Xe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,o;if(this.scopes)for(e=0,o=this.scopes.length;e<o;e++)this.scopes[e].pause();for(e=0,o=this.effects.length;e<o;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,o;if(this.scopes)for(e=0,o=this.scopes.length;e<o;e++)this.scopes[e].resume();for(e=0,o=this.effects.length;e<o;e++)this.effects[e].resume()}}run(e){if(this._active){const o=Xe;try{return Xe=this,e()}finally{Xe=o}}}on(){++this._on===1&&(this.prevScope=Xe,Xe=this)}off(){this._on>0&&--this._on===0&&(Xe=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let o,s;for(o=0,s=this.effects.length;o<s;o++)this.effects[o].stop();for(this.effects.length=0,o=0,s=this.cleanups.length;o<s;o++)this.cleanups[o]();if(this.cleanups.length=0,this.scopes){for(o=0,s=this.scopes.length;o<s;o++)this.scopes[o].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0}}}function sd(){return Xe}let fe;const ei=new WeakSet;class oa{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Xe&&Xe.active&&Xe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ei.has(this)&&(ei.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||na(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Sr(this),ia(this);const e=fe,o=_t;fe=this,_t=!0;try{return this.fn()}finally{ra(this),fe=e,_t=o,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ni(e);this.deps=this.depsTail=void 0,Sr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ei.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){fi(this)&&this.run()}get dirty(){return fi(this)}}let sa=0,ms,_s;function na(t,e=!1){if(t.flags|=8,e){t.next=_s,_s=t;return}t.next=ms,ms=t}function Fi(){sa++}function ji(){if(--sa>0)return;if(_s){let e=_s;for(_s=void 0;e;){const o=e.next;e.next=void 0,e.flags&=-9,e=o}}let t;for(;ms;){let e=ms;for(ms=void 0;e;){const o=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=o}}if(t)throw t}function ia(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ra(t){let e,o=t.depsTail,s=o;for(;s;){const n=s.prevDep;s.version===-1?(s===o&&(o=n),Ni(s),nd(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=n}t.deps=e,t.depsTail=o}function fi(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(la(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function la(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ss)||(t.globalVersion=Ss,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!fi(t))))return;t.flags|=2;const e=t.dep,o=fe,s=_t;fe=t,_t=!0;try{ia(t);const n=t.fn(t._value);(e.version===0||so(n,t._value))&&(t.flags|=128,t._value=n,e.version++)}catch(n){throw e.version++,n}finally{fe=o,_t=s,ra(t),t.flags&=-3}}function Ni(t,e=!1){const{dep:o,prevSub:s,nextSub:n}=t;if(s&&(s.nextSub=n,t.prevSub=void 0),n&&(n.prevSub=s,t.nextSub=void 0),o.subs===t&&(o.subs=s,!s&&o.computed)){o.computed.flags&=-5;for(let i=o.computed.deps;i;i=i.nextDep)Ni(i,!0)}!e&&!--o.sc&&o.map&&o.map.delete(o.key)}function nd(t){const{prevDep:e,nextDep:o}=t;e&&(e.nextDep=o,t.prevDep=void 0),o&&(o.prevDep=e,t.nextDep=void 0)}let _t=!0;const aa=[];function Wt(){aa.push(_t),_t=!1}function Kt(){const t=aa.pop();_t=t===void 0?!0:t}function Sr(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const o=fe;fe=void 0;try{e()}finally{fe=o}}}let Ss=0;class id{constructor(e,o){this.sub=e,this.dep=o,this.version=o.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ui{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!fe||!_t||fe===this.computed)return;let o=this.activeLink;if(o===void 0||o.sub!==fe)o=this.activeLink=new id(fe,this),fe.deps?(o.prevDep=fe.depsTail,fe.depsTail.nextDep=o,fe.depsTail=o):fe.deps=fe.depsTail=o,ca(o);else if(o.version===-1&&(o.version=this.version,o.nextDep)){const s=o.nextDep;s.prevDep=o.prevDep,o.prevDep&&(o.prevDep.nextDep=s),o.prevDep=fe.depsTail,o.nextDep=void 0,fe.depsTail.nextDep=o,fe.depsTail=o,fe.deps===o&&(fe.deps=s)}return o}trigger(e){this.version++,Ss++,this.notify(e)}notify(e){Fi();try{for(let o=this.subs;o;o=o.prevSub)o.sub.notify()&&o.sub.dep.notify()}finally{ji()}}}function ca(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)ca(s)}const o=t.dep.subs;o!==t&&(t.prevSub=o,o&&(o.nextSub=t)),t.dep.subs=t}}const vi=new WeakMap,Co=Symbol(""),gi=Symbol(""),Is=Symbol("");function De(t,e,o){if(_t&&fe){let s=vi.get(t);s||vi.set(t,s=new Map);let n=s.get(o);n||(s.set(o,n=new Ui),n.map=s,n.key=o),n.track()}}function Nt(t,e,o,s,n,i){const r=vi.get(t);if(!r){Ss++;return}const l=c=>{c&&c.trigger()};if(Fi(),e==="clear")r.forEach(l);else{const c=L(t),d=c&&Li(o);if(c&&o==="length"){const a=Number(s);r.forEach((h,m)=>{(m==="length"||m===Is||!Rt(m)&&m>=a)&&l(h)})}else switch((o!==void 0||r.has(void 0))&&l(r.get(o)),d&&l(r.get(Is)),e){case"add":c?d&&l(r.get("length")):(l(r.get(Co)),Uo(t)&&l(r.get(gi)));break;case"delete":c||(l(r.get(Co)),Uo(t)&&l(r.get(gi)));break;case"set":Uo(t)&&l(r.get(Co));break}}ji()}function Do(t){const e=oe(t);return e===t?e:(De(e,"iterate",Is),ut(t)?e:e.map(ze))}function Rn(t){return De(t=oe(t),"iterate",Is),t}const rd={__proto__:null,[Symbol.iterator](){return ti(this,Symbol.iterator,ze)},concat(...t){return Do(this).concat(...t.map(e=>L(e)?Do(e):e))},entries(){return ti(this,"entries",t=>(t[1]=ze(t[1]),t))},every(t,e){return Mt(this,"every",t,e,void 0,arguments)},filter(t,e){return Mt(this,"filter",t,e,o=>o.map(ze),arguments)},find(t,e){return Mt(this,"find",t,e,ze,arguments)},findIndex(t,e){return Mt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Mt(this,"findLast",t,e,ze,arguments)},findLastIndex(t,e){return Mt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Mt(this,"forEach",t,e,void 0,arguments)},includes(...t){return oi(this,"includes",t)},indexOf(...t){return oi(this,"indexOf",t)},join(t){return Do(this).join(t)},lastIndexOf(...t){return oi(this,"lastIndexOf",t)},map(t,e){return Mt(this,"map",t,e,void 0,arguments)},pop(){return ds(this,"pop")},push(...t){return ds(this,"push",t)},reduce(t,...e){return Ir(this,"reduce",t,e)},reduceRight(t,...e){return Ir(this,"reduceRight",t,e)},shift(){return ds(this,"shift")},some(t,e){return Mt(this,"some",t,e,void 0,arguments)},splice(...t){return ds(this,"splice",t)},toReversed(){return Do(this).toReversed()},toSorted(t){return Do(this).toSorted(t)},toSpliced(...t){return Do(this).toSpliced(...t)},unshift(...t){return ds(this,"unshift",t)},values(){return ti(this,"values",ze)}};function ti(t,e,o){const s=Rn(t),n=s[e]();return s!==t&&!ut(t)&&(n._next=n.next,n.next=()=>{const i=n._next();return i.value&&(i.value=o(i.value)),i}),n}const ld=Array.prototype;function Mt(t,e,o,s,n,i){const r=Rn(t),l=r!==t&&!ut(t),c=r[e];if(c!==ld[e]){const h=c.apply(t,i);return l?ze(h):h}let d=o;r!==t&&(l?d=function(h,m){return o.call(this,ze(h),m,t)}:o.length>2&&(d=function(h,m){return o.call(this,h,m,t)}));const a=c.call(r,d,s);return l&&n?n(a):a}function Ir(t,e,o,s){const n=Rn(t);let i=o;return n!==t&&(ut(t)?o.length>3&&(i=function(r,l,c){return o.call(this,r,l,c,t)}):i=function(r,l,c){return o.call(this,r,ze(l),c,t)}),n[e](i,...s)}function oi(t,e,o){const s=oe(t);De(s,"iterate",Is);const n=s[e](...o);return(n===-1||n===!1)&&Wi(o[0])?(o[0]=oe(o[0]),s[e](...o)):n}function ds(t,e,o=[]){Wt(),Fi();const s=oe(t)[e].apply(t,o);return ji(),Kt(),s}const ad=zi("__proto__,__v_isRef,__isVue"),da=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Rt));function cd(t){Rt(t)||(t=String(t));const e=oe(this);return De(e,"has",t),e.hasOwnProperty(t)}class ua{constructor(e=!1,o=!1){this._isReadonly=e,this._isShallow=o}get(e,o,s){if(o==="__v_skip")return e.__v_skip;const n=this._isReadonly,i=this._isShallow;if(o==="__v_isReactive")return!n;if(o==="__v_isReadonly")return n;if(o==="__v_isShallow")return i;if(o==="__v_raw")return s===(n?i?_d:va:i?fa:pa).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const r=L(e);if(!n){let c;if(r&&(c=rd[o]))return c;if(o==="hasOwnProperty")return cd}const l=Reflect.get(e,o,je(e)?e:s);return(Rt(o)?da.has(o):ad(o))||(n||De(e,"get",o),i)?l:je(l)?r&&Li(o)?l:l.value:ve(l)?n?ga(l):Zi(l):l}}class ha extends ua{constructor(e=!1){super(!1,e)}set(e,o,s,n){let i=e[o];if(!this._isShallow){const c=io(i);if(!ut(s)&&!io(s)&&(i=oe(i),s=oe(s)),!L(e)&&je(i)&&!je(s))return c||(i.value=s),!0}const r=L(e)&&Li(o)?Number(o)<e.length:se(e,o),l=Reflect.set(e,o,s,je(e)?e:n);return e===oe(n)&&(r?so(s,i)&&Nt(e,"set",o,s):Nt(e,"add",o,s)),l}deleteProperty(e,o){const s=se(e,o);e[o];const n=Reflect.deleteProperty(e,o);return n&&s&&Nt(e,"delete",o,void 0),n}has(e,o){const s=Reflect.has(e,o);return(!Rt(o)||!da.has(o))&&De(e,"has",o),s}ownKeys(e){return De(e,"iterate",L(e)?"length":Co),Reflect.ownKeys(e)}}class dd extends ua{constructor(e=!1){super(!0,e)}set(e,o){return!0}deleteProperty(e,o){return!0}}const ud=new ha,hd=new dd,pd=new ha(!0);const bi=t=>t,qs=t=>Reflect.getPrototypeOf(t);function fd(t,e,o){return function(...s){const n=this.__v_raw,i=oe(n),r=Uo(i),l=t==="entries"||t===Symbol.iterator&&r,c=t==="keys"&&r,d=n[t](...s),a=o?bi:e?un:ze;return!e&&De(i,"iterate",c?gi:Co),{next(){const{value:h,done:m}=d.next();return m?{value:h,done:m}:{value:l?[a(h[0]),a(h[1])]:a(h),done:m}},[Symbol.iterator](){return this}}}}function Ws(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function vd(t,e){const o={get(n){const i=this.__v_raw,r=oe(i),l=oe(n);t||(so(n,l)&&De(r,"get",n),De(r,"get",l));const{has:c}=qs(r),d=e?bi:t?un:ze;if(c.call(r,n))return d(i.get(n));if(c.call(r,l))return d(i.get(l));i!==r&&i.get(n)},get size(){const n=this.__v_raw;return!t&&De(oe(n),"iterate",Co),Reflect.get(n,"size",n)},has(n){const i=this.__v_raw,r=oe(i),l=oe(n);return t||(so(n,l)&&De(r,"has",n),De(r,"has",l)),n===l?i.has(n):i.has(n)||i.has(l)},forEach(n,i){const r=this,l=r.__v_raw,c=oe(l),d=e?bi:t?un:ze;return!t&&De(c,"iterate",Co),l.forEach((a,h)=>n.call(i,d(a),d(h),r))}};return Te(o,t?{add:Ws("add"),set:Ws("set"),delete:Ws("delete"),clear:Ws("clear")}:{add(n){!e&&!ut(n)&&!io(n)&&(n=oe(n));const i=oe(this);return qs(i).has.call(i,n)||(i.add(n),Nt(i,"add",n,n)),this},set(n,i){!e&&!ut(i)&&!io(i)&&(i=oe(i));const r=oe(this),{has:l,get:c}=qs(r);let d=l.call(r,n);d||(n=oe(n),d=l.call(r,n));const a=c.call(r,n);return r.set(n,i),d?so(i,a)&&Nt(r,"set",n,i):Nt(r,"add",n,i),this},delete(n){const i=oe(this),{has:r,get:l}=qs(i);let c=r.call(i,n);c||(n=oe(n),c=r.call(i,n)),l&&l.call(i,n);const d=i.delete(n);return c&&Nt(i,"delete",n,void 0),d},clear(){const n=oe(this),i=n.size!==0,r=n.clear();return i&&Nt(n,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(n=>{o[n]=fd(n,t,e)}),o}function Hi(t,e){const o=vd(t,e);return(s,n,i)=>n==="__v_isReactive"?!t:n==="__v_isReadonly"?t:n==="__v_raw"?s:Reflect.get(se(o,n)&&n in s?o:s,n,i)}const gd={get:Hi(!1,!1)},bd={get:Hi(!1,!0)},md={get:Hi(!0,!1)};const pa=new WeakMap,fa=new WeakMap,va=new WeakMap,_d=new WeakMap;function yd(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xd(t){return t.__v_skip||!Object.isExtensible(t)?0:yd(qc(t))}function Zi(t){return io(t)?t:qi(t,!1,ud,gd,pa)}function wd(t){return qi(t,!1,pd,bd,fa)}function ga(t){return qi(t,!0,hd,md,va)}function qi(t,e,o,s,n){if(!ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=xd(t);if(i===0)return t;const r=n.get(t);if(r)return r;const l=new Proxy(t,i===2?s:o);return n.set(t,l),l}function Ho(t){return io(t)?Ho(t.__v_raw):!!(t&&t.__v_isReactive)}function io(t){return!!(t&&t.__v_isReadonly)}function ut(t){return!!(t&&t.__v_isShallow)}function Wi(t){return t?!!t.__v_raw:!1}function oe(t){const e=t&&t.__v_raw;return e?oe(e):t}function Cd(t){return!se(t,"__v_skip")&&Object.isExtensible(t)&&Xl(t,"__v_skip",!0),t}const ze=t=>ve(t)?Zi(t):t,un=t=>ve(t)?ga(t):t;function je(t){return t?t.__v_isRef===!0:!1}function bt(t){return $d(t,!1)}function $d(t,e){return je(t)?t:new kd(t,e)}class kd{constructor(e,o){this.dep=new Ui,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=o?e:oe(e),this._value=o?e:ze(e),this.__v_isShallow=o}get value(){return this.dep.track(),this._value}set value(e){const o=this._rawValue,s=this.__v_isShallow||ut(e)||io(e);e=s?e:oe(e),so(e,o)&&(this._rawValue=e,this._value=s?e:ze(e),this.dep.trigger())}}function Sd(t){return je(t)?t.value:t}const Id={get:(t,e,o)=>e==="__v_raw"?t:Sd(Reflect.get(t,e,o)),set:(t,e,o,s)=>{const n=t[e];return je(n)&&!je(o)?(n.value=o,!0):Reflect.set(t,e,o,s)}};function ba(t){return Ho(t)?t:new Proxy(t,Id)}class Ed{constructor(e,o,s){this.fn=e,this.setter=o,this._value=void 0,this.dep=new Ui(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ss-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!o,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&fe!==this)return na(this,!0),!0}get value(){const e=this.dep.track();return la(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ad(t,e,o=!1){let s,n;return F(t)?s=t:(s=t.get,n=t.set),new Ed(s,n,o)}const Ks={},hn=new WeakMap;let yo;function Od(t,e=!1,o=yo){if(o){let s=hn.get(o);s||hn.set(o,s=[]),s.push(t)}}function Pd(t,e,o=de){const{immediate:s,deep:n,once:i,scheduler:r,augmentJob:l,call:c}=o,d=V=>n?V:ut(V)||n===!1||n===0?Ut(V,1):Ut(V);let a,h,m,y,I=!1,b=!1;if(je(t)?(h=()=>t.value,I=ut(t)):Ho(t)?(h=()=>d(t),I=!0):L(t)?(b=!0,I=t.some(V=>Ho(V)||ut(V)),h=()=>t.map(V=>{if(je(V))return V.value;if(Ho(V))return d(V);if(F(V))return c?c(V,2):V()})):F(t)?e?h=c?()=>c(t,2):t:h=()=>{if(m){Wt();try{m()}finally{Kt()}}const V=yo;yo=a;try{return c?c(t,3,[y]):t(y)}finally{yo=V}}:h=mt,e&&n){const V=h,ce=n===!0?1/0:n;h=()=>Ut(V(),ce)}const te=sd(),M=()=>{a.stop(),te&&te.active&&Vi(te.effects,a)};if(i&&e){const V=e;e=(...ce)=>{V(...ce),M()}}let ne=b?new Array(t.length).fill(Ks):Ks;const he=V=>{if(!(!(a.flags&1)||!a.dirty&&!V))if(e){const ce=a.run();if(n||I||(b?ce.some((ct,Ge)=>so(ct,ne[Ge])):so(ce,ne))){m&&m();const ct=yo;yo=a;try{const Ge=[ce,ne===Ks?void 0:b&&ne[0]===Ks?[]:ne,y];ne=ce,c?c(e,3,Ge):e(...Ge)}finally{yo=ct}}}else a.run()};return l&&l(he),a=new oa(h),a.scheduler=r?()=>r(he,!1):he,y=V=>Od(V,!1,a),m=a.onStop=()=>{const V=hn.get(a);if(V){if(c)c(V,4);else for(const ce of V)ce();hn.delete(a)}},e?s?he(!0):ne=a.run():r?r(he.bind(null,!0),!0):a.run(),M.pause=a.pause.bind(a),M.resume=a.resume.bind(a),M.stop=M,M}function Ut(t,e=1/0,o){if(e<=0||!ve(t)||t.__v_skip||(o=o||new Set,o.has(t)))return t;if(o.add(t),e--,je(t))Ut(t.value,e,o);else if(L(t))for(let s=0;s<t.length;s++)Ut(t[s],e,o);else if(es(t)||Uo(t))t.forEach(s=>{Ut(s,e,o)});else if(Jl(t)){for(const s in t)Ut(t[s],e,o);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Ut(t[s],e,o)}return t}/**
* @vue/runtime-core v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ms(t,e,o,s){try{return s?t(...s):t()}catch(n){zn(n,e,o)}}function zt(t,e,o,s){if(F(t)){const n=Ms(t,e,o,s);return n&&Gl(n)&&n.catch(i=>{zn(i,e,o)}),n}if(L(t)){const n=[];for(let i=0;i<t.length;i++)n.push(zt(t[i],e,o,s));return n}}function zn(t,e,o,s=!0){const n=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:r}=e&&e.appContext.config||de;if(e){let l=e.parent;const c=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${o}`;for(;l;){const a=l.ec;if(a){for(let h=0;h<a.length;h++)if(a[h](t,c,d)===!1)return}l=l.parent}if(i){Wt(),Ms(i,null,10,[t,c,d]),Kt();return}}Td(t,o,n,s,r)}function Td(t,e,o,s=!0,n=!1){if(n)throw t;console.error(t)}const Ze=[];let Pt=-1;const Zo=[];let eo=null,Mo=0;const ma=Promise.resolve();let pn=null;function _a(t){const e=pn||ma;return t?e.then(this?t.bind(this):t):e}function Rd(t){let e=Pt+1,o=Ze.length;for(;e<o;){const s=e+o>>>1,n=Ze[s],i=Es(n);i<t||i===t&&n.flags&2?e=s+1:o=s}return e}function Ki(t){if(!(t.flags&1)){const e=Es(t),o=Ze[Ze.length-1];!o||!(t.flags&2)&&e>=Es(o)?Ze.push(t):Ze.splice(Rd(e),0,t),t.flags|=1,ya()}}function ya(){pn||(pn=ma.then(wa))}function zd(t){L(t)?Zo.push(...t):eo&&t.id===-1?eo.splice(Mo+1,0,t):t.flags&1||(Zo.push(t),t.flags|=1),ya()}function Er(t,e,o=Pt+1){for(;o<Ze.length;o++){const s=Ze[o];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Ze.splice(o,1),o--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function xa(t){if(Zo.length){const e=[...new Set(Zo)].sort((o,s)=>Es(o)-Es(s));if(Zo.length=0,eo){eo.push(...e);return}for(eo=e,Mo=0;Mo<eo.length;Mo++){const o=eo[Mo];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}eo=null,Mo=0}}const Es=t=>t.id==null?t.flags&2?-1:1/0:t.id;function wa(t){const e=mt;try{for(Pt=0;Pt<Ze.length;Pt++){const o=Ze[Pt];o&&!(o.flags&8)&&(o.flags&4&&(o.flags&=-2),Ms(o,o.i,o.i?15:14),o.flags&4||(o.flags&=-2))}}finally{for(;Pt<Ze.length;Pt++){const o=Ze[Pt];o&&(o.flags&=-2)}Pt=-1,Ze.length=0,xa(),pn=null,(Ze.length||Zo.length)&&wa()}}let rt=null,Ca=null;function fn(t){const e=rt;return rt=t,Ca=t&&t.type.__scopeId||null,e}function Qe(t,e=rt,o){if(!e||t._n)return t;const s=(...n)=>{s._d&&Lr(-1);const i=fn(e);let r;try{r=t(...n)}finally{fn(i),s._d&&Lr(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function Se(t,e){if(rt===null)return t;const o=Mn(rt),s=t.dirs||(t.dirs=[]);for(let n=0;n<e.length;n++){let[i,r,l,c=de]=e[n];i&&(F(i)&&(i={mounted:i,updated:i}),i.deep&&Ut(r),s.push({dir:i,instance:o,value:r,oldValue:void 0,arg:l,modifiers:c}))}return t}function go(t,e,o,s){const n=t.dirs,i=e&&e.dirs;for(let r=0;r<n.length;r++){const l=n[r];i&&(l.oldValue=i[r].value);let c=l.dir[s];c&&(Wt(),zt(c,o,8,[t.el,l,t,e]),Kt())}}const Bd=Symbol("_vte"),Vd=t=>t.__isTeleport,Ld=Symbol("_leaveCb");function Gi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Gi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Bn(t,e){return F(t)?(()=>Te({name:t.name},e,{setup:t}))():t}function $a(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ys(t,e,o,s,n=!1){if(L(t)){t.forEach((I,b)=>ys(I,e&&(L(e)?e[b]:e),o,s,n));return}if(xs(s)&&!n){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&ys(t,e,o,s.component.subTree);return}const i=s.shapeFlag&4?Mn(s.component):s.el,r=n?null:i,{i:l,r:c}=t,d=e&&e.r,a=l.refs===de?l.refs={}:l.refs,h=l.setupState,m=oe(h),y=h===de?Kl:I=>se(m,I);if(d!=null&&d!==c){if(Ie(d))a[d]=null,y(d)&&(h[d]=null);else if(je(d)){d.value=null;const I=e;I.k&&(a[I.k]=null)}}if(F(c))Ms(c,l,12,[r,a]);else{const I=Ie(c),b=je(c);if(I||b){const te=()=>{if(t.f){const M=I?y(c)?h[c]:a[c]:c.value;if(n)L(M)&&Vi(M,i);else if(L(M))M.includes(i)||M.push(i);else if(I)a[c]=[i],y(c)&&(h[c]=a[c]);else{const ne=[i];c.value=ne,t.k&&(a[t.k]=ne)}}else I?(a[c]=r,y(c)&&(h[c]=r)):b&&(c.value=r,t.k&&(a[t.k]=r))};r?(te.id=-1,it(te,o)):te()}}}Tn().requestIdleCallback;Tn().cancelIdleCallback;const xs=t=>!!t.type.__asyncLoader,ka=t=>t.type.__isKeepAlive;function Dd(t,e){Sa(t,"a",e)}function Md(t,e){Sa(t,"da",e)}function Sa(t,e,o=Me){const s=t.__wdc||(t.__wdc=()=>{let n=o;for(;n;){if(n.isDeactivated)return;n=n.parent}return t()});if(Vn(e,s,o),o){let n=o.parent;for(;n&&n.parent;)ka(n.parent.vnode)&&Fd(s,e,o,n),n=n.parent}}function Fd(t,e,o,s){const n=Vn(e,t,s,!0);Ea(()=>{Vi(s[e],n)},o)}function Vn(t,e,o=Me,s=!1){if(o){const n=o[t]||(o[t]=[]),i=e.__weh||(e.__weh=(...r)=>{Wt();const l=Fs(o),c=zt(e,o,t,r);return l(),Kt(),c});return s?n.unshift(i):n.push(i),i}}const Jt=t=>(e,o=Me)=>{(!Ps||t==="sp")&&Vn(t,(...s)=>e(...s),o)},jd=Jt("bm"),Ia=Jt("m"),Nd=Jt("bu"),Ud=Jt("u"),Hd=Jt("bum"),Ea=Jt("um"),Zd=Jt("sp"),qd=Jt("rtg"),Wd=Jt("rtc");function Kd(t,e=Me){Vn("ec",t,e)}const Aa="components";function qt(t,e){return Yd(Aa,t,!0,e)||t}const Gd=Symbol.for("v-ndc");function Yd(t,e,o=!0,s=!1){const n=rt||Me;if(n){const i=n.type;if(t===Aa){const l=Du(i,!1);if(l&&(l===e||l===pt(e)||l===Pn(pt(e))))return i}const r=Ar(n[t]||i[t],e)||Ar(n.appContext[t],e);return!r&&s?i:r}}function Ar(t,e){return t&&(t[e]||t[pt(e)]||t[Pn(pt(e))])}function As(t,e,o,s){let n;const i=o&&o[s],r=L(t);if(r||Ie(t)){const l=r&&Ho(t);let c=!1,d=!1;l&&(c=!ut(t),d=io(t),t=Rn(t)),n=new Array(t.length);for(let a=0,h=t.length;a<h;a++)n[a]=e(c?d?un(ze(t[a])):ze(t[a]):t[a],a,void 0,i&&i[a])}else if(typeof t=="number"){n=new Array(t);for(let l=0;l<t;l++)n[l]=e(l+1,l,void 0,i&&i[l])}else if(ve(t))if(t[Symbol.iterator])n=Array.from(t,(l,c)=>e(l,c,void 0,i&&i[c]));else{const l=Object.keys(t);n=new Array(l.length);for(let c=0,d=l.length;c<d;c++){const a=l[c];n[c]=e(t[a],a,c,i&&i[c])}}else n=[];return o&&(o[s]=n),n}const mi=t=>t?Ga(t)?Mn(t):mi(t.parent):null,ws=Te(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>mi(t.parent),$root:t=>mi(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Yi(t),$forceUpdate:t=>t.f||(t.f=()=>{Ki(t.update)}),$nextTick:t=>t.n||(t.n=_a.bind(t.proxy)),$watch:t=>mu.bind(t)}),si=(t,e)=>t!==de&&!t.__isScriptSetup&&se(t,e),Jd={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:o,setupState:s,data:n,props:i,accessCache:r,type:l,appContext:c}=t;let d;if(e[0]!=="$"){const y=r[e];if(y!==void 0)switch(y){case 1:return s[e];case 2:return n[e];case 4:return o[e];case 3:return i[e]}else{if(si(s,e))return r[e]=1,s[e];if(n!==de&&se(n,e))return r[e]=2,n[e];if((d=t.propsOptions[0])&&se(d,e))return r[e]=3,i[e];if(o!==de&&se(o,e))return r[e]=4,o[e];_i&&(r[e]=0)}}const a=ws[e];let h,m;if(a)return e==="$attrs"&&De(t.attrs,"get",""),a(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(o!==de&&se(o,e))return r[e]=4,o[e];if(m=c.config.globalProperties,se(m,e))return m[e]},set({_:t},e,o){const{data:s,setupState:n,ctx:i}=t;return si(n,e)?(n[e]=o,!0):s!==de&&se(s,e)?(s[e]=o,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=o,!0)},has({_:{data:t,setupState:e,accessCache:o,ctx:s,appContext:n,propsOptions:i,type:r}},l){let c,d;return!!(o[l]||t!==de&&l[0]!=="$"&&se(t,l)||si(e,l)||(c=i[0])&&se(c,l)||se(s,l)||se(ws,l)||se(n.config.globalProperties,l)||(d=r.__cssModules)&&d[l])},defineProperty(t,e,o){return o.get!=null?t._.accessCache[e]=0:se(o,"value")&&this.set(t,e,o.value,null),Reflect.defineProperty(t,e,o)}};function Or(t){return L(t)?t.reduce((e,o)=>(e[o]=null,e),{}):t}let _i=!0;function Xd(t){const e=Yi(t),o=t.proxy,s=t.ctx;_i=!1,e.beforeCreate&&Pr(e.beforeCreate,t,"bc");const{data:n,computed:i,methods:r,watch:l,provide:c,inject:d,created:a,beforeMount:h,mounted:m,beforeUpdate:y,updated:I,activated:b,deactivated:te,beforeDestroy:M,beforeUnmount:ne,destroyed:he,unmounted:V,render:ce,renderTracked:ct,renderTriggered:Ge,errorCaptured:dt,serverPrefetch:Xt,expose:Dt,inheritAttrs:fo,components:Vo,directives:Qt,filters:_}=e;if(d&&Qd(d,s,null),r)for(const q in r){const Y=r[q];F(Y)&&(s[q]=Y.bind(o))}if(n){const q=n.call(o,o);ve(q)&&(t.data=Zi(q))}if(_i=!0,i)for(const q in i){const Y=i[q],It=F(Y)?Y.bind(o,o):F(Y.get)?Y.get.bind(o,o):mt,Hs=!F(Y)&&F(Y.set)?Y.set.bind(o):mt,vo=qe({get:It,set:Hs});Object.defineProperty(s,q,{enumerable:!0,configurable:!0,get:()=>vo.value,set:Et=>vo.value=Et})}if(l)for(const q in l)Oa(l[q],s,o,q);if(c){const q=F(c)?c.call(o):c;Reflect.ownKeys(q).forEach(Y=>{iu(Y,q[Y])})}a&&Pr(a,t,"c");function Z(q,Y){L(Y)?Y.forEach(It=>q(It.bind(o))):Y&&q(Y.bind(o))}if(Z(jd,h),Z(Ia,m),Z(Nd,y),Z(Ud,I),Z(Dd,b),Z(Md,te),Z(Kd,dt),Z(Wd,ct),Z(qd,Ge),Z(Hd,ne),Z(Ea,V),Z(Zd,Xt),L(Dt))if(Dt.length){const q=t.exposed||(t.exposed={});Dt.forEach(Y=>{Object.defineProperty(q,Y,{get:()=>o[Y],set:It=>o[Y]=It,enumerable:!0})})}else t.exposed||(t.exposed={});ce&&t.render===mt&&(t.render=ce),fo!=null&&(t.inheritAttrs=fo),Vo&&(t.components=Vo),Qt&&(t.directives=Qt),Xt&&$a(t)}function Qd(t,e,o=mt){L(t)&&(t=yi(t));for(const s in t){const n=t[s];let i;ve(n)?"default"in n?i=nn(n.from||s,n.default,!0):i=nn(n.from||s):i=nn(n),je(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:r=>i.value=r}):e[s]=i}}function Pr(t,e,o){zt(L(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,o)}function Oa(t,e,o,s){let n=s.includes(".")?Ua(o,s):()=>o[s];if(Ie(t)){const i=e[t];F(i)&&rn(n,i)}else if(F(t))rn(n,t.bind(o));else if(ve(t))if(L(t))t.forEach(i=>Oa(i,e,o,s));else{const i=F(t.handler)?t.handler.bind(o):e[t.handler];F(i)&&rn(n,i,t)}}function Yi(t){const e=t.type,{mixins:o,extends:s}=e,{mixins:n,optionsCache:i,config:{optionMergeStrategies:r}}=t.appContext,l=i.get(e);let c;return l?c=l:!n.length&&!o&&!s?c=e:(c={},n.length&&n.forEach(d=>vn(c,d,r,!0)),vn(c,e,r)),ve(e)&&i.set(e,c),c}function vn(t,e,o,s=!1){const{mixins:n,extends:i}=e;i&&vn(t,i,o,!0),n&&n.forEach(r=>vn(t,r,o,!0));for(const r in e)if(!(s&&r==="expose")){const l=eu[r]||o&&o[r];t[r]=l?l(t[r],e[r]):e[r]}return t}const eu={data:Tr,props:Rr,emits:Rr,methods:vs,computed:vs,beforeCreate:He,created:He,beforeMount:He,mounted:He,beforeUpdate:He,updated:He,beforeDestroy:He,beforeUnmount:He,destroyed:He,unmounted:He,activated:He,deactivated:He,errorCaptured:He,serverPrefetch:He,components:vs,directives:vs,watch:ou,provide:Tr,inject:tu};function Tr(t,e){return e?t?function(){return Te(F(t)?t.call(this,this):t,F(e)?e.call(this,this):e)}:e:t}function tu(t,e){return vs(yi(t),yi(e))}function yi(t){if(L(t)){const e={};for(let o=0;o<t.length;o++)e[t[o]]=t[o];return e}return t}function He(t,e){return t?[...new Set([].concat(t,e))]:e}function vs(t,e){return t?Te(Object.create(null),t,e):e}function Rr(t,e){return t?L(t)&&L(e)?[...new Set([...t,...e])]:Te(Object.create(null),Or(t),Or(e??{})):e}function ou(t,e){if(!t)return e;if(!e)return t;const o=Te(Object.create(null),t);for(const s in e)o[s]=He(t[s],e[s]);return o}function Pa(){return{app:null,config:{isNativeTag:Kl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let su=0;function nu(t,e){return function(s,n=null){F(s)||(s=Te({},s)),n!=null&&!ve(n)&&(n=null);const i=Pa(),r=new WeakSet,l=[];let c=!1;const d=i.app={_uid:su++,_component:s,_props:n,_container:null,_context:i,_instance:null,version:Fu,get config(){return i.config},set config(a){},use(a,...h){return r.has(a)||(a&&F(a.install)?(r.add(a),a.install(d,...h)):F(a)&&(r.add(a),a(d,...h))),d},mixin(a){return i.mixins.includes(a)||i.mixins.push(a),d},component(a,h){return h?(i.components[a]=h,d):i.components[a]},directive(a,h){return h?(i.directives[a]=h,d):i.directives[a]},mount(a,h,m){if(!c){const y=d._ceVNode||le(s,n);return y.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),h&&e?e(y,a):t(y,a,m),c=!0,d._container=a,a.__vue_app__=d,Mn(y.component)}},onUnmount(a){l.push(a)},unmount(){c&&(zt(l,d._instance,16),t(null,d._container),delete d._container.__vue_app__)},provide(a,h){return i.provides[a]=h,d},runWithContext(a){const h=qo;qo=d;try{return a()}finally{qo=h}}};return d}}let qo=null;function iu(t,e){if(Me){let o=Me.provides;const s=Me.parent&&Me.parent.provides;s===o&&(o=Me.provides=Object.create(s)),o[t]=e}}function nn(t,e,o=!1){const s=Ru();if(s||qo){let n=qo?qo._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(n&&t in n)return n[t];if(arguments.length>1)return o&&F(e)?e.call(s&&s.proxy):e}}const Ta={},Ra=()=>Object.create(Ta),za=t=>Object.getPrototypeOf(t)===Ta;function ru(t,e,o,s=!1){const n={},i=Ra();t.propsDefaults=Object.create(null),Ba(t,e,n,i);for(const r in t.propsOptions[0])r in n||(n[r]=void 0);o?t.props=s?n:wd(n):t.type.props?t.props=n:t.props=i,t.attrs=i}function lu(t,e,o,s){const{props:n,attrs:i,vnode:{patchFlag:r}}=t,l=oe(n),[c]=t.propsOptions;let d=!1;if((s||r>0)&&!(r&16)){if(r&8){const a=t.vnode.dynamicProps;for(let h=0;h<a.length;h++){let m=a[h];if(Ln(t.emitsOptions,m))continue;const y=e[m];if(c)if(se(i,m))y!==i[m]&&(i[m]=y,d=!0);else{const I=pt(m);n[I]=xi(c,l,I,y,t,!1)}else y!==i[m]&&(i[m]=y,d=!0)}}}else{Ba(t,e,n,i)&&(d=!0);let a;for(const h in l)(!e||!se(e,h)&&((a=Po(h))===h||!se(e,a)))&&(c?o&&(o[h]!==void 0||o[a]!==void 0)&&(n[h]=xi(c,l,h,void 0,t,!0)):delete n[h]);if(i!==l)for(const h in i)(!e||!se(e,h))&&(delete i[h],d=!0)}d&&Nt(t.attrs,"set","")}function Ba(t,e,o,s){const[n,i]=t.propsOptions;let r=!1,l;if(e)for(let c in e){if(bs(c))continue;const d=e[c];let a;n&&se(n,a=pt(c))?!i||!i.includes(a)?o[a]=d:(l||(l={}))[a]=d:Ln(t.emitsOptions,c)||(!(c in s)||d!==s[c])&&(s[c]=d,r=!0)}if(i){const c=oe(o),d=l||de;for(let a=0;a<i.length;a++){const h=i[a];o[h]=xi(n,c,h,d[h],t,!se(d,h))}}return r}function xi(t,e,o,s,n,i){const r=t[o];if(r!=null){const l=se(r,"default");if(l&&s===void 0){const c=r.default;if(r.type!==Function&&!r.skipFactory&&F(c)){const{propsDefaults:d}=n;if(o in d)s=d[o];else{const a=Fs(n);s=d[o]=c.call(null,e),a()}}else s=c;n.ce&&n.ce._setProp(o,s)}r[0]&&(i&&!l?s=!1:r[1]&&(s===""||s===Po(o))&&(s=!0))}return s}const au=new WeakMap;function Va(t,e,o=!1){const s=o?au:e.propsCache,n=s.get(t);if(n)return n;const i=t.props,r={},l=[];let c=!1;if(!F(t)){const a=h=>{c=!0;const[m,y]=Va(h,e,!0);Te(r,m),y&&l.push(...y)};!o&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}if(!i&&!c)return ve(t)&&s.set(t,No),No;if(L(i))for(let a=0;a<i.length;a++){const h=pt(i[a]);zr(h)&&(r[h]=de)}else if(i)for(const a in i){const h=pt(a);if(zr(h)){const m=i[a],y=r[h]=L(m)||F(m)?{type:m}:Te({},m),I=y.type;let b=!1,te=!0;if(L(I))for(let M=0;M<I.length;++M){const ne=I[M],he=F(ne)&&ne.name;if(he==="Boolean"){b=!0;break}else he==="String"&&(te=!1)}else b=F(I)&&I.name==="Boolean";y[0]=b,y[1]=te,(b||se(y,"default"))&&l.push(h)}}const d=[r,l];return ve(t)&&s.set(t,d),d}function zr(t){return t[0]!=="$"&&!bs(t)}const Ji=t=>t==="_"||t==="_ctx"||t==="$stable",Xi=t=>L(t)?t.map(Tt):[Tt(t)],cu=(t,e,o)=>{if(e._n)return e;const s=Qe((...n)=>Xi(e(...n)),o);return s._c=!1,s},La=(t,e,o)=>{const s=t._ctx;for(const n in t){if(Ji(n))continue;const i=t[n];if(F(i))e[n]=cu(n,i,s);else if(i!=null){const r=Xi(i);e[n]=()=>r}}},Da=(t,e)=>{const o=Xi(e);t.slots.default=()=>o},Ma=(t,e,o)=>{for(const s in e)(o||!Ji(s))&&(t[s]=e[s])},du=(t,e,o)=>{const s=t.slots=Ra();if(t.vnode.shapeFlag&32){const n=e._;n?(Ma(s,e,o),o&&Xl(s,"_",n,!0)):La(e,s)}else e&&Da(t,e)},uu=(t,e,o)=>{const{vnode:s,slots:n}=t;let i=!0,r=de;if(s.shapeFlag&32){const l=e._;l?o&&l===1?i=!1:Ma(n,e,o):(i=!e.$stable,La(e,n)),r=e}else e&&(Da(t,e),r={default:1});if(i)for(const l in n)!Ji(l)&&r[l]==null&&delete n[l]},it=ku;function hu(t){return pu(t)}function pu(t,e){const o=Tn();o.__VUE__=!0;const{insert:s,remove:n,patchProp:i,createElement:r,createText:l,createComment:c,setText:d,setElementText:a,parentNode:h,nextSibling:m,setScopeId:y=mt,insertStaticContent:I}=t,b=(u,f,g,k=null,x=null,C=null,O=void 0,A=null,E=!!f.dynamicChildren)=>{if(u===f)return;u&&!us(u,f)&&(k=Zs(u),Et(u,x,C,!0),u=null),f.patchFlag===-2&&(E=!1,f.dynamicChildren=null);const{type:S,ref:B,shapeFlag:T}=f;switch(S){case Dn:te(u,f,g,k);break;case ro:M(u,f,g,k);break;case ri:u==null&&ne(f,g,k,O);break;case et:Vo(u,f,g,k,x,C,O,A,E);break;default:T&1?ce(u,f,g,k,x,C,O,A,E):T&6?Qt(u,f,g,k,x,C,O,A,E):(T&64||T&128)&&S.process(u,f,g,k,x,C,O,A,E,Lo)}B!=null&&x?ys(B,u&&u.ref,C,f||u,!f):B==null&&u&&u.ref!=null&&ys(u.ref,null,C,u,!0)},te=(u,f,g,k)=>{if(u==null)s(f.el=l(f.children),g,k);else{const x=f.el=u.el;f.children!==u.children&&d(x,f.children)}},M=(u,f,g,k)=>{u==null?s(f.el=c(f.children||""),g,k):f.el=u.el},ne=(u,f,g,k)=>{[u.el,u.anchor]=I(u.children,f,g,k,u.el,u.anchor)},he=({el:u,anchor:f},g,k)=>{let x;for(;u&&u!==f;)x=m(u),s(u,g,k),u=x;s(f,g,k)},V=({el:u,anchor:f})=>{let g;for(;u&&u!==f;)g=m(u),n(u),u=g;n(f)},ce=(u,f,g,k,x,C,O,A,E)=>{f.type==="svg"?O="svg":f.type==="math"&&(O="mathml"),u==null?ct(f,g,k,x,C,O,A,E):Xt(u,f,x,C,O,A,E)},ct=(u,f,g,k,x,C,O,A)=>{let E,S;const{props:B,shapeFlag:T,transition:R,dirs:D}=u;if(E=u.el=r(u.type,C,B&&B.is,B),T&8?a(E,u.children):T&16&&dt(u.children,E,null,k,x,ni(u,C),O,A),D&&go(u,null,k,"created"),Ge(E,u,u.scopeId,O,k),B){for(const pe in B)pe!=="value"&&!bs(pe)&&i(E,pe,null,B[pe],C,k);"value"in B&&i(E,"value",null,B.value,C),(S=B.onVnodeBeforeMount)&&Ot(S,k,u)}D&&go(u,null,k,"beforeMount");const J=fu(x,R);J&&R.beforeEnter(E),s(E,f,g),((S=B&&B.onVnodeMounted)||J||D)&&it(()=>{S&&Ot(S,k,u),J&&R.enter(E),D&&go(u,null,k,"mounted")},x)},Ge=(u,f,g,k,x)=>{if(g&&y(u,g),k)for(let C=0;C<k.length;C++)y(u,k[C]);if(x){let C=x.subTree;if(f===C||Za(C.type)&&(C.ssContent===f||C.ssFallback===f)){const O=x.vnode;Ge(u,O,O.scopeId,O.slotScopeIds,x.parent)}}},dt=(u,f,g,k,x,C,O,A,E=0)=>{for(let S=E;S<u.length;S++){const B=u[S]=A?to(u[S]):Tt(u[S]);b(null,B,f,g,k,x,C,O,A)}},Xt=(u,f,g,k,x,C,O)=>{const A=f.el=u.el;let{patchFlag:E,dynamicChildren:S,dirs:B}=f;E|=u.patchFlag&16;const T=u.props||de,R=f.props||de;let D;if(g&&bo(g,!1),(D=R.onVnodeBeforeUpdate)&&Ot(D,g,f,u),B&&go(f,u,g,"beforeUpdate"),g&&bo(g,!0),(T.innerHTML&&R.innerHTML==null||T.textContent&&R.textContent==null)&&a(A,""),S?Dt(u.dynamicChildren,S,A,g,k,ni(f,x),C):O||Y(u,f,A,null,g,k,ni(f,x),C,!1),E>0){if(E&16)fo(A,T,R,g,x);else if(E&2&&T.class!==R.class&&i(A,"class",null,R.class,x),E&4&&i(A,"style",T.style,R.style,x),E&8){const J=f.dynamicProps;for(let pe=0;pe<J.length;pe++){const ie=J[pe],Ye=T[ie],Le=R[ie];(Le!==Ye||ie==="value")&&i(A,ie,Ye,Le,x,g)}}E&1&&u.children!==f.children&&a(A,f.children)}else!O&&S==null&&fo(A,T,R,g,x);((D=R.onVnodeUpdated)||B)&&it(()=>{D&&Ot(D,g,f,u),B&&go(f,u,g,"updated")},k)},Dt=(u,f,g,k,x,C,O)=>{for(let A=0;A<f.length;A++){const E=u[A],S=f[A],B=E.el&&(E.type===et||!us(E,S)||E.shapeFlag&198)?h(E.el):g;b(E,S,B,null,k,x,C,O,!0)}},fo=(u,f,g,k,x)=>{if(f!==g){if(f!==de)for(const C in f)!bs(C)&&!(C in g)&&i(u,C,f[C],null,x,k);for(const C in g){if(bs(C))continue;const O=g[C],A=f[C];O!==A&&C!=="value"&&i(u,C,A,O,x,k)}"value"in g&&i(u,"value",f.value,g.value,x)}},Vo=(u,f,g,k,x,C,O,A,E)=>{const S=f.el=u?u.el:l(""),B=f.anchor=u?u.anchor:l("");let{patchFlag:T,dynamicChildren:R,slotScopeIds:D}=f;D&&(A=A?A.concat(D):D),u==null?(s(S,g,k),s(B,g,k),dt(f.children||[],g,B,x,C,O,A,E)):T>0&&T&64&&R&&u.dynamicChildren?(Dt(u.dynamicChildren,R,g,x,C,O,A),(f.key!=null||x&&f===x.subTree)&&Fa(u,f,!0)):Y(u,f,g,B,x,C,O,A,E)},Qt=(u,f,g,k,x,C,O,A,E)=>{f.slotScopeIds=A,u==null?f.shapeFlag&512?x.ctx.activate(f,g,k,O,E):_(f,g,k,x,C,O,E):P(u,f,E)},_=(u,f,g,k,x,C,O)=>{const A=u.component=Tu(u,k,x);if(ka(u)&&(A.ctx.renderer=Lo),zu(A,!1,O),A.asyncDep){if(x&&x.registerDep(A,Z,O),!u.el){const E=A.subTree=le(ro);M(null,E,f,g),u.placeholder=E.el}}else Z(A,u,f,g,x,C,O)},P=(u,f,g)=>{const k=f.component=u.component;if(Cu(u,f,g))if(k.asyncDep&&!k.asyncResolved){q(k,f,g);return}else k.next=f,k.update();else f.el=u.el,k.vnode=f},Z=(u,f,g,k,x,C,O)=>{const A=()=>{if(u.isMounted){let{next:T,bu:R,u:D,parent:J,vnode:pe}=u;{const st=ja(u);if(st){T&&(T.el=pe.el,q(u,T,O)),st.asyncDep.then(()=>{u.isUnmounted||A()});return}}let ie=T,Ye;bo(u,!1),T?(T.el=pe.el,q(u,T,O)):T=pe,R&&sn(R),(Ye=T.props&&T.props.onVnodeBeforeUpdate)&&Ot(Ye,J,T,pe),bo(u,!0);const Le=ii(u),gt=u.subTree;u.subTree=Le,b(gt,Le,h(gt.el),Zs(gt),u,x,C),T.el=Le.el,ie===null&&$u(u,Le.el),D&&it(D,x),(Ye=T.props&&T.props.onVnodeUpdated)&&it(()=>Ot(Ye,J,T,pe),x)}else{let T;const{el:R,props:D}=f,{bm:J,m:pe,parent:ie,root:Ye,type:Le}=u,gt=xs(f);if(bo(u,!1),J&&sn(J),!gt&&(T=D&&D.onVnodeBeforeMount)&&Ot(T,ie,f),bo(u,!0),R&&Jn){const st=()=>{u.subTree=ii(u),Jn(R,u.subTree,u,x,null)};gt&&Le.__asyncHydrate?Le.__asyncHydrate(R,u,st):st()}else{Ye.ce&&Ye.ce._def.shadowRoot!==!1&&Ye.ce._injectChildStyle(Le);const st=u.subTree=ii(u);b(null,st,g,k,u,x,C),f.el=st.el}if(pe&&it(pe,x),!gt&&(T=D&&D.onVnodeMounted)){const st=f;it(()=>Ot(T,ie,st),x)}(f.shapeFlag&256||ie&&xs(ie.vnode)&&ie.vnode.shapeFlag&256)&&u.a&&it(u.a,x),u.isMounted=!0,f=g=k=null}};u.scope.on();const E=u.effect=new oa(A);u.scope.off();const S=u.update=E.run.bind(E),B=u.job=E.runIfDirty.bind(E);B.i=u,B.id=u.uid,E.scheduler=()=>Ki(B),bo(u,!0),S()},q=(u,f,g)=>{f.component=u;const k=u.vnode.props;u.vnode=f,u.next=null,lu(u,f.props,k,g),uu(u,f.children,g),Wt(),Er(u),Kt()},Y=(u,f,g,k,x,C,O,A,E=!1)=>{const S=u&&u.children,B=u?u.shapeFlag:0,T=f.children,{patchFlag:R,shapeFlag:D}=f;if(R>0){if(R&128){Hs(S,T,g,k,x,C,O,A,E);return}else if(R&256){It(S,T,g,k,x,C,O,A,E);return}}D&8?(B&16&&as(S,x,C),T!==S&&a(g,T)):B&16?D&16?Hs(S,T,g,k,x,C,O,A,E):as(S,x,C,!0):(B&8&&a(g,""),D&16&&dt(T,g,k,x,C,O,A,E))},It=(u,f,g,k,x,C,O,A,E)=>{u=u||No,f=f||No;const S=u.length,B=f.length,T=Math.min(S,B);let R;for(R=0;R<T;R++){const D=f[R]=E?to(f[R]):Tt(f[R]);b(u[R],D,g,null,x,C,O,A,E)}S>B?as(u,x,C,!0,!1,T):dt(f,g,k,x,C,O,A,E,T)},Hs=(u,f,g,k,x,C,O,A,E)=>{let S=0;const B=f.length;let T=u.length-1,R=B-1;for(;S<=T&&S<=R;){const D=u[S],J=f[S]=E?to(f[S]):Tt(f[S]);if(us(D,J))b(D,J,g,null,x,C,O,A,E);else break;S++}for(;S<=T&&S<=R;){const D=u[T],J=f[R]=E?to(f[R]):Tt(f[R]);if(us(D,J))b(D,J,g,null,x,C,O,A,E);else break;T--,R--}if(S>T){if(S<=R){const D=R+1,J=D<B?f[D].el:k;for(;S<=R;)b(null,f[S]=E?to(f[S]):Tt(f[S]),g,J,x,C,O,A,E),S++}}else if(S>R)for(;S<=T;)Et(u[S],x,C,!0),S++;else{const D=S,J=S,pe=new Map;for(S=J;S<=R;S++){const nt=f[S]=E?to(f[S]):Tt(f[S]);nt.key!=null&&pe.set(nt.key,S)}let ie,Ye=0;const Le=R-J+1;let gt=!1,st=0;const cs=new Array(Le);for(S=0;S<Le;S++)cs[S]=0;for(S=D;S<=T;S++){const nt=u[S];if(Ye>=Le){Et(nt,x,C,!0);continue}let At;if(nt.key!=null)At=pe.get(nt.key);else for(ie=J;ie<=R;ie++)if(cs[ie-J]===0&&us(nt,f[ie])){At=ie;break}At===void 0?Et(nt,x,C,!0):(cs[At-J]=S+1,At>=st?st=At:gt=!0,b(nt,f[At],g,null,x,C,O,A,E),Ye++)}const xr=gt?vu(cs):No;for(ie=xr.length-1,S=Le-1;S>=0;S--){const nt=J+S,At=f[nt],wr=f[nt+1],Cr=nt+1<B?wr.el||wr.placeholder:k;cs[S]===0?b(null,At,g,Cr,x,C,O,A,E):gt&&(ie<0||S!==xr[ie]?vo(At,g,Cr,2):ie--)}}},vo=(u,f,g,k,x=null)=>{const{el:C,type:O,transition:A,children:E,shapeFlag:S}=u;if(S&6){vo(u.component.subTree,f,g,k);return}if(S&128){u.suspense.move(f,g,k);return}if(S&64){O.move(u,f,g,Lo);return}if(O===et){s(C,f,g);for(let T=0;T<E.length;T++)vo(E[T],f,g,k);s(u.anchor,f,g);return}if(O===ri){he(u,f,g);return}if(k!==2&&S&1&&A)if(k===0)A.beforeEnter(C),s(C,f,g),it(()=>A.enter(C),x);else{const{leave:T,delayLeave:R,afterLeave:D}=A,J=()=>{u.ctx.isUnmounted?n(C):s(C,f,g)},pe=()=>{C._isLeaving&&C[Ld](!0),T(C,()=>{J(),D&&D()})};R?R(C,J,pe):pe()}else s(C,f,g)},Et=(u,f,g,k=!1,x=!1)=>{const{type:C,props:O,ref:A,children:E,dynamicChildren:S,shapeFlag:B,patchFlag:T,dirs:R,cacheIndex:D}=u;if(T===-2&&(x=!1),A!=null&&(Wt(),ys(A,null,g,u,!0),Kt()),D!=null&&(f.renderCache[D]=void 0),B&256){f.ctx.deactivate(u);return}const J=B&1&&R,pe=!xs(u);let ie;if(pe&&(ie=O&&O.onVnodeBeforeUnmount)&&Ot(ie,f,u),B&6)Hc(u.component,g,k);else{if(B&128){u.suspense.unmount(g,k);return}J&&go(u,null,f,"beforeUnmount"),B&64?u.type.remove(u,f,g,Lo,k):S&&!S.hasOnce&&(C!==et||T>0&&T&64)?as(S,f,g,!1,!0):(C===et&&T&384||!x&&B&16)&&as(E,f,g),k&&_r(u)}(pe&&(ie=O&&O.onVnodeUnmounted)||J)&&it(()=>{ie&&Ot(ie,f,u),J&&go(u,null,f,"unmounted")},g)},_r=u=>{const{type:f,el:g,anchor:k,transition:x}=u;if(f===et){Uc(g,k);return}if(f===ri){V(u);return}const C=()=>{n(g),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(u.shapeFlag&1&&x&&!x.persisted){const{leave:O,delayLeave:A}=x,E=()=>O(g,C);A?A(u.el,C,E):E()}else C()},Uc=(u,f)=>{let g;for(;u!==f;)g=m(u),n(u),u=g;n(f)},Hc=(u,f,g)=>{const{bum:k,scope:x,job:C,subTree:O,um:A,m:E,a:S}=u;Br(E),Br(S),k&&sn(k),x.stop(),C&&(C.flags|=8,Et(O,u,f,g)),A&&it(A,f),it(()=>{u.isUnmounted=!0},f)},as=(u,f,g,k=!1,x=!1,C=0)=>{for(let O=C;O<u.length;O++)Et(u[O],f,g,k,x)},Zs=u=>{if(u.shapeFlag&6)return Zs(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const f=m(u.anchor||u.el),g=f&&f[Bd];return g?m(g):f};let Gn=!1;const yr=(u,f,g)=>{u==null?f._vnode&&Et(f._vnode,null,null,!0):b(f._vnode||null,u,f,null,null,null,g),f._vnode=u,Gn||(Gn=!0,Er(),xa(),Gn=!1)},Lo={p:b,um:Et,m:vo,r:_r,mt:_,mc:dt,pc:Y,pbc:Dt,n:Zs,o:t};let Yn,Jn;return e&&([Yn,Jn]=e(Lo)),{render:yr,hydrate:Yn,createApp:nu(yr,Yn)}}function ni({type:t,props:e},o){return o==="svg"&&t==="foreignObject"||o==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:o}function bo({effect:t,job:e},o){o?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function fu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Fa(t,e,o=!1){const s=t.children,n=e.children;if(L(s)&&L(n))for(let i=0;i<s.length;i++){const r=s[i];let l=n[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=n[i]=to(n[i]),l.el=r.el),!o&&l.patchFlag!==-2&&Fa(r,l)),l.type===Dn&&l.patchFlag!==-1&&(l.el=r.el),l.type===ro&&!l.el&&(l.el=r.el)}}function vu(t){const e=t.slice(),o=[0];let s,n,i,r,l;const c=t.length;for(s=0;s<c;s++){const d=t[s];if(d!==0){if(n=o[o.length-1],t[n]<d){e[s]=n,o.push(s);continue}for(i=0,r=o.length-1;i<r;)l=i+r>>1,t[o[l]]<d?i=l+1:r=l;d<t[o[i]]&&(i>0&&(e[s]=o[i-1]),o[i]=s)}}for(i=o.length,r=o[i-1];i-- >0;)o[i]=r,r=e[r];return o}function ja(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ja(e)}function Br(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const gu=Symbol.for("v-scx"),bu=()=>nn(gu);function rn(t,e,o){return Na(t,e,o)}function Na(t,e,o=de){const{immediate:s,deep:n,flush:i,once:r}=o,l=Te({},o),c=e&&s||!e&&i!=="post";let d;if(Ps){if(i==="sync"){const y=bu();d=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=mt,y.resume=mt,y.pause=mt,y}}const a=Me;l.call=(y,I,b)=>zt(y,a,I,b);let h=!1;i==="post"?l.scheduler=y=>{it(y,a&&a.suspense)}:i!=="sync"&&(h=!0,l.scheduler=(y,I)=>{I?y():Ki(y)}),l.augmentJob=y=>{e&&(y.flags|=4),h&&(y.flags|=2,a&&(y.id=a.uid,y.i=a))};const m=Pd(t,e,l);return Ps&&(d?d.push(m):c&&m()),m}function mu(t,e,o){const s=this.proxy,n=Ie(t)?t.includes(".")?Ua(s,t):()=>s[t]:t.bind(s,s);let i;F(e)?i=e:(i=e.handler,o=e);const r=Fs(this),l=Na(n,i.bind(s),o);return r(),l}function Ua(t,e){const o=e.split(".");return()=>{let s=t;for(let n=0;n<o.length&&s;n++)s=s[o[n]];return s}}const _u=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${pt(e)}Modifiers`]||t[`${Po(e)}Modifiers`];function yu(t,e,...o){if(t.isUnmounted)return;const s=t.vnode.props||de;let n=o;const i=e.startsWith("update:"),r=i&&_u(s,e.slice(7));r&&(r.trim&&(n=o.map(a=>Ie(a)?a.trim():a)),r.number&&(n=o.map(dn)));let l,c=s[l=Xn(e)]||s[l=Xn(pt(e))];!c&&i&&(c=s[l=Xn(Po(e))]),c&&zt(c,t,6,n);const d=s[l+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,zt(d,t,6,n)}}function Ha(t,e,o=!1){const s=e.emitsCache,n=s.get(t);if(n!==void 0)return n;const i=t.emits;let r={},l=!1;if(!F(t)){const c=d=>{const a=Ha(d,e,!0);a&&(l=!0,Te(r,a))};!o&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(ve(t)&&s.set(t,null),null):(L(i)?i.forEach(c=>r[c]=null):Te(r,i),ve(t)&&s.set(t,r),r)}function Ln(t,e){return!t||!An(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,Po(e))||se(t,e))}function ii(t){const{type:e,vnode:o,proxy:s,withProxy:n,propsOptions:[i],slots:r,attrs:l,emit:c,render:d,renderCache:a,props:h,data:m,setupState:y,ctx:I,inheritAttrs:b}=t,te=fn(t);let M,ne;try{if(o.shapeFlag&4){const V=n||s,ce=V;M=Tt(d.call(ce,V,a,h,y,m,I)),ne=l}else{const V=e;M=Tt(V.length>1?V(h,{attrs:l,slots:r,emit:c}):V(h,null)),ne=e.props?l:xu(l)}}catch(V){Cs.length=0,zn(V,t,1),M=le(ro)}let he=M;if(ne&&b!==!1){const V=Object.keys(ne),{shapeFlag:ce}=he;V.length&&ce&7&&(i&&V.some(Bi)&&(ne=wu(ne,i)),he=Ko(he,ne,!1,!0))}return o.dirs&&(he=Ko(he,null,!1,!0),he.dirs=he.dirs?he.dirs.concat(o.dirs):o.dirs),o.transition&&Gi(he,o.transition),M=he,fn(te),M}const xu=t=>{let e;for(const o in t)(o==="class"||o==="style"||An(o))&&((e||(e={}))[o]=t[o]);return e},wu=(t,e)=>{const o={};for(const s in t)(!Bi(s)||!(s.slice(9)in e))&&(o[s]=t[s]);return o};function Cu(t,e,o){const{props:s,children:n,component:i}=t,{props:r,children:l,patchFlag:c}=e,d=i.emitsOptions;if(e.dirs||e.transition)return!0;if(o&&c>=0){if(c&1024)return!0;if(c&16)return s?Vr(s,r,d):!!r;if(c&8){const a=e.dynamicProps;for(let h=0;h<a.length;h++){const m=a[h];if(r[m]!==s[m]&&!Ln(d,m))return!0}}}else return(n||l)&&(!l||!l.$stable)?!0:s===r?!1:s?r?Vr(s,r,d):!0:!!r;return!1}function Vr(t,e,o){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let n=0;n<s.length;n++){const i=s[n];if(e[i]!==t[i]&&!Ln(o,i))return!0}return!1}function $u({vnode:t,parent:e},o){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=o,e=e.parent;else break}}const Za=t=>t.__isSuspense;function ku(t,e){e&&e.pendingBranch?L(t)?e.effects.push(...t):e.effects.push(t):zd(t)}const et=Symbol.for("v-fgt"),Dn=Symbol.for("v-txt"),ro=Symbol.for("v-cmt"),ri=Symbol.for("v-stc"),Cs=[];let lt=null;function N(t=!1){Cs.push(lt=t?null:[])}function Su(){Cs.pop(),lt=Cs[Cs.length-1]||null}let Os=1;function Lr(t,e=!1){Os+=t,t<0&&lt&&e&&(lt.hasOnce=!0)}function qa(t){return t.dynamicChildren=Os>0?lt||No:null,Su(),Os>0&&lt&&lt.push(t),t}function U(t,e,o,s,n,i){return qa(v(t,e,o,s,n,i,!0))}function wi(t,e,o,s,n){return qa(le(t,e,o,s,n,!0))}function Wa(t){return t?t.__v_isVNode===!0:!1}function us(t,e){return t.type===e.type&&t.key===e.key}const Ka=({key:t})=>t??null,ln=({ref:t,ref_key:e,ref_for:o})=>(typeof t=="number"&&(t=""+t),t!=null?Ie(t)||je(t)||F(t)?{i:rt,r:t,k:e,f:!!o}:t:null);function v(t,e=null,o=null,s=0,n=null,i=t===et?0:1,r=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ka(e),ref:e&&ln(e),scopeId:Ca,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:rt};return l?(Qi(c,o),i&128&&t.normalize(c)):o&&(c.shapeFlag|=Ie(o)?8:16),Os>0&&!r&&lt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&lt.push(c),c}const le=Iu;function Iu(t,e=null,o=null,s=0,n=null,i=!1){if((!t||t===Gd)&&(t=ro),Wa(t)){const l=Ko(t,e,!0);return o&&Qi(l,o),Os>0&&!i&&lt&&(l.shapeFlag&6?lt[lt.indexOf(t)]=l:lt.push(l)),l.patchFlag=-2,l}if(Mu(t)&&(t=t.__vccOpts),e){e=Eu(e);let{class:l,style:c}=e;l&&!Ie(l)&&(e.class=oo(l)),ve(c)&&(Wi(c)&&!L(c)&&(c=Te({},c)),e.style=Di(c))}const r=Ie(t)?1:Za(t)?128:Vd(t)?64:ve(t)?4:F(t)?2:0;return v(t,e,o,s,n,r,i,!0)}function Eu(t){return t?Wi(t)||za(t)?Te({},t):t:null}function Ko(t,e,o=!1,s=!1){const{props:n,ref:i,patchFlag:r,children:l,transition:c}=t,d=e?Au(n||{},e):n,a={__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&Ka(d),ref:e&&e.ref?o&&i?L(i)?i.concat(ln(e)):[i,ln(e)]:ln(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==et?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ko(t.ssContent),ssFallback:t.ssFallback&&Ko(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&Gi(a,c.clone(a)),a}function Pe(t=" ",e=0){return le(Dn,null,t,e)}function Ae(t="",e=!1){return e?(N(),wi(ro,null,t)):le(ro,null,t)}function Tt(t){return t==null||typeof t=="boolean"?le(ro):L(t)?le(et,null,t.slice()):Wa(t)?to(t):le(Dn,null,String(t))}function to(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ko(t)}function Qi(t,e){let o=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(L(e))o=16;else if(typeof e=="object")if(s&65){const n=e.default;n&&(n._c&&(n._d=!1),Qi(t,n()),n._c&&(n._d=!0));return}else{o=32;const n=e._;!n&&!za(e)?e._ctx=rt:n===3&&rt&&(rt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else F(e)?(e={default:e,_ctx:rt},o=32):(e=String(e),s&64?(o=16,e=[Pe(e)]):o=8);t.children=e,t.shapeFlag|=o}function Au(...t){const e={};for(let o=0;o<t.length;o++){const s=t[o];for(const n in s)if(n==="class")e.class!==s.class&&(e.class=oo([e.class,s.class]));else if(n==="style")e.style=Di([e.style,s.style]);else if(An(n)){const i=e[n],r=s[n];r&&i!==r&&!(L(i)&&i.includes(r))&&(e[n]=i?[].concat(i,r):r)}else n!==""&&(e[n]=s[n])}return e}function Ot(t,e,o,s=null){zt(t,e,7,[o,s])}const Ou=Pa();let Pu=0;function Tu(t,e,o){const s=t.type,n=(e?e.appContext:t.appContext)||Ou,i={uid:Pu++,vnode:t,type:s,parent:e,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new od(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(n.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Va(s,n),emitsOptions:Ha(s,n),emit:null,emitted:null,propsDefaults:de,inheritAttrs:s.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=yu.bind(null,i),t.ce&&t.ce(i),i}let Me=null;const Ru=()=>Me||rt;let gn,Ci;{const t=Tn(),e=(o,s)=>{let n;return(n=t[o])||(n=t[o]=[]),n.push(s),i=>{n.length>1?n.forEach(r=>r(i)):n[0](i)}};gn=e("__VUE_INSTANCE_SETTERS__",o=>Me=o),Ci=e("__VUE_SSR_SETTERS__",o=>Ps=o)}const Fs=t=>{const e=Me;return gn(t),t.scope.on(),()=>{t.scope.off(),gn(e)}},Dr=()=>{Me&&Me.scope.off(),gn(null)};function Ga(t){return t.vnode.shapeFlag&4}let Ps=!1;function zu(t,e=!1,o=!1){e&&Ci(e);const{props:s,children:n}=t.vnode,i=Ga(t);ru(t,s,i,e),du(t,n,o||e);const r=i?Bu(t,e):void 0;return e&&Ci(!1),r}function Bu(t,e){const o=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Jd);const{setup:s}=o;if(s){Wt();const n=t.setupContext=s.length>1?Lu(t):null,i=Fs(t),r=Ms(s,t,0,[t.props,n]),l=Gl(r);if(Kt(),i(),(l||t.sp)&&!xs(t)&&$a(t),l){if(r.then(Dr,Dr),e)return r.then(c=>{Mr(t,c,e)}).catch(c=>{zn(c,t,0)});t.asyncDep=r}else Mr(t,r,e)}else Ya(t,e)}function Mr(t,e,o){F(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ve(e)&&(t.setupState=ba(e)),Ya(t,o)}let Fr;function Ya(t,e,o){const s=t.type;if(!t.render){if(!e&&Fr&&!s.render){const n=s.template||Yi(t).template;if(n){const{isCustomElement:i,compilerOptions:r}=t.appContext.config,{delimiters:l,compilerOptions:c}=s,d=Te(Te({isCustomElement:i,delimiters:l},r),c);s.render=Fr(n,d)}}t.render=s.render||mt}{const n=Fs(t);Wt();try{Xd(t)}finally{Kt(),n()}}}const Vu={get(t,e){return De(t,"get",""),t[e]}};function Lu(t){const e=o=>{t.exposed=o||{}};return{attrs:new Proxy(t.attrs,Vu),slots:t.slots,emit:t.emit,expose:e}}function Mn(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ba(Cd(t.exposed)),{get(e,o){if(o in e)return e[o];if(o in ws)return ws[o](t)},has(e,o){return o in e||o in ws}})):t.proxy}function Du(t,e=!0){return F(t)?t.displayName||t.name:t.name||e&&t.__name}function Mu(t){return F(t)&&"__vccOpts"in t}const qe=(t,e)=>Ad(t,e,Ps),Fu="3.5.19";/**
* @vue/runtime-dom v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $i;const jr=typeof window<"u"&&window.trustedTypes;if(jr)try{$i=jr.createPolicy("vue",{createHTML:t=>t})}catch{}const Ja=$i?t=>$i.createHTML(t):t=>t,ju="http://www.w3.org/2000/svg",Nu="http://www.w3.org/1998/Math/MathML",jt=typeof document<"u"?document:null,Nr=jt&&jt.createElement("template"),Uu={insert:(t,e,o)=>{e.insertBefore(t,o||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,o,s)=>{const n=e==="svg"?jt.createElementNS(ju,t):e==="mathml"?jt.createElementNS(Nu,t):o?jt.createElement(t,{is:o}):jt.createElement(t);return t==="select"&&s&&s.multiple!=null&&n.setAttribute("multiple",s.multiple),n},createText:t=>jt.createTextNode(t),createComment:t=>jt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>jt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,o,s,n,i){const r=o?o.previousSibling:e.lastChild;if(n&&(n===i||n.nextSibling))for(;e.insertBefore(n.cloneNode(!0),o),!(n===i||!(n=n.nextSibling)););else{Nr.innerHTML=Ja(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=Nr.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,o)}return[r?r.nextSibling:e.firstChild,o?o.previousSibling:e.lastChild]}},Hu=Symbol("_vtc");function Zu(t,e,o){const s=t[Hu];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):o?t.setAttribute("class",e):t.className=e}const Ur=Symbol("_vod"),qu=Symbol("_vsh"),Wu=Symbol(""),Ku=/(^|;)\s*display\s*:/;function Gu(t,e,o){const s=t.style,n=Ie(o);let i=!1;if(o&&!n){if(e)if(Ie(e))for(const r of e.split(";")){const l=r.slice(0,r.indexOf(":")).trim();o[l]==null&&an(s,l,"")}else for(const r in e)o[r]==null&&an(s,r,"");for(const r in o)r==="display"&&(i=!0),an(s,r,o[r])}else if(n){if(e!==o){const r=s[Wu];r&&(o+=";"+r),s.cssText=o,i=Ku.test(o)}}else e&&t.removeAttribute("style");Ur in t&&(t[Ur]=i?s.display:"",t[qu]&&(s.display="none"))}const Hr=/\s*!important$/;function an(t,e,o){if(L(o))o.forEach(s=>an(t,e,s));else if(o==null&&(o=""),e.startsWith("--"))t.setProperty(e,o);else{const s=Yu(t,e);Hr.test(o)?t.setProperty(Po(s),o.replace(Hr,""),"important"):t[s]=o}}const Zr=["Webkit","Moz","ms"],li={};function Yu(t,e){const o=li[e];if(o)return o;let s=pt(e);if(s!=="filter"&&s in t)return li[e]=s;s=Pn(s);for(let n=0;n<Zr.length;n++){const i=Zr[n]+s;if(i in t)return li[e]=i}return e}const qr="http://www.w3.org/1999/xlink";function Wr(t,e,o,s,n,i=ed(e)){s&&e.startsWith("xlink:")?o==null?t.removeAttributeNS(qr,e.slice(6,e.length)):t.setAttributeNS(qr,e,o):o==null||i&&!Ql(o)?t.removeAttribute(e):t.setAttribute(e,i?"":Rt(o)?String(o):o)}function Kr(t,e,o,s,n){if(e==="innerHTML"||e==="textContent"){o!=null&&(t[e]=e==="innerHTML"?Ja(o):o);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=o==null?t.type==="checkbox"?"on":"":String(o);(l!==c||!("_value"in t))&&(t.value=c),o==null&&t.removeAttribute(e),t._value=o;return}let r=!1;if(o===""||o==null){const l=typeof t[e];l==="boolean"?o=Ql(o):o==null&&l==="string"?(o="",r=!0):l==="number"&&(o=0,r=!0)}try{t[e]=o}catch{}r&&t.removeAttribute(n||e)}function Ht(t,e,o,s){t.addEventListener(e,o,s)}function Ju(t,e,o,s){t.removeEventListener(e,o,s)}const Gr=Symbol("_vei");function Xu(t,e,o,s,n=null){const i=t[Gr]||(t[Gr]={}),r=i[e];if(s&&r)r.value=s;else{const[l,c]=Qu(e);if(s){const d=i[e]=oh(s,n);Ht(t,l,d,c)}else r&&(Ju(t,l,r,c),i[e]=void 0)}}const Yr=/(?:Once|Passive|Capture)$/;function Qu(t){let e;if(Yr.test(t)){e={};let s;for(;s=t.match(Yr);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Po(t.slice(2)),e]}let ai=0;const eh=Promise.resolve(),th=()=>ai||(eh.then(()=>ai=0),ai=Date.now());function oh(t,e){const o=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=o.attached)return;zt(sh(s,o.value),e,5,[s])};return o.value=t,o.attached=th(),o}function sh(t,e){if(L(e)){const o=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{o.call(t),t._stopped=!0},e.map(s=>n=>!n._stopped&&s&&s(n))}else return e}const Jr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,nh=(t,e,o,s,n,i)=>{const r=n==="svg";e==="class"?Zu(t,s,r):e==="style"?Gu(t,o,s):An(e)?Bi(e)||Xu(t,e,o,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ih(t,e,s,r))?(Kr(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Wr(t,e,s,r,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ie(s))?Kr(t,pt(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Wr(t,e,s,r))};function ih(t,e,o,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Jr(e)&&F(o));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const n=t.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return Jr(e)&&Ie(o)?!1:e in t}const lo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return L(e)?o=>sn(e,o):e};function rh(t){t.target.composing=!0}function Xr(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ht=Symbol("_assign"),Je={created(t,{modifiers:{lazy:e,trim:o,number:s}},n){t[ht]=lo(n);const i=s||n.props&&n.props.type==="number";Ht(t,e?"change":"input",r=>{if(r.target.composing)return;let l=t.value;o&&(l=l.trim()),i&&(l=dn(l)),t[ht](l)}),o&&Ht(t,"change",()=>{t.value=t.value.trim()}),e||(Ht(t,"compositionstart",rh),Ht(t,"compositionend",Xr),Ht(t,"change",Xr))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:o,modifiers:{lazy:s,trim:n,number:i}},r){if(t[ht]=lo(r),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?dn(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===o||n&&t.value.trim()===c)||(t.value=c))}},Qr={deep:!0,created(t,e,o){t[ht]=lo(o),Ht(t,"change",()=>{const s=t._modelValue,n=Go(t),i=t.checked,r=t[ht];if(L(s)){const l=Mi(s,n),c=l!==-1;if(i&&!c)r(s.concat(n));else if(!i&&c){const d=[...s];d.splice(l,1),r(d)}}else if(es(s)){const l=new Set(s);i?l.add(n):l.delete(n),r(l)}else r(Qa(t,i))})},mounted:el,beforeUpdate(t,e,o){t[ht]=lo(o),el(t,e,o)}};function el(t,{value:e,oldValue:o},s){t._modelValue=e;let n;if(L(e))n=Mi(e,s.props.value)>-1;else if(es(e))n=e.has(s.props.value);else{if(e===o)return;n=ko(e,Qa(t,!0))}t.checked!==n&&(t.checked=n)}const tl={created(t,{value:e},o){t.checked=ko(e,o.props.value),t[ht]=lo(o),Ht(t,"change",()=>{t[ht](Go(t))})},beforeUpdate(t,{value:e,oldValue:o},s){t[ht]=lo(s),e!==o&&(t.checked=ko(e,s.props.value))}},Xa={deep:!0,created(t,{value:e,modifiers:{number:o}},s){const n=es(e);Ht(t,"change",()=>{const i=Array.prototype.filter.call(t.options,r=>r.selected).map(r=>o?dn(Go(r)):Go(r));t[ht](t.multiple?n?new Set(i):i:i[0]),t._assigning=!0,_a(()=>{t._assigning=!1})}),t[ht]=lo(s)},mounted(t,{value:e}){ol(t,e)},beforeUpdate(t,e,o){t[ht]=lo(o)},updated(t,{value:e}){t._assigning||ol(t,e)}};function ol(t,e){const o=t.multiple,s=L(e);if(!(o&&!s&&!es(e))){for(let n=0,i=t.options.length;n<i;n++){const r=t.options[n],l=Go(r);if(o)if(s){const c=typeof l;c==="string"||c==="number"?r.selected=e.some(d=>String(d)===String(l)):r.selected=Mi(e,l)>-1}else r.selected=e.has(l);else if(ko(Go(r),e)){t.selectedIndex!==n&&(t.selectedIndex=n);return}}!o&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Go(t){return"_value"in t?t._value:t.value}function Qa(t,e){const o=e?"_trueValue":"_falseValue";return o in t?t[o]:e}const lh=Te({patchProp:nh},Uu);let sl;function ah(){return sl||(sl=hu(lh))}const ch=(...t)=>{const e=ah().createApp(...t),{mount:o}=e;return e.mount=s=>{const n=uh(s);if(!n)return;const i=e._component;!F(i)&&!i.render&&!i.template&&(i.template=n.innerHTML),n.nodeType===1&&(n.textContent="");const r=o(n,!1,dh(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),r},e};function dh(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function uh(t){return Ie(t)?document.querySelector(t):t}function $(t,e,o){function s(l,c){var d;Object.defineProperty(l,"_zod",{value:l._zod??{},enumerable:!1}),(d=l._zod).traits??(d.traits=new Set),l._zod.traits.add(t),e(l,c);for(const a in r.prototype)a in l||Object.defineProperty(l,a,{value:r.prototype[a].bind(l)});l._zod.constr=r,l._zod.def=c}const n=(o==null?void 0:o.Parent)??Object;class i extends n{}Object.defineProperty(i,"name",{value:t});function r(l){var c;const d=o!=null&&o.Parent?new i:this;s(d,l),(c=d._zod).deferred??(c.deferred=[]);for(const a of d._zod.deferred)a();return d}return Object.defineProperty(r,"init",{value:s}),Object.defineProperty(r,Symbol.hasInstance,{value:l=>{var c,d;return o!=null&&o.Parent&&l instanceof o.Parent?!0:(d=(c=l==null?void 0:l._zod)==null?void 0:c.traits)==null?void 0:d.has(t)}}),Object.defineProperty(r,"name",{value:t}),r}class Wo extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class ec extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name="ZodEncodeError"}}const nl={};function So(t){return t&&Object.assign(nl,t),nl}function ki(t,e){return typeof e=="bigint"?e.toString():e}function er(t){return t==null}function tr(t){const e=t.startsWith("^")?1:0,o=t.endsWith("$")?t.length-1:t.length;return t.slice(e,o)}const il=Symbol("evaluating");function be(t,e,o){let s;Object.defineProperty(t,e,{get(){if(s!==il)return s===void 0&&(s=il,s=o()),s},set(n){Object.defineProperty(t,e,{value:n})},configurable:!0})}const tc="captureStackTrace"in Error?Error.captureStackTrace:(...t)=>{};function rl(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}function Si(t){if(rl(t)===!1)return!1;const e=t.constructor;if(e===void 0)return!0;const o=e.prototype;return!(rl(o)===!1||Object.prototype.hasOwnProperty.call(o,"isPrototypeOf")===!1)}function oc(t){return Si(t)?{...t}:t}function or(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function hh(t,e,o){const s=new t._zod.constr(e??t._zod.def);return(!e||o!=null&&o.parent)&&(s._zod.parent=t),s}function j(t){const e=t;if(!e)return{};if(typeof e=="string")return{error:()=>e};if((e==null?void 0:e.message)!==void 0){if((e==null?void 0:e.error)!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function jo(t,e=0){var o;if(t.aborted===!0)return!0;for(let s=e;s<t.issues.length;s++)if(((o=t.issues[s])==null?void 0:o.continue)!==!0)return!0;return!1}function ph(t,e){return e.map(o=>{var s;return(s=o).path??(s.path=[]),o.path.unshift(t),o})}function Gs(t){return typeof t=="string"?t:t==null?void 0:t.message}function Io(t,e,o){var n,i,r,l,c,d;const s={...t,path:t.path??[]};if(!t.message){const a=Gs((r=(i=(n=t.inst)==null?void 0:n._zod.def)==null?void 0:i.error)==null?void 0:r.call(i,t))??Gs((l=e==null?void 0:e.error)==null?void 0:l.call(e,t))??Gs((c=o.customError)==null?void 0:c.call(o,t))??Gs((d=o.localeError)==null?void 0:d.call(o,t))??"Invalid input";s.message=a}return delete s.inst,delete s.continue,e!=null&&e.reportInput||delete s.input,s}function sr(t){return Array.isArray(t)?"array":typeof t=="string"?"string":"unknown"}function Ts(...t){const[e,o,s]=t;return typeof e=="string"?{message:e,code:"custom",input:o,inst:s}:{...e}}const sc=(t,e)=>{t.name="$ZodError",Object.defineProperty(t,"_zod",{value:t._zod,enumerable:!1}),Object.defineProperty(t,"issues",{value:e,enumerable:!1}),t.message=JSON.stringify(e,ki,2),Object.defineProperty(t,"toString",{value:()=>t.message,enumerable:!1})},nc=$("$ZodError",sc),ic=$("$ZodError",sc,{Parent:Error});function fh(t,e=o=>o.message){const o={},s=[];for(const n of t.issues)n.path.length>0?(o[n.path[0]]=o[n.path[0]]||[],o[n.path[0]].push(e(n))):s.push(e(n));return{formErrors:s,fieldErrors:o}}function vh(t,e){const o=e||function(i){return i.message},s={_errors:[]},n=i=>{for(const r of i.issues)if(r.code==="invalid_union"&&r.errors.length)r.errors.map(l=>n({issues:l}));else if(r.code==="invalid_key")n({issues:r.issues});else if(r.code==="invalid_element")n({issues:r.issues});else if(r.path.length===0)s._errors.push(o(r));else{let l=s,c=0;for(;c<r.path.length;){const d=r.path[c];c===r.path.length-1?(l[d]=l[d]||{_errors:[]},l[d]._errors.push(o(r))):l[d]=l[d]||{_errors:[]},l=l[d],c++}}};return n(t),s}const nr=t=>(e,o,s,n)=>{const i=s?Object.assign(s,{async:!1}):{async:!1},r=e._zod.run({value:o,issues:[]},i);if(r instanceof Promise)throw new Wo;if(r.issues.length){const l=new((n==null?void 0:n.Err)??t)(r.issues.map(c=>Io(c,i,So())));throw tc(l,n==null?void 0:n.callee),l}return r.value},ir=t=>async(e,o,s,n)=>{const i=s?Object.assign(s,{async:!0}):{async:!0};let r=e._zod.run({value:o,issues:[]},i);if(r instanceof Promise&&(r=await r),r.issues.length){const l=new((n==null?void 0:n.Err)??t)(r.issues.map(c=>Io(c,i,So())));throw tc(l,n==null?void 0:n.callee),l}return r.value},Fn=t=>(e,o,s)=>{const n=s?{...s,async:!1}:{async:!1},i=e._zod.run({value:o,issues:[]},n);if(i instanceof Promise)throw new Wo;return i.issues.length?{success:!1,error:new(t??nc)(i.issues.map(r=>Io(r,n,So())))}:{success:!0,data:i.value}},gh=Fn(ic),jn=t=>async(e,o,s)=>{const n=s?Object.assign(s,{async:!0}):{async:!0};let i=e._zod.run({value:o,issues:[]},n);return i instanceof Promise&&(i=await i),i.issues.length?{success:!1,error:new t(i.issues.map(r=>Io(r,n,So())))}:{success:!0,data:i.value}},bh=jn(ic),mh=t=>(e,o,s)=>{const n=s?Object.assign(s,{direction:"backward"}):{direction:"backward"};return nr(t)(e,o,n)},_h=t=>(e,o,s)=>nr(t)(e,o,s),yh=t=>async(e,o,s)=>{const n=s?Object.assign(s,{direction:"backward"}):{direction:"backward"};return ir(t)(e,o,n)},xh=t=>async(e,o,s)=>ir(t)(e,o,s),wh=t=>(e,o,s)=>{const n=s?Object.assign(s,{direction:"backward"}):{direction:"backward"};return Fn(t)(e,o,n)},Ch=t=>(e,o,s)=>Fn(t)(e,o,s),$h=t=>async(e,o,s)=>{const n=s?Object.assign(s,{direction:"backward"}):{direction:"backward"};return jn(t)(e,o,n)},kh=t=>async(e,o,s)=>jn(t)(e,o,s),Sh=/^[cC][^\s-]{8,}$/,Ih=/^[0-9a-z]+$/,Eh=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,Ah=/^[0-9a-vA-V]{20}$/,Oh=/^[A-Za-z0-9]{27}$/,Ph=/^[a-zA-Z0-9_-]{21}$/,Th=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,Rh=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,ll=t=>t?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,zh=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,Bh="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function Vh(){return new RegExp(Bh,"u")}const Lh=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Dh=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,Mh=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,Fh=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,jh=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,rc=/^[A-Za-z0-9_-]*$/,Nh=/^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,Uh=/^\+(?:[0-9]){6,14}[0-9]$/,lc="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",Hh=new RegExp(`^${lc}$`);function ac(t){const e="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof t.precision=="number"?t.precision===-1?`${e}`:t.precision===0?`${e}:[0-5]\\d`:`${e}:[0-5]\\d\\.\\d{${t.precision}}`:`${e}(?::[0-5]\\d(?:\\.\\d+)?)?`}function Zh(t){return new RegExp(`^${ac(t)}$`)}function qh(t){const e=ac({precision:t.precision}),o=["Z"];t.local&&o.push(""),t.offset&&o.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");const s=`${e}(?:${o.join("|")})`;return new RegExp(`^${lc}T(?:${s})$`)}const Wh=t=>{const e=t?`[\\s\\S]{${(t==null?void 0:t.minimum)??0},${(t==null?void 0:t.maximum)??""}}`:"[\\s\\S]*";return new RegExp(`^${e}$`)},Kh=/^[^A-Z]*$/,Gh=/^[^a-z]*$/,Lt=$("$ZodCheck",(t,e)=>{var o;t._zod??(t._zod={}),t._zod.def=e,(o=t._zod).onattach??(o.onattach=[])}),Yh=$("$ZodCheckMaxLength",(t,e)=>{var o;Lt.init(t,e),(o=t._zod.def).when??(o.when=s=>{const n=s.value;return!er(n)&&n.length!==void 0}),t._zod.onattach.push(s=>{const n=s._zod.bag.maximum??Number.POSITIVE_INFINITY;e.maximum<n&&(s._zod.bag.maximum=e.maximum)}),t._zod.check=s=>{const n=s.value;if(n.length<=e.maximum)return;const r=sr(n);s.issues.push({origin:r,code:"too_big",maximum:e.maximum,inclusive:!0,input:n,inst:t,continue:!e.abort})}}),Jh=$("$ZodCheckMinLength",(t,e)=>{var o;Lt.init(t,e),(o=t._zod.def).when??(o.when=s=>{const n=s.value;return!er(n)&&n.length!==void 0}),t._zod.onattach.push(s=>{const n=s._zod.bag.minimum??Number.NEGATIVE_INFINITY;e.minimum>n&&(s._zod.bag.minimum=e.minimum)}),t._zod.check=s=>{const n=s.value;if(n.length>=e.minimum)return;const r=sr(n);s.issues.push({origin:r,code:"too_small",minimum:e.minimum,inclusive:!0,input:n,inst:t,continue:!e.abort})}}),Xh=$("$ZodCheckLengthEquals",(t,e)=>{var o;Lt.init(t,e),(o=t._zod.def).when??(o.when=s=>{const n=s.value;return!er(n)&&n.length!==void 0}),t._zod.onattach.push(s=>{const n=s._zod.bag;n.minimum=e.length,n.maximum=e.length,n.length=e.length}),t._zod.check=s=>{const n=s.value,i=n.length;if(i===e.length)return;const r=sr(n),l=i>e.length;s.issues.push({origin:r,...l?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:s.value,inst:t,continue:!e.abort})}}),Nn=$("$ZodCheckStringFormat",(t,e)=>{var o,s;Lt.init(t,e),t._zod.onattach.push(n=>{const i=n._zod.bag;i.format=e.format,e.pattern&&(i.patterns??(i.patterns=new Set),i.patterns.add(e.pattern))}),e.pattern?(o=t._zod).check??(o.check=n=>{e.pattern.lastIndex=0,!e.pattern.test(n.value)&&n.issues.push({origin:"string",code:"invalid_format",format:e.format,input:n.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:t,continue:!e.abort})}):(s=t._zod).check??(s.check=()=>{})}),Qh=$("$ZodCheckRegex",(t,e)=>{Nn.init(t,e),t._zod.check=o=>{e.pattern.lastIndex=0,!e.pattern.test(o.value)&&o.issues.push({origin:"string",code:"invalid_format",format:"regex",input:o.value,pattern:e.pattern.toString(),inst:t,continue:!e.abort})}}),ep=$("$ZodCheckLowerCase",(t,e)=>{e.pattern??(e.pattern=Kh),Nn.init(t,e)}),tp=$("$ZodCheckUpperCase",(t,e)=>{e.pattern??(e.pattern=Gh),Nn.init(t,e)}),op=$("$ZodCheckIncludes",(t,e)=>{Lt.init(t,e);const o=or(e.includes),s=new RegExp(typeof e.position=="number"?`^.{${e.position}}${o}`:o);e.pattern=s,t._zod.onattach.push(n=>{const i=n._zod.bag;i.patterns??(i.patterns=new Set),i.patterns.add(s)}),t._zod.check=n=>{n.value.includes(e.includes,e.position)||n.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:n.value,inst:t,continue:!e.abort})}}),sp=$("$ZodCheckStartsWith",(t,e)=>{Lt.init(t,e);const o=new RegExp(`^${or(e.prefix)}.*`);e.pattern??(e.pattern=o),t._zod.onattach.push(s=>{const n=s._zod.bag;n.patterns??(n.patterns=new Set),n.patterns.add(o)}),t._zod.check=s=>{s.value.startsWith(e.prefix)||s.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:s.value,inst:t,continue:!e.abort})}}),np=$("$ZodCheckEndsWith",(t,e)=>{Lt.init(t,e);const o=new RegExp(`.*${or(e.suffix)}$`);e.pattern??(e.pattern=o),t._zod.onattach.push(s=>{const n=s._zod.bag;n.patterns??(n.patterns=new Set),n.patterns.add(o)}),t._zod.check=s=>{s.value.endsWith(e.suffix)||s.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:s.value,inst:t,continue:!e.abort})}}),ip=$("$ZodCheckOverwrite",(t,e)=>{Lt.init(t,e),t._zod.check=o=>{o.value=e.tx(o.value)}}),rp={major:4,minor:1,patch:1},We=$("$ZodType",(t,e)=>{var n;var o;t??(t={}),t._zod.def=e,t._zod.bag=t._zod.bag||{},t._zod.version=rp;const s=[...t._zod.def.checks??[]];t._zod.traits.has("$ZodCheck")&&s.unshift(t);for(const i of s)for(const r of i._zod.onattach)r(t);if(s.length===0)(o=t._zod).deferred??(o.deferred=[]),(n=t._zod.deferred)==null||n.push(()=>{t._zod.run=t._zod.parse});else{const i=(l,c,d)=>{let a=jo(l),h;for(const m of c){if(m._zod.def.when){if(!m._zod.def.when(l))continue}else if(a)continue;const y=l.issues.length,I=m._zod.check(l);if(I instanceof Promise&&(d==null?void 0:d.async)===!1)throw new Wo;if(h||I instanceof Promise)h=(h??Promise.resolve()).then(async()=>{await I,l.issues.length!==y&&(a||(a=jo(l,y)))});else{if(l.issues.length===y)continue;a||(a=jo(l,y))}}return h?h.then(()=>l):l},r=(l,c,d)=>{if(jo(l))return l.aborted=!0,l;const a=i(c,s,d);if(a instanceof Promise){if(d.async===!1)throw new Wo;return a.then(h=>t._zod.parse(h,d))}return t._zod.parse(a,d)};t._zod.run=(l,c)=>{if(c.skipChecks)return t._zod.parse(l,c);if(c.direction==="backward"){const a=t._zod.parse({value:l.value,issues:[]},{...c,skipChecks:!0});return a instanceof Promise?a.then(h=>r(h,l,c)):r(a,l,c)}const d=t._zod.parse(l,c);if(d instanceof Promise){if(c.async===!1)throw new Wo;return d.then(a=>i(a,s,c))}return i(d,s,c)}}t["~standard"]={validate:i=>{var r;try{const l=gh(t,i);return l.success?{value:l.data}:{issues:(r=l.error)==null?void 0:r.issues}}catch{return bh(t,i).then(c=>{var d;return c.success?{value:c.data}:{issues:(d=c.error)==null?void 0:d.issues}})}},vendor:"zod",version:1}}),rr=$("$ZodString",(t,e)=>{var o;We.init(t,e),t._zod.pattern=[...((o=t==null?void 0:t._zod.bag)==null?void 0:o.patterns)??[]].pop()??Wh(t._zod.bag),t._zod.parse=(s,n)=>{if(e.coerce)try{s.value=String(s.value)}catch{}return typeof s.value=="string"||s.issues.push({expected:"string",code:"invalid_type",input:s.value,inst:t}),s}}),me=$("$ZodStringFormat",(t,e)=>{Nn.init(t,e),rr.init(t,e)}),lp=$("$ZodGUID",(t,e)=>{e.pattern??(e.pattern=Rh),me.init(t,e)}),ap=$("$ZodUUID",(t,e)=>{if(e.version){const s={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(s===void 0)throw new Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=ll(s))}else e.pattern??(e.pattern=ll());me.init(t,e)}),cp=$("$ZodEmail",(t,e)=>{e.pattern??(e.pattern=zh),me.init(t,e)}),dp=$("$ZodURL",(t,e)=>{me.init(t,e),t._zod.check=o=>{try{const s=o.value.trim(),n=new URL(s);e.hostname&&(e.hostname.lastIndex=0,e.hostname.test(n.hostname)||o.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:Nh.source,input:o.value,inst:t,continue:!e.abort})),e.protocol&&(e.protocol.lastIndex=0,e.protocol.test(n.protocol.endsWith(":")?n.protocol.slice(0,-1):n.protocol)||o.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:o.value,inst:t,continue:!e.abort})),e.normalize?o.value=n.href:o.value=s;return}catch{o.issues.push({code:"invalid_format",format:"url",input:o.value,inst:t,continue:!e.abort})}}}),up=$("$ZodEmoji",(t,e)=>{e.pattern??(e.pattern=Vh()),me.init(t,e)}),hp=$("$ZodNanoID",(t,e)=>{e.pattern??(e.pattern=Ph),me.init(t,e)}),pp=$("$ZodCUID",(t,e)=>{e.pattern??(e.pattern=Sh),me.init(t,e)}),fp=$("$ZodCUID2",(t,e)=>{e.pattern??(e.pattern=Ih),me.init(t,e)}),vp=$("$ZodULID",(t,e)=>{e.pattern??(e.pattern=Eh),me.init(t,e)}),gp=$("$ZodXID",(t,e)=>{e.pattern??(e.pattern=Ah),me.init(t,e)}),bp=$("$ZodKSUID",(t,e)=>{e.pattern??(e.pattern=Oh),me.init(t,e)}),mp=$("$ZodISODateTime",(t,e)=>{e.pattern??(e.pattern=qh(e)),me.init(t,e)}),_p=$("$ZodISODate",(t,e)=>{e.pattern??(e.pattern=Hh),me.init(t,e)}),yp=$("$ZodISOTime",(t,e)=>{e.pattern??(e.pattern=Zh(e)),me.init(t,e)}),xp=$("$ZodISODuration",(t,e)=>{e.pattern??(e.pattern=Th),me.init(t,e)}),wp=$("$ZodIPv4",(t,e)=>{e.pattern??(e.pattern=Lh),me.init(t,e),t._zod.onattach.push(o=>{const s=o._zod.bag;s.format="ipv4"})}),Cp=$("$ZodIPv6",(t,e)=>{e.pattern??(e.pattern=Dh),me.init(t,e),t._zod.onattach.push(o=>{const s=o._zod.bag;s.format="ipv6"}),t._zod.check=o=>{try{new URL(`http://[${o.value}]`)}catch{o.issues.push({code:"invalid_format",format:"ipv6",input:o.value,inst:t,continue:!e.abort})}}}),$p=$("$ZodCIDRv4",(t,e)=>{e.pattern??(e.pattern=Mh),me.init(t,e)}),kp=$("$ZodCIDRv6",(t,e)=>{e.pattern??(e.pattern=Fh),me.init(t,e),t._zod.check=o=>{const[s,n]=o.value.split("/");try{if(!n)throw new Error;const i=Number(n);if(`${i}`!==n)throw new Error;if(i<0||i>128)throw new Error;new URL(`http://[${s}]`)}catch{o.issues.push({code:"invalid_format",format:"cidrv6",input:o.value,inst:t,continue:!e.abort})}}});function cc(t){if(t==="")return!0;if(t.length%4!==0)return!1;try{return atob(t),!0}catch{return!1}}const Sp=$("$ZodBase64",(t,e)=>{e.pattern??(e.pattern=jh),me.init(t,e),t._zod.onattach.push(o=>{o._zod.bag.contentEncoding="base64"}),t._zod.check=o=>{cc(o.value)||o.issues.push({code:"invalid_format",format:"base64",input:o.value,inst:t,continue:!e.abort})}});function Ip(t){if(!rc.test(t))return!1;const e=t.replace(/[-_]/g,s=>s==="-"?"+":"/"),o=e.padEnd(Math.ceil(e.length/4)*4,"=");return cc(o)}const Ep=$("$ZodBase64URL",(t,e)=>{e.pattern??(e.pattern=rc),me.init(t,e),t._zod.onattach.push(o=>{o._zod.bag.contentEncoding="base64url"}),t._zod.check=o=>{Ip(o.value)||o.issues.push({code:"invalid_format",format:"base64url",input:o.value,inst:t,continue:!e.abort})}}),Ap=$("$ZodE164",(t,e)=>{e.pattern??(e.pattern=Uh),me.init(t,e)});function Op(t,e=null){try{const o=t.split(".");if(o.length!==3)return!1;const[s]=o;if(!s)return!1;const n=JSON.parse(atob(s));return!("typ"in n&&(n==null?void 0:n.typ)!=="JWT"||!n.alg||e&&(!("alg"in n)||n.alg!==e))}catch{return!1}}const Pp=$("$ZodJWT",(t,e)=>{me.init(t,e),t._zod.check=o=>{Op(o.value,e.alg)||o.issues.push({code:"invalid_format",format:"jwt",input:o.value,inst:t,continue:!e.abort})}});function al(t,e,o){t.issues.length&&e.issues.push(...ph(o,t.issues)),e.value[o]=t.value}const Tp=$("$ZodArray",(t,e)=>{We.init(t,e),t._zod.parse=(o,s)=>{const n=o.value;if(!Array.isArray(n))return o.issues.push({expected:"array",code:"invalid_type",input:n,inst:t}),o;o.value=Array(n.length);const i=[];for(let r=0;r<n.length;r++){const l=n[r],c=e.element._zod.run({value:l,issues:[]},s);c instanceof Promise?i.push(c.then(d=>al(d,o,r))):al(c,o,r)}return i.length?Promise.all(i).then(()=>o):o}});function cl(t,e,o,s){for(const i of t)if(i.issues.length===0)return e.value=i.value,e;const n=t.filter(i=>!jo(i));return n.length===1?(e.value=n[0].value,n[0]):(e.issues.push({code:"invalid_union",input:e.value,inst:o,errors:t.map(i=>i.issues.map(r=>Io(r,s,So())))}),e)}const Rp=$("$ZodUnion",(t,e)=>{We.init(t,e),be(t._zod,"optin",()=>e.options.some(n=>n._zod.optin==="optional")?"optional":void 0),be(t._zod,"optout",()=>e.options.some(n=>n._zod.optout==="optional")?"optional":void 0),be(t._zod,"values",()=>{if(e.options.every(n=>n._zod.values))return new Set(e.options.flatMap(n=>Array.from(n._zod.values)))}),be(t._zod,"pattern",()=>{if(e.options.every(n=>n._zod.pattern)){const n=e.options.map(i=>i._zod.pattern);return new RegExp(`^(${n.map(i=>tr(i.source)).join("|")})$`)}});const o=e.options.length===1,s=e.options[0]._zod.run;t._zod.parse=(n,i)=>{if(o)return s(n,i);let r=!1;const l=[];for(const c of e.options){const d=c._zod.run({value:n.value,issues:[]},i);if(d instanceof Promise)l.push(d),r=!0;else{if(d.issues.length===0)return d;l.push(d)}}return r?Promise.all(l).then(c=>cl(c,n,t,i)):cl(l,n,t,i)}}),zp=$("$ZodIntersection",(t,e)=>{We.init(t,e),t._zod.parse=(o,s)=>{const n=o.value,i=e.left._zod.run({value:n,issues:[]},s),r=e.right._zod.run({value:n,issues:[]},s);return i instanceof Promise||r instanceof Promise?Promise.all([i,r]).then(([c,d])=>dl(o,c,d)):dl(o,i,r)}});function Ii(t,e){if(t===e)return{valid:!0,data:t};if(t instanceof Date&&e instanceof Date&&+t==+e)return{valid:!0,data:t};if(Si(t)&&Si(e)){const o=Object.keys(e),s=Object.keys(t).filter(i=>o.indexOf(i)!==-1),n={...t,...e};for(const i of s){const r=Ii(t[i],e[i]);if(!r.valid)return{valid:!1,mergeErrorPath:[i,...r.mergeErrorPath]};n[i]=r.data}return{valid:!0,data:n}}if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return{valid:!1,mergeErrorPath:[]};const o=[];for(let s=0;s<t.length;s++){const n=t[s],i=e[s],r=Ii(n,i);if(!r.valid)return{valid:!1,mergeErrorPath:[s,...r.mergeErrorPath]};o.push(r.data)}return{valid:!0,data:o}}return{valid:!1,mergeErrorPath:[]}}function dl(t,e,o){if(e.issues.length&&t.issues.push(...e.issues),o.issues.length&&t.issues.push(...o.issues),jo(t))return t;const s=Ii(e.value,o.value);if(!s.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);return t.value=s.data,t}const Bp=$("$ZodTransform",(t,e)=>{We.init(t,e),t._zod.parse=(o,s)=>{if(s.direction==="backward")throw new ec(t.constructor.name);const n=e.transform(o.value,o);if(s.async)return(n instanceof Promise?n:Promise.resolve(n)).then(r=>(o.value=r,o));if(n instanceof Promise)throw new Wo;return o.value=n,o}});function ul(t,e){return t.issues.length&&e===void 0?{issues:[],value:void 0}:t}const Vp=$("$ZodOptional",(t,e)=>{We.init(t,e),t._zod.optin="optional",t._zod.optout="optional",be(t._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,void 0]):void 0),be(t._zod,"pattern",()=>{const o=e.innerType._zod.pattern;return o?new RegExp(`^(${tr(o.source)})?$`):void 0}),t._zod.parse=(o,s)=>{if(e.innerType._zod.optin==="optional"){const n=e.innerType._zod.run(o,s);return n instanceof Promise?n.then(i=>ul(i,o.value)):ul(n,o.value)}return o.value===void 0?o:e.innerType._zod.run(o,s)}}),Lp=$("$ZodNullable",(t,e)=>{We.init(t,e),be(t._zod,"optin",()=>e.innerType._zod.optin),be(t._zod,"optout",()=>e.innerType._zod.optout),be(t._zod,"pattern",()=>{const o=e.innerType._zod.pattern;return o?new RegExp(`^(${tr(o.source)}|null)$`):void 0}),be(t._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,null]):void 0),t._zod.parse=(o,s)=>o.value===null?o:e.innerType._zod.run(o,s)}),Dp=$("$ZodDefault",(t,e)=>{We.init(t,e),t._zod.optin="optional",be(t._zod,"values",()=>e.innerType._zod.values),t._zod.parse=(o,s)=>{if(s.direction==="backward")return e.innerType._zod.run(o,s);if(o.value===void 0)return o.value=e.defaultValue,o;const n=e.innerType._zod.run(o,s);return n instanceof Promise?n.then(i=>hl(i,e)):hl(n,e)}});function hl(t,e){return t.value===void 0&&(t.value=e.defaultValue),t}const Mp=$("$ZodPrefault",(t,e)=>{We.init(t,e),t._zod.optin="optional",be(t._zod,"values",()=>e.innerType._zod.values),t._zod.parse=(o,s)=>(s.direction==="backward"||o.value===void 0&&(o.value=e.defaultValue),e.innerType._zod.run(o,s))}),Fp=$("$ZodNonOptional",(t,e)=>{We.init(t,e),be(t._zod,"values",()=>{const o=e.innerType._zod.values;return o?new Set([...o].filter(s=>s!==void 0)):void 0}),t._zod.parse=(o,s)=>{const n=e.innerType._zod.run(o,s);return n instanceof Promise?n.then(i=>pl(i,t)):pl(n,t)}});function pl(t,e){return!t.issues.length&&t.value===void 0&&t.issues.push({code:"invalid_type",expected:"nonoptional",input:t.value,inst:e}),t}const jp=$("$ZodCatch",(t,e)=>{We.init(t,e),be(t._zod,"optin",()=>e.innerType._zod.optin),be(t._zod,"optout",()=>e.innerType._zod.optout),be(t._zod,"values",()=>e.innerType._zod.values),t._zod.parse=(o,s)=>{if(s.direction==="backward")return e.innerType._zod.run(o,s);const n=e.innerType._zod.run(o,s);return n instanceof Promise?n.then(i=>(o.value=i.value,i.issues.length&&(o.value=e.catchValue({...o,error:{issues:i.issues.map(r=>Io(r,s,So()))},input:o.value}),o.issues=[]),o)):(o.value=n.value,n.issues.length&&(o.value=e.catchValue({...o,error:{issues:n.issues.map(i=>Io(i,s,So()))},input:o.value}),o.issues=[]),o)}}),Np=$("$ZodPipe",(t,e)=>{We.init(t,e),be(t._zod,"values",()=>e.in._zod.values),be(t._zod,"optin",()=>e.in._zod.optin),be(t._zod,"optout",()=>e.out._zod.optout),be(t._zod,"propValues",()=>e.in._zod.propValues),t._zod.parse=(o,s)=>{if(s.direction==="backward"){const i=e.out._zod.run(o,s);return i instanceof Promise?i.then(r=>Ys(r,e.in,s)):Ys(i,e.in,s)}const n=e.in._zod.run(o,s);return n instanceof Promise?n.then(i=>Ys(i,e.out,s)):Ys(n,e.out,s)}});function Ys(t,e,o){return t.issues.length?(t.aborted=!0,t):e._zod.run({value:t.value,issues:t.issues},o)}const Up=$("$ZodReadonly",(t,e)=>{We.init(t,e),be(t._zod,"propValues",()=>e.innerType._zod.propValues),be(t._zod,"values",()=>e.innerType._zod.values),be(t._zod,"optin",()=>e.innerType._zod.optin),be(t._zod,"optout",()=>e.innerType._zod.optout),t._zod.parse=(o,s)=>{if(s.direction==="backward")return e.innerType._zod.run(o,s);const n=e.innerType._zod.run(o,s);return n instanceof Promise?n.then(fl):fl(n)}});function fl(t){return t.value=Object.freeze(t.value),t}const Hp=$("$ZodCustom",(t,e)=>{Lt.init(t,e),We.init(t,e),t._zod.parse=(o,s)=>o,t._zod.check=o=>{const s=o.value,n=e.fn(s);if(n instanceof Promise)return n.then(i=>vl(i,o,s,t));vl(n,o,s,t)}});function vl(t,e,o,s){if(!t){const n={code:"custom",input:o,inst:s,path:[...s._zod.def.path??[]],continue:!s._zod.def.abort};s._zod.def.params&&(n.params=s._zod.def.params),e.issues.push(Ts(n))}}class Zp{constructor(){this._map=new Map,this._idmap=new Map}add(e,...o){const s=o[0];if(this._map.set(e,s),s&&typeof s=="object"&&"id"in s){if(this._idmap.has(s.id))throw new Error(`ID ${s.id} already exists in the registry`);this._idmap.set(s.id,e)}return this}clear(){return this._map=new Map,this._idmap=new Map,this}remove(e){const o=this._map.get(e);return o&&typeof o=="object"&&"id"in o&&this._idmap.delete(o.id),this._map.delete(e),this}get(e){const o=e._zod.parent;if(o){const s={...this.get(o)??{}};delete s.id;const n={...s,...this._map.get(e)};return Object.keys(n).length?n:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function qp(){return new Zp}const Js=qp();function Wp(t,e){return new t({type:"string",...j(e)})}function Kp(t,e){return new t({type:"string",format:"email",check:"string_format",abort:!1,...j(e)})}function gl(t,e){return new t({type:"string",format:"guid",check:"string_format",abort:!1,...j(e)})}function Gp(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,...j(e)})}function Yp(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...j(e)})}function Jp(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...j(e)})}function Xp(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...j(e)})}function Qp(t,e){return new t({type:"string",format:"url",check:"string_format",abort:!1,...j(e)})}function ef(t,e){return new t({type:"string",format:"emoji",check:"string_format",abort:!1,...j(e)})}function tf(t,e){return new t({type:"string",format:"nanoid",check:"string_format",abort:!1,...j(e)})}function of(t,e){return new t({type:"string",format:"cuid",check:"string_format",abort:!1,...j(e)})}function sf(t,e){return new t({type:"string",format:"cuid2",check:"string_format",abort:!1,...j(e)})}function nf(t,e){return new t({type:"string",format:"ulid",check:"string_format",abort:!1,...j(e)})}function rf(t,e){return new t({type:"string",format:"xid",check:"string_format",abort:!1,...j(e)})}function lf(t,e){return new t({type:"string",format:"ksuid",check:"string_format",abort:!1,...j(e)})}function af(t,e){return new t({type:"string",format:"ipv4",check:"string_format",abort:!1,...j(e)})}function cf(t,e){return new t({type:"string",format:"ipv6",check:"string_format",abort:!1,...j(e)})}function df(t,e){return new t({type:"string",format:"cidrv4",check:"string_format",abort:!1,...j(e)})}function uf(t,e){return new t({type:"string",format:"cidrv6",check:"string_format",abort:!1,...j(e)})}function hf(t,e){return new t({type:"string",format:"base64",check:"string_format",abort:!1,...j(e)})}function pf(t,e){return new t({type:"string",format:"base64url",check:"string_format",abort:!1,...j(e)})}function ff(t,e){return new t({type:"string",format:"e164",check:"string_format",abort:!1,...j(e)})}function vf(t,e){return new t({type:"string",format:"jwt",check:"string_format",abort:!1,...j(e)})}function gf(t,e){return new t({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...j(e)})}function bf(t,e){return new t({type:"string",format:"date",check:"string_format",...j(e)})}function mf(t,e){return new t({type:"string",format:"time",check:"string_format",precision:null,...j(e)})}function _f(t,e){return new t({type:"string",format:"duration",check:"string_format",...j(e)})}function dc(t,e){return new Yh({check:"max_length",...j(e),maximum:t})}function bn(t,e){return new Jh({check:"min_length",...j(e),minimum:t})}function uc(t,e){return new Xh({check:"length_equals",...j(e),length:t})}function yf(t,e){return new Qh({check:"string_format",format:"regex",...j(e),pattern:t})}function xf(t){return new ep({check:"string_format",format:"lowercase",...j(t)})}function wf(t){return new tp({check:"string_format",format:"uppercase",...j(t)})}function Cf(t,e){return new op({check:"string_format",format:"includes",...j(e),includes:t})}function $f(t,e){return new sp({check:"string_format",format:"starts_with",...j(e),prefix:t})}function kf(t,e){return new np({check:"string_format",format:"ends_with",...j(e),suffix:t})}function js(t){return new ip({check:"overwrite",tx:t})}function Sf(t){return js(e=>e.normalize(t))}function If(){return js(t=>t.trim())}function Ef(){return js(t=>t.toLowerCase())}function Af(){return js(t=>t.toUpperCase())}function Of(t,e,o){return new t({type:"array",element:e,...j(o)})}function Pf(t,e,o){return new t({type:"custom",check:"custom",fn:e,...j(o)})}function Tf(t){const e=Rf(o=>(o.addIssue=s=>{if(typeof s=="string")o.issues.push(Ts(s,o.value,e._zod.def));else{const n=s;n.fatal&&(n.continue=!1),n.code??(n.code="custom"),n.input??(n.input=o.value),n.inst??(n.inst=e),n.continue??(n.continue=!e._zod.def.abort),o.issues.push(Ts(n))}},t(o.value,o)));return e}function Rf(t,e){const o=new Lt({check:"custom",...j(e)});return o._zod.check=t,o}const zf=$("ZodISODateTime",(t,e)=>{mp.init(t,e),ye.init(t,e)});function Bf(t){return gf(zf,t)}const Vf=$("ZodISODate",(t,e)=>{_p.init(t,e),ye.init(t,e)});function Lf(t){return bf(Vf,t)}const Df=$("ZodISOTime",(t,e)=>{yp.init(t,e),ye.init(t,e)});function Mf(t){return mf(Df,t)}const Ff=$("ZodISODuration",(t,e)=>{xp.init(t,e),ye.init(t,e)});function jf(t){return _f(Ff,t)}const Nf=(t,e)=>{nc.init(t,e),t.name="ZodError",Object.defineProperties(t,{format:{value:o=>vh(t,o)},flatten:{value:o=>fh(t,o)},addIssue:{value:o=>{t.issues.push(o),t.message=JSON.stringify(t.issues,ki,2)}},addIssues:{value:o=>{t.issues.push(...o),t.message=JSON.stringify(t.issues,ki,2)}},isEmpty:{get(){return t.issues.length===0}}})},ft=$("ZodError",Nf,{Parent:Error}),Uf=nr(ft),Hf=ir(ft),Zf=Fn(ft),qf=jn(ft),Wf=mh(ft),Kf=_h(ft),Gf=yh(ft),Yf=xh(ft),Jf=wh(ft),Xf=Ch(ft),Qf=$h(ft),ev=kh(ft),tt=$("ZodType",(t,e)=>(We.init(t,e),t.def=e,t.type=e.type,Object.defineProperty(t,"_def",{value:e}),t.check=(...o)=>t.clone({...e,checks:[...e.checks??[],...o.map(s=>typeof s=="function"?{_zod:{check:s,def:{check:"custom"},onattach:[]}}:s)]}),t.clone=(o,s)=>hh(t,o,s),t.brand=()=>t,t.register=(o,s)=>(o.add(t,s),t),t.parse=(o,s)=>Uf(t,o,s,{callee:t.parse}),t.safeParse=(o,s)=>Zf(t,o,s),t.parseAsync=async(o,s)=>Hf(t,o,s,{callee:t.parseAsync}),t.safeParseAsync=async(o,s)=>qf(t,o,s),t.spa=t.safeParseAsync,t.encode=(o,s)=>Wf(t,o,s),t.decode=(o,s)=>Kf(t,o,s),t.encodeAsync=async(o,s)=>Gf(t,o,s),t.decodeAsync=async(o,s)=>Yf(t,o,s),t.safeEncode=(o,s)=>Jf(t,o,s),t.safeDecode=(o,s)=>Xf(t,o,s),t.safeEncodeAsync=async(o,s)=>Qf(t,o,s),t.safeDecodeAsync=async(o,s)=>ev(t,o,s),t.refine=(o,s)=>t.check(Fv(o,s)),t.superRefine=o=>t.check(jv(o)),t.overwrite=o=>t.check(js(o)),t.optional=()=>ml(t),t.nullable=()=>_l(t),t.nullish=()=>ml(_l(t)),t.nonoptional=o=>Rv(t,o),t.array=()=>yv(t),t.or=o=>pc([t,o]),t.and=o=>Cv(t,o),t.transform=o=>yl(t,kv(o)),t.default=o=>Av(t,o),t.prefault=o=>Pv(t,o),t.catch=o=>Bv(t,o),t.pipe=o=>yl(t,o),t.readonly=()=>Dv(t),t.describe=o=>{const s=t.clone();return Js.add(s,{description:o}),s},Object.defineProperty(t,"description",{get(){var o;return(o=Js.get(t))==null?void 0:o.description},configurable:!0}),t.meta=(...o)=>{if(o.length===0)return Js.get(t);const s=t.clone();return Js.add(s,o[0]),s},t.isOptional=()=>t.safeParse(void 0).success,t.isNullable=()=>t.safeParse(null).success,t)),hc=$("_ZodString",(t,e)=>{rr.init(t,e),tt.init(t,e);const o=t._zod.bag;t.format=o.format??null,t.minLength=o.minimum??null,t.maxLength=o.maximum??null,t.regex=(...s)=>t.check(yf(...s)),t.includes=(...s)=>t.check(Cf(...s)),t.startsWith=(...s)=>t.check($f(...s)),t.endsWith=(...s)=>t.check(kf(...s)),t.min=(...s)=>t.check(bn(...s)),t.max=(...s)=>t.check(dc(...s)),t.length=(...s)=>t.check(uc(...s)),t.nonempty=(...s)=>t.check(bn(1,...s)),t.lowercase=s=>t.check(xf(s)),t.uppercase=s=>t.check(wf(s)),t.trim=()=>t.check(If()),t.normalize=(...s)=>t.check(Sf(...s)),t.toLowerCase=()=>t.check(Ef()),t.toUpperCase=()=>t.check(Af())}),tv=$("ZodString",(t,e)=>{rr.init(t,e),hc.init(t,e),t.email=o=>t.check(Kp(ov,o)),t.url=o=>t.check(Qp(sv,o)),t.jwt=o=>t.check(vf(mv,o)),t.emoji=o=>t.check(ef(nv,o)),t.guid=o=>t.check(gl(bl,o)),t.uuid=o=>t.check(Gp(Xs,o)),t.uuidv4=o=>t.check(Yp(Xs,o)),t.uuidv6=o=>t.check(Jp(Xs,o)),t.uuidv7=o=>t.check(Xp(Xs,o)),t.nanoid=o=>t.check(tf(iv,o)),t.guid=o=>t.check(gl(bl,o)),t.cuid=o=>t.check(of(rv,o)),t.cuid2=o=>t.check(sf(lv,o)),t.ulid=o=>t.check(nf(av,o)),t.base64=o=>t.check(hf(vv,o)),t.base64url=o=>t.check(pf(gv,o)),t.xid=o=>t.check(rf(cv,o)),t.ksuid=o=>t.check(lf(dv,o)),t.ipv4=o=>t.check(af(uv,o)),t.ipv6=o=>t.check(cf(hv,o)),t.cidrv4=o=>t.check(df(pv,o)),t.cidrv6=o=>t.check(uf(fv,o)),t.e164=o=>t.check(ff(bv,o)),t.datetime=o=>t.check(Bf(o)),t.date=o=>t.check(Lf(o)),t.time=o=>t.check(Mf(o)),t.duration=o=>t.check(jf(o))});function Un(t){return Wp(tv,t)}const ye=$("ZodStringFormat",(t,e)=>{me.init(t,e),hc.init(t,e)}),ov=$("ZodEmail",(t,e)=>{cp.init(t,e),ye.init(t,e)}),bl=$("ZodGUID",(t,e)=>{lp.init(t,e),ye.init(t,e)}),Xs=$("ZodUUID",(t,e)=>{ap.init(t,e),ye.init(t,e)}),sv=$("ZodURL",(t,e)=>{dp.init(t,e),ye.init(t,e)}),nv=$("ZodEmoji",(t,e)=>{up.init(t,e),ye.init(t,e)}),iv=$("ZodNanoID",(t,e)=>{hp.init(t,e),ye.init(t,e)}),rv=$("ZodCUID",(t,e)=>{pp.init(t,e),ye.init(t,e)}),lv=$("ZodCUID2",(t,e)=>{fp.init(t,e),ye.init(t,e)}),av=$("ZodULID",(t,e)=>{vp.init(t,e),ye.init(t,e)}),cv=$("ZodXID",(t,e)=>{gp.init(t,e),ye.init(t,e)}),dv=$("ZodKSUID",(t,e)=>{bp.init(t,e),ye.init(t,e)}),uv=$("ZodIPv4",(t,e)=>{wp.init(t,e),ye.init(t,e)}),hv=$("ZodIPv6",(t,e)=>{Cp.init(t,e),ye.init(t,e)}),pv=$("ZodCIDRv4",(t,e)=>{$p.init(t,e),ye.init(t,e)}),fv=$("ZodCIDRv6",(t,e)=>{kp.init(t,e),ye.init(t,e)}),vv=$("ZodBase64",(t,e)=>{Sp.init(t,e),ye.init(t,e)}),gv=$("ZodBase64URL",(t,e)=>{Ep.init(t,e),ye.init(t,e)}),bv=$("ZodE164",(t,e)=>{Ap.init(t,e),ye.init(t,e)}),mv=$("ZodJWT",(t,e)=>{Pp.init(t,e),ye.init(t,e)}),_v=$("ZodArray",(t,e)=>{Tp.init(t,e),tt.init(t,e),t.element=e.element,t.min=(o,s)=>t.check(bn(o,s)),t.nonempty=o=>t.check(bn(1,o)),t.max=(o,s)=>t.check(dc(o,s)),t.length=(o,s)=>t.check(uc(o,s)),t.unwrap=()=>t.element});function yv(t,e){return Of(_v,t,e)}const xv=$("ZodUnion",(t,e)=>{Rp.init(t,e),tt.init(t,e),t.options=e.options});function pc(t,e){return new xv({type:"union",options:t,...j(e)})}const wv=$("ZodIntersection",(t,e)=>{zp.init(t,e),tt.init(t,e)});function Cv(t,e){return new wv({type:"intersection",left:t,right:e})}const $v=$("ZodTransform",(t,e)=>{Bp.init(t,e),tt.init(t,e),t._zod.parse=(o,s)=>{if(s.direction==="backward")throw new ec(t.constructor.name);o.addIssue=i=>{if(typeof i=="string")o.issues.push(Ts(i,o.value,e));else{const r=i;r.fatal&&(r.continue=!1),r.code??(r.code="custom"),r.input??(r.input=o.value),r.inst??(r.inst=t),o.issues.push(Ts(r))}};const n=e.transform(o.value,o);return n instanceof Promise?n.then(i=>(o.value=i,o)):(o.value=n,o)}});function kv(t){return new $v({type:"transform",transform:t})}const Sv=$("ZodOptional",(t,e)=>{Vp.init(t,e),tt.init(t,e),t.unwrap=()=>t._zod.def.innerType});function ml(t){return new Sv({type:"optional",innerType:t})}const Iv=$("ZodNullable",(t,e)=>{Lp.init(t,e),tt.init(t,e),t.unwrap=()=>t._zod.def.innerType});function _l(t){return new Iv({type:"nullable",innerType:t})}const Ev=$("ZodDefault",(t,e)=>{Dp.init(t,e),tt.init(t,e),t.unwrap=()=>t._zod.def.innerType,t.removeDefault=t.unwrap});function Av(t,e){return new Ev({type:"default",innerType:t,get defaultValue(){return typeof e=="function"?e():oc(e)}})}const Ov=$("ZodPrefault",(t,e)=>{Mp.init(t,e),tt.init(t,e),t.unwrap=()=>t._zod.def.innerType});function Pv(t,e){return new Ov({type:"prefault",innerType:t,get defaultValue(){return typeof e=="function"?e():oc(e)}})}const Tv=$("ZodNonOptional",(t,e)=>{Fp.init(t,e),tt.init(t,e),t.unwrap=()=>t._zod.def.innerType});function Rv(t,e){return new Tv({type:"nonoptional",innerType:t,...j(e)})}const zv=$("ZodCatch",(t,e)=>{jp.init(t,e),tt.init(t,e),t.unwrap=()=>t._zod.def.innerType,t.removeCatch=t.unwrap});function Bv(t,e){return new zv({type:"catch",innerType:t,catchValue:typeof e=="function"?e:()=>e})}const Vv=$("ZodPipe",(t,e)=>{Np.init(t,e),tt.init(t,e),t.in=e.in,t.out=e.out});function yl(t,e){return new Vv({type:"pipe",in:t,out:e})}const Lv=$("ZodReadonly",(t,e)=>{Up.init(t,e),tt.init(t,e),t.unwrap=()=>t._zod.def.innerType});function Dv(t){return new Lv({type:"readonly",innerType:t})}const Mv=$("ZodCustom",(t,e)=>{Hp.init(t,e),tt.init(t,e)});function Fv(t,e={}){return Pf(Mv,t,e)}function jv(t){return Tf(t)}const xl=Un().min(1,"Segment cannot be empty").max(8,"Segment cannot exceed 8 characters").refine(t=>/^[A-Za-z#@$][A-Za-z0-9#@$-]*$/.test(t),t=>({message:`Invalid segment "${t}". Must start with letter or #,@,$ and contain only letters, numbers, #,@,$, and hyphens`})),wl=Un().min(1,"Member name cannot be empty").max(8,"PDS member name cannot exceed 8 characters").refine(t=>/^[A-Za-z#@$][A-Za-z0-9#@$]*$/.test(t),t=>({message:`Invalid member "${t}". Must start with letter or #,@,$ and contain only letters, numbers, #,@,$ (no hyphens)`})),mn=Un().max(44,"Data set name cannot exceed 44 characters").refine(t=>!t.includes(".."),"Data set name cannot contain consecutive periods").refine(t=>!t.endsWith("."),"Data set name cannot end with a period").refine(t=>t.length>0&&t.split(".").length>=2,"Data set name must have at least two segments separated by periods (e.g., HLQ.DATASET)").refine(t=>{if(!t||t.length===0)return!1;const e=t.split(".");return e.length>0&&e.every(o=>o.length>0&&xl.safeParse(o).success)},t=>{const e=t.split(".");for(const o of e){const s=xl.safeParse(o);if(!s.success)return{message:s.error.issues&&s.error.issues.length>0?s.error.issues[0].message:`Invalid segment "${o}"`}}return{message:"Invalid segment found"}}),fc=Un().refine(t=>/^(.+)\(([^)]+)\)$/.test(t),"Invalid PDS member syntax. Use format DATASET.NAME(MEMBER)").refine(t=>{const e=t.match(/^(.+)\(([^)]+)\)$/);if(!e)return!1;const[,o,s]=e,n=mn.safeParse(o),i=wl.safeParse(s);return n.success&&i.success},t=>{const e=t.match(/^(.+)\(([^)]+)\)$/);if(!e)return{message:"Invalid PDS format"};const[,o,s]=e,n=mn.safeParse(o);if(!n.success)return{message:n.error.issues&&n.error.issues.length>0?n.error.issues[0].message:`Invalid dataset part: ${o}`};const i=wl.safeParse(s);return i.success?{message:"Unknown validation error"}:{message:i.error.issues&&i.error.issues.length>0?i.error.issues[0].message:`Invalid member part: ${s}`}});pc([mn,fc]);function Cl(t){if(t.success)return{isValid:!0};let e="Validation error";return t.error.issues&&Array.isArray(t.error.issues)&&t.error.issues.length>0&&(e=t.error.issues[0].message),{isValid:!1,error:e}}function $l(t){if(!t||t.trim()==="")return{isValid:!0};const e=t.trim();if(e.includes("(")&&e.includes(")")){const o=fc.safeParse(e);return Cl(o)}else{const o=mn.safeParse(e);return Cl(o)}}const Nv={class:"space-y-6 w-full"},Uv={class:"w-full"},Hv={class:"flex items-center mb-4 p-4 w-full"},Zv={key:0,class:"text-[var(--vscode-descriptionForeground)] italic p-4 text-center"},qv={key:1,class:"bg-[var(--vscode-textBlockQuote-background)] p-4 rounded border-l-4 border-[var(--vscode-textBlockQuote-border)]"},Wv={key:0,class:"mb-4"},Kv={class:"text-sm font-medium mb-2 text-[var(--vscode-descriptionForeground)] text-right"},Gv={class:"flex-1"},Yv={class:"font-medium"},Jv={class:"text-sm text-[var(--vscode-descriptionForeground)] ml-2"},Xv={class:"flex space-x-2"},Qv=["onClick"],eg=["onClick","disabled"],tg={key:0},og=["onClick"],sg={key:1},ng={class:"text-sm font-medium mb-2 text-[var(--vscode-descriptionForeground)] text-right"},ig={class:"flex-1"},rg={class:"font-medium"},lg={class:"text-sm text-[var(--vscode-descriptionForeground)] ml-2"},ag={class:"flex space-x-2"},cg=["onClick"],dg=["onClick","disabled"],ug={key:0},hg=["onClick"],pg={key:0,class:"border border-[var(--vscode-widget-border)] rounded p-6 bg-[var(--vscode-textBlockQuote-background)]"},fg={class:"text-lg font-semibold mb-4"},vg={class:"space-y-4"},gg={class:"grid grid-cols-2 gap-4"},bg={class:"grid grid-cols-2 gap-4"},mg={key:0,class:"text-xs text-[var(--vscode-inputValidation-errorForeground)] mt-1 px-1"},_g={key:0,class:"text-xs text-[var(--vscode-inputValidation-errorForeground)] mt-1 px-1"},yg={class:"border-t pt-4"},xg={class:"flex space-x-4"},wg={class:"flex items-center space-x-2 cursor-pointer"},Cg=["disabled"],$g={class:"flex items-center space-x-2 cursor-pointer"},kg=["disabled"],Sg={class:"text-xs text-[var(--vscode-descriptionForeground)] mt-2"},Ig={key:0},Eg={key:1},Ag={key:0,class:"border-t pt-4"},Og={class:"grid grid-cols-2 gap-4"},Pg={class:"mt-4"},Tg={key:1,class:"border-t pt-4"},Rg={class:"grid grid-cols-2 gap-4"},zg={class:"mt-4"},Bg={class:"flex items-center space-x-2"},Vg={class:"border-t pt-4"},Lg={class:"mb-4"},Dg={class:"bg-[var(--vscode-textCodeBlock-background)] p-4 rounded"},Mg={class:"flex items-center justify-between mb-3"},Fg={class:"grid grid-cols-2 gap-4"},jg={class:"grid grid-cols-2 gap-4 mt-4"},Ng={class:"mt-4"},Ug={class:"flex items-center space-x-2"},Hg={class:"text-xs bg-[var(--vscode-textCodeBlock-background)] p-2 rounded"},Zg={class:"flex space-x-3"},qg=Bn({__name:"ConfigurationTab",props:{configurations:{},showForm:{type:Boolean},editingIndex:{},currentConfig:{},isLoading:{type:Boolean},loadingConfigIndex:{}},emits:["create-new","edit-config","execute-config","delete-config","save-config","cancel-config","type-change","test-zowe-connection"],setup(t,{emit:e}){const o=t,s=qe(()=>o.configurations.filter(d=>d.saveLocation==="user").sort((d,a)=>d.type!==a.type?d.type==="CICS"?-1:a.type==="CICS"?1:0:d.name.localeCompare(a.name))),n=qe(()=>o.configurations.filter(d=>d.saveLocation==="workspace").sort((d,a)=>d.type!==a.type?d.type==="CICS"?-1:a.type==="CICS"?1:0:d.name.localeCompare(a.name))),i=qe(()=>$l(o.currentConfig.commAreaIn||"")),r=qe(()=>$l(o.currentConfig.commAreaOut||"")),l=qe(()=>{const d=o.currentConfig.name,a=o.currentConfig.type,h=!!(d&&d.trim()&&a&&a.trim()),m=i.value.isValid&&r.value.isValid;return h&&m}),c=d=>o.configurations.findIndex(a=>a.name===d.name&&a.type===d.type&&a.saveLocation===d.saveLocation);return(d,a)=>{var I;const h=qt("vscode-button"),m=qt("vscode-progress-ring"),y=qt("vscode-divider");return N(),U("div",Nv,[v("div",Uv,[v("div",Hv,[le(h,{onClick:a[0]||(a[0]=b=>d.$emit("create-new")),appearance:"primary",class:"ml-auto"},{default:Qe(()=>[...a[24]||(a[24]=[Pe(" ＋ Configuration ",-1)])]),_:1})]),d.configurations.length===0?(N(),U("div",Zv," No configurations yet. Create your first configuration above. ")):Ae("",!0),d.configurations.length>0?(N(),U("div",qv,[a[25]||(a[25]=v("h4",{class:"font-semibold mb-3"},"Existing Configurations",-1)),s.value.length>0?(N(),U("div",Wv,[v("div",Kv," User Settings ("+X(s.value.length)+") ",1),(N(!0),U(et,null,As(s.value,(b,te)=>(N(),U("div",{key:`user-${te}`,class:"flex items-center justify-between p-2 mb-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] rounded text-left"},[v("div",Gv,[v("span",Yv,X(b.name),1),v("span",Jv,"("+X(b.type)+")",1)]),v("div",Xv,[v("button",{onClick:M=>d.$emit("edit-config",c(b)),class:"p-1 hover:bg-[var(--vscode-toolbar-hoverBackground)] rounded",title:"Edit configuration"}," ✏️ ",8,Qv),v("button",{onClick:M=>d.$emit("execute-config",b),class:"p-1 hover:bg-[var(--vscode-toolbar-hoverBackground)] rounded",title:"Execute injection",disabled:d.isLoading},[d.loadingConfigIndex!==c(b)?(N(),U("span",tg,"▶️")):(N(),wi(m,{key:1,style:{width:"14px",height:"14px"}}))],8,eg),v("button",{onClick:M=>d.$emit("delete-config",c(b)),class:"p-1 hover:bg-[var(--vscode-toolbar-hoverBackground)] rounded",title:"Delete configuration"}," 🗑️ ",8,og)])]))),128))])):Ae("",!0),n.value.length>0?(N(),U("div",sg,[v("div",ng," Workspace Settings ("+X(n.value.length)+") ",1),(N(!0),U(et,null,As(n.value,(b,te)=>(N(),U("div",{key:`workspace-${te}`,class:"flex items-center justify-between p-2 mb-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] rounded text-left"},[v("div",ig,[v("span",rg,X(b.name),1),v("span",lg,"("+X(b.type)+")",1)]),v("div",ag,[v("button",{onClick:M=>d.$emit("edit-config",c(b)),class:"p-1 hover:bg-[var(--vscode-toolbar-hoverBackground)] rounded",title:"Edit configuration"}," ✏️ ",8,cg),v("button",{onClick:M=>d.$emit("execute-config",b),class:"p-1 hover:bg-[var(--vscode-toolbar-hoverBackground)] rounded",title:"Execute injection",disabled:d.isLoading},[d.loadingConfigIndex!==c(b)?(N(),U("span",ug,"▶️")):(N(),wi(m,{key:1,style:{width:"14px",height:"14px"}}))],8,dg),v("button",{onClick:M=>d.$emit("delete-config",c(b)),class:"p-1 hover:bg-[var(--vscode-toolbar-hoverBackground)] rounded",title:"Delete configuration"}," 🗑️ ",8,hg)])]))),128))])):Ae("",!0)])):Ae("",!0)]),d.showForm||d.editingIndex!==-1?(N(),U("div",pg,[v("h3",fg,X(d.editingIndex!==-1?"Edit Configuration":"New Configuration"),1),v("div",vg,[v("div",gg,[v("div",null,[a[26]||(a[26]=v("label",{class:"block text-sm font-medium mb-2"},"Name *",-1)),Se(v("input",{"onUpdate:modelValue":a[1]||(a[1]=b=>d.currentConfig.name=b),type:"text",placeholder:"Configuration name",class:"w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)]"},null,512),[[Je,d.currentConfig.name]])]),v("div",null,[a[28]||(a[28]=v("label",{class:"block text-sm font-medium mb-2"},"Type *",-1)),Se(v("select",{"onUpdate:modelValue":a[2]||(a[2]=b=>d.currentConfig.type=b),onChange:a[3]||(a[3]=b=>d.$emit("type-change")),class:"w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded"},[...a[27]||(a[27]=[v("option",{value:"CICS"},"CICS",-1),v("option",{value:"IMS"},"IMS",-1)])],544),[[Xa,d.currentConfig.type]])])]),v("div",null,[a[29]||(a[29]=v("label",{class:"block text-sm font-medium mb-2"},"Transaction Name",-1)),Se(v("input",{"onUpdate:modelValue":a[4]||(a[4]=b=>d.currentConfig.transactionName=b),type:"text",placeholder:"Transaction name",class:"w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)]"},null,512),[[Je,d.currentConfig.transactionName]])]),v("div",bg,[v("div",null,[a[30]||(a[30]=v("label",{class:"block text-sm font-medium mb-2"},"Comm Area In",-1)),Se(v("textarea",{"onUpdate:modelValue":a[5]||(a[5]=b=>d.currentConfig.commAreaIn=b),rows:"4",placeholder:"z/OS dataset name (e.g., HLQ.DATASET or HLQ.PDS(MEMBER))",class:oo({"w-full px-3 py-2 bg-[var(--vscode-input-background)] border text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)] font-mono text-sm resize-y":!0,"border-[var(--vscode-input-border)]":i.value.isValid,"border-[var(--vscode-inputValidation-errorBorder)] bg-[var(--vscode-inputValidation-errorBackground)]":!i.value.isValid})},null,2),[[Je,d.currentConfig.commAreaIn]]),i.value.isValid?Ae("",!0):(N(),U("div",mg,X(i.value.error),1))]),v("div",null,[a[31]||(a[31]=v("label",{class:"block text-sm font-medium mb-2"},"Comm Area Out",-1)),Se(v("textarea",{"onUpdate:modelValue":a[6]||(a[6]=b=>d.currentConfig.commAreaOut=b),rows:"4",placeholder:"z/OS dataset name (e.g., HLQ.DATASET or HLQ.PDS(MEMBER))",class:oo({"w-full px-3 py-2 bg-[var(--vscode-input-background)] border text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)] font-mono text-sm resize-y":!0,"border-[var(--vscode-input-border)]":r.value.isValid,"border-[var(--vscode-inputValidation-errorBorder)] bg-[var(--vscode-inputValidation-errorBackground)]":!r.value.isValid})},null,2),[[Je,d.currentConfig.commAreaOut]]),r.value.isValid?Ae("",!0):(N(),U("div",_g,X(r.value.error),1))])]),v("div",yg,[a[32]||(a[32]=v("h4",{class:"font-medium mb-3"},"Save Location",-1)),v("div",xg,[v("label",wg,[Se(v("input",{type:"radio","onUpdate:modelValue":a[7]||(a[7]=b=>d.currentConfig.saveLocation=b),value:"workspace",disabled:d.editingIndex!==-1,class:"text-[var(--vscode-checkbox-selectBackground)]"},null,8,Cg),[[tl,d.currentConfig.saveLocation]]),v("span",{class:oo(["text-sm",d.editingIndex!==-1?"text-[var(--vscode-descriptionForeground)]":""])},"Workspace Settings",2)]),v("label",$g,[Se(v("input",{type:"radio","onUpdate:modelValue":a[8]||(a[8]=b=>d.currentConfig.saveLocation=b),value:"user",disabled:d.editingIndex!==-1,class:"text-[var(--vscode-checkbox-selectBackground)]"},null,8,kg),[[tl,d.currentConfig.saveLocation]]),v("span",{class:oo(["text-sm",d.editingIndex!==-1?"text-[var(--vscode-descriptionForeground)]":""])},"User Settings",2)])]),v("p",Sg,[d.editingIndex!==-1?(N(),U("span",Ig,"Save location cannot be changed when editing an existing configuration.")):(N(),U("span",Eg,"Workspace settings are specific to this project, User settings are global to all projects."))])]),d.currentConfig.type==="CICS"?(N(),U("div",Ag,[a[36]||(a[36]=v("h4",{class:"font-medium mb-3"},"CICS Specific",-1)),v("div",Og,[v("div",null,[a[33]||(a[33]=v("label",{class:"block text-sm font-medium mb-2"},"CICS Region",-1)),Se(v("input",{"onUpdate:modelValue":a[9]||(a[9]=b=>d.currentConfig.cicsRegion=b),type:"text",placeholder:"CICS region name",class:"w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)]"},null,512),[[Je,d.currentConfig.cicsRegion]])]),v("div",null,[a[34]||(a[34]=v("label",{class:"block text-sm font-medium mb-2"},"Program Name",-1)),Se(v("input",{"onUpdate:modelValue":a[10]||(a[10]=b=>d.currentConfig.programName=b),type:"text",placeholder:"Program name",class:"w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)]"},null,512),[[Je,d.currentConfig.programName]])])]),v("div",Pg,[a[35]||(a[35]=v("label",{class:"block text-sm font-medium mb-2"},"Comm Area Length",-1)),Se(v("input",{"onUpdate:modelValue":a[11]||(a[11]=b=>d.currentConfig.commAreaLength=b),type:"number",placeholder:"Length in bytes",class:"w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)]"},null,512),[[Je,d.currentConfig.commAreaLength,void 0,{number:!0}]])])])):Ae("",!0),d.currentConfig.type==="IMS"?(N(),U("div",Tg,[a[40]||(a[40]=v("h4",{class:"font-medium mb-3"},"IMS Specific",-1)),v("div",Rg,[v("div",null,[a[37]||(a[37]=v("label",{class:"block text-sm font-medium mb-2"},"IMS Region Name",-1)),Se(v("input",{"onUpdate:modelValue":a[12]||(a[12]=b=>d.currentConfig.imsRegionName=b),type:"text",placeholder:"IMS region name",class:"w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)]"},null,512),[[Je,d.currentConfig.imsRegionName]])]),v("div",null,[a[38]||(a[38]=v("label",{class:"block text-sm font-medium mb-2"},"Message Type",-1)),Se(v("input",{"onUpdate:modelValue":a[13]||(a[13]=b=>d.currentConfig.messageType=b),type:"text",placeholder:"Message type",class:"w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)]"},null,512),[[Je,d.currentConfig.messageType]])])]),v("div",zg,[v("label",Bg,[Se(v("input",{type:"checkbox","onUpdate:modelValue":a[14]||(a[14]=b=>d.currentConfig.testWithAnswer=b),class:"rounded"},null,512),[[Qr,d.currentConfig.testWithAnswer]]),a[39]||(a[39]=v("span",{class:"text-sm font-medium"},"Test with Answer",-1))])])])):Ae("",!0),v("div",Vg,[a[51]||(a[51]=v("h4",{class:"font-medium mb-3"},"Mainframe JCL Execution (Optional)",-1)),a[52]||(a[52]=v("p",{class:"text-xs text-[var(--vscode-descriptionForeground)] mb-4"}," Configure JCL template and z/OSMF connection to enable automatic job execution on mainframe. ",-1)),v("div",Lg,[a[41]||(a[41]=v("label",{class:"block text-sm font-medium mb-2"},"JCL Template",-1)),Se(v("textarea",{"onUpdate:modelValue":a[15]||(a[15]=b=>d.currentConfig.jclTemplate=b),rows:"8",placeholder:`//JOBNAME JOB (ACCOUNT),'DESCRIPTION',CLASS=A,MSGCLASS=H\r
//STEP1 EXEC PGM={PROGRAM_NAME}\r
//SYSIN DD *\r
{COMM_AREA_IN}\r
/*\r
//SYSOUT DD SYSOUT=*\r
\r
Available placeholders:\r
{NAME}, {TYPE}, {TRANSACTION}, {COMM_AREA_IN}, {COMM_AREA_OUT}\r
{CICS_REGION}, {PROGRAM_NAME}, {COMM_AREA_LENGTH} (CICS only)\r
{IMS_REGION}, {MESSAGE_TYPE}, {TEST_WITH_ANSWER} (IMS only)\r
{TIMESTAMP}, {DATE}, {TIME}`,class:"w-full px-3 py-2 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)] font-mono text-sm resize-y"},null,512),[[Je,d.currentConfig.jclTemplate]]),a[42]||(a[42]=v("div",{class:"text-xs text-[var(--vscode-descriptionForeground)] mt-1"}," Use placeholders like {NAME}, {PROGRAM_NAME}, {COMM_AREA_IN} that will be replaced with actual values. ",-1))]),v("div",Dg,[v("div",Mg,[a[44]||(a[44]=v("h5",{class:"font-medium"},"z/OSMF Connection",-1)),le(h,{onClick:a[16]||(a[16]=b=>d.$emit("test-zowe-connection")),appearance:"secondary",disabled:!((I=d.currentConfig.zoweConnection)!=null&&I.hostname),class:"text-xs"},{default:Qe(()=>[...a[43]||(a[43]=[Pe(" Test Connection ",-1)])]),_:1},8,["disabled"])]),v("div",Fg,[v("div",null,[a[45]||(a[45]=v("label",{class:"block text-sm font-medium mb-2"},"Hostname",-1)),Se(v("input",{"onUpdate:modelValue":a[17]||(a[17]=b=>d.currentConfig.zoweConnection.hostname=b),type:"text",placeholder:"z/OSMF hostname (e.g., zos.example.com)",class:"w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)]"},null,512),[[Je,d.currentConfig.zoweConnection.hostname]])]),v("div",null,[a[46]||(a[46]=v("label",{class:"block text-sm font-medium mb-2"},"Port",-1)),Se(v("input",{"onUpdate:modelValue":a[18]||(a[18]=b=>d.currentConfig.zoweConnection.port=b),type:"number",placeholder:"443",class:"w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)]"},null,512),[[Je,d.currentConfig.zoweConnection.port,void 0,{number:!0}]])])]),v("div",jg,[v("div",null,[a[47]||(a[47]=v("label",{class:"block text-sm font-medium mb-2"},"Username",-1)),Se(v("input",{"onUpdate:modelValue":a[19]||(a[19]=b=>d.currentConfig.zoweConnection.user=b),type:"text",placeholder:"z/OS username",class:"w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)]"},null,512),[[Je,d.currentConfig.zoweConnection.user]])]),v("div",null,[a[48]||(a[48]=v("label",{class:"block text-sm font-medium mb-2"},"Password",-1)),Se(v("input",{"onUpdate:modelValue":a[20]||(a[20]=b=>d.currentConfig.zoweConnection.password=b),type:"password",placeholder:"z/OS password",class:"w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)]"},null,512),[[Je,d.currentConfig.zoweConnection.password]])])]),v("div",Ng,[v("label",Ug,[Se(v("input",{type:"checkbox","onUpdate:modelValue":a[21]||(a[21]=b=>d.currentConfig.zoweConnection.rejectUnauthorized=b),class:"rounded"},null,512),[[Qr,d.currentConfig.zoweConnection.rejectUnauthorized]]),a[49]||(a[49]=v("span",{class:"text-sm font-medium"},"Verify SSL certificates",-1))]),a[50]||(a[50]=v("div",{class:"text-xs text-[var(--vscode-descriptionForeground)] mt-1 ml-6"}," Uncheck for development environments with self-signed certificates ",-1))])])]),v("div",Hg,' Debug: name="'+X(d.currentConfig.name)+'", type="'+X(d.currentConfig.type)+'", saveLocation="'+X(d.currentConfig.saveLocation)+'", valid='+X(l.value),1),le(y),v("div",Zg,[le(h,{onClick:a[22]||(a[22]=b=>d.$emit("save-config")),appearance:"primary",disabled:!l.value},{default:Qe(()=>[Pe(X(d.editingIndex!==-1?"Update":"Save")+" Configuration ",1)]),_:1},8,["disabled"]),le(h,{onClick:a[23]||(a[23]=b=>d.$emit("cancel-config")),appearance:"secondary"},{default:Qe(()=>[...a[53]||(a[53]=[Pe(" Cancel ",-1)])]),_:1})])])])):Ae("",!0)])}}});const Wg=(t,e)=>{const o=t.__vccOpts||t;for(const[s,n]of e)o[s]=n;return o},Kg=Wg(qg,[["__scopeId","data-v-4f96a482"]]),Gg={class:"space-y-4 min-h-[400px] w-full"},Yg={class:"bg-[var(--vscode-textBlockQuote-background)] p-4 rounded border-l-4 border-[var(--vscode-textBlockQuote-border)] h-[80px] w-full"},Jg=["label"],Xg=["value"],Qg=["label"],eb=["value"],tb={class:"bg-[var(--vscode-textBlockQuote-background)] p-4 rounded border-l-4 border-[var(--vscode-textBlockQuote-border)] min-h-[200px] w-full"},ob={key:0,class:"text-[var(--vscode-descriptionForeground)] italic flex items-center justify-center h-[150px]"},sb={key:1,class:"space-y-3"},nb={class:"grid grid-cols-2 gap-4 text-sm h-[80px]"},ib={class:"space-y-1"},rb={class:"space-y-1"},lb={class:"h-4"},ab={key:0},cb={key:1},db={class:"h-4"},ub={key:0},hb={key:1},pb={class:"border-t pt-2"},fb={class:"grid grid-cols-2 gap-4 text-xs h-[60px]"},vb={class:"bg-[var(--vscode-textCodeBlock-background)] p-1 rounded font-mono text-xs overflow-y-auto h-[40px]"},gb={class:"bg-[var(--vscode-textCodeBlock-background)] p-1 rounded font-mono text-xs overflow-y-auto h-[40px]"},bb={class:"h-[40px] flex items-center p-4 space-x-3 w-full"},mb={class:"h-[30px] flex items-center w-full"},_b={key:0,class:"flex items-center space-x-2"},yb=Bn({__name:"InjectionTab",props:{configurations:{},selectedConfigurationIndex:{},isLoading:{type:Boolean}},emits:["selection-changed","execute-injection","test-configuration"],setup(t,{emit:e}){const o=t,s=bt(o.selectedConfigurationIndex),n=qe(()=>o.configurations.filter(d=>d.saveLocation==="user").sort((d,a)=>d.type!==a.type?d.type==="CICS"?-1:a.type==="CICS"?1:0:d.name.localeCompare(a.name))),i=qe(()=>o.configurations.filter(d=>d.saveLocation==="workspace").sort((d,a)=>d.type!==a.type?d.type==="CICS"?-1:a.type==="CICS"?1:0:d.name.localeCompare(a.name))),r=qe(()=>{const d=parseInt(s.value);return d>=0?o.configurations[d]:null}),l=qe(()=>r.value!==null&&!o.isLoading),c=d=>o.configurations.findIndex(a=>a.name===d.name&&a.type===d.type&&a.saveLocation===d.saveLocation);return(d,a)=>{const h=qt("vscode-divider"),m=qt("vscode-button"),y=qt("vscode-progress-ring");return N(),U("div",Gg,[v("div",Yg,[a[5]||(a[5]=v("h3",{class:"font-semibold mb-2"},"Select Configuration",-1)),Se(v("select",{"onUpdate:modelValue":a[0]||(a[0]=I=>s.value=I),class:"w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded h-[36px]",size:"1",onChange:a[1]||(a[1]=I=>d.$emit("selection-changed",s.value))},[a[4]||(a[4]=v("option",{value:"-1"},"Select a configuration...",-1)),n.value.length>0?(N(),U("optgroup",{key:0,label:` User Settings (${n.value.length}) `,class:"text-right"},[(N(!0),U(et,null,As(n.value,(I,b)=>(N(),U("option",{key:`user-${b}`,value:c(I).toString(),class:"text-left"},X(I.name)+" ("+X(I.type)+") ",9,Xg))),128))],8,Jg)):Ae("",!0),i.value.length>0?(N(),U("optgroup",{key:1,label:` Workspace Settings (${i.value.length}) `,class:"text-right"},[(N(!0),U(et,null,As(i.value,(I,b)=>(N(),U("option",{key:`workspace-${b}`,value:c(I).toString(),class:"text-left"},X(I.name)+" ("+X(I.type)+") ",9,eb))),128))],8,Qg)):Ae("",!0)],544),[[Xa,s.value]])]),v("div",tb,[a[16]||(a[16]=v("h3",{class:"font-semibold mb-2"},"Selected Configuration",-1)),r.value?Ae("",!0):(N(),U("div",ob," No configuration selected. Please select one from the dropdown above. ")),r.value?(N(),U("div",sb,[v("div",nb,[v("div",ib,[v("div",null,[a[6]||(a[6]=v("strong",null,"Name:",-1)),Pe(" "+X(r.value.name),1)]),v("div",null,[a[7]||(a[7]=v("strong",null,"Type:",-1)),Pe(" "+X(r.value.type),1)]),v("div",null,[a[8]||(a[8]=v("strong",null,"Save Location:",-1)),Pe(" "+X(r.value.saveLocation==="workspace"?"Workspace":"User"),1)])]),v("div",rb,[v("div",null,[a[9]||(a[9]=v("strong",null,"Transaction:",-1)),Pe(" "+X(r.value.transactionName||"N/A"),1)]),v("div",lb,[r.value.type==="CICS"?(N(),U("span",ab,[a[10]||(a[10]=v("strong",null,"Program:",-1)),Pe(" "+X(r.value.programName||"N/A"),1)])):Ae("",!0),r.value.type==="IMS"?(N(),U("span",cb,[a[11]||(a[11]=v("strong",null,"IMS Region:",-1)),Pe(" "+X(r.value.imsRegionName||"N/A"),1)])):Ae("",!0)]),v("div",db,[r.value.type==="CICS"?(N(),U("span",ub,[a[12]||(a[12]=v("strong",null,"CICS Region:",-1)),Pe(" "+X(r.value.cicsRegion||"N/A"),1)])):Ae("",!0),r.value.type==="IMS"?(N(),U("span",hb,[a[13]||(a[13]=v("strong",null,"Message Type:",-1)),Pe(" "+X(r.value.messageType||"N/A"),1)])):Ae("",!0)])])]),v("div",pb,[v("div",fb,[v("div",null,[a[14]||(a[14]=v("div",{class:"font-medium mb-1"},"Comm Area In:",-1)),v("div",vb,X(r.value.commAreaIn||"Not set"),1)]),v("div",null,[a[15]||(a[15]=v("div",{class:"font-medium mb-1"},"Comm Area Out:",-1)),v("div",gb,X(r.value.commAreaOut||"Not set"),1)])])])])):Ae("",!0)]),le(h),v("div",bb,[le(m,{onClick:a[2]||(a[2]=I=>d.$emit("execute-injection")),appearance:"primary",disabled:!l.value||d.isLoading},{default:Qe(()=>[...a[17]||(a[17]=[Pe(" Execute Injection ",-1)])]),_:1},8,["disabled"]),le(m,{onClick:a[3]||(a[3]=I=>d.$emit("test-configuration")),appearance:"secondary",disabled:!r.value||d.isLoading},{default:Qe(()=>[...a[18]||(a[18]=[Pe(" Test Configuration ",-1)])]),_:1},8,["disabled"])]),v("div",mb,[d.isLoading?(N(),U("div",_b,[le(y),a[19]||(a[19]=v("span",null,"Processing...",-1))])):Ae("",!0)])])}}}),xb={class:"space-y-4 w-full p-4"},wb={key:0,class:"text-[var(--vscode-descriptionForeground)] italic"},Cb={class:"flex justify-between items-center mb-2"},$b={class:"font-semibold"},kb={class:"text-sm mb-2"},Sb={class:"bg-[var(--vscode-textCodeBlock-background)] p-2 rounded text-xs overflow-x-auto"},Ib=Bn({__name:"ResultsTab",props:{results:{}},setup(t){return(e,o)=>(N(),U("div",xb,[o[0]||(o[0]=v("h3",{class:"text-lg font-semibold"},"Execution Results",-1)),e.results.length===0?(N(),U("div",wb," No results yet. Execute an injection to see results here. ")):Ae("",!0),(N(!0),U(et,null,As(e.results,(s,n)=>(N(),U("div",{key:n,class:"border border-[var(--vscode-widget-border)] rounded p-4"},[v("div",Cb,[v("span",$b,X(s.timestamp),1),v("span",{class:oo(["px-2 py-1 rounded text-xs",s.success?"bg-green-600 text-white":"bg-red-600 text-white"])},X(s.success?"Success":"Failed"),3)]),v("p",kb,X(s.type)+" - "+X(s.configName),1),v("pre",Sb,X(s.message),1)]))),128))]))}}),Eb={class:"min-h-screen bg-[var(--vscode-editor-background)] text-[var(--vscode-editor-foreground)]"},Ab={class:"container mx-auto p-6 min-w-[800px] overflow-x-auto"},Ob=Bn({__name:"App",setup(t){const e=bt([]),o=bt(!1),s=bt(-1),n=bt("-1"),i=bt([]),r=bt(!1),l=bt(-1),c=bt(0),d=bt({name:"",type:"CICS",commAreaIn:"",commAreaOut:"",transactionName:"",saveLocation:"workspace",cicsRegion:"",programName:"",commAreaLength:0,imsRegionName:"",messageType:"",testWithAnswer:!1,jclTemplate:"",zoweConnection:{hostname:"",port:443,user:"",password:"",rejectUnauthorized:!1}}),a=bt(null),h=qe(()=>{const _=parseInt(n.value);return _>=0?e.value[_]:null}),m=qe(()=>{const _=d.value.name,P=d.value.type;return!!(_&&_.trim()&&P&&P.trim())});qe(()=>h.value!==null),qe(()=>e.value.filter(_=>_.saveLocation==="user").sort((_,P)=>_.type!==P.type?_.type==="CICS"?-1:P.type==="CICS"?1:0:_.name.localeCompare(P.name))),qe(()=>e.value.filter(_=>_.saveLocation==="workspace").sort((_,P)=>_.type!==P.type?_.type==="CICS"?-1:P.type==="CICS"?1:0:_.name.localeCompare(P.name)));const y=_=>e.value.findIndex(P=>P.name===_.name&&P.type===_.type&&P.saveLocation===_.saveLocation),I=window.acquireVsCodeApi(),b=()=>{d.value={name:"",type:"CICS",commAreaIn:"",commAreaOut:"",transactionName:"",saveLocation:"workspace",cicsRegion:"",programName:"",commAreaLength:0,imsRegionName:"",messageType:"",testWithAnswer:!1,jclTemplate:"",zoweConnection:{hostname:"",port:443,user:"",password:"",rejectUnauthorized:!1}}},te=()=>{d.value.type==="CICS"?(d.value.imsRegionName="",d.value.messageType="",d.value.testWithAnswer=!1):d.value.type==="IMS"&&(d.value.cicsRegion="",d.value.programName="",d.value.commAreaLength=0)},M=()=>{if(!m.value)return;const _=ce(d.value);s.value!==-1?(e.value[s.value]=_,I.postMessage({command:"updateConfiguration",data:{originalConfig:ce(a.value),updatedConfig:_,location:_.saveLocation,configIndex:s.value}}),s.value=-1,a.value=null,o.value=!1):(e.value.push(_),ct(_),o.value=!1),b()},ne=_=>{s.value=_,d.value={...e.value[_]},a.value={...e.value[_]},o.value=!1},he=async _=>{const P=e.value[_];if(e.value.splice(_,1),n.value===_.toString()&&(n.value="-1"),P){const Z=e.value.filter(q=>q.saveLocation===P.saveLocation);I.postMessage({command:"saveAllConfigurations",data:{configurations:Z,location:P.saveLocation}})}},V=()=>{o.value=!1,s.value=-1,a.value=null,b()},ce=_=>{try{const P={name:_.name,type:_.type,commAreaIn:_.commAreaIn||"",commAreaOut:_.commAreaOut||"",transactionName:_.transactionName||"",saveLocation:_.saveLocation};return _.jclTemplate!==void 0&&_.jclTemplate!==""&&(P.jclTemplate=_.jclTemplate),_.zoweConnection&&_.zoweConnection.hostname&&(P.zoweConnection={hostname:_.zoweConnection.hostname,port:_.zoweConnection.port||443,user:_.zoweConnection.user||"",password:_.zoweConnection.password||"",rejectUnauthorized:_.zoweConnection.rejectUnauthorized!==void 0?_.zoweConnection.rejectUnauthorized:!1}),_.type==="CICS"?(_.cicsRegion!==void 0&&_.cicsRegion!==""&&(P.cicsRegion=_.cicsRegion),_.programName!==void 0&&_.programName!==""&&(P.programName=_.programName),_.commAreaLength!==void 0&&_.commAreaLength!==0&&(P.commAreaLength=_.commAreaLength)):_.type==="IMS"&&(_.imsRegionName!==void 0&&_.imsRegionName!==""&&(P.imsRegionName=_.imsRegionName),_.messageType!==void 0&&_.messageType!==""&&(P.messageType=_.messageType),_.testWithAnswer!==void 0&&(P.testWithAnswer=_.testWithAnswer)),P}catch(P){return console.error("Error cleaning configuration:",P),{}}},ct=_=>{console.log("Saving single configuration to VSCode:",_);const P=ce(_);console.log("Cleaned configuration:",P),I.postMessage({command:"saveConfiguration",data:{configuration:P,location:_.saveLocation}})},Ge=()=>{I.postMessage({command:"loadAllConfigurations"})},dt=async _=>{var Z;const P=y(_);l.value=P,r.value=!0;try{await new Promise(Y=>setTimeout(Y,2e3));const q={timestamp:new Date().toLocaleString(),success:Math.random()>.3,type:_.type,configName:_.name,message:`${_.type} injection executed for ${_.name}
Transaction: ${_.transactionName}
Comm Area In: ${(Z=_.commAreaIn)==null?void 0:Z.substring(0,100)}...`};i.value.unshift(q),I.postMessage({command:"injectionResult",data:q}),Qt()}catch(q){const Y={timestamp:new Date().toLocaleString(),success:!1,type:_.type,configName:_.name,message:`Injection failed: ${q}`};i.value.unshift(Y)}finally{r.value=!1,l.value=-1}},Xt=async()=>{var _;if(h.value){r.value=!0;try{await new Promise(Z=>setTimeout(Z,2e3));const P={timestamp:new Date().toLocaleString(),success:Math.random()>.3,type:h.value.type,configName:h.value.name,message:`${h.value.type} injection executed for ${h.value.name}
Transaction: ${h.value.transactionName}
Comm Area In: ${(_=h.value.commAreaIn)==null?void 0:_.substring(0,100)}...`};i.value.unshift(P),I.postMessage({command:"injectionResult",data:P}),Qt()}catch(P){const Z={timestamp:new Date().toLocaleString(),success:!1,type:h.value.type,configName:h.value.name,message:`Injection failed: ${P}`};i.value.unshift(Z)}finally{r.value=!1}}},Dt=()=>{var _;h.value&&(h.value.jclTemplate&&((_=h.value.zoweConnection)!=null&&_.hostname)?I.postMessage({command:"executeJcl",data:{configuration:ce(h.value),jclTemplate:h.value.jclTemplate,zoweConnection:h.value.zoweConnection}}):I.postMessage({command:"testConfiguration",data:ce(h.value)}))},fo=()=>{var _;(_=d.value.zoweConnection)!=null&&_.hostname&&I.postMessage({command:"testZoweConnection",data:d.value.zoweConnection})},Vo=_=>{c.value=_.detail.selectedIndex},Qt=()=>{c.value=2};return window.addEventListener("message",_=>{const P=_.data;switch(P.command){case"configurationsLoaded":P.data&&(e.value=P.data);break;case"jclExecutionStarted":console.log(`JCL execution started for ${P.data.configurationName}`);break;case"jclExecutionCompleted":const Z=P.data.result,q={timestamp:new Date().toLocaleString(),success:Z.success,type:"JCL",configName:P.data.configurationName,message:Z.success?`JCL execution successful
Job: ${Z.jobName}(${Z.jobId})
Return Code: ${Z.returnCode}

Output:
${Z.output||"No output available"}`:`JCL execution failed
Error: ${Z.error}`};i.value.unshift(q),Qt();break;case"zoweConnectionTested":const Y=P.data.success;console.log(`Zowe connection test ${Y?"successful":"failed"}`);break}}),rn(()=>d.value.type,_=>{te()}),Ia(()=>{Ge()}),(_,P)=>{const Z=qt("vscode-tab-header"),q=qt("vscode-tab-panel"),Y=qt("vscode-tabs");return N(),U("div",Eb,[v("div",Ab,[P[8]||(P[8]=v("header",{class:"mb-6"},[v("h1",{class:"text-2xl font-bold mb-2"},"Injector"),v("p",{class:"text-[var(--vscode-descriptionForeground)]"}," CICS/IMS Configuration Management and Injection Tool ")],-1)),le(Y,{"selected-index":c.value,onVscTabsSelect:Vo,panel:""},{default:Qe(()=>[le(Z,{slot:"header",panel:""},{default:Qe(()=>[...P[2]||(P[2]=[Pe("Configuration",-1)])]),_:1}),le(Z,{slot:"header",panel:""},{default:Qe(()=>[...P[3]||(P[3]=[Pe("Injection",-1)])]),_:1}),le(Z,{slot:"header",panel:""},{default:Qe(()=>[...P[4]||(P[4]=[Pe("Results",-1)])]),_:1}),le(q,{panel:""},{default:Qe(()=>[P[5]||(P[5]=v("br",null,null,-1)),le(Kg,{configurations:e.value,"show-form":o.value,"editing-index":s.value,"current-config":d.value,"is-loading":r.value,"loading-config-index":l.value,onCreateNew:P[0]||(P[0]=It=>o.value=!0),onEditConfig:ne,onExecuteConfig:dt,onDeleteConfig:he,onSaveConfig:M,onCancelConfig:V,onTypeChange:te,onTestZoweConnection:fo},null,8,["configurations","show-form","editing-index","current-config","is-loading","loading-config-index"])]),_:1}),le(q,{panel:""},{default:Qe(()=>[P[6]||(P[6]=v("br",null,null,-1)),le(yb,{configurations:e.value,"selected-configuration-index":n.value,"is-loading":r.value,onSelectionChanged:P[1]||(P[1]=It=>n.value=It),onExecuteInjection:Xt,onTestConfiguration:Dt},null,8,["configurations","selected-configuration-index","is-loading"])]),_:1}),le(q,{panel:""},{default:Qe(()=>[P[7]||(P[7]=v("br",null,null,-1)),le(Ib,{results:i.value},null,8,["results"])]),_:1})]),_:1},8,["selected-index"])])])}}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cn=globalThis,lr=cn.ShadowRoot&&(cn.ShadyCSS===void 0||cn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ar=Symbol(),kl=new WeakMap;let vc=class{constructor(e,o,s){if(this._$cssResult$=!0,s!==ar)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=o}get styleSheet(){let e=this.o;const o=this.t;if(lr&&e===void 0){const s=o!==void 0&&o.length===1;s&&(e=kl.get(o)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&kl.set(o,e))}return e}toString(){return this.cssText}};const Hn=t=>new vc(typeof t=="string"?t:t+"",void 0,ar),W=(t,...e)=>{const o=t.length===1?t[0]:e.reduce((s,n,i)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[i+1],t[0]);return new vc(o,t,ar)},Pb=(t,e)=>{if(lr)t.adoptedStyleSheets=e.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(const o of e){const s=document.createElement("style"),n=cn.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=o.cssText,t.appendChild(s)}},Sl=lr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let o="";for(const s of e.cssRules)o+=s.cssText;return Hn(o)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Tb,defineProperty:Rb,getOwnPropertyDescriptor:zb,getOwnPropertyNames:Bb,getOwnPropertySymbols:Vb,getPrototypeOf:Lb}=Object,no=globalThis,Il=no.trustedTypes,Db=Il?Il.emptyScript:"",ci=no.reactiveElementPolyfillSupport,$s=(t,e)=>t,_n={toAttribute(t,e){switch(e){case Boolean:t=t?Db:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=t!==null;break;case Number:o=t===null?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch{o=null}}return o}},cr=(t,e)=>!Tb(t,e),El={attribute:!0,type:String,converter:_n,reflect:!1,useDefault:!1,hasChanged:cr};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),no.litPropertyMetadata??(no.litPropertyMetadata=new WeakMap);let Fo=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,o=El){if(o.state&&(o.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((o=Object.create(o)).wrapped=!0),this.elementProperties.set(e,o),!o.noAccessor){const s=Symbol(),n=this.getPropertyDescriptor(e,s,o);n!==void 0&&Rb(this.prototype,e,n)}}static getPropertyDescriptor(e,o,s){const{get:n,set:i}=zb(this.prototype,e)??{get(){return this[o]},set(r){this[o]=r}};return{get:n,set(r){const l=n==null?void 0:n.call(this);i==null||i.call(this,r),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??El}static _$Ei(){if(this.hasOwnProperty($s("elementProperties")))return;const e=Lb(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty($s("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($s("properties"))){const o=this.properties,s=[...Bb(o),...Vb(o)];for(const n of s)this.createProperty(n,o[n])}const e=this[Symbol.metadata];if(e!==null){const o=litPropertyMetadata.get(e);if(o!==void 0)for(const[s,n]of o)this.elementProperties.set(s,n)}this._$Eh=new Map;for(const[o,s]of this.elementProperties){const n=this._$Eu(o,s);n!==void 0&&this._$Eh.set(n,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const o=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const n of s)o.unshift(Sl(n))}else e!==void 0&&o.push(Sl(e));return o}static _$Eu(e,o){const s=o.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(o=>o(this))}addController(e){var o;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)==null||o.call(e))}removeController(e){var o;(o=this._$EO)==null||o.delete(e)}_$E_(){const e=new Map,o=this.constructor.elementProperties;for(const s of o.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Pb(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(o=>{var s;return(s=o.hostConnected)==null?void 0:s.call(o)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(o=>{var s;return(s=o.hostDisconnected)==null?void 0:s.call(o)})}attributeChangedCallback(e,o,s){this._$AK(e,s)}_$ET(e,o){var i;const s=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,s);if(n!==void 0&&s.reflect===!0){const r=(((i=s.converter)==null?void 0:i.toAttribute)!==void 0?s.converter:_n).toAttribute(o,s.type);this._$Em=e,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(e,o){var i,r;const s=this.constructor,n=s._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const l=s.getPropertyOptions(n),c=typeof l.converter=="function"?{fromAttribute:l.converter}:((i=l.converter)==null?void 0:i.fromAttribute)!==void 0?l.converter:_n;this._$Em=n;const d=c.fromAttribute(o,l.type);this[n]=d??((r=this._$Ej)==null?void 0:r.get(n))??d,this._$Em=null}}requestUpdate(e,o,s){var n;if(e!==void 0){const i=this.constructor,r=this[e];if(s??(s=i.getPropertyOptions(e)),!((s.hasChanged??cr)(r,o)||s.useDefault&&s.reflect&&r===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(i._$Eu(e,s))))return;this.C(e,o,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,o,{useDefault:s,reflect:n,wrapped:i},r){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,r??o??this[e]),i!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(o=void 0),this._$AL.set(e,o)),n===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[i,r]of n){const{wrapped:l}=r,c=this[i];l!==!0||this._$AL.has(i)||c===void 0||this.C(i,void 0,r,c)}}let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(s=this._$EO)==null||s.forEach(n=>{var i;return(i=n.hostUpdate)==null?void 0:i.call(n)}),this.update(o)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(o)}willUpdate(e){}_$AE(e){var o;(o=this._$EO)==null||o.forEach(s=>{var n;return(n=s.hostUpdated)==null?void 0:n.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(o=>this._$ET(o,this[o]))),this._$EM()}updated(e){}firstUpdated(e){}};Fo.elementStyles=[],Fo.shadowRootOptions={mode:"open"},Fo[$s("elementProperties")]=new Map,Fo[$s("finalized")]=new Map,ci==null||ci({ReactiveElement:Fo}),(no.reactiveElementVersions??(no.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ks=globalThis,yn=ks.trustedTypes,Al=yn?yn.createPolicy("lit-html",{createHTML:t=>t}):void 0,dr="$lit$",Zt=`lit$${Math.random().toFixed(9).slice(2)}$`,ur="?"+Zt,Mb=`<${ur}>`,Eo=document,Rs=()=>Eo.createComment(""),zs=t=>t===null||typeof t!="object"&&typeof t!="function",hr=Array.isArray,gc=t=>hr(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",di=`[ 	
\f\r]`,hs=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ol=/-->/g,Pl=/>/g,mo=RegExp(`>|${di}(?:([^\\s"'>=/]+)(${di}*=${di}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Tl=/'/g,Rl=/"/g,bc=/^(?:script|style|textarea|title)$/i,mc=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),w=mc(1),Fb=mc(2),Bt=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),zl=new WeakMap,wo=Eo.createTreeWalker(Eo,129);function _c(t,e){if(!hr(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Al!==void 0?Al.createHTML(e):e}const yc=(t,e)=>{const o=t.length-1,s=[];let n,i=e===2?"<svg>":e===3?"<math>":"",r=hs;for(let l=0;l<o;l++){const c=t[l];let d,a,h=-1,m=0;for(;m<c.length&&(r.lastIndex=m,a=r.exec(c),a!==null);)m=r.lastIndex,r===hs?a[1]==="!--"?r=Ol:a[1]!==void 0?r=Pl:a[2]!==void 0?(bc.test(a[2])&&(n=RegExp("</"+a[2],"g")),r=mo):a[3]!==void 0&&(r=mo):r===mo?a[0]===">"?(r=n??hs,h=-1):a[1]===void 0?h=-2:(h=r.lastIndex-a[2].length,d=a[1],r=a[3]===void 0?mo:a[3]==='"'?Rl:Tl):r===Rl||r===Tl?r=mo:r===Ol||r===Pl?r=hs:(r=mo,n=void 0);const y=r===mo&&t[l+1].startsWith("/>")?" ":"";i+=r===hs?c+Mb:h>=0?(s.push(d),c.slice(0,h)+dr+c.slice(h)+Zt+y):c+Zt+(h===-2?l:y)}return[_c(t,i+(t[o]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class Bs{constructor({strings:e,_$litType$:o},s){let n;this.parts=[];let i=0,r=0;const l=e.length-1,c=this.parts,[d,a]=yc(e,o);if(this.el=Bs.createElement(d,s),wo.currentNode=this.el.content,o===2||o===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(n=wo.nextNode())!==null&&c.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(const h of n.getAttributeNames())if(h.endsWith(dr)){const m=a[r++],y=n.getAttribute(h).split(Zt),I=/([.?@])?(.*)/.exec(m);c.push({type:1,index:i,name:I[2],strings:y,ctor:I[1]==="."?wc:I[1]==="?"?Cc:I[1]==="@"?$c:Ns}),n.removeAttribute(h)}else h.startsWith(Zt)&&(c.push({type:6,index:i}),n.removeAttribute(h));if(bc.test(n.tagName)){const h=n.textContent.split(Zt),m=h.length-1;if(m>0){n.textContent=yn?yn.emptyScript:"";for(let y=0;y<m;y++)n.append(h[y],Rs()),wo.nextNode(),c.push({type:2,index:++i});n.append(h[m],Rs())}}}else if(n.nodeType===8)if(n.data===ur)c.push({type:2,index:i});else{let h=-1;for(;(h=n.data.indexOf(Zt,h+1))!==-1;)c.push({type:7,index:i}),h+=Zt.length-1}i++}}static createElement(e,o){const s=Eo.createElement("template");return s.innerHTML=e,s}}function Ao(t,e,o=t,s){var r,l;if(e===Bt)return e;let n=s!==void 0?(r=o._$Co)==null?void 0:r[s]:o._$Cl;const i=zs(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==i&&((l=n==null?void 0:n._$AO)==null||l.call(n,!1),i===void 0?n=void 0:(n=new i(t),n._$AT(t,o,s)),s!==void 0?(o._$Co??(o._$Co=[]))[s]=n:o._$Cl=n),n!==void 0&&(e=Ao(t,n._$AS(t,e.values),n,s)),e}let xc=class{constructor(e,o){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:o},parts:s}=this._$AD,n=((e==null?void 0:e.creationScope)??Eo).importNode(o,!0);wo.currentNode=n;let i=wo.nextNode(),r=0,l=0,c=s[0];for(;c!==void 0;){if(r===c.index){let d;c.type===2?d=new ts(i,i.nextSibling,this,e):c.type===1?d=new c.ctor(i,c.name,c.strings,this,e):c.type===6&&(d=new kc(i,this,e)),this._$AV.push(d),c=s[++l]}r!==(c==null?void 0:c.index)&&(i=wo.nextNode(),r++)}return wo.currentNode=Eo,n}p(e){let o=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,o),o+=s.strings.length-2):s._$AI(e[o])),o++}};class ts{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,o,s,n){this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=e,this._$AB=o,this._$AM=s,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=o.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,o=this){e=Ao(this,e,o),zs(e)?e===z||e==null||e===""?(this._$AH!==z&&this._$AR(),this._$AH=z):e!==this._$AH&&e!==Bt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):gc(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==z&&zs(this._$AH)?this._$AA.nextSibling.data=e:this.T(Eo.createTextNode(e)),this._$AH=e}$(e){var i;const{values:o,_$litType$:s}=e,n=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Bs.createElement(_c(s.h,s.h[0]),this.options)),s);if(((i=this._$AH)==null?void 0:i._$AD)===n)this._$AH.p(o);else{const r=new xc(n,this),l=r.u(this.options);r.p(o),this.T(l),this._$AH=r}}_$AC(e){let o=zl.get(e.strings);return o===void 0&&zl.set(e.strings,o=new Bs(e)),o}k(e){hr(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let s,n=0;for(const i of e)n===o.length?o.push(s=new ts(this.O(Rs()),this.O(Rs()),this,this.options)):s=o[n],s._$AI(i),n++;n<o.length&&(this._$AR(s&&s._$AB.nextSibling,n),o.length=n)}_$AR(e=this._$AA.nextSibling,o){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,o);e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var o;this._$AM===void 0&&(this._$Cv=e,(o=this._$AP)==null||o.call(this,e))}}class Ns{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,o,s,n,i){this.type=1,this._$AH=z,this._$AN=void 0,this.element=e,this.name=o,this._$AM=n,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=z}_$AI(e,o=this,s,n){const i=this.strings;let r=!1;if(i===void 0)e=Ao(this,e,o,0),r=!zs(e)||e!==this._$AH&&e!==Bt,r&&(this._$AH=e);else{const l=e;let c,d;for(e=i[0],c=0;c<i.length-1;c++)d=Ao(this,l[s+c],o,c),d===Bt&&(d=this._$AH[c]),r||(r=!zs(d)||d!==this._$AH[c]),d===z?e=z:e!==z&&(e+=(d??"")+i[c+1]),this._$AH[c]=d}r&&!n&&this.j(e)}j(e){e===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class wc extends Ns{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===z?void 0:e}}class Cc extends Ns{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==z)}}class $c extends Ns{constructor(e,o,s,n,i){super(e,o,s,n,i),this.type=5}_$AI(e,o=this){if((e=Ao(this,e,o,0)??z)===Bt)return;const s=this._$AH,n=e===z&&s!==z||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,i=e!==z&&(s===z||n);n&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var o;typeof this._$AH=="function"?this._$AH.call(((o=this.options)==null?void 0:o.host)??this.element,e):this._$AH.handleEvent(e)}}class kc{constructor(e,o,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=o,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){Ao(this,e)}}const jb={M:dr,P:Zt,A:ur,C:1,L:yc,R:xc,D:gc,V:Ao,I:ts,H:Ns,N:Cc,U:$c,B:wc,F:kc},ui=ks.litHtmlPolyfillSupport;ui==null||ui(Bs,ts),(ks.litHtmlVersions??(ks.litHtmlVersions=[])).push("3.3.1");const Sc=(t,e,o)=>{const s=(o==null?void 0:o.renderBefore)??e;let n=s._$litPart$;if(n===void 0){const i=(o==null?void 0:o.renderBefore)??null;s._$litPart$=n=new ts(e.insertBefore(Rs(),i),i,void 0,o??{})}return n._$AI(t),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $o=globalThis;let yt=class extends Fo{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var o;const e=super.createRenderRoot();return(o=this.renderOptions).renderBefore??(o.renderBefore=e.firstChild),e}update(e){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Sc(o,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Bt}};var Wl;yt._$litElement$=!0,yt.finalized=!0,(Wl=$o.litElementHydrateSupport)==null||Wl.call($o,{LitElement:yt});const hi=$o.litElementPolyfillSupport;hi==null||hi({LitElement:yt});($o.litElementVersions??($o.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nb=t=>(e,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ub={attribute:!0,type:String,converter:_n,reflect:!1,hasChanged:cr},Hb=(t=Ub,e,o)=>{const{kind:s,metadata:n}=o;let i=globalThis.litPropertyMetadata.get(n);if(i===void 0&&globalThis.litPropertyMetadata.set(n,i=new Map),s==="setter"&&((t=Object.create(t)).wrapped=!0),i.set(o.name,t),s==="accessor"){const{name:r}=o;return{set(l){const c=e.get.call(this);e.set.call(this,l),this.requestUpdate(r,c,t)},init(l){return l!==void 0&&this.C(r,void 0,t,l),l}}}if(s==="setter"){const{name:r}=o;return function(l){const c=this[r];e.call(this,l),this.requestUpdate(r,c,t)}}throw Error("Unsupported decorator location: "+s)};function p(t){return(e,o)=>typeof o=="object"?Hb(t,e,o):((s,n,i)=>{const r=n.hasOwnProperty(i);return n.constructor.createProperty(i,s),r?Object.getOwnPropertyDescriptor(n,i):void 0})(t,e,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function H(t){return p({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vs=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ue(t,e){return(o,s,n)=>{const i=r=>{var l;return((l=r.renderRoot)==null?void 0:l.querySelector(t))??null};if(e){const{get:r,set:l}=typeof s=="object"?o:n??(()=>{const c=Symbol();return{get(){return this[c]},set(d){this[c]=d}}})();return Vs(o,s,{get(){let c=r.call(this);return c===void 0&&(c=i(this),(c!==null||this.hasUpdated)&&l.call(this,c)),c}})}return Vs(o,s,{get(){return i(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Zb;function qb(t){return(e,o)=>Vs(e,o,{get(){return(this.renderRoot??Zb??(Zb=document.createDocumentFragment())).querySelectorAll(t)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function kt(t){return(e,o)=>{const{slot:s,selector:n}=t??{},i="slot"+(s?`[name=${s}]`:":not([name])");return Vs(e,o,{get(){var c;const r=(c=this.renderRoot)==null?void 0:c.querySelector(i),l=(r==null?void 0:r.assignedElements(t))??[];return n===void 0?l:l.filter(d=>d.matches(n))}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Wb(t){return(e,o)=>{const{slot:s}=t??{},n="slot"+(s?`[name=${s}]`:":not([name])");return Vs(e,o,{get(){var r;const i=(r=this.renderRoot)==null?void 0:r.querySelector(n);return(i==null?void 0:i.assignedNodes(t))??[]}})}}const Ei="1.17.0",Bl="__vscodeElements_disableRegistryWarning__";class ee extends yt{get version(){return Ei}}const K=t=>e=>{if(!customElements.get(t)){customElements.define(t,e);return}if(Bl in window)return;const s=document.createElement(t),n=s==null?void 0:s.version;let i="";n?n!==Ei?(i+="is already registered by a different version of VSCode Elements. ",i+=`This version is "${Ei}", while the other one is "${n}".`):i+="is already registered by the same version of VSCode Elements. ":(console.warn(t,"is already registered by an unknown custom element handler class."),i+="is already registered by an unknown custom element handler class."),console.warn(`[VSCode Elements] ${t} ${i}
To suppress this warning, set window.${Bl} to true`)},G=W`
  :host([hidden]) {
    display: none;
  }

  :host([disabled]),
  :host(:disabled) {
    cursor: not-allowed;
    opacity: 0.4;
    pointer-events: none;
  }
`,Kb=16,Gb=13,Yb=Kb/Gb;function pr(){return navigator.userAgent.indexOf("Linux")>-1?'system-ui, "Ubuntu", "Droid Sans", sans-serif':navigator.userAgent.indexOf("Mac")>-1?"-apple-system, BlinkMacSystemFont, sans-serif":navigator.userAgent.indexOf("Windows")>-1?'"Segoe WPC", "Segoe UI", sans-serif':"sans-serif"}const Jb=Hn(pr()),Xb=[G,W`
    :host {
      background-color: var(--vscode-badge-background, #616161);
      border: 1px solid var(--vscode-contrastBorder, transparent);
      border-radius: 2px;
      box-sizing: border-box;
      color: var(--vscode-badge-foreground, #f8f8f8);
      display: inline-block;
      font-family: var(--vscode-font-family, ${Jb});
      font-size: 11px;
      font-weight: 400;
      line-height: 14px;
      min-width: 18px;
      padding: 2px 3px;
      text-align: center;
      white-space: nowrap;
    }

    :host([variant='counter']) {
      border-radius: 11px;
      line-height: 11px;
      min-height: 18px;
      min-width: 18px;
      padding: 3px 6px;
    }

    :host([variant='activity-bar-counter']) {
      background-color: var(--vscode-activityBarBadge-background, #0078d4);
      border-radius: 20px;
      color: var(--vscode-activityBarBadge-foreground, #ffffff);
      font-size: 9px;
      font-weight: 600;
      line-height: 16px;
      padding: 0 4px;
    }

    :host([variant='tab-header-counter']) {
      background-color: var(--vscode-activityBarBadge-background, #0078d4);
      border-radius: 10px;
      color: var(--vscode-activityBarBadge-foreground, #ffffff);
      line-height: 10px;
      min-height: 16px;
      min-width: 16px;
      padding: 3px 5px;
    }
  `];var Ic=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let xn=class extends ee{constructor(){super(...arguments),this.variant="default"}render(){return w` <slot></slot> `}};xn.styles=Xb;Ic([p({reflect:!0})],xn.prototype,"variant",void 0);xn=Ic([K("vscode-badge")],xn);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},vr=t=>(...e)=>({_$litDirective$:t,values:e});class gr{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,s){this._$Ct=e,this._$AM=o,this._$Ci=s}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=vr(class extends gr{constructor(t){var e;if(super(t),t.type!==fr.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var s,n;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!((s=this.nt)!=null&&s.has(i))&&this.st.add(i);return this.render(e)}const o=t.element.classList;for(const i of this.st)i in e||(o.remove(i),this.st.delete(i));for(const i in e){const r=!!e[i];r===this.st.has(i)||(n=this.nt)!=null&&n.has(i)||(r?(o.add(i),this.st.add(i)):(o.remove(i),this.st.delete(i)))}return Bt}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=t=>t??z;class Qb extends gr{constructor(e){if(super(e),this._prevProperties={},e.type!==fr.PROPERTY||e.name!=="style")throw new Error("The `stylePropertyMap` directive must be used in the `style` property")}update(e,[o]){return Object.entries(o).forEach(([s,n])=>{this._prevProperties[s]!==n&&(s.startsWith("--")?e.element.style.setProperty(s,n):e.element.style[s]=n,this._prevProperties[s]=n)}),Bt}render(e){return Bt}}const Fe=vr(Qb),em=[G,W`
    :host {
      color: var(--vscode-icon-foreground, #cccccc);
      display: inline-block;
    }

    .codicon[class*='codicon-'] {
      display: block;
    }

    .icon,
    .button {
      background-color: transparent;
      display: block;
      padding: 0;
    }

    .button {
      border-color: transparent;
      border-style: solid;
      border-width: 1px;
      border-radius: 5px;
      color: currentColor;
      cursor: pointer;
      padding: 2px;
    }

    .button:hover {
      background-color: var(
        --vscode-toolbar-hoverBackground,
        rgba(90, 93, 94, 0.31)
      );
    }

    .button:active {
      background-color: var(
        --vscode-toolbar-activeBackground,
        rgba(99, 102, 103, 0.31)
      );
    }

    .button:focus {
      outline: none;
    }

    .button:focus-visible {
      border-color: var(--vscode-focusBorder, #0078d4);
    }

    @keyframes icon-spin {
      100% {
        transform: rotate(360deg);
      }
    }

    .spin {
      animation-name: icon-spin;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
  `];var To=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i},gs;let wt=gs=class extends ee{constructor(){super(...arguments),this.label="",this.name="",this.size=16,this.spin=!1,this.spinDuration=1.5,this.actionIcon=!1,this._onButtonClick=e=>{this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:e}}))}}connectedCallback(){super.connectedCallback();const{href:e,nonce:o}=this._getStylesheetConfig();gs.stylesheetHref=e,gs.nonce=o}_getStylesheetConfig(){const e=document.getElementById("vscode-codicon-stylesheet"),o=(e==null?void 0:e.getAttribute("href"))||void 0,s=(e==null?void 0:e.nonce)||void 0;if(!e){let n="[VSCode Elements] To use the Icon component, the codicons.css file must be included in the page with the id `vscode-codicon-stylesheet`! ";n+="See https://vscode-elements.github.io/components/icon/ for more details.",console.warn(n)}return{nonce:s,href:o}}render(){const{stylesheetHref:e,nonce:o}=gs,s=w`<span
      class=${re({codicon:!0,["codicon-"+this.name]:!0,spin:this.spin})}
      .style=${Fe({animationDuration:String(this.spinDuration)+"s",fontSize:this.size+"px",height:this.size+"px",width:this.size+"px"})}
    ></span>`,n=this.actionIcon?w` <button
          class="button"
          @click=${this._onButtonClick}
          aria-label=${this.label}
        >
          ${s}
        </button>`:w` <span class="icon" aria-hidden="true" role="presentation"
          >${s}</span
        >`;return w`
      <link
        rel="stylesheet"
        href=${Q(e)}
        nonce=${Q(o)}
      >
      ${n}
    `}};wt.styles=em;wt.stylesheetHref="";wt.nonce="";To([p()],wt.prototype,"label",void 0);To([p({type:String})],wt.prototype,"name",void 0);To([p({type:Number})],wt.prototype,"size",void 0);To([p({type:Boolean,reflect:!0})],wt.prototype,"spin",void 0);To([p({type:Number,attribute:"spin-duration"})],wt.prototype,"spinDuration",void 0);To([p({type:Boolean,reflect:!0,attribute:"action-icon"})],wt.prototype,"actionIcon",void 0);wt=gs=To([K("vscode-icon")],wt);const tm=Hn(pr()),om=[G,W`
    :host {
      background-color: var(--vscode-button-background, #0078d4);
      border-color: var(--vscode-button-border, transparent);
      border-style: solid;
      border-radius: 2px;
      border-width: 1px;
      color: var(--vscode-button-foreground, #ffffff);
      cursor: pointer;
      display: inline-flex;
      font-family: var(--vscode-font-family, ${tm});
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 22px;
      overflow: hidden;
      padding: 0;
      user-select: none;
      white-space: nowrap;
    }

    :host([secondary]) {
      color: var(--vscode-button-secondaryForeground, #cccccc);
      background-color: var(--vscode-button-secondaryBackground, #313131);
      border-color: var(
        --vscode-button-border,
        var(--vscode-button-secondaryBackground, rgba(255, 255, 255, 0.07))
      );
    }

    :host([disabled]) {
      cursor: default;
      opacity: 0.4;
      pointer-events: none;
    }

    :host(:hover) {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
    }

    :host([disabled]:hover) {
      background-color: var(--vscode-button-background, #0078d4);
    }

    :host([secondary]:hover) {
      background-color: var(--vscode-button-secondaryHoverBackground, #3c3c3c);
    }

    :host([secondary][disabled]:hover) {
      background-color: var(--vscode-button-secondaryBackground, #313131);
    }

    :host(:focus),
    :host(:active) {
      outline: none;
    }

    :host(:focus) {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: 2px;
    }

    :host([disabled]:focus) {
      background-color: var(--vscode-button-background, #0078d4);
      outline: 0;
    }

    :host([secondary]:focus) {
      background-color: var(--vscode-button-secondaryHoverBackground, #3c3c3c);
    }

    :host([secondary][disabled]:focus) {
      background-color: var(--vscode-button-secondaryBackground, #313131);
    }

    ::slotted(*) {
      display: inline-block;
      margin-left: 4px;
      margin-right: 4px;
    }

    ::slotted(*:first-child) {
      margin-left: 0;
    }

    ::slotted(*:last-child) {
      margin-right: 0;
    }

    ::slotted(vscode-icon) {
      color: inherit;
    }

    .wrapper {
      align-items: center;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      position: relative;
      width: var(--wrapper-width, 100%);
      height: 100%;
      padding: 1px 13px;
    }

    :host(:empty) .wrapper,
    :host([icon-only]) .wrapper {
      min-height: 24px;
      min-width: 16px;
      padding: 1px 5px;
    }

    slot {
      align-items: center;
      display: flex;
      height: 100%;
    }

    .icon,
    .icon-after {
      color: inherit;
      display: block;
    }

    :host(:not(:empty)) .icon {
      margin-right: 3px;
    }

    :host(:not(:empty)) .icon-after,
    :host([icon]) .icon-after {
      margin-left: 3px;
    }

    .divider {
      display: var(--divider-display, none);
      background-color: transparent;
      padding: 4px 0;
      box-sizing: border-box;
    }

    :host(:hover) .divider,
    :host(:focus) .divider {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
    }

    :host([secondary]) .divider {
      background-color: var(--vscode-button-secondaryBackground, #313131);
    }

    :host([secondary]:hover) .divider,
    :host([secondary]:focus) .divider {
      background-color: var(--vscode-button-secondaryHoverBackground, #3c3c3c);
    }

    .divider > div {
      background-color: var(
        --vscode-button-separator,
        rgba(255, 255, 255, 0.4)
      );
      height: 100%;
      width: 1px;
      margin: 0;
    }

    :host([secondary]) .divider > div {
      background-color: var(--vscode-button-secondaryForeground, #cccccc);
      opacity: 0.4;
    }
  `];var Ve=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Ee=class extends ee{get form(){return this._internals.form}constructor(){super(),this.autofocus=!1,this.tabIndex=0,this.secondary=!1,this.role="button",this.disabled=!1,this.icon="",this.iconSpin=!1,this.iconAfter="",this.iconAfterSpin=!1,this.focused=!1,this.name=void 0,this.iconOnly=!1,this.type="button",this.value="",this._prevTabindex=0,this._handleFocus=()=>{this.focused=!0},this._handleBlur=()=>{this.focused=!1},this.addEventListener("keydown",this._handleKeyDown.bind(this)),this.addEventListener("click",this._handleClick.bind(this)),this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.autofocus&&(this.tabIndex<0&&(this.tabIndex=0),this.updateComplete.then(()=>{this.focus(),this.requestUpdate()})),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur)}update(e){super.update(e),e.has("value")&&this._internals.setFormValue(this.value),e.has("disabled")&&(this.disabled?(this._prevTabindex=this.tabIndex,this.tabIndex=-1):this.tabIndex=this._prevTabindex)}_executeAction(){this.type==="submit"&&this._internals.form&&this._internals.form.requestSubmit(),this.type==="reset"&&this._internals.form&&this._internals.form.reset()}_handleKeyDown(e){if((e.key==="Enter"||e.key===" ")&&!this.hasAttribute("disabled")){this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:new MouseEvent("click")}}));const o=new MouseEvent("click",{bubbles:!0,cancelable:!0});o.synthetic=!0,this.dispatchEvent(o),this._executeAction()}}_handleClick(e){e.synthetic||this.hasAttribute("disabled")||(this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:e}})),this._executeAction())}render(){const e=this.icon!=="",o=this.iconAfter!=="",s={wrapper:!0,"has-icon-before":e,"has-icon-after":o,"icon-only":this.iconOnly},n=e?w`<vscode-icon
          name=${this.icon}
          ?spin=${this.iconSpin}
          spin-duration=${Q(this.iconSpinDuration)}
          class="icon"
        ></vscode-icon>`:z,i=o?w`<vscode-icon
          name=${this.iconAfter}
          ?spin=${this.iconAfterSpin}
          spin-duration=${Q(this.iconAfterSpinDuration)}
          class="icon-after"
        ></vscode-icon>`:z;return w`
      <span class=${re(s)}>
        ${n}
        <slot></slot>
        ${i}
      </span>
      <div class="divider"><div></div></div>
    `}};Ee.styles=om;Ee.formAssociated=!0;Ve([p({type:Boolean,reflect:!0})],Ee.prototype,"autofocus",void 0);Ve([p({type:Number,reflect:!0})],Ee.prototype,"tabIndex",void 0);Ve([p({type:Boolean,reflect:!0})],Ee.prototype,"secondary",void 0);Ve([p({reflect:!0})],Ee.prototype,"role",void 0);Ve([p({type:Boolean,reflect:!0})],Ee.prototype,"disabled",void 0);Ve([p()],Ee.prototype,"icon",void 0);Ve([p({type:Boolean,reflect:!0,attribute:"icon-spin"})],Ee.prototype,"iconSpin",void 0);Ve([p({type:Number,reflect:!0,attribute:"icon-spin-duration"})],Ee.prototype,"iconSpinDuration",void 0);Ve([p({attribute:"icon-after"})],Ee.prototype,"iconAfter",void 0);Ve([p({type:Boolean,reflect:!0,attribute:"icon-after-spin"})],Ee.prototype,"iconAfterSpin",void 0);Ve([p({type:Number,reflect:!0,attribute:"icon-after-spin-duration"})],Ee.prototype,"iconAfterSpinDuration",void 0);Ve([p({type:Boolean,reflect:!0})],Ee.prototype,"focused",void 0);Ve([p({type:String,reflect:!0})],Ee.prototype,"name",void 0);Ve([p({type:Boolean,reflect:!0,attribute:"icon-only"})],Ee.prototype,"iconOnly",void 0);Ve([p({reflect:!0})],Ee.prototype,"type",void 0);Ve([p()],Ee.prototype,"value",void 0);Ee=Ve([K("vscode-button")],Ee);const sm=[G,W`
    :host {
      display: inline-flex;
      align-items: stretch;
      padding: 0;
      border: none;
      overflow: hidden;
    }

    ::slotted(vscode-button:not(:first-child)) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-left-width: 0;
    }

    ::slotted(vscode-button:not(:last-child)) {
      --divider-display: block;
      --wrapper-width: calc(100% - 1px);

      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right-width: 0;
    }

    ::slotted(vscode-button:focus) {
      z-index: 1;
    }
  `];var nm=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Ai=class extends ee{render(){return w` <slot></slot> `}};Ai.styles=sm;Ai=nm([Nb("vscode-button-group")],Ai);var im=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};class br extends ee{constructor(){super(),this.focused=!1,this._prevTabindex=0,this._handleFocus=()=>{this.focused=!0},this._handleBlur=()=>{this.focused=!1}}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur)}attributeChangedCallback(e,o,s){super.attributeChangedCallback(e,o,s),e==="disabled"&&this.hasAttribute("disabled")?(this._prevTabindex=this.tabIndex,this.tabIndex=-1):e==="disabled"&&!this.hasAttribute("disabled")&&(this.tabIndex=this._prevTabindex)}}im([p({type:Boolean,reflect:!0})],br.prototype,"focused",void 0);var rm=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};const Ec=t=>{class e extends t{constructor(){super(...arguments),this._label="",this._slottedText=""}set label(s){this._label=s,this._slottedText===""&&this.setAttribute("aria-label",s)}get label(){return this._label}_handleSlotChange(){this._slottedText=this.textContent?this.textContent.trim():"",this._slottedText!==""&&this.setAttribute("aria-label",this._slottedText)}_renderLabelAttribute(){return this._slottedText===""?w`<span class="label-attr">${this._label}</span>`:w`${z}`}}return rm([p()],e.prototype,"label",null),e},Ac=[W`
    :host {
      color: var(--vscode-foreground, #cccccc);
      display: inline-block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 18px;
    }

    :host(:focus) {
      outline: none;
    }

    :host([disabled]) {
      opacity: 0.4;
    }

    .wrapper {
      cursor: pointer;
      display: block;
      font-size: var(--vscode-font-size, 13px);
      margin-bottom: 4px;
      margin-top: 4px;
      min-height: 18px;
      position: relative;
      user-select: none;
    }

    :host([disabled]) .wrapper {
      cursor: default;
    }

    input {
      position: absolute;
      height: 1px;
      left: 9px;
      margin: 0;
      top: 17px;
      width: 1px;
      overflow: hidden;
      clip: rect(1px, 1px, 1px, 1px);
      white-space: nowrap;
    }

    .icon {
      align-items: center;
      background-color: var(--vscode-settings-checkboxBackground, #313131);
      background-size: 16px;
      border: 1px solid var(--vscode-settings-checkboxBorder, #3c3c3c);
      box-sizing: border-box;
      color: var(--vscode-settings-checkboxForeground, #cccccc);
      display: flex;
      height: 18px;
      justify-content: center;
      left: 0;
      margin-left: 0;
      margin-right: 9px;
      padding: 0;
      pointer-events: none;
      position: absolute;
      top: 0;
      width: 18px;
    }

    .icon.before-empty-label {
      margin-right: 0;
    }

    .label {
      cursor: pointer;
      display: block;
      min-height: 18px;
      min-width: 18px;
    }

    .label-inner {
      display: block;
      opacity: 0.9;
      padding-left: 27px;
    }

    .label-inner.empty {
      padding-left: 0;
    }

    :host([disabled]) .label {
      cursor: default;
    }
  `],lm=[G,Ac,W`
    :host(:invalid) .icon,
    :host([invalid]) .icon {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .icon {
      border-radius: 3px;
    }

    .indeterminate-icon {
      background-color: currentColor;
      position: absolute;
      height: 1px;
      width: 12px;
    }

    :host(:focus):host(:not([disabled])) .icon {
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: -1px;
    }
  `];var vt=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Ne=class extends Ec(br){set checked(e){this._checked=e,this._manageRequired(),this.requestUpdate()}get checked(){return this._checked}set required(e){this._required=e,this._manageRequired(),this.requestUpdate()}get required(){return this._required}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}constructor(){super(),this.autofocus=!1,this._checked=!1,this.defaultChecked=!1,this.invalid=!1,this.name=void 0,this.value="",this.disabled=!1,this.indeterminate=!1,this._required=!1,this.type="checkbox",this._handleClick=e=>{e.preventDefault(),!this.disabled&&this._toggleState()},this._handleKeyDown=e=>{var o;!this.disabled&&(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key===" "&&this._toggleState(),e.key==="Enter"&&((o=this._internals.form)==null||o.requestSubmit()))},this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleKeyDown),this.updateComplete.then(()=>{this._manageRequired(),this._setActualFormValue()})}disconnectedCallback(){this.removeEventListener("keydown",this._handleKeyDown)}update(e){super.update(e),e.has("checked")&&(this.ariaChecked=this.checked?"true":"false")}formResetCallback(){this.checked=this.defaultChecked}formStateRestoreCallback(e,o){e&&(this.checked=!0)}_setActualFormValue(){let e="";this.checked?e=this.value?this.value:"on":e=null,this._internals.setFormValue(e)}_toggleState(){this.checked=!this.checked,this.indeterminate=!1,this._setActualFormValue(),this._manageRequired(),this.dispatchEvent(new Event("change",{bubbles:!0})),this.dispatchEvent(new CustomEvent("vsc-change",{detail:{checked:this.checked,label:this.label,value:this.value},bubbles:!0,composed:!0}))}_manageRequired(){!this.checked&&this.required?this._internals.setValidity({valueMissing:!0},"Please check this box if you want to proceed.",this._inputEl??void 0):this._internals.setValidity({})}render(){const e=re({icon:!0,checked:this.checked,indeterminate:this.indeterminate}),o=re({"label-inner":!0}),s=w`<svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="check-icon"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
      />
    </svg>`,n=this.checked&&!this.indeterminate?s:z,i=this.indeterminate?w`<span class="indeterminate-icon"></span>`:z;return w`
      <div class="wrapper">
        <input
          ?autofocus=${this.autofocus}
          id="input"
          class="checkbox"
          type="checkbox"
          ?checked=${this.checked}
          value=${this.value}
        >
        <div class=${e}>${i}${n}</div>
        <label for="input" class="label" @click=${this._handleClick}>
          <span class=${o}>
            ${this._renderLabelAttribute()}
            <slot @slotchange=${this._handleSlotChange}></slot>
          </span>
        </label>
      </div>
    `}};Ne.styles=lm;Ne.formAssociated=!0;Ne.shadowRootOptions={...yt.shadowRootOptions,delegatesFocus:!0};vt([p({type:Boolean,reflect:!0})],Ne.prototype,"autofocus",void 0);vt([p({type:Boolean,reflect:!0})],Ne.prototype,"checked",null);vt([p({type:Boolean,reflect:!0,attribute:"default-checked"})],Ne.prototype,"defaultChecked",void 0);vt([p({type:Boolean,reflect:!0})],Ne.prototype,"invalid",void 0);vt([p({reflect:!0})],Ne.prototype,"name",void 0);vt([p()],Ne.prototype,"value",void 0);vt([p({type:Boolean,reflect:!0})],Ne.prototype,"disabled",void 0);vt([p({type:Boolean,reflect:!0})],Ne.prototype,"indeterminate",void 0);vt([p({type:Boolean,reflect:!0})],Ne.prototype,"required",null);vt([p()],Ne.prototype,"type",void 0);vt([Ue("#input")],Ne.prototype,"_inputEl",void 0);Ne=vt([K("vscode-checkbox")],Ne);const am=[G,W`
    :host {
      display: block;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    :host([variant='vertical']) .wrapper {
      display: block;
    }

    ::slotted(vscode-checkbox) {
      margin-right: 20px;
    }

    ::slotted(vscode-checkbox:last-child) {
      margin-right: 0;
    }

    :host([variant='vertical']) ::slotted(vscode-checkbox) {
      display: block;
      margin-bottom: 15px;
    }

    :host([variant='vertical']) ::slotted(vscode-checkbox:last-child) {
      margin-bottom: 0;
    }
  `];var mr=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Ls=class extends ee{constructor(){super(...arguments),this.role="group",this.variant="horizontal"}render(){return w`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};Ls.styles=am;mr([p({reflect:!0})],Ls.prototype,"role",void 0);mr([p({reflect:!0})],Ls.prototype,"variant",void 0);Ls=mr([K("vscode-checkbox-group")],Ls);const cm=[G,W`
    .collapsible {
      background-color: var(--vscode-sideBar-background, #181818);
    }

    .collapsible-header {
      align-items: center;
      background-color: var(--vscode-sideBarSectionHeader-background, #181818);
      cursor: pointer;
      display: flex;
      height: 22px;
      line-height: 22px;
      user-select: none;
    }

    .collapsible-header:focus {
      opacity: 1;
      outline-offset: -1px;
      outline-style: solid;
      outline-width: 1px;
      outline-color: var(--vscode-focusBorder, #0078d4);
    }

    .title {
      color: var(--vscode-sideBarTitle-foreground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: 11px;
      font-weight: 700;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .title .description {
      font-weight: 400;
      margin-left: 10px;
      text-transform: none;
      opacity: 0.6;
    }

    .header-icon {
      color: var(--vscode-icon-foreground, #cccccc);
      display: block;
      flex-shrink: 0;
      margin: 0 3px;
    }

    .collapsible.open .header-icon {
      transform: rotate(90deg);
    }

    .header-slots {
      align-items: center;
      display: flex;
      height: 22px;
      margin-left: auto;
      margin-right: 4px;
    }

    .actions {
      display: none;
    }

    .collapsible.open .actions {
      display: block;
    }

    .header-slots slot {
      display: flex;
      max-height: 22px;
      overflow: hidden;
    }

    .header-slots slot::slotted(div) {
      align-items: center;
      display: flex;
    }

    .collapsible-body {
      display: none;
      overflow: hidden;
    }

    .collapsible.open .collapsible-body {
      display: block;
    }
  `];var Zn=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Yo=class extends ee{constructor(){super(...arguments),this.title="",this.description="",this.open=!1}_emitToggleEvent(){this.dispatchEvent(new CustomEvent("vsc-collapsible-toggle",{detail:{open:this.open}}))}_onHeaderClick(){this.open=!this.open,this._emitToggleEvent()}_onHeaderKeyDown(e){e.key==="Enter"&&(this.open=!this.open,this._emitToggleEvent())}render(){const e=re({collapsible:!0,open:this.open}),o=w`<svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="header-icon"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z"
      />
    </svg>`,s=this.description?w`<span class="description">${this.description}</span>`:z;return w`
      <div class=${e}>
        <div
          class="collapsible-header"
          tabindex="0"
          title=${this.title}
          @click=${this._onHeaderClick}
          @keydown=${this._onHeaderKeyDown}
        >
          ${o}
          <h3 class="title">${this.title}${s}</h3>
          <div class="header-slots">
            <div class="actions"><slot name="actions"></slot></div>
            <div class="decorations"><slot name="decorations"></slot></div>
          </div>
        </div>
        <div class="collapsible-body" part="body">
          <slot></slot>
        </div>
      </div>
    `}};Yo.styles=cm;Zn([p({type:String})],Yo.prototype,"title",void 0);Zn([p()],Yo.prototype,"description",void 0);Zn([p({type:Boolean,reflect:!0})],Yo.prototype,"open",void 0);Yo=Zn([K("vscode-collapsible")],Yo);const dm=[G,W`
    :host {
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 1.4em;
      outline: none;
      position: relative;
    }

    .context-menu-item {
      background-color: var(--vscode-menu-background, #1f1f1f);
      color: var(--vscode-menu-foreground, #cccccc);
      display: flex;
      user-select: none;
      white-space: nowrap;
    }

    .ruler {
      border-bottom: 1px solid var(--vscode-menu-separatorBackground, #454545);
      display: block;
      margin: 0 0 4px;
      padding-top: 4px;
      width: 100%;
    }

    .context-menu-item a {
      align-items: center;
      border-color: transparent;
      border-radius: 3px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-menu-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      flex: 1 1 auto;
      height: 2em;
      margin-left: 4px;
      margin-right: 4px;
      outline: none;
      position: relative;
      text-decoration: inherit;
    }

    :host([selected]) .context-menu-item a {
      background-color: var(--vscode-menu-selectionBackground, #0078d4);
      border-color: var(--vscode-menu-selectionBorder, transparent);
      color: var(--vscode-menu-selectionForeground, #ffffff);
    }

    .label {
      background: none;
      display: flex;
      flex: 1 1 auto;
      font-size: 12px;
      line-height: 1;
      padding: 0 22px;
      text-decoration: none;
    }

    .keybinding {
      display: block;
      flex: 2 1 auto;
      line-height: 1;
      padding: 0 22px;
      text-align: right;
    }
  `];var os=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let ao=class extends ee{constructor(){super(...arguments),this.label="",this.keybinding="",this.value="",this.separator=!1,this.tabindex=0}onItemClick(){this.dispatchEvent(new CustomEvent("vsc-click",{detail:{label:this.label,keybinding:this.keybinding,value:this.value||this.label,separator:this.separator,tabindex:this.tabindex},bubbles:!0,composed:!0}))}render(){return w`
      ${this.separator?w`
            <div class="context-menu-item separator">
              <span class="ruler"></span>
            </div>
          `:w`
            <div class="context-menu-item">
              <a @click=${this.onItemClick}>
                ${this.label?w`<span class="label">${this.label}</span>`:z}
                ${this.keybinding?w`<span class="keybinding">${this.keybinding}</span>`:z}
              </a>
            </div>
          `}
    `}};ao.styles=dm;os([p({type:String})],ao.prototype,"label",void 0);os([p({type:String})],ao.prototype,"keybinding",void 0);os([p({type:String})],ao.prototype,"value",void 0);os([p({type:Boolean,reflect:!0})],ao.prototype,"separator",void 0);os([p({type:Number})],ao.prototype,"tabindex",void 0);ao=os([K("vscode-context-menu-item")],ao);const um=[G,W`
    :host {
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 1.4em;
      position: relative;
    }

    .context-menu {
      background-color: var(--vscode-menu-background, #1f1f1f);
      border-color: var(--vscode-menu-border, #454545);
      border-radius: 5px;
      border-style: solid;
      border-width: 1px;
      box-shadow: 0 2px 8px var(--vscode-widget-shadow, rgba(0, 0, 0, 0.36));
      color: var(--vscode-menu-foreground, #cccccc);
      padding: 4px 0;
      white-space: nowrap;
    }

    .context-menu:focus {
      outline: 0;
    }
  `];var po=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Vt=class extends ee{set data(e){this._data=e;const o=[];e.forEach((s,n)=>{s.separator||o.push(n)}),this._clickableItemIndexes=o}get data(){return this._data}set show(e){this._show=e,this._selectedClickableItemIndex=-1,e&&this.updateComplete.then(()=>{this._wrapperEl&&this._wrapperEl.focus(),requestAnimationFrame(()=>{document.addEventListener("click",this._onClickOutsideBound,{once:!0})})})}get show(){return this._show}constructor(){super(),this.preventClose=!1,this.tabIndex=0,this._selectedClickableItemIndex=-1,this._show=!1,this._data=[],this._clickableItemIndexes=[],this._onClickOutsideBound=this._onClickOutside.bind(this),this.addEventListener("keydown",this._onKeyDown)}_onClickOutside(e){e.composedPath().includes(this)||(this.show=!1)}_onKeyDown(e){const{key:o}=e;switch((o==="ArrowUp"||o==="ArrowDown"||o==="Escape"||o==="Enter")&&e.preventDefault(),o){case"ArrowUp":this._handleArrowUp();break;case"ArrowDown":this._handleArrowDown();break;case"Escape":this._handleEscape();break;case"Enter":this._handleEnter();break}}_handleArrowUp(){this._selectedClickableItemIndex===0?this._selectedClickableItemIndex=this._clickableItemIndexes.length-1:this._selectedClickableItemIndex-=1}_handleArrowDown(){this._selectedClickableItemIndex+1<this._clickableItemIndexes.length?this._selectedClickableItemIndex+=1:this._selectedClickableItemIndex=0}_handleEscape(){this.show=!1,document.removeEventListener("click",this._onClickOutsideBound)}_dispatchSelectEvent(e){const{keybinding:o,label:s,value:n,separator:i,tabindex:r}=e;this.dispatchEvent(new CustomEvent("vsc-context-menu-select",{detail:{keybinding:o,label:s,separator:i,tabindex:r,value:n}}))}_dispatchLegacySelectEvent(e){const{keybinding:o,label:s,value:n,separator:i,tabindex:r}=e,l={keybinding:o,label:s,value:n,separator:i,tabindex:r};this.dispatchEvent(new CustomEvent("vsc-select",{detail:l,bubbles:!0,composed:!0}))}_handleEnter(){if(this._selectedClickableItemIndex===-1)return;const e=this._clickableItemIndexes[this._selectedClickableItemIndex],s=this._wrapperEl.querySelectorAll("vscode-context-menu-item")[e];this._dispatchLegacySelectEvent(s),this._dispatchSelectEvent(s),this.preventClose||(this.show=!1,document.removeEventListener("click",this._onClickOutsideBound))}_onItemClick(e){const o=e.currentTarget;this._dispatchLegacySelectEvent(o),this._dispatchSelectEvent(o),this.preventClose||(this.show=!1)}_onItemMouseOver(e){const o=e.target,s=o.dataset.index?+o.dataset.index:-1,n=this._clickableItemIndexes.findIndex(i=>i===s);n!==-1&&(this._selectedClickableItemIndex=n)}_onItemMouseOut(){this._selectedClickableItemIndex=-1}render(){if(!this._show)return w`${z}`;const e=this._clickableItemIndexes[this._selectedClickableItemIndex];return w`
      <div class="context-menu" tabindex="0">
        ${this.data?this.data.map(({label:o="",keybinding:s="",value:n="",separator:i=!1,tabindex:r=0},l)=>w`
                <vscode-context-menu-item
                  label=${o}
                  keybinding=${s}
                  value=${n}
                  ?separator=${i}
                  ?selected=${l===e}
                  tabindex=${r}
                  @vsc-click=${this._onItemClick}
                  @mouseover=${this._onItemMouseOver}
                  @mouseout=${this._onItemMouseOut}
                  data-index=${l}
                ></vscode-context-menu-item>
              `):w`<slot></slot>`}
      </div>
    `}};Vt.styles=um;po([p({type:Array,attribute:!1})],Vt.prototype,"data",null);po([p({type:Boolean,reflect:!0,attribute:"prevent-close"})],Vt.prototype,"preventClose",void 0);po([p({type:Boolean,reflect:!0})],Vt.prototype,"show",null);po([p({type:Number,reflect:!0})],Vt.prototype,"tabIndex",void 0);po([H()],Vt.prototype,"_selectedClickableItemIndex",void 0);po([H()],Vt.prototype,"_show",void 0);po([Ue(".context-menu")],Vt.prototype,"_wrapperEl",void 0);Vt=po([K("vscode-context-menu")],Vt);const hm=[G,W`
    :host {
      background-color: var(--vscode-foreground, #cccccc);
      display: block;
      height: 1px;
      margin-bottom: 10px;
      margin-top: 10px;
      opacity: 0.4;
    }
  `];var Oc=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let wn=class extends ee{constructor(){super(...arguments),this.role="separator"}render(){return w``}};wn.styles=hm;Oc([p({reflect:!0})],wn.prototype,"role",void 0);wn=Oc([K("vscode-divider")],wn);const pm=[G,W`
    :host {
      display: block;
      max-width: 727px;
    }
  `];var ss=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i},xo;(function(t){t.HORIZONTAL="horizontal",t.VERTICAL="vertical"})(xo||(xo={}));const fm=t=>["vscode-textfield","vscode-textarea"].includes(t.tagName.toLocaleLowerCase()),vm=t=>t.tagName.toLocaleLowerCase()==="vscode-single-select",gm=t=>t.tagName.toLocaleLowerCase()==="vscode-multi-select",Vl=t=>t.tagName.toLocaleLowerCase()==="vscode-checkbox",Ll=t=>t.tagName.toLocaleLowerCase()==="vscode-radio";let co=class extends ee{constructor(){super(...arguments),this.breakpoint=490,this._responsive=!1,this._firstUpdateComplete=!1,this._resizeObserverCallbackBound=this._resizeObserverCallback.bind(this)}set responsive(e){this._responsive=e,this._firstUpdateComplete&&(e?this._activateResponsiveLayout():this._deactivateResizeObserver())}get responsive(){return this._responsive}get data(){return this._collectFormData()}_collectFormData(){const e=["vscode-textfield","vscode-textarea","vscode-single-select","vscode-multi-select","vscode-checkbox","vscode-radio"].join(","),o=this.querySelectorAll(e),s={};return o.forEach(n=>{if(!n.hasAttribute("name"))return;const i=n.getAttribute("name");i&&(Vl(n)&&n.checked?s[i]=Array.isArray(s[i])?[...s[i],n.value]:[n.value]:gm(n)?s[i]=n.value:Vl(n)&&!n.checked?s[i]=Array.isArray(s[i])?s[i]:[]:Ll(n)&&n.checked||fm(n)||vm(n)?s[i]=n.value:Ll(n)&&!n.checked&&(s[i]=s[i]?s[i]:""))}),s}_toggleCompactLayout(e){this._assignedFormGroups.forEach(o=>{o.dataset.originalVariant||(o.dataset.originalVariant=o.variant);const s=o.dataset.originalVariant;e===xo.VERTICAL&&s==="horizontal"?o.variant="vertical":o.variant=s,o.querySelectorAll("vscode-checkbox-group, vscode-radio-group").forEach(i=>{i.dataset.originalVariant||(i.dataset.originalVariant=i.variant);const r=i.dataset.originalVariant;e===xo.HORIZONTAL&&r===xo.HORIZONTAL?i.variant="horizontal":i.variant="vertical"})})}_resizeObserverCallback(e){let o=0;for(const n of e)o=n.contentRect.width;const s=o<this.breakpoint?xo.VERTICAL:xo.HORIZONTAL;s!==this._currentFormGroupLayout&&(this._toggleCompactLayout(s),this._currentFormGroupLayout=s)}_activateResponsiveLayout(){this._resizeObserver=new ResizeObserver(this._resizeObserverCallbackBound),this._resizeObserver.observe(this._wrapperElement)}_deactivateResizeObserver(){var e;(e=this._resizeObserver)==null||e.disconnect(),this._resizeObserver=null}firstUpdated(){this._firstUpdateComplete=!0,this._responsive&&this._activateResponsiveLayout()}render(){return w`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};co.styles=pm;ss([p({type:Boolean,reflect:!0})],co.prototype,"responsive",null);ss([p({type:Number})],co.prototype,"breakpoint",void 0);ss([p({type:Object})],co.prototype,"data",null);ss([Ue(".wrapper")],co.prototype,"_wrapperElement",void 0);ss([kt({selector:"vscode-form-group"})],co.prototype,"_assignedFormGroups",void 0);co=ss([K("vscode-form-container")],co);const bm=[G,W`
    :host {
      --label-right-margin: 14px;
      --label-width: 150px;

      display: block;
      margin: 15px 0;
    }

    :host([variant='settings-group']) {
      margin: 0;
      padding: 12px 14px 18px;
      max-width: 727px;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    :host([variant='vertical']) .wrapper,
    :host([variant='settings-group']) .wrapper {
      display: block;
    }

    :host([variant='horizontal']) ::slotted(vscode-checkbox-group),
    :host([variant='horizontal']) ::slotted(vscode-radio-group) {
      width: calc(100% - calc(var(--label-width) + var(--label-right-margin)));
    }

    :host([variant='horizontal']) ::slotted(vscode-label) {
      margin-right: var(--label-right-margin);
      text-align: right;
      width: var(--label-width);
    }

    :host([variant='settings-group']) ::slotted(vscode-label) {
      height: 18px;
      line-height: 18px;
      margin-bottom: 4px;
      margin-right: 0;
      padding: 0;
    }

    ::slotted(vscode-form-helper) {
      margin-left: calc(var(--label-width) + var(--label-right-margin));
    }

    :host([variant='vertical']) ::slotted(vscode-form-helper),
    :host([variant='settings-group']) ::slotted(vscode-form-helper) {
      display: block;
      margin-left: 0;
    }

    :host([variant='settings-group']) ::slotted(vscode-form-helper) {
      margin-bottom: 0;
      margin-top: 0;
    }

    :host([variant='vertical']) ::slotted(vscode-label),
    :host([variant='settings-group']) ::slotted(vscode-label) {
      display: block;
      margin-left: 0;
      text-align: left;
    }

    :host([variant='settings-group']) ::slotted(vscode-inputbox),
    :host([variant='settings-group']) ::slotted(vscode-textfield),
    :host([variant='settings-group']) ::slotted(vscode-textarea),
    :host([variant='settings-group']) ::slotted(vscode-single-select),
    :host([variant='settings-group']) ::slotted(vscode-multi-select) {
      margin-top: 9px;
    }

    ::slotted(vscode-button:first-child) {
      margin-left: calc(var(--label-width) + var(--label-right-margin));
    }

    :host([variant='vertical']) ::slotted(vscode-button) {
      margin-left: 0;
    }

    ::slotted(vscode-button) {
      margin-right: 4px;
    }
  `];var Pc=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Cn=class extends ee{constructor(){super(...arguments),this.variant="horizontal"}render(){return w`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};Cn.styles=bm;Pc([p({reflect:!0})],Cn.prototype,"variant",void 0);Cn=Pc([K("vscode-form-group")],Cn);const mm=[G,W`
    :host {
      display: block;
      line-height: 1.4em;
      margin-bottom: 4px;
      margin-top: 4px;
      max-width: 720px;
      opacity: 0.9;
    }

    :host([vertical]) {
      margin-left: 0;
    }
  `];var _m=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};const Oi=new CSSStyleSheet;Oi.replaceSync(`
  vscode-form-helper * {
    margin: 0;
  }

  vscode-form-helper *:not(:last-child) {
    margin-bottom: 8px;
  }
`);let Pi=class extends ee{constructor(){super(),this._injectLightDOMStyles()}_injectLightDOMStyles(){document.adoptedStyleSheets.find(o=>o===Oi)||document.adoptedStyleSheets.push(Oi)}render(){return w`<slot></slot>`}};Pi.styles=mm;Pi=_m([K("vscode-form-helper")],Pi);let Dl=0;const Tc=(t="")=>(Dl++,`${t}${Dl}`),ym=[G,W`
    :host {
      color: var(--vscode-foreground, #cccccc);
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: 600;
      line-height: ${Yb};
      cursor: default;
      display: block;
      padding: 5px 0;
    }

    .wrapper {
      display: block;
    }

    .wrapper.required:after {
      content: ' *';
    }

    ::slotted(.normal) {
      font-weight: normal;
    }

    ::slotted(.lightened) {
      color: var(--vscode-foreground, #cccccc);
      opacity: 0.9;
    }
  `];var qn=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Jo=class extends ee{constructor(){super(...arguments),this.required=!1,this._id="",this._htmlFor="",this._connected=!1}set htmlFor(e){this._htmlFor=e,this.setAttribute("for",e),this._connected&&this._connectWithTarget()}get htmlFor(){return this._htmlFor}set id(e){this._id=e}get id(){return this._id}attributeChangedCallback(e,o,s){super.attributeChangedCallback(e,o,s)}connectedCallback(){super.connectedCallback(),this._connected=!0,this._id===""&&(this._id=Tc("vscode-label-"),this.setAttribute("id",this._id)),this._connectWithTarget()}_getTarget(){let e=null;if(this._htmlFor){const o=this.getRootNode({composed:!1});o&&(e=o.querySelector(`#${this._htmlFor}`))}return e}async _connectWithTarget(){await this.updateComplete;const e=this._getTarget();["vscode-radio-group","vscode-checkbox-group"].includes((e==null?void 0:e.tagName.toLowerCase())??"")&&e.setAttribute("aria-labelledby",this._id);let o="";this.textContent&&(o=this.textContent.trim()),e&&"label"in e&&["vscode-textfield","vscode-textarea","vscode-single-select","vscode-multi-select"].includes((e==null?void 0:e.tagName.toLowerCase())??"")&&(e.label=o)}_handleClick(){const e=this._getTarget();e&&"focus"in e&&e.focus()}render(){return w`
      <label
        class=${re({wrapper:!0,required:this.required})}
        @click=${this._handleClick}
        ><slot></slot
      ></label>
    `}};Jo.styles=ym;qn([p({reflect:!0,attribute:"for"})],Jo.prototype,"htmlFor",null);qn([p()],Jo.prototype,"id",null);qn([p({type:Boolean,reflect:!0})],Jo.prototype,"required",void 0);Jo=qn([K("vscode-label")],Jo);const $n=w`
  <span class="icon">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
      />
    </svg>
  </span>
`,xm=Fb`<svg
  width="16"
  height="16"
  viewBox="0 0 16 16"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
  />
</svg>`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:wm}=jb,Ml=()=>document.createComment(""),ps=(t,e,o)=>{var i;const s=t._$AA.parentNode,n=e===void 0?t._$AB:e._$AA;if(o===void 0){const r=s.insertBefore(Ml(),n),l=s.insertBefore(Ml(),n);o=new wm(r,l,t,t.options)}else{const r=o._$AB.nextSibling,l=o._$AM,c=l!==t;if(c){let d;(i=o._$AQ)==null||i.call(o,t),o._$AM=t,o._$AP!==void 0&&(d=t._$AU)!==l._$AU&&o._$AP(d)}if(r!==n||c){let d=o._$AA;for(;d!==r;){const a=d.nextSibling;s.insertBefore(d,n),d=a}}}return o},_o=(t,e,o=t)=>(t._$AI(e,o),t),Cm={},$m=(t,e=Cm)=>t._$AH=e,km=t=>t._$AH,pi=t=>{t._$AR(),t._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fl=(t,e,o)=>{const s=new Map;for(let n=e;n<=o;n++)s.set(t[n],n);return s},Sm=vr(class extends gr{constructor(t){if(super(t),t.type!==fr.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,o){let s;o===void 0?o=e:e!==void 0&&(s=e);const n=[],i=[];let r=0;for(const l of t)n[r]=s?s(l,r):r,i[r]=o(l,r),r++;return{values:i,keys:n}}render(t,e,o){return this.dt(t,e,o).values}update(t,[e,o,s]){const n=km(t),{values:i,keys:r}=this.dt(e,o,s);if(!Array.isArray(n))return this.ut=r,i;const l=this.ut??(this.ut=[]),c=[];let d,a,h=0,m=n.length-1,y=0,I=i.length-1;for(;h<=m&&y<=I;)if(n[h]===null)h++;else if(n[m]===null)m--;else if(l[h]===r[y])c[y]=_o(n[h],i[y]),h++,y++;else if(l[m]===r[I])c[I]=_o(n[m],i[I]),m--,I--;else if(l[h]===r[I])c[I]=_o(n[h],i[I]),ps(t,c[I+1],n[h]),h++,I--;else if(l[m]===r[y])c[y]=_o(n[m],i[y]),ps(t,n[h],n[m]),m--,y++;else if(d===void 0&&(d=Fl(r,y,I),a=Fl(l,h,m)),d.has(l[h]))if(d.has(l[m])){const b=a.get(r[y]),te=b!==void 0?n[b]:null;if(te===null){const M=ps(t,n[h]);_o(M,i[y]),c[y]=M}else c[y]=_o(te,i[y]),ps(t,n[h],te),n[b]=null;y++}else pi(n[m]),m--;else pi(n[h]),h++;for(;y<=I;){const b=ps(t,c[I+1]);_o(b,i[y]),c[y++]=b}for(;h<=m;){const b=n[h++];b!==null&&pi(b)}return this.ut=r,$m(t,c),Bt}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Im(t,e,o){return t?e(t):o==null?void 0:o(t)}var Us=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Oo=class extends ee{constructor(){super(...arguments),this.description="",this.selected=!1,this.disabled=!1,this._initialized=!1,this._handleSlotChange=()=>{this._initialized&&this.dispatchEvent(new Event("vsc-option-state-change",{bubbles:!0}))}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._initialized=!0})}willUpdate(e){this._initialized&&(e.has("description")||e.has("value")||e.has("selected")||e.has("disabled"))&&this.dispatchEvent(new Event("vsc-option-state-change",{bubbles:!0}))}render(){return w`<slot @slotchange=${this._handleSlotChange}></slot>`}};Oo.styles=G;Us([p({type:String})],Oo.prototype,"value",void 0);Us([p({type:String})],Oo.prototype,"description",void 0);Us([p({type:Boolean,reflect:!0})],Oo.prototype,"selected",void 0);Us([p({type:Boolean,reflect:!0})],Oo.prototype,"disabled",void 0);Oo=Us([K("vscode-option")],Oo);const Rc=(t,e)=>{const o={match:!1,ranges:[]},s=t.toLowerCase(),n=e.toLowerCase(),i=s.split(" ");let r=0;return i.forEach((l,c)=>{if(c>0&&(r+=i[c-1].length+1),o.match)return;const d=l.indexOf(n),a=n.length;d===0&&(o.match=!0,o.ranges.push([r+d,Math.min(r+d+a,t.length)]))}),o},zc=(t,e)=>{const o={match:!1,ranges:[]};return t.toLowerCase().indexOf(e.toLowerCase())===0&&(o.match=!0,o.ranges=[[0,e.length]]),o},Bc=(t,e)=>{const o={match:!1,ranges:[]},s=t.toLowerCase().indexOf(e.toLowerCase());return s>-1&&(o.match=!0,o.ranges=[[s,s+e.length]]),o},Vc=(t,e)=>{const o={match:!1,ranges:[]};let s=0,n=0;const i=e.length-1,r=t.toLowerCase(),l=e.toLowerCase();for(let c=0;c<=i;c++){if(n=r.indexOf(l[c],s),n===-1)return{match:!1,ranges:[]};o.match=!0,o.ranges.push([n,n+1]),s=n+1}return o},Em=(t,e,o)=>{const s=[];return t.forEach(n=>{let i;switch(o){case"startsWithPerTerm":i=Rc(n.label,e);break;case"startsWith":i=zc(n.label,e);break;case"contains":i=Bc(n.label,e);break;default:i=Vc(n.label,e)}i.match&&s.push({...n,ranges:i.ranges})}),s},Qs=t=>{const e=[];return t===" "?(e.push(w`&nbsp;`),e):(t.indexOf(" ")===0&&e.push(w`&nbsp;`),e.push(w`${t.trimStart().trimEnd()}`),t.lastIndexOf(" ")===t.length-1&&e.push(w`&nbsp;`),e)},Am=(t,e)=>{const o=[],s=e.length;return s<1?w`${t}`:(e.forEach((n,i)=>{const r=t.substring(n[0],n[1]);i===0&&n[0]!==0&&o.push(...Qs(t.substring(0,e[0][0]))),i>0&&i<s&&n[0]-e[i-1][1]!==0&&o.push(...Qs(t.substring(e[i-1][1],n[0]))),o.push(w`<b>${Qs(r)}</b>`),i===s-1&&n[1]<t.length&&o.push(...Qs(t.substring(n[1],t.length)))}),o)};class Om{constructor(e){this._activeIndex=-1,this._options=[],this._filterPattern="",this._filterMethod="fuzzy",this._combobox=!1,this._indexByValue=new Map,this._indexByLabel=new Map,this._selectedIndex=-1,this._selectedIndexes=new Set,this._multiSelect=!1,this._numOfVisibleOptions=0,(this._host=e).addController(this)}hostConnected(){}get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e,this._host.requestUpdate()}get relativeActiveIndex(){var e;return((e=this._options[this._activeIndex])==null?void 0:e.filteredIndex)??-1}set comboboxMode(e){this._combobox=e,this._host.requestUpdate()}get comboboxMode(){return this._combobox}get multiSelect(){return this._multiSelect}set multiSelect(e){this._selectedIndex=-1,this._selectedIndexes.clear(),this._multiSelect=e,this._host.requestUpdate()}get selectedIndex(){return this._selectedIndex}set selectedIndex(e){var s;this._selectedIndex!==-1&&((s=this._options[this._selectedIndex]).selected??(s.selected=!1));const o=this.getOptionByIndex(e);this._selectedIndex=o?e:-1,this._host.requestUpdate()}get selectedIndexes(){return Array.from(this._selectedIndexes)}set selectedIndexes(e){this._selectedIndexes.forEach(o=>{this._options[o].selected=!1}),this._selectedIndexes=new Set(e),e.forEach(o=>{this._options[o]!==void 0&&(this._options[o].selected=!0)}),this._host.requestUpdate()}set value(e){if(this._multiSelect){const o=e.map(s=>this._indexByValue.get(s)).filter(s=>s!==void 0);this._selectedIndexes=new Set(o)}else this._selectedIndex=this._indexByValue.get(e)??-1;this._host.requestUpdate()}get value(){return this._multiSelect?this._selectedIndexes.size>0?Array.from(this._selectedIndexes).map(e=>this._options[e].value):[]:this._selectedIndex>-1?this._options[this._selectedIndex].value:""}set multiSelectValue(e){const o=e.map(s=>this._indexByValue.get(s)).filter(s=>s!==void 0);this._selectedIndexes=new Set(o)}get multiSelectValue(){return this._selectedIndexes.size>0?Array.from(this._selectedIndexes).map(e=>this._options[e].value):[]}get filterPattern(){return this._filterPattern}set filterPattern(e){e!==this._filterPattern&&(this._filterPattern=e,this._updateState())}get filterMethod(){return this._filterMethod}set filterMethod(e){e!==this._filterMethod&&(this._filterMethod=e,this._updateState())}get options(){return this._options}get numOfVisibleOptions(){return this._numOfVisibleOptions}get numOptions(){return this._options.length}populate(e){this._indexByValue.clear(),this._indexByLabel.clear(),this._options=e.map((o,s)=>(this._indexByValue.set(o.value??"",s),this._indexByLabel.set(o.label??"",s),{description:o.description??"",disabled:o.disabled??!1,label:o.label??"",selected:o.selected??!1,value:o.value??"",index:s,filteredIndex:s,ranges:[],visible:!0})),this._numOfVisibleOptions=this._options.length}add(e){const o=this._options.length,{description:s,disabled:n,label:i,selected:r,value:l}=e;let c=!0,d=[];if(this._combobox&&this._filterPattern!==""){const a=this._searchByPattern(i??"");c=a.match,d=a.ranges}this._indexByValue.set(l??"",o),this._indexByLabel.set(i??"",o),r&&(this._selectedIndex=o,this._selectedIndexes.add(o),this._activeIndex=o),this._options.push({index:o,filteredIndex:o,description:s??"",disabled:n??!1,label:i??"",selected:r??!1,value:l??"",visible:c,ranges:d}),c&&(this._numOfVisibleOptions+=1)}clear(){this._options=[],this._indexByValue.clear(),this._indexByLabel.clear(),this._numOfVisibleOptions=0}getIsIndexSelected(e){return this._multiSelect?this._selectedIndexes.has(e):this._selectedIndex===e}expandMultiSelection(e){e.forEach(o=>{const s=this._indexByValue.get(o)??-1;s!==-1&&this._selectedIndexes.add(s)}),this._host.requestUpdate()}toggleActiveMultiselectOption(){const e=this._options[this._activeIndex]??null;if(!e)return;this._selectedIndexes.has(e.index)?this._selectedIndexes.delete(e.index):this._selectedIndexes.add(e.index),this._host.requestUpdate()}toggleOptionSelected(e){const o=this._selectedIndexes.has(e);this._options[e].selected=!this._options[e].selected,o?this._selectedIndexes.delete(e):this._selectedIndexes.add(e),this._host.requestUpdate()}getActiveOption(){return this._options[this._activeIndex]??null}getSelectedOption(){return this._options[this._selectedIndex]??null}getOptionByIndex(e){return this._options[e]??null}findOptionIndex(e){return this._indexByValue.get(e)??-1}getOptionByValue(e,o=!1){const s=this._indexByValue.get(e)??-1;return s===-1?null:o?this._options[s]:this._options[s].visible?this._options[s]:null}getOptionByLabel(e){const o=this._indexByLabel.get(e)??-1;return o===-1?null:this._options[o]}next(e){const o=e??this._activeIndex;let s=-1;for(let n=o+1;n<this._options.length;n++)if(this._options[n]&&!this._options[n].disabled&&this._options[n].visible){s=n;break}return s>-1?this._options[s]:null}prev(e){const o=e??this._activeIndex;let s=-1;for(let n=o-1;n>=0;n--)if(this._options[n]&&!this._options[n].disabled&&this._options[n].visible){s=n;break}return s>-1?this._options[s]:null}activateDefault(){if(this._multiSelect){if(this._selectedIndexes.size>0){const o=this._selectedIndexes.values().next();this._activeIndex=o.value?o.value:0}}else this._selectedIndex>-1?this._activeIndex=this._selectedIndex:this._activeIndex=0;this._host.requestUpdate()}selectAll(){this._multiSelect&&(this._options.forEach((e,o)=>{this._options[o].selected=!0,this._selectedIndexes.add(o)}),this._host.requestUpdate())}selectNone(){this._multiSelect&&(this._options.forEach((e,o)=>{this._options[o].selected=!1}),this._selectedIndexes.clear(),this._host.requestUpdate())}_searchByPattern(e){let o;switch(this._filterMethod){case"startsWithPerTerm":o=Rc(e,this._filterPattern);break;case"startsWith":o=zc(e,this._filterPattern);break;case"contains":o=Bc(e,this._filterPattern);break;default:o=Vc(e,this._filterPattern)}return o}_updateState(){if(!this._combobox||this._filterPattern==="")this._options.forEach((e,o)=>{this._options[o].visible=!0,this._options[o].ranges=[]}),this._numOfVisibleOptions=this._options.length;else{let e=-1;this._numOfVisibleOptions=0,this._options.forEach(({label:o},s)=>{const n=this._searchByPattern(o);this._options[s].visible=n.match,this._options[s].ranges=n.ranges,this._options[s].filteredIndex=n.match?++e:-1,n.match&&(this._numOfVisibleOptions+=1)})}this._host.requestUpdate()}}const Pm=[G,W`
    :host {
      display: block;
      position: relative;
    }

    .scrollable-container {
      height: 100%;
      overflow: auto;
    }

    .scrollable-container::-webkit-scrollbar {
      cursor: default;
      width: 0;
    }

    .scrollable-container {
      scrollbar-width: none;
    }

    .shadow {
      box-shadow: var(--vscode-scrollbar-shadow, #000000) 0 6px 6px -6px inset;
      display: none;
      height: 3px;
      left: 0;
      pointer-events: none;
      position: absolute;
      top: 0;
      z-index: 1;
      width: 100%;
    }

    .shadow.visible {
      display: block;
    }

    .scrollbar-track {
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      width: 10px;
      z-index: 100;
    }

    .scrollbar-track.hidden {
      display: none;
    }

    .scrollbar-thumb {
      background-color: transparent;
      min-height: var(--min-thumb-height, 20px);
      opacity: 0;
      position: absolute;
      right: 0;
      width: 10px;
    }

    .scrollbar-thumb.visible {
      background-color: var(
        --vscode-scrollbarSlider-background,
        rgba(121, 121, 121, 0.4)
      );
      opacity: 1;
      transition: opacity 100ms;
    }

    .scrollbar-thumb.fade {
      background-color: var(
        --vscode-scrollbarSlider-background,
        rgba(121, 121, 121, 0.4)
      );
      opacity: 0;
      transition: opacity 800ms;
    }

    .scrollbar-thumb.visible:hover {
      background-color: var(
        --vscode-scrollbarSlider-hoverBackground,
        rgba(100, 100, 100, 0.7)
      );
    }

    .scrollbar-thumb.visible.active,
    .scrollbar-thumb.visible.active:hover {
      background-color: var(
        --vscode-scrollbarSlider-activeBackground,
        rgba(191, 191, 191, 0.4)
      );
    }

    .prevent-interaction {
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      position: absolute;
      z-index: 99;
    }

    .content {
      overflow: hidden;
    }
  `];var Oe=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let $e=class extends ee{set scrollPos(e){this._scrollPos=e,this._updateScrollbar(),this._updateThumbPosition(),this.requestUpdate()}get scrollPos(){return this._scrollPos}get scrollMax(){return this._scrollableContainer?this._scrollableContainer.scrollHeight:0}constructor(){super(),this.alwaysVisible=!1,this.fastScrollSensitivity=5,this.minThumbSize=20,this.mouseWheelScrollSensitivity=1,this.shadow=!0,this.scrolled=!1,this._scrollPos=0,this._isDragging=!1,this._thumbHeight=0,this._thumbY=0,this._thumbVisible=!1,this._thumbFade=!1,this._thumbActive=!1,this._scrollThumbStartY=0,this._mouseStartY=0,this._scrollbarVisible=!0,this._scrollbarTrackZ=0,this._resizeObserverCallback=()=>{this._updateScrollbar(),this._updateThumbPosition()},this._handleSlotChange=()=>{this._updateScrollbar(),this._updateThumbPosition(),this._zIndexFix()},this._handleScrollThumbMouseMove=e=>{const o=this._scrollThumbStartY+(e.screenY-this._mouseStartY);this._thumbY=this._limitThumbPos(o),this.scrollPos=this._calculateScrollPosFromThumbPos(this._thumbY),this.dispatchEvent(new CustomEvent("vsc-scrollable-scroll",{detail:this.scrollPos}))},this._handleScrollThumbMouseUp=e=>{this._isDragging=!1,this._thumbActive=!1;const o=this.getBoundingClientRect(),{x:s,y:n,width:i,height:r}=o,{pageX:l,pageY:c}=e;(l>s+i||l<s||c>n+r||c<n)&&(this._thumbFade=!0,this._thumbVisible=!1),document.removeEventListener("mousemove",this._handleScrollThumbMouseMove),document.removeEventListener("mouseup",this._handleScrollThumbMouseUp)},this._handleComponentMouseOver=()=>{this._thumbVisible=!0,this._thumbFade=!1},this._handleComponentMouseOut=()=>{this._thumbActive||(this._thumbVisible=!1,this._thumbFade=!0)},this._handleComponentWheel=e=>{e.preventDefault();const o=e.altKey?this.mouseWheelScrollSensitivity*this.fastScrollSensitivity:this.mouseWheelScrollSensitivity;this.scrollPos=this._limitScrollPos(this.scrollPos+e.deltaY*o),this.dispatchEvent(new CustomEvent("vsc-scrollable-scroll",{detail:this.scrollPos}))},this._handleScrollableContainerScroll=e=>{e.currentTarget&&(this.scrollPos=e.currentTarget.scrollTop)},this.addEventListener("mouseover",this._handleComponentMouseOver),this.addEventListener("mouseout",this._handleComponentMouseOut),this.addEventListener("wheel",this._handleComponentWheel)}connectedCallback(){super.connectedCallback(),this._hostResizeObserver=new ResizeObserver(this._resizeObserverCallback),this._contentResizeObserver=new ResizeObserver(this._resizeObserverCallback),this.requestUpdate(),this.updateComplete.then(()=>{this._hostResizeObserver.observe(this),this._contentResizeObserver.observe(this._contentElement),this._updateThumbPosition()})}disconnectedCallback(){super.disconnectedCallback(),this._hostResizeObserver.unobserve(this),this._hostResizeObserver.disconnect(),this._contentResizeObserver.unobserve(this._contentElement),this._contentResizeObserver.disconnect()}firstUpdated(e){this._updateThumbPosition()}_calcThumbHeight(){var n;const e=this.offsetHeight,o=((n=this._contentElement)==null?void 0:n.offsetHeight)??0,s=e*(e/o);return Math.max(this.minThumbSize,s)}_updateScrollbar(){var s;const e=((s=this._contentElement)==null?void 0:s.offsetHeight)??0;this.offsetHeight>=e?this._scrollbarVisible=!1:(this._scrollbarVisible=!0,this._thumbHeight=this._calcThumbHeight()),this.requestUpdate()}_zIndexFix(){let e=0;this._assignedElements.forEach(o=>{if("style"in o){const s=window.getComputedStyle(o).zIndex;/([0-9-])+/g.test(s)&&(e=Number(s)>e?Number(s):e)}}),this._scrollbarTrackZ=e+1,this.requestUpdate()}_updateThumbPosition(){if(!this._scrollableContainer)return;const e=this._scrollPos;this.scrolled=e>0;const o=this.offsetHeight,s=this._thumbHeight,i=this._contentElement.offsetHeight-o,r=e/i,l=o-s;this._thumbY=Math.min(r*(o-s),l)}_calculateScrollPosFromThumbPos(e){const o=this.getBoundingClientRect().height,s=this._scrollThumbElement.getBoundingClientRect().height,n=this._contentElement.getBoundingClientRect().height,i=e/(o-s)*(n-o);return this._limitScrollPos(i)}_limitScrollPos(e){return e<0?0:e>this.scrollMax?this.scrollMax:e}_limitThumbPos(e){const o=this.getBoundingClientRect().height,s=this._scrollThumbElement.getBoundingClientRect().height;return e<0?0:e>o-s?o-s:e}_handleScrollThumbMouseDown(e){const o=this.getBoundingClientRect(),s=this._scrollThumbElement.getBoundingClientRect();this._mouseStartY=e.screenY,this._scrollThumbStartY=s.top-o.top,this._isDragging=!0,this._thumbActive=!0,document.addEventListener("mousemove",this._handleScrollThumbMouseMove),document.addEventListener("mouseup",this._handleScrollThumbMouseUp)}_handleScrollbarTrackPress(e){e.target===e.currentTarget&&(this._thumbY=e.offsetY-this._thumbHeight/2,this.scrollPos=this._calculateScrollPosFromThumbPos(this._thumbY))}render(){return w`
      <div
        class="scrollable-container"
        .style=${Fe({userSelect:this._isDragging?"none":"auto"})}
        .scrollTop=${this._scrollPos}
        @scroll=${this._handleScrollableContainerScroll}
      >
        <div
          class=${re({shadow:!0,visible:this.scrolled})}
          .style=${Fe({zIndex:String(this._scrollbarTrackZ)})}
        ></div>
        ${this._isDragging?w`<div class="prevent-interaction"></div>`:z}
        <div
          class=${re({"scrollbar-track":!0,hidden:!this._scrollbarVisible})}
          @mousedown=${this._handleScrollbarTrackPress}
        >
          <div
            class=${re({"scrollbar-thumb":!0,visible:this.alwaysVisible?!0:this._thumbVisible,fade:this.alwaysVisible?!1:this._thumbFade,active:this._thumbActive})}
            .style=${Fe({height:`${this._thumbHeight}px`,top:`${this._thumbY}px`})}
            @mousedown=${this._handleScrollThumbMouseDown}
          ></div>
        </div>
        <div class="content">
          <slot @slotchange=${this._handleSlotChange}></slot>
        </div>
      </div>
    `}};$e.styles=Pm;Oe([p({type:Boolean,reflect:!0,attribute:"always-visible"})],$e.prototype,"alwaysVisible",void 0);Oe([p({type:Number,attribute:"fast-scroll-sensitivity"})],$e.prototype,"fastScrollSensitivity",void 0);Oe([p({type:Number,attribute:"min-thumb-size"})],$e.prototype,"minThumbSize",void 0);Oe([p({type:Number,attribute:"mouse-wheel-scroll-sensitivity"})],$e.prototype,"mouseWheelScrollSensitivity",void 0);Oe([p({type:Boolean,reflect:!0})],$e.prototype,"shadow",void 0);Oe([p({type:Boolean,reflect:!0})],$e.prototype,"scrolled",void 0);Oe([p({type:Number,attribute:"scroll-pos"})],$e.prototype,"scrollPos",null);Oe([p({type:Number,attribute:"scroll-max"})],$e.prototype,"scrollMax",null);Oe([H()],$e.prototype,"_isDragging",void 0);Oe([H()],$e.prototype,"_thumbHeight",void 0);Oe([H()],$e.prototype,"_thumbY",void 0);Oe([H()],$e.prototype,"_thumbVisible",void 0);Oe([H()],$e.prototype,"_thumbFade",void 0);Oe([H()],$e.prototype,"_thumbActive",void 0);Oe([Ue(".content")],$e.prototype,"_contentElement",void 0);Oe([Ue(".scrollbar-thumb",!0)],$e.prototype,"_scrollThumbElement",void 0);Oe([Ue(".scrollable-container")],$e.prototype,"_scrollableContainer",void 0);Oe([kt()],$e.prototype,"_assignedElements",void 0);$e=Oe([K("vscode-scrollable")],$e);var ke=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};const en=10,Ft=22;class xe extends ee{set combobox(e){this._opts.comboboxMode=e}get combobox(){return this._opts.comboboxMode}set disabled(e){this._disabled=e,this.ariaDisabled=e?"true":"false",e===!0?(this._originalTabIndex=this.tabIndex,this.tabIndex=-1):(this.tabIndex=this._originalTabIndex??0,this._originalTabIndex=void 0),this.requestUpdate()}get disabled(){return this._disabled}set filter(e){const o=["contains","fuzzy","startsWith","startsWithPerTerm"];let s;o.includes(e)?s=e:(console.warn(`[VSCode Webview Elements] Invalid filter: "${e}", fallback to default. Valid values are: "contains", "fuzzy", "startsWith", "startsWithPerm".`,this),s="fuzzy"),this._opts.filterMethod=s}get filter(){return this._opts.filterMethod}set options(e){this._opts.populate(e)}get options(){return this._opts.options.map(({label:e,value:o,description:s,selected:n,disabled:i})=>({label:e,value:o,description:s,selected:n,disabled:i}))}constructor(){super(),this.creatable=!1,this.label="",this.invalid=!1,this.focused=!1,this.open=!1,this.position="below",this._opts=new Om(this),this._firstUpdateCompleted=!1,this._currentDescription="",this._filter="fuzzy",this._selectedIndexes=[],this._options=[],this._value="",this._values=[],this._isPlaceholderOptionActive=!1,this._isBeingFiltered=!1,this._optionListScrollPos=0,this._isHoverForbidden=!1,this._disabled=!1,this._originalTabIndex=void 0,this._onClickOutside=e=>{e.composedPath().findIndex(n=>n===this)===-1&&(this.open=!1)},this._onMouseMove=()=>{this._isHoverForbidden=!1,window.removeEventListener("mousemove",this._onMouseMove)},this._onOptionListScroll=e=>{this._optionListScrollPos=e.detail},this._onComponentKeyDown=e=>{[" ","ArrowUp","ArrowDown","Escape"].includes(e.key)&&(e.stopPropagation(),e.preventDefault()),e.key==="Enter"&&this._onEnterKeyDown(e),e.key===" "&&this._onSpaceKeyDown(),e.key==="Escape"&&this._onEscapeKeyDown(),e.key==="ArrowUp"&&this._onArrowUpKeyDown(),e.key==="ArrowDown"&&this._onArrowDownKeyDown()},this._onComponentFocus=()=>{this.focused=!0},this._onComponentBlur=()=>{this.focused=!1},this.addEventListener("vsc-option-state-change",e=>{e.stopPropagation(),this._setStateFromSlottedElements(),this.requestUpdate()})}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onComponentKeyDown),this.addEventListener("focus",this._onComponentFocus),this.addEventListener("blur",this._onComponentBlur),this._setAutoFocus()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onComponentKeyDown),this.removeEventListener("focus",this._onComponentFocus),this.removeEventListener("blur",this._onComponentBlur)}firstUpdated(e){this._firstUpdateCompleted=!0}willUpdate(e){e.has("required")&&this._firstUpdateCompleted&&this._manageRequired()}update(e){super.update(e),e.has("open")&&(this.open?(this._opts.activateDefault(),this._scrollActiveElementToTop(),window.addEventListener("click",this._onClickOutside)):window.removeEventListener("click",this._onClickOutside))}get _filteredOptions(){return!this.combobox||this._opts.filterPattern===""?this._options:Em(this._options,this._opts.filterPattern,this._filter)}_setAutoFocus(){this.hasAttribute("autofocus")&&(this.tabIndex<0&&(this.tabIndex=0),this.combobox?this.updateComplete.then(()=>{var e;(e=this.shadowRoot)==null||e.querySelector(".combobox-input").focus()}):this.updateComplete.then(()=>{var e;(e=this.shadowRoot)==null||e.querySelector(".select-face").focus()}))}get _isSuggestedOptionVisible(){if(!(this.combobox&&this.creatable))return!1;const e=this._opts.getOptionByValue(this._opts.filterPattern)!==null,o=this._opts.filterPattern.length>0;return!e&&o}_manageRequired(){}_setStateFromSlottedElements(){const e=this._assignedOptions??[];this._opts.clear(),e.forEach(o=>{const{innerText:s,description:n,disabled:i}=o,r=typeof o.value=="string"?o.value:s.trim(),l=o.selected??!1,c={label:s.trim(),value:r,description:n,selected:l,disabled:i};this._opts.add(c)})}_createSuggestedOption(){const e=this._opts.numOptions,o=document.createElement("vscode-option");return o.value=this._opts.filterPattern,Sc(this._opts.filterPattern,o),this.appendChild(o),e}_dispatchChangeEvent(){this.dispatchEvent(new Event("change")),this.dispatchEvent(new Event("input"))}async _createAndSelectSuggestedOption(){}_toggleComboboxDropdown(){this._opts.filterPattern="",this.open=!this.open}_scrollActiveElementToTop(){this._optionListScrollPos=Math.floor(this._opts.relativeActiveIndex*Ft)}async _adjustOptionListScrollPos(e,o){let s=this._opts.numOfVisibleOptions;if(this._isSuggestedOptionVisible&&(s+=1),s<=en)return;this._isHoverForbidden=!0,window.addEventListener("mousemove",this._onMouseMove);const i=this._optionListScrollPos,r=o*Ft,l=r>=i&&r<=i+en*Ft-Ft;e==="down"&&(l||(this._optionListScrollPos=o*Ft-(en-1)*Ft)),e==="up"&&(l||(this._optionListScrollPos=Math.floor(this._opts.relativeActiveIndex*Ft)))}_onFaceClick(){this.open=!this.open}_onComboboxButtonClick(){this._toggleComboboxDropdown()}_onComboboxButtonKeyDown(e){e.key==="Enter"&&this._toggleComboboxDropdown()}_onOptionMouseOver(e){if(this._isHoverForbidden)return;const o=e.target;o.matches(".option")&&(o.matches(".placeholder")?(this._isPlaceholderOptionActive=!0,this._opts.activeIndex=-1):(this._isPlaceholderOptionActive=!1,this._opts.activeIndex=+o.dataset.index))}_onPlaceholderOptionMouseOut(){this._isPlaceholderOptionActive=!1}_onNoOptionsClick(e){e.stopPropagation()}_onEnterKeyDown(e){this._isBeingFiltered=!1,e!=null&&e.composedPath&&e.composedPath().find(s=>s.matches?s.matches("vscode-button.button-accept"):!1)}_onSpaceKeyDown(){if(!this.open){this.open=!0;return}}_onArrowUpKeyDown(){if(this.open){if(this._opts.activeIndex<=0&&!(this.combobox&&this.creatable))return;if(this._isPlaceholderOptionActive){const e=this._opts.numOfVisibleOptions-1;this._opts.activeIndex=e,this._isPlaceholderOptionActive=!1}else{const e=this._opts.prev();if(e!==null){this._opts.activeIndex=(e==null?void 0:e.index)??-1;const o=(e==null?void 0:e.filteredIndex)??-1;o>-1&&this._adjustOptionListScrollPos("up",o)}}}else this.open=!0,this._opts.activateDefault()}_onArrowDownKeyDown(){let e=this._opts.numOfVisibleOptions;const o=this._isSuggestedOptionVisible;if(o&&(e+=1),this.open){if(this._isPlaceholderOptionActive&&this._opts.activeIndex===-1)return;const s=this._opts.next();if(o&&s===null)this._isPlaceholderOptionActive=!0,this._adjustOptionListScrollPos("down",e-1),this._opts.activeIndex=-1;else if(s!==null){const n=(s==null?void 0:s.filteredIndex)??-1;this._opts.activeIndex=(s==null?void 0:s.index)??-1,n>-1&&this._adjustOptionListScrollPos("down",n)}}else this.open=!0,this._opts.activateDefault()}_onEscapeKeyDown(){this.open=!1}_onSlotChange(){this._setStateFromSlottedElements(),this.requestUpdate()}_onComboboxInputFocus(e){e.target.select(),this._isBeingFiltered=!1,this._opts.filterPattern=""}_onComboboxInputBlur(){this._isBeingFiltered=!1}_onComboboxInputInput(e){this._isBeingFiltered=!0,this._opts.filterPattern=e.target.value,this._opts.activeIndex=-1,this.open=!0}_onComboboxInputClick(){this._isBeingFiltered=this._opts.filterPattern!=="",this.open=!0}_onComboboxInputSpaceKeyDown(e){e.key===" "&&e.stopPropagation()}_onOptionClick(e){this._isBeingFiltered=!1}_renderCheckbox(e,o){return w`<span class=${re({"checkbox-icon":!0,checked:e})}>${xm}</span
      ><span class="option-label">${o}</span>`}_renderOptions(){const e=this._opts.options;return w`
      <ul
        aria-label=${Q(this.label??void 0)}
        aria-multiselectable=${Q(this._opts.multiSelect?"true":void 0)}
        class="options"
        id="select-listbox"
        role="listbox"
        tabindex="-1"
        @click=${this._onOptionClick}
        @mouseover=${this._onOptionMouseOver}
      >
        ${Sm(e,o=>o.index,(o,s)=>{var c;if(!o.visible)return z;const n=o.index===this._opts.activeIndex&&!o.disabled,i=this._opts.getIsIndexSelected(o.index),r={active:n,disabled:o.disabled,option:!0,selected:i},l=((c=o.ranges)==null?void 0:c.length)??0>0?Am(o.label,o.ranges??[]):o.label;return w`
              <li
                aria-selected=${i?"true":"false"}
                class=${re(r)}
                data-index=${o.index}
                data-filtered-index=${s}
                id=${`op-${o.index}`}
                role="option"
                tabindex="-1"
              >
                ${Im(this._opts.multiSelect,()=>this._renderCheckbox(i,l),()=>l)}
              </li>
            `})}
        ${this._renderPlaceholderOption(this._opts.numOfVisibleOptions<1)}
      </ul>
    `}_renderPlaceholderOption(e){return!this.combobox||this._opts.getOptionByLabel(this._opts.filterPattern)?z:this.creatable&&this._opts.filterPattern.length>0?w`<li
        class=${re({option:!0,placeholder:!0,active:this._isPlaceholderOptionActive})}
        @mouseout=${this._onPlaceholderOptionMouseOut}
      >
        Add "${this._opts.filterPattern}"
      </li>`:e?w`<li class="no-options" @click=${this._onNoOptionsClick}>
            No options
          </li>`:z}_renderDescription(){const e=this._opts.getActiveOption();if(!e)return z;const{description:o}=e;return o?w`<div class="description">${o}</div>`:z}_renderSelectFace(){return w`${z}`}_renderComboboxFace(){return w`${z}`}_renderDropdownControls(){return w`${z}`}_renderDropdown(){const e={dropdown:!0,multiple:this._opts.multiSelect,open:this.open},o=this._isSuggestedOptionVisible||this._opts.numOfVisibleOptions===0?this._opts.numOfVisibleOptions+1:this._opts.numOfVisibleOptions,s=Math.min(o*Ft,en*Ft);return w`
      <div class=${re(e)}>
        ${this.position==="above"?this._renderDescription():z}
        <vscode-scrollable
          always-visible
          class="scrollable"
          min-thumb-size="40"
          tabindex="-1"
          @vsc-scrollable-scroll=${this._onOptionListScroll}
          .scrollPos=${this._optionListScrollPos}
          .style=${Fe({height:`${s}px`})}
        >
          ${this._renderOptions()} ${this._renderDropdownControls()}
        </vscode-scrollable>
        ${this.position==="below"?this._renderDescription():z}
      </div>
    `}}ke([p({type:Boolean,reflect:!0})],xe.prototype,"creatable",void 0);ke([p({type:Boolean,reflect:!0})],xe.prototype,"combobox",null);ke([p({reflect:!0})],xe.prototype,"label",void 0);ke([p({type:Boolean,reflect:!0})],xe.prototype,"disabled",null);ke([p({type:Boolean,reflect:!0})],xe.prototype,"invalid",void 0);ke([p()],xe.prototype,"filter",null);ke([p({type:Boolean,reflect:!0})],xe.prototype,"focused",void 0);ke([p({type:Boolean,reflect:!0})],xe.prototype,"open",void 0);ke([p({type:Array})],xe.prototype,"options",null);ke([p({reflect:!0})],xe.prototype,"position",void 0);ke([kt({flatten:!0,selector:"vscode-option"})],xe.prototype,"_assignedOptions",void 0);ke([H()],xe.prototype,"_currentDescription",void 0);ke([H()],xe.prototype,"_filter",void 0);ke([H()],xe.prototype,"_filteredOptions",null);ke([H()],xe.prototype,"_selectedIndexes",void 0);ke([H()],xe.prototype,"_options",void 0);ke([H()],xe.prototype,"_value",void 0);ke([H()],xe.prototype,"_values",void 0);ke([H()],xe.prototype,"_isPlaceholderOptionActive",void 0);ke([H()],xe.prototype,"_isBeingFiltered",void 0);ke([H()],xe.prototype,"_optionListScrollPos",void 0);const Lc=[G,W`
    :host {
      display: inline-block;
      max-width: 100%;
      outline: none;
      position: relative;
      width: 320px;
    }

    .main-slot {
      display: none;
    }

    .select-face,
    .combobox-face {
      background-color: var(--vscode-settings-dropdownBackground, #313131);
      border-color: var(--vscode-settings-dropdownBorder, #3c3c3c);
      border-radius: 2px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-dropdownForeground, #cccccc);
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 18px;
      position: relative;
      user-select: none;
      width: 100%;
    }

    :host([invalid]) .select-face,
    :host(:invalid) .select-face,
    :host([invalid]) .combobox-face,
    :host(:invalid) .combobox-face {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .select-face {
      cursor: pointer;
      display: block;
      padding: 3px 4px;
    }

    .select-face .text {
      display: block;
      height: 18px;
      overflow: hidden;
    }

    .select-face.multiselect {
      padding: 0;
    }

    .select-face-badge {
      background-color: var(--vscode-badge-background, #616161);
      border-radius: 2px;
      color: var(--vscode-badge-foreground, #f8f8f8);
      display: inline-block;
      flex-shrink: 0;
      font-size: 11px;
      line-height: 16px;
      margin: 2px;
      padding: 2px 3px;
      white-space: nowrap;
    }

    .select-face-badge.no-item {
      background-color: transparent;
      color: inherit;
    }

    .combobox-face {
      display: flex;
    }

    :host(:focus) .select-face,
    :host(:focus) .combobox-face,
    :host([focused]) .select-face,
    :host([focused]) .combobox-face {
      border-color: var(--vscode-focusBorder, #0078d4);
      outline: none;
    }

    .combobox-input {
      background-color: transparent;
      box-sizing: border-box;
      border: 0;
      color: var(--vscode-foreground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      line-height: 16px;
      padding: 4px;
      width: 100%;
    }

    .combobox-input:focus {
      outline: none;
    }

    .combobox-button {
      align-items: center;
      background-color: transparent;
      border: 0;
      border-radius: 2px;
      box-sizing: content-box;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      flex-shrink: 0;
      height: 16px;
      justify-content: center;
      margin: 1px 1px 0 0;
      padding: 3px;
      width: 22px;
    }

    .combobox-button:hover,
    .combobox-button:focus-visible {
      background-color: var(
        --vscode-toolbar-hoverBackground,
        rgba(90, 93, 94, 0.31)
      );
      outline-style: dashed;
      outline-color: var(--vscode-toolbar-hoverOutline, transparent);
    }

    .combobox-button:focus-visible {
      outline: none;
    }

    .icon {
      color: var(--vscode-foreground, #cccccc);
      display: block;
      height: 14px;
      pointer-events: none;
      width: 14px;
    }

    .select-face .icon {
      position: absolute;
      right: 6px;
      top: 5px;
    }

    .icon svg {
      color: var(--vscode-foreground, #cccccc);
      height: 100%;
      width: 100%;
    }

    .dropdown {
      background-color: var(--vscode-settings-dropdownBackground, #313131);
      border-color: var(--vscode-settings-dropdownListBorder, #454545);
      border-radius: 0 0 3px 3px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      display: none;
      left: 0;
      padding-bottom: 2px;
      position: absolute;
      top: 100%;
      width: 100%;
      z-index: var(--dropdown-z-index, 2);
    }

    .dropdown.open {
      display: block;
    }

    :host([position='above']) .dropdown {
      border-radius: 3px 3px 0 0;
      bottom: 26px;
      padding-bottom: 0;
      padding-top: 2px;
      top: auto;
    }

    :host(:focus) .dropdown,
    :host([focused]) .dropdown {
      border-color: var(--vscode-focusBorder, #0078d4);
    }

    .scrollable {
      display: block;
      max-height: 222px;
      margin: 1px;
      outline: none;
      overflow: hidden;
    }

    .options {
      box-sizing: border-box;
      cursor: pointer;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .option {
      align-items: center;
      box-sizing: border-box;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      height: 22px;
      line-height: 18px;
      min-height: calc(var(--vscode-font-size) * 1.3);
      padding: 1px 3px;
      user-select: none;
      outline-color: transparent;
      outline-offset: -1px;
      outline-style: solid;
      outline-width: 1px;
    }

    .option b {
      color: var(--vscode-list-highlightForeground, #2aaaff);
    }

    .option.active b {
      color: var(--vscode-list-focusHighlightForeground, #2aaaff);
    }

    .option:not(.disabled):hover {
      background-color: var(--vscode-list-hoverBackground, #2a2d2e);
      color: var(--vscode-list-hoverForeground, #ffffff);
    }

    :host-context(body[data-vscode-theme-kind='vscode-high-contrast'])
      .option:hover,
    :host-context(body[data-vscode-theme-kind='vscode-high-contrast-light'])
      .option:hover {
      outline-style: dotted;
      outline-color: var(--vscode-list-focusOutline, #0078d4);
      outline-width: 1px;
    }

    .option.disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }

    .option.active,
    .option.active:hover {
      background-color: var(--vscode-list-activeSelectionBackground, #04395e);
      color: var(--vscode-list-activeSelectionForeground, #ffffff);
      outline-color: var(--vscode-list-activeSelectionBackground, #04395e);
      outline-style: solid;
      outline-width: 1px;
    }

    .no-options {
      align-items: center;
      border-color: transparent;
      border-style: solid;
      border-width: 1px;
      color: var(--vscode-foreground, #cccccc);
      cursor: default;
      display: flex;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 18px;
      min-height: calc(var(--vscode-font-size) * 1.3);
      opacity: 0.85;
      padding: 1px 3px;
      user-select: none;
    }

    .placeholder {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .placeholder span {
      font-weight: bold;
    }

    .placeholder:not(.disabled):hover {
      color: var(--vscode-list-activeSelectionForeground, #ffffff);
    }

    :host-context(body[data-vscode-theme-kind='vscode-high-contrast'])
      .option.active,
    :host-context(body[data-vscode-theme-kind='vscode-high-contrast-light'])
      .option.active:hover {
      outline-color: var(--vscode-list-focusOutline, #0078d4);
      outline-style: dashed;
    }

    .option-label {
      display: block;
      pointer-events: none;
      width: 100%;
    }

    .dropdown.multiple .option.selected {
      background-color: var(--vscode-list-hoverBackground, #2a2d2e);
      outline-color: var(--vscode-list-hoverBackground, #2a2d2e);
    }

    .dropdown.multiple .option.selected.active {
      background-color: var(--vscode-list-activeSelectionBackground, #04395e);
      color: var(--vscode-list-activeSelectionForeground, #ffffff);
      outline-color: var(--vscode-list-activeSelectionBackground, #04395e);
    }

    .checkbox-icon {
      align-items: center;
      background-color: var(--vscode-checkbox-background, #313131);
      border: 1px solid var(--vscode-checkbox-border);
      border-radius: 2px;
      box-sizing: border-box;
      color: var(--vscode-checkbox-foreground);
      display: inline-flex;
      height: 15px;
      justify-content: center;
      margin-right: 5px;
      overflow: hidden;
      position: relative;
      width: 15px;
    }

    .checkbox-icon svg {
      display: none;
      height: 13px;
      width: 13px;
    }

    .checkbox-icon.checked svg {
      display: block;
    }

    .dropdown-controls {
      display: flex;
      justify-content: flex-end;
      padding: 4px;
    }

    .dropdown-controls :not(:last-child) {
      margin-right: 4px;
    }

    .action-icon {
      align-items: center;
      background-color: transparent;
      border: 0;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      height: 24px;
      justify-content: center;
      padding: 0;
      width: 24px;
    }

    .action-icon:focus {
      outline: none;
    }

    .action-icon:focus-visible {
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: -1px;
    }

    .description {
      border-color: var(--vscode-settings-dropdownBorder, #3c3c3c);
      border-style: solid;
      border-width: 1px 0 0;
      color: var(--vscode-foreground, #cccccc);
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 1.3;
      padding: 6px 4px;
      word-wrap: break-word;
    }

    :host([position='above']) .description {
      border-width: 0 0 1px;
    }
  `];var Ro=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Ct=class extends xe{set selectedIndexes(e){this._opts.selectedIndexes=e}get selectedIndexes(){return this._opts.selectedIndexes}set value(e){this._opts.multiSelectValue=e,this._opts.selectedIndexes.length>0?this._requestedValueToSetLater=[]:this._requestedValueToSetLater=Array.isArray(e)?e:[e],this._setFormValue(),this._manageRequired()}get value(){return this._opts.multiSelectValue}get form(){return this._internals.form}get type(){return"select-multiple"}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}selectAll(){this._opts.selectAll()}selectNone(){this._opts.selectNone()}constructor(){super(),this.defaultValue=[],this.required=!1,this.name=void 0,this._requestedValueToSetLater=[],this._onOptionClick=e=>{const s=e.composedPath().find(r=>"matches"in r?r.matches("li.option"):!1);if(!s)return;if(s.classList.contains("placeholder")){this._createAndSelectSuggestedOption();return}const i=Number(s.dataset.index);this._opts.toggleOptionSelected(i),this._setFormValue(),this._manageRequired(),this._dispatchChangeEvent()},this._opts.multiSelect=!0,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._setDefaultValue(),this._manageRequired()})}formResetCallback(){this.updateComplete.then(()=>{this.value=this.defaultValue})}formStateRestoreCallback(e,o){const s=Array.from(e.entries()).map(n=>String(n[1]));this.updateComplete.then(()=>{this.value=s})}_setDefaultValue(){if(Array.isArray(this.defaultValue)&&this.defaultValue.length>0){const e=this.defaultValue.map(o=>String(o));this.value=e}}_dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("vsc-change",{detail:{selectedIndexes:this._opts.selectedIndexes,value:this._opts.multiSelectValue}})),super._dispatchChangeEvent()}_onFaceClick(){super._onFaceClick(),this._opts.activeIndex=0}_toggleComboboxDropdown(){super._toggleComboboxDropdown(),this._opts.activeIndex=-1}_manageRequired(){const{value:e}=this;e.length===0&&this.required?this._internals.setValidity({valueMissing:!0},"Please select an item in the list.",this._faceElement):this._internals.setValidity({})}_setFormValue(){const e=new FormData;this._values.forEach(o=>{e.append(this.name??"",o)}),this._internals.setFormValue(e)}async _createAndSelectSuggestedOption(){var s;super._createAndSelectSuggestedOption();const e=this._createSuggestedOption();await this.updateComplete,this.selectedIndexes=[...this.selectedIndexes,e],this._dispatchChangeEvent();const o=new CustomEvent("vsc-multi-select-create-option",{detail:{value:((s=this._opts.getOptionByIndex(e))==null?void 0:s.value)??""}});this.dispatchEvent(o),this.open=!1,this._isPlaceholderOptionActive=!1}_onSlotChange(){super._onSlotChange(),this._requestedValueToSetLater.length>0&&(this._opts.expandMultiSelection(this._requestedValueToSetLater),this._requestedValueToSetLater=this._requestedValueToSetLater.filter(e=>this._opts.findOptionIndex(e)===-1))}_onEnterKeyDown(e){super._onEnterKeyDown(e),this.open?this._isPlaceholderOptionActive?this._createAndSelectSuggestedOption():(this._opts.toggleActiveMultiselectOption(),this._setFormValue(),this._manageRequired(),this._dispatchChangeEvent()):(this._opts.filterPattern="",this.open=!0)}_onMultiAcceptClick(){this.open=!1}_onMultiDeselectAllClick(){this._opts.selectedIndexes=[],this._values=[],this._options=this._options.map(e=>({...e,selected:!1})),this._manageRequired(),this._dispatchChangeEvent()}_onMultiSelectAllClick(){this._opts.selectedIndexes=[],this._values=[],this._options=this._options.map(e=>({...e,selected:!0})),this._options.forEach((e,o)=>{this._selectedIndexes.push(o),this._values.push(e.value),this._dispatchChangeEvent()}),this._setFormValue(),this._manageRequired()}_renderLabel(){switch(this._opts.selectedIndexes.length){case 0:return w`<span class="select-face-badge no-item">0 Selected</span>`;default:return w`<span class="select-face-badge"
          >${this._opts.selectedIndexes.length} Selected</span
        >`}}_renderComboboxFace(){let e="";if(this._isBeingFiltered)e=this._opts.filterPattern;else{const n=this._opts.getSelectedOption();e=(n==null?void 0:n.label)??""}const o=this._opts.activeIndex>-1?`op-${this._opts.activeIndex}`:"",s=this.open?"true":"false";return w`
      <div class="combobox-face face">
        ${this._opts.multiSelect?this._renderLabel():z}
        <input
          aria-activedescendant=${o}
          aria-autocomplete="list"
          aria-controls="select-listbox"
          aria-expanded=${s}
          aria-haspopup="listbox"
          aria-label=${Q(this.label)}
          class="combobox-input"
          role="combobox"
          spellcheck="false"
          type="text"
          autocomplete="off"
          .value=${e}
          @focus=${this._onComboboxInputFocus}
          @blur=${this._onComboboxInputBlur}
          @input=${this._onComboboxInputInput}
          @click=${this._onComboboxInputClick}
          @keydown=${this._onComboboxInputSpaceKeyDown}
        >
        <button
          aria-label="Open the list of options"
          class="combobox-button"
          type="button"
          @click=${this._onComboboxButtonClick}
          @keydown=${this._onComboboxButtonKeyDown}
          tabindex="-1"
        >
          ${$n}
        </button>
      </div>
    `}_renderSelectFace(){const e=this._opts.activeIndex>-1?`op-${this._opts.activeIndex}`:"",o=this.open?"true":"false";return w`
      <div
        aria-activedescendant=${Q(this._opts.multiSelect?void 0:e)}
        aria-controls="select-listbox"
        aria-expanded=${Q(this._opts.multiSelect?void 0:o)}
        aria-haspopup="listbox"
        aria-label=${Q(this.label??void 0)}
        class="select-face face multiselect"
        @click=${this._onFaceClick}
        .tabIndex=${this.disabled?-1:0}
      >
        ${this._renderLabel()} ${$n}
      </div>
    `}_renderDropdownControls(){return this._filteredOptions.length>0?w`
          <div class="dropdown-controls">
            <button
              type="button"
              @click=${this._onMultiSelectAllClick}
              title="Select all"
              class="action-icon"
              id="select-all"
            >
              <vscode-icon name="checklist"></vscode-icon>
            </button>
            <button
              type="button"
              @click=${this._onMultiDeselectAllClick}
              title="Deselect all"
              class="action-icon"
              id="select-none"
            >
              <vscode-icon name="clear-all"></vscode-icon>
            </button>
            <vscode-button
              class="button-accept"
              @click=${this._onMultiAcceptClick}
              >OK</vscode-button
            >
          </div>
        `:w`${z}`}render(){return w`
      <div class="multi-select">
        <slot class="main-slot" @slotchange=${this._onSlotChange}></slot>
        ${this.combobox?this._renderComboboxFace():this._renderSelectFace()}
        ${this._renderDropdown()}
      </div>
    `}};Ct.styles=Lc;Ct.shadowRootOptions={...yt.shadowRootOptions,delegatesFocus:!0};Ct.formAssociated=!0;Ro([p({type:Array,attribute:"default-value"})],Ct.prototype,"defaultValue",void 0);Ro([p({type:Boolean,reflect:!0})],Ct.prototype,"required",void 0);Ro([p({reflect:!0})],Ct.prototype,"name",void 0);Ro([p({type:Array,attribute:!1})],Ct.prototype,"selectedIndexes",null);Ro([p({type:Array})],Ct.prototype,"value",null);Ro([Ue(".face")],Ct.prototype,"_faceElement",void 0);Ct=Ro([K("vscode-multi-select")],Ct);const Tm=[G,W`
    :host {
      align-items: center;
      display: block;
      height: 28px;
      margin: 0;
      outline: none;
      width: 28px;
    }

    .progress {
      height: 100%;
      width: 100%;
    }

    .background {
      fill: none;
      stroke: transparent;
      stroke-width: 2px;
    }

    .indeterminate-indicator-1 {
      fill: none;
      stroke: var(--vscode-progressBar-background, #0078d4);
      stroke-width: 2px;
      stroke-linecap: square;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
      animation: spin-infinite 2s linear infinite;
    }

    @keyframes spin-infinite {
      0% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(0deg);
      }
      50% {
        stroke-dasharray: 21.99px 21.99px;
        transform: rotate(450deg);
      }
      100% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(1080deg);
      }
    }
  `];var Wn=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Xo=class extends ee{constructor(){super(...arguments),this.ariaLabel="Loading",this.ariaLive="assertive",this.role="alert"}render(){return w`<svg class="progress" part="progress" viewBox="0 0 16 16">
      <circle
        class="background"
        part="background"
        cx="8px"
        cy="8px"
        r="7px"
      ></circle>
      <circle
        class="indeterminate-indicator-1"
        part="indeterminate-indicator-1"
        cx="8px"
        cy="8px"
        r="7px"
      ></circle>
    </svg>`}};Xo.styles=Tm;Wn([p({reflect:!0,attribute:"aria-label"})],Xo.prototype,"ariaLabel",void 0);Wn([p({reflect:!0,attribute:"aria-live"})],Xo.prototype,"ariaLive",void 0);Wn([p({reflect:!0})],Xo.prototype,"role",void 0);Xo=Wn([K("vscode-progress-ring")],Xo);const Rm=[G,Ac,W`
    :host(:invalid) .icon,
    :host([invalid]) .icon {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .icon {
      border-radius: 9px;
    }

    .icon.checked:before {
      background-color: currentColor;
      border-radius: 4px;
      content: '';
      height: 8px;
      left: 50%;
      margin: -4px 0 0 -4px;
      position: absolute;
      top: 50%;
      width: 8px;
    }

    :host(:focus):host(:not([disabled])) .icon {
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: -1px;
    }
  `];var ot=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Re=class extends Ec(br){constructor(){super(),this.autofocus=!1,this.checked=!1,this.defaultChecked=!1,this.invalid=!1,this.name="",this.value="",this.disabled=!1,this.required=!1,this.role="radio",this.tabIndex=0,this._slottedText="",this.type="radio",this._handleClick=()=>{this.disabled||this.checked||(this._checkButton(),this._handleValueChange(),this._dispatchCustomEvent(),this.dispatchEvent(new Event("change",{bubbles:!0})))},this._handleKeyDown=e=>{var o;!this.disabled&&(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key===" "&&!this.checked&&(this.checked=!0,this._handleValueChange(),this._dispatchCustomEvent(),this.dispatchEvent(new Event("change",{bubbles:!0}))),e.key==="Enter"&&((o=this._internals.form)==null||o.requestSubmit()))},this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleKeyDown),this.addEventListener("click",this._handleClick),this._handleValueChange()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._handleKeyDown),this.removeEventListener("click",this._handleClick)}update(e){super.update(e),e.has("checked")&&this._handleValueChange(),e.has("required")&&this._handleValueChange()}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}formResetCallback(){this._getRadios().forEach(o=>{o.checked=o.defaultChecked}),this.updateComplete.then(()=>{this._handleValueChange()})}formStateRestoreCallback(e,o){this.value===e&&e!==""&&(this.checked=!0)}_dispatchCustomEvent(){this.dispatchEvent(new CustomEvent("vsc-change",{detail:{checked:this.checked,label:this.label,value:this.value},bubbles:!0,composed:!0}))}_getRadios(){const e=this.getRootNode({composed:!0});if(!e)return[];const o=e.querySelectorAll(`vscode-radio[name="${this.name}"]`);return Array.from(o)}_uncheckOthers(e){e.forEach(o=>{o!==this&&(o.checked=!1)})}_checkButton(){const e=this._getRadios();this.checked=!0,e.forEach(o=>{o!==this&&(o.checked=!1)})}setComponentValidity(e){e?this._internals.setValidity({}):this._internals.setValidity({valueMissing:!0},"Please select one of these options.",this._inputEl)}_setGroupValidity(e,o){this.updateComplete.then(()=>{e.forEach(s=>{s.setComponentValidity(o)})})}_setActualFormValue(){let e="";this.checked?e=this.value?this.value:"on":e=null,this._internals.setFormValue(e)}_handleValueChange(){const e=this._getRadios(),o=e.some(s=>s.required);if(this._setActualFormValue(),this.checked)this._uncheckOthers(e),this._setGroupValidity(e,!0);else{const s=!!e.find(i=>i.checked),n=o&&!s;this._setGroupValidity(e,!n)}}render(){const e=re({icon:!0,checked:this.checked}),o=re({"label-inner":!0,"is-slot-empty":this._slottedText===""});return w`
      <div class="wrapper">
        <input
          ?autofocus=${this.autofocus}
          id="input"
          class="radio"
          type="checkbox"
          ?checked=${this.checked}
          value=${this.value}
          tabindex=${this.tabIndex}
        >
        <div class=${e}></div>
        <label for="input" class="label" @click=${this._handleClick}>
          <span class=${o}>
            ${this._renderLabelAttribute()}
            <slot @slotchange=${this._handleSlotChange}></slot>
          </span>
        </label>
      </div>
    `}};Re.styles=Rm;Re.formAssociated=!0;Re.shadowRootOptions={...yt.shadowRootOptions,delegatesFocus:!0};ot([p({type:Boolean,reflect:!0})],Re.prototype,"autofocus",void 0);ot([p({type:Boolean,reflect:!0})],Re.prototype,"checked",void 0);ot([p({type:Boolean,reflect:!0,attribute:"default-checked"})],Re.prototype,"defaultChecked",void 0);ot([p({type:Boolean,reflect:!0})],Re.prototype,"invalid",void 0);ot([p({reflect:!0})],Re.prototype,"name",void 0);ot([p()],Re.prototype,"value",void 0);ot([p({type:Boolean,reflect:!0})],Re.prototype,"disabled",void 0);ot([p({type:Boolean,reflect:!0})],Re.prototype,"required",void 0);ot([p({reflect:!0})],Re.prototype,"role",void 0);ot([p({type:Number,reflect:!0})],Re.prototype,"tabIndex",void 0);ot([H()],Re.prototype,"_slottedText",void 0);ot([Ue("#input")],Re.prototype,"_inputEl",void 0);ot([p()],Re.prototype,"type",void 0);Re=ot([K("vscode-radio")],Re);const zm=[G,W`
    :host {
      display: block;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    :host([variant='vertical']) .wrapper {
      display: block;
    }

    ::slotted(vscode-radio) {
      margin-right: 20px;
    }

    ::slotted(vscode-radio:last-child) {
      margin-right: 0;
    }

    :host([variant='vertical']) ::slotted(vscode-radio) {
      display: block;
      margin-bottom: 15px;
    }

    :host([variant='vertical']) ::slotted(vscode-radio:last-child) {
      margin-bottom: 0;
    }
  `];var ns=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let uo=class extends ee{constructor(){super(...arguments),this.variant="horizontal",this.role="radiogroup",this._focusedRadio=-1,this._checkedRadio=-1,this._firstContentLoaded=!1,this._onKeyDownBound=this._onKeyDown.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onKeyDownBound)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onKeyDownBound)}_uncheckPreviousChecked(e,o){e!==-1&&(this._radios[e].checked=!1),o!==-1&&(this._radios[o].tabIndex=-1)}_afterCheck(){this._focusedRadio=this._checkedRadio,this._radios[this._checkedRadio].checked=!0,this._radios[this._checkedRadio].tabIndex=0,this._radios[this._checkedRadio].focus()}_checkPrev(){const e=this._radios.findIndex(n=>n.checked),o=this._radios.findIndex(n=>n.focused),s=o!==-1?o:e;this._uncheckPreviousChecked(e,o),s===-1?this._checkedRadio=this._radios.length-1:s-1>=0?this._checkedRadio=s-1:this._checkedRadio=this._radios.length-1,this._afterCheck()}_checkNext(){const e=this._radios.findIndex(n=>n.checked),o=this._radios.findIndex(n=>n.focused),s=o!==-1?o:e;this._uncheckPreviousChecked(e,o),s===-1?this._checkedRadio=0:s+1<this._radios.length?this._checkedRadio=s+1:this._checkedRadio=0,this._afterCheck()}_onKeyDown(e){const{key:o}=e;["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"].includes(o)&&e.preventDefault(),(o==="ArrowRight"||o==="ArrowDown")&&this._checkNext(),(o==="ArrowLeft"||o==="ArrowUp")&&this._checkPrev()}_onChange(e){const o=this._radios.findIndex(s=>s===e.target);o!==-1&&(this._focusedRadio!==-1&&(this._radios[this._focusedRadio].tabIndex=-1),this._checkedRadio!==-1&&this._checkedRadio!==o&&(this._radios[this._checkedRadio].checked=!1),this._focusedRadio=o,this._checkedRadio=o,this._radios[o].tabIndex=0)}_onSlotChange(){if(!this._firstContentLoaded){const e=this._radios.findIndex(o=>o.autofocus);e>-1&&(this._focusedRadio=e),this._firstContentLoaded=!0}this._radios.forEach((e,o)=>{this._focusedRadio>-1?e.tabIndex=o===this._focusedRadio?0:-1:e.tabIndex=o===0?0:-1})}render(){return w`
      <div class="wrapper">
        <slot
          @slotchange=${this._onSlotChange}
          @vsc-change=${this._onChange}
        ></slot>
      </div>
    `}};uo.styles=zm;ns([p({reflect:!0})],uo.prototype,"variant",void 0);ns([p({reflect:!0})],uo.prototype,"role",void 0);ns([kt({selector:"vscode-radio"})],uo.prototype,"_radios",void 0);ns([H()],uo.prototype,"_focusedRadio",void 0);ns([H()],uo.prototype,"_checkedRadio",void 0);uo=ns([K("vscode-radio-group")],uo);var zo=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let $t=class extends xe{set selectedIndex(e){this._opts.selectedIndex=e;const o=this._opts.getOptionByIndex(e);o?(this._opts.activeIndex=e,this._value=o.value,this._internals.setFormValue(this._value),this._manageRequired()):(this._value="",this._internals.setFormValue(""),this._manageRequired())}get selectedIndex(){return this._opts.selectedIndex}set value(e){this._opts.value=e,this._opts.selectedIndex>-1?this._requestedValueToSetLater="":this._requestedValueToSetLater=e,this._internals.setFormValue(this._value),this._manageRequired()}get value(){return this._opts.value}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}updateInputValue(){if(!this.combobox)return;const e=this.renderRoot.querySelector(".combobox-input");if(e){const o=this._opts.getSelectedOption();e.value=(o==null?void 0:o.label)??""}}constructor(){super(),this.defaultValue="",this.name=void 0,this.required=!1,this._requestedValueToSetLater="",this._opts.multiSelect=!1,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._manageRequired()})}formResetCallback(){this.value=this.defaultValue}formStateRestoreCallback(e,o){this.updateComplete.then(()=>{this.value=e})}get type(){return"select-one"}get form(){return this._internals.form}async _createAndSelectSuggestedOption(){var s;const e=this._createSuggestedOption();await this.updateComplete,this._opts.selectedIndex=e,this._dispatchChangeEvent();const o=new CustomEvent("vsc-single-select-create-option",{detail:{value:((s=this._opts.getOptionByIndex(e))==null?void 0:s.value)??""}});this.dispatchEvent(o),this.open=!1,this._isPlaceholderOptionActive=!1}_dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("vsc-change",{detail:{selectedIndex:this._opts.selectedIndex,value:this._value}})),super._dispatchChangeEvent()}_setStateFromSlottedElements(){super._setStateFromSlottedElements(),!this.combobox&&this._opts.selectedIndexes.length===0&&(this._opts.selectedIndex=this._opts.options.length>0?0:-1)}_onSlotChange(){if(super._onSlotChange(),this._requestedValueToSetLater){const e=this._opts.getOptionByValue(this._requestedValueToSetLater);e&&(this._opts.selectedIndex=e.index,this._requestedValueToSetLater="")}this._opts.selectedIndex>-1&&this._opts.numOptions>0?(this._internals.setFormValue(this._opts.value),this._manageRequired()):(this._internals.setFormValue(null),this._manageRequired())}_onEnterKeyDown(e){super._onEnterKeyDown(e);let o=!1;this.combobox?this.open?this._isPlaceholderOptionActive?this._createAndSelectSuggestedOption():(o=this._opts.activeIndex!==this._opts.selectedIndex,this._opts.selectedIndex=this._opts.activeIndex,this.open=!1):(this.open=!0,this._scrollActiveElementToTop()):this.open?(o=this._opts.activeIndex!==this._opts.selectedIndex,this._opts.selectedIndex=this._opts.activeIndex,this.open=!1):(this.open=!0,this._scrollActiveElementToTop()),o&&(this._dispatchChangeEvent(),this.updateInputValue(),this._internals.setFormValue(this._opts.value),this._manageRequired())}_onOptionClick(e){super._onOptionClick(e);const s=e.composedPath().find(i=>{const r=i;if("matches"in r)return r.matches("li.option")});if(!s||s.matches(".disabled"))return;s.classList.contains("placeholder")?this.creatable&&this._createAndSelectSuggestedOption():(this._opts.selectedIndex=Number(s.dataset.index),this.open=!1,this._internals.setFormValue(this._value),this._manageRequired(),this._dispatchChangeEvent())}_manageRequired(){const{value:e}=this;e===""&&this.required?this._internals.setValidity({valueMissing:!0},"Please select an item in the list.",this._face):this._internals.setValidity({})}_renderSelectFace(){const e=this._opts.getSelectedOption(),o=(e==null?void 0:e.label)??"",s=this._opts.activeIndex>-1?`op-${this._opts.activeIndex}`:"";return w`
      <div
        aria-activedescendant=${s}
        aria-controls="select-listbox"
        aria-expanded=${this.open?"true":"false"}
        aria-haspopup="listbox"
        aria-label=${Q(this.label)}
        class="select-face face"
        @click=${this._onFaceClick}
        role="combobox"
        tabindex="0"
      >
        <span class="text">${o}</span> ${$n}
      </div>
    `}_renderComboboxFace(){let e="";if(this._isBeingFiltered)e=this._opts.filterPattern;else{const n=this._opts.getSelectedOption();e=(n==null?void 0:n.label)??""}const o=this._opts.activeIndex>-1?`op-${this._opts.activeIndex}`:"",s=this.open?"true":"false";return w`
      <div class="combobox-face face">
        <input
          aria-activedescendant=${o}
          aria-autocomplete="list"
          aria-controls="select-listbox"
          aria-expanded=${s}
          aria-haspopup="listbox"
          aria-label=${Q(this.label)}
          class="combobox-input"
          role="combobox"
          spellcheck="false"
          type="text"
          autocomplete="off"
          .value=${e}
          @focus=${this._onComboboxInputFocus}
          @blur=${this._onComboboxInputBlur}
          @input=${this._onComboboxInputInput}
          @click=${this._onComboboxInputClick}
          @keydown=${this._onComboboxInputSpaceKeyDown}
        >
        <button
          aria-label="Open the list of options"
          class="combobox-button"
          type="button"
          @click=${this._onComboboxButtonClick}
          @keydown=${this._onComboboxButtonKeyDown}
          tabindex="-1"
        >
          ${$n}
        </button>
      </div>
    `}render(){return w`
      <div class="single-select">
        <slot class="main-slot" @slotchange=${this._onSlotChange}></slot>
        ${this.combobox?this._renderComboboxFace():this._renderSelectFace()}
        ${this._renderDropdown()}
      </div>
    `}};$t.styles=Lc;$t.shadowRootOptions={...yt.shadowRootOptions,delegatesFocus:!0};$t.formAssociated=!0;zo([p({attribute:"default-value"})],$t.prototype,"defaultValue",void 0);zo([p({reflect:!0})],$t.prototype,"name",void 0);zo([p({type:Number,attribute:"selected-index"})],$t.prototype,"selectedIndex",null);zo([p({type:String})],$t.prototype,"value",null);zo([p({type:Boolean,reflect:!0})],$t.prototype,"required",void 0);zo([Ue(".face")],$t.prototype,"_face",void 0);$t=zo([K("vscode-single-select")],$t);const Bm=[G,W`
    :host {
      --separator-border: var(--vscode-editorWidget-border, #454545);

      border: 1px solid var(--vscode-editorWidget-border, #454545);
      display: block;
      overflow: hidden;
      position: relative;
    }

    ::slotted(*) {
      height: 100%;
      width: 100%;
    }

    ::slotted(vscode-split-layout) {
      border: 0;
    }

    .wrapper {
      display: flex;
      height: 100%;
      width: 100%;
    }

    .wrapper.horizontal {
      flex-direction: column;
    }

    .start {
      box-sizing: border-box;
      flex: 1;
      min-height: 0;
      min-width: 0;
    }

    :host([split='vertical']) .start {
      border-right: 1px solid var(--separator-border);
    }

    :host([split='horizontal']) .start {
      border-bottom: 1px solid var(--separator-border);
    }

    .end {
      flex: 1;
      min-height: 0;
      min-width: 0;
    }

    :host([split='vertical']) .start,
    :host([split='vertical']) .end {
      height: 100%;
    }

    :host([split='horizontal']) .start,
    :host([split='horizontal']) .end {
      width: 100%;
    }

    .handle-overlay {
      display: none;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;
    }

    .handle-overlay.active {
      display: block;
    }

    .handle-overlay.split-vertical {
      cursor: ew-resize;
    }

    .handle-overlay.split-horizontal {
      cursor: ns-resize;
    }

    .handle {
      background-color: transparent;
      position: absolute;
      z-index: 2;
    }

    .handle.hover {
      transition: background-color 0.1s ease-out 0.3s;
      background-color: var(--vscode-sash-hoverBorder, #0078d4);
    }

    .handle.hide {
      background-color: transparent;
      transition: background-color 0.1s ease-out;
    }

    .handle.split-vertical {
      cursor: ew-resize;
      height: 100%;
    }

    .handle.split-horizontal {
      cursor: ns-resize;
      width: 100%;
    }
  `];var Ke=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i},Ti;const jl="50%",Vm=4,tn=t=>{if(!t)return{value:0,unit:"pixel"};let e,o;t.endsWith("%")?(e="percent",o=+t.substring(0,t.length-1)):t.endsWith("px")?(e="pixel",o=+t.substring(0,t.length-2)):(e="pixel",o=+t);const s=isNaN(o)?0:o;return{unit:e,value:s}},on=(t,e)=>e===0?0:Math.min(100,t/e*100),Nl=(t,e)=>e*(t/100);let Be=Ti=class extends ee{set split(e){this._split!==e&&(this._split=e,this.resetHandlePosition())}get split(){return this._split}set handlePosition(e){this._rawHandlePosition=e,this._handlePositionPropChanged()}get handlePosition(){return this._rawHandlePosition}set fixedPane(e){this._fixedPane=e,this._fixedPanePropChanged()}get fixedPane(){return this._fixedPane}constructor(){super(),this._split="vertical",this.resetOnDblClick=!1,this.handleSize=4,this.initialHandlePosition=jl,this._fixedPane="none",this._handlePosition=0,this._isDragActive=!1,this._hover=!1,this._hide=!1,this._boundRect=new DOMRect,this._handleOffset=0,this._wrapperObserved=!1,this._fixedPaneSize=0,this._handleResize=e=>{const o=e[0].contentRect,{width:s,height:n}=o;this._boundRect=o;const i=this.split==="vertical"?s:n;this.fixedPane==="start"&&(this._handlePosition=this._fixedPaneSize),this.fixedPane==="end"&&(this._handlePosition=i-this._fixedPaneSize)},this._handleMouseUp=e=>{this._isDragActive=!1,e.target!==this&&(this._hover=!1,this._hide=!0),window.removeEventListener("mouseup",this._handleMouseUp),window.removeEventListener("mousemove",this._handleMouseMove);const{width:o,height:s}=this._boundRect,n=this.split==="vertical"?o:s,i=on(this._handlePosition,n);this.dispatchEvent(new CustomEvent("vsc-split-layout-change",{detail:{position:this._handlePosition,positionInPercentage:i},composed:!0}))},this._handleMouseMove=e=>{const{clientX:o,clientY:s}=e,{left:n,top:i,height:r,width:l}=this._boundRect,c=this.split==="vertical",d=c?l:r,a=c?o-n:s-i;this._handlePosition=Math.max(0,Math.min(a-this._handleOffset+this.handleSize/2,d)),this.fixedPane==="start"&&(this._fixedPaneSize=this._handlePosition),this.fixedPane==="end"&&(this._fixedPaneSize=d-this._handlePosition)},this._resizeObserver=new ResizeObserver(this._handleResize)}resetHandlePosition(){if(!this._wrapperEl){this._handlePosition=0;return}const{width:e,height:o}=this._wrapperEl.getBoundingClientRect(),s=this.split==="vertical"?e:o,{value:n,unit:i}=tn(this.initialHandlePosition??jl);i==="percent"?this._handlePosition=Nl(n,s):this._handlePosition=n}connectedCallback(){super.connectedCallback()}firstUpdated(e){this.fixedPane!=="none"&&(this._resizeObserver.observe(this._wrapperEl),this._wrapperObserved=!0),this._boundRect=this._wrapperEl.getBoundingClientRect();const{value:o,unit:s}=this.handlePosition?tn(this.handlePosition):tn(this.initialHandlePosition);this._setPosition(o,s),this._initFixedPane()}_handlePositionPropChanged(){if(this.handlePosition&&this._wrapperEl){this._boundRect=this._wrapperEl.getBoundingClientRect();const{value:e,unit:o}=tn(this.handlePosition);this._setPosition(e,o)}}_fixedPanePropChanged(){this._wrapperEl&&this._initFixedPane()}_initFixedPane(){if(this.fixedPane==="none")this._wrapperObserved&&(this._resizeObserver.unobserve(this._wrapperEl),this._wrapperObserved=!1);else{const{width:e,height:o}=this._boundRect,s=this.split==="vertical"?e:o;this._fixedPaneSize=this.fixedPane==="start"?this._handlePosition:s-this._handlePosition,this._wrapperObserved||(this._resizeObserver.observe(this._wrapperEl),this._wrapperObserved=!0)}}_setPosition(e,o){const{width:s,height:n}=this._boundRect,i=this.split==="vertical"?s:n;this._handlePosition=o==="percent"?Nl(e,i):e}_handleMouseOver(){this._hover=!0,this._hide=!1}_handleMouseOut(e){e.buttons!==1&&(this._hover=!1,this._hide=!0)}_handleMouseDown(e){e.stopPropagation(),e.preventDefault(),this._boundRect=this._wrapperEl.getBoundingClientRect();const{left:o,top:s}=this._boundRect,{left:n,top:i}=this._handleEl.getBoundingClientRect(),r=e.clientX-o,l=e.clientY-s;this.split==="vertical"&&(this._handleOffset=r-(n-o)),this.split==="horizontal"&&(this._handleOffset=l-(i-s)),this._isDragActive=!0,window.addEventListener("mouseup",this._handleMouseUp),window.addEventListener("mousemove",this._handleMouseMove)}_handleDblClick(){this.resetOnDblClick&&this.resetHandlePosition()}_handleSlotChange(){[...this._nestedLayoutsAtStart,...this._nestedLayoutsAtEnd].forEach(o=>{o instanceof Ti&&o.resetHandlePosition()})}render(){const{width:e,height:o}=this._boundRect,s=this.split==="vertical"?e:o,n=this.fixedPane!=="none"?`${this._handlePosition}px`:`${on(this._handlePosition,s)}%`;let i="";this.fixedPane==="start"?i=`0 0 ${this._fixedPaneSize}px`:i=`1 1 ${on(this._handlePosition,s)}%`;let r="";this.fixedPane==="end"?r=`0 0 ${this._fixedPaneSize}px`:r=`1 1 ${on(s-this._handlePosition,s)}%`;const l={left:this.split==="vertical"?n:"0",top:this.split==="vertical"?"0":n},c=this.handleSize??Vm;this.split==="vertical"&&(l.marginLeft=`${0-c/2}px`,l.width=`${c}px`),this.split==="horizontal"&&(l.height=`${c}px`,l.marginTop=`${0-c/2}px`);const d=re({"handle-overlay":!0,active:this._isDragActive,"split-vertical":this.split==="vertical","split-horizontal":this.split==="horizontal"}),a=re({handle:!0,hover:this._hover,hide:this._hide,"split-vertical":this.split==="vertical","split-horizontal":this.split==="horizontal"}),h={wrapper:!0,horizontal:this.split==="horizontal"};return w`
      <div class=${re(h)}>
        <div class="start" .style=${Fe({flex:i})}>
          <slot name="start" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div class="end" .style=${Fe({flex:r})}>
          <slot name="end" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div class=${d}></div>
        <div
          class=${a}
          .style=${Fe(l)}
          @mouseover=${this._handleMouseOver}
          @mouseout=${this._handleMouseOut}
          @mousedown=${this._handleMouseDown}
          @dblclick=${this._handleDblClick}
        ></div>
      </div>
    `}};Be.styles=Bm;Ke([p({reflect:!0})],Be.prototype,"split",null);Ke([p({type:Boolean,reflect:!0,attribute:"reset-on-dbl-click"})],Be.prototype,"resetOnDblClick",void 0);Ke([p({type:Number,reflect:!0,attribute:"handle-size"})],Be.prototype,"handleSize",void 0);Ke([p({reflect:!0,attribute:"initial-handle-position"})],Be.prototype,"initialHandlePosition",void 0);Ke([p({attribute:"handle-position"})],Be.prototype,"handlePosition",null);Ke([p({attribute:"fixed-pane"})],Be.prototype,"fixedPane",null);Ke([H()],Be.prototype,"_handlePosition",void 0);Ke([H()],Be.prototype,"_isDragActive",void 0);Ke([H()],Be.prototype,"_hover",void 0);Ke([H()],Be.prototype,"_hide",void 0);Ke([Ue(".wrapper")],Be.prototype,"_wrapperEl",void 0);Ke([Ue(".handle")],Be.prototype,"_handleEl",void 0);Ke([kt({slot:"start",selector:"vscode-split-layout"})],Be.prototype,"_nestedLayoutsAtStart",void 0);Ke([kt({slot:"end",selector:"vscode-split-layout"})],Be.prototype,"_nestedLayoutsAtEnd",void 0);Be=Ti=Ke([K("vscode-split-layout")],Be);const Lm=[G,W`
    :host {
      border-bottom: 1px solid transparent;
      cursor: pointer;
      display: block;
      margin-bottom: -1px;
      overflow: hidden;
      padding: 7px 8px;
      text-overflow: ellipsis;
      user-select: none;
      white-space: nowrap;
    }

    :host([active]) {
      border-bottom-color: var(--vscode-panelTitle-activeForeground);
      color: var(--vscode-panelTitle-activeForeground);
    }

    :host([panel]) {
      border-bottom: 0;
      margin-bottom: 0;
      padding: 0;
    }

    :host(:focus-visible) {
      outline: none;
    }

    .wrapper {
      align-items: center;
      color: var(--vscode-foreground);
      display: flex;
      min-height: 20px;
      overflow: inherit;
      text-overflow: inherit;
      position: relative;
    }

    .wrapper.panel {
      color: var(--vscode-panelTitle-inactiveForeground);
    }

    .wrapper.panel.active,
    .wrapper.panel:hover {
      color: var(--vscode-panelTitle-activeForeground);
    }

    :host([panel]) .wrapper {
      display: flex;
      font-size: 11px;
      height: 31px;
      padding: 2px 10px;
      text-transform: uppercase;
    }

    .main {
      overflow: inherit;
      text-overflow: inherit;
    }

    .active-indicator {
      display: none;
    }

    .active-indicator.panel.active {
      border-top: 1px solid var(--vscode-panelTitle-activeBorder);
      bottom: 4px;
      display: block;
      left: 8px;
      pointer-events: none;
      position: absolute;
      right: 8px;
    }

    :host(:focus-visible) .wrapper {
      outline-color: var(--vscode-focusBorder);
      outline-offset: 3px;
      outline-style: solid;
      outline-width: 1px;
    }

    :host(:focus-visible) .wrapper.panel {
      outline-offset: -2px;
    }

    slot[name='content-before']::slotted(vscode-badge) {
      margin-right: 8px;
    }

    slot[name='content-after']::slotted(vscode-badge) {
      margin-left: 8px;
    }
  `];var is=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let xt=class extends ee{constructor(){super(...arguments),this.active=!1,this.ariaControls="",this.panel=!1,this.role="tab",this.tabId=-1}attributeChangedCallback(e,o,s){if(super.attributeChangedCallback(e,o,s),e==="active"){const n=s!==null;this.ariaSelected=n?"true":"false",this.tabIndex=n?0:-1}}render(){return w`
      <div
        class=${re({wrapper:!0,active:this.active,panel:this.panel})}
      >
        <div class="before"><slot name="content-before"></slot></div>
        <div class="main"><slot></slot></div>
        <div class="after"><slot name="content-after"></slot></div>
        <span
          class=${re({"active-indicator":!0,active:this.active,panel:this.panel})}
        ></span>
      </div>
    `}};xt.styles=Lm;is([p({type:Boolean,reflect:!0})],xt.prototype,"active",void 0);is([p({reflect:!0,attribute:"aria-controls"})],xt.prototype,"ariaControls",void 0);is([p({type:Boolean,reflect:!0})],xt.prototype,"panel",void 0);is([p({reflect:!0})],xt.prototype,"role",void 0);is([p({type:Number,reflect:!0,attribute:"tab-id"})],xt.prototype,"tabId",void 0);xt=is([K("vscode-tab-header")],xt);const Dm=[G,W`
    :host {
      display: block;
      overflow: hidden;
    }

    :host(:focus-visible) {
      outline-color: var(--vscode-focusBorder);
      outline-offset: 3px;
      outline-style: solid;
      outline-width: 1px;
    }

    :host([panel]) {
      background-color: var(--vscode-panel-background);
    }
  `];var rs=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Gt=class extends ee{constructor(){super(...arguments),this.hidden=!1,this.ariaLabelledby="",this.panel=!1,this.role="tabpanel",this.tabIndex=0}render(){return w` <slot></slot> `}};Gt.styles=Dm;rs([p({type:Boolean,reflect:!0})],Gt.prototype,"hidden",void 0);rs([p({reflect:!0,attribute:"aria-labelledby"})],Gt.prototype,"ariaLabelledby",void 0);rs([p({type:Boolean,reflect:!0})],Gt.prototype,"panel",void 0);rs([p({reflect:!0})],Gt.prototype,"role",void 0);rs([p({type:Number,reflect:!0})],Gt.prototype,"tabIndex",void 0);Gt=rs([K("vscode-tab-panel")],Gt);const Mm=[G,W`
    :host {
      display: table;
      table-layout: fixed;
      width: 100%;
    }

    ::slotted(vscode-table-row:nth-child(even)) {
      background-color: var(--vsc-row-even-background);
    }

    ::slotted(vscode-table-row:nth-child(odd)) {
      background-color: var(--vsc-row-odd-background);
    }
  `];var Dc=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let kn=class extends ee{constructor(){super(...arguments),this.role="rowgroup"}render(){return w` <slot></slot> `}};kn.styles=Mm;Dc([p({reflect:!0})],kn.prototype,"role",void 0);kn=Dc([K("vscode-table-body")],kn);const Fm=[G,W`
    :host {
      border-bottom-color: var(--vscode-editorGroup-border);
      border-bottom-style: solid;
      border-bottom-width: var(--vsc-row-border-bottom-width);
      box-sizing: border-box;
      color: var(--vscode-foreground);
      display: table-cell;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      height: 24px;
      overflow: hidden;
      padding-left: 10px;
      text-overflow: ellipsis;
      vertical-align: middle;
      white-space: nowrap;
    }

    :host([compact]) {
      display: block;
      height: auto;
      padding-bottom: 5px;
      width: 100% !important;
    }

    :host([compact]:first-child) {
      padding-top: 10px;
    }

    :host([compact]:last-child) {
      padding-bottom: 10px;
    }

    .wrapper {
      overflow: inherit;
      text-overflow: inherit;
      white-space: inherit;
      width: 100%;
    }

    .column-label {
      font-weight: bold;
    }
  `];var Kn=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Qo=class extends ee{constructor(){super(...arguments),this.role="cell",this.columnLabel="",this.compact=!1}render(){const e=this.columnLabel?w`<div class="column-label" role="presentation">
          ${this.columnLabel}
        </div>`:z;return w`
      <div class="wrapper">
        ${e}
        <slot></slot>
      </div>
    `}};Qo.styles=Fm;Kn([p({reflect:!0})],Qo.prototype,"role",void 0);Kn([p({attribute:"column-label"})],Qo.prototype,"columnLabel",void 0);Kn([p({type:Boolean,reflect:!0})],Qo.prototype,"compact",void 0);Qo=Kn([K("vscode-table-cell")],Qo);const jm=[G,W`
    :host {
      background-color: var(--vscode-keybindingTable-headerBackground);
      display: table;
      table-layout: fixed;
      width: 100%;
    }
  `];var Mc=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Sn=class extends ee{constructor(){super(...arguments),this.role="rowgroup"}render(){return w` <slot></slot> `}};Sn.styles=jm;Mc([p({reflect:!0})],Sn.prototype,"role",void 0);Sn=Mc([K("vscode-table-header")],Sn);const Nm=[G,W`
    :host {
      box-sizing: border-box;
      color: var(--vscode-foreground);
      display: table-cell;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: bold;
      line-height: 20px;
      overflow: hidden;
      padding-bottom: 5px;
      padding-left: 10px;
      padding-right: 0;
      padding-top: 5px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .wrapper {
      box-sizing: inherit;
      overflow: inherit;
      text-overflow: inherit;
      white-space: inherit;
      width: 100%;
    }
  `];var Fc=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let In=class extends ee{constructor(){super(...arguments),this.role="columnheader"}render(){return w`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};In.styles=Nm;Fc([p({reflect:!0})],In.prototype,"role",void 0);In=Fc([K("vscode-table-header-cell")],In);const Um=[G,W`
    :host {
      border-top-color: var(--vscode-editorGroup-border);
      border-top-style: solid;
      border-top-width: var(--vsc-row-border-top-width);
      display: var(--vsc-row-display);
      width: 100%;
    }
  `];var jc=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let En=class extends ee{constructor(){super(...arguments),this.role="row"}render(){return w` <slot></slot> `}};En.styles=Um;jc([p({reflect:!0})],En.prototype,"role",void 0);En=jc([K("vscode-table-row")],En);const Ul=(t,e)=>typeof t=="number"&&!Number.isNaN(t)?t/e*100:typeof t=="string"&&/^[0-9.]+$/.test(t)?Number(t)/e*100:typeof t=="string"&&/^[0-9.]+%$/.test(t)?Number(t.substring(0,t.length-1)):typeof t=="string"&&/^[0-9.]+px$/.test(t)?Number(t.substring(0,t.length-2))/e*100:null,Hm=[G,W`
    :host {
      display: block;
      --vsc-row-even-background: transparent;
      --vsc-row-odd-background: transparent;
      --vsc-row-border-bottom-width: 0;
      --vsc-row-border-top-width: 0;
      --vsc-row-display: table-row;
    }

    :host([bordered]),
    :host([bordered-rows]) {
      --vsc-row-border-bottom-width: 1px;
    }

    :host([compact]) {
      --vsc-row-display: block;
    }

    :host([bordered][compact]),
    :host([bordered-rows][compact]) {
      --vsc-row-border-bottom-width: 0;
      --vsc-row-border-top-width: 1px;
    }

    :host([zebra]) {
      --vsc-row-even-background: var(--vscode-keybindingTable-rowsBackground);
    }

    :host([zebra-odd]) {
      --vsc-row-odd-background: var(--vscode-keybindingTable-rowsBackground);
    }

    ::slotted(vscode-table-row) {
      width: 100%;
    }

    .wrapper {
      height: 100%;
      max-width: 100%;
      overflow: hidden;
      position: relative;
      width: 100%;
    }

    .wrapper.select-disabled {
      user-select: none;
    }

    .wrapper.resize-cursor {
      cursor: ew-resize;
    }

    .wrapper.compact-view .header-slot-wrapper {
      height: 0;
      overflow: hidden;
    }

    .scrollable {
      height: 100%;
    }

    .scrollable:before {
      background-color: transparent;
      content: '';
      display: block;
      height: 1px;
      position: absolute;
      width: 100%;
    }

    .wrapper:not(.compact-view) .scrollable:not([scrolled]):before {
      background-color: var(--vscode-editorGroup-border);
    }

    .sash {
      visibility: hidden;
    }

    :host([bordered-columns]) .sash,
    :host([bordered]) .sash {
      visibility: visible;
    }

    :host([resizable]) .wrapper:hover .sash {
      visibility: visible;
    }

    .sash {
      height: 100%;
      position: absolute;
      top: 0;
      width: 1px;
    }

    .wrapper.compact-view .sash {
      display: none;
    }

    .sash.resizable {
      cursor: ew-resize;
    }

    .sash-visible {
      background-color: var(--vscode-editorGroup-border);
      height: 100%;
      position: absolute;
      top: 30px;
      width: 1px;
    }

    .sash.hover .sash-visible {
      background-color: var(--vscode-sash-hoverBorder);
      transition: background-color 50ms linear 300ms;
    }

    .sash .sash-clickable {
      background-color: transparent;
      height: 100%;
      left: -2px;
      position: absolute;
      width: 5px;
    }
  `];var we=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};const Hl=100;let ge=class extends ee{constructor(){super(...arguments),this.role="table",this.resizable=!1,this.responsive=!1,this.bordered=!1,this.borderedColumns=!1,this.borderedRows=!1,this.breakpoint=300,this.minColumnWidth="50px",this.delayedResizing=!1,this.compact=!1,this.zebra=!1,this.zebraOdd=!1,this._sashPositions=[],this._isDragging=!1,this._sashHovers=[],this._columns=[],this._activeSashElementIndex=-1,this._activeSashCursorOffset=0,this._componentX=0,this._componentH=0,this._componentW=0,this._headerCells=[],this._cellsOfFirstRow=[],this._prevHeaderHeight=0,this._prevComponentHeight=0,this._componentResizeObserverCallback=()=>{this._memoizeComponentDimensions(),this._updateResizeHandlersSize(),this.responsive&&this._toggleCompactView(),this._resizeTableBody()},this._headerResizeObserverCallback=()=>{this._updateResizeHandlersSize()},this._bodyResizeObserverCallback=()=>{this._resizeTableBody()},this._onResizingMouseMove=e=>{e.stopPropagation(),this._updateActiveSashPosition(e.pageX),this.delayedResizing?this._resizeColumns(!1):this._resizeColumns(!0)},this._onResizingMouseUp=e=>{this._resizeColumns(!0),this._updateActiveSashPosition(e.pageX),this._sashHovers[this._activeSashElementIndex]=!1,this._isDragging=!1,this._activeSashElementIndex=-1,document.removeEventListener("mousemove",this._onResizingMouseMove),document.removeEventListener("mouseup",this._onResizingMouseUp)}}set columns(e){this._columns=e,this.isConnected&&this._initDefaultColumnSizes()}get columns(){return this._columns}connectedCallback(){super.connectedCallback(),this._memoizeComponentDimensions(),this._initDefaultColumnSizes()}disconnectedCallback(){var e,o,s;super.disconnectedCallback(),(e=this._componentResizeObserver)==null||e.unobserve(this),(o=this._componentResizeObserver)==null||o.disconnect(),(s=this._bodyResizeObserver)==null||s.disconnect()}_px2Percent(e){return e/this._componentW*100}_percent2Px(e){return this._componentW*e/100}_memoizeComponentDimensions(){const e=this.getBoundingClientRect();this._componentH=e.height,this._componentW=e.width,this._componentX=e.x}_queryHeaderCells(){const e=this._assignedHeaderElements;return e&&e[0]?Array.from(e[0].querySelectorAll("vscode-table-header-cell")):[]}_getHeaderCells(){return this._headerCells.length||(this._headerCells=this._queryHeaderCells()),this._headerCells}_queryCellsOfFirstRow(){const e=this._assignedBodyElements;return e&&e[0]?Array.from(e[0].querySelectorAll("vscode-table-row:first-child vscode-table-cell")):[]}_getCellsOfFirstRow(){return this._cellsOfFirstRow.length||(this._cellsOfFirstRow=this._queryCellsOfFirstRow()),this._cellsOfFirstRow}_resizeTableBody(){let e=0,o=0;const s=this.getBoundingClientRect().height;this._assignedHeaderElements&&this._assignedHeaderElements.length&&(e=this._assignedHeaderElements[0].getBoundingClientRect().height),this._assignedBodyElements&&this._assignedBodyElements.length&&(o=this._assignedBodyElements[0].getBoundingClientRect().height);const n=o-e-s;this._scrollableElement.style.height=n>0?`${s-e}px`:"auto"}_initResizeObserver(){this._componentResizeObserver=new ResizeObserver(this._componentResizeObserverCallback),this._componentResizeObserver.observe(this),this._headerResizeObserver=new ResizeObserver(this._headerResizeObserverCallback),this._headerResizeObserver.observe(this._headerElement)}_calcColWidthPercentages(){const e=this._getHeaderCells().length;let o=this.columns.slice(0,e);const s=o.filter(i=>i==="auto").length+e-o.length;let n=100;if(o=o.map(i=>{const r=Ul(i,this._componentW);return r===null?"auto":(n-=r,r)}),o.length<e)for(let i=o.length;i<e;i++)o.push("auto");return o=o.map(i=>i==="auto"?n/s:i),o}_initHeaderCellSizes(e){this._getHeaderCells().forEach((o,s)=>{o.style.width=`${e[s]}%`})}_initBodyColumnSizes(e){this._getCellsOfFirstRow().forEach((o,s)=>{o.style.width=`${e[s]}%`})}_initSashes(e){const o=e.length;let s=0;this._sashPositions=[],e.forEach((n,i)=>{if(i<o-1){const r=s+n;this._sashPositions.push(r),s=r}})}_initDefaultColumnSizes(){const e=this._calcColWidthPercentages();this._initHeaderCellSizes(e),this._initBodyColumnSizes(e),this._initSashes(e)}_updateResizeHandlersSize(){const e=this._headerElement.getBoundingClientRect();if(e.height===this._prevHeaderHeight&&this._componentH===this._prevComponentHeight)return;this._prevHeaderHeight=e.height,this._prevComponentHeight=this._componentH;const o=this._componentH-e.height;this._sashVisibleElements.forEach(s=>{s.style.height=`${o}px`,s.style.top=`${e.height}px`})}_applyCompactViewColumnLabels(){const o=this._getHeaderCells().map(n=>n.innerText);this.querySelectorAll("vscode-table-row").forEach(n=>{n.querySelectorAll("vscode-table-cell").forEach((r,l)=>{r.columnLabel=o[l],r.compact=!0})})}_clearCompactViewColumnLabels(){this.querySelectorAll("vscode-table-cell").forEach(e=>{e.columnLabel="",e.compact=!1})}_toggleCompactView(){const o=this.getBoundingClientRect().width<this.breakpoint;this.compact!==o&&(this.compact=o,o?this._applyCompactViewColumnLabels():this._clearCompactViewColumnLabels())}_onDefaultSlotChange(){this._assignedElements.forEach(e=>{if(e.tagName.toLowerCase()==="vscode-table-header"){e.slot="header";return}if(e.tagName.toLowerCase()==="vscode-table-body"){e.slot="body";return}})}_onHeaderSlotChange(){this._headerCells=this._queryHeaderCells()}_onBodySlotChange(){if(this._initDefaultColumnSizes(),this._initResizeObserver(),this._updateResizeHandlersSize(),!this._bodyResizeObserver){const e=this._assignedBodyElements[0]??null;e&&(this._bodyResizeObserver=new ResizeObserver(this._bodyResizeObserverCallback),this._bodyResizeObserver.observe(e))}}_onSashMouseOver(e){if(this._isDragging)return;const o=e.currentTarget,s=Number(o.dataset.index);this._sashHovers[s]=!0,this.requestUpdate()}_onSashMouseOut(e){if(e.stopPropagation(),this._isDragging)return;const o=e.currentTarget,s=Number(o.dataset.index);this._sashHovers[s]=!1,this.requestUpdate()}_onSashMouseDown(e){e.stopPropagation();const{pageX:o,currentTarget:s}=e,n=s,i=Number(n.dataset.index),l=n.getBoundingClientRect().x;this._isDragging=!0,this._activeSashElementIndex=i,this._sashHovers[this._activeSashElementIndex]=!0,this._activeSashCursorOffset=this._px2Percent(o-l);const c=this._getHeaderCells();this._headerCellsToResize=[],this._headerCellsToResize.push(c[i]),c[i+1]&&(this._headerCellsToResize[1]=c[i+1]);const a=this._bodySlot.assignedElements()[0].querySelectorAll("vscode-table-row:first-child > vscode-table-cell");this._cellsToResize=[],this._cellsToResize.push(a[i]),a[i+1]&&this._cellsToResize.push(a[i+1]),document.addEventListener("mousemove",this._onResizingMouseMove),document.addEventListener("mouseup",this._onResizingMouseUp)}_updateActiveSashPosition(e){const{prevSashPos:o,nextSashPos:s}=this._getSashPositions();let n=Ul(this.minColumnWidth,this._componentW);n===null&&(n=0);const i=o?o+n:n,r=s?s-n:Hl-n;let l=this._px2Percent(e-this._componentX-this._percent2Px(this._activeSashCursorOffset));l=Math.max(l,i),l=Math.min(l,r),this._sashPositions[this._activeSashElementIndex]=l,this.requestUpdate()}_getSashPositions(){const e=this._sashPositions[this._activeSashElementIndex],o=this._sashPositions[this._activeSashElementIndex-1]||0,s=this._sashPositions[this._activeSashElementIndex+1]||Hl;return{sashPos:e,prevSashPos:o,nextSashPos:s}}_resizeColumns(e=!0){const{sashPos:o,prevSashPos:s,nextSashPos:n}=this._getSashPositions(),i=o-s,r=n-o,l=`${i}%`,c=`${r}%`;this._headerCellsToResize[0].style.width=l,this._headerCellsToResize[1]&&(this._headerCellsToResize[1].style.width=c),e&&(this._cellsToResize[0].style.width=l,this._cellsToResize[1]&&(this._cellsToResize[1].style.width=c))}render(){const e=this._sashPositions.map((s,n)=>{const i=re({sash:!0,hover:this._sashHovers[n],resizable:this.resizable}),r=`${s}%`;return this.resizable?w`
            <div
              class=${i}
              data-index=${n}
              .style=${Fe({left:r})}
              @mousedown=${this._onSashMouseDown}
              @mouseover=${this._onSashMouseOver}
              @mouseout=${this._onSashMouseOut}
            >
              <div class="sash-visible"></div>
              <div class="sash-clickable"></div>
            </div>
          `:w`<div
            class=${i}
            data-index=${n}
            .style=${Fe({left:r})}
          >
            <div class="sash-visible"></div>
          </div>`}),o=re({wrapper:!0,"select-disabled":this._isDragging,"resize-cursor":this._isDragging,"compact-view":this.compact});return w`
      <div class=${o}>
        <div class="header">
          <slot name="caption"></slot>
          <div class="header-slot-wrapper">
            <slot name="header" @slotchange=${this._onHeaderSlotChange}></slot>
          </div>
        </div>
        <vscode-scrollable class="scrollable">
          <div>
            <slot name="body" @slotchange=${this._onBodySlotChange}></slot>
          </div>
        </vscode-scrollable>
        ${e}
        <slot @slotchange=${this._onDefaultSlotChange}></slot>
      </div>
    `}};ge.styles=Hm;we([p({reflect:!0})],ge.prototype,"role",void 0);we([p({type:Boolean,reflect:!0})],ge.prototype,"resizable",void 0);we([p({type:Boolean,reflect:!0})],ge.prototype,"responsive",void 0);we([p({type:Boolean,reflect:!0})],ge.prototype,"bordered",void 0);we([p({type:Boolean,reflect:!0,attribute:"bordered-columns"})],ge.prototype,"borderedColumns",void 0);we([p({type:Boolean,reflect:!0,attribute:"bordered-rows"})],ge.prototype,"borderedRows",void 0);we([p({type:Number})],ge.prototype,"breakpoint",void 0);we([p({type:Array})],ge.prototype,"columns",null);we([p({attribute:"min-column-width"})],ge.prototype,"minColumnWidth",void 0);we([p({type:Boolean,reflect:!0,attribute:"delayed-resizing"})],ge.prototype,"delayedResizing",void 0);we([p({type:Boolean,reflect:!0})],ge.prototype,"compact",void 0);we([p({type:Boolean,reflect:!0})],ge.prototype,"zebra",void 0);we([p({type:Boolean,reflect:!0,attribute:"zebra-odd"})],ge.prototype,"zebraOdd",void 0);we([Ue('slot[name="body"]')],ge.prototype,"_bodySlot",void 0);we([Ue(".header")],ge.prototype,"_headerElement",void 0);we([Ue(".scrollable")],ge.prototype,"_scrollableElement",void 0);we([qb(".sash-visible")],ge.prototype,"_sashVisibleElements",void 0);we([kt({flatten:!0,selector:"vscode-table-header, vscode-table-body"})],ge.prototype,"_assignedElements",void 0);we([kt({slot:"header",flatten:!0,selector:"vscode-table-header"})],ge.prototype,"_assignedHeaderElements",void 0);we([kt({slot:"body",flatten:!0,selector:"vscode-table-body"})],ge.prototype,"_assignedBodyElements",void 0);we([H()],ge.prototype,"_sashPositions",void 0);we([H()],ge.prototype,"_isDragging",void 0);ge=we([K("vscode-table")],ge);const Zm=[G,W`
    :host {
      display: block;
    }

    .header {
      align-items: center;
      display: flex;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      width: 100%;
    }

    .header {
      border-bottom-color: var(--vscode-settings-headerBorder);
      border-bottom-style: solid;
      border-bottom-width: 1px;
    }

    .header.panel {
      background-color: var(--vscode-panel-background);
      border-bottom-width: 0;
      box-sizing: border-box;
      padding-left: 8px;
      padding-right: 8px;
    }

    slot[name='addons'] {
      display: block;
      margin-left: auto;
    }
  `];var ls=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let ho=class extends ee{constructor(){super(),this.panel=!1,this.role="tablist",this.selectedIndex=0,this._tabHeaders=[],this._tabPanels=[],this._componentId="",this._tabFocus=0,this._componentId=Tc()}attributeChangedCallback(e,o,s){super.attributeChangedCallback(e,o,s),e==="selected-index"&&this._setActiveTab(),e==="panel"&&(this._tabHeaders.forEach(n=>n.panel=s!==null),this._tabPanels.forEach(n=>n.panel=s!==null))}_dispatchSelectEvent(){this.dispatchEvent(new CustomEvent("vsc-select",{detail:{selectedIndex:this.selectedIndex},composed:!0})),this.dispatchEvent(new CustomEvent("vsc-tabs-select",{detail:{selectedIndex:this.selectedIndex},composed:!0}))}_setActiveTab(){this._tabFocus=this.selectedIndex,this._tabPanels.forEach((e,o)=>{e.hidden=o!==this.selectedIndex}),this._tabHeaders.forEach((e,o)=>{e.active=o===this.selectedIndex})}_focusPrevTab(){this._tabFocus===0?this._tabFocus=this._tabHeaders.length-1:this._tabFocus-=1}_focusNextTab(){this._tabFocus===this._tabHeaders.length-1?this._tabFocus=0:this._tabFocus+=1}_onHeaderKeyDown(e){(e.key==="ArrowLeft"||e.key==="ArrowRight")&&(e.preventDefault(),this._tabHeaders[this._tabFocus].setAttribute("tabindex","-1"),e.key==="ArrowLeft"?this._focusPrevTab():e.key==="ArrowRight"&&this._focusNextTab(),this._tabHeaders[this._tabFocus].setAttribute("tabindex","0"),this._tabHeaders[this._tabFocus].focus()),e.key==="Enter"&&(e.preventDefault(),this.selectedIndex=this._tabFocus,this._dispatchSelectEvent())}_moveHeadersToHeaderSlot(){const e=this._mainSlotElements.filter(o=>o instanceof xt);e.length>0&&e.forEach(o=>o.setAttribute("slot","header"))}_onMainSlotChange(){this._moveHeadersToHeaderSlot(),this._tabPanels=this._mainSlotElements.filter(e=>e instanceof Gt),this._tabPanels.forEach((e,o)=>{e.ariaLabelledby=`t${this._componentId}-h${o}`,e.id=`t${this._componentId}-p${o}`,e.panel=this.panel}),this._setActiveTab()}_onHeaderSlotChange(){this._tabHeaders=this._headerSlotElements.filter(e=>e instanceof xt),this._tabHeaders.forEach((e,o)=>{e.tabId=o,e.id=`t${this._componentId}-h${o}`,e.ariaControls=`t${this._componentId}-p${o}`,e.panel=this.panel,e.active=o===this.selectedIndex})}_onHeaderClick(e){const s=e.composedPath().find(n=>n instanceof xt);s&&(this.selectedIndex=s.tabId,this._setActiveTab(),this._dispatchSelectEvent())}render(){return w`
      <div
        class=${re({header:!0,panel:this.panel})}
        @click=${this._onHeaderClick}
        @keydown=${this._onHeaderKeyDown}
      >
        <slot name="header" @slotchange=${this._onHeaderSlotChange}></slot>
        <slot name="addons"></slot>
      </div>
      <slot @slotchange=${this._onMainSlotChange}></slot>
    `}};ho.styles=Zm;ls([p({type:Boolean,reflect:!0})],ho.prototype,"panel",void 0);ls([p({reflect:!0})],ho.prototype,"role",void 0);ls([p({type:Number,reflect:!0,attribute:"selected-index"})],ho.prototype,"selectedIndex",void 0);ls([kt({slot:"header"})],ho.prototype,"_headerSlotElements",void 0);ls([kt()],ho.prototype,"_mainSlotElements",void 0);ho=ls([K("vscode-tabs")],ho);const qm=[G,W`
    :host {
      display: inline-block;
      height: 40px;
      position: relative;
      width: 320px;
    }

    :host([cols]) {
      width: auto;
    }

    :host([rows]) {
      height: auto;
    }

    .shadow {
      box-shadow: var(--vscode-scrollbar-shadow, #000000) 0 6px 6px -6px inset;
      display: none;
      inset: 0 0 auto 0;
      height: 6px;
      pointer-events: none;
      position: absolute;
      width: 100%;
    }

    .shadow.visible {
      display: block;
    }

    textarea {
      background-color: var(--vscode-settings-textInputBackground, #313131);
      border-color: var(--vscode-settings-textInputBorder, transparent);
      border-radius: 2px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      height: 100%;
      width: 100%;
    }

    :host([cols]) textarea {
      width: auto;
    }

    :host([rows]) textarea {
      height: auto;
    }

    :host([invalid]) textarea,
    :host(:invalid) textarea {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    textarea.monospace {
      background-color: var(--vscode-editor-background, #1f1f1f);
      color: var(--vscode-editor-foreground, #cccccc);
      font-family: var(--vscode-editor-font-family, monospace);
      font-size: var(--vscode-editor-font-size, 14px);
      font-weight: var(--vscode-editor-font-weight, normal);
    }

    .textarea.monospace::placeholder {
      color: var(
        --vscode-editor-inlineValuesForeground,
        rgba(255, 255, 255, 0.5)
      );
    }

    textarea.cursor-pointer {
      cursor: pointer;
    }

    textarea:focus {
      border-color: var(--vscode-focusBorder, #0078d4);
      outline: none;
    }

    textarea::placeholder {
      color: var(--vscode-input-placeholderForeground, #989898);
      opacity: 1;
    }

    textarea::-webkit-scrollbar-track {
      background-color: transparent;
    }

    textarea::-webkit-scrollbar {
      width: 14px;
    }

    textarea::-webkit-scrollbar-thumb {
      background-color: transparent;
    }

    textarea:hover::-webkit-scrollbar-thumb {
      background-color: var(
        --vscode-scrollbarSlider-background,
        rgba(121, 121, 121, 0.4)
      );
    }

    textarea::-webkit-scrollbar-thumb:hover {
      background-color: var(
        --vscode-scrollbarSlider-hoverBackground,
        rgba(100, 100, 100, 0.7)
      );
    }

    textarea::-webkit-scrollbar-thumb:active {
      background-color: var(
        --vscode-scrollbarSlider-activeBackground,
        rgba(191, 191, 191, 0.4)
      );
    }

    textarea::-webkit-scrollbar-corner {
      background-color: transparent;
    }

    textarea::-webkit-resizer {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACJJREFUeJxjYMAOZuIQZ5j5//9/rJJESczEKYGsG6cEXgAAsEEefMxkua4AAAAASUVORK5CYII=');
      background-repeat: no-repeat;
      background-position: right bottom;
    }
  `];var Ce=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let ue=class extends ee{set value(e){this._value=e,this._internals.setFormValue(e)}get value(){return this._value}get wrappedElement(){return this._textareaEl}get form(){return this._internals.form}get type(){return"textarea"}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}set minlength(e){this.minLength=e}get minlength(){return this.minLength}set maxlength(e){this.maxLength=e}get maxlength(){return this.maxLength}constructor(){super(),this.autocomplete=void 0,this.autofocus=!1,this.defaultValue="",this.disabled=!1,this.invalid=!1,this.label="",this.maxLength=void 0,this.minLength=void 0,this.rows=void 0,this.cols=void 0,this.name=void 0,this.placeholder=void 0,this.readonly=!1,this.resize="none",this.required=!1,this.spellcheck=!1,this.monospace=!1,this._value="",this._textareaPointerCursor=!1,this._shadow=!1,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._textareaEl.checkValidity(),this._setValidityFromInput(),this._internals.setFormValue(this._textareaEl.value)})}updated(e){const o=["maxLength","minLength","required"];for(const s of e.keys())if(o.includes(String(s))){this.updateComplete.then(()=>{this._setValidityFromInput()});break}}formResetCallback(){this.value=this.defaultValue}formStateRestoreCallback(e,o){this.updateComplete.then(()=>{this._value=e})}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}_setValidityFromInput(){this._internals.setValidity(this._textareaEl.validity,this._textareaEl.validationMessage,this._textareaEl)}_dataChanged(){this._value=this._textareaEl.value,this._internals.setFormValue(this._textareaEl.value)}_handleChange(e){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new Event("change")),this.dispatchEvent(new CustomEvent("vsc-change",{detail:{data:this.value,originalEvent:e}}))}_handleInput(e){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new CustomEvent("vsc-input",{detail:{data:e.data,originalEvent:e}}))}_handleMouseMove(e){if(this._textareaEl.clientHeight>=this._textareaEl.scrollHeight){this._textareaPointerCursor=!1;return}const o=14,s=1,n=this._textareaEl.getBoundingClientRect(),i=e.clientX;this._textareaPointerCursor=i>=n.left+n.width-o-s*2}_handleScroll(){this._shadow=this._textareaEl.scrollTop>0}render(){return w`
      <div
        class=${re({shadow:!0,visible:this._shadow})}
      ></div>
      <textarea
        autocomplete=${Q(this.autocomplete)}
        ?autofocus=${this.autofocus}
        ?disabled=${this.disabled}
        aria-label=${this.label}
        id="textarea"
        class=${re({monospace:this.monospace,"cursor-pointer":this._textareaPointerCursor})}
        maxlength=${Q(this.maxLength)}
        minlength=${Q(this.minLength)}
        rows=${Q(this.rows)}
        cols=${Q(this.cols)}
        name=${Q(this.name)}
        placeholder=${Q(this.placeholder)}
        ?readonly=${this.readonly}
        .style=${Fe({resize:this.resize})}
        ?required=${this.required}
        spellcheck=${this.spellcheck}
        @change=${this._handleChange}
        @input=${this._handleInput}
        @mousemove=${this._handleMouseMove}
        @scroll=${this._handleScroll}
        .value=${this._value}
      ></textarea>
    `}};ue.styles=qm;ue.formAssociated=!0;ue.shadowRootOptions={...yt.shadowRootOptions,delegatesFocus:!0};Ce([p()],ue.prototype,"autocomplete",void 0);Ce([p({type:Boolean,reflect:!0})],ue.prototype,"autofocus",void 0);Ce([p({attribute:"default-value"})],ue.prototype,"defaultValue",void 0);Ce([p({type:Boolean,reflect:!0})],ue.prototype,"disabled",void 0);Ce([p({type:Boolean,reflect:!0})],ue.prototype,"invalid",void 0);Ce([p({attribute:!1})],ue.prototype,"label",void 0);Ce([p({type:Number})],ue.prototype,"maxLength",void 0);Ce([p({type:Number})],ue.prototype,"minLength",void 0);Ce([p({type:Number})],ue.prototype,"rows",void 0);Ce([p({type:Number})],ue.prototype,"cols",void 0);Ce([p()],ue.prototype,"name",void 0);Ce([p()],ue.prototype,"placeholder",void 0);Ce([p({type:Boolean,reflect:!0})],ue.prototype,"readonly",void 0);Ce([p()],ue.prototype,"resize",void 0);Ce([p({type:Boolean,reflect:!0})],ue.prototype,"required",void 0);Ce([p({type:Boolean})],ue.prototype,"spellcheck",void 0);Ce([p({type:Boolean,reflect:!0})],ue.prototype,"monospace",void 0);Ce([p()],ue.prototype,"value",null);Ce([Ue("#textarea")],ue.prototype,"_textareaEl",void 0);Ce([H()],ue.prototype,"_value",void 0);Ce([H()],ue.prototype,"_textareaPointerCursor",void 0);Ce([H()],ue.prototype,"_shadow",void 0);ue=Ce([K("vscode-textarea")],ue);const Zl=Hn(pr()),Wm=[G,W`
    :host {
      align-items: center;
      background-color: var(--vscode-settings-textInputBackground, #313131);
      border-color: var(
        --vscode-settings-textInputBorder,
        var(--vscode-settings-textInputBackground, #3c3c3c)
      );
      border-radius: 2px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground, #cccccc);
      display: inline-flex;
      max-width: 100%;
      position: relative;
      width: 320px;
    }

    :host([focused]) {
      border-color: var(--vscode-focusBorder, #0078d4);
    }

    :host([invalid]),
    :host(:invalid) {
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    :host([invalid]) input,
    :host(:invalid) input {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
    }

    ::slotted([slot='content-before']) {
      display: block;
      margin-left: 2px;
    }

    ::slotted([slot='content-after']) {
      display: block;
      margin-right: 2px;
    }

    slot[name='content-before'],
    slot[name='content-after'] {
      align-items: center;
      display: flex;
    }

    input {
      background-color: var(--vscode-settings-textInputBackground, #313131);
      border: 0;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, ${Zl});
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, 'normal');
      line-height: 18px;
      outline: none;
      padding-bottom: 3px;
      padding-left: 4px;
      padding-right: 4px;
      padding-top: 3px;
      width: 100%;
    }

    input:read-only:not([type='file']) {
      cursor: not-allowed;
    }

    input::placeholder {
      color: var(--vscode-input-placeholderForeground, #989898);
      opacity: 1;
    }

    input[type='file'] {
      line-height: 24px;
      padding-bottom: 0;
      padding-left: 2px;
      padding-top: 0;
    }

    input[type='file']::file-selector-button {
      background-color: var(--vscode-button-background, #0078d4);
      border: 0;
      border-radius: 2px;
      color: var(--vscode-button-foreground, #ffffff);
      cursor: pointer;
      font-family: var(--vscode-font-family, ${Zl});
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, 'normal');
      line-height: 20px;
      padding: 0 14px;
    }

    input[type='file']::file-selector-button:hover {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
    }
  `];var _e=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let ae=class extends ee{set type(e){const o=["color","date","datetime-local","email","file","month","number","password","search","tel","text","time","url","week"];this._type=o.includes(e)?e:"text"}get type(){return this._type}set value(e){this.type!=="file"&&(this._value=e,this._internals.setFormValue(e)),this.updateComplete.then(()=>{this._setValidityFromInput()})}get value(){return this._value}set minlength(e){this.minLength=e}get minlength(){return this.minLength}set maxlength(e){this.maxLength=e}get maxlength(){return this.maxLength}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._setValidityFromInput(),this._internals.checkValidity()}reportValidity(){return this._setValidityFromInput(),this._internals.reportValidity()}get wrappedElement(){return this._inputEl}constructor(){super(),this.autocomplete=void 0,this.autofocus=!1,this.defaultValue="",this.disabled=!1,this.focused=!1,this.invalid=!1,this.label="",this.max=void 0,this.maxLength=void 0,this.min=void 0,this.minLength=void 0,this.multiple=!1,this.name=void 0,this.pattern=void 0,this.placeholder=void 0,this.readonly=!1,this.required=!1,this.step=void 0,this._value="",this._type="text",this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._inputEl.checkValidity(),this._setValidityFromInput(),this._internals.setFormValue(this._inputEl.value)})}attributeChangedCallback(e,o,s){super.attributeChangedCallback(e,o,s),["max","maxlength","min","minlength","pattern","required","step"].includes(e)&&this.updateComplete.then(()=>{this._setValidityFromInput()})}formResetCallback(){this.value=this.defaultValue,this.requestUpdate()}formStateRestoreCallback(e,o){this.value=e}_dataChanged(){if(this._value=this._inputEl.value,this.type==="file"&&this._inputEl.files)for(const e of this._inputEl.files)this._internals.setFormValue(e);else this._internals.setFormValue(this._inputEl.value)}_setValidityFromInput(){this._inputEl&&this._internals.setValidity(this._inputEl.validity,this._inputEl.validationMessage,this._inputEl)}_onInput(e){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new CustomEvent("vsc-input",{detail:{data:e.data,originalEvent:e}}))}_onChange(e){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new Event("change")),this.dispatchEvent(new CustomEvent("vsc-change",{detail:{data:this.value,originalEvent:e}}))}_onFocus(){this.focused=!0}_onBlur(){this.focused=!1}_onKeyDown(e){var o;e.key==="Enter"&&this._internals.form&&((o=this._internals.form)==null||o.requestSubmit())}render(){return w`
      <slot name="content-before"></slot>
      <input
        id="input"
        type=${this.type}
        ?autofocus=${this.autofocus}
        autocomplete=${Q(this.autocomplete)}
        aria-label=${this.label}
        ?disabled=${this.disabled}
        max=${Q(this.max)}
        maxlength=${Q(this.maxLength)}
        min=${Q(this.min)}
        minlength=${Q(this.minLength)}
        ?multiple=${this.multiple}
        name=${Q(this.name)}
        pattern=${Q(this.pattern)}
        placeholder=${Q(this.placeholder)}
        ?readonly=${this.readonly}
        ?required=${this.required}
        step=${Q(this.step)}
        .value=${this._value}
        @blur=${this._onBlur}
        @change=${this._onChange}
        @focus=${this._onFocus}
        @input=${this._onInput}
        @keydown=${this._onKeyDown}
      >
      <slot name="content-after"></slot>
    `}};ae.styles=Wm;ae.formAssociated=!0;ae.shadowRootOptions={...yt.shadowRootOptions,delegatesFocus:!0};_e([p()],ae.prototype,"autocomplete",void 0);_e([p({type:Boolean,reflect:!0})],ae.prototype,"autofocus",void 0);_e([p({attribute:"default-value"})],ae.prototype,"defaultValue",void 0);_e([p({type:Boolean,reflect:!0})],ae.prototype,"disabled",void 0);_e([p({type:Boolean,reflect:!0})],ae.prototype,"focused",void 0);_e([p({type:Boolean,reflect:!0})],ae.prototype,"invalid",void 0);_e([p({attribute:!1})],ae.prototype,"label",void 0);_e([p({type:Number})],ae.prototype,"max",void 0);_e([p({type:Number})],ae.prototype,"maxLength",void 0);_e([p({type:Number})],ae.prototype,"min",void 0);_e([p({type:Number})],ae.prototype,"minLength",void 0);_e([p({type:Boolean,reflect:!0})],ae.prototype,"multiple",void 0);_e([p({reflect:!0})],ae.prototype,"name",void 0);_e([p()],ae.prototype,"pattern",void 0);_e([p()],ae.prototype,"placeholder",void 0);_e([p({type:Boolean,reflect:!0})],ae.prototype,"readonly",void 0);_e([p({type:Boolean,reflect:!0})],ae.prototype,"required",void 0);_e([p({type:Number})],ae.prototype,"step",void 0);_e([p({reflect:!0})],ae.prototype,"type",null);_e([p()],ae.prototype,"value",null);_e([Ue("#input")],ae.prototype,"_inputEl",void 0);_e([H()],ae.prototype,"_value",void 0);_e([H()],ae.prototype,"_type",void 0);ae=_e([K("vscode-textfield")],ae);const Km=[G,W`
    :host {
      display: inline-flex;
    }

    button {
      align-items: center;
      background-color: transparent;
      border: 0;
      border-radius: 5px;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      outline-offset: -1px;
      outline-width: 1px;
      padding: 0;
      user-select: none;
    }

    button:focus-visible {
      outline-color: var(--vscode-focusBorder, #0078d4);
      outline-style: solid;
    }

    button:hover {
      background-color: var(
        --vscode-toolbar-hoverBackground,
        rgba(90, 93, 94, 0.31)
      );
      outline-style: dashed;
      outline-color: var(--vscode-toolbar-hoverOutline, transparent);
    }

    button:active {
      background-color: var(
        --vscode-toolbar-activeBackground,
        rgba(99, 102, 103, 0.31)
      );
    }

    button.checked {
      background-color: var(
        --vscode-inputOption-activeBackground,
        rgba(36, 137, 219, 0.51)
      );
      outline-color: var(--vscode-inputOption-activeBorder, #2488db);
      outline-style: solid;
      color: var(--vscode-inputOption-activeForeground, #ffffff);
    }

    button.checked vscode-icon {
      color: var(--vscode-inputOption-activeForeground, #ffffff);
    }

    vscode-icon {
      display: block;
      padding: 3px;
    }

    slot:not(.empty) {
      align-items: center;
      display: flex;
      height: 22px;
      padding: 0 5px 0 2px;
    }

    slot.textOnly:not(.empty) {
      padding: 0 5px;
    }
  `];var Bo=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Yt=class extends ee{constructor(){super(...arguments),this.icon="",this.label=void 0,this.toggleable=!1,this.checked=!1,this._isSlotEmpty=!0}_handleSlotChange(){var e;this._isSlotEmpty=!((((e=this._assignedNodes)==null?void 0:e.length)??0)>0)}_handleButtonClick(){this.toggleable&&(this.checked=!this.checked,this.dispatchEvent(new Event("change")))}render(){const e=this.checked?"true":"false";return w`
      <button
        type="button"
        aria-label=${Q(this.label)}
        role=${Q(this.toggleable?"switch":void 0)}
        aria-checked=${Q(this.toggleable?e:void 0)}
        class=${re({checked:this.toggleable&&this.checked})}
        @click=${this._handleButtonClick}
      >
        ${this.icon?w`<vscode-icon name=${this.icon}></vscode-icon>`:z}
        <slot
          @slotchange=${this._handleSlotChange}
          class=${re({empty:this._isSlotEmpty,textOnly:!this.icon})}
        ></slot>
      </button>
    `}};Yt.styles=Km;Bo([p({reflect:!0})],Yt.prototype,"icon",void 0);Bo([p()],Yt.prototype,"label",void 0);Bo([p({type:Boolean,reflect:!0})],Yt.prototype,"toggleable",void 0);Bo([p({type:Boolean,reflect:!0})],Yt.prototype,"checked",void 0);Bo([H()],Yt.prototype,"_isSlotEmpty",void 0);Bo([Wb()],Yt.prototype,"_assignedNodes",void 0);Yt=Bo([K("vscode-toolbar-button")],Yt);const Gm=[G,W`
    :host {
      gap: 4px;
      display: flex;
      align-items: center;
    }
  `];var Ym=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Ri=class extends ee{render(){return w` <slot></slot> `}};Ri.styles=Gm;Ri=Ym([K("vscode-toolbar-container")],Ri);const Jm=[G,W`
    :host {
      --hover-outline-color: transparent;
      --hover-outline-style: solid;
      --hover-outline-width: 0;
      --selected-outline-color: transparent;
      --selected-outline-style: solid;
      --selected-outline-width: 0;

      display: block;
      outline: none;
      user-select: none;
    }

    .wrapper {
      height: 100%;
    }

    li {
      list-style: none;
    }

    ul,
    li {
      margin: 0;
      padding: 0;
    }

    ul {
      position: relative;
    }

    :host([indent-guides]) ul ul:before {
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      bottom: 0;
      left: var(--indent-guide-pos);
      top: 0;
      pointer-events: none;
      width: 1px;
      z-index: 1;
    }

    .contents {
      align-items: center;
      display: flex;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      outline-offset: -1px;
      padding-right: 12px;
    }

    .multi .contents {
      align-items: flex-start;
    }

    .contents:hover {
      cursor: pointer;
    }

    .arrow-container {
      align-items: center;
      display: flex;
      height: 22px;
      justify-content: center;
      padding-left: 8px;
      padding-right: 6px;
      width: 16px;
    }

    .icon-arrow {
      color: currentColor;
      display: block;
    }

    .theme-icon {
      display: block;
      flex-shrink: 0;
      margin-right: 6px;
    }

    .image-icon {
      background-repeat: no-repeat;
      background-position: 0 center;
      background-size: 16px;
      display: block;
      flex-shrink: 0;
      margin-right: 6px;
      height: 22px;
      width: 16px;
    }

    .multi .contents .theme-icon {
      margin-top: 3px;
    }

    .text-content {
      display: flex;
      line-height: 22px;
    }

    .single .text-content {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }

    .description {
      font-size: 0.9em;
      line-height: 22px;
      margin-left: 0.5em;
      opacity: 0.95;
      white-space: pre;
    }

    .actions {
      display: none;
    }

    .contents.selected > .actions,
    .contents.focused > .actions,
    .contents:hover > .actions {
      display: flex;
    }

    .decorations {
      align-items: center;
      display: flex;
      height: 22px;
      margin-left: 5px;
    }

    .filled-circle {
      margin-right: 3px;
      opacity: 0.4;
    }

    .decoration-text {
      font-size: 90%;
      font-weight: 600;
      margin-right: 3px;
      opacity: 0.75;
    }

    .filled-circle,
    .decoration-text {
      color: var(--color, currentColor);
    }

    .contents:hover .filled-circle,
    .contents:hover .decoration-text {
      color: var(--hover-color, var(--color));
    }

    .contents.focused .filled-circle,
    .contents.focused .decoration-text {
      color: var(--focused-color, var(--color));
    }

    .contents.selected .filled-circle,
    .contents.selected .decoration-text {
      color: var(--selected-color, var(--color));
    }

    /* Theme colors */
    :host(:focus) .wrapper.has-not-focused-item {
      outline: 1px solid var(--vscode-focusBorder);
    }

    :host(:focus) .contents.selected,
    :host(:focus) .contents.focused.selected {
      color: var(--vscode-list-activeSelectionForeground);
      background-color: var(--vscode-list-activeSelectionBackground);
    }

    :host(:focus) .contents.selected .icon-arrow,
    :host(:focus) .contents.selected.focused .icon-arrow,
    :host(:focus) .contents.selected .theme-icon,
    :host(:focus) .contents.selected.focused .theme-icon,
    :host(:focus) .contents.selected .action-icon,
    :host(:focus) .contents.selected.focused .action-icon {
      color: var(--vscode-list-activeSelectionIconForeground);
    }

    :host(:focus) .contents.focused {
      color: var(--vscode-list-focusForeground);
      background-color: var(--vscode-list-focusBackground);
    }

    :host(:focus) .contents.selected.focused {
      outline-color: var(
        --vscode-list-focusAndSelectionOutline,
        var(--vscode-list-focusOutline)
      );
    }

    .contents:hover {
      background-color: var(--vscode-list-hoverBackground);
      color: var(--vscode-list-hoverForeground);
    }

    .contents:hover,
    .contents.selected:hover {
      outline-color: var(--hover-outline-color);
      outline-style: var(--hover-outline-style);
      outline-width: var(--hover-outline-width);
    }

    .contents.selected,
    .contents.selected.focused {
      background-color: var(--vscode-list-inactiveSelectionBackground);
      color: var(--vscode-list-inactiveSelectionForeground);
    }

    .contents.selected,
    .contents.selected.focused {
      outline-color: var(--selected-outline-color);
      outline-style: var(--selected-outline-style);
      outline-width: var(--selected-outline-width);
    }

    .contents.selected .theme-icon {
      color: var(--vscode-list-inactiveSelectionIconForeground);
    }

    .contents.focused {
      background-color: var(--vscode-list-inactiveFocusBackground);
      outline: 1px dotted var(--vscode-list-inactiveFocusOutline);
    }

    :host(:focus) .contents.focused {
      outline: 1px solid var(--vscode-list-focusOutline);
    }

    :host([indent-guides]) ul ul:before {
      background-color: var(--vscode-tree-inactiveIndentGuidesStroke);
    }

    :host([indent-guides]) ul ul.has-active-item:before {
      background-color: var(--vscode-tree-indentGuidesStroke);
    }
  `];var St=globalThis&&globalThis.__decorate||function(t,e,o,s){var n=arguments.length,i=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};const Xm=30,Qm=16,ql=3,Nc=(t,e=[])=>{const o=[];return t.forEach((s,n)=>{const i=[...e,n],r={...s,path:i};s.subItems&&(r.subItems=Nc(s.subItems,i)),o.push(r)}),o},fs=t=>{var e;return!!(t.subItems&&Array.isArray(t.subItems)&&((e=t==null?void 0:t.subItems)==null?void 0:e.length)>0)};let at=class extends ee{constructor(){super(...arguments),this.indent=8,this.arrows=!1,this.multiline=!1,this.tabindex=0,this.indentGuides=!1,this._data=[],this._selectedItem=null,this._focusedItem=null,this._selectedBranch=null,this._focusedBranch=null,this._handleComponentKeyDownBound=this._handleComponentKeyDown.bind(this)}set data(e){const o=this._data;this._data=Nc(e),this.requestUpdate("data",o)}get data(){return this._data}closeAll(){this._closeSubTreeRecursively(this.data),this.requestUpdate()}deselectAll(){this._deselectItemsRecursively(this.data),this.requestUpdate()}getItemByPath(e){return this._getItemByPath(e)}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleComponentKeyDownBound)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._handleComponentKeyDownBound)}_getItemByPath(e){let o=this._data,s=null;return e.forEach((n,i)=>{i===e.length-1?s=o[n]:o=o[n].subItems}),s}_handleActionClick(e){e.stopPropagation();const o=e.target,s=o.dataset.itemPath,n=o.dataset.index;let i=null,r="",l="";if(s){const c=s.split("/").map(d=>Number(d));if(i=this._getItemByPath(c),i!=null&&i.actions){const d=Number(n);i.actions[d]&&(r=i.actions[d].actionId)}i!=null&&i.value&&(l=i.value)}this.dispatchEvent(new CustomEvent("vsc-run-action",{detail:{actionId:r,item:i,value:l}})),this.dispatchEvent(new CustomEvent("vsc-tree-action",{detail:{actionId:r,item:i,value:l}}))}_renderIconVariant(e){const{type:o,value:s}=e;return o==="themeicon"?w`<vscode-icon name=${s} class="theme-icon"></vscode-icon>`:w`<span
        class="image-icon"
        .style=${Fe({backgroundImage:`url(${s})`})}
      ></span>`}_renderIcon(e){const o={branch:{value:"folder",type:"themeicon"},open:{value:"folder-opened",type:"themeicon"},leaf:{value:"file",type:"themeicon"}};if(e.iconUrls)e.iconUrls.branch&&(o.branch={value:e.iconUrls.branch,type:"image"}),e.iconUrls.leaf&&(o.leaf={value:e.iconUrls.leaf,type:"image"}),e.iconUrls.open&&(o.open={value:e.iconUrls.open,type:"image"});else if(typeof e.icons=="object")e.icons.branch&&(o.branch={value:e.icons.branch,type:"themeicon"}),e.icons.leaf&&(o.leaf={value:e.icons.leaf,type:"themeicon"}),e.icons.open&&(o.open={value:e.icons.open,type:"themeicon"});else if(!e.icons)return w`${z}`;return fs(e)?e.open?this._renderIconVariant(o.open):this._renderIconVariant(o.branch):this._renderIconVariant(o.leaf)}_renderArrow(e){if(!this.arrows||!fs(e))return w`${z}`;const{open:o=!1}=e;return w`
      <div class="arrow-container">
        <vscode-icon name=${o?"chevron-down":"chevron-right"} class="icon-arrow"></vscode-icon>
      </div>
    `}_renderActions(e){const o=[];return e.actions&&Array.isArray(e.actions)&&e.actions.forEach((s,n)=>{var i;if(s.icon){const r=w`<vscode-icon
            name=${s.icon}
            action-icon
            title=${Q(s.tooltip)}
            data-item-path=${Q((i=e.path)==null?void 0:i.join("/"))}
            data-index=${n}
            class="action-icon"
            @click=${this._handleActionClick}
          ></vscode-icon>`;o.push(r)}}),o.length>0?w`<div class="actions">${o}</div>`:w`${z}`}_renderDecorations(e){const o=[];return e.decorations&&Array.isArray(e.decorations)&&e.decorations.forEach(s=>{const{appearance:n="text",visibleWhen:i="always",content:r="",color:l="",focusedColor:c="",hoverColor:d="",selectedColor:a=""}=s,h=`visible-when-${i}`,m={};switch(l&&(m["--color"]=l),c&&(m["--focused-color"]=c),d&&(m["--hover-color"]=d),a&&(m["--selected-color"]=a),n){case"counter-badge":o.push(w`<vscode-badge
                variant="counter"
                class=${["counter-badge",h].join(" ")}
                part="counter-badge-decoration"
                >${r}</vscode-badge
              >`);break;case"filled-circle":o.push(w`<vscode-icon
                name="circle-filled"
                size="14"
                class=${["filled-circle",h].join(" ")}
                part="filled-circle-decoration"
                .style=${Fe(m)}
              ></vscode-icon>`);break;case"text":o.push(w`<div
                class=${["decoration-text",h].join(" ")}
                part="caption-decoration"
                .style=${Fe(m)}
              >
                ${r}
              </div>`);break}}),o.length>0?w`<div class="decorations" part="decorations">
        ${o}
      </div>`:w`${z}`}_renderTreeItem(e,o){const{open:s=!1,label:n,description:i="",tooltip:r,selected:l=!1,focused:c=!1,subItems:d=[]}=e,{path:a,itemType:h,hasFocusedItem:m=!1,hasSelectedItem:y=!1}=o,I=a.length-1,b=["contents"],te=s?["open"]:[],M=I*this.indent,ne=this.arrows&&h==="leaf"?Xm+M:M,he=this._renderArrow(e),V=this._renderIcon(e),ce=this.arrows?M+Qm:M+ql,ct=s&&h==="branch"?w`<ul
            .style=${Fe({"--indent-guide-pos":`${ce}px`})}
            class=${re({"has-active-item":m||y})}
          >
            ${this._renderTree(d,a)}
          </ul>`:z,Ge=i?w`<span class="description" part="description">${i}</span>`:z,dt=this._renderActions(e),Xt=this._renderDecorations(e);return te.push(h),l&&b.push("selected"),c&&b.push("focused"),w`
      <li data-path=${a.join("/")} class=${te.join(" ")}>
        <div
          class=${b.join(" ")}
          .style=${Fe({paddingLeft:`${ne+ql}px`})}
        >
          ${he}${V}<span
            class="text-content"
            part="text-content"
            title=${Q(r)}
            >${n}${Ge}</span
          >
          ${dt} ${Xt}
        </div>
        ${ct}
      </li>
    `}_renderTree(e,o=[]){const s=[];return e?(e.forEach((n,i)=>{const r=[...o,i],l=fs(n)?"branch":"leaf",{selected:c=!1,focused:d=!1,hasFocusedItem:a=!1,hasSelectedItem:h=!1}=n;c&&(this._selectedItem=n),d&&(this._focusedItem=n),s.push(this._renderTreeItem(n,{path:r,itemType:l,hasFocusedItem:a,hasSelectedItem:h}))}),s):z}_selectItem(e){var s,n;this._selectedItem&&(this._selectedItem.selected=!1),this._focusedItem&&(this._focusedItem.focused=!1),this._selectedItem=e,e.selected=!0,this._focusedItem=e,e.focused=!0,this._selectedBranch&&(this._selectedBranch.hasSelectedItem=!1);let o=null;if((s=e.path)!=null&&s.length&&e.path.length>1&&(o=this._getItemByPath(e.path.slice(0,-1))),fs(e))this._selectedBranch=e,e.hasSelectedItem=!0,e.open=!e.open,e.open?(this._selectedBranch=e,e.hasSelectedItem=!0):o&&(this._selectedBranch=o,o.hasSelectedItem=!0);else if((n=e.path)!=null&&n.length&&e.path.length>1){const i=this._getItemByPath(e.path.slice(0,-1));i&&(this._selectedBranch=i,i.hasSelectedItem=!0)}else this._selectedBranch=e,e.hasSelectedItem=!0;this._emitSelectEvent(this._selectedItem,this._selectedItem.path.join("/")),this.requestUpdate()}_focusItem(e){var n,i;this._focusedItem&&(this._focusedItem.focused=!1),this._focusedItem=e,e.focused=!0;const o=!!((n=e==null?void 0:e.subItems)!=null&&n.length);this._focusedBranch&&(this._focusedBranch.hasFocusedItem=!1);let s=null;(i=e.path)!=null&&i.length&&e.path.length>1&&(s=this._getItemByPath(e.path.slice(0,-1))),o?e.open?(this._focusedBranch=e,e.hasFocusedItem=!0):!e.open&&s&&(this._focusedBranch=s,s.hasFocusedItem=!0):s&&(this._focusedBranch=s,s.hasFocusedItem=!0)}_closeSubTreeRecursively(e){e.forEach(o=>{o.open=!1,o.subItems&&o.subItems.length>0&&this._closeSubTreeRecursively(o.subItems)})}_deselectItemsRecursively(e){e.forEach(o=>{o.selected&&(o.selected=!1),o.subItems&&o.subItems.length>0&&this._deselectItemsRecursively(o.subItems)})}_emitSelectEvent(e,o){const{icons:s,label:n,open:i,value:r}=e,l={icons:s,itemType:fs(e)?"branch":"leaf",label:n,open:i||!1,value:r||n,path:o};this.dispatchEvent(new CustomEvent("vsc-select",{bubbles:!0,composed:!0,detail:l})),this.dispatchEvent(new CustomEvent("vsc-tree-select",{detail:l}))}_focusPrevItem(){var o;if(!this._focusedItem){this._focusItem(this._data[0]);return}const{path:e}=this._focusedItem;if(e&&(e==null?void 0:e.length)>0){const s=e[e.length-1],n=e.length>1;if(s>0){const i=[...e];i[i.length-1]=s-1;const r=this._getItemByPath(i);let l=r;if(r!=null&&r.open&&((o=r.subItems)!=null&&o.length)){const{subItems:c}=r;l=c[c.length-1]}this._focusItem(l)}else if(n){const i=[...e];i.pop(),this._focusItem(this._getItemByPath(i))}}else this._focusItem(this._data[0])}_focusNextItem(){if(!this._focusedItem){this._focusItem(this._data[0]);return}const{path:e,open:o}=this._focusedItem;if(o&&Array.isArray(this._focusedItem.subItems)&&this._focusedItem.subItems.length>0){this._focusItem(this._focusedItem.subItems[0]);return}const s=[...e];s[s.length-1]+=1;let n=this._getItemByPath(s);n?this._focusItem(n):(s.pop(),s.length>0&&(s[s.length-1]+=1,n=this._getItemByPath(s),n&&this._focusItem(n)))}_handleClick(e){const s=e.composedPath().find(n=>n.tagName&&n.tagName.toUpperCase()==="LI");if(s){const i=(s.dataset.path||"").split("/").map(l=>Number(l)),r=this._getItemByPath(i);this._selectItem(r)}else this._focusedItem&&(this._focusedItem.focused=!1),this._focusedItem=null}_handleComponentKeyDown(e){const o=[" ","ArrowDown","ArrowUp","Enter","Escape"],s=e.key;o.includes(e.key)&&(e.stopPropagation(),e.preventDefault()),s==="Escape"&&(this._focusedItem=null),s==="ArrowUp"&&this._focusPrevItem(),s==="ArrowDown"&&this._focusNextItem(),(s==="Enter"||s===" ")&&this._focusedItem&&this._selectItem(this._focusedItem)}render(){const e=re({multi:this.multiline,single:!this.multiline,wrapper:!0,"has-not-focused-item":!this._focusedItem,"selection-none":!this._selectedItem,"selection-single":this._selectedItem!==null});return w`
      <div @click=${this._handleClick} class=${e}>
        <ul>
          ${this._renderTree(this._data)}
        </ul>
      </div>
    `}};at.styles=Jm;St([p({type:Array,reflect:!1})],at.prototype,"data",null);St([p({type:Number})],at.prototype,"indent",void 0);St([p({type:Boolean,reflect:!0})],at.prototype,"arrows",void 0);St([p({type:Boolean,reflect:!0})],at.prototype,"multiline",void 0);St([p({type:Number,reflect:!0})],at.prototype,"tabindex",void 0);St([p({type:Boolean,reflect:!0,attribute:"indent-guides"})],at.prototype,"indentGuides",void 0);St([H()],at.prototype,"_selectedItem",void 0);St([H()],at.prototype,"_focusedItem",void 0);St([H()],at.prototype,"_selectedBranch",void 0);St([H()],at.prototype,"_focusedBranch",void 0);at=St([K("vscode-tree")],at);ch(Ob).mount("#app");
