(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();/**
* @vue/shared v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function rn(t){const e=Object.create(null);for(const s of t.split(","))e[s]=1;return s=>s in e}const ne={},Es=[],dt=()=>{},qr=()=>!1,li=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ln=t=>t.startsWith("onUpdate:"),$e=Object.assign,an=(t,e)=>{const s=t.indexOf(e);s>-1&&t.splice(s,1)},Ia=Object.prototype.hasOwnProperty,Z=(t,e)=>Ia.call(t,e),L=Array.isArray,Os=t=>$o(t)==="[object Map]",zs=t=>$o(t)==="[object Set]",Nn=t=>$o(t)==="[object Date]",D=t=>typeof t=="function",xe=t=>typeof t=="string",kt=t=>typeof t=="symbol",he=t=>t!==null&&typeof t=="object",Wr=t=>(he(t)||D(t))&&D(t.then)&&D(t.catch),Kr=Object.prototype.toString,$o=t=>Kr.call(t),Ea=t=>$o(t).slice(8,-1),Gr=t=>$o(t)==="[object Object]",cn=t=>xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,oo=rn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ai=t=>{const e=Object.create(null);return s=>e[s]||(e[s]=t(s))},Oa=/-(\w)/g,rt=ai(t=>t.replace(Oa,(e,s)=>s?s.toUpperCase():"")),Aa=/\B([A-Z])/g,_s=ai(t=>t.replace(Aa,"-$1").toLowerCase()),ci=ai(t=>t.charAt(0).toUpperCase()+t.slice(1)),ki=ai(t=>t?`on${ci(t)}`:""),Kt=(t,e)=>!Object.is(t,e),Do=(t,...e)=>{for(let s=0;s<t.length;s++)t[s](...e)},Yr=(t,e,s,o=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:o,value:s})},Uo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Un;const di=()=>Un||(Un=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function dn(t){if(L(t)){const e={};for(let s=0;s<t.length;s++){const o=t[s],i=xe(o)?Ba(o):dn(o);if(i)for(const n in i)e[n]=i[n]}return e}else if(xe(t)||he(t))return t}const Pa=/;(?![^(]*\))/g,Ta=/:([^]+)/,Ra=/\/\*[^]*?\*\//g;function Ba(t){const e={};return t.replace(Ra,"").split(Pa).forEach(s=>{if(s){const o=s.split(Ta);o.length>1&&(e[o[0].trim()]=o[1].trim())}}),e}function Rs(t){let e="";if(xe(t))e=t;else if(L(t))for(let s=0;s<t.length;s++){const o=Rs(t[s]);o&&(e+=o+" ")}else if(he(t))for(const s in t)t[s]&&(e+=s+" ");return e.trim()}const Va="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",La=rn(Va);function Jr(t){return!!t||t===""}function Ma(t,e){if(t.length!==e.length)return!1;let s=!0;for(let o=0;s&&o<t.length;o++)s=vs(t[o],e[o]);return s}function vs(t,e){if(t===e)return!0;let s=Nn(t),o=Nn(e);if(s||o)return s&&o?t.getTime()===e.getTime():!1;if(s=kt(t),o=kt(e),s||o)return t===e;if(s=L(t),o=L(e),s||o)return s&&o?Ma(t,e):!1;if(s=he(t),o=he(e),s||o){if(!s||!o)return!1;const i=Object.keys(t).length,n=Object.keys(e).length;if(i!==n)return!1;for(const r in t){const l=t.hasOwnProperty(r),a=e.hasOwnProperty(r);if(l&&!a||!l&&a||!vs(t[r],e[r]))return!1}}return String(t)===String(e)}function un(t,e){return t.findIndex(s=>vs(s,e))}const Xr=t=>!!(t&&t.__v_isRef===!0),Y=t=>xe(t)?t:t==null?"":L(t)||he(t)&&(t.toString===Kr||!D(t.toString))?Xr(t)?Y(t.value):JSON.stringify(t,Zr,2):String(t),Zr=(t,e)=>Xr(e)?Zr(t,e.value):Os(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((s,[o,i],n)=>(s[Ii(o,n)+" =>"]=i,s),{})}:zs(e)?{[`Set(${e.size})`]:[...e.values()].map(s=>Ii(s))}:kt(e)?Ii(e):he(e)&&!L(e)&&!Gr(e)?String(e):e,Ii=(t,e="")=>{var s;return kt(t)?`Symbol(${(s=t.description)!=null?s:e})`:t};/**
* @vue/reactivity v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qe;class Da{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=qe,!e&&qe&&(this.index=(qe.scopes||(qe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,s;if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].pause();for(e=0,s=this.effects.length;e<s;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,s;if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].resume();for(e=0,s=this.effects.length;e<s;e++)this.effects[e].resume()}}run(e){if(this._active){const s=qe;try{return qe=this,e()}finally{qe=s}}}on(){++this._on===1&&(this.prevScope=qe,qe=this)}off(){this._on>0&&--this._on===0&&(qe=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let s,o;for(s=0,o=this.effects.length;s<o;s++)this.effects[s].stop();for(this.effects.length=0,s=0,o=this.cleanups.length;s<o;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,o=this.scopes.length;s<o;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Fa(){return qe}let ue;const Ei=new WeakSet;class Qr{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,qe&&qe.active&&qe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ei.has(this)&&(Ei.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||tl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,qn(this),sl(this);const e=ue,s=ut;ue=this,ut=!0;try{return this.fn()}finally{ol(this),ue=e,ut=s,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)fn(e);this.deps=this.depsTail=void 0,qn(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ei.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Hi(this)&&this.run()}get dirty(){return Hi(this)}}let el=0,io,no;function tl(t,e=!1){if(t.flags|=8,e){t.next=no,no=t;return}t.next=io,io=t}function hn(){el++}function pn(){if(--el>0)return;if(no){let e=no;for(no=void 0;e;){const s=e.next;e.next=void 0,e.flags&=-9,e=s}}let t;for(;io;){let e=io;for(io=void 0;e;){const s=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(o){t||(t=o)}e=s}}if(t)throw t}function sl(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ol(t){let e,s=t.depsTail,o=s;for(;o;){const i=o.prevDep;o.version===-1?(o===s&&(s=i),fn(o),za(o)):e=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0,o=i}t.deps=e,t.depsTail=s}function Hi(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(il(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function il(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===po)||(t.globalVersion=po,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Hi(t))))return;t.flags|=2;const e=t.dep,s=ue,o=ut;ue=t,ut=!0;try{sl(t);const i=t.fn(t._value);(e.version===0||Kt(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ue=s,ut=o,ol(t),t.flags&=-3}}function fn(t,e=!1){const{dep:s,prevSub:o,nextSub:i}=t;if(o&&(o.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=o,t.nextSub=void 0),s.subs===t&&(s.subs=o,!o&&s.computed)){s.computed.flags&=-5;for(let n=s.computed.deps;n;n=n.nextDep)fn(n,!0)}!e&&!--s.sc&&s.map&&s.map.delete(s.key)}function za(t){const{prevDep:e,nextDep:s}=t;e&&(e.nextDep=s,t.prevDep=void 0),s&&(s.prevDep=e,t.nextDep=void 0)}let ut=!0;const nl=[];function Ft(){nl.push(ut),ut=!1}function zt(){const t=nl.pop();ut=t===void 0?!0:t}function qn(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const s=ue;ue=void 0;try{e()}finally{ue=s}}}let po=0;class ja{constructor(e,s){this.sub=e,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class vn{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ue||!ut||ue===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==ue)s=this.activeLink=new ja(ue,this),ue.deps?(s.prevDep=ue.depsTail,ue.depsTail.nextDep=s,ue.depsTail=s):ue.deps=ue.depsTail=s,rl(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const o=s.nextDep;o.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=o),s.prevDep=ue.depsTail,s.nextDep=void 0,ue.depsTail.nextDep=s,ue.depsTail=s,ue.deps===s&&(ue.deps=o)}return s}trigger(e){this.version++,po++,this.notify(e)}notify(e){hn();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{pn()}}}function rl(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let o=e.deps;o;o=o.nextDep)rl(o)}const s=t.dep.subs;s!==t&&(t.prevSub=s,s&&(s.nextSub=t)),t.dep.subs=t}}const Ni=new WeakMap,ps=Symbol(""),Ui=Symbol(""),fo=Symbol("");function Te(t,e,s){if(ut&&ue){let o=Ni.get(t);o||Ni.set(t,o=new Map);let i=o.get(s);i||(o.set(s,i=new vn),i.map=o,i.key=s),i.track()}}function Vt(t,e,s,o,i,n){const r=Ni.get(t);if(!r){po++;return}const l=a=>{a&&a.trigger()};if(hn(),e==="clear")r.forEach(l);else{const a=L(t),d=a&&cn(s);if(a&&s==="length"){const c=Number(o);r.forEach((f,v)=>{(v==="length"||v===fo||!kt(v)&&v>=c)&&l(f)})}else switch((s!==void 0||r.has(void 0))&&l(r.get(s)),d&&l(r.get(fo)),e){case"add":a?d&&l(r.get("length")):(l(r.get(ps)),Os(t)&&l(r.get(Ui)));break;case"delete":a||(l(r.get(ps)),Os(t)&&l(r.get(Ui)));break;case"set":Os(t)&&l(r.get(ps));break}}pn()}function Ss(t){const e=X(t);return e===t?e:(Te(e,"iterate",fo),it(t)?e:e.map(Ee))}function ui(t){return Te(t=X(t),"iterate",fo),t}const Ha={__proto__:null,[Symbol.iterator](){return Oi(this,Symbol.iterator,Ee)},concat(...t){return Ss(this).concat(...t.map(e=>L(e)?Ss(e):e))},entries(){return Oi(this,"entries",t=>(t[1]=Ee(t[1]),t))},every(t,e){return Pt(this,"every",t,e,void 0,arguments)},filter(t,e){return Pt(this,"filter",t,e,s=>s.map(Ee),arguments)},find(t,e){return Pt(this,"find",t,e,Ee,arguments)},findIndex(t,e){return Pt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Pt(this,"findLast",t,e,Ee,arguments)},findLastIndex(t,e){return Pt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Pt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ai(this,"includes",t)},indexOf(...t){return Ai(this,"indexOf",t)},join(t){return Ss(this).join(t)},lastIndexOf(...t){return Ai(this,"lastIndexOf",t)},map(t,e){return Pt(this,"map",t,e,void 0,arguments)},pop(){return Js(this,"pop")},push(...t){return Js(this,"push",t)},reduce(t,...e){return Wn(this,"reduce",t,e)},reduceRight(t,...e){return Wn(this,"reduceRight",t,e)},shift(){return Js(this,"shift")},some(t,e){return Pt(this,"some",t,e,void 0,arguments)},splice(...t){return Js(this,"splice",t)},toReversed(){return Ss(this).toReversed()},toSorted(t){return Ss(this).toSorted(t)},toSpliced(...t){return Ss(this).toSpliced(...t)},unshift(...t){return Js(this,"unshift",t)},values(){return Oi(this,"values",Ee)}};function Oi(t,e,s){const o=ui(t),i=o[e]();return o!==t&&!it(t)&&(i._next=i.next,i.next=()=>{const n=i._next();return n.value&&(n.value=s(n.value)),n}),i}const Na=Array.prototype;function Pt(t,e,s,o,i,n){const r=ui(t),l=r!==t&&!it(t),a=r[e];if(a!==Na[e]){const f=a.apply(t,n);return l?Ee(f):f}let d=s;r!==t&&(l?d=function(f,v){return s.call(this,Ee(f),v,t)}:s.length>2&&(d=function(f,v){return s.call(this,f,v,t)}));const c=a.call(r,d,o);return l&&i?i(c):c}function Wn(t,e,s,o){const i=ui(t);let n=s;return i!==t&&(it(t)?s.length>3&&(n=function(r,l,a){return s.call(this,r,l,a,t)}):n=function(r,l,a){return s.call(this,r,Ee(l),a,t)}),i[e](n,...o)}function Ai(t,e,s){const o=X(t);Te(o,"iterate",fo);const i=o[e](...s);return(i===-1||i===!1)&&_n(s[0])?(s[0]=X(s[0]),o[e](...s)):i}function Js(t,e,s=[]){Ft(),hn();const o=X(t)[e].apply(t,s);return pn(),zt(),o}const Ua=rn("__proto__,__v_isRef,__isVue"),ll=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(kt));function qa(t){kt(t)||(t=String(t));const e=X(this);return Te(e,"has",t),e.hasOwnProperty(t)}class al{constructor(e=!1,s=!1){this._isReadonly=e,this._isShallow=s}get(e,s,o){if(s==="__v_skip")return e.__v_skip;const i=this._isReadonly,n=this._isShallow;if(s==="__v_isReactive")return!i;if(s==="__v_isReadonly")return i;if(s==="__v_isShallow")return n;if(s==="__v_raw")return o===(i?n?tc:hl:n?ul:dl).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(o)?e:void 0;const r=L(e);if(!i){let a;if(r&&(a=Ha[s]))return a;if(s==="hasOwnProperty")return qa}const l=Reflect.get(e,s,Ve(e)?e:o);return(kt(s)?ll.has(s):Ua(s))||(i||Te(e,"get",s),n)?l:Ve(l)?r&&cn(s)?l:l.value:he(l)?i?pl(l):gn(l):l}}class cl extends al{constructor(e=!1){super(!1,e)}set(e,s,o,i){let n=e[s];if(!this._isShallow){const a=Yt(n);if(!it(o)&&!Yt(o)&&(n=X(n),o=X(o)),!L(e)&&Ve(n)&&!Ve(o))return a||(n.value=o),!0}const r=L(e)&&cn(s)?Number(s)<e.length:Z(e,s),l=Reflect.set(e,s,o,Ve(e)?e:i);return e===X(i)&&(r?Kt(o,n)&&Vt(e,"set",s,o):Vt(e,"add",s,o)),l}deleteProperty(e,s){const o=Z(e,s);e[s];const i=Reflect.deleteProperty(e,s);return i&&o&&Vt(e,"delete",s,void 0),i}has(e,s){const o=Reflect.has(e,s);return(!kt(s)||!ll.has(s))&&Te(e,"has",s),o}ownKeys(e){return Te(e,"iterate",L(e)?"length":ps),Reflect.ownKeys(e)}}class Wa extends al{constructor(e=!1){super(!0,e)}set(e,s){return!0}deleteProperty(e,s){return!0}}const Ka=new cl,Ga=new Wa,Ya=new cl(!0);const qi=t=>t,Po=t=>Reflect.getPrototypeOf(t);function Ja(t,e,s){return function(...o){const i=this.__v_raw,n=X(i),r=Os(n),l=t==="entries"||t===Symbol.iterator&&r,a=t==="keys"&&r,d=i[t](...o),c=s?qi:e?qo:Ee;return!e&&Te(n,"iterate",a?Ui:ps),{next(){const{value:f,done:v}=d.next();return v?{value:f,done:v}:{value:l?[c(f[0]),c(f[1])]:c(f),done:v}},[Symbol.iterator](){return this}}}}function To(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Xa(t,e){const s={get(i){const n=this.__v_raw,r=X(n),l=X(i);t||(Kt(i,l)&&Te(r,"get",i),Te(r,"get",l));const{has:a}=Po(r),d=e?qi:t?qo:Ee;if(a.call(r,i))return d(n.get(i));if(a.call(r,l))return d(n.get(l));n!==r&&n.get(i)},get size(){const i=this.__v_raw;return!t&&Te(X(i),"iterate",ps),Reflect.get(i,"size",i)},has(i){const n=this.__v_raw,r=X(n),l=X(i);return t||(Kt(i,l)&&Te(r,"has",i),Te(r,"has",l)),i===l?n.has(i):n.has(i)||n.has(l)},forEach(i,n){const r=this,l=r.__v_raw,a=X(l),d=e?qi:t?qo:Ee;return!t&&Te(a,"iterate",ps),l.forEach((c,f)=>i.call(n,d(c),d(f),r))}};return $e(s,t?{add:To("add"),set:To("set"),delete:To("delete"),clear:To("clear")}:{add(i){!e&&!it(i)&&!Yt(i)&&(i=X(i));const n=X(this);return Po(n).has.call(n,i)||(n.add(i),Vt(n,"add",i,i)),this},set(i,n){!e&&!it(n)&&!Yt(n)&&(n=X(n));const r=X(this),{has:l,get:a}=Po(r);let d=l.call(r,i);d||(i=X(i),d=l.call(r,i));const c=a.call(r,i);return r.set(i,n),d?Kt(n,c)&&Vt(r,"set",i,n):Vt(r,"add",i,n),this},delete(i){const n=X(this),{has:r,get:l}=Po(n);let a=r.call(n,i);a||(i=X(i),a=r.call(n,i)),l&&l.call(n,i);const d=n.delete(i);return a&&Vt(n,"delete",i,void 0),d},clear(){const i=X(this),n=i.size!==0,r=i.clear();return n&&Vt(i,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(i=>{s[i]=Ja(i,t,e)}),s}function bn(t,e){const s=Xa(t,e);return(o,i,n)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?o:Reflect.get(Z(s,i)&&i in o?s:o,i,n)}const Za={get:bn(!1,!1)},Qa={get:bn(!1,!0)},ec={get:bn(!0,!1)};const dl=new WeakMap,ul=new WeakMap,hl=new WeakMap,tc=new WeakMap;function sc(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function oc(t){return t.__v_skip||!Object.isExtensible(t)?0:sc(Ea(t))}function gn(t){return Yt(t)?t:mn(t,!1,Ka,Za,dl)}function ic(t){return mn(t,!1,Ya,Qa,ul)}function pl(t){return mn(t,!0,Ga,ec,hl)}function mn(t,e,s,o,i){if(!he(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const n=oc(t);if(n===0)return t;const r=i.get(t);if(r)return r;const l=new Proxy(t,n===2?o:s);return i.set(t,l),l}function As(t){return Yt(t)?As(t.__v_raw):!!(t&&t.__v_isReactive)}function Yt(t){return!!(t&&t.__v_isReadonly)}function it(t){return!!(t&&t.__v_isShallow)}function _n(t){return t?!!t.__v_raw:!1}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function nc(t){return!Z(t,"__v_skip")&&Object.isExtensible(t)&&Yr(t,"__v_skip",!0),t}const Ee=t=>he(t)?gn(t):t,qo=t=>he(t)?pl(t):t;function Ve(t){return t?t.__v_isRef===!0:!1}function ct(t){return rc(t,!1)}function rc(t,e){return Ve(t)?t:new lc(t,e)}class lc{constructor(e,s){this.dep=new vn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?e:X(e),this._value=s?e:Ee(e),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(e){const s=this._rawValue,o=this.__v_isShallow||it(e)||Yt(e);e=o?e:X(e),Kt(e,s)&&(this._rawValue=e,this._value=o?e:Ee(e),this.dep.trigger())}}function ac(t){return Ve(t)?t.value:t}const cc={get:(t,e,s)=>e==="__v_raw"?t:ac(Reflect.get(t,e,s)),set:(t,e,s,o)=>{const i=t[e];return Ve(i)&&!Ve(s)?(i.value=s,!0):Reflect.set(t,e,s,o)}};function fl(t){return As(t)?t:new Proxy(t,cc)}class dc{constructor(e,s,o){this.fn=e,this.setter=s,this._value=void 0,this.dep=new vn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=po-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=o}notify(){if(this.flags|=16,!(this.flags&8)&&ue!==this)return tl(this,!0),!0}get value(){const e=this.dep.track();return il(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function uc(t,e,s=!1){let o,i;return D(t)?o=t:(o=t.get,i=t.set),new dc(o,i,s)}const Ro={},Wo=new WeakMap;let ds;function hc(t,e=!1,s=ds){if(s){let o=Wo.get(s);o||Wo.set(s,o=[]),o.push(t)}}function pc(t,e,s=ne){const{immediate:o,deep:i,once:n,scheduler:r,augmentJob:l,call:a}=s,d=V=>i?V:it(V)||i===!1||i===0?Lt(V,1):Lt(V);let c,f,v,x,S=!1,T=!1;if(Ve(t)?(f=()=>t.value,S=it(t)):As(t)?(f=()=>d(t),S=!0):L(t)?(T=!0,S=t.some(V=>As(V)||it(V)),f=()=>t.map(V=>{if(Ve(V))return V.value;if(As(V))return d(V);if(D(V))return a?a(V,2):V()})):D(t)?e?f=a?()=>a(t,2):t:f=()=>{if(v){Ft();try{v()}finally{zt()}}const V=ds;ds=c;try{return a?a(t,3,[x]):t(x)}finally{ds=V}}:f=dt,e&&i){const V=f,ce=i===!0?1/0:i;f=()=>Lt(V(),ce)}const le=Fa(),z=()=>{c.stop(),le&&le.active&&an(le.effects,c)};if(n&&e){const V=e;e=(...ce)=>{V(...ce),z()}}let Q=T?new Array(t.length).fill(Ro):Ro;const ae=V=>{if(!(!(c.flags&1)||!c.dirty&&!V))if(e){const ce=c.run();if(i||S||(T?ce.some((st,He)=>Kt(st,Q[He])):Kt(ce,Q))){v&&v();const st=ds;ds=c;try{const He=[ce,Q===Ro?void 0:T&&Q[0]===Ro?[]:Q,x];Q=ce,a?a(e,3,He):e(...He)}finally{ds=st}}}else c.run()};return l&&l(ae),c=new Qr(f),c.scheduler=r?()=>r(ae,!1):ae,x=V=>hc(V,!1,c),v=c.onStop=()=>{const V=Wo.get(c);if(V){if(a)a(V,4);else for(const ce of V)ce();Wo.delete(c)}},e?o?ae(!0):Q=c.run():r?r(ae.bind(null,!0),!0):c.run(),z.pause=c.pause.bind(c),z.resume=c.resume.bind(c),z.stop=z,z}function Lt(t,e=1/0,s){if(e<=0||!he(t)||t.__v_skip||(s=s||new Set,s.has(t)))return t;if(s.add(t),e--,Ve(t))Lt(t.value,e,s);else if(L(t))for(let o=0;o<t.length;o++)Lt(t[o],e,s);else if(zs(t)||Os(t))t.forEach(o=>{Lt(o,e,s)});else if(Gr(t)){for(const o in t)Lt(t[o],e,s);for(const o of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,o)&&Lt(t[o],e,s)}return t}/**
* @vue/runtime-core v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function So(t,e,s,o){try{return o?t(...o):t()}catch(i){hi(i,e,s)}}function It(t,e,s,o){if(D(t)){const i=So(t,e,s,o);return i&&Wr(i)&&i.catch(n=>{hi(n,e,s)}),i}if(L(t)){const i=[];for(let n=0;n<t.length;n++)i.push(It(t[n],e,s,o));return i}}function hi(t,e,s,o=!0){const i=e?e.vnode:null,{errorHandler:n,throwUnhandledErrorInProduction:r}=e&&e.appContext.config||ne;if(e){let l=e.parent;const a=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${s}`;for(;l;){const c=l.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](t,a,d)===!1)return}l=l.parent}if(n){Ft(),So(n,null,10,[t,a,d]),zt();return}}fc(t,s,i,o,r)}function fc(t,e,s,o=!0,i=!1){if(i)throw t;console.error(t)}const ze=[];let Ct=-1;const Ps=[];let qt=null,ks=0;const vl=Promise.resolve();let Ko=null;function bl(t){const e=Ko||vl;return t?e.then(this?t.bind(this):t):e}function vc(t){let e=Ct+1,s=ze.length;for(;e<s;){const o=e+s>>>1,i=ze[o],n=vo(i);n<t||n===t&&i.flags&2?e=o+1:s=o}return e}function yn(t){if(!(t.flags&1)){const e=vo(t),s=ze[ze.length-1];!s||!(t.flags&2)&&e>=vo(s)?ze.push(t):ze.splice(vc(e),0,t),t.flags|=1,gl()}}function gl(){Ko||(Ko=vl.then(_l))}function bc(t){L(t)?Ps.push(...t):qt&&t.id===-1?qt.splice(ks+1,0,t):t.flags&1||(Ps.push(t),t.flags|=1),gl()}function Kn(t,e,s=Ct+1){for(;s<ze.length;s++){const o=ze[s];if(o&&o.flags&2){if(t&&o.id!==t.uid)continue;ze.splice(s,1),s--,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function ml(t){if(Ps.length){const e=[...new Set(Ps)].sort((s,o)=>vo(s)-vo(o));if(Ps.length=0,qt){qt.push(...e);return}for(qt=e,ks=0;ks<qt.length;ks++){const s=qt[ks];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}qt=null,ks=0}}const vo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function _l(t){const e=dt;try{for(Ct=0;Ct<ze.length;Ct++){const s=ze[Ct];s&&!(s.flags&8)&&(s.flags&4&&(s.flags&=-2),So(s,s.i,s.i?15:14),s.flags&4||(s.flags&=-2))}}finally{for(;Ct<ze.length;Ct++){const s=ze[Ct];s&&(s.flags&=-2)}Ct=-1,ze.length=0,ml(),Ko=null,(ze.length||Ps.length)&&_l()}}let Qe=null,yl=null;function Go(t){const e=Qe;return Qe=t,yl=t&&t.type.__scopeId||null,e}function Xe(t,e=Qe,s){if(!e||t._n)return t;const o=(...i)=>{o._d&&sr(-1);const n=Go(e);let r;try{r=t(...i)}finally{Go(n),o._d&&sr(1)}return r};return o._n=!0,o._c=!0,o._d=!0,o}function Ue(t,e){if(Qe===null)return t;const s=gi(Qe),o=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[n,r,l,a=ne]=e[i];n&&(D(n)&&(n={mounted:n,updated:n}),n.deep&&Lt(r),o.push({dir:n,instance:s,value:r,oldValue:void 0,arg:l,modifiers:a}))}return t}function rs(t,e,s,o){const i=t.dirs,n=e&&e.dirs;for(let r=0;r<i.length;r++){const l=i[r];n&&(l.oldValue=n[r].value);let a=l.dir[o];a&&(Ft(),It(a,s,8,[t.el,l,t,e]),zt())}}const gc=Symbol("_vte"),mc=t=>t.__isTeleport,_c=Symbol("_leaveCb");function xn(t,e){t.shapeFlag&6&&t.component?(t.transition=e,xn(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function pi(t,e){return D(t)?(()=>$e({name:t.name},e,{setup:t}))():t}function xl(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ro(t,e,s,o,i=!1){if(L(t)){t.forEach((S,T)=>ro(S,e&&(L(e)?e[T]:e),s,o,i));return}if(lo(o)&&!i){o.shapeFlag&512&&o.type.__asyncResolved&&o.component.subTree.component&&ro(t,e,s,o.component.subTree);return}const n=o.shapeFlag&4?gi(o.component):o.el,r=i?null:n,{i:l,r:a}=t,d=e&&e.r,c=l.refs===ne?l.refs={}:l.refs,f=l.setupState,v=X(f),x=f===ne?qr:S=>Z(v,S);if(d!=null&&d!==a){if(xe(d))c[d]=null,x(d)&&(f[d]=null);else if(Ve(d)){d.value=null;const S=e;S.k&&(c[S.k]=null)}}if(D(a))So(a,l,12,[r,c]);else{const S=xe(a),T=Ve(a);if(S||T){const le=()=>{if(t.f){const z=S?x(a)?f[a]:c[a]:a.value;if(i)L(z)&&an(z,n);else if(L(z))z.includes(n)||z.push(n);else if(S)c[a]=[n],x(a)&&(f[a]=c[a]);else{const Q=[n];a.value=Q,t.k&&(c[t.k]=Q)}}else S?(c[a]=r,x(a)&&(f[a]=r)):T&&(a.value=r,t.k&&(c[t.k]=r))};r?(le.id=-1,Je(le,s)):le()}}}di().requestIdleCallback;di().cancelIdleCallback;const lo=t=>!!t.type.__asyncLoader,wl=t=>t.type.__isKeepAlive;function yc(t,e){Cl(t,"a",e)}function xc(t,e){Cl(t,"da",e)}function Cl(t,e,s=Re){const o=t.__wdc||(t.__wdc=()=>{let i=s;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(fi(e,o,s),s){let i=s.parent;for(;i&&i.parent;)wl(i.parent.vnode)&&wc(o,e,s,i),i=i.parent}}function wc(t,e,s,o){const i=fi(e,t,o,!0);Sl(()=>{an(o[e],i)},s)}function fi(t,e,s=Re,o=!1){if(s){const i=s[t]||(s[t]=[]),n=e.__weh||(e.__weh=(...r)=>{Ft();const l=ko(s),a=It(e,s,t,r);return l(),zt(),a});return o?i.unshift(n):i.push(n),n}}const Nt=t=>(e,s=Re)=>{(!mo||t==="sp")&&fi(t,(...o)=>e(...o),s)},Cc=Nt("bm"),$l=Nt("m"),$c=Nt("bu"),Sc=Nt("u"),kc=Nt("bum"),Sl=Nt("um"),Ic=Nt("sp"),Ec=Nt("rtg"),Oc=Nt("rtc");function Ac(t,e=Re){fi("ec",t,e)}const kl="components";function St(t,e){return Tc(kl,t,!0,e)||t}const Pc=Symbol.for("v-ndc");function Tc(t,e,s=!0,o=!1){const i=Qe||Re;if(i){const n=i.type;if(t===kl){const l=yd(n,!1);if(l&&(l===e||l===rt(e)||l===ci(rt(e))))return n}const r=Gn(i[t]||n[t],e)||Gn(i.appContext[t],e);return!r&&o?n:r}}function Gn(t,e){return t&&(t[e]||t[rt(e)]||t[ci(rt(e))])}function bo(t,e,s,o){let i;const n=s&&s[o],r=L(t);if(r||xe(t)){const l=r&&As(t);let a=!1,d=!1;l&&(a=!it(t),d=Yt(t),t=ui(t)),i=new Array(t.length);for(let c=0,f=t.length;c<f;c++)i[c]=e(a?d?qo(Ee(t[c])):Ee(t[c]):t[c],c,void 0,n&&n[c])}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,n&&n[l])}else if(he(t))if(t[Symbol.iterator])i=Array.from(t,(l,a)=>e(l,a,void 0,n&&n[a]));else{const l=Object.keys(t);i=new Array(l.length);for(let a=0,d=l.length;a<d;a++){const c=l[a];i[a]=e(t[c],c,a,n&&n[a])}}else i=[];return s&&(s[o]=i),i}const Wi=t=>t?Wl(t)?gi(t):Wi(t.parent):null,ao=$e(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Wi(t.parent),$root:t=>Wi(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>wn(t),$forceUpdate:t=>t.f||(t.f=()=>{yn(t.update)}),$nextTick:t=>t.n||(t.n=bl.bind(t.proxy)),$watch:t=>ed.bind(t)}),Pi=(t,e)=>t!==ne&&!t.__isScriptSetup&&Z(t,e),Rc={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:s,setupState:o,data:i,props:n,accessCache:r,type:l,appContext:a}=t;let d;if(e[0]!=="$"){const x=r[e];if(x!==void 0)switch(x){case 1:return o[e];case 2:return i[e];case 4:return s[e];case 3:return n[e]}else{if(Pi(o,e))return r[e]=1,o[e];if(i!==ne&&Z(i,e))return r[e]=2,i[e];if((d=t.propsOptions[0])&&Z(d,e))return r[e]=3,n[e];if(s!==ne&&Z(s,e))return r[e]=4,s[e];Ki&&(r[e]=0)}}const c=ao[e];let f,v;if(c)return e==="$attrs"&&Te(t.attrs,"get",""),c(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(s!==ne&&Z(s,e))return r[e]=4,s[e];if(v=a.config.globalProperties,Z(v,e))return v[e]},set({_:t},e,s){const{data:o,setupState:i,ctx:n}=t;return Pi(i,e)?(i[e]=s,!0):o!==ne&&Z(o,e)?(o[e]=s,!0):Z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(n[e]=s,!0)},has({_:{data:t,setupState:e,accessCache:s,ctx:o,appContext:i,propsOptions:n,type:r}},l){let a,d;return!!(s[l]||t!==ne&&l[0]!=="$"&&Z(t,l)||Pi(e,l)||(a=n[0])&&Z(a,l)||Z(o,l)||Z(ao,l)||Z(i.config.globalProperties,l)||(d=r.__cssModules)&&d[l])},defineProperty(t,e,s){return s.get!=null?t._.accessCache[e]=0:Z(s,"value")&&this.set(t,e,s.value,null),Reflect.defineProperty(t,e,s)}};function Yn(t){return L(t)?t.reduce((e,s)=>(e[s]=null,e),{}):t}let Ki=!0;function Bc(t){const e=wn(t),s=t.proxy,o=t.ctx;Ki=!1,e.beforeCreate&&Jn(e.beforeCreate,t,"bc");const{data:i,computed:n,methods:r,watch:l,provide:a,inject:d,created:c,beforeMount:f,mounted:v,beforeUpdate:x,updated:S,activated:T,deactivated:le,beforeDestroy:z,beforeUnmount:Q,destroyed:ae,unmounted:V,render:ce,renderTracked:st,renderTriggered:He,errorCaptured:ot,serverPrefetch:Ut,expose:At,inheritAttrs:os,components:is,directives:$,filters:A}=e;if(d&&Vc(d,o,null),r)for(const J in r){const se=r[J];D(se)&&(o[J]=se.bind(s))}if(i){const J=i.call(s,s);he(J)&&(t.data=gn(J))}if(Ki=!0,n)for(const J in n){const se=n[J],_t=D(se)?se.bind(s,s):D(se.get)?se.get.bind(s,s):dt,Oo=!D(se)&&D(se.set)?se.set.bind(s):dt,ns=Ze({get:_t,set:Oo});Object.defineProperty(o,J,{enumerable:!0,configurable:!0,get:()=>ns.value,set:yt=>ns.value=yt})}if(l)for(const J in l)Il(l[J],o,s,J);if(a){const J=D(a)?a.call(s):a;Reflect.ownKeys(J).forEach(se=>{jc(se,J[se])})}c&&Jn(c,t,"c");function fe(J,se){L(se)?se.forEach(_t=>J(_t.bind(s))):se&&J(se.bind(s))}if(fe(Cc,f),fe($l,v),fe($c,x),fe(Sc,S),fe(yc,T),fe(xc,le),fe(Ac,ot),fe(Oc,st),fe(Ec,He),fe(kc,Q),fe(Sl,V),fe(Ic,Ut),L(At))if(At.length){const J=t.exposed||(t.exposed={});At.forEach(se=>{Object.defineProperty(J,se,{get:()=>s[se],set:_t=>s[se]=_t,enumerable:!0})})}else t.exposed||(t.exposed={});ce&&t.render===dt&&(t.render=ce),os!=null&&(t.inheritAttrs=os),is&&(t.components=is),$&&(t.directives=$),Ut&&xl(t)}function Vc(t,e,s=dt){L(t)&&(t=Gi(t));for(const o in t){const i=t[o];let n;he(i)?"default"in i?n=Fo(i.from||o,i.default,!0):n=Fo(i.from||o):n=Fo(i),Ve(n)?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>n.value,set:r=>n.value=r}):e[o]=n}}function Jn(t,e,s){It(L(t)?t.map(o=>o.bind(e.proxy)):t.bind(e.proxy),e,s)}function Il(t,e,s,o){let i=o.includes(".")?zl(s,o):()=>s[o];if(xe(t)){const n=e[t];D(n)&&zo(i,n)}else if(D(t))zo(i,t.bind(s));else if(he(t))if(L(t))t.forEach(n=>Il(n,e,s,o));else{const n=D(t.handler)?t.handler.bind(s):e[t.handler];D(n)&&zo(i,n,t)}}function wn(t){const e=t.type,{mixins:s,extends:o}=e,{mixins:i,optionsCache:n,config:{optionMergeStrategies:r}}=t.appContext,l=n.get(e);let a;return l?a=l:!i.length&&!s&&!o?a=e:(a={},i.length&&i.forEach(d=>Yo(a,d,r,!0)),Yo(a,e,r)),he(e)&&n.set(e,a),a}function Yo(t,e,s,o=!1){const{mixins:i,extends:n}=e;n&&Yo(t,n,s,!0),i&&i.forEach(r=>Yo(t,r,s,!0));for(const r in e)if(!(o&&r==="expose")){const l=Lc[r]||s&&s[r];t[r]=l?l(t[r],e[r]):e[r]}return t}const Lc={data:Xn,props:Zn,emits:Zn,methods:to,computed:to,beforeCreate:Fe,created:Fe,beforeMount:Fe,mounted:Fe,beforeUpdate:Fe,updated:Fe,beforeDestroy:Fe,beforeUnmount:Fe,destroyed:Fe,unmounted:Fe,activated:Fe,deactivated:Fe,errorCaptured:Fe,serverPrefetch:Fe,components:to,directives:to,watch:Dc,provide:Xn,inject:Mc};function Xn(t,e){return e?t?function(){return $e(D(t)?t.call(this,this):t,D(e)?e.call(this,this):e)}:e:t}function Mc(t,e){return to(Gi(t),Gi(e))}function Gi(t){if(L(t)){const e={};for(let s=0;s<t.length;s++)e[t[s]]=t[s];return e}return t}function Fe(t,e){return t?[...new Set([].concat(t,e))]:e}function to(t,e){return t?$e(Object.create(null),t,e):e}function Zn(t,e){return t?L(t)&&L(e)?[...new Set([...t,...e])]:$e(Object.create(null),Yn(t),Yn(e??{})):e}function Dc(t,e){if(!t)return e;if(!e)return t;const s=$e(Object.create(null),t);for(const o in e)s[o]=Fe(t[o],e[o]);return s}function El(){return{app:null,config:{isNativeTag:qr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fc=0;function zc(t,e){return function(o,i=null){D(o)||(o=$e({},o)),i!=null&&!he(i)&&(i=null);const n=El(),r=new WeakSet,l=[];let a=!1;const d=n.app={_uid:Fc++,_component:o,_props:i,_container:null,_context:n,_instance:null,version:wd,get config(){return n.config},set config(c){},use(c,...f){return r.has(c)||(c&&D(c.install)?(r.add(c),c.install(d,...f)):D(c)&&(r.add(c),c(d,...f))),d},mixin(c){return n.mixins.includes(c)||n.mixins.push(c),d},component(c,f){return f?(n.components[c]=f,d):n.components[c]},directive(c,f){return f?(n.directives[c]=f,d):n.directives[c]},mount(c,f,v){if(!a){const x=d._ceVNode||oe(o,i);return x.appContext=n,v===!0?v="svg":v===!1&&(v=void 0),f&&e?e(x,c):t(x,c,v),a=!0,d._container=c,c.__vue_app__=d,gi(x.component)}},onUnmount(c){l.push(c)},unmount(){a&&(It(l,d._instance,16),t(null,d._container),delete d._container.__vue_app__)},provide(c,f){return n.provides[c]=f,d},runWithContext(c){const f=Ts;Ts=d;try{return c()}finally{Ts=f}}};return d}}let Ts=null;function jc(t,e){if(Re){let s=Re.provides;const o=Re.parent&&Re.parent.provides;o===s&&(s=Re.provides=Object.create(o)),s[t]=e}}function Fo(t,e,s=!1){const o=vd();if(o||Ts){let i=Ts?Ts._context.provides:o?o.parent==null||o.ce?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return s&&D(e)?e.call(o&&o.proxy):e}}const Ol={},Al=()=>Object.create(Ol),Pl=t=>Object.getPrototypeOf(t)===Ol;function Hc(t,e,s,o=!1){const i={},n=Al();t.propsDefaults=Object.create(null),Tl(t,e,i,n);for(const r in t.propsOptions[0])r in i||(i[r]=void 0);s?t.props=o?i:ic(i):t.type.props?t.props=i:t.props=n,t.attrs=n}function Nc(t,e,s,o){const{props:i,attrs:n,vnode:{patchFlag:r}}=t,l=X(i),[a]=t.propsOptions;let d=!1;if((o||r>0)&&!(r&16)){if(r&8){const c=t.vnode.dynamicProps;for(let f=0;f<c.length;f++){let v=c[f];if(vi(t.emitsOptions,v))continue;const x=e[v];if(a)if(Z(n,v))x!==n[v]&&(n[v]=x,d=!0);else{const S=rt(v);i[S]=Yi(a,l,S,x,t,!1)}else x!==n[v]&&(n[v]=x,d=!0)}}}else{Tl(t,e,i,n)&&(d=!0);let c;for(const f in l)(!e||!Z(e,f)&&((c=_s(f))===f||!Z(e,c)))&&(a?s&&(s[f]!==void 0||s[c]!==void 0)&&(i[f]=Yi(a,l,f,void 0,t,!0)):delete i[f]);if(n!==l)for(const f in n)(!e||!Z(e,f))&&(delete n[f],d=!0)}d&&Vt(t.attrs,"set","")}function Tl(t,e,s,o){const[i,n]=t.propsOptions;let r=!1,l;if(e)for(let a in e){if(oo(a))continue;const d=e[a];let c;i&&Z(i,c=rt(a))?!n||!n.includes(c)?s[c]=d:(l||(l={}))[c]=d:vi(t.emitsOptions,a)||(!(a in o)||d!==o[a])&&(o[a]=d,r=!0)}if(n){const a=X(s),d=l||ne;for(let c=0;c<n.length;c++){const f=n[c];s[f]=Yi(i,a,f,d[f],t,!Z(d,f))}}return r}function Yi(t,e,s,o,i,n){const r=t[s];if(r!=null){const l=Z(r,"default");if(l&&o===void 0){const a=r.default;if(r.type!==Function&&!r.skipFactory&&D(a)){const{propsDefaults:d}=i;if(s in d)o=d[s];else{const c=ko(i);o=d[s]=a.call(null,e),c()}}else o=a;i.ce&&i.ce._setProp(s,o)}r[0]&&(n&&!l?o=!1:r[1]&&(o===""||o===_s(s))&&(o=!0))}return o}const Uc=new WeakMap;function Rl(t,e,s=!1){const o=s?Uc:e.propsCache,i=o.get(t);if(i)return i;const n=t.props,r={},l=[];let a=!1;if(!D(t)){const c=f=>{a=!0;const[v,x]=Rl(f,e,!0);$e(r,v),x&&l.push(...x)};!s&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!n&&!a)return he(t)&&o.set(t,Es),Es;if(L(n))for(let c=0;c<n.length;c++){const f=rt(n[c]);Qn(f)&&(r[f]=ne)}else if(n)for(const c in n){const f=rt(c);if(Qn(f)){const v=n[c],x=r[f]=L(v)||D(v)?{type:v}:$e({},v),S=x.type;let T=!1,le=!0;if(L(S))for(let z=0;z<S.length;++z){const Q=S[z],ae=D(Q)&&Q.name;if(ae==="Boolean"){T=!0;break}else ae==="String"&&(le=!1)}else T=D(S)&&S.name==="Boolean";x[0]=T,x[1]=le,(T||Z(x,"default"))&&l.push(f)}}const d=[r,l];return he(t)&&o.set(t,d),d}function Qn(t){return t[0]!=="$"&&!oo(t)}const Cn=t=>t==="_"||t==="_ctx"||t==="$stable",$n=t=>L(t)?t.map($t):[$t(t)],qc=(t,e,s)=>{if(e._n)return e;const o=Xe((...i)=>$n(e(...i)),s);return o._c=!1,o},Bl=(t,e,s)=>{const o=t._ctx;for(const i in t){if(Cn(i))continue;const n=t[i];if(D(n))e[i]=qc(i,n,o);else if(n!=null){const r=$n(n);e[i]=()=>r}}},Vl=(t,e)=>{const s=$n(e);t.slots.default=()=>s},Ll=(t,e,s)=>{for(const o in e)(s||!Cn(o))&&(t[o]=e[o])},Wc=(t,e,s)=>{const o=t.slots=Al();if(t.vnode.shapeFlag&32){const i=e._;i?(Ll(o,e,s),s&&Yr(o,"_",i,!0)):Bl(e,o)}else e&&Vl(t,e)},Kc=(t,e,s)=>{const{vnode:o,slots:i}=t;let n=!0,r=ne;if(o.shapeFlag&32){const l=e._;l?s&&l===1?n=!1:Ll(i,e,s):(n=!e.$stable,Bl(e,i)),r=e}else e&&(Vl(t,e),r={default:1});if(n)for(const l in i)!Cn(l)&&r[l]==null&&delete i[l]},Je=ld;function Gc(t){return Yc(t)}function Yc(t,e){const s=di();s.__VUE__=!0;const{insert:o,remove:i,patchProp:n,createElement:r,createText:l,createComment:a,setText:d,setElementText:c,parentNode:f,nextSibling:v,setScopeId:x=dt,insertStaticContent:S}=t,T=(u,p,b,w=null,m=null,y=null,E=void 0,I=null,k=!!p.dynamicChildren)=>{if(u===p)return;u&&!Xs(u,p)&&(w=Ao(u),yt(u,m,y,!0),u=null),p.patchFlag===-2&&(k=!1,p.dynamicChildren=null);const{type:C,ref:B,shapeFlag:O}=p;switch(C){case bi:le(u,p,b,w);break;case Jt:z(u,p,b,w);break;case Bi:u==null&&Q(p,b,w,E);break;case We:is(u,p,b,w,m,y,E,I,k);break;default:O&1?ce(u,p,b,w,m,y,E,I,k):O&6?$(u,p,b,w,m,y,E,I,k):(O&64||O&128)&&C.process(u,p,b,w,m,y,E,I,k,$s)}B!=null&&m?ro(B,u&&u.ref,y,p||u,!p):B==null&&u&&u.ref!=null&&ro(u.ref,null,y,u,!0)},le=(u,p,b,w)=>{if(u==null)o(p.el=l(p.children),b,w);else{const m=p.el=u.el;p.children!==u.children&&d(m,p.children)}},z=(u,p,b,w)=>{u==null?o(p.el=a(p.children||""),b,w):p.el=u.el},Q=(u,p,b,w)=>{[u.el,u.anchor]=S(u.children,p,b,w,u.el,u.anchor)},ae=({el:u,anchor:p},b,w)=>{let m;for(;u&&u!==p;)m=v(u),o(u,b,w),u=m;o(p,b,w)},V=({el:u,anchor:p})=>{let b;for(;u&&u!==p;)b=v(u),i(u),u=b;i(p)},ce=(u,p,b,w,m,y,E,I,k)=>{p.type==="svg"?E="svg":p.type==="math"&&(E="mathml"),u==null?st(p,b,w,m,y,E,I,k):Ut(u,p,m,y,E,I,k)},st=(u,p,b,w,m,y,E,I)=>{let k,C;const{props:B,shapeFlag:O,transition:P,dirs:M}=u;if(k=u.el=r(u.type,y,B&&B.is,B),O&8?c(k,u.children):O&16&&ot(u.children,k,null,w,m,Ti(u,y),E,I),M&&rs(u,null,w,"created"),He(k,u,u.scopeId,E,w),B){for(const de in B)de!=="value"&&!oo(de)&&n(k,de,null,B[de],y,w);"value"in B&&n(k,"value",null,B.value,y),(C=B.onVnodeBeforeMount)&&wt(C,w,u)}M&&rs(u,null,w,"beforeMount");const W=Jc(m,P);W&&P.beforeEnter(k),o(k,p,b),((C=B&&B.onVnodeMounted)||W||M)&&Je(()=>{C&&wt(C,w,u),W&&P.enter(k),M&&rs(u,null,w,"mounted")},m)},He=(u,p,b,w,m)=>{if(b&&x(u,b),w)for(let y=0;y<w.length;y++)x(u,w[y]);if(m){let y=m.subTree;if(p===y||Hl(y.type)&&(y.ssContent===p||y.ssFallback===p)){const E=m.vnode;He(u,E,E.scopeId,E.slotScopeIds,m.parent)}}},ot=(u,p,b,w,m,y,E,I,k=0)=>{for(let C=k;C<u.length;C++){const B=u[C]=I?Wt(u[C]):$t(u[C]);T(null,B,p,b,w,m,y,E,I)}},Ut=(u,p,b,w,m,y,E)=>{const I=p.el=u.el;let{patchFlag:k,dynamicChildren:C,dirs:B}=p;k|=u.patchFlag&16;const O=u.props||ne,P=p.props||ne;let M;if(b&&ls(b,!1),(M=P.onVnodeBeforeUpdate)&&wt(M,b,p,u),B&&rs(p,u,b,"beforeUpdate"),b&&ls(b,!0),(O.innerHTML&&P.innerHTML==null||O.textContent&&P.textContent==null)&&c(I,""),C?At(u.dynamicChildren,C,I,b,w,Ti(p,m),y):E||se(u,p,I,null,b,w,Ti(p,m),y,!1),k>0){if(k&16)os(I,O,P,b,m);else if(k&2&&O.class!==P.class&&n(I,"class",null,P.class,m),k&4&&n(I,"style",O.style,P.style,m),k&8){const W=p.dynamicProps;for(let de=0;de<W.length;de++){const ee=W[de],Ne=O[ee],Pe=P[ee];(Pe!==Ne||ee==="value")&&n(I,ee,Ne,Pe,m,b)}}k&1&&u.children!==p.children&&c(I,p.children)}else!E&&C==null&&os(I,O,P,b,m);((M=P.onVnodeUpdated)||B)&&Je(()=>{M&&wt(M,b,p,u),B&&rs(p,u,b,"updated")},w)},At=(u,p,b,w,m,y,E)=>{for(let I=0;I<p.length;I++){const k=u[I],C=p[I],B=k.el&&(k.type===We||!Xs(k,C)||k.shapeFlag&198)?f(k.el):b;T(k,C,B,null,w,m,y,E,!0)}},os=(u,p,b,w,m)=>{if(p!==b){if(p!==ne)for(const y in p)!oo(y)&&!(y in b)&&n(u,y,p[y],null,m,w);for(const y in b){if(oo(y))continue;const E=b[y],I=p[y];E!==I&&y!=="value"&&n(u,y,I,E,m,w)}"value"in b&&n(u,"value",p.value,b.value,m)}},is=(u,p,b,w,m,y,E,I,k)=>{const C=p.el=u?u.el:l(""),B=p.anchor=u?u.anchor:l("");let{patchFlag:O,dynamicChildren:P,slotScopeIds:M}=p;M&&(I=I?I.concat(M):M),u==null?(o(C,b,w),o(B,b,w),ot(p.children||[],b,B,m,y,E,I,k)):O>0&&O&64&&P&&u.dynamicChildren?(At(u.dynamicChildren,P,b,m,y,E,I),(p.key!=null||m&&p===m.subTree)&&Ml(u,p,!0)):se(u,p,b,B,m,y,E,I,k)},$=(u,p,b,w,m,y,E,I,k)=>{p.slotScopeIds=I,u==null?p.shapeFlag&512?m.ctx.activate(p,b,w,E,k):A(p,b,w,m,y,E,k):De(u,p,k)},A=(u,p,b,w,m,y,E)=>{const I=u.component=fd(u,w,m);if(wl(u)&&(I.ctx.renderer=$s),bd(I,!1,E),I.asyncDep){if(m&&m.registerDep(I,fe,E),!u.el){const k=I.subTree=oe(Jt);z(null,k,p,b),u.placeholder=k.el}}else fe(I,u,p,b,m,y,E)},De=(u,p,b)=>{const w=p.component=u.component;if(nd(u,p,b))if(w.asyncDep&&!w.asyncResolved){J(w,p,b);return}else w.next=p,w.update();else p.el=u.el,w.vnode=p},fe=(u,p,b,w,m,y,E)=>{const I=()=>{if(u.isMounted){let{next:O,bu:P,u:M,parent:W,vnode:de}=u;{const Ge=Dl(u);if(Ge){O&&(O.el=de.el,J(u,O,E)),Ge.asyncDep.then(()=>{u.isUnmounted||I()});return}}let ee=O,Ne;ls(u,!1),O?(O.el=de.el,J(u,O,E)):O=de,P&&Do(P),(Ne=O.props&&O.props.onVnodeBeforeUpdate)&&wt(Ne,W,O,de),ls(u,!0);const Pe=Ri(u),at=u.subTree;u.subTree=Pe,T(at,Pe,f(at.el),Ao(at),u,m,y),O.el=Pe.el,ee===null&&rd(u,Pe.el),M&&Je(M,m),(Ne=O.props&&O.props.onVnodeUpdated)&&Je(()=>wt(Ne,W,O,de),m)}else{let O;const{el:P,props:M}=p,{bm:W,m:de,parent:ee,root:Ne,type:Pe}=u,at=lo(p);if(ls(u,!1),W&&Do(W),!at&&(O=M&&M.onVnodeBeforeMount)&&wt(O,ee,p),ls(u,!0),P&&Si){const Ge=()=>{u.subTree=Ri(u),Si(P,u.subTree,u,m,null)};at&&Pe.__asyncHydrate?Pe.__asyncHydrate(P,u,Ge):Ge()}else{Ne.ce&&Ne.ce._def.shadowRoot!==!1&&Ne.ce._injectChildStyle(Pe);const Ge=u.subTree=Ri(u);T(null,Ge,b,w,u,m,y),p.el=Ge.el}if(de&&Je(de,m),!at&&(O=M&&M.onVnodeMounted)){const Ge=p;Je(()=>wt(O,ee,Ge),m)}(p.shapeFlag&256||ee&&lo(ee.vnode)&&ee.vnode.shapeFlag&256)&&u.a&&Je(u.a,m),u.isMounted=!0,p=b=w=null}};u.scope.on();const k=u.effect=new Qr(I);u.scope.off();const C=u.update=k.run.bind(k),B=u.job=k.runIfDirty.bind(k);B.i=u,B.id=u.uid,k.scheduler=()=>yn(B),ls(u,!0),C()},J=(u,p,b)=>{p.component=u;const w=u.vnode.props;u.vnode=p,u.next=null,Nc(u,p.props,w,b),Kc(u,p.children,b),Ft(),Kn(u),zt()},se=(u,p,b,w,m,y,E,I,k=!1)=>{const C=u&&u.children,B=u?u.shapeFlag:0,O=p.children,{patchFlag:P,shapeFlag:M}=p;if(P>0){if(P&128){Oo(C,O,b,w,m,y,E,I,k);return}else if(P&256){_t(C,O,b,w,m,y,E,I,k);return}}M&8?(B&16&&Gs(C,m,y),O!==C&&c(b,O)):B&16?M&16?Oo(C,O,b,w,m,y,E,I,k):Gs(C,m,y,!0):(B&8&&c(b,""),M&16&&ot(O,b,w,m,y,E,I,k))},_t=(u,p,b,w,m,y,E,I,k)=>{u=u||Es,p=p||Es;const C=u.length,B=p.length,O=Math.min(C,B);let P;for(P=0;P<O;P++){const M=p[P]=k?Wt(p[P]):$t(p[P]);T(u[P],M,b,null,m,y,E,I,k)}C>B?Gs(u,m,y,!0,!1,O):ot(p,b,w,m,y,E,I,k,O)},Oo=(u,p,b,w,m,y,E,I,k)=>{let C=0;const B=p.length;let O=u.length-1,P=B-1;for(;C<=O&&C<=P;){const M=u[C],W=p[C]=k?Wt(p[C]):$t(p[C]);if(Xs(M,W))T(M,W,b,null,m,y,E,I,k);else break;C++}for(;C<=O&&C<=P;){const M=u[O],W=p[P]=k?Wt(p[P]):$t(p[P]);if(Xs(M,W))T(M,W,b,null,m,y,E,I,k);else break;O--,P--}if(C>O){if(C<=P){const M=P+1,W=M<B?p[M].el:w;for(;C<=P;)T(null,p[C]=k?Wt(p[C]):$t(p[C]),b,W,m,y,E,I,k),C++}}else if(C>P)for(;C<=O;)yt(u[C],m,y,!0),C++;else{const M=C,W=C,de=new Map;for(C=W;C<=P;C++){const Ye=p[C]=k?Wt(p[C]):$t(p[C]);Ye.key!=null&&de.set(Ye.key,C)}let ee,Ne=0;const Pe=P-W+1;let at=!1,Ge=0;const Ys=new Array(Pe);for(C=0;C<Pe;C++)Ys[C]=0;for(C=M;C<=O;C++){const Ye=u[C];if(Ne>=Pe){yt(Ye,m,y,!0);continue}let xt;if(Ye.key!=null)xt=de.get(Ye.key);else for(ee=W;ee<=P;ee++)if(Ys[ee-W]===0&&Xs(Ye,p[ee])){xt=ee;break}xt===void 0?yt(Ye,m,y,!0):(Ys[xt-W]=C+1,xt>=Ge?Ge=xt:at=!0,T(Ye,p[xt],b,null,m,y,E,I,k),Ne++)}const zn=at?Xc(Ys):Es;for(ee=zn.length-1,C=Pe-1;C>=0;C--){const Ye=W+C,xt=p[Ye],jn=p[Ye+1],Hn=Ye+1<B?jn.el||jn.placeholder:w;Ys[C]===0?T(null,xt,b,Hn,m,y,E,I,k):at&&(ee<0||C!==zn[ee]?ns(xt,b,Hn,2):ee--)}}},ns=(u,p,b,w,m=null)=>{const{el:y,type:E,transition:I,children:k,shapeFlag:C}=u;if(C&6){ns(u.component.subTree,p,b,w);return}if(C&128){u.suspense.move(p,b,w);return}if(C&64){E.move(u,p,b,$s);return}if(E===We){o(y,p,b);for(let O=0;O<k.length;O++)ns(k[O],p,b,w);o(u.anchor,p,b);return}if(E===Bi){ae(u,p,b);return}if(w!==2&&C&1&&I)if(w===0)I.beforeEnter(y),o(y,p,b),Je(()=>I.enter(y),m);else{const{leave:O,delayLeave:P,afterLeave:M}=I,W=()=>{u.ctx.isUnmounted?i(y):o(y,p,b)},de=()=>{y._isLeaving&&y[_c](!0),O(y,()=>{W(),M&&M()})};P?P(y,W,de):de()}else o(y,p,b)},yt=(u,p,b,w=!1,m=!1)=>{const{type:y,props:E,ref:I,children:k,dynamicChildren:C,shapeFlag:B,patchFlag:O,dirs:P,cacheIndex:M}=u;if(O===-2&&(m=!1),I!=null&&(Ft(),ro(I,null,b,u,!0),zt()),M!=null&&(p.renderCache[M]=void 0),B&256){p.ctx.deactivate(u);return}const W=B&1&&P,de=!lo(u);let ee;if(de&&(ee=E&&E.onVnodeBeforeUnmount)&&wt(ee,p,u),B&6)ka(u.component,b,w);else{if(B&128){u.suspense.unmount(b,w);return}W&&rs(u,null,p,"beforeUnmount"),B&64?u.type.remove(u,p,b,$s,w):C&&!C.hasOnce&&(y!==We||O>0&&O&64)?Gs(C,p,b,!1,!0):(y===We&&O&384||!m&&B&16)&&Gs(k,p,b),w&&Dn(u)}(de&&(ee=E&&E.onVnodeUnmounted)||W)&&Je(()=>{ee&&wt(ee,p,u),W&&rs(u,null,p,"unmounted")},b)},Dn=u=>{const{type:p,el:b,anchor:w,transition:m}=u;if(p===We){Sa(b,w);return}if(p===Bi){V(u);return}const y=()=>{i(b),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(u.shapeFlag&1&&m&&!m.persisted){const{leave:E,delayLeave:I}=m,k=()=>E(b,y);I?I(u.el,y,k):k()}else y()},Sa=(u,p)=>{let b;for(;u!==p;)b=v(u),i(u),u=b;i(p)},ka=(u,p,b)=>{const{bum:w,scope:m,job:y,subTree:E,um:I,m:k,a:C}=u;er(k),er(C),w&&Do(w),m.stop(),y&&(y.flags|=8,yt(E,u,p,b)),I&&Je(I,p),Je(()=>{u.isUnmounted=!0},p)},Gs=(u,p,b,w=!1,m=!1,y=0)=>{for(let E=y;E<u.length;E++)yt(u[E],p,b,w,m)},Ao=u=>{if(u.shapeFlag&6)return Ao(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const p=v(u.anchor||u.el),b=p&&p[gc];return b?v(b):p};let Ci=!1;const Fn=(u,p,b)=>{u==null?p._vnode&&yt(p._vnode,null,null,!0):T(p._vnode||null,u,p,null,null,null,b),p._vnode=u,Ci||(Ci=!0,Kn(),ml(),Ci=!1)},$s={p:T,um:yt,m:ns,r:Dn,mt:A,mc:ot,pc:se,pbc:At,n:Ao,o:t};let $i,Si;return e&&([$i,Si]=e($s)),{render:Fn,hydrate:$i,createApp:zc(Fn,$i)}}function Ti({type:t,props:e},s){return s==="svg"&&t==="foreignObject"||s==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:s}function ls({effect:t,job:e},s){s?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Jc(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ml(t,e,s=!1){const o=t.children,i=e.children;if(L(o)&&L(i))for(let n=0;n<o.length;n++){const r=o[n];let l=i[n];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[n]=Wt(i[n]),l.el=r.el),!s&&l.patchFlag!==-2&&Ml(r,l)),l.type===bi&&l.patchFlag!==-1&&(l.el=r.el),l.type===Jt&&!l.el&&(l.el=r.el)}}function Xc(t){const e=t.slice(),s=[0];let o,i,n,r,l;const a=t.length;for(o=0;o<a;o++){const d=t[o];if(d!==0){if(i=s[s.length-1],t[i]<d){e[o]=i,s.push(o);continue}for(n=0,r=s.length-1;n<r;)l=n+r>>1,t[s[l]]<d?n=l+1:r=l;d<t[s[n]]&&(n>0&&(e[o]=s[n-1]),s[n]=o)}}for(n=s.length,r=s[n-1];n-- >0;)s[n]=r,r=e[r];return s}function Dl(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Dl(e)}function er(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Zc=Symbol.for("v-scx"),Qc=()=>Fo(Zc);function zo(t,e,s){return Fl(t,e,s)}function Fl(t,e,s=ne){const{immediate:o,deep:i,flush:n,once:r}=s,l=$e({},s),a=e&&o||!e&&n!=="post";let d;if(mo){if(n==="sync"){const x=Qc();d=x.__watcherHandles||(x.__watcherHandles=[])}else if(!a){const x=()=>{};return x.stop=dt,x.resume=dt,x.pause=dt,x}}const c=Re;l.call=(x,S,T)=>It(x,c,S,T);let f=!1;n==="post"?l.scheduler=x=>{Je(x,c&&c.suspense)}:n!=="sync"&&(f=!0,l.scheduler=(x,S)=>{S?x():yn(x)}),l.augmentJob=x=>{e&&(x.flags|=4),f&&(x.flags|=2,c&&(x.id=c.uid,x.i=c))};const v=pc(t,e,l);return mo&&(d?d.push(v):a&&v()),v}function ed(t,e,s){const o=this.proxy,i=xe(t)?t.includes(".")?zl(o,t):()=>o[t]:t.bind(o,o);let n;D(e)?n=e:(n=e.handler,s=e);const r=ko(this),l=Fl(i,n.bind(o),s);return r(),l}function zl(t,e){const s=e.split(".");return()=>{let o=t;for(let i=0;i<s.length&&o;i++)o=o[s[i]];return o}}const td=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${rt(e)}Modifiers`]||t[`${_s(e)}Modifiers`];function sd(t,e,...s){if(t.isUnmounted)return;const o=t.vnode.props||ne;let i=s;const n=e.startsWith("update:"),r=n&&td(o,e.slice(7));r&&(r.trim&&(i=s.map(c=>xe(c)?c.trim():c)),r.number&&(i=s.map(Uo)));let l,a=o[l=ki(e)]||o[l=ki(rt(e))];!a&&n&&(a=o[l=ki(_s(e))]),a&&It(a,t,6,i);const d=o[l+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,It(d,t,6,i)}}function jl(t,e,s=!1){const o=e.emitsCache,i=o.get(t);if(i!==void 0)return i;const n=t.emits;let r={},l=!1;if(!D(t)){const a=d=>{const c=jl(d,e,!0);c&&(l=!0,$e(r,c))};!s&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!n&&!l?(he(t)&&o.set(t,null),null):(L(n)?n.forEach(a=>r[a]=null):$e(r,n),he(t)&&o.set(t,r),r)}function vi(t,e){return!t||!li(e)?!1:(e=e.slice(2).replace(/Once$/,""),Z(t,e[0].toLowerCase()+e.slice(1))||Z(t,_s(e))||Z(t,e))}function Ri(t){const{type:e,vnode:s,proxy:o,withProxy:i,propsOptions:[n],slots:r,attrs:l,emit:a,render:d,renderCache:c,props:f,data:v,setupState:x,ctx:S,inheritAttrs:T}=t,le=Go(t);let z,Q;try{if(s.shapeFlag&4){const V=i||o,ce=V;z=$t(d.call(ce,V,c,f,x,v,S)),Q=l}else{const V=e;z=$t(V.length>1?V(f,{attrs:l,slots:r,emit:a}):V(f,null)),Q=e.props?l:od(l)}}catch(V){co.length=0,hi(V,t,1),z=oe(Jt)}let ae=z;if(Q&&T!==!1){const V=Object.keys(Q),{shapeFlag:ce}=ae;V.length&&ce&7&&(n&&V.some(ln)&&(Q=id(Q,n)),ae=Bs(ae,Q,!1,!0))}return s.dirs&&(ae=Bs(ae,null,!1,!0),ae.dirs=ae.dirs?ae.dirs.concat(s.dirs):s.dirs),s.transition&&xn(ae,s.transition),z=ae,Go(le),z}const od=t=>{let e;for(const s in t)(s==="class"||s==="style"||li(s))&&((e||(e={}))[s]=t[s]);return e},id=(t,e)=>{const s={};for(const o in t)(!ln(o)||!(o.slice(9)in e))&&(s[o]=t[o]);return s};function nd(t,e,s){const{props:o,children:i,component:n}=t,{props:r,children:l,patchFlag:a}=e,d=n.emitsOptions;if(e.dirs||e.transition)return!0;if(s&&a>=0){if(a&1024)return!0;if(a&16)return o?tr(o,r,d):!!r;if(a&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const v=c[f];if(r[v]!==o[v]&&!vi(d,v))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:o===r?!1:o?r?tr(o,r,d):!0:!!r;return!1}function tr(t,e,s){const o=Object.keys(e);if(o.length!==Object.keys(t).length)return!0;for(let i=0;i<o.length;i++){const n=o[i];if(e[n]!==t[n]&&!vi(s,n))return!0}return!1}function rd({vnode:t,parent:e},s){for(;e;){const o=e.subTree;if(o.suspense&&o.suspense.activeBranch===t&&(o.el=t.el),o===t)(t=e.vnode).el=s,e=e.parent;else break}}const Hl=t=>t.__isSuspense;function ld(t,e){e&&e.pendingBranch?L(t)?e.effects.push(...t):e.effects.push(t):bc(t)}const We=Symbol.for("v-fgt"),bi=Symbol.for("v-txt"),Jt=Symbol.for("v-cmt"),Bi=Symbol.for("v-stc"),co=[];let et=null;function F(t=!1){co.push(et=t?null:[])}function ad(){co.pop(),et=co[co.length-1]||null}let go=1;function sr(t,e=!1){go+=t,t<0&&et&&e&&(et.hasOnce=!0)}function Nl(t){return t.dynamicChildren=go>0?et||Es:null,ad(),go>0&&et&&et.push(t),t}function N(t,e,s,o,i,n){return Nl(g(t,e,s,o,i,n,!0))}function Ji(t,e,s,o,i){return Nl(oe(t,e,s,o,i,!0))}function Ul(t){return t?t.__v_isVNode===!0:!1}function Xs(t,e){return t.type===e.type&&t.key===e.key}const ql=({key:t})=>t??null,jo=({ref:t,ref_key:e,ref_for:s})=>(typeof t=="number"&&(t=""+t),t!=null?xe(t)||Ve(t)||D(t)?{i:Qe,r:t,k:e,f:!!s}:t:null);function g(t,e=null,s=null,o=0,i=null,n=t===We?0:1,r=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ql(e),ref:e&&jo(e),scopeId:yl,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:o,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Qe};return l?(Sn(a,s),n&128&&t.normalize(a)):s&&(a.shapeFlag|=xe(s)?8:16),go>0&&!r&&et&&(a.patchFlag>0||n&6)&&a.patchFlag!==32&&et.push(a),a}const oe=cd;function cd(t,e=null,s=null,o=0,i=null,n=!1){if((!t||t===Pc)&&(t=Jt),Ul(t)){const l=Bs(t,e,!0);return s&&Sn(l,s),go>0&&!n&&et&&(l.shapeFlag&6?et[et.indexOf(t)]=l:et.push(l)),l.patchFlag=-2,l}if(xd(t)&&(t=t.__vccOpts),e){e=dd(e);let{class:l,style:a}=e;l&&!xe(l)&&(e.class=Rs(l)),he(a)&&(_n(a)&&!L(a)&&(a=$e({},a)),e.style=dn(a))}const r=xe(t)?1:Hl(t)?128:mc(t)?64:he(t)?4:D(t)?2:0;return g(t,e,s,o,i,r,n,!0)}function dd(t){return t?_n(t)||Pl(t)?$e({},t):t:null}function Bs(t,e,s=!1,o=!1){const{props:i,ref:n,patchFlag:r,children:l,transition:a}=t,d=e?ud(i||{},e):i,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&ql(d),ref:e&&e.ref?s&&n?L(n)?n.concat(jo(e)):[n,jo(e)]:jo(e):n,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==We?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Bs(t.ssContent),ssFallback:t.ssFallback&&Bs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&o&&xn(c,a.clone(c)),c}function ke(t=" ",e=0){return oe(bi,null,t,e)}function Ie(t="",e=!1){return e?(F(),Ji(Jt,null,t)):oe(Jt,null,t)}function $t(t){return t==null||typeof t=="boolean"?oe(Jt):L(t)?oe(We,null,t.slice()):Ul(t)?Wt(t):oe(bi,null,String(t))}function Wt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Bs(t)}function Sn(t,e){let s=0;const{shapeFlag:o}=t;if(e==null)e=null;else if(L(e))s=16;else if(typeof e=="object")if(o&65){const i=e.default;i&&(i._c&&(i._d=!1),Sn(t,i()),i._c&&(i._d=!0));return}else{s=32;const i=e._;!i&&!Pl(e)?e._ctx=Qe:i===3&&Qe&&(Qe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else D(e)?(e={default:e,_ctx:Qe},s=32):(e=String(e),o&64?(s=16,e=[ke(e)]):s=8);t.children=e,t.shapeFlag|=s}function ud(...t){const e={};for(let s=0;s<t.length;s++){const o=t[s];for(const i in o)if(i==="class")e.class!==o.class&&(e.class=Rs([e.class,o.class]));else if(i==="style")e.style=dn([e.style,o.style]);else if(li(i)){const n=e[i],r=o[i];r&&n!==r&&!(L(n)&&n.includes(r))&&(e[i]=n?[].concat(n,r):r)}else i!==""&&(e[i]=o[i])}return e}function wt(t,e,s,o=null){It(t,e,7,[s,o])}const hd=El();let pd=0;function fd(t,e,s){const o=t.type,i=(e?e.appContext:t.appContext)||hd,n={uid:pd++,vnode:t,type:o,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Da(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rl(o,i),emitsOptions:jl(o,i),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:o.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=e?e.root:n,n.emit=sd.bind(null,n),t.ce&&t.ce(n),n}let Re=null;const vd=()=>Re||Qe;let Jo,Xi;{const t=di(),e=(s,o)=>{let i;return(i=t[s])||(i=t[s]=[]),i.push(o),n=>{i.length>1?i.forEach(r=>r(n)):i[0](n)}};Jo=e("__VUE_INSTANCE_SETTERS__",s=>Re=s),Xi=e("__VUE_SSR_SETTERS__",s=>mo=s)}const ko=t=>{const e=Re;return Jo(t),t.scope.on(),()=>{t.scope.off(),Jo(e)}},or=()=>{Re&&Re.scope.off(),Jo(null)};function Wl(t){return t.vnode.shapeFlag&4}let mo=!1;function bd(t,e=!1,s=!1){e&&Xi(e);const{props:o,children:i}=t.vnode,n=Wl(t);Hc(t,o,n,e),Wc(t,i,s||e);const r=n?gd(t,e):void 0;return e&&Xi(!1),r}function gd(t,e){const s=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Rc);const{setup:o}=s;if(o){Ft();const i=t.setupContext=o.length>1?_d(t):null,n=ko(t),r=So(o,t,0,[t.props,i]),l=Wr(r);if(zt(),n(),(l||t.sp)&&!lo(t)&&xl(t),l){if(r.then(or,or),e)return r.then(a=>{ir(t,a,e)}).catch(a=>{hi(a,t,0)});t.asyncDep=r}else ir(t,r,e)}else Kl(t,e)}function ir(t,e,s){D(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:he(e)&&(t.setupState=fl(e)),Kl(t,s)}let nr;function Kl(t,e,s){const o=t.type;if(!t.render){if(!e&&nr&&!o.render){const i=o.template||wn(t).template;if(i){const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:l,compilerOptions:a}=o,d=$e($e({isCustomElement:n,delimiters:l},r),a);o.render=nr(i,d)}}t.render=o.render||dt}{const i=ko(t);Ft();try{Bc(t)}finally{zt(),i()}}}const md={get(t,e){return Te(t,"get",""),t[e]}};function _d(t){const e=s=>{t.exposed=s||{}};return{attrs:new Proxy(t.attrs,md),slots:t.slots,emit:t.emit,expose:e}}function gi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(fl(nc(t.exposed)),{get(e,s){if(s in e)return e[s];if(s in ao)return ao[s](t)},has(e,s){return s in e||s in ao}})):t.proxy}function yd(t,e=!0){return D(t)?t.displayName||t.name:t.name||e&&t.__name}function xd(t){return D(t)&&"__vccOpts"in t}const Ze=(t,e)=>uc(t,e,mo),wd="3.5.19";/**
* @vue/runtime-dom v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zi;const rr=typeof window<"u"&&window.trustedTypes;if(rr)try{Zi=rr.createPolicy("vue",{createHTML:t=>t})}catch{}const Gl=Zi?t=>Zi.createHTML(t):t=>t,Cd="http://www.w3.org/2000/svg",$d="http://www.w3.org/1998/Math/MathML",Bt=typeof document<"u"?document:null,lr=Bt&&Bt.createElement("template"),Sd={insert:(t,e,s)=>{e.insertBefore(t,s||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,s,o)=>{const i=e==="svg"?Bt.createElementNS(Cd,t):e==="mathml"?Bt.createElementNS($d,t):s?Bt.createElement(t,{is:s}):Bt.createElement(t);return t==="select"&&o&&o.multiple!=null&&i.setAttribute("multiple",o.multiple),i},createText:t=>Bt.createTextNode(t),createComment:t=>Bt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Bt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,s,o,i,n){const r=s?s.previousSibling:e.lastChild;if(i&&(i===n||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),s),!(i===n||!(i=i.nextSibling)););else{lr.innerHTML=Gl(o==="svg"?`<svg>${t}</svg>`:o==="mathml"?`<math>${t}</math>`:t);const l=lr.content;if(o==="svg"||o==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,s)}return[r?r.nextSibling:e.firstChild,s?s.previousSibling:e.lastChild]}},kd=Symbol("_vtc");function Id(t,e,s){const o=t[kd];o&&(e=(e?[e,...o]:[...o]).join(" ")),e==null?t.removeAttribute("class"):s?t.setAttribute("class",e):t.className=e}const ar=Symbol("_vod"),Ed=Symbol("_vsh"),Od=Symbol(""),Ad=/(^|;)\s*display\s*:/;function Pd(t,e,s){const o=t.style,i=xe(s);let n=!1;if(s&&!i){if(e)if(xe(e))for(const r of e.split(";")){const l=r.slice(0,r.indexOf(":")).trim();s[l]==null&&Ho(o,l,"")}else for(const r in e)s[r]==null&&Ho(o,r,"");for(const r in s)r==="display"&&(n=!0),Ho(o,r,s[r])}else if(i){if(e!==s){const r=o[Od];r&&(s+=";"+r),o.cssText=s,n=Ad.test(s)}}else e&&t.removeAttribute("style");ar in t&&(t[ar]=n?o.display:"",t[Ed]&&(o.display="none"))}const cr=/\s*!important$/;function Ho(t,e,s){if(L(s))s.forEach(o=>Ho(t,e,o));else if(s==null&&(s=""),e.startsWith("--"))t.setProperty(e,s);else{const o=Td(t,e);cr.test(s)?t.setProperty(_s(o),s.replace(cr,""),"important"):t[o]=s}}const dr=["Webkit","Moz","ms"],Vi={};function Td(t,e){const s=Vi[e];if(s)return s;let o=rt(e);if(o!=="filter"&&o in t)return Vi[e]=o;o=ci(o);for(let i=0;i<dr.length;i++){const n=dr[i]+o;if(n in t)return Vi[e]=n}return e}const ur="http://www.w3.org/1999/xlink";function hr(t,e,s,o,i,n=La(e)){o&&e.startsWith("xlink:")?s==null?t.removeAttributeNS(ur,e.slice(6,e.length)):t.setAttributeNS(ur,e,s):s==null||n&&!Jr(s)?t.removeAttribute(e):t.setAttribute(e,n?"":kt(s)?String(s):s)}function pr(t,e,s,o,i){if(e==="innerHTML"||e==="textContent"){s!=null&&(t[e]=e==="innerHTML"?Gl(s):s);return}const n=t.tagName;if(e==="value"&&n!=="PROGRESS"&&!n.includes("-")){const l=n==="OPTION"?t.getAttribute("value")||"":t.value,a=s==null?t.type==="checkbox"?"on":"":String(s);(l!==a||!("_value"in t))&&(t.value=a),s==null&&t.removeAttribute(e),t._value=s;return}let r=!1;if(s===""||s==null){const l=typeof t[e];l==="boolean"?s=Jr(s):s==null&&l==="string"?(s="",r=!0):l==="number"&&(s=0,r=!0)}try{t[e]=s}catch{}r&&t.removeAttribute(i||e)}function Mt(t,e,s,o){t.addEventListener(e,s,o)}function Rd(t,e,s,o){t.removeEventListener(e,s,o)}const fr=Symbol("_vei");function Bd(t,e,s,o,i=null){const n=t[fr]||(t[fr]={}),r=n[e];if(o&&r)r.value=o;else{const[l,a]=Vd(e);if(o){const d=n[e]=Dd(o,i);Mt(t,l,d,a)}else r&&(Rd(t,l,r,a),n[e]=void 0)}}const vr=/(?:Once|Passive|Capture)$/;function Vd(t){let e;if(vr.test(t)){e={};let o;for(;o=t.match(vr);)t=t.slice(0,t.length-o[0].length),e[o[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_s(t.slice(2)),e]}let Li=0;const Ld=Promise.resolve(),Md=()=>Li||(Ld.then(()=>Li=0),Li=Date.now());function Dd(t,e){const s=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=s.attached)return;It(Fd(o,s.value),e,5,[o])};return s.value=t,s.attached=Md(),s}function Fd(t,e){if(L(e)){const s=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{s.call(t),t._stopped=!0},e.map(o=>i=>!i._stopped&&o&&o(i))}else return e}const br=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,zd=(t,e,s,o,i,n)=>{const r=i==="svg";e==="class"?Id(t,o,r):e==="style"?Pd(t,s,o):li(e)?ln(e)||Bd(t,e,s,o,n):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):jd(t,e,o,r))?(pr(t,e,o),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&hr(t,e,o,r,n,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!xe(o))?pr(t,rt(e),o,n,e):(e==="true-value"?t._trueValue=o:e==="false-value"&&(t._falseValue=o),hr(t,e,o,r))};function jd(t,e,s,o){if(o)return!!(e==="innerHTML"||e==="textContent"||e in t&&br(e)&&D(s));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return br(e)&&xe(s)?!1:e in t}const Xt=t=>{const e=t.props["onUpdate:modelValue"]||!1;return L(e)?s=>Do(e,s):e};function Hd(t){t.target.composing=!0}function gr(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const nt=Symbol("_assign"),Tt={created(t,{modifiers:{lazy:e,trim:s,number:o}},i){t[nt]=Xt(i);const n=o||i.props&&i.props.type==="number";Mt(t,e?"change":"input",r=>{if(r.target.composing)return;let l=t.value;s&&(l=l.trim()),n&&(l=Uo(l)),t[nt](l)}),s&&Mt(t,"change",()=>{t.value=t.value.trim()}),e||(Mt(t,"compositionstart",Hd),Mt(t,"compositionend",gr),Mt(t,"change",gr))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:s,modifiers:{lazy:o,trim:i,number:n}},r){if(t[nt]=Xt(r),t.composing)return;const l=(n||t.type==="number")&&!/^0\d/.test(t.value)?Uo(t.value):t.value,a=e??"";l!==a&&(document.activeElement===t&&t.type!=="range"&&(o&&e===s||i&&t.value.trim()===a)||(t.value=a))}},Nd={deep:!0,created(t,e,s){t[nt]=Xt(s),Mt(t,"change",()=>{const o=t._modelValue,i=Vs(t),n=t.checked,r=t[nt];if(L(o)){const l=un(o,i),a=l!==-1;if(n&&!a)r(o.concat(i));else if(!n&&a){const d=[...o];d.splice(l,1),r(d)}}else if(zs(o)){const l=new Set(o);n?l.add(i):l.delete(i),r(l)}else r(Jl(t,n))})},mounted:mr,beforeUpdate(t,e,s){t[nt]=Xt(s),mr(t,e,s)}};function mr(t,{value:e,oldValue:s},o){t._modelValue=e;let i;if(L(e))i=un(e,o.props.value)>-1;else if(zs(e))i=e.has(o.props.value);else{if(e===s)return;i=vs(e,Jl(t,!0))}t.checked!==i&&(t.checked=i)}const _r={created(t,{value:e},s){t.checked=vs(e,s.props.value),t[nt]=Xt(s),Mt(t,"change",()=>{t[nt](Vs(t))})},beforeUpdate(t,{value:e,oldValue:s},o){t[nt]=Xt(o),e!==s&&(t.checked=vs(e,o.props.value))}},Yl={deep:!0,created(t,{value:e,modifiers:{number:s}},o){const i=zs(e);Mt(t,"change",()=>{const n=Array.prototype.filter.call(t.options,r=>r.selected).map(r=>s?Uo(Vs(r)):Vs(r));t[nt](t.multiple?i?new Set(n):n:n[0]),t._assigning=!0,bl(()=>{t._assigning=!1})}),t[nt]=Xt(o)},mounted(t,{value:e}){yr(t,e)},beforeUpdate(t,e,s){t[nt]=Xt(s)},updated(t,{value:e}){t._assigning||yr(t,e)}};function yr(t,e){const s=t.multiple,o=L(e);if(!(s&&!o&&!zs(e))){for(let i=0,n=t.options.length;i<n;i++){const r=t.options[i],l=Vs(r);if(s)if(o){const a=typeof l;a==="string"||a==="number"?r.selected=e.some(d=>String(d)===String(l)):r.selected=un(e,l)>-1}else r.selected=e.has(l);else if(vs(Vs(r),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!s&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Vs(t){return"_value"in t?t._value:t.value}function Jl(t,e){const s=e?"_trueValue":"_falseValue";return s in t?t[s]:e}const Ud=$e({patchProp:zd},Sd);let xr;function qd(){return xr||(xr=Gc(Ud))}const Wd=(...t)=>{const e=qd().createApp(...t),{mount:s}=e;return e.mount=o=>{const i=Gd(o);if(!i)return;const n=e._component;!D(n)&&!n.render&&!n.template&&(n.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const r=s(i,!1,Kd(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},e};function Kd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Gd(t){return xe(t)?document.querySelector(t):t}const Yd={class:"space-y-6 w-full"},Jd={class:"w-full"},Xd={class:"flex items-center mb-4 w-full"},Zd={key:0,class:"text-[var(--vscode-descriptionForeground)] italic p-4 text-center"},Qd={key:1,class:"bg-[var(--vscode-textBlockQuote-background)] p-4 rounded border-l-4 border-[var(--vscode-textBlockQuote-border)]"},eu={key:0,class:"mb-4"},tu={class:"text-sm font-medium mb-2 text-[var(--vscode-descriptionForeground)] text-right"},su={class:"flex-1"},ou={class:"font-medium"},iu={class:"text-sm text-[var(--vscode-descriptionForeground)] ml-2"},nu={class:"flex space-x-2"},ru=["onClick"],lu=["onClick","disabled"],au={key:0},cu=["onClick"],du={key:1},uu={class:"text-sm font-medium mb-2 text-[var(--vscode-descriptionForeground)] text-right"},hu={class:"flex-1"},pu={class:"font-medium"},fu={class:"text-sm text-[var(--vscode-descriptionForeground)] ml-2"},vu={class:"flex space-x-2"},bu=["onClick"],gu=["onClick","disabled"],mu={key:0},_u=["onClick"],yu={key:0,class:"border border-[var(--vscode-widget-border)] rounded p-6 bg-[var(--vscode-textBlockQuote-background)]"},xu={class:"text-lg font-semibold mb-4"},wu={class:"space-y-4"},Cu={class:"grid grid-cols-2 gap-4"},$u={class:"grid grid-cols-2 gap-4"},Su={class:"border-t pt-4"},ku={class:"flex space-x-4"},Iu={class:"flex items-center space-x-2 cursor-pointer"},Eu=["disabled"],Ou={class:"flex items-center space-x-2 cursor-pointer"},Au=["disabled"],Pu={class:"text-xs text-[var(--vscode-descriptionForeground)] mt-2"},Tu={key:0},Ru={key:1},Bu={key:0,class:"border-t pt-4"},Vu={class:"grid grid-cols-2 gap-4"},Lu={class:"mt-4"},Mu={key:1,class:"border-t pt-4"},Du={class:"grid grid-cols-2 gap-4"},Fu={class:"mt-4"},zu={class:"flex items-center space-x-2"},ju={class:"text-xs bg-[var(--vscode-textCodeBlock-background)] p-2 rounded"},Hu={class:"flex space-x-3"},Nu=pi({__name:"ConfigurationTab",props:{configurations:{},showForm:{type:Boolean},editingIndex:{},currentConfig:{},isLoading:{type:Boolean},loadingConfigIndex:{}},emits:["create-new","edit-config","execute-config","delete-config","save-config","cancel-config","type-change"],setup(t,{emit:e}){const s=t,o=Ze(()=>s.configurations.filter(l=>l.saveLocation==="user").sort((l,a)=>l.type!==a.type?l.type==="CICS"?-1:a.type==="CICS"?1:0:l.name.localeCompare(a.name))),i=Ze(()=>s.configurations.filter(l=>l.saveLocation==="workspace").sort((l,a)=>l.type!==a.type?l.type==="CICS"?-1:a.type==="CICS"?1:0:l.name.localeCompare(a.name))),n=Ze(()=>{const l=s.currentConfig.name,a=s.currentConfig.type;return!!(l&&l.trim()&&a&&a.trim())}),r=l=>s.configurations.findIndex(a=>a.name===l.name&&a.type===l.type&&a.saveLocation===l.saveLocation);return(l,a)=>{const d=St("vscode-button"),c=St("vscode-progress-ring"),f=St("vscode-divider");return F(),N("div",Yd,[g("div",Jd,[g("div",Xd,[a[18]||(a[18]=g("h3",{class:"text-lg font-semibold"},"Configurations",-1)),oe(d,{onClick:a[0]||(a[0]=v=>l.$emit("create-new")),appearance:"primary",class:"ml-auto"},{default:Xe(()=>[...a[17]||(a[17]=[ke(" ＋ Configuration ",-1)])]),_:1})]),l.configurations.length===0?(F(),N("div",Zd," No configurations yet. Create your first configuration above. ")):Ie("",!0),l.configurations.length>0?(F(),N("div",Qd,[a[19]||(a[19]=g("h4",{class:"font-semibold mb-3"},"Existing Configurations",-1)),o.value.length>0?(F(),N("div",eu,[g("div",tu," User Settings ("+Y(o.value.length)+") ",1),(F(!0),N(We,null,bo(o.value,(v,x)=>(F(),N("div",{key:`user-${x}`,class:"flex items-center justify-between p-2 mb-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] rounded text-left"},[g("div",su,[g("span",ou,Y(v.name),1),g("span",iu,"("+Y(v.type)+")",1)]),g("div",nu,[g("button",{onClick:S=>l.$emit("edit-config",r(v)),class:"p-1 hover:bg-[var(--vscode-toolbar-hoverBackground)] rounded",title:"Edit configuration"}," ✏️ ",8,ru),g("button",{onClick:S=>l.$emit("execute-config",v),class:"p-1 hover:bg-[var(--vscode-toolbar-hoverBackground)] rounded",title:"Execute injection",disabled:l.isLoading},[l.loadingConfigIndex!==r(v)?(F(),N("span",au,"▶️")):(F(),Ji(c,{key:1,style:{width:"14px",height:"14px"}}))],8,lu),g("button",{onClick:S=>l.$emit("delete-config",r(v)),class:"p-1 hover:bg-[var(--vscode-toolbar-hoverBackground)] rounded",title:"Delete configuration"}," 🗑️ ",8,cu)])]))),128))])):Ie("",!0),i.value.length>0?(F(),N("div",du,[g("div",uu," Workspace Settings ("+Y(i.value.length)+") ",1),(F(!0),N(We,null,bo(i.value,(v,x)=>(F(),N("div",{key:`workspace-${x}`,class:"flex items-center justify-between p-2 mb-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] rounded text-left"},[g("div",hu,[g("span",pu,Y(v.name),1),g("span",fu,"("+Y(v.type)+")",1)]),g("div",vu,[g("button",{onClick:S=>l.$emit("edit-config",r(v)),class:"p-1 hover:bg-[var(--vscode-toolbar-hoverBackground)] rounded",title:"Edit configuration"}," ✏️ ",8,bu),g("button",{onClick:S=>l.$emit("execute-config",v),class:"p-1 hover:bg-[var(--vscode-toolbar-hoverBackground)] rounded",title:"Execute injection",disabled:l.isLoading},[l.loadingConfigIndex!==r(v)?(F(),N("span",mu,"▶️")):(F(),Ji(c,{key:1,style:{width:"14px",height:"14px"}}))],8,gu),g("button",{onClick:S=>l.$emit("delete-config",r(v)),class:"p-1 hover:bg-[var(--vscode-toolbar-hoverBackground)] rounded",title:"Delete configuration"}," 🗑️ ",8,_u)])]))),128))])):Ie("",!0)])):Ie("",!0)]),l.showForm||l.editingIndex!==-1?(F(),N("div",yu,[g("h3",xu,Y(l.editingIndex!==-1?"Edit Configuration":"New Configuration"),1),g("div",wu,[g("div",Cu,[g("div",null,[a[20]||(a[20]=g("label",{class:"block text-sm font-medium mb-2"},"Name *",-1)),Ue(g("input",{"onUpdate:modelValue":a[1]||(a[1]=v=>l.currentConfig.name=v),type:"text",placeholder:"Configuration name",class:"w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)]"},null,512),[[Tt,l.currentConfig.name]])]),g("div",null,[a[22]||(a[22]=g("label",{class:"block text-sm font-medium mb-2"},"Type *",-1)),Ue(g("select",{"onUpdate:modelValue":a[2]||(a[2]=v=>l.currentConfig.type=v),onChange:a[3]||(a[3]=v=>l.$emit("type-change")),class:"w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded"},[...a[21]||(a[21]=[g("option",{value:"CICS"},"CICS",-1),g("option",{value:"IMS"},"IMS",-1)])],544),[[Yl,l.currentConfig.type]])])]),g("div",null,[a[23]||(a[23]=g("label",{class:"block text-sm font-medium mb-2"},"Transaction Name",-1)),Ue(g("input",{"onUpdate:modelValue":a[4]||(a[4]=v=>l.currentConfig.transactionName=v),type:"text",placeholder:"Transaction name",class:"w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)]"},null,512),[[Tt,l.currentConfig.transactionName]])]),g("div",$u,[g("div",null,[a[24]||(a[24]=g("label",{class:"block text-sm font-medium mb-2"},"Comm Area In",-1)),Ue(g("textarea",{"onUpdate:modelValue":a[5]||(a[5]=v=>l.currentConfig.commAreaIn=v),rows:"4",placeholder:"Input communication area",class:"w-full px-3 py-2 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)] font-mono text-sm resize-y"},null,512),[[Tt,l.currentConfig.commAreaIn]])]),g("div",null,[a[25]||(a[25]=g("label",{class:"block text-sm font-medium mb-2"},"Comm Area Out",-1)),Ue(g("textarea",{"onUpdate:modelValue":a[6]||(a[6]=v=>l.currentConfig.commAreaOut=v),rows:"4",placeholder:"Output communication area",class:"w-full px-3 py-2 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)] font-mono text-sm resize-y"},null,512),[[Tt,l.currentConfig.commAreaOut]])])]),g("div",Su,[a[26]||(a[26]=g("h4",{class:"font-medium mb-3"},"Save Location",-1)),g("div",ku,[g("label",Iu,[Ue(g("input",{type:"radio","onUpdate:modelValue":a[7]||(a[7]=v=>l.currentConfig.saveLocation=v),value:"workspace",disabled:l.editingIndex!==-1,class:"text-[var(--vscode-checkbox-selectBackground)]"},null,8,Eu),[[_r,l.currentConfig.saveLocation]]),g("span",{class:Rs(["text-sm",l.editingIndex!==-1?"text-[var(--vscode-descriptionForeground)]":""])},"Workspace Settings",2)]),g("label",Ou,[Ue(g("input",{type:"radio","onUpdate:modelValue":a[8]||(a[8]=v=>l.currentConfig.saveLocation=v),value:"user",disabled:l.editingIndex!==-1,class:"text-[var(--vscode-checkbox-selectBackground)]"},null,8,Au),[[_r,l.currentConfig.saveLocation]]),g("span",{class:Rs(["text-sm",l.editingIndex!==-1?"text-[var(--vscode-descriptionForeground)]":""])},"User Settings",2)])]),g("p",Pu,[l.editingIndex!==-1?(F(),N("span",Tu,"Save location cannot be changed when editing an existing configuration.")):(F(),N("span",Ru,"Workspace settings are specific to this project, User settings are global to all projects."))])]),l.currentConfig.type==="CICS"?(F(),N("div",Bu,[a[30]||(a[30]=g("h4",{class:"font-medium mb-3"},"CICS Specific",-1)),g("div",Vu,[g("div",null,[a[27]||(a[27]=g("label",{class:"block text-sm font-medium mb-2"},"CICS Region",-1)),Ue(g("input",{"onUpdate:modelValue":a[9]||(a[9]=v=>l.currentConfig.cicsRegion=v),type:"text",placeholder:"CICS region name",class:"w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)]"},null,512),[[Tt,l.currentConfig.cicsRegion]])]),g("div",null,[a[28]||(a[28]=g("label",{class:"block text-sm font-medium mb-2"},"Program Name",-1)),Ue(g("input",{"onUpdate:modelValue":a[10]||(a[10]=v=>l.currentConfig.programName=v),type:"text",placeholder:"Program name",class:"w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)]"},null,512),[[Tt,l.currentConfig.programName]])])]),g("div",Lu,[a[29]||(a[29]=g("label",{class:"block text-sm font-medium mb-2"},"Comm Area Length",-1)),Ue(g("input",{"onUpdate:modelValue":a[11]||(a[11]=v=>l.currentConfig.commAreaLength=v),type:"number",placeholder:"Length in bytes",class:"w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)]"},null,512),[[Tt,l.currentConfig.commAreaLength,void 0,{number:!0}]])])])):Ie("",!0),l.currentConfig.type==="IMS"?(F(),N("div",Mu,[a[34]||(a[34]=g("h4",{class:"font-medium mb-3"},"IMS Specific",-1)),g("div",Du,[g("div",null,[a[31]||(a[31]=g("label",{class:"block text-sm font-medium mb-2"},"IMS Region Name",-1)),Ue(g("input",{"onUpdate:modelValue":a[12]||(a[12]=v=>l.currentConfig.imsRegionName=v),type:"text",placeholder:"IMS region name",class:"w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)]"},null,512),[[Tt,l.currentConfig.imsRegionName]])]),g("div",null,[a[32]||(a[32]=g("label",{class:"block text-sm font-medium mb-2"},"Message Type",-1)),Ue(g("input",{"onUpdate:modelValue":a[13]||(a[13]=v=>l.currentConfig.messageType=v),type:"text",placeholder:"Message type",class:"w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)]"},null,512),[[Tt,l.currentConfig.messageType]])])]),g("div",Fu,[g("label",zu,[Ue(g("input",{type:"checkbox","onUpdate:modelValue":a[14]||(a[14]=v=>l.currentConfig.testWithAnswer=v),class:"rounded"},null,512),[[Nd,l.currentConfig.testWithAnswer]]),a[33]||(a[33]=g("span",{class:"text-sm font-medium"},"Test with Answer",-1))])])])):Ie("",!0),g("div",ju,' Debug: name="'+Y(l.currentConfig.name)+'", type="'+Y(l.currentConfig.type)+'", saveLocation="'+Y(l.currentConfig.saveLocation)+'", valid='+Y(n.value),1),oe(f),g("div",Hu,[oe(d,{onClick:a[15]||(a[15]=v=>l.$emit("save-config")),appearance:"primary",disabled:!n.value},{default:Xe(()=>[ke(Y(l.editingIndex!==-1?"Update":"Save")+" Configuration ",1)]),_:1},8,["disabled"]),oe(d,{onClick:a[16]||(a[16]=v=>l.$emit("cancel-config")),appearance:"secondary"},{default:Xe(()=>[...a[35]||(a[35]=[ke(" Cancel ",-1)])]),_:1})])])])):Ie("",!0)])}}});const Uu=(t,e)=>{const s=t.__vccOpts||t;for(const[o,i]of e)s[o]=i;return s},qu=Uu(Nu,[["__scopeId","data-v-be8b11f0"]]),Wu={class:"space-y-4 min-h-[400px] w-full"},Ku={class:"bg-[var(--vscode-textBlockQuote-background)] p-4 rounded border-l-4 border-[var(--vscode-textBlockQuote-border)] h-[80px] w-full"},Gu=["label"],Yu=["value"],Ju=["label"],Xu=["value"],Zu={class:"bg-[var(--vscode-textBlockQuote-background)] p-4 rounded border-l-4 border-[var(--vscode-textBlockQuote-border)] min-h-[200px] w-full"},Qu={key:0,class:"text-[var(--vscode-descriptionForeground)] italic flex items-center justify-center h-[150px]"},eh={key:1,class:"space-y-3"},th={class:"grid grid-cols-2 gap-4 text-sm h-[80px]"},sh={class:"space-y-1"},oh={class:"space-y-1"},ih={class:"h-4"},nh={key:0},rh={key:1},lh={class:"h-4"},ah={key:0},ch={key:1},dh={class:"border-t pt-2"},uh={class:"grid grid-cols-2 gap-4 text-xs h-[60px]"},hh={class:"bg-[var(--vscode-textCodeBlock-background)] p-1 rounded font-mono text-xs overflow-y-auto h-[40px]"},ph={class:"bg-[var(--vscode-textCodeBlock-background)] p-1 rounded font-mono text-xs overflow-y-auto h-[40px]"},fh={class:"h-[40px] flex items-center space-x-3 w-full"},vh={class:"h-[30px] flex items-center w-full"},bh={key:0,class:"flex items-center space-x-2"},gh=pi({__name:"InjectionTab",props:{configurations:{},selectedConfigurationIndex:{},isLoading:{type:Boolean}},emits:["selection-changed","execute-injection","test-configuration"],setup(t,{emit:e}){const s=t,o=ct(s.selectedConfigurationIndex),i=Ze(()=>s.configurations.filter(d=>d.saveLocation==="user").sort((d,c)=>d.type!==c.type?d.type==="CICS"?-1:c.type==="CICS"?1:0:d.name.localeCompare(c.name))),n=Ze(()=>s.configurations.filter(d=>d.saveLocation==="workspace").sort((d,c)=>d.type!==c.type?d.type==="CICS"?-1:c.type==="CICS"?1:0:d.name.localeCompare(c.name))),r=Ze(()=>{const d=parseInt(o.value);return d>=0?s.configurations[d]:null}),l=Ze(()=>r.value!==null&&!s.isLoading),a=d=>s.configurations.findIndex(c=>c.name===d.name&&c.type===d.type&&c.saveLocation===d.saveLocation);return(d,c)=>{const f=St("vscode-divider"),v=St("vscode-button"),x=St("vscode-progress-ring");return F(),N("div",Wu,[g("div",Ku,[c[5]||(c[5]=g("h3",{class:"font-semibold mb-2"},"Select Configuration",-1)),Ue(g("select",{"onUpdate:modelValue":c[0]||(c[0]=S=>o.value=S),class:"w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded h-[36px]",size:"1",onChange:c[1]||(c[1]=S=>d.$emit("selection-changed",o.value))},[c[4]||(c[4]=g("option",{value:"-1"},"Select a configuration...",-1)),i.value.length>0?(F(),N("optgroup",{key:0,label:` User Settings (${i.value.length}) `,class:"text-right"},[(F(!0),N(We,null,bo(i.value,(S,T)=>(F(),N("option",{key:`user-${T}`,value:a(S).toString(),class:"text-left"},Y(S.name)+" ("+Y(S.type)+") ",9,Yu))),128))],8,Gu)):Ie("",!0),n.value.length>0?(F(),N("optgroup",{key:1,label:` Workspace Settings (${n.value.length}) `,class:"text-right"},[(F(!0),N(We,null,bo(n.value,(S,T)=>(F(),N("option",{key:`workspace-${T}`,value:a(S).toString(),class:"text-left"},Y(S.name)+" ("+Y(S.type)+") ",9,Xu))),128))],8,Ju)):Ie("",!0)],544),[[Yl,o.value]])]),g("div",Zu,[c[16]||(c[16]=g("h3",{class:"font-semibold mb-2"},"Selected Configuration",-1)),r.value?Ie("",!0):(F(),N("div",Qu," No configuration selected. Please select one from the dropdown above. ")),r.value?(F(),N("div",eh,[g("div",th,[g("div",sh,[g("div",null,[c[6]||(c[6]=g("strong",null,"Name:",-1)),ke(" "+Y(r.value.name),1)]),g("div",null,[c[7]||(c[7]=g("strong",null,"Type:",-1)),ke(" "+Y(r.value.type),1)]),g("div",null,[c[8]||(c[8]=g("strong",null,"Save Location:",-1)),ke(" "+Y(r.value.saveLocation==="workspace"?"Workspace":"User"),1)])]),g("div",oh,[g("div",null,[c[9]||(c[9]=g("strong",null,"Transaction:",-1)),ke(" "+Y(r.value.transactionName||"N/A"),1)]),g("div",ih,[r.value.type==="CICS"?(F(),N("span",nh,[c[10]||(c[10]=g("strong",null,"Program:",-1)),ke(" "+Y(r.value.programName||"N/A"),1)])):Ie("",!0),r.value.type==="IMS"?(F(),N("span",rh,[c[11]||(c[11]=g("strong",null,"IMS Region:",-1)),ke(" "+Y(r.value.imsRegionName||"N/A"),1)])):Ie("",!0)]),g("div",lh,[r.value.type==="CICS"?(F(),N("span",ah,[c[12]||(c[12]=g("strong",null,"CICS Region:",-1)),ke(" "+Y(r.value.cicsRegion||"N/A"),1)])):Ie("",!0),r.value.type==="IMS"?(F(),N("span",ch,[c[13]||(c[13]=g("strong",null,"Message Type:",-1)),ke(" "+Y(r.value.messageType||"N/A"),1)])):Ie("",!0)])])]),g("div",dh,[g("div",uh,[g("div",null,[c[14]||(c[14]=g("div",{class:"font-medium mb-1"},"Comm Area In:",-1)),g("div",hh,Y(r.value.commAreaIn||"Not set"),1)]),g("div",null,[c[15]||(c[15]=g("div",{class:"font-medium mb-1"},"Comm Area Out:",-1)),g("div",ph,Y(r.value.commAreaOut||"Not set"),1)])])])])):Ie("",!0)]),oe(f),g("div",fh,[oe(v,{onClick:c[2]||(c[2]=S=>d.$emit("execute-injection")),appearance:"primary",disabled:!l.value||d.isLoading},{default:Xe(()=>[...c[17]||(c[17]=[ke(" Execute Injection ",-1)])]),_:1},8,["disabled"]),oe(v,{onClick:c[3]||(c[3]=S=>d.$emit("test-configuration")),appearance:"secondary",disabled:!r.value||d.isLoading},{default:Xe(()=>[...c[18]||(c[18]=[ke(" Test Configuration ",-1)])]),_:1},8,["disabled"])]),g("div",vh,[d.isLoading?(F(),N("div",bh,[oe(x),c[19]||(c[19]=g("span",null,"Processing...",-1))])):Ie("",!0)])])}}}),mh={class:"space-y-4 w-full"},_h={key:0,class:"text-[var(--vscode-descriptionForeground)] italic"},yh={class:"flex justify-between items-center mb-2"},xh={class:"font-semibold"},wh={class:"text-sm mb-2"},Ch={class:"bg-[var(--vscode-textCodeBlock-background)] p-2 rounded text-xs overflow-x-auto"},$h=pi({__name:"ResultsTab",props:{results:{}},setup(t){return(e,s)=>(F(),N("div",mh,[s[0]||(s[0]=g("h3",{class:"text-lg font-semibold"},"Execution Results",-1)),e.results.length===0?(F(),N("div",_h," No results yet. Execute an injection to see results here. ")):Ie("",!0),(F(!0),N(We,null,bo(e.results,(o,i)=>(F(),N("div",{key:i,class:"border border-[var(--vscode-widget-border)] rounded p-4"},[g("div",yh,[g("span",xh,Y(o.timestamp),1),g("span",{class:Rs(["px-2 py-1 rounded text-xs",o.success?"bg-green-600 text-white":"bg-red-600 text-white"])},Y(o.success?"Success":"Failed"),3)]),g("p",wh,Y(o.type)+" - "+Y(o.configName),1),g("pre",Ch,Y(o.message),1)]))),128))]))}}),Sh={class:"min-h-screen bg-[var(--vscode-editor-background)] text-[var(--vscode-editor-foreground)]"},kh={class:"container mx-auto p-6 min-w-[800px] overflow-x-auto"},Ih=pi({__name:"App",setup(t){const e=ct([]),s=ct(!1),o=ct(-1),i=ct("-1"),n=ct([]),r=ct(!1),l=ct(-1),a=ct(0),d=ct({name:"",type:"CICS",commAreaIn:"",commAreaOut:"",transactionName:"",saveLocation:"workspace",cicsRegion:"",programName:"",commAreaLength:0,imsRegionName:"",messageType:"",testWithAnswer:!1}),c=ct(null),f=Ze(()=>{const $=parseInt(i.value);return $>=0?e.value[$]:null}),v=Ze(()=>{const $=d.value.name,A=d.value.type;return!!($&&$.trim()&&A&&A.trim())});Ze(()=>f.value!==null),Ze(()=>e.value.filter($=>$.saveLocation==="user").sort(($,A)=>$.type!==A.type?$.type==="CICS"?-1:A.type==="CICS"?1:0:$.name.localeCompare(A.name))),Ze(()=>e.value.filter($=>$.saveLocation==="workspace").sort(($,A)=>$.type!==A.type?$.type==="CICS"?-1:A.type==="CICS"?1:0:$.name.localeCompare(A.name)));const x=$=>e.value.findIndex(A=>A.name===$.name&&A.type===$.type&&A.saveLocation===$.saveLocation),S=window.acquireVsCodeApi(),T=()=>{d.value={name:"",type:"CICS",commAreaIn:"",commAreaOut:"",transactionName:"",saveLocation:"workspace",cicsRegion:"",programName:"",commAreaLength:0,imsRegionName:"",messageType:"",testWithAnswer:!1}},le=()=>{d.value.type==="CICS"?(d.value.imsRegionName="",d.value.messageType="",d.value.testWithAnswer=!1):d.value.type==="IMS"&&(d.value.cicsRegion="",d.value.programName="",d.value.commAreaLength=0)},z=()=>{if(!v.value)return;const $=ce(d.value);o.value!==-1?(e.value[o.value]=$,S.postMessage({command:"updateConfiguration",data:{originalConfig:ce(c.value),updatedConfig:$,location:$.saveLocation,configIndex:o.value}}),o.value=-1,c.value=null,s.value=!1):(e.value.push($),st($),s.value=!1),T()},Q=$=>{o.value=$,d.value={...e.value[$]},c.value={...e.value[$]},s.value=!1},ae=async $=>{const A=e.value[$];if(e.value.splice($,1),i.value===$.toString()&&(i.value="-1"),A){const De=e.value.filter(fe=>fe.saveLocation===A.saveLocation);S.postMessage({command:"saveAllConfigurations",data:{configurations:De,location:A.saveLocation}})}},V=()=>{s.value=!1,o.value=-1,c.value=null,T()},ce=$=>{try{const A={name:$.name,type:$.type,commAreaIn:$.commAreaIn||"",commAreaOut:$.commAreaOut||"",transactionName:$.transactionName||"",saveLocation:$.saveLocation};return $.type==="CICS"?($.cicsRegion!==void 0&&$.cicsRegion!==""&&(A.cicsRegion=$.cicsRegion),$.programName!==void 0&&$.programName!==""&&(A.programName=$.programName),$.commAreaLength!==void 0&&$.commAreaLength!==0&&(A.commAreaLength=$.commAreaLength)):$.type==="IMS"&&($.imsRegionName!==void 0&&$.imsRegionName!==""&&(A.imsRegionName=$.imsRegionName),$.messageType!==void 0&&$.messageType!==""&&(A.messageType=$.messageType),$.testWithAnswer!==void 0&&(A.testWithAnswer=$.testWithAnswer)),A}catch(A){return console.error("Error cleaning configuration:",A),{}}},st=$=>{console.log("Saving single configuration to VSCode:",$);const A=ce($);console.log("Cleaned configuration:",A),S.postMessage({command:"saveConfiguration",data:{configuration:A,location:$.saveLocation}})},He=()=>{S.postMessage({command:"loadAllConfigurations"})},ot=async $=>{var De;const A=x($);l.value=A,r.value=!0;try{await new Promise(J=>setTimeout(J,2e3));const fe={timestamp:new Date().toLocaleString(),success:Math.random()>.3,type:$.type,configName:$.name,message:`${$.type} injection executed for ${$.name}
Transaction: ${$.transactionName}
Comm Area In: ${(De=$.commAreaIn)==null?void 0:De.substring(0,100)}...`};n.value.unshift(fe),S.postMessage({command:"injectionResult",data:fe}),is()}catch(fe){const J={timestamp:new Date().toLocaleString(),success:!1,type:$.type,configName:$.name,message:`Injection failed: ${fe}`};n.value.unshift(J)}finally{r.value=!1,l.value=-1}},Ut=async()=>{var $;if(f.value){r.value=!0;try{await new Promise(De=>setTimeout(De,2e3));const A={timestamp:new Date().toLocaleString(),success:Math.random()>.3,type:f.value.type,configName:f.value.name,message:`${f.value.type} injection executed for ${f.value.name}
Transaction: ${f.value.transactionName}
Comm Area In: ${($=f.value.commAreaIn)==null?void 0:$.substring(0,100)}...`};n.value.unshift(A),S.postMessage({command:"injectionResult",data:A}),is()}catch(A){const De={timestamp:new Date().toLocaleString(),success:!1,type:f.value.type,configName:f.value.name,message:`Injection failed: ${A}`};n.value.unshift(De)}finally{r.value=!1}}},At=()=>{f.value&&S.postMessage({command:"testConfiguration",data:ce(f.value)})},os=$=>{a.value=$.detail.selectedIndex},is=()=>{a.value=2};return window.addEventListener("message",$=>{const A=$.data;switch(A.command){case"configurationsLoaded":A.data&&(e.value=A.data);break}}),zo(()=>d.value.type,$=>{le()}),$l(()=>{He()}),($,A)=>{const De=St("vscode-tab-header"),fe=St("vscode-divider"),J=St("vscode-tab-panel"),se=St("vscode-tabs");return F(),N("div",Sh,[g("div",kh,[A[8]||(A[8]=g("header",{class:"mb-6"},[g("h1",{class:"text-2xl font-bold mb-2"},"Injector"),g("p",{class:"text-[var(--vscode-descriptionForeground)]"}," CICS/IMS Configuration Management and Injection Tool ")],-1)),oe(se,{"selected-index":a.value,onVscTabsSelect:os,panel:""},{default:Xe(()=>[oe(De,{slot:"header",panel:""},{default:Xe(()=>[...A[2]||(A[2]=[ke("Configuration",-1)])]),_:1}),oe(De,{slot:"header",panel:""},{default:Xe(()=>[...A[3]||(A[3]=[ke("Injection",-1)])]),_:1}),oe(De,{slot:"header",panel:""},{default:Xe(()=>[...A[4]||(A[4]=[ke("Results",-1)])]),_:1}),oe(fe),oe(J,{panel:""},{default:Xe(()=>[A[5]||(A[5]=g("br",null,null,-1)),oe(qu,{configurations:e.value,"show-form":s.value,"editing-index":o.value,"current-config":d.value,"is-loading":r.value,"loading-config-index":l.value,onCreateNew:A[0]||(A[0]=_t=>s.value=!0),onEditConfig:Q,onExecuteConfig:ot,onDeleteConfig:ae,onSaveConfig:z,onCancelConfig:V,onTypeChange:le},null,8,["configurations","show-form","editing-index","current-config","is-loading","loading-config-index"])]),_:1}),oe(J,{panel:""},{default:Xe(()=>[A[6]||(A[6]=g("br",null,null,-1)),oe(gh,{configurations:e.value,"selected-configuration-index":i.value,"is-loading":r.value,onSelectionChanged:A[1]||(A[1]=_t=>i.value=_t),onExecuteInjection:Ut,onTestConfiguration:At},null,8,["configurations","selected-configuration-index","is-loading"])]),_:1}),oe(J,{panel:""},{default:Xe(()=>[A[7]||(A[7]=g("br",null,null,-1)),oe($h,{results:n.value},null,8,["results"])]),_:1})]),_:1},8,["selected-index"])])])}}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const No=globalThis,kn=No.ShadowRoot&&(No.ShadyCSS===void 0||No.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,In=Symbol(),wr=new WeakMap;let Xl=class{constructor(e,s,o){if(this._$cssResult$=!0,o!==In)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(kn&&e===void 0){const o=s!==void 0&&s.length===1;o&&(e=wr.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&wr.set(s,e))}return e}toString(){return this.cssText}};const mi=t=>new Xl(typeof t=="string"?t:t+"",void 0,In),H=(t,...e)=>{const s=t.length===1?t[0]:e.reduce((o,i,n)=>o+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new Xl(s,t,In)},Eh=(t,e)=>{if(kn)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of e){const o=document.createElement("style"),i=No.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=s.cssText,t.appendChild(o)}},Cr=kn?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(const o of e.cssRules)s+=o.cssText;return mi(s)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Oh,defineProperty:Ah,getOwnPropertyDescriptor:Ph,getOwnPropertyNames:Th,getOwnPropertySymbols:Rh,getPrototypeOf:Bh}=Object,Gt=globalThis,$r=Gt.trustedTypes,Vh=$r?$r.emptyScript:"",Mi=Gt.reactiveElementPolyfillSupport,uo=(t,e)=>t,Xo={toAttribute(t,e){switch(e){case Boolean:t=t?Vh:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},En=(t,e)=>!Oh(t,e),Sr={attribute:!0,type:String,converter:Xo,reflect:!1,useDefault:!1,hasChanged:En};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Gt.litPropertyMetadata??(Gt.litPropertyMetadata=new WeakMap);let Is=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=Sr){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(e,s),!s.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,s);i!==void 0&&Ah(this.prototype,e,i)}}static getPropertyDescriptor(e,s,o){const{get:i,set:n}=Ph(this.prototype,e)??{get(){return this[s]},set(r){this[s]=r}};return{get:i,set(r){const l=i==null?void 0:i.call(this);n==null||n.call(this,r),this.requestUpdate(e,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Sr}static _$Ei(){if(this.hasOwnProperty(uo("elementProperties")))return;const e=Bh(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(uo("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(uo("properties"))){const s=this.properties,o=[...Th(s),...Rh(s)];for(const i of o)this.createProperty(i,s[i])}const e=this[Symbol.metadata];if(e!==null){const s=litPropertyMetadata.get(e);if(s!==void 0)for(const[o,i]of s)this.elementProperties.set(o,i)}this._$Eh=new Map;for(const[s,o]of this.elementProperties){const i=this._$Eu(s,o);i!==void 0&&this._$Eh.set(i,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const i of o)s.unshift(Cr(i))}else e!==void 0&&s.push(Cr(e));return s}static _$Eu(e,s){const o=s.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(s=>s(this))}addController(e){var s;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var s;(s=this._$EO)==null||s.delete(e)}_$E_(){const e=new Map,s=this.constructor.elementProperties;for(const o of s.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Eh(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(s=>{var o;return(o=s.hostConnected)==null?void 0:o.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(s=>{var o;return(o=s.hostDisconnected)==null?void 0:o.call(s)})}attributeChangedCallback(e,s,o){this._$AK(e,o)}_$ET(e,s){var n;const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(i!==void 0&&o.reflect===!0){const r=(((n=o.converter)==null?void 0:n.toAttribute)!==void 0?o.converter:Xo).toAttribute(s,o.type);this._$Em=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,s){var n,r;const o=this.constructor,i=o._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const l=o.getPropertyOptions(i),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((n=l.converter)==null?void 0:n.fromAttribute)!==void 0?l.converter:Xo;this._$Em=i;const d=a.fromAttribute(s,l.type);this[i]=d??((r=this._$Ej)==null?void 0:r.get(i))??d,this._$Em=null}}requestUpdate(e,s,o){var i;if(e!==void 0){const n=this.constructor,r=this[e];if(o??(o=n.getPropertyOptions(e)),!((o.hasChanged??En)(r,s)||o.useDefault&&o.reflect&&r===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(n._$Eu(e,o))))return;this.C(e,s,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,s,{useDefault:o,reflect:i,wrapped:n},r){o&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,r??s??this[e]),n!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(s=void 0),this._$AL.set(e,s)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,r]of this._$Ep)this[n]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,r]of i){const{wrapped:l}=r,a=this[n];l!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,r,a)}}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(o=this._$EO)==null||o.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(s)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(s)}willUpdate(e){}_$AE(e){var s;(s=this._$EO)==null||s.forEach(o=>{var i;return(i=o.hostUpdated)==null?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(s=>this._$ET(s,this[s]))),this._$EM()}updated(e){}firstUpdated(e){}};Is.elementStyles=[],Is.shadowRootOptions={mode:"open"},Is[uo("elementProperties")]=new Map,Is[uo("finalized")]=new Map,Mi==null||Mi({ReactiveElement:Is}),(Gt.reactiveElementVersions??(Gt.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ho=globalThis,Zo=ho.trustedTypes,kr=Zo?Zo.createPolicy("lit-html",{createHTML:t=>t}):void 0,On="$lit$",Dt=`lit$${Math.random().toFixed(9).slice(2)}$`,An="?"+Dt,Lh=`<${An}>`,bs=document,_o=()=>bs.createComment(""),yo=t=>t===null||typeof t!="object"&&typeof t!="function",Pn=Array.isArray,Zl=t=>Pn(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Di=`[ 	
\f\r]`,Zs=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ir=/-->/g,Er=/>/g,as=RegExp(`>|${Di}(?:([^\\s"'>=/]+)(${Di}*=${Di}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Or=/'/g,Ar=/"/g,Ql=/^(?:script|style|textarea|title)$/i,ea=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),_=ea(1),Mh=ea(2),Et=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),Pr=new WeakMap,hs=bs.createTreeWalker(bs,129);function ta(t,e){if(!Pn(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return kr!==void 0?kr.createHTML(e):e}const sa=(t,e)=>{const s=t.length-1,o=[];let i,n=e===2?"<svg>":e===3?"<math>":"",r=Zs;for(let l=0;l<s;l++){const a=t[l];let d,c,f=-1,v=0;for(;v<a.length&&(r.lastIndex=v,c=r.exec(a),c!==null);)v=r.lastIndex,r===Zs?c[1]==="!--"?r=Ir:c[1]!==void 0?r=Er:c[2]!==void 0?(Ql.test(c[2])&&(i=RegExp("</"+c[2],"g")),r=as):c[3]!==void 0&&(r=as):r===as?c[0]===">"?(r=i??Zs,f=-1):c[1]===void 0?f=-2:(f=r.lastIndex-c[2].length,d=c[1],r=c[3]===void 0?as:c[3]==='"'?Ar:Or):r===Ar||r===Or?r=as:r===Ir||r===Er?r=Zs:(r=as,i=void 0);const x=r===as&&t[l+1].startsWith("/>")?" ":"";n+=r===Zs?a+Lh:f>=0?(o.push(d),a.slice(0,f)+On+a.slice(f)+Dt+x):a+Dt+(f===-2?l:x)}return[ta(t,n+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class xo{constructor({strings:e,_$litType$:s},o){let i;this.parts=[];let n=0,r=0;const l=e.length-1,a=this.parts,[d,c]=sa(e,s);if(this.el=xo.createElement(d,o),hs.currentNode=this.el.content,s===2||s===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=hs.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(On)){const v=c[r++],x=i.getAttribute(f).split(Dt),S=/([.?@])?(.*)/.exec(v);a.push({type:1,index:n,name:S[2],strings:x,ctor:S[1]==="."?ia:S[1]==="?"?na:S[1]==="@"?ra:Io}),i.removeAttribute(f)}else f.startsWith(Dt)&&(a.push({type:6,index:n}),i.removeAttribute(f));if(Ql.test(i.tagName)){const f=i.textContent.split(Dt),v=f.length-1;if(v>0){i.textContent=Zo?Zo.emptyScript:"";for(let x=0;x<v;x++)i.append(f[x],_o()),hs.nextNode(),a.push({type:2,index:++n});i.append(f[v],_o())}}}else if(i.nodeType===8)if(i.data===An)a.push({type:2,index:n});else{let f=-1;for(;(f=i.data.indexOf(Dt,f+1))!==-1;)a.push({type:7,index:n}),f+=Dt.length-1}n++}}static createElement(e,s){const o=bs.createElement("template");return o.innerHTML=e,o}}function gs(t,e,s=t,o){var r,l;if(e===Et)return e;let i=o!==void 0?(r=s._$Co)==null?void 0:r[o]:s._$Cl;const n=yo(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,s,o)),o!==void 0?(s._$Co??(s._$Co=[]))[o]=i:s._$Cl=i),i!==void 0&&(e=gs(t,i._$AS(t,e.values),i,o)),e}let oa=class{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:s},parts:o}=this._$AD,i=((e==null?void 0:e.creationScope)??bs).importNode(s,!0);hs.currentNode=i;let n=hs.nextNode(),r=0,l=0,a=o[0];for(;a!==void 0;){if(r===a.index){let d;a.type===2?d=new js(n,n.nextSibling,this,e):a.type===1?d=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(d=new la(n,this,e)),this._$AV.push(d),a=o[++l]}r!==(a==null?void 0:a.index)&&(n=hs.nextNode(),r++)}return hs.currentNode=bs,i}p(e){let s=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,s),s+=o.strings.length-2):o._$AI(e[s])),s++}};class js{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,s,o,i){this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=o,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=gs(this,e,s),yo(e)?e===R||e==null||e===""?(this._$AH!==R&&this._$AR(),this._$AH=R):e!==this._$AH&&e!==Et&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Zl(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==R&&yo(this._$AH)?this._$AA.nextSibling.data=e:this.T(bs.createTextNode(e)),this._$AH=e}$(e){var n;const{values:s,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=xo.createElement(ta(o.h,o.h[0]),this.options)),o);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(s);else{const r=new oa(i,this),l=r.u(this.options);r.p(s),this.T(l),this._$AH=r}}_$AC(e){let s=Pr.get(e.strings);return s===void 0&&Pr.set(e.strings,s=new xo(e)),s}k(e){Pn(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let o,i=0;for(const n of e)i===s.length?s.push(o=new js(this.O(_o()),this.O(_o()),this,this.options)):o=s[i],o._$AI(n),i++;i<s.length&&(this._$AR(o&&o._$AB.nextSibling,i),s.length=i)}_$AR(e=this._$AA.nextSibling,s){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,s);e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var s;this._$AM===void 0&&(this._$Cv=e,(s=this._$AP)==null||s.call(this,e))}}class Io{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,o,i,n){this.type=1,this._$AH=R,this._$AN=void 0,this.element=e,this.name=s,this._$AM=i,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=R}_$AI(e,s=this,o,i){const n=this.strings;let r=!1;if(n===void 0)e=gs(this,e,s,0),r=!yo(e)||e!==this._$AH&&e!==Et,r&&(this._$AH=e);else{const l=e;let a,d;for(e=n[0],a=0;a<n.length-1;a++)d=gs(this,l[o+a],s,a),d===Et&&(d=this._$AH[a]),r||(r=!yo(d)||d!==this._$AH[a]),d===R?e=R:e!==R&&(e+=(d??"")+n[a+1]),this._$AH[a]=d}r&&!i&&this.j(e)}j(e){e===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ia extends Io{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===R?void 0:e}}class na extends Io{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==R)}}class ra extends Io{constructor(e,s,o,i,n){super(e,s,o,i,n),this.type=5}_$AI(e,s=this){if((e=gs(this,e,s,0)??R)===Et)return;const o=this._$AH,i=e===R&&o!==R||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==R&&(o===R||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,e):this._$AH.handleEvent(e)}}class la{constructor(e,s,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){gs(this,e)}}const Dh={M:On,P:Dt,A:An,C:1,L:sa,R:oa,D:Zl,V:gs,I:js,H:Io,N:na,U:ra,B:ia,F:la},Fi=ho.litHtmlPolyfillSupport;Fi==null||Fi(xo,js),(ho.litHtmlVersions??(ho.litHtmlVersions=[])).push("3.3.1");const aa=(t,e,s)=>{const o=(s==null?void 0:s.renderBefore)??e;let i=o._$litPart$;if(i===void 0){const n=(s==null?void 0:s.renderBefore)??null;o._$litPart$=i=new js(e.insertBefore(_o(),n),n,void 0,s??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fs=globalThis;let ht=class extends Is{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const e=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=e.firstChild),e}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=aa(s,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Et}};var Ur;ht._$litElement$=!0,ht.finalized=!0,(Ur=fs.litElementHydrateSupport)==null||Ur.call(fs,{LitElement:ht});const zi=fs.litElementPolyfillSupport;zi==null||zi({LitElement:ht});(fs.litElementVersions??(fs.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fh=t=>(e,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zh={attribute:!0,type:String,converter:Xo,reflect:!1,hasChanged:En},jh=(t=zh,e,s)=>{const{kind:o,metadata:i}=s;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),o==="setter"&&((t=Object.create(t)).wrapped=!0),n.set(s.name,t),o==="accessor"){const{name:r}=s;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(r,a,t)},init(l){return l!==void 0&&this.C(r,void 0,t,l),l}}}if(o==="setter"){const{name:r}=s;return function(l){const a=this[r];e.call(this,l),this.requestUpdate(r,a,t)}}throw Error("Unsupported decorator location: "+o)};function h(t){return(e,s)=>typeof s=="object"?jh(t,e,s):((o,i,n)=>{const r=i.hasOwnProperty(n);return i.constructor.createProperty(n,o),r?Object.getOwnPropertyDescriptor(i,n):void 0})(t,e,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function j(t){return h({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wo=(t,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Me(t,e){return(s,o,i)=>{const n=r=>{var l;return((l=r.renderRoot)==null?void 0:l.querySelector(t))??null};if(e){const{get:r,set:l}=typeof o=="object"?s:i??(()=>{const a=Symbol();return{get(){return this[a]},set(d){this[a]=d}}})();return wo(s,o,{get(){let a=r.call(this);return a===void 0&&(a=n(this),(a!==null||this.hasUpdated)&&l.call(this,a)),a}})}return wo(s,o,{get(){return n(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Hh;function Nh(t){return(e,s)=>wo(e,s,{get(){return(this.renderRoot??Hh??(Hh=document.createDocumentFragment())).querySelectorAll(t)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gt(t){return(e,s)=>{const{slot:o,selector:i}=t??{},n="slot"+(o?`[name=${o}]`:":not([name])");return wo(e,s,{get(){var a;const r=(a=this.renderRoot)==null?void 0:a.querySelector(n),l=(r==null?void 0:r.assignedElements(t))??[];return i===void 0?l:l.filter(d=>d.matches(i))}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Uh(t){return(e,s)=>{const{slot:o}=t??{},i="slot"+(o?`[name=${o}]`:":not([name])");return wo(e,s,{get(){var r;const n=(r=this.renderRoot)==null?void 0:r.querySelector(i);return(n==null?void 0:n.assignedNodes(t))??[]}})}}const Qi="1.17.0",Tr="__vscodeElements_disableRegistryWarning__";class G extends ht{get version(){return Qi}}const U=t=>e=>{if(!customElements.get(t)){customElements.define(t,e);return}if(Tr in window)return;const o=document.createElement(t),i=o==null?void 0:o.version;let n="";i?i!==Qi?(n+="is already registered by a different version of VSCode Elements. ",n+=`This version is "${Qi}", while the other one is "${i}".`):n+="is already registered by the same version of VSCode Elements. ":(console.warn(t,"is already registered by an unknown custom element handler class."),n+="is already registered by an unknown custom element handler class."),console.warn(`[VSCode Elements] ${t} ${n}
To suppress this warning, set window.${Tr} to true`)},q=H`
  :host([hidden]) {
    display: none;
  }

  :host([disabled]),
  :host(:disabled) {
    cursor: not-allowed;
    opacity: 0.4;
    pointer-events: none;
  }
`,qh=16,Wh=13,Kh=qh/Wh;function Tn(){return navigator.userAgent.indexOf("Linux")>-1?'system-ui, "Ubuntu", "Droid Sans", sans-serif':navigator.userAgent.indexOf("Mac")>-1?"-apple-system, BlinkMacSystemFont, sans-serif":navigator.userAgent.indexOf("Windows")>-1?'"Segoe WPC", "Segoe UI", sans-serif':"sans-serif"}const Gh=mi(Tn()),Yh=[q,H`
    :host {
      background-color: var(--vscode-badge-background, #616161);
      border: 1px solid var(--vscode-contrastBorder, transparent);
      border-radius: 2px;
      box-sizing: border-box;
      color: var(--vscode-badge-foreground, #f8f8f8);
      display: inline-block;
      font-family: var(--vscode-font-family, ${Gh});
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
  `];var ca=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};let Qo=class extends G{constructor(){super(...arguments),this.variant="default"}render(){return _` <slot></slot> `}};Qo.styles=Yh;ca([h({reflect:!0})],Qo.prototype,"variant",void 0);Qo=ca([U("vscode-badge")],Qo);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Bn=t=>(...e)=>({_$litDirective$:t,values:e});class Vn{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,o){this._$Ct=e,this._$AM=s,this._$Ci=o}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te=Bn(class extends Vn{constructor(t){var e;if(super(t),t.type!==Rn.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var o,i;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((o=this.nt)!=null&&o.has(n))&&this.st.add(n);return this.render(e)}const s=t.element.classList;for(const n of this.st)n in e||(s.remove(n),this.st.delete(n));for(const n in e){const r=!!e[n];r===this.st.has(n)||(i=this.nt)!=null&&i.has(n)||(r?(s.add(n),this.st.add(n)):(s.remove(n),this.st.delete(n)))}return Et}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=t=>t??R;class Jh extends Vn{constructor(e){if(super(e),this._prevProperties={},e.type!==Rn.PROPERTY||e.name!=="style")throw new Error("The `stylePropertyMap` directive must be used in the `style` property")}update(e,[s]){return Object.entries(s).forEach(([o,i])=>{this._prevProperties[o]!==i&&(o.startsWith("--")?e.element.style.setProperty(o,i):e.element.style[o]=i,this._prevProperties[o]=i)}),Et}render(e){return Et}}const Be=Bn(Jh),Xh=[q,H`
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
  `];var ys=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n},so;let ft=so=class extends G{constructor(){super(...arguments),this.label="",this.name="",this.size=16,this.spin=!1,this.spinDuration=1.5,this.actionIcon=!1,this._onButtonClick=e=>{this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:e}}))}}connectedCallback(){super.connectedCallback();const{href:e,nonce:s}=this._getStylesheetConfig();so.stylesheetHref=e,so.nonce=s}_getStylesheetConfig(){const e=document.getElementById("vscode-codicon-stylesheet"),s=(e==null?void 0:e.getAttribute("href"))||void 0,o=(e==null?void 0:e.nonce)||void 0;if(!e){let i="[VSCode Elements] To use the Icon component, the codicons.css file must be included in the page with the id `vscode-codicon-stylesheet`! ";i+="See https://vscode-elements.github.io/components/icon/ for more details.",console.warn(i)}return{nonce:o,href:s}}render(){const{stylesheetHref:e,nonce:s}=so,o=_`<span
      class=${te({codicon:!0,["codicon-"+this.name]:!0,spin:this.spin})}
      .style=${Be({animationDuration:String(this.spinDuration)+"s",fontSize:this.size+"px",height:this.size+"px",width:this.size+"px"})}
    ></span>`,i=this.actionIcon?_` <button
          class="button"
          @click=${this._onButtonClick}
          aria-label=${this.label}
        >
          ${o}
        </button>`:_` <span class="icon" aria-hidden="true" role="presentation"
          >${o}</span
        >`;return _`
      <link
        rel="stylesheet"
        href=${K(e)}
        nonce=${K(s)}
      >
      ${i}
    `}};ft.styles=Xh;ft.stylesheetHref="";ft.nonce="";ys([h()],ft.prototype,"label",void 0);ys([h({type:String})],ft.prototype,"name",void 0);ys([h({type:Number})],ft.prototype,"size",void 0);ys([h({type:Boolean,reflect:!0})],ft.prototype,"spin",void 0);ys([h({type:Number,attribute:"spin-duration"})],ft.prototype,"spinDuration",void 0);ys([h({type:Boolean,reflect:!0,attribute:"action-icon"})],ft.prototype,"actionIcon",void 0);ft=so=ys([U("vscode-icon")],ft);const Zh=mi(Tn()),Qh=[q,H`
    :host {
      background-color: var(--vscode-button-background, #0078d4);
      border-color: var(--vscode-button-border, transparent);
      border-style: solid;
      border-radius: 2px;
      border-width: 1px;
      color: var(--vscode-button-foreground, #ffffff);
      cursor: pointer;
      display: inline-flex;
      font-family: var(--vscode-font-family, ${Zh});
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
  `];var Ae=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};let we=class extends G{get form(){return this._internals.form}constructor(){super(),this.autofocus=!1,this.tabIndex=0,this.secondary=!1,this.role="button",this.disabled=!1,this.icon="",this.iconSpin=!1,this.iconAfter="",this.iconAfterSpin=!1,this.focused=!1,this.name=void 0,this.iconOnly=!1,this.type="button",this.value="",this._prevTabindex=0,this._handleFocus=()=>{this.focused=!0},this._handleBlur=()=>{this.focused=!1},this.addEventListener("keydown",this._handleKeyDown.bind(this)),this.addEventListener("click",this._handleClick.bind(this)),this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.autofocus&&(this.tabIndex<0&&(this.tabIndex=0),this.updateComplete.then(()=>{this.focus(),this.requestUpdate()})),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur)}update(e){super.update(e),e.has("value")&&this._internals.setFormValue(this.value),e.has("disabled")&&(this.disabled?(this._prevTabindex=this.tabIndex,this.tabIndex=-1):this.tabIndex=this._prevTabindex)}_executeAction(){this.type==="submit"&&this._internals.form&&this._internals.form.requestSubmit(),this.type==="reset"&&this._internals.form&&this._internals.form.reset()}_handleKeyDown(e){if((e.key==="Enter"||e.key===" ")&&!this.hasAttribute("disabled")){this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:new MouseEvent("click")}}));const s=new MouseEvent("click",{bubbles:!0,cancelable:!0});s.synthetic=!0,this.dispatchEvent(s),this._executeAction()}}_handleClick(e){e.synthetic||this.hasAttribute("disabled")||(this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:e}})),this._executeAction())}render(){const e=this.icon!=="",s=this.iconAfter!=="",o={wrapper:!0,"has-icon-before":e,"has-icon-after":s,"icon-only":this.iconOnly},i=e?_`<vscode-icon
          name=${this.icon}
          ?spin=${this.iconSpin}
          spin-duration=${K(this.iconSpinDuration)}
          class="icon"
        ></vscode-icon>`:R,n=s?_`<vscode-icon
          name=${this.iconAfter}
          ?spin=${this.iconAfterSpin}
          spin-duration=${K(this.iconAfterSpinDuration)}
          class="icon-after"
        ></vscode-icon>`:R;return _`
      <span class=${te(o)}>
        ${i}
        <slot></slot>
        ${n}
      </span>
      <div class="divider"><div></div></div>
    `}};we.styles=Qh;we.formAssociated=!0;Ae([h({type:Boolean,reflect:!0})],we.prototype,"autofocus",void 0);Ae([h({type:Number,reflect:!0})],we.prototype,"tabIndex",void 0);Ae([h({type:Boolean,reflect:!0})],we.prototype,"secondary",void 0);Ae([h({reflect:!0})],we.prototype,"role",void 0);Ae([h({type:Boolean,reflect:!0})],we.prototype,"disabled",void 0);Ae([h()],we.prototype,"icon",void 0);Ae([h({type:Boolean,reflect:!0,attribute:"icon-spin"})],we.prototype,"iconSpin",void 0);Ae([h({type:Number,reflect:!0,attribute:"icon-spin-duration"})],we.prototype,"iconSpinDuration",void 0);Ae([h({attribute:"icon-after"})],we.prototype,"iconAfter",void 0);Ae([h({type:Boolean,reflect:!0,attribute:"icon-after-spin"})],we.prototype,"iconAfterSpin",void 0);Ae([h({type:Number,reflect:!0,attribute:"icon-after-spin-duration"})],we.prototype,"iconAfterSpinDuration",void 0);Ae([h({type:Boolean,reflect:!0})],we.prototype,"focused",void 0);Ae([h({type:String,reflect:!0})],we.prototype,"name",void 0);Ae([h({type:Boolean,reflect:!0,attribute:"icon-only"})],we.prototype,"iconOnly",void 0);Ae([h({reflect:!0})],we.prototype,"type",void 0);Ae([h()],we.prototype,"value",void 0);we=Ae([U("vscode-button")],we);const ep=[q,H`
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
  `];var tp=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};let en=class extends G{render(){return _` <slot></slot> `}};en.styles=ep;en=tp([Fh("vscode-button-group")],en);var sp=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};class Ln extends G{constructor(){super(),this.focused=!1,this._prevTabindex=0,this._handleFocus=()=>{this.focused=!0},this._handleBlur=()=>{this.focused=!1}}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur)}attributeChangedCallback(e,s,o){super.attributeChangedCallback(e,s,o),e==="disabled"&&this.hasAttribute("disabled")?(this._prevTabindex=this.tabIndex,this.tabIndex=-1):e==="disabled"&&!this.hasAttribute("disabled")&&(this.tabIndex=this._prevTabindex)}}sp([h({type:Boolean,reflect:!0})],Ln.prototype,"focused",void 0);var op=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};const da=t=>{class e extends t{constructor(){super(...arguments),this._label="",this._slottedText=""}set label(o){this._label=o,this._slottedText===""&&this.setAttribute("aria-label",o)}get label(){return this._label}_handleSlotChange(){this._slottedText=this.textContent?this.textContent.trim():"",this._slottedText!==""&&this.setAttribute("aria-label",this._slottedText)}_renderLabelAttribute(){return this._slottedText===""?_`<span class="label-attr">${this._label}</span>`:_`${R}`}}return op([h()],e.prototype,"label",null),e},ua=[H`
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
  `],ip=[q,ua,H`
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
  `];var lt=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};let Le=class extends da(Ln){set checked(e){this._checked=e,this._manageRequired(),this.requestUpdate()}get checked(){return this._checked}set required(e){this._required=e,this._manageRequired(),this.requestUpdate()}get required(){return this._required}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}constructor(){super(),this.autofocus=!1,this._checked=!1,this.defaultChecked=!1,this.invalid=!1,this.name=void 0,this.value="",this.disabled=!1,this.indeterminate=!1,this._required=!1,this.type="checkbox",this._handleClick=e=>{e.preventDefault(),!this.disabled&&this._toggleState()},this._handleKeyDown=e=>{var s;!this.disabled&&(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key===" "&&this._toggleState(),e.key==="Enter"&&((s=this._internals.form)==null||s.requestSubmit()))},this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleKeyDown),this.updateComplete.then(()=>{this._manageRequired(),this._setActualFormValue()})}disconnectedCallback(){this.removeEventListener("keydown",this._handleKeyDown)}update(e){super.update(e),e.has("checked")&&(this.ariaChecked=this.checked?"true":"false")}formResetCallback(){this.checked=this.defaultChecked}formStateRestoreCallback(e,s){e&&(this.checked=!0)}_setActualFormValue(){let e="";this.checked?e=this.value?this.value:"on":e=null,this._internals.setFormValue(e)}_toggleState(){this.checked=!this.checked,this.indeterminate=!1,this._setActualFormValue(),this._manageRequired(),this.dispatchEvent(new Event("change",{bubbles:!0})),this.dispatchEvent(new CustomEvent("vsc-change",{detail:{checked:this.checked,label:this.label,value:this.value},bubbles:!0,composed:!0}))}_manageRequired(){!this.checked&&this.required?this._internals.setValidity({valueMissing:!0},"Please check this box if you want to proceed.",this._inputEl??void 0):this._internals.setValidity({})}render(){const e=te({icon:!0,checked:this.checked,indeterminate:this.indeterminate}),s=te({"label-inner":!0}),o=_`<svg
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
    </svg>`,i=this.checked&&!this.indeterminate?o:R,n=this.indeterminate?_`<span class="indeterminate-icon"></span>`:R;return _`
      <div class="wrapper">
        <input
          ?autofocus=${this.autofocus}
          id="input"
          class="checkbox"
          type="checkbox"
          ?checked=${this.checked}
          value=${this.value}
        >
        <div class=${e}>${n}${i}</div>
        <label for="input" class="label" @click=${this._handleClick}>
          <span class=${s}>
            ${this._renderLabelAttribute()}
            <slot @slotchange=${this._handleSlotChange}></slot>
          </span>
        </label>
      </div>
    `}};Le.styles=ip;Le.formAssociated=!0;Le.shadowRootOptions={...ht.shadowRootOptions,delegatesFocus:!0};lt([h({type:Boolean,reflect:!0})],Le.prototype,"autofocus",void 0);lt([h({type:Boolean,reflect:!0})],Le.prototype,"checked",null);lt([h({type:Boolean,reflect:!0,attribute:"default-checked"})],Le.prototype,"defaultChecked",void 0);lt([h({type:Boolean,reflect:!0})],Le.prototype,"invalid",void 0);lt([h({reflect:!0})],Le.prototype,"name",void 0);lt([h()],Le.prototype,"value",void 0);lt([h({type:Boolean,reflect:!0})],Le.prototype,"disabled",void 0);lt([h({type:Boolean,reflect:!0})],Le.prototype,"indeterminate",void 0);lt([h({type:Boolean,reflect:!0})],Le.prototype,"required",null);lt([h()],Le.prototype,"type",void 0);lt([Me("#input")],Le.prototype,"_inputEl",void 0);Le=lt([U("vscode-checkbox")],Le);const np=[q,H`
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
  `];var Mn=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};let Co=class extends G{constructor(){super(...arguments),this.role="group",this.variant="horizontal"}render(){return _`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};Co.styles=np;Mn([h({reflect:!0})],Co.prototype,"role",void 0);Mn([h({reflect:!0})],Co.prototype,"variant",void 0);Co=Mn([U("vscode-checkbox-group")],Co);const rp=[q,H`
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
  `];var _i=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};let Ls=class extends G{constructor(){super(...arguments),this.title="",this.description="",this.open=!1}_emitToggleEvent(){this.dispatchEvent(new CustomEvent("vsc-collapsible-toggle",{detail:{open:this.open}}))}_onHeaderClick(){this.open=!this.open,this._emitToggleEvent()}_onHeaderKeyDown(e){e.key==="Enter"&&(this.open=!this.open,this._emitToggleEvent())}render(){const e=te({collapsible:!0,open:this.open}),s=_`<svg
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
    </svg>`,o=this.description?_`<span class="description">${this.description}</span>`:R;return _`
      <div class=${e}>
        <div
          class="collapsible-header"
          tabindex="0"
          title=${this.title}
          @click=${this._onHeaderClick}
          @keydown=${this._onHeaderKeyDown}
        >
          ${s}
          <h3 class="title">${this.title}${o}</h3>
          <div class="header-slots">
            <div class="actions"><slot name="actions"></slot></div>
            <div class="decorations"><slot name="decorations"></slot></div>
          </div>
        </div>
        <div class="collapsible-body" part="body">
          <slot></slot>
        </div>
      </div>
    `}};Ls.styles=rp;_i([h({type:String})],Ls.prototype,"title",void 0);_i([h()],Ls.prototype,"description",void 0);_i([h({type:Boolean,reflect:!0})],Ls.prototype,"open",void 0);Ls=_i([U("vscode-collapsible")],Ls);const lp=[q,H`
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
  `];var Hs=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};let Zt=class extends G{constructor(){super(...arguments),this.label="",this.keybinding="",this.value="",this.separator=!1,this.tabindex=0}onItemClick(){this.dispatchEvent(new CustomEvent("vsc-click",{detail:{label:this.label,keybinding:this.keybinding,value:this.value||this.label,separator:this.separator,tabindex:this.tabindex},bubbles:!0,composed:!0}))}render(){return _`
      ${this.separator?_`
            <div class="context-menu-item separator">
              <span class="ruler"></span>
            </div>
          `:_`
            <div class="context-menu-item">
              <a @click=${this.onItemClick}>
                ${this.label?_`<span class="label">${this.label}</span>`:R}
                ${this.keybinding?_`<span class="keybinding">${this.keybinding}</span>`:R}
              </a>
            </div>
          `}
    `}};Zt.styles=lp;Hs([h({type:String})],Zt.prototype,"label",void 0);Hs([h({type:String})],Zt.prototype,"keybinding",void 0);Hs([h({type:String})],Zt.prototype,"value",void 0);Hs([h({type:Boolean,reflect:!0})],Zt.prototype,"separator",void 0);Hs([h({type:Number})],Zt.prototype,"tabindex",void 0);Zt=Hs([U("vscode-context-menu-item")],Zt);const ap=[q,H`
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
  `];var ss=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};let Ot=class extends G{set data(e){this._data=e;const s=[];e.forEach((o,i)=>{o.separator||s.push(i)}),this._clickableItemIndexes=s}get data(){return this._data}set show(e){this._show=e,this._selectedClickableItemIndex=-1,e&&this.updateComplete.then(()=>{this._wrapperEl&&this._wrapperEl.focus(),requestAnimationFrame(()=>{document.addEventListener("click",this._onClickOutsideBound,{once:!0})})})}get show(){return this._show}constructor(){super(),this.preventClose=!1,this.tabIndex=0,this._selectedClickableItemIndex=-1,this._show=!1,this._data=[],this._clickableItemIndexes=[],this._onClickOutsideBound=this._onClickOutside.bind(this),this.addEventListener("keydown",this._onKeyDown)}_onClickOutside(e){e.composedPath().includes(this)||(this.show=!1)}_onKeyDown(e){const{key:s}=e;switch((s==="ArrowUp"||s==="ArrowDown"||s==="Escape"||s==="Enter")&&e.preventDefault(),s){case"ArrowUp":this._handleArrowUp();break;case"ArrowDown":this._handleArrowDown();break;case"Escape":this._handleEscape();break;case"Enter":this._handleEnter();break}}_handleArrowUp(){this._selectedClickableItemIndex===0?this._selectedClickableItemIndex=this._clickableItemIndexes.length-1:this._selectedClickableItemIndex-=1}_handleArrowDown(){this._selectedClickableItemIndex+1<this._clickableItemIndexes.length?this._selectedClickableItemIndex+=1:this._selectedClickableItemIndex=0}_handleEscape(){this.show=!1,document.removeEventListener("click",this._onClickOutsideBound)}_dispatchSelectEvent(e){const{keybinding:s,label:o,value:i,separator:n,tabindex:r}=e;this.dispatchEvent(new CustomEvent("vsc-context-menu-select",{detail:{keybinding:s,label:o,separator:n,tabindex:r,value:i}}))}_dispatchLegacySelectEvent(e){const{keybinding:s,label:o,value:i,separator:n,tabindex:r}=e,l={keybinding:s,label:o,value:i,separator:n,tabindex:r};this.dispatchEvent(new CustomEvent("vsc-select",{detail:l,bubbles:!0,composed:!0}))}_handleEnter(){if(this._selectedClickableItemIndex===-1)return;const e=this._clickableItemIndexes[this._selectedClickableItemIndex],o=this._wrapperEl.querySelectorAll("vscode-context-menu-item")[e];this._dispatchLegacySelectEvent(o),this._dispatchSelectEvent(o),this.preventClose||(this.show=!1,document.removeEventListener("click",this._onClickOutsideBound))}_onItemClick(e){const s=e.currentTarget;this._dispatchLegacySelectEvent(s),this._dispatchSelectEvent(s),this.preventClose||(this.show=!1)}_onItemMouseOver(e){const s=e.target,o=s.dataset.index?+s.dataset.index:-1,i=this._clickableItemIndexes.findIndex(n=>n===o);i!==-1&&(this._selectedClickableItemIndex=i)}_onItemMouseOut(){this._selectedClickableItemIndex=-1}render(){if(!this._show)return _`${R}`;const e=this._clickableItemIndexes[this._selectedClickableItemIndex];return _`
      <div class="context-menu" tabindex="0">
        ${this.data?this.data.map(({label:s="",keybinding:o="",value:i="",separator:n=!1,tabindex:r=0},l)=>_`
                <vscode-context-menu-item
                  label=${s}
                  keybinding=${o}
                  value=${i}
                  ?separator=${n}
                  ?selected=${l===e}
                  tabindex=${r}
                  @vsc-click=${this._onItemClick}
                  @mouseover=${this._onItemMouseOver}
                  @mouseout=${this._onItemMouseOut}
                  data-index=${l}
                ></vscode-context-menu-item>
              `):_`<slot></slot>`}
      </div>
    `}};Ot.styles=ap;ss([h({type:Array,attribute:!1})],Ot.prototype,"data",null);ss([h({type:Boolean,reflect:!0,attribute:"prevent-close"})],Ot.prototype,"preventClose",void 0);ss([h({type:Boolean,reflect:!0})],Ot.prototype,"show",null);ss([h({type:Number,reflect:!0})],Ot.prototype,"tabIndex",void 0);ss([j()],Ot.prototype,"_selectedClickableItemIndex",void 0);ss([j()],Ot.prototype,"_show",void 0);ss([Me(".context-menu")],Ot.prototype,"_wrapperEl",void 0);Ot=ss([U("vscode-context-menu")],Ot);const cp=[q,H`
    :host {
      background-color: var(--vscode-foreground, #cccccc);
      display: block;
      height: 1px;
      margin-bottom: 10px;
      margin-top: 10px;
      opacity: 0.4;
    }
  `];var ha=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};let ei=class extends G{constructor(){super(...arguments),this.role="separator"}render(){return _``}};ei.styles=cp;ha([h({reflect:!0})],ei.prototype,"role",void 0);ei=ha([U("vscode-divider")],ei);const dp=[q,H`
    :host {
      display: block;
      max-width: 727px;
    }
  `];var Ns=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n},us;(function(t){t.HORIZONTAL="horizontal",t.VERTICAL="vertical"})(us||(us={}));const up=t=>["vscode-textfield","vscode-textarea"].includes(t.tagName.toLocaleLowerCase()),hp=t=>t.tagName.toLocaleLowerCase()==="vscode-single-select",pp=t=>t.tagName.toLocaleLowerCase()==="vscode-multi-select",Rr=t=>t.tagName.toLocaleLowerCase()==="vscode-checkbox",Br=t=>t.tagName.toLocaleLowerCase()==="vscode-radio";let Qt=class extends G{constructor(){super(...arguments),this.breakpoint=490,this._responsive=!1,this._firstUpdateComplete=!1,this._resizeObserverCallbackBound=this._resizeObserverCallback.bind(this)}set responsive(e){this._responsive=e,this._firstUpdateComplete&&(e?this._activateResponsiveLayout():this._deactivateResizeObserver())}get responsive(){return this._responsive}get data(){return this._collectFormData()}_collectFormData(){const e=["vscode-textfield","vscode-textarea","vscode-single-select","vscode-multi-select","vscode-checkbox","vscode-radio"].join(","),s=this.querySelectorAll(e),o={};return s.forEach(i=>{if(!i.hasAttribute("name"))return;const n=i.getAttribute("name");n&&(Rr(i)&&i.checked?o[n]=Array.isArray(o[n])?[...o[n],i.value]:[i.value]:pp(i)?o[n]=i.value:Rr(i)&&!i.checked?o[n]=Array.isArray(o[n])?o[n]:[]:Br(i)&&i.checked||up(i)||hp(i)?o[n]=i.value:Br(i)&&!i.checked&&(o[n]=o[n]?o[n]:""))}),o}_toggleCompactLayout(e){this._assignedFormGroups.forEach(s=>{s.dataset.originalVariant||(s.dataset.originalVariant=s.variant);const o=s.dataset.originalVariant;e===us.VERTICAL&&o==="horizontal"?s.variant="vertical":s.variant=o,s.querySelectorAll("vscode-checkbox-group, vscode-radio-group").forEach(n=>{n.dataset.originalVariant||(n.dataset.originalVariant=n.variant);const r=n.dataset.originalVariant;e===us.HORIZONTAL&&r===us.HORIZONTAL?n.variant="horizontal":n.variant="vertical"})})}_resizeObserverCallback(e){let s=0;for(const i of e)s=i.contentRect.width;const o=s<this.breakpoint?us.VERTICAL:us.HORIZONTAL;o!==this._currentFormGroupLayout&&(this._toggleCompactLayout(o),this._currentFormGroupLayout=o)}_activateResponsiveLayout(){this._resizeObserver=new ResizeObserver(this._resizeObserverCallbackBound),this._resizeObserver.observe(this._wrapperElement)}_deactivateResizeObserver(){var e;(e=this._resizeObserver)==null||e.disconnect(),this._resizeObserver=null}firstUpdated(){this._firstUpdateComplete=!0,this._responsive&&this._activateResponsiveLayout()}render(){return _`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};Qt.styles=dp;Ns([h({type:Boolean,reflect:!0})],Qt.prototype,"responsive",null);Ns([h({type:Number})],Qt.prototype,"breakpoint",void 0);Ns([h({type:Object})],Qt.prototype,"data",null);Ns([Me(".wrapper")],Qt.prototype,"_wrapperElement",void 0);Ns([gt({selector:"vscode-form-group"})],Qt.prototype,"_assignedFormGroups",void 0);Qt=Ns([U("vscode-form-container")],Qt);const fp=[q,H`
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
  `];var pa=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};let ti=class extends G{constructor(){super(...arguments),this.variant="horizontal"}render(){return _`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};ti.styles=fp;pa([h({reflect:!0})],ti.prototype,"variant",void 0);ti=pa([U("vscode-form-group")],ti);const vp=[q,H`
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
  `];var bp=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};const tn=new CSSStyleSheet;tn.replaceSync(`
  vscode-form-helper * {
    margin: 0;
  }

  vscode-form-helper *:not(:last-child) {
    margin-bottom: 8px;
  }
`);let sn=class extends G{constructor(){super(),this._injectLightDOMStyles()}_injectLightDOMStyles(){document.adoptedStyleSheets.find(s=>s===tn)||document.adoptedStyleSheets.push(tn)}render(){return _`<slot></slot>`}};sn.styles=vp;sn=bp([U("vscode-form-helper")],sn);let Vr=0;const fa=(t="")=>(Vr++,`${t}${Vr}`),gp=[q,H`
    :host {
      color: var(--vscode-foreground, #cccccc);
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: 600;
      line-height: ${Kh};
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
  `];var yi=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};let Ms=class extends G{constructor(){super(...arguments),this.required=!1,this._id="",this._htmlFor="",this._connected=!1}set htmlFor(e){this._htmlFor=e,this.setAttribute("for",e),this._connected&&this._connectWithTarget()}get htmlFor(){return this._htmlFor}set id(e){this._id=e}get id(){return this._id}attributeChangedCallback(e,s,o){super.attributeChangedCallback(e,s,o)}connectedCallback(){super.connectedCallback(),this._connected=!0,this._id===""&&(this._id=fa("vscode-label-"),this.setAttribute("id",this._id)),this._connectWithTarget()}_getTarget(){let e=null;if(this._htmlFor){const s=this.getRootNode({composed:!1});s&&(e=s.querySelector(`#${this._htmlFor}`))}return e}async _connectWithTarget(){await this.updateComplete;const e=this._getTarget();["vscode-radio-group","vscode-checkbox-group"].includes((e==null?void 0:e.tagName.toLowerCase())??"")&&e.setAttribute("aria-labelledby",this._id);let s="";this.textContent&&(s=this.textContent.trim()),e&&"label"in e&&["vscode-textfield","vscode-textarea","vscode-single-select","vscode-multi-select"].includes((e==null?void 0:e.tagName.toLowerCase())??"")&&(e.label=s)}_handleClick(){const e=this._getTarget();e&&"focus"in e&&e.focus()}render(){return _`
      <label
        class=${te({wrapper:!0,required:this.required})}
        @click=${this._handleClick}
        ><slot></slot
      ></label>
    `}};Ms.styles=gp;yi([h({reflect:!0,attribute:"for"})],Ms.prototype,"htmlFor",null);yi([h()],Ms.prototype,"id",null);yi([h({type:Boolean,reflect:!0})],Ms.prototype,"required",void 0);Ms=yi([U("vscode-label")],Ms);const si=_`
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
`,mp=Mh`<svg
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
 */const{I:_p}=Dh,Lr=()=>document.createComment(""),Qs=(t,e,s)=>{var n;const o=t._$AA.parentNode,i=e===void 0?t._$AB:e._$AA;if(s===void 0){const r=o.insertBefore(Lr(),i),l=o.insertBefore(Lr(),i);s=new _p(r,l,t,t.options)}else{const r=s._$AB.nextSibling,l=s._$AM,a=l!==t;if(a){let d;(n=s._$AQ)==null||n.call(s,t),s._$AM=t,s._$AP!==void 0&&(d=t._$AU)!==l._$AU&&s._$AP(d)}if(r!==i||a){let d=s._$AA;for(;d!==r;){const c=d.nextSibling;o.insertBefore(d,i),d=c}}}return s},cs=(t,e,s=t)=>(t._$AI(e,s),t),yp={},xp=(t,e=yp)=>t._$AH=e,wp=t=>t._$AH,ji=t=>{t._$AR(),t._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mr=(t,e,s)=>{const o=new Map;for(let i=e;i<=s;i++)o.set(t[i],i);return o},Cp=Bn(class extends Vn{constructor(t){if(super(t),t.type!==Rn.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let o;s===void 0?s=e:e!==void 0&&(o=e);const i=[],n=[];let r=0;for(const l of t)i[r]=o?o(l,r):r,n[r]=s(l,r),r++;return{values:n,keys:i}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,o]){const i=wp(t),{values:n,keys:r}=this.dt(e,s,o);if(!Array.isArray(i))return this.ut=r,n;const l=this.ut??(this.ut=[]),a=[];let d,c,f=0,v=i.length-1,x=0,S=n.length-1;for(;f<=v&&x<=S;)if(i[f]===null)f++;else if(i[v]===null)v--;else if(l[f]===r[x])a[x]=cs(i[f],n[x]),f++,x++;else if(l[v]===r[S])a[S]=cs(i[v],n[S]),v--,S--;else if(l[f]===r[S])a[S]=cs(i[f],n[S]),Qs(t,a[S+1],i[f]),f++,S--;else if(l[v]===r[x])a[x]=cs(i[v],n[x]),Qs(t,i[f],i[v]),v--,x++;else if(d===void 0&&(d=Mr(r,x,S),c=Mr(l,f,v)),d.has(l[f]))if(d.has(l[v])){const T=c.get(r[x]),le=T!==void 0?i[T]:null;if(le===null){const z=Qs(t,i[f]);cs(z,n[x]),a[x]=z}else a[x]=cs(le,n[x]),Qs(t,i[f],le),i[T]=null;x++}else ji(i[v]),v--;else ji(i[f]),f++;for(;x<=S;){const T=Qs(t,a[S+1]);cs(T,n[x]),a[x++]=T}for(;f<=v;){const T=i[f++];T!==null&&ji(T)}return this.ut=r,xp(t,a),Et}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $p(t,e,s){return t?e(t):s==null?void 0:s(t)}var Eo=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};let ms=class extends G{constructor(){super(...arguments),this.description="",this.selected=!1,this.disabled=!1,this._initialized=!1,this._handleSlotChange=()=>{this._initialized&&this.dispatchEvent(new Event("vsc-option-state-change",{bubbles:!0}))}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._initialized=!0})}willUpdate(e){this._initialized&&(e.has("description")||e.has("value")||e.has("selected")||e.has("disabled"))&&this.dispatchEvent(new Event("vsc-option-state-change",{bubbles:!0}))}render(){return _`<slot @slotchange=${this._handleSlotChange}></slot>`}};ms.styles=q;Eo([h({type:String})],ms.prototype,"value",void 0);Eo([h({type:String})],ms.prototype,"description",void 0);Eo([h({type:Boolean,reflect:!0})],ms.prototype,"selected",void 0);Eo([h({type:Boolean,reflect:!0})],ms.prototype,"disabled",void 0);ms=Eo([U("vscode-option")],ms);const va=(t,e)=>{const s={match:!1,ranges:[]},o=t.toLowerCase(),i=e.toLowerCase(),n=o.split(" ");let r=0;return n.forEach((l,a)=>{if(a>0&&(r+=n[a-1].length+1),s.match)return;const d=l.indexOf(i),c=i.length;d===0&&(s.match=!0,s.ranges.push([r+d,Math.min(r+d+c,t.length)]))}),s},ba=(t,e)=>{const s={match:!1,ranges:[]};return t.toLowerCase().indexOf(e.toLowerCase())===0&&(s.match=!0,s.ranges=[[0,e.length]]),s},ga=(t,e)=>{const s={match:!1,ranges:[]},o=t.toLowerCase().indexOf(e.toLowerCase());return o>-1&&(s.match=!0,s.ranges=[[o,o+e.length]]),s},ma=(t,e)=>{const s={match:!1,ranges:[]};let o=0,i=0;const n=e.length-1,r=t.toLowerCase(),l=e.toLowerCase();for(let a=0;a<=n;a++){if(i=r.indexOf(l[a],o),i===-1)return{match:!1,ranges:[]};s.match=!0,s.ranges.push([i,i+1]),o=i+1}return s},Sp=(t,e,s)=>{const o=[];return t.forEach(i=>{let n;switch(s){case"startsWithPerTerm":n=va(i.label,e);break;case"startsWith":n=ba(i.label,e);break;case"contains":n=ga(i.label,e);break;default:n=ma(i.label,e)}n.match&&o.push({...i,ranges:n.ranges})}),o},Bo=t=>{const e=[];return t===" "?(e.push(_`&nbsp;`),e):(t.indexOf(" ")===0&&e.push(_`&nbsp;`),e.push(_`${t.trimStart().trimEnd()}`),t.lastIndexOf(" ")===t.length-1&&e.push(_`&nbsp;`),e)},kp=(t,e)=>{const s=[],o=e.length;return o<1?_`${t}`:(e.forEach((i,n)=>{const r=t.substring(i[0],i[1]);n===0&&i[0]!==0&&s.push(...Bo(t.substring(0,e[0][0]))),n>0&&n<o&&i[0]-e[n-1][1]!==0&&s.push(...Bo(t.substring(e[n-1][1],i[0]))),s.push(_`<b>${Bo(r)}</b>`),n===o-1&&i[1]<t.length&&s.push(...Bo(t.substring(i[1],t.length)))}),s)};class Ip{constructor(e){this._activeIndex=-1,this._options=[],this._filterPattern="",this._filterMethod="fuzzy",this._combobox=!1,this._indexByValue=new Map,this._indexByLabel=new Map,this._selectedIndex=-1,this._selectedIndexes=new Set,this._multiSelect=!1,this._numOfVisibleOptions=0,(this._host=e).addController(this)}hostConnected(){}get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e,this._host.requestUpdate()}get relativeActiveIndex(){var e;return((e=this._options[this._activeIndex])==null?void 0:e.filteredIndex)??-1}set comboboxMode(e){this._combobox=e,this._host.requestUpdate()}get comboboxMode(){return this._combobox}get multiSelect(){return this._multiSelect}set multiSelect(e){this._selectedIndex=-1,this._selectedIndexes.clear(),this._multiSelect=e,this._host.requestUpdate()}get selectedIndex(){return this._selectedIndex}set selectedIndex(e){var o;this._selectedIndex!==-1&&((o=this._options[this._selectedIndex]).selected??(o.selected=!1));const s=this.getOptionByIndex(e);this._selectedIndex=s?e:-1,this._host.requestUpdate()}get selectedIndexes(){return Array.from(this._selectedIndexes)}set selectedIndexes(e){this._selectedIndexes.forEach(s=>{this._options[s].selected=!1}),this._selectedIndexes=new Set(e),e.forEach(s=>{this._options[s]!==void 0&&(this._options[s].selected=!0)}),this._host.requestUpdate()}set value(e){if(this._multiSelect){const s=e.map(o=>this._indexByValue.get(o)).filter(o=>o!==void 0);this._selectedIndexes=new Set(s)}else this._selectedIndex=this._indexByValue.get(e)??-1;this._host.requestUpdate()}get value(){return this._multiSelect?this._selectedIndexes.size>0?Array.from(this._selectedIndexes).map(e=>this._options[e].value):[]:this._selectedIndex>-1?this._options[this._selectedIndex].value:""}set multiSelectValue(e){const s=e.map(o=>this._indexByValue.get(o)).filter(o=>o!==void 0);this._selectedIndexes=new Set(s)}get multiSelectValue(){return this._selectedIndexes.size>0?Array.from(this._selectedIndexes).map(e=>this._options[e].value):[]}get filterPattern(){return this._filterPattern}set filterPattern(e){e!==this._filterPattern&&(this._filterPattern=e,this._updateState())}get filterMethod(){return this._filterMethod}set filterMethod(e){e!==this._filterMethod&&(this._filterMethod=e,this._updateState())}get options(){return this._options}get numOfVisibleOptions(){return this._numOfVisibleOptions}get numOptions(){return this._options.length}populate(e){this._indexByValue.clear(),this._indexByLabel.clear(),this._options=e.map((s,o)=>(this._indexByValue.set(s.value??"",o),this._indexByLabel.set(s.label??"",o),{description:s.description??"",disabled:s.disabled??!1,label:s.label??"",selected:s.selected??!1,value:s.value??"",index:o,filteredIndex:o,ranges:[],visible:!0})),this._numOfVisibleOptions=this._options.length}add(e){const s=this._options.length,{description:o,disabled:i,label:n,selected:r,value:l}=e;let a=!0,d=[];if(this._combobox&&this._filterPattern!==""){const c=this._searchByPattern(n??"");a=c.match,d=c.ranges}this._indexByValue.set(l??"",s),this._indexByLabel.set(n??"",s),r&&(this._selectedIndex=s,this._selectedIndexes.add(s),this._activeIndex=s),this._options.push({index:s,filteredIndex:s,description:o??"",disabled:i??!1,label:n??"",selected:r??!1,value:l??"",visible:a,ranges:d}),a&&(this._numOfVisibleOptions+=1)}clear(){this._options=[],this._indexByValue.clear(),this._indexByLabel.clear(),this._numOfVisibleOptions=0}getIsIndexSelected(e){return this._multiSelect?this._selectedIndexes.has(e):this._selectedIndex===e}expandMultiSelection(e){e.forEach(s=>{const o=this._indexByValue.get(s)??-1;o!==-1&&this._selectedIndexes.add(o)}),this._host.requestUpdate()}toggleActiveMultiselectOption(){const e=this._options[this._activeIndex]??null;if(!e)return;this._selectedIndexes.has(e.index)?this._selectedIndexes.delete(e.index):this._selectedIndexes.add(e.index),this._host.requestUpdate()}toggleOptionSelected(e){const s=this._selectedIndexes.has(e);this._options[e].selected=!this._options[e].selected,s?this._selectedIndexes.delete(e):this._selectedIndexes.add(e),this._host.requestUpdate()}getActiveOption(){return this._options[this._activeIndex]??null}getSelectedOption(){return this._options[this._selectedIndex]??null}getOptionByIndex(e){return this._options[e]??null}findOptionIndex(e){return this._indexByValue.get(e)??-1}getOptionByValue(e,s=!1){const o=this._indexByValue.get(e)??-1;return o===-1?null:s?this._options[o]:this._options[o].visible?this._options[o]:null}getOptionByLabel(e){const s=this._indexByLabel.get(e)??-1;return s===-1?null:this._options[s]}next(e){const s=e??this._activeIndex;let o=-1;for(let i=s+1;i<this._options.length;i++)if(this._options[i]&&!this._options[i].disabled&&this._options[i].visible){o=i;break}return o>-1?this._options[o]:null}prev(e){const s=e??this._activeIndex;let o=-1;for(let i=s-1;i>=0;i--)if(this._options[i]&&!this._options[i].disabled&&this._options[i].visible){o=i;break}return o>-1?this._options[o]:null}activateDefault(){if(this._multiSelect){if(this._selectedIndexes.size>0){const s=this._selectedIndexes.values().next();this._activeIndex=s.value?s.value:0}}else this._selectedIndex>-1?this._activeIndex=this._selectedIndex:this._activeIndex=0;this._host.requestUpdate()}selectAll(){this._multiSelect&&(this._options.forEach((e,s)=>{this._options[s].selected=!0,this._selectedIndexes.add(s)}),this._host.requestUpdate())}selectNone(){this._multiSelect&&(this._options.forEach((e,s)=>{this._options[s].selected=!1}),this._selectedIndexes.clear(),this._host.requestUpdate())}_searchByPattern(e){let s;switch(this._filterMethod){case"startsWithPerTerm":s=va(e,this._filterPattern);break;case"startsWith":s=ba(e,this._filterPattern);break;case"contains":s=ga(e,this._filterPattern);break;default:s=ma(e,this._filterPattern)}return s}_updateState(){if(!this._combobox||this._filterPattern==="")this._options.forEach((e,s)=>{this._options[s].visible=!0,this._options[s].ranges=[]}),this._numOfVisibleOptions=this._options.length;else{let e=-1;this._numOfVisibleOptions=0,this._options.forEach(({label:s},o)=>{const i=this._searchByPattern(s);this._options[o].visible=i.match,this._options[o].ranges=i.ranges,this._options[o].filteredIndex=i.match?++e:-1,i.match&&(this._numOfVisibleOptions+=1)})}this._host.requestUpdate()}}const Ep=[q,H`
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
  `];var Ce=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};let _e=class extends G{set scrollPos(e){this._scrollPos=e,this._updateScrollbar(),this._updateThumbPosition(),this.requestUpdate()}get scrollPos(){return this._scrollPos}get scrollMax(){return this._scrollableContainer?this._scrollableContainer.scrollHeight:0}constructor(){super(),this.alwaysVisible=!1,this.fastScrollSensitivity=5,this.minThumbSize=20,this.mouseWheelScrollSensitivity=1,this.shadow=!0,this.scrolled=!1,this._scrollPos=0,this._isDragging=!1,this._thumbHeight=0,this._thumbY=0,this._thumbVisible=!1,this._thumbFade=!1,this._thumbActive=!1,this._scrollThumbStartY=0,this._mouseStartY=0,this._scrollbarVisible=!0,this._scrollbarTrackZ=0,this._resizeObserverCallback=()=>{this._updateScrollbar(),this._updateThumbPosition()},this._handleSlotChange=()=>{this._updateScrollbar(),this._updateThumbPosition(),this._zIndexFix()},this._handleScrollThumbMouseMove=e=>{const s=this._scrollThumbStartY+(e.screenY-this._mouseStartY);this._thumbY=this._limitThumbPos(s),this.scrollPos=this._calculateScrollPosFromThumbPos(this._thumbY),this.dispatchEvent(new CustomEvent("vsc-scrollable-scroll",{detail:this.scrollPos}))},this._handleScrollThumbMouseUp=e=>{this._isDragging=!1,this._thumbActive=!1;const s=this.getBoundingClientRect(),{x:o,y:i,width:n,height:r}=s,{pageX:l,pageY:a}=e;(l>o+n||l<o||a>i+r||a<i)&&(this._thumbFade=!0,this._thumbVisible=!1),document.removeEventListener("mousemove",this._handleScrollThumbMouseMove),document.removeEventListener("mouseup",this._handleScrollThumbMouseUp)},this._handleComponentMouseOver=()=>{this._thumbVisible=!0,this._thumbFade=!1},this._handleComponentMouseOut=()=>{this._thumbActive||(this._thumbVisible=!1,this._thumbFade=!0)},this._handleComponentWheel=e=>{e.preventDefault();const s=e.altKey?this.mouseWheelScrollSensitivity*this.fastScrollSensitivity:this.mouseWheelScrollSensitivity;this.scrollPos=this._limitScrollPos(this.scrollPos+e.deltaY*s),this.dispatchEvent(new CustomEvent("vsc-scrollable-scroll",{detail:this.scrollPos}))},this._handleScrollableContainerScroll=e=>{e.currentTarget&&(this.scrollPos=e.currentTarget.scrollTop)},this.addEventListener("mouseover",this._handleComponentMouseOver),this.addEventListener("mouseout",this._handleComponentMouseOut),this.addEventListener("wheel",this._handleComponentWheel)}connectedCallback(){super.connectedCallback(),this._hostResizeObserver=new ResizeObserver(this._resizeObserverCallback),this._contentResizeObserver=new ResizeObserver(this._resizeObserverCallback),this.requestUpdate(),this.updateComplete.then(()=>{this._hostResizeObserver.observe(this),this._contentResizeObserver.observe(this._contentElement),this._updateThumbPosition()})}disconnectedCallback(){super.disconnectedCallback(),this._hostResizeObserver.unobserve(this),this._hostResizeObserver.disconnect(),this._contentResizeObserver.unobserve(this._contentElement),this._contentResizeObserver.disconnect()}firstUpdated(e){this._updateThumbPosition()}_calcThumbHeight(){var i;const e=this.offsetHeight,s=((i=this._contentElement)==null?void 0:i.offsetHeight)??0,o=e*(e/s);return Math.max(this.minThumbSize,o)}_updateScrollbar(){var o;const e=((o=this._contentElement)==null?void 0:o.offsetHeight)??0;this.offsetHeight>=e?this._scrollbarVisible=!1:(this._scrollbarVisible=!0,this._thumbHeight=this._calcThumbHeight()),this.requestUpdate()}_zIndexFix(){let e=0;this._assignedElements.forEach(s=>{if("style"in s){const o=window.getComputedStyle(s).zIndex;/([0-9-])+/g.test(o)&&(e=Number(o)>e?Number(o):e)}}),this._scrollbarTrackZ=e+1,this.requestUpdate()}_updateThumbPosition(){if(!this._scrollableContainer)return;const e=this._scrollPos;this.scrolled=e>0;const s=this.offsetHeight,o=this._thumbHeight,n=this._contentElement.offsetHeight-s,r=e/n,l=s-o;this._thumbY=Math.min(r*(s-o),l)}_calculateScrollPosFromThumbPos(e){const s=this.getBoundingClientRect().height,o=this._scrollThumbElement.getBoundingClientRect().height,i=this._contentElement.getBoundingClientRect().height,n=e/(s-o)*(i-s);return this._limitScrollPos(n)}_limitScrollPos(e){return e<0?0:e>this.scrollMax?this.scrollMax:e}_limitThumbPos(e){const s=this.getBoundingClientRect().height,o=this._scrollThumbElement.getBoundingClientRect().height;return e<0?0:e>s-o?s-o:e}_handleScrollThumbMouseDown(e){const s=this.getBoundingClientRect(),o=this._scrollThumbElement.getBoundingClientRect();this._mouseStartY=e.screenY,this._scrollThumbStartY=o.top-s.top,this._isDragging=!0,this._thumbActive=!0,document.addEventListener("mousemove",this._handleScrollThumbMouseMove),document.addEventListener("mouseup",this._handleScrollThumbMouseUp)}_handleScrollbarTrackPress(e){e.target===e.currentTarget&&(this._thumbY=e.offsetY-this._thumbHeight/2,this.scrollPos=this._calculateScrollPosFromThumbPos(this._thumbY))}render(){return _`
      <div
        class="scrollable-container"
        .style=${Be({userSelect:this._isDragging?"none":"auto"})}
        .scrollTop=${this._scrollPos}
        @scroll=${this._handleScrollableContainerScroll}
      >
        <div
          class=${te({shadow:!0,visible:this.scrolled})}
          .style=${Be({zIndex:String(this._scrollbarTrackZ)})}
        ></div>
        ${this._isDragging?_`<div class="prevent-interaction"></div>`:R}
        <div
          class=${te({"scrollbar-track":!0,hidden:!this._scrollbarVisible})}
          @mousedown=${this._handleScrollbarTrackPress}
        >
          <div
            class=${te({"scrollbar-thumb":!0,visible:this.alwaysVisible?!0:this._thumbVisible,fade:this.alwaysVisible?!1:this._thumbFade,active:this._thumbActive})}
            .style=${Be({height:`${this._thumbHeight}px`,top:`${this._thumbY}px`})}
            @mousedown=${this._handleScrollThumbMouseDown}
          ></div>
        </div>
        <div class="content">
          <slot @slotchange=${this._handleSlotChange}></slot>
        </div>
      </div>
    `}};_e.styles=Ep;Ce([h({type:Boolean,reflect:!0,attribute:"always-visible"})],_e.prototype,"alwaysVisible",void 0);Ce([h({type:Number,attribute:"fast-scroll-sensitivity"})],_e.prototype,"fastScrollSensitivity",void 0);Ce([h({type:Number,attribute:"min-thumb-size"})],_e.prototype,"minThumbSize",void 0);Ce([h({type:Number,attribute:"mouse-wheel-scroll-sensitivity"})],_e.prototype,"mouseWheelScrollSensitivity",void 0);Ce([h({type:Boolean,reflect:!0})],_e.prototype,"shadow",void 0);Ce([h({type:Boolean,reflect:!0})],_e.prototype,"scrolled",void 0);Ce([h({type:Number,attribute:"scroll-pos"})],_e.prototype,"scrollPos",null);Ce([h({type:Number,attribute:"scroll-max"})],_e.prototype,"scrollMax",null);Ce([j()],_e.prototype,"_isDragging",void 0);Ce([j()],_e.prototype,"_thumbHeight",void 0);Ce([j()],_e.prototype,"_thumbY",void 0);Ce([j()],_e.prototype,"_thumbVisible",void 0);Ce([j()],_e.prototype,"_thumbFade",void 0);Ce([j()],_e.prototype,"_thumbActive",void 0);Ce([Me(".content")],_e.prototype,"_contentElement",void 0);Ce([Me(".scrollbar-thumb",!0)],_e.prototype,"_scrollThumbElement",void 0);Ce([Me(".scrollable-container")],_e.prototype,"_scrollableContainer",void 0);Ce([gt()],_e.prototype,"_assignedElements",void 0);_e=Ce([U("vscode-scrollable")],_e);var ye=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};const Vo=10,Rt=22;class be extends G{set combobox(e){this._opts.comboboxMode=e}get combobox(){return this._opts.comboboxMode}set disabled(e){this._disabled=e,this.ariaDisabled=e?"true":"false",e===!0?(this._originalTabIndex=this.tabIndex,this.tabIndex=-1):(this.tabIndex=this._originalTabIndex??0,this._originalTabIndex=void 0),this.requestUpdate()}get disabled(){return this._disabled}set filter(e){const s=["contains","fuzzy","startsWith","startsWithPerTerm"];let o;s.includes(e)?o=e:(console.warn(`[VSCode Webview Elements] Invalid filter: "${e}", fallback to default. Valid values are: "contains", "fuzzy", "startsWith", "startsWithPerm".`,this),o="fuzzy"),this._opts.filterMethod=o}get filter(){return this._opts.filterMethod}set options(e){this._opts.populate(e)}get options(){return this._opts.options.map(({label:e,value:s,description:o,selected:i,disabled:n})=>({label:e,value:s,description:o,selected:i,disabled:n}))}constructor(){super(),this.creatable=!1,this.label="",this.invalid=!1,this.focused=!1,this.open=!1,this.position="below",this._opts=new Ip(this),this._firstUpdateCompleted=!1,this._currentDescription="",this._filter="fuzzy",this._selectedIndexes=[],this._options=[],this._value="",this._values=[],this._isPlaceholderOptionActive=!1,this._isBeingFiltered=!1,this._optionListScrollPos=0,this._isHoverForbidden=!1,this._disabled=!1,this._originalTabIndex=void 0,this._onClickOutside=e=>{e.composedPath().findIndex(i=>i===this)===-1&&(this.open=!1)},this._onMouseMove=()=>{this._isHoverForbidden=!1,window.removeEventListener("mousemove",this._onMouseMove)},this._onOptionListScroll=e=>{this._optionListScrollPos=e.detail},this._onComponentKeyDown=e=>{[" ","ArrowUp","ArrowDown","Escape"].includes(e.key)&&(e.stopPropagation(),e.preventDefault()),e.key==="Enter"&&this._onEnterKeyDown(e),e.key===" "&&this._onSpaceKeyDown(),e.key==="Escape"&&this._onEscapeKeyDown(),e.key==="ArrowUp"&&this._onArrowUpKeyDown(),e.key==="ArrowDown"&&this._onArrowDownKeyDown()},this._onComponentFocus=()=>{this.focused=!0},this._onComponentBlur=()=>{this.focused=!1},this.addEventListener("vsc-option-state-change",e=>{e.stopPropagation(),this._setStateFromSlottedElements(),this.requestUpdate()})}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onComponentKeyDown),this.addEventListener("focus",this._onComponentFocus),this.addEventListener("blur",this._onComponentBlur),this._setAutoFocus()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onComponentKeyDown),this.removeEventListener("focus",this._onComponentFocus),this.removeEventListener("blur",this._onComponentBlur)}firstUpdated(e){this._firstUpdateCompleted=!0}willUpdate(e){e.has("required")&&this._firstUpdateCompleted&&this._manageRequired()}update(e){super.update(e),e.has("open")&&(this.open?(this._opts.activateDefault(),this._scrollActiveElementToTop(),window.addEventListener("click",this._onClickOutside)):window.removeEventListener("click",this._onClickOutside))}get _filteredOptions(){return!this.combobox||this._opts.filterPattern===""?this._options:Sp(this._options,this._opts.filterPattern,this._filter)}_setAutoFocus(){this.hasAttribute("autofocus")&&(this.tabIndex<0&&(this.tabIndex=0),this.combobox?this.updateComplete.then(()=>{var e;(e=this.shadowRoot)==null||e.querySelector(".combobox-input").focus()}):this.updateComplete.then(()=>{var e;(e=this.shadowRoot)==null||e.querySelector(".select-face").focus()}))}get _isSuggestedOptionVisible(){if(!(this.combobox&&this.creatable))return!1;const e=this._opts.getOptionByValue(this._opts.filterPattern)!==null,s=this._opts.filterPattern.length>0;return!e&&s}_manageRequired(){}_setStateFromSlottedElements(){const e=this._assignedOptions??[];this._opts.clear(),e.forEach(s=>{const{innerText:o,description:i,disabled:n}=s,r=typeof s.value=="string"?s.value:o.trim(),l=s.selected??!1,a={label:o.trim(),value:r,description:i,selected:l,disabled:n};this._opts.add(a)})}_createSuggestedOption(){const e=this._opts.numOptions,s=document.createElement("vscode-option");return s.value=this._opts.filterPattern,aa(this._opts.filterPattern,s),this.appendChild(s),e}_dispatchChangeEvent(){this.dispatchEvent(new Event("change")),this.dispatchEvent(new Event("input"))}async _createAndSelectSuggestedOption(){}_toggleComboboxDropdown(){this._opts.filterPattern="",this.open=!this.open}_scrollActiveElementToTop(){this._optionListScrollPos=Math.floor(this._opts.relativeActiveIndex*Rt)}async _adjustOptionListScrollPos(e,s){let o=this._opts.numOfVisibleOptions;if(this._isSuggestedOptionVisible&&(o+=1),o<=Vo)return;this._isHoverForbidden=!0,window.addEventListener("mousemove",this._onMouseMove);const n=this._optionListScrollPos,r=s*Rt,l=r>=n&&r<=n+Vo*Rt-Rt;e==="down"&&(l||(this._optionListScrollPos=s*Rt-(Vo-1)*Rt)),e==="up"&&(l||(this._optionListScrollPos=Math.floor(this._opts.relativeActiveIndex*Rt)))}_onFaceClick(){this.open=!this.open}_onComboboxButtonClick(){this._toggleComboboxDropdown()}_onComboboxButtonKeyDown(e){e.key==="Enter"&&this._toggleComboboxDropdown()}_onOptionMouseOver(e){if(this._isHoverForbidden)return;const s=e.target;s.matches(".option")&&(s.matches(".placeholder")?(this._isPlaceholderOptionActive=!0,this._opts.activeIndex=-1):(this._isPlaceholderOptionActive=!1,this._opts.activeIndex=+s.dataset.index))}_onPlaceholderOptionMouseOut(){this._isPlaceholderOptionActive=!1}_onNoOptionsClick(e){e.stopPropagation()}_onEnterKeyDown(e){this._isBeingFiltered=!1,e!=null&&e.composedPath&&e.composedPath().find(o=>o.matches?o.matches("vscode-button.button-accept"):!1)}_onSpaceKeyDown(){if(!this.open){this.open=!0;return}}_onArrowUpKeyDown(){if(this.open){if(this._opts.activeIndex<=0&&!(this.combobox&&this.creatable))return;if(this._isPlaceholderOptionActive){const e=this._opts.numOfVisibleOptions-1;this._opts.activeIndex=e,this._isPlaceholderOptionActive=!1}else{const e=this._opts.prev();if(e!==null){this._opts.activeIndex=(e==null?void 0:e.index)??-1;const s=(e==null?void 0:e.filteredIndex)??-1;s>-1&&this._adjustOptionListScrollPos("up",s)}}}else this.open=!0,this._opts.activateDefault()}_onArrowDownKeyDown(){let e=this._opts.numOfVisibleOptions;const s=this._isSuggestedOptionVisible;if(s&&(e+=1),this.open){if(this._isPlaceholderOptionActive&&this._opts.activeIndex===-1)return;const o=this._opts.next();if(s&&o===null)this._isPlaceholderOptionActive=!0,this._adjustOptionListScrollPos("down",e-1),this._opts.activeIndex=-1;else if(o!==null){const i=(o==null?void 0:o.filteredIndex)??-1;this._opts.activeIndex=(o==null?void 0:o.index)??-1,i>-1&&this._adjustOptionListScrollPos("down",i)}}else this.open=!0,this._opts.activateDefault()}_onEscapeKeyDown(){this.open=!1}_onSlotChange(){this._setStateFromSlottedElements(),this.requestUpdate()}_onComboboxInputFocus(e){e.target.select(),this._isBeingFiltered=!1,this._opts.filterPattern=""}_onComboboxInputBlur(){this._isBeingFiltered=!1}_onComboboxInputInput(e){this._isBeingFiltered=!0,this._opts.filterPattern=e.target.value,this._opts.activeIndex=-1,this.open=!0}_onComboboxInputClick(){this._isBeingFiltered=this._opts.filterPattern!=="",this.open=!0}_onComboboxInputSpaceKeyDown(e){e.key===" "&&e.stopPropagation()}_onOptionClick(e){this._isBeingFiltered=!1}_renderCheckbox(e,s){return _`<span class=${te({"checkbox-icon":!0,checked:e})}>${mp}</span
      ><span class="option-label">${s}</span>`}_renderOptions(){const e=this._opts.options;return _`
      <ul
        aria-label=${K(this.label??void 0)}
        aria-multiselectable=${K(this._opts.multiSelect?"true":void 0)}
        class="options"
        id="select-listbox"
        role="listbox"
        tabindex="-1"
        @click=${this._onOptionClick}
        @mouseover=${this._onOptionMouseOver}
      >
        ${Cp(e,s=>s.index,(s,o)=>{var a;if(!s.visible)return R;const i=s.index===this._opts.activeIndex&&!s.disabled,n=this._opts.getIsIndexSelected(s.index),r={active:i,disabled:s.disabled,option:!0,selected:n},l=((a=s.ranges)==null?void 0:a.length)??0>0?kp(s.label,s.ranges??[]):s.label;return _`
              <li
                aria-selected=${n?"true":"false"}
                class=${te(r)}
                data-index=${s.index}
                data-filtered-index=${o}
                id=${`op-${s.index}`}
                role="option"
                tabindex="-1"
              >
                ${$p(this._opts.multiSelect,()=>this._renderCheckbox(n,l),()=>l)}
              </li>
            `})}
        ${this._renderPlaceholderOption(this._opts.numOfVisibleOptions<1)}
      </ul>
    `}_renderPlaceholderOption(e){return!this.combobox||this._opts.getOptionByLabel(this._opts.filterPattern)?R:this.creatable&&this._opts.filterPattern.length>0?_`<li
        class=${te({option:!0,placeholder:!0,active:this._isPlaceholderOptionActive})}
        @mouseout=${this._onPlaceholderOptionMouseOut}
      >
        Add "${this._opts.filterPattern}"
      </li>`:e?_`<li class="no-options" @click=${this._onNoOptionsClick}>
            No options
          </li>`:R}_renderDescription(){const e=this._opts.getActiveOption();if(!e)return R;const{description:s}=e;return s?_`<div class="description">${s}</div>`:R}_renderSelectFace(){return _`${R}`}_renderComboboxFace(){return _`${R}`}_renderDropdownControls(){return _`${R}`}_renderDropdown(){const e={dropdown:!0,multiple:this._opts.multiSelect,open:this.open},s=this._isSuggestedOptionVisible||this._opts.numOfVisibleOptions===0?this._opts.numOfVisibleOptions+1:this._opts.numOfVisibleOptions,o=Math.min(s*Rt,Vo*Rt);return _`
      <div class=${te(e)}>
        ${this.position==="above"?this._renderDescription():R}
        <vscode-scrollable
          always-visible
          class="scrollable"
          min-thumb-size="40"
          tabindex="-1"
          @vsc-scrollable-scroll=${this._onOptionListScroll}
          .scrollPos=${this._optionListScrollPos}
          .style=${Be({height:`${o}px`})}
        >
          ${this._renderOptions()} ${this._renderDropdownControls()}
        </vscode-scrollable>
        ${this.position==="below"?this._renderDescription():R}
      </div>
    `}}ye([h({type:Boolean,reflect:!0})],be.prototype,"creatable",void 0);ye([h({type:Boolean,reflect:!0})],be.prototype,"combobox",null);ye([h({reflect:!0})],be.prototype,"label",void 0);ye([h({type:Boolean,reflect:!0})],be.prototype,"disabled",null);ye([h({type:Boolean,reflect:!0})],be.prototype,"invalid",void 0);ye([h()],be.prototype,"filter",null);ye([h({type:Boolean,reflect:!0})],be.prototype,"focused",void 0);ye([h({type:Boolean,reflect:!0})],be.prototype,"open",void 0);ye([h({type:Array})],be.prototype,"options",null);ye([h({reflect:!0})],be.prototype,"position",void 0);ye([gt({flatten:!0,selector:"vscode-option"})],be.prototype,"_assignedOptions",void 0);ye([j()],be.prototype,"_currentDescription",void 0);ye([j()],be.prototype,"_filter",void 0);ye([j()],be.prototype,"_filteredOptions",null);ye([j()],be.prototype,"_selectedIndexes",void 0);ye([j()],be.prototype,"_options",void 0);ye([j()],be.prototype,"_value",void 0);ye([j()],be.prototype,"_values",void 0);ye([j()],be.prototype,"_isPlaceholderOptionActive",void 0);ye([j()],be.prototype,"_isBeingFiltered",void 0);ye([j()],be.prototype,"_optionListScrollPos",void 0);const _a=[q,H`
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
  `];var xs=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};let vt=class extends be{set selectedIndexes(e){this._opts.selectedIndexes=e}get selectedIndexes(){return this._opts.selectedIndexes}set value(e){this._opts.multiSelectValue=e,this._opts.selectedIndexes.length>0?this._requestedValueToSetLater=[]:this._requestedValueToSetLater=Array.isArray(e)?e:[e],this._setFormValue(),this._manageRequired()}get value(){return this._opts.multiSelectValue}get form(){return this._internals.form}get type(){return"select-multiple"}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}selectAll(){this._opts.selectAll()}selectNone(){this._opts.selectNone()}constructor(){super(),this.defaultValue=[],this.required=!1,this.name=void 0,this._requestedValueToSetLater=[],this._onOptionClick=e=>{const o=e.composedPath().find(r=>"matches"in r?r.matches("li.option"):!1);if(!o)return;if(o.classList.contains("placeholder")){this._createAndSelectSuggestedOption();return}const n=Number(o.dataset.index);this._opts.toggleOptionSelected(n),this._setFormValue(),this._manageRequired(),this._dispatchChangeEvent()},this._opts.multiSelect=!0,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._setDefaultValue(),this._manageRequired()})}formResetCallback(){this.updateComplete.then(()=>{this.value=this.defaultValue})}formStateRestoreCallback(e,s){const o=Array.from(e.entries()).map(i=>String(i[1]));this.updateComplete.then(()=>{this.value=o})}_setDefaultValue(){if(Array.isArray(this.defaultValue)&&this.defaultValue.length>0){const e=this.defaultValue.map(s=>String(s));this.value=e}}_dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("vsc-change",{detail:{selectedIndexes:this._opts.selectedIndexes,value:this._opts.multiSelectValue}})),super._dispatchChangeEvent()}_onFaceClick(){super._onFaceClick(),this._opts.activeIndex=0}_toggleComboboxDropdown(){super._toggleComboboxDropdown(),this._opts.activeIndex=-1}_manageRequired(){const{value:e}=this;e.length===0&&this.required?this._internals.setValidity({valueMissing:!0},"Please select an item in the list.",this._faceElement):this._internals.setValidity({})}_setFormValue(){const e=new FormData;this._values.forEach(s=>{e.append(this.name??"",s)}),this._internals.setFormValue(e)}async _createAndSelectSuggestedOption(){var o;super._createAndSelectSuggestedOption();const e=this._createSuggestedOption();await this.updateComplete,this.selectedIndexes=[...this.selectedIndexes,e],this._dispatchChangeEvent();const s=new CustomEvent("vsc-multi-select-create-option",{detail:{value:((o=this._opts.getOptionByIndex(e))==null?void 0:o.value)??""}});this.dispatchEvent(s),this.open=!1,this._isPlaceholderOptionActive=!1}_onSlotChange(){super._onSlotChange(),this._requestedValueToSetLater.length>0&&(this._opts.expandMultiSelection(this._requestedValueToSetLater),this._requestedValueToSetLater=this._requestedValueToSetLater.filter(e=>this._opts.findOptionIndex(e)===-1))}_onEnterKeyDown(e){super._onEnterKeyDown(e),this.open?this._isPlaceholderOptionActive?this._createAndSelectSuggestedOption():(this._opts.toggleActiveMultiselectOption(),this._setFormValue(),this._manageRequired(),this._dispatchChangeEvent()):(this._opts.filterPattern="",this.open=!0)}_onMultiAcceptClick(){this.open=!1}_onMultiDeselectAllClick(){this._opts.selectedIndexes=[],this._values=[],this._options=this._options.map(e=>({...e,selected:!1})),this._manageRequired(),this._dispatchChangeEvent()}_onMultiSelectAllClick(){this._opts.selectedIndexes=[],this._values=[],this._options=this._options.map(e=>({...e,selected:!0})),this._options.forEach((e,s)=>{this._selectedIndexes.push(s),this._values.push(e.value),this._dispatchChangeEvent()}),this._setFormValue(),this._manageRequired()}_renderLabel(){switch(this._opts.selectedIndexes.length){case 0:return _`<span class="select-face-badge no-item">0 Selected</span>`;default:return _`<span class="select-face-badge"
          >${this._opts.selectedIndexes.length} Selected</span
        >`}}_renderComboboxFace(){let e="";if(this._isBeingFiltered)e=this._opts.filterPattern;else{const i=this._opts.getSelectedOption();e=(i==null?void 0:i.label)??""}const s=this._opts.activeIndex>-1?`op-${this._opts.activeIndex}`:"",o=this.open?"true":"false";return _`
      <div class="combobox-face face">
        ${this._opts.multiSelect?this._renderLabel():R}
        <input
          aria-activedescendant=${s}
          aria-autocomplete="list"
          aria-controls="select-listbox"
          aria-expanded=${o}
          aria-haspopup="listbox"
          aria-label=${K(this.label)}
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
          ${si}
        </button>
      </div>
    `}_renderSelectFace(){const e=this._opts.activeIndex>-1?`op-${this._opts.activeIndex}`:"",s=this.open?"true":"false";return _`
      <div
        aria-activedescendant=${K(this._opts.multiSelect?void 0:e)}
        aria-controls="select-listbox"
        aria-expanded=${K(this._opts.multiSelect?void 0:s)}
        aria-haspopup="listbox"
        aria-label=${K(this.label??void 0)}
        class="select-face face multiselect"
        @click=${this._onFaceClick}
        .tabIndex=${this.disabled?-1:0}
      >
        ${this._renderLabel()} ${si}
      </div>
    `}_renderDropdownControls(){return this._filteredOptions.length>0?_`
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
        `:_`${R}`}render(){return _`
      <div class="multi-select">
        <slot class="main-slot" @slotchange=${this._onSlotChange}></slot>
        ${this.combobox?this._renderComboboxFace():this._renderSelectFace()}
        ${this._renderDropdown()}
      </div>
    `}};vt.styles=_a;vt.shadowRootOptions={...ht.shadowRootOptions,delegatesFocus:!0};vt.formAssociated=!0;xs([h({type:Array,attribute:"default-value"})],vt.prototype,"defaultValue",void 0);xs([h({type:Boolean,reflect:!0})],vt.prototype,"required",void 0);xs([h({reflect:!0})],vt.prototype,"name",void 0);xs([h({type:Array,attribute:!1})],vt.prototype,"selectedIndexes",null);xs([h({type:Array})],vt.prototype,"value",null);xs([Me(".face")],vt.prototype,"_faceElement",void 0);vt=xs([U("vscode-multi-select")],vt);const Op=[q,H`
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
  `];var xi=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};let Ds=class extends G{constructor(){super(...arguments),this.ariaLabel="Loading",this.ariaLive="assertive",this.role="alert"}render(){return _`<svg class="progress" part="progress" viewBox="0 0 16 16">
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
    </svg>`}};Ds.styles=Op;xi([h({reflect:!0,attribute:"aria-label"})],Ds.prototype,"ariaLabel",void 0);xi([h({reflect:!0,attribute:"aria-live"})],Ds.prototype,"ariaLive",void 0);xi([h({reflect:!0})],Ds.prototype,"role",void 0);Ds=xi([U("vscode-progress-ring")],Ds);const Ap=[q,ua,H`
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
  `];var Ke=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};let Se=class extends da(Ln){constructor(){super(),this.autofocus=!1,this.checked=!1,this.defaultChecked=!1,this.invalid=!1,this.name="",this.value="",this.disabled=!1,this.required=!1,this.role="radio",this.tabIndex=0,this._slottedText="",this.type="radio",this._handleClick=()=>{this.disabled||this.checked||(this._checkButton(),this._handleValueChange(),this._dispatchCustomEvent(),this.dispatchEvent(new Event("change",{bubbles:!0})))},this._handleKeyDown=e=>{var s;!this.disabled&&(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key===" "&&!this.checked&&(this.checked=!0,this._handleValueChange(),this._dispatchCustomEvent(),this.dispatchEvent(new Event("change",{bubbles:!0}))),e.key==="Enter"&&((s=this._internals.form)==null||s.requestSubmit()))},this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleKeyDown),this.addEventListener("click",this._handleClick),this._handleValueChange()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._handleKeyDown),this.removeEventListener("click",this._handleClick)}update(e){super.update(e),e.has("checked")&&this._handleValueChange(),e.has("required")&&this._handleValueChange()}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}formResetCallback(){this._getRadios().forEach(s=>{s.checked=s.defaultChecked}),this.updateComplete.then(()=>{this._handleValueChange()})}formStateRestoreCallback(e,s){this.value===e&&e!==""&&(this.checked=!0)}_dispatchCustomEvent(){this.dispatchEvent(new CustomEvent("vsc-change",{detail:{checked:this.checked,label:this.label,value:this.value},bubbles:!0,composed:!0}))}_getRadios(){const e=this.getRootNode({composed:!0});if(!e)return[];const s=e.querySelectorAll(`vscode-radio[name="${this.name}"]`);return Array.from(s)}_uncheckOthers(e){e.forEach(s=>{s!==this&&(s.checked=!1)})}_checkButton(){const e=this._getRadios();this.checked=!0,e.forEach(s=>{s!==this&&(s.checked=!1)})}setComponentValidity(e){e?this._internals.setValidity({}):this._internals.setValidity({valueMissing:!0},"Please select one of these options.",this._inputEl)}_setGroupValidity(e,s){this.updateComplete.then(()=>{e.forEach(o=>{o.setComponentValidity(s)})})}_setActualFormValue(){let e="";this.checked?e=this.value?this.value:"on":e=null,this._internals.setFormValue(e)}_handleValueChange(){const e=this._getRadios(),s=e.some(o=>o.required);if(this._setActualFormValue(),this.checked)this._uncheckOthers(e),this._setGroupValidity(e,!0);else{const o=!!e.find(n=>n.checked),i=s&&!o;this._setGroupValidity(e,!i)}}render(){const e=te({icon:!0,checked:this.checked}),s=te({"label-inner":!0,"is-slot-empty":this._slottedText===""});return _`
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
          <span class=${s}>
            ${this._renderLabelAttribute()}
            <slot @slotchange=${this._handleSlotChange}></slot>
          </span>
        </label>
      </div>
    `}};Se.styles=Ap;Se.formAssociated=!0;Se.shadowRootOptions={...ht.shadowRootOptions,delegatesFocus:!0};Ke([h({type:Boolean,reflect:!0})],Se.prototype,"autofocus",void 0);Ke([h({type:Boolean,reflect:!0})],Se.prototype,"checked",void 0);Ke([h({type:Boolean,reflect:!0,attribute:"default-checked"})],Se.prototype,"defaultChecked",void 0);Ke([h({type:Boolean,reflect:!0})],Se.prototype,"invalid",void 0);Ke([h({reflect:!0})],Se.prototype,"name",void 0);Ke([h()],Se.prototype,"value",void 0);Ke([h({type:Boolean,reflect:!0})],Se.prototype,"disabled",void 0);Ke([h({type:Boolean,reflect:!0})],Se.prototype,"required",void 0);Ke([h({reflect:!0})],Se.prototype,"role",void 0);Ke([h({type:Number,reflect:!0})],Se.prototype,"tabIndex",void 0);Ke([j()],Se.prototype,"_slottedText",void 0);Ke([Me("#input")],Se.prototype,"_inputEl",void 0);Ke([h()],Se.prototype,"type",void 0);Se=Ke([U("vscode-radio")],Se);const Pp=[q,H`
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
  `];var Us=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};let es=class extends G{constructor(){super(...arguments),this.variant="horizontal",this.role="radiogroup",this._focusedRadio=-1,this._checkedRadio=-1,this._firstContentLoaded=!1,this._onKeyDownBound=this._onKeyDown.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onKeyDownBound)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onKeyDownBound)}_uncheckPreviousChecked(e,s){e!==-1&&(this._radios[e].checked=!1),s!==-1&&(this._radios[s].tabIndex=-1)}_afterCheck(){this._focusedRadio=this._checkedRadio,this._radios[this._checkedRadio].checked=!0,this._radios[this._checkedRadio].tabIndex=0,this._radios[this._checkedRadio].focus()}_checkPrev(){const e=this._radios.findIndex(i=>i.checked),s=this._radios.findIndex(i=>i.focused),o=s!==-1?s:e;this._uncheckPreviousChecked(e,s),o===-1?this._checkedRadio=this._radios.length-1:o-1>=0?this._checkedRadio=o-1:this._checkedRadio=this._radios.length-1,this._afterCheck()}_checkNext(){const e=this._radios.findIndex(i=>i.checked),s=this._radios.findIndex(i=>i.focused),o=s!==-1?s:e;this._uncheckPreviousChecked(e,s),o===-1?this._checkedRadio=0:o+1<this._radios.length?this._checkedRadio=o+1:this._checkedRadio=0,this._afterCheck()}_onKeyDown(e){const{key:s}=e;["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"].includes(s)&&e.preventDefault(),(s==="ArrowRight"||s==="ArrowDown")&&this._checkNext(),(s==="ArrowLeft"||s==="ArrowUp")&&this._checkPrev()}_onChange(e){const s=this._radios.findIndex(o=>o===e.target);s!==-1&&(this._focusedRadio!==-1&&(this._radios[this._focusedRadio].tabIndex=-1),this._checkedRadio!==-1&&this._checkedRadio!==s&&(this._radios[this._checkedRadio].checked=!1),this._focusedRadio=s,this._checkedRadio=s,this._radios[s].tabIndex=0)}_onSlotChange(){if(!this._firstContentLoaded){const e=this._radios.findIndex(s=>s.autofocus);e>-1&&(this._focusedRadio=e),this._firstContentLoaded=!0}this._radios.forEach((e,s)=>{this._focusedRadio>-1?e.tabIndex=s===this._focusedRadio?0:-1:e.tabIndex=s===0?0:-1})}render(){return _`
      <div class="wrapper">
        <slot
          @slotchange=${this._onSlotChange}
          @vsc-change=${this._onChange}
        ></slot>
      </div>
    `}};es.styles=Pp;Us([h({reflect:!0})],es.prototype,"variant",void 0);Us([h({reflect:!0})],es.prototype,"role",void 0);Us([gt({selector:"vscode-radio"})],es.prototype,"_radios",void 0);Us([j()],es.prototype,"_focusedRadio",void 0);Us([j()],es.prototype,"_checkedRadio",void 0);es=Us([U("vscode-radio-group")],es);var ws=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};let bt=class extends be{set selectedIndex(e){this._opts.selectedIndex=e;const s=this._opts.getOptionByIndex(e);s?(this._opts.activeIndex=e,this._value=s.value,this._internals.setFormValue(this._value),this._manageRequired()):(this._value="",this._internals.setFormValue(""),this._manageRequired())}get selectedIndex(){return this._opts.selectedIndex}set value(e){this._opts.value=e,this._opts.selectedIndex>-1?this._requestedValueToSetLater="":this._requestedValueToSetLater=e,this._internals.setFormValue(this._value),this._manageRequired()}get value(){return this._opts.value}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}updateInputValue(){if(!this.combobox)return;const e=this.renderRoot.querySelector(".combobox-input");if(e){const s=this._opts.getSelectedOption();e.value=(s==null?void 0:s.label)??""}}constructor(){super(),this.defaultValue="",this.name=void 0,this.required=!1,this._requestedValueToSetLater="",this._opts.multiSelect=!1,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._manageRequired()})}formResetCallback(){this.value=this.defaultValue}formStateRestoreCallback(e,s){this.updateComplete.then(()=>{this.value=e})}get type(){return"select-one"}get form(){return this._internals.form}async _createAndSelectSuggestedOption(){var o;const e=this._createSuggestedOption();await this.updateComplete,this._opts.selectedIndex=e,this._dispatchChangeEvent();const s=new CustomEvent("vsc-single-select-create-option",{detail:{value:((o=this._opts.getOptionByIndex(e))==null?void 0:o.value)??""}});this.dispatchEvent(s),this.open=!1,this._isPlaceholderOptionActive=!1}_dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("vsc-change",{detail:{selectedIndex:this._opts.selectedIndex,value:this._value}})),super._dispatchChangeEvent()}_setStateFromSlottedElements(){super._setStateFromSlottedElements(),!this.combobox&&this._opts.selectedIndexes.length===0&&(this._opts.selectedIndex=this._opts.options.length>0?0:-1)}_onSlotChange(){if(super._onSlotChange(),this._requestedValueToSetLater){const e=this._opts.getOptionByValue(this._requestedValueToSetLater);e&&(this._opts.selectedIndex=e.index,this._requestedValueToSetLater="")}this._opts.selectedIndex>-1&&this._opts.numOptions>0?(this._internals.setFormValue(this._opts.value),this._manageRequired()):(this._internals.setFormValue(null),this._manageRequired())}_onEnterKeyDown(e){super._onEnterKeyDown(e);let s=!1;this.combobox?this.open?this._isPlaceholderOptionActive?this._createAndSelectSuggestedOption():(s=this._opts.activeIndex!==this._opts.selectedIndex,this._opts.selectedIndex=this._opts.activeIndex,this.open=!1):(this.open=!0,this._scrollActiveElementToTop()):this.open?(s=this._opts.activeIndex!==this._opts.selectedIndex,this._opts.selectedIndex=this._opts.activeIndex,this.open=!1):(this.open=!0,this._scrollActiveElementToTop()),s&&(this._dispatchChangeEvent(),this.updateInputValue(),this._internals.setFormValue(this._opts.value),this._manageRequired())}_onOptionClick(e){super._onOptionClick(e);const o=e.composedPath().find(n=>{const r=n;if("matches"in r)return r.matches("li.option")});if(!o||o.matches(".disabled"))return;o.classList.contains("placeholder")?this.creatable&&this._createAndSelectSuggestedOption():(this._opts.selectedIndex=Number(o.dataset.index),this.open=!1,this._internals.setFormValue(this._value),this._manageRequired(),this._dispatchChangeEvent())}_manageRequired(){const{value:e}=this;e===""&&this.required?this._internals.setValidity({valueMissing:!0},"Please select an item in the list.",this._face):this._internals.setValidity({})}_renderSelectFace(){const e=this._opts.getSelectedOption(),s=(e==null?void 0:e.label)??"",o=this._opts.activeIndex>-1?`op-${this._opts.activeIndex}`:"";return _`
      <div
        aria-activedescendant=${o}
        aria-controls="select-listbox"
        aria-expanded=${this.open?"true":"false"}
        aria-haspopup="listbox"
        aria-label=${K(this.label)}
        class="select-face face"
        @click=${this._onFaceClick}
        role="combobox"
        tabindex="0"
      >
        <span class="text">${s}</span> ${si}
      </div>
    `}_renderComboboxFace(){let e="";if(this._isBeingFiltered)e=this._opts.filterPattern;else{const i=this._opts.getSelectedOption();e=(i==null?void 0:i.label)??""}const s=this._opts.activeIndex>-1?`op-${this._opts.activeIndex}`:"",o=this.open?"true":"false";return _`
      <div class="combobox-face face">
        <input
          aria-activedescendant=${s}
          aria-autocomplete="list"
          aria-controls="select-listbox"
          aria-expanded=${o}
          aria-haspopup="listbox"
          aria-label=${K(this.label)}
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
          ${si}
        </button>
      </div>
    `}render(){return _`
      <div class="single-select">
        <slot class="main-slot" @slotchange=${this._onSlotChange}></slot>
        ${this.combobox?this._renderComboboxFace():this._renderSelectFace()}
        ${this._renderDropdown()}
      </div>
    `}};bt.styles=_a;bt.shadowRootOptions={...ht.shadowRootOptions,delegatesFocus:!0};bt.formAssociated=!0;ws([h({attribute:"default-value"})],bt.prototype,"defaultValue",void 0);ws([h({reflect:!0})],bt.prototype,"name",void 0);ws([h({type:Number,attribute:"selected-index"})],bt.prototype,"selectedIndex",null);ws([h({type:String})],bt.prototype,"value",null);ws([h({type:Boolean,reflect:!0})],bt.prototype,"required",void 0);ws([Me(".face")],bt.prototype,"_face",void 0);bt=ws([U("vscode-single-select")],bt);const Tp=[q,H`
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
  `];var je=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n},on;const Dr="50%",Rp=4,Lo=t=>{if(!t)return{value:0,unit:"pixel"};let e,s;t.endsWith("%")?(e="percent",s=+t.substring(0,t.length-1)):t.endsWith("px")?(e="pixel",s=+t.substring(0,t.length-2)):(e="pixel",s=+t);const o=isNaN(s)?0:s;return{unit:e,value:o}},Mo=(t,e)=>e===0?0:Math.min(100,t/e*100),Fr=(t,e)=>e*(t/100);let Oe=on=class extends G{set split(e){this._split!==e&&(this._split=e,this.resetHandlePosition())}get split(){return this._split}set handlePosition(e){this._rawHandlePosition=e,this._handlePositionPropChanged()}get handlePosition(){return this._rawHandlePosition}set fixedPane(e){this._fixedPane=e,this._fixedPanePropChanged()}get fixedPane(){return this._fixedPane}constructor(){super(),this._split="vertical",this.resetOnDblClick=!1,this.handleSize=4,this.initialHandlePosition=Dr,this._fixedPane="none",this._handlePosition=0,this._isDragActive=!1,this._hover=!1,this._hide=!1,this._boundRect=new DOMRect,this._handleOffset=0,this._wrapperObserved=!1,this._fixedPaneSize=0,this._handleResize=e=>{const s=e[0].contentRect,{width:o,height:i}=s;this._boundRect=s;const n=this.split==="vertical"?o:i;this.fixedPane==="start"&&(this._handlePosition=this._fixedPaneSize),this.fixedPane==="end"&&(this._handlePosition=n-this._fixedPaneSize)},this._handleMouseUp=e=>{this._isDragActive=!1,e.target!==this&&(this._hover=!1,this._hide=!0),window.removeEventListener("mouseup",this._handleMouseUp),window.removeEventListener("mousemove",this._handleMouseMove);const{width:s,height:o}=this._boundRect,i=this.split==="vertical"?s:o,n=Mo(this._handlePosition,i);this.dispatchEvent(new CustomEvent("vsc-split-layout-change",{detail:{position:this._handlePosition,positionInPercentage:n},composed:!0}))},this._handleMouseMove=e=>{const{clientX:s,clientY:o}=e,{left:i,top:n,height:r,width:l}=this._boundRect,a=this.split==="vertical",d=a?l:r,c=a?s-i:o-n;this._handlePosition=Math.max(0,Math.min(c-this._handleOffset+this.handleSize/2,d)),this.fixedPane==="start"&&(this._fixedPaneSize=this._handlePosition),this.fixedPane==="end"&&(this._fixedPaneSize=d-this._handlePosition)},this._resizeObserver=new ResizeObserver(this._handleResize)}resetHandlePosition(){if(!this._wrapperEl){this._handlePosition=0;return}const{width:e,height:s}=this._wrapperEl.getBoundingClientRect(),o=this.split==="vertical"?e:s,{value:i,unit:n}=Lo(this.initialHandlePosition??Dr);n==="percent"?this._handlePosition=Fr(i,o):this._handlePosition=i}connectedCallback(){super.connectedCallback()}firstUpdated(e){this.fixedPane!=="none"&&(this._resizeObserver.observe(this._wrapperEl),this._wrapperObserved=!0),this._boundRect=this._wrapperEl.getBoundingClientRect();const{value:s,unit:o}=this.handlePosition?Lo(this.handlePosition):Lo(this.initialHandlePosition);this._setPosition(s,o),this._initFixedPane()}_handlePositionPropChanged(){if(this.handlePosition&&this._wrapperEl){this._boundRect=this._wrapperEl.getBoundingClientRect();const{value:e,unit:s}=Lo(this.handlePosition);this._setPosition(e,s)}}_fixedPanePropChanged(){this._wrapperEl&&this._initFixedPane()}_initFixedPane(){if(this.fixedPane==="none")this._wrapperObserved&&(this._resizeObserver.unobserve(this._wrapperEl),this._wrapperObserved=!1);else{const{width:e,height:s}=this._boundRect,o=this.split==="vertical"?e:s;this._fixedPaneSize=this.fixedPane==="start"?this._handlePosition:o-this._handlePosition,this._wrapperObserved||(this._resizeObserver.observe(this._wrapperEl),this._wrapperObserved=!0)}}_setPosition(e,s){const{width:o,height:i}=this._boundRect,n=this.split==="vertical"?o:i;this._handlePosition=s==="percent"?Fr(e,n):e}_handleMouseOver(){this._hover=!0,this._hide=!1}_handleMouseOut(e){e.buttons!==1&&(this._hover=!1,this._hide=!0)}_handleMouseDown(e){e.stopPropagation(),e.preventDefault(),this._boundRect=this._wrapperEl.getBoundingClientRect();const{left:s,top:o}=this._boundRect,{left:i,top:n}=this._handleEl.getBoundingClientRect(),r=e.clientX-s,l=e.clientY-o;this.split==="vertical"&&(this._handleOffset=r-(i-s)),this.split==="horizontal"&&(this._handleOffset=l-(n-o)),this._isDragActive=!0,window.addEventListener("mouseup",this._handleMouseUp),window.addEventListener("mousemove",this._handleMouseMove)}_handleDblClick(){this.resetOnDblClick&&this.resetHandlePosition()}_handleSlotChange(){[...this._nestedLayoutsAtStart,...this._nestedLayoutsAtEnd].forEach(s=>{s instanceof on&&s.resetHandlePosition()})}render(){const{width:e,height:s}=this._boundRect,o=this.split==="vertical"?e:s,i=this.fixedPane!=="none"?`${this._handlePosition}px`:`${Mo(this._handlePosition,o)}%`;let n="";this.fixedPane==="start"?n=`0 0 ${this._fixedPaneSize}px`:n=`1 1 ${Mo(this._handlePosition,o)}%`;let r="";this.fixedPane==="end"?r=`0 0 ${this._fixedPaneSize}px`:r=`1 1 ${Mo(o-this._handlePosition,o)}%`;const l={left:this.split==="vertical"?i:"0",top:this.split==="vertical"?"0":i},a=this.handleSize??Rp;this.split==="vertical"&&(l.marginLeft=`${0-a/2}px`,l.width=`${a}px`),this.split==="horizontal"&&(l.height=`${a}px`,l.marginTop=`${0-a/2}px`);const d=te({"handle-overlay":!0,active:this._isDragActive,"split-vertical":this.split==="vertical","split-horizontal":this.split==="horizontal"}),c=te({handle:!0,hover:this._hover,hide:this._hide,"split-vertical":this.split==="vertical","split-horizontal":this.split==="horizontal"}),f={wrapper:!0,horizontal:this.split==="horizontal"};return _`
      <div class=${te(f)}>
        <div class="start" .style=${Be({flex:n})}>
          <slot name="start" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div class="end" .style=${Be({flex:r})}>
          <slot name="end" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div class=${d}></div>
        <div
          class=${c}
          .style=${Be(l)}
          @mouseover=${this._handleMouseOver}
          @mouseout=${this._handleMouseOut}
          @mousedown=${this._handleMouseDown}
          @dblclick=${this._handleDblClick}
        ></div>
      </div>
    `}};Oe.styles=Tp;je([h({reflect:!0})],Oe.prototype,"split",null);je([h({type:Boolean,reflect:!0,attribute:"reset-on-dbl-click"})],Oe.prototype,"resetOnDblClick",void 0);je([h({type:Number,reflect:!0,attribute:"handle-size"})],Oe.prototype,"handleSize",void 0);je([h({reflect:!0,attribute:"initial-handle-position"})],Oe.prototype,"initialHandlePosition",void 0);je([h({attribute:"handle-position"})],Oe.prototype,"handlePosition",null);je([h({attribute:"fixed-pane"})],Oe.prototype,"fixedPane",null);je([j()],Oe.prototype,"_handlePosition",void 0);je([j()],Oe.prototype,"_isDragActive",void 0);je([j()],Oe.prototype,"_hover",void 0);je([j()],Oe.prototype,"_hide",void 0);je([Me(".wrapper")],Oe.prototype,"_wrapperEl",void 0);je([Me(".handle")],Oe.prototype,"_handleEl",void 0);je([gt({slot:"start",selector:"vscode-split-layout"})],Oe.prototype,"_nestedLayoutsAtStart",void 0);je([gt({slot:"end",selector:"vscode-split-layout"})],Oe.prototype,"_nestedLayoutsAtEnd",void 0);Oe=on=je([U("vscode-split-layout")],Oe);const Bp=[q,H`
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
  `];var qs=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};let pt=class extends G{constructor(){super(...arguments),this.active=!1,this.ariaControls="",this.panel=!1,this.role="tab",this.tabId=-1}attributeChangedCallback(e,s,o){if(super.attributeChangedCallback(e,s,o),e==="active"){const i=o!==null;this.ariaSelected=i?"true":"false",this.tabIndex=i?0:-1}}render(){return _`
      <div
        class=${te({wrapper:!0,active:this.active,panel:this.panel})}
      >
        <div class="before"><slot name="content-before"></slot></div>
        <div class="main"><slot></slot></div>
        <div class="after"><slot name="content-after"></slot></div>
        <span
          class=${te({"active-indicator":!0,active:this.active,panel:this.panel})}
        ></span>
      </div>
    `}};pt.styles=Bp;qs([h({type:Boolean,reflect:!0})],pt.prototype,"active",void 0);qs([h({reflect:!0,attribute:"aria-controls"})],pt.prototype,"ariaControls",void 0);qs([h({type:Boolean,reflect:!0})],pt.prototype,"panel",void 0);qs([h({reflect:!0})],pt.prototype,"role",void 0);qs([h({type:Number,reflect:!0,attribute:"tab-id"})],pt.prototype,"tabId",void 0);pt=qs([U("vscode-tab-header")],pt);const Vp=[q,H`
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
  `];var Ws=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};let jt=class extends G{constructor(){super(...arguments),this.hidden=!1,this.ariaLabelledby="",this.panel=!1,this.role="tabpanel",this.tabIndex=0}render(){return _` <slot></slot> `}};jt.styles=Vp;Ws([h({type:Boolean,reflect:!0})],jt.prototype,"hidden",void 0);Ws([h({reflect:!0,attribute:"aria-labelledby"})],jt.prototype,"ariaLabelledby",void 0);Ws([h({type:Boolean,reflect:!0})],jt.prototype,"panel",void 0);Ws([h({reflect:!0})],jt.prototype,"role",void 0);Ws([h({type:Number,reflect:!0})],jt.prototype,"tabIndex",void 0);jt=Ws([U("vscode-tab-panel")],jt);const Lp=[q,H`
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
  `];var ya=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};let oi=class extends G{constructor(){super(...arguments),this.role="rowgroup"}render(){return _` <slot></slot> `}};oi.styles=Lp;ya([h({reflect:!0})],oi.prototype,"role",void 0);oi=ya([U("vscode-table-body")],oi);const Mp=[q,H`
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
  `];var wi=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};let Fs=class extends G{constructor(){super(...arguments),this.role="cell",this.columnLabel="",this.compact=!1}render(){const e=this.columnLabel?_`<div class="column-label" role="presentation">
          ${this.columnLabel}
        </div>`:R;return _`
      <div class="wrapper">
        ${e}
        <slot></slot>
      </div>
    `}};Fs.styles=Mp;wi([h({reflect:!0})],Fs.prototype,"role",void 0);wi([h({attribute:"column-label"})],Fs.prototype,"columnLabel",void 0);wi([h({type:Boolean,reflect:!0})],Fs.prototype,"compact",void 0);Fs=wi([U("vscode-table-cell")],Fs);const Dp=[q,H`
    :host {
      background-color: var(--vscode-keybindingTable-headerBackground);
      display: table;
      table-layout: fixed;
      width: 100%;
    }
  `];var xa=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};let ii=class extends G{constructor(){super(...arguments),this.role="rowgroup"}render(){return _` <slot></slot> `}};ii.styles=Dp;xa([h({reflect:!0})],ii.prototype,"role",void 0);ii=xa([U("vscode-table-header")],ii);const Fp=[q,H`
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
  `];var wa=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};let ni=class extends G{constructor(){super(...arguments),this.role="columnheader"}render(){return _`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};ni.styles=Fp;wa([h({reflect:!0})],ni.prototype,"role",void 0);ni=wa([U("vscode-table-header-cell")],ni);const zp=[q,H`
    :host {
      border-top-color: var(--vscode-editorGroup-border);
      border-top-style: solid;
      border-top-width: var(--vsc-row-border-top-width);
      display: var(--vsc-row-display);
      width: 100%;
    }
  `];var Ca=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};let ri=class extends G{constructor(){super(...arguments),this.role="row"}render(){return _` <slot></slot> `}};ri.styles=zp;Ca([h({reflect:!0})],ri.prototype,"role",void 0);ri=Ca([U("vscode-table-row")],ri);const zr=(t,e)=>typeof t=="number"&&!Number.isNaN(t)?t/e*100:typeof t=="string"&&/^[0-9.]+$/.test(t)?Number(t)/e*100:typeof t=="string"&&/^[0-9.]+%$/.test(t)?Number(t.substring(0,t.length-1)):typeof t=="string"&&/^[0-9.]+px$/.test(t)?Number(t.substring(0,t.length-2))/e*100:null,jp=[q,H`
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
  `];var ge=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};const jr=100;let pe=class extends G{constructor(){super(...arguments),this.role="table",this.resizable=!1,this.responsive=!1,this.bordered=!1,this.borderedColumns=!1,this.borderedRows=!1,this.breakpoint=300,this.minColumnWidth="50px",this.delayedResizing=!1,this.compact=!1,this.zebra=!1,this.zebraOdd=!1,this._sashPositions=[],this._isDragging=!1,this._sashHovers=[],this._columns=[],this._activeSashElementIndex=-1,this._activeSashCursorOffset=0,this._componentX=0,this._componentH=0,this._componentW=0,this._headerCells=[],this._cellsOfFirstRow=[],this._prevHeaderHeight=0,this._prevComponentHeight=0,this._componentResizeObserverCallback=()=>{this._memoizeComponentDimensions(),this._updateResizeHandlersSize(),this.responsive&&this._toggleCompactView(),this._resizeTableBody()},this._headerResizeObserverCallback=()=>{this._updateResizeHandlersSize()},this._bodyResizeObserverCallback=()=>{this._resizeTableBody()},this._onResizingMouseMove=e=>{e.stopPropagation(),this._updateActiveSashPosition(e.pageX),this.delayedResizing?this._resizeColumns(!1):this._resizeColumns(!0)},this._onResizingMouseUp=e=>{this._resizeColumns(!0),this._updateActiveSashPosition(e.pageX),this._sashHovers[this._activeSashElementIndex]=!1,this._isDragging=!1,this._activeSashElementIndex=-1,document.removeEventListener("mousemove",this._onResizingMouseMove),document.removeEventListener("mouseup",this._onResizingMouseUp)}}set columns(e){this._columns=e,this.isConnected&&this._initDefaultColumnSizes()}get columns(){return this._columns}connectedCallback(){super.connectedCallback(),this._memoizeComponentDimensions(),this._initDefaultColumnSizes()}disconnectedCallback(){var e,s,o;super.disconnectedCallback(),(e=this._componentResizeObserver)==null||e.unobserve(this),(s=this._componentResizeObserver)==null||s.disconnect(),(o=this._bodyResizeObserver)==null||o.disconnect()}_px2Percent(e){return e/this._componentW*100}_percent2Px(e){return this._componentW*e/100}_memoizeComponentDimensions(){const e=this.getBoundingClientRect();this._componentH=e.height,this._componentW=e.width,this._componentX=e.x}_queryHeaderCells(){const e=this._assignedHeaderElements;return e&&e[0]?Array.from(e[0].querySelectorAll("vscode-table-header-cell")):[]}_getHeaderCells(){return this._headerCells.length||(this._headerCells=this._queryHeaderCells()),this._headerCells}_queryCellsOfFirstRow(){const e=this._assignedBodyElements;return e&&e[0]?Array.from(e[0].querySelectorAll("vscode-table-row:first-child vscode-table-cell")):[]}_getCellsOfFirstRow(){return this._cellsOfFirstRow.length||(this._cellsOfFirstRow=this._queryCellsOfFirstRow()),this._cellsOfFirstRow}_resizeTableBody(){let e=0,s=0;const o=this.getBoundingClientRect().height;this._assignedHeaderElements&&this._assignedHeaderElements.length&&(e=this._assignedHeaderElements[0].getBoundingClientRect().height),this._assignedBodyElements&&this._assignedBodyElements.length&&(s=this._assignedBodyElements[0].getBoundingClientRect().height);const i=s-e-o;this._scrollableElement.style.height=i>0?`${o-e}px`:"auto"}_initResizeObserver(){this._componentResizeObserver=new ResizeObserver(this._componentResizeObserverCallback),this._componentResizeObserver.observe(this),this._headerResizeObserver=new ResizeObserver(this._headerResizeObserverCallback),this._headerResizeObserver.observe(this._headerElement)}_calcColWidthPercentages(){const e=this._getHeaderCells().length;let s=this.columns.slice(0,e);const o=s.filter(n=>n==="auto").length+e-s.length;let i=100;if(s=s.map(n=>{const r=zr(n,this._componentW);return r===null?"auto":(i-=r,r)}),s.length<e)for(let n=s.length;n<e;n++)s.push("auto");return s=s.map(n=>n==="auto"?i/o:n),s}_initHeaderCellSizes(e){this._getHeaderCells().forEach((s,o)=>{s.style.width=`${e[o]}%`})}_initBodyColumnSizes(e){this._getCellsOfFirstRow().forEach((s,o)=>{s.style.width=`${e[o]}%`})}_initSashes(e){const s=e.length;let o=0;this._sashPositions=[],e.forEach((i,n)=>{if(n<s-1){const r=o+i;this._sashPositions.push(r),o=r}})}_initDefaultColumnSizes(){const e=this._calcColWidthPercentages();this._initHeaderCellSizes(e),this._initBodyColumnSizes(e),this._initSashes(e)}_updateResizeHandlersSize(){const e=this._headerElement.getBoundingClientRect();if(e.height===this._prevHeaderHeight&&this._componentH===this._prevComponentHeight)return;this._prevHeaderHeight=e.height,this._prevComponentHeight=this._componentH;const s=this._componentH-e.height;this._sashVisibleElements.forEach(o=>{o.style.height=`${s}px`,o.style.top=`${e.height}px`})}_applyCompactViewColumnLabels(){const s=this._getHeaderCells().map(i=>i.innerText);this.querySelectorAll("vscode-table-row").forEach(i=>{i.querySelectorAll("vscode-table-cell").forEach((r,l)=>{r.columnLabel=s[l],r.compact=!0})})}_clearCompactViewColumnLabels(){this.querySelectorAll("vscode-table-cell").forEach(e=>{e.columnLabel="",e.compact=!1})}_toggleCompactView(){const s=this.getBoundingClientRect().width<this.breakpoint;this.compact!==s&&(this.compact=s,s?this._applyCompactViewColumnLabels():this._clearCompactViewColumnLabels())}_onDefaultSlotChange(){this._assignedElements.forEach(e=>{if(e.tagName.toLowerCase()==="vscode-table-header"){e.slot="header";return}if(e.tagName.toLowerCase()==="vscode-table-body"){e.slot="body";return}})}_onHeaderSlotChange(){this._headerCells=this._queryHeaderCells()}_onBodySlotChange(){if(this._initDefaultColumnSizes(),this._initResizeObserver(),this._updateResizeHandlersSize(),!this._bodyResizeObserver){const e=this._assignedBodyElements[0]??null;e&&(this._bodyResizeObserver=new ResizeObserver(this._bodyResizeObserverCallback),this._bodyResizeObserver.observe(e))}}_onSashMouseOver(e){if(this._isDragging)return;const s=e.currentTarget,o=Number(s.dataset.index);this._sashHovers[o]=!0,this.requestUpdate()}_onSashMouseOut(e){if(e.stopPropagation(),this._isDragging)return;const s=e.currentTarget,o=Number(s.dataset.index);this._sashHovers[o]=!1,this.requestUpdate()}_onSashMouseDown(e){e.stopPropagation();const{pageX:s,currentTarget:o}=e,i=o,n=Number(i.dataset.index),l=i.getBoundingClientRect().x;this._isDragging=!0,this._activeSashElementIndex=n,this._sashHovers[this._activeSashElementIndex]=!0,this._activeSashCursorOffset=this._px2Percent(s-l);const a=this._getHeaderCells();this._headerCellsToResize=[],this._headerCellsToResize.push(a[n]),a[n+1]&&(this._headerCellsToResize[1]=a[n+1]);const c=this._bodySlot.assignedElements()[0].querySelectorAll("vscode-table-row:first-child > vscode-table-cell");this._cellsToResize=[],this._cellsToResize.push(c[n]),c[n+1]&&this._cellsToResize.push(c[n+1]),document.addEventListener("mousemove",this._onResizingMouseMove),document.addEventListener("mouseup",this._onResizingMouseUp)}_updateActiveSashPosition(e){const{prevSashPos:s,nextSashPos:o}=this._getSashPositions();let i=zr(this.minColumnWidth,this._componentW);i===null&&(i=0);const n=s?s+i:i,r=o?o-i:jr-i;let l=this._px2Percent(e-this._componentX-this._percent2Px(this._activeSashCursorOffset));l=Math.max(l,n),l=Math.min(l,r),this._sashPositions[this._activeSashElementIndex]=l,this.requestUpdate()}_getSashPositions(){const e=this._sashPositions[this._activeSashElementIndex],s=this._sashPositions[this._activeSashElementIndex-1]||0,o=this._sashPositions[this._activeSashElementIndex+1]||jr;return{sashPos:e,prevSashPos:s,nextSashPos:o}}_resizeColumns(e=!0){const{sashPos:s,prevSashPos:o,nextSashPos:i}=this._getSashPositions(),n=s-o,r=i-s,l=`${n}%`,a=`${r}%`;this._headerCellsToResize[0].style.width=l,this._headerCellsToResize[1]&&(this._headerCellsToResize[1].style.width=a),e&&(this._cellsToResize[0].style.width=l,this._cellsToResize[1]&&(this._cellsToResize[1].style.width=a))}render(){const e=this._sashPositions.map((o,i)=>{const n=te({sash:!0,hover:this._sashHovers[i],resizable:this.resizable}),r=`${o}%`;return this.resizable?_`
            <div
              class=${n}
              data-index=${i}
              .style=${Be({left:r})}
              @mousedown=${this._onSashMouseDown}
              @mouseover=${this._onSashMouseOver}
              @mouseout=${this._onSashMouseOut}
            >
              <div class="sash-visible"></div>
              <div class="sash-clickable"></div>
            </div>
          `:_`<div
            class=${n}
            data-index=${i}
            .style=${Be({left:r})}
          >
            <div class="sash-visible"></div>
          </div>`}),s=te({wrapper:!0,"select-disabled":this._isDragging,"resize-cursor":this._isDragging,"compact-view":this.compact});return _`
      <div class=${s}>
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
    `}};pe.styles=jp;ge([h({reflect:!0})],pe.prototype,"role",void 0);ge([h({type:Boolean,reflect:!0})],pe.prototype,"resizable",void 0);ge([h({type:Boolean,reflect:!0})],pe.prototype,"responsive",void 0);ge([h({type:Boolean,reflect:!0})],pe.prototype,"bordered",void 0);ge([h({type:Boolean,reflect:!0,attribute:"bordered-columns"})],pe.prototype,"borderedColumns",void 0);ge([h({type:Boolean,reflect:!0,attribute:"bordered-rows"})],pe.prototype,"borderedRows",void 0);ge([h({type:Number})],pe.prototype,"breakpoint",void 0);ge([h({type:Array})],pe.prototype,"columns",null);ge([h({attribute:"min-column-width"})],pe.prototype,"minColumnWidth",void 0);ge([h({type:Boolean,reflect:!0,attribute:"delayed-resizing"})],pe.prototype,"delayedResizing",void 0);ge([h({type:Boolean,reflect:!0})],pe.prototype,"compact",void 0);ge([h({type:Boolean,reflect:!0})],pe.prototype,"zebra",void 0);ge([h({type:Boolean,reflect:!0,attribute:"zebra-odd"})],pe.prototype,"zebraOdd",void 0);ge([Me('slot[name="body"]')],pe.prototype,"_bodySlot",void 0);ge([Me(".header")],pe.prototype,"_headerElement",void 0);ge([Me(".scrollable")],pe.prototype,"_scrollableElement",void 0);ge([Nh(".sash-visible")],pe.prototype,"_sashVisibleElements",void 0);ge([gt({flatten:!0,selector:"vscode-table-header, vscode-table-body"})],pe.prototype,"_assignedElements",void 0);ge([gt({slot:"header",flatten:!0,selector:"vscode-table-header"})],pe.prototype,"_assignedHeaderElements",void 0);ge([gt({slot:"body",flatten:!0,selector:"vscode-table-body"})],pe.prototype,"_assignedBodyElements",void 0);ge([j()],pe.prototype,"_sashPositions",void 0);ge([j()],pe.prototype,"_isDragging",void 0);pe=ge([U("vscode-table")],pe);const Hp=[q,H`
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
  `];var Ks=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};let ts=class extends G{constructor(){super(),this.panel=!1,this.role="tablist",this.selectedIndex=0,this._tabHeaders=[],this._tabPanels=[],this._componentId="",this._tabFocus=0,this._componentId=fa()}attributeChangedCallback(e,s,o){super.attributeChangedCallback(e,s,o),e==="selected-index"&&this._setActiveTab(),e==="panel"&&(this._tabHeaders.forEach(i=>i.panel=o!==null),this._tabPanels.forEach(i=>i.panel=o!==null))}_dispatchSelectEvent(){this.dispatchEvent(new CustomEvent("vsc-select",{detail:{selectedIndex:this.selectedIndex},composed:!0})),this.dispatchEvent(new CustomEvent("vsc-tabs-select",{detail:{selectedIndex:this.selectedIndex},composed:!0}))}_setActiveTab(){this._tabFocus=this.selectedIndex,this._tabPanels.forEach((e,s)=>{e.hidden=s!==this.selectedIndex}),this._tabHeaders.forEach((e,s)=>{e.active=s===this.selectedIndex})}_focusPrevTab(){this._tabFocus===0?this._tabFocus=this._tabHeaders.length-1:this._tabFocus-=1}_focusNextTab(){this._tabFocus===this._tabHeaders.length-1?this._tabFocus=0:this._tabFocus+=1}_onHeaderKeyDown(e){(e.key==="ArrowLeft"||e.key==="ArrowRight")&&(e.preventDefault(),this._tabHeaders[this._tabFocus].setAttribute("tabindex","-1"),e.key==="ArrowLeft"?this._focusPrevTab():e.key==="ArrowRight"&&this._focusNextTab(),this._tabHeaders[this._tabFocus].setAttribute("tabindex","0"),this._tabHeaders[this._tabFocus].focus()),e.key==="Enter"&&(e.preventDefault(),this.selectedIndex=this._tabFocus,this._dispatchSelectEvent())}_moveHeadersToHeaderSlot(){const e=this._mainSlotElements.filter(s=>s instanceof pt);e.length>0&&e.forEach(s=>s.setAttribute("slot","header"))}_onMainSlotChange(){this._moveHeadersToHeaderSlot(),this._tabPanels=this._mainSlotElements.filter(e=>e instanceof jt),this._tabPanels.forEach((e,s)=>{e.ariaLabelledby=`t${this._componentId}-h${s}`,e.id=`t${this._componentId}-p${s}`,e.panel=this.panel}),this._setActiveTab()}_onHeaderSlotChange(){this._tabHeaders=this._headerSlotElements.filter(e=>e instanceof pt),this._tabHeaders.forEach((e,s)=>{e.tabId=s,e.id=`t${this._componentId}-h${s}`,e.ariaControls=`t${this._componentId}-p${s}`,e.panel=this.panel,e.active=s===this.selectedIndex})}_onHeaderClick(e){const o=e.composedPath().find(i=>i instanceof pt);o&&(this.selectedIndex=o.tabId,this._setActiveTab(),this._dispatchSelectEvent())}render(){return _`
      <div
        class=${te({header:!0,panel:this.panel})}
        @click=${this._onHeaderClick}
        @keydown=${this._onHeaderKeyDown}
      >
        <slot name="header" @slotchange=${this._onHeaderSlotChange}></slot>
        <slot name="addons"></slot>
      </div>
      <slot @slotchange=${this._onMainSlotChange}></slot>
    `}};ts.styles=Hp;Ks([h({type:Boolean,reflect:!0})],ts.prototype,"panel",void 0);Ks([h({reflect:!0})],ts.prototype,"role",void 0);Ks([h({type:Number,reflect:!0,attribute:"selected-index"})],ts.prototype,"selectedIndex",void 0);Ks([gt({slot:"header"})],ts.prototype,"_headerSlotElements",void 0);Ks([gt()],ts.prototype,"_mainSlotElements",void 0);ts=Ks([U("vscode-tabs")],ts);const Np=[q,H`
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
  `];var me=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};let re=class extends G{set value(e){this._value=e,this._internals.setFormValue(e)}get value(){return this._value}get wrappedElement(){return this._textareaEl}get form(){return this._internals.form}get type(){return"textarea"}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}set minlength(e){this.minLength=e}get minlength(){return this.minLength}set maxlength(e){this.maxLength=e}get maxlength(){return this.maxLength}constructor(){super(),this.autocomplete=void 0,this.autofocus=!1,this.defaultValue="",this.disabled=!1,this.invalid=!1,this.label="",this.maxLength=void 0,this.minLength=void 0,this.rows=void 0,this.cols=void 0,this.name=void 0,this.placeholder=void 0,this.readonly=!1,this.resize="none",this.required=!1,this.spellcheck=!1,this.monospace=!1,this._value="",this._textareaPointerCursor=!1,this._shadow=!1,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._textareaEl.checkValidity(),this._setValidityFromInput(),this._internals.setFormValue(this._textareaEl.value)})}updated(e){const s=["maxLength","minLength","required"];for(const o of e.keys())if(s.includes(String(o))){this.updateComplete.then(()=>{this._setValidityFromInput()});break}}formResetCallback(){this.value=this.defaultValue}formStateRestoreCallback(e,s){this.updateComplete.then(()=>{this._value=e})}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}_setValidityFromInput(){this._internals.setValidity(this._textareaEl.validity,this._textareaEl.validationMessage,this._textareaEl)}_dataChanged(){this._value=this._textareaEl.value,this._internals.setFormValue(this._textareaEl.value)}_handleChange(e){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new Event("change")),this.dispatchEvent(new CustomEvent("vsc-change",{detail:{data:this.value,originalEvent:e}}))}_handleInput(e){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new CustomEvent("vsc-input",{detail:{data:e.data,originalEvent:e}}))}_handleMouseMove(e){if(this._textareaEl.clientHeight>=this._textareaEl.scrollHeight){this._textareaPointerCursor=!1;return}const s=14,o=1,i=this._textareaEl.getBoundingClientRect(),n=e.clientX;this._textareaPointerCursor=n>=i.left+i.width-s-o*2}_handleScroll(){this._shadow=this._textareaEl.scrollTop>0}render(){return _`
      <div
        class=${te({shadow:!0,visible:this._shadow})}
      ></div>
      <textarea
        autocomplete=${K(this.autocomplete)}
        ?autofocus=${this.autofocus}
        ?disabled=${this.disabled}
        aria-label=${this.label}
        id="textarea"
        class=${te({monospace:this.monospace,"cursor-pointer":this._textareaPointerCursor})}
        maxlength=${K(this.maxLength)}
        minlength=${K(this.minLength)}
        rows=${K(this.rows)}
        cols=${K(this.cols)}
        name=${K(this.name)}
        placeholder=${K(this.placeholder)}
        ?readonly=${this.readonly}
        .style=${Be({resize:this.resize})}
        ?required=${this.required}
        spellcheck=${this.spellcheck}
        @change=${this._handleChange}
        @input=${this._handleInput}
        @mousemove=${this._handleMouseMove}
        @scroll=${this._handleScroll}
        .value=${this._value}
      ></textarea>
    `}};re.styles=Np;re.formAssociated=!0;re.shadowRootOptions={...ht.shadowRootOptions,delegatesFocus:!0};me([h()],re.prototype,"autocomplete",void 0);me([h({type:Boolean,reflect:!0})],re.prototype,"autofocus",void 0);me([h({attribute:"default-value"})],re.prototype,"defaultValue",void 0);me([h({type:Boolean,reflect:!0})],re.prototype,"disabled",void 0);me([h({type:Boolean,reflect:!0})],re.prototype,"invalid",void 0);me([h({attribute:!1})],re.prototype,"label",void 0);me([h({type:Number})],re.prototype,"maxLength",void 0);me([h({type:Number})],re.prototype,"minLength",void 0);me([h({type:Number})],re.prototype,"rows",void 0);me([h({type:Number})],re.prototype,"cols",void 0);me([h()],re.prototype,"name",void 0);me([h()],re.prototype,"placeholder",void 0);me([h({type:Boolean,reflect:!0})],re.prototype,"readonly",void 0);me([h()],re.prototype,"resize",void 0);me([h({type:Boolean,reflect:!0})],re.prototype,"required",void 0);me([h({type:Boolean})],re.prototype,"spellcheck",void 0);me([h({type:Boolean,reflect:!0})],re.prototype,"monospace",void 0);me([h()],re.prototype,"value",null);me([Me("#textarea")],re.prototype,"_textareaEl",void 0);me([j()],re.prototype,"_value",void 0);me([j()],re.prototype,"_textareaPointerCursor",void 0);me([j()],re.prototype,"_shadow",void 0);re=me([U("vscode-textarea")],re);const Hr=mi(Tn()),Up=[q,H`
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
      font-family: var(--vscode-font-family, ${Hr});
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
      font-family: var(--vscode-font-family, ${Hr});
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, 'normal');
      line-height: 20px;
      padding: 0 14px;
    }

    input[type='file']::file-selector-button:hover {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
    }
  `];var ve=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};let ie=class extends G{set type(e){const s=["color","date","datetime-local","email","file","month","number","password","search","tel","text","time","url","week"];this._type=s.includes(e)?e:"text"}get type(){return this._type}set value(e){this.type!=="file"&&(this._value=e,this._internals.setFormValue(e)),this.updateComplete.then(()=>{this._setValidityFromInput()})}get value(){return this._value}set minlength(e){this.minLength=e}get minlength(){return this.minLength}set maxlength(e){this.maxLength=e}get maxlength(){return this.maxLength}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._setValidityFromInput(),this._internals.checkValidity()}reportValidity(){return this._setValidityFromInput(),this._internals.reportValidity()}get wrappedElement(){return this._inputEl}constructor(){super(),this.autocomplete=void 0,this.autofocus=!1,this.defaultValue="",this.disabled=!1,this.focused=!1,this.invalid=!1,this.label="",this.max=void 0,this.maxLength=void 0,this.min=void 0,this.minLength=void 0,this.multiple=!1,this.name=void 0,this.pattern=void 0,this.placeholder=void 0,this.readonly=!1,this.required=!1,this.step=void 0,this._value="",this._type="text",this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._inputEl.checkValidity(),this._setValidityFromInput(),this._internals.setFormValue(this._inputEl.value)})}attributeChangedCallback(e,s,o){super.attributeChangedCallback(e,s,o),["max","maxlength","min","minlength","pattern","required","step"].includes(e)&&this.updateComplete.then(()=>{this._setValidityFromInput()})}formResetCallback(){this.value=this.defaultValue,this.requestUpdate()}formStateRestoreCallback(e,s){this.value=e}_dataChanged(){if(this._value=this._inputEl.value,this.type==="file"&&this._inputEl.files)for(const e of this._inputEl.files)this._internals.setFormValue(e);else this._internals.setFormValue(this._inputEl.value)}_setValidityFromInput(){this._inputEl&&this._internals.setValidity(this._inputEl.validity,this._inputEl.validationMessage,this._inputEl)}_onInput(e){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new CustomEvent("vsc-input",{detail:{data:e.data,originalEvent:e}}))}_onChange(e){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new Event("change")),this.dispatchEvent(new CustomEvent("vsc-change",{detail:{data:this.value,originalEvent:e}}))}_onFocus(){this.focused=!0}_onBlur(){this.focused=!1}_onKeyDown(e){var s;e.key==="Enter"&&this._internals.form&&((s=this._internals.form)==null||s.requestSubmit())}render(){return _`
      <slot name="content-before"></slot>
      <input
        id="input"
        type=${this.type}
        ?autofocus=${this.autofocus}
        autocomplete=${K(this.autocomplete)}
        aria-label=${this.label}
        ?disabled=${this.disabled}
        max=${K(this.max)}
        maxlength=${K(this.maxLength)}
        min=${K(this.min)}
        minlength=${K(this.minLength)}
        ?multiple=${this.multiple}
        name=${K(this.name)}
        pattern=${K(this.pattern)}
        placeholder=${K(this.placeholder)}
        ?readonly=${this.readonly}
        ?required=${this.required}
        step=${K(this.step)}
        .value=${this._value}
        @blur=${this._onBlur}
        @change=${this._onChange}
        @focus=${this._onFocus}
        @input=${this._onInput}
        @keydown=${this._onKeyDown}
      >
      <slot name="content-after"></slot>
    `}};ie.styles=Up;ie.formAssociated=!0;ie.shadowRootOptions={...ht.shadowRootOptions,delegatesFocus:!0};ve([h()],ie.prototype,"autocomplete",void 0);ve([h({type:Boolean,reflect:!0})],ie.prototype,"autofocus",void 0);ve([h({attribute:"default-value"})],ie.prototype,"defaultValue",void 0);ve([h({type:Boolean,reflect:!0})],ie.prototype,"disabled",void 0);ve([h({type:Boolean,reflect:!0})],ie.prototype,"focused",void 0);ve([h({type:Boolean,reflect:!0})],ie.prototype,"invalid",void 0);ve([h({attribute:!1})],ie.prototype,"label",void 0);ve([h({type:Number})],ie.prototype,"max",void 0);ve([h({type:Number})],ie.prototype,"maxLength",void 0);ve([h({type:Number})],ie.prototype,"min",void 0);ve([h({type:Number})],ie.prototype,"minLength",void 0);ve([h({type:Boolean,reflect:!0})],ie.prototype,"multiple",void 0);ve([h({reflect:!0})],ie.prototype,"name",void 0);ve([h()],ie.prototype,"pattern",void 0);ve([h()],ie.prototype,"placeholder",void 0);ve([h({type:Boolean,reflect:!0})],ie.prototype,"readonly",void 0);ve([h({type:Boolean,reflect:!0})],ie.prototype,"required",void 0);ve([h({type:Number})],ie.prototype,"step",void 0);ve([h({reflect:!0})],ie.prototype,"type",null);ve([h()],ie.prototype,"value",null);ve([Me("#input")],ie.prototype,"_inputEl",void 0);ve([j()],ie.prototype,"_value",void 0);ve([j()],ie.prototype,"_type",void 0);ie=ve([U("vscode-textfield")],ie);const qp=[q,H`
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
  `];var Cs=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};let Ht=class extends G{constructor(){super(...arguments),this.icon="",this.label=void 0,this.toggleable=!1,this.checked=!1,this._isSlotEmpty=!0}_handleSlotChange(){var e;this._isSlotEmpty=!((((e=this._assignedNodes)==null?void 0:e.length)??0)>0)}_handleButtonClick(){this.toggleable&&(this.checked=!this.checked,this.dispatchEvent(new Event("change")))}render(){const e=this.checked?"true":"false";return _`
      <button
        type="button"
        aria-label=${K(this.label)}
        role=${K(this.toggleable?"switch":void 0)}
        aria-checked=${K(this.toggleable?e:void 0)}
        class=${te({checked:this.toggleable&&this.checked})}
        @click=${this._handleButtonClick}
      >
        ${this.icon?_`<vscode-icon name=${this.icon}></vscode-icon>`:R}
        <slot
          @slotchange=${this._handleSlotChange}
          class=${te({empty:this._isSlotEmpty,textOnly:!this.icon})}
        ></slot>
      </button>
    `}};Ht.styles=qp;Cs([h({reflect:!0})],Ht.prototype,"icon",void 0);Cs([h()],Ht.prototype,"label",void 0);Cs([h({type:Boolean,reflect:!0})],Ht.prototype,"toggleable",void 0);Cs([h({type:Boolean,reflect:!0})],Ht.prototype,"checked",void 0);Cs([j()],Ht.prototype,"_isSlotEmpty",void 0);Cs([Uh()],Ht.prototype,"_assignedNodes",void 0);Ht=Cs([U("vscode-toolbar-button")],Ht);const Wp=[q,H`
    :host {
      gap: 4px;
      display: flex;
      align-items: center;
    }
  `];var Kp=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};let nn=class extends G{render(){return _` <slot></slot> `}};nn.styles=Wp;nn=Kp([U("vscode-toolbar-container")],nn);const Gp=[q,H`
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
  `];var mt=globalThis&&globalThis.__decorate||function(t,e,s,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};const Yp=30,Jp=16,Nr=3,$a=(t,e=[])=>{const s=[];return t.forEach((o,i)=>{const n=[...e,i],r={...o,path:n};o.subItems&&(r.subItems=$a(o.subItems,n)),s.push(r)}),s},eo=t=>{var e;return!!(t.subItems&&Array.isArray(t.subItems)&&((e=t==null?void 0:t.subItems)==null?void 0:e.length)>0)};let tt=class extends G{constructor(){super(...arguments),this.indent=8,this.arrows=!1,this.multiline=!1,this.tabindex=0,this.indentGuides=!1,this._data=[],this._selectedItem=null,this._focusedItem=null,this._selectedBranch=null,this._focusedBranch=null,this._handleComponentKeyDownBound=this._handleComponentKeyDown.bind(this)}set data(e){const s=this._data;this._data=$a(e),this.requestUpdate("data",s)}get data(){return this._data}closeAll(){this._closeSubTreeRecursively(this.data),this.requestUpdate()}deselectAll(){this._deselectItemsRecursively(this.data),this.requestUpdate()}getItemByPath(e){return this._getItemByPath(e)}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleComponentKeyDownBound)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._handleComponentKeyDownBound)}_getItemByPath(e){let s=this._data,o=null;return e.forEach((i,n)=>{n===e.length-1?o=s[i]:s=s[i].subItems}),o}_handleActionClick(e){e.stopPropagation();const s=e.target,o=s.dataset.itemPath,i=s.dataset.index;let n=null,r="",l="";if(o){const a=o.split("/").map(d=>Number(d));if(n=this._getItemByPath(a),n!=null&&n.actions){const d=Number(i);n.actions[d]&&(r=n.actions[d].actionId)}n!=null&&n.value&&(l=n.value)}this.dispatchEvent(new CustomEvent("vsc-run-action",{detail:{actionId:r,item:n,value:l}})),this.dispatchEvent(new CustomEvent("vsc-tree-action",{detail:{actionId:r,item:n,value:l}}))}_renderIconVariant(e){const{type:s,value:o}=e;return s==="themeicon"?_`<vscode-icon name=${o} class="theme-icon"></vscode-icon>`:_`<span
        class="image-icon"
        .style=${Be({backgroundImage:`url(${o})`})}
      ></span>`}_renderIcon(e){const s={branch:{value:"folder",type:"themeicon"},open:{value:"folder-opened",type:"themeicon"},leaf:{value:"file",type:"themeicon"}};if(e.iconUrls)e.iconUrls.branch&&(s.branch={value:e.iconUrls.branch,type:"image"}),e.iconUrls.leaf&&(s.leaf={value:e.iconUrls.leaf,type:"image"}),e.iconUrls.open&&(s.open={value:e.iconUrls.open,type:"image"});else if(typeof e.icons=="object")e.icons.branch&&(s.branch={value:e.icons.branch,type:"themeicon"}),e.icons.leaf&&(s.leaf={value:e.icons.leaf,type:"themeicon"}),e.icons.open&&(s.open={value:e.icons.open,type:"themeicon"});else if(!e.icons)return _`${R}`;return eo(e)?e.open?this._renderIconVariant(s.open):this._renderIconVariant(s.branch):this._renderIconVariant(s.leaf)}_renderArrow(e){if(!this.arrows||!eo(e))return _`${R}`;const{open:s=!1}=e;return _`
      <div class="arrow-container">
        <vscode-icon name=${s?"chevron-down":"chevron-right"} class="icon-arrow"></vscode-icon>
      </div>
    `}_renderActions(e){const s=[];return e.actions&&Array.isArray(e.actions)&&e.actions.forEach((o,i)=>{var n;if(o.icon){const r=_`<vscode-icon
            name=${o.icon}
            action-icon
            title=${K(o.tooltip)}
            data-item-path=${K((n=e.path)==null?void 0:n.join("/"))}
            data-index=${i}
            class="action-icon"
            @click=${this._handleActionClick}
          ></vscode-icon>`;s.push(r)}}),s.length>0?_`<div class="actions">${s}</div>`:_`${R}`}_renderDecorations(e){const s=[];return e.decorations&&Array.isArray(e.decorations)&&e.decorations.forEach(o=>{const{appearance:i="text",visibleWhen:n="always",content:r="",color:l="",focusedColor:a="",hoverColor:d="",selectedColor:c=""}=o,f=`visible-when-${n}`,v={};switch(l&&(v["--color"]=l),a&&(v["--focused-color"]=a),d&&(v["--hover-color"]=d),c&&(v["--selected-color"]=c),i){case"counter-badge":s.push(_`<vscode-badge
                variant="counter"
                class=${["counter-badge",f].join(" ")}
                part="counter-badge-decoration"
                >${r}</vscode-badge
              >`);break;case"filled-circle":s.push(_`<vscode-icon
                name="circle-filled"
                size="14"
                class=${["filled-circle",f].join(" ")}
                part="filled-circle-decoration"
                .style=${Be(v)}
              ></vscode-icon>`);break;case"text":s.push(_`<div
                class=${["decoration-text",f].join(" ")}
                part="caption-decoration"
                .style=${Be(v)}
              >
                ${r}
              </div>`);break}}),s.length>0?_`<div class="decorations" part="decorations">
        ${s}
      </div>`:_`${R}`}_renderTreeItem(e,s){const{open:o=!1,label:i,description:n="",tooltip:r,selected:l=!1,focused:a=!1,subItems:d=[]}=e,{path:c,itemType:f,hasFocusedItem:v=!1,hasSelectedItem:x=!1}=s,S=c.length-1,T=["contents"],le=o?["open"]:[],z=S*this.indent,Q=this.arrows&&f==="leaf"?Yp+z:z,ae=this._renderArrow(e),V=this._renderIcon(e),ce=this.arrows?z+Jp:z+Nr,st=o&&f==="branch"?_`<ul
            .style=${Be({"--indent-guide-pos":`${ce}px`})}
            class=${te({"has-active-item":v||x})}
          >
            ${this._renderTree(d,c)}
          </ul>`:R,He=n?_`<span class="description" part="description">${n}</span>`:R,ot=this._renderActions(e),Ut=this._renderDecorations(e);return le.push(f),l&&T.push("selected"),a&&T.push("focused"),_`
      <li data-path=${c.join("/")} class=${le.join(" ")}>
        <div
          class=${T.join(" ")}
          .style=${Be({paddingLeft:`${Q+Nr}px`})}
        >
          ${ae}${V}<span
            class="text-content"
            part="text-content"
            title=${K(r)}
            >${i}${He}</span
          >
          ${ot} ${Ut}
        </div>
        ${st}
      </li>
    `}_renderTree(e,s=[]){const o=[];return e?(e.forEach((i,n)=>{const r=[...s,n],l=eo(i)?"branch":"leaf",{selected:a=!1,focused:d=!1,hasFocusedItem:c=!1,hasSelectedItem:f=!1}=i;a&&(this._selectedItem=i),d&&(this._focusedItem=i),o.push(this._renderTreeItem(i,{path:r,itemType:l,hasFocusedItem:c,hasSelectedItem:f}))}),o):R}_selectItem(e){var o,i;this._selectedItem&&(this._selectedItem.selected=!1),this._focusedItem&&(this._focusedItem.focused=!1),this._selectedItem=e,e.selected=!0,this._focusedItem=e,e.focused=!0,this._selectedBranch&&(this._selectedBranch.hasSelectedItem=!1);let s=null;if((o=e.path)!=null&&o.length&&e.path.length>1&&(s=this._getItemByPath(e.path.slice(0,-1))),eo(e))this._selectedBranch=e,e.hasSelectedItem=!0,e.open=!e.open,e.open?(this._selectedBranch=e,e.hasSelectedItem=!0):s&&(this._selectedBranch=s,s.hasSelectedItem=!0);else if((i=e.path)!=null&&i.length&&e.path.length>1){const n=this._getItemByPath(e.path.slice(0,-1));n&&(this._selectedBranch=n,n.hasSelectedItem=!0)}else this._selectedBranch=e,e.hasSelectedItem=!0;this._emitSelectEvent(this._selectedItem,this._selectedItem.path.join("/")),this.requestUpdate()}_focusItem(e){var i,n;this._focusedItem&&(this._focusedItem.focused=!1),this._focusedItem=e,e.focused=!0;const s=!!((i=e==null?void 0:e.subItems)!=null&&i.length);this._focusedBranch&&(this._focusedBranch.hasFocusedItem=!1);let o=null;(n=e.path)!=null&&n.length&&e.path.length>1&&(o=this._getItemByPath(e.path.slice(0,-1))),s?e.open?(this._focusedBranch=e,e.hasFocusedItem=!0):!e.open&&o&&(this._focusedBranch=o,o.hasFocusedItem=!0):o&&(this._focusedBranch=o,o.hasFocusedItem=!0)}_closeSubTreeRecursively(e){e.forEach(s=>{s.open=!1,s.subItems&&s.subItems.length>0&&this._closeSubTreeRecursively(s.subItems)})}_deselectItemsRecursively(e){e.forEach(s=>{s.selected&&(s.selected=!1),s.subItems&&s.subItems.length>0&&this._deselectItemsRecursively(s.subItems)})}_emitSelectEvent(e,s){const{icons:o,label:i,open:n,value:r}=e,l={icons:o,itemType:eo(e)?"branch":"leaf",label:i,open:n||!1,value:r||i,path:s};this.dispatchEvent(new CustomEvent("vsc-select",{bubbles:!0,composed:!0,detail:l})),this.dispatchEvent(new CustomEvent("vsc-tree-select",{detail:l}))}_focusPrevItem(){var s;if(!this._focusedItem){this._focusItem(this._data[0]);return}const{path:e}=this._focusedItem;if(e&&(e==null?void 0:e.length)>0){const o=e[e.length-1],i=e.length>1;if(o>0){const n=[...e];n[n.length-1]=o-1;const r=this._getItemByPath(n);let l=r;if(r!=null&&r.open&&((s=r.subItems)!=null&&s.length)){const{subItems:a}=r;l=a[a.length-1]}this._focusItem(l)}else if(i){const n=[...e];n.pop(),this._focusItem(this._getItemByPath(n))}}else this._focusItem(this._data[0])}_focusNextItem(){if(!this._focusedItem){this._focusItem(this._data[0]);return}const{path:e,open:s}=this._focusedItem;if(s&&Array.isArray(this._focusedItem.subItems)&&this._focusedItem.subItems.length>0){this._focusItem(this._focusedItem.subItems[0]);return}const o=[...e];o[o.length-1]+=1;let i=this._getItemByPath(o);i?this._focusItem(i):(o.pop(),o.length>0&&(o[o.length-1]+=1,i=this._getItemByPath(o),i&&this._focusItem(i)))}_handleClick(e){const o=e.composedPath().find(i=>i.tagName&&i.tagName.toUpperCase()==="LI");if(o){const n=(o.dataset.path||"").split("/").map(l=>Number(l)),r=this._getItemByPath(n);this._selectItem(r)}else this._focusedItem&&(this._focusedItem.focused=!1),this._focusedItem=null}_handleComponentKeyDown(e){const s=[" ","ArrowDown","ArrowUp","Enter","Escape"],o=e.key;s.includes(e.key)&&(e.stopPropagation(),e.preventDefault()),o==="Escape"&&(this._focusedItem=null),o==="ArrowUp"&&this._focusPrevItem(),o==="ArrowDown"&&this._focusNextItem(),(o==="Enter"||o===" ")&&this._focusedItem&&this._selectItem(this._focusedItem)}render(){const e=te({multi:this.multiline,single:!this.multiline,wrapper:!0,"has-not-focused-item":!this._focusedItem,"selection-none":!this._selectedItem,"selection-single":this._selectedItem!==null});return _`
      <div @click=${this._handleClick} class=${e}>
        <ul>
          ${this._renderTree(this._data)}
        </ul>
      </div>
    `}};tt.styles=Gp;mt([h({type:Array,reflect:!1})],tt.prototype,"data",null);mt([h({type:Number})],tt.prototype,"indent",void 0);mt([h({type:Boolean,reflect:!0})],tt.prototype,"arrows",void 0);mt([h({type:Boolean,reflect:!0})],tt.prototype,"multiline",void 0);mt([h({type:Number,reflect:!0})],tt.prototype,"tabindex",void 0);mt([h({type:Boolean,reflect:!0,attribute:"indent-guides"})],tt.prototype,"indentGuides",void 0);mt([j()],tt.prototype,"_selectedItem",void 0);mt([j()],tt.prototype,"_focusedItem",void 0);mt([j()],tt.prototype,"_selectedBranch",void 0);mt([j()],tt.prototype,"_focusedBranch",void 0);tt=mt([U("vscode-tree")],tt);Wd(Ih).mount("#app");
