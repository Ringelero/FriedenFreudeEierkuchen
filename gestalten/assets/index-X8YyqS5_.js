const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/loaded-SMPR6KZF-BotSzOf1.js","assets/jsx-runtime-B1l2Nbuf.js","assets/chunk-K2LNXU54-Bz6PS-Qy.js","assets/chunk-67Y7M4OJ-CpXa6C64.js","assets/dist-eu5lGpyp.js","assets/dist-CUsFw937.js","assets/loaded-JKA25A3T-DDc_Wk0u.js","assets/chunk-4P4VZS4P-BO83D-k1.js","assets/loaded-36WRJPBT-CC9tTNA_.js","assets/chunk-NJTGWYYH-xb-LxBpe.js","assets/full-7ZJV44EE-5Ut-KPOD.js","assets/Render-DQXAYUBI-DmuA4-Ij.js","assets/chunk-2CNEFIQP-BVHILT37.js","assets/Editor-44C53YAG-CkyqfNEl.js"])))=>i.map(i=>d[i]);
import{a as e,c as t,d as n,i as r,l as i,n as a,o,r as s,s as c,t as l,u}from"./jsx-runtime-B1l2Nbuf.js";import{$ as d,A as f,At as p,B as m,Bt as h,Ct as g,Dt as _,Et as v,F as y,Ft as b,G as x,Gt as S,H as C,Ht as w,I as T,It as ee,J as E,Jt as D,K as te,Kt as ne,L as re,Lt as ie,M as ae,Mt as O,N as oe,Nt as se,Ot as ce,P as le,Pt as ue,Q as k,R as de,Rt as A,S as fe,St as pe,Tt as me,U as he,Ut as ge,V as _e,Vt as ve,W as j,Wt as M,X as ye,Y as be,Z as xe,_ as Se,_t as N,a as Ce,at as we,b as Te,bt as P,c as Ee,ct as De,d as Oe,dt as ke,et as Ae,f as je,ft as Me,g as Ne,gt as F,h as Pe,ht as Fe,i as Ie,it as Le,j as Re,jt as ze,k as Be,kt as Ve,l as He,lt as Ue,m as We,mt as Ge,n as Ke,nt as qe,o as Je,ot as Ye,p as Xe,pt as Ze,q as Qe,qt as $e,r as et,rt as tt,s as nt,st as rt,t as it,tt as at,u as ot,ut as st,v as ct,vt as lt,wt as ut,x as dt,xt as ft,y as pt,yt as mt,z as ht,zt as gt}from"./chunk-K2LNXU54-Bz6PS-Qy.js";import{t as _t}from"./chunk-67Y7M4OJ-CpXa6C64.js";import{t as vt}from"./chunk-4P4VZS4P-BO83D-k1.js";import{t as yt}from"./chunk-NJTGWYYH-xb-LxBpe.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var bt=i((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&re(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function ee(){return g?!0:!(e.unstable_now()-T<w)}function E(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ee());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&re(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(E)};else if(typeof MessageChannel<`u`){var te=new MessageChannel,ne=te.port2;te.port1.onmessage=E,D=function(){ne.postMessage(null)}}else D=function(){_(E,0)};function re(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,re(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),xt=i(((e,t)=>{t.exports=bt()})),St=i((e=>{var n=xt(),r=t(),i=D();function a(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function s(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function c(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function u(e){if(s(e)!==e)throw Error(a(188))}function d(e){var t=e.alternate;if(!t){if(t=s(e),t===null)throw Error(a(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return u(i),e;if(o===r)return u(i),t;o=o.sibling}throw Error(a(188))}if(n.return!==r.return)n=i,r=o;else{for(var c=!1,l=i.child;l;){if(l===n){c=!0,n=i,r=o;break}if(l===r){c=!0,r=i,n=o;break}l=l.sibling}if(!c){for(l=o.child;l;){if(l===n){c=!0,n=o,r=i;break}if(l===r){c=!0,r=o,n=i;break}l=l.sibling}if(!c)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}function p(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&p(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function m(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function h(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function g(e){var t=[null,null],n=m(e);return n===null||_(t,e,n.child,{foundSelf:!1}),t}function _(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&_(e,t,n.child,r))return!0;n=n.sibling}return!1}function v(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(a(559))}}var y=null,b=null;function x(e,t,n){return e===n||e===t&&(y=e,!0)}function S(e,t,n){return e===n?(b=e,!1):e===t&&(b!==null&&(y=e),!0)}function C(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function w(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var T=Object.assign,ee=Symbol.for(`react.element`),E=Symbol.for(`react.transitional.element`),te=Symbol.for(`react.portal`),ne=Symbol.for(`react.fragment`),re=Symbol.for(`react.strict_mode`),ie=Symbol.for(`react.profiler`),ae=Symbol.for(`react.consumer`),O=Symbol.for(`react.context`),oe=Symbol.for(`react.forward_ref`),se=Symbol.for(`react.suspense`),ce=Symbol.for(`react.suspense_list`),le=Symbol.for(`react.memo`),ue=Symbol.for(`react.lazy`),k=Symbol.for(`react.activity`),de=Symbol.for(`react.legacy_hidden`),A=Symbol.for(`react.memo_cache_sentinel`),fe=Symbol.for(`react.view_transition`),pe=Symbol.for(`react.recoverable`),me=Symbol.iterator;function he(e){return typeof e!=`object`||!e?null:(e=me&&e[me]||e[`@@iterator`],typeof e==`function`?e:null)}var ge=Symbol.for(`react.client.reference`);function _e(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ge?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case ne:return`Fragment`;case ie:return`Profiler`;case re:return`StrictMode`;case se:return`Suspense`;case ce:return`SuspenseList`;case k:return`Activity`;case fe:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case te:return`Portal`;case O:return e.displayName||`Context`;case ae:return(e._context.displayName||`Context`)+`.Consumer`;case oe:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case le:return t=e.displayName||null,t===null?_e(e.type)||`Memo`:t;case ue:t=e._payload,e=e._init;try{return _e(e(t))}catch{}}return null}var ve=Array.isArray,j=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ye={pending:!1,data:null,method:null,action:null},be=[],xe=-1;function Se(e){return{current:e}}function N(e){0>xe||(e.current=be[xe],be[xe]=null,xe--)}function Ce(e,t){xe++,be[xe]=e.current,e.current=t}var we=Se(null),Te=Se(null),P=Se(null),Ee=Se(null);function De(e,t){switch(Ce(P,t),Ce(Te,e),Ce(we,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?dp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=dp(t),e=fp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}N(we),Ce(we,e)}function Oe(){N(we),N(Te),N(P)}function ke(e){var t=e.memoizedState;t!==null&&(ch._currentValue=t.memoizedState,Ce(Ee,e)),t=we.current;var n=fp(t,e.type);t!==n&&(Ce(Te,e),Ce(we,n))}function Ae(e){Te.current===e&&(N(we),N(Te)),Ee.current===e&&(N(Ee),ch._currentValue=ye)}var je,Me;function Ne(e){if(je===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);je=t&&t[1]||``,Me=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+je+e+Me}var F=!1;function Pe(e,t){if(!e||F)return``;F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{F=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ne(n):``}function Fe(e,t){switch(e.tag){case 26:case 27:case 5:return Ne(e.type);case 16:return Ne(`Lazy`);case 13:return e.child!==t&&t!==null?Ne(`Suspense Fallback`):Ne(`Suspense`);case 19:return Ne(`SuspenseList`);case 0:case 15:return Pe(e.type,!1);case 11:return Pe(e.type.render,!1);case 1:return Pe(e.type,!0);case 31:return Ne(`Activity`);case 30:return Ne(`ViewTransition`);default:return``}}function Ie(e){try{var t=``,n=null;do t+=Fe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Le=Object.prototype.hasOwnProperty,Re=n.unstable_scheduleCallback,ze=n.unstable_cancelCallback,Be=n.unstable_shouldYield,Ve=n.unstable_requestPaint,He=n.unstable_now,Ue=n.unstable_getCurrentPriorityLevel,We=n.unstable_ImmediatePriority,Ge=n.unstable_UserBlockingPriority,Ke=n.unstable_NormalPriority,qe=n.unstable_LowPriority,Je=n.unstable_IdlePriority,Ye=n.log,Xe=n.unstable_setDisableYieldValue,Ze=null,Qe=null;function $e(e){if(typeof Ye==`function`&&Xe(e),Qe&&typeof Qe.setStrictMode==`function`)try{Qe.setStrictMode(Ze,e)}catch{}}var et=Math.clz32?Math.clz32:rt,tt=Math.log,nt=Math.LN2;function rt(e){return e>>>=0,e===0?32:31-(tt(e)/nt|0)|0}var it=256,at=262144,ot=4194304;function st(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ct(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=st(n))):i=st(o):i=st(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=st(n))):i=st(o)):i=st(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function lt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ut(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-et(n),i=1<<r;t|=e[r],n&=~i}return t}function dt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ft(){var e=ot;return ot<<=1,!(ot&62914560)&&(ot=4194304),e}function pt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ht(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-et(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&gt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function gt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-et(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function _t(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-et(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function vt(e,t){var n=t&-t;return n=n&42?1:yt(n),(n&(e.suspendedLanes|t))===0?n:0}function yt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function bt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function St(){var e=M.p;return e===0?(e=window.event,e===void 0?32:wh(e.type)):e}function Ct(e,t){var n=M.p;try{return M.p=e,t()}finally{M.p=n}}var I=Math.random().toString(36).slice(2),wt=`__reactFiber$`+I,Tt=`__reactProps$`+I,Et=`__reactContainer$`+I,L=`__reactEvents$`+I,Dt=`__reactListeners$`+I,Ot=`__reactHandles$`+I,kt=`__reactResources$`+I,At=`__reactMarker$`+I,jt=`__reactLoad$`+I;function Mt(e){delete e[wt],delete e[Tt],delete e[Dt],delete e[Ot]}function Nt(e){var t;if(t=e[wt])return t;for(var n=e.parentNode;n;){if(t=n[Et]||n[wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pm(e);e!==null;){if(n=e[wt])return n;e=pm(e)}return t}e=n,n=e.parentNode}return null}function Pt(e){if(e=e[wt]||e[Et]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ft(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(a(33))}function It(e){var t=e[kt];return t||=e[kt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Lt(e){e[At]=!0}function Rt(e){e[jt]=void 0}var zt=new Set,Bt={};function Vt(e,t){Ht(e,t),Ht(e+`Capture`,t)}function Ht(e,t){for(Bt[e]=t,e=0;e<t.length;e++)zt.add(t[e])}var Ut=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Wt={},Gt={};function Kt(e){return Le.call(Gt,e)?!0:Le.call(Wt,e)?!1:Ut.test(e)?Gt[e]=!0:(Wt[e]=!0,!1)}var R=!1;function qt(){var e=R;return R=!1,e}function Jt(e,t,n){if(Kt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function Yt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function Xt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function Zt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Qt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function $t(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function en(e){if(!e._valueTracker){var t=Qt(e)?`checked`:`value`;e._valueTracker=$t(e,t,``+e[t])}}function tn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Qt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var nn=/[\n"\\]/g;function rn(e){return e.replace(nn,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function an(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Zt(t)):e.value!==``+Zt(t)&&(e.value=``+Zt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):sn(e,Zt(n)):o===`number`&&e.value==t?sn(e,Zt(e.value)):sn(e,Zt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Zt(s):e.removeAttribute(`name`)}function on(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){en(e);return}n=n==null?``:``+Zt(n),t=t==null?n:``+Zt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),en(e)}function sn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function cn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ln(e,t,n){if(t!=null&&(t=``+Zt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Zt(n)}function un(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(a(92));if(ve(r)){if(1<r.length)throw Error(a(93));r=r[0]}n=r}n??=``,t=n}n=Zt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),en(e)}function dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function pn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||fn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function mn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(a(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,R=!0);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&(pn(e,i,r),R=!0)}else for(var o in t)t.hasOwnProperty(o)&&pn(e,o,t[o])}function hn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var gn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),_n=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vn(e){return _n.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function yn(){}var bn=null;function xn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sn=null,Cn=null;function wn(e){var t=Pt(e);if(t&&(e=t.stateNode)){var n=e[Tt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(an(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+rn(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[Tt]||null;if(!i)throw Error(a(90));an(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&tn(r)}break a;case`textarea`:ln(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&cn(e,!!n.multiple,t,!1)}}}var Tn=!1;function En(e,t,n){if(Tn)return e(t,n);Tn=!0;try{return e(t)}finally{if(Tn=!1,(Sn!==null||Cn!==null)&&(Rd(),Sn&&(t=Sn,e=Cn,Cn=Sn=null,wn(t),e)))for(t=0;t<e.length;t++)wn(e[t])}}function Dn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Tt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(a(231,t,typeof n));return n}var On=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,kn=!1;if(On)try{var An={};Object.defineProperty(An,"passive",{get:function(){kn=!0}}),window.addEventListener(`test`,An,An),window.removeEventListener(`test`,An,An)}catch{kn=!1}var jn=null,Mn=null,Nn=null;function Pn(){if(Nn)return Nn;var e,t=Mn,n=t.length,r,i=`value`in jn?jn.value:jn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Nn=i.slice(e,1<r?1-r:void 0)}function z(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fn(){return!0}function In(){return!1}function Ln(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Fn:In,this.isPropagationStopped=In,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Fn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Fn)},persist:function(){},isPersistent:Fn}),t}var Rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zn=Ln(Rn),Bn=T({},Rn,{view:0,detail:0}),Vn=Ln(Bn),Hn,Un,Wn,Gn=T({},Bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Wn&&(Wn&&e.type===`mousemove`?(Hn=e.screenX-Wn.screenX,Un=e.screenY-Wn.screenY):Un=Hn=0,Wn=e),Hn)},movementY:function(e){return`movementY`in e?e.movementY:Un}}),Kn=Ln(Gn),qn=Ln(T({},Gn,{dataTransfer:0})),Jn=Ln(T({},Bn,{relatedTarget:0})),Yn=Ln(T({},Rn,{animationName:0,elapsedTime:0,pseudoElement:0})),Xn=Ln(T({},Rn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Zn=Ln(T({},Rn,{data:0})),Qn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},$n={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},er={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function tr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=er[e])?!!t[e]:!1}function nr(){return tr}var rr=Ln(T({},Bn,{key:function(e){if(e.key){var t=Qn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=z(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?$n[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nr,charCode:function(e){return e.type===`keypress`?z(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?z(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),ir=Ln(T({},Gn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),ar=Ln(T({},Rn,{submitter:0})),or=Ln(T({},Bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nr})),sr=Ln(T({},Rn,{propertyName:0,elapsedTime:0,pseudoElement:0})),cr=Ln(T({},Gn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),lr=Ln(T({},Rn,{newState:0,oldState:0,source:0})),ur=[9,13,27,32],dr=On&&`CompositionEvent`in window,fr=null;On&&`documentMode`in document&&(fr=document.documentMode);var pr=On&&`TextEvent`in window&&!fr,mr=On&&(!dr||fr&&8<fr&&11>=fr),hr=` `,gr=!1;function _r(e,t){switch(e){case`keyup`:return ur.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function vr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var yr=!1;function br(e,t){switch(e){case`compositionend`:return vr(t);case`keypress`:return t.which===32?(gr=!0,hr):null;case`textInput`:return e=t.data,e===hr&&gr?null:e;default:return null}}function xr(e,t){if(yr)return e===`compositionend`||!dr&&_r(e,t)?(e=Pn(),Nn=Mn=jn=null,yr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return mr&&t.locale!==`ko`?null:t.data;default:return null}}var Sr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Sr[e.type]:t===`textarea`}function wr(e,t,n,r){Sn?Cn?Cn.push(r):Cn=[r]:Sn=r,t=Jf(t,`onChange`),0<t.length&&(n=new zn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Tr=null,Er=null;function Dr(e){Vf(e,0)}function Or(e){if(tn(Ft(e)))return e}function kr(e,t){if(e===`change`)return t}var B=!1;if(On){var Ar;if(On){var jr=`oninput`in document;if(!jr){var Mr=document.createElement(`div`);Mr.setAttribute(`oninput`,`return;`),jr=typeof Mr.oninput==`function`}Ar=jr}else Ar=!1;B=Ar&&(!document.documentMode||9<document.documentMode)}function Nr(){Tr&&(Tr.detachEvent(`onpropertychange`,Pr),Er=Tr=null)}function Pr(e){if(e.propertyName===`value`&&Or(Er)){var t=[];wr(t,Er,e,xn(e)),En(Dr,t)}}function Fr(e,t,n){e===`focusin`?(Nr(),Tr=t,Er=n,Tr.attachEvent(`onpropertychange`,Pr)):e===`focusout`&&Nr()}function Ir(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Or(Er)}function Lr(e,t){if(e===`click`)return Or(t)}function Rr(e,t){if(e===`input`||e===`change`)return Or(t)}function zr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Br=typeof Object.is==`function`?Object.is:zr;function Vr(e,t){if(Br(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Le.call(t,i)||!Br(e[i],t[i]))return!1}return!0}function Hr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wr(e,t){var n=Ur(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Ur(n)}}function Gr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Hr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hr(e.document)}return t}function qr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Jr=On&&`documentMode`in document&&11>=document.documentMode,Yr=null,Xr=null,Zr=null,Qr=!1;function $r(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qr||Yr==null||Yr!==Hr(r)||(r=Yr,`selectionStart`in r&&qr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zr&&Vr(Zr,r)||(Zr=r,r=Jf(Xr,`onSelect`),0<r.length&&(t=new zn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Yr)))}function ei(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var ti={animationend:ei(`Animation`,`AnimationEnd`),animationiteration:ei(`Animation`,`AnimationIteration`),animationstart:ei(`Animation`,`AnimationStart`),transitionrun:ei(`Transition`,`TransitionRun`),transitionstart:ei(`Transition`,`TransitionStart`),transitioncancel:ei(`Transition`,`TransitionCancel`),transitionend:ei(`Transition`,`TransitionEnd`)},ni={},ri={};On&&(ri=document.createElement(`div`).style,`AnimationEvent`in window||(delete ti.animationend.animation,delete ti.animationiteration.animation,delete ti.animationstart.animation),`TransitionEvent`in window||delete ti.transitionend.transition);function ii(e){if(ni[e])return ni[e];if(!ti[e])return e;var t=ti[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ri)return ni[e]=t[n];return e}var ai=ii(`animationend`),oi=ii(`animationiteration`),si=ii(`animationstart`),ci=ii(`transitionrun`),li=ii(`transitionstart`),ui=ii(`transitioncancel`),di=ii(`transitionend`),fi=new Map,pi=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);pi.push(`scrollEnd`);function mi(e,t){fi.set(e,t),Vt(t,[e])}var hi=0;function gi(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=yd.identifierPrefix;var n=hi++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function _i(e){if(e==null||typeof e==`string`)return e;var t=null,n=Dd;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function vi(e,t){return e=_i(e),t=_i(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var yi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},bi=[],xi=0,Si=0;function Ci(){for(var e=xi,t=Si=xi=0;t<e;){var n=bi[t];bi[t++]=null;var r=bi[t];bi[t++]=null;var i=bi[t];bi[t++]=null;var a=bi[t];if(bi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Di(n,i,a)}}function wi(e,t,n,r){bi[xi++]=e,bi[xi++]=t,bi[xi++]=n,bi[xi++]=r,Si|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Ti(e,t,n,r){return wi(e,t,n,r),Oi(e)}function Ei(e,t){return wi(e,null,null,t),Oi(e)}function Di(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-et(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Oi(e){if(50<Od)throw Od=0,kd=null,Error(a(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ki={};function Ai(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ji(e,t,n,r){return new Ai(e,t,n,r)}function Mi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ni(e,t){var n=e.alternate;return n===null?(n=ji(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Pi(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Fi(e,t,n,r,i,o){var s=0;if(r=e,typeof r==`function`)Mi(r)&&(s=1);else if(typeof r==`string`)s=Jm(e,n,we.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case k:return e=ji(31,n,t,i),e.elementType=k,e.lanes=o,e;case ne:return Ii(n.children,i,o,t);case re:s=8,i|=24;break;case ie:return e=ji(12,n,t,i|2),e.elementType=ie,e.lanes=o,e;case se:return e=ji(13,n,t,i),e.elementType=se,e.lanes=o,e;case ce:return e=ji(19,n,t,i),e.elementType=ce,e.lanes=o,e;case de:case fe:return e=i|32,e=ji(30,n,t,e),e.elementType=fe,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case O:s=10;break a;case ae:s=9;break a;case oe:s=11;break a;case le:s=14;break a;case ue:s=16,r=null;break a}s=29,n=Error(a(130,e===null?`null`:typeof e,``)),r=null}return t=ji(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Ii(e,t,n,r){return e=ji(7,e,r,t),e.lanes=n,e}function Li(e,t,n){return e=ji(6,e,null,t),e.lanes=n,e}function Ri(e){var t=ji(18,null,null,0);return t.stateNode=e,t}function zi(e,t,n){return t=ji(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Bi=new WeakMap;function Vi(e,t){if(typeof e==`object`&&e){var n=Bi.get(e);return n===void 0?(t={value:e,source:t,stack:Ie(t)},Bi.set(e,t),t):n}return{value:e,source:t,stack:Ie(t)}}var Hi=[],Ui=0,Wi=null,Gi=0,Ki=[],qi=0,Ji=null,Yi=1,Xi=``;function Zi(e,t){Hi[Ui++]=Gi,Hi[Ui++]=Wi,Wi=e,Gi=t}function Qi(e,t,n){Ki[qi++]=Yi,Ki[qi++]=Xi,Ki[qi++]=Ji,Ji=e;var r=Yi;e=Xi;var i=32-et(r)-1;r&=~(1<<i),n+=1;var a=32-et(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yi=1<<32-et(t)+i|n<<i|r,Xi=a+e}else Yi=1<<a|n<<i|r,Xi=e}function $i(e){e.return!==null&&(Zi(e,1),Qi(e,1,0))}function ea(e){for(;e===Wi;)Wi=Hi[--Ui],Hi[Ui]=null,Gi=Hi[--Ui],Hi[Ui]=null;for(;e===Ji;)Ji=Ki[--qi],Ki[qi]=null,Xi=Ki[--qi],Ki[qi]=null,Yi=Ki[--qi],Ki[qi]=null}function ta(e,t){Ki[qi++]=Yi,Ki[qi++]=Xi,Ki[qi++]=Ji,Yi=t.id,Xi=t.overflow,Ji=e}var na=null,ra=null,V=!1,ia=null,H=!1,U=Error(a(519));function aa(e){throw ua(Vi(Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),U}function oa(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[wt]=e,t[Tt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<zf.length;n++)Q(zf[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),on(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),un(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||ep(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=yn),t=!0):t=!1,t||aa(e,!0)}function sa(e){for(na=e.return;na;)switch(na.tag){case 5:case 31:case 13:H=!1;return;case 27:case 3:H=!0;return;default:na=na.return}}function W(e){if(e!==na)return!1;if(!V)return sa(e),V=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||mp(e.type,e.memoizedProps)),n=!n),n&&ra&&aa(e),sa(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(a(317));ra=fm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(a(317));ra=fm(e)}else t===27?(t=ra,Cp(e.type)?(e=dm,dm=null,ra=e):ra=t):ra=na?um(e.stateNode.nextSibling):null;return!0}function ca(){ra=na=null,V=!1}function la(){var e=ia;return e!==null&&(dd===null?dd=e:dd.push.apply(dd,e),ia=null),e}function ua(e){ia===null?ia=[e]:ia.push(e)}var da=Se(null),fa=null,pa=null;function ma(e,t,n){Ce(da,t._currentValue),t._currentValue=n}function ha(e){e._currentValue=da.current,N(da)}function ga(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function _a(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var o=i.dependencies;if(o!==null){var s=i.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ga(o.return,n,e),r||(s=null);break a}o=c.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(a(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ga(s,n,e),s=null}else i.tag===13&&i.memoizedState!==null&&i.memoizedState.dehydrated===null?(i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),ga(i.return,n,e),s=i.child,s=s===null?null:s.sibling):s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function va(e,t,n,r){e=null;for(var i=t,o=!1;i!==null;){if(!o){if(i.flags&524288)o=!0;else if(i.flags&262144)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(a(387));if(s=s.memoizedProps,s!==null){var c=i.type;Br(i.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(i===Ee.current){if(s=i.alternate,s===null)throw Error(a(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[ch]:e.push(ch))}i=i.return}return e!==null&&_a(t,e,n,r),t.flags|=262144,e!==null}function ya(e){for(e=e.firstContext;e!==null;){if(!Br(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ba(e){fa=e,pa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function xa(e){return Ca(fa,e)}function Sa(e,t){return fa===null&&ba(e),Ca(e,t)}function Ca(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},pa===null){if(e===null)throw Error(a(308));pa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else pa=pa.next=t;return n}var wa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Ta=n.unstable_scheduleCallback,Ea=n.unstable_NormalPriority,Da={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Oa(){return{controller:new wa,data:new Map,refCount:0}}function ka(e){e.refCount--,e.refCount===0&&Ta(Ea,function(){e.controller.abort()})}function Aa(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var ja=null;function Ma(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Na=null,Pa=0,Fa=0,Ia=null;function La(e,t){if(Na===null){var n=Na=[];Pa=0,Fa=Pf(),Ia={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Pa++,t.then(Ra,Ra),t}function Ra(){if(--Pa===0&&(ja=null,Na!==null)){Ia!==null&&(Ia.status=`fulfilled`);var e=Na;Na=null,Fa=0,Ia=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function za(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ba=j.S;j.S=function(e,t){if(md=He(),typeof t==`object`&&t&&typeof t.then==`function`&&La(e,t),ja!==null)for(var n=bf;n!==null;)Aa(n,ja),n=n.next;if(n=e.types,n!==null){for(var r=bf;r!==null;)Aa(r,n),r=r.next;if(Fa!==0){r=ja,r===null&&(r=ja=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Ba!==null&&Ba(e,t)};var Va=Se(null);function Ha(){var e=Va.current;return e===null?J.pooledCache:e}function Ua(e,t){t===null?Ce(Va,Va.current):Ce(Va,t.pool)}function Wa(){var e=Ha();return e===null?null:{parent:Da._currentValue,pool:e}}var Ga=Error(a(460)),Ka=Error(a(474)),qa=Error(a(542)),Ja={then:function(){}};function Ya(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Xa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(yn,yn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,eo(e),e===void 0&&!(`reason`in t)?Error(a(600)):e;default:if(typeof t.status==`string`)t.then(yn,yn);else{if(e=J,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,eo(e),e}throw Qa=t,Ga}}function Za(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Qa=e,Ga):e}}var Qa=null;function $a(){if(Qa===null)throw Error(a(459));var e=Qa;return Qa=null,e}function eo(e){if(e===Ga||e===qa)throw Error(a(483))}var to=null,no=0;function ro(e){var t=no;return no+=1,to===null&&(to=[]),Xa(to,e,t)}function io(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function ao(e,t){throw t.$$typeof===ee?Error(a(525)):(e=Object.prototype.toString.call(t),Error(a(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function oo(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=Ni(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Li(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===ne?(e=d(e,t,n.props.children,r,n.key),io(e,n),e):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===ue&&Za(a)===t.type)?(t=i(t,n.props),io(t,n),t.return=e,t):(t=Fi(n.type,n.key,n.props,null,e.mode,r),io(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=zi(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=Ii(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Li(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case E:return n=Fi(t.type,t.key,t.props,null,e.mode,n),io(n,t),n.return=e,n;case te:return t=zi(t,e.mode,n),t.return=e,t;case ue:return t=Za(t),f(e,t,n)}if(ve(t)||he(t))return t=Ii(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,ro(t),n);if(t.$$typeof===O)return f(e,Sa(e,t),n);ao(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case E:return n.key===i?l(e,t,n,r):null;case te:return n.key===i?u(e,t,n,r):null;case ue:return n=Za(n),p(e,t,n,r)}if(ve(n)||he(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,ro(n),r);if(n.$$typeof===O)return p(e,t,Sa(e,n),r);ao(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case E:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case te:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ue:return r=Za(r),m(e,t,n,r,i)}if(ve(r)||he(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,ro(r),i);if(r.$$typeof===O)return m(e,t,n,Sa(t,r),i);ao(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),V&&Zi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return V&&Zi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),V&&Zi(i,h),l}function g(i,s,c,l){if(c==null)throw Error(a(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),V&&Zi(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return V&&Zi(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),V&&Zi(i,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===ne&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case E:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===ne){if(r.tag===7){n(e,r.sibling),c=i(r,o.props.children),io(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ue&&Za(l)===r.type){n(e,r.sibling),c=i(r,o.props),io(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===ne?(c=Ii(o.props.children,e.mode,c,o.key),io(c,o),c.return=e,e=c):(c=Fi(o.type,o.key,o.props,null,e.mode,c),io(c,o),c.return=e,e=c)}return s(e);case te:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=i(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=zi(o,e.mode,c),c.return=e,e=c}return s(e);case ue:return o=Za(o),_(e,r,o,c)}if(ve(o))return h(e,r,o,c);if(he(o)){if(l=he(o),typeof l!=`function`)throw Error(a(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,ro(o),c);if(o.$$typeof===O)return _(e,r,Sa(e,o),c);ao(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,o),c.return=e,e=c):(n(e,r),c=Li(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{no=0;var i=_(e,t,n,r);return to=null,i}catch(t){if(t===Ga||t===qa)throw t;var a=ji(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var so=oo(!0),co=oo(!1),lo=!1;function uo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function po(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function mo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Qu&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Oi(e),Di(e,null,n),t}return wi(e,r,t,n),Oi(e)}function ho(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_t(e,n)}}function go(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var _o=!1;function vo(){if(_o){var e=Ia;if(e!==null)throw e}}function yo(e,t,n,r){_o=!1;var i=e.updateQueue;lo=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(X&f)===f:(r&f)===f){f!==0&&f===Fa&&(_o=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=T({},d,f);break a;case 2:lo=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),ad|=o,e.lanes=o,e.memoizedState=d}}function bo(e,t){if(typeof e!=`function`)throw Error(a(191,e));e.call(t)}function xo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)bo(n[e],t)}var So=Se(null),Co=Se(0);function wo(e,t){e=rd,Ce(Co,e),Ce(So,t),rd=e|t.baseLanes}function To(){Ce(Co,rd),Ce(So,So.current)}function Eo(){rd=Co.current,N(So),N(Co)}var Do=Se(null),Oo=null;function ko(e){var t=e.alternate;Ce(Po,Po.current&1),Ce(Do,e),Oo===null&&(t===null||So.current!==null||t.memoizedState!==null)&&(Oo=e)}function Ao(e){Ce(Po,Po.current),Ce(Do,e),Oo===null&&(Oo=e)}function jo(e){e.tag===22?(Ce(Po,Po.current),Ce(Do,e),Oo===null&&(Oo=e)):Mo()}function Mo(){Ce(Po,Po.current),Ce(Do,Do.current)}function No(e){N(Do),Oo===e&&(Oo=null),N(Po)}var Po=Se(0);function Fo(e,t){Ce(Do,Do.current),Ce(Po,t)}function Io(e){N(Po),N(Do),Oo===e&&(Oo=null)}function Lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||sm(n)||cm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ro=0,G=null,zo=null,Bo=null,Vo=!1,Ho=!1,Uo=!1,Wo=0,Go=0,Ko=null,qo=0;function Jo(){throw Error(a(321))}function Yo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Br(e[n],t[n]))return!1;return!0}function Xo(e,t,n,r,i,a){return Ro=a,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,j.H=e===null||e.memoizedState===null?fc:pc,Uo=!1,a=n(r,i),Uo=!1,Ho&&(a=Qo(t,n,r,i)),Zo(e),a}function Zo(e){j.H=dc;var t=zo!==null&&zo.next!==null;if(Ro=0,Bo=zo=G=null,Vo=!1,Go=0,Ko=null,t)throw Error(a(300));e===null||Ac||(e=e.dependencies,e!==null&&ya(e)&&(Ac=!0))}function Qo(e,t,n,r){G=e;var i=0;do{if(Ho&&(Ko=null),Go=0,Ho=!1,25<=i)throw Error(a(301));if(i+=1,Bo=zo=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}j.H=mc,o=t(n,r)}while(Ho);return o}function $o(){var e=j.H,t=e.useState()[0];return t=typeof t.then==`function`?as(t):t,e=e.useState()[0],(zo===null?null:zo.memoizedState)!==e&&(G.flags|=1024),t}function es(){var e=Wo!==0;return Wo=0,e}function ts(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ns(e){if(Vo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Vo=!1}Ro=0,Bo=zo=G=null,Ho=!1,Go=Wo=0,Ko=null}function rs(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bo===null?G.memoizedState=Bo=e:Bo=Bo.next=e,Bo}function is(){if(zo===null){var e=G.alternate;e=e===null?null:e.memoizedState}else e=zo.next;var t=Bo===null?G.memoizedState:Bo.next;if(t!==null)Bo=t,zo=e;else{if(e===null)throw G.alternate===null?Error(a(467)):Error(a(310));zo=e,e={memoizedState:zo.memoizedState,baseState:zo.baseState,baseQueue:zo.baseQueue,queue:zo.queue,next:null},Bo===null?G.memoizedState=Bo=e:Bo=Bo.next=e}return Bo}function K(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function as(e){var t=Go;return Go+=1,Ko===null&&(Ko=[]),e=Xa(Ko,e,t),t=G,(Bo===null?t.memoizedState:Bo.next)===null&&(t=t.alternate,j.H=t===null||t.memoizedState===null?fc:pc),e}function os(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return as(e);if(e.$$typeof===pe)return;if(e.$$typeof===O)return xa(e)}throw Error(a(438,String(e)))}function ss(e){var t=null,n=G.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=G.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=K(),G.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=A;return t.index++,n}function cs(e,t){return typeof t==`function`?t(e):t}function ls(e){return us(is(),zo,e)}function us(e,t,n){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=n;var i=e.baseQueue,o=r.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}t.baseQueue=i=o,r.pending=null}if(o=e.baseState,i===null)e.memoizedState=o;else{t=i.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Ro&f)===f:(X&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Fa&&(d=!0);else if((Ro&p)===p){u=u.next,p===Fa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,G.lanes|=p,ad|=p;f=u.action,Uo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,G.lanes|=f,ad|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Br(o,e.memoizedState)&&(Ac=!0,d&&(n=Ia,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function ds(e){var t=is(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Br(o,t.memoizedState)||(Ac=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function fs(e,t,n){var r=G,i=is(),o=V;if(o){if(n===void 0)throw Error(a(407));n=n()}else n=t();var s=!Br((zo||i).memoizedState,n);if(s&&(i.memoizedState=n,Ac=!0),i=i.queue,Ls(hs.bind(null,r,i,e),[e]),e=i.getSnapshot!==t||s||Bo!==null&&!!(Bo.memoizedState.tag&1),Ms(e?9:8,{destroy:void 0},ms.bind(null,r,i,n,t),null),e){if(r.flags|=2048,J===null)throw Error(a(349));o||Ro&127||ps(r,t,n)}return n}function ps(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t=K(),G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ms(e,t,n,r){t.value=n,t.getSnapshot=r,gs(t)&&_s(e)}function hs(e,t,n){return n(function(){gs(t)&&_s(e)})}function gs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Br(e,n)}catch{return!0}}function _s(e){var t=Ei(e,2);t!==null&&Nd(t,e,2)}function vs(e){var t=rs();if(typeof e==`function`){var n=e;if(e=n(),Uo){$e(!0);try{n()}finally{$e(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:e},t}function ys(e,t,n,r){return e.baseState=n,us(e,zo,typeof r==`function`?r:cs)}function bs(e,t,n,r,i){if(cc(e))throw Error(a(485));if(e=t.action,e!==null){var o={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};j.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,xs(t,o)):(o.next=n.next,t.pending=n.next=o)}}function xs(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=j.T,o={};o.types=a===null?null:a.types,j.T=o;try{var s=n(i,r),c=j.S;c!==null&&c(o,s),Ss(e,t,s)}catch(n){ws(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),j.T=a}}else try{a=n(i,r),Ss(e,t,a)}catch(n){ws(e,t,n)}}function Ss(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Cs(e,t,n)},function(n){return ws(e,t,n)}):Cs(e,t,n)}function Cs(e,t,n){t.status=`fulfilled`,t.value=n,Ts(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,xs(e,n)))}function ws(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Ts(t),t=t.next;while(t!==r)}e.action=null}function Ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Es(e,t){return t}function Ds(e,t){if(V){var n=J.formState;if(n!==null){a:{var r=G;if(V){if(ra){b:{for(var i=ra,a=H;i.nodeType!==8;){if(!a){i=null;break b}if(i=um(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){ra=um(i.nextSibling),r=i.data===`F!`;break a}}aa(r)}r=!1}r&&(t=n[0])}}return n=rs(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Es,lastRenderedState:t},n.queue=r,n=ac.bind(null,G,r),r.dispatch=n,r=vs(!1),a=sc.bind(null,G,!1,r.queue),r=rs(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=bs.bind(null,G,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Os(e){return ks(is(),zo,e)}function ks(e,t,n){if(t=us(e,t,Es)[0],e=ls(cs)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=as(t)}catch(e){throw e===Ga?qa:e}else r=t;t=is();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(G.flags|=2048,Ms(9,{destroy:void 0},As.bind(null,i,n),null)),[r,a,e]}function As(e,t){e.action=t}function js(e){var t=is(),n=zo;if(n!==null)return ks(t,n,e);is(),t=t.memoizedState,n=is();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Ms(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=G.updateQueue,t===null&&(t=K(),G.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ns(){return is().memoizedState}function Ps(e,t,n,r){var i=rs();G.flags|=e,i.memoizedState=Ms(1|t,{destroy:void 0},n,r===void 0?null:r)}function Fs(e,t,n,r){var i=is();r=r===void 0?null:r;var a=i.memoizedState.inst;zo!==null&&r!==null&&Yo(r,zo.memoizedState.deps)?i.memoizedState=Ms(t,a,n,r):(G.flags|=e,i.memoizedState=Ms(1|t,a,n,r))}function Is(e,t){Ps(8390656,8,e,t)}function Ls(e,t){Fs(2048,8,e,t)}function Rs(e){G.flags|=4;var t=G.updateQueue;if(t===null)t=K(),G.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function zs(e){var t=is().memoizedState;return Rs({ref:t,nextImpl:e}),function(){if(Qu&2)throw Error(a(440));return t.impl.apply(void 0,arguments)}}function Bs(e,t){return Fs(4,2,e,t)}function Vs(e,t){return Fs(4,4,e,t)}function Hs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Us(e,t,n){n=n==null?null:n.concat([e]),Fs(4,4,Hs.bind(null,t,e),n)}function Ws(){}function Gs(e,t){var n=is();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Yo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ks(e,t){var n=is();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Yo(t,r[1]))return r[0];if(r=e(),Uo){$e(!0);try{e()}finally{$e(!1)}}return n.memoizedState=[r,t],r}function qs(e,t,n){return n===void 0||Ro&1073741824&&!(X&261930)?e.memoizedState=t:(e.memoizedState=n,e=jd(),G.lanes|=e,ad|=e,n)}function Js(e,t,n,r){return Br(n,t)?n:So.current===null?!(Ro&106)||Ro&1073741824&&!(X&261930)?(Ac=!0,e.memoizedState=n):(e=jd(),G.lanes|=e,ad|=e,t):(e=qs(e,n,r),Br(e,t)||(Ac=!0),e)}function Ys(e,t,n,r,i){var a=M.p;M.p=a!==0&&8>a?a:8;var o=j.T,s={};s.types=o===null?null:o.types,j.T=s,sc(e,!1,t,n);try{var c=i(),l=j.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?oc(e,t,za(c,r),Ad(e)):oc(e,t,r,Ad(e))}catch(n){oc(e,t,{then:function(){},status:`rejected`,reason:n},Ad())}finally{M.p=a,o!==null&&s.types!==null&&(o.types=s.types),j.T=o}}function Xs(){}function Zs(e,t,n,r){if(e.tag!==5)throw Error(a(476));var i=Qs(e).queue;Ys(e,i,t,ye,n===null?Xs:function(){return $s(e),n(r)})}function Qs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ye,baseState:ye,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:ye},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function $s(e){var t=Qs(e);t.next===null&&(t=e.alternate.memoizedState),oc(e,t.next.queue,{},Ad())}function ec(){return xa(ch)}function tc(){return is().memoizedState}function nc(){return is().memoizedState}function rc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ad();e=po(n);var r=mo(t,e,n);r!==null&&(Nd(r,t,n),ho(r,t,n)),t={cache:Oa()},e.payload=t;return}t=t.return}}function ic(e,t,n){var r=Ad();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},cc(e)?lc(t,n):(n=Ti(e,t,n,r),n!==null&&(Nd(n,e,r),uc(n,t,r)))}function ac(e,t,n){oc(e,t,n,Ad())}function oc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(cc(e))lc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Br(s,o))return wi(e,t,i,0),J===null&&Ci(),!1}catch{}if(n=Ti(e,t,i,r),n!==null)return Nd(n,e,r),uc(n,t,r),!0}return!1}function sc(e,t,n,r){if(r={lane:2,revertLane:Pf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},cc(e)){if(t)throw Error(a(479))}else t=Ti(e,n,r,2),t!==null&&Nd(t,e,2)}function cc(e){var t=e.alternate;return e===G||t!==null&&t===G}function lc(e,t){Ho=Vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function uc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_t(e,n)}}var dc={readContext:xa,use:os,useCallback:Jo,useContext:Jo,useEffect:Jo,useImperativeHandle:Jo,useLayoutEffect:Jo,useInsertionEffect:Jo,useMemo:Jo,useReducer:Jo,useRef:Jo,useState:Jo,useDebugValue:Jo,useDeferredValue:Jo,useTransition:Jo,useSyncExternalStore:Jo,useId:Jo,useHostTransitionStatus:Jo,useFormState:Jo,useActionState:Jo,useOptimistic:Jo,useMemoCache:Jo,useCacheRefresh:Jo,useEffectEvent:Jo},fc={readContext:xa,use:os,useCallback:function(e,t){return rs().memoizedState=[e,t===void 0?null:t],e},useContext:xa,useEffect:Is,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Ps(4194308,4,Hs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ps(4194308,4,e,t)},useInsertionEffect:function(e,t){Ps(4,2,e,t)},useMemo:function(e,t){var n=rs();t=t===void 0?null:t;var r=e();if(Uo){$e(!0);try{e()}finally{$e(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=rs();if(n!==void 0){var i=n(t);if(Uo){$e(!0);try{n(t)}finally{$e(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=ic.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=rs();return e={current:e},t.memoizedState=e},useState:function(e){e=vs(e);var t=e.queue,n=ac.bind(null,G,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ws,useDeferredValue:function(e,t){return qs(rs(),e,t)},useTransition:function(){var e=vs(!1);return e=Ys.bind(null,G,e.queue,!0,!1),rs().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=G,i=rs();if(V){if(n===void 0)throw Error(a(407));n=n()}else{if(n=t(),J===null)throw Error(a(349));X&127||ps(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Is(hs.bind(null,r,o,e),[e]),r.flags|=2048,Ms(9,{destroy:void 0},ms.bind(null,r,o,n,t),null),n},useId:function(){var e=rs(),t=J.identifierPrefix;if(V){var n=Xi,r=Yi;n=(r&~(1<<32-et(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Wo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=qo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:ec,useFormState:Ds,useActionState:Ds,useOptimistic:function(e){var t=rs();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=sc.bind(null,G,!0,n),n.dispatch=t,[e,t]},useMemoCache:ss,useCacheRefresh:function(){return rs().memoizedState=rc.bind(null,G)},useEffectEvent:function(e){var t=rs(),n={impl:e};return t.memoizedState=n,function(){if(Qu&2)throw Error(a(440));return n.impl.apply(void 0,arguments)}}},pc={readContext:xa,use:os,useCallback:Gs,useContext:xa,useEffect:Ls,useImperativeHandle:Us,useInsertionEffect:Bs,useLayoutEffect:Vs,useMemo:Ks,useReducer:ls,useRef:Ns,useState:function(){return ls(cs)},useDebugValue:Ws,useDeferredValue:function(e,t){return Js(is(),zo.memoizedState,e,t)},useTransition:function(){var e=ls(cs)[0],t=is().memoizedState;return[typeof e==`boolean`?e:as(e),t]},useSyncExternalStore:fs,useId:tc,useHostTransitionStatus:ec,useFormState:Os,useActionState:Os,useOptimistic:function(e,t){return ys(is(),zo,e,t)},useMemoCache:ss,useCacheRefresh:nc,useEffectEvent:zs},mc={readContext:xa,use:os,useCallback:Gs,useContext:xa,useEffect:Ls,useImperativeHandle:Us,useInsertionEffect:Bs,useLayoutEffect:Vs,useMemo:Ks,useReducer:ds,useRef:Ns,useState:function(){return ds(cs)},useDebugValue:Ws,useDeferredValue:function(e,t){var n=is();return zo===null?qs(n,e,t):Js(n,zo.memoizedState,e,t)},useTransition:function(){var e=ds(cs)[0],t=is().memoizedState;return[typeof e==`boolean`?e:as(e),t]},useSyncExternalStore:fs,useId:tc,useHostTransitionStatus:ec,useFormState:js,useActionState:js,useOptimistic:function(e,t){var n=is();return zo===null?(n.baseState=e,[e,n.queue.dispatch]):ys(n,zo,e,t)},useMemoCache:ss,useCacheRefresh:nc,useEffectEvent:zs};function hc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:T({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ad(),i=po(r);i.payload=t,n!=null&&(i.callback=n),t=mo(e,i,r),t!==null&&(Nd(t,e,r),ho(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ad(),i=po(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=mo(e,i,r),t!==null&&(Nd(t,e,r),ho(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ad(),r=po(n);r.tag=2,t!=null&&(r.callback=t),t=mo(e,r,n),t!==null&&(Nd(t,e,n),ho(t,e,n))}};function _c(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Vr(n,r)||!Vr(i,a):!0}function vc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&gc.enqueueReplaceState(t,t.state,null)}function yc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=T({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function bc(e){yi(e)}function xc(e){console.error(e)}function Sc(e){yi(e)}function Cc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function wc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Tc(e,t,n){return n=po(n),n.tag=3,n.payload={element:null},n.callback=function(){Cc(e,t)},n}function Ec(e){return e=po(e),e.tag=3,e}function Dc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){wc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){wc(t,n,r),typeof i!=`function`&&(_d===null?_d=new Set([this]):_d.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Oc(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&va(t,n,i,!0),n=Do.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Oo===null?Gd():n.alternate===null&&id===0&&(id=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Ja?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),mf(e,r,i)),!1;case 22:return n.flags|=65536,r===Ja?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),mf(e,r,i)),!1}throw Error(a(435,n.tag))}return mf(e,r,i),Gd(),!1}if(V)return t=Do.current,t===null?(r!==U&&(t=Error(a(423),{cause:r}),ua(Vi(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Vi(r,n),i=Tc(e.stateNode,r,i),go(e,i),id!==4&&(id=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==U&&(e=Error(a(422),{cause:r}),ua(Vi(e,n)))),!1;var o=Error(a(520),{cause:r});if(o=Vi(o,n),ud===null?ud=[o]:ud.push(o),id!==4&&(id=2),t===null)return!0;r=Vi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Tc(n.stateNode,r,e),go(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(_d===null||!_d.has(o))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Ec(i),Dc(i,e,n,r),go(n,i),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var kc=Error(a(461)),Ac=!1;function jc(e,t,n,r){t.child=e===null?co(t,null,n,r):so(t,e.child,n,r)}function Mc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ba(t),r=Xo(e,t,n,o,a,i),s=es(),e!==null&&!Ac?(ts(e,t,i),ol(e,t,i)):(V&&s&&$i(t),t.flags|=1,jc(e,t,r,i),t.child)}function Nc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Mi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Pc(e,t,a,r,i)):(e=Fi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!sl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Vr:n,n(o,r)&&e.ref===t.ref)return ol(e,t,i)}return t.flags|=1,e=Ni(a,r),e.ref=t.ref,e.return=t,t.child=e}function Pc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Vr(a,r)&&e.ref===t.ref){if(Ac=!1,t.pendingProps=r=a,sl(e,i))e.flags&131072&&(Ac=!0);else return t.lanes=e.lanes,ol(e,t,i)}}return Hc(e,t,n,r,i)}function Fc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Lc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ua(t,a===null?null:a.cachePool),a===null?To():wo(t,a),jo(t);else return r=t.lanes=536870912,Lc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ua(t,null),To(),Mo()):(Ua(t,a.cachePool),wo(t,a),Mo(),t.memoizedState=null);return jc(e,t,i,n),t.child}function Ic(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Lc(e,t,n,r,i){var a=Ha();return a=a===null?null:{parent:Da._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ua(t,null),To(),jo(t),e!==null&&va(e,t,r,!0),t.childLanes=i,null}function Rc(e,t){return t=Zc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function zc(e,t,n){return so(t,e.child,null,n),e=Rc(t,t.pendingProps),e.flags|=2,No(t),t.memoizedState=null,e}function Bc(e,t,n){var r=t.pendingProps,i=!!(t.flags&128);if(t.flags&=-129,e===null){if(V){if(r.mode===`hidden`)return e=Rc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Ic(null,e);if(Ao(t),(e=ra)?(e=om(e,H),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ji===null?null:{id:Yi,overflow:Xi},retryLane:536870912,hydrationErrors:null},n=Ri(e),n.return=t,t.child=n,na=t,ra=null)):e=null,e===null)throw aa(t);return t.lanes=536870912,null}return Rc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Ao(t),i){if(t.flags&256)t.flags&=-257,t=zc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(a(558))}else if(Ac||va(e,t,n,!1),i=(n&e.childLanes)!==0,Ac||i){if(So.current===null){if(r=J,r!==null&&(s=vt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Ei(e,s),Nd(r,e,s),kc;Gd()}t=zc(e,t,n)}else e=o.treeContext,ra=um(s.nextSibling),na=t,V=!0,ia=null,H=!1,e!==null&&ta(t,e),t=Rc(t,r),t.flags|=134221824;return t}return e=Ni(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Vc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(a(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Hc(e,t,n,r,i){return ba(t),n=Xo(e,t,n,r,void 0,i),r=es(),e!==null&&!Ac?(ts(e,t,i),ol(e,t,i)):(V&&r&&$i(t),t.flags|=1,jc(e,t,n,i),t.child)}function Uc(e,t,n,r,i,a){return ba(t),t.updateQueue=null,n=Qo(t,r,n,i),Zo(e),r=es(),e!==null&&!Ac?(ts(e,t,a),ol(e,t,a)):(V&&r&&$i(t),t.flags|=1,jc(e,t,n,a),t.child)}function Wc(e,t,n,r,i){if(ba(t),t.stateNode===null){var a=ki,o=n.contextType;typeof o==`object`&&o&&(a=xa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=gc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},uo(t),o=n.contextType,a.context=typeof o==`object`&&o?xa(o):ki,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(hc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&gc.enqueueReplaceState(a,a.state,null),yo(t,r,a,i),vo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=yc(n,s);a.props=c;var l=a.context,u=n.contextType;o=ki,typeof u==`object`&&u&&(o=xa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&vc(t,a,r,o),lo=!1;var f=t.memoizedState;a.state=f,yo(t,r,a,i),vo(),l=t.memoizedState,s||f!==l||lo?(typeof d==`function`&&(hc(t,n,d,r),l=t.memoizedState),(c=lo||_c(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,fo(e,t),o=t.memoizedProps,u=yc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ki,typeof l==`object`&&l&&(c=xa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&vc(t,a,r,c),lo=!1,f=t.memoizedState,a.state=f,yo(t,r,a,i),vo();var p=t.memoizedState;o!==d||f!==p||lo||e!==null&&e.dependencies!==null&&ya(e.dependencies)?(typeof s==`function`&&(hc(t,n,s,r),p=t.memoizedState),(u=lo||_c(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ya(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Vc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=so(t,e.child,null,i),t.child=so(t,null,n,i)):jc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=ol(e,t,i),e}function Gc(e,t,n,r){return ca(),t.flags|=256,jc(e,t,n,r),t.child}var Kc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qc(e){return{baseLanes:e,cachePool:Wa()}}function Jc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=cd),e}function Yc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Po.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(V){if(i?ko(t):Mo(),(e=ra)?(e=om(e,H),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ji===null?null:{id:Yi,overflow:Xi},retryLane:536870912,hydrationErrors:null},n=Ri(e),n.return=t,t.child=n,na=t,ra=null)):e=null,e===null)throw aa(t);return t.lanes=cm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Mo(),i=t.mode,a=Zc({mode:`hidden`,children:a},i),r=Ii(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=qc(n),r.childLanes=Jc(e,o,n),t.memoizedState=Kc,Ic(null,r)):(ko(t),Xc(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return $c(e,t,a,o,r,c,s,n)}return i?(Mo(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Ni(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Ii(i,a,n,null),i.flags|=2):i=Ni(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Ic(null,r),r=t.child,i=e.child.memoizedState,i===null?i=qc(n):(a=i.cachePool,a===null?a=Wa():(s=Da._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Jc(e,o,n),t.memoizedState=Kc,Ic(e.child,r)):(ko(t),n=e.child,e=n.sibling,n=Ni(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Xc(e,t){return t=Zc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Zc(e,t){return e=ji(22,e,null,t),e.lanes=0,e}function Qc(e,t,n){return so(t,e.child,null,n),e=Xc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $c(e,t,n,r,i,o,s,c){if(n)return t.flags&256?(ko(t),t.flags&=-257,Qc(e,t,c)):t.memoizedState===null?(Mo(),o=i.fallback,s=t.mode,i=Zc({mode:`visible`,children:i.children},s),o=Ii(o,s,c,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,so(t,e.child,null,c),i=t.child,i.memoizedState=qc(c),i.childLanes=Jc(e,r,c),t.memoizedState=Kc,Ic(null,i)):(Mo(),t.child=e.child,t.flags|=128,null);if(ko(t),cm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(i=Error(a(419)),i.stack=``,i.digest=r,ua({value:i,source:null,stack:null})),Qc(e,t,c)}if(Ac||va(e,t,c,!1),r=(c&e.childLanes)!==0,Ac||r){if(So.current!==null)return Qc(e,t,c);if(r=J,r!==null&&(i=vt(r,c),i!==0&&i!==s.retryLane))throw s.retryLane=i,Ei(e,i),Nd(r,e,i),kc;return sm(o)||Gd(),Qc(e,t,c)}return sm(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,ra=um(o.nextSibling),na=t,V=!0,ia=null,H=!1,e!==null&&ta(t,e),t=Xc(t,i.children),t.flags|=134221824,t)}function el(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ga(e.return,t,n)}function tl(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Lo(n)===null&&(t=e),e=e.sibling}return t}function nl(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function rl(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function il(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Po.current;if(t.flags&128)return Fo(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Fo(t,o),i===`backwards`&&e!==null?(rl(e),jc(e,t,r,n),rl(e)):jc(e,t,r,n),r=V?Gi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&el(e,n,t);else if(e.tag===19)el(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=tl(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,rl(t)),nl(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Lo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}nl(t,!0,n,null,a,r);break;case`together`:nl(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=tl(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),nl(t,!1,i,n,a,r)}return t.child}function al(e,t,n){var r=t.pendingProps;return ma(t,t.type,r.value),jc(e,t,r.children,n),t.child}function ol(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ad|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(va(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,n=Ni(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ni(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ya(e)))}function cl(e,t,n){switch(t.tag){case 3:De(t,t.stateNode.containerInfo),ma(t,Da,e.memoizedState.cache),ca();break;case 27:case 5:ke(t);break;case 4:De(t,t.stateNode.containerInfo);break;case 10:ma(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ao(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return ko(t),t.flags|=128,null;r=va(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?Yc(e,t,n):(ko(t),e=ol(e,t,n),e===null?null:e.sibling)}ko(t);break;case 19:if(t.flags&128)return il(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(va(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return il(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Fo(t,Po.current),r)break;return null;case 22:return t.lanes=0,Fc(e,t,n,t.pendingProps);case 24:ma(t,Da,e.memoizedState.cache)}return ol(e,t,n)}function ll(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Ac=!0;else{if(!sl(e,n)&&!(t.flags&128))return Ac=!1,cl(e,t,n);Ac=!!(e.flags&131072)}}else Ac=!1,V&&t.flags&1048576&&Qi(t,Gi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Za(t.elementType),t.type=e,typeof e==`function`)Mi(e)?(r=yc(e,r),t.tag=1,t=Wc(null,t,e,r,n)):(t.tag=0,t=Hc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===oe){t.tag=11,t=Mc(null,t,e,r,n);break a}if(i===le){t.tag=14,t=Nc(null,t,e,r,n);break a}if(i===O){t.tag=10,t.type=e,t=al(null,t,n);break a}}throw t=_e(e)||e,Error(a(306,t,``))}}return t;case 0:return Hc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=yc(r,t.pendingProps),Wc(e,t,r,i,n);case 3:a:{if(De(t,t.stateNode.containerInfo),e===null)throw Error(a(387));r=t.pendingProps;var o=t.memoizedState;i=o.element,fo(e,t),yo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ma(t,Da,r),r!==o.cache&&_a(t,[Da],n,!0),vo(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Gc(e,t,r,n);break a}if(r!==i){i=Vi(Error(a(424)),t),ua(i),t=Gc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(ra=um(e.firstChild),na=t,V=!0,ia=null,H=!0,n=co(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(ca(),r===i){t=ol(e,t,n);break a}jc(e,t,r,n)}t=t.child}return t;case 26:return Vc(e,t),e===null?(n=Pm(t.type,null,t.pendingProps,null))?t.memoizedState=n:V||(t.stateNode=pp(t.type,t.pendingProps,P.current,t)):t.memoizedState=Pm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ke(t),e===null&&V&&(r=t.stateNode=gm(t.type,t.pendingProps,P.current),na=t,H=!0,i=ra,Cp(t.type)?(dm=i,ra=um(r.firstChild)):ra=i),jc(e,t,t.pendingProps.children,n),Vc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&V&&((i=r=ra)&&(r=im(r,t.type,t.pendingProps,H),r===null?i=!1:(t.stateNode=r,na=t,ra=um(r.firstChild),H=!1,i=!0)),i||aa(t)),ke(t),i=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,mp(i,o)?r=null:s!==null&&mp(i,s)&&(t.flags|=32),t.memoizedState!==null&&(i=Xo(e,t,$o,null,null,n),ch._currentValue=i),Vc(e,t),jc(e,t,r,n),t.child;case 6:return e===null&&V&&((e=n=ra)&&(n=am(n,t.pendingProps,H),n===null?e=!1:(t.stateNode=n,na=t,ra=null,e=!0)),e||aa(t)),null;case 13:return Yc(e,t,n);case 4:return De(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=so(t,null,r,n):jc(e,t,r,n),t.child;case 11:return Mc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Vc(e,t),jc(e,t,r,n),t.child;case 8:return jc(e,t,t.pendingProps.children,n),t.child;case 12:return jc(e,t,t.pendingProps.children,n),t.child;case 10:return al(e,t,n);case 9:return i=t.type._context,r=t.pendingProps.children,ba(t),i=xa(i),r=r(i),t.flags|=1,jc(e,t,r,n),t.child;case 14:return Nc(e,t,t.type,t.pendingProps,n);case 15:return Pc(e,t,t.type,t.pendingProps,n);case 19:return il(e,t,n);case 31:return Bc(e,t,n);case 22:return Fc(e,t,n,t.pendingProps);case 24:return ba(t),r=xa(Da),e===null?(i=Ha(),i===null&&(i=J,o=Oa(),i.pooledCache=o,o.refCount++,o!==null&&(i.pooledCacheLanes|=n),i=o),t.memoizedState={parent:r,cache:i},uo(t),ma(t,Da,i)):((e.lanes&n)!==0&&(fo(e,t),yo(t,null,null,n),vo()),i=e.memoizedState,o=t.memoizedState,i.parent===r?(r=o.cache,ma(t,Da,r),r!==i.cache&&_a(t,[Da],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ma(t,Da,r))),jc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:V&&$i(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Vc(e,t),jc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(a(156,t.tag))}function ul(e){e.flags|=4}function dl(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Ym(t,r):Ym(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Hd())e.flags|=8192;else throw Qa=Ja,Ka}}else e.flags&=-16777217}function fl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Xm(t)){if(Hd())e.flags|=8192;else throw Qa=Ja,Ka}}function pl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:ft(),e.lanes|=t,ld|=t)}function ml(e,t){if(!V)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function hl(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function gl(e,t,n){var r=t.pendingProps;switch(ea(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hl(t),null;case 1:return hl(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ha(Da),Oe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(W(t)?ul(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,la())),hl(t),null;case 26:var i=t.type,o=t.memoizedState;return e===null?(ul(t),o===null?(hl(t),dl(t,i,null,r,n)):(hl(t),fl(t,o))):o?o===e.memoizedState?(hl(t),t.flags&=-16777217):(ul(t),hl(t),fl(t,o)):(e=e.memoizedProps,e!==r&&ul(t),hl(t),dl(t,i,e,r,n)),null;case 27:if(Ae(t),n=P.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ul(t);else{if(!r){if(t.stateNode===null)throw Error(a(166));return hl(t),t.subtreeFlags&=-33554433,null}e=we.current,W(t)?oa(t,e):(e=gm(i,r,n),t.stateNode=e,ul(t))}return hl(t),t.subtreeFlags&=-33554433,null;case 5:if(Ae(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ul(t);else{if(!r){if(t.stateNode===null)throw Error(a(166));return hl(t),t.subtreeFlags&=-33554433,null}if(o=we.current,W(t))oa(t,o);else{var s=up(P.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(i,{is:r.is}):s.createElement(i)}}o[wt]=t,o[Tt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(rp(o,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&ul(t)}}return hl(t),t.subtreeFlags&=-33554433,dl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&ul(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(a(166));if(e=P.current,W(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=na,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[wt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||ep(e.nodeValue,n)),e||aa(t,!0)}else e=up(e).createTextNode(r),e[wt]=t,t.stateNode=e}return hl(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=W(t),n!==null){if(e===null){if(!r)throw Error(a(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(a(557));e[wt]=t}else ca(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;hl(t),e=!1}else n=la(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(No(t),t):(No(t),null);if(t.flags&128)throw Error(a(558))}return hl(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=W(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(a(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(a(317));i[wt]=t}else ca(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;hl(t),i=!1}else i=la(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(No(t),t):(No(t),null)}return No(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),pl(t,t.updateQueue),hl(t),null);case 4:return Oe(),e===null&&Wf(t.stateNode.containerInfo),t.flags|=67108864,hl(t),null;case 10:return ha(t.type),hl(t),null;case 19:if(Io(t),r=t.memoizedState,r===null)return hl(t),null;if(i=!!(t.flags&128),o=r.rendering,o===null){if(i)ml(r,!1);else{if(id!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Lo(e),o!==null){for(t.flags|=128,ml(r,!1),e=o.updateQueue,t.updateQueue=e,pl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Pi(n,e),n=n.sibling;return Fo(t,Po.current&1|2),V&&Zi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&He()>hd&&(t.flags|=128,i=!0,ml(r,!1),t.lanes=4194304)}}else{if(!i){if(e=Lo(o),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,pl(t,e),ml(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!V)return hl(t),null}else 2*He()-r.renderingStartTime>hd&&n!==536870912&&(t.flags|=128,i=!0,ml(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=He(),e.sibling=null,o=Po.current,o=i?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||V?Fo(t,o):(n=o,Ce(Do,t),Ce(Po,n),Oo===null&&(Oo=t)),V&&Zi(t,r.treeForkCount),e}return hl(t),null;case 22:case 23:return No(t),Eo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(hl(t),t.subtreeFlags&6&&(t.flags|=8192)):hl(t),n=t.updateQueue,n!==null&&pl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&N(Va),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ha(Da),hl(t),null;case 25:return null;case 30:return t.flags|=33554432,hl(t),null}throw Error(a(156,t.tag))}function _l(e,t){switch(ea(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ha(Da),Oe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ae(t),null;case 31:if(t.memoizedState!==null){if(No(t),t.alternate===null)throw Error(a(340));ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(No(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Io(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Oe(),null;case 10:return ha(t.type),null;case 22:case 23:return No(t),Eo(),e!==null&&N(Va),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ha(Da),null;case 25:return null;default:return null}}function vl(e,t){switch(ea(t),t.tag){case 3:ha(Da),Oe();break;case 26:case 27:case 5:Ae(t);break;case 4:Oe();break;case 31:t.memoizedState!==null&&No(t);break;case 13:No(t);break;case 19:Io(t);break;case 10:ha(t.type);break;case 22:case 23:No(t),Eo(),e!==null&&N(Va);break;case 24:ha(Da)}}function yl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){pf(t,t.return,e)}}function bl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){pf(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){pf(t,t.return,e)}}function xl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{xo(t,n)}catch(t){pf(e,e.return,t)}}}function Sl(e,t,n){n.props=yc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){pf(e,t,n)}}function Cl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=gi(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Fp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Ip(e);p(e.child,!1,$p,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){pf(e,t,n)}}function wl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){pf(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){pf(e,t,n)}else n.current=null}}function Tl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)tm(e.stateNode,t[n])}function El(e){for(var t=e.return;t!==null&&(kl(t)&&tm(e.stateNode,t.stateNode),!Ol(t));)t=t.return}function Dl(e){for(var t=e.return;t!==null&&(kl(t)&&nm(e.stateNode,t.stateNode),!Ol(t));)t=t.return}function Ol(e){return e.tag===5||e.tag===3||e.tag===27}function kl(e){return e&&e.tag===7&&e.stateNode!==null}function Al(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){pf(e,e.return,t)}}function jl(e,t,n){try{var r=e.stateNode;ap(r,e.type,n,t),r[Tt]=t}catch(t){pf(e,e.return,t)}}function Ml(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Cp(e.type)||e.tag===4}function Nl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Ml(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Cp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=yn)),Tl(e,r),R=!0;else if(i!==4&&(i===27&&(Tl(e,r),r=null,Cp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Pl(e,t,n,r),e=e.sibling;e!==null;)Pl(e,t,n,r),e=e.sibling}function Fl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Tl(e,r),R=!0;else if(i!==4&&(i===27&&(Tl(e,r),r=null,Cp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Fl(e,t,n,r),e=e.sibling;e!==null;)Fl(e,t,n,r),e=e.sibling}function Il(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);rp(t,r,n),t[wt]=e,t[Tt]=n}catch(t){pf(e,e.return,t)}}var Ll=!1,Rl=null;function zl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Ll=!0)}var q=null;function Bl(){var e=q;return q=null,e}var Vl=0;function Hl(e,t,n,r,i){return Vl=0,Ul(e.child,t,n,r,i)}function Ul(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=kp(o);r.push(s),s.view&&(a=!0)}else a||kp(o).view&&(a=!0);Ll=!0,Ep(o,Vl===0?t:t+`_`+Vl,n),Vl++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||Ul(e.child,t,n,r,i)&&(a=!0));e=e.sibling}return a}function Wl(e,t){for(;e!==null;)e.tag===5?Dp(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Wl(e.child,t)),e=e.sibling}function Gl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Gl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(a(544));var n=t.name;t=vi(t.default,t.share),t!==`none`&&(Hl(e,n,t,null,!1)||Wl(e.child,!1))}e=e.sibling}}function Kl(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=gi(r,n),a=vi(r.default,n.paired?r.share:r.enter);a===`none`?Gl(e):Hl(e,i,a,null,!1)?(Gl(e),n.paired||t||Md(e,r.onEnter)):Wl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Kl(e,t),e=e.sibling;else Gl(e)}function ql(e){if(Rl!==null&&Rl.size!==0){var t=Rl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=vi(n.default,n.share);if(a!==`none`&&(Hl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Md(e,n.onShare)):Wl(e.child,!1)),t.delete(r),t.size===0)break}}}ql(e)}e=e.sibling}}}function Jl(e){if(e.tag===30){var t=e.memoizedProps,n=gi(t,e.stateNode),r=Rl===null?void 0:Rl.get(n),i=vi(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Hl(e,n,i,null,!1)?r===void 0?Md(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Rl.delete(n),Md(e,t.onShare)):Wl(e.child,!1)),Rl!==null&&ql(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Jl(e),e=e.sibling;else Rl!==null&&ql(e)}function Yl(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=gi(t,e.stateNode);t=vi(t.default,t.update),e.flags&=-5,t!==`none`&&Hl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Yl(e);e=e.sibling}}function Xl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Wl(e.child,!1))}Xl(e)}e=e.sibling}}function Zl(e){if(e.tag===30)e.stateNode.paired=null,Wl(e.child,!1),Xl(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Zl(e),e=e.sibling;else Xl(e)}function Ql(e){for(e=e.child;e!==null;)e.tag===30?Wl(e.child,!1):e.subtreeFlags&33554432&&Ql(e),e=e.sibling}function $l(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Vl<a.length){var l=a[Vl],u=kp(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Ep(c,Vl===0?n:n+`_`+Vl,i),s&&e.flags&4||(q===null&&(q=[]),q.push(c,Vl===0?r:r+`_`+Vl,t.memoizedProps)),Vl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:$l(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function eu(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=gi(n,r),a=vi(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(Ap)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Vl=0,i=$l(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Md(e,n.onUpdate))}else e.subtreeFlags&33554432&&eu(e,t);e=e.sibling}}var tu=!1,nu=!1,ru=!1,iu=!1,au=typeof WeakSet==`function`?WeakSet:Set,ou=null,su=!1,cu=!1,lu=!1,uu=!1;function du(e,t,n){if(e=e.containerInfo,cp=_h,e=Kr(e),qr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(lp={focusedElem:e,selectionRange:r},_h=!1,n=(n&335544064)===n,ou=t,t=n?9270:1024;ou!==null;){if(e=ou,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&Jl(r[a]);if(e.alternate===null&&e.flags&2)n&&zl(e),fu(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&Jl(r),fu(n);continue}if(r!==null&&r.memoizedState!==null){n&&zl(e),fu(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,ou=r):(n&&Yl(e),fu(n))}}Rl=null}function fu(e){for(;ou!==null;){var t=ou,n=e,r=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(i&1024&&r!==null){n=void 0,i=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=yc(t.type,i);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){pf(t,t.return,e)}}break;case 3:if(i&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)rm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:rm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=gi(r.memoizedProps,r.stateNode),i=t.memoizedProps,i=vi(i.default,i.update),i!==`none`&&Hl(r,n,i,r.memoizedState=[],!0));break;default:if(i&1024)throw Error(a(163))}if(r=t.sibling,r!==null){r.return=t.return,ou=r;break}ou=t.return}}function pu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Nu(e,n),r&4&&yl(5,n);break;case 1:if(Nu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){pf(n,n.return,e)}else{var i=yc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){pf(n,n.return,e)}}}r&64&&xl(n),r&512&&Cl(n,n.return);break;case 3:if(Nu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{xo(e,t)}catch(e){pf(n,n.return,e)}}break;case 27:t===null&&r&4&&Il(n);case 26:case 5:Nu(e,n),t===null&&r&4&&Al(n),r&512&&Cl(n,n.return);break;case 12:Nu(e,n);break;case 31:Nu(e,n),r&4&&Su(e,n);break;case 13:Nu(e,n),r&4&&Cu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_f.bind(null,n),lm(e,n))));break;case 22:if(r=n.memoizedState!==null||tu,!r){var a=t!==null&&t.memoizedState!==null||nu;t=tu,i=nu,tu=r,(nu=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Fu(e,n,r)):Nu(e,n),tu=t,nu=i}break;case 30:Nu(e,n),r&512&&Cl(n,n.return);break;case 7:r&512&&Cl(n,n.return);default:Nu(e,n)}}function mu(e,t){for(e=e.child;e!==null;)hu(e,t),e=e.sibling}function hu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){pf(e,e.return,t)}gu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,R=!0}catch(t){pf(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?Tp(s,!0):Tp(e.stateNode,!1)}catch(t){pf(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&mu(e,t);break;default:mu(e,t)}}function gu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:hu(n,r);break a;case 22:n.memoizedState===null&&gu(n,r);break a;default:gu(n,r)}}e=e.sibling}}function _u(e){var t=e.alternate;t!==null&&(e.alternate=null,_u(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Mt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var vu=null,yu=!1;function bu(e,t,n){for(n=n.child;n!==null;)xu(e,t,n),n=n.sibling}function xu(e,t,n){if(Qe&&typeof Qe.onCommitFiberUnmount==`function`)try{Qe.onCommitFiberUnmount(Ze,n)}catch{}switch(n.tag){case 26:nu||wl(n,t),bu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!nu&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nu||wl(n,t),Dl(n);var r=vu,i=yu;Cp(n.type)&&(vu=n.stateNode,yu=!1),bu(e,t,n),_m(n.stateNode,n.type,n.memoizedProps),vu=r,yu=i;break;case 5:nu||wl(n,t),Dl(n);case 6:if(n.tag===6&&Dl(n),r=vu,i=yu,vu=null,bu(e,t,n),vu=r,yu=i,vu!==null){if(yu)try{(vu.nodeType===9?vu.body:vu.nodeName===`HTML`?vu.ownerDocument.body:vu).removeChild(n.stateNode),R=!0}catch(e){pf(n,t,e)}else try{vu.removeChild(n.stateNode),R=!0}catch(e){pf(n,t,e)}}break;case 18:vu!==null&&(yu?(e=vu,wp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Uh(e)):wp(vu,n.stateNode));break;case 4:r=vu,i=yu,vu=n.stateNode.containerInfo,yu=!0,bu(e,t,n),vu=r,yu=i;break;case 0:case 11:case 14:case 15:bl(2,n,t),nu||bl(4,n,t),bu(e,t,n);break;case 1:nu||(wl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Sl(n,t,r)),bu(e,t,n);break;case 21:bu(e,t,n);break;case 22:nu=(r=nu)||n.memoizedState!==null,bu(e,t,n),nu=r;break;case 30:wl(n,t),bu(e,t,n);break;case 7:nu||wl(n,t),bu(e,t,n);break;default:bu(e,t,n)}}function Su(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Uh(e)}catch(e){pf(t,t.return,e)}}}function Cu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Uh(e)}catch(e){pf(t,t.return,e)}}function wu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new au),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new au),t;default:throw Error(a(435,e.tag))}}function Tu(e,t){var n=wu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=vf.bind(null,e,t);t.then(r,r)}})}function Eu(e,t,n){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var o=r[i],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Cp(l.type)){vu=l.stateNode,yu=!1;break a}break;case 5:vu=l.stateNode,yu=!1;break a;case 3:case 4:vu=l.stateNode.containerInfo,yu=!0;break a}l=l.return}if(vu===null)throw Error(a(160));xu(s,c,o),vu=null,yu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ou(t,e,n),t=t.sibling}var Du=null;function Ou(e,t,n){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(i&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Eu(t,e,n),ku(e),i&4&&(bl(3,e,e.return),yl(3,e),bl(5,e,e.return));break;case 1:Eu(t,e,n),ku(e),i&512&&(nu||r===null||wl(r,r.return)),i&64&&tu&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=Du,Eu(t,e,n),ku(e),i&512&&(nu||r===null||wl(r,r.return)),i&4){if(i=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(tu)e.stateNode=pp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,i=o.ownerDocument||o;b:switch(t){case`title`:r=i.getElementsByTagName(`title`)[0],(!r||r[At]||r[wt]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=i.createElement(t),i.head.insertBefore(r,i.querySelector(`head > title`))),rp(r,t,n),r[wt]=e,Lt(r),t=r;break a;case`link`:if(o=Km(`link`,`href`,i).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=i.createElement(t),rp(r,t,n),i.head.appendChild(r);break;case`meta`:if(o=Km(`meta`,`content`,i).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=i.createElement(t),rp(r,t,n),i.head.appendChild(r);break;default:throw Error(a(468,t))}r[wt]=e,Lt(r),t=r}e.stateNode=t}}else tu||qm(o,e.type,e.stateNode)}else e.stateNode=Vm(o,n,e.memoizedProps)}else i===n?n===null&&e.stateNode!==null&&jl(e,e.memoizedProps,r.memoizedProps):(i===null?(t=r.stateNode,t===null||nu||t.parentNode.removeChild(t)):i.count--,n===null?tu||qm(o,e.type,e.stateNode):Vm(o,n,e.memoizedProps))}break;case 27:Eu(t,e,n),ku(e),i&512&&(nu||r===null||wl(r,r.return)),r!==null&&i&4&&jl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=ru,ru=!1,Eu(t,e,n),ru=o,ku(e),i&512&&(nu||r===null||wl(r,r.return)),e.flags&32){t=e.stateNode;try{dn(t,``),R=!0}catch(t){pf(e,e.return,t)}}i&4&&e.stateNode!=null&&(t=e.memoizedProps,jl(e,t,r===null?t:r.memoizedProps)),i&1024&&(iu=!0);break;case 6:if(Eu(t,e,n),ku(e),i&4){if(e.stateNode===null)throw Error(a(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,R=!0}catch(t){pf(e,e.return,t)}}break;case 3:if(R=!1,Gm=null,o=Du,Du=xm(t.containerInfo),Eu(t,e,n),Du=o,ku(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{Uh(t.containerInfo)}catch(t){pf(e,e.return,t)}iu&&(iu=!1,Au(e)),R=!1;break;case 4:i=ru,ru=tu,r=qt(),o=Du,Du=xm(e.stateNode.containerInfo),Eu(t,e,n),ku(e),Du=o,R&&cu&&(lu=!0),R=r,ru=i;break;case 12:Eu(t,e,n),ku(e);break;case 31:Eu(t,e,n),ku(e),i&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Tu(e,t)));break;case 13:Eu(t,e,n),ku(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(pd=He()),i&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Tu(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=tu,l=nu,u=ru;tu=c||o,ru=u||o,nu=l||s,Eu(t,e,n),nu=l,ru=u,tu=c,ku(e),i&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||tu||nu||(t=s||nu,n=tu,r=nu,tu=o||tu,nu=t,Pu(e,2),tu=n,nu=r),!o&&ru||mu(e,o)),i&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Tu(e,n))));break;case 19:Eu(t,e,n),ku(e),i&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Tu(e,t)));break;case 30:i&512&&(nu||r===null||wl(r,r.return)),i=qt(),o=cu,s=(n&335544064)===n,c=e.memoizedProps,cu=s&&vi(c.default,c.update)!==`none`,Eu(t,e,n),ku(e),s&&r!==null&&R&&(e.flags|=4),cu=o,R=i;break;case 21:break;case 7:i&512&&(nu||r===null||wl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Eu(t,e,n),ku(e)}}function ku(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Ml(r)){n=r;break}r=r.return}r=null;for(var i=e.return;i!==null;){if(kl(i)){var o=i.stateNode;r===null?r=[o]:r.push(o)}if(Ol(i))break;i=i.return}var s=r;if(n==null)throw Error(a(160));switch(n.tag){case 27:var c=n.stateNode;Fl(e,Nl(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(dn(l,``),n.flags&=-33),Fl(e,Nl(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Pl(e,Nl(e),u,s);break;default:throw Error(a(161))}}catch(t){pf(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Au(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Au(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,_h=!0,t.reset(),_h=!1),e=e.sibling}}function ju(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Mu(t,e),t=t.sibling;else eu(t,!1)}function Mu(e,t){var n=e.alternate;if(n===null)Kl(e,!1);else switch(e.tag){case 3:if(uu=su=!1,Bl(),ju(t,e),!su&&!lu){if(e=q,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Dp(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),uu=!0}q=null;break;case 5:ju(t,e);break;case 4:r=su,su=!1,ju(t,e),su&&(lu=!0),su=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?ju(t,e):Kl(e,!1));break;case 30:r=su,i=Bl(),su=!1,ju(t,e),su&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=gi(a,o),o=gi(n.memoizedProps,o);var s=vi(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Vl=0,t=$l(e,n,t,o,s,a,!0),Vl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Md(e,e.memoizedProps.onUpdate),q=i):i!==null&&(i.push.apply(i,q),q=i),su=e.flags&32?!0:r;break;default:ju(t,e)}}function Nu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)pu(e,t.alternate,t),t=t.sibling}function Pu(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:bl(4,n,n.return),Pu(n,r);break;case 1:wl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&Sl(n,n.return,i),Pu(n,r);break;case 27:r&2&&_m(n.stateNode,n.type,n.memoizedProps);case 5:wl(n,n.return),n.tag!==5&&n.tag!==27||Dl(n),Pu(n,r);break;case 6:Dl(n);break;case 26:wl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||nu||i.parentNode.removeChild(i),Pu(n,r);break;case 22:n.memoizedState===null&&Pu(n,r);break;case 30:wl(n,n.return),Pu(n,r);break;case 7:wl(n,n.return);default:Pu(n,r)}e=e.sibling}}function Fu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Fu(i,a,n),yl(4,a);break;case 1:if(Fu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){pf(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)bo(l[i],c)}catch(e){pf(r,r.return,e)}}s&&o&64&&xl(a),Cl(a,a.return);break;case 27:n&2&&Il(a);case 5:a.tag!==5&&a.tag!==27||El(a),Fu(i,a,n),s&&r===null&&o&4&&Al(a),Cl(a,a.return);break;case 6:El(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||tu||qm(xm(c.ownerDocument),a.type,c),Fu(i,a,n),s&&r===null&&o&4&&Al(a),Cl(a,a.return);break;case 12:Fu(i,a,n);break;case 31:Fu(i,a,n),s&&o&4&&Su(i,a);break;case 13:Fu(i,a,n),s&&o&4&&Cu(i,a);break;case 22:a.memoizedState===null&&Fu(i,a,n),Cl(a,a.return);break;case 30:Fu(i,a,n),Cl(a,a.return);break;case 7:Cl(a,a.return);default:Fu(i,a,n)}t=t.sibling}}function Iu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ka(n))}function Lu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ka(e))}function Ru(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)zu(e,t,n,r),t=t.sibling;else i&&Ql(t)}function zu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Zl(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Ru(e,t,n,r),a&2048&&yl(9,t);break;case 1:Ru(e,t,n,r);break;case 3:Ru(e,t,n,r),i&&uu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&ka(a)));break;case 12:if(a&2048){Ru(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){pf(t,t.return,e)}}else Ru(e,t,n,r);break;case 31:Ru(e,t,n,r);break;case 13:Ru(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&Zl(t),o._visibility&2?Ru(e,t,n,r):(o._visibility|=2,Bu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&Zl(s),o._visibility&2?Ru(e,t,n,r):Vu(e,t)),a&2048&&Iu(s,t);break;case 24:Ru(e,t,n,r),a&2048&&Lu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Wl(a.child,!0),Wl(t.child,!0))),Ru(e,t,n,r);break;default:Ru(e,t,n,r)}}function Bu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Bu(a,o,s,c,i),yl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Bu(a,o,s,c,i)):u._visibility&2?Bu(a,o,s,c,i):Vu(a,o),i&&l&2048&&Iu(o.alternate,o);break;case 24:Bu(a,o,s,c,i),i&&l&2048&&Lu(o.alternate,o);break;default:Bu(a,o,s,c,i)}t=t.sibling}}function Vu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Vu(n,r),i&2048&&Iu(r.alternate,r);break;case 24:Vu(n,r),i&2048&&Lu(r.alternate,r);break;default:Vu(n,r)}t=t.sibling}}var Hu=8192;function Uu(e,t,n){if(e.subtreeFlags&Hu)for(e=e.child;e!==null;)Wu(e,t,n),e=e.sibling}function Wu(e,t,n){switch(e.tag){case 26:Uu(e,t,n),e.flags&Hu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Qm(n,e)):$m(n,Du,e.memoizedState,e.memoizedProps));break;case 5:Uu(e,t,n),e.flags&Hu&&(e=e.stateNode,(t&335544128)===t&&Qm(n,e));break;case 3:case 4:var r=Du;Du=xm(e.stateNode.containerInfo),Uu(e,t,n),Du=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Hu,Hu=16777216,Uu(e,t,n),Hu=r):Uu(e,t,n));break;case 30:if((e.flags&Hu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Rl===null&&(Rl=new Map),Rl.set(r,i)}Uu(e,t,n);break;default:Uu(e,t,n)}}function Gu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ku(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ou=r,Yu(r,e)}Gu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qu(e),e=e.sibling}function qu(e){switch(e.tag){case 0:case 11:case 15:Ku(e),e.flags&2048&&bl(9,e,e.return);break;case 3:Ku(e);break;case 12:Ku(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ju(e)):Ku(e);break;default:Ku(e)}}function Ju(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ou=r,Yu(r,e)}Gu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:bl(8,t,t.return),Ju(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ju(t));break;default:Ju(t)}e=e.sibling}}function Yu(e,t){for(;ou!==null;){var n=ou;switch(n.tag){case 0:case 11:case 15:bl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ka(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ou=r;else a:for(n=e;ou!==null;){r=ou;var i=r.sibling,a=r.return;if(_u(r),r===n){ou=null;break a}if(i!==null){i.return=a,ou=i;break a}ou=a}}}var Xu={getCacheForType:function(e){var t=xa(Da),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return xa(Da).controller.signal}},Zu=typeof WeakMap==`function`?WeakMap:Map,Qu=0,J=null,Y=null,X=0,Z=0,$u=null,ed=!1,td=!1,nd=!1,rd=0,id=0,ad=0,od=0,sd=0,cd=0,ld=0,ud=null,dd=null,fd=!1,pd=0,md=0,hd=1/0,gd=null,_d=null,vd=0,yd=null,bd=null,xd=0,Sd=0,Cd=null,wd=null,Td=null,Ed=null,Dd=null,Od=0,kd=null;function Ad(){return Qu&2&&X!==0?X&-X:j.T===null?St():Pf()}function jd(){if(cd===0){if(!(X&536870912)||V){var e=at;at<<=1,!(at&3932160)&&(at=262144),cd=e}else cd=536870912}return e=Do.current,e!==null&&(e.flags|=32),cd}function Md(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Fp(gi(e.memoizedProps,n))),Ed===null&&(Ed=[]),Ed.push(t.bind(null,r))}}function Nd(e,t,n){(e===J&&(Z===2||Z===9)||e.cancelPendingCommit!==null)&&(Bd(e,0),Ld(e,X,cd,!1)),mt(e,n),(!(Qu&2)||e!==J)&&(e===J&&(!(Qu&2)&&(od|=n),id===4&&Ld(e,X,cd,!1)),Ef(e))}function Pd(e,t,n){if(Qu&6)throw Error(a(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||lt(e,t),i=r?Jd(e,t):Kd(e,t,!0),o=r;do{if(i===0){td&&!r&&Ld(e,t,0,!1);break}if(n=e.current.alternate,o&&!Id(n)){i=Kd(e,t,!1),o=!1;continue}if(i===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;i=ud;var l=c.current.memoizedState.isDehydrated;if(l&&(Bd(c,s).flags|=256),s=Kd(c,s,!1),s!==2&&s!==6){if(nd&&!l){c.errorRecoveryDisabledLanes|=o,od|=o,i=4;break a}o=dd,dd=i,o!==null&&(dd===null?dd=o:dd.push.apply(dd,o))}i=s}if(o=!1,i!==2)continue}}if(i===1){Bd(e,0),Ld(e,t,0,!0);break}a:{switch(r=e,o=i,o){case 0:case 1:throw Error(a(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Ld(r,t,cd,!ed);break a;case 2:dd=null;break;case 3:case 5:break;default:throw Error(a(329))}if((t&62914560)===t&&(i=pd+300-He(),10<i)){if(Ld(r,t,cd,!ed),ct(r,0,!0)!==0)break a;xd=t,r.timeoutHandle=_p(Fd.bind(null,r,n,dd,gd,fd,t,cd,od,ld,ed,o,`Throttled`,-0,0),i);break a}Fd(r,n,dd,gd,fd,t,cd,od,ld,ed,o,null,-0,0)}break}while(1);Ef(e)}function Fd(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;if(d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:yn},Rl=null,Wu(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=rh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?pd-He():(a&4194048)===a?md-He():0,m=th(d,m),m!==null)){xd=a,e.cancelPendingCommit=m(tf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Ld(e,a,o,!l);return}tf(e,t,a,n,r,i,o,s,c,l,u,d)}function Id(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Br(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ld(e,t,n,r){t=ut(e,t),t&=~sd,t&=~od,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-et(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&gt(e,n,t)}function Rd(){return Qu&6?!0:(Df(0,!1),!1)}function zd(){if(Y!==null){if(Z===0)var e=Y.return;else e=Y,pa=fa=null,ns(e),to=null,no=0,e=Y;for(;e!==null;)vl(e.alternate,e),e=e.return;Y=null}}function Bd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,vp(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),xd=0,zd(),J=e,Y=n=Ni(e.current,null),X=t,Z=0,$u=null,ed=!1,td=lt(e,t),nd=!1,ld=cd=sd=od=ad=id=0,dd=ud=null,fd=!1,rd=ut(e,t),Ci(),n}function Vd(e,t){G=null,j.H=dc,t===Ga||t===qa?(t=$a(),Z=3):t===Ka?(t=$a(),Z=4):Z=t===kc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,$u=t,Y===null&&(id=1,Cc(e,Vi(t,e.current)))}function Hd(){var e=Do.current;return e===null?!0:(X&4194048)===X?Oo===null:(X&62914560)===X||X&536870912?e===Oo:!1}function Ud(){var e=j.H;return j.H=dc,e===null?dc:e}function Wd(){var e=j.A;return j.A=Xu,e}function Gd(){id=4,ed||(X&4194048)!==X&&Do.current!==null||(td=!0),!(ad&134217727)&&!(od&134217727)||J===null||Ld(J,X,cd,!1)}function Kd(e,t,n){var r=Qu;Qu|=2;var i=Ud(),a=Wd();(J!==e||X!==t)&&(gd=null,Bd(e,t)),t=!1;var o=id;a:do try{if(Z!==0&&Y!==null){var s=Y,c=$u;switch(Z){case 8:zd(),o=6;break a;case 3:case 2:case 9:case 6:Do.current===null&&(t=!0);var l=Z;if(Z=0,$u=null,Qd(e,s,c,l),n&&td){o=0;break a}break;default:l=Z,Z=0,$u=null,Qd(e,s,c,l)}}qd(),o=id;break}catch(t){Vd(e,t)}while(1);return t&&e.shellSuspendCounter++,pa=fa=null,Qu=r,j.H=i,j.A=a,Y===null&&(J=null,X=0,Ci()),o}function qd(){for(;Y!==null;)Xd(Y)}function Jd(e,t){var n=Qu;Qu|=2;var r=Ud(),i=Wd();J!==e||X!==t?(gd=null,hd=He()+500,Bd(e,t)):td=lt(e,t);a:do try{if(Z!==0&&Y!==null){t=Y;var o=$u;b:switch(Z){case 1:Z=0,$u=null,Qd(e,t,o,1);break;case 2:case 9:if(Ya(o)){Z=0,$u=null,Zd(t);break}t=function(){Z!==2&&Z!==9||J!==e||(Z=7),Ef(e)},o.then(t,t);break a;case 3:Z=7;break a;case 4:Z=5;break a;case 7:Ya(o)?(Z=0,$u=null,Zd(t)):(Z=0,$u=null,Qd(e,t,o,7));break;case 5:var s=null;switch(Y.tag){case 26:s=Y.memoizedState;case 5:case 27:var c=Y;if(s?Xm(s):c.stateNode.complete){Z=0,$u=null;var l=c.sibling;if(l!==null)Y=l;else{var u=c.return;u===null?Y=null:(Y=u,$d(u))}break b}}Z=0,$u=null,Qd(e,t,o,5);break;case 6:Z=0,$u=null,Qd(e,t,o,6);break;case 8:zd(),id=6;break a;default:throw Error(a(462))}}Yd();break}catch(t){Vd(e,t)}while(1);return pa=fa=null,j.H=r,j.A=i,Qu=n,Y===null?(J=null,X=0,Ci(),id):0}function Yd(){for(;Y!==null&&!Be();)Xd(Y)}function Xd(e){var t=ll(e.alternate,e,rd);e.memoizedProps=e.pendingProps,t===null?$d(e):Y=t}function Zd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Uc(n,t,t.pendingProps,t.type,void 0,X);break;case 11:t=Uc(n,t,t.pendingProps,t.type.render,t.ref,X);break;case 5:ns(t);var r=t;r===na&&(V?(sa(r),r.tag===5&&r.stateNode!=null&&(ra=r.stateNode)):(sa(r),V=!0));default:vl(n,t),t=Y=Pi(t,rd),t=ll(n,t,rd)}e.memoizedProps=e.pendingProps,t===null?$d(e):Y=t}function Qd(e,t,n,r){pa=fa=null,ns(t),to=null,no=0;var i=t.return;try{if(Oc(e,i,t,n,X)){id=1,Cc(e,Vi(n,e.current)),Y=null;return}}catch(t){if(i!==null)throw Y=i,t;id=1,Cc(e,Vi(n,e.current)),Y=null;return}t.flags&32768?(V||r===1?e=!0:td||X&536870912?e=!1:(ed=e=!0,(r===2||r===9||r===3||r===6)&&(r=Do.current,r!==null&&r.tag===13&&(r.flags|=16384))),ef(t,e)):$d(t)}function $d(e){var t=e;do{if(t.flags&32768){ef(t,ed);return}e=t.return;var n=gl(t.alternate,t,rd);if(n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);id===0&&(id=5)}function ef(e,t){do{var n=_l(e.alternate,e);if(n!==null){n.flags&=32767,Y=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Y=e;return}Y=e=n}while(e!==null);id=6,Y=null}function tf(e,t,n,r,i,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do uf();while(vd!==0);if(Qu&6)throw Error(a(327));if(t!==null){if(t===e.current)throw Error(a(177));e===J&&(Y=J=null,X=0),bd=t,yd=e,xd=n,Cd=i,wd=r,nf(e,t,n,s,c,l,f)}}function nf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Sd=s,s|=Si,ht(e,n,s,r,i,a),Ed=null,(n&335544064)===n?(Dd=Ma(e),r=10262):(Dd=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,yf(Ke,function(){return df(),null})):(e.callbackNode=null,e.callbackPriority=0),Ll=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=j.T,j.T=null,i=M.p,M.p=2,a=Qu,Qu|=4;try{du(e,t,n)}finally{Qu=a,M.p=i,j.T=r}}vd=1,Ll?Td=Np(o,e.containerInfo,Dd,of,sf,af,cf,df,rf,null,null):(of(),sf(),cf())}function rf(e){if(vd!==0){var t=yd.onRecoverableError;t(e,{componentStack:null})}}function af(){vd===3&&(vd=0,Mu(bd,yd),vd=4)}function of(){if(vd===1){vd=0;var e=yd,t=bd,n=xd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=j.T,j.T=null;var i=M.p;M.p=2;var a=Qu;Qu|=4;try{cu=lu=!1,Ou(t,e,n),n=lp;var o=Kr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Gr(s.ownerDocument.documentElement,s)){if(c!==null&&qr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Wr(s,h),v=Wr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}_h=!!cp,lp=cp=null}finally{Qu=a,M.p=i,j.T=r}}e.current=t,vd=2}}function sf(){if(vd===2){vd=0;var e=yd,t=bd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=j.T,j.T=null;var r=M.p;M.p=2;var i=Qu;Qu|=4;try{pu(e,t.alternate,t)}finally{Qu=i,M.p=r,j.T=n}}vd=3}}function cf(){if(vd===4||vd===3){vd=0;var e=Td;Td=null,Ve();var t=yd,n=bd,r=xd,i=wd,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?vd=5:(vd=0,bd=yd=null,lf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(_d=null),bt(r),n=n.stateNode,Qe&&typeof Qe.onCommitFiberRoot==`function`)try{Qe.onCommitFiberRoot(Ze,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=j.T,a=M.p,M.p=2,j.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{j.T=n,M.p=a}}if(i=Ed,o=Dd,Dd=null,i!==null&&(Ed=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);xd&3&&uf(),Ef(t),a=t.pendingLanes,r&261930&&a&42?t===kd?Od++:(Od=0,kd=t):(Od=0,kd=null),Df(0,!1)}}function lf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ka(t)))}function uf(){return Td!==null&&(Td.skipTransition(),Td=null),of(),sf(),cf(),df()}function df(){if(vd!==5)return!1;var e=yd,t=Sd;Sd=0;var n=bt(xd),r=j.T,i=M.p;try{M.p=32>n?32:n,j.T=null,n=Cd,Cd=null;var o=yd,s=xd;if(vd=0,bd=yd=null,xd=0,Qu&6)throw Error(a(331));var c=Qu;if(Qu|=4,qu(o.current),zu(o,o.current,s,n),Qu=c,Df(0,!1),Qe&&typeof Qe.onPostCommitFiberRoot==`function`)try{Qe.onPostCommitFiberRoot(Ze,o)}catch{}return!0}finally{M.p=i,j.T=r,lf(e,t)}}function ff(e,t,n){t=Vi(n,t),t=Tc(e.stateNode,t,2),e=mo(e,t,2),e!==null&&(mt(e,2),Ef(e))}function pf(e,t,n){if(e.tag===3)ff(e,e,n);else for(;t!==null;){if(t.tag===3){ff(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(_d===null||!_d.has(r))){e=Vi(n,e),n=Ec(2),r=mo(t,n,2),r!==null&&(Dc(n,r,t,e),mt(r,2),Ef(r));break}}t=t.return}}function mf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Zu;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(nd=!0,i.add(n),e=hf.bind(null,e,t,n),t.then(e,e))}function hf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,J===e&&(X&n)===n&&(id===4||id===3&&(X&62914560)===X&&300>He()-pd?Qu&2?sd|=n:Bd(e,0):sd|=n,ld===X&&(ld=0)),Ef(e)}function gf(e,t){t===0&&(t=ft()),e=Ei(e,t),e!==null&&(mt(e,t),Ef(e))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gf(e,n)}function vf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(t),gf(e,n)}function yf(e,t){return Re(e,t)}var bf=null,xf=null,Sf=!1,Cf=!1,wf=!1,Tf=0;function Ef(e){e!==xf&&e.next===null&&(xf===null?bf=xf=e:xf=xf.next=e),Cf=!0,Sf||(Sf=!0,Nf())}function Df(e,t){if(!wf&&Cf){wf=!0;do for(var n=!1,r=bf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-et(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Mf(r,a))}else a=X,a=ct(r,r===J?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||lt(r,a)||(n=!0,Mf(r,a))}r=r.next}while(n);wf=!1}}function Of(){kf()}function kf(){Cf=Sf=!1;var e=0;Tf!==0&&gp()&&(e=Tf);for(var t=He(),n=null,r=bf;r!==null;){var i=r.next,a=Af(r,t);a===0?(r.next=null,n===null?bf=i:n.next=i,i===null&&(xf=n)):(n=r,(e!==0||a&3)&&(Cf=!0)),r=i}vd!==0&&vd!==5||Df(e,!1),Tf!==0&&(Tf=0)}function Af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-et(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=dt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=J,n=X,n=ct(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Z===2||Z===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ze(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||lt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&ze(r),bt(n)){case 2:case 8:n=Ge;break;case 32:n=Ke;break;case 268435456:n=Je;break;default:n=Ke}return r=jf.bind(null,e),n=Re(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&ze(r),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,t){if(vd!==0&&vd!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(uf()&&e.callbackNode!==n)return null;var r=X;return r=ct(e,e===J?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Pd(e,r,t),Af(e,He()),e.callbackNode!=null&&e.callbackNode===n?jf.bind(null,e):null)}function Mf(e,t){if(uf())return null;Pd(e,t,!0)}function Nf(){xp(function(){Qu&6?Re(We,Of):kf()})}function Pf(){if(Tf===0){var e=Fa;e===0&&(e=it,it<<=1,!(it&261888)&&(it=256)),Tf=e}return Tf}function Ff(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:vn(e)}function If(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Ff((i[Tt]||null).action),o=r.submitter;o&&(t=(t=o[Tt]||null)?Ff(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new zn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Tf!==0){var e=new FormData(i,o);Zs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),Zs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Lf=0;Lf<pi.length;Lf++){var Rf=pi[Lf];mi(Rf.toLowerCase(),`on`+(Rf[0].toUpperCase()+Rf.slice(1)))}mi(ai,`onAnimationEnd`),mi(oi,`onAnimationIteration`),mi(si,`onAnimationStart`),mi(`dblclick`,`onDoubleClick`),mi(`focusin`,`onFocus`),mi(`focusout`,`onBlur`),mi(ci,`onTransitionRun`),mi(li,`onTransitionStart`),mi(ui,`onTransitionCancel`),mi(di,`onTransitionEnd`),Ht(`onMouseEnter`,[`mouseout`,`mouseover`]),Ht(`onMouseLeave`,[`mouseout`,`mouseover`]),Ht(`onPointerEnter`,[`pointerout`,`pointerover`]),Ht(`onPointerLeave`,[`pointerout`,`pointerover`]),Vt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Vt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Vt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Vt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Vt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Vt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var zf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Bf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));function Vf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){yi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){yi(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[L];n===void 0&&(n=t[L]=new Set);var r=e+`__bubble`;n.has(r)||(Gf(t,e,2,!1),n.add(r))}function Hf(e,t,n){var r=0;t&&(r|=4),Gf(n,e,r,t)}var Uf=`_reactListening`+Math.random().toString(36).slice(2);function Wf(e){if(!e[Uf]){e[Uf]=!0,zt.forEach(function(t){t!==`selectionchange`&&(Bf.has(t)||Hf(t,!1,e),Hf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uf]||(t[Uf]=!0,Hf(`selectionchange`,!1,t))}}function Gf(e,t,n,r){switch(wh(t)){case 2:var i=vh;break;case 8:i=yh;break;default:i=bh}n=i.bind(null,t,n,e),i=void 0,!kn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Kf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var c=r.stateNode.containerInfo;if(c===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;c!==null;){if(o=Nt(c),o===null)return;if(l=o.tag,l===5||l===6||l===26||l===27){r=a=o;continue a}c=c.parentNode}}r=r.return}En(function(){var r=a,i=xn(n),o=[];a:{var c=fi.get(e);if(c!==void 0){var l=zn,u=e;switch(e){case`keypress`:if(z(n)===0)break a;case`keydown`:case`keyup`:l=rr;break;case`focusin`:u=`focus`,l=Jn;break;case`focusout`:u=`blur`,l=Jn;break;case`beforeblur`:case`afterblur`:l=Jn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Kn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=qn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=or;break;case ai:case oi:case si:l=Yn;break;case di:l=sr;break;case`scroll`:case`scrollend`:l=Vn;break;case`wheel`:l=cr;break;case`copy`:case`cut`:case`paste`:l=Xn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=ir;break;case`submit`:l=ar;break;case`toggle`:case`beforetoggle`:l=lr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=Dn(m,p),g!=null&&d.push(qf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),o.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==bn&&(u=n.relatedTarget||n.fromElement)&&(Nt(u)||u[Et]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Nt(l):null,l!==null&&(f=s(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Kn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=ir,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:Ft(c),h=l==null?u:Ft(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Nt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?w(c,l,Yf):null,c!==null&&Xf(o,u,c,d,!1),l!==null&&f!==null&&Xf(o,f,l,d,!0)))}a:{if(c=r?Ft(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=kr;else if(Cr(c)){if(B)_=Rr;else{_=Ir;var v=Fr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&hn(r.elementType)&&(_=kr):_=Lr;if(_&&=_(e,r)){wr(o,_,n,i);break a}v&&v(e,c,r)}switch(v=r?Ft(r):window,e){case`focusin`:(Cr(v)||v.contentEditable===`true`)&&(Yr=v,Xr=r,Zr=null);break;case`focusout`:Zr=Xr=Yr=null;break;case`mousedown`:Qr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Qr=!1,$r(o,n,i);break;case`selectionchange`:if(Jr)break;case`keydown`:case`keyup`:$r(o,n,i)}var y;if(dr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else yr?_r(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(mr&&n.locale!==`ko`&&(yr||b!==`onCompositionStart`?b===`onCompositionEnd`&&yr&&(y=Pn()):(jn=i,Mn=`value`in jn?jn.value:jn.textContent,yr=!0)),v=Jf(r,b),0<v.length&&(b=new Zn(b,e,null,n,i),o.push({event:b,listeners:v}),y?b.data=y:(y=vr(n),y!==null&&(b.data=y)))),(y=pr?br(e,n):xr(e,n))&&(b=Jf(r,`onBeforeInput`),0<b.length&&(v=new Zn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:v,listeners:b}),v.data=y)),If(o,e,r,n,i)}Vf(o,t)})}function qf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=Dn(e,n),i!=null&&r.unshift(qf(e,i,a)),i=Dn(e,t),i!=null&&r.push(qf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Yf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=Dn(n,a),l!=null&&o.unshift(qf(n,l,c))):i||(l=Dn(n,a),l!=null&&o.push(qf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zf=/\r\n?/g,Qf=/\u0000|\uFFFD/g;function $f(e){return(typeof e==`string`?e:``+e).replace(Zf,`
`).replace(Qf,``)}function ep(e,t){return t=$f(t),$f(e)===t}function tp(e,t,n,r,i,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||dn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&dn(e,``+r);else return;break;case`className`:Yt(e,`class`,r);break;case`tabIndex`:Yt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Yt(e,n,r);break;case`style`:mn(e,r,o);return;case`data`:if(t!==`object`){Yt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=vn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&tp(e,t,`name`,i.name,i,null),tp(e,t,`formEncType`,i.formEncType,i,null),tp(e,t,`formMethod`,i.formMethod,i,null),tp(e,t,`formTarget`,i.formTarget,i,null)):(tp(e,t,`encType`,i.encType,i,null),tp(e,t,`method`,i.method,i,null),tp(e,t,`target`,i.target,i,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=vn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=yn);return;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(a(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(a(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=vn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Jt(e,`popover`,r);break;case`xlinkActuate`:Xt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Xt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Xt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Xt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Xt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Xt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Xt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Xt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Xt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Jt(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=gn.get(n)||n,Jt(e,n,r);else return}R=!0}function np(e,t,n,r,i,o){switch(n){case`style`:mn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(a(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(a(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)dn(e,r);else if(typeof r==`number`||typeof r==`bigint`)dn(e,``+r);else return;break;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=yn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Bt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),o=n.slice(2,i?n.length-7:void 0),t=e[Tt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,i),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,i);break a}R=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):Jt(e,n,r)}return}R=!0}function rp(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(a(137,t));default:tp(e,t,o,s,n,null)}}i&&tp(e,t,`srcSet`,n.srcSet,n,null),r&&tp(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(a(137,t));break;default:tp(e,t,r,d,n,null)}}on(e,o,c,l,u,s,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:tp(e,t,i,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&cn(e,!!r,n,!0):cn(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=i=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(a(91));break;default:tp(e,t,s,c,n,null)}un(e,r,i,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:tp(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<zf.length;r++)Q(zf[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(a(137,t));default:tp(e,t,u,r,n,null)}return;default:if(hn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&np(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&tp(e,t,c,r,n,null))}var ip={};function ap(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||tp(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(R=!0),o=m;break;case`name`:m!==f&&(R=!0),i=m;break;case`checked`:m!==f&&(R=!0),u=m;break;case`defaultChecked`:m!==f&&(R=!0),d=m;break;case`value`:m!==f&&(R=!0),s=m;break;case`defaultValue`:m!==f&&(R=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(a(137,t));break;default:m!==f&&tp(e,t,p,m,r,f)}}an(e,s,c,l,u,d,o,i);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||tp(e,t,o,null,r,l)}for(i in r)if(o=r[i],l=n[i],r.hasOwnProperty(i)&&(o!=null||l!=null))switch(i){case`value`:o!==l&&(R=!0),p=o;break;case`defaultValue`:o!==l&&(R=!0),c=o;break;case`multiple`:o!==l&&(R=!0),s=o;default:o!==l&&tp(e,t,i,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?cn(e,!!n,n?[]:``,!1):cn(e,!!n,t,!0)):cn(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:tp(e,t,c,null,r,i)}for(s in r)if(i=r[s],o=n[s],r.hasOwnProperty(s)&&(i!=null||o!=null))switch(s){case`value`:i!==o&&(R=!0),p=i;break;case`defaultValue`:i!==o&&(R=!0),m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(a(91));break;default:i!==o&&tp(e,t,s,i,r,o)}ln(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:tp(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(R=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:tp(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&tp(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(a(137,t));break;default:tp(e,t,u,p,r,m)}return;default:if(hn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&np(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||np(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&tp(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||tp(e,t,f,p,r,m)}function op(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function sp(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&op(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&op(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var cp=null,lp=null;function up(e){return e.nodeType===9?e:e.ownerDocument}function dp(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function fp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function pp(e,t,n,r){return n=up(n).createElement(e),n[wt]=r,n[Tt]=t,rp(n,e,t),Lt(n),n}function mp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hp=null;function gp(){var e=window.event;return e&&e.type===`popstate`?e!==hp&&(hp=e,!0):(hp=null,!1)}var _p=typeof setTimeout==`function`?setTimeout:void 0,vp=typeof clearTimeout==`function`?clearTimeout:void 0,yp=typeof Promise==`function`?Promise:void 0,bp=typeof requestAnimationFrame==`function`?requestAnimationFrame:_p,xp=typeof queueMicrotask==`function`?queueMicrotask:yp===void 0?_p:function(e){return yp.resolve(null).then(e).catch(Sp)};function Sp(e){setTimeout(function(){throw e})}function Cp(e){return e===`head`}function wp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Uh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)vm(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,vm(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[At]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&vm(e.ownerDocument.body)}n=i}while(n);Uh(t)}function Tp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Ep(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Dp(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Op(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function kp(e){return Op(e.getBoundingClientRect(),getComputedStyle(e),e)}function Ap(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Op(t,n,e)}function jp(e){return e.documentElement.clientHeight}function Mp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Np(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(jp(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Zm(f),u>eh){s.length=o;break}f=new Promise(Mp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Pp(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Pp.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:T({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Pp.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Pp.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Fp(e){return{name:e,group:new Pp(`group`,e),imagePair:new Pp(`image-pair`,e),old:new Pp(`old`,e),new:new Pp(`new`,e)}}function Ip(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Ip.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Vp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=zp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),p(this._fragmentFiber.child,!1,Lp,e,s,r)}this._eventListeners=a}};function Lp(e,t,n,r){return v(e).addEventListener(t,n,r),!1}Ip.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Vp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=zp(i.optionsOrUseCapture),p(this._fragmentFiber.child,!1,Rp,e,n,i),r.splice(t,1),a!==null&&a()}};function Rp(e,t,n,r){return v(e).removeEventListener(t,n,r),!1}function zp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Bp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Vp(e,t,n,r){if(e.length===0)return-1;r=Bp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&Bp(a.optionsOrUseCapture)===r)return i}return-1}Ip.prototype.dispatchEvent=function(e){var t=m(this._fragmentFiber);if(t===null)return!0;t=v(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,zp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,zp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Ip.prototype.focus=function(e){p(this._fragmentFiber.child,!0,Hp,e,void 0,void 0)};function Hp(e,t){return e.tag!==6&&(e=v(e),mm(e,t))}Ip.prototype.focusLast=function(e){var t=[];p(this._fragmentFiber.child,!0,Up,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Hp(t[n],e);n--);};function Up(e,t){return t.push(e),!1}Ip.prototype.blur=function(){var e=m(this._fragmentFiber);e!==null&&(e=v(e),e=up(e).activeElement,e!==null&&p(this._fragmentFiber.child,!1,Wp,e,void 0,void 0))};function Wp(e,t){return e.tag!==6&&(e=v(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Ip.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),p(this._fragmentFiber.child,!1,Gp,e,void 0,void 0)};function Gp(e,t){return e.tag!==6&&(e=v(e),t.observe(e),!1)}Ip.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),p(this._fragmentFiber.child,!1,Kp,e,void 0,void 0);for(var n=t=0;n<qp.length;n++){var r=qp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):qp[t++]=r}qp.length=t}};function Kp(e,t){return e.tag!==6&&(e=v(e),t.unobserve(e),!1)}var qp=[],Jp=!1;function Yp(e,t,n){qp.push({fragmentInstance:e,observer:t,instance:n}),Jp||(Jp=!0,hm(function(){Jp=!1;var e=qp;qp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Ip.prototype.getClientRects=function(){var e=[];return p(this._fragmentFiber.child,!1,Xp,e,void 0,void 0),e};function Xp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=v(e),t.push.apply(t,e.getClientRects());return!1}Ip.prototype.getRootNode=function(e){var t=m(this._fragmentFiber);return t===null?this:v(t).getRootNode(e)},Ip.prototype.compareDocumentPosition=function(e){var t=m(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];p(this._fragmentFiber.child,!1,Up,n,void 0,void 0);var r=v(t);if(n.length===0){if(n=r,h(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=g(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=v(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=v(n[0]),i=v(n[n.length-1]);var a=h(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Zp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Zp(e,t,n,r,i){var a=Nt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=m(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=w(n,a,C),t===null?t=!1:(p(t,!0,x,a,n),a=y,y=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=w(r,a,C),t===null?t=!1:(p(t,!0,S,a,r),a=y,b=y=null,t=a!==null)),t):!1}function Qp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Ip.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(a(566));var t=[];p(this._fragmentFiber.child,!1,Up,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=g(this._fragmentFiber);if(r=n?r[1]||r[0]||m(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=v(r),Qp(e,n);return}if(r=v(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var i=t[r];i.tag===6?(i=v(i),Qp(i,n)):v(i).scrollIntoView(e),r+=n?-1:1}};function $p(e,t){return e=v(e),em(e,t),!1}function em(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,zp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<qp.length;i++){var a=qp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(qp[r++]=a)}qp.length=r,n.observe(e)}),em(e,t))}function nm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,zp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Yp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function rm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:rm(n),Mt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function im(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[At])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=um(e.nextSibling),e===null)break}return null}function am(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=um(e.nextSibling),e===null))return null;return e}function om(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=um(e.nextSibling),e===null))return null;return e}function sm(e){return e.data===`$?`||e.data===`$~`}function cm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function lm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function um(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var dm=null;function fm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return um(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function pm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function mm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function hm(e){bp(function(){bp(function(t){return e(t)})})}function gm(e,t,n){switch(t=up(n),e){case`html`:if(e=t.documentElement,!e)throw Error(a(452));return e;case`head`:if(e=t.head,!e)throw Error(a(453));return e;case`body`:if(e=t.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function _m(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&tp(e,t,r,null,ip,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===yn&&(e.onclick=null),Mt(e)}function vm(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Mt(e)}var ym=new Map,bm=new Set;function xm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Sm=M.d;M.d={f:Cm,r:wm,D:Dm,C:Om,L:km,m:Am,X:Mm,S:jm,M:Nm};function Cm(){var e=Sm.f(),t=Rd();return e||t}function wm(e){var t=Pt(e);t!==null&&t.tag===5&&t.type===`form`?$s(t):Sm.r(e)}var Tm=typeof document>`u`?null:document;function Em(e,t,n){var r=Tm;if(r&&typeof t==`string`&&t){var i=rn(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),bm.has(i)||(bm.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),rp(t,`link`,e),Lt(t),r.head.appendChild(t)))}}function Dm(e){Sm.D(e),Em(`dns-prefetch`,e,null)}function Om(e,t){Sm.C(e,t),Em(`preconnect`,e,t)}function km(e,t,n){Sm.L(e,t,n);var r=Tm;if(r&&e&&t){var i=`link[rel="preload"][as="`+rn(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+rn(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+rn(n.imageSizes)+`"]`)):i+=`[href="`+rn(e)+`"]`;var a=i;switch(t){case`style`:a=Fm(e);break;case`script`:a=zm(e)}if(!(ym.has(a)||(e=T({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),ym.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Im(a))||t===`script`&&r.querySelector(Bm(a))))){var o=r.createElement(`link`);rp(o,`link`,e),t===`style`&&(o[jt]=!0,o.onload=o.onerror=function(){Rt(o)}),Lt(o),r.head.appendChild(o)}}}function Am(e,t){Sm.m(e,t);var n=Tm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+rn(r)+`"][href="`+rn(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=zm(e)}if(!ym.has(a)&&(e=T({rel:`modulepreload`,href:e},t),ym.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Bm(a)))return}r=n.createElement(`link`),rp(r,`link`,e),Lt(r),n.head.appendChild(r)}}}function jm(e,t,n){Sm.S(e,t,n);var r=Tm;if(r&&e){var i=It(r).hoistableStyles,a=Fm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Im(a)))s.loading=5;else{e=T({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=ym.get(a))&&Um(e,n);var c=o=r.createElement(`link`);Lt(c),rp(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Hm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Mm(e,t){Sm.X(e,t);var n=Tm;if(n&&e){var r=It(n).hoistableScripts,i=zm(e),a=r.get(i);a||(a=n.querySelector(Bm(i)),a||(e=T({src:e,async:!0},t),(t=ym.get(i))&&Wm(e,t),a=n.createElement(`script`),Lt(a),rp(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t){Sm.M(e,t);var n=Tm;if(n&&e){var r=It(n).hoistableScripts,i=zm(e),a=r.get(i);a||(a=n.querySelector(Bm(i)),a||(e=T({src:e,async:!0,type:`module`},t),(t=ym.get(i))&&Wm(e,t),a=n.createElement(`script`),Lt(a),rp(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Pm(e,t,n,r){var i=(i=P.current)?xm(i):null;if(!i)throw Error(a(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Fm(n.href),t=It(i).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Fm(n.href);var o=It(i).hoistableStyles,s=o.get(e);if(s||(i=i.ownerDocument||i,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=i.querySelector(Im(e)))?o._p||(s.instance=o,s.state.loading=5):(o=ym.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ym.set(e,o)),Rm(i,e,o,s.state))),t&&r===null)throw Error(a(528,``));return s}if(t&&r!==null)throw Error(a(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=zm(n),t=It(i).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Fm(e){return`href="`+rn(e)+`"`}function Im(e){return`link[rel="stylesheet"][`+e+`]`}function Lm(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function Rm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[jt]){r.loading=1;return}}else t=e.createElement(`link`),t[jt]=!0,t.onload=t.onerror=Rt.bind(null,t),rp(t,`link`,n),Lt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function zm(e){return`[src="`+rn(e)+`"]`}function Bm(e){return`script[async]`+e}function Vm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+rn(n.href)+`"]`);if(r)return t.instance=r,Lt(r),r;var i=T({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Lt(r),rp(r,`style`,i),Hm(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Fm(n.href);var o=e.querySelector(Im(i));if(o)return t.state.loading|=4,t.instance=o,Lt(o),o;r=Lm(n),(i=ym.get(i))&&Um(r,i),o=(e.ownerDocument||e).createElement(`link`),Lt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),rp(o,`link`,r),t.state.loading|=4,Hm(o,n.precedence,e),t.instance=o;case`script`:return o=zm(n.src),(i=e.querySelector(Bm(o)))?(t.instance=i,Lt(i),i):(r=n,(i=ym.get(o))&&(r=T({},n),Wm(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),Lt(i),rp(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(a(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Hm(r,n.precedence,e));return t.instance}function Hm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Wm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Gm=null;function Km(e,t,n){if(Gm===null){var r=new Map,i=Gm=new Map;i.set(n,r)}else i=Gm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[At]||a[wt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function qm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Jm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Ym(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Xm(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Zm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Qm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Zm(t),e.suspenseyImages.push(t)),e=ih.bind(e),t.decode().then(e,e))}function $m(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Fm(r.href),a=t.querySelector(Im(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=rh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Lt(a);return}a=t.ownerDocument||t,r=Lm(r),(i=ym.get(i))&&Um(r,i),a=a.createElement(`link`),Lt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),rp(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=rh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var eh=0;function th(e,t){return e.stylesheets&&e.count===0&&oh(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&oh(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&eh===0&&(eh=62500*sp());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&oh(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>eh?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function nh(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)oh(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function rh(){this.count--,nh(this)}function ih(){this.imgCount--,nh(this)}var ah=null;function oh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ah=new Map,t.forEach(sh,e),ah=null,rh.call(e))}function sh(e,t){if(!(t.state.loading&4)){var n=ah.get(e);if(n)var r=n.get(null);else{n=new Map,ah.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=rh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var ch={$$typeof:O,Provider:null,Consumer:null,_currentValue:ye,_currentValue2:ye,_threadCount:0};function lh(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pt(0),this.hiddenUpdates=pt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function uh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new lh(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ji(3,null,null,t),e.current=a,a.stateNode=e,t=Oa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},uo(a),e}function dh(e){return e?(e=ki,e):ki}function fh(e,t,n,r,i,a){i=dh(i),r.context===null?r.context=i:r.pendingContext=i,r=po(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=mo(e,r,t),n!==null&&(Nd(n,e,t),ho(n,e,t))}function ph(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function mh(e,t){ph(e,t),(e=e.alternate)&&ph(e,t)}function hh(e){if(e.tag===13||e.tag===31){var t=Ei(e,67108864);t!==null&&Nd(t,e,67108864),mh(e,67108864)}}function gh(e){if(e.tag===13||e.tag===31){var t=Ad();t=yt(t);var n=Ei(e,t);n!==null&&Nd(n,e,t),mh(e,t)}}var _h=!0;function vh(e,t,n,r){var i=j.T;j.T=null;var a=M.p;try{M.p=2,bh(e,t,n,r)}finally{M.p=a,j.T=i}}function yh(e,t,n,r){var i=j.T;j.T=null;var a=M.p;try{M.p=8,bh(e,t,n,r)}finally{M.p=a,j.T=i}}function bh(e,t,n,r){if(_h){var i=xh(r);if(i===null)Kf(e,t,r,Sh,n),Nh(e,r);else if(Fh(i,e,t,n,r))r.stopPropagation();else if(Nh(e,r),t&4&&-1<Mh.indexOf(e)){for(;i!==null;){var a=Pt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=st(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-et(o);s.entanglements[1]|=c,o&=~c}Ef(a),!(Qu&6)&&(hd=He()+500,Df(0,!1))}}break;case 31:case 13:s=Ei(a,2),s!==null&&Nd(s,a,2),Rd(),mh(a,2)}if(a=xh(r),a===null&&Kf(e,t,r,Sh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Kf(e,t,r,null,n)}}function xh(e){return e=xn(e),Ch(e)}var Sh=null;function Ch(e){if(Sh=null,e=Nt(e),e!==null){var t=s(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=c(t),e!==null)return e;e=null}else if(n===31){if(e=l(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Sh=e,null}function wh(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ue()){case We:return 2;case Ge:return 8;case Ke:case qe:return 32;case Je:return 268435456;default:return 32}default:return 32}}var Th=!1,Eh=null,Dh=null,Oh=null,kh=new Map,Ah=new Map,jh=[],Mh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Nh(e,t){switch(e){case`focusin`:case`focusout`:Eh=null;break;case`dragenter`:case`dragleave`:Dh=null;break;case`mouseover`:case`mouseout`:Oh=null;break;case`pointerover`:case`pointerout`:kh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Ah.delete(t.pointerId)}}function Ph(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Pt(t),t!==null&&hh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Fh(e,t,n,r,i){switch(t){case`focusin`:return Eh=Ph(Eh,e,t,n,r,i),!0;case`dragenter`:return Dh=Ph(Dh,e,t,n,r,i),!0;case`mouseover`:return Oh=Ph(Oh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return kh.set(a,Ph(kh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Ah.set(a,Ph(Ah.get(a)||null,e,t,n,r,i)),!0}return!1}function Ih(e){var t=Nt(e.target);if(t!==null){var n=s(t);if(n!==null){if(t=n.tag,t===13){if(t=c(n),t!==null){e.blockedOn=t,Ct(e.priority,function(){gh(n)});return}}else if(t===31){if(t=l(n),t!==null){e.blockedOn=t,Ct(e.priority,function(){gh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);bn=r,n.target.dispatchEvent(r),bn=null}else return t=Pt(n),t!==null&&hh(t),e.blockedOn=n,!1;t.shift()}return!0}function Rh(e,t,n){Lh(e)&&n.delete(t)}function zh(){Th=!1,Eh!==null&&Lh(Eh)&&(Eh=null),Dh!==null&&Lh(Dh)&&(Dh=null),Oh!==null&&Lh(Oh)&&(Oh=null),kh.forEach(Rh),Ah.forEach(Rh)}function Bh(e,t){e.blockedOn===t&&(e.blockedOn=null,Th||(Th=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,zh)))}var Vh=null;function Hh(e){Vh!==e&&(Vh=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Vh===e&&(Vh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Ch(r||n)===null)continue;break}var a=Pt(n);a!==null&&(e.splice(t,3),t-=3,Zs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Uh(e){function t(t){return Bh(t,e)}Eh!==null&&Bh(Eh,e),Dh!==null&&Bh(Dh,e),Oh!==null&&Bh(Oh,e),kh.forEach(t),Ah.forEach(t);for(var n=0;n<jh.length;n++){var r=jh[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<jh.length&&(n=jh[0],n.blockedOn===null);)Ih(n),n.blockedOn===null&&jh.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Tt]||null;if(typeof a==`function`)o||Hh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[Tt]||null)s=o.formAction;else if(Ch(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Hh(n)}}}function Wh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Gh(e){this._internalRoot=e}Kh.prototype.render=Gh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));var n=t.current;fh(n,Ad(),e,t,null,null)},Kh.prototype.unmount=Gh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fh(e.current,2,null,e,null,null),Rd(),t[Et]=null}};function Kh(e){this._internalRoot=e}Kh.prototype.unstable_scheduleHydration=function(e){if(e){var t=St();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jh.length&&t!==0&&t<jh[n].priority;n++);jh.splice(n,0,e),n===0&&Ih(e)}};var qh=r.version;if(qh!==`19.3.0`)throw Error(a(527,qh,`19.3.0`));M.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(a(188)):(e=Object.keys(e).join(`,`),Error(a(268,e)));return e=d(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Jh={bundleType:0,version:`19.3.0`,rendererPackageName:`react-dom`,currentDispatcherRef:j,reconcilerVersion:`19.3.0`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Yh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yh.isDisabled&&Yh.supportsFiber)try{Ze=Yh.inject(Jh),Qe=Yh}catch{}}e.createRoot=function(e,t){if(!o(e))throw Error(a(299));var n=!1,r=``,i=bc,s=xc,c=Sc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=uh(e,1,!1,null,null,n,r,null,i,s,c,Wh),e[Et]=t.current,Wf(e),new Gh(t)}})),Ct=i(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=St()})),I=n(t(),1),wt=n(D(),1),Tt=Ct();c();var Et={RichTextEditor:`_RichTextEditor_5wzos_1`,"RichTextEditor--editor":`_RichTextEditor--editor_5wzos_50`,"RichTextEditor--disabled":`_RichTextEditor--disabled_5wzos_123`,"RichTextEditor--isActive":`_RichTextEditor--isActive_5wzos_159`,"RichTextEditor-menu":`_RichTextEditor-menu_5wzos_165`},L=l(),Dt=`modulepreload`,Ot=function(e){return`/gestalten/`+e},kt={},At=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Ot(t,n),t=s(t),t in kt)return;kt[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Dt,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};c(),c();var jt={RichTextMenu:`_RichTextMenu_1ve2j_1`,"RichTextMenu--form":`_RichTextMenu--form_1ve2j_7`,"RichTextMenu-group":`_RichTextMenu-group_1ve2j_21`,"RichTextMenu--inline":`_RichTextMenu--inline_1ve2j_39`};c(),c(),c(),c();var Mt=a(`Control`,{Control:`_Control_id4pm_1`,"Control--inline":`_Control--inline_id4pm_6`});function Nt({icon:e,disabled:t,active:n,onClick:r,title:i}){let{inline:a}=lt();return a?(0,L.jsx)(`span`,{className:Mt({inline:!0}),children:(0,L.jsx)(it,{onClick:r,disabled:t,active:n,label:i,children:e})}):(0,L.jsx)(`span`,{className:Mt(),children:(0,L.jsx)(Be,{onClick:r,disabled:t,active:n,title:i,children:e})})}function Pt(){let{editor:e,editorState:t}=lt(),n=P(`field-richtext-align-left`);return(0,L.jsx)(Nt,{icon:(0,L.jsx)(Ce,{}),onClick:t=>{t.stopPropagation(),e?.chain().focus().setTextAlign(`left`).run()},disabled:!t?.canAlignLeft,active:t?.isAlignLeft,title:n})}c();function Ft(){let{editor:e,editorState:t}=lt(),n=P(`field-richtext-align-center`);return(0,L.jsx)(Nt,{icon:(0,L.jsx)(et,{}),onClick:t=>{t.stopPropagation(),e?.chain().focus().setTextAlign(`center`).run()},disabled:!t?.canAlignCenter,active:t?.isAlignCenter,title:n})}c();function It(){let{editor:e,editorState:t}=lt(),n=P(`field-richtext-align-right`);return(0,L.jsx)(Nt,{icon:(0,L.jsx)(Je,{}),onClick:t=>{t.stopPropagation(),e?.chain().focus().setTextAlign(`right`).run()},disabled:!t?.canAlignRight,active:t?.isAlignRight,title:n})}c();function Lt(){let{editor:e,editorState:t}=lt(),n=P(`field-richtext-align-justify`);return(0,L.jsx)(Nt,{icon:(0,L.jsx)(Ie,{}),onClick:t=>{t.stopPropagation(),e?.chain().focus().setTextAlign(`justify`).run()},disabled:!t?.canAlignJustify,active:t?.isAlignJustify,title:n})}c(),c();function Rt(){let e=lt(),t=_t(e.options);return(0,L.jsx)(ye,{options:t,onChange:()=>{},value:`left`,defaultValue:`left`,renderDefaultIcon:Ce})}var zt=(0,I.lazy)(()=>At(()=>import(`./loaded-SMPR6KZF-BotSzOf1.js`).then(e=>({default:e.AlignSelectLoaded})),__vite__mapDeps([0,1,2,3,4,5]))),Bt=()=>(0,L.jsx)(I.Suspense,{fallback:(0,L.jsx)(Rt,{}),children:(0,L.jsx)(zt,{})});c();function Vt(){let{editor:e,editorState:t}=lt(),n=P(`field-richtext-bold`);return(0,L.jsx)(Nt,{icon:(0,L.jsx)(nt,{}),onClick:t=>{t.stopPropagation(),e?.chain().focus().toggleBold().run()},disabled:!t?.canBold,active:t?.isBold,title:n})}c();function Ht(){let{editor:e,editorState:t}=lt(),n=P(`field-richtext-italic`);return(0,L.jsx)(Nt,{icon:(0,L.jsx)(f,{}),onClick:t=>{t.stopPropagation(),e?.chain().focus().toggleItalic().run()},disabled:!t?.canItalic,active:t?.isItalic,title:n})}c();function Ut(){let{editor:e,editorState:t}=lt(),n=P(`field-richtext-underline`);return(0,L.jsx)(Nt,{icon:(0,L.jsx)(we,{}),onClick:t=>{t.stopPropagation(),e?.chain().focus().toggleUnderline().run()},disabled:!t?.canUnderline,active:t?.isUnderline,title:n})}c();function Wt(){let{editor:e,editorState:t}=lt(),n=P(`field-richtext-strikethrough`);return(0,L.jsx)(Nt,{icon:(0,L.jsx)(Ae,{}),onClick:t=>{t.stopPropagation(),e?.chain().focus().toggleStrike().run()},disabled:!t?.canStrike,active:t?.isStrike,title:n})}c();function Gt(){let{editor:e,editorState:t}=lt(),n=P(`field-richtext-code-inline`);return(0,L.jsx)(Nt,{icon:(0,L.jsx)(Xe,{}),onClick:t=>{t.stopPropagation(),e?.chain().focus().toggleCode().run()},disabled:!t?.canInlineCode,active:t?.isInlineCode,title:n})}c();function Kt(){let{editor:e,editorState:t}=lt(),n=P(`field-richtext-list-bullet`);return(0,L.jsx)(Nt,{icon:(0,L.jsx)(le,{}),onClick:t=>{t.stopPropagation(),e?.chain().focus().toggleBulletList().run()},disabled:!t?.canBulletList,active:t?.isBulletList,title:n})}c();function R(){let{editor:e,editorState:t}=lt(),n=P(`field-richtext-list-ordered`);return(0,L.jsx)(Nt,{icon:(0,L.jsx)(y,{}),onClick:t=>{t.stopPropagation(),e?.chain().focus().toggleOrderedList().run()},disabled:!t?.canOrderedList,active:t?.isOrderedList,title:n})}c();function qt(){let{editor:e,editorState:t}=lt(),n=P(`field-richtext-code-block`);return(0,L.jsx)(Nt,{icon:(0,L.jsx)(d,{}),onClick:t=>{t.stopPropagation(),e?.chain().focus().toggleCodeBlock().run()},disabled:!t?.canCodeBlock,active:t?.isCodeBlock,title:n})}c();function Jt(){let{editor:e,editorState:t}=lt(),n=P(`field-richtext-blockquote`);return(0,L.jsx)(Nt,{icon:(0,L.jsx)(te,{}),onClick:t=>{t.stopPropagation(),e?.chain().focus().toggleBlockquote().run()},disabled:!t?.canBlockquote,active:t?.isBlockquote,title:n})}c();function Yt(){let{editor:e,editorState:t}=lt(),n=P(`field-richtext-horizontalrule`);return(0,L.jsx)(Nt,{icon:(0,L.jsx)(_e,{}),onClick:t=>{t.stopPropagation(),e?.chain().focus().setHorizontalRule().run()},disabled:!t?.canHorizontalRule,title:n})}c(),c();function Xt(){let e=lt(),t=vt(e.options);return(0,L.jsx)(ye,{options:t,onChange:()=>{},value:`p`,defaultValue:`p`,renderDefaultIcon:fe})}var Zt=(0,I.lazy)(()=>At(()=>import(`./loaded-JKA25A3T-DDc_Wk0u.js`).then(e=>({default:e.HeadingSelectLoaded})),__vite__mapDeps([6,1,2,7,4,5]))),Qt=()=>(0,L.jsx)(I.Suspense,{fallback:(0,L.jsx)(Xt,{}),children:(0,L.jsx)(Zt,{})});c(),c();function $t(){let e=lt(),t=yt(e.options);return(0,L.jsx)(ye,{options:t,onChange:()=>{},value:`p`,defaultValue:`p`,renderDefaultIcon:le})}var en=(0,I.lazy)(()=>At(()=>import(`./loaded-36WRJPBT-CC9tTNA_.js`).then(e=>({default:e.ListSelectLoaded})),__vite__mapDeps([8,1,2,9,4,5]))),tn=()=>(0,L.jsx)(I.Suspense,{fallback:(0,L.jsx)($t,{}),children:(0,L.jsx)(en,{})}),nn=a(`RichTextMenu`,jt),rn=({children:e})=>(0,L.jsx)(an,{children:e}),an=({children:e})=>{let{inline:t}=lt();return(0,L.jsx)(`div`,{className:nn({inline:t,form:!t}),"data-puck-rte-menu":!0,children:e})},on=({children:e})=>(0,L.jsx)(`div`,{className:nn(`group`),children:e});an.Group=on,an.Control=Nt,an.AlignCenter=Ft,an.AlignJustify=Lt,an.AlignLeft=Pt,an.AlignRight=It,an.AlignSelect=Bt,an.Blockquote=Jt,an.Bold=Vt,an.BulletList=Kt,an.CodeBlock=qt,an.HeadingSelect=Qt,an.HorizontalRule=Yt,an.InlineCode=Gt,an.Italic=Ht,an.ListSelect=tn,an.OrderedList=R,an.Strikethrough=Wt,an.Underline=Ut;var sn=({editor:e=null,editorState:t=null,field:n,readOnly:r,inline:i})=>{let{renderMenu:a,renderInlineMenu:o}=n,s=(0,I.useMemo)(()=>o||rn,[o]),c=(0,I.useMemo)(()=>a||rn,[a]);return(0,L.jsx)(We.Provider,{value:{editor:e,editorState:t,inline:i,options:n.options,readOnly:r},children:i?(0,L.jsx)(s,{editor:e,editorState:t,readOnly:r,children:(0,L.jsxs)(on,{children:[(0,L.jsx)(Vt,{}),(0,L.jsx)(Ht,{}),(0,L.jsx)(Ut,{})]})}):(0,L.jsxs)(c,{editor:e,editorState:t,readOnly:r,children:[(0,L.jsxs)(on,{children:[(0,L.jsx)(Qt,{}),(0,L.jsx)(tn,{})]}),(0,L.jsxs)(on,{children:[(0,L.jsx)(Vt,{}),(0,L.jsx)(Ht,{}),(0,L.jsx)(Ut,{})]}),(0,L.jsx)(on,{children:(0,L.jsx)(Bt,{})})]})})};c();var cn=a(`RichTextEditor`,Et),ln=(0,I.memo)(({children:e,menu:t,readOnly:n=!1,field:r,inline:i=!1,editor:a,id:o})=>{let{initialHeight:s}=r,c=F(e=>e.currentRichText?.id===o&&i===e.currentRichText.inline),l=N(),u=(0,I.useCallback)(e=>{var t,n;(e.metaKey||e.ctrlKey)&&e.key.toLowerCase()===`i`&&(e.stopPropagation(),e.preventDefault(),(n=a==null?void 0:(t=a.commands).toggleItalic)==null||n.call(t)),e.key.toLowerCase()===`backspace`&&e.stopPropagation()},[a]),d=(0,I.useCallback)(e=>{var t;let n=!!((t=e.relatedTarget)?.closest)?.call(t,`[data-puck-rte-menu]`);e.relatedTarget&&!n?l.setState({currentRichText:null}):e.stopPropagation()},[l]);return(0,L.jsxs)(`div`,{className:cn({editor:!i,inline:i,isActive:c,disabled:n}),style:i?{}:{height:s??192,overflowY:`auto`},onKeyDownCapture:u,onBlur:d,children:[!i&&(0,L.jsx)(`div`,{className:cn(`menu`),children:t}),e]})});ln.displayName=`EditorInner`,c();var un=(0,I.lazy)(()=>At(()=>import(`./full-7ZJV44EE-5Ut-KPOD.js`).then(e=>({default:e.LoadedRichTextMenuFull})),__vite__mapDeps([10,1,2,3,7,9,4,5]))),dn=e=>(0,L.jsx)(I.Suspense,{fallback:(0,L.jsx)(sn,o({},e)),children:(0,L.jsx)(un,o({},e))});c(),c(),c(),c(),c(),c();var fn=(t,n=t)=>({slot:({value:r,propName:i,field:a,isReadOnly:s})=>{let c=s?n:t;return t=>c(e(o({allow:a?.type===`slot`?a.allow:[],disallow:a?.type===`slot`?a.disallow:[]},t),{zone:i,content:r}))}});c(),c(),c();function pn(t,n,i){let a={};return Object.keys(t).forEach(s=>{let c=s;a[c]=a=>{var s=a,{parentId:l}=s,u=r(s,[`parentId`]);let d=u.propPath.replace(/\[\d+\]/g,`[*]`),f=n?.[u.propPath]||n?.[d]||i||!1,p=t[c];return p?.(e(o({},u),{field:u.field,isReadOnly:f,componentId:l}))}}),a}function mn(e,t,n,r,i){let a=(0,I.useMemo)(()=>pn(n,r,i),[n,r,i]),s=(0,I.useMemo)(()=>h(t,a,e).props,[e,t,a]);return(0,I.useMemo)(()=>o(o({},t.props),s),[t.props,s])}function hn(e,t,n,r=n,i,a){return mn(e,t,fn(n,r),i,a)}c(),c();var gn=a(`RichTextEditor`,Et);function _n({content:e}){return(0,L.jsx)(`div`,{className:gn(),children:(0,L.jsx)(`div`,{className:`rich-text`,dangerouslySetInnerHTML:{__html:e}})})}c();var vn=(t,n,r)=>{if(!t)return null;if(n.length===0)return r(t);let[i,...a]=n;return Array.isArray(t)?t.map(e=>vn(e,n,r)):e(o({},t),{[i]:vn(t[i],a,r)})},yn=(0,I.lazy)(()=>At(()=>import(`./Render-DQXAYUBI-DmuA4-Ij.js`).then(e=>({default:e.RichTextRender})),__vite__mapDeps([11,1,5,12])));function bn(e,t){let n=(e,t=[])=>{if(!e)return[];let r=[];for(let[i,a]of Object.entries(e)){let e=[...t,i];a.type===`richtext`&&r.push({path:e,field:a}),a.type===`array`&&`arrayFields`in a&&r.push(...n(a.arrayFields,e)),a.type===`object`&&`objectFields`in a&&r.push(...n(a.objectFields,e))}return r},r=(0,I.useMemo)(()=>n(e),[e]);return(0,I.useMemo)(()=>{if(!r?.length)return{};let e=o({},t);for(let{path:t,field:n}of r)e=vn(e,t,e=>(0,L.jsx)(I.Suspense,{fallback:(0,L.jsx)(_n,{content:e}),children:(0,L.jsx)(yn,{content:e,field:n})},t.join(`.`)));return e},[r,t,e])}c();var xn=e=>(0,L.jsx)(Cn,o({},e)),Sn=({config:t,item:n,metadata:r})=>{let i=t.components[n.type],a=hn(t,n,n=>(0,L.jsx)(xn,e(o({},n),{config:t,metadata:r}))),s=bn(i.fields,a);return(0,L.jsx)(i.render,e(o(o({},a),s),{puck:e(o({},a.puck),{metadata:r||{}})}))},Cn=(0,I.forwardRef)(function({className:e,style:t,content:n,config:r,metadata:i,as:a},o){return(0,L.jsx)(a??`div`,{className:e,style:t,ref:o,children:n.map(e=>r.components[e.type]?(0,L.jsx)(Sn,{config:r,item:e,metadata:i},e.props.id):null)})}),wn=e=>Symbol.iterator in e,Tn=e=>`entries`in e,En=(e,t)=>{let n=e instanceof Map?e:new Map(e.entries()),r=t instanceof Map?t:new Map(t.entries());if(n.size!==r.size)return!1;for(let[e,t]of n)if(!r.has(e)||!Object.is(t,r.get(e)))return!1;return!0},Dn=(e,t)=>{let n=e[Symbol.iterator](),r=t[Symbol.iterator](),i=n.next(),a=r.next();for(;!i.done&&!a.done;){if(!Object.is(i.value,a.value))return!1;i=n.next(),a=r.next()}return!!i.done&&!!a.done};function On(e,t){return Object.is(e,t)?!0:typeof e!=`object`||!e||typeof t!=`object`||!t||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)?!1:wn(e)&&wn(t)?Tn(e)&&Tn(t)?En(e,t):Dn(e,t):En({entries:()=>Object.entries(e)},{entries:()=>Object.entries(t)})}function kn(e){let t=I.useRef(void 0);return n=>{let r=e(n);return On(t.current,r)?t.current:t.current=r}}var An=Symbol.for(`preact-signals`);function jn(){if(In>1)In--;else{var e,t=!1;for((function(){var e=Bn;for(Bn=void 0;e!==void 0;){var t=e.S;if(t.v===e.v)for(var n=t.t;n!==void 0;n=n.x)n.i===e.i&&(n.i=t.i);e=e.o}})();Fn!==void 0;){var n=Fn;for(Fn=void 0,Ln++;n!==void 0;){var r=n.u;if(n.u=void 0,n.f&=-3,!(8&n.f)&&Gn(n))try{n.c()}catch(n){t||=(e=n,!0)}n=r}}if(Ln=0,In--,t)throw e}}function Mn(e){if(In>0)return e();zn=++Rn,In++;try{return e()}finally{jn()}}var Nn,Pn=void 0;function z(e){var t=Pn,n=Nn;Pn=void 0,Nn=void 0;try{return e()}finally{Pn=t,Nn=n}}var Fn=void 0,In=0,Ln=0,Rn=0,zn=0,Bn=void 0,Vn=0;function Hn(e){if(Pn!==void 0){var t=e.n;if(t===void 0||t.t!==Pn)return t={i:0,S:e,p:Pn.s,n:void 0,t:Pn,e:void 0,x:void 0,r:t},Pn.s!==void 0&&(Pn.s.n=t),Pn.s=t,e.n=t,32&Pn.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=Pn.s,t.n=void 0,Pn.s.n=t,Pn.s=t),t}}function Un(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=t?.watched,this.Z=t?.unwatched,this.name=t?.name}Un.prototype.brand=An,Un.prototype.h=function(){return!0},Un.prototype.S=function(e){var t=this,n=this.t;n!==e&&e.e===void 0&&(e.x=n,this.t=e,n===void 0?z(function(){var e;(e=t.W)==null||e.call(t)}):n.e=e)},Un.prototype.U=function(e){var t=this;if(this.t!==void 0){var n=e.e,r=e.x;n!==void 0&&(n.x=r,e.e=void 0),r!==void 0&&(r.e=n,e.x=void 0),e===this.t&&(this.t=r,r===void 0&&z(function(){var e;(e=t.Z)==null||e.call(t)}))}},Un.prototype.subscribe=function(e){var t=this;return er(function(){var n=t.value;z(function(){return e(n)})},{name:`sub`})},Un.prototype.valueOf=function(){return this.value},Un.prototype.toString=function(){return this.value+``},Un.prototype.toJSON=function(){return this.value},Un.prototype.peek=function(){var e=this;return z(function(){return e.value})},Object.defineProperty(Un.prototype,"value",{get:function(){var e=Hn(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(Ln>100)throw Error(`Cycle detected`);(function(e){In!==0&&Ln===0&&e.l!==zn&&(e.l=zn,Bn={S:e,v:e.v,i:e.i,o:Bn})})(this),this.v=e,this.i++,Vn++,In++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{jn()}}}});function Wn(e,t){return new Un(e,t)}function Gn(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function Kn(e){for(var t=e.s;t!==void 0;t=t.n){var n=t.S.n;if(n!==void 0&&(t.r=n),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function qn(e){for(var t=e.s,n=void 0;t!==void 0;){var r=t.p;t.i===-1?(t.S.U(t),r!==void 0&&(r.n=t.n),t.n!==void 0&&(t.n.p=r)):n=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=r}e.s=n}function Jn(e,t){Un.call(this,void 0,t),this.x=e,this.s=void 0,this.g=Vn-1,this.f=4}Jn.prototype=new Un,Jn.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Vn))return!0;if(this.g=Vn,this.f|=1,this.i>0&&!Gn(this))return this.f&=-2,!0;var e=Pn;try{Kn(this),Pn=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(e){this.v=e,this.f|=16,this.i++}return Pn=e,qn(this),this.f&=-2,!0},Jn.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}Un.prototype.S.call(this,e)},Jn.prototype.U=function(e){if(this.t!==void 0&&(Un.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}},Jn.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}},Object.defineProperty(Jn.prototype,"value",{get:function(){if(1&this.f)throw Error(`Cycle detected`);var e=Hn(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function Yn(e,t){return new Jn(e,t)}function Xn(e){var t=e.m;if(e.m=void 0,typeof t==`function`){In++;var n=Pn;Pn=void 0;try{t()}catch(t){throw e.f&=-2,e.f|=8,Zn(e),t}finally{Pn=n,jn()}}}function Zn(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Xn(e)}function Qn(e){if(Pn!==this)throw Error(`Out-of-order effect`);qn(this),Pn=e,this.f&=-2,8&this.f&&Zn(this),jn()}function $n(e,t){this.x=e,this.m=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=t?.name,Nn&&Nn.push(this)}$n.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t==`function`&&(this.m=t)}finally{e()}},$n.prototype.S=function(){if(1&this.f)throw Error(`Cycle detected`);this.f|=1,this.f&=-9,Xn(this),Kn(this),In++;var e=Pn;return Pn=this,Qn.bind(this,e)},$n.prototype.N=function(){2&this.f||(this.f|=2,this.u=Fn,Fn=this)},$n.prototype.d=function(){this.f|=8,1&this.f||Zn(this)},$n.prototype.dispose=function(){this.d()};function er(e,t){var n=new $n(e,t);try{n.c()}catch(e){throw n.d(),e}var r=n.d.bind(n);return r[Symbol.dispose]=r,r}var tr=Object.create,nr=Object.defineProperty,rr=Object.defineProperties,ir=Object.getOwnPropertyDescriptor,ar=Object.getOwnPropertyDescriptors,or=Object.getOwnPropertySymbols,sr=Object.prototype.hasOwnProperty,cr=Object.prototype.propertyIsEnumerable,lr=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),ur=e=>{throw TypeError(e)},dr=(e,t,n)=>t in e?nr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,fr=(e,t)=>{for(var n in t||={})sr.call(t,n)&&dr(e,n,t[n]);if(or)for(var n of or(t))cr.call(t,n)&&dr(e,n,t[n]);return e},pr=(e,t)=>rr(e,ar(t)),mr=(e,t)=>nr(e,`name`,{value:t,configurable:!0}),hr=e=>[,,,tr(e?.[lr(`metadata`)]??null)],gr=[`class`,`method`,`getter`,`setter`,`accessor`,`field`,`value`,`get`,`set`],_r=e=>e!==void 0&&typeof e!=`function`?ur(`Function expected`):e,vr=(e,t,n,r,i)=>({kind:gr[e],name:t,metadata:r,addInitializer:e=>n._?ur(`Already initialized`):i.push(_r(e||null))}),yr=(e,t)=>dr(t,lr(`metadata`),e[3]),br=(e,t,n,r)=>{for(var i=0,a=e[t>>1],o=a&&a.length;i<o;i++)t&1?a[i].call(n):r=a[i].call(n,r);return r},xr=(e,t,n,r,i,a)=>{var o,s,c,l,u,d=t&7,f=!!(t&8),p=!!(t&16),m=d>3?e.length+1:d?f?1:2:0,h=gr[d+5],g=d>3&&(e[m-1]=[]),_=e[m]||(e[m]=[]),v=d&&(!p&&!f&&(i=i.prototype),d<5&&(d>3||!p)&&ir(d<4?i:{get[n](){return wr(this,a)},set[n](e){return Er(this,a,e)}},n));d?p&&d<4&&mr(a,(d>2?`set `:d>1?`get `:``)+n):mr(i,n);for(var y=r.length-1;y>=0;y--)l=vr(d,n,c={},e[3],_),d&&(l.static=f,l.private=p,u=l.access={has:p?e=>Cr(i,e):e=>n in e},d^3&&(u.get=p?e=>(d^1?wr:Dr)(e,i,d^4?a:v.get):e=>e[n]),d>2&&(u.set=p?(e,t)=>Er(e,i,t,d^4?a:v.set):(e,t)=>e[n]=t)),s=(0,r[y])(d?d<4?p?a:v[h]:d>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,d^4||s===void 0?_r(s)&&(d>4?g.unshift(s):d?p?a=s:v[h]=s:i=s):typeof s!=`object`||!s?ur(`Object expected`):(_r(o=s.get)&&(v.get=o),_r(o=s.set)&&(v.set=o),_r(o=s.init)&&g.unshift(o));return d||yr(e,i),v&&nr(i,n,v),p?d^4?a:v:i},Sr=(e,t,n)=>t.has(e)||ur(`Cannot `+n),Cr=(e,t)=>Object(t)===t?e.has(t):ur(`Cannot use the "in" operator on this value`),wr=(e,t,n)=>(Sr(e,t,`read from private field`),n?n.call(e):t.get(e)),Tr=(e,t,n)=>t.has(e)?ur(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Er=(e,t,n,r)=>(Sr(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Dr=(e,t,n)=>(Sr(e,t,`access private method`),n);function Or(e,t){if(t){let n;return Yn(()=>{let r=e();return r&&n&&t(n,r)?n:(n=r,r)})}return Yn(e)}function kr(e,t){if(Object.is(e,t))return!0;if(e===null||t===null)return!1;if(typeof e==`function`&&typeof t==`function`)return e===t;if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}if(Array.isArray(e))return!Array.isArray(t)||e.length!==t.length?!1:!e.some((e,n)=>!kr(e,t[n]));if(typeof e==`object`&&typeof t==`object`){let n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&!n.some(n=>!kr(e[n],t[n]))}return!1}function B({get:e},t){return{init(e){return Wn(e)},get(){return e.call(this).value},set(t){let n=e.call(this);n.peek()!==t&&(n.value=t)}}}function Ar(e,t){let n=new WeakMap;return function(){let t=n.get(this);return t||(t=Or(e.bind(this)),n.set(this,t)),t.value}}function jr(e=!0){return function(t,n){n.addInitializer(function(){let t=n.kind===`field`||n.static?this:Object.getPrototypeOf(this),r=Object.getOwnPropertyDescriptor(t,n.name);r&&Object.defineProperty(t,n.name,pr(fr({},r),{enumerable:e}))})}}function Mr(...e){let t=e.map(e=>er(e));return()=>t.forEach(e=>e())}var Nr,Pr,Fr,Ir,Lr,Rr=[B],zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr;Lr=[B],Ir=[B],Fr=[jr()],Pr=[jr()],Nr=[jr()];var $r=class{constructor(e,t=Object.is){this.defaultValue=e,this.equals=t,br(zr,5,this),Tr(this,Wr),Tr(this,Br,br(zr,8,this)),br(zr,11,this),Tr(this,Gr,br(zr,12,this)),br(zr,15,this),Tr(this,Yr,br(zr,16,this)),br(zr,19,this),this.reset=this.reset.bind(this),this.reset()}get current(){return wr(this,Wr,Zr)}get initial(){return wr(this,Wr,Hr)}get previous(){return wr(this,Wr,qr)}set current(e){let t=z(()=>wr(this,Wr,Zr));e&&t&&this.equals(t,e)||Mn(()=>{wr(this,Wr,Hr)||Er(this,Wr,e,Ur),Er(this,Wr,t,Jr),Er(this,Wr,e,Qr)})}reset(e=this.defaultValue){Mn(()=>{Er(this,Wr,void 0,Jr),Er(this,Wr,e,Ur),Er(this,Wr,e,Qr)})}};zr=hr(null),Br=new WeakMap,Wr=new WeakSet,Gr=new WeakMap,Yr=new WeakMap,Vr=xr(zr,20,`#initial`,Rr,Wr,Br),Hr=Vr.get,Ur=Vr.set,Kr=xr(zr,20,`#previous`,Lr,Wr,Gr),qr=Kr.get,Jr=Kr.set,Xr=xr(zr,20,`#current`,Ir,Wr,Yr),Zr=Xr.get,Qr=Xr.set,xr(zr,2,`current`,Fr,$r),xr(zr,2,`initial`,Pr,$r),xr(zr,2,`previous`,Nr,$r),yr(zr,$r);function ei(e){return z(()=>{let t={};for(let n in e)t[n]=e[n];return t})}var ti,ni=class{constructor(){Tr(this,ti,new WeakMap)}get(e,t){return e?wr(this,ti).get(e)?.get(t):void 0}set(e,t,n){if(e)return wr(this,ti).has(e)||wr(this,ti).set(e,new Map),wr(this,ti).get(e)?.set(t,n)}clear(e){return e?wr(this,ti).get(e)?.clear():void 0}};ti=new WeakMap;var ri=Object.create,ii=Object.defineProperty,ai=Object.getOwnPropertyDescriptor,oi=Object.getOwnPropertySymbols,si=Object.prototype.hasOwnProperty,ci=Object.prototype.propertyIsEnumerable,li=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),ui=e=>{throw TypeError(e)},di=Math.pow,fi=(e,t,n)=>t in e?ii(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pi=(e,t)=>{for(var n in t||={})si.call(t,n)&&fi(e,n,t[n]);if(oi)for(var n of oi(t))ci.call(t,n)&&fi(e,n,t[n]);return e},mi=(e,t)=>ii(e,`name`,{value:t,configurable:!0}),hi=e=>[,,,ri(e?.[li(`metadata`)]??null)],gi=[`class`,`method`,`getter`,`setter`,`accessor`,`field`,`value`,`get`,`set`],_i=e=>e!==void 0&&typeof e!=`function`?ui(`Function expected`):e,vi=(e,t,n,r,i)=>({kind:gi[e],name:t,metadata:r,addInitializer:e=>n._?ui(`Already initialized`):i.push(_i(e||null))}),yi=(e,t)=>fi(t,li(`metadata`),e[3]),bi=(e,t,n,r)=>{for(var i=0,a=e[t>>1],o=a&&a.length;i<o;i++)t&1?a[i].call(n):r=a[i].call(n,r);return r},xi=(e,t,n,r,i,a)=>{var o,s,c,l,u,d=t&7,f=!!(t&8),p=!!(t&16),m=d>3?e.length+1:d?f?1:2:0,h=gi[d+5],g=d>3&&(e[m-1]=[]),_=e[m]||(e[m]=[]),v=d&&(!p&&!f&&(i=i.prototype),d<5&&(d>3||!p)&&ai(d<4?i:{get[n](){return wi(this,a)},set[n](e){return Ei(this,a,e)}},n));d?p&&d<4&&mi(a,(d>2?`set `:d>1?`get `:``)+n):mi(i,n);for(var y=r.length-1;y>=0;y--)l=vi(d,n,c={},e[3],_),d&&(l.static=f,l.private=p,u=l.access={has:p?e=>Ci(i,e):e=>n in e},d^3&&(u.get=p?e=>(d^1?wi:Di)(e,i,d^4?a:v.get):e=>e[n]),d>2&&(u.set=p?(e,t)=>Ei(e,i,t,d^4?a:v.set):(e,t)=>e[n]=t)),s=(0,r[y])(d?d<4?p?a:v[h]:d>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,d^4||s===void 0?_i(s)&&(d>4?g.unshift(s):d?p?a=s:v[h]=s:i=s):typeof s!=`object`||!s?ui(`Object expected`):(_i(o=s.get)&&(v.get=o),_i(o=s.set)&&(v.set=o),_i(o=s.init)&&g.unshift(o));return d||yi(e,i),v&&ii(i,n,v),p?d^4?a:v:i},Si=(e,t,n)=>t.has(e)||ui(`Cannot `+n),Ci=(e,t)=>Object(t)===t?e.has(t):ui(`Cannot use the "in" operator on this value`),wi=(e,t,n)=>(Si(e,t,`read from private field`),n?n.call(e):t.get(e)),Ti=(e,t,n)=>t.has(e)?ui(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Ei=(e,t,n,r)=>(Si(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Di=(e,t,n)=>(Si(e,t,`access private method`),n),Oi=class e{constructor(e,t){this.x=e,this.y=t}static delta(t,n){return new e(t.x-n.x,t.y-n.y)}static distance(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}static equals(e,t){return e.x===t.x&&e.y===t.y}static from({x:t,y:n}){return new e(t,n)}},ki=class e{constructor(e,t,n,r){this.left=e,this.top=t,this.width=n,this.height=r,this.scale={x:1,y:1}}get inverseScale(){return{x:1/this.scale.x,y:1/this.scale.y}}translate(t,n){let{top:r,left:i,width:a,height:o,scale:s}=this,c=new e(i+t,r+n,a,o);return c.scale=pi({},s),c}get boundingRectangle(){let{width:e,height:t,left:n,top:r,right:i,bottom:a}=this;return{width:e,height:t,left:n,top:r,right:i,bottom:a}}get center(){let{left:e,top:t,right:n,bottom:r}=this;return new Oi((e+n)/2,(t+r)/2)}get area(){let{width:e,height:t}=this;return e*t}equals(t){if(!(t instanceof e))return!1;let{left:n,top:r,width:i,height:a}=this;return n===t.left&&r===t.top&&i===t.width&&a===t.height}containsPoint(e){let{top:t,left:n,bottom:r,right:i}=this;return t<=e.y&&e.y<=r&&n<=e.x&&e.x<=i}intersectionArea(t){return t instanceof e?Ai(this,t):0}intersectionRatio(e){let{area:t}=this,n=this.intersectionArea(e);return n/(e.area+t-n)}get bottom(){let{top:e,height:t}=this;return e+t}get right(){let{left:e,width:t}=this;return e+t}get aspectRatio(){let{width:e,height:t}=this;return e/t}get corners(){return[{x:this.left,y:this.top},{x:this.right,y:this.top},{x:this.left,y:this.bottom},{x:this.right,y:this.bottom}]}static from({top:t,left:n,width:r,height:i}){return new e(n,t,r,i)}static delta(e,t,n={x:`center`,y:`center`}){let r=(e,t)=>{let r=n[t],i=t===`x`?e.left:e.top,a=t===`x`?e.width:e.height;return r==`start`?i:r==`end`?i+a:i+a/2};return Oi.delta({x:r(e,`x`),y:r(e,`y`)},{x:r(t,`x`),y:r(t,`y`)})}static intersectionRatio(t,n){return e.from(t).intersectionRatio(e.from(n))}};function Ai(e,t){let n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),a=Math.min(t.top+t.height,e.top+e.height),o=i-r,s=a-n;return r<i&&n<a?o*s:0}var ji,Mi,Ni,Pi,Fi,Ii=class extends (Ni=$r,Mi=[Ar],ji=[Ar],Ni){constructor(e){let t=Oi.from(e);super(t,(e,t)=>Oi.equals(e,t)),bi(Fi,5,this),Ti(this,Pi,0),this.velocity={x:0,y:0}}get delta(){return Oi.delta(this.current,this.initial)}get direction(){let{current:e,previous:t}=this;if(!t)return null;let n={x:e.x-t.x,y:e.y-t.y};return!n.x&&!n.y?null:Math.abs(n.x)>Math.abs(n.y)?n.x>0?`right`:`left`:n.y>0?`down`:`up`}get current(){return super.current}set current(e){let{current:t}=this,n=Oi.from(e),r={x:n.x-t.x,y:n.y-t.y},i=Date.now(),a=i-wi(this,Pi),o=e=>Math.round(e/a*100);Mn(()=>{Ei(this,Pi,i),this.velocity={x:o(r.x),y:o(r.y)},super.current=n})}reset(e=this.defaultValue){super.reset(Oi.from(e)),this.velocity={x:0,y:0}}};Fi=hi(Ni),Pi=new WeakMap,xi(Fi,2,`delta`,Mi,Ii),xi(Fi,2,`direction`,ji,Ii),yi(Fi,Ii);function Li({x:e,y:t},n){let r=Math.abs(e),i=Math.abs(t);return typeof n==`number`?Math.sqrt(di(r,2)+di(i,2))>n:`x`in n&&`y`in n?r>n.x&&i>n.y:`x`in n?r>n.x:`y`in n&&i>n.y}var Ri=(e=>(e.Horizontal=`x`,e.Vertical=`y`,e))(Ri||{}),zi=Object.values(Ri),Bi=Object.create,Vi=Object.defineProperty,Hi=Object.defineProperties,Ui=Object.getOwnPropertyDescriptor,Wi=Object.getOwnPropertyDescriptors,Gi=Object.getOwnPropertySymbols,Ki=Object.prototype.hasOwnProperty,qi=Object.prototype.propertyIsEnumerable,Ji=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),Yi=e=>{throw TypeError(e)},Xi=(e,t,n)=>t in e?Vi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Zi=(e,t)=>{for(var n in t||={})Ki.call(t,n)&&Xi(e,n,t[n]);if(Gi)for(var n of Gi(t))qi.call(t,n)&&Xi(e,n,t[n]);return e},Qi=(e,t)=>Hi(e,Wi(t)),$i=(e,t)=>Vi(e,`name`,{value:t,configurable:!0}),ea=(e,t)=>{var n={};for(var r in e)Ki.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Gi)for(var r of Gi(e))t.indexOf(r)<0&&qi.call(e,r)&&(n[r]=e[r]);return n},ta=e=>[,,,Bi(e?.[Ji(`metadata`)]??null)],na=[`class`,`method`,`getter`,`setter`,`accessor`,`field`,`value`,`get`,`set`],ra=e=>e!==void 0&&typeof e!=`function`?Yi(`Function expected`):e,V=(e,t,n,r,i)=>({kind:na[e],name:t,metadata:r,addInitializer:e=>n._?Yi(`Already initialized`):i.push(ra(e||null))}),ia=(e,t)=>Xi(t,Ji(`metadata`),e[3]),H=(e,t,n,r)=>{for(var i=0,a=e[t>>1],o=a&&a.length;i<o;i++)t&1?a[i].call(n):r=a[i].call(n,r);return r},U=(e,t,n,r,i,a)=>{var o,s,c,l,u,d=t&7,f=!!(t&8),p=!!(t&16),m=d>3?e.length+1:d?f?1:2:0,h=na[d+5],g=d>3&&(e[m-1]=[]),_=e[m]||(e[m]=[]),v=d&&(!p&&!f&&(i=i.prototype),d<5&&(d>3||!p)&&Ui(d<4?i:{get[n](){return sa(this,a)},set[n](e){return ca(this,a,e)}},n));d?p&&d<4&&$i(a,(d>2?`set `:d>1?`get `:``)+n):$i(i,n);for(var y=r.length-1;y>=0;y--)l=V(d,n,c={},e[3],_),d&&(l.static=f,l.private=p,u=l.access={has:p?e=>oa(i,e):e=>n in e},d^3&&(u.get=p?e=>(d^1?sa:la)(e,i,d^4?a:v.get):e=>e[n]),d>2&&(u.set=p?(e,t)=>ca(e,i,t,d^4?a:v.set):(e,t)=>e[n]=t)),s=(0,r[y])(d?d<4?p?a:v[h]:d>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,d^4||s===void 0?ra(s)&&(d>4?g.unshift(s):d?p?a=s:v[h]=s:i=s):typeof s!=`object`||!s?Yi(`Object expected`):(ra(o=s.get)&&(v.get=o),ra(o=s.set)&&(v.set=o),ra(o=s.init)&&g.unshift(o));return d||ia(e,i),v&&Vi(i,n,v),p?d^4?a:v:i},aa=(e,t,n)=>t.has(e)||Yi(`Cannot `+n),oa=(e,t)=>Object(t)===t?e.has(t):Yi(`Cannot use the "in" operator on this value`),sa=(e,t,n)=>(aa(e,t,`read from private field`),n?n.call(e):t.get(e)),W=(e,t,n)=>t.has(e)?Yi(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),ca=(e,t,n,r)=>(aa(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),la=(e,t,n)=>(aa(e,t,`access private method`),n);function ua(e,t){return{plugin:e,options:t}}function da(e){return t=>ua(e,t)}function fa(e){return typeof e==`function`?{plugin:e,options:void 0}:e}var pa=[B],ma,ha,ga,_a=class{constructor(e,t){this.manager=e,this.options=t,W(this,ha,H(ma,8,this,!1)),H(ma,11,this),W(this,ga,new Set)}enable(){this.disabled=!1}disable(){this.disabled=!0}isDisabled(){return z(()=>this.disabled)}configure(e){this.options=e}registerEffect(e){let t=er(e.bind(this));return sa(this,ga).add(t),t}destroy(){sa(this,ga).forEach(e=>e())}static configure(e){return ua(this,e)}};ma=ta(null),ha=new WeakMap,ga=new WeakMap,U(ma,4,`disabled`,pa,_a,ha),ia(ma,_a);var va=class extends _a{},ya,ba=class{constructor(e){this.manager=e,this.instances=new Map,W(this,ya,[])}get values(){return Array.from(this.instances.values())}set values(e){let t=e.map(fa).reduce((e,t)=>{let n=e.find(({plugin:e})=>e===t.plugin);return n?(n.options=t.options,e):[...e,t]},[]),n=t.map(({plugin:e})=>e);for(let e of sa(this,ya))if(!n.includes(e)){if(e.prototype instanceof va)continue;this.unregister(e)}for(let{plugin:e,options:n}of t)this.register(e,n);ca(this,ya,n)}get(e){return this.instances.get(e)}register(e,t){let n=this.instances.get(e);if(n)return n.options!==t&&(n.options=t),n;let r=new e(this.manager,t);return this.instances.set(e,r),r}unregister(e){let t=this.instances.get(e);t&&(t.destroy(),this.instances.delete(e))}destroy(){for(let e of this.instances.values())e.destroy();this.instances.clear()}};ya=new WeakMap;function xa(e,t){return e.priority===t.priority?e.type===t.type?t.value-e.value:t.type-e.type:t.priority-e.priority}var Sa=[],Ca,wa,Ta=class extends _a{constructor(e){super(e),W(this,Ca),W(this,wa),this.computeCollisions=this.computeCollisions.bind(this),ca(this,wa,Wn(Sa)),this.destroy=Mr(()=>{let e=this.computeCollisions(),t=z(()=>this.manager.dragOperation.position.current);if(e!==Sa){let e=sa(this,Ca);if(ca(this,Ca,t),e&&t.x==e.x&&t.y==e.y)return}else ca(this,Ca,void 0);sa(this,wa).value=e},()=>{let{dragOperation:e}=this.manager;e.status.initialized&&this.forceUpdate()})}forceUpdate(e=!0){z(()=>{e?sa(this,wa).value=this.computeCollisions():ca(this,Ca,void 0)})}computeCollisions(e,t){let{registry:n,dragOperation:r}=this.manager,{source:i,shape:a,status:o}=r;if(!o.initialized||!a)return Sa;let s=[],c=[];for(let a of e??n.droppables){if(a.disabled||i&&!a.accepts(i))continue;let e=t??a.collisionDetector;if(!e)continue;c.push(a),a.shape;let n=z(()=>e({droppable:a,dragOperation:r}));n&&(a.collisionPriority!=null&&(n.priority=a.collisionPriority),s.push(n))}return c.length===0?Sa:(s.sort(xa),s)}get collisions(){return sa(this,wa).value}};Ca=new WeakMap,wa=new WeakMap;var Ea,Da,Oa=[B],ka,Aa,ja,Ma,Na,Pa,Fa;Da=[B],Ea=[B];var Ia=class e{constructor(e,t){W(this,Ma,H(ja,8,this)),H(ja,11,this),W(this,Na),W(this,Pa,H(ja,12,this)),H(ja,15,this),W(this,Fa,H(ja,16,this)),H(ja,19,this);let{effects:n,id:r,data:i={},disabled:a=!1,register:o=!0}=e,s=r;ca(this,Na,Wn(r)),this.manager=t,this.data=i,this.disabled=a,this.effects=()=>[()=>{let{id:e,manager:t}=this;if(e!==s)return s=e,t?.registry.register(this),()=>t?.registry.unregister(this)},...n?.()??[]],this.register=this.register.bind(this),this.unregister=this.unregister.bind(this),this.destroy=this.destroy.bind(this),t&&o&&queueMicrotask(this.register)}get id(){let t=sa(this,Na).value;return e.pendingIdChanges?.get(this)??t}set id(t){t!==(e.pendingIdChanges?.get(this)??sa(this,Na).peek())&&(e.pendingIdChanges||(e.pendingIdChanges=new Map,queueMicrotask(()=>{var t;return la(t=e,ka,Aa).call(t)})),e.pendingIdChanges.set(this,t))}register(){return this.manager?.registry.register(this)}unregister(){var e;(e=this.manager)==null||e.registry.unregister(this)}destroy(){var e;(e=this.manager)==null||e.registry.unregister(this)}};ja=ta(null),ka=new WeakSet,Aa=function(){let e=Ia.pendingIdChanges;Ia.pendingIdChanges=null,e&&Mn(()=>{for(let[t,n]of e)sa(t,Na).value=n})},Ma=new WeakMap,Na=new WeakMap,Pa=new WeakMap,Fa=new WeakMap,U(ja,4,`manager`,Oa,Ia,Ma),U(ja,4,`data`,Da,Ia,Pa),U(ja,4,`disabled`,Ea,Ia,Fa),W(Ia,ka),ia(ja,Ia),Ia.pendingIdChanges=null;var La=Ia,Ra=class{constructor(){this.map=Wn(new Map),this.cleanupFunctions=new WeakMap,this.register=(e,t)=>{let n=this.map.peek(),r=n.get(e),i=()=>this.unregister(e,t);if(r===t)return i;r&&r.id===e&&(this.cleanupFunctions.get(r)?.(),this.cleanupFunctions.delete(r));let a=new Map(n);for(let[r,i]of n)if(i===t&&r!==e){a.delete(r);break}a.set(e,t),this.map.value=a;let o=Mr(...t.effects());return this.cleanupFunctions.set(t,o),i},this.unregister=(e,t)=>{let n=this.map.peek();if(n.get(e)!==t)return;this.cleanupFunctions.get(t)?.(),this.cleanupFunctions.delete(t);let r=new Map(n);r.delete(e),this.map.value=r}}[Symbol.iterator](){return this.map.peek().values()}get value(){return this.map.value.values()}has(e){return this.map.value.has(e)}get(e){return this.map.value.get(e)}destroy(){for(let e of this)this.cleanupFunctions.get(e)?.(),e.destroy();this.map.value=new Map}},za,Ba,Va,Ha,Ua,Wa,Ga,Ka,qa,Ja,Ya,Xa=class extends (Ga=La,Wa=[B],Ua=[B],Ha=[B],Va=[Ar],Ba=[Ar],za=[Ar],Ga){constructor(e,t){var n=e,{modifiers:r,type:i,sensors:a,plugins:o,effects:s}=n,c=ea(n,[`modifiers`,`type`,`sensors`,`plugins`,`effects`]);super(Qi(Zi({},c),{effects:()=>[...s?.()??[],()=>{let{manager:e,plugins:t}=this;if(e&&t)for(let n of t){let{plugin:t}=fa(n);e.registry.plugins.register(t)}}]}),t),H(Ka,5,this),W(this,qa,H(Ka,8,this)),H(Ka,11,this),W(this,Ja,H(Ka,12,this)),H(Ka,15,this),W(this,Ya,H(Ka,16,this,this.isDragSource?`dragging`:`idle`)),H(Ka,19,this),this.type=i,this.sensors=a,this.modifiers=r,this.alignment=c.alignment,this.plugins=o}pluginConfig(e){if(this.plugins)for(let t of this.plugins){let n=fa(t);if(n.plugin===e)return n.options}}get isDropping(){return this.status===`dropping`&&this.isDragSource}get isDragging(){return this.status===`dragging`&&this.isDragSource}get isDragSource(){return this.manager?.dragOperation.source?.id===this.id}};Ka=ta(Ga),qa=new WeakMap,Ja=new WeakMap,Ya=new WeakMap,U(Ka,4,`type`,Wa,Xa,qa),U(Ka,4,`modifiers`,Ua,Xa,Ja),U(Ka,4,`status`,Ha,Xa,Ya),U(Ka,2,`isDropping`,Va,Xa),U(Ka,2,`isDragging`,Ba,Xa),U(Ka,2,`isDragSource`,za,Xa),ia(Ka,Xa);var Za,Qa,$a,eo,to,no,ro,io,ao,oo,so,co,lo,uo=class extends (ro=La,no=[B],to=[B],eo=[B],$a=[B],Qa=[B],Za=[Ar],ro){constructor(e,t){var n=e,{accept:r,collisionDetector:i,collisionPriority:a,type:o}=n,s=ea(n,[`accept`,`collisionDetector`,`collisionPriority`,`type`]);super(s,t),H(io,5,this),W(this,ao,H(io,8,this)),H(io,11,this),W(this,oo,H(io,12,this)),H(io,15,this),W(this,so,H(io,16,this)),H(io,19,this),W(this,co,H(io,20,this)),H(io,23,this),W(this,lo,H(io,24,this)),H(io,27,this),this.accept=r,this.collisionDetector=i,this.collisionPriority=a,this.type=o}accepts(e){let{accept:t}=this;return t?typeof t==`function`?t(e):e.type?Array.isArray(t)?t.includes(e.type):e.type===t:!1:!0}get isDropTarget(){return this.manager?.dragOperation.target?.id===this.id}};io=ta(ro),ao=new WeakMap,oo=new WeakMap,so=new WeakMap,co=new WeakMap,lo=new WeakMap,U(io,4,`accept`,no,uo,ao),U(io,4,`type`,to,uo,oo),U(io,4,`collisionDetector`,eo,uo,so),U(io,4,`collisionPriority`,$a,uo,co),U(io,4,`shape`,Qa,uo,lo),U(io,2,`isDropTarget`,Za,uo),ia(io,uo);var fo=class{constructor(){this.registry=new Map}addEventListener(e,t){let{registry:n}=this,r=new Set(n.get(e));return r.add(t),n.set(e,r),()=>this.removeEventListener(e,t)}removeEventListener(e,t){let{registry:n}=this,r=new Set(n.get(e));r.delete(t),n.set(e,r)}dispatch(e,...t){let{registry:n}=this,r=n.get(e);if(r)for(let e of r)e(...t)}},po=class extends fo{constructor(e){super(),this.manager=e}dispatch(e,t){let n=[t,this.manager];super.dispatch(e,...n)}};function mo(e,t=!0){let n=!1;return Qi(Zi({},e),{cancelable:t,get defaultPrevented(){return n},preventDefault(){t&&(n=!0)}})}var ho=class extends va{constructor(e){super(e);let t=(e,t)=>e.map(({id:e})=>e).join(``)===t.map(({id:e})=>e).join(``),n=[];this.destroy=Mr(()=>{let{dragOperation:t,collisionObserver:r}=e;t.status.initializing&&(n=[],r.enable())},()=>{let{collisionObserver:r,monitor:i}=e,{collisions:a}=r;if(r.isDisabled()||La.pendingIdChanges)return;let o=mo({collisions:a});if(i.dispatch(`collision`,o),o.defaultPrevented||t(a,n))return;n=a;let[s]=a;z(()=>{s?.id!==e.dragOperation.target?.id&&(r.disable(),e.actions.setDropTarget(s?.id).then(()=>{r.enable()}))})})}},go=(e=>(e[e.Lowest=0]=`Lowest`,e[e.Low=1]=`Low`,e[e.Normal=2]=`Normal`,e[e.High=3]=`High`,e[e.Highest=4]=`Highest`,e))(go||{}),_o=(e=>(e[e.Collision=0]=`Collision`,e[e.ShapeIntersection=1]=`ShapeIntersection`,e[e.PointerIntersection=2]=`PointerIntersection`,e))(_o||{}),vo,yo,bo,xo,So,Co,wo=[B],To,Eo;Co=[Ar],So=[Ar],xo=[Ar],bo=[Ar],yo=[Ar],vo=[Ar];var Do=class{constructor(){H(To,5,this),W(this,Eo,H(To,8,this,`idle`)),H(To,11,this)}get current(){return this.value}get idle(){return this.value===`idle`}get initializing(){return this.value===`initializing`}get initialized(){let{value:e}=this;return e!==`idle`&&e!==`initialization-pending`}get dragging(){return this.value===`dragging`}get dropped(){return this.value===`dropped`}set(e){this.value=e}};To=ta(null),Eo=new WeakMap,U(To,4,`value`,wo,Do,Eo),U(To,2,`current`,Co,Do),U(To,2,`idle`,So,Do),U(To,2,`initializing`,xo,Do),U(To,2,`initialized`,bo,Do),U(To,2,`dragging`,yo,Do),U(To,2,`dropped`,vo,Do),ia(To,Do);var Oo=class{constructor(e){this.manager=e}setDragSource(e){let{dragOperation:t}=this.manager;t.sourceIdentifier=typeof e==`string`||typeof e==`number`?e:e.id}setDropTarget(e){return z(()=>{let{dragOperation:t}=this.manager,n=e??null;if(t.targetIdentifier===n)return Promise.resolve(!1);t.targetIdentifier=n;let r=mo({operation:t.snapshot()});return t.status.dragging&&this.manager.monitor.dispatch(`dragover`,r),this.manager.renderer.rendering.then(()=>r.defaultPrevented)})}start(e){return z(()=>{let{dragOperation:t}=this.manager;if(e.source!=null&&this.setDragSource(e.source),!t.source)throw Error(`Cannot start a drag operation without a drag source`);if(!t.status.idle)throw Error(`Cannot start a drag operation while another is active`);let n=new AbortController,{event:r,coordinates:i}=e;Mn(()=>{t.status.set(`initialization-pending`),t.shape=null,t.canceled=!1,t.activatorEvent=r??null,t.position.reset(i)});let a=mo({operation:t.snapshot()});return this.manager.monitor.dispatch(`beforedragstart`,a),a.defaultPrevented?(t.reset(),n.abort(),n):(t.status.set(`initializing`),t.controller=n,this.manager.renderer.rendering.then(()=>{if(n.signal.aborted)return;let{status:e}=t;e.current===`initializing`&&Mn(()=>{t.status.set(`dragging`),this.manager.monitor.dispatch(`dragstart`,{nativeEvent:r,operation:t.snapshot(),cancelable:!1})})}),n)})}move(e){return z(()=>{let{dragOperation:t}=this.manager,{status:n,controller:r}=t;if(!n.dragging||!r||r.signal.aborted)return;let i=mo({nativeEvent:e.event,operation:t.snapshot(),by:e.by,to:e.to},e.cancelable??!0);(e.propagate??!0)&&this.manager.monitor.dispatch(`dragmove`,i),queueMicrotask(()=>{if(i.defaultPrevented)return;let n=e.to??{x:t.position.current.x+(e.by?.x??0),y:t.position.current.y+(e.by?.y??0)};t.position.current=n})})}stop(e={}){return z(()=>{let{dragOperation:t}=this.manager,{controller:n}=t;if(!n||n.signal.aborted)return;let r,i=()=>{let e={resume:()=>{},abort:()=>{}};return r=new Promise((t,n)=>{e.resume=t,e.abort=n}),e};n.abort();let a=()=>{this.manager.renderer.rendering.then(()=>{t.status.set(`dropped`);let e=z(()=>t.source?.status===`dropping`),r=()=>{t.controller===n&&(t.controller=void 0),t.reset()};if(e){let{source:e}=t,n=er(()=>{e?.status===`idle`&&(n(),r())})}else this.manager.renderer.rendering.then(r)})};t.canceled=e.canceled??!1,this.manager.monitor.dispatch(`dragend`,{nativeEvent:e.event,operation:t.snapshot(),canceled:e.canceled??!1,suspend:i}),r?r.then(a).catch(()=>t.reset()):a()})}},ko=class extends _a{constructor(e,t){super(e,t),this.manager=e,this.options=t}},Ao=class extends AbortController{constructor(e,t){super(),this.constraints=e,this.onActivate=t,this.activated=!1;for(let t of e??[])t.controller=this}onEvent(e){if(!this.activated){if(this.constraints?.length)for(let t of this.constraints)t.onEvent(e);else this.activate(e)}}activate(e){this.activated||(this.activated=!0,this.onActivate(e))}abort(e){this.activated=!1,super.abort(e)}},jo,Mo=class{constructor(e){this.options=e,W(this,jo)}set controller(e){ca(this,jo,e),e.signal.addEventListener(`abort`,()=>this.abort())}activate(e){var t;(t=sa(this,jo))==null||t.activate(e)}};jo=new WeakMap;var No=class extends _a{constructor(e,t){super(e,t),this.manager=e,this.options=t}apply(e){return e.transform}},Po=class{constructor(e){this.draggables=new Ra,this.droppables=new Ra,this.plugins=new ba(e),this.sensors=new ba(e),this.modifiers=new ba(e)}register(e,t){if(e instanceof Xa)return this.draggables.register(e.id,e);if(e instanceof uo)return this.droppables.register(e.id,e);if(e.prototype instanceof No)return this.modifiers.register(e,t);if(e.prototype instanceof ko)return this.sensors.register(e,t);if(e.prototype instanceof _a)return this.plugins.register(e,t);throw Error(`Invalid instance type`)}unregister(e){if(e instanceof La)return e instanceof Xa?this.draggables.unregister(e.id,e):e instanceof uo?this.droppables.unregister(e.id,e):()=>{};if(e.prototype instanceof No)return this.modifiers.unregister(e);if(e.prototype instanceof ko)return this.sensors.unregister(e);if(e.prototype instanceof _a)return this.plugins.unregister(e);throw Error(`Invalid instance type`)}destroy(){this.draggables.destroy(),this.droppables.destroy(),this.plugins.destroy(),this.sensors.destroy(),this.modifiers.destroy()}},Fo,Io,Lo,Ro,G,zo,Bo,Vo,Ho=[Ar],Uo,Wo,Go,Ko,qo,Jo,Yo,Xo,Zo,Qo;Vo=[B],Bo=[B],zo=[B],G=[B],Ro=[B],Lo=[Ar],Io=[Ar],Fo=[Ar];var $o=class{constructor(e){H(Ko,5,this),W(this,Uo),W(this,Wo),W(this,Go,new $r(void 0,(e,t)=>e&&t?e.equals(t):e===t)),this.status=new Do,W(this,qo,H(Ko,8,this,!1)),H(Ko,11,this),W(this,Jo,H(Ko,12,this,null)),H(Ko,15,this),W(this,Yo,H(Ko,16,this,null)),H(Ko,19,this),W(this,Xo,H(Ko,20,this,null)),H(Ko,23,this),W(this,Zo,H(Ko,24,this,[])),H(Ko,27,this),this.position=new Ii({x:0,y:0}),W(this,Qo,{x:0,y:0}),ca(this,Uo,e)}get shape(){let{current:e,initial:t,previous:n}=sa(this,Go);return!e||!t?null:{current:e,initial:t,previous:n}}set shape(e){e?sa(this,Go).current=e:sa(this,Go).reset()}get source(){let e=this.sourceIdentifier;if(e==null)return null;let t=sa(this,Uo).registry.draggables.get(e);return t&&ca(this,Wo,t),t??sa(this,Wo)??null}get target(){let e=this.targetIdentifier;return e==null?null:sa(this,Uo).registry.droppables.get(e)??null}get transform(){let{x:e,y:t}=this.position.delta,n={x:e,y:t};for(let e of this.modifiers)n=e.apply(Qi(Zi({},this.snapshot()),{transform:n}));return ca(this,Qo,n),n}snapshot(){return z(()=>({source:this.source,target:this.target,activatorEvent:this.activatorEvent,transform:sa(this,Qo),shape:this.shape?ei(this.shape):null,position:ei(this.position),status:ei(this.status),canceled:this.canceled}))}reset(){Mn(()=>{this.status.set(`idle`),this.sourceIdentifier=null,this.targetIdentifier=null,sa(this,Go).reset(),this.position.reset({x:0,y:0}),ca(this,Qo,{x:0,y:0}),this.modifiers=[]})}};Ko=ta(null),Uo=new WeakMap,Wo=new WeakMap,Go=new WeakMap,qo=new WeakMap,Jo=new WeakMap,Yo=new WeakMap,Xo=new WeakMap,Zo=new WeakMap,Qo=new WeakMap,U(Ko,2,`shape`,Ho,$o),U(Ko,4,`canceled`,Vo,$o,qo),U(Ko,4,`activatorEvent`,Bo,$o,Jo),U(Ko,4,`sourceIdentifier`,zo,$o,Yo),U(Ko,4,`targetIdentifier`,G,$o,Xo),U(Ko,4,`modifiers`,Ro,$o,Zo),U(Ko,2,`source`,Lo,$o),U(Ko,2,`target`,Io,$o),U(Ko,2,`transform`,Fo,$o),ia(Ko,$o);var es={get rendering(){return Promise.resolve()}};function ts(e,t){return typeof e==`function`?e(t):e??t}var ns=class{constructor(e){this.destroy=()=>{this.dragOperation.status.idle||this.actions.stop({canceled:!0}),this.dragOperation.modifiers.forEach(e=>e.destroy()),this.registry.destroy(),this.collisionObserver.destroy()};let t=e??{},n=ts(t.plugins,[]),r=ts(t.sensors,[]),i=ts(t.modifiers,[]),a=t.renderer??es,o=new po(this),s=new Po(this);this.registry=s,this.monitor=o,this.renderer=a,this.actions=new Oo(this),this.dragOperation=new $o(this),this.collisionObserver=new Ta(this),this.plugins=[ho,...n],this.modifiers=i,this.sensors=r;let{destroy:c}=this,l=Mr(()=>{let e=z(()=>this.dragOperation.modifiers),t=this.modifiers;for(let n of e)t.includes(n)||n.destroy();this.dragOperation.modifiers=(this.dragOperation.source?.modifiers)?.map(e=>{let{plugin:t,options:n}=fa(e);return new t(this,n)})??t});this.destroy=()=>{l(),c()}}get plugins(){return this.registry.plugins.values}set plugins(e){this.registry.plugins.values=e}get modifiers(){return this.registry.modifiers.values}set modifiers(e){this.registry.modifiers.values=e}get sensors(){return this.registry.sensors.values}set sensors(e){this.registry.sensors.values=e}},rs=e=>{throw TypeError(e)},is=(e,t,n)=>t.has(e)||rs(`Cannot `+n),K=(e,t,n)=>(is(e,t,`read from private field`),t.get(e)),as=(e,t,n)=>t.has(e)?rs(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),os=(e,t,n,r)=>(is(e,t,`write to private field`),t.set(e,n),n),ss=(e,t,n)=>(is(e,t,`access private method`),n);function cs(e){return e?e instanceof KeyframeEffect||`getKeyframes`in e&&typeof e.getKeyframes==`function`:!1}function ls(e,t){let n=e.getAnimations(),r=null;for(let e of n){if(e.playState!==`running`)continue;let{effect:n}=e,i=(cs(n)?n.getKeyframes():[]).filter(t);i.length>0&&(r=[i[i.length-1],e])}return r}function us(e){let{width:t,height:n,top:r,left:i,bottom:a,right:o}=e.getBoundingClientRect();return{width:t,height:n,top:r,left:i,bottom:a,right:o}}function ds(e){let t=Object.prototype.toString.call(e);return t===`[object Window]`||t===`[object global]`}function fs(e){return`nodeType`in e}function ps(e){return e?ds(e)?e:fs(e)?`defaultView`in e?e.defaultView??window:e.ownerDocument?.defaultView??window:window:window}function ms(e){let{Document:t}=ps(e);return e instanceof t||`nodeType`in e&&e.nodeType===Node.DOCUMENT_NODE}function hs(e){return!e||ds(e)?!1:e instanceof ps(e).HTMLElement||`namespaceURI`in e&&typeof e.namespaceURI==`string`&&e.namespaceURI.endsWith(`html`)}function gs(e){return e instanceof ps(e).SVGElement||`namespaceURI`in e&&typeof e.namespaceURI==`string`&&e.namespaceURI.endsWith(`svg`)}function _s(e){return e?ds(e)?e.document:fs(e)?ms(e)?e:hs(e)||gs(e)?e.ownerDocument:document:document:document}function vs(e){let{documentElement:t}=_s(e),n=ps(e).visualViewport,r=n?.width??t.clientWidth,i=n?.height??t.clientHeight,a=n?.offsetTop??0,o=n?.offsetLeft??0;return{top:a,left:o,right:o+r,bottom:a+i,width:r,height:i}}function ys(e,t){if(bs(e)&&e.open===!1)return!1;let{overflow:n,overflowX:r,overflowY:i}=getComputedStyle(e);return n===`visible`&&r===`visible`&&i===`visible`}function bs(e){return e.tagName===`DETAILS`}function xs(e,t=e.getBoundingClientRect(),n=0){let r=t,{ownerDocument:i}=e,a=i.defaultView??window,o=e.parentElement;for(;o&&o!==i.documentElement;){if(!ys(o)){let e=o.getBoundingClientRect(),t=n*(e.bottom-e.top),i=n*(e.right-e.left),a=n*(e.bottom-e.top),s=n*(e.right-e.left);r={top:Math.max(r.top,e.top-t),right:Math.min(r.right,e.right+i),bottom:Math.min(r.bottom,e.bottom+a),left:Math.max(r.left,e.left-s),width:0,height:0},r.width=r.right-r.left,r.height=r.bottom-r.top}o=o.parentElement}let s=a.visualViewport,c=s?.offsetTop??0,l=s?.offsetLeft??0,u=s?.width??a.innerWidth,d=s?.height??a.innerHeight,f=n*d,p=n*u;return r={top:Math.max(r.top,c-f),right:Math.min(r.right,l+u+p),bottom:Math.min(r.bottom,c+d+f),left:Math.max(r.left,l-p),width:0,height:0},r.width=r.right-r.left,r.height=r.bottom-r.top,r.width<0&&(r.width=0),r.height<0&&(r.height=0),r}function Ss(e){return{x:e.clientX,y:e.clientY}}var Cs=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function ws(e=document,t=new Set){if(t.has(e))return[];t.add(e);let n=[e];for(let r of Array.from(e.querySelectorAll(`iframe, frame`)))try{let e=r.contentDocument;e&&!t.has(e)&&n.push(...ws(e,t))}catch{}try{let r=e.defaultView;if(r&&r!==window.top){let i=r.parent;i&&i.document&&i.document!==e&&n.push(...ws(i.document,t))}}catch{}return n}function Ts(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}function Es(){let e=Ts()?window.visualViewport:null;return{x:e?.offsetLeft??0,y:e?.offsetTop??0}}function Ds(e){return!e||!fs(e)?!1:e instanceof ps(e).ShadowRoot}function Os(e){if(e&&fs(e)){let t=e.getRootNode();if(Ds(t)||t instanceof Document)return t}return _s(e)}function ks(e){return e.matchMedia(`(prefers-reduced-motion: reduce)`).matches}function As(e){let t=`input, textarea, select, canvas, [contenteditable]`,n=e.cloneNode(!0),r=Array.from(e.querySelectorAll(t));return Array.from(n.querySelectorAll(t)).forEach((e,t)=>{let n=r[t];js(e)&&js(n)&&(e.type!==`file`&&(e.value=n.value),e.type===`radio`&&e.name&&(e.name=`Cloned__${e.name}`)),Ms(e)&&Ms(n)&&n.width>0&&n.height>0&&e.getContext(`2d`)?.drawImage(n,0,0)}),n}function js(e){return`value`in e}function Ms(e){return e.tagName===`CANVAS`}function Ns(e,{x:t,y:n}){let r=e.elementFromPoint(t,n);if(Ps(r)){let{contentDocument:e}=r;if(e){let{left:i,top:a}=r.getBoundingClientRect();return Ns(e,{x:t-i,y:n-a})}}return r}function Ps(e){return e?.tagName===`IFRAME`}var Fs=new WeakMap;function Is(e){return!!e.closest(`
      input:not([disabled]),
      select:not([disabled]),
      textarea:not([disabled]),
      button:not([disabled]),
      a[href],
      [contenteditable]:not([contenteditable="false"])
    `)}var Ls=class{constructor(){this.entries=new Set,this.clear=()=>{for(let e of this.entries){let[t,{type:n,listener:r,options:i}]=e;t.removeEventListener(n,r,i)}this.entries.clear()}}bind(e,t){let n=Array.isArray(e)?e:[e],r=Array.isArray(t)?t:[t],i=[];for(let e of n)for(let t of r){let{type:n,listener:r,options:a}=t,o=[e,t];e.addEventListener(n,r,a),this.entries.add(o),i.push(o)}let a=this.entries;return function(){for(let e of i){let[t,{type:n,listener:r,options:i}]=e;t.removeEventListener(n,r,i),a.delete(e)}}}};function Rs(e){let t=e?.ownerDocument.defaultView;if(t&&t.self!==t.parent)return t.frameElement}function zs(e){let t=new Set,n=Rs(e);for(;n;)t.add(n),n=Rs(n);return t}function Bs(e,t){let n=setTimeout(e,t);return()=>clearTimeout(n)}function Vs(e,t){let n=()=>performance.now(),r,i;return function(...a){let o=this;i?(r?.(),r=Bs(()=>{e.apply(o,a),i=n()},t-(n()-i))):(e.apply(o,a),i=n())}}function Hs(e,t){return e===t?!0:!e||!t?!1:e.top==t.top&&e.left==t.left&&e.right==t.right&&e.bottom==t.bottom}function Us(e,t=e.getBoundingClientRect()){let{width:n,height:r}=xs(e,t);return n>0&&r>0}var Ws=Cs?ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},Gs,Ks=class extends Ws{constructor(e){super(t=>{if(!K(this,Gs)){os(this,Gs,!0);return}e(t,this)}),as(this,Gs,!1)}};Gs=new WeakMap;var qs=Array.from({length:100},(e,t)=>t/100),Js=75,Ys,Xs,Zs,Qs,$s,ec,tc,nc,rc,ic,ac,oc=class{constructor(e,t,n={debug:!1,skipInitial:!1}){this.element=e,this.callback=t,as(this,rc),this.disconnect=()=>{var e,t,n;os(this,tc,!0),(e=K(this,Zs))==null||e.disconnect(),(t=K(this,Qs))==null||t.disconnect(),K(this,$s).disconnect(),(n=K(this,ec))==null||n.remove()},as(this,Ys,!0),as(this,Xs),as(this,Zs),as(this,Qs),as(this,$s),as(this,ec),as(this,tc,!1),as(this,nc,Vs(()=>{var e;let{element:t}=this;if((e=K(this,Qs))==null||e.disconnect(),K(this,tc)||!K(this,Ys)||!t.isConnected)return;let n=t.ownerDocument??document,{innerHeight:r,innerWidth:i}=n.defaultView??window,a=t.getBoundingClientRect(),{top:o,left:s,bottom:c,right:l}=xs(t,a),u=-Math.floor(o),d=-Math.floor(s),f=`${u}px ${-Math.floor(i-l)}px ${-Math.floor(r-c)}px ${d}px`;this.boundingClientRect=a,os(this,Qs,new IntersectionObserver(e=>{let[n]=e,{intersectionRect:r}=n;(n.intersectionRatio===1?ki.intersectionRatio(r,xs(t)):n.intersectionRatio)!==1&&K(this,nc).call(this)},{threshold:qs,rootMargin:f,root:n})),K(this,Qs).observe(t),ss(this,rc,ic).call(this)},Js)),this.boundingClientRect=e.getBoundingClientRect(),os(this,Ys,Us(e,this.boundingClientRect));let r=!0;this.callback=e=>{r&&(r=!1,n.skipInitial)||t(e)};let i=e.ownerDocument;n?.debug&&(os(this,ec,document.createElement(`div`)),K(this,ec).style.background=`rgba(0,0,0,0.15)`,K(this,ec).style.position=`fixed`,K(this,ec).style.pointerEvents=`none`,i.body.appendChild(K(this,ec))),os(this,$s,new IntersectionObserver(t=>{var n,r;let{boundingClientRect:i,isIntersecting:a}=t[t.length-1],{width:o,height:s}=i,c=K(this,Ys);os(this,Ys,a),(o||s)&&(c&&!a?((n=K(this,Qs))==null||n.disconnect(),this.callback(null),(r=K(this,Zs))==null||r.disconnect(),os(this,Zs,void 0),K(this,ec)&&(K(this,ec).style.visibility=`hidden`)):K(this,nc).call(this),a&&!K(this,Zs)&&(os(this,Zs,new Ks(K(this,nc))),K(this,Zs).observe(e)))},{threshold:qs,root:i})),K(this,Ys)&&!n.skipInitial&&this.callback(this.boundingClientRect),K(this,$s).observe(e)}};Ys=new WeakMap,Xs=new WeakMap,Zs=new WeakMap,Qs=new WeakMap,$s=new WeakMap,ec=new WeakMap,tc=new WeakMap,nc=new WeakMap,rc=new WeakSet,ic=function(){K(this,tc)||(ss(this,rc,ac).call(this),!Hs(this.boundingClientRect,K(this,Xs))&&(this.callback(this.boundingClientRect),os(this,Xs,this.boundingClientRect)))},ac=function(){if(K(this,ec)){let{top:e,left:t,width:n,height:r}=xs(this.element);K(this,ec).style.overflow=`hidden`,K(this,ec).style.visibility=`visible`,K(this,ec).style.top=`${Math.floor(e)}px`,K(this,ec).style.left=`${Math.floor(t)}px`,K(this,ec).style.width=`${Math.floor(n)}px`,K(this,ec).style.height=`${Math.floor(r)}px`}};var sc=new WeakMap,cc=new WeakMap;function lc(e,t){let n=sc.get(e);return n||={disconnect:new oc(e,t=>{let n=sc.get(e);n&&n.callbacks.forEach(e=>e(t))},{skipInitial:!0}).disconnect,callbacks:new Set},n.callbacks.add(t),sc.set(e,n),()=>{n.callbacks.delete(t),n.callbacks.size===0&&(sc.delete(e),n.disconnect())}}function uc(e,t){let n=new Set;for(let r of e){let e=lc(r,t);n.add(e)}return()=>n.forEach(e=>e())}function dc(e,t){let n=e.ownerDocument;if(!cc.has(n)){let e=new AbortController,t=new Set;document.addEventListener(`scroll`,e=>t.forEach(t=>t(e)),{capture:!0,passive:!0,signal:e.signal}),cc.set(n,{disconnect:()=>e.abort(),listeners:t})}let{listeners:r,disconnect:i}=cc.get(n)??{};return!r||!i?()=>{}:(r.add(t),()=>{r.delete(t),r.size===0&&(i(),cc.delete(n))})}var fc,pc,mc,hc,gc=class{constructor(e,t,n){this.callback=t,as(this,fc),as(this,pc,!1),as(this,mc),as(this,hc,Vs(e=>{if(!K(this,pc)&&e.target&&`contains`in e.target&&typeof e.target.contains==`function`){for(let t of K(this,mc))if(e.target.contains(t)){this.callback(K(this,fc).boundingClientRect);break}}},Js));let r=zs(e),i=uc(r,t),a=dc(e,K(this,hc));os(this,mc,r),os(this,fc,new oc(e,t,n)),this.disconnect=()=>{K(this,pc)||(os(this,pc,!0),i(),a(),K(this,fc).disconnect())}}};fc=new WeakMap,pc=new WeakMap,mc=new WeakMap,hc=new WeakMap;function _c(e){return`showPopover`in e&&`hidePopover`in e&&typeof e.showPopover==`function`&&typeof e.hidePopover==`function`}function vc(e){try{_c(e)&&e.isConnected&&e.hasAttribute(`popover`)&&!e.matches(`:popover-open`)&&e.showPopover()}catch{}}function yc(e){return!Cs||!e?!1:e===_s(e).scrollingElement}function bc(e){let t=ps(e),n=yc(e)?vs(e):us(e),r=t.visualViewport,i=yc(e)?{height:r?.height??t.innerHeight,width:r?.width??t.innerWidth}:{height:e.clientHeight,width:e.clientWidth},a={current:{x:e.scrollLeft,y:e.scrollTop},max:{x:e.scrollWidth-i.width,y:e.scrollHeight-i.height}};return{rect:n,position:a,isTop:a.current.y<=0,isLeft:a.current.x<=0,isBottom:a.current.y>=a.max.y,isRight:a.current.x>=a.max.x}}function xc(e,t){let{isTop:n,isBottom:r,isLeft:i,isRight:a,position:o}=bc(e),{x:s,y:c}=t??{x:0,y:0},l=!n&&o.current.y+c>0,u=!r&&o.current.y+c<o.max.y,d=!i&&o.current.x+s>0,f=!a&&o.current.x+s<o.max.x;return{top:l,bottom:u,left:d,right:f,x:d||f,y:l||u}}var Sc=class{constructor(e){this.scheduler=e,this.pending=!1,this.tasks=new Set,this.resolvers=new Set,this.flush=()=>{let{tasks:e,resolvers:t}=this;this.pending=!1,this.tasks=new Set,this.resolvers=new Set;for(let t of e)t();for(let e of t)e()}}schedule(e){return this.tasks.add(e),this.pending||(this.pending=!0,this.scheduler(this.flush)),new Promise(e=>this.resolvers.add(e))}},Cc=new Sc(e=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()}),wc=new Sc(e=>setTimeout(e,50)),Tc=new Map,Ec=Tc.clear.bind(Tc);function Dc(e,t=!1){if(!t)return Oc(e);let n=Tc.get(e);return n||(n=Oc(e),Tc.set(e,n),wc.schedule(Ec),n)}function Oc(e){return ps(e).getComputedStyle(e)}function kc(e,t=Dc(e,!0)){return t.position===`fixed`||t.position===`sticky`}function Ac(e,t=Dc(e,!0)){let n=/(auto|scroll|overlay)/;return[`overflow`,`overflowX`,`overflowY`].some(e=>{let r=t[e];return typeof r==`string`&&n.test(r)})}var jc={excludeElement:!0,escapeShadowDOM:!0};function Mc(e,t=jc){let{limit:n,excludeElement:r,escapeShadowDOM:i}=t,a=new Set;function o(t){if(n!=null&&a.size>=n||!t)return a;if(ms(t)&&t.scrollingElement!=null&&!a.has(t.scrollingElement))return a.add(t.scrollingElement),a;if(i&&Ds(t))return o(t.host);if(!hs(t))return gs(t)?o(t.parentElement):a;if(a.has(t))return a;let s=Dc(t,!0);if(r&&t===e||Ac(t,s)&&a.add(t),kc(t,s)){let{scrollingElement:e}=t.ownerDocument;return e&&a.add(e),a}return o(t.parentNode)}return e?o(e):a}function Nc(e,t=window.frameElement){let n={x:0,y:0,scaleX:1,scaleY:1};if(!e)return n;let r=Rs(e);for(;r;){if(r===t)return n;let e=us(r),{x:i,y:a}=Pc(r,e);n.x+=e.left,n.y+=e.top,n.scaleX*=i,n.scaleY*=a,r=Rs(r)}return n}function Pc(e,t=us(e)){let n=Math.round(t.width),r=Math.round(t.height);if(hs(e))return{x:n/e.offsetWidth,y:r/e.offsetHeight};let i=Dc(e,!0);return{x:(parseFloat(i.width)||n)/n,y:(parseFloat(i.height)||r)/r}}function Fc(e){if(e===`none`)return null;let t=e.split(` `),n=parseFloat(t[0]),r=parseFloat(t[1]);return isNaN(n)&&isNaN(r)?null:{x:isNaN(n)?r:n,y:isNaN(r)?n:r}}function Ic(e){if(e===`none`)return null;let[t,n,r=`0`]=e.split(` `),i={x:parseFloat(t),y:parseFloat(n),z:parseInt(r,10)};return isNaN(i.x)&&isNaN(i.y)?null:{x:isNaN(i.x)?0:i.x,y:isNaN(i.y)?0:i.y,z:isNaN(i.z)?0:i.z}}function Lc(e){let{scale:t,transform:n,translate:r}=e,i=Fc(t),a=Ic(r),o=Rc(n);if(!o&&!i&&!a)return null;let s={x:i?.x??1,y:i?.y??1},c={x:a?.x??0,y:a?.y??0},l={x:o?.x??0,y:o?.y??0,scaleX:o?.scaleX??1,scaleY:o?.scaleY??1};return{x:c.x+l.x,y:c.y+l.y,z:a?.z??0,scaleX:s.x*l.scaleX,scaleY:s.y*l.scaleY}}function Rc(e){if(e.startsWith(`matrix3d(`)){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith(`matrix(`)){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}var zc=(e=>(e[e.Idle=0]=`Idle`,e[e.Forward=1]=`Forward`,e[e.Reverse=-1]=`Reverse`,e))(zc||{}),Bc={x:.2,y:.2},Vc={x:10,y:10};function Hc(e,t,n,r=25,i=Bc,a=Vc){let{x:o,y:s}=t,{rect:c,isTop:l,isBottom:u,isLeft:d,isRight:f}=bc(e),p=Nc(e),m=Lc(Dc(e,!0)),h=m!==null&&m?.scaleX<0,g=m!==null&&m?.scaleY<0,_=new ki(c.left*p.scaleX+p.x,c.top*p.scaleY+p.y,c.width*p.scaleX,c.height*p.scaleY),v={x:0,y:0},y={x:0,y:0},b={height:_.height*i.y,width:_.width*i.x};return b.height>0&&(!l||g&&!u)&&s<=_.top+b.height&&n?.y!==1&&o>=_.left-a.x&&o<=_.right+a.x?(v.y=g?1:-1,y.y=r*Math.abs((_.top+b.height-s)/b.height)):b.height>0&&(!u||g&&!l)&&s>=_.bottom-b.height&&n?.y!==-1&&o>=_.left-a.x&&o<=_.right+a.x&&(v.y=g?-1:1,y.y=r*Math.abs((_.bottom-b.height-s)/b.height)),b.width>0&&(!f||h&&!d)&&o>=_.right-b.width&&n?.x!==-1&&s>=_.top-a.y&&s<=_.bottom+a.y?(v.x=h?-1:1,y.x=r*Math.abs((_.right-b.width-o)/b.width)):b.width>0&&(!d||h&&!f)&&o<=_.left+b.width&&n?.x!==1&&s>=_.top-a.y&&s<=_.bottom+a.y&&(v.x=h?1:-1,y.x=r*Math.abs((_.left+b.width-o)/b.width)),{direction:v,speed:y}}function Uc(e,{block:t=`nearest`,inline:n=`nearest`}={}){if(!hs(e))return;let r=Mc(e),i=[];for(let a of r){if(!hs(a))continue;let{top:r,left:o}=Gc(e,a),s=r,c=o;for(let e of i)s-=e.scrollTop,c-=e.scrollLeft;if(t!==`none`){let n=s<a.scrollTop;n!==s+e.offsetHeight>a.scrollTop+a.clientHeight&&(a.scrollTop=t===`center`?s-a.clientHeight/2+e.offsetHeight/2:n?s:s+e.offsetHeight-a.clientHeight)}if(n!==`none`){let t=c<a.scrollLeft;t!==c+e.offsetWidth>a.scrollLeft+a.clientWidth&&(a.scrollLeft=n===`center`?c-a.clientWidth/2+e.offsetWidth/2:t?c:c+e.offsetWidth-a.clientWidth)}i.push(a)}}function Wc(e){let t=0,n=0,r=e;for(;r;){t+=r.offsetTop,n+=r.offsetLeft;let e=r.offsetParent;if(!hs(e))break;t+=e.clientTop,n+=e.clientLeft,r=e}return{top:t,left:n}}function Gc(e,t){let n=Wc(e),r=Wc(t);return{top:n.top-r.top-t.clientTop,left:n.left-r.left-t.clientLeft}}function Kc(e,t,n){let{scaleX:r,scaleY:i,x:a,y:o}=t,s=e.left+a+(1-r)*parseFloat(n),c=e.top+o+(1-i)*parseFloat(n.slice(n.indexOf(` `)+1)),l=r?e.width*r:e.width,u=i?e.height*i:e.height;return{width:l,height:u,top:c,right:s+l,bottom:c+u,left:s}}function qc(e,t,n){let{scaleX:r,scaleY:i,x:a,y:o}=t,s=e.left-a-(1-r)*parseFloat(n),c=e.top-o-(1-i)*parseFloat(n.slice(n.indexOf(` `)+1)),l=r?e.width/r:e.width,u=i?e.height/i:e.height;return{width:l,height:u,top:c,right:s+l,bottom:c+u,left:s}}function Jc({element:e,keyframes:t,options:n}){return e.animate(t,n).finished}function Yc(e,t=Dc(e).translate,n=!0){if(n){let t=ls(e,e=>`translate`in e);if(t){let{translate:e=``}=t[0];if(typeof e==`string`){let t=Ic(e);if(t)return t}}}if(t){let e=Ic(t);if(e)return e}return{x:0,y:0,z:0}}var Xc=new Sc(e=>setTimeout(e,0)),Zc=new Map,Qc=Zc.clear.bind(Zc);function $c(e){let t=e.ownerDocument,n=Zc.get(t);if(n)return n;n=t.getAnimations(),Zc.set(t,n),Xc.schedule(Qc);let r=n.filter(t=>cs(t.effect)&&t.effect.target===e);return Zc.set(e,r),n}function el(e,t){let n=$c(e).filter(e=>{if(cs(e.effect)){let{target:n}=e.effect;if((n&&t.isValidTarget?.call(t,n))??!0)return e.effect.getKeyframes().some(e=>{for(let n of t.properties)if(e[n])return!0})}}).map(e=>{let{effect:t,currentTime:n}=e,r=t?.getComputedTiming().duration;if(!(e.pending||e.playState===`finished`)&&typeof r==`number`&&typeof n==`number`&&n<r)return e.currentTime=r,()=>{e.currentTime=n}});if(n.length>0)return()=>n.forEach(e=>e?.())}var tl=class extends ki{constructor(e,t={}){let{frameTransform:n=Nc(e),ignoreTransforms:r,getBoundingClientRect:i=us}=t,a=el(e,{properties:[`transform`,`translate`,`scale`,`width`,`height`],isValidTarget:t=>(t!==e||Ts())&&t.contains(e)}),o=i(e),{top:s,left:c,width:l,height:u}=o,d,f=Dc(e),p=Lc(f),m={x:p?.scaleX??1,y:p?.scaleY??1},h=nl(e,f);a?.(),p&&(d=qc(o,p,f.transformOrigin),(r||h)&&(s=d.top,c=d.left,l=d.width,u=d.height));let g={width:d?.width??l,height:d?.height??u};if(h&&!r&&d){let e=Kc(d,h,f.transformOrigin);s=e.top,c=e.left,l=e.width,u=e.height,m.x=h.scaleX,m.y=h.scaleY}n&&(r||(c*=n.scaleX,l*=n.scaleX,s*=n.scaleY,u*=n.scaleY),c+=n.x,s+=n.y),super(c,s,l,u),this.scale=m,this.intrinsicWidth=g.width,this.intrinsicHeight=g.height}};function nl(e,t){let n=e.getAnimations();if(!n.length)return null;let r,i,a,o=!1;for(let e of n){if(e.playState!==`running`)continue;let t=cs(e.effect)?e.effect.getKeyframes():[],n=t[t.length-1];if(!n)continue;let{transform:s,translate:c,scale:l}=n;typeof s==`string`&&s&&(r=s,o=!0),typeof c==`string`&&c&&(i=c,o=!0),typeof l==`string`&&l&&(a=l,o=!0)}return o?Lc({transform:r??t.transform,translate:i??t.translate,scale:a??t.scale}):null}function rl(e){return`style`in e&&typeof e.style==`object`&&e.style!==null&&`setProperty`in e.style&&`removeProperty`in e.style&&typeof e.style.setProperty==`function`&&typeof e.style.removeProperty==`function`}var il=class{constructor(e){this.element=e,this.initial=new Map}set(e,t=``){let{element:n}=this;if(rl(n))for(let[r,i]of Object.entries(e)){let e=`${t}${r}`;this.initial.has(e)||this.initial.set(e,n.style.getPropertyValue(e)),n.style.setProperty(e,typeof i==`string`?i:`${i}px`)}}remove(e,t=``){let{element:n}=this;if(rl(n))for(let r of e){let e=`${t}${r}`;n.style.removeProperty(e)}}reset(){let{element:e}=this;if(rl(e)){for(let[t,n]of this.initial)e.style.setProperty(t,n);e.getAttribute(`style`)===``&&e.removeAttribute(`style`)}}};function al(e){return e?e instanceof ps(e).Element||fs(e)&&e.nodeType===Node.ELEMENT_NODE:!1}function ol(e){if(!e)return!1;let{KeyboardEvent:t}=ps(e.target);return e instanceof t}function sl(e){if(!e)return!1;let{PointerEvent:t}=ps(e.target);return e instanceof t}function cl(e){if(!al(e))return!1;let{tagName:t}=e;return t===`INPUT`||t===`TEXTAREA`||ll(e)}function ll(e){return e.hasAttribute(`contenteditable`)&&e.getAttribute(`contenteditable`)!==`false`}var ul={};function dl(e){let t=ul[e]==null?0:ul[e]+1;return ul[e]=t,`${e}-${t}`}var fl=({dragOperation:e,droppable:t})=>{let n=e.position.current;if(!n)return null;let{id:r}=t;return t.shape&&t.shape.containsPoint(n)?{id:r,value:1/Oi.distance(t.shape.center,n),type:_o.PointerIntersection,priority:go.High}:null},pl=({dragOperation:e,droppable:t})=>{let{shape:n}=e;if(!t.shape||!n?.current)return null;let r=n.current.intersectionArea(t.shape);if(r){let{position:i}=e,a=Oi.distance(t.shape.center,i.current),o=r/(n.current.area+t.shape.area-r)/a;return{id:t.id,value:o,type:_o.ShapeIntersection,priority:go.Normal}}return null},ml=e=>fl(e)??pl(e),hl=e=>{let{dragOperation:t,droppable:n}=e,{shape:r,position:i}=t;if(!n.shape)return null;let a=r?ki.from(r.current.boundingRectangle).corners:void 0,o=ki.from(n.shape.boundingRectangle).corners.reduce((e,t,n)=>e+Oi.distance(Oi.from(t),a?.[n]??i.current),0)/4;return{id:n.id,value:1/o,type:_o.Collision,priority:go.Normal}},gl=Object.create,_l=Object.defineProperty,vl=Object.defineProperties,yl=Object.getOwnPropertyDescriptor,bl=Object.getOwnPropertyDescriptors,xl=Object.getOwnPropertySymbols,Sl=Object.prototype.hasOwnProperty,Cl=Object.prototype.propertyIsEnumerable,wl=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),Tl=e=>{throw TypeError(e)},El=(e,t,n)=>t in e?_l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Dl=(e,t)=>{for(var n in t||={})Sl.call(t,n)&&El(e,n,t[n]);if(xl)for(var n of xl(t))Cl.call(t,n)&&El(e,n,t[n]);return e},Ol=(e,t)=>vl(e,bl(t)),kl=(e,t)=>_l(e,`name`,{value:t,configurable:!0}),Al=(e,t)=>{var n={};for(var r in e)Sl.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&xl)for(var r of xl(e))t.indexOf(r)<0&&Cl.call(e,r)&&(n[r]=e[r]);return n},jl=e=>[,,,gl(e?.[wl(`metadata`)]??null)],Ml=[`class`,`method`,`getter`,`setter`,`accessor`,`field`,`value`,`get`,`set`],Nl=e=>e!==void 0&&typeof e!=`function`?Tl(`Function expected`):e,Pl=(e,t,n,r,i)=>({kind:Ml[e],name:t,metadata:r,addInitializer:e=>n._?Tl(`Already initialized`):i.push(Nl(e||null))}),Fl=(e,t)=>El(t,wl(`metadata`),e[3]),Il=(e,t,n,r)=>{for(var i=0,a=e[t>>1],o=a&&a.length;i<o;i++)t&1?a[i].call(n):r=a[i].call(n,r);return r},Ll=(e,t,n,r,i,a)=>{var o,s,c,l,u,d=t&7,f=!!(t&8),p=!!(t&16),m=d>3?e.length+1:d?f?1:2:0,h=Ml[d+5],g=d>3&&(e[m-1]=[]),_=e[m]||(e[m]=[]),v=d&&(!p&&!f&&(i=i.prototype),d<5&&(d>3||!p)&&yl(d<4?i:{get[n](){return q(this,a)},set[n](e){return Vl(this,a,e)}},n));d?p&&d<4&&kl(a,(d>2?`set `:d>1?`get `:``)+n):kl(i,n);for(var y=r.length-1;y>=0;y--)l=Pl(d,n,c={},e[3],_),d&&(l.static=f,l.private=p,u=l.access={has:p?e=>zl(i,e):e=>n in e},d^3&&(u.get=p?e=>(d^1?q:Hl)(e,i,d^4?a:v.get):e=>e[n]),d>2&&(u.set=p?(e,t)=>Vl(e,i,t,d^4?a:v.set):(e,t)=>e[n]=t)),s=(0,r[y])(d?d<4?p?a:v[h]:d>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,d^4||s===void 0?Nl(s)&&(d>4?g.unshift(s):d?p?a=s:v[h]=s:i=s):typeof s!=`object`||!s?Tl(`Object expected`):(Nl(o=s.get)&&(v.get=o),Nl(o=s.set)&&(v.set=o),Nl(o=s.init)&&g.unshift(o));return d||Fl(e,i),v&&_l(i,n,v),p?d^4?a:v:i},Rl=(e,t,n)=>t.has(e)||Tl(`Cannot `+n),zl=(e,t)=>Object(t)===t?e.has(t):Tl(`Cannot use the "in" operator on this value`),q=(e,t,n)=>(Rl(e,t,`read from private field`),n?n.call(e):t.get(e)),Bl=(e,t,n)=>t.has(e)?Tl(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Vl=(e,t,n,r)=>(Rl(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Hl=(e,t,n)=>(Rl(e,t,`access private method`),n),Ul={role:`button`,roleDescription:`draggable`},Wl=`dnd-kit-description`,Gl=`dnd-kit-announcement`,Kl={draggable:`To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel.`},ql={dragstart({operation:{source:e}}){if(e)return`Picked up draggable item ${e.id}.`},dragover({operation:{source:e,target:t}}){if(e&&e.id!==t?.id)return t?`Draggable item ${e.id} was moved over droppable target ${t.id}.`:`Draggable item ${e.id} is no longer over a droppable target.`},dragend({operation:{source:e,target:t},canceled:n}){if(e)return n?`Dragging was cancelled. Draggable item ${e.id} was dropped.`:t?`Draggable item ${e.id} was dropped over droppable target ${t.id}`:`Draggable item ${e.id} was dropped.`}};function Jl(e){let t=e.tagName.toLowerCase();return[`input`,`select`,`textarea`,`a`,`button`].includes(t)}function Yl(e,t){let n=document.createElement(`div`);return n.id=e,n.style.setProperty(`display`,`none`),n.textContent=t,n}function Xl(e){let t=document.createElement(`div`);return t.id=e,t.setAttribute(`role`,`status`),t.setAttribute(`aria-live`,`polite`),t.setAttribute(`aria-atomic`,`true`),t.style.setProperty(`position`,`fixed`),t.style.setProperty(`width`,`1px`),t.style.setProperty(`height`,`1px`),t.style.setProperty(`margin`,`-1px`),t.style.setProperty(`border`,`0`),t.style.setProperty(`padding`,`0`),t.style.setProperty(`overflow`,`hidden`),t.style.setProperty(`clip`,`rect(0 0 0 0)`),t.style.setProperty(`clip-path`,`inset(100%)`),t.style.setProperty(`white-space`,`nowrap`),t}var Zl=[`dragover`,`dragmove`],Ql=class extends _a{constructor(e,t){super(e);let{id:n,idPrefix:{description:r=Wl,announcement:i=Gl}={},announcements:a=ql,screenReaderInstructions:o=Kl,debounce:s=500}=t??{},c=n?`${r}-${n}`:dl(r),l=n?`${i}-${n}`:dl(i),u,d,f,p,m=(e=p)=>{f&&e&&f?.nodeValue!==e&&(f.nodeValue=e)},h=()=>Cc.schedule(m),g=$l(h,s),_=Object.entries(a).map(([e,t])=>this.manager.monitor.addEventListener(e,(n,r)=>{let i=f;if(!i)return;let a=t?.(n,r);a&&i.nodeValue!==a&&(p=a,Zl.includes(e)?g():(h(),g.cancel()))})),v=()=>{let e=[];u?.isConnected||(u=Yl(c,o.draggable),e.push(u)),d?.isConnected||(d=Xl(l),f=document.createTextNode(``),d.appendChild(f),e.push(d)),e.length>0&&document.body.append(...e)},y=new Set;function b(){for(let e of y)e()}this.registerEffect(()=>{y.clear();for(let e of this.manager.registry.draggables.value){let t=e.handle??e.element;if(t){(!u||!d)&&y.add(v),(!Jl(t)||Ts())&&!t.hasAttribute(`tabindex`)&&y.add(()=>t.setAttribute(`tabindex`,`0`)),!t.hasAttribute(`role`)&&t.tagName.toLowerCase()!==`button`&&y.add(()=>t.setAttribute(`role`,Ul.role)),t.hasAttribute(`aria-roledescription`)||y.add(()=>t.setAttribute(`aria-roledescription`,Ul.roleDescription)),t.hasAttribute(`aria-describedby`)||y.add(()=>t.setAttribute(`aria-describedby`,c));for(let n of[`aria-pressed`,`aria-grabbed`]){let r=String(e.isDragging);t.getAttribute(n)!==r&&y.add(()=>t.setAttribute(n,r))}let n=String(e.disabled);t.getAttribute(`aria-disabled`)!==n&&y.add(()=>t.setAttribute(`aria-disabled`,n))}}y.size>0&&Cc.schedule(b)}),this.destroy=()=>{super.destroy(),u?.remove(),d?.remove(),_.forEach(e=>e())}}};function $l(e,t){let n,r=()=>{clearTimeout(n),n=setTimeout(e,t)};return r.cancel=()=>clearTimeout(n),r}var eu=new Map,tu,nu,ru,iu,au,ou,su,cu,lu,uu,du,fu,pu,mu=class extends (au=va,iu=[B],ru=[Ar],nu=[Ar],tu=[Ar],au){constructor(e,t){super(e,t),Il(su,5,this),Bl(this,lu),Bl(this,ou,new Set),Bl(this,cu,Il(su,8,this,new Set)),Il(su,11,this),this.registerEffect(Hl(this,lu,uu))}register(e){return q(this,ou).add(e),()=>{q(this,ou).delete(e)}}addRoot(e){return z(()=>{let t=new Set(this.additionalRoots);t.add(e),this.additionalRoots=t}),()=>{z(()=>{let t=new Set(this.additionalRoots);t.delete(e),this.additionalRoots=t})}}get sourceRoot(){let{source:e}=this.manager.dragOperation;return Os(e?.element??null)}get targetRoot(){let{target:e}=this.manager.dragOperation;return Os(e?.element??null)}get roots(){let{status:e}=this.manager.dragOperation;if(e.initializing||e.initialized){let e=[this.sourceRoot,this.targetRoot].filter(e=>e!=null);return new Set([...e,...this.additionalRoots])}return new Set}};su=jl(au),ou=new WeakMap,cu=new WeakMap,lu=new WeakSet,uu=function(){let{roots:e}=this,t=[];for(let n of e)for(let e of q(this,ou))t.push(Hl(this,lu,du).call(this,n,e));return()=>{for(let e of t)e()}},du=function(e,t){let n=eu.get(e);n||(n=new Map,eu.set(e,n));let r=n.get(t);if(!r){let i=ms(e)?Hl(this,lu,fu).call(this,e,n,t):Hl(this,lu,pu).call(this,e,n,t);if(!i)return()=>{};r=i,n.set(t,r)}r.refCount++;let i=!1;return()=>{i||(i=!0,r.refCount--,r.refCount===0&&r.cleanup())}},fu=function(e,t,n){let r=e.createElement(`style`),{nonce:i}=this.options??{};i&&r.setAttribute(`nonce`,i),r.textContent=n,e.head.prepend(r);let a=new MutationObserver(t=>{for(let n of t)for(let t of Array.from(n.removedNodes))if(t===r){e.head.prepend(r);return}});return a.observe(e.head,{childList:!0}),{refCount:0,cleanup:()=>{a.disconnect(),r.remove(),t.delete(n),t.size===0&&eu.delete(e)}}},pu=function(e,t,n){`adoptedStyleSheets`in e&&Array.isArray(e.adoptedStyleSheets);let{CSSStyleSheet:r}=e.ownerDocument.defaultView??{};if(!r)return null;let i=new r;return i.replaceSync(n),e.adoptedStyleSheets.push(i),{refCount:0,cleanup:()=>{if(Ds(e)&&e.host?.isConnected){let t=e.adoptedStyleSheets.indexOf(i);t!==-1&&e.adoptedStyleSheets.splice(t,1)}t.delete(n),t.size===0&&eu.delete(e)}}},Ll(su,4,`additionalRoots`,iu,mu,cu),Ll(su,2,`sourceRoot`,ru,mu),Ll(su,2,`targetRoot`,nu,mu),Ll(su,2,`roots`,tu,mu),Fl(su,mu),mu.configure=da(mu);var hu=mu,gu=class extends _a{constructor(e,t){super(e,t),this.manager=e;let{cursor:n=`grabbing`}=t??{},r=e.registry.plugins.get(hu)?.register(`* { cursor: ${n} !important; }`);if(r){let e=this.destroy.bind(this);this.destroy=()=>{r(),e()}}}},_u=`data-dnd-`,vu=`${_u}dropping`,yu=`--dnd-`,bu=`${_u}dragging`,xu=`${_u}placeholder`,Su=[bu,xu,`popover`,`aria-pressed`,`aria-grabbing`],Cu=[`view-transition-name`],wu=`
  :is(:root,:host) [${bu}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${yu}top, 0px) !important;
    left: var(${yu}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${yu}width, auto);
    max-width: var(${yu}width, auto);
    height: var(${yu}height, auto);
    max-height: var(${yu}height, auto);
    transform: var(${yu}transform, none) !important;
    transition: var(${yu}transition) !important;
  }

  :is(:root,:host) [${xu}] {
    transition: none;
  }

  :is(:root,:host) [${xu}='hidden'] {
    visibility: hidden;
  }

  [${bu}] * {
    pointer-events: none !important;
  }

  [${bu}]:not([${vu}]) {
    translate: var(${yu}translate) !important;
  }

  [${bu}][style*='${yu}scale'] {
    scale: var(${yu}scale) !important;
    transform-origin: var(${yu}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${bu}][popover]) {
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
  [${bu}]::backdrop, [${_u}overlay]:not([${bu}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g,` `).replace(/\s+/g,` `).trim();function Tu(e,t=`hidden`){return z(()=>{let{element:n,manager:r}=e;if(!n||!r)return;let i=Eu(n,r.registry.droppables),a=[],o=As(n),{remove:s}=o;return Du(i,o,a),Ou(o,t),o.remove=()=>{a.forEach(e=>e()),s.call(o)},o})}function Eu(e,t){let n=new Map;for(let r of t)if(r.element&&(e===r.element||e.contains(r.element))){let e=`${_u}${dl(`dom-id`)}`;r.element.setAttribute(e,``),n.set(r,e)}return n}function Du(e,t,n){for(let[r,i]of e){if(!r.element)continue;let e=`[${i}]`,a=t.matches(e)?t:t.querySelector(e);if(r.element.removeAttribute(i),!a)continue;let o=r.element;r.proxy=a,a.removeAttribute(i),Fs.set(o,a),n.push(()=>{Fs.delete(o),r.proxy=void 0})}}function Ou(e,t=`hidden`){e.setAttribute(`inert`,`true`),e.setAttribute(`tab-index`,`-1`),e.setAttribute(`aria-hidden`,`true`),e.setAttribute(xu,t)}function ku(e,t){return e===t||Rs(e)===Rs(t)}function Au(e){let{target:t}=e;`newState`in e&&e.newState===`closed`&&al(t)&&t.hasAttribute(`popover`)&&requestAnimationFrame(()=>vc(t))}function ju(e){return e.tagName===`TR`}function Mu(e,t,n){let r=new MutationObserver(r=>{let i=!1;for(let n of r){if(n.target!==e){i=!0;continue}if(n.type!==`attributes`)continue;let r=n.attributeName;if(r.startsWith(`aria-`)||Su.includes(r))continue;let a=e.getAttribute(r);if(r===`style`){if(rl(e)&&rl(t)){let n=e.style;for(let e of Array.from(t.style))n.getPropertyValue(e)===``&&t.style.removeProperty(e);for(let e of Array.from(n)){if(Cu.includes(e)||e.startsWith(yu))continue;let r=n.getPropertyValue(e);t.style.setProperty(e,r)}}}else a===null?t.removeAttribute(r):t.setAttribute(r,a)}i&&n&&t.replaceChildren(...e.cloneNode(!0).childNodes)});return r.observe(e,{attributes:!0,subtree:!0,childList:!0}),r}function Nu(e,t,n){let r=new MutationObserver(r=>{for(let i of r)if(i.addedNodes.length!==0)for(let r of Array.from(i.addedNodes)){if(r.contains(e)&&e.nextElementSibling!==t){e.insertAdjacentElement(`afterend`,t),vc(n);return}if(r.contains(t)&&t.previousElementSibling!==e){t.insertAdjacentElement(`beforebegin`,e),vc(n);return}}e.isConnected&&t.isConnected&&e.nextElementSibling!==t&&(e.insertAdjacentElement(`afterend`,t),vc(n))});return r.observe(e.ownerDocument.body,{childList:!0,subtree:!0}),r}function Pu(e){return new ResizeObserver(()=>{var t;let n=new tl(e.placeholder,{frameTransform:e.frameTransform,ignoreTransforms:!0}),r=e.transformOrigin??{x:1,y:1},i=(e.width-n.width)*r.x+e.delta.x,a=(e.height-n.height)*r.y+e.delta.y,o=Es();if(e.styles.set({width:n.width-e.widthOffset,height:n.height-e.heightOffset,top:e.top+a+o.y,left:e.left+i+o.x},yu),(t=e.getElementMutationObserver())==null||t.takeRecords(),ju(e.element)&&ju(e.placeholder)){let t=Array.from(e.element.cells),n=Array.from(e.placeholder.cells);e.getSavedCellWidths()||e.setSavedCellWidths(t.map(e=>e.style.width));for(let[e,r]of t.entries()){let t=n[e];r.style.width=`${t.getBoundingClientRect().width}px`}}let s=e.getTranslate()??{x:0,y:0},c=e.left+i+o.x+s.x,l=e.top+a+o.y+s.y,u=n.width-e.widthOffset,d=n.height-e.heightOffset,f=e.frameTransform;e.dragOperation.shape=new ki(c*f.scaleX+f.x,l*f.scaleY+f.y,u*f.scaleX,d*f.scaleY)})}var Fu=250,Iu=`ease`;function Lu(e){var t;let{animation:n}=e;if(typeof n==`function`){let t=n({source:e.source,element:e.element,feedbackElement:e.feedbackElement,placeholder:e.placeholder,translate:e.translate,moved:e.moved});Promise.resolve(t).then(()=>{e.cleanup(),requestAnimationFrame(e.restoreFocus)});return}let{duration:r=Fu,easing:i=Iu}=n??{};vc(e.feedbackElement);let[,a]=ls(e.feedbackElement,e=>`translate`in e)??[];a?.pause();let o=e.placeholder??e.element,s={frameTransform:ku(e.feedbackElement,o)?null:void 0},c=new tl(e.feedbackElement,s),l=Ic(Dc(e.feedbackElement).translate)??e.translate,u=new tl(o,s),d=ki.delta(c,u,e.alignment),f={x:l.x-d.x,y:l.y-d.y},p=Math.round(c.intrinsicHeight)===Math.round(u.intrinsicHeight)?{}:{minHeight:[`${c.intrinsicHeight}px`,`${u.intrinsicHeight}px`],maxHeight:[`${c.intrinsicHeight}px`,`${u.intrinsicHeight}px`]},m=Math.round(c.intrinsicWidth)===Math.round(u.intrinsicWidth)?{}:{minWidth:[`${c.intrinsicWidth}px`,`${u.intrinsicWidth}px`],maxWidth:[`${c.intrinsicWidth}px`,`${u.intrinsicWidth}px`]};e.styles.set({transition:e.transition},yu),e.feedbackElement.setAttribute(vu,``),(t=e.getElementMutationObserver())==null||t.takeRecords(),Jc({element:e.feedbackElement,keyframes:Ol(Dl(Dl({},p),m),{translate:[`${l.x}px ${l.y}px 0`,`${f.x}px ${f.y}px 0`]}),options:{duration:ks(ps(e.feedbackElement))?0:e.moved||e.feedbackElement!==e.element?r:0,easing:i}}).then(()=>{e.feedbackElement.removeAttribute(vu),a?.finish(),e.cleanup(),requestAnimationFrame(e.restoreFocus)})}var Ru,zu,Bu,Vu,Hu,Uu,Wu,Gu=class extends (zu=_a,Ru=[B],zu){constructor(e,t){super(e,t),Bl(this,Hu),Bl(this,Vu,Il(Bu,8,this)),Il(Bu,11,this),this.state={initial:{},current:{}};let n=e.registry.plugins.get(hu),r=n?.register(wu);if(r){let e=this.destroy.bind(this);this.destroy=()=>{r(),e()}}this.registerEffect(Hl(this,Hu,Uu).bind(this,n)),this.registerEffect(Hl(this,Hu,Wu))}};Bu=jl(zu),Vu=new WeakMap,Hu=new WeakSet,Uu=function(e){let{overlay:t}=this;if(!t||!e)return;let n=Os(t);if(n)return e.addRoot(n)},Wu=function(){let{state:e,manager:t,options:n}=this,{dragOperation:r}=t,{position:i,source:a,status:o}=r;if(o.idle){e.current={},e.initial={};return}if(!a)return;let{element:s}=a,c=a.pluginConfig(Gu),l=c?.feedback??n?.feedback??`default`,u=typeof l==`function`?l(a,t):l;if(!s||u===`none`||!o.initialized||o.initializing)return;let{initial:d}=e,f=this.overlay??s,p=Nc(f),m=Nc(s),h=!ku(s,f),g=new tl(s,{frameTransform:h?m:null,ignoreTransforms:!h}),_={x:m.scaleX/p.scaleX,y:m.scaleY/p.scaleY},{width:v,height:y,top:b,left:x}=g;h&&(v/=_.x,y/=_.y);let S=new il(f),C=Dc(s),{transition:w,translate:T,boxSizing:ee,paddingBlockStart:E,paddingBlockEnd:D,paddingInlineStart:te,paddingInlineEnd:ne,borderInlineStartWidth:re,borderInlineEndWidth:ie,borderBlockStartWidth:ae,borderBlockEndWidth:O}=C,oe=w.split(`,`).filter(e=>!/^\s*(transform|translate|scale)\b/.test(e)).join(`,`),se=Lc(C),ce=C.transform,le=u===`clone`,ue=ee===`content-box`,k=ue?parseInt(te)+parseInt(ne)+parseInt(re)+parseInt(ie):0,de=ue?parseInt(E)+parseInt(D)+parseInt(ae)+parseInt(O):0,A=u!==`move`&&!this.overlay?Tu(a,le?`clone`:`hidden`):null,fe=z(()=>ol(t.dragOperation.activatorEvent));if(!d.translate){if(this.overlay&&se)d.translate={x:se.x,y:se.y};else if(T!==`none`){let e=Ic(T);e&&(d.translate=e)}}if(!d.transformOrigin){let e=z(()=>i.current),t=x+(se?.x??0),n=b+(se?.y??0);d.transformOrigin={x:(e.x-t*p.scaleX-p.x)/(v*p.scaleX),y:(e.y-n*p.scaleY-p.y)/(y*p.scaleY)}}let{transformOrigin:pe}=d,me=b*p.scaleY+p.y,he=x*p.scaleX+p.x;if(!d.coordinates&&(d.coordinates={x:he,y:me},_.x!==1||_.y!==1)){let{scaleX:e,scaleY:t}=m,{x:n,y:r}=pe;d.coordinates.x+=(v*e-v)*n,d.coordinates.y+=(y*t-y)*r}d.dimensions||={width:v,height:y},d.frameTransform||=p;let ge={x:d.coordinates.x-he,y:d.coordinates.y-me},_e={width:(d.dimensions.width*d.frameTransform.scaleX-v*p.scaleX)*pe.x,height:(d.dimensions.height*d.frameTransform.scaleY-y*p.scaleY)*pe.y},ve={x:ge.x/p.scaleX+_e.width,y:ge.y/p.scaleY+_e.height},j={left:x+ve.x,top:b+ve.y};f.setAttribute(bu,`true`);let M=z(()=>r.transform),ye=d.translate??{x:0,y:0},be=M.x*p.scaleX+ye.x,xe=M.y*p.scaleY+ye.y,Se=Es();S.set({width:v-k,height:y-de,top:j.top+Se.y,left:j.left+Se.x,translate:`${be}px ${xe}px 0`,transform:this.overlay?`none`:ce,transition:oe?`${oe}, translate 0ms linear`:`translate 0ms linear`,scale:h?`${_.x} ${_.y}`:``,"transform-origin":`${pe.x*100}% ${pe.y*100}%`},yu),A&&(s.insertAdjacentElement(`afterend`,A),n?.rootElement&&(typeof n.rootElement==`function`?n.rootElement(a):n.rootElement).appendChild(s)),_c(f)&&(f.hasAttribute(`popover`)||f.setAttribute(`popover`,`manual`),vc(f),f.addEventListener(`beforetoggle`,Au));let N,Ce,we,Te=Pu({placeholder:A,element:s,feedbackElement:f,frameTransform:p,transformOrigin:pe,width:v,height:y,top:b,left:x,widthOffset:k,heightOffset:de,delta:ve,styles:S,dragOperation:r,getTranslate:()=>e.current.translate,getElementMutationObserver:()=>N,getSavedCellWidths:()=>we,setSavedCellWidths:e=>{we=e}}),P=new tl(f);z(()=>r.shape=P);let Ee=ps(f),De=e=>{this.manager.actions.stop({event:e})},Oe=ks(Ee);fe&&Ee.addEventListener(`resize`,De),z(()=>a.status)===`idle`&&requestAnimationFrame(()=>a.status=`dragging`),A&&(Te.observe(A),N=Mu(s,A,le),Ce=Nu(s,A,f));let ke=t.dragOperation.source?.id,Ae=()=>{if(!fe||ke==null)return;let e=t.registry.draggables.get(ke),n=e?.handle??e?.element;hs(n)&&n.focus()},je=()=>{if(N?.disconnect(),Ce?.disconnect(),Te.disconnect(),Ee.removeEventListener(`resize`,De),_c(f)&&(f.removeEventListener(`beforetoggle`,Au),f.removeAttribute(`popover`)),f.removeAttribute(bu),S.reset(),we&&ju(s)){let e=Array.from(s.cells);for(let[t,n]of e.entries())n.style.width=we[t]??``}a.status=`idle`;let t=e.current.translate!=null,n=r.status.dragging;A&&(!n&&t||A.parentElement!==f.parentElement)&&f.isConnected&&A.replaceWith(f),A?.remove()},Me=n?.dropAnimation,Ne=this,F=Mr(()=>{let{transform:t,status:i}=r;if((t.x||t.y||e.current.translate)&&i.dragging){let i=d.translate??{x:0,y:0},a={x:t.x/p.scaleX+i.x,y:t.y/p.scaleY+i.y},o=e.current.translate,s=z(()=>r.modifiers),c=z(()=>r.shape?.current),l=n?.keyboardTransition,u=fe&&!Oe&&l!==null?`${l?.duration??250}ms ${l?.easing??`cubic-bezier(0.25, 1, 0.5, 1)`}`:`0ms linear`;if(S.set({transition:oe?`${oe}, translate ${u}`:`translate ${u}`,translate:`${a.x}px ${a.y}px 0`},yu),N?.takeRecords(),c&&c!==P&&o&&!s.length){let e=Oi.delta(a,o);r.shape=ki.from(c.boundingRectangle).translate(e.x*p.scaleX,e.y*p.scaleY)}else r.shape=new tl(f);e.current.translate=a}},function(){if(r.status.dropped){this.dispose(),a.status=`dropping`;let n=c?.dropAnimation===void 0?Ne.dropAnimation===void 0?Me:Ne.dropAnimation:c.dropAnimation,r=e.current.translate,i=r!=null;if(!r&&s!==f&&(r={x:0,y:0}),!r||n===null){je();return}t.renderer.rendering.then(()=>{Lu({source:a,element:s,feedbackElement:f,placeholder:A,translate:r,moved:i,transition:w,alignment:a.alignment,styles:S,animation:n??void 0,getElementMutationObserver:()=>N,cleanup:je,restoreFocus:Ae})})}});return()=>{je(),F()}},Ll(Bu,4,`overlay`,Ru,Gu,Vu),Fl(Bu,Gu),Gu.configure=da(Gu);var Ku=Gu,qu=!0,Ju=!1,Yu,Xu,Zu=[B],Qu=zc.Forward,J,Y,X;Xu=(Yu=[B],zc.Reverse);var Z=class{constructor(){Bl(this,Y,Il(J,8,this,qu)),Il(J,11,this),Bl(this,X,Il(J,12,this,qu)),Il(J,15,this)}isLocked(e){return e===zc.Idle?!1:e==null?this[zc.Forward]===qu&&this[zc.Reverse]===qu:this[e]===qu}unlock(e){e!==zc.Idle&&(this[e]=Ju)}};J=jl(null),Y=new WeakMap,X=new WeakMap,Ll(J,4,Qu,Zu,Z,Y),Ll(J,4,Xu,Yu,Z,X),Fl(J,Z);var $u=[zc.Forward,zc.Reverse],ed=class{constructor(){this.x=new Z,this.y=new Z}isLocked(){return this.x.isLocked()&&this.y.isLocked()}},td=class extends _a{constructor(e){super(e);let t=Wn(new ed),n=null;this.signal=t,er(()=>{let{status:r}=e.dragOperation;if(!r.initialized){n=null,t.value=new ed;return}let{delta:i}=e.dragOperation.position;if(n){let e={x:nd(i.x,n.x),y:nd(i.y,n.y)},r=t.peek();Mn(()=>{for(let t of zi)for(let n of $u)e[t]===n&&r[t].unlock(n);t.value=r})}n=i})}get current(){return this.signal.peek()}};function nd(e,t){return Math.sign(e-t)}var rd,id,ad,od,sd,cd,ld=class extends (id=va,rd=[B],id){constructor(e){super(e),Bl(this,od,Il(ad,8,this,!1)),Il(ad,11,this),Bl(this,sd),Bl(this,cd,()=>{if(!q(this,sd))return;let{element:e,by:t}=q(this,sd);t.y&&(e.scrollTop+=t.y),t.x&&(e.scrollLeft+=t.x)}),this.scroll=(e,t)=>{if(this.disabled)return!1;let n=this.getScrollableElements();if(!n)return Vl(this,sd,void 0),!1;let{position:r}=this.manager.dragOperation,i=r?.current;if(i){let{by:r}=e??{},a=r?{x:ud(r.x),y:ud(r.y)}:void 0,o=a?void 0:this.scrollIntentTracker.current;if(o?.isLocked())return!1;for(let e of n){let n=xc(e,r);if(n.x||n.y){let{speed:n,direction:s}=Hc(e,i,a,t?.acceleration,t?.threshold);if(o)for(let e of zi)o[e].isLocked(s[e])&&(n[e]=0,s[e]=0);if(s.x||s.y){let{x:t,y:i}=r??s,a=t*n.x,o=i*n.y;if(a||o){let t=q(this,sd)?.by;if(this.autoScrolling&&t&&(t.x&&!a||t.y&&!o))continue;return Vl(this,sd,{element:e,by:{x:a,y:o}}),Cc.schedule(q(this,cd)),!0}}}}}return Vl(this,sd,void 0),!1};let t=null,n=null,r=Or(()=>{let{position:n,source:r}=e.dragOperation;if(!n)return null;let i=Ns(Os(r?.element),n.current);return i&&(t=i),i??t}),i=Or(()=>{let t=r.value,{documentElement:i}=_s(t);if(!t||t===i){let{target:t}=e.dragOperation,r=t?.element;if(r){let e=Mc(r,{excludeElement:!1});return n=e,e}}if(t){let e=Mc(t,{excludeElement:!1});return this.autoScrolling&&n&&e.size<n?.size?n:(n=e,e)}return n=null,null},kr);this.getScrollableElements=()=>i.value,this.scrollIntentTracker=new td(e),this.destroy=e.monitor.addEventListener(`dragmove`,t=>{!this.disabled&&!t.defaultPrevented&&ol(e.dragOperation.activatorEvent)&&t.by&&this.scroll({by:t.by})&&t.preventDefault()})}};ad=jl(id),od=new WeakMap,sd=new WeakMap,cd=new WeakMap,Ll(ad,4,`autoScrolling`,rd,ld,od),Fl(ad,ld);function ud(e){return e>0?zc.Forward:e<0?zc.Reverse:zc.Idle}var dd=new class{constructor(e){this.scheduler=e,this.pending=!1,this.tasks=new Set,this.resolvers=new Set,this.flush=()=>{let{tasks:e,resolvers:t}=this;this.pending=!1,this.tasks=new Set,this.resolvers=new Set;for(let t of e)t();for(let e of t)e()}}schedule(e){return this.tasks.add(e),this.pending||(this.pending=!0,this.scheduler(this.flush)),new Promise(e=>this.resolvers.add(e))}}(e=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()}),fd=10,pd=class extends _a{constructor(e,t){super(e,t);let n=e.registry.plugins.get(ld);if(!n)throw Error(`AutoScroller plugin depends on Scroller plugin`);this.destroy=er(()=>{if(this.disabled)return;let{position:t,status:r}=e.dragOperation;if(r.dragging){let e={acceleration:this.options?.acceleration,threshold:typeof this.options?.threshold==`number`?{x:this.options.threshold,y:this.options.threshold}:this.options?.threshold};if(n.scroll(void 0,e)){n.autoScrolling=!0;let t=setInterval(()=>dd.schedule(()=>n.scroll(void 0,e)),fd);return()=>{clearInterval(t)}}n.autoScrolling=!1}})}};pd.configure=da(pd);var md=pd,hd={capture:!0,passive:!0},gd,_d=class extends va{constructor(e){super(e),Bl(this,gd),this.handleScroll=()=>{q(this,gd)??Vl(this,gd,setTimeout(()=>{this.manager.collisionObserver.forceUpdate(!1),Vl(this,gd,void 0)},50))};let{dragOperation:t}=this.manager;this.destroy=er(()=>{if(t.status.dragging){let e=t.source?.element?.ownerDocument??document;return e.addEventListener(`scroll`,this.handleScroll,hd),()=>{e.removeEventListener(`scroll`,this.handleScroll,hd)}}})}};gd=new WeakMap;var vd=`* { user-select: none !important; -webkit-user-select: none !important; }`,yd=class extends _a{constructor(e){super(e),this.manager=e;let t=e.registry.plugins.get(hu)?.register(vd);if(this.destroy=er(()=>{let{dragOperation:e}=this.manager;if(e.status.initialized)return bd(),document.addEventListener(`selectionchange`,bd,{capture:!0}),()=>{document.removeEventListener(`selectionchange`,bd,{capture:!0})}}),t){let e=this.destroy.bind(this);this.destroy=()=>{t(),e()}}}};function bd(){var e;(e=document.getSelection())==null||e.removeAllRanges()}var xd=Object.freeze({offset:10,keyboardCodes:{start:[`Space`,`Enter`],cancel:[`Escape`],end:[`Space`,`Enter`,`Tab`],up:[`ArrowUp`],down:[`ArrowDown`],left:[`ArrowLeft`],right:[`ArrowRight`]},preventActivation(e,t){let n=t.handle??t.element;return e.target!==n}}),Sd,Cd=class extends ko{constructor(e,t){super(e),this.manager=e,this.options=t,Bl(this,Sd,[]),this.listeners=new Ls,this.handleSourceKeyDown=(e,t,n)=>{if(this.disabled||e.defaultPrevented||!al(e.target)||t.disabled)return;let{keyboardCodes:r=xd.keyboardCodes,preventActivation:i=xd.preventActivation}=n??{};r.start.includes(e.code)&&this.manager.dragOperation.status.idle&&(i?.(e,t)||this.handleStart(e,t,n))}}bind(e,t=this.options){return er(()=>{let n=e.handle??e.element,r=n=>{ol(n)&&this.handleSourceKeyDown(n,e,t)};if(n)return n.addEventListener(`keydown`,r),()=>{n.removeEventListener(`keydown`,r)}})}handleStart(e,t,n){let{element:r}=t;if(!r)throw Error(`Source draggable does not have an associated element`);e.preventDefault(),e.stopImmediatePropagation(),Uc(r);let{center:i}=new tl(r);if(this.manager.actions.start({event:e,coordinates:{x:i.x,y:i.y},source:t}).signal.aborted)return this.cleanup();this.sideEffects();let a=_s(r),o=[this.listeners.bind(a,[{type:`keydown`,listener:e=>this.handleKeyDown(e,t,n),options:{capture:!0}}])];q(this,Sd).push(...o)}handleKeyDown(e,t,n){let{keyboardCodes:r=xd.keyboardCodes}=n??{};if(Td(e,[...r.end,...r.cancel])){e.preventDefault();let t=Td(e,r.cancel);this.handleEnd(e,t);return}Td(e,r.up)?this.handleMove(`up`,e):Td(e,r.down)&&this.handleMove(`down`,e),Td(e,r.left)?this.handleMove(`left`,e):Td(e,r.right)&&this.handleMove(`right`,e)}handleEnd(e,t){this.manager.actions.stop({event:e,canceled:t}),this.cleanup()}handleMove(e,t){let{shape:n}=this.manager.dragOperation,r=t.shiftKey?5:1,i={x:0,y:0},a=this.options?.offset??xd.offset;if(typeof a==`number`&&(a={x:a,y:a}),n){switch(e){case`up`:i={x:0,y:-a.y*r};break;case`down`:i={x:0,y:a.y*r};break;case`left`:i={x:-a.x*r,y:0};break;case`right`:i={x:a.x*r,y:0}}(i.x||i.y)&&(t.preventDefault(),this.manager.actions.move({event:t,by:i}))}}sideEffects(){let e=this.manager.registry.plugins.get(md);e?.disabled===!1&&(e.disable(),q(this,Sd).push(()=>{e.enable()}))}cleanup(){q(this,Sd).forEach(e=>e()),Vl(this,Sd,[])}destroy(){this.cleanup(),this.listeners.clear()}};Sd=new WeakMap,Cd.configure=da(Cd),Cd.defaults=xd;var wd=Cd;function Td(e,t){return t.includes(e.code)}var Ed,Dd=class extends Mo{constructor(){super(...arguments),Bl(this,Ed)}onEvent(e){switch(e.type){case`pointerdown`:Vl(this,Ed,Ss(e));break;case`pointermove`:if(!q(this,Ed))return;let{x:t,y:n}=Ss(e),r={x:t-q(this,Ed).x,y:n-q(this,Ed).y},{tolerance:i}=this.options;if(i&&Li(r,i)){this.abort();return}Li(r,this.options.value)&&this.activate(e);break;case`pointerup`:this.abort()}}abort(){Vl(this,Ed,void 0)}};Ed=new WeakMap;var Od,kd,Ad=class extends Mo{constructor(){super(...arguments),Bl(this,Od),Bl(this,kd)}onEvent(e){switch(e.type){case`pointerdown`:Vl(this,kd,Ss(e)),Vl(this,Od,setTimeout(()=>this.activate(e),this.options.value));break;case`pointermove`:if(!q(this,kd))return;let{x:t,y:n}=Ss(e);Li({x:t-q(this,kd).x,y:n-q(this,kd).y},this.options.tolerance)&&this.abort();break;case`pointerup`:this.abort()}}abort(){q(this,Od)&&(clearTimeout(q(this,Od)),Vl(this,kd,void 0),Vl(this,Od,void 0))}};Od=new WeakMap,kd=new WeakMap;var jd=class{};jd.Delay=Ad,jd.Distance=Dd;var Md=Object.freeze({activationConstraints(e,t){let{pointerType:n,target:r}=e;if(n!==`mouse`||!al(r)||t.handle!==r&&!t.handle?.contains(r))return n===`touch`?[new jd.Delay({value:250,tolerance:5})]:cl(r)&&!e.defaultPrevented?[new jd.Delay({value:200,tolerance:0})]:[new jd.Delay({value:200,tolerance:10}),new jd.Distance({value:5})]},preventActivation(e,t){let{target:n}=e;return n===t.element||n===t.handle||!al(n)||t.handle?.contains(n)?!1:Is(n)}}),Nd,Pd=class extends ko{constructor(e,t){super(e),this.manager=e,this.options=t,Bl(this,Nd,new Set),this.listeners=new Ls,this.latest={event:void 0,coordinates:void 0},this.handleMove=()=>{let{event:e,coordinates:t}=this.latest;e&&t&&this.manager.actions.move({event:e,to:t})},this.handleCancel=this.handleCancel.bind(this),this.handlePointerUp=this.handlePointerUp.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this)}activationConstraints(e,t,n=this.options){let{activationConstraints:r=Md.activationConstraints}=n??{};return typeof r==`function`?r(e,t):r}bind(e,t=this.options){return er(()=>{let n=new AbortController,{signal:r}=n,i=n=>{sl(n)&&this.handlePointerDown(n,e,t)},a=[e.handle??e.element];t?.activatorElements&&(a=Array.isArray(t.activatorElements)?t.activatorElements:t.activatorElements(e));for(let e of a)e&&(Bd(e.ownerDocument.defaultView),e.addEventListener(`pointerdown`,i,{signal:r}));return()=>n.abort()})}handlePointerDown(e,t,n){if(this.disabled||!e.isPrimary||e.button!==0||!al(e.target)||t.disabled||Id(e)||!this.manager.dragOperation.status.idle)return;let{preventActivation:r=Md.preventActivation}=n??{};if(r?.(e,t))return;let{target:i}=e,a=hs(i)&&i.draggable&&i.getAttribute(`draggable`)===`true`,o=Nc(t.element),{x:s,y:c}=Ss(e);this.initialCoordinates={x:s*o.scaleX+o.x,y:c*o.scaleY+o.y};let l=this.activationConstraints(e,t,n);e.sensor=this;let u=new Ao(l,e=>this.handleStart(t,e));u.signal.onabort=()=>this.handleCancel(e),u.onEvent(e),this.controller=u;let d=ws(),f=this.listeners.bind(d,[{type:`pointermove`,listener:e=>this.handlePointerMove(e,t)},{type:`pointerup`,listener:this.handlePointerUp,options:{capture:!0}},{type:`pointercancel`,listener:this.handleCancel},{type:`dragstart`,listener:a?this.handleCancel:Ld,options:{capture:!0}}]);q(this,Nd).add(()=>{f(),this.initialCoordinates=void 0})}handlePointerMove(e,t){var n;if(this.controller?.activated===!1){(n=this.controller)==null||n.onEvent(e);return}if(this.manager.dragOperation.status.dragging){let n=Ss(e),r=Nc(t.element);n.x=n.x*r.scaleX+r.x,n.y=n.y*r.scaleY+r.y,e.preventDefault(),e.stopPropagation(),this.latest.event=e,this.latest.coordinates=n,Cc.schedule(this.handleMove)}}handlePointerUp(e){let{status:t}=this.manager.dragOperation;if(!t.idle){e.preventDefault(),e.stopPropagation();let n=!t.initialized;this.manager.actions.stop({event:e,canceled:n})}this.cleanup()}handleKeyDown(e){e.key===`Escape`&&(e.preventDefault(),this.handleCancel(e))}handleStart(e,t){let{manager:n,initialCoordinates:r}=this;if(!r||!n.dragOperation.status.idle||t.defaultPrevented)return;if(n.actions.start({coordinates:r,event:t,source:e}).signal.aborted)return this.cleanup();t.preventDefault();let i=_s(t.target).body;try{i.setPointerCapture(t.pointerId)}catch{this.handleCancel(t);return}let a=al(t.target)?[t.target,i]:i,o=this.listeners.bind(a,[{type:`touchmove`,listener:Ld,options:{passive:!1}},{type:`click`,listener:Ld},{type:`contextmenu`,listener:Ld},{type:`keydown`,listener:this.handleKeyDown}]);q(this,Nd).add(o)}handleCancel(e){let{dragOperation:t}=this.manager;t.status.initialized&&this.manager.actions.stop({event:e,canceled:!0}),this.cleanup()}cleanup(){let{controller:e}=this;this.controller=void 0,e&&!e.signal.aborted&&e.abort(),this.latest={event:void 0,coordinates:void 0},q(this,Nd).forEach(e=>e()),q(this,Nd).clear()}destroy(){this.cleanup(),this.listeners.clear()}};Nd=new WeakMap,Pd.configure=da(Pd),Pd.defaults=Md;var Fd=Pd;function Id(e){return`sensor`in e}function Ld(e){e.preventDefault()}function Rd(){}var zd=new WeakSet;function Bd(e){e&&!zd.has(e)&&(e.addEventListener(`touchmove`,Rd,{capture:!1,passive:!1}),zd.add(e))}var Vd={modifiers:[],plugins:[Ql,md,gu,Ku,yd],sensors:[Fd,wd]},Hd=class extends ns{constructor(e={}){let t=ts(e.plugins,Vd.plugins),n=ts(e.sensors,Vd.sensors),r=ts(e.modifiers,Vd.modifiers);super(Ol(Dl({},e),{plugins:[_d,ld,hu,...t],sensors:n,modifiers:r}))}},Ud,Wd,Gd,Kd,qd,Jd,Yd=class extends (Gd=Xa,Wd=[B],Ud=[B],Gd){constructor(e,t){var n=e,{element:r,effects:i=()=>[],handle:a}=n,o=Al(n,[`element`,`effects`,`handle`]);super(Dl({effects:()=>[...i(),()=>{let{manager:e}=this;if(!e)return;let t=(this.sensors?.map(fa)??[...e.sensors]).map(t=>{let n=t instanceof ko?t:e.registry.register(t.plugin),r=t instanceof ko?void 0:t.options;return n.bind(this,r)});return function(){t.forEach(e=>e())}}]},o),t),Bl(this,qd,Il(Kd,8,this)),Il(Kd,11,this),Bl(this,Jd,Il(Kd,12,this)),Il(Kd,15,this),this.element=r,this.handle=a}};Kd=jl(Gd),qd=new WeakMap,Jd=new WeakMap,Ll(Kd,4,`handle`,Wd,Yd,qd),Ll(Kd,4,`element`,Ud,Yd,Jd),Fl(Kd,Yd);var Xd,Zd,Qd,$d,ef,tf,nf,rf,af,of,sf=class extends (Qd=uo,Zd=[B],Xd=[B],Qd){constructor(e,t){var n=e,{element:r,effects:i=()=>[]}=n,a=Al(n,[`element`,`effects`]);let{collisionDetector:o=ml}=a,s=e=>{let{manager:t,element:n}=this;if(!n||e===null){this.shape=void 0;return}if(!t)return;let r=new tl(n),i=z(()=>this.shape);return r&&i?.equals(r)?i:(this.shape=r,r)},c=Wn(!1);super(Ol(Dl({},a),{collisionDetector:o,effects:()=>[...i(),()=>{let{element:e,manager:t}=this;if(!t)return;let{dragOperation:n}=t,{source:r}=n;c.value=!!(r&&n.status.initialized&&e&&!this.disabled&&this.accepts(r))},()=>{let{element:e}=this;if(c.value&&e){let t=new gc(e,s);return()=>{t.disconnect(),this.shape=void 0}}},()=>{if(this.manager?.dragOperation.status.initialized)return()=>{this.shape=void 0}}]}),t),Bl(this,af),Bl(this,ef,Il($d,8,this)),Il($d,11,this),Bl(this,of,Il($d,12,this)),Il($d,15,this),this.element=r,this.refreshShape=()=>s()}set element(e){Vl(this,af,e,rf)}get element(){return this.proxy??q(this,af,nf)}};$d=jl(Qd),ef=new WeakMap,af=new WeakSet,of=new WeakMap,tf=Ll($d,20,`#element`,Zd,af,ef),nf=tf.get,rf=tf.set,Ll($d,4,`proxy`,Xd,sf,of),Fl($d,sf);function cf(e){return typeof e==`object`&&!!e&&`current`in e}function lf(e){if(e!=null)return cf(e)?e.current??void 0:e}var uf=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0?I.useLayoutEffect:I.useEffect;function df(){let e=(0,I.useState)(0)[1];return(0,I.useCallback)(()=>{e(e=>e+1)},[e])}function ff(e,t){let n=(0,I.useRef)(new Map),r=df();return uf(()=>{if(!e){n.current.clear();return}return er(()=>{let i=!1,a=!1;for(let r of n.current){let[o]=r,s=z(()=>r[1]),c=e[o];s!==c&&(i=!0,n.current.set(o,c),a=t?.(o,s,c)??!1)}i&&(a?queueMicrotask(()=>(0,wt.flushSync)(r)):r())})},[e]),(0,I.useMemo)(()=>e&&new Proxy(e,{get(e,t){let r=e[t];return n.current.set(t,r),r}}),[e])}function pf(e,t){e()}function mf(e){let t=(0,I.useRef)(e);return uf(()=>{t.current=e},[e]),t}function hf(e,t,n=I.useEffect,r=Object.is){let i=(0,I.useRef)(e);n(()=>{let n=i.current;r(e,n)||(i.current=e,t(e,n))},[t,e])}function gf(e,t){let n=(0,I.useRef)(lf(e));uf(()=>{let r=lf(e);r!==n.current&&(n.current=r,t(r))})}var _f=Object.defineProperty,vf=Object.defineProperties,yf=Object.getOwnPropertyDescriptors,bf=Object.getOwnPropertySymbols,xf=Object.prototype.hasOwnProperty,Sf=Object.prototype.propertyIsEnumerable,Cf=(e,t,n)=>t in e?_f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,wf=(e,t)=>{for(var n in t||={})xf.call(t,n)&&Cf(e,n,t[n]);if(bf)for(var n of bf(t))Sf.call(t,n)&&Cf(e,n,t[n]);return e},Tf=(e,t)=>vf(e,yf(t)),Ef=(e,t)=>{var n={};for(var r in e)xf.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&bf)for(var r of bf(e))t.indexOf(r)<0&&Sf.call(e,r)&&(n[r]=e[r]);return n},Df=new Hd,Of=(0,I.createContext)(Df),kf=(0,I.memo)((0,I.forwardRef)(({children:e},t)=>{let[n,r]=(0,I.useState)(0),i=(0,I.useRef)(null),a=(0,I.useRef)(null),o=(0,I.useMemo)(()=>({renderer:{get rendering(){return i.current??Promise.resolve()}},trackRendering(e){i.current||=new Promise(e=>{a.current=e}),(0,I.startTransition)(()=>{e(),r(e=>e+1)})}}),[]);return uf(()=>{var e;(e=a.current)==null||e.call(a),i.current=null},[e,n]),(0,I.useImperativeHandle)(t,()=>o),null})),Af=[void 0,kr];function jf(e){var t=e,{children:n,onCollision:r,onBeforeDragStart:i,onDragStart:a,onDragMove:o,onDragOver:s,onDragEnd:c}=t,l=Ef(t,[`children`,`onCollision`,`onBeforeDragStart`,`onDragStart`,`onDragMove`,`onDragOver`,`onDragEnd`]);let u=(0,I.useRef)(null),{plugins:d,modifiers:f,sensors:p}=l,m=ts(d,Vd.plugins),h=ts(p,Vd.sensors),g=ts(f,Vd.modifiers),_=mf(i),v=mf(a),y=mf(s),b=mf(o),x=mf(c),S=mf(r),C=Mf(()=>l.manager??new Hd(l));return(0,I.useEffect)(()=>{if(!u.current)throw Error(`Renderer not found`);let{renderer:e,trackRendering:t}=u.current,{monitor:n}=C;C.renderer=e;let r=[n.addEventListener(`beforedragstart`,e=>{let n=_.current;n&&t(()=>n(e,C))}),n.addEventListener(`dragstart`,e=>v.current?.call(v,e,C)),n.addEventListener(`dragover`,e=>{let n=y.current;n&&t(()=>n(e,C))}),n.addEventListener(`dragmove`,e=>{let n=b.current;n&&t(()=>n(e,C))}),n.addEventListener(`dragend`,e=>{let n=x.current;n&&t(()=>n(e,C))}),n.addEventListener(`collision`,e=>S.current?.call(S,e,C))];return()=>r.forEach(e=>e())},[C]),hf(m,()=>C&&(C.plugins=m),...Af),hf(h,()=>C&&(C.sensors=h),...Af),hf(g,()=>C&&(C.modifiers=g),...Af),(0,L.jsxs)(Of.Provider,{value:C,children:[(0,L.jsx)(kf,{ref:u,children:n}),n]})}function Mf(e){let t=(0,I.useRef)(null);return t.current||=e(),(0,I.useInsertionEffect)(()=>()=>t.current?.destroy(),[]),t.current}function Nf(){return(0,I.useContext)(Of)}function Pf(e){let t=Nf()??void 0,[n]=(0,I.useState)(()=>e(t));return n.manager!==t&&(n.manager=t),uf(n.register,[t,n]),n}function Ff(e){let{disabled:t,data:n,element:r,handle:i,id:a,modifiers:o,sensors:s,plugins:c}=e,l=Pf(t=>new Yd(Tf(wf({},e),{register:!1,handle:lf(i),element:lf(r)}),t)),u=ff(l,If);return hf(a,()=>l.id=a),gf(i,e=>l.handle=e),gf(r,e=>l.element=e),hf(n,()=>n&&(l.data=n)),hf(t,()=>l.disabled=t===!0),hf(s,()=>l.sensors=s),hf(o,()=>l.modifiers=o,void 0,kr),hf(c,()=>l.plugins=c,void 0,kr),hf(e.alignment,()=>l.alignment=e.alignment),{draggable:u,get isDragging(){return u.isDragging},get isDropping(){return u.isDropping},get isDragSource(){return u.isDragSource},handleRef:(0,I.useCallback)(e=>{l.handle=e??void 0},[l]),ref:(0,I.useCallback)(e=>{(e||!l.element?.isConnected||l.manager?.dragOperation.status.idle)&&(l.element=e??void 0)},[l])}}function If(e,t,n){return!(e!==`isDragSource`||n||!t)}var Lf=Object.create,Rf=Object.defineProperty,zf=Object.getOwnPropertyDescriptor,Bf=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),Vf=e=>{throw TypeError(e)},Q=(e,t,n)=>t in e?Rf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Hf=e=>[,,,Lf(e?.[Bf(`metadata`)]??null)],Uf=[`class`,`method`,`getter`,`setter`,`accessor`,`field`,`value`,`get`,`set`],Wf=e=>e!==void 0&&typeof e!=`function`?Vf(`Function expected`):e,Gf=(e,t,n,r,i)=>({kind:Uf[e],name:t,metadata:r,addInitializer:e=>n._?Vf(`Already initialized`):i.push(Wf(e||null))}),Kf=(e,t)=>Q(t,Bf(`metadata`),e[3]),qf=(e,t,n,r)=>{for(var i=0,a=e[t>>1],o=a&&a.length;i<o;i++)a[i].call(n);return r},Jf=(e,t,n,r,i,a)=>{for(var o,s,c,l,u=t&7,d=!1,f=!1,p=2,m=Uf[u+5],h=e[p]||(e[p]=[]),g=(i=i.prototype,zf(i,n)),_=r.length-1;_>=0;_--)c=Gf(u,n,s={},e[3],h),c.static=d,c.private=f,l=c.access={has:e=>n in e},l.get=e=>e[n],o=(0,r[_])(g[m],c),s._=1,Wf(o)&&(g[m]=o);return g&&Rf(i,n,g),i},Yf=(e,t,n)=>t.has(e)||Vf(`Cannot `+n),Xf=(e,t,n)=>(Yf(e,t,`read from private field`),t.get(e)),Zf=(e,t,n)=>t.has(e)?Vf(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Qf=(e,t,n,r)=>(Yf(e,t,`write to private field`),t.set(e,n),n),$f=class e{constructor(e,t){this.x=e,this.y=t}static delta(t,n){return new e(t.x-n.x,t.y-n.y)}static distance(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}static equals(e,t){return e.x===t.x&&e.y===t.y}static from({x:t,y:n}){return new e(t,n)}},ep,tp,np,rp,ip,ap=class extends (np=$r,tp=[Ar],ep=[Ar],np){constructor(e){let t=$f.from(e);super(t,(e,t)=>$f.equals(e,t)),qf(ip,5,this),Zf(this,rp,0),this.velocity={x:0,y:0}}get delta(){return $f.delta(this.current,this.initial)}get direction(){let{current:e,previous:t}=this;if(!t)return null;let n={x:e.x-t.x,y:e.y-t.y};return!n.x&&!n.y?null:Math.abs(n.x)>Math.abs(n.y)?n.x>0?`right`:`left`:n.y>0?`down`:`up`}get current(){return super.current}set current(e){let{current:t}=this,n=$f.from(e),r={x:n.x-t.x,y:n.y-t.y},i=Date.now(),a=i-Xf(this,rp),o=e=>Math.round(e/a*100);Mn(()=>{Qf(this,rp,i),this.velocity={x:o(r.x),y:o(r.y)},super.current=n})}reset(e=this.defaultValue){super.reset($f.from(e)),this.velocity={x:0,y:0}}};ip=Hf(np),rp=new WeakMap,Jf(ip,2,`delta`,tp,ap),Jf(ip,2,`direction`,ep,ap),Kf(ip,ap);var op=(e=>(e.Horizontal=`x`,e.Vertical=`y`,e))(op||{});Object.values(op);var sp=({dragOperation:e,droppable:t})=>{let n=e.position.current;if(!n)return null;let{id:r}=t;return t.shape&&t.shape.containsPoint(n)?{id:r,value:1/$f.distance(t.shape.center,n),type:_o.PointerIntersection,priority:go.High}:null},cp=({dragOperation:e,droppable:t})=>{let{shape:n}=e;if(!t.shape||!n?.current)return null;let r=n.current.intersectionArea(t.shape);if(r){let{position:i}=e,a=$f.distance(t.shape.center,i.current),o=r/(n.current.area+t.shape.area-r)/a;return{id:t.id,value:o,type:_o.ShapeIntersection,priority:go.Normal}}return null},lp=e=>sp(e)??cp(e);function up(e){let{collisionDetector:t,data:n,disabled:r,element:i,id:a,accept:o,type:s}=e,c=Pf(t=>new sf(Tf(wf({},e),{register:!1,element:lf(i)}),t)),l=ff(c);return hf(a,()=>c.id=a),gf(i,e=>c.element=e),hf(o,()=>c.accept=o,void 0,kr),hf(t,()=>c.collisionDetector=t??lp),hf(n,()=>n&&(c.data=n)),hf(r,()=>c.disabled=r===!0),hf(s,()=>c.type=s),{droppable:l,get isDropTarget(){return l.isDropTarget},ref:(0,I.useCallback)(e=>{(e||!c.element?.isConnected||c.manager?.dragOperation.status.idle)&&(c.element=e??void 0)},[c])}}var dp=Object.create,fp=Object.defineProperty,pp=Object.defineProperties,mp=Object.getOwnPropertyDescriptor,hp=Object.getOwnPropertyDescriptors,gp=Object.getOwnPropertySymbols,_p=Object.prototype.hasOwnProperty,vp=Object.prototype.propertyIsEnumerable,yp=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),bp=e=>{throw TypeError(e)},xp=(e,t,n)=>t in e?fp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Sp=(e,t)=>{for(var n in t||={})_p.call(t,n)&&xp(e,n,t[n]);if(gp)for(var n of gp(t))vp.call(t,n)&&xp(e,n,t[n]);return e},Cp=(e,t)=>pp(e,hp(t)),wp=(e,t)=>{var n={};for(var r in e)_p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&gp)for(var r of gp(e))t.indexOf(r)<0&&vp.call(e,r)&&(n[r]=e[r]);return n},Tp=e=>[,,,dp(null)],Ep=[`class`,`method`,`getter`,`setter`,`accessor`,`field`,`value`,`get`,`set`],Dp=e=>e!==void 0&&typeof e!=`function`?bp(`Function expected`):e,Op=(e,t,n,r,i)=>({kind:Ep[e],name:t,metadata:r,addInitializer:e=>n._?bp(`Already initialized`):i.push(Dp(e||null))}),kp=(e,t)=>xp(t,yp(`metadata`),e[3]),Ap=(e,t,n,r)=>{for(var i=0,a=e[t>>1],o=a&&a.length;i<o;i++)t&1?a[i].call(n):r=a[i].call(n,r);return r},jp=(e,t,n,r,i,a)=>{for(var o,s,c,l,u,d=t&7,f=!1,p=!1,m=e.length+1,h=Ep[d+5],g=e[m-1]=[],_=e[m]||(e[m]=[]),v=(i=i.prototype,mp({get[n](){return Np(this,a)},set[n](e){return Fp(this,a,e)}},n)),y=r.length-1;y>=0;y--)l=Op(d,n,c={},e[3],_),l.static=f,l.private=p,u=l.access={has:e=>n in e},u.get=e=>e[n],u.set=(e,t)=>e[n]=t,s=(0,r[y])({get:v.get,set:v.set},l),c._=1,s===void 0?Dp(s)&&(v[h]=s):typeof s!=`object`||!s?bp(`Object expected`):(Dp(o=s.get)&&(v.get=o),Dp(o=s.set)&&(v.set=o),Dp(o=s.init)&&g.unshift(o));return v&&fp(i,n,v),i},Mp=(e,t,n)=>t.has(e)||bp(`Cannot `+n),Np=(e,t,n)=>(Mp(e,t,`read from private field`),t.get(e)),Pp=(e,t,n)=>t.has(e)?bp(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Fp=(e,t,n,r)=>(Mp(e,t,`write to private field`),t.set(e,n),n);function Ip(e){return e instanceof _m||e instanceof gm}var Lp=10,Rp=class extends _a{constructor(e){super(e);let t=er(()=>{let{dragOperation:t}=e;if(ol(t.activatorEvent)&&Ip(t.source)&&t.status.initialized){let t=e.registry.plugins.get(ld);if(t)return t.disable(),()=>t.enable()}}),n=e.monitor.addEventListener(`dragmove`,(e,t)=>{queueMicrotask(()=>{if(this.disabled||e.defaultPrevented||!e.nativeEvent)return;let{dragOperation:n}=t;if(!ol(e.nativeEvent)||!Ip(n.source)||!n.shape)return;let{actions:r,collisionObserver:i,registry:a}=t,{by:o}=e;if(!o)return;let s=zp(o),{source:c,target:l}=n,{center:u}=n.shape.current,d=[],f=[];Mn(()=>{for(let e of a.droppables){let{id:t}=e;if(!e.accepts(c)||t===l?.id&&Ip(e)||!e.element)continue;let n=e.shape,r=new tl(e.element,{getBoundingClientRect:e=>xs(e,void 0,.2)});r.height&&r.width&&(s==`down`&&u.y+Lp<r.center.y||s==`up`&&u.y-Lp>r.center.y||s==`left`&&u.x-Lp>r.center.x||s==`right`&&u.x+Lp<r.center.x)&&(d.push(e),e.shape=r,f.push(()=>e.shape=n))}}),e.preventDefault(),i.disable();let p=i.computeCollisions(d,hl);Mn(()=>f.forEach(e=>e()));let[m]=p;if(!m)return;let{id:h}=m,{index:g,group:_}=c.sortable;r.setDropTarget(h).then(()=>{let{source:e,target:t,shape:a}=n;if(!e||!Ip(e)||!a)return;let{index:o,group:s,target:c}=e.sortable,l=g!==o||_!==s,u=l?c:t?.element;if(!u)return;Uc(u);let d=new tl(u);if(!d)return;let f=ki.delta(d,ki.from(a.current.boundingRectangle),e.alignment);r.move({by:f}),l?r.setDropTarget(e.id).then(()=>i.enable()):i.enable()})})});this.destroy=()=>{n(),t()}}};function zp(e){let{x:t,y:n}=e;if(t>0)return`right`;if(t<0)return`left`;if(n>0)return`down`;if(n<0)return`up`}var Bp=Object.defineProperty,Vp=Object.defineProperties,Hp=Object.getOwnPropertyDescriptors,Up=Object.getOwnPropertySymbols,Wp=Object.prototype.hasOwnProperty,Gp=Object.prototype.propertyIsEnumerable,Kp=(e,t,n)=>t in e?Bp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,qp=(e,t)=>{for(var n in t||={})Wp.call(t,n)&&Kp(e,n,t[n]);if(Up)for(var n of Up(t))Gp.call(t,n)&&Kp(e,n,t[n]);return e},Jp=(e,t)=>Vp(e,Hp(t));function Yp(e,t,n){if(t===n)return e;let r=e.slice();return r.splice(n,0,r.splice(t,1)[0]),r}function Xp(e){return`initialIndex`in e&&typeof e.initialIndex==`number`&&`index`in e&&typeof e.index==`number`}function Zp(e,t,n){let{source:r,target:i,canceled:a}=t.operation;if(!r||!i||a)return`preventDefault`in t&&t.preventDefault(),e;let o=(e,t)=>e===t||typeof e==`object`&&`id`in e&&e.id===t;if(Array.isArray(e)){let s=e.findIndex(e=>o(e,r.id)),c=e.findIndex(e=>o(e,i.id));if(s===-1||c===-1){if(Xp(r)){let i=r.initialIndex,a=r.index;return i===a||i<0||i>=e.length?(`preventDefault`in t&&t.preventDefault(),e):n(e,i,a)}return e}if(!a&&`index`in r&&typeof r.index==`number`){let t=r.index;if(t!==s)return n(e,s,t)}return n(e,s,c)}let s=Object.entries(e),c=-1,l,u=-1,d;for(let[e,t]of s)if(c===-1&&(c=t.findIndex(e=>o(e,r.id)),c!==-1&&(l=e)),u===-1&&(u=t.findIndex(e=>o(e,i.id)),u!==-1&&(d=e)),c!==-1&&u!==-1)break;if(c===-1&&Xp(r)){let i=r.initialGroup,a=r.initialIndex,o=r.group,s=r.index;if(i==null||o==null||!(i in e)||!(o in e)||i===o&&a===s)return`preventDefault`in t&&t.preventDefault(),e;if(i===o)return Jp(qp({},e),{[i]:n(e[i],a,s)});let c=e[i][a];return Jp(qp({},e),{[i]:[...e[i].slice(0,a),...e[i].slice(a+1)],[o]:[...e[o].slice(0,s),c,...e[o].slice(s)]})}if(!r.manager)return e;let{dragOperation:f}=r.manager,p=f.shape?.current.center??f.position.current;if(d==null&&i.id in e){let t=i.shape&&p.y>i.shape.center.y?e[i.id].length:0;d=i.id,u=t}if(l==null||d==null||l===d&&c===u){if(l!=null&&l===d&&c===u&&Xp(r)){let t=r.group!=null&&r.group!==l,i=r.index!==c;if(t||i){let t=r.group??l;if(t in e){if(l===t)return Jp(qp({},e),{[l]:n(e[l],c,r.index)});let i=e[l][c];return Jp(qp({},e),{[l]:[...e[l].slice(0,c),...e[l].slice(c+1)],[t]:[...e[t].slice(0,r.index),i,...e[t].slice(r.index)]})}}}return`preventDefault`in t&&t.preventDefault(),e}if(l===d)return Jp(qp({},e),{[l]:n(e[l],c,u)});let m=i.shape&&Math.round(p.y)>Math.round(i.shape.center.y)?1:0,h=e[l][c];return Jp(qp({},e),{[l]:[...e[l].slice(0,c),...e[l].slice(c+1)],[d]:[...e[d].slice(0,u+m),h,...e[d].slice(u+m)]})}function Qp(e,t){return Zp(e,t,Yp)}var $p=`__default__`,em=class extends _a{constructor(e){super(e);let t=()=>{let t=new Map;for(let n of e.registry.droppables)if(n instanceof _m){let{sortable:e}=n,{group:r}=e,i=t.get(r);i||(i=new Set,t.set(r,i)),i.add(e)}for(let[e,n]of t)t.set(e,new Set(rm(n)));return t},n=[e.monitor.addEventListener(`dragover`,(e,n)=>{if(this.disabled)return;let{dragOperation:r}=n,{source:i,target:a}=r;if(!Ip(i)||!Ip(a)||i.sortable===a.sortable)return;let o=t(),s=i.sortable.group===a.sortable.group,c=o.get(i.sortable.group),l=s?c:o.get(a.sortable.group);c&&l&&queueMicrotask(()=>{e.defaultPrevented||n.renderer.rendering.then(()=>{let r=t();for(let[e,t]of o.entries()){let n=Array.from(t).entries();for(let[t,i]of n)if(i.index!==t||i.group!==e||!r.get(e)?.has(i))return}let u=i.sortable.element,d=a.sortable.element;if(!d||!u||!s&&a.id===i.sortable.group)return;let f=rm(c),p=s?f:rm(l),m=i.sortable.group??$p,h=a.sortable.group??$p,g={[m]:f,[h]:p},_=Qp(g,e);if(g===_)return;let v=_[h].indexOf(i.sortable),y=_[h].indexOf(a.sortable);n.collisionObserver.disable(),tm(u,v,d,y),Mn(()=>{for(let[e,t]of _[m].entries())t.index=e;if(!s)for(let[e,t]of _[h].entries())t.group=a.sortable.group,t.index=e}),n.actions.setDropTarget(i.id).then(()=>n.collisionObserver.enable())})})}),e.monitor.addEventListener(`dragend`,(e,n)=>{if(!e.canceled)return;let{dragOperation:r}=n,{source:i}=r;Ip(i)&&(i.sortable.initialIndex!==i.sortable.index||i.sortable.initialGroup!==i.sortable.group)&&queueMicrotask(()=>{let e=t(),r=e.get(i.sortable.initialGroup);r&&n.renderer.rendering.then(()=>{for(let[t,n]of e.entries()){let e=Array.from(n).entries();for(let[n,r]of e)if(r.index!==n||r.group!==t)return}let t=rm(r),n=i.sortable.element,a=t[i.sortable.initialIndex],o=a?.element;a&&o&&n&&(tm(n,a.index,o,i.index),Mn(()=>{for(let[t,n]of e.entries()){let e=Array.from(n).values();for(let t of e)t.index=t.initialIndex,t.group=t.initialGroup}}))})})})];this.destroy=()=>{for(let e of n)e()}}};function tm(e,t,n,r){let i=r<t?`afterend`:`beforebegin`;n.insertAdjacentElement(i,e)}function nm(e,t){return e.index-t.index}function rm(e){return Array.from(e).sort(nm)}var im=[Rp,em],am={duration:250,easing:`cubic-bezier(0.25, 1, 0.5, 1)`,idle:!1},om=new ni,sm,cm=[B],lm,um,dm,fm,pm,mm;sm=[B];var hm=class{constructor(e,t){Pp(this,um,Ap(lm,8,this)),Ap(lm,11,this),Pp(this,dm),Pp(this,fm),Pp(this,pm,Ap(lm,12,this)),Ap(lm,15,this),Pp(this,mm),this.register=()=>(Mn(()=>{var e,t;(e=this.manager)==null||e.registry.register(this.droppable),(t=this.manager)==null||t.registry.register(this.draggable)}),()=>this.unregister()),this.unregister=()=>{Mn(()=>{var e,t;(e=this.manager)==null||e.registry.unregister(this.droppable),(t=this.manager)==null||t.registry.unregister(this.draggable)})},this.destroy=()=>{Mn(()=>{this.droppable.destroy(),this.draggable.destroy()})};var n=e,{effects:r=()=>[],group:i,index:a,sensors:o,type:s,transition:c=am,plugins:l}=n,u=wp(n,[`effects`,`group`,`index`,`sensors`,`type`,`transition`,`plugins`]);let d=ts(l,im);this.droppable=new _m(u,t,this),this.draggable=new gm(Cp(Sp({},u),{plugins:d,effects:()=>[()=>{let e=this.manager?.dragOperation.status;e?.initializing&&this.id===this.manager?.dragOperation.source?.id&&om.clear(this.manager),e?.dragging&&om.set(this.manager,this.id,z(()=>({initialIndex:this.index,initialGroup:this.group})))},()=>{let{index:e,group:t,manager:n}=this,r=Np(this,fm),i=Np(this,dm);(e!==r||t!==i)&&(Fp(this,fm,e),Fp(this,dm,t),this.animate())},()=>{let{target:e}=this,{isDragSource:t}=this.draggable;(this.draggable.pluginConfig(Ku)?.feedback??`default`)===`move`&&t&&(this.droppable.disabled=!e)},...r()],type:s,sensors:o}),t,this),Fp(this,mm,u.element),this.manager=t,this.index=a,Fp(this,fm,a),this.group=i,Fp(this,dm,i),this.type=s,this.transition=c}get initialIndex(){return om.get(this.manager,this.id)?.initialIndex??this.index}get initialGroup(){return om.get(this.manager,this.id)?.initialGroup??this.group}animate(){z(()=>{let{manager:e,transition:t}=this,{shape:n}=this.droppable;if(!e)return;let{idle:r}=e.dragOperation.status;n&&t&&(!r||t.idle)&&e.renderer.rendering.then(()=>{let{element:r}=this;if(!r)return;for(let e of r.getAnimations())`transitionProperty`in e&&(e.transitionProperty===`transform`||e.transitionProperty===`translate`||e.transitionProperty===`scale`)&&e.cancel();let i=this.refreshShape();if(!i)return;let a={x:n.boundingRectangle.left-i.boundingRectangle.left,y:n.boundingRectangle.top-i.boundingRectangle.top},{translate:o}=Dc(r),s=Yc(r,o,!1),c=Yc(r,o);if(a.x||a.y){let n=ks(ps(r))?Cp(Sp({},t),{duration:0}):t;Jc({element:r,keyframes:{translate:[`${s.x+a.x}px ${s.y+a.y}px ${s.z}`,`${c.x}px ${c.y}px ${c.z}`]},options:n}).then(()=>{e.dragOperation.status.dragging||(this.droppable.shape=void 0)})}})})}get manager(){return this.draggable.manager}set manager(e){Mn(()=>{this.draggable.manager=e,this.droppable.manager=e})}set element(e){Mn(()=>{let t=Np(this,mm),n=this.droppable.element,r=this.draggable.element;(!n||n===t)&&(this.droppable.element=e),(!r||r===t)&&(this.draggable.element=e),Fp(this,mm,e)})}get element(){let e=Np(this,mm);if(e)return Fs.get(e)??e??this.droppable.element}set target(e){this.droppable.element=e}get target(){return this.droppable.element}set source(e){this.draggable.element=e}get source(){return this.draggable.element}get disabled(){return this.draggable.disabled&&this.droppable.disabled}set plugins(e){this.draggable.plugins=ts(e,im)}set disabled(e){Mn(()=>{this.droppable.disabled=e,this.draggable.disabled=e})}set data(e){Mn(()=>{this.droppable.data=e,this.draggable.data=e})}set handle(e){this.draggable.handle=e}set id(e){this.droppable.id=e,this.draggable.id=e}get id(){return this.droppable.id}set sensors(e){this.draggable.sensors=e}set modifiers(e){this.draggable.modifiers=e}set collisionPriority(e){this.droppable.collisionPriority=e}set collisionDetector(e){this.droppable.collisionDetector=e??ml}set alignment(e){this.draggable.alignment=e}get alignment(){return this.draggable.alignment}set type(e){Mn(()=>{this.droppable.type=e,this.draggable.type=e})}get type(){return this.draggable.type}set accept(e){this.droppable.accept=e}get accept(){return this.droppable.accept}get isDropTarget(){return this.droppable.isDropTarget}get isDragSource(){return this.draggable.isDragSource}get isDragging(){return this.draggable.isDragging}get isDropping(){return this.draggable.isDropping}get status(){return this.draggable.status}refreshShape(){return this.droppable.refreshShape()}accepts(e){return this.droppable.accepts(e)}};lm=Tp(),um=new WeakMap,dm=new WeakMap,fm=new WeakMap,pm=new WeakMap,mm=new WeakMap,jp(lm,4,`index`,cm,hm,um),jp(lm,4,`group`,sm,hm,pm),kp(lm,hm);var gm=class extends Yd{constructor(e,t,n){super(e,t),this.sortable=n}get index(){return this.sortable.index}get initialIndex(){return this.sortable.initialIndex}get group(){return this.sortable.group}get initialGroup(){return this.sortable.initialGroup}},_m=class extends sf{constructor(e,t,n){super(e,t),this.sortable=n}get index(){return this.sortable.index}get group(){return this.sortable.group}},vm=Object.defineProperty,ym=Object.defineProperties,bm=Object.getOwnPropertyDescriptors,xm=Object.getOwnPropertySymbols,Sm=Object.prototype.hasOwnProperty,Cm=Object.prototype.propertyIsEnumerable,wm=(e,t,n)=>t in e?vm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Tm=(e,t)=>{for(var n in t||={})Sm.call(t,n)&&wm(e,n,t[n]);if(xm)for(var n of xm(t))Cm.call(t,n)&&wm(e,n,t[n]);return e},Em=(e,t)=>ym(e,bm(t));function Dm(e){let{accept:t,collisionDetector:n,collisionPriority:r,id:i,data:a,element:o,handle:s,index:c,group:l,disabled:u,modifiers:d,sensors:f,target:p,type:m,plugins:h}=e,g=Tm(Tm({},am),e.transition),_=Pf(t=>new hm(Em(Tm({},e),{transition:g,register:!1,handle:lf(s),element:lf(o),target:lf(p)}),t)),v=ff(_,Om);return hf(i,()=>_.id=i),uf(()=>{Mn(()=>{_.group=l,_.index=c})},[_,l,c]),hf(m,()=>_.type=m),hf(t,()=>_.accept=t,void 0,kr),hf(a,()=>a&&(_.data=a)),hf(c,()=>{_.manager?.dragOperation.status.idle&&g?.idle&&_.refreshShape()},pf),gf(s,e=>_.handle=e),gf(o,e=>_.element=e),gf(p,e=>_.target=e),hf(u,()=>_.disabled=u===!0),hf(f,()=>_.sensors=f),hf(n,()=>_.collisionDetector=n),hf(r,()=>_.collisionPriority=r),hf(h,()=>_.plugins=h,void 0,kr),hf(g,()=>_.transition=g,void 0,kr),hf(d,()=>_.modifiers=d,void 0,kr),hf(e.alignment,()=>_.alignment=e.alignment),{sortable:v,get isDragging(){return v.isDragging},get isDropping(){return v.isDropping},get isDragSource(){return v.isDragSource},get isDropTarget(){return v.isDropTarget},handleRef:(0,I.useCallback)(e=>{_.handle=e??void 0},[_]),ref:(0,I.useCallback)(e=>{(e||!_.element?.isConnected||_.manager?.dragOperation.status.idle)&&(_.element=e??void 0)},[_]),sourceRef:(0,I.useCallback)(e=>{(e||!_.source?.isConnected||_.manager?.dragOperation.status.idle)&&(_.source=e??void 0)},[_]),targetRef:(0,I.useCallback)(e=>{(e||!_.target?.isConnected||_.manager?.dragOperation.status.idle)&&(_.target=e??void 0)},[_])}}function Om(e,t,n){return!(e!==`isDragSource`||n||!t)}function km(e,t,n){var r=this,i=(0,I.useRef)(null),a=(0,I.useRef)(0),o=(0,I.useRef)(null),s=(0,I.useRef)([]),c=(0,I.useRef)(),l=(0,I.useRef)(),u=(0,I.useRef)(e),d=(0,I.useRef)(!0);(0,I.useEffect)(function(){u.current=e},[e]);var f=!t&&t!==0&&typeof window<`u`;if(typeof e!=`function`)throw TypeError(`Expected a function`);t=+t||0;var p=!!(n||={}).leading,m=!(`trailing`in n)||!!n.trailing,h=`maxWait`in n,g=h?Math.max(+n.maxWait||0,t):null;return(0,I.useEffect)(function(){return d.current=!0,function(){d.current=!1}},[]),(0,I.useMemo)(function(){var e=function(e){var t=s.current,n=c.current;return s.current=c.current=null,a.current=e,l.current=u.current.apply(n,t)},n=function(e,t){f&&cancelAnimationFrame(o.current),o.current=f?requestAnimationFrame(e):setTimeout(e,t)},_=function(e){if(!d.current)return!1;var n=e-i.current;return!i.current||n>=t||n<0||h&&e-a.current>=g},v=function(t){return o.current=null,m&&s.current?e(t):(s.current=c.current=null,l.current)},y=function e(){var r=Date.now();if(_(r))return v(r);if(d.current){var o=t-(r-i.current);n(e,h?Math.min(o,g-(r-a.current)):o)}},b=function(){var u=Date.now(),f=_(u);if(s.current=[].slice.call(arguments),c.current=r,i.current=u,f){if(!o.current&&d.current)return a.current=i.current,n(y,t),p?e(i.current):l.current;if(h)return n(y,t),e(i.current)}return o.current||n(y,t),l.current};return b.cancel=function(){o.current&&(f?cancelAnimationFrame(o.current):clearTimeout(o.current)),a.current=0,s.current=i.current=c.current=o.current=null},b.isPending=function(){return!!o.current},b.flush=function(){return o.current?v(Date.now()):l.current},b},[p,h,t,g,m,f])}function Am(e,t){return e===t}function jm(e){return typeof e==`function`?function(){return e}:e}function Mm(e,t,n){var r,i,a=n&&n.equalityFn||Am,o=(r=(0,I.useState)(jm(e)),i=r[1],[r[0],(0,I.useCallback)(function(e){return i(jm(e))},[])]),s=o[0],c=o[1],l=km((0,I.useCallback)(function(e){return c(e)},[c]),t,n),u=(0,I.useRef)(e);return a(u.current,e)||(l(e),u.current=e),[s,l]}function Nm(e){return typeof e==`object`?e.key:e}function Pm(e,t){let n=e.length;return new Proxy(e,{get(e,r,i){if(typeof r==`string`){let i=r.charCodeAt(0);if(i>=48&&i<=57){let i=+r;if(Number.isInteger(i)&&i>=0&&i<n){let n=e[i];if(typeof n!=`object`){let r=t[i*2];n=e[i]={index:i,key:n,start:r,size:t[i*2+1],end:r+t[i*2+1],lane:0}}return n}}if(r===`length`)return n}return Reflect.get(e,r,i)}})}function Fm(e,t,n){let r=n.initialDeps??[],i,a=!0;function o(){let o=e();return o.length!==r.length||o.some((e,t)=>r[t]!==e)?(r=o,i=t(...o),n?.onChange&&!(a&&n.skipInitialOnChange)&&n.onChange(i),a=!1,i):i}return o.updateDeps=e=>{r=e},o}function Im(e,t){if(e===void 0)throw Error(`Unexpected undefined${t?`: ${t}`:``}`);return e}var Lm=(e,t)=>Math.abs(e-t)<1.01,Rm=(e,t,n)=>{let r;return Object.assign(function(...i){e.clearTimeout(r),r=e.setTimeout(()=>t.apply(this,i),n)},{cancel:()=>{e.clearTimeout(r)}})},zm,Bm=()=>{if(zm!==void 0)return zm;if(typeof navigator>`u`)return zm=!1;if(/iP(hone|od|ad)/.test(navigator.userAgent))return zm=!0;let e=navigator.maxTouchPoints;return zm=navigator.platform===`MacIntel`&&e!==void 0&&e>0},Vm=e=>{let{offsetWidth:t,offsetHeight:n}=e;return{width:t,height:n}},Hm=e=>e,Um=e=>{let t=Math.max(e.startIndex-e.overscan,0),n=Math.min(e.endIndex+e.overscan,e.count-1)-t+1,r=Array(n);for(let e=0;e<n;e++)r[e]=t+e;return r},Wm=(e,t)=>{let n=e.scrollElement;if(!n)return;let r=e.targetWindow;if(!r)return;let i=e=>{let{width:n,height:r}=e;t({width:Math.round(n),height:Math.round(r)})};if(i(Vm(n)),!r.ResizeObserver)return()=>{};let a=new r.ResizeObserver(t=>{let r=()=>{let e=t[0];if(e?.borderBoxSize){let t=e.borderBoxSize[0];if(t){i({width:t.inlineSize,height:t.blockSize});return}}i(Vm(n))};e.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(r):r()});return a.observe(n,{box:`border-box`}),()=>{a.unobserve(n)}},Gm={passive:!0},Km=(e,t)=>{let n=e.scrollElement;if(!n)return;let r=()=>{t({width:n.innerWidth,height:n.innerHeight})};return r(),n.addEventListener(`resize`,r,Gm),()=>{n.removeEventListener(`resize`,r)}},qm=typeof window>`u`||`onscrollend`in window,Jm=(e,t,n)=>{let r=e.scrollElement;if(!r)return;let i=e.targetWindow;if(!i)return;let a=e.options.useScrollendEvent&&qm,o=0,s=a?null:Rm(i,()=>t(n(r),!1),e.options.isScrollingResetDelay),c=e=>()=>{o=n(r),s?.(),t(o,e)},l=c(!0),u=c(!1);return r.addEventListener(`scroll`,l,Gm),a&&r.addEventListener(`scrollend`,u,Gm),()=>{r.removeEventListener(`scroll`,l),a&&r.removeEventListener(`scrollend`,u),s?.cancel()}},Ym=(e,t)=>Jm(e,t,t=>{let{horizontal:n,isRtl:r}=e.options;return n?t.scrollLeft*(r&&-1||1):t.scrollTop}),Xm=(e,t)=>Jm(e,t,t=>e.options.horizontal?t.scrollX:t.scrollY),Zm=(e,t,n)=>{if(n.options.useCachedMeasurements){let t=n.indexFromElement(e),r=n.options.getItemKey(t);return n.itemSizeCache.get(r)??n.options.estimateSize(t)}if(t?.borderBoxSize){let e=t.borderBoxSize[0];if(e)return Math.round(e[n.options.horizontal?`inlineSize`:`blockSize`])}if(!t){let t=n.indexFromElement(e),r=n.options.getItemKey(t),i=n.itemSizeCache.get(r);if(i!==void 0)return i}return e[n.options.horizontal?`offsetWidth`:`offsetHeight`]},Qm=(e,{adjustments:t=0,behavior:n},r)=>{var i,a;(a=(i=r.scrollElement)?.scrollTo)==null||a.call(i,{[r.options.horizontal?`left`:`top`]:e+t,behavior:n})},$m=Qm,eh=Qm;function th(e,t,n,r){if(t===0)return!1;let i=r(0),a=new Set,o=0;for(;o<e;){let e=n(o);if(e===i)break;a.add(e),o++}let s=e-o;if(s===0||s>=t)return!1;for(let e=0;e<s;e++)if(r(e)!==n(o+e))return!1;for(let e=s;e<t;e++)if(a.has(r(e)))return!1;return!0}var nh=class{constructor(e){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollState=null,this.measurementsCache=[],this._singleLaneMeasurements=null,this.itemSizeCache=new Map,this.itemSizeCacheVersion=0,this.laneAssignments=new Map,this.pendingMin=null,this.prevLanes=void 0,this.lanesChangedFlag=!1,this.lanesSettling=!1,this.pendingScrollAnchor=null,this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this._iosDeferredAdjustment=0,this._iosTouching=!1,this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._intendedScrollOffset=null,this._clampedAdjustment=null,this.elementsCache=new Map,this.now=()=>{var e;return((e=this.targetWindow?.performance)?.now)?.call(e)??Date.now()},this.observer=(()=>{let e=null,t=()=>e||(!this.targetWindow||!this.targetWindow.ResizeObserver?null:e=new this.targetWindow.ResizeObserver(e=>{e.forEach(e=>{let t=()=>{let t=e.target,n=this.indexFromElement(t);if(!t.isConnected){this.observer.unobserve(t);for(let[e,n]of this.elementsCache)if(n===t){this.elementsCache.delete(e);break}return}this.isIndexInRange(n)&&this.shouldMeasureDuringScroll(n)&&this.resizeItem(n,this.options.measureElement(t,e,this))};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(t):t()})}));return{disconnect:()=>{var n;(n=t())==null||n.disconnect(),e=null},observe:e=>t()?.observe(e,{box:`border-box`}),unobserve:e=>t()?.unobserve(e)}})(),this.range=null,this.setOptions=e=>{let t={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:Hm,rangeExtractor:Um,onChange:()=>{},measureElement:Zm,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:`data-index`,initialMeasurementsCache:[],lanes:1,anchorTo:`start`,followOnAppend:!1,scrollEndThreshold:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,laneAssignmentMode:`estimate`,useCachedMeasurements:!1};for(let n in e){let r=e[n];r!==void 0&&(t[n]=r)}let n=this.options,r=null,i=null,a=!1;if(n!==void 0&&n.enabled&&t.enabled&&t.anchorTo===`end`&&this.scrollElement!==null){let e=n.count,o=t.count,s=this.getMeasurements(),c=this._singleLaneMeasurements?.items??s,l=e=>Nm(c[e]),u=e>0?l(0):null,d=e>0?l(e-1):null;if(o!==e||e>0&&o>0&&(t.getItemKey(0)!==u||t.getItemKey(o-1)!==d)){a=!0;let c=e>0?this.getVirtualItemForOffset(this.getScrollOffset())??s[0]:null;c&&(r=[c.key,this.getScrollOffset()-c.start]);let u=t.followOnAppend===!0?`auto`:t.followOnAppend||null;u&&o>0&&this.isAtEnd(n.scrollEndThreshold)&&(e===0||t.getItemKey(o-1)!==d)&&(o>e||th(e,o,l,t.getItemKey))&&(i=u)}}this.options=t,a&&(this.pendingMin=0,this.itemSizeCacheVersion++);let o=!1,s=0;if(r&&this.scrollOffset!==null){let[e,t]=r,n=this.getMeasurements(),{count:a,getItemKey:c}=this.options,l=0;for(;l<a&&c(l)!==e;)l++;if(l<a){let e=n[l];if(e){let n=Math.max(0,e.start+t);!i&&n!==this.scrollOffset&&(s=n-this.scrollOffset,this.scrollOffset=n,o=!0)}}}(o||i)&&(this.pendingScrollAnchor=[o?r[0]:null,o?r[1]:0,i,s])},this.notify=e=>{var t,n;(n=(t=this.options).onChange)==null||n.call(t,this,e)},this.maybeNotify=Fm(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),e=>{this.notify(e)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.observer.disconnect(),this.rafId!=null&&this.targetWindow&&(this.targetWindow.cancelAnimationFrame(this.rafId),this.rafId=null),this.scrollState=null,this.isScrolling=!1,this.scrollDirection=null,this._iosDeferredAdjustment=0,this._iosTouching=!1,this._iosJustTouchEnded=!1,this._clampedAdjustment=null,this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{let e=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==e){if(this.cleanup(),!e){this.maybeNotify();return}if(this.scrollElement=e,this.targetWindow=this.scrollElement&&`ownerDocument`in this.scrollElement?this.scrollElement.ownerDocument.defaultView:this.scrollElement?.window??null,this.elementsCache.forEach(e=>{this.observer.observe(e)}),this.unsubs.push(this.options.observeElementRect(this,e=>{this.scrollRect=e,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(e,t)=>{if(t&&this._intendedScrollOffset===null&&e===this.scrollOffset)return;this._intendedScrollOffset!==null&&Math.abs(e-this._intendedScrollOffset)<1.5&&(e=this._intendedScrollOffset),this._intendedScrollOffset=null,this._clampedAdjustment!==null&&Math.abs(e-this._clampedAdjustment.maxAtWrite)>=1.5&&(this._clampedAdjustment=null),this.scrollAdjustments=0;let n=this.getScrollOffset();this.scrollDirection=t?n===e?this.scrollDirection:n<e?`forward`:`backward`:null,this.scrollOffset=e,this.isScrolling=t,this._flushIosDeferredIfReady(),this.scrollState&&this.scheduleScrollReconcile(),this.maybeNotify()})),`addEventListener`in this.scrollElement){let e=this.scrollElement,t=()=>{this._iosTouching=!0,this._iosJustTouchEnded=!1,this._iosTouchEndTimerId!==null&&this.targetWindow!=null&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)},n=()=>{this._iosTouching=!1,Bm()&&this.targetWindow!=null&&(this._iosJustTouchEnded=!0,this._iosTouchEndTimerId=this.targetWindow.setTimeout(()=>{this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._flushIosDeferredIfReady()},150))};e.addEventListener(`touchstart`,t,Gm),e.addEventListener(`touchend`,n,Gm),this.unsubs.push(()=>{e.removeEventListener(`touchstart`,t),e.removeEventListener(`touchend`,n),this._iosTouchEndTimerId!==null&&this.targetWindow!=null&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)})}this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})}let t=this.pendingScrollAnchor;if(this.pendingScrollAnchor=null,t&&this.scrollElement&&this.options.enabled){let[e,n,r,i]=t;e!==null&&!r&&(Bm()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded)?i!==0&&(this._iosDeferredAdjustment+=i):this.scrollState?.behavior===`smooth`&&!Lm(this.getScrollOffset()-i,this.scrollState.lastTargetOffset)||this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})),r&&this.scrollToEnd({behavior:r})}this._retryClampedAdjustment()},this._retryClampedAdjustment=()=>{if(this._clampedAdjustment===null||!this.scrollElement||!this.options.enabled)return;let{target:e,maxAtWrite:t}=this._clampedAdjustment,n=this.getMaxScrollOffset();n>t+.5&&(this._clampedAdjustment=e>n+.5?{target:e,maxAtWrite:n}:null,this._scrollToOffset(e,{adjustments:void 0,behavior:void 0}))},this._flushIosDeferredIfReady=()=>{if(this._iosDeferredAdjustment===0||this.isScrolling||this._iosTouching||this._iosJustTouchEnded)return;let e=this.getScrollOffset(),t=this.getMaxScrollOffset();if(e<0||e>t)return;if(this._iosDeferredAdjustment<0&&e>=t-1){this._iosDeferredAdjustment=0;return}let n=this._iosDeferredAdjustment;this._iosDeferredAdjustment=0,this._scrollToOffset(e,{adjustments:this.scrollAdjustments+=n,behavior:void 0})},this.rafId=null,this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?`width`:`height`]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset==`function`?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getMeasurementOptions=Fm(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled,this.options.lanes,this.options.laneAssignmentMode,this.options.gap],(e,t,n,r,i,a,o,s)=>(this.prevLanes!==void 0&&this.prevLanes!==a&&(this.lanesChangedFlag=!0),this.prevLanes=a,this.pendingMin=null,{count:e,paddingStart:t,scrollMargin:n,getItemKey:r,enabled:i,lanes:a,laneAssignmentMode:o,gap:s}),{key:!1}),this.isIndexInRange=e=>e>=0&&e<this.options.count,this.getMeasurements=Fm(()=>[this.getMeasurementOptions(),this.itemSizeCacheVersion],({count:e,paddingStart:t,scrollMargin:n,getItemKey:r,enabled:i,lanes:a,laneAssignmentMode:o,gap:s},c)=>{let l=this.itemSizeCache;if(!i)return this.measurementsCache=[],this._singleLaneMeasurements=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),[];if(this.laneAssignments.size>e)for(let t of this.laneAssignments.keys())t>=e&&this.laneAssignments.delete(t);this.lanesChangedFlag&&(this.lanesChangedFlag=!1,this.lanesSettling=!0,this.measurementsCache=[],this._singleLaneMeasurements=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),this.pendingMin=null),this.measurementsCache.length===0&&!this.lanesSettling&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(e=>{this.itemSizeCache.set(e.key,e.size)}));let u=this.lanesSettling?0:this.pendingMin??0;if(this.pendingMin=null,this.lanesSettling&&this.measurementsCache.length===e&&(this.lanesSettling=!1),a===1){let i=e*2,a=this._singleLaneMeasurements?.flat;if(!a||a.length<i){let e=new Float64Array(i);a&&u>0&&e.set(a.subarray(0,u*2)),a=e}let o=u===0?Array(e):this._singleLaneMeasurements.items.slice(),c;if(u===0)c=t+n;else{let e=u-1;c=a[e*2]+a[e*2+1]+s}for(let t=u;t<e;t++){let e=r(t);o[t]=e;let n=l.get(e),i=typeof n==`number`?n:this.options.estimateSize(t);a[t*2]=c,a[t*2+1]=i,c+=i+s}this._singleLaneMeasurements={flat:a,items:o};let d=Pm(o,a);return this.measurementsCache=d,d}let d=this.measurementsCache.slice(0,u),f=Array(a).fill(void 0),p=new Float64Array(a),m=0;for(let e=0;e<u;e++){let t=d[e];t&&(f[t.lane]===void 0&&m++,f[t.lane]=e,p[t.lane]=t.end)}for(let i=u;i<e;i++){let e=r(i),c=this.laneAssignments.get(i),u,h,g=o===`estimate`||l.has(e);if(c!==void 0&&this.options.lanes>1){u=c;let e=f[u],r=e===void 0?void 0:d[e];h=r?r.end+s:t+n}else if(m===a){let e=0,t=p[0],n=f[0];for(let r=1;r<a;r++){let i=p[r];(i<t||i===t&&f[r]<n)&&(e=r,t=i,n=f[r])}u=e,h=t+s,g&&this.laneAssignments.set(i,u)}else u=i%this.options.lanes,h=t+n,g&&this.laneAssignments.set(i,u);let _=l.get(e),v=typeof _==`number`?_:this.options.estimateSize(i),y=h+v;d[i]={index:i,start:h,size:v,end:y,key:e,lane:u},f[u]===void 0&&m++,f[u]=i,p[u]=y}return this.measurementsCache=d,d},{key:!1,debug:()=>this.options.debug}),this.calculateRange=Fm(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(e,t,n,r)=>e.length===0||t===0?(this.range=null,null):(this.range=ah(e,t,n,r,r===1&&this._singleLaneMeasurements!==null?this._singleLaneMeasurements.flat:null),this.range),{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=Fm(()=>{let e=null,t=null,n=this.calculateRange();return n&&(e=n.startIndex,t=n.endIndex),this.maybeNotify.updateDeps([this.isScrolling,e,t]),[this.options.rangeExtractor,this.options.overscan,this.options.count,e,t]},(e,t,n,r,i)=>r===null||i===null?[]:e({startIndex:r,endIndex:i,overscan:t,count:n}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{let t=this.options.indexAttribute,n=e.getAttribute(t);return n?parseInt(n,10):(console.warn(`Missing attribute name '${t}={index}' on measured element.`),-1)},this.shouldMeasureDuringScroll=e=>{if(!this.scrollState||this.scrollState.behavior!==`smooth`)return!0;let t=this.scrollState.index??this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)?.index;if(t!==void 0&&this.range){let n=Math.max(this.options.overscan,Math.ceil((this.range.endIndex-this.range.startIndex)/2)),r=Math.max(0,t-n),i=Math.min(this.options.count-1,t+n);return e>=r&&e<=i}return!0},this.measureElement=e=>{if(!e){this.elementsCache.forEach((e,t)=>{e.isConnected||(this.observer.unobserve(e),this.elementsCache.delete(t))});return}let t=this.indexFromElement(e);if(!this.isIndexInRange(t))return;let n=this.options.getItemKey(t),r=this.elementsCache.get(n);r!==e&&(r&&this.observer.unobserve(r),this.observer.observe(e),this.elementsCache.set(n,e)),(!this.isScrolling||this.scrollState)&&this.shouldMeasureDuringScroll(t)&&this.resizeItem(t,this.options.measureElement(e,void 0,this))},this.resizeItem=(e,t)=>{if(!this.isIndexInRange(e))return;let n,r,i,a=this._singleLaneMeasurements?.flat;if(this.options.lanes===1&&a!=null)i=this.options.getItemKey(e),r=a[e*2],n=a[e*2+1];else{let t=this.measurementsCache[e];if(!t)return;i=t.key,r=t.start,n=t.size}let o=this.itemSizeCache.get(i)??n,s=t-o;if(s!==0){let a=this.options.anchorTo===`end`&&this.scrollState?.behavior!==`smooth`&&this.getVirtualDistanceFromEnd()<=this.options.scrollEndThreshold,c=a?this.getTotalSize():0,l=this.getScrollOffset()+this.scrollAdjustments,u=this.itemSizeCache.has(i)?r+o<=l&&this.scrollDirection!==`backward`:r<l,d=this.scrollState?.behavior!==`smooth`&&(this.shouldAdjustScrollPositionOnItemSizeChange===void 0?u:this.shouldAdjustScrollPositionOnItemSizeChange(this.measurementsCache[e]??{index:e,key:i,start:r,size:n,end:r+n,lane:0},s,this));(this.pendingMin===null||e<this.pendingMin)&&(this.pendingMin=e),this.itemSizeCache.set(i,t),this.itemSizeCacheVersion++;let f=!1;a?f=this.applyScrollAdjustment(this.getTotalSize()-c):d&&(f=this.applyScrollAdjustment(s)),this.notify(f),this._retryClampedAdjustment()}},this.getVirtualItems=Fm(()=>[this.getVirtualIndexes(),this.getMeasurements()],(e,t)=>{let n=[];for(let r=0,i=e.length;r<i;r++){let i=t[e[r]];n.push(i)}return n},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{let t=this.getMeasurements();if(t.length===0)return;let n=this._singleLaneMeasurements?.flat,r=this.options.lanes===1&&n!=null;return Im(t[rh(0,t.length-1,r?e=>n[e*2]:e=>Im(t[e]).start,e)])},this.getMaxScrollOffset=()=>{if(!this.scrollElement)return 0;if(`scrollHeight`in this.scrollElement)return this.options.horizontal?this.scrollElement.scrollWidth-this.scrollElement.clientWidth:this.scrollElement.scrollHeight-this.scrollElement.clientHeight;{let e=this.scrollElement.document.documentElement;return this.options.horizontal?e.scrollWidth-this.scrollElement.innerWidth:e.scrollHeight-this.scrollElement.innerHeight}},this.getVirtualDistanceFromEnd=()=>Math.max(this.getTotalSize()-this.getSize()-this.getScrollOffset(),0),this.getDistanceFromEnd=()=>Math.max(this.getMaxScrollOffset()-this.getScrollOffset(),0),this.isAtEnd=(e=this.options.scrollEndThreshold)=>this.getDistanceFromEnd()<=e,this.getOffsetForAlignment=(e,t,n=0)=>{if(!this.scrollElement)return 0;let r=this.getSize(),i=this.getScrollOffset();t===`auto`&&(t=e>=i+r?`end`:`start`),t===`center`?e+=(n-r)/2:t===`end`&&(e-=r);let a=this.getMaxScrollOffset();return Math.max(Math.min(a,e),0)},this.getOffsetForIndex=(e,t=`auto`)=>{e=Math.max(0,Math.min(e,this.options.count-1));let n=this.getSize(),r=this.getScrollOffset(),i=this.measurementsCache[e];if(!i)return;if(t===`auto`){if(i.end>=r+n-this.options.scrollPaddingEnd)t=`end`;else if(i.start<=r+this.options.scrollPaddingStart)t=`start`;else return[r,t]}if(t===`end`&&e===this.options.count-1)return[this.getMaxScrollOffset(),t];let a=t===`end`?i.end+this.options.scrollPaddingEnd:i.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(a,t,i.size),t]},this.scrollToOffset=(e,{align:t=`start`,behavior:n=`auto`}={})=>{this._iosDeferredAdjustment=0;let r=this.getOffsetForAlignment(e,t),i=this.now();this.scrollState={index:null,align:t,behavior:n,startedAt:i,lastTargetOffset:r,stableFrames:0},this._scrollToOffset(r,{adjustments:void 0,behavior:n}),this.scheduleScrollReconcile()},this.scrollToIndex=(e,{align:t=`auto`,behavior:n=`auto`}={})=>{this._iosDeferredAdjustment=0,e=Math.max(0,Math.min(e,this.options.count-1));let r=this.getOffsetForIndex(e,t);if(!r)return;let[i,a]=r,o=this.now();this.scrollState={index:e,align:a,behavior:n,startedAt:o,lastTargetOffset:i,stableFrames:0},this._scrollToOffset(i,{adjustments:void 0,behavior:n}),this.scheduleScrollReconcile()},this.scrollBy=(e,{behavior:t=`auto`}={})=>{let n=this.getScrollOffset()+e,r=this.now();this.scrollState={index:null,align:`start`,behavior:t,startedAt:r,lastTargetOffset:n,stableFrames:0},this._scrollToOffset(n,{adjustments:void 0,behavior:t}),this.scheduleScrollReconcile()},this.scrollToEnd=({behavior:e=`auto`}={})=>{if(this.options.count>0){this.scrollToIndex(this.options.count-1,{align:`end`,behavior:e});return}this.scrollToOffset(Math.max(this.getTotalSize()-this.getSize(),0),{behavior:e})},this.getTotalSize=()=>{let e=this.getMeasurements(),t;if(e.length===0)t=this.options.paddingStart;else if(this.options.lanes===1){let n=e.length-1,r=this._singleLaneMeasurements?.flat;t=r==null?e[n]?.end??0:r[n*2]+r[n*2+1]}else{let n=Array(this.options.lanes).fill(null),r=e.length-1;for(;r>=0&&n.some(e=>e===null);){let t=e[r];n[t.lane]===null&&(n[t.lane]=t.end),r--}t=Math.max(...n.filter(e=>e!==null))}return Math.max(t-this.options.scrollMargin+this.options.paddingEnd,0)},this.takeSnapshot=()=>{let e=[];if(this.itemSizeCache.size===0)return e;let t=this.getMeasurements();for(let n of t)n&&this.itemSizeCache.has(n.key)&&e.push({index:n.index,key:n.key,start:n.start,size:n.size,end:n.end,lane:n.lane});return e},this._scrollToOffset=(e,{adjustments:t,behavior:n})=>{this._intendedScrollOffset=e+(t??0),this.options.scrollToFn(e,{behavior:n,adjustments:t},this)},this.measure=()=>{this.pendingMin=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),this.itemSizeCacheVersion++,this.notify(!1)},this.setOptions(e)}applyScrollAdjustment(e,t){if(e===0)return!1;if(Bm()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded))return this._iosDeferredAdjustment+=e,!1;{let n=this.getScrollOffset()+this.scrollAdjustments+e,r=this.scrollElement,i=r!==null&&(`scrollHeight`in r||`document`in r)?this.getMaxScrollOffset():null;return this._clampedAdjustment=i!==null&&n>i+.5?{target:n,maxAtWrite:i}:null,this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=e,behavior:t}),this.scrollOffset!==null&&(this.scrollOffset+=this.scrollAdjustments,this.scrollOffset<0&&(this.scrollOffset=0),this.scrollAdjustments=0),!0}}scheduleScrollReconcile(){if(!this.targetWindow){this.scrollState=null;return}this.rafId??=this.targetWindow.requestAnimationFrame(()=>{this.rafId=null,this.reconcileScroll()})}reconcileScroll(){if(!this.scrollState||!this.scrollElement)return;if(this.now()-this.scrollState.startedAt>5e3){this.scrollState=null;return}let e=this.scrollState.index==null?void 0:this.getOffsetForIndex(this.scrollState.index,this.scrollState.align),t=e?e[0]:this.scrollState.lastTargetOffset,n=t!==this.scrollState.lastTargetOffset;if(!n&&Lm(t,this.getScrollOffset())){if(this.scrollState.stableFrames++,this.scrollState.stableFrames>=1){this.getScrollOffset()!==t&&this._scrollToOffset(t,{adjustments:void 0,behavior:`auto`}),this.scrollState=null;return}}else if(this.scrollState.stableFrames=0,n){let e=this.getSize()||600,n=Math.abs(t-this.getScrollOffset()),r=this.scrollState.behavior===`smooth`&&n>e;this.scrollState.lastTargetOffset=t,r||(this.scrollState.behavior=`auto`),this._scrollToOffset(t,{adjustments:void 0,behavior:r?`smooth`:`auto`})}this.scheduleScrollReconcile()}},rh=(e,t,n,r)=>{for(;e<=t;){let i=(e+t)/2|0,a=n(i);if(a<r)e=i+1;else if(a>r)t=i-1;else return i}return e>0?e-1:0};function ih(e,t,n){let r=0;for(;r<=t;){let i=(r+t)/2|0,a=e[i*2];if(a<n)r=i+1;else if(a>n)t=i-1;else return i}return r>0?r-1:0}function ah(e,t,n,r,i){let a=e.length-1;if(e.length<=r)return{startIndex:0,endIndex:a};if(r===1&&i!==null){let e=ih(i,a,n),r=e,o=n+t;for(;r<a&&i[r*2]+i[r*2+1]<o;)r++;return{startIndex:e,endIndex:r}}let o=rh(0,a,t=>e[t].start,n),s=o;if(r===1)for(;s<a&&e[s].end<n+t;)s++;else if(r>1){let i=Array(r).fill(0);for(;s<a&&i.some(e=>e<n+t);){let t=e[s];i[t.lane]=t.end,s++}let c=Array(r).fill(n+t);for(;o>=0&&c.some(e=>e>=n);){let t=e[o];c[t.lane]=t.start,o--}o=Math.max(0,o-o%r),s=Math.min(a,s+(r-1-s%r))}return{startIndex:o,endIndex:s}}var oh=typeof document<`u`?I.useLayoutEffect:I.useEffect;function sh({useFlushSync:e=!0,directDomUpdates:t=!1,directDomUpdatesMode:n=`transform`,...r}){let i=I.useReducer(e=>e+1,0)[1],a=I.useRef({enabled:t,mode:n,container:null,lastSize:null,lastPositions:new WeakMap,prevRange:null});a.current.enabled=t,a.current.mode=n;let o=I.useRef(!1),s=e=>{let t=a.current;if(!t.enabled||!t.container)return;let n=e.getTotalSize();if(n!==t.lastSize){t.lastSize=n;let r=e.options.horizontal?`width`:`height`;t.container.style[r]=`${n}px`}},c=e=>{let t=a.current;if(!t.enabled||!t.container)return;s(e);let n=!!e.options.horizontal,r=t.mode===`transform`,i=n?`left`:`top`,o=e.options.scrollMargin,c=e.getVirtualItems();for(let a of c){let s=a.start-o,c=e.elementsCache.get(a.key);c&&t.lastPositions.get(c)!==s&&(t.lastPositions.set(c,s),r?c.style.transform=n?`translate3d(${s}px, 0, 0)`:`translate3d(0, ${s}px, 0)`:c.style[i]=`${s}px`)}},l={...r,onChange:(t,n)=>{var s;let l=a.current,u=!0;if(l.enabled){c(t);let e=t.range,n=l.prevRange;u=!n||n.isScrolling!==t.isScrolling||n.startIndex!==e?.startIndex||n.endIndex!==e?.endIndex,u&&(l.prevRange=e?{startIndex:e.startIndex,endIndex:e.endIndex,isScrolling:t.isScrolling}:null)}u&&(e&&n&&!o.current?(0,wt.flushSync)(i):i()),(s=r.onChange)==null||s.call(r,t,n)}},[u]=I.useState(()=>{let e=new nh(l),t=e.measureElement;return e.measureElement=e=>{o.current=!0;try{t(e)}finally{o.current=!1}},Object.assign(e,{containerRef:t=>{let n=a.current;if(n.container=t,n.lastSize=null,t&&n.enabled){let r=e.getTotalSize();n.lastSize=r;let i=e.options.horizontal?`width`:`height`;t.style[i]=`${r}px`}}})});return u.setOptions(l),oh(()=>u._didMount(),[]),oh(()=>(s(u),u._willUpdate())),oh(()=>{c(u)}),u}function ch(e){return sh({observeElementRect:Wm,observeElementOffset:Ym,scrollToFn:eh,...e})}var lh=n(i(((e,t)=>{(function(n){var r;typeof e==`object`?t.exports=n():typeof define==`function`&&define.amd?define(n):(typeof window<`u`?r=window:typeof global<`u`?r=global:typeof self<`u`&&(r=self),r.objectHash=n())})(function(){return function e(t,n,r){function i(o,s){if(!n[o]){if(!t[o]){var c=typeof u==`function`&&u;if(!s&&c)return c(o,!0);if(a)return a(o,!0);throw Error(`Cannot find module '`+o+`'`)}s=n[o]={exports:{}},t[o][0].call(s.exports,function(e){var n=t[o][1][e];return i(n||e)},s,s.exports,e,t,n,r)}return n[o].exports}for(var a=typeof u==`function`&&u,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(e,t,n){(function(r,i,a,o,s,c,l,u,d){var f=e(`crypto`);function p(e,t){t=g(e,t);var n;return(n=t.algorithm===`passthrough`?new y:f.createHash(t.algorithm)).write===void 0&&(n.write=n.update,n.end=n.update),v(t,n).dispatch(e),n.update||n.end(``),n.digest?n.digest(t.encoding===`buffer`?void 0:t.encoding):(e=n.read(),t.encoding===`buffer`?e:e.toString(t.encoding))}(n=t.exports=p).sha1=function(e){return p(e)},n.keys=function(e){return p(e,{excludeValues:!0,algorithm:`sha1`,encoding:`hex`})},n.MD5=function(e){return p(e,{algorithm:`md5`,encoding:`hex`})},n.keysMD5=function(e){return p(e,{algorithm:`md5`,encoding:`hex`,excludeValues:!0})};var m=f.getHashes?f.getHashes().slice():[`sha1`,`md5`],h=(m.push(`passthrough`),[`buffer`,`hex`,`binary`,`base64`]);function g(e,t){var n={};if(n.algorithm=(t||={}).algorithm||`sha1`,n.encoding=t.encoding||`hex`,n.excludeValues=!!t.excludeValues,n.algorithm=n.algorithm.toLowerCase(),n.encoding=n.encoding.toLowerCase(),n.ignoreUnknown=!0===t.ignoreUnknown,n.respectType=!1!==t.respectType,n.respectFunctionNames=!1!==t.respectFunctionNames,n.respectFunctionProperties=!1!==t.respectFunctionProperties,n.unorderedArrays=!0===t.unorderedArrays,n.unorderedSets=!1!==t.unorderedSets,n.unorderedObjects=!1!==t.unorderedObjects,n.replacer=t.replacer||void 0,n.excludeKeys=t.excludeKeys||void 0,e===void 0)throw Error(`Object argument required.`);for(var r=0;r<m.length;++r)m[r].toLowerCase()===n.algorithm.toLowerCase()&&(n.algorithm=m[r]);if(m.indexOf(n.algorithm)===-1)throw Error(`Algorithm "`+n.algorithm+`"  not supported. supported values: `+m.join(`, `));if(h.indexOf(n.encoding)===-1&&n.algorithm!==`passthrough`)throw Error(`Encoding "`+n.encoding+`"  not supported. supported values: `+h.join(`, `));return n}function _(e){if(typeof e==`function`)return/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(e))!=null}function v(e,t,n){n||=[];function r(e){return t.update?t.update(e,`utf8`):t.write(e,`utf8`)}return{dispatch:function(t){return this[`_`+((t=e.replacer?e.replacer(t):t)===null?`null`:typeof t)](t)},_object:function(t){var i,o=Object.prototype.toString.call(t),s=/\[object (.*)\]/i.exec(o);if(s=(s=s?s[1]:`unknown:[`+o+`]`).toLowerCase(),0<=(o=n.indexOf(t)))return this.dispatch(`[CIRCULAR:`+o+`]`);if(n.push(t),a!==void 0&&a.isBuffer&&a.isBuffer(t))return r(`buffer:`),r(t);if(s===`object`||s===`function`||s===`asyncfunction`)return o=Object.keys(t),e.unorderedObjects&&(o=o.sort()),!1===e.respectType||_(t)||o.splice(0,0,`prototype`,`__proto__`,`constructor`),e.excludeKeys&&(o=o.filter(function(t){return!e.excludeKeys(t)})),r(`object:`+o.length+`:`),i=this,o.forEach(function(n){i.dispatch(n),r(`:`),e.excludeValues||i.dispatch(t[n]),r(`,`)});if(!this[`_`+s]){if(e.ignoreUnknown)return r(`[`+s+`]`);throw Error(`Unknown object type "`+s+`"`)}this[`_`+s](t)},_array:function(t,i){i=i===void 0?!1!==e.unorderedArrays:i;var a=this;if(r(`array:`+t.length+`:`),!i||t.length<=1)return t.forEach(function(e){return a.dispatch(e)});var o=[],i=t.map(function(t){var r=new y,i=n.slice();return v(e,r,i).dispatch(t),o=o.concat(i.slice(n.length)),r.read().toString()});return n=n.concat(o),i.sort(),this._array(i,!1)},_date:function(e){return r(`date:`+e.toJSON())},_symbol:function(e){return r(`symbol:`+e.toString())},_error:function(e){return r(`error:`+e.toString())},_boolean:function(e){return r(`bool:`+e.toString())},_string:function(e){r(`string:`+e.length+`:`),r(e.toString())},_function:function(t){r(`fn:`),_(t)?this.dispatch(`[native]`):this.dispatch(t.toString()),!1!==e.respectFunctionNames&&this.dispatch(`function-name:`+String(t.name)),e.respectFunctionProperties&&this._object(t)},_number:function(e){return r(`number:`+e.toString())},_xml:function(e){return r(`xml:`+e.toString())},_null:function(){return r(`Null`)},_undefined:function(){return r(`Undefined`)},_regexp:function(e){return r(`regex:`+e.toString())},_uint8array:function(e){return r(`uint8array:`),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray:function(e){return r(`uint8clampedarray:`),this.dispatch(Array.prototype.slice.call(e))},_int8array:function(e){return r(`int8array:`),this.dispatch(Array.prototype.slice.call(e))},_uint16array:function(e){return r(`uint16array:`),this.dispatch(Array.prototype.slice.call(e))},_int16array:function(e){return r(`int16array:`),this.dispatch(Array.prototype.slice.call(e))},_uint32array:function(e){return r(`uint32array:`),this.dispatch(Array.prototype.slice.call(e))},_int32array:function(e){return r(`int32array:`),this.dispatch(Array.prototype.slice.call(e))},_float32array:function(e){return r(`float32array:`),this.dispatch(Array.prototype.slice.call(e))},_float64array:function(e){return r(`float64array:`),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer:function(e){return r(`arraybuffer:`),this.dispatch(new Uint8Array(e))},_url:function(e){return r(`url:`+e.toString())},_map:function(t){return r(`map:`),t=Array.from(t),this._array(t,!1!==e.unorderedSets)},_set:function(t){return r(`set:`),t=Array.from(t),this._array(t,!1!==e.unorderedSets)},_file:function(e){return r(`file:`),this.dispatch([e.name,e.size,e.type,e.lastModfied])},_blob:function(){if(e.ignoreUnknown)return r(`[blob]`);throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return r(`domwindow`)},_bigint:function(e){return r(`bigint:`+e.toString())},_process:function(){return r(`process`)},_timer:function(){return r(`timer`)},_pipe:function(){return r(`pipe`)},_tcp:function(){return r(`tcp`)},_udp:function(){return r(`udp`)},_tty:function(){return r(`tty`)},_statwatcher:function(){return r(`statwatcher`)},_securecontext:function(){return r(`securecontext`)},_connection:function(){return r(`connection`)},_zlib:function(){return r(`zlib`)},_context:function(){return r(`context`)},_nodescript:function(){return r(`nodescript`)},_httpparser:function(){return r(`httpparser`)},_dataview:function(){return r(`dataview`)},_signal:function(){return r(`signal`)},_fsevent:function(){return r(`fsevent`)},_tlswrap:function(){return r(`tlswrap`)}}}function y(){return{buf:``,write:function(e){this.buf+=e},end:function(e){this.buf+=e},read:function(){return this.buf}}}n.writeToStream=function(e,t,n){return n===void 0&&(n=t,t={}),v(t=g(e,t),n).dispatch(e)}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/fake_9a5aa49d.js`,`/`)},{buffer:3,crypto:5,lYpoI2:11}],2:[function(e,t,n){(function(e,t,r,i,a,o,s,c,l){(function(e){var t=typeof Uint8Array<`u`?Uint8Array:Array,n=43,r=47,i=48,a=97,o=65,s=45,c=95;function l(e){return e=e.charCodeAt(0),e===n||e===s?62:e===r||e===c?63:e<i?-1:e<i+10?e-i+26+26:e<o+26?e-o:e<a+26?e-a+26:void 0}e.toByteArray=function(e){var n,r;if(0<e.length%4)throw Error(`Invalid string. Length must be a multiple of 4`);var i=e.length,i=e.charAt(i-2)===`=`?2:+(e.charAt(i-1)===`=`),a=new t(3*e.length/4-i),o=0<i?e.length-4:e.length,s=0;function c(e){a[s++]=e}for(n=0;n<o;n+=4)c((16711680&(r=l(e.charAt(n))<<18|l(e.charAt(n+1))<<12|l(e.charAt(n+2))<<6|l(e.charAt(n+3))))>>16),c((65280&r)>>8),c(255&r);return i==2?c(255&(r=l(e.charAt(n))<<2|l(e.charAt(n+1))>>4)):i==1&&(c((r=l(e.charAt(n))<<10|l(e.charAt(n+1))<<4|l(e.charAt(n+2))>>2)>>8&255),c(255&r)),a},e.fromByteArray=function(e){var t,n,r,i,a=e.length%3,o=``;function s(e){return`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`.charAt(e)}for(t=0,r=e.length-a;t<r;t+=3)n=(e[t]<<16)+(e[t+1]<<8)+e[t+2],o+=s((i=n)>>18&63)+s(i>>12&63)+s(i>>6&63)+s(63&i);switch(a){case 1:o=(o+=s((n=e[e.length-1])>>2))+s(n<<4&63)+`==`;break;case 2:o=(o=(o+=s((n=(e[e.length-2]<<8)+e[e.length-1])>>10))+s(n>>4&63))+s(n<<2&63)+`=`}return o}})(n===void 0?this.base64js={}:n)}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js`,`/node_modules/gulp-browserify/node_modules/base64-js/lib`)},{buffer:3,lYpoI2:11}],3:[function(e,t,n){(function(t,r,i,a,o,s,c,l,u){var d=e(`base64-js`),f=e(`ieee754`);function i(e,t,n){if(!(this instanceof i))return new i(e,t,n);var r,a,o,s,c=typeof e;if(t===`base64`&&c==`string`)for(e=(s=e).trim?s.trim():s.replace(/^\s+|\s+$/g,``);e.length%4!=0;)e+=`=`;if(c==`number`)r=ne(e);else if(c==`string`)r=i.byteLength(e,t);else{if(c!=`object`)throw Error(`First argument needs to be a number, array or string.`);r=ne(e.length)}if(i._useTypedArrays?a=i._augment(new Uint8Array(r)):((a=this).length=r,a._isBuffer=!0),i._useTypedArrays&&typeof e.byteLength==`number`)a._set(e);else if(re(s=e)||i.isBuffer(s)||s&&typeof s==`object`&&typeof s.length==`number`)for(o=0;o<r;o++)i.isBuffer(e)?a[o]=e.readUInt8(o):a[o]=e[o];else if(c==`string`)a.write(e,0,t);else if(c==`number`&&!i._useTypedArrays&&!n)for(o=0;o<r;o++)a[o]=0;return a}function p(e,t,n,r){return i._charsWritten=oe(function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function m(e,t,n,r){return i._charsWritten=oe(function(e){for(var t,n,r=[],i=0;i<e.length;i++)n=e.charCodeAt(i),t=n>>8,n%=256,r.push(n),r.push(t);return r}(t),e,n,r)}function h(e,t,n){var r=``;n=Math.min(e.length,n);for(var i=t;i<n;i++)r+=String.fromCharCode(e[i]);return r}function g(e,t,n,r){r||(k(typeof n==`boolean`,`missing or invalid endian`),k(t!=null,`missing offset`),k(t+1<e.length,`Trying to read beyond buffer length`));var i,r=e.length;if(!(r<=t))return n?(i=e[t],t+1<r&&(i|=e[t+1]<<8)):(i=e[t]<<8,t+1<r&&(i|=e[t+1])),i}function _(e,t,n,r){r||(k(typeof n==`boolean`,`missing or invalid endian`),k(t!=null,`missing offset`),k(t+3<e.length,`Trying to read beyond buffer length`));var i,r=e.length;if(!(r<=t))return n?(t+2<r&&(i=e[t+2]<<16),t+1<r&&(i|=e[t+1]<<8),i|=e[t],t+3<r&&(i+=e[t+3]<<24>>>0)):(t+1<r&&(i=e[t+1]<<16),t+2<r&&(i|=e[t+2]<<8),t+3<r&&(i|=e[t+3]),i+=e[t]<<24>>>0),i}function v(e,t,n,r){if(r||(k(typeof n==`boolean`,`missing or invalid endian`),k(t!=null,`missing offset`),k(t+1<e.length,`Trying to read beyond buffer length`)),!(e.length<=t))return r=g(e,t,n,!0),32768&r?-1*(65535-r+1):r}function y(e,t,n,r){if(r||(k(typeof n==`boolean`,`missing or invalid endian`),k(t!=null,`missing offset`),k(t+3<e.length,`Trying to read beyond buffer length`)),!(e.length<=t))return r=_(e,t,n,!0),2147483648&r?-1*(4294967295-r+1):r}function b(e,t,n,r){return r||(k(typeof n==`boolean`,`missing or invalid endian`),k(t+3<e.length,`Trying to read beyond buffer length`)),f.read(e,t,n,23,4)}function x(e,t,n,r){return r||(k(typeof n==`boolean`,`missing or invalid endian`),k(t+7<e.length,`Trying to read beyond buffer length`)),f.read(e,t,n,52,8)}function S(e,t,n,r,i){if(i||(k(t!=null,`missing value`),k(typeof r==`boolean`,`missing or invalid endian`),k(n!=null,`missing offset`),k(n+1<e.length,`trying to write beyond buffer length`),ce(t,65535)),i=e.length,!(i<=n))for(var a=0,o=Math.min(i-n,2);a<o;a++)e[n+a]=(t&255<<8*(r?a:1-a))>>>8*(r?a:1-a)}function C(e,t,n,r,i){if(i||(k(t!=null,`missing value`),k(typeof r==`boolean`,`missing or invalid endian`),k(n!=null,`missing offset`),k(n+3<e.length,`trying to write beyond buffer length`),ce(t,4294967295)),i=e.length,!(i<=n))for(var a=0,o=Math.min(i-n,4);a<o;a++)e[n+a]=t>>>8*(r?a:3-a)&255}function w(e,t,n,r,i){i||(k(t!=null,`missing value`),k(typeof r==`boolean`,`missing or invalid endian`),k(n!=null,`missing offset`),k(n+1<e.length,`Trying to write beyond buffer length`),le(t,32767,-32768)),e.length<=n||S(e,0<=t?t:65535+t+1,n,r,i)}function T(e,t,n,r,i){i||(k(t!=null,`missing value`),k(typeof r==`boolean`,`missing or invalid endian`),k(n!=null,`missing offset`),k(n+3<e.length,`Trying to write beyond buffer length`),le(t,2147483647,-2147483648)),e.length<=n||C(e,0<=t?t:4294967295+t+1,n,r,i)}function ee(e,t,n,r,i){i||(k(t!=null,`missing value`),k(typeof r==`boolean`,`missing or invalid endian`),k(n!=null,`missing offset`),k(n+3<e.length,`Trying to write beyond buffer length`),ue(t,34028234663852886e22,-34028234663852886e22)),e.length<=n||f.write(e,t,n,r,23,4)}function E(e,t,n,r,i){i||(k(t!=null,`missing value`),k(typeof r==`boolean`,`missing or invalid endian`),k(n!=null,`missing offset`),k(n+7<e.length,`Trying to write beyond buffer length`),ue(t,17976931348623157e292,-17976931348623157e292)),e.length<=n||f.write(e,t,n,r,52,8)}n.Buffer=i,n.SlowBuffer=i,n.INSPECT_MAX_BYTES=50,i.poolSize=8192,i._useTypedArrays=function(){try{var e=new Uint8Array(new ArrayBuffer(0));return e.foo=function(){return 42},e.foo()===42&&typeof e.subarray==`function`}catch{return!1}}(),i.isEncoding=function(e){switch(String(e).toLowerCase()){case`hex`:case`utf8`:case`utf-8`:case`ascii`:case`binary`:case`base64`:case`raw`:case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:return!0;default:return!1}},i.isBuffer=function(e){return!(e==null||!e._isBuffer)},i.byteLength=function(e,t){var n;switch(e+=``,t||`utf8`){case`hex`:n=e.length/2;break;case`utf8`:case`utf-8`:n=ae(e).length;break;case`ascii`:case`binary`:case`raw`:n=e.length;break;case`base64`:n=O(e).length;break;case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:n=2*e.length;break;default:throw Error(`Unknown encoding`)}return n},i.concat=function(e,t){if(k(re(e),`Usage: Buffer.concat(list, [totalLength])
list should be an Array.`),e.length===0)return new i(0);if(e.length===1)return e[0];if(typeof t!=`number`)for(a=t=0;a<e.length;a++)t+=e[a].length;for(var n=new i(t),r=0,a=0;a<e.length;a++){var o=e[a];o.copy(n,r),r+=o.length}return n},i.prototype.write=function(e,t,n,r){isFinite(t)?isFinite(n)||(r=n,n=void 0):(l=r,r=t,t=n,n=l),t=Number(t)||0;var a,o,s,c,l=this.length-t;switch((!n||l<(n=Number(n)))&&(n=l),r=String(r||`utf8`).toLowerCase()){case`hex`:a=function(e,t,n,r){n=Number(n)||0;var a=e.length-n;(!r||a<(r=Number(r)))&&(r=a),k((a=t.length)%2==0,`Invalid hex string`),a/2<r&&(r=a/2);for(var o=0;o<r;o++){var s=parseInt(t.substr(2*o,2),16);k(!isNaN(s),`Invalid hex string`),e[n+o]=s}return i._charsWritten=2*o,o}(this,e,t,n);break;case`utf8`:case`utf-8`:o=this,s=t,c=n,a=i._charsWritten=oe(ae(e),o,s,c);break;case`ascii`:case`binary`:a=p(this,e,t,n);break;case`base64`:o=this,s=t,c=n,a=i._charsWritten=oe(O(e),o,s,c);break;case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:a=m(this,e,t,n);break;default:throw Error(`Unknown encoding`)}return a},i.prototype.toString=function(e,t,n){var r,i,a,o,s=this;if(e=String(e||`utf8`).toLowerCase(),t=Number(t)||0,(n=n===void 0?s.length:Number(n))===t)return``;switch(e){case`hex`:r=function(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||r<n)&&(n=r);for(var i=``,a=t;a<n;a++)i+=ie(e[a]);return i}(s,t,n);break;case`utf8`:case`utf-8`:r=function(e,t,n){var r=``,i=``;n=Math.min(e.length,n);for(var a=t;a<n;a++)e[a]<=127?(r+=se(i)+String.fromCharCode(e[a]),i=``):i+=`%`+e[a].toString(16);return r+se(i)}(s,t,n);break;case`ascii`:case`binary`:r=h(s,t,n);break;case`base64`:i=s,o=n,r=(a=t)===0&&o===i.length?d.fromByteArray(i):d.fromByteArray(i.slice(a,o));break;case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:r=function(e,t,n){for(var r=e.slice(t,n),i=``,a=0;a<r.length;a+=2)i+=String.fromCharCode(r[a]+256*r[a+1]);return i}(s,t,n);break;default:throw Error(`Unknown encoding`)}return r},i.prototype.toJSON=function(){return{type:`Buffer`,data:Array.prototype.slice.call(this._arr||this,0)}},i.prototype.copy=function(e,t,n,r){if(t||=0,(r=r||r===0?r:this.length)!==(n||=0)&&e.length!==0&&this.length!==0){k(n<=r,`sourceEnd < sourceStart`),k(0<=t&&t<e.length,`targetStart out of bounds`),k(0<=n&&n<this.length,`sourceStart out of bounds`),k(0<=r&&r<=this.length,`sourceEnd out of bounds`),r>this.length&&(r=this.length);var a=(r=e.length-t<r-n?e.length-t+n:r)-n;if(a<100||!i._useTypedArrays)for(var o=0;o<a;o++)e[o+t]=this[o+n];else e._set(this.subarray(n,n+a),t)}},i.prototype.slice=function(e,t){var n=this.length;if(e=te(e,n,0),t=te(t,n,n),i._useTypedArrays)return i._augment(this.subarray(e,t));for(var r=t-e,a=new i(r,void 0,!0),o=0;o<r;o++)a[o]=this[o+e];return a},i.prototype.get=function(e){return console.log(`.get() is deprecated. Access using array indexes instead.`),this.readUInt8(e)},i.prototype.set=function(e,t){return console.log(`.set() is deprecated. Access using array indexes instead.`),this.writeUInt8(e,t)},i.prototype.readUInt8=function(e,t){if(t||(k(e!=null,`missing offset`),k(e<this.length,`Trying to read beyond buffer length`)),!(e>=this.length))return this[e]},i.prototype.readUInt16LE=function(e,t){return g(this,e,!0,t)},i.prototype.readUInt16BE=function(e,t){return g(this,e,!1,t)},i.prototype.readUInt32LE=function(e,t){return _(this,e,!0,t)},i.prototype.readUInt32BE=function(e,t){return _(this,e,!1,t)},i.prototype.readInt8=function(e,t){if(t||(k(e!=null,`missing offset`),k(e<this.length,`Trying to read beyond buffer length`)),!(e>=this.length))return 128&this[e]?-1*(255-this[e]+1):this[e]},i.prototype.readInt16LE=function(e,t){return v(this,e,!0,t)},i.prototype.readInt16BE=function(e,t){return v(this,e,!1,t)},i.prototype.readInt32LE=function(e,t){return y(this,e,!0,t)},i.prototype.readInt32BE=function(e,t){return y(this,e,!1,t)},i.prototype.readFloatLE=function(e,t){return b(this,e,!0,t)},i.prototype.readFloatBE=function(e,t){return b(this,e,!1,t)},i.prototype.readDoubleLE=function(e,t){return x(this,e,!0,t)},i.prototype.readDoubleBE=function(e,t){return x(this,e,!1,t)},i.prototype.writeUInt8=function(e,t,n){n||(k(e!=null,`missing value`),k(t!=null,`missing offset`),k(t<this.length,`trying to write beyond buffer length`),ce(e,255)),t>=this.length||(this[t]=e)},i.prototype.writeUInt16LE=function(e,t,n){S(this,e,t,!0,n)},i.prototype.writeUInt16BE=function(e,t,n){S(this,e,t,!1,n)},i.prototype.writeUInt32LE=function(e,t,n){C(this,e,t,!0,n)},i.prototype.writeUInt32BE=function(e,t,n){C(this,e,t,!1,n)},i.prototype.writeInt8=function(e,t,n){n||(k(e!=null,`missing value`),k(t!=null,`missing offset`),k(t<this.length,`Trying to write beyond buffer length`),le(e,127,-128)),t>=this.length||(0<=e?this.writeUInt8(e,t,n):this.writeUInt8(255+e+1,t,n))},i.prototype.writeInt16LE=function(e,t,n){w(this,e,t,!0,n)},i.prototype.writeInt16BE=function(e,t,n){w(this,e,t,!1,n)},i.prototype.writeInt32LE=function(e,t,n){T(this,e,t,!0,n)},i.prototype.writeInt32BE=function(e,t,n){T(this,e,t,!1,n)},i.prototype.writeFloatLE=function(e,t,n){ee(this,e,t,!0,n)},i.prototype.writeFloatBE=function(e,t,n){ee(this,e,t,!1,n)},i.prototype.writeDoubleLE=function(e,t,n){E(this,e,t,!0,n)},i.prototype.writeDoubleBE=function(e,t,n){E(this,e,t,!1,n)},i.prototype.fill=function(e,t,n){if(t||=0,n||=this.length,k(typeof(e=typeof(e||=0)==`string`?e.charCodeAt(0):e)==`number`&&!isNaN(e),`value is not a number`),k(t<=n,`end < start`),n!==t&&this.length!==0){k(0<=t&&t<this.length,`start out of bounds`),k(0<=n&&n<=this.length,`end out of bounds`);for(var r=t;r<n;r++)this[r]=e}},i.prototype.inspect=function(){for(var e=[],t=this.length,r=0;r<t;r++)if(e[r]=ie(this[r]),r===n.INSPECT_MAX_BYTES){e[r+1]=`...`;break}return`<Buffer `+e.join(` `)+`>`},i.prototype.toArrayBuffer=function(){if(typeof Uint8Array>`u`)throw Error(`Buffer.toArrayBuffer not supported in this browser`);if(i._useTypedArrays)return new i(this).buffer;for(var e=new Uint8Array(this.length),t=0,n=e.length;t<n;t+=1)e[t]=this[t];return e.buffer};var D=i.prototype;function te(e,t,n){return typeof e==`number`?t<=(e=~~e)?t:0<=e||0<=(e+=t)?e:0:n}function ne(e){return(e=~~Math.ceil(+e))<0?0:e}function re(e){return(Array.isArray||function(e){return Object.prototype.toString.call(e)===`[object Array]`})(e)}function ie(e){return e<16?`0`+e.toString(16):e.toString(16)}function ae(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<=127)t.push(e.charCodeAt(n));else for(var i=n,a=(55296<=r&&r<=57343&&n++,encodeURIComponent(e.slice(i,n+1)).substr(1).split(`%`)),o=0;o<a.length;o++)t.push(parseInt(a[o],16))}return t}function O(e){return d.toByteArray(e)}function oe(e,t,n,r){for(var i=0;i<r&&!(i+n>=t.length||i>=e.length);i++)t[i+n]=e[i];return i}function se(e){try{return decodeURIComponent(e)}catch{return`�`}}function ce(e,t){k(typeof e==`number`,`cannot write a non-number as a number`),k(0<=e,`specified a negative value for writing an unsigned value`),k(e<=t,`value is larger than maximum value for type`),k(Math.floor(e)===e,`value has a fractional component`)}function le(e,t,n){k(typeof e==`number`,`cannot write a non-number as a number`),k(e<=t,`value larger than maximum allowed value`),k(n<=e,`value smaller than minimum allowed value`),k(Math.floor(e)===e,`value has a fractional component`)}function ue(e,t,n){k(typeof e==`number`,`cannot write a non-number as a number`),k(e<=t,`value larger than maximum allowed value`),k(n<=e,`value smaller than minimum allowed value`)}function k(e,t){if(!e)throw Error(t||`Failed assertion`)}i._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=D.get,e.set=D.set,e.write=D.write,e.toString=D.toString,e.toLocaleString=D.toString,e.toJSON=D.toJSON,e.copy=D.copy,e.slice=D.slice,e.readUInt8=D.readUInt8,e.readUInt16LE=D.readUInt16LE,e.readUInt16BE=D.readUInt16BE,e.readUInt32LE=D.readUInt32LE,e.readUInt32BE=D.readUInt32BE,e.readInt8=D.readInt8,e.readInt16LE=D.readInt16LE,e.readInt16BE=D.readInt16BE,e.readInt32LE=D.readInt32LE,e.readInt32BE=D.readInt32BE,e.readFloatLE=D.readFloatLE,e.readFloatBE=D.readFloatBE,e.readDoubleLE=D.readDoubleLE,e.readDoubleBE=D.readDoubleBE,e.writeUInt8=D.writeUInt8,e.writeUInt16LE=D.writeUInt16LE,e.writeUInt16BE=D.writeUInt16BE,e.writeUInt32LE=D.writeUInt32LE,e.writeUInt32BE=D.writeUInt32BE,e.writeInt8=D.writeInt8,e.writeInt16LE=D.writeInt16LE,e.writeInt16BE=D.writeInt16BE,e.writeInt32LE=D.writeInt32LE,e.writeInt32BE=D.writeInt32BE,e.writeFloatLE=D.writeFloatLE,e.writeFloatBE=D.writeFloatBE,e.writeDoubleLE=D.writeDoubleLE,e.writeDoubleBE=D.writeDoubleBE,e.fill=D.fill,e.inspect=D.inspect,e.toArrayBuffer=D.toArrayBuffer,e}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/buffer/index.js`,`/node_modules/gulp-browserify/node_modules/buffer`)},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(e,t,n){(function(n,r,i,a,o,s,c,l,u){var i=e(`buffer`).Buffer,d=4,f=new i(d);f.fill(0),t.exports={hash:function(e,t,n,r){for(var a=t(function(e,t){e.length%d!=0&&(n=e.length+(d-e.length%d),e=i.concat([e,f],n));for(var n,r=[],a=t?e.readInt32BE:e.readInt32LE,o=0;o<e.length;o+=d)r.push(a.call(e,o));return r}(e=i.isBuffer(e)?e:new i(e),r),8*e.length),t=r,o=new i(n),s=t?o.writeInt32BE:o.writeInt32LE,c=0;c<a.length;c++)s.call(o,a[c],4*c,!0);return o}}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js`,`/node_modules/gulp-browserify/node_modules/crypto-browserify`)},{buffer:3,lYpoI2:11}],5:[function(e,t,n){(function(t,r,i,a,o,s,c,l,u){var i=e(`buffer`).Buffer,d=e(`./sha`),f=e(`./sha256`),p=e(`./rng`),m={sha1:d,sha256:f,md5:e(`./md5`)},h=64,g=new i(h);function _(e,t){var n=m[e||=`sha1`],r=[];return n||v(`algorithm:`,e,`is not yet supported`),{update:function(e){return i.isBuffer(e)||(e=new i(e)),r.push(e),e.length,this},digest:function(e){var a=i.concat(r),a=t?function(e,t,n){i.isBuffer(t)||(t=new i(t)),i.isBuffer(n)||(n=new i(n)),t.length>h?t=e(t):t.length<h&&(t=i.concat([t,g],h));for(var r=new i(h),a=new i(h),o=0;o<h;o++)r[o]=54^t[o],a[o]=92^t[o];return n=e(i.concat([r,n])),e(i.concat([a,n]))}(n,t,a):n(a);return r=null,e?a.toString(e):a}}}function v(){var e=[].slice.call(arguments).join(` `);throw Error([e,`we accept pull requests`,`http://github.com/dominictarr/crypto-browserify`].join(`
`))}g.fill(0),n.createHash=function(e){return _(e)},n.createHmac=_,n.randomBytes=function(e,t){if(!t||!t.call)return new i(p(e));try{t.call(this,void 0,new i(p(e)))}catch(e){t(e)}};var y,b=[`createCredentials`,`createCipher`,`createCipheriv`,`createDecipher`,`createDecipheriv`,`createSign`,`createVerify`,`createDiffieHellman`,`pbkdf2`],x=function(e){n[e]=function(){v(`sorry,`,e,`is not implemented yet`)}};for(y in b)x(b[y],y)}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js`,`/node_modules/gulp-browserify/node_modules/crypto-browserify`)},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(e,t,n){(function(n,r,i,a,o,s,c,l,u){var d=e(`./helpers`);function f(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var n=1732584193,r=-271733879,i=-1732584194,a=271733878,o=0;o<e.length;o+=16){var s=n,c=r,l=i,u=a,n=m(n,r,i,a,e[o+0],7,-680876936),a=m(a,n,r,i,e[o+1],12,-389564586),i=m(i,a,n,r,e[o+2],17,606105819),r=m(r,i,a,n,e[o+3],22,-1044525330);n=m(n,r,i,a,e[o+4],7,-176418897),a=m(a,n,r,i,e[o+5],12,1200080426),i=m(i,a,n,r,e[o+6],17,-1473231341),r=m(r,i,a,n,e[o+7],22,-45705983),n=m(n,r,i,a,e[o+8],7,1770035416),a=m(a,n,r,i,e[o+9],12,-1958414417),i=m(i,a,n,r,e[o+10],17,-42063),r=m(r,i,a,n,e[o+11],22,-1990404162),n=m(n,r,i,a,e[o+12],7,1804603682),a=m(a,n,r,i,e[o+13],12,-40341101),i=m(i,a,n,r,e[o+14],17,-1502002290),n=h(n,r=m(r,i,a,n,e[o+15],22,1236535329),i,a,e[o+1],5,-165796510),a=h(a,n,r,i,e[o+6],9,-1069501632),i=h(i,a,n,r,e[o+11],14,643717713),r=h(r,i,a,n,e[o+0],20,-373897302),n=h(n,r,i,a,e[o+5],5,-701558691),a=h(a,n,r,i,e[o+10],9,38016083),i=h(i,a,n,r,e[o+15],14,-660478335),r=h(r,i,a,n,e[o+4],20,-405537848),n=h(n,r,i,a,e[o+9],5,568446438),a=h(a,n,r,i,e[o+14],9,-1019803690),i=h(i,a,n,r,e[o+3],14,-187363961),r=h(r,i,a,n,e[o+8],20,1163531501),n=h(n,r,i,a,e[o+13],5,-1444681467),a=h(a,n,r,i,e[o+2],9,-51403784),i=h(i,a,n,r,e[o+7],14,1735328473),n=g(n,r=h(r,i,a,n,e[o+12],20,-1926607734),i,a,e[o+5],4,-378558),a=g(a,n,r,i,e[o+8],11,-2022574463),i=g(i,a,n,r,e[o+11],16,1839030562),r=g(r,i,a,n,e[o+14],23,-35309556),n=g(n,r,i,a,e[o+1],4,-1530992060),a=g(a,n,r,i,e[o+4],11,1272893353),i=g(i,a,n,r,e[o+7],16,-155497632),r=g(r,i,a,n,e[o+10],23,-1094730640),n=g(n,r,i,a,e[o+13],4,681279174),a=g(a,n,r,i,e[o+0],11,-358537222),i=g(i,a,n,r,e[o+3],16,-722521979),r=g(r,i,a,n,e[o+6],23,76029189),n=g(n,r,i,a,e[o+9],4,-640364487),a=g(a,n,r,i,e[o+12],11,-421815835),i=g(i,a,n,r,e[o+15],16,530742520),n=_(n,r=g(r,i,a,n,e[o+2],23,-995338651),i,a,e[o+0],6,-198630844),a=_(a,n,r,i,e[o+7],10,1126891415),i=_(i,a,n,r,e[o+14],15,-1416354905),r=_(r,i,a,n,e[o+5],21,-57434055),n=_(n,r,i,a,e[o+12],6,1700485571),a=_(a,n,r,i,e[o+3],10,-1894986606),i=_(i,a,n,r,e[o+10],15,-1051523),r=_(r,i,a,n,e[o+1],21,-2054922799),n=_(n,r,i,a,e[o+8],6,1873313359),a=_(a,n,r,i,e[o+15],10,-30611744),i=_(i,a,n,r,e[o+6],15,-1560198380),r=_(r,i,a,n,e[o+13],21,1309151649),n=_(n,r,i,a,e[o+4],6,-145523070),a=_(a,n,r,i,e[o+11],10,-1120210379),i=_(i,a,n,r,e[o+2],15,718787259),r=_(r,i,a,n,e[o+9],21,-343485551),n=v(n,s),r=v(r,c),i=v(i,l),a=v(a,u)}return[n,r,i,a]}function p(e,t,n,r,i,a){return v((t=v(v(t,e),v(r,a)))<<i|t>>>32-i,n)}function m(e,t,n,r,i,a,o){return p(t&n|~t&r,e,t,i,a,o)}function h(e,t,n,r,i,a,o){return p(t&r|n&~r,e,t,i,a,o)}function g(e,t,n,r,i,a,o){return p(t^n^r,e,t,i,a,o)}function _(e,t,n,r,i,a,o){return p(n^(t|~r),e,t,i,a,o)}function v(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}t.exports=function(e){return d.hash(e,f,16)}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js`,`/node_modules/gulp-browserify/node_modules/crypto-browserify`)},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(e,t,n){(function(e,n,r,i,a,o,s,c,l){var u;t.exports=u||function(e){for(var t,n=Array(e),r=0;r<e;r++)!(3&r)&&(t=4294967296*Math.random()),n[r]=t>>>((3&r)<<3)&255;return n}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js`,`/node_modules/gulp-browserify/node_modules/crypto-browserify`)},{buffer:3,lYpoI2:11}],8:[function(e,t,n){(function(n,r,i,a,o,s,c,l,u){var d=e(`./helpers`);function f(e,t){e[t>>5]|=128<<24-t%32,e[15+(t+64>>9<<4)]=t;for(var n,r,i,a=Array(80),o=1732584193,s=-271733879,c=-1732584194,l=271733878,u=-1009589776,d=0;d<e.length;d+=16){for(var f=o,h=s,g=c,_=l,v=u,y=0;y<80;y++){a[y]=y<16?e[d+y]:m(a[y-3]^a[y-8]^a[y-14]^a[y-16],1);var b=p(p(m(o,5),(b=s,r=c,i=l,(n=y)<20?b&r|~b&i:!(n<40)&&n<60?b&r|b&i|r&i:b^r^i)),p(p(u,a[y]),(n=y)<20?1518500249:n<40?1859775393:n<60?-1894007588:-899497514)),u=l,l=c,c=m(s,30),s=o,o=b}o=p(o,f),s=p(s,h),c=p(c,g),l=p(l,_),u=p(u,v)}return[o,s,c,l,u]}function p(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function m(e,t){return e<<t|e>>>32-t}t.exports=function(e){return d.hash(e,f,20,!0)}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js`,`/node_modules/gulp-browserify/node_modules/crypto-browserify`)},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(e,t,n){(function(n,r,i,a,o,s,c,l,u){function d(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function f(e,t){var n,r=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],i=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],a=Array(64);e[t>>5]|=128<<24-t%32,e[15+(t+64>>9<<4)]=t;for(var o,s,c=0;c<e.length;c+=16){for(var l=i[0],u=i[1],f=i[2],p=i[3],g=i[4],_=i[5],v=i[6],y=i[7],b=0;b<64;b++)a[b]=b<16?e[b+c]:d(d(d((s=a[b-2],m(s,17)^m(s,19)^h(s,10)),a[b-7]),(s=a[b-15],m(s,7)^m(s,18)^h(s,3))),a[b-16]),n=d(d(d(d(y,m(s=g,6)^m(s,11)^m(s,25)),g&_^~g&v),r[b]),a[b]),o=d(m(o=l,2)^m(o,13)^m(o,22),l&u^l&f^u&f),y=v,v=_,_=g,g=d(p,n),p=f,f=u,u=l,l=d(n,o);i[0]=d(l,i[0]),i[1]=d(u,i[1]),i[2]=d(f,i[2]),i[3]=d(p,i[3]),i[4]=d(g,i[4]),i[5]=d(_,i[5]),i[6]=d(v,i[6]),i[7]=d(y,i[7])}return i}var p=e(`./helpers`),m=function(e,t){return e>>>t|e<<32-t},h=function(e,t){return e>>>t};t.exports=function(e){return p.hash(e,f,32,!0)}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js`,`/node_modules/gulp-browserify/node_modules/crypto-browserify`)},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(e,t,n){(function(e,t,r,i,a,o,s,c,l){n.read=function(e,t,n,r,i){var a,o,s=8*i-r-1,c=(1<<s)-1,l=c>>1,u=-7,d=n?i-1:0,f=n?-1:1,i=e[t+d];for(d+=f,a=i&(1<<-u)-1,i>>=-u,u+=s;0<u;a=256*a+e[t+d],d+=f,u-=8);for(o=a&(1<<-u)-1,a>>=-u,u+=r;0<u;o=256*o+e[t+d],d+=f,u-=8);if(a===0)a=1-l;else{if(a===c)return o?NaN:1/0*(i?-1:1);o+=2**r,a-=l}return(i?-1:1)*o*2**(a-r)},n.write=function(e,t,n,r,i,a){var o,s,c=8*a-i-1,l=(1<<c)-1,u=l>>1,d=i===23?2**-24-2**-77:0,f=r?0:a-1,p=r?1:-1,a=+(t<0||t===0&&1/t<0);for(t=Math.abs(t),isNaN(t)||t===1/0?(s=+!!isNaN(t),o=l):(o=Math.floor(Math.log(t)/Math.LN2),t*(r=2**-o)<1&&(o--,r*=2),2<=(t+=1<=o+u?d/r:d*2**(1-u))*r&&(o++,r/=2),l<=o+u?(s=0,o=l):1<=o+u?(s=(t*r-1)*2**i,o+=u):(s=t*2**(u-1)*2**i,o=0));8<=i;e[n+f]=255&s,f+=p,s/=256,i-=8);for(o=o<<i|s,c+=i;0<c;e[n+f]=255&o,f+=p,o/=256,c-=8);e[n+f-p]|=128*a}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/ieee754/index.js`,`/node_modules/gulp-browserify/node_modules/ieee754`)},{buffer:3,lYpoI2:11}],11:[function(e,t,n){(function(e,n,r,i,a,o,s,c,l){var u,d,f;function p(){}(e=t.exports={}).nextTick=(d=typeof window<`u`&&window.setImmediate,f=typeof window<`u`&&window.postMessage&&window.addEventListener,d?function(e){return window.setImmediate(e)}:f?(u=[],window.addEventListener(`message`,function(e){var t=e.source;t!==window&&t!==null||e.data!==`process-tick`||(e.stopPropagation(),0<u.length&&u.shift()())},!0),function(e){u.push(e),window.postMessage(`process-tick`,`*`)}):function(e){setTimeout(e,0)}),e.title=`browser`,e.browser=!0,e.env={},e.argv=[],e.on=p,e.addListener=p,e.once=p,e.off=p,e.removeListener=p,e.removeAllListeners=p,e.emit=p,e.binding=function(e){throw Error(`process.binding is not supported`)},e.cwd=function(){return`/`},e.chdir=function(e){throw Error(`process.chdir is not supported`)}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/process/browser.js`,`/node_modules/gulp-browserify/node_modules/process`)},{buffer:3,lYpoI2:11}]},{},[1])(1)})}))(),1);c(),c(),c();var uh=e=>{if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null},dh=e=>Array.isArray(e)?[...e]:uh(e)?o({},e):{};function fh(e,t,n){let r=t.split(`.`),i=o({},e),a=i;for(let e=0;e<r.length;e++){let[t,i]=r[e].replace(`]`,``).split(`[`),o=e===r.length-1;if(i!==void 0){a[t]=Array.isArray(a[t])?[...a[t]]:[];let e=Number(i);if(o){a[t][e]=n;continue}a[t][e]=dh(a[t][e]),a=a[t][e];continue}if(o){a[t]=n;continue}a[t]=dh(a[t]),a=a[t]}return i}c(),c();var ph={Button:`_Button_oe4qj_1`,"Button--medium":`_Button--medium_oe4qj_34`,"Button--large":`_Button--large_oe4qj_62`,"Button-icon":`_Button-icon_oe4qj_89`,"Button--primary":`_Button--primary_oe4qj_93`,"Button--disabled":`_Button--disabled_oe4qj_123`,"Button--secondary":`_Button--secondary_oe4qj_135`,"Button--flush":`_Button--flush_oe4qj_171`,"Button--fullWidth":`_Button--fullWidth_oe4qj_179`,"Button-spinner":`_Button-spinner_oe4qj_184`};c();var mh=/^(data-.*)$/,hh=e=>{let t={};for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&mh.test(n)&&(t[n]=e[n]);return t},gh=a(`Button`,ph),_h=t=>{var n=t,{children:i,href:a,onClick:s,variant:c=`primary`,type:l,disabled:u,tabIndex:d,newTab:f,fullWidth:p,icon:m,size:h=`medium`,loading:g=!1}=n,_=r(n,[`children`,`href`,`onClick`,`variant`,`type`,`disabled`,`tabIndex`,`newTab`,`fullWidth`,`icon`,`size`,`loading`]);let[v,y]=(0,I.useState)(g);(0,I.useEffect)(()=>y(g),[g]);let b=a?`a`:l?`button`:`span`,x=hh(_);return(0,L.jsxs)(b,e(o({className:gh({primary:c===`primary`,secondary:c===`secondary`,disabled:u,fullWidth:p,[h]:!0}),onClick:e=>{s&&(y(!0),Promise.resolve(s(e)).then(()=>{y(!1)}))},type:l,disabled:u||v,tabIndex:d,target:f?`_blank`:void 0,rel:f?`noreferrer`:void 0,href:a},x),{children:[m&&(0,L.jsx)(`div`,{className:gh(`icon`),children:m}),i,v&&(0,L.jsx)(`div`,{className:gh(`spinner`),children:(0,L.jsx)(T,{size:14})})]}))};c(),c();var vh={InputWrapper:`_InputWrapper_qyenz_1`,"Input-label":`_Input-label_qyenz_5`,"Input-labelIcon":`_Input-labelIcon_qyenz_17`,"Input-disabledIcon":`_Input-disabledIcon_qyenz_24`,"Input-input":`_Input-input_qyenz_29`,"Input-select":`_Input-select_qyenz_61`,"Input-selectIcon":`_Input-selectIcon_qyenz_71`,Input:`_Input_qyenz_1`,"Input--readOnly":`_Input--readOnly_qyenz_111`,"Input-radioGroupItems":`_Input-radioGroupItems_qyenz_150`,"Input-radio":`_Input-radio_qyenz_150`,"Input-radioInner":`_Input-radioInner_qyenz_179`,"Input-radioInput":`_Input-radioInput_qyenz_261`},yh=a(`Input`,vh),bh=({children:e,icon:t,label:n,el:r=`label`,readOnly:i,className:a})=>{let o=r,s=P(`field-readonly`);return(0,L.jsxs)(o,{className:a,children:[(0,L.jsxs)(`div`,{className:yh(`label`),children:[t?(0,L.jsx)(`div`,{className:yh(`labelIcon`),children:t}):(0,L.jsx)(L.Fragment,{}),n,i&&(0,L.jsx)(`div`,{className:yh(`disabledIcon`),title:s,children:(0,L.jsx)(re,{size:`12`})})]}),e]})},xh=({children:e,icon:t,label:n,el:r=`label`,readOnly:i})=>{let a=F(e=>e.overrides),o=(0,I.useMemo)(()=>a.fieldLabel||bh,[a]);return n?(0,L.jsx)(o,{label:n,icon:t,className:yh({readOnly:i}),readOnly:i,el:r,children:e}):(0,L.jsx)(L.Fragment,{children:e})};c(),c(),c(),c();var Sh={ArrayField:`_ArrayField_62huh_5`,"ArrayField--isDraggingFrom":`_ArrayField--isDraggingFrom_62huh_30`,"ArrayField-addButton":`_ArrayField-addButton_62huh_38`,"ArrayField--hasItems":`_ArrayField--hasItems_62huh_58`,"ArrayField-inner":`_ArrayField-inner_62huh_93`,ArrayFieldItem:`_ArrayFieldItem_62huh_101`,"ArrayFieldItem--isDragging":`_ArrayFieldItem--isDragging_62huh_110`,"ArrayFieldItem--isExpanded":`_ArrayFieldItem--isExpanded_62huh_114`,"ArrayFieldItem-summary":`_ArrayFieldItem-summary_62huh_132`,"ArrayFieldItem--noFields":`_ArrayFieldItem--noFields_62huh_167`,"ArrayField--addDisabled":`_ArrayField--addDisabled_62huh_176`,"ArrayFieldItem-body":`_ArrayFieldItem-body_62huh_228`,"ArrayFieldItem-fieldset":`_ArrayFieldItem-fieldset_62huh_237`,"ArrayFieldItem-rhs":`_ArrayFieldItem-rhs_62huh_250`,"ArrayFieldItem-actions":`_ArrayFieldItem-actions_62huh_256`};c(),c();function Ch(e,t){let n=(0,I.useContext)(e);if(!n)throw Error(`useContextStore must be used inside context`);return _(n,kn(t))}function wh(e){return({children:t,value:n})=>{let[r]=(0,I.useState)(()=>ce(()=>n));return(0,L.jsx)(e.Provider,{value:r,children:t})}}function Th(e){let t=(0,I.createContext)(ce(v(()=>e)));return{ctx:t,Provider:wh(t)}}var Eh=Th({}),Dh=()=>(0,I.useContext)(Eh.ctx);function Oh(e){let t=(0,I.useContext)(Eh.ctx);if(!t)throw Error(`useContextStore must be used inside context`);return _(t,kn(e))}c(),c();var kh=a(`DragIcon`,{DragIcon:`_DragIcon_5e515_1`,"DragIcon--disabled":`_DragIcon--disabled_5e515_10`}),Ah=({isDragDisabled:e})=>(0,L.jsx)(`div`,{className:kh({disabled:e}),children:(0,L.jsx)(`svg`,{viewBox:`0 0 20 20`,width:`12`,fill:`currentColor`,children:(0,L.jsx)(`path`,{d:`M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z`})})});c(),c();var{Delay:jh,Distance:Mh}=jd,Nh=[new jh({value:200,tolerance:10})],Ph=[new jh({value:200,tolerance:10}),new Mh({value:5})],Fh=({other:e=Ph,mouse:t,touch:n=Nh}={touch:Nh,other:Ph})=>{let[r]=(0,I.useState)(()=>[Fd.configure({activationConstraints(r,i){let{pointerType:a,target:o}=r;return a===`mouse`&&al(o)&&(i.handle===o||i.handle?.contains(o))?t:a===`touch`?n:e}})]);return r};c(),c(),c();var Ih=`increasing`,Lh=(e,t)=>{let{dragOperation:n,droppable:r}=e,{shape:i}=r,{position:a}=n,o=n.shape?.current;if(!o||!i)return null;let s=i.center,c=Math.sqrt((s.x-t.x)**2+(s.y-t.y)**2),l=Math.sqrt((s.x-a.current.x)**2+(s.y-a.current.y)**2);return Ih=l===c?Ih:l<c?`decreasing`:`increasing`,o.center,r.id.toString(),Ih===`decreasing`?{id:r.id,value:1,type:_o.Collision}:null};c();var Rh=(e,t)=>e===`dynamic`?Math.abs(t.y)>Math.abs(t.x)?t.y===0?null:t.y>0?`down`:`up`:t.x===0?null:t.x>0?`right`:`left`:e===`x`?t.x===0?null:t.x>0?`right`:`left`:t.y===0?null:t.y>0?`down`:`up`;c();var zh=(e,t,n,r=0)=>{let i=e.boundingRectangle,a=t.center;if(n===`down`){let e=r*t.boundingRectangle.height;return i.bottom>=a.y+e}if(n===`up`){let e=r*t.boundingRectangle.height;return i.top<a.y-e}if(n===`left`){let e=r*t.boundingRectangle.width;return a.x-e>=i.left}let o=r*t.boundingRectangle.width;return i.right-o>=a.x};c();var Bh=10,Vh={current:{x:0,y:0},delta:{x:0,y:0},previous:{x:0,y:0},direction:null},Hh=(e,t=`dynamic`)=>(Vh.current=e,Vh.delta={x:e.x-Vh.previous.x,y:e.y-Vh.previous.y},Vh.direction=Rh(t,Vh.delta)||Vh.direction,(Math.abs(Vh.delta.x)>Bh||Math.abs(Vh.delta.y)>Bh)&&(Vh.previous=Oi.from(e)),Vh);c();var Uh=({dragOperation:e,droppable:t})=>{let n=e.position.current;if(!n)return null;let{id:r}=t;return t.shape&&t.shape.containsPoint(n)?{id:r,value:1/Oi.distance(t.shape.center,n),type:_o.PointerIntersection,priority:go.High}:null},Wh=e=>{let{dragOperation:t,droppable:n}=e,{shape:r,position:i}=t;if(!n.shape)return null;let a=r?ki.from(r.current.boundingRectangle).corners:void 0,o=ki.from(n.shape.boundingRectangle).corners.reduce((e,t,n)=>e+Oi.distance(Oi.from(t),a?.[n]??i.current),0)/4;return{id:n.id,value:1/o,type:_o.Collision,priority:go.Normal}};c();var Gh=ce(()=>({fallbackEnabled:!1})),Kh=``,qh=(t,n=.05)=>(r=>{let{dragOperation:i,droppable:a}=r,{position:s}=i,c=i.shape?.current,{shape:l}=a;if(!c||!l)return null;let{center:u}=c,{fallbackEnabled:d}=Gh.getState(),f=Hh(s.current,t),p={direction:f.direction},{center:m}=l,h=zh(c,l,f.direction,n);if(i.source?.id===a.id){let t=Lh(r,f.previous);if(a.id.toString(),t)return e(o({},t),{priority:go.Highest,data:p})}let g=c.intersectionArea(l),_=g/l.area;if(g&&h){a.id.toString(),f.direction;let t={id:a.id,value:_,priority:go.High,type:_o.Collision},n=Kh===a.id;return Kh=``,e(o({},t),{id:n?`flush`:t.id,data:p})}if(d&&i.source?.id!==a.id){let n=l.boundingRectangle.right>c.boundingRectangle.left&&l.boundingRectangle.left<c.boundingRectangle.right,i=l.boundingRectangle.bottom>c.boundingRectangle.top&&l.boundingRectangle.top<c.boundingRectangle.bottom;if(t===`y`&&n||i){let n=Wh(r);if(n)return p.direction=Rh(t,{x:c.center.x-(a.shape?.center.x||0),y:c.center.y-(a.shape?.center.y||0)}),g?(a.id.toString(),Kh=a.id,e(o({},n),{priority:go.Low,data:p})):(a.id.toString(),e(o({},n),{priority:go.Lowest,data:p}))}}return a.id.toString(),null});c();var Jh=(e,t=`ltr`)=>e===`up`||t===`ltr`&&e===`left`||t===`rtl`&&e===`right`?`before`:`after`,Yh=({position:e,sourceIndex:t,targetIndex:n,isSameZone:r})=>{let i=n;return r&&i>=t&&--i,e===`after`&&(i+=1),i},Xh=({children:e,onDragStart:t,onDragEnd:n,onMove:r})=>{let i=Fh({mouse:[new jd.Distance({value:5})]});return(0,L.jsx)(jf,{sensors:i,onDragStart:e=>t(e.operation.source?.id.toString()??``),onDragOver:(e,t)=>{e.preventDefault();let{operation:n}=e,{source:i,target:a}=n;if(!i||!a)return;let o=i.data.index,s=a.data.index,c=t.collisionObserver.collisions[0]?.data;o!==s&&i.id!==a.id&&r({source:o,target:Yh({position:Jh(c?.direction),sourceIndex:o,targetIndex:s,isSameZone:!0})})},onDragEnd:()=>{setTimeout(()=>{n()},250)},children:e})},Zh=({id:e,index:t,disabled:n,children:r,type:i=`item`})=>{let{ref:a,isDragging:o,isDropping:s,handleRef:c}=Dm({id:e,type:i,index:t,disabled:n,data:{index:t},collisionDetector:qh(`y`)});return r({isDragging:o,isDropping:s,ref:a,handleRef:c})};c();var Qh=(0,I.createContext)({}),$h=()=>{let t=(0,I.useContext)(Qh);return e(o({},t),{readOnlyFields:t.readOnlyFields||{}})},eg=({children:t,name:n,subName:r,wildcardName:i=n,readOnlyFields:a})=>{let s=`${n}.${r}`,c=`${i}.${r}`,l=(0,I.useMemo)(()=>Object.keys(a).reduce((t,r)=>{if(r.indexOf(s)>-1||r.indexOf(c)>-1){let s=new RegExp(`^(${n}|${i}).`.replace(/\[/g,`\\[`).replace(/\]/g,`\\]`).replace(/\./g,`\\.`).replace(/\*/g,`\\*`)),c=r.replace(s,``);return e(o({},t),{[c]:a[r]})}return t},{}),[n,r,i,a]);return(0,L.jsx)(Qh.Provider,{value:{readOnlyFields:l,localName:r},children:t})};c();var tg=(e,t)=>t.split(`.`).reduce((e,t)=>{if(!e)return;let[n,r]=t.replace(`]`,``).split(`[`),i=e[n];return r&&i?i[parseInt(r)]:i},e);c();var ng=(0,I.memo)(({field:t,id:n,index:r,name:i,subName:a,localName:s,onChange:c,forceReadOnly:l})=>{let u=r===void 0?i:`${i}[${r}]`,d=i?`${u}.${a}`:a,f=r===void 0?s??a:`${s}[${r}]`,p=r===void 0?s:`${s}[*]`,m=`${f}.${a}`,h=`${p}.${a}`,{readOnlyFields:g}=$h(),_=l||(g[d]===void 0?g[h]:g[m]),v=t.label||a;return(0,L.jsx)(eg,{name:f,wildcardName:p,subName:a,readOnlyFields:g,children:(0,L.jsx)(Bg,{name:d,label:v,id:n,readOnly:_,field:e(o({},t),{label:v}),onChange:(e,t)=>{c(e,t,a)}})})}),rg=a(`ArrayField`,Sh),ig=a(`ArrayFieldItem`,Sh),ag=(0,I.memo)(({index:e,originalIndex:t,field:n,name:r})=>{let i=Oh(t=>tg(t,`${[r]}[${e}]`)),a=P(`field-arrayitem-summary`,{index:t});return(0,I.useMemo)(()=>i&&n.getItemSummary?n.getItemSummary(i,e):a,[i,n,t,e,a])}),og=(0,I.memo)(({id:e,arrayId:t,index:n,dragIndex:r,originalIndex:i,field:a,onChange:o,onToggleExpand:s,readOnly:c,actions:l,name:u,localName:d})=>{let f=F(n=>n.state.ui.arrayState[t]?.openId===e),p=F(e=>e.permissions.getPermissions({item:e.selectedItem}).edit),m=(0,I.useMemo)(()=>a.arrayFields?Object.values(a.arrayFields).some(e=>e.type!==`slot`&&e.visible!==!1):!1,[a.arrayFields]);return(0,L.jsx)(Zh,{id:e,index:r,disabled:c,children:({isDragging:t,ref:r,handleRef:h})=>(0,L.jsxs)(`div`,{ref:r,className:ig({isExpanded:f&&m,isDragging:t,noFields:!m}),children:[(0,L.jsxs)(`div`,{ref:h,onClick:n=>{t||(n.preventDefault(),n.stopPropagation(),m&&s(e,f))},className:ig(`summary`),children:[(0,L.jsx)(ag,{index:n,originalIndex:i,field:a,name:u}),(0,L.jsxs)(`div`,{className:ig(`rhs`),children:[!c&&(0,L.jsx)(`div`,{className:ig(`actions`),children:l}),(0,L.jsx)(`div`,{children:(0,L.jsx)(Ah,{})})]})]}),(0,L.jsx)(`div`,{className:ig(`body`),children:f&&m&&(0,L.jsx)(`fieldset`,{className:ig(`fieldset`),children:Object.keys(a.arrayFields).map(t=>{let r=a.arrayFields[t];return(0,L.jsx)(ng,{id:`${e}_${t}`,name:u,index:n,subName:t,localName:d,field:r,onChange:o,forceReadOnly:!p},`${e}_${t}_${n}`)})})})]})})}),sg=({field:t,onChange:n,id:r,name:i=r,label:a,labelIcon:s,readOnly:c,Label:l=e=>(0,L.jsx)(`div`,o({},e))})=>{let u=F(e=>e.setUi),d=N(),f=Dh(),{localName:p=i}=$h(),m=()=>tg(f.getState(),i)??[],h=(0,I.useCallback)(()=>{let{state:e}=d.getState(),t=e.ui.arrayState[r];if(t?.items?.length)return t;let n=m();return{items:Array.from(n||[]).map((e,t)=>({_originalIndex:t,_currentIndex:t,_arrayId:`${r}-${t}`})),openId:``}},[d,r,m,i]),g=Oh(()=>m().length),_=(0,I.useMemo)(h,[h]),v=F(e=>e.state.ui.arrayState[r]??_),y=N(),b=(0,I.useCallback)(t=>{let n=y.getState().state;return{arrayState:e(o({},n.ui.arrayState),{[r]:o(o({},h()),t)})}},[y]),S=(0,I.useCallback)(()=>h().items.reduce((e,t)=>t._originalIndex>e?t._originalIndex:e,-1),[]),C=(0,I.useCallback)(t=>{let n=S(),i=h(),a=Array.from(t||[]).map((e,t)=>{let a=i.items[t],o={_originalIndex:a?._originalIndex??n+1,_currentIndex:a?._currentIndex??t,_arrayId:i.items[t]?._arrayId||`${r}-${n+1}`};return o._originalIndex>n&&(n=o._originalIndex),o});return e(o({},i),{items:a})},[]),[w,T]=(0,I.useState)(``),ee=!!w,E=(0,I.useRef)([]);(0,I.useEffect)(()=>{E.current=m()},[]);let D=(0,I.useCallback)(e=>{if(t.type!==`array`||!t.arrayFields)return;let n=y.getState().config;return $e({value:e,fields:t.arrayFields,mappers:{slot:({value:e})=>e.map(e=>ie(e,n,!0))},config:n})},[y,t]),te=(0,I.useCallback)(()=>{let t=h(),n=t.items.map((t,n)=>e(o({},t),{_currentIndex:n})),i=y.getState().state,a={arrayState:e(o({},i.ui.arrayState),{[r]:e(o({},t),{items:n})})};u(a,!1)},[]),ne=(0,I.useCallback)(e=>{let t=C(e);u(b(t),!1),n(e)},[C,u,b,n]);(0,I.useEffect)(()=>{let e=C(m());u(b(e),!1)},[g]);let re=P(`field-arrayitem-duplicate`),ae=P(`field-arrayitem-delete`);if(t.type!==`array`||!t.arrayFields)return null;let O=t.max!==void 0&&v?.items.length>=t.max||c;return(0,L.jsx)(l,{label:a||i,icon:s||(0,L.jsx)(le,{size:16}),el:`div`,readOnly:c,children:(0,L.jsx)(Xh,{onDragStart:e=>{E.current=m(),T(e),te()},onDragEnd:()=>{T(``),n(E.current);let e=f.getState();f.setState(fh(e,i,E.current)),te()},onMove:t=>{let n=h();if(n.items[t.source]._arrayId!==w)return;let i=Ge(E.current,t.source,t.target),a=Ge(n.items,t.source,t.target),s=y.getState().state,c={arrayState:e(o({},s.ui.arrayState),{[r]:e(o({},n),{items:a})})};u(c,!1),E.current=i},children:(0,L.jsxs)(`div`,{className:rg({hasItems:g>0,addDisabled:O}),children:[v.items.length>0&&(0,L.jsx)(`div`,{className:rg(`inner`),"data-dnd-container":!0,children:v.items.map((a,s)=>{let{_arrayId:l=`${r}-${s}`,_originalIndex:d=s,_currentIndex:f=s}=a;return(0,L.jsx)(og,{index:f,dragIndex:s,originalIndex:d,arrayId:r,id:l,readOnly:c,field:t,name:i,localName:p,onChange:(t,r,i)=>{let a=m(),c=Array.from(a||[])[s]||{};n(Fe(a,s,e(o({},c),{[i]:t})),r)},onToggleExpand:(e,t)=>{u(b(t?{openId:``}:{openId:e}))},actions:(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`div`,{className:ig(`action`),children:(0,L.jsx)(Be,{type:`button`,disabled:!!O,onClick:e=>{e.stopPropagation();let t=[...m()||[]],n=D(t[s]);t.splice(s,0,n),ne(t)},title:re,children:(0,L.jsx)(Pe,{size:16})})}),(0,L.jsx)(`div`,{className:ig(`action`),children:(0,L.jsx)(Be,{type:`button`,disabled:t.min!==void 0&&t.min>=v.items.length,onClick:e=>{e.stopPropagation();let t=[...m()||[]];t.splice(s,1),ne(t)},title:ae,children:(0,L.jsx)(tt,{size:16})})})]})},l)})}),!O&&(0,L.jsx)(`button`,{type:`button`,className:rg(`addButton`),onClick:()=>{if(ee)return;let e=m()||[],n=typeof t.defaultItemProps==`function`?t.defaultItemProps(e.length):t.defaultItemProps??{},r=A(D(n),t.arrayFields),i=[...e,r];ne(i)},children:(0,L.jsx)(x,{size:21})})]})})})};c(),c(),c();var cg=(e,t=!0)=>Oh(n=>t?tg(n,e):void 0);c();var lg=e=>F(t=>t.state.ui.field.focus===e),ug=(e,t,{tracked:n=!0,fallback:r}={})=>{let i=cg(e,n),a=lg(e),[o,s]=(0,I.useState)(i),c=(0,I.useCallback)((e,...n)=>{s(e),t(e,...n)},[t]);return(0,I.useEffect)(()=>{n&&(a||s(i))},[n,a,i]),n?[r!==void 0&&o==null?r:o,c]:[void 0,t]},dg=a(`Input`,vh),fg=({field:e,onChange:t,readOnly:n,id:r,name:i=r,label:a,labelIcon:o,Label:s})=>{let[c,l]=ug(i,t,{fallback:``});return(0,L.jsx)(s,{label:a||i,icon:o||(0,L.jsxs)(L.Fragment,{children:[e.type===`text`&&(0,L.jsx)(Le,{size:16}),e.type===`number`&&(0,L.jsx)(dt,{size:16})]}),readOnly:n,children:(0,L.jsx)(`input`,{className:dg(`input`),autoComplete:`off`,type:e.type,title:a||i,name:i,value:c,onChange:t=>{if(e.type===`number`){let n=Number(t.currentTarget.value);if(e.min!==void 0&&n<e.min||e.max!==void 0&&n>e.max)return;l(n)}else l(t.currentTarget.value)},readOnly:n,tabIndex:n?-1:void 0,id:r,min:e.type===`number`?e.min:void 0,max:e.type===`number`?e.max:void 0,placeholder:e.type===`text`||e.type===`number`?e.placeholder:void 0,step:e.type===`number`?e.step:void 0})})};c(),c(),c();var pg={"ExternalInput-actions":`_ExternalInput-actions_143vl_1`,"ExternalInput-button":`_ExternalInput-button_143vl_5`,"ExternalInput--dataSelected":`_ExternalInput--dataSelected_143vl_34`,"ExternalInput--readOnly":`_ExternalInput--readOnly_143vl_41`,"ExternalInput-detachButton":`_ExternalInput-detachButton_143vl_48`,ExternalInput:`_ExternalInput_143vl_1`,ExternalInputModal:`_ExternalInputModal_143vl_118`,"ExternalInputModal-grid":`_ExternalInputModal-grid_143vl_128`,"ExternalInputModal--filtersToggled":`_ExternalInputModal--filtersToggled_143vl_139`,"ExternalInputModal-filters":`_ExternalInputModal-filters_143vl_144`,"ExternalInputModal-masthead":`_ExternalInputModal-masthead_143vl_164`,"ExternalInputModal-tableWrapper":`_ExternalInputModal-tableWrapper_143vl_173`,"ExternalInputModal-table":`_ExternalInputModal-table_143vl_173`,"ExternalInputModal-thead":`_ExternalInputModal-thead_143vl_189`,"ExternalInputModal-th":`_ExternalInputModal-th_143vl_189`,"ExternalInputModal-td":`_ExternalInputModal-td_143vl_204`,"ExternalInputModal-tr":`_ExternalInputModal-tr_143vl_210`,"ExternalInputModal-tbody":`_ExternalInputModal-tbody_143vl_217`,"ExternalInputModal--hasData":`_ExternalInputModal--hasData_143vl_244`,"ExternalInputModal-loadingBanner":`_ExternalInputModal-loadingBanner_143vl_248`,"ExternalInputModal--isLoading":`_ExternalInputModal--isLoading_143vl_265`,"ExternalInputModal-searchForm":`_ExternalInputModal-searchForm_143vl_269`,"ExternalInputModal-search":`_ExternalInputModal-search_143vl_269`,"ExternalInputModal-searchIcon":`_ExternalInputModal-searchIcon_143vl_306`,"ExternalInputModal-searchIconText":`_ExternalInputModal-searchIconText_143vl_333`,"ExternalInputModal-searchInput":`_ExternalInputModal-searchInput_143vl_343`,"ExternalInputModal-searchActions":`_ExternalInputModal-searchActions_143vl_358`,"ExternalInputModal-searchActionIcon":`_ExternalInputModal-searchActionIcon_143vl_371`,"ExternalInputModal-footerContainer":`_ExternalInputModal-footerContainer_143vl_375`,"ExternalInputModal-footer":`_ExternalInputModal-footer_143vl_375`,"ExternalInputModal-field":`_ExternalInputModal-field_143vl_388`};c(),c();var mg=a(`Modal`,{Modal:`_Modal_g5xob_1`,"Modal--isOpen":`_Modal--isOpen_g5xob_15`,"Modal-inner":`_Modal-inner_g5xob_19`}),hg=({children:e,onClose:t,isOpen:n})=>{let[r,i]=(0,I.useState)(null);return(0,I.useEffect)(()=>{i(document.getElementById(`puck-portal-root`))},[]),r?(0,wt.createPortal)((0,L.jsx)(`div`,{className:mg({isOpen:n}),onClick:t,children:(0,L.jsx)(`div`,{className:mg(`inner`),onClick:e=>e.stopPropagation(),children:e})}),r):(0,L.jsx)(`div`,{})};c(),c();var gg=a(`Heading`,{Heading:`_Heading_97eh4_1`,"Heading--xxxxl":`_Heading--xxxxl_97eh4_12`,"Heading--xxxl":`_Heading--xxxl_97eh4_18`,"Heading--xxl":`_Heading--xxl_97eh4_22`,"Heading--xl":`_Heading--xl_97eh4_26`,"Heading--l":`_Heading--l_97eh4_30`,"Heading--m":`_Heading--m_97eh4_34`,"Heading--s":`_Heading--s_97eh4_38`,"Heading--xs":`_Heading--xs_97eh4_42`}),_g=({children:e,rank:t,size:n=`m`})=>{let r=t?`h${t}`:`span`;return(0,L.jsx)(r,{className:gg({[n]:!0}),children:e})};c();var vg=a(`ExternalInput`,pg),yg=a(`ExternalInputModal`,pg),bg=({count:e})=>{let t=P(`field-external-result-singular`,{count:e}),n=P(`field-external-result-plural`,{count:e});return(0,L.jsx)(`span`,{className:yg(`footer`),children:e===1?t:n})},xg={},Sg=({field:t,onChange:n,value:r=null,name:i,id:a,readOnly:c})=>{let{mapProp:l=e=>e,mapRow:u=e=>e,filterFields:d}=t||{},{enabled:f}=t.cache??{enabled:!0},[p,m]=(0,I.useState)([]),[h,g]=(0,I.useState)(!1),[_,v]=(0,I.useState)(!0),y=!!d,[b,x]=(0,I.useState)(t.initialFilters||{}),[S,C]=(0,I.useState)(y),w=(0,I.useMemo)(()=>p.map(u),[p]),ee=(0,I.useMemo)(()=>{let e=new Set;for(let t of w)for(let n of Object.keys(t))(typeof t[n]==`string`||typeof t[n]==`number`||(0,I.isValidElement)(t[n]))&&e.add(n);return Array.from(e)},[w]),[E,D]=(0,I.useState)(t.initialQuery||``),te=(0,I.useCallback)((e,n)=>s(null,null,function*(){v(!0);let r=`${a}-${e}-${JSON.stringify(n)}`,i;i=f&&xg[r]?xg[r]:yield t.fetchList({query:e,filters:n}),i&&(m(i),v(!1),f&&(xg[r]=i))}),[a,t]),ne=(0,I.useCallback)(e=>t.renderFooter?t.renderFooter(e):(0,L.jsx)(bg,{count:e.items.length}),[t.renderFooter]);(0,I.useEffect)(()=>{te(E,b)},[]);let re=P(`field-external-item`),ie=P(`field-external-search`),ae=P(`field-external-togglefilters`),O=P(`field-external-selectdata`);return(0,L.jsxs)(`div`,{className:vg({dataSelected:!!r,modalVisible:h,readOnly:c}),id:a,children:[(0,L.jsxs)(`div`,{className:vg(`actions`),children:[(0,L.jsx)(`button`,{type:`button`,onClick:()=>g(!0),className:vg(`button`),disabled:c,children:r?t.getItemSummary?t.getItemSummary(r):re:(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(oe,{size:`16`}),(0,L.jsx)(`span`,{children:t.placeholder})]})}),r&&(0,L.jsx)(`button`,{type:`button`,className:vg(`detachButton`),onClick:()=>{n(null)},disabled:c,children:(0,L.jsx)(de,{size:16})})]}),(0,L.jsx)(hg,{onClose:()=>g(!1),isOpen:h,children:(0,L.jsxs)(`form`,{className:yg({isLoading:_,loaded:!_,hasData:w.length>0,filtersToggled:S}),onSubmit:e=>{e.preventDefault(),e.stopPropagation(),te(E,b)},children:[(0,L.jsx)(`div`,{className:yg(`masthead`),children:t.showSearch?(0,L.jsxs)(`div`,{className:yg(`searchForm`),children:[(0,L.jsxs)(`label`,{className:yg(`search`),children:[(0,L.jsx)(`span`,{className:yg(`searchIconText`),children:ie}),(0,L.jsx)(`div`,{className:yg(`searchIcon`),children:(0,L.jsx)(be,{size:`18`})}),(0,L.jsx)(`input`,{className:yg(`searchInput`),name:`q`,type:`search`,placeholder:t.placeholder,onChange:e=>{D(e.currentTarget.value)},autoComplete:`off`,value:E})]}),(0,L.jsxs)(`div`,{className:yg(`searchActions`),children:[(0,L.jsx)(_h,{type:`submit`,loading:_,fullWidth:!0,children:ie}),y&&(0,L.jsx)(`div`,{className:yg(`searchActionIcon`),children:(0,L.jsx)(Be,{type:`button`,title:ae,onClick:e=>{e.preventDefault(),e.stopPropagation(),C(!S)},children:(0,L.jsx)(xe,{size:20})})})]})]}):(0,L.jsx)(_g,{rank:`2`,size:`xs`,children:t.placeholder||O})}),(0,L.jsxs)(`div`,{className:yg(`grid`),children:[y&&(0,L.jsx)(`div`,{className:yg(`filters`),children:y&&Object.keys(d).map(t=>{let n=d[t];return(0,L.jsx)(`div`,{className:yg(`field`),children:(0,L.jsx)(bh,{label:n.label||t,children:(0,L.jsx)(Hg,{field:n,id:`external_field_${t}_filter`,value:b[t],onChange:n=>{x(r=>{let i=e(o({},r),{[t]:n});return te(E,i),i})}})})},t)})}),(0,L.jsxs)(`div`,{className:yg(`tableWrapper`),children:[(0,L.jsxs)(`table`,{className:yg(`table`),children:[(0,L.jsx)(`thead`,{className:yg(`thead`),children:(0,L.jsx)(`tr`,{className:yg(`tr`),children:ee.map(e=>(0,L.jsx)(`th`,{className:yg(`th`),style:{textAlign:`left`},children:e},e))})}),(0,L.jsx)(`tbody`,{className:yg(`tbody`),children:w.map((e,t)=>(0,L.jsx)(`tr`,{style:{whiteSpace:`nowrap`},className:yg(`tr`),onClick:()=>{n(l(p[t])),g(!1)},children:ee.map(t=>(0,L.jsx)(`td`,{className:yg(`td`),children:e[t]},t))},t))})]}),(0,L.jsx)(`div`,{className:yg(`loadingBanner`),children:(0,L.jsx)(T,{size:24})})]})]}),(0,L.jsx)(`div`,{className:yg(`footerContainer`),children:(0,L.jsx)(ne,{items:w})})]})})]})},Cg=({field:t,onChange:n,id:r,name:i=r,label:a,labelIcon:c,Label:l,readOnly:u})=>{let d=cg(i),f=t,p=t,m=P(`field-external-selectdata`);return(0,I.useEffect)(()=>{p.adaptor&&console.error("Warning: The `adaptor` API is deprecated. Please use updated APIs on the `external` field instead. This will be a breaking change in a future release.")},[]),t.type===`external`?(0,L.jsx)(l,{label:a||i,icon:c||(0,L.jsx)(oe,{size:16}),el:`div`,children:(0,L.jsx)(Sg,{name:i,field:e(o({},f),{placeholder:p.adaptor?.name?`Select from ${p.adaptor.name}`:f.placeholder||m,mapProp:p.adaptor?.mapProp||f.mapProp,mapRow:f.mapRow,fetchList:p.adaptor?.fetchList?()=>s(null,null,function*(){return yield p.adaptor.fetchList(p.adaptorParams)}):f.fetchList}),onChange:n,value:d,id:r,readOnly:u})}):null};c();var wg=a(`Input`,vh),Tg=({field:e,onChange:t,readOnly:n,id:r,name:i=r,label:a,labelIcon:o,Label:s})=>{let c=cg(i);return e.type!==`radio`||!e.options?null:(0,L.jsx)(s,{icon:o||(0,L.jsx)(je,{size:16}),label:a||i,readOnly:n,el:`div`,children:(0,L.jsx)(`div`,{className:wg(`radioGroupItems`),id:r,children:e.options.map(e=>(0,L.jsxs)(`label`,{className:wg(`radio`),children:[(0,L.jsx)(`input`,{type:`radio`,className:wg(`radioInput`),value:JSON.stringify({value:e.value}),name:i,onChange:e=>{t(JSON.parse(e.target.value).value)},disabled:n,checked:c===e.value}),(0,L.jsx)(`div`,{className:wg(`radioInner`),children:e.label||e.value?.toString()})]},e.label+e.value))})})};c();var Eg=a(`Input`,vh),Dg=({field:e,onChange:t,label:n,labelIcon:r,Label:i,id:a,name:o=a,readOnly:s})=>{let c=cg(o);return e.type!==`select`||!e.options?null:(0,L.jsx)(i,{label:n||o,icon:r||(0,L.jsx)(Ee,{size:16}),readOnly:s,children:(0,L.jsxs)(`div`,{className:Eg(`select`),children:[(0,L.jsx)(`select`,{id:a,title:n||o,className:Eg(`input`),disabled:s,onChange:e=>{t(JSON.parse(e.target.value).value)},value:JSON.stringify({value:c}),children:e.options.map(e=>(0,L.jsx)(`option`,{label:e.label,value:JSON.stringify({value:e.value})},e.label+JSON.stringify(e.value)))}),(0,L.jsx)(Ee,{size:18,className:Eg(`selectIcon`)})]})})};c();var Og=a(`Input`,vh),kg=({field:e,onChange:t,readOnly:n,id:r,name:i=r,label:a,labelIcon:o,Label:s})=>{let[c,l]=ug(i,t,{fallback:``});return(0,L.jsx)(s,{label:a||i,icon:o||(0,L.jsx)(Le,{size:16}),readOnly:n,children:(0,L.jsx)(`textarea`,{id:r,className:Og(`input`),autoComplete:`off`,name:i,value:c,onChange:e=>l(e.currentTarget.value),readOnly:n,tabIndex:n?-1:void 0,rows:5,placeholder:e.type===`textarea`?e.placeholder:void 0})})};c(),c();var Ag=(0,I.memo)(t=>(0,L.jsx)(ln,e(o({},t),{editor:null,menu:(0,L.jsx)(sn,{field:t.field,editor:null,editorState:null,readOnly:t.readOnly??!1}),children:(0,L.jsx)(`div`,{className:`rich-text`,dangerouslySetInnerHTML:{__html:t.content},contentEditable:!0})})));Ag.displayName=`EditorFallback`;var jg=(0,I.lazy)(()=>At(()=>import(`./Editor-44C53YAG-CkyqfNEl.js`).then(e=>({default:e.Editor})),__vite__mapDeps([13,1,2,3,7,9,12,5,4]))),Mg=({onChange:e,readOnly:t=!1,id:n,name:r=n,label:i,labelIcon:a,Label:s,field:c})=>{let l={onChange:e,content:cg(r),readOnly:t,field:c,id:n,name:r};return(0,L.jsx)(L.Fragment,{children:(0,L.jsx)(s,{label:i||r,icon:a||(0,L.jsx)(Le,{size:16}),readOnly:t,el:`div`,children:(0,L.jsx)(I.Suspense,{fallback:(0,L.jsx)(Ag,o({},l)),children:(0,L.jsx)(jg,o({},l))})})})};c(),c();var Ng=a(`ObjectField`,{ObjectField:`_ObjectField_c5reb_1`,"ObjectField-fieldset":`_ObjectField-fieldset_c5reb_10`}),Pg=({field:t,onChange:n,id:r,name:i=r,label:a,labelIcon:s,Label:c,readOnly:l})=>{let{localName:u=i}=$h(),d=Dh(),f=F(e=>e.permissions.getPermissions({item:e.selectedItem}).edit),p=()=>tg(d.getState(),i)??{};return t.type!==`object`||!t.objectFields?null:(0,L.jsx)(c,{label:a||i,icon:s||(0,L.jsx)(Se,{size:16}),el:`div`,readOnly:l,children:(0,L.jsx)(`div`,{className:Ng(),children:(0,L.jsx)(`fieldset`,{className:Ng(`fieldset`),children:Object.keys(t.objectFields).map(a=>{let s=t.objectFields[a],c=`${u}.${a}`;return(0,L.jsx)(ng,{id:`${r}_${a}`,name:i,subName:a,localName:u,field:s,forceReadOnly:!f,onChange:(t,r,i)=>{let a=p();a[i]!==t&&n(e(o({},a),{[i]:t}),r)}},c)})})})})};c();var Fg=()=>{if(I.useId!==void 0)return I.useId();let[e]=(0,I.useState)(O());return e},Ig=a(`Input`,vh),Lg=a(`InputWrapper`,vh),Rg={array:sg,external:Cg,object:Pg,select:Dg,textarea:kg,radio:Tg,text:fg,number:fg,richtext:Mg};function zg(t){let n=F(e=>e.dispatch),r=F(e=>e.overrides),i=F(kn(e=>e.selectedItem?.readOnly)),a=(0,I.useContext)(Qh),{id:s,Label:c=xh}=t,l=t.field,u=l.label,d=l.labelIcon,f=Fg(),p=s||f,m=(0,I.useMemo)(()=>e(o({},r.fieldTypes),{custom:r.fieldTypes?.custom,array:r.fieldTypes?.array||Rg.array,external:r.fieldTypes?.external||Rg.external,object:r.fieldTypes?.object||Rg.object,select:r.fieldTypes?.select||Rg.select,textarea:r.fieldTypes?.textarea||Rg.textarea,radio:r.fieldTypes?.radio||Rg.radio,text:r.fieldTypes?.text||Rg.text,number:r.fieldTypes?.number||Rg.number,richtext:r.fieldTypes?.richtext||Rg.richtext}),[r]),h=l.type===`custom`||!!r.fieldTypes?.[l.type],g=t.name??p,_=Dh(),[v,y]=ug(g,(0,I.useMemo)(()=>h?(e,n)=>{var r;(r=t.onChange)==null||r.call(t,e,n),_.setState(fh(_.getState(),g,e))}:t.onChange,[h,t.onChange,g,_]),{tracked:h}),b=(0,I.useMemo)(()=>e(o({},t),{field:l,label:u,labelIcon:d,Label:c,id:p,value:v,onChange:y}),[t,l,u,d,c,p,v,y]),x=(0,I.useCallback)(e=>{b.name&&(e.target.nodeName===`INPUT`||e.target.nodeName===`TEXTAREA`)&&(e.stopPropagation(),n({type:`setUi`,ui:{field:{focus:b.name}}}))},[b.name]),S=(0,I.useCallback)(e=>{`name`in e.target&&n({type:`setUi`,ui:{field:{focus:null}}})},[]),C=(0,I.useMemo)(()=>l.type!==`custom`&&l.type!==`slot`?Rg[l.type]:e=>null,[l.type]),w=l.type===`custom`?l.key:void 0,T=(0,I.useMemo)(()=>{if(l.type===`custom`&&!m[l.type])return l.render?l.render:null;if(l.type!==`slot`)return m[l.type]},[l.type,w,m]),{visible:ee=!0}=t.field;if(!ee||l.type===`slot`)return null;if(!T)throw Error(`Field type for ${l.type} did not exist.`);return(0,L.jsx)(Qh.Provider,{value:{readOnlyFields:a.readOnlyFields||i||{},localName:a.localName??b.name},children:(0,L.jsx)(`div`,{className:Lg(),onFocus:x,onBlur:S,onClick:e=>{e.stopPropagation()},children:(0,L.jsx)(T,e(o({},b),{children:(0,L.jsx)(C,o({},b))}))})})}function Bg(e){return(0,L.jsx)(zg,o({},e))}function Vg(t){var n=t,{value:i}=n,a=r(n,[`value`]);let s=(0,I.useMemo)(()=>t=>(0,L.jsx)(`div`,e(o({},t),{className:Ig({readOnly:a.readOnly})})),[a.readOnly]),c=Dh(),l=(0,I.useCallback)(e=>{a.id&&(c.setState({[a.id]:e}),a.onChange(e))},[c,a.onChange,a.id]);return(0,I.useEffect)(()=>{a.id&&c.setState({[a.id]:i})},[a.id,i,c]),(0,L.jsx)(zg,e(o({},a),{onChange:l,Label:s}))}function Hg(t){let n=Fg();return t.field.type===`slot`?null:(0,L.jsx)(Eh.Provider,{value:{[n]:t.value},children:(0,L.jsx)(Vg,e(o({},t),{id:n}))})}c(),c(),c(),c();var Ug={DraggableComponent:`_DraggableComponent_1627v_1`,"DraggableComponent-overlayWrapper":`_DraggableComponent-overlayWrapper_1627v_6`,"DraggableComponent-overlay":`_DraggableComponent-overlay_1627v_6`,"DraggableComponent-loadingOverlay":`_DraggableComponent-loadingOverlay_1627v_38`,"DraggableComponent--hover":`_DraggableComponent--hover_1627v_54`,"DraggableComponent--isSelected":`_DraggableComponent--isSelected_1627v_72`,"DraggableComponent-actionsOverlay":`_DraggableComponent-actionsOverlay_1627v_89`,"DraggableComponent-actions":`_DraggableComponent-actions_1627v_89`,"DraggableComponent-actionsAction":`_DraggableComponent-actionsAction_1627v_111`};c();function Wg(e){let t={x:0,y:0},n=e;for(;n&&n!==document.documentElement;){let e=n.parentElement;e&&(t.x+=e.scrollLeft,t.y+=e.scrollTop),n=e}return t}c();var Gg=(0,I.createContext)(null),Kg=(0,I.createContext)(ce(()=>({zoneDepthIndex:{},nextZoneDepthIndex:{},areaDepthIndex:{},nextAreaDepthIndex:{},draggedItem:null,previewIndex:{},enabledIndex:{},hoveringComponent:null,registerRootVirtualizer:()=>{},unregisterRootVirtualizer:()=>{},scrollToComponent:()=>!1}))),qg=({children:e,store:t})=>(0,L.jsx)(Kg.Provider,{value:t,children:e}),Jg=({children:e,value:t})=>{let n=F(e=>e.dispatch),r=(0,I.useCallback)(e=>{n({type:`registerZone`,zone:e})},[n]),i=(0,I.useMemo)(()=>o({registerZone:r},t),[t]);return(0,L.jsx)(L.Fragment,{children:i&&(0,L.jsx)(Gg.Provider,{value:i,children:e})})};c();var Yg=(e,t=[])=>{let n=N();return(0,I.useCallback)(()=>{let t=()=>{},r=n=>{n?e(!1):(setTimeout(()=>{e(!0)},0),t&&t())},i=n.getState().state.ui.isDragging;return r(i),i&&(t=n.subscribe(e=>e.state.ui.isDragging,e=>{r(e)})),t},[n,...t])};c(),c(),c();var Xg=()=>{if(typeof window>`u`)return;let e=document.querySelector(`#preview-frame`);return e?.tagName===`IFRAME`?e.contentDocument||document:e?.ownerDocument||document};c(),c();var Zg=e=>typeof CSS<`u`&&typeof CSS.escape==`function`?CSS.escape(e):e,Qg=e=>`[data-puck-component="${Zg(e)}"]`,$g=e=>`[data-puck-dropzone="${Zg(e)}"]`,e_={duration:250,easing:`ease`},t_=10,n_=e=>e.defaultView?.matchMedia(`(prefers-reduced-motion: reduce)`).matches??!1,r_=(e,{zones:t,itemId:n,targetZone:r,getExpectedOrder:i,initialExpectedOrder:a=[]},o)=>{let s=new Set(a),c=0,l=()=>{let a=e.querySelector($g(r)),u=i(),d=n??u.find(e=>!s.has(e)),f=d?a?.querySelector(`:scope > ${Qg(d)}:not([data-dnd-dragging]):not([data-dnd-placeholder])`)??null:null,p=a?Array.from(a.querySelectorAll(`:scope > [data-puck-component]:not([data-dnd-dragging]):not([data-dnd-placeholder])`)).map(e=>e.getAttribute(`data-puck-component`)):[],m=new Set(p),h=u.filter(e=>m.has(e)),g=p.length===h.length&&p.every((e,t)=>e===h[t]),_=t.every(t=>t===r||!d||!e.querySelector(`${$g(t)} > ${Qg(d)}`));if((!f||!g||!_)&&c<t_){c++,requestAnimationFrame(l);return}o(f)};requestAnimationFrame(l)},i_=(e,t)=>{let n={x:0,y:0,scaleX:1,scaleY:1},r=e.ownerDocument.defaultView?.frameElement;for(;r&&r!==t;){let e=r.getBoundingClientRect(),t=r.offsetWidth?e.width/r.offsetWidth:1,i=r.offsetHeight?e.height/r.offsetHeight:1;n.x+=e.left,n.y+=e.top,n.scaleX*=t,n.scaleY*=i,r=r.ownerDocument.defaultView?.frameElement}return n},a_=(e,t)=>{let n=e.getBoundingClientRect();if(e.ownerDocument===t)return n;let r=i_(e,t.defaultView?.frameElement??null);return{left:n.left*r.scaleX+r.x,top:n.top*r.scaleY+r.y,width:n.width*r.scaleX,height:n.height*r.scaleY}},o_=({element:e,feedbackElement:t,placeholder:n,translate:r})=>{if(n_(t.ownerDocument))return;let i=n??e,a={frameTransform:t.ownerDocument===i.ownerDocument?null:void 0},o=new tl(t,a),s=new tl(i,a),c=Ic(Dc(t).translate)??r,l={x:c.x-(o.center.x-s.center.x),y:c.y-(o.center.y-s.center.y)};return t.setAttribute(`data-dnd-dropping`,``),t.animate({translate:[`${c.x}px ${c.y}px 0`,`${l.x}px ${l.y}px 0`]},e_).finished.catch(()=>void 0).then(()=>{t.removeAttribute(`data-dnd-dropping`)})},s_=({feedbackElement:t,itemId:n,targetZone:r,getExpectedOrder:i})=>{let a=t.ownerDocument,s=Xg()??a;if(n_(a))return;let c=t.getBoundingClientRect(),l=i(),u=t.cloneNode(!0);u.removeAttribute(`id`),u.removeAttribute(`popover`),u.removeAttribute(`data-puck-component`),u.removeAttribute(`data-puck-dnd`),u.removeAttribute(`data-dnd-dragging`),u.setAttribute(`inert`,`true`),Object.assign(u.style,{position:`fixed`,left:`${c.left}px`,top:`${c.top}px`,width:`${c.width}px`,height:`${c.height}px`,margin:`0`,overflow:`hidden`,pointerEvents:`none`,transform:`none`,transition:`none`,translate:`none`,zIndex:`2147483647`});let d=s.createElement(`style`);d.textContent=`
    ${n?`${Qg(n)} { visibility: hidden !important; }`:``}
    [data-puck-overlay] { opacity: 0 !important; }
  `,s.head.appendChild(d),a.body.appendChild(u);let f=()=>{u.remove(),d.remove()};r_(s,{zones:[r],itemId:n,targetZone:r,getExpectedOrder:i,initialExpectedOrder:l},t=>{if(!t){f();return}let r=t.getAttribute(`data-puck-component`);!n&&r&&(d.textContent+=`
          ${Qg(r)} { visibility: hidden !important; }
        `);let i=a_(t,a);u.animate({left:[`${c.left}px`,`${i.left}px`],top:[`${c.top}px`,`${i.top}px`],width:[`${c.width}px`,`${i.width}px`],height:[`${c.height}px`,`${i.height}px`]},e(o({},e_),{fill:`forwards`})).finished.catch(()=>void 0).then(f)})},c_=(t,n)=>{let r=t.source.manager?.dragOperation;if(!((r?.canceled??!1)||r?.target?.type===`void`)&&n){s_(e(o({},n),{feedbackElement:t.feedbackElement}));return}return o_(t)};c();var l_=(e,t)=>e.indexes.zones[t]?.contentIds??[],u_=(e,t)=>{let n=N();return(0,I.useCallback)(r=>{let i=Object.values(e.getState().previewIndex??{}),a=t?i.find(e=>e?.props.id===t&&!e.ghost):i.find(e=>e?.type===`insert`),o=t?a?.linePlaceholder||a?.type===`insert`:!!a;return c_(r,a&&o?{itemId:a.type===`move`?t:void 0,targetZone:a.zone,getExpectedOrder:()=>l_(n.getState().state,a.zone)}:void 0)},[n,e,t])};c();function d_(e,t){typeof e==`function`?e(t):e&&typeof e==`object`&&`current`in e&&(e.current=t)}function f_(e,t){e.forEach(e=>{d_(e,t)})}var p_=a(`DraggableComponent`,Ug),m_=100,h_=8,g_=h_*6.5,__=-(g_-8),v_=h_,y_=({label:e,children:t,parentAction:n})=>(0,L.jsxs)(Ke,{children:[(0,L.jsxs)(Ke.Group,{children:[n,e&&(0,L.jsx)(Ke.Label,{label:e})]}),(0,L.jsx)(Ke.Group,{children:t})]}),b_=({children:e})=>(0,L.jsx)(L.Fragment,{children:e}),x_=({children:t,depth:n,componentType:r,id:i,index:a,zoneCompound:s,isLoading:c=!1,isSelected:l=!1,debug:u,label:d,autoDragAxis:f,userDragAxis:p,inDroppableZone:m=!0,itemRef:h})=>{let g=F(e=>e.selectedItem?.props.id===i?e.zoomConfig.zoom:1),_=F(e=>e._experimentalFullScreenCanvas),v=F(e=>e.overrides),y=F(e=>e.dispatch),b=F(e=>e.iframe),x=(0,I.useRef)(0),S=(0,I.useContext)(Gg),[C,w]=(0,I.useState)({}),ee=(0,I.useCallback)((t,n)=>{var r;(r=S?.registerLocalZone)==null||r.call(S,t,n),w(r=>e(o({},r),{[t]:n}))},[w]),E=(0,I.useCallback)(e=>{var t;(t=S?.unregisterLocalZone)==null||t.call(S,e),w(t=>{let n=o({},t);return delete n[e],n})},[w]),D=Object.values(C).filter(Boolean).length>0,te=F(kn(e=>e.state.indexes.nodes[i]?.path)),ne=F(kn(e=>{let t=se({index:a,zone:s},e.state);return e.permissions.getPermissions({item:t})})),re=(0,I.useContext)(Kg),ie=N(),[ae,O]=(0,I.useState)(p||f),oe=(0,I.useMemo)(()=>qh(ae),[ae]),ce=u_(re,i),{ref:le,isDragging:ue,sortable:k}=Dm({id:i,index:a,group:s,type:`component`,data:{areaId:S?.areaId,zone:s,index:a,componentType:r,containsActiveZone:D,depth:n,path:te||[],inDroppableZone:m},collisionPriority:n,collisionDetector:oe,transition:{duration:200,easing:`cubic-bezier(0.2, 0, 0, 1)`},plugins:e=>[...e,Ku.configure({feedback:`clone`,dropAnimation:ce})]});(0,I.useEffect)(()=>{let e=re.getState().enabledIndex[s];k.droppable.disabled=!e,k.draggable.disabled=!ne.drag;let t=re.subscribe(e=>{k.droppable.disabled=!e.enabledIndex[s]});return A.current&&!ne.drag?(A.current.setAttribute(`data-puck-disabled`,``),()=>{var e;(e=A.current)==null||e.removeAttribute(`data-puck-disabled`),t()}):t},[ne.drag,s]);let[,de]=(0,I.useState)(0),A=(0,I.useRef)(null),fe=(0,I.useCallback)(e=>{le(e),A.current!==e&&(A.current=e,de(e=>e+1),h&&f_([h],e))},[h,le]),[pe,me]=(0,I.useState)();(0,I.useEffect)(()=>{me(b.enabled?A.current?.ownerDocument.body:A.current?.closest(`[data-puck-preview]`)??document.body)},[b.enabled]);let he=(0,I.useCallback)(()=>{if(!A.current)return;let e=A.current,t=e.getBoundingClientRect(),n=b.enabled?null:e.closest(`[data-puck-preview]`),r=(()=>{let t=e;for(;t&&t!==document.documentElement;){if(getComputedStyle(t).position===`fixed`)return!0;t=t.parentElement}return!1})(),i=n?.getBoundingClientRect(),a=n?Wg(n):{x:0,y:0},o=r?{x:0,y:0}:Wg(e),s=r?{x:0,y:0}:{x:o.x-a.x-(i?.left??0),y:o.y-a.y-(i?.top??0)};return{left:`${t.left+s.x}px`,top:`${t.top+s.y}px`,height:`${t.height}px`,width:`${t.width}px`,position:r?`fixed`:void 0}},[b.enabled]),[ge,_e]=(0,I.useState)(),ve=(0,I.useRef)(null),j=(0,I.useRef)(null),M=(0,I.useCallback)(()=>{_e(he()),h&&f_([h],A.current)},[he,h]),ye=(0,I.useCallback)(()=>{j.current??=requestAnimationFrame(()=>{j.current=null,M()})},[M]);(0,I.useEffect)(()=>()=>{j.current!=null&&(cancelAnimationFrame(j.current),j.current=null)},[]),(0,I.useEffect)(()=>{if(A.current){let e=new ResizeObserver(()=>{ye()});return e.observe(A.current),()=>{e.disconnect()}}},[ye,h]);let be=F(e=>e.nodes.registerNode),xe=F(e=>e.nodes.unregisterNode),Se=(0,I.useCallback)(()=>{Le(!1)},[]),Ce=(0,I.useCallback)(()=>{Le(!0)},[]),we=(0,I.useRef)({sync:()=>null,hideOverlay:()=>null,showOverlay:()=>null});(0,I.useLayoutEffect)(()=>{we.current.sync=M,we.current.hideOverlay=Se,we.current.showOverlay=Ce},[Se,Ce,M]),(0,I.useEffect)(()=>(be(i,we.current),()=>{xe(i)}),[i,be,xe]);let Te=(0,I.useMemo)(()=>v.actionBar||y_,[v.actionBar]),Ee=(0,I.useMemo)(()=>v.componentOverlay||b_,[v.componentOverlay]),De=(0,I.useCallback)(e=>{re.getState().draggedItem||(e.target.closest(`[data-puck-overlay-portal]`)||e.stopPropagation(),y(_?{type:`setUi`,ui:{itemSelector:l?null:{index:a,zone:s}}}:{type:`setUi`,ui:{itemSelector:{index:a,zone:s}}}))},[a,s,i,l,_]),Oe=(0,I.useCallback)(()=>{let{nodes:e,zones:t}=ie.getState().state.indexes,n=e[i],r=n?.parentId?e[n?.parentId]:null;if(!r||!n.parentId)return;let a=`${r.parentId}:${r.zone}`,o=t[a].contentIds.indexOf(n.parentId);y({type:`setUi`,ui:{itemSelector:{zone:a,index:o}}})},[S,te]),ke=(0,I.useCallback)(()=>{y({type:`duplicate`,sourceIndex:a,sourceZone:s})},[a,s]),Ae=(0,I.useCallback)(()=>{y({type:`remove`,index:a,zone:s})},[a,s]),[je,Me]=(0,I.useState)(!1),Fe=Ch(Kg,e=>e.hoveringComponent===i);(0,I.useEffect)(()=>{if(!A.current)return;let e=A.current,t=e=>{re.getState().draggedItem?Me(!!ue):Me(!0),e.stopPropagation()},n=e=>{e.stopPropagation(),Me(!1)};return e.setAttribute(`data-puck-component`,i),e.setAttribute(`data-puck-dnd`,i),e.style.position=`relative`,e.addEventListener(`click`,De),e.addEventListener(`mouseover`,t),e.addEventListener(`mouseout`,n),()=>{e.removeAttribute(`data-puck-component`),e.removeAttribute(`data-puck-dnd`),e.removeEventListener(`click`,De),e.removeEventListener(`mouseover`,t),e.removeEventListener(`mouseout`,n)}},[A.current,De,D,s,i,ue,m]);let[Ie,Le]=(0,I.useState)(!1),[Re,ze]=(0,I.useState)(!0),[Be,Ve]=(0,I.useTransition)();(0,I.useEffect)(()=>{Ve(()=>{je||Fe||l?(ye(),Le(!0),Ue(!1)):Le(!1)})},[je,Fe,l,b]);let[He,Ue]=(0,I.useState)(!1),We=Yg(e=>{e?Ve(()=>{M(),ze(!0)}):ze(!1)});(0,I.useEffect)(()=>{ue&&Ue(!0)},[ue]),(0,I.useEffect)(()=>{if(He)return We()},[He,We]),(0,I.useEffect)(()=>{if(!Re||!(l||ue))return;let e=A.current;if(!e)return;let t=e.ownerDocument,n=t.defaultView;if(!n)return;x.current=0,ye();let r=()=>ye(),i=()=>ye();t.addEventListener(`scroll`,r,!0),n.addEventListener(`resize`,i);let a=0,o=e=>{if(e-x.current>=m_){x.current=e;let t=A.current;if(t){let e=t.getBoundingClientRect(),n=ve.current;(!n||Math.abs(e.x-n.x)>.5||Math.abs(e.y-n.y)>.5||Math.abs(e.width-n.width)>.5||Math.abs(e.height-n.height)>.5)&&(ve.current=e,ye())}}a=requestAnimationFrame(o)};return a=requestAnimationFrame(o),()=>{t.removeEventListener(`scroll`,r,!0),n.removeEventListener(`resize`,i),cancelAnimationFrame(a)}},[Re,l,ue,ye]);let Ge=(0,I.useCallback)(e=>{if(e&&e.ownerDocument.defaultView){let t=e.getBoundingClientRect(),n=t.x<0,r=t.y<0;n&&(e.style.transformOrigin=`left top`,e.style.left=`0px`),r&&(e.style.top=`12px`,n||(e.style.transformOrigin=`right top`))}},[g]),qe=(0,I.useRef)(null);(0,I.useEffect)(()=>{Ge(qe.current)},[qe.current,Ge]),(0,I.useEffect)(()=>{if(p){O(p);return}if(A.current){let e=window.getComputedStyle(A.current);if(e.display===`inline`||e.display===`inline-block`){O(`x`);return}}O(f)},[A,p,f]);let Je=P(`action-selectparent`),Ye=P(`action-duplicate`),Xe=P(`action-delete`),Ze=(0,I.useMemo)(()=>S?.areaId&&S?.areaId!==`root`&&(0,L.jsx)(Ke.Action,{onClick:Oe,label:Je,children:(0,L.jsx)(Ne,{size:16})}),[S?.areaId,Je]),Qe=(0,I.useMemo)(()=>e(o({},S),{areaId:i,zoneCompound:s,index:a,depth:n+1,registerLocalZone:ee,unregisterLocalZone:E}),[S,i,s,a,n,ee,E]),$e=F(e=>e.currentRichText?.inlineComponentId===i?e.currentRichText:null),et=ne.duplicate||ne.delete;return(0,L.jsxs)(Jg,{value:Qe,children:[Re&&Ie&&(0,wt.createPortal)((0,L.jsxs)(`div`,{className:p_({isSelected:l,isDragging:ue,hover:je||Fe}),style:o({},ge),"data-puck-overlay":!0,children:[u,c&&(0,L.jsx)(`div`,{className:p_(`loadingOverlay`),children:(0,L.jsx)(T,{})}),(0,L.jsx)(`div`,{className:p_(`actionsOverlay`),style:{top:g_/g},children:(0,L.jsx)(`div`,{className:p_(`actions`),style:{transform:`scale(${1/g}`,top:__/g,right:0,paddingLeft:v_,paddingRight:v_},ref:qe,children:(0,L.jsxs)(Te,{parentAction:Ze,label:d,children:[$e&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(dn,{editor:$e.editor,field:$e.field,inline:!0,readOnly:!1}),et&&(0,L.jsx)(Ke.Separator,{})]}),ne.duplicate&&(0,L.jsx)(Ke.Action,{onClick:ke,label:Ye,children:(0,L.jsx)(Pe,{className:p_(`actionsAction`)})}),ne.delete&&(0,L.jsx)(Ke.Action,{onClick:Ae,label:Xe,children:(0,L.jsx)(tt,{className:p_(`actionsAction`)})})]})})}),(0,L.jsx)(`div`,{className:p_(`overlayWrapper`),children:(0,L.jsx)(Ee,{componentId:i,componentType:r,hover:je,isSelected:l,children:(0,L.jsx)(`div`,{className:p_(`overlay`)})})})]}),pe||document.body),t(fe)]})};c();var S_={DropZone:`_DropZone_wc2ks_1`,"DropZone--hasChildren":`_DropZone--hasChildren_wc2ks_11`,"DropZone--isAreaSelected":`_DropZone--isAreaSelected_wc2ks_24`,"DropZone--hoveringOverArea":`_DropZone--hoveringOverArea_wc2ks_25`,"DropZone--isRootZone":`_DropZone--isRootZone_wc2ks_25`,"DropZone-item":`_DropZone-item_wc2ks_39`,"DropZone-linePlaceholder":`_DropZone-linePlaceholder_wc2ks_43`,"DropZone-hitbox":`_DropZone-hitbox_wc2ks_55`,"DropZone--isEnabled":`_DropZone--isEnabled_wc2ks_63`,"DropZone--isAnimating":`_DropZone--isAnimating_wc2ks_74`};c();var C_=(e,{allow:t,disallow:n})=>{if(!e)return!0;let r=new Set(t),i=new Set(n);return n?(i.has(e)&&r.has(e)&&i.delete(e),!i.has(e)):!t||r.has(e)};c(),c();var w_={Drawer:`_Drawer_1n90m_1`,"Drawer-draggable":`_Drawer-draggable_1n90m_8`,"Drawer-draggableBg":`_Drawer-draggableBg_1n90m_12`,"DrawerItem-draggable":`_DrawerItem-draggable_1n90m_22`,"DrawerItem--disabled":`_DrawerItem--disabled_1n90m_38`,DrawerItem:`_DrawerItem_1n90m_22`,"Drawer--isDraggingFrom":`_Drawer--isDraggingFrom_1n90m_48`,"DrawerItem-name":`_DrawerItem-name_1n90m_72`};c(),c(),c();function T_(e,t){let n=setTimeout(e,t);return()=>clearTimeout(n)}function E_(e,t){let n=()=>performance.now(),r,i=0;return function(...a){let o=n(),s=this;o-i>=t?(e.apply(s,a),i=o):(r?.(),r=T_(()=>{e.apply(s,a),i=n()},t-(o-i)))}}c();var D_=class{constructor(e,t){this.scaleFactor=1,this.frameEl=null,this.frameRect=null,this.target=e,this.original=t,this.frameEl=document.querySelector(`iframe#preview-frame`),this.frameEl&&(this.frameRect=this.frameEl.getBoundingClientRect(),this.scaleFactor=this.frameRect.width/(this.frameEl.contentWindow?.innerWidth||1))}get x(){return this.original.x}get y(){return this.original.y}get global(){return document!==this.target.ownerDocument&&this.frameRect?{x:this.x*this.scaleFactor+this.frameRect.left,y:this.y*this.scaleFactor+this.frameRect.top}:this.original}get frame(){return document===this.target.ownerDocument&&this.frameRect?{x:(this.x-this.frameRect.left)/this.scaleFactor,y:(this.y-this.frameRect.top)/this.scaleFactor}:this.original}};c();var O_=typeof PointerEvent<`u`?PointerEvent:Event,k_=class extends O_{constructor(e,t){super(e,t),this._originalTarget=null,this.originalTarget=t.originalTarget}set originalTarget(e){this._originalTarget=e}get originalTarget(){return this._originalTarget}},A_=e=>e.sort((e,t)=>{let n=e.data,r=t.data;return n.depth>r.depth?1:r.depth>n.depth?-1:0}),j_=e=>{let t=e?.id;if(!e)return null;if(e.type===`component`){let n=e.data;t=n.containsActiveZone?null:n.zone}else if(e.type===`void`)return`void`;return t},M_=6,N_=(e,t)=>{let n=[],r=e.target.ownerDocument.elementsFromPoint(e.x,e.y),i=r.find(e=>e.getAttribute(`data-puck-preview`)),a=r.find(e=>e.getAttribute(`data-puck-drawer`));if(a&&(r=[a]),i){let t=Xg();t&&(r=t.elementsFromPoint(e.frame.x,e.frame.y))}if(r)for(let i=0;i<r.length;i++){let a=r[i],o=a.getAttribute(`data-puck-dropzone`),s=a.getAttribute(`data-puck-dnd`),c=a.hasAttribute(`data-puck-dnd-void`);if(M_&&(o||s)&&!c){let t=a.getBoundingClientRect(),n={left:t.left+M_,right:t.right-M_,top:t.top+M_,bottom:t.bottom-M_};if(e.frame.x<n.left||e.frame.x>n.right||e.frame.y>n.bottom||e.frame.y<n.top)continue}if(o){let e=t.registry.droppables.get(o);e&&n.push(e)}if(s){let e=t.registry.droppables.get(s);e&&n.push(e)}}return n},P_=(e,t)=>{let n=N_(e,t);if(n.length>0){let e=A_(n),r=t.dragOperation.source,i=e.findIndex(e=>e.id===r?.id),a=r?.id,o=[...e];a&&i>-1&&o.splice(i,1),o=o.filter(e=>{let t=e.data;if(a&&i>-1&&t.path.indexOf(a)>-1)return!1;if(e.type===`dropzone`){let t=e.data;if(!t.isDroppableTarget||t.areaId===a)return!1}else if(e.type===`component`&&!e.data.inDroppableZone)return!1;return!0}),o.reverse();let s=o[0];if(!s)return{zone:null,area:null};let c=s.data,l=`containsActiveZone`in c;return{zone:j_(s),area:l&&c.containsActiveZone?o[0].id:o[0]?.data.areaId}}return{zone:w,area:ve}},F_=({onChange:e},t)=>class extends _a{constructor(n,r){super(n),typeof window<`u`&&this.registerEffect(()=>{let r=E_(r=>{let i=new D_(r instanceof k_&&r.originalTarget||r.target,{x:r.clientX,y:r.clientY});document.elementsFromPoint(i.global.x,i.global.y).some(e=>e.id===t)&&e(P_(i,n),n)},50),i=e=>{r(e)};return document.body.addEventListener(`pointermove`,i,{capture:!0}),()=>{document.body.removeEventListener(`pointermove`,i,{capture:!0})}})}};c();var I_=({zones:e,itemId:t,targetZone:n,getExpectedOrder:r})=>{let i=Xg();if(!i||n_(i))return()=>{};let a=Array.from(new Set(e)).map(e=>`${$g(e)} > [data-puck-component]:not([data-dnd-dragging]):not([data-dnd-placeholder])`).join(`, `),o=()=>{let e=new Map;return i.querySelectorAll(a).forEach(n=>{let r=n.getAttribute(`data-puck-component`);r&&r!==t&&e.set(r,{el:n,rect:n.getBoundingClientRect()})}),e},s=o(),c=r();return()=>{r_(i,{zones:e,itemId:t,targetZone:n,getExpectedOrder:r,initialExpectedOrder:c},()=>{o().forEach(({el:e,rect:t},n)=>{let r=s.get(n)?.rect;if(!r)return;let i=r.x-t.x,a=r.y-t.y;Math.abs(i)<1&&Math.abs(a)<1||e.animate({translate:[`${i}px ${a}px 0`,`0px 0px 0`]},e_)})})}};c();var L_=(e,{isDraggingBetweenSlots:t=!1,isNewComponent:n=!1}={})=>e===`auto`?t||n?`static`:`fluid`:e;c(),c(),c();var R_=(e,t)=>{let n=e.indexes.nodes[t];if(!n)return;let r=`${n.parentId}:${n.zone}`;return{zone:r,index:e.indexes.zones[r].contentIds.indexOf(t)}};function z_(e,t,n=`force`,r=!1,i){return s(this,null,function*(){let a=yield t().resolveComponentData(e,n);if(!a.didChange&&!r)return;let o=R_(t().state,a.node.props.id);if(!o){console.warn(`Warning: Could not find component with id "${e.props.id}" to resolve its data. Component may have been removed or the id is invalid.`);return}t().dispatch({type:`replace`,data:S(a.node),destinationIndex:o.index,destinationZone:o.zone,ui:i})})}var B_=(t,n,r,i)=>s(null,null,function*(){let{getState:a}=i,s={type:`insert`,componentType:t,destinationIndex:r,destinationZone:n,id:O(t)},c=a().state,l=b(c,s,a()),u=a().dispatch;u(e(o({},s),{recordHistory:!0}));let d={index:r,zone:n};u({type:`setUi`,ui:{itemSelector:d}});let f=se(d,l);f&&(yield z_(f,a,`insert`))});c();var V_=(e,t,n,r)=>s(null,null,function*(){let i=r.getState().dispatch;i({type:`move`,sourceIndex:t.index,sourceZone:t.zone??w,destinationIndex:n.index,destinationZone:n.zone??w,recordHistory:!1});let a=r.getState().state.indexes.nodes[e]?.data;a&&(yield z_(a,r.getState,`move`))});c();function H_(e){function t(e){return e?e.getAttribute(`dir`)||t(e.parentElement):`ltr`}return e?t(e):`ltr`}c(),c(),c();var U_=(e,t,n)=>Math.max(t,Math.min(n,e)),W_=(e,t)=>{let n=U_(e.x,Math.min(t.x1,t.x2),Math.max(t.x1,t.x2)),r=U_(e.y,Math.min(t.y1,t.y2),Math.max(t.y1,t.y2));return Math.hypot(e.x-n,e.y-r)};c();var G_=e=>{let t=e.replace(/\[[^\]]*\]/g,` `).trim();return t&&t!==`none`?t.split(/\s+/).length:0},K_=(e,t,n=t.getComputedStyle(e))=>{let r=n.display,i=H_(e)===`rtl`;if(r===`flex`||r===`inline-flex`){let e=n.flexDirection;if(e.startsWith(`row`)){let t=e===`row-reverse`;return{axis:`x`,reversed:i?!t:t}}return{axis:`y`,reversed:e===`column-reverse`}}return(r===`grid`||r===`inline-grid`)&&(n.gridAutoFlow.startsWith(`column`)||G_(n.gridTemplateColumns)>1)?{axis:`x`,reversed:i}:{axis:`y`,reversed:!1}},q_=({axis:e,reversed:t})=>{let n=e===`x`,r=t?-1:1;return{horizontal:n,reversed:t,forward:r,start:e=>n?t?e.right:e.left:t?e.bottom:e.top,end:e=>n?t?e.left:e.right:t?e.top:e.bottom,isBefore:(e,t)=>r>0?e<=t:e>=t}},J_=(e,t,n)=>{let r=e.ownerDocument.defaultView;if(!r)return null;let i=new Map(n.map((e,t)=>[e,t])),a=Array.from(e.querySelectorAll(`:scope > [data-puck-component]:not([data-dnd-dragging]):not([data-dnd-placeholder])`)).map(e=>({index:i.get(e.getAttribute(`data-puck-component`)??``)??-1,el:e})).filter(e=>e.index!==-1).sort((e,t)=>e.index-t.index).map(({index:e,el:t})=>({index:e,rect:t.getBoundingClientRect()}));if(a.length===0)return 0;let{horizontal:o,reversed:s,start:c,end:l}=q_(K_(e,r)),u=(e,t,n,r=[n])=>{let i=1/0,a=-1/0;for(let e of r)i=Math.min(i,o?e.top:e.left),a=Math.max(a,o?e.bottom:e.right);return o?{index:e,x1:t,x2:t,y1:n.top,y2:n.bottom,laneStart:i,laneEnd:a}:{index:e,x1:n.left,x2:n.right,y1:t,y2:t,laneStart:i,laneEnd:a}},d=[],f=(e,t,n)=>{let r=n===`before`?c(t):l(t);return u(e,r,t)};for(let e=0;e<=a.length;e++){let t=a[e-1],n=a[e];if(!n)d.push(f(t.index+1,t.rect,`after`));else if(!t)d.push(f(n.index,n.rect,`before`));else if(n.index-t.index>1)d.push(f(t.index+1,t.rect,`after`)),d.push(f(n.index,n.rect,`before`));else if(s?l(t.rect)<c(n.rect):l(t.rect)>c(n.rect))d.push(f(n.index,n.rect,`before`)),d.push(f(n.index,t.rect,`after`));else{let e=(l(t.rect)+c(n.rect))/2;d.push(u(n.index,e,n.rect,[t.rect,n.rect]))}}let p=o?t.y:t.x,m=null,h=1/0,g=null,_=1/0;for(let e of d){let n=W_(t,e);n<h&&(h=n,m=e),p>=e.laneStart&&p<=e.laneEnd&&n<_&&(_=n,g=e)}return(g??m)?.index??null};c();var Y_=(e,t)=>{let n=document.querySelector(`iframe#preview-frame`);if(!n||e.ownerDocument!==n.contentDocument)return t;let r=n.getBoundingClientRect(),i=r.width/(n.contentWindow?.innerWidth||1);return i>0?{x:(t.x-r.left)/i,y:(t.y-r.top)/i}:t},X_=t=>{let n=N(),r=(0,I.useRef)(null),i=(0,I.useCallback)(e=>{let t=Xg()?.querySelector(`[data-puck-entry]`);e?t?.setAttribute(`data-puck-line-drag`,`true`):t?.removeAttribute(`data-puck-line-drag`)},[]),a=(0,I.useCallback)((e,t)=>{let r=Xg()?.querySelector($g(e));return r?J_(r,Y_(r,t.dragOperation.position.current),l_(n.getState().state,e)):null},[n]),s=(0,I.useCallback)(r=>{let{previewIndex:i={}}=t.getState(),a=Object.values(i).find(e=>e?.linePlaceholder);if(!a)return;let s=Xg()?.querySelector($g(a.zone));if(!s)return;let c=Y_(s,r.dragOperation.position.current),l=s.getBoundingClientRect();if(!(c.x>=l.left&&c.x<=l.right&&c.y>=l.top&&c.y<=l.bottom))return;let u=J_(s,c,l_(n.getState().state,a.zone));u!==null&&u!==a.index&&t.setState({previewIndex:e(o({},i),{[a.zone]:e(o({},a),{index:u})})})},[n,t]),c=(0,I.useCallback)(()=>{var e;(e=r.current)==null||e.call(r),r.current=null},[]),l=(0,I.useCallback)(e=>{c();let t=Xg();if(!t)return;let n=null,i=()=>{n===null&&(n=requestAnimationFrame(()=>{n=null,s(e)}))};t.addEventListener(`scroll`,i,{capture:!0,passive:!0}),r.current=()=>{n!==null&&cancelAnimationFrame(n),t.removeEventListener(`scroll`,i,{capture:!0})}},[c,s]);return(0,I.useEffect)(()=>c,[c]),{getTargetIndex:a,setActive:i,startScrollTracking:l,stopScrollTracking:c,update:s}},Z_=(0,I.createContext)({dragListeners:{}});function Q_(t,n,r=[]){let{setDragListeners:i}=(0,I.useContext)(Z_);(0,I.useEffect)(()=>{i&&i(r=>e(o({},r),{[t]:[...r[t]||[],n]}))},r)}var $_=100,ev=e=>{let t=(0,I.useRef)(null);return(0,I.useCallback)(n=>{Gh.setState({fallbackEnabled:!1});let r=O();t.current=r,setTimeout(()=>{t.current===r&&(Gh.setState({fallbackEnabled:!0}),n.collisionObserver.forceUpdate(!0))},e)},[])},tv=({children:t,disableAutoScroll:n,behavior:r=`auto`})=>{let i=F(e=>e.dispatch),a=F(e=>e.instanceId),s=N(),c=(0,I.useRef)(null),l=ev(100),[u]=(0,I.useState)(()=>{let e=new Map;return ce(()=>({zoneDepthIndex:{},nextZoneDepthIndex:{},areaDepthIndex:{},nextAreaDepthIndex:{},draggedItem:null,previewIndex:{},enabledIndex:{},hoveringComponent:null,registerRootVirtualizer:(t,n)=>{e.set(t,n)},unregisterRootVirtualizer:t=>{e.delete(t)},scrollToComponent:t=>{let n=Array.from(e.values());if(n.length>0)for(let e of n){let n=e.resolveIndex(t);n<0||e.virtualizer.scrollToIndex(n,{behavior:`auto`,align:`auto`})}else(Xg()?.querySelector(Qg(t)))?.scrollIntoView({behavior:`smooth`})}}))}),d=(0,I.useCallback)(e=>{let{zoneDepthIndex:t={},areaDepthIndex:n={}}=u.getState()||{},r=Object.keys(t).length>0,i=Object.keys(n).length>0,a=!1,o=!1;return(e.zone&&!t[e.zone]||!e.zone&&r)&&(a=!0),(e.area&&!n[e.area]||!e.area&&i)&&(o=!0),{zoneChanged:a,areaChanged:o}},[u]),f=(0,I.useCallback)((e,t)=>{let{zoneChanged:n,areaChanged:r}=d(e);(n||r)&&(u.setState({zoneDepthIndex:e.zone?{[e.zone]:!0}:{},areaDepthIndex:e.area?{[e.area]:!0}:{}}),l(t),setTimeout(()=>{t.collisionObserver.forceUpdate(!0)},50),c.current=null)},[u]),p=km(f,$_),m=()=>{p.cancel(),c.current=null};(0,I.useEffect)(()=>{},[]);let[h]=(0,I.useState)(()=>[...n?Vd.plugins.filter(e=>e!==md):Vd.plugins,F_({onChange:(e,t)=>{let n=u.getState(),{zoneChanged:r,areaChanged:i}=d(e),a=t.dragOperation.status.dragging;if(i||r){let t={},n={};e.zone&&(t={[e.zone]:!0}),e.area&&(n={[e.area]:!0}),u.setState({nextZoneDepthIndex:t,nextAreaDepthIndex:n})}if(e.zone!==`void`&&n?.zoneDepthIndex.void){f(e,t);return}if(i){if(a){let n=c.current;n&&n.area===e.area&&n.zone===e.zone||(m(),p(e,t),c.current=e)}else m(),f(e,t);return}r&&f(e,t),m()}},a)]),g=Fh(),[_,v]=(0,I.useState)({}),y=(0,I.useRef)(null),b=(0,I.useRef)(void 0),{getTargetIndex:x,setActive:S,startScrollTracking:C,stopScrollTracking:w,update:T}=X_(u),ee=(0,I.useMemo)(()=>({mode:`edit`,areaId:`root`,depth:0}),[]);return(0,L.jsx)(Z_.Provider,{value:{dragListeners:_,setDragListeners:v},children:(0,L.jsx)(jf,{plugins:h,sensors:g,onDragEnd:(t,n)=>{w(),(Xg()?.querySelector(`[data-puck-entry]`))?.removeAttribute(`data-puck-dragging`);let{source:r,target:a}=t.operation;if(!r){S(!1),u.setState({draggedItem:null});return}let{zone:c,index:l}=r.data,{previewIndex:d={}}=u.getState()||{},f=Object.values(d).find(e=>e?.props.id===r.id&&!e.ghost)??null,p=!t.canceled&&a?.type!==`void`&&f?.linePlaceholder?I_({zones:b.current?[b.current.zone,f.zone]:[f.zone],itemId:f.type===`move`?f.props.id:void 0,targetZone:f.zone,getExpectedOrder:()=>l_(s.getState().state,f.zone)}):null,m=()=>{var r,d;if(S(!1),u.setState({draggedItem:null}),t.canceled||a?.type===`void`){u.setState({previewIndex:{}}),(r=_.dragend)==null||r.forEach(e=>{e(t,n)}),i({type:`setUi`,ui:{itemSelector:null,isDragging:!1}});return}let m=f&&f.linePlaceholder&&b.current&&f.zone===b.current.zone&&f.index>b.current.index?f.index-1:f?.index??l;f&&(u.setState({previewIndex:{}}),f.type===`insert`?B_(f.componentType,f.zone,f.index,s):b.current&&V_(f.props.id,b.current,e(o({},f),{index:m}),s),p?.());let h=b.current?.zone!==f?.zone||b.current?.index!==m;i({type:`setUi`,ui:{itemSelector:f?{index:m,zone:f.zone}:{index:l,zone:c},isDragging:!1},recordHistory:h}),(d=_.dragend)==null||d.forEach(e=>{e(t,n)})},h;h=er(()=>{r.status===`idle`&&(m(),h?.())})},onDragMove:(e,t)=>{var n;T(t),(n=_.dragmove)==null||n.forEach(n=>{n(e,t)})},onDragOver:(e,t)=>{var n;if(e.preventDefault(),!u.getState()?.draggedItem)return;m();let{source:i,target:a}=e.operation;if(!a||!i||a.type===`void`)return;let[o]=i.id.split(`:`),[c]=a.id.split(`:`),l=i.data,d=l.zone,f=l.index,p=``,h=0;if(a.type===`component`){let e=a.data;p=e.zone;let n=t.collisionObserver.collisions[0]?.data;h=Yh({position:Jh(n?.direction,H_(a.element)),sourceIndex:f,targetIndex:e.index,isSameZone:d===p})}else p=a.id.toString(),h=0;let g=s.getState().state.indexes.nodes[a.id]?.path||[];if(!(c===o||g.find(e=>{let[t]=e.split(`:`);return t===o}))){if(y.current===`new`){let e=L_(r,{isNewComponent:!0})===`static`;e&&(h=x(p,t)??h),S(e),u.setState({previewIndex:{[p]:{componentType:l.componentType,type:`insert`,index:h,zone:p,element:i.element,props:{id:i.id.toString()},linePlaceholder:e}}})}else{b.current||={zone:l.zone,index:l.index};let e=se(b.current,s.getState().state);if(e){let n=b.current.zone,a=n!==p,o=L_(r,{isDraggingBetweenSlots:a})===`static`;o&&(h=x(p,t)??h),S(o);let s={[p]:{componentType:l.componentType,type:`move`,index:h,zone:p,props:e.props,element:i.element,linePlaceholder:o}};if(o&&a){let t=u.getState().previewIndex[n],r=b.current.index;t&&!t.linePlaceholder&&(r=t.index),s[n]={componentType:l.componentType,type:`move`,index:r,zone:n,props:e.props,element:i.element,ghost:!0}}u.setState({previewIndex:s})}}(n=_.dragover)==null||n.forEach(n=>{n(e,t)})}},onDragStart:(e,t)=>{var n;r!==`fluid`&&C(t);let{source:i}=e.operation;if(i?.type===`component`){let e=i.data,t={zone:e.zone,index:e.index};b.current=t;let n=se(t,s.getState().state);if(n){let t=L_(r)===`static`;S(t),u.setState({previewIndex:{[e.zone]:{componentType:e.componentType,type:`move`,index:e.index,zone:e.zone,props:n.props,element:i.element,linePlaceholder:t}}})}}(n=_.dragstart)==null||n.forEach(n=>{n(e,t)})},onBeforeDragStart:e=>{let t=e.operation.source?.type===`drawer`;y.current=t?`new`:`existing`,b.current=void 0,u.setState({draggedItem:e.operation.source}),s.getState().selectedItem?.props.id===e.operation.source?.id?i({type:`setUi`,ui:{isDragging:!0},recordHistory:!1}):i({type:`setUi`,ui:{itemSelector:null,isDragging:!0},recordHistory:!1}),(Xg()?.querySelector(`[data-puck-entry]`))?.setAttribute(`data-puck-dragging`,`true`),S(!1)},children:(0,L.jsx)(qg,{store:u,children:(0,L.jsx)(Jg,{value:ee,children:t})})})})},nv=({children:e,disableAutoScroll:t,behavior:n})=>F(e=>e.status)===`LOADING`?e:(0,L.jsx)(tv,{disableAutoScroll:t,behavior:n,children:e}),rv=a(`Drawer`,w_),iv=a(`DrawerItem`,w_),av=({children:e,name:t,label:n,dragRef:r,isDragDisabled:i})=>{let a=(0,I.useMemo)(()=>e||(({children:e})=>(0,L.jsx)(`div`,{className:iv(`default`),children:e})),[e]);return(0,L.jsx)(`div`,{className:iv({disabled:i}),ref:r,onMouseDown:e=>e.preventDefault(),"data-testid":r?`drawer-item:${t}`:``,"data-puck-drawer-item":!0,children:(0,L.jsx)(a,{name:t,children:(0,L.jsx)(`div`,{className:iv(`draggableWrapper`),children:(0,L.jsxs)(`div`,{className:iv(`draggable`),children:[(0,L.jsx)(`div`,{className:iv(`name`),children:n??t}),(0,L.jsx)(`div`,{className:iv(`icon`),children:(0,L.jsx)(Ah,{})})]})})})})},ov=({children:e,name:t,label:n,id:r,isDragDisabled:i})=>{let a=u_((0,I.useContext)(Kg)),{ref:o}=Ff({id:r,data:{componentType:t},disabled:i,type:`drawer`,plugins:[Ku.configure({dropAnimation:a})]});return(0,L.jsxs)(`div`,{className:rv(`draggable`),children:[(0,L.jsx)(`div`,{className:rv(`draggableBg`),children:(0,L.jsx)(av,{name:t,label:n,children:e})}),(0,L.jsx)(`div`,{className:rv(`draggableFg`),children:(0,L.jsx)(av,{name:t,label:n,dragRef:o,isDragDisabled:i,children:e})})]})},sv=({name:e,children:t,id:n,label:r,index:i,isDragDisabled:a})=>{let o=n||e,[s,c]=(0,I.useState)(O(o));return i!==void 0&&console.error("Warning: The `index` prop on Drawer.Item is deprecated and no longer required."),Q_(`dragend`,()=>{c(O(o))},[o]),(0,L.jsx)(`div`,{children:(0,L.jsx)(ov,{name:e,label:r,id:s,isDragDisabled:a,children:t})},s)},cv=({children:e,droppableId:t,direction:n})=>{t&&console.error("Warning: The `droppableId` prop on Drawer is deprecated and no longer required."),n&&console.error("Warning: The `direction` prop on Drawer is deprecated and no longer required to achieve multi-directional dragging.");let r=Fg(),{ref:i}=up({id:r,type:`void`,collisionPriority:0});return(0,L.jsx)(`div`,{className:rv(),ref:i,"data-puck-dnd":r,"data-puck-drawer":!0,"data-puck-dnd-void":!0,children:e})};cv.Item=sv,c();var lv=(e,t)=>e.getState().state.indexes.zones[t].contentIds.length,uv=({zoneCompound:e,userMinEmptyHeight:t,ref:n})=>{let r=N(),[i,a]=(0,I.useState)(0),[o,s]=(0,I.useState)(!1),{draggedItem:c,isZone:l}=Ch(Kg,t=>({draggedItem:t.draggedItem?.data.zone===e?t.draggedItem:null,isZone:t.draggedItem?.data.zone===e})),u=(0,I.useRef)(0),d=Yg(t=>{if(t){let t=lv(r,e);if(a(0),t||u.current===0){s(!1);return}let n=r.getState().selectedItem,i=r.getState().state.indexes.zones,o=r.getState().nodes;o.setOverlayVisible(n?.props.id,!1),setTimeout(()=>{let t=i[e]?.contentIds||[];o.syncNodes(t),n&&setTimeout(()=>{o.syncNode(n.props.id),o.setOverlayVisible(n.props.id,!0)},200),s(!1)},100)}},[r,i,e]);(0,I.useEffect)(()=>{if(c&&n.current&&l){let t=n.current.getBoundingClientRect();return u.current=lv(r,e),a(t.height),s(!0),d()}},[n.current,c,d]);let f=isNaN(Number(t))?t:`${t}px`;return[i?`${i}px`:f,o]};c(),c();function dv(e,t){let n=Nf();return(0,I.useCallback)((...t)=>s(null,null,function*(){return yield n?.renderer.rendering,e(...t)}),[...t,n])}var fv=(e,t)=>{let n=(0,I.useContext)(Kg),r=Ch(Kg,e=>e.previewIndex[t]),i=F(e=>e.state.ui.isDragging),[a,o]=(0,I.useState)(e),[s,c]=(0,I.useState)(r),l=dv((e,t,n,r,i,a)=>{(!n||i)&&(t&&!t.linePlaceholder?o(ue(e.filter(e=>e!==t.props.id),t.index,t.props.id)):o(i&&!a?e.filter(e=>e!==r):e),c(t))},[]);return(0,I.useEffect)(()=>{let t=n.getState(),a=t.draggedItem?.id,o=Object.values(t.previewIndex||{}),s=o.length>0,c=o.some(e=>e?.linePlaceholder);l(e,r,i,a,s,c)},[e,r,i]),[a,s]};c();var pv=`dynamic`,mv=`x`,hv=`y`,gv=(e,t)=>{let n=F(e=>e.status),[r,i]=(0,I.useState)(t||hv),a=(0,I.useCallback)(()=>{if(e.current){let t=window.getComputedStyle(e.current);t.display===`grid`?i(pv):t.display===`flex`&&t.flexDirection===`row`?i(mv):i(hv)}},[e.current]);return(0,I.useEffect)(()=>{let e=()=>{a()};return window.addEventListener(`viewportchange`,e),()=>{window.removeEventListener(`viewportchange`,e)}},[]),(0,I.useEffect)(a,[n,t]),[r,a]};c();var _v=({componentId:e,zone:t})=>{let n=F(e=>e.config),r=F(e=>e.metadata),i=F(kn(n=>{let r=n.state.indexes;return(r.zones[`${e}:${t}`]?.contentIds??[]).map(e=>r.nodes[e].flatData)}));return(0,L.jsx)(xn,{content:i,zone:t,config:n,metadata:r})};c();function vv(e,t,n,r,i){let a=(0,I.useRef)(null),s=(0,I.useRef)(null),c=(0,I.useRef)(t.props),l=(0,I.useMemo)(()=>pn(n,r,i),[n,r,i]),u=(0,I.useMemo)(()=>{let n=(t.type===`root`?e.root:e.components?.[t.type])?.fields??{},r=a.current!==l,i,u=!1;if(!s.current||r)for(let e in t.props)n[e]?.type===`slot`&&(u=!0);else{i=[`id`];let e=new Set([...Object.keys(t.props),...Object.keys(s.current)]);for(let r of e)t.props[r]!==s.current[r]&&(i.push(r),n[r]?.type===`slot`&&(u=!0))}let d=h(t,l,e,!1,u,i).props;return s.current=t.props,a.current=l,c.current=i?o(o({},c.current),d):d,c.current},[e,t,l]);return(0,I.useMemo)(()=>o(o({},t.props),u),[t.props,u])}c(),c(),c();var yv=(e,t={})=>{if(!e)return;let{disableDrag:n=!1,disableDragOnFocus:r=!0}=t,i=e=>{e.stopPropagation()};e.addEventListener(`mouseover`,i,{capture:!0});let a=()=>{setTimeout(()=>{e.addEventListener(`pointerdown`,i,{capture:!0})},200)},o=()=>{e.removeEventListener(`pointerdown`,i,{capture:!0})};return n?e.addEventListener(`pointerdown`,i,{capture:!0}):r&&(e.addEventListener(`focus`,a,{capture:!0}),e.addEventListener(`blur`,o,{capture:!0})),e.setAttribute(`data-puck-overlay-portal`,`true`),()=>{e.removeEventListener(`mouseover`,i,{capture:!0}),n?e.removeEventListener(`pointerdown`,i,{capture:!0}):r&&(e.removeEventListener(`focus`,a,{capture:!0}),e.removeEventListener(`blur`,o,{capture:!0})),e.removeAttribute(`data-puck-overlay-portal`)}};c();var bv=a(`InlineTextField`,{InlineTextField:`_InlineTextField_104qp_1`}),xv=(0,I.memo)(({propPath:t,componentId:n,value:r,isReadOnly:i,opts:a={}})=>{let c=(0,I.useRef)(null),l=N(),u=a.disableLineBreaks??!1;(0,I.useEffect)(()=>{let i=l.getState(),a=i.state.indexes.nodes[n].data;if(!i.getComponentConfig(a.type))throw Error(`InlineTextField Error: No config defined for ${a.type}`);if(c.current){let i=r??``;i!==c.current.innerText&&c.current.replaceChildren(i);let a=yv(c.current),d=r=>s(null,null,function*(){let i=l.getState().state.indexes.nodes[n],a=r.target.innerText;u&&(a=a.replaceAll(/\n/gm,``));let s=fh(i.data.props,t,a);yield z_(e(o({},i.data),{props:s}),l.getState,`replace`,!0)});return c.current.addEventListener(`input`,d),()=>{var e;(e=c.current)==null||e.removeEventListener(`input`,d),a?.()}}},[l,c.current,r,u]);let[d,f]=(0,I.useState)(!1),[p,m]=(0,I.useState)(!1);return(0,L.jsx)(`span`,{className:bv(),ref:c,contentEditable:d||p?`plaintext-only`:`false`,onClick:e=>{e.preventDefault(),e.stopPropagation()},onClickCapture:e=>{e.preventDefault(),e.stopPropagation();let t=R_(l.getState().state,n);l.getState().setUi({itemSelector:t})},onKeyDown:e=>{e.stopPropagation(),(u&&e.key===`Enter`||i)&&e.preventDefault()},onKeyUp:e=>{e.stopPropagation(),e.preventDefault()},onMouseOverCapture:()=>f(!0),onMouseOutCapture:()=>f(!1),onFocus:()=>m(!0),onBlur:()=>m(!1)})}),Sv=()=>({text:({value:e,componentId:t,field:n,propPath:r,isReadOnly:i})=>n.contentEditable?(0,L.jsx)(xv,{propPath:r,componentId:t,value:e,opts:{disableLineBreaks:!0},isReadOnly:i}):e,textarea:({value:e,componentId:t,field:n,propPath:r,isReadOnly:i})=>n.contentEditable?(0,L.jsx)(xv,{propPath:r,componentId:t,value:e,isReadOnly:i}):e,custom:({value:e,componentId:t,field:n,propPath:r,isReadOnly:i})=>n.contentEditable&&typeof e==`string`?(0,L.jsx)(xv,{propPath:r,componentId:t,value:e,isReadOnly:i}):e});c();var Cv=(0,I.lazy)(()=>At(()=>import(`./Editor-44C53YAG-CkyqfNEl.js`).then(e=>({default:e.Editor})),__vite__mapDeps([13,1,2,3,7,9,12,5,4]))),wv=(0,I.lazy)(()=>At(()=>import(`./Render-DQXAYUBI-DmuA4-Ij.js`).then(e=>({default:e.RichTextRender})),__vite__mapDeps([11,1,5,12]))),Tv=(0,I.memo)(({value:t,componentId:n,propPath:r,field:i,id:a})=>{let c=(0,I.useRef)(null),l=N(),u=e=>{e.preventDefault(),e.stopPropagation()},d=e=>{e.preventDefault(),e.stopPropagation();let t=R_(l.getState().state,n);l.getState().setUi({itemSelector:t})};(0,I.useEffect)(()=>{if(!c.current)return;let e=yv(c.current,{disableDragOnFocus:!0});return()=>e?.()},[c.current]);let f=(0,I.useCallback)((t,i)=>s(null,null,function*(){let a=l.getState().state.indexes.nodes[n],s=fh(a.data.props,r,t);yield z_(e(o({},a.data),{props:s}),l.getState,`replace`,!0,i)}),[l,n,r]),p=(0,I.useCallback)(e=>{l.setState({currentRichText:{inlineComponentId:n,inline:!0,field:i,editor:e,id:a}})},[i,n]);if(!i.contentEditable)return(0,L.jsx)(I.Suspense,{fallback:(0,L.jsx)(_n,{content:t}),children:(0,L.jsx)(wv,{content:t,field:i})});let m={content:t,onChange:f,field:i,inline:!0,onFocus:p,id:a,name:r};return(0,L.jsx)(`div`,{ref:c,onClick:u,onClickCapture:d,children:(0,L.jsx)(I.Suspense,{fallback:(0,L.jsx)(Ag,o({},m)),children:(0,L.jsx)(Cv,o({},m))})})});Tv.displayName=`InlineEditorWrapper`;var Ev=()=>({richtext:({value:e,componentId:t,field:n,propPath:r,isReadOnly:i})=>{let{contentEditable:a=!0,tiptap:o}=n;if(a===!1||i)return(0,L.jsx)(wv,{content:e,field:n});let s=`${t}_${n.type}_${r}`;return(0,L.jsx)(Tv,{value:e,componentId:t,propPath:r,field:n,id:s},s)}});c(),c();function Dv(e,t,n=[]){if(Object.is(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;let r=new Set(n),i=Object.keys(e).filter(e=>!r.has(e)),a=Object.keys(t).filter(e=>!r.has(e));if(i.length!==a.length)return!1;for(let n=0;n<i.length;n++){let r=i[n];if(!Object.prototype.hasOwnProperty.call(t,r))return!1;let a=e[r],o=t[r];if(!Object.is(a,o))return!1}return!0}var Ov=(0,I.memo)(({Component:e,componentProps:t})=>(0,L.jsx)(e,o({},t)),(e,t)=>{let n=!0;return`puck`in e.componentProps&&`puck`in t.componentProps&&(n=ze(e.componentProps.puck,t.componentProps.puck)),e.Component===t.Component&&Dv(e.componentProps,t.componentProps,[`puck`])&&n});c();var kv=5,Av=320,jv=new Map,Mv=e=>jv.get(e)??Av,Nv=(e,t)=>{t<=0||jv.set(e,t)},Pv=({contentIds:e,zoneCompound:t,renderItem:n})=>{let r=F(e=>e.selectedItem?.props.id??null),i=Xg(),a=(0,I.useContext)(Kg),o=Ch(Kg,e=>{let t=e.draggedItem?.id;return t?String(t):null}),s=Ch(Kg,e=>{if(e.draggedItem?.id){let[t]=Object.entries(e.previewIndex??{}).find(([,e])=>!e?.ghost)??[];return t?.split(`:`)[0]}return null}),c=i?.defaultView,l=(0,I.useRef)(new Map),u=N(),d=(0,I.useCallback)(t=>{if(!t||t===`root`)return-1;let n=e.indexOf(t);if(n>-1)return n;let r=u.getState().state.indexes.nodes?.[t]?.path??[];for(let t=r.length-1;t>=0;--t){let n=r[t]?.split(`:`)[0];if(!n||n===`root`)continue;let i=e.indexOf(n);if(i>-1)return i}return-1},[u,e]),f=(0,I.useMemo)(()=>{let e=new Set;return[r,o,s].forEach(t=>{let n=d(t);n>-1&&e.add(n)}),Array.from(e).sort((e,t)=>e-t)},[s,o,d,r]),p=(0,I.useCallback)(e=>{let t=Um(e);return f.forEach(e=>{t.includes(e)||t.push(e)}),t.sort((e,t)=>e-t),t},[f]),m=ch({count:e.length,getItemKey:t=>e[t],estimateSize:t=>Mv(e[t]),getScrollElement:()=>c??null,overscan:kv,observeElementRect:(e,t)=>c?Km(e,t):Wm(e,t),observeElementOffset:(e,t)=>c?Xm(e,t):Ym(e,t),scrollToFn:(e,t,n)=>c?$m(e,t,n):eh(e,t,n),rangeExtractor:p,initialOffset:()=>c?c.scrollY:0});(0,I.useEffect)(()=>(a.getState().registerRootVirtualizer(t,{resolveIndex:e=>d(e),virtualizer:m}),()=>{a.getState().unregisterRootVirtualizer(t)}),[d,m,t,a]);let h=(0,I.useCallback)(e=>{let t=l.current.get(e);if(t)return t;let n=t=>{if(!t)return;let n=Math.ceil(t.getBoundingClientRect().height)||Av;typeof n==`number`&&n>0&&Nv(e,n)};return l.current.set(e,n),n},[]);(0,I.useEffect)(()=>{let t=new Set(e);Array.from(l.current.keys()).forEach(e=>{t.has(e)||l.current.delete(e)})},[e]);let g=m.getVirtualItems(),_=m.getTotalSize(),v=(0,I.useMemo)(()=>{let t=[],r=0,i=-1;g.forEach(a=>{if(!a)return;let o=e[a.index],s=Math.max(a.start-r,0);s>0&&t.push((0,L.jsx)(`div`,{style:{height:`${s}px`}},`gap:${i}:${a.index}`)),t.push(n({componentId:o,index:a.index,measureRef:h(o)})),r=a.end,i=a.index});let a=Math.max(_-r,0);return a>0&&t.push((0,L.jsx)(`div`,{style:{height:`${a}px`}},`gap:${i}:end`)),t},[_,g,h]);return(0,L.jsx)(L.Fragment,{children:v})};c();var Fv=a(`DropZone`,S_),Iv=`var(--puck-line-placeholder-width, 2px)`,Lv=({zoneRef:e,contentIds:t,index:n})=>{let[r,i]=(0,I.useState)();return(0,I.useLayoutEffect)(()=>{let r=e.current,a=r?.ownerDocument.defaultView;if(!r||!a)return;let o=e=>e?a.getComputedStyle(e):void 0,s=e=>parseFloat(e??``)||0,c=e=>{let n=t[e];if(n===void 0)return;let i=r.querySelector(`:scope > ${Qg(n)}:not([data-dnd-dragging])`);if(i)return{el:i,rect:i.getBoundingClientRect()}},l=r.getBoundingClientRect(),u=a.getComputedStyle(r),d=c(n-1),f=c(n),p=f??d,{horizontal:m,reversed:h,forward:g,start:_,end:v,isBefore:y}=q_(K_(r,a,u)),b=s(m?u.columnGap:u.rowGap),x=(e,t)=>{let n=t===`start`==!h?m?`marginLeft`:`marginTop`:m?`marginRight`:`marginBottom`;return s(o(e)?.[n])},S=s(u.borderLeftWidth),C=s(u.borderTopWidth),w=s(u.borderRightWidth),T=s(u.borderBottomWidth),ee;ee=f?d&&y(v(d.rect),_(f.rect))?(v(d.rect)+_(f.rect))/2:_(f.rect)-g*(Math.max(x(f.el,`start`),b)/2):d?v(d.rect)+g*(Math.max(x(d.el,`end`),b)/2):m?h?l.right-w-s(u.paddingRight):l.left+S+s(u.paddingLeft):h?l.bottom-T-s(u.paddingBottom):l.top+C+s(u.paddingTop),i(m?{top:(p?.rect.top??l.top+C+s(u.paddingTop))-l.top+r.scrollTop-C,height:p?.rect.height??l.height-C-T-s(u.paddingTop)-s(u.paddingBottom),left:U_(ee-l.left+r.scrollLeft-S,0,r.scrollWidth),width:Iv,transform:`translateX(-50%)`}:{left:(p?.rect.left??l.left+S+s(u.paddingLeft))-l.left+r.scrollLeft-S,width:p?.rect.width??l.width-S-w-s(u.paddingLeft)-s(u.paddingRight),top:U_(ee-l.top+r.scrollTop-C,0,r.scrollHeight),height:Iv,transform:`translateY(-50%)`})},[e,t,n]),r?(0,L.jsx)(`div`,{className:Fv(`linePlaceholder`),style:r,"data-puck-line-placeholder":!0}):null},Rv=a(`DropZone`,S_),zv=({element:e,label:t,override:n})=>e?(0,L.jsx)(`div`,{dangerouslySetInnerHTML:{__html:e.outerHTML}}):(0,L.jsx)(av,{name:t,children:n}),Bv=e=>(0,L.jsx)(Hv,o({},e)),Vv=(0,I.memo)(({zoneCompound:t,componentId:n,index:r,dragAxis:i,collisionAxis:a,inDroppableZone:s,itemRef:c})=>{let l=F(e=>e.metadata),{depth:u=1}=(0,I.useContext)(Gg)??{},d=(0,I.useContext)(Kg),f=F(kn(e=>e.state.indexes.nodes[n]?.flatData.props)),p=F(e=>e.state.indexes.nodes[n]?.data.type),m=F(kn(e=>e.state.indexes.nodes[n]?.data.readOnly)),h=N(),g=(0,I.useMemo)(()=>{if(f)return gt({type:p,props:f});let e=d.getState().previewIndex[t];return n===e?.props.id?{type:e.componentType,props:e.props,previewType:e.type,element:e.element}:null},[h,n,t,p,f]),_=F(e=>g?.type?e.config.components[g.type]:null),v=(0,I.useMemo)(()=>({renderDropZone:Bv,isEditing:!0,dragRef:null,metadata:o(o({},l),_?.metadata)}),[l,_?.metadata]),y=F(e=>e.overrides),b=F(e=>e.componentState[n]?.loadingCount>0),x=F(e=>e.selectedItem?.props.id===n||!1),S=P(`label-component`),C=P(`canvas-noconfig`,{type:(g?.type)?.toString()??``}),w=_?.label??g?.type.toString()??S,T=(0,I.useMemo)(()=>e(o(o({},_?.defaultProps),g?.props),{puck:v,editMode:!0}),[_?.defaultProps,g?.props,v]),ee=(0,I.useMemo)(()=>({type:g?.type??p,props:T}),[g?.type,p,T]),E=F(e=>e.config),D=F(e=>e.plugins),te=F(e=>e.fieldTransforms),ne=vv(E,ee,(0,I.useMemo)(()=>o(o(o(o(o({},fn(Bv,e=>(0,L.jsx)(_v,{componentId:n,zone:e.zone}))),Sv()),Ev()),D.reduce((e,t)=>o(o({},e),t.fieldTransforms),{})),te),[D,te]),m,b);if(!g)return;let re=_?_.render:()=>(0,L.jsx)(`div`,{style:{padding:48,textAlign:`center`},children:C}),ie=g.type,ae=`previewType`in g&&g.previewType===`insert`;return(0,L.jsx)(x_,{id:n,componentType:ie,zoneCompound:t,depth:u+1,index:r,isLoading:b,isSelected:x,label:w,autoDragAxis:i,userDragAxis:a,inDroppableZone:s,itemRef:c,children:t=>_?.inline&&!ae?(0,L.jsx)(Ov,{Component:re,componentProps:e(o({},ne),{puck:e(o({},ne.puck),{dragRef:t})})}):(0,L.jsx)(`div`,{ref:t,children:ae?(0,L.jsx)(zv,{label:w,override:y.componentItem??y.drawerItem,element:`element`in g&&g.element?g.element:void 0}):(0,L.jsx)(Ov,{Component:re,componentProps:ne})})})}),Hv=(0,I.forwardRef)(function({zone:t,allow:n,disallow:r,style:i,className:a,minEmptyHeight:s=`128px`,collisionAxis:c,as:l},u){let d=(0,I.useContext)(Gg),f=N(),{areaId:p,depth:m=0,registerLocalZone:h,unregisterLocalZone:g}=d??{},_=F(kn(e=>p?e.state.indexes.nodes[p]?.path:null)),v=w;p&&t!==w&&(v=`${p}:${t}`);let y=v===w||t===w||p===`root`,b=Ch(Kg,e=>e.nextAreaDepthIndex[p||``]),x=F(kn(e=>e.state.indexes.zones[v]?.contentIds)),S=F(kn(e=>e.state.indexes.zones[v]?.type));(0,I.useEffect)(()=>{(!S||S===`dropzone`)&&d?.registerZone&&d?.registerZone(v)},[S,f]),(0,I.useEffect)(()=>{S===`dropzone`&&v!==w&&console.warn(`DropZones have been deprecated in favor of slot fields and will be removed in a future version of Puck. Please see the migration guide: https://www.puckeditor.com/docs/guides/migrations/dropzones-to-slots`)},[S]);let C=(0,I.useMemo)(()=>x||[],[x]),T=(0,I.useRef)(null),ee=(0,I.useCallback)(e=>C_(e,{allow:n,disallow:r}),[n,r]),E=Ch(Kg,e=>{let t=e.draggedItem?.data.componentType;return ee(t)}),D=b||y,te=Ch(Kg,e=>{let t=!0;return t=e.zoneDepthIndex[v]??!1,t&&=E,t});(0,I.useEffect)(()=>(h&&h(v,E||te),()=>{g&&g(v)}),[E,te,v]);let[ne,re]=fv(C,v),ie=re&&!re.linePlaceholder?1:0,ae=ne.length===ie,O=te&&ae,oe=(0,I.useContext)(Kg);(0,I.useEffect)(()=>{let{enabledIndex:t}=oe.getState();oe.setState({enabledIndex:e(o({},t),{[v]:te})})},[te,oe,v]);let{ref:se}=up({id:v,collisionPriority:te?m:0,disabled:!O,collisionDetector:Uh,type:`dropzone`,data:{areaId:p,depth:m,isDroppableTarget:E,path:_||[]}}),ce=F(e=>e?.selectedItem&&p===e?.selectedItem.props.id),[le]=gv(T,c),[ue,k]=uv({zoneCompound:v,userMinEmptyHeight:s,ref:T}),de=(0,I.useCallback)(e=>{f_([T,se,u],e)},[se]),A=F(e=>e._experimentalVirtualization),fe=l??`div`,pe=A&&(p??`root`)===`root`&&m===0;return(0,L.jsxs)(fe,{className:`${Rv({isRootZone:y,hoveringOverArea:D,isEnabled:te,isAreaSelected:ce,hasChildren:C.length>0,isAnimating:k})}${a?` ${a}`:``}`,ref:de,"data-testid":`dropzone:${v}`,"data-puck-dropzone":v,style:e(o({},i),{"--puck-slot-min-empty-height":ue,backgroundColor:i?.backgroundColor}),children:[pe?(0,L.jsx)(Pv,{contentIds:ne,zoneCompound:v,renderItem:e=>(0,L.jsx)(Vv,{zoneCompound:v,componentId:e.componentId,dragAxis:le,index:e.index,collisionAxis:c,inDroppableZone:E,itemRef:e.measureRef},e.componentId)}):ne.map((e,t)=>(0,L.jsx)(Vv,{zoneCompound:v,componentId:e,dragAxis:le,index:t,collisionAxis:c,inDroppableZone:E},e)),re?.linePlaceholder&&(0,L.jsx)(Lv,{zoneRef:T,contentIds:C,index:re.index})]})}),Uv=({config:t,item:n,metadata:r})=>{let i=t.components[n.type],a=hn(t,n,n=>(0,L.jsx)(xn,e(o({},n),{config:t,metadata:r}))),s=(0,I.useMemo)(()=>({areaId:a.id,depth:1}),[a]),c=bn(i.fields,a);return(0,L.jsx)(Jg,{value:s,children:(0,L.jsx)(i.render,e(o(o({},a),c),{puck:e(o({},a.puck),{renderDropZone:Wv,metadata:o(o({},r),i.metadata)})}))},a.id)},Wv=e=>(0,L.jsx)(Gv,o({},e)),Gv=(0,I.forwardRef)(function({className:e,style:t,zone:n,as:r},i){let a=(0,I.useContext)(Gg),{areaId:o=`root`}=a||{},{config:s,data:c,metadata:l}=(0,I.useContext)(Jv),u=`${o}:${n}`,d=c?.content||[];(0,I.useEffect)(()=>{d||a?.registerZone&&a?.registerZone(u)},[d]);let f=r??`div`;return!c||!s?null:(u!==w&&(d=M(c,u).zones[u]),(0,L.jsx)(f,{className:e,style:t,ref:i,children:d.map(e=>s.components[e.type]?(0,L.jsx)(Uv,{config:s,item:e,metadata:l},e.props.id):null)}))}),Kv=e=>(0,L.jsx)(qv,o({},e)),qv=(0,I.forwardRef)(function(t,n){return(0,I.useContext)(Gg)?.mode===`edit`?(0,L.jsx)(L.Fragment,{children:(0,L.jsx)(Hv,e(o({},t),{ref:n}))}):(0,L.jsx)(L.Fragment,{children:(0,L.jsx)(Gv,e(o({},t),{ref:n}))})}),Jv=I.createContext({config:{components:{}},data:{root:{},content:[]},metadata:{}});function Yv({config:t,data:n,metadata:r={}}){let i=e(o({},n),{root:n.root||{},content:n.content||[]}),a=`props`in i.root?i.root.props:i.root,s=a?.title||``,c=e(o({},a),{puck:{renderDropZone:Kv,isEditing:!1,dragRef:null,metadata:r},title:s,editMode:!1,id:`puck-root`}),l=hn(t,{type:`root`,props:c},n=>(0,L.jsx)(Cn,e(o({},n),{config:t,metadata:r}))),u=bn(t.root?.fields,c),d=(0,I.useMemo)(()=>({mode:`render`,depth:0}),[]);return t.root?.render?(0,L.jsx)(Jv.Provider,{value:{config:t,data:i,metadata:r},children:(0,L.jsx)(Jg,{value:d,children:(0,L.jsx)(t.root.render,e(o(o({},l),u),{children:(0,L.jsx)(Wv,{zone:ge})}))})}):(0,L.jsx)(Jv.Provider,{value:{config:t,data:i,metadata:r},children:(0,L.jsx)(Jg,{value:d,children:(0,L.jsx)(Wv,{zone:ge})})})}c(),c();function Xv(e,t,n){return s(this,null,function*(){let r=t().state.indexes.nodes[e];if(!r){console.warn(`Warning: Could not find component with id "${e}" to resolve its data. Component may have been removed or the id is invalid.`);return}yield z_(r.data,t,n)})}c();function Zv(e,t,n){return s(this,null,function*(){let r=se(e,t().state);if(!r){console.warn(`Warning: Could not find component for selector "${JSON.stringify(e)}" to resolve its data. Component may have been removed or the selector is invalid.`);return}yield z_(S(r),t,n)})}var Qv=(e,t)=>{let n={back:e.history.back,forward:e.history.forward,setHistories:e.history.setHistories,setHistoryIndex:e.history.setHistoryIndex,hasPast:e.history.hasPast(),hasFuture:e.history.hasFuture(),histories:e.history.histories,index:e.history.index},r={appState:ee(e.state),config:e.config,dispatch:e.dispatch,getPermissions:e.permissions.getPermissions,refreshPermissions:e.permissions.refreshPermissions,resolveDataById:(e,n)=>Xv(e,t,n),resolveDataBySelector:(e,n)=>Zv(e,t,n),history:n,selectedItem:e.selectedItem||null,getItemBySelector:t=>se(t,e.state),getItemById:t=>e.state.indexes.nodes[t].data,getSelectorForId:t=>R_(e.state,t),getParentById:t=>{let n=e.state.indexes.nodes[t].parentId;if(n===null)return;let r=e.state.indexes.nodes[n];if(r)return r.data},dictionary:e.dictionary};return r.__private={appState:e.state},r},$v=(0,I.createContext)(null),ey=e=>({state:e.state,config:e.config,dispatch:e.dispatch,permissions:e.permissions,history:e.history,selectedItem:e.selectedItem,dictionary:e.dictionary}),ty=e=>{let[t]=(0,I.useState)(()=>ce(()=>Qv(ey(e.getState()),e.getState)));return(0,I.useEffect)(()=>e.subscribe(e=>ey(e),n=>{t.setState(Qv(n,e.getState))}),[]),t};function ny(){let e=(0,I.useContext)($v);if(!e)throw Error(`usePuckGet must be used inside <Puck>.`);return e.getState}c(),c(),c(),c(),c();var ry=a(`ComponentList`,{ComponentList:`_ComponentList_htktj_1`,"ComponentList--isExpanded":`_ComponentList--isExpanded_htktj_5`,"ComponentList-content":`_ComponentList-content_htktj_9`,"ComponentList-title":`_ComponentList-title_htktj_17`,"ComponentList-titleIcon":`_ComponentList-titleIcon_htktj_63`}),iy=({name:e,label:t})=>{let n=F(e=>e.overrides),r=F(t=>t.permissions.getPermissions({type:e}).insert);return(0,I.useEffect)(()=>{n.componentItem&&console.warn("The `componentItem` override has been deprecated and renamed to `drawerItem`")},[n]),(0,L.jsx)(cv.Item,{label:t,name:e,isDragDisabled:!r,children:n.componentItem??n.drawerItem})},ay=({children:t,title:n,id:r})=>{let i=F(e=>e.config),a=F(e=>e.setUi),s=F(e=>e.state.ui.componentList),{expanded:c=!0}=s[r]||{},l=`puck-drawer-category-${r}`,u=P(`drawer-category-collapse`,{title:n??``}),d=P(`drawer-category-expand`,{title:n??``});return(0,L.jsxs)(`div`,{className:ry({isExpanded:c}),children:[n&&(0,L.jsxs)(`button`,{type:`button`,className:ry(`title`),"aria-expanded":c,"aria-controls":l,onClick:()=>a({componentList:e(o({},s),{[r]:e(o({},s[r]),{expanded:!c})})}),title:c?u:d,children:[(0,L.jsx)(`div`,{children:n}),(0,L.jsx)(`div`,{className:ry(`titleIcon`),children:c?(0,L.jsx)(ot,{size:12}):(0,L.jsx)(Ee,{size:12})})]}),(0,L.jsx)(`div`,{className:ry(`content`),id:l,children:(0,L.jsx)(cv,{children:t||Object.keys(i.components).map(e=>(0,L.jsx)(iy,{label:i.components[e].label??e,name:e},e))})})]})};ay.Item=iy;var oy=()=>{let[e,t]=(0,I.useState)(),n=F(e=>e.config),r=F(e=>e.state.ui.componentList),i=P(`drawer-category-other`);return(0,I.useEffect)(()=>{if(Object.keys(r).length>0){let e=[],a;a=Object.entries(r).map(([t,r])=>!r.components||(r.components.forEach(t=>{e.push(t)}),r.visible===!1)?null:(0,L.jsx)(ay,{id:t,title:n.categories?.[t]?.title||r.title||t,children:r.components.map((e,t)=>{let r=n.components[e]||{};return(0,L.jsx)(ay.Item,{label:r.label??e,name:e,index:t},e)})},t));let o=Object.keys(n.components).filter(t=>e.indexOf(t)===-1);o.length>0&&!r.other?.components&&r.other?.visible!==!1&&a.push((0,L.jsx)(ay,{id:`other`,title:r.other?.title||i,children:o.map((e,t)=>{let r=n.components[e]||{};return(0,L.jsx)(ay.Item,{name:e,label:r.label??e,index:t},e)})},`other`)),t(a)}},[n.categories,n.components,r,i]),e},sy=()=>{let e=F(e=>e.overrides),t=oy(),n=(0,I.useMemo)(()=>(e.components&&console.warn("The `components` override has been deprecated and renamed to `drawer`"),e.components||e.drawer||`div`),[e]);return(0,L.jsx)(n,{children:t||(0,L.jsx)(ay,{id:`all`})})};c();var cy=a(`BlocksPlugin`,{BlocksPlugin:`_BlocksPlugin_9af19_1`}),ly=(e={})=>({name:`blocks`,label:e.label??`Blocks`,render:()=>(0,L.jsx)(`div`,{className:cy(),children:(0,L.jsx)(sy,{})}),icon:e.icon??(0,L.jsx)(Te,{})});c(),c(),c();var uy=(e,t)=>Object.keys(e.indexes.zones).filter(e=>e.split(`:`)[0]===t);c(),c(),c(),c(),c(),c(),c();function dy(e,t){if(typeof e!=`string`)throw Error(`Can't get field definition for path (${e}): Path should be a string`);if(!t||typeof t!=`object`)return;let n=e.split(/\.|\[\d+\]/).filter(Boolean),r=t,i;for(let e=0;e<n.length;e++){let t=n[e];if(i=r[t],e===n.length-1)return i;if(!i||(i.type!==`object`||!i.objectFields)&&(i.type!==`array`||!i.arrayFields))return;i.type===`object`&&(r=i.objectFields),i.type===`array`&&(r=i.arrayFields)}}var fy=(e,t,n)=>{let[r,i]=e.split(`:`);if(!i)return;let a=n[r]?.data.type;return dy(i,(a&&a!==`root`?t.components[a]:t.root)?.fields)},py={},my=(e,t,n)=>{if(n.zones[e]?.type!==`slot`)return py;let r=fy(e,t,n.nodes);return r?.type===`slot`?{allow:r.allow,disallow:r.disallow}:py},hy=`outline-item`,gy=`outline-zone`,_y=(e,t,n)=>{let r=e.get(t);if(r!==void 0)return r;let i=n();return e.set(t,i),i},vy=(e,t,n,r,i)=>_y(e,`zone:${t}`,()=>C_(n,my(t,r,i))),yy=(e,t,n,r,i)=>_y(e,`childZones:${t}`,()=>Object.keys(i.zones).some(a=>a.startsWith(`${t}:`)&&vy(e,a,n,r,i))),by=(e,t,n,r)=>_y(e,`subtree:${t}`,()=>t===n||(r[t]?.path||[]).some(e=>e.split(`:`)[0]===n)),xy=(e,t)=>n=>{if(n.type!==hy)return!1;let r=n.data,i=e.outlineStore.getState().acceptCache,{config:a,state:o}=e.appStore.getState(),s=o.indexes;return by(i,t.kind===`row`?t.itemId:t.zoneCompound.split(`:`)[0],r.itemId,s.nodes)?!1:t.kind===`zone`?vy(i,t.zoneCompound,r.componentType,a,s):vy(i,t.zoneCompound,r.componentType,a,s)||yy(i,t.itemId,r.componentType,a,s)};c();var Sy=600,Cy=()=>{let e=null,t=null,n=()=>{e!==null&&(clearTimeout(e),e=null),t=null};return ce((r,i)=>({status:`idle`,draggedRow:null,tempExpandedIds:new Set,expandCandidateId:null,indicator:null,drop:null,acceptCache:new Map,startDrag:e=>r({status:`dragging`,draggedRow:e,acceptCache:new Map}),setTarget:(e,t)=>{let n=i();(n.indicator?.targetId!==e.targetId||n.indicator?.position!==e.position||n.drop?.zone!==t.zone||n.drop?.index!==t.index)&&r({indicator:e,drop:t})},clearTarget:()=>{(i().indicator!==null||i().drop!==null)&&r({indicator:null,drop:null})},scheduleExpand:(a,o)=>{t===a||i().tempExpandedIds.has(a)||(n(),t=a,r({expandCandidateId:a}),e=setTimeout(()=>{e=null,t=null,r(e=>({tempExpandedIds:new Set(e.tempExpandedIds).add(a),expandCandidateId:null})),o()},Sy))},cancelPendingExpand:()=>{n(),i().expandCandidateId!==null&&r({expandCandidateId:null})},endDrag:()=>{n(),r({status:`dropping`,indicator:null,drop:null,expandCandidateId:null})},reset:()=>{n(),r({status:`idle`,draggedRow:null,tempExpandedIds:new Set,expandCandidateId:null,indicator:null,drop:null,acceptCache:new Map})}}))},wy=(0,I.createContext)(Cy()),Ty=()=>(0,I.useContext)(wy),Ey=e=>Ch(wy,e),Dy=({kind:e,zoneCompound:t})=>{let n=N(),r=Ty(),i=`${e}:${t}`,{ref:a}=up({id:i,type:gy,accept:(0,I.useMemo)(()=>xy({appStore:n,outlineStore:r},{kind:`zone`,zoneCompound:t}),[n,r,t]),collisionDetector:Uh,data:{kind:`zone`,zoneCompound:t}}),o=Ey(e=>e.indicator?.targetId===i);return(0,I.useMemo)(()=>({isDropTarget:o,ref:a}),[o,a])};c(),c();var Oy=a(`DropLine`,{DropLine:`_DropLine_eyz3q_2`,"DropLine--top":`_DropLine--top_eyz3q_12`,"DropLine--bottom":`_DropLine--bottom_eyz3q_16`,"DropLine--outset":`_DropLine--outset_eyz3q_20`}),ky=({edge:e,outset:t})=>(0,L.jsx)(`div`,{className:Oy({top:e===`top`,bottom:e===`bottom`,outset:!!t})});c(),c(),c(),c();var Ay=(...e)=>[...e].filter(Boolean).join(` `);c();var jy=a(`LayerTree`,{"LayerTree-helper":`_LayerTree-helper_1m7e4_2`,"LayerTree-helperRoot":`_LayerTree-helperRoot_1m7e4_11`}),My=({zoneCompound:e})=>{let{ref:t,isDropTarget:n}=Dy({kind:`empty`,zoneCompound:e}),r=P(`outline-empty`),[i]=e.split(`:`),a=i===ve;return(0,L.jsxs)(`li`,{className:Ay(jy(`helper`),a?jy(`helperRoot`):void 0),"data-puck-drop-target":n||void 0,ref:t,children:[r,n&&(0,L.jsx)(ky,{edge:`top`})]})};c(),c();var Ny=({componentType:e,index:t,itemId:n,zoneCompound:r})=>{let i=N(),a=Ty(),o=(0,I.useMemo)(()=>xy({appStore:i,outlineStore:a},{kind:`row`,itemId:n,zoneCompound:r}),[i,a,n,r]),s=(0,I.useMemo)(()=>qh(`y`),[]),{handleRef:c,ref:l,isDragSource:u}=Dm({id:n,index:t,group:r,type:hy,accept:o,data:{kind:`row`,itemId:n,zoneCompound:r,index:t,componentType:e},collisionPriority:1,collisionDetector:s,transition:{duration:0},plugins:e=>[...e,Ku.configure({feedback:`clone`,dropAnimation:null})]}),{indicatorPosition:d,isExpandCandidate:f,isTempExpanded:p}=Ey(e=>({indicatorPosition:e.indicator?.targetId===n?e.indicator.position:null,isExpandCandidate:e.expandCandidateId===n,isTempExpanded:e.tempExpandedIds.has(n)}));return{rowRef:(0,I.useCallback)(e=>{l(e),c(e)},[l,c]),isDragSource:u,indicatorPosition:d,isExpandCandidate:f,isTempExpanded:p}};c();var Py={Layer:`_Layer_onfgu_1`,"Layer-inner":`_Layer-inner_onfgu_8`,"Layer--isSortable":`_Layer--isSortable_onfgu_18`,"Layer-content":`_Layer-content_onfgu_22`,"Layer-clickable":`_Layer-clickable_onfgu_29`,"Layer-caret":`_Layer-caret_onfgu_57`,"Layer--containsZone":`_Layer--containsZone_onfgu_68`,"Layer-title":`_Layer-title_onfgu_76`,"Layer-name":`_Layer-name_onfgu_85`,"Layer-icon":`_Layer-icon_onfgu_91`,"Layer-zones":`_Layer-zones_onfgu_101`,"Layer--isExpanded":`_Layer--isExpanded_onfgu_106`,"Layer--isSelected":`_Layer--isSelected_onfgu_115`,"Layer--isExpandCandidate":`_Layer--isExpandCandidate_onfgu_138`,"Layer--isDragSource":`_Layer--isDragSource_onfgu_143`};c(),c();var Fy=a(`LayerActions`,{LayerActions:`_LayerActions_d90t9_2`,"LayerActions--visible":`_LayerActions--visible_d90t9_18`}),Iy=({node:e,visible:t})=>{let n=F(e=>e.dispatch),r=Ty(),i=F(kn(t=>{let n=se({index:e.index,zone:e.zoneCompound},t.state),r=t.permissions.getPermissions({item:n});return{delete:r.delete,duplicate:r.duplicate}})),a=P(`outline-item-duplicate`),o=P(`outline-item-delete`),s=(0,I.useCallback)(t=>{t.stopPropagation(),r.getState().status===`idle`&&n({type:`remove`,index:e.index,zone:e.zoneCompound})},[n,r,e]),c=(0,I.useCallback)(t=>{t.stopPropagation(),r.getState().status===`idle`&&n({type:`duplicate`,sourceIndex:e.index,sourceZone:e.zoneCompound})},[n,r,e.index,e.zoneCompound]);return!i.delete&&!i.duplicate?null:(0,L.jsxs)(`div`,{className:Fy({visible:t}),children:[i.duplicate&&(0,L.jsx)(Be,{onClick:c,title:a,type:`button`,children:(0,L.jsx)(Pe,{})}),i.delete&&(0,L.jsx)(Be,{onClick:s,title:o,type:`button`,children:(0,L.jsx)(tt,{})})]})},Ly=a(`Layer`,Py),Ry=(0,I.forwardRef)(function({dataIndex:t,depth:n,isSelected:r,node:i,selectedId:a},s){let c=F(e=>e.dispatch),l=F(e=>e.state.ui.itemExpanded?.[i.itemId]??!1),u=Ch(Kg,e=>e.hoveringComponent===i.itemId),d=F(e=>{let t=se({index:i.index,zone:i.zoneCompound},e.state);return e.permissions.getPermissions({item:t})?.drag}),{indicatorPosition:f,isDragSource:p,isExpandCandidate:m,isTempExpanded:h,rowRef:g}=Ny({componentType:i.componentType,index:i.index,itemId:i.itemId,zoneCompound:i.zoneCompound}),_=(0,I.useContext)(Kg),v=Ty(),y=P(`outline-item-collapse`),b=P(`outline-item-expand`),x=i.childZones.length>0,S=(0,I.useCallback)(e=>{c({type:`setUi`,ui:{itemSelector:e}})},[c]),C=l||h,w=f!==null,T=i.childZones.length!==1;return(0,L.jsxs)(`li`,{ref:s,className:Ly({containsZone:x,isDragSource:p,isExpandCandidate:m,isExpanded:C,isHovering:u,isSelected:r,isSortable:d}),"data-index":t,"data-puck-layer-tree-id":i.itemId,children:[w&&(0,L.jsx)(ky,{edge:f===`before`?`top`:`bottom`,outset:!0}),(0,L.jsxs)(`div`,{className:Ly(`inner`),ref:g,onMouseEnter:e=>{e.stopPropagation(),v.getState().status===`idle`&&_.setState({hoveringComponent:i.itemId})},onMouseLeave:e=>{e.stopPropagation(),_.setState({hoveringComponent:null})},children:[(0,L.jsx)(`div`,{className:Ly(`caret`),children:(0,L.jsx)(Be,{onClick:e=>{e.stopPropagation(),v.getState().status===`idle`&&c({type:`setUi`,ui:e=>{let t=o({},e.itemExpanded);return e.itemExpanded?.[i.itemId]?delete t[i.itemId]:t[i.itemId]=!0,{itemExpanded:t}},recordHistory:!1})},title:l?y:b,type:`button`,children:(0,L.jsx)(He,{})})}),(0,L.jsxs)(`div`,{className:Ly(`content`),children:[(0,L.jsx)(`button`,{type:`button`,className:Ly(`clickable`),onClick:()=>{v.getState().status===`idle`&&(S({index:i.index,zone:i.zoneCompound}),_.getState().scrollToComponent(i.itemId))},children:(0,L.jsxs)(`div`,{className:Ly(`title`),children:[(0,L.jsx)(`div`,{className:Ly(`icon`),children:i.componentType===`Text`||i.componentType===`Heading`?(0,L.jsx)(Le,{}):(0,L.jsx)(ae,{})}),(0,L.jsx)(`div`,{className:Ly(`name`),children:i.label})]})}),(0,L.jsx)(Iy,{node:i,visible:u&&!p})]})]}),x&&C&&i.childZones.map(t=>(0,L.jsx)(`div`,{className:Ly(`zones`),children:(0,L.jsx)($y,{depth:T?n+1:n,selectedId:a,tree:T?t:e(o({},t),{label:void 0})})},t.zoneCompound))]})});c();var zy={LayerTree:`_LayerTree_o5tyt_1`,"LayerTree--nested":`_LayerTree--nested_o5tyt_12`},By=a(`LayerTree`,zy),Vy=({depth:e,selectedId:t,tree:n})=>(0,L.jsxs)(`ul`,{className:By({nested:e>0}),children:[n.items.length===0&&(0,L.jsx)(My,{zoneCompound:n.zoneCompound}),n.items.map(n=>(0,L.jsx)(Ry,{depth:e,isSelected:t===n.itemId,node:n,selectedId:t},n.itemId))]});c();var Hy=a(`LayerTree`,zy),Uy=32,Wy=8,Gy=new Map,Ky=e=>Gy.get(e)??Uy,qy=(e,t)=>{t<=0||Gy.set(e,t)},Jy=e=>{let t=e?.parentElement??null;for(;t;){let{overflow:e,overflowY:n}=getComputedStyle(t);if([e,n].some(e=>/auto|scroll/.test(e)))return t;t=t.parentElement}return null},Yy=({depth:e,selectedId:t,tree:n})=>{let r=(0,I.useRef)(null),i=Ey(e=>e.draggedRow?.zoneCompound===n.zoneCompound?e.draggedRow.index:null),a=(0,I.useCallback)(e=>{let t=Um(e);return i!==null&&!t.includes(i)&&(t.push(i),t.sort((e,t)=>e-t)),t},[i]),o=ch({count:n.items.length,estimateSize:e=>Ky(n.items[e].itemId),getItemKey:e=>n.items[e].itemId,getScrollElement:()=>Jy(r.current),overscan:Wy,rangeExtractor:a,measureElement:e=>{let t=Math.ceil(e.getBoundingClientRect().height),n=e.dataset.puckLayerTreeId;return n&&qy(n,t),t||Uy}}),s=o.getVirtualItems(),c=o.getTotalSize(),l=[],u=0,d=-1;s.forEach(r=>{let i=n.items[r.index],a=Math.max(r.start-u,0);a>0&&l.push((0,L.jsx)(`li`,{"aria-hidden":`true`,style:{height:`${a}px`}},`gap:${n.zoneCompound}:${d}:${r.index}`)),l.push((0,L.jsx)(Ry,{dataIndex:r.index,depth:e,isSelected:t===i.itemId,node:i,ref:o.measureElement,selectedId:t},i.itemId)),u=r.end,d=r.index});let f=Math.max(c-u,0);return f>0&&l.push((0,L.jsx)(`li`,{"aria-hidden":`true`,style:{height:`${f}px`}},`gap:${n.zoneCompound}:${d}:end`)),(0,L.jsxs)(`ul`,{className:Hy({nested:e>0}),ref:r,children:[n.items.length===0&&(0,L.jsx)(My,{zoneCompound:n.zoneCompound}),l]})};c();var Xy=a(`LayerTree`,{"LayerTree-zoneTitle":`_LayerTree-zoneTitle_fvhlh_2`,"LayerTree-zoneIcon":`_LayerTree-zoneIcon_fvhlh_19`}),Zy=25,Qy=({label:e,zoneCompound:t})=>{let{ref:n,isDropTarget:r}=Dy({kind:`label`,zoneCompound:t});return(0,L.jsxs)(`div`,{className:Xy(`zoneTitle`),"data-puck-drop-target":r||void 0,ref:n,children:[(0,L.jsx)(`div`,{className:Xy(`zoneIcon`),children:(0,L.jsx)(Re,{})}),e,r&&(0,L.jsx)(ky,{edge:`bottom`})]})},$y=({depth:e,selectedId:t,tree:n})=>{let r=e===0&&n.items.length>=Zy;return(0,L.jsxs)(L.Fragment,{children:[n.label&&(0,L.jsx)(Qy,{label:n.label,zoneCompound:n.zoneCompound}),r?(0,L.jsx)(Yy,{depth:e,selectedId:t,tree:n}):(0,L.jsx)(Vy,{depth:e,selectedId:t,tree:n})]})};c(),c(),c();function eb(e,t){return Object.keys(t).some(t=>t.startsWith(`${e}:`))}var tb=2,nb=60,rb=(e,t)=>{let n,r=0,i=0,a=()=>{let o=Xg()?.querySelector(`[data-puck-component="${e}"]`),s=o?o.getBoundingClientRect().top:null;if(r=s===n?r+1:0,n=s,i+=1,r>=tb||i>=nb){t(e);return}requestAnimationFrame(a)};requestAnimationFrame(a)},ib=e=>{if(typeof document>`u`)return;let t=document.getElementById(`preview-frame`);e?t?.setAttribute(`data-puck-outline-dragging`,`true`):t?.removeAttribute(`data-puck-outline-dragging`)},ab=(e,t)=>{let n=e.operation.source,r=n?.data;if(!n||!r)return;let i=t.appStore.getState(),a=se({zone:r.zoneCompound,index:r.index},i.state);if(!a||!i.permissions.getPermissions({item:a}).drag){e.preventDefault();return}t.outlineDndStore.getState().startDrag({itemId:r.itemId,zoneCompound:r.zoneCompound,index:r.index,componentType:r.componentType}),ib(!0),i.dispatch({type:`setUi`,ui:{isDragging:!0},recordHistory:!1})},ob=(e,t,n)=>{let r=n.outlineDndStore.getState(),i=r.draggedRow;if(!i)return;let a=e.operation.target;if(!a){r.cancelPendingExpand(),r.clearTarget();return}let o=a.data;if(o.kind===`zone`){r.cancelPendingExpand(),r.setTarget({targetId:a.id.toString(),position:`inside`},{zone:o.zoneCompound,index:0});return}let{config:s,state:c}=n.appStore.getState(),l=c.indexes,u=r.acceptCache;if(vy(u,o.zoneCompound,i.componentType,s,l)){let e=t.collisionObserver.collisions[0]?.data,n=Jh(e?.direction);r.setTarget({targetId:a.id.toString(),position:n},{zone:o.zoneCompound,index:Yh({position:n,sourceIndex:i.index,targetIndex:o.index,isSameZone:o.zoneCompound===i.zoneCompound})})}else r.clearTarget();let d=!!c.ui.itemExpanded?.[o.itemId]||r.tempExpandedIds.has(o.itemId),f=eb(o.itemId,l.zones);!d&&f?r.scheduleExpand(o.itemId,()=>{requestAnimationFrame(()=>t.collisionObserver.forceUpdate(!0))}):r.cancelPendingExpand()},sb=(e,t)=>{let{source:n}=e.operation,r=t.outlineDndStore.getState(),i=r.draggedRow,a=e.canceled?null:r.drop,o=t.appStore.getState().dispatch;if(ib(!1),i&&a){V_(i.itemId,{zone:i.zoneCompound,index:i.index},{zone:a.zone,index:a.index},t.appStore);let e=a.zone!==i.zoneCompound||a.index!==i.index;o({type:`setUi`,ui:{itemSelector:{zone:a.zone,index:a.index},isDragging:!1},recordHistory:e}),rb(i.itemId,t.scrollToComponent)}else o({type:`setUi`,ui:{isDragging:!1},recordHistory:!1});r.endDrag();let s=()=>t.outlineDndStore.getState().reset();if(!n||n.status===`idle`)s();else{let e=er(()=>{n.status===`idle`&&(s(),e?.())})}},cb=[],lb=({children:e})=>{let t=N(),n=(0,I.useContext)(Kg),[r]=(0,I.useState)(()=>Cy()),i=F(e=>e.dnd?.disableOutlineDrag??!1),a=Fh({mouse:[new jd.Distance({value:5})]}),o=(0,I.useMemo)(()=>({outlineDndStore:r,appStore:t,scrollToComponent:e=>n.getState().scrollToComponent(e)}),[r,t,n]);return(0,L.jsx)(wy.Provider,{value:r,children:(0,L.jsx)(jf,{sensors:i?cb:a,onBeforeDragStart:e=>{ab(e,o)},onDragOver:(e,t)=>{e.preventDefault(),ob(e,t,o)},onDragMove:(e,t)=>{ob(e,t,o)},onDragEnd:e=>{sb(e,o)},children:e})})};c();var ub={LayerTreeRoot:`_LayerTreeRoot_1qowl_1`};c();var db=e=>{let t={};return Object.keys(e).forEach(e=>{let[n]=e.split(`:`);n&&(t[n]||(t[n]=[]),t[n].push(e))}),t},fb=(e,t,n,r)=>{if(r!==void 0)return r;let[,i]=e.split(`:`);if(i)return fy(e,n,t)?.label??i},pb=({config:e,itemId:t,index:n,nodes:r,zoneCompound:i,zones:a,zonesByParent:o,componentFallbackLabel:s})=>{let c=(r[t]?.data.type)?.toString()??s,l=e.components[c]?.label??c;return{childZones:(o[t]||[]).map(t=>mb({config:e,nodes:r,zoneCompound:t,zones:a,zonesByParent:o})),componentType:c,index:n,itemId:t,label:l,zoneCompound:i}},mb=({config:e,label:t,nodes:n,zoneCompound:r,zones:i,zonesByParent:a=db(i),componentFallbackLabel:o})=>({items:(i[r]?.contentIds??[]).map((t,o)=>pb({config:e,itemId:t,index:o,nodes:n,zoneCompound:r,zones:i,zonesByParent:a})),label:fb(r,n,e,t),zoneCompound:r}),hb=a(`LayerTreeRoot`,ub),gb=({selectedId:e,trees:t})=>{let n=F(e=>e.dnd?.disableOutlineDrag??!1);return(0,L.jsx)(lb,{children:(0,L.jsx)(`div`,{className:hb(),"data-puck-dnd-disabled":n||void 0,children:t.map(t=>(0,L.jsx)($y,{depth:0,selectedId:e,tree:t},t.zoneCompound))})})};c(),c();var _b=a(`CollapseAll`,{CollapseAll:`_CollapseAll_1r4cy_1`,"CollapseAll-icon":`_CollapseAll-icon_1r4cy_5`,"CollapseAll--visible":`_CollapseAll--visible_1r4cy_10`});function vb({className:e}){let t=F(e=>Object.keys(e.state.ui.itemExpanded??{}).length>0),n=F(e=>e.dispatch),r=P(`outline-header-collapseall`);return(0,L.jsx)(`div`,{className:Ay(_b({visible:t}),e),children:(0,L.jsx)(Be,{title:r,onClick:()=>{n({type:`setUi`,ui:{itemExpanded:{}}})},children:(0,L.jsx)(Oe,{className:_b(`icon`)})})})}var yb=vb;c(),c();var bb=a(`OutlineHeader`,{OutlineHeader:`_OutlineHeader_ntv8r_1`}),xb=({children:e,title:t})=>{let n=P(`outline-header-title`);return(0,L.jsxs)(`div`,{className:bb(),children:[(0,L.jsx)(_g,{rank:`2`,size:`xs`,children:n??t}),e]})};c();var Sb=a(`OutlineWrapper`,{OutlineWrapper:`_OutlineWrapper_b9ln0_1`,"OutlineWrapper-collapseAll":`_OutlineWrapper-collapseAll_b9ln0_9`,"OutlineWrapper-layers":`_OutlineWrapper-layers_b9ln0_15`}),Cb=({children:e})=>(0,L.jsx)(`div`,{className:Sb(),children:e}),wb=()=>{let e=F(e=>e.overrides.outline),t=F(e=>e.config),n=F(e=>e.state.indexes.nodes),r=F(e=>e.state.indexes.zones),i=F(e=>e.selectedItem?.props.id||null),a=P(`label-component`),o=F(kn(e=>uy(e.state,`root`))),s=(0,I.useMemo)(()=>o.map(e=>mb({config:t,label:o.length===1?``:e.split(`:`)[1],nodes:n,zoneCompound:e,zones:r,componentFallbackLabel:a})),[t,n,o,r,a]),c=(0,I.useMemo)(()=>e||Cb,[e]);return(0,L.jsxs)(c,{children:[(0,L.jsx)(xb,{children:(0,L.jsx)(yb,{className:Sb(`collapseAll`)})}),(0,L.jsx)(`div`,{className:Sb(`layers`),children:(0,L.jsx)(gb,{selectedId:i,trees:s})})]})};c();var Tb=a(`OutlinePlugin`,{OutlinePlugin:`_OutlinePlugin_1ylsc_1`}),Eb=(e={})=>({name:`outline`,label:e.label??`Outline`,render:()=>(0,L.jsx)(`div`,{className:Tb(),children:(0,L.jsx)(wb,{})}),icon:e.icon??(0,L.jsx)(Re,{})});c(),c(),c();var Db={Breadcrumbs:`_Breadcrumbs_8c6w5_1`,"Breadcrumbs-breadcrumbLabel":`_Breadcrumbs-breadcrumbLabel_8c6w5_7`,"Breadcrumbs-breadcrumb":`_Breadcrumbs-breadcrumb_8c6w5_7`};c();var Ob=e=>{let t=F(e=>e.selectedItem?.props.id),n=F(e=>e.config),r=F(e=>e.state.indexes.nodes[t]?.path),i=N(),a=P(`label-page`),o=P(`label-component`);return(0,I.useMemo)(()=>{let t=r?.map(e=>{let[t]=e.split(`:`);if(t===`root`)return{label:n?.root?.label||a,selector:null};let r=i.getState().state.indexes.nodes[t],s=r.path[r.path.length-1],c=(i.getState().state.indexes.zones[s]?.contentIds||[]).indexOf(t);return{label:r?n.components[r.data.type]?.label??r.data.type:o,selector:r?{index:c,zone:r.path[r.path.length-1]}:null}})||[];return e?t.slice(t.length-e):t},[r,e,a,o])},kb=a(`Breadcrumbs`,Db),Ab=({children:e,numParents:t=1})=>{let n=F(e=>e.setUi),r=Ob(t);return(0,L.jsxs)(`div`,{className:kb(),children:[r.map((e,t)=>(0,L.jsxs)(`div`,{className:kb(`breadcrumb`),children:[(0,L.jsx)(`button`,{type:`button`,className:kb(`breadcrumbLabel`),onClick:()=>n({itemSelector:e.selector}),children:e.label}),(0,L.jsx)(He,{size:16})]},t)),e]})};c(),c();var jb=a(`PuckFields`,{PuckFields:`_PuckFields_wnj25_1`,"PuckFields--isLoading":`_PuckFields--isLoading_wnj25_6`,"PuckFields-loadingOverlay":`_PuckFields-loadingOverlay_wnj25_10`,"PuckFields-loadingOverlayInner":`_PuckFields-loadingOverlayInner_wnj25_25`,"PuckFields-field":`_PuckFields-field_wnj25_32`,"PuckFields--wrapFields":`_PuckFields--wrapFields_wnj25_36`}),Mb=({children:e})=>(0,L.jsx)(L.Fragment,{children:e}),Nb=(t,n)=>(r,i)=>s(null,null,function*(){let{dispatch:a,state:s,selectedItem:c,resolveComponentData:l}=n.getState(),{data:u,ui:d}=s,{itemSelector:f}=d,p=u.root.props||u.root,m=c?c.props:p,h=e(o({},m),{[t]:r});if(c&&f){let t=yield l(e(o({},c),{props:h}),`replace`),r=R_(n.getState().state,c.props.id);if(!r)return;a({type:`replace`,destinationIndex:r.index,destinationZone:r.zone||w,data:t.node,ui:i});return}if(u.root.props){a({type:`replaceRoot`,root:(yield l(e(o({},u.root),{props:h}),`replace`)).node,ui:o(o({},d),i),recordHistory:!0});return}a({type:`setData`,data:{root:h}})}),Pb=({fieldName:e})=>{let t=F(t=>t.fields.fields[e]),n=F(t=>((t.selectedItem?t.selectedItem.readOnly:t.state.data.root.readOnly)||{})[e]),r=F(n=>t?n.selectedItem?`${n.selectedItem.props.id}_${t.type}_${e}`:`root_${t.type}_${e}`:null),i=F(kn(e=>{let{selectedItem:t,permissions:n}=e;return t?n.getPermissions({item:t}):n.getPermissions({root:!0})})),a=N(),o=(0,I.useCallback)(Nb(e,a),[e]),{visible:s=!0}=t??{},c=(0,I.useContext)(Eh.ctx);return(0,I.useEffect)(()=>a.subscribe(t=>t.getCurrentData().props?.[e],t=>{c.setState({[e]:t})}),[a,c]),!t||!r||!s||t.type===`slot`?null:(0,L.jsx)(`div`,{className:jb(`field`),children:(0,L.jsx)(Bg,{field:t,name:e,id:r,readOnly:!i.edit||n,onChange:o})},r)},Fb=(0,I.memo)(({fieldName:e})=>{let t=N(),n=(0,I.useMemo)(()=>{let n=t.getState().getCurrentData().props?.[e];return{[e]:n}},[]);return(0,L.jsx)(Eh.Provider,{value:n,children:(0,L.jsx)(Pb,{fieldName:e})})}),Ib=(0,I.memo)(({wrapFields:e=!0})=>{let t=F(e=>e.overrides),n=F(e=>((e.selectedItem?e.componentState[e.selectedItem.props.id]?.loadingCount:e.componentState.root?.loadingCount)??0)>0),r=F(kn(e=>e.state.ui.itemSelector)),i=F(e=>e.selectedItem?.props.id),a=N();pe(a,i);let o=F(e=>e.fields.loading),s=F(kn(e=>e.fields.id===i?Object.keys(e.fields.fields):[])),c=o||n,l=(0,I.useMemo)(()=>t.fields||Mb,[t]);return(0,L.jsxs)(`form`,{className:jb({wrapFields:e}),onSubmit:e=>{e.preventDefault()},children:[(0,L.jsx)(l,{isLoading:c,itemSelector:r,children:s.map(e=>(0,L.jsx)(Fb,{fieldName:e},e))}),c&&(0,L.jsx)(`div`,{className:jb(`loadingOverlay`),children:(0,L.jsx)(`div`,{className:jb(`loadingOverlayInner`),children:(0,L.jsx)(T,{size:16})})})]})});c();var Lb=a(`FieldsPlugin`,{FieldsPlugin:`_FieldsPlugin_18cj3_1`,"FieldsPlugin-header":`_FieldsPlugin-header_18cj3_7`}),Rb=()=>{let e=P(`label-page`);return F(e=>{let t=e.selectedItem;return t?e.config.components[t.type]?.label??t.type:null})??e},zb=({desktopSideBar:e=`right`,label:t,icon:n}={})=>({name:`fields`,label:t??`Fields`,render:()=>(0,L.jsxs)(`div`,{className:Lb(),children:[(0,L.jsx)(`div`,{className:Lb(`header`),children:(0,L.jsx)(Ab,{numParents:2,children:(0,L.jsx)(Rb,{})})}),(0,L.jsx)(Ib,{})]}),icon:n??(0,L.jsx)(Qe,{}),mobileOnly:e===`right`});c(),c(),c(),c(),c();var Bb=`@import "https://rsms.me/inter/inter.css";

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
}`,Vb=`/* styles/color.css */
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
}`,Hb=`data-puck-style-source`,Ub=`puck`,Wb=`data-puck-style-id`,Gb={uiDefault:`ui-default`,iframeInteractions:`iframe-styles`},Kb=new WeakMap,qb=e=>{if(e)return e;if(typeof document<`u`)return document},Jb=e=>{let t=Kb.get(e);if(t)return t;let n=new Map;return Kb.set(e,n),n},Yb=(e,t,n=!1)=>{let r=e.head;if(r){if(t.parentElement!==r){n?r.prepend(t):r.append(t);return}n&&r.firstChild!==t&&r.prepend(t),!n&&r.lastChild!==t&&r.append(t)}},Xb=(e,t,n,r=!1)=>{let i=e.createElement(`style`);return i.setAttribute(Hb,Ub),i.setAttribute(Wb,t),i.textContent=n,Yb(e,i,r),i},Zb=e=>e?.getAttribute(Hb)===Ub,Qb=e=>{let t=qb(e?.document);(0,I.useInsertionEffect)(()=>{if(!e||!t)return;let n=Jb(t),r=n.get(e.id);if(r)r.count+=1,r.el.textContent!==e.cssText&&(r.el.textContent=e.cssText),Yb(t,r.el,e.prepend);else{let r=Xb(t,e.id,e.cssText,e.prepend);n.set(e.id,{count:1,el:r})}return()=>{let t=n.get(e.id);t&&(--t.count,t.count<=0&&(t.el.remove(),n.delete(e.id)))}},[e?.cssText,e?.id,e?.prepend,e?.document,t])},$b=null,ex=()=>$b===null?typeof document>`u`?!1:($b=getComputedStyle(document.documentElement).getPropertyValue(`--_puck-styles-loaded`).trim()!==``,$b):$b,tx=()=>{Qb(ex()?null:{cssText:Bb,id:Gb.uiDefault,prepend:!0}),(0,I.useEffect)(()=>{},[])},nx=e=>{Qb(e?{cssText:Vb,document:e,id:Gb.iframeInteractions}:null)},rx=`style, link[rel="stylesheet"]`,ix=`data-puck-style-mirror`,ax=e=>!e.matches(rx)||Zb(e)?!1:e.tagName!==`STYLE`||!!e.innerHTML.trim(),ox=e=>{let t=[];return e.querySelectorAll(rx).forEach(e=>{ax(e)&&t.push(e)}),t},sx=e=>Array.from(document.styleSheets).find(t=>t.ownerNode.href===e.href),cx=e=>{if(e)try{return Array.from(e.cssRules).map(e=>e.cssText).join(``)}catch{console.warn(`Access to stylesheet %s is denied. Ignoring…`,e.href)}return``},lx=(e,t)=>{let n=e.attributes;n?.length>0&&Array.from(n).forEach(e=>{t.setAttribute(e.name,e.value)})},ux=e=>setTimeout(e,0),dx=({children:e,debug:t=!1,onStylesLoaded:n=()=>null,syncHostStyles:r=!0})=>{let{document:i,window:a}=px();return nx(i),(0,I.useEffect)(()=>{if(!a||!i)return()=>{};let e=[],o={},c=()=>{e.forEach(({mirror:e})=>{e.remove()}),e=[],Array.from(i.head.querySelectorAll(`[${ix}="true"]`)).forEach(e=>{e.remove()}),Object.keys(o).forEach(e=>{delete o[e]})},l=t=>e.findIndex(e=>e.original===t),u=(e,n=!1)=>s(null,null,function*(){let r;if(e.nodeName===`LINK`&&n){r=document.createElement(`style`),r.type=`text/css`;let n=sx(e);n||=(yield new Promise(t=>{let n=()=>{t(),e.removeEventListener(`load`,n)};e.addEventListener(`load`,n)}),sx(e));let i=cx(n);if(!i){t&&console.warn(`Tried to load styles for link element, but couldn't find them. Skipping...`);return}r.innerHTML=i,r.setAttribute(`data-href`,e.getAttribute(`href`))}else r=e.cloneNode(!0);return r.setAttribute(ix,`true`),r}),d=n=>s(null,null,function*(){let r=l(n);if(r>-1){t&&console.log(`Tried to add an element that was already mirrored. Updating instead...`),e[r].mirror.innerText=n.innerText;return}let a=yield u(n);if(!a)return;let s=(0,lh.default)(a.outerHTML);if(o[s]){t&&console.log(`iframe already contains element that is being mirrored. Skipping...`);return}o[s]=!0,i.head.append(a),e.push({original:n,mirror:a}),t&&console.log(`Added style node ${n.outerHTML}`)}),f=n=>{var r;let i=l(n);if(i===-1){t&&console.log(`Tried to remove an element that did not exist. Skipping...`);return}let a=(0,lh.default)(n.outerHTML);(r=e[i]?.mirror)==null||r.remove(),delete o[a],t&&console.log(`Removed style node ${n.outerHTML}`)},p=new MutationObserver(e=>{e.forEach(e=>{e.type===`childList`&&(e.addedNodes.forEach(e=>{if(e.nodeType===Node.TEXT_NODE||e.nodeType===Node.ELEMENT_NODE){let t=e.nodeType===Node.TEXT_NODE?e.parentElement:e;t&&ax(t)&&ux(()=>d(t))}}),e.removedNodes.forEach(e=>{if(e.nodeType===Node.TEXT_NODE||e.nodeType===Node.ELEMENT_NODE){let t=e.nodeType===Node.TEXT_NODE?e.parentElement:e;t&&t.matches(rx)&&!Zb(t)&&ux(()=>f(t))}}))})});if(!r)return n(),()=>{p.disconnect(),c()};let m=a.parent.document,h=ox(m),g=[],_=0,v=m.getElementsByTagName(`html`)[0];lx(v,i.documentElement);let y=m.getElementsByTagName(`body`)[0];return lx(y,i.body),Promise.all(h.map((t,n)=>s(null,null,function*(){if(t.nodeName===`LINK`){let e=t.href;if(g.indexOf(e)>-1)return;g.push(e)}let n=yield u(t);if(n)return e.push({original:t,mirror:n}),n}))).then(e=>{let t=e.filter(e=>e!==void 0);t.forEach(e=>{e.onload=()=>{_+=1,_>=t.length&&n()},e.onerror=()=>{let r=e instanceof HTMLLinkElement?e.href:void 0;console.warn(`AutoFrame couldn't load a stylesheet${r?`: ${r}`:``}. This can happen if the parent document's stylesheet is blocked by the iframe's CSP, returns a non-2xx status, or fails to reach the network.`),_+=1,_>=t.length&&n()}}),i.head.querySelectorAll(`[${ix}="true"]`).forEach(e=>{e.remove()}),i.head.append(...t),t.forEach(e=>{e.nodeName===`STYLE`&&(_+=1)}),_>=t.length&&n(),p.observe(m.head,{childList:!0,subtree:!0}),t.forEach(e=>{let t=(0,lh.default)(e.outerHTML);o[t]=!0})}),()=>{p.disconnect(),c()}},[r]),(0,L.jsx)(L.Fragment,{children:e})},fx=(0,I.createContext)({}),px=()=>(0,I.useContext)(fx);function mx(t){var n=t,{children:i,className:a,debug:s,id:c,onReady:l=()=>{},onNotReady:u=()=>{},frameRef:d,syncHostStyles:f=!0}=n,p=r(n,[`children`,`className`,`debug`,`id`,`onReady`,`onNotReady`,`frameRef`,`syncHostStyles`]);let[m,h]=(0,I.useState)(!1),[g,_]=(0,I.useState)({}),[v,y]=(0,I.useState)(),[b,x]=(0,I.useState)(!1);return(0,I.useEffect)(()=>{m&&x(!f)},[m,f]),(0,I.useEffect)(()=>{if(d.current){let e=d.current.contentDocument,t=d.current.contentWindow;_({document:e||void 0,window:t||void 0}),y(d.current.contentDocument?.getElementById(`frame-root`)),e&&t&&b?l():u()}},[d,m,b]),(0,L.jsx)(`iframe`,e(o({},p),{className:a,id:c,srcDoc:`<!DOCTYPE html><html><head></head><body><div id="frame-root" data-puck-entry></div></body></html>`,ref:d,onLoad:()=>{h(!0)},children:(0,L.jsx)(fx.Provider,{value:g,children:m&&v&&(0,L.jsx)(dx,{debug:s,onStylesLoaded:()=>x(!0),syncHostStyles:f,children:(0,wt.createPortal)(i,v)})})}))}mx.displayName=`AutoFrame`;var hx=mx;c();var gx=fn(Bv),_x=(0,I.memo)(()=>{let t=F(kn(e=>e.state.indexes.nodes.root?.flatData.props)),n=F(e=>e.config),r=F(e=>e.metadata),i=vv(n,(0,I.useMemo)(()=>{let e=S({props:t??{}});return gt(e)},[t]),gx),a=(0,I.useMemo)(()=>e(o({},i),{children:(0,L.jsx)(Kv,{zone:w}),puck:{renderDropZone:Kv,isEditing:!0,dragRef:null,metadata:r},editMode:!0}),[i,r]),s=bn(n.root?.fields??{},a);return n.root?.render?n.root?.render(e(o(o({},a),s),{id:`puck-root`})):(0,L.jsx)(L.Fragment,{children:a.children})});_x.displayName=`EditorPage`;var vx=_x;c();var yx=a(`PuckPreview`,{PuckPreview:`_PuckPreview_zbic3_1`,"PuckPreview-frame":`_PuckPreview-frame_zbic3_6`}),bx=t=>{let n=F(e=>e.status);(0,I.useEffect)(()=>{if(t.current&&n===`READY`){let n=t.current,r=t=>{let r=new k_(`pointermove`,e(o({},t),{bubbles:!0,cancelable:!1,clientX:t.clientX,clientY:t.clientY,pointerId:t.pointerId,pointerType:t.pointerType,isPrimary:t.isPrimary,originalTarget:t.target}));n.dispatchEvent(r)},i=()=>{var e;a(),(e=n.contentDocument)==null||e.addEventListener(`pointermove`,r,{capture:!0})},a=()=>{var e;(e=n.contentDocument)==null||e.removeEventListener(`pointermove`,r)};return i(),()=>{a()}}},[n])},xx=e=>{let t=F(e=>e.state.ui.previewMode),n=F(e=>e.status),r=F(e=>e.iframe.enabled);(0,I.useEffect)(()=>{(r?(e.current?.contentDocument)?.querySelector(`[data-puck-entry]`):e.current)?.setAttribute(`data-puck-preview-mode`,t)},[t,n,r])},Sx=({id:e=`puck-preview`})=>{let t=F(e=>e.dispatch),n=F(e=>e.config),r=F(e=>e.setStatus),i=F(e=>e.iframe),a=F(e=>e.overrides),o=F(e=>e.metadata),s=F(e=>e.state.ui.previewMode===`edit`?null:e.state.data),c=(0,I.useMemo)(()=>a.iframe,[a]),l=(0,I.useRef)(null);bx(l),xx(l);let u=s?(0,L.jsx)(Yv,{data:s,config:n,metadata:o}):(0,L.jsx)(vx,{});return(0,I.useEffect)(()=>{i.enabled||r(`READY`)},[i.enabled]),(0,L.jsx)(`div`,{className:yx(),id:e,"data-puck-preview":!0,onClick:e=>{let n=e.target;!n.hasAttribute(`data-puck-component`)&&!n.hasAttribute(`data-puck-dropzone`)&&t({type:`setUi`,ui:{itemSelector:null}})},children:i.enabled?(0,L.jsx)(hx,{id:`preview-frame`,className:yx(`frame`),"data-rfd-iframe":!0,syncHostStyles:i.syncHostStyles,onReady:()=>{r(`READY`)},onNotReady:()=>{r(`MOUNTED`)},frameRef:l,children:(0,L.jsx)(fx.Consumer,{children:({document:e})=>c?(0,L.jsx)(c,{document:e,children:u}):u})}):(0,L.jsx)(`div`,{id:`preview-frame`,className:yx(`frame`),ref:l,"data-puck-entry":!0,children:u})})};c(),c();var Cx=({overrides:t,plugins:n})=>{let r=o({},t);return n?.forEach(t=>{t.overrides&&Object.keys(t.overrides).forEach(n=>{let i=n;if(!t.overrides?.[i])return;if(i===`fieldTypes`){let n=t.overrides.fieldTypes;Object.keys(n).forEach(t=>{r.fieldTypes=r.fieldTypes||{};let i=r.fieldTypes[t],a=r=>n[t](e(o({},r),{children:i?i(r):r.children}));r.fieldTypes[t]=a});return}let a=r[i];r[i]=n=>t.overrides[i](e(o({},n),{children:a?a(n):n.children}))})}),r},wx=({overrides:e,plugins:t})=>(0,I.useMemo)(()=>Cx({overrides:e,plugins:t}),[t,e]);c(),c();var Tx={Puck:`_Puck_tzaxg_19`,"Puck-portal":`_Puck-portal_tzaxg_31`,PuckLayout:`_PuckLayout_tzaxg_36`,"PuckLayout-inner":`_PuckLayout-inner_tzaxg_40`,"Puck--hidePlugins":`_Puck--hidePlugins_tzaxg_73`,"PuckLayout--mounted":`_PuckLayout--mounted_tzaxg_78`,"PuckLayout--mobilePanelHeightToggle":`_PuckLayout--mobilePanelHeightToggle_tzaxg_82`,"PuckLayout--leftSideBarVisible":`_PuckLayout--leftSideBarVisible_tzaxg_82`,"PuckLayout--isExpanded":`_PuckLayout--isExpanded_tzaxg_90`,"PuckLayout--mobilePanelHeightMinContent":`_PuckLayout--mobilePanelHeightMinContent_tzaxg_110`,"PuckLayout--rightSideBarVisible":`_PuckLayout--rightSideBarVisible_tzaxg_137`,"PuckLayout-mounted":`_PuckLayout-mounted_tzaxg_156`,"PuckLayout-nav":`_PuckLayout-nav_tzaxg_197`,"PuckLayout-header":`_PuckLayout-header_tzaxg_217`,PuckPluginTab:`_PuckPluginTab_tzaxg_231`,"PuckPluginTab--visible":`_PuckPluginTab--visible_tzaxg_237`,"PuckPluginTab-body":`_PuckPluginTab-body_tzaxg_243`};c();var Ex=({children:e})=>(0,L.jsx)(L.Fragment,{children:e});c();var Dx=()=>{let e=N(),t=(0,I.useCallback)(()=>{let t=e.getState().dispatch;t({type:`setUi`,ui:e=>({previewMode:e.previewMode===`edit`?`interactive`:`edit`})})},[e]);mt({meta:!0,i:!0},t),mt({ctrl:!0,i:!0},t)};c(),c(),c();var Ox=a(`MenuBar`,{MenuBar:`_MenuBar_1hxnj_1`,"MenuBar--menuOpen":`_MenuBar--menuOpen_1hxnj_14`,"MenuBar-inner":`_MenuBar-inner_1hxnj_29`,"MenuBar-history":`_MenuBar-history_1hxnj_45`});function kx({menuOpen:e=!1,renderHeaderActions:t,setMenuOpen:n}){let r=F(e=>e.history.back),i=F(e=>e.history.forward),a=F(e=>e.history.hasFuture()),o=F(e=>e.history.hasPast()),s=P(`header-undo`),c=P(`header-redo`);return(0,L.jsx)(`div`,{className:Ox({menuOpen:e}),onClick:e=>{let t=e.target;window.matchMedia(`(min-width: 638px)`).matches||t.tagName===`A`&&t.getAttribute(`href`)?.startsWith(`#`)&&n(!1)},children:(0,L.jsxs)(`div`,{className:Ox(`inner`),children:[(0,L.jsxs)(`div`,{className:Ox(`history`),children:[(0,L.jsx)(Be,{type:`button`,title:s,disabled:!o,onClick:r,children:(0,L.jsx)(Ye,{size:21})}),(0,L.jsx)(Be,{type:`button`,title:c,disabled:!a,onClick:i,children:(0,L.jsx)(E,{size:21})})]}),(0,L.jsx)(L.Fragment,{children:t&&t()})]})})}c();var Ax=a(`PuckHeader`,{PuckHeader:`_PuckHeader_c2nei_1`,"PuckHeader--hidePlugins":`_PuckHeader--hidePlugins_c2nei_21`,"PuckHeader-inner":`_PuckHeader-inner_c2nei_26`,"PuckHeader-toggle":`_PuckHeader-toggle_c2nei_46`,"PuckHeader-rightSideBarToggle":`_PuckHeader-rightSideBarToggle_c2nei_52`,"PuckHeader-leftSideBarToggle":`_PuckHeader-leftSideBarToggle_c2nei_53`,"PuckHeader-title":`_PuckHeader-title_c2nei_64`,"PuckHeader-path":`_PuckHeader-path_c2nei_68`,"PuckHeader-tools":`_PuckHeader-tools_c2nei_75`,"PuckHeader-menuButton":`_PuckHeader-menuButton_c2nei_81`,"PuckHeader--menuOpen":`_PuckHeader--menuOpen_c2nei_86`}),jx=(0,I.memo)(({hidePlugins:t})=>{let{onPublish:n,renderHeader:i,renderHeaderActions:a,headerTitle:s,headerPath:c,iframe:l}=yS(),u=F(e=>e.dispatch),d=N(),f=(0,I.useMemo)(()=>i?(console.warn("`renderHeader` is deprecated. Please use `overrides.header` and the `usePuck` hook instead"),t=>{var n=t,{actions:a}=n,s=r(n,[`actions`]);let c=i,l=F(e=>e.state);return(0,L.jsx)(c,e(o({},s),{dispatch:u,state:l,children:a}))}):Ex,[i]),p=(0,I.useMemo)(()=>a?(console.warn("`renderHeaderActions` is deprecated. Please use `overrides.headerActions` and the `usePuck` hook instead."),t=>{let n=a,r=F(e=>e.state);return(0,L.jsx)(n,e(o({},t),{dispatch:u,state:r}))}):Ex,[a]),m=F(e=>e.overrides.header||f),h=F(e=>e.overrides.headerActions||p),[g,_]=(0,I.useState)(!1),v=F(e=>(e.state.indexes.nodes.root?.data).props.title??``),y=F(e=>e.state.ui.leftSideBarVisible),b=F(e=>e.state.ui.rightSideBarVisible),x=(0,I.useCallback)(e=>{let t=window.matchMedia(`(min-width: 638px)`).matches,n=e===`left`?y:b,r=e===`left`?`rightSideBarVisible`:`leftSideBarVisible`;u({type:`setUi`,ui:o({[`${e}SideBarVisible`]:!n},t?{}:{[r]:!1})})},[u,y,b]),S=P(`header-publish`),C=P(`label-page`),w=P(`header-toggle-leftsidebar`),T=P(`header-toggle-rightsidebar`),ee=P(`header-toggle-menubar`);return(0,L.jsx)(m,{actions:(0,L.jsx)(L.Fragment,{children:(0,L.jsx)(h,{children:(0,L.jsx)(_h,{onClick:()=>{let e=d.getState().state.data;n&&n(e)},icon:(0,L.jsx)(pt,{size:`14px`}),children:S})})}),children:(0,L.jsx)(`header`,{className:Ax({leftSideBarVisible:y,rightSideBarVisible:b,hidePlugins:t}),children:(0,L.jsxs)(`div`,{className:Ax(`inner`),children:[(0,L.jsxs)(`div`,{className:Ax(`toggle`),children:[(0,L.jsx)(`div`,{className:Ax(`leftSideBarToggle`),children:(0,L.jsx)(Be,{type:`button`,onClick:()=>{x(`left`)},title:w,children:(0,L.jsx)(he,{focusable:`false`})})}),(0,L.jsx)(`div`,{className:Ax(`rightSideBarToggle`),children:(0,L.jsx)(Be,{type:`button`,onClick:()=>{x(`right`)},title:T,children:(0,L.jsx)(j,{focusable:`false`})})})]}),(0,L.jsx)(`div`,{className:Ax(`title`),children:(0,L.jsxs)(_g,{rank:`2`,size:`xs`,children:[s||v||C,c&&(0,L.jsxs)(L.Fragment,{children:[` `,(0,L.jsx)(`code`,{className:Ax(`path`),children:c})]})]})}),(0,L.jsxs)(`div`,{className:Ax(`tools`),children:[(0,L.jsx)(`div`,{className:Ax(`menuButton`),children:(0,L.jsx)(Be,{type:`button`,onClick:()=>_(!g),title:ee,children:g?(0,L.jsx)(ot,{focusable:`false`}):(0,L.jsx)(Ee,{focusable:`false`})})}),(0,L.jsx)(kx,{dispatch:u,onPublish:n,menuOpen:g,renderHeaderActions:()=>(0,L.jsx)(h,{children:(0,L.jsx)(_h,{onClick:()=>{let e=d.getState().state.data;n&&n(e)},icon:(0,L.jsx)(pt,{size:`14px`}),children:S})}),setMenuOpen:_})]})]})})})});c(),c();var Mx=a(`SidebarSection`,{SidebarSection:`_SidebarSection_1uv88_1`,"SidebarSection-title":`_SidebarSection-title_1uv88_12`,"SidebarSection--noBorderTop":`_SidebarSection--noBorderTop_1uv88_20`,"SidebarSection-content":`_SidebarSection-content_1uv88_24`,"SidebarSection-breadcrumbLabel":`_SidebarSection-breadcrumbLabel_1uv88_33`,"SidebarSection-breadcrumbs":`_SidebarSection-breadcrumbs_1uv88_62`,"SidebarSection-breadcrumb":`_SidebarSection-breadcrumb_1uv88_33`,"SidebarSection-heading":`_SidebarSection-heading_1uv88_74`,"SidebarSection-loadingOverlay":`_SidebarSection-loadingOverlay_1uv88_78`}),Nx=({children:e,title:t,background:n,showBreadcrumbs:r,noBorderTop:i,isLoading:a})=>(0,L.jsxs)(`div`,{className:Mx({noBorderTop:i}),style:{background:n},children:[(0,L.jsx)(`div`,{className:Mx(`title`),children:(0,L.jsxs)(`div`,{className:Mx(`breadcrumbs`),children:[r&&(0,L.jsx)(Ab,{}),(0,L.jsx)(`div`,{className:Mx(`heading`),children:(0,L.jsx)(_g,{rank:`2`,size:`xs`,children:t})})]})}),(0,L.jsx)(`div`,{className:Mx(`content`),children:e}),a&&(0,L.jsx)(`div`,{className:Mx(`loadingOverlay`),children:(0,L.jsx)(T,{size:32})})]});c(),c(),c();var Px={ViewportControls:`_ViewportControls_v26yb_1`,"ViewportControls--fullScreen":`_ViewportControls--fullScreen_v26yb_5`,"ViewportControls-toggleButton":`_ViewportControls-toggleButton_v26yb_14`,"ViewportControls-actions":`_ViewportControls-actions_v26yb_39`,"ViewportControls-actionsInner":`_ViewportControls-actionsInner_v26yb_43`,"ViewportControls--isExpanded":`_ViewportControls--isExpanded_v26yb_67`,"ViewportControls-divider":`_ViewportControls-divider_v26yb_72`,"ViewportControls-zoomSelect":`_ViewportControls-zoomSelect_v26yb_79`,"ViewportControls-zoom":`_ViewportControls-zoom_v26yb_79`,"ViewportButton-inner":`_ViewportButton-inner_v26yb_110`,"ViewportButton--isActive":`_ViewportButton--isActive_v26yb_118`},Fx={Smartphone:(0,L.jsx)(k,{size:16}),Tablet:(0,L.jsx)(at,{size:16}),Monitor:(0,L.jsx)(C,{size:16}),FullWidth:(0,L.jsx)(ct,{size:16})},Ix=a(`ViewportControls`,Px),Lx=a(`ViewportButton`,Px),Rx=({children:e,title:t,onClick:n,isActive:r,disabled:i})=>(0,L.jsx)(`span`,{className:Lx({isActive:r}),suppressHydrationWarning:!0,children:(0,L.jsx)(Be,{type:`button`,title:t,disabled:i||r,onClick:n,suppressHydrationWarning:!0,children:(0,L.jsx)(`span`,{className:Lx(`inner`),children:e})})}),zx=[{label:`25%`,value:.25},{label:`50%`,value:.5},{label:`75%`,value:.75},{label:`100%`,value:1},{label:`125%`,value:1.25},{label:`150%`,value:1.5},{label:`200%`,value:2}],Bx=({viewport:e,isActive:t,onClick:n})=>{let r=P(`viewport-switch`,{label:e.label??``}),i=P(`viewport-switch-default`);return(0,L.jsx)(Rx,{title:e.label?r:i,onClick:n,isActive:t,children:typeof e.icon==`string`?Fx[e.icon]||e.icon:e.icon||Fx.Smartphone})},Vx=({autoZoom:e,zoom:t,onViewportChange:n,onZoom:r,fullScreen:i})=>{let a=F(e=>e.viewports),o=F(e=>e.state.ui.viewports),s=zx.find(t=>t.value===e),c=P(`viewport-zoom-auto`,{zoom:(e*100).toFixed(0)}),l=(0,I.useMemo)(()=>[...zx,...s?[]:[{value:e,label:c}]].filter(t=>t.value<=e).sort((e,t)=>e.value>t.value?1:-1),[e,c]),[u,d]=(0,I.useState)(o.current.width);(0,I.useEffect)(()=>{d(o.current.width)},[o.current]);let[f,p]=(0,I.useState)(!1),m=P(`viewport-zoom-out`),h=P(`viewport-zoom-in`),g=P(`viewport-toggle-menu`);return(0,L.jsxs)(`div`,{className:Ix({isExpanded:f,fullScreen:i}),suppressHydrationWarning:!0,children:[(0,L.jsx)(`div`,{className:Ix(`actions`),children:(0,L.jsxs)(`div`,{className:Ix(`actionsInner`),children:[a.map((e,t)=>(0,L.jsx)(Bx,{viewport:e,onClick:()=>{d(e.width),n(e)},isActive:u===e.width},t)),(0,L.jsx)(`div`,{className:Ix(`divider`)}),(0,L.jsx)(Rx,{title:m,disabled:t<=l[0]?.value,onClick:e=>{e.stopPropagation(),r(l[Math.max(l.findIndex(e=>e.value===t)-1,0)].value)},children:(0,L.jsx)(Ue,{size:16})}),(0,L.jsx)(Rx,{title:h,disabled:t>=l[l.length-1]?.value,onClick:e=>{e.stopPropagation(),r(l[Math.min(l.findIndex(e=>e.value===t)+1,l.length-1)].value)},children:(0,L.jsx)(De,{size:16})}),(0,L.jsxs)(`div`,{className:Ix(`zoom`),children:[(0,L.jsx)(`div`,{className:Ix(`divider`)}),(0,L.jsx)(`select`,{className:Ix(`zoomSelect`),value:t.toString(),onClick:e=>{e.stopPropagation()},onChange:e=>{r(parseFloat(e.currentTarget.value))},children:l.map(e=>(0,L.jsx)(`option`,{value:e.value,label:e.label},e.label))})]})]})}),(0,L.jsx)(`button`,{className:Ix(`toggleButton`),title:g,onClick:()=>p(e=>!e),children:f?(0,L.jsx)(rt,{size:16}):(0,L.jsx)(C,{size:16})})]})};c();var Hx={PuckCanvas:`_PuckCanvas_zw9iy_1`,"PuckCanvas-controls":`_PuckCanvas-controls_zw9iy_18`,"PuckCanvas--fullScreen":`_PuckCanvas--fullScreen_zw9iy_23`,"PuckCanvas-inner":`_PuckCanvas-inner_zw9iy_34`,"PuckCanvas-root":`_PuckCanvas-root_zw9iy_43`,"PuckCanvas--ready":`_PuckCanvas--ready_zw9iy_68`,"PuckCanvas-loader":`_PuckCanvas-loader_zw9iy_73`,"PuckCanvas--showLoader":`_PuckCanvas--showLoader_zw9iy_84`};c();var Ux=(0,I.createContext)(null),Wx=({children:e})=>{let t=(0,I.useRef)(null),n=(0,I.useMemo)(()=>({frameRef:t}),[]);return(0,L.jsx)(Ux.Provider,{value:n,children:e})},Gx=()=>{let e=(0,I.useContext)(Ux);if(e===null)throw Error(`useCanvasFrame must be used within a FrameProvider`);return e},Kx=a(`PuckCanvas`,Hx),qx=!0,Jx=150,Yx=()=>{let{frameRef:t}=Gx(),n=me(t),{viewports:r=p,ui:i}=yS(),{dispatch:a,overrides:s,setUi:c,zoomConfig:l,setZoomConfig:u,status:d,iframe:f,_experimentalFullScreenCanvas:m}=F(kn(e=>({dispatch:e.dispatch,overrides:e.overrides,setUi:e.setUi,zoomConfig:e.zoomConfig,setZoomConfig:e.setZoomConfig,status:e.status,iframe:e.iframe,_experimentalFullScreenCanvas:e._experimentalFullScreenCanvas}))),{leftSideBarVisible:h,rightSideBarVisible:g,leftSideBarWidth:_,rightSideBarWidth:v,viewports:y}=F(kn(e=>({leftSideBarVisible:e.state.ui.leftSideBarVisible,rightSideBarVisible:e.state.ui.rightSideBarVisible,leftSideBarWidth:e.state.ui.leftSideBarWidth,rightSideBarWidth:e.state.ui.rightSideBarWidth,viewports:e.state.ui.viewports}))),[b,x]=(0,I.useState)(!1),S=(0,I.useRef)(!1),C=(0,I.useMemo)(()=>({children:e})=>(0,L.jsx)(L.Fragment,{children:e}),[]),w=(0,I.useMemo)(()=>s.preview||C,[s]),ee=(0,I.useCallback)(()=>{if(t.current){let e=t.current,n=Me(e);return{width:n.contentBox.width,height:n.contentBox.height}}return{width:0,height:0}},[t]);(0,I.useEffect)(()=>{n()},[t,h,g,_,v,y]),(0,I.useEffect)(()=>{let{height:t}=ee();y.current.height===`auto`&&u(e(o({},l),{rootHeight:t/l.zoom}))},[l.zoom,ee,u]),(0,I.useEffect)(()=>{qx&&n()},[y.current.width,y]),(0,I.useEffect)(()=>{if(!t.current)return;let e=new ResizeObserver(()=>{S.current||n()});return e.observe(t.current),()=>{e.disconnect()}},[t.current]);let[E,D]=(0,I.useState)(!1);(0,I.useEffect)(()=>{setTimeout(()=>{D(!0)},500)},[]);let te=N();return(0,I.useEffect)(()=>{if(typeof window>`u`||i?.viewports?.current)return;let n=window.innerWidth,a=t.current?.getBoundingClientRect().width;if(!n||!a||r.length===0)return;let s=Object.values(r).find(e=>e.width===`100%`),c=!!s,l=Object.entries(r).filter(([e,t])=>t.width!==`100%`).map(([e,t])=>({key:e,diff:Math.abs(n-(typeof t.width==`string`?n:t.width)),value:t})).sort((e,t)=>e.diff>t.diff?1:-1)[0].value;if(l.width<a&&c&&(l=s),f.enabled){let t=te.getState(),n={state:e(o({},t.state),{ui:e(o({},t.state.ui),{viewports:e(o({},t.state.ui.viewports),{current:e(o({},t.state.ui.viewports.current),{height:l?.height||`auto`,width:l?.width})})})})},r=t.history;t.history.histories.length===1&&(r=e(o({},r),{histories:[n]})),te.setState(e(o({},n),{history:r}))}},[r,t.current,f,te,i?.viewports?.current]),(0,L.jsxs)(`div`,{className:Kx({ready:d===`READY`||!f.enabled||!f.waitForStyles,showLoader:E,fullScreen:m}),onClick:e=>{let t=e.target;!t.hasAttribute(`data-puck-component`)&&!t.hasAttribute(`data-puck-dropzone`)&&a({type:`setUi`,ui:{itemSelector:null},recordHistory:!1})},children:[y.controlsVisible&&f.enabled&&(0,L.jsx)(`div`,{className:Kx(`controls`),children:(0,L.jsx)(Vx,{fullScreen:m,autoZoom:l.autoZoom,zoom:l.zoom,onViewportChange:t=>{x(!0),S.current=!0;let r=e(o({},t),{height:t.height||`auto`,zoom:l.zoom}),i={viewports:e(o({},y),{current:r})};c(i),qx&&n({viewports:e(o({},y),{current:r})})},onZoom:t=>{x(!0),S.current=!0,u(e(o({},l),{zoom:t}))}})}),(0,L.jsxs)(`div`,{className:Kx(`inner`),ref:t,children:[(0,L.jsx)(`div`,{className:Kx(`root`),style:{width:f.enabled?y.current.width:`100%`,height:l.rootHeight,transform:f.enabled?`scale(${l.zoom})`:void 0,transition:b?`width ${Jx}ms ease-out, height ${Jx}ms ease-out, transform ${Jx}ms ease-out`:``,overflow:f.enabled?void 0:`auto`},suppressHydrationWarning:!0,id:`puck-canvas-root`,onTransitionEnd:()=>{x(!1),S.current=!1},children:(0,L.jsx)(w,{children:(0,L.jsx)(Sx,{})})}),(0,L.jsx)(`div`,{className:Kx(`loader`),children:(0,L.jsx)(T,{size:24})})]})]})};c();function Xx(t,n){let[r,i]=(0,I.useState)(null),a=(0,I.useRef)(null),s=F(e=>t===`left`?e.state.ui.leftSideBarWidth:e.state.ui.rightSideBarWidth);return(0,I.useEffect)(()=>{if(typeof window<`u`&&!s)try{let e=localStorage.getItem(`puck-sidebar-widths`);if(e){let r=JSON.parse(e)[t];r&&n({type:`setUi`,ui:{[t===`left`?`leftSideBarWidth`:`rightSideBarWidth`]:r}})}}catch(e){console.error(`Failed to load ${t} sidebar width from localStorage`,e)}},[n,t,s]),(0,I.useEffect)(()=>{s!==void 0&&i(s)},[s]),{width:r,setWidth:i,sidebarRef:a,handleResizeEnd:(0,I.useCallback)(r=>{n({type:`setUi`,ui:{[t===`left`?`leftSideBarWidth`:`rightSideBarWidth`]:r}});let i={};try{let e=localStorage.getItem(`puck-sidebar-widths`);i=e?JSON.parse(e):{}}catch(e){console.error(`Failed to save ${t} sidebar width to localStorage`,e)}finally{localStorage.setItem(`puck-sidebar-widths`,JSON.stringify(e(o({},i),{[t]:r})))}window.dispatchEvent(new CustomEvent(`viewportchange`,{bubbles:!0,cancelable:!1}))},[n,t])}}c(),c(),c();var Zx=a(`ResizeHandle`,{ResizeHandle:`_ResizeHandle_144bf_2`,"ResizeHandle--left":`_ResizeHandle--left_144bf_16`,"ResizeHandle--right":`_ResizeHandle--right_144bf_20`}),Qx=({position:e,sidebarRef:t,onResize:n,onResizeEnd:r})=>{let{frameRef:i}=Gx(),a=me(i),o=(0,I.useRef)(null),s=(0,I.useRef)(!1),c=(0,I.useRef)(0),l=(0,I.useRef)(0),u=(0,I.useCallback)(t=>{if(!s.current)return;let r=t.clientX-c.current,i=e===`left`?l.current+r:l.current-r;n(Math.max(192,i)),t.preventDefault()},[n,e]),d=(0,I.useCallback)(()=>{if(!s.current)return;s.current=!1,document.body.style.cursor=``,document.body.style.userSelect=``;let e=document.getElementById(`resize-overlay`);e&&document.body.removeChild(e),document.removeEventListener(`mousemove`,u),document.removeEventListener(`mouseup`,d),r(t.current?.getBoundingClientRect().width||0),a()},[r]),f=(0,I.useCallback)(e=>{s.current=!0,c.current=e.clientX,l.current=t.current?.getBoundingClientRect().width||0,document.body.style.cursor=`col-resize`,document.body.style.userSelect=`none`;let n=document.createElement(`div`);n.id=`resize-overlay`,n.setAttribute(`data-resize-overlay`,``),document.body.appendChild(n),document.addEventListener(`mousemove`,u),document.addEventListener(`mouseup`,d),e.preventDefault()},[e,u,d]);return(0,L.jsx)(`div`,{ref:o,className:Zx({[e]:!0}),onMouseDown:f})};c();var $x=a(`Sidebar`,{Sidebar:`_Sidebar_16oed_1`,"Sidebar--isVisible":`_Sidebar--isVisible_16oed_10`,"Sidebar--left":`_Sidebar--left_16oed_14`,"Sidebar--right":`_Sidebar--right_16oed_34`,"Sidebar-resizeHandle":`_Sidebar-resizeHandle_16oed_51`}),eS=({position:e,sidebarRef:t,isVisible:n,onResize:r,onResizeEnd:i,children:a})=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`div`,{ref:t,className:$x({[e]:!0,isVisible:n}),children:a}),(0,L.jsx)(`div`,{className:`${$x(`resizeHandle`)}`,children:(0,L.jsx)(Qx,{position:e,sidebarRef:t,onResize:r,onResizeEnd:i})})]});c();var tS=e=>{let t=e;for(;t&&t!==document.body;){let e=window.getComputedStyle(t);if(e.display===`none`||e.visibility===`hidden`||e.opacity===`0`||t.getAttribute(`aria-hidden`)===`true`||t.hasAttribute(`hidden`))return!1;t=t.parentElement}return!0},nS=e=>{if(e?.defaultPrevented)return!0;let t=(e?.composedPath)?.call(e)[0]||e?.target||document.activeElement;if(t instanceof HTMLElement){let e=t.tagName.toLowerCase();if(e===`input`||e===`textarea`||e===`select`||t.isContentEditable)return!0;let n=t.getAttribute(`role`);if(n===`textbox`||n===`combobox`||n===`searchbox`||n===`listbox`||n===`grid`)return!0}let n=document.querySelector(`dialog[open], [aria-modal="true"], [role="dialog"], [role="alertdialog"]`);return!!(n&&tS(n))},rS=()=>{let e=N(),t=(0,I.useCallback)(t=>{if(nS(t))return!1;let{state:n,dispatch:r,permissions:i,selectedItem:a}=e.getState(),o=n.ui?.itemSelector;return!o?.zone||!a||!i.getPermissions({item:a}).delete||r({type:`remove`,index:o.index,zone:o.zone}),!0},[e]);mt({delete:!0},t),mt({backspace:!0},t)};c(),c();var iS={Nav:`_Nav_vll2r_1`,"Nav-list":`_Nav-list_vll2r_5`,"Nav-mobileActions":`_Nav-mobileActions_vll2r_23`,"NavItem-link":`_NavItem-link_vll2r_39`,NavItem:`_NavItem_vll2r_39`,"NavItem-linkIcon":`_NavItem-linkIcon_vll2r_90`,"NavItem--active":`_NavItem--active_vll2r_100`,"NavItem--mobileOnly":`_NavItem--mobileOnly_vll2r_136`,"NavItem--desktopOnly":`_NavItem--desktopOnly_vll2r_141`},aS=a(`Nav`,iS),oS=a(`NavItem`,iS),sS=({label:e,icon:t,onClick:n,isActive:r,mobileOnly:i,desktopOnly:a})=>(0,L.jsx)(`li`,{className:oS({active:r,mobileOnly:i,desktopOnly:a}),children:n&&(0,L.jsxs)(`div`,{className:oS(`link`),onClick:n,children:[t&&(0,L.jsx)(`span`,{className:oS(`linkIcon`),children:t}),(0,L.jsx)(`span`,{className:oS(`linkLabel`),children:e})]})}),cS=({items:e,mobileActions:t})=>(0,L.jsxs)(`nav`,{className:aS(),children:[(0,L.jsx)(`ul`,{className:aS(`list`),children:Object.entries(e).map(([e,t])=>(0,L.jsx)(sS,o({},t),e))}),t&&(0,L.jsx)(`div`,{className:aS(`mobileActions`),children:t})]});c();var lS=e=>o({enabled:!0,waitForStyles:!0,syncHostStyles:!0},e),uS=a(`Puck`,Tx),dS=a(`PuckLayout`,Tx),fS=a(`PuckPluginTab`,Tx),pS=typeof window>`u`?I.useEffect:I.useLayoutEffect,mS=()=>{let e=P(`label-page`),t=F(e=>e.selectedItem?e.config.components[e.selectedItem.type]?.label??e.selectedItem.type.toString():e.config.root?.label);return(0,L.jsx)(Nx,{noBorderTop:!0,showBreadcrumbs:!0,title:t||e,children:(0,L.jsx)(Ib,{})})},hS=({children:e,visible:t,mobileOnly:n})=>(0,L.jsx)(`div`,{className:fS({visible:t,mobileOnly:n}),children:(0,L.jsx)(`div`,{className:fS(`body`),children:e})}),gS=({children:e})=>{let{iframe:t,initialHistory:n,plugins:r,height:i}=yS(),a=F(e=>e.dnd),s=(0,I.useMemo)(()=>lS(t),[t]);tx();let c=F(e=>e.dispatch),l=F(e=>e.state.ui.leftSideBarVisible),u=F(e=>e.state.ui.rightSideBarVisible),d=F(e=>e.instanceId),{width:f,setWidth:p,sidebarRef:h,handleResizeEnd:g}=Xx(`left`,c),{width:_,setWidth:v,sidebarRef:y,handleResizeEnd:b}=Xx(`right`,c);(0,I.useEffect)(()=>{window.matchMedia(`(min-width: 638px)`).matches||c({type:`setUi`,ui:{leftSideBarVisible:!1,rightSideBarVisible:!1}});let e=()=>{window.matchMedia(`(min-width: 638px)`).matches||c({type:`setUi`,ui:e=>o(o({},e),e.rightSideBarVisible?{leftSideBarVisible:!1}:{})})};return window.addEventListener(`resize`,e),()=>{window.removeEventListener(`resize`,e)}},[]);let x=F(e=>e.overrides),S=(0,I.useMemo)(()=>x.puck||Ex,[x]),[C,w]=(0,I.useState)(!1);pS(()=>{w(!0)},[]);let T=F(e=>e.status===`READY`);ft(),(0,I.useEffect)(()=>{if(T&&s.enabled){let e=Xg();if(e)return Ze(e)}},[T,s.enabled]),Dx(),rS();let ee={};f&&(ee[`--puck-user-sidebar-left-width`]=`${f}px`),_&&(ee[`--puck-user-sidebar-right-width`]=`${_}px`);let E=F(e=>e.setUi),D=F(e=>e.state.ui.plugin?.current),te=N(),ne=(0,I.useMemo)(()=>!!r?.find(e=>e.name===`legacy-side-bar`),[r]),re=P(`plugin-blocks`),ie=P(`plugin-outline`),ae=P(`plugin-fields`),O=(0,I.useMemo)(()=>{let e={},t=[ly({label:re}),Eb({label:ie})],n=e=>e.name===`legacy-side-bar`?-1:0,i=[...t,...r??[]].sort((e,t)=>n(e)-n(t));return r?.some(e=>e.name===`fields`)||i.push(zb({label:ae})),i?.forEach(t=>{t.name&&t.render&&(e[t.name]&&delete e[t.name],e[t.name]={label:t.label??t.name,icon:t.icon??(0,L.jsx)(qe,{}),onClick:()=>{t.name===D?E(l?{leftSideBarVisible:!1}:{leftSideBarVisible:!0}):t.name&&E({plugin:{current:t.name},leftSideBarVisible:!0})},isActive:l&&D===t.name,render:t.render,mobilePanelHeight:t.mobilePanelHeight??`toggle`,mobileOnly:ne||t.mobileOnly,desktopOnly:t.name===`legacy-side-bar`||t.desktopOnly})}),e},[r,D,te,l,re,ie,ae]),oe=O[D??Object.keys(O)[0]]?.mobilePanelHeight??`toggle`;(0,I.useEffect)(()=>{if(!D){let e=Object.keys(O);E({plugin:{current:e[0]}})}},[O,D]);let se=O.fields&&O.fields.mobileOnly===!1,ce=F(e=>e.state.ui.mobilePanelExpanded??!1),le=P(`layout-maximize`),ue=P(`layout-minimize`);return(0,L.jsxs)(`div`,{className:`Puck ${uS({hidePlugins:ne})}`,id:d,style:{height:i,visibility:`hidden`},children:[(0,L.jsx)(nv,{disableAutoScroll:a?.disableAutoScroll,behavior:a?.behavior,children:(0,L.jsx)(S,{children:e||(0,L.jsx)(Wx,{children:(0,L.jsx)(`div`,{className:dS({leftSideBarVisible:l,mounted:C,rightSideBarVisible:!se&&u,isExpanded:ce,mobilePanelHeightToggle:oe===`toggle`,mobilePanelHeightMinContent:oe===`min-content`}),style:{height:i},children:(0,L.jsxs)(`div`,{className:dS(`inner`),style:ee,children:[(0,L.jsx)(`div`,{className:dS(`header`),children:(0,L.jsx)(jx,{hidePlugins:ne})}),(0,L.jsx)(`div`,{className:dS(`nav`),children:(0,L.jsx)(cS,{items:O,mobileActions:l&&oe===`toggle`&&(0,L.jsx)(Be,{type:`button`,title:ce?ue:le,onClick:()=>{E({mobilePanelExpanded:!ce})},children:ce?(0,L.jsx)(m,{size:21}):(0,L.jsx)(ht,{size:21})})})}),(0,L.jsx)(eS,{position:`left`,sidebarRef:h,isVisible:l,onResize:p,onResizeEnd:g,children:Object.entries(O).map(([e,{mobileOnly:t,render:n,label:r}])=>(0,L.jsx)(hS,{visible:D===e,mobileOnly:t,children:(0,L.jsx)(n,{})},e))}),(0,L.jsx)(Yx,{}),!se&&(0,L.jsx)(eS,{position:`right`,sidebarRef:y,isVisible:u,onResize:v,onResizeEnd:b,children:(0,L.jsx)(mS,{})})]})})})})}),(0,L.jsx)(`div`,{id:`puck-portal-root`,className:uS(`portal`)})]})},_S=(0,I.createContext)({});function vS(e){return(0,L.jsx)(_S.Provider,{value:e,children:e.children})}var yS=()=>(0,I.useContext)(_S);function bS({children:t}){let{config:n,data:r,ui:i,onChange:a,permissions:s={},plugins:c,overrides:l,viewports:u=p,iframe:d,dnd:f,initialHistory:m,metadata:h,dictionary:_,onAction:v,fieldTransforms:y,_experimentalFullScreenCanvas:b,_experimentalVirtualization:x}=yS(),C=(0,I.useMemo)(()=>lS(d),[d]),[w]=(0,I.useState)(()=>{let t=o(o({},Ve.ui),i),a={};Object.keys(r?.root||{}).length>0&&!r?.root?.props&&console.warn("Warning: Defining props on `root` is deprecated. Please use `root.props`, or republish this page to migrate automatically.");let s=r?.root?.props||r?.root||{},c=o(o({},n.root?.defaultProps),s),l=ie(S(e(o({},r?.root),{props:c})),n),u=e(o({},Ve),{data:e(o({},r),{root:e(o({},r?.root),{props:l.props}),content:r.content||[]}),ui:e(o(o({},t),a),{componentList:n.categories?Object.entries(n.categories).reduce((t,[n,r])=>e(o({},t),{[n]:{title:r.title,components:r.components,expanded:r.defaultExpanded,visible:r.visible}}),{}):{}})});return ne(u,n)}),{appendData:T=!0}=m||{},[ee]=(0,I.useState)([...m?.histories||[],...T?[{state:w}]:[]].map(t=>{let r=o(o({},w),t.state);return t.state.indexes||(r=ne(r,n)),e(o({},t),{state:r})})),E=(0,I.useMemo)(()=>m?.index!==void 0&&m?.index>=0&&m?.index<ee.length?m?.index:ee.length-1,[]),D=ee[E].state,te=wx({overrides:l,plugins:c}),re=(0,I.useMemo)(()=>{let e=(c||[]).reduce((e,t)=>o(o({},e),t.fieldTransforms),{});return o(o({},e),y)},[y,c]),ae=Fg(),O=(0,I.useCallback)(e=>({instanceId:ae,state:e,config:n,plugins:c||[],overrides:te,viewports:u,iframe:C,_experimentalFullScreenCanvas:!!b,_experimentalVirtualization:!!x,onAction:v,metadata:h,dictionary:_||{},dnd:f,fieldTransforms:re}),[ae,D,n,c,te,u,C,b,x,v,h,_,f,re]),[oe]=(0,I.useState)(()=>ke(O(D)));(0,I.useEffect)(()=>{},[oe]),(0,I.useEffect)(()=>{let e=oe.getState().state;oe.setState(o({},O(e)))},[O]),g(oe,{histories:ee,index:E,initialAppState:D});let se=(0,I.useRef)(null);(0,I.useEffect)(()=>oe.subscribe(e=>e.state.data,e=>{if(a){if(ze(e,se.current))return;a(e),se.current=e}}),[a]),ut(oe,s);let ce=ty(oe);return(0,I.useEffect)(()=>{let{resolveAndCommitData:e}=oe.getState();setTimeout(()=>{e()},0)},[]),(0,L.jsx)(st.Provider,{value:oe,children:(0,L.jsx)($v.Provider,{value:ce,children:t})})}function xS(t){return(0,L.jsx)(vS,e(o({},t),{children:(0,L.jsx)(bS,e(o({},t),{children:(0,L.jsx)(gS,{children:t.children})}))}))}xS.Components=sy,xS.Fields=Ib,xS.Layout=gS,xS.Outline=wb,xS.Preview=Sx,c(),c(),c(),c(),c(),c(),c(),c(),c(),c(),c(),c(),c(),c();var SS=Object.freeze([`OP-K10`,`OP-T05`,`OP-T06`,`OP-T10`]),CS=new Set([`accent`,`accent_deep`,`surface`,`radius`,`motion`]),wS=new Set([`none`,`gentle`,`expressive`]),TS=new Set([`12px`,`20px`,`30px`,`40px`]),ES=new Set([`ruby`,`gold`,`mint`,`neutral`]),DS=new Set([`none`,`fade`,`rise`,`float`,`pulse`]),OS=/^#[0-9a-f]{6}$/i,kS=`unchanged`,AS=Object.freeze({ruby:Object.freeze({accent:`#c90046`,accent_deep:`#8d0033`,surface:`#fffaf6`}),gold:Object.freeze({accent:`#b86b00`,accent_deep:`#744000`,surface:`#fff9ec`}),mint:Object.freeze({accent:`#008b7d`,accent_deep:`#005c53`,surface:`#f3fffc`})}),jS=Object.freeze({ruby:Object.freeze([`rubin`,`ruby`,`rubinrot`,`rubinrote`,`rubinroter`,`rubinrotes`,`rot`,`rote`,`roter`,`rotes`]),gold:Object.freeze([`gold`,`golden`,`goldene`,`goldener`,`goldenes`,`warm`,`warme`,`warmer`,`warmes`,`sonnig`,`sonnige`,`sonniger`,`sonniges`,`honigfarben`,`honigfarbene`,`honigfarbener`,`honigfarbenes`]),mint:Object.freeze([`minze`,`mint`,`mintfarben`,`minzfarben`,`minzblatter`,`grun`,`grune`,`gruner`,`grunes`,`turkis`,`turkise`])}),MS=Object.freeze({none:Object.freeze([`ohne animation`,`keine animation`,`animation aus`,`animationen aus`,`ohne bewegung`,`keine bewegung`,`keine bewegung mehr`,`bewegung aus`,`bewegung ausschalten`,`bewegung stoppen`,`nicht mehr bewegen`,`weniger bewegung`,`ruhig`,`ruhige`,`ruhiger`,`reduzierte bewegung`,`stillstehen`,`stillsteht`]),gentle:Object.freeze([`sanft`,`sanfte bewegung`,`sanfter`,`dezente bewegung`,`wenig bewegung`,`ganz dezent`]),expressive:Object.freeze([`lebendig`,`lebendige bewegung`,`lebendiger`,`ausdrucksstark`,`mehr bewegung`,`mehr animation`,`dynamisch`,`mehr energie`])}),NS=Object.freeze({"12px":Object.freeze([`eckig`,`kantig`,`klarere ecken`]),"30px":Object.freeze([`weiche ecken`,`weicher`,`sanfte ecken`]),"40px":Object.freeze([`sehr rund`,`runder`,`rundere ecken`,`rund`,`weiche kiesel`])}),PS=Object.freeze({none:MS.none,fade:Object.freeze([`einblenden`,`sanft einblenden`,`dezent einblenden`]),rise:Object.freeze([`aufsteigen`,`aufsteigend`,`von unten erscheinen`]),float:Object.freeze([`schweben`,`schwebend`,`sanft schweben`,`sanft bewegen`]),pulse:Object.freeze([`pulsieren`,`pulsierend`,`pochen`])}),FS=Object.freeze({ruby:jS.ruby,gold:jS.gold,mint:jS.mint,neutral:Object.freeze([`neutral`,`neutrale`,`neutraler`,`schlicht`,`schlichte`])}),IS=Object.freeze([`zuerst`,`nach oben`,`ganz oben`,`als erstes`,`an den anfang`,`vorne`,`vor allen anderen bereichen`,`den auftakt bilden`,`als auftakt`]),LS=Object.freeze([Object.freeze({type:`gemden.profile-hero@1`,labels:Object.freeze([`profil`,`julius`,`profilauftakt`])}),Object.freeze({type:`gemden.skill-grid@1`,labels:Object.freeze([`fahigkeiten`,`skills`,`konnen`])}),Object.freeze({type:`gemden.evidence-grid@1`,labels:Object.freeze([`nachweise`,`evidenz`,`erfahrung`])}),Object.freeze({type:`gemden.link-cards@1`,labels:Object.freeze([`projekte`,`projekt`,`arbeiten`,`wege`,`smart home`,`lichterkette`])})]),RS=Object.freeze([Object.freeze({terms:Object.freeze([`page publish`,`veroffentliche`,`veroffentlichen`,`publiziere`,`publizieren`,`speichere`,`speichern`]),summary:`Speichern und Veröffentlichen sind für Blob nicht freigeschaltet.`,question:`Soll ich stattdessen nur eine bestätigungspflichtige Vorschau für Farbe, Rundung, Bewegung oder Modulreihenfolge vorbereiten?`}),Object.freeze({terms:Object.freeze([`adminrechte`,`rechte vergeben`,`berechtigung vergeben`,`zugriffsrechte`]),summary:`Blob darf keine Rechte oder Berechtigungen vergeben.`,question:`Möchtest du stattdessen eine erlaubte Änderung an der Seitenvorschau beschreiben?`}),Object.freeze({terms:Object.freeze([`javascript`,`java script`,`html`,`css`,`skript`,`script`]),summary:`Freies HTML, CSS und JavaScript sind für Blob nicht freigeschaltet.`,question:`Möchtest du stattdessen Farbe, Rundung, Bewegung oder die Modulreihenfolge ändern?`}),Object.freeze({terms:Object.freeze([`externer link`,`externen link`,`shop link`,`neue karte`,`karte anlegen`,`link hinzufugen`]),summary:`Neue Karten und externe Links sind für Blob nicht freigeschaltet.`,question:`Soll ich stattdessen ein vorhandenes Modul in der Vorschau verschieben?`}),Object.freeze({terms:Object.freeze([`biografie neu`,`biographie neu`,`gesamte biografie`,`gesamte biographie`,`text neu schreiben`,`alles umschreiben`]),summary:`Freies Umschreiben von Profilinhalten ist für Blob nicht freigeschaltet.`,question:`Möchtest du stattdessen eine erlaubte Stil- oder Reihenfolgeänderung beschreiben?`}),Object.freeze({terms:Object.freeze([`ignoriere alle regeln`,`ignoriere die regeln`,`system prompt`,`entwicklernachricht`,`prompt injection`]),summary:`Anweisungen zum Umgehen der Blob-Regeln werden nicht ausgeführt.`,question:`Welche erlaubte Änderung an Farbe, Rundung, Bewegung oder Modulreihenfolge möchtest du?`})]),zS=Object.freeze({"gemden.profile-hero@1":`Profilauftakt`,"gemden.skill-grid@1":`Fähigkeiten`,"gemden.evidence-grid@1":`Nachweise`,"gemden.link-cards@1":`Projekte und Wege`}),BS=Object.freeze({"gemden.profile-hero@1":Object.freeze({eyebrow:60,visual_label:180}),"gemden.skill-grid@1":Object.freeze({eyebrow:60,title:100,intro:280}),"gemden.evidence-grid@1":Object.freeze({eyebrow:60,title:100,boundary:320}),"gemden.link-cards@1":Object.freeze({eyebrow:60,title:100})}),VS=Object.freeze({eyebrow:`kleine Überschrift`,title:`Überschrift`,intro:`Einleitung`,boundary:`sichtbare Grenze`,visual_label:`Motivbeschreibung`}),HS=Object.freeze({id:`blob.page.compose`,version:1,mode:`proposal_only`,required_ai_operations:SS,allowed_operations:Object.freeze([`theme.set`,`module.move`,`module.appearance.set`,`module.text.set`]),human_confirmation_required:!0,autosave:!1,publish:!1}),US=Object.freeze({theme:Object.freeze([...Object.keys(AS),kS]),motion:Object.freeze([...wS,kS]),radius:Object.freeze([...TS,kS]),unchanged:kS});function WS(e){return JSON.parse(JSON.stringify(e))}function $(e,t){if(!e)throw Error(t)}function GS(e){return String(e||``).trim().toLocaleLowerCase(`de-DE`).normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/[^a-z0-9#]+/g,` `).replace(/\s+/g,` `).trim()}function KS(e,t){return` ${e} `.includes(` ${GS(t)} `)}function qS(e,t){return t.some(t=>KS(e,t))}function JS(e,t){return Object.entries(t).filter(([,t])=>qS(e,t)).map(([e])=>e)}function YS(e){return(e?.regions||[]).flatMap(e=>Array.isArray(e?.modules)?e.modules:[]).filter(e=>typeof e?.type==`string`&&Number.isInteger(e?.version)).map(e=>`${e.type}@${e.version}`)}function XS(e){return Array.isArray(e?.regions)}function ZS(e){let t=e?.theme?.tokens;return!t||typeof t!=`object`?null:{accent:t.accent,accent_deep:t.accent_deep,surface:t.surface,radius:t.radius,motion:e?.theme?.motion}}function QS(e){if(!qS(e,IS))return{requested:!1,type:null,conflicting:!1};let t=LS.flatMap(t=>t.labels.map(n=>({module:t,index:` ${e} `.indexOf(` ${GS(n)} `)})).filter(e=>e.index>=0));t.sort((e,t)=>e.index-t.index);let n=[...new Set(t.map(e=>e.module.type))];return{requested:!0,type:n[0]||null,conflicting:n.length>1}}function $S(e){return[...new Set(LS.filter(t=>t.labels.some(t=>KS(e,t))).map(e=>e.type))]}function eC(e,t){return(e?.regions||[]).flatMap(e=>Array.isArray(e?.modules)?e.modules:[]).find(e=>`${e.type}@${e.version}`===t)||null}function tC(e){return[/„([^“]+)“/u,/“([^”]+)”/u,/"([^"]+)"/u].map(t=>e.match(t)?.[1]).find(Boolean)?.trim()||null}function nC(e){let t=[];qS(e,[`beschreibung des motivs`,`motivbeschreibung`,`motiv beschreiben`])&&t.push(`visual_label`),qS(e,[`sichtbare grenze`,`grenzhinweis`,`sicherheitshinweis`])&&t.push(`boundary`),qS(e,[`einleitung`,`intro`,`einfuhrung`])&&t.push(`intro`);let n=` ${e} `.replaceAll(` kleine uberschrift `,` `);return(KS(e,`kleine uberschrift`)||qS(e,[`eyebrow`,`kicker`]))&&t.push(`eyebrow`),qS(n.trim(),[`uberschrift`,`titel`])&&t.push(`title`),[...new Set(t)]}function rC(e,t,n){let r=tC(e);if(!r)return{requested:!1};let i=$S(t),a=nC(t);if(i.length!==1)return{requested:!0,error:i.length>1?`multiple_modules`:`unknown_module`};if(a.length!==1)return{requested:!0,error:a.length>1?`multiple_fields`:`unknown_field`,component_type:i[0]};let o=i[0],s=a[0],c=BS[o]?.[s];if(!c)return{requested:!0,error:`field_not_allowed`,component_type:o,field:s};if(r.length>c||/[<>\r\n]/u.test(r))return{requested:!0,error:`unsafe_value`,component_type:o,field:s};let l=eC(n,o);return l?l.props?.[s]===r?{requested:!0,error:`no_change`,component_type:o,field:s}:{requested:!0,component_type:o,field:s,value:r}:{requested:!0,error:`missing_module`,component_type:o,field:s}}function iC(e,t,n){if(n.requested)return{requested:!1};let r=$S(e),i=JS(e,FS),a=JS(e,PS);if(!i.length&&!a.length||!r.length)return{requested:!1};if(r.length!==1)return{requested:!0,error:r.length>1?`multiple_modules`:`unknown_module`};if(i.length>1||a.length>1)return{requested:!0,error:`conflicting_values`,component_type:r[0]};let o=r[0],s=eC(t,o);if(!s)return{requested:!0,error:`missing_module`,component_type:o};let c={};return i[0]&&s.appearance?.tone!==i[0]&&(c.tone=i[0]),a[0]&&s.appearance?.motion!==a[0]&&(c.motion=a[0]),Object.keys(c).length?{requested:!0,component_type:o,values:c}:{requested:!0,error:`no_change`,component_type:o}}function aC(e,t){let n=ZS(t);return n?Object.fromEntries(Object.entries(e).filter(([e,t])=>n[e]!==t)):e}function oC(e){let t=[];return e.accent===AS.gold.accent&&t.push(`goldene Farbwelt`),e.accent===AS.mint.accent&&t.push(`minzfarbene Farbwelt`),e.accent===AS.ruby.accent&&t.push(`rubinrote Farbwelt`),e.motion===`none`&&t.push(`Bewegung ausschalten`),e.motion===`gentle`&&t.push(`Bewegung sanfter machen`),e.motion===`expressive`&&t.push(`Bewegung ausdrucksstärker machen`),e.radius===`40px`&&t.push(`Ecken deutlich runder machen`),e.radius===`30px`&&t.push(`Ecken weich machen`),e.radius===`20px`&&t.push(`Ecken ausgewogen runden`),e.radius===`12px`&&t.push(`Ecken klarer machen`),!t.some(e=>e.includes(`Farbwelt`))&&[`accent`,`accent_deep`,`surface`].some(t=>t in e)&&t.unshift(`Farbwelt vervollständigen`),t}function sC(e){return`${zS[e.component_type]||e.component_type} an den Anfang setzen`}function cC(e){let t=zS[e.component_type]||e.component_type,n=[];return e.values.tone&&n.push(`Farbton ${e.values.tone}`),e.values.motion&&n.push(`Bewegung ${e.values.motion}`),`${t}: ${n.join(` und `)}`}function lC(e){return`${zS[e.component_type]||e.component_type}: ${VS[e.field]||e.field} ändern`}function uC(e){return e.error===`multiple_modules`?`Welcher einzelne Bereich soll den neuen Text erhalten?`:e.error===`unknown_module`?`Nenne bitte Profil, Fähigkeiten, Nachweise oder Projekte als Zielbereich.`:e.error===`multiple_fields`?`Soll die kleine Überschrift, Überschrift, Einleitung oder sichtbare Grenze geändert werden?`:e.error===`field_not_allowed`?`Dieses Textfeld ist für den gewählten Bereich nicht freigeschaltet.`:e.error===`unsafe_value`?`Nutze bitte einen einzelnen Text ohne HTML, Zeilenumbruch oder übermäßige Länge.`:e.error===`missing_module`?`Der gewünschte Bereich ist auf dieser Seite nicht vorhanden.`:e.error===`no_change`?`Dieser Text ist bereits eingetragen. Welcher andere Text soll gelten?`:`Nenne das Textfeld und setze den gewünschten Wortlaut in Anführungszeichen.`}function dC(e){return e.error===`multiple_modules`?`Welcher einzelne Bereich soll anders aussehen?`:e.error===`unknown_module`?`Nenne bitte Profil, Fähigkeiten, Nachweise oder Projekte als Zielbereich.`:e.error===`conflicting_values`?`Welcher einzelne Farbton und welche einzelne Bewegung sollen gelten?`:e.error===`missing_module`?`Der gewünschte Bereich ist auf dieser Seite nicht vorhanden.`:e.error===`no_change`?`Diese Bereichsdarstellung ist bereits aktiv. Welche andere soll gelten?`:`Soll der Bereich Rubin, Gold, Minze oder Neutral sein beziehungsweise einblenden, aufsteigen, schweben, pulsieren oder stillstehen?`}function fC(e){return e===`local-rule-pilot`?[`Lokaler regelbasierter Pilot – noch keine freie KI.`,`Der Vorschlag verändert nur die Vorschau und wird nicht automatisch gespeichert.`,`Blob kann weder veröffentlichen noch freie Skripte, HTML oder CSS erzeugen.`,`Textänderungen bleiben auf registrierte Abschnittsfelder begrenzt.`]:[`Das Sprachmodell ordnet nur eine kleine, streng geprüfte Absicht zu.`,`Deterministische Regeln erzeugen daraus ausschließlich einen Vorschlag für die Vorschau.`,`Blob kann weder speichern, veröffentlichen, Rechte vergeben noch freie Skripte, HTML oder CSS erzeugen.`]}function pC({sourcePrompt:e,operations:t=[],explanations:n=[],summary:r,question:i,mode:a=`local-rule-pilot`,provider:o,model:s}){let c=t.length>0,l={id:`blob`,mode:a};return o&&(l.provider=o),s&&(l.model=s),{schema_version:`1.0.0`,kind:`gemden.page-change-proposal`,assistant:l,capability:{id:HS.id,version:HS.version},source_prompt:e,human_confirmation_required:!0,recognized:c,summary:r||(c?n.join(` · `):`Dafür kenne ich noch keine freigeschaltete Seitenfähigkeit.`),explanations:n,operations:t,questions:c?[]:[i||`Meinst du Seitendesign, Bereichsdarstellung, Abschnittstext oder die Reihenfolge von Profil, Fähigkeiten, Nachweisen und Projekten?`],boundaries:fC(a)}}function mC(e,t){$(e&&typeof e==`object`&&!Array.isArray(e),`Die Blob-Absicht ist ungültig.`),$(JSON.stringify(Object.keys(e).sort())===JSON.stringify([`theme`,`motion`,`radius`,`move`,`clarify`].sort()),`Die Blob-Absicht enthält unbekannte oder fehlende Felder.`),$(US.theme.includes(e.theme),`Unzulässige Theme-Absicht ${e.theme}.`),$(US.motion.includes(e.motion),`Unzulässige Bewegungsabsicht ${e.motion}.`),$(US.radius.includes(e.radius),`Unzulässige Rundungsabsicht ${e.radius}.`),$(typeof e.clarify==`boolean`,`Die Rückfrageabsicht ist ungültig.`);let n=YS(t),r=XS(t)?n:LS.map(e=>e.type);$(e.move===kS||r.includes(e.move),`Modul ${e.move||`unbekannt`} ist nicht auf der Seite vorhanden.`);let i=[e.theme,e.motion,e.radius,e.move].filter(e=>e!==kS);e.clarify?$(i.length===0,`Eine Rückfrage darf keine Änderung enthalten.`):$(i.length>0,`Eine erkannte Absicht muss mindestens eine Änderung enthalten.`)}function hC(e){let t=new Set(e?.capability_context?.ai_operation_refs||[]),n=SS.filter(e=>!t.has(e));return $(!n.length,`Blob darf diese Seite nicht gestalten; es fehlen ${n.join(`, `)}.`),!0}function gC(e,t,n,{mode:r=`local-intent-bridge`,provider:i,model:a}={}){hC(t);let o=String(e||``).trim();if($(o.length>0,`Beschreibe zuerst, was Blob verändern soll.`),$(o.length<=500,`Die Anfrage ist für diesen Pilot zu lang.`),mC(n,t),n.clarify)return pC({sourcePrompt:o,mode:r,provider:i,model:a,summary:`Die Formulierung lässt sich keiner freigeschalteten Änderung sicher zuordnen.`});let s={};n.theme!==kS&&Object.assign(s,AS[n.theme]),n.motion!==kS&&(s.motion=n.motion),n.radius!==kS&&(s.radius=n.radius);let c=[],l=[],u=aC(s,t);if(Object.keys(u).length&&(c.push({type:`theme.set`,values:u}),l.push(...oC(u))),n.move!==kS&&YS(t)[0]!==n.move){let e={type:`module.move`,component_type:n.move,to_index:0};c.push(e),l.push(sC(e))}return c.length?pC({sourcePrompt:o,operations:c,explanations:l,mode:r,provider:i,model:a}):pC({sourcePrompt:o,mode:r,provider:i,model:a,summary:`Die gewünschte Einstellung ist bereits aktiv.`,question:`Möchtest du eine andere Farbe, Rundung, Bewegung oder Modulreihenfolge wählen?`})}function _C(e,t){hC(t);let n=String(e||``).trim();$(n.length>0,`Beschreibe zuerst, was Blob verändern soll.`),$(n.length<=500,`Die Anfrage ist für diesen Pilot zu lang.`);let r=GS(n),i=RS.find(e=>qS(r,e.terms));if(i)return{model_eligible:!1,reason:`forbidden_request`,proposal:pC({sourcePrompt:n,summary:i.summary,question:i.question})};let a=rC(n,r,t);if(a.requested){if(a.error)return{model_eligible:!1,reason:`text_${a.error}`,proposal:pC({sourcePrompt:n,summary:`Die Textänderung ist noch nicht eindeutig oder nicht freigeschaltet.`,question:uC(a)})};let e={type:`module.text.set`,component_type:a.component_type,field:a.field,value:a.value};return{model_eligible:!1,reason:`recognized_by_rules`,proposal:pC({sourcePrompt:n,operations:[e],explanations:[lC(e)]})}}let o=JS(r,jS),s=JS(r,MS),c=JS(r,NS);if(o.length>1||s.length>1||c.length>1)return{model_eligible:!1,reason:`conflicting_request`,proposal:pC({sourcePrompt:n,summary:`Die Anfrage enthält widersprüchliche Stilwünsche.`,question:`Welche einzelne Farbe, Bewegungsstufe oder Rundung soll gelten?`})};let l=QS(r);if(l.conflicting)return{model_eligible:!1,reason:`conflicting_request`,proposal:pC({sourcePrompt:n,summary:`Die Anfrage nennt mehrere Bausteine für dieselbe erste Position.`,question:`Welcher einzelne Baustein soll an den Anfang?`})};if(l.requested&&!l.type)return{model_eligible:!1,reason:`unknown_module`,proposal:pC({sourcePrompt:n,summary:`Das genannte Modul ist nicht als vorhandener Blob-Baustein bekannt.`,question:`Soll Profil, Fähigkeiten, Nachweise oder Projekte an den Anfang?`})};let u=YS(t);if(l.type&&XS(t)&&!u.includes(l.type))return{model_eligible:!1,reason:`missing_module`,proposal:pC({sourcePrompt:n,summary:`Der gewünschte Baustein ist auf dieser Seite nicht vorhanden.`,question:`Welchen vorhandenen Baustein möchtest du verschieben?`})};let d=iC(r,t,l);if(d.requested){if(d.error)return{model_eligible:!1,reason:`appearance_${d.error}`,proposal:pC({sourcePrompt:n,summary:`Die Bereichsdarstellung ist noch nicht eindeutig oder bewirkt keine Änderung.`,question:dC(d)})};let e={type:`module.appearance.set`,component_type:d.component_type,values:d.values};return{model_eligible:!1,reason:`recognized_by_rules`,proposal:pC({sourcePrompt:n,operations:[e],explanations:[cC(e)]})}}let f={theme:o[0]||kS,motion:s[0]||kS,radius:c[0]||kS,move:l.type||kS,clarify:!1};if(![f.theme,f.motion,f.radius,f.move].some(e=>e!==kS))return{model_eligible:!0,reason:`unrecognized_safe_request`,proposal:pC({sourcePrompt:n})};let p=gC(n,t,f,{mode:`local-rule-pilot`,provider:void 0,model:void 0});return{model_eligible:!1,reason:p.recognized?`recognized_by_rules`:`no_change`,proposal:p}}function vC(e,t){return _C(e,t).proposal}function yC(e){$(e&&typeof e==`object`&&!Array.isArray(e),`Ungültige Theme-Änderung.`),Object.entries(e).forEach(([e,t])=>{$(CS.has(e),`Blob darf das Theme-Feld ${e} nicht ändern.`),e===`motion`?$(wS.has(t),`Unzulässige Bewegung ${t}.`):e===`radius`?$(TS.has(t),`Unzulässiger Radius ${t}.`):$(OS.test(t),`Unzulässige Farbe für ${e}.`)})}function bC(e){$(e&&typeof e==`object`&&!Array.isArray(e),`Ungültige Bereichsdarstellung.`);let t=Object.entries(e);$(t.length>0&&t.length<=2,`Die Bereichsdarstellung enthält keine gültige Änderung.`),t.forEach(([e,t])=>{$(e===`tone`||e===`motion`,`Blob darf die Bereichseigenschaft ${e} nicht ändern.`),e===`tone`?$(ES.has(t),`Unzulässiger Bereichsfarbton ${t}.`):$(DS.has(t),`Unzulässige Bereichsbewegung ${t}.`)})}function xC(e,t,n){let r=BS[e]?.[t];$(r,`Blob darf das Textfeld ${t||`unbekannt`} in ${e||`diesem Bereich`} nicht ändern.`),$(typeof n==`string`&&n.trim()===n&&n.length>0&&n.length<=r,`Der neue Abschnittstext hat eine ungültige Länge.`),$(!/[<>\r\n]/u.test(n),`Der neue Abschnittstext enthält nicht erlaubte Zeichen.`)}function SC(e,t){$(e&&Array.isArray(e.content),`Die aktuelle Seitenvorschau ist ungültig.`),$(t?.schema_version===`1.0.0`,`Unbekannte Blob-Vorschlagsversion.`),$(t?.kind===`gemden.page-change-proposal`,`Unbekannter Vorschlagstyp.`),$(t?.capability?.id===HS.id,`Blob besitzt diese Seitenfähigkeit nicht.`),$(t?.human_confirmation_required===!0,`Blob-Vorschläge müssen eine Bestätigung verlangen.`),$(Array.isArray(t.operations)&&t.operations.length<=8,`Zu viele oder ungültige Blob-Operationen.`);let n=WS(e);return n.root=n.root||{props:{}},n.root.props=n.root.props||{},t.operations.forEach(e=>{if($(HS.allowed_operations.includes(e?.type),`Blob-Operation ${e?.type||`unbekannt`} ist nicht freigeschaltet.`),e.type===`theme.set`){yC(e.values),Object.assign(n.root.props,WS(e.values));return}if(e.type===`module.move`){$(typeof e.component_type==`string`,`Der zu verschiebende Baustein fehlt.`),$(Number.isInteger(e.to_index)&&e.to_index>=0,`Ungültige Zielposition.`);let t=n.content.findIndex(t=>t.type===e.component_type);$(t>=0,`Baustein ${e.component_type} ist auf dieser Seite nicht vorhanden.`);let[r]=n.content.splice(t,1),i=Math.min(e.to_index,n.content.length);n.content.splice(i,0,r);return}if(e.type===`module.appearance.set`){$(typeof e.component_type==`string`,`Der Zielbereich fehlt.`),bC(e.values);let t=n.content.find(t=>t.type===e.component_type);$(t,`Baustein ${e.component_type} ist auf dieser Seite nicht vorhanden.`),t.props=t.props||{},Object.assign(t.props,WS(e.values));return}if(e.type===`module.text.set`){$(typeof e.component_type==`string`,`Der Zielbereich fehlt.`),xC(e.component_type,e.field,e.value);let t=n.content.find(t=>t.type===e.component_type);$(t,`Baustein ${e.component_type} ist auf dieser Seite nicht vorhanden.`),t.props=t.props||{},t.props[e.field]=e.value}}),n}var CC=/^PAGE-[A-Z0-9-]+$/,wC=/^[a-z][a-z0-9-]*$/,TC=/^#[0-9a-f]{6}$/i,EC=/^\d{1,2}px$/,DC=new Set([`none`,`gentle`,`expressive`]);function OC(e){return JSON.parse(JSON.stringify(e))}function kC(e,t){if(!e)throw Error(t)}function AC(e,t){return`${e}@${t}`}function jC(e,t){let[n,r]=t.split(`.`);return e[n]?.[r]}function MC(e,t,n){let[r,i]=t.split(`.`);kC(r===`props`||r===`appearance`,`Unzulässiges Editor-Ziel ${t}.`),e[r][i]=OC(n)}function NC(e){return new Map(e.modules.map(e=>[AC(e.type,e.version),e]))}function PC(e){let t=new Map;return e.regions.flatMap(e=>e.modules).forEach(e=>{let n=AC(e.type,e.version);t.has(n)||t.set(n,e)}),t}function FC(e,t,n){let r=String(t||e).toLowerCase().replace(/[^a-z0-9-]+/g,`-`).replace(/^-+|-+$/g,``).slice(-54),i=wC.test(r)?r:`module-${r||`block`}`,a=i,o=2;for(;n.has(a);)a=`${i.slice(0,55)}-${o}`,o+=1;return n.add(a),a}function IC(e,t){let n={};return e.data_inputs.forEach(r=>{if(t.bindings[r.name])n[r.name]=r.name;else if(r.required)throw Error(`${e.title}: Für ${r.name} fehlt ein Seitenbinding.`)}),n}function LC(e,t){let n=new Set(t.capability_context.module_permission_grants);e.capabilities.requires.forEach(t=>{kC(n.has(t),`${e.title}: Die Seite gewährt ${t} nicht.`)})}function RC(e){let t=e.props.items;Array.isArray(t)&&t.forEach((t,n)=>{kC(t&&typeof t==`object`&&!Array.isArray(t),`${e.id}: Wegkarte ${n+1} ist ungültig.`),kC(typeof t.href==`string`&&t.href.startsWith(`/`),`${e.id}: Wegkarten dürfen nur interne Pfade verwenden.`);let r=new URL(t.href,`https://gemden.red`);kC(r.origin===`https://gemden.red`&&[`http:`,`https:`].includes(r.protocol),`${e.id}: Unsicheres Linkziel blockiert.`)})}function zC(e){kC(TC.test(e.tokens.accent),`Die Akzentfarbe ist ungültig.`),kC(TC.test(e.tokens.accent_deep),`Die dunkle Akzentfarbe ist ungültig.`),kC(TC.test(e.tokens.surface),`Die Flächenfarbe ist ungültig.`),kC(EC.test(e.tokens.radius),`Der Eckenradius ist ungültig.`),kC(DC.has(e.motion),`Das Bewegungsprofil ist ungültig.`)}function BC(e,t){kC(e&&CC.test(e.id||``),`Das GemDen-Seitendokument ist ungültig.`),kC(Array.isArray(e.regions)&&e.regions.length===1,`Der Piloteditor unterstützt genau eine Seitenregion.`);let n=NC(t);return{content:e.regions[0].modules.map(e=>{let t=n.get(AC(e.type,e.version));kC(t?.editor,`${e.type}@${e.version} besitzt keinen Editor-Vertrag.`);let r={id:e.id};return t.editor.fields.forEach(t=>{r[t.id]=OC(jC(e,t.target))}),{type:AC(e.type,e.version),props:r}}),root:{props:{accent:e.theme.tokens.accent,accent_deep:e.theme.tokens.accent_deep,surface:e.theme.tokens.surface,radius:e.theme.tokens.radius,motion:e.theme.motion}}}}function VC(e,t,n){kC(e&&Array.isArray(e.content),`Der Editor-Entwurf ist ungültig.`);let r=OC(t);kC(r.regions.length===1,`Der Piloteditor unterstützt genau eine Seitenregion.`);let i=NC(n),a=new Map(r.regions[0].modules.map(e=>[e.id,e])),o=PC(r),s=new Set;r.regions[0].modules=e.content.map(e=>{let t=i.get(e.type);kC(t,`Nicht registrierter Editor-Baustein ${e.type}.`),LC(t,r);let n=a.get(e.props?.id),c=n&&n.type===t.type&&n.version===t.version?n:null,l=c||o.get(AC(t.type,t.version)),u=l?OC(l):{id:``,type:t.type,version:t.version,bindings:IC(t,r),props:OC(t.editor.default_props),appearance:OC(t.editor.default_appearance)};return u.id=FC(t.type,e.props?.id,s),u.type=t.type,u.version=t.version,c||(u.bindings=IC(t,r)),t.editor.fields.forEach(t=>{e.props&&e.props[t.id]!==void 0&&MC(u,t.target,e.props[t.id])}),RC(u),u});let c=e.root?.props||e.root||{};return r.theme.tokens.accent=c.accent??r.theme.tokens.accent,r.theme.tokens.accent_deep=c.accent_deep??r.theme.tokens.accent_deep,r.theme.tokens.surface=c.surface??r.theme.tokens.surface,r.theme.tokens.radius=c.radius??r.theme.tokens.radius,r.theme.motion=c.motion??r.theme.motion,zC(r.theme),r}function HC(e){return kC(CC.test(e||``),`Ungültige PAGE-ID für den lokalen Entwurf.`),`gemden:page-draft:v1:${e}`}function UC(e,t=new Date().toISOString()){return kC(e&&CC.test(e.id||``),`Ungültiges Seitendokument für den lokalen Entwurf.`),{format:`gemden-local-draft`,version:1,page_id:e.id,saved_at:t,document:OC(e)}}function WC(e){return JSON.parse(JSON.stringify(e))}function GC(e,t){let[n,r]=t.split(`.`);return e[n]?.[r]}function KC(e){return`${e.type}@${e.version}`}function qC(e){return(e.options||[]).map(e=>({label:e.label,value:e.value}))}function JC(e){if(e.control===`text`)return{type:`text`,label:e.label};if(e.control===`textarea`)return{type:`textarea`,label:e.label};if(e.control===`select`)return{type:`select`,label:e.label,options:qC(e)};if(e.control===`link-list`)return{type:`array`,label:e.label,min:0,max:8,getItemSummary:e=>e?.title||`Neue Wegkarte`,defaultItemProps:{icon:`✨`,title:`Neue Wegkarte`,description:`Beschreibe, wohin dieser Weg führt.`,label:`Öffnen →`,href:`/community/`,tone:`ruby`},arrayFields:{icon:{type:`text`,label:`Symbol`},title:{type:`text`,label:`Titel`},description:{type:`textarea`,label:`Beschreibung`},label:{type:`text`,label:`Linktext`},href:{type:`text`,label:`Interner Pfad`},tone:{type:`select`,label:`Farbton`,options:[{label:`Rubin`,value:`ruby`},{label:`Gold`,value:`gold`},{label:`Minze`,value:`mint`},{label:`Neutral`,value:`neutral`}]}}};throw Error(`Unbekanntes Editor-Steuerelement ${e.control}.`)}function YC(e,t){let n=new Map(Object.entries(t).filter(([,e])=>Array.isArray(e)).map(([e,t])=>[e,new Map(t.map(e=>[e.id,e]))])),r=t=>{let r=e.bindings[t];return!r||r.kind!==`entity`?null:n.get(r.collection)?.get(r.id)||null},i=r(`member`);return{member:i,dynasty:r(`dynasty`),skills:(i?.skill_ids||[]).map(e=>n.get(`skills`)?.get(e)).filter(Boolean),evidence:(i?.evidence_ids||[]).map(e=>n.get(`evidence`)?.get(e)).filter(Boolean)}}function XC({type:e,tone:t,motion:n,children:r}){return(0,L.jsx)(`section`,{className:`gemden-preview-module tone-${t||`neutral`} motion-${n||`none`}`,"data-preview-type":e,children:r})}function ZC({props:e,data:t,type:n}){return(0,L.jsxs)(XC,{type:n,tone:e.tone,motion:e.motion,children:[(0,L.jsxs)(`div`,{className:`preview-hero-copy`,children:[(0,L.jsx)(`p`,{className:`preview-eyebrow`,children:e.eyebrow}),(0,L.jsx)(`h1`,{children:t.member?.name||`Mitglied`}),(0,L.jsx)(`p`,{className:`preview-lead`,children:t.member?.bio||`Hier entsteht eine persönliche GemDen-Seite.`}),(0,L.jsxs)(`div`,{className:`preview-chips`,children:[t.member?.id&&(0,L.jsx)(`span`,{children:t.member.id}),t.dynasty?.name&&(0,L.jsx)(`span`,{children:t.dynasty.name})]})]}),(0,L.jsx)(`div`,{className:`preview-gem`,role:`img`,"aria-label":e.visual_label||`Profilmotiv`,children:`◆`})]})}function QC({props:e,data:t,type:n}){return(0,L.jsxs)(XC,{type:n,tone:e.tone,motion:e.motion,children:[(0,L.jsx)(`p`,{className:`preview-eyebrow`,children:e.eyebrow}),(0,L.jsx)(`h2`,{children:e.title}),(0,L.jsx)(`p`,{className:`preview-intro`,children:e.intro}),(0,L.jsx)(`div`,{className:`preview-card-grid`,children:t.skills.map(e=>(0,L.jsxs)(`article`,{className:`preview-card`,children:[(0,L.jsx)(`strong`,{children:e.name}),(0,L.jsx)(`p`,{children:e.description}),(0,L.jsx)(`small`,{children:e.id})]},e.id))})]})}function $C({props:e,data:t,type:n}){return(0,L.jsxs)(XC,{type:n,tone:e.tone,motion:e.motion,children:[(0,L.jsx)(`p`,{className:`preview-eyebrow`,children:e.eyebrow}),(0,L.jsx)(`h2`,{children:e.title}),(0,L.jsx)(`div`,{className:`preview-card-grid`,children:t.evidence.map(e=>(0,L.jsxs)(`article`,{className:`preview-card`,children:[(0,L.jsx)(`strong`,{children:e.title}),(0,L.jsx)(`p`,{children:e.summary||e.description}),(0,L.jsx)(`small`,{children:e.id})]},e.id))}),(0,L.jsxs)(`p`,{className:`preview-boundary`,children:[(0,L.jsx)(`strong`,{children:`Grenze:`}),` `,e.boundary]})]})}function ew({props:e,type:t}){return(0,L.jsxs)(XC,{type:t,tone:e.tone,motion:e.motion,children:[(0,L.jsx)(`p`,{className:`preview-eyebrow`,children:e.eyebrow}),(0,L.jsx)(`h2`,{children:e.title}),(0,L.jsx)(`div`,{className:`preview-card-grid`,children:(e.items||[]).map((e,t)=>(0,L.jsxs)(`article`,{className:`preview-card link-tone-${e.tone||`neutral`}`,children:[(0,L.jsx)(`span`,{className:`preview-icon`,"aria-hidden":`true`,children:e.icon}),(0,L.jsx)(`strong`,{children:e.title}),(0,L.jsx)(`p`,{children:e.description}),(0,L.jsx)(`span`,{className:`preview-link`,children:e.label})]},`${e.href}-${t}`))})]})}function tw(e,t,n){return e===`gemden.profile-hero`?(0,L.jsx)(ZC,{props:t,data:n,type:e}):e===`gemden.skill-grid`?(0,L.jsx)(QC,{props:t,data:n,type:e}):e===`gemden.evidence-grid`?(0,L.jsx)($C,{props:t,data:n,type:e}):e===`gemden.link-cards`?(0,L.jsx)(ew,{props:t,type:e}):(0,L.jsx)(XC,{type:e,tone:t.tone,motion:t.motion,children:(0,L.jsxs)(`p`,{children:[`Vorschau für `,e]})})}function nw(e,t,n){let r=YC(e,n),i={},a={};return t.modules.forEach(e=>{let t=KC(e),n={},o={props:WC(e.editor.default_props),appearance:WC(e.editor.default_appearance)},s={};e.editor.fields.forEach(e=>{n[e.id]=JC(e),s[e.id]=WC(GC(o,e.target))}),a[t]={label:e.title,fields:n,defaultProps:s,render:t=>tw(e.type,t,r)};let c=i[e.editor.category]||{title:e.editor.category_title,components:[],defaultExpanded:!0};c.components.push(t),i[e.editor.category]=c}),{categories:i,components:a,root:{label:`Seitendesign`,fields:{accent:{type:`text`,label:`Akzentfarbe (Hex)`},accent_deep:{type:`text`,label:`Dunkle Akzentfarbe (Hex)`},surface:{type:`text`,label:`Flächenfarbe (Hex)`},radius:{type:`select`,label:`Ecken`,options:[{label:`Klar · 12 px`,value:`12px`},{label:`Weich · 20 px`,value:`20px`},{label:`Rund · 30 px`,value:`30px`},{label:`Sehr rund · 40 px`,value:`40px`}]},motion:{type:`select`,label:`Bewegungsprofil`,options:[{label:`Keine Bewegung`,value:`none`},{label:`Sanft`,value:`gentle`},{label:`Ausdrucksstark`,value:`expressive`}]}},render:({children:e,accent:t,accent_deep:n,surface:r,radius:i,motion:a})=>(0,L.jsx)(`main`,{className:`gemden-editor-canvas theme-motion-${a||`none`}`,style:{"--editor-accent":t,"--editor-accent-deep":n,"--editor-surface":r,"--editor-radius":i},children:e})}}}var rw=Object.freeze({"PAGE-MEM-JULIUS":`/assets/data/pages/julius.v1.json`}),iw=`unchanged`,aw=Object.freeze([Object.freeze({id:`theme`,label:`Farbwelt`,options:Object.freeze([Object.freeze({label:`Rubin`,value:`ruby`}),Object.freeze({label:`Gold`,value:`gold`}),Object.freeze({label:`Minze`,value:`mint`})])}),Object.freeze({id:`motion`,label:`Bewegung`,options:Object.freeze([Object.freeze({label:`Aus`,value:`none`}),Object.freeze({label:`Sanft`,value:`gentle`}),Object.freeze({label:`Lebendig`,value:`expressive`})])}),Object.freeze({id:`radius`,label:`Ecken`,options:Object.freeze([Object.freeze({label:`Klar`,value:`12px`}),Object.freeze({label:`Ausgewogen`,value:`20px`}),Object.freeze({label:`Weich`,value:`30px`}),Object.freeze({label:`Sehr rund`,value:`40px`})])}),Object.freeze({id:`move`,label:`An den Anfang`,options:Object.freeze([Object.freeze({label:`Profil`,value:`gemden.profile-hero@1`}),Object.freeze({label:`Fähigkeiten`,value:`gemden.skill-grid@1`}),Object.freeze({label:`Nachweise`,value:`gemden.evidence-grid@1`}),Object.freeze({label:`Projekte`,value:`gemden.link-cards@1`})])})]);function ow(e,t){return{theme:e===`theme`?t:iw,motion:e===`motion`?t:iw,radius:e===`radius`?t:iw,move:e===`move`?t:iw,clarify:!1}}var sw={"header-publish":`Entwurf sichern`,"header-undo":`Rückgängig`,"header-redo":`Wiederholen`,"header-toggle-leftsidebar":`Bausteine einblenden`,"header-toggle-rightsidebar":`Einstellungen einblenden`,"header-toggle-menubar":`Menü einblenden`,"action-selectparent":`Übergeordneten Bereich wählen`,"action-duplicate":`Duplizieren`,"action-delete":`Entfernen`,"label-page":`Seitendesign`,"label-component":`Baustein`,"outline-empty":`Noch keine Bausteine`,"outline-header-title":`Aufbau`,"outline-header-collapseall":`Alle einklappen`,"outline-item-collapse":`Einklappen`,"outline-item-expand":`Ausklappen`,"outline-item-duplicate":`Duplizieren`,"outline-item-delete":`Entfernen`,"drawer-category-collapse":`{title} einklappen`,"drawer-category-expand":`{title} ausklappen`,"drawer-category-other":`Weitere`,"field-arrayitem-summary":`Eintrag #{index}`,"field-arrayitem-duplicate":`Duplizieren`,"field-arrayitem-delete":`Entfernen`,"plugin-blocks":`Bausteine`,"plugin-outline":`Aufbau`,"plugin-fields":`Einstellungen`,"plugin-components":`Bausteine`,"loader-loading":`Wird geladen`};function cw(e){return e?.message||`Unbekannter Fehler`}function lw(e){let t=new Blob([`${JSON.stringify(e,null,2)}\n`],{type:`application/json`}),n=URL.createObjectURL(t),r=window.document.createElement(`a`);r.href=n,r.download=`${e.id.toLowerCase()}.json`,r.click(),URL.revokeObjectURL(n)}async function uw(e){let t=await fetch(e,{credentials:`same-origin`,headers:{Accept:`application/json`}});if(!t.ok)throw Error(`${e}: HTTP ${t.status}`);return t.json()}function dw(e){try{let t=localStorage.getItem(HC(e.id));if(!t)return e;let n=JSON.parse(t);return n?.format!==`gemden-local-draft`||n?.version!==1||n?.page_id!==e.id?e:n.document}catch(t){return console.warn(`Lokaler GemDen-Entwurf konnte nicht geladen werden:`,t),e}}function fw({status:e}){return(0,L.jsxs)(`div`,{className:`editor-status editor-status-${e.kind}`,role:`status`,"aria-live":`polite`,children:[(0,L.jsx)(`span`,{"aria-hidden":`true`,children:e.kind===`success`?`✓`:e.kind===`error`?`!`:`◆`}),(0,L.jsx)(`p`,{children:e.message})]})}function pw({children:e,buildDocument:t,setStatus:n}){let r=ny(),[i,a]=(0,I.useState)(!1),[o,s]=(0,I.useState)(``),[c,l]=(0,I.useState)(null),[u,d]=(0,I.useState)(``),f=[`Gib der Seite eine sonnige, honigfarbene Stimmung.`,`Mach die Fähigkeiten minzfarben und lass sie schweben.`,`Nenne die Überschrift der Fähigkeiten „Meine Superkräfte.“`,`Meine Arbeiten sollen vor allen anderen Bereichen erscheinen.`,`Bitte keine Bewegung mehr.`];function p(){return t(r().appState.data)}function m(e){e.preventDefault();try{let e=vC(o,p());l(e),d(``)}catch(e){l(null),d(cw(e))}}function h(e,t){try{let n=`Direktauswahl: ${e.label} – ${t.label}.`,r=gC(n,p(),ow(e.id,t.value),{mode:`local-rule-pilot`});s(n),l(r),d(``)}catch(e){l(null),d(cw(e))}}function g(){try{let e=r(),i=SC(e.appState.data,c);t(i),e.dispatch({type:`setData`,data:()=>i}),n({kind:`success`,message:`Blob-Vorschlag in die Vorschau übernommen. Noch nicht gespeichert oder veröffentlicht.`}),l(null),s(``),a(!1)}catch(e){d(`Vorschlag blockiert: ${cw(e)}`)}}let _=i?(0,wt.createPortal)((0,L.jsx)(`div`,{className:`blob-assistant-layer`,children:(0,L.jsxs)(`aside`,{id:`blob-assistant-panel`,className:`blob-assistant-panel`,role:`dialog`,"aria-modal":`false`,"aria-labelledby":`blob-assistant-title`,children:[(0,L.jsxs)(`header`,{className:`blob-assistant-heading`,children:[(0,L.jsxs)(`span`,{className:`blob-assistant-mark`,"aria-hidden":`true`,children:[(0,L.jsx)(`i`,{}),(0,L.jsx)(`i`,{})]}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`p`,{children:`lokaler Regelassistent`}),(0,L.jsx)(`h2`,{id:`blob-assistant-title`,children:`Blob fragen`})]}),(0,L.jsx)(`button`,{className:`blob-assistant-close`,type:`button`,"aria-label":`Blob-Assistent schließen`,onClick:()=>a(!1),children:`×`})]}),(0,L.jsx)(`p`,{className:`blob-assistant-intro`,children:`Beschreibe die gewünschte Wirkung. Blob darf daraus nur freigeschaltete Seitenoperationen vorschlagen.`}),(0,L.jsx)(`div`,{className:`blob-assistant-examples`,"aria-label":`Beispielanfragen`,children:f.map(e=>(0,L.jsx)(`button`,{type:`button`,onClick:()=>{s(e),l(null),d(``)},children:e},e))}),(0,L.jsxs)(`form`,{className:`blob-assistant-form`,onSubmit:m,children:[(0,L.jsx)(`label`,{htmlFor:`blob-assistant-prompt`,children:`Was soll sich verändern?`}),(0,L.jsx)(`textarea`,{id:`blob-assistant-prompt`,value:o,maxLength:500,rows:`3`,placeholder:`Zum Beispiel: Mach die Seite ruhiger und setze die Fähigkeiten nach oben.`,onChange:e=>{s(e.target.value),l(null),d(``)}}),(0,L.jsx)(`button`,{className:`blob-assistant-primary`,type:`submit`,children:`Vorschlag erstellen`})]}),u&&(0,L.jsx)(`p`,{className:`blob-assistant-error`,role:`alert`,children:u}),c&&(0,L.jsxs)(`section`,{className:`blob-assistant-proposal ${c.recognized?``:`is-question`}`,"aria-live":`polite`,children:[(0,L.jsx)(`p`,{className:`blob-assistant-kicker`,children:`Blob schlägt vor`}),(0,L.jsx)(`h3`,{children:c.summary}),c.questions.map(e=>(0,L.jsx)(`p`,{children:e},e)),!c.recognized&&(0,L.jsxs)(`div`,{className:`blob-assistant-guidance`,"aria-label":`Sichere Direktauswahl`,children:[(0,L.jsx)(`p`,{className:`blob-assistant-kicker`,children:`Oder direkt auswählen`}),aw.map(e=>(0,L.jsxs)(`fieldset`,{children:[(0,L.jsx)(`legend`,{children:e.label}),(0,L.jsx)(`div`,{children:e.options.map(t=>(0,L.jsx)(`button`,{type:`button`,onClick:()=>h(e,t),children:t.label},t.value))})]},e.id))]}),c.operations.length>0&&(0,L.jsx)(`ol`,{children:c.explanations.map(e=>(0,L.jsx)(`li`,{children:e},e))}),(0,L.jsx)(`ul`,{className:`blob-assistant-boundaries`,children:c.boundaries.map(e=>(0,L.jsx)(`li`,{children:e},e))}),(0,L.jsxs)(`div`,{className:`blob-assistant-decision`,children:[(0,L.jsx)(`button`,{type:`button`,className:`blob-assistant-primary`,disabled:!c.recognized,onClick:g,children:`Vorschlag anwenden`}),(0,L.jsx)(`button`,{type:`button`,onClick:()=>l(null),children:`Verwerfen`})]})]})]})}),document.body):null;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(`div`,{className:`editor-header-actions`,children:[e,(0,L.jsx)(`button`,{className:`blob-assistant-trigger`,type:`button`,"aria-expanded":i,"aria-controls":`blob-assistant-panel`,onClick:()=>a(e=>!e),children:`◆ Blob`}),(0,L.jsx)(`button`,{type:`button`,onClick:()=>{try{lw(t(r().appState.data)),n({kind:`success`,message:`Geprüftes Seitendokument wurde heruntergeladen.`})}catch(e){n({kind:`error`,message:`Download blockiert: ${cw(e)}`})}},children:`JSON laden`}),(0,L.jsx)(`a`,{href:`/community/mitglieder/julius/`,target:`_blank`,rel:`noreferrer`,children:`Live-Seite ↗`})]}),_]})}function mw({page:e,catalog:t,capabilities:n,community:r,restoredLocal:i}){let[a,o]=(0,I.useState)({kind:`info`,message:i?`Lokaler Entwurf wiederhergestellt. Noch nichts wurde veröffentlicht.`:`Werkstatt bereit. Änderungen werden erst nach „Entwurf sichern“ gespeichert.`}),s=(0,I.useMemo)(()=>nw(e,t,r),[e,t,r]),c=(0,I.useMemo)(()=>BC(e,t),[e,t]),l=(0,I.useCallback)(r=>{let i=VC(r,e,t);return window.GemDenModules.validatePageDocument(i,t,n),i},[e,t,n]);async function u(e){o({kind:`info`,message:`Entwurf wird geprüft und gesichert …`});try{let t=l(e),n=UC(t);localStorage.setItem(HC(t.id),JSON.stringify(n)),o({kind:`success`,message:`Lokal in diesem Browser gesichert. Es wurde nichts veröffentlicht.`})}catch(e){o({kind:`error`,message:`Nicht gespeichert: ${cw(e)}`})}}let d=(0,I.useMemo)(()=>function({children:e}){return(0,L.jsx)(pw,{buildDocument:l,setStatus:o,children:e})},[l]);return(0,L.jsxs)(`div`,{className:`editor-app`,children:[(0,L.jsx)(fw,{status:a}),(0,L.jsx)(xS,{config:s,data:c,onPublish:u,overrides:{headerActions:d},headerTitle:`GemDen-Seitenwerkstatt`,headerPath:`Julius · lokaler Pilot`,dictionary:sw,iframe:{enabled:!0,syncHostStyles:!0,waitForStyles:!0},viewports:[{width:360,height:`auto`,label:`Handy`,icon:`Smartphone`},{width:768,height:`auto`,label:`Tablet`,icon:`Tablet`},{width:1280,height:`auto`,label:`Desktop`,icon:`Monitor`},{width:`100%`,height:`auto`,label:`Volle Breite`,icon:`Monitor`}],height:`100dvh`})]})}function hw({error:e}){return(0,L.jsxs)(`main`,{className:`editor-fatal`,children:[(0,L.jsx)(`span`,{"aria-hidden":`true`,children:`◆`}),(0,L.jsx)(`h1`,{children:`Die Seitenwerkstatt konnte nicht starten.`}),(0,L.jsx)(`p`,{children:cw(e)}),(0,L.jsx)(`a`,{href:`/community/mitglieder/julius/`,children:`Zur unveränderten Julius-Seite`})]})}async function gw(){let e=rw[new URLSearchParams(location.search).get(`page`)||`PAGE-MEM-JULIUS`];if(!e)throw Error(`Diese PAGE-ID ist für den Piloteditor nicht freigeschaltet.`);if(!window.GemDenModules)throw Error(`Der GemDen-Vertragsprüfer ist nicht verfügbar.`);let[t,n,r,i]=await Promise.all([uw(e),uw(`/assets/data/modules.v1.json`),uw(`/assets/data/capabilities.v1.json`),uw(`/assets/data/community-v0.1.json`)]);window.GemDenModules.validateCapabilityCatalog(r),window.GemDenModules.validateModuleCatalog(n,r),window.GemDenModules.validatePageDocument(t,n,r);let a=dw(t),o=JSON.stringify(a)!==JSON.stringify(t);window.GemDenModules.validatePageDocument(a,n,r),(0,Tt.createRoot)(document.getElementById(`editor-root`)).render((0,L.jsx)(mw,{page:a,catalog:n,capabilities:r,community:i,restoredLocal:o}))}gw().catch(e=>{console.error(`GemDen-Seitenwerkstatt:`,e),(0,Tt.createRoot)(document.getElementById(`editor-root`)).render((0,L.jsx)(hw,{error:e}))});export{Et as a,sn as i,ln as n,dn as r,Mm as t};