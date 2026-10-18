(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var Sd={exports:{}},Al={};var wv;function oM(){if(wv)return Al;wv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:u,ref:o!==void 0?o:null,props:c}}return Al.Fragment=t,Al.jsx=n,Al.jsxs=n,Al}var Rv;function lM(){return Rv||(Rv=1,Sd.exports=oM()),Sd.exports}var I=lM(),bd={exports:{}},ue={};var Cv;function cM(){if(Cv)return ue;Cv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function b(F){return F===null||typeof F!="object"?null:(F=v&&F[v]||F["@@iterator"],typeof F=="function"?F:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,y={};function x(F,q,V){this.props=F,this.context=q,this.refs=y,this.updater=V||M}x.prototype.isReactComponent={},x.prototype.setState=function(F,q){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,q,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function A(){}A.prototype=x.prototype;function C(F,q,V){this.props=F,this.context=q,this.refs=y,this.updater=V||M}var L=C.prototype=new A;L.constructor=C,w(L,x.prototype),L.isPureReactComponent=!0;var B=Array.isArray;function P(){}var N={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function U(F,q,V){var ht=V.ref;return{$$typeof:r,type:F,key:q,ref:ht!==void 0?ht:null,props:V}}function rt(F,q){return U(F.type,q,F.props)}function H(F){return typeof F=="object"&&F!==null&&F.$$typeof===r}function K(F){var q={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(V){return q[V]})}var et=/\/+/g;function tt(F,q){return typeof F=="object"&&F!==null&&F.key!=null?K(""+F.key):q.toString(36)}function J(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(P,P):(F.status="pending",F.then(function(q){F.status==="pending"&&(F.status="fulfilled",F.value=q)},function(q){F.status==="pending"&&(F.status="rejected",F.reason=q)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function z(F,q,V,ht,Rt){var nt=typeof F;(nt==="undefined"||nt==="boolean")&&(F=null);var xt=!1;if(F===null)xt=!0;else switch(nt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(F.$$typeof){case r:case t:xt=!0;break;case g:return xt=F._init,z(xt(F._payload),q,V,ht,Rt)}}if(xt)return Rt=Rt(F),xt=ht===""?"."+tt(F,0):ht,B(Rt)?(V="",xt!=null&&(V=xt.replace(et,"$&/")+"/"),z(Rt,q,V,"",function(Jt){return Jt})):Rt!=null&&(H(Rt)&&(Rt=rt(Rt,V+(Rt.key==null||F&&F.key===Rt.key?"":(""+Rt.key).replace(et,"$&/")+"/")+xt)),q.push(Rt)),1;xt=0;var bt=ht===""?".":ht+":";if(B(F))for(var Ht=0;Ht<F.length;Ht++)ht=F[Ht],nt=bt+tt(ht,Ht),xt+=z(ht,q,V,nt,Rt);else if(Ht=b(F),typeof Ht=="function")for(F=Ht.call(F),Ht=0;!(ht=F.next()).done;)ht=ht.value,nt=bt+tt(ht,Ht++),xt+=z(ht,q,V,nt,Rt);else if(nt==="object"){if(typeof F.then=="function")return z(J(F),q,V,ht,Rt);throw q=String(F),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return xt}function G(F,q,V){if(F==null)return F;var ht=[],Rt=0;return z(F,ht,"","",function(nt){return q.call(V,nt,Rt++)}),ht}function ut(F){if(F._status===-1){var q=F._result;q=q(),q.then(function(V){(F._status===0||F._status===-1)&&(F._status=1,F._result=V)},function(V){(F._status===0||F._status===-1)&&(F._status=2,F._result=V)}),F._status===-1&&(F._status=0,F._result=q)}if(F._status===1)return F._result.default;throw F._result}var mt=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},Et={map:G,forEach:function(F,q,V){G(F,function(){q.apply(this,arguments)},V)},count:function(F){var q=0;return G(F,function(){q++}),q},toArray:function(F){return G(F,function(q){return q})||[]},only:function(F){if(!H(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return ue.Activity=_,ue.Children=Et,ue.Component=x,ue.Fragment=n,ue.Profiler=o,ue.PureComponent=C,ue.StrictMode=a,ue.Suspense=m,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,ue.__COMPILER_RUNTIME={__proto__:null,c:function(F){return N.H.useMemoCache(F)}},ue.cache=function(F){return function(){return F.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(F,q,V){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var ht=w({},F.props),Rt=F.key;if(q!=null)for(nt in q.key!==void 0&&(Rt=""+q.key),q)!T.call(q,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&q.ref===void 0||(ht[nt]=q[nt]);var nt=arguments.length-2;if(nt===1)ht.children=V;else if(1<nt){for(var xt=Array(nt),bt=0;bt<nt;bt++)xt[bt]=arguments[bt+2];ht.children=xt}return U(F.type,Rt,ht)},ue.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:c,_context:F},F},ue.createElement=function(F,q,V){var ht,Rt={},nt=null;if(q!=null)for(ht in q.key!==void 0&&(nt=""+q.key),q)T.call(q,ht)&&ht!=="key"&&ht!=="__self"&&ht!=="__source"&&(Rt[ht]=q[ht]);var xt=arguments.length-2;if(xt===1)Rt.children=V;else if(1<xt){for(var bt=Array(xt),Ht=0;Ht<xt;Ht++)bt[Ht]=arguments[Ht+2];Rt.children=bt}if(F&&F.defaultProps)for(ht in xt=F.defaultProps,xt)Rt[ht]===void 0&&(Rt[ht]=xt[ht]);return U(F,nt,Rt)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(F){return{$$typeof:h,render:F}},ue.isValidElement=H,ue.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:ut}},ue.memo=function(F,q){return{$$typeof:p,type:F,compare:q===void 0?null:q}},ue.startTransition=function(F){var q=N.T,V={};N.T=V;try{var ht=F(),Rt=N.S;Rt!==null&&Rt(V,ht),typeof ht=="object"&&ht!==null&&typeof ht.then=="function"&&ht.then(P,mt)}catch(nt){mt(nt)}finally{q!==null&&V.types!==null&&(q.types=V.types),N.T=q}},ue.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},ue.use=function(F){return N.H.use(F)},ue.useActionState=function(F,q,V){return N.H.useActionState(F,q,V)},ue.useCallback=function(F,q){return N.H.useCallback(F,q)},ue.useContext=function(F){return N.H.useContext(F)},ue.useDebugValue=function(){},ue.useDeferredValue=function(F,q){return N.H.useDeferredValue(F,q)},ue.useEffect=function(F,q){return N.H.useEffect(F,q)},ue.useEffectEvent=function(F){return N.H.useEffectEvent(F)},ue.useId=function(){return N.H.useId()},ue.useImperativeHandle=function(F,q,V){return N.H.useImperativeHandle(F,q,V)},ue.useInsertionEffect=function(F,q){return N.H.useInsertionEffect(F,q)},ue.useLayoutEffect=function(F,q){return N.H.useLayoutEffect(F,q)},ue.useMemo=function(F,q){return N.H.useMemo(F,q)},ue.useOptimistic=function(F,q){return N.H.useOptimistic(F,q)},ue.useReducer=function(F,q,V){return N.H.useReducer(F,q,V)},ue.useRef=function(F){return N.H.useRef(F)},ue.useState=function(F){return N.H.useState(F)},ue.useSyncExternalStore=function(F,q,V){return N.H.useSyncExternalStore(F,q,V)},ue.useTransition=function(){return N.H.useTransition()},ue.version="19.2.4",ue}var Dv;function xm(){return Dv||(Dv=1,bd.exports=cM()),bd.exports}var Zt=xm(),Md={exports:{}},wl={},Ed={exports:{}},Td={};var Lv;function uM(){return Lv||(Lv=1,(function(r){function t(z,G){var ut=z.length;z.push(G);t:for(;0<ut;){var mt=ut-1>>>1,Et=z[mt];if(0<o(Et,G))z[mt]=G,z[ut]=Et,ut=mt;else break t}}function n(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var G=z[0],ut=z.pop();if(ut!==G){z[0]=ut;t:for(var mt=0,Et=z.length,F=Et>>>1;mt<F;){var q=2*(mt+1)-1,V=z[q],ht=q+1,Rt=z[ht];if(0>o(V,ut))ht<Et&&0>o(Rt,V)?(z[mt]=Rt,z[ht]=ut,mt=ht):(z[mt]=V,z[q]=ut,mt=q);else if(ht<Et&&0>o(Rt,ut))z[mt]=Rt,z[ht]=ut,mt=ht;else break t}}return G}function o(z,G){var ut=z.sortIndex-G.sortIndex;return ut!==0?ut:z.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();r.unstable_now=function(){return u.now()-h}}var m=[],p=[],g=1,_=null,v=3,b=!1,M=!1,w=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function L(z){for(var G=n(p);G!==null;){if(G.callback===null)a(p);else if(G.startTime<=z)a(p),G.sortIndex=G.expirationTime,t(m,G);else break;G=n(p)}}function B(z){if(w=!1,L(z),!M)if(n(m)!==null)M=!0,P||(P=!0,K());else{var G=n(p);G!==null&&J(B,G.startTime-z)}}var P=!1,N=-1,T=5,U=-1;function rt(){return y?!0:!(r.unstable_now()-U<T)}function H(){if(y=!1,P){var z=r.unstable_now();U=z;var G=!0;try{t:{M=!1,w&&(w=!1,A(N),N=-1),b=!0;var ut=v;try{e:{for(L(z),_=n(m);_!==null&&!(_.expirationTime>z&&rt());){var mt=_.callback;if(typeof mt=="function"){_.callback=null,v=_.priorityLevel;var Et=mt(_.expirationTime<=z);if(z=r.unstable_now(),typeof Et=="function"){_.callback=Et,L(z),G=!0;break e}_===n(m)&&a(m),L(z)}else a(m);_=n(m)}if(_!==null)G=!0;else{var F=n(p);F!==null&&J(B,F.startTime-z),G=!1}}break t}finally{_=null,v=ut,b=!1}G=void 0}}finally{G?K():P=!1}}}var K;if(typeof C=="function")K=function(){C(H)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,tt=et.port2;et.port1.onmessage=H,K=function(){tt.postMessage(null)}}else K=function(){x(H,0)};function J(z,G){N=x(function(){z(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(z){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var ut=v;v=G;try{return z()}finally{v=ut}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ut=v;v=z;try{return G()}finally{v=ut}},r.unstable_scheduleCallback=function(z,G,ut){var mt=r.unstable_now();switch(typeof ut=="object"&&ut!==null?(ut=ut.delay,ut=typeof ut=="number"&&0<ut?mt+ut:mt):ut=mt,z){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=ut+Et,z={id:g++,callback:G,priorityLevel:z,startTime:ut,expirationTime:Et,sortIndex:-1},ut>mt?(z.sortIndex=ut,t(p,z),n(m)===null&&z===n(p)&&(w?(A(N),N=-1):w=!0,J(B,ut-mt))):(z.sortIndex=Et,t(m,z),M||b||(M=!0,P||(P=!0,K()))),z},r.unstable_shouldYield=rt,r.unstable_wrapCallback=function(z){var G=v;return function(){var ut=v;v=G;try{return z.apply(this,arguments)}finally{v=ut}}}})(Td)),Td}var Uv;function fM(){return Uv||(Uv=1,Ed.exports=uM()),Ed.exports}var Ad={exports:{}},Xn={};var Nv;function hM(){if(Nv)return Xn;Nv=1;var r=xm();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Xn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Xn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Xn.flushSync=function(m){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,m)return m()}finally{u.T=p,a.p=g,a.d.f()}},Xn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},Xn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Xn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:b}):g==="script"&&a.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Xn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},Xn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);a.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Xn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},Xn.requestFormReset=function(m){a.d.r(m)},Xn.unstable_batchedUpdates=function(m,p){return m(p)},Xn.useFormState=function(m,p,g){return u.H.useFormState(m,p,g)},Xn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Xn.version="19.2.4",Xn}var Ov;function dM(){if(Ov)return Ad.exports;Ov=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ad.exports=hM(),Ad.exports}var Pv;function pM(){if(Pv)return wl;Pv=1;var r=fM(),t=xm(),n=dM();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(a(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,l=i;;){var f=s.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===s)return m(f),e;if(d===l)return m(f),i;d=d.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=d;else{for(var S=!1,R=f.child;R;){if(R===s){S=!0,s=f,l=d;break}if(R===l){S=!0,l=f,s=d;break}R=R.sibling}if(!S){for(R=d.child;R;){if(R===s){S=!0,s=d,l=f;break}if(R===l){S=!0,l=d,s=f;break}R=R.sibling}if(!S)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),C=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),rt=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var et=Symbol.for("react.client.reference");function tt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===et?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case B:return"Suspense";case P:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case C:return e.displayName||"Context";case A:return(e._context.displayName||"Context")+".Consumer";case L:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case N:return i=e.displayName||null,i!==null?i:tt(e.type)||"Memo";case T:i=e._payload,e=e._init;try{return tt(e(i))}catch{}}return null}var J=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ut={pending:!1,data:null,method:null,action:null},mt=[],Et=-1;function F(e){return{current:e}}function q(e){0>Et||(e.current=mt[Et],mt[Et]=null,Et--)}function V(e,i){Et++,mt[Et]=e.current,e.current=i}var ht=F(null),Rt=F(null),nt=F(null),xt=F(null);function bt(e,i){switch(V(nt,i),V(Rt,e),V(ht,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?K_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=K_(i),e=Q_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(ht),V(ht,e)}function Ht(){q(ht),q(Rt),q(nt)}function Jt(e){e.memoizedState!==null&&V(xt,e);var i=ht.current,s=Q_(i,e.type);i!==s&&(V(Rt,e),V(ht,s))}function ee(e){Rt.current===e&&(q(ht),q(Rt)),xt.current===e&&(q(xt),bl._currentValue=ut)}var Qe,Se;function be(e){if(Qe===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Qe=i&&i[1]||"",Se=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qe+e+Se}var Le=!1;function _t(e,i){if(!e||Le)return"";Le=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(ft){var lt=ft}Reflect.construct(e,[],St)}else{try{St.call()}catch(ft){lt=ft}e.call(St.prototype)}}else{try{throw Error()}catch(ft){lt=ft}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(ft){if(ft&&lt&&typeof ft.stack=="string")return[ft.stack,lt.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),S=d[0],R=d[1];if(S&&R){var k=S.split(`
`),st=R.split(`
`);for(f=l=0;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;for(;f<st.length&&!st[f].includes("DetermineComponentFrameRoot");)f++;if(l===k.length||f===st.length)for(l=k.length-1,f=st.length-1;1<=l&&0<=f&&k[l]!==st[f];)f--;for(;1<=l&&0<=f;l--,f--)if(k[l]!==st[f]){if(l!==1||f!==1)do if(l--,f--,0>f||k[l]!==st[f]){var gt=`
`+k[l].replace(" at new "," at ");return e.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",e.displayName)),gt}while(1<=l&&0<=f);break}}}finally{Le=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?be(s):""}function Kt(e,i){switch(e.tag){case 26:case 27:case 5:return be(e.type);case 16:return be("Lazy");case 13:return e.child!==i&&i!==null?be("Suspense Fallback"):be("Suspense");case 19:return be("SuspenseList");case 0:case 15:return _t(e.type,!1);case 11:return _t(e.type.render,!1);case 1:return _t(e.type,!0);case 31:return be("Activity");default:return""}}function X(e){try{var i="",s=null;do i+=Kt(e,s),s=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ce=Object.prototype.hasOwnProperty,he=r.unstable_scheduleCallback,de=r.unstable_cancelCallback,kt=r.unstable_shouldYield,O=r.unstable_requestPaint,E=r.unstable_now,Q=r.unstable_getCurrentPriorityLevel,vt=r.unstable_ImmediatePriority,Mt=r.unstable_UserBlockingPriority,pt=r.unstable_NormalPriority,Wt=r.unstable_LowPriority,Lt=r.unstable_IdlePriority,$t=r.log,ae=r.unstable_setDisableYieldValue,wt=null,Tt=null;function zt(e){if(typeof $t=="function"&&ae(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(wt,e)}catch{}}var Pt=Math.clz32?Math.clz32:Z,It=Math.log,me=Math.LN2;function Z(e){return e>>>=0,e===0?32:31-(It(e)/me|0)|0}var Dt=256,Ct=262144,Ft=4194304;function At(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function dt(e,i,s){var l=e.pendingLanes;if(l===0)return 0;var f=0,d=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var R=l&134217727;return R!==0?(l=R&~d,l!==0?f=At(l):(S&=R,S!==0?f=At(S):s||(s=R&~e,s!==0&&(f=At(s))))):(R=l&~d,R!==0?f=At(R):S!==0?f=At(S):s||(s=l&~e,s!==0&&(f=At(s)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:f}function Gt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function re(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function He(){var e=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),e}function Ue(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Zn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Gi(e,i,s,l,f,d){var S=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var R=e.entanglements,k=e.expirationTimes,st=e.hiddenUpdates;for(s=S&~s;0<s;){var gt=31-Pt(s),St=1<<gt;R[gt]=0,k[gt]=-1;var lt=st[gt];if(lt!==null)for(st[gt]=null,gt=0;gt<lt.length;gt++){var ft=lt[gt];ft!==null&&(ft.lane&=-536870913)}s&=~St}l!==0&&Io(e,l,0),d!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=d&~(S&~i))}function Io(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Pt(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&261930}function xr(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-Pt(s),f=1<<l;f&i|e[l]&i&&(e[l]|=i),s&=~f}}function tc(e,i){var s=i&-i;return s=(s&42)!==0?1:yr(s),(s&(e.suspendedLanes|i))!==0?0:s}function yr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Sr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ea(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:yv(e.type))}function br(e,i){var s=G.p;try{return G.p=e,i()}finally{G.p=s}}var Vi=Math.random().toString(36).slice(2),dn="__reactFiber$"+Vi,Sn="__reactProps$"+Vi,ya="__reactContainer$"+Vi,Qa="__reactEvents$"+Vi,ec="__reactListeners$"+Vi,nc="__reactHandles$"+Vi,ic="__reactResources$"+Vi,Is="__reactMarker$"+Vi;function Fo(e){delete e[dn],delete e[Sn],delete e[Qa],delete e[ec],delete e[nc]}function Ja(e){var i=e[dn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[ya]||s[dn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=av(e);e!==null;){if(s=e[dn])return s;e=av(e)}return i}e=s,s=e.parentNode}return null}function $a(e){if(e=e[dn]||e[ya]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function Fs(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function D(e){var i=e[ic];return i||(i=e[ic]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Y(e){e[Is]=!0}var ct=new Set,ot={};function it(e,i){Ut(e,i),Ut(e+"Capture",i)}function Ut(e,i){for(ot[e]=i,e=0;e<i.length;e++)ct.add(i[e])}var Bt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ot={},qt={};function Qt(e){return Ce.call(qt,e)?!0:Ce.call(Ot,e)?!1:Bt.test(e)?qt[e]=!0:(Ot[e]=!0,!1)}function se(e,i,s){if(Qt(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function ce(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Vt(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}function ge(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function an(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function sn(e,i,s){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,d=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){s=""+S,d.call(this,S)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Pe(e){if(!e._valueTracker){var i=an(e)?"checked":"value";e._valueTracker=sn(e,i,""+e[i])}}function bn(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=an(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function Xt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Kn=/[\n"\\]/g;function le(e){return e.replace(Kn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Qn(e,i,s,l,f,d,S,R){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),i!=null?S==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+ge(i)):e.value!==""+ge(i)&&(e.value=""+ge(i)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),i!=null?ki(e,S,ge(i)):s!=null?ki(e,S,ge(s)):l!=null&&e.removeAttribute("value"),f==null&&d!=null&&(e.defaultChecked=!!d),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+ge(R):e.removeAttribute("name")}function di(e,i,s,l,f,d,S,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Pe(e);return}s=s!=null?""+ge(s):"",i=i!=null?""+ge(i):s,R||i===e.value||(e.value=i),e.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=R?e.checked:!!l,e.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Pe(e)}function ki(e,i,s){i==="number"&&Xt(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function pi(e,i,s,l){if(e=e.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<e.length;s++)f=i.hasOwnProperty("$"+e[s].value),e[s].selected!==f&&(e[s].selected=f),f&&l&&(e[s].defaultSelected=!0)}else{for(s=""+ge(s),i=null,f=0;f<e.length;f++){if(e[f].value===s){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function Be(e,i,s){if(i!=null&&(i=""+ge(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+ge(s):""}function pn(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(J(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=ge(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l),Pe(e)}function Jn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var mn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ji(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||mn.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function Sa(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&ji(e,f,l)}else for(var d in i)i.hasOwnProperty(d)&&ji(e,d,i[d])}function Mr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var iS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),aS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ac(e){return aS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ba(){}var vf=null;function xf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Er=null,Tr=null;function Zm(e){var i=$a(e);if(i&&(e=i.stateNode)){var s=e[Sn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Qn(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+le(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var f=l[Sn]||null;if(!f)throw Error(a(90));Qn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&bn(l)}break t;case"textarea":Be(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&pi(e,!!s.multiple,i,!1)}}}var yf=!1;function Km(e,i,s){if(yf)return e(i,s);yf=!0;try{var l=e(i);return l}finally{if(yf=!1,(Er!==null||Tr!==null)&&(Xc(),Er&&(i=Er,e=Tr,Tr=Er=null,Zm(i),e)))for(i=0;i<e.length;i++)Zm(e[i])}}function Bo(e,i){var s=e.stateNode;if(s===null)return null;var l=s[Sn]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sf=!1;if(Ma)try{var Ho={};Object.defineProperty(Ho,"passive",{get:function(){Sf=!0}}),window.addEventListener("test",Ho,Ho),window.removeEventListener("test",Ho,Ho)}catch{Sf=!1}var ts=null,bf=null,sc=null;function Qm(){if(sc)return sc;var e,i=bf,s=i.length,l,f="value"in ts?ts.value:ts.textContent,d=f.length;for(e=0;e<s&&i[e]===f[e];e++);var S=s-e;for(l=1;l<=S&&i[s-l]===f[d-l];l++);return sc=f.slice(e,1<l?1-l:void 0)}function rc(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function oc(){return!0}function Jm(){return!1}function ai(e){function i(s,l,f,d,S){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(s=e[R],this[R]=s?s(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?oc:Jm,this.isPropagationStopped=Jm,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=oc)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=oc)},persist:function(){},isPersistent:oc}),i}var Bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lc=ai(Bs),Go=_({},Bs,{view:0,detail:0}),sS=ai(Go),Mf,Ef,Vo,cc=_({},Go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Af,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vo&&(Vo&&e.type==="mousemove"?(Mf=e.screenX-Vo.screenX,Ef=e.screenY-Vo.screenY):Ef=Mf=0,Vo=e),Mf)},movementY:function(e){return"movementY"in e?e.movementY:Ef}}),$m=ai(cc),rS=_({},cc,{dataTransfer:0}),oS=ai(rS),lS=_({},Go,{relatedTarget:0}),Tf=ai(lS),cS=_({},Bs,{animationName:0,elapsedTime:0,pseudoElement:0}),uS=ai(cS),fS=_({},Bs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hS=ai(fS),dS=_({},Bs,{data:0}),t0=ai(dS),pS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _S(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=gS[e])?!!i[e]:!1}function Af(){return _S}var vS=_({},Go,{key:function(e){if(e.key){var i=pS[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=rc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Af,charCode:function(e){return e.type==="keypress"?rc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xS=ai(vS),yS=_({},cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),e0=ai(yS),SS=_({},Go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Af}),bS=ai(SS),MS=_({},Bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),ES=ai(MS),TS=_({},cc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),AS=ai(TS),wS=_({},Bs,{newState:0,oldState:0}),RS=ai(wS),CS=[9,13,27,32],wf=Ma&&"CompositionEvent"in window,ko=null;Ma&&"documentMode"in document&&(ko=document.documentMode);var DS=Ma&&"TextEvent"in window&&!ko,n0=Ma&&(!wf||ko&&8<ko&&11>=ko),i0=" ",a0=!1;function s0(e,i){switch(e){case"keyup":return CS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function r0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ar=!1;function LS(e,i){switch(e){case"compositionend":return r0(i);case"keypress":return i.which!==32?null:(a0=!0,i0);case"textInput":return e=i.data,e===i0&&a0?null:e;default:return null}}function US(e,i){if(Ar)return e==="compositionend"||!wf&&s0(e,i)?(e=Qm(),sc=bf=ts=null,Ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return n0&&i.locale!=="ko"?null:i.data;default:return null}}var NS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function o0(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!NS[e.type]:i==="textarea"}function l0(e,i,s,l){Er?Tr?Tr.push(l):Tr=[l]:Er=l,i=Jc(i,"onChange"),0<i.length&&(s=new lc("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var jo=null,Xo=null;function OS(e){j_(e,0)}function uc(e){var i=Fs(e);if(bn(i))return e}function c0(e,i){if(e==="change")return i}var u0=!1;if(Ma){var Rf;if(Ma){var Cf="oninput"in document;if(!Cf){var f0=document.createElement("div");f0.setAttribute("oninput","return;"),Cf=typeof f0.oninput=="function"}Rf=Cf}else Rf=!1;u0=Rf&&(!document.documentMode||9<document.documentMode)}function h0(){jo&&(jo.detachEvent("onpropertychange",d0),Xo=jo=null)}function d0(e){if(e.propertyName==="value"&&uc(Xo)){var i=[];l0(i,Xo,e,xf(e)),Km(OS,i)}}function PS(e,i,s){e==="focusin"?(h0(),jo=i,Xo=s,jo.attachEvent("onpropertychange",d0)):e==="focusout"&&h0()}function zS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return uc(Xo)}function IS(e,i){if(e==="click")return uc(i)}function FS(e,i){if(e==="input"||e==="change")return uc(i)}function BS(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var mi=typeof Object.is=="function"?Object.is:BS;function Wo(e,i){if(mi(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!Ce.call(i,f)||!mi(e[f],i[f]))return!1}return!0}function p0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function m0(e,i){var s=p0(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=p0(s)}}function g0(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?g0(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function _0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Xt(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=Xt(e.document)}return i}function Df(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var HS=Ma&&"documentMode"in document&&11>=document.documentMode,wr=null,Lf=null,qo=null,Uf=!1;function v0(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Uf||wr==null||wr!==Xt(l)||(l=wr,"selectionStart"in l&&Df(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),qo&&Wo(qo,l)||(qo=l,l=Jc(Lf,"onSelect"),0<l.length&&(i=new lc("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=wr)))}function Hs(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var Rr={animationend:Hs("Animation","AnimationEnd"),animationiteration:Hs("Animation","AnimationIteration"),animationstart:Hs("Animation","AnimationStart"),transitionrun:Hs("Transition","TransitionRun"),transitionstart:Hs("Transition","TransitionStart"),transitioncancel:Hs("Transition","TransitionCancel"),transitionend:Hs("Transition","TransitionEnd")},Nf={},x0={};Ma&&(x0=document.createElement("div").style,"AnimationEvent"in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),"TransitionEvent"in window||delete Rr.transitionend.transition);function Gs(e){if(Nf[e])return Nf[e];if(!Rr[e])return e;var i=Rr[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in x0)return Nf[e]=i[s];return e}var y0=Gs("animationend"),S0=Gs("animationiteration"),b0=Gs("animationstart"),GS=Gs("transitionrun"),VS=Gs("transitionstart"),kS=Gs("transitioncancel"),M0=Gs("transitionend"),E0=new Map,Of="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Of.push("scrollEnd");function Xi(e,i){E0.set(e,i),it(i,[e])}var fc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ai=[],Cr=0,Pf=0;function hc(){for(var e=Cr,i=Pf=Cr=0;i<e;){var s=Ai[i];Ai[i++]=null;var l=Ai[i];Ai[i++]=null;var f=Ai[i];Ai[i++]=null;var d=Ai[i];if(Ai[i++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}d!==0&&T0(s,f,d)}}function dc(e,i,s,l){Ai[Cr++]=e,Ai[Cr++]=i,Ai[Cr++]=s,Ai[Cr++]=l,Pf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function zf(e,i,s,l){return dc(e,i,s,l),pc(e)}function Vs(e,i){return dc(e,null,null,i),pc(e)}function T0(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var f=!1,d=e.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(f=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,f&&i!==null&&(f=31-Pt(s),e=d.hiddenUpdates,l=e[f],l===null?e[f]=[i]:l.push(i),i.lane=s|536870912),d):null}function pc(e){if(50<ml)throw ml=0,Xh=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Dr={};function jS(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(e,i,s,l){return new jS(e,i,s,l)}function If(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ea(e,i){var s=e.alternate;return s===null?(s=gi(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function A0(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function mc(e,i,s,l,f,d){var S=0;if(l=e,typeof e=="function")If(e)&&(S=1);else if(typeof e=="string")S=Zb(e,s,ht.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=gi(31,s,i,f),e.elementType=U,e.lanes=d,e;case w:return ks(s.children,f,d,i);case y:S=8,f|=24;break;case x:return e=gi(12,s,i,f|2),e.elementType=x,e.lanes=d,e;case B:return e=gi(13,s,i,f),e.elementType=B,e.lanes=d,e;case P:return e=gi(19,s,i,f),e.elementType=P,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C:S=10;break t;case A:S=9;break t;case L:S=11;break t;case N:S=14;break t;case T:S=16,l=null;break t}S=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=gi(S,s,i,f),i.elementType=e,i.type=l,i.lanes=d,i}function ks(e,i,s,l){return e=gi(7,e,l,i),e.lanes=s,e}function Ff(e,i,s){return e=gi(6,e,null,i),e.lanes=s,e}function w0(e){var i=gi(18,null,null,0);return i.stateNode=e,i}function Bf(e,i,s){return i=gi(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var R0=new WeakMap;function wi(e,i){if(typeof e=="object"&&e!==null){var s=R0.get(e);return s!==void 0?s:(i={value:e,source:i,stack:X(i)},R0.set(e,i),i)}return{value:e,source:i,stack:X(i)}}var Lr=[],Ur=0,gc=null,Yo=0,Ri=[],Ci=0,es=null,na=1,ia="";function Ta(e,i){Lr[Ur++]=Yo,Lr[Ur++]=gc,gc=e,Yo=i}function C0(e,i,s){Ri[Ci++]=na,Ri[Ci++]=ia,Ri[Ci++]=es,es=e;var l=na;e=ia;var f=32-Pt(l)-1;l&=~(1<<f),s+=1;var d=32-Pt(i)+f;if(30<d){var S=f-f%5;d=(l&(1<<S)-1).toString(32),l>>=S,f-=S,na=1<<32-Pt(i)+f|s<<f|l,ia=d+e}else na=1<<d|s<<f|l,ia=e}function Hf(e){e.return!==null&&(Ta(e,1),C0(e,1,0))}function Gf(e){for(;e===gc;)gc=Lr[--Ur],Lr[Ur]=null,Yo=Lr[--Ur],Lr[Ur]=null;for(;e===es;)es=Ri[--Ci],Ri[Ci]=null,ia=Ri[--Ci],Ri[Ci]=null,na=Ri[--Ci],Ri[Ci]=null}function D0(e,i){Ri[Ci++]=na,Ri[Ci++]=ia,Ri[Ci++]=es,na=i.id,ia=i.overflow,es=e}var Nn=null,$e=null,De=!1,ns=null,Di=!1,Vf=Error(a(519));function is(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zo(wi(i,e)),Vf}function L0(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[dn]=e,i[Sn]=l,s){case"dialog":Te("cancel",i),Te("close",i);break;case"iframe":case"object":case"embed":Te("load",i);break;case"video":case"audio":for(s=0;s<_l.length;s++)Te(_l[s],i);break;case"source":Te("error",i);break;case"img":case"image":case"link":Te("error",i),Te("load",i);break;case"details":Te("toggle",i);break;case"input":Te("invalid",i),di(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Te("invalid",i);break;case"textarea":Te("invalid",i),pn(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||Y_(i.textContent,s)?(l.popover!=null&&(Te("beforetoggle",i),Te("toggle",i)),l.onScroll!=null&&Te("scroll",i),l.onScrollEnd!=null&&Te("scrollend",i),l.onClick!=null&&(i.onclick=ba),i=!0):i=!1,i||is(e,!0)}function U0(e){for(Nn=e.return;Nn;)switch(Nn.tag){case 5:case 31:case 13:Di=!1;return;case 27:case 3:Di=!0;return;default:Nn=Nn.return}}function Nr(e){if(e!==Nn)return!1;if(!De)return U0(e),De=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||rd(e.type,e.memoizedProps)),s=!s),s&&$e&&is(e),U0(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));$e=iv(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));$e=iv(e)}else i===27?(i=$e,_s(e.type)?(e=fd,fd=null,$e=e):$e=i):$e=Nn?Ui(e.stateNode.nextSibling):null;return!0}function js(){$e=Nn=null,De=!1}function kf(){var e=ns;return e!==null&&(li===null?li=e:li.push.apply(li,e),ns=null),e}function Zo(e){ns===null?ns=[e]:ns.push(e)}var jf=F(null),Xs=null,Aa=null;function as(e,i,s){V(jf,i._currentValue),i._currentValue=s}function wa(e){e._currentValue=jf.current,q(jf)}function Xf(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function Wf(e,i,s,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var d=f.dependencies;if(d!==null){var S=f.child;d=d.firstContext;t:for(;d!==null;){var R=d;d=f;for(var k=0;k<i.length;k++)if(R.context===i[k]){d.lanes|=s,R=d.alternate,R!==null&&(R.lanes|=s),Xf(d.return,s,e),l||(S=null);break t}d=R.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(a(341));S.lanes|=s,d=S.alternate,d!==null&&(d.lanes|=s),Xf(S,s,e),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===e){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function Or(e,i,s,l){e=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var R=f.type;mi(f.pendingProps.value,S.value)||(e!==null?e.push(R):e=[R])}}else if(f===xt.current){if(S=f.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(bl):e=[bl])}f=f.return}e!==null&&Wf(i,e,s,l),i.flags|=262144}function _c(e){for(e=e.firstContext;e!==null;){if(!mi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ws(e){Xs=e,Aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function On(e){return N0(Xs,e)}function vc(e,i){return Xs===null&&Ws(e),N0(e,i)}function N0(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Aa===null){if(e===null)throw Error(a(308));Aa=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Aa=Aa.next=i;return s}var XS=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},WS=r.unstable_scheduleCallback,qS=r.unstable_NormalPriority,gn={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qf(){return{controller:new XS,data:new Map,refCount:0}}function Ko(e){e.refCount--,e.refCount===0&&WS(qS,function(){e.controller.abort()})}var Qo=null,Yf=0,Pr=0,zr=null;function YS(e,i){if(Qo===null){var s=Qo=[];Yf=0,Pr=Qh(),zr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Yf++,i.then(O0,O0),i}function O0(){if(--Yf===0&&Qo!==null){zr!==null&&(zr.status="fulfilled");var e=Qo;Qo=null,Pr=0,zr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function ZS(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var P0=z.S;z.S=function(e,i){v_=E(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&YS(e,i),P0!==null&&P0(e,i)};var qs=F(null);function Zf(){var e=qs.current;return e!==null?e:Ze.pooledCache}function xc(e,i){i===null?V(qs,qs.current):V(qs,i.pool)}function z0(){var e=Zf();return e===null?null:{parent:gn._currentValue,pool:e}}var Ir=Error(a(460)),Kf=Error(a(474)),yc=Error(a(542)),Sc={then:function(){}};function I0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function F0(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(ba,ba),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,H0(e),e;default:if(typeof i.status=="string")i.then(ba,ba);else{if(e=Ze,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,H0(e),e}throw Zs=i,Ir}}function Ys(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Zs=s,Ir):s}}var Zs=null;function B0(){if(Zs===null)throw Error(a(459));var e=Zs;return Zs=null,e}function H0(e){if(e===Ir||e===yc)throw Error(a(483))}var Fr=null,Jo=0;function bc(e){var i=Jo;return Jo+=1,Fr===null&&(Fr=[]),F0(Fr,e,i)}function $o(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Mc(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function G0(e){function i($,W){if(e){var at=$.deletions;at===null?($.deletions=[W],$.flags|=16):at.push(W)}}function s($,W){if(!e)return null;for(;W!==null;)i($,W),W=W.sibling;return null}function l($){for(var W=new Map;$!==null;)$.key!==null?W.set($.key,$):W.set($.index,$),$=$.sibling;return W}function f($,W){return $=Ea($,W),$.index=0,$.sibling=null,$}function d($,W,at){return $.index=at,e?(at=$.alternate,at!==null?(at=at.index,at<W?($.flags|=67108866,W):at):($.flags|=67108866,W)):($.flags|=1048576,W)}function S($){return e&&$.alternate===null&&($.flags|=67108866),$}function R($,W,at,yt){return W===null||W.tag!==6?(W=Ff(at,$.mode,yt),W.return=$,W):(W=f(W,at),W.return=$,W)}function k($,W,at,yt){var te=at.type;return te===w?gt($,W,at.props.children,yt,at.key):W!==null&&(W.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===T&&Ys(te)===W.type)?(W=f(W,at.props),$o(W,at),W.return=$,W):(W=mc(at.type,at.key,at.props,null,$.mode,yt),$o(W,at),W.return=$,W)}function st($,W,at,yt){return W===null||W.tag!==4||W.stateNode.containerInfo!==at.containerInfo||W.stateNode.implementation!==at.implementation?(W=Bf(at,$.mode,yt),W.return=$,W):(W=f(W,at.children||[]),W.return=$,W)}function gt($,W,at,yt,te){return W===null||W.tag!==7?(W=ks(at,$.mode,yt,te),W.return=$,W):(W=f(W,at),W.return=$,W)}function St($,W,at){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Ff(""+W,$.mode,at),W.return=$,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case b:return at=mc(W.type,W.key,W.props,null,$.mode,at),$o(at,W),at.return=$,at;case M:return W=Bf(W,$.mode,at),W.return=$,W;case T:return W=Ys(W),St($,W,at)}if(J(W)||K(W))return W=ks(W,$.mode,at,null),W.return=$,W;if(typeof W.then=="function")return St($,bc(W),at);if(W.$$typeof===C)return St($,vc($,W),at);Mc($,W)}return null}function lt($,W,at,yt){var te=W!==null?W.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return te!==null?null:R($,W,""+at,yt);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case b:return at.key===te?k($,W,at,yt):null;case M:return at.key===te?st($,W,at,yt):null;case T:return at=Ys(at),lt($,W,at,yt)}if(J(at)||K(at))return te!==null?null:gt($,W,at,yt,null);if(typeof at.then=="function")return lt($,W,bc(at),yt);if(at.$$typeof===C)return lt($,W,vc($,at),yt);Mc($,at)}return null}function ft($,W,at,yt,te){if(typeof yt=="string"&&yt!==""||typeof yt=="number"||typeof yt=="bigint")return $=$.get(at)||null,R(W,$,""+yt,te);if(typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case b:return $=$.get(yt.key===null?at:yt.key)||null,k(W,$,yt,te);case M:return $=$.get(yt.key===null?at:yt.key)||null,st(W,$,yt,te);case T:return yt=Ys(yt),ft($,W,at,yt,te)}if(J(yt)||K(yt))return $=$.get(at)||null,gt(W,$,yt,te,null);if(typeof yt.then=="function")return ft($,W,at,bc(yt),te);if(yt.$$typeof===C)return ft($,W,at,vc(W,yt),te);Mc(W,yt)}return null}function jt($,W,at,yt){for(var te=null,ze=null,Yt=W,_e=W=0,Re=null;Yt!==null&&_e<at.length;_e++){Yt.index>_e?(Re=Yt,Yt=null):Re=Yt.sibling;var Ie=lt($,Yt,at[_e],yt);if(Ie===null){Yt===null&&(Yt=Re);break}e&&Yt&&Ie.alternate===null&&i($,Yt),W=d(Ie,W,_e),ze===null?te=Ie:ze.sibling=Ie,ze=Ie,Yt=Re}if(_e===at.length)return s($,Yt),De&&Ta($,_e),te;if(Yt===null){for(;_e<at.length;_e++)Yt=St($,at[_e],yt),Yt!==null&&(W=d(Yt,W,_e),ze===null?te=Yt:ze.sibling=Yt,ze=Yt);return De&&Ta($,_e),te}for(Yt=l(Yt);_e<at.length;_e++)Re=ft(Yt,$,_e,at[_e],yt),Re!==null&&(e&&Re.alternate!==null&&Yt.delete(Re.key===null?_e:Re.key),W=d(Re,W,_e),ze===null?te=Re:ze.sibling=Re,ze=Re);return e&&Yt.forEach(function(bs){return i($,bs)}),De&&Ta($,_e),te}function ie($,W,at,yt){if(at==null)throw Error(a(151));for(var te=null,ze=null,Yt=W,_e=W=0,Re=null,Ie=at.next();Yt!==null&&!Ie.done;_e++,Ie=at.next()){Yt.index>_e?(Re=Yt,Yt=null):Re=Yt.sibling;var bs=lt($,Yt,Ie.value,yt);if(bs===null){Yt===null&&(Yt=Re);break}e&&Yt&&bs.alternate===null&&i($,Yt),W=d(bs,W,_e),ze===null?te=bs:ze.sibling=bs,ze=bs,Yt=Re}if(Ie.done)return s($,Yt),De&&Ta($,_e),te;if(Yt===null){for(;!Ie.done;_e++,Ie=at.next())Ie=St($,Ie.value,yt),Ie!==null&&(W=d(Ie,W,_e),ze===null?te=Ie:ze.sibling=Ie,ze=Ie);return De&&Ta($,_e),te}for(Yt=l(Yt);!Ie.done;_e++,Ie=at.next())Ie=ft(Yt,$,_e,Ie.value,yt),Ie!==null&&(e&&Ie.alternate!==null&&Yt.delete(Ie.key===null?_e:Ie.key),W=d(Ie,W,_e),ze===null?te=Ie:ze.sibling=Ie,ze=Ie);return e&&Yt.forEach(function(rM){return i($,rM)}),De&&Ta($,_e),te}function qe($,W,at,yt){if(typeof at=="object"&&at!==null&&at.type===w&&at.key===null&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case b:t:{for(var te=at.key;W!==null;){if(W.key===te){if(te=at.type,te===w){if(W.tag===7){s($,W.sibling),yt=f(W,at.props.children),yt.return=$,$=yt;break t}}else if(W.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===T&&Ys(te)===W.type){s($,W.sibling),yt=f(W,at.props),$o(yt,at),yt.return=$,$=yt;break t}s($,W);break}else i($,W);W=W.sibling}at.type===w?(yt=ks(at.props.children,$.mode,yt,at.key),yt.return=$,$=yt):(yt=mc(at.type,at.key,at.props,null,$.mode,yt),$o(yt,at),yt.return=$,$=yt)}return S($);case M:t:{for(te=at.key;W!==null;){if(W.key===te)if(W.tag===4&&W.stateNode.containerInfo===at.containerInfo&&W.stateNode.implementation===at.implementation){s($,W.sibling),yt=f(W,at.children||[]),yt.return=$,$=yt;break t}else{s($,W);break}else i($,W);W=W.sibling}yt=Bf(at,$.mode,yt),yt.return=$,$=yt}return S($);case T:return at=Ys(at),qe($,W,at,yt)}if(J(at))return jt($,W,at,yt);if(K(at)){if(te=K(at),typeof te!="function")throw Error(a(150));return at=te.call(at),ie($,W,at,yt)}if(typeof at.then=="function")return qe($,W,bc(at),yt);if(at.$$typeof===C)return qe($,W,vc($,at),yt);Mc($,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,W!==null&&W.tag===6?(s($,W.sibling),yt=f(W,at),yt.return=$,$=yt):(s($,W),yt=Ff(at,$.mode,yt),yt.return=$,$=yt),S($)):s($,W)}return function($,W,at,yt){try{Jo=0;var te=qe($,W,at,yt);return Fr=null,te}catch(Yt){if(Yt===Ir||Yt===yc)throw Yt;var ze=gi(29,Yt,null,$.mode);return ze.lanes=yt,ze.return=$,ze}}}var Ks=G0(!0),V0=G0(!1),ss=!1;function Qf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function rs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function os(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Fe&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=pc(e),T0(e,null,s),i}return dc(e,l,i,s),pc(e)}function tl(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,xr(e,s)}}function $f(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?f=d=S:d=d.next=S,s=s.next}while(s!==null);d===null?f=d=i:d=d.next=i}else f=d=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var th=!1;function el(){if(th){var e=zr;if(e!==null)throw e}}function nl(e,i,s,l){th=!1;var f=e.updateQueue;ss=!1;var d=f.firstBaseUpdate,S=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var k=R,st=k.next;k.next=null,S===null?d=st:S.next=st,S=k;var gt=e.alternate;gt!==null&&(gt=gt.updateQueue,R=gt.lastBaseUpdate,R!==S&&(R===null?gt.firstBaseUpdate=st:R.next=st,gt.lastBaseUpdate=k))}if(d!==null){var St=f.baseState;S=0,gt=st=k=null,R=d;do{var lt=R.lane&-536870913,ft=lt!==R.lane;if(ft?(we&lt)===lt:(l&lt)===lt){lt!==0&&lt===Pr&&(th=!0),gt!==null&&(gt=gt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var jt=e,ie=R;lt=i;var qe=s;switch(ie.tag){case 1:if(jt=ie.payload,typeof jt=="function"){St=jt.call(qe,St,lt);break t}St=jt;break t;case 3:jt.flags=jt.flags&-65537|128;case 0:if(jt=ie.payload,lt=typeof jt=="function"?jt.call(qe,St,lt):jt,lt==null)break t;St=_({},St,lt);break t;case 2:ss=!0}}lt=R.callback,lt!==null&&(e.flags|=64,ft&&(e.flags|=8192),ft=f.callbacks,ft===null?f.callbacks=[lt]:ft.push(lt))}else ft={lane:lt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},gt===null?(st=gt=ft,k=St):gt=gt.next=ft,S|=lt;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;ft=R,R=ft.next,ft.next=null,f.lastBaseUpdate=ft,f.shared.pending=null}}while(!0);gt===null&&(k=St),f.baseState=k,f.firstBaseUpdate=st,f.lastBaseUpdate=gt,d===null&&(f.shared.lanes=0),hs|=S,e.lanes=S,e.memoizedState=St}}function k0(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function j0(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)k0(s[e],i)}var Br=F(null),Ec=F(0);function X0(e,i){e=za,V(Ec,e),V(Br,i),za=e|i.baseLanes}function eh(){V(Ec,za),V(Br,Br.current)}function nh(){za=Ec.current,q(Br),q(Ec)}var _i=F(null),Li=null;function ls(e){var i=e.alternate;V(un,un.current&1),V(_i,e),Li===null&&(i===null||Br.current!==null||i.memoizedState!==null)&&(Li=e)}function ih(e){V(un,un.current),V(_i,e),Li===null&&(Li=e)}function W0(e){e.tag===22?(V(un,un.current),V(_i,e),Li===null&&(Li=e)):cs()}function cs(){V(un,un.current),V(_i,_i.current)}function vi(e){q(_i),Li===e&&(Li=null),q(un)}var un=F(0);function Tc(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||cd(s)||ud(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ra=0,pe=null,Xe=null,_n=null,Ac=!1,Hr=!1,Qs=!1,wc=0,il=0,Gr=null,KS=0;function on(){throw Error(a(321))}function ah(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!mi(e[s],i[s]))return!1;return!0}function sh(e,i,s,l,f,d){return Ra=d,pe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,z.H=e===null||e.memoizedState===null?Cg:yh,Qs=!1,d=s(l,f),Qs=!1,Hr&&(d=Y0(i,s,l,f)),q0(e),d}function q0(e){z.H=rl;var i=Xe!==null&&Xe.next!==null;if(Ra=0,_n=Xe=pe=null,Ac=!1,il=0,Gr=null,i)throw Error(a(300));e===null||vn||(e=e.dependencies,e!==null&&_c(e)&&(vn=!0))}function Y0(e,i,s,l){pe=e;var f=0;do{if(Hr&&(Gr=null),il=0,Hr=!1,25<=f)throw Error(a(301));if(f+=1,_n=Xe=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}z.H=Dg,d=i(s,l)}while(Hr);return d}function QS(){var e=z.H,i=e.useState()[0];return i=typeof i.then=="function"?al(i):i,e=e.useState()[0],(Xe!==null?Xe.memoizedState:null)!==e&&(pe.flags|=1024),i}function rh(){var e=wc!==0;return wc=0,e}function oh(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function lh(e){if(Ac){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Ac=!1}Ra=0,_n=Xe=pe=null,Hr=!1,il=wc=0,Gr=null}function $n(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?pe.memoizedState=_n=e:_n=_n.next=e,_n}function fn(){if(Xe===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var i=_n===null?pe.memoizedState:_n.next;if(i!==null)_n=i,Xe=e;else{if(e===null)throw pe.alternate===null?Error(a(467)):Error(a(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},_n===null?pe.memoizedState=_n=e:_n=_n.next=e}return _n}function Rc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function al(e){var i=il;return il+=1,Gr===null&&(Gr=[]),e=F0(Gr,e,i),i=pe,(_n===null?i.memoizedState:_n.next)===null&&(i=i.alternate,z.H=i===null||i.memoizedState===null?Cg:yh),e}function Cc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return al(e);if(e.$$typeof===C)return On(e)}throw Error(a(438,String(e)))}function ch(e){var i=null,s=pe.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=pe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Rc(),pe.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=rt;return i.index++,s}function Ca(e,i){return typeof i=="function"?i(e):i}function Dc(e){var i=fn();return uh(i,Xe,e)}function uh(e,i,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=e.baseQueue,d=l.pending;if(d!==null){if(f!==null){var S=f.next;f.next=d.next,d.next=S}i.baseQueue=f=d,l.pending=null}if(d=e.baseState,f===null)e.memoizedState=d;else{i=f.next;var R=S=null,k=null,st=i,gt=!1;do{var St=st.lane&-536870913;if(St!==st.lane?(we&St)===St:(Ra&St)===St){var lt=st.revertLane;if(lt===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null}),St===Pr&&(gt=!0);else if((Ra&lt)===lt){st=st.next,lt===Pr&&(gt=!0);continue}else St={lane:0,revertLane:st.revertLane,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},k===null?(R=k=St,S=d):k=k.next=St,pe.lanes|=lt,hs|=lt;St=st.action,Qs&&s(d,St),d=st.hasEagerState?st.eagerState:s(d,St)}else lt={lane:St,revertLane:st.revertLane,gesture:st.gesture,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},k===null?(R=k=lt,S=d):k=k.next=lt,pe.lanes|=St,hs|=St;st=st.next}while(st!==null&&st!==i);if(k===null?S=d:k.next=R,!mi(d,e.memoizedState)&&(vn=!0,gt&&(s=zr,s!==null)))throw s;e.memoizedState=d,e.baseState=S,e.baseQueue=k,l.lastRenderedState=d}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function fh(e){var i=fn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,f=s.pending,d=i.memoizedState;if(f!==null){s.pending=null;var S=f=f.next;do d=e(d,S.action),S=S.next;while(S!==f);mi(d,i.memoizedState)||(vn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,l]}function Z0(e,i,s){var l=pe,f=fn(),d=De;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=i();var S=!mi((Xe||f).memoizedState,s);if(S&&(f.memoizedState=s,vn=!0),f=f.queue,ph(J0.bind(null,l,f,e),[e]),f.getSnapshot!==i||S||_n!==null&&_n.memoizedState.tag&1){if(l.flags|=2048,Vr(9,{destroy:void 0},Q0.bind(null,l,f,s,i),null),Ze===null)throw Error(a(349));d||(Ra&127)!==0||K0(l,i,s)}return s}function K0(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=pe.updateQueue,i===null?(i=Rc(),pe.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function Q0(e,i,s,l){i.value=s,i.getSnapshot=l,$0(i)&&tg(e)}function J0(e,i,s){return s(function(){$0(i)&&tg(e)})}function $0(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!mi(e,s)}catch{return!0}}function tg(e){var i=Vs(e,2);i!==null&&ci(i,e,2)}function hh(e){var i=$n();if(typeof e=="function"){var s=e;if(e=s(),Qs){zt(!0);try{s()}finally{zt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:e},i}function eg(e,i,s,l){return e.baseState=s,uh(e,Xe,typeof l=="function"?l:Ca)}function JS(e,i,s,l,f){if(Nc(e))throw Error(a(485));if(e=i.action,e!==null){var d={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};z.T!==null?s(!0):d.isTransition=!1,l(d),s=i.pending,s===null?(d.next=i.pending=d,ng(i,d)):(d.next=s.next,i.pending=s.next=d)}}function ng(e,i){var s=i.action,l=i.payload,f=e.state;if(i.isTransition){var d=z.T,S={};z.T=S;try{var R=s(f,l),k=z.S;k!==null&&k(S,R),ig(e,i,R)}catch(st){dh(e,i,st)}finally{d!==null&&S.types!==null&&(d.types=S.types),z.T=d}}else try{d=s(f,l),ig(e,i,d)}catch(st){dh(e,i,st)}}function ig(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){ag(e,i,l)},function(l){return dh(e,i,l)}):ag(e,i,s)}function ag(e,i,s){i.status="fulfilled",i.value=s,sg(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,ng(e,s)))}function dh(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,sg(i),i=i.next;while(i!==l)}e.action=null}function sg(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function rg(e,i){return i}function og(e,i){if(De){var s=Ze.formState;if(s!==null){t:{var l=pe;if(De){if($e){e:{for(var f=$e,d=Di;f.nodeType!==8;){if(!d){f=null;break e}if(f=Ui(f.nextSibling),f===null){f=null;break e}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){$e=Ui(f.nextSibling),l=f.data==="F!";break t}}is(l)}l=!1}l&&(i=s[0])}}return s=$n(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rg,lastRenderedState:i},s.queue=l,s=Ag.bind(null,pe,l),l.dispatch=s,l=hh(!1),d=xh.bind(null,pe,!1,l.queue),l=$n(),f={state:i,dispatch:null,action:e,pending:null},l.queue=f,s=JS.bind(null,pe,f,d,s),f.dispatch=s,l.memoizedState=e,[i,s,!1]}function lg(e){var i=fn();return cg(i,Xe,e)}function cg(e,i,s){if(i=uh(e,i,rg)[0],e=Dc(Ca)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=al(i)}catch(S){throw S===Ir?yc:S}else l=i;i=fn();var f=i.queue,d=f.dispatch;return s!==i.memoizedState&&(pe.flags|=2048,Vr(9,{destroy:void 0},$S.bind(null,f,s),null)),[l,d,e]}function $S(e,i){e.action=i}function ug(e){var i=fn(),s=Xe;if(s!==null)return cg(i,s,e);fn(),i=i.memoizedState,s=fn();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function Vr(e,i,s,l){return e={tag:e,create:s,deps:l,inst:i,next:null},i=pe.updateQueue,i===null&&(i=Rc(),pe.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function fg(){return fn().memoizedState}function Lc(e,i,s,l){var f=$n();pe.flags|=e,f.memoizedState=Vr(1|i,{destroy:void 0},s,l===void 0?null:l)}function Uc(e,i,s,l){var f=fn();l=l===void 0?null:l;var d=f.memoizedState.inst;Xe!==null&&l!==null&&ah(l,Xe.memoizedState.deps)?f.memoizedState=Vr(i,d,s,l):(pe.flags|=e,f.memoizedState=Vr(1|i,d,s,l))}function hg(e,i){Lc(8390656,8,e,i)}function ph(e,i){Uc(2048,8,e,i)}function tb(e){pe.flags|=4;var i=pe.updateQueue;if(i===null)i=Rc(),pe.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function dg(e){var i=fn().memoizedState;return tb({ref:i,nextImpl:e}),function(){if((Fe&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function pg(e,i){return Uc(4,2,e,i)}function mg(e,i){return Uc(4,4,e,i)}function gg(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function _g(e,i,s){s=s!=null?s.concat([e]):null,Uc(4,4,gg.bind(null,i,e),s)}function mh(){}function vg(e,i){var s=fn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&ah(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function xg(e,i){var s=fn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&ah(i,l[1]))return l[0];if(l=e(),Qs){zt(!0);try{e()}finally{zt(!1)}}return s.memoizedState=[l,i],l}function gh(e,i,s){return s===void 0||(Ra&1073741824)!==0&&(we&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=y_(),pe.lanes|=e,hs|=e,s)}function yg(e,i,s,l){return mi(s,i)?s:Br.current!==null?(e=gh(e,s,l),mi(e,i)||(vn=!0),e):(Ra&42)===0||(Ra&1073741824)!==0&&(we&261930)===0?(vn=!0,e.memoizedState=s):(e=y_(),pe.lanes|=e,hs|=e,i)}function Sg(e,i,s,l,f){var d=G.p;G.p=d!==0&&8>d?d:8;var S=z.T,R={};z.T=R,xh(e,!1,i,s);try{var k=f(),st=z.S;if(st!==null&&st(R,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var gt=ZS(k,l);sl(e,i,gt,Si(e))}else sl(e,i,l,Si(e))}catch(St){sl(e,i,{then:function(){},status:"rejected",reason:St},Si())}finally{G.p=d,S!==null&&R.types!==null&&(S.types=R.types),z.T=S}}function eb(){}function _h(e,i,s,l){if(e.tag!==5)throw Error(a(476));var f=bg(e).queue;Sg(e,f,i,ut,s===null?eb:function(){return Mg(e),s(l)})}function bg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ut,baseState:ut,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:ut},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Mg(e){var i=bg(e);i.next===null&&(i=e.alternate.memoizedState),sl(e,i.next.queue,{},Si())}function vh(){return On(bl)}function Eg(){return fn().memoizedState}function Tg(){return fn().memoizedState}function nb(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=Si();e=rs(s);var l=os(i,e,s);l!==null&&(ci(l,i,s),tl(l,i,s)),i={cache:qf()},e.payload=i;return}i=i.return}}function ib(e,i,s){var l=Si();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Nc(e)?wg(i,s):(s=zf(e,i,s,l),s!==null&&(ci(s,e,l),Rg(s,i,l)))}function Ag(e,i,s){var l=Si();sl(e,i,s,l)}function sl(e,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Nc(e))wg(i,f);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var S=i.lastRenderedState,R=d(S,s);if(f.hasEagerState=!0,f.eagerState=R,mi(R,S))return dc(e,i,f,0),Ze===null&&hc(),!1}catch{}if(s=zf(e,i,f,l),s!==null)return ci(s,e,l),Rg(s,i,l),!0}return!1}function xh(e,i,s,l){if(l={lane:2,revertLane:Qh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Nc(e)){if(i)throw Error(a(479))}else i=zf(e,s,l,2),i!==null&&ci(i,e,2)}function Nc(e){var i=e.alternate;return e===pe||i!==null&&i===pe}function wg(e,i){Hr=Ac=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function Rg(e,i,s){if((s&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,xr(e,s)}}var rl={readContext:On,use:Cc,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};rl.useEffectEvent=on;var Cg={readContext:On,use:Cc,useCallback:function(e,i){return $n().memoizedState=[e,i===void 0?null:i],e},useContext:On,useEffect:hg,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,Lc(4194308,4,gg.bind(null,i,e),s)},useLayoutEffect:function(e,i){return Lc(4194308,4,e,i)},useInsertionEffect:function(e,i){Lc(4,2,e,i)},useMemo:function(e,i){var s=$n();i=i===void 0?null:i;var l=e();if(Qs){zt(!0);try{e()}finally{zt(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=$n();if(s!==void 0){var f=s(i);if(Qs){zt(!0);try{s(i)}finally{zt(!1)}}}else f=i;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=ib.bind(null,pe,e),[l.memoizedState,e]},useRef:function(e){var i=$n();return e={current:e},i.memoizedState=e},useState:function(e){e=hh(e);var i=e.queue,s=Ag.bind(null,pe,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:mh,useDeferredValue:function(e,i){var s=$n();return gh(s,e,i)},useTransition:function(){var e=hh(!1);return e=Sg.bind(null,pe,e.queue,!0,!1),$n().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=pe,f=$n();if(De){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Ze===null)throw Error(a(349));(we&127)!==0||K0(l,i,s)}f.memoizedState=s;var d={value:s,getSnapshot:i};return f.queue=d,hg(J0.bind(null,l,d,e),[e]),l.flags|=2048,Vr(9,{destroy:void 0},Q0.bind(null,l,d,s,i),null),s},useId:function(){var e=$n(),i=Ze.identifierPrefix;if(De){var s=ia,l=na;s=(l&~(1<<32-Pt(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=wc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=KS++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:vh,useFormState:og,useActionState:og,useOptimistic:function(e){var i=$n();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=xh.bind(null,pe,!0,s),s.dispatch=i,[e,i]},useMemoCache:ch,useCacheRefresh:function(){return $n().memoizedState=nb.bind(null,pe)},useEffectEvent:function(e){var i=$n(),s={impl:e};return i.memoizedState=s,function(){if((Fe&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},yh={readContext:On,use:Cc,useCallback:vg,useContext:On,useEffect:ph,useImperativeHandle:_g,useInsertionEffect:pg,useLayoutEffect:mg,useMemo:xg,useReducer:Dc,useRef:fg,useState:function(){return Dc(Ca)},useDebugValue:mh,useDeferredValue:function(e,i){var s=fn();return yg(s,Xe.memoizedState,e,i)},useTransition:function(){var e=Dc(Ca)[0],i=fn().memoizedState;return[typeof e=="boolean"?e:al(e),i]},useSyncExternalStore:Z0,useId:Eg,useHostTransitionStatus:vh,useFormState:lg,useActionState:lg,useOptimistic:function(e,i){var s=fn();return eg(s,Xe,e,i)},useMemoCache:ch,useCacheRefresh:Tg};yh.useEffectEvent=dg;var Dg={readContext:On,use:Cc,useCallback:vg,useContext:On,useEffect:ph,useImperativeHandle:_g,useInsertionEffect:pg,useLayoutEffect:mg,useMemo:xg,useReducer:fh,useRef:fg,useState:function(){return fh(Ca)},useDebugValue:mh,useDeferredValue:function(e,i){var s=fn();return Xe===null?gh(s,e,i):yg(s,Xe.memoizedState,e,i)},useTransition:function(){var e=fh(Ca)[0],i=fn().memoizedState;return[typeof e=="boolean"?e:al(e),i]},useSyncExternalStore:Z0,useId:Eg,useHostTransitionStatus:vh,useFormState:ug,useActionState:ug,useOptimistic:function(e,i){var s=fn();return Xe!==null?eg(s,Xe,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:ch,useCacheRefresh:Tg};Dg.useEffectEvent=dg;function Sh(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:_({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var bh={enqueueSetState:function(e,i,s){e=e._reactInternals;var l=Si(),f=rs(l);f.payload=i,s!=null&&(f.callback=s),i=os(e,f,l),i!==null&&(ci(i,e,l),tl(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=Si(),f=rs(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=os(e,f,l),i!==null&&(ci(i,e,l),tl(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=Si(),l=rs(s);l.tag=2,i!=null&&(l.callback=i),i=os(e,l,s),i!==null&&(ci(i,e,s),tl(i,e,s))}};function Lg(e,i,s,l,f,d,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,S):i.prototype&&i.prototype.isPureReactComponent?!Wo(s,l)||!Wo(f,d):!0}function Ug(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&bh.enqueueReplaceState(i,i.state,null)}function Js(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=_({},s));for(var f in e)s[f]===void 0&&(s[f]=e[f])}return s}function Ng(e){fc(e)}function Og(e){console.error(e)}function Pg(e){fc(e)}function Oc(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function zg(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Mh(e,i,s){return s=rs(s),s.tag=3,s.payload={element:null},s.callback=function(){Oc(e,i)},s}function Ig(e){return e=rs(e),e.tag=3,e}function Fg(e,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;e.payload=function(){return f(d)},e.callback=function(){zg(i,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){zg(i,s,l),typeof f!="function"&&(ds===null?ds=new Set([this]):ds.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function ab(e,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Or(i,s,f,!0),s=_i.current,s!==null){switch(s.tag){case 31:case 13:return Li===null?Wc():s.alternate===null&&ln===0&&(ln=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Sc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Yh(e,l,f)),!1;case 22:return s.flags|=65536,l===Sc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Yh(e,l,f)),!1}throw Error(a(435,s.tag))}return Yh(e,l,f),Wc(),!1}if(De)return i=_i.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Vf&&(e=Error(a(422),{cause:l}),Zo(wi(e,s)))):(l!==Vf&&(i=Error(a(423),{cause:l}),Zo(wi(i,s))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=wi(l,s),f=Mh(e.stateNode,l,f),$f(e,f),ln!==4&&(ln=2)),!1;var d=Error(a(520),{cause:l});if(d=wi(d,s),pl===null?pl=[d]:pl.push(d),ln!==4&&(ln=2),i===null)return!0;l=wi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=f&-f,s.lanes|=e,e=Mh(s.stateNode,l,e),$f(s,e),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ds===null||!ds.has(d))))return s.flags|=65536,f&=-f,s.lanes|=f,f=Ig(f),Fg(f,e,s,l),$f(s,f),!1}s=s.return}while(s!==null);return!1}var Eh=Error(a(461)),vn=!1;function Pn(e,i,s,l){i.child=e===null?V0(i,null,s,l):Ks(i,e.child,s,l)}function Bg(e,i,s,l,f){s=s.render;var d=i.ref;if("ref"in l){var S={};for(var R in l)R!=="ref"&&(S[R]=l[R])}else S=l;return Ws(i),l=sh(e,i,s,S,d,f),R=rh(),e!==null&&!vn?(oh(e,i,f),Da(e,i,f)):(De&&R&&Hf(i),i.flags|=1,Pn(e,i,l,f),i.child)}function Hg(e,i,s,l,f){if(e===null){var d=s.type;return typeof d=="function"&&!If(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,Gg(e,i,d,l,f)):(e=mc(s.type,null,l,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Uh(e,f)){var S=d.memoizedProps;if(s=s.compare,s=s!==null?s:Wo,s(S,l)&&e.ref===i.ref)return Da(e,i,f)}return i.flags|=1,e=Ea(d,l),e.ref=i.ref,e.return=i,i.child=e}function Gg(e,i,s,l,f){if(e!==null){var d=e.memoizedProps;if(Wo(d,l)&&e.ref===i.ref)if(vn=!1,i.pendingProps=l=d,Uh(e,f))(e.flags&131072)!==0&&(vn=!0);else return i.lanes=e.lanes,Da(e,i,f)}return Th(e,i,s,l,f)}function Vg(e,i,s,l){var f=l.children,d=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,e!==null){for(l=i.child=e.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~d}else l=0,i.child=null;return kg(e,i,d,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&xc(i,d!==null?d.cachePool:null),d!==null?X0(i,d):eh(),W0(i);else return l=i.lanes=536870912,kg(e,i,d!==null?d.baseLanes|s:s,s,l)}else d!==null?(xc(i,d.cachePool),X0(i,d),cs(),i.memoizedState=null):(e!==null&&xc(i,null),eh(),cs());return Pn(e,i,f,s),i.child}function ol(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function kg(e,i,s,l,f){var d=Zf();return d=d===null?null:{parent:gn._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},e!==null&&xc(i,null),eh(),W0(i),e!==null&&Or(e,i,l,!0),i.childLanes=f,null}function Pc(e,i){return i=Ic({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function jg(e,i,s){return Ks(i,e.child,null,s),e=Pc(i,i.pendingProps),e.flags|=2,vi(i),i.memoizedState=null,e}function sb(e,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(De){if(l.mode==="hidden")return e=Pc(i,l),i.lanes=536870912,ol(null,e);if(ih(i),(e=$e)?(e=nv(e,Di),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:es!==null?{id:na,overflow:ia}:null,retryLane:536870912,hydrationErrors:null},s=w0(e),s.return=i,i.child=s,Nn=i,$e=null)):e=null,e===null)throw is(i);return i.lanes=536870912,null}return Pc(i,l)}var d=e.memoizedState;if(d!==null){var S=d.dehydrated;if(ih(i),f)if(i.flags&256)i.flags&=-257,i=jg(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(vn||Or(e,i,s,!1),f=(s&e.childLanes)!==0,vn||f){if(l=Ze,l!==null&&(S=tc(l,s),S!==0&&S!==d.retryLane))throw d.retryLane=S,Vs(e,S),ci(l,e,S),Eh;Wc(),i=jg(e,i,s)}else e=d.treeContext,$e=Ui(S.nextSibling),Nn=i,De=!0,ns=null,Di=!1,e!==null&&D0(i,e),i=Pc(i,l),i.flags|=4096;return i}return e=Ea(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function zc(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function Th(e,i,s,l,f){return Ws(i),s=sh(e,i,s,l,void 0,f),l=rh(),e!==null&&!vn?(oh(e,i,f),Da(e,i,f)):(De&&l&&Hf(i),i.flags|=1,Pn(e,i,s,f),i.child)}function Xg(e,i,s,l,f,d){return Ws(i),i.updateQueue=null,s=Y0(i,l,s,f),q0(e),l=rh(),e!==null&&!vn?(oh(e,i,d),Da(e,i,d)):(De&&l&&Hf(i),i.flags|=1,Pn(e,i,s,d),i.child)}function Wg(e,i,s,l,f){if(Ws(i),i.stateNode===null){var d=Dr,S=s.contextType;typeof S=="object"&&S!==null&&(d=On(S)),d=new s(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=bh,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Qf(i),S=s.contextType,d.context=typeof S=="object"&&S!==null?On(S):Dr,d.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(Sh(i,s,S,l),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&bh.enqueueReplaceState(d,d.state,null),nl(i,l,d,f),el(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var R=i.memoizedProps,k=Js(s,R);d.props=k;var st=d.context,gt=s.contextType;S=Dr,typeof gt=="object"&&gt!==null&&(S=On(gt));var St=s.getDerivedStateFromProps;gt=typeof St=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,gt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||st!==S)&&Ug(i,d,l,S),ss=!1;var lt=i.memoizedState;d.state=lt,nl(i,l,d,f),el(),st=i.memoizedState,R||lt!==st||ss?(typeof St=="function"&&(Sh(i,s,St,l),st=i.memoizedState),(k=ss||Lg(i,s,k,l,lt,st,S))?(gt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=st),d.props=l,d.state=st,d.context=S,l=k):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Jf(e,i),S=i.memoizedProps,gt=Js(s,S),d.props=gt,St=i.pendingProps,lt=d.context,st=s.contextType,k=Dr,typeof st=="object"&&st!==null&&(k=On(st)),R=s.getDerivedStateFromProps,(st=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==St||lt!==k)&&Ug(i,d,l,k),ss=!1,lt=i.memoizedState,d.state=lt,nl(i,l,d,f),el();var ft=i.memoizedState;S!==St||lt!==ft||ss||e!==null&&e.dependencies!==null&&_c(e.dependencies)?(typeof R=="function"&&(Sh(i,s,R,l),ft=i.memoizedState),(gt=ss||Lg(i,s,gt,l,lt,ft,k)||e!==null&&e.dependencies!==null&&_c(e.dependencies))?(st||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,ft,k),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,ft,k)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&lt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&lt===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ft),d.props=l,d.state=ft,d.context=k,l=gt):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&lt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&lt===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,zc(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=Ks(i,e.child,null,f),i.child=Ks(i,null,s,f)):Pn(e,i,s,f),i.memoizedState=d.state,e=i.child):e=Da(e,i,f),e}function qg(e,i,s,l){return js(),i.flags|=256,Pn(e,i,s,l),i.child}var Ah={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wh(e){return{baseLanes:e,cachePool:z0()}}function Rh(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=yi),e}function Yg(e,i,s){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,S;if((S=d)||(S=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),S&&(f=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,e===null){if(De){if(f?ls(i):cs(),(e=$e)?(e=nv(e,Di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:es!==null?{id:na,overflow:ia}:null,retryLane:536870912,hydrationErrors:null},s=w0(e),s.return=i,i.child=s,Nn=i,$e=null)):e=null,e===null)throw is(i);return ud(e)?i.lanes=32:i.lanes=536870912,null}var R=l.children;return l=l.fallback,f?(cs(),f=i.mode,R=Ic({mode:"hidden",children:R},f),l=ks(l,f,s,null),R.return=i,l.return=i,R.sibling=l,i.child=R,l=i.child,l.memoizedState=wh(s),l.childLanes=Rh(e,S,s),i.memoizedState=Ah,ol(null,l)):(ls(i),Ch(i,R))}var k=e.memoizedState;if(k!==null&&(R=k.dehydrated,R!==null)){if(d)i.flags&256?(ls(i),i.flags&=-257,i=Dh(e,i,s)):i.memoizedState!==null?(cs(),i.child=e.child,i.flags|=128,i=null):(cs(),R=l.fallback,f=i.mode,l=Ic({mode:"visible",children:l.children},f),R=ks(R,f,s,null),R.flags|=2,l.return=i,R.return=i,l.sibling=R,i.child=l,Ks(i,e.child,null,s),l=i.child,l.memoizedState=wh(s),l.childLanes=Rh(e,S,s),i.memoizedState=Ah,i=ol(null,l));else if(ls(i),ud(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var st=S.dgst;S=st,l=Error(a(419)),l.stack="",l.digest=S,Zo({value:l,source:null,stack:null}),i=Dh(e,i,s)}else if(vn||Or(e,i,s,!1),S=(s&e.childLanes)!==0,vn||S){if(S=Ze,S!==null&&(l=tc(S,s),l!==0&&l!==k.retryLane))throw k.retryLane=l,Vs(e,l),ci(S,e,l),Eh;cd(R)||Wc(),i=Dh(e,i,s)}else cd(R)?(i.flags|=192,i.child=e.child,i=null):(e=k.treeContext,$e=Ui(R.nextSibling),Nn=i,De=!0,ns=null,Di=!1,e!==null&&D0(i,e),i=Ch(i,l.children),i.flags|=4096);return i}return f?(cs(),R=l.fallback,f=i.mode,k=e.child,st=k.sibling,l=Ea(k,{mode:"hidden",children:l.children}),l.subtreeFlags=k.subtreeFlags&65011712,st!==null?R=Ea(st,R):(R=ks(R,f,s,null),R.flags|=2),R.return=i,l.return=i,l.sibling=R,i.child=l,ol(null,l),l=i.child,R=e.child.memoizedState,R===null?R=wh(s):(f=R.cachePool,f!==null?(k=gn._currentValue,f=f.parent!==k?{parent:k,pool:k}:f):f=z0(),R={baseLanes:R.baseLanes|s,cachePool:f}),l.memoizedState=R,l.childLanes=Rh(e,S,s),i.memoizedState=Ah,ol(e.child,l)):(ls(i),s=e.child,e=s.sibling,s=Ea(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(S=i.deletions,S===null?(i.deletions=[e],i.flags|=16):S.push(e)),i.child=s,i.memoizedState=null,s)}function Ch(e,i){return i=Ic({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Ic(e,i){return e=gi(22,e,null,i),e.lanes=0,e}function Dh(e,i,s){return Ks(i,e.child,null,s),e=Ch(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Zg(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Xf(e.return,i,s)}function Lh(e,i,s,l,f,d){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:d}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=f,S.treeForkCount=d)}function Kg(e,i,s){var l=i.pendingProps,f=l.revealOrder,d=l.tail;l=l.children;var S=un.current,R=(S&2)!==0;if(R?(S=S&1|2,i.flags|=128):S&=1,V(un,S),Pn(e,i,l,s),l=De?Yo:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zg(e,s,i);else if(e.tag===19)Zg(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)e=s.alternate,e!==null&&Tc(e)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Lh(i,!1,f,s,d,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&Tc(e)===null){i.child=f;break}e=f.sibling,f.sibling=s,s=f,f=e}Lh(i,!0,s,null,d,l);break;case"together":Lh(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Da(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),hs|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(Or(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=Ea(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Ea(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function Uh(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&_c(e)))}function rb(e,i,s){switch(i.tag){case 3:bt(i,i.stateNode.containerInfo),as(i,gn,e.memoizedState.cache),js();break;case 27:case 5:Jt(i);break;case 4:bt(i,i.stateNode.containerInfo);break;case 10:as(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,ih(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ls(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Yg(e,i,s):(ls(i),e=Da(e,i,s),e!==null?e.sibling:null);ls(i);break;case 19:var f=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Or(e,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return Kg(e,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),V(un,un.current),l)break;return null;case 22:return i.lanes=0,Vg(e,i,s,i.pendingProps);case 24:as(i,gn,e.memoizedState.cache)}return Da(e,i,s)}function Qg(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)vn=!0;else{if(!Uh(e,s)&&(i.flags&128)===0)return vn=!1,rb(e,i,s);vn=(e.flags&131072)!==0}else vn=!1,De&&(i.flags&1048576)!==0&&C0(i,Yo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=Ys(i.elementType),i.type=e,typeof e=="function")If(e)?(l=Js(e,l),i.tag=1,i=Wg(null,i,e,l,s)):(i.tag=0,i=Th(null,i,e,l,s));else{if(e!=null){var f=e.$$typeof;if(f===L){i.tag=11,i=Bg(null,i,e,l,s);break t}else if(f===N){i.tag=14,i=Hg(null,i,e,l,s);break t}}throw i=tt(e)||e,Error(a(306,i,""))}}return i;case 0:return Th(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Js(l,i.pendingProps),Wg(e,i,l,f,s);case 3:t:{if(bt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,Jf(e,i),nl(i,l,null,s);var S=i.memoizedState;if(l=S.cache,as(i,gn,l),l!==d.cache&&Wf(i,[gn],s,!0),el(),l=S.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=qg(e,i,l,s);break t}else if(l!==f){f=wi(Error(a(424)),i),Zo(f),i=qg(e,i,l,s);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,$e=Ui(e.firstChild),Nn=i,De=!0,ns=null,Di=!0,s=V0(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(js(),l===f){i=Da(e,i,s);break t}Pn(e,i,l,s)}i=i.child}return i;case 26:return zc(e,i),e===null?(s=lv(i.type,null,i.pendingProps,null))?i.memoizedState=s:De||(s=i.type,e=i.pendingProps,l=$c(nt.current).createElement(s),l[dn]=i,l[Sn]=e,zn(l,s,e),Y(l),i.stateNode=l):i.memoizedState=lv(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Jt(i),e===null&&De&&(l=i.stateNode=sv(i.type,i.pendingProps,nt.current),Nn=i,Di=!0,f=$e,_s(i.type)?(fd=f,$e=Ui(l.firstChild)):$e=f),Pn(e,i,i.pendingProps.children,s),zc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&De&&((f=l=$e)&&(l=zb(l,i.type,i.pendingProps,Di),l!==null?(i.stateNode=l,Nn=i,$e=Ui(l.firstChild),Di=!1,f=!0):f=!1),f||is(i)),Jt(i),f=i.type,d=i.pendingProps,S=e!==null?e.memoizedProps:null,l=d.children,rd(f,d)?l=null:S!==null&&rd(f,S)&&(i.flags|=32),i.memoizedState!==null&&(f=sh(e,i,QS,null,null,s),bl._currentValue=f),zc(e,i),Pn(e,i,l,s),i.child;case 6:return e===null&&De&&((e=s=$e)&&(s=Ib(s,i.pendingProps,Di),s!==null?(i.stateNode=s,Nn=i,$e=null,e=!0):e=!1),e||is(i)),null;case 13:return Yg(e,i,s);case 4:return bt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Ks(i,null,l,s):Pn(e,i,l,s),i.child;case 11:return Bg(e,i,i.type,i.pendingProps,s);case 7:return Pn(e,i,i.pendingProps,s),i.child;case 8:return Pn(e,i,i.pendingProps.children,s),i.child;case 12:return Pn(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,as(i,i.type,l.value),Pn(e,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Ws(i),f=On(f),l=l(f),i.flags|=1,Pn(e,i,l,s),i.child;case 14:return Hg(e,i,i.type,i.pendingProps,s);case 15:return Gg(e,i,i.type,i.pendingProps,s);case 19:return Kg(e,i,s);case 31:return sb(e,i,s);case 22:return Vg(e,i,s,i.pendingProps);case 24:return Ws(i),l=On(gn),e===null?(f=Zf(),f===null&&(f=Ze,d=qf(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=s),f=d),i.memoizedState={parent:l,cache:f},Qf(i),as(i,gn,f)):((e.lanes&s)!==0&&(Jf(e,i),nl(i,null,null,s),el()),f=e.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),as(i,gn,l)):(l=d.cache,as(i,gn,l),l!==f.cache&&Wf(i,[gn],s,!0))),Pn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function La(e){e.flags|=4}function Nh(e,i,s,l,f){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(E_())e.flags|=8192;else throw Zs=Sc,Kf}else e.flags&=-16777217}function Jg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!dv(i))if(E_())e.flags|=8192;else throw Zs=Sc,Kf}function Fc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?He():536870912,e.lanes|=i,Wr|=i)}function ll(e,i){if(!De)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function tn(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function ob(e,i,s){var l=i.pendingProps;switch(Gf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(i),null;case 1:return tn(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),wa(gn),Ht(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Nr(i)?La(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,kf())),tn(i),null;case 26:var f=i.type,d=i.memoizedState;return e===null?(La(i),d!==null?(tn(i),Jg(i,d)):(tn(i),Nh(i,f,null,l,s))):d?d!==e.memoizedState?(La(i),tn(i),Jg(i,d)):(tn(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&La(i),tn(i),Nh(i,f,e,l,s)),null;case 27:if(ee(i),s=nt.current,f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&La(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return tn(i),null}e=ht.current,Nr(i)?L0(i):(e=sv(f,l,s),i.stateNode=e,La(i))}return tn(i),null;case 5:if(ee(i),f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&La(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return tn(i),null}if(d=ht.current,Nr(i))L0(i);else{var S=$c(nt.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}d[dn]=i,d[Sn]=l;t:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break t;for(;S.sibling===null;){if(S.return===null||S.return===i)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=d;t:switch(zn(d,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&La(i)}}return tn(i),Nh(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&La(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=nt.current,Nr(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,f=Nn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[dn]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Y_(e.nodeValue,s)),e||is(i,!0)}else e=$c(e).createTextNode(l),e[dn]=i,i.stateNode=e}return tn(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(l=Nr(i),s!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[dn]=i}else js(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;tn(i),e=!1}else s=kf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?(vi(i),i):(vi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return tn(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Nr(i),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[dn]=i}else js(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;tn(i),f=!1}else f=kf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(vi(i),i):(vi(i),null)}return vi(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,e=e!==null&&e.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),Fc(i,i.updateQueue),tn(i),null);case 4:return Ht(),e===null&&ed(i.stateNode.containerInfo),tn(i),null;case 10:return wa(i.type),tn(i),null;case 19:if(q(un),l=i.memoizedState,l===null)return tn(i),null;if(f=(i.flags&128)!==0,d=l.rendering,d===null)if(f)ll(l,!1);else{if(ln!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Tc(e),d!==null){for(i.flags|=128,ll(l,!1),e=d.updateQueue,i.updateQueue=e,Fc(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)A0(s,e),s=s.sibling;return V(un,un.current&1|2),De&&Ta(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&E()>kc&&(i.flags|=128,f=!0,ll(l,!1),i.lanes=4194304)}else{if(!f)if(e=Tc(d),e!==null){if(i.flags|=128,f=!0,e=e.updateQueue,i.updateQueue=e,Fc(i,e),ll(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!De)return tn(i),null}else 2*E()-l.renderingStartTime>kc&&s!==536870912&&(i.flags|=128,f=!0,ll(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(e=l.last,e!==null?e.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=E(),e.sibling=null,s=un.current,V(un,f?s&1|2:s&1),De&&Ta(i,l.treeForkCount),e):(tn(i),null);case 22:case 23:return vi(i),nh(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(tn(i),i.subtreeFlags&6&&(i.flags|=8192)):tn(i),s=i.updateQueue,s!==null&&Fc(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&q(qs),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),wa(gn),tn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function lb(e,i){switch(Gf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return wa(gn),Ht(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return ee(i),null;case 31:if(i.memoizedState!==null){if(vi(i),i.alternate===null)throw Error(a(340));js()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(vi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));js()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return q(un),null;case 4:return Ht(),null;case 10:return wa(i.type),null;case 22:case 23:return vi(i),nh(),e!==null&&q(qs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return wa(gn),null;case 25:return null;default:return null}}function $g(e,i){switch(Gf(i),i.tag){case 3:wa(gn),Ht();break;case 26:case 27:case 5:ee(i);break;case 4:Ht();break;case 31:i.memoizedState!==null&&vi(i);break;case 13:vi(i);break;case 19:q(un);break;case 10:wa(i.type);break;case 22:case 23:vi(i),nh(),e!==null&&q(qs);break;case 24:wa(gn)}}function cl(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&e)===e){l=void 0;var d=s.create,S=s.inst;l=d(),S.destroy=l}s=s.next}while(s!==f)}}catch(R){Ve(i,i.return,R)}}function us(e,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&e)===e){var S=l.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,f=i;var k=s,st=R;try{st()}catch(gt){Ve(f,k,gt)}}}l=l.next}while(l!==d)}}catch(gt){Ve(i,i.return,gt)}}function t_(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{j0(i,s)}catch(l){Ve(e,e.return,l)}}}function e_(e,i,s){s.props=Js(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){Ve(e,i,l)}}function ul(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(f){Ve(e,i,f)}}function aa(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Ve(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Ve(e,i,f)}else s.current=null}function n_(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Ve(e,e.return,f)}}function Oh(e,i,s){try{var l=e.stateNode;Db(l,e.type,s,i),l[Sn]=i}catch(f){Ve(e,e.return,f)}}function i_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&_s(e.type)||e.tag===4}function Ph(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||i_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&_s(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zh(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ba));else if(l!==4&&(l===27&&_s(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(zh(e,i,s),e=e.sibling;e!==null;)zh(e,i,s),e=e.sibling}function Bc(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&(l===27&&_s(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(Bc(e,i,s),e=e.sibling;e!==null;)Bc(e,i,s),e=e.sibling}function a_(e){var i=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);zn(i,l,s),i[dn]=e,i[Sn]=s}catch(d){Ve(e,e.return,d)}}var Ua=!1,xn=!1,Ih=!1,s_=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function cb(e,i){if(e=e.containerInfo,ad=ru,e=_0(e),Df(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break t}var S=0,R=-1,k=-1,st=0,gt=0,St=e,lt=null;e:for(;;){for(var ft;St!==s||f!==0&&St.nodeType!==3||(R=S+f),St!==d||l!==0&&St.nodeType!==3||(k=S+l),St.nodeType===3&&(S+=St.nodeValue.length),(ft=St.firstChild)!==null;)lt=St,St=ft;for(;;){if(St===e)break e;if(lt===s&&++st===f&&(R=S),lt===d&&++gt===l&&(k=S),(ft=St.nextSibling)!==null)break;St=lt,lt=St.parentNode}St=ft}s=R===-1||k===-1?null:{start:R,end:k}}else s=null}s=s||{start:0,end:0}}else s=null;for(sd={focusedElem:e,selectionRange:s},ru=!1,Rn=i;Rn!==null;)if(i=Rn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Rn=e;else for(;Rn!==null;){switch(i=Rn,d=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)f=e[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,s=i,f=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var jt=Js(s.type,f);e=l.getSnapshotBeforeUpdate(jt,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Ve(s,s.return,ie)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)ld(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ld(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,Rn=e;break}Rn=i.return}}function r_(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Oa(e,s),l&4&&cl(5,s);break;case 1:if(Oa(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(S){Ve(s,s.return,S)}else{var f=Js(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ve(s,s.return,S)}}l&64&&t_(s),l&512&&ul(s,s.return);break;case 3:if(Oa(e,s),l&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{j0(e,i)}catch(S){Ve(s,s.return,S)}}break;case 27:i===null&&l&4&&a_(s);case 26:case 5:Oa(e,s),i===null&&l&4&&n_(s),l&512&&ul(s,s.return);break;case 12:Oa(e,s);break;case 31:Oa(e,s),l&4&&c_(e,s);break;case 13:Oa(e,s),l&4&&u_(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=vb.bind(null,s),Fb(e,s))));break;case 22:if(l=s.memoizedState!==null||Ua,!l){i=i!==null&&i.memoizedState!==null||xn,f=Ua;var d=xn;Ua=l,(xn=i)&&!d?Pa(e,s,(s.subtreeFlags&8772)!==0):Oa(e,s),Ua=f,xn=d}break;case 30:break;default:Oa(e,s)}}function o_(e){var i=e.alternate;i!==null&&(e.alternate=null,o_(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Fo(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var rn=null,si=!1;function Na(e,i,s){for(s=s.child;s!==null;)l_(e,i,s),s=s.sibling}function l_(e,i,s){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(wt,s)}catch{}switch(s.tag){case 26:xn||aa(s,i),Na(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:xn||aa(s,i);var l=rn,f=si;_s(s.type)&&(rn=s.stateNode,si=!1),Na(e,i,s),xl(s.stateNode),rn=l,si=f;break;case 5:xn||aa(s,i);case 6:if(l=rn,f=si,rn=null,Na(e,i,s),rn=l,si=f,rn!==null)if(si)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(s.stateNode)}catch(d){Ve(s,i,d)}else try{rn.removeChild(s.stateNode)}catch(d){Ve(s,i,d)}break;case 18:rn!==null&&(si?(e=rn,tv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),to(e)):tv(rn,s.stateNode));break;case 4:l=rn,f=si,rn=s.stateNode.containerInfo,si=!0,Na(e,i,s),rn=l,si=f;break;case 0:case 11:case 14:case 15:us(2,s,i),xn||us(4,s,i),Na(e,i,s);break;case 1:xn||(aa(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&e_(s,i,l)),Na(e,i,s);break;case 21:Na(e,i,s);break;case 22:xn=(l=xn)||s.memoizedState!==null,Na(e,i,s),xn=l;break;default:Na(e,i,s)}}function c_(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{to(e)}catch(s){Ve(i,i.return,s)}}}function u_(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{to(e)}catch(s){Ve(i,i.return,s)}}function ub(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new s_),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new s_),i;default:throw Error(a(435,e.tag))}}function Hc(e,i){var s=ub(e);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=xb.bind(null,e,l);l.then(f,f)}})}function ri(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],d=e,S=i,R=S;t:for(;R!==null;){switch(R.tag){case 27:if(_s(R.type)){rn=R.stateNode,si=!1;break t}break;case 5:rn=R.stateNode,si=!1;break t;case 3:case 4:rn=R.stateNode.containerInfo,si=!0;break t}R=R.return}if(rn===null)throw Error(a(160));l_(d,S,f),rn=null,si=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)f_(i,e),i=i.sibling}var Wi=null;function f_(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ri(i,e),oi(e),l&4&&(us(3,e,e.return),cl(3,e),us(5,e,e.return));break;case 1:ri(i,e),oi(e),l&512&&(xn||s===null||aa(s,s.return)),l&64&&Ua&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Wi;if(ri(i,e),oi(e),l&512&&(xn||s===null||aa(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[Is]||d[dn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),zn(d,l,s),d[dn]=e,Y(d),l=d;break t;case"link":var S=fv("link","href",f).get(l+(s.href||""));if(S){for(var R=0;R<S.length;R++)if(d=S[R],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(R,1);break e}}d=f.createElement(l),zn(d,l,s),f.head.appendChild(d);break;case"meta":if(S=fv("meta","content",f).get(l+(s.content||""))){for(R=0;R<S.length;R++)if(d=S[R],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(R,1);break e}}d=f.createElement(l),zn(d,l,s),f.head.appendChild(d);break;default:throw Error(a(468,l))}d[dn]=e,Y(d),l=d}e.stateNode=l}else hv(f,e.type,e.stateNode);else e.stateNode=uv(f,l,e.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?hv(f,e.type,e.stateNode):uv(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Oh(e,e.memoizedProps,s.memoizedProps)}break;case 27:ri(i,e),oi(e),l&512&&(xn||s===null||aa(s,s.return)),s!==null&&l&4&&Oh(e,e.memoizedProps,s.memoizedProps);break;case 5:if(ri(i,e),oi(e),l&512&&(xn||s===null||aa(s,s.return)),e.flags&32){f=e.stateNode;try{Jn(f,"")}catch(jt){Ve(e,e.return,jt)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,Oh(e,f,s!==null?s.memoizedProps:f)),l&1024&&(Ih=!0);break;case 6:if(ri(i,e),oi(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(jt){Ve(e,e.return,jt)}}break;case 3:if(nu=null,f=Wi,Wi=tu(i.containerInfo),ri(i,e),Wi=f,oi(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{to(i.containerInfo)}catch(jt){Ve(e,e.return,jt)}Ih&&(Ih=!1,h_(e));break;case 4:l=Wi,Wi=tu(e.stateNode.containerInfo),ri(i,e),oi(e),Wi=l;break;case 12:ri(i,e),oi(e);break;case 31:ri(i,e),oi(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hc(e,l)));break;case 13:ri(i,e),oi(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Vc=E()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hc(e,l)));break;case 22:f=e.memoizedState!==null;var k=s!==null&&s.memoizedState!==null,st=Ua,gt=xn;if(Ua=st||f,xn=gt||k,ri(i,e),xn=gt,Ua=st,oi(e),l&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||k||Ua||xn||$s(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){k=s=i;try{if(d=k.stateNode,f)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=k.stateNode;var St=k.memoizedProps.style,lt=St!=null&&St.hasOwnProperty("display")?St.display:null;R.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(jt){Ve(k,k.return,jt)}}}else if(i.tag===6){if(s===null){k=i;try{k.stateNode.nodeValue=f?"":k.memoizedProps}catch(jt){Ve(k,k.return,jt)}}}else if(i.tag===18){if(s===null){k=i;try{var ft=k.stateNode;f?ev(ft,!0):ev(k.stateNode,!1)}catch(jt){Ve(k,k.return,jt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Hc(e,s))));break;case 19:ri(i,e),oi(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hc(e,l)));break;case 30:break;case 21:break;default:ri(i,e),oi(e)}}function oi(e){var i=e.flags;if(i&2){try{for(var s,l=e.return;l!==null;){if(i_(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,d=Ph(e);Bc(e,d,f);break;case 5:var S=s.stateNode;s.flags&32&&(Jn(S,""),s.flags&=-33);var R=Ph(e);Bc(e,R,S);break;case 3:case 4:var k=s.stateNode.containerInfo,st=Ph(e);zh(e,st,k);break;default:throw Error(a(161))}}catch(gt){Ve(e,e.return,gt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function h_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;h_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Oa(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)r_(e,i.alternate,i),i=i.sibling}function $s(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:us(4,i,i.return),$s(i);break;case 1:aa(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&e_(i,i.return,s),$s(i);break;case 27:xl(i.stateNode);case 26:case 5:aa(i,i.return),$s(i);break;case 22:i.memoizedState===null&&$s(i);break;case 30:$s(i);break;default:$s(i)}e=e.sibling}}function Pa(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=e,d=i,S=d.flags;switch(d.tag){case 0:case 11:case 15:Pa(f,d,s),cl(4,d);break;case 1:if(Pa(f,d,s),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(st){Ve(l,l.return,st)}if(l=d,f=l.updateQueue,f!==null){var R=l.stateNode;try{var k=f.shared.hiddenCallbacks;if(k!==null)for(f.shared.hiddenCallbacks=null,f=0;f<k.length;f++)k0(k[f],R)}catch(st){Ve(l,l.return,st)}}s&&S&64&&t_(d),ul(d,d.return);break;case 27:a_(d);case 26:case 5:Pa(f,d,s),s&&l===null&&S&4&&n_(d),ul(d,d.return);break;case 12:Pa(f,d,s);break;case 31:Pa(f,d,s),s&&S&4&&c_(f,d);break;case 13:Pa(f,d,s),s&&S&4&&u_(f,d);break;case 22:d.memoizedState===null&&Pa(f,d,s),ul(d,d.return);break;case 30:break;default:Pa(f,d,s)}i=i.sibling}}function Fh(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Ko(s))}function Bh(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Ko(e))}function qi(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)d_(e,i,s,l),i=i.sibling}function d_(e,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:qi(e,i,s,l),f&2048&&cl(9,i);break;case 1:qi(e,i,s,l);break;case 3:qi(e,i,s,l),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Ko(e)));break;case 12:if(f&2048){qi(e,i,s,l),e=i.stateNode;try{var d=i.memoizedProps,S=d.id,R=d.onPostCommit;typeof R=="function"&&R(S,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){Ve(i,i.return,k)}}else qi(e,i,s,l);break;case 31:qi(e,i,s,l);break;case 13:qi(e,i,s,l);break;case 23:break;case 22:d=i.stateNode,S=i.alternate,i.memoizedState!==null?d._visibility&2?qi(e,i,s,l):fl(e,i):d._visibility&2?qi(e,i,s,l):(d._visibility|=2,kr(e,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&Fh(S,i);break;case 24:qi(e,i,s,l),f&2048&&Bh(i.alternate,i);break;default:qi(e,i,s,l)}}function kr(e,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=e,S=i,R=s,k=l,st=S.flags;switch(S.tag){case 0:case 11:case 15:kr(d,S,R,k,f),cl(8,S);break;case 23:break;case 22:var gt=S.stateNode;S.memoizedState!==null?gt._visibility&2?kr(d,S,R,k,f):fl(d,S):(gt._visibility|=2,kr(d,S,R,k,f)),f&&st&2048&&Fh(S.alternate,S);break;case 24:kr(d,S,R,k,f),f&&st&2048&&Bh(S.alternate,S);break;default:kr(d,S,R,k,f)}i=i.sibling}}function fl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,f=l.flags;switch(l.tag){case 22:fl(s,l),f&2048&&Fh(l.alternate,l);break;case 24:fl(s,l),f&2048&&Bh(l.alternate,l);break;default:fl(s,l)}i=i.sibling}}var hl=8192;function jr(e,i,s){if(e.subtreeFlags&hl)for(e=e.child;e!==null;)p_(e,i,s),e=e.sibling}function p_(e,i,s){switch(e.tag){case 26:jr(e,i,s),e.flags&hl&&e.memoizedState!==null&&Kb(s,Wi,e.memoizedState,e.memoizedProps);break;case 5:jr(e,i,s);break;case 3:case 4:var l=Wi;Wi=tu(e.stateNode.containerInfo),jr(e,i,s),Wi=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=hl,hl=16777216,jr(e,i,s),hl=l):jr(e,i,s));break;default:jr(e,i,s)}}function m_(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function dl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Rn=l,__(l,e)}m_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)g_(e),e=e.sibling}function g_(e){switch(e.tag){case 0:case 11:case 15:dl(e),e.flags&2048&&us(9,e,e.return);break;case 3:dl(e);break;case 12:dl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Gc(e)):dl(e);break;default:dl(e)}}function Gc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Rn=l,__(l,e)}m_(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:us(8,i,i.return),Gc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Gc(i));break;default:Gc(i)}e=e.sibling}}function __(e,i){for(;Rn!==null;){var s=Rn;switch(s.tag){case 0:case 11:case 15:us(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ko(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Rn=l;else t:for(s=e;Rn!==null;){l=Rn;var f=l.sibling,d=l.return;if(o_(l),l===s){Rn=null;break t}if(f!==null){f.return=d,Rn=f;break t}Rn=d}}}var fb={getCacheForType:function(e){var i=On(gn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return On(gn).controller.signal}},hb=typeof WeakMap=="function"?WeakMap:Map,Fe=0,Ze=null,Ee=null,we=0,Ge=0,xi=null,fs=!1,Xr=!1,Hh=!1,za=0,ln=0,hs=0,tr=0,Gh=0,yi=0,Wr=0,pl=null,li=null,Vh=!1,Vc=0,v_=0,kc=1/0,jc=null,ds=null,Mn=0,ps=null,qr=null,Ia=0,kh=0,jh=null,x_=null,ml=0,Xh=null;function Si(){return(Fe&2)!==0&&we!==0?we&-we:z.T!==null?Qh():ea()}function y_(){if(yi===0)if((we&536870912)===0||De){var e=Ct;Ct<<=1,(Ct&3932160)===0&&(Ct=262144),yi=e}else yi=536870912;return e=_i.current,e!==null&&(e.flags|=32),yi}function ci(e,i,s){(e===Ze&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)&&(Yr(e,0),ms(e,we,yi,!1)),Zn(e,s),((Fe&2)===0||e!==Ze)&&(e===Ze&&((Fe&2)===0&&(tr|=s),ln===4&&ms(e,we,yi,!1)),sa(e))}function S_(e,i,s){if((Fe&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&e.expiredLanes)===0||Gt(e,i),f=l?mb(e,i):qh(e,i,!0),d=l;do{if(f===0){Xr&&!l&&ms(e,i,0,!1);break}else{if(s=e.current.alternate,d&&!db(s)){f=qh(e,i,!1),d=!1;continue}if(f===2){if(d=i,e.errorRecoveryDisabledLanes&d)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;t:{var R=e;f=pl;var k=R.current.memoizedState.isDehydrated;if(k&&(Yr(R,S).flags|=256),S=qh(R,S,!1),S!==2){if(Hh&&!k){R.errorRecoveryDisabledLanes|=d,tr|=d,f=4;break t}d=li,li=f,d!==null&&(li===null?li=d:li.push.apply(li,d))}f=S}if(d=!1,f!==2)continue}}if(f===1){Yr(e,0),ms(e,i,0,!0);break}t:{switch(l=e,d=f,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:ms(l,i,yi,!fs);break t;case 2:li=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Vc+300-E(),10<f)){if(ms(l,i,yi,!fs),dt(l,0,!0)!==0)break t;Ia=i,l.timeoutHandle=J_(b_.bind(null,l,s,li,jc,Vh,i,yi,tr,Wr,fs,d,"Throttled",-0,0),f);break t}b_(l,s,li,jc,Vh,i,yi,tr,Wr,fs,d,null,-0,0)}}break}while(!0);sa(e)}function b_(e,i,s,l,f,d,S,R,k,st,gt,St,lt,ft){if(e.timeoutHandle=-1,St=i.subtreeFlags,St&8192||(St&16785408)===16785408){St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ba},p_(i,d,St);var jt=(d&62914560)===d?Vc-E():(d&4194048)===d?v_-E():0;if(jt=Qb(St,jt),jt!==null){Ia=d,e.cancelPendingCommit=jt(D_.bind(null,e,i,d,s,l,f,S,R,k,gt,St,null,lt,ft)),ms(e,d,S,!st);return}}D_(e,i,d,s,l,f,S,R,k)}function db(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],d=f.getSnapshot;f=f.value;try{if(!mi(d(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ms(e,i,s,l){i&=~Gh,i&=~tr,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var f=i;0<f;){var d=31-Pt(f),S=1<<d;l[d]=-1,f&=~S}s!==0&&Io(e,s,i)}function Xc(){return(Fe&6)===0?(gl(0),!1):!0}function Wh(){if(Ee!==null){if(Ge===0)var e=Ee.return;else e=Ee,Aa=Xs=null,lh(e),Fr=null,Jo=0,e=Ee;for(;e!==null;)$g(e.alternate,e),e=e.return;Ee=null}}function Yr(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,Nb(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Ia=0,Wh(),Ze=e,Ee=s=Ea(e.current,null),we=i,Ge=0,xi=null,fs=!1,Xr=Gt(e,i),Hh=!1,Wr=yi=Gh=tr=hs=ln=0,li=pl=null,Vh=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var f=31-Pt(l),d=1<<f;i|=e[f],l&=~d}return za=i,hc(),s}function M_(e,i){pe=null,z.H=rl,i===Ir||i===yc?(i=B0(),Ge=3):i===Kf?(i=B0(),Ge=4):Ge=i===Eh?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,xi=i,Ee===null&&(ln=1,Oc(e,wi(i,e.current)))}function E_(){var e=_i.current;return e===null?!0:(we&4194048)===we?Li===null:(we&62914560)===we||(we&536870912)!==0?e===Li:!1}function T_(){var e=z.H;return z.H=rl,e===null?rl:e}function A_(){var e=z.A;return z.A=fb,e}function Wc(){ln=4,fs||(we&4194048)!==we&&_i.current!==null||(Xr=!0),(hs&134217727)===0&&(tr&134217727)===0||Ze===null||ms(Ze,we,yi,!1)}function qh(e,i,s){var l=Fe;Fe|=2;var f=T_(),d=A_();(Ze!==e||we!==i)&&(jc=null,Yr(e,i)),i=!1;var S=ln;t:do try{if(Ge!==0&&Ee!==null){var R=Ee,k=xi;switch(Ge){case 8:Wh(),S=6;break t;case 3:case 2:case 9:case 6:_i.current===null&&(i=!0);var st=Ge;if(Ge=0,xi=null,Zr(e,R,k,st),s&&Xr){S=0;break t}break;default:st=Ge,Ge=0,xi=null,Zr(e,R,k,st)}}pb(),S=ln;break}catch(gt){M_(e,gt)}while(!0);return i&&e.shellSuspendCounter++,Aa=Xs=null,Fe=l,z.H=f,z.A=d,Ee===null&&(Ze=null,we=0,hc()),S}function pb(){for(;Ee!==null;)w_(Ee)}function mb(e,i){var s=Fe;Fe|=2;var l=T_(),f=A_();Ze!==e||we!==i?(jc=null,kc=E()+500,Yr(e,i)):Xr=Gt(e,i);t:do try{if(Ge!==0&&Ee!==null){i=Ee;var d=xi;e:switch(Ge){case 1:Ge=0,xi=null,Zr(e,i,d,1);break;case 2:case 9:if(I0(d)){Ge=0,xi=null,R_(i);break}i=function(){Ge!==2&&Ge!==9||Ze!==e||(Ge=7),sa(e)},d.then(i,i);break t;case 3:Ge=7;break t;case 4:Ge=5;break t;case 7:I0(d)?(Ge=0,xi=null,R_(i)):(Ge=0,xi=null,Zr(e,i,d,7));break;case 5:var S=null;switch(Ee.tag){case 26:S=Ee.memoizedState;case 5:case 27:var R=Ee;if(S?dv(S):R.stateNode.complete){Ge=0,xi=null;var k=R.sibling;if(k!==null)Ee=k;else{var st=R.return;st!==null?(Ee=st,qc(st)):Ee=null}break e}}Ge=0,xi=null,Zr(e,i,d,5);break;case 6:Ge=0,xi=null,Zr(e,i,d,6);break;case 8:Wh(),ln=6;break t;default:throw Error(a(462))}}gb();break}catch(gt){M_(e,gt)}while(!0);return Aa=Xs=null,z.H=l,z.A=f,Fe=s,Ee!==null?0:(Ze=null,we=0,hc(),ln)}function gb(){for(;Ee!==null&&!kt();)w_(Ee)}function w_(e){var i=Qg(e.alternate,e,za);e.memoizedProps=e.pendingProps,i===null?qc(e):Ee=i}function R_(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=Xg(s,i,i.pendingProps,i.type,void 0,we);break;case 11:i=Xg(s,i,i.pendingProps,i.type.render,i.ref,we);break;case 5:lh(i);default:$g(s,i),i=Ee=A0(i,za),i=Qg(s,i,za)}e.memoizedProps=e.pendingProps,i===null?qc(e):Ee=i}function Zr(e,i,s,l){Aa=Xs=null,lh(i),Fr=null,Jo=0;var f=i.return;try{if(ab(e,f,i,s,we)){ln=1,Oc(e,wi(s,e.current)),Ee=null;return}}catch(d){if(f!==null)throw Ee=f,d;ln=1,Oc(e,wi(s,e.current)),Ee=null;return}i.flags&32768?(De||l===1?e=!0:Xr||(we&536870912)!==0?e=!1:(fs=e=!0,(l===2||l===9||l===3||l===6)&&(l=_i.current,l!==null&&l.tag===13&&(l.flags|=16384))),C_(i,e)):qc(i)}function qc(e){var i=e;do{if((i.flags&32768)!==0){C_(i,fs);return}e=i.return;var s=ob(i.alternate,i,za);if(s!==null){Ee=s;return}if(i=i.sibling,i!==null){Ee=i;return}Ee=i=e}while(i!==null);ln===0&&(ln=5)}function C_(e,i){do{var s=lb(e.alternate,e);if(s!==null){s.flags&=32767,Ee=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){Ee=e;return}Ee=e=s}while(e!==null);ln=6,Ee=null}function D_(e,i,s,l,f,d,S,R,k){e.cancelPendingCommit=null;do Yc();while(Mn!==0);if((Fe&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=Pf,Gi(e,s,d,S,R,k),e===Ze&&(Ee=Ze=null,we=0),qr=i,ps=e,Ia=s,kh=d,jh=f,x_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yb(pt,function(){return P_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,f=G.p,G.p=2,S=Fe,Fe|=4;try{cb(e,i,s)}finally{Fe=S,G.p=f,z.T=l}}Mn=1,L_(),U_(),N_()}}function L_(){if(Mn===1){Mn=0;var e=ps,i=qr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=z.T,z.T=null;var l=G.p;G.p=2;var f=Fe;Fe|=4;try{f_(i,e);var d=sd,S=_0(e.containerInfo),R=d.focusedElem,k=d.selectionRange;if(S!==R&&R&&R.ownerDocument&&g0(R.ownerDocument.documentElement,R)){if(k!==null&&Df(R)){var st=k.start,gt=k.end;if(gt===void 0&&(gt=st),"selectionStart"in R)R.selectionStart=st,R.selectionEnd=Math.min(gt,R.value.length);else{var St=R.ownerDocument||document,lt=St&&St.defaultView||window;if(lt.getSelection){var ft=lt.getSelection(),jt=R.textContent.length,ie=Math.min(k.start,jt),qe=k.end===void 0?ie:Math.min(k.end,jt);!ft.extend&&ie>qe&&(S=qe,qe=ie,ie=S);var $=m0(R,ie),W=m0(R,qe);if($&&W&&(ft.rangeCount!==1||ft.anchorNode!==$.node||ft.anchorOffset!==$.offset||ft.focusNode!==W.node||ft.focusOffset!==W.offset)){var at=St.createRange();at.setStart($.node,$.offset),ft.removeAllRanges(),ie>qe?(ft.addRange(at),ft.extend(W.node,W.offset)):(at.setEnd(W.node,W.offset),ft.addRange(at))}}}}for(St=[],ft=R;ft=ft.parentNode;)ft.nodeType===1&&St.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<St.length;R++){var yt=St[R];yt.element.scrollLeft=yt.left,yt.element.scrollTop=yt.top}}ru=!!ad,sd=ad=null}finally{Fe=f,G.p=l,z.T=s}}e.current=i,Mn=2}}function U_(){if(Mn===2){Mn=0;var e=ps,i=qr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=z.T,z.T=null;var l=G.p;G.p=2;var f=Fe;Fe|=4;try{r_(e,i.alternate,i)}finally{Fe=f,G.p=l,z.T=s}}Mn=3}}function N_(){if(Mn===4||Mn===3){Mn=0,O();var e=ps,i=qr,s=Ia,l=x_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Mn=5:(Mn=0,qr=ps=null,O_(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(ds=null),Sr(s),i=i.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(wt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=z.T,f=G.p,G.p=2,z.T=null;try{for(var d=e.onRecoverableError,S=0;S<l.length;S++){var R=l[S];d(R.value,{componentStack:R.stack})}}finally{z.T=i,G.p=f}}(Ia&3)!==0&&Yc(),sa(e),f=e.pendingLanes,(s&261930)!==0&&(f&42)!==0?e===Xh?ml++:(ml=0,Xh=e):ml=0,gl(0)}}function O_(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Ko(i)))}function Yc(){return L_(),U_(),N_(),P_()}function P_(){if(Mn!==5)return!1;var e=ps,i=kh;kh=0;var s=Sr(Ia),l=z.T,f=G.p;try{G.p=32>s?32:s,z.T=null,s=jh,jh=null;var d=ps,S=Ia;if(Mn=0,qr=ps=null,Ia=0,(Fe&6)!==0)throw Error(a(331));var R=Fe;if(Fe|=4,g_(d.current),d_(d,d.current,S,s),Fe=R,gl(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(wt,d)}catch{}return!0}finally{G.p=f,z.T=l,O_(e,i)}}function z_(e,i,s){i=wi(s,i),i=Mh(e.stateNode,i,2),e=os(e,i,2),e!==null&&(Zn(e,2),sa(e))}function Ve(e,i,s){if(e.tag===3)z_(e,e,s);else for(;i!==null;){if(i.tag===3){z_(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ds===null||!ds.has(l))){e=wi(s,e),s=Ig(2),l=os(i,s,2),l!==null&&(Fg(s,l,i,e),Zn(l,2),sa(l));break}}i=i.return}}function Yh(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new hb;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(Hh=!0,f.add(s),e=_b.bind(null,e,i,s),i.then(e,e))}function _b(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Ze===e&&(we&s)===s&&(ln===4||ln===3&&(we&62914560)===we&&300>E()-Vc?(Fe&2)===0&&Yr(e,0):Gh|=s,Wr===we&&(Wr=0)),sa(e)}function I_(e,i){i===0&&(i=He()),e=Vs(e,i),e!==null&&(Zn(e,i),sa(e))}function vb(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),I_(e,s)}function xb(e,i){var s=0;switch(e.tag){case 31:case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),I_(e,s)}function yb(e,i){return he(e,i)}var Zc=null,Kr=null,Zh=!1,Kc=!1,Kh=!1,gs=0;function sa(e){e!==Kr&&e.next===null&&(Kr===null?Zc=Kr=e:Kr=Kr.next=e),Kc=!0,Zh||(Zh=!0,bb())}function gl(e,i){if(!Kh&&Kc){Kh=!0;do for(var s=!1,l=Zc;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var S=l.suspendedLanes,R=l.pingedLanes;d=(1<<31-Pt(42|e)+1)-1,d&=f&~(S&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,G_(l,d))}else d=we,d=dt(l,l===Ze?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Gt(l,d)||(s=!0,G_(l,d));l=l.next}while(s);Kh=!1}}function Sb(){F_()}function F_(){Kc=Zh=!1;var e=0;gs!==0&&Ub()&&(e=gs);for(var i=E(),s=null,l=Zc;l!==null;){var f=l.next,d=B_(l,i);d===0?(l.next=null,s===null?Zc=f:s.next=f,f===null&&(Kr=s)):(s=l,(e!==0||(d&3)!==0)&&(Kc=!0)),l=f}Mn!==0&&Mn!==5||gl(e),gs!==0&&(gs=0)}function B_(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var S=31-Pt(d),R=1<<S,k=f[S];k===-1?((R&s)===0||(R&l)!==0)&&(f[S]=re(R,i)):k<=i&&(e.expiredLanes|=R),d&=~R}if(i=Ze,s=we,s=dt(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===i&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&de(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Gt(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&de(l),Sr(s)){case 2:case 8:s=Mt;break;case 32:s=pt;break;case 268435456:s=Lt;break;default:s=pt}return l=H_.bind(null,e),s=he(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&de(l),e.callbackPriority=2,e.callbackNode=null,2}function H_(e,i){if(Mn!==0&&Mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Yc()&&e.callbackNode!==s)return null;var l=we;return l=dt(e,e===Ze?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(S_(e,l,i),B_(e,E()),e.callbackNode!=null&&e.callbackNode===s?H_.bind(null,e):null)}function G_(e,i){if(Yc())return null;S_(e,i,!0)}function bb(){Ob(function(){(Fe&6)!==0?he(vt,Sb):F_()})}function Qh(){if(gs===0){var e=Pr;e===0&&(e=Dt,Dt<<=1,(Dt&261888)===0&&(Dt=256)),gs=e}return gs}function V_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ac(""+e)}function k_(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function Mb(e,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var d=V_((f[Sn]||null).action),S=l.submitter;S&&(i=(i=S[Sn]||null)?V_(i.formAction):S.getAttribute("formAction"),i!==null&&(d=i,S=null));var R=new lc("action","action",null,l,f);e.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(gs!==0){var k=S?k_(f,S):new FormData(f);_h(s,{pending:!0,data:k,method:f.method,action:d},null,k)}}else typeof d=="function"&&(R.preventDefault(),k=S?k_(f,S):new FormData(f),_h(s,{pending:!0,data:k,method:f.method,action:d},d,k))},currentTarget:f}]})}}for(var Jh=0;Jh<Of.length;Jh++){var $h=Of[Jh],Eb=$h.toLowerCase(),Tb=$h[0].toUpperCase()+$h.slice(1);Xi(Eb,"on"+Tb)}Xi(y0,"onAnimationEnd"),Xi(S0,"onAnimationIteration"),Xi(b0,"onAnimationStart"),Xi("dblclick","onDoubleClick"),Xi("focusin","onFocus"),Xi("focusout","onBlur"),Xi(GS,"onTransitionRun"),Xi(VS,"onTransitionStart"),Xi(kS,"onTransitionCancel"),Xi(M0,"onTransitionEnd"),Ut("onMouseEnter",["mouseout","mouseover"]),Ut("onMouseLeave",["mouseout","mouseover"]),Ut("onPointerEnter",["pointerout","pointerover"]),Ut("onPointerLeave",["pointerout","pointerover"]),it("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),it("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),it("onBeforeInput",["compositionend","keypress","textInput","paste"]),it("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),it("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),it("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _l="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ab=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_l));function j_(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],f=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var S=l.length-1;0<=S;S--){var R=l[S],k=R.instance,st=R.currentTarget;if(R=R.listener,k!==d&&f.isPropagationStopped())break t;d=R,f.currentTarget=st;try{d(f)}catch(gt){fc(gt)}f.currentTarget=null,d=k}else for(S=0;S<l.length;S++){if(R=l[S],k=R.instance,st=R.currentTarget,R=R.listener,k!==d&&f.isPropagationStopped())break t;d=R,f.currentTarget=st;try{d(f)}catch(gt){fc(gt)}f.currentTarget=null,d=k}}}}function Te(e,i){var s=i[Qa];s===void 0&&(s=i[Qa]=new Set);var l=e+"__bubble";s.has(l)||(X_(i,e,2,!1),s.add(l))}function td(e,i,s){var l=0;i&&(l|=4),X_(s,e,l,i)}var Qc="_reactListening"+Math.random().toString(36).slice(2);function ed(e){if(!e[Qc]){e[Qc]=!0,ct.forEach(function(s){s!=="selectionchange"&&(Ab.has(s)||td(s,!1,e),td(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Qc]||(i[Qc]=!0,td("selectionchange",!1,i))}}function X_(e,i,s,l){switch(yv(i)){case 2:var f=tM;break;case 8:f=eM;break;default:f=gd}s=f.bind(null,i,s,e),f=void 0,!Sf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(i,s,{capture:!0,passive:f}):e.addEventListener(i,s,!0):f!==void 0?e.addEventListener(i,s,{passive:f}):e.addEventListener(i,s,!1)}function nd(e,i,s,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var R=l.stateNode.containerInfo;if(R===f)break;if(S===4)for(S=l.return;S!==null;){var k=S.tag;if((k===3||k===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;R!==null;){if(S=Ja(R),S===null)return;if(k=S.tag,k===5||k===6||k===26||k===27){l=d=S;continue t}R=R.parentNode}}l=l.return}Km(function(){var st=d,gt=xf(s),St=[];t:{var lt=E0.get(e);if(lt!==void 0){var ft=lc,jt=e;switch(e){case"keypress":if(rc(s)===0)break t;case"keydown":case"keyup":ft=xS;break;case"focusin":jt="focus",ft=Tf;break;case"focusout":jt="blur",ft=Tf;break;case"beforeblur":case"afterblur":ft=Tf;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=$m;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=oS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=bS;break;case y0:case S0:case b0:ft=uS;break;case M0:ft=ES;break;case"scroll":case"scrollend":ft=sS;break;case"wheel":ft=AS;break;case"copy":case"cut":case"paste":ft=hS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=e0;break;case"toggle":case"beforetoggle":ft=RS}var ie=(i&4)!==0,qe=!ie&&(e==="scroll"||e==="scrollend"),$=ie?lt!==null?lt+"Capture":null:lt;ie=[];for(var W=st,at;W!==null;){var yt=W;if(at=yt.stateNode,yt=yt.tag,yt!==5&&yt!==26&&yt!==27||at===null||$===null||(yt=Bo(W,$),yt!=null&&ie.push(vl(W,yt,at))),qe)break;W=W.return}0<ie.length&&(lt=new ft(lt,jt,null,s,gt),St.push({event:lt,listeners:ie}))}}if((i&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",ft=e==="mouseout"||e==="pointerout",lt&&s!==vf&&(jt=s.relatedTarget||s.fromElement)&&(Ja(jt)||jt[ya]))break t;if((ft||lt)&&(lt=gt.window===gt?gt:(lt=gt.ownerDocument)?lt.defaultView||lt.parentWindow:window,ft?(jt=s.relatedTarget||s.toElement,ft=st,jt=jt?Ja(jt):null,jt!==null&&(qe=c(jt),ie=jt.tag,jt!==qe||ie!==5&&ie!==27&&ie!==6)&&(jt=null)):(ft=null,jt=st),ft!==jt)){if(ie=$m,yt="onMouseLeave",$="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(ie=e0,yt="onPointerLeave",$="onPointerEnter",W="pointer"),qe=ft==null?lt:Fs(ft),at=jt==null?lt:Fs(jt),lt=new ie(yt,W+"leave",ft,s,gt),lt.target=qe,lt.relatedTarget=at,yt=null,Ja(gt)===st&&(ie=new ie($,W+"enter",jt,s,gt),ie.target=at,ie.relatedTarget=qe,yt=ie),qe=yt,ft&&jt)e:{for(ie=wb,$=ft,W=jt,at=0,yt=$;yt;yt=ie(yt))at++;yt=0;for(var te=W;te;te=ie(te))yt++;for(;0<at-yt;)$=ie($),at--;for(;0<yt-at;)W=ie(W),yt--;for(;at--;){if($===W||W!==null&&$===W.alternate){ie=$;break e}$=ie($),W=ie(W)}ie=null}else ie=null;ft!==null&&W_(St,lt,ft,ie,!1),jt!==null&&qe!==null&&W_(St,qe,jt,ie,!0)}}t:{if(lt=st?Fs(st):window,ft=lt.nodeName&&lt.nodeName.toLowerCase(),ft==="select"||ft==="input"&&lt.type==="file")var ze=c0;else if(o0(lt))if(u0)ze=FS;else{ze=zS;var Yt=PS}else ft=lt.nodeName,!ft||ft.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?st&&Mr(st.elementType)&&(ze=c0):ze=IS;if(ze&&(ze=ze(e,st))){l0(St,ze,s,gt);break t}Yt&&Yt(e,lt,st),e==="focusout"&&st&&lt.type==="number"&&st.memoizedProps.value!=null&&ki(lt,"number",lt.value)}switch(Yt=st?Fs(st):window,e){case"focusin":(o0(Yt)||Yt.contentEditable==="true")&&(wr=Yt,Lf=st,qo=null);break;case"focusout":qo=Lf=wr=null;break;case"mousedown":Uf=!0;break;case"contextmenu":case"mouseup":case"dragend":Uf=!1,v0(St,s,gt);break;case"selectionchange":if(HS)break;case"keydown":case"keyup":v0(St,s,gt)}var _e;if(wf)t:{switch(e){case"compositionstart":var Re="onCompositionStart";break t;case"compositionend":Re="onCompositionEnd";break t;case"compositionupdate":Re="onCompositionUpdate";break t}Re=void 0}else Ar?s0(e,s)&&(Re="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Re="onCompositionStart");Re&&(n0&&s.locale!=="ko"&&(Ar||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&Ar&&(_e=Qm()):(ts=gt,bf="value"in ts?ts.value:ts.textContent,Ar=!0)),Yt=Jc(st,Re),0<Yt.length&&(Re=new t0(Re,e,null,s,gt),St.push({event:Re,listeners:Yt}),_e?Re.data=_e:(_e=r0(s),_e!==null&&(Re.data=_e)))),(_e=DS?LS(e,s):US(e,s))&&(Re=Jc(st,"onBeforeInput"),0<Re.length&&(Yt=new t0("onBeforeInput","beforeinput",null,s,gt),St.push({event:Yt,listeners:Re}),Yt.data=_e)),Mb(St,e,st,s,gt)}j_(St,i)})}function vl(e,i,s){return{instance:e,listener:i,currentTarget:s}}function Jc(e,i){for(var s=i+"Capture",l=[];e!==null;){var f=e,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=Bo(e,s),f!=null&&l.unshift(vl(e,f,d)),f=Bo(e,i),f!=null&&l.push(vl(e,f,d))),e.tag===3)return l;e=e.return}return[]}function wb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function W_(e,i,s,l,f){for(var d=i._reactName,S=[];s!==null&&s!==l;){var R=s,k=R.alternate,st=R.stateNode;if(R=R.tag,k!==null&&k===l)break;R!==5&&R!==26&&R!==27||st===null||(k=st,f?(st=Bo(s,d),st!=null&&S.unshift(vl(s,st,k))):f||(st=Bo(s,d),st!=null&&S.push(vl(s,st,k)))),s=s.return}S.length!==0&&e.push({event:i,listeners:S})}var Rb=/\r\n?/g,Cb=/\u0000|\uFFFD/g;function q_(e){return(typeof e=="string"?e:""+e).replace(Rb,`
`).replace(Cb,"")}function Y_(e,i){return i=q_(i),q_(e)===i}function We(e,i,s,l,f,d){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Jn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Jn(e,""+l);break;case"className":ce(e,"class",l);break;case"tabIndex":ce(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ce(e,s,l);break;case"style":Sa(e,l,d);break;case"data":if(i!=="object"){ce(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=ac(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&We(e,i,"name",f.name,f,null),We(e,i,"formEncType",f.formEncType,f,null),We(e,i,"formMethod",f.formMethod,f,null),We(e,i,"formTarget",f.formTarget,f,null)):(We(e,i,"encType",f.encType,f,null),We(e,i,"method",f.method,f,null),We(e,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=ac(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=ba);break;case"onScroll":l!=null&&Te("scroll",e);break;case"onScrollEnd":l!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=ac(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":Te("beforetoggle",e),Te("toggle",e),se(e,"popover",l);break;case"xlinkActuate":Vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Vt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Vt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Vt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Vt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":se(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=iS.get(s)||s,se(e,s,l))}}function id(e,i,s,l,f,d){switch(s){case"style":Sa(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?Jn(e,l):(typeof l=="number"||typeof l=="bigint")&&Jn(e,""+l);break;case"onScroll":l!=null&&Te("scroll",e);break;case"onScrollEnd":l!=null&&Te("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ba);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ot.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),d=e[Sn]||null,d=d!=null?d[s]:null,typeof d=="function"&&e.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,f);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):se(e,s,l)}}}function zn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var l=!1,f=!1,d;for(d in s)if(s.hasOwnProperty(d)){var S=s[d];if(S!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:We(e,i,d,S,s,null)}}f&&We(e,i,"srcSet",s.srcSet,s,null),l&&We(e,i,"src",s.src,s,null);return;case"input":Te("invalid",e);var R=d=S=f=null,k=null,st=null;for(l in s)if(s.hasOwnProperty(l)){var gt=s[l];if(gt!=null)switch(l){case"name":f=gt;break;case"type":S=gt;break;case"checked":k=gt;break;case"defaultChecked":st=gt;break;case"value":d=gt;break;case"defaultValue":R=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(a(137,i));break;default:We(e,i,l,gt,s,null)}}di(e,d,R,k,st,S,f,!1);return;case"select":Te("invalid",e),l=S=d=null;for(f in s)if(s.hasOwnProperty(f)&&(R=s[f],R!=null))switch(f){case"value":d=R;break;case"defaultValue":S=R;break;case"multiple":l=R;default:We(e,i,f,R,s,null)}i=d,s=S,e.multiple=!!l,i!=null?pi(e,!!l,i,!1):s!=null&&pi(e,!!l,s,!0);return;case"textarea":Te("invalid",e),d=f=l=null;for(S in s)if(s.hasOwnProperty(S)&&(R=s[S],R!=null))switch(S){case"value":l=R;break;case"defaultValue":f=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(a(91));break;default:We(e,i,S,R,s,null)}pn(e,l,f,d);return;case"option":for(k in s)s.hasOwnProperty(k)&&(l=s[k],l!=null)&&(k==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":We(e,i,k,l,s,null));return;case"dialog":Te("beforetoggle",e),Te("toggle",e),Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(l=0;l<_l.length;l++)Te(_l[l],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(st in s)if(s.hasOwnProperty(st)&&(l=s[st],l!=null))switch(st){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:We(e,i,st,l,s,null)}return;default:if(Mr(i)){for(gt in s)s.hasOwnProperty(gt)&&(l=s[gt],l!==void 0&&id(e,i,gt,l,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(l=s[R],l!=null&&We(e,i,R,l,s,null))}function Db(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,S=null,R=null,k=null,st=null,gt=null;for(ft in s){var St=s[ft];if(s.hasOwnProperty(ft)&&St!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":k=St;default:l.hasOwnProperty(ft)||We(e,i,ft,null,l,St)}}for(var lt in l){var ft=l[lt];if(St=s[lt],l.hasOwnProperty(lt)&&(ft!=null||St!=null))switch(lt){case"type":d=ft;break;case"name":f=ft;break;case"checked":st=ft;break;case"defaultChecked":gt=ft;break;case"value":S=ft;break;case"defaultValue":R=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(a(137,i));break;default:ft!==St&&We(e,i,lt,ft,l,St)}}Qn(e,S,R,k,st,gt,d,f);return;case"select":ft=S=R=lt=null;for(d in s)if(k=s[d],s.hasOwnProperty(d)&&k!=null)switch(d){case"value":break;case"multiple":ft=k;default:l.hasOwnProperty(d)||We(e,i,d,null,l,k)}for(f in l)if(d=l[f],k=s[f],l.hasOwnProperty(f)&&(d!=null||k!=null))switch(f){case"value":lt=d;break;case"defaultValue":R=d;break;case"multiple":S=d;default:d!==k&&We(e,i,f,d,l,k)}i=R,s=S,l=ft,lt!=null?pi(e,!!s,lt,!1):!!l!=!!s&&(i!=null?pi(e,!!s,i,!0):pi(e,!!s,s?[]:"",!1));return;case"textarea":ft=lt=null;for(R in s)if(f=s[R],s.hasOwnProperty(R)&&f!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:We(e,i,R,null,l,f)}for(S in l)if(f=l[S],d=s[S],l.hasOwnProperty(S)&&(f!=null||d!=null))switch(S){case"value":lt=f;break;case"defaultValue":ft=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==d&&We(e,i,S,f,l,d)}Be(e,lt,ft);return;case"option":for(var jt in s)lt=s[jt],s.hasOwnProperty(jt)&&lt!=null&&!l.hasOwnProperty(jt)&&(jt==="selected"?e.selected=!1:We(e,i,jt,null,l,lt));for(k in l)lt=l[k],ft=s[k],l.hasOwnProperty(k)&&lt!==ft&&(lt!=null||ft!=null)&&(k==="selected"?e.selected=lt&&typeof lt!="function"&&typeof lt!="symbol":We(e,i,k,lt,l,ft));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in s)lt=s[ie],s.hasOwnProperty(ie)&&lt!=null&&!l.hasOwnProperty(ie)&&We(e,i,ie,null,l,lt);for(st in l)if(lt=l[st],ft=s[st],l.hasOwnProperty(st)&&lt!==ft&&(lt!=null||ft!=null))switch(st){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(a(137,i));break;default:We(e,i,st,lt,l,ft)}return;default:if(Mr(i)){for(var qe in s)lt=s[qe],s.hasOwnProperty(qe)&&lt!==void 0&&!l.hasOwnProperty(qe)&&id(e,i,qe,void 0,l,lt);for(gt in l)lt=l[gt],ft=s[gt],!l.hasOwnProperty(gt)||lt===ft||lt===void 0&&ft===void 0||id(e,i,gt,lt,l,ft);return}}for(var $ in s)lt=s[$],s.hasOwnProperty($)&&lt!=null&&!l.hasOwnProperty($)&&We(e,i,$,null,l,lt);for(St in l)lt=l[St],ft=s[St],!l.hasOwnProperty(St)||lt===ft||lt==null&&ft==null||We(e,i,St,lt,l,ft)}function Z_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Lb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],d=f.transferSize,S=f.initiatorType,R=f.duration;if(d&&R&&Z_(S)){for(S=0,R=f.responseEnd,l+=1;l<s.length;l++){var k=s[l],st=k.startTime;if(st>R)break;var gt=k.transferSize,St=k.initiatorType;gt&&Z_(St)&&(k=k.responseEnd,S+=gt*(k<R?1:(R-st)/(k-st)))}if(--l,i+=8*(d+S)/(f.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ad=null,sd=null;function $c(e){return e.nodeType===9?e:e.ownerDocument}function K_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Q_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function rd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var od=null;function Ub(){var e=window.event;return e&&e.type==="popstate"?e===od?!1:(od=e,!0):(od=null,!1)}var J_=typeof setTimeout=="function"?setTimeout:void 0,Nb=typeof clearTimeout=="function"?clearTimeout:void 0,$_=typeof Promise=="function"?Promise:void 0,Ob=typeof queueMicrotask=="function"?queueMicrotask:typeof $_<"u"?function(e){return $_.resolve(null).then(e).catch(Pb)}:J_;function Pb(e){setTimeout(function(){throw e})}function _s(e){return e==="head"}function tv(e,i){var s=i,l=0;do{var f=s.nextSibling;if(e.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){e.removeChild(f),to(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")xl(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,xl(s);for(var d=s.firstChild;d;){var S=d.nextSibling,R=d.nodeName;d[Is]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=S}}else s==="body"&&xl(e.ownerDocument.body);s=f}while(s);to(i)}function ev(e,i){var s=e;e=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=l}while(s)}function ld(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":ld(s),Fo(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function zb(e,i,s,l){for(;e.nodeType===1;){var f=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Is])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Ui(e.nextSibling),e===null)break}return null}function Ib(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Ui(e.nextSibling),e===null))return null;return e}function nv(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Ui(e.nextSibling),e===null))return null;return e}function cd(e){return e.data==="$?"||e.data==="$~"}function ud(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Fb(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ui(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var fd=null;function iv(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return Ui(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function av(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function sv(e,i,s){switch(i=$c(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function xl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Fo(e)}var Ni=new Map,rv=new Set;function tu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Fa=G.d;G.d={f:Bb,r:Hb,D:Gb,C:Vb,L:kb,m:jb,X:Wb,S:Xb,M:qb};function Bb(){var e=Fa.f(),i=Xc();return e||i}function Hb(e){var i=$a(e);i!==null&&i.tag===5&&i.type==="form"?Mg(i):Fa.r(e)}var Qr=typeof document>"u"?null:document;function ov(e,i,s){var l=Qr;if(l&&typeof i=="string"&&i){var f=le(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),rv.has(f)||(rv.add(f),e={rel:e,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),zn(i,"link",e),Y(i),l.head.appendChild(i)))}}function Gb(e){Fa.D(e),ov("dns-prefetch",e,null)}function Vb(e,i){Fa.C(e,i),ov("preconnect",e,i)}function kb(e,i,s){Fa.L(e,i,s);var l=Qr;if(l&&e&&i){var f='link[rel="preload"][as="'+le(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+le(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+le(s.imageSizes)+'"]')):f+='[href="'+le(e)+'"]';var d=f;switch(i){case"style":d=Jr(e);break;case"script":d=$r(e)}Ni.has(d)||(e=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),Ni.set(d,e),l.querySelector(f)!==null||i==="style"&&l.querySelector(yl(d))||i==="script"&&l.querySelector(Sl(d))||(i=l.createElement("link"),zn(i,"link",e),Y(i),l.head.appendChild(i)))}}function jb(e,i){Fa.m(e,i);var s=Qr;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+le(l)+'"][href="'+le(e)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=$r(e)}if(!Ni.has(d)&&(e=_({rel:"modulepreload",href:e},i),Ni.set(d,e),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Sl(d)))return}l=s.createElement("link"),zn(l,"link",e),Y(l),s.head.appendChild(l)}}}function Xb(e,i,s){Fa.S(e,i,s);var l=Qr;if(l&&e){var f=D(l).hoistableStyles,d=Jr(e);i=i||"default";var S=f.get(d);if(!S){var R={loading:0,preload:null};if(S=l.querySelector(yl(d)))R.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":i},s),(s=Ni.get(d))&&hd(e,s);var k=S=l.createElement("link");Y(k),zn(k,"link",e),k._p=new Promise(function(st,gt){k.onload=st,k.onerror=gt}),k.addEventListener("load",function(){R.loading|=1}),k.addEventListener("error",function(){R.loading|=2}),R.loading|=4,eu(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:R},f.set(d,S)}}}function Wb(e,i){Fa.X(e,i);var s=Qr;if(s&&e){var l=D(s).hoistableScripts,f=$r(e),d=l.get(f);d||(d=s.querySelector(Sl(f)),d||(e=_({src:e,async:!0},i),(i=Ni.get(f))&&dd(e,i),d=s.createElement("script"),Y(d),zn(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function qb(e,i){Fa.M(e,i);var s=Qr;if(s&&e){var l=D(s).hoistableScripts,f=$r(e),d=l.get(f);d||(d=s.querySelector(Sl(f)),d||(e=_({src:e,async:!0,type:"module"},i),(i=Ni.get(f))&&dd(e,i),d=s.createElement("script"),Y(d),zn(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function lv(e,i,s,l){var f=(f=nt.current)?tu(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Jr(s.href),s=D(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Jr(s.href);var d=D(f).hoistableStyles,S=d.get(e);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,S),(d=f.querySelector(yl(e)))&&!d._p&&(S.instance=d,S.state.loading=5),Ni.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ni.set(e,s),d||Yb(f,e,s,S.state))),i&&l===null)throw Error(a(528,""));return S}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=$r(s),s=D(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Jr(e){return'href="'+le(e)+'"'}function yl(e){return'link[rel="stylesheet"]['+e+"]"}function cv(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Yb(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),zn(i,"link",s),Y(i),e.head.appendChild(i))}function $r(e){return'[src="'+le(e)+'"]'}function Sl(e){return"script[async]"+e}function uv(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+le(s.href)+'"]');if(l)return i.instance=l,Y(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Y(l),zn(l,"style",f),eu(l,s.precedence,e),i.instance=l;case"stylesheet":f=Jr(s.href);var d=e.querySelector(yl(f));if(d)return i.state.loading|=4,i.instance=d,Y(d),d;l=cv(s),(f=Ni.get(f))&&hd(l,f),d=(e.ownerDocument||e).createElement("link"),Y(d);var S=d;return S._p=new Promise(function(R,k){S.onload=R,S.onerror=k}),zn(d,"link",l),i.state.loading|=4,eu(d,s.precedence,e),i.instance=d;case"script":return d=$r(s.src),(f=e.querySelector(Sl(d)))?(i.instance=f,Y(f),f):(l=s,(f=Ni.get(d))&&(l=_({},s),dd(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),Y(f),zn(f,"link",l),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,eu(l,s.precedence,e));return i.instance}function eu(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,S=0;S<l.length;S++){var R=l[S];if(R.dataset.precedence===i)d=R;else if(d!==f)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function hd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function dd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var nu=null;function fv(e,i,s){if(nu===null){var l=new Map,f=nu=new Map;f.set(s,l)}else f=nu,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),f=0;f<s.length;f++){var d=s[f];if(!(d[Is]||d[dn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(i)||"";S=e+S;var R=l.get(S);R?R.push(d):l.set(S,[d])}}return l}function hv(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function Zb(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function dv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Kb(e,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Jr(l.href),d=i.querySelector(yl(f));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=iu.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=d,Y(d);return}d=i.ownerDocument||i,l=cv(l),(f=Ni.get(f))&&hd(l,f),d=d.createElement("link"),Y(d);var S=d;S._p=new Promise(function(R,k){S.onload=R,S.onerror=k}),zn(d,"link",l),s.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=iu.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var pd=0;function Qb(e,i){return e.stylesheets&&e.count===0&&su(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var l=setTimeout(function(){if(e.stylesheets&&su(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+i);0<e.imgBytes&&pd===0&&(pd=62500*Lb());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&su(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>pd?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function iu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)su(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var au=null;function su(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,au=new Map,i.forEach(Jb,e),au=null,iu.call(e))}function Jb(e,i){if(!(i.state.loading&4)){var s=au.get(e);if(s)var l=s.get(null);else{s=new Map,au.set(e,s);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var S=f[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}f=i.instance,S=f.getAttribute("data-precedence"),d=s.get(S)||l,d===l&&s.set(null,f),s.set(S,f),this.count++,l=iu.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var bl={$$typeof:C,Provider:null,Consumer:null,_currentValue:ut,_currentValue2:ut,_threadCount:0};function $b(e,i,s,l,f,d,S,R,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ue(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ue(0),this.hiddenUpdates=Ue(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function pv(e,i,s,l,f,d,S,R,k,st,gt,St){return e=new $b(e,i,s,S,k,st,gt,St,R),i=1,d===!0&&(i|=24),d=gi(3,null,null,i),e.current=d,d.stateNode=e,i=qf(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:i},Qf(d),e}function mv(e){return e?(e=Dr,e):Dr}function gv(e,i,s,l,f,d){f=mv(f),l.context===null?l.context=f:l.pendingContext=f,l=rs(i),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=os(e,l,i),s!==null&&(ci(s,e,i),tl(s,e,i))}function _v(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function md(e,i){_v(e,i),(e=e.alternate)&&_v(e,i)}function vv(e){if(e.tag===13||e.tag===31){var i=Vs(e,67108864);i!==null&&ci(i,e,67108864),md(e,67108864)}}function xv(e){if(e.tag===13||e.tag===31){var i=Si();i=yr(i);var s=Vs(e,i);s!==null&&ci(s,e,i),md(e,i)}}var ru=!0;function tM(e,i,s,l){var f=z.T;z.T=null;var d=G.p;try{G.p=2,gd(e,i,s,l)}finally{G.p=d,z.T=f}}function eM(e,i,s,l){var f=z.T;z.T=null;var d=G.p;try{G.p=8,gd(e,i,s,l)}finally{G.p=d,z.T=f}}function gd(e,i,s,l){if(ru){var f=_d(l);if(f===null)nd(e,i,l,ou,s),Sv(e,l);else if(iM(f,e,i,s,l))l.stopPropagation();else if(Sv(e,l),i&4&&-1<nM.indexOf(e)){for(;f!==null;){var d=$a(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=At(d.pendingLanes);if(S!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var k=1<<31-Pt(S);R.entanglements[1]|=k,S&=~k}sa(d),(Fe&6)===0&&(kc=E()+500,gl(0))}}break;case 31:case 13:R=Vs(d,2),R!==null&&ci(R,d,2),Xc(),md(d,2)}if(d=_d(l),d===null&&nd(e,i,l,ou,s),d===f)break;f=d}f!==null&&l.stopPropagation()}else nd(e,i,l,null,s)}}function _d(e){return e=xf(e),vd(e)}var ou=null;function vd(e){if(ou=null,e=Ja(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=u(i),e!==null)return e;e=null}else if(s===31){if(e=h(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return ou=e,null}function yv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q()){case vt:return 2;case Mt:return 8;case pt:case Wt:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var xd=!1,vs=null,xs=null,ys=null,Ml=new Map,El=new Map,Ss=[],nM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sv(e,i){switch(e){case"focusin":case"focusout":vs=null;break;case"dragenter":case"dragleave":xs=null;break;case"mouseover":case"mouseout":ys=null;break;case"pointerover":case"pointerout":Ml.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":El.delete(i.pointerId)}}function Tl(e,i,s,l,f,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=$a(i),i!==null&&vv(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function iM(e,i,s,l,f){switch(i){case"focusin":return vs=Tl(vs,e,i,s,l,f),!0;case"dragenter":return xs=Tl(xs,e,i,s,l,f),!0;case"mouseover":return ys=Tl(ys,e,i,s,l,f),!0;case"pointerover":var d=f.pointerId;return Ml.set(d,Tl(Ml.get(d)||null,e,i,s,l,f)),!0;case"gotpointercapture":return d=f.pointerId,El.set(d,Tl(El.get(d)||null,e,i,s,l,f)),!0}return!1}function bv(e){var i=Ja(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){e.blockedOn=i,br(e.priority,function(){xv(s)});return}}else if(i===31){if(i=h(s),i!==null){e.blockedOn=i,br(e.priority,function(){xv(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lu(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=_d(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);vf=l,s.target.dispatchEvent(l),vf=null}else return i=$a(s),i!==null&&vv(i),e.blockedOn=s,!1;i.shift()}return!0}function Mv(e,i,s){lu(e)&&s.delete(i)}function aM(){xd=!1,vs!==null&&lu(vs)&&(vs=null),xs!==null&&lu(xs)&&(xs=null),ys!==null&&lu(ys)&&(ys=null),Ml.forEach(Mv),El.forEach(Mv)}function cu(e,i){e.blockedOn===i&&(e.blockedOn=null,xd||(xd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,aM)))}var uu=null;function Ev(e){uu!==e&&(uu=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){uu===e&&(uu=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],f=e[i+2];if(typeof l!="function"){if(vd(l||s)===null)continue;break}var d=$a(s);d!==null&&(e.splice(i,3),i-=3,_h(d,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function to(e){function i(k){return cu(k,e)}vs!==null&&cu(vs,e),xs!==null&&cu(xs,e),ys!==null&&cu(ys,e),Ml.forEach(i),El.forEach(i);for(var s=0;s<Ss.length;s++){var l=Ss[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ss.length&&(s=Ss[0],s.blockedOn===null);)bv(s),s.blockedOn===null&&Ss.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],d=s[l+1],S=f[Sn]||null;if(typeof d=="function")S||Ev(s);else if(S){var R=null;if(d&&d.hasAttribute("formAction")){if(f=d,S=d[Sn]||null)R=S.formAction;else if(vd(f)!==null)continue}else R=S.action;typeof R=="function"?s[l+1]=R:(s.splice(l,3),l-=3),Ev(s)}}}function Tv(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function yd(e){this._internalRoot=e}fu.prototype.render=yd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=Si();gv(s,l,e,i,null,null)},fu.prototype.unmount=yd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;gv(e.current,2,null,e,null,null),Xc(),i[ya]=null}};function fu(e){this._internalRoot=e}fu.prototype.unstable_scheduleHydration=function(e){if(e){var i=ea();e={blockedOn:null,target:e,priority:i};for(var s=0;s<Ss.length&&i!==0&&i<Ss[s].priority;s++);Ss.splice(s,0,e),s===0&&bv(e)}};var Av=t.version;if(Av!=="19.2.4")throw Error(a(527,Av,"19.2.4"));G.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var sM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hu.isDisabled&&hu.supportsFiber)try{wt=hu.inject(sM),Tt=hu}catch{}}return wl.createRoot=function(e,i){if(!o(e))throw Error(a(299));var s=!1,l="",f=Ng,d=Og,S=Pg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=pv(e,1,!1,null,null,s,l,null,f,d,S,Tv),e[ya]=i.current,ed(e),new yd(i)},wl.hydrateRoot=function(e,i,s){if(!o(e))throw Error(a(299));var l=!1,f="",d=Ng,S=Og,R=Pg,k=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.formState!==void 0&&(k=s.formState)),i=pv(e,1,!0,i,s??null,l,f,k,d,S,R,Tv),i.context=mv(null),s=i.current,l=Si(),l=yr(l),f=rs(l),f.callback=null,os(s,f,l),s=l,i.current.lanes=s,Zn(i,s),sa(i),e[ya]=i.current,ed(e),new fu(i)},wl.version="19.2.4",wl}var zv;function mM(){if(zv)return Md.exports;zv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Md.exports=pM(),Md.exports}var gM=mM();function cn(r,t,n){return Number.isNaN(r)?t:Math.min(n,Math.max(t,r))}function Dn(r,t){return Number(Number(r).toFixed(t))}function mr(r){return JSON.parse(JSON.stringify(r))}function ay(r,t){return JSON.stringify(r)===JSON.stringify(t)}function _M(){return I.jsx("svg",{viewBox:"0 0 24 24",className:"h-5 w-5",fill:"none",stroke:"currentColor",strokeWidth:"2",children:I.jsx("path",{strokeLinecap:"round",d:"M4 6h16M4 12h16M4 18h16"})})}function vM(){return I.jsxs("svg",{viewBox:"0 0 24 24",className:"h-5 w-5",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[I.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 14 4 9l5-5"}),I.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 9h10a6 6 0 0 1 0 12h-3"})]})}function xM(){return I.jsxs("svg",{viewBox:"0 0 24 24",className:"h-5 w-5",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[I.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m15 14 5-5-5-5"}),I.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20 9H10a6 6 0 0 0 0 12h3"})]})}function yM(){return I.jsx("svg",{viewBox:"0 0 24 24",className:"h-5 w-5",fill:"none",stroke:"currentColor",strokeWidth:"2",children:I.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 6v12M16 6v12"})})}function SM(){return I.jsx("svg",{viewBox:"0 0 24 24",className:"h-5 w-5",fill:"none",stroke:"currentColor",strokeWidth:"2",children:I.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 5v14l11-7z"})})}function bM(){return I.jsxs("svg",{viewBox:"0 0 24 24",className:"h-5 w-5",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[I.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 12a8 8 0 1 0 2.6-5.9"}),I.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 4v5h5"})]})}function Iv(){return I.jsx("svg",{viewBox:"0 0 24 24",className:"h-5 w-5",fill:"none",stroke:"currentColor",strokeWidth:"2",children:I.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 3h6v6M9 21H3v-6M21 9V3h-6M3 15v6h6"})})}function sy({className:r="h-5 w-5"}){return I.jsx("svg",{viewBox:"0 0 24 24",className:r,fill:"none",stroke:"currentColor",strokeWidth:"2",children:I.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 5v14M5 12h14"})})}function Ds({open:r,className:t=""}){return I.jsx("svg",{viewBox:"0 0 24 24",className:`h-4 w-4 transition-transform ${r?"rotate-180":"rotate-0"} ${t}`,fill:"none",stroke:"currentColor",strokeWidth:"2",children:I.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 9l6 6 6-6"})})}function MM({className:r="h-4 w-4"}){return I.jsxs("svg",{viewBox:"0 0 24 24",className:r,fill:"none",stroke:"currentColor",strokeWidth:"2",children:[I.jsx("circle",{cx:"12",cy:"12",r:"9"}),I.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.6 9.4a2.5 2.5 0 014.6 1.3c0 1.7-2 2-2 3.4"}),I.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 17h.01"})]})}const EM=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function Fv(r){const t=Date.UTC(2e3,0,1,12),n=new Date(t+r*864e5),a=String(n.getUTCHours()).padStart(2,"0"),o=String(n.getUTCMinutes()).padStart(2,"0");return`${n.getUTCDate()} ${EM[n.getUTCMonth()]} ${a}:${o} UT`}function TM({open:r,title:t,body:n,confirmLabel:a="Confirm",cancelLabel:o="Cancel",onConfirm:c,onCancel:u}){return r?I.jsxs("div",{className:"fixed inset-0 z-[100] flex items-center justify-center",children:[I.jsx("button",{type:"button",className:"absolute inset-0 bg-black/50",onClick:u,"aria-label":"Close modal"}),I.jsxs("div",{className:"relative mx-6 w-full max-w-md rounded-2xl bg-slate-950/90 p-5 text-white shadow-2xl ring-1 ring-white/10 backdrop-blur",children:[I.jsx("div",{className:"text-sm font-semibold",children:t}),n?I.jsx("div",{className:"mt-2 text-sm text-white/80",children:n}):null,I.jsxs("div",{className:"mt-5 flex justify-end gap-2",children:[I.jsx("button",{type:"button",className:"rounded-lg bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/15",onClick:u,children:o}),I.jsx("button",{type:"button",className:"rounded-lg bg-rose-500 px-3 py-2 text-sm font-semibold text-white hover:bg-rose-500/90",onClick:c,children:a})]})]})]}):null}function AM({open:r,title:t,body:n,learnMoreLabel:a="Learn more",learnMoreUrl:o,onLearnMore:c,onClose:u}){if(!r)return null;const h=!!(c||o);return I.jsxs("div",{className:"fixed inset-0 z-[100] flex items-center justify-center",children:[I.jsx("button",{type:"button",className:"absolute inset-0 bg-black/50",onClick:u,"aria-label":"Close modal"}),I.jsxs("div",{className:"relative mx-6 w-full max-w-md rounded-2xl bg-slate-950/90 p-5 text-white shadow-2xl ring-1 ring-white/10 backdrop-blur",children:[I.jsx("div",{className:"text-sm font-semibold",children:t}),n?I.jsx("div",{className:"mt-2 select-text text-sm text-white/80",children:n}):null,I.jsxs("div",{className:"mt-5 flex justify-end gap-2",children:[I.jsx("button",{type:"button",className:"rounded-lg bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/15",onClick:u,children:"Close"}),I.jsx("button",{type:"button",className:`rounded-lg px-3 py-2 text-sm font-semibold text-white ${h?"bg-sky-500 hover:bg-sky-500/90":"bg-white/10 text-white/50"}`,onClick:()=>{c?c():o&&window.open(o,"_blank","noopener,noreferrer")},disabled:!h,children:a})]})]})]})}const ym="183",Ao={ROTATE:0,DOLLY:1,PAN:2},To={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wM=0,Bv=1,RM=2,Ju=1,CM=2,Fl=3,Os=0,ii=1,Ji=2,Wa=0,wo=1,rf=2,Hv=3,Gv=4,DM=5,cr=100,LM=101,UM=102,NM=103,OM=104,PM=200,zM=201,IM=202,FM=203,yp=204,Sp=205,BM=206,HM=207,GM=208,VM=209,kM=210,jM=211,XM=212,WM=213,qM=214,bp=0,Mp=1,Ep=2,Do=3,Tp=4,Ap=5,wp=6,Rp=7,Sm=0,YM=1,ZM=2,ma=0,ry=1,oy=2,ly=3,cy=4,uy=5,fy=6,hy=7,dy=300,gr=301,Lo=302,wd=303,Rd=304,df=306,Cp=1e3,Xa=1001,Dp=1002,Gn=1003,KM=1004,du=1005,Un=1006,Cd=1007,fr=1008,Ti=1009,py=1010,my=1011,Xl=1012,bm=1013,_a=1014,ha=1015,Za=1016,Mm=1017,Em=1018,Wl=1020,gy=35902,_y=35899,vy=1021,xy=1022,ta=1023,Ka=1026,hr=1027,yy=1028,Tm=1029,Uo=1030,Am=1031,wm=1033,$u=33776,tf=33777,ef=33778,nf=33779,Lp=35840,Up=35841,Np=35842,Op=35843,Pp=36196,zp=37492,Ip=37496,Fp=37488,Bp=37489,Hp=37490,Gp=37491,Vp=37808,kp=37809,jp=37810,Xp=37811,Wp=37812,qp=37813,Yp=37814,Zp=37815,Kp=37816,Qp=37817,Jp=37818,$p=37819,tm=37820,em=37821,nm=36492,im=36494,am=36495,sm=36283,rm=36284,om=36285,lm=36286,QM=3200,Sy=0,JM=1,Us="",Ln="srgb",No="srgb-linear",of="linear",ke="srgb",eo=7680,Vv=519,$M=512,tE=513,eE=514,Rm=515,nE=516,iE=517,Cm=518,aE=519,cm=35044,kv="300 es",da=2e3,ql=2001;function sE(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Yl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function rE(){const r=Yl("canvas");return r.style.display="block",r}const jv={};function lf(...r){const t="THREE."+r.shift();console.log(t,...r)}function by(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=r[1];n&&n.isStackTrace?r[0]+=" "+n.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function oe(...r){r=by(r);const t="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...r)}}function Ne(...r){r=by(r);const t="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...r)}}function cf(...r){const t=r.join(" ");t in jv||(jv[t]=!0,oe(...r))}function oE(r,t,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const lE={[bp]:Mp,[Ep]:wp,[Tp]:Rp,[Do]:Ap,[Mp]:bp,[wp]:Ep,[Rp]:Tp,[Ap]:Do};class _r{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xv=1234567;const Vl=Math.PI/180,Zl=180/Math.PI;function qa(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Wn[r&255]+Wn[r>>8&255]+Wn[r>>16&255]+Wn[r>>24&255]+"-"+Wn[t&255]+Wn[t>>8&255]+"-"+Wn[t>>16&15|64]+Wn[t>>24&255]+"-"+Wn[n&63|128]+Wn[n>>8&255]+"-"+Wn[n>>16&255]+Wn[n>>24&255]+Wn[a&255]+Wn[a>>8&255]+Wn[a>>16&255]+Wn[a>>24&255]).toLowerCase()}function fe(r,t,n){return Math.max(t,Math.min(n,r))}function Dm(r,t){return(r%t+t)%t}function cE(r,t,n,a,o){return a+(r-t)*(o-a)/(n-t)}function uE(r,t,n){return r!==t?(n-r)/(t-r):0}function kl(r,t,n){return(1-n)*r+n*t}function fE(r,t,n,a){return kl(r,t,1-Math.exp(-n*a))}function hE(r,t=1){return t-Math.abs(Dm(r,t*2)-t)}function dE(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*(3-2*r))}function pE(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*r*(r*(r*6-15)+10))}function mE(r,t){return r+Math.floor(Math.random()*(t-r+1))}function gE(r,t){return r+Math.random()*(t-r)}function _E(r){return r*(.5-Math.random())}function vE(r){r!==void 0&&(Xv=r);let t=Xv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xE(r){return r*Vl}function yE(r){return r*Zl}function SE(r){return(r&r-1)===0&&r!==0}function bE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ME(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function EE(r,t,n,a,o){const c=Math.cos,u=Math.sin,h=c(n/2),m=u(n/2),p=c((t+a)/2),g=u((t+a)/2),_=c((t-a)/2),v=u((t-a)/2),b=c((a-t)/2),M=u((a-t)/2);switch(o){case"XYX":r.set(h*g,m*_,m*v,h*p);break;case"YZY":r.set(m*v,h*g,m*_,h*p);break;case"ZXZ":r.set(m*_,m*v,h*g,h*p);break;case"XZX":r.set(h*g,m*M,m*b,h*p);break;case"YXY":r.set(m*b,h*g,m*M,h*p);break;case"ZYZ":r.set(m*M,m*b,h*g,h*p);break;default:oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function $i(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function je(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const My={DEG2RAD:Vl,RAD2DEG:Zl,generateUUID:qa,clamp:fe,euclideanModulo:Dm,mapLinear:cE,inverseLerp:uE,lerp:kl,damp:fE,pingpong:hE,smoothstep:dE,smootherstep:pE,randInt:mE,randFloat:gE,randFloatSpread:_E,seededRandom:vE,degToRad:xE,radToDeg:yE,isPowerOfTwo:SE,ceilPowerOfTwo:bE,floorPowerOfTwo:ME,setQuaternionFromProperEuler:EE,normalize:je,denormalize:$i};class ne{constructor(t=0,n=0){ne.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=fe(this.x,t.x,n.x),this.y=fe(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=fe(this.x,t,n),this.y=fe(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(fe(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(fe(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*a-u*o+t.x,this.y=c*o+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ps{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,c,u,h){let m=a[o+0],p=a[o+1],g=a[o+2],_=a[o+3],v=c[u+0],b=c[u+1],M=c[u+2],w=c[u+3];if(_!==w||m!==v||p!==b||g!==M){let y=m*v+p*b+g*M+_*w;y<0&&(v=-v,b=-b,M=-M,w=-w,y=-y);let x=1-h;if(y<.9995){const A=Math.acos(y),C=Math.sin(A);x=Math.sin(x*A)/C,h=Math.sin(h*A)/C,m=m*x+v*h,p=p*x+b*h,g=g*x+M*h,_=_*x+w*h}else{m=m*x+v*h,p=p*x+b*h,g=g*x+M*h,_=_*x+w*h;const A=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=A,p*=A,g*=A,_*=A}}t[n]=m,t[n+1]=p,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,o,c,u){const h=a[o],m=a[o+1],p=a[o+2],g=a[o+3],_=c[u],v=c[u+1],b=c[u+2],M=c[u+3];return t[n]=h*M+g*_+m*b-p*v,t[n+1]=m*M+g*v+p*_-h*b,t[n+2]=p*M+g*b+h*v-m*_,t[n+3]=g*M-h*_-m*v-p*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,c=t._z,u=t._order,h=Math.cos,m=Math.sin,p=h(a/2),g=h(o/2),_=h(c/2),v=m(a/2),b=m(o/2),M=m(c/2);switch(u){case"XYZ":this._x=v*g*_+p*b*M,this._y=p*b*_-v*g*M,this._z=p*g*M+v*b*_,this._w=p*g*_-v*b*M;break;case"YXZ":this._x=v*g*_+p*b*M,this._y=p*b*_-v*g*M,this._z=p*g*M-v*b*_,this._w=p*g*_+v*b*M;break;case"ZXY":this._x=v*g*_-p*b*M,this._y=p*b*_+v*g*M,this._z=p*g*M+v*b*_,this._w=p*g*_-v*b*M;break;case"ZYX":this._x=v*g*_-p*b*M,this._y=p*b*_+v*g*M,this._z=p*g*M-v*b*_,this._w=p*g*_+v*b*M;break;case"YZX":this._x=v*g*_+p*b*M,this._y=p*b*_+v*g*M,this._z=p*g*M-v*b*_,this._w=p*g*_-v*b*M;break;case"XZY":this._x=v*g*_-p*b*M,this._y=p*b*_-v*g*M,this._z=p*g*M+v*b*_,this._w=p*g*_+v*b*M;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],c=n[8],u=n[1],h=n[5],m=n[9],p=n[2],g=n[6],_=n[10],v=a+h+_;if(v>0){const b=.5/Math.sqrt(v+1);this._w=.25/b,this._x=(g-m)*b,this._y=(c-p)*b,this._z=(u-o)*b}else if(a>h&&a>_){const b=2*Math.sqrt(1+a-h-_);this._w=(g-m)/b,this._x=.25*b,this._y=(o+u)/b,this._z=(c+p)/b}else if(h>_){const b=2*Math.sqrt(1+h-a-_);this._w=(c-p)/b,this._x=(o+u)/b,this._y=.25*b,this._z=(m+g)/b}else{const b=2*Math.sqrt(1+_-a-h);this._w=(u-o)/b,this._x=(c+p)/b,this._y=(m+g)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,c=t._z,u=t._w,h=n._x,m=n._y,p=n._z,g=n._w;return this._x=a*g+u*h+o*p-c*m,this._y=o*g+u*m+c*h-a*p,this._z=c*g+u*p+a*m-o*h,this._w=u*g-a*h-o*m-c*p,this._onChangeCallback(),this}slerp(t,n){let a=t._x,o=t._y,c=t._z,u=t._w,h=this.dot(t);h<0&&(a=-a,o=-o,c=-c,u=-u,h=-h);let m=1-n;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,n=Math.sin(n*p)/g,this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,n=0,a=0){j.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Wv.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Wv.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,c=t.x,u=t.y,h=t.z,m=t.w,p=2*(u*o-h*a),g=2*(h*n-c*o),_=2*(c*a-u*n);return this.x=n+m*p+u*_-h*g,this.y=a+m*g+h*p-c*_,this.z=o+m*_+c*g-u*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=fe(this.x,t.x,n.x),this.y=fe(this.y,t.y,n.y),this.z=fe(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=fe(this.x,t,n),this.y=fe(this.y,t,n),this.z=fe(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(fe(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,c=t.z,u=n.x,h=n.y,m=n.z;return this.x=o*m-c*h,this.y=c*u-a*m,this.z=a*h-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Dd.copy(this).projectOnVector(t),this.sub(Dd)}reflect(t){return this.sub(Dd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(fe(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dd=new j,Wv=new Ps;class xe{constructor(t,n,a,o,c,u,h,m,p){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,h,m,p)}set(t,n,a,o,c,u,h,m,p){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=m,g[6]=a,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],h=a[3],m=a[6],p=a[1],g=a[4],_=a[7],v=a[2],b=a[5],M=a[8],w=o[0],y=o[3],x=o[6],A=o[1],C=o[4],L=o[7],B=o[2],P=o[5],N=o[8];return c[0]=u*w+h*A+m*B,c[3]=u*y+h*C+m*P,c[6]=u*x+h*L+m*N,c[1]=p*w+g*A+_*B,c[4]=p*y+g*C+_*P,c[7]=p*x+g*L+_*N,c[2]=v*w+b*A+M*B,c[5]=v*y+b*C+M*P,c[8]=v*x+b*L+M*N,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return n*u*g-n*h*p-a*c*g+a*h*m+o*c*p-o*u*m}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=g*u-h*p,v=h*m-g*c,b=p*c-u*m,M=n*_+a*v+o*b;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/M;return t[0]=_*w,t[1]=(o*p-g*a)*w,t[2]=(h*a-o*u)*w,t[3]=v*w,t[4]=(g*n-o*m)*w,t[5]=(o*c-h*n)*w,t[6]=b*w,t[7]=(a*m-p*n)*w,t[8]=(u*n-a*c)*w,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,c,u,h){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*u+p*h)+u+t,-o*p,o*m,-o*(-p*u+m*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Ld.makeScale(t,n)),this}rotate(t){return this.premultiply(Ld.makeRotation(-t)),this}translate(t,n){return this.premultiply(Ld.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ld=new xe,qv=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yv=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function TE(){const r={enabled:!0,workingColorSpace:No,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===ke&&(o.r=Ya(o.r),o.g=Ya(o.g),o.b=Ya(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===ke&&(o.r=Ro(o.r),o.g=Ro(o.g),o.b=Ro(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Us?of:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return cf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return cf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[No]:{primaries:t,whitePoint:a,transfer:of,toXYZ:qv,fromXYZ:Yv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:t,whitePoint:a,transfer:ke,toXYZ:qv,fromXYZ:Yv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),r}const Oe=TE();function Ya(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ro(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let no;class AE{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{no===void 0&&(no=Yl("canvas")),no.width=t.width,no.height=t.height;const o=no.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=no}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Yl("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ya(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ya(n[a]/255)*255):n[a]=Ya(n[a]);return{data:n,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wE=0;class Lm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=qa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(Ud(o[u].image)):c.push(Ud(o[u]))}else c=Ud(o);a.url=c}return n||(t.images[this.uuid]=a),a}}function Ud(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?AE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let RE=0;const Nd=new j;class Vn extends _r{constructor(t=Vn.DEFAULT_IMAGE,n=Vn.DEFAULT_MAPPING,a=Xa,o=Xa,c=Un,u=fr,h=ta,m=Ti,p=Vn.DEFAULT_ANISOTROPY,g=Us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=qa(),this.name="",this.source=new Lm(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Nd).x}get height(){return this.source.getSize(Nd).y}get depth(){return this.source.getSize(Nd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){oe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){oe(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cp:t.x=t.x-Math.floor(t.x);break;case Xa:t.x=t.x<0?0:1;break;case Dp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cp:t.y=t.y-Math.floor(t.y);break;case Xa:t.y=t.y<0?0:1;break;case Dp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=dy;Vn.DEFAULT_ANISOTROPY=1;class Ke{constructor(t=0,n=0,a=0,o=1){Ke.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,c;const m=t.elements,p=m[0],g=m[4],_=m[8],v=m[1],b=m[5],M=m[9],w=m[2],y=m[6],x=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-w)<.01&&Math.abs(M-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+w)<.1&&Math.abs(M+y)<.1&&Math.abs(p+b+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const C=(p+1)/2,L=(b+1)/2,B=(x+1)/2,P=(g+v)/4,N=(_+w)/4,T=(M+y)/4;return C>L&&C>B?C<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(C),o=P/a,c=N/a):L>B?L<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(L),a=P/o,c=T/o):B<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(B),a=N/c,o=T/c),this.set(a,o,c,n),this}let A=Math.sqrt((y-M)*(y-M)+(_-w)*(_-w)+(v-g)*(v-g));return Math.abs(A)<.001&&(A=1),this.x=(y-M)/A,this.y=(_-w)/A,this.z=(v-g)/A,this.w=Math.acos((p+b+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=fe(this.x,t.x,n.x),this.y=fe(this.y,t.y,n.y),this.z=fe(this.z,t.z,n.z),this.w=fe(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=fe(this.x,t,n),this.y=fe(this.y,t,n),this.z=fe(this.z,t,n),this.w=fe(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(fe(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CE extends _r{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new Ke(0,0,t,n),this.scissorTest=!1,this.viewport=new Ke(0,0,t,n),this.textures=[];const o={width:t,height:n,depth:a.depth},c=new Vn(o),u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new Lm(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ga extends CE{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class Ey extends Vn{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class DE extends Vn{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nn{constructor(t,n,a,o,c,u,h,m,p,g,_,v,b,M,w,y){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,h,m,p,g,_,v,b,M,w,y)}set(t,n,a,o,c,u,h,m,p,g,_,v,b,M,w,y){const x=this.elements;return x[0]=t,x[4]=n,x[8]=a,x[12]=o,x[1]=c,x[5]=u,x[9]=h,x[13]=m,x[2]=p,x[6]=g,x[10]=_,x[14]=v,x[3]=b,x[7]=M,x[11]=w,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,a=t.elements,o=1/io.setFromMatrixColumn(t,0).length(),c=1/io.setFromMatrixColumn(t,1).length(),u=1/io.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,c=t.z,u=Math.cos(a),h=Math.sin(a),m=Math.cos(o),p=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=u*g,b=u*_,M=h*g,w=h*_;n[0]=m*g,n[4]=-m*_,n[8]=p,n[1]=b+M*p,n[5]=v-w*p,n[9]=-h*m,n[2]=w-v*p,n[6]=M+b*p,n[10]=u*m}else if(t.order==="YXZ"){const v=m*g,b=m*_,M=p*g,w=p*_;n[0]=v+w*h,n[4]=M*h-b,n[8]=u*p,n[1]=u*_,n[5]=u*g,n[9]=-h,n[2]=b*h-M,n[6]=w+v*h,n[10]=u*m}else if(t.order==="ZXY"){const v=m*g,b=m*_,M=p*g,w=p*_;n[0]=v-w*h,n[4]=-u*_,n[8]=M+b*h,n[1]=b+M*h,n[5]=u*g,n[9]=w-v*h,n[2]=-u*p,n[6]=h,n[10]=u*m}else if(t.order==="ZYX"){const v=u*g,b=u*_,M=h*g,w=h*_;n[0]=m*g,n[4]=M*p-b,n[8]=v*p+w,n[1]=m*_,n[5]=w*p+v,n[9]=b*p-M,n[2]=-p,n[6]=h*m,n[10]=u*m}else if(t.order==="YZX"){const v=u*m,b=u*p,M=h*m,w=h*p;n[0]=m*g,n[4]=w-v*_,n[8]=M*_+b,n[1]=_,n[5]=u*g,n[9]=-h*g,n[2]=-p*g,n[6]=b*_+M,n[10]=v-w*_}else if(t.order==="XZY"){const v=u*m,b=u*p,M=h*m,w=h*p;n[0]=m*g,n[4]=-_,n[8]=p*g,n[1]=v*_+w,n[5]=u*g,n[9]=b*_-M,n[2]=M*_-b,n[6]=h*g,n[10]=w*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(LE,t,UE)}lookAt(t,n,a){const o=this.elements;return bi.subVectors(t,n),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),Ms.crossVectors(a,bi),Ms.lengthSq()===0&&(Math.abs(a.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),Ms.crossVectors(a,bi)),Ms.normalize(),pu.crossVectors(bi,Ms),o[0]=Ms.x,o[4]=pu.x,o[8]=bi.x,o[1]=Ms.y,o[5]=pu.y,o[9]=bi.y,o[2]=Ms.z,o[6]=pu.z,o[10]=bi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],h=a[4],m=a[8],p=a[12],g=a[1],_=a[5],v=a[9],b=a[13],M=a[2],w=a[6],y=a[10],x=a[14],A=a[3],C=a[7],L=a[11],B=a[15],P=o[0],N=o[4],T=o[8],U=o[12],rt=o[1],H=o[5],K=o[9],et=o[13],tt=o[2],J=o[6],z=o[10],G=o[14],ut=o[3],mt=o[7],Et=o[11],F=o[15];return c[0]=u*P+h*rt+m*tt+p*ut,c[4]=u*N+h*H+m*J+p*mt,c[8]=u*T+h*K+m*z+p*Et,c[12]=u*U+h*et+m*G+p*F,c[1]=g*P+_*rt+v*tt+b*ut,c[5]=g*N+_*H+v*J+b*mt,c[9]=g*T+_*K+v*z+b*Et,c[13]=g*U+_*et+v*G+b*F,c[2]=M*P+w*rt+y*tt+x*ut,c[6]=M*N+w*H+y*J+x*mt,c[10]=M*T+w*K+y*z+x*Et,c[14]=M*U+w*et+y*G+x*F,c[3]=A*P+C*rt+L*tt+B*ut,c[7]=A*N+C*H+L*J+B*mt,c[11]=A*T+C*K+L*z+B*Et,c[15]=A*U+C*et+L*G+B*F,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[12],u=t[1],h=t[5],m=t[9],p=t[13],g=t[2],_=t[6],v=t[10],b=t[14],M=t[3],w=t[7],y=t[11],x=t[15],A=m*b-p*v,C=h*b-p*_,L=h*v-m*_,B=u*b-p*g,P=u*v-m*g,N=u*_-h*g;return n*(w*A-y*C+x*L)-a*(M*A-y*B+x*P)+o*(M*C-w*B+x*N)-c*(M*L-w*P+y*N)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=t[9],v=t[10],b=t[11],M=t[12],w=t[13],y=t[14],x=t[15],A=n*h-a*u,C=n*m-o*u,L=n*p-c*u,B=a*m-o*h,P=a*p-c*h,N=o*p-c*m,T=g*w-_*M,U=g*y-v*M,rt=g*x-b*M,H=_*y-v*w,K=_*x-b*w,et=v*x-b*y,tt=A*et-C*K+L*H+B*rt-P*U+N*T;if(tt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/tt;return t[0]=(h*et-m*K+p*H)*J,t[1]=(o*K-a*et-c*H)*J,t[2]=(w*N-y*P+x*B)*J,t[3]=(v*P-_*N-b*B)*J,t[4]=(m*rt-u*et-p*U)*J,t[5]=(n*et-o*rt+c*U)*J,t[6]=(y*L-M*N-x*C)*J,t[7]=(g*N-v*L+b*C)*J,t[8]=(u*K-h*rt+p*T)*J,t[9]=(a*rt-n*K-c*T)*J,t[10]=(M*P-w*L+x*A)*J,t[11]=(_*L-g*P-b*A)*J,t[12]=(h*U-u*H-m*T)*J,t[13]=(n*H-a*U+o*T)*J,t[14]=(w*C-M*B-y*A)*J,t[15]=(g*B-_*C+v*A)*J,this}scale(t){const n=this.elements,a=t.x,o=t.y,c=t.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=t.x,h=t.y,m=t.z,p=c*u,g=c*h;return this.set(p*u+a,p*h-o*m,p*m+o*h,0,p*h+o*m,g*h+a,g*m-o*u,0,p*m-o*h,g*m+o*u,c*m*m+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,c,u){return this.set(1,a,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,c=n._x,u=n._y,h=n._z,m=n._w,p=c+c,g=u+u,_=h+h,v=c*p,b=c*g,M=c*_,w=u*g,y=u*_,x=h*_,A=m*p,C=m*g,L=m*_,B=a.x,P=a.y,N=a.z;return o[0]=(1-(w+x))*B,o[1]=(b+L)*B,o[2]=(M-C)*B,o[3]=0,o[4]=(b-L)*P,o[5]=(1-(v+x))*P,o[6]=(y+A)*P,o[7]=0,o[8]=(M+C)*N,o[9]=(y-A)*N,o[10]=(1-(v+w))*N,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;t.x=o[12],t.y=o[13],t.z=o[14];const c=this.determinant();if(c===0)return a.set(1,1,1),n.identity(),this;let u=io.set(o[0],o[1],o[2]).length();const h=io.set(o[4],o[5],o[6]).length(),m=io.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Yi.copy(this);const p=1/u,g=1/h,_=1/m;return Yi.elements[0]*=p,Yi.elements[1]*=p,Yi.elements[2]*=p,Yi.elements[4]*=g,Yi.elements[5]*=g,Yi.elements[6]*=g,Yi.elements[8]*=_,Yi.elements[9]*=_,Yi.elements[10]*=_,n.setFromRotationMatrix(Yi),a.x=u,a.y=h,a.z=m,this}makePerspective(t,n,a,o,c,u,h=da,m=!1){const p=this.elements,g=2*c/(n-t),_=2*c/(a-o),v=(n+t)/(n-t),b=(a+o)/(a-o);let M,w;if(m)M=c/(u-c),w=u*c/(u-c);else if(h===da)M=-(u+c)/(u-c),w=-2*u*c/(u-c);else if(h===ql)M=-u/(u-c),w=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,a,o,c,u,h=da,m=!1){const p=this.elements,g=2/(n-t),_=2/(a-o),v=-(n+t)/(n-t),b=-(a+o)/(a-o);let M,w;if(m)M=1/(u-c),w=u/(u-c);else if(h===da)M=-2/(u-c),w=-(u+c)/(u-c);else if(h===ql)M=-1/(u-c),w=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=_,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=M,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const io=new j,Yi=new nn,LE=new j(0,0,0),UE=new j(1,1,1),Ms=new j,pu=new j,bi=new j,Zv=new nn,Kv=new Ps;class va{constructor(t=0,n=0,a=0,o=va.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,c=o[0],u=o[4],h=o[8],m=o[1],p=o[5],g=o[9],_=o[2],v=o[6],b=o[10];switch(n){case"XYZ":this._y=Math.asin(fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,b),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(fe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,b),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-fe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(fe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,b),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return Zv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zv,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Kv.setFromEuler(this),this.setFromQuaternion(Kv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}va.DEFAULT_ORDER="XYZ";class Ty{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let NE=0;const Qv=new j,ao=new Ps,Ba=new nn,mu=new j,Rl=new j,OE=new j,PE=new Ps,Jv=new j(1,0,0),$v=new j(0,1,0),tx=new j(0,0,1),ex={type:"added"},zE={type:"removed"},so={type:"childadded",child:null},Od={type:"childremoved",child:null};class Tn extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=qa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const t=new j,n=new va,a=new Ps,o=new j(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new nn},normalMatrix:{value:new xe}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ty,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return ao.setFromAxisAngle(t,n),this.quaternion.multiply(ao),this}rotateOnWorldAxis(t,n){return ao.setFromAxisAngle(t,n),this.quaternion.premultiply(ao),this}rotateX(t){return this.rotateOnAxis(Jv,t)}rotateY(t){return this.rotateOnAxis($v,t)}rotateZ(t){return this.rotateOnAxis(tx,t)}translateOnAxis(t,n){return Qv.copy(t).applyQuaternion(this.quaternion),this.position.add(Qv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Jv,t)}translateY(t){return this.translateOnAxis($v,t)}translateZ(t){return this.translateOnAxis(tx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ba.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?mu.copy(t):mu.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ba.lookAt(Rl,mu,this.up):Ba.lookAt(mu,Rl,this.up),this.quaternion.setFromRotationMatrix(Ba),o&&(Ba.extractRotation(o.matrixWorld),ao.setFromRotationMatrix(Ba),this.quaternion.premultiply(ao.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ex),so.child=t,this.dispatchEvent(so),so.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(zE),Od.child=t,this.dispatchEvent(Od),Od.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ba.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ba.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ba),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ex),so.child=t,this.dispatchEvent(so),so.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rl,t,OE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rl,PE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,a=t.y,o=t.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*a-c[8]*o,c[13]+=a-c[1]*n-c[5]*a-c[9]*o,c[14]+=o-c[2]*n-c[6]*a-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(t.animations,m))}}if(n){const h=u(t.geometries),m=u(t.materials),p=u(t.textures),g=u(t.images),_=u(t.shapes),v=u(t.skeletons),b=u(t.animations),M=u(t.nodes);h.length>0&&(a.geometries=h),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),b.length>0&&(a.animations=b),M.length>0&&(a.nodes=M)}return a.object=o,a;function u(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}Tn.DEFAULT_UP=new j(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Je extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const IE={type:"move"};class Pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,c=null,u=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){u=!0;for(const w of t.hand.values()){const y=n.getJointPose(w,a),x=this._getHandJoint(p,w);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),b=.02,M=.005;p.inputState.pinching&&v>b+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=b-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(IE)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Je;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}const Ay={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Es={h:0,s:0,l:0},gu={h:0,s:0,l:0};function zd(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class Me{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Oe.colorSpaceToWorking(this,n),this}setRGB(t,n,a,o=Oe.workingColorSpace){return this.r=t,this.g=n,this.b=a,Oe.colorSpaceToWorking(this,o),this}setHSL(t,n,a,o=Oe.workingColorSpace){if(t=Dm(t,1),n=fe(n,0,1),a=fe(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=zd(u,c,t+1/3),this.g=zd(u,c,t),this.b=zd(u,c,t-1/3)}return Oe.colorSpaceToWorking(this,o),this}setStyle(t,n=Ln){function a(c){c!==void 0&&parseFloat(c)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:oe("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Ln){const a=Ay[t.toLowerCase()];return a!==void 0?this.setHex(a,n):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ya(t.r),this.g=Ya(t.g),this.b=Ya(t.b),this}copyLinearToSRGB(t){return this.r=Ro(t.r),this.g=Ro(t.g),this.b=Ro(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ln){return Oe.workingToColorSpace(qn.copy(this),t),Math.round(fe(qn.r*255,0,255))*65536+Math.round(fe(qn.g*255,0,255))*256+Math.round(fe(qn.b*255,0,255))}getHexString(t=Ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Oe.workingColorSpace){Oe.workingToColorSpace(qn.copy(this),n);const a=qn.r,o=qn.g,c=qn.b,u=Math.max(a,o,c),h=Math.min(a,o,c);let m,p;const g=(h+u)/2;if(h===u)m=0,p=0;else{const _=u-h;switch(p=g<=.5?_/(u+h):_/(2-u-h),u){case a:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-a)/_+2;break;case c:m=(a-o)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,n=Oe.workingColorSpace){return Oe.workingToColorSpace(qn.copy(this),n),t.r=qn.r,t.g=qn.g,t.b=qn.b,t}getStyle(t=Ln){Oe.workingToColorSpace(qn.copy(this),t);const n=qn.r,a=qn.g,o=qn.b;return t!==Ln?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(Es),this.setHSL(Es.h+t,Es.s+n,Es.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Es),t.getHSL(gu);const a=kl(Es.h,gu.h,n),o=kl(Es.s,gu.s,n),c=kl(Es.l,gu.l,n);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qn=new Me;Me.NAMES=Ay;class FE extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new va,this.environmentIntensity=1,this.environmentRotation=new va,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Zi=new j,Ha=new j,Id=new j,Ga=new j,ro=new j,oo=new j,nx=new j,Fd=new j,Bd=new j,Hd=new j,Gd=new Ke,Vd=new Ke,kd=new Ke;class Fi{constructor(t=new j,n=new j,a=new j){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),Zi.subVectors(t,n),o.cross(Zi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,a,o,c){Zi.subVectors(o,n),Ha.subVectors(a,n),Id.subVectors(t,n);const u=Zi.dot(Zi),h=Zi.dot(Ha),m=Zi.dot(Id),p=Ha.dot(Ha),g=Ha.dot(Id),_=u*p-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,b=(p*m-h*g)*v,M=(u*g-h*m)*v;return c.set(1-b-M,M,b)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,Ga)===null?!1:Ga.x>=0&&Ga.y>=0&&Ga.x+Ga.y<=1}static getInterpolation(t,n,a,o,c,u,h,m){return this.getBarycoord(t,n,a,o,Ga)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ga.x),m.addScaledVector(u,Ga.y),m.addScaledVector(h,Ga.z),m)}static getInterpolatedAttribute(t,n,a,o,c,u){return Gd.setScalar(0),Vd.setScalar(0),kd.setScalar(0),Gd.fromBufferAttribute(t,n),Vd.fromBufferAttribute(t,a),kd.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(Gd,c.x),u.addScaledVector(Vd,c.y),u.addScaledVector(kd,c.z),u}static isFrontFacing(t,n,a,o){return Zi.subVectors(a,n),Ha.subVectors(t,n),Zi.cross(Ha).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zi.subVectors(this.c,this.b),Ha.subVectors(this.a,this.b),Zi.cross(Ha).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Fi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,c){return Fi.getInterpolation(t,this.a,this.b,this.c,n,a,o,c)}containsPoint(t){return Fi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,c=this.c;let u,h;ro.subVectors(o,a),oo.subVectors(c,a),Fd.subVectors(t,a);const m=ro.dot(Fd),p=oo.dot(Fd);if(m<=0&&p<=0)return n.copy(a);Bd.subVectors(t,o);const g=ro.dot(Bd),_=oo.dot(Bd);if(g>=0&&_<=g)return n.copy(o);const v=m*_-g*p;if(v<=0&&m>=0&&g<=0)return u=m/(m-g),n.copy(a).addScaledVector(ro,u);Hd.subVectors(t,c);const b=ro.dot(Hd),M=oo.dot(Hd);if(M>=0&&b<=M)return n.copy(c);const w=b*p-m*M;if(w<=0&&p>=0&&M<=0)return h=p/(p-M),n.copy(a).addScaledVector(oo,h);const y=g*M-b*_;if(y<=0&&_-g>=0&&b-M>=0)return nx.subVectors(c,o),h=(_-g)/(_-g+(b-M)),n.copy(o).addScaledVector(nx,h);const x=1/(y+w+v);return u=w*x,h=v*x,n.copy(a).addScaledVector(ro,u).addScaledVector(oo,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class zs{constructor(t=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Ki.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Ki.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Ki.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)t.isMesh===!0?t.getVertexPosition(u,Ki):Ki.fromBufferAttribute(c,u),Ki.applyMatrix4(t.matrixWorld),this.expandByPoint(Ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_u.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),_u.copy(a.boundingBox)),_u.applyMatrix4(t.matrixWorld),this.union(_u)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ki),Ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cl),vu.subVectors(this.max,Cl),lo.subVectors(t.a,Cl),co.subVectors(t.b,Cl),uo.subVectors(t.c,Cl),Ts.subVectors(co,lo),As.subVectors(uo,co),er.subVectors(lo,uo);let n=[0,-Ts.z,Ts.y,0,-As.z,As.y,0,-er.z,er.y,Ts.z,0,-Ts.x,As.z,0,-As.x,er.z,0,-er.x,-Ts.y,Ts.x,0,-As.y,As.x,0,-er.y,er.x,0];return!jd(n,lo,co,uo,vu)||(n=[1,0,0,0,1,0,0,0,1],!jd(n,lo,co,uo,vu))?!1:(xu.crossVectors(Ts,As),n=[xu.x,xu.y,xu.z],jd(n,lo,co,uo,vu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Va),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Va=[new j,new j,new j,new j,new j,new j,new j,new j],Ki=new j,_u=new zs,lo=new j,co=new j,uo=new j,Ts=new j,As=new j,er=new j,Cl=new j,vu=new j,xu=new j,nr=new j;function jd(r,t,n,a,o){for(let c=0,u=r.length-3;c<=u;c+=3){nr.fromArray(r,c);const h=o.x*Math.abs(nr.x)+o.y*Math.abs(nr.y)+o.z*Math.abs(nr.z),m=t.dot(nr),p=n.dot(nr),g=a.dot(nr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const yn=new j,yu=new ne;let BE=0;class Bi{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BE++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=cm,this.updateRanges=[],this.gpuType=ha,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)yu.fromBufferAttribute(this,n),yu.applyMatrix3(t),this.setXY(n,yu.x,yu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)yn.fromBufferAttribute(this,n),yn.applyMatrix3(t),this.setXYZ(n,yn.x,yn.y,yn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)yn.fromBufferAttribute(this,n),yn.applyMatrix4(t),this.setXYZ(n,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)yn.fromBufferAttribute(this,n),yn.applyNormalMatrix(t),this.setXYZ(n,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)yn.fromBufferAttribute(this,n),yn.transformDirection(t),this.setXYZ(n,yn.x,yn.y,yn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=$i(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=je(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=$i(n,this.array)),n}setX(t,n){return this.normalized&&(n=je(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=$i(n,this.array)),n}setY(t,n){return this.normalized&&(n=je(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=$i(n,this.array)),n}setZ(t,n){return this.normalized&&(n=je(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=$i(n,this.array)),n}setW(t,n){return this.normalized&&(n=je(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=je(n,this.array),a=je(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=je(n,this.array),a=je(a,this.array),o=je(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t*=this.itemSize,this.normalized&&(n=je(n,this.array),a=je(a,this.array),o=je(o,this.array),c=je(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cm&&(t.usage=this.usage),t}}class wy extends Bi{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class Ry extends Bi{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class hn extends Bi{constructor(t,n,a){super(new Float32Array(t),n,a)}}const HE=new zs,Dl=new j,Xd=new j;class Po{constructor(t=new j,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):HE.setFromPoints(t).getCenter(a);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Dl.subVectors(t,this.center);const n=Dl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(Dl,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Dl.copy(t.center).add(Xd)),this.expandByPoint(Dl.copy(t.center).sub(Xd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let GE=0;const Oi=new nn,Wd=new Tn,fo=new j,Mi=new zs,Ll=new zs,Cn=new j;class jn extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=qa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sE(t)?Ry:wy)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new xe().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Oi.makeRotationFromQuaternion(t),this.applyMatrix4(Oi),this}rotateX(t){return Oi.makeRotationX(t),this.applyMatrix4(Oi),this}rotateY(t){return Oi.makeRotationY(t),this.applyMatrix4(Oi),this}rotateZ(t){return Oi.makeRotationZ(t),this.applyMatrix4(Oi),this}translate(t,n,a){return Oi.makeTranslation(t,n,a),this.applyMatrix4(Oi),this}scale(t,n,a){return Oi.makeScale(t,n,a),this.applyMatrix4(Oi),this}lookAt(t){return Wd.lookAt(t),Wd.updateMatrix(),this.applyMatrix4(Wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new hn(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zs);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];Mi.setFromBufferAttribute(c),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Po);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const a=this.boundingSphere.center;if(Mi.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];Ll.setFromBufferAttribute(h),this.morphTargetsRelative?(Cn.addVectors(Mi.min,Ll.min),Mi.expandByPoint(Cn),Cn.addVectors(Mi.max,Ll.max),Mi.expandByPoint(Cn)):(Mi.expandByPoint(Ll.min),Mi.expandByPoint(Ll.max))}Mi.getCenter(a);let o=0;for(let c=0,u=t.count;c<u;c++)Cn.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(Cn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Cn.fromBufferAttribute(h,p),m&&(fo.fromBufferAttribute(t,p),Cn.add(fo)),o=Math.max(o,a.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bi(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),h=[],m=[];for(let T=0;T<a.count;T++)h[T]=new j,m[T]=new j;const p=new j,g=new j,_=new j,v=new ne,b=new ne,M=new ne,w=new j,y=new j;function x(T,U,rt){p.fromBufferAttribute(a,T),g.fromBufferAttribute(a,U),_.fromBufferAttribute(a,rt),v.fromBufferAttribute(c,T),b.fromBufferAttribute(c,U),M.fromBufferAttribute(c,rt),g.sub(p),_.sub(p),b.sub(v),M.sub(v);const H=1/(b.x*M.y-M.x*b.y);isFinite(H)&&(w.copy(g).multiplyScalar(M.y).addScaledVector(_,-b.y).multiplyScalar(H),y.copy(_).multiplyScalar(b.x).addScaledVector(g,-M.x).multiplyScalar(H),h[T].add(w),h[U].add(w),h[rt].add(w),m[T].add(y),m[U].add(y),m[rt].add(y))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let T=0,U=A.length;T<U;++T){const rt=A[T],H=rt.start,K=rt.count;for(let et=H,tt=H+K;et<tt;et+=3)x(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const C=new j,L=new j,B=new j,P=new j;function N(T){B.fromBufferAttribute(o,T),P.copy(B);const U=h[T];C.copy(U),C.sub(B.multiplyScalar(B.dot(U))).normalize(),L.crossVectors(P,U);const H=L.dot(m[T])<0?-1:1;u.setXYZW(T,C.x,C.y,C.z,H)}for(let T=0,U=A.length;T<U;++T){const rt=A[T],H=rt.start,K=rt.count;for(let et=H,tt=H+K;et<tt;et+=3)N(t.getX(et+0)),N(t.getX(et+1)),N(t.getX(et+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Bi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,b=a.count;v<b;v++)a.setXYZ(v,0,0,0);const o=new j,c=new j,u=new j,h=new j,m=new j,p=new j,g=new j,_=new j;if(t)for(let v=0,b=t.count;v<b;v+=3){const M=t.getX(v+0),w=t.getX(v+1),y=t.getX(v+2);o.fromBufferAttribute(n,M),c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,y),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),h.fromBufferAttribute(a,M),m.fromBufferAttribute(a,w),p.fromBufferAttribute(a,y),h.add(g),m.add(g),p.add(g),a.setXYZ(M,h.x,h.y,h.z),a.setXYZ(w,m.x,m.y,m.z),a.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,b=n.count;v<b;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Cn.fromBufferAttribute(t,n),Cn.normalize(),t.setXYZ(n,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,_=h.normalized,v=new p.constructor(m.length*g);let b=0,M=0;for(let w=0,y=m.length;w<y;w++){h.isInterleavedBufferAttribute?b=m[w]*h.data.stride+h.offset:b=m[w]*g;for(let x=0;x<g;x++)v[M++]=p[b++]}return new Bi(v,g,_)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new jn,a=this.index.array,o=this.attributes;for(const h in o){const m=o[h],p=t(m,a);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,_=p.length;g<_;g++){const v=p[g],b=t(v,a);m.push(b)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const p=u[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];t.data.attributes[m]=p.toJSON(t.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,v=p.length;_<v;_++){const b=p[_];g.push(b.toJSON(t.data))}g.length>0&&(o[m]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let v=0,b=_.length;v<b;v++)g.push(_[v].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let p=0,g=u.length;p<g;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cy{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=cm,this.updateRanges=[],this.version=0,this.uuid=qa()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,a){t*=this.stride,a*=n.stride;for(let o=0,c=this.stride;o<c;o++)this.array[t+o]=n.array[a+o];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qa()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qa()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ti=new j;class pa{constructor(t,n,a,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=a,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,a=this.data.count;n<a;n++)ti.fromBufferAttribute(this,n),ti.applyMatrix4(t),this.setXYZ(n,ti.x,ti.y,ti.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)ti.fromBufferAttribute(this,n),ti.applyNormalMatrix(t),this.setXYZ(n,ti.x,ti.y,ti.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)ti.fromBufferAttribute(this,n),ti.transformDirection(t),this.setXYZ(n,ti.x,ti.y,ti.z);return this}getComponent(t,n){let a=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(a=$i(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=je(a,this.array)),this.data.array[t*this.data.stride+this.offset+n]=a,this}setX(t,n){return this.normalized&&(n=je(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=je(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=je(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=je(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=$i(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=$i(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=$i(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=$i(n,this.array)),n}setXY(t,n,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=je(n,this.array),a=je(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this}setXYZ(t,n,a,o){return t=t*this.data.stride+this.offset,this.normalized&&(n=je(n,this.array),a=je(a,this.array),o=je(o,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t=t*this.data.stride+this.offset,this.normalized&&(n=je(n,this.array),a=je(a,this.array),o=je(o,this.array),c=je(c,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=o,this.data.array[t+3]=c,this}clone(t){if(t===void 0){lf("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return new Bi(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new pa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){lf("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let VE=0;class vr extends _r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=qa(),this.name="",this.type="Material",this.blending=wo,this.side=Os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yp,this.blendDst=Sp,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){oe(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){oe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==wo&&(a.blending=this.blending),this.side!==Os&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==yp&&(a.blendSrc=this.blendSrc),this.blendDst!==Sp&&(a.blendDst=this.blendDst),this.blendEquation!==cr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Do&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==eo&&(a.stencilFail=this.stencilFail),this.stencilZFail!==eo&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==eo&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class uf extends vr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ho;const Ul=new j,po=new j,mo=new j,go=new ne,Nl=new ne,Dy=new nn,Su=new j,Ol=new j,bu=new j,ix=new ne,qd=new ne,ax=new ne;class um extends Tn{constructor(t=new uf){if(super(),this.isSprite=!0,this.type="Sprite",ho===void 0){ho=new jn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new Cy(n,5);ho.setIndex([0,1,2,0,2,3]),ho.setAttribute("position",new pa(a,3,0,!1)),ho.setAttribute("uv",new pa(a,2,3,!1))}this.geometry=ho,this.material=t,this.center=new ne(.5,.5),this.count=1}raycast(t,n){t.camera===null&&Ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),po.setFromMatrixScale(this.matrixWorld),Dy.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),mo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&po.multiplyScalar(-mo.z);const a=this.material.rotation;let o,c;a!==0&&(c=Math.cos(a),o=Math.sin(a));const u=this.center;Mu(Su.set(-.5,-.5,0),mo,u,po,o,c),Mu(Ol.set(.5,-.5,0),mo,u,po,o,c),Mu(bu.set(.5,.5,0),mo,u,po,o,c),ix.set(0,0),qd.set(1,0),ax.set(1,1);let h=t.ray.intersectTriangle(Su,Ol,bu,!1,Ul);if(h===null&&(Mu(Ol.set(-.5,.5,0),mo,u,po,o,c),qd.set(0,1),h=t.ray.intersectTriangle(Su,bu,Ol,!1,Ul),h===null))return;const m=t.ray.origin.distanceTo(Ul);m<t.near||m>t.far||n.push({distance:m,point:Ul.clone(),uv:Fi.getInterpolation(Ul,Su,Ol,bu,ix,qd,ax,new ne),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Mu(r,t,n,a,o,c){go.subVectors(r,n).addScalar(.5).multiply(a),o!==void 0?(Nl.x=c*go.x-o*go.y,Nl.y=o*go.x+c*go.y):Nl.copy(go),r.copy(t),r.x+=Nl.x,r.y+=Nl.y,r.applyMatrix4(Dy)}const ka=new j,Yd=new j,Eu=new j,ws=new j,Zd=new j,Tu=new j,Kd=new j;class Um{constructor(t=new j,n=new j(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ka)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ka.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ka.copy(this.origin).addScaledVector(this.direction,n),ka.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){Yd.copy(t).add(n).multiplyScalar(.5),Eu.copy(n).sub(t).normalize(),ws.copy(this.origin).sub(Yd);const c=t.distanceTo(n)*.5,u=-this.direction.dot(Eu),h=ws.dot(this.direction),m=-ws.dot(Eu),p=ws.lengthSq(),g=Math.abs(1-u*u);let _,v,b,M;if(g>0)if(_=u*m-h,v=u*h-m,M=c*g,_>=0)if(v>=-M)if(v<=M){const w=1/g;_*=w,v*=w,b=_*(_+u*v+2*h)+v*(u*_+v+2*m)+p}else v=c,_=Math.max(0,-(u*v+h)),b=-_*_+v*(v+2*m)+p;else v=-c,_=Math.max(0,-(u*v+h)),b=-_*_+v*(v+2*m)+p;else v<=-M?(_=Math.max(0,-(-u*c+h)),v=_>0?-c:Math.min(Math.max(-c,-m),c),b=-_*_+v*(v+2*m)+p):v<=M?(_=0,v=Math.min(Math.max(-c,-m),c),b=v*(v+2*m)+p):(_=Math.max(0,-(u*c+h)),v=_>0?c:Math.min(Math.max(-c,-m),c),b=-_*_+v*(v+2*m)+p);else v=u>0?-c:c,_=Math.max(0,-(u*v+h)),b=-_*_+v*(v+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Yd).addScaledVector(Eu,v),b}intersectSphere(t,n){ka.subVectors(t.center,this.origin);const a=ka.dot(this.direction),o=ka.dot(ka)-a*a,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=a-u,m=a+u;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,c,u,h,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(a=(t.min.x-v.x)*p,o=(t.max.x-v.x)*p):(a=(t.max.x-v.x)*p,o=(t.min.x-v.x)*p),g>=0?(c=(t.min.y-v.y)*g,u=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,u=(t.min.y-v.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),_>=0?(h=(t.min.z-v.z)*_,m=(t.max.z-v.z)*_):(h=(t.max.z-v.z)*_,m=(t.min.z-v.z)*_),a>m||h>o)||((h>a||a!==a)&&(a=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,ka)!==null}intersectTriangle(t,n,a,o,c){Zd.subVectors(n,t),Tu.subVectors(a,t),Kd.crossVectors(Zd,Tu);let u=this.direction.dot(Kd),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;ws.subVectors(this.origin,t);const m=h*this.direction.dot(Tu.crossVectors(ws,Tu));if(m<0)return null;const p=h*this.direction.dot(Zd.cross(ws));if(p<0||m+p>u)return null;const g=-h*ws.dot(Kd);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ei extends vr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new va,this.combine=Sm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const sx=new nn,ir=new Um,Au=new Po,rx=new j,wu=new j,Ru=new j,Cu=new j,Qd=new j,Du=new j,ox=new j,Lu=new j;class en extends Tn{constructor(t=new jn,n=new ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){Du.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],_=c[m];g!==0&&(Qd.fromBufferAttribute(_,t),u?Du.addScaledVector(Qd,g):Du.addScaledVector(Qd.sub(n),g))}n.add(Du)}return n}raycast(t,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Au.copy(a.boundingSphere),Au.applyMatrix4(c),ir.copy(t.ray).recast(t.near),!(Au.containsPoint(ir.origin)===!1&&(ir.intersectSphere(Au,rx)===null||ir.origin.distanceToSquared(rx)>(t.far-t.near)**2))&&(sx.copy(c).invert(),ir.copy(t.ray).applyMatrix4(sx),!(a.boundingBox!==null&&ir.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,ir)))}_computeIntersections(t,n,a){let o;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,b=c.drawRange;if(h!==null)if(Array.isArray(u))for(let M=0,w=v.length;M<w;M++){const y=v[M],x=u[y.materialIndex],A=Math.max(y.start,b.start),C=Math.min(h.count,Math.min(y.start+y.count,b.start+b.count));for(let L=A,B=C;L<B;L+=3){const P=h.getX(L),N=h.getX(L+1),T=h.getX(L+2);o=Uu(this,x,t,a,p,g,_,P,N,T),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const M=Math.max(0,b.start),w=Math.min(h.count,b.start+b.count);for(let y=M,x=w;y<x;y+=3){const A=h.getX(y),C=h.getX(y+1),L=h.getX(y+2);o=Uu(this,u,t,a,p,g,_,A,C,L),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let M=0,w=v.length;M<w;M++){const y=v[M],x=u[y.materialIndex],A=Math.max(y.start,b.start),C=Math.min(m.count,Math.min(y.start+y.count,b.start+b.count));for(let L=A,B=C;L<B;L+=3){const P=L,N=L+1,T=L+2;o=Uu(this,x,t,a,p,g,_,P,N,T),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const M=Math.max(0,b.start),w=Math.min(m.count,b.start+b.count);for(let y=M,x=w;y<x;y+=3){const A=y,C=y+1,L=y+2;o=Uu(this,u,t,a,p,g,_,A,C,L),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function kE(r,t,n,a,o,c,u,h){let m;if(t.side===ii?m=a.intersectTriangle(u,c,o,!0,h):m=a.intersectTriangle(o,c,u,t.side===Os,h),m===null)return null;Lu.copy(h),Lu.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(Lu);return p<n.near||p>n.far?null:{distance:p,point:Lu.clone(),object:r}}function Uu(r,t,n,a,o,c,u,h,m,p){r.getVertexPosition(h,wu),r.getVertexPosition(m,Ru),r.getVertexPosition(p,Cu);const g=kE(r,t,n,a,wu,Ru,Cu,ox);if(g){const _=new j;Fi.getBarycoord(ox,wu,Ru,Cu,_),o&&(g.uv=Fi.getInterpolatedAttribute(o,h,m,p,_,new ne)),c&&(g.uv1=Fi.getInterpolatedAttribute(c,h,m,p,_,new ne)),u&&(g.normal=Fi.getInterpolatedAttribute(u,h,m,p,_,new j),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:m,c:p,normal:new j,materialIndex:0};Fi.getNormal(wu,Ru,Cu,v.normal),g.face=v,g.barycoord=_}return g}class jE extends Vn{constructor(t=null,n=1,a=1,o,c,u,h,m,p=Gn,g=Gn,_,v){super(null,u,h,m,p,g,o,c,_,v),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jd=new j,XE=new j,WE=new xe;class Ls{constructor(t=new j(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=Jd.subVectors(a,n).cross(XE.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Jd),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||WE.getNormalMatrix(t),o=this.coplanarPoint(Jd).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new Po,qE=new ne(.5,.5),Nu=new j;class Nm{constructor(t=new Ls,n=new Ls,a=new Ls,o=new Ls,c=new Ls,u=new Ls){this.planes=[t,n,a,o,c,u]}set(t,n,a,o,c,u){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=da,a=!1){const o=this.planes,c=t.elements,u=c[0],h=c[1],m=c[2],p=c[3],g=c[4],_=c[5],v=c[6],b=c[7],M=c[8],w=c[9],y=c[10],x=c[11],A=c[12],C=c[13],L=c[14],B=c[15];if(o[0].setComponents(p-u,b-g,x-M,B-A).normalize(),o[1].setComponents(p+u,b+g,x+M,B+A).normalize(),o[2].setComponents(p+h,b+_,x+w,B+C).normalize(),o[3].setComponents(p-h,b-_,x-w,B-C).normalize(),a)o[4].setComponents(m,v,y,L).normalize(),o[5].setComponents(p-m,b-v,x-y,B-L).normalize();else if(o[4].setComponents(p-m,b-v,x-y,B-L).normalize(),n===da)o[5].setComponents(p+m,b+v,x+y,B+L).normalize();else if(n===ql)o[5].setComponents(m,v,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(t){ar.center.set(0,0,0);const n=qE.distanceTo(t.center);return ar.radius=.7071067811865476+n,ar.applyMatrix4(t.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Nu.x=o.normal.x>0?t.max.x:t.min.x,Nu.y=o.normal.y>0?t.max.y:t.min.y,Nu.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Nu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ly extends vr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const lx=new nn,fm=new Um,Ou=new Po,Pu=new j;class YE extends Tn{constructor(t=new jn,n=new Ly){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,o=this.matrixWorld,c=t.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Ou.copy(a.boundingSphere),Ou.applyMatrix4(o),Ou.radius+=c,t.ray.intersectsSphere(Ou)===!1)return;lx.copy(o).invert(),fm.copy(t.ray).applyMatrix4(lx);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=a.index,_=a.attributes.position;if(p!==null){const v=Math.max(0,u.start),b=Math.min(p.count,u.start+u.count);for(let M=v,w=b;M<w;M++){const y=p.getX(M);Pu.fromBufferAttribute(_,y),cx(Pu,y,m,o,t,n,this)}}else{const v=Math.max(0,u.start),b=Math.min(_.count,u.start+u.count);for(let M=v,w=b;M<w;M++)Pu.fromBufferAttribute(_,M),cx(Pu,M,m,o,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function cx(r,t,n,a,o,c,u){const h=fm.distanceSqToPoint(r);if(h<n){const m=new j;fm.closestPointToPoint(r,m),m.applyMatrix4(a);const p=o.ray.origin.distanceTo(m);if(p<o.near||p>o.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:u})}}class Uy extends Vn{constructor(t=[],n=gr,a,o,c,u,h,m,p,g){super(t,n,a,o,c,u,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class af extends Vn{constructor(t,n,a,o,c,u,h,m,p){super(t,n,a,o,c,u,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Kl extends Vn{constructor(t,n,a=_a,o,c,u,h=Gn,m=Gn,p,g=Ka,_=1){if(g!==Ka&&g!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:_};super(v,o,c,u,h,m,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Lm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class ZE extends Kl{constructor(t,n=_a,a=gr,o,c,u=Gn,h=Gn,m,p=Ka){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,n,a,o,c,u,h,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ny extends Vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Jl extends jn{constructor(t=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],g=[],_=[];let v=0,b=0;M("z","y","x",-1,-1,a,n,t,u,c,0),M("z","y","x",1,-1,a,n,-t,u,c,1),M("x","z","y",1,1,t,a,n,o,u,2),M("x","z","y",1,-1,t,a,-n,o,u,3),M("x","y","z",1,-1,t,n,a,o,c,4),M("x","y","z",-1,-1,t,n,-a,o,c,5),this.setIndex(m),this.setAttribute("position",new hn(p,3)),this.setAttribute("normal",new hn(g,3)),this.setAttribute("uv",new hn(_,2));function M(w,y,x,A,C,L,B,P,N,T,U){const rt=L/N,H=B/T,K=L/2,et=B/2,tt=P/2,J=N+1,z=T+1;let G=0,ut=0;const mt=new j;for(let Et=0;Et<z;Et++){const F=Et*H-et;for(let q=0;q<J;q++){const V=q*rt-K;mt[w]=V*A,mt[y]=F*C,mt[x]=tt,p.push(mt.x,mt.y,mt.z),mt[w]=0,mt[y]=0,mt[x]=P>0?1:-1,g.push(mt.x,mt.y,mt.z),_.push(q/N),_.push(1-Et/T),G+=1}}for(let Et=0;Et<T;Et++)for(let F=0;F<N;F++){const q=v+F+J*Et,V=v+F+J*(Et+1),ht=v+(F+1)+J*(Et+1),Rt=v+(F+1)+J*Et;m.push(q,V,Rt),m.push(V,ht,Rt),ut+=6}h.addGroup(b,ut,U),b+=ut,v+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Om extends jn{constructor(t=1,n=1,a=1,o=32,c=1,u=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:h,thetaLength:m};const p=this;o=Math.floor(o),c=Math.floor(c);const g=[],_=[],v=[],b=[];let M=0;const w=[],y=a/2;let x=0;A(),u===!1&&(t>0&&C(!0),n>0&&C(!1)),this.setIndex(g),this.setAttribute("position",new hn(_,3)),this.setAttribute("normal",new hn(v,3)),this.setAttribute("uv",new hn(b,2));function A(){const L=new j,B=new j;let P=0;const N=(n-t)/a;for(let T=0;T<=c;T++){const U=[],rt=T/c,H=rt*(n-t)+t;for(let K=0;K<=o;K++){const et=K/o,tt=et*m+h,J=Math.sin(tt),z=Math.cos(tt);B.x=H*J,B.y=-rt*a+y,B.z=H*z,_.push(B.x,B.y,B.z),L.set(J,N,z).normalize(),v.push(L.x,L.y,L.z),b.push(et,1-rt),U.push(M++)}w.push(U)}for(let T=0;T<o;T++)for(let U=0;U<c;U++){const rt=w[U][T],H=w[U+1][T],K=w[U+1][T+1],et=w[U][T+1];(t>0||U!==0)&&(g.push(rt,H,et),P+=3),(n>0||U!==c-1)&&(g.push(H,K,et),P+=3)}p.addGroup(x,P,0),x+=P}function C(L){const B=M,P=new ne,N=new j;let T=0;const U=L===!0?t:n,rt=L===!0?1:-1;for(let K=1;K<=o;K++)_.push(0,y*rt,0),v.push(0,rt,0),b.push(.5,.5),M++;const H=M;for(let K=0;K<=o;K++){const tt=K/o*m+h,J=Math.cos(tt),z=Math.sin(tt);N.x=U*z,N.y=y*rt,N.z=U*J,_.push(N.x,N.y,N.z),v.push(0,rt,0),P.x=J*.5+.5,P.y=z*.5*rt+.5,b.push(P.x,P.y),M++}for(let K=0;K<o;K++){const et=B+K,tt=H+K;L===!0?g.push(tt,tt+1,et):g.push(tt+1,tt,et),T+=3}p.addGroup(x,T,L===!0?1:2),x+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Om(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ff extends Om{constructor(t=1,n=1,a=32,o=1,c=!1,u=0,h=Math.PI*2){super(0,t,n,a,o,c,u,h),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:a,heightSegments:o,openEnded:c,thetaStart:u,thetaLength:h}}static fromJSON(t){return new ff(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $l extends jn{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const c=t/2,u=n/2,h=Math.floor(a),m=Math.floor(o),p=h+1,g=m+1,_=t/h,v=n/m,b=[],M=[],w=[],y=[];for(let x=0;x<g;x++){const A=x*v-u;for(let C=0;C<p;C++){const L=C*_-c;M.push(L,-A,0),w.push(0,0,1),y.push(C/h),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let A=0;A<h;A++){const C=A+p*x,L=A+p*(x+1),B=A+1+p*(x+1),P=A+1+p*x;b.push(C,L,P),b.push(L,B,P)}this.setIndex(b),this.setAttribute("position",new hn(M,3)),this.setAttribute("normal",new hn(w,3)),this.setAttribute("uv",new hn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $l(t.width,t.height,t.widthSegments,t.heightSegments)}}class Pm extends jn{constructor(t=.5,n=1,a=32,o=1,c=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:a,phiSegments:o,thetaStart:c,thetaLength:u},a=Math.max(3,a),o=Math.max(1,o);const h=[],m=[],p=[],g=[];let _=t;const v=(n-t)/o,b=new j,M=new ne;for(let w=0;w<=o;w++){for(let y=0;y<=a;y++){const x=c+y/a*u;b.x=_*Math.cos(x),b.y=_*Math.sin(x),m.push(b.x,b.y,b.z),p.push(0,0,1),M.x=(b.x/n+1)/2,M.y=(b.y/n+1)/2,g.push(M.x,M.y)}_+=v}for(let w=0;w<o;w++){const y=w*(a+1);for(let x=0;x<a;x++){const A=x+y,C=A,L=A+a+1,B=A+a+2,P=A+1;h.push(C,L,P),h.push(L,B,P)}}this.setIndex(h),this.setAttribute("position",new hn(m,3)),this.setAttribute("normal",new hn(p,3)),this.setAttribute("uv",new hn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pm(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class zi extends jn{constructor(t=1,n=32,a=16,o=0,c=Math.PI*2,u=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:o,phiLength:c,thetaStart:u,thetaLength:h},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const m=Math.min(u+h,Math.PI);let p=0;const g=[],_=new j,v=new j,b=[],M=[],w=[],y=[];for(let x=0;x<=a;x++){const A=[],C=x/a;let L=0;x===0&&u===0?L=.5/n:x===a&&m===Math.PI&&(L=-.5/n);for(let B=0;B<=n;B++){const P=B/n;_.x=-t*Math.cos(o+P*c)*Math.sin(u+C*h),_.y=t*Math.cos(u+C*h),_.z=t*Math.sin(o+P*c)*Math.sin(u+C*h),M.push(_.x,_.y,_.z),v.copy(_).normalize(),w.push(v.x,v.y,v.z),y.push(P+L,1-C),A.push(p++)}g.push(A)}for(let x=0;x<a;x++)for(let A=0;A<n;A++){const C=g[x][A+1],L=g[x][A],B=g[x+1][A],P=g[x+1][A+1];(x!==0||u>0)&&b.push(C,L,P),(x!==a-1||m<Math.PI)&&b.push(L,B,P)}this.setIndex(b),this.setAttribute("position",new hn(M,3)),this.setAttribute("normal",new hn(w,3)),this.setAttribute("uv",new hn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class KE extends jn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const n=[],a=new Set,o=new j,c=new j;if(t.index!==null){const u=t.attributes.position,h=t.index;let m=t.groups;m.length===0&&(m=[{start:0,count:h.count,materialIndex:0}]);for(let p=0,g=m.length;p<g;++p){const _=m[p],v=_.start,b=_.count;for(let M=v,w=v+b;M<w;M+=3)for(let y=0;y<3;y++){const x=h.getX(M+y),A=h.getX(M+(y+1)%3);o.fromBufferAttribute(u,x),c.fromBufferAttribute(u,A),ux(o,c,a)===!0&&(n.push(o.x,o.y,o.z),n.push(c.x,c.y,c.z))}}}else{const u=t.attributes.position;for(let h=0,m=u.count/3;h<m;h++)for(let p=0;p<3;p++){const g=3*h+p,_=3*h+(p+1)%3;o.fromBufferAttribute(u,g),c.fromBufferAttribute(u,_),ux(o,c,a)===!0&&(n.push(o.x,o.y,o.z),n.push(c.x,c.y,c.z))}}this.setAttribute("position",new hn(n,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function ux(r,t,n){const a=`${r.x},${r.y},${r.z}-${t.x},${t.y},${t.z}`,o=`${t.x},${t.y},${t.z}-${r.x},${r.y},${r.z}`;return n.has(a)===!0||n.has(o)===!0?!1:(n.add(a),n.add(o),!0)}function Oo(r){const t={};for(const n in r){t[n]={};for(const a in r[n]){const o=r[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone():Array.isArray(o)?t[n][a]=o.slice():t[n][a]=o}}return t}function ni(r){const t={};for(let n=0;n<r.length;n++){const a=Oo(r[n]);for(const o in a)t[o]=a[o]}return t}function QE(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function Oy(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Oe.workingColorSpace}const zm={clone:Oo,merge:ni};var JE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$E=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends vr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JE,this.fragmentShader=$E,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Oo(t.uniforms),this.uniformsGroups=QE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class t1 extends Hi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class e1 extends vr{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Me(16777215),this.specular=new Me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sy,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new va,this.combine=Sm,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class n1 extends vr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=QM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class i1 extends vr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const $d={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(fx(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!fx(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function fx(r){try{const t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class a1{constructor(t,n,a){const o=this;let c=!1,u=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(g){h++,c===!1&&o.onStart!==void 0&&o.onStart(g,u,h),c=!0},this.itemEnd=function(g){u++,o.onProgress!==void 0&&o.onProgress(g,u,h),u===h&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=p.length;_<v;_+=2){const b=p[_],M=p[_+1];if(b.global&&(b.lastIndex=0),b.test(g))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const s1=new a1;class Im{constructor(t){this.manager=t!==void 0?t:s1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){const a=this;return new Promise(function(o,c){a.load(t,o,n,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Im.DEFAULT_MATERIAL_NAME="__DEFAULT";const _o=new WeakMap;class r1 extends Im{constructor(t){super(t)}load(t,n,a,o){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,u=$d.get(`image:${t}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(t),setTimeout(function(){n&&n(u),c.manager.itemEnd(t)},0);else{let _=_o.get(u);_===void 0&&(_=[],_o.set(u,_)),_.push({onLoad:n,onError:o})}return u}const h=Yl("img");function m(){g(),n&&n(this);const _=_o.get(this)||[];for(let v=0;v<_.length;v++){const b=_[v];b.onLoad&&b.onLoad(this)}_o.delete(this),c.manager.itemEnd(t)}function p(_){g(),o&&o(_),$d.remove(`image:${t}`);const v=_o.get(this)||[];for(let b=0;b<v.length;b++){const M=v[b];M.onError&&M.onError(_)}_o.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),$d.add(`image:${t}`,h),c.manager.itemStart(t),h.src=t,h}}class o1 extends Im{constructor(t){super(t)}load(t,n,a,o){const c=new Vn,u=new r1(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(t,function(h){c.image=h,c.needsUpdate=!0,n!==void 0&&n(c)},a,o),c}}class Fm extends Tn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class l1 extends Fm{constructor(t,n,a){super(t,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){const n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}}const tp=new nn,hx=new j,dx=new j;class c1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=Ti,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nm,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;hx.setFromMatrixPosition(t.matrixWorld),n.position.copy(hx),dx.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(dx),n.updateMatrixWorld(),tp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tp,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===ql||n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(tp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const zu=new j,Iu=new Ps,ra=new j;class Py extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=da,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(zu,Iu,ra),ra.x===1&&ra.y===1&&ra.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zu,Iu,ra.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(zu,Iu,ra),ra.x===1&&ra.y===1&&ra.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zu,Iu,ra.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Rs=new j,px=new ne,mx=new ne;class Ii extends Py{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Zl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zl*2*Math.atan(Math.tan(Vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rs.x,Rs.y).multiplyScalar(-t/Rs.z),Rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Rs.x,Rs.y).multiplyScalar(-t/Rs.z)}getViewSize(t,n){return this.getViewBounds(t,px,mx),n.subVectors(mx,px)}setViewOffset(t,n,a,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Vl*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*a/p,o*=u.width/m,a*=u.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Bm extends Py{constructor(t=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,u=a+t,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class u1 extends c1{constructor(){super(new Bm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class f1 extends Fm{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new u1}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class h1 extends Fm{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class d1 extends jn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}const vo=-90,xo=1;class p1 extends Tn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ii(vo,xo,t,n);o.layers=this.layers,this.add(o);const c=new Ii(vo,xo,t,n);c.layers=this.layers,this.add(c);const u=new Ii(vo,xo,t,n);u.layers=this.layers,this.add(u);const h=new Ii(vo,xo,t,n);h.layers=this.layers,this.add(h);const m=new Ii(vo,xo,t,n);m.layers=this.layers,this.add(m);const p=new Ii(vo,xo,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,h,m]=n;for(const p of n)this.remove(p);if(t===da)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===ql)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,p,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const w=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(a,0,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(a,1,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(a,2,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(a,3,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,m),t.setRenderTarget(a,4,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,p),a.texture.generateMipmaps=w,t.setRenderTarget(a,5,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,g),t.setRenderTarget(_,v,b),t.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class m1 extends Ii{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class hm extends Cy{constructor(t,n,a=1){super(t,n),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=a}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const n=super.clone(t);return n.meshPerAttribute=this.meshPerAttribute,n}toJSON(t){const n=super.toJSON(t);return n.isInstancedInterleavedBuffer=!0,n.meshPerAttribute=this.meshPerAttribute,n}}class gx{constructor(t=1,n=0,a=0){this.radius=t,this.phi=n,this.theta=a}set(t,n,a){return this.radius=t,this.phi=n,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=fe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,a){return this.radius=Math.sqrt(t*t+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(fe(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const _x=new j,Fu=new j,yo=new j,So=new j,ep=new j,g1=new j,_1=new j;class v1{constructor(t=new j,n=new j){this.start=t,this.end=n}set(t,n){return this.start.copy(t),this.end.copy(n),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,n){return this.delta(n).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,n){_x.subVectors(t,this.start),Fu.subVectors(this.end,this.start);const a=Fu.dot(Fu);let c=Fu.dot(_x)/a;return n&&(c=fe(c,0,1)),c}closestPointToPoint(t,n,a){const o=this.closestPointToPointParameter(t,n);return this.delta(a).multiplyScalar(o).add(this.start)}distanceSqToLine3(t,n=g1,a=_1){const o=10000000000000001e-32;let c,u;const h=this.start,m=t.start,p=this.end,g=t.end;yo.subVectors(p,h),So.subVectors(g,m),ep.subVectors(h,m);const _=yo.dot(yo),v=So.dot(So),b=So.dot(ep);if(_<=o&&v<=o)return n.copy(h),a.copy(m),n.sub(a),n.dot(n);if(_<=o)c=0,u=b/v,u=fe(u,0,1);else{const M=yo.dot(ep);if(v<=o)u=0,c=fe(-M/_,0,1);else{const w=yo.dot(So),y=_*v-w*w;y!==0?c=fe((w*b-M*v)/y,0,1):c=0,u=(w*c+b)/v,u<0?(u=0,c=fe(-M/_,0,1)):u>1&&(u=1,c=fe((w-M)/_,0,1))}}return n.copy(h).addScaledVector(yo,c),a.copy(m).addScaledVector(So,u),n.distanceToSquared(a)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class x1 extends _r{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){oe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function vx(r,t,n,a){const o=y1(a);switch(n){case vy:return r*t;case yy:return r*t/o.components*o.byteLength;case Tm:return r*t/o.components*o.byteLength;case Uo:return r*t*2/o.components*o.byteLength;case Am:return r*t*2/o.components*o.byteLength;case xy:return r*t*3/o.components*o.byteLength;case ta:return r*t*4/o.components*o.byteLength;case wm:return r*t*4/o.components*o.byteLength;case $u:case tf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ef:case nf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Up:case Op:return Math.max(r,16)*Math.max(t,8)/4;case Lp:case Np:return Math.max(r,8)*Math.max(t,8)/2;case Pp:case zp:case Fp:case Bp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ip:case Hp:case Gp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Vp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case kp:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case jp:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Xp:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Wp:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case qp:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Yp:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Zp:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Kp:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Qp:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Jp:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case $p:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case tm:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case em:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case nm:case im:case am:return Math.ceil(r/4)*Math.ceil(t/4)*16;case sm:case rm:return Math.ceil(r/4)*Math.ceil(t/4)*8;case om:case lm:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function y1(r){switch(r){case Ti:case py:return{byteLength:1,components:1};case Xl:case my:case Za:return{byteLength:2,components:1};case Mm:case Em:return{byteLength:2,components:4};case _a:case bm:case ha:return{byteLength:4,components:1};case gy:case _y:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ym}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ym);function zy(){let r=null,t=!1,n=null,a=null;function o(c,u){n(c,u),a=r.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(a=r.requestAnimationFrame(o),t=!0)},stop:function(){r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function S1(r){const t=new WeakMap;function n(h,m){const p=h.array,g=h.usage,_=p.byteLength,v=r.createBuffer();r.bindBuffer(m,v),r.bufferData(m,p,g),h.onUploadCallback();let b;if(p instanceof Float32Array)b=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?b=r.HALF_FLOAT:b=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=r.SHORT;else if(p instanceof Uint32Array)b=r.UNSIGNED_INT;else if(p instanceof Int32Array)b=r.INT;else if(p instanceof Int8Array)b=r.BYTE;else if(p instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,h),_.length===0)r.bufferSubData(p,0,g);else{_.sort((b,M)=>b.start-M.start);let v=0;for(let b=1;b<_.length;b++){const M=_[v],w=_[b];w.start<=M.start+M.count+1?M.count=Math.max(M.count,w.start+w.count-M.start):(++v,_[v]=w)}_.length=v+1;for(let b=0,M=_.length;b<M;b++){const w=_[b];r.bufferSubData(p,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,m),p.version=h.version}}return{get:o,remove:c,update:u}}var b1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,M1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,E1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,T1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,w1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,C1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,L1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,P1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,z1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,I1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,H1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,V1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,k1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,j1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,X1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,W1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,q1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Y1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Q1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J1="gl_FragColor = linearToOutputTexel( gl_FragColor );",$1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,eT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_T=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ST=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,MT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ET=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,LT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,FT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,HT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,GT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,XT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,QT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$T=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,aA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_A=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,RA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,CA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,LA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,HA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,VA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,WA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,KA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$A=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ye={alphahash_fragment:b1,alphahash_pars_fragment:M1,alphamap_fragment:E1,alphamap_pars_fragment:T1,alphatest_fragment:A1,alphatest_pars_fragment:w1,aomap_fragment:R1,aomap_pars_fragment:C1,batching_pars_vertex:D1,batching_vertex:L1,begin_vertex:U1,beginnormal_vertex:N1,bsdfs:O1,iridescence_fragment:P1,bumpmap_pars_fragment:z1,clipping_planes_fragment:I1,clipping_planes_pars_fragment:F1,clipping_planes_pars_vertex:B1,clipping_planes_vertex:H1,color_fragment:G1,color_pars_fragment:V1,color_pars_vertex:k1,color_vertex:j1,common:X1,cube_uv_reflection_fragment:W1,defaultnormal_vertex:q1,displacementmap_pars_vertex:Y1,displacementmap_vertex:Z1,emissivemap_fragment:K1,emissivemap_pars_fragment:Q1,colorspace_fragment:J1,colorspace_pars_fragment:$1,envmap_fragment:tT,envmap_common_pars_fragment:eT,envmap_pars_fragment:nT,envmap_pars_vertex:iT,envmap_physical_pars_fragment:pT,envmap_vertex:aT,fog_vertex:sT,fog_pars_vertex:rT,fog_fragment:oT,fog_pars_fragment:lT,gradientmap_pars_fragment:cT,lightmap_pars_fragment:uT,lights_lambert_fragment:fT,lights_lambert_pars_fragment:hT,lights_pars_begin:dT,lights_toon_fragment:mT,lights_toon_pars_fragment:gT,lights_phong_fragment:_T,lights_phong_pars_fragment:vT,lights_physical_fragment:xT,lights_physical_pars_fragment:yT,lights_fragment_begin:ST,lights_fragment_maps:bT,lights_fragment_end:MT,logdepthbuf_fragment:ET,logdepthbuf_pars_fragment:TT,logdepthbuf_pars_vertex:AT,logdepthbuf_vertex:wT,map_fragment:RT,map_pars_fragment:CT,map_particle_fragment:DT,map_particle_pars_fragment:LT,metalnessmap_fragment:UT,metalnessmap_pars_fragment:NT,morphinstance_vertex:OT,morphcolor_vertex:PT,morphnormal_vertex:zT,morphtarget_pars_vertex:IT,morphtarget_vertex:FT,normal_fragment_begin:BT,normal_fragment_maps:HT,normal_pars_fragment:GT,normal_pars_vertex:VT,normal_vertex:kT,normalmap_pars_fragment:jT,clearcoat_normal_fragment_begin:XT,clearcoat_normal_fragment_maps:WT,clearcoat_pars_fragment:qT,iridescence_pars_fragment:YT,opaque_fragment:ZT,packing:KT,premultiplied_alpha_fragment:QT,project_vertex:JT,dithering_fragment:$T,dithering_pars_fragment:tA,roughnessmap_fragment:eA,roughnessmap_pars_fragment:nA,shadowmap_pars_fragment:iA,shadowmap_pars_vertex:aA,shadowmap_vertex:sA,shadowmask_pars_fragment:rA,skinbase_vertex:oA,skinning_pars_vertex:lA,skinning_vertex:cA,skinnormal_vertex:uA,specularmap_fragment:fA,specularmap_pars_fragment:hA,tonemapping_fragment:dA,tonemapping_pars_fragment:pA,transmission_fragment:mA,transmission_pars_fragment:gA,uv_pars_fragment:_A,uv_pars_vertex:vA,uv_vertex:xA,worldpos_vertex:yA,background_vert:SA,background_frag:bA,backgroundCube_vert:MA,backgroundCube_frag:EA,cube_vert:TA,cube_frag:AA,depth_vert:wA,depth_frag:RA,distance_vert:CA,distance_frag:DA,equirect_vert:LA,equirect_frag:UA,linedashed_vert:NA,linedashed_frag:OA,meshbasic_vert:PA,meshbasic_frag:zA,meshlambert_vert:IA,meshlambert_frag:FA,meshmatcap_vert:BA,meshmatcap_frag:HA,meshnormal_vert:GA,meshnormal_frag:VA,meshphong_vert:kA,meshphong_frag:jA,meshphysical_vert:XA,meshphysical_frag:WA,meshtoon_vert:qA,meshtoon_frag:YA,points_vert:ZA,points_frag:KA,shadow_vert:QA,shadow_frag:JA,sprite_vert:$A,sprite_frag:tw},Nt={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},fi={basic:{uniforms:ni([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:ni([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Me(0)},envMapIntensity:{value:1}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:ni([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:ni([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:ni([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Me(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:ni([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:ni([Nt.points,Nt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:ni([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:ni([Nt.common,Nt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:ni([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:ni([Nt.sprite,Nt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:ni([Nt.common,Nt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:ni([Nt.lights,Nt.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};fi.physical={uniforms:ni([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const Bu={r:0,b:0,g:0},sr=new va,ew=new nn;function nw(r,t,n,a,o,c){const u=new Me(0);let h=o===!0?0:1,m,p,g=null,_=0,v=null;function b(A){let C=A.isScene===!0?A.background:null;if(C&&C.isTexture){const L=A.backgroundBlurriness>0;C=t.get(C,L)}return C}function M(A){let C=!1;const L=b(A);L===null?y(u,h):L&&L.isColor&&(y(L,1),C=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(r.autoClear||C)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(A,C){const L=b(C);L&&(L.isCubeTexture||L.mapping===df)?(p===void 0&&(p=new en(new Jl(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:Oo(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(B,P,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),sr.copy(C.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),p.material.uniforms.envMap.value=L,p.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(ew.makeRotationFromEuler(sr)),p.material.toneMapped=Oe.getTransfer(L.colorSpace)!==ke,(g!==L||_!==L.version||v!==r.toneMapping)&&(p.material.needsUpdate=!0,g=L,_=L.version,v=r.toneMapping),p.layers.enableAll(),A.unshift(p,p.geometry,p.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new en(new $l(2,2),new Hi({name:"BackgroundMaterial",uniforms:Oo(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=Oe.getTransfer(L.colorSpace)!==ke,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(g!==L||_!==L.version||v!==r.toneMapping)&&(m.material.needsUpdate=!0,g=L,_=L.version,v=r.toneMapping),m.layers.enableAll(),A.unshift(m,m.geometry,m.material,0,0,null))}function y(A,C){A.getRGB(Bu,Oy(r)),n.buffers.color.setClear(Bu.r,Bu.g,Bu.b,C,c)}function x(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(A,C=1){u.set(A),h=C,y(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(A){h=A,y(u,h)},render:M,addToRenderList:w,dispose:x}}function iw(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=v(null);let c=o,u=!1;function h(H,K,et,tt,J){let z=!1;const G=_(H,tt,et,K);c!==G&&(c=G,p(c.object)),z=b(H,tt,et,J),z&&M(H,tt,et,J),J!==null&&t.update(J,r.ELEMENT_ARRAY_BUFFER),(z||u)&&(u=!1,L(H,K,et,tt),J!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function m(){return r.createVertexArray()}function p(H){return r.bindVertexArray(H)}function g(H){return r.deleteVertexArray(H)}function _(H,K,et,tt){const J=tt.wireframe===!0;let z=a[K.id];z===void 0&&(z={},a[K.id]=z);const G=H.isInstancedMesh===!0?H.id:0;let ut=z[G];ut===void 0&&(ut={},z[G]=ut);let mt=ut[et.id];mt===void 0&&(mt={},ut[et.id]=mt);let Et=mt[J];return Et===void 0&&(Et=v(m()),mt[J]=Et),Et}function v(H){const K=[],et=[],tt=[];for(let J=0;J<n;J++)K[J]=0,et[J]=0,tt[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:et,attributeDivisors:tt,object:H,attributes:{},index:null}}function b(H,K,et,tt){const J=c.attributes,z=K.attributes;let G=0;const ut=et.getAttributes();for(const mt in ut)if(ut[mt].location>=0){const F=J[mt];let q=z[mt];if(q===void 0&&(mt==="instanceMatrix"&&H.instanceMatrix&&(q=H.instanceMatrix),mt==="instanceColor"&&H.instanceColor&&(q=H.instanceColor)),F===void 0||F.attribute!==q||q&&F.data!==q.data)return!0;G++}return c.attributesNum!==G||c.index!==tt}function M(H,K,et,tt){const J={},z=K.attributes;let G=0;const ut=et.getAttributes();for(const mt in ut)if(ut[mt].location>=0){let F=z[mt];F===void 0&&(mt==="instanceMatrix"&&H.instanceMatrix&&(F=H.instanceMatrix),mt==="instanceColor"&&H.instanceColor&&(F=H.instanceColor));const q={};q.attribute=F,F&&F.data&&(q.data=F.data),J[mt]=q,G++}c.attributes=J,c.attributesNum=G,c.index=tt}function w(){const H=c.newAttributes;for(let K=0,et=H.length;K<et;K++)H[K]=0}function y(H){x(H,0)}function x(H,K){const et=c.newAttributes,tt=c.enabledAttributes,J=c.attributeDivisors;et[H]=1,tt[H]===0&&(r.enableVertexAttribArray(H),tt[H]=1),J[H]!==K&&(r.vertexAttribDivisor(H,K),J[H]=K)}function A(){const H=c.newAttributes,K=c.enabledAttributes;for(let et=0,tt=K.length;et<tt;et++)K[et]!==H[et]&&(r.disableVertexAttribArray(et),K[et]=0)}function C(H,K,et,tt,J,z,G){G===!0?r.vertexAttribIPointer(H,K,et,J,z):r.vertexAttribPointer(H,K,et,tt,J,z)}function L(H,K,et,tt){w();const J=tt.attributes,z=et.getAttributes(),G=K.defaultAttributeValues;for(const ut in z){const mt=z[ut];if(mt.location>=0){let Et=J[ut];if(Et===void 0&&(ut==="instanceMatrix"&&H.instanceMatrix&&(Et=H.instanceMatrix),ut==="instanceColor"&&H.instanceColor&&(Et=H.instanceColor)),Et!==void 0){const F=Et.normalized,q=Et.itemSize,V=t.get(Et);if(V===void 0)continue;const ht=V.buffer,Rt=V.type,nt=V.bytesPerElement,xt=Rt===r.INT||Rt===r.UNSIGNED_INT||Et.gpuType===bm;if(Et.isInterleavedBufferAttribute){const bt=Et.data,Ht=bt.stride,Jt=Et.offset;if(bt.isInstancedInterleavedBuffer){for(let ee=0;ee<mt.locationSize;ee++)x(mt.location+ee,bt.meshPerAttribute);H.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let ee=0;ee<mt.locationSize;ee++)y(mt.location+ee);r.bindBuffer(r.ARRAY_BUFFER,ht);for(let ee=0;ee<mt.locationSize;ee++)C(mt.location+ee,q/mt.locationSize,Rt,F,Ht*nt,(Jt+q/mt.locationSize*ee)*nt,xt)}else{if(Et.isInstancedBufferAttribute){for(let bt=0;bt<mt.locationSize;bt++)x(mt.location+bt,Et.meshPerAttribute);H.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let bt=0;bt<mt.locationSize;bt++)y(mt.location+bt);r.bindBuffer(r.ARRAY_BUFFER,ht);for(let bt=0;bt<mt.locationSize;bt++)C(mt.location+bt,q/mt.locationSize,Rt,F,q*nt,q/mt.locationSize*bt*nt,xt)}}else if(G!==void 0){const F=G[ut];if(F!==void 0)switch(F.length){case 2:r.vertexAttrib2fv(mt.location,F);break;case 3:r.vertexAttrib3fv(mt.location,F);break;case 4:r.vertexAttrib4fv(mt.location,F);break;default:r.vertexAttrib1fv(mt.location,F)}}}}A()}function B(){U();for(const H in a){const K=a[H];for(const et in K){const tt=K[et];for(const J in tt){const z=tt[J];for(const G in z)g(z[G].object),delete z[G];delete tt[J]}}delete a[H]}}function P(H){if(a[H.id]===void 0)return;const K=a[H.id];for(const et in K){const tt=K[et];for(const J in tt){const z=tt[J];for(const G in z)g(z[G].object),delete z[G];delete tt[J]}}delete a[H.id]}function N(H){for(const K in a){const et=a[K];for(const tt in et){const J=et[tt];if(J[H.id]===void 0)continue;const z=J[H.id];for(const G in z)g(z[G].object),delete z[G];delete J[H.id]}}}function T(H){for(const K in a){const et=a[K],tt=H.isInstancedMesh===!0?H.id:0,J=et[tt];if(J!==void 0){for(const z in J){const G=J[z];for(const ut in G)g(G[ut].object),delete G[ut];delete J[z]}delete et[tt],Object.keys(et).length===0&&delete a[K]}}}function U(){rt(),u=!0,c!==o&&(c=o,p(c.object))}function rt(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:U,resetDefaultState:rt,dispose:B,releaseStatesOfGeometry:P,releaseStatesOfObject:T,releaseStatesOfProgram:N,initAttributes:w,enableAttribute:y,disableUnusedAttributes:A}}function aw(r,t,n){let a;function o(p){a=p}function c(p,g){r.drawArrays(a,p,g),n.update(g,a,1)}function u(p,g,_){_!==0&&(r.drawArraysInstanced(a,p,g,_),n.update(g,a,_))}function h(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,_);let b=0;for(let M=0;M<_;M++)b+=g[M];n.update(b,a,1)}function m(p,g,_,v){if(_===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let M=0;M<p.length;M++)u(p[M],g[M],v[M]);else{b.multiDrawArraysInstancedWEBGL(a,p,0,g,0,v,0,_);let M=0;for(let w=0;w<_;w++)M+=g[w]*v[w];n.update(M,a,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function sw(r,t,n,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");o=r.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(N){return!(N!==ta&&a.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(N){const T=N===Za&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==Ti&&a.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==ha&&!T)}function m(N){if(N==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(oe("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),b=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),A=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),C=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=r.getParameter(r.MAX_SAMPLES),P=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:b,maxVertexTextures:M,maxTextureSize:w,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:A,maxVaryings:C,maxFragmentUniforms:L,maxSamples:B,samples:P}}function rw(r){const t=this;let n=null,a=0,o=!1,c=!1;const u=new Ls,h=new xe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const b=_.length!==0||v||a!==0||o;return o=v,a=_.length,b},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,b){const M=_.clippingPlanes,w=_.clipIntersection,y=_.clipShadows,x=r.get(_);if(!o||M===null||M.length===0||c&&!y)c?g(null):p();else{const A=c?0:a,C=A*4;let L=x.clippingState||null;m.value=L,L=g(M,v,C,b);for(let B=0;B!==C;++B)L[B]=n[B];x.clippingState=L,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=A}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,v,b,M){const w=_!==null?_.length:0;let y=null;if(w!==0){if(y=m.value,M!==!0||y===null){const x=b+w*4,A=v.matrixWorldInverse;h.getNormalMatrix(A),(y===null||y.length<x)&&(y=new Float32Array(x));for(let C=0,L=b;C!==w;++C,L+=4)u.copy(_[C]).applyMatrix4(A,h),u.normal.toArray(y,L),y[L+3]=u.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,y}}const Ns=4,xx=[.125,.215,.35,.446,.526,.582],ur=20,ow=256,Pl=new Bm,yx=new Me;let np=null,ip=0,ap=0,sp=!1;const lw=new j;class Sx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,o=100,c={}){const{size:u=256,position:h=lw}=c;np=this._renderer.getRenderTarget(),ip=this._renderer.getActiveCubeFace(),ap=this._renderer.getActiveMipmapLevel(),sp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,a,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ex(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(np,ip,ap),this._renderer.xr.enabled=sp,t.scissorTest=!1,bo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===gr||t.mapping===Lo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),np=this._renderer.getRenderTarget(),ip=this._renderer.getActiveCubeFace(),ap=this._renderer.getActiveMipmapLevel(),sp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Za,format:ta,colorSpace:No,depthBuffer:!1},o=bx(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bx(t,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cw(c)),this._blurMaterial=fw(c,t,n),this._ggxMaterial=uw(c,t,n)}return o}_compileMaterial(t){const n=new en(new jn,t);this._renderer.compile(n,Pl)}_sceneToCubeUV(t,n,a,o,c){const m=new Ii(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,b=_.toneMapping;_.getClearColor(yx),_.toneMapping=ma,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new en(new Jl,new ei({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let x=!1;const A=t.background;A?A.isColor&&(y.color.copy(A),t.background=null,x=!0):(y.color.copy(yx),x=!0);for(let C=0;C<6;C++){const L=C%3;L===0?(m.up.set(0,p[C],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[C],c.y,c.z)):L===1?(m.up.set(0,0,p[C]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[C],c.z)):(m.up.set(0,p[C],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[C]));const B=this._cubeSize;bo(o,L*B,C>2?B:0,B,B),_.setRenderTarget(o),x&&_.render(w,m),_.render(t,m)}_.toneMapping=b,_.autoClear=v,t.background=A}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===gr||t.mapping===Lo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ex()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mx());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;bo(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(u,Pl)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=a}_applyGGXFilter(t,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[a];h.material=u;const m=u.uniforms,p=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),v=0+p*1.25,b=_*v,{_lodMax:M}=this,w=this._sizeLods[a],y=3*w*(a>M-Ns?a-M+Ns:0),x=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=b,m.mipInt.value=M-n,bo(c,y,x,3*w,2*w),o.setRenderTarget(c),o.render(h,Pl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=M-a,bo(t,y,x,3*w,2*w),o.setRenderTarget(t),o.render(h,Pl)}_blur(t,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,o,"latitudinal",c),this._halfBlur(u,t,a,a,o,"longitudinal",c)}_halfBlur(t,n,a,o,c,u,h){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ne("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=p;const v=p.uniforms,b=this._sizeLods[a]-1,M=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*ur-1),w=c/M,y=isFinite(c)?1+Math.floor(g*w):ur;y>ur&&oe(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ur}`);const x=[];let A=0;for(let N=0;N<ur;++N){const T=N/w,U=Math.exp(-T*T/2);x.push(U),N===0?A+=U:N<y&&(A+=2*U)}for(let N=0;N<x.length;N++)x[N]=x[N]/A;v.envMap.value=t.texture,v.samples.value=y,v.weights.value=x,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:C}=this;v.dTheta.value=M,v.mipInt.value=C-a;const L=this._sizeLods[o],B=3*L*(o>C-Ns?o-C+Ns:0),P=4*(this._cubeSize-L);bo(n,B,P,3*L,2*L),m.setRenderTarget(n),m.render(_,Pl)}}function cw(r){const t=[],n=[],a=[];let o=r;const c=r-Ns+1+xx.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);t.push(h);let m=1/h;u>r-Ns?m=xx[u-r+Ns-1]:u===0&&(m=0),n.push(m);const p=1/(h-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],b=6,M=6,w=3,y=2,x=1,A=new Float32Array(w*M*b),C=new Float32Array(y*M*b),L=new Float32Array(x*M*b);for(let P=0;P<b;P++){const N=P%3*2/3-1,T=P>2?0:-1,U=[N,T,0,N+2/3,T,0,N+2/3,T+1,0,N,T,0,N+2/3,T+1,0,N,T+1,0];A.set(U,w*M*P),C.set(v,y*M*P);const rt=[P,P,P,P,P,P];L.set(rt,x*M*P)}const B=new jn;B.setAttribute("position",new Bi(A,w)),B.setAttribute("uv",new Bi(C,y)),B.setAttribute("faceIndex",new Bi(L,x)),a.push(new en(B,null)),o>Ns&&o--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function bx(r,t,n){const a=new ga(r,t,n);return a.texture.mapping=df,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function bo(r,t,n,a,o){r.viewport.set(t,n,a,o),r.scissor.set(t,n,a,o)}function uw(r,t,n){return new Hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ow,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function fw(r,t,n){const a=new Float32Array(ur),o=new j(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:ur,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:pf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function Mx(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function Ex(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function pf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Iy extends ga{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new Uy(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Jl(5,5,5),c=new Hi({name:"CubemapFromEquirect",uniforms:Oo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ii,blending:Wa});c.uniforms.tEquirect.value=n;const u=new en(o,c),h=n.minFilter;return n.minFilter===fr&&(n.minFilter=Un),new p1(1,10,this).update(t,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,o);t.setRenderTarget(c)}}function hw(r){let t=new WeakMap,n=new WeakMap,a=null;function o(v,b=!1){return v==null?null:b?u(v):c(v)}function c(v){if(v&&v.isTexture){const b=v.mapping;if(b===wd||b===Rd)if(t.has(v)){const M=t.get(v).texture;return h(M,v.mapping)}else{const M=v.image;if(M&&M.height>0){const w=new Iy(M.height);return w.fromEquirectangularTexture(r,v),t.set(v,w),v.addEventListener("dispose",p),h(w.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const b=v.mapping,M=b===wd||b===Rd,w=b===gr||b===Lo;if(M||w){let y=n.get(v);const x=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==x)return a===null&&(a=new Sx(r)),y=M?a.fromEquirectangular(v,y):a.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,n.set(v,y),y.texture;if(y!==void 0)return y.texture;{const A=v.image;return M&&A&&A.height>0||w&&A&&m(A)?(a===null&&(a=new Sx(r)),y=M?a.fromEquirectangular(v):a.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,n.set(v,y),v.addEventListener("dispose",g),y.texture):null}}}return v}function h(v,b){return b===wd?v.mapping=gr:b===Rd&&(v.mapping=Lo),v}function m(v){let b=0;const M=6;for(let w=0;w<M;w++)v[w]!==void 0&&b++;return b===M}function p(v){const b=v.target;b.removeEventListener("dispose",p);const M=t.get(b);M!==void 0&&(t.delete(b),M.dispose())}function g(v){const b=v.target;b.removeEventListener("dispose",g);const M=n.get(b);M!==void 0&&(n.delete(b),M.dispose())}function _(){t=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:o,dispose:_}}function dw(r){const t={};function n(a){if(t[a]!==void 0)return t[a];const o=r.getExtension(a);return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&cf("WebGLRenderer: "+a+" extension not supported."),o}}}function pw(r,t,n,a){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const M in v.attributes)t.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete o[v.id];const b=c.get(v);b&&(t.remove(b),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function m(_){const v=_.attributes;for(const b in v)t.update(v[b],r.ARRAY_BUFFER)}function p(_){const v=[],b=_.index,M=_.attributes.position;let w=0;if(M===void 0)return;if(b!==null){const A=b.array;w=b.version;for(let C=0,L=A.length;C<L;C+=3){const B=A[C+0],P=A[C+1],N=A[C+2];v.push(B,P,P,N,N,B)}}else{const A=M.array;w=M.version;for(let C=0,L=A.length/3-1;C<L;C+=3){const B=C+0,P=C+1,N=C+2;v.push(B,P,P,N,N,B)}}const y=new(M.count>=65535?Ry:wy)(v,1);y.version=w;const x=c.get(_);x&&t.remove(x),c.set(_,y)}function g(_){const v=c.get(_);if(v){const b=_.index;b!==null&&v.version<b.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function mw(r,t,n){let a;function o(v){a=v}let c,u;function h(v){c=v.type,u=v.bytesPerElement}function m(v,b){r.drawElements(a,b,c,v*u),n.update(b,a,1)}function p(v,b,M){M!==0&&(r.drawElementsInstanced(a,b,c,v*u,M),n.update(b,a,M))}function g(v,b,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,b,0,c,v,0,M);let y=0;for(let x=0;x<M;x++)y+=b[x];n.update(y,a,1)}function _(v,b,M,w){if(M===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<v.length;x++)p(v[x]/u,b[x],w[x]);else{y.multiDrawElementsInstancedWEBGL(a,b,0,c,v,0,w,0,M);let x=0;for(let A=0;A<M;A++)x+=b[A]*w[A];n.update(x,a,1)}}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function gw(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:Ne("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function _w(r,t,n){const a=new WeakMap,o=new Ke;function c(u,h,m){const p=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(h);if(v===void 0||v.count!==_){let rt=function(){T.dispose(),a.delete(h),h.removeEventListener("dispose",rt)};var b=rt;v!==void 0&&v.texture.dispose();const M=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let L=0;M===!0&&(L=1),w===!0&&(L=2),y===!0&&(L=3);let B=h.attributes.position.count*L,P=1;B>t.maxTextureSize&&(P=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const N=new Float32Array(B*P*4*_),T=new Ey(N,B,P,_);T.type=ha,T.needsUpdate=!0;const U=L*4;for(let H=0;H<_;H++){const K=x[H],et=A[H],tt=C[H],J=B*P*4*H;for(let z=0;z<K.count;z++){const G=z*U;M===!0&&(o.fromBufferAttribute(K,z),N[J+G+0]=o.x,N[J+G+1]=o.y,N[J+G+2]=o.z,N[J+G+3]=0),w===!0&&(o.fromBufferAttribute(et,z),N[J+G+4]=o.x,N[J+G+5]=o.y,N[J+G+6]=o.z,N[J+G+7]=0),y===!0&&(o.fromBufferAttribute(tt,z),N[J+G+8]=o.x,N[J+G+9]=o.y,N[J+G+10]=o.z,N[J+G+11]=tt.itemSize===4?o.w:1)}}v={count:_,texture:T,size:new ne(B,P)},a.set(h,v),h.addEventListener("dispose",rt)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let M=0;for(let y=0;y<p.length;y++)M+=p[y];const w=h.morphTargetsRelative?1:1-M;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",v.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function vw(r,t,n,a,o){let c=new WeakMap;function u(p){const g=o.render.frame,_=p.geometry,v=t.get(p,_);if(c.get(v)!==g&&(t.update(v),c.set(v,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==g&&(n.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,g))),p.isSkinnedMesh){const b=p.skeleton;c.get(b)!==g&&(b.update(),c.set(b,g))}return v}function h(){c=new WeakMap}function m(p){const g=p.target;g.removeEventListener("dispose",m),a.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:u,dispose:h}}const xw={[ry]:"LINEAR_TONE_MAPPING",[oy]:"REINHARD_TONE_MAPPING",[ly]:"CINEON_TONE_MAPPING",[cy]:"ACES_FILMIC_TONE_MAPPING",[fy]:"AGX_TONE_MAPPING",[hy]:"NEUTRAL_TONE_MAPPING",[uy]:"CUSTOM_TONE_MAPPING"};function yw(r,t,n,a,o){const c=new ga(t,n,{type:r,depthBuffer:a,stencilBuffer:o}),u=new ga(t,n,{type:Za,depthBuffer:!1,stencilBuffer:!1}),h=new jn;h.setAttribute("position",new hn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new hn([0,2,0,0,2,0],2));const m=new t1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new en(h,m),g=new Bm(-1,1,1,-1,0,1);let _=null,v=null,b=!1,M,w=null,y=[],x=!1;this.setSize=function(A,C){c.setSize(A,C),u.setSize(A,C);for(let L=0;L<y.length;L++){const B=y[L];B.setSize&&B.setSize(A,C)}},this.setEffects=function(A){y=A,x=y.length>0&&y[0].isRenderPass===!0;const C=c.width,L=c.height;for(let B=0;B<y.length;B++){const P=y[B];P.setSize&&P.setSize(C,L)}},this.begin=function(A,C){if(b||A.toneMapping===ma&&y.length===0)return!1;if(w=C,C!==null){const L=C.width,B=C.height;(c.width!==L||c.height!==B)&&this.setSize(L,B)}return x===!1&&A.setRenderTarget(c),M=A.toneMapping,A.toneMapping=ma,!0},this.hasRenderPass=function(){return x},this.end=function(A,C){A.toneMapping=M,b=!0;let L=c,B=u;for(let P=0;P<y.length;P++){const N=y[P];if(N.enabled!==!1&&(N.render(A,B,L,C),N.needsSwap!==!1)){const T=L;L=B,B=T}}if(_!==A.outputColorSpace||v!==A.toneMapping){_=A.outputColorSpace,v=A.toneMapping,m.defines={},Oe.getTransfer(_)===ke&&(m.defines.SRGB_TRANSFER="");const P=xw[v];P&&(m.defines[P]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,A.setRenderTarget(w),A.render(p,g),w=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){c.dispose(),u.dispose(),h.dispose(),m.dispose()}}const Fy=new Vn,dm=new Kl(1,1),By=new Ey,Hy=new DE,Gy=new Uy,Tx=[],Ax=[],wx=new Float32Array(16),Rx=new Float32Array(9),Cx=new Float32Array(4);function zo(r,t,n){const a=r[0];if(a<=0||a>0)return r;const o=t*n;let c=Tx[o];if(c===void 0&&(c=new Float32Array(o),Tx[o]=c),t!==0){a.toArray(c,0);for(let u=1,h=0;u!==t;++u)h+=n,r[u].toArray(c,h)}return c}function An(r,t){if(r.length!==t.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==t[n])return!1;return!0}function wn(r,t){for(let n=0,a=t.length;n<a;n++)r[n]=t[n]}function mf(r,t){let n=Ax[t];n===void 0&&(n=new Int32Array(t),Ax[t]=n);for(let a=0;a!==t;++a)n[a]=r.allocateTextureUnit();return n}function Sw(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function bw(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(An(n,t))return;r.uniform2fv(this.addr,t),wn(n,t)}}function Mw(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(An(n,t))return;r.uniform3fv(this.addr,t),wn(n,t)}}function Ew(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(An(n,t))return;r.uniform4fv(this.addr,t),wn(n,t)}}function Tw(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(An(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),wn(n,t)}else{if(An(n,a))return;Cx.set(a),r.uniformMatrix2fv(this.addr,!1,Cx),wn(n,a)}}function Aw(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(An(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),wn(n,t)}else{if(An(n,a))return;Rx.set(a),r.uniformMatrix3fv(this.addr,!1,Rx),wn(n,a)}}function ww(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(An(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),wn(n,t)}else{if(An(n,a))return;wx.set(a),r.uniformMatrix4fv(this.addr,!1,wx),wn(n,a)}}function Rw(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function Cw(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(An(n,t))return;r.uniform2iv(this.addr,t),wn(n,t)}}function Dw(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(An(n,t))return;r.uniform3iv(this.addr,t),wn(n,t)}}function Lw(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(An(n,t))return;r.uniform4iv(this.addr,t),wn(n,t)}}function Uw(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function Nw(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(An(n,t))return;r.uniform2uiv(this.addr,t),wn(n,t)}}function Ow(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(An(n,t))return;r.uniform3uiv(this.addr,t),wn(n,t)}}function Pw(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(An(n,t))return;r.uniform4uiv(this.addr,t),wn(n,t)}}function zw(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(dm.compareFunction=n.isReversedDepthBuffer()?Cm:Rm,c=dm):c=Fy,n.setTexture2D(t||c,o)}function Iw(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||Hy,o)}function Fw(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||Gy,o)}function Bw(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||By,o)}function Hw(r){switch(r){case 5126:return Sw;case 35664:return bw;case 35665:return Mw;case 35666:return Ew;case 35674:return Tw;case 35675:return Aw;case 35676:return ww;case 5124:case 35670:return Rw;case 35667:case 35671:return Cw;case 35668:case 35672:return Dw;case 35669:case 35673:return Lw;case 5125:return Uw;case 36294:return Nw;case 36295:return Ow;case 36296:return Pw;case 35678:case 36198:case 36298:case 36306:case 35682:return zw;case 35679:case 36299:case 36307:return Iw;case 35680:case 36300:case 36308:case 36293:return Fw;case 36289:case 36303:case 36311:case 36292:return Bw}}function Gw(r,t){r.uniform1fv(this.addr,t)}function Vw(r,t){const n=zo(t,this.size,2);r.uniform2fv(this.addr,n)}function kw(r,t){const n=zo(t,this.size,3);r.uniform3fv(this.addr,n)}function jw(r,t){const n=zo(t,this.size,4);r.uniform4fv(this.addr,n)}function Xw(r,t){const n=zo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function Ww(r,t){const n=zo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function qw(r,t){const n=zo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function Yw(r,t){r.uniform1iv(this.addr,t)}function Zw(r,t){r.uniform2iv(this.addr,t)}function Kw(r,t){r.uniform3iv(this.addr,t)}function Qw(r,t){r.uniform4iv(this.addr,t)}function Jw(r,t){r.uniform1uiv(this.addr,t)}function $w(r,t){r.uniform2uiv(this.addr,t)}function t2(r,t){r.uniform3uiv(this.addr,t)}function e2(r,t){r.uniform4uiv(this.addr,t)}function n2(r,t,n){const a=this.cache,o=t.length,c=mf(n,o);An(a,c)||(r.uniform1iv(this.addr,c),wn(a,c));let u;this.type===r.SAMPLER_2D_SHADOW?u=dm:u=Fy;for(let h=0;h!==o;++h)n.setTexture2D(t[h]||u,c[h])}function i2(r,t,n){const a=this.cache,o=t.length,c=mf(n,o);An(a,c)||(r.uniform1iv(this.addr,c),wn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||Hy,c[u])}function a2(r,t,n){const a=this.cache,o=t.length,c=mf(n,o);An(a,c)||(r.uniform1iv(this.addr,c),wn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||Gy,c[u])}function s2(r,t,n){const a=this.cache,o=t.length,c=mf(n,o);An(a,c)||(r.uniform1iv(this.addr,c),wn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||By,c[u])}function r2(r){switch(r){case 5126:return Gw;case 35664:return Vw;case 35665:return kw;case 35666:return jw;case 35674:return Xw;case 35675:return Ww;case 35676:return qw;case 5124:case 35670:return Yw;case 35667:case 35671:return Zw;case 35668:case 35672:return Kw;case 35669:case 35673:return Qw;case 5125:return Jw;case 36294:return $w;case 36295:return t2;case 36296:return e2;case 35678:case 36198:case 36298:case 36306:case 35682:return n2;case 35679:case 36299:case 36307:return i2;case 35680:case 36300:case 36308:case 36293:return a2;case 36289:case 36303:case 36311:case 36292:return s2}}class o2{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=Hw(n.type)}}class l2{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=r2(n.type)}}class c2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(t,n[h.id],a)}}}const rp=/(\w+)(\])?(\[|\.)?/g;function Dx(r,t){r.seq.push(t),r.map[t.id]=t}function u2(r,t,n){const a=r.name,o=a.length;for(rp.lastIndex=0;;){const c=rp.exec(a),u=rp.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&u+2===o){Dx(n,p===void 0?new o2(h,r,t):new l2(h,r,t));break}else{let _=n.map[h];_===void 0&&(_=new c2(h),Dx(n,_)),n=_}}}class sf{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const h=t.getActiveUniform(n,u),m=t.getUniformLocation(n,h.name);u2(h,m,this)}const o=[],c=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(t,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],m=a[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&a.push(u)}return a}}function Lx(r,t,n){const a=r.createShader(t);return r.shaderSource(a,n),r.compileShader(a),a}const f2=37297;let h2=0;function d2(r,t){const n=r.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const h=u+1;a.push(`${h===t?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const Ux=new xe;function p2(r){Oe._getMatrix(Ux,Oe.workingColorSpace,r);const t=`mat3( ${Ux.elements.map(n=>n.toFixed(4))} )`;switch(Oe.getTransfer(r)){case of:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Nx(r,t,n){const a=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+d2(r.getShaderSource(t),h)}else return c}function m2(r,t){const n=p2(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const g2={[ry]:"Linear",[oy]:"Reinhard",[ly]:"Cineon",[cy]:"ACESFilmic",[fy]:"AgX",[hy]:"Neutral",[uy]:"Custom"};function _2(r,t){const n=g2[t];return n===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Hu=new j;function v2(){Oe.getLuminanceCoefficients(Hu);const r=Hu.x.toFixed(4),t=Hu.y.toFixed(4),n=Hu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bl).join(`
`)}function y2(r){const t=[];for(const n in r){const a=r[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function S2(r,t){const n={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(t,o),u=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:r.getAttribLocation(t,u),locationSize:h}}return n}function Bl(r){return r!==""}function Ox(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Px(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const b2=/^[ \t]*#include +<([\w\d./]+)>/gm;function pm(r){return r.replace(b2,E2)}const M2=new Map;function E2(r,t){let n=ye[t];if(n===void 0){const a=M2.get(t);if(a!==void 0)n=ye[a],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return pm(n)}const T2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zx(r){return r.replace(T2,A2)}function A2(r,t,n,a){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Ix(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const w2={[Ju]:"SHADOWMAP_TYPE_PCF",[Fl]:"SHADOWMAP_TYPE_VSM"};function R2(r){return w2[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const C2={[gr]:"ENVMAP_TYPE_CUBE",[Lo]:"ENVMAP_TYPE_CUBE",[df]:"ENVMAP_TYPE_CUBE_UV"};function D2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":C2[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const L2={[Lo]:"ENVMAP_MODE_REFRACTION"};function U2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":L2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const N2={[Sm]:"ENVMAP_BLENDING_MULTIPLY",[YM]:"ENVMAP_BLENDING_MIX",[ZM]:"ENVMAP_BLENDING_ADD"};function O2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":N2[r.combine]||"ENVMAP_BLENDING_NONE"}function P2(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function z2(r,t,n,a){const o=r.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const m=R2(n),p=D2(n),g=U2(n),_=O2(n),v=P2(n),b=x2(n),M=y2(c),w=o.createProgram();let y,x,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Bl).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Bl).join(`
`),x.length>0&&(x+=`
`)):(y=[Ix(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bl).join(`
`),x=[Ix(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ma?"#define TONE_MAPPING":"",n.toneMapping!==ma?ye.tonemapping_pars_fragment:"",n.toneMapping!==ma?_2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,m2("linearToOutputTexel",n.outputColorSpace),v2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Bl).join(`
`)),u=pm(u),u=Ox(u,n),u=Px(u,n),h=pm(h),h=Ox(h,n),h=Px(h,n),u=zx(u),h=zx(h),n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,y=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",n.glslVersion===kv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===kv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const C=A+y+u,L=A+x+h,B=Lx(o,o.VERTEX_SHADER,C),P=Lx(o,o.FRAGMENT_SHADER,L);o.attachShader(w,B),o.attachShader(w,P),n.index0AttributeName!==void 0?o.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function N(H){if(r.debug.checkShaderErrors){const K=o.getProgramInfoLog(w)||"",et=o.getShaderInfoLog(B)||"",tt=o.getShaderInfoLog(P)||"",J=K.trim(),z=et.trim(),G=tt.trim();let ut=!0,mt=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(ut=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,w,B,P);else{const Et=Nx(o,B,"vertex"),F=Nx(o,P,"fragment");Ne("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+J+`
`+Et+`
`+F)}else J!==""?oe("WebGLProgram: Program Info Log:",J):(z===""||G==="")&&(mt=!1);mt&&(H.diagnostics={runnable:ut,programLog:J,vertexShader:{log:z,prefix:y},fragmentShader:{log:G,prefix:x}})}o.deleteShader(B),o.deleteShader(P),T=new sf(o,w),U=S2(o,w)}let T;this.getUniforms=function(){return T===void 0&&N(this),T};let U;this.getAttributes=function(){return U===void 0&&N(this),U};let rt=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return rt===!1&&(rt=o.getProgramParameter(w,f2)),rt},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=h2++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=B,this.fragmentShader=P,this}let I2=0;class F2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new B2(t),n.set(t,a)),a}}class B2{constructor(t){this.id=I2++,this.code=t,this.usedTimes=0}}function H2(r,t,n,a,o,c){const u=new Ty,h=new F2,m=new Set,p=[],g=new Map,_=a.logarithmicDepthBuffer;let v=a.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,U,rt,H,K){const et=H.fog,tt=K.geometry,J=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,z=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,G=t.get(T.envMap||J,z),ut=G&&G.mapping===df?G.image.height:null,mt=b[T.type];T.precision!==null&&(v=a.getMaxPrecision(T.precision),v!==T.precision&&oe("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const Et=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,F=Et!==void 0?Et.length:0;let q=0;tt.morphAttributes.position!==void 0&&(q=1),tt.morphAttributes.normal!==void 0&&(q=2),tt.morphAttributes.color!==void 0&&(q=3);let V,ht,Rt,nt;if(mt){const Ue=fi[mt];V=Ue.vertexShader,ht=Ue.fragmentShader}else V=T.vertexShader,ht=T.fragmentShader,h.update(T),Rt=h.getVertexShaderID(T),nt=h.getFragmentShaderID(T);const xt=r.getRenderTarget(),bt=r.state.buffers.depth.getReversed(),Ht=K.isInstancedMesh===!0,Jt=K.isBatchedMesh===!0,ee=!!T.map,Qe=!!T.matcap,Se=!!G,be=!!T.aoMap,Le=!!T.lightMap,_t=!!T.bumpMap,Kt=!!T.normalMap,X=!!T.displacementMap,Ce=!!T.emissiveMap,he=!!T.metalnessMap,de=!!T.roughnessMap,kt=T.anisotropy>0,O=T.clearcoat>0,E=T.dispersion>0,Q=T.iridescence>0,vt=T.sheen>0,Mt=T.transmission>0,pt=kt&&!!T.anisotropyMap,Wt=O&&!!T.clearcoatMap,Lt=O&&!!T.clearcoatNormalMap,$t=O&&!!T.clearcoatRoughnessMap,ae=Q&&!!T.iridescenceMap,wt=Q&&!!T.iridescenceThicknessMap,Tt=vt&&!!T.sheenColorMap,zt=vt&&!!T.sheenRoughnessMap,Pt=!!T.specularMap,It=!!T.specularColorMap,me=!!T.specularIntensityMap,Z=Mt&&!!T.transmissionMap,Dt=Mt&&!!T.thicknessMap,Ct=!!T.gradientMap,Ft=!!T.alphaMap,At=T.alphaTest>0,dt=!!T.alphaHash,Gt=!!T.extensions;let re=ma;T.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(re=r.toneMapping);const He={shaderID:mt,shaderType:T.type,shaderName:T.name,vertexShader:V,fragmentShader:ht,defines:T.defines,customVertexShaderID:Rt,customFragmentShaderID:nt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:Jt,batchingColor:Jt&&K._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&K.instanceColor!==null,instancingMorph:Ht&&K.morphTexture!==null,outputColorSpace:xt===null?r.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:No,alphaToCoverage:!!T.alphaToCoverage,map:ee,matcap:Qe,envMap:Se,envMapMode:Se&&G.mapping,envMapCubeUVHeight:ut,aoMap:be,lightMap:Le,bumpMap:_t,normalMap:Kt,displacementMap:X,emissiveMap:Ce,normalMapObjectSpace:Kt&&T.normalMapType===JM,normalMapTangentSpace:Kt&&T.normalMapType===Sy,metalnessMap:he,roughnessMap:de,anisotropy:kt,anisotropyMap:pt,clearcoat:O,clearcoatMap:Wt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:$t,dispersion:E,iridescence:Q,iridescenceMap:ae,iridescenceThicknessMap:wt,sheen:vt,sheenColorMap:Tt,sheenRoughnessMap:zt,specularMap:Pt,specularColorMap:It,specularIntensityMap:me,transmission:Mt,transmissionMap:Z,thicknessMap:Dt,gradientMap:Ct,opaque:T.transparent===!1&&T.blending===wo&&T.alphaToCoverage===!1,alphaMap:Ft,alphaTest:At,alphaHash:dt,combine:T.combine,mapUv:ee&&M(T.map.channel),aoMapUv:be&&M(T.aoMap.channel),lightMapUv:Le&&M(T.lightMap.channel),bumpMapUv:_t&&M(T.bumpMap.channel),normalMapUv:Kt&&M(T.normalMap.channel),displacementMapUv:X&&M(T.displacementMap.channel),emissiveMapUv:Ce&&M(T.emissiveMap.channel),metalnessMapUv:he&&M(T.metalnessMap.channel),roughnessMapUv:de&&M(T.roughnessMap.channel),anisotropyMapUv:pt&&M(T.anisotropyMap.channel),clearcoatMapUv:Wt&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$t&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:zt&&M(T.sheenRoughnessMap.channel),specularMapUv:Pt&&M(T.specularMap.channel),specularColorMapUv:It&&M(T.specularColorMap.channel),specularIntensityMapUv:me&&M(T.specularIntensityMap.channel),transmissionMapUv:Z&&M(T.transmissionMap.channel),thicknessMapUv:Dt&&M(T.thicknessMap.channel),alphaMapUv:Ft&&M(T.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(Kt||kt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!tt.attributes.uv&&(ee||Ft),fog:!!et,useFog:T.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||tt.attributes.normal===void 0&&Kt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:bt,skinning:K.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:q,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&rt.length>0,shadowMapType:r.shadowMap.type,toneMapping:re,decodeVideoTexture:ee&&T.map.isVideoTexture===!0&&Oe.getTransfer(T.map.colorSpace)===ke,decodeVideoTextureEmissive:Ce&&T.emissiveMap.isVideoTexture===!0&&Oe.getTransfer(T.emissiveMap.colorSpace)===ke,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ji,flipSided:T.side===ii,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Gt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&T.extensions.multiDraw===!0||Jt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return He.vertexUv1s=m.has(1),He.vertexUv2s=m.has(2),He.vertexUv3s=m.has(3),m.clear(),He}function y(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const rt in T.defines)U.push(rt),U.push(T.defines[rt]);return T.isRawShaderMaterial===!1&&(x(U,T),A(U,T),U.push(r.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function x(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function A(T,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),T.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),T.push(u.mask)}function C(T){const U=b[T.type];let rt;if(U){const H=fi[U];rt=zm.clone(H.uniforms)}else rt=T.uniforms;return rt}function L(T,U){let rt=g.get(U);return rt!==void 0?++rt.usedTimes:(rt=new z2(r,U,T,o),p.push(rt),g.set(U,rt)),rt}function B(T){if(--T.usedTimes===0){const U=p.indexOf(T);p[U]=p[p.length-1],p.pop(),g.delete(T.cacheKey),T.destroy()}}function P(T){h.remove(T)}function N(){h.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:C,acquireProgram:L,releaseProgram:B,releaseShaderCache:P,programs:p,dispose:N}}function G2(){let r=new WeakMap;function t(u){return r.has(u)}function n(u){let h=r.get(u);return h===void 0&&(h={},r.set(u,h)),h}function a(u){r.delete(u)}function o(u,h,m){r.get(u)[h]=m}function c(){r=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:c}}function V2(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Fx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Bx(){const r=[];let t=0;const n=[],a=[],o=[];function c(){t=0,n.length=0,a.length=0,o.length=0}function u(v){let b=0;return v.isInstancedMesh&&(b+=2),v.isSkinnedMesh&&(b+=1),b}function h(v,b,M,w,y,x){let A=r[t];return A===void 0?(A={id:v.id,object:v,geometry:b,material:M,materialVariant:u(v),groupOrder:w,renderOrder:v.renderOrder,z:y,group:x},r[t]=A):(A.id=v.id,A.object=v,A.geometry=b,A.material=M,A.materialVariant=u(v),A.groupOrder=w,A.renderOrder=v.renderOrder,A.z=y,A.group=x),t++,A}function m(v,b,M,w,y,x){const A=h(v,b,M,w,y,x);M.transmission>0?a.push(A):M.transparent===!0?o.push(A):n.push(A)}function p(v,b,M,w,y,x){const A=h(v,b,M,w,y,x);M.transmission>0?a.unshift(A):M.transparent===!0?o.unshift(A):n.unshift(A)}function g(v,b){n.length>1&&n.sort(v||V2),a.length>1&&a.sort(b||Fx),o.length>1&&o.sort(b||Fx)}function _(){for(let v=t,b=r.length;v<b;v++){const M=r[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:m,unshift:p,finish:_,sort:g}}function k2(){let r=new WeakMap;function t(a,o){const c=r.get(a);let u;return c===void 0?(u=new Bx,r.set(a,[u])):o>=c.length?(u=new Bx,c.push(u)):u=c[o],u}function n(){r=new WeakMap}return{get:t,dispose:n}}function j2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new j,color:new Me};break;case"SpotLight":n={position:new j,direction:new j,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Me,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":n={color:new Me,position:new j,halfWidth:new j,halfHeight:new j};break}return r[t.id]=n,n}}}function X2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let W2=0;function q2(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Y2(r){const t=new j2,n=X2(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new j);const o=new j,c=new nn,u=new nn;function h(p){let g=0,_=0,v=0;for(let U=0;U<9;U++)a.probe[U].set(0,0,0);let b=0,M=0,w=0,y=0,x=0,A=0,C=0,L=0,B=0,P=0,N=0;p.sort(q2);for(let U=0,rt=p.length;U<rt;U++){const H=p[U],K=H.color,et=H.intensity,tt=H.distance;let J=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Uo?J=H.shadow.map.texture:J=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)g+=K.r*et,_+=K.g*et,v+=K.b*et;else if(H.isLightProbe){for(let z=0;z<9;z++)a.probe[z].addScaledVector(H.sh.coefficients[z],et);N++}else if(H.isDirectionalLight){const z=t.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const G=H.shadow,ut=n.get(H);ut.shadowIntensity=G.intensity,ut.shadowBias=G.bias,ut.shadowNormalBias=G.normalBias,ut.shadowRadius=G.radius,ut.shadowMapSize=G.mapSize,a.directionalShadow[b]=ut,a.directionalShadowMap[b]=J,a.directionalShadowMatrix[b]=H.shadow.matrix,A++}a.directional[b]=z,b++}else if(H.isSpotLight){const z=t.get(H);z.position.setFromMatrixPosition(H.matrixWorld),z.color.copy(K).multiplyScalar(et),z.distance=tt,z.coneCos=Math.cos(H.angle),z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),z.decay=H.decay,a.spot[w]=z;const G=H.shadow;if(H.map&&(a.spotLightMap[B]=H.map,B++,G.updateMatrices(H),H.castShadow&&P++),a.spotLightMatrix[w]=G.matrix,H.castShadow){const ut=n.get(H);ut.shadowIntensity=G.intensity,ut.shadowBias=G.bias,ut.shadowNormalBias=G.normalBias,ut.shadowRadius=G.radius,ut.shadowMapSize=G.mapSize,a.spotShadow[w]=ut,a.spotShadowMap[w]=J,L++}w++}else if(H.isRectAreaLight){const z=t.get(H);z.color.copy(K).multiplyScalar(et),z.halfWidth.set(H.width*.5,0,0),z.halfHeight.set(0,H.height*.5,0),a.rectArea[y]=z,y++}else if(H.isPointLight){const z=t.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),z.distance=H.distance,z.decay=H.decay,H.castShadow){const G=H.shadow,ut=n.get(H);ut.shadowIntensity=G.intensity,ut.shadowBias=G.bias,ut.shadowNormalBias=G.normalBias,ut.shadowRadius=G.radius,ut.shadowMapSize=G.mapSize,ut.shadowCameraNear=G.camera.near,ut.shadowCameraFar=G.camera.far,a.pointShadow[M]=ut,a.pointShadowMap[M]=J,a.pointShadowMatrix[M]=H.shadow.matrix,C++}a.point[M]=z,M++}else if(H.isHemisphereLight){const z=t.get(H);z.skyColor.copy(H.color).multiplyScalar(et),z.groundColor.copy(H.groundColor).multiplyScalar(et),a.hemi[x]=z,x++}}y>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Nt.LTC_FLOAT_1,a.rectAreaLTC2=Nt.LTC_FLOAT_2):(a.rectAreaLTC1=Nt.LTC_HALF_1,a.rectAreaLTC2=Nt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const T=a.hash;(T.directionalLength!==b||T.pointLength!==M||T.spotLength!==w||T.rectAreaLength!==y||T.hemiLength!==x||T.numDirectionalShadows!==A||T.numPointShadows!==C||T.numSpotShadows!==L||T.numSpotMaps!==B||T.numLightProbes!==N)&&(a.directional.length=b,a.spot.length=w,a.rectArea.length=y,a.point.length=M,a.hemi.length=x,a.directionalShadow.length=A,a.directionalShadowMap.length=A,a.pointShadow.length=C,a.pointShadowMap.length=C,a.spotShadow.length=L,a.spotShadowMap.length=L,a.directionalShadowMatrix.length=A,a.pointShadowMatrix.length=C,a.spotLightMatrix.length=L+B-P,a.spotLightMap.length=B,a.numSpotLightShadowsWithMaps=P,a.numLightProbes=N,T.directionalLength=b,T.pointLength=M,T.spotLength=w,T.rectAreaLength=y,T.hemiLength=x,T.numDirectionalShadows=A,T.numPointShadows=C,T.numSpotShadows=L,T.numSpotMaps=B,T.numLightProbes=N,a.version=W2++)}function m(p,g){let _=0,v=0,b=0,M=0,w=0;const y=g.matrixWorldInverse;for(let x=0,A=p.length;x<A;x++){const C=p[x];if(C.isDirectionalLight){const L=a.directional[_];L.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(y),_++}else if(C.isSpotLight){const L=a.spot[b];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(y),b++}else if(C.isRectAreaLight){const L=a.rectArea[M];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(y),u.identity(),c.copy(C.matrixWorld),c.premultiply(y),u.extractRotation(c),L.halfWidth.set(C.width*.5,0,0),L.halfHeight.set(0,C.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),M++}else if(C.isPointLight){const L=a.point[v];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(y),v++}else if(C.isHemisphereLight){const L=a.hemi[w];L.direction.setFromMatrixPosition(C.matrixWorld),L.direction.transformDirection(y),w++}}}return{setup:h,setupView:m,state:a}}function Hx(r){const t=new Y2(r),n=[],a=[];function o(g){p.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function h(){t.setup(n)}function m(g){t.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:u}}function Z2(r){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let h;return u===void 0?(h=new Hx(r),t.set(o,[h])):c>=u.length?(h=new Hx(r),u.push(h)):h=u[c],h}function a(){t=new WeakMap}return{get:n,dispose:a}}const K2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,J2=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],$2=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],Gx=new nn,zl=new j,op=new j;function t3(r,t,n){let a=new Nm;const o=new ne,c=new ne,u=new Ke,h=new n1,m=new i1,p={},g=n.maxTextureSize,_={[Os]:ii,[ii]:Os,[Ji]:Ji},v=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:K2,fragmentShader:Q2}),b=v.clone();b.defines.HORIZONTAL_PASS=1;const M=new jn;M.setAttribute("position",new Bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new en(M,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ju;let x=this.type;this.render=function(P,N,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;this.type===CM&&(oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ju);const U=r.getRenderTarget(),rt=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),K=r.state;K.setBlending(Wa),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const et=x!==this.type;et&&N.traverse(function(tt){tt.material&&(Array.isArray(tt.material)?tt.material.forEach(J=>J.needsUpdate=!0):tt.material.needsUpdate=!0)});for(let tt=0,J=P.length;tt<J;tt++){const z=P[tt],G=z.shadow;if(G===void 0){oe("WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const ut=G.getFrameExtents();o.multiply(ut),c.copy(G.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/ut.x),o.x=c.x*ut.x,G.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/ut.y),o.y=c.y*ut.y,G.mapSize.y=c.y));const mt=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=mt,G.map===null||et===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Fl){if(z.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ga(o.x,o.y,{format:Uo,type:Za,minFilter:Un,magFilter:Un,generateMipmaps:!1}),G.map.texture.name=z.name+".shadowMap",G.map.depthTexture=new Kl(o.x,o.y,ha),G.map.depthTexture.name=z.name+".shadowMapDepth",G.map.depthTexture.format=Ka,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Gn,G.map.depthTexture.magFilter=Gn}else z.isPointLight?(G.map=new Iy(o.x),G.map.depthTexture=new ZE(o.x,_a)):(G.map=new ga(o.x,o.y),G.map.depthTexture=new Kl(o.x,o.y,_a)),G.map.depthTexture.name=z.name+".shadowMap",G.map.depthTexture.format=Ka,this.type===Ju?(G.map.depthTexture.compareFunction=mt?Cm:Rm,G.map.depthTexture.minFilter=Un,G.map.depthTexture.magFilter=Un):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Gn,G.map.depthTexture.magFilter=Gn);G.camera.updateProjectionMatrix()}const Et=G.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<Et;F++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,F),r.clear();else{F===0&&(r.setRenderTarget(G.map),r.clear());const q=G.getViewport(F);u.set(c.x*q.x,c.y*q.y,c.x*q.z,c.y*q.w),K.viewport(u)}if(z.isPointLight){const q=G.camera,V=G.matrix,ht=z.distance||q.far;ht!==q.far&&(q.far=ht,q.updateProjectionMatrix()),zl.setFromMatrixPosition(z.matrixWorld),q.position.copy(zl),op.copy(q.position),op.add(J2[F]),q.up.copy($2[F]),q.lookAt(op),q.updateMatrixWorld(),V.makeTranslation(-zl.x,-zl.y,-zl.z),Gx.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Gx,q.coordinateSystem,q.reversedDepth)}else G.updateMatrices(z);a=G.getFrustum(),L(N,T,G.camera,z,this.type)}G.isPointLightShadow!==!0&&this.type===Fl&&A(G,T),G.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(U,rt,H)};function A(P,N){const T=t.update(w);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,b.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,b.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ga(o.x,o.y,{format:Uo,type:Za})),v.uniforms.shadow_pass.value=P.map.depthTexture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(N,null,T,v,w,null),b.uniforms.shadow_pass.value=P.mapPass.texture,b.uniforms.resolution.value=P.mapSize,b.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(N,null,T,b,w,null)}function C(P,N,T,U){let rt=null;const H=T.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)rt=H;else if(rt=T.isPointLight===!0?m:h,r.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const K=rt.uuid,et=N.uuid;let tt=p[K];tt===void 0&&(tt={},p[K]=tt);let J=tt[et];J===void 0&&(J=rt.clone(),tt[et]=J,N.addEventListener("dispose",B)),rt=J}if(rt.visible=N.visible,rt.wireframe=N.wireframe,U===Fl?rt.side=N.shadowSide!==null?N.shadowSide:N.side:rt.side=N.shadowSide!==null?N.shadowSide:_[N.side],rt.alphaMap=N.alphaMap,rt.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,rt.map=N.map,rt.clipShadows=N.clipShadows,rt.clippingPlanes=N.clippingPlanes,rt.clipIntersection=N.clipIntersection,rt.displacementMap=N.displacementMap,rt.displacementScale=N.displacementScale,rt.displacementBias=N.displacementBias,rt.wireframeLinewidth=N.wireframeLinewidth,rt.linewidth=N.linewidth,T.isPointLight===!0&&rt.isMeshDistanceMaterial===!0){const K=r.properties.get(rt);K.light=T}return rt}function L(P,N,T,U,rt){if(P.visible===!1)return;if(P.layers.test(N.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&rt===Fl)&&(!P.frustumCulled||a.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,P.matrixWorld);const et=t.update(P),tt=P.material;if(Array.isArray(tt)){const J=et.groups;for(let z=0,G=J.length;z<G;z++){const ut=J[z],mt=tt[ut.materialIndex];if(mt&&mt.visible){const Et=C(P,mt,U,rt);P.onBeforeShadow(r,P,N,T,et,Et,ut),r.renderBufferDirect(T,null,et,Et,P,ut),P.onAfterShadow(r,P,N,T,et,Et,ut)}}}else if(tt.visible){const J=C(P,tt,U,rt);P.onBeforeShadow(r,P,N,T,et,J,null),r.renderBufferDirect(T,null,et,J,P,null),P.onAfterShadow(r,P,N,T,et,J,null)}}const K=P.children;for(let et=0,tt=K.length;et<tt;et++)L(K[et],N,T,U,rt)}function B(P){P.target.removeEventListener("dispose",B);for(const T in p){const U=p[T],rt=P.target.uuid;rt in U&&(U[rt].dispose(),delete U[rt])}}}function e3(r,t){function n(){let Z=!1;const Dt=new Ke;let Ct=null;const Ft=new Ke(0,0,0,0);return{setMask:function(At){Ct!==At&&!Z&&(r.colorMask(At,At,At,At),Ct=At)},setLocked:function(At){Z=At},setClear:function(At,dt,Gt,re,He){He===!0&&(At*=re,dt*=re,Gt*=re),Dt.set(At,dt,Gt,re),Ft.equals(Dt)===!1&&(r.clearColor(At,dt,Gt,re),Ft.copy(Dt))},reset:function(){Z=!1,Ct=null,Ft.set(-1,0,0,0)}}}function a(){let Z=!1,Dt=!1,Ct=null,Ft=null,At=null;return{setReversed:function(dt){if(Dt!==dt){const Gt=t.get("EXT_clip_control");dt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),Dt=dt;const re=At;At=null,this.setClear(re)}},getReversed:function(){return Dt},setTest:function(dt){dt?xt(r.DEPTH_TEST):bt(r.DEPTH_TEST)},setMask:function(dt){Ct!==dt&&!Z&&(r.depthMask(dt),Ct=dt)},setFunc:function(dt){if(Dt&&(dt=lE[dt]),Ft!==dt){switch(dt){case bp:r.depthFunc(r.NEVER);break;case Mp:r.depthFunc(r.ALWAYS);break;case Ep:r.depthFunc(r.LESS);break;case Do:r.depthFunc(r.LEQUAL);break;case Tp:r.depthFunc(r.EQUAL);break;case Ap:r.depthFunc(r.GEQUAL);break;case wp:r.depthFunc(r.GREATER);break;case Rp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ft=dt}},setLocked:function(dt){Z=dt},setClear:function(dt){At!==dt&&(At=dt,Dt&&(dt=1-dt),r.clearDepth(dt))},reset:function(){Z=!1,Ct=null,Ft=null,At=null,Dt=!1}}}function o(){let Z=!1,Dt=null,Ct=null,Ft=null,At=null,dt=null,Gt=null,re=null,He=null;return{setTest:function(Ue){Z||(Ue?xt(r.STENCIL_TEST):bt(r.STENCIL_TEST))},setMask:function(Ue){Dt!==Ue&&!Z&&(r.stencilMask(Ue),Dt=Ue)},setFunc:function(Ue,Zn,Gi){(Ct!==Ue||Ft!==Zn||At!==Gi)&&(r.stencilFunc(Ue,Zn,Gi),Ct=Ue,Ft=Zn,At=Gi)},setOp:function(Ue,Zn,Gi){(dt!==Ue||Gt!==Zn||re!==Gi)&&(r.stencilOp(Ue,Zn,Gi),dt=Ue,Gt=Zn,re=Gi)},setLocked:function(Ue){Z=Ue},setClear:function(Ue){He!==Ue&&(r.clearStencil(Ue),He=Ue)},reset:function(){Z=!1,Dt=null,Ct=null,Ft=null,At=null,dt=null,Gt=null,re=null,He=null}}}const c=new n,u=new a,h=new o,m=new WeakMap,p=new WeakMap;let g={},_={},v=new WeakMap,b=[],M=null,w=!1,y=null,x=null,A=null,C=null,L=null,B=null,P=null,N=new Me(0,0,0),T=0,U=!1,rt=null,H=null,K=null,et=null,tt=null;const J=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,G=0;const ut=r.getParameter(r.VERSION);ut.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(ut)[1]),z=G>=1):ut.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(ut)[1]),z=G>=2);let mt=null,Et={};const F=r.getParameter(r.SCISSOR_BOX),q=r.getParameter(r.VIEWPORT),V=new Ke().fromArray(F),ht=new Ke().fromArray(q);function Rt(Z,Dt,Ct,Ft){const At=new Uint8Array(4),dt=r.createTexture();r.bindTexture(Z,dt),r.texParameteri(Z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Gt=0;Gt<Ct;Gt++)Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?r.texImage3D(Dt,0,r.RGBA,1,1,Ft,0,r.RGBA,r.UNSIGNED_BYTE,At):r.texImage2D(Dt+Gt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,At);return dt}const nt={};nt[r.TEXTURE_2D]=Rt(r.TEXTURE_2D,r.TEXTURE_2D,1),nt[r.TEXTURE_CUBE_MAP]=Rt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[r.TEXTURE_2D_ARRAY]=Rt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),nt[r.TEXTURE_3D]=Rt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),xt(r.DEPTH_TEST),u.setFunc(Do),_t(!1),Kt(Bv),xt(r.CULL_FACE),be(Wa);function xt(Z){g[Z]!==!0&&(r.enable(Z),g[Z]=!0)}function bt(Z){g[Z]!==!1&&(r.disable(Z),g[Z]=!1)}function Ht(Z,Dt){return _[Z]!==Dt?(r.bindFramebuffer(Z,Dt),_[Z]=Dt,Z===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Dt),Z===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Dt),!0):!1}function Jt(Z,Dt){let Ct=b,Ft=!1;if(Z){Ct=v.get(Dt),Ct===void 0&&(Ct=[],v.set(Dt,Ct));const At=Z.textures;if(Ct.length!==At.length||Ct[0]!==r.COLOR_ATTACHMENT0){for(let dt=0,Gt=At.length;dt<Gt;dt++)Ct[dt]=r.COLOR_ATTACHMENT0+dt;Ct.length=At.length,Ft=!0}}else Ct[0]!==r.BACK&&(Ct[0]=r.BACK,Ft=!0);Ft&&r.drawBuffers(Ct)}function ee(Z){return M!==Z?(r.useProgram(Z),M=Z,!0):!1}const Qe={[cr]:r.FUNC_ADD,[LM]:r.FUNC_SUBTRACT,[UM]:r.FUNC_REVERSE_SUBTRACT};Qe[NM]=r.MIN,Qe[OM]=r.MAX;const Se={[PM]:r.ZERO,[zM]:r.ONE,[IM]:r.SRC_COLOR,[yp]:r.SRC_ALPHA,[kM]:r.SRC_ALPHA_SATURATE,[GM]:r.DST_COLOR,[BM]:r.DST_ALPHA,[FM]:r.ONE_MINUS_SRC_COLOR,[Sp]:r.ONE_MINUS_SRC_ALPHA,[VM]:r.ONE_MINUS_DST_COLOR,[HM]:r.ONE_MINUS_DST_ALPHA,[jM]:r.CONSTANT_COLOR,[XM]:r.ONE_MINUS_CONSTANT_COLOR,[WM]:r.CONSTANT_ALPHA,[qM]:r.ONE_MINUS_CONSTANT_ALPHA};function be(Z,Dt,Ct,Ft,At,dt,Gt,re,He,Ue){if(Z===Wa){w===!0&&(bt(r.BLEND),w=!1);return}if(w===!1&&(xt(r.BLEND),w=!0),Z!==DM){if(Z!==y||Ue!==U){if((x!==cr||L!==cr)&&(r.blendEquation(r.FUNC_ADD),x=cr,L=cr),Ue)switch(Z){case wo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case rf:r.blendFunc(r.ONE,r.ONE);break;case Hv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Gv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ne("WebGLState: Invalid blending: ",Z);break}else switch(Z){case wo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case rf:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Hv:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gv:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",Z);break}A=null,C=null,B=null,P=null,N.set(0,0,0),T=0,y=Z,U=Ue}return}At=At||Dt,dt=dt||Ct,Gt=Gt||Ft,(Dt!==x||At!==L)&&(r.blendEquationSeparate(Qe[Dt],Qe[At]),x=Dt,L=At),(Ct!==A||Ft!==C||dt!==B||Gt!==P)&&(r.blendFuncSeparate(Se[Ct],Se[Ft],Se[dt],Se[Gt]),A=Ct,C=Ft,B=dt,P=Gt),(re.equals(N)===!1||He!==T)&&(r.blendColor(re.r,re.g,re.b,He),N.copy(re),T=He),y=Z,U=!1}function Le(Z,Dt){Z.side===Ji?bt(r.CULL_FACE):xt(r.CULL_FACE);let Ct=Z.side===ii;Dt&&(Ct=!Ct),_t(Ct),Z.blending===wo&&Z.transparent===!1?be(Wa):be(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),u.setFunc(Z.depthFunc),u.setTest(Z.depthTest),u.setMask(Z.depthWrite),c.setMask(Z.colorWrite);const Ft=Z.stencilWrite;h.setTest(Ft),Ft&&(h.setMask(Z.stencilWriteMask),h.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),h.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),Ce(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?xt(r.SAMPLE_ALPHA_TO_COVERAGE):bt(r.SAMPLE_ALPHA_TO_COVERAGE)}function _t(Z){rt!==Z&&(Z?r.frontFace(r.CW):r.frontFace(r.CCW),rt=Z)}function Kt(Z){Z!==wM?(xt(r.CULL_FACE),Z!==H&&(Z===Bv?r.cullFace(r.BACK):Z===RM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):bt(r.CULL_FACE),H=Z}function X(Z){Z!==K&&(z&&r.lineWidth(Z),K=Z)}function Ce(Z,Dt,Ct){Z?(xt(r.POLYGON_OFFSET_FILL),(et!==Dt||tt!==Ct)&&(et=Dt,tt=Ct,u.getReversed()&&(Dt=-Dt),r.polygonOffset(Dt,Ct))):bt(r.POLYGON_OFFSET_FILL)}function he(Z){Z?xt(r.SCISSOR_TEST):bt(r.SCISSOR_TEST)}function de(Z){Z===void 0&&(Z=r.TEXTURE0+J-1),mt!==Z&&(r.activeTexture(Z),mt=Z)}function kt(Z,Dt,Ct){Ct===void 0&&(mt===null?Ct=r.TEXTURE0+J-1:Ct=mt);let Ft=Et[Ct];Ft===void 0&&(Ft={type:void 0,texture:void 0},Et[Ct]=Ft),(Ft.type!==Z||Ft.texture!==Dt)&&(mt!==Ct&&(r.activeTexture(Ct),mt=Ct),r.bindTexture(Z,Dt||nt[Z]),Ft.type=Z,Ft.texture=Dt)}function O(){const Z=Et[mt];Z!==void 0&&Z.type!==void 0&&(r.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(Z){Ne("WebGLState:",Z)}}function Q(){try{r.compressedTexImage3D(...arguments)}catch(Z){Ne("WebGLState:",Z)}}function vt(){try{r.texSubImage2D(...arguments)}catch(Z){Ne("WebGLState:",Z)}}function Mt(){try{r.texSubImage3D(...arguments)}catch(Z){Ne("WebGLState:",Z)}}function pt(){try{r.compressedTexSubImage2D(...arguments)}catch(Z){Ne("WebGLState:",Z)}}function Wt(){try{r.compressedTexSubImage3D(...arguments)}catch(Z){Ne("WebGLState:",Z)}}function Lt(){try{r.texStorage2D(...arguments)}catch(Z){Ne("WebGLState:",Z)}}function $t(){try{r.texStorage3D(...arguments)}catch(Z){Ne("WebGLState:",Z)}}function ae(){try{r.texImage2D(...arguments)}catch(Z){Ne("WebGLState:",Z)}}function wt(){try{r.texImage3D(...arguments)}catch(Z){Ne("WebGLState:",Z)}}function Tt(Z){V.equals(Z)===!1&&(r.scissor(Z.x,Z.y,Z.z,Z.w),V.copy(Z))}function zt(Z){ht.equals(Z)===!1&&(r.viewport(Z.x,Z.y,Z.z,Z.w),ht.copy(Z))}function Pt(Z,Dt){let Ct=p.get(Dt);Ct===void 0&&(Ct=new WeakMap,p.set(Dt,Ct));let Ft=Ct.get(Z);Ft===void 0&&(Ft=r.getUniformBlockIndex(Dt,Z.name),Ct.set(Z,Ft))}function It(Z,Dt){const Ft=p.get(Dt).get(Z);m.get(Dt)!==Ft&&(r.uniformBlockBinding(Dt,Ft,Z.__bindingPointIndex),m.set(Dt,Ft))}function me(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},mt=null,Et={},_={},v=new WeakMap,b=[],M=null,w=!1,y=null,x=null,A=null,C=null,L=null,B=null,P=null,N=new Me(0,0,0),T=0,U=!1,rt=null,H=null,K=null,et=null,tt=null,V.set(0,0,r.canvas.width,r.canvas.height),ht.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:xt,disable:bt,bindFramebuffer:Ht,drawBuffers:Jt,useProgram:ee,setBlending:be,setMaterial:Le,setFlipSided:_t,setCullFace:Kt,setLineWidth:X,setPolygonOffset:Ce,setScissorTest:he,activeTexture:de,bindTexture:kt,unbindTexture:O,compressedTexImage2D:E,compressedTexImage3D:Q,texImage2D:ae,texImage3D:wt,updateUBOMapping:Pt,uniformBlockBinding:It,texStorage2D:Lt,texStorage3D:$t,texSubImage2D:vt,texSubImage3D:Mt,compressedTexSubImage2D:pt,compressedTexSubImage3D:Wt,scissor:Tt,viewport:zt,reset:me}}function n3(r,t,n,a,o,c,u){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ne,g=new WeakMap;let _;const v=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(O,E){return b?new OffscreenCanvas(O,E):Yl("canvas")}function w(O,E,Q){let vt=1;const Mt=kt(O);if((Mt.width>Q||Mt.height>Q)&&(vt=Q/Math.max(Mt.width,Mt.height)),vt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const pt=Math.floor(vt*Mt.width),Wt=Math.floor(vt*Mt.height);_===void 0&&(_=M(pt,Wt));const Lt=E?M(pt,Wt):_;return Lt.width=pt,Lt.height=Wt,Lt.getContext("2d").drawImage(O,0,0,pt,Wt),oe("WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+pt+"x"+Wt+")."),Lt}else return"data"in O&&oe("WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),O;return O}function y(O){return O.generateMipmaps}function x(O){r.generateMipmap(O)}function A(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(O,E,Q,vt,Mt=!1){if(O!==null){if(r[O]!==void 0)return r[O];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let pt=E;if(E===r.RED&&(Q===r.FLOAT&&(pt=r.R32F),Q===r.HALF_FLOAT&&(pt=r.R16F),Q===r.UNSIGNED_BYTE&&(pt=r.R8)),E===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(pt=r.R8UI),Q===r.UNSIGNED_SHORT&&(pt=r.R16UI),Q===r.UNSIGNED_INT&&(pt=r.R32UI),Q===r.BYTE&&(pt=r.R8I),Q===r.SHORT&&(pt=r.R16I),Q===r.INT&&(pt=r.R32I)),E===r.RG&&(Q===r.FLOAT&&(pt=r.RG32F),Q===r.HALF_FLOAT&&(pt=r.RG16F),Q===r.UNSIGNED_BYTE&&(pt=r.RG8)),E===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(pt=r.RG8UI),Q===r.UNSIGNED_SHORT&&(pt=r.RG16UI),Q===r.UNSIGNED_INT&&(pt=r.RG32UI),Q===r.BYTE&&(pt=r.RG8I),Q===r.SHORT&&(pt=r.RG16I),Q===r.INT&&(pt=r.RG32I)),E===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(pt=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(pt=r.RGB16UI),Q===r.UNSIGNED_INT&&(pt=r.RGB32UI),Q===r.BYTE&&(pt=r.RGB8I),Q===r.SHORT&&(pt=r.RGB16I),Q===r.INT&&(pt=r.RGB32I)),E===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(pt=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(pt=r.RGBA16UI),Q===r.UNSIGNED_INT&&(pt=r.RGBA32UI),Q===r.BYTE&&(pt=r.RGBA8I),Q===r.SHORT&&(pt=r.RGBA16I),Q===r.INT&&(pt=r.RGBA32I)),E===r.RGB&&(Q===r.UNSIGNED_INT_5_9_9_9_REV&&(pt=r.RGB9_E5),Q===r.UNSIGNED_INT_10F_11F_11F_REV&&(pt=r.R11F_G11F_B10F)),E===r.RGBA){const Wt=Mt?of:Oe.getTransfer(vt);Q===r.FLOAT&&(pt=r.RGBA32F),Q===r.HALF_FLOAT&&(pt=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(pt=Wt===ke?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT_4_4_4_4&&(pt=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(pt=r.RGB5_A1)}return(pt===r.R16F||pt===r.R32F||pt===r.RG16F||pt===r.RG32F||pt===r.RGBA16F||pt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function L(O,E){let Q;return O?E===null||E===_a||E===Wl?Q=r.DEPTH24_STENCIL8:E===ha?Q=r.DEPTH32F_STENCIL8:E===Xl&&(Q=r.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===_a||E===Wl?Q=r.DEPTH_COMPONENT24:E===ha?Q=r.DEPTH_COMPONENT32F:E===Xl&&(Q=r.DEPTH_COMPONENT16),Q}function B(O,E){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==Gn&&O.minFilter!==Un?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function P(O){const E=O.target;E.removeEventListener("dispose",P),T(E),E.isVideoTexture&&g.delete(E)}function N(O){const E=O.target;E.removeEventListener("dispose",N),rt(E)}function T(O){const E=a.get(O);if(E.__webglInit===void 0)return;const Q=O.source,vt=v.get(Q);if(vt){const Mt=vt[E.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&U(O),Object.keys(vt).length===0&&v.delete(Q)}a.remove(O)}function U(O){const E=a.get(O);r.deleteTexture(E.__webglTexture);const Q=O.source,vt=v.get(Q);delete vt[E.__cacheKey],u.memory.textures--}function rt(O){const E=a.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),a.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(E.__webglFramebuffer[vt]))for(let Mt=0;Mt<E.__webglFramebuffer[vt].length;Mt++)r.deleteFramebuffer(E.__webglFramebuffer[vt][Mt]);else r.deleteFramebuffer(E.__webglFramebuffer[vt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[vt])}else{if(Array.isArray(E.__webglFramebuffer))for(let vt=0;vt<E.__webglFramebuffer.length;vt++)r.deleteFramebuffer(E.__webglFramebuffer[vt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let vt=0;vt<E.__webglColorRenderbuffer.length;vt++)E.__webglColorRenderbuffer[vt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[vt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=O.textures;for(let vt=0,Mt=Q.length;vt<Mt;vt++){const pt=a.get(Q[vt]);pt.__webglTexture&&(r.deleteTexture(pt.__webglTexture),u.memory.textures--),a.remove(Q[vt])}a.remove(O)}let H=0;function K(){H=0}function et(){const O=H;return O>=o.maxTextures&&oe("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+o.maxTextures),H+=1,O}function tt(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function J(O,E){const Q=a.get(O);if(O.isVideoTexture&&he(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Q.__version!==O.version){const vt=O.image;if(vt===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(Q,O,E);return}}else O.isExternalTexture&&(Q.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+E)}function z(O,E){const Q=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Q.__version!==O.version){nt(Q,O,E);return}else O.isExternalTexture&&(Q.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+E)}function G(O,E){const Q=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Q.__version!==O.version){nt(Q,O,E);return}n.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+E)}function ut(O,E){const Q=a.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&Q.__version!==O.version){xt(Q,O,E);return}n.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+E)}const mt={[Cp]:r.REPEAT,[Xa]:r.CLAMP_TO_EDGE,[Dp]:r.MIRRORED_REPEAT},Et={[Gn]:r.NEAREST,[KM]:r.NEAREST_MIPMAP_NEAREST,[du]:r.NEAREST_MIPMAP_LINEAR,[Un]:r.LINEAR,[Cd]:r.LINEAR_MIPMAP_NEAREST,[fr]:r.LINEAR_MIPMAP_LINEAR},F={[$M]:r.NEVER,[aE]:r.ALWAYS,[tE]:r.LESS,[Rm]:r.LEQUAL,[eE]:r.EQUAL,[Cm]:r.GEQUAL,[nE]:r.GREATER,[iE]:r.NOTEQUAL};function q(O,E){if(E.type===ha&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Un||E.magFilter===Cd||E.magFilter===du||E.magFilter===fr||E.minFilter===Un||E.minFilter===Cd||E.minFilter===du||E.minFilter===fr)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,mt[E.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,mt[E.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,mt[E.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,Et[E.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,Et[E.minFilter]),E.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,F[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Gn||E.minFilter!==du&&E.minFilter!==fr||E.type===ha&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(O,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function V(O,E){let Q=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",P));const vt=E.source;let Mt=v.get(vt);Mt===void 0&&(Mt={},v.set(vt,Mt));const pt=tt(E);if(pt!==O.__cacheKey){Mt[pt]===void 0&&(Mt[pt]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),Mt[pt].usedTimes++;const Wt=Mt[O.__cacheKey];Wt!==void 0&&(Mt[O.__cacheKey].usedTimes--,Wt.usedTimes===0&&U(E)),O.__cacheKey=pt,O.__webglTexture=Mt[pt].texture}return Q}function ht(O,E,Q){return Math.floor(Math.floor(O/Q)/E)}function Rt(O,E,Q,vt){const pt=O.updateRanges;if(pt.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,Q,vt,E.data);else{pt.sort((wt,Tt)=>wt.start-Tt.start);let Wt=0;for(let wt=1;wt<pt.length;wt++){const Tt=pt[Wt],zt=pt[wt],Pt=Tt.start+Tt.count,It=ht(zt.start,E.width,4),me=ht(Tt.start,E.width,4);zt.start<=Pt+1&&It===me&&ht(zt.start+zt.count-1,E.width,4)===It?Tt.count=Math.max(Tt.count,zt.start+zt.count-Tt.start):(++Wt,pt[Wt]=zt)}pt.length=Wt+1;const Lt=r.getParameter(r.UNPACK_ROW_LENGTH),$t=r.getParameter(r.UNPACK_SKIP_PIXELS),ae=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let wt=0,Tt=pt.length;wt<Tt;wt++){const zt=pt[wt],Pt=Math.floor(zt.start/4),It=Math.ceil(zt.count/4),me=Pt%E.width,Z=Math.floor(Pt/E.width),Dt=It,Ct=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,me),r.pixelStorei(r.UNPACK_SKIP_ROWS,Z),n.texSubImage2D(r.TEXTURE_2D,0,me,Z,Dt,Ct,Q,vt,E.data)}O.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Lt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,$t),r.pixelStorei(r.UNPACK_SKIP_ROWS,ae)}}function nt(O,E,Q){let vt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(vt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(vt=r.TEXTURE_3D);const Mt=V(O,E),pt=E.source;n.bindTexture(vt,O.__webglTexture,r.TEXTURE0+Q);const Wt=a.get(pt);if(pt.version!==Wt.__version||Mt===!0){n.activeTexture(r.TEXTURE0+Q);const Lt=Oe.getPrimaries(Oe.workingColorSpace),$t=E.colorSpace===Us?null:Oe.getPrimaries(E.colorSpace),ae=E.colorSpace===Us||Lt===$t?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let wt=w(E.image,!1,o.maxTextureSize);wt=de(E,wt);const Tt=c.convert(E.format,E.colorSpace),zt=c.convert(E.type);let Pt=C(E.internalFormat,Tt,zt,E.colorSpace,E.isVideoTexture);q(vt,E);let It;const me=E.mipmaps,Z=E.isVideoTexture!==!0,Dt=Wt.__version===void 0||Mt===!0,Ct=pt.dataReady,Ft=B(E,wt);if(E.isDepthTexture)Pt=L(E.format===hr,E.type),Dt&&(Z?n.texStorage2D(r.TEXTURE_2D,1,Pt,wt.width,wt.height):n.texImage2D(r.TEXTURE_2D,0,Pt,wt.width,wt.height,0,Tt,zt,null));else if(E.isDataTexture)if(me.length>0){Z&&Dt&&n.texStorage2D(r.TEXTURE_2D,Ft,Pt,me[0].width,me[0].height);for(let At=0,dt=me.length;At<dt;At++)It=me[At],Z?Ct&&n.texSubImage2D(r.TEXTURE_2D,At,0,0,It.width,It.height,Tt,zt,It.data):n.texImage2D(r.TEXTURE_2D,At,Pt,It.width,It.height,0,Tt,zt,It.data);E.generateMipmaps=!1}else Z?(Dt&&n.texStorage2D(r.TEXTURE_2D,Ft,Pt,wt.width,wt.height),Ct&&Rt(E,wt,Tt,zt)):n.texImage2D(r.TEXTURE_2D,0,Pt,wt.width,wt.height,0,Tt,zt,wt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Z&&Dt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ft,Pt,me[0].width,me[0].height,wt.depth);for(let At=0,dt=me.length;At<dt;At++)if(It=me[At],E.format!==ta)if(Tt!==null)if(Z){if(Ct)if(E.layerUpdates.size>0){const Gt=vx(It.width,It.height,E.format,E.type);for(const re of E.layerUpdates){const He=It.data.subarray(re*Gt/It.data.BYTES_PER_ELEMENT,(re+1)*Gt/It.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,re,It.width,It.height,1,Tt,He)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,It.width,It.height,wt.depth,Tt,It.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,At,Pt,It.width,It.height,wt.depth,0,It.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Z?Ct&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,It.width,It.height,wt.depth,Tt,zt,It.data):n.texImage3D(r.TEXTURE_2D_ARRAY,At,Pt,It.width,It.height,wt.depth,0,Tt,zt,It.data)}else{Z&&Dt&&n.texStorage2D(r.TEXTURE_2D,Ft,Pt,me[0].width,me[0].height);for(let At=0,dt=me.length;At<dt;At++)It=me[At],E.format!==ta?Tt!==null?Z?Ct&&n.compressedTexSubImage2D(r.TEXTURE_2D,At,0,0,It.width,It.height,Tt,It.data):n.compressedTexImage2D(r.TEXTURE_2D,At,Pt,It.width,It.height,0,It.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?Ct&&n.texSubImage2D(r.TEXTURE_2D,At,0,0,It.width,It.height,Tt,zt,It.data):n.texImage2D(r.TEXTURE_2D,At,Pt,It.width,It.height,0,Tt,zt,It.data)}else if(E.isDataArrayTexture)if(Z){if(Dt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ft,Pt,wt.width,wt.height,wt.depth),Ct)if(E.layerUpdates.size>0){const At=vx(wt.width,wt.height,E.format,E.type);for(const dt of E.layerUpdates){const Gt=wt.data.subarray(dt*At/wt.data.BYTES_PER_ELEMENT,(dt+1)*At/wt.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,dt,wt.width,wt.height,1,Tt,zt,Gt)}E.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Tt,zt,wt.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Pt,wt.width,wt.height,wt.depth,0,Tt,zt,wt.data);else if(E.isData3DTexture)Z?(Dt&&n.texStorage3D(r.TEXTURE_3D,Ft,Pt,wt.width,wt.height,wt.depth),Ct&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Tt,zt,wt.data)):n.texImage3D(r.TEXTURE_3D,0,Pt,wt.width,wt.height,wt.depth,0,Tt,zt,wt.data);else if(E.isFramebufferTexture){if(Dt)if(Z)n.texStorage2D(r.TEXTURE_2D,Ft,Pt,wt.width,wt.height);else{let At=wt.width,dt=wt.height;for(let Gt=0;Gt<Ft;Gt++)n.texImage2D(r.TEXTURE_2D,Gt,Pt,At,dt,0,Tt,zt,null),At>>=1,dt>>=1}}else if(me.length>0){if(Z&&Dt){const At=kt(me[0]);n.texStorage2D(r.TEXTURE_2D,Ft,Pt,At.width,At.height)}for(let At=0,dt=me.length;At<dt;At++)It=me[At],Z?Ct&&n.texSubImage2D(r.TEXTURE_2D,At,0,0,Tt,zt,It):n.texImage2D(r.TEXTURE_2D,At,Pt,Tt,zt,It);E.generateMipmaps=!1}else if(Z){if(Dt){const At=kt(wt);n.texStorage2D(r.TEXTURE_2D,Ft,Pt,At.width,At.height)}Ct&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Tt,zt,wt)}else n.texImage2D(r.TEXTURE_2D,0,Pt,Tt,zt,wt);y(E)&&x(vt),Wt.__version=pt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function xt(O,E,Q){if(E.image.length!==6)return;const vt=V(O,E),Mt=E.source;n.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+Q);const pt=a.get(Mt);if(Mt.version!==pt.__version||vt===!0){n.activeTexture(r.TEXTURE0+Q);const Wt=Oe.getPrimaries(Oe.workingColorSpace),Lt=E.colorSpace===Us?null:Oe.getPrimaries(E.colorSpace),$t=E.colorSpace===Us||Wt===Lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);const ae=E.isCompressedTexture||E.image[0].isCompressedTexture,wt=E.image[0]&&E.image[0].isDataTexture,Tt=[];for(let dt=0;dt<6;dt++)!ae&&!wt?Tt[dt]=w(E.image[dt],!0,o.maxCubemapSize):Tt[dt]=wt?E.image[dt].image:E.image[dt],Tt[dt]=de(E,Tt[dt]);const zt=Tt[0],Pt=c.convert(E.format,E.colorSpace),It=c.convert(E.type),me=C(E.internalFormat,Pt,It,E.colorSpace),Z=E.isVideoTexture!==!0,Dt=pt.__version===void 0||vt===!0,Ct=Mt.dataReady;let Ft=B(E,zt);q(r.TEXTURE_CUBE_MAP,E);let At;if(ae){Z&&Dt&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Ft,me,zt.width,zt.height);for(let dt=0;dt<6;dt++){At=Tt[dt].mipmaps;for(let Gt=0;Gt<At.length;Gt++){const re=At[Gt];E.format!==ta?Pt!==null?Z?Ct&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,0,0,re.width,re.height,Pt,re.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,me,re.width,re.height,0,re.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,0,0,re.width,re.height,Pt,It,re.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,me,re.width,re.height,0,Pt,It,re.data)}}}else{if(At=E.mipmaps,Z&&Dt){At.length>0&&Ft++;const dt=kt(Tt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Ft,me,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(wt){Z?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Tt[dt].width,Tt[dt].height,Pt,It,Tt[dt].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,me,Tt[dt].width,Tt[dt].height,0,Pt,It,Tt[dt].data);for(let Gt=0;Gt<At.length;Gt++){const He=At[Gt].image[dt].image;Z?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,0,0,He.width,He.height,Pt,It,He.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,me,He.width,He.height,0,Pt,It,He.data)}}else{Z?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Pt,It,Tt[dt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,me,Pt,It,Tt[dt]);for(let Gt=0;Gt<At.length;Gt++){const re=At[Gt];Z?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,0,0,Pt,It,re.image[dt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,me,Pt,It,re.image[dt])}}}y(E)&&x(r.TEXTURE_CUBE_MAP),pt.__version=Mt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function bt(O,E,Q,vt,Mt,pt){const Wt=c.convert(Q.format,Q.colorSpace),Lt=c.convert(Q.type),$t=C(Q.internalFormat,Wt,Lt,Q.colorSpace),ae=a.get(E),wt=a.get(Q);if(wt.__renderTarget=E,!ae.__hasExternalTextures){const Tt=Math.max(1,E.width>>pt),zt=Math.max(1,E.height>>pt);Mt===r.TEXTURE_3D||Mt===r.TEXTURE_2D_ARRAY?n.texImage3D(Mt,pt,$t,Tt,zt,E.depth,0,Wt,Lt,null):n.texImage2D(Mt,pt,$t,Tt,zt,0,Wt,Lt,null)}n.bindFramebuffer(r.FRAMEBUFFER,O),Ce(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,vt,Mt,wt.__webglTexture,0,X(E)):(Mt===r.TEXTURE_2D||Mt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,vt,Mt,wt.__webglTexture,pt),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Ht(O,E,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,O),E.depthBuffer){const vt=E.depthTexture,Mt=vt&&vt.isDepthTexture?vt.type:null,pt=L(E.stencilBuffer,Mt),Wt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ce(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,X(E),pt,E.width,E.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,X(E),pt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,pt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Wt,r.RENDERBUFFER,O)}else{const vt=E.textures;for(let Mt=0;Mt<vt.length;Mt++){const pt=vt[Mt],Wt=c.convert(pt.format,pt.colorSpace),Lt=c.convert(pt.type),$t=C(pt.internalFormat,Wt,Lt,pt.colorSpace);Ce(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,X(E),$t,E.width,E.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,X(E),$t,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,$t,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Jt(O,E,Q){const vt=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Mt=a.get(E.depthTexture);if(Mt.__renderTarget=E,(!Mt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),vt){if(Mt.__webglInit===void 0&&(Mt.__webglInit=!0,E.depthTexture.addEventListener("dispose",P)),Mt.__webglTexture===void 0){Mt.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,Mt.__webglTexture),q(r.TEXTURE_CUBE_MAP,E.depthTexture);const ae=c.convert(E.depthTexture.format),wt=c.convert(E.depthTexture.type);let Tt;E.depthTexture.format===Ka?Tt=r.DEPTH_COMPONENT24:E.depthTexture.format===hr&&(Tt=r.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,Tt,E.width,E.height,0,ae,wt,null)}}else J(E.depthTexture,0);const pt=Mt.__webglTexture,Wt=X(E),Lt=vt?r.TEXTURE_CUBE_MAP_POSITIVE_X+Q:r.TEXTURE_2D,$t=E.depthTexture.format===hr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ka)Ce(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$t,Lt,pt,0,Wt):r.framebufferTexture2D(r.FRAMEBUFFER,$t,Lt,pt,0);else if(E.depthTexture.format===hr)Ce(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$t,Lt,pt,0,Wt):r.framebufferTexture2D(r.FRAMEBUFFER,$t,Lt,pt,0);else throw new Error("Unknown depthTexture format")}function ee(O){const E=a.get(O),Q=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const vt=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),vt){const Mt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,vt.removeEventListener("dispose",Mt)};vt.addEventListener("dispose",Mt),E.__depthDisposeCallback=Mt}E.__boundDepthTexture=vt}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let vt=0;vt<6;vt++)Jt(E.__webglFramebuffer[vt],O,vt);else{const vt=O.texture.mipmaps;vt&&vt.length>0?Jt(E.__webglFramebuffer[0],O,0):Jt(E.__webglFramebuffer,O,0)}else if(Q){E.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[vt]),E.__webglDepthbuffer[vt]===void 0)E.__webglDepthbuffer[vt]=r.createRenderbuffer(),Ht(E.__webglDepthbuffer[vt],O,!1);else{const Mt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=E.__webglDepthbuffer[vt];r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,pt)}}else{const vt=O.texture.mipmaps;if(vt&&vt.length>0?n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Ht(E.__webglDepthbuffer,O,!1);else{const Mt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,pt)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Qe(O,E,Q){const vt=a.get(O);E!==void 0&&bt(vt.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&ee(O)}function Se(O){const E=O.texture,Q=a.get(O),vt=a.get(E);O.addEventListener("dispose",N);const Mt=O.textures,pt=O.isWebGLCubeRenderTarget===!0,Wt=Mt.length>1;if(Wt||(vt.__webglTexture===void 0&&(vt.__webglTexture=r.createTexture()),vt.__version=E.version,u.memory.textures++),pt){Q.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[Lt]=[];for(let $t=0;$t<E.mipmaps.length;$t++)Q.__webglFramebuffer[Lt][$t]=r.createFramebuffer()}else Q.__webglFramebuffer[Lt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Lt=0;Lt<E.mipmaps.length;Lt++)Q.__webglFramebuffer[Lt]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(Wt)for(let Lt=0,$t=Mt.length;Lt<$t;Lt++){const ae=a.get(Mt[Lt]);ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture(),u.memory.textures++)}if(O.samples>0&&Ce(O)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Lt=0;Lt<Mt.length;Lt++){const $t=Mt[Lt];Q.__webglColorRenderbuffer[Lt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[Lt]);const ae=c.convert($t.format,$t.colorSpace),wt=c.convert($t.type),Tt=C($t.internalFormat,ae,wt,$t.colorSpace,O.isXRRenderTarget===!0),zt=X(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,zt,Tt,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,Q.__webglColorRenderbuffer[Lt])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),Ht(Q.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pt){n.bindTexture(r.TEXTURE_CUBE_MAP,vt.__webglTexture),q(r.TEXTURE_CUBE_MAP,E);for(let Lt=0;Lt<6;Lt++)if(E.mipmaps&&E.mipmaps.length>0)for(let $t=0;$t<E.mipmaps.length;$t++)bt(Q.__webglFramebuffer[Lt][$t],O,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,$t);else bt(Q.__webglFramebuffer[Lt],O,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);y(E)&&x(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Wt){for(let Lt=0,$t=Mt.length;Lt<$t;Lt++){const ae=Mt[Lt],wt=a.get(ae);let Tt=r.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Tt=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Tt,wt.__webglTexture),q(Tt,ae),bt(Q.__webglFramebuffer,O,ae,r.COLOR_ATTACHMENT0+Lt,Tt,0),y(ae)&&x(Tt)}n.unbindTexture()}else{let Lt=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Lt=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Lt,vt.__webglTexture),q(Lt,E),E.mipmaps&&E.mipmaps.length>0)for(let $t=0;$t<E.mipmaps.length;$t++)bt(Q.__webglFramebuffer[$t],O,E,r.COLOR_ATTACHMENT0,Lt,$t);else bt(Q.__webglFramebuffer,O,E,r.COLOR_ATTACHMENT0,Lt,0);y(E)&&x(Lt),n.unbindTexture()}O.depthBuffer&&ee(O)}function be(O){const E=O.textures;for(let Q=0,vt=E.length;Q<vt;Q++){const Mt=E[Q];if(y(Mt)){const pt=A(O),Wt=a.get(Mt).__webglTexture;n.bindTexture(pt,Wt),x(pt),n.unbindTexture()}}}const Le=[],_t=[];function Kt(O){if(O.samples>0){if(Ce(O)===!1){const E=O.textures,Q=O.width,vt=O.height;let Mt=r.COLOR_BUFFER_BIT;const pt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Wt=a.get(O),Lt=E.length>1;if(Lt)for(let ae=0;ae<E.length;ae++)n.bindFramebuffer(r.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer);const $t=O.texture.mipmaps;$t&&$t.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let ae=0;ae<E.length;ae++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Mt|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Mt|=r.STENCIL_BUFFER_BIT)),Lt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Wt.__webglColorRenderbuffer[ae]);const wt=a.get(E[ae]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,wt,0)}r.blitFramebuffer(0,0,Q,vt,0,0,Q,vt,Mt,r.NEAREST),m===!0&&(Le.length=0,_t.length=0,Le.push(r.COLOR_ATTACHMENT0+ae),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Le.push(pt),_t.push(pt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,_t)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Le))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Lt)for(let ae=0;ae<E.length;ae++){n.bindFramebuffer(r.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,Wt.__webglColorRenderbuffer[ae]);const wt=a.get(E[ae]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,wt,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function X(O){return Math.min(o.maxSamples,O.samples)}function Ce(O){const E=a.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function he(O){const E=u.render.frame;g.get(O)!==E&&(g.set(O,E),O.update())}function de(O,E){const Q=O.colorSpace,vt=O.format,Mt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Q!==No&&Q!==Us&&(Oe.getTransfer(Q)===ke?(vt!==ta||Mt!==Ti)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",Q)),E}function kt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=et,this.resetTextureUnits=K,this.setTexture2D=J,this.setTexture2DArray=z,this.setTexture3D=G,this.setTextureCube=ut,this.rebindTextures=Qe,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Ce,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function i3(r,t){function n(a,o=Us){let c;const u=Oe.getTransfer(o);if(a===Ti)return r.UNSIGNED_BYTE;if(a===Mm)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Em)return r.UNSIGNED_SHORT_5_5_5_1;if(a===gy)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===_y)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===py)return r.BYTE;if(a===my)return r.SHORT;if(a===Xl)return r.UNSIGNED_SHORT;if(a===bm)return r.INT;if(a===_a)return r.UNSIGNED_INT;if(a===ha)return r.FLOAT;if(a===Za)return r.HALF_FLOAT;if(a===vy)return r.ALPHA;if(a===xy)return r.RGB;if(a===ta)return r.RGBA;if(a===Ka)return r.DEPTH_COMPONENT;if(a===hr)return r.DEPTH_STENCIL;if(a===yy)return r.RED;if(a===Tm)return r.RED_INTEGER;if(a===Uo)return r.RG;if(a===Am)return r.RG_INTEGER;if(a===wm)return r.RGBA_INTEGER;if(a===$u||a===tf||a===ef||a===nf)if(u===ke)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===$u)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===tf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ef)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===nf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===$u)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===tf)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ef)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===nf)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Lp||a===Up||a===Np||a===Op)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Lp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Up)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Np)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Op)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Pp||a===zp||a===Ip||a===Fp||a===Bp||a===Hp||a===Gp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Pp||a===zp)return u===ke?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Ip)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===Fp)return c.COMPRESSED_R11_EAC;if(a===Bp)return c.COMPRESSED_SIGNED_R11_EAC;if(a===Hp)return c.COMPRESSED_RG11_EAC;if(a===Gp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Vp||a===kp||a===jp||a===Xp||a===Wp||a===qp||a===Yp||a===Zp||a===Kp||a===Qp||a===Jp||a===$p||a===tm||a===em)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Vp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===kp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===jp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Xp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Wp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===qp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Yp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Zp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Kp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Qp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Jp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===$p)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===tm)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===em)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===nm||a===im||a===am)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===nm)return u===ke?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===im)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===am)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===sm||a===rm||a===om||a===lm)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===sm)return c.COMPRESSED_RED_RGTC1_EXT;if(a===rm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===om)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===lm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Wl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const a3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class r3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new Ny(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Hi({vertexShader:a3,fragmentShader:s3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new en(new $l(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class o3 extends _r{constructor(t,n){super();const a=this;let o=null,c=1,u=null,h="local-floor",m=1,p=null,g=null,_=null,v=null,b=null,M=null;const w=typeof XRWebGLBinding<"u",y=new r3,x={},A=n.getContextAttributes();let C=null,L=null;const B=[],P=[],N=new ne;let T=null;const U=new Ii;U.viewport=new Ke;const rt=new Ii;rt.viewport=new Ke;const H=[U,rt],K=new m1;let et=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let xt=B[nt];return xt===void 0&&(xt=new Pd,B[nt]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(nt){let xt=B[nt];return xt===void 0&&(xt=new Pd,B[nt]=xt),xt.getGripSpace()},this.getHand=function(nt){let xt=B[nt];return xt===void 0&&(xt=new Pd,B[nt]=xt),xt.getHandSpace()};function J(nt){const xt=P.indexOf(nt.inputSource);if(xt===-1)return;const bt=B[xt];bt!==void 0&&(bt.update(nt.inputSource,nt.frame,p||u),bt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function z(){o.removeEventListener("select",J),o.removeEventListener("selectstart",J),o.removeEventListener("selectend",J),o.removeEventListener("squeeze",J),o.removeEventListener("squeezestart",J),o.removeEventListener("squeezeend",J),o.removeEventListener("end",z),o.removeEventListener("inputsourceschange",G);for(let nt=0;nt<B.length;nt++){const xt=P[nt];xt!==null&&(P[nt]=null,B[nt].disconnect(xt))}et=null,tt=null,y.reset();for(const nt in x)delete x[nt];t.setRenderTarget(C),b=null,v=null,_=null,o=null,L=null,Rt.stop(),a.isPresenting=!1,t.setPixelRatio(T),t.setSize(N.width,N.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,a.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){h=nt,a.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return v!==null?v:b},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(nt){if(o=nt,o!==null){if(C=t.getRenderTarget(),o.addEventListener("select",J),o.addEventListener("selectstart",J),o.addEventListener("selectend",J),o.addEventListener("squeeze",J),o.addEventListener("squeezestart",J),o.addEventListener("squeezeend",J),o.addEventListener("end",z),o.addEventListener("inputsourceschange",G),A.xrCompatible!==!0&&await n.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(N),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Ht=null,Jt=null;A.depth&&(Jt=A.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,bt=A.stencil?hr:Ka,Ht=A.stencil?Wl:_a);const ee={colorFormat:n.RGBA8,depthFormat:Jt,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(ee),o.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),L=new ga(v.textureWidth,v.textureHeight,{format:ta,type:Ti,depthTexture:new Kl(v.textureWidth,v.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const bt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(o,n,bt),o.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),L=new ga(b.framebufferWidth,b.framebufferHeight,{format:ta,type:Ti,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(h),Rt.setContext(o),Rt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(nt){for(let xt=0;xt<nt.removed.length;xt++){const bt=nt.removed[xt],Ht=P.indexOf(bt);Ht>=0&&(P[Ht]=null,B[Ht].disconnect(bt))}for(let xt=0;xt<nt.added.length;xt++){const bt=nt.added[xt];let Ht=P.indexOf(bt);if(Ht===-1){for(let ee=0;ee<B.length;ee++)if(ee>=P.length){P.push(bt),Ht=ee;break}else if(P[ee]===null){P[ee]=bt,Ht=ee;break}if(Ht===-1)break}const Jt=B[Ht];Jt&&Jt.connect(bt)}}const ut=new j,mt=new j;function Et(nt,xt,bt){ut.setFromMatrixPosition(xt.matrixWorld),mt.setFromMatrixPosition(bt.matrixWorld);const Ht=ut.distanceTo(mt),Jt=xt.projectionMatrix.elements,ee=bt.projectionMatrix.elements,Qe=Jt[14]/(Jt[10]-1),Se=Jt[14]/(Jt[10]+1),be=(Jt[9]+1)/Jt[5],Le=(Jt[9]-1)/Jt[5],_t=(Jt[8]-1)/Jt[0],Kt=(ee[8]+1)/ee[0],X=Qe*_t,Ce=Qe*Kt,he=Ht/(-_t+Kt),de=he*-_t;if(xt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(de),nt.translateZ(he),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Jt[10]===-1)nt.projectionMatrix.copy(xt.projectionMatrix),nt.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{const kt=Qe+he,O=Se+he,E=X-de,Q=Ce+(Ht-de),vt=be*Se/O*kt,Mt=Le*Se/O*kt;nt.projectionMatrix.makePerspective(E,Q,vt,Mt,kt,O),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function F(nt,xt){xt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(xt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(o===null)return;let xt=nt.near,bt=nt.far;y.texture!==null&&(y.depthNear>0&&(xt=y.depthNear),y.depthFar>0&&(bt=y.depthFar)),K.near=rt.near=U.near=xt,K.far=rt.far=U.far=bt,(et!==K.near||tt!==K.far)&&(o.updateRenderState({depthNear:K.near,depthFar:K.far}),et=K.near,tt=K.far),K.layers.mask=nt.layers.mask|6,U.layers.mask=K.layers.mask&-5,rt.layers.mask=K.layers.mask&-3;const Ht=nt.parent,Jt=K.cameras;F(K,Ht);for(let ee=0;ee<Jt.length;ee++)F(Jt[ee],Ht);Jt.length===2?Et(K,U,rt):K.projectionMatrix.copy(U.projectionMatrix),q(nt,K,Ht)};function q(nt,xt,bt){bt===null?nt.matrix.copy(xt.matrixWorld):(nt.matrix.copy(bt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(xt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(xt.projectionMatrix),nt.projectionMatrixInverse.copy(xt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Zl*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(v===null&&b===null))return m},this.setFoveation=function(nt){m=nt,v!==null&&(v.fixedFoveation=nt),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=nt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(K)},this.getCameraTexture=function(nt){return x[nt]};let V=null;function ht(nt,xt){if(g=xt.getViewerPose(p||u),M=xt,g!==null){const bt=g.views;b!==null&&(t.setRenderTargetFramebuffer(L,b.framebuffer),t.setRenderTarget(L));let Ht=!1;bt.length!==K.cameras.length&&(K.cameras.length=0,Ht=!0);for(let Se=0;Se<bt.length;Se++){const be=bt[Se];let Le=null;if(b!==null)Le=b.getViewport(be);else{const Kt=_.getViewSubImage(v,be);Le=Kt.viewport,Se===0&&(t.setRenderTargetTextures(L,Kt.colorTexture,Kt.depthStencilTexture),t.setRenderTarget(L))}let _t=H[Se];_t===void 0&&(_t=new Ii,_t.layers.enable(Se),_t.viewport=new Ke,H[Se]=_t),_t.matrix.fromArray(be.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(be.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(Le.x,Le.y,Le.width,Le.height),Se===0&&(K.matrix.copy(_t.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ht===!0&&K.cameras.push(_t)}const Jt=o.enabledFeatures;if(Jt&&Jt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){_=a.getBinding();const Se=_.getDepthInformation(bt[0]);Se&&Se.isValid&&Se.texture&&y.init(Se,o.renderState)}if(Jt&&Jt.includes("camera-access")&&w){t.state.unbindTexture(),_=a.getBinding();for(let Se=0;Se<bt.length;Se++){const be=bt[Se].camera;if(be){let Le=x[be];Le||(Le=new Ny,x[be]=Le);const _t=_.getCameraImage(be);Le.sourceTexture=_t}}}}for(let bt=0;bt<B.length;bt++){const Ht=P[bt],Jt=B[bt];Ht!==null&&Jt!==void 0&&Jt.update(Ht,xt,p||u)}V&&V(nt,xt),xt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:xt}),M=null}const Rt=new zy;Rt.setAnimationLoop(ht),this.setAnimationLoop=function(nt){V=nt},this.dispose=function(){}}}const rr=new va,l3=new nn;function c3(r,t){function n(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function a(y,x){x.color.getRGB(y.fogColor.value,Oy(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,A,C,L){x.isMeshBasicMaterial?c(y,x):x.isMeshLambertMaterial?(c(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(y,x),_(y,x)):x.isMeshPhongMaterial?(c(y,x),g(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(y,x),v(y,x),x.isMeshPhysicalMaterial&&b(y,x,L)):x.isMeshMatcapMaterial?(c(y,x),M(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),w(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&h(y,x)):x.isPointsMaterial?m(y,x,A,C):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,n(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===ii&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,n(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===ii&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,n(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,n(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const A=t.get(x),C=A.envMap,L=A.envMapRotation;C&&(y.envMap.value=C,rr.copy(L),rr.x*=-1,rr.y*=-1,rr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),y.envMapRotation.value.setFromMatrix4(l3.makeRotationFromEuler(rr)),y.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform))}function h(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,A,C){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*A,y.scale.value=C*.5,x.map&&(y.map.value=x.map,n(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function g(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function b(y,x,A){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ii&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=A.texture,y.transmissionSamplerSize.value.set(A.width,A.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,x){x.matcap&&(y.matcap.value=x.matcap)}function w(y,x){const A=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(A.matrixWorld),y.nearDistance.value=A.shadow.camera.near,y.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function u3(r,t,n,a){let o={},c={},u=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,C){const L=C.program;a.uniformBlockBinding(A,L)}function p(A,C){let L=o[A.id];L===void 0&&(M(A),L=g(A),o[A.id]=L,A.addEventListener("dispose",y));const B=C.program;a.updateUBOMapping(A,B);const P=t.render.frame;c[A.id]!==P&&(v(A),c[A.id]=P)}function g(A){const C=_();A.__bindingPointIndex=C;const L=r.createBuffer(),B=A.__size,P=A.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,B,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,C,L),L}function _(){for(let A=0;A<h;A++)if(u.indexOf(A)===-1)return u.push(A),A;return Ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(A){const C=o[A.id],L=A.uniforms,B=A.__cache;r.bindBuffer(r.UNIFORM_BUFFER,C);for(let P=0,N=L.length;P<N;P++){const T=Array.isArray(L[P])?L[P]:[L[P]];for(let U=0,rt=T.length;U<rt;U++){const H=T[U];if(b(H,P,U,B)===!0){const K=H.__offset,et=Array.isArray(H.value)?H.value:[H.value];let tt=0;for(let J=0;J<et.length;J++){const z=et[J],G=w(z);typeof z=="number"||typeof z=="boolean"?(H.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,K+tt,H.__data)):z.isMatrix3?(H.__data[0]=z.elements[0],H.__data[1]=z.elements[1],H.__data[2]=z.elements[2],H.__data[3]=0,H.__data[4]=z.elements[3],H.__data[5]=z.elements[4],H.__data[6]=z.elements[5],H.__data[7]=0,H.__data[8]=z.elements[6],H.__data[9]=z.elements[7],H.__data[10]=z.elements[8],H.__data[11]=0):(z.toArray(H.__data,tt),tt+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,K,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function b(A,C,L,B){const P=A.value,N=C+"_"+L;if(B[N]===void 0)return typeof P=="number"||typeof P=="boolean"?B[N]=P:B[N]=P.clone(),!0;{const T=B[N];if(typeof P=="number"||typeof P=="boolean"){if(T!==P)return B[N]=P,!0}else if(T.equals(P)===!1)return T.copy(P),!0}return!1}function M(A){const C=A.uniforms;let L=0;const B=16;for(let N=0,T=C.length;N<T;N++){const U=Array.isArray(C[N])?C[N]:[C[N]];for(let rt=0,H=U.length;rt<H;rt++){const K=U[rt],et=Array.isArray(K.value)?K.value:[K.value];for(let tt=0,J=et.length;tt<J;tt++){const z=et[tt],G=w(z),ut=L%B,mt=ut%G.boundary,Et=ut+mt;L+=mt,Et!==0&&B-Et<G.storage&&(L+=B-Et),K.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=L,L+=G.storage}}}const P=L%B;return P>0&&(L+=B-P),A.__size=L,A.__cache={},this}function w(A){const C={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(C.boundary=4,C.storage=4):A.isVector2?(C.boundary=8,C.storage=8):A.isVector3||A.isColor?(C.boundary=16,C.storage=12):A.isVector4?(C.boundary=16,C.storage=16):A.isMatrix3?(C.boundary=48,C.storage=48):A.isMatrix4?(C.boundary=64,C.storage=64):A.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):oe("WebGLRenderer: Unsupported uniform value type.",A),C}function y(A){const C=A.target;C.removeEventListener("dispose",y);const L=u.indexOf(C.__bindingPointIndex);u.splice(L,1),r.deleteBuffer(o[C.id]),delete o[C.id],delete c[C.id]}function x(){for(const A in o)r.deleteBuffer(o[A]);u=[],o={},c={}}return{bind:m,update:p,dispose:x}}const f3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oa=null;function h3(){return oa===null&&(oa=new jE(f3,16,16,Uo,Za),oa.name="DFG_LUT",oa.minFilter=Un,oa.magFilter=Un,oa.wrapS=Xa,oa.wrapT=Xa,oa.generateMipmaps=!1,oa.needsUpdate=!0),oa}class d3{constructor(t={}){const{canvas:n=rE(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:b=Ti}=t;this.isWebGLRenderer=!0;let M;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=a.getContextAttributes().alpha}else M=u;const w=b,y=new Set([wm,Am,Tm]),x=new Set([Ti,_a,Xl,Wl,Mm,Em]),A=new Uint32Array(4),C=new Int32Array(4);let L=null,B=null;const P=[],N=[];let T=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ma,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let rt=!1;this._outputColorSpace=Ln;let H=0,K=0,et=null,tt=-1,J=null;const z=new Ke,G=new Ke;let ut=null;const mt=new Me(0);let Et=0,F=n.width,q=n.height,V=1,ht=null,Rt=null;const nt=new Ke(0,0,F,q),xt=new Ke(0,0,F,q);let bt=!1;const Ht=new Nm;let Jt=!1,ee=!1;const Qe=new nn,Se=new j,be=new Ke,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function Kt(){return et===null?V:1}let X=a;function Ce(D,Y){return n.getContext(D,Y)}try{const D={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ym}`),n.addEventListener("webglcontextlost",Gt,!1),n.addEventListener("webglcontextrestored",re,!1),n.addEventListener("webglcontextcreationerror",He,!1),X===null){const Y="webgl2";if(X=Ce(Y,D),X===null)throw Ce(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw Ne("WebGLRenderer: "+D.message),D}let he,de,kt,O,E,Q,vt,Mt,pt,Wt,Lt,$t,ae,wt,Tt,zt,Pt,It,me,Z,Dt,Ct,Ft;function At(){he=new dw(X),he.init(),Dt=new i3(X,he),de=new sw(X,he,t,Dt),kt=new e3(X,he),de.reversedDepthBuffer&&v&&kt.buffers.depth.setReversed(!0),O=new gw(X),E=new G2,Q=new n3(X,he,kt,E,de,Dt,O),vt=new hw(U),Mt=new S1(X),Ct=new iw(X,Mt),pt=new pw(X,Mt,O,Ct),Wt=new vw(X,pt,Mt,Ct,O),It=new _w(X,de,Q),Tt=new rw(E),Lt=new H2(U,vt,he,de,Ct,Tt),$t=new c3(U,E),ae=new k2,wt=new Z2(he),Pt=new nw(U,vt,kt,Wt,M,m),zt=new t3(U,Wt,de),Ft=new u3(X,O,de,kt),me=new aw(X,he,O),Z=new mw(X,he,O),O.programs=Lt.programs,U.capabilities=de,U.extensions=he,U.properties=E,U.renderLists=ae,U.shadowMap=zt,U.state=kt,U.info=O}At(),w!==Ti&&(T=new yw(w,n.width,n.height,o,c));const dt=new o3(U,X);this.xr=dt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const D=he.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=he.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(D){D!==void 0&&(V=D,this.setSize(F,q,!1))},this.getSize=function(D){return D.set(F,q)},this.setSize=function(D,Y,ct=!0){if(dt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}F=D,q=Y,n.width=Math.floor(D*V),n.height=Math.floor(Y*V),ct===!0&&(n.style.width=D+"px",n.style.height=Y+"px"),T!==null&&T.setSize(n.width,n.height),this.setViewport(0,0,D,Y)},this.getDrawingBufferSize=function(D){return D.set(F*V,q*V).floor()},this.setDrawingBufferSize=function(D,Y,ct){F=D,q=Y,V=ct,n.width=Math.floor(D*ct),n.height=Math.floor(Y*ct),this.setViewport(0,0,D,Y)},this.setEffects=function(D){if(w===Ti){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let Y=0;Y<D.length;Y++)if(D[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(z)},this.getViewport=function(D){return D.copy(nt)},this.setViewport=function(D,Y,ct,ot){D.isVector4?nt.set(D.x,D.y,D.z,D.w):nt.set(D,Y,ct,ot),kt.viewport(z.copy(nt).multiplyScalar(V).round())},this.getScissor=function(D){return D.copy(xt)},this.setScissor=function(D,Y,ct,ot){D.isVector4?xt.set(D.x,D.y,D.z,D.w):xt.set(D,Y,ct,ot),kt.scissor(G.copy(xt).multiplyScalar(V).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(D){kt.setScissorTest(bt=D)},this.setOpaqueSort=function(D){ht=D},this.setTransparentSort=function(D){Rt=D},this.getClearColor=function(D){return D.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(D=!0,Y=!0,ct=!0){let ot=0;if(D){let it=!1;if(et!==null){const Ut=et.texture.format;it=y.has(Ut)}if(it){const Ut=et.texture.type,Bt=x.has(Ut),Ot=Pt.getClearColor(),qt=Pt.getClearAlpha(),Qt=Ot.r,se=Ot.g,ce=Ot.b;Bt?(A[0]=Qt,A[1]=se,A[2]=ce,A[3]=qt,X.clearBufferuiv(X.COLOR,0,A)):(C[0]=Qt,C[1]=se,C[2]=ce,C[3]=qt,X.clearBufferiv(X.COLOR,0,C))}else ot|=X.COLOR_BUFFER_BIT}Y&&(ot|=X.DEPTH_BUFFER_BIT),ct&&(ot|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ot!==0&&X.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Gt,!1),n.removeEventListener("webglcontextrestored",re,!1),n.removeEventListener("webglcontextcreationerror",He,!1),Pt.dispose(),ae.dispose(),wt.dispose(),E.dispose(),vt.dispose(),Wt.dispose(),Ct.dispose(),Ft.dispose(),Lt.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",yr),dt.removeEventListener("sessionend",Sr),ea.stop()};function Gt(D){D.preventDefault(),lf("WebGLRenderer: Context Lost."),rt=!0}function re(){lf("WebGLRenderer: Context Restored."),rt=!1;const D=O.autoReset,Y=zt.enabled,ct=zt.autoUpdate,ot=zt.needsUpdate,it=zt.type;At(),O.autoReset=D,zt.enabled=Y,zt.autoUpdate=ct,zt.needsUpdate=ot,zt.type=it}function He(D){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Ue(D){const Y=D.target;Y.removeEventListener("dispose",Ue),Zn(Y)}function Zn(D){Gi(D),E.remove(D)}function Gi(D){const Y=E.get(D).programs;Y!==void 0&&(Y.forEach(function(ct){Lt.releaseProgram(ct)}),D.isShaderMaterial&&Lt.releaseShaderCache(D))}this.renderBufferDirect=function(D,Y,ct,ot,it,Ut){Y===null&&(Y=Le);const Bt=it.isMesh&&it.matrixWorld.determinant()<0,Ot=ic(D,Y,ct,ot,it);kt.setMaterial(ot,Bt);let qt=ct.index,Qt=1;if(ot.wireframe===!0){if(qt=pt.getWireframeAttribute(ct),qt===void 0)return;Qt=2}const se=ct.drawRange,ce=ct.attributes.position;let Vt=se.start*Qt,ge=(se.start+se.count)*Qt;Ut!==null&&(Vt=Math.max(Vt,Ut.start*Qt),ge=Math.min(ge,(Ut.start+Ut.count)*Qt)),qt!==null?(Vt=Math.max(Vt,0),ge=Math.min(ge,qt.count)):ce!=null&&(Vt=Math.max(Vt,0),ge=Math.min(ge,ce.count));const an=ge-Vt;if(an<0||an===1/0)return;Ct.setup(it,ot,Ot,ct,qt);let sn,Pe=me;if(qt!==null&&(sn=Mt.get(qt),Pe=Z,Pe.setIndex(sn)),it.isMesh)ot.wireframe===!0?(kt.setLineWidth(ot.wireframeLinewidth*Kt()),Pe.setMode(X.LINES)):Pe.setMode(X.TRIANGLES);else if(it.isLine){let bn=ot.linewidth;bn===void 0&&(bn=1),kt.setLineWidth(bn*Kt()),it.isLineSegments?Pe.setMode(X.LINES):it.isLineLoop?Pe.setMode(X.LINE_LOOP):Pe.setMode(X.LINE_STRIP)}else it.isPoints?Pe.setMode(X.POINTS):it.isSprite&&Pe.setMode(X.TRIANGLES);if(it.isBatchedMesh)if(it._multiDrawInstances!==null)cf("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pe.renderMultiDrawInstances(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount,it._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))Pe.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const bn=it._multiDrawStarts,Xt=it._multiDrawCounts,Kn=it._multiDrawCount,le=qt?Mt.get(qt).bytesPerElement:1,Qn=E.get(ot).currentProgram.getUniforms();for(let di=0;di<Kn;di++)Qn.setValue(X,"_gl_DrawID",di),Pe.render(bn[di]/le,Xt[di])}else if(it.isInstancedMesh)Pe.renderInstances(Vt,an,it.count);else if(ct.isInstancedBufferGeometry){const bn=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Xt=Math.min(ct.instanceCount,bn);Pe.renderInstances(Vt,an,Xt)}else Pe.render(Vt,an)};function Io(D,Y,ct){D.transparent===!0&&D.side===Ji&&D.forceSinglePass===!1?(D.side=ii,D.needsUpdate=!0,Qa(D,Y,ct),D.side=Os,D.needsUpdate=!0,Qa(D,Y,ct),D.side=Ji):Qa(D,Y,ct)}this.compile=function(D,Y,ct=null){ct===null&&(ct=D),B=wt.get(ct),B.init(Y),N.push(B),ct.traverseVisible(function(it){it.isLight&&it.layers.test(Y.layers)&&(B.pushLight(it),it.castShadow&&B.pushShadow(it))}),D!==ct&&D.traverseVisible(function(it){it.isLight&&it.layers.test(Y.layers)&&(B.pushLight(it),it.castShadow&&B.pushShadow(it))}),B.setupLights();const ot=new Set;return D.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const Ut=it.material;if(Ut)if(Array.isArray(Ut))for(let Bt=0;Bt<Ut.length;Bt++){const Ot=Ut[Bt];Io(Ot,ct,it),ot.add(Ot)}else Io(Ut,ct,it),ot.add(Ut)}),B=N.pop(),ot},this.compileAsync=function(D,Y,ct=null){const ot=this.compile(D,Y,ct);return new Promise(it=>{function Ut(){if(ot.forEach(function(Bt){E.get(Bt).currentProgram.isReady()&&ot.delete(Bt)}),ot.size===0){it(D);return}setTimeout(Ut,10)}he.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let xr=null;function tc(D){xr&&xr(D)}function yr(){ea.stop()}function Sr(){ea.start()}const ea=new zy;ea.setAnimationLoop(tc),typeof self<"u"&&ea.setContext(self),this.setAnimationLoop=function(D){xr=D,dt.setAnimationLoop(D),D===null?ea.stop():ea.start()},dt.addEventListener("sessionstart",yr),dt.addEventListener("sessionend",Sr),this.render=function(D,Y){if(Y!==void 0&&Y.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(rt===!0)return;const ct=dt.enabled===!0&&dt.isPresenting===!0,ot=T!==null&&(et===null||ct)&&T.begin(U,et);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(Y),Y=dt.getCamera()),D.isScene===!0&&D.onBeforeRender(U,D,Y,et),B=wt.get(D,N.length),B.init(Y),N.push(B),Qe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ht.setFromProjectionMatrix(Qe,da,Y.reversedDepth),ee=this.localClippingEnabled,Jt=Tt.init(this.clippingPlanes,ee),L=ae.get(D,P.length),L.init(),P.push(L),dt.enabled===!0&&dt.isPresenting===!0){const Bt=U.xr.getDepthSensingMesh();Bt!==null&&br(Bt,Y,-1/0,U.sortObjects)}br(D,Y,0,U.sortObjects),L.finish(),U.sortObjects===!0&&L.sort(ht,Rt),_t=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,_t&&Pt.addToRenderList(L,D),this.info.render.frame++,Jt===!0&&Tt.beginShadows();const it=B.state.shadowsArray;if(zt.render(it,D,Y),Jt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ot&&T.hasRenderPass())===!1){const Bt=L.opaque,Ot=L.transmissive;if(B.setupLights(),Y.isArrayCamera){const qt=Y.cameras;if(Ot.length>0)for(let Qt=0,se=qt.length;Qt<se;Qt++){const ce=qt[Qt];dn(Bt,Ot,D,ce)}_t&&Pt.render(D);for(let Qt=0,se=qt.length;Qt<se;Qt++){const ce=qt[Qt];Vi(L,D,ce,ce.viewport)}}else Ot.length>0&&dn(Bt,Ot,D,Y),_t&&Pt.render(D),Vi(L,D,Y)}et!==null&&K===0&&(Q.updateMultisampleRenderTarget(et),Q.updateRenderTargetMipmap(et)),ot&&T.end(U),D.isScene===!0&&D.onAfterRender(U,D,Y),Ct.resetDefaultState(),tt=-1,J=null,N.pop(),N.length>0?(B=N[N.length-1],Jt===!0&&Tt.setGlobalState(U.clippingPlanes,B.state.camera)):B=null,P.pop(),P.length>0?L=P[P.length-1]:L=null};function br(D,Y,ct,ot){if(D.visible===!1)return;if(D.layers.test(Y.layers)){if(D.isGroup)ct=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Y);else if(D.isLight)B.pushLight(D),D.castShadow&&B.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Ht.intersectsSprite(D)){ot&&be.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Qe);const Bt=Wt.update(D),Ot=D.material;Ot.visible&&L.push(D,Bt,Ot,ct,be.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Ht.intersectsObject(D))){const Bt=Wt.update(D),Ot=D.material;if(ot&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),be.copy(D.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),be.copy(Bt.boundingSphere.center)),be.applyMatrix4(D.matrixWorld).applyMatrix4(Qe)),Array.isArray(Ot)){const qt=Bt.groups;for(let Qt=0,se=qt.length;Qt<se;Qt++){const ce=qt[Qt],Vt=Ot[ce.materialIndex];Vt&&Vt.visible&&L.push(D,Bt,Vt,ct,be.z,ce)}}else Ot.visible&&L.push(D,Bt,Ot,ct,be.z,null)}}const Ut=D.children;for(let Bt=0,Ot=Ut.length;Bt<Ot;Bt++)br(Ut[Bt],Y,ct,ot)}function Vi(D,Y,ct,ot){const{opaque:it,transmissive:Ut,transparent:Bt}=D;B.setupLightsView(ct),Jt===!0&&Tt.setGlobalState(U.clippingPlanes,ct),ot&&kt.viewport(z.copy(ot)),it.length>0&&Sn(it,Y,ct),Ut.length>0&&Sn(Ut,Y,ct),Bt.length>0&&Sn(Bt,Y,ct),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function dn(D,Y,ct,ot){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[ot.id]===void 0){const Vt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[ot.id]=new ga(1,1,{generateMipmaps:!0,type:Vt?Za:Ti,minFilter:fr,samples:de.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Oe.workingColorSpace})}const Ut=B.state.transmissionRenderTarget[ot.id],Bt=ot.viewport||z;Ut.setSize(Bt.z*U.transmissionResolutionScale,Bt.w*U.transmissionResolutionScale);const Ot=U.getRenderTarget(),qt=U.getActiveCubeFace(),Qt=U.getActiveMipmapLevel();U.setRenderTarget(Ut),U.getClearColor(mt),Et=U.getClearAlpha(),Et<1&&U.setClearColor(16777215,.5),U.clear(),_t&&Pt.render(ct);const se=U.toneMapping;U.toneMapping=ma;const ce=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),B.setupLightsView(ot),Jt===!0&&Tt.setGlobalState(U.clippingPlanes,ot),Sn(D,ct,ot),Q.updateMultisampleRenderTarget(Ut),Q.updateRenderTargetMipmap(Ut),he.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let ge=0,an=Y.length;ge<an;ge++){const sn=Y[ge],{object:Pe,geometry:bn,material:Xt,group:Kn}=sn;if(Xt.side===Ji&&Pe.layers.test(ot.layers)){const le=Xt.side;Xt.side=ii,Xt.needsUpdate=!0,ya(Pe,ct,ot,bn,Xt,Kn),Xt.side=le,Xt.needsUpdate=!0,Vt=!0}}Vt===!0&&(Q.updateMultisampleRenderTarget(Ut),Q.updateRenderTargetMipmap(Ut))}U.setRenderTarget(Ot,qt,Qt),U.setClearColor(mt,Et),ce!==void 0&&(ot.viewport=ce),U.toneMapping=se}function Sn(D,Y,ct){const ot=Y.isScene===!0?Y.overrideMaterial:null;for(let it=0,Ut=D.length;it<Ut;it++){const Bt=D[it],{object:Ot,geometry:qt,group:Qt}=Bt;let se=Bt.material;se.allowOverride===!0&&ot!==null&&(se=ot),Ot.layers.test(ct.layers)&&ya(Ot,Y,ct,qt,se,Qt)}}function ya(D,Y,ct,ot,it,Ut){D.onBeforeRender(U,Y,ct,ot,it,Ut),D.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),it.onBeforeRender(U,Y,ct,ot,D,Ut),it.transparent===!0&&it.side===Ji&&it.forceSinglePass===!1?(it.side=ii,it.needsUpdate=!0,U.renderBufferDirect(ct,Y,ot,it,D,Ut),it.side=Os,it.needsUpdate=!0,U.renderBufferDirect(ct,Y,ot,it,D,Ut),it.side=Ji):U.renderBufferDirect(ct,Y,ot,it,D,Ut),D.onAfterRender(U,Y,ct,ot,it,Ut)}function Qa(D,Y,ct){Y.isScene!==!0&&(Y=Le);const ot=E.get(D),it=B.state.lights,Ut=B.state.shadowsArray,Bt=it.state.version,Ot=Lt.getParameters(D,it.state,Ut,Y,ct),qt=Lt.getProgramCacheKey(Ot);let Qt=ot.programs;ot.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?Y.environment:null,ot.fog=Y.fog;const se=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;ot.envMap=vt.get(D.envMap||ot.environment,se),ot.envMapRotation=ot.environment!==null&&D.envMap===null?Y.environmentRotation:D.envMapRotation,Qt===void 0&&(D.addEventListener("dispose",Ue),Qt=new Map,ot.programs=Qt);let ce=Qt.get(qt);if(ce!==void 0){if(ot.currentProgram===ce&&ot.lightsStateVersion===Bt)return nc(D,Ot),ce}else Ot.uniforms=Lt.getUniforms(D),D.onBeforeCompile(Ot,U),ce=Lt.acquireProgram(Ot,qt),Qt.set(qt,ce),ot.uniforms=Ot.uniforms;const Vt=ot.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Vt.clippingPlanes=Tt.uniform),nc(D,Ot),ot.needsLights=Fo(D),ot.lightsStateVersion=Bt,ot.needsLights&&(Vt.ambientLightColor.value=it.state.ambient,Vt.lightProbe.value=it.state.probe,Vt.directionalLights.value=it.state.directional,Vt.directionalLightShadows.value=it.state.directionalShadow,Vt.spotLights.value=it.state.spot,Vt.spotLightShadows.value=it.state.spotShadow,Vt.rectAreaLights.value=it.state.rectArea,Vt.ltc_1.value=it.state.rectAreaLTC1,Vt.ltc_2.value=it.state.rectAreaLTC2,Vt.pointLights.value=it.state.point,Vt.pointLightShadows.value=it.state.pointShadow,Vt.hemisphereLights.value=it.state.hemi,Vt.directionalShadowMatrix.value=it.state.directionalShadowMatrix,Vt.spotLightMatrix.value=it.state.spotLightMatrix,Vt.spotLightMap.value=it.state.spotLightMap,Vt.pointShadowMatrix.value=it.state.pointShadowMatrix),ot.currentProgram=ce,ot.uniformsList=null,ce}function ec(D){if(D.uniformsList===null){const Y=D.currentProgram.getUniforms();D.uniformsList=sf.seqWithValue(Y.seq,D.uniforms)}return D.uniformsList}function nc(D,Y){const ct=E.get(D);ct.outputColorSpace=Y.outputColorSpace,ct.batching=Y.batching,ct.batchingColor=Y.batchingColor,ct.instancing=Y.instancing,ct.instancingColor=Y.instancingColor,ct.instancingMorph=Y.instancingMorph,ct.skinning=Y.skinning,ct.morphTargets=Y.morphTargets,ct.morphNormals=Y.morphNormals,ct.morphColors=Y.morphColors,ct.morphTargetsCount=Y.morphTargetsCount,ct.numClippingPlanes=Y.numClippingPlanes,ct.numIntersection=Y.numClipIntersection,ct.vertexAlphas=Y.vertexAlphas,ct.vertexTangents=Y.vertexTangents,ct.toneMapping=Y.toneMapping}function ic(D,Y,ct,ot,it){Y.isScene!==!0&&(Y=Le),Q.resetTextureUnits();const Ut=Y.fog,Bt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial?Y.environment:null,Ot=et===null?U.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:No,qt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial&&!ot.envMap||ot.isMeshPhongMaterial&&!ot.envMap,Qt=vt.get(ot.envMap||Bt,qt),se=ot.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,ce=!!ct.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Vt=!!ct.morphAttributes.position,ge=!!ct.morphAttributes.normal,an=!!ct.morphAttributes.color;let sn=ma;ot.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(sn=U.toneMapping);const Pe=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,bn=Pe!==void 0?Pe.length:0,Xt=E.get(ot),Kn=B.state.lights;if(Jt===!0&&(ee===!0||D!==J)){const mn=D===J&&ot.id===tt;Tt.setState(ot,D,mn)}let le=!1;ot.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Kn.state.version||Xt.outputColorSpace!==Ot||it.isBatchedMesh&&Xt.batching===!1||!it.isBatchedMesh&&Xt.batching===!0||it.isBatchedMesh&&Xt.batchingColor===!0&&it.colorTexture===null||it.isBatchedMesh&&Xt.batchingColor===!1&&it.colorTexture!==null||it.isInstancedMesh&&Xt.instancing===!1||!it.isInstancedMesh&&Xt.instancing===!0||it.isSkinnedMesh&&Xt.skinning===!1||!it.isSkinnedMesh&&Xt.skinning===!0||it.isInstancedMesh&&Xt.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&Xt.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&Xt.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&Xt.instancingMorph===!1&&it.morphTexture!==null||Xt.envMap!==Qt||ot.fog===!0&&Xt.fog!==Ut||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Tt.numPlanes||Xt.numIntersection!==Tt.numIntersection)||Xt.vertexAlphas!==se||Xt.vertexTangents!==ce||Xt.morphTargets!==Vt||Xt.morphNormals!==ge||Xt.morphColors!==an||Xt.toneMapping!==sn||Xt.morphTargetsCount!==bn)&&(le=!0):(le=!0,Xt.__version=ot.version);let Qn=Xt.currentProgram;le===!0&&(Qn=Qa(ot,Y,it));let di=!1,ki=!1,pi=!1;const Be=Qn.getUniforms(),pn=Xt.uniforms;if(kt.useProgram(Qn.program)&&(di=!0,ki=!0,pi=!0),ot.id!==tt&&(tt=ot.id,ki=!0),di||J!==D){kt.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Be.setValue(X,"projectionMatrix",D.projectionMatrix),Be.setValue(X,"viewMatrix",D.matrixWorldInverse);const ji=Be.map.cameraPosition;ji!==void 0&&ji.setValue(X,Se.setFromMatrixPosition(D.matrixWorld)),de.logarithmicDepthBuffer&&Be.setValue(X,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Be.setValue(X,"isOrthographic",D.isOrthographicCamera===!0),J!==D&&(J=D,ki=!0,pi=!0)}if(Xt.needsLights&&(Kn.state.directionalShadowMap.length>0&&Be.setValue(X,"directionalShadowMap",Kn.state.directionalShadowMap,Q),Kn.state.spotShadowMap.length>0&&Be.setValue(X,"spotShadowMap",Kn.state.spotShadowMap,Q),Kn.state.pointShadowMap.length>0&&Be.setValue(X,"pointShadowMap",Kn.state.pointShadowMap,Q)),it.isSkinnedMesh){Be.setOptional(X,it,"bindMatrix"),Be.setOptional(X,it,"bindMatrixInverse");const mn=it.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Be.setValue(X,"boneTexture",mn.boneTexture,Q))}it.isBatchedMesh&&(Be.setOptional(X,it,"batchingTexture"),Be.setValue(X,"batchingTexture",it._matricesTexture,Q),Be.setOptional(X,it,"batchingIdTexture"),Be.setValue(X,"batchingIdTexture",it._indirectTexture,Q),Be.setOptional(X,it,"batchingColorTexture"),it._colorsTexture!==null&&Be.setValue(X,"batchingColorTexture",it._colorsTexture,Q));const Jn=ct.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&It.update(it,ct,Qn),(ki||Xt.receiveShadow!==it.receiveShadow)&&(Xt.receiveShadow=it.receiveShadow,Be.setValue(X,"receiveShadow",it.receiveShadow)),(ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial)&&ot.envMap===null&&Y.environment!==null&&(pn.envMapIntensity.value=Y.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=h3()),ki&&(Be.setValue(X,"toneMappingExposure",U.toneMappingExposure),Xt.needsLights&&Is(pn,pi),Ut&&ot.fog===!0&&$t.refreshFogUniforms(pn,Ut),$t.refreshMaterialUniforms(pn,ot,V,q,B.state.transmissionRenderTarget[D.id]),sf.upload(X,ec(Xt),pn,Q)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(sf.upload(X,ec(Xt),pn,Q),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Be.setValue(X,"center",it.center),Be.setValue(X,"modelViewMatrix",it.modelViewMatrix),Be.setValue(X,"normalMatrix",it.normalMatrix),Be.setValue(X,"modelMatrix",it.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const mn=ot.uniformsGroups;for(let ji=0,Sa=mn.length;ji<Sa;ji++){const Mr=mn[ji];Ft.update(Mr,Qn),Ft.bind(Mr,Qn)}}return Qn}function Is(D,Y){D.ambientLightColor.needsUpdate=Y,D.lightProbe.needsUpdate=Y,D.directionalLights.needsUpdate=Y,D.directionalLightShadows.needsUpdate=Y,D.pointLights.needsUpdate=Y,D.pointLightShadows.needsUpdate=Y,D.spotLights.needsUpdate=Y,D.spotLightShadows.needsUpdate=Y,D.rectAreaLights.needsUpdate=Y,D.hemisphereLights.needsUpdate=Y}function Fo(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(D,Y,ct){const ot=E.get(D);ot.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),E.get(D.texture).__webglTexture=Y,E.get(D.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:ct,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,Y){const ct=E.get(D);ct.__webglFramebuffer=Y,ct.__useDefaultFramebuffer=Y===void 0};const Ja=X.createFramebuffer();this.setRenderTarget=function(D,Y=0,ct=0){et=D,H=Y,K=ct;let ot=null,it=!1,Ut=!1;if(D){const Ot=E.get(D);if(Ot.__useDefaultFramebuffer!==void 0){kt.bindFramebuffer(X.FRAMEBUFFER,Ot.__webglFramebuffer),z.copy(D.viewport),G.copy(D.scissor),ut=D.scissorTest,kt.viewport(z),kt.scissor(G),kt.setScissorTest(ut),tt=-1;return}else if(Ot.__webglFramebuffer===void 0)Q.setupRenderTarget(D);else if(Ot.__hasExternalTextures)Q.rebindTextures(D,E.get(D.texture).__webglTexture,E.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const se=D.depthTexture;if(Ot.__boundDepthTexture!==se){if(se!==null&&E.has(se)&&(D.width!==se.image.width||D.height!==se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(D)}}const qt=D.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Ut=!0);const Qt=E.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Qt[Y])?ot=Qt[Y][ct]:ot=Qt[Y],it=!0):D.samples>0&&Q.useMultisampledRTT(D)===!1?ot=E.get(D).__webglMultisampledFramebuffer:Array.isArray(Qt)?ot=Qt[ct]:ot=Qt,z.copy(D.viewport),G.copy(D.scissor),ut=D.scissorTest}else z.copy(nt).multiplyScalar(V).floor(),G.copy(xt).multiplyScalar(V).floor(),ut=bt;if(ct!==0&&(ot=Ja),kt.bindFramebuffer(X.FRAMEBUFFER,ot)&&kt.drawBuffers(D,ot),kt.viewport(z),kt.scissor(G),kt.setScissorTest(ut),it){const Ot=E.get(D.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ot.__webglTexture,ct)}else if(Ut){const Ot=Y;for(let qt=0;qt<D.textures.length;qt++){const Qt=E.get(D.textures[qt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+qt,Qt.__webglTexture,ct,Ot)}}else if(D!==null&&ct!==0){const Ot=E.get(D.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ot.__webglTexture,ct)}tt=-1},this.readRenderTargetPixels=function(D,Y,ct,ot,it,Ut,Bt,Ot=0){if(!(D&&D.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=E.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Bt!==void 0&&(qt=qt[Bt]),qt){kt.bindFramebuffer(X.FRAMEBUFFER,qt);try{const Qt=D.textures[Ot],se=Qt.format,ce=Qt.type;if(D.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ot),!de.textureFormatReadable(se)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(ce)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=D.width-ot&&ct>=0&&ct<=D.height-it&&X.readPixels(Y,ct,ot,it,Dt.convert(se),Dt.convert(ce),Ut)}finally{const Qt=et!==null?E.get(et).__webglFramebuffer:null;kt.bindFramebuffer(X.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(D,Y,ct,ot,it,Ut,Bt,Ot=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=E.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Bt!==void 0&&(qt=qt[Bt]),qt)if(Y>=0&&Y<=D.width-ot&&ct>=0&&ct<=D.height-it){kt.bindFramebuffer(X.FRAMEBUFFER,qt);const Qt=D.textures[Ot],se=Qt.format,ce=Qt.type;if(D.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ot),!de.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Vt),X.bufferData(X.PIXEL_PACK_BUFFER,Ut.byteLength,X.STREAM_READ),X.readPixels(Y,ct,ot,it,Dt.convert(se),Dt.convert(ce),0);const ge=et!==null?E.get(et).__webglFramebuffer:null;kt.bindFramebuffer(X.FRAMEBUFFER,ge);const an=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await oE(X,an,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Vt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ut),X.deleteBuffer(Vt),X.deleteSync(an),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,Y=null,ct=0){const ot=Math.pow(2,-ct),it=Math.floor(D.image.width*ot),Ut=Math.floor(D.image.height*ot),Bt=Y!==null?Y.x:0,Ot=Y!==null?Y.y:0;Q.setTexture2D(D,0),X.copyTexSubImage2D(X.TEXTURE_2D,ct,0,0,Bt,Ot,it,Ut),kt.unbindTexture()};const $a=X.createFramebuffer(),Fs=X.createFramebuffer();this.copyTextureToTexture=function(D,Y,ct=null,ot=null,it=0,Ut=0){let Bt,Ot,qt,Qt,se,ce,Vt,ge,an;const sn=D.isCompressedTexture?D.mipmaps[Ut]:D.image;if(ct!==null)Bt=ct.max.x-ct.min.x,Ot=ct.max.y-ct.min.y,qt=ct.isBox3?ct.max.z-ct.min.z:1,Qt=ct.min.x,se=ct.min.y,ce=ct.isBox3?ct.min.z:0;else{const pn=Math.pow(2,-it);Bt=Math.floor(sn.width*pn),Ot=Math.floor(sn.height*pn),D.isDataArrayTexture?qt=sn.depth:D.isData3DTexture?qt=Math.floor(sn.depth*pn):qt=1,Qt=0,se=0,ce=0}ot!==null?(Vt=ot.x,ge=ot.y,an=ot.z):(Vt=0,ge=0,an=0);const Pe=Dt.convert(Y.format),bn=Dt.convert(Y.type);let Xt;Y.isData3DTexture?(Q.setTexture3D(Y,0),Xt=X.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(Q.setTexture2DArray(Y,0),Xt=X.TEXTURE_2D_ARRAY):(Q.setTexture2D(Y,0),Xt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Y.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Y.unpackAlignment);const Kn=X.getParameter(X.UNPACK_ROW_LENGTH),le=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Qn=X.getParameter(X.UNPACK_SKIP_PIXELS),di=X.getParameter(X.UNPACK_SKIP_ROWS),ki=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,sn.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,sn.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Qt),X.pixelStorei(X.UNPACK_SKIP_ROWS,se),X.pixelStorei(X.UNPACK_SKIP_IMAGES,ce);const pi=D.isDataArrayTexture||D.isData3DTexture,Be=Y.isDataArrayTexture||Y.isData3DTexture;if(D.isDepthTexture){const pn=E.get(D),Jn=E.get(Y),mn=E.get(pn.__renderTarget),ji=E.get(Jn.__renderTarget);kt.bindFramebuffer(X.READ_FRAMEBUFFER,mn.__webglFramebuffer),kt.bindFramebuffer(X.DRAW_FRAMEBUFFER,ji.__webglFramebuffer);for(let Sa=0;Sa<qt;Sa++)pi&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,E.get(D).__webglTexture,it,ce+Sa),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,E.get(Y).__webglTexture,Ut,an+Sa)),X.blitFramebuffer(Qt,se,Bt,Ot,Vt,ge,Bt,Ot,X.DEPTH_BUFFER_BIT,X.NEAREST);kt.bindFramebuffer(X.READ_FRAMEBUFFER,null),kt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(it!==0||D.isRenderTargetTexture||E.has(D)){const pn=E.get(D),Jn=E.get(Y);kt.bindFramebuffer(X.READ_FRAMEBUFFER,$a),kt.bindFramebuffer(X.DRAW_FRAMEBUFFER,Fs);for(let mn=0;mn<qt;mn++)pi?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,pn.__webglTexture,it,ce+mn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,pn.__webglTexture,it),Be?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Jn.__webglTexture,Ut,an+mn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Jn.__webglTexture,Ut),it!==0?X.blitFramebuffer(Qt,se,Bt,Ot,Vt,ge,Bt,Ot,X.COLOR_BUFFER_BIT,X.NEAREST):Be?X.copyTexSubImage3D(Xt,Ut,Vt,ge,an+mn,Qt,se,Bt,Ot):X.copyTexSubImage2D(Xt,Ut,Vt,ge,Qt,se,Bt,Ot);kt.bindFramebuffer(X.READ_FRAMEBUFFER,null),kt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Be?D.isDataTexture||D.isData3DTexture?X.texSubImage3D(Xt,Ut,Vt,ge,an,Bt,Ot,qt,Pe,bn,sn.data):Y.isCompressedArrayTexture?X.compressedTexSubImage3D(Xt,Ut,Vt,ge,an,Bt,Ot,qt,Pe,sn.data):X.texSubImage3D(Xt,Ut,Vt,ge,an,Bt,Ot,qt,Pe,bn,sn):D.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ut,Vt,ge,Bt,Ot,Pe,bn,sn.data):D.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ut,Vt,ge,sn.width,sn.height,Pe,sn.data):X.texSubImage2D(X.TEXTURE_2D,Ut,Vt,ge,Bt,Ot,Pe,bn,sn);X.pixelStorei(X.UNPACK_ROW_LENGTH,Kn),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,le),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Qn),X.pixelStorei(X.UNPACK_SKIP_ROWS,di),X.pixelStorei(X.UNPACK_SKIP_IMAGES,ki),Ut===0&&Y.generateMipmaps&&X.generateMipmap(Xt),kt.unbindTexture()},this.initRenderTarget=function(D){E.get(D).__webglFramebuffer===void 0&&Q.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?Q.setTextureCube(D,0):D.isData3DTexture?Q.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Q.setTexture2DArray(D,0):Q.setTexture2D(D,0),kt.unbindTexture()},this.resetState=function(){H=0,K=0,et=null,kt.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return da}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Oe._getDrawingBufferColorSpace(t),n.unpackColorSpace=Oe._getUnpackColorSpace()}}const Vx={type:"change"},Hm={type:"start"},Vy={type:"end"},Gu=new Um,kx=new Ls,p3=Math.cos(70*My.DEG2RAD),En=new j,ui=2*Math.PI,Ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},lp=1e-6;class m3 extends x1{constructor(t,n=null){super(t,n),this.state=Ye.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ao.ROTATE,MIDDLE:Ao.DOLLY,RIGHT:Ao.PAN},this.touches={ONE:To.ROTATE,TWO:To.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new Ps,this._lastTargetPosition=new j,this._quat=new Ps().setFromUnitVectors(t.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new gx,this._sphericalDelta=new gx,this._scale=1,this._panOffset=new j,this._rotateStart=new ne,this._rotateEnd=new ne,this._rotateDelta=new ne,this._panStart=new ne,this._panEnd=new ne,this._panDelta=new ne,this._dollyStart=new ne,this._dollyEnd=new ne,this._dollyDelta=new ne,this._dollyDirection=new j,this._mouse=new ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_3.bind(this),this._onPointerDown=g3.bind(this),this._onPointerUp=v3.bind(this),this._onContextMenu=T3.bind(this),this._onMouseWheel=S3.bind(this),this._onKeyDown=b3.bind(this),this._onTouchStart=M3.bind(this),this._onTouchMove=E3.bind(this),this._onMouseDown=x3.bind(this),this._onMouseMove=y3.bind(this),this._interceptControlDown=A3.bind(this),this._interceptControlUp=w3.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vx),this.update(),this.state=Ye.NONE}pan(t,n){this._pan(t,n),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const n=this.object.position;En.copy(n).sub(this.target),En.applyQuaternion(this._quat),this._spherical.setFromVector3(En),this.autoRotate&&this.state===Ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(a)&&isFinite(o)&&(a<-Math.PI?a+=ui:a>Math.PI&&(a-=ui),o<-Math.PI?o+=ui:o>Math.PI&&(o-=ui),a<=o?this._spherical.theta=Math.max(a,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+o)/2?Math.max(a,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=u!=this._spherical.radius}if(En.setFromSpherical(this._spherical),En.applyQuaternion(this._quatInverse),n.copy(this.target).add(En),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=En.length();u=this._clampDistance(h*this._scale);const m=h-u;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const h=new j(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new j(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),u=En.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Gu.origin.copy(this.object.position),Gu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Gu.direction))<p3?this.object.lookAt(this.target):(kx.setFromNormalAndCoplanarPoint(this.object.up,this.target),Gu.intersectPlane(kx,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>lp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>lp||this._lastTargetPosition.distanceToSquared(this.target)>lp?(this.dispatchEvent(Vx),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ui/60*this.autoRotateSpeed*t:ui/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){En.setFromMatrixColumn(n,0),En.multiplyScalar(-t),this._panOffset.add(En)}_panUp(t,n){this.screenSpacePanning===!0?En.setFromMatrixColumn(n,1):(En.setFromMatrixColumn(n,0),En.crossVectors(this.object.up,En)),En.multiplyScalar(t),this._panOffset.add(En)}_pan(t,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;En.copy(o).sub(this.target);let c=En.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/a.clientHeight,this.object.matrix),this._panUp(2*n*c/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),o=t-a.left,c=n-a.top,u=a.width,h=a.height;this._mouse.x=o/u*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/n.clientHeight),this._rotateUp(ui*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateStart.set(a,o)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panStart.set(a,o)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const a=this._getSecondPointerPosition(t),o=.5*(t.pageX+a.x),c=.5*(t.pageY+a.y);this._rotateEnd.set(o,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/n.clientHeight),this._rotateUp(ui*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panEnd.set(a,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(t.pageX+n.x)*.5,h=(t.pageY+n.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new ne,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,a={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function g3(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function _3(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function v3(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vy),this.state=Ye.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function x3(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ao.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ye.DOLLY;break;case Ao.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ye.ROTATE}break;case Ao.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ye.PAN}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(Hm)}function y3(r){switch(this.state){case Ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function S3(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ye.NONE||(r.preventDefault(),this.dispatchEvent(Hm),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Vy))}function b3(r){this.enabled!==!1&&this._handleKeyDown(r)}function M3(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case To.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ye.TOUCH_ROTATE;break;case To.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ye.TOUCH_PAN;break;default:this.state=Ye.NONE}break;case 2:switch(this.touches.TWO){case To.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ye.TOUCH_DOLLY_PAN;break;case To.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ye.TOUCH_DOLLY_ROTATE;break;default:this.state=Ye.NONE}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(Hm)}function E3(r){switch(this._trackPointer(r),this.state){case Ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ye.NONE}}function T3(r){this.enabled!==!1&&r.preventDefault()}function A3(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function w3(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const jx=new zs,Vu=new j;class Gm extends d1{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],n=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],a=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(a),this.setAttribute("position",new hn(t,3)),this.setAttribute("uv",new hn(n,2))}applyMatrix4(t){const n=this.attributes.instanceStart,a=this.attributes.instanceEnd;return n!==void 0&&(n.applyMatrix4(t),a.applyMatrix4(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let n;t instanceof Float32Array?n=t:Array.isArray(t)&&(n=new Float32Array(t));const a=new hm(n,6,1);return this.setAttribute("instanceStart",new pa(a,3,0)),this.setAttribute("instanceEnd",new pa(a,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let n;t instanceof Float32Array?n=t:Array.isArray(t)&&(n=new Float32Array(t));const a=new hm(n,6,1);return this.setAttribute("instanceColorStart",new pa(a,3,0)),this.setAttribute("instanceColorEnd",new pa(a,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new KE(t.geometry)),this}fromLineSegments(t){const n=t.geometry;return this.setPositions(n.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zs);const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;t!==void 0&&n!==void 0&&(this.boundingBox.setFromBufferAttribute(t),jx.setFromBufferAttribute(n),this.boundingBox.union(jx))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Po),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;if(t!==void 0&&n!==void 0){const a=this.boundingSphere.center;this.boundingBox.getCenter(a);let o=0;for(let c=0,u=t.count;c<u;c++)Vu.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(Vu)),Vu.fromBufferAttribute(n,c),o=Math.max(o,a.distanceToSquared(Vu));this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}Nt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ne(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};fi.line={uniforms:zm.merge([Nt.common,Nt.fog,Nt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Vm extends Hi{constructor(t){super({type:"LineMaterial",uniforms:zm.clone(fi.line.uniforms),vertexShader:fi.line.vertexShader,fragmentShader:fi.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const cp=new Ke,Xx=new j,Wx=new j,In=new Ke,Fn=new Ke,la=new Ke,up=new j,fp=new nn,Hn=new v1,qx=new j,ku=new zs,ju=new Po,ca=new Ke;let fa,dr;function Yx(r,t,n){return ca.set(0,0,-t,1).applyMatrix4(r.projectionMatrix),ca.multiplyScalar(1/ca.w),ca.x=dr/n.width,ca.y=dr/n.height,ca.applyMatrix4(r.projectionMatrixInverse),ca.multiplyScalar(1/ca.w),Math.abs(Math.max(ca.x,ca.y))}function R3(r,t){const n=r.matrixWorld,a=r.geometry,o=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,o.count);for(let h=0,m=u;h<m;h++){Hn.start.fromBufferAttribute(o,h),Hn.end.fromBufferAttribute(c,h),Hn.applyMatrix4(n);const p=new j,g=new j;fa.distanceSqToSegment(Hn.start,Hn.end,g,p),g.distanceTo(p)<dr*.5&&t.push({point:g,pointOnLine:p,distance:fa.origin.distanceTo(g),object:r,face:null,faceIndex:h,uv:null,uv1:null})}}function C3(r,t,n){const a=t.projectionMatrix,c=r.material.resolution,u=r.matrixWorld,h=r.geometry,m=h.attributes.instanceStart,p=h.attributes.instanceEnd,g=Math.min(h.instanceCount,m.count),_=-t.near;fa.at(1,la),la.w=1,la.applyMatrix4(t.matrixWorldInverse),la.applyMatrix4(a),la.multiplyScalar(1/la.w),la.x*=c.x/2,la.y*=c.y/2,la.z=0,up.copy(la),fp.multiplyMatrices(t.matrixWorldInverse,u);for(let v=0,b=g;v<b;v++){if(In.fromBufferAttribute(m,v),Fn.fromBufferAttribute(p,v),In.w=1,Fn.w=1,In.applyMatrix4(fp),Fn.applyMatrix4(fp),In.z>_&&Fn.z>_)continue;if(In.z>_){const C=In.z-Fn.z,L=(In.z-_)/C;In.lerp(Fn,L)}else if(Fn.z>_){const C=Fn.z-In.z,L=(Fn.z-_)/C;Fn.lerp(In,L)}In.applyMatrix4(a),Fn.applyMatrix4(a),In.multiplyScalar(1/In.w),Fn.multiplyScalar(1/Fn.w),In.x*=c.x/2,In.y*=c.y/2,Fn.x*=c.x/2,Fn.y*=c.y/2,Hn.start.copy(In),Hn.start.z=0,Hn.end.copy(Fn),Hn.end.z=0;const w=Hn.closestPointToPointParameter(up,!0);Hn.at(w,qx);const y=My.lerp(In.z,Fn.z,w),x=y>=-1&&y<=1,A=up.distanceTo(qx)<dr*.5;if(x&&A){Hn.start.fromBufferAttribute(m,v),Hn.end.fromBufferAttribute(p,v),Hn.start.applyMatrix4(u),Hn.end.applyMatrix4(u);const C=new j,L=new j;fa.distanceSqToSegment(Hn.start,Hn.end,L,C),n.push({point:L,pointOnLine:C,distance:fa.origin.distanceTo(L),object:r,face:null,faceIndex:v,uv:null,uv1:null})}}}class ky extends en{constructor(t=new Gm,n=new Vm({color:Math.random()*16777215})){super(t,n),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,n=t.attributes.instanceStart,a=t.attributes.instanceEnd,o=new Float32Array(2*n.count);for(let u=0,h=0,m=n.count;u<m;u++,h+=2)Xx.fromBufferAttribute(n,u),Wx.fromBufferAttribute(a,u),o[h]=h===0?0:o[h-1],o[h+1]=o[h]+Xx.distanceTo(Wx);const c=new hm(o,2,1);return t.setAttribute("instanceDistanceStart",new pa(c,1,0)),t.setAttribute("instanceDistanceEnd",new pa(c,1,1)),this}raycast(t,n){const a=this.material.worldUnits,o=t.camera;o===null&&!a&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const c=t.params.Line2!==void 0&&t.params.Line2.threshold||0;fa=t.ray;const u=this.matrixWorld,h=this.geometry,m=this.material;dr=m.linewidth+c,h.boundingSphere===null&&h.computeBoundingSphere(),ju.copy(h.boundingSphere).applyMatrix4(u);let p;if(a)p=dr*.5;else{const _=Math.max(o.near,ju.distanceToPoint(fa.origin));p=Yx(o,_,m.resolution)}if(ju.radius+=p,fa.intersectsSphere(ju)===!1)return;h.boundingBox===null&&h.computeBoundingBox(),ku.copy(h.boundingBox).applyMatrix4(u);let g;if(a)g=dr*.5;else{const _=Math.max(o.near,ku.distanceToPoint(fa.origin));g=Yx(o,_,m.resolution)}ku.expandByScalar(g),fa.intersectsBox(ku)!==!1&&(a?R3(this,n):C3(this,o,n))}onBeforeRender(t){const n=this.material.uniforms;n&&n.resolution&&(t.getViewport(cp),this.material.uniforms.resolution.value.set(cp.z,cp.w))}}class jy extends Gm{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const n=t.length-3,a=new Float32Array(2*n);for(let o=0;o<n;o+=3)a[2*o]=t[o],a[2*o+1]=t[o+1],a[2*o+2]=t[o+2],a[2*o+3]=t[o+3],a[2*o+4]=t[o+4],a[2*o+5]=t[o+5];return super.setPositions(a),this}setColors(t){const n=t.length-3,a=new Float32Array(2*n);for(let o=0;o<n;o+=3)a[2*o]=t[o],a[2*o+1]=t[o+1],a[2*o+2]=t[o+2],a[2*o+3]=t[o+3],a[2*o+4]=t[o+4],a[2*o+5]=t[o+5];return super.setColors(a),this}setFromPoints(t){const n=t.length-1,a=new Float32Array(6*n);for(let o=0;o<n;o++)a[6*o]=t[o].x,a[6*o+1]=t[o].y,a[6*o+2]=t[o].z||0,a[6*o+3]=t[o+1].x,a[6*o+4]=t[o+1].y,a[6*o+5]=t[o+1].z||0;return super.setPositions(a),this}fromLine(t){const n=t.geometry;return this.setPositions(n.attributes.position.array),this}}class D3 extends ky{constructor(t=new jy,n=new Vm({color:Math.random()*16777215})){super(t,n),this.isLine2=!0,this.type="Line2"}}const Ae=Math.PI/180,hi=2*Math.PI,Xy=398600.4418,kn=6378.137,Wy=.00108262668,gf=86400,xa=365.2422,qy=.9856474,L3=qy*Ae/gf,U3=hi/(xa*gf),km=100,jm=2e3;function mm(r){return((r+Math.PI)%hi+hi)%hi-Math.PI}function pr(r){return(r%hi+hi)%hi}function _f(r){return pr((280.46+qy*r)*Ae)}function Ql(r){const t=_f(r),n=pr((357.528+.9856003*r)*Ae),a=(1.915*Math.sin(n)+.02*Math.sin(2*n))*Ae,o=pr(t+a),c=(23.439-36e-8*r)*Ae,u=Math.cos(o),h=Math.sin(o)*Math.cos(c),m=Math.sin(o)*Math.sin(c),p=pr(Math.atan2(h,u)),g=Math.atan2(m,Math.hypot(u,h)),_=mm(t-p);return{L:t,g:n,C:a,lambda:o,eps:c,ra:p,dec:g,eot:_,vecECI:{x:u,y:h,z:m}}}function Xm(r){return Ql(r).vecECI}function Yy(r){const t=Ql(r),n=Math.cos(-t.L),a=Math.sin(-t.L),{x:o,y:c,z:u}=t.vecECI;return{x:n*o-a*c,y:a*o+n*c,z:u}}function N3(r=400){const t=[];for(let n=0;n<=r;n++){const a=n/r*xa,o=Yy(a);t.push({d:a,x:o.x,y:o.y,z:o.z,lat:Math.asin(o.z)/Ae,lng:Math.atan2(o.y,o.x)/Ae})}return t}function O3(r=360){const t=[];for(let n=0;n<=r;n++){const a=n/r*xa,o=Xm(a);t.push({d:a,x:o.x,y:o.y,z:o.z,lat:Math.asin(o.z)/Ae,lng:Math.atan2(o.y,o.x)/Ae})}return t}const hp=.0167086;function gm(r){const t=Ql(r),n=t.g+t.C,a=(1-hp*hp)/(1+hp*Math.cos(n)),o=t.lambda+Math.PI;return{x:a*Math.cos(o),y:a*Math.sin(o),z:0,r:a,eps:t.eps,lambdaSun:t.lambda}}function P3(r=360){const t=[];for(let n=0;n<=r;n++){const a=n/r*xa;t.push({d:a,...gm(a)})}return t}function z3(){const r=a=>{let o=a(0);for(let c=.05;c<=xa+.05;c+=.05){const u=a(c);if(o<0&&u>=0)return c;o=u}return NaN},t=a=>r(o=>mm(Ql(o).lambda-a)),n=a=>r(o=>mm(Ql(o).g-a));return[{key:"marchEquinox",label:"March equinox",d:t(0)},{key:"juneSolstice",label:"June solstice",d:t(Math.PI/2)},{key:"septemberEquinox",label:"September equinox",d:t(Math.PI)},{key:"decemberSolstice",label:"December solstice",d:t(1.5*Math.PI)},{key:"perihelion",label:"perihelion",d:n(0)},{key:"aphelion",label:"aphelion",d:n(Math.PI)}]}function Zx(r,t){return r==="MSSI"?_f(t):0}function I3(r){return pr((280.46061837+360.98564736629*r)*Ae)}function F3(r,t){const n=Math.cos(t),a=Math.sin(t);return{x:n*r.x-a*r.y,y:a*r.x+n*r.y,z:r.z}}function B3(r){const t=kn+r;return hi*Math.sqrt(t*t*t/Xy)}function Wm(r){const t=kn+r;return Math.sqrt(Xy/(t*t*t))}function H3(r,t){const n=kn+r;return-1.5*Wm(r)*Wy*(kn/n)*(kn/n)*Math.cos(t*Ae)}function Co(r){const t=kn+r,n=Wm(r),a=1.5*Wy*n*(kn/t)*(kn/t),o=-U3/a;if(Math.abs(o)>1)return NaN;let c=Math.acos(o);return c<Math.PI/2&&(c=Math.PI-c),c/Ae}function G3(r){let t=km,n=jm;if(r<=Co(t))return t;if(r>=Co(n))return n;for(let a=0;a<60;a++){const o=.5*(t+n);Co(o)<r?t=o:n=o}return .5*(t+n)}const or=Co(km),lr=Co(jm),jl=r=>Co(Math.min(jm,Math.max(km,r))),Kx=r=>G3(r);function Zy(r,t){const n=H3(r.altitudeKm,r.inclinationDeg)-L3;return pr(_f(t)+r.raanOffsetDeg*Ae+n*t*gf)}function V3(r,t){const n=Wm(r.altitudeKm);return pr(r.initialMeanAnomalyDeg*Ae+n*t*gf)}function k3(r,t){const n=Zy(r,t),a=r.inclinationDeg*Ae;return{x:Math.sin(a)*Math.sin(n),y:-Math.sin(a)*Math.cos(n),z:Math.cos(a)}}function dp(r,t,n){const a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),u=Math.sin(r),h=Math.cos(t),m=Math.sin(t);return{x:c*a-u*h*o,y:u*a+c*h*o,z:m*o}}function j3(r){return((12+r/15)%24+24)%24}function X3(r){const t=Math.floor(r),n=Math.round((r-t)*60),a=(n===60?t+1:t)%24,o=n===60?0:n;return`${String(a).padStart(2,"0")}:${String(o).padStart(2,"0")}`}function hf(r,t){const n=k3(r,t),a=Xm(t);return Math.asin(Math.max(-1,Math.min(1,n.x*a.x+n.y*a.y+n.z*a.z)))}function Ky(r,t){const n=kn/(kn+t),a=Math.cos(r),o=Math.sqrt(Math.max(0,1-n*n));return a<=o?0:Math.acos(o/a)/Math.PI}function Qy(r){return Math.asin(kn/(kn+r))/Ae}function Jy(r){return 90+Math.acos(kn/(kn+r))/Ae}function W3(r,t=366){let n=0,a=1/0,o=-1/0,c=0;for(let h=0;h<t;h++){const m=h/t*xa,p=hf(r,m),g=Ky(p,r.altitudeKm);n+=g,g>0&&c++;const _=p/Ae;_<a&&(a=_),_>o&&(o=_)}const u=n/t;return{eclipseFraction:u,sunExposure:1-u,betaMinDeg:a,betaMaxDeg:o,eclipseDays:c/t*xa}}const $y=0,q3=1,tS=2;function Y3({width:r=721,height:t=361,sunSamples:n=366}={}){const a=new Float32Array(n),o=new Float32Array(n),c=new Float32Array(n);for(let g=0;g<n;g++){const _=Yy(g/n*xa);a[g]=_.x,o[g]=_.y,c[g]=_.z}const u=new Float32Array(r*t),h=new Float32Array(r*t),m=new Float32Array(r),p=new Float32Array(r);for(let g=0;g<r;g++){const _=(-180+360*g/(r-1))*Ae;m[g]=Math.cos(_),p[g]=Math.sin(_)}for(let g=0;g<t;g++){const _=(-90+180*g/(t-1))*Ae,v=Math.cos(_),b=Math.sin(_);for(let M=0;M<r;M++){const w=v*m[M],y=v*p[M];let x=-2,A=2;for(let L=0;L<n;L++){const B=w*a[L]+y*o[L]+b*c[L];B>x&&(x=B),B<A&&(A=B)}const C=g*r+M;u[C]=x,h[C]=A}}return{width:r,height:t,max:u,min:h}}function Z3(r,t){const n=Math.cos(t*Ae),{max:a,min:o}=r,c=new Uint8Array(a.length);for(let u=0;u<a.length;u++)c[u]=o[u]>=n?tS:a[u]>=n?q3:$y;return c}function Qx(r,t,n,a){const o=A=>-180+360*A/(t-1),c=A=>-90+180*A/(n-1),u=(A,C)=>r[A*t+C],h=(A,C)=>2*(A*t+C),m=(A,C)=>2*(A*t+C)+1,p=new Map,g=new Map,_=(A,C)=>{const L=C-A,B=L===0?.5:(a-A)/L;return Math.min(1,Math.max(0,B))},v=(A,C,L,B)=>{if(!p.has(A))if(B){const P=_(u(C,L),u(C,L+1));p.set(A,{lat:c(C),lng:o(L+P)})}else{const P=_(u(C,L),u(C+1,L));p.set(A,{lat:c(C+P),lng:o(L)})}},b=(A,C)=>{g.has(A)||g.set(A,[]),g.has(C)||g.set(C,[]),g.get(A).push(C),g.get(C).push(A)};for(let A=0;A<n-1;A++)for(let C=0;C<t-1;C++){const L=u(A,C),B=u(A,C+1),P=u(A+1,C+1),N=u(A+1,C),T=(L>=a?1:0)|(B>=a?2:0)|(P>=a?4:0)|(N>=a?8:0);if(T===0||T===15)continue;const U=h(A,C),rt=h(A+1,C),H=m(A,C),K=m(A,C+1),et=J=>{J===U?v(J,A,C,!0):J===rt?v(J,A+1,C,!0):J===H?v(J,A,C,!1):v(J,A,C+1,!1)},tt=(J,z)=>{et(J),et(z),b(J,z)};switch(T){case 1:tt(H,U);break;case 2:tt(U,K);break;case 3:tt(H,K);break;case 4:tt(K,rt);break;case 5:{.25*(L+B+P+N)>=a?(tt(H,rt),tt(U,K)):(tt(H,U),tt(K,rt));break}case 6:tt(U,rt);break;case 7:tt(H,rt);break;case 8:tt(H,rt);break;case 9:tt(U,rt);break;case 10:{.25*(L+B+P+N)>=a?(tt(H,U),tt(K,rt)):(tt(U,K),tt(H,rt));break}case 11:tt(K,rt);break;case 12:tt(H,K);break;case 13:tt(U,K);break;case 14:tt(H,U);break}}const M=new Set,w=[],y=A=>{const C=[A];M.add(A);let L=null,B=A;for(;;){const P=g.get(B)||[];let N=null;for(const T of P)if(T!==L&&!M.has(T)){N=T;break}if(N==null){P.includes(A)&&C.length>2&&C.push(A);break}M.add(N),C.push(N),L=B,B=N}return C},x=[...g.keys()];for(const A of x)!M.has(A)&&(g.get(A)||[]).length===1&&w.push(y(A));for(const A of x)M.has(A)||w.push(y(A));return w.map(A=>A.map(C=>p.get(C))).filter(A=>A.length>=2)}function K3(r,t){const n=Math.cos(t*Ae);return{dU:Qx(r.max,r.width,r.height,n),dI:Qx(r.min,r.width,r.height,n)}}const _m=[{hex:"#38bdf8",cls:"text-sky-400 border-sky-400",chip:"bg-sky-400/90"},{hex:"#34d399",cls:"text-emerald-400 border-emerald-400",chip:"bg-emerald-400/90"},{hex:"#fcd34d",cls:"text-amber-300 border-amber-300",chip:"bg-amber-300/90"},{hex:"#a78bfa",cls:"text-violet-400 border-violet-400",chip:"bg-violet-400/90"}],Xu=r=>_m[r%_m.length],Ei={sun:"#fbbf24",analemma:"#fde68a",ecliptic:"#fde68a",terminator:"#cbd5e1",grid:"#ffffff",emiAxis:"#a5b4fc",mssiAxis:"#fde68a",eclipsed:"#f43f5e",regionAlways:[124,58,237],regionSome:[249,115,22],regionNever:[16,185,129],dU:"#8b5cf6",dI:"#fb923c"},Pi={analemma:"text-amber-200 border-amber-200",subSolarPoint:"text-amber-400 border-amber-400",sunDirectionLine:"text-amber-400 border-amber-400",terminator:"text-slate-300 border-slate-300",latLonGrid:"text-slate-400 border-slate-400",otherFrameAxes:"text-indigo-300 border-indigo-300",framePlanes:"text-amber-200 border-amber-200",labels:"text-slate-200 border-slate-200",eclipsed:"bg-rose-500",regionAlways:"bg-violet-600",regionSome:"bg-orange-500",regionNever:"bg-emerald-500"},Jx=_m.map(r=>r.hex),Bn={analemma:Ei.analemma,ecliptic:Ei.ecliptic,sun:Ei.sun,terminator:Ei.terminator,grid:Ei.grid,emiAxis:Ei.emiAxis,mssiAxis:Ei.mssiAxis,eclipsed:Ei.eclipsed,dU:Ei.dU,dI:Ei.dI},Q3={[$y]:[...Ei.regionAlways,150],1:[...Ei.regionSome,115],[tS]:[...Ei.regionNever,50]},Wu=1.004,ua=1.008,Mo=1.014,J3=1.012,pp=1.022,Cs=2.4,qu=64,mp="#db2777",Yn=10,gp=.45,$x=.5,ty="./",ey="?v=mvdb0d2t",ve=typeof window<"u"&&new URLSearchParams(window.location.search).has("paper"),Eo=typeof window<"u"&&new URLSearchParams(window.location.search).has("cover");let _p=null;function $3(){return _p||(_p=Y3({width:721,height:361,sunSamples:366})),_p}const Hl=new Set;function ja(r,t,{size:n=.05,tier:a=1,far:o=[1/0,9,6]}={}){ve&&(n*=1.2);const c=document.createElement("canvas");c.width=512,c.height=128;const u=c.getContext("2d");u.font='500 34px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',"letterSpacing"in u&&(u.letterSpacing="0.5px"),u.textAlign="center",u.textBaseline="middle";const h=Math.min(500,u.measureText(r).width+36),m=256-h/2;u.fillStyle=ve?"rgba(255, 255, 255, 0.92)":"rgba(6, 10, 24, 0.62)",u.beginPath(),u.roundRect(m,36,h,56,12),u.fill(),u.strokeStyle=ve?"rgba(15,23,42,0.25)":"rgba(255,255,255,0.10)",u.lineWidth=2,u.stroke(),u.fillStyle=ve?"#0f172a":t,u.fillText(r,256,65);const p=new af(c);p.colorSpace=Ln,p.anisotropy=4;const g=new uf({map:p,transparent:!0,depthTest:!1,depthWrite:!1,sizeAttenuation:!1}),_=new um(g);return _.scale.set(n*4,n,1),_.renderOrder=50,_.userData.label={tier:a,far:o,text:r},Hl.add(_),_}class qm{constructor(t){this.container=t,this.lineMaterials=new Set,this.props=null,this.orbitVisuals=new Map,this.disposed=!1;const n=new d3({antialias:!0,alpha:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.setClearColor(0,0),n.outputColorSpace=Ln,t.appendChild(n.domElement),n.domElement.style.display="block",this.renderer=n,this.scene=new FE,this.camera=new Ii(38,1,.05,200),this.camera.up.set(0,0,1),this.camera.position.set(3,-1.4,1).normalize().multiplyScalar(4.2),this.camera.lookAt(0,0,0),this.controls=new m3(this.camera,n.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.enablePan=!1,this.controls.minDistance=1.3,this.controls.maxDistance=12,this.controls.rotateSpeed=.6,this.eciGroup=new Je,this.mssiGroup=new Je,this.earthGroup=new Je,this.displayGroup=new Je,this.earthAssembly=new Je,this.earthAssembly.add(this.eciGroup,this.mssiGroup,this.earthGroup,this.displayGroup),this.helioRoot=new Je,this.helioRoot.visible=!1,this.scene.add(this.earthAssembly,this.helioRoot),this.viewMode="geo",this.helioCamera="follow",this.lastEarthPos=new j,this.scene.add(new h1(16777215,ve?3.2:Eo?1.25:.8)),this.sunLight=new f1(16777215,ve?1.1:Eo?3:2.4),this.sunLight.position.set(1,0,0),this.eciGroup.add(this.sunLight),this.scene.add(new l1(14674175,2764613,ve?.8:Eo?.6:.35)),ve||this.#c(),this.#u(),ve||this.#f(),this.#h(),this.#d(),this.#p(),this.#g(),this.#_(),this.#m(),this.resize(),this.tick=()=>this.#A(),this.raf=requestAnimationFrame(this.tick)}#i(t){const n=new Vm({worldUnits:!1,transparent:!0,depthWrite:!1,...t});return n.resolution.set(this.width||1,this.height||1),this.lineMaterials.add(n),n}#t(t,n){const a=new jy,o=new Float32Array(t.length*3);for(let h=0;h<t.length;h++)o[h*3]=t[h].x,o[h*3+1]=t[h].y,o[h*3+2]=t[h].z;a.setPositions(o);const c=this.#i(n),u=new D3(a,c);return n.dashed&&u.computeLineDistances(),u.renderOrder=10,u}#a(t){t&&(t.traverse(n=>{if(n.geometry&&n.geometry.dispose(),n.material){const a=Array.isArray(n.material)?n.material:[n.material];for(const o of a)o.map&&o.map.dispose(),this.lineMaterials.delete(o),o.dispose()}}),t.parent?.remove(t))}static#l(t,n,a){const o=[];for(let c=0;c<=n;c++){const u=c/n*hi;o.push(a(u,t))}return o}#c(){const n=new Float32Array(6600);let a=12345;const o=()=>((a=a*16807%2147483647)-1)/2147483646;for(let h=0;h<2200;h++){const m=o()*2-1,p=o()*hi,g=Math.sqrt(1-m*m);n[h*3]=60*g*Math.cos(p),n[h*3+1]=60*g*Math.sin(p),n[h*3+2]=60*m}const c=new jn;c.setAttribute("position",new Bi(n,3));const u=new Ly({color:Eo?"#e2e8f0":"#cbd5e1",size:Eo?2.4:1.6,sizeAttenuation:!1,transparent:!0,opacity:Eo?.85:.45,depthWrite:!1});this.stars=new YE(c,u),this.eciGroup.add(this.stars)}#u(){const t=new Je;t.rotation.x=Math.PI/2;const n=new zi(1,128,96),a=new e1({color:16777215,specular:2236962,shininess:8,bumpScale:.012}),o=new o1;o.load(`${ty}textures/earth-blue-marble.webp${ey}`,c=>{c.colorSpace=Ln,c.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),a.map=c,a.needsUpdate=!0,this.texturePending=!0}),o.load(`${ty}textures/earth-topology.webp${ey}`,c=>{a.bumpMap=c,a.needsUpdate=!0}),this.earthMesh=new en(n,a),t.add(this.earthMesh),this.earthGroup.add(t),this.ghostEarth=new en(new zi(.995,64,48),new ei({color:ve?"#94a3b8":"#64748b",transparent:!0,opacity:ve?.08:.14,depthWrite:!1})),this.ghostEarth.visible=!1,this.displayGroup.add(this.ghostEarth)}#f(){const t=new Hi({uniforms:{glowColor:{value:new Me("#5aa9ff")}},vertexShader:`
        varying vec3 vNormal;
        varying vec3 vView;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vView = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        #define GLOW ${ve?"0.45":"1.0"}
        uniform vec3 glowColor;
        varying vec3 vNormal;
        varying vec3 vView;
        void main() {
          float f = 1.0 - abs(dot(vNormal, vView));
          float a = pow(f, 6.0) * 0.32 * GLOW;
          gl_FragColor = vec4(glowColor, a);
        }`,transparent:!0,side:ii,blending:rf,depthWrite:!1}),n=new en(new zi(1.05,64,48),t);n.renderOrder=-1,this.atmosphere=n,this.earthAssembly.add(n)}#h(){const t=(c,u,h)=>{const m=Math.cos(c*Ae);return{x:h*m*Math.cos(u*Ae),y:h*m*Math.sin(u*Ae),z:h*Math.sin(c*Ae)}},n=[],a=[];for(let c=-80;c<=80;c+=20){const u=c===0?a:n;for(let h=-180;h<180;h+=3){const m=t(c,h,Wu),p=t(c,h+3,Wu);u.push(m.x,m.y,m.z,p.x,p.y,p.z)}}for(let c=0;c<360;c+=30){const u=c===0||c===180?a:n;for(let h=-90;h<90;h+=3){const m=t(h,c,Wu),p=t(h+3,c,Wu);u.push(m.x,m.y,m.z,p.x,p.y,p.z)}}const o=(c,u,h)=>{const m=new Gm;m.setPositions(new Float32Array(c));const p=this.#i({color:ve?"#0f172a":Bn.grid,linewidth:h,opacity:ve?u*1.4:u}),g=new ky(m,p);return g.renderOrder=5,g};this.grid=new Je,this.grid.add(o(n,.22,1),o(a,.5,1.3)),this.grid.visible=!1,this.displayGroup.add(this.grid)}#e(t,n,a,{dashed:o=!1,length:c=1.9,tier:u=1}={}){const h=new Je,m=this.#t([{x:0,y:0,z:0},{x:t.x*c,y:t.y*c,z:t.z*c}],{color:n,linewidth:1.6,opacity:.9,dashed:o,dashSize:.06,gapSize:.04}),p=new en(new ff(.022,.08,16),new ei({color:n}));if(p.quaternion.setFromUnitVectors(new j(0,1,0),new j(t.x,t.y,t.z)),p.position.set(t.x*(c+.05),t.y*(c+.05),t.z*(c+.05)),h.add(m,p),a){const g=ja(a,n,{tier:u});g.position.set(t.x*(c+.22),t.y*(c+.22),t.z*(c+.22)),h.add(g)}return h}#d(){const t={x:1,y:0,z:0},n={x:0,y:1,z:0},a={x:0,y:0,z:1},o=ve?"#4338ca":Bn.emiAxis,c=ve?"#b45309":Bn.mssiAxis;this.emiAxis=new Je,this.emiAxisSolid=new Je,this.emiAxisSolid.name="emiAxisSolid",this.emiAxisSolid.add(this.#e(t,o,"ECI x · vernal equinox"),this.#e(n,o,"ECI y",{tier:2})),this.emiAxisDashed=new Je,this.emiAxisDashed.name="emiAxisDashed",this.emiAxisDashed.add(this.#e(t,o,"ECI x · vernal equinox",{dashed:!0}),this.#e(n,o,"ECI y",{dashed:!0,tier:2})),this.emiAxis.add(this.emiAxisSolid,this.emiAxisDashed),this.emiAxis.visible=!1,this.eciGroup.add(this.emiAxis),this.mssiAxis=new Je,this.mssiAxisSolid=new Je,this.mssiAxisSolid.name="mssiAxisSolid",this.mssiAxisSolid.add(this.#e(t,c,"MSSI x · mean Sun"),this.#e(n,c,"MSSI y",{tier:2})),this.mssiAxisDashed=new Je,this.mssiAxisDashed.name="mssiAxisDashed",this.mssiAxisDashed.add(this.#e(t,c,"MSSI x · mean Sun",{dashed:!0}),this.#e(n,c,"MSSI y",{dashed:!0,tier:2})),this.mssiAxis.add(this.mssiAxisSolid,this.mssiAxisDashed),this.mssiAxis.visible=!1,this.mssiGroup.add(this.mssiAxis),this.zAxis=this.#e(a,ve?"#0f172a":"#e2e8f0","z · spin axis",{length:1.6,tier:2}),this.zAxis.visible=!1,this.turnArc=new Je,this.turnArcLine=this.#t(Array.from({length:qu},()=>({x:0,y:0,z:0})),{color:mp,linewidth:2.6,opacity:1});const u=new ff(.028,.085,12);this.turnArcCone=new en(u,new ei({color:mp})),this.turnArcCone0=new en(u,new ei({color:mp})),this.turnArc.add(this.turnArcLine,this.turnArcCone,this.turnArcCone0),this.turnArc.visible=!1,this.eciGroup.add(this.turnArc),this.displayGroup.add(this.zAxis);const h=this.#t([{x:0,y:0,z:-1.25},{x:0,y:0,z:1.25}],{color:ve?"#0f172a":"#ffffff",linewidth:1,opacity:ve?.5:.25});this.displayGroup.add(h)}#p(){const n=(h,m,p,g)=>{const _=new Je,v=new en(new $l(2,2),new ei({color:h,transparent:!0,opacity:ve?.14:.1,side:Ji,depthWrite:!1}));v.rotation.x=p.x,v.rotation.y=p.y,v.renderOrder=3;const b=[[-1,-1],[1,-1],[1,1],[-1,1],[-1,-1]].map(([x,A])=>{const C=new j(x,A,0).applyEuler(v.rotation);return{x:C.x,y:C.y,z:C.z}}),M=this.#t(b,{color:h,linewidth:1.2,opacity:ve?.85:.6}),w=this.#t(b,{color:h,linewidth:1.2,opacity:ve?.85:.6,dashed:!0,dashSize:.08,gapSize:.05}),y=ja(m,h,{size:.045,tier:2});return y.position.set(g.x,g.y,g.z),_.add(v,M,w,y),_.userData={solid:M,dashed:w},_},a=ve?"#4338ca":Bn.emiAxis,o=ve?"#b45309":Bn.mssiAxis,c=ve?"#475569":"#cbd5e1";this.equatorPlane=n(c,"equatorial plane (xy)",{x:0,y:0},{x:1,y:-1*.92,z:.04}),this.equatorPlane.visible=!1,this.displayGroup.add(this.equatorPlane),this.emiPlanes=new Je,this.emiPlanes.add(n(a,"ECI xz-plane",{x:Math.PI/2,y:0},{x:1*.92,y:0,z:1}),n(a,"ECI yz-plane",{x:0,y:Math.PI/2},{x:0,y:1*.92,z:-1})),this.emiPlanes.visible=!1,this.eciGroup.add(this.emiPlanes),this.mssiPlanes=new Je,this.mssiPlanes.add(n(o,"MSSI xz-plane · noon–midnight",{x:Math.PI/2,y:0},{x:1*.92,y:0,z:-1}),n(o,"MSSI yz-plane · dawn–dusk",{x:0,y:Math.PI/2},{x:0,y:-1*.92,z:1})),this.mssiPlanes.visible=!1,this.mssiGroup.add(this.mssiPlanes);const u=(h,m,p)=>{const g=ja(h,m,{size:.055,tier:0});return g.userData.label.helioOnly=!0,g.userData.label.helioAlways=!0,g.position.set(p.x,p.y,p.z),g};this.emiPlanes.add(u("ECI",a,{x:1,y:0,z:1+.16})),this.mssiPlanes.add(u("MSSI",o,{x:1,y:0,z:-1-.16})),this.framePlanes=new Je,this.framePlanes.visible=!1}#m(){const t=ve?"#d97706":"#fde68a",n=new en(new zi($x,48,32),new ei({color:t}));if(this.helioRoot.add(n),!ve){const _=document.createElement("canvas");_.width=_.height=256;const v=_.getContext("2d"),b=v.createRadialGradient(128,128,20,128,128,128);b.addColorStop(0,"rgba(255,244,200,0.95)"),b.addColorStop(.3,"rgba(251,191,36,0.55)"),b.addColorStop(1,"rgba(251,191,36,0)"),v.fillStyle=b,v.fillRect(0,0,256,256);const M=new af(_);M.colorSpace=Ln;const w=new um(new uf({map:M,transparent:!0,depthWrite:!1,blending:rf}));w.scale.set(4.5,4.5,1),this.helioRoot.add(w)}const a=ja("Sun",t,{size:.045,tier:0});a.userData.label.helioAlways=!0,a.position.set(0,0,$x+.35),this.helioRoot.add(a);const o=P3(720).map(_=>({x:_.x*Yn,y:_.y*Yn,z:0})),c=this.#t(o,{color:ve?"#475569":"#94a3b8",linewidth:1.4,opacity:.8,dashed:!0,dashSize:.18,gapSize:.12});this.helioRoot.add(c);const u=this.#t([{x:-Yn*1.25,y:0,z:0},{x:Yn*1.25,y:0,z:0}],{color:ve?"#4338ca":Bn.emiAxis,linewidth:1,opacity:.45,dashed:!0,dashSize:.12,gapSize:.1}),h=ja("vernal equinox direction",ve?"#4338ca":Bn.emiAxis,{size:.04,tier:1,far:[1/0,60,60]});h.userData.label.helioAlways=!0,h.position.set(Yn*1.25,0,-.45),this.helioRoot.add(u,h);const m=(_,v,b,M,w=1.06,y=.18,x=2,A=!1)=>{const C=gm(_),L=new en(new zi(b,12,8),new ei({color:M}));if(L.position.set(C.x*Yn,C.y*Yn,0),this.helioRoot.add(L),v){const B=ja(v,M,{size:.036,tier:x,far:[1/0,45,40]});B.userData.label.helioAlways=A,B.position.set(C.x*Yn*w,C.y*Yn*w,y),this.helioRoot.add(B)}},p=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],g=[-.5,30.5,59.5,90.5,120.5,151.5,181.5,212.5,243.5,273.5,304.5,334.5];p.forEach((_,v)=>m(g[v],_,.016,ve?"#64748b":"#94a3b8"));for(const _ of z3()){const v=_.key==="perihelion"||_.key==="aphelion";m(_.d,_.label,.026,ve?"#0f172a":"#e2e8f0",v?.9:1.14,v?-.3:.4,1,!v)}}#g(){this.sunLine=this.#t([{x:0,y:0,z:0},{x:Cs,y:0,z:0}],{color:ve?"#d97706":Bn.sun,linewidth:ve?2.4:1.8,opacity:.95}),this.sunLine.visible=!1,this.eciGroup.add(this.sunLine);const t=document.createElement("canvas");t.width=t.height=128;const n=t.getContext("2d"),a=n.createRadialGradient(64,64,4,64,64,64);a.addColorStop(0,"rgba(255,245,200,1)"),a.addColorStop(.35,"rgba(251,191,36,0.9)"),a.addColorStop(1,"rgba(251,191,36,0)"),n.fillStyle=a,n.fillRect(0,0,128,128);const o=new af(t);o.colorSpace=Ln,this.sunSprite=new um(new uf({map:o,transparent:!0,depthWrite:!1})),this.sunSprite.scale.set(.26,.26,1),this.sunSprite.visible=!1,this.eciGroup.add(this.sunSprite),this.sunSpriteLabel=ja("Sun",Bn.sun,{size:.045,tier:0}),this.sunSpriteLabel.visible=!1,this.eciGroup.add(this.sunSpriteLabel),this.subSolar=new en(new zi(.016,24,16),new ei({color:Bn.sun})),this.subSolar.visible=!1,this.eciGroup.add(this.subSolar);const c=new en(new Pm(.024,.031,32),new ei({color:Bn.sun,side:Ji,transparent:!0,opacity:.8}));this.subSolar.add(c),this.subSolarRing=c;const u=qm.#l(ua,180,(h,m)=>({x:m*Math.cos(h),y:m*Math.sin(h),z:0}));this.terminator=this.#t(u,{color:ve?"#475569":Bn.terminator,linewidth:1.4,opacity:.9,dashed:!0,dashSize:.045,gapSize:.03}),this.terminator.visible=!1,this.eciGroup.add(this.terminator)}#_(){const t=N3(720).map(a=>({x:a.x*Mo,y:a.y*Mo,z:a.z*Mo}));this.analemma=this.#t(t,{color:ve?"#b45309":Bn.analemma,linewidth:ve?3:2.4,opacity:1}),this.analemma.visible=!1,this.mssiGroup.add(this.analemma);const n=O3(360).map(a=>({x:a.x*Mo,y:a.y*Mo,z:a.z*Mo}));this.ecliptic=this.#t(n,{color:ve?"#b45309":Bn.ecliptic,linewidth:1.4,opacity:.8,dashed:!0,dashSize:.05,gapSize:.035}),this.ecliptic.visible=!1,this.eciGroup.add(this.ecliptic)}#v(t,n,a){const o=Jx[n%Jx.length],c=t.inclinationDeg*Ae,u=1+t.altitudeKm/kn,h=240,m=[];for(let _=0;_<=h;_++)m.push(dp(0,c,_/h*hi));const p=new Je,g={orbit:t,color:o,idx:n,group:p,rr:u,unit:m,flags:a,mssiObjects:[]};if(a.orbitalPlaneRing){const _=!!a.eclipseSegments;g.ring=this.#t(m.map(v=>({x:v.x*u,y:v.y*u,z:v.z*u})),{color:_?"#ffffff":o,linewidth:2.4,opacity:1,vertexColors:_}),p.add(g.ring)}if(a.groundTrack){const _=!!a.eclipseSegments;g.track=this.#t(m.map(v=>({x:v.x*ua,y:v.y*ua,z:v.z*ua})),{color:_?"#ffffff":o,linewidth:1.5,opacity:.95,vertexColors:_}),p.add(g.track)}if(a.satelliteMarker&&(g.sat=new en(new zi(.02,24,16),new ei({color:o})),g.sat.renderOrder=20,g.subSat=new en(new zi(.01,16,12),new ei({color:o})),g.tether=this.#t([{x:0,y:0,z:1},{x:0,y:0,z:u}],{color:o,linewidth:1,opacity:.55}),g.label=ja(t.name,o,{size:.045,tier:0}),g.sat.material.transparent=!0,p.add(g.sat,g.subSat,g.tether,g.label)),a.raanVector){g.raan=this.#t([{x:0,y:0,z:0},{x:u,y:0,z:0}],{color:o,linewidth:1.6,opacity:.9,dashed:!0,dashSize:.045,gapSize:.03});const _=new en(new zi(.015,16,12),new ei({color:o}));_.position.set(u,0,0);const v=ja("Ω node",o,{size:.045,tier:1});v.position.set(u+.02,0,-.085),p.add(g.raan,_,v)}return this.eciGroup.add(p),a.eclipseRegions&&this.#x(g),g}#x(t){const n=$3(),a=Jy(t.orbit.altitudeKm),o=Z3(n,a),c=n.width-1,u=n.height,h=document.createElement("canvas");h.width=c,h.height=u;const m=h.getContext("2d"),p=m.createImageData(c,u);for(let y=0;y<u;y++){const x=u-1-y;for(let A=0;A<c;A++){const C=Q3[o[y*n.width+A]],L=(x*c+A)*4;p.data[L]=C[0],p.data[L+1]=C[1],p.data[L+2]=C[2],p.data[L+3]=C[3]}}m.putImageData(p,0,0);const g=new af(h);g.colorSpace=Ln,g.minFilter=Un,g.magFilter=Un;const _=new Je;_.rotation.x=Math.PI/2;const v=J3+t.idx*.004,b=new en(new zi(v,96,64),new ei({map:g,transparent:!0,depthWrite:!1}));b.renderOrder=2,_.add(b),this.mssiGroup.add(_),t.mssiObjects.push(_),t.regionAlpha=a;const M=K3(n,a),w=y=>y.map(x=>{const A=Math.cos(x.lat*Ae);return{x:pp*A*Math.cos(x.lng*Ae),y:pp*A*Math.sin(x.lng*Ae),z:pp*Math.sin(x.lat*Ae)}});for(const y of M.dU){if(y.length<2)continue;const x=this.#t(w(y),{color:Bn.dU,linewidth:2.4,opacity:1});this.mssiGroup.add(x),t.mssiObjects.push(x)}for(const y of M.dI){if(y.length<2)continue;const x=this.#t(w(y),{color:Bn.dI,linewidth:2.4,opacity:1});this.mssiGroup.add(x),t.mssiObjects.push(x)}}#s(t){this.#a(t.group);for(const n of t.mssiObjects)this.#a(n)}#y(t,n,a){const{orbit:o,group:c,rr:u,unit:h}=t,m=Zy(o,n);if(c.rotation.z=m,t.sat){const p=V3(o,n),g=dp(0,o.inclinationDeg*Ae,p);t.sat.position.set(g.x*u,g.y*u,g.z*u),t.subSat.position.set(g.x*ua,g.y*ua,g.z*ua),t.tether.geometry.setPositions(new Float32Array([g.x*ua,g.y*ua,g.z*ua,g.x*u,g.y*u,g.z*u]));const _=dp(0,o.inclinationDeg*Ae,Math.PI/2);t.label.position.set(_.x*u,_.y*u,_.z*u+.09);const v=t.lastU==null?0:Math.abs(((p-t.lastU+Math.PI)%hi+hi)%hi-Math.PI);t.lastU=p,t.fastCount=v>.35?Math.min(6,(t.fastCount||0)+1):Math.max(0,(t.fastCount||0)-1);const b=t.fastCount>=2;t.sat.material.opacity=b?.35:1,t.tether.visible=!b,t.subSat.visible=!b}if(t.flags.eclipseSegments&&(t.ring||t.track)){const p=F3(a,-m),g=kn/(kn+o.altitudeKm),_=new Me(t.color),v=new Me(Bn.eclipsed),b=new Float32Array(h.length*3);for(let M=0;M<h.length;M++){const w=h[M],y=w.x*p.x+w.y*p.y+w.z*p.z,x=w.y*p.z-w.z*p.y,A=w.z*p.x-w.x*p.z,C=w.x*p.y-w.y*p.x,B=y<0&&Math.hypot(x,A,C)<g?v:_;b[M*3]=B.r,b[M*3+1]=B.g,b[M*3+2]=B.b}t.ring&&t.ring.geometry.setColors(b),t.track&&t.track.geometry.setColors(b)}}setProps(t){const n=this.props;this.props=t,(!n||n.orbits!==t.orbits||n.displayOrbits!==t.displayOrbits||n.coordinateFrame!==t.coordinateFrame)&&this.#S(t);const o=t.viewMode==="helio"?"helio":"geo";o!==this.viewMode&&(this.viewMode=o,this.#r(t),this.#E(o)),this.#b(t),this.#r(t)}#S({orbits:t,displayOrbits:n}){for(const a of this.orbitVisuals.values())this.#s(a);this.orbitVisuals.clear(),t.forEach((a,o)=>{const c=n[a.id]??{};Object.values(c).some(Boolean)&&this.orbitVisuals.set(a.id,this.#v(a,o,c))})}#b({vectors:t={},referenceOverlays:n={},coordinateFrame:a,earthTextureMode:o}){this.labelsEnabled=n.labels!==!1;const c=o==="hidden";this.earthMesh.visible=!c,this.atmosphere&&(this.atmosphere.visible=!c),this.ghostEarth.visible=c,this.analemma.visible=!!t.analemma,this.ecliptic.visible=!!t.analemma&&a==="ECI",this.subSolar.visible=!!t.subSolarPoint,this.sunLine.visible=!!t.sunDirectionLine,this.sunSprite.visible=!!t.sunDirectionLine,this.terminator.visible=!!t.terminator,this.grid.visible=!!n.latLonGrid;const u=!!n.otherFrameAxes;this.emiAxis.visible=u,this.mssiAxis.visible=u;const h=a==="ECI";this.emiAxisSolid.visible=h,this.emiAxisDashed.visible=!h,this.mssiAxisSolid.visible=!h,this.mssiAxisDashed.visible=h,this.zAxis.visible=u,this.turnArc.visible=!!n.mssiTurnArc;const m=!!n.framePlanes;this.equatorPlane.visible=m,this.emiPlanes.visible=m,this.mssiPlanes.visible=m;for(const p of this.emiPlanes.children)p.userData.solid&&(p.userData.solid.visible=h,p.userData.dashed.visible=!h);for(const p of this.mssiPlanes.children)p.userData.solid&&(p.userData.solid.visible=!h,p.userData.dashed.visible=h);this.framePlanes.visible=m}#M(t){let n=Zx("MSSI",t)%(Math.PI*2);n>Math.PI&&(n-=Math.PI*2);const a=1,o=1.03,c=new Float32Array(qu*3);for(let m=0;m<qu;m++){const p=n*m/(qu-1);c[3*m]=a*Math.cos(p),c[3*m+1]=a*Math.sin(p),c[3*m+2]=o}this.turnArcLine.geometry.setPositions(c);const u=Math.sign(n)||1,h=(m,p,g)=>{const _=new j(-Math.sin(p)*g,Math.cos(p)*g,0);m.quaternion.setFromUnitVectors(new j(0,1,0),_),m.position.set(a*Math.cos(p)-_.x*.0425,a*Math.sin(p)-_.y*.0425,o)};h(this.turnArcCone,n,u),h(this.turnArcCone0,0,-u)}#r({timeDays:t,coordinateFrame:n,earthTextureMode:a}){const o=this.viewMode==="helio",c=o?0:Zx(n,t),u=_f(t);this.eciGroup.rotation.z=-c,this.mssiGroup.rotation.z=u-c,this.earthGroup.rotation.z=a==="still"?0:I3(t)-c;const h=Xm(t);this.sunLight.position.set(h.x*10,h.y*10,h.z*10);let m=Cs;if(o){const p=gm(t);this.assemblyTarget={pos:new j(p.x*Yn,p.y*Yn,0),rot:-p.eps},this.assemblyTween||(this.earthAssembly.position.copy(this.assemblyTarget.pos),this.earthAssembly.rotation.x=-p.eps),m=p.r*Yn/gp,this.currentEarthPos={x:p.x*Yn,y:p.y*Yn,z:0}}this.sunLine.geometry.setPositions(new Float32Array([0,0,0,h.x*m,h.y*m,h.z*m])),this.turnArc.visible&&this.#M(t),this.sunSprite.position.set(h.x*Cs,h.y*Cs,h.z*Cs),this.sunSprite.visible=this.sunSprite.visible&&!o,this.sunSpriteLabel.position.set(h.x*Cs,h.y*Cs,h.z*Cs+.22),this.sunSpriteLabel.userData.label.off=!this.sunSprite.visible,this.sunSpriteLabel.visible=this.sunSprite.visible,this.subSolar.position.set(h.x*1.006,h.y*1.006,h.z*1.006),this.subSolar.quaternion.setFromUnitVectors(new j(0,0,1),new j(h.x,h.y,h.z)),this.terminator.quaternion.setFromUnitVectors(new j(0,0,1),new j(h.x,h.y,h.z));for(const p of this.orbitVisuals.values())this.#y(p,t,h);this.currentSunECI=h}#E(t){this.viewMode=t;const n=t==="helio";this.helioRoot.visible=n;const a=n?gp:1;this.assemblyTween={t0:performance.now(),dur:1e3,fromScale:this.earthAssembly.scale.x,toScale:a,fromPos:this.earthAssembly.position.clone(),fromRot:this.earthAssembly.rotation.x},n||(this.currentEarthPos=null,this.assemblyTarget={pos:new j(0,0,0),rot:0});const o=n?2.4:1;for(const c of[this.emiAxis,this.mssiAxis,this.zAxis,this.equatorPlane,this.emiPlanes,this.mssiPlanes,this.turnArc])c.scale.setScalar(o);this.stars&&(this.stars.parent?.remove(this.stars),(n?this.scene:this.eciGroup).add(this.stars)),this.controls.minDistance=n?.9:1.3,this.controls.maxDistance=n?60:12,n?this.setHelioCamera(this.helioCamera||"follow"):this.#n(new j(3,-1.4,1).normalize().multiplyScalar(4.2),new j(0,0,0))}#n(t,n,a=900){this.cameraTween={t0:performance.now(),dur:a,fromPos:this.camera.position.clone(),toPos:t.clone(),fromTarget:this.controls.target.clone(),toTarget:n.clone()}}setHelioCamera(t){this.helioCamera=t;const n=new j(this.currentEarthPos?.x??Yn,this.currentEarthPos?.y??0,0);if(t==="above")this.#n(new j(0,-8,26),new j(0,0,0));else if(t==="side")this.#n(new j(2,-28,4),new j(0,0,0));else{const a=n.clone().negate().normalize(),o=new j(0,0,1).cross(a).normalize(),c=n.clone().addScaledVector(a,-4.4).addScaledVector(o,2.6).add(new j(0,0,2.1));this.#n(c,n.clone().addScaledVector(a,1.4))}this.lastEarthPos.copy(n)}resize(){if(!this.container)return;const t=Math.max(1,Math.floor(this.container.clientWidth)),n=Math.max(1,Math.floor(this.container.clientHeight));this.width=t,this.height=n,this.renderer.setSize(t,n,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.camera.aspect=t/n,this.camera.updateProjectionMatrix();for(const a of this.lineMaterials)a.resolution.set(t,n)}#T(){this.camera.updateMatrixWorld(),this.camera.matrixWorldInverse.copy(this.camera.matrixWorld).invert();const t=this.viewMode==="helio"?1.7:1,n=this.camera.position,a=this.viewMode==="helio",o=a&&this.currentEarthPos&&n.distanceTo(new j(this.currentEarthPos.x,this.currentEarthPos.y,0))<3.6,c=this.#o||(this.#o=new j),u=this.width||1,h=this.height||1,m=[];for(const g of Hl){if(!g.parent)continue;let _=g.parent,v=!0;for(;_.parent;)_.visible||(v=!1),_=_.parent;if(_!==this.scene)continue;if(!this.labelsEnabled||!v||!_.visible||g.userData.label.off){g.visible=!1;continue}const b=g.userData.label;if(this.labelFilter&&!this.labelFilter(b.text)){g.visible=!1;continue}if(!a&&b.helioOnly){g.visible=!1;continue}if(a&&!o&&!b.helioAlways&&!this.labelFilter){g.visible=!1;continue}const{tier:M,far:w}=g.userData.label;g.getWorldPosition(c);const y=c.distanceTo(n);if(g.userData.label.dist=y,!ve&&M!==0&&y>(w[M]??1/0)*t){g.visible=!1,g.userData.label.why="far";continue}const x=c.clone().project(this.camera);if(g.userData.label.ndcz=x.z,x.z>1||x.z<-1){g.visible=!1,g.userData.label.why="ndc";continue}g.userData.label.why=null;const A=g.scale.x/2*u*.78,C=g.scale.y/2*h*.9,L=(x.x+1)/2*u,B=(1-x.y)/2*h;m.push({sp:g,tier:M,dist:y,rect:[L-A/2,B-C/2,L+A/2,B+C/2]})}m.sort((g,_)=>g.tier-_.tier||g.dist-_.dist);const p=ve?[]:[[0,0,560,84],[u-340,0,u,48]];for(const g of m){const[_,v,b,M]=g.rect,w=p.some(([y,x,A,C])=>_<A&&b>y&&v<C&&M>x);g.sp.visible=!w,w||p.push(g.rect)}}#o=null;#A(){if(this.disposed)return;const t=performance.now(),n=a=>a<.5?4*a*a*a:1-Math.pow(-2*a+2,3)/2;if(this.assemblyTween){const a=this.assemblyTween,o=n(Math.min(1,(t-a.t0)/a.dur)),c=this.assemblyTarget||{pos:new j,rot:0};this.earthAssembly.scale.setScalar(a.fromScale+(a.toScale-a.fromScale)*o),this.earthAssembly.position.lerpVectors(a.fromPos,c.pos,o),this.earthAssembly.rotation.x=a.fromRot+(c.rot-a.fromRot)*o,o>=1&&(this.assemblyTween=null)}if(this.cameraTween){const a=this.cameraTween,o=a.dur>0?n(Math.min(1,(t-a.t0)/a.dur)):1;if(this.viewMode==="helio"&&this.helioCamera==="follow"&&this.currentEarthPos){const c=new j(this.currentEarthPos.x,this.currentEarthPos.y,0),u=c.clone().sub(this.lastEarthPos);u.lengthSq()>0&&(a.toPos.add(u),a.toTarget.add(u),a.fromPos.add(u),a.fromTarget.add(u),this.lastEarthPos.copy(c))}this.camera.position.lerpVectors(a.fromPos,a.toPos,o),this.controls.target.lerpVectors(a.fromTarget,a.toTarget,o),o>=1&&(this.cameraTween=null)}if(!this.cameraTween&&this.viewMode==="helio"&&this.helioCamera==="follow"&&this.currentEarthPos){const a=new j(this.currentEarthPos.x,this.currentEarthPos.y,0),o=a.clone().sub(this.lastEarthPos);o.lengthSq()>0&&(this.camera.position.add(o),this.controls.target.copy(a),this.lastEarthPos.copy(a))}this.controls.update(),(this.frameCount||0)%3===0&&this.#T(),this.renderer.render(this.scene,this.camera),this.frameCount=(this.frameCount||0)+1,this.texturePending&&!this.texturesReady&&(this.texturesReady=!0,this.onReady?.()),this.raf=requestAnimationFrame(this.tick)}whenReady(t){this.texturesReady?t():this.onReady=t}detach(){cancelAnimationFrame(this.raf),this.raf=null,this.renderer.domElement.remove(),this.container=null}attach(t){this.container=t,t.appendChild(this.renderer.domElement),this.resize(),this.raf==null&&(this.raf=requestAnimationFrame(this.tick))}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf);for(const t of[...Hl]){let n=t;for(;n.parent;)n=n.parent;n===this.scene&&Hl.delete(t)}this.controls.dispose();for(const t of this.orbitVisuals.values())this.#s(t);this.scene.traverse(t=>{if(t.geometry&&t.geometry.dispose(),t.material){const n=Array.isArray(t.material)?t.material:[t.material];for(const a of n)a.map&&a.map.dispose(),a.dispose()}}),this.renderer.dispose(),this.renderer.domElement.remove()}debugState(){this.scene.updateMatrixWorld(!0);const t=(c,u)=>{const h=new j(u.x,u.y,u.z);return c.localToWorld(h),{x:h.x,y:h.y,z:h.z}},n={};for(const[c,u]of this.orbitVisuals){const h=u.sat?t(u.group,u.sat.position):null,m=u.ring?u.unit.filter((p,g)=>g%20===0).map(p=>t(u.group,{x:p.x*u.rr,y:p.y*u.rr,z:p.z*u.rr})):null;n[c]={sat:h,ring:m,rotationZ:u.group.rotation.z,rr:u.rr,regionAlpha:u.regionAlpha??null,flags:u.flags,hasRing:!!u.ring,hasTrack:!!u.track,mssiObjects:u.mssiObjects.length}}const a=[],o=this.analemma.geometry.attributes.instanceStart;if(o)for(let c=0;c<o.count;c+=6)a.push(t(this.analemma,{x:o.getX(c),y:o.getY(c),z:o.getZ(c)}));return{frameCount:this.frameCount||0,texturesReady:!!this.texturesReady,rotations:{eci:this.eciGroup.rotation.z,mssi:this.mssiGroup.rotation.z,earth:this.earthGroup.rotation.z},subSolar:t(this.eciGroup,this.subSolar.position),sunECI:this.currentSunECI,analemma:a,orbits:n,visible:{analemma:this.analemma.visible,ecliptic:this.ecliptic.visible,subSolar:this.subSolar.visible,sunLine:this.sunLine.visible,terminator:this.terminator.visible,grid:this.grid.visible,emiAxis:this.emiAxis.visible,mssiAxis:this.mssiAxis.visible,framePlanes:this.framePlanes.visible,labels:this.labelsEnabled!==!1},camera:{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z},viewMode:this.viewMode,earthPos:this.currentEarthPos??null,labels:[...Hl].filter(c=>{let u=c;for(;u.parent;)u=u.parent;return u===this.scene}).map(c=>{let u=c.parent,h=null;for(;u;)!u.visible&&!h&&(h=u.name||u.type),u=u.parent;return{text:c.userData.label.text,tier:c.userData.label.tier,visible:c.visible,dist:c.userData.label.dist??null,hiddenBy:h,off:!!c.userData.label.off,why:c.userData.label.why??null,ndcz:c.userData.label.ndcz??null}})}}setLabelFilter(t){this.labelFilter=t}project(t){const n=new j(t.x,t.y,t.z).project(this.camera);return{x:(n.x+1)/2*this.width,y:(1-n.y)/2*this.height,depth:n.z}}setCamera(t){if(t&&t.absolute){const{position:n,target:a}=t.absolute;this.helioCamera="manual",this.#n(new j(n.x,n.y,n.z),new j(a.x,a.y,a.z),0),this.currentEarthPos&&this.lastEarthPos.set(this.currentEarthPos.x,this.currentEarthPos.y,0);return}if(t&&t.helio){this.setHelioCamera(t.helio);return}if(this.viewMode==="helio"){const n=new j(this.currentEarthPos?.x??Yn,this.currentEarthPos?.y??0,0),a=new j(t.x,t.y,t.z).normalize().multiplyScalar(4.2*gp*1.8);this.helioCamera="manual",this.#n(n.clone().add(a),n),this.lastEarthPos.copy(n);return}this.#n(new j(t.x,t.y,t.z),new j(0,0,0))}}let vp=null;const tR={analemma:!1,subSolarPoint:!1,sunDirectionLine:!1,terminator:!1},eR={latLonGrid:!1,otherFrameAxes:!1};function ny({coordinateFrame:r="MSSI",earthTextureMode:t="realistic",orbits:n=[],displayOrbits:a={},timeDays:o=0,vectors:c=tR,referenceOverlays:u=eR,cameraRequest:h=null,viewMode:m="geo"}){const p=Zt.useRef(null),g=Zt.useRef(null),[_,v]=Zt.useState(()=>!!vp?.texturesReady);return Zt.useEffect(()=>{const b=p.current;if(!b)return;let M=vp;M?M.attach(b):M=vp=new qm(b),g.current=M,window.__k0scene=M,M.whenReady(()=>v(!0));const w=new ResizeObserver(()=>M.resize());return w.observe(b),()=>{w.disconnect(),M.detach(),g.current=null}},[]),Zt.useEffect(()=>{g.current?.setProps({coordinateFrame:r,earthTextureMode:t,viewMode:m,orbits:n,displayOrbits:a,timeDays:o,vectors:c,referenceOverlays:u})},[r,t,m,n,a,o,c,u]),Zt.useEffect(()=>{const b=g.current;h&&b&&b.lastCameraRequest!==h&&(b.lastCameraRequest=h,b.setCamera(h))},[h]),I.jsxs("div",{className:"relative h-full w-full",children:[I.jsx("div",{ref:p,className:`h-full w-full transition-opacity duration-500 ${_?"opacity-100":"opacity-0"}`}),_?null:I.jsxs("div",{className:"pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/60",children:[I.jsx("div",{className:"h-7 w-7 animate-spin rounded-full border-2 border-white/20 border-t-white/70"}),I.jsx("div",{className:"text-[11px] font-semibold uppercase tracking-[0.16em]",children:"Loading Earth"})]})]})}function Il({children:r,className:t=""}){return I.jsx("span",{className:`inline-flex h-10 w-10 items-center justify-center rounded-full ${t}`,children:r})}function nR({valueDays:r,onChangeDays:t}){const o="w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:h-0.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-white/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:mt-[-5px] [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow [&::-moz-range-track]:h-0.5 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-white/25 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-white",c=M=>Number(M).toFixed(2),u=c(r),[h,m]=Zt.useState(u),[p,g]=Zt.useState(u),[_,v]=Zt.useState(!1);p!==u&&(g(u),m(u));const b=()=>{const M=Number.parseFloat(h);if(!Number.isFinite(M)){v(!0),m(c(r)),window.setTimeout(()=>v(!1),260);return}const w=Dn(cn(M,0,365.24),2);t(w),m(c(w))};return I.jsxs("div",{className:"flex w-full items-center gap-4",children:[I.jsx("input",{className:o,type:"range",min:0,max:365.24,step:.01,value:r,onChange:M=>t(Dn(Number(M.target.value),2))}),I.jsxs("div",{className:"flex items-center gap-2 text-[11px] text-white/80",children:[I.jsx("input",{className:`w-[84px] rounded-md bg-white/5 px-2 py-1 text-right font-semibold text-white/90 ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 ${_?"animate-shake":""}`,type:"text",inputMode:"decimal",value:h,onChange:M=>m(M.target.value),onKeyDown:M=>{M.key==="Enter"&&b()},onBlur:()=>m(c(r))}),I.jsx("span",{children:"days"})]})]})}function Ym(r){return`${r}_${Math.random().toString(36).slice(2,10)}${Date.now().toString(36)}`}const iR={groundTrack:!1,satelliteMarker:!1,orbitalPlaneRing:!1,eclipseSegments:!1,raanVector:!1,eclipseRegions:!1},Gl={overview:{name:"Overview",coordinateFrame:"MSSI",earthTextureMode:"still",orbit:{satelliteMarker:!0,orbitalPlaneRing:!0},vectors:{analemma:!0,subSolarPoint:!0,sunDirectionLine:!0,terminator:!1},referenceOverlays:{latLonGrid:!0,otherFrameAxes:!1,framePlanes:!1}},eclipse:{name:"Eclipse",coordinateFrame:"MSSI",earthTextureMode:"still",orbit:{orbitalPlaneRing:!0,eclipseSegments:!0,eclipseRegions:!0,raanVector:!0},vectors:{analemma:!0,subSolarPoint:!0,sunDirectionLine:!0,terminator:!0},referenceOverlays:{latLonGrid:!1,otherFrameAxes:!1}},frames:{name:"Frames",coordinateFrame:"ECI",earthTextureMode:"still",orbit:{orbitalPlaneRing:!0,raanVector:!0,satelliteMarker:!0},vectors:{analemma:!0,subSolarPoint:!0,sunDirectionLine:!0,terminator:!1},referenceOverlays:{latLonGrid:!0,otherFrameAxes:!0,framePlanes:!0}},helio:{name:"Sun-centred",viewMode:"helio",coordinateFrame:"MSSI",earthTextureMode:"realistic",orbit:{orbitalPlaneRing:!0,raanVector:!0},vectors:{analemma:!1,subSolarPoint:!0,sunDirectionLine:!0,terminator:!1},referenceOverlays:{latLonGrid:!0,otherFrameAxes:!0,framePlanes:!0}},planes:{name:"Frame planes",coordinateFrame:"MSSI",earthTextureMode:"still",orbit:{orbitalPlaneRing:!0,satelliteMarker:!0},vectors:{sunDirectionLine:!0},referenceOverlays:{latLonGrid:!1,otherFrameAxes:!0,framePlanes:!0}},sun:{name:"Sun & analemma",coordinateFrame:"MSSI",earthTextureMode:"still",orbit:{groundTrack:!0},vectors:{analemma:!0,subSolarPoint:!0,sunDirectionLine:!0,terminator:!0},referenceOverlays:{latLonGrid:!0,otherFrameAxes:!1}}},aR=[{id:"noon",group:"Reference orbits",name:"Noon–midnight, 550 km",altitudeKm:550,raanOffsetDeg:0},{id:"dawn800",group:"Reference orbits",name:"Dawn–dusk, 800 km (LTAN 06:00)",altitudeKm:800,raanOffsetDeg:270},{id:"dusk800",group:"Reference orbits",name:"Dawn–dusk, 800 km (LTAN 18:00)",altitudeKm:800,raanOffsetDeg:90},{id:"kz1500",group:"Reference orbits",name:"Kelvin Zero, 1500 km (eclipse-free)",altitudeKm:1500,raanOffsetDeg:270},{id:"default",group:"Reference orbits",name:"Near dawn–dusk, 800 km (LTAN 05:20)",altitudeKm:800,raanOffsetDeg:260},{id:"suncatcher",group:"Announced systems (as filed, 2026)",name:"Google Project Suncatcher, 650 km",altitudeKm:650,raanOffsetDeg:90},{id:"starcloud600",group:"Announced systems (as filed, 2026)",name:"Starcloud, 600 km shell",altitudeKm:600,raanOffsetDeg:90},{id:"starcloud850",group:"Announced systems (as filed, 2026)",name:"Starcloud, 850 km shell",altitudeKm:850,raanOffsetDeg:90},{id:"spacex500",group:"Announced systems (as filed, 2026)",name:"SpaceX Orbital Data Center, 500 km shell",altitudeKm:500,raanOffsetDeg:90},{id:"spacex1000",group:"Announced systems (as filed, 2026)",name:"SpaceX Orbital Data Center, 1000 km shell",altitudeKm:1e3,raanOffsetDeg:90},{id:"spacex1500",group:"Announced systems (as filed, 2026)",name:"SpaceX Orbital Data Center, 1500 km shell (eclipse-free)",altitudeKm:1500,raanOffsetDeg:90},{id:"terrasarx",group:"Flying missions",name:"TerraSAR-X, 514 km (LTAN 18:00)",altitudeKm:514,raanOffsetDeg:90},{id:"iris",group:"Flying missions",name:"IRIS, 645 km (LTAN 06:00)",altitudeKm:645,raanOffsetDeg:270},{id:"hinode",group:"Flying missions",name:"Hinode, 680 km (LTAN 18:00)",altitudeKm:680,raanOffsetDeg:90},{id:"sentinel1",group:"Flying missions",name:"Sentinel-1, 693 km (LTAN 18:00)",altitudeKm:693,raanOffsetDeg:90},{id:"proba2",group:"Flying missions",name:"PROBA-2, 725 km (LTAN 06:00)",altitudeKm:725,raanOffsetDeg:270},{id:"radarsat2",group:"Flying missions",name:"RADARSAT-2, 798 km (LTAN 18:00)",altitudeKm:798,raanOffsetDeg:90}],iy={follow:{label:"Follow Earth"},above:{label:"Above ecliptic"},side:{label:"Along ecliptic"}},vm={sun:{label:"Sun side",x:3,y:-1.4,z:1},antisun:{label:"Anti-Sun",x:-3.2,y:-1.2,z:.9},pole:{label:"North pole",x:.4,y:-.4,z:3.4},side:{label:"Dawn side",x:.2,y:-3.3,z:.8}};function sR(r,t){return{...r,activeViewId:t}}function rR(r){const n=r.views.filter(u=>!u.locked).length+1,a=Ym("v"),o=r.views.find(u=>u.id===r.activeViewId)??r.views[0],c={id:a,name:`Custom View ${n}`,locked:!1,config:mr(o.config),savedConfig:mr(o.config)};return{...r,views:[c,...r.views],activeViewId:a}}function oR(r,t){const n=r.views.find(c=>c.id===t);if(!n||n.locked)return r;const a=r.views.filter(c=>c.id!==t),o=r.activeViewId===t?a[0]?.id??r.activeViewId:r.activeViewId;return{...r,views:a,activeViewId:o}}function lR(r,t){return{...r,views:r.views.map(n=>n.id===t&&n.savedConfig?{...n,config:mr(n.savedConfig)}:n)}}function cR(r,t){const n=r.orbits.find(u=>u.id===t);if(!n||n.locked)return r;const a=r.orbits.filter(u=>u.id!==t),o=r.activeOrbitId===t?a[0]?.id??r.activeOrbitId:r.activeOrbitId,c=r.views.map(u=>{const h={...u.config.display.orbits};delete h[t];const m=u.savedConfig?{...u.savedConfig.display.orbits}:null;return m&&delete m[t],{...u,config:{...u.config,display:{...u.config.display,orbits:h}},savedConfig:u.savedConfig?{...u.savedConfig,display:{...u.savedConfig.display,orbits:m}}:u.savedConfig}});return{...r,orbits:a,activeOrbitId:o,views:c}}function uR(r,t){return{...r,activeOrbitId:t}}function fR(r){const t=r.orbits.length+1,n=Ym("o"),a=r.orbits[0],o={id:n,name:`Orbit ${t}`,locked:!1,altitudeKm:a.altitudeKm,inclinationDeg:a.inclinationDeg,raanOffsetDeg:a.raanOffsetDeg,initialMeanAnomalyDeg:a.initialMeanAnomalyDeg},c={groundTrack:!0,satelliteMarker:!0,orbitalPlaneRing:!1,eclipseSegments:!1,raanVector:!1,eclipseRegions:!1},u=r.views.map(h=>{const m={...h.config,display:{...h.config.display,orbits:{...h.config.display.orbits,[n]:{...c}}}},p=h.savedConfig?{...h.savedConfig,display:{...h.savedConfig.display,orbits:{...h.savedConfig.display.orbits,[n]:{...c}}}}:void 0;return{...h,config:m,savedConfig:p}});return{...r,orbits:[...r.orbits,o],activeOrbitId:n,views:u}}function eS(r,t,n){return{...r,orbits:r.orbits.map(a=>a.id===t?{...a,...n}:a)}}function hR(r,t){return{...r,views:r.views.map(n=>n.id===r.activeViewId?{...n,config:{...n.config,...t}}:n)}}function dR(r,t,n){const a=r.views.find(u=>u.id===r.activeViewId);if(!a)return r;const o=a.config.display.orbits[t];if(!o)return r;const c=!!o[n];return{...r,views:r.views.map(u=>u.id===r.activeViewId?{...u,config:{...u.config,display:{...u.config.display,orbits:{...u.config.display.orbits,[t]:{...u.config.display.orbits[t],[n]:!c}}}}}:u)}}function pR(r,t,n){const a=r.views.find(u=>u.id===r.activeViewId);if(!a)return r;const o=a.config.display[t][n],c=n==="labels"?o!==!1:!!o;return{...r,views:r.views.map(u=>u.id===r.activeViewId?{...u,config:{...u.config,display:{...u.config.display,[t]:{...u.config.display[t],[n]:!c}}}}:u)}}function nS(r,t){const n={};for(const a of r.orbits)n[a.id]={...iR,...t.orbit??{}};return{toggles:{coordinateFrame:t.coordinateFrame??"MSSI",earthTextureMode:t.earthTextureMode??"realistic",viewMode:t.viewMode??"geo"},display:{orbits:n,vectors:{analemma:!1,subSolarPoint:!1,sunDirectionLine:!1,terminator:!1,...t.vectors??{}},referenceOverlays:{latLonGrid:!1,otherFrameAxes:!1,framePlanes:!1,labels:!0,...t.referenceOverlays??{}}}}}function mR(r,t){const n=nS(r,t),a=r.views.find(u=>u.name===t.name);if(a)return{...r,activeViewId:a.id,views:r.views.map(u=>u.id===a.id?{...u,config:n,savedConfig:mr(n)}:u)};const o=Ym("v"),c={id:o,name:t.name,locked:!1,config:n,savedConfig:mr(n)};return{...r,views:[c,...r.views],activeViewId:o}}function Yu({label:r,min:t,max:n,step:a,value:o,unit:c,onChange:u,onChangeLive:h,onCommit:m,rightIcon:p,decimals:g}){const _="w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:h-0.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-white/20 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:mt-[-5px] [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow [&::-moz-range-track]:h-0.5 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-white/20 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-white",v=N=>Number(N).toFixed(g),b=v(o),[M,w]=Zt.useState(b),[y,x]=Zt.useState(b),[A,C]=Zt.useState(!1);y!==b&&(x(b),w(b));const L=()=>{const N=Number.parseFloat(M);if(!Number.isFinite(N)){C(!0),w(v(o)),window.setTimeout(()=>C(!1),260);return}const T=cn(N,t,n),U=Number(Number(T).toFixed(g));u(U),w(Number(U).toFixed(g))},B=N=>{if(m){h?.(N);return}u(N)},P=N=>{if(!m)return;const T=cn(N,t,n),U=Number(Number(T).toFixed(g));m(U)};return I.jsxs("div",{children:[I.jsxs("div",{className:"flex items-center justify-between text-xs text-white/80",children:[I.jsx("span",{children:r}),I.jsx("div",{className:"flex items-center gap-2",children:p})]}),I.jsxs("div",{className:"mt-3 grid grid-cols-[1fr_auto] items-center gap-3",children:[I.jsx("input",{className:_,type:"range",min:t,max:n,step:a,value:o,onChange:N=>B(Number(N.target.value)),onPointerUp:N=>P(Number(N.currentTarget.value)),onKeyUp:N=>{N.key==="Enter"&&P(Number(N.currentTarget.value))}}),I.jsxs("div",{className:"flex items-center gap-2 text-[11px] text-white/80",children:[I.jsx("input",{className:`w-[84px] rounded-md bg-white/5 px-2 py-1 text-right font-semibold text-white/90 ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 ${A?"animate-shake":""}`,type:"text",inputMode:"decimal",value:M,onChange:N=>w(N.target.value),onKeyDown:N=>{N.key==="Enter"&&L()},onBlur:()=>w(v(o))}),I.jsx("span",{children:c})]})]})]})}function gR({orbit:r,timeDays:t=0,colorHex:n="#38bdf8"}){const p=Zt.useMemo(()=>{const y=[];for(let x=0;x<=92;x++){const A=x/92*xa;y.push({d:A,b:hf(r,A)/Ae})}return{pts:y,thr:Qy(r.altitudeKm)}},[r]),g=w=>26+w/xa*268,_=w=>6+(90-w)/180*52,v=p.pts.map((w,y)=>`${y?"L":"M"}${g(w.d).toFixed(1)},${_(w.b).toFixed(1)}`).join(" "),b=hf(r,t)/Ae,M=[0,31,59,90,120,151,181,212,243,273,304,334];return I.jsxs("svg",{viewBox:"0 0 300 72",className:"mt-1 w-full",role:"img","aria-label":"Beta angle over the year",children:[I.jsx("rect",{x:26,y:_(p.thr),width:268,height:_(-p.thr)-_(p.thr),fill:"rgba(244,63,94,0.12)"}),I.jsx("line",{x1:26,x2:294,y1:_(p.thr),y2:_(p.thr),stroke:"rgba(244,63,94,0.5)",strokeDasharray:"3 3"}),I.jsx("line",{x1:26,x2:294,y1:_(-p.thr),y2:_(-p.thr),stroke:"rgba(244,63,94,0.5)",strokeDasharray:"3 3"}),I.jsx("line",{x1:26,x2:294,y1:_(0),y2:_(0),stroke:"rgba(255,255,255,0.12)"}),[90,0,-90].map(w=>I.jsxs("text",{x:22,y:_(w)+3,textAnchor:"end",fontSize:"8",fill:"rgba(255,255,255,0.45)",children:[w,"°"]},w)),M.map((w,y)=>I.jsx("text",{x:g(w+15),y:69,textAnchor:"middle",fontSize:"7.5",fill:"rgba(255,255,255,0.35)",children:"JFMAMJJASOND"[y]},w)),I.jsx("path",{d:v,fill:"none",stroke:n,strokeWidth:"1.6"}),I.jsx("line",{x1:g(t),x2:g(t),y1:6,y2:58,stroke:"rgba(255,255,255,0.35)"}),I.jsx("circle",{cx:g(t),cy:_(b),r:"2.6",fill:n,stroke:"rgba(0,0,0,0.6)"})]})}const _R=r=>{const t=((12+r/15)%24+24)%24;return`${String(Math.floor(t)).padStart(2,"0")}:${String(Math.round(t%1*60)%60).padStart(2,"0")}`};function xp({checked:r,colorClass:t}){return I.jsx("span",{className:`h-3.5 w-3.5 flex-none rounded-sm border-2 ${t} ${r?"bg-current":"bg-transparent"}`,"aria-hidden":"true"})}const Zu="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55",Ku="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45";function vR({onPick:r}){const[t,n]=Zt.useState(!1),a=Zt.useRef(null);return Zt.useEffect(()=>{if(!t)return;const o=u=>{a.current?.contains(u.target)||n(!1)},c=u=>{u.key==="Escape"&&n(!1)};return document.addEventListener("mousedown",o),document.addEventListener("keydown",c),()=>{document.removeEventListener("mousedown",o),document.removeEventListener("keydown",c)}},[t]),I.jsxs("div",{ref:a,className:"relative min-w-0 flex-1",children:[I.jsxs("button",{type:"button","aria-haspopup":"listbox","aria-expanded":t,onClick:()=>n(o=>!o),className:"flex w-full items-center justify-between rounded-md bg-white/10 py-1.5 pl-3 pr-2.5 text-xs font-medium text-white/90 ring-1 ring-inset ring-white/10 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60",children:[I.jsx("span",{children:"Load an orbit preset…"}),I.jsx(Ds,{className:`h-3 w-3 text-white/70 transition-transform ${t?"rotate-180":""}`})]}),t?I.jsx("ul",{role:"listbox",className:"absolute left-0 right-0 top-full z-40 mt-1.5 overflow-hidden rounded-xl bg-slate-950/95 p-1 shadow-xl ring-1 ring-white/10 backdrop-blur-md",children:aR.map(o=>I.jsx("li",{role:"option","aria-selected":!1,children:I.jsx("button",{type:"button",onClick:()=>{r(o),n(!1)},className:"w-full rounded-lg px-3 py-1.5 text-left text-xs font-medium text-white/85 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:bg-white/10",children:o.name})},o.id))}):null]})}function xR({items:r}){return I.jsx("div",{className:"ml-[26px] flex flex-wrap gap-x-3 gap-y-1 pb-1 text-[10px] text-white/55",children:r.map(([t,n])=>I.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[I.jsx("span",{className:`inline-block h-2 w-2 rounded-[2px] ${t}`,"aria-hidden":"true"}),n]},n))})}function Qi({helpId:r,onRequestHelp:t}){return r?I.jsx("button",{type:"button",className:"inline-flex h-5 w-5 flex-none items-center justify-center text-white/80 hover:text-white","aria-label":`Help: ${r}`,onClick:n=>{n.stopPropagation(),t?.(r)},children:I.jsx(MM,{className:"h-3.5 w-3.5"})}):null}function yR({open:r,drawer:t=!1,onClose:n,model:a,setModel:o,timeDays:c=0,onRequestDeleteOrbit:u,onRequestHelp:h}){const[m,p]=Zt.useState(!0),[g,_]=Zt.useState(!0),[v,b]=Zt.useState(!0),[M,w]=Zt.useState(!0),[y,x]=Zt.useState(!0),[A,C]=Zt.useState(!0),[L,B]=Zt.useState(!0),P=Zt.useMemo(()=>a.orbits.find(V=>V.id===a.activeOrbitId)??a.orbits[0],[a]),N=Zt.useMemo(()=>a.views.find(V=>V.id===a.activeViewId)??a.views[0],[a]),T=`${P.id}|${P.altitudeKm}|${P.inclinationDeg}|${P.raanOffsetDeg}|${P.initialMeanAnomalyDeg}`,[U,rt]=Zt.useState(()=>({key:T,altitudeKm:P.altitudeKm,inclinationDeg:P.inclinationDeg,raanOffsetDeg:P.raanOffsetDeg,initialMeanAnomalyDeg:P.initialMeanAnomalyDeg}));U.key!==T&&rt({key:T,altitudeKm:P.altitudeKm,inclinationDeg:P.inclinationDeg,raanOffsetDeg:P.raanOffsetDeg,initialMeanAnomalyDeg:P.initialMeanAnomalyDeg});const H=Zt.useMemo(()=>{const V=P,ht=hf(V,c)/Ae;return{periodMin:B3(V.altitudeKm)/60,ltan:X3(j3(V.raanOffsetDeg)),alphaDeg:Jy(V.altitudeKm),betaDeg:ht,eclipseNow:Ky(ht*Ae,V.altitudeKm),betaFree:Qy(V.altitudeKm),yearly:W3(V,366)}},[P,c]),K=V=>o(ht=>uR(ht,V)),et=()=>{o(V=>fR(V))},tt=(V,ht)=>{o(Rt=>eS(Rt,V,ht))},J=V=>{o(ht=>hR(ht,V))},z=(V,ht)=>{o(Rt=>dR(Rt,V,ht))},G=(V,ht)=>{o(Rt=>pR(Rt,V,ht))},ut=N.config.toggles.coordinateFrame==="SCI"?"MSSI":N.config.toggles.coordinateFrame,mt=V=>{const ht=Dn(cn(V,100,2e3),1),Rt=Dn(cn(jl(ht),or,lr),2);tt(P.id,{altitudeKm:ht,inclinationDeg:Rt})},Et=V=>{const ht=Dn(cn(V,100,2e3),1),Rt=Dn(cn(jl(ht),or,lr),2);rt(nt=>({...nt,altitudeKm:ht,inclinationDeg:Rt}))},F=V=>{const ht=Dn(cn(V,or,lr),2),Rt=Dn(cn(Kx(ht),100,2e3),1);tt(P.id,{inclinationDeg:ht,altitudeKm:Rt})},q=V=>{const ht=Dn(cn(V,or,lr),2),Rt=Dn(cn(Kx(ht),100,2e3),1);rt(nt=>({...nt,inclinationDeg:ht,altitudeKm:Rt}))};return I.jsx("aside",{className:`${t?"fixed left-0 top-0 z-40":"relative z-20 flex-none"} h-dvh overflow-hidden text-white transition-[width] duration-200 ease-out ${r?`${t?"w-[min(340px,88vw)]":"w-[340px]"} bg-gradient-to-b from-indigo-950/90 via-black to-black shadow-2xl ring-1 ring-white/10`:"w-0 bg-transparent shadow-none ring-0"}`,"aria-hidden":!r,children:I.jsxs("div",{className:`h-full w-[340px] transform overflow-y-auto px-4 py-6 transition-[transform,opacity] duration-200 ease-out [scrollbar-gutter:stable] [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.25)_transparent] [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb:hover]:bg-white/30 ${r?"translate-x-0 opacity-100":"-translate-x-full opacity-0"}`,children:[t?I.jsx("button",{type:"button",onClick:n,"aria-label":"Close menu",className:"absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/80 ring-1 ring-inset ring-white/10",children:"×"}):null,I.jsx("div",{className:"flex items-center justify-between",children:I.jsxs("button",{type:"button",className:"inline-flex items-center gap-2",onClick:()=>p(V=>!V),children:[I.jsx("span",{className:Zu,children:"Orbits"}),I.jsx(Ds,{open:m})]})}),m?I.jsxs(I.Fragment,{children:[I.jsxs("div",{className:"mt-4 flex items-start gap-2",children:[I.jsx("div",{className:"flex flex-1 items-center gap-2 overflow-x-auto pb-3 [scrollbar-gutter:stable] [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.25)_transparent] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb:hover]:bg-white/30",children:a.orbits.map((V,ht)=>{const Rt=V.id===P.id,nt=Xu(ht);return Rt?I.jsxs("span",{className:`inline-flex flex-none items-center gap-2 rounded-full ${nt.chip} px-3 py-1 text-xs font-semibold text-slate-950 ring-1 ring-inset ring-white/20`,children:[V.name,V.locked?null:I.jsx("button",{type:"button",className:"text-slate-900/60 hover:text-slate-900","aria-label":`Delete ${V.name}`,onClick:xt=>{xt.stopPropagation(),u(V.id)},children:"×"})]},V.id):I.jsxs("span",{className:"inline-flex flex-none items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 ring-1 ring-inset ring-white/10",children:[I.jsxs("button",{type:"button",className:"inline-flex items-center gap-1.5 hover:text-white",onClick:()=>K(V.id),"aria-label":`Select ${V.name}`,children:[I.jsx("span",{className:`inline-block h-2 w-2 rounded-full border-2 ${nt.cls} bg-current`,"aria-hidden":"true"}),V.name]}),V.locked?null:I.jsx("button",{type:"button",className:"text-white/60 hover:text-white/80","aria-label":`Delete ${V.name}`,onClick:xt=>{xt.stopPropagation(),u(V.id)},children:"×"})]},V.id)})}),I.jsx("button",{type:"button",className:"inline-flex h-6 w-6 flex-none items-center justify-center self-start rounded-full bg-white/10 text-white ring-1 ring-inset ring-white/10 hover:bg-white/15",onClick:et,"aria-label":"Add orbit",children:I.jsx(sy,{className:"h-3.5 w-3.5"})})]}),I.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[I.jsx("span",{className:`${Ku} flex-none`,children:"Preset"}),I.jsx(vR,{onPick:V=>{const ht=Dn(cn(V.altitudeKm,100,2e3),1);tt(P.id,{altitudeKm:ht,inclinationDeg:Dn(cn(jl(ht),or,lr),2),raanOffsetDeg:V.raanOffsetDeg})}})]}),I.jsxs("div",{className:"mt-6 space-y-6",children:[I.jsx(Yu,{label:"Altitude",min:100,max:2e3,step:.1,value:U.altitudeKm,unit:"km",rightIcon:I.jsx(Qi,{onRequestHelp:h,helpId:"altitudeKm"}),onChange:mt,onChangeLive:Et,onCommit:mt,decimals:1}),I.jsx(Yu,{label:"Inclination",min:or,max:lr,step:.01,value:U.inclinationDeg,unit:"deg",rightIcon:I.jsx(Qi,{onRequestHelp:h,helpId:"inclinationDeg"}),onChange:F,onChangeLive:q,onCommit:F,decimals:2}),I.jsx(Yu,{label:`RAAN offset from mean Sun (Ω) · LTAN ${_R(U.raanOffsetDeg)}`,rightIcon:I.jsx(Qi,{onRequestHelp:h,helpId:"raanOffsetDeg"}),min:0,max:360,step:.01,value:U.raanOffsetDeg,unit:"deg",onChange:V=>tt(P.id,{raanOffsetDeg:cn(V,0,360)}),onChangeLive:V=>rt(ht=>({...ht,raanOffsetDeg:cn(V,0,360)})),onCommit:V=>tt(P.id,{raanOffsetDeg:cn(V,0,360)}),decimals:2}),I.jsx(Yu,{label:"Initial Mean Anomaly",rightIcon:I.jsx(Qi,{onRequestHelp:h,helpId:"initialMeanAnomalyDeg"}),min:0,max:360,step:.01,value:U.initialMeanAnomalyDeg,unit:"deg",onChange:V=>tt(P.id,{initialMeanAnomalyDeg:cn(V,0,360)}),onChangeLive:V=>rt(ht=>({...ht,initialMeanAnomalyDeg:cn(V,0,360)})),onCommit:V=>tt(P.id,{initialMeanAnomalyDeg:cn(V,0,360)}),decimals:2})]})]}):null,I.jsxs("div",{className:"mt-9",children:[I.jsxs("button",{type:"button",className:"flex w-full items-center justify-between",onClick:()=>_(V=>!V),children:[I.jsx("span",{className:Zu,children:"Derived"}),I.jsx(Ds,{open:g})]}),g?I.jsxs("div",{className:"mt-3 select-text space-y-1.5 rounded-lg bg-white/5 px-3 py-2.5 text-xs text-white/85 ring-1 ring-inset ring-white/5",children:[I.jsxs("div",{className:"flex items-center justify-between gap-3 pb-1",children:[I.jsx("span",{className:`text-xs font-semibold ${Xu(a.orbits.findIndex(V=>V.id===P.id)).cls.split(" ")[0]}`,children:P.name}),I.jsx(Qi,{onRequestHelp:h,helpId:"calculate"})]}),[["Period",`${H.periodMin.toFixed(2)} min`],["LTAN",`${H.ltan}`],["β now (day "+c.toFixed(1)+")",`${H.betaDeg.toFixed(2)}°`],["Eclipse now",`${(H.eclipseNow*100).toFixed(1)}% of orbit`],["Eclipse-free if",`|β| ≥ ${H.betaFree.toFixed(2)}°`],["β range (year)",`${H.yearly.betaMinDeg.toFixed(1)}° … ${H.yearly.betaMaxDeg.toFixed(1)}°`],["Yearly sun exposure",`${(H.yearly.sunExposure*100).toFixed(2)}%`],["Days with eclipse",`${H.yearly.eclipseDays.toFixed(0)} / 365`],["Region cone α",`${H.alphaDeg.toFixed(2)}°`]].map(([V,ht])=>I.jsxs("div",{className:"flex items-center justify-between gap-3",children:[I.jsx("span",{className:"text-white/55",children:V}),I.jsx("span",{className:"font-medium tabular-nums text-white/90",children:ht})]},V)),I.jsxs("div",{className:"pt-2",children:[I.jsx("div",{className:"text-[10px] font-semibold tracking-[0.08em] text-white/45",children:"β over the year · shaded band = eclipse"}),I.jsx(gR,{orbit:P,timeDays:c,colorHex:Xu(a.orbits.findIndex(V=>V.id===P.id)).hex})]})]}):null]}),I.jsxs("div",{className:"mt-9",children:[I.jsxs("button",{type:"button",className:"flex w-full items-center justify-between",onClick:()=>b(V=>!V),children:[I.jsx("span",{className:Zu,children:"Toggles"}),I.jsx(Ds,{open:v})]}),v?I.jsxs(I.Fragment,{children:[I.jsxs("div",{className:"mt-4 flex items-center justify-between text-xs text-white/80",children:[I.jsx("span",{children:"Viewpoint"}),I.jsx(Qi,{onRequestHelp:h,helpId:"viewMode"})]}),I.jsx("div",{className:"mt-3 flex flex-wrap gap-2 text-xs",role:"radiogroup","aria-label":"Viewpoint",children:[{label:"Earth-centred",value:"geo"},{label:"Sun-centred",value:"helio"}].map(V=>{const ht=(N.config.toggles.viewMode??"geo")===V.value;return I.jsx("button",{type:"button",role:"radio","aria-checked":ht,className:`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold text-white/90 outline-none focus:outline-none active:outline-none ${ht?"bg-sky-500":"bg-white/10 hover:bg-white/15"}`,onClick:()=>J({toggles:{...N.config.toggles,viewMode:V.value}}),children:V.label},V.value)})}),I.jsxs("div",{className:"mt-6 flex items-center justify-between text-xs text-white/80",children:[I.jsx("span",{children:"Coordinate Frame"}),I.jsx(Qi,{onRequestHelp:h,helpId:"coordinateFrame"})]}),I.jsx("div",{className:"mt-3 flex flex-wrap gap-2 text-xs",role:"radiogroup","aria-label":"Coordinate Frame",children:["ECI","MSSI"].map(V=>{const ht=ut===V;return I.jsx("button",{type:"button",role:"radio","aria-checked":ht,className:`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold text-white/90 outline-none focus:outline-none active:outline-none ${ht?"bg-sky-500":"bg-white/10 hover:bg-white/15"}`,onClick:()=>J({toggles:{...N.config.toggles,coordinateFrame:V}}),children:V},V)})}),I.jsxs("div",{className:"mt-6 flex items-center justify-between text-xs text-white/80",children:[I.jsx("span",{children:"Earth"}),I.jsx(Qi,{onRequestHelp:h,helpId:"earthTextureMode"})]}),I.jsx("div",{className:"mt-3 flex flex-wrap gap-2 text-xs",role:"radiogroup","aria-label":"Earth Texture Mode",children:[{label:"Realistic",value:"realistic"},{label:"Still",value:"still"},{label:"Hidden",value:"hidden"}].map(V=>{const ht=(N.config.toggles.earthTextureMode??"realistic")===V.value;return I.jsx("button",{type:"button",role:"radio","aria-checked":ht,className:`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold text-white/90 outline-none focus:outline-none active:outline-none ${ht?"bg-sky-500":"bg-white/10 hover:bg-white/15"}`,onClick:()=>J({toggles:{...N.config.toggles,earthTextureMode:V.value}}),children:V.label},V.value)})})]}):null]}),I.jsxs("div",{className:"mt-9",children:[I.jsxs("button",{type:"button",className:"flex w-full items-center justify-between",onClick:()=>w(V=>!V),children:[I.jsx("span",{className:Zu,children:"Display"}),I.jsx(Ds,{open:M})]}),M?I.jsx(I.Fragment,{children:I.jsxs("div",{className:"mt-4 space-y-4 text-xs text-white/85",children:[I.jsxs("div",{children:[I.jsxs("button",{type:"button",className:"flex w-full items-center justify-between",onClick:()=>x(V=>!V),children:[I.jsx("div",{className:Ku,children:"Per-orbit"}),I.jsx(Ds,{open:y,className:"h-3 w-3 text-white/60"})]}),y?I.jsx("div",{className:"mt-2 space-y-3",children:a.orbits.map((V,ht)=>{const Rt=Xu(ht).cls,nt=N.config.display.orbits[V.id]??{},xt=[{key:"groundTrack",label:"Ground Track",helpId:"groundTrack"},{key:"satelliteMarker",label:"Satellite Marker",helpId:"satelliteMarker"},{key:"orbitalPlaneRing",label:"Orbital Plane Ring",helpId:"orbitalPlaneRing"},{key:"eclipseSegments",label:"Eclipse Segments",helpId:"eclipseSegments",legend:[[`${Rt.split(" ")[0]} bg-current`,"sunlit"],[Pi.eclipsed,"in shadow"]]},{key:"raanVector",label:"RAAN Vector",helpId:"raanVector"},{key:"eclipseRegions",label:"Eclipse Regions",helpId:"eclipseRegions",legend:[[Pi.regionAlways,"always eclipsed"],[Pi.regionSome,"sometimes"],[Pi.regionNever,"never"]]}];return I.jsxs("div",{className:"rounded-lg bg-white/5 px-3 py-2 ring-1 ring-inset ring-white/5",children:[I.jsx("div",{className:`text-xs font-semibold ${Rt.split(" ")[0]}`,children:V.name}),I.jsx("div",{className:"mt-2 space-y-1.5",children:xt.map(bt=>I.jsxs("div",{children:[I.jsxs("div",{className:"flex w-full items-center justify-between gap-3",children:[I.jsxs("button",{type:"button",className:"flex flex-1 items-center gap-3 text-left",onClick:()=>z(V.id,bt.key),children:[I.jsx(xp,{checked:!!nt[bt.key],colorClass:Rt}),I.jsx("span",{children:bt.label})]}),I.jsx(Qi,{onRequestHelp:h,helpId:bt.helpId})]}),bt.legend&&nt[bt.key]?I.jsx(xR,{items:bt.legend}):null]},bt.key))})]},V.id)})}):null]}),I.jsxs("div",{children:[I.jsxs("button",{type:"button",className:"flex w-full items-center justify-between",onClick:()=>C(V=>!V),children:[I.jsx("div",{className:Ku,children:"Sun & curves"}),I.jsx(Ds,{open:A,className:"h-3 w-3 text-white/60"})]}),A?I.jsx("div",{className:"mt-2 space-y-2",children:[{key:"analemma",label:"Analemma",colorClass:Pi.analemma,helpId:"analemma"},{key:"subSolarPoint",label:"Sub-Solar Point",colorClass:Pi.subSolarPoint,helpId:"subSolarPoint"},{key:"sunDirectionLine",label:"Sun Direction Line",colorClass:Pi.sunDirectionLine,helpId:"sunDirectionLine"},{key:"terminator",label:"Terminator",colorClass:Pi.terminator,helpId:"terminator"}].map(V=>I.jsxs("div",{className:"flex w-full items-center justify-between gap-3",children:[I.jsxs("button",{type:"button",className:"flex flex-1 items-center gap-3 text-left",onClick:()=>G("vectors",V.key),children:[I.jsx(xp,{checked:!!N.config.display.vectors[V.key],colorClass:V.colorClass}),I.jsx("span",{children:V.label})]}),I.jsx(Qi,{onRequestHelp:h,helpId:V.helpId})]},V.key))}):null]}),I.jsxs("div",{children:[I.jsxs("button",{type:"button",className:"flex w-full items-center justify-between",onClick:()=>B(V=>!V),children:[I.jsx("div",{className:Ku,children:"Reference"}),I.jsx(Ds,{open:L,className:"h-3 w-3 text-white/60"})]}),L?I.jsx("div",{className:"mt-2 space-y-2",children:[{key:"latLonGrid",label:"Lat/Lon Grid",colorClass:Pi.latLonGrid,helpId:"latLonGrid"},{key:"otherFrameAxes",label:"Frame Axes",colorClass:Pi.otherFrameAxes,helpId:"otherFrameAxes"},{key:"framePlanes",label:"Frame Planes",colorClass:Pi.framePlanes,helpId:"framePlanes"},{key:"labels",label:"Labels",colorClass:Pi.labels,helpId:"labels"}].map(V=>I.jsxs("div",{className:"flex w-full items-center justify-between gap-3",children:[I.jsxs("button",{type:"button",className:"flex flex-1 items-center gap-3 text-left",onClick:()=>G("referenceOverlays",V.key),children:[I.jsx(xp,{checked:V.key==="labels"?N.config.display.referenceOverlays.labels!==!1:!!N.config.display.referenceOverlays[V.key],colorClass:V.colorClass}),I.jsx("span",{children:V.label})]}),I.jsx(Qi,{onRequestHelp:h,helpId:V.helpId})]},V.key))}):null]})]})}):null]})]})})}const Qu={calculate:{title:"Derived quantities",body:"Live values for the active orbit: orbital period; local time of the ascending node (LTAN = 12:00 + Ω/15°); the β angle (elevation of the Sun above the orbit plane) at the current timeline day; the fraction of the current orbit spent in Earth’s cylindrical shadow; the |β| threshold above which no eclipse occurs (asin R/(R+h)); the β range and mean sun exposure over one year; and α, the sunlit-cone half-angle used by the eclipse-region map.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-eclipse"},altitudeKm:{title:"Altitude",body:"Height of the circular orbit above the WGS84 equatorial radius (6378.137 km). Altitude and inclination are linked by the sun-synchronous condition, so changing one updates the other. Altitude also sets the period, the eclipse-free β threshold and the eclipse-region cone α = 90° + acos(R/(R+h)).",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-sso"},inclinationDeg:{title:"Inclination",body:"Angle between the orbit plane and the equator. Sun-synchronous orbits are retrograde (i > 90°): the J2 nodal precession −(3/2) n J2 (R/a)² cos i must equal the mean Sun’s eastward rate of 0.9856°/day. The value shown is the exact closed-form solution for the current altitude.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-sso"},raanOffsetDeg:{title:"RAAN offset from the mean Sun (Ω)",body:"Right ascension of the ascending node measured in the MSSI frame, i.e. from the mean-Sun direction. Ω = 0° puts the ascending node at local noon (noon–midnight orbit, maximum eclipse); Ω = 90° or 270° gives a dawn–dusk orbit (LTAN 18:00 / 06:00, minimum eclipse). For an exact SSO this angle is constant all year; the label shows the LTAN it corresponds to.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-sso"},initialMeanAnomalyDeg:{title:"Initial mean anomaly",body:"Argument of latitude of the satellite at day 0 (circular orbit, so mean anomaly = true anomaly = angle from the ascending node). Only moves the satellite marker along the ring.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-sso"},coordinateFrame:{title:"Coordinate frame",body:"ECI (Earth-Centred Inertial, J2000): x toward the vernal equinox, nothing rotates with time; SSO planes visibly precess (0.9856°/day) and the Sun circles the sky once a year along the ecliptic. MSSI (Mean-Sun Synchronous Inertial): ECI rotated about the spin axis by the mean solar longitude, so x always points at the mean Sun. SSO planes are frozen, and the true Sun traces the analemma around +x.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-frames"},viewMode:{title:"Viewpoint",body:"Earth-centred: the usual view, drawn in the selected frame (ECI or MSSI). Sun-centred: the Sun sits at the origin and the Earth travels its real orbit (shape, orientation and timing from the same ephemeris; perihelion in early January) with month and season markers. The Earth, its frames and orbits are enlarged about 1000× and the Sun shrunk so everything is visible — the orbit itself is to scale. Watch the amber MSSI x axis keep pointing at the Sun while the indigo ECI axes stay parallel to the fixed vernal-equinox line, and a sun-synchronous ring keep its angle to the Sun all year.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-frames"},earthTextureMode:{title:"Earth",body:"Realistic: the globe spins with Greenwich sidereal time (GMST) — one turn per solar day in MSSI (365.24 per year), one per sidereal day in ECI (366.24); at day 0 (J2000 epoch, 12:00 UT) Greenwich sits under the mean Sun. At year-scale playback speeds that is many turns per second, so the spin strobes; use the “1 d / 6 s” playback speed to watch a rotation. Still: daily rotation is ignored and the texture stays fixed in the display frame. Hidden: the globe is replaced by a faint ghost sphere so the coordinate frames, planes and orbits can be seen through it.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-frames"},groundTrack:{title:"Ground track",body:"Projection of the orbit onto the sphere in the display frame (the sub-satellite great circle). In Still mode this is the path traced on the surface; with eclipse segments on, it is coloured by sunlight/shadow.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-sso"},satelliteMarker:{title:"Satellite marker",body:"Current satellite position at the orbit altitude, with a tether to the sub-satellite point. Moves with the timeline (one revolution per orbital period).",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-sso"},orbitalPlaneRing:{title:"Orbital plane ring",body:"The full circular orbit drawn in 3-D at radius R + h. Frozen in MSSI, precessing once a year in ECI.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-sso"},eclipseSegments:{title:"Eclipse segments",body:"Colours the ring and ground track by the cylindrical-shadow test at the current time: orbit colour = sunlit, red = in Earth’s shadow (night side and within one Earth radius of the Sun–Earth axis).",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-eclipse"},raanVector:{title:"RAAN vector",body:"Dashed line from Earth’s centre to the ascending node on the equatorial plane. In MSSI its angle from +x is the RAAN offset Ω; the LTAN is 12:00 + Ω/15°.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-sso"},eclipseRegions:{title:"Eclipse-time regions",body:"Colours every direction on the sphere (in MSSI) by what a point of this orbit’s shell in that direction sees over the year: green = sunlit all year, orange = sunlit for part of the year and in shadow for the rest, purple = in shadow all year. The cone half-angle α = 90° + acos(R/(R+h)) depends on altitude; ∂U (purple line) bounds the purple cap, ∂I (orange line) bounds the orange band. Read it for the orbit ring: entirely in green → never eclipsed at any time of year; passes through orange but not purple → an eclipse season (eclipse-free part of the year, an eclipse on every revolution the rest); crosses purple → an eclipse on every revolution all year.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-regions"},analemma:{title:"Analemma",body:"Locus of the sub-solar point over one year in the MSSI frame: a figure-8 of ±23.44° in latitude and ±4° in longitude (longitude = −Equation of Time), caused by Earth’s orbital eccentricity and axial tilt. In ECI the same locus is simply the ecliptic (dashed), while the figure-8 drawn is the MSSI curve carried along with the mean Sun.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-sun"},subSolarPoint:{title:"Sub-solar point",body:"Where the true Sun is directly overhead at the current timeline day. It always lies on the analemma.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-sun"},sunDirectionLine:{title:"Sun direction line",body:"Ray from Earth’s centre toward the true Sun (USNO low-precision ephemeris). The scene’s lighting comes from this direction.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-sun"},terminator:{title:"Terminator",body:"Day/night boundary: the great circle perpendicular to the Sun direction.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-eclipse"},latLonGrid:{title:"Lat/Lon grid",body:"Reference graticule fixed in the display frame (20° parallels, 30° meridians). The brighter meridian is the frame’s x axis: vernal equinox in ECI, mean Sun in MSSI.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-frames"},framePlanes:{title:"Frame planes",body:"Draws the coordinate planes through Earth’s centre, colour-coded by frame: the shared equatorial plane (xy) in grey, the ECI xz/yz planes in indigo and the MSSI xz/yz planes in amber (the MSSI xz-plane is the noon–midnight meridian plane, the yz-plane the dawn–dusk plane). Edges are solid for the displayed frame and dashed for the other. Hide the Earth to see them clearly.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-frames"},labels:{title:"Labels",body:"Shows or hides all text labels in the 3-D scene. Labels keep a constant size on screen, so when you zoom out the secondary ones (axis y/z, planes, nodes, calendar markers) hide automatically and only the essential ones (orbit names, Sun) remain; zoom in to see the rest.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-frames"},otherFrameAxes:{title:"Frame axes",body:"Shows the x and y axes of both frames and the shared z (spin) axis: solid for the displayed frame, dashed for the other one. In MSSI the vernal-equinox axis turns once a year; in ECI the mean-Sun axis does.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-frames"}};function SR(r,{limit:t=100}={}){const[n,a]=Zt.useState(()=>({past:[],present:r(),future:[]})),o=n.present,c=Zt.useCallback(g=>{a(_=>{const v=typeof g=="function"?g(_.present):g;if(ay(v,_.present))return _;const b=[..._.past,_.present];return{past:b.length>t?b.slice(b.length-t):b,present:v,future:[]}})},[t]),u=Zt.useCallback(()=>{a(g=>{if(!g.past.length)return g;const _=g.past[g.past.length-1];return{past:g.past.slice(0,-1),present:_,future:[g.present,...g.future]}})},[]),h=Zt.useCallback(()=>{a(g=>{if(!g.future.length)return g;const _=g.future[0];return{past:[...g.past,g.present],present:_,future:g.future.slice(1)}})},[]),m=n.past.length>0,p=n.future.length>0;return Zt.useMemo(()=>({history:n,model:o,setModel:c,undo:u,redo:h,canUndo:m,canRedo:p}),[n,o,c,u,h,m,p])}function bR({playing:r,setPlaying:t,valueDays:n,setValueDays:a,durationMs:o=15e3,totalDays:c=365.24}){const u=Zt.useRef(null),h=Zt.useRef(0),m=Zt.useRef(a),p=Zt.useRef(t);m.current=a,p.current=t,Zt.useEffect(()=>{if(!r){u.current=null;return}u.current=null,h.current=n;let g=0;const _=h.current,v=Math.max(1,o*(c-_)/c),b=M=>{u.current||(u.current=M);const w=M-u.current,y=Math.min(1,w/v),x=Dn(_+y*(c-_),2);if(m.current(x),y>=1){p.current(!1);return}g=window.requestAnimationFrame(b)};return g=window.requestAnimationFrame(b),()=>window.cancelAnimationFrame(g)},[r,o,c])}function MR({canUndo:r,canRedo:t,undo:n,redo:a}){Zt.useEffect(()=>{const o=c=>{const u=c.target,h=u?.tagName;if(h==="INPUT"||h==="TEXTAREA"||h==="SELECT"||u?.isContentEditable)return;const p=String(c.key).toLowerCase();if(c.metaKey||c.ctrlKey){if(p==="z"&&c.shiftKey){t&&(c.preventDefault(),a());return}if(p==="z"){r&&(c.preventDefault(),n());return}p==="y"&&t&&(c.preventDefault(),a())}};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[r,t,n,a])}function ER(){const r={id:"o1",name:"Orbit 1",locked:!0,altitudeKm:800,inclinationDeg:Dn(cn(jl(800),or,lr),2),raanOffsetDeg:260,initialMeanAnomalyDeg:3},t={id:"v_default",name:"Default View",locked:!0,config:{toggles:{coordinateFrame:"MSSI",earthTextureMode:"realistic",viewMode:"geo"},display:{orbits:{[r.id]:{groundTrack:!0,satelliteMarker:!0,orbitalPlaneRing:!1,eclipseSegments:!1,raanVector:!1,eclipseRegions:!1}},vectors:{analemma:!1,subSolarPoint:!0,sunDirectionLine:!1,terminator:!1},referenceOverlays:{latLonGrid:!1,otherFrameAxes:!1,framePlanes:!1,labels:!0}}},savedConfig:null};t.savedConfig=mr(t.config);const n={orbits:[r]},a=["overview","eclipse","frames","helio"].map(o=>{const c=Gl[o],u=nS(n,c);return{id:`v_${o}`,name:c.name,locked:!0,config:u,savedConfig:mr(u)}});return{orbits:[r],activeOrbitId:r.id,views:[...a,t],activeViewId:a[0].id}}function TR(r){const t=new URLSearchParams(r);if(!["view","alt","raan","day","cam","frame","mode"].some(g=>t.has(g)))return null;const n={},a=t.get("view"),o=t.get("frame")==="EMI"?"ECI":t.get("frame");a&&Gl[a]&&(n.preset={...Gl[a]},(o==="ECI"||o==="MSSI")&&(n.preset.coordinateFrame=o,o!==Gl[a].coordinateFrame&&(n.preset.name=`${Gl[a].name} (${o})`)));const c=Number.parseFloat(t.get("alt")),u=Number.parseFloat(t.get("raan"));(Number.isFinite(c)||Number.isFinite(u))&&(n.orbitParams={},Number.isFinite(c)&&(n.orbitParams.altitudeKm=Math.min(2e3,Math.max(100,c))),Number.isFinite(u)&&(n.orbitParams.raanOffsetDeg=(u%360+360)%360));const h=Number.parseFloat(t.get("day"));Number.isFinite(h)&&(n.timeDays=Math.min(365.24,Math.max(0,h)));const m=t.get("mode");n.preset&&(m==="helio"||m==="geo")&&(n.preset.viewMode=m);const p=t.get("cam");return(p&&vm[p]||p&&["follow","above","side"].includes(p))&&(n.camera=p),n}function AR(r){const t=()=>typeof window<"u"&&window.matchMedia(r).matches,[n,a]=Zt.useState(t);return Zt.useEffect(()=>{const o=window.matchMedia(r),c=()=>a(o.matches);return o.addEventListener("change",c),c(),()=>o.removeEventListener("change",c)},[r]),n}const wR=()=>AR("(max-width: 899px)");function RR(){const[r,t]=Zt.useState(()=>typeof window<"u"&&window.location.hash.startsWith("#wp-")?"whitepaper":"visualizer"),n=wR(),[a,o]=Zt.useState(()=>!(typeof window<"u"&&window.matchMedia("(max-width: 899px)").matches));Zt.useEffect(()=>{n&&o(!1)},[n]);const[c,u]=Zt.useState(!1),[h,m]=Zt.useState(0),[p,g]=Zt.useState(!1),[_,v]=Zt.useState(30),[b,M]=Zt.useState(null),w=h>=365.24-1e-6,[y,x]=Zt.useState(null),{model:A,setModel:C,undo:L,redo:B,canUndo:P,canRedo:N}=SR(ER,{limit:100}),T=Zt.useMemo(()=>A.views.find(_t=>_t.id===A.activeViewId)??A.views[0],[A]),[U,rt]=Zt.useState({open:!1,kind:null,id:null}),H=_t=>C(Kt=>sR(Kt,_t)),K=()=>{C(_t=>rR(_t))},et=_t=>{C(Kt=>oR(Kt,_t))},tt=_t=>{C(Kt=>cR(Kt,_t))},J=_t=>{C(Kt=>lR(Kt,_t))},z=_t=>{rt({open:!0,kind:"view",id:_t})},G=_t=>{rt({open:!0,kind:"orbit",id:_t})},ut=()=>{!U.id||!U.kind||(U.kind==="view"&&et(U.id),U.kind==="orbit"&&tt(U.id),rt({open:!1,kind:null,id:null}))},mt=()=>{rt({open:!1,kind:null,id:null})},Et=_t=>{x(_t)},F=()=>{x(null)},q=r==="whitepaper",V=ve,ht=q?"bg-white":"bg-gradient-to-b from-indigo-950 via-black to-black";Zt.useEffect(()=>(document.documentElement.classList.toggle("wp-light",q),()=>document.documentElement.classList.remove("wp-light")),[q]);const[Rt,nt]=Zt.useState(0),xt=_t=>{_t!==r&&(r==="whitepaper"&&nt(window.scrollY),t(_t))};Zt.useEffect(()=>{window.scrollTo({top:r==="whitepaper"?Rt:0,behavior:"instant"})},[r]);const bt=_t=>{if(iy[_t]){M(he=>({helio:_t,nonce:(he?.nonce??0)+1}));return}const Kt=vm[_t];if(!Kt)return;const Ce=4.2/(Math.hypot(Kt.x,Kt.y,Kt.z)||1);M(he=>({x:Kt.x*Ce,y:Kt.y*Ce,z:Kt.z*Ce,nonce:(he?.nonce??0)+1}))},Ht=(T.config.toggles.viewMode??"geo")==="helio",Jt=Zt.useRef(0),ee=_t=>{const Kt=h,X=performance.now(),Ce=++Jt.current,he=1e3,de=kt=>{if(Jt.current!==Ce)return;const O=Math.min(1,(kt-X)/he),E=O<.5?4*O*O*O:1-Math.pow(-2*O+2,3)/2;m(Dn(Kt+(_t-Kt)*E,2)),O<1&&window.requestAnimationFrame(de)};window.requestAnimationFrame(de)},Qe=({preset:_t,timeDays:Kt,camera:X,orbitParams:Ce})=>{C(he=>{let de=he;if(Ce){const kt=de.orbits.find(E=>E.id===de.activeOrbitId)??de.orbits[0],O={...Ce};O.altitudeKm!=null&&(O.inclinationDeg=Dn(jl(O.altitudeKm),2)),de=eS(de,kt.id,O)}return _t&&(de=mR(de,_t)),de}),Kt!=null&&(g(!1),ee(Dn(cn(Kt,0,365.24),2))),xt("visualizer"),X&&window.setTimeout(()=>bt(X),60)};Zt.useEffect(()=>{if(V)return window.__k0app={showInViewer:Qe,setModel:C,setTimelineDays:m,moveCamera:bt,setCameraRequest:M},()=>{delete window.__k0app}}),Zt.useEffect(()=>{const _t=window.location.hash;_t.startsWith("#wp-")&&window.setTimeout(()=>document.getElementById(_t.slice(1))?.scrollIntoView({block:"start"}),150)},[]);const[Se,be]=Zt.useState(!1);Zt.useEffect(()=>{if(Se||V)return;be(!0);const _t=TR(window.location.search);_t&&window.setTimeout(()=>Qe(_t),0)},[Se]);const Le=()=>{u(_t=>(_t||o(!1),!_t))};return Zt.useEffect(()=>{if(!c)return;const _t=Kt=>{Kt.key==="Escape"&&u(!1)};return window.addEventListener("keydown",_t),()=>window.removeEventListener("keydown",_t)},[c]),MR({canUndo:P,canRedo:N,undo:L,redo:B}),bR({playing:p,setPlaying:g,valueDays:h,setValueDays:m,durationMs:_*1e3}),V?I.jsx("div",{className:"h-dvh w-full bg-white",children:I.jsx(ny,{coordinateFrame:T.config.toggles.coordinateFrame??"MSSI",earthTextureMode:T.config.toggles.earthTextureMode??"realistic",viewMode:T.config.toggles.viewMode??"geo",orbits:A.orbits,displayOrbits:T.config.display.orbits,timeDays:h,vectors:T.config.display.vectors,referenceOverlays:T.config.display.referenceOverlays,cameraRequest:b})}):I.jsxs("div",{className:`flex min-h-dvh ${ht} ${q?"":"select-none"}`,children:[I.jsx(TM,{open:U.open,title:U.kind==="orbit"?"Delete orbit?":"Delete view?",body:(()=>{if(U.kind==="orbit"){const Kt=A.orbits.find(X=>X.id===U.id);return Kt?`This will permanently delete “${Kt.name}”.`:""}const _t=A.views.find(Kt=>Kt.id===U.id);return _t?`This will permanently delete “${_t.name}”.`:""})(),confirmLabel:"Delete",cancelLabel:"Cancel",onConfirm:ut,onCancel:mt}),I.jsx(AM,{open:!!y,title:y&&Qu[y]?.title||"Help",body:y?Qu[y]?.body:"",learnMoreLabel:y&&Qu[y]?.learnMoreLabel||"Learn more",onLearnMore:()=>{const _t=y?Qu[y]?.learnMoreUrl:void 0;F();{window.open(`https://colure.space/kelvinzero/${_t&&_t.startsWith("#")?_t:""}`,"_blank","noopener,noreferrer");return}},onClose:F}),c||q?null:I.jsxs(I.Fragment,{children:[n&&a?I.jsx("button",{type:"button","aria-label":"Close menu",className:"fixed inset-0 z-30 bg-black/50 backdrop-blur-[2px]",onClick:()=>o(!1)}):null,I.jsx(yR,{open:a,drawer:n,onClose:()=>o(!1),model:A,setModel:C,timeDays:h,onRequestDeleteOrbit:G,onRequestHelp:Et})]}),I.jsxs("div",{className:`relative flex min-h-dvh flex-1 flex-col ${q?"":"overflow-hidden"}`,children:[r==="visualizer"&&c?I.jsx("div",{className:"pointer-events-auto absolute right-4 top-4 z-40",children:I.jsx("button",{type:"button",className:"pointer-events-auto",onClick:()=>u(!1),"aria-label":"Exit fullscreen",children:I.jsx(Il,{className:"text-white/90 hover:bg-white/10",children:I.jsx(Iv,{})})})}):null,c?null:I.jsxs("header",{className:`z-30 flex items-center justify-between px-4 ${q?"sticky top-0 h-24 bg-white/80 pb-2 text-slate-900 backdrop-blur-md [-webkit-backdrop-filter:blur(12px)] [mask-image:linear-gradient(to_bottom,black_calc(100%-14px),transparent)]":"relative h-20 text-white"}`,children:[I.jsxs("div",{className:"flex items-center gap-2",children:[I.jsx("button",{type:"button",className:"pointer-events-auto",onClick:()=>o(_t=>!_t),children:I.jsx(Il,{className:q?"text-slate-800 hover:bg-black/5":"text-white/90 hover:bg-white/10",children:I.jsx(_M,{})})}),q?null:I.jsxs(I.Fragment,{children:[I.jsx("button",{type:"button",className:"pointer-events-auto disabled:cursor-default",onClick:L,disabled:!P,"aria-label":"Undo",title:"Undo (Ctrl/Cmd+Z)",children:I.jsx(Il,{className:`${q?"text-slate-800 hover:bg-black/5":"text-white/90 hover:bg-white/10"} ${P?"":"opacity-30 hover:bg-transparent"}`,children:I.jsx(vM,{})})}),I.jsx("button",{type:"button",className:"pointer-events-auto disabled:cursor-default",onClick:B,disabled:!N,"aria-label":"Redo",title:"Redo (Ctrl/Cmd+Shift+Z)",children:I.jsx(Il,{className:`${q?"text-slate-800 hover:bg-black/5":"text-white/90 hover:bg-white/10"} ${N?"":"opacity-30 hover:bg-transparent"}`,children:I.jsx(xM,{})})})]})]}),I.jsx("div",{className:"absolute left-1/2 -translate-x-1/2",children:I.jsx("div",{className:"rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white",children:"Kelvin Zero · Orbit Visualizer"})}),I.jsxs("div",{className:"flex items-center gap-2",children:[q?I.jsxs("a",{href:"/Kelvin-Zero-Whitepaper.pdf",target:"_blank",rel:"noopener noreferrer",className:`pointer-events-auto inline-flex h-9 items-center gap-1.5 rounded-full px-3 text-xs font-semibold ring-1 ring-inset ${q?"bg-slate-900/[0.06] text-slate-800 ring-slate-900/10 hover:bg-slate-900/10":"bg-white/10 text-white/90 ring-white/10 hover:bg-white/15"}`,title:"Download the whitepaper as a PDF",children:[I.jsxs("svg",{viewBox:"0 0 24 24",className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[I.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"}),I.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14 3v5h5M9 13h6M9 17h6"})]}),"PDF"]}):null,q?null:I.jsx("button",{type:"button",className:"pointer-events-auto",onClick:Le,"aria-label":"Toggle fullscreen",children:I.jsx(Il,{className:"text-white/90 hover:bg-white/10",children:I.jsx(Iv,{})})})]})]}),r==="visualizer"?I.jsxs("main",{className:`relative z-10 flex flex-1 flex-col ${c?"pb-0":"pb-6"}`,children:[c?null:I.jsx("div",{className:"flex justify-end px-3 pt-2 sm:px-6",children:I.jsxs("div",{className:"flex max-w-full items-start gap-3",children:[I.jsx("div",{className:"flex flex-1 items-start gap-3 overflow-x-auto pb-3 [scrollbar-gutter:stable] [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.25)_transparent] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb:hover]:bg-white/30",children:A.views.map(_t=>{const Kt=_t.id===A.activeViewId,X=_t.savedConfig?!ay(_t.config,_t.savedConfig):!1;return Kt?I.jsxs("span",{className:"inline-flex flex-none items-center gap-2 rounded-full bg-sky-500 px-3 py-1 text-xs font-semibold text-white ring-1 ring-inset ring-white/10",children:[_t.name,!_t.locked||X?I.jsx("button",{type:"button",className:"text-white/70","aria-label":X?`Reset ${_t.name}`:`Delete ${_t.name}`,onClick:()=>{if(X){J(_t.id);return}z(_t.id)},children:"×"}):null]},_t.id):I.jsxs("span",{className:"inline-flex flex-none items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 ring-1 ring-inset ring-white/10",children:[I.jsx("button",{type:"button",className:"hover:text-white",onClick:()=>H(_t.id),"aria-label":`Select ${_t.name}`,children:_t.name}),_t.locked?null:I.jsx("button",{type:"button",className:"text-white/60 hover:text-white/80","aria-label":`Delete ${_t.name}`,onClick:Ce=>{Ce.stopPropagation(),z(_t.id)},children:"×"})]},_t.id)})}),I.jsx("button",{type:"button",className:"inline-flex h-6 w-6 flex-none items-center justify-center self-start rounded-full bg-white/10 text-white ring-1 ring-inset ring-white/10 hover:bg-white/15",onClick:K,"aria-label":"Add view",children:I.jsx(sy,{className:"h-3.5 w-3.5"})})]})}),I.jsx("div",{className:`flex flex-1 flex-col ${c?"px-0 pt-0":"px-6 pt-6"}`,children:I.jsx("div",{className:"flex flex-1 flex-col",children:I.jsx("div",{className:"relative flex flex-1",children:I.jsx("div",{className:`absolute inset-0 flex items-center justify-center bg-white/5 ${c?"":"rounded-2xl ring-1 ring-inset ring-white/10"}`,children:I.jsxs("div",{className:`relative h-full w-full ${c?"":"overflow-hidden rounded-2xl"}`,children:[I.jsxs("div",{className:"pointer-events-none absolute left-3 top-3 z-10 flex max-w-[calc(100%-1.5rem)] flex-col items-start gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/60 sm:left-4 sm:top-4",children:[I.jsxs("div",{className:"flex items-center gap-1.5",children:[I.jsx("span",{className:"rounded-md bg-slate-950/50 px-2 py-1 text-white/85 ring-1 ring-inset ring-white/10",children:Ht?"Sun-centred · ecliptic":T.config.toggles.coordinateFrame??"MSSI"}),I.jsx("span",{className:"rounded-md bg-slate-950/50 px-2 py-1 ring-1 ring-inset ring-white/10",children:{still:"Still Earth",hidden:"Earth hidden"}[T.config.toggles.earthTextureMode??"realistic"]??"Rotating Earth"}),I.jsx("span",{className:"rounded-md bg-slate-950/50 px-2 py-1 tabular-nums ring-1 ring-inset ring-white/10",children:Fv(h)})]}),Ht?I.jsx("span",{className:"rounded-md bg-amber-400/10 px-2 py-1 normal-case tracking-normal text-amber-200/90 ring-1 ring-inset ring-amber-300/20",children:"Orbit shape, orientation and timing are real (e = 0.0167) · Earth ≈1000× enlarged · Sun not to scale"}):null]}),I.jsx(ny,{coordinateFrame:T.config.toggles.coordinateFrame??"MSSI",earthTextureMode:T.config.toggles.earthTextureMode??"realistic",viewMode:T.config.toggles.viewMode??"geo",orbits:A.orbits,displayOrbits:T.config.display.orbits,timeDays:h,vectors:T.config.display.vectors,referenceOverlays:T.config.display.referenceOverlays,cameraRequest:b}),I.jsx("div",{className:`absolute top-4 z-10 flex items-center gap-1 rounded-md bg-slate-950/50 p-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] ring-1 ring-inset ring-white/10 ${c?"right-[4.25rem]":"right-4"}`,role:"group","aria-label":"Camera",children:Object.entries(Ht?iy:vm).map(([_t,Kt])=>I.jsx("button",{type:"button",className:"rounded px-2 py-1 text-white/60 hover:bg-white/10 hover:text-white",onClick:()=>bt(_t),title:`Look from the ${Kt.label.toLowerCase()}`,children:Kt.label},_t))})]})})})})}),I.jsx("div",{className:`mt-auto ${c?"px-6 pb-4 pt-4":"px-6 pb-4 pt-6"}`,children:I.jsxs("div",{className:"flex w-full flex-wrap items-center gap-x-4 gap-y-3 text-white/80",children:[I.jsxs("div",{className:"w-[128px] flex-none leading-tight sm:w-[168px]",children:[I.jsxs("div",{className:"text-[11px] font-semibold tabular-nums text-white/90",children:["Day ",h.toFixed(2)]}),I.jsx("div",{className:"text-[11px] tabular-nums text-white/50",children:Fv(h)})]}),I.jsx("button",{type:"button",className:"inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 ring-1 ring-inset ring-white/10",onClick:()=>{if(!p&&w){m(0),g(!0);return}g(_t=>!_t)},"aria-label":p?"Pause timeline":w?"Restart timeline":"Play timeline",children:p?I.jsx(yM,{}):w?I.jsx(bM,{}):I.jsx(SM,{})}),I.jsx("div",{className:"min-w-[200px] flex-1 basis-full sm:basis-auto",onPointerDown:()=>{p&&g(!1)},children:I.jsx(nR,{valueDays:h,onChangeDays:_t=>{p&&g(!1),m(Dn(cn(_t,0,365.24),2))}})}),I.jsx("div",{className:"hidden flex-none items-center gap-1 rounded-full bg-white/5 p-0.5 ring-1 ring-inset ring-white/10 sm:flex",role:"radiogroup","aria-label":"Playback speed",children:[[15,"24 d/s","Fast: one year in 15 s (Earth spins ~24× per second — rotation strobes)"],[30,"12 d/s","Normal: one year in 30 s"],[120,"3 d/s","Slow: one year in 2 min"],[2191,"1 d / 6 s","Day: one day every 6 s — watch the Earth rotate (a year takes ~36 min)"]].map(([_t,Kt,X])=>I.jsx("button",{type:"button",role:"radio","aria-checked":_===_t,className:`rounded-full px-2.5 py-1 text-[11px] font-semibold tabular-nums ${_===_t?"bg-white/15 text-white":"text-white/55 hover:text-white/85"}`,onClick:()=>v(_t),title:X,children:Kt},_t))})]})})]}):I.jsx("main",{className:"relative z-10 flex flex-1 flex-col",children:I.jsx(Whitepaper,{model:A,onShowInViewer:Qe})})]})]})}gM.createRoot(document.getElementById("root")).render(I.jsx(Zt.StrictMode,{children:I.jsx(RR,{})}));
