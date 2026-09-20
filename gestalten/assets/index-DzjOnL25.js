const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/loaded-SMPR6KZF-BotSzOf1.js","assets/jsx-runtime-B1l2Nbuf.js","assets/chunk-K2LNXU54-Bz6PS-Qy.js","assets/chunk-67Y7M4OJ-CpXa6C64.js","assets/dist-eu5lGpyp.js","assets/dist-CUsFw937.js","assets/loaded-JKA25A3T-DDc_Wk0u.js","assets/chunk-4P4VZS4P-BO83D-k1.js","assets/loaded-36WRJPBT-CC9tTNA_.js","assets/chunk-NJTGWYYH-xb-LxBpe.js","assets/full-7ZJV44EE-BhaK7Hiz.js","assets/Render-DQXAYUBI-IKoQtk_f.js","assets/chunk-2CNEFIQP-BVHILT37.js","assets/Editor-44C53YAG-Bs43D8Mq.js"])))=>i.map(i=>d[i]);
import{a as e,c as t,d as n,i as r,l as i,n as a,o,r as s,s as c,t as l,u}from"./jsx-runtime-B1l2Nbuf.js";import{$ as d,A as f,At as p,B as m,Bt as h,Ct as g,Dt as _,Et as v,F as y,Ft as b,G as x,Gt as S,H as C,Ht as w,I as T,It as ee,J as E,Jt as D,K as O,Kt as te,L as ne,Lt as re,M as ie,Mt as k,N as ae,Nt as oe,Ot as se,P as ce,Pt as le,Q as A,R as ue,Rt as j,S as de,St as fe,Tt as pe,U as me,Ut as he,V as ge,Vt as _e,W as M,Wt as N,X as ve,Y as ye,Z as be,_ as xe,_t as P,a as F,at as Se,b as Ce,bt as I,c as we,ct as Te,d as Ee,dt as De,et as Oe,f as ke,ft as Ae,g as je,gt as L,h as Me,ht as Ne,i as Pe,it as Fe,j as Ie,jt as Le,k as Re,kt as ze,l as Be,lt as Ve,m as He,mt as Ue,n as We,nt as Ge,o as Ke,ot as qe,p as Je,pt as Ye,q as Xe,qt as Ze,r as Qe,rt as $e,s as et,st as tt,t as nt,tt as rt,u as it,ut as at,v as ot,vt as st,wt as ct,x as lt,xt as ut,y as dt,yt as ft,z as pt,zt as mt}from"./chunk-K2LNXU54-Bz6PS-Qy.js";import{t as ht}from"./chunk-67Y7M4OJ-CpXa6C64.js";import{t as gt}from"./chunk-4P4VZS4P-BO83D-k1.js";import{t as _t}from"./chunk-NJTGWYYH-xb-LxBpe.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var vt=i((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&ne(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function ee(){return g?!0:!(e.unstable_now()-T<w)}function E(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ee());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ne(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(E)};else if(typeof MessageChannel<`u`){var O=new MessageChannel,te=O.port2;O.port1.onmessage=E,D=function(){te.postMessage(null)}}else D=function(){_(E,0)};function ne(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ne(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),yt=i(((e,t)=>{t.exports=vt()})),bt=i((e=>{var n=yt(),r=t(),i=D();function a(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function s(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function c(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function u(e){if(s(e)!==e)throw Error(a(188))}function d(e){var t=e.alternate;if(!t){if(t=s(e),t===null)throw Error(a(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return u(i),e;if(o===r)return u(i),t;o=o.sibling}throw Error(a(188))}if(n.return!==r.return)n=i,r=o;else{for(var c=!1,l=i.child;l;){if(l===n){c=!0,n=i,r=o;break}if(l===r){c=!0,r=i,n=o;break}l=l.sibling}if(!c){for(l=o.child;l;){if(l===n){c=!0,n=o,r=i;break}if(l===r){c=!0,r=o,n=i;break}l=l.sibling}if(!c)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}function p(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&p(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function m(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function h(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function g(e){var t=[null,null],n=m(e);return n===null||_(t,e,n.child,{foundSelf:!1}),t}function _(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&_(e,t,n.child,r))return!0;n=n.sibling}return!1}function v(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(a(559))}}var y=null,b=null;function x(e,t,n){return e===n||e===t&&(y=e,!0)}function S(e,t,n){return e===n?(b=e,!1):e===t&&(b!==null&&(y=e),!0)}function C(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function w(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var T=Object.assign,ee=Symbol.for(`react.element`),E=Symbol.for(`react.transitional.element`),O=Symbol.for(`react.portal`),te=Symbol.for(`react.fragment`),ne=Symbol.for(`react.strict_mode`),re=Symbol.for(`react.profiler`),ie=Symbol.for(`react.consumer`),k=Symbol.for(`react.context`),ae=Symbol.for(`react.forward_ref`),oe=Symbol.for(`react.suspense`),se=Symbol.for(`react.suspense_list`),ce=Symbol.for(`react.memo`),le=Symbol.for(`react.lazy`),A=Symbol.for(`react.activity`),ue=Symbol.for(`react.legacy_hidden`),j=Symbol.for(`react.memo_cache_sentinel`),de=Symbol.for(`react.view_transition`),fe=Symbol.for(`react.recoverable`),pe=Symbol.iterator;function me(e){return typeof e!=`object`||!e?null:(e=pe&&e[pe]||e[`@@iterator`],typeof e==`function`?e:null)}var he=Symbol.for(`react.client.reference`);function ge(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===he?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case te:return`Fragment`;case re:return`Profiler`;case ne:return`StrictMode`;case oe:return`Suspense`;case se:return`SuspenseList`;case A:return`Activity`;case de:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case O:return`Portal`;case k:return e.displayName||`Context`;case ie:return(e._context.displayName||`Context`)+`.Consumer`;case ae:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ce:return t=e.displayName||null,t===null?ge(e.type)||`Memo`:t;case le:t=e._payload,e=e._init;try{return ge(e(t))}catch{}}return null}var _e=Array.isArray,M=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ve={pending:!1,data:null,method:null,action:null},ye=[],be=-1;function xe(e){return{current:e}}function P(e){0>be||(e.current=ye[be],ye[be]=null,be--)}function F(e,t){be++,ye[be]=e.current,e.current=t}var Se=xe(null),Ce=xe(null),I=xe(null),we=xe(null);function Te(e,t){switch(F(I,t),F(Ce,e),F(Se,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}P(Se),F(Se,e)}function Ee(){P(Se),P(Ce),P(I)}function De(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,F(we,e)),t=Se.current;var n=dp(t,e.type);t!==n&&(F(Ce,e),F(Se,n))}function Oe(e){Ce.current===e&&(P(Se),P(Ce)),we.current===e&&(P(we),sh._currentValue=ve)}var ke,Ae;function je(e){if(ke===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ke=t&&t[1]||``,Ae=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ke+e+Ae}var L=!1;function Me(e,t){if(!e||L)return``;L=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{L=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?je(n):``}function Ne(e,t){switch(e.tag){case 26:case 27:case 5:return je(e.type);case 16:return je(`Lazy`);case 13:return e.child!==t&&t!==null?je(`Suspense Fallback`):je(`Suspense`);case 19:return je(`SuspenseList`);case 0:case 15:return Me(e.type,!1);case 11:return Me(e.type.render,!1);case 1:return Me(e.type,!0);case 31:return je(`Activity`);case 30:return je(`ViewTransition`);default:return``}}function Pe(e){try{var t=``,n=null;do t+=Ne(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Fe=Object.prototype.hasOwnProperty,Ie=n.unstable_scheduleCallback,Le=n.unstable_cancelCallback,Re=n.unstable_shouldYield,ze=n.unstable_requestPaint,Be=n.unstable_now,Ve=n.unstable_getCurrentPriorityLevel,He=n.unstable_ImmediatePriority,Ue=n.unstable_UserBlockingPriority,We=n.unstable_NormalPriority,Ge=n.unstable_LowPriority,Ke=n.unstable_IdlePriority,qe=n.log,Je=n.unstable_setDisableYieldValue,Ye=null,Xe=null;function Ze(e){if(typeof qe==`function`&&Je(e),Xe&&typeof Xe.setStrictMode==`function`)try{Xe.setStrictMode(Ye,e)}catch{}}var Qe=Math.clz32?Math.clz32:tt,$e=Math.log,et=Math.LN2;function tt(e){return e>>>=0,e===0?32:31-($e(e)/et|0)|0}var nt=256,rt=262144,it=4194304;function at(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ot(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=at(n))):i=at(o):i=at(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=at(n))):i=at(o)):i=at(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function st(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ct(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-Qe(n),i=1<<r;t|=e[r],n&=~i}return t}function lt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ut(){var e=it;return it<<=1,!(it&62914560)&&(it=4194304),e}function dt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ft(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&mt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function mt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ht(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function gt(e,t){var n=t&-t;return n=n&42?1:_t(n),(n&(e.suspendedLanes|t))===0?n:0}function _t(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function vt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function bt(){var e=N.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function xt(e,t){var n=N.p;try{return N.p=e,t()}finally{N.p=n}}var R=Math.random().toString(36).slice(2),St=`__reactFiber$`+R,Ct=`__reactProps$`+R,z=`__reactContainer$`+R,wt=`__reactEvents$`+R,Tt=`__reactListeners$`+R,Et=`__reactHandles$`+R,Dt=`__reactResources$`+R,Ot=`__reactMarker$`+R,kt=`__reactLoad$`+R;function At(e){delete e[St],delete e[Ct],delete e[Tt],delete e[Et]}function jt(e){var t;if(t=e[St])return t;for(var n=e.parentNode;n;){if(t=n[z]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[St])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function Mt(e){if(e=e[St]||e[z]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Nt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(a(33))}function Pt(e){var t=e[Dt];return t||=e[Dt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Ft(e){e[Ot]=!0}function It(e){e[kt]=void 0}var Lt=new Set,Rt={};function zt(e,t){Bt(e,t),Bt(e+`Capture`,t)}function Bt(e,t){for(Rt[e]=t,e=0;e<t.length;e++)Lt.add(t[e])}var Vt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ht={},Ut={};function Wt(e){return Fe.call(Ut,e)?!0:Fe.call(Ht,e)?!1:Vt.test(e)?Ut[e]=!0:(Ht[e]=!0,!1)}var B=!1;function Gt(){var e=B;return B=!1,e}function Kt(e,t,n){if(Wt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function qt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function Jt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function Yt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Xt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Zt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qt(e){if(!e._valueTracker){var t=Xt(e)?`checked`:`value`;e._valueTracker=Zt(e,t,``+e[t])}}function $t(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Xt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var en=/[\n"\\]/g;function tn(e){return e.replace(en,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function nn(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Yt(t)):e.value!==``+Yt(t)&&(e.value=``+Yt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):an(e,Yt(n)):o===`number`&&e.value==t?an(e,Yt(e.value)):an(e,Yt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Yt(s):e.removeAttribute(`name`)}function rn(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Qt(e);return}n=n==null?``:``+Yt(n),t=t==null?n:``+Yt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Qt(e)}function an(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function on(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Yt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function sn(e,t,n){if(t!=null&&(t=``+Yt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Yt(n)}function cn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(a(92));if(_e(r)){if(1<r.length)throw Error(a(93));r=r[0]}n=r}n??=``,t=n}n=Yt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Qt(e)}function ln(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var un=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function dn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||un.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function fn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(a(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,B=!0);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&(dn(e,i,r),B=!0)}else for(var o in t)t.hasOwnProperty(o)&&dn(e,o,t[o])}function pn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var mn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),hn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gn(e){return hn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function _n(){}var vn=null;function yn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bn=null,xn=null;function Sn(e){var t=Mt(e);if(t&&(e=t.stateNode)){var n=e[Ct]||null;a:switch(e=t.stateNode,t.type){case`input`:if(nn(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+tn(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[Ct]||null;if(!i)throw Error(a(90));nn(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&$t(r)}break a;case`textarea`:sn(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&on(e,!!n.multiple,t,!1)}}}var Cn=!1;function wn(e,t,n){if(Cn)return e(t,n);Cn=!0;try{return e(t)}finally{if(Cn=!1,(bn!==null||xn!==null)&&(Ld(),bn&&(t=bn,e=xn,xn=bn=null,Sn(t),e)))for(t=0;t<e.length;t++)Sn(e[t])}}function Tn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Ct]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(a(231,t,typeof n));return n}var En=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,Dn=!1;if(En)try{var On={};Object.defineProperty(On,"passive",{get:function(){Dn=!0}}),window.addEventListener(`test`,On,On),window.removeEventListener(`test`,On,On)}catch{Dn=!1}var kn=null,An=null,jn=null;function V(){if(jn)return jn;var e,t=An,n=t.length,r,i=`value`in kn?kn.value:kn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return jn=i.slice(e,1<r?1-r:void 0)}function Mn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nn(){return!0}function Pn(){return!1}function Fn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Nn:Pn,this.isPropagationStopped=Pn,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Nn)},persist:function(){},isPersistent:Nn}),t}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ln=Fn(In),Rn=T({},In,{view:0,detail:0}),zn=Fn(Rn),Bn,Vn,Hn,Un=T({},Rn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:er,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Hn&&(Hn&&e.type===`mousemove`?(Bn=e.screenX-Hn.screenX,Vn=e.screenY-Hn.screenY):Vn=Bn=0,Hn=e),Bn)},movementY:function(e){return`movementY`in e?e.movementY:Vn}}),Wn=Fn(Un),Gn=Fn(T({},Un,{dataTransfer:0})),Kn=Fn(T({},Rn,{relatedTarget:0})),qn=Fn(T({},In,{animationName:0,elapsedTime:0,pseudoElement:0})),Jn=Fn(T({},In,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Yn=Fn(T({},In,{data:0})),Xn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Zn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Qn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function $n(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qn[e])?!!t[e]:!1}function er(){return $n}var tr=Fn(T({},Rn,{key:function(e){if(e.key){var t=Xn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Mn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Zn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:er,charCode:function(e){return e.type===`keypress`?Mn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Mn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),nr=Fn(T({},Un,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),rr=Fn(T({},In,{submitter:0})),ir=Fn(T({},Rn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:er})),ar=Fn(T({},In,{propertyName:0,elapsedTime:0,pseudoElement:0})),or=Fn(T({},Un,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),sr=Fn(T({},In,{newState:0,oldState:0,source:0})),cr=[9,13,27,32],lr=En&&`CompositionEvent`in window,ur=null;En&&`documentMode`in document&&(ur=document.documentMode);var dr=En&&`TextEvent`in window&&!ur,fr=En&&(!lr||ur&&8<ur&&11>=ur),pr=` `,mr=!1;function hr(e,t){switch(e){case`keyup`:return cr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function gr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var _r=!1;function vr(e,t){switch(e){case`compositionend`:return gr(t);case`keypress`:return t.which===32?(mr=!0,pr):null;case`textInput`:return e=t.data,e===pr&&mr?null:e;default:return null}}function yr(e,t){if(_r)return e===`compositionend`||!lr&&hr(e,t)?(e=V(),jn=An=kn=null,_r=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return fr&&t.locale!==`ko`?null:t.data;default:return null}}var br={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!br[e.type]:t===`textarea`}function Sr(e,t,n,r){bn?xn?xn.push(r):xn=[r]:bn=r,t=qf(t,`onChange`),0<t.length&&(n=new Ln(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Cr=null,wr=null;function Tr(e){Bf(e,0)}function Er(e){if($t(Nt(e)))return e}function H(e,t){if(e===`change`)return t}var Dr=!1;if(En){var Or;if(En){var kr=`oninput`in document;if(!kr){var Ar=document.createElement(`div`);Ar.setAttribute(`oninput`,`return;`),kr=typeof Ar.oninput==`function`}Or=kr}else Or=!1;Dr=Or&&(!document.documentMode||9<document.documentMode)}function jr(){Cr&&(Cr.detachEvent(`onpropertychange`,Mr),wr=Cr=null)}function Mr(e){if(e.propertyName===`value`&&Er(wr)){var t=[];Sr(t,wr,e,yn(e)),wn(Tr,t)}}function Nr(e,t,n){e===`focusin`?(jr(),Cr=t,wr=n,Cr.attachEvent(`onpropertychange`,Mr)):e===`focusout`&&jr()}function Pr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Er(wr)}function Fr(e,t){if(e===`click`)return Er(t)}function Ir(e,t){if(e===`input`||e===`change`)return Er(t)}function Lr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Rr=typeof Object.is==`function`?Object.is:Lr;function zr(e,t){if(Rr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Fe.call(t,i)||!Rr(e[i],t[i]))return!1}return!0}function Br(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Vr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hr(e,t){var n=Vr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Vr(n)}}function Ur(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ur(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Br(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Br(e.document)}return t}function Gr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Kr=En&&`documentMode`in document&&11>=document.documentMode,qr=null,Jr=null,Yr=null,Xr=!1;function Zr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xr||qr==null||qr!==Br(r)||(r=qr,`selectionStart`in r&&Gr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yr&&zr(Yr,r)||(Yr=r,r=qf(Jr,`onSelect`),0<r.length&&(t=new Ln(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=qr)))}function Qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var $r={animationend:Qr(`Animation`,`AnimationEnd`),animationiteration:Qr(`Animation`,`AnimationIteration`),animationstart:Qr(`Animation`,`AnimationStart`),transitionrun:Qr(`Transition`,`TransitionRun`),transitionstart:Qr(`Transition`,`TransitionStart`),transitioncancel:Qr(`Transition`,`TransitionCancel`),transitionend:Qr(`Transition`,`TransitionEnd`)},ei={},ti={};En&&(ti=document.createElement(`div`).style,`AnimationEvent`in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),`TransitionEvent`in window||delete $r.transitionend.transition);function ni(e){if(ei[e])return ei[e];if(!$r[e])return e;var t=$r[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ti)return ei[e]=t[n];return e}var ri=ni(`animationend`),ii=ni(`animationiteration`),ai=ni(`animationstart`),oi=ni(`transitionrun`),si=ni(`transitionstart`),ci=ni(`transitioncancel`),li=ni(`transitionend`),ui=new Map,di=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);di.push(`scrollEnd`);function fi(e,t){ui.set(e,t),zt(t,[e])}var pi=0;function mi(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=vd.identifierPrefix;var n=pi++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function hi(e){if(e==null||typeof e==`string`)return e;var t=null,n=Ed;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function gi(e,t){return e=hi(e),t=hi(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var _i=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},vi=[],yi=0,bi=0;function xi(){for(var e=yi,t=bi=yi=0;t<e;){var n=vi[t];vi[t++]=null;var r=vi[t];vi[t++]=null;var i=vi[t];vi[t++]=null;var a=vi[t];if(vi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Ti(n,i,a)}}function Si(e,t,n,r){vi[yi++]=e,vi[yi++]=t,vi[yi++]=n,vi[yi++]=r,bi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Ci(e,t,n,r){return Si(e,t,n,r),Ei(e)}function wi(e,t){return Si(e,null,null,t),Ei(e)}function Ti(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Ei(e){if(50<Dd)throw Dd=0,Od=null,Error(a(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Di={};function Oi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ki(e,t,n,r){return new Oi(e,t,n,r)}function Ai(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ji(e,t){var n=e.alternate;return n===null?(n=ki(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Mi(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ni(e,t,n,r,i,o){var s=0;if(r=e,typeof r==`function`)Ai(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,Se.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case A:return e=ki(31,n,t,i),e.elementType=A,e.lanes=o,e;case te:return Pi(n.children,i,o,t);case ne:s=8,i|=24;break;case re:return e=ki(12,n,t,i|2),e.elementType=re,e.lanes=o,e;case oe:return e=ki(13,n,t,i),e.elementType=oe,e.lanes=o,e;case se:return e=ki(19,n,t,i),e.elementType=se,e.lanes=o,e;case ue:case de:return e=i|32,e=ki(30,n,t,e),e.elementType=de,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case k:s=10;break a;case ie:s=9;break a;case ae:s=11;break a;case ce:s=14;break a;case le:s=16,r=null;break a}s=29,n=Error(a(130,e===null?`null`:typeof e,``)),r=null}return t=ki(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Pi(e,t,n,r){return e=ki(7,e,r,t),e.lanes=n,e}function Fi(e,t,n){return e=ki(6,e,null,t),e.lanes=n,e}function Ii(e){var t=ki(18,null,null,0);return t.stateNode=e,t}function Li(e,t,n){return t=ki(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ri=new WeakMap;function zi(e,t){if(typeof e==`object`&&e){var n=Ri.get(e);return n===void 0?(t={value:e,source:t,stack:Pe(t)},Ri.set(e,t),t):n}return{value:e,source:t,stack:Pe(t)}}var Bi=[],Vi=0,Hi=null,Ui=0,Wi=[],Gi=0,Ki=null,qi=1,Ji=``;function Yi(e,t){Bi[Vi++]=Ui,Bi[Vi++]=Hi,Hi=e,Ui=t}function Xi(e,t,n){Wi[Gi++]=qi,Wi[Gi++]=Ji,Wi[Gi++]=Ki,Ki=e;var r=qi;e=Ji;var i=32-Qe(r)-1;r&=~(1<<i),n+=1;var a=32-Qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,qi=1<<32-Qe(t)+i|n<<i|r,Ji=a+e}else qi=1<<a|n<<i|r,Ji=e}function Zi(e){e.return!==null&&(Yi(e,1),Xi(e,1,0))}function Qi(e){for(;e===Hi;)Hi=Bi[--Vi],Bi[Vi]=null,Ui=Bi[--Vi],Bi[Vi]=null;for(;e===Ki;)Ki=Wi[--Gi],Wi[Gi]=null,Ji=Wi[--Gi],Wi[Gi]=null,qi=Wi[--Gi],Wi[Gi]=null}function $i(e,t){Wi[Gi++]=qi,Wi[Gi++]=Ji,Wi[Gi++]=Ki,qi=t.id,Ji=t.overflow,Ki=e}var ea=null,ta=null,U=!1,W=null,G=!1,na=Error(a(519));function ra(e){throw ca(zi(Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),na}function ia(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[St]=e,t[Ct]=r,n){case`dialog`:$(`cancel`,t),$(`close`,t);break;case`iframe`:case`object`:case`embed`:$(`load`,t);break;case`video`:case`audio`:for(n=0;n<Rf.length;n++)$(Rf[n],t);break;case`source`:$(`error`,t);break;case`img`:case`image`:case`link`:$(`error`,t),$(`load`,t);break;case`details`:$(`toggle`,t);break;case`input`:$(`invalid`,t),rn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:$(`invalid`,t);break;case`textarea`:$(`invalid`,t),cn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||$f(t.textContent,n)?(r.popover!=null&&($(`beforetoggle`,t),$(`toggle`,t)),r.onScroll!=null&&$(`scroll`,t),r.onScrollEnd!=null&&$(`scrollend`,t),r.onClick!=null&&(t.onclick=_n),t=!0):t=!1,t||ra(e,!0)}function K(e){for(ea=e.return;ea;)switch(ea.tag){case 5:case 31:case 13:G=!1;return;case 27:case 3:G=!0;return;default:ea=ea.return}}function aa(e){if(e!==ea)return!1;if(!U)return K(e),U=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&ta&&ra(e),K(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(a(317));ta=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(a(317));ta=dm(e)}else t===27?(t=ta,Sp(e.type)?(e=um,um=null,ta=e):ta=t):ta=ea?lm(e.stateNode.nextSibling):null;return!0}function oa(){ta=ea=null,U=!1}function sa(){var e=W;return e!==null&&(ud===null?ud=e:ud.push.apply(ud,e),W=null),e}function ca(e){W===null?W=[e]:W.push(e)}var la=xe(null),ua=null,da=null;function fa(e,t,n){F(la,t._currentValue),t._currentValue=n}function pa(e){e._currentValue=la.current,P(la)}function ma(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ha(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var o=i.dependencies;if(o!==null){var s=i.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ma(o.return,n,e),r||(s=null);break a}o=c.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(a(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ma(s,n,e),s=null}else i.tag===13&&i.memoizedState!==null&&i.memoizedState.dehydrated===null?(i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),ma(i.return,n,e),s=i.child,s=s===null?null:s.sibling):s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function ga(e,t,n,r){e=null;for(var i=t,o=!1;i!==null;){if(!o){if(i.flags&524288)o=!0;else if(i.flags&262144)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(a(387));if(s=s.memoizedProps,s!==null){var c=i.type;Rr(i.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(i===we.current){if(s=i.alternate,s===null)throw Error(a(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}i=i.return}return e!==null&&ha(t,e,n,r),t.flags|=262144,e!==null}function _a(e){for(e=e.firstContext;e!==null;){if(!Rr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function va(e){ua=e,da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ya(e){return xa(ua,e)}function ba(e,t){return ua===null&&va(e),xa(e,t)}function xa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},da===null){if(e===null)throw Error(a(308));da=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else da=da.next=t;return n}var Sa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Ca=n.unstable_scheduleCallback,wa=n.unstable_NormalPriority,Ta={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ea(){return{controller:new Sa,data:new Map,refCount:0}}function Da(e){e.refCount--,e.refCount===0&&Ca(wa,function(){e.controller.abort()})}function Oa(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var ka=null;function Aa(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var ja=null,Ma=0,Na=0,Pa=null;function Fa(e,t){if(ja===null){var n=ja=[];Ma=0,Na=Nf(),Pa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Ma++,t.then(Ia,Ia),t}function Ia(){if(--Ma===0&&(ka=null,ja!==null)){Pa!==null&&(Pa.status=`fulfilled`);var e=ja;ja=null,Na=0,Pa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function La(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ra=M.S;M.S=function(e,t){if(pd=Be(),typeof t==`object`&&t&&typeof t.then==`function`&&Fa(e,t),ka!==null)for(var n=yf;n!==null;)Oa(n,ka),n=n.next;if(n=e.types,n!==null){for(var r=yf;r!==null;)Oa(r,n),r=r.next;if(Na!==0){r=ka,r===null&&(r=ka=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Ra!==null&&Ra(e,t)};var za=xe(null);function Ba(){var e=za.current;return e===null?Xu.pooledCache:e}function Va(e,t){t===null?F(za,za.current):F(za,t.pool)}function Ha(){var e=Ba();return e===null?null:{parent:Ta._currentValue,pool:e}}var Ua=Error(a(460)),Wa=Error(a(474)),Ga=Error(a(542)),Ka={then:function(){}};function qa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ja(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(_n,_n),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Qa(e),e===void 0&&!(`reason`in t)?Error(a(600)):e;default:if(typeof t.status==`string`)t.then(_n,_n);else{if(e=Xu,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Qa(e),e}throw Xa=t,Ua}}function Ya(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Xa=e,Ua):e}}var Xa=null;function Za(){if(Xa===null)throw Error(a(459));var e=Xa;return Xa=null,e}function Qa(e){if(e===Ua||e===Ga)throw Error(a(483))}var $a=null,eo=0;function to(e){var t=eo;return eo+=1,$a===null&&($a=[]),Ja($a,e,t)}function no(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function ro(e,t){throw t.$$typeof===ee?Error(a(525)):(e=Object.prototype.toString.call(t),Error(a(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function io(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=ji(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Fi(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===te?(e=d(e,t,n.props.children,r,n.key),no(e,n),e):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===le&&Ya(a)===t.type)?(t=i(t,n.props),no(t,n),t.return=e,t):(t=Ni(n.type,n.key,n.props,null,e.mode,r),no(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Li(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=Pi(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Fi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case E:return n=Ni(t.type,t.key,t.props,null,e.mode,n),no(n,t),n.return=e,n;case O:return t=Li(t,e.mode,n),t.return=e,t;case le:return t=Ya(t),f(e,t,n)}if(_e(t)||me(t))return t=Pi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,to(t),n);if(t.$$typeof===k)return f(e,ba(e,t),n);ro(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case E:return n.key===i?l(e,t,n,r):null;case O:return n.key===i?u(e,t,n,r):null;case le:return n=Ya(n),p(e,t,n,r)}if(_e(n)||me(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,to(n),r);if(n.$$typeof===k)return p(e,t,ba(e,n),r);ro(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case E:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case O:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case le:return r=Ya(r),m(e,t,n,r,i)}if(_e(r)||me(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,to(r),i);if(r.$$typeof===k)return m(e,t,n,ba(t,r),i);ro(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),U&&Yi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return U&&Yi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),U&&Yi(i,h),l}function g(i,s,c,l){if(c==null)throw Error(a(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),U&&Yi(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return U&&Yi(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),U&&Yi(i,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===te&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case E:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===te){if(r.tag===7){n(e,r.sibling),c=i(r,o.props.children),no(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===le&&Ya(l)===r.type){n(e,r.sibling),c=i(r,o.props),no(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===te?(c=Pi(o.props.children,e.mode,c,o.key),no(c,o),c.return=e,e=c):(c=Ni(o.type,o.key,o.props,null,e.mode,c),no(c,o),c.return=e,e=c)}return s(e);case O:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=i(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Li(o,e.mode,c),c.return=e,e=c}return s(e);case le:return o=Ya(o),_(e,r,o,c)}if(_e(o))return h(e,r,o,c);if(me(o)){if(l=me(o),typeof l!=`function`)throw Error(a(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,to(o),c);if(o.$$typeof===k)return _(e,r,ba(e,o),c);ro(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,o),c.return=e,e=c):(n(e,r),c=Fi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{eo=0;var i=_(e,t,n,r);return $a=null,i}catch(t){if(t===Ua||t===Ga)throw t;var a=ki(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var ao=io(!0),oo=io(!1),so=!1;function co(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function uo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function fo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Ei(e),Ti(e,null,n),t}return Si(e,r,t,n),Ei(e)}function po(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ht(e,n)}}function mo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ho=!1;function go(){if(ho){var e=Pa;if(e!==null)throw e}}function _o(e,t,n,r){ho=!1;var i=e.updateQueue;so=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Q&f)===f:(r&f)===f){f!==0&&f===Na&&(ho=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=T({},d,f);break a;case 2:so=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),id|=o,e.lanes=o,e.memoizedState=d}}function vo(e,t){if(typeof e!=`function`)throw Error(a(191,e));e.call(t)}function yo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)vo(n[e],t)}var bo=xe(null),xo=xe(0);function So(e,t){e=nd,F(xo,e),F(bo,t),nd=e|t.baseLanes}function Co(){F(xo,nd),F(bo,bo.current)}function wo(){nd=xo.current,P(bo),P(xo)}var To=xe(null),Eo=null;function Do(e){var t=e.alternate;F(Mo,Mo.current&1),F(To,e),Eo===null&&(t===null||bo.current!==null||t.memoizedState!==null)&&(Eo=e)}function Oo(e){F(Mo,Mo.current),F(To,e),Eo===null&&(Eo=e)}function ko(e){e.tag===22?(F(Mo,Mo.current),F(To,e),Eo===null&&(Eo=e)):Ao()}function Ao(){F(Mo,Mo.current),F(To,To.current)}function jo(e){P(To),Eo===e&&(Eo=null),P(Mo)}var Mo=xe(0);function No(e,t){F(To,To.current),F(Mo,t)}function Po(e){P(Mo),P(To),Eo===e&&(Eo=null)}function Fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Io=0,q=null,Lo=null,Ro=null,zo=!1,Bo=!1,Vo=!1,Ho=0,Uo=0,Wo=null,Go=0;function Ko(){throw Error(a(321))}function qo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rr(e[n],t[n]))return!1;return!0}function Jo(e,t,n,r,i,a){return Io=a,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?uc:dc,Vo=!1,a=n(r,i),Vo=!1,Bo&&(a=Xo(t,n,r,i)),Yo(e),a}function Yo(e){M.H=lc;var t=Lo!==null&&Lo.next!==null;if(Io=0,Ro=Lo=q=null,zo=!1,Uo=0,Wo=null,t)throw Error(a(300));e===null||Oc||(e=e.dependencies,e!==null&&_a(e)&&(Oc=!0))}function Xo(e,t,n,r){q=e;var i=0;do{if(Bo&&(Wo=null),Uo=0,Bo=!1,25<=i)throw Error(a(301));if(i+=1,Ro=Lo=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}M.H=fc,o=t(n,r)}while(Bo);return o}function Zo(){var e=M.H,t=e.useState()[0];return t=typeof t.then==`function`?rs(t):t,e=e.useState()[0],(Lo===null?null:Lo.memoizedState)!==e&&(q.flags|=1024),t}function Qo(){var e=Ho!==0;return Ho=0,e}function $o(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function es(e){if(zo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}zo=!1}Io=0,Ro=Lo=q=null,Bo=!1,Uo=Ho=0,Wo=null}function ts(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ro===null?q.memoizedState=Ro=e:Ro=Ro.next=e,Ro}function J(){if(Lo===null){var e=q.alternate;e=e===null?null:e.memoizedState}else e=Lo.next;var t=Ro===null?q.memoizedState:Ro.next;if(t!==null)Ro=t,Lo=e;else{if(e===null)throw q.alternate===null?Error(a(467)):Error(a(310));Lo=e,e={memoizedState:Lo.memoizedState,baseState:Lo.baseState,baseQueue:Lo.baseQueue,queue:Lo.queue,next:null},Ro===null?q.memoizedState=Ro=e:Ro=Ro.next=e}return Ro}function ns(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function rs(e){var t=Uo;return Uo+=1,Wo===null&&(Wo=[]),e=Ja(Wo,e,t),t=q,(Ro===null?t.memoizedState:Ro.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?uc:dc),e}function is(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return rs(e);if(e.$$typeof===fe)return;if(e.$$typeof===k)return ya(e)}throw Error(a(438,String(e)))}function as(e){var t=null,n=q.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=q.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ns(),q.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=j;return t.index++,n}function os(e,t){return typeof t==`function`?t(e):t}function ss(e){return cs(J(),Lo,e)}function cs(e,t,n){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=n;var i=e.baseQueue,o=r.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}t.baseQueue=i=o,r.pending=null}if(o=e.baseState,i===null)e.memoizedState=o;else{t=i.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Io&f)===f:(Q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Na&&(d=!0);else if((Io&p)===p){u=u.next,p===Na&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,q.lanes|=p,id|=p;f=u.action,Vo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,q.lanes|=f,id|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Rr(o,e.memoizedState)&&(Oc=!0,d&&(n=Pa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function ls(e){var t=J(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Rr(o,t.memoizedState)||(Oc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function us(e,t,n){var r=q,i=J(),o=U;if(o){if(n===void 0)throw Error(a(407));n=n()}else n=t();var s=!Rr((Lo||i).memoizedState,n);if(s&&(i.memoizedState=n,Oc=!0),i=i.queue,Fs(ps.bind(null,r,i,e),[e]),e=i.getSnapshot!==t||s||Ro!==null&&!!(Ro.memoizedState.tag&1),As(e?9:8,{destroy:void 0},fs.bind(null,r,i,n,t),null),e){if(r.flags|=2048,Xu===null)throw Error(a(349));o||Io&127||ds(r,t,n)}return n}function ds(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t=ns(),q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fs(e,t,n,r){t.value=n,t.getSnapshot=r,ms(t)&&hs(e)}function ps(e,t,n){return n(function(){ms(t)&&hs(e)})}function ms(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rr(e,n)}catch{return!0}}function hs(e){var t=wi(e,2);t!==null&&Md(t,e,2)}function gs(e){var t=ts();if(typeof e==`function`){var n=e;if(e=n(),Vo){Ze(!0);try{n()}finally{Ze(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:e},t}function _s(e,t,n,r){return e.baseState=n,cs(e,Lo,typeof r==`function`?r:os)}function vs(e,t,n,r,i){if(oc(e))throw Error(a(485));if(e=t.action,e!==null){var o={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};M.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,ys(t,o)):(o.next=n.next,t.pending=n.next=o)}}function ys(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=M.T,o={};o.types=a===null?null:a.types,M.T=o;try{var s=n(i,r),c=M.S;c!==null&&c(o,s),bs(e,t,s)}catch(n){Ss(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),M.T=a}}else try{a=n(i,r),bs(e,t,a)}catch(n){Ss(e,t,n)}}function bs(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){xs(e,t,n)},function(n){return Ss(e,t,n)}):xs(e,t,n)}function xs(e,t,n){t.status=`fulfilled`,t.value=n,Cs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ys(e,n)))}function Ss(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Cs(t),t=t.next;while(t!==r)}e.action=null}function Cs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ws(e,t){return t}function Ts(e,t){if(U){var n=Xu.formState;if(n!==null){a:{var r=q;if(U){if(ta){b:{for(var i=ta,a=G;i.nodeType!==8;){if(!a){i=null;break b}if(i=lm(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){ta=lm(i.nextSibling),r=i.data===`F!`;break a}}ra(r)}r=!1}r&&(t=n[0])}}return n=ts(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ws,lastRenderedState:t},n.queue=r,n=rc.bind(null,q,r),r.dispatch=n,r=gs(!1),a=ac.bind(null,q,!1,r.queue),r=ts(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=vs.bind(null,q,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Es(e){return Ds(J(),Lo,e)}function Ds(e,t,n){if(t=cs(e,t,ws)[0],e=ss(os)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=rs(t)}catch(e){throw e===Ua?Ga:e}else r=t;t=J();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(q.flags|=2048,As(9,{destroy:void 0},Os.bind(null,i,n),null)),[r,a,e]}function Os(e,t){e.action=t}function ks(e){var t=J(),n=Lo;if(n!==null)return Ds(t,n,e);J(),t=t.memoizedState,n=J();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function As(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=q.updateQueue,t===null&&(t=ns(),q.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function js(){return J().memoizedState}function Ms(e,t,n,r){var i=ts();q.flags|=e,i.memoizedState=As(1|t,{destroy:void 0},n,r===void 0?null:r)}function Ns(e,t,n,r){var i=J();r=r===void 0?null:r;var a=i.memoizedState.inst;Lo!==null&&r!==null&&qo(r,Lo.memoizedState.deps)?i.memoizedState=As(t,a,n,r):(q.flags|=e,i.memoizedState=As(1|t,a,n,r))}function Ps(e,t){Ms(8390656,8,e,t)}function Fs(e,t){Ns(2048,8,e,t)}function Is(e){q.flags|=4;var t=q.updateQueue;if(t===null)t=ns(),q.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ls(e){var t=J().memoizedState;return Is({ref:t,nextImpl:e}),function(){if(X&2)throw Error(a(440));return t.impl.apply(void 0,arguments)}}function Rs(e,t){return Ns(4,2,e,t)}function zs(e,t){return Ns(4,4,e,t)}function Bs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vs(e,t,n){n=n==null?null:n.concat([e]),Ns(4,4,Bs.bind(null,t,e),n)}function Hs(){}function Us(e,t){var n=J();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&qo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ws(e,t){var n=J();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&qo(t,r[1]))return r[0];if(r=e(),Vo){Ze(!0);try{e()}finally{Ze(!1)}}return n.memoizedState=[r,t],r}function Gs(e,t,n){return n===void 0||Io&1073741824&&!(Q&261930)?e.memoizedState=t:(e.memoizedState=n,e=Ad(),q.lanes|=e,id|=e,n)}function Ks(e,t,n,r){return Rr(n,t)?n:bo.current===null?!(Io&106)||Io&1073741824&&!(Q&261930)?(Oc=!0,e.memoizedState=n):(e=Ad(),q.lanes|=e,id|=e,t):(e=Gs(e,n,r),Rr(e,t)||(Oc=!0),e)}function qs(e,t,n,r,i){var a=N.p;N.p=a!==0&&8>a?a:8;var o=M.T,s={};s.types=o===null?null:o.types,M.T=s,ac(e,!1,t,n);try{var c=i(),l=M.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?ic(e,t,La(c,r),kd(e)):ic(e,t,r,kd(e))}catch(n){ic(e,t,{then:function(){},status:`rejected`,reason:n},kd())}finally{N.p=a,o!==null&&s.types!==null&&(o.types=s.types),M.T=o}}function Js(){}function Ys(e,t,n,r){if(e.tag!==5)throw Error(a(476));var i=Xs(e).queue;qs(e,i,t,ve,n===null?Js:function(){return Zs(e),n(r)})}function Xs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ve,baseState:ve,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:ve},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Zs(e){var t=Xs(e);t.next===null&&(t=e.alternate.memoizedState),ic(e,t.next.queue,{},kd())}function Qs(){return ya(sh)}function $s(){return J().memoizedState}function ec(){return J().memoizedState}function tc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=kd();e=uo(n);var r=fo(t,e,n);r!==null&&(Md(r,t,n),po(r,t,n)),t={cache:Ea()},e.payload=t;return}t=t.return}}function nc(e,t,n){var r=kd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},oc(e)?sc(t,n):(n=Ci(e,t,n,r),n!==null&&(Md(n,e,r),cc(n,t,r)))}function rc(e,t,n){ic(e,t,n,kd())}function ic(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(oc(e))sc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Rr(s,o))return Si(e,t,i,0),Xu===null&&xi(),!1}catch{}if(n=Ci(e,t,i,r),n!==null)return Md(n,e,r),cc(n,t,r),!0}return!1}function ac(e,t,n,r){if(r={lane:2,revertLane:Nf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},oc(e)){if(t)throw Error(a(479))}else t=Ci(e,n,r,2),t!==null&&Md(t,e,2)}function oc(e){var t=e.alternate;return e===q||t!==null&&t===q}function sc(e,t){Bo=zo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ht(e,n)}}var lc={readContext:ya,use:is,useCallback:Ko,useContext:Ko,useEffect:Ko,useImperativeHandle:Ko,useLayoutEffect:Ko,useInsertionEffect:Ko,useMemo:Ko,useReducer:Ko,useRef:Ko,useState:Ko,useDebugValue:Ko,useDeferredValue:Ko,useTransition:Ko,useSyncExternalStore:Ko,useId:Ko,useHostTransitionStatus:Ko,useFormState:Ko,useActionState:Ko,useOptimistic:Ko,useMemoCache:Ko,useCacheRefresh:Ko,useEffectEvent:Ko},uc={readContext:ya,use:is,useCallback:function(e,t){return ts().memoizedState=[e,t===void 0?null:t],e},useContext:ya,useEffect:Ps,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Ms(4194308,4,Bs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ms(4194308,4,e,t)},useInsertionEffect:function(e,t){Ms(4,2,e,t)},useMemo:function(e,t){var n=ts();t=t===void 0?null:t;var r=e();if(Vo){Ze(!0);try{e()}finally{Ze(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ts();if(n!==void 0){var i=n(t);if(Vo){Ze(!0);try{n(t)}finally{Ze(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=nc.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=ts();return e={current:e},t.memoizedState=e},useState:function(e){e=gs(e);var t=e.queue,n=rc.bind(null,q,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Hs,useDeferredValue:function(e,t){return Gs(ts(),e,t)},useTransition:function(){var e=gs(!1);return e=qs.bind(null,q,e.queue,!0,!1),ts().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=q,i=ts();if(U){if(n===void 0)throw Error(a(407));n=n()}else{if(n=t(),Xu===null)throw Error(a(349));Q&127||ds(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ps(ps.bind(null,r,o,e),[e]),r.flags|=2048,As(9,{destroy:void 0},fs.bind(null,r,o,n,t),null),n},useId:function(){var e=ts(),t=Xu.identifierPrefix;if(U){var n=Ji,r=qi;n=(r&~(1<<32-Qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Ho++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Go++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Qs,useFormState:Ts,useActionState:Ts,useOptimistic:function(e){var t=ts();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ac.bind(null,q,!0,n),n.dispatch=t,[e,t]},useMemoCache:as,useCacheRefresh:function(){return ts().memoizedState=tc.bind(null,q)},useEffectEvent:function(e){var t=ts(),n={impl:e};return t.memoizedState=n,function(){if(X&2)throw Error(a(440));return n.impl.apply(void 0,arguments)}}},dc={readContext:ya,use:is,useCallback:Us,useContext:ya,useEffect:Fs,useImperativeHandle:Vs,useInsertionEffect:Rs,useLayoutEffect:zs,useMemo:Ws,useReducer:ss,useRef:js,useState:function(){return ss(os)},useDebugValue:Hs,useDeferredValue:function(e,t){return Ks(J(),Lo.memoizedState,e,t)},useTransition:function(){var e=ss(os)[0],t=J().memoizedState;return[typeof e==`boolean`?e:rs(e),t]},useSyncExternalStore:us,useId:$s,useHostTransitionStatus:Qs,useFormState:Es,useActionState:Es,useOptimistic:function(e,t){return _s(J(),Lo,e,t)},useMemoCache:as,useCacheRefresh:ec,useEffectEvent:Ls},fc={readContext:ya,use:is,useCallback:Us,useContext:ya,useEffect:Fs,useImperativeHandle:Vs,useInsertionEffect:Rs,useLayoutEffect:zs,useMemo:Ws,useReducer:ls,useRef:js,useState:function(){return ls(os)},useDebugValue:Hs,useDeferredValue:function(e,t){var n=J();return Lo===null?Gs(n,e,t):Ks(n,Lo.memoizedState,e,t)},useTransition:function(){var e=ls(os)[0],t=J().memoizedState;return[typeof e==`boolean`?e:rs(e),t]},useSyncExternalStore:us,useId:$s,useHostTransitionStatus:Qs,useFormState:ks,useActionState:ks,useOptimistic:function(e,t){var n=J();return Lo===null?(n.baseState=e,[e,n.queue.dispatch]):_s(n,Lo,e,t)},useMemoCache:as,useCacheRefresh:ec,useEffectEvent:Ls};function pc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:T({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var mc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=kd(),i=uo(r);i.payload=t,n!=null&&(i.callback=n),t=fo(e,i,r),t!==null&&(Md(t,e,r),po(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=kd(),i=uo(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=fo(e,i,r),t!==null&&(Md(t,e,r),po(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=kd(),r=uo(n);r.tag=2,t!=null&&(r.callback=t),t=fo(e,r,n),t!==null&&(Md(t,e,n),po(t,e,n))}};function hc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!zr(n,r)||!zr(i,a):!0}function gc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&mc.enqueueReplaceState(t,t.state,null)}function _c(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=T({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function vc(e){_i(e)}function yc(e){console.error(e)}function bc(e){_i(e)}function xc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Sc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Cc(e,t,n){return n=uo(n),n.tag=3,n.payload={element:null},n.callback=function(){xc(e,t)},n}function wc(e){return e=uo(e),e.tag=3,e}function Tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Sc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Sc(t,n,r),typeof i!=`function`&&(gd===null?gd=new Set([this]):gd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Ec(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ga(t,n,i,!0),n=To.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Eo===null?Wd():n.alternate===null&&rd===0&&(rd=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Ka?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),pf(e,r,i)),!1;case 22:return n.flags|=65536,r===Ka?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),pf(e,r,i)),!1}throw Error(a(435,n.tag))}return pf(e,r,i),Wd(),!1}if(U)return t=To.current,t===null?(r!==na&&(t=Error(a(423),{cause:r}),ca(zi(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=zi(r,n),i=Cc(e.stateNode,r,i),mo(e,i),rd!==4&&(rd=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==na&&(e=Error(a(422),{cause:r}),ca(zi(e,n)))),!1;var o=Error(a(520),{cause:r});if(o=zi(o,n),ld===null?ld=[o]:ld.push(o),rd!==4&&(rd=2),t===null)return!0;r=zi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Cc(n.stateNode,r,e),mo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(gd===null||!gd.has(o))))return n.flags|=65536,i&=-i,n.lanes|=i,i=wc(i),Tc(i,e,n,r),mo(n,i),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Dc=Error(a(461)),Oc=!1;function kc(e,t,n,r){t.child=e===null?oo(t,null,n,r):ao(t,e.child,n,r)}function Ac(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return va(t),r=Jo(e,t,n,o,a,i),s=Qo(),e!==null&&!Oc?($o(e,t,i),il(e,t,i)):(U&&s&&Zi(t),t.flags|=1,kc(e,t,r,i),t.child)}function jc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Ai(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Mc(e,t,a,r,i)):(e=Ni(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!al(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?zr:n,n(o,r)&&e.ref===t.ref)return il(e,t,i)}return t.flags|=1,e=ji(a,r),e.ref=t.ref,e.return=t,t.child=e}function Mc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(zr(a,r)&&e.ref===t.ref){if(Oc=!1,t.pendingProps=r=a,al(e,i))e.flags&131072&&(Oc=!0);else return t.lanes=e.lanes,il(e,t,i)}}return Bc(e,t,n,r,i)}function Nc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Fc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Va(t,a===null?null:a.cachePool),a===null?Co():So(t,a),ko(t);else return r=t.lanes=536870912,Fc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Va(t,null),Co(),Ao()):(Va(t,a.cachePool),So(t,a),Ao(),t.memoizedState=null);return kc(e,t,i,n),t.child}function Pc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Fc(e,t,n,r,i){var a=Ba();return a=a===null?null:{parent:Ta._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Va(t,null),Co(),ko(t),e!==null&&ga(e,t,r,!0),t.childLanes=i,null}function Ic(e,t){return t=Yc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Lc(e,t,n){return ao(t,e.child,null,n),e=Ic(t,t.pendingProps),e.flags|=2,jo(t),t.memoizedState=null,e}function Rc(e,t,n){var r=t.pendingProps,i=!!(t.flags&128);if(t.flags&=-129,e===null){if(U){if(r.mode===`hidden`)return e=Ic(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Pc(null,e);if(Oo(t),(e=ta)?(e=am(e,G),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ki===null?null:{id:qi,overflow:Ji},retryLane:536870912,hydrationErrors:null},n=Ii(e),n.return=t,t.child=n,ea=t,ta=null)):e=null,e===null)throw ra(t);return t.lanes=536870912,null}return Ic(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Oo(t),i){if(t.flags&256)t.flags&=-257,t=Lc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(a(558))}else if(Oc||ga(e,t,n,!1),i=(n&e.childLanes)!==0,Oc||i){if(bo.current===null){if(r=Xu,r!==null&&(s=gt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,wi(e,s),Md(r,e,s),Dc;Wd()}t=Lc(e,t,n)}else e=o.treeContext,ta=lm(s.nextSibling),ea=t,U=!0,W=null,G=!1,e!==null&&$i(t,e),t=Ic(t,r),t.flags|=134221824;return t}return e=ji(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function zc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(a(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Bc(e,t,n,r,i){return va(t),n=Jo(e,t,n,r,void 0,i),r=Qo(),e!==null&&!Oc?($o(e,t,i),il(e,t,i)):(U&&r&&Zi(t),t.flags|=1,kc(e,t,n,i),t.child)}function Vc(e,t,n,r,i,a){return va(t),t.updateQueue=null,n=Xo(t,r,n,i),Yo(e),r=Qo(),e!==null&&!Oc?($o(e,t,a),il(e,t,a)):(U&&r&&Zi(t),t.flags|=1,kc(e,t,n,a),t.child)}function Hc(e,t,n,r,i){if(va(t),t.stateNode===null){var a=Di,o=n.contextType;typeof o==`object`&&o&&(a=ya(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=mc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},co(t),o=n.contextType,a.context=typeof o==`object`&&o?ya(o):Di,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(pc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&mc.enqueueReplaceState(a,a.state,null),_o(t,r,a,i),go(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=_c(n,s);a.props=c;var l=a.context,u=n.contextType;o=Di,typeof u==`object`&&u&&(o=ya(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&gc(t,a,r,o),so=!1;var f=t.memoizedState;a.state=f,_o(t,r,a,i),go(),l=t.memoizedState,s||f!==l||so?(typeof d==`function`&&(pc(t,n,d,r),l=t.memoizedState),(c=so||hc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,lo(e,t),o=t.memoizedProps,u=_c(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Di,typeof l==`object`&&l&&(c=ya(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&gc(t,a,r,c),so=!1,f=t.memoizedState,a.state=f,_o(t,r,a,i),go();var p=t.memoizedState;o!==d||f!==p||so||e!==null&&e.dependencies!==null&&_a(e.dependencies)?(typeof s==`function`&&(pc(t,n,s,r),p=t.memoizedState),(u=so||hc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&_a(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,zc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=ao(t,e.child,null,i),t.child=ao(t,null,n,i)):kc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=il(e,t,i),e}function Uc(e,t,n,r){return oa(),t.flags|=256,kc(e,t,n,r),t.child}var Wc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gc(e){return{baseLanes:e,cachePool:Ha()}}function Kc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=sd),e}function qc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Mo.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(U){if(i?Do(t):Ao(),(e=ta)?(e=am(e,G),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ki===null?null:{id:qi,overflow:Ji},retryLane:536870912,hydrationErrors:null},n=Ii(e),n.return=t,t.child=n,ea=t,ta=null)):e=null,e===null)throw ra(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Ao(),i=t.mode,a=Yc({mode:`hidden`,children:a},i),r=Pi(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Gc(n),r.childLanes=Kc(e,o,n),t.memoizedState=Wc,Pc(null,r)):(Do(t),Jc(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return Zc(e,t,a,o,r,c,s,n)}return i?(Ao(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=ji(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Pi(i,a,n,null),i.flags|=2):i=ji(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Pc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Gc(n):(a=i.cachePool,a===null?a=Ha():(s=Ta._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Kc(e,o,n),t.memoizedState=Wc,Pc(e.child,r)):(Do(t),n=e.child,e=n.sibling,n=ji(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Jc(e,t){return t=Yc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Yc(e,t){return e=ki(22,e,null,t),e.lanes=0,e}function Xc(e,t,n){return ao(t,e.child,null,n),e=Jc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zc(e,t,n,r,i,o,s,c){if(n)return t.flags&256?(Do(t),t.flags&=-257,Xc(e,t,c)):t.memoizedState===null?(Ao(),o=i.fallback,s=t.mode,i=Yc({mode:`visible`,children:i.children},s),o=Pi(o,s,c,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,ao(t,e.child,null,c),i=t.child,i.memoizedState=Gc(c),i.childLanes=Kc(e,r,c),t.memoizedState=Wc,Pc(null,i)):(Ao(),t.child=e.child,t.flags|=128,null);if(Do(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(i=Error(a(419)),i.stack=``,i.digest=r,ca({value:i,source:null,stack:null})),Xc(e,t,c)}if(Oc||ga(e,t,c,!1),r=(c&e.childLanes)!==0,Oc||r){if(bo.current!==null)return Xc(e,t,c);if(r=Xu,r!==null&&(i=gt(r,c),i!==0&&i!==s.retryLane))throw s.retryLane=i,wi(e,i),Md(r,e,i),Dc;return om(o)||Wd(),Xc(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,ta=lm(o.nextSibling),ea=t,U=!0,W=null,G=!1,e!==null&&$i(t,e),t=Jc(t,i.children),t.flags|=134221824,t)}function Qc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ma(e.return,t,n)}function $c(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Fo(n)===null&&(t=e),e=e.sibling}return t}function el(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function tl(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function nl(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Mo.current;if(t.flags&128)return No(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,No(t,o),i===`backwards`&&e!==null?(tl(e),kc(e,t,r,n),tl(e)):kc(e,t,r,n),r=U?Ui:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qc(e,n,t);else if(e.tag===19)Qc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=$c(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,tl(t)),el(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Fo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}el(t,!0,n,null,a,r);break;case`together`:el(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=$c(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),el(t,!1,i,n,a,r)}return t.child}function rl(e,t,n){var r=t.pendingProps;return fa(t,t.type,r.value),kc(e,t,r.children,n),t.child}function il(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),id|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ga(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,n=ji(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ji(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function al(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&_a(e)))}function ol(e,t,n){switch(t.tag){case 3:Te(t,t.stateNode.containerInfo),fa(t,Ta,e.memoizedState.cache),oa();break;case 27:case 5:De(t);break;case 4:Te(t,t.stateNode.containerInfo);break;case 10:fa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Oo(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Do(t),t.flags|=128,null;r=ga(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?qc(e,t,n):(Do(t),e=il(e,t,n),e===null?null:e.sibling)}Do(t);break;case 19:if(t.flags&128)return nl(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(ga(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return nl(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),No(t,Mo.current),r)break;return null;case 22:return t.lanes=0,Nc(e,t,n,t.pendingProps);case 24:fa(t,Ta,e.memoizedState.cache)}return il(e,t,n)}function sl(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Oc=!0;else{if(!al(e,n)&&!(t.flags&128))return Oc=!1,ol(e,t,n);Oc=!!(e.flags&131072)}}else Oc=!1,U&&t.flags&1048576&&Xi(t,Ui,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ya(t.elementType),t.type=e,typeof e==`function`)Ai(e)?(r=_c(e,r),t.tag=1,t=Hc(null,t,e,r,n)):(t.tag=0,t=Bc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===ae){t.tag=11,t=Ac(null,t,e,r,n);break a}if(i===ce){t.tag=14,t=jc(null,t,e,r,n);break a}if(i===k){t.tag=10,t.type=e,t=rl(null,t,n);break a}}throw t=ge(e)||e,Error(a(306,t,``))}}return t;case 0:return Bc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=_c(r,t.pendingProps),Hc(e,t,r,i,n);case 3:a:{if(Te(t,t.stateNode.containerInfo),e===null)throw Error(a(387));r=t.pendingProps;var o=t.memoizedState;i=o.element,lo(e,t),_o(t,r,null,n);var s=t.memoizedState;if(r=s.cache,fa(t,Ta,r),r!==o.cache&&ha(t,[Ta],n,!0),go(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Uc(e,t,r,n);break a}if(r!==i){i=zi(Error(a(424)),t),ca(i),t=Uc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(ta=lm(e.firstChild),ea=t,U=!0,W=null,G=!0,n=oo(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(oa(),r===i){t=il(e,t,n);break a}kc(e,t,r,n)}t=t.child}return t;case 26:return zc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:U||(t.stateNode=fp(t.type,t.pendingProps,I.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return De(t),e===null&&U&&(r=t.stateNode=hm(t.type,t.pendingProps,I.current),ea=t,G=!0,i=ta,Sp(t.type)?(um=i,ta=lm(r.firstChild)):ta=i),kc(e,t,t.pendingProps.children,n),zc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&U&&((i=r=ta)&&(r=rm(r,t.type,t.pendingProps,G),r===null?i=!1:(t.stateNode=r,ea=t,ta=lm(r.firstChild),G=!1,i=!0)),i||ra(t)),De(t),i=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,pp(i,o)?r=null:s!==null&&pp(i,s)&&(t.flags|=32),t.memoizedState!==null&&(i=Jo(e,t,Zo,null,null,n),sh._currentValue=i),zc(e,t),kc(e,t,r,n),t.child;case 6:return e===null&&U&&((e=n=ta)&&(n=im(n,t.pendingProps,G),n===null?e=!1:(t.stateNode=n,ea=t,ta=null,e=!0)),e||ra(t)),null;case 13:return qc(e,t,n);case 4:return Te(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ao(t,null,r,n):kc(e,t,r,n),t.child;case 11:return Ac(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,zc(e,t),kc(e,t,r,n),t.child;case 8:return kc(e,t,t.pendingProps.children,n),t.child;case 12:return kc(e,t,t.pendingProps.children,n),t.child;case 10:return rl(e,t,n);case 9:return i=t.type._context,r=t.pendingProps.children,va(t),i=ya(i),r=r(i),t.flags|=1,kc(e,t,r,n),t.child;case 14:return jc(e,t,t.type,t.pendingProps,n);case 15:return Mc(e,t,t.type,t.pendingProps,n);case 19:return nl(e,t,n);case 31:return Rc(e,t,n);case 22:return Nc(e,t,n,t.pendingProps);case 24:return va(t),r=ya(Ta),e===null?(i=Ba(),i===null&&(i=Xu,o=Ea(),i.pooledCache=o,o.refCount++,o!==null&&(i.pooledCacheLanes|=n),i=o),t.memoizedState={parent:r,cache:i},co(t),fa(t,Ta,i)):((e.lanes&n)!==0&&(lo(e,t),_o(t,null,null,n),go()),i=e.memoizedState,o=t.memoizedState,i.parent===r?(r=o.cache,fa(t,Ta,r),r!==i.cache&&ha(t,[Ta],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),fa(t,Ta,r))),kc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:U&&Zi(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:zc(e,t),kc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(a(156,t.tag))}function cl(e){e.flags|=4}function ll(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Vd())e.flags|=8192;else throw Xa=Ka,Wa}}else e.flags&=-16777217}function ul(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Vd())e.flags|=8192;else throw Xa=Ka,Wa}}function dl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:ut(),e.lanes|=t,cd|=t)}function fl(e,t){if(!U)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function pl(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ml(e,t,n){var r=t.pendingProps;switch(Qi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pl(t),null;case 1:return pl(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),pa(Ta),Ee(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(aa(t)?cl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,sa())),pl(t),null;case 26:var i=t.type,o=t.memoizedState;return e===null?(cl(t),o===null?(pl(t),ll(t,i,null,r,n)):(pl(t),ul(t,o))):o?o===e.memoizedState?(pl(t),t.flags&=-16777217):(cl(t),pl(t),ul(t,o)):(e=e.memoizedProps,e!==r&&cl(t),pl(t),ll(t,i,e,r,n)),null;case 27:if(Oe(t),n=I.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&cl(t);else{if(!r){if(t.stateNode===null)throw Error(a(166));return pl(t),t.subtreeFlags&=-33554433,null}e=Se.current,aa(t)?ia(t,e):(e=hm(i,r,n),t.stateNode=e,cl(t))}return pl(t),t.subtreeFlags&=-33554433,null;case 5:if(Oe(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&cl(t);else{if(!r){if(t.stateNode===null)throw Error(a(166));return pl(t),t.subtreeFlags&=-33554433,null}if(o=Se.current,aa(t))ia(t,o);else{var s=lp(I.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(i,{is:r.is}):s.createElement(i)}}o[St]=t,o[Ct]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(np(o,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&cl(t)}}return pl(t),t.subtreeFlags&=-33554433,ll(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&cl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(a(166));if(e=I.current,aa(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=ea,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[St]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||$f(e.nodeValue,n)),e||ra(t,!0)}else e=lp(e).createTextNode(r),e[St]=t,t.stateNode=e}return pl(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=aa(t),n!==null){if(e===null){if(!r)throw Error(a(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(a(557));e[St]=t}else oa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pl(t),e=!1}else n=sa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(jo(t),t):(jo(t),null);if(t.flags&128)throw Error(a(558))}return pl(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=aa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(a(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(a(317));i[St]=t}else oa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pl(t),i=!1}else i=sa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(jo(t),t):(jo(t),null)}return jo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),dl(t,t.updateQueue),pl(t),null);case 4:return Ee(),e===null&&Uf(t.stateNode.containerInfo),t.flags|=67108864,pl(t),null;case 10:return pa(t.type),pl(t),null;case 19:if(Po(t),r=t.memoizedState,r===null)return pl(t),null;if(i=!!(t.flags&128),o=r.rendering,o===null){if(i)fl(r,!1);else{if(rd!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Fo(e),o!==null){for(t.flags|=128,fl(r,!1),e=o.updateQueue,t.updateQueue=e,dl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Mi(n,e),n=n.sibling;return No(t,Mo.current&1|2),U&&Yi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Be()>md&&(t.flags|=128,i=!0,fl(r,!1),t.lanes=4194304)}}else{if(!i){if(e=Fo(o),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,dl(t,e),fl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!U)return pl(t),null}else 2*Be()-r.renderingStartTime>md&&n!==536870912&&(t.flags|=128,i=!0,fl(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Be(),e.sibling=null,o=Mo.current,o=i?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||U?No(t,o):(n=o,F(To,t),F(Mo,n),Eo===null&&(Eo=t)),U&&Yi(t,r.treeForkCount),e}return pl(t),null;case 22:case 23:return jo(t),wo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(pl(t),t.subtreeFlags&6&&(t.flags|=8192)):pl(t),n=t.updateQueue,n!==null&&dl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&P(za),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),pa(Ta),pl(t),null;case 25:return null;case 30:return t.flags|=33554432,pl(t),null}throw Error(a(156,t.tag))}function hl(e,t){switch(Qi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pa(Ta),Ee(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Oe(t),null;case 31:if(t.memoizedState!==null){if(jo(t),t.alternate===null)throw Error(a(340));oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(jo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Po(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Ee(),null;case 10:return pa(t.type),null;case 22:case 23:return jo(t),wo(),e!==null&&P(za),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return pa(Ta),null;case 25:return null;default:return null}}function gl(e,t){switch(Qi(t),t.tag){case 3:pa(Ta),Ee();break;case 26:case 27:case 5:Oe(t);break;case 4:Ee();break;case 31:t.memoizedState!==null&&jo(t);break;case 13:jo(t);break;case 19:Po(t);break;case 10:pa(t.type);break;case 22:case 23:jo(t),wo(),e!==null&&P(za);break;case 24:pa(Ta)}}function _l(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){ff(t,t.return,e)}}function vl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){ff(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){ff(t,t.return,e)}}function yl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{yo(t,n)}catch(t){ff(e,e.return,t)}}}function bl(e,t,n){n.props=_c(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){ff(e,t,n)}}function xl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=mi(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);p(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){ff(e,t,n)}}function Sl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){ff(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){ff(e,t,n)}else n.current=null}}function Cl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function wl(e){for(var t=e.return;t!==null&&(Dl(t)&&em(e.stateNode,t.stateNode),!El(t));)t=t.return}function Tl(e){for(var t=e.return;t!==null&&(Dl(t)&&tm(e.stateNode,t.stateNode),!El(t));)t=t.return}function El(e){return e.tag===5||e.tag===3||e.tag===27}function Dl(e){return e&&e.tag===7&&e.stateNode!==null}function Ol(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){ff(e,e.return,t)}}function kl(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[Ct]=t}catch(t){ff(e,e.return,t)}}function Al(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function jl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Al(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ml(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=_n)),Cl(e,r),B=!0;else if(i!==4&&(i===27&&(Cl(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Ml(e,t,n,r),e=e.sibling;e!==null;)Ml(e,t,n,r),e=e.sibling}function Nl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Cl(e,r),B=!0;else if(i!==4&&(i===27&&(Cl(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Nl(e,t,n,r),e=e.sibling;e!==null;)Nl(e,t,n,r),e=e.sibling}function Pl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[St]=e,t[Ct]=n}catch(t){ff(e,e.return,t)}}var Fl=!1,Il=null;function Ll(e){(e.tag===30||e.subtreeFlags&33554432)&&(Fl=!0)}var Rl=null;function zl(){var e=Rl;return Rl=null,e}var Bl=0;function Vl(e,t,n,r,i){return Bl=0,Hl(e.child,t,n,r,i)}function Hl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);Fl=!0,Tp(o,Bl===0?t:t+`_`+Bl,n),Bl++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||Hl(e.child,t,n,r,i)&&(a=!0));e=e.sibling}return a}function Ul(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Ul(e.child,t)),e=e.sibling}function Wl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Wl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(a(544));var n=t.name;t=gi(t.default,t.share),t!==`none`&&(Vl(e,n,t,null,!1)||Ul(e.child,!1))}e=e.sibling}}function Gl(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=mi(r,n),a=gi(r.default,n.paired?r.share:r.enter);a===`none`?Wl(e):Vl(e,i,a,null,!1)?(Wl(e),n.paired||t||jd(e,r.onEnter)):Ul(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Gl(e,t),e=e.sibling;else Wl(e)}function Kl(e){if(Il!==null&&Il.size!==0){var t=Il;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=gi(n.default,n.share);if(a!==`none`&&(Vl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,jd(e,n.onShare)):Ul(e.child,!1)),t.delete(r),t.size===0)break}}}Kl(e)}e=e.sibling}}}function ql(e){if(e.tag===30){var t=e.memoizedProps,n=mi(t,e.stateNode),r=Il===null?void 0:Il.get(n),i=gi(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Vl(e,n,i,null,!1)?r===void 0?jd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Il.delete(n),jd(e,t.onShare)):Ul(e.child,!1)),Il!==null&&Kl(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)ql(e),e=e.sibling;else Il!==null&&Kl(e)}function Jl(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=mi(t,e.stateNode);t=gi(t.default,t.update),e.flags&=-5,t!==`none`&&Vl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Jl(e);e=e.sibling}}function Yl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Ul(e.child,!1))}Yl(e)}e=e.sibling}}function Xl(e){if(e.tag===30)e.stateNode.paired=null,Ul(e.child,!1),Yl(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Xl(e),e=e.sibling;else Yl(e)}function Zl(e){for(e=e.child;e!==null;)e.tag===30?Ul(e.child,!1):e.subtreeFlags&33554432&&Zl(e),e=e.sibling}function Ql(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Bl<a.length){var l=a[Bl],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,Bl===0?n:n+`_`+Bl,i),s&&e.flags&4||(Rl===null&&(Rl=[]),Rl.push(c,Bl===0?r:r+`_`+Bl,t.memoizedProps)),Bl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:Ql(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function $l(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=mi(n,r),a=gi(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Bl=0,i=Ql(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||jd(e,n.onUpdate))}else e.subtreeFlags&33554432&&$l(e,t);e=e.sibling}}var eu=!1,tu=!1,nu=!1,ru=!1,iu=typeof WeakSet==`function`?WeakSet:Set,au=null,ou=!1,su=!1,cu=!1,lu=!1;function uu(e,t,n){if(e=e.containerInfo,sp=gh,e=Wr(e),Gr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,au=t,t=n?9270:1024;au!==null;){if(e=au,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&ql(r[a]);if(e.alternate===null&&e.flags&2)n&&Ll(e),du(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&ql(r),du(n);continue}if(r!==null&&r.memoizedState!==null){n&&Ll(e),du(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,au=r):(n&&Jl(e),du(n))}}Il=null}function du(e){for(;au!==null;){var t=au,n=e,r=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(i&1024&&r!==null){n=void 0,i=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=_c(t.type,i);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){ff(t,t.return,e)}}break;case 3:if(i&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=mi(r.memoizedProps,r.stateNode),i=t.memoizedProps,i=gi(i.default,i.update),i!==`none`&&Vl(r,n,i,r.memoizedState=[],!0));break;default:if(i&1024)throw Error(a(163))}if(r=t.sibling,r!==null){r.return=t.return,au=r;break}au=t.return}}function fu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:ju(e,n),r&4&&_l(5,n);break;case 1:if(ju(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){ff(n,n.return,e)}else{var i=_c(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){ff(n,n.return,e)}}}r&64&&yl(n),r&512&&xl(n,n.return);break;case 3:if(ju(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{yo(e,t)}catch(e){ff(n,n.return,e)}}break;case 27:t===null&&r&4&&Pl(n);case 26:case 5:ju(e,n),t===null&&r&4&&Ol(n),r&512&&xl(n,n.return);break;case 12:ju(e,n);break;case 31:ju(e,n),r&4&&bu(e,n);break;case 13:ju(e,n),r&4&&xu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=gf.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||eu,!r){var a=t!==null&&t.memoizedState!==null||tu;t=eu,i=tu,eu=r,(tu=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Nu(e,n,r)):ju(e,n),eu=t,tu=i}break;case 30:ju(e,n),r&512&&xl(n,n.return);break;case 7:r&512&&xl(n,n.return);default:ju(e,n)}}function pu(e,t){for(e=e.child;e!==null;)mu(e,t),e=e.sibling}function mu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){ff(e,e.return,t)}hu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,B=!0}catch(t){ff(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){ff(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&pu(e,t);break;default:pu(e,t)}}function hu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:mu(n,r);break a;case 22:n.memoizedState===null&&hu(n,r);break a;default:hu(n,r)}}e=e.sibling}}function gu(e){var t=e.alternate;t!==null&&(e.alternate=null,gu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&At(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Y=null,_u=!1;function vu(e,t,n){for(n=n.child;n!==null;)yu(e,t,n),n=n.sibling}function yu(e,t,n){if(Xe&&typeof Xe.onCommitFiberUnmount==`function`)try{Xe.onCommitFiberUnmount(Ye,n)}catch{}switch(n.tag){case 26:tu||Sl(n,t),vu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!tu&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:tu||Sl(n,t),Tl(n);var r=Y,i=_u;Sp(n.type)&&(Y=n.stateNode,_u=!1),vu(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),Y=r,_u=i;break;case 5:tu||Sl(n,t),Tl(n);case 6:if(n.tag===6&&Tl(n),r=Y,i=_u,Y=null,vu(e,t,n),Y=r,_u=i,Y!==null){if(_u)try{(Y.nodeType===9?Y.body:Y.nodeName===`HTML`?Y.ownerDocument.body:Y).removeChild(n.stateNode),B=!0}catch(e){ff(n,t,e)}else try{Y.removeChild(n.stateNode),B=!0}catch(e){ff(n,t,e)}}break;case 18:Y!==null&&(_u?(e=Y,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(Y,n.stateNode));break;case 4:r=Y,i=_u,Y=n.stateNode.containerInfo,_u=!0,vu(e,t,n),Y=r,_u=i;break;case 0:case 11:case 14:case 15:vl(2,n,t),tu||vl(4,n,t),vu(e,t,n);break;case 1:tu||(Sl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&bl(n,t,r)),vu(e,t,n);break;case 21:vu(e,t,n);break;case 22:tu=(r=tu)||n.memoizedState!==null,vu(e,t,n),tu=r;break;case 30:Sl(n,t),vu(e,t,n);break;case 7:tu||Sl(n,t),vu(e,t,n);break;default:vu(e,t,n)}}function bu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){ff(t,t.return,e)}}}function xu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){ff(t,t.return,e)}}function Su(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new iu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new iu),t;default:throw Error(a(435,e.tag))}}function Cu(e,t){var n=Su(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=_f.bind(null,e,t);t.then(r,r)}})}function wu(e,t,n){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var o=r[i],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){Y=l.stateNode,_u=!1;break a}break;case 5:Y=l.stateNode,_u=!1;break a;case 3:case 4:Y=l.stateNode.containerInfo,_u=!0;break a}l=l.return}if(Y===null)throw Error(a(160));yu(s,c,o),Y=null,_u=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Eu(t,e,n),t=t.sibling}var Tu=null;function Eu(e,t,n){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(i&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}wu(t,e,n),Du(e),i&4&&(vl(3,e,e.return),_l(3,e),vl(5,e,e.return));break;case 1:wu(t,e,n),Du(e),i&512&&(tu||r===null||Sl(r,r.return)),i&64&&eu&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=Tu,wu(t,e,n),Du(e),i&512&&(tu||r===null||Sl(r,r.return)),i&4){if(i=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(eu)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,i=o.ownerDocument||o;b:switch(t){case`title`:r=i.getElementsByTagName(`title`)[0],(!r||r[Ot]||r[St]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=i.createElement(t),i.head.insertBefore(r,i.querySelector(`head > title`))),np(r,t,n),r[St]=e,Ft(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,i).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=i.createElement(t),np(r,t,n),i.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,i).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=i.createElement(t),np(r,t,n),i.head.appendChild(r);break;default:throw Error(a(468,t))}r[St]=e,Ft(r),t=r}e.stateNode=t}}else eu||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else i===n?n===null&&e.stateNode!==null&&kl(e,e.memoizedProps,r.memoizedProps):(i===null?(t=r.stateNode,t===null||tu||t.parentNode.removeChild(t)):i.count--,n===null?eu||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:wu(t,e,n),Du(e),i&512&&(tu||r===null||Sl(r,r.return)),r!==null&&i&4&&kl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=nu,nu=!1,wu(t,e,n),nu=o,Du(e),i&512&&(tu||r===null||Sl(r,r.return)),e.flags&32){t=e.stateNode;try{ln(t,``),B=!0}catch(t){ff(e,e.return,t)}}i&4&&e.stateNode!=null&&(t=e.memoizedProps,kl(e,t,r===null?t:r.memoizedProps)),i&1024&&(ru=!0);break;case 6:if(wu(t,e,n),Du(e),i&4){if(e.stateNode===null)throw Error(a(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,B=!0}catch(t){ff(e,e.return,t)}}break;case 3:if(B=!1,Wm=null,o=Tu,Tu=bm(t.containerInfo),wu(t,e,n),Tu=o,Du(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){ff(e,e.return,t)}ru&&(ru=!1,Ou(e)),B=!1;break;case 4:i=nu,nu=eu,r=Gt(),o=Tu,Tu=bm(e.stateNode.containerInfo),wu(t,e,n),Du(e),Tu=o,B&&su&&(cu=!0),B=r,nu=i;break;case 12:wu(t,e,n),Du(e);break;case 31:wu(t,e,n),Du(e),i&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Cu(e,t)));break;case 13:wu(t,e,n),Du(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(fd=Be()),i&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Cu(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=eu,l=tu,u=nu;eu=c||o,nu=u||o,tu=l||s,wu(t,e,n),tu=l,nu=u,eu=c,Du(e),i&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||eu||tu||(t=s||tu,n=eu,r=tu,eu=o||eu,tu=t,Mu(e,2),eu=n,tu=r),!o&&nu||pu(e,o)),i&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Cu(e,n))));break;case 19:wu(t,e,n),Du(e),i&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Cu(e,t)));break;case 30:i&512&&(tu||r===null||Sl(r,r.return)),i=Gt(),o=su,s=(n&335544064)===n,c=e.memoizedProps,su=s&&gi(c.default,c.update)!==`none`,wu(t,e,n),Du(e),s&&r!==null&&B&&(e.flags|=4),su=o,B=i;break;case 21:break;case 7:i&512&&(tu||r===null||Sl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:wu(t,e,n),Du(e)}}function Du(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Al(r)){n=r;break}r=r.return}r=null;for(var i=e.return;i!==null;){if(Dl(i)){var o=i.stateNode;r===null?r=[o]:r.push(o)}if(El(i))break;i=i.return}var s=r;if(n==null)throw Error(a(160));switch(n.tag){case 27:var c=n.stateNode;Nl(e,jl(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(ln(l,``),n.flags&=-33),Nl(e,jl(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Ml(e,jl(e),u,s);break;default:throw Error(a(161))}}catch(t){ff(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ou(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ou(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function ku(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Au(t,e),t=t.sibling;else $l(t,!1)}function Au(e,t){var n=e.alternate;if(n===null)Gl(e,!1);else switch(e.tag){case 3:if(lu=ou=!1,zl(),ku(t,e),!ou&&!cu){if(e=Rl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),lu=!0}Rl=null;break;case 5:ku(t,e);break;case 4:r=ou,ou=!1,ku(t,e),ou&&(cu=!0),ou=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?ku(t,e):Gl(e,!1));break;case 30:r=ou,i=zl(),ou=!1,ku(t,e),ou&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=mi(a,o),o=mi(n.memoizedProps,o);var s=gi(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Bl=0,t=Ql(e,n,t,o,s,a,!0),Bl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(jd(e,e.memoizedProps.onUpdate),Rl=i):i!==null&&(i.push.apply(i,Rl),Rl=i),ou=e.flags&32?!0:r;break;default:ku(t,e)}}function ju(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)fu(e,t.alternate,t),t=t.sibling}function Mu(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:vl(4,n,n.return),Mu(n,r);break;case 1:Sl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&bl(n,n.return,i),Mu(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:Sl(n,n.return),n.tag!==5&&n.tag!==27||Tl(n),Mu(n,r);break;case 6:Tl(n);break;case 26:Sl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||tu||i.parentNode.removeChild(i),Mu(n,r);break;case 22:n.memoizedState===null&&Mu(n,r);break;case 30:Sl(n,n.return),Mu(n,r);break;case 7:Sl(n,n.return);default:Mu(n,r)}e=e.sibling}}function Nu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Nu(i,a,n),_l(4,a);break;case 1:if(Nu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){ff(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)vo(l[i],c)}catch(e){ff(r,r.return,e)}}s&&o&64&&yl(a),xl(a,a.return);break;case 27:n&2&&Pl(a);case 5:a.tag!==5&&a.tag!==27||wl(a),Nu(i,a,n),s&&r===null&&o&4&&Ol(a),xl(a,a.return);break;case 6:wl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||eu||Km(bm(c.ownerDocument),a.type,c),Nu(i,a,n),s&&r===null&&o&4&&Ol(a),xl(a,a.return);break;case 12:Nu(i,a,n);break;case 31:Nu(i,a,n),s&&o&4&&bu(i,a);break;case 13:Nu(i,a,n),s&&o&4&&xu(i,a);break;case 22:a.memoizedState===null&&Nu(i,a,n),xl(a,a.return);break;case 30:Nu(i,a,n),xl(a,a.return);break;case 7:xl(a,a.return);default:Nu(i,a,n)}t=t.sibling}}function Pu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Da(n))}function Fu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Da(e))}function Iu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Lu(e,t,n,r),t=t.sibling;else i&&Zl(t)}function Lu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Xl(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Iu(e,t,n,r),a&2048&&_l(9,t);break;case 1:Iu(e,t,n,r);break;case 3:Iu(e,t,n,r),i&&lu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Da(a)));break;case 12:if(a&2048){Iu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){ff(t,t.return,e)}}else Iu(e,t,n,r);break;case 31:Iu(e,t,n,r);break;case 13:Iu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&Xl(t),o._visibility&2?Iu(e,t,n,r):(o._visibility|=2,Ru(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&Xl(s),o._visibility&2?Iu(e,t,n,r):zu(e,t)),a&2048&&Pu(s,t);break;case 24:Iu(e,t,n,r),a&2048&&Fu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Ul(a.child,!0),Ul(t.child,!0))),Iu(e,t,n,r);break;default:Iu(e,t,n,r)}}function Ru(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ru(a,o,s,c,i),_l(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ru(a,o,s,c,i)):u._visibility&2?Ru(a,o,s,c,i):zu(a,o),i&&l&2048&&Pu(o.alternate,o);break;case 24:Ru(a,o,s,c,i),i&&l&2048&&Fu(o.alternate,o);break;default:Ru(a,o,s,c,i)}t=t.sibling}}function zu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:zu(n,r),i&2048&&Pu(r.alternate,r);break;case 24:zu(n,r),i&2048&&Fu(r.alternate,r);break;default:zu(n,r)}t=t.sibling}}var Bu=8192;function Vu(e,t,n){if(e.subtreeFlags&Bu)for(e=e.child;e!==null;)Hu(e,t,n),e=e.sibling}function Hu(e,t,n){switch(e.tag){case 26:Vu(e,t,n),e.flags&Bu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,Tu,e.memoizedState,e.memoizedProps));break;case 5:Vu(e,t,n),e.flags&Bu&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=Tu;Tu=bm(e.stateNode.containerInfo),Vu(e,t,n),Tu=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Bu,Bu=16777216,Vu(e,t,n),Bu=r):Vu(e,t,n));break;case 30:if((e.flags&Bu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Il===null&&(Il=new Map),Il.set(r,i)}Vu(e,t,n);break;default:Vu(e,t,n)}}function Uu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Wu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];au=r,qu(r,e)}Uu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gu(e),e=e.sibling}function Gu(e){switch(e.tag){case 0:case 11:case 15:Wu(e),e.flags&2048&&vl(9,e,e.return);break;case 3:Wu(e);break;case 12:Wu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ku(e)):Wu(e);break;default:Wu(e)}}function Ku(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];au=r,qu(r,e)}Uu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:vl(8,t,t.return),Ku(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ku(t));break;default:Ku(t)}e=e.sibling}}function qu(e,t){for(;au!==null;){var n=au;switch(n.tag){case 0:case 11:case 15:vl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Da(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,au=r;else a:for(n=e;au!==null;){r=au;var i=r.sibling,a=r.return;if(gu(r),r===n){au=null;break a}if(i!==null){i.return=a,au=i;break a}au=a}}}var Ju={getCacheForType:function(e){var t=ya(Ta),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ya(Ta).controller.signal}},Yu=typeof WeakMap==`function`?WeakMap:Map,X=0,Xu=null,Z=null,Q=0,Zu=0,Qu=null,$u=!1,ed=!1,td=!1,nd=0,rd=0,id=0,ad=0,od=0,sd=0,cd=0,ld=null,ud=null,dd=!1,fd=0,pd=0,md=1/0,hd=null,gd=null,_d=0,vd=null,yd=null,bd=0,xd=0,Sd=null,Cd=null,wd=null,Td=null,Ed=null,Dd=0,Od=null;function kd(){return X&2&&Q!==0?Q&-Q:M.T===null?bt():Nf()}function Ad(){if(sd===0){if(!(Q&536870912)||U){var e=rt;rt<<=1,!(rt&3932160)&&(rt=262144),sd=e}else sd=536870912}return e=To.current,e!==null&&(e.flags|=32),sd}function jd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(mi(e.memoizedProps,n))),Td===null&&(Td=[]),Td.push(t.bind(null,r))}}function Md(e,t,n){(e===Xu&&(Zu===2||Zu===9)||e.cancelPendingCommit!==null)&&(zd(e,0),Id(e,Q,sd,!1)),ft(e,n),(!(X&2)||e!==Xu)&&(e===Xu&&(!(X&2)&&(ad|=n),rd===4&&Id(e,Q,sd,!1)),Tf(e))}function Nd(e,t,n){if(X&6)throw Error(a(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||st(e,t),i=r?qd(e,t):Gd(e,t,!0),o=r;do{if(i===0){ed&&!r&&Id(e,t,0,!1);break}if(n=e.current.alternate,o&&!Fd(n)){i=Gd(e,t,!1),o=!1;continue}if(i===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;i=ld;var l=c.current.memoizedState.isDehydrated;if(l&&(zd(c,s).flags|=256),s=Gd(c,s,!1),s!==2&&s!==6){if(td&&!l){c.errorRecoveryDisabledLanes|=o,ad|=o,i=4;break a}o=ud,ud=i,o!==null&&(ud===null?ud=o:ud.push.apply(ud,o))}i=s}if(o=!1,i!==2)continue}}if(i===1){zd(e,0),Id(e,t,0,!0);break}a:{switch(r=e,o=i,o){case 0:case 1:throw Error(a(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Id(r,t,sd,!$u);break a;case 2:ud=null;break;case 3:case 5:break;default:throw Error(a(329))}if((t&62914560)===t&&(i=fd+300-Be(),10<i)){if(Id(r,t,sd,!$u),ot(r,0,!0)!==0)break a;bd=t,r.timeoutHandle=gp(Pd.bind(null,r,n,ud,hd,dd,t,sd,ad,cd,$u,o,`Throttled`,-0,0),i);break a}Pd(r,n,ud,hd,dd,t,sd,ad,cd,$u,o,null,-0,0)}break}while(1);Tf(e)}function Pd(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;if(d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_n},Il=null,Hu(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?fd-Be():(a&4194048)===a?pd-Be():0,m=eh(d,m),m!==null)){bd=a,e.cancelPendingCommit=m(ef.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Id(e,a,o,!l);return}ef(e,t,a,n,r,i,o,s,c,l,u,d)}function Fd(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Rr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Id(e,t,n,r){t=ct(e,t),t&=~od,t&=~ad,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&mt(e,n,t)}function Ld(){return X&6?!0:(Ef(0,!1),!1)}function Rd(){if(Z!==null){if(Zu===0)var e=Z.return;else e=Z,da=ua=null,es(e),$a=null,eo=0,e=Z;for(;e!==null;)gl(e.alternate,e),e=e.return;Z=null}}function zd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),bd=0,Rd(),Xu=e,Z=n=ji(e.current,null),Q=t,Zu=0,Qu=null,$u=!1,ed=st(e,t),td=!1,cd=sd=od=ad=id=rd=0,ud=ld=null,dd=!1,nd=ct(e,t),xi(),n}function Bd(e,t){q=null,M.H=lc,t===Ua||t===Ga?(t=Za(),Zu=3):t===Wa?(t=Za(),Zu=4):Zu=t===Dc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Qu=t,Z===null&&(rd=1,xc(e,zi(t,e.current)))}function Vd(){var e=To.current;return e===null?!0:(Q&4194048)===Q?Eo===null:(Q&62914560)===Q||Q&536870912?e===Eo:!1}function Hd(){var e=M.H;return M.H=lc,e===null?lc:e}function Ud(){var e=M.A;return M.A=Ju,e}function Wd(){rd=4,$u||(Q&4194048)!==Q&&To.current!==null||(ed=!0),!(id&134217727)&&!(ad&134217727)||Xu===null||Id(Xu,Q,sd,!1)}function Gd(e,t,n){var r=X;X|=2;var i=Hd(),a=Ud();(Xu!==e||Q!==t)&&(hd=null,zd(e,t)),t=!1;var o=rd;a:do try{if(Zu!==0&&Z!==null){var s=Z,c=Qu;switch(Zu){case 8:Rd(),o=6;break a;case 3:case 2:case 9:case 6:To.current===null&&(t=!0);var l=Zu;if(Zu=0,Qu=null,Zd(e,s,c,l),n&&ed){o=0;break a}break;default:l=Zu,Zu=0,Qu=null,Zd(e,s,c,l)}}Kd(),o=rd;break}catch(t){Bd(e,t)}while(1);return t&&e.shellSuspendCounter++,da=ua=null,X=r,M.H=i,M.A=a,Z===null&&(Xu=null,Q=0,xi()),o}function Kd(){for(;Z!==null;)Yd(Z)}function qd(e,t){var n=X;X|=2;var r=Hd(),i=Ud();Xu!==e||Q!==t?(hd=null,md=Be()+500,zd(e,t)):ed=st(e,t);a:do try{if(Zu!==0&&Z!==null){t=Z;var o=Qu;b:switch(Zu){case 1:Zu=0,Qu=null,Zd(e,t,o,1);break;case 2:case 9:if(qa(o)){Zu=0,Qu=null,Xd(t);break}t=function(){Zu!==2&&Zu!==9||Xu!==e||(Zu=7),Tf(e)},o.then(t,t);break a;case 3:Zu=7;break a;case 4:Zu=5;break a;case 7:qa(o)?(Zu=0,Qu=null,Xd(t)):(Zu=0,Qu=null,Zd(e,t,o,7));break;case 5:var s=null;switch(Z.tag){case 26:s=Z.memoizedState;case 5:case 27:var c=Z;if(s?Ym(s):c.stateNode.complete){Zu=0,Qu=null;var l=c.sibling;if(l!==null)Z=l;else{var u=c.return;u===null?Z=null:(Z=u,Qd(u))}break b}}Zu=0,Qu=null,Zd(e,t,o,5);break;case 6:Zu=0,Qu=null,Zd(e,t,o,6);break;case 8:Rd(),rd=6;break a;default:throw Error(a(462))}}Jd();break}catch(t){Bd(e,t)}while(1);return da=ua=null,M.H=r,M.A=i,X=n,Z===null?(Xu=null,Q=0,xi(),rd):0}function Jd(){for(;Z!==null&&!Re();)Yd(Z)}function Yd(e){var t=sl(e.alternate,e,nd);e.memoizedProps=e.pendingProps,t===null?Qd(e):Z=t}function Xd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Vc(n,t,t.pendingProps,t.type,void 0,Q);break;case 11:t=Vc(n,t,t.pendingProps,t.type.render,t.ref,Q);break;case 5:es(t);var r=t;r===ea&&(U?(K(r),r.tag===5&&r.stateNode!=null&&(ta=r.stateNode)):(K(r),U=!0));default:gl(n,t),t=Z=Mi(t,nd),t=sl(n,t,nd)}e.memoizedProps=e.pendingProps,t===null?Qd(e):Z=t}function Zd(e,t,n,r){da=ua=null,es(t),$a=null,eo=0;var i=t.return;try{if(Ec(e,i,t,n,Q)){rd=1,xc(e,zi(n,e.current)),Z=null;return}}catch(t){if(i!==null)throw Z=i,t;rd=1,xc(e,zi(n,e.current)),Z=null;return}t.flags&32768?(U||r===1?e=!0:ed||Q&536870912?e=!1:($u=e=!0,(r===2||r===9||r===3||r===6)&&(r=To.current,r!==null&&r.tag===13&&(r.flags|=16384))),$d(t,e)):Qd(t)}function Qd(e){var t=e;do{if(t.flags&32768){$d(t,$u);return}e=t.return;var n=ml(t.alternate,t,nd);if(n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);rd===0&&(rd=5)}function $d(e,t){do{var n=hl(e.alternate,e);if(n!==null){n.flags&=32767,Z=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Z=e;return}Z=e=n}while(e!==null);rd=6,Z=null}function ef(e,t,n,r,i,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do lf();while(_d!==0);if(X&6)throw Error(a(327));if(t!==null){if(t===e.current)throw Error(a(177));e===Xu&&(Z=Xu=null,Q=0),yd=t,vd=e,bd=n,Sd=i,Cd=r,tf(e,t,n,s,c,l,f)}}function tf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(xd=s,s|=bi,pt(e,n,s,r,i,a),Td=null,(n&335544064)===n?(Ed=Aa(e),r=10262):(Ed=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,vf(We,function(){return uf(),null})):(e.callbackNode=null,e.callbackPriority=0),Fl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=M.T,M.T=null,i=N.p,N.p=2,a=X,X|=4;try{uu(e,t,n)}finally{X=a,N.p=i,M.T=r}}_d=1,Fl?wd=Mp(o,e.containerInfo,Ed,af,of,rf,sf,uf,nf,null,null):(af(),of(),sf())}function nf(e){if(_d!==0){var t=vd.onRecoverableError;t(e,{componentStack:null})}}function rf(){_d===3&&(_d=0,Au(yd,vd),_d=4)}function af(){if(_d===1){_d=0;var e=vd,t=yd,n=bd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=M.T,M.T=null;var i=N.p;N.p=2;var a=X;X|=4;try{su=cu=!1,Eu(t,e,n),n=cp;var o=Wr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Ur(s.ownerDocument.documentElement,s)){if(c!==null&&Gr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Hr(s,h),v=Hr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{X=a,N.p=i,M.T=r}}e.current=t,_d=2}}function of(){if(_d===2){_d=0;var e=vd,t=yd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=M.T,M.T=null;var r=N.p;N.p=2;var i=X;X|=4;try{fu(e,t.alternate,t)}finally{X=i,N.p=r,M.T=n}}_d=3}}function sf(){if(_d===4||_d===3){_d=0;var e=wd;wd=null,ze();var t=vd,n=yd,r=bd,i=Cd,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?_d=5:(_d=0,yd=vd=null,cf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(gd=null),vt(r),n=n.stateNode,Xe&&typeof Xe.onCommitFiberRoot==`function`)try{Xe.onCommitFiberRoot(Ye,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=M.T,a=N.p,N.p=2,M.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{M.T=n,N.p=a}}if(i=Td,o=Ed,Ed=null,i!==null&&(Td=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);bd&3&&lf(),Tf(t),a=t.pendingLanes,r&261930&&a&42?t===Od?Dd++:(Dd=0,Od=t):(Dd=0,Od=null),Ef(0,!1)}}function cf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Da(t)))}function lf(){return wd!==null&&(wd.skipTransition(),wd=null),af(),of(),sf(),uf()}function uf(){if(_d!==5)return!1;var e=vd,t=xd;xd=0;var n=vt(bd),r=M.T,i=N.p;try{N.p=32>n?32:n,M.T=null,n=Sd,Sd=null;var o=vd,s=bd;if(_d=0,yd=vd=null,bd=0,X&6)throw Error(a(331));var c=X;if(X|=4,Gu(o.current),Lu(o,o.current,s,n),X=c,Ef(0,!1),Xe&&typeof Xe.onPostCommitFiberRoot==`function`)try{Xe.onPostCommitFiberRoot(Ye,o)}catch{}return!0}finally{N.p=i,M.T=r,cf(e,t)}}function df(e,t,n){t=zi(n,t),t=Cc(e.stateNode,t,2),e=fo(e,t,2),e!==null&&(ft(e,2),Tf(e))}function ff(e,t,n){if(e.tag===3)df(e,e,n);else for(;t!==null;){if(t.tag===3){df(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(gd===null||!gd.has(r))){e=zi(n,e),n=wc(2),r=fo(t,n,2),r!==null&&(Tc(n,r,t,e),ft(r,2),Tf(r));break}}t=t.return}}function pf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Yu;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(td=!0,i.add(n),e=mf.bind(null,e,t,n),t.then(e,e))}function mf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Xu===e&&(Q&n)===n&&(rd===4||rd===3&&(Q&62914560)===Q&&300>Be()-fd?X&2?od|=n:zd(e,0):od|=n,cd===Q&&(cd=0)),Tf(e)}function hf(e,t){t===0&&(t=ut()),e=wi(e,t),e!==null&&(ft(e,t),Tf(e))}function gf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hf(e,n)}function _f(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(t),hf(e,n)}function vf(e,t){return Ie(e,t)}var yf=null,bf=null,xf=!1,Sf=!1,Cf=!1,wf=0;function Tf(e){e!==bf&&e.next===null&&(bf===null?yf=bf=e:bf=bf.next=e),Sf=!0,xf||(xf=!0,Mf())}function Ef(e,t){if(!Cf&&Sf){Cf=!0;do for(var n=!1,r=yf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,jf(r,a))}else a=Q,a=ot(r,r===Xu?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||st(r,a)||(n=!0,jf(r,a))}r=r.next}while(n);Cf=!1}}function Df(){Of()}function Of(){Sf=xf=!1;var e=0;wf!==0&&hp()&&(e=wf);for(var t=Be(),n=null,r=yf;r!==null;){var i=r.next,a=kf(r,t);a===0?(r.next=null,n===null?yf=i:n.next=i,i===null&&(bf=n)):(n=r,(e!==0||a&3)&&(Sf=!0)),r=i}_d!==0&&_d!==5||Ef(e,!1),wf!==0&&(wf=0)}function kf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=lt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Xu,n=Q,n=ot(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Zu===2||Zu===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Le(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||st(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Le(r),vt(n)){case 2:case 8:n=Ue;break;case 32:n=We;break;case 268435456:n=Ke;break;default:n=We}return r=Af.bind(null,e),n=Ie(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Le(r),e.callbackPriority=2,e.callbackNode=null,2}function Af(e,t){if(_d!==0&&_d!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(lf()&&e.callbackNode!==n)return null;var r=Q;return r=ot(e,e===Xu?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Nd(e,r,t),kf(e,Be()),e.callbackNode!=null&&e.callbackNode===n?Af.bind(null,e):null)}function jf(e,t){if(lf())return null;Nd(e,t,!0)}function Mf(){bp(function(){X&6?Ie(He,Df):Of()})}function Nf(){if(wf===0){var e=Na;e===0&&(e=nt,nt<<=1,!(nt&261888)&&(nt=256)),wf=e}return wf}function Pf(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:gn(e)}function Ff(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Pf((i[Ct]||null).action),o=r.submitter;o&&(t=(t=o[Ct]||null)?Pf(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Ln(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(wf!==0){var e=new FormData(i,o);Ys(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),Ys(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var If=0;If<di.length;If++){var Lf=di[If];fi(Lf.toLowerCase(),`on`+(Lf[0].toUpperCase()+Lf.slice(1)))}fi(ri,`onAnimationEnd`),fi(ii,`onAnimationIteration`),fi(ai,`onAnimationStart`),fi(`dblclick`,`onDoubleClick`),fi(`focusin`,`onFocus`),fi(`focusout`,`onBlur`),fi(oi,`onTransitionRun`),fi(si,`onTransitionStart`),fi(ci,`onTransitionCancel`),fi(li,`onTransitionEnd`),Bt(`onMouseEnter`,[`mouseout`,`mouseover`]),Bt(`onMouseLeave`,[`mouseout`,`mouseover`]),Bt(`onPointerEnter`,[`pointerout`,`pointerover`]),Bt(`onPointerLeave`,[`pointerout`,`pointerover`]),zt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),zt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),zt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),zt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),zt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),zt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Rf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),zf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Rf));function Bf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){_i(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){_i(e)}i.currentTarget=null,a=c}}}}function $(e,t){var n=t[wt];n===void 0&&(n=t[wt]=new Set);var r=e+`__bubble`;n.has(r)||(Wf(t,e,2,!1),n.add(r))}function Vf(e,t,n){var r=0;t&&(r|=4),Wf(n,e,r,t)}var Hf=`_reactListening`+Math.random().toString(36).slice(2);function Uf(e){if(!e[Hf]){e[Hf]=!0,Lt.forEach(function(t){t!==`selectionchange`&&(zf.has(t)||Vf(t,!1,e),Vf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hf]||(t[Hf]=!0,Vf(`selectionchange`,!1,t))}}function Wf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!Dn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Gf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var c=r.stateNode.containerInfo;if(c===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;c!==null;){if(o=jt(c),o===null)return;if(l=o.tag,l===5||l===6||l===26||l===27){r=a=o;continue a}c=c.parentNode}}r=r.return}wn(function(){var r=a,i=yn(n),o=[];a:{var c=ui.get(e);if(c!==void 0){var l=Ln,u=e;switch(e){case`keypress`:if(Mn(n)===0)break a;case`keydown`:case`keyup`:l=tr;break;case`focusin`:u=`focus`,l=Kn;break;case`focusout`:u=`blur`,l=Kn;break;case`beforeblur`:case`afterblur`:l=Kn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Wn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Gn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=ir;break;case ri:case ii:case ai:l=qn;break;case li:l=ar;break;case`scroll`:case`scrollend`:l=zn;break;case`wheel`:l=or;break;case`copy`:case`cut`:case`paste`:l=Jn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=nr;break;case`submit`:l=rr;break;case`toggle`:case`beforetoggle`:l=sr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=Tn(m,p),g!=null&&d.push(Kf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),o.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==vn&&(u=n.relatedTarget||n.fromElement)&&(jt(u)||u[z]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?jt(l):null,l!==null&&(f=s(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Wn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=nr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:Nt(c),h=l==null?u:Nt(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,jt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?w(c,l,Jf):null,c!==null&&Yf(o,u,c,d,!1),l!==null&&f!==null&&Yf(o,f,l,d,!0)))}a:{if(c=r?Nt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=H;else if(xr(c)){if(Dr)_=Ir;else{_=Pr;var v=Nr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&pn(r.elementType)&&(_=H):_=Fr;if(_&&=_(e,r)){Sr(o,_,n,i);break a}v&&v(e,c,r)}switch(v=r?Nt(r):window,e){case`focusin`:(xr(v)||v.contentEditable===`true`)&&(qr=v,Jr=r,Yr=null);break;case`focusout`:Yr=Jr=qr=null;break;case`mousedown`:Xr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Xr=!1,Zr(o,n,i);break;case`selectionchange`:if(Kr)break;case`keydown`:case`keyup`:Zr(o,n,i)}var y;if(lr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else _r?hr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(fr&&n.locale!==`ko`&&(_r||b!==`onCompositionStart`?b===`onCompositionEnd`&&_r&&(y=V()):(kn=i,An=`value`in kn?kn.value:kn.textContent,_r=!0)),v=qf(r,b),0<v.length&&(b=new Yn(b,e,null,n,i),o.push({event:b,listeners:v}),y?b.data=y:(y=gr(n),y!==null&&(b.data=y)))),(y=dr?vr(e,n):yr(e,n))&&(b=qf(r,`onBeforeInput`),0<b.length&&(v=new Yn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:v,listeners:b}),v.data=y)),Ff(o,e,r,n,i)}Bf(o,t)})}function Kf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=Tn(e,n),i!=null&&r.unshift(Kf(e,i,a)),i=Tn(e,t),i!=null&&r.push(Kf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Jf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Yf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=Tn(n,a),l!=null&&o.unshift(Kf(n,l,c))):i||(l=Tn(n,a),l!=null&&o.push(Kf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Xf=/\r\n?/g,Zf=/\u0000|\uFFFD/g;function Qf(e){return(typeof e==`string`?e:``+e).replace(Xf,`
`).replace(Zf,``)}function $f(e,t){return t=Qf(t),Qf(e)===t}function ep(e,t,n,r,i,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||ln(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&ln(e,``+r);else return;break;case`className`:qt(e,`class`,r);break;case`tabIndex`:qt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:qt(e,n,r);break;case`style`:fn(e,r,o);return;case`data`:if(t!==`object`){qt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=gn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&ep(e,t,`name`,i.name,i,null),ep(e,t,`formEncType`,i.formEncType,i,null),ep(e,t,`formMethod`,i.formMethod,i,null),ep(e,t,`formTarget`,i.formTarget,i,null)):(ep(e,t,`encType`,i.encType,i,null),ep(e,t,`method`,i.method,i,null),ep(e,t,`target`,i.target,i,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=gn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=_n);return;case`onScroll`:r!=null&&$(`scroll`,e);return;case`onScrollEnd`:r!=null&&$(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(a(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(a(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=gn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:$(`beforetoggle`,e),$(`toggle`,e),Kt(e,`popover`,r);break;case`xlinkActuate`:Jt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Jt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Jt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Jt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Jt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Jt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Jt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Jt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Jt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Kt(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=mn.get(n)||n,Kt(e,n,r);else return}B=!0}function tp(e,t,n,r,i,o){switch(n){case`style`:fn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(a(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(a(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)ln(e,r);else if(typeof r==`number`||typeof r==`bigint`)ln(e,``+r);else return;break;case`onScroll`:r!=null&&$(`scroll`,e);return;case`onScrollEnd`:r!=null&&$(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=_n);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Rt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),o=n.slice(2,i?n.length-7:void 0),t=e[Ct]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,i),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,i);break a}B=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):Kt(e,n,r)}return}B=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:$(`error`,e),$(`load`,e);var r=!1,i=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(a(137,t));default:ep(e,t,o,s,n,null)}}i&&ep(e,t,`srcSet`,n.srcSet,n,null),r&&ep(e,t,`src`,n.src,n,null);return;case`input`:$(`invalid`,e);var c=o=s=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(a(137,t));break;default:ep(e,t,r,d,n,null)}}rn(e,o,c,l,u,s,i,!1);return;case`select`:for(i in $(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:ep(e,t,i,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&on(e,!!r,n,!0):on(e,!!r,t,!1);return;case`textarea`:for(s in $(`invalid`,e),o=i=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(a(91));break;default:ep(e,t,s,c,n,null)}cn(e,r,i,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:ep(e,t,l,r,n,null)}return;case`dialog`:$(`beforetoggle`,e),$(`toggle`,e),$(`cancel`,e),$(`close`,e);break;case`iframe`:case`object`:$(`load`,e);break;case`video`:case`audio`:for(r=0;r<Rf.length;r++)$(Rf[r],e);break;case`image`:$(`error`,e),$(`load`,e);break;case`details`:$(`toggle`,e);break;case`embed`:case`source`:case`link`:$(`error`,e),$(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(a(137,t));default:ep(e,t,u,r,n,null)}return;default:if(pn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&ep(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||ep(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(B=!0),o=m;break;case`name`:m!==f&&(B=!0),i=m;break;case`checked`:m!==f&&(B=!0),u=m;break;case`defaultChecked`:m!==f&&(B=!0),d=m;break;case`value`:m!==f&&(B=!0),s=m;break;case`defaultValue`:m!==f&&(B=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(a(137,t));break;default:m!==f&&ep(e,t,p,m,r,f)}}nn(e,s,c,l,u,d,o,i);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||ep(e,t,o,null,r,l)}for(i in r)if(o=r[i],l=n[i],r.hasOwnProperty(i)&&(o!=null||l!=null))switch(i){case`value`:o!==l&&(B=!0),p=o;break;case`defaultValue`:o!==l&&(B=!0),c=o;break;case`multiple`:o!==l&&(B=!0),s=o;default:o!==l&&ep(e,t,i,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?on(e,!!n,n?[]:``,!1):on(e,!!n,t,!0)):on(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:ep(e,t,c,null,r,i)}for(s in r)if(i=r[s],o=n[s],r.hasOwnProperty(s)&&(i!=null||o!=null))switch(s){case`value`:i!==o&&(B=!0),p=i;break;case`defaultValue`:i!==o&&(B=!0),m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(a(91));break;default:i!==o&&ep(e,t,s,i,r,o)}sn(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:ep(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(B=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:ep(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&ep(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(a(137,t));break;default:ep(e,t,u,p,r,m)}return;default:if(pn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&ep(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||ep(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[St]=r,n[Ct]=t,np(n,e,t),Ft(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ot]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:T({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),p(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return v(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),p(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return v(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=m(this._fragmentFiber);if(t===null)return!0;t=v(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){p(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=v(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];p(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=m(this._fragmentFiber);e!==null&&(e=v(e),e=lp(e).activeElement,e!==null&&p(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=v(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),p(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag!==6&&(e=v(e),t.observe(e),!1)}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),p(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag!==6&&(e=v(e),t.unobserve(e),!1)}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return p(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=v(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=m(this._fragmentFiber);return t===null?this:v(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=m(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];p(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=v(t);if(n.length===0){if(n=r,h(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=g(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=v(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=v(n[0]),i=v(n[n.length-1]);var a=h(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=jt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=m(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=w(n,a,C),t===null?t=!1:(p(t,!0,x,a,n),a=y,y=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=w(r,a,C),t===null?t=!1:(p(t,!0,S,a,r),a=y,b=y=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(a(566));var t=[];p(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=g(this._fragmentFiber);if(r=n?r[1]||r[0]||m(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=v(r),Zp(e,n);return}if(r=v(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var i=t[r];i.tag===6?(i=v(i),Zp(i,n)):v(i).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=v(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),At(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Ot])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(a(452));return e;case`head`:if(e=t.head,!e)throw Error(a(453));return e;case`body`:if(e=t.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&ep(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===_n&&(e.onclick=null),At(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);At(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=N.d;N.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=Ld();return e||t}function Cm(e){var t=Mt(e);t!==null&&t.tag===5&&t.type===`form`?Zs(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=tn(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),Ft(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+tn(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+tn(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+tn(n.imageSizes)+`"]`)):i+=`[href="`+tn(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=T({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[kt]=!0,o.onload=o.onerror=function(){It(o)}),Ft(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+tn(r)+`"][href="`+tn(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=T({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),Ft(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=Pt(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=T({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);Ft(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=Pt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=T({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Ft(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=Pt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=T({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Ft(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var i=(i=I.current)?bm(i):null;if(!i)throw Error(a(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=Pt(i).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=Pt(i).hoistableStyles,s=o.get(e);if(s||(i=i.ownerDocument||i,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=i.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(i,e,o,s.state))),t&&r===null)throw Error(a(528,``));return s}if(t&&r!==null)throw Error(a(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=Pt(i).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Pm(e){return`href="`+tn(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[kt]){r.loading=1;return}}else t=e.createElement(`link`),t[kt]=!0,t.onload=t.onerror=It.bind(null,t),np(t,`link`,n),Ft(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+tn(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+tn(n.href)+`"]`);if(r)return t.instance=r,Ft(r),r;var i=T({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Ft(r),np(r,`style`,i),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Pm(n.href);var o=e.querySelector(Fm(i));if(o)return t.state.loading|=4,t.instance=o,Ft(o),o;r=Im(n),(i=vm.get(i))&&Hm(r,i),o=(e.ownerDocument||e).createElement(`link`),Ft(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),np(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(i=e.querySelector(zm(o)))?(t.instance=i,Ft(i),i):(r=n,(i=vm.get(o))&&(r=T({},n),Um(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),Ft(i),np(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(a(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ot]||a[St]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ft(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),Ft(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:k,Provider:null,Consumer:null,_currentValue:ve,_currentValue2:ve,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=dt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dt(0),this.hiddenUpdates=dt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ki(3,null,null,t),e.current=a,a.stateNode=e,t=Ea(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},co(a),e}function uh(e){return e?(e=Di,e):Di}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=uo(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=fo(e,r,t),n!==null&&(Md(n,e,t),po(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=wi(e,67108864);t!==null&&Md(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=kd();t=_t(t);var n=wi(e,t);n!==null&&Md(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=M.T;M.T=null;var a=N.p;try{N.p=2,yh(e,t,n,r)}finally{N.p=a,M.T=i}}function vh(e,t,n,r){var i=M.T;M.T=null;var a=N.p;try{N.p=8,yh(e,t,n,r)}finally{N.p=a,M.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Gf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=Mt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=at(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Qe(o);s.entanglements[1]|=c,o&=~c}Tf(a),!(X&6)&&(md=Be()+500,Ef(0,!1))}}break;case 31:case 13:s=wi(a,2),s!==null&&Md(s,a,2),Ld(),ph(a,2)}if(a=bh(r),a===null&&Gf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Gf(e,t,r,null,n)}}function bh(e){return e=yn(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=jt(e),e!==null){var t=s(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=c(t),e!==null)return e;e=null}else if(n===31){if(e=l(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ve()){case He:return 2;case Ue:return 8;case We:case Ge:return 32;case Ke:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Mt(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=jt(e.target);if(t!==null){var n=s(t);if(n!==null){if(t=n.tag,t===13){if(t=c(n),t!==null){e.blockedOn=t,xt(e.priority,function(){hh(n)});return}}else if(t===31){if(t=l(n),t!==null){e.blockedOn=t,xt(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vn=r,n.target.dispatchEvent(r),vn=null}else return t=Mt(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,t){e.blockedOn===t&&(e.blockedOn=null,wh||(wh=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=Mt(n);a!==null&&(e.splice(t,3),t-=3,Ys(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Ct]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[Ct]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));var n=t.current;dh(n,kd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),Ld(),t[z]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=bt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=r.version;if(Kh!==`19.3.0`)throw Error(a(527,Kh,`19.3.0`));N.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(a(188)):(e=Object.keys(e).join(`,`),Error(a(268,e)));return e=d(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.0`,rendererPackageName:`react-dom`,currentDispatcherRef:M,reconcilerVersion:`19.3.0`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{Ye=Jh.inject(qh),Xe=Jh}catch{}}e.createRoot=function(e,t){if(!o(e))throw Error(a(299));var n=!1,r=``,i=vc,s=yc,c=bc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,i,s,c,Uh),e[z]=t.current,Uf(e),new Wh(t)}})),xt=i(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=bt()})),R=n(t(),1),St=xt();c();var Ct={RichTextEditor:`_RichTextEditor_5wzos_1`,"RichTextEditor--editor":`_RichTextEditor--editor_5wzos_50`,"RichTextEditor--disabled":`_RichTextEditor--disabled_5wzos_123`,"RichTextEditor--isActive":`_RichTextEditor--isActive_5wzos_159`,"RichTextEditor-menu":`_RichTextEditor-menu_5wzos_165`},z=l(),wt=`modulepreload`,Tt=function(e){return`/gestalten/`+e},Et={},Dt=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Tt(t,n),t=s(t),t in Et)return;Et[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:wt,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};c(),c();var Ot={RichTextMenu:`_RichTextMenu_1ve2j_1`,"RichTextMenu--form":`_RichTextMenu--form_1ve2j_7`,"RichTextMenu-group":`_RichTextMenu-group_1ve2j_21`,"RichTextMenu--inline":`_RichTextMenu--inline_1ve2j_39`};c(),c(),c(),c();var kt=a(`Control`,{Control:`_Control_id4pm_1`,"Control--inline":`_Control--inline_id4pm_6`});function At({icon:e,disabled:t,active:n,onClick:r,title:i}){let{inline:a}=st();return a?(0,z.jsx)(`span`,{className:kt({inline:!0}),children:(0,z.jsx)(nt,{onClick:r,disabled:t,active:n,label:i,children:e})}):(0,z.jsx)(`span`,{className:kt(),children:(0,z.jsx)(Re,{onClick:r,disabled:t,active:n,title:i,children:e})})}function jt(){let{editor:e,editorState:t}=st(),n=I(`field-richtext-align-left`);return(0,z.jsx)(At,{icon:(0,z.jsx)(F,{}),onClick:t=>{t.stopPropagation(),e?.chain().focus().setTextAlign(`left`).run()},disabled:!t?.canAlignLeft,active:t?.isAlignLeft,title:n})}c();function Mt(){let{editor:e,editorState:t}=st(),n=I(`field-richtext-align-center`);return(0,z.jsx)(At,{icon:(0,z.jsx)(Qe,{}),onClick:t=>{t.stopPropagation(),e?.chain().focus().setTextAlign(`center`).run()},disabled:!t?.canAlignCenter,active:t?.isAlignCenter,title:n})}c();function Nt(){let{editor:e,editorState:t}=st(),n=I(`field-richtext-align-right`);return(0,z.jsx)(At,{icon:(0,z.jsx)(Ke,{}),onClick:t=>{t.stopPropagation(),e?.chain().focus().setTextAlign(`right`).run()},disabled:!t?.canAlignRight,active:t?.isAlignRight,title:n})}c();function Pt(){let{editor:e,editorState:t}=st(),n=I(`field-richtext-align-justify`);return(0,z.jsx)(At,{icon:(0,z.jsx)(Pe,{}),onClick:t=>{t.stopPropagation(),e?.chain().focus().setTextAlign(`justify`).run()},disabled:!t?.canAlignJustify,active:t?.isAlignJustify,title:n})}c(),c();function Ft(){let e=st(),t=ht(e.options);return(0,z.jsx)(ve,{options:t,onChange:()=>{},value:`left`,defaultValue:`left`,renderDefaultIcon:F})}var It=(0,R.lazy)(()=>Dt(()=>import(`./loaded-SMPR6KZF-BotSzOf1.js`).then(e=>({default:e.AlignSelectLoaded})),__vite__mapDeps([0,1,2,3,4,5]))),Lt=()=>(0,z.jsx)(R.Suspense,{fallback:(0,z.jsx)(Ft,{}),children:(0,z.jsx)(It,{})});c();function Rt(){let{editor:e,editorState:t}=st(),n=I(`field-richtext-bold`);return(0,z.jsx)(At,{icon:(0,z.jsx)(et,{}),onClick:t=>{t.stopPropagation(),e?.chain().focus().toggleBold().run()},disabled:!t?.canBold,active:t?.isBold,title:n})}c();function zt(){let{editor:e,editorState:t}=st(),n=I(`field-richtext-italic`);return(0,z.jsx)(At,{icon:(0,z.jsx)(f,{}),onClick:t=>{t.stopPropagation(),e?.chain().focus().toggleItalic().run()},disabled:!t?.canItalic,active:t?.isItalic,title:n})}c();function Bt(){let{editor:e,editorState:t}=st(),n=I(`field-richtext-underline`);return(0,z.jsx)(At,{icon:(0,z.jsx)(Se,{}),onClick:t=>{t.stopPropagation(),e?.chain().focus().toggleUnderline().run()},disabled:!t?.canUnderline,active:t?.isUnderline,title:n})}c();function Vt(){let{editor:e,editorState:t}=st(),n=I(`field-richtext-strikethrough`);return(0,z.jsx)(At,{icon:(0,z.jsx)(Oe,{}),onClick:t=>{t.stopPropagation(),e?.chain().focus().toggleStrike().run()},disabled:!t?.canStrike,active:t?.isStrike,title:n})}c();function Ht(){let{editor:e,editorState:t}=st(),n=I(`field-richtext-code-inline`);return(0,z.jsx)(At,{icon:(0,z.jsx)(Je,{}),onClick:t=>{t.stopPropagation(),e?.chain().focus().toggleCode().run()},disabled:!t?.canInlineCode,active:t?.isInlineCode,title:n})}c();function Ut(){let{editor:e,editorState:t}=st(),n=I(`field-richtext-list-bullet`);return(0,z.jsx)(At,{icon:(0,z.jsx)(ce,{}),onClick:t=>{t.stopPropagation(),e?.chain().focus().toggleBulletList().run()},disabled:!t?.canBulletList,active:t?.isBulletList,title:n})}c();function Wt(){let{editor:e,editorState:t}=st(),n=I(`field-richtext-list-ordered`);return(0,z.jsx)(At,{icon:(0,z.jsx)(y,{}),onClick:t=>{t.stopPropagation(),e?.chain().focus().toggleOrderedList().run()},disabled:!t?.canOrderedList,active:t?.isOrderedList,title:n})}c();function B(){let{editor:e,editorState:t}=st(),n=I(`field-richtext-code-block`);return(0,z.jsx)(At,{icon:(0,z.jsx)(d,{}),onClick:t=>{t.stopPropagation(),e?.chain().focus().toggleCodeBlock().run()},disabled:!t?.canCodeBlock,active:t?.isCodeBlock,title:n})}c();function Gt(){let{editor:e,editorState:t}=st(),n=I(`field-richtext-blockquote`);return(0,z.jsx)(At,{icon:(0,z.jsx)(O,{}),onClick:t=>{t.stopPropagation(),e?.chain().focus().toggleBlockquote().run()},disabled:!t?.canBlockquote,active:t?.isBlockquote,title:n})}c();function Kt(){let{editor:e,editorState:t}=st(),n=I(`field-richtext-horizontalrule`);return(0,z.jsx)(At,{icon:(0,z.jsx)(ge,{}),onClick:t=>{t.stopPropagation(),e?.chain().focus().setHorizontalRule().run()},disabled:!t?.canHorizontalRule,title:n})}c(),c();function qt(){let e=st(),t=gt(e.options);return(0,z.jsx)(ve,{options:t,onChange:()=>{},value:`p`,defaultValue:`p`,renderDefaultIcon:de})}var Jt=(0,R.lazy)(()=>Dt(()=>import(`./loaded-JKA25A3T-DDc_Wk0u.js`).then(e=>({default:e.HeadingSelectLoaded})),__vite__mapDeps([6,1,2,7,4,5]))),Yt=()=>(0,z.jsx)(R.Suspense,{fallback:(0,z.jsx)(qt,{}),children:(0,z.jsx)(Jt,{})});c(),c();function Xt(){let e=st(),t=_t(e.options);return(0,z.jsx)(ve,{options:t,onChange:()=>{},value:`p`,defaultValue:`p`,renderDefaultIcon:ce})}var Zt=(0,R.lazy)(()=>Dt(()=>import(`./loaded-36WRJPBT-CC9tTNA_.js`).then(e=>({default:e.ListSelectLoaded})),__vite__mapDeps([8,1,2,9,4,5]))),Qt=()=>(0,z.jsx)(R.Suspense,{fallback:(0,z.jsx)(Xt,{}),children:(0,z.jsx)(Zt,{})}),$t=a(`RichTextMenu`,Ot),en=({children:e})=>(0,z.jsx)(tn,{children:e}),tn=({children:e})=>{let{inline:t}=st();return(0,z.jsx)(`div`,{className:$t({inline:t,form:!t}),"data-puck-rte-menu":!0,children:e})},nn=({children:e})=>(0,z.jsx)(`div`,{className:$t(`group`),children:e});tn.Group=nn,tn.Control=At,tn.AlignCenter=Mt,tn.AlignJustify=Pt,tn.AlignLeft=jt,tn.AlignRight=Nt,tn.AlignSelect=Lt,tn.Blockquote=Gt,tn.Bold=Rt,tn.BulletList=Ut,tn.CodeBlock=B,tn.HeadingSelect=Yt,tn.HorizontalRule=Kt,tn.InlineCode=Ht,tn.Italic=zt,tn.ListSelect=Qt,tn.OrderedList=Wt,tn.Strikethrough=Vt,tn.Underline=Bt;var rn=({editor:e=null,editorState:t=null,field:n,readOnly:r,inline:i})=>{let{renderMenu:a,renderInlineMenu:o}=n,s=(0,R.useMemo)(()=>o||en,[o]),c=(0,R.useMemo)(()=>a||en,[a]);return(0,z.jsx)(He.Provider,{value:{editor:e,editorState:t,inline:i,options:n.options,readOnly:r},children:i?(0,z.jsx)(s,{editor:e,editorState:t,readOnly:r,children:(0,z.jsxs)(nn,{children:[(0,z.jsx)(Rt,{}),(0,z.jsx)(zt,{}),(0,z.jsx)(Bt,{})]})}):(0,z.jsxs)(c,{editor:e,editorState:t,readOnly:r,children:[(0,z.jsxs)(nn,{children:[(0,z.jsx)(Yt,{}),(0,z.jsx)(Qt,{})]}),(0,z.jsxs)(nn,{children:[(0,z.jsx)(Rt,{}),(0,z.jsx)(zt,{}),(0,z.jsx)(Bt,{})]}),(0,z.jsx)(nn,{children:(0,z.jsx)(Lt,{})})]})})};c();var an=a(`RichTextEditor`,Ct),on=(0,R.memo)(({children:e,menu:t,readOnly:n=!1,field:r,inline:i=!1,editor:a,id:o})=>{let{initialHeight:s}=r,c=L(e=>e.currentRichText?.id===o&&i===e.currentRichText.inline),l=P(),u=(0,R.useCallback)(e=>{var t,n;(e.metaKey||e.ctrlKey)&&e.key.toLowerCase()===`i`&&(e.stopPropagation(),e.preventDefault(),(n=a==null?void 0:(t=a.commands).toggleItalic)==null||n.call(t)),e.key.toLowerCase()===`backspace`&&e.stopPropagation()},[a]),d=(0,R.useCallback)(e=>{var t;let n=!!((t=e.relatedTarget)?.closest)?.call(t,`[data-puck-rte-menu]`);e.relatedTarget&&!n?l.setState({currentRichText:null}):e.stopPropagation()},[l]);return(0,z.jsxs)(`div`,{className:an({editor:!i,inline:i,isActive:c,disabled:n}),style:i?{}:{height:s??192,overflowY:`auto`},onKeyDownCapture:u,onBlur:d,children:[!i&&(0,z.jsx)(`div`,{className:an(`menu`),children:t}),e]})});on.displayName=`EditorInner`,c();var sn=(0,R.lazy)(()=>Dt(()=>import(`./full-7ZJV44EE-BhaK7Hiz.js`).then(e=>({default:e.LoadedRichTextMenuFull})),__vite__mapDeps([10,1,2,3,7,9,4,5]))),cn=e=>(0,z.jsx)(R.Suspense,{fallback:(0,z.jsx)(rn,o({},e)),children:(0,z.jsx)(sn,o({},e))});c(),c(),c(),c(),c(),c();var ln=(t,n=t)=>({slot:({value:r,propName:i,field:a,isReadOnly:s})=>{let c=s?n:t;return t=>c(e(o({allow:a?.type===`slot`?a.allow:[],disallow:a?.type===`slot`?a.disallow:[]},t),{zone:i,content:r}))}});c(),c(),c();function un(t,n,i){let a={};return Object.keys(t).forEach(s=>{let c=s;a[c]=a=>{var s=a,{parentId:l}=s,u=r(s,[`parentId`]);let d=u.propPath.replace(/\[\d+\]/g,`[*]`),f=n?.[u.propPath]||n?.[d]||i||!1,p=t[c];return p?.(e(o({},u),{field:u.field,isReadOnly:f,componentId:l}))}}),a}function dn(e,t,n,r,i){let a=(0,R.useMemo)(()=>un(n,r,i),[n,r,i]),s=(0,R.useMemo)(()=>h(t,a,e).props,[e,t,a]);return(0,R.useMemo)(()=>o(o({},t.props),s),[t.props,s])}function fn(e,t,n,r=n,i,a){return dn(e,t,ln(n,r),i,a)}c(),c();var pn=a(`RichTextEditor`,Ct);function mn({content:e}){return(0,z.jsx)(`div`,{className:pn(),children:(0,z.jsx)(`div`,{className:`rich-text`,dangerouslySetInnerHTML:{__html:e}})})}c();var hn=(t,n,r)=>{if(!t)return null;if(n.length===0)return r(t);let[i,...a]=n;return Array.isArray(t)?t.map(e=>hn(e,n,r)):e(o({},t),{[i]:hn(t[i],a,r)})},gn=(0,R.lazy)(()=>Dt(()=>import(`./Render-DQXAYUBI-IKoQtk_f.js`).then(e=>({default:e.RichTextRender})),__vite__mapDeps([11,1,5,12])));function _n(e,t){let n=(e,t=[])=>{if(!e)return[];let r=[];for(let[i,a]of Object.entries(e)){let e=[...t,i];a.type===`richtext`&&r.push({path:e,field:a}),a.type===`array`&&`arrayFields`in a&&r.push(...n(a.arrayFields,e)),a.type===`object`&&`objectFields`in a&&r.push(...n(a.objectFields,e))}return r},r=(0,R.useMemo)(()=>n(e),[e]);return(0,R.useMemo)(()=>{if(!r?.length)return{};let e=o({},t);for(let{path:t,field:n}of r)e=hn(e,t,e=>(0,z.jsx)(R.Suspense,{fallback:(0,z.jsx)(mn,{content:e}),children:(0,z.jsx)(gn,{content:e,field:n})},t.join(`.`)));return e},[r,t,e])}c();var vn=e=>(0,z.jsx)(bn,o({},e)),yn=({config:t,item:n,metadata:r})=>{let i=t.components[n.type],a=fn(t,n,n=>(0,z.jsx)(vn,e(o({},n),{config:t,metadata:r}))),s=_n(i.fields,a);return(0,z.jsx)(i.render,e(o(o({},a),s),{puck:e(o({},a.puck),{metadata:r||{}})}))},bn=(0,R.forwardRef)(function({className:e,style:t,content:n,config:r,metadata:i,as:a},o){return(0,z.jsx)(a??`div`,{className:e,style:t,ref:o,children:n.map(e=>r.components[e.type]?(0,z.jsx)(yn,{config:r,item:e,metadata:i},e.props.id):null)})}),xn=e=>Symbol.iterator in e,Sn=e=>`entries`in e,Cn=(e,t)=>{let n=e instanceof Map?e:new Map(e.entries()),r=t instanceof Map?t:new Map(t.entries());if(n.size!==r.size)return!1;for(let[e,t]of n)if(!r.has(e)||!Object.is(t,r.get(e)))return!1;return!0},wn=(e,t)=>{let n=e[Symbol.iterator](),r=t[Symbol.iterator](),i=n.next(),a=r.next();for(;!i.done&&!a.done;){if(!Object.is(i.value,a.value))return!1;i=n.next(),a=r.next()}return!!i.done&&!!a.done};function Tn(e,t){return Object.is(e,t)?!0:typeof e!=`object`||!e||typeof t!=`object`||!t||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)?!1:xn(e)&&xn(t)?Sn(e)&&Sn(t)?Cn(e,t):wn(e,t):Cn({entries:()=>Object.entries(e)},{entries:()=>Object.entries(t)})}function En(e){let t=R.useRef(void 0);return n=>{let r=e(n);return Tn(t.current,r)?t.current:t.current=r}}var Dn=Symbol.for(`preact-signals`);function On(){if(Nn>1)Nn--;else{var e,t=!1;for((function(){var e=Ln;for(Ln=void 0;e!==void 0;){var t=e.S;if(t.v===e.v)for(var n=t.t;n!==void 0;n=n.x)n.i===e.i&&(n.i=t.i);e=e.o}})();Mn!==void 0;){var n=Mn;for(Mn=void 0,Pn++;n!==void 0;){var r=n.u;if(n.u=void 0,n.f&=-3,!(8&n.f)&&Hn(n))try{n.c()}catch(n){t||=(e=n,!0)}n=r}}if(Pn=0,Nn--,t)throw e}}function kn(e){if(Nn>0)return e();In=++Fn,Nn++;try{return e()}finally{On()}}var An,jn=void 0;function V(e){var t=jn,n=An;jn=void 0,An=void 0;try{return e()}finally{jn=t,An=n}}var Mn=void 0,Nn=0,Pn=0,Fn=0,In=0,Ln=void 0,Rn=0;function zn(e){if(jn!==void 0){var t=e.n;if(t===void 0||t.t!==jn)return t={i:0,S:e,p:jn.s,n:void 0,t:jn,e:void 0,x:void 0,r:t},jn.s!==void 0&&(jn.s.n=t),jn.s=t,e.n=t,32&jn.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=jn.s,t.n=void 0,jn.s.n=t,jn.s=t),t}}function Bn(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=t?.watched,this.Z=t?.unwatched,this.name=t?.name}Bn.prototype.brand=Dn,Bn.prototype.h=function(){return!0},Bn.prototype.S=function(e){var t=this,n=this.t;n!==e&&e.e===void 0&&(e.x=n,this.t=e,n===void 0?V(function(){var e;(e=t.W)==null||e.call(t)}):n.e=e)},Bn.prototype.U=function(e){var t=this;if(this.t!==void 0){var n=e.e,r=e.x;n!==void 0&&(n.x=r,e.e=void 0),r!==void 0&&(r.e=n,e.x=void 0),e===this.t&&(this.t=r,r===void 0&&V(function(){var e;(e=t.Z)==null||e.call(t)}))}},Bn.prototype.subscribe=function(e){var t=this;return Zn(function(){var n=t.value;V(function(){return e(n)})},{name:`sub`})},Bn.prototype.valueOf=function(){return this.value},Bn.prototype.toString=function(){return this.value+``},Bn.prototype.toJSON=function(){return this.value},Bn.prototype.peek=function(){var e=this;return V(function(){return e.value})},Object.defineProperty(Bn.prototype,"value",{get:function(){var e=zn(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(Pn>100)throw Error(`Cycle detected`);(function(e){Nn!==0&&Pn===0&&e.l!==In&&(e.l=In,Ln={S:e,v:e.v,i:e.i,o:Ln})})(this),this.v=e,this.i++,Rn++,Nn++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{On()}}}});function Vn(e,t){return new Bn(e,t)}function Hn(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function Un(e){for(var t=e.s;t!==void 0;t=t.n){var n=t.S.n;if(n!==void 0&&(t.r=n),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function Wn(e){for(var t=e.s,n=void 0;t!==void 0;){var r=t.p;t.i===-1?(t.S.U(t),r!==void 0&&(r.n=t.n),t.n!==void 0&&(t.n.p=r)):n=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=r}e.s=n}function Gn(e,t){Bn.call(this,void 0,t),this.x=e,this.s=void 0,this.g=Rn-1,this.f=4}Gn.prototype=new Bn,Gn.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Rn))return!0;if(this.g=Rn,this.f|=1,this.i>0&&!Hn(this))return this.f&=-2,!0;var e=jn;try{Un(this),jn=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(e){this.v=e,this.f|=16,this.i++}return jn=e,Wn(this),this.f&=-2,!0},Gn.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}Bn.prototype.S.call(this,e)},Gn.prototype.U=function(e){if(this.t!==void 0&&(Bn.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}},Gn.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}},Object.defineProperty(Gn.prototype,"value",{get:function(){if(1&this.f)throw Error(`Cycle detected`);var e=zn(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function Kn(e,t){return new Gn(e,t)}function qn(e){var t=e.m;if(e.m=void 0,typeof t==`function`){Nn++;var n=jn;jn=void 0;try{t()}catch(t){throw e.f&=-2,e.f|=8,Jn(e),t}finally{jn=n,On()}}}function Jn(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,qn(e)}function Yn(e){if(jn!==this)throw Error(`Out-of-order effect`);Wn(this),jn=e,this.f&=-2,8&this.f&&Jn(this),On()}function Xn(e,t){this.x=e,this.m=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=t?.name,An&&An.push(this)}Xn.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t==`function`&&(this.m=t)}finally{e()}},Xn.prototype.S=function(){if(1&this.f)throw Error(`Cycle detected`);this.f|=1,this.f&=-9,qn(this),Un(this),Nn++;var e=jn;return jn=this,Yn.bind(this,e)},Xn.prototype.N=function(){2&this.f||(this.f|=2,this.u=Mn,Mn=this)},Xn.prototype.d=function(){this.f|=8,1&this.f||Jn(this)},Xn.prototype.dispose=function(){this.d()};function Zn(e,t){var n=new Xn(e,t);try{n.c()}catch(e){throw n.d(),e}var r=n.d.bind(n);return r[Symbol.dispose]=r,r}var Qn=Object.create,$n=Object.defineProperty,er=Object.defineProperties,tr=Object.getOwnPropertyDescriptor,nr=Object.getOwnPropertyDescriptors,rr=Object.getOwnPropertySymbols,ir=Object.prototype.hasOwnProperty,ar=Object.prototype.propertyIsEnumerable,or=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),sr=e=>{throw TypeError(e)},cr=(e,t,n)=>t in e?$n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,lr=(e,t)=>{for(var n in t||={})ir.call(t,n)&&cr(e,n,t[n]);if(rr)for(var n of rr(t))ar.call(t,n)&&cr(e,n,t[n]);return e},ur=(e,t)=>er(e,nr(t)),dr=(e,t)=>$n(e,`name`,{value:t,configurable:!0}),fr=e=>[,,,Qn(e?.[or(`metadata`)]??null)],pr=[`class`,`method`,`getter`,`setter`,`accessor`,`field`,`value`,`get`,`set`],mr=e=>e!==void 0&&typeof e!=`function`?sr(`Function expected`):e,hr=(e,t,n,r,i)=>({kind:pr[e],name:t,metadata:r,addInitializer:e=>n._?sr(`Already initialized`):i.push(mr(e||null))}),gr=(e,t)=>cr(t,or(`metadata`),e[3]),_r=(e,t,n,r)=>{for(var i=0,a=e[t>>1],o=a&&a.length;i<o;i++)t&1?a[i].call(n):r=a[i].call(n,r);return r},vr=(e,t,n,r,i,a)=>{var o,s,c,l,u,d=t&7,f=!!(t&8),p=!!(t&16),m=d>3?e.length+1:d?f?1:2:0,h=pr[d+5],g=d>3&&(e[m-1]=[]),_=e[m]||(e[m]=[]),v=d&&(!p&&!f&&(i=i.prototype),d<5&&(d>3||!p)&&tr(d<4?i:{get[n](){return xr(this,a)},set[n](e){return Cr(this,a,e)}},n));d?p&&d<4&&dr(a,(d>2?`set `:d>1?`get `:``)+n):dr(i,n);for(var y=r.length-1;y>=0;y--)l=hr(d,n,c={},e[3],_),d&&(l.static=f,l.private=p,u=l.access={has:p?e=>br(i,e):e=>n in e},d^3&&(u.get=p?e=>(d^1?xr:wr)(e,i,d^4?a:v.get):e=>e[n]),d>2&&(u.set=p?(e,t)=>Cr(e,i,t,d^4?a:v.set):(e,t)=>e[n]=t)),s=(0,r[y])(d?d<4?p?a:v[h]:d>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,d^4||s===void 0?mr(s)&&(d>4?g.unshift(s):d?p?a=s:v[h]=s:i=s):typeof s!=`object`||!s?sr(`Object expected`):(mr(o=s.get)&&(v.get=o),mr(o=s.set)&&(v.set=o),mr(o=s.init)&&g.unshift(o));return d||gr(e,i),v&&$n(i,n,v),p?d^4?a:v:i},yr=(e,t,n)=>t.has(e)||sr(`Cannot `+n),br=(e,t)=>Object(t)===t?e.has(t):sr(`Cannot use the "in" operator on this value`),xr=(e,t,n)=>(yr(e,t,`read from private field`),n?n.call(e):t.get(e)),Sr=(e,t,n)=>t.has(e)?sr(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Cr=(e,t,n,r)=>(yr(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),wr=(e,t,n)=>(yr(e,t,`access private method`),n);function Tr(e,t){if(t){let n;return Kn(()=>{let r=e();return r&&n&&t(n,r)?n:(n=r,r)})}return Kn(e)}function Er(e,t){if(Object.is(e,t))return!0;if(e===null||t===null)return!1;if(typeof e==`function`&&typeof t==`function`)return e===t;if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}if(Array.isArray(e))return!Array.isArray(t)||e.length!==t.length?!1:!e.some((e,n)=>!Er(e,t[n]));if(typeof e==`object`&&typeof t==`object`){let n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&!n.some(n=>!Er(e[n],t[n]))}return!1}function H({get:e},t){return{init(e){return Vn(e)},get(){return e.call(this).value},set(t){let n=e.call(this);n.peek()!==t&&(n.value=t)}}}function Dr(e,t){let n=new WeakMap;return function(){let t=n.get(this);return t||(t=Tr(e.bind(this)),n.set(this,t)),t.value}}function Or(e=!0){return function(t,n){n.addInitializer(function(){let t=n.kind===`field`||n.static?this:Object.getPrototypeOf(this),r=Object.getOwnPropertyDescriptor(t,n.name);r&&Object.defineProperty(t,n.name,ur(lr({},r),{enumerable:e}))})}}function kr(...e){let t=e.map(e=>Zn(e));return()=>t.forEach(e=>e())}var Ar,jr,Mr,Nr,Pr,Fr=[H],Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr;Pr=[H],Nr=[H],Mr=[Or()],jr=[Or()],Ar=[Or()];var Xr=class{constructor(e,t=Object.is){this.defaultValue=e,this.equals=t,_r(Ir,5,this),Sr(this,Vr),Sr(this,Lr,_r(Ir,8,this)),_r(Ir,11,this),Sr(this,Hr,_r(Ir,12,this)),_r(Ir,15,this),Sr(this,Kr,_r(Ir,16,this)),_r(Ir,19,this),this.reset=this.reset.bind(this),this.reset()}get current(){return xr(this,Vr,Jr)}get initial(){return xr(this,Vr,zr)}get previous(){return xr(this,Vr,Wr)}set current(e){let t=V(()=>xr(this,Vr,Jr));e&&t&&this.equals(t,e)||kn(()=>{xr(this,Vr,zr)||Cr(this,Vr,e,Br),Cr(this,Vr,t,Gr),Cr(this,Vr,e,Yr)})}reset(e=this.defaultValue){kn(()=>{Cr(this,Vr,void 0,Gr),Cr(this,Vr,e,Br),Cr(this,Vr,e,Yr)})}};Ir=fr(null),Lr=new WeakMap,Vr=new WeakSet,Hr=new WeakMap,Kr=new WeakMap,Rr=vr(Ir,20,`#initial`,Fr,Vr,Lr),zr=Rr.get,Br=Rr.set,Ur=vr(Ir,20,`#previous`,Pr,Vr,Hr),Wr=Ur.get,Gr=Ur.set,qr=vr(Ir,20,`#current`,Nr,Vr,Kr),Jr=qr.get,Yr=qr.set,vr(Ir,2,`current`,Mr,Xr),vr(Ir,2,`initial`,jr,Xr),vr(Ir,2,`previous`,Ar,Xr),gr(Ir,Xr);function Zr(e){return V(()=>{let t={};for(let n in e)t[n]=e[n];return t})}var Qr,$r=class{constructor(){Sr(this,Qr,new WeakMap)}get(e,t){return e?xr(this,Qr).get(e)?.get(t):void 0}set(e,t,n){if(e)return xr(this,Qr).has(e)||xr(this,Qr).set(e,new Map),xr(this,Qr).get(e)?.set(t,n)}clear(e){return e?xr(this,Qr).get(e)?.clear():void 0}};Qr=new WeakMap;var ei=Object.create,ti=Object.defineProperty,ni=Object.getOwnPropertyDescriptor,ri=Object.getOwnPropertySymbols,ii=Object.prototype.hasOwnProperty,ai=Object.prototype.propertyIsEnumerable,oi=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),si=e=>{throw TypeError(e)},ci=Math.pow,li=(e,t,n)=>t in e?ti(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ui=(e,t)=>{for(var n in t||={})ii.call(t,n)&&li(e,n,t[n]);if(ri)for(var n of ri(t))ai.call(t,n)&&li(e,n,t[n]);return e},di=(e,t)=>ti(e,`name`,{value:t,configurable:!0}),fi=e=>[,,,ei(e?.[oi(`metadata`)]??null)],pi=[`class`,`method`,`getter`,`setter`,`accessor`,`field`,`value`,`get`,`set`],mi=e=>e!==void 0&&typeof e!=`function`?si(`Function expected`):e,hi=(e,t,n,r,i)=>({kind:pi[e],name:t,metadata:r,addInitializer:e=>n._?si(`Already initialized`):i.push(mi(e||null))}),gi=(e,t)=>li(t,oi(`metadata`),e[3]),_i=(e,t,n,r)=>{for(var i=0,a=e[t>>1],o=a&&a.length;i<o;i++)t&1?a[i].call(n):r=a[i].call(n,r);return r},vi=(e,t,n,r,i,a)=>{var o,s,c,l,u,d=t&7,f=!!(t&8),p=!!(t&16),m=d>3?e.length+1:d?f?1:2:0,h=pi[d+5],g=d>3&&(e[m-1]=[]),_=e[m]||(e[m]=[]),v=d&&(!p&&!f&&(i=i.prototype),d<5&&(d>3||!p)&&ni(d<4?i:{get[n](){return xi(this,a)},set[n](e){return Ci(this,a,e)}},n));d?p&&d<4&&di(a,(d>2?`set `:d>1?`get `:``)+n):di(i,n);for(var y=r.length-1;y>=0;y--)l=hi(d,n,c={},e[3],_),d&&(l.static=f,l.private=p,u=l.access={has:p?e=>bi(i,e):e=>n in e},d^3&&(u.get=p?e=>(d^1?xi:wi)(e,i,d^4?a:v.get):e=>e[n]),d>2&&(u.set=p?(e,t)=>Ci(e,i,t,d^4?a:v.set):(e,t)=>e[n]=t)),s=(0,r[y])(d?d<4?p?a:v[h]:d>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,d^4||s===void 0?mi(s)&&(d>4?g.unshift(s):d?p?a=s:v[h]=s:i=s):typeof s!=`object`||!s?si(`Object expected`):(mi(o=s.get)&&(v.get=o),mi(o=s.set)&&(v.set=o),mi(o=s.init)&&g.unshift(o));return d||gi(e,i),v&&ti(i,n,v),p?d^4?a:v:i},yi=(e,t,n)=>t.has(e)||si(`Cannot `+n),bi=(e,t)=>Object(t)===t?e.has(t):si(`Cannot use the "in" operator on this value`),xi=(e,t,n)=>(yi(e,t,`read from private field`),n?n.call(e):t.get(e)),Si=(e,t,n)=>t.has(e)?si(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Ci=(e,t,n,r)=>(yi(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),wi=(e,t,n)=>(yi(e,t,`access private method`),n),Ti=class e{constructor(e,t){this.x=e,this.y=t}static delta(t,n){return new e(t.x-n.x,t.y-n.y)}static distance(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}static equals(e,t){return e.x===t.x&&e.y===t.y}static from({x:t,y:n}){return new e(t,n)}},Ei=class e{constructor(e,t,n,r){this.left=e,this.top=t,this.width=n,this.height=r,this.scale={x:1,y:1}}get inverseScale(){return{x:1/this.scale.x,y:1/this.scale.y}}translate(t,n){let{top:r,left:i,width:a,height:o,scale:s}=this,c=new e(i+t,r+n,a,o);return c.scale=ui({},s),c}get boundingRectangle(){let{width:e,height:t,left:n,top:r,right:i,bottom:a}=this;return{width:e,height:t,left:n,top:r,right:i,bottom:a}}get center(){let{left:e,top:t,right:n,bottom:r}=this;return new Ti((e+n)/2,(t+r)/2)}get area(){let{width:e,height:t}=this;return e*t}equals(t){if(!(t instanceof e))return!1;let{left:n,top:r,width:i,height:a}=this;return n===t.left&&r===t.top&&i===t.width&&a===t.height}containsPoint(e){let{top:t,left:n,bottom:r,right:i}=this;return t<=e.y&&e.y<=r&&n<=e.x&&e.x<=i}intersectionArea(t){return t instanceof e?Di(this,t):0}intersectionRatio(e){let{area:t}=this,n=this.intersectionArea(e);return n/(e.area+t-n)}get bottom(){let{top:e,height:t}=this;return e+t}get right(){let{left:e,width:t}=this;return e+t}get aspectRatio(){let{width:e,height:t}=this;return e/t}get corners(){return[{x:this.left,y:this.top},{x:this.right,y:this.top},{x:this.left,y:this.bottom},{x:this.right,y:this.bottom}]}static from({top:t,left:n,width:r,height:i}){return new e(n,t,r,i)}static delta(e,t,n={x:`center`,y:`center`}){let r=(e,t)=>{let r=n[t],i=t===`x`?e.left:e.top,a=t===`x`?e.width:e.height;return r==`start`?i:r==`end`?i+a:i+a/2};return Ti.delta({x:r(e,`x`),y:r(e,`y`)},{x:r(t,`x`),y:r(t,`y`)})}static intersectionRatio(t,n){return e.from(t).intersectionRatio(e.from(n))}};function Di(e,t){let n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),a=Math.min(t.top+t.height,e.top+e.height),o=i-r,s=a-n;return r<i&&n<a?o*s:0}var Oi,ki,Ai,ji,Mi,Ni=class extends (Ai=Xr,ki=[Dr],Oi=[Dr],Ai){constructor(e){let t=Ti.from(e);super(t,(e,t)=>Ti.equals(e,t)),_i(Mi,5,this),Si(this,ji,0),this.velocity={x:0,y:0}}get delta(){return Ti.delta(this.current,this.initial)}get direction(){let{current:e,previous:t}=this;if(!t)return null;let n={x:e.x-t.x,y:e.y-t.y};return!n.x&&!n.y?null:Math.abs(n.x)>Math.abs(n.y)?n.x>0?`right`:`left`:n.y>0?`down`:`up`}get current(){return super.current}set current(e){let{current:t}=this,n=Ti.from(e),r={x:n.x-t.x,y:n.y-t.y},i=Date.now(),a=i-xi(this,ji),o=e=>Math.round(e/a*100);kn(()=>{Ci(this,ji,i),this.velocity={x:o(r.x),y:o(r.y)},super.current=n})}reset(e=this.defaultValue){super.reset(Ti.from(e)),this.velocity={x:0,y:0}}};Mi=fi(Ai),ji=new WeakMap,vi(Mi,2,`delta`,ki,Ni),vi(Mi,2,`direction`,Oi,Ni),gi(Mi,Ni);function Pi({x:e,y:t},n){let r=Math.abs(e),i=Math.abs(t);return typeof n==`number`?Math.sqrt(ci(r,2)+ci(i,2))>n:`x`in n&&`y`in n?r>n.x&&i>n.y:`x`in n?r>n.x:`y`in n&&i>n.y}var Fi=(e=>(e.Horizontal=`x`,e.Vertical=`y`,e))(Fi||{}),Ii=Object.values(Fi),Li=Object.create,Ri=Object.defineProperty,zi=Object.defineProperties,Bi=Object.getOwnPropertyDescriptor,Vi=Object.getOwnPropertyDescriptors,Hi=Object.getOwnPropertySymbols,Ui=Object.prototype.hasOwnProperty,Wi=Object.prototype.propertyIsEnumerable,Gi=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),Ki=e=>{throw TypeError(e)},qi=(e,t,n)=>t in e?Ri(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ji=(e,t)=>{for(var n in t||={})Ui.call(t,n)&&qi(e,n,t[n]);if(Hi)for(var n of Hi(t))Wi.call(t,n)&&qi(e,n,t[n]);return e},Yi=(e,t)=>zi(e,Vi(t)),Xi=(e,t)=>Ri(e,`name`,{value:t,configurable:!0}),Zi=(e,t)=>{var n={};for(var r in e)Ui.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Hi)for(var r of Hi(e))t.indexOf(r)<0&&Wi.call(e,r)&&(n[r]=e[r]);return n},Qi=e=>[,,,Li(e?.[Gi(`metadata`)]??null)],$i=[`class`,`method`,`getter`,`setter`,`accessor`,`field`,`value`,`get`,`set`],ea=e=>e!==void 0&&typeof e!=`function`?Ki(`Function expected`):e,ta=(e,t,n,r,i)=>({kind:$i[e],name:t,metadata:r,addInitializer:e=>n._?Ki(`Already initialized`):i.push(ea(e||null))}),U=(e,t)=>qi(t,Gi(`metadata`),e[3]),W=(e,t,n,r)=>{for(var i=0,a=e[t>>1],o=a&&a.length;i<o;i++)t&1?a[i].call(n):r=a[i].call(n,r);return r},G=(e,t,n,r,i,a)=>{var o,s,c,l,u,d=t&7,f=!!(t&8),p=!!(t&16),m=d>3?e.length+1:d?f?1:2:0,h=$i[d+5],g=d>3&&(e[m-1]=[]),_=e[m]||(e[m]=[]),v=d&&(!p&&!f&&(i=i.prototype),d<5&&(d>3||!p)&&Bi(d<4?i:{get[n](){return ia(this,a)},set[n](e){return aa(this,a,e)}},n));d?p&&d<4&&Xi(a,(d>2?`set `:d>1?`get `:``)+n):Xi(i,n);for(var y=r.length-1;y>=0;y--)l=ta(d,n,c={},e[3],_),d&&(l.static=f,l.private=p,u=l.access={has:p?e=>ra(i,e):e=>n in e},d^3&&(u.get=p?e=>(d^1?ia:oa)(e,i,d^4?a:v.get):e=>e[n]),d>2&&(u.set=p?(e,t)=>aa(e,i,t,d^4?a:v.set):(e,t)=>e[n]=t)),s=(0,r[y])(d?d<4?p?a:v[h]:d>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,d^4||s===void 0?ea(s)&&(d>4?g.unshift(s):d?p?a=s:v[h]=s:i=s):typeof s!=`object`||!s?Ki(`Object expected`):(ea(o=s.get)&&(v.get=o),ea(o=s.set)&&(v.set=o),ea(o=s.init)&&g.unshift(o));return d||U(e,i),v&&Ri(i,n,v),p?d^4?a:v:i},na=(e,t,n)=>t.has(e)||Ki(`Cannot `+n),ra=(e,t)=>Object(t)===t?e.has(t):Ki(`Cannot use the "in" operator on this value`),ia=(e,t,n)=>(na(e,t,`read from private field`),n?n.call(e):t.get(e)),K=(e,t,n)=>t.has(e)?Ki(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),aa=(e,t,n,r)=>(na(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),oa=(e,t,n)=>(na(e,t,`access private method`),n);function sa(e,t){return{plugin:e,options:t}}function ca(e){return t=>sa(e,t)}function la(e){return typeof e==`function`?{plugin:e,options:void 0}:e}var ua=[H],da,fa,pa,ma=class{constructor(e,t){this.manager=e,this.options=t,K(this,fa,W(da,8,this,!1)),W(da,11,this),K(this,pa,new Set)}enable(){this.disabled=!1}disable(){this.disabled=!0}isDisabled(){return V(()=>this.disabled)}configure(e){this.options=e}registerEffect(e){let t=Zn(e.bind(this));return ia(this,pa).add(t),t}destroy(){ia(this,pa).forEach(e=>e())}static configure(e){return sa(this,e)}};da=Qi(null),fa=new WeakMap,pa=new WeakMap,G(da,4,`disabled`,ua,ma,fa),U(da,ma);var ha=class extends ma{},ga,_a=class{constructor(e){this.manager=e,this.instances=new Map,K(this,ga,[])}get values(){return Array.from(this.instances.values())}set values(e){let t=e.map(la).reduce((e,t)=>{let n=e.find(({plugin:e})=>e===t.plugin);return n?(n.options=t.options,e):[...e,t]},[]),n=t.map(({plugin:e})=>e);for(let e of ia(this,ga))if(!n.includes(e)){if(e.prototype instanceof ha)continue;this.unregister(e)}for(let{plugin:e,options:n}of t)this.register(e,n);aa(this,ga,n)}get(e){return this.instances.get(e)}register(e,t){let n=this.instances.get(e);if(n)return n.options!==t&&(n.options=t),n;let r=new e(this.manager,t);return this.instances.set(e,r),r}unregister(e){let t=this.instances.get(e);t&&(t.destroy(),this.instances.delete(e))}destroy(){for(let e of this.instances.values())e.destroy();this.instances.clear()}};ga=new WeakMap;function va(e,t){return e.priority===t.priority?e.type===t.type?t.value-e.value:t.type-e.type:t.priority-e.priority}var ya=[],ba,xa,Sa=class extends ma{constructor(e){super(e),K(this,ba),K(this,xa),this.computeCollisions=this.computeCollisions.bind(this),aa(this,xa,Vn(ya)),this.destroy=kr(()=>{let e=this.computeCollisions(),t=V(()=>this.manager.dragOperation.position.current);if(e!==ya){let e=ia(this,ba);if(aa(this,ba,t),e&&t.x==e.x&&t.y==e.y)return}else aa(this,ba,void 0);ia(this,xa).value=e},()=>{let{dragOperation:e}=this.manager;e.status.initialized&&this.forceUpdate()})}forceUpdate(e=!0){V(()=>{e?ia(this,xa).value=this.computeCollisions():aa(this,ba,void 0)})}computeCollisions(e,t){let{registry:n,dragOperation:r}=this.manager,{source:i,shape:a,status:o}=r;if(!o.initialized||!a)return ya;let s=[],c=[];for(let a of e??n.droppables){if(a.disabled||i&&!a.accepts(i))continue;let e=t??a.collisionDetector;if(!e)continue;c.push(a),a.shape;let n=V(()=>e({droppable:a,dragOperation:r}));n&&(a.collisionPriority!=null&&(n.priority=a.collisionPriority),s.push(n))}return c.length===0?ya:(s.sort(va),s)}get collisions(){return ia(this,xa).value}};ba=new WeakMap,xa=new WeakMap;var Ca,wa,Ta=[H],Ea,Da,Oa,ka,Aa,ja,Ma;wa=[H],Ca=[H];var Na=class e{constructor(e,t){K(this,ka,W(Oa,8,this)),W(Oa,11,this),K(this,Aa),K(this,ja,W(Oa,12,this)),W(Oa,15,this),K(this,Ma,W(Oa,16,this)),W(Oa,19,this);let{effects:n,id:r,data:i={},disabled:a=!1,register:o=!0}=e,s=r;aa(this,Aa,Vn(r)),this.manager=t,this.data=i,this.disabled=a,this.effects=()=>[()=>{let{id:e,manager:t}=this;if(e!==s)return s=e,t?.registry.register(this),()=>t?.registry.unregister(this)},...n?.()??[]],this.register=this.register.bind(this),this.unregister=this.unregister.bind(this),this.destroy=this.destroy.bind(this),t&&o&&queueMicrotask(this.register)}get id(){let t=ia(this,Aa).value;return e.pendingIdChanges?.get(this)??t}set id(t){t!==(e.pendingIdChanges?.get(this)??ia(this,Aa).peek())&&(e.pendingIdChanges||(e.pendingIdChanges=new Map,queueMicrotask(()=>{var t;return oa(t=e,Ea,Da).call(t)})),e.pendingIdChanges.set(this,t))}register(){return this.manager?.registry.register(this)}unregister(){var e;(e=this.manager)==null||e.registry.unregister(this)}destroy(){var e;(e=this.manager)==null||e.registry.unregister(this)}};Oa=Qi(null),Ea=new WeakSet,Da=function(){let e=Na.pendingIdChanges;Na.pendingIdChanges=null,e&&kn(()=>{for(let[t,n]of e)ia(t,Aa).value=n})},ka=new WeakMap,Aa=new WeakMap,ja=new WeakMap,Ma=new WeakMap,G(Oa,4,`manager`,Ta,Na,ka),G(Oa,4,`data`,wa,Na,ja),G(Oa,4,`disabled`,Ca,Na,Ma),K(Na,Ea),U(Oa,Na),Na.pendingIdChanges=null;var Pa=Na,Fa=class{constructor(){this.map=Vn(new Map),this.cleanupFunctions=new WeakMap,this.register=(e,t)=>{let n=this.map.peek(),r=n.get(e),i=()=>this.unregister(e,t);if(r===t)return i;r&&r.id===e&&(this.cleanupFunctions.get(r)?.(),this.cleanupFunctions.delete(r));let a=new Map(n);for(let[r,i]of n)if(i===t&&r!==e){a.delete(r);break}a.set(e,t),this.map.value=a;let o=kr(...t.effects());return this.cleanupFunctions.set(t,o),i},this.unregister=(e,t)=>{let n=this.map.peek();if(n.get(e)!==t)return;this.cleanupFunctions.get(t)?.(),this.cleanupFunctions.delete(t);let r=new Map(n);r.delete(e),this.map.value=r}}[Symbol.iterator](){return this.map.peek().values()}get value(){return this.map.value.values()}has(e){return this.map.value.has(e)}get(e){return this.map.value.get(e)}destroy(){for(let e of this)this.cleanupFunctions.get(e)?.(),e.destroy();this.map.value=new Map}},Ia,La,Ra,za,Ba,Va,Ha,Ua,Wa,Ga,Ka,qa=class extends (Ha=Pa,Va=[H],Ba=[H],za=[H],Ra=[Dr],La=[Dr],Ia=[Dr],Ha){constructor(e,t){var n=e,{modifiers:r,type:i,sensors:a,plugins:o,effects:s}=n,c=Zi(n,[`modifiers`,`type`,`sensors`,`plugins`,`effects`]);super(Yi(Ji({},c),{effects:()=>[...s?.()??[],()=>{let{manager:e,plugins:t}=this;if(e&&t)for(let n of t){let{plugin:t}=la(n);e.registry.plugins.register(t)}}]}),t),W(Ua,5,this),K(this,Wa,W(Ua,8,this)),W(Ua,11,this),K(this,Ga,W(Ua,12,this)),W(Ua,15,this),K(this,Ka,W(Ua,16,this,this.isDragSource?`dragging`:`idle`)),W(Ua,19,this),this.type=i,this.sensors=a,this.modifiers=r,this.alignment=c.alignment,this.plugins=o}pluginConfig(e){if(this.plugins)for(let t of this.plugins){let n=la(t);if(n.plugin===e)return n.options}}get isDropping(){return this.status===`dropping`&&this.isDragSource}get isDragging(){return this.status===`dragging`&&this.isDragSource}get isDragSource(){return this.manager?.dragOperation.source?.id===this.id}};Ua=Qi(Ha),Wa=new WeakMap,Ga=new WeakMap,Ka=new WeakMap,G(Ua,4,`type`,Va,qa,Wa),G(Ua,4,`modifiers`,Ba,qa,Ga),G(Ua,4,`status`,za,qa,Ka),G(Ua,2,`isDropping`,Ra,qa),G(Ua,2,`isDragging`,La,qa),G(Ua,2,`isDragSource`,Ia,qa),U(Ua,qa);var Ja,Ya,Xa,Za,Qa,$a,eo,to,no,ro,io,ao,oo,so=class extends (eo=Pa,$a=[H],Qa=[H],Za=[H],Xa=[H],Ya=[H],Ja=[Dr],eo){constructor(e,t){var n=e,{accept:r,collisionDetector:i,collisionPriority:a,type:o}=n,s=Zi(n,[`accept`,`collisionDetector`,`collisionPriority`,`type`]);super(s,t),W(to,5,this),K(this,no,W(to,8,this)),W(to,11,this),K(this,ro,W(to,12,this)),W(to,15,this),K(this,io,W(to,16,this)),W(to,19,this),K(this,ao,W(to,20,this)),W(to,23,this),K(this,oo,W(to,24,this)),W(to,27,this),this.accept=r,this.collisionDetector=i,this.collisionPriority=a,this.type=o}accepts(e){let{accept:t}=this;return t?typeof t==`function`?t(e):e.type?Array.isArray(t)?t.includes(e.type):e.type===t:!1:!0}get isDropTarget(){return this.manager?.dragOperation.target?.id===this.id}};to=Qi(eo),no=new WeakMap,ro=new WeakMap,io=new WeakMap,ao=new WeakMap,oo=new WeakMap,G(to,4,`accept`,$a,so,no),G(to,4,`type`,Qa,so,ro),G(to,4,`collisionDetector`,Za,so,io),G(to,4,`collisionPriority`,Xa,so,ao),G(to,4,`shape`,Ya,so,oo),G(to,2,`isDropTarget`,Ja,so),U(to,so);var co=class{constructor(){this.registry=new Map}addEventListener(e,t){let{registry:n}=this,r=new Set(n.get(e));return r.add(t),n.set(e,r),()=>this.removeEventListener(e,t)}removeEventListener(e,t){let{registry:n}=this,r=new Set(n.get(e));r.delete(t),n.set(e,r)}dispatch(e,...t){let{registry:n}=this,r=n.get(e);if(r)for(let e of r)e(...t)}},lo=class extends co{constructor(e){super(),this.manager=e}dispatch(e,t){let n=[t,this.manager];super.dispatch(e,...n)}};function uo(e,t=!0){let n=!1;return Yi(Ji({},e),{cancelable:t,get defaultPrevented(){return n},preventDefault(){t&&(n=!0)}})}var fo=class extends ha{constructor(e){super(e);let t=(e,t)=>e.map(({id:e})=>e).join(``)===t.map(({id:e})=>e).join(``),n=[];this.destroy=kr(()=>{let{dragOperation:t,collisionObserver:r}=e;t.status.initializing&&(n=[],r.enable())},()=>{let{collisionObserver:r,monitor:i}=e,{collisions:a}=r;if(r.isDisabled()||Pa.pendingIdChanges)return;let o=uo({collisions:a});if(i.dispatch(`collision`,o),o.defaultPrevented||t(a,n))return;n=a;let[s]=a;V(()=>{s?.id!==e.dragOperation.target?.id&&(r.disable(),e.actions.setDropTarget(s?.id).then(()=>{r.enable()}))})})}},po=(e=>(e[e.Lowest=0]=`Lowest`,e[e.Low=1]=`Low`,e[e.Normal=2]=`Normal`,e[e.High=3]=`High`,e[e.Highest=4]=`Highest`,e))(po||{}),mo=(e=>(e[e.Collision=0]=`Collision`,e[e.ShapeIntersection=1]=`ShapeIntersection`,e[e.PointerIntersection=2]=`PointerIntersection`,e))(mo||{}),ho,go,_o,vo,yo,bo,xo=[H],So,Co;bo=[Dr],yo=[Dr],vo=[Dr],_o=[Dr],go=[Dr],ho=[Dr];var wo=class{constructor(){W(So,5,this),K(this,Co,W(So,8,this,`idle`)),W(So,11,this)}get current(){return this.value}get idle(){return this.value===`idle`}get initializing(){return this.value===`initializing`}get initialized(){let{value:e}=this;return e!==`idle`&&e!==`initialization-pending`}get dragging(){return this.value===`dragging`}get dropped(){return this.value===`dropped`}set(e){this.value=e}};So=Qi(null),Co=new WeakMap,G(So,4,`value`,xo,wo,Co),G(So,2,`current`,bo,wo),G(So,2,`idle`,yo,wo),G(So,2,`initializing`,vo,wo),G(So,2,`initialized`,_o,wo),G(So,2,`dragging`,go,wo),G(So,2,`dropped`,ho,wo),U(So,wo);var To=class{constructor(e){this.manager=e}setDragSource(e){let{dragOperation:t}=this.manager;t.sourceIdentifier=typeof e==`string`||typeof e==`number`?e:e.id}setDropTarget(e){return V(()=>{let{dragOperation:t}=this.manager,n=e??null;if(t.targetIdentifier===n)return Promise.resolve(!1);t.targetIdentifier=n;let r=uo({operation:t.snapshot()});return t.status.dragging&&this.manager.monitor.dispatch(`dragover`,r),this.manager.renderer.rendering.then(()=>r.defaultPrevented)})}start(e){return V(()=>{let{dragOperation:t}=this.manager;if(e.source!=null&&this.setDragSource(e.source),!t.source)throw Error(`Cannot start a drag operation without a drag source`);if(!t.status.idle)throw Error(`Cannot start a drag operation while another is active`);let n=new AbortController,{event:r,coordinates:i}=e;kn(()=>{t.status.set(`initialization-pending`),t.shape=null,t.canceled=!1,t.activatorEvent=r??null,t.position.reset(i)});let a=uo({operation:t.snapshot()});return this.manager.monitor.dispatch(`beforedragstart`,a),a.defaultPrevented?(t.reset(),n.abort(),n):(t.status.set(`initializing`),t.controller=n,this.manager.renderer.rendering.then(()=>{if(n.signal.aborted)return;let{status:e}=t;e.current===`initializing`&&kn(()=>{t.status.set(`dragging`),this.manager.monitor.dispatch(`dragstart`,{nativeEvent:r,operation:t.snapshot(),cancelable:!1})})}),n)})}move(e){return V(()=>{let{dragOperation:t}=this.manager,{status:n,controller:r}=t;if(!n.dragging||!r||r.signal.aborted)return;let i=uo({nativeEvent:e.event,operation:t.snapshot(),by:e.by,to:e.to},e.cancelable??!0);(e.propagate??!0)&&this.manager.monitor.dispatch(`dragmove`,i),queueMicrotask(()=>{if(i.defaultPrevented)return;let n=e.to??{x:t.position.current.x+(e.by?.x??0),y:t.position.current.y+(e.by?.y??0)};t.position.current=n})})}stop(e={}){return V(()=>{let{dragOperation:t}=this.manager,{controller:n}=t;if(!n||n.signal.aborted)return;let r,i=()=>{let e={resume:()=>{},abort:()=>{}};return r=new Promise((t,n)=>{e.resume=t,e.abort=n}),e};n.abort();let a=()=>{this.manager.renderer.rendering.then(()=>{t.status.set(`dropped`);let e=V(()=>t.source?.status===`dropping`),r=()=>{t.controller===n&&(t.controller=void 0),t.reset()};if(e){let{source:e}=t,n=Zn(()=>{e?.status===`idle`&&(n(),r())})}else this.manager.renderer.rendering.then(r)})};t.canceled=e.canceled??!1,this.manager.monitor.dispatch(`dragend`,{nativeEvent:e.event,operation:t.snapshot(),canceled:e.canceled??!1,suspend:i}),r?r.then(a).catch(()=>t.reset()):a()})}},Eo=class extends ma{constructor(e,t){super(e,t),this.manager=e,this.options=t}},Do=class extends AbortController{constructor(e,t){super(),this.constraints=e,this.onActivate=t,this.activated=!1;for(let t of e??[])t.controller=this}onEvent(e){if(!this.activated){if(this.constraints?.length)for(let t of this.constraints)t.onEvent(e);else this.activate(e)}}activate(e){this.activated||(this.activated=!0,this.onActivate(e))}abort(e){this.activated=!1,super.abort(e)}},Oo,ko=class{constructor(e){this.options=e,K(this,Oo)}set controller(e){aa(this,Oo,e),e.signal.addEventListener(`abort`,()=>this.abort())}activate(e){var t;(t=ia(this,Oo))==null||t.activate(e)}};Oo=new WeakMap;var Ao=class extends ma{constructor(e,t){super(e,t),this.manager=e,this.options=t}apply(e){return e.transform}},jo=class{constructor(e){this.draggables=new Fa,this.droppables=new Fa,this.plugins=new _a(e),this.sensors=new _a(e),this.modifiers=new _a(e)}register(e,t){if(e instanceof qa)return this.draggables.register(e.id,e);if(e instanceof so)return this.droppables.register(e.id,e);if(e.prototype instanceof Ao)return this.modifiers.register(e,t);if(e.prototype instanceof Eo)return this.sensors.register(e,t);if(e.prototype instanceof ma)return this.plugins.register(e,t);throw Error(`Invalid instance type`)}unregister(e){if(e instanceof Pa)return e instanceof qa?this.draggables.unregister(e.id,e):e instanceof so?this.droppables.unregister(e.id,e):()=>{};if(e.prototype instanceof Ao)return this.modifiers.unregister(e);if(e.prototype instanceof Eo)return this.sensors.unregister(e);if(e.prototype instanceof ma)return this.plugins.unregister(e);throw Error(`Invalid instance type`)}destroy(){this.draggables.destroy(),this.droppables.destroy(),this.plugins.destroy(),this.sensors.destroy(),this.modifiers.destroy()}},Mo,No,Po,Fo,Io,q,Lo,Ro,zo=[Dr],Bo,Vo,Ho,Uo,Wo,Go,Ko,qo,Jo,Yo;Ro=[H],Lo=[H],q=[H],Io=[H],Fo=[H],Po=[Dr],No=[Dr],Mo=[Dr];var Xo=class{constructor(e){W(Uo,5,this),K(this,Bo),K(this,Vo),K(this,Ho,new Xr(void 0,(e,t)=>e&&t?e.equals(t):e===t)),this.status=new wo,K(this,Wo,W(Uo,8,this,!1)),W(Uo,11,this),K(this,Go,W(Uo,12,this,null)),W(Uo,15,this),K(this,Ko,W(Uo,16,this,null)),W(Uo,19,this),K(this,qo,W(Uo,20,this,null)),W(Uo,23,this),K(this,Jo,W(Uo,24,this,[])),W(Uo,27,this),this.position=new Ni({x:0,y:0}),K(this,Yo,{x:0,y:0}),aa(this,Bo,e)}get shape(){let{current:e,initial:t,previous:n}=ia(this,Ho);return!e||!t?null:{current:e,initial:t,previous:n}}set shape(e){e?ia(this,Ho).current=e:ia(this,Ho).reset()}get source(){let e=this.sourceIdentifier;if(e==null)return null;let t=ia(this,Bo).registry.draggables.get(e);return t&&aa(this,Vo,t),t??ia(this,Vo)??null}get target(){let e=this.targetIdentifier;return e==null?null:ia(this,Bo).registry.droppables.get(e)??null}get transform(){let{x:e,y:t}=this.position.delta,n={x:e,y:t};for(let e of this.modifiers)n=e.apply(Yi(Ji({},this.snapshot()),{transform:n}));return aa(this,Yo,n),n}snapshot(){return V(()=>({source:this.source,target:this.target,activatorEvent:this.activatorEvent,transform:ia(this,Yo),shape:this.shape?Zr(this.shape):null,position:Zr(this.position),status:Zr(this.status),canceled:this.canceled}))}reset(){kn(()=>{this.status.set(`idle`),this.sourceIdentifier=null,this.targetIdentifier=null,ia(this,Ho).reset(),this.position.reset({x:0,y:0}),aa(this,Yo,{x:0,y:0}),this.modifiers=[]})}};Uo=Qi(null),Bo=new WeakMap,Vo=new WeakMap,Ho=new WeakMap,Wo=new WeakMap,Go=new WeakMap,Ko=new WeakMap,qo=new WeakMap,Jo=new WeakMap,Yo=new WeakMap,G(Uo,2,`shape`,zo,Xo),G(Uo,4,`canceled`,Ro,Xo,Wo),G(Uo,4,`activatorEvent`,Lo,Xo,Go),G(Uo,4,`sourceIdentifier`,q,Xo,Ko),G(Uo,4,`targetIdentifier`,Io,Xo,qo),G(Uo,4,`modifiers`,Fo,Xo,Jo),G(Uo,2,`source`,Po,Xo),G(Uo,2,`target`,No,Xo),G(Uo,2,`transform`,Mo,Xo),U(Uo,Xo);var Zo={get rendering(){return Promise.resolve()}};function Qo(e,t){return typeof e==`function`?e(t):e??t}var $o=class{constructor(e){this.destroy=()=>{this.dragOperation.status.idle||this.actions.stop({canceled:!0}),this.dragOperation.modifiers.forEach(e=>e.destroy()),this.registry.destroy(),this.collisionObserver.destroy()};let t=e??{},n=Qo(t.plugins,[]),r=Qo(t.sensors,[]),i=Qo(t.modifiers,[]),a=t.renderer??Zo,o=new lo(this),s=new jo(this);this.registry=s,this.monitor=o,this.renderer=a,this.actions=new To(this),this.dragOperation=new Xo(this),this.collisionObserver=new Sa(this),this.plugins=[fo,...n],this.modifiers=i,this.sensors=r;let{destroy:c}=this,l=kr(()=>{let e=V(()=>this.dragOperation.modifiers),t=this.modifiers;for(let n of e)t.includes(n)||n.destroy();this.dragOperation.modifiers=(this.dragOperation.source?.modifiers)?.map(e=>{let{plugin:t,options:n}=la(e);return new t(this,n)})??t});this.destroy=()=>{l(),c()}}get plugins(){return this.registry.plugins.values}set plugins(e){this.registry.plugins.values=e}get modifiers(){return this.registry.modifiers.values}set modifiers(e){this.registry.modifiers.values=e}get sensors(){return this.registry.sensors.values}set sensors(e){this.registry.sensors.values=e}},es=e=>{throw TypeError(e)},ts=(e,t,n)=>t.has(e)||es(`Cannot `+n),J=(e,t,n)=>(ts(e,t,`read from private field`),t.get(e)),ns=(e,t,n)=>t.has(e)?es(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),rs=(e,t,n,r)=>(ts(e,t,`write to private field`),t.set(e,n),n),is=(e,t,n)=>(ts(e,t,`access private method`),n);function as(e){return e?e instanceof KeyframeEffect||`getKeyframes`in e&&typeof e.getKeyframes==`function`:!1}function os(e,t){let n=e.getAnimations(),r=null;for(let e of n){if(e.playState!==`running`)continue;let{effect:n}=e,i=(as(n)?n.getKeyframes():[]).filter(t);i.length>0&&(r=[i[i.length-1],e])}return r}function ss(e){let{width:t,height:n,top:r,left:i,bottom:a,right:o}=e.getBoundingClientRect();return{width:t,height:n,top:r,left:i,bottom:a,right:o}}function cs(e){let t=Object.prototype.toString.call(e);return t===`[object Window]`||t===`[object global]`}function ls(e){return`nodeType`in e}function us(e){return e?cs(e)?e:ls(e)?`defaultView`in e?e.defaultView??window:e.ownerDocument?.defaultView??window:window:window}function ds(e){let{Document:t}=us(e);return e instanceof t||`nodeType`in e&&e.nodeType===Node.DOCUMENT_NODE}function fs(e){return!e||cs(e)?!1:e instanceof us(e).HTMLElement||`namespaceURI`in e&&typeof e.namespaceURI==`string`&&e.namespaceURI.endsWith(`html`)}function ps(e){return e instanceof us(e).SVGElement||`namespaceURI`in e&&typeof e.namespaceURI==`string`&&e.namespaceURI.endsWith(`svg`)}function ms(e){return e?cs(e)?e.document:ls(e)?ds(e)?e:fs(e)||ps(e)?e.ownerDocument:document:document:document}function hs(e){let{documentElement:t}=ms(e),n=us(e).visualViewport,r=n?.width??t.clientWidth,i=n?.height??t.clientHeight,a=n?.offsetTop??0,o=n?.offsetLeft??0;return{top:a,left:o,right:o+r,bottom:a+i,width:r,height:i}}function gs(e,t){if(_s(e)&&e.open===!1)return!1;let{overflow:n,overflowX:r,overflowY:i}=getComputedStyle(e);return n===`visible`&&r===`visible`&&i===`visible`}function _s(e){return e.tagName===`DETAILS`}function vs(e,t=e.getBoundingClientRect(),n=0){let r=t,{ownerDocument:i}=e,a=i.defaultView??window,o=e.parentElement;for(;o&&o!==i.documentElement;){if(!gs(o)){let e=o.getBoundingClientRect(),t=n*(e.bottom-e.top),i=n*(e.right-e.left),a=n*(e.bottom-e.top),s=n*(e.right-e.left);r={top:Math.max(r.top,e.top-t),right:Math.min(r.right,e.right+i),bottom:Math.min(r.bottom,e.bottom+a),left:Math.max(r.left,e.left-s),width:0,height:0},r.width=r.right-r.left,r.height=r.bottom-r.top}o=o.parentElement}let s=a.visualViewport,c=s?.offsetTop??0,l=s?.offsetLeft??0,u=s?.width??a.innerWidth,d=s?.height??a.innerHeight,f=n*d,p=n*u;return r={top:Math.max(r.top,c-f),right:Math.min(r.right,l+u+p),bottom:Math.min(r.bottom,c+d+f),left:Math.max(r.left,l-p),width:0,height:0},r.width=r.right-r.left,r.height=r.bottom-r.top,r.width<0&&(r.width=0),r.height<0&&(r.height=0),r}function ys(e){return{x:e.clientX,y:e.clientY}}var bs=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function xs(e=document,t=new Set){if(t.has(e))return[];t.add(e);let n=[e];for(let r of Array.from(e.querySelectorAll(`iframe, frame`)))try{let e=r.contentDocument;e&&!t.has(e)&&n.push(...xs(e,t))}catch{}try{let r=e.defaultView;if(r&&r!==window.top){let i=r.parent;i&&i.document&&i.document!==e&&n.push(...xs(i.document,t))}}catch{}return n}function Ss(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}function Cs(){let e=Ss()?window.visualViewport:null;return{x:e?.offsetLeft??0,y:e?.offsetTop??0}}function ws(e){return!e||!ls(e)?!1:e instanceof us(e).ShadowRoot}function Ts(e){if(e&&ls(e)){let t=e.getRootNode();if(ws(t)||t instanceof Document)return t}return ms(e)}function Es(e){return e.matchMedia(`(prefers-reduced-motion: reduce)`).matches}function Ds(e){let t=`input, textarea, select, canvas, [contenteditable]`,n=e.cloneNode(!0),r=Array.from(e.querySelectorAll(t));return Array.from(n.querySelectorAll(t)).forEach((e,t)=>{let n=r[t];Os(e)&&Os(n)&&(e.type!==`file`&&(e.value=n.value),e.type===`radio`&&e.name&&(e.name=`Cloned__${e.name}`)),ks(e)&&ks(n)&&n.width>0&&n.height>0&&e.getContext(`2d`)?.drawImage(n,0,0)}),n}function Os(e){return`value`in e}function ks(e){return e.tagName===`CANVAS`}function As(e,{x:t,y:n}){let r=e.elementFromPoint(t,n);if(js(r)){let{contentDocument:e}=r;if(e){let{left:i,top:a}=r.getBoundingClientRect();return As(e,{x:t-i,y:n-a})}}return r}function js(e){return e?.tagName===`IFRAME`}var Ms=new WeakMap;function Ns(e){return!!e.closest(`
      input:not([disabled]),
      select:not([disabled]),
      textarea:not([disabled]),
      button:not([disabled]),
      a[href],
      [contenteditable]:not([contenteditable="false"])
    `)}var Ps=class{constructor(){this.entries=new Set,this.clear=()=>{for(let e of this.entries){let[t,{type:n,listener:r,options:i}]=e;t.removeEventListener(n,r,i)}this.entries.clear()}}bind(e,t){let n=Array.isArray(e)?e:[e],r=Array.isArray(t)?t:[t],i=[];for(let e of n)for(let t of r){let{type:n,listener:r,options:a}=t,o=[e,t];e.addEventListener(n,r,a),this.entries.add(o),i.push(o)}let a=this.entries;return function(){for(let e of i){let[t,{type:n,listener:r,options:i}]=e;t.removeEventListener(n,r,i),a.delete(e)}}}};function Fs(e){let t=e?.ownerDocument.defaultView;if(t&&t.self!==t.parent)return t.frameElement}function Is(e){let t=new Set,n=Fs(e);for(;n;)t.add(n),n=Fs(n);return t}function Ls(e,t){let n=setTimeout(e,t);return()=>clearTimeout(n)}function Rs(e,t){let n=()=>performance.now(),r,i;return function(...a){let o=this;i?(r?.(),r=Ls(()=>{e.apply(o,a),i=n()},t-(n()-i))):(e.apply(o,a),i=n())}}function zs(e,t){return e===t?!0:!e||!t?!1:e.top==t.top&&e.left==t.left&&e.right==t.right&&e.bottom==t.bottom}function Bs(e,t=e.getBoundingClientRect()){let{width:n,height:r}=vs(e,t);return n>0&&r>0}var Vs=bs?ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},Hs,Us=class extends Vs{constructor(e){super(t=>{if(!J(this,Hs)){rs(this,Hs,!0);return}e(t,this)}),ns(this,Hs,!1)}};Hs=new WeakMap;var Ws=Array.from({length:100},(e,t)=>t/100),Gs=75,Ks,qs,Js,Ys,Xs,Zs,Qs,$s,ec,tc,nc,rc=class{constructor(e,t,n={debug:!1,skipInitial:!1}){this.element=e,this.callback=t,ns(this,ec),this.disconnect=()=>{var e,t,n;rs(this,Qs,!0),(e=J(this,Js))==null||e.disconnect(),(t=J(this,Ys))==null||t.disconnect(),J(this,Xs).disconnect(),(n=J(this,Zs))==null||n.remove()},ns(this,Ks,!0),ns(this,qs),ns(this,Js),ns(this,Ys),ns(this,Xs),ns(this,Zs),ns(this,Qs,!1),ns(this,$s,Rs(()=>{var e;let{element:t}=this;if((e=J(this,Ys))==null||e.disconnect(),J(this,Qs)||!J(this,Ks)||!t.isConnected)return;let n=t.ownerDocument??document,{innerHeight:r,innerWidth:i}=n.defaultView??window,a=t.getBoundingClientRect(),{top:o,left:s,bottom:c,right:l}=vs(t,a),u=-Math.floor(o),d=-Math.floor(s),f=`${u}px ${-Math.floor(i-l)}px ${-Math.floor(r-c)}px ${d}px`;this.boundingClientRect=a,rs(this,Ys,new IntersectionObserver(e=>{let[n]=e,{intersectionRect:r}=n;(n.intersectionRatio===1?Ei.intersectionRatio(r,vs(t)):n.intersectionRatio)!==1&&J(this,$s).call(this)},{threshold:Ws,rootMargin:f,root:n})),J(this,Ys).observe(t),is(this,ec,tc).call(this)},Gs)),this.boundingClientRect=e.getBoundingClientRect(),rs(this,Ks,Bs(e,this.boundingClientRect));let r=!0;this.callback=e=>{r&&(r=!1,n.skipInitial)||t(e)};let i=e.ownerDocument;n?.debug&&(rs(this,Zs,document.createElement(`div`)),J(this,Zs).style.background=`rgba(0,0,0,0.15)`,J(this,Zs).style.position=`fixed`,J(this,Zs).style.pointerEvents=`none`,i.body.appendChild(J(this,Zs))),rs(this,Xs,new IntersectionObserver(t=>{var n,r;let{boundingClientRect:i,isIntersecting:a}=t[t.length-1],{width:o,height:s}=i,c=J(this,Ks);rs(this,Ks,a),(o||s)&&(c&&!a?((n=J(this,Ys))==null||n.disconnect(),this.callback(null),(r=J(this,Js))==null||r.disconnect(),rs(this,Js,void 0),J(this,Zs)&&(J(this,Zs).style.visibility=`hidden`)):J(this,$s).call(this),a&&!J(this,Js)&&(rs(this,Js,new Us(J(this,$s))),J(this,Js).observe(e)))},{threshold:Ws,root:i})),J(this,Ks)&&!n.skipInitial&&this.callback(this.boundingClientRect),J(this,Xs).observe(e)}};Ks=new WeakMap,qs=new WeakMap,Js=new WeakMap,Ys=new WeakMap,Xs=new WeakMap,Zs=new WeakMap,Qs=new WeakMap,$s=new WeakMap,ec=new WeakSet,tc=function(){J(this,Qs)||(is(this,ec,nc).call(this),!zs(this.boundingClientRect,J(this,qs))&&(this.callback(this.boundingClientRect),rs(this,qs,this.boundingClientRect)))},nc=function(){if(J(this,Zs)){let{top:e,left:t,width:n,height:r}=vs(this.element);J(this,Zs).style.overflow=`hidden`,J(this,Zs).style.visibility=`visible`,J(this,Zs).style.top=`${Math.floor(e)}px`,J(this,Zs).style.left=`${Math.floor(t)}px`,J(this,Zs).style.width=`${Math.floor(n)}px`,J(this,Zs).style.height=`${Math.floor(r)}px`}};var ic=new WeakMap,ac=new WeakMap;function oc(e,t){let n=ic.get(e);return n||={disconnect:new rc(e,t=>{let n=ic.get(e);n&&n.callbacks.forEach(e=>e(t))},{skipInitial:!0}).disconnect,callbacks:new Set},n.callbacks.add(t),ic.set(e,n),()=>{n.callbacks.delete(t),n.callbacks.size===0&&(ic.delete(e),n.disconnect())}}function sc(e,t){let n=new Set;for(let r of e){let e=oc(r,t);n.add(e)}return()=>n.forEach(e=>e())}function cc(e,t){let n=e.ownerDocument;if(!ac.has(n)){let e=new AbortController,t=new Set;document.addEventListener(`scroll`,e=>t.forEach(t=>t(e)),{capture:!0,passive:!0,signal:e.signal}),ac.set(n,{disconnect:()=>e.abort(),listeners:t})}let{listeners:r,disconnect:i}=ac.get(n)??{};return!r||!i?()=>{}:(r.add(t),()=>{r.delete(t),r.size===0&&(i(),ac.delete(n))})}var lc,uc,dc,fc,pc=class{constructor(e,t,n){this.callback=t,ns(this,lc),ns(this,uc,!1),ns(this,dc),ns(this,fc,Rs(e=>{if(!J(this,uc)&&e.target&&`contains`in e.target&&typeof e.target.contains==`function`){for(let t of J(this,dc))if(e.target.contains(t)){this.callback(J(this,lc).boundingClientRect);break}}},Gs));let r=Is(e),i=sc(r,t),a=cc(e,J(this,fc));rs(this,dc,r),rs(this,lc,new rc(e,t,n)),this.disconnect=()=>{J(this,uc)||(rs(this,uc,!0),i(),a(),J(this,lc).disconnect())}}};lc=new WeakMap,uc=new WeakMap,dc=new WeakMap,fc=new WeakMap;function mc(e){return`showPopover`in e&&`hidePopover`in e&&typeof e.showPopover==`function`&&typeof e.hidePopover==`function`}function hc(e){try{mc(e)&&e.isConnected&&e.hasAttribute(`popover`)&&!e.matches(`:popover-open`)&&e.showPopover()}catch{}}function gc(e){return!bs||!e?!1:e===ms(e).scrollingElement}function _c(e){let t=us(e),n=gc(e)?hs(e):ss(e),r=t.visualViewport,i=gc(e)?{height:r?.height??t.innerHeight,width:r?.width??t.innerWidth}:{height:e.clientHeight,width:e.clientWidth},a={current:{x:e.scrollLeft,y:e.scrollTop},max:{x:e.scrollWidth-i.width,y:e.scrollHeight-i.height}};return{rect:n,position:a,isTop:a.current.y<=0,isLeft:a.current.x<=0,isBottom:a.current.y>=a.max.y,isRight:a.current.x>=a.max.x}}function vc(e,t){let{isTop:n,isBottom:r,isLeft:i,isRight:a,position:o}=_c(e),{x:s,y:c}=t??{x:0,y:0},l=!n&&o.current.y+c>0,u=!r&&o.current.y+c<o.max.y,d=!i&&o.current.x+s>0,f=!a&&o.current.x+s<o.max.x;return{top:l,bottom:u,left:d,right:f,x:d||f,y:l||u}}var yc=class{constructor(e){this.scheduler=e,this.pending=!1,this.tasks=new Set,this.resolvers=new Set,this.flush=()=>{let{tasks:e,resolvers:t}=this;this.pending=!1,this.tasks=new Set,this.resolvers=new Set;for(let t of e)t();for(let e of t)e()}}schedule(e){return this.tasks.add(e),this.pending||(this.pending=!0,this.scheduler(this.flush)),new Promise(e=>this.resolvers.add(e))}},bc=new yc(e=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()}),xc=new yc(e=>setTimeout(e,50)),Sc=new Map,Cc=Sc.clear.bind(Sc);function wc(e,t=!1){if(!t)return Tc(e);let n=Sc.get(e);return n||(n=Tc(e),Sc.set(e,n),xc.schedule(Cc),n)}function Tc(e){return us(e).getComputedStyle(e)}function Ec(e,t=wc(e,!0)){return t.position===`fixed`||t.position===`sticky`}function Dc(e,t=wc(e,!0)){let n=/(auto|scroll|overlay)/;return[`overflow`,`overflowX`,`overflowY`].some(e=>{let r=t[e];return typeof r==`string`&&n.test(r)})}var Oc={excludeElement:!0,escapeShadowDOM:!0};function kc(e,t=Oc){let{limit:n,excludeElement:r,escapeShadowDOM:i}=t,a=new Set;function o(t){if(n!=null&&a.size>=n||!t)return a;if(ds(t)&&t.scrollingElement!=null&&!a.has(t.scrollingElement))return a.add(t.scrollingElement),a;if(i&&ws(t))return o(t.host);if(!fs(t))return ps(t)?o(t.parentElement):a;if(a.has(t))return a;let s=wc(t,!0);if(r&&t===e||Dc(t,s)&&a.add(t),Ec(t,s)){let{scrollingElement:e}=t.ownerDocument;return e&&a.add(e),a}return o(t.parentNode)}return e?o(e):a}function Ac(e,t=window.frameElement){let n={x:0,y:0,scaleX:1,scaleY:1};if(!e)return n;let r=Fs(e);for(;r;){if(r===t)return n;let e=ss(r),{x:i,y:a}=jc(r,e);n.x+=e.left,n.y+=e.top,n.scaleX*=i,n.scaleY*=a,r=Fs(r)}return n}function jc(e,t=ss(e)){let n=Math.round(t.width),r=Math.round(t.height);if(fs(e))return{x:n/e.offsetWidth,y:r/e.offsetHeight};let i=wc(e,!0);return{x:(parseFloat(i.width)||n)/n,y:(parseFloat(i.height)||r)/r}}function Mc(e){if(e===`none`)return null;let t=e.split(` `),n=parseFloat(t[0]),r=parseFloat(t[1]);return isNaN(n)&&isNaN(r)?null:{x:isNaN(n)?r:n,y:isNaN(r)?n:r}}function Nc(e){if(e===`none`)return null;let[t,n,r=`0`]=e.split(` `),i={x:parseFloat(t),y:parseFloat(n),z:parseInt(r,10)};return isNaN(i.x)&&isNaN(i.y)?null:{x:isNaN(i.x)?0:i.x,y:isNaN(i.y)?0:i.y,z:isNaN(i.z)?0:i.z}}function Pc(e){let{scale:t,transform:n,translate:r}=e,i=Mc(t),a=Nc(r),o=Fc(n);if(!o&&!i&&!a)return null;let s={x:i?.x??1,y:i?.y??1},c={x:a?.x??0,y:a?.y??0},l={x:o?.x??0,y:o?.y??0,scaleX:o?.scaleX??1,scaleY:o?.scaleY??1};return{x:c.x+l.x,y:c.y+l.y,z:a?.z??0,scaleX:s.x*l.scaleX,scaleY:s.y*l.scaleY}}function Fc(e){if(e.startsWith(`matrix3d(`)){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith(`matrix(`)){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}var Ic=(e=>(e[e.Idle=0]=`Idle`,e[e.Forward=1]=`Forward`,e[e.Reverse=-1]=`Reverse`,e))(Ic||{}),Lc={x:.2,y:.2},Rc={x:10,y:10};function zc(e,t,n,r=25,i=Lc,a=Rc){let{x:o,y:s}=t,{rect:c,isTop:l,isBottom:u,isLeft:d,isRight:f}=_c(e),p=Ac(e),m=Pc(wc(e,!0)),h=m!==null&&m?.scaleX<0,g=m!==null&&m?.scaleY<0,_=new Ei(c.left*p.scaleX+p.x,c.top*p.scaleY+p.y,c.width*p.scaleX,c.height*p.scaleY),v={x:0,y:0},y={x:0,y:0},b={height:_.height*i.y,width:_.width*i.x};return b.height>0&&(!l||g&&!u)&&s<=_.top+b.height&&n?.y!==1&&o>=_.left-a.x&&o<=_.right+a.x?(v.y=g?1:-1,y.y=r*Math.abs((_.top+b.height-s)/b.height)):b.height>0&&(!u||g&&!l)&&s>=_.bottom-b.height&&n?.y!==-1&&o>=_.left-a.x&&o<=_.right+a.x&&(v.y=g?-1:1,y.y=r*Math.abs((_.bottom-b.height-s)/b.height)),b.width>0&&(!f||h&&!d)&&o>=_.right-b.width&&n?.x!==-1&&s>=_.top-a.y&&s<=_.bottom+a.y?(v.x=h?-1:1,y.x=r*Math.abs((_.right-b.width-o)/b.width)):b.width>0&&(!d||h&&!f)&&o<=_.left+b.width&&n?.x!==1&&s>=_.top-a.y&&s<=_.bottom+a.y&&(v.x=h?1:-1,y.x=r*Math.abs((_.left+b.width-o)/b.width)),{direction:v,speed:y}}function Bc(e,{block:t=`nearest`,inline:n=`nearest`}={}){if(!fs(e))return;let r=kc(e),i=[];for(let a of r){if(!fs(a))continue;let{top:r,left:o}=Hc(e,a),s=r,c=o;for(let e of i)s-=e.scrollTop,c-=e.scrollLeft;if(t!==`none`){let n=s<a.scrollTop;n!==s+e.offsetHeight>a.scrollTop+a.clientHeight&&(a.scrollTop=t===`center`?s-a.clientHeight/2+e.offsetHeight/2:n?s:s+e.offsetHeight-a.clientHeight)}if(n!==`none`){let t=c<a.scrollLeft;t!==c+e.offsetWidth>a.scrollLeft+a.clientWidth&&(a.scrollLeft=n===`center`?c-a.clientWidth/2+e.offsetWidth/2:t?c:c+e.offsetWidth-a.clientWidth)}i.push(a)}}function Vc(e){let t=0,n=0,r=e;for(;r;){t+=r.offsetTop,n+=r.offsetLeft;let e=r.offsetParent;if(!fs(e))break;t+=e.clientTop,n+=e.clientLeft,r=e}return{top:t,left:n}}function Hc(e,t){let n=Vc(e),r=Vc(t);return{top:n.top-r.top-t.clientTop,left:n.left-r.left-t.clientLeft}}function Uc(e,t,n){let{scaleX:r,scaleY:i,x:a,y:o}=t,s=e.left+a+(1-r)*parseFloat(n),c=e.top+o+(1-i)*parseFloat(n.slice(n.indexOf(` `)+1)),l=r?e.width*r:e.width,u=i?e.height*i:e.height;return{width:l,height:u,top:c,right:s+l,bottom:c+u,left:s}}function Wc(e,t,n){let{scaleX:r,scaleY:i,x:a,y:o}=t,s=e.left-a-(1-r)*parseFloat(n),c=e.top-o-(1-i)*parseFloat(n.slice(n.indexOf(` `)+1)),l=r?e.width/r:e.width,u=i?e.height/i:e.height;return{width:l,height:u,top:c,right:s+l,bottom:c+u,left:s}}function Gc({element:e,keyframes:t,options:n}){return e.animate(t,n).finished}function Kc(e,t=wc(e).translate,n=!0){if(n){let t=os(e,e=>`translate`in e);if(t){let{translate:e=``}=t[0];if(typeof e==`string`){let t=Nc(e);if(t)return t}}}if(t){let e=Nc(t);if(e)return e}return{x:0,y:0,z:0}}var qc=new yc(e=>setTimeout(e,0)),Jc=new Map,Yc=Jc.clear.bind(Jc);function Xc(e){let t=e.ownerDocument,n=Jc.get(t);if(n)return n;n=t.getAnimations(),Jc.set(t,n),qc.schedule(Yc);let r=n.filter(t=>as(t.effect)&&t.effect.target===e);return Jc.set(e,r),n}function Zc(e,t){let n=Xc(e).filter(e=>{if(as(e.effect)){let{target:n}=e.effect;if((n&&t.isValidTarget?.call(t,n))??!0)return e.effect.getKeyframes().some(e=>{for(let n of t.properties)if(e[n])return!0})}}).map(e=>{let{effect:t,currentTime:n}=e,r=t?.getComputedTiming().duration;if(!(e.pending||e.playState===`finished`)&&typeof r==`number`&&typeof n==`number`&&n<r)return e.currentTime=r,()=>{e.currentTime=n}});if(n.length>0)return()=>n.forEach(e=>e?.())}var Qc=class extends Ei{constructor(e,t={}){let{frameTransform:n=Ac(e),ignoreTransforms:r,getBoundingClientRect:i=ss}=t,a=Zc(e,{properties:[`transform`,`translate`,`scale`,`width`,`height`],isValidTarget:t=>(t!==e||Ss())&&t.contains(e)}),o=i(e),{top:s,left:c,width:l,height:u}=o,d,f=wc(e),p=Pc(f),m={x:p?.scaleX??1,y:p?.scaleY??1},h=$c(e,f);a?.(),p&&(d=Wc(o,p,f.transformOrigin),(r||h)&&(s=d.top,c=d.left,l=d.width,u=d.height));let g={width:d?.width??l,height:d?.height??u};if(h&&!r&&d){let e=Uc(d,h,f.transformOrigin);s=e.top,c=e.left,l=e.width,u=e.height,m.x=h.scaleX,m.y=h.scaleY}n&&(r||(c*=n.scaleX,l*=n.scaleX,s*=n.scaleY,u*=n.scaleY),c+=n.x,s+=n.y),super(c,s,l,u),this.scale=m,this.intrinsicWidth=g.width,this.intrinsicHeight=g.height}};function $c(e,t){let n=e.getAnimations();if(!n.length)return null;let r,i,a,o=!1;for(let e of n){if(e.playState!==`running`)continue;let t=as(e.effect)?e.effect.getKeyframes():[],n=t[t.length-1];if(!n)continue;let{transform:s,translate:c,scale:l}=n;typeof s==`string`&&s&&(r=s,o=!0),typeof c==`string`&&c&&(i=c,o=!0),typeof l==`string`&&l&&(a=l,o=!0)}return o?Pc({transform:r??t.transform,translate:i??t.translate,scale:a??t.scale}):null}function el(e){return`style`in e&&typeof e.style==`object`&&e.style!==null&&`setProperty`in e.style&&`removeProperty`in e.style&&typeof e.style.setProperty==`function`&&typeof e.style.removeProperty==`function`}var tl=class{constructor(e){this.element=e,this.initial=new Map}set(e,t=``){let{element:n}=this;if(el(n))for(let[r,i]of Object.entries(e)){let e=`${t}${r}`;this.initial.has(e)||this.initial.set(e,n.style.getPropertyValue(e)),n.style.setProperty(e,typeof i==`string`?i:`${i}px`)}}remove(e,t=``){let{element:n}=this;if(el(n))for(let r of e){let e=`${t}${r}`;n.style.removeProperty(e)}}reset(){let{element:e}=this;if(el(e)){for(let[t,n]of this.initial)e.style.setProperty(t,n);e.getAttribute(`style`)===``&&e.removeAttribute(`style`)}}};function nl(e){return e?e instanceof us(e).Element||ls(e)&&e.nodeType===Node.ELEMENT_NODE:!1}function rl(e){if(!e)return!1;let{KeyboardEvent:t}=us(e.target);return e instanceof t}function il(e){if(!e)return!1;let{PointerEvent:t}=us(e.target);return e instanceof t}function al(e){if(!nl(e))return!1;let{tagName:t}=e;return t===`INPUT`||t===`TEXTAREA`||ol(e)}function ol(e){return e.hasAttribute(`contenteditable`)&&e.getAttribute(`contenteditable`)!==`false`}var sl={};function cl(e){let t=sl[e]==null?0:sl[e]+1;return sl[e]=t,`${e}-${t}`}var ll=({dragOperation:e,droppable:t})=>{let n=e.position.current;if(!n)return null;let{id:r}=t;return t.shape&&t.shape.containsPoint(n)?{id:r,value:1/Ti.distance(t.shape.center,n),type:mo.PointerIntersection,priority:po.High}:null},ul=({dragOperation:e,droppable:t})=>{let{shape:n}=e;if(!t.shape||!n?.current)return null;let r=n.current.intersectionArea(t.shape);if(r){let{position:i}=e,a=Ti.distance(t.shape.center,i.current),o=r/(n.current.area+t.shape.area-r)/a;return{id:t.id,value:o,type:mo.ShapeIntersection,priority:po.Normal}}return null},dl=e=>ll(e)??ul(e),fl=e=>{let{dragOperation:t,droppable:n}=e,{shape:r,position:i}=t;if(!n.shape)return null;let a=r?Ei.from(r.current.boundingRectangle).corners:void 0,o=Ei.from(n.shape.boundingRectangle).corners.reduce((e,t,n)=>e+Ti.distance(Ti.from(t),a?.[n]??i.current),0)/4;return{id:n.id,value:1/o,type:mo.Collision,priority:po.Normal}},pl=Object.create,ml=Object.defineProperty,hl=Object.defineProperties,gl=Object.getOwnPropertyDescriptor,_l=Object.getOwnPropertyDescriptors,vl=Object.getOwnPropertySymbols,yl=Object.prototype.hasOwnProperty,bl=Object.prototype.propertyIsEnumerable,xl=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),Sl=e=>{throw TypeError(e)},Cl=(e,t,n)=>t in e?ml(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,wl=(e,t)=>{for(var n in t||={})yl.call(t,n)&&Cl(e,n,t[n]);if(vl)for(var n of vl(t))bl.call(t,n)&&Cl(e,n,t[n]);return e},Tl=(e,t)=>hl(e,_l(t)),El=(e,t)=>ml(e,`name`,{value:t,configurable:!0}),Dl=(e,t)=>{var n={};for(var r in e)yl.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&vl)for(var r of vl(e))t.indexOf(r)<0&&bl.call(e,r)&&(n[r]=e[r]);return n},Ol=e=>[,,,pl(e?.[xl(`metadata`)]??null)],kl=[`class`,`method`,`getter`,`setter`,`accessor`,`field`,`value`,`get`,`set`],Al=e=>e!==void 0&&typeof e!=`function`?Sl(`Function expected`):e,jl=(e,t,n,r,i)=>({kind:kl[e],name:t,metadata:r,addInitializer:e=>n._?Sl(`Already initialized`):i.push(Al(e||null))}),Ml=(e,t)=>Cl(t,xl(`metadata`),e[3]),Nl=(e,t,n,r)=>{for(var i=0,a=e[t>>1],o=a&&a.length;i<o;i++)t&1?a[i].call(n):r=a[i].call(n,r);return r},Pl=(e,t,n,r,i,a)=>{var o,s,c,l,u,d=t&7,f=!!(t&8),p=!!(t&16),m=d>3?e.length+1:d?f?1:2:0,h=kl[d+5],g=d>3&&(e[m-1]=[]),_=e[m]||(e[m]=[]),v=d&&(!p&&!f&&(i=i.prototype),d<5&&(d>3||!p)&&gl(d<4?i:{get[n](){return Ll(this,a)},set[n](e){return zl(this,a,e)}},n));d?p&&d<4&&El(a,(d>2?`set `:d>1?`get `:``)+n):El(i,n);for(var y=r.length-1;y>=0;y--)l=jl(d,n,c={},e[3],_),d&&(l.static=f,l.private=p,u=l.access={has:p?e=>Il(i,e):e=>n in e},d^3&&(u.get=p?e=>(d^1?Ll:Bl)(e,i,d^4?a:v.get):e=>e[n]),d>2&&(u.set=p?(e,t)=>zl(e,i,t,d^4?a:v.set):(e,t)=>e[n]=t)),s=(0,r[y])(d?d<4?p?a:v[h]:d>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,d^4||s===void 0?Al(s)&&(d>4?g.unshift(s):d?p?a=s:v[h]=s:i=s):typeof s!=`object`||!s?Sl(`Object expected`):(Al(o=s.get)&&(v.get=o),Al(o=s.set)&&(v.set=o),Al(o=s.init)&&g.unshift(o));return d||Ml(e,i),v&&ml(i,n,v),p?d^4?a:v:i},Fl=(e,t,n)=>t.has(e)||Sl(`Cannot `+n),Il=(e,t)=>Object(t)===t?e.has(t):Sl(`Cannot use the "in" operator on this value`),Ll=(e,t,n)=>(Fl(e,t,`read from private field`),n?n.call(e):t.get(e)),Rl=(e,t,n)=>t.has(e)?Sl(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),zl=(e,t,n,r)=>(Fl(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Bl=(e,t,n)=>(Fl(e,t,`access private method`),n),Vl={role:`button`,roleDescription:`draggable`},Hl=`dnd-kit-description`,Ul=`dnd-kit-announcement`,Wl={draggable:`To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel.`},Gl={dragstart({operation:{source:e}}){if(e)return`Picked up draggable item ${e.id}.`},dragover({operation:{source:e,target:t}}){if(e&&e.id!==t?.id)return t?`Draggable item ${e.id} was moved over droppable target ${t.id}.`:`Draggable item ${e.id} is no longer over a droppable target.`},dragend({operation:{source:e,target:t},canceled:n}){if(e)return n?`Dragging was cancelled. Draggable item ${e.id} was dropped.`:t?`Draggable item ${e.id} was dropped over droppable target ${t.id}`:`Draggable item ${e.id} was dropped.`}};function Kl(e){let t=e.tagName.toLowerCase();return[`input`,`select`,`textarea`,`a`,`button`].includes(t)}function ql(e,t){let n=document.createElement(`div`);return n.id=e,n.style.setProperty(`display`,`none`),n.textContent=t,n}function Jl(e){let t=document.createElement(`div`);return t.id=e,t.setAttribute(`role`,`status`),t.setAttribute(`aria-live`,`polite`),t.setAttribute(`aria-atomic`,`true`),t.style.setProperty(`position`,`fixed`),t.style.setProperty(`width`,`1px`),t.style.setProperty(`height`,`1px`),t.style.setProperty(`margin`,`-1px`),t.style.setProperty(`border`,`0`),t.style.setProperty(`padding`,`0`),t.style.setProperty(`overflow`,`hidden`),t.style.setProperty(`clip`,`rect(0 0 0 0)`),t.style.setProperty(`clip-path`,`inset(100%)`),t.style.setProperty(`white-space`,`nowrap`),t}var Yl=[`dragover`,`dragmove`],Xl=class extends ma{constructor(e,t){super(e);let{id:n,idPrefix:{description:r=Hl,announcement:i=Ul}={},announcements:a=Gl,screenReaderInstructions:o=Wl,debounce:s=500}=t??{},c=n?`${r}-${n}`:cl(r),l=n?`${i}-${n}`:cl(i),u,d,f,p,m=(e=p)=>{f&&e&&f?.nodeValue!==e&&(f.nodeValue=e)},h=()=>bc.schedule(m),g=Zl(h,s),_=Object.entries(a).map(([e,t])=>this.manager.monitor.addEventListener(e,(n,r)=>{let i=f;if(!i)return;let a=t?.(n,r);a&&i.nodeValue!==a&&(p=a,Yl.includes(e)?g():(h(),g.cancel()))})),v=()=>{let e=[];u?.isConnected||(u=ql(c,o.draggable),e.push(u)),d?.isConnected||(d=Jl(l),f=document.createTextNode(``),d.appendChild(f),e.push(d)),e.length>0&&document.body.append(...e)},y=new Set;function b(){for(let e of y)e()}this.registerEffect(()=>{y.clear();for(let e of this.manager.registry.draggables.value){let t=e.handle??e.element;if(t){(!u||!d)&&y.add(v),(!Kl(t)||Ss())&&!t.hasAttribute(`tabindex`)&&y.add(()=>t.setAttribute(`tabindex`,`0`)),!t.hasAttribute(`role`)&&t.tagName.toLowerCase()!==`button`&&y.add(()=>t.setAttribute(`role`,Vl.role)),t.hasAttribute(`aria-roledescription`)||y.add(()=>t.setAttribute(`aria-roledescription`,Vl.roleDescription)),t.hasAttribute(`aria-describedby`)||y.add(()=>t.setAttribute(`aria-describedby`,c));for(let n of[`aria-pressed`,`aria-grabbed`]){let r=String(e.isDragging);t.getAttribute(n)!==r&&y.add(()=>t.setAttribute(n,r))}let n=String(e.disabled);t.getAttribute(`aria-disabled`)!==n&&y.add(()=>t.setAttribute(`aria-disabled`,n))}}y.size>0&&bc.schedule(b)}),this.destroy=()=>{super.destroy(),u?.remove(),d?.remove(),_.forEach(e=>e())}}};function Zl(e,t){let n,r=()=>{clearTimeout(n),n=setTimeout(e,t)};return r.cancel=()=>clearTimeout(n),r}var Ql=new Map,$l,eu,tu,nu,ru,iu,au,ou,su,cu,lu,uu,du,fu=class extends (ru=ha,nu=[H],tu=[Dr],eu=[Dr],$l=[Dr],ru){constructor(e,t){super(e,t),Nl(au,5,this),Rl(this,su),Rl(this,iu,new Set),Rl(this,ou,Nl(au,8,this,new Set)),Nl(au,11,this),this.registerEffect(Bl(this,su,cu))}register(e){return Ll(this,iu).add(e),()=>{Ll(this,iu).delete(e)}}addRoot(e){return V(()=>{let t=new Set(this.additionalRoots);t.add(e),this.additionalRoots=t}),()=>{V(()=>{let t=new Set(this.additionalRoots);t.delete(e),this.additionalRoots=t})}}get sourceRoot(){let{source:e}=this.manager.dragOperation;return Ts(e?.element??null)}get targetRoot(){let{target:e}=this.manager.dragOperation;return Ts(e?.element??null)}get roots(){let{status:e}=this.manager.dragOperation;if(e.initializing||e.initialized){let e=[this.sourceRoot,this.targetRoot].filter(e=>e!=null);return new Set([...e,...this.additionalRoots])}return new Set}};au=Ol(ru),iu=new WeakMap,ou=new WeakMap,su=new WeakSet,cu=function(){let{roots:e}=this,t=[];for(let n of e)for(let e of Ll(this,iu))t.push(Bl(this,su,lu).call(this,n,e));return()=>{for(let e of t)e()}},lu=function(e,t){let n=Ql.get(e);n||(n=new Map,Ql.set(e,n));let r=n.get(t);if(!r){let i=ds(e)?Bl(this,su,uu).call(this,e,n,t):Bl(this,su,du).call(this,e,n,t);if(!i)return()=>{};r=i,n.set(t,r)}r.refCount++;let i=!1;return()=>{i||(i=!0,r.refCount--,r.refCount===0&&r.cleanup())}},uu=function(e,t,n){let r=e.createElement(`style`),{nonce:i}=this.options??{};i&&r.setAttribute(`nonce`,i),r.textContent=n,e.head.prepend(r);let a=new MutationObserver(t=>{for(let n of t)for(let t of Array.from(n.removedNodes))if(t===r){e.head.prepend(r);return}});return a.observe(e.head,{childList:!0}),{refCount:0,cleanup:()=>{a.disconnect(),r.remove(),t.delete(n),t.size===0&&Ql.delete(e)}}},du=function(e,t,n){`adoptedStyleSheets`in e&&Array.isArray(e.adoptedStyleSheets);let{CSSStyleSheet:r}=e.ownerDocument.defaultView??{};if(!r)return null;let i=new r;return i.replaceSync(n),e.adoptedStyleSheets.push(i),{refCount:0,cleanup:()=>{if(ws(e)&&e.host?.isConnected){let t=e.adoptedStyleSheets.indexOf(i);t!==-1&&e.adoptedStyleSheets.splice(t,1)}t.delete(n),t.size===0&&Ql.delete(e)}}},Pl(au,4,`additionalRoots`,nu,fu,ou),Pl(au,2,`sourceRoot`,tu,fu),Pl(au,2,`targetRoot`,eu,fu),Pl(au,2,`roots`,$l,fu),Ml(au,fu),fu.configure=ca(fu);var pu=fu,mu=class extends ma{constructor(e,t){super(e,t),this.manager=e;let{cursor:n=`grabbing`}=t??{},r=e.registry.plugins.get(pu)?.register(`* { cursor: ${n} !important; }`);if(r){let e=this.destroy.bind(this);this.destroy=()=>{r(),e()}}}},hu=`data-dnd-`,gu=`${hu}dropping`,Y=`--dnd-`,_u=`${hu}dragging`,vu=`${hu}placeholder`,yu=[_u,vu,`popover`,`aria-pressed`,`aria-grabbing`],bu=[`view-transition-name`],xu=`
  :is(:root,:host) [${_u}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${Y}top, 0px) !important;
    left: var(${Y}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${Y}width, auto);
    max-width: var(${Y}width, auto);
    height: var(${Y}height, auto);
    max-height: var(${Y}height, auto);
    transform: var(${Y}transform, none) !important;
    transition: var(${Y}transition) !important;
  }

  :is(:root,:host) [${vu}] {
    transition: none;
  }

  :is(:root,:host) [${vu}='hidden'] {
    visibility: hidden;
  }

  [${_u}] * {
    pointer-events: none !important;
  }

  [${_u}]:not([${gu}]) {
    translate: var(${Y}translate) !important;
  }

  [${_u}][style*='${Y}scale'] {
    scale: var(${Y}scale) !important;
    transform-origin: var(${Y}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${_u}][popover]) {
      overflow: visible;
      background: unset;
      border: unset;
      margin: unset;
      padding: unset;
      color: inherit;

      &:is(input, button) {
        border: revert;
        background: revert;
      }
    }
  }
  [${_u}]::backdrop, [${hu}overlay]:not([${_u}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g,` `).replace(/\s+/g,` `).trim();function Su(e,t=`hidden`){return V(()=>{let{element:n,manager:r}=e;if(!n||!r)return;let i=Cu(n,r.registry.droppables),a=[],o=Ds(n),{remove:s}=o;return wu(i,o,a),Tu(o,t),o.remove=()=>{a.forEach(e=>e()),s.call(o)},o})}function Cu(e,t){let n=new Map;for(let r of t)if(r.element&&(e===r.element||e.contains(r.element))){let e=`${hu}${cl(`dom-id`)}`;r.element.setAttribute(e,``),n.set(r,e)}return n}function wu(e,t,n){for(let[r,i]of e){if(!r.element)continue;let e=`[${i}]`,a=t.matches(e)?t:t.querySelector(e);if(r.element.removeAttribute(i),!a)continue;let o=r.element;r.proxy=a,a.removeAttribute(i),Ms.set(o,a),n.push(()=>{Ms.delete(o),r.proxy=void 0})}}function Tu(e,t=`hidden`){e.setAttribute(`inert`,`true`),e.setAttribute(`tab-index`,`-1`),e.setAttribute(`aria-hidden`,`true`),e.setAttribute(vu,t)}function Eu(e,t){return e===t||Fs(e)===Fs(t)}function Du(e){let{target:t}=e;`newState`in e&&e.newState===`closed`&&nl(t)&&t.hasAttribute(`popover`)&&requestAnimationFrame(()=>hc(t))}function Ou(e){return e.tagName===`TR`}function ku(e,t,n){let r=new MutationObserver(r=>{let i=!1;for(let n of r){if(n.target!==e){i=!0;continue}if(n.type!==`attributes`)continue;let r=n.attributeName;if(r.startsWith(`aria-`)||yu.includes(r))continue;let a=e.getAttribute(r);if(r===`style`){if(el(e)&&el(t)){let n=e.style;for(let e of Array.from(t.style))n.getPropertyValue(e)===``&&t.style.removeProperty(e);for(let e of Array.from(n)){if(bu.includes(e)||e.startsWith(Y))continue;let r=n.getPropertyValue(e);t.style.setProperty(e,r)}}}else a===null?t.removeAttribute(r):t.setAttribute(r,a)}i&&n&&t.replaceChildren(...e.cloneNode(!0).childNodes)});return r.observe(e,{attributes:!0,subtree:!0,childList:!0}),r}function Au(e,t,n){let r=new MutationObserver(r=>{for(let i of r)if(i.addedNodes.length!==0)for(let r of Array.from(i.addedNodes)){if(r.contains(e)&&e.nextElementSibling!==t){e.insertAdjacentElement(`afterend`,t),hc(n);return}if(r.contains(t)&&t.previousElementSibling!==e){t.insertAdjacentElement(`beforebegin`,e),hc(n);return}}e.isConnected&&t.isConnected&&e.nextElementSibling!==t&&(e.insertAdjacentElement(`afterend`,t),hc(n))});return r.observe(e.ownerDocument.body,{childList:!0,subtree:!0}),r}function ju(e){return new ResizeObserver(()=>{var t;let n=new Qc(e.placeholder,{frameTransform:e.frameTransform,ignoreTransforms:!0}),r=e.transformOrigin??{x:1,y:1},i=(e.width-n.width)*r.x+e.delta.x,a=(e.height-n.height)*r.y+e.delta.y,o=Cs();if(e.styles.set({width:n.width-e.widthOffset,height:n.height-e.heightOffset,top:e.top+a+o.y,left:e.left+i+o.x},Y),(t=e.getElementMutationObserver())==null||t.takeRecords(),Ou(e.element)&&Ou(e.placeholder)){let t=Array.from(e.element.cells),n=Array.from(e.placeholder.cells);e.getSavedCellWidths()||e.setSavedCellWidths(t.map(e=>e.style.width));for(let[e,r]of t.entries()){let t=n[e];r.style.width=`${t.getBoundingClientRect().width}px`}}let s=e.getTranslate()??{x:0,y:0},c=e.left+i+o.x+s.x,l=e.top+a+o.y+s.y,u=n.width-e.widthOffset,d=n.height-e.heightOffset,f=e.frameTransform;e.dragOperation.shape=new Ei(c*f.scaleX+f.x,l*f.scaleY+f.y,u*f.scaleX,d*f.scaleY)})}var Mu=250,Nu=`ease`;function Pu(e){var t;let{animation:n}=e;if(typeof n==`function`){let t=n({source:e.source,element:e.element,feedbackElement:e.feedbackElement,placeholder:e.placeholder,translate:e.translate,moved:e.moved});Promise.resolve(t).then(()=>{e.cleanup(),requestAnimationFrame(e.restoreFocus)});return}let{duration:r=Mu,easing:i=Nu}=n??{};hc(e.feedbackElement);let[,a]=os(e.feedbackElement,e=>`translate`in e)??[];a?.pause();let o=e.placeholder??e.element,s={frameTransform:Eu(e.feedbackElement,o)?null:void 0},c=new Qc(e.feedbackElement,s),l=Nc(wc(e.feedbackElement).translate)??e.translate,u=new Qc(o,s),d=Ei.delta(c,u,e.alignment),f={x:l.x-d.x,y:l.y-d.y},p=Math.round(c.intrinsicHeight)===Math.round(u.intrinsicHeight)?{}:{minHeight:[`${c.intrinsicHeight}px`,`${u.intrinsicHeight}px`],maxHeight:[`${c.intrinsicHeight}px`,`${u.intrinsicHeight}px`]},m=Math.round(c.intrinsicWidth)===Math.round(u.intrinsicWidth)?{}:{minWidth:[`${c.intrinsicWidth}px`,`${u.intrinsicWidth}px`],maxWidth:[`${c.intrinsicWidth}px`,`${u.intrinsicWidth}px`]};e.styles.set({transition:e.transition},Y),e.feedbackElement.setAttribute(gu,``),(t=e.getElementMutationObserver())==null||t.takeRecords(),Gc({element:e.feedbackElement,keyframes:Tl(wl(wl({},p),m),{translate:[`${l.x}px ${l.y}px 0`,`${f.x}px ${f.y}px 0`]}),options:{duration:Es(us(e.feedbackElement))?0:e.moved||e.feedbackElement!==e.element?r:0,easing:i}}).then(()=>{e.feedbackElement.removeAttribute(gu),a?.finish(),e.cleanup(),requestAnimationFrame(e.restoreFocus)})}var Fu,Iu,Lu,Ru,zu,Bu,Vu,Hu=class extends (Iu=ma,Fu=[H],Iu){constructor(e,t){super(e,t),Rl(this,zu),Rl(this,Ru,Nl(Lu,8,this)),Nl(Lu,11,this),this.state={initial:{},current:{}};let n=e.registry.plugins.get(pu),r=n?.register(xu);if(r){let e=this.destroy.bind(this);this.destroy=()=>{r(),e()}}this.registerEffect(Bl(this,zu,Bu).bind(this,n)),this.registerEffect(Bl(this,zu,Vu))}};Lu=Ol(Iu),Ru=new WeakMap,zu=new WeakSet,Bu=function(e){let{overlay:t}=this;if(!t||!e)return;let n=Ts(t);if(n)return e.addRoot(n)},Vu=function(){let{state:e,manager:t,options:n}=this,{dragOperation:r}=t,{position:i,source:a,status:o}=r;if(o.idle){e.current={},e.initial={};return}if(!a)return;let{element:s}=a,c=a.pluginConfig(Hu),l=c?.feedback??n?.feedback??`default`,u=typeof l==`function`?l(a,t):l;if(!s||u===`none`||!o.initialized||o.initializing)return;let{initial:d}=e,f=this.overlay??s,p=Ac(f),m=Ac(s),h=!Eu(s,f),g=new Qc(s,{frameTransform:h?m:null,ignoreTransforms:!h}),_={x:m.scaleX/p.scaleX,y:m.scaleY/p.scaleY},{width:v,height:y,top:b,left:x}=g;h&&(v/=_.x,y/=_.y);let S=new tl(f),C=wc(s),{transition:w,translate:T,boxSizing:ee,paddingBlockStart:E,paddingBlockEnd:D,paddingInlineStart:O,paddingInlineEnd:te,borderInlineStartWidth:ne,borderInlineEndWidth:re,borderBlockStartWidth:ie,borderBlockEndWidth:k}=C,ae=w.split(`,`).filter(e=>!/^\s*(transform|translate|scale)\b/.test(e)).join(`,`),oe=Pc(C),se=C.transform,ce=u===`clone`,le=ee===`content-box`,A=le?parseInt(O)+parseInt(te)+parseInt(ne)+parseInt(re):0,ue=le?parseInt(E)+parseInt(D)+parseInt(ie)+parseInt(k):0,j=u!==`move`&&!this.overlay?Su(a,ce?`clone`:`hidden`):null,de=V(()=>rl(t.dragOperation.activatorEvent));if(!d.translate){if(this.overlay&&oe)d.translate={x:oe.x,y:oe.y};else if(T!==`none`){let e=Nc(T);e&&(d.translate=e)}}if(!d.transformOrigin){let e=V(()=>i.current),t=x+(oe?.x??0),n=b+(oe?.y??0);d.transformOrigin={x:(e.x-t*p.scaleX-p.x)/(v*p.scaleX),y:(e.y-n*p.scaleY-p.y)/(y*p.scaleY)}}let{transformOrigin:fe}=d,pe=b*p.scaleY+p.y,me=x*p.scaleX+p.x;if(!d.coordinates&&(d.coordinates={x:me,y:pe},_.x!==1||_.y!==1)){let{scaleX:e,scaleY:t}=m,{x:n,y:r}=fe;d.coordinates.x+=(v*e-v)*n,d.coordinates.y+=(y*t-y)*r}d.dimensions||={width:v,height:y},d.frameTransform||=p;let he={x:d.coordinates.x-me,y:d.coordinates.y-pe},ge={width:(d.dimensions.width*d.frameTransform.scaleX-v*p.scaleX)*fe.x,height:(d.dimensions.height*d.frameTransform.scaleY-y*p.scaleY)*fe.y},_e={x:he.x/p.scaleX+ge.width,y:he.y/p.scaleY+ge.height},M={left:x+_e.x,top:b+_e.y};f.setAttribute(_u,`true`);let N=V(()=>r.transform),ve=d.translate??{x:0,y:0},ye=N.x*p.scaleX+ve.x,be=N.y*p.scaleY+ve.y,xe=Cs();S.set({width:v-A,height:y-ue,top:M.top+xe.y,left:M.left+xe.x,translate:`${ye}px ${be}px 0`,transform:this.overlay?`none`:se,transition:ae?`${ae}, translate 0ms linear`:`translate 0ms linear`,scale:h?`${_.x} ${_.y}`:``,"transform-origin":`${fe.x*100}% ${fe.y*100}%`},Y),j&&(s.insertAdjacentElement(`afterend`,j),n?.rootElement&&(typeof n.rootElement==`function`?n.rootElement(a):n.rootElement).appendChild(s)),mc(f)&&(f.hasAttribute(`popover`)||f.setAttribute(`popover`,`manual`),hc(f),f.addEventListener(`beforetoggle`,Du));let P,F,Se,Ce=ju({placeholder:j,element:s,feedbackElement:f,frameTransform:p,transformOrigin:fe,width:v,height:y,top:b,left:x,widthOffset:A,heightOffset:ue,delta:_e,styles:S,dragOperation:r,getTranslate:()=>e.current.translate,getElementMutationObserver:()=>P,getSavedCellWidths:()=>Se,setSavedCellWidths:e=>{Se=e}}),I=new Qc(f);V(()=>r.shape=I);let we=us(f),Te=e=>{this.manager.actions.stop({event:e})},Ee=Es(we);de&&we.addEventListener(`resize`,Te),V(()=>a.status)===`idle`&&requestAnimationFrame(()=>a.status=`dragging`),j&&(Ce.observe(j),P=ku(s,j,ce),F=Au(s,j,f));let De=t.dragOperation.source?.id,Oe=()=>{if(!de||De==null)return;let e=t.registry.draggables.get(De),n=e?.handle??e?.element;fs(n)&&n.focus()},ke=()=>{if(P?.disconnect(),F?.disconnect(),Ce.disconnect(),we.removeEventListener(`resize`,Te),mc(f)&&(f.removeEventListener(`beforetoggle`,Du),f.removeAttribute(`popover`)),f.removeAttribute(_u),S.reset(),Se&&Ou(s)){let e=Array.from(s.cells);for(let[t,n]of e.entries())n.style.width=Se[t]??``}a.status=`idle`;let t=e.current.translate!=null,n=r.status.dragging;j&&(!n&&t||j.parentElement!==f.parentElement)&&f.isConnected&&j.replaceWith(f),j?.remove()},Ae=n?.dropAnimation,je=this,L=kr(()=>{let{transform:t,status:i}=r;if((t.x||t.y||e.current.translate)&&i.dragging){let i=d.translate??{x:0,y:0},a={x:t.x/p.scaleX+i.x,y:t.y/p.scaleY+i.y},o=e.current.translate,s=V(()=>r.modifiers),c=V(()=>r.shape?.current),l=n?.keyboardTransition,u=de&&!Ee&&l!==null?`${l?.duration??250}ms ${l?.easing??`cubic-bezier(0.25, 1, 0.5, 1)`}`:`0ms linear`;if(S.set({transition:ae?`${ae}, translate ${u}`:`translate ${u}`,translate:`${a.x}px ${a.y}px 0`},Y),P?.takeRecords(),c&&c!==I&&o&&!s.length){let e=Ti.delta(a,o);r.shape=Ei.from(c.boundingRectangle).translate(e.x*p.scaleX,e.y*p.scaleY)}else r.shape=new Qc(f);e.current.translate=a}},function(){if(r.status.dropped){this.dispose(),a.status=`dropping`;let n=c?.dropAnimation===void 0?je.dropAnimation===void 0?Ae:je.dropAnimation:c.dropAnimation,r=e.current.translate,i=r!=null;if(!r&&s!==f&&(r={x:0,y:0}),!r||n===null){ke();return}t.renderer.rendering.then(()=>{Pu({source:a,element:s,feedbackElement:f,placeholder:j,translate:r,moved:i,transition:w,alignment:a.alignment,styles:S,animation:n??void 0,getElementMutationObserver:()=>P,cleanup:ke,restoreFocus:Oe})})}});return()=>{ke(),L()}},Pl(Lu,4,`overlay`,Fu,Hu,Ru),Ml(Lu,Hu),Hu.configure=ca(Hu);var Uu=Hu,Wu=!0,Gu=!1,Ku,qu,Ju=[H],Yu=Ic.Forward,X,Xu,Z;qu=(Ku=[H],Ic.Reverse);var Q=class{constructor(){Rl(this,Xu,Nl(X,8,this,Wu)),Nl(X,11,this),Rl(this,Z,Nl(X,12,this,Wu)),Nl(X,15,this)}isLocked(e){return e===Ic.Idle?!1:e==null?this[Ic.Forward]===Wu&&this[Ic.Reverse]===Wu:this[e]===Wu}unlock(e){e!==Ic.Idle&&(this[e]=Gu)}};X=Ol(null),Xu=new WeakMap,Z=new WeakMap,Pl(X,4,Yu,Ju,Q,Xu),Pl(X,4,qu,Ku,Q,Z),Ml(X,Q);var Zu=[Ic.Forward,Ic.Reverse],Qu=class{constructor(){this.x=new Q,this.y=new Q}isLocked(){return this.x.isLocked()&&this.y.isLocked()}},$u=class extends ma{constructor(e){super(e);let t=Vn(new Qu),n=null;this.signal=t,Zn(()=>{let{status:r}=e.dragOperation;if(!r.initialized){n=null,t.value=new Qu;return}let{delta:i}=e.dragOperation.position;if(n){let e={x:ed(i.x,n.x),y:ed(i.y,n.y)},r=t.peek();kn(()=>{for(let t of Ii)for(let n of Zu)e[t]===n&&r[t].unlock(n);t.value=r})}n=i})}get current(){return this.signal.peek()}};function ed(e,t){return Math.sign(e-t)}var td,nd,rd,id,ad,od,sd=class extends (nd=ha,td=[H],nd){constructor(e){super(e),Rl(this,id,Nl(rd,8,this,!1)),Nl(rd,11,this),Rl(this,ad),Rl(this,od,()=>{if(!Ll(this,ad))return;let{element:e,by:t}=Ll(this,ad);t.y&&(e.scrollTop+=t.y),t.x&&(e.scrollLeft+=t.x)}),this.scroll=(e,t)=>{if(this.disabled)return!1;let n=this.getScrollableElements();if(!n)return zl(this,ad,void 0),!1;let{position:r}=this.manager.dragOperation,i=r?.current;if(i){let{by:r}=e??{},a=r?{x:cd(r.x),y:cd(r.y)}:void 0,o=a?void 0:this.scrollIntentTracker.current;if(o?.isLocked())return!1;for(let e of n){let n=vc(e,r);if(n.x||n.y){let{speed:n,direction:s}=zc(e,i,a,t?.acceleration,t?.threshold);if(o)for(let e of Ii)o[e].isLocked(s[e])&&(n[e]=0,s[e]=0);if(s.x||s.y){let{x:t,y:i}=r??s,a=t*n.x,o=i*n.y;if(a||o){let t=Ll(this,ad)?.by;if(this.autoScrolling&&t&&(t.x&&!a||t.y&&!o))continue;return zl(this,ad,{element:e,by:{x:a,y:o}}),bc.schedule(Ll(this,od)),!0}}}}}return zl(this,ad,void 0),!1};let t=null,n=null,r=Tr(()=>{let{position:n,source:r}=e.dragOperation;if(!n)return null;let i=As(Ts(r?.element),n.current);return i&&(t=i),i??t}),i=Tr(()=>{let t=r.value,{documentElement:i}=ms(t);if(!t||t===i){let{target:t}=e.dragOperation,r=t?.element;if(r){let e=kc(r,{excludeElement:!1});return n=e,e}}if(t){let e=kc(t,{excludeElement:!1});return this.autoScrolling&&n&&e.size<n?.size?n:(n=e,e)}return n=null,null},Er);this.getScrollableElements=()=>i.value,this.scrollIntentTracker=new $u(e),this.destroy=e.monitor.addEventListener(`dragmove`,t=>{!this.disabled&&!t.defaultPrevented&&rl(e.dragOperation.activatorEvent)&&t.by&&this.scroll({by:t.by})&&t.preventDefault()})}};rd=Ol(nd),id=new WeakMap,ad=new WeakMap,od=new WeakMap,Pl(rd,4,`autoScrolling`,td,sd,id),Ml(rd,sd);function cd(e){return e>0?Ic.Forward:e<0?Ic.Reverse:Ic.Idle}var ld=new class{constructor(e){this.scheduler=e,this.pending=!1,this.tasks=new Set,this.resolvers=new Set,this.flush=()=>{let{tasks:e,resolvers:t}=this;this.pending=!1,this.tasks=new Set,this.resolvers=new Set;for(let t of e)t();for(let e of t)e()}}schedule(e){return this.tasks.add(e),this.pending||(this.pending=!0,this.scheduler(this.flush)),new Promise(e=>this.resolvers.add(e))}}(e=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()}),ud=10,dd=class extends ma{constructor(e,t){super(e,t);let n=e.registry.plugins.get(sd);if(!n)throw Error(`AutoScroller plugin depends on Scroller plugin`);this.destroy=Zn(()=>{if(this.disabled)return;let{position:t,status:r}=e.dragOperation;if(r.dragging){let e={acceleration:this.options?.acceleration,threshold:typeof this.options?.threshold==`number`?{x:this.options.threshold,y:this.options.threshold}:this.options?.threshold};if(n.scroll(void 0,e)){n.autoScrolling=!0;let t=setInterval(()=>ld.schedule(()=>n.scroll(void 0,e)),ud);return()=>{clearInterval(t)}}n.autoScrolling=!1}})}};dd.configure=ca(dd);var fd=dd,pd={capture:!0,passive:!0},md,hd=class extends ha{constructor(e){super(e),Rl(this,md),this.handleScroll=()=>{Ll(this,md)??zl(this,md,setTimeout(()=>{this.manager.collisionObserver.forceUpdate(!1),zl(this,md,void 0)},50))};let{dragOperation:t}=this.manager;this.destroy=Zn(()=>{if(t.status.dragging){let e=t.source?.element?.ownerDocument??document;return e.addEventListener(`scroll`,this.handleScroll,pd),()=>{e.removeEventListener(`scroll`,this.handleScroll,pd)}}})}};md=new WeakMap;var gd=`* { user-select: none !important; -webkit-user-select: none !important; }`,_d=class extends ma{constructor(e){super(e),this.manager=e;let t=e.registry.plugins.get(pu)?.register(gd);if(this.destroy=Zn(()=>{let{dragOperation:e}=this.manager;if(e.status.initialized)return vd(),document.addEventListener(`selectionchange`,vd,{capture:!0}),()=>{document.removeEventListener(`selectionchange`,vd,{capture:!0})}}),t){let e=this.destroy.bind(this);this.destroy=()=>{t(),e()}}}};function vd(){var e;(e=document.getSelection())==null||e.removeAllRanges()}var yd=Object.freeze({offset:10,keyboardCodes:{start:[`Space`,`Enter`],cancel:[`Escape`],end:[`Space`,`Enter`,`Tab`],up:[`ArrowUp`],down:[`ArrowDown`],left:[`ArrowLeft`],right:[`ArrowRight`]},preventActivation(e,t){let n=t.handle??t.element;return e.target!==n}}),bd,xd=class extends Eo{constructor(e,t){super(e),this.manager=e,this.options=t,Rl(this,bd,[]),this.listeners=new Ps,this.handleSourceKeyDown=(e,t,n)=>{if(this.disabled||e.defaultPrevented||!nl(e.target)||t.disabled)return;let{keyboardCodes:r=yd.keyboardCodes,preventActivation:i=yd.preventActivation}=n??{};r.start.includes(e.code)&&this.manager.dragOperation.status.idle&&(i?.(e,t)||this.handleStart(e,t,n))}}bind(e,t=this.options){return Zn(()=>{let n=e.handle??e.element,r=n=>{rl(n)&&this.handleSourceKeyDown(n,e,t)};if(n)return n.addEventListener(`keydown`,r),()=>{n.removeEventListener(`keydown`,r)}})}handleStart(e,t,n){let{element:r}=t;if(!r)throw Error(`Source draggable does not have an associated element`);e.preventDefault(),e.stopImmediatePropagation(),Bc(r);let{center:i}=new Qc(r);if(this.manager.actions.start({event:e,coordinates:{x:i.x,y:i.y},source:t}).signal.aborted)return this.cleanup();this.sideEffects();let a=ms(r),o=[this.listeners.bind(a,[{type:`keydown`,listener:e=>this.handleKeyDown(e,t,n),options:{capture:!0}}])];Ll(this,bd).push(...o)}handleKeyDown(e,t,n){let{keyboardCodes:r=yd.keyboardCodes}=n??{};if(Cd(e,[...r.end,...r.cancel])){e.preventDefault();let t=Cd(e,r.cancel);this.handleEnd(e,t);return}Cd(e,r.up)?this.handleMove(`up`,e):Cd(e,r.down)&&this.handleMove(`down`,e),Cd(e,r.left)?this.handleMove(`left`,e):Cd(e,r.right)&&this.handleMove(`right`,e)}handleEnd(e,t){this.manager.actions.stop({event:e,canceled:t}),this.cleanup()}handleMove(e,t){let{shape:n}=this.manager.dragOperation,r=t.shiftKey?5:1,i={x:0,y:0},a=this.options?.offset??yd.offset;if(typeof a==`number`&&(a={x:a,y:a}),n){switch(e){case`up`:i={x:0,y:-a.y*r};break;case`down`:i={x:0,y:a.y*r};break;case`left`:i={x:-a.x*r,y:0};break;case`right`:i={x:a.x*r,y:0}}(i.x||i.y)&&(t.preventDefault(),this.manager.actions.move({event:t,by:i}))}}sideEffects(){let e=this.manager.registry.plugins.get(fd);e?.disabled===!1&&(e.disable(),Ll(this,bd).push(()=>{e.enable()}))}cleanup(){Ll(this,bd).forEach(e=>e()),zl(this,bd,[])}destroy(){this.cleanup(),this.listeners.clear()}};bd=new WeakMap,xd.configure=ca(xd),xd.defaults=yd;var Sd=xd;function Cd(e,t){return t.includes(e.code)}var wd,Td=class extends ko{constructor(){super(...arguments),Rl(this,wd)}onEvent(e){switch(e.type){case`pointerdown`:zl(this,wd,ys(e));break;case`pointermove`:if(!Ll(this,wd))return;let{x:t,y:n}=ys(e),r={x:t-Ll(this,wd).x,y:n-Ll(this,wd).y},{tolerance:i}=this.options;if(i&&Pi(r,i)){this.abort();return}Pi(r,this.options.value)&&this.activate(e);break;case`pointerup`:this.abort()}}abort(){zl(this,wd,void 0)}};wd=new WeakMap;var Ed,Dd,Od=class extends ko{constructor(){super(...arguments),Rl(this,Ed),Rl(this,Dd)}onEvent(e){switch(e.type){case`pointerdown`:zl(this,Dd,ys(e)),zl(this,Ed,setTimeout(()=>this.activate(e),this.options.value));break;case`pointermove`:if(!Ll(this,Dd))return;let{x:t,y:n}=ys(e);Pi({x:t-Ll(this,Dd).x,y:n-Ll(this,Dd).y},this.options.tolerance)&&this.abort();break;case`pointerup`:this.abort()}}abort(){Ll(this,Ed)&&(clearTimeout(Ll(this,Ed)),zl(this,Dd,void 0),zl(this,Ed,void 0))}};Ed=new WeakMap,Dd=new WeakMap;var kd=class{};kd.Delay=Od,kd.Distance=Td;var Ad=Object.freeze({activationConstraints(e,t){let{pointerType:n,target:r}=e;if(n!==`mouse`||!nl(r)||t.handle!==r&&!t.handle?.contains(r))return n===`touch`?[new kd.Delay({value:250,tolerance:5})]:al(r)&&!e.defaultPrevented?[new kd.Delay({value:200,tolerance:0})]:[new kd.Delay({value:200,tolerance:10}),new kd.Distance({value:5})]},preventActivation(e,t){let{target:n}=e;return n===t.element||n===t.handle||!nl(n)||t.handle?.contains(n)?!1:Ns(n)}}),jd,Md=class extends Eo{constructor(e,t){super(e),this.manager=e,this.options=t,Rl(this,jd,new Set),this.listeners=new Ps,this.latest={event:void 0,coordinates:void 0},this.handleMove=()=>{let{event:e,coordinates:t}=this.latest;e&&t&&this.manager.actions.move({event:e,to:t})},this.handleCancel=this.handleCancel.bind(this),this.handlePointerUp=this.handlePointerUp.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this)}activationConstraints(e,t,n=this.options){let{activationConstraints:r=Ad.activationConstraints}=n??{};return typeof r==`function`?r(e,t):r}bind(e,t=this.options){return Zn(()=>{let n=new AbortController,{signal:r}=n,i=n=>{il(n)&&this.handlePointerDown(n,e,t)},a=[e.handle??e.element];t?.activatorElements&&(a=Array.isArray(t.activatorElements)?t.activatorElements:t.activatorElements(e));for(let e of a)e&&(Rd(e.ownerDocument.defaultView),e.addEventListener(`pointerdown`,i,{signal:r}));return()=>n.abort()})}handlePointerDown(e,t,n){if(this.disabled||!e.isPrimary||e.button!==0||!nl(e.target)||t.disabled||Pd(e)||!this.manager.dragOperation.status.idle)return;let{preventActivation:r=Ad.preventActivation}=n??{};if(r?.(e,t))return;let{target:i}=e,a=fs(i)&&i.draggable&&i.getAttribute(`draggable`)===`true`,o=Ac(t.element),{x:s,y:c}=ys(e);this.initialCoordinates={x:s*o.scaleX+o.x,y:c*o.scaleY+o.y};let l=this.activationConstraints(e,t,n);e.sensor=this;let u=new Do(l,e=>this.handleStart(t,e));u.signal.onabort=()=>this.handleCancel(e),u.onEvent(e),this.controller=u;let d=xs(),f=this.listeners.bind(d,[{type:`pointermove`,listener:e=>this.handlePointerMove(e,t)},{type:`pointerup`,listener:this.handlePointerUp,options:{capture:!0}},{type:`pointercancel`,listener:this.handleCancel},{type:`dragstart`,listener:a?this.handleCancel:Fd,options:{capture:!0}}]);Ll(this,jd).add(()=>{f(),this.initialCoordinates=void 0})}handlePointerMove(e,t){var n;if(this.controller?.activated===!1){(n=this.controller)==null||n.onEvent(e);return}if(this.manager.dragOperation.status.dragging){let n=ys(e),r=Ac(t.element);n.x=n.x*r.scaleX+r.x,n.y=n.y*r.scaleY+r.y,e.preventDefault(),e.stopPropagation(),this.latest.event=e,this.latest.coordinates=n,bc.schedule(this.handleMove)}}handlePointerUp(e){let{status:t}=this.manager.dragOperation;if(!t.idle){e.preventDefault(),e.stopPropagation();let n=!t.initialized;this.manager.actions.stop({event:e,canceled:n})}this.cleanup()}handleKeyDown(e){e.key===`Escape`&&(e.preventDefault(),this.handleCancel(e))}handleStart(e,t){let{manager:n,initialCoordinates:r}=this;if(!r||!n.dragOperation.status.idle||t.defaultPrevented)return;if(n.actions.start({coordinates:r,event:t,source:e}).signal.aborted)return this.cleanup();t.preventDefault();let i=ms(t.target).body;try{i.setPointerCapture(t.pointerId)}catch{this.handleCancel(t);return}let a=nl(t.target)?[t.target,i]:i,o=this.listeners.bind(a,[{type:`touchmove`,listener:Fd,options:{passive:!1}},{type:`click`,listener:Fd},{type:`contextmenu`,listener:Fd},{type:`keydown`,listener:this.handleKeyDown}]);Ll(this,jd).add(o)}handleCancel(e){let{dragOperation:t}=this.manager;t.status.initialized&&this.manager.actions.stop({event:e,canceled:!0}),this.cleanup()}cleanup(){let{controller:e}=this;this.controller=void 0,e&&!e.signal.aborted&&e.abort(),this.latest={event:void 0,coordinates:void 0},Ll(this,jd).forEach(e=>e()),Ll(this,jd).clear()}destroy(){this.cleanup(),this.listeners.clear()}};jd=new WeakMap,Md.configure=ca(Md),Md.defaults=Ad;var Nd=Md;function Pd(e){return`sensor`in e}function Fd(e){e.preventDefault()}function Id(){}var Ld=new WeakSet;function Rd(e){e&&!Ld.has(e)&&(e.addEventListener(`touchmove`,Id,{capture:!1,passive:!1}),Ld.add(e))}var zd={modifiers:[],plugins:[Xl,fd,mu,Uu,_d],sensors:[Nd,Sd]},Bd=class extends $o{constructor(e={}){let t=Qo(e.plugins,zd.plugins),n=Qo(e.sensors,zd.sensors),r=Qo(e.modifiers,zd.modifiers);super(Tl(wl({},e),{plugins:[hd,sd,pu,...t],sensors:n,modifiers:r}))}},Vd,Hd,Ud,Wd,Gd,Kd,qd=class extends (Ud=qa,Hd=[H],Vd=[H],Ud){constructor(e,t){var n=e,{element:r,effects:i=()=>[],handle:a}=n,o=Dl(n,[`element`,`effects`,`handle`]);super(wl({effects:()=>[...i(),()=>{let{manager:e}=this;if(!e)return;let t=(this.sensors?.map(la)??[...e.sensors]).map(t=>{let n=t instanceof Eo?t:e.registry.register(t.plugin),r=t instanceof Eo?void 0:t.options;return n.bind(this,r)});return function(){t.forEach(e=>e())}}]},o),t),Rl(this,Gd,Nl(Wd,8,this)),Nl(Wd,11,this),Rl(this,Kd,Nl(Wd,12,this)),Nl(Wd,15,this),this.element=r,this.handle=a}};Wd=Ol(Ud),Gd=new WeakMap,Kd=new WeakMap,Pl(Wd,4,`handle`,Hd,qd,Gd),Pl(Wd,4,`element`,Vd,qd,Kd),Ml(Wd,qd);var Jd,Yd,Xd,Zd,Qd,$d,ef,tf,nf,rf,af=class extends (Xd=so,Yd=[H],Jd=[H],Xd){constructor(e,t){var n=e,{element:r,effects:i=()=>[]}=n,a=Dl(n,[`element`,`effects`]);let{collisionDetector:o=dl}=a,s=e=>{let{manager:t,element:n}=this;if(!n||e===null){this.shape=void 0;return}if(!t)return;let r=new Qc(n),i=V(()=>this.shape);return r&&i?.equals(r)?i:(this.shape=r,r)},c=Vn(!1);super(Tl(wl({},a),{collisionDetector:o,effects:()=>[...i(),()=>{let{element:e,manager:t}=this;if(!t)return;let{dragOperation:n}=t,{source:r}=n;c.value=!!(r&&n.status.initialized&&e&&!this.disabled&&this.accepts(r))},()=>{let{element:e}=this;if(c.value&&e){let t=new pc(e,s);return()=>{t.disconnect(),this.shape=void 0}}},()=>{if(this.manager?.dragOperation.status.initialized)return()=>{this.shape=void 0}}]}),t),Rl(this,nf),Rl(this,Qd,Nl(Zd,8,this)),Nl(Zd,11,this),Rl(this,rf,Nl(Zd,12,this)),Nl(Zd,15,this),this.element=r,this.refreshShape=()=>s()}set element(e){zl(this,nf,e,tf)}get element(){return this.proxy??Ll(this,nf,ef)}};Zd=Ol(Xd),Qd=new WeakMap,nf=new WeakSet,rf=new WeakMap,$d=Pl(Zd,20,`#element`,Yd,nf,Qd),ef=$d.get,tf=$d.set,Pl(Zd,4,`proxy`,Jd,af,rf),Ml(Zd,af);var of=n(D(),1);function sf(e){return typeof e==`object`&&!!e&&`current`in e}function cf(e){if(e!=null)return sf(e)?e.current??void 0:e}var lf=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0?R.useLayoutEffect:R.useEffect;function uf(){let e=(0,R.useState)(0)[1];return(0,R.useCallback)(()=>{e(e=>e+1)},[e])}function df(e,t){let n=(0,R.useRef)(new Map),r=uf();return lf(()=>{if(!e){n.current.clear();return}return Zn(()=>{let i=!1,a=!1;for(let r of n.current){let[o]=r,s=V(()=>r[1]),c=e[o];s!==c&&(i=!0,n.current.set(o,c),a=t?.(o,s,c)??!1)}i&&(a?queueMicrotask(()=>(0,of.flushSync)(r)):r())})},[e]),(0,R.useMemo)(()=>e&&new Proxy(e,{get(e,t){let r=e[t];return n.current.set(t,r),r}}),[e])}function ff(e,t){e()}function pf(e){let t=(0,R.useRef)(e);return lf(()=>{t.current=e},[e]),t}function mf(e,t,n=R.useEffect,r=Object.is){let i=(0,R.useRef)(e);n(()=>{let n=i.current;r(e,n)||(i.current=e,t(e,n))},[t,e])}function hf(e,t){let n=(0,R.useRef)(cf(e));lf(()=>{let r=cf(e);r!==n.current&&(n.current=r,t(r))})}var gf=Object.defineProperty,_f=Object.defineProperties,vf=Object.getOwnPropertyDescriptors,yf=Object.getOwnPropertySymbols,bf=Object.prototype.hasOwnProperty,xf=Object.prototype.propertyIsEnumerable,Sf=(e,t,n)=>t in e?gf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Cf=(e,t)=>{for(var n in t||={})bf.call(t,n)&&Sf(e,n,t[n]);if(yf)for(var n of yf(t))xf.call(t,n)&&Sf(e,n,t[n]);return e},wf=(e,t)=>_f(e,vf(t)),Tf=(e,t)=>{var n={};for(var r in e)bf.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&yf)for(var r of yf(e))t.indexOf(r)<0&&xf.call(e,r)&&(n[r]=e[r]);return n},Ef=new Bd,Df=(0,R.createContext)(Ef),Of=(0,R.memo)((0,R.forwardRef)(({children:e},t)=>{let[n,r]=(0,R.useState)(0),i=(0,R.useRef)(null),a=(0,R.useRef)(null),o=(0,R.useMemo)(()=>({renderer:{get rendering(){return i.current??Promise.resolve()}},trackRendering(e){i.current||=new Promise(e=>{a.current=e}),(0,R.startTransition)(()=>{e(),r(e=>e+1)})}}),[]);return lf(()=>{var e;(e=a.current)==null||e.call(a),i.current=null},[e,n]),(0,R.useImperativeHandle)(t,()=>o),null})),kf=[void 0,Er];function Af(e){var t=e,{children:n,onCollision:r,onBeforeDragStart:i,onDragStart:a,onDragMove:o,onDragOver:s,onDragEnd:c}=t,l=Tf(t,[`children`,`onCollision`,`onBeforeDragStart`,`onDragStart`,`onDragMove`,`onDragOver`,`onDragEnd`]);let u=(0,R.useRef)(null),{plugins:d,modifiers:f,sensors:p}=l,m=Qo(d,zd.plugins),h=Qo(p,zd.sensors),g=Qo(f,zd.modifiers),_=pf(i),v=pf(a),y=pf(s),b=pf(o),x=pf(c),S=pf(r),C=jf(()=>l.manager??new Bd(l));return(0,R.useEffect)(()=>{if(!u.current)throw Error(`Renderer not found`);let{renderer:e,trackRendering:t}=u.current,{monitor:n}=C;C.renderer=e;let r=[n.addEventListener(`beforedragstart`,e=>{let n=_.current;n&&t(()=>n(e,C))}),n.addEventListener(`dragstart`,e=>v.current?.call(v,e,C)),n.addEventListener(`dragover`,e=>{let n=y.current;n&&t(()=>n(e,C))}),n.addEventListener(`dragmove`,e=>{let n=b.current;n&&t(()=>n(e,C))}),n.addEventListener(`dragend`,e=>{let n=x.current;n&&t(()=>n(e,C))}),n.addEventListener(`collision`,e=>S.current?.call(S,e,C))];return()=>r.forEach(e=>e())},[C]),mf(m,()=>C&&(C.plugins=m),...kf),mf(h,()=>C&&(C.sensors=h),...kf),mf(g,()=>C&&(C.modifiers=g),...kf),(0,z.jsxs)(Df.Provider,{value:C,children:[(0,z.jsx)(Of,{ref:u,children:n}),n]})}function jf(e){let t=(0,R.useRef)(null);return t.current||=e(),(0,R.useInsertionEffect)(()=>()=>t.current?.destroy(),[]),t.current}function Mf(){return(0,R.useContext)(Df)}function Nf(e){let t=Mf()??void 0,[n]=(0,R.useState)(()=>e(t));return n.manager!==t&&(n.manager=t),lf(n.register,[t,n]),n}function Pf(e){let{disabled:t,data:n,element:r,handle:i,id:a,modifiers:o,sensors:s,plugins:c}=e,l=Nf(t=>new qd(wf(Cf({},e),{register:!1,handle:cf(i),element:cf(r)}),t)),u=df(l,Ff);return mf(a,()=>l.id=a),hf(i,e=>l.handle=e),hf(r,e=>l.element=e),mf(n,()=>n&&(l.data=n)),mf(t,()=>l.disabled=t===!0),mf(s,()=>l.sensors=s),mf(o,()=>l.modifiers=o,void 0,Er),mf(c,()=>l.plugins=c,void 0,Er),mf(e.alignment,()=>l.alignment=e.alignment),{draggable:u,get isDragging(){return u.isDragging},get isDropping(){return u.isDropping},get isDragSource(){return u.isDragSource},handleRef:(0,R.useCallback)(e=>{l.handle=e??void 0},[l]),ref:(0,R.useCallback)(e=>{(e||!l.element?.isConnected||l.manager?.dragOperation.status.idle)&&(l.element=e??void 0)},[l])}}function Ff(e,t,n){return!(e!==`isDragSource`||n||!t)}var If=Object.create,Lf=Object.defineProperty,Rf=Object.getOwnPropertyDescriptor,zf=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),Bf=e=>{throw TypeError(e)},$=(e,t,n)=>t in e?Lf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Vf=e=>[,,,If(e?.[zf(`metadata`)]??null)],Hf=[`class`,`method`,`getter`,`setter`,`accessor`,`field`,`value`,`get`,`set`],Uf=e=>e!==void 0&&typeof e!=`function`?Bf(`Function expected`):e,Wf=(e,t,n,r,i)=>({kind:Hf[e],name:t,metadata:r,addInitializer:e=>n._?Bf(`Already initialized`):i.push(Uf(e||null))}),Gf=(e,t)=>$(t,zf(`metadata`),e[3]),Kf=(e,t,n,r)=>{for(var i=0,a=e[t>>1],o=a&&a.length;i<o;i++)a[i].call(n);return r},qf=(e,t,n,r,i,a)=>{for(var o,s,c,l,u=t&7,d=!1,f=!1,p=2,m=Hf[u+5],h=e[p]||(e[p]=[]),g=(i=i.prototype,Rf(i,n)),_=r.length-1;_>=0;_--)c=Wf(u,n,s={},e[3],h),c.static=d,c.private=f,l=c.access={has:e=>n in e},l.get=e=>e[n],o=(0,r[_])(g[m],c),s._=1,Uf(o)&&(g[m]=o);return g&&Lf(i,n,g),i},Jf=(e,t,n)=>t.has(e)||Bf(`Cannot `+n),Yf=(e,t,n)=>(Jf(e,t,`read from private field`),t.get(e)),Xf=(e,t,n)=>t.has(e)?Bf(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Zf=(e,t,n,r)=>(Jf(e,t,`write to private field`),t.set(e,n),n),Qf=class e{constructor(e,t){this.x=e,this.y=t}static delta(t,n){return new e(t.x-n.x,t.y-n.y)}static distance(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}static equals(e,t){return e.x===t.x&&e.y===t.y}static from({x:t,y:n}){return new e(t,n)}},$f,ep,tp,np,rp,ip=class extends (tp=Xr,ep=[Dr],$f=[Dr],tp){constructor(e){let t=Qf.from(e);super(t,(e,t)=>Qf.equals(e,t)),Kf(rp,5,this),Xf(this,np,0),this.velocity={x:0,y:0}}get delta(){return Qf.delta(this.current,this.initial)}get direction(){let{current:e,previous:t}=this;if(!t)return null;let n={x:e.x-t.x,y:e.y-t.y};return!n.x&&!n.y?null:Math.abs(n.x)>Math.abs(n.y)?n.x>0?`right`:`left`:n.y>0?`down`:`up`}get current(){return super.current}set current(e){let{current:t}=this,n=Qf.from(e),r={x:n.x-t.x,y:n.y-t.y},i=Date.now(),a=i-Yf(this,np),o=e=>Math.round(e/a*100);kn(()=>{Zf(this,np,i),this.velocity={x:o(r.x),y:o(r.y)},super.current=n})}reset(e=this.defaultValue){super.reset(Qf.from(e)),this.velocity={x:0,y:0}}};rp=Vf(tp),np=new WeakMap,qf(rp,2,`delta`,ep,ip),qf(rp,2,`direction`,$f,ip),Gf(rp,ip);var ap=(e=>(e.Horizontal=`x`,e.Vertical=`y`,e))(ap||{});Object.values(ap);var op=({dragOperation:e,droppable:t})=>{let n=e.position.current;if(!n)return null;let{id:r}=t;return t.shape&&t.shape.containsPoint(n)?{id:r,value:1/Qf.distance(t.shape.center,n),type:mo.PointerIntersection,priority:po.High}:null},sp=({dragOperation:e,droppable:t})=>{let{shape:n}=e;if(!t.shape||!n?.current)return null;let r=n.current.intersectionArea(t.shape);if(r){let{position:i}=e,a=Qf.distance(t.shape.center,i.current),o=r/(n.current.area+t.shape.area-r)/a;return{id:t.id,value:o,type:mo.ShapeIntersection,priority:po.Normal}}return null},cp=e=>op(e)??sp(e);function lp(e){let{collisionDetector:t,data:n,disabled:r,element:i,id:a,accept:o,type:s}=e,c=Nf(t=>new af(wf(Cf({},e),{register:!1,element:cf(i)}),t)),l=df(c);return mf(a,()=>c.id=a),hf(i,e=>c.element=e),mf(o,()=>c.accept=o,void 0,Er),mf(t,()=>c.collisionDetector=t??cp),mf(n,()=>n&&(c.data=n)),mf(r,()=>c.disabled=r===!0),mf(s,()=>c.type=s),{droppable:l,get isDropTarget(){return l.isDropTarget},ref:(0,R.useCallback)(e=>{(e||!c.element?.isConnected||c.manager?.dragOperation.status.idle)&&(c.element=e??void 0)},[c])}}var up=Object.create,dp=Object.defineProperty,fp=Object.defineProperties,pp=Object.getOwnPropertyDescriptor,mp=Object.getOwnPropertyDescriptors,hp=Object.getOwnPropertySymbols,gp=Object.prototype.hasOwnProperty,_p=Object.prototype.propertyIsEnumerable,vp=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),yp=e=>{throw TypeError(e)},bp=(e,t,n)=>t in e?dp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,xp=(e,t)=>{for(var n in t||={})gp.call(t,n)&&bp(e,n,t[n]);if(hp)for(var n of hp(t))_p.call(t,n)&&bp(e,n,t[n]);return e},Sp=(e,t)=>fp(e,mp(t)),Cp=(e,t)=>{var n={};for(var r in e)gp.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&hp)for(var r of hp(e))t.indexOf(r)<0&&_p.call(e,r)&&(n[r]=e[r]);return n},wp=e=>[,,,up(null)],Tp=[`class`,`method`,`getter`,`setter`,`accessor`,`field`,`value`,`get`,`set`],Ep=e=>e!==void 0&&typeof e!=`function`?yp(`Function expected`):e,Dp=(e,t,n,r,i)=>({kind:Tp[e],name:t,metadata:r,addInitializer:e=>n._?yp(`Already initialized`):i.push(Ep(e||null))}),Op=(e,t)=>bp(t,vp(`metadata`),e[3]),kp=(e,t,n,r)=>{for(var i=0,a=e[t>>1],o=a&&a.length;i<o;i++)t&1?a[i].call(n):r=a[i].call(n,r);return r},Ap=(e,t,n,r,i,a)=>{for(var o,s,c,l,u,d=t&7,f=!1,p=!1,m=e.length+1,h=Tp[d+5],g=e[m-1]=[],_=e[m]||(e[m]=[]),v=(i=i.prototype,pp({get[n](){return Mp(this,a)},set[n](e){return Pp(this,a,e)}},n)),y=r.length-1;y>=0;y--)l=Dp(d,n,c={},e[3],_),l.static=f,l.private=p,u=l.access={has:e=>n in e},u.get=e=>e[n],u.set=(e,t)=>e[n]=t,s=(0,r[y])({get:v.get,set:v.set},l),c._=1,s===void 0?Ep(s)&&(v[h]=s):typeof s!=`object`||!s?yp(`Object expected`):(Ep(o=s.get)&&(v.get=o),Ep(o=s.set)&&(v.set=o),Ep(o=s.init)&&g.unshift(o));return v&&dp(i,n,v),i},jp=(e,t,n)=>t.has(e)||yp(`Cannot `+n),Mp=(e,t,n)=>(jp(e,t,`read from private field`),t.get(e)),Np=(e,t,n)=>t.has(e)?yp(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Pp=(e,t,n,r)=>(jp(e,t,`write to private field`),t.set(e,n),n);function Fp(e){return e instanceof gm||e instanceof hm}var Ip=10,Lp=class extends ma{constructor(e){super(e);let t=Zn(()=>{let{dragOperation:t}=e;if(rl(t.activatorEvent)&&Fp(t.source)&&t.status.initialized){let t=e.registry.plugins.get(sd);if(t)return t.disable(),()=>t.enable()}}),n=e.monitor.addEventListener(`dragmove`,(e,t)=>{queueMicrotask(()=>{if(this.disabled||e.defaultPrevented||!e.nativeEvent)return;let{dragOperation:n}=t;if(!rl(e.nativeEvent)||!Fp(n.source)||!n.shape)return;let{actions:r,collisionObserver:i,registry:a}=t,{by:o}=e;if(!o)return;let s=Rp(o),{source:c,target:l}=n,{center:u}=n.shape.current,d=[],f=[];kn(()=>{for(let e of a.droppables){let{id:t}=e;if(!e.accepts(c)||t===l?.id&&Fp(e)||!e.element)continue;let n=e.shape,r=new Qc(e.element,{getBoundingClientRect:e=>vs(e,void 0,.2)});r.height&&r.width&&(s==`down`&&u.y+Ip<r.center.y||s==`up`&&u.y-Ip>r.center.y||s==`left`&&u.x-Ip>r.center.x||s==`right`&&u.x+Ip<r.center.x)&&(d.push(e),e.shape=r,f.push(()=>e.shape=n))}}),e.preventDefault(),i.disable();let p=i.computeCollisions(d,fl);kn(()=>f.forEach(e=>e()));let[m]=p;if(!m)return;let{id:h}=m,{index:g,group:_}=c.sortable;r.setDropTarget(h).then(()=>{let{source:e,target:t,shape:a}=n;if(!e||!Fp(e)||!a)return;let{index:o,group:s,target:c}=e.sortable,l=g!==o||_!==s,u=l?c:t?.element;if(!u)return;Bc(u);let d=new Qc(u);if(!d)return;let f=Ei.delta(d,Ei.from(a.current.boundingRectangle),e.alignment);r.move({by:f}),l?r.setDropTarget(e.id).then(()=>i.enable()):i.enable()})})});this.destroy=()=>{n(),t()}}};function Rp(e){let{x:t,y:n}=e;if(t>0)return`right`;if(t<0)return`left`;if(n>0)return`down`;if(n<0)return`up`}var zp=Object.defineProperty,Bp=Object.defineProperties,Vp=Object.getOwnPropertyDescriptors,Hp=Object.getOwnPropertySymbols,Up=Object.prototype.hasOwnProperty,Wp=Object.prototype.propertyIsEnumerable,Gp=(e,t,n)=>t in e?zp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Kp=(e,t)=>{for(var n in t||={})Up.call(t,n)&&Gp(e,n,t[n]);if(Hp)for(var n of Hp(t))Wp.call(t,n)&&Gp(e,n,t[n]);return e},qp=(e,t)=>Bp(e,Vp(t));function Jp(e,t,n){if(t===n)return e;let r=e.slice();return r.splice(n,0,r.splice(t,1)[0]),r}function Yp(e){return`initialIndex`in e&&typeof e.initialIndex==`number`&&`index`in e&&typeof e.index==`number`}function Xp(e,t,n){let{source:r,target:i,canceled:a}=t.operation;if(!r||!i||a)return`preventDefault`in t&&t.preventDefault(),e;let o=(e,t)=>e===t||typeof e==`object`&&`id`in e&&e.id===t;if(Array.isArray(e)){let s=e.findIndex(e=>o(e,r.id)),c=e.findIndex(e=>o(e,i.id));if(s===-1||c===-1){if(Yp(r)){let i=r.initialIndex,a=r.index;return i===a||i<0||i>=e.length?(`preventDefault`in t&&t.preventDefault(),e):n(e,i,a)}return e}if(!a&&`index`in r&&typeof r.index==`number`){let t=r.index;if(t!==s)return n(e,s,t)}return n(e,s,c)}let s=Object.entries(e),c=-1,l,u=-1,d;for(let[e,t]of s)if(c===-1&&(c=t.findIndex(e=>o(e,r.id)),c!==-1&&(l=e)),u===-1&&(u=t.findIndex(e=>o(e,i.id)),u!==-1&&(d=e)),c!==-1&&u!==-1)break;if(c===-1&&Yp(r)){let i=r.initialGroup,a=r.initialIndex,o=r.group,s=r.index;if(i==null||o==null||!(i in e)||!(o in e)||i===o&&a===s)return`preventDefault`in t&&t.preventDefault(),e;if(i===o)return qp(Kp({},e),{[i]:n(e[i],a,s)});let c=e[i][a];return qp(Kp({},e),{[i]:[...e[i].slice(0,a),...e[i].slice(a+1)],[o]:[...e[o].slice(0,s),c,...e[o].slice(s)]})}if(!r.manager)return e;let{dragOperation:f}=r.manager,p=f.shape?.current.center??f.position.current;if(d==null&&i.id in e){let t=i.shape&&p.y>i.shape.center.y?e[i.id].length:0;d=i.id,u=t}if(l==null||d==null||l===d&&c===u){if(l!=null&&l===d&&c===u&&Yp(r)){let t=r.group!=null&&r.group!==l,i=r.index!==c;if(t||i){let t=r.group??l;if(t in e){if(l===t)return qp(Kp({},e),{[l]:n(e[l],c,r.index)});let i=e[l][c];return qp(Kp({},e),{[l]:[...e[l].slice(0,c),...e[l].slice(c+1)],[t]:[...e[t].slice(0,r.index),i,...e[t].slice(r.index)]})}}}return`preventDefault`in t&&t.preventDefault(),e}if(l===d)return qp(Kp({},e),{[l]:n(e[l],c,u)});let m=i.shape&&Math.round(p.y)>Math.round(i.shape.center.y)?1:0,h=e[l][c];return qp(Kp({},e),{[l]:[...e[l].slice(0,c),...e[l].slice(c+1)],[d]:[...e[d].slice(0,u+m),h,...e[d].slice(u+m)]})}function Zp(e,t){return Xp(e,t,Jp)}var Qp=`__default__`,$p=class extends ma{constructor(e){super(e);let t=()=>{let t=new Map;for(let n of e.registry.droppables)if(n instanceof gm){let{sortable:e}=n,{group:r}=e,i=t.get(r);i||(i=new Set,t.set(r,i)),i.add(e)}for(let[e,n]of t)t.set(e,new Set(nm(n)));return t},n=[e.monitor.addEventListener(`dragover`,(e,n)=>{if(this.disabled)return;let{dragOperation:r}=n,{source:i,target:a}=r;if(!Fp(i)||!Fp(a)||i.sortable===a.sortable)return;let o=t(),s=i.sortable.group===a.sortable.group,c=o.get(i.sortable.group),l=s?c:o.get(a.sortable.group);c&&l&&queueMicrotask(()=>{e.defaultPrevented||n.renderer.rendering.then(()=>{let r=t();for(let[e,t]of o.entries()){let n=Array.from(t).entries();for(let[t,i]of n)if(i.index!==t||i.group!==e||!r.get(e)?.has(i))return}let u=i.sortable.element,d=a.sortable.element;if(!d||!u||!s&&a.id===i.sortable.group)return;let f=nm(c),p=s?f:nm(l),m=i.sortable.group??Qp,h=a.sortable.group??Qp,g={[m]:f,[h]:p},_=Zp(g,e);if(g===_)return;let v=_[h].indexOf(i.sortable),y=_[h].indexOf(a.sortable);n.collisionObserver.disable(),em(u,v,d,y),kn(()=>{for(let[e,t]of _[m].entries())t.index=e;if(!s)for(let[e,t]of _[h].entries())t.group=a.sortable.group,t.index=e}),n.actions.setDropTarget(i.id).then(()=>n.collisionObserver.enable())})})}),e.monitor.addEventListener(`dragend`,(e,n)=>{if(!e.canceled)return;let{dragOperation:r}=n,{source:i}=r;Fp(i)&&(i.sortable.initialIndex!==i.sortable.index||i.sortable.initialGroup!==i.sortable.group)&&queueMicrotask(()=>{let e=t(),r=e.get(i.sortable.initialGroup);r&&n.renderer.rendering.then(()=>{for(let[t,n]of e.entries()){let e=Array.from(n).entries();for(let[n,r]of e)if(r.index!==n||r.group!==t)return}let t=nm(r),n=i.sortable.element,a=t[i.sortable.initialIndex],o=a?.element;a&&o&&n&&(em(n,a.index,o,i.index),kn(()=>{for(let[t,n]of e.entries()){let e=Array.from(n).values();for(let t of e)t.index=t.initialIndex,t.group=t.initialGroup}}))})})})];this.destroy=()=>{for(let e of n)e()}}};function em(e,t,n,r){let i=r<t?`afterend`:`beforebegin`;n.insertAdjacentElement(i,e)}function tm(e,t){return e.index-t.index}function nm(e){return Array.from(e).sort(tm)}var rm=[Lp,$p],im={duration:250,easing:`cubic-bezier(0.25, 1, 0.5, 1)`,idle:!1},am=new $r,om,sm=[H],cm,lm,um,dm,fm,pm;om=[H];var mm=class{constructor(e,t){Np(this,lm,kp(cm,8,this)),kp(cm,11,this),Np(this,um),Np(this,dm),Np(this,fm,kp(cm,12,this)),kp(cm,15,this),Np(this,pm),this.register=()=>(kn(()=>{var e,t;(e=this.manager)==null||e.registry.register(this.droppable),(t=this.manager)==null||t.registry.register(this.draggable)}),()=>this.unregister()),this.unregister=()=>{kn(()=>{var e,t;(e=this.manager)==null||e.registry.unregister(this.droppable),(t=this.manager)==null||t.registry.unregister(this.draggable)})},this.destroy=()=>{kn(()=>{this.droppable.destroy(),this.draggable.destroy()})};var n=e,{effects:r=()=>[],group:i,index:a,sensors:o,type:s,transition:c=im,plugins:l}=n,u=Cp(n,[`effects`,`group`,`index`,`sensors`,`type`,`transition`,`plugins`]);let d=Qo(l,rm);this.droppable=new gm(u,t,this),this.draggable=new hm(Sp(xp({},u),{plugins:d,effects:()=>[()=>{let e=this.manager?.dragOperation.status;e?.initializing&&this.id===this.manager?.dragOperation.source?.id&&am.clear(this.manager),e?.dragging&&am.set(this.manager,this.id,V(()=>({initialIndex:this.index,initialGroup:this.group})))},()=>{let{index:e,group:t,manager:n}=this,r=Mp(this,dm),i=Mp(this,um);(e!==r||t!==i)&&(Pp(this,dm,e),Pp(this,um,t),this.animate())},()=>{let{target:e}=this,{isDragSource:t}=this.draggable;(this.draggable.pluginConfig(Uu)?.feedback??`default`)===`move`&&t&&(this.droppable.disabled=!e)},...r()],type:s,sensors:o}),t,this),Pp(this,pm,u.element),this.manager=t,this.index=a,Pp(this,dm,a),this.group=i,Pp(this,um,i),this.type=s,this.transition=c}get initialIndex(){return am.get(this.manager,this.id)?.initialIndex??this.index}get initialGroup(){return am.get(this.manager,this.id)?.initialGroup??this.group}animate(){V(()=>{let{manager:e,transition:t}=this,{shape:n}=this.droppable;if(!e)return;let{idle:r}=e.dragOperation.status;n&&t&&(!r||t.idle)&&e.renderer.rendering.then(()=>{let{element:r}=this;if(!r)return;for(let e of r.getAnimations())`transitionProperty`in e&&(e.transitionProperty===`transform`||e.transitionProperty===`translate`||e.transitionProperty===`scale`)&&e.cancel();let i=this.refreshShape();if(!i)return;let a={x:n.boundingRectangle.left-i.boundingRectangle.left,y:n.boundingRectangle.top-i.boundingRectangle.top},{translate:o}=wc(r),s=Kc(r,o,!1),c=Kc(r,o);if(a.x||a.y){let n=Es(us(r))?Sp(xp({},t),{duration:0}):t;Gc({element:r,keyframes:{translate:[`${s.x+a.x}px ${s.y+a.y}px ${s.z}`,`${c.x}px ${c.y}px ${c.z}`]},options:n}).then(()=>{e.dragOperation.status.dragging||(this.droppable.shape=void 0)})}})})}get manager(){return this.draggable.manager}set manager(e){kn(()=>{this.draggable.manager=e,this.droppable.manager=e})}set element(e){kn(()=>{let t=Mp(this,pm),n=this.droppable.element,r=this.draggable.element;(!n||n===t)&&(this.droppable.element=e),(!r||r===t)&&(this.draggable.element=e),Pp(this,pm,e)})}get element(){let e=Mp(this,pm);if(e)return Ms.get(e)??e??this.droppable.element}set target(e){this.droppable.element=e}get target(){return this.droppable.element}set source(e){this.draggable.element=e}get source(){return this.draggable.element}get disabled(){return this.draggable.disabled&&this.droppable.disabled}set plugins(e){this.draggable.plugins=Qo(e,rm)}set disabled(e){kn(()=>{this.droppable.disabled=e,this.draggable.disabled=e})}set data(e){kn(()=>{this.droppable.data=e,this.draggable.data=e})}set handle(e){this.draggable.handle=e}set id(e){this.droppable.id=e,this.draggable.id=e}get id(){return this.droppable.id}set sensors(e){this.draggable.sensors=e}set modifiers(e){this.draggable.modifiers=e}set collisionPriority(e){this.droppable.collisionPriority=e}set collisionDetector(e){this.droppable.collisionDetector=e??dl}set alignment(e){this.draggable.alignment=e}get alignment(){return this.draggable.alignment}set type(e){kn(()=>{this.droppable.type=e,this.draggable.type=e})}get type(){return this.draggable.type}set accept(e){this.droppable.accept=e}get accept(){return this.droppable.accept}get isDropTarget(){return this.droppable.isDropTarget}get isDragSource(){return this.draggable.isDragSource}get isDragging(){return this.draggable.isDragging}get isDropping(){return this.draggable.isDropping}get status(){return this.draggable.status}refreshShape(){return this.droppable.refreshShape()}accepts(e){return this.droppable.accepts(e)}};cm=wp(),lm=new WeakMap,um=new WeakMap,dm=new WeakMap,fm=new WeakMap,pm=new WeakMap,Ap(cm,4,`index`,sm,mm,lm),Ap(cm,4,`group`,om,mm,fm),Op(cm,mm);var hm=class extends qd{constructor(e,t,n){super(e,t),this.sortable=n}get index(){return this.sortable.index}get initialIndex(){return this.sortable.initialIndex}get group(){return this.sortable.group}get initialGroup(){return this.sortable.initialGroup}},gm=class extends af{constructor(e,t,n){super(e,t),this.sortable=n}get index(){return this.sortable.index}get group(){return this.sortable.group}},_m=Object.defineProperty,vm=Object.defineProperties,ym=Object.getOwnPropertyDescriptors,bm=Object.getOwnPropertySymbols,xm=Object.prototype.hasOwnProperty,Sm=Object.prototype.propertyIsEnumerable,Cm=(e,t,n)=>t in e?_m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,wm=(e,t)=>{for(var n in t||={})xm.call(t,n)&&Cm(e,n,t[n]);if(bm)for(var n of bm(t))Sm.call(t,n)&&Cm(e,n,t[n]);return e},Tm=(e,t)=>vm(e,ym(t));function Em(e){let{accept:t,collisionDetector:n,collisionPriority:r,id:i,data:a,element:o,handle:s,index:c,group:l,disabled:u,modifiers:d,sensors:f,target:p,type:m,plugins:h}=e,g=wm(wm({},im),e.transition),_=Nf(t=>new mm(Tm(wm({},e),{transition:g,register:!1,handle:cf(s),element:cf(o),target:cf(p)}),t)),v=df(_,Dm);return mf(i,()=>_.id=i),lf(()=>{kn(()=>{_.group=l,_.index=c})},[_,l,c]),mf(m,()=>_.type=m),mf(t,()=>_.accept=t,void 0,Er),mf(a,()=>a&&(_.data=a)),mf(c,()=>{_.manager?.dragOperation.status.idle&&g?.idle&&_.refreshShape()},ff),hf(s,e=>_.handle=e),hf(o,e=>_.element=e),hf(p,e=>_.target=e),mf(u,()=>_.disabled=u===!0),mf(f,()=>_.sensors=f),mf(n,()=>_.collisionDetector=n),mf(r,()=>_.collisionPriority=r),mf(h,()=>_.plugins=h,void 0,Er),mf(g,()=>_.transition=g,void 0,Er),mf(d,()=>_.modifiers=d,void 0,Er),mf(e.alignment,()=>_.alignment=e.alignment),{sortable:v,get isDragging(){return v.isDragging},get isDropping(){return v.isDropping},get isDragSource(){return v.isDragSource},get isDropTarget(){return v.isDropTarget},handleRef:(0,R.useCallback)(e=>{_.handle=e??void 0},[_]),ref:(0,R.useCallback)(e=>{(e||!_.element?.isConnected||_.manager?.dragOperation.status.idle)&&(_.element=e??void 0)},[_]),sourceRef:(0,R.useCallback)(e=>{(e||!_.source?.isConnected||_.manager?.dragOperation.status.idle)&&(_.source=e??void 0)},[_]),targetRef:(0,R.useCallback)(e=>{(e||!_.target?.isConnected||_.manager?.dragOperation.status.idle)&&(_.target=e??void 0)},[_])}}function Dm(e,t,n){return!(e!==`isDragSource`||n||!t)}function Om(e,t,n){var r=this,i=(0,R.useRef)(null),a=(0,R.useRef)(0),o=(0,R.useRef)(null),s=(0,R.useRef)([]),c=(0,R.useRef)(),l=(0,R.useRef)(),u=(0,R.useRef)(e),d=(0,R.useRef)(!0);(0,R.useEffect)(function(){u.current=e},[e]);var f=!t&&t!==0&&typeof window<`u`;if(typeof e!=`function`)throw TypeError(`Expected a function`);t=+t||0;var p=!!(n||={}).leading,m=!(`trailing`in n)||!!n.trailing,h=`maxWait`in n,g=h?Math.max(+n.maxWait||0,t):null;return(0,R.useEffect)(function(){return d.current=!0,function(){d.current=!1}},[]),(0,R.useMemo)(function(){var e=function(e){var t=s.current,n=c.current;return s.current=c.current=null,a.current=e,l.current=u.current.apply(n,t)},n=function(e,t){f&&cancelAnimationFrame(o.current),o.current=f?requestAnimationFrame(e):setTimeout(e,t)},_=function(e){if(!d.current)return!1;var n=e-i.current;return!i.current||n>=t||n<0||h&&e-a.current>=g},v=function(t){return o.current=null,m&&s.current?e(t):(s.current=c.current=null,l.current)},y=function e(){var r=Date.now();if(_(r))return v(r);if(d.current){var o=t-(r-i.current);n(e,h?Math.min(o,g-(r-a.current)):o)}},b=function(){var u=Date.now(),f=_(u);if(s.current=[].slice.call(arguments),c.current=r,i.current=u,f){if(!o.current&&d.current)return a.current=i.current,n(y,t),p?e(i.current):l.current;if(h)return n(y,t),e(i.current)}return o.current||n(y,t),l.current};return b.cancel=function(){o.current&&(f?cancelAnimationFrame(o.current):clearTimeout(o.current)),a.current=0,s.current=i.current=c.current=o.current=null},b.isPending=function(){return!!o.current},b.flush=function(){return o.current?v(Date.now()):l.current},b},[p,h,t,g,m,f])}function km(e,t){return e===t}function Am(e){return typeof e==`function`?function(){return e}:e}function jm(e,t,n){var r,i,a=n&&n.equalityFn||km,o=(r=(0,R.useState)(Am(e)),i=r[1],[r[0],(0,R.useCallback)(function(e){return i(Am(e))},[])]),s=o[0],c=o[1],l=Om((0,R.useCallback)(function(e){return c(e)},[c]),t,n),u=(0,R.useRef)(e);return a(u.current,e)||(l(e),u.current=e),[s,l]}function Mm(e){return typeof e==`object`?e.key:e}function Nm(e,t){let n=e.length;return new Proxy(e,{get(e,r,i){if(typeof r==`string`){let i=r.charCodeAt(0);if(i>=48&&i<=57){let i=+r;if(Number.isInteger(i)&&i>=0&&i<n){let n=e[i];if(typeof n!=`object`){let r=t[i*2];n=e[i]={index:i,key:n,start:r,size:t[i*2+1],end:r+t[i*2+1],lane:0}}return n}}if(r===`length`)return n}return Reflect.get(e,r,i)}})}function Pm(e,t,n){let r=n.initialDeps??[],i,a=!0;function o(){let o=e();return o.length!==r.length||o.some((e,t)=>r[t]!==e)?(r=o,i=t(...o),n?.onChange&&!(a&&n.skipInitialOnChange)&&n.onChange(i),a=!1,i):i}return o.updateDeps=e=>{r=e},o}function Fm(e,t){if(e===void 0)throw Error(`Unexpected undefined${t?`: ${t}`:``}`);return e}var Im=(e,t)=>Math.abs(e-t)<1.01,Lm=(e,t,n)=>{let r;return Object.assign(function(...i){e.clearTimeout(r),r=e.setTimeout(()=>t.apply(this,i),n)},{cancel:()=>{e.clearTimeout(r)}})},Rm,zm=()=>{if(Rm!==void 0)return Rm;if(typeof navigator>`u`)return Rm=!1;if(/iP(hone|od|ad)/.test(navigator.userAgent))return Rm=!0;let e=navigator.maxTouchPoints;return Rm=navigator.platform===`MacIntel`&&e!==void 0&&e>0},Bm=e=>{let{offsetWidth:t,offsetHeight:n}=e;return{width:t,height:n}},Vm=e=>e,Hm=e=>{let t=Math.max(e.startIndex-e.overscan,0),n=Math.min(e.endIndex+e.overscan,e.count-1)-t+1,r=Array(n);for(let e=0;e<n;e++)r[e]=t+e;return r},Um=(e,t)=>{let n=e.scrollElement;if(!n)return;let r=e.targetWindow;if(!r)return;let i=e=>{let{width:n,height:r}=e;t({width:Math.round(n),height:Math.round(r)})};if(i(Bm(n)),!r.ResizeObserver)return()=>{};let a=new r.ResizeObserver(t=>{let r=()=>{let e=t[0];if(e?.borderBoxSize){let t=e.borderBoxSize[0];if(t){i({width:t.inlineSize,height:t.blockSize});return}}i(Bm(n))};e.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(r):r()});return a.observe(n,{box:`border-box`}),()=>{a.unobserve(n)}},Wm={passive:!0},Gm=(e,t)=>{let n=e.scrollElement;if(!n)return;let r=()=>{t({width:n.innerWidth,height:n.innerHeight})};return r(),n.addEventListener(`resize`,r,Wm),()=>{n.removeEventListener(`resize`,r)}},Km=typeof window>`u`||`onscrollend`in window,qm=(e,t,n)=>{let r=e.scrollElement;if(!r)return;let i=e.targetWindow;if(!i)return;let a=e.options.useScrollendEvent&&Km,o=0,s=a?null:Lm(i,()=>t(n(r),!1),e.options.isScrollingResetDelay),c=e=>()=>{o=n(r),s?.(),t(o,e)},l=c(!0),u=c(!1);return r.addEventListener(`scroll`,l,Wm),a&&r.addEventListener(`scrollend`,u,Wm),()=>{r.removeEventListener(`scroll`,l),a&&r.removeEventListener(`scrollend`,u),s?.cancel()}},Jm=(e,t)=>qm(e,t,t=>{let{horizontal:n,isRtl:r}=e.options;return n?t.scrollLeft*(r&&-1||1):t.scrollTop}),Ym=(e,t)=>qm(e,t,t=>e.options.horizontal?t.scrollX:t.scrollY),Xm=(e,t,n)=>{if(n.options.useCachedMeasurements){let t=n.indexFromElement(e),r=n.options.getItemKey(t);return n.itemSizeCache.get(r)??n.options.estimateSize(t)}if(t?.borderBoxSize){let e=t.borderBoxSize[0];if(e)return Math.round(e[n.options.horizontal?`inlineSize`:`blockSize`])}if(!t){let t=n.indexFromElement(e),r=n.options.getItemKey(t),i=n.itemSizeCache.get(r);if(i!==void 0)return i}return e[n.options.horizontal?`offsetWidth`:`offsetHeight`]},Zm=(e,{adjustments:t=0,behavior:n},r)=>{var i,a;(a=(i=r.scrollElement)?.scrollTo)==null||a.call(i,{[r.options.horizontal?`left`:`top`]:e+t,behavior:n})},Qm=Zm,$m=Zm;function eh(e,t,n,r){if(t===0)return!1;let i=r(0),a=new Set,o=0;for(;o<e;){let e=n(o);if(e===i)break;a.add(e),o++}let s=e-o;if(s===0||s>=t)return!1;for(let e=0;e<s;e++)if(r(e)!==n(o+e))return!1;for(let e=s;e<t;e++)if(a.has(r(e)))return!1;return!0}var th=class{constructor(e){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollState=null,this.measurementsCache=[],this._singleLaneMeasurements=null,this.itemSizeCache=new Map,this.itemSizeCacheVersion=0,this.laneAssignments=new Map,this.pendingMin=null,this.prevLanes=void 0,this.lanesChangedFlag=!1,this.lanesSettling=!1,this.pendingScrollAnchor=null,this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this._iosDeferredAdjustment=0,this._iosTouching=!1,this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._intendedScrollOffset=null,this._clampedAdjustment=null,this.elementsCache=new Map,this.now=()=>{var e;return((e=this.targetWindow?.performance)?.now)?.call(e)??Date.now()},this.observer=(()=>{let e=null,t=()=>e||(!this.targetWindow||!this.targetWindow.ResizeObserver?null:e=new this.targetWindow.ResizeObserver(e=>{e.forEach(e=>{let t=()=>{let t=e.target,n=this.indexFromElement(t);if(!t.isConnected){this.observer.unobserve(t);for(let[e,n]of this.elementsCache)if(n===t){this.elementsCache.delete(e);break}return}this.isIndexInRange(n)&&this.shouldMeasureDuringScroll(n)&&this.resizeItem(n,this.options.measureElement(t,e,this))};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(t):t()})}));return{disconnect:()=>{var n;(n=t())==null||n.disconnect(),e=null},observe:e=>t()?.observe(e,{box:`border-box`}),unobserve:e=>t()?.unobserve(e)}})(),this.range=null,this.setOptions=e=>{let t={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:Vm,rangeExtractor:Hm,onChange:()=>{},measureElement:Xm,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:`data-index`,initialMeasurementsCache:[],lanes:1,anchorTo:`start`,followOnAppend:!1,scrollEndThreshold:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,laneAssignmentMode:`estimate`,useCachedMeasurements:!1};for(let n in e){let r=e[n];r!==void 0&&(t[n]=r)}let n=this.options,r=null,i=null,a=!1;if(n!==void 0&&n.enabled&&t.enabled&&t.anchorTo===`end`&&this.scrollElement!==null){let e=n.count,o=t.count,s=this.getMeasurements(),c=this._singleLaneMeasurements?.items??s,l=e=>Mm(c[e]),u=e>0?l(0):null,d=e>0?l(e-1):null;if(o!==e||e>0&&o>0&&(t.getItemKey(0)!==u||t.getItemKey(o-1)!==d)){a=!0;let c=e>0?this.getVirtualItemForOffset(this.getScrollOffset())??s[0]:null;c&&(r=[c.key,this.getScrollOffset()-c.start]);let u=t.followOnAppend===!0?`auto`:t.followOnAppend||null;u&&o>0&&this.isAtEnd(n.scrollEndThreshold)&&(e===0||t.getItemKey(o-1)!==d)&&(o>e||eh(e,o,l,t.getItemKey))&&(i=u)}}this.options=t,a&&(this.pendingMin=0,this.itemSizeCacheVersion++);let o=!1,s=0;if(r&&this.scrollOffset!==null){let[e,t]=r,n=this.getMeasurements(),{count:a,getItemKey:c}=this.options,l=0;for(;l<a&&c(l)!==e;)l++;if(l<a){let e=n[l];if(e){let n=Math.max(0,e.start+t);!i&&n!==this.scrollOffset&&(s=n-this.scrollOffset,this.scrollOffset=n,o=!0)}}}(o||i)&&(this.pendingScrollAnchor=[o?r[0]:null,o?r[1]:0,i,s])},this.notify=e=>{var t,n;(n=(t=this.options).onChange)==null||n.call(t,this,e)},this.maybeNotify=Pm(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),e=>{this.notify(e)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.observer.disconnect(),this.rafId!=null&&this.targetWindow&&(this.targetWindow.cancelAnimationFrame(this.rafId),this.rafId=null),this.scrollState=null,this.isScrolling=!1,this.scrollDirection=null,this._iosDeferredAdjustment=0,this._iosTouching=!1,this._iosJustTouchEnded=!1,this._clampedAdjustment=null,this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{let e=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==e){if(this.cleanup(),!e){this.maybeNotify();return}if(this.scrollElement=e,this.targetWindow=this.scrollElement&&`ownerDocument`in this.scrollElement?this.scrollElement.ownerDocument.defaultView:this.scrollElement?.window??null,this.elementsCache.forEach(e=>{this.observer.observe(e)}),this.unsubs.push(this.options.observeElementRect(this,e=>{this.scrollRect=e,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(e,t)=>{if(t&&this._intendedScrollOffset===null&&e===this.scrollOffset)return;this._intendedScrollOffset!==null&&Math.abs(e-this._intendedScrollOffset)<1.5&&(e=this._intendedScrollOffset),this._intendedScrollOffset=null,this._clampedAdjustment!==null&&Math.abs(e-this._clampedAdjustment.maxAtWrite)>=1.5&&(this._clampedAdjustment=null),this.scrollAdjustments=0;let n=this.getScrollOffset();this.scrollDirection=t?n===e?this.scrollDirection:n<e?`forward`:`backward`:null,this.scrollOffset=e,this.isScrolling=t,this._flushIosDeferredIfReady(),this.scrollState&&this.scheduleScrollReconcile(),this.maybeNotify()})),`addEventListener`in this.scrollElement){let e=this.scrollElement,t=()=>{this._iosTouching=!0,this._iosJustTouchEnded=!1,this._iosTouchEndTimerId!==null&&this.targetWindow!=null&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)},n=()=>{this._iosTouching=!1,zm()&&this.targetWindow!=null&&(this._iosJustTouchEnded=!0,this._iosTouchEndTimerId=this.targetWindow.setTimeout(()=>{this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._flushIosDeferredIfReady()},150))};e.addEventListener(`touchstart`,t,Wm),e.addEventListener(`touchend`,n,Wm),this.unsubs.push(()=>{e.removeEventListener(`touchstart`,t),e.removeEventListener(`touchend`,n),this._iosTouchEndTimerId!==null&&this.targetWindow!=null&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)})}this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})}let t=this.pendingScrollAnchor;if(this.pendingScrollAnchor=null,t&&this.scrollElement&&this.options.enabled){let[e,n,r,i]=t;e!==null&&!r&&(zm()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded)?i!==0&&(this._iosDeferredAdjustment+=i):this.scrollState?.behavior===`smooth`&&!Im(this.getScrollOffset()-i,this.scrollState.lastTargetOffset)||this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})),r&&this.scrollToEnd({behavior:r})}this._retryClampedAdjustment()},this._retryClampedAdjustment=()=>{if(this._clampedAdjustment===null||!this.scrollElement||!this.options.enabled)return;let{target:e,maxAtWrite:t}=this._clampedAdjustment,n=this.getMaxScrollOffset();n>t+.5&&(this._clampedAdjustment=e>n+.5?{target:e,maxAtWrite:n}:null,this._scrollToOffset(e,{adjustments:void 0,behavior:void 0}))},this._flushIosDeferredIfReady=()=>{if(this._iosDeferredAdjustment===0||this.isScrolling||this._iosTouching||this._iosJustTouchEnded)return;let e=this.getScrollOffset(),t=this.getMaxScrollOffset();if(e<0||e>t)return;if(this._iosDeferredAdjustment<0&&e>=t-1){this._iosDeferredAdjustment=0;return}let n=this._iosDeferredAdjustment;this._iosDeferredAdjustment=0,this._scrollToOffset(e,{adjustments:this.scrollAdjustments+=n,behavior:void 0})},this.rafId=null,this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?`width`:`height`]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset==`function`?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getMeasurementOptions=Pm(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled,this.options.lanes,this.options.laneAssignmentMode,this.options.gap],(e,t,n,r,i,a,o,s)=>(this.prevLanes!==void 0&&this.prevLanes!==a&&(this.lanesChangedFlag=!0),this.prevLanes=a,this.pendingMin=null,{count:e,paddingStart:t,scrollMargin:n,getItemKey:r,enabled:i,lanes:a,laneAssignmentMode:o,gap:s}),{key:!1}),this.isIndexInRange=e=>e>=0&&e<this.options.count,this.getMeasurements=Pm(()=>[this.getMeasurementOptions(),this.itemSizeCacheVersion],({count:e,paddingStart:t,scrollMargin:n,getItemKey:r,enabled:i,lanes:a,laneAssignmentMode:o,gap:s},c)=>{let l=this.itemSizeCache;if(!i)return this.measurementsCache=[],this._singleLaneMeasurements=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),[];if(this.laneAssignments.size>e)for(let t of this.laneAssignments.keys())t>=e&&this.laneAssignments.delete(t);this.lanesChangedFlag&&(this.lanesChangedFlag=!1,this.lanesSettling=!0,this.measurementsCache=[],this._singleLaneMeasurements=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),this.pendingMin=null),this.measurementsCache.length===0&&!this.lanesSettling&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(e=>{this.itemSizeCache.set(e.key,e.size)}));let u=this.lanesSettling?0:this.pendingMin??0;if(this.pendingMin=null,this.lanesSettling&&this.measurementsCache.length===e&&(this.lanesSettling=!1),a===1){let i=e*2,a=this._singleLaneMeasurements?.flat;if(!a||a.length<i){let e=new Float64Array(i);a&&u>0&&e.set(a.subarray(0,u*2)),a=e}let o=u===0?Array(e):this._singleLaneMeasurements.items.slice(),c;if(u===0)c=t+n;else{let e=u-1;c=a[e*2]+a[e*2+1]+s}for(let t=u;t<e;t++){let e=r(t);o[t]=e;let n=l.get(e),i=typeof n==`number`?n:this.options.estimateSize(t);a[t*2]=c,a[t*2+1]=i,c+=i+s}this._singleLaneMeasurements={flat:a,items:o};let d=Nm(o,a);return this.measurementsCache=d,d}let d=this.measurementsCache.slice(0,u),f=Array(a).fill(void 0),p=new Float64Array(a),m=0;for(let e=0;e<u;e++){let t=d[e];t&&(f[t.lane]===void 0&&m++,f[t.lane]=e,p[t.lane]=t.end)}for(let i=u;i<e;i++){let e=r(i),c=this.laneAssignments.get(i),u,h,g=o===`estimate`||l.has(e);if(c!==void 0&&this.options.lanes>1){u=c;let e=f[u],r=e===void 0?void 0:d[e];h=r?r.end+s:t+n}else if(m===a){let e=0,t=p[0],n=f[0];for(let r=1;r<a;r++){let i=p[r];(i<t||i===t&&f[r]<n)&&(e=r,t=i,n=f[r])}u=e,h=t+s,g&&this.laneAssignments.set(i,u)}else u=i%this.options.lanes,h=t+n,g&&this.laneAssignments.set(i,u);let _=l.get(e),v=typeof _==`number`?_:this.options.estimateSize(i),y=h+v;d[i]={index:i,start:h,size:v,end:y,key:e,lane:u},f[u]===void 0&&m++,f[u]=i,p[u]=y}return this.measurementsCache=d,d},{key:!1,debug:()=>this.options.debug}),this.calculateRange=Pm(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(e,t,n,r)=>e.length===0||t===0?(this.range=null,null):(this.range=ih(e,t,n,r,r===1&&this._singleLaneMeasurements!==null?this._singleLaneMeasurements.flat:null),this.range),{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=Pm(()=>{let e=null,t=null,n=this.calculateRange();return n&&(e=n.startIndex,t=n.endIndex),this.maybeNotify.updateDeps([this.isScrolling,e,t]),[this.options.rangeExtractor,this.options.overscan,this.options.count,e,t]},(e,t,n,r,i)=>r===null||i===null?[]:e({startIndex:r,endIndex:i,overscan:t,count:n}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{let t=this.options.indexAttribute,n=e.getAttribute(t);return n?parseInt(n,10):(console.warn(`Missing attribute name '${t}={index}' on measured element.`),-1)},this.shouldMeasureDuringScroll=e=>{if(!this.scrollState||this.scrollState.behavior!==`smooth`)return!0;let t=this.scrollState.index??this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)?.index;if(t!==void 0&&this.range){let n=Math.max(this.options.overscan,Math.ceil((this.range.endIndex-this.range.startIndex)/2)),r=Math.max(0,t-n),i=Math.min(this.options.count-1,t+n);return e>=r&&e<=i}return!0},this.measureElement=e=>{if(!e){this.elementsCache.forEach((e,t)=>{e.isConnected||(this.observer.unobserve(e),this.elementsCache.delete(t))});return}let t=this.indexFromElement(e);if(!this.isIndexInRange(t))return;let n=this.options.getItemKey(t),r=this.elementsCache.get(n);r!==e&&(r&&this.observer.unobserve(r),this.observer.observe(e),this.elementsCache.set(n,e)),(!this.isScrolling||this.scrollState)&&this.shouldMeasureDuringScroll(t)&&this.resizeItem(t,this.options.measureElement(e,void 0,this))},this.resizeItem=(e,t)=>{if(!this.isIndexInRange(e))return;let n,r,i,a=this._singleLaneMeasurements?.flat;if(this.options.lanes===1&&a!=null)i=this.options.getItemKey(e),r=a[e*2],n=a[e*2+1];else{let t=this.measurementsCache[e];if(!t)return;i=t.key,r=t.start,n=t.size}let o=this.itemSizeCache.get(i)??n,s=t-o;if(s!==0){let a=this.options.anchorTo===`end`&&this.scrollState?.behavior!==`smooth`&&this.getVirtualDistanceFromEnd()<=this.options.scrollEndThreshold,c=a?this.getTotalSize():0,l=this.getScrollOffset()+this.scrollAdjustments,u=this.itemSizeCache.has(i)?r+o<=l&&this.scrollDirection!==`backward`:r<l,d=this.scrollState?.behavior!==`smooth`&&(this.shouldAdjustScrollPositionOnItemSizeChange===void 0?u:this.shouldAdjustScrollPositionOnItemSizeChange(this.measurementsCache[e]??{index:e,key:i,start:r,size:n,end:r+n,lane:0},s,this));(this.pendingMin===null||e<this.pendingMin)&&(this.pendingMin=e),this.itemSizeCache.set(i,t),this.itemSizeCacheVersion++;let f=!1;a?f=this.applyScrollAdjustment(this.getTotalSize()-c):d&&(f=this.applyScrollAdjustment(s)),this.notify(f),this._retryClampedAdjustment()}},this.getVirtualItems=Pm(()=>[this.getVirtualIndexes(),this.getMeasurements()],(e,t)=>{let n=[];for(let r=0,i=e.length;r<i;r++){let i=t[e[r]];n.push(i)}return n},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{let t=this.getMeasurements();if(t.length===0)return;let n=this._singleLaneMeasurements?.flat,r=this.options.lanes===1&&n!=null;return Fm(t[nh(0,t.length-1,r?e=>n[e*2]:e=>Fm(t[e]).start,e)])},this.getMaxScrollOffset=()=>{if(!this.scrollElement)return 0;if(`scrollHeight`in this.scrollElement)return this.options.horizontal?this.scrollElement.scrollWidth-this.scrollElement.clientWidth:this.scrollElement.scrollHeight-this.scrollElement.clientHeight;{let e=this.scrollElement.document.documentElement;return this.options.horizontal?e.scrollWidth-this.scrollElement.innerWidth:e.scrollHeight-this.scrollElement.innerHeight}},this.getVirtualDistanceFromEnd=()=>Math.max(this.getTotalSize()-this.getSize()-this.getScrollOffset(),0),this.getDistanceFromEnd=()=>Math.max(this.getMaxScrollOffset()-this.getScrollOffset(),0),this.isAtEnd=(e=this.options.scrollEndThreshold)=>this.getDistanceFromEnd()<=e,this.getOffsetForAlignment=(e,t,n=0)=>{if(!this.scrollElement)return 0;let r=this.getSize(),i=this.getScrollOffset();t===`auto`&&(t=e>=i+r?`end`:`start`),t===`center`?e+=(n-r)/2:t===`end`&&(e-=r);let a=this.getMaxScrollOffset();return Math.max(Math.min(a,e),0)},this.getOffsetForIndex=(e,t=`auto`)=>{e=Math.max(0,Math.min(e,this.options.count-1));let n=this.getSize(),r=this.getScrollOffset(),i=this.measurementsCache[e];if(!i)return;if(t===`auto`){if(i.end>=r+n-this.options.scrollPaddingEnd)t=`end`;else if(i.start<=r+this.options.scrollPaddingStart)t=`start`;else return[r,t]}if(t===`end`&&e===this.options.count-1)return[this.getMaxScrollOffset(),t];let a=t===`end`?i.end+this.options.scrollPaddingEnd:i.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(a,t,i.size),t]},this.scrollToOffset=(e,{align:t=`start`,behavior:n=`auto`}={})=>{this._iosDeferredAdjustment=0;let r=this.getOffsetForAlignment(e,t),i=this.now();this.scrollState={index:null,align:t,behavior:n,startedAt:i,lastTargetOffset:r,stableFrames:0},this._scrollToOffset(r,{adjustments:void 0,behavior:n}),this.scheduleScrollReconcile()},this.scrollToIndex=(e,{align:t=`auto`,behavior:n=`auto`}={})=>{this._iosDeferredAdjustment=0,e=Math.max(0,Math.min(e,this.options.count-1));let r=this.getOffsetForIndex(e,t);if(!r)return;let[i,a]=r,o=this.now();this.scrollState={index:e,align:a,behavior:n,startedAt:o,lastTargetOffset:i,stableFrames:0},this._scrollToOffset(i,{adjustments:void 0,behavior:n}),this.scheduleScrollReconcile()},this.scrollBy=(e,{behavior:t=`auto`}={})=>{let n=this.getScrollOffset()+e,r=this.now();this.scrollState={index:null,align:`start`,behavior:t,startedAt:r,lastTargetOffset:n,stableFrames:0},this._scrollToOffset(n,{adjustments:void 0,behavior:t}),this.scheduleScrollReconcile()},this.scrollToEnd=({behavior:e=`auto`}={})=>{if(this.options.count>0){this.scrollToIndex(this.options.count-1,{align:`end`,behavior:e});return}this.scrollToOffset(Math.max(this.getTotalSize()-this.getSize(),0),{behavior:e})},this.getTotalSize=()=>{let e=this.getMeasurements(),t;if(e.length===0)t=this.options.paddingStart;else if(this.options.lanes===1){let n=e.length-1,r=this._singleLaneMeasurements?.flat;t=r==null?e[n]?.end??0:r[n*2]+r[n*2+1]}else{let n=Array(this.options.lanes).fill(null),r=e.length-1;for(;r>=0&&n.some(e=>e===null);){let t=e[r];n[t.lane]===null&&(n[t.lane]=t.end),r--}t=Math.max(...n.filter(e=>e!==null))}return Math.max(t-this.options.scrollMargin+this.options.paddingEnd,0)},this.takeSnapshot=()=>{let e=[];if(this.itemSizeCache.size===0)return e;let t=this.getMeasurements();for(let n of t)n&&this.itemSizeCache.has(n.key)&&e.push({index:n.index,key:n.key,start:n.start,size:n.size,end:n.end,lane:n.lane});return e},this._scrollToOffset=(e,{adjustments:t,behavior:n})=>{this._intendedScrollOffset=e+(t??0),this.options.scrollToFn(e,{behavior:n,adjustments:t},this)},this.measure=()=>{this.pendingMin=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),this.itemSizeCacheVersion++,this.notify(!1)},this.setOptions(e)}applyScrollAdjustment(e,t){if(e===0)return!1;if(zm()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded))return this._iosDeferredAdjustment+=e,!1;{let n=this.getScrollOffset()+this.scrollAdjustments+e,r=this.scrollElement,i=r!==null&&(`scrollHeight`in r||`document`in r)?this.getMaxScrollOffset():null;return this._clampedAdjustment=i!==null&&n>i+.5?{target:n,maxAtWrite:i}:null,this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=e,behavior:t}),this.scrollOffset!==null&&(this.scrollOffset+=this.scrollAdjustments,this.scrollOffset<0&&(this.scrollOffset=0),this.scrollAdjustments=0),!0}}scheduleScrollReconcile(){if(!this.targetWindow){this.scrollState=null;return}this.rafId??=this.targetWindow.requestAnimationFrame(()=>{this.rafId=null,this.reconcileScroll()})}reconcileScroll(){if(!this.scrollState||!this.scrollElement)return;if(this.now()-this.scrollState.startedAt>5e3){this.scrollState=null;return}let e=this.scrollState.index==null?void 0:this.getOffsetForIndex(this.scrollState.index,this.scrollState.align),t=e?e[0]:this.scrollState.lastTargetOffset,n=t!==this.scrollState.lastTargetOffset;if(!n&&Im(t,this.getScrollOffset())){if(this.scrollState.stableFrames++,this.scrollState.stableFrames>=1){this.getScrollOffset()!==t&&this._scrollToOffset(t,{adjustments:void 0,behavior:`auto`}),this.scrollState=null;return}}else if(this.scrollState.stableFrames=0,n){let e=this.getSize()||600,n=Math.abs(t-this.getScrollOffset()),r=this.scrollState.behavior===`smooth`&&n>e;this.scrollState.lastTargetOffset=t,r||(this.scrollState.behavior=`auto`),this._scrollToOffset(t,{adjustments:void 0,behavior:r?`smooth`:`auto`})}this.scheduleScrollReconcile()}},nh=(e,t,n,r)=>{for(;e<=t;){let i=(e+t)/2|0,a=n(i);if(a<r)e=i+1;else if(a>r)t=i-1;else return i}return e>0?e-1:0};function rh(e,t,n){let r=0;for(;r<=t;){let i=(r+t)/2|0,a=e[i*2];if(a<n)r=i+1;else if(a>n)t=i-1;else return i}return r>0?r-1:0}function ih(e,t,n,r,i){let a=e.length-1;if(e.length<=r)return{startIndex:0,endIndex:a};if(r===1&&i!==null){let e=rh(i,a,n),r=e,o=n+t;for(;r<a&&i[r*2]+i[r*2+1]<o;)r++;return{startIndex:e,endIndex:r}}let o=nh(0,a,t=>e[t].start,n),s=o;if(r===1)for(;s<a&&e[s].end<n+t;)s++;else if(r>1){let i=Array(r).fill(0);for(;s<a&&i.some(e=>e<n+t);){let t=e[s];i[t.lane]=t.end,s++}let c=Array(r).fill(n+t);for(;o>=0&&c.some(e=>e>=n);){let t=e[o];c[t.lane]=t.start,o--}o=Math.max(0,o-o%r),s=Math.min(a,s+(r-1-s%r))}return{startIndex:o,endIndex:s}}var ah=typeof document<`u`?R.useLayoutEffect:R.useEffect;function oh({useFlushSync:e=!0,directDomUpdates:t=!1,directDomUpdatesMode:n=`transform`,...r}){let i=R.useReducer(e=>e+1,0)[1],a=R.useRef({enabled:t,mode:n,container:null,lastSize:null,lastPositions:new WeakMap,prevRange:null});a.current.enabled=t,a.current.mode=n;let o=R.useRef(!1),s=e=>{let t=a.current;if(!t.enabled||!t.container)return;let n=e.getTotalSize();if(n!==t.lastSize){t.lastSize=n;let r=e.options.horizontal?`width`:`height`;t.container.style[r]=`${n}px`}},c=e=>{let t=a.current;if(!t.enabled||!t.container)return;s(e);let n=!!e.options.horizontal,r=t.mode===`transform`,i=n?`left`:`top`,o=e.options.scrollMargin,c=e.getVirtualItems();for(let a of c){let s=a.start-o,c=e.elementsCache.get(a.key);c&&t.lastPositions.get(c)!==s&&(t.lastPositions.set(c,s),r?c.style.transform=n?`translate3d(${s}px, 0, 0)`:`translate3d(0, ${s}px, 0)`:c.style[i]=`${s}px`)}},l={...r,onChange:(t,n)=>{var s;let l=a.current,u=!0;if(l.enabled){c(t);let e=t.range,n=l.prevRange;u=!n||n.isScrolling!==t.isScrolling||n.startIndex!==e?.startIndex||n.endIndex!==e?.endIndex,u&&(l.prevRange=e?{startIndex:e.startIndex,endIndex:e.endIndex,isScrolling:t.isScrolling}:null)}u&&(e&&n&&!o.current?(0,of.flushSync)(i):i()),(s=r.onChange)==null||s.call(r,t,n)}},[u]=R.useState(()=>{let e=new th(l),t=e.measureElement;return e.measureElement=e=>{o.current=!0;try{t(e)}finally{o.current=!1}},Object.assign(e,{containerRef:t=>{let n=a.current;if(n.container=t,n.lastSize=null,t&&n.enabled){let r=e.getTotalSize();n.lastSize=r;let i=e.options.horizontal?`width`:`height`;t.style[i]=`${r}px`}}})});return u.setOptions(l),ah(()=>u._didMount(),[]),ah(()=>(s(u),u._willUpdate())),ah(()=>{c(u)}),u}function sh(e){return oh({observeElementRect:Um,observeElementOffset:Jm,scrollToFn:$m,...e})}var ch=n(i(((e,t)=>{(function(n){var r;typeof e==`object`?t.exports=n():typeof define==`function`&&define.amd?define(n):(typeof window<`u`?r=window:typeof global<`u`?r=global:typeof self<`u`&&(r=self),r.objectHash=n())})(function(){return function e(t,n,r){function i(o,s){if(!n[o]){if(!t[o]){var c=typeof u==`function`&&u;if(!s&&c)return c(o,!0);if(a)return a(o,!0);throw Error(`Cannot find module '`+o+`'`)}s=n[o]={exports:{}},t[o][0].call(s.exports,function(e){var n=t[o][1][e];return i(n||e)},s,s.exports,e,t,n,r)}return n[o].exports}for(var a=typeof u==`function`&&u,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(e,t,n){(function(r,i,a,o,s,c,l,u,d){var f=e(`crypto`);function p(e,t){t=g(e,t);var n;return(n=t.algorithm===`passthrough`?new y:f.createHash(t.algorithm)).write===void 0&&(n.write=n.update,n.end=n.update),v(t,n).dispatch(e),n.update||n.end(``),n.digest?n.digest(t.encoding===`buffer`?void 0:t.encoding):(e=n.read(),t.encoding===`buffer`?e:e.toString(t.encoding))}(n=t.exports=p).sha1=function(e){return p(e)},n.keys=function(e){return p(e,{excludeValues:!0,algorithm:`sha1`,encoding:`hex`})},n.MD5=function(e){return p(e,{algorithm:`md5`,encoding:`hex`})},n.keysMD5=function(e){return p(e,{algorithm:`md5`,encoding:`hex`,excludeValues:!0})};var m=f.getHashes?f.getHashes().slice():[`sha1`,`md5`],h=(m.push(`passthrough`),[`buffer`,`hex`,`binary`,`base64`]);function g(e,t){var n={};if(n.algorithm=(t||={}).algorithm||`sha1`,n.encoding=t.encoding||`hex`,n.excludeValues=!!t.excludeValues,n.algorithm=n.algorithm.toLowerCase(),n.encoding=n.encoding.toLowerCase(),n.ignoreUnknown=!0===t.ignoreUnknown,n.respectType=!1!==t.respectType,n.respectFunctionNames=!1!==t.respectFunctionNames,n.respectFunctionProperties=!1!==t.respectFunctionProperties,n.unorderedArrays=!0===t.unorderedArrays,n.unorderedSets=!1!==t.unorderedSets,n.unorderedObjects=!1!==t.unorderedObjects,n.replacer=t.replacer||void 0,n.excludeKeys=t.excludeKeys||void 0,e===void 0)throw Error(`Object argument required.`);for(var r=0;r<m.length;++r)m[r].toLowerCase()===n.algorithm.toLowerCase()&&(n.algorithm=m[r]);if(m.indexOf(n.algorithm)===-1)throw Error(`Algorithm "`+n.algorithm+`"  not supported. supported values: `+m.join(`, `));if(h.indexOf(n.encoding)===-1&&n.algorithm!==`passthrough`)throw Error(`Encoding "`+n.encoding+`"  not supported. supported values: `+h.join(`, `));return n}function _(e){if(typeof e==`function`)return/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(e))!=null}function v(e,t,n){n||=[];function r(e){return t.update?t.update(e,`utf8`):t.write(e,`utf8`)}return{dispatch:function(t){return this[`_`+((t=e.replacer?e.replacer(t):t)===null?`null`:typeof t)](t)},_object:function(t){var i,o=Object.prototype.toString.call(t),s=/\[object (.*)\]/i.exec(o);if(s=(s=s?s[1]:`unknown:[`+o+`]`).toLowerCase(),0<=(o=n.indexOf(t)))return this.dispatch(`[CIRCULAR:`+o+`]`);if(n.push(t),a!==void 0&&a.isBuffer&&a.isBuffer(t))return r(`buffer:`),r(t);if(s===`object`||s===`function`||s===`asyncfunction`)return o=Object.keys(t),e.unorderedObjects&&(o=o.sort()),!1===e.respectType||_(t)||o.splice(0,0,`prototype`,`__proto__`,`constructor`),e.excludeKeys&&(o=o.filter(function(t){return!e.excludeKeys(t)})),r(`object:`+o.length+`:`),i=this,o.forEach(function(n){i.dispatch(n),r(`:`),e.excludeValues||i.dispatch(t[n]),r(`,`)});if(!this[`_`+s]){if(e.ignoreUnknown)return r(`[`+s+`]`);throw Error(`Unknown object type "`+s+`"`)}this[`_`+s](t)},_array:function(t,i){i=i===void 0?!1!==e.unorderedArrays:i;var a=this;if(r(`array:`+t.length+`:`),!i||t.length<=1)return t.forEach(function(e){return a.dispatch(e)});var o=[],i=t.map(function(t){var r=new y,i=n.slice();return v(e,r,i).dispatch(t),o=o.concat(i.slice(n.length)),r.read().toString()});return n=n.concat(o),i.sort(),this._array(i,!1)},_date:function(e){return r(`date:`+e.toJSON())},_symbol:function(e){return r(`symbol:`+e.toString())},_error:function(e){return r(`error:`+e.toString())},_boolean:function(e){return r(`bool:`+e.toString())},_string:function(e){r(`string:`+e.length+`:`),r(e.toString())},_function:function(t){r(`fn:`),_(t)?this.dispatch(`[native]`):this.dispatch(t.toString()),!1!==e.respectFunctionNames&&this.dispatch(`function-name:`+String(t.name)),e.respectFunctionProperties&&this._object(t)},_number:function(e){return r(`number:`+e.toString())},_xml:function(e){return r(`xml:`+e.toString())},_null:function(){return r(`Null`)},_undefined:function(){return r(`Undefined`)},_regexp:function(e){return r(`regex:`+e.toString())},_uint8array:function(e){return r(`uint8array:`),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray:function(e){return r(`uint8clampedarray:`),this.dispatch(Array.prototype.slice.call(e))},_int8array:function(e){return r(`int8array:`),this.dispatch(Array.prototype.slice.call(e))},_uint16array:function(e){return r(`uint16array:`),this.dispatch(Array.prototype.slice.call(e))},_int16array:function(e){return r(`int16array:`),this.dispatch(Array.prototype.slice.call(e))},_uint32array:function(e){return r(`uint32array:`),this.dispatch(Array.prototype.slice.call(e))},_int32array:function(e){return r(`int32array:`),this.dispatch(Array.prototype.slice.call(e))},_float32array:function(e){return r(`float32array:`),this.dispatch(Array.prototype.slice.call(e))},_float64array:function(e){return r(`float64array:`),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer:function(e){return r(`arraybuffer:`),this.dispatch(new Uint8Array(e))},_url:function(e){return r(`url:`+e.toString())},_map:function(t){return r(`map:`),t=Array.from(t),this._array(t,!1!==e.unorderedSets)},_set:function(t){return r(`set:`),t=Array.from(t),this._array(t,!1!==e.unorderedSets)},_file:function(e){return r(`file:`),this.dispatch([e.name,e.size,e.type,e.lastModfied])},_blob:function(){if(e.ignoreUnknown)return r(`[blob]`);throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return r(`domwindow`)},_bigint:function(e){return r(`bigint:`+e.toString())},_process:function(){return r(`process`)},_timer:function(){return r(`timer`)},_pipe:function(){return r(`pipe`)},_tcp:function(){return r(`tcp`)},_udp:function(){return r(`udp`)},_tty:function(){return r(`tty`)},_statwatcher:function(){return r(`statwatcher`)},_securecontext:function(){return r(`securecontext`)},_connection:function(){return r(`connection`)},_zlib:function(){return r(`zlib`)},_context:function(){return r(`context`)},_nodescript:function(){return r(`nodescript`)},_httpparser:function(){return r(`httpparser`)},_dataview:function(){return r(`dataview`)},_signal:function(){return r(`signal`)},_fsevent:function(){return r(`fsevent`)},_tlswrap:function(){return r(`tlswrap`)}}}function y(){return{buf:``,write:function(e){this.buf+=e},end:function(e){this.buf+=e},read:function(){return this.buf}}}n.writeToStream=function(e,t,n){return n===void 0&&(n=t,t={}),v(t=g(e,t),n).dispatch(e)}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/fake_9a5aa49d.js`,`/`)},{buffer:3,crypto:5,lYpoI2:11}],2:[function(e,t,n){(function(e,t,r,i,a,o,s,c,l){(function(e){var t=typeof Uint8Array<`u`?Uint8Array:Array,n=43,r=47,i=48,a=97,o=65,s=45,c=95;function l(e){return e=e.charCodeAt(0),e===n||e===s?62:e===r||e===c?63:e<i?-1:e<i+10?e-i+26+26:e<o+26?e-o:e<a+26?e-a+26:void 0}e.toByteArray=function(e){var n,r;if(0<e.length%4)throw Error(`Invalid string. Length must be a multiple of 4`);var i=e.length,i=e.charAt(i-2)===`=`?2:+(e.charAt(i-1)===`=`),a=new t(3*e.length/4-i),o=0<i?e.length-4:e.length,s=0;function c(e){a[s++]=e}for(n=0;n<o;n+=4)c((16711680&(r=l(e.charAt(n))<<18|l(e.charAt(n+1))<<12|l(e.charAt(n+2))<<6|l(e.charAt(n+3))))>>16),c((65280&r)>>8),c(255&r);return i==2?c(255&(r=l(e.charAt(n))<<2|l(e.charAt(n+1))>>4)):i==1&&(c((r=l(e.charAt(n))<<10|l(e.charAt(n+1))<<4|l(e.charAt(n+2))>>2)>>8&255),c(255&r)),a},e.fromByteArray=function(e){var t,n,r,i,a=e.length%3,o=``;function s(e){return`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`.charAt(e)}for(t=0,r=e.length-a;t<r;t+=3)n=(e[t]<<16)+(e[t+1]<<8)+e[t+2],o+=s((i=n)>>18&63)+s(i>>12&63)+s(i>>6&63)+s(63&i);switch(a){case 1:o=(o+=s((n=e[e.length-1])>>2))+s(n<<4&63)+`==`;break;case 2:o=(o=(o+=s((n=(e[e.length-2]<<8)+e[e.length-1])>>10))+s(n>>4&63))+s(n<<2&63)+`=`}return o}})(n===void 0?this.base64js={}:n)}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js`,`/node_modules/gulp-browserify/node_modules/base64-js/lib`)},{buffer:3,lYpoI2:11}],3:[function(e,t,n){(function(t,r,i,a,o,s,c,l,u){var d=e(`base64-js`),f=e(`ieee754`);function i(e,t,n){if(!(this instanceof i))return new i(e,t,n);var r,a,o,s,c=typeof e;if(t===`base64`&&c==`string`)for(e=(s=e).trim?s.trim():s.replace(/^\s+|\s+$/g,``);e.length%4!=0;)e+=`=`;if(c==`number`)r=te(e);else if(c==`string`)r=i.byteLength(e,t);else{if(c!=`object`)throw Error(`First argument needs to be a number, array or string.`);r=te(e.length)}if(i._useTypedArrays?a=i._augment(new Uint8Array(r)):((a=this).length=r,a._isBuffer=!0),i._useTypedArrays&&typeof e.byteLength==`number`)a._set(e);else if(ne(s=e)||i.isBuffer(s)||s&&typeof s==`object`&&typeof s.length==`number`)for(o=0;o<r;o++)i.isBuffer(e)?a[o]=e.readUInt8(o):a[o]=e[o];else if(c==`string`)a.write(e,0,t);else if(c==`number`&&!i._useTypedArrays&&!n)for(o=0;o<r;o++)a[o]=0;return a}function p(e,t,n,r){return i._charsWritten=ae(function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function m(e,t,n,r){return i._charsWritten=ae(function(e){for(var t,n,r=[],i=0;i<e.length;i++)n=e.charCodeAt(i),t=n>>8,n%=256,r.push(n),r.push(t);return r}(t),e,n,r)}function h(e,t,n){var r=``;n=Math.min(e.length,n);for(var i=t;i<n;i++)r+=String.fromCharCode(e[i]);return r}function g(e,t,n,r){r||(A(typeof n==`boolean`,`missing or invalid endian`),A(t!=null,`missing offset`),A(t+1<e.length,`Trying to read beyond buffer length`));var i,r=e.length;if(!(r<=t))return n?(i=e[t],t+1<r&&(i|=e[t+1]<<8)):(i=e[t]<<8,t+1<r&&(i|=e[t+1])),i}function _(e,t,n,r){r||(A(typeof n==`boolean`,`missing or invalid endian`),A(t!=null,`missing offset`),A(t+3<e.length,`Trying to read beyond buffer length`));var i,r=e.length;if(!(r<=t))return n?(t+2<r&&(i=e[t+2]<<16),t+1<r&&(i|=e[t+1]<<8),i|=e[t],t+3<r&&(i+=e[t+3]<<24>>>0)):(t+1<r&&(i=e[t+1]<<16),t+2<r&&(i|=e[t+2]<<8),t+3<r&&(i|=e[t+3]),i+=e[t]<<24>>>0),i}function v(e,t,n,r){if(r||(A(typeof n==`boolean`,`missing or invalid endian`),A(t!=null,`missing offset`),A(t+1<e.length,`Trying to read beyond buffer length`)),!(e.length<=t))return r=g(e,t,n,!0),32768&r?-1*(65535-r+1):r}function y(e,t,n,r){if(r||(A(typeof n==`boolean`,`missing or invalid endian`),A(t!=null,`missing offset`),A(t+3<e.length,`Trying to read beyond buffer length`)),!(e.length<=t))return r=_(e,t,n,!0),2147483648&r?-1*(4294967295-r+1):r}function b(e,t,n,r){return r||(A(typeof n==`boolean`,`missing or invalid endian`),A(t+3<e.length,`Trying to read beyond buffer length`)),f.read(e,t,n,23,4)}function x(e,t,n,r){return r||(A(typeof n==`boolean`,`missing or invalid endian`),A(t+7<e.length,`Trying to read beyond buffer length`)),f.read(e,t,n,52,8)}function S(e,t,n,r,i){if(i||(A(t!=null,`missing value`),A(typeof r==`boolean`,`missing or invalid endian`),A(n!=null,`missing offset`),A(n+1<e.length,`trying to write beyond buffer length`),se(t,65535)),i=e.length,!(i<=n))for(var a=0,o=Math.min(i-n,2);a<o;a++)e[n+a]=(t&255<<8*(r?a:1-a))>>>8*(r?a:1-a)}function C(e,t,n,r,i){if(i||(A(t!=null,`missing value`),A(typeof r==`boolean`,`missing or invalid endian`),A(n!=null,`missing offset`),A(n+3<e.length,`trying to write beyond buffer length`),se(t,4294967295)),i=e.length,!(i<=n))for(var a=0,o=Math.min(i-n,4);a<o;a++)e[n+a]=t>>>8*(r?a:3-a)&255}function w(e,t,n,r,i){i||(A(t!=null,`missing value`),A(typeof r==`boolean`,`missing or invalid endian`),A(n!=null,`missing offset`),A(n+1<e.length,`Trying to write beyond buffer length`),ce(t,32767,-32768)),e.length<=n||S(e,0<=t?t:65535+t+1,n,r,i)}function T(e,t,n,r,i){i||(A(t!=null,`missing value`),A(typeof r==`boolean`,`missing or invalid endian`),A(n!=null,`missing offset`),A(n+3<e.length,`Trying to write beyond buffer length`),ce(t,2147483647,-2147483648)),e.length<=n||C(e,0<=t?t:4294967295+t+1,n,r,i)}function ee(e,t,n,r,i){i||(A(t!=null,`missing value`),A(typeof r==`boolean`,`missing or invalid endian`),A(n!=null,`missing offset`),A(n+3<e.length,`Trying to write beyond buffer length`),le(t,34028234663852886e22,-34028234663852886e22)),e.length<=n||f.write(e,t,n,r,23,4)}function E(e,t,n,r,i){i||(A(t!=null,`missing value`),A(typeof r==`boolean`,`missing or invalid endian`),A(n!=null,`missing offset`),A(n+7<e.length,`Trying to write beyond buffer length`),le(t,17976931348623157e292,-17976931348623157e292)),e.length<=n||f.write(e,t,n,r,52,8)}n.Buffer=i,n.SlowBuffer=i,n.INSPECT_MAX_BYTES=50,i.poolSize=8192,i._useTypedArrays=function(){try{var e=new Uint8Array(new ArrayBuffer(0));return e.foo=function(){return 42},e.foo()===42&&typeof e.subarray==`function`}catch{return!1}}(),i.isEncoding=function(e){switch(String(e).toLowerCase()){case`hex`:case`utf8`:case`utf-8`:case`ascii`:case`binary`:case`base64`:case`raw`:case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:return!0;default:return!1}},i.isBuffer=function(e){return!(e==null||!e._isBuffer)},i.byteLength=function(e,t){var n;switch(e+=``,t||`utf8`){case`hex`:n=e.length/2;break;case`utf8`:case`utf-8`:n=ie(e).length;break;case`ascii`:case`binary`:case`raw`:n=e.length;break;case`base64`:n=k(e).length;break;case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:n=2*e.length;break;default:throw Error(`Unknown encoding`)}return n},i.concat=function(e,t){if(A(ne(e),`Usage: Buffer.concat(list, [totalLength])
list should be an Array.`),e.length===0)return new i(0);if(e.length===1)return e[0];if(typeof t!=`number`)for(a=t=0;a<e.length;a++)t+=e[a].length;for(var n=new i(t),r=0,a=0;a<e.length;a++){var o=e[a];o.copy(n,r),r+=o.length}return n},i.prototype.write=function(e,t,n,r){isFinite(t)?isFinite(n)||(r=n,n=void 0):(l=r,r=t,t=n,n=l),t=Number(t)||0;var a,o,s,c,l=this.length-t;switch((!n||l<(n=Number(n)))&&(n=l),r=String(r||`utf8`).toLowerCase()){case`hex`:a=function(e,t,n,r){n=Number(n)||0;var a=e.length-n;(!r||a<(r=Number(r)))&&(r=a),A((a=t.length)%2==0,`Invalid hex string`),a/2<r&&(r=a/2);for(var o=0;o<r;o++){var s=parseInt(t.substr(2*o,2),16);A(!isNaN(s),`Invalid hex string`),e[n+o]=s}return i._charsWritten=2*o,o}(this,e,t,n);break;case`utf8`:case`utf-8`:o=this,s=t,c=n,a=i._charsWritten=ae(ie(e),o,s,c);break;case`ascii`:case`binary`:a=p(this,e,t,n);break;case`base64`:o=this,s=t,c=n,a=i._charsWritten=ae(k(e),o,s,c);break;case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:a=m(this,e,t,n);break;default:throw Error(`Unknown encoding`)}return a},i.prototype.toString=function(e,t,n){var r,i,a,o,s=this;if(e=String(e||`utf8`).toLowerCase(),t=Number(t)||0,(n=n===void 0?s.length:Number(n))===t)return``;switch(e){case`hex`:r=function(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||r<n)&&(n=r);for(var i=``,a=t;a<n;a++)i+=re(e[a]);return i}(s,t,n);break;case`utf8`:case`utf-8`:r=function(e,t,n){var r=``,i=``;n=Math.min(e.length,n);for(var a=t;a<n;a++)e[a]<=127?(r+=oe(i)+String.fromCharCode(e[a]),i=``):i+=`%`+e[a].toString(16);return r+oe(i)}(s,t,n);break;case`ascii`:case`binary`:r=h(s,t,n);break;case`base64`:i=s,o=n,r=(a=t)===0&&o===i.length?d.fromByteArray(i):d.fromByteArray(i.slice(a,o));break;case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:r=function(e,t,n){for(var r=e.slice(t,n),i=``,a=0;a<r.length;a+=2)i+=String.fromCharCode(r[a]+256*r[a+1]);return i}(s,t,n);break;default:throw Error(`Unknown encoding`)}return r},i.prototype.toJSON=function(){return{type:`Buffer`,data:Array.prototype.slice.call(this._arr||this,0)}},i.prototype.copy=function(e,t,n,r){if(t||=0,(r=r||r===0?r:this.length)!==(n||=0)&&e.length!==0&&this.length!==0){A(n<=r,`sourceEnd < sourceStart`),A(0<=t&&t<e.length,`targetStart out of bounds`),A(0<=n&&n<this.length,`sourceStart out of bounds`),A(0<=r&&r<=this.length,`sourceEnd out of bounds`),r>this.length&&(r=this.length);var a=(r=e.length-t<r-n?e.length-t+n:r)-n;if(a<100||!i._useTypedArrays)for(var o=0;o<a;o++)e[o+t]=this[o+n];else e._set(this.subarray(n,n+a),t)}},i.prototype.slice=function(e,t){var n=this.length;if(e=O(e,n,0),t=O(t,n,n),i._useTypedArrays)return i._augment(this.subarray(e,t));for(var r=t-e,a=new i(r,void 0,!0),o=0;o<r;o++)a[o]=this[o+e];return a},i.prototype.get=function(e){return console.log(`.get() is deprecated. Access using array indexes instead.`),this.readUInt8(e)},i.prototype.set=function(e,t){return console.log(`.set() is deprecated. Access using array indexes instead.`),this.writeUInt8(e,t)},i.prototype.readUInt8=function(e,t){if(t||(A(e!=null,`missing offset`),A(e<this.length,`Trying to read beyond buffer length`)),!(e>=this.length))return this[e]},i.prototype.readUInt16LE=function(e,t){return g(this,e,!0,t)},i.prototype.readUInt16BE=function(e,t){return g(this,e,!1,t)},i.prototype.readUInt32LE=function(e,t){return _(this,e,!0,t)},i.prototype.readUInt32BE=function(e,t){return _(this,e,!1,t)},i.prototype.readInt8=function(e,t){if(t||(A(e!=null,`missing offset`),A(e<this.length,`Trying to read beyond buffer length`)),!(e>=this.length))return 128&this[e]?-1*(255-this[e]+1):this[e]},i.prototype.readInt16LE=function(e,t){return v(this,e,!0,t)},i.prototype.readInt16BE=function(e,t){return v(this,e,!1,t)},i.prototype.readInt32LE=function(e,t){return y(this,e,!0,t)},i.prototype.readInt32BE=function(e,t){return y(this,e,!1,t)},i.prototype.readFloatLE=function(e,t){return b(this,e,!0,t)},i.prototype.readFloatBE=function(e,t){return b(this,e,!1,t)},i.prototype.readDoubleLE=function(e,t){return x(this,e,!0,t)},i.prototype.readDoubleBE=function(e,t){return x(this,e,!1,t)},i.prototype.writeUInt8=function(e,t,n){n||(A(e!=null,`missing value`),A(t!=null,`missing offset`),A(t<this.length,`trying to write beyond buffer length`),se(e,255)),t>=this.length||(this[t]=e)},i.prototype.writeUInt16LE=function(e,t,n){S(this,e,t,!0,n)},i.prototype.writeUInt16BE=function(e,t,n){S(this,e,t,!1,n)},i.prototype.writeUInt32LE=function(e,t,n){C(this,e,t,!0,n)},i.prototype.writeUInt32BE=function(e,t,n){C(this,e,t,!1,n)},i.prototype.writeInt8=function(e,t,n){n||(A(e!=null,`missing value`),A(t!=null,`missing offset`),A(t<this.length,`Trying to write beyond buffer length`),ce(e,127,-128)),t>=this.length||(0<=e?this.writeUInt8(e,t,n):this.writeUInt8(255+e+1,t,n))},i.prototype.writeInt16LE=function(e,t,n){w(this,e,t,!0,n)},i.prototype.writeInt16BE=function(e,t,n){w(this,e,t,!1,n)},i.prototype.writeInt32LE=function(e,t,n){T(this,e,t,!0,n)},i.prototype.writeInt32BE=function(e,t,n){T(this,e,t,!1,n)},i.prototype.writeFloatLE=function(e,t,n){ee(this,e,t,!0,n)},i.prototype.writeFloatBE=function(e,t,n){ee(this,e,t,!1,n)},i.prototype.writeDoubleLE=function(e,t,n){E(this,e,t,!0,n)},i.prototype.writeDoubleBE=function(e,t,n){E(this,e,t,!1,n)},i.prototype.fill=function(e,t,n){if(t||=0,n||=this.length,A(typeof(e=typeof(e||=0)==`string`?e.charCodeAt(0):e)==`number`&&!isNaN(e),`value is not a number`),A(t<=n,`end < start`),n!==t&&this.length!==0){A(0<=t&&t<this.length,`start out of bounds`),A(0<=n&&n<=this.length,`end out of bounds`);for(var r=t;r<n;r++)this[r]=e}},i.prototype.inspect=function(){for(var e=[],t=this.length,r=0;r<t;r++)if(e[r]=re(this[r]),r===n.INSPECT_MAX_BYTES){e[r+1]=`...`;break}return`<Buffer `+e.join(` `)+`>`},i.prototype.toArrayBuffer=function(){if(typeof Uint8Array>`u`)throw Error(`Buffer.toArrayBuffer not supported in this browser`);if(i._useTypedArrays)return new i(this).buffer;for(var e=new Uint8Array(this.length),t=0,n=e.length;t<n;t+=1)e[t]=this[t];return e.buffer};var D=i.prototype;function O(e,t,n){return typeof e==`number`?t<=(e=~~e)?t:0<=e||0<=(e+=t)?e:0:n}function te(e){return(e=~~Math.ceil(+e))<0?0:e}function ne(e){return(Array.isArray||function(e){return Object.prototype.toString.call(e)===`[object Array]`})(e)}function re(e){return e<16?`0`+e.toString(16):e.toString(16)}function ie(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<=127)t.push(e.charCodeAt(n));else for(var i=n,a=(55296<=r&&r<=57343&&n++,encodeURIComponent(e.slice(i,n+1)).substr(1).split(`%`)),o=0;o<a.length;o++)t.push(parseInt(a[o],16))}return t}function k(e){return d.toByteArray(e)}function ae(e,t,n,r){for(var i=0;i<r&&!(i+n>=t.length||i>=e.length);i++)t[i+n]=e[i];return i}function oe(e){try{return decodeURIComponent(e)}catch{return`�`}}function se(e,t){A(typeof e==`number`,`cannot write a non-number as a number`),A(0<=e,`specified a negative value for writing an unsigned value`),A(e<=t,`value is larger than maximum value for type`),A(Math.floor(e)===e,`value has a fractional component`)}function ce(e,t,n){A(typeof e==`number`,`cannot write a non-number as a number`),A(e<=t,`value larger than maximum allowed value`),A(n<=e,`value smaller than minimum allowed value`),A(Math.floor(e)===e,`value has a fractional component`)}function le(e,t,n){A(typeof e==`number`,`cannot write a non-number as a number`),A(e<=t,`value larger than maximum allowed value`),A(n<=e,`value smaller than minimum allowed value`)}function A(e,t){if(!e)throw Error(t||`Failed assertion`)}i._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=D.get,e.set=D.set,e.write=D.write,e.toString=D.toString,e.toLocaleString=D.toString,e.toJSON=D.toJSON,e.copy=D.copy,e.slice=D.slice,e.readUInt8=D.readUInt8,e.readUInt16LE=D.readUInt16LE,e.readUInt16BE=D.readUInt16BE,e.readUInt32LE=D.readUInt32LE,e.readUInt32BE=D.readUInt32BE,e.readInt8=D.readInt8,e.readInt16LE=D.readInt16LE,e.readInt16BE=D.readInt16BE,e.readInt32LE=D.readInt32LE,e.readInt32BE=D.readInt32BE,e.readFloatLE=D.readFloatLE,e.readFloatBE=D.readFloatBE,e.readDoubleLE=D.readDoubleLE,e.readDoubleBE=D.readDoubleBE,e.writeUInt8=D.writeUInt8,e.writeUInt16LE=D.writeUInt16LE,e.writeUInt16BE=D.writeUInt16BE,e.writeUInt32LE=D.writeUInt32LE,e.writeUInt32BE=D.writeUInt32BE,e.writeInt8=D.writeInt8,e.writeInt16LE=D.writeInt16LE,e.writeInt16BE=D.writeInt16BE,e.writeInt32LE=D.writeInt32LE,e.writeInt32BE=D.writeInt32BE,e.writeFloatLE=D.writeFloatLE,e.writeFloatBE=D.writeFloatBE,e.writeDoubleLE=D.writeDoubleLE,e.writeDoubleBE=D.writeDoubleBE,e.fill=D.fill,e.inspect=D.inspect,e.toArrayBuffer=D.toArrayBuffer,e}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/buffer/index.js`,`/node_modules/gulp-browserify/node_modules/buffer`)},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(e,t,n){(function(n,r,i,a,o,s,c,l,u){var i=e(`buffer`).Buffer,d=4,f=new i(d);f.fill(0),t.exports={hash:function(e,t,n,r){for(var a=t(function(e,t){e.length%d!=0&&(n=e.length+(d-e.length%d),e=i.concat([e,f],n));for(var n,r=[],a=t?e.readInt32BE:e.readInt32LE,o=0;o<e.length;o+=d)r.push(a.call(e,o));return r}(e=i.isBuffer(e)?e:new i(e),r),8*e.length),t=r,o=new i(n),s=t?o.writeInt32BE:o.writeInt32LE,c=0;c<a.length;c++)s.call(o,a[c],4*c,!0);return o}}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js`,`/node_modules/gulp-browserify/node_modules/crypto-browserify`)},{buffer:3,lYpoI2:11}],5:[function(e,t,n){(function(t,r,i,a,o,s,c,l,u){var i=e(`buffer`).Buffer,d=e(`./sha`),f=e(`./sha256`),p=e(`./rng`),m={sha1:d,sha256:f,md5:e(`./md5`)},h=64,g=new i(h);function _(e,t){var n=m[e||=`sha1`],r=[];return n||v(`algorithm:`,e,`is not yet supported`),{update:function(e){return i.isBuffer(e)||(e=new i(e)),r.push(e),e.length,this},digest:function(e){var a=i.concat(r),a=t?function(e,t,n){i.isBuffer(t)||(t=new i(t)),i.isBuffer(n)||(n=new i(n)),t.length>h?t=e(t):t.length<h&&(t=i.concat([t,g],h));for(var r=new i(h),a=new i(h),o=0;o<h;o++)r[o]=54^t[o],a[o]=92^t[o];return n=e(i.concat([r,n])),e(i.concat([a,n]))}(n,t,a):n(a);return r=null,e?a.toString(e):a}}}function v(){var e=[].slice.call(arguments).join(` `);throw Error([e,`we accept pull requests`,`http://github.com/dominictarr/crypto-browserify`].join(`
`))}g.fill(0),n.createHash=function(e){return _(e)},n.createHmac=_,n.randomBytes=function(e,t){if(!t||!t.call)return new i(p(e));try{t.call(this,void 0,new i(p(e)))}catch(e){t(e)}};var y,b=[`createCredentials`,`createCipher`,`createCipheriv`,`createDecipher`,`createDecipheriv`,`createSign`,`createVerify`,`createDiffieHellman`,`pbkdf2`],x=function(e){n[e]=function(){v(`sorry,`,e,`is not implemented yet`)}};for(y in b)x(b[y],y)}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js`,`/node_modules/gulp-browserify/node_modules/crypto-browserify`)},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(e,t,n){(function(n,r,i,a,o,s,c,l,u){var d=e(`./helpers`);function f(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var n=1732584193,r=-271733879,i=-1732584194,a=271733878,o=0;o<e.length;o+=16){var s=n,c=r,l=i,u=a,n=m(n,r,i,a,e[o+0],7,-680876936),a=m(a,n,r,i,e[o+1],12,-389564586),i=m(i,a,n,r,e[o+2],17,606105819),r=m(r,i,a,n,e[o+3],22,-1044525330);n=m(n,r,i,a,e[o+4],7,-176418897),a=m(a,n,r,i,e[o+5],12,1200080426),i=m(i,a,n,r,e[o+6],17,-1473231341),r=m(r,i,a,n,e[o+7],22,-45705983),n=m(n,r,i,a,e[o+8],7,1770035416),a=m(a,n,r,i,e[o+9],12,-1958414417),i=m(i,a,n,r,e[o+10],17,-42063),r=m(r,i,a,n,e[o+11],22,-1990404162),n=m(n,r,i,a,e[o+12],7,1804603682),a=m(a,n,r,i,e[o+13],12,-40341101),i=m(i,a,n,r,e[o+14],17,-1502002290),n=h(n,r=m(r,i,a,n,e[o+15],22,1236535329),i,a,e[o+1],5,-165796510),a=h(a,n,r,i,e[o+6],9,-1069501632),i=h(i,a,n,r,e[o+11],14,643717713),r=h(r,i,a,n,e[o+0],20,-373897302),n=h(n,r,i,a,e[o+5],5,-701558691),a=h(a,n,r,i,e[o+10],9,38016083),i=h(i,a,n,r,e[o+15],14,-660478335),r=h(r,i,a,n,e[o+4],20,-405537848),n=h(n,r,i,a,e[o+9],5,568446438),a=h(a,n,r,i,e[o+14],9,-1019803690),i=h(i,a,n,r,e[o+3],14,-187363961),r=h(r,i,a,n,e[o+8],20,1163531501),n=h(n,r,i,a,e[o+13],5,-1444681467),a=h(a,n,r,i,e[o+2],9,-51403784),i=h(i,a,n,r,e[o+7],14,1735328473),n=g(n,r=h(r,i,a,n,e[o+12],20,-1926607734),i,a,e[o+5],4,-378558),a=g(a,n,r,i,e[o+8],11,-2022574463),i=g(i,a,n,r,e[o+11],16,1839030562),r=g(r,i,a,n,e[o+14],23,-35309556),n=g(n,r,i,a,e[o+1],4,-1530992060),a=g(a,n,r,i,e[o+4],11,1272893353),i=g(i,a,n,r,e[o+7],16,-155497632),r=g(r,i,a,n,e[o+10],23,-1094730640),n=g(n,r,i,a,e[o+13],4,681279174),a=g(a,n,r,i,e[o+0],11,-358537222),i=g(i,a,n,r,e[o+3],16,-722521979),r=g(r,i,a,n,e[o+6],23,76029189),n=g(n,r,i,a,e[o+9],4,-640364487),a=g(a,n,r,i,e[o+12],11,-421815835),i=g(i,a,n,r,e[o+15],16,530742520),n=_(n,r=g(r,i,a,n,e[o+2],23,-995338651),i,a,e[o+0],6,-198630844),a=_(a,n,r,i,e[o+7],10,1126891415),i=_(i,a,n,r,e[o+14],15,-1416354905),r=_(r,i,a,n,e[o+5],21,-57434055),n=_(n,r,i,a,e[o+12],6,1700485571),a=_(a,n,r,i,e[o+3],10,-1894986606),i=_(i,a,n,r,e[o+10],15,-1051523),r=_(r,i,a,n,e[o+1],21,-2054922799),n=_(n,r,i,a,e[o+8],6,1873313359),a=_(a,n,r,i,e[o+15],10,-30611744),i=_(i,a,n,r,e[o+6],15,-1560198380),r=_(r,i,a,n,e[o+13],21,1309151649),n=_(n,r,i,a,e[o+4],6,-145523070),a=_(a,n,r,i,e[o+11],10,-1120210379),i=_(i,a,n,r,e[o+2],15,718787259),r=_(r,i,a,n,e[o+9],21,-343485551),n=v(n,s),r=v(r,c),i=v(i,l),a=v(a,u)}return[n,r,i,a]}function p(e,t,n,r,i,a){return v((t=v(v(t,e),v(r,a)))<<i|t>>>32-i,n)}function m(e,t,n,r,i,a,o){return p(t&n|~t&r,e,t,i,a,o)}function h(e,t,n,r,i,a,o){return p(t&r|n&~r,e,t,i,a,o)}function g(e,t,n,r,i,a,o){return p(t^n^r,e,t,i,a,o)}function _(e,t,n,r,i,a,o){return p(n^(t|~r),e,t,i,a,o)}function v(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}t.exports=function(e){return d.hash(e,f,16)}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js`,`/node_modules/gulp-browserify/node_modules/crypto-browserify`)},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(e,t,n){(function(e,n,r,i,a,o,s,c,l){var u;t.exports=u||function(e){for(var t,n=Array(e),r=0;r<e;r++)!(3&r)&&(t=4294967296*Math.random()),n[r]=t>>>((3&r)<<3)&255;return n}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js`,`/node_modules/gulp-browserify/node_modules/crypto-browserify`)},{buffer:3,lYpoI2:11}],8:[function(e,t,n){(function(n,r,i,a,o,s,c,l,u){var d=e(`./helpers`);function f(e,t){e[t>>5]|=128<<24-t%32,e[15+(t+64>>9<<4)]=t;for(var n,r,i,a=Array(80),o=1732584193,s=-271733879,c=-1732584194,l=271733878,u=-1009589776,d=0;d<e.length;d+=16){for(var f=o,h=s,g=c,_=l,v=u,y=0;y<80;y++){a[y]=y<16?e[d+y]:m(a[y-3]^a[y-8]^a[y-14]^a[y-16],1);var b=p(p(m(o,5),(b=s,r=c,i=l,(n=y)<20?b&r|~b&i:!(n<40)&&n<60?b&r|b&i|r&i:b^r^i)),p(p(u,a[y]),(n=y)<20?1518500249:n<40?1859775393:n<60?-1894007588:-899497514)),u=l,l=c,c=m(s,30),s=o,o=b}o=p(o,f),s=p(s,h),c=p(c,g),l=p(l,_),u=p(u,v)}return[o,s,c,l,u]}function p(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function m(e,t){return e<<t|e>>>32-t}t.exports=function(e){return d.hash(e,f,20,!0)}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js`,`/node_modules/gulp-browserify/node_modules/crypto-browserify`)},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(e,t,n){(function(n,r,i,a,o,s,c,l,u){function d(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function f(e,t){var n,r=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],i=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],a=Array(64);e[t>>5]|=128<<24-t%32,e[15+(t+64>>9<<4)]=t;for(var o,s,c=0;c<e.length;c+=16){for(var l=i[0],u=i[1],f=i[2],p=i[3],g=i[4],_=i[5],v=i[6],y=i[7],b=0;b<64;b++)a[b]=b<16?e[b+c]:d(d(d((s=a[b-2],m(s,17)^m(s,19)^h(s,10)),a[b-7]),(s=a[b-15],m(s,7)^m(s,18)^h(s,3))),a[b-16]),n=d(d(d(d(y,m(s=g,6)^m(s,11)^m(s,25)),g&_^~g&v),r[b]),a[b]),o=d(m(o=l,2)^m(o,13)^m(o,22),l&u^l&f^u&f),y=v,v=_,_=g,g=d(p,n),p=f,f=u,u=l,l=d(n,o);i[0]=d(l,i[0]),i[1]=d(u,i[1]),i[2]=d(f,i[2]),i[3]=d(p,i[3]),i[4]=d(g,i[4]),i[5]=d(_,i[5]),i[6]=d(v,i[6]),i[7]=d(y,i[7])}return i}var p=e(`./helpers`),m=function(e,t){return e>>>t|e<<32-t},h=function(e,t){return e>>>t};t.exports=function(e){return p.hash(e,f,32,!0)}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js`,`/node_modules/gulp-browserify/node_modules/crypto-browserify`)},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(e,t,n){(function(e,t,r,i,a,o,s,c,l){n.read=function(e,t,n,r,i){var a,o,s=8*i-r-1,c=(1<<s)-1,l=c>>1,u=-7,d=n?i-1:0,f=n?-1:1,i=e[t+d];for(d+=f,a=i&(1<<-u)-1,i>>=-u,u+=s;0<u;a=256*a+e[t+d],d+=f,u-=8);for(o=a&(1<<-u)-1,a>>=-u,u+=r;0<u;o=256*o+e[t+d],d+=f,u-=8);if(a===0)a=1-l;else{if(a===c)return o?NaN:1/0*(i?-1:1);o+=2**r,a-=l}return(i?-1:1)*o*2**(a-r)},n.write=function(e,t,n,r,i,a){var o,s,c=8*a-i-1,l=(1<<c)-1,u=l>>1,d=i===23?2**-24-2**-77:0,f=r?0:a-1,p=r?1:-1,a=+(t<0||t===0&&1/t<0);for(t=Math.abs(t),isNaN(t)||t===1/0?(s=+!!isNaN(t),o=l):(o=Math.floor(Math.log(t)/Math.LN2),t*(r=2**-o)<1&&(o--,r*=2),2<=(t+=1<=o+u?d/r:d*2**(1-u))*r&&(o++,r/=2),l<=o+u?(s=0,o=l):1<=o+u?(s=(t*r-1)*2**i,o+=u):(s=t*2**(u-1)*2**i,o=0));8<=i;e[n+f]=255&s,f+=p,s/=256,i-=8);for(o=o<<i|s,c+=i;0<c;e[n+f]=255&o,f+=p,o/=256,c-=8);e[n+f-p]|=128*a}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/ieee754/index.js`,`/node_modules/gulp-browserify/node_modules/ieee754`)},{buffer:3,lYpoI2:11}],11:[function(e,t,n){(function(e,n,r,i,a,o,s,c,l){var u,d,f;function p(){}(e=t.exports={}).nextTick=(d=typeof window<`u`&&window.setImmediate,f=typeof window<`u`&&window.postMessage&&window.addEventListener,d?function(e){return window.setImmediate(e)}:f?(u=[],window.addEventListener(`message`,function(e){var t=e.source;t!==window&&t!==null||e.data!==`process-tick`||(e.stopPropagation(),0<u.length&&u.shift()())},!0),function(e){u.push(e),window.postMessage(`process-tick`,`*`)}):function(e){setTimeout(e,0)}),e.title=`browser`,e.browser=!0,e.env={},e.argv=[],e.on=p,e.addListener=p,e.once=p,e.off=p,e.removeListener=p,e.removeAllListeners=p,e.emit=p,e.binding=function(e){throw Error(`process.binding is not supported`)},e.cwd=function(){return`/`},e.chdir=function(e){throw Error(`process.chdir is not supported`)}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/process/browser.js`,`/node_modules/gulp-browserify/node_modules/process`)},{buffer:3,lYpoI2:11}]},{},[1])(1)})}))(),1);c(),c(),c();var lh=e=>{if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null},uh=e=>Array.isArray(e)?[...e]:lh(e)?o({},e):{};function dh(e,t,n){let r=t.split(`.`),i=o({},e),a=i;for(let e=0;e<r.length;e++){let[t,i]=r[e].replace(`]`,``).split(`[`),o=e===r.length-1;if(i!==void 0){a[t]=Array.isArray(a[t])?[...a[t]]:[];let e=Number(i);if(o){a[t][e]=n;continue}a[t][e]=uh(a[t][e]),a=a[t][e];continue}if(o){a[t]=n;continue}a[t]=uh(a[t]),a=a[t]}return i}c(),c();var fh={Button:`_Button_oe4qj_1`,"Button--medium":`_Button--medium_oe4qj_34`,"Button--large":`_Button--large_oe4qj_62`,"Button-icon":`_Button-icon_oe4qj_89`,"Button--primary":`_Button--primary_oe4qj_93`,"Button--disabled":`_Button--disabled_oe4qj_123`,"Button--secondary":`_Button--secondary_oe4qj_135`,"Button--flush":`_Button--flush_oe4qj_171`,"Button--fullWidth":`_Button--fullWidth_oe4qj_179`,"Button-spinner":`_Button-spinner_oe4qj_184`};c();var ph=/^(data-.*)$/,mh=e=>{let t={};for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&ph.test(n)&&(t[n]=e[n]);return t},hh=a(`Button`,fh),gh=t=>{var n=t,{children:i,href:a,onClick:s,variant:c=`primary`,type:l,disabled:u,tabIndex:d,newTab:f,fullWidth:p,icon:m,size:h=`medium`,loading:g=!1}=n,_=r(n,[`children`,`href`,`onClick`,`variant`,`type`,`disabled`,`tabIndex`,`newTab`,`fullWidth`,`icon`,`size`,`loading`]);let[v,y]=(0,R.useState)(g);(0,R.useEffect)(()=>y(g),[g]);let b=a?`a`:l?`button`:`span`,x=mh(_);return(0,z.jsxs)(b,e(o({className:hh({primary:c===`primary`,secondary:c===`secondary`,disabled:u,fullWidth:p,[h]:!0}),onClick:e=>{s&&(y(!0),Promise.resolve(s(e)).then(()=>{y(!1)}))},type:l,disabled:u||v,tabIndex:d,target:f?`_blank`:void 0,rel:f?`noreferrer`:void 0,href:a},x),{children:[m&&(0,z.jsx)(`div`,{className:hh(`icon`),children:m}),i,v&&(0,z.jsx)(`div`,{className:hh(`spinner`),children:(0,z.jsx)(T,{size:14})})]}))};c(),c();var _h={InputWrapper:`_InputWrapper_qyenz_1`,"Input-label":`_Input-label_qyenz_5`,"Input-labelIcon":`_Input-labelIcon_qyenz_17`,"Input-disabledIcon":`_Input-disabledIcon_qyenz_24`,"Input-input":`_Input-input_qyenz_29`,"Input-select":`_Input-select_qyenz_61`,"Input-selectIcon":`_Input-selectIcon_qyenz_71`,Input:`_Input_qyenz_1`,"Input--readOnly":`_Input--readOnly_qyenz_111`,"Input-radioGroupItems":`_Input-radioGroupItems_qyenz_150`,"Input-radio":`_Input-radio_qyenz_150`,"Input-radioInner":`_Input-radioInner_qyenz_179`,"Input-radioInput":`_Input-radioInput_qyenz_261`},vh=a(`Input`,_h),yh=({children:e,icon:t,label:n,el:r=`label`,readOnly:i,className:a})=>{let o=r,s=I(`field-readonly`);return(0,z.jsxs)(o,{className:a,children:[(0,z.jsxs)(`div`,{className:vh(`label`),children:[t?(0,z.jsx)(`div`,{className:vh(`labelIcon`),children:t}):(0,z.jsx)(z.Fragment,{}),n,i&&(0,z.jsx)(`div`,{className:vh(`disabledIcon`),title:s,children:(0,z.jsx)(ne,{size:`12`})})]}),e]})},bh=({children:e,icon:t,label:n,el:r=`label`,readOnly:i})=>{let a=L(e=>e.overrides),o=(0,R.useMemo)(()=>a.fieldLabel||yh,[a]);return n?(0,z.jsx)(o,{label:n,icon:t,className:vh({readOnly:i}),readOnly:i,el:r,children:e}):(0,z.jsx)(z.Fragment,{children:e})};c(),c(),c(),c();var xh={ArrayField:`_ArrayField_62huh_5`,"ArrayField--isDraggingFrom":`_ArrayField--isDraggingFrom_62huh_30`,"ArrayField-addButton":`_ArrayField-addButton_62huh_38`,"ArrayField--hasItems":`_ArrayField--hasItems_62huh_58`,"ArrayField-inner":`_ArrayField-inner_62huh_93`,ArrayFieldItem:`_ArrayFieldItem_62huh_101`,"ArrayFieldItem--isDragging":`_ArrayFieldItem--isDragging_62huh_110`,"ArrayFieldItem--isExpanded":`_ArrayFieldItem--isExpanded_62huh_114`,"ArrayFieldItem-summary":`_ArrayFieldItem-summary_62huh_132`,"ArrayFieldItem--noFields":`_ArrayFieldItem--noFields_62huh_167`,"ArrayField--addDisabled":`_ArrayField--addDisabled_62huh_176`,"ArrayFieldItem-body":`_ArrayFieldItem-body_62huh_228`,"ArrayFieldItem-fieldset":`_ArrayFieldItem-fieldset_62huh_237`,"ArrayFieldItem-rhs":`_ArrayFieldItem-rhs_62huh_250`,"ArrayFieldItem-actions":`_ArrayFieldItem-actions_62huh_256`};c(),c();function Sh(e,t){let n=(0,R.useContext)(e);if(!n)throw Error(`useContextStore must be used inside context`);return _(n,En(t))}function Ch(e){return({children:t,value:n})=>{let[r]=(0,R.useState)(()=>se(()=>n));return(0,z.jsx)(e.Provider,{value:r,children:t})}}function wh(e){let t=(0,R.createContext)(se(v(()=>e)));return{ctx:t,Provider:Ch(t)}}var Th=wh({}),Eh=()=>(0,R.useContext)(Th.ctx);function Dh(e){let t=(0,R.useContext)(Th.ctx);if(!t)throw Error(`useContextStore must be used inside context`);return _(t,En(e))}c(),c();var Oh=a(`DragIcon`,{DragIcon:`_DragIcon_5e515_1`,"DragIcon--disabled":`_DragIcon--disabled_5e515_10`}),kh=({isDragDisabled:e})=>(0,z.jsx)(`div`,{className:Oh({disabled:e}),children:(0,z.jsx)(`svg`,{viewBox:`0 0 20 20`,width:`12`,fill:`currentColor`,children:(0,z.jsx)(`path`,{d:`M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z`})})});c(),c();var{Delay:Ah,Distance:jh}=kd,Mh=[new Ah({value:200,tolerance:10})],Nh=[new Ah({value:200,tolerance:10}),new jh({value:5})],Ph=({other:e=Nh,mouse:t,touch:n=Mh}={touch:Mh,other:Nh})=>{let[r]=(0,R.useState)(()=>[Nd.configure({activationConstraints(r,i){let{pointerType:a,target:o}=r;return a===`mouse`&&nl(o)&&(i.handle===o||i.handle?.contains(o))?t:a===`touch`?n:e}})]);return r};c(),c(),c();var Fh=`increasing`,Ih=(e,t)=>{let{dragOperation:n,droppable:r}=e,{shape:i}=r,{position:a}=n,o=n.shape?.current;if(!o||!i)return null;let s=i.center,c=Math.sqrt((s.x-t.x)**2+(s.y-t.y)**2),l=Math.sqrt((s.x-a.current.x)**2+(s.y-a.current.y)**2);return Fh=l===c?Fh:l<c?`decreasing`:`increasing`,o.center,r.id.toString(),Fh===`decreasing`?{id:r.id,value:1,type:mo.Collision}:null};c();var Lh=(e,t)=>e===`dynamic`?Math.abs(t.y)>Math.abs(t.x)?t.y===0?null:t.y>0?`down`:`up`:t.x===0?null:t.x>0?`right`:`left`:e===`x`?t.x===0?null:t.x>0?`right`:`left`:t.y===0?null:t.y>0?`down`:`up`;c();var Rh=(e,t,n,r=0)=>{let i=e.boundingRectangle,a=t.center;if(n===`down`){let e=r*t.boundingRectangle.height;return i.bottom>=a.y+e}if(n===`up`){let e=r*t.boundingRectangle.height;return i.top<a.y-e}if(n===`left`){let e=r*t.boundingRectangle.width;return a.x-e>=i.left}let o=r*t.boundingRectangle.width;return i.right-o>=a.x};c();var zh=10,Bh={current:{x:0,y:0},delta:{x:0,y:0},previous:{x:0,y:0},direction:null},Vh=(e,t=`dynamic`)=>(Bh.current=e,Bh.delta={x:e.x-Bh.previous.x,y:e.y-Bh.previous.y},Bh.direction=Lh(t,Bh.delta)||Bh.direction,(Math.abs(Bh.delta.x)>zh||Math.abs(Bh.delta.y)>zh)&&(Bh.previous=Ti.from(e)),Bh);c();var Hh=({dragOperation:e,droppable:t})=>{let n=e.position.current;if(!n)return null;let{id:r}=t;return t.shape&&t.shape.containsPoint(n)?{id:r,value:1/Ti.distance(t.shape.center,n),type:mo.PointerIntersection,priority:po.High}:null},Uh=e=>{let{dragOperation:t,droppable:n}=e,{shape:r,position:i}=t;if(!n.shape)return null;let a=r?Ei.from(r.current.boundingRectangle).corners:void 0,o=Ei.from(n.shape.boundingRectangle).corners.reduce((e,t,n)=>e+Ti.distance(Ti.from(t),a?.[n]??i.current),0)/4;return{id:n.id,value:1/o,type:mo.Collision,priority:po.Normal}};c();var Wh=se(()=>({fallbackEnabled:!1})),Gh=``,Kh=(t,n=.05)=>(r=>{let{dragOperation:i,droppable:a}=r,{position:s}=i,c=i.shape?.current,{shape:l}=a;if(!c||!l)return null;let{center:u}=c,{fallbackEnabled:d}=Wh.getState(),f=Vh(s.current,t),p={direction:f.direction},{center:m}=l,h=Rh(c,l,f.direction,n);if(i.source?.id===a.id){let t=Ih(r,f.previous);if(a.id.toString(),t)return e(o({},t),{priority:po.Highest,data:p})}let g=c.intersectionArea(l),_=g/l.area;if(g&&h){a.id.toString(),f.direction;let t={id:a.id,value:_,priority:po.High,type:mo.Collision},n=Gh===a.id;return Gh=``,e(o({},t),{id:n?`flush`:t.id,data:p})}if(d&&i.source?.id!==a.id){let n=l.boundingRectangle.right>c.boundingRectangle.left&&l.boundingRectangle.left<c.boundingRectangle.right,i=l.boundingRectangle.bottom>c.boundingRectangle.top&&l.boundingRectangle.top<c.boundingRectangle.bottom;if(t===`y`&&n||i){let n=Uh(r);if(n)return p.direction=Lh(t,{x:c.center.x-(a.shape?.center.x||0),y:c.center.y-(a.shape?.center.y||0)}),g?(a.id.toString(),Gh=a.id,e(o({},n),{priority:po.Low,data:p})):(a.id.toString(),e(o({},n),{priority:po.Lowest,data:p}))}}return a.id.toString(),null});c();var qh=(e,t=`ltr`)=>e===`up`||t===`ltr`&&e===`left`||t===`rtl`&&e===`right`?`before`:`after`,Jh=({position:e,sourceIndex:t,targetIndex:n,isSameZone:r})=>{let i=n;return r&&i>=t&&--i,e===`after`&&(i+=1),i},Yh=({children:e,onDragStart:t,onDragEnd:n,onMove:r})=>{let i=Ph({mouse:[new kd.Distance({value:5})]});return(0,z.jsx)(Af,{sensors:i,onDragStart:e=>t(e.operation.source?.id.toString()??``),onDragOver:(e,t)=>{e.preventDefault();let{operation:n}=e,{source:i,target:a}=n;if(!i||!a)return;let o=i.data.index,s=a.data.index,c=t.collisionObserver.collisions[0]?.data;o!==s&&i.id!==a.id&&r({source:o,target:Jh({position:qh(c?.direction),sourceIndex:o,targetIndex:s,isSameZone:!0})})},onDragEnd:()=>{setTimeout(()=>{n()},250)},children:e})},Xh=({id:e,index:t,disabled:n,children:r,type:i=`item`})=>{let{ref:a,isDragging:o,isDropping:s,handleRef:c}=Em({id:e,type:i,index:t,disabled:n,data:{index:t},collisionDetector:Kh(`y`)});return r({isDragging:o,isDropping:s,ref:a,handleRef:c})};c();var Zh=(0,R.createContext)({}),Qh=()=>{let t=(0,R.useContext)(Zh);return e(o({},t),{readOnlyFields:t.readOnlyFields||{}})},$h=({children:t,name:n,subName:r,wildcardName:i=n,readOnlyFields:a})=>{let s=`${n}.${r}`,c=`${i}.${r}`,l=(0,R.useMemo)(()=>Object.keys(a).reduce((t,r)=>{if(r.indexOf(s)>-1||r.indexOf(c)>-1){let s=new RegExp(`^(${n}|${i}).`.replace(/\[/g,`\\[`).replace(/\]/g,`\\]`).replace(/\./g,`\\.`).replace(/\*/g,`\\*`)),c=r.replace(s,``);return e(o({},t),{[c]:a[r]})}return t},{}),[n,r,i,a]);return(0,z.jsx)(Zh.Provider,{value:{readOnlyFields:l,localName:r},children:t})};c();var eg=(e,t)=>t.split(`.`).reduce((e,t)=>{if(!e)return;let[n,r]=t.replace(`]`,``).split(`[`),i=e[n];return r&&i?i[parseInt(r)]:i},e);c();var tg=(0,R.memo)(({field:t,id:n,index:r,name:i,subName:a,localName:s,onChange:c,forceReadOnly:l})=>{let u=r===void 0?i:`${i}[${r}]`,d=i?`${u}.${a}`:a,f=r===void 0?s??a:`${s}[${r}]`,p=r===void 0?s:`${s}[*]`,m=`${f}.${a}`,h=`${p}.${a}`,{readOnlyFields:g}=Qh(),_=l||(g[d]===void 0?g[h]:g[m]),v=t.label||a;return(0,z.jsx)($h,{name:f,wildcardName:p,subName:a,readOnlyFields:g,children:(0,z.jsx)(zg,{name:d,label:v,id:n,readOnly:_,field:e(o({},t),{label:v}),onChange:(e,t)=>{c(e,t,a)}})})}),ng=a(`ArrayField`,xh),rg=a(`ArrayFieldItem`,xh),ig=(0,R.memo)(({index:e,originalIndex:t,field:n,name:r})=>{let i=Dh(t=>eg(t,`${[r]}[${e}]`)),a=I(`field-arrayitem-summary`,{index:t});return(0,R.useMemo)(()=>i&&n.getItemSummary?n.getItemSummary(i,e):a,[i,n,t,e,a])}),ag=(0,R.memo)(({id:e,arrayId:t,index:n,dragIndex:r,originalIndex:i,field:a,onChange:o,onToggleExpand:s,readOnly:c,actions:l,name:u,localName:d})=>{let f=L(n=>n.state.ui.arrayState[t]?.openId===e),p=L(e=>e.permissions.getPermissions({item:e.selectedItem}).edit),m=(0,R.useMemo)(()=>a.arrayFields?Object.values(a.arrayFields).some(e=>e.type!==`slot`&&e.visible!==!1):!1,[a.arrayFields]);return(0,z.jsx)(Xh,{id:e,index:r,disabled:c,children:({isDragging:t,ref:r,handleRef:h})=>(0,z.jsxs)(`div`,{ref:r,className:rg({isExpanded:f&&m,isDragging:t,noFields:!m}),children:[(0,z.jsxs)(`div`,{ref:h,onClick:n=>{t||(n.preventDefault(),n.stopPropagation(),m&&s(e,f))},className:rg(`summary`),children:[(0,z.jsx)(ig,{index:n,originalIndex:i,field:a,name:u}),(0,z.jsxs)(`div`,{className:rg(`rhs`),children:[!c&&(0,z.jsx)(`div`,{className:rg(`actions`),children:l}),(0,z.jsx)(`div`,{children:(0,z.jsx)(kh,{})})]})]}),(0,z.jsx)(`div`,{className:rg(`body`),children:f&&m&&(0,z.jsx)(`fieldset`,{className:rg(`fieldset`),children:Object.keys(a.arrayFields).map(t=>{let r=a.arrayFields[t];return(0,z.jsx)(tg,{id:`${e}_${t}`,name:u,index:n,subName:t,localName:d,field:r,onChange:o,forceReadOnly:!p},`${e}_${t}_${n}`)})})})]})})}),og=({field:t,onChange:n,id:r,name:i=r,label:a,labelIcon:s,readOnly:c,Label:l=e=>(0,z.jsx)(`div`,o({},e))})=>{let u=L(e=>e.setUi),d=P(),f=Eh(),{localName:p=i}=Qh(),m=()=>eg(f.getState(),i)??[],h=(0,R.useCallback)(()=>{let{state:e}=d.getState(),t=e.ui.arrayState[r];if(t?.items?.length)return t;let n=m();return{items:Array.from(n||[]).map((e,t)=>({_originalIndex:t,_currentIndex:t,_arrayId:`${r}-${t}`})),openId:``}},[d,r,m,i]),g=Dh(()=>m().length),_=(0,R.useMemo)(h,[h]),v=L(e=>e.state.ui.arrayState[r]??_),y=P(),b=(0,R.useCallback)(t=>{let n=y.getState().state;return{arrayState:e(o({},n.ui.arrayState),{[r]:o(o({},h()),t)})}},[y]),S=(0,R.useCallback)(()=>h().items.reduce((e,t)=>t._originalIndex>e?t._originalIndex:e,-1),[]),C=(0,R.useCallback)(t=>{let n=S(),i=h(),a=Array.from(t||[]).map((e,t)=>{let a=i.items[t],o={_originalIndex:a?._originalIndex??n+1,_currentIndex:a?._currentIndex??t,_arrayId:i.items[t]?._arrayId||`${r}-${n+1}`};return o._originalIndex>n&&(n=o._originalIndex),o});return e(o({},i),{items:a})},[]),[w,T]=(0,R.useState)(``),ee=!!w,E=(0,R.useRef)([]);(0,R.useEffect)(()=>{E.current=m()},[]);let D=(0,R.useCallback)(e=>{if(t.type!==`array`||!t.arrayFields)return;let n=y.getState().config;return Ze({value:e,fields:t.arrayFields,mappers:{slot:({value:e})=>e.map(e=>re(e,n,!0))},config:n})},[y,t]),O=(0,R.useCallback)(()=>{let t=h(),n=t.items.map((t,n)=>e(o({},t),{_currentIndex:n})),i=y.getState().state,a={arrayState:e(o({},i.ui.arrayState),{[r]:e(o({},t),{items:n})})};u(a,!1)},[]),te=(0,R.useCallback)(e=>{let t=C(e);u(b(t),!1),n(e)},[C,u,b,n]);(0,R.useEffect)(()=>{let e=C(m());u(b(e),!1)},[g]);let ne=I(`field-arrayitem-duplicate`),ie=I(`field-arrayitem-delete`);if(t.type!==`array`||!t.arrayFields)return null;let k=t.max!==void 0&&v?.items.length>=t.max||c;return(0,z.jsx)(l,{label:a||i,icon:s||(0,z.jsx)(ce,{size:16}),el:`div`,readOnly:c,children:(0,z.jsx)(Yh,{onDragStart:e=>{E.current=m(),T(e),O()},onDragEnd:()=>{T(``),n(E.current);let e=f.getState();f.setState(dh(e,i,E.current)),O()},onMove:t=>{let n=h();if(n.items[t.source]._arrayId!==w)return;let i=Ue(E.current,t.source,t.target),a=Ue(n.items,t.source,t.target),s=y.getState().state,c={arrayState:e(o({},s.ui.arrayState),{[r]:e(o({},n),{items:a})})};u(c,!1),E.current=i},children:(0,z.jsxs)(`div`,{className:ng({hasItems:g>0,addDisabled:k}),children:[v.items.length>0&&(0,z.jsx)(`div`,{className:ng(`inner`),"data-dnd-container":!0,children:v.items.map((a,s)=>{let{_arrayId:l=`${r}-${s}`,_originalIndex:d=s,_currentIndex:f=s}=a;return(0,z.jsx)(ag,{index:f,dragIndex:s,originalIndex:d,arrayId:r,id:l,readOnly:c,field:t,name:i,localName:p,onChange:(t,r,i)=>{let a=m(),c=Array.from(a||[])[s]||{};n(Ne(a,s,e(o({},c),{[i]:t})),r)},onToggleExpand:(e,t)=>{u(b(t?{openId:``}:{openId:e}))},actions:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(`div`,{className:rg(`action`),children:(0,z.jsx)(Re,{type:`button`,disabled:!!k,onClick:e=>{e.stopPropagation();let t=[...m()||[]],n=D(t[s]);t.splice(s,0,n),te(t)},title:ne,children:(0,z.jsx)(Me,{size:16})})}),(0,z.jsx)(`div`,{className:rg(`action`),children:(0,z.jsx)(Re,{type:`button`,disabled:t.min!==void 0&&t.min>=v.items.length,onClick:e=>{e.stopPropagation();let t=[...m()||[]];t.splice(s,1),te(t)},title:ie,children:(0,z.jsx)($e,{size:16})})})]})},l)})}),!k&&(0,z.jsx)(`button`,{type:`button`,className:ng(`addButton`),onClick:()=>{if(ee)return;let e=m()||[],n=typeof t.defaultItemProps==`function`?t.defaultItemProps(e.length):t.defaultItemProps??{},r=j(D(n),t.arrayFields),i=[...e,r];te(i)},children:(0,z.jsx)(x,{size:21})})]})})})};c(),c(),c();var sg=(e,t=!0)=>Dh(n=>t?eg(n,e):void 0);c();var cg=e=>L(t=>t.state.ui.field.focus===e),lg=(e,t,{tracked:n=!0,fallback:r}={})=>{let i=sg(e,n),a=cg(e),[o,s]=(0,R.useState)(i),c=(0,R.useCallback)((e,...n)=>{s(e),t(e,...n)},[t]);return(0,R.useEffect)(()=>{n&&(a||s(i))},[n,a,i]),n?[r!==void 0&&o==null?r:o,c]:[void 0,t]},ug=a(`Input`,_h),dg=({field:e,onChange:t,readOnly:n,id:r,name:i=r,label:a,labelIcon:o,Label:s})=>{let[c,l]=lg(i,t,{fallback:``});return(0,z.jsx)(s,{label:a||i,icon:o||(0,z.jsxs)(z.Fragment,{children:[e.type===`text`&&(0,z.jsx)(Fe,{size:16}),e.type===`number`&&(0,z.jsx)(lt,{size:16})]}),readOnly:n,children:(0,z.jsx)(`input`,{className:ug(`input`),autoComplete:`off`,type:e.type,title:a||i,name:i,value:c,onChange:t=>{if(e.type===`number`){let n=Number(t.currentTarget.value);if(e.min!==void 0&&n<e.min||e.max!==void 0&&n>e.max)return;l(n)}else l(t.currentTarget.value)},readOnly:n,tabIndex:n?-1:void 0,id:r,min:e.type===`number`?e.min:void 0,max:e.type===`number`?e.max:void 0,placeholder:e.type===`text`||e.type===`number`?e.placeholder:void 0,step:e.type===`number`?e.step:void 0})})};c(),c(),c();var fg={"ExternalInput-actions":`_ExternalInput-actions_143vl_1`,"ExternalInput-button":`_ExternalInput-button_143vl_5`,"ExternalInput--dataSelected":`_ExternalInput--dataSelected_143vl_34`,"ExternalInput--readOnly":`_ExternalInput--readOnly_143vl_41`,"ExternalInput-detachButton":`_ExternalInput-detachButton_143vl_48`,ExternalInput:`_ExternalInput_143vl_1`,ExternalInputModal:`_ExternalInputModal_143vl_118`,"ExternalInputModal-grid":`_ExternalInputModal-grid_143vl_128`,"ExternalInputModal--filtersToggled":`_ExternalInputModal--filtersToggled_143vl_139`,"ExternalInputModal-filters":`_ExternalInputModal-filters_143vl_144`,"ExternalInputModal-masthead":`_ExternalInputModal-masthead_143vl_164`,"ExternalInputModal-tableWrapper":`_ExternalInputModal-tableWrapper_143vl_173`,"ExternalInputModal-table":`_ExternalInputModal-table_143vl_173`,"ExternalInputModal-thead":`_ExternalInputModal-thead_143vl_189`,"ExternalInputModal-th":`_ExternalInputModal-th_143vl_189`,"ExternalInputModal-td":`_ExternalInputModal-td_143vl_204`,"ExternalInputModal-tr":`_ExternalInputModal-tr_143vl_210`,"ExternalInputModal-tbody":`_ExternalInputModal-tbody_143vl_217`,"ExternalInputModal--hasData":`_ExternalInputModal--hasData_143vl_244`,"ExternalInputModal-loadingBanner":`_ExternalInputModal-loadingBanner_143vl_248`,"ExternalInputModal--isLoading":`_ExternalInputModal--isLoading_143vl_265`,"ExternalInputModal-searchForm":`_ExternalInputModal-searchForm_143vl_269`,"ExternalInputModal-search":`_ExternalInputModal-search_143vl_269`,"ExternalInputModal-searchIcon":`_ExternalInputModal-searchIcon_143vl_306`,"ExternalInputModal-searchIconText":`_ExternalInputModal-searchIconText_143vl_333`,"ExternalInputModal-searchInput":`_ExternalInputModal-searchInput_143vl_343`,"ExternalInputModal-searchActions":`_ExternalInputModal-searchActions_143vl_358`,"ExternalInputModal-searchActionIcon":`_ExternalInputModal-searchActionIcon_143vl_371`,"ExternalInputModal-footerContainer":`_ExternalInputModal-footerContainer_143vl_375`,"ExternalInputModal-footer":`_ExternalInputModal-footer_143vl_375`,"ExternalInputModal-field":`_ExternalInputModal-field_143vl_388`};c(),c();var pg=a(`Modal`,{Modal:`_Modal_g5xob_1`,"Modal--isOpen":`_Modal--isOpen_g5xob_15`,"Modal-inner":`_Modal-inner_g5xob_19`}),mg=({children:e,onClose:t,isOpen:n})=>{let[r,i]=(0,R.useState)(null);return(0,R.useEffect)(()=>{i(document.getElementById(`puck-portal-root`))},[]),r?(0,of.createPortal)((0,z.jsx)(`div`,{className:pg({isOpen:n}),onClick:t,children:(0,z.jsx)(`div`,{className:pg(`inner`),onClick:e=>e.stopPropagation(),children:e})}),r):(0,z.jsx)(`div`,{})};c(),c();var hg=a(`Heading`,{Heading:`_Heading_97eh4_1`,"Heading--xxxxl":`_Heading--xxxxl_97eh4_12`,"Heading--xxxl":`_Heading--xxxl_97eh4_18`,"Heading--xxl":`_Heading--xxl_97eh4_22`,"Heading--xl":`_Heading--xl_97eh4_26`,"Heading--l":`_Heading--l_97eh4_30`,"Heading--m":`_Heading--m_97eh4_34`,"Heading--s":`_Heading--s_97eh4_38`,"Heading--xs":`_Heading--xs_97eh4_42`}),gg=({children:e,rank:t,size:n=`m`})=>{let r=t?`h${t}`:`span`;return(0,z.jsx)(r,{className:hg({[n]:!0}),children:e})};c();var _g=a(`ExternalInput`,fg),vg=a(`ExternalInputModal`,fg),yg=({count:e})=>{let t=I(`field-external-result-singular`,{count:e}),n=I(`field-external-result-plural`,{count:e});return(0,z.jsx)(`span`,{className:vg(`footer`),children:e===1?t:n})},bg={},xg=({field:t,onChange:n,value:r=null,name:i,id:a,readOnly:c})=>{let{mapProp:l=e=>e,mapRow:u=e=>e,filterFields:d}=t||{},{enabled:f}=t.cache??{enabled:!0},[p,m]=(0,R.useState)([]),[h,g]=(0,R.useState)(!1),[_,v]=(0,R.useState)(!0),y=!!d,[b,x]=(0,R.useState)(t.initialFilters||{}),[S,C]=(0,R.useState)(y),w=(0,R.useMemo)(()=>p.map(u),[p]),ee=(0,R.useMemo)(()=>{let e=new Set;for(let t of w)for(let n of Object.keys(t))(typeof t[n]==`string`||typeof t[n]==`number`||(0,R.isValidElement)(t[n]))&&e.add(n);return Array.from(e)},[w]),[E,D]=(0,R.useState)(t.initialQuery||``),O=(0,R.useCallback)((e,n)=>s(null,null,function*(){v(!0);let r=`${a}-${e}-${JSON.stringify(n)}`,i;i=f&&bg[r]?bg[r]:yield t.fetchList({query:e,filters:n}),i&&(m(i),v(!1),f&&(bg[r]=i))}),[a,t]),te=(0,R.useCallback)(e=>t.renderFooter?t.renderFooter(e):(0,z.jsx)(yg,{count:e.items.length}),[t.renderFooter]);(0,R.useEffect)(()=>{O(E,b)},[]);let ne=I(`field-external-item`),re=I(`field-external-search`),ie=I(`field-external-togglefilters`),k=I(`field-external-selectdata`);return(0,z.jsxs)(`div`,{className:_g({dataSelected:!!r,modalVisible:h,readOnly:c}),id:a,children:[(0,z.jsxs)(`div`,{className:_g(`actions`),children:[(0,z.jsx)(`button`,{type:`button`,onClick:()=>g(!0),className:_g(`button`),disabled:c,children:r?t.getItemSummary?t.getItemSummary(r):ne:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(ae,{size:`16`}),(0,z.jsx)(`span`,{children:t.placeholder})]})}),r&&(0,z.jsx)(`button`,{type:`button`,className:_g(`detachButton`),onClick:()=>{n(null)},disabled:c,children:(0,z.jsx)(ue,{size:16})})]}),(0,z.jsx)(mg,{onClose:()=>g(!1),isOpen:h,children:(0,z.jsxs)(`form`,{className:vg({isLoading:_,loaded:!_,hasData:w.length>0,filtersToggled:S}),onSubmit:e=>{e.preventDefault(),e.stopPropagation(),O(E,b)},children:[(0,z.jsx)(`div`,{className:vg(`masthead`),children:t.showSearch?(0,z.jsxs)(`div`,{className:vg(`searchForm`),children:[(0,z.jsxs)(`label`,{className:vg(`search`),children:[(0,z.jsx)(`span`,{className:vg(`searchIconText`),children:re}),(0,z.jsx)(`div`,{className:vg(`searchIcon`),children:(0,z.jsx)(ye,{size:`18`})}),(0,z.jsx)(`input`,{className:vg(`searchInput`),name:`q`,type:`search`,placeholder:t.placeholder,onChange:e=>{D(e.currentTarget.value)},autoComplete:`off`,value:E})]}),(0,z.jsxs)(`div`,{className:vg(`searchActions`),children:[(0,z.jsx)(gh,{type:`submit`,loading:_,fullWidth:!0,children:re}),y&&(0,z.jsx)(`div`,{className:vg(`searchActionIcon`),children:(0,z.jsx)(Re,{type:`button`,title:ie,onClick:e=>{e.preventDefault(),e.stopPropagation(),C(!S)},children:(0,z.jsx)(be,{size:20})})})]})]}):(0,z.jsx)(gg,{rank:`2`,size:`xs`,children:t.placeholder||k})}),(0,z.jsxs)(`div`,{className:vg(`grid`),children:[y&&(0,z.jsx)(`div`,{className:vg(`filters`),children:y&&Object.keys(d).map(t=>{let n=d[t];return(0,z.jsx)(`div`,{className:vg(`field`),children:(0,z.jsx)(yh,{label:n.label||t,children:(0,z.jsx)(Vg,{field:n,id:`external_field_${t}_filter`,value:b[t],onChange:n=>{x(r=>{let i=e(o({},r),{[t]:n});return O(E,i),i})}})})},t)})}),(0,z.jsxs)(`div`,{className:vg(`tableWrapper`),children:[(0,z.jsxs)(`table`,{className:vg(`table`),children:[(0,z.jsx)(`thead`,{className:vg(`thead`),children:(0,z.jsx)(`tr`,{className:vg(`tr`),children:ee.map(e=>(0,z.jsx)(`th`,{className:vg(`th`),style:{textAlign:`left`},children:e},e))})}),(0,z.jsx)(`tbody`,{className:vg(`tbody`),children:w.map((e,t)=>(0,z.jsx)(`tr`,{style:{whiteSpace:`nowrap`},className:vg(`tr`),onClick:()=>{n(l(p[t])),g(!1)},children:ee.map(t=>(0,z.jsx)(`td`,{className:vg(`td`),children:e[t]},t))},t))})]}),(0,z.jsx)(`div`,{className:vg(`loadingBanner`),children:(0,z.jsx)(T,{size:24})})]})]}),(0,z.jsx)(`div`,{className:vg(`footerContainer`),children:(0,z.jsx)(te,{items:w})})]})})]})},Sg=({field:t,onChange:n,id:r,name:i=r,label:a,labelIcon:c,Label:l,readOnly:u})=>{let d=sg(i),f=t,p=t,m=I(`field-external-selectdata`);return(0,R.useEffect)(()=>{p.adaptor&&console.error("Warning: The `adaptor` API is deprecated. Please use updated APIs on the `external` field instead. This will be a breaking change in a future release.")},[]),t.type===`external`?(0,z.jsx)(l,{label:a||i,icon:c||(0,z.jsx)(ae,{size:16}),el:`div`,children:(0,z.jsx)(xg,{name:i,field:e(o({},f),{placeholder:p.adaptor?.name?`Select from ${p.adaptor.name}`:f.placeholder||m,mapProp:p.adaptor?.mapProp||f.mapProp,mapRow:f.mapRow,fetchList:p.adaptor?.fetchList?()=>s(null,null,function*(){return yield p.adaptor.fetchList(p.adaptorParams)}):f.fetchList}),onChange:n,value:d,id:r,readOnly:u})}):null};c();var Cg=a(`Input`,_h),wg=({field:e,onChange:t,readOnly:n,id:r,name:i=r,label:a,labelIcon:o,Label:s})=>{let c=sg(i);return e.type!==`radio`||!e.options?null:(0,z.jsx)(s,{icon:o||(0,z.jsx)(ke,{size:16}),label:a||i,readOnly:n,el:`div`,children:(0,z.jsx)(`div`,{className:Cg(`radioGroupItems`),id:r,children:e.options.map(e=>(0,z.jsxs)(`label`,{className:Cg(`radio`),children:[(0,z.jsx)(`input`,{type:`radio`,className:Cg(`radioInput`),value:JSON.stringify({value:e.value}),name:i,onChange:e=>{t(JSON.parse(e.target.value).value)},disabled:n,checked:c===e.value}),(0,z.jsx)(`div`,{className:Cg(`radioInner`),children:e.label||e.value?.toString()})]},e.label+e.value))})})};c();var Tg=a(`Input`,_h),Eg=({field:e,onChange:t,label:n,labelIcon:r,Label:i,id:a,name:o=a,readOnly:s})=>{let c=sg(o);return e.type!==`select`||!e.options?null:(0,z.jsx)(i,{label:n||o,icon:r||(0,z.jsx)(we,{size:16}),readOnly:s,children:(0,z.jsxs)(`div`,{className:Tg(`select`),children:[(0,z.jsx)(`select`,{id:a,title:n||o,className:Tg(`input`),disabled:s,onChange:e=>{t(JSON.parse(e.target.value).value)},value:JSON.stringify({value:c}),children:e.options.map(e=>(0,z.jsx)(`option`,{label:e.label,value:JSON.stringify({value:e.value})},e.label+JSON.stringify(e.value)))}),(0,z.jsx)(we,{size:18,className:Tg(`selectIcon`)})]})})};c();var Dg=a(`Input`,_h),Og=({field:e,onChange:t,readOnly:n,id:r,name:i=r,label:a,labelIcon:o,Label:s})=>{let[c,l]=lg(i,t,{fallback:``});return(0,z.jsx)(s,{label:a||i,icon:o||(0,z.jsx)(Fe,{size:16}),readOnly:n,children:(0,z.jsx)(`textarea`,{id:r,className:Dg(`input`),autoComplete:`off`,name:i,value:c,onChange:e=>l(e.currentTarget.value),readOnly:n,tabIndex:n?-1:void 0,rows:5,placeholder:e.type===`textarea`?e.placeholder:void 0})})};c(),c();var kg=(0,R.memo)(t=>(0,z.jsx)(on,e(o({},t),{editor:null,menu:(0,z.jsx)(rn,{field:t.field,editor:null,editorState:null,readOnly:t.readOnly??!1}),children:(0,z.jsx)(`div`,{className:`rich-text`,dangerouslySetInnerHTML:{__html:t.content},contentEditable:!0})})));kg.displayName=`EditorFallback`;var Ag=(0,R.lazy)(()=>Dt(()=>import(`./Editor-44C53YAG-Bs43D8Mq.js`).then(e=>({default:e.Editor})),__vite__mapDeps([13,1,2,3,7,9,12,5,4]))),jg=({onChange:e,readOnly:t=!1,id:n,name:r=n,label:i,labelIcon:a,Label:s,field:c})=>{let l={onChange:e,content:sg(r),readOnly:t,field:c,id:n,name:r};return(0,z.jsx)(z.Fragment,{children:(0,z.jsx)(s,{label:i||r,icon:a||(0,z.jsx)(Fe,{size:16}),readOnly:t,el:`div`,children:(0,z.jsx)(R.Suspense,{fallback:(0,z.jsx)(kg,o({},l)),children:(0,z.jsx)(Ag,o({},l))})})})};c(),c();var Mg=a(`ObjectField`,{ObjectField:`_ObjectField_c5reb_1`,"ObjectField-fieldset":`_ObjectField-fieldset_c5reb_10`}),Ng=({field:t,onChange:n,id:r,name:i=r,label:a,labelIcon:s,Label:c,readOnly:l})=>{let{localName:u=i}=Qh(),d=Eh(),f=L(e=>e.permissions.getPermissions({item:e.selectedItem}).edit),p=()=>eg(d.getState(),i)??{};return t.type!==`object`||!t.objectFields?null:(0,z.jsx)(c,{label:a||i,icon:s||(0,z.jsx)(xe,{size:16}),el:`div`,readOnly:l,children:(0,z.jsx)(`div`,{className:Mg(),children:(0,z.jsx)(`fieldset`,{className:Mg(`fieldset`),children:Object.keys(t.objectFields).map(a=>{let s=t.objectFields[a],c=`${u}.${a}`;return(0,z.jsx)(tg,{id:`${r}_${a}`,name:i,subName:a,localName:u,field:s,forceReadOnly:!f,onChange:(t,r,i)=>{let a=p();a[i]!==t&&n(e(o({},a),{[i]:t}),r)}},c)})})})})};c();var Pg=()=>{if(R.useId!==void 0)return R.useId();let[e]=(0,R.useState)(k());return e},Fg=a(`Input`,_h),Ig=a(`InputWrapper`,_h),Lg={array:og,external:Sg,object:Ng,select:Eg,textarea:Og,radio:wg,text:dg,number:dg,richtext:jg};function Rg(t){let n=L(e=>e.dispatch),r=L(e=>e.overrides),i=L(En(e=>e.selectedItem?.readOnly)),a=(0,R.useContext)(Zh),{id:s,Label:c=bh}=t,l=t.field,u=l.label,d=l.labelIcon,f=Pg(),p=s||f,m=(0,R.useMemo)(()=>e(o({},r.fieldTypes),{custom:r.fieldTypes?.custom,array:r.fieldTypes?.array||Lg.array,external:r.fieldTypes?.external||Lg.external,object:r.fieldTypes?.object||Lg.object,select:r.fieldTypes?.select||Lg.select,textarea:r.fieldTypes?.textarea||Lg.textarea,radio:r.fieldTypes?.radio||Lg.radio,text:r.fieldTypes?.text||Lg.text,number:r.fieldTypes?.number||Lg.number,richtext:r.fieldTypes?.richtext||Lg.richtext}),[r]),h=l.type===`custom`||!!r.fieldTypes?.[l.type],g=t.name??p,_=Eh(),[v,y]=lg(g,(0,R.useMemo)(()=>h?(e,n)=>{var r;(r=t.onChange)==null||r.call(t,e,n),_.setState(dh(_.getState(),g,e))}:t.onChange,[h,t.onChange,g,_]),{tracked:h}),b=(0,R.useMemo)(()=>e(o({},t),{field:l,label:u,labelIcon:d,Label:c,id:p,value:v,onChange:y}),[t,l,u,d,c,p,v,y]),x=(0,R.useCallback)(e=>{b.name&&(e.target.nodeName===`INPUT`||e.target.nodeName===`TEXTAREA`)&&(e.stopPropagation(),n({type:`setUi`,ui:{field:{focus:b.name}}}))},[b.name]),S=(0,R.useCallback)(e=>{`name`in e.target&&n({type:`setUi`,ui:{field:{focus:null}}})},[]),C=(0,R.useMemo)(()=>l.type!==`custom`&&l.type!==`slot`?Lg[l.type]:e=>null,[l.type]),w=l.type===`custom`?l.key:void 0,T=(0,R.useMemo)(()=>{if(l.type===`custom`&&!m[l.type])return l.render?l.render:null;if(l.type!==`slot`)return m[l.type]},[l.type,w,m]),{visible:ee=!0}=t.field;if(!ee||l.type===`slot`)return null;if(!T)throw Error(`Field type for ${l.type} did not exist.`);return(0,z.jsx)(Zh.Provider,{value:{readOnlyFields:a.readOnlyFields||i||{},localName:a.localName??b.name},children:(0,z.jsx)(`div`,{className:Ig(),onFocus:x,onBlur:S,onClick:e=>{e.stopPropagation()},children:(0,z.jsx)(T,e(o({},b),{children:(0,z.jsx)(C,o({},b))}))})})}function zg(e){return(0,z.jsx)(Rg,o({},e))}function Bg(t){var n=t,{value:i}=n,a=r(n,[`value`]);let s=(0,R.useMemo)(()=>t=>(0,z.jsx)(`div`,e(o({},t),{className:Fg({readOnly:a.readOnly})})),[a.readOnly]),c=Eh(),l=(0,R.useCallback)(e=>{a.id&&(c.setState({[a.id]:e}),a.onChange(e))},[c,a.onChange,a.id]);return(0,R.useEffect)(()=>{a.id&&c.setState({[a.id]:i})},[a.id,i,c]),(0,z.jsx)(Rg,e(o({},a),{onChange:l,Label:s}))}function Vg(t){let n=Pg();return t.field.type===`slot`?null:(0,z.jsx)(Th.Provider,{value:{[n]:t.value},children:(0,z.jsx)(Bg,e(o({},t),{id:n}))})}c(),c(),c(),c();var Hg={DraggableComponent:`_DraggableComponent_1627v_1`,"DraggableComponent-overlayWrapper":`_DraggableComponent-overlayWrapper_1627v_6`,"DraggableComponent-overlay":`_DraggableComponent-overlay_1627v_6`,"DraggableComponent-loadingOverlay":`_DraggableComponent-loadingOverlay_1627v_38`,"DraggableComponent--hover":`_DraggableComponent--hover_1627v_54`,"DraggableComponent--isSelected":`_DraggableComponent--isSelected_1627v_72`,"DraggableComponent-actionsOverlay":`_DraggableComponent-actionsOverlay_1627v_89`,"DraggableComponent-actions":`_DraggableComponent-actions_1627v_89`,"DraggableComponent-actionsAction":`_DraggableComponent-actionsAction_1627v_111`};c();function Ug(e){let t={x:0,y:0},n=e;for(;n&&n!==document.documentElement;){let e=n.parentElement;e&&(t.x+=e.scrollLeft,t.y+=e.scrollTop),n=e}return t}c();var Wg=(0,R.createContext)(null),Gg=(0,R.createContext)(se(()=>({zoneDepthIndex:{},nextZoneDepthIndex:{},areaDepthIndex:{},nextAreaDepthIndex:{},draggedItem:null,previewIndex:{},enabledIndex:{},hoveringComponent:null,registerRootVirtualizer:()=>{},unregisterRootVirtualizer:()=>{},scrollToComponent:()=>!1}))),Kg=({children:e,store:t})=>(0,z.jsx)(Gg.Provider,{value:t,children:e}),qg=({children:e,value:t})=>{let n=L(e=>e.dispatch),r=(0,R.useCallback)(e=>{n({type:`registerZone`,zone:e})},[n]),i=(0,R.useMemo)(()=>o({registerZone:r},t),[t]);return(0,z.jsx)(z.Fragment,{children:i&&(0,z.jsx)(Wg.Provider,{value:i,children:e})})};c();var Jg=(e,t=[])=>{let n=P();return(0,R.useCallback)(()=>{let t=()=>{},r=n=>{n?e(!1):(setTimeout(()=>{e(!0)},0),t&&t())},i=n.getState().state.ui.isDragging;return r(i),i&&(t=n.subscribe(e=>e.state.ui.isDragging,e=>{r(e)})),t},[n,...t])};c(),c(),c();var Yg=()=>{if(typeof window>`u`)return;let e=document.querySelector(`#preview-frame`);return e?.tagName===`IFRAME`?e.contentDocument||document:e?.ownerDocument||document};c(),c();var Xg=e=>typeof CSS<`u`&&typeof CSS.escape==`function`?CSS.escape(e):e,Zg=e=>`[data-puck-component="${Xg(e)}"]`,Qg=e=>`[data-puck-dropzone="${Xg(e)}"]`,$g={duration:250,easing:`ease`},e_=10,t_=e=>e.defaultView?.matchMedia(`(prefers-reduced-motion: reduce)`).matches??!1,n_=(e,{zones:t,itemId:n,targetZone:r,getExpectedOrder:i,initialExpectedOrder:a=[]},o)=>{let s=new Set(a),c=0,l=()=>{let a=e.querySelector(Qg(r)),u=i(),d=n??u.find(e=>!s.has(e)),f=d?a?.querySelector(`:scope > ${Zg(d)}:not([data-dnd-dragging]):not([data-dnd-placeholder])`)??null:null,p=a?Array.from(a.querySelectorAll(`:scope > [data-puck-component]:not([data-dnd-dragging]):not([data-dnd-placeholder])`)).map(e=>e.getAttribute(`data-puck-component`)):[],m=new Set(p),h=u.filter(e=>m.has(e)),g=p.length===h.length&&p.every((e,t)=>e===h[t]),_=t.every(t=>t===r||!d||!e.querySelector(`${Qg(t)} > ${Zg(d)}`));if((!f||!g||!_)&&c<e_){c++,requestAnimationFrame(l);return}o(f)};requestAnimationFrame(l)},r_=(e,t)=>{let n={x:0,y:0,scaleX:1,scaleY:1},r=e.ownerDocument.defaultView?.frameElement;for(;r&&r!==t;){let e=r.getBoundingClientRect(),t=r.offsetWidth?e.width/r.offsetWidth:1,i=r.offsetHeight?e.height/r.offsetHeight:1;n.x+=e.left,n.y+=e.top,n.scaleX*=t,n.scaleY*=i,r=r.ownerDocument.defaultView?.frameElement}return n},i_=(e,t)=>{let n=e.getBoundingClientRect();if(e.ownerDocument===t)return n;let r=r_(e,t.defaultView?.frameElement??null);return{left:n.left*r.scaleX+r.x,top:n.top*r.scaleY+r.y,width:n.width*r.scaleX,height:n.height*r.scaleY}},a_=({element:e,feedbackElement:t,placeholder:n,translate:r})=>{if(t_(t.ownerDocument))return;let i=n??e,a={frameTransform:t.ownerDocument===i.ownerDocument?null:void 0},o=new Qc(t,a),s=new Qc(i,a),c=Nc(wc(t).translate)??r,l={x:c.x-(o.center.x-s.center.x),y:c.y-(o.center.y-s.center.y)};return t.setAttribute(`data-dnd-dropping`,``),t.animate({translate:[`${c.x}px ${c.y}px 0`,`${l.x}px ${l.y}px 0`]},$g).finished.catch(()=>void 0).then(()=>{t.removeAttribute(`data-dnd-dropping`)})},o_=({feedbackElement:t,itemId:n,targetZone:r,getExpectedOrder:i})=>{let a=t.ownerDocument,s=Yg()??a;if(t_(a))return;let c=t.getBoundingClientRect(),l=i(),u=t.cloneNode(!0);u.removeAttribute(`id`),u.removeAttribute(`popover`),u.removeAttribute(`data-puck-component`),u.removeAttribute(`data-puck-dnd`),u.removeAttribute(`data-dnd-dragging`),u.setAttribute(`inert`,`true`),Object.assign(u.style,{position:`fixed`,left:`${c.left}px`,top:`${c.top}px`,width:`${c.width}px`,height:`${c.height}px`,margin:`0`,overflow:`hidden`,pointerEvents:`none`,transform:`none`,transition:`none`,translate:`none`,zIndex:`2147483647`});let d=s.createElement(`style`);d.textContent=`
    ${n?`${Zg(n)} { visibility: hidden !important; }`:``}
    [data-puck-overlay] { opacity: 0 !important; }
  `,s.head.appendChild(d),a.body.appendChild(u);let f=()=>{u.remove(),d.remove()};n_(s,{zones:[r],itemId:n,targetZone:r,getExpectedOrder:i,initialExpectedOrder:l},t=>{if(!t){f();return}let r=t.getAttribute(`data-puck-component`);!n&&r&&(d.textContent+=`
          ${Zg(r)} { visibility: hidden !important; }
        `);let i=i_(t,a);u.animate({left:[`${c.left}px`,`${i.left}px`],top:[`${c.top}px`,`${i.top}px`],width:[`${c.width}px`,`${i.width}px`],height:[`${c.height}px`,`${i.height}px`]},e(o({},$g),{fill:`forwards`})).finished.catch(()=>void 0).then(f)})},s_=(t,n)=>{let r=t.source.manager?.dragOperation;if(!((r?.canceled??!1)||r?.target?.type===`void`)&&n){o_(e(o({},n),{feedbackElement:t.feedbackElement}));return}return a_(t)};c();var c_=(e,t)=>e.indexes.zones[t]?.contentIds??[],l_=(e,t)=>{let n=P();return(0,R.useCallback)(r=>{let i=Object.values(e.getState().previewIndex??{}),a=t?i.find(e=>e?.props.id===t&&!e.ghost):i.find(e=>e?.type===`insert`),o=t?a?.linePlaceholder||a?.type===`insert`:!!a;return s_(r,a&&o?{itemId:a.type===`move`?t:void 0,targetZone:a.zone,getExpectedOrder:()=>c_(n.getState().state,a.zone)}:void 0)},[n,e,t])};c();function u_(e,t){typeof e==`function`?e(t):e&&typeof e==`object`&&`current`in e&&(e.current=t)}function d_(e,t){e.forEach(e=>{u_(e,t)})}var f_=a(`DraggableComponent`,Hg),p_=100,m_=8,h_=m_*6.5,g_=-(h_-8),__=m_,v_=({label:e,children:t,parentAction:n})=>(0,z.jsxs)(We,{children:[(0,z.jsxs)(We.Group,{children:[n,e&&(0,z.jsx)(We.Label,{label:e})]}),(0,z.jsx)(We.Group,{children:t})]}),y_=({children:e})=>(0,z.jsx)(z.Fragment,{children:e}),b_=({children:t,depth:n,componentType:r,id:i,index:a,zoneCompound:s,isLoading:c=!1,isSelected:l=!1,debug:u,label:d,autoDragAxis:f,userDragAxis:p,inDroppableZone:m=!0,itemRef:h})=>{let g=L(e=>e.selectedItem?.props.id===i?e.zoomConfig.zoom:1),_=L(e=>e._experimentalFullScreenCanvas),v=L(e=>e.overrides),y=L(e=>e.dispatch),b=L(e=>e.iframe),x=(0,R.useRef)(0),S=(0,R.useContext)(Wg),[C,w]=(0,R.useState)({}),ee=(0,R.useCallback)((t,n)=>{var r;(r=S?.registerLocalZone)==null||r.call(S,t,n),w(r=>e(o({},r),{[t]:n}))},[w]),E=(0,R.useCallback)(e=>{var t;(t=S?.unregisterLocalZone)==null||t.call(S,e),w(t=>{let n=o({},t);return delete n[e],n})},[w]),D=Object.values(C).filter(Boolean).length>0,O=L(En(e=>e.state.indexes.nodes[i]?.path)),te=L(En(e=>{let t=oe({index:a,zone:s},e.state);return e.permissions.getPermissions({item:t})})),ne=(0,R.useContext)(Gg),re=P(),[ie,k]=(0,R.useState)(p||f),ae=(0,R.useMemo)(()=>Kh(ie),[ie]),se=l_(ne,i),{ref:ce,isDragging:le,sortable:A}=Em({id:i,index:a,group:s,type:`component`,data:{areaId:S?.areaId,zone:s,index:a,componentType:r,containsActiveZone:D,depth:n,path:O||[],inDroppableZone:m},collisionPriority:n,collisionDetector:ae,transition:{duration:200,easing:`cubic-bezier(0.2, 0, 0, 1)`},plugins:e=>[...e,Uu.configure({feedback:`clone`,dropAnimation:se})]});(0,R.useEffect)(()=>{let e=ne.getState().enabledIndex[s];A.droppable.disabled=!e,A.draggable.disabled=!te.drag;let t=ne.subscribe(e=>{A.droppable.disabled=!e.enabledIndex[s]});return j.current&&!te.drag?(j.current.setAttribute(`data-puck-disabled`,``),()=>{var e;(e=j.current)==null||e.removeAttribute(`data-puck-disabled`),t()}):t},[te.drag,s]);let[,ue]=(0,R.useState)(0),j=(0,R.useRef)(null),de=(0,R.useCallback)(e=>{ce(e),j.current!==e&&(j.current=e,ue(e=>e+1),h&&d_([h],e))},[h,ce]),[fe,pe]=(0,R.useState)();(0,R.useEffect)(()=>{pe(b.enabled?j.current?.ownerDocument.body:j.current?.closest(`[data-puck-preview]`)??document.body)},[b.enabled]);let me=(0,R.useCallback)(()=>{if(!j.current)return;let e=j.current,t=e.getBoundingClientRect(),n=b.enabled?null:e.closest(`[data-puck-preview]`),r=(()=>{let t=e;for(;t&&t!==document.documentElement;){if(getComputedStyle(t).position===`fixed`)return!0;t=t.parentElement}return!1})(),i=n?.getBoundingClientRect(),a=n?Ug(n):{x:0,y:0},o=r?{x:0,y:0}:Ug(e),s=r?{x:0,y:0}:{x:o.x-a.x-(i?.left??0),y:o.y-a.y-(i?.top??0)};return{left:`${t.left+s.x}px`,top:`${t.top+s.y}px`,height:`${t.height}px`,width:`${t.width}px`,position:r?`fixed`:void 0}},[b.enabled]),[he,ge]=(0,R.useState)(),_e=(0,R.useRef)(null),M=(0,R.useRef)(null),N=(0,R.useCallback)(()=>{ge(me()),h&&d_([h],j.current)},[me,h]),ve=(0,R.useCallback)(()=>{M.current??=requestAnimationFrame(()=>{M.current=null,N()})},[N]);(0,R.useEffect)(()=>()=>{M.current!=null&&(cancelAnimationFrame(M.current),M.current=null)},[]),(0,R.useEffect)(()=>{if(j.current){let e=new ResizeObserver(()=>{ve()});return e.observe(j.current),()=>{e.disconnect()}}},[ve,h]);let ye=L(e=>e.nodes.registerNode),be=L(e=>e.nodes.unregisterNode),xe=(0,R.useCallback)(()=>{Fe(!1)},[]),F=(0,R.useCallback)(()=>{Fe(!0)},[]),Se=(0,R.useRef)({sync:()=>null,hideOverlay:()=>null,showOverlay:()=>null});(0,R.useLayoutEffect)(()=>{Se.current.sync=N,Se.current.hideOverlay=xe,Se.current.showOverlay=F},[xe,F,N]),(0,R.useEffect)(()=>(ye(i,Se.current),()=>{be(i)}),[i,ye,be]);let Ce=(0,R.useMemo)(()=>v.actionBar||v_,[v.actionBar]),we=(0,R.useMemo)(()=>v.componentOverlay||y_,[v.componentOverlay]),Te=(0,R.useCallback)(e=>{ne.getState().draggedItem||(e.target.closest(`[data-puck-overlay-portal]`)||e.stopPropagation(),y(_?{type:`setUi`,ui:{itemSelector:l?null:{index:a,zone:s}}}:{type:`setUi`,ui:{itemSelector:{index:a,zone:s}}}))},[a,s,i,l,_]),Ee=(0,R.useCallback)(()=>{let{nodes:e,zones:t}=re.getState().state.indexes,n=e[i],r=n?.parentId?e[n?.parentId]:null;if(!r||!n.parentId)return;let a=`${r.parentId}:${r.zone}`,o=t[a].contentIds.indexOf(n.parentId);y({type:`setUi`,ui:{itemSelector:{zone:a,index:o}}})},[S,O]),De=(0,R.useCallback)(()=>{y({type:`duplicate`,sourceIndex:a,sourceZone:s})},[a,s]),Oe=(0,R.useCallback)(()=>{y({type:`remove`,index:a,zone:s})},[a,s]),[ke,Ae]=(0,R.useState)(!1),Ne=Sh(Gg,e=>e.hoveringComponent===i);(0,R.useEffect)(()=>{if(!j.current)return;let e=j.current,t=e=>{ne.getState().draggedItem?Ae(!!le):Ae(!0),e.stopPropagation()},n=e=>{e.stopPropagation(),Ae(!1)};return e.setAttribute(`data-puck-component`,i),e.setAttribute(`data-puck-dnd`,i),e.style.position=`relative`,e.addEventListener(`click`,Te),e.addEventListener(`mouseover`,t),e.addEventListener(`mouseout`,n),()=>{e.removeAttribute(`data-puck-component`),e.removeAttribute(`data-puck-dnd`),e.removeEventListener(`click`,Te),e.removeEventListener(`mouseover`,t),e.removeEventListener(`mouseout`,n)}},[j.current,Te,D,s,i,le,m]);let[Pe,Fe]=(0,R.useState)(!1),[Ie,Le]=(0,R.useState)(!0),[Re,ze]=(0,R.useTransition)();(0,R.useEffect)(()=>{ze(()=>{ke||Ne||l?(ve(),Fe(!0),Ve(!1)):Fe(!1)})},[ke,Ne,l,b]);let[Be,Ve]=(0,R.useState)(!1),He=Jg(e=>{e?ze(()=>{N(),Le(!0)}):Le(!1)});(0,R.useEffect)(()=>{le&&Ve(!0)},[le]),(0,R.useEffect)(()=>{if(Be)return He()},[Be,He]),(0,R.useEffect)(()=>{if(!Ie||!(l||le))return;let e=j.current;if(!e)return;let t=e.ownerDocument,n=t.defaultView;if(!n)return;x.current=0,ve();let r=()=>ve(),i=()=>ve();t.addEventListener(`scroll`,r,!0),n.addEventListener(`resize`,i);let a=0,o=e=>{if(e-x.current>=p_){x.current=e;let t=j.current;if(t){let e=t.getBoundingClientRect(),n=_e.current;(!n||Math.abs(e.x-n.x)>.5||Math.abs(e.y-n.y)>.5||Math.abs(e.width-n.width)>.5||Math.abs(e.height-n.height)>.5)&&(_e.current=e,ve())}}a=requestAnimationFrame(o)};return a=requestAnimationFrame(o),()=>{t.removeEventListener(`scroll`,r,!0),n.removeEventListener(`resize`,i),cancelAnimationFrame(a)}},[Ie,l,le,ve]);let Ue=(0,R.useCallback)(e=>{if(e&&e.ownerDocument.defaultView){let t=e.getBoundingClientRect(),n=t.x<0,r=t.y<0;n&&(e.style.transformOrigin=`left top`,e.style.left=`0px`),r&&(e.style.top=`12px`,n||(e.style.transformOrigin=`right top`))}},[g]),Ge=(0,R.useRef)(null);(0,R.useEffect)(()=>{Ue(Ge.current)},[Ge.current,Ue]),(0,R.useEffect)(()=>{if(p){k(p);return}if(j.current){let e=window.getComputedStyle(j.current);if(e.display===`inline`||e.display===`inline-block`){k(`x`);return}}k(f)},[j,p,f]);let Ke=I(`action-selectparent`),qe=I(`action-duplicate`),Je=I(`action-delete`),Ye=(0,R.useMemo)(()=>S?.areaId&&S?.areaId!==`root`&&(0,z.jsx)(We.Action,{onClick:Ee,label:Ke,children:(0,z.jsx)(je,{size:16})}),[S?.areaId,Ke]),Xe=(0,R.useMemo)(()=>e(o({},S),{areaId:i,zoneCompound:s,index:a,depth:n+1,registerLocalZone:ee,unregisterLocalZone:E}),[S,i,s,a,n,ee,E]),Ze=L(e=>e.currentRichText?.inlineComponentId===i?e.currentRichText:null),Qe=te.duplicate||te.delete;return(0,z.jsxs)(qg,{value:Xe,children:[Ie&&Pe&&(0,of.createPortal)((0,z.jsxs)(`div`,{className:f_({isSelected:l,isDragging:le,hover:ke||Ne}),style:o({},he),"data-puck-overlay":!0,children:[u,c&&(0,z.jsx)(`div`,{className:f_(`loadingOverlay`),children:(0,z.jsx)(T,{})}),(0,z.jsx)(`div`,{className:f_(`actionsOverlay`),style:{top:h_/g},children:(0,z.jsx)(`div`,{className:f_(`actions`),style:{transform:`scale(${1/g}`,top:g_/g,right:0,paddingLeft:__,paddingRight:__},ref:Ge,children:(0,z.jsxs)(Ce,{parentAction:Ye,label:d,children:[Ze&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(cn,{editor:Ze.editor,field:Ze.field,inline:!0,readOnly:!1}),Qe&&(0,z.jsx)(We.Separator,{})]}),te.duplicate&&(0,z.jsx)(We.Action,{onClick:De,label:qe,children:(0,z.jsx)(Me,{className:f_(`actionsAction`)})}),te.delete&&(0,z.jsx)(We.Action,{onClick:Oe,label:Je,children:(0,z.jsx)($e,{className:f_(`actionsAction`)})})]})})}),(0,z.jsx)(`div`,{className:f_(`overlayWrapper`),children:(0,z.jsx)(we,{componentId:i,componentType:r,hover:ke,isSelected:l,children:(0,z.jsx)(`div`,{className:f_(`overlay`)})})})]}),fe||document.body),t(de)]})};c();var x_={DropZone:`_DropZone_wc2ks_1`,"DropZone--hasChildren":`_DropZone--hasChildren_wc2ks_11`,"DropZone--isAreaSelected":`_DropZone--isAreaSelected_wc2ks_24`,"DropZone--hoveringOverArea":`_DropZone--hoveringOverArea_wc2ks_25`,"DropZone--isRootZone":`_DropZone--isRootZone_wc2ks_25`,"DropZone-item":`_DropZone-item_wc2ks_39`,"DropZone-linePlaceholder":`_DropZone-linePlaceholder_wc2ks_43`,"DropZone-hitbox":`_DropZone-hitbox_wc2ks_55`,"DropZone--isEnabled":`_DropZone--isEnabled_wc2ks_63`,"DropZone--isAnimating":`_DropZone--isAnimating_wc2ks_74`};c();var S_=(e,{allow:t,disallow:n})=>{if(!e)return!0;let r=new Set(t),i=new Set(n);return n?(i.has(e)&&r.has(e)&&i.delete(e),!i.has(e)):!t||r.has(e)};c(),c();var C_={Drawer:`_Drawer_1n90m_1`,"Drawer-draggable":`_Drawer-draggable_1n90m_8`,"Drawer-draggableBg":`_Drawer-draggableBg_1n90m_12`,"DrawerItem-draggable":`_DrawerItem-draggable_1n90m_22`,"DrawerItem--disabled":`_DrawerItem--disabled_1n90m_38`,DrawerItem:`_DrawerItem_1n90m_22`,"Drawer--isDraggingFrom":`_Drawer--isDraggingFrom_1n90m_48`,"DrawerItem-name":`_DrawerItem-name_1n90m_72`};c(),c(),c();function w_(e,t){let n=setTimeout(e,t);return()=>clearTimeout(n)}function T_(e,t){let n=()=>performance.now(),r,i=0;return function(...a){let o=n(),s=this;o-i>=t?(e.apply(s,a),i=o):(r?.(),r=w_(()=>{e.apply(s,a),i=n()},t-(o-i)))}}c();var E_=class{constructor(e,t){this.scaleFactor=1,this.frameEl=null,this.frameRect=null,this.target=e,this.original=t,this.frameEl=document.querySelector(`iframe#preview-frame`),this.frameEl&&(this.frameRect=this.frameEl.getBoundingClientRect(),this.scaleFactor=this.frameRect.width/(this.frameEl.contentWindow?.innerWidth||1))}get x(){return this.original.x}get y(){return this.original.y}get global(){return document!==this.target.ownerDocument&&this.frameRect?{x:this.x*this.scaleFactor+this.frameRect.left,y:this.y*this.scaleFactor+this.frameRect.top}:this.original}get frame(){return document===this.target.ownerDocument&&this.frameRect?{x:(this.x-this.frameRect.left)/this.scaleFactor,y:(this.y-this.frameRect.top)/this.scaleFactor}:this.original}};c();var D_=typeof PointerEvent<`u`?PointerEvent:Event,O_=class extends D_{constructor(e,t){super(e,t),this._originalTarget=null,this.originalTarget=t.originalTarget}set originalTarget(e){this._originalTarget=e}get originalTarget(){return this._originalTarget}},k_=e=>e.sort((e,t)=>{let n=e.data,r=t.data;return n.depth>r.depth?1:r.depth>n.depth?-1:0}),A_=e=>{let t=e?.id;if(!e)return null;if(e.type===`component`){let n=e.data;t=n.containsActiveZone?null:n.zone}else if(e.type===`void`)return`void`;return t},j_=6,M_=(e,t)=>{let n=[],r=e.target.ownerDocument.elementsFromPoint(e.x,e.y),i=r.find(e=>e.getAttribute(`data-puck-preview`)),a=r.find(e=>e.getAttribute(`data-puck-drawer`));if(a&&(r=[a]),i){let t=Yg();t&&(r=t.elementsFromPoint(e.frame.x,e.frame.y))}if(r)for(let i=0;i<r.length;i++){let a=r[i],o=a.getAttribute(`data-puck-dropzone`),s=a.getAttribute(`data-puck-dnd`),c=a.hasAttribute(`data-puck-dnd-void`);if(j_&&(o||s)&&!c){let t=a.getBoundingClientRect(),n={left:t.left+j_,right:t.right-j_,top:t.top+j_,bottom:t.bottom-j_};if(e.frame.x<n.left||e.frame.x>n.right||e.frame.y>n.bottom||e.frame.y<n.top)continue}if(o){let e=t.registry.droppables.get(o);e&&n.push(e)}if(s){let e=t.registry.droppables.get(s);e&&n.push(e)}}return n},N_=(e,t)=>{let n=M_(e,t);if(n.length>0){let e=k_(n),r=t.dragOperation.source,i=e.findIndex(e=>e.id===r?.id),a=r?.id,o=[...e];a&&i>-1&&o.splice(i,1),o=o.filter(e=>{let t=e.data;if(a&&i>-1&&t.path.indexOf(a)>-1)return!1;if(e.type===`dropzone`){let t=e.data;if(!t.isDroppableTarget||t.areaId===a)return!1}else if(e.type===`component`&&!e.data.inDroppableZone)return!1;return!0}),o.reverse();let s=o[0];if(!s)return{zone:null,area:null};let c=s.data,l=`containsActiveZone`in c;return{zone:A_(s),area:l&&c.containsActiveZone?o[0].id:o[0]?.data.areaId}}return{zone:w,area:_e}},P_=({onChange:e},t)=>class extends ma{constructor(n,r){super(n),typeof window<`u`&&this.registerEffect(()=>{let r=T_(r=>{let i=new E_(r instanceof O_&&r.originalTarget||r.target,{x:r.clientX,y:r.clientY});document.elementsFromPoint(i.global.x,i.global.y).some(e=>e.id===t)&&e(N_(i,n),n)},50),i=e=>{r(e)};return document.body.addEventListener(`pointermove`,i,{capture:!0}),()=>{document.body.removeEventListener(`pointermove`,i,{capture:!0})}})}};c();var F_=({zones:e,itemId:t,targetZone:n,getExpectedOrder:r})=>{let i=Yg();if(!i||t_(i))return()=>{};let a=Array.from(new Set(e)).map(e=>`${Qg(e)} > [data-puck-component]:not([data-dnd-dragging]):not([data-dnd-placeholder])`).join(`, `),o=()=>{let e=new Map;return i.querySelectorAll(a).forEach(n=>{let r=n.getAttribute(`data-puck-component`);r&&r!==t&&e.set(r,{el:n,rect:n.getBoundingClientRect()})}),e},s=o(),c=r();return()=>{n_(i,{zones:e,itemId:t,targetZone:n,getExpectedOrder:r,initialExpectedOrder:c},()=>{o().forEach(({el:e,rect:t},n)=>{let r=s.get(n)?.rect;if(!r)return;let i=r.x-t.x,a=r.y-t.y;Math.abs(i)<1&&Math.abs(a)<1||e.animate({translate:[`${i}px ${a}px 0`,`0px 0px 0`]},$g)})})}};c();var I_=(e,{isDraggingBetweenSlots:t=!1,isNewComponent:n=!1}={})=>e===`auto`?t||n?`static`:`fluid`:e;c(),c(),c();var L_=(e,t)=>{let n=e.indexes.nodes[t];if(!n)return;let r=`${n.parentId}:${n.zone}`;return{zone:r,index:e.indexes.zones[r].contentIds.indexOf(t)}};function R_(e,t,n=`force`,r=!1,i){return s(this,null,function*(){let a=yield t().resolveComponentData(e,n);if(!a.didChange&&!r)return;let o=L_(t().state,a.node.props.id);if(!o){console.warn(`Warning: Could not find component with id "${e.props.id}" to resolve its data. Component may have been removed or the id is invalid.`);return}t().dispatch({type:`replace`,data:S(a.node),destinationIndex:o.index,destinationZone:o.zone,ui:i})})}var z_=(t,n,r,i)=>s(null,null,function*(){let{getState:a}=i,s={type:`insert`,componentType:t,destinationIndex:r,destinationZone:n,id:k(t)},c=a().state,l=b(c,s,a()),u=a().dispatch;u(e(o({},s),{recordHistory:!0}));let d={index:r,zone:n};u({type:`setUi`,ui:{itemSelector:d}});let f=oe(d,l);f&&(yield R_(f,a,`insert`))});c();var B_=(e,t,n,r)=>s(null,null,function*(){let i=r.getState().dispatch;i({type:`move`,sourceIndex:t.index,sourceZone:t.zone??w,destinationIndex:n.index,destinationZone:n.zone??w,recordHistory:!1});let a=r.getState().state.indexes.nodes[e]?.data;a&&(yield R_(a,r.getState,`move`))});c();function V_(e){function t(e){return e?e.getAttribute(`dir`)||t(e.parentElement):`ltr`}return e?t(e):`ltr`}c(),c(),c();var H_=(e,t,n)=>Math.max(t,Math.min(n,e)),U_=(e,t)=>{let n=H_(e.x,Math.min(t.x1,t.x2),Math.max(t.x1,t.x2)),r=H_(e.y,Math.min(t.y1,t.y2),Math.max(t.y1,t.y2));return Math.hypot(e.x-n,e.y-r)};c();var W_=e=>{let t=e.replace(/\[[^\]]*\]/g,` `).trim();return t&&t!==`none`?t.split(/\s+/).length:0},G_=(e,t,n=t.getComputedStyle(e))=>{let r=n.display,i=V_(e)===`rtl`;if(r===`flex`||r===`inline-flex`){let e=n.flexDirection;if(e.startsWith(`row`)){let t=e===`row-reverse`;return{axis:`x`,reversed:i?!t:t}}return{axis:`y`,reversed:e===`column-reverse`}}return(r===`grid`||r===`inline-grid`)&&(n.gridAutoFlow.startsWith(`column`)||W_(n.gridTemplateColumns)>1)?{axis:`x`,reversed:i}:{axis:`y`,reversed:!1}},K_=({axis:e,reversed:t})=>{let n=e===`x`,r=t?-1:1;return{horizontal:n,reversed:t,forward:r,start:e=>n?t?e.right:e.left:t?e.bottom:e.top,end:e=>n?t?e.left:e.right:t?e.top:e.bottom,isBefore:(e,t)=>r>0?e<=t:e>=t}},q_=(e,t,n)=>{let r=e.ownerDocument.defaultView;if(!r)return null;let i=new Map(n.map((e,t)=>[e,t])),a=Array.from(e.querySelectorAll(`:scope > [data-puck-component]:not([data-dnd-dragging]):not([data-dnd-placeholder])`)).map(e=>({index:i.get(e.getAttribute(`data-puck-component`)??``)??-1,el:e})).filter(e=>e.index!==-1).sort((e,t)=>e.index-t.index).map(({index:e,el:t})=>({index:e,rect:t.getBoundingClientRect()}));if(a.length===0)return 0;let{horizontal:o,reversed:s,start:c,end:l}=K_(G_(e,r)),u=(e,t,n,r=[n])=>{let i=1/0,a=-1/0;for(let e of r)i=Math.min(i,o?e.top:e.left),a=Math.max(a,o?e.bottom:e.right);return o?{index:e,x1:t,x2:t,y1:n.top,y2:n.bottom,laneStart:i,laneEnd:a}:{index:e,x1:n.left,x2:n.right,y1:t,y2:t,laneStart:i,laneEnd:a}},d=[],f=(e,t,n)=>{let r=n===`before`?c(t):l(t);return u(e,r,t)};for(let e=0;e<=a.length;e++){let t=a[e-1],n=a[e];if(!n)d.push(f(t.index+1,t.rect,`after`));else if(!t)d.push(f(n.index,n.rect,`before`));else if(n.index-t.index>1)d.push(f(t.index+1,t.rect,`after`)),d.push(f(n.index,n.rect,`before`));else if(s?l(t.rect)<c(n.rect):l(t.rect)>c(n.rect))d.push(f(n.index,n.rect,`before`)),d.push(f(n.index,t.rect,`after`));else{let e=(l(t.rect)+c(n.rect))/2;d.push(u(n.index,e,n.rect,[t.rect,n.rect]))}}let p=o?t.y:t.x,m=null,h=1/0,g=null,_=1/0;for(let e of d){let n=U_(t,e);n<h&&(h=n,m=e),p>=e.laneStart&&p<=e.laneEnd&&n<_&&(_=n,g=e)}return(g??m)?.index??null};c();var J_=(e,t)=>{let n=document.querySelector(`iframe#preview-frame`);if(!n||e.ownerDocument!==n.contentDocument)return t;let r=n.getBoundingClientRect(),i=r.width/(n.contentWindow?.innerWidth||1);return i>0?{x:(t.x-r.left)/i,y:(t.y-r.top)/i}:t},Y_=t=>{let n=P(),r=(0,R.useRef)(null),i=(0,R.useCallback)(e=>{let t=Yg()?.querySelector(`[data-puck-entry]`);e?t?.setAttribute(`data-puck-line-drag`,`true`):t?.removeAttribute(`data-puck-line-drag`)},[]),a=(0,R.useCallback)((e,t)=>{let r=Yg()?.querySelector(Qg(e));return r?q_(r,J_(r,t.dragOperation.position.current),c_(n.getState().state,e)):null},[n]),s=(0,R.useCallback)(r=>{let{previewIndex:i={}}=t.getState(),a=Object.values(i).find(e=>e?.linePlaceholder);if(!a)return;let s=Yg()?.querySelector(Qg(a.zone));if(!s)return;let c=J_(s,r.dragOperation.position.current),l=s.getBoundingClientRect();if(!(c.x>=l.left&&c.x<=l.right&&c.y>=l.top&&c.y<=l.bottom))return;let u=q_(s,c,c_(n.getState().state,a.zone));u!==null&&u!==a.index&&t.setState({previewIndex:e(o({},i),{[a.zone]:e(o({},a),{index:u})})})},[n,t]),c=(0,R.useCallback)(()=>{var e;(e=r.current)==null||e.call(r),r.current=null},[]),l=(0,R.useCallback)(e=>{c();let t=Yg();if(!t)return;let n=null,i=()=>{n===null&&(n=requestAnimationFrame(()=>{n=null,s(e)}))};t.addEventListener(`scroll`,i,{capture:!0,passive:!0}),r.current=()=>{n!==null&&cancelAnimationFrame(n),t.removeEventListener(`scroll`,i,{capture:!0})}},[c,s]);return(0,R.useEffect)(()=>c,[c]),{getTargetIndex:a,setActive:i,startScrollTracking:l,stopScrollTracking:c,update:s}},X_=(0,R.createContext)({dragListeners:{}});function Z_(t,n,r=[]){let{setDragListeners:i}=(0,R.useContext)(X_);(0,R.useEffect)(()=>{i&&i(r=>e(o({},r),{[t]:[...r[t]||[],n]}))},r)}var Q_=100,$_=e=>{let t=(0,R.useRef)(null);return(0,R.useCallback)(n=>{Wh.setState({fallbackEnabled:!1});let r=k();t.current=r,setTimeout(()=>{t.current===r&&(Wh.setState({fallbackEnabled:!0}),n.collisionObserver.forceUpdate(!0))},e)},[])},ev=({children:t,disableAutoScroll:n,behavior:r=`auto`})=>{let i=L(e=>e.dispatch),a=L(e=>e.instanceId),s=P(),c=(0,R.useRef)(null),l=$_(100),[u]=(0,R.useState)(()=>{let e=new Map;return se(()=>({zoneDepthIndex:{},nextZoneDepthIndex:{},areaDepthIndex:{},nextAreaDepthIndex:{},draggedItem:null,previewIndex:{},enabledIndex:{},hoveringComponent:null,registerRootVirtualizer:(t,n)=>{e.set(t,n)},unregisterRootVirtualizer:t=>{e.delete(t)},scrollToComponent:t=>{let n=Array.from(e.values());if(n.length>0)for(let e of n){let n=e.resolveIndex(t);n<0||e.virtualizer.scrollToIndex(n,{behavior:`auto`,align:`auto`})}else(Yg()?.querySelector(Zg(t)))?.scrollIntoView({behavior:`smooth`})}}))}),d=(0,R.useCallback)(e=>{let{zoneDepthIndex:t={},areaDepthIndex:n={}}=u.getState()||{},r=Object.keys(t).length>0,i=Object.keys(n).length>0,a=!1,o=!1;return(e.zone&&!t[e.zone]||!e.zone&&r)&&(a=!0),(e.area&&!n[e.area]||!e.area&&i)&&(o=!0),{zoneChanged:a,areaChanged:o}},[u]),f=(0,R.useCallback)((e,t)=>{let{zoneChanged:n,areaChanged:r}=d(e);(n||r)&&(u.setState({zoneDepthIndex:e.zone?{[e.zone]:!0}:{},areaDepthIndex:e.area?{[e.area]:!0}:{}}),l(t),setTimeout(()=>{t.collisionObserver.forceUpdate(!0)},50),c.current=null)},[u]),p=Om(f,Q_),m=()=>{p.cancel(),c.current=null};(0,R.useEffect)(()=>{},[]);let[h]=(0,R.useState)(()=>[...n?zd.plugins.filter(e=>e!==fd):zd.plugins,P_({onChange:(e,t)=>{let n=u.getState(),{zoneChanged:r,areaChanged:i}=d(e),a=t.dragOperation.status.dragging;if(i||r){let t={},n={};e.zone&&(t={[e.zone]:!0}),e.area&&(n={[e.area]:!0}),u.setState({nextZoneDepthIndex:t,nextAreaDepthIndex:n})}if(e.zone!==`void`&&n?.zoneDepthIndex.void){f(e,t);return}if(i){if(a){let n=c.current;n&&n.area===e.area&&n.zone===e.zone||(m(),p(e,t),c.current=e)}else m(),f(e,t);return}r&&f(e,t),m()}},a)]),g=Ph(),[_,v]=(0,R.useState)({}),y=(0,R.useRef)(null),b=(0,R.useRef)(void 0),{getTargetIndex:x,setActive:S,startScrollTracking:C,stopScrollTracking:w,update:T}=Y_(u),ee=(0,R.useMemo)(()=>({mode:`edit`,areaId:`root`,depth:0}),[]);return(0,z.jsx)(X_.Provider,{value:{dragListeners:_,setDragListeners:v},children:(0,z.jsx)(Af,{plugins:h,sensors:g,onDragEnd:(t,n)=>{w(),(Yg()?.querySelector(`[data-puck-entry]`))?.removeAttribute(`data-puck-dragging`);let{source:r,target:a}=t.operation;if(!r){S(!1),u.setState({draggedItem:null});return}let{zone:c,index:l}=r.data,{previewIndex:d={}}=u.getState()||{},f=Object.values(d).find(e=>e?.props.id===r.id&&!e.ghost)??null,p=!t.canceled&&a?.type!==`void`&&f?.linePlaceholder?F_({zones:b.current?[b.current.zone,f.zone]:[f.zone],itemId:f.type===`move`?f.props.id:void 0,targetZone:f.zone,getExpectedOrder:()=>c_(s.getState().state,f.zone)}):null,m=()=>{var r,d;if(S(!1),u.setState({draggedItem:null}),t.canceled||a?.type===`void`){u.setState({previewIndex:{}}),(r=_.dragend)==null||r.forEach(e=>{e(t,n)}),i({type:`setUi`,ui:{itemSelector:null,isDragging:!1}});return}let m=f&&f.linePlaceholder&&b.current&&f.zone===b.current.zone&&f.index>b.current.index?f.index-1:f?.index??l;f&&(u.setState({previewIndex:{}}),f.type===`insert`?z_(f.componentType,f.zone,f.index,s):b.current&&B_(f.props.id,b.current,e(o({},f),{index:m}),s),p?.());let h=b.current?.zone!==f?.zone||b.current?.index!==m;i({type:`setUi`,ui:{itemSelector:f?{index:m,zone:f.zone}:{index:l,zone:c},isDragging:!1},recordHistory:h}),(d=_.dragend)==null||d.forEach(e=>{e(t,n)})},h;h=Zn(()=>{r.status===`idle`&&(m(),h?.())})},onDragMove:(e,t)=>{var n;T(t),(n=_.dragmove)==null||n.forEach(n=>{n(e,t)})},onDragOver:(e,t)=>{var n;if(e.preventDefault(),!u.getState()?.draggedItem)return;m();let{source:i,target:a}=e.operation;if(!a||!i||a.type===`void`)return;let[o]=i.id.split(`:`),[c]=a.id.split(`:`),l=i.data,d=l.zone,f=l.index,p=``,h=0;if(a.type===`component`){let e=a.data;p=e.zone;let n=t.collisionObserver.collisions[0]?.data;h=Jh({position:qh(n?.direction,V_(a.element)),sourceIndex:f,targetIndex:e.index,isSameZone:d===p})}else p=a.id.toString(),h=0;let g=s.getState().state.indexes.nodes[a.id]?.path||[];if(!(c===o||g.find(e=>{let[t]=e.split(`:`);return t===o}))){if(y.current===`new`){let e=I_(r,{isNewComponent:!0})===`static`;e&&(h=x(p,t)??h),S(e),u.setState({previewIndex:{[p]:{componentType:l.componentType,type:`insert`,index:h,zone:p,element:i.element,props:{id:i.id.toString()},linePlaceholder:e}}})}else{b.current||={zone:l.zone,index:l.index};let e=oe(b.current,s.getState().state);if(e){let n=b.current.zone,a=n!==p,o=I_(r,{isDraggingBetweenSlots:a})===`static`;o&&(h=x(p,t)??h),S(o);let s={[p]:{componentType:l.componentType,type:`move`,index:h,zone:p,props:e.props,element:i.element,linePlaceholder:o}};if(o&&a){let t=u.getState().previewIndex[n],r=b.current.index;t&&!t.linePlaceholder&&(r=t.index),s[n]={componentType:l.componentType,type:`move`,index:r,zone:n,props:e.props,element:i.element,ghost:!0}}u.setState({previewIndex:s})}}(n=_.dragover)==null||n.forEach(n=>{n(e,t)})}},onDragStart:(e,t)=>{var n;r!==`fluid`&&C(t);let{source:i}=e.operation;if(i?.type===`component`){let e=i.data,t={zone:e.zone,index:e.index};b.current=t;let n=oe(t,s.getState().state);if(n){let t=I_(r)===`static`;S(t),u.setState({previewIndex:{[e.zone]:{componentType:e.componentType,type:`move`,index:e.index,zone:e.zone,props:n.props,element:i.element,linePlaceholder:t}}})}}(n=_.dragstart)==null||n.forEach(n=>{n(e,t)})},onBeforeDragStart:e=>{let t=e.operation.source?.type===`drawer`;y.current=t?`new`:`existing`,b.current=void 0,u.setState({draggedItem:e.operation.source}),s.getState().selectedItem?.props.id===e.operation.source?.id?i({type:`setUi`,ui:{isDragging:!0},recordHistory:!1}):i({type:`setUi`,ui:{itemSelector:null,isDragging:!0},recordHistory:!1}),(Yg()?.querySelector(`[data-puck-entry]`))?.setAttribute(`data-puck-dragging`,`true`),S(!1)},children:(0,z.jsx)(Kg,{store:u,children:(0,z.jsx)(qg,{value:ee,children:t})})})})},tv=({children:e,disableAutoScroll:t,behavior:n})=>L(e=>e.status)===`LOADING`?e:(0,z.jsx)(ev,{disableAutoScroll:t,behavior:n,children:e}),nv=a(`Drawer`,C_),rv=a(`DrawerItem`,C_),iv=({children:e,name:t,label:n,dragRef:r,isDragDisabled:i})=>{let a=(0,R.useMemo)(()=>e||(({children:e})=>(0,z.jsx)(`div`,{className:rv(`default`),children:e})),[e]);return(0,z.jsx)(`div`,{className:rv({disabled:i}),ref:r,onMouseDown:e=>e.preventDefault(),"data-testid":r?`drawer-item:${t}`:``,"data-puck-drawer-item":!0,children:(0,z.jsx)(a,{name:t,children:(0,z.jsx)(`div`,{className:rv(`draggableWrapper`),children:(0,z.jsxs)(`div`,{className:rv(`draggable`),children:[(0,z.jsx)(`div`,{className:rv(`name`),children:n??t}),(0,z.jsx)(`div`,{className:rv(`icon`),children:(0,z.jsx)(kh,{})})]})})})})},av=({children:e,name:t,label:n,id:r,isDragDisabled:i})=>{let a=l_((0,R.useContext)(Gg)),{ref:o}=Pf({id:r,data:{componentType:t},disabled:i,type:`drawer`,plugins:[Uu.configure({dropAnimation:a})]});return(0,z.jsxs)(`div`,{className:nv(`draggable`),children:[(0,z.jsx)(`div`,{className:nv(`draggableBg`),children:(0,z.jsx)(iv,{name:t,label:n,children:e})}),(0,z.jsx)(`div`,{className:nv(`draggableFg`),children:(0,z.jsx)(iv,{name:t,label:n,dragRef:o,isDragDisabled:i,children:e})})]})},ov=({name:e,children:t,id:n,label:r,index:i,isDragDisabled:a})=>{let o=n||e,[s,c]=(0,R.useState)(k(o));return i!==void 0&&console.error("Warning: The `index` prop on Drawer.Item is deprecated and no longer required."),Z_(`dragend`,()=>{c(k(o))},[o]),(0,z.jsx)(`div`,{children:(0,z.jsx)(av,{name:e,label:r,id:s,isDragDisabled:a,children:t})},s)},sv=({children:e,droppableId:t,direction:n})=>{t&&console.error("Warning: The `droppableId` prop on Drawer is deprecated and no longer required."),n&&console.error("Warning: The `direction` prop on Drawer is deprecated and no longer required to achieve multi-directional dragging.");let r=Pg(),{ref:i}=lp({id:r,type:`void`,collisionPriority:0});return(0,z.jsx)(`div`,{className:nv(),ref:i,"data-puck-dnd":r,"data-puck-drawer":!0,"data-puck-dnd-void":!0,children:e})};sv.Item=ov,c();var cv=(e,t)=>e.getState().state.indexes.zones[t].contentIds.length,lv=({zoneCompound:e,userMinEmptyHeight:t,ref:n})=>{let r=P(),[i,a]=(0,R.useState)(0),[o,s]=(0,R.useState)(!1),{draggedItem:c,isZone:l}=Sh(Gg,t=>({draggedItem:t.draggedItem?.data.zone===e?t.draggedItem:null,isZone:t.draggedItem?.data.zone===e})),u=(0,R.useRef)(0),d=Jg(t=>{if(t){let t=cv(r,e);if(a(0),t||u.current===0){s(!1);return}let n=r.getState().selectedItem,i=r.getState().state.indexes.zones,o=r.getState().nodes;o.setOverlayVisible(n?.props.id,!1),setTimeout(()=>{let t=i[e]?.contentIds||[];o.syncNodes(t),n&&setTimeout(()=>{o.syncNode(n.props.id),o.setOverlayVisible(n.props.id,!0)},200),s(!1)},100)}},[r,i,e]);(0,R.useEffect)(()=>{if(c&&n.current&&l){let t=n.current.getBoundingClientRect();return u.current=cv(r,e),a(t.height),s(!0),d()}},[n.current,c,d]);let f=isNaN(Number(t))?t:`${t}px`;return[i?`${i}px`:f,o]};c(),c();function uv(e,t){let n=Mf();return(0,R.useCallback)((...t)=>s(null,null,function*(){return yield n?.renderer.rendering,e(...t)}),[...t,n])}var dv=(e,t)=>{let n=(0,R.useContext)(Gg),r=Sh(Gg,e=>e.previewIndex[t]),i=L(e=>e.state.ui.isDragging),[a,o]=(0,R.useState)(e),[s,c]=(0,R.useState)(r),l=uv((e,t,n,r,i,a)=>{(!n||i)&&(t&&!t.linePlaceholder?o(le(e.filter(e=>e!==t.props.id),t.index,t.props.id)):o(i&&!a?e.filter(e=>e!==r):e),c(t))},[]);return(0,R.useEffect)(()=>{let t=n.getState(),a=t.draggedItem?.id,o=Object.values(t.previewIndex||{}),s=o.length>0,c=o.some(e=>e?.linePlaceholder);l(e,r,i,a,s,c)},[e,r,i]),[a,s]};c();var fv=`dynamic`,pv=`x`,mv=`y`,hv=(e,t)=>{let n=L(e=>e.status),[r,i]=(0,R.useState)(t||mv),a=(0,R.useCallback)(()=>{if(e.current){let t=window.getComputedStyle(e.current);t.display===`grid`?i(fv):t.display===`flex`&&t.flexDirection===`row`?i(pv):i(mv)}},[e.current]);return(0,R.useEffect)(()=>{let e=()=>{a()};return window.addEventListener(`viewportchange`,e),()=>{window.removeEventListener(`viewportchange`,e)}},[]),(0,R.useEffect)(a,[n,t]),[r,a]};c();var gv=({componentId:e,zone:t})=>{let n=L(e=>e.config),r=L(e=>e.metadata),i=L(En(n=>{let r=n.state.indexes;return(r.zones[`${e}:${t}`]?.contentIds??[]).map(e=>r.nodes[e].flatData)}));return(0,z.jsx)(vn,{content:i,zone:t,config:n,metadata:r})};c();function _v(e,t,n,r,i){let a=(0,R.useRef)(null),s=(0,R.useRef)(null),c=(0,R.useRef)(t.props),l=(0,R.useMemo)(()=>un(n,r,i),[n,r,i]),u=(0,R.useMemo)(()=>{let n=(t.type===`root`?e.root:e.components?.[t.type])?.fields??{},r=a.current!==l,i,u=!1;if(!s.current||r)for(let e in t.props)n[e]?.type===`slot`&&(u=!0);else{i=[`id`];let e=new Set([...Object.keys(t.props),...Object.keys(s.current)]);for(let r of e)t.props[r]!==s.current[r]&&(i.push(r),n[r]?.type===`slot`&&(u=!0))}let d=h(t,l,e,!1,u,i).props;return s.current=t.props,a.current=l,c.current=i?o(o({},c.current),d):d,c.current},[e,t,l]);return(0,R.useMemo)(()=>o(o({},t.props),u),[t.props,u])}c(),c(),c();var vv=(e,t={})=>{if(!e)return;let{disableDrag:n=!1,disableDragOnFocus:r=!0}=t,i=e=>{e.stopPropagation()};e.addEventListener(`mouseover`,i,{capture:!0});let a=()=>{setTimeout(()=>{e.addEventListener(`pointerdown`,i,{capture:!0})},200)},o=()=>{e.removeEventListener(`pointerdown`,i,{capture:!0})};return n?e.addEventListener(`pointerdown`,i,{capture:!0}):r&&(e.addEventListener(`focus`,a,{capture:!0}),e.addEventListener(`blur`,o,{capture:!0})),e.setAttribute(`data-puck-overlay-portal`,`true`),()=>{e.removeEventListener(`mouseover`,i,{capture:!0}),n?e.removeEventListener(`pointerdown`,i,{capture:!0}):r&&(e.removeEventListener(`focus`,a,{capture:!0}),e.removeEventListener(`blur`,o,{capture:!0})),e.removeAttribute(`data-puck-overlay-portal`)}};c();var yv=a(`InlineTextField`,{InlineTextField:`_InlineTextField_104qp_1`}),bv=(0,R.memo)(({propPath:t,componentId:n,value:r,isReadOnly:i,opts:a={}})=>{let c=(0,R.useRef)(null),l=P(),u=a.disableLineBreaks??!1;(0,R.useEffect)(()=>{let i=l.getState(),a=i.state.indexes.nodes[n].data;if(!i.getComponentConfig(a.type))throw Error(`InlineTextField Error: No config defined for ${a.type}`);if(c.current){let i=r??``;i!==c.current.innerText&&c.current.replaceChildren(i);let a=vv(c.current),d=r=>s(null,null,function*(){let i=l.getState().state.indexes.nodes[n],a=r.target.innerText;u&&(a=a.replaceAll(/\n/gm,``));let s=dh(i.data.props,t,a);yield R_(e(o({},i.data),{props:s}),l.getState,`replace`,!0)});return c.current.addEventListener(`input`,d),()=>{var e;(e=c.current)==null||e.removeEventListener(`input`,d),a?.()}}},[l,c.current,r,u]);let[d,f]=(0,R.useState)(!1),[p,m]=(0,R.useState)(!1);return(0,z.jsx)(`span`,{className:yv(),ref:c,contentEditable:d||p?`plaintext-only`:`false`,onClick:e=>{e.preventDefault(),e.stopPropagation()},onClickCapture:e=>{e.preventDefault(),e.stopPropagation();let t=L_(l.getState().state,n);l.getState().setUi({itemSelector:t})},onKeyDown:e=>{e.stopPropagation(),(u&&e.key===`Enter`||i)&&e.preventDefault()},onKeyUp:e=>{e.stopPropagation(),e.preventDefault()},onMouseOverCapture:()=>f(!0),onMouseOutCapture:()=>f(!1),onFocus:()=>m(!0),onBlur:()=>m(!1)})}),xv=()=>({text:({value:e,componentId:t,field:n,propPath:r,isReadOnly:i})=>n.contentEditable?(0,z.jsx)(bv,{propPath:r,componentId:t,value:e,opts:{disableLineBreaks:!0},isReadOnly:i}):e,textarea:({value:e,componentId:t,field:n,propPath:r,isReadOnly:i})=>n.contentEditable?(0,z.jsx)(bv,{propPath:r,componentId:t,value:e,isReadOnly:i}):e,custom:({value:e,componentId:t,field:n,propPath:r,isReadOnly:i})=>n.contentEditable&&typeof e==`string`?(0,z.jsx)(bv,{propPath:r,componentId:t,value:e,isReadOnly:i}):e});c();var Sv=(0,R.lazy)(()=>Dt(()=>import(`./Editor-44C53YAG-Bs43D8Mq.js`).then(e=>({default:e.Editor})),__vite__mapDeps([13,1,2,3,7,9,12,5,4]))),Cv=(0,R.lazy)(()=>Dt(()=>import(`./Render-DQXAYUBI-IKoQtk_f.js`).then(e=>({default:e.RichTextRender})),__vite__mapDeps([11,1,5,12]))),wv=(0,R.memo)(({value:t,componentId:n,propPath:r,field:i,id:a})=>{let c=(0,R.useRef)(null),l=P(),u=e=>{e.preventDefault(),e.stopPropagation()},d=e=>{e.preventDefault(),e.stopPropagation();let t=L_(l.getState().state,n);l.getState().setUi({itemSelector:t})};(0,R.useEffect)(()=>{if(!c.current)return;let e=vv(c.current,{disableDragOnFocus:!0});return()=>e?.()},[c.current]);let f=(0,R.useCallback)((t,i)=>s(null,null,function*(){let a=l.getState().state.indexes.nodes[n],s=dh(a.data.props,r,t);yield R_(e(o({},a.data),{props:s}),l.getState,`replace`,!0,i)}),[l,n,r]),p=(0,R.useCallback)(e=>{l.setState({currentRichText:{inlineComponentId:n,inline:!0,field:i,editor:e,id:a}})},[i,n]);if(!i.contentEditable)return(0,z.jsx)(R.Suspense,{fallback:(0,z.jsx)(mn,{content:t}),children:(0,z.jsx)(Cv,{content:t,field:i})});let m={content:t,onChange:f,field:i,inline:!0,onFocus:p,id:a,name:r};return(0,z.jsx)(`div`,{ref:c,onClick:u,onClickCapture:d,children:(0,z.jsx)(R.Suspense,{fallback:(0,z.jsx)(kg,o({},m)),children:(0,z.jsx)(Sv,o({},m))})})});wv.displayName=`InlineEditorWrapper`;var Tv=()=>({richtext:({value:e,componentId:t,field:n,propPath:r,isReadOnly:i})=>{let{contentEditable:a=!0,tiptap:o}=n;if(a===!1||i)return(0,z.jsx)(Cv,{content:e,field:n});let s=`${t}_${n.type}_${r}`;return(0,z.jsx)(wv,{value:e,componentId:t,propPath:r,field:n,id:s},s)}});c(),c();function Ev(e,t,n=[]){if(Object.is(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;let r=new Set(n),i=Object.keys(e).filter(e=>!r.has(e)),a=Object.keys(t).filter(e=>!r.has(e));if(i.length!==a.length)return!1;for(let n=0;n<i.length;n++){let r=i[n];if(!Object.prototype.hasOwnProperty.call(t,r))return!1;let a=e[r],o=t[r];if(!Object.is(a,o))return!1}return!0}var Dv=(0,R.memo)(({Component:e,componentProps:t})=>(0,z.jsx)(e,o({},t)),(e,t)=>{let n=!0;return`puck`in e.componentProps&&`puck`in t.componentProps&&(n=Le(e.componentProps.puck,t.componentProps.puck)),e.Component===t.Component&&Ev(e.componentProps,t.componentProps,[`puck`])&&n});c();var Ov=5,kv=320,Av=new Map,jv=e=>Av.get(e)??kv,Mv=(e,t)=>{t<=0||Av.set(e,t)},Nv=({contentIds:e,zoneCompound:t,renderItem:n})=>{let r=L(e=>e.selectedItem?.props.id??null),i=Yg(),a=(0,R.useContext)(Gg),o=Sh(Gg,e=>{let t=e.draggedItem?.id;return t?String(t):null}),s=Sh(Gg,e=>{if(e.draggedItem?.id){let[t]=Object.entries(e.previewIndex??{}).find(([,e])=>!e?.ghost)??[];return t?.split(`:`)[0]}return null}),c=i?.defaultView,l=(0,R.useRef)(new Map),u=P(),d=(0,R.useCallback)(t=>{if(!t||t===`root`)return-1;let n=e.indexOf(t);if(n>-1)return n;let r=u.getState().state.indexes.nodes?.[t]?.path??[];for(let t=r.length-1;t>=0;--t){let n=r[t]?.split(`:`)[0];if(!n||n===`root`)continue;let i=e.indexOf(n);if(i>-1)return i}return-1},[u,e]),f=(0,R.useMemo)(()=>{let e=new Set;return[r,o,s].forEach(t=>{let n=d(t);n>-1&&e.add(n)}),Array.from(e).sort((e,t)=>e-t)},[s,o,d,r]),p=(0,R.useCallback)(e=>{let t=Hm(e);return f.forEach(e=>{t.includes(e)||t.push(e)}),t.sort((e,t)=>e-t),t},[f]),m=sh({count:e.length,getItemKey:t=>e[t],estimateSize:t=>jv(e[t]),getScrollElement:()=>c??null,overscan:Ov,observeElementRect:(e,t)=>c?Gm(e,t):Um(e,t),observeElementOffset:(e,t)=>c?Ym(e,t):Jm(e,t),scrollToFn:(e,t,n)=>c?Qm(e,t,n):$m(e,t,n),rangeExtractor:p,initialOffset:()=>c?c.scrollY:0});(0,R.useEffect)(()=>(a.getState().registerRootVirtualizer(t,{resolveIndex:e=>d(e),virtualizer:m}),()=>{a.getState().unregisterRootVirtualizer(t)}),[d,m,t,a]);let h=(0,R.useCallback)(e=>{let t=l.current.get(e);if(t)return t;let n=t=>{if(!t)return;let n=Math.ceil(t.getBoundingClientRect().height)||kv;typeof n==`number`&&n>0&&Mv(e,n)};return l.current.set(e,n),n},[]);(0,R.useEffect)(()=>{let t=new Set(e);Array.from(l.current.keys()).forEach(e=>{t.has(e)||l.current.delete(e)})},[e]);let g=m.getVirtualItems(),_=m.getTotalSize(),v=(0,R.useMemo)(()=>{let t=[],r=0,i=-1;g.forEach(a=>{if(!a)return;let o=e[a.index],s=Math.max(a.start-r,0);s>0&&t.push((0,z.jsx)(`div`,{style:{height:`${s}px`}},`gap:${i}:${a.index}`)),t.push(n({componentId:o,index:a.index,measureRef:h(o)})),r=a.end,i=a.index});let a=Math.max(_-r,0);return a>0&&t.push((0,z.jsx)(`div`,{style:{height:`${a}px`}},`gap:${i}:end`)),t},[_,g,h]);return(0,z.jsx)(z.Fragment,{children:v})};c();var Pv=a(`DropZone`,x_),Fv=`var(--puck-line-placeholder-width, 2px)`,Iv=({zoneRef:e,contentIds:t,index:n})=>{let[r,i]=(0,R.useState)();return(0,R.useLayoutEffect)(()=>{let r=e.current,a=r?.ownerDocument.defaultView;if(!r||!a)return;let o=e=>e?a.getComputedStyle(e):void 0,s=e=>parseFloat(e??``)||0,c=e=>{let n=t[e];if(n===void 0)return;let i=r.querySelector(`:scope > ${Zg(n)}:not([data-dnd-dragging])`);if(i)return{el:i,rect:i.getBoundingClientRect()}},l=r.getBoundingClientRect(),u=a.getComputedStyle(r),d=c(n-1),f=c(n),p=f??d,{horizontal:m,reversed:h,forward:g,start:_,end:v,isBefore:y}=K_(G_(r,a,u)),b=s(m?u.columnGap:u.rowGap),x=(e,t)=>{let n=t===`start`==!h?m?`marginLeft`:`marginTop`:m?`marginRight`:`marginBottom`;return s(o(e)?.[n])},S=s(u.borderLeftWidth),C=s(u.borderTopWidth),w=s(u.borderRightWidth),T=s(u.borderBottomWidth),ee;ee=f?d&&y(v(d.rect),_(f.rect))?(v(d.rect)+_(f.rect))/2:_(f.rect)-g*(Math.max(x(f.el,`start`),b)/2):d?v(d.rect)+g*(Math.max(x(d.el,`end`),b)/2):m?h?l.right-w-s(u.paddingRight):l.left+S+s(u.paddingLeft):h?l.bottom-T-s(u.paddingBottom):l.top+C+s(u.paddingTop),i(m?{top:(p?.rect.top??l.top+C+s(u.paddingTop))-l.top+r.scrollTop-C,height:p?.rect.height??l.height-C-T-s(u.paddingTop)-s(u.paddingBottom),left:H_(ee-l.left+r.scrollLeft-S,0,r.scrollWidth),width:Fv,transform:`translateX(-50%)`}:{left:(p?.rect.left??l.left+S+s(u.paddingLeft))-l.left+r.scrollLeft-S,width:p?.rect.width??l.width-S-w-s(u.paddingLeft)-s(u.paddingRight),top:H_(ee-l.top+r.scrollTop-C,0,r.scrollHeight),height:Fv,transform:`translateY(-50%)`})},[e,t,n]),r?(0,z.jsx)(`div`,{className:Pv(`linePlaceholder`),style:r,"data-puck-line-placeholder":!0}):null},Lv=a(`DropZone`,x_),Rv=({element:e,label:t,override:n})=>e?(0,z.jsx)(`div`,{dangerouslySetInnerHTML:{__html:e.outerHTML}}):(0,z.jsx)(iv,{name:t,children:n}),zv=e=>(0,z.jsx)(Vv,o({},e)),Bv=(0,R.memo)(({zoneCompound:t,componentId:n,index:r,dragAxis:i,collisionAxis:a,inDroppableZone:s,itemRef:c})=>{let l=L(e=>e.metadata),{depth:u=1}=(0,R.useContext)(Wg)??{},d=(0,R.useContext)(Gg),f=L(En(e=>e.state.indexes.nodes[n]?.flatData.props)),p=L(e=>e.state.indexes.nodes[n]?.data.type),m=L(En(e=>e.state.indexes.nodes[n]?.data.readOnly)),h=P(),g=(0,R.useMemo)(()=>{if(f)return mt({type:p,props:f});let e=d.getState().previewIndex[t];return n===e?.props.id?{type:e.componentType,props:e.props,previewType:e.type,element:e.element}:null},[h,n,t,p,f]),_=L(e=>g?.type?e.config.components[g.type]:null),v=(0,R.useMemo)(()=>({renderDropZone:zv,isEditing:!0,dragRef:null,metadata:o(o({},l),_?.metadata)}),[l,_?.metadata]),y=L(e=>e.overrides),b=L(e=>e.componentState[n]?.loadingCount>0),x=L(e=>e.selectedItem?.props.id===n||!1),S=I(`label-component`),C=I(`canvas-noconfig`,{type:(g?.type)?.toString()??``}),w=_?.label??g?.type.toString()??S,T=(0,R.useMemo)(()=>e(o(o({},_?.defaultProps),g?.props),{puck:v,editMode:!0}),[_?.defaultProps,g?.props,v]),ee=(0,R.useMemo)(()=>({type:g?.type??p,props:T}),[g?.type,p,T]),E=L(e=>e.config),D=L(e=>e.plugins),O=L(e=>e.fieldTransforms),te=_v(E,ee,(0,R.useMemo)(()=>o(o(o(o(o({},ln(zv,e=>(0,z.jsx)(gv,{componentId:n,zone:e.zone}))),xv()),Tv()),D.reduce((e,t)=>o(o({},e),t.fieldTransforms),{})),O),[D,O]),m,b);if(!g)return;let ne=_?_.render:()=>(0,z.jsx)(`div`,{style:{padding:48,textAlign:`center`},children:C}),re=g.type,ie=`previewType`in g&&g.previewType===`insert`;return(0,z.jsx)(b_,{id:n,componentType:re,zoneCompound:t,depth:u+1,index:r,isLoading:b,isSelected:x,label:w,autoDragAxis:i,userDragAxis:a,inDroppableZone:s,itemRef:c,children:t=>_?.inline&&!ie?(0,z.jsx)(Dv,{Component:ne,componentProps:e(o({},te),{puck:e(o({},te.puck),{dragRef:t})})}):(0,z.jsx)(`div`,{ref:t,children:ie?(0,z.jsx)(Rv,{label:w,override:y.componentItem??y.drawerItem,element:`element`in g&&g.element?g.element:void 0}):(0,z.jsx)(Dv,{Component:ne,componentProps:te})})})}),Vv=(0,R.forwardRef)(function({zone:t,allow:n,disallow:r,style:i,className:a,minEmptyHeight:s=`128px`,collisionAxis:c,as:l},u){let d=(0,R.useContext)(Wg),f=P(),{areaId:p,depth:m=0,registerLocalZone:h,unregisterLocalZone:g}=d??{},_=L(En(e=>p?e.state.indexes.nodes[p]?.path:null)),v=w;p&&t!==w&&(v=`${p}:${t}`);let y=v===w||t===w||p===`root`,b=Sh(Gg,e=>e.nextAreaDepthIndex[p||``]),x=L(En(e=>e.state.indexes.zones[v]?.contentIds)),S=L(En(e=>e.state.indexes.zones[v]?.type));(0,R.useEffect)(()=>{(!S||S===`dropzone`)&&d?.registerZone&&d?.registerZone(v)},[S,f]),(0,R.useEffect)(()=>{S===`dropzone`&&v!==w&&console.warn(`DropZones have been deprecated in favor of slot fields and will be removed in a future version of Puck. Please see the migration guide: https://www.puckeditor.com/docs/guides/migrations/dropzones-to-slots`)},[S]);let C=(0,R.useMemo)(()=>x||[],[x]),T=(0,R.useRef)(null),ee=(0,R.useCallback)(e=>S_(e,{allow:n,disallow:r}),[n,r]),E=Sh(Gg,e=>{let t=e.draggedItem?.data.componentType;return ee(t)}),D=b||y,O=Sh(Gg,e=>{let t=!0;return t=e.zoneDepthIndex[v]??!1,t&&=E,t});(0,R.useEffect)(()=>(h&&h(v,E||O),()=>{g&&g(v)}),[E,O,v]);let[te,ne]=dv(C,v),re=ne&&!ne.linePlaceholder?1:0,ie=te.length===re,k=O&&ie,ae=(0,R.useContext)(Gg);(0,R.useEffect)(()=>{let{enabledIndex:t}=ae.getState();ae.setState({enabledIndex:e(o({},t),{[v]:O})})},[O,ae,v]);let{ref:oe}=lp({id:v,collisionPriority:O?m:0,disabled:!k,collisionDetector:Hh,type:`dropzone`,data:{areaId:p,depth:m,isDroppableTarget:E,path:_||[]}}),se=L(e=>e?.selectedItem&&p===e?.selectedItem.props.id),[ce]=hv(T,c),[le,A]=lv({zoneCompound:v,userMinEmptyHeight:s,ref:T}),ue=(0,R.useCallback)(e=>{d_([T,oe,u],e)},[oe]),j=L(e=>e._experimentalVirtualization),de=l??`div`,fe=j&&(p??`root`)===`root`&&m===0;return(0,z.jsxs)(de,{className:`${Lv({isRootZone:y,hoveringOverArea:D,isEnabled:O,isAreaSelected:se,hasChildren:C.length>0,isAnimating:A})}${a?` ${a}`:``}`,ref:ue,"data-testid":`dropzone:${v}`,"data-puck-dropzone":v,style:e(o({},i),{"--puck-slot-min-empty-height":le,backgroundColor:i?.backgroundColor}),children:[fe?(0,z.jsx)(Nv,{contentIds:te,zoneCompound:v,renderItem:e=>(0,z.jsx)(Bv,{zoneCompound:v,componentId:e.componentId,dragAxis:ce,index:e.index,collisionAxis:c,inDroppableZone:E,itemRef:e.measureRef},e.componentId)}):te.map((e,t)=>(0,z.jsx)(Bv,{zoneCompound:v,componentId:e,dragAxis:ce,index:t,collisionAxis:c,inDroppableZone:E},e)),ne?.linePlaceholder&&(0,z.jsx)(Iv,{zoneRef:T,contentIds:C,index:ne.index})]})}),Hv=({config:t,item:n,metadata:r})=>{let i=t.components[n.type],a=fn(t,n,n=>(0,z.jsx)(vn,e(o({},n),{config:t,metadata:r}))),s=(0,R.useMemo)(()=>({areaId:a.id,depth:1}),[a]),c=_n(i.fields,a);return(0,z.jsx)(qg,{value:s,children:(0,z.jsx)(i.render,e(o(o({},a),c),{puck:e(o({},a.puck),{renderDropZone:Uv,metadata:o(o({},r),i.metadata)})}))},a.id)},Uv=e=>(0,z.jsx)(Wv,o({},e)),Wv=(0,R.forwardRef)(function({className:e,style:t,zone:n,as:r},i){let a=(0,R.useContext)(Wg),{areaId:o=`root`}=a||{},{config:s,data:c,metadata:l}=(0,R.useContext)(qv),u=`${o}:${n}`,d=c?.content||[];(0,R.useEffect)(()=>{d||a?.registerZone&&a?.registerZone(u)},[d]);let f=r??`div`;return!c||!s?null:(u!==w&&(d=N(c,u).zones[u]),(0,z.jsx)(f,{className:e,style:t,ref:i,children:d.map(e=>s.components[e.type]?(0,z.jsx)(Hv,{config:s,item:e,metadata:l},e.props.id):null)}))}),Gv=e=>(0,z.jsx)(Kv,o({},e)),Kv=(0,R.forwardRef)(function(t,n){return(0,R.useContext)(Wg)?.mode===`edit`?(0,z.jsx)(z.Fragment,{children:(0,z.jsx)(Vv,e(o({},t),{ref:n}))}):(0,z.jsx)(z.Fragment,{children:(0,z.jsx)(Wv,e(o({},t),{ref:n}))})}),qv=R.createContext({config:{components:{}},data:{root:{},content:[]},metadata:{}});function Jv({config:t,data:n,metadata:r={}}){let i=e(o({},n),{root:n.root||{},content:n.content||[]}),a=`props`in i.root?i.root.props:i.root,s=a?.title||``,c=e(o({},a),{puck:{renderDropZone:Gv,isEditing:!1,dragRef:null,metadata:r},title:s,editMode:!1,id:`puck-root`}),l=fn(t,{type:`root`,props:c},n=>(0,z.jsx)(bn,e(o({},n),{config:t,metadata:r}))),u=_n(t.root?.fields,c),d=(0,R.useMemo)(()=>({mode:`render`,depth:0}),[]);return t.root?.render?(0,z.jsx)(qv.Provider,{value:{config:t,data:i,metadata:r},children:(0,z.jsx)(qg,{value:d,children:(0,z.jsx)(t.root.render,e(o(o({},l),u),{children:(0,z.jsx)(Uv,{zone:he})}))})}):(0,z.jsx)(qv.Provider,{value:{config:t,data:i,metadata:r},children:(0,z.jsx)(qg,{value:d,children:(0,z.jsx)(Uv,{zone:he})})})}c(),c();function Yv(e,t,n){return s(this,null,function*(){let r=t().state.indexes.nodes[e];if(!r){console.warn(`Warning: Could not find component with id "${e}" to resolve its data. Component may have been removed or the id is invalid.`);return}yield R_(r.data,t,n)})}c();function Xv(e,t,n){return s(this,null,function*(){let r=oe(e,t().state);if(!r){console.warn(`Warning: Could not find component for selector "${JSON.stringify(e)}" to resolve its data. Component may have been removed or the selector is invalid.`);return}yield R_(S(r),t,n)})}var Zv=(e,t)=>{let n={back:e.history.back,forward:e.history.forward,setHistories:e.history.setHistories,setHistoryIndex:e.history.setHistoryIndex,hasPast:e.history.hasPast(),hasFuture:e.history.hasFuture(),histories:e.history.histories,index:e.history.index},r={appState:ee(e.state),config:e.config,dispatch:e.dispatch,getPermissions:e.permissions.getPermissions,refreshPermissions:e.permissions.refreshPermissions,resolveDataById:(e,n)=>Yv(e,t,n),resolveDataBySelector:(e,n)=>Xv(e,t,n),history:n,selectedItem:e.selectedItem||null,getItemBySelector:t=>oe(t,e.state),getItemById:t=>e.state.indexes.nodes[t].data,getSelectorForId:t=>L_(e.state,t),getParentById:t=>{let n=e.state.indexes.nodes[t].parentId;if(n===null)return;let r=e.state.indexes.nodes[n];if(r)return r.data},dictionary:e.dictionary};return r.__private={appState:e.state},r},Qv=(0,R.createContext)(null),$v=e=>({state:e.state,config:e.config,dispatch:e.dispatch,permissions:e.permissions,history:e.history,selectedItem:e.selectedItem,dictionary:e.dictionary}),ey=e=>{let[t]=(0,R.useState)(()=>se(()=>Zv($v(e.getState()),e.getState)));return(0,R.useEffect)(()=>e.subscribe(e=>$v(e),n=>{t.setState(Zv(n,e.getState))}),[]),t};function ty(){let e=(0,R.useContext)(Qv);if(!e)throw Error(`usePuckGet must be used inside <Puck>.`);return e.getState}c(),c(),c(),c(),c();var ny=a(`ComponentList`,{ComponentList:`_ComponentList_htktj_1`,"ComponentList--isExpanded":`_ComponentList--isExpanded_htktj_5`,"ComponentList-content":`_ComponentList-content_htktj_9`,"ComponentList-title":`_ComponentList-title_htktj_17`,"ComponentList-titleIcon":`_ComponentList-titleIcon_htktj_63`}),ry=({name:e,label:t})=>{let n=L(e=>e.overrides),r=L(t=>t.permissions.getPermissions({type:e}).insert);return(0,R.useEffect)(()=>{n.componentItem&&console.warn("The `componentItem` override has been deprecated and renamed to `drawerItem`")},[n]),(0,z.jsx)(sv.Item,{label:t,name:e,isDragDisabled:!r,children:n.componentItem??n.drawerItem})},iy=({children:t,title:n,id:r})=>{let i=L(e=>e.config),a=L(e=>e.setUi),s=L(e=>e.state.ui.componentList),{expanded:c=!0}=s[r]||{},l=`puck-drawer-category-${r}`,u=I(`drawer-category-collapse`,{title:n??``}),d=I(`drawer-category-expand`,{title:n??``});return(0,z.jsxs)(`div`,{className:ny({isExpanded:c}),children:[n&&(0,z.jsxs)(`button`,{type:`button`,className:ny(`title`),"aria-expanded":c,"aria-controls":l,onClick:()=>a({componentList:e(o({},s),{[r]:e(o({},s[r]),{expanded:!c})})}),title:c?u:d,children:[(0,z.jsx)(`div`,{children:n}),(0,z.jsx)(`div`,{className:ny(`titleIcon`),children:c?(0,z.jsx)(it,{size:12}):(0,z.jsx)(we,{size:12})})]}),(0,z.jsx)(`div`,{className:ny(`content`),id:l,children:(0,z.jsx)(sv,{children:t||Object.keys(i.components).map(e=>(0,z.jsx)(ry,{label:i.components[e].label??e,name:e},e))})})]})};iy.Item=ry;var ay=()=>{let[e,t]=(0,R.useState)(),n=L(e=>e.config),r=L(e=>e.state.ui.componentList),i=I(`drawer-category-other`);return(0,R.useEffect)(()=>{if(Object.keys(r).length>0){let e=[],a;a=Object.entries(r).map(([t,r])=>!r.components||(r.components.forEach(t=>{e.push(t)}),r.visible===!1)?null:(0,z.jsx)(iy,{id:t,title:n.categories?.[t]?.title||r.title||t,children:r.components.map((e,t)=>{let r=n.components[e]||{};return(0,z.jsx)(iy.Item,{label:r.label??e,name:e,index:t},e)})},t));let o=Object.keys(n.components).filter(t=>e.indexOf(t)===-1);o.length>0&&!r.other?.components&&r.other?.visible!==!1&&a.push((0,z.jsx)(iy,{id:`other`,title:r.other?.title||i,children:o.map((e,t)=>{let r=n.components[e]||{};return(0,z.jsx)(iy.Item,{name:e,label:r.label??e,index:t},e)})},`other`)),t(a)}},[n.categories,n.components,r,i]),e},oy=()=>{let e=L(e=>e.overrides),t=ay(),n=(0,R.useMemo)(()=>(e.components&&console.warn("The `components` override has been deprecated and renamed to `drawer`"),e.components||e.drawer||`div`),[e]);return(0,z.jsx)(n,{children:t||(0,z.jsx)(iy,{id:`all`})})};c();var sy=a(`BlocksPlugin`,{BlocksPlugin:`_BlocksPlugin_9af19_1`}),cy=(e={})=>({name:`blocks`,label:e.label??`Blocks`,render:()=>(0,z.jsx)(`div`,{className:sy(),children:(0,z.jsx)(oy,{})}),icon:e.icon??(0,z.jsx)(Ce,{})});c(),c(),c();var ly=(e,t)=>Object.keys(e.indexes.zones).filter(e=>e.split(`:`)[0]===t);c(),c(),c(),c(),c(),c(),c();function uy(e,t){if(typeof e!=`string`)throw Error(`Can't get field definition for path (${e}): Path should be a string`);if(!t||typeof t!=`object`)return;let n=e.split(/\.|\[\d+\]/).filter(Boolean),r=t,i;for(let e=0;e<n.length;e++){let t=n[e];if(i=r[t],e===n.length-1)return i;if(!i||(i.type!==`object`||!i.objectFields)&&(i.type!==`array`||!i.arrayFields))return;i.type===`object`&&(r=i.objectFields),i.type===`array`&&(r=i.arrayFields)}}var dy=(e,t,n)=>{let[r,i]=e.split(`:`);if(!i)return;let a=n[r]?.data.type;return uy(i,(a&&a!==`root`?t.components[a]:t.root)?.fields)},fy={},py=(e,t,n)=>{if(n.zones[e]?.type!==`slot`)return fy;let r=dy(e,t,n.nodes);return r?.type===`slot`?{allow:r.allow,disallow:r.disallow}:fy},my=`outline-item`,hy=`outline-zone`,gy=(e,t,n)=>{let r=e.get(t);if(r!==void 0)return r;let i=n();return e.set(t,i),i},_y=(e,t,n,r,i)=>gy(e,`zone:${t}`,()=>S_(n,py(t,r,i))),vy=(e,t,n,r,i)=>gy(e,`childZones:${t}`,()=>Object.keys(i.zones).some(a=>a.startsWith(`${t}:`)&&_y(e,a,n,r,i))),yy=(e,t,n,r)=>gy(e,`subtree:${t}`,()=>t===n||(r[t]?.path||[]).some(e=>e.split(`:`)[0]===n)),by=(e,t)=>n=>{if(n.type!==my)return!1;let r=n.data,i=e.outlineStore.getState().acceptCache,{config:a,state:o}=e.appStore.getState(),s=o.indexes;return yy(i,t.kind===`row`?t.itemId:t.zoneCompound.split(`:`)[0],r.itemId,s.nodes)?!1:t.kind===`zone`?_y(i,t.zoneCompound,r.componentType,a,s):_y(i,t.zoneCompound,r.componentType,a,s)||vy(i,t.itemId,r.componentType,a,s)};c();var xy=600,Sy=()=>{let e=null,t=null,n=()=>{e!==null&&(clearTimeout(e),e=null),t=null};return se((r,i)=>({status:`idle`,draggedRow:null,tempExpandedIds:new Set,expandCandidateId:null,indicator:null,drop:null,acceptCache:new Map,startDrag:e=>r({status:`dragging`,draggedRow:e,acceptCache:new Map}),setTarget:(e,t)=>{let n=i();(n.indicator?.targetId!==e.targetId||n.indicator?.position!==e.position||n.drop?.zone!==t.zone||n.drop?.index!==t.index)&&r({indicator:e,drop:t})},clearTarget:()=>{(i().indicator!==null||i().drop!==null)&&r({indicator:null,drop:null})},scheduleExpand:(a,o)=>{t===a||i().tempExpandedIds.has(a)||(n(),t=a,r({expandCandidateId:a}),e=setTimeout(()=>{e=null,t=null,r(e=>({tempExpandedIds:new Set(e.tempExpandedIds).add(a),expandCandidateId:null})),o()},xy))},cancelPendingExpand:()=>{n(),i().expandCandidateId!==null&&r({expandCandidateId:null})},endDrag:()=>{n(),r({status:`dropping`,indicator:null,drop:null,expandCandidateId:null})},reset:()=>{n(),r({status:`idle`,draggedRow:null,tempExpandedIds:new Set,expandCandidateId:null,indicator:null,drop:null,acceptCache:new Map})}}))},Cy=(0,R.createContext)(Sy()),wy=()=>(0,R.useContext)(Cy),Ty=e=>Sh(Cy,e),Ey=({kind:e,zoneCompound:t})=>{let n=P(),r=wy(),i=`${e}:${t}`,{ref:a}=lp({id:i,type:hy,accept:(0,R.useMemo)(()=>by({appStore:n,outlineStore:r},{kind:`zone`,zoneCompound:t}),[n,r,t]),collisionDetector:Hh,data:{kind:`zone`,zoneCompound:t}}),o=Ty(e=>e.indicator?.targetId===i);return(0,R.useMemo)(()=>({isDropTarget:o,ref:a}),[o,a])};c(),c();var Dy=a(`DropLine`,{DropLine:`_DropLine_eyz3q_2`,"DropLine--top":`_DropLine--top_eyz3q_12`,"DropLine--bottom":`_DropLine--bottom_eyz3q_16`,"DropLine--outset":`_DropLine--outset_eyz3q_20`}),Oy=({edge:e,outset:t})=>(0,z.jsx)(`div`,{className:Dy({top:e===`top`,bottom:e===`bottom`,outset:!!t})});c(),c(),c(),c();var ky=(...e)=>[...e].filter(Boolean).join(` `);c();var Ay=a(`LayerTree`,{"LayerTree-helper":`_LayerTree-helper_1m7e4_2`,"LayerTree-helperRoot":`_LayerTree-helperRoot_1m7e4_11`}),jy=({zoneCompound:e})=>{let{ref:t,isDropTarget:n}=Ey({kind:`empty`,zoneCompound:e}),r=I(`outline-empty`),[i]=e.split(`:`),a=i===_e;return(0,z.jsxs)(`li`,{className:ky(Ay(`helper`),a?Ay(`helperRoot`):void 0),"data-puck-drop-target":n||void 0,ref:t,children:[r,n&&(0,z.jsx)(Oy,{edge:`top`})]})};c(),c();var My=({componentType:e,index:t,itemId:n,zoneCompound:r})=>{let i=P(),a=wy(),o=(0,R.useMemo)(()=>by({appStore:i,outlineStore:a},{kind:`row`,itemId:n,zoneCompound:r}),[i,a,n,r]),s=(0,R.useMemo)(()=>Kh(`y`),[]),{handleRef:c,ref:l,isDragSource:u}=Em({id:n,index:t,group:r,type:my,accept:o,data:{kind:`row`,itemId:n,zoneCompound:r,index:t,componentType:e},collisionPriority:1,collisionDetector:s,transition:{duration:0},plugins:e=>[...e,Uu.configure({feedback:`clone`,dropAnimation:null})]}),{indicatorPosition:d,isExpandCandidate:f,isTempExpanded:p}=Ty(e=>({indicatorPosition:e.indicator?.targetId===n?e.indicator.position:null,isExpandCandidate:e.expandCandidateId===n,isTempExpanded:e.tempExpandedIds.has(n)}));return{rowRef:(0,R.useCallback)(e=>{l(e),c(e)},[l,c]),isDragSource:u,indicatorPosition:d,isExpandCandidate:f,isTempExpanded:p}};c();var Ny={Layer:`_Layer_onfgu_1`,"Layer-inner":`_Layer-inner_onfgu_8`,"Layer--isSortable":`_Layer--isSortable_onfgu_18`,"Layer-content":`_Layer-content_onfgu_22`,"Layer-clickable":`_Layer-clickable_onfgu_29`,"Layer-caret":`_Layer-caret_onfgu_57`,"Layer--containsZone":`_Layer--containsZone_onfgu_68`,"Layer-title":`_Layer-title_onfgu_76`,"Layer-name":`_Layer-name_onfgu_85`,"Layer-icon":`_Layer-icon_onfgu_91`,"Layer-zones":`_Layer-zones_onfgu_101`,"Layer--isExpanded":`_Layer--isExpanded_onfgu_106`,"Layer--isSelected":`_Layer--isSelected_onfgu_115`,"Layer--isExpandCandidate":`_Layer--isExpandCandidate_onfgu_138`,"Layer--isDragSource":`_Layer--isDragSource_onfgu_143`};c(),c();var Py=a(`LayerActions`,{LayerActions:`_LayerActions_d90t9_2`,"LayerActions--visible":`_LayerActions--visible_d90t9_18`}),Fy=({node:e,visible:t})=>{let n=L(e=>e.dispatch),r=wy(),i=L(En(t=>{let n=oe({index:e.index,zone:e.zoneCompound},t.state),r=t.permissions.getPermissions({item:n});return{delete:r.delete,duplicate:r.duplicate}})),a=I(`outline-item-duplicate`),o=I(`outline-item-delete`),s=(0,R.useCallback)(t=>{t.stopPropagation(),r.getState().status===`idle`&&n({type:`remove`,index:e.index,zone:e.zoneCompound})},[n,r,e]),c=(0,R.useCallback)(t=>{t.stopPropagation(),r.getState().status===`idle`&&n({type:`duplicate`,sourceIndex:e.index,sourceZone:e.zoneCompound})},[n,r,e.index,e.zoneCompound]);return!i.delete&&!i.duplicate?null:(0,z.jsxs)(`div`,{className:Py({visible:t}),children:[i.duplicate&&(0,z.jsx)(Re,{onClick:c,title:a,type:`button`,children:(0,z.jsx)(Me,{})}),i.delete&&(0,z.jsx)(Re,{onClick:s,title:o,type:`button`,children:(0,z.jsx)($e,{})})]})},Iy=a(`Layer`,Ny),Ly=(0,R.forwardRef)(function({dataIndex:t,depth:n,isSelected:r,node:i,selectedId:a},s){let c=L(e=>e.dispatch),l=L(e=>e.state.ui.itemExpanded?.[i.itemId]??!1),u=Sh(Gg,e=>e.hoveringComponent===i.itemId),d=L(e=>{let t=oe({index:i.index,zone:i.zoneCompound},e.state);return e.permissions.getPermissions({item:t})?.drag}),{indicatorPosition:f,isDragSource:p,isExpandCandidate:m,isTempExpanded:h,rowRef:g}=My({componentType:i.componentType,index:i.index,itemId:i.itemId,zoneCompound:i.zoneCompound}),_=(0,R.useContext)(Gg),v=wy(),y=I(`outline-item-collapse`),b=I(`outline-item-expand`),x=i.childZones.length>0,S=(0,R.useCallback)(e=>{c({type:`setUi`,ui:{itemSelector:e}})},[c]),C=l||h,w=f!==null,T=i.childZones.length!==1;return(0,z.jsxs)(`li`,{ref:s,className:Iy({containsZone:x,isDragSource:p,isExpandCandidate:m,isExpanded:C,isHovering:u,isSelected:r,isSortable:d}),"data-index":t,"data-puck-layer-tree-id":i.itemId,children:[w&&(0,z.jsx)(Oy,{edge:f===`before`?`top`:`bottom`,outset:!0}),(0,z.jsxs)(`div`,{className:Iy(`inner`),ref:g,onMouseEnter:e=>{e.stopPropagation(),v.getState().status===`idle`&&_.setState({hoveringComponent:i.itemId})},onMouseLeave:e=>{e.stopPropagation(),_.setState({hoveringComponent:null})},children:[(0,z.jsx)(`div`,{className:Iy(`caret`),children:(0,z.jsx)(Re,{onClick:e=>{e.stopPropagation(),v.getState().status===`idle`&&c({type:`setUi`,ui:e=>{let t=o({},e.itemExpanded);return e.itemExpanded?.[i.itemId]?delete t[i.itemId]:t[i.itemId]=!0,{itemExpanded:t}},recordHistory:!1})},title:l?y:b,type:`button`,children:(0,z.jsx)(Be,{})})}),(0,z.jsxs)(`div`,{className:Iy(`content`),children:[(0,z.jsx)(`button`,{type:`button`,className:Iy(`clickable`),onClick:()=>{v.getState().status===`idle`&&(S({index:i.index,zone:i.zoneCompound}),_.getState().scrollToComponent(i.itemId))},children:(0,z.jsxs)(`div`,{className:Iy(`title`),children:[(0,z.jsx)(`div`,{className:Iy(`icon`),children:i.componentType===`Text`||i.componentType===`Heading`?(0,z.jsx)(Fe,{}):(0,z.jsx)(ie,{})}),(0,z.jsx)(`div`,{className:Iy(`name`),children:i.label})]})}),(0,z.jsx)(Fy,{node:i,visible:u&&!p})]})]}),x&&C&&i.childZones.map(t=>(0,z.jsx)(`div`,{className:Iy(`zones`),children:(0,z.jsx)(Qy,{depth:T?n+1:n,selectedId:a,tree:T?t:e(o({},t),{label:void 0})})},t.zoneCompound))]})});c();var Ry={LayerTree:`_LayerTree_o5tyt_1`,"LayerTree--nested":`_LayerTree--nested_o5tyt_12`},zy=a(`LayerTree`,Ry),By=({depth:e,selectedId:t,tree:n})=>(0,z.jsxs)(`ul`,{className:zy({nested:e>0}),children:[n.items.length===0&&(0,z.jsx)(jy,{zoneCompound:n.zoneCompound}),n.items.map(n=>(0,z.jsx)(Ly,{depth:e,isSelected:t===n.itemId,node:n,selectedId:t},n.itemId))]});c();var Vy=a(`LayerTree`,Ry),Hy=32,Uy=8,Wy=new Map,Gy=e=>Wy.get(e)??Hy,Ky=(e,t)=>{t<=0||Wy.set(e,t)},qy=e=>{let t=e?.parentElement??null;for(;t;){let{overflow:e,overflowY:n}=getComputedStyle(t);if([e,n].some(e=>/auto|scroll/.test(e)))return t;t=t.parentElement}return null},Jy=({depth:e,selectedId:t,tree:n})=>{let r=(0,R.useRef)(null),i=Ty(e=>e.draggedRow?.zoneCompound===n.zoneCompound?e.draggedRow.index:null),a=(0,R.useCallback)(e=>{let t=Hm(e);return i!==null&&!t.includes(i)&&(t.push(i),t.sort((e,t)=>e-t)),t},[i]),o=sh({count:n.items.length,estimateSize:e=>Gy(n.items[e].itemId),getItemKey:e=>n.items[e].itemId,getScrollElement:()=>qy(r.current),overscan:Uy,rangeExtractor:a,measureElement:e=>{let t=Math.ceil(e.getBoundingClientRect().height),n=e.dataset.puckLayerTreeId;return n&&Ky(n,t),t||Hy}}),s=o.getVirtualItems(),c=o.getTotalSize(),l=[],u=0,d=-1;s.forEach(r=>{let i=n.items[r.index],a=Math.max(r.start-u,0);a>0&&l.push((0,z.jsx)(`li`,{"aria-hidden":`true`,style:{height:`${a}px`}},`gap:${n.zoneCompound}:${d}:${r.index}`)),l.push((0,z.jsx)(Ly,{dataIndex:r.index,depth:e,isSelected:t===i.itemId,node:i,ref:o.measureElement,selectedId:t},i.itemId)),u=r.end,d=r.index});let f=Math.max(c-u,0);return f>0&&l.push((0,z.jsx)(`li`,{"aria-hidden":`true`,style:{height:`${f}px`}},`gap:${n.zoneCompound}:${d}:end`)),(0,z.jsxs)(`ul`,{className:Vy({nested:e>0}),ref:r,children:[n.items.length===0&&(0,z.jsx)(jy,{zoneCompound:n.zoneCompound}),l]})};c();var Yy=a(`LayerTree`,{"LayerTree-zoneTitle":`_LayerTree-zoneTitle_fvhlh_2`,"LayerTree-zoneIcon":`_LayerTree-zoneIcon_fvhlh_19`}),Xy=25,Zy=({label:e,zoneCompound:t})=>{let{ref:n,isDropTarget:r}=Ey({kind:`label`,zoneCompound:t});return(0,z.jsxs)(`div`,{className:Yy(`zoneTitle`),"data-puck-drop-target":r||void 0,ref:n,children:[(0,z.jsx)(`div`,{className:Yy(`zoneIcon`),children:(0,z.jsx)(Ie,{})}),e,r&&(0,z.jsx)(Oy,{edge:`bottom`})]})},Qy=({depth:e,selectedId:t,tree:n})=>{let r=e===0&&n.items.length>=Xy;return(0,z.jsxs)(z.Fragment,{children:[n.label&&(0,z.jsx)(Zy,{label:n.label,zoneCompound:n.zoneCompound}),r?(0,z.jsx)(Jy,{depth:e,selectedId:t,tree:n}):(0,z.jsx)(By,{depth:e,selectedId:t,tree:n})]})};c(),c(),c();function $y(e,t){return Object.keys(t).some(t=>t.startsWith(`${e}:`))}var eb=2,tb=60,nb=(e,t)=>{let n,r=0,i=0,a=()=>{let o=Yg()?.querySelector(`[data-puck-component="${e}"]`),s=o?o.getBoundingClientRect().top:null;if(r=s===n?r+1:0,n=s,i+=1,r>=eb||i>=tb){t(e);return}requestAnimationFrame(a)};requestAnimationFrame(a)},rb=e=>{if(typeof document>`u`)return;let t=document.getElementById(`preview-frame`);e?t?.setAttribute(`data-puck-outline-dragging`,`true`):t?.removeAttribute(`data-puck-outline-dragging`)},ib=(e,t)=>{let n=e.operation.source,r=n?.data;if(!n||!r)return;let i=t.appStore.getState(),a=oe({zone:r.zoneCompound,index:r.index},i.state);if(!a||!i.permissions.getPermissions({item:a}).drag){e.preventDefault();return}t.outlineDndStore.getState().startDrag({itemId:r.itemId,zoneCompound:r.zoneCompound,index:r.index,componentType:r.componentType}),rb(!0),i.dispatch({type:`setUi`,ui:{isDragging:!0},recordHistory:!1})},ab=(e,t,n)=>{let r=n.outlineDndStore.getState(),i=r.draggedRow;if(!i)return;let a=e.operation.target;if(!a){r.cancelPendingExpand(),r.clearTarget();return}let o=a.data;if(o.kind===`zone`){r.cancelPendingExpand(),r.setTarget({targetId:a.id.toString(),position:`inside`},{zone:o.zoneCompound,index:0});return}let{config:s,state:c}=n.appStore.getState(),l=c.indexes,u=r.acceptCache;if(_y(u,o.zoneCompound,i.componentType,s,l)){let e=t.collisionObserver.collisions[0]?.data,n=qh(e?.direction);r.setTarget({targetId:a.id.toString(),position:n},{zone:o.zoneCompound,index:Jh({position:n,sourceIndex:i.index,targetIndex:o.index,isSameZone:o.zoneCompound===i.zoneCompound})})}else r.clearTarget();let d=!!c.ui.itemExpanded?.[o.itemId]||r.tempExpandedIds.has(o.itemId),f=$y(o.itemId,l.zones);!d&&f?r.scheduleExpand(o.itemId,()=>{requestAnimationFrame(()=>t.collisionObserver.forceUpdate(!0))}):r.cancelPendingExpand()},ob=(e,t)=>{let{source:n}=e.operation,r=t.outlineDndStore.getState(),i=r.draggedRow,a=e.canceled?null:r.drop,o=t.appStore.getState().dispatch;if(rb(!1),i&&a){B_(i.itemId,{zone:i.zoneCompound,index:i.index},{zone:a.zone,index:a.index},t.appStore);let e=a.zone!==i.zoneCompound||a.index!==i.index;o({type:`setUi`,ui:{itemSelector:{zone:a.zone,index:a.index},isDragging:!1},recordHistory:e}),nb(i.itemId,t.scrollToComponent)}else o({type:`setUi`,ui:{isDragging:!1},recordHistory:!1});r.endDrag();let s=()=>t.outlineDndStore.getState().reset();if(!n||n.status===`idle`)s();else{let e=Zn(()=>{n.status===`idle`&&(s(),e?.())})}},sb=[],cb=({children:e})=>{let t=P(),n=(0,R.useContext)(Gg),[r]=(0,R.useState)(()=>Sy()),i=L(e=>e.dnd?.disableOutlineDrag??!1),a=Ph({mouse:[new kd.Distance({value:5})]}),o=(0,R.useMemo)(()=>({outlineDndStore:r,appStore:t,scrollToComponent:e=>n.getState().scrollToComponent(e)}),[r,t,n]);return(0,z.jsx)(Cy.Provider,{value:r,children:(0,z.jsx)(Af,{sensors:i?sb:a,onBeforeDragStart:e=>{ib(e,o)},onDragOver:(e,t)=>{e.preventDefault(),ab(e,t,o)},onDragMove:(e,t)=>{ab(e,t,o)},onDragEnd:e=>{ob(e,o)},children:e})})};c();var lb={LayerTreeRoot:`_LayerTreeRoot_1qowl_1`};c();var ub=e=>{let t={};return Object.keys(e).forEach(e=>{let[n]=e.split(`:`);n&&(t[n]||(t[n]=[]),t[n].push(e))}),t},db=(e,t,n,r)=>{if(r!==void 0)return r;let[,i]=e.split(`:`);if(i)return dy(e,n,t)?.label??i},fb=({config:e,itemId:t,index:n,nodes:r,zoneCompound:i,zones:a,zonesByParent:o,componentFallbackLabel:s})=>{let c=(r[t]?.data.type)?.toString()??s,l=e.components[c]?.label??c;return{childZones:(o[t]||[]).map(t=>pb({config:e,nodes:r,zoneCompound:t,zones:a,zonesByParent:o})),componentType:c,index:n,itemId:t,label:l,zoneCompound:i}},pb=({config:e,label:t,nodes:n,zoneCompound:r,zones:i,zonesByParent:a=ub(i),componentFallbackLabel:o})=>({items:(i[r]?.contentIds??[]).map((t,o)=>fb({config:e,itemId:t,index:o,nodes:n,zoneCompound:r,zones:i,zonesByParent:a})),label:db(r,n,e,t),zoneCompound:r}),mb=a(`LayerTreeRoot`,lb),hb=({selectedId:e,trees:t})=>{let n=L(e=>e.dnd?.disableOutlineDrag??!1);return(0,z.jsx)(cb,{children:(0,z.jsx)(`div`,{className:mb(),"data-puck-dnd-disabled":n||void 0,children:t.map(t=>(0,z.jsx)(Qy,{depth:0,selectedId:e,tree:t},t.zoneCompound))})})};c(),c();var gb=a(`CollapseAll`,{CollapseAll:`_CollapseAll_1r4cy_1`,"CollapseAll-icon":`_CollapseAll-icon_1r4cy_5`,"CollapseAll--visible":`_CollapseAll--visible_1r4cy_10`});function _b({className:e}){let t=L(e=>Object.keys(e.state.ui.itemExpanded??{}).length>0),n=L(e=>e.dispatch),r=I(`outline-header-collapseall`);return(0,z.jsx)(`div`,{className:ky(gb({visible:t}),e),children:(0,z.jsx)(Re,{title:r,onClick:()=>{n({type:`setUi`,ui:{itemExpanded:{}}})},children:(0,z.jsx)(Ee,{className:gb(`icon`)})})})}var vb=_b;c(),c();var yb=a(`OutlineHeader`,{OutlineHeader:`_OutlineHeader_ntv8r_1`}),bb=({children:e,title:t})=>{let n=I(`outline-header-title`);return(0,z.jsxs)(`div`,{className:yb(),children:[(0,z.jsx)(gg,{rank:`2`,size:`xs`,children:n??t}),e]})};c();var xb=a(`OutlineWrapper`,{OutlineWrapper:`_OutlineWrapper_b9ln0_1`,"OutlineWrapper-collapseAll":`_OutlineWrapper-collapseAll_b9ln0_9`,"OutlineWrapper-layers":`_OutlineWrapper-layers_b9ln0_15`}),Sb=({children:e})=>(0,z.jsx)(`div`,{className:xb(),children:e}),Cb=()=>{let e=L(e=>e.overrides.outline),t=L(e=>e.config),n=L(e=>e.state.indexes.nodes),r=L(e=>e.state.indexes.zones),i=L(e=>e.selectedItem?.props.id||null),a=I(`label-component`),o=L(En(e=>ly(e.state,`root`))),s=(0,R.useMemo)(()=>o.map(e=>pb({config:t,label:o.length===1?``:e.split(`:`)[1],nodes:n,zoneCompound:e,zones:r,componentFallbackLabel:a})),[t,n,o,r,a]),c=(0,R.useMemo)(()=>e||Sb,[e]);return(0,z.jsxs)(c,{children:[(0,z.jsx)(bb,{children:(0,z.jsx)(vb,{className:xb(`collapseAll`)})}),(0,z.jsx)(`div`,{className:xb(`layers`),children:(0,z.jsx)(hb,{selectedId:i,trees:s})})]})};c();var wb=a(`OutlinePlugin`,{OutlinePlugin:`_OutlinePlugin_1ylsc_1`}),Tb=(e={})=>({name:`outline`,label:e.label??`Outline`,render:()=>(0,z.jsx)(`div`,{className:wb(),children:(0,z.jsx)(Cb,{})}),icon:e.icon??(0,z.jsx)(Ie,{})});c(),c(),c();var Eb={Breadcrumbs:`_Breadcrumbs_8c6w5_1`,"Breadcrumbs-breadcrumbLabel":`_Breadcrumbs-breadcrumbLabel_8c6w5_7`,"Breadcrumbs-breadcrumb":`_Breadcrumbs-breadcrumb_8c6w5_7`};c();var Db=e=>{let t=L(e=>e.selectedItem?.props.id),n=L(e=>e.config),r=L(e=>e.state.indexes.nodes[t]?.path),i=P(),a=I(`label-page`),o=I(`label-component`);return(0,R.useMemo)(()=>{let t=r?.map(e=>{let[t]=e.split(`:`);if(t===`root`)return{label:n?.root?.label||a,selector:null};let r=i.getState().state.indexes.nodes[t],s=r.path[r.path.length-1],c=(i.getState().state.indexes.zones[s]?.contentIds||[]).indexOf(t);return{label:r?n.components[r.data.type]?.label??r.data.type:o,selector:r?{index:c,zone:r.path[r.path.length-1]}:null}})||[];return e?t.slice(t.length-e):t},[r,e,a,o])},Ob=a(`Breadcrumbs`,Eb),kb=({children:e,numParents:t=1})=>{let n=L(e=>e.setUi),r=Db(t);return(0,z.jsxs)(`div`,{className:Ob(),children:[r.map((e,t)=>(0,z.jsxs)(`div`,{className:Ob(`breadcrumb`),children:[(0,z.jsx)(`button`,{type:`button`,className:Ob(`breadcrumbLabel`),onClick:()=>n({itemSelector:e.selector}),children:e.label}),(0,z.jsx)(Be,{size:16})]},t)),e]})};c(),c();var Ab=a(`PuckFields`,{PuckFields:`_PuckFields_wnj25_1`,"PuckFields--isLoading":`_PuckFields--isLoading_wnj25_6`,"PuckFields-loadingOverlay":`_PuckFields-loadingOverlay_wnj25_10`,"PuckFields-loadingOverlayInner":`_PuckFields-loadingOverlayInner_wnj25_25`,"PuckFields-field":`_PuckFields-field_wnj25_32`,"PuckFields--wrapFields":`_PuckFields--wrapFields_wnj25_36`}),jb=({children:e})=>(0,z.jsx)(z.Fragment,{children:e}),Mb=(t,n)=>(r,i)=>s(null,null,function*(){let{dispatch:a,state:s,selectedItem:c,resolveComponentData:l}=n.getState(),{data:u,ui:d}=s,{itemSelector:f}=d,p=u.root.props||u.root,m=c?c.props:p,h=e(o({},m),{[t]:r});if(c&&f){let t=yield l(e(o({},c),{props:h}),`replace`),r=L_(n.getState().state,c.props.id);if(!r)return;a({type:`replace`,destinationIndex:r.index,destinationZone:r.zone||w,data:t.node,ui:i});return}if(u.root.props){a({type:`replaceRoot`,root:(yield l(e(o({},u.root),{props:h}),`replace`)).node,ui:o(o({},d),i),recordHistory:!0});return}a({type:`setData`,data:{root:h}})}),Nb=({fieldName:e})=>{let t=L(t=>t.fields.fields[e]),n=L(t=>((t.selectedItem?t.selectedItem.readOnly:t.state.data.root.readOnly)||{})[e]),r=L(n=>t?n.selectedItem?`${n.selectedItem.props.id}_${t.type}_${e}`:`root_${t.type}_${e}`:null),i=L(En(e=>{let{selectedItem:t,permissions:n}=e;return t?n.getPermissions({item:t}):n.getPermissions({root:!0})})),a=P(),o=(0,R.useCallback)(Mb(e,a),[e]),{visible:s=!0}=t??{},c=(0,R.useContext)(Th.ctx);return(0,R.useEffect)(()=>a.subscribe(t=>t.getCurrentData().props?.[e],t=>{c.setState({[e]:t})}),[a,c]),!t||!r||!s||t.type===`slot`?null:(0,z.jsx)(`div`,{className:Ab(`field`),children:(0,z.jsx)(zg,{field:t,name:e,id:r,readOnly:!i.edit||n,onChange:o})},r)},Pb=(0,R.memo)(({fieldName:e})=>{let t=P(),n=(0,R.useMemo)(()=>{let n=t.getState().getCurrentData().props?.[e];return{[e]:n}},[]);return(0,z.jsx)(Th.Provider,{value:n,children:(0,z.jsx)(Nb,{fieldName:e})})}),Fb=(0,R.memo)(({wrapFields:e=!0})=>{let t=L(e=>e.overrides),n=L(e=>((e.selectedItem?e.componentState[e.selectedItem.props.id]?.loadingCount:e.componentState.root?.loadingCount)??0)>0),r=L(En(e=>e.state.ui.itemSelector)),i=L(e=>e.selectedItem?.props.id),a=P();fe(a,i);let o=L(e=>e.fields.loading),s=L(En(e=>e.fields.id===i?Object.keys(e.fields.fields):[])),c=o||n,l=(0,R.useMemo)(()=>t.fields||jb,[t]);return(0,z.jsxs)(`form`,{className:Ab({wrapFields:e}),onSubmit:e=>{e.preventDefault()},children:[(0,z.jsx)(l,{isLoading:c,itemSelector:r,children:s.map(e=>(0,z.jsx)(Pb,{fieldName:e},e))}),c&&(0,z.jsx)(`div`,{className:Ab(`loadingOverlay`),children:(0,z.jsx)(`div`,{className:Ab(`loadingOverlayInner`),children:(0,z.jsx)(T,{size:16})})})]})});c();var Ib=a(`FieldsPlugin`,{FieldsPlugin:`_FieldsPlugin_18cj3_1`,"FieldsPlugin-header":`_FieldsPlugin-header_18cj3_7`}),Lb=()=>{let e=I(`label-page`);return L(e=>{let t=e.selectedItem;return t?e.config.components[t.type]?.label??t.type:null})??e},Rb=({desktopSideBar:e=`right`,label:t,icon:n}={})=>({name:`fields`,label:t??`Fields`,render:()=>(0,z.jsxs)(`div`,{className:Ib(),children:[(0,z.jsx)(`div`,{className:Ib(`header`),children:(0,z.jsx)(kb,{numParents:2,children:(0,z.jsx)(Lb,{})})}),(0,z.jsx)(Fb,{})]}),icon:n??(0,z.jsx)(Xe,{}),mobileOnly:e===`right`});c(),c(),c(),c(),c();var zb=`@import "https://rsms.me/inter/inter.css";

/* styles/color.css */
@layer puck-tokens {
  :root {
    --puck-color-rose-01: #4a001c;
    --puck-color-rose-02: #670833;
    --puck-color-rose-03: #87114c;
    --puck-color-rose-04: #a81a66;
    --puck-color-rose-05: #bc5089;
    --puck-color-rose-06: #cc7ca5;
    --puck-color-rose-07: #d89aba;
    --puck-color-rose-08: #e3b8cf;
    --puck-color-rose-09: #efd6e3;
    --puck-color-rose-10: #f6eaf1;
    --puck-color-rose-11: #faf4f8;
    --puck-color-rose-12: #fef8fc;
    --puck-color-azure-01: #00175d;
    --puck-color-azure-02: #002c77;
    --puck-color-azure-03: #014292;
    --puck-color-azure-04: #0158ad;
    --puck-color-azure-05: #3479be;
    --puck-color-azure-06: #6499cf;
    --puck-color-azure-07: #88b0da;
    --puck-color-azure-08: #abc7e5;
    --puck-color-azure-09: #cfdff0;
    --puck-color-azure-10: #e7eef7;
    --puck-color-azure-11: #f3f6fb;
    --puck-color-azure-12: #f7faff;
    --puck-color-green-01: #002000;
    --puck-color-green-02: #043604;
    --puck-color-green-03: #084e08;
    --puck-color-green-04: #0c680c;
    --puck-color-green-05: #1d882f;
    --puck-color-green-06: #2faa53;
    --puck-color-green-07: #56c16f;
    --puck-color-green-08: #7dd78b;
    --puck-color-green-09: #b8e8bf;
    --puck-color-green-10: #ddf3e0;
    --puck-color-green-11: #eff8f0;
    --puck-color-green-12: #f3fcf4;
    --puck-color-yellow-01: #211000;
    --puck-color-yellow-02: #362700;
    --puck-color-yellow-03: #4c4000;
    --puck-color-yellow-04: #645a00;
    --puck-color-yellow-05: #877614;
    --puck-color-yellow-06: #ab9429;
    --puck-color-yellow-07: #bfac4e;
    --puck-color-yellow-08: #d4c474;
    --puck-color-yellow-09: #e6deb1;
    --puck-color-yellow-10: #f3efd9;
    --puck-color-yellow-11: #f9f7ed;
    --puck-color-yellow-12: #fcfaf0;
    --puck-color-red-01: #4c0000;
    --puck-color-red-02: #6a0a10;
    --puck-color-red-03: #8a1422;
    --puck-color-red-04: #ac1f35;
    --puck-color-red-05: #bf5366;
    --puck-color-red-06: #ce7e8e;
    --puck-color-red-07: #d99ca8;
    --puck-color-red-08: #e4b9c2;
    --puck-color-red-09: #efd7db;
    --puck-color-red-10: #f6eaec;
    --puck-color-red-11: #faf4f5;
    --puck-color-red-12: #fff9fa;
    --puck-color-grey-01: #181818;
    --puck-color-grey-02: #292929;
    --puck-color-grey-03: #404040;
    --puck-color-grey-04: #5a5a5a;
    --puck-color-grey-05: #767676;
    --puck-color-grey-06: #949494;
    --puck-color-grey-07: #ababab;
    --puck-color-grey-08: #c3c3c3;
    --puck-color-grey-09: #dcdcdc;
    --puck-color-grey-10: #efefef;
    --puck-color-grey-11: #f5f5f5;
    --puck-color-grey-12: #fafafa;
    --puck-color-black: #000000;
    --puck-color-white: #ffffff;
  }
}

/* styles/tokens.css */
@layer puck-tokens {
  :root {
    --puck-color-surface: var(--puck-color-white);
    --puck-color-surface-muted: var(--puck-color-grey-11);
    --puck-color-surface-subtle: var(--puck-color-grey-12);
    --puck-color-surface-inverse: var(--puck-color-grey-01);
    --puck-color-border: var(--puck-color-grey-09);
    --puck-color-border-hover: var(--puck-color-grey-05);
    --puck-color-border-muted: var(--puck-color-grey-10);
    --puck-color-border-inverse: var(--puck-color-grey-05);
    --puck-color-text: var(--puck-color-black);
    --puck-color-text-secondary: var(--puck-color-grey-04);
    --puck-color-text-muted: var(--puck-color-grey-05);
    --puck-color-text-subtle: var(--puck-color-grey-07);
    --puck-color-text-inverse: var(--puck-color-white);
    --puck-opacity-text-inverse: 0.75;
    --puck-color-interactive: var(--puck-color-azure-04);
    --puck-color-interactive-hover: var(--puck-color-azure-03);
    --puck-color-interactive-active: var(--puck-color-azure-02);
    --puck-color-interactive-subtle: var(--puck-color-azure-10);
    --puck-color-interactive-soft: var(--puck-color-azure-11);
    --puck-color-interactive-soft-hover: var(--puck-color-azure-12);
    --puck-color-interactive-neutral-hover: var(--puck-color-grey-10);
    --puck-color-interactive-inverse-hover: var(--puck-color-azure-06);
    --puck-color-interactive-inverse-active: var(--puck-color-azure-07);
    --puck-color-focus-ring: var(--puck-color-azure-05);
    --puck-color-selection-bg: color-mix( in srgb, var(--puck-color-azure-09) 30%, transparent );
    --puck-color-selection-border: var(--puck-color-azure-08);
    --puck-color-line-placeholder: var(--puck-color-azure-06);
    --puck-color-highlight: var(--puck-color-rose-07);
    --puck-color-bg-disabled: var(--puck-color-grey-07);
    --puck-color-text-disabled: var(--puck-color-grey-03);
    --puck-color-overlay-backdrop: color-mix( in srgb, var(--puck-color-black) 75%, transparent );
    --puck-space-1: 4px;
    --puck-space-2: 8px;
    --puck-space-3: 12px;
    --puck-space-4: 16px;
    --puck-space-5: 24px;
    --puck-space-chrome-gutter: var(--puck-space-4);
    --puck-radius-none: 0;
    --puck-radius-xs: 2px;
    --puck-radius-s: 3px;
    --puck-radius-m: 4px;
    --puck-radius-l: 8px;
    --puck-radius-pill: 30px;
    --puck-radius-round: 100%;
    --puck-border-width-hairline: 0.5px;
    --puck-border-width-regular: 1px;
    --puck-border-width-focus: 2px;
    --puck-border-width-strong: 4px;
    --puck-duration-fast: 50ms;
    --puck-duration-medium: 150ms;
    --puck-duration-slow: 250ms;
    --puck-ease-exit: ease-in;
    --puck-ease-emphasized: ease-in-out;
    --puck-ease-entrance: ease-out;
    --puck-font-weight-regular: 400;
    --puck-font-weight-medium: 500;
    --puck-font-weight-semibold: 600;
    --puck-font-weight-bold: 700;
    --puck-font-weight-heavy: 800;
    --puck-letter-spacing-ui: 0.05ch;
    --puck-letter-spacing-heading: 0.08ch;
    --puck-icon-size-xs: 14px;
    --puck-icon-size-s: 16px;
    --puck-icon-size-m: 18px;
    --puck-icon-size-l: 24px;
    --puck-space-m-unitless: 24;
    --puck-user-sidebar-left-width: var(--puck-sidebar-width);
    --puck-user-sidebar-right-width: var(--puck-sidebar-width);
    --puck-slot-min-empty-height: 128px;
    --puck-line-placeholder-width: 2px;
  }
}

/* styles/typography.css */
@layer puck-tokens {
  :root {
    --puck-font-size-scale-base-unitless: 12;
    --puck-font-size-xxxs-unitless: 12;
    --puck-font-size-xxs-unitless: 14;
    --puck-font-size-xs-unitless: 16;
    --puck-font-size-s-unitless: 18;
    --puck-font-size-m-unitless: 21;
    --puck-font-size-l-unitless: 24;
    --puck-font-size-xl-unitless: 28;
    --puck-font-size-xxl-unitless: 36;
    --puck-font-size-xxxl-unitless: 48;
    --puck-font-size-xxxxl-unitless: 56;
    --puck-font-size-xxxs: calc( 1rem * var(--puck-font-size-xxxs-unitless) / 16 );
    --puck-font-size-xxs: calc(1rem * var(--puck-font-size-xxs-unitless) / 16);
    --puck-font-size-xs: calc(1rem * var(--puck-font-size-xs-unitless) / 16);
    --puck-font-size-s: calc(1rem * var(--puck-font-size-s-unitless) / 16);
    --puck-font-size-m: calc(1rem * var(--puck-font-size-m-unitless) / 16);
    --puck-font-size-l: calc(1rem * var(--puck-font-size-l-unitless) / 16);
    --puck-font-size-xl: calc(1rem * var(--puck-font-size-xl-unitless) / 16);
    --puck-font-size-xxl: calc(1rem * var(--puck-font-size-xxl-unitless) / 16);
    --puck-font-size-xxxl: calc( 1rem * var(--puck-font-size-xxxl-unitless) / 16 );
    --puck-font-size-xxxxl: calc( 1rem * var(--puck-font-size-xxxxl-unitless) / 16 );
    --puck-font-size-base: var(--puck-font-size-xs);
    --puck-line-height-reset: 1;
    --puck-line-height-xs: calc( var(--puck-space-m-unitless) / var(--puck-font-size-m-unitless) );
    --puck-line-height-s: calc( var(--puck-space-m-unitless) / var(--puck-font-size-s-unitless) );
    --puck-line-height-m: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xs-unitless) );
    --puck-line-height-l: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xxs-unitless) );
    --puck-line-height-xl: calc( var(--puck-space-m-unitless) / var(--puck-font-size-scale-base-unitless) );
    --puck-line-height-base: var(--puck-line-height-m);
    --puck-fallback-font-stack:
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Helvetica Neue,
      sans-serif,
      Apple Color Emoji,
      Segoe UI Emoji,
      Segoe UI Symbol;
    --puck-font-family: Inter, var(--puck-fallback-font-stack);
    --puck-font-family-monospaced:
      ui-monospace,
      "Cascadia Code",
      "Source Code Pro",
      Menlo,
      Consolas,
      "DejaVu Sans Mono",
      monospace;
  }
  @supports (font-variation-settings: normal) {
    :root {
      --puck-font-family: InterVariable, var(--puck-fallback-font-stack);
    }
  }
}

/* bundle/core.css */
:root {
  --_puck-styles-loaded: "true";
}
#frame-root {
  height: 1px;
  min-height: 100vh;
}
[data-puck-entry] {
  position: relative;
  z-index: 0;
}

/* bundle/index.css */

/* css-module:/home/runner/work/puck/puck/packages/core/components/ActionBar/styles.module.css/#css-module-data */
._ActionBar_5vdfr_1 {
  align-items: center;
  cursor: default;
  display: flex;
  width: auto;
  padding-top: var(--puck-actionbar-space-y, var(--puck-space-1));
  padding-bottom: var(--puck-actionbar-space-y, var(--puck-space-1));
  padding-inline-start: var(--puck-actionbar-space-x, 0);
  padding-inline-end: var(--puck-actionbar-space-x, 0);
  border-radius: var(--puck-actionbar-radius, var(--puck-radius-l));
  background: var(--puck-actionbar-color-bg, var(--puck-color-surface-inverse));
  color: var(--puck-color-text-inverse);
  font-family: var(--puck-font-family);
  min-height: 26px;
}
._ActionBar-label_5vdfr_17 {
  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));
  font-size: var(--puck-actionbar-font-size, var(--puck-font-size-xxxs));
  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));
  font-weight: var(--puck-font-weight-medium);
  padding-inline-start: var(--puck-space-2);
  padding-inline-end: var(--puck-space-2);
  margin-inline-start: var(--puck-space-1);
  margin-inline-end: var(--puck-space-1);
  text-overflow: ellipsis;
  white-space: nowrap;
}
._ActionBarAction_5vdfr_30 + ._ActionBar-label_5vdfr_17 {
  padding-inline-start: 0;
}
._ActionBar-label_5vdfr_17 + ._ActionBarAction_5vdfr_30 {
  margin-inline-start: calc(var(--puck-space-1) * -1);
}
._ActionBar-group_5vdfr_38 {
  align-items: center;
  border-inline-start: var(--puck-border-width-hairline) solid var(--puck-actionbar-color-separator, var(--puck-color-border-inverse));
  display: flex;
  height: 100%;
  padding-inline-start: var(--puck-space-1);
  padding-inline-end: var(--puck-space-1);
}
._ActionBar-group_5vdfr_38:first-of-type {
  border-inline-start: 0;
}
._ActionBar-group_5vdfr_38:empty {
  display: none;
}
._ActionBarAction_5vdfr_30 {
  background: transparent;
  border: none;
  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));
  cursor: pointer;
  padding: var(--puck-actionbar-action-space, 6px);
  margin-inline-start: var(--puck-space-1);
  margin-inline-end: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));
  transition: color var(--puck-duration-fast) var(--puck-ease-exit), opacity var(--puck-duration-fast) var(--puck-ease-exit);
}
._ActionBarAction--disabled_5vdfr_74 {
  cursor: auto;
  color: var( --puck-actionbar-color-action-disabled, var(--puck-color-text-inverse) );
  opacity: var(--puck-actionbar-opacity-action-disabled, 0.54);
}
._ActionBarAction_5vdfr_30 svg {
  max-width: none !important;
}
._ActionBarAction_5vdfr_30:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: calc(var(--puck-border-width-focus) * -1);
}
@media (hover: hover) and (pointer: fine) {
  ._ActionBarAction_5vdfr_30:hover:not(._ActionBarAction--disabled_5vdfr_74) {
    color: var( --puck-actionbar-color-action-hover, var(--puck-color-interactive-inverse-hover) );
    opacity: 1;
    transition: none;
  }
}
._ActionBarAction_5vdfr_30:active:not(._ActionBarAction--disabled_5vdfr_74),
._ActionBarAction--active_5vdfr_104 {
  color: var( --puck-actionbar-color-action-active, var(--puck-color-interactive-inverse-active) );
  opacity: 1;
  transition: none;
}
._ActionBar-group_5vdfr_38 * {
  margin: 0;
}
._ActionBar-separator_5vdfr_117 {
  background: var( --puck-actionbar-color-separator, var(--puck-color-border-inverse) );
  margin-inline: var(--puck-space-1);
  width: var( --puck-border-width-hairline );
  height: 100%;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/AutoField/styles.module.css/#css-module-data */
._InputWrapper_qyenz_1 + ._InputWrapper_qyenz_1 {
  margin-top: var(--puck-space-3);
}
._Input-label_qyenz_5 {
  align-items: center;
  color: var(--puck-field-label-color-text, var(--puck-color-text-secondary));
  display: flex;
  padding-bottom: var(--puck-field-label-space-y, var(--puck-space-3));
  font-size: var(--puck-field-label-font-size, var(--puck-font-size-xxs));
  font-weight: var( --puck-field-label-font-weight, var(--puck-font-weight-semibold) );
}
._Input-labelIcon_qyenz_17 {
  color: var(--puck-field-label-color-icon, var(--puck-color-text-subtle));
  display: flex;
  margin-inline-end: var(--puck-space-1);
  padding-inline-start: var(--puck-space-1);
}
._Input-disabledIcon_qyenz_24 {
  color: var(--puck-color-text-muted);
  margin-inline-start: auto;
}
._Input-input_qyenz_29 {
  background: var(--puck-field-color-bg, var(--puck-color-surface));
  border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  border-style: solid;
  border-color: var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  box-sizing: border-box;
  color: var(--puck-field-color-text, var(--puck-color-text));
  font-family: inherit;
  font-size: var(--puck-font-size-xs);
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
  transition: border-color var(--puck-duration-fast) var(--puck-ease-exit);
  width: 100%;
  max-width: 100%;
}
@media (min-width: 458px) {
  ._Input-input_qyenz_29 {
    font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  }
}
._Input-select_qyenz_61 {
  position: relative;
  width: 100%;
}
select._Input-input_qyenz_29 {
  appearance: none;
  cursor: pointer;
}
._Input-selectIcon_qyenz_71 {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  fill: var(--puck-field-color-border, var(--puck-color-border));
  stroke-width: 0;
}
._Input-selectIcon_qyenz_71:dir(rtl) {
  right: auto;
  left: 12px;
}
@media (hover: hover) and (pointer: fine) {
  ._Input_qyenz_1:has(> input):hover ._Input-input_qyenz_29:not([readonly]),
  ._Input_qyenz_1:has(> textarea):hover ._Input-input_qyenz_29:not([readonly]) {
    border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
    transition: none;
  }
  ._Input_qyenz_1:has(> ._Input-select_qyenz_61):hover ._Input-input_qyenz_29:not([disabled]) {
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
    transition: none;
  }
  ._Input_qyenz_1:not(._Input--readOnly_qyenz_111):has(> ._Input-select_qyenz_61):hover ._Input-selectIcon_qyenz_71 {
    fill: var(--puck-field-color-border-hover, var(--puck-color-border-hover));
  }
}
._Input-input_qyenz_29:focus {
  border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
  outline: var(--puck-border-width-focus) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring));
  transition: none;
}
._Input--readOnly_qyenz_111 > ._Input-input_qyenz_29,
._Input--readOnly_qyenz_111 > ._Input-select_qyenz_61 > select._Input-input_qyenz_29 {
  background-color: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
  border-color: var( --puck-field-color-border-disabled, var(--puck-color-border) );
  color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
  cursor: default;
  opacity: 1;
  outline: 0;
  transition: none;
}
._Input--readOnly_qyenz_111 > ._Input-select_qyenz_61 > select._Input-input_qyenz_29 ~ ._Input-selectIcon_qyenz_71 {
  fill: var(--puck-field-color-text-disabled, var(--puck-color-text-secondary));
}
._Input-radioGroupItems_qyenz_150 {
  --_puck-field-radio-radius: var(--puck-field-radius, var(--puck-radius-m));
  --_puck-field-radio-border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  --_puck-field-radio-border-color: var( --puck-field-color-border, var(--puck-color-border) );
  display: flex;
  border: var(--_puck-field-radio-border-width) solid var(--_puck-field-radio-border-color);
  border-radius: var(--_puck-field-radio-radius);
  flex-wrap: wrap;
}
._Input-radio_qyenz_150 {
  border-inline-end: var(--_puck-field-radio-border-width) solid var(--_puck-field-radio-border-color);
  flex-grow: 1;
}
._Input-radio_qyenz_150:first-of-type {
  border-bottom-left-radius: var(--_puck-field-radio-radius);
  border-top-left-radius: var(--_puck-field-radio-radius);
}
._Input-radio_qyenz_150:first-of-type ._Input-radioInner_qyenz_179 {
  border-bottom-left-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
  border-top-left-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
}
._Input-radio_qyenz_150:last-of-type {
  border-bottom-right-radius: var(--_puck-field-radio-radius);
  border-inline-end: 0;
  border-top-right-radius: var(--_puck-field-radio-radius);
}
._Input-radio_qyenz_150:last-of-type ._Input-radioInner_qyenz_179 {
  border-bottom-right-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
  border-top-right-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
}
._Input-radioInner_qyenz_179 {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  color: var(--puck-field-color-text, var(--puck-color-text));
  cursor: pointer;
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc(var(--puck-space-4) - var(--_puck-field-radio-border-width)) );
  text-align: center;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._Input-radio_qyenz_150:has(:focus-visible) {
  outline: var(--puck-border-width-focus) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring));
  outline-offset: var(--puck-border-width-focus);
  position: relative;
}
@media (hover: hover) and (pointer: fine) {
  ._Input-radioInner_qyenz_179:hover {
    background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    transition: none;
  }
}
._Input--readOnly_qyenz_111 ._Input-radioGroupItems_qyenz_150 {
  border-color: var( --puck-field-color-border-disabled, var(--puck-color-border) );
}
._Input--readOnly_qyenz_111 ._Input-radioInner_qyenz_179 {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  color: var(--puck-field-color-text, var(--puck-color-text-secondary));
  cursor: default;
}
._Input--readOnly_qyenz_111 ._Input-radio_qyenz_150 {
  border-inline-end: var(--_puck-field-radio-border-width) solid var(--puck-field-color-border-disabled, var(--puck-color-border));
}
._Input--readOnly_qyenz_111 ._Input-radio_qyenz_150:last-of-type {
  border-inline-end: 0;
}
._Input-radio_qyenz_150 ._Input-radioInput_qyenz_261:checked ~ ._Input-radioInner_qyenz_179 {
  background-color: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  color: var(--puck-field-color-text-active, var(--puck-color-interactive));
  font-weight: var(--puck-font-weight-medium);
}
._Input--readOnly_qyenz_111 ._Input-radioInput_qyenz_261:checked ~ ._Input-radioInner_qyenz_179 {
  background-color: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
  color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
}
._Input-radio_qyenz_150 ._Input-radioInput_qyenz_261 {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
textarea._Input-input_qyenz_29 {
  margin-bottom: calc(var(--puck-space-1) * -1);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/AutoField/fields/ArrayField/styles.module.css/#css-module-data */
._ArrayField_62huh_5 {
  --_puck-field-array-border-color: var( --puck-field-color-border, var(--puck-color-border) );
  --_puck-field-array-border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  --_puck-field-array-radius: var(--puck-field-radius, var(--puck-radius-m));
  --_puck-field-array-radius-inner: calc( var(--_puck-field-array-radius) - var(--_puck-field-array-border-width) );
  display: flex;
  flex-direction: column;
  background: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  border: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
  border-radius: var(--_puck-field-array-radius);
}
._ArrayField--isDraggingFrom_62huh_30 {
  background-color: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  overflow: hidden;
}
._ArrayField-addButton_62huh_38 {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  border: none;
  border-radius: var(--_puck-field-array-radius-inner);
  display: flex;
  color: var(--puck-field-array-add-color-icon, var(--puck-color-interactive));
  justify-content: center;
  cursor: pointer;
  width: 100%;
  margin: 0;
  padding: calc(var(--puck-field-space-y, var(--puck-space-3)) + 2px) var( --puck-field-space-x, calc(var(--puck-space-4) - var(--_puck-field-array-border-width)) );
  text-align: left;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ArrayField--hasItems_62huh_58 > ._ArrayField-addButton_62huh_38 {
  border-top: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
._ArrayField-addButton_62huh_38:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
  position: relative;
}
@media (hover: hover) and (pointer: fine) {
  ._ArrayField_62huh_5:not(._ArrayField--isDraggingFrom_62huh_30) > ._ArrayField-addButton_62huh_38:hover {
    background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    transition: none;
  }
}
._ArrayField_62huh_5:not(._ArrayField--isDraggingFrom_62huh_30) > ._ArrayField-addButton_62huh_38:active {
  background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
  transition: none;
}
._ArrayField-inner_62huh_93 {
  margin-top: -1px;
}
._ArrayFieldItem_62huh_101 {
  display: block;
  position: relative;
  border-top-left-radius: var(--_puck-field-array-radius-inner);
  border-top-right-radius: var(--_puck-field-array-radius-inner);
  border-top: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
}
._ArrayFieldItem--isDragging_62huh_110 {
  border-top: transparent;
}
._ArrayFieldItem--isExpanded_62huh_114::before {
  display: none;
}
._ArrayFieldItem--isExpanded_62huh_114 {
  border-bottom: 0;
  outline-offset: 0px !important;
  outline: var(--_puck-field-array-border-width) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring)) !important;
  z-index: 2;
}
._ArrayFieldItem--isDragging_62huh_110 {
  outline: var(--puck-border-width-focus) var(--puck-field-color-border-dragging, var(--puck-color-selection-border)) solid !important;
}
._ArrayFieldItem--isDragging_62huh_110 ._ArrayFieldItem-summary_62huh_132:active {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
}
._ArrayFieldItem_62huh_101 + ._ArrayFieldItem_62huh_101 {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
._ArrayFieldItem-summary_62huh_132 {
  --_puck-drag-icon-color: var(--puck-field-color-text, var(--puck-color-text));
  --_puck-drag-icon-color-hover: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
  background: var(--puck-field-color-bg, var(--puck-color-surface));
  color: var(--puck-field-color-text, var(--puck-color-text));
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 2px;
  justify-content: space-between;
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  list-style: none;
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc(var(--puck-space-4) - var(--_puck-field-array-border-width)) );
  position: relative;
  overflow: hidden;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ArrayFieldItem--noFields_62huh_167 > ._ArrayFieldItem-summary_62huh_132 {
  cursor: grab;
}
._ArrayFieldItem_62huh_101:first-of-type > ._ArrayFieldItem-summary_62huh_132 {
  border-top-left-radius: var(--_puck-field-array-radius-inner);
  border-top-right-radius: var(--_puck-field-array-radius-inner);
}
._ArrayField--addDisabled_62huh_176 > ._ArrayField-inner_62huh_93 > ._ArrayFieldItem_62huh_101:last-of-type:not(._ArrayFieldItem--isExpanded_62huh_114) > ._ArrayFieldItem-summary_62huh_132 {
  border-bottom-left-radius: var(--_puck-field-array-radius-inner);
  border-bottom-right-radius: var(--_puck-field-array-radius-inner);
}
._ArrayField--addDisabled_62huh_176 > ._ArrayField-inner_62huh_93 > ._ArrayFieldItem--isExpanded_62huh_114:last-of-type {
  border-bottom-left-radius: var(--_puck-field-array-radius-inner);
  border-bottom-right-radius: var(--_puck-field-array-radius-inner);
}
._ArrayFieldItem-summary_62huh_132:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._ArrayFieldItem-summary_62huh_132:hover {
    background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    transition: none;
  }
}
._ArrayFieldItem-summary_62huh_132:active {
  background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
  transition: none;
}
._ArrayFieldItem--isExpanded_62huh_114 > ._ArrayFieldItem-summary_62huh_132 {
  background: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  color: var(--puck-field-color-text-active, var(--puck-color-interactive));
  font-weight: var(--puck-font-weight-semibold);
  transition: none;
}
._ArrayFieldItem-body_62huh_228 {
  background: var(--puck-field-color-surface, var(--puck-color-surface));
  display: none;
}
._ArrayFieldItem--isExpanded_62huh_114 > ._ArrayFieldItem-body_62huh_228 {
  display: block;
}
._ArrayFieldItem-fieldset_62huh_237 {
  border: none;
  border-top: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
  margin: 0;
  min-width: 0;
  padding: var(--puck-field-space-surface-y, var(--puck-space-4)) var( --puck-field-space-surface-x, calc(var(--puck-space-4) - var(--_puck-field-array-border-width)) );
}
._ArrayFieldItem-rhs_62huh_250 {
  display: flex;
  gap: var(--puck-space-1);
  align-items: center;
}
._ArrayFieldItem-actions_62huh_256 {
  color: var(--puck-color-text-secondary);
  display: flex;
  gap: var(--puck-space-1);
  opacity: 0;
}
._ArrayFieldItem-summary_62huh_132:focus-within > ._ArrayFieldItem-rhs_62huh_250 > ._ArrayFieldItem-actions_62huh_256,
._ArrayFieldItem-summary_62huh_132:hover > ._ArrayFieldItem-rhs_62huh_250 > ._ArrayFieldItem-actions_62huh_256 {
  opacity: 1;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/IconButton/IconButton.module.css/#css-module-data */
._IconButton_1pxxt_1 {
  align-items: center;
  background: var(--puck-iconbutton-color-bg, transparent);
  border: none;
  border-radius: var(--puck-iconbutton-radius, var(--puck-radius-m));
  color: var(--puck-iconbutton-color-icon, currentColor);
  display: flex;
  font-family: var(--puck-font-family);
  justify-content: center;
  padding: var(--puck-iconbutton-space, var(--puck-space-1));
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._IconButton--active_1pxxt_15 {
  color: var( --puck-iconbutton-color-icon-active, var(--puck-color-interactive) );
}
._IconButton_1pxxt_1:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: calc(var(--puck-border-width-focus) * -1);
}
@media (hover: hover) and (pointer: fine) {
  ._IconButton_1pxxt_1:hover:not(._IconButton--disabled_1pxxt_28) {
    background: var( --_puck-iconbutton-color-bg-hover, var( --puck-iconbutton-color-bg-hover, var(--puck-color-interactive-neutral-hover) ) );
    color: var( --puck-iconbutton-color-icon-hover, var(--puck-color-interactive) );
    cursor: pointer;
    transition: none;
  }
}
._IconButton_1pxxt_1:active {
  background: var( --puck-iconbutton-color-bg-active, var(--puck-color-interactive-soft) );
  transition: none;
}
._IconButton--disabled_1pxxt_28 {
  color: var( --puck-iconbutton-color-icon-disabled, var(--puck-color-text-subtle) );
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Loader/styles.module.css/#css-module-data */
@keyframes _loader-animation_1w5zn_1 {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.8);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}
._Loader_1w5zn_13 {
  background: transparent;
  border-radius: var(--puck-radius-round);
  border: var(--puck-border-width-focus) solid currentColor;
  border-bottom-color: transparent;
  display: inline-block;
  animation: _loader-animation_1w5zn_1 1s 0s infinite linear;
  animation-fill-mode: both;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DragIcon/styles.module.css/#css-module-data */
._DragIcon_5e515_1 {
  color: var(--_puck-drag-icon-color, var(--puck-color-text-muted));
  cursor: grab;
  padding: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
}
._DragIcon--disabled_5e515_10 {
  cursor: no-drop;
}
@media (hover: hover) and (pointer: fine) {
  ._DragIcon_5e515_1:not(._DragIcon--disabled_5e515_10):hover {
    color: var(--_puck-drag-icon-color-hover, var(--puck-color-focus-ring));
  }
}

/* components/Sortable/styles.css */
[data-dnd-placeholder]:not([data-puck-line-drag] *) * {
  opacity: 0 !important;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) {
  background: var( --_puck-field-array-color-placeholder, var(--puck-color-azure-06) ) !important;
  border: none !important;
  color: transparent !important;
  opacity: 0.3 !important;
  outline: none !important;
  transition: none !important;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ExternalInput/styles.module.css/#css-module-data */
._ExternalInput-actions_143vl_1 {
  display: flex;
}
._ExternalInput-button_143vl_5 {
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  justify-content: center;
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  border: var(--puck-field-border-width, var(--puck-border-width-regular)) solid var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  color: var(--puck-field-color-text-active, var(--puck-color-interactive));
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  font-weight: var(--puck-font-weight-medium);
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit);
  position: relative;
  overflow: hidden;
  flex-grow: 1;
  cursor: pointer;
}
._ExternalInput--dataSelected_143vl_34 ._ExternalInput-button_143vl_5 {
  color: var(--puck-field-color-text, var(--puck-color-text));
  display: block;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
._ExternalInput--readOnly_143vl_41 ._ExternalInput-button_143vl_5 {
  background-color: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
}
._ExternalInput-detachButton_143vl_48 {
  border: var(--puck-field-border-width, var(--puck-border-width-regular)) solid var(--puck-field-color-border, var(--puck-color-border));
  border-top-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  border-bottom-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  background-color: var( --puck-field-external-detach-color-bg, var(--puck-color-surface-subtle) );
  color: var( --puck-field-external-detach-color-text, var(--puck-color-text-muted) );
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  justify-content: center;
  padding: var(--puck-space-2) var(--puck-space-3);
  position: relative;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
  margin-inline-start: -1px;
  cursor: pointer;
}
._ExternalInput-button_143vl_5:focus-visible,
._ExternalInput-detachButton_143vl_48:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
  z-index: 1;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-button_143vl_5:hover,
  ._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-detachButton_143vl_48:hover {
    background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    transition: none;
  }
  ._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-detachButton_143vl_48:hover {
    color: var( --puck-field-color-text-hover, var(--puck-field-external-detach-color-text, var(--puck-color-text-muted)) );
  }
  ._ExternalInput--dataSelected_143vl_34:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-button_143vl_5:hover {
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
  }
}
._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-button_143vl_5:active,
._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-detachButton_143vl_48:active {
  background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
  transition: none;
}
._ExternalInputModal_143vl_118 {
  color: var(--puck-color-text);
  display: grid;
  grid-template-rows: min-content minmax(128px, 100%) min-content;
  grid-template-columns: 100%;
  position: relative;
  min-height: 50dvh;
  max-height: 90dvh;
}
._ExternalInputModal-grid_143vl_128 {
  display: flex;
  flex-direction: column;
}
@media (min-width: 458px) {
  ._ExternalInputModal-grid_143vl_128 {
    display: grid;
    grid-template-columns: 100%;
  }
  ._ExternalInputModal--filtersToggled_143vl_139 ._ExternalInputModal-grid_143vl_128 {
    grid-template-columns: 25% 75%;
  }
}
._ExternalInputModal-filters_143vl_144 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
}
._ExternalInputModal--filtersToggled_143vl_139 ._ExternalInputModal-filters_143vl_144 {
  display: none;
}
@media (min-width: 458px) {
  ._ExternalInputModal-filters_143vl_144 {
    border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
    display: none;
  }
  ._ExternalInputModal--filtersToggled_143vl_139 ._ExternalInputModal-filters_143vl_144 {
    display: block;
  }
}
._ExternalInputModal-masthead_143vl_164 {
  background-color: var(--puck-color-surface-subtle);
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  display: flex;
  flex-wrap: wrap;
  gap: var(--puck-space-5);
  padding: var(--puck-space-5);
}
._ExternalInputModal-tableWrapper_143vl_173 {
  position: relative;
  overflow-x: auto;
  overflow-y: auto;
  flex-grow: 1;
}
._ExternalInputModal-table_143vl_173 {
  border-collapse: unset;
  border-spacing: 0px;
  color: var(--puck-color-text);
  position: relative;
  z-index: 0;
  min-width: 100%;
}
._ExternalInputModal-thead_143vl_189 {
  background-color: var(--puck-color-surface);
  position: sticky;
  top: 0;
  z-index: 1;
}
._ExternalInputModal-th_143vl_189 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-color-text-secondary);
  font-weight: var(--puck-font-weight-medium);
  font-size: var(--puck-font-size-xxs);
  padding: var(--puck-space-4) var(--puck-space-5);
}
._ExternalInputModal-td_143vl_204 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border-muted);
  padding: var(--puck-space-4) var(--puck-space-5);
}
._ExternalInputModal-tr_143vl_210 ._ExternalInputModal-td_143vl_204:first-of-type {
  font-weight: var(--puck-font-weight-medium);
  width: 1%;
  white-space: nowrap;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInputModal-tbody_143vl_217 ._ExternalInputModal-tr_143vl_210:hover {
    background: var(--puck-color-interactive-soft-hover);
    color: var(--puck-color-interactive);
    cursor: pointer;
    position: relative;
    margin-inline-start: -5px;
  }
  ._ExternalInputModal-tbody_143vl_217 ._ExternalInputModal-tr_143vl_210:hover ._ExternalInputModal-td_143vl_204:first-of-type {
    border-inline-start: var(--puck-border-width-strong) solid var(--puck-color-interactive);
    padding-inline-start: 20px;
  }
}
._ExternalInputModal-tbody_143vl_217 ._ExternalInputModal-tr_143vl_210:last-of-type ._ExternalInputModal-td_143vl_204 {
  border-bottom: none;
}
._ExternalInputModal-tableWrapper_143vl_173 {
  display: none;
}
._ExternalInputModal--hasData_143vl_244 ._ExternalInputModal-tableWrapper_143vl_173 {
  display: block;
}
._ExternalInputModal-loadingBanner_143vl_248 {
  display: none;
  background-color: color-mix(in srgb, var(--puck-color-surface) 90%, transparent);
  padding: 64px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
._ExternalInputModal--isLoading_143vl_265 ._ExternalInputModal-loadingBanner_143vl_248 {
  display: flex;
}
._ExternalInputModal-searchForm_143vl_269 {
  display: flex;
  flex-wrap: wrap;
  gap: var(--puck-space-3);
  flex-grow: 1;
}
@media (min-width: 458px) {
  ._ExternalInputModal-searchForm_143vl_269 {
    flex-wrap: nowrap;
  }
}
._ExternalInputModal-search_143vl_269 {
  display: flex;
  background: var(--puck-color-surface);
  border-width: var(--puck-border-width-regular);
  border-style: solid;
  border-color: var(--puck-color-border);
  border-radius: var(--puck-radius-m);
  flex-grow: 1;
  transition: border-color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ExternalInputModal-search_143vl_269:focus-within {
  border-color: var(--puck-color-border-hover);
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInputModal-search_143vl_269:hover {
    border-color: var(--puck-color-border-hover);
    transition: none;
  }
}
._ExternalInputModal-searchIcon_143vl_306 {
  align-items: center;
  background: var(--puck-color-surface-subtle);
  border-bottom-left-radius: var(--puck-radius-m);
  border-top-left-radius: var(--puck-radius-m);
  border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-color-text-subtle);
  display: flex;
  justify-content: center;
  padding: var(--puck-space-3) calc(var(--puck-space-4) - var(--puck-border-width-regular));
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ExternalInputModal-search_143vl_269:focus-within ._ExternalInputModal-searchIcon_143vl_306 {
  color: var(--puck-color-text-secondary);
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInputModal-search_143vl_269:hover ._ExternalInputModal-searchIcon_143vl_306 {
    color: var(--puck-color-text-secondary);
    transition: none;
  }
}
._ExternalInputModal-searchIconText_143vl_333 {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
._ExternalInputModal-searchInput_143vl_343 {
  border: none;
  border-radius: var(--puck-radius-m);
  background: var(--puck-color-surface);
  font-family: inherit;
  font-size: var(--puck-font-size-xxs);
  padding: var(--puck-space-3) calc(var(--puck-space-4) - var(--puck-border-width-regular));
  width: 100%;
}
._ExternalInputModal-searchInput_143vl_343:focus {
  outline: 0;
}
._ExternalInputModal-searchActions_143vl_358 {
  display: flex;
  gap: var(--puck-space-2);
  height: 44px;
  width: 100%;
}
@media (min-width: 458px) {
  ._ExternalInputModal-searchActions_143vl_358 {
    width: auto;
  }
}
._ExternalInputModal-searchActionIcon_143vl_371 {
  align-self: center;
}
._ExternalInputModal-footerContainer_143vl_375 {
  background-color: var(--puck-color-surface-subtle);
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-color-text-secondary);
  padding: var(--puck-space-4);
}
._ExternalInputModal-footer_143vl_375 {
  font-weight: var(--puck-font-weight-medium);
  font-size: var(--puck-font-size-xxs);
  text-align: right;
}
._ExternalInputModal-field_143vl_388 {
  color: var(--puck-color-text-secondary);
  margin: var(--puck-space-4);
  margin-bottom: var(--puck-space-3);
  display: block;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Modal/styles.module.css/#css-module-data */
._Modal_g5xob_1 {
  background: var(--puck-color-overlay-backdrop);
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  padding: 32px;
}
._Modal--isOpen_g5xob_15 {
  display: flex;
}
._Modal-inner_g5xob_19 {
  width: 100%;
  max-width: 1024px;
  border-radius: var(--puck-radius-l);
  overflow: hidden;
  background: var(--puck-color-surface);
  display: flex;
  flex-direction: column;
  max-height: 90dvh;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Heading/styles.module.css/#css-module-data */
._Heading_97eh4_1 {
  display: block;
  color: var(--_puck-heading-color, var(--puck-color-text));
  font-weight: var(--puck-font-weight-bold);
  margin: 0;
}
._Heading_97eh4_1 b {
  font-weight: var(--puck-font-weight-bold);
}
._Heading--xxxxl_97eh4_12 {
  font-size: var(--puck-font-size-xxxxl);
  letter-spacing: var(--puck-letter-spacing-heading);
  font-weight: var(--puck-font-weight-heavy);
}
._Heading--xxxl_97eh4_18 {
  font-size: var(--puck-font-size-xxxl);
}
._Heading--xxl_97eh4_22 {
  font-size: var(--puck-font-size-xxl);
}
._Heading--xl_97eh4_26 {
  font-size: var(--puck-font-size-xl);
}
._Heading--l_97eh4_30 {
  font-size: var(--puck-font-size-l);
}
._Heading--m_97eh4_34 {
  font-size: var(--puck-font-size-m);
}
._Heading--s_97eh4_38 {
  font-size: var(--puck-font-size-s);
}
._Heading--xs_97eh4_42 {
  font-size: var(--puck-font-size-xs);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Button/Button.module.css/#css-module-data */
._Button_oe4qj_1 {
  --_puck-button-default-space-x: 20px;
  --_puck-button-default-font-size: var(--puck-font-size-xxs);
  --_puck-button-default-font-weight: var(--puck-font-weight-regular);
  --_puck-button-default-color-bg-disabled: var(--puck-color-bg-disabled);
  --_puck-button-default-color-text-disabled: var(--puck-color-text-disabled);
  appearance: none;
  background: none;
  border: var(--puck-border-width-regular) solid transparent;
  border-radius: var(--puck-button-radius, var(--puck-radius-m));
  color: var(--puck-color-text-inverse);
  display: inline-flex;
  align-items: center;
  gap: var(--puck-space-2);
  letter-spacing: var(--puck-letter-spacing-ui);
  font-family: var(--puck-font-family);
  box-sizing: border-box;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
  cursor: pointer;
  white-space: nowrap;
  margin: 0;
}
._Button_oe4qj_1:hover,
._Button_oe4qj_1:active {
  transition: none;
}
._Button--medium_oe4qj_34 {
  min-height: 34px;
  padding-bottom: var( --puck-button-medium-space-y, calc(var(--puck-space-2) - var(--puck-border-width-regular)) );
  padding-inline-start: var( --puck-button-medium-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-inline-end: var( --puck-button-medium-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-top: var( --puck-button-medium-space-y, calc(var(--puck-space-2) - var(--puck-border-width-regular)) );
  font-weight: var( --puck-button-medium-font-weight, var(--_puck-button-default-font-weight) );
  font-size: var( --puck-button-medium-font-size, var(--_puck-button-default-font-size) );
}
._Button--large_oe4qj_62 {
  padding-bottom: var( --puck-button-large-space-y, calc(var(--puck-space-3) - var(--puck-border-width-regular)) );
  padding-inline-start: var( --puck-button-large-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-inline-end: var( --puck-button-large-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-top: var( --puck-button-large-space-y, calc(var(--puck-space-3) - var(--puck-border-width-regular)) );
  font-weight: var( --puck-button-large-font-weight, var(--_puck-button-default-font-weight) );
  font-size: var( --puck-button-large-font-size, var(--_puck-button-default-font-size) );
}
._Button-icon_oe4qj_89 {
  margin-top: 2px;
}
._Button--primary_oe4qj_93 {
  background: var( --puck-button-primary-color-bg, var(--puck-color-interactive) );
  border-color: var(--puck-button-primary-color-border, transparent);
  color: var(--puck-button-primary-color-text, var(--puck-color-text-inverse));
}
._Button_oe4qj_1:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Button--primary_oe4qj_93:hover {
    background-color: var( --puck-button-primary-color-bg-hover, var(--puck-color-interactive-hover) );
  }
}
._Button--primary_oe4qj_93:active {
  background-color: var( --puck-button-primary-color-bg-active, var(--puck-color-interactive-active) );
}
._Button--primary_oe4qj_93._Button--disabled_oe4qj_123,
._Button--primary_oe4qj_93._Button--disabled_oe4qj_123:hover {
  background-color: var( --puck-button-primary-color-bg-disabled, var(--_puck-button-default-color-bg-disabled) );
  color: var( --puck-button-primary-color-text-disabled, var(--_puck-button-default-color-text-disabled) );
}
._Button--secondary_oe4qj_135 {
  background: var(--puck-button-secondary-color-bg, transparent);
  border-color: var(--puck-button-secondary-color-border, currentColor);
  color: var(--puck-button-secondary-color-text, currentColor);
}
@media (hover: hover) and (pointer: fine) {
  ._Button--secondary_oe4qj_135:hover {
    background-color: var( --puck-button-secondary-color-bg-hover, var(--puck-color-interactive-soft) );
    color: var(--puck-button-secondary-color-text, var(--puck-color-text));
  }
}
._Button--secondary_oe4qj_135:active {
  background-color: var( --puck-button-secondary-color-bg-active, var(--puck-color-interactive-soft) );
  color: var(--puck-button-secondary-color-text, var(--puck-color-text));
}
._Button--secondary_oe4qj_135._Button--disabled_oe4qj_123,
._Button--secondary_oe4qj_135._Button--disabled_oe4qj_123:hover {
  background-color: var( --puck-button-secondary-color-bg-disabled, var(--_puck-button-default-color-bg-disabled) );
  color: var( --puck-button-secondary-color-text-disabled, var(--_puck-button-default-color-text-disabled) );
}
._Button--flush_oe4qj_171 {
  border-radius: var(--puck-radius-none);
}
._Button--disabled_oe4qj_123:hover {
  cursor: not-allowed;
}
._Button--fullWidth_oe4qj_179 {
  justify-content: center;
  width: 100%;
}
._Button-spinner_oe4qj_184 {
  padding-inline-start: var(--puck-space-2);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/styles.module.css/#css-module-data */
._RichTextMenu_1ve2j_1 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
._RichTextMenu--form_1ve2j_7 {
  border-top-left-radius: var(--puck-field-radius, var(--puck-radius-m));
  border-top-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  padding: var(--puck-field-richtext-menu-space-y, 6px) var(--puck-field-richtext-menu-space-x, 6px);
  background-color: var( --puck-field-richtext-menu-color-bg, var(--puck-color-surface-subtle) );
  position: relative;
  scrollbar-width: none;
  overflow-x: auto;
}
._RichTextMenu-group_1ve2j_21 {
  display: flex;
  align-items: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-inline: 6px;
  gap: 2px;
  position: relative;
}
._RichTextMenu-group_1ve2j_21:first-of-type {
  padding-left: 0;
}
._RichTextMenu-group_1ve2j_21:last-of-type {
  padding-right: 0;
}
._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 {
  color: var(--puck-color-text-inverse);
  gap: 0px;
  flex-wrap: nowrap;
}
._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {
  border-left: var(--puck-border-width-regular) solid var( --puck-field-richtext-menu-color-separator, var(--puck-color-border-muted) );
}
._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {
  border-left: var(--puck-border-width-hairline) solid var(--puck-color-border-inverse);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/components/Control/styles.module.css/#css-module-data */
._Control_id4pm_1 .lucide {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._Control--inline_id4pm_6 .lucide {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Select/styles.module.css/#css-module-data */
._Select_1n4iv_1 {
  position: relative;
  z-index: 1;
}
._Select-buttonInner_1n4iv_6 {
  align-items: center;
  display: flex;
}
._Select-buttonIcon_1n4iv_11 {
  align-items: center;
  display: flex;
  justify-content: center;
}
._Select--standalone_1n4iv_17 ._Select-buttonIcon_1n4iv_11 .lucide {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._Select--actionBar_1n4iv_22 ._Select-buttonIcon_1n4iv_11 .lucide {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}
._Select-items_1n4iv_27 {
  background: var(--puck-color-surface);
  border: var(--puck-border-width-regular) solid var(--puck-color-border);
  border-radius: var(--puck-radius-l);
  margin: 10px 8px;
  margin-left: 0;
  padding: var(--puck-space-1);
  z-index: 2;
  list-style: none;
}
._SelectItem_1n4iv_38 {
  background: transparent;
  border-radius: var(--puck-radius-m);
  border: none;
  color: var(--puck-color-text-secondary);
  cursor: pointer;
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  font-size: var(--puck-font-size-xxs);
  margin: 0;
  padding: var(--puck-space-2) var(--puck-space-3);
  width: 100%;
}
._SelectItem--isSelected_1n4iv_53 {
  background: var(--puck-color-interactive-soft);
  color: var(--puck-color-interactive);
  font-weight: var(--puck-font-weight-medium);
}
._SelectItem--isSelected_1n4iv_53 ._SelectItem-icon_1n4iv_59 {
  color: var(--puck-color-interactive);
}
._SelectItem_1n4iv_38:hover {
  background: var(--puck-color-interactive-soft);
  color: var(--puck-color-interactive);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextEditor/styles.module.css/#css-module-data */
._RichTextEditor_5wzos_1 .ProseMirror {
  white-space: pre-wrap;
  word-wrap: break-word;
  cursor: text;
  outline: none;
  position: relative;
}
._RichTextEditor_5wzos_1 .rich-text * {
  white-space: pre-wrap;
  user-select: auto;
  -webkit-user-select: auto;
}
._RichTextEditor_5wzos_1 .rich-text blockquote {
  margin: 1em 0;
  padding: 0 1em;
  border-left: var(--puck-border-width-strong) solid var(--puck-color-border);
}
._RichTextEditor_5wzos_1 .rich-text code {
  background-color: var(--puck-color-surface-muted);
  padding: var(--puck-space-1) var(--puck-space-2);
  border-radius: var(--puck-radius-m);
}
._RichTextEditor_5wzos_1 .rich-text p:empty::before {
  content: "\\a0";
}
._RichTextEditor_5wzos_1 .rich-text pre code {
  display: block;
  padding: var(--puck-space-2) var(--puck-space-3);
}
._RichTextEditor_5wzos_1 .rich-text > *:first-child,
._RichTextEditor_5wzos_1 .ProseMirror > *:first-child,
._RichTextEditor_5wzos_1 .rich-text * p:first-of-type {
  margin-top: 0;
}
._RichTextEditor_5wzos_1 .rich-text > *:last-child,
._RichTextEditor_5wzos_1 .ProseMirror > *:last-child,
._RichTextEditor_5wzos_1 .rich-text * p:last-of-type {
  margin-bottom: 0;
}
._RichTextEditor--editor_5wzos_50 {
  color: var(--puck-field-color-text, var(--puck-color-text));
  background: var(--puck-field-color-bg, var(--puck-color-surface));
  border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  border-style: solid;
  border-color: var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: inherit;
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  resize: vertical;
  text-align: initial;
  transition: border-color var(--puck-duration-fast) var(--puck-ease-exit);
  width: 100%;
  max-width: 100%;
  min-height: 128px;
}
._RichTextEditor--editor_5wzos_50 .rich-text {
  flex-grow: 1;
}
._RichTextEditor--editor_5wzos_50 .rich-text:not(:has(.ProseMirror)),
._RichTextEditor--editor_5wzos_50 .rich-text .ProseMirror {
  height: 100%;
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
}
._RichTextEditor--editor_5wzos_50 .rich-text ul,
._RichTextEditor--editor_5wzos_50 .rich-text ol {
  padding-left: var(--puck-space-5);
}
._RichTextEditor--editor_5wzos_50 .rich-text li {
  line-height: 1.5;
}
._RichTextEditor--editor_5wzos_50 .rich-text p {
  margin-block: var(--puck-space-3);
}
._RichTextEditor--editor_5wzos_50 .rich-text ul {
  list-style: disc;
}
._RichTextEditor--editor_5wzos_50 .rich-text ol {
  list-style: decimal;
}
._RichTextEditor--editor_5wzos_50:focus-within {
  border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
  outline: var(--puck-border-width-focus) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring));
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  ._RichTextEditor--editor_5wzos_50:hover:not(._RichTextEditor--disabled_5wzos_123) {
    border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
    transition: none;
  }
}
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 {
  background: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
  border-color: var( --puck-field-color-border-disabled, var(--puck-color-border) );
}
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 .rich-text:not(:has(.ProseMirror)),
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 .rich-text .ProseMirror {
  color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
}
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 .ProseMirror[contenteditable=false] {
  cursor: default;
}
._RichTextEditor_5wzos_1:not(:focus-within):not(._RichTextEditor--isActive_5wzos_159) .ProseMirror ::selection {
  background-color: transparent;
}
._RichTextEditor-menu_5wzos_165 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border-muted);
  position: sticky;
  top: 0;
  z-index: 1;
}
._RichTextEditor--disabled_5wzos_123 ._RichTextEditor-menu_5wzos_165 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/AutoField/fields/ObjectField/styles.module.css/#css-module-data */
._ObjectField_c5reb_1 {
  display: flex;
  flex-direction: column;
  background-color: var(--puck-field-color-surface, var(--puck-color-surface));
  border: var(--puck-field-border-width, var(--puck-border-width-regular)) solid var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
}
._ObjectField-fieldset_c5reb_10 {
  border: none;
  margin: 0;
  min-width: 0;
  padding: var(--puck-field-space-surface-y, var(--puck-space-4)) var( --puck-field-space-surface-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Drawer/styles.module.css/#css-module-data */
._Drawer_1n90m_1 {
  display: flex;
  flex-direction: column;
  font-family: var(--puck-font-family);
  gap: var(--puck-space-3);
}
._Drawer-draggable_1n90m_8 {
  position: relative;
}
._Drawer-draggableBg_1n90m_12 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: -1;
}
._DrawerItem-draggable_1n90m_22 {
  background: var(--puck-drawer-item-color-bg, var(--puck-color-surface));
  color: var(--puck-drawer-item-color-text, var(--puck-color-text));
  cursor: grab;
  padding: var(--puck-drawer-item-space, var(--puck-space-3));
  display: flex;
  border: var(--puck-drawer-item-border-width, var(--puck-border-width-regular)) var(--puck-drawer-item-color-border, var(--puck-color-border)) solid;
  border-radius: var(--puck-drawer-item-radius, var(--puck-radius-m));
  font-size: var(--puck-drawer-item-font-size, var(--puck-font-size-xxs));
  justify-content: space-between;
  align-items: center;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._DrawerItem--disabled_1n90m_38 ._DrawerItem-draggable_1n90m_22 {
  background: var(--puck-color-surface-muted);
  color: var(--puck-color-text-muted);
  cursor: not-allowed;
}
._DrawerItem_1n90m_22:focus-visible {
  outline: 0;
}
._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:focus-visible ._DrawerItem-draggable_1n90m_22 {
  border-radius: var(--puck-radius-m);
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:not(._DrawerItem--disabled_1n90m_38) ._DrawerItem-draggable_1n90m_22:hover {
    background-color: var( --puck-drawer-item-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-drawer-item-color-text-hover, var(--puck-color-interactive) );
    transition: none;
  }
}
._DrawerItem-name_1n90m_72 {
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DraggableComponent/styles.module.css/#css-module-data */
._DraggableComponent_1627v_1 {
  position: absolute;
  pointer-events: none;
}
._DraggableComponent-overlayWrapper_1627v_6 {
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  pointer-events: none;
  box-sizing: border-box;
  z-index: 1;
}
._DraggableComponent-overlay_1627v_6 {
  cursor: pointer;
  height: 100%;
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;
  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1);
  width: 100%;
}
._DraggableComponent_1627v_1:focus-visible > ._DraggableComponent-overlayWrapper_1627v_6 {
  outline: var(--puck-border-width-regular) solid var(--puck-color-focus-ring);
}
._DraggableComponent-loadingOverlay_1627v_38 {
  background: var(--puck-color-surface);
  color: var(--puck-color-text);
  border-radius: var(--puck-radius-m);
  display: flex;
  padding: var(--puck-space-2);
  top: var(--puck-space-2);
  right: var(--puck-space-2);
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
  z-index: 1;
}
._DraggableComponent--hover_1627v_54 > ._DraggableComponent-overlayWrapper_1627v_6 > ._DraggableComponent-overlay_1627v_6 {
  background: var( --puck-slot-component-color-overlay, var(--puck-color-selection-bg) );
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;
}
._DraggableComponent--isSelected_1627v_72 > ._DraggableComponent-overlayWrapper_1627v_6 > ._DraggableComponent-overlay_1627v_6 {
  outline-color: var( --puck-slot-component-color-border-selected, var(--puck-color-selection-border) );
}
._DraggableComponent_1627v_1:has(._DraggableComponent--hover_1627v_54 > ._DraggableComponent-overlayWrapper_1627v_6) > ._DraggableComponent-overlayWrapper_1627v_6 {
  display: none;
}
._DraggableComponent-actionsOverlay_1627v_89 {
  position: sticky;
  opacity: 0;
  pointer-events: none;
  z-index: 2;
}
._DraggableComponent--isSelected_1627v_72 ._DraggableComponent-actionsOverlay_1627v_89 {
  opacity: 1;
  pointer-events: auto;
}
._DraggableComponent-actions_1627v_89 {
  position: absolute;
  width: auto;
  cursor: grab;
  display: flex;
  box-sizing: border-box;
  transform-origin: right top;
  min-height: 36px;
}
._DraggableComponent-actionsAction_1627v_111 {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}

/* components/DraggableComponent/styles.css */
[data-puck-component] * {
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-component] {
  cursor: grab;
  pointer-events: auto !important;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-dropzone] {
  pointer-events: auto !important;
}
[data-puck-disabled] {
  cursor: pointer;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) {
  background: var( --puck-slot-component-color-placeholder, var(--puck-color-azure-06) ) !important;
  border: none !important;
  color: transparent !important;
  opacity: 0.3 !important;
  outline: none !important;
  transition: none !important;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) *,
[data-dnd-placeholder]:not([data-puck-line-drag] *)::after,
[data-dnd-placeholder]:not([data-puck-line-drag] *)::before {
  opacity: 0 !important;
}
[data-puck-line-drag] [data-dnd-placeholder] {
  opacity: 0.4 !important;
  outline: none !important;
  transition: none !important;
}
[data-puck-line-drag] [data-dnd-dragging][data-puck-component] {
  opacity: 0.9 !important;
}
[data-dnd-dragging][data-puck-component] {
  pointer-events: none !important;
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var(--puck-slot-component-color-border-dragging, var(--puck-color-azure-09)) solid !important;
  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1) !important;
}
[data-dnd-dragging][data-puck-component] > :first-child {
  margin-top: 0 !important;
}
[data-dnd-dragging][data-puck-component] > :last-child {
  margin-bottom: 0 !important;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DropZone/styles.module.css/#css-module-data */
._DropZone_wc2ks_1 {
  position: relative;
  height: 100%;
  min-height: var(--puck-slot-min-empty-height);
  outline-offset: calc(var(--puck-slot-border-width, var(--puck-border-width-focus)) * -1);
  width: 100%;
}
._DropZone--hasChildren_wc2ks_11 {
  min-height: 0;
}
._DropZone_wc2ks_1:empty {
  min-height: var(--puck-slot-min-empty-height);
}
[data-puck-entry]:not([data-puck-dragging]) ._DropZone_wc2ks_1 {
  transition: min-height var(--puck-duration-medium) var(--puck-ease-exit);
}
._DropZone--isAreaSelected_wc2ks_24,
._DropZone--hoveringOverArea_wc2ks_25:not(._DropZone--isRootZone_wc2ks_25) {
  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone_wc2ks_1:empty {
  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone-item_wc2ks_39 {
  position: relative;
}
._DropZone-linePlaceholder_wc2ks_43 {
  background: var( --puck-slot-component-color-placeholder, var(--puck-color-line-placeholder) );
  border-radius: calc(var(--puck-line-placeholder-width, 2px) / 2);
  pointer-events: none;
  position: absolute;
  z-index: 1;
}
._DropZone-hitbox_wc2ks_55 {
  position: absolute;
  bottom: calc(var(--puck-space-3) * -1);
  height: var(--puck-space-5);
  width: 100%;
  z-index: 1;
}
[data-puck-dragging] ._DropZone--isEnabled_wc2ks_63 {
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone_wc2ks_1 > *:not([data-puck-component]):not([data-puck-line-placeholder]) {
  opacity: 0;
}
body:has(._DropZone--isAnimating_wc2ks_74:empty) [data-puck-overlay] {
  opacity: 0 !important;
}

/* lib/overlay-portal/styles.css */
[data-puck-overlay-portal],
[data-puck-overlay-portal] * {
  pointer-events: auto !important;
}
[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal],
[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal] * {
  pointer-events: none !important;
}
[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:hover {
  outline: 2px var(--puck-color-azure-09, #cfdff0) dashed;
  outline-offset: 2px;
}
[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:focus-within {
  outline: 2px var(--puck-color-azure-07, #88b0da) dashed;
  outline-offset: 2px;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/InlineTextField/styles.module.css/#css-module-data */
._InlineTextField_104qp_1 {
  cursor: text;
  display: inline-block;
  white-space: pre-wrap;
  text-decoration: inherit;
}
[data-dnd-dragging] ._InlineTextField_104qp_1 {
  cursor: none;
  caret-color: transparent;
}
[data-dnd-dragging] ._InlineTextField_104qp_1::selection {
  display: none;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Fields/styles.module.css/#css-module-data */
._PuckFields_wnj25_1 {
  position: relative;
  font-family: var(--puck-font-family);
}
._PuckFields--isLoading_wnj25_6 {
  min-height: 48px;
}
._PuckFields-loadingOverlay_wnj25_10 {
  background: var(--puck-color-surface);
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  top: 0px;
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
}
._PuckFields-loadingOverlayInner_wnj25_25 {
  display: flex;
  padding: var(--puck-space-4);
  position: sticky;
  top: 0;
}
._PuckFields-field_wnj25_32 * {
  box-sizing: border-box;
}
._PuckFields--wrapFields_wnj25_36 ._PuckFields-field_wnj25_32 {
  color: var(--puck-color-text-secondary);
  padding: var(--puck-space-4);
  padding-bottom: var(--puck-space-3);
  display: block;
}
._PuckFields--wrapFields_wnj25_36 ._PuckFields-field_wnj25_32 + ._PuckFields-field_wnj25_32 {
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  margin-top: var(--puck-space-2);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ComponentList/styles.module.css/#css-module-data */
._ComponentList_htktj_1 {
  max-width: 100%;
}
._ComponentList--isExpanded_htktj_5 + ._ComponentList_htktj_1 {
  margin-top: var(--puck-space-3);
}
._ComponentList-content_htktj_9 {
  display: none;
}
._ComponentList--isExpanded_htktj_5 > ._ComponentList-content_htktj_9 {
  display: block;
}
._ComponentList-title_htktj_17 {
  background-color: transparent;
  border: 0;
  color: var(--puck-drawer-category-color-text, var(--puck-color-text-muted));
  cursor: pointer;
  display: flex;
  font: inherit;
  font-size: var(--puck-drawer-category-font-size, var(--puck-font-size-xxxs));
  list-style: none;
  margin-bottom: 6px;
  padding: var(--puck-drawer-category-space, var(--puck-space-2));
  text-transform: uppercase;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
  gap: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
  width: 100%;
}
._ComponentList-title_htktj_17:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._ComponentList-title_htktj_17:hover {
    background-color: var( --puck-drawer-category-color-bg-hover, var(--puck-color-interactive-soft) );
    color: var( --puck-drawer-category-color-text-hover, var(--puck-color-interactive) );
    transition: none;
  }
}
._ComponentList-title_htktj_17:active {
  background-color: var( --puck-drawer-category-color-bg-active, var(--puck-color-interactive-subtle) );
  transition: none;
}
._ComponentList-titleIcon_htktj_63 {
  margin-inline-start: auto;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Preview/styles.module.css/#css-module-data */
._PuckPreview_zbic3_1 {
  position: relative;
  height: 100%;
}
._PuckPreview-frame_zbic3_6 {
  border: none;
  height: 100%;
  width: 100%;
}
._PuckPreview-frame_zbic3_6[data-puck-outline-dragging] {
  pointer-events: none;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/drop-line/styles.module.css/#css-module-data */
._DropLine_eyz3q_2 {
  background: var(--_puck-outline-color-drop-indicator);
  border-radius: calc(var(--_puck-outline-drop-indicator-size) / 2);
  height: var(--_puck-outline-drop-indicator-size);
  inset-inline: 0;
  pointer-events: none;
  position: absolute;
  z-index: 1;
}
._DropLine--top_eyz3q_12 {
  top: 0;
}
._DropLine--bottom_eyz3q_16 {
  bottom: 0;
}
._DropLine--top_eyz3q_12._DropLine--outset_eyz3q_20 {
  top: calc(-1 * var(--_puck-outline-drop-indicator-size));
}
._DropLine--bottom_eyz3q_16._DropLine--outset_eyz3q_20 {
  bottom: calc(-1 * var(--_puck-outline-drop-indicator-size));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/empty-zone-placeholder/styles.module.css/#css-module-data */
._LayerTree-helper_1m7e4_2 {
  color: var(--puck-outline-color-text-helper, var(--puck-color-text-subtle));
  padding-top: var(--puck-space-1);
  padding-bottom: var(--puck-space-1);
  padding-inline-start: var(--_puck-outline-label-indent);
  border: var(--_puck-outline-border-width) solid transparent;
}
._LayerTree-helperRoot_1m7e4_11 {
  padding-inline-start: var(--puck-space-3);
}
._LayerTree-helper_1m7e4_2[data-puck-drop-target] {
  position: relative;
  overflow: visible;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer/styles.module.css/#css-module-data */
._Layer_onfgu_1 {
  position: relative;
  border: var(--_puck-outline-border-width) solid transparent;
  border-radius: var(--_puck-outline-radius);
}
._Layer-inner_onfgu_8 {
  align-items: center;
  border: var(--_puck-outline-border-width) solid transparent;
  border-radius: var(--_puck-outline-radius);
  cursor: pointer;
  display: flex;
  position: relative;
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._Layer--isSortable_onfgu_18 > ._Layer-inner_onfgu_8 {
  cursor: grab;
}
._Layer-content_onfgu_22 {
  display: flex;
  gap: var(--puck-space-4);
  flex: 1 1 auto;
  min-width: 0;
}
._Layer-clickable_onfgu_29 {
  align-items: center;
  background: none;
  border: 0;
  border-radius: var(--_puck-outline-radius);
  color: inherit;
  cursor: inherit;
  display: flex;
  flex: 1 1 auto;
  font: inherit;
  min-width: 0;
  padding: 0;
}
[data-puck-dnd-disabled] ._Layer-inner_onfgu_8,
[data-puck-dnd-disabled] ._Layer-clickable_onfgu_29 {
  cursor: pointer;
}
._Layer-clickable_onfgu_29:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
  position: relative;
  z-index: 1;
}
._Layer-caret_onfgu_57 {
  visibility: hidden;
  display: flex;
  flex-shrink: 0;
}
._Layer-caret_onfgu_57 svg {
  height: var(--_puck-outline-caret-size);
  width: var(--_puck-outline-caret-size);
}
._Layer--containsZone_onfgu_68 > ._Layer-inner_onfgu_8 > ._Layer-content_onfgu_22 {
  font-weight: var(--puck-font-weight-bold);
}
._Layer--containsZone_onfgu_68 > ._Layer-inner_onfgu_8 > ._Layer-caret_onfgu_57 {
  visibility: visible;
}
._Layer-title_onfgu_76 {
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  overflow-x: hidden;
  margin: var(--puck-space-1);
  cursor: pointer;
}
._Layer-name_onfgu_85 {
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
._Layer-icon_onfgu_91 {
  color: var(--puck-outline-color-icon, var(--puck-color-text-subtle));
  margin-top: var(--puck-space-1);
}
._Layer-icon_onfgu_91 svg {
  height: var(--_puck-outline-icon-size);
  width: var(--_puck-outline-icon-size);
}
._Layer-zones_onfgu_101 {
  display: none;
  margin-inline-start: var(--puck-outline-space-indent, var(--puck-space-4));
}
._Layer--isExpanded_onfgu_106 > ._Layer-zones_onfgu_101 {
  display: block;
}
._Layer--isExpanded_onfgu_106 > ._Layer-inner_onfgu_8 > ._Layer-caret_onfgu_57 svg {
  transform: rotate(90deg);
}
@media (hover: hover) and (pointer: fine) {
  ._Layer_onfgu_1:not(._Layer--isSelected_onfgu_115) > ._Layer-inner_onfgu_8:hover {
    --_puck-outline-actions-color-bg: var(--_puck-outline-color-bg-hover);
    border-color: var(--_puck-outline-color-border-hover);
    background: var(--_puck-outline-color-bg-hover);
    transition: none;
  }
}
._Layer--isSelected_onfgu_115 > ._Layer-inner_onfgu_8 {
  border-color: var( --puck-outline-color-border-selected, var(--puck-color-selection-border) );
}
._Layer--isSelected_onfgu_115 > ._Layer-inner_onfgu_8 {
  --_puck-outline-actions-color-bg: var(--_puck-outline-color-bg-selected);
  background: var(--_puck-outline-color-bg-selected);
}
._Layer--isExpandCandidate_onfgu_138 > ._Layer-inner_onfgu_8 {
  border-color: var(--_puck-outline-color-border-hover);
  background: var(--_puck-outline-color-bg-hover);
}
._Layer--isDragSource_onfgu_143 > ._Layer-inner_onfgu_8 {
  color: var(--puck-color-text-muted);
  background: transparent;
}
._Layer--isDragSource_onfgu_143 > ._Layer-zones_onfgu_101 {
  opacity: 0.5;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer-actions/styles.module.css/#css-module-data */
._LayerActions_d90t9_2 {
  position: sticky;
  inset-inline-end: calc(var(--puck-space-1) * -1);
  padding-inline: var(--puck-space-1);
  display: flex;
  visibility: hidden;
  flex-shrink: 0;
  color: var(--_puck-outline-color-text);
  background: var(--_puck-outline-actions-color-bg);
  border-top-right-radius: var(--_puck-outline-radius);
  border-bottom-right-radius: var(--_puck-outline-radius);
}
._LayerActions--visible_d90t9_18 {
  visibility: visible;
}
._LayerActions_d90t9_2 svg {
  height: var(--_puck-outline-caret-size);
  width: var(--_puck-outline-caret-size);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer-tree-items/styles.module.css/#css-module-data */
._LayerTree_o5tyt_1 {
  color: var(--_puck-outline-color-text);
  font-family: var(--puck-outline-font-family, var(--puck-font-family));
  font-size: var(--puck-outline-font-size, var(--puck-font-size-xxxs));
  margin: 0;
  position: relative;
  list-style: none;
  padding: 0;
}
._LayerTree--nested_o5tyt_12 {
  margin-inline-start: var(--puck-outline-space-indent, var(--puck-space-3));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer-tree-zone/styles.module.css/#css-module-data */
._LayerTree-zoneTitle_fvhlh_2 {
  color: var(--_puck-outline-zone-color-text);
  font-size: var( --puck-outline-zone-font-size, calc(var(--puck-font-size-xxxs) * 0.9) );
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  overflow-x: hidden;
  padding-top: var(--puck-space-1);
  padding-bottom: var(--puck-space-1);
  padding-inline-start: var(--_puck-outline-label-indent);
  border: var(--_puck-outline-border-width) solid transparent;
}
._LayerTree-zoneIcon_fvhlh_19 {
  margin-top: var(--puck-space-1);
}
._LayerTree-zoneIcon_fvhlh_19 svg {
  height: var(--_puck-outline-icon-size);
  width: var(--_puck-outline-icon-size);
}
._LayerTree-zoneTitle_fvhlh_2[data-puck-drop-target] {
  color: var(--_puck-outline-color-text-hover);
  position: relative;
  overflow: visible;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/styles.module.css/#css-module-data */
._LayerTreeRoot_1qowl_1 {
  min-width: max-content;
  --_puck-iconbutton-color-bg-hover: transparent;
  --_puck-outline-color-text: var( --puck-outline-color-text, var(--puck-color-text-primary) );
  --_puck-outline-border-width: var( --puck-outline-border-width, var(--puck-border-width-regular) );
  --_puck-outline-radius: var(--puck-outline-radius, var(--puck-radius-m));
  --_puck-outline-caret-size: var( --puck-outline-action-size, var(--puck-icon-size-s) );
  --_puck-outline-icon-size: var( --puck-outline-icon-size, var(--puck-icon-size-xs) );
  --_puck-outline-color-bg-selected: var( --puck-outline-color-bg-selected, var(--puck-color-interactive-subtle) );
  --_puck-outline-color-bg-hover: var( --puck-outline-color-bg-hover, var(--puck-color-interactive-soft) );
  --_puck-outline-color-border-hover: var( --puck-outline-color-border-hover, var(--puck-color-interactive-subtle) );
  --_puck-outline-color-text-hover: var( --puck-outline-color-text-hover, var(--puck-color-interactive) );
  --_puck-outline-color-drop-indicator: var( --puck-outline-color-drop-indicator, var(--puck-color-line-placeholder) );
  --_puck-outline-drop-indicator-size: var(--puck-line-placeholder-width);
  --_puck-outline-zone-color-text: var( --puck-outline-zone-color-text, var(--puck-color-text-muted) );
  --_puck-outline-actions-color-bg: transparent;
  --_puck-outline-caret-slot: calc( var(--_puck-outline-caret-size) + var(--puck-iconbutton-space, var(--puck-space-1)) * 2 );
  --_puck-outline-label-indent: calc( var(--_puck-outline-caret-slot) + var(--puck-space-2) + var(--_puck-outline-border-width) );
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Outline/components/collapse-all/styles.module.css/#css-module-data */
._CollapseAll_1r4cy_1 {
  visibility: hidden;
}
._CollapseAll-icon_1r4cy_5 {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._CollapseAll--visible_1r4cy_10 {
  visibility: visible;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Outline/components/outline-header/styles.module.css/#css-module-data */
._OutlineHeader_ntv8r_1 {
  display: flex;
  align-items: center;
  width: 100%;
  gap: var(--puck-space-2);
  padding-block: var(--puck-space-3);
  padding-inline: var(--puck-space-4);
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  box-sizing: border-box;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Outline/styles.module.css/#css-module-data */
._OutlineWrapper_b9ln0_1 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  min-width: 0;
}
._OutlineWrapper-collapseAll_b9ln0_9 {
  display: flex;
  align-items: center;
  margin-inline-start: auto;
}
._OutlineWrapper-layers_b9ln0_15 {
  flex-grow: 1;
  min-height: 0;
  overflow: auto;
  padding: var(--puck-space-1);
  box-sizing: border-box;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Layout/styles.module.css/#css-module-data */
._Puck_tzaxg_19 {
  font-family: var(--puck-font-family);
  overflow-x: hidden;
  visibility: visible !important;
}
@media (min-width: 766px) {
  ._Puck_tzaxg_19 {
    overflow-x: auto;
  }
}
._Puck-portal_tzaxg_31 {
  position: relative;
  z-index: 2;
}
._PuckLayout_tzaxg_36 {
  height: 100dvh;
}
._PuckLayout-inner_tzaxg_40 {
  --puck-frame-width: auto;
  --puck-pluginbar-width: min-content;
  --puck-sidebar-width: 0px;
  --puck-sidebar-left-width: var( --puck-user-sidebar-left-width, var(--puck-sidebar-width) );
  --puck-sidebar-right-width: var( --puck-user-sidebar-right-width, var(--puck-sidebar-width) );
  background-color: var(--puck-color-surface-subtle);
  display: grid;
  grid-template-areas: "header" "editor" "left" "right" "sidenav";
  grid-template-columns: var(--puck-frame-width);
  grid-template-rows: min-content auto 0 0 var(--puck-pluginbar-width);
  height: 100%;
  position: relative;
  transition: grid-template-rows var(--puck-duration-medium) var(--puck-ease-exit);
  z-index: 0;
  overflow: hidden;
}
@media (min-width: 638px) {
  ._PuckLayout-inner_tzaxg_40 {
    --puck-pluginbar-width: 68px;
    grid-template-areas: "header header header header" "sidenav left editor right";
    grid-template-columns: var(--puck-pluginbar-width) 0 var(--puck-frame-width) 0;
    grid-template-rows: min-content auto;
  }
  ._Puck--hidePlugins_tzaxg_73 ._PuckLayout-inner_tzaxg_40 {
    --puck-pluginbar-width: 0;
  }
}
._PuckLayout--mounted_tzaxg_78 ._PuckLayout-inner_tzaxg_40 {
  --puck-sidebar-width: 186px;
}
._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40 {
  grid-template-rows: 0 auto 30% 0 var(--puck-pluginbar-width);
  transition: grid-template-rows var(--puck-duration-medium) var(--puck-ease-entrance);
}
._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40 {
  grid-template-rows: 0 auto 55% 0 var(--puck-pluginbar-width);
  transition: grid-template-rows var(--puck-duration-medium) var(--puck-ease-entrance);
}
@media (min-width: 638px) {
  ._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) var(--puck-sidebar-left-width) var( --puck-frame-width ) 0;
    grid-template-rows: min-content auto;
  }
}
._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40,
._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40 {
  grid-template-rows: 0 auto min-content 0 var(--puck-pluginbar-width);
}
@media (min-width: 638px) {
  ._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40,
  ._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40,
  ._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40,
  ._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) var(--puck-sidebar-left-width) var( --puck-frame-width ) 0;
    grid-template-rows: min-content auto;
  }
}
@media (min-width: 638px) {
  ._PuckLayout--rightSideBarVisible_tzaxg_137 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) 0 var(--puck-frame-width) var(--puck-sidebar-right-width);
  }
}
@media (min-width: 638px) {
  ._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--rightSideBarVisible_tzaxg_137 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) var(--puck-sidebar-left-width) var( --puck-frame-width ) var(--puck-sidebar-right-width);
  }
}
@media (min-width: 458px) {
  ._PuckLayout-mounted_tzaxg_156 ._PuckLayout-inner_tzaxg_40 {
    --puck-frame-width: minmax(266px, auto);
  }
}
@media (min-width: 638px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: minmax(186px, 250px);
  }
}
@media (min-width: 766px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-frame-width: auto;
  }
}
@media (min-width: 990px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 256px;
  }
}
@media (min-width: 1198px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 274px;
  }
}
@media (min-width: 1398px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 290px;
  }
}
@media (min-width: 1598px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 320px;
  }
}
._PuckLayout-nav_tzaxg_197 {
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  background-color: var( --puck-pluginbar-color-bg, var(--puck-color-surface-subtle) );
  grid-area: sidenav;
  overflow: hidden;
  width: 100%;
}
@media (min-width: 638px) {
  ._PuckLayout-nav_tzaxg_197 {
    border-top: 0;
    border-right: var(--puck-border-width-regular) solid var(--puck-color-border);
    box-sizing: border-box;
  }
}
._PuckLayout-header_tzaxg_217 {
  grid-area: header;
}
._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-header_tzaxg_217 {
  overflow: hidden;
}
@media (min-width: 638px) {
  ._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-header_tzaxg_217 {
    overflow: auto;
  }
}
._PuckPluginTab_tzaxg_231 {
  display: none;
  flex-grow: 1;
  max-height: 100%;
}
._PuckPluginTab--visible_tzaxg_237 {
  display: flex;
  flex-direction: column;
  min-height: 0;
}
._PuckPluginTab-body_tzaxg_243 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-height: 100%;
  min-height: 0;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/MenuBar/styles.module.css/#css-module-data */
._MenuBar_1hxnj_1 {
  background-color: var(--_puck-menu-bar-color-bg, var(--puck-color-surface));
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  display: none;
  left: 0;
  margin-top: 1px;
  padding: var(--puck-space-2) var(--puck-space-4);
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 2;
}
._MenuBar--menuOpen_1hxnj_14 {
  display: block;
}
@media (min-width: 638px) {
  ._MenuBar_1hxnj_1 {
    border: none;
    display: block;
    margin-top: 0;
    overflow-y: visible;
    padding: 0;
    position: static;
  }
}
._MenuBar-inner_1hxnj_29 {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: var(--puck-space-2) var(--puck-space-4);
  justify-content: flex-end;
}
@media (min-width: 638px) {
  ._MenuBar-inner_1hxnj_29 {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
}
._MenuBar-history_1hxnj_45 {
  display: flex;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Header/styles.module.css/#css-module-data */
._PuckHeader_c2nei_1 {
  --_puck-menu-bar-color-bg: var( --puck-header-color-bg, var(--puck-color-surface) );
  background: var(--puck-header-color-bg, var(--puck-color-surface));
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-header-color-text, var(--puck-color-text));
  --_puck-heading-color: var(--puck-header-color-text, var(--puck-color-text));
  grid-area: header;
  position: relative;
  max-width: 100vw;
}
@media (min-width: 638px) {
  ._PuckHeader_c2nei_1 {
    padding-left: 67px;
  }
  ._PuckHeader--hidePlugins_c2nei_21 {
    padding-left: 0;
  }
}
._PuckHeader-inner_c2nei_26 {
  align-items: end;
  display: grid;
  gap: var(--puck-space-chrome-gutter);
  grid-template-areas: "left middle right";
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto;
  padding: var(--puck-space-chrome-gutter);
}
@media (min-width: 638px) {
  ._PuckHeader-inner_c2nei_26 {
    border-left: var(--puck-border-width-regular) solid var(--puck-color-border);
  }
  ._PuckHeader--hidePlugins_c2nei_21 ._PuckHeader-inner_c2nei_26 {
    border-left: none;
  }
}
._PuckHeader-toggle_c2nei_46 {
  display: flex;
  margin-inline-start: calc(var(--puck-space-1) * -1);
  padding-top: 2px;
}
._PuckHeader-rightSideBarToggle_c2nei_52,
._PuckHeader-leftSideBarToggle_c2nei_53 {
  display: none;
}
@media (min-width: 638px) {
  ._PuckHeader-rightSideBarToggle_c2nei_52,
  ._PuckHeader-leftSideBarToggle_c2nei_53 {
    display: block;
  }
}
._PuckHeader-title_c2nei_64 {
  align-self: center;
}
._PuckHeader-path_c2nei_68 {
  font-family: var(--puck-font-family-monospaced);
  font-size: var(--puck-font-size-xxs);
  font-weight: normal;
  word-break: break-all;
}
._PuckHeader-tools_c2nei_75 {
  display: flex;
  gap: var(--puck-space-4);
  justify-content: flex-end;
}
._PuckHeader-menuButton_c2nei_81 {
  color: var(--puck-color-text-muted);
  margin-inline-start: calc(var(--puck-space-1) * -1);
}
._PuckHeader--menuOpen_c2nei_86 ._PuckHeader-menuButton_c2nei_81 {
  color: var(--puck-color-text);
}
@media (min-width: 638px) {
  ._PuckHeader-menuButton_c2nei_81 {
    display: none;
  }
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/SidebarSection/styles.module.css/#css-module-data */
._SidebarSection_1uv88_1 {
  display: flex;
  position: relative;
  flex-direction: column;
  color: var(--puck-color-text);
}
._SidebarSection_1uv88_1:last-of-type {
  flex-grow: 1;
}
._SidebarSection-title_1uv88_12 {
  background: var(--_puck-sidebar-section-color-bg, var(--puck-color-surface));
  padding: var(--puck-space-4);
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  overflow-x: auto;
}
._SidebarSection--noBorderTop_1uv88_20 > ._SidebarSection-title_1uv88_12 {
  border-top: 0px;
}
._SidebarSection-content_1uv88_24:last-child {
  padding-bottom: var(--puck-space-1);
}
._SidebarSection_1uv88_1:last-of-type ._SidebarSection-content_1uv88_24 {
  border-bottom: none;
  flex-grow: 1;
}
._SidebarSection-breadcrumbLabel_1uv88_33 {
  background: none;
  border: 0;
  border-radius: var(--puck-radius-xs);
  color: var(--puck-color-interactive);
  cursor: pointer;
  font: inherit;
  flex-shrink: 0;
  padding: 0;
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._SidebarSection-breadcrumbLabel_1uv88_33:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._SidebarSection-breadcrumbLabel_1uv88_33:hover {
    color: var(--puck-color-interactive-hover);
    transition: none;
  }
}
._SidebarSection-breadcrumbLabel_1uv88_33:active {
  color: var(--puck-color-interactive-active);
  transition: none;
}
._SidebarSection-breadcrumbs_1uv88_62 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}
._SidebarSection-breadcrumb_1uv88_33 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}
._SidebarSection-heading_1uv88_74 {
  padding-inline-end: var(--puck-space-4);
}
._SidebarSection-loadingOverlay_1uv88_78 {
  background: var(--puck-color-surface);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Breadcrumbs/styles.module.css/#css-module-data */
._Breadcrumbs_8c6w5_1 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}
._Breadcrumbs-breadcrumbLabel_8c6w5_7 {
  background: none;
  border: 0;
  border-radius: var(--puck-radius-xs);
  color: var(--puck-color-interactive);
  cursor: pointer;
  font: inherit;
  flex-shrink: 0;
  padding: 0;
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._Breadcrumbs-breadcrumbLabel_8c6w5_7:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Breadcrumbs-breadcrumbLabel_8c6w5_7:hover {
    color: var(--puck-color-interactive-hover);
    transition: none;
  }
}
._Breadcrumbs-breadcrumbLabel_8c6w5_7:active {
  color: var(--puck-color-interactive-active);
  transition: none;
}
._Breadcrumbs-breadcrumb_8c6w5_7 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ViewportControls/styles.module.css/#css-module-data */
._ViewportControls_v26yb_1 {
  position: relative;
}
._ViewportControls--fullScreen_v26yb_5 {
  border-radius: 32px;
  display: flex;
  position: absolute;
  bottom: var(--puck-space-3);
  right: var(--puck-space-3);
  overflow: hidden;
}
._ViewportControls-toggleButton_v26yb_14 {
  display: none;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-toggleButton_v26yb_14 {
  align-items: center;
  background-color: var(--puck-color-surface-inverse);
  border: var(--puck-border-width-regular) solid var(--puck-color-border-inverse);
  border-radius: var(--puck-radius-pill);
  cursor: pointer;
  color: var(--puck-color-text-inverse);
  display: flex;
  justify-content: center;
  width: 42px;
  height: 42px;
  z-index: 1;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-toggleButton_v26yb_14:hover {
  color: var(--puck-color-interactive-inverse-hover);
  border: var(--puck-border-width-regular) solid var(--puck-color-interactive-inverse-hover);
}
._ViewportControls-actions_v26yb_39 {
  display: flex;
}
._ViewportControls-actionsInner_v26yb_43 {
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  z-index: 0;
  overflow: hidden;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-actionsInner_v26yb_43 {
  background: var(--puck-color-surface-muted);
  border: var(--puck-border-width-regular) solid var(--puck-color-border);
  border-radius: var(--puck-radius-pill);
  margin-left: none;
  margin-right: none;
  padding-right: 42px;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-actionsInner_v26yb_43 {
  transform: translateX(100%);
  transition: transform var(--puck-duration-medium) var(--puck-ease-emphasized);
}
._ViewportControls--fullScreen_v26yb_5._ViewportControls--isExpanded_v26yb_67 ._ViewportControls-actionsInner_v26yb_43 {
  transform: translateX(42px);
}
._ViewportControls-divider_v26yb_72 {
  border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
  margin-bottom: var(--puck-space-2);
  margin-top: var(--puck-space-2);
}
._ViewportControls-zoomSelect_v26yb_79 {
  appearance: none;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%23c3c3c3'><polygon points='0,0 100,0 50,50'/></svg>") no-repeat;
  background-size: 10px;
  color: currentColor;
  background-position: calc(100% - 12px) calc(50% + 3px);
  background-repeat: no-repeat;
  border: 0;
  font-size: var(--puck-font-size-xxxs);
  padding: 0;
  padding-left: var(--puck-space-2);
  width: 96px;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-zoom_v26yb_79 {
  display: none;
}
@media (min-width: 638px) {
  ._ViewportControls-zoom_v26yb_79,
  ._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-zoom_v26yb_79 {
    display: flex;
    justify-content: center;
  }
}
._ViewportControls-zoomSelect_v26yb_79:dir(rtl) {
  background-position: 12px calc(50% + 3px);
}
._ViewportButton-inner_v26yb_110 {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 32px;
  width: 32px;
}
._ViewportButton--isActive_v26yb_118 ._ViewportButton-inner_v26yb_110 {
  color: var(--puck-color-interactive);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Canvas/styles.module.css/#css-module-data */
._PuckCanvas_zw9iy_1 {
  color: var(--puck-canvas-color-text, var(--puck-color-text));
  background: var(--puck-canvas-color-bg, var(--puck-color-surface-muted));
  display: flex;
  grid-area: editor;
  flex-direction: column;
  padding: var(--puck-space-chrome-gutter);
  position: relative;
  overflow: auto;
}
@media (min-width: 1198px) {
  ._PuckCanvas_zw9iy_1 {
    padding: calc(var(--puck-space-chrome-gutter) * 1.5);
    padding-top: calc(var(--puck-space-chrome-gutter) * 0.5);
  }
  ._PuckCanvas_zw9iy_1:not(._PuckCanvas_zw9iy_1:has(._PuckCanvas-controls_zw9iy_18)) {
    padding-top: calc(var(--puck-space-chrome-gutter) * 1.5);
  }
}
._PuckCanvas--fullScreen_zw9iy_23 {
  padding: 0;
  overflow: hidden;
}
@media (min-width: 1198px) {
  ._PuckCanvas--fullScreen_zw9iy_23 {
    padding: 0;
  }
}
._PuckCanvas-inner_zw9iy_34 {
  display: flex;
  height: 100%;
  justify-content: center;
  min-width: 288px;
  position: relative;
  width: 100%;
}
._PuckCanvas-root_zw9iy_43 {
  background: var(--puck-canvas-preview-color-bg, var(--puck-color-surface));
  outline: var(--puck-border-width-regular) solid var(--puck-color-border);
  box-sizing: content-box;
  min-width: 321px;
  position: absolute;
  pointer-events: none;
  transform-origin: top;
  top: 0;
  bottom: 0;
  opacity: 0;
}
@media (min-width: 1198px) {
  ._PuckCanvas-root_zw9iy_43 {
    min-width: unset;
  }
}
@media (prefers-reduced-motion: reduce) {
  ._PuckCanvas-root_zw9iy_43 {
    transition: none !important;
  }
}
._PuckCanvas--ready_zw9iy_68 ._PuckCanvas-root_zw9iy_43 {
  pointer-events: unset;
  opacity: 1;
}
._PuckCanvas-loader_zw9iy_73 {
  align-items: center;
  color: var(--puck-color-text-subtle);
  display: flex;
  height: 100%;
  justify-content: center;
  transition: opacity var(--puck-duration-slow) var(--puck-ease-entrance);
  opacity: 0;
  pointer-events: none;
}
._PuckCanvas--showLoader_zw9iy_84 ._PuckCanvas-loader_zw9iy_73 {
  opacity: 1;
}
._PuckCanvas--showLoader_zw9iy_84._PuckCanvas--ready_zw9iy_68 ._PuckCanvas-loader_zw9iy_73 {
  opacity: 0;
  height: 0;
  transition: none;
}
._PuckCanvas-controls_zw9iy_18 {
  padding-bottom: calc(var(--puck-space-chrome-gutter) * 0.5);
}
._PuckCanvas--fullScreen_zw9iy_23 ._PuckCanvas-controls_zw9iy_18 {
  padding-bottom: 0;
  z-index: 1;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/ResizeHandle/styles.module.css/#css-module-data */
@media (min-width: 766px) {
  ._ResizeHandle_144bf_2 {
    position: absolute;
    width: 5px;
    height: 100%;
    cursor: col-resize;
    z-index: 10;
    background: transparent;
    top: 0;
  }
  ._ResizeHandle_144bf_2:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  ._ResizeHandle--left_144bf_16 {
    right: -3px;
  }
  ._ResizeHandle--right_144bf_20 {
    left: -3px;
  }
}

/* components/Puck/components/ResizeHandle/styles.css */
[data-resize-overlay] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  cursor: col-resize;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Sidebar/styles.module.css/#css-module-data */
._Sidebar_16oed_1 {
  border-block-start: var(--puck-border-width-regular) solid var(--puck-color-border);
  position: relative;
  display: none;
  flex-direction: column;
  overflow-y: auto;
}
._Sidebar--isVisible_16oed_10 {
  display: flex;
}
._Sidebar--left_16oed_14 {
  --_puck-sidebar-section-color-bg: var( --puck-sidebar-left-color-bg, var(--puck-color-surface) );
  background: var( --puck-sidebar-left-color-bg, var(--puck-color-surface-subtle) );
  grid-area: left;
}
@media (min-width: 766px) {
  ._Sidebar--left_16oed_14 {
    border-block-start: 0;
    border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
  }
}
._Sidebar--right_16oed_34 {
  --_puck-sidebar-section-color-bg: var( --puck-sidebar-right-color-bg, var(--puck-color-surface) );
  background: var(--puck-sidebar-right-color-bg, var(--puck-color-surface));
  grid-area: right;
}
@media (min-width: 766px) {
  ._Sidebar--right_16oed_34 {
    border-block-start: 0;
    border-inline-start: var(--puck-border-width-regular) solid var(--puck-color-border);
  }
}
._Sidebar-resizeHandle_16oed_51 {
  position: absolute;
  height: 100%;
}
._Sidebar--left_16oed_14 + ._Sidebar-resizeHandle_16oed_51 {
  grid-area: left;
  justify-self: end;
}
._Sidebar--right_16oed_34 + ._Sidebar-resizeHandle_16oed_51 {
  grid-area: right;
  justify-self: start;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Nav/styles.module.css/#css-module-data */
._Nav_vll2r_1 {
  display: flex;
}
._Nav-list_vll2r_5 {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  gap: var(--puck-space-2);
}
@media (min-width: 638px) {
  ._Nav-list_vll2r_5 {
    padding-top: 32px;
    flex-direction: column;
    gap: var(--puck-space-4);
    width: 100%;
  }
}
._Nav-mobileActions_vll2r_23 {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-inline-start: auto;
  padding: var(--puck-space-1) var(--puck-space-4);
  border-inline-start: var(--puck-border-width-regular) solid var(--puck-color-border);
}
@media (min-width: 638px) {
  ._Nav-mobileActions_vll2r_23 {
    display: none;
  }
}
._NavItem-link_vll2r_39 {
  text-align: center;
  align-items: center;
  color: var(--puck-pluginbar-color-text, var(--puck-color-text-secondary));
  display: flex;
  gap: var(--puck-space-2);
  text-decoration: none;
  cursor: pointer;
  border-radius: var(--puck-radius-m);
  padding: var(--puck-space-2) var(--puck-space-1);
  width: 64px;
  box-sizing: border-box;
}
@media (min-width: 638px) {
  ._NavItem-link_vll2r_39 {
    width: auto;
  }
}
._NavItem_vll2r_39:first-of-type {
  padding-left: var(--puck-space-4);
}
._NavItem_vll2r_39:last-of-type {
  padding-right: var(--puck-space-4);
}
@media (min-width: 638px) {
  ._NavItem_vll2r_39:first-of-type,
  ._NavItem_vll2r_39:last-of-type {
    padding: 0;
  }
}
._NavItem-link_vll2r_39 {
  border-top: var(--puck-border-width-strong) solid transparent;
  border-bottom: var(--puck-border-width-strong) solid transparent;
  border-radius: var(--puck-radius-none);
  flex-direction: column;
  font-size: var(--puck-pluginbar-font-size, var(--puck-font-size-xxxs));
}
@media (min-width: 638px) {
  ._NavItem-link_vll2r_39 {
    border: 0;
    border-left: var(--puck-border-width-strong) solid transparent;
    border-right: var(--puck-border-width-strong) solid transparent;
  }
}
._NavItem-linkIcon_vll2r_90 {
  height: 2em;
  width: 2em;
}
._NavItem-linkIcon_vll2r_90 svg {
  height: 100%;
  width: 100%;
}
._NavItem--active_vll2r_100 > ._NavItem-link_vll2r_39 {
  background-color: var(--puck-color-interactive-subtle);
  color: var( --puck-pluginbar-color-text-selected, var(--puck-color-interactive) );
  font-weight: var(--puck-font-weight-semibold);
}
._NavItem--active_vll2r_100 > ._NavItem-link_vll2r_39 {
  background-color: transparent;
  border-top-color: var(--puck-color-interactive);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-weight: var(--puck-font-weight-semibold);
}
@media (min-width: 638px) {
  ._NavItem--active_vll2r_100 > ._NavItem-link_vll2r_39 {
    border-top-color: transparent;
    border-right-color: var( --puck-pluginbar-color-text-selected, var(--puck-color-interactive) );
  }
}
._NavItem_vll2r_39:not(._NavItem--active_vll2r_100) > ._NavItem-link_vll2r_39:hover {
  background-color: var( --puck-pluginbar-color-bg-hover, var(--puck-color-interactive-soft) );
  color: var(--puck-pluginbar-color-text-hover, var(--puck-color-interactive));
}
@media (min-width: 638px) {
  ._NavItem--mobileOnly_vll2r_136 {
    display: none;
  }
}
._NavItem--desktopOnly_vll2r_141 {
  display: none;
}
@media (min-width: 638px) {
  ._NavItem--desktopOnly_vll2r_141 {
    display: block;
  }
}

/* css-module:/home/runner/work/puck/puck/packages/core/plugins/blocks/styles.module.css/#css-module-data */
._BlocksPlugin_9af19_1 {
  padding: var(--puck-drawer-space, var(--puck-space-4));
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
}

/* css-module:/home/runner/work/puck/puck/packages/core/plugins/outline/styles.module.css/#css-module-data */
._OutlinePlugin_1ylsc_1 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  min-width: 0;
  position: relative;
}

/* css-module:/home/runner/work/puck/puck/packages/core/plugins/fields/styles.module.css/#css-module-data */
._FieldsPlugin_18cj3_1 {
  background: var(--puck-color-surface);
  height: 100%;
  overflow-y: auto;
}
._FieldsPlugin-header_18cj3_7 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  font-weight: var(--puck-font-weight-semibold);
  padding-bottom: var(--puck-space-2);
  padding-left: var(--puck-space-4);
  padding-right: var(--puck-space-4);
  padding-top: var(--puck-space-2);
}
@media (min-width: 638px) {
  ._FieldsPlugin-header_18cj3_7 {
    padding: var(--puck-space-4);
  }
}`,Bb=`/* styles/color.css */
@layer puck-tokens {
  :root {
    --puck-color-rose-01: #4a001c;
    --puck-color-rose-02: #670833;
    --puck-color-rose-03: #87114c;
    --puck-color-rose-04: #a81a66;
    --puck-color-rose-05: #bc5089;
    --puck-color-rose-06: #cc7ca5;
    --puck-color-rose-07: #d89aba;
    --puck-color-rose-08: #e3b8cf;
    --puck-color-rose-09: #efd6e3;
    --puck-color-rose-10: #f6eaf1;
    --puck-color-rose-11: #faf4f8;
    --puck-color-rose-12: #fef8fc;
    --puck-color-azure-01: #00175d;
    --puck-color-azure-02: #002c77;
    --puck-color-azure-03: #014292;
    --puck-color-azure-04: #0158ad;
    --puck-color-azure-05: #3479be;
    --puck-color-azure-06: #6499cf;
    --puck-color-azure-07: #88b0da;
    --puck-color-azure-08: #abc7e5;
    --puck-color-azure-09: #cfdff0;
    --puck-color-azure-10: #e7eef7;
    --puck-color-azure-11: #f3f6fb;
    --puck-color-azure-12: #f7faff;
    --puck-color-green-01: #002000;
    --puck-color-green-02: #043604;
    --puck-color-green-03: #084e08;
    --puck-color-green-04: #0c680c;
    --puck-color-green-05: #1d882f;
    --puck-color-green-06: #2faa53;
    --puck-color-green-07: #56c16f;
    --puck-color-green-08: #7dd78b;
    --puck-color-green-09: #b8e8bf;
    --puck-color-green-10: #ddf3e0;
    --puck-color-green-11: #eff8f0;
    --puck-color-green-12: #f3fcf4;
    --puck-color-yellow-01: #211000;
    --puck-color-yellow-02: #362700;
    --puck-color-yellow-03: #4c4000;
    --puck-color-yellow-04: #645a00;
    --puck-color-yellow-05: #877614;
    --puck-color-yellow-06: #ab9429;
    --puck-color-yellow-07: #bfac4e;
    --puck-color-yellow-08: #d4c474;
    --puck-color-yellow-09: #e6deb1;
    --puck-color-yellow-10: #f3efd9;
    --puck-color-yellow-11: #f9f7ed;
    --puck-color-yellow-12: #fcfaf0;
    --puck-color-red-01: #4c0000;
    --puck-color-red-02: #6a0a10;
    --puck-color-red-03: #8a1422;
    --puck-color-red-04: #ac1f35;
    --puck-color-red-05: #bf5366;
    --puck-color-red-06: #ce7e8e;
    --puck-color-red-07: #d99ca8;
    --puck-color-red-08: #e4b9c2;
    --puck-color-red-09: #efd7db;
    --puck-color-red-10: #f6eaec;
    --puck-color-red-11: #faf4f5;
    --puck-color-red-12: #fff9fa;
    --puck-color-grey-01: #181818;
    --puck-color-grey-02: #292929;
    --puck-color-grey-03: #404040;
    --puck-color-grey-04: #5a5a5a;
    --puck-color-grey-05: #767676;
    --puck-color-grey-06: #949494;
    --puck-color-grey-07: #ababab;
    --puck-color-grey-08: #c3c3c3;
    --puck-color-grey-09: #dcdcdc;
    --puck-color-grey-10: #efefef;
    --puck-color-grey-11: #f5f5f5;
    --puck-color-grey-12: #fafafa;
    --puck-color-black: #000000;
    --puck-color-white: #ffffff;
  }
}

/* styles/tokens.css */
@layer puck-tokens {
  :root {
    --puck-color-surface: var(--puck-color-white);
    --puck-color-surface-muted: var(--puck-color-grey-11);
    --puck-color-surface-subtle: var(--puck-color-grey-12);
    --puck-color-surface-inverse: var(--puck-color-grey-01);
    --puck-color-border: var(--puck-color-grey-09);
    --puck-color-border-hover: var(--puck-color-grey-05);
    --puck-color-border-muted: var(--puck-color-grey-10);
    --puck-color-border-inverse: var(--puck-color-grey-05);
    --puck-color-text: var(--puck-color-black);
    --puck-color-text-secondary: var(--puck-color-grey-04);
    --puck-color-text-muted: var(--puck-color-grey-05);
    --puck-color-text-subtle: var(--puck-color-grey-07);
    --puck-color-text-inverse: var(--puck-color-white);
    --puck-opacity-text-inverse: 0.75;
    --puck-color-interactive: var(--puck-color-azure-04);
    --puck-color-interactive-hover: var(--puck-color-azure-03);
    --puck-color-interactive-active: var(--puck-color-azure-02);
    --puck-color-interactive-subtle: var(--puck-color-azure-10);
    --puck-color-interactive-soft: var(--puck-color-azure-11);
    --puck-color-interactive-soft-hover: var(--puck-color-azure-12);
    --puck-color-interactive-neutral-hover: var(--puck-color-grey-10);
    --puck-color-interactive-inverse-hover: var(--puck-color-azure-06);
    --puck-color-interactive-inverse-active: var(--puck-color-azure-07);
    --puck-color-focus-ring: var(--puck-color-azure-05);
    --puck-color-selection-bg: color-mix( in srgb, var(--puck-color-azure-09) 30%, transparent );
    --puck-color-selection-border: var(--puck-color-azure-08);
    --puck-color-line-placeholder: var(--puck-color-azure-06);
    --puck-color-highlight: var(--puck-color-rose-07);
    --puck-color-bg-disabled: var(--puck-color-grey-07);
    --puck-color-text-disabled: var(--puck-color-grey-03);
    --puck-color-overlay-backdrop: color-mix( in srgb, var(--puck-color-black) 75%, transparent );
    --puck-space-1: 4px;
    --puck-space-2: 8px;
    --puck-space-3: 12px;
    --puck-space-4: 16px;
    --puck-space-5: 24px;
    --puck-space-chrome-gutter: var(--puck-space-4);
    --puck-radius-none: 0;
    --puck-radius-xs: 2px;
    --puck-radius-s: 3px;
    --puck-radius-m: 4px;
    --puck-radius-l: 8px;
    --puck-radius-pill: 30px;
    --puck-radius-round: 100%;
    --puck-border-width-hairline: 0.5px;
    --puck-border-width-regular: 1px;
    --puck-border-width-focus: 2px;
    --puck-border-width-strong: 4px;
    --puck-duration-fast: 50ms;
    --puck-duration-medium: 150ms;
    --puck-duration-slow: 250ms;
    --puck-ease-exit: ease-in;
    --puck-ease-emphasized: ease-in-out;
    --puck-ease-entrance: ease-out;
    --puck-font-weight-regular: 400;
    --puck-font-weight-medium: 500;
    --puck-font-weight-semibold: 600;
    --puck-font-weight-bold: 700;
    --puck-font-weight-heavy: 800;
    --puck-letter-spacing-ui: 0.05ch;
    --puck-letter-spacing-heading: 0.08ch;
    --puck-icon-size-xs: 14px;
    --puck-icon-size-s: 16px;
    --puck-icon-size-m: 18px;
    --puck-icon-size-l: 24px;
    --puck-space-m-unitless: 24;
    --puck-user-sidebar-left-width: var(--puck-sidebar-width);
    --puck-user-sidebar-right-width: var(--puck-sidebar-width);
    --puck-slot-min-empty-height: 128px;
    --puck-line-placeholder-width: 2px;
  }
}

/* styles/typography.css */
@layer puck-tokens {
  :root {
    --puck-font-size-scale-base-unitless: 12;
    --puck-font-size-xxxs-unitless: 12;
    --puck-font-size-xxs-unitless: 14;
    --puck-font-size-xs-unitless: 16;
    --puck-font-size-s-unitless: 18;
    --puck-font-size-m-unitless: 21;
    --puck-font-size-l-unitless: 24;
    --puck-font-size-xl-unitless: 28;
    --puck-font-size-xxl-unitless: 36;
    --puck-font-size-xxxl-unitless: 48;
    --puck-font-size-xxxxl-unitless: 56;
    --puck-font-size-xxxs: calc( 1rem * var(--puck-font-size-xxxs-unitless) / 16 );
    --puck-font-size-xxs: calc(1rem * var(--puck-font-size-xxs-unitless) / 16);
    --puck-font-size-xs: calc(1rem * var(--puck-font-size-xs-unitless) / 16);
    --puck-font-size-s: calc(1rem * var(--puck-font-size-s-unitless) / 16);
    --puck-font-size-m: calc(1rem * var(--puck-font-size-m-unitless) / 16);
    --puck-font-size-l: calc(1rem * var(--puck-font-size-l-unitless) / 16);
    --puck-font-size-xl: calc(1rem * var(--puck-font-size-xl-unitless) / 16);
    --puck-font-size-xxl: calc(1rem * var(--puck-font-size-xxl-unitless) / 16);
    --puck-font-size-xxxl: calc( 1rem * var(--puck-font-size-xxxl-unitless) / 16 );
    --puck-font-size-xxxxl: calc( 1rem * var(--puck-font-size-xxxxl-unitless) / 16 );
    --puck-font-size-base: var(--puck-font-size-xs);
    --puck-line-height-reset: 1;
    --puck-line-height-xs: calc( var(--puck-space-m-unitless) / var(--puck-font-size-m-unitless) );
    --puck-line-height-s: calc( var(--puck-space-m-unitless) / var(--puck-font-size-s-unitless) );
    --puck-line-height-m: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xs-unitless) );
    --puck-line-height-l: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xxs-unitless) );
    --puck-line-height-xl: calc( var(--puck-space-m-unitless) / var(--puck-font-size-scale-base-unitless) );
    --puck-line-height-base: var(--puck-line-height-m);
    --puck-fallback-font-stack:
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Helvetica Neue,
      sans-serif,
      Apple Color Emoji,
      Segoe UI Emoji,
      Segoe UI Symbol;
    --puck-font-family: Inter, var(--puck-fallback-font-stack);
    --puck-font-family-monospaced:
      ui-monospace,
      "Cascadia Code",
      "Source Code Pro",
      Menlo,
      Consolas,
      "DejaVu Sans Mono",
      monospace;
  }
  @supports (font-variation-settings: normal) {
    :root {
      --puck-font-family: InterVariable, var(--puck-fallback-font-stack);
    }
  }
}

/* bundle/core.css */
:root {
  --_puck-styles-loaded: "true";
}
#frame-root {
  height: 1px;
  min-height: 100vh;
}
[data-puck-entry] {
  position: relative;
  z-index: 0;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ActionBar/styles.module.css/#css-module-data */
._ActionBar_5vdfr_1 {
  align-items: center;
  cursor: default;
  display: flex;
  width: auto;
  padding-top: var(--puck-actionbar-space-y, var(--puck-space-1));
  padding-bottom: var(--puck-actionbar-space-y, var(--puck-space-1));
  padding-inline-start: var(--puck-actionbar-space-x, 0);
  padding-inline-end: var(--puck-actionbar-space-x, 0);
  border-radius: var(--puck-actionbar-radius, var(--puck-radius-l));
  background: var(--puck-actionbar-color-bg, var(--puck-color-surface-inverse));
  color: var(--puck-color-text-inverse);
  font-family: var(--puck-font-family);
  min-height: 26px;
}
._ActionBar-label_5vdfr_17 {
  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));
  font-size: var(--puck-actionbar-font-size, var(--puck-font-size-xxxs));
  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));
  font-weight: var(--puck-font-weight-medium);
  padding-inline-start: var(--puck-space-2);
  padding-inline-end: var(--puck-space-2);
  margin-inline-start: var(--puck-space-1);
  margin-inline-end: var(--puck-space-1);
  text-overflow: ellipsis;
  white-space: nowrap;
}
._ActionBarAction_5vdfr_30 + ._ActionBar-label_5vdfr_17 {
  padding-inline-start: 0;
}
._ActionBar-label_5vdfr_17 + ._ActionBarAction_5vdfr_30 {
  margin-inline-start: calc(var(--puck-space-1) * -1);
}
._ActionBar-group_5vdfr_38 {
  align-items: center;
  border-inline-start: var(--puck-border-width-hairline) solid var(--puck-actionbar-color-separator, var(--puck-color-border-inverse));
  display: flex;
  height: 100%;
  padding-inline-start: var(--puck-space-1);
  padding-inline-end: var(--puck-space-1);
}
._ActionBar-group_5vdfr_38:first-of-type {
  border-inline-start: 0;
}
._ActionBar-group_5vdfr_38:empty {
  display: none;
}
._ActionBarAction_5vdfr_30 {
  background: transparent;
  border: none;
  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));
  cursor: pointer;
  padding: var(--puck-actionbar-action-space, 6px);
  margin-inline-start: var(--puck-space-1);
  margin-inline-end: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));
  transition: color var(--puck-duration-fast) var(--puck-ease-exit), opacity var(--puck-duration-fast) var(--puck-ease-exit);
}
._ActionBarAction--disabled_5vdfr_74 {
  cursor: auto;
  color: var( --puck-actionbar-color-action-disabled, var(--puck-color-text-inverse) );
  opacity: var(--puck-actionbar-opacity-action-disabled, 0.54);
}
._ActionBarAction_5vdfr_30 svg {
  max-width: none !important;
}
._ActionBarAction_5vdfr_30:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: calc(var(--puck-border-width-focus) * -1);
}
@media (hover: hover) and (pointer: fine) {
  ._ActionBarAction_5vdfr_30:hover:not(._ActionBarAction--disabled_5vdfr_74) {
    color: var( --puck-actionbar-color-action-hover, var(--puck-color-interactive-inverse-hover) );
    opacity: 1;
    transition: none;
  }
}
._ActionBarAction_5vdfr_30:active:not(._ActionBarAction--disabled_5vdfr_74),
._ActionBarAction--active_5vdfr_104 {
  color: var( --puck-actionbar-color-action-active, var(--puck-color-interactive-inverse-active) );
  opacity: 1;
  transition: none;
}
._ActionBar-group_5vdfr_38 * {
  margin: 0;
}
._ActionBar-separator_5vdfr_117 {
  background: var( --puck-actionbar-color-separator, var(--puck-color-border-inverse) );
  margin-inline: var(--puck-space-1);
  width: var( --puck-border-width-hairline );
  height: 100%;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DraggableComponent/styles.module.css/#css-module-data */
._DraggableComponent_1627v_1 {
  position: absolute;
  pointer-events: none;
}
._DraggableComponent-overlayWrapper_1627v_6 {
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  pointer-events: none;
  box-sizing: border-box;
  z-index: 1;
}
._DraggableComponent-overlay_1627v_6 {
  cursor: pointer;
  height: 100%;
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;
  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1);
  width: 100%;
}
._DraggableComponent_1627v_1:focus-visible > ._DraggableComponent-overlayWrapper_1627v_6 {
  outline: var(--puck-border-width-regular) solid var(--puck-color-focus-ring);
}
._DraggableComponent-loadingOverlay_1627v_38 {
  background: var(--puck-color-surface);
  color: var(--puck-color-text);
  border-radius: var(--puck-radius-m);
  display: flex;
  padding: var(--puck-space-2);
  top: var(--puck-space-2);
  right: var(--puck-space-2);
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
  z-index: 1;
}
._DraggableComponent--hover_1627v_54 > ._DraggableComponent-overlayWrapper_1627v_6 > ._DraggableComponent-overlay_1627v_6 {
  background: var( --puck-slot-component-color-overlay, var(--puck-color-selection-bg) );
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;
}
._DraggableComponent--isSelected_1627v_72 > ._DraggableComponent-overlayWrapper_1627v_6 > ._DraggableComponent-overlay_1627v_6 {
  outline-color: var( --puck-slot-component-color-border-selected, var(--puck-color-selection-border) );
}
._DraggableComponent_1627v_1:has(._DraggableComponent--hover_1627v_54 > ._DraggableComponent-overlayWrapper_1627v_6) > ._DraggableComponent-overlayWrapper_1627v_6 {
  display: none;
}
._DraggableComponent-actionsOverlay_1627v_89 {
  position: sticky;
  opacity: 0;
  pointer-events: none;
  z-index: 2;
}
._DraggableComponent--isSelected_1627v_72 ._DraggableComponent-actionsOverlay_1627v_89 {
  opacity: 1;
  pointer-events: auto;
}
._DraggableComponent-actions_1627v_89 {
  position: absolute;
  width: auto;
  cursor: grab;
  display: flex;
  box-sizing: border-box;
  transform-origin: right top;
  min-height: 36px;
}
._DraggableComponent-actionsAction_1627v_111 {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Drawer/styles.module.css/#css-module-data */
._Drawer_1n90m_1 {
  display: flex;
  flex-direction: column;
  font-family: var(--puck-font-family);
  gap: var(--puck-space-3);
}
._Drawer-draggable_1n90m_8 {
  position: relative;
}
._Drawer-draggableBg_1n90m_12 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: -1;
}
._DrawerItem-draggable_1n90m_22 {
  background: var(--puck-drawer-item-color-bg, var(--puck-color-surface));
  color: var(--puck-drawer-item-color-text, var(--puck-color-text));
  cursor: grab;
  padding: var(--puck-drawer-item-space, var(--puck-space-3));
  display: flex;
  border: var(--puck-drawer-item-border-width, var(--puck-border-width-regular)) var(--puck-drawer-item-color-border, var(--puck-color-border)) solid;
  border-radius: var(--puck-drawer-item-radius, var(--puck-radius-m));
  font-size: var(--puck-drawer-item-font-size, var(--puck-font-size-xxs));
  justify-content: space-between;
  align-items: center;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._DrawerItem--disabled_1n90m_38 ._DrawerItem-draggable_1n90m_22 {
  background: var(--puck-color-surface-muted);
  color: var(--puck-color-text-muted);
  cursor: not-allowed;
}
._DrawerItem_1n90m_22:focus-visible {
  outline: 0;
}
._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:focus-visible ._DrawerItem-draggable_1n90m_22 {
  border-radius: var(--puck-radius-m);
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:not(._DrawerItem--disabled_1n90m_38) ._DrawerItem-draggable_1n90m_22:hover {
    background-color: var( --puck-drawer-item-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-drawer-item-color-text-hover, var(--puck-color-interactive) );
    transition: none;
  }
}
._DrawerItem-name_1n90m_72 {
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DropZone/styles.module.css/#css-module-data */
._DropZone_wc2ks_1 {
  position: relative;
  height: 100%;
  min-height: var(--puck-slot-min-empty-height);
  outline-offset: calc(var(--puck-slot-border-width, var(--puck-border-width-focus)) * -1);
  width: 100%;
}
._DropZone--hasChildren_wc2ks_11 {
  min-height: 0;
}
._DropZone_wc2ks_1:empty {
  min-height: var(--puck-slot-min-empty-height);
}
[data-puck-entry]:not([data-puck-dragging]) ._DropZone_wc2ks_1 {
  transition: min-height var(--puck-duration-medium) var(--puck-ease-exit);
}
._DropZone--isAreaSelected_wc2ks_24,
._DropZone--hoveringOverArea_wc2ks_25:not(._DropZone--isRootZone_wc2ks_25) {
  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone_wc2ks_1:empty {
  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone-item_wc2ks_39 {
  position: relative;
}
._DropZone-linePlaceholder_wc2ks_43 {
  background: var( --puck-slot-component-color-placeholder, var(--puck-color-line-placeholder) );
  border-radius: calc(var(--puck-line-placeholder-width, 2px) / 2);
  pointer-events: none;
  position: absolute;
  z-index: 1;
}
._DropZone-hitbox_wc2ks_55 {
  position: absolute;
  bottom: calc(var(--puck-space-3) * -1);
  height: var(--puck-space-5);
  width: 100%;
  z-index: 1;
}
[data-puck-dragging] ._DropZone--isEnabled_wc2ks_63 {
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone_wc2ks_1 > *:not([data-puck-component]):not([data-puck-line-placeholder]) {
  opacity: 0;
}
body:has(._DropZone--isAnimating_wc2ks_74:empty) [data-puck-overlay] {
  opacity: 0 !important;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/InlineTextField/styles.module.css/#css-module-data */
._InlineTextField_104qp_1 {
  cursor: text;
  display: inline-block;
  white-space: pre-wrap;
  text-decoration: inherit;
}
[data-dnd-dragging] ._InlineTextField_104qp_1 {
  cursor: none;
  caret-color: transparent;
}
[data-dnd-dragging] ._InlineTextField_104qp_1::selection {
  display: none;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Loader/styles.module.css/#css-module-data */
@keyframes _loader-animation_1w5zn_1 {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.8);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}
._Loader_1w5zn_13 {
  background: transparent;
  border-radius: var(--puck-radius-round);
  border: var(--puck-border-width-focus) solid currentColor;
  border-bottom-color: transparent;
  display: inline-block;
  animation: _loader-animation_1w5zn_1 1s 0s infinite linear;
  animation-fill-mode: both;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/styles.module.css/#css-module-data */
._RichTextMenu_1ve2j_1 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
._RichTextMenu--form_1ve2j_7 {
  border-top-left-radius: var(--puck-field-radius, var(--puck-radius-m));
  border-top-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  padding: var(--puck-field-richtext-menu-space-y, 6px) var(--puck-field-richtext-menu-space-x, 6px);
  background-color: var( --puck-field-richtext-menu-color-bg, var(--puck-color-surface-subtle) );
  position: relative;
  scrollbar-width: none;
  overflow-x: auto;
}
._RichTextMenu-group_1ve2j_21 {
  display: flex;
  align-items: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-inline: 6px;
  gap: 2px;
  position: relative;
}
._RichTextMenu-group_1ve2j_21:first-of-type {
  padding-left: 0;
}
._RichTextMenu-group_1ve2j_21:last-of-type {
  padding-right: 0;
}
._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 {
  color: var(--puck-color-text-inverse);
  gap: 0px;
  flex-wrap: nowrap;
}
._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {
  border-left: var(--puck-border-width-regular) solid var( --puck-field-richtext-menu-color-separator, var(--puck-color-border-muted) );
}
._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {
  border-left: var(--puck-border-width-hairline) solid var(--puck-color-border-inverse);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/components/Control/styles.module.css/#css-module-data */
._Control_id4pm_1 .lucide {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._Control--inline_id4pm_6 .lucide {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}

/* components/DraggableComponent/styles.css */
[data-puck-component] * {
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-component] {
  cursor: grab;
  pointer-events: auto !important;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-dropzone] {
  pointer-events: auto !important;
}
[data-puck-disabled] {
  cursor: pointer;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) {
  background: var( --puck-slot-component-color-placeholder, var(--puck-color-azure-06) ) !important;
  border: none !important;
  color: transparent !important;
  opacity: 0.3 !important;
  outline: none !important;
  transition: none !important;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) *,
[data-dnd-placeholder]:not([data-puck-line-drag] *)::after,
[data-dnd-placeholder]:not([data-puck-line-drag] *)::before {
  opacity: 0 !important;
}
[data-puck-line-drag] [data-dnd-placeholder] {
  opacity: 0.4 !important;
  outline: none !important;
  transition: none !important;
}
[data-puck-line-drag] [data-dnd-dragging][data-puck-component] {
  opacity: 0.9 !important;
}
[data-dnd-dragging][data-puck-component] {
  pointer-events: none !important;
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var(--puck-slot-component-color-border-dragging, var(--puck-color-azure-09)) solid !important;
  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1) !important;
}
[data-dnd-dragging][data-puck-component] > :first-child {
  margin-top: 0 !important;
}
[data-dnd-dragging][data-puck-component] > :last-child {
  margin-bottom: 0 !important;
}

/* lib/overlay-portal/styles.css */
[data-puck-overlay-portal],
[data-puck-overlay-portal] * {
  pointer-events: auto !important;
}
[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal],
[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal] * {
  pointer-events: none !important;
}
[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:hover {
  outline: 2px var(--puck-color-azure-09, #cfdff0) dashed;
  outline-offset: 2px;
}
[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:focus-within {
  outline: 2px var(--puck-color-azure-07, #88b0da) dashed;
  outline-offset: 2px;
}`,Vb=`data-puck-style-source`,Hb=`puck`,Ub=`data-puck-style-id`,Wb={uiDefault:`ui-default`,iframeInteractions:`iframe-styles`},Gb=new WeakMap,Kb=e=>{if(e)return e;if(typeof document<`u`)return document},qb=e=>{let t=Gb.get(e);if(t)return t;let n=new Map;return Gb.set(e,n),n},Jb=(e,t,n=!1)=>{let r=e.head;if(r){if(t.parentElement!==r){n?r.prepend(t):r.append(t);return}n&&r.firstChild!==t&&r.prepend(t),!n&&r.lastChild!==t&&r.append(t)}},Yb=(e,t,n,r=!1)=>{let i=e.createElement(`style`);return i.setAttribute(Vb,Hb),i.setAttribute(Ub,t),i.textContent=n,Jb(e,i,r),i},Xb=e=>e?.getAttribute(Vb)===Hb,Zb=e=>{let t=Kb(e?.document);(0,R.useInsertionEffect)(()=>{if(!e||!t)return;let n=qb(t),r=n.get(e.id);if(r)r.count+=1,r.el.textContent!==e.cssText&&(r.el.textContent=e.cssText),Jb(t,r.el,e.prepend);else{let r=Yb(t,e.id,e.cssText,e.prepend);n.set(e.id,{count:1,el:r})}return()=>{let t=n.get(e.id);t&&(--t.count,t.count<=0&&(t.el.remove(),n.delete(e.id)))}},[e?.cssText,e?.id,e?.prepend,e?.document,t])},Qb=null,$b=()=>Qb===null?typeof document>`u`?!1:(Qb=getComputedStyle(document.documentElement).getPropertyValue(`--_puck-styles-loaded`).trim()!==``,Qb):Qb,ex=()=>{Zb($b()?null:{cssText:zb,id:Wb.uiDefault,prepend:!0}),(0,R.useEffect)(()=>{},[])},tx=e=>{Zb(e?{cssText:Bb,document:e,id:Wb.iframeInteractions}:null)},nx=`style, link[rel="stylesheet"]`,rx=`data-puck-style-mirror`,ix=e=>!e.matches(nx)||Xb(e)?!1:e.tagName!==`STYLE`||!!e.innerHTML.trim(),ax=e=>{let t=[];return e.querySelectorAll(nx).forEach(e=>{ix(e)&&t.push(e)}),t},ox=e=>Array.from(document.styleSheets).find(t=>t.ownerNode.href===e.href),sx=e=>{if(e)try{return Array.from(e.cssRules).map(e=>e.cssText).join(``)}catch{console.warn(`Access to stylesheet %s is denied. Ignoring…`,e.href)}return``},cx=(e,t)=>{let n=e.attributes;n?.length>0&&Array.from(n).forEach(e=>{t.setAttribute(e.name,e.value)})},lx=e=>setTimeout(e,0),ux=({children:e,debug:t=!1,onStylesLoaded:n=()=>null,syncHostStyles:r=!0})=>{let{document:i,window:a}=fx();return tx(i),(0,R.useEffect)(()=>{if(!a||!i)return()=>{};let e=[],o={},c=()=>{e.forEach(({mirror:e})=>{e.remove()}),e=[],Array.from(i.head.querySelectorAll(`[${rx}="true"]`)).forEach(e=>{e.remove()}),Object.keys(o).forEach(e=>{delete o[e]})},l=t=>e.findIndex(e=>e.original===t),u=(e,n=!1)=>s(null,null,function*(){let r;if(e.nodeName===`LINK`&&n){r=document.createElement(`style`),r.type=`text/css`;let n=ox(e);n||=(yield new Promise(t=>{let n=()=>{t(),e.removeEventListener(`load`,n)};e.addEventListener(`load`,n)}),ox(e));let i=sx(n);if(!i){t&&console.warn(`Tried to load styles for link element, but couldn't find them. Skipping...`);return}r.innerHTML=i,r.setAttribute(`data-href`,e.getAttribute(`href`))}else r=e.cloneNode(!0);return r.setAttribute(rx,`true`),r}),d=n=>s(null,null,function*(){let r=l(n);if(r>-1){t&&console.log(`Tried to add an element that was already mirrored. Updating instead...`),e[r].mirror.innerText=n.innerText;return}let a=yield u(n);if(!a)return;let s=(0,ch.default)(a.outerHTML);if(o[s]){t&&console.log(`iframe already contains element that is being mirrored. Skipping...`);return}o[s]=!0,i.head.append(a),e.push({original:n,mirror:a}),t&&console.log(`Added style node ${n.outerHTML}`)}),f=n=>{var r;let i=l(n);if(i===-1){t&&console.log(`Tried to remove an element that did not exist. Skipping...`);return}let a=(0,ch.default)(n.outerHTML);(r=e[i]?.mirror)==null||r.remove(),delete o[a],t&&console.log(`Removed style node ${n.outerHTML}`)},p=new MutationObserver(e=>{e.forEach(e=>{e.type===`childList`&&(e.addedNodes.forEach(e=>{if(e.nodeType===Node.TEXT_NODE||e.nodeType===Node.ELEMENT_NODE){let t=e.nodeType===Node.TEXT_NODE?e.parentElement:e;t&&ix(t)&&lx(()=>d(t))}}),e.removedNodes.forEach(e=>{if(e.nodeType===Node.TEXT_NODE||e.nodeType===Node.ELEMENT_NODE){let t=e.nodeType===Node.TEXT_NODE?e.parentElement:e;t&&t.matches(nx)&&!Xb(t)&&lx(()=>f(t))}}))})});if(!r)return n(),()=>{p.disconnect(),c()};let m=a.parent.document,h=ax(m),g=[],_=0,v=m.getElementsByTagName(`html`)[0];cx(v,i.documentElement);let y=m.getElementsByTagName(`body`)[0];return cx(y,i.body),Promise.all(h.map((t,n)=>s(null,null,function*(){if(t.nodeName===`LINK`){let e=t.href;if(g.indexOf(e)>-1)return;g.push(e)}let n=yield u(t);if(n)return e.push({original:t,mirror:n}),n}))).then(e=>{let t=e.filter(e=>e!==void 0);t.forEach(e=>{e.onload=()=>{_+=1,_>=t.length&&n()},e.onerror=()=>{let r=e instanceof HTMLLinkElement?e.href:void 0;console.warn(`AutoFrame couldn't load a stylesheet${r?`: ${r}`:``}. This can happen if the parent document's stylesheet is blocked by the iframe's CSP, returns a non-2xx status, or fails to reach the network.`),_+=1,_>=t.length&&n()}}),i.head.querySelectorAll(`[${rx}="true"]`).forEach(e=>{e.remove()}),i.head.append(...t),t.forEach(e=>{e.nodeName===`STYLE`&&(_+=1)}),_>=t.length&&n(),p.observe(m.head,{childList:!0,subtree:!0}),t.forEach(e=>{let t=(0,ch.default)(e.outerHTML);o[t]=!0})}),()=>{p.disconnect(),c()}},[r]),(0,z.jsx)(z.Fragment,{children:e})},dx=(0,R.createContext)({}),fx=()=>(0,R.useContext)(dx);function px(t){var n=t,{children:i,className:a,debug:s,id:c,onReady:l=()=>{},onNotReady:u=()=>{},frameRef:d,syncHostStyles:f=!0}=n,p=r(n,[`children`,`className`,`debug`,`id`,`onReady`,`onNotReady`,`frameRef`,`syncHostStyles`]);let[m,h]=(0,R.useState)(!1),[g,_]=(0,R.useState)({}),[v,y]=(0,R.useState)(),[b,x]=(0,R.useState)(!1);return(0,R.useEffect)(()=>{m&&x(!f)},[m,f]),(0,R.useEffect)(()=>{if(d.current){let e=d.current.contentDocument,t=d.current.contentWindow;_({document:e||void 0,window:t||void 0}),y(d.current.contentDocument?.getElementById(`frame-root`)),e&&t&&b?l():u()}},[d,m,b]),(0,z.jsx)(`iframe`,e(o({},p),{className:a,id:c,srcDoc:`<!DOCTYPE html><html><head></head><body><div id="frame-root" data-puck-entry></div></body></html>`,ref:d,onLoad:()=>{h(!0)},children:(0,z.jsx)(dx.Provider,{value:g,children:m&&v&&(0,z.jsx)(ux,{debug:s,onStylesLoaded:()=>x(!0),syncHostStyles:f,children:(0,of.createPortal)(i,v)})})}))}px.displayName=`AutoFrame`;var mx=px;c();var hx=ln(zv),gx=(0,R.memo)(()=>{let t=L(En(e=>e.state.indexes.nodes.root?.flatData.props)),n=L(e=>e.config),r=L(e=>e.metadata),i=_v(n,(0,R.useMemo)(()=>{let e=S({props:t??{}});return mt(e)},[t]),hx),a=(0,R.useMemo)(()=>e(o({},i),{children:(0,z.jsx)(Gv,{zone:w}),puck:{renderDropZone:Gv,isEditing:!0,dragRef:null,metadata:r},editMode:!0}),[i,r]),s=_n(n.root?.fields??{},a);return n.root?.render?n.root?.render(e(o(o({},a),s),{id:`puck-root`})):(0,z.jsx)(z.Fragment,{children:a.children})});gx.displayName=`EditorPage`;var _x=gx;c();var vx=a(`PuckPreview`,{PuckPreview:`_PuckPreview_zbic3_1`,"PuckPreview-frame":`_PuckPreview-frame_zbic3_6`}),yx=t=>{let n=L(e=>e.status);(0,R.useEffect)(()=>{if(t.current&&n===`READY`){let n=t.current,r=t=>{let r=new O_(`pointermove`,e(o({},t),{bubbles:!0,cancelable:!1,clientX:t.clientX,clientY:t.clientY,pointerId:t.pointerId,pointerType:t.pointerType,isPrimary:t.isPrimary,originalTarget:t.target}));n.dispatchEvent(r)},i=()=>{var e;a(),(e=n.contentDocument)==null||e.addEventListener(`pointermove`,r,{capture:!0})},a=()=>{var e;(e=n.contentDocument)==null||e.removeEventListener(`pointermove`,r)};return i(),()=>{a()}}},[n])},bx=e=>{let t=L(e=>e.state.ui.previewMode),n=L(e=>e.status),r=L(e=>e.iframe.enabled);(0,R.useEffect)(()=>{(r?(e.current?.contentDocument)?.querySelector(`[data-puck-entry]`):e.current)?.setAttribute(`data-puck-preview-mode`,t)},[t,n,r])},xx=({id:e=`puck-preview`})=>{let t=L(e=>e.dispatch),n=L(e=>e.config),r=L(e=>e.setStatus),i=L(e=>e.iframe),a=L(e=>e.overrides),o=L(e=>e.metadata),s=L(e=>e.state.ui.previewMode===`edit`?null:e.state.data),c=(0,R.useMemo)(()=>a.iframe,[a]),l=(0,R.useRef)(null);yx(l),bx(l);let u=s?(0,z.jsx)(Jv,{data:s,config:n,metadata:o}):(0,z.jsx)(_x,{});return(0,R.useEffect)(()=>{i.enabled||r(`READY`)},[i.enabled]),(0,z.jsx)(`div`,{className:vx(),id:e,"data-puck-preview":!0,onClick:e=>{let n=e.target;!n.hasAttribute(`data-puck-component`)&&!n.hasAttribute(`data-puck-dropzone`)&&t({type:`setUi`,ui:{itemSelector:null}})},children:i.enabled?(0,z.jsx)(mx,{id:`preview-frame`,className:vx(`frame`),"data-rfd-iframe":!0,syncHostStyles:i.syncHostStyles,onReady:()=>{r(`READY`)},onNotReady:()=>{r(`MOUNTED`)},frameRef:l,children:(0,z.jsx)(dx.Consumer,{children:({document:e})=>c?(0,z.jsx)(c,{document:e,children:u}):u})}):(0,z.jsx)(`div`,{id:`preview-frame`,className:vx(`frame`),ref:l,"data-puck-entry":!0,children:u})})};c(),c();var Sx=({overrides:t,plugins:n})=>{let r=o({},t);return n?.forEach(t=>{t.overrides&&Object.keys(t.overrides).forEach(n=>{let i=n;if(!t.overrides?.[i])return;if(i===`fieldTypes`){let n=t.overrides.fieldTypes;Object.keys(n).forEach(t=>{r.fieldTypes=r.fieldTypes||{};let i=r.fieldTypes[t],a=r=>n[t](e(o({},r),{children:i?i(r):r.children}));r.fieldTypes[t]=a});return}let a=r[i];r[i]=n=>t.overrides[i](e(o({},n),{children:a?a(n):n.children}))})}),r},Cx=({overrides:e,plugins:t})=>(0,R.useMemo)(()=>Sx({overrides:e,plugins:t}),[t,e]);c(),c();var wx={Puck:`_Puck_tzaxg_19`,"Puck-portal":`_Puck-portal_tzaxg_31`,PuckLayout:`_PuckLayout_tzaxg_36`,"PuckLayout-inner":`_PuckLayout-inner_tzaxg_40`,"Puck--hidePlugins":`_Puck--hidePlugins_tzaxg_73`,"PuckLayout--mounted":`_PuckLayout--mounted_tzaxg_78`,"PuckLayout--mobilePanelHeightToggle":`_PuckLayout--mobilePanelHeightToggle_tzaxg_82`,"PuckLayout--leftSideBarVisible":`_PuckLayout--leftSideBarVisible_tzaxg_82`,"PuckLayout--isExpanded":`_PuckLayout--isExpanded_tzaxg_90`,"PuckLayout--mobilePanelHeightMinContent":`_PuckLayout--mobilePanelHeightMinContent_tzaxg_110`,"PuckLayout--rightSideBarVisible":`_PuckLayout--rightSideBarVisible_tzaxg_137`,"PuckLayout-mounted":`_PuckLayout-mounted_tzaxg_156`,"PuckLayout-nav":`_PuckLayout-nav_tzaxg_197`,"PuckLayout-header":`_PuckLayout-header_tzaxg_217`,PuckPluginTab:`_PuckPluginTab_tzaxg_231`,"PuckPluginTab--visible":`_PuckPluginTab--visible_tzaxg_237`,"PuckPluginTab-body":`_PuckPluginTab-body_tzaxg_243`};c();var Tx=({children:e})=>(0,z.jsx)(z.Fragment,{children:e});c();var Ex=()=>{let e=P(),t=(0,R.useCallback)(()=>{let t=e.getState().dispatch;t({type:`setUi`,ui:e=>({previewMode:e.previewMode===`edit`?`interactive`:`edit`})})},[e]);ft({meta:!0,i:!0},t),ft({ctrl:!0,i:!0},t)};c(),c(),c();var Dx=a(`MenuBar`,{MenuBar:`_MenuBar_1hxnj_1`,"MenuBar--menuOpen":`_MenuBar--menuOpen_1hxnj_14`,"MenuBar-inner":`_MenuBar-inner_1hxnj_29`,"MenuBar-history":`_MenuBar-history_1hxnj_45`});function Ox({menuOpen:e=!1,renderHeaderActions:t,setMenuOpen:n}){let r=L(e=>e.history.back),i=L(e=>e.history.forward),a=L(e=>e.history.hasFuture()),o=L(e=>e.history.hasPast()),s=I(`header-undo`),c=I(`header-redo`);return(0,z.jsx)(`div`,{className:Dx({menuOpen:e}),onClick:e=>{let t=e.target;window.matchMedia(`(min-width: 638px)`).matches||t.tagName===`A`&&t.getAttribute(`href`)?.startsWith(`#`)&&n(!1)},children:(0,z.jsxs)(`div`,{className:Dx(`inner`),children:[(0,z.jsxs)(`div`,{className:Dx(`history`),children:[(0,z.jsx)(Re,{type:`button`,title:s,disabled:!o,onClick:r,children:(0,z.jsx)(qe,{size:21})}),(0,z.jsx)(Re,{type:`button`,title:c,disabled:!a,onClick:i,children:(0,z.jsx)(E,{size:21})})]}),(0,z.jsx)(z.Fragment,{children:t&&t()})]})})}c();var kx=a(`PuckHeader`,{PuckHeader:`_PuckHeader_c2nei_1`,"PuckHeader--hidePlugins":`_PuckHeader--hidePlugins_c2nei_21`,"PuckHeader-inner":`_PuckHeader-inner_c2nei_26`,"PuckHeader-toggle":`_PuckHeader-toggle_c2nei_46`,"PuckHeader-rightSideBarToggle":`_PuckHeader-rightSideBarToggle_c2nei_52`,"PuckHeader-leftSideBarToggle":`_PuckHeader-leftSideBarToggle_c2nei_53`,"PuckHeader-title":`_PuckHeader-title_c2nei_64`,"PuckHeader-path":`_PuckHeader-path_c2nei_68`,"PuckHeader-tools":`_PuckHeader-tools_c2nei_75`,"PuckHeader-menuButton":`_PuckHeader-menuButton_c2nei_81`,"PuckHeader--menuOpen":`_PuckHeader--menuOpen_c2nei_86`}),Ax=(0,R.memo)(({hidePlugins:t})=>{let{onPublish:n,renderHeader:i,renderHeaderActions:a,headerTitle:s,headerPath:c,iframe:l}=vS(),u=L(e=>e.dispatch),d=P(),f=(0,R.useMemo)(()=>i?(console.warn("`renderHeader` is deprecated. Please use `overrides.header` and the `usePuck` hook instead"),t=>{var n=t,{actions:a}=n,s=r(n,[`actions`]);let c=i,l=L(e=>e.state);return(0,z.jsx)(c,e(o({},s),{dispatch:u,state:l,children:a}))}):Tx,[i]),p=(0,R.useMemo)(()=>a?(console.warn("`renderHeaderActions` is deprecated. Please use `overrides.headerActions` and the `usePuck` hook instead."),t=>{let n=a,r=L(e=>e.state);return(0,z.jsx)(n,e(o({},t),{dispatch:u,state:r}))}):Tx,[a]),m=L(e=>e.overrides.header||f),h=L(e=>e.overrides.headerActions||p),[g,_]=(0,R.useState)(!1),v=L(e=>(e.state.indexes.nodes.root?.data).props.title??``),y=L(e=>e.state.ui.leftSideBarVisible),b=L(e=>e.state.ui.rightSideBarVisible),x=(0,R.useCallback)(e=>{let t=window.matchMedia(`(min-width: 638px)`).matches,n=e===`left`?y:b,r=e===`left`?`rightSideBarVisible`:`leftSideBarVisible`;u({type:`setUi`,ui:o({[`${e}SideBarVisible`]:!n},t?{}:{[r]:!1})})},[u,y,b]),S=I(`header-publish`),C=I(`label-page`),w=I(`header-toggle-leftsidebar`),T=I(`header-toggle-rightsidebar`),ee=I(`header-toggle-menubar`);return(0,z.jsx)(m,{actions:(0,z.jsx)(z.Fragment,{children:(0,z.jsx)(h,{children:(0,z.jsx)(gh,{onClick:()=>{let e=d.getState().state.data;n&&n(e)},icon:(0,z.jsx)(dt,{size:`14px`}),children:S})})}),children:(0,z.jsx)(`header`,{className:kx({leftSideBarVisible:y,rightSideBarVisible:b,hidePlugins:t}),children:(0,z.jsxs)(`div`,{className:kx(`inner`),children:[(0,z.jsxs)(`div`,{className:kx(`toggle`),children:[(0,z.jsx)(`div`,{className:kx(`leftSideBarToggle`),children:(0,z.jsx)(Re,{type:`button`,onClick:()=>{x(`left`)},title:w,children:(0,z.jsx)(me,{focusable:`false`})})}),(0,z.jsx)(`div`,{className:kx(`rightSideBarToggle`),children:(0,z.jsx)(Re,{type:`button`,onClick:()=>{x(`right`)},title:T,children:(0,z.jsx)(M,{focusable:`false`})})})]}),(0,z.jsx)(`div`,{className:kx(`title`),children:(0,z.jsxs)(gg,{rank:`2`,size:`xs`,children:[s||v||C,c&&(0,z.jsxs)(z.Fragment,{children:[` `,(0,z.jsx)(`code`,{className:kx(`path`),children:c})]})]})}),(0,z.jsxs)(`div`,{className:kx(`tools`),children:[(0,z.jsx)(`div`,{className:kx(`menuButton`),children:(0,z.jsx)(Re,{type:`button`,onClick:()=>_(!g),title:ee,children:g?(0,z.jsx)(it,{focusable:`false`}):(0,z.jsx)(we,{focusable:`false`})})}),(0,z.jsx)(Ox,{dispatch:u,onPublish:n,menuOpen:g,renderHeaderActions:()=>(0,z.jsx)(h,{children:(0,z.jsx)(gh,{onClick:()=>{let e=d.getState().state.data;n&&n(e)},icon:(0,z.jsx)(dt,{size:`14px`}),children:S})}),setMenuOpen:_})]})]})})})});c(),c();var jx=a(`SidebarSection`,{SidebarSection:`_SidebarSection_1uv88_1`,"SidebarSection-title":`_SidebarSection-title_1uv88_12`,"SidebarSection--noBorderTop":`_SidebarSection--noBorderTop_1uv88_20`,"SidebarSection-content":`_SidebarSection-content_1uv88_24`,"SidebarSection-breadcrumbLabel":`_SidebarSection-breadcrumbLabel_1uv88_33`,"SidebarSection-breadcrumbs":`_SidebarSection-breadcrumbs_1uv88_62`,"SidebarSection-breadcrumb":`_SidebarSection-breadcrumb_1uv88_33`,"SidebarSection-heading":`_SidebarSection-heading_1uv88_74`,"SidebarSection-loadingOverlay":`_SidebarSection-loadingOverlay_1uv88_78`}),Mx=({children:e,title:t,background:n,showBreadcrumbs:r,noBorderTop:i,isLoading:a})=>(0,z.jsxs)(`div`,{className:jx({noBorderTop:i}),style:{background:n},children:[(0,z.jsx)(`div`,{className:jx(`title`),children:(0,z.jsxs)(`div`,{className:jx(`breadcrumbs`),children:[r&&(0,z.jsx)(kb,{}),(0,z.jsx)(`div`,{className:jx(`heading`),children:(0,z.jsx)(gg,{rank:`2`,size:`xs`,children:t})})]})}),(0,z.jsx)(`div`,{className:jx(`content`),children:e}),a&&(0,z.jsx)(`div`,{className:jx(`loadingOverlay`),children:(0,z.jsx)(T,{size:32})})]});c(),c(),c();var Nx={ViewportControls:`_ViewportControls_v26yb_1`,"ViewportControls--fullScreen":`_ViewportControls--fullScreen_v26yb_5`,"ViewportControls-toggleButton":`_ViewportControls-toggleButton_v26yb_14`,"ViewportControls-actions":`_ViewportControls-actions_v26yb_39`,"ViewportControls-actionsInner":`_ViewportControls-actionsInner_v26yb_43`,"ViewportControls--isExpanded":`_ViewportControls--isExpanded_v26yb_67`,"ViewportControls-divider":`_ViewportControls-divider_v26yb_72`,"ViewportControls-zoomSelect":`_ViewportControls-zoomSelect_v26yb_79`,"ViewportControls-zoom":`_ViewportControls-zoom_v26yb_79`,"ViewportButton-inner":`_ViewportButton-inner_v26yb_110`,"ViewportButton--isActive":`_ViewportButton--isActive_v26yb_118`},Px={Smartphone:(0,z.jsx)(A,{size:16}),Tablet:(0,z.jsx)(rt,{size:16}),Monitor:(0,z.jsx)(C,{size:16}),FullWidth:(0,z.jsx)(ot,{size:16})},Fx=a(`ViewportControls`,Nx),Ix=a(`ViewportButton`,Nx),Lx=({children:e,title:t,onClick:n,isActive:r,disabled:i})=>(0,z.jsx)(`span`,{className:Ix({isActive:r}),suppressHydrationWarning:!0,children:(0,z.jsx)(Re,{type:`button`,title:t,disabled:i||r,onClick:n,suppressHydrationWarning:!0,children:(0,z.jsx)(`span`,{className:Ix(`inner`),children:e})})}),Rx=[{label:`25%`,value:.25},{label:`50%`,value:.5},{label:`75%`,value:.75},{label:`100%`,value:1},{label:`125%`,value:1.25},{label:`150%`,value:1.5},{label:`200%`,value:2}],zx=({viewport:e,isActive:t,onClick:n})=>{let r=I(`viewport-switch`,{label:e.label??``}),i=I(`viewport-switch-default`);return(0,z.jsx)(Lx,{title:e.label?r:i,onClick:n,isActive:t,children:typeof e.icon==`string`?Px[e.icon]||e.icon:e.icon||Px.Smartphone})},Bx=({autoZoom:e,zoom:t,onViewportChange:n,onZoom:r,fullScreen:i})=>{let a=L(e=>e.viewports),o=L(e=>e.state.ui.viewports),s=Rx.find(t=>t.value===e),c=I(`viewport-zoom-auto`,{zoom:(e*100).toFixed(0)}),l=(0,R.useMemo)(()=>[...Rx,...s?[]:[{value:e,label:c}]].filter(t=>t.value<=e).sort((e,t)=>e.value>t.value?1:-1),[e,c]),[u,d]=(0,R.useState)(o.current.width);(0,R.useEffect)(()=>{d(o.current.width)},[o.current]);let[f,p]=(0,R.useState)(!1),m=I(`viewport-zoom-out`),h=I(`viewport-zoom-in`),g=I(`viewport-toggle-menu`);return(0,z.jsxs)(`div`,{className:Fx({isExpanded:f,fullScreen:i}),suppressHydrationWarning:!0,children:[(0,z.jsx)(`div`,{className:Fx(`actions`),children:(0,z.jsxs)(`div`,{className:Fx(`actionsInner`),children:[a.map((e,t)=>(0,z.jsx)(zx,{viewport:e,onClick:()=>{d(e.width),n(e)},isActive:u===e.width},t)),(0,z.jsx)(`div`,{className:Fx(`divider`)}),(0,z.jsx)(Lx,{title:m,disabled:t<=l[0]?.value,onClick:e=>{e.stopPropagation(),r(l[Math.max(l.findIndex(e=>e.value===t)-1,0)].value)},children:(0,z.jsx)(Ve,{size:16})}),(0,z.jsx)(Lx,{title:h,disabled:t>=l[l.length-1]?.value,onClick:e=>{e.stopPropagation(),r(l[Math.min(l.findIndex(e=>e.value===t)+1,l.length-1)].value)},children:(0,z.jsx)(Te,{size:16})}),(0,z.jsxs)(`div`,{className:Fx(`zoom`),children:[(0,z.jsx)(`div`,{className:Fx(`divider`)}),(0,z.jsx)(`select`,{className:Fx(`zoomSelect`),value:t.toString(),onClick:e=>{e.stopPropagation()},onChange:e=>{r(parseFloat(e.currentTarget.value))},children:l.map(e=>(0,z.jsx)(`option`,{value:e.value,label:e.label},e.label))})]})]})}),(0,z.jsx)(`button`,{className:Fx(`toggleButton`),title:g,onClick:()=>p(e=>!e),children:f?(0,z.jsx)(tt,{size:16}):(0,z.jsx)(C,{size:16})})]})};c();var Vx={PuckCanvas:`_PuckCanvas_zw9iy_1`,"PuckCanvas-controls":`_PuckCanvas-controls_zw9iy_18`,"PuckCanvas--fullScreen":`_PuckCanvas--fullScreen_zw9iy_23`,"PuckCanvas-inner":`_PuckCanvas-inner_zw9iy_34`,"PuckCanvas-root":`_PuckCanvas-root_zw9iy_43`,"PuckCanvas--ready":`_PuckCanvas--ready_zw9iy_68`,"PuckCanvas-loader":`_PuckCanvas-loader_zw9iy_73`,"PuckCanvas--showLoader":`_PuckCanvas--showLoader_zw9iy_84`};c();var Hx=(0,R.createContext)(null),Ux=({children:e})=>{let t=(0,R.useRef)(null),n=(0,R.useMemo)(()=>({frameRef:t}),[]);return(0,z.jsx)(Hx.Provider,{value:n,children:e})},Wx=()=>{let e=(0,R.useContext)(Hx);if(e===null)throw Error(`useCanvasFrame must be used within a FrameProvider`);return e},Gx=a(`PuckCanvas`,Vx),Kx=!0,qx=150,Jx=()=>{let{frameRef:t}=Wx(),n=pe(t),{viewports:r=p,ui:i}=vS(),{dispatch:a,overrides:s,setUi:c,zoomConfig:l,setZoomConfig:u,status:d,iframe:f,_experimentalFullScreenCanvas:m}=L(En(e=>({dispatch:e.dispatch,overrides:e.overrides,setUi:e.setUi,zoomConfig:e.zoomConfig,setZoomConfig:e.setZoomConfig,status:e.status,iframe:e.iframe,_experimentalFullScreenCanvas:e._experimentalFullScreenCanvas}))),{leftSideBarVisible:h,rightSideBarVisible:g,leftSideBarWidth:_,rightSideBarWidth:v,viewports:y}=L(En(e=>({leftSideBarVisible:e.state.ui.leftSideBarVisible,rightSideBarVisible:e.state.ui.rightSideBarVisible,leftSideBarWidth:e.state.ui.leftSideBarWidth,rightSideBarWidth:e.state.ui.rightSideBarWidth,viewports:e.state.ui.viewports}))),[b,x]=(0,R.useState)(!1),S=(0,R.useRef)(!1),C=(0,R.useMemo)(()=>({children:e})=>(0,z.jsx)(z.Fragment,{children:e}),[]),w=(0,R.useMemo)(()=>s.preview||C,[s]),ee=(0,R.useCallback)(()=>{if(t.current){let e=t.current,n=Ae(e);return{width:n.contentBox.width,height:n.contentBox.height}}return{width:0,height:0}},[t]);(0,R.useEffect)(()=>{n()},[t,h,g,_,v,y]),(0,R.useEffect)(()=>{let{height:t}=ee();y.current.height===`auto`&&u(e(o({},l),{rootHeight:t/l.zoom}))},[l.zoom,ee,u]),(0,R.useEffect)(()=>{Kx&&n()},[y.current.width,y]),(0,R.useEffect)(()=>{if(!t.current)return;let e=new ResizeObserver(()=>{S.current||n()});return e.observe(t.current),()=>{e.disconnect()}},[t.current]);let[E,D]=(0,R.useState)(!1);(0,R.useEffect)(()=>{setTimeout(()=>{D(!0)},500)},[]);let O=P();return(0,R.useEffect)(()=>{if(typeof window>`u`||i?.viewports?.current)return;let n=window.innerWidth,a=t.current?.getBoundingClientRect().width;if(!n||!a||r.length===0)return;let s=Object.values(r).find(e=>e.width===`100%`),c=!!s,l=Object.entries(r).filter(([e,t])=>t.width!==`100%`).map(([e,t])=>({key:e,diff:Math.abs(n-(typeof t.width==`string`?n:t.width)),value:t})).sort((e,t)=>e.diff>t.diff?1:-1)[0].value;if(l.width<a&&c&&(l=s),f.enabled){let t=O.getState(),n={state:e(o({},t.state),{ui:e(o({},t.state.ui),{viewports:e(o({},t.state.ui.viewports),{current:e(o({},t.state.ui.viewports.current),{height:l?.height||`auto`,width:l?.width})})})})},r=t.history;t.history.histories.length===1&&(r=e(o({},r),{histories:[n]})),O.setState(e(o({},n),{history:r}))}},[r,t.current,f,O,i?.viewports?.current]),(0,z.jsxs)(`div`,{className:Gx({ready:d===`READY`||!f.enabled||!f.waitForStyles,showLoader:E,fullScreen:m}),onClick:e=>{let t=e.target;!t.hasAttribute(`data-puck-component`)&&!t.hasAttribute(`data-puck-dropzone`)&&a({type:`setUi`,ui:{itemSelector:null},recordHistory:!1})},children:[y.controlsVisible&&f.enabled&&(0,z.jsx)(`div`,{className:Gx(`controls`),children:(0,z.jsx)(Bx,{fullScreen:m,autoZoom:l.autoZoom,zoom:l.zoom,onViewportChange:t=>{x(!0),S.current=!0;let r=e(o({},t),{height:t.height||`auto`,zoom:l.zoom}),i={viewports:e(o({},y),{current:r})};c(i),Kx&&n({viewports:e(o({},y),{current:r})})},onZoom:t=>{x(!0),S.current=!0,u(e(o({},l),{zoom:t}))}})}),(0,z.jsxs)(`div`,{className:Gx(`inner`),ref:t,children:[(0,z.jsx)(`div`,{className:Gx(`root`),style:{width:f.enabled?y.current.width:`100%`,height:l.rootHeight,transform:f.enabled?`scale(${l.zoom})`:void 0,transition:b?`width ${qx}ms ease-out, height ${qx}ms ease-out, transform ${qx}ms ease-out`:``,overflow:f.enabled?void 0:`auto`},suppressHydrationWarning:!0,id:`puck-canvas-root`,onTransitionEnd:()=>{x(!1),S.current=!1},children:(0,z.jsx)(w,{children:(0,z.jsx)(xx,{})})}),(0,z.jsx)(`div`,{className:Gx(`loader`),children:(0,z.jsx)(T,{size:24})})]})]})};c();function Yx(t,n){let[r,i]=(0,R.useState)(null),a=(0,R.useRef)(null),s=L(e=>t===`left`?e.state.ui.leftSideBarWidth:e.state.ui.rightSideBarWidth);return(0,R.useEffect)(()=>{if(typeof window<`u`&&!s)try{let e=localStorage.getItem(`puck-sidebar-widths`);if(e){let r=JSON.parse(e)[t];r&&n({type:`setUi`,ui:{[t===`left`?`leftSideBarWidth`:`rightSideBarWidth`]:r}})}}catch(e){console.error(`Failed to load ${t} sidebar width from localStorage`,e)}},[n,t,s]),(0,R.useEffect)(()=>{s!==void 0&&i(s)},[s]),{width:r,setWidth:i,sidebarRef:a,handleResizeEnd:(0,R.useCallback)(r=>{n({type:`setUi`,ui:{[t===`left`?`leftSideBarWidth`:`rightSideBarWidth`]:r}});let i={};try{let e=localStorage.getItem(`puck-sidebar-widths`);i=e?JSON.parse(e):{}}catch(e){console.error(`Failed to save ${t} sidebar width to localStorage`,e)}finally{localStorage.setItem(`puck-sidebar-widths`,JSON.stringify(e(o({},i),{[t]:r})))}window.dispatchEvent(new CustomEvent(`viewportchange`,{bubbles:!0,cancelable:!1}))},[n,t])}}c(),c(),c();var Xx=a(`ResizeHandle`,{ResizeHandle:`_ResizeHandle_144bf_2`,"ResizeHandle--left":`_ResizeHandle--left_144bf_16`,"ResizeHandle--right":`_ResizeHandle--right_144bf_20`}),Zx=({position:e,sidebarRef:t,onResize:n,onResizeEnd:r})=>{let{frameRef:i}=Wx(),a=pe(i),o=(0,R.useRef)(null),s=(0,R.useRef)(!1),c=(0,R.useRef)(0),l=(0,R.useRef)(0),u=(0,R.useCallback)(t=>{if(!s.current)return;let r=t.clientX-c.current,i=e===`left`?l.current+r:l.current-r;n(Math.max(192,i)),t.preventDefault()},[n,e]),d=(0,R.useCallback)(()=>{if(!s.current)return;s.current=!1,document.body.style.cursor=``,document.body.style.userSelect=``;let e=document.getElementById(`resize-overlay`);e&&document.body.removeChild(e),document.removeEventListener(`mousemove`,u),document.removeEventListener(`mouseup`,d),r(t.current?.getBoundingClientRect().width||0),a()},[r]),f=(0,R.useCallback)(e=>{s.current=!0,c.current=e.clientX,l.current=t.current?.getBoundingClientRect().width||0,document.body.style.cursor=`col-resize`,document.body.style.userSelect=`none`;let n=document.createElement(`div`);n.id=`resize-overlay`,n.setAttribute(`data-resize-overlay`,``),document.body.appendChild(n),document.addEventListener(`mousemove`,u),document.addEventListener(`mouseup`,d),e.preventDefault()},[e,u,d]);return(0,z.jsx)(`div`,{ref:o,className:Xx({[e]:!0}),onMouseDown:f})};c();var Qx=a(`Sidebar`,{Sidebar:`_Sidebar_16oed_1`,"Sidebar--isVisible":`_Sidebar--isVisible_16oed_10`,"Sidebar--left":`_Sidebar--left_16oed_14`,"Sidebar--right":`_Sidebar--right_16oed_34`,"Sidebar-resizeHandle":`_Sidebar-resizeHandle_16oed_51`}),$x=({position:e,sidebarRef:t,isVisible:n,onResize:r,onResizeEnd:i,children:a})=>(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(`div`,{ref:t,className:Qx({[e]:!0,isVisible:n}),children:a}),(0,z.jsx)(`div`,{className:`${Qx(`resizeHandle`)}`,children:(0,z.jsx)(Zx,{position:e,sidebarRef:t,onResize:r,onResizeEnd:i})})]});c();var eS=e=>{let t=e;for(;t&&t!==document.body;){let e=window.getComputedStyle(t);if(e.display===`none`||e.visibility===`hidden`||e.opacity===`0`||t.getAttribute(`aria-hidden`)===`true`||t.hasAttribute(`hidden`))return!1;t=t.parentElement}return!0},tS=e=>{if(e?.defaultPrevented)return!0;let t=(e?.composedPath)?.call(e)[0]||e?.target||document.activeElement;if(t instanceof HTMLElement){let e=t.tagName.toLowerCase();if(e===`input`||e===`textarea`||e===`select`||t.isContentEditable)return!0;let n=t.getAttribute(`role`);if(n===`textbox`||n===`combobox`||n===`searchbox`||n===`listbox`||n===`grid`)return!0}let n=document.querySelector(`dialog[open], [aria-modal="true"], [role="dialog"], [role="alertdialog"]`);return!!(n&&eS(n))},nS=()=>{let e=P(),t=(0,R.useCallback)(t=>{if(tS(t))return!1;let{state:n,dispatch:r,permissions:i,selectedItem:a}=e.getState(),o=n.ui?.itemSelector;return!o?.zone||!a||!i.getPermissions({item:a}).delete||r({type:`remove`,index:o.index,zone:o.zone}),!0},[e]);ft({delete:!0},t),ft({backspace:!0},t)};c(),c();var rS={Nav:`_Nav_vll2r_1`,"Nav-list":`_Nav-list_vll2r_5`,"Nav-mobileActions":`_Nav-mobileActions_vll2r_23`,"NavItem-link":`_NavItem-link_vll2r_39`,NavItem:`_NavItem_vll2r_39`,"NavItem-linkIcon":`_NavItem-linkIcon_vll2r_90`,"NavItem--active":`_NavItem--active_vll2r_100`,"NavItem--mobileOnly":`_NavItem--mobileOnly_vll2r_136`,"NavItem--desktopOnly":`_NavItem--desktopOnly_vll2r_141`},iS=a(`Nav`,rS),aS=a(`NavItem`,rS),oS=({label:e,icon:t,onClick:n,isActive:r,mobileOnly:i,desktopOnly:a})=>(0,z.jsx)(`li`,{className:aS({active:r,mobileOnly:i,desktopOnly:a}),children:n&&(0,z.jsxs)(`div`,{className:aS(`link`),onClick:n,children:[t&&(0,z.jsx)(`span`,{className:aS(`linkIcon`),children:t}),(0,z.jsx)(`span`,{className:aS(`linkLabel`),children:e})]})}),sS=({items:e,mobileActions:t})=>(0,z.jsxs)(`nav`,{className:iS(),children:[(0,z.jsx)(`ul`,{className:iS(`list`),children:Object.entries(e).map(([e,t])=>(0,z.jsx)(oS,o({},t),e))}),t&&(0,z.jsx)(`div`,{className:iS(`mobileActions`),children:t})]});c();var cS=e=>o({enabled:!0,waitForStyles:!0,syncHostStyles:!0},e),lS=a(`Puck`,wx),uS=a(`PuckLayout`,wx),dS=a(`PuckPluginTab`,wx),fS=typeof window>`u`?R.useEffect:R.useLayoutEffect,pS=()=>{let e=I(`label-page`),t=L(e=>e.selectedItem?e.config.components[e.selectedItem.type]?.label??e.selectedItem.type.toString():e.config.root?.label);return(0,z.jsx)(Mx,{noBorderTop:!0,showBreadcrumbs:!0,title:t||e,children:(0,z.jsx)(Fb,{})})},mS=({children:e,visible:t,mobileOnly:n})=>(0,z.jsx)(`div`,{className:dS({visible:t,mobileOnly:n}),children:(0,z.jsx)(`div`,{className:dS(`body`),children:e})}),hS=({children:e})=>{let{iframe:t,initialHistory:n,plugins:r,height:i}=vS(),a=L(e=>e.dnd),s=(0,R.useMemo)(()=>cS(t),[t]);ex();let c=L(e=>e.dispatch),l=L(e=>e.state.ui.leftSideBarVisible),u=L(e=>e.state.ui.rightSideBarVisible),d=L(e=>e.instanceId),{width:f,setWidth:p,sidebarRef:h,handleResizeEnd:g}=Yx(`left`,c),{width:_,setWidth:v,sidebarRef:y,handleResizeEnd:b}=Yx(`right`,c);(0,R.useEffect)(()=>{window.matchMedia(`(min-width: 638px)`).matches||c({type:`setUi`,ui:{leftSideBarVisible:!1,rightSideBarVisible:!1}});let e=()=>{window.matchMedia(`(min-width: 638px)`).matches||c({type:`setUi`,ui:e=>o(o({},e),e.rightSideBarVisible?{leftSideBarVisible:!1}:{})})};return window.addEventListener(`resize`,e),()=>{window.removeEventListener(`resize`,e)}},[]);let x=L(e=>e.overrides),S=(0,R.useMemo)(()=>x.puck||Tx,[x]),[C,w]=(0,R.useState)(!1);fS(()=>{w(!0)},[]);let T=L(e=>e.status===`READY`);ut(),(0,R.useEffect)(()=>{if(T&&s.enabled){let e=Yg();if(e)return Ye(e)}},[T,s.enabled]),Ex(),nS();let ee={};f&&(ee[`--puck-user-sidebar-left-width`]=`${f}px`),_&&(ee[`--puck-user-sidebar-right-width`]=`${_}px`);let E=L(e=>e.setUi),D=L(e=>e.state.ui.plugin?.current),O=P(),te=(0,R.useMemo)(()=>!!r?.find(e=>e.name===`legacy-side-bar`),[r]),ne=I(`plugin-blocks`),re=I(`plugin-outline`),ie=I(`plugin-fields`),k=(0,R.useMemo)(()=>{let e={},t=[cy({label:ne}),Tb({label:re})],n=e=>e.name===`legacy-side-bar`?-1:0,i=[...t,...r??[]].sort((e,t)=>n(e)-n(t));return r?.some(e=>e.name===`fields`)||i.push(Rb({label:ie})),i?.forEach(t=>{t.name&&t.render&&(e[t.name]&&delete e[t.name],e[t.name]={label:t.label??t.name,icon:t.icon??(0,z.jsx)(Ge,{}),onClick:()=>{t.name===D?E(l?{leftSideBarVisible:!1}:{leftSideBarVisible:!0}):t.name&&E({plugin:{current:t.name},leftSideBarVisible:!0})},isActive:l&&D===t.name,render:t.render,mobilePanelHeight:t.mobilePanelHeight??`toggle`,mobileOnly:te||t.mobileOnly,desktopOnly:t.name===`legacy-side-bar`||t.desktopOnly})}),e},[r,D,O,l,ne,re,ie]),ae=k[D??Object.keys(k)[0]]?.mobilePanelHeight??`toggle`;(0,R.useEffect)(()=>{if(!D){let e=Object.keys(k);E({plugin:{current:e[0]}})}},[k,D]);let oe=k.fields&&k.fields.mobileOnly===!1,se=L(e=>e.state.ui.mobilePanelExpanded??!1),ce=I(`layout-maximize`),le=I(`layout-minimize`);return(0,z.jsxs)(`div`,{className:`Puck ${lS({hidePlugins:te})}`,id:d,style:{height:i,visibility:`hidden`},children:[(0,z.jsx)(tv,{disableAutoScroll:a?.disableAutoScroll,behavior:a?.behavior,children:(0,z.jsx)(S,{children:e||(0,z.jsx)(Ux,{children:(0,z.jsx)(`div`,{className:uS({leftSideBarVisible:l,mounted:C,rightSideBarVisible:!oe&&u,isExpanded:se,mobilePanelHeightToggle:ae===`toggle`,mobilePanelHeightMinContent:ae===`min-content`}),style:{height:i},children:(0,z.jsxs)(`div`,{className:uS(`inner`),style:ee,children:[(0,z.jsx)(`div`,{className:uS(`header`),children:(0,z.jsx)(Ax,{hidePlugins:te})}),(0,z.jsx)(`div`,{className:uS(`nav`),children:(0,z.jsx)(sS,{items:k,mobileActions:l&&ae===`toggle`&&(0,z.jsx)(Re,{type:`button`,title:se?le:ce,onClick:()=>{E({mobilePanelExpanded:!se})},children:se?(0,z.jsx)(m,{size:21}):(0,z.jsx)(pt,{size:21})})})}),(0,z.jsx)($x,{position:`left`,sidebarRef:h,isVisible:l,onResize:p,onResizeEnd:g,children:Object.entries(k).map(([e,{mobileOnly:t,render:n,label:r}])=>(0,z.jsx)(mS,{visible:D===e,mobileOnly:t,children:(0,z.jsx)(n,{})},e))}),(0,z.jsx)(Jx,{}),!oe&&(0,z.jsx)($x,{position:`right`,sidebarRef:y,isVisible:u,onResize:v,onResizeEnd:b,children:(0,z.jsx)(pS,{})})]})})})})}),(0,z.jsx)(`div`,{id:`puck-portal-root`,className:lS(`portal`)})]})},gS=(0,R.createContext)({});function _S(e){return(0,z.jsx)(gS.Provider,{value:e,children:e.children})}var vS=()=>(0,R.useContext)(gS);function yS({children:t}){let{config:n,data:r,ui:i,onChange:a,permissions:s={},plugins:c,overrides:l,viewports:u=p,iframe:d,dnd:f,initialHistory:m,metadata:h,dictionary:_,onAction:v,fieldTransforms:y,_experimentalFullScreenCanvas:b,_experimentalVirtualization:x}=vS(),C=(0,R.useMemo)(()=>cS(d),[d]),[w]=(0,R.useState)(()=>{let t=o(o({},ze.ui),i),a={};Object.keys(r?.root||{}).length>0&&!r?.root?.props&&console.warn("Warning: Defining props on `root` is deprecated. Please use `root.props`, or republish this page to migrate automatically.");let s=r?.root?.props||r?.root||{},c=o(o({},n.root?.defaultProps),s),l=re(S(e(o({},r?.root),{props:c})),n),u=e(o({},ze),{data:e(o({},r),{root:e(o({},r?.root),{props:l.props}),content:r.content||[]}),ui:e(o(o({},t),a),{componentList:n.categories?Object.entries(n.categories).reduce((t,[n,r])=>e(o({},t),{[n]:{title:r.title,components:r.components,expanded:r.defaultExpanded,visible:r.visible}}),{}):{}})});return te(u,n)}),{appendData:T=!0}=m||{},[ee]=(0,R.useState)([...m?.histories||[],...T?[{state:w}]:[]].map(t=>{let r=o(o({},w),t.state);return t.state.indexes||(r=te(r,n)),e(o({},t),{state:r})})),E=(0,R.useMemo)(()=>m?.index!==void 0&&m?.index>=0&&m?.index<ee.length?m?.index:ee.length-1,[]),D=ee[E].state,O=Cx({overrides:l,plugins:c}),ne=(0,R.useMemo)(()=>{let e=(c||[]).reduce((e,t)=>o(o({},e),t.fieldTransforms),{});return o(o({},e),y)},[y,c]),ie=Pg(),k=(0,R.useCallback)(e=>({instanceId:ie,state:e,config:n,plugins:c||[],overrides:O,viewports:u,iframe:C,_experimentalFullScreenCanvas:!!b,_experimentalVirtualization:!!x,onAction:v,metadata:h,dictionary:_||{},dnd:f,fieldTransforms:ne}),[ie,D,n,c,O,u,C,b,x,v,h,_,f,ne]),[ae]=(0,R.useState)(()=>De(k(D)));(0,R.useEffect)(()=>{},[ae]),(0,R.useEffect)(()=>{let e=ae.getState().state;ae.setState(o({},k(e)))},[k]),g(ae,{histories:ee,index:E,initialAppState:D});let oe=(0,R.useRef)(null);(0,R.useEffect)(()=>ae.subscribe(e=>e.state.data,e=>{if(a){if(Le(e,oe.current))return;a(e),oe.current=e}}),[a]),ct(ae,s);let se=ey(ae);return(0,R.useEffect)(()=>{let{resolveAndCommitData:e}=ae.getState();setTimeout(()=>{e()},0)},[]),(0,z.jsx)(at.Provider,{value:ae,children:(0,z.jsx)(Qv.Provider,{value:se,children:t})})}function bS(t){return(0,z.jsx)(_S,e(o({},t),{children:(0,z.jsx)(yS,e(o({},t),{children:(0,z.jsx)(hS,{children:t.children})}))}))}bS.Components=oy,bS.Fields=Fb,bS.Layout=hS,bS.Outline=Cb,bS.Preview=xx,c(),c(),c(),c(),c(),c(),c(),c(),c(),c(),c(),c(),c(),c();var xS=/^PAGE-[A-Z0-9-]+$/,SS=/^[a-z][a-z0-9-]*$/,CS=/^#[0-9a-f]{6}$/i,wS=/^\d{1,2}px$/,TS=new Set([`none`,`gentle`,`expressive`]);function ES(e){return JSON.parse(JSON.stringify(e))}function DS(e,t){if(!e)throw Error(t)}function OS(e,t){return`${e}@${t}`}function kS(e,t){let[n,r]=t.split(`.`);return e[n]?.[r]}function AS(e,t,n){let[r,i]=t.split(`.`);DS(r===`props`||r===`appearance`,`Unzulässiges Editor-Ziel ${t}.`),e[r][i]=ES(n)}function jS(e){return new Map(e.modules.map(e=>[OS(e.type,e.version),e]))}function MS(e){let t=new Map;return e.regions.flatMap(e=>e.modules).forEach(e=>{let n=OS(e.type,e.version);t.has(n)||t.set(n,e)}),t}function NS(e,t,n){let r=String(t||e).toLowerCase().replace(/[^a-z0-9-]+/g,`-`).replace(/^-+|-+$/g,``).slice(-54),i=SS.test(r)?r:`module-${r||`block`}`,a=i,o=2;for(;n.has(a);)a=`${i.slice(0,55)}-${o}`,o+=1;return n.add(a),a}function PS(e,t){let n={};return e.data_inputs.forEach(r=>{if(t.bindings[r.name])n[r.name]=r.name;else if(r.required)throw Error(`${e.title}: Für ${r.name} fehlt ein Seitenbinding.`)}),n}function FS(e,t){let n=new Set(t.capability_context.module_permission_grants);e.capabilities.requires.forEach(t=>{DS(n.has(t),`${e.title}: Die Seite gewährt ${t} nicht.`)})}function IS(e){let t=e.props.items;Array.isArray(t)&&t.forEach((t,n)=>{DS(t&&typeof t==`object`&&!Array.isArray(t),`${e.id}: Wegkarte ${n+1} ist ungültig.`),DS(typeof t.href==`string`&&t.href.startsWith(`/`),`${e.id}: Wegkarten dürfen nur interne Pfade verwenden.`);let r=new URL(t.href,`https://gemden.red`);DS(r.origin===`https://gemden.red`&&[`http:`,`https:`].includes(r.protocol),`${e.id}: Unsicheres Linkziel blockiert.`)})}function LS(e){DS(CS.test(e.tokens.accent),`Die Akzentfarbe ist ungültig.`),DS(CS.test(e.tokens.accent_deep),`Die dunkle Akzentfarbe ist ungültig.`),DS(CS.test(e.tokens.surface),`Die Flächenfarbe ist ungültig.`),DS(wS.test(e.tokens.radius),`Der Eckenradius ist ungültig.`),DS(TS.has(e.motion),`Das Bewegungsprofil ist ungültig.`)}function RS(e,t){DS(e&&xS.test(e.id||``),`Das GemDen-Seitendokument ist ungültig.`),DS(Array.isArray(e.regions)&&e.regions.length===1,`Der Piloteditor unterstützt genau eine Seitenregion.`);let n=jS(t);return{content:e.regions[0].modules.map(e=>{let t=n.get(OS(e.type,e.version));DS(t?.editor,`${e.type}@${e.version} besitzt keinen Editor-Vertrag.`);let r={id:e.id};return t.editor.fields.forEach(t=>{r[t.id]=ES(kS(e,t.target))}),{type:OS(e.type,e.version),props:r}}),root:{props:{accent:e.theme.tokens.accent,accent_deep:e.theme.tokens.accent_deep,surface:e.theme.tokens.surface,radius:e.theme.tokens.radius,motion:e.theme.motion}}}}function zS(e,t,n){DS(e&&Array.isArray(e.content),`Der Editor-Entwurf ist ungültig.`);let r=ES(t);DS(r.regions.length===1,`Der Piloteditor unterstützt genau eine Seitenregion.`);let i=jS(n),a=new Map(r.regions[0].modules.map(e=>[e.id,e])),o=MS(r),s=new Set;r.regions[0].modules=e.content.map(e=>{let t=i.get(e.type);DS(t,`Nicht registrierter Editor-Baustein ${e.type}.`),FS(t,r);let n=a.get(e.props?.id),c=n&&n.type===t.type&&n.version===t.version?n:null,l=c||o.get(OS(t.type,t.version)),u=l?ES(l):{id:``,type:t.type,version:t.version,bindings:PS(t,r),props:ES(t.editor.default_props),appearance:ES(t.editor.default_appearance)};return u.id=NS(t.type,e.props?.id,s),u.type=t.type,u.version=t.version,c||(u.bindings=PS(t,r)),t.editor.fields.forEach(t=>{e.props&&e.props[t.id]!==void 0&&AS(u,t.target,e.props[t.id])}),IS(u),u});let c=e.root?.props||e.root||{};return r.theme.tokens.accent=c.accent??r.theme.tokens.accent,r.theme.tokens.accent_deep=c.accent_deep??r.theme.tokens.accent_deep,r.theme.tokens.surface=c.surface??r.theme.tokens.surface,r.theme.tokens.radius=c.radius??r.theme.tokens.radius,r.theme.motion=c.motion??r.theme.motion,LS(r.theme),r}function BS(e){return DS(xS.test(e||``),`Ungültige PAGE-ID für den lokalen Entwurf.`),`gemden:page-draft:v1:${e}`}function VS(e,t=new Date().toISOString()){return DS(e&&xS.test(e.id||``),`Ungültiges Seitendokument für den lokalen Entwurf.`),{format:`gemden-local-draft`,version:1,page_id:e.id,saved_at:t,document:ES(e)}}function HS(e){return JSON.parse(JSON.stringify(e))}function US(e,t){let[n,r]=t.split(`.`);return e[n]?.[r]}function WS(e){return`${e.type}@${e.version}`}function GS(e){return(e.options||[]).map(e=>({label:e.label,value:e.value}))}function KS(e){if(e.control===`text`)return{type:`text`,label:e.label};if(e.control===`textarea`)return{type:`textarea`,label:e.label};if(e.control===`select`)return{type:`select`,label:e.label,options:GS(e)};if(e.control===`link-list`)return{type:`array`,label:e.label,min:0,max:8,getItemSummary:e=>e?.title||`Neue Wegkarte`,defaultItemProps:{icon:`✨`,title:`Neue Wegkarte`,description:`Beschreibe, wohin dieser Weg führt.`,label:`Öffnen →`,href:`/community/`,tone:`ruby`},arrayFields:{icon:{type:`text`,label:`Symbol`},title:{type:`text`,label:`Titel`},description:{type:`textarea`,label:`Beschreibung`},label:{type:`text`,label:`Linktext`},href:{type:`text`,label:`Interner Pfad`},tone:{type:`select`,label:`Farbton`,options:[{label:`Rubin`,value:`ruby`},{label:`Gold`,value:`gold`},{label:`Minze`,value:`mint`},{label:`Neutral`,value:`neutral`}]}}};throw Error(`Unbekanntes Editor-Steuerelement ${e.control}.`)}function qS(e,t){let n=new Map(Object.entries(t).filter(([,e])=>Array.isArray(e)).map(([e,t])=>[e,new Map(t.map(e=>[e.id,e]))])),r=t=>{let r=e.bindings[t];return!r||r.kind!==`entity`?null:n.get(r.collection)?.get(r.id)||null},i=r(`member`);return{member:i,dynasty:r(`dynasty`),skills:(i?.skill_ids||[]).map(e=>n.get(`skills`)?.get(e)).filter(Boolean),evidence:(i?.evidence_ids||[]).map(e=>n.get(`evidence`)?.get(e)).filter(Boolean)}}function JS({type:e,tone:t,motion:n,children:r}){return(0,z.jsx)(`section`,{className:`gemden-preview-module tone-${t||`neutral`} motion-${n||`none`}`,"data-preview-type":e,children:r})}function YS({props:e,data:t,type:n}){return(0,z.jsxs)(JS,{type:n,tone:e.tone,motion:e.motion,children:[(0,z.jsxs)(`div`,{className:`preview-hero-copy`,children:[(0,z.jsx)(`p`,{className:`preview-eyebrow`,children:e.eyebrow}),(0,z.jsx)(`h1`,{children:t.member?.name||`Mitglied`}),(0,z.jsx)(`p`,{className:`preview-lead`,children:t.member?.bio||`Hier entsteht eine persönliche GemDen-Seite.`}),(0,z.jsxs)(`div`,{className:`preview-chips`,children:[t.member?.id&&(0,z.jsx)(`span`,{children:t.member.id}),t.dynasty?.name&&(0,z.jsx)(`span`,{children:t.dynasty.name})]})]}),(0,z.jsx)(`div`,{className:`preview-gem`,role:`img`,"aria-label":e.visual_label||`Profilmotiv`,children:`◆`})]})}function XS({props:e,data:t,type:n}){return(0,z.jsxs)(JS,{type:n,tone:e.tone,motion:e.motion,children:[(0,z.jsx)(`p`,{className:`preview-eyebrow`,children:e.eyebrow}),(0,z.jsx)(`h2`,{children:e.title}),(0,z.jsx)(`p`,{className:`preview-intro`,children:e.intro}),(0,z.jsx)(`div`,{className:`preview-card-grid`,children:t.skills.map(e=>(0,z.jsxs)(`article`,{className:`preview-card`,children:[(0,z.jsx)(`strong`,{children:e.name}),(0,z.jsx)(`p`,{children:e.description}),(0,z.jsx)(`small`,{children:e.id})]},e.id))})]})}function ZS({props:e,data:t,type:n}){return(0,z.jsxs)(JS,{type:n,tone:e.tone,motion:e.motion,children:[(0,z.jsx)(`p`,{className:`preview-eyebrow`,children:e.eyebrow}),(0,z.jsx)(`h2`,{children:e.title}),(0,z.jsx)(`div`,{className:`preview-card-grid`,children:t.evidence.map(e=>(0,z.jsxs)(`article`,{className:`preview-card`,children:[(0,z.jsx)(`strong`,{children:e.title}),(0,z.jsx)(`p`,{children:e.summary||e.description}),(0,z.jsx)(`small`,{children:e.id})]},e.id))}),(0,z.jsxs)(`p`,{className:`preview-boundary`,children:[(0,z.jsx)(`strong`,{children:`Grenze:`}),` `,e.boundary]})]})}function QS({props:e,type:t}){return(0,z.jsxs)(JS,{type:t,tone:e.tone,motion:e.motion,children:[(0,z.jsx)(`p`,{className:`preview-eyebrow`,children:e.eyebrow}),(0,z.jsx)(`h2`,{children:e.title}),(0,z.jsx)(`div`,{className:`preview-card-grid`,children:(e.items||[]).map((e,t)=>(0,z.jsxs)(`article`,{className:`preview-card link-tone-${e.tone||`neutral`}`,children:[(0,z.jsx)(`span`,{className:`preview-icon`,"aria-hidden":`true`,children:e.icon}),(0,z.jsx)(`strong`,{children:e.title}),(0,z.jsx)(`p`,{children:e.description}),(0,z.jsx)(`span`,{className:`preview-link`,children:e.label})]},`${e.href}-${t}`))})]})}function $S(e,t,n){return e===`gemden.profile-hero`?(0,z.jsx)(YS,{props:t,data:n,type:e}):e===`gemden.skill-grid`?(0,z.jsx)(XS,{props:t,data:n,type:e}):e===`gemden.evidence-grid`?(0,z.jsx)(ZS,{props:t,data:n,type:e}):e===`gemden.link-cards`?(0,z.jsx)(QS,{props:t,type:e}):(0,z.jsx)(JS,{type:e,tone:t.tone,motion:t.motion,children:(0,z.jsxs)(`p`,{children:[`Vorschau für `,e]})})}function eC(e,t,n){let r=qS(e,n),i={},a={};return t.modules.forEach(e=>{let t=WS(e),n={},o={props:HS(e.editor.default_props),appearance:HS(e.editor.default_appearance)},s={};e.editor.fields.forEach(e=>{n[e.id]=KS(e),s[e.id]=HS(US(o,e.target))}),a[t]={label:e.title,fields:n,defaultProps:s,render:t=>$S(e.type,t,r)};let c=i[e.editor.category]||{title:e.editor.category_title,components:[],defaultExpanded:!0};c.components.push(t),i[e.editor.category]=c}),{categories:i,components:a,root:{label:`Seitendesign`,fields:{accent:{type:`text`,label:`Akzentfarbe (Hex)`},accent_deep:{type:`text`,label:`Dunkle Akzentfarbe (Hex)`},surface:{type:`text`,label:`Flächenfarbe (Hex)`},radius:{type:`select`,label:`Ecken`,options:[{label:`Klar · 12 px`,value:`12px`},{label:`Weich · 20 px`,value:`20px`},{label:`Rund · 30 px`,value:`30px`},{label:`Sehr rund · 40 px`,value:`40px`}]},motion:{type:`select`,label:`Bewegungsprofil`,options:[{label:`Keine Bewegung`,value:`none`},{label:`Sanft`,value:`gentle`},{label:`Ausdrucksstark`,value:`expressive`}]}},render:({children:e,accent:t,accent_deep:n,surface:r,radius:i,motion:a})=>(0,z.jsx)(`main`,{className:`gemden-editor-canvas theme-motion-${a||`none`}`,style:{"--editor-accent":t,"--editor-accent-deep":n,"--editor-surface":r,"--editor-radius":i},children:e})}}}var tC=Object.freeze({"PAGE-MEM-JULIUS":`/assets/data/pages/julius.v1.json`}),nC={"header-publish":`Entwurf sichern`,"header-undo":`Rückgängig`,"header-redo":`Wiederholen`,"header-toggle-leftsidebar":`Bausteine einblenden`,"header-toggle-rightsidebar":`Einstellungen einblenden`,"header-toggle-menubar":`Menü einblenden`,"action-selectparent":`Übergeordneten Bereich wählen`,"action-duplicate":`Duplizieren`,"action-delete":`Entfernen`,"label-page":`Seitendesign`,"label-component":`Baustein`,"outline-empty":`Noch keine Bausteine`,"outline-header-title":`Aufbau`,"outline-header-collapseall":`Alle einklappen`,"outline-item-collapse":`Einklappen`,"outline-item-expand":`Ausklappen`,"outline-item-duplicate":`Duplizieren`,"outline-item-delete":`Entfernen`,"drawer-category-collapse":`{title} einklappen`,"drawer-category-expand":`{title} ausklappen`,"drawer-category-other":`Weitere`,"field-arrayitem-summary":`Eintrag #{index}`,"field-arrayitem-duplicate":`Duplizieren`,"field-arrayitem-delete":`Entfernen`,"plugin-blocks":`Bausteine`,"plugin-outline":`Aufbau`,"plugin-fields":`Einstellungen`,"plugin-components":`Bausteine`,"loader-loading":`Wird geladen`};function rC(e){return e?.message||`Unbekannter Fehler`}function iC(e){let t=new Blob([`${JSON.stringify(e,null,2)}\n`],{type:`application/json`}),n=URL.createObjectURL(t),r=window.document.createElement(`a`);r.href=n,r.download=`${e.id.toLowerCase()}.json`,r.click(),URL.revokeObjectURL(n)}async function aC(e){let t=await fetch(e,{credentials:`same-origin`,headers:{Accept:`application/json`}});if(!t.ok)throw Error(`${e}: HTTP ${t.status}`);return t.json()}function oC(e){try{let t=localStorage.getItem(BS(e.id));if(!t)return e;let n=JSON.parse(t);return n?.format!==`gemden-local-draft`||n?.version!==1||n?.page_id!==e.id?e:n.document}catch(t){return console.warn(`Lokaler GemDen-Entwurf konnte nicht geladen werden:`,t),e}}function sC({status:e}){return(0,z.jsxs)(`div`,{className:`editor-status editor-status-${e.kind}`,role:`status`,"aria-live":`polite`,children:[(0,z.jsx)(`span`,{"aria-hidden":`true`,children:e.kind===`success`?`✓`:e.kind===`error`?`!`:`◆`}),(0,z.jsx)(`p`,{children:e.message})]})}function cC({page:e,catalog:t,capabilities:n,community:r,restoredLocal:i}){let[a,o]=(0,R.useState)({kind:`info`,message:i?`Lokaler Entwurf wiederhergestellt. Noch nichts wurde veröffentlicht.`:`Werkstatt bereit. Änderungen werden erst nach „Entwurf sichern“ gespeichert.`}),s=(0,R.useMemo)(()=>eC(e,t,r),[e,t,r]),c=(0,R.useMemo)(()=>RS(e,t),[e,t]);function l(r){let i=zS(r,e,t);return window.GemDenModules.validatePageDocument(i,t,n),i}async function u(e){o({kind:`info`,message:`Entwurf wird geprüft und gesichert …`});try{let t=l(e),n=VS(t);localStorage.setItem(BS(t.id),JSON.stringify(n)),o({kind:`success`,message:`Lokal in diesem Browser gesichert. Es wurde nichts veröffentlicht.`})}catch(e){o({kind:`error`,message:`Nicht gespeichert: ${rC(e)}`})}}function d({children:e}){let t=ty();return(0,z.jsxs)(`div`,{className:`editor-header-actions`,children:[e,(0,z.jsx)(`button`,{type:`button`,onClick:()=>{try{iC(l(t().appState.data)),o({kind:`success`,message:`Geprüftes Seitendokument wurde heruntergeladen.`})}catch(e){o({kind:`error`,message:`Download blockiert: ${rC(e)}`})}},children:`JSON laden`}),(0,z.jsx)(`a`,{href:`/community/mitglieder/julius/`,target:`_blank`,rel:`noreferrer`,children:`Live-Seite ↗`})]})}return(0,z.jsxs)(`div`,{className:`editor-app`,children:[(0,z.jsx)(sC,{status:a}),(0,z.jsx)(bS,{config:s,data:c,onPublish:u,overrides:{headerActions:d},headerTitle:`GemDen-Seitenwerkstatt`,headerPath:`Julius · lokaler Pilot`,dictionary:nC,iframe:{enabled:!0,syncHostStyles:!0,waitForStyles:!0},viewports:[{width:360,height:`auto`,label:`Handy`,icon:`Smartphone`},{width:768,height:`auto`,label:`Tablet`,icon:`Tablet`},{width:1280,height:`auto`,label:`Desktop`,icon:`Monitor`},{width:`100%`,height:`auto`,label:`Volle Breite`,icon:`Monitor`}],height:`100dvh`})]})}function lC({error:e}){return(0,z.jsxs)(`main`,{className:`editor-fatal`,children:[(0,z.jsx)(`span`,{"aria-hidden":`true`,children:`◆`}),(0,z.jsx)(`h1`,{children:`Die Seitenwerkstatt konnte nicht starten.`}),(0,z.jsx)(`p`,{children:rC(e)}),(0,z.jsx)(`a`,{href:`/community/mitglieder/julius/`,children:`Zur unveränderten Julius-Seite`})]})}async function uC(){let e=tC[new URLSearchParams(location.search).get(`page`)||`PAGE-MEM-JULIUS`];if(!e)throw Error(`Diese PAGE-ID ist für den Piloteditor nicht freigeschaltet.`);if(!window.GemDenModules)throw Error(`Der GemDen-Vertragsprüfer ist nicht verfügbar.`);let[t,n,r,i]=await Promise.all([aC(e),aC(`/assets/data/modules.v1.json`),aC(`/assets/data/capabilities.v1.json`),aC(`/assets/data/community-v0.1.json`)]);window.GemDenModules.validateCapabilityCatalog(r),window.GemDenModules.validateModuleCatalog(n,r),window.GemDenModules.validatePageDocument(t,n,r);let a=oC(t),o=JSON.stringify(a)!==JSON.stringify(t);window.GemDenModules.validatePageDocument(a,n,r),(0,St.createRoot)(document.getElementById(`editor-root`)).render((0,z.jsx)(cC,{page:a,catalog:n,capabilities:r,community:i,restoredLocal:o}))}uC().catch(e=>{console.error(`GemDen-Seitenwerkstatt:`,e),(0,St.createRoot)(document.getElementById(`editor-root`)).render((0,z.jsx)(lC,{error:e}))});export{Ct as a,rn as i,on as n,cn as r,jm as t};