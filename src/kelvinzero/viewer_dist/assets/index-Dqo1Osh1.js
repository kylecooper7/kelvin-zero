(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var xd={exports:{}},Al={};var Ev;function sM(){if(Ev)return Al;Ev=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,l,c){var u=null;if(c!==void 0&&(u=""+c),l.key!==void 0&&(u=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:a,key:u,ref:l!==void 0?l:null,props:c}}return Al.Fragment=t,Al.jsx=n,Al.jsxs=n,Al}var Tv;function rM(){return Tv||(Tv=1,xd.exports=sM()),xd.exports}var F=rM(),yd={exports:{}},fe={};var Av;function oM(){if(Av)return fe;Av=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function b(A){return A===null||typeof A!="object"?null:(A=v&&A[v]||A["@@iterator"],typeof A=="function"?A:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,S={};function x(A,V,ft){this.props=A,this.context=V,this.refs=S,this.updater=ft||M}x.prototype.isReactComponent={},x.prototype.setState=function(A,V){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,V,"setState")},x.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function w(){}w.prototype=x.prototype;function U(A,V,ft){this.props=A,this.context=V,this.refs=S,this.updater=ft||M}var C=U.prototype=new w;C.constructor=U,R(C,x.prototype),C.isPureReactComponent=!0;var I=Array.isArray;function B(){}var O={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function N(A,V,ft){var Mt=ft.ref;return{$$typeof:r,type:A,key:V,ref:Mt!==void 0?Mt:null,props:ft}}function ot(A,V){return N(A.type,V,A.props)}function G(A){return typeof A=="object"&&A!==null&&A.$$typeof===r}function Y(A){var V={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(ft){return V[ft]})}var tt=/\/+/g;function $(A,V){return typeof A=="object"&&A!==null&&A.key!=null?Y(""+A.key):V.toString(36)}function Q(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(B,B):(A.status="pending",A.then(function(V){A.status==="pending"&&(A.status="fulfilled",A.value=V)},function(V){A.status==="pending"&&(A.status="rejected",A.reason=V)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function P(A,V,ft,Mt,Ot){var et=typeof A;(et==="undefined"||et==="boolean")&&(A=null);var vt=!1;if(A===null)vt=!0;else switch(et){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(A.$$typeof){case r:case t:vt=!0;break;case g:return vt=A._init,P(vt(A._payload),V,ft,Mt,Ot)}}if(vt)return Ot=Ot(A),vt=Mt===""?"."+$(A,0):Mt,I(Ot)?(ft="",vt!=null&&(ft=vt.replace(tt,"$&/")+"/"),P(Ot,V,ft,"",function(Qt){return Qt})):Ot!=null&&(G(Ot)&&(Ot=ot(Ot,ft+(Ot.key==null||A&&A.key===Ot.key?"":(""+Ot.key).replace(tt,"$&/")+"/")+vt)),V.push(Ot)),1;vt=0;var Et=Mt===""?".":Mt+":";if(I(A))for(var kt=0;kt<A.length;kt++)Mt=A[kt],et=Et+$(Mt,kt),vt+=P(Mt,V,ft,et,Ot);else if(kt=b(A),typeof kt=="function")for(A=kt.call(A),kt=0;!(Mt=A.next()).done;)Mt=Mt.value,et=Et+$(Mt,kt++),vt+=P(Mt,V,ft,et,Ot);else if(et==="object"){if(typeof A.then=="function")return P(Q(A),V,ft,Mt,Ot);throw V=String(A),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return vt}function H(A,V,ft){if(A==null)return A;var Mt=[],Ot=0;return P(A,Mt,"","",function(et){return V.call(ft,et,Ot++)}),Mt}function ct(A){if(A._status===-1){var V=A._result;V=V(),V.then(function(ft){(A._status===0||A._status===-1)&&(A._status=1,A._result=ft)},function(ft){(A._status===0||A._status===-1)&&(A._status=2,A._result=ft)}),A._status===-1&&(A._status=0,A._result=V)}if(A._status===1)return A._result.default;throw A._result}var pt=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},bt={map:H,forEach:function(A,V,ft){H(A,function(){V.apply(this,arguments)},ft)},count:function(A){var V=0;return H(A,function(){V++}),V},toArray:function(A){return H(A,function(V){return V})||[]},only:function(A){if(!G(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return fe.Activity=_,fe.Children=bt,fe.Component=x,fe.Fragment=n,fe.Profiler=l,fe.PureComponent=U,fe.StrictMode=a,fe.Suspense=m,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,fe.__COMPILER_RUNTIME={__proto__:null,c:function(A){return O.H.useMemoCache(A)}},fe.cache=function(A){return function(){return A.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(A,V,ft){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var Mt=R({},A.props),Ot=A.key;if(V!=null)for(et in V.key!==void 0&&(Ot=""+V.key),V)!T.call(V,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&V.ref===void 0||(Mt[et]=V[et]);var et=arguments.length-2;if(et===1)Mt.children=ft;else if(1<et){for(var vt=Array(et),Et=0;Et<et;Et++)vt[Et]=arguments[Et+2];Mt.children=vt}return N(A.type,Ot,Mt)},fe.createContext=function(A){return A={$$typeof:u,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:c,_context:A},A},fe.createElement=function(A,V,ft){var Mt,Ot={},et=null;if(V!=null)for(Mt in V.key!==void 0&&(et=""+V.key),V)T.call(V,Mt)&&Mt!=="key"&&Mt!=="__self"&&Mt!=="__source"&&(Ot[Mt]=V[Mt]);var vt=arguments.length-2;if(vt===1)Ot.children=ft;else if(1<vt){for(var Et=Array(vt),kt=0;kt<vt;kt++)Et[kt]=arguments[kt+2];Ot.children=Et}if(A&&A.defaultProps)for(Mt in vt=A.defaultProps,vt)Ot[Mt]===void 0&&(Ot[Mt]=vt[Mt]);return N(A,et,Ot)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(A){return{$$typeof:d,render:A}},fe.isValidElement=G,fe.lazy=function(A){return{$$typeof:g,_payload:{_status:-1,_result:A},_init:ct}},fe.memo=function(A,V){return{$$typeof:p,type:A,compare:V===void 0?null:V}},fe.startTransition=function(A){var V=O.T,ft={};O.T=ft;try{var Mt=A(),Ot=O.S;Ot!==null&&Ot(ft,Mt),typeof Mt=="object"&&Mt!==null&&typeof Mt.then=="function"&&Mt.then(B,pt)}catch(et){pt(et)}finally{V!==null&&ft.types!==null&&(V.types=ft.types),O.T=V}},fe.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},fe.use=function(A){return O.H.use(A)},fe.useActionState=function(A,V,ft){return O.H.useActionState(A,V,ft)},fe.useCallback=function(A,V){return O.H.useCallback(A,V)},fe.useContext=function(A){return O.H.useContext(A)},fe.useDebugValue=function(){},fe.useDeferredValue=function(A,V){return O.H.useDeferredValue(A,V)},fe.useEffect=function(A,V){return O.H.useEffect(A,V)},fe.useEffectEvent=function(A){return O.H.useEffectEvent(A)},fe.useId=function(){return O.H.useId()},fe.useImperativeHandle=function(A,V,ft){return O.H.useImperativeHandle(A,V,ft)},fe.useInsertionEffect=function(A,V){return O.H.useInsertionEffect(A,V)},fe.useLayoutEffect=function(A,V){return O.H.useLayoutEffect(A,V)},fe.useMemo=function(A,V){return O.H.useMemo(A,V)},fe.useOptimistic=function(A,V){return O.H.useOptimistic(A,V)},fe.useReducer=function(A,V,ft){return O.H.useReducer(A,V,ft)},fe.useRef=function(A){return O.H.useRef(A)},fe.useState=function(A){return O.H.useState(A)},fe.useSyncExternalStore=function(A,V,ft){return O.H.useSyncExternalStore(A,V,ft)},fe.useTransition=function(){return O.H.useTransition()},fe.version="19.2.4",fe}var wv;function mm(){return wv||(wv=1,yd.exports=oM()),yd.exports}var ee=mm(),Sd={exports:{}},wl={},bd={exports:{}},Md={};var Rv;function lM(){return Rv||(Rv=1,(function(r){function t(P,H){var ct=P.length;P.push(H);t:for(;0<ct;){var pt=ct-1>>>1,bt=P[pt];if(0<l(bt,H))P[pt]=H,P[ct]=bt,ct=pt;else break t}}function n(P){return P.length===0?null:P[0]}function a(P){if(P.length===0)return null;var H=P[0],ct=P.pop();if(ct!==H){P[0]=ct;t:for(var pt=0,bt=P.length,A=bt>>>1;pt<A;){var V=2*(pt+1)-1,ft=P[V],Mt=V+1,Ot=P[Mt];if(0>l(ft,ct))Mt<bt&&0>l(Ot,ft)?(P[pt]=Ot,P[Mt]=ct,pt=Mt):(P[pt]=ft,P[V]=ct,pt=V);else if(Mt<bt&&0>l(Ot,ct))P[pt]=Ot,P[Mt]=ct,pt=Mt;else break t}}return H}function l(P,H){var ct=P.sortIndex-H.sortIndex;return ct!==0?ct:P.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();r.unstable_now=function(){return u.now()-d}}var m=[],p=[],g=1,_=null,v=3,b=!1,M=!1,R=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function C(P){for(var H=n(p);H!==null;){if(H.callback===null)a(p);else if(H.startTime<=P)a(p),H.sortIndex=H.expirationTime,t(m,H);else break;H=n(p)}}function I(P){if(R=!1,C(P),!M)if(n(m)!==null)M=!0,B||(B=!0,Y());else{var H=n(p);H!==null&&Q(I,H.startTime-P)}}var B=!1,O=-1,T=5,N=-1;function ot(){return S?!0:!(r.unstable_now()-N<T)}function G(){if(S=!1,B){var P=r.unstable_now();N=P;var H=!0;try{t:{M=!1,R&&(R=!1,w(O),O=-1),b=!0;var ct=v;try{e:{for(C(P),_=n(m);_!==null&&!(_.expirationTime>P&&ot());){var pt=_.callback;if(typeof pt=="function"){_.callback=null,v=_.priorityLevel;var bt=pt(_.expirationTime<=P);if(P=r.unstable_now(),typeof bt=="function"){_.callback=bt,C(P),H=!0;break e}_===n(m)&&a(m),C(P)}else a(m);_=n(m)}if(_!==null)H=!0;else{var A=n(p);A!==null&&Q(I,A.startTime-P),H=!1}}break t}finally{_=null,v=ct,b=!1}H=void 0}}finally{H?Y():B=!1}}}var Y;if(typeof U=="function")Y=function(){U(G)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,$=tt.port2;tt.port1.onmessage=G,Y=function(){$.postMessage(null)}}else Y=function(){x(G,0)};function Q(P,H){O=x(function(){P(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(P){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var ct=v;v=H;try{return P()}finally{v=ct}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(P,H){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var ct=v;v=P;try{return H()}finally{v=ct}},r.unstable_scheduleCallback=function(P,H,ct){var pt=r.unstable_now();switch(typeof ct=="object"&&ct!==null?(ct=ct.delay,ct=typeof ct=="number"&&0<ct?pt+ct:pt):ct=pt,P){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=ct+bt,P={id:g++,callback:H,priorityLevel:P,startTime:ct,expirationTime:bt,sortIndex:-1},ct>pt?(P.sortIndex=ct,t(p,P),n(m)===null&&P===n(p)&&(R?(w(O),O=-1):R=!0,Q(I,ct-pt))):(P.sortIndex=bt,t(m,P),M||b||(M=!0,B||(B=!0,Y()))),P},r.unstable_shouldYield=ot,r.unstable_wrapCallback=function(P){var H=v;return function(){var ct=v;v=H;try{return P.apply(this,arguments)}finally{v=ct}}}})(Md)),Md}var Cv;function cM(){return Cv||(Cv=1,bd.exports=lM()),bd.exports}var Ed={exports:{}},jn={};var Dv;function uM(){if(Dv)return jn;Dv=1;var r=mm();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,jn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},jn.flushSync=function(m){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,m)return m()}finally{u.T=p,a.p=g,a.d.f()}},jn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},jn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},jn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:b}):g==="script"&&a.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},jn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},jn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);a.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},jn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},jn.requestFormReset=function(m){a.d.r(m)},jn.unstable_batchedUpdates=function(m,p){return m(p)},jn.useFormState=function(m,p,g){return u.H.useFormState(m,p,g)},jn.useFormStatus=function(){return u.H.useHostTransitionStatus()},jn.version="19.2.4",jn}var Lv;function fM(){if(Lv)return Ed.exports;Lv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ed.exports=uM(),Ed.exports}var Uv;function hM(){if(Uv)return wl;Uv=1;var r=cM(),t=mm(),n=fM();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function d(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(a(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,o=i;;){var f=s.return;if(f===null)break;var h=f.alternate;if(h===null){if(o=f.return,o!==null){s=o;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===s)return m(f),e;if(h===o)return m(f),i;h=h.sibling}throw Error(a(188))}if(s.return!==o.return)s=f,o=h;else{for(var y=!1,D=f.child;D;){if(D===s){y=!0,s=f,o=h;break}if(D===o){y=!0,o=f,s=h;break}D=D.sibling}if(!y){for(D=h.child;D;){if(D===s){y=!0,s=h,o=f;break}if(D===o){y=!0,o=h,s=f;break}D=D.sibling}if(!y)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),U=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),ot=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var tt=Symbol.for("react.client.reference");function $(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case x:return"Profiler";case S:return"StrictMode";case I:return"Suspense";case B:return"SuspenseList";case N:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case U:return e.displayName||"Context";case w:return(e._context.displayName||"Context")+".Consumer";case C:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return i=e.displayName||null,i!==null?i:$(e.type)||"Memo";case T:i=e._payload,e=e._init;try{return $(e(i))}catch{}}return null}var Q=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ct={pending:!1,data:null,method:null,action:null},pt=[],bt=-1;function A(e){return{current:e}}function V(e){0>bt||(e.current=pt[bt],pt[bt]=null,bt--)}function ft(e,i){bt++,pt[bt]=e.current,e.current=i}var Mt=A(null),Ot=A(null),et=A(null),vt=A(null);function Et(e,i){switch(ft(et,i),ft(Ot,e),ft(Mt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?q_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=q_(i),e=Y_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}V(Mt),ft(Mt,e)}function kt(){V(Mt),V(Ot),V(et)}function Qt(e){e.memoizedState!==null&&ft(vt,e);var i=Mt.current,s=Y_(i,e.type);i!==s&&(ft(Ot,e),ft(Mt,s))}function te(e){Ot.current===e&&(V(Mt),V(Ot)),vt.current===e&&(V(vt),bl._currentValue=ct)}var Qe,Se;function ye(e){if(Qe===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Qe=i&&i[1]||"",Se=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qe+e+Se}var yt=!1;function Ut(e,i){if(!e||yt)return"";yt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ut){var rt=ut}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(ut){rt=ut}e.call(xt.prototype)}}else{try{throw Error()}catch(ut){rt=ut}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ut){if(ut&&rt&&typeof ut.stack=="string")return[ut.stack,rt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),y=h[0],D=h[1];if(y&&D){var k=y.split(`
`),at=D.split(`
`);for(f=o=0;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;for(;f<at.length&&!at[f].includes("DetermineComponentFrameRoot");)f++;if(o===k.length||f===at.length)for(o=k.length-1,f=at.length-1;1<=o&&0<=f&&k[o]!==at[f];)f--;for(;1<=o&&0<=f;o--,f--)if(k[o]!==at[f]){if(o!==1||f!==1)do if(o--,f--,0>f||k[o]!==at[f]){var mt=`
`+k[o].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=o&&0<=f);break}}}finally{yt=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?ye(s):""}function Me(e,i){switch(e.tag){case 26:case 27:case 5:return ye(e.type);case 16:return ye("Lazy");case 13:return e.child!==i&&i!==null?ye("Suspense Fallback"):ye("Suspense");case 19:return ye("SuspenseList");case 0:case 15:return Ut(e.type,!1);case 11:return Ut(e.type.render,!1);case 1:return Ut(e.type,!0);case 31:return ye("Activity");default:return""}}function j(e){try{var i="",s=null;do i+=Me(e,s),s=e,e=e.return;while(e);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Oe=Object.prototype.hasOwnProperty,re=r.unstable_scheduleCallback,De=r.unstable_cancelCallback,It=r.unstable_shouldYield,z=r.unstable_requestPaint,E=r.unstable_now,K=r.unstable_getCurrentPriorityLevel,gt=r.unstable_ImmediatePriority,St=r.unstable_UserBlockingPriority,dt=r.unstable_NormalPriority,qt=r.unstable_LowPriority,Dt=r.unstable_IdlePriority,Jt=r.log,ae=r.unstable_setDisableYieldValue,wt=null,Tt=null;function Ft(e){if(typeof Jt=="function"&&ae(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(wt,e)}catch{}}var zt=Math.clz32?Math.clz32:Z,Bt=Math.log,pe=Math.LN2;function Z(e){return e>>>=0,e===0?32:31-(Bt(e)/pe|0)|0}var Ct=256,Rt=262144,Ht=4194304;function At(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ht(e,i,s){var o=e.pendingLanes;if(o===0)return 0;var f=0,h=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var D=o&134217727;return D!==0?(o=D&~h,o!==0?f=At(o):(y&=D,y!==0?f=At(y):s||(s=D&~e,s!==0&&(f=At(s))))):(D=o&~h,D!==0?f=At(D):y!==0?f=At(y):s||(s=o&~e,s!==0&&(f=At(s)))),f===0?0:i!==0&&i!==f&&(i&h)===0&&(h=f&-f,s=i&-i,h>=s||h===32&&(s&4194048)!==0)?i:f}function Vt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function oe(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function He(){var e=Ht;return Ht<<=1,(Ht&62914560)===0&&(Ht=4194304),e}function Le(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Zn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Gi(e,i,s,o,f,h){var y=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var D=e.entanglements,k=e.expirationTimes,at=e.hiddenUpdates;for(s=y&~s;0<s;){var mt=31-zt(s),xt=1<<mt;D[mt]=0,k[mt]=-1;var rt=at[mt];if(rt!==null)for(at[mt]=null,mt=0;mt<rt.length;mt++){var ut=rt[mt];ut!==null&&(ut.lane&=-536870913)}s&=~xt}o!==0&&Io(e,o,0),h!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=h&~(y&~i))}function Io(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-zt(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|s&261930}function xr(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var o=31-zt(s),f=1<<o;f&i|e[o]&i&&(e[o]|=i),s&=~f}}function tc(e,i){var s=i&-i;return s=(s&42)!==0?1:yr(s),(s&(e.suspendedLanes|i))!==0?0:s}function yr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Sr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ea(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:_v(e.type))}function br(e,i){var s=H.p;try{return H.p=e,i()}finally{H.p=s}}var Vi=Math.random().toString(36).slice(2),dn="__reactFiber$"+Vi,Sn="__reactProps$"+Vi,ya="__reactContainer$"+Vi,Qa="__reactEvents$"+Vi,ec="__reactListeners$"+Vi,nc="__reactHandles$"+Vi,ic="__reactResources$"+Vi,zs="__reactMarker$"+Vi;function Fo(e){delete e[dn],delete e[Sn],delete e[Qa],delete e[ec],delete e[nc]}function Ja(e){var i=e[dn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[ya]||s[dn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=ev(e);e!==null;){if(s=e[dn])return s;e=ev(e)}return i}e=s,s=e.parentNode}return null}function $a(e){if(e=e[dn]||e[ya]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function Is(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function L(e){var i=e[ic];return i||(i=e[ic]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function q(e){e[zs]=!0}var lt=new Set,st={};function nt(e,i){Lt(e,i),Lt(e+"Capture",i)}function Lt(e,i){for(st[e]=i,e=0;e<i.length;e++)lt.add(i[e])}var Gt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Pt={},Yt={};function Kt(e){return Oe.call(Yt,e)?!0:Oe.call(Pt,e)?!1:Gt.test(e)?Yt[e]=!0:(Pt[e]=!0,!1)}function se(e,i,s){if(Kt(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function ue(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Xt(e,i,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+o)}}function me(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nn(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function an(e,i,s){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,h=o.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(y){s=""+y,h.call(this,y)}}),Object.defineProperty(e,i,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Pe(e){if(!e._valueTracker){var i=nn(e)?"checked":"value";e._valueTracker=an(e,i,""+e[i])}}function bn(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),o="";return e&&(o=nn(e)?e.checked?"true":"false":e.value),e=o,e!==s?(i.setValue(e),!0):!1}function Wt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Kn=/[\n"\\]/g;function ce(e){return e.replace(Kn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Qn(e,i,s,o,f,h,y,D){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),i!=null?y==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+me(i)):e.value!==""+me(i)&&(e.value=""+me(i)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),i!=null?ki(e,y,me(i)):s!=null?ki(e,y,me(s)):o!=null&&e.removeAttribute("value"),f==null&&h!=null&&(e.defaultChecked=!!h),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?e.name=""+me(D):e.removeAttribute("name")}function hi(e,i,s,o,f,h,y,D){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),i!=null||s!=null){if(!(h!=="submit"&&h!=="reset"||i!=null)){Pe(e);return}s=s!=null?""+me(s):"",i=i!=null?""+me(i):s,D||i===e.value||(e.value=i),e.defaultValue=i}o=o??f,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=D?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Pe(e)}function ki(e,i,s){i==="number"&&Wt(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function di(e,i,s,o){if(e=e.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<e.length;s++)f=i.hasOwnProperty("$"+e[s].value),e[s].selected!==f&&(e[s].selected=f),f&&o&&(e[s].defaultSelected=!0)}else{for(s=""+me(s),i=null,f=0;f<e.length;f++){if(e[f].value===s){e[f].selected=!0,o&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function Be(e,i,s){if(i!=null&&(i=""+me(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+me(s):""}function pn(e,i,s,o){if(i==null){if(o!=null){if(s!=null)throw Error(a(92));if(Q(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),i=s}s=me(i),e.defaultValue=s,o=e.textContent,o===s&&o!==""&&o!==null&&(e.value=o),Pe(e)}function Jn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var mn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xi(e,i,s){var o=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,s):typeof s!="number"||s===0||mn.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function Sa(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var f in i)o=i[f],i.hasOwnProperty(f)&&s[f]!==o&&Xi(e,f,o)}else for(var h in i)i.hasOwnProperty(h)&&Xi(e,h,i[h])}function Mr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),nS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ac(e){return nS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ba(){}var gf=null;function _f(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Er=null,Tr=null;function Wm(e){var i=$a(e);if(i&&(e=i.stateNode)){var s=e[Sn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Qn(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+ce(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var o=s[i];if(o!==e&&o.form===e.form){var f=o[Sn]||null;if(!f)throw Error(a(90));Qn(o,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)o=s[i],o.form===e.form&&bn(o)}break t;case"textarea":Be(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&di(e,!!s.multiple,i,!1)}}}var vf=!1;function qm(e,i,s){if(vf)return e(i,s);vf=!0;try{var o=e(i);return o}finally{if(vf=!1,(Er!==null||Tr!==null)&&(jc(),Er&&(i=Er,e=Tr,Tr=Er=null,Wm(i),e)))for(i=0;i<e.length;i++)Wm(e[i])}}function Bo(e,i){var s=e.stateNode;if(s===null)return null;var o=s[Sn]||null;if(o===null)return null;s=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xf=!1;if(Ma)try{var Ho={};Object.defineProperty(Ho,"passive",{get:function(){xf=!0}}),window.addEventListener("test",Ho,Ho),window.removeEventListener("test",Ho,Ho)}catch{xf=!1}var ts=null,yf=null,sc=null;function Ym(){if(sc)return sc;var e,i=yf,s=i.length,o,f="value"in ts?ts.value:ts.textContent,h=f.length;for(e=0;e<s&&i[e]===f[e];e++);var y=s-e;for(o=1;o<=y&&i[s-o]===f[h-o];o++);return sc=f.slice(e,1<o?1-o:void 0)}function rc(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function oc(){return!0}function Zm(){return!1}function ii(e){function i(s,o,f,h,y){this._reactName=s,this._targetInst=f,this.type=o,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var D in e)e.hasOwnProperty(D)&&(s=e[D],this[D]=s?s(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?oc:Zm,this.isPropagationStopped=Zm,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=oc)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=oc)},persist:function(){},isPersistent:oc}),i}var Fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lc=ii(Fs),Go=_({},Fs,{view:0,detail:0}),iS=ii(Go),Sf,bf,Vo,cc=_({},Go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ef,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vo&&(Vo&&e.type==="mousemove"?(Sf=e.screenX-Vo.screenX,bf=e.screenY-Vo.screenY):bf=Sf=0,Vo=e),Sf)},movementY:function(e){return"movementY"in e?e.movementY:bf}}),Km=ii(cc),aS=_({},cc,{dataTransfer:0}),sS=ii(aS),rS=_({},Go,{relatedTarget:0}),Mf=ii(rS),oS=_({},Fs,{animationName:0,elapsedTime:0,pseudoElement:0}),lS=ii(oS),cS=_({},Fs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uS=ii(cS),fS=_({},Fs,{data:0}),Qm=ii(fS),hS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mS(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=pS[e])?!!i[e]:!1}function Ef(){return mS}var gS=_({},Go,{key:function(e){if(e.key){var i=hS[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=rc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ef,charCode:function(e){return e.type==="keypress"?rc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_S=ii(gS),vS=_({},cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jm=ii(vS),xS=_({},Go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ef}),yS=ii(xS),SS=_({},Fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),bS=ii(SS),MS=_({},cc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ES=ii(MS),TS=_({},Fs,{newState:0,oldState:0}),AS=ii(TS),wS=[9,13,27,32],Tf=Ma&&"CompositionEvent"in window,ko=null;Ma&&"documentMode"in document&&(ko=document.documentMode);var RS=Ma&&"TextEvent"in window&&!ko,$m=Ma&&(!Tf||ko&&8<ko&&11>=ko),tg=" ",eg=!1;function ng(e,i){switch(e){case"keyup":return wS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ig(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ar=!1;function CS(e,i){switch(e){case"compositionend":return ig(i);case"keypress":return i.which!==32?null:(eg=!0,tg);case"textInput":return e=i.data,e===tg&&eg?null:e;default:return null}}function DS(e,i){if(Ar)return e==="compositionend"||!Tf&&ng(e,i)?(e=Ym(),sc=yf=ts=null,Ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return $m&&i.locale!=="ko"?null:i.data;default:return null}}var LS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ag(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!LS[e.type]:i==="textarea"}function sg(e,i,s,o){Er?Tr?Tr.push(o):Tr=[o]:Er=o,i=Jc(i,"onChange"),0<i.length&&(s=new lc("onChange","change",null,s,o),e.push({event:s,listeners:i}))}var Xo=null,jo=null;function US(e){G_(e,0)}function uc(e){var i=Is(e);if(bn(i))return e}function rg(e,i){if(e==="change")return i}var og=!1;if(Ma){var Af;if(Ma){var wf="oninput"in document;if(!wf){var lg=document.createElement("div");lg.setAttribute("oninput","return;"),wf=typeof lg.oninput=="function"}Af=wf}else Af=!1;og=Af&&(!document.documentMode||9<document.documentMode)}function cg(){Xo&&(Xo.detachEvent("onpropertychange",ug),jo=Xo=null)}function ug(e){if(e.propertyName==="value"&&uc(jo)){var i=[];sg(i,jo,e,_f(e)),qm(US,i)}}function NS(e,i,s){e==="focusin"?(cg(),Xo=i,jo=s,Xo.attachEvent("onpropertychange",ug)):e==="focusout"&&cg()}function OS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return uc(jo)}function PS(e,i){if(e==="click")return uc(i)}function zS(e,i){if(e==="input"||e==="change")return uc(i)}function IS(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var pi=typeof Object.is=="function"?Object.is:IS;function Wo(e,i){if(pi(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),o=Object.keys(i);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var f=s[o];if(!Oe.call(i,f)||!pi(e[f],i[f]))return!1}return!0}function fg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hg(e,i){var s=fg(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=i&&o>=i)return{node:s,offset:i-e};e=o}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=fg(s)}}function dg(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?dg(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function pg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Wt(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=Wt(e.document)}return i}function Rf(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var FS=Ma&&"documentMode"in document&&11>=document.documentMode,wr=null,Cf=null,qo=null,Df=!1;function mg(e,i,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Df||wr==null||wr!==Wt(o)||(o=wr,"selectionStart"in o&&Rf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),qo&&Wo(qo,o)||(qo=o,o=Jc(Cf,"onSelect"),0<o.length&&(i=new lc("onSelect","select",null,i,s),e.push({event:i,listeners:o}),i.target=wr)))}function Bs(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var Rr={animationend:Bs("Animation","AnimationEnd"),animationiteration:Bs("Animation","AnimationIteration"),animationstart:Bs("Animation","AnimationStart"),transitionrun:Bs("Transition","TransitionRun"),transitionstart:Bs("Transition","TransitionStart"),transitioncancel:Bs("Transition","TransitionCancel"),transitionend:Bs("Transition","TransitionEnd")},Lf={},gg={};Ma&&(gg=document.createElement("div").style,"AnimationEvent"in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),"TransitionEvent"in window||delete Rr.transitionend.transition);function Hs(e){if(Lf[e])return Lf[e];if(!Rr[e])return e;var i=Rr[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in gg)return Lf[e]=i[s];return e}var _g=Hs("animationend"),vg=Hs("animationiteration"),xg=Hs("animationstart"),BS=Hs("transitionrun"),HS=Hs("transitionstart"),GS=Hs("transitioncancel"),yg=Hs("transitionend"),Sg=new Map,Uf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uf.push("scrollEnd");function ji(e,i){Sg.set(e,i),nt(i,[e])}var fc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ai=[],Cr=0,Nf=0;function hc(){for(var e=Cr,i=Nf=Cr=0;i<e;){var s=Ai[i];Ai[i++]=null;var o=Ai[i];Ai[i++]=null;var f=Ai[i];Ai[i++]=null;var h=Ai[i];if(Ai[i++]=null,o!==null&&f!==null){var y=o.pending;y===null?f.next=f:(f.next=y.next,y.next=f),o.pending=f}h!==0&&bg(s,f,h)}}function dc(e,i,s,o){Ai[Cr++]=e,Ai[Cr++]=i,Ai[Cr++]=s,Ai[Cr++]=o,Nf|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Of(e,i,s,o){return dc(e,i,s,o),pc(e)}function Gs(e,i){return dc(e,null,null,i),pc(e)}function bg(e,i,s){e.lanes|=s;var o=e.alternate;o!==null&&(o.lanes|=s);for(var f=!1,h=e.return;h!==null;)h.childLanes|=s,o=h.alternate,o!==null&&(o.childLanes|=s),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(f=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,f&&i!==null&&(f=31-zt(s),e=h.hiddenUpdates,o=e[f],o===null?e[f]=[i]:o.push(i),i.lane=s|536870912),h):null}function pc(e){if(50<ml)throw ml=0,kh=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Dr={};function VS(e,i,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(e,i,s,o){return new VS(e,i,s,o)}function Pf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ea(e,i){var s=e.alternate;return s===null?(s=mi(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Mg(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function mc(e,i,s,o,f,h){var y=0;if(o=e,typeof e=="function")Pf(e)&&(y=1);else if(typeof e=="string")y=qb(e,s,Mt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case N:return e=mi(31,s,i,f),e.elementType=N,e.lanes=h,e;case R:return Vs(s.children,f,h,i);case S:y=8,f|=24;break;case x:return e=mi(12,s,i,f|2),e.elementType=x,e.lanes=h,e;case I:return e=mi(13,s,i,f),e.elementType=I,e.lanes=h,e;case B:return e=mi(19,s,i,f),e.elementType=B,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:y=10;break t;case w:y=9;break t;case C:y=11;break t;case O:y=14;break t;case T:y=16,o=null;break t}y=29,s=Error(a(130,e===null?"null":typeof e,"")),o=null}return i=mi(y,s,i,f),i.elementType=e,i.type=o,i.lanes=h,i}function Vs(e,i,s,o){return e=mi(7,e,o,i),e.lanes=s,e}function zf(e,i,s){return e=mi(6,e,null,i),e.lanes=s,e}function Eg(e){var i=mi(18,null,null,0);return i.stateNode=e,i}function If(e,i,s){return i=mi(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Tg=new WeakMap;function wi(e,i){if(typeof e=="object"&&e!==null){var s=Tg.get(e);return s!==void 0?s:(i={value:e,source:i,stack:j(i)},Tg.set(e,i),i)}return{value:e,source:i,stack:j(i)}}var Lr=[],Ur=0,gc=null,Yo=0,Ri=[],Ci=0,es=null,na=1,ia="";function Ta(e,i){Lr[Ur++]=Yo,Lr[Ur++]=gc,gc=e,Yo=i}function Ag(e,i,s){Ri[Ci++]=na,Ri[Ci++]=ia,Ri[Ci++]=es,es=e;var o=na;e=ia;var f=32-zt(o)-1;o&=~(1<<f),s+=1;var h=32-zt(i)+f;if(30<h){var y=f-f%5;h=(o&(1<<y)-1).toString(32),o>>=y,f-=y,na=1<<32-zt(i)+f|s<<f|o,ia=h+e}else na=1<<h|s<<f|o,ia=e}function Ff(e){e.return!==null&&(Ta(e,1),Ag(e,1,0))}function Bf(e){for(;e===gc;)gc=Lr[--Ur],Lr[Ur]=null,Yo=Lr[--Ur],Lr[Ur]=null;for(;e===es;)es=Ri[--Ci],Ri[Ci]=null,ia=Ri[--Ci],Ri[Ci]=null,na=Ri[--Ci],Ri[Ci]=null}function wg(e,i){Ri[Ci++]=na,Ri[Ci++]=ia,Ri[Ci++]=es,na=i.id,ia=i.overflow,es=e}var Nn=null,Je=null,Ce=!1,ns=null,Di=!1,Hf=Error(a(519));function is(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zo(wi(i,e)),Hf}function Rg(e){var i=e.stateNode,s=e.type,o=e.memoizedProps;switch(i[dn]=e,i[Sn]=o,s){case"dialog":Te("cancel",i),Te("close",i);break;case"iframe":case"object":case"embed":Te("load",i);break;case"video":case"audio":for(s=0;s<_l.length;s++)Te(_l[s],i);break;case"source":Te("error",i);break;case"img":case"image":case"link":Te("error",i),Te("load",i);break;case"details":Te("toggle",i);break;case"input":Te("invalid",i),hi(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Te("invalid",i);break;case"textarea":Te("invalid",i),pn(i,o.value,o.defaultValue,o.children)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||o.suppressHydrationWarning===!0||j_(i.textContent,s)?(o.popover!=null&&(Te("beforetoggle",i),Te("toggle",i)),o.onScroll!=null&&Te("scroll",i),o.onScrollEnd!=null&&Te("scrollend",i),o.onClick!=null&&(i.onclick=ba),i=!0):i=!1,i||is(e,!0)}function Cg(e){for(Nn=e.return;Nn;)switch(Nn.tag){case 5:case 31:case 13:Di=!1;return;case 27:case 3:Di=!0;return;default:Nn=Nn.return}}function Nr(e){if(e!==Nn)return!1;if(!Ce)return Cg(e),Ce=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||ad(e.type,e.memoizedProps)),s=!s),s&&Je&&is(e),Cg(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Je=tv(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Je=tv(e)}else i===27?(i=Je,_s(e.type)?(e=cd,cd=null,Je=e):Je=i):Je=Nn?Ui(e.stateNode.nextSibling):null;return!0}function ks(){Je=Nn=null,Ce=!1}function Gf(){var e=ns;return e!==null&&(oi===null?oi=e:oi.push.apply(oi,e),ns=null),e}function Zo(e){ns===null?ns=[e]:ns.push(e)}var Vf=A(null),Xs=null,Aa=null;function as(e,i,s){ft(Vf,i._currentValue),i._currentValue=s}function wa(e){e._currentValue=Vf.current,V(Vf)}function kf(e,i,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===s)break;e=e.return}}function Xf(e,i,s,o){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var h=f.dependencies;if(h!==null){var y=f.child;h=h.firstContext;t:for(;h!==null;){var D=h;h=f;for(var k=0;k<i.length;k++)if(D.context===i[k]){h.lanes|=s,D=h.alternate,D!==null&&(D.lanes|=s),kf(h.return,s,e),o||(y=null);break t}h=D.next}}else if(f.tag===18){if(y=f.return,y===null)throw Error(a(341));y.lanes|=s,h=y.alternate,h!==null&&(h.lanes|=s),kf(y,s,e),y=null}else y=f.child;if(y!==null)y.return=f;else for(y=f;y!==null;){if(y===e){y=null;break}if(f=y.sibling,f!==null){f.return=y.return,y=f;break}y=y.return}f=y}}function Or(e,i,s,o){e=null;for(var f=i,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var y=f.alternate;if(y===null)throw Error(a(387));if(y=y.memoizedProps,y!==null){var D=f.type;pi(f.pendingProps.value,y.value)||(e!==null?e.push(D):e=[D])}}else if(f===vt.current){if(y=f.alternate,y===null)throw Error(a(387));y.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(bl):e=[bl])}f=f.return}e!==null&&Xf(i,e,s,o),i.flags|=262144}function _c(e){for(e=e.firstContext;e!==null;){if(!pi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function js(e){Xs=e,Aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function On(e){return Dg(Xs,e)}function vc(e,i){return Xs===null&&js(e),Dg(e,i)}function Dg(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Aa===null){if(e===null)throw Error(a(308));Aa=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Aa=Aa.next=i;return s}var kS=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},XS=r.unstable_scheduleCallback,jS=r.unstable_NormalPriority,gn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jf(){return{controller:new kS,data:new Map,refCount:0}}function Ko(e){e.refCount--,e.refCount===0&&XS(jS,function(){e.controller.abort()})}var Qo=null,Wf=0,Pr=0,zr=null;function WS(e,i){if(Qo===null){var s=Qo=[];Wf=0,Pr=Zh(),zr={status:"pending",value:void 0,then:function(o){s.push(o)}}}return Wf++,i.then(Lg,Lg),i}function Lg(){if(--Wf===0&&Qo!==null){zr!==null&&(zr.status="fulfilled");var e=Qo;Qo=null,Pr=0,zr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function qS(e,i){var s=[],o={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(o.status="rejected",o.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),o}var Ug=P.S;P.S=function(e,i){m_=E(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&WS(e,i),Ug!==null&&Ug(e,i)};var Ws=A(null);function qf(){var e=Ws.current;return e!==null?e:Ze.pooledCache}function xc(e,i){i===null?ft(Ws,Ws.current):ft(Ws,i.pool)}function Ng(){var e=qf();return e===null?null:{parent:gn._currentValue,pool:e}}var Ir=Error(a(460)),Yf=Error(a(474)),yc=Error(a(542)),Sc={then:function(){}};function Og(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Pg(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(ba,ba),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Ig(e),e;default:if(typeof i.status=="string")i.then(ba,ba);else{if(e=Ze,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=o}},function(o){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Ig(e),e}throw Ys=i,Ir}}function qs(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Ys=s,Ir):s}}var Ys=null;function zg(){if(Ys===null)throw Error(a(459));var e=Ys;return Ys=null,e}function Ig(e){if(e===Ir||e===yc)throw Error(a(483))}var Fr=null,Jo=0;function bc(e){var i=Jo;return Jo+=1,Fr===null&&(Fr=[]),Pg(Fr,e,i)}function $o(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Mc(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Fg(e){function i(J,W){if(e){var it=J.deletions;it===null?(J.deletions=[W],J.flags|=16):it.push(W)}}function s(J,W){if(!e)return null;for(;W!==null;)i(J,W),W=W.sibling;return null}function o(J){for(var W=new Map;J!==null;)J.key!==null?W.set(J.key,J):W.set(J.index,J),J=J.sibling;return W}function f(J,W){return J=Ea(J,W),J.index=0,J.sibling=null,J}function h(J,W,it){return J.index=it,e?(it=J.alternate,it!==null?(it=it.index,it<W?(J.flags|=67108866,W):it):(J.flags|=67108866,W)):(J.flags|=1048576,W)}function y(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function D(J,W,it,_t){return W===null||W.tag!==6?(W=zf(it,J.mode,_t),W.return=J,W):(W=f(W,it),W.return=J,W)}function k(J,W,it,_t){var $t=it.type;return $t===R?mt(J,W,it.props.children,_t,it.key):W!==null&&(W.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===T&&qs($t)===W.type)?(W=f(W,it.props),$o(W,it),W.return=J,W):(W=mc(it.type,it.key,it.props,null,J.mode,_t),$o(W,it),W.return=J,W)}function at(J,W,it,_t){return W===null||W.tag!==4||W.stateNode.containerInfo!==it.containerInfo||W.stateNode.implementation!==it.implementation?(W=If(it,J.mode,_t),W.return=J,W):(W=f(W,it.children||[]),W.return=J,W)}function mt(J,W,it,_t,$t){return W===null||W.tag!==7?(W=Vs(it,J.mode,_t,$t),W.return=J,W):(W=f(W,it),W.return=J,W)}function xt(J,W,it){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=zf(""+W,J.mode,it),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case b:return it=mc(W.type,W.key,W.props,null,J.mode,it),$o(it,W),it.return=J,it;case M:return W=If(W,J.mode,it),W.return=J,W;case T:return W=qs(W),xt(J,W,it)}if(Q(W)||Y(W))return W=Vs(W,J.mode,it,null),W.return=J,W;if(typeof W.then=="function")return xt(J,bc(W),it);if(W.$$typeof===U)return xt(J,vc(J,W),it);Mc(J,W)}return null}function rt(J,W,it,_t){var $t=W!==null?W.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return $t!==null?null:D(J,W,""+it,_t);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case b:return it.key===$t?k(J,W,it,_t):null;case M:return it.key===$t?at(J,W,it,_t):null;case T:return it=qs(it),rt(J,W,it,_t)}if(Q(it)||Y(it))return $t!==null?null:mt(J,W,it,_t,null);if(typeof it.then=="function")return rt(J,W,bc(it),_t);if(it.$$typeof===U)return rt(J,W,vc(J,it),_t);Mc(J,it)}return null}function ut(J,W,it,_t,$t){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return J=J.get(it)||null,D(W,J,""+_t,$t);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case b:return J=J.get(_t.key===null?it:_t.key)||null,k(W,J,_t,$t);case M:return J=J.get(_t.key===null?it:_t.key)||null,at(W,J,_t,$t);case T:return _t=qs(_t),ut(J,W,it,_t,$t)}if(Q(_t)||Y(_t))return J=J.get(it)||null,mt(W,J,_t,$t,null);if(typeof _t.then=="function")return ut(J,W,it,bc(_t),$t);if(_t.$$typeof===U)return ut(J,W,it,vc(W,_t),$t);Mc(W,_t)}return null}function jt(J,W,it,_t){for(var $t=null,ze=null,Zt=W,ge=W=0,Re=null;Zt!==null&&ge<it.length;ge++){Zt.index>ge?(Re=Zt,Zt=null):Re=Zt.sibling;var Ie=rt(J,Zt,it[ge],_t);if(Ie===null){Zt===null&&(Zt=Re);break}e&&Zt&&Ie.alternate===null&&i(J,Zt),W=h(Ie,W,ge),ze===null?$t=Ie:ze.sibling=Ie,ze=Ie,Zt=Re}if(ge===it.length)return s(J,Zt),Ce&&Ta(J,ge),$t;if(Zt===null){for(;ge<it.length;ge++)Zt=xt(J,it[ge],_t),Zt!==null&&(W=h(Zt,W,ge),ze===null?$t=Zt:ze.sibling=Zt,ze=Zt);return Ce&&Ta(J,ge),$t}for(Zt=o(Zt);ge<it.length;ge++)Re=ut(Zt,J,ge,it[ge],_t),Re!==null&&(e&&Re.alternate!==null&&Zt.delete(Re.key===null?ge:Re.key),W=h(Re,W,ge),ze===null?$t=Re:ze.sibling=Re,ze=Re);return e&&Zt.forEach(function(bs){return i(J,bs)}),Ce&&Ta(J,ge),$t}function ie(J,W,it,_t){if(it==null)throw Error(a(151));for(var $t=null,ze=null,Zt=W,ge=W=0,Re=null,Ie=it.next();Zt!==null&&!Ie.done;ge++,Ie=it.next()){Zt.index>ge?(Re=Zt,Zt=null):Re=Zt.sibling;var bs=rt(J,Zt,Ie.value,_t);if(bs===null){Zt===null&&(Zt=Re);break}e&&Zt&&bs.alternate===null&&i(J,Zt),W=h(bs,W,ge),ze===null?$t=bs:ze.sibling=bs,ze=bs,Zt=Re}if(Ie.done)return s(J,Zt),Ce&&Ta(J,ge),$t;if(Zt===null){for(;!Ie.done;ge++,Ie=it.next())Ie=xt(J,Ie.value,_t),Ie!==null&&(W=h(Ie,W,ge),ze===null?$t=Ie:ze.sibling=Ie,ze=Ie);return Ce&&Ta(J,ge),$t}for(Zt=o(Zt);!Ie.done;ge++,Ie=it.next())Ie=ut(Zt,J,ge,Ie.value,_t),Ie!==null&&(e&&Ie.alternate!==null&&Zt.delete(Ie.key===null?ge:Ie.key),W=h(Ie,W,ge),ze===null?$t=Ie:ze.sibling=Ie,ze=Ie);return e&&Zt.forEach(function(aM){return i(J,aM)}),Ce&&Ta(J,ge),$t}function qe(J,W,it,_t){if(typeof it=="object"&&it!==null&&it.type===R&&it.key===null&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case b:t:{for(var $t=it.key;W!==null;){if(W.key===$t){if($t=it.type,$t===R){if(W.tag===7){s(J,W.sibling),_t=f(W,it.props.children),_t.return=J,J=_t;break t}}else if(W.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===T&&qs($t)===W.type){s(J,W.sibling),_t=f(W,it.props),$o(_t,it),_t.return=J,J=_t;break t}s(J,W);break}else i(J,W);W=W.sibling}it.type===R?(_t=Vs(it.props.children,J.mode,_t,it.key),_t.return=J,J=_t):(_t=mc(it.type,it.key,it.props,null,J.mode,_t),$o(_t,it),_t.return=J,J=_t)}return y(J);case M:t:{for($t=it.key;W!==null;){if(W.key===$t)if(W.tag===4&&W.stateNode.containerInfo===it.containerInfo&&W.stateNode.implementation===it.implementation){s(J,W.sibling),_t=f(W,it.children||[]),_t.return=J,J=_t;break t}else{s(J,W);break}else i(J,W);W=W.sibling}_t=If(it,J.mode,_t),_t.return=J,J=_t}return y(J);case T:return it=qs(it),qe(J,W,it,_t)}if(Q(it))return jt(J,W,it,_t);if(Y(it)){if($t=Y(it),typeof $t!="function")throw Error(a(150));return it=$t.call(it),ie(J,W,it,_t)}if(typeof it.then=="function")return qe(J,W,bc(it),_t);if(it.$$typeof===U)return qe(J,W,vc(J,it),_t);Mc(J,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,W!==null&&W.tag===6?(s(J,W.sibling),_t=f(W,it),_t.return=J,J=_t):(s(J,W),_t=zf(it,J.mode,_t),_t.return=J,J=_t),y(J)):s(J,W)}return function(J,W,it,_t){try{Jo=0;var $t=qe(J,W,it,_t);return Fr=null,$t}catch(Zt){if(Zt===Ir||Zt===yc)throw Zt;var ze=mi(29,Zt,null,J.mode);return ze.lanes=_t,ze.return=J,ze}}}var Zs=Fg(!0),Bg=Fg(!1),ss=!1;function Zf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Kf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function rs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function os(e,i,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Fe&2)!==0){var f=o.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),o.pending=i,i=pc(e),bg(e,null,s),i}return dc(e,o,i,s),pc(e)}function tl(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,xr(e,s)}}function Qf(e,i){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var f=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var y={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};h===null?f=h=y:h=h.next=y,s=s.next}while(s!==null);h===null?f=h=i:h=h.next=i}else f=h=i;s={baseState:o.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Jf=!1;function el(){if(Jf){var e=zr;if(e!==null)throw e}}function nl(e,i,s,o){Jf=!1;var f=e.updateQueue;ss=!1;var h=f.firstBaseUpdate,y=f.lastBaseUpdate,D=f.shared.pending;if(D!==null){f.shared.pending=null;var k=D,at=k.next;k.next=null,y===null?h=at:y.next=at,y=k;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,D=mt.lastBaseUpdate,D!==y&&(D===null?mt.firstBaseUpdate=at:D.next=at,mt.lastBaseUpdate=k))}if(h!==null){var xt=f.baseState;y=0,mt=at=k=null,D=h;do{var rt=D.lane&-536870913,ut=rt!==D.lane;if(ut?(we&rt)===rt:(o&rt)===rt){rt!==0&&rt===Pr&&(Jf=!0),mt!==null&&(mt=mt.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});t:{var jt=e,ie=D;rt=i;var qe=s;switch(ie.tag){case 1:if(jt=ie.payload,typeof jt=="function"){xt=jt.call(qe,xt,rt);break t}xt=jt;break t;case 3:jt.flags=jt.flags&-65537|128;case 0:if(jt=ie.payload,rt=typeof jt=="function"?jt.call(qe,xt,rt):jt,rt==null)break t;xt=_({},xt,rt);break t;case 2:ss=!0}}rt=D.callback,rt!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=f.callbacks,ut===null?f.callbacks=[rt]:ut.push(rt))}else ut={lane:rt,tag:D.tag,payload:D.payload,callback:D.callback,next:null},mt===null?(at=mt=ut,k=xt):mt=mt.next=ut,y|=rt;if(D=D.next,D===null){if(D=f.shared.pending,D===null)break;ut=D,D=ut.next,ut.next=null,f.lastBaseUpdate=ut,f.shared.pending=null}}while(!0);mt===null&&(k=xt),f.baseState=k,f.firstBaseUpdate=at,f.lastBaseUpdate=mt,h===null&&(f.shared.lanes=0),hs|=y,e.lanes=y,e.memoizedState=xt}}function Hg(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function Gg(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Hg(s[e],i)}var Br=A(null),Ec=A(0);function Vg(e,i){e=za,ft(Ec,e),ft(Br,i),za=e|i.baseLanes}function $f(){ft(Ec,za),ft(Br,Br.current)}function th(){za=Ec.current,V(Br),V(Ec)}var gi=A(null),Li=null;function ls(e){var i=e.alternate;ft(un,un.current&1),ft(gi,e),Li===null&&(i===null||Br.current!==null||i.memoizedState!==null)&&(Li=e)}function eh(e){ft(un,un.current),ft(gi,e),Li===null&&(Li=e)}function kg(e){e.tag===22?(ft(un,un.current),ft(gi,e),Li===null&&(Li=e)):cs()}function cs(){ft(un,un.current),ft(gi,gi.current)}function _i(e){V(gi),Li===e&&(Li=null),V(un)}var un=A(0);function Tc(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||od(s)||ld(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ra=0,de=null,je=null,_n=null,Ac=!1,Hr=!1,Ks=!1,wc=0,il=0,Gr=null,YS=0;function on(){throw Error(a(321))}function nh(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!pi(e[s],i[s]))return!1;return!0}function ih(e,i,s,o,f,h){return Ra=h,de=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,P.H=e===null||e.memoizedState===null?A0:vh,Ks=!1,h=s(o,f),Ks=!1,Hr&&(h=jg(i,s,o,f)),Xg(e),h}function Xg(e){P.H=rl;var i=je!==null&&je.next!==null;if(Ra=0,_n=je=de=null,Ac=!1,il=0,Gr=null,i)throw Error(a(300));e===null||vn||(e=e.dependencies,e!==null&&_c(e)&&(vn=!0))}function jg(e,i,s,o){de=e;var f=0;do{if(Hr&&(Gr=null),il=0,Hr=!1,25<=f)throw Error(a(301));if(f+=1,_n=je=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}P.H=w0,h=i(s,o)}while(Hr);return h}function ZS(){var e=P.H,i=e.useState()[0];return i=typeof i.then=="function"?al(i):i,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(de.flags|=1024),i}function ah(){var e=wc!==0;return wc=0,e}function sh(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function rh(e){if(Ac){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Ac=!1}Ra=0,_n=je=de=null,Hr=!1,il=wc=0,Gr=null}function $n(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?de.memoizedState=_n=e:_n=_n.next=e,_n}function fn(){if(je===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var i=_n===null?de.memoizedState:_n.next;if(i!==null)_n=i,je=e;else{if(e===null)throw de.alternate===null?Error(a(467)):Error(a(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},_n===null?de.memoizedState=_n=e:_n=_n.next=e}return _n}function Rc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function al(e){var i=il;return il+=1,Gr===null&&(Gr=[]),e=Pg(Gr,e,i),i=de,(_n===null?i.memoizedState:_n.next)===null&&(i=i.alternate,P.H=i===null||i.memoizedState===null?A0:vh),e}function Cc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return al(e);if(e.$$typeof===U)return On(e)}throw Error(a(438,String(e)))}function oh(e){var i=null,s=de.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var o=de.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Rc(),de.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),o=0;o<e;o++)s[o]=ot;return i.index++,s}function Ca(e,i){return typeof i=="function"?i(e):i}function Dc(e){var i=fn();return lh(i,je,e)}function lh(e,i,s){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var f=e.baseQueue,h=o.pending;if(h!==null){if(f!==null){var y=f.next;f.next=h.next,h.next=y}i.baseQueue=f=h,o.pending=null}if(h=e.baseState,f===null)e.memoizedState=h;else{i=f.next;var D=y=null,k=null,at=i,mt=!1;do{var xt=at.lane&-536870913;if(xt!==at.lane?(we&xt)===xt:(Ra&xt)===xt){var rt=at.revertLane;if(rt===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null}),xt===Pr&&(mt=!0);else if((Ra&rt)===rt){at=at.next,rt===Pr&&(mt=!0);continue}else xt={lane:0,revertLane:at.revertLane,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},k===null?(D=k=xt,y=h):k=k.next=xt,de.lanes|=rt,hs|=rt;xt=at.action,Ks&&s(h,xt),h=at.hasEagerState?at.eagerState:s(h,xt)}else rt={lane:xt,revertLane:at.revertLane,gesture:at.gesture,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},k===null?(D=k=rt,y=h):k=k.next=rt,de.lanes|=xt,hs|=xt;at=at.next}while(at!==null&&at!==i);if(k===null?y=h:k.next=D,!pi(h,e.memoizedState)&&(vn=!0,mt&&(s=zr,s!==null)))throw s;e.memoizedState=h,e.baseState=y,e.baseQueue=k,o.lastRenderedState=h}return f===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function ch(e){var i=fn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var o=s.dispatch,f=s.pending,h=i.memoizedState;if(f!==null){s.pending=null;var y=f=f.next;do h=e(h,y.action),y=y.next;while(y!==f);pi(h,i.memoizedState)||(vn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,o]}function Wg(e,i,s){var o=de,f=fn(),h=Ce;if(h){if(s===void 0)throw Error(a(407));s=s()}else s=i();var y=!pi((je||f).memoizedState,s);if(y&&(f.memoizedState=s,vn=!0),f=f.queue,hh(Zg.bind(null,o,f,e),[e]),f.getSnapshot!==i||y||_n!==null&&_n.memoizedState.tag&1){if(o.flags|=2048,Vr(9,{destroy:void 0},Yg.bind(null,o,f,s,i),null),Ze===null)throw Error(a(349));h||(Ra&127)!==0||qg(o,i,s)}return s}function qg(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=de.updateQueue,i===null?(i=Rc(),de.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function Yg(e,i,s,o){i.value=s,i.getSnapshot=o,Kg(i)&&Qg(e)}function Zg(e,i,s){return s(function(){Kg(i)&&Qg(e)})}function Kg(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!pi(e,s)}catch{return!0}}function Qg(e){var i=Gs(e,2);i!==null&&li(i,e,2)}function uh(e){var i=$n();if(typeof e=="function"){var s=e;if(e=s(),Ks){Ft(!0);try{s()}finally{Ft(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:e},i}function Jg(e,i,s,o){return e.baseState=s,lh(e,je,typeof o=="function"?o:Ca)}function KS(e,i,s,o,f){if(Nc(e))throw Error(a(485));if(e=i.action,e!==null){var h={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){h.listeners.push(y)}};P.T!==null?s(!0):h.isTransition=!1,o(h),s=i.pending,s===null?(h.next=i.pending=h,$g(i,h)):(h.next=s.next,i.pending=s.next=h)}}function $g(e,i){var s=i.action,o=i.payload,f=e.state;if(i.isTransition){var h=P.T,y={};P.T=y;try{var D=s(f,o),k=P.S;k!==null&&k(y,D),t0(e,i,D)}catch(at){fh(e,i,at)}finally{h!==null&&y.types!==null&&(h.types=y.types),P.T=h}}else try{h=s(f,o),t0(e,i,h)}catch(at){fh(e,i,at)}}function t0(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){e0(e,i,o)},function(o){return fh(e,i,o)}):e0(e,i,s)}function e0(e,i,s){i.status="fulfilled",i.value=s,n0(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,$g(e,s)))}function fh(e,i,s){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=s,n0(i),i=i.next;while(i!==o)}e.action=null}function n0(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function i0(e,i){return i}function a0(e,i){if(Ce){var s=Ze.formState;if(s!==null){t:{var o=de;if(Ce){if(Je){e:{for(var f=Je,h=Di;f.nodeType!==8;){if(!h){f=null;break e}if(f=Ui(f.nextSibling),f===null){f=null;break e}}h=f.data,f=h==="F!"||h==="F"?f:null}if(f){Je=Ui(f.nextSibling),o=f.data==="F!";break t}}is(o)}o=!1}o&&(i=s[0])}}return s=$n(),s.memoizedState=s.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i0,lastRenderedState:i},s.queue=o,s=M0.bind(null,de,o),o.dispatch=s,o=uh(!1),h=_h.bind(null,de,!1,o.queue),o=$n(),f={state:i,dispatch:null,action:e,pending:null},o.queue=f,s=KS.bind(null,de,f,h,s),f.dispatch=s,o.memoizedState=e,[i,s,!1]}function s0(e){var i=fn();return r0(i,je,e)}function r0(e,i,s){if(i=lh(e,i,i0)[0],e=Dc(Ca)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=al(i)}catch(y){throw y===Ir?yc:y}else o=i;i=fn();var f=i.queue,h=f.dispatch;return s!==i.memoizedState&&(de.flags|=2048,Vr(9,{destroy:void 0},QS.bind(null,f,s),null)),[o,h,e]}function QS(e,i){e.action=i}function o0(e){var i=fn(),s=je;if(s!==null)return r0(i,s,e);fn(),i=i.memoizedState,s=fn();var o=s.queue.dispatch;return s.memoizedState=e,[i,o,!1]}function Vr(e,i,s,o){return e={tag:e,create:s,deps:o,inst:i,next:null},i=de.updateQueue,i===null&&(i=Rc(),de.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,i.lastEffect=e),e}function l0(){return fn().memoizedState}function Lc(e,i,s,o){var f=$n();de.flags|=e,f.memoizedState=Vr(1|i,{destroy:void 0},s,o===void 0?null:o)}function Uc(e,i,s,o){var f=fn();o=o===void 0?null:o;var h=f.memoizedState.inst;je!==null&&o!==null&&nh(o,je.memoizedState.deps)?f.memoizedState=Vr(i,h,s,o):(de.flags|=e,f.memoizedState=Vr(1|i,h,s,o))}function c0(e,i){Lc(8390656,8,e,i)}function hh(e,i){Uc(2048,8,e,i)}function JS(e){de.flags|=4;var i=de.updateQueue;if(i===null)i=Rc(),de.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function u0(e){var i=fn().memoizedState;return JS({ref:i,nextImpl:e}),function(){if((Fe&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function f0(e,i){return Uc(4,2,e,i)}function h0(e,i){return Uc(4,4,e,i)}function d0(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function p0(e,i,s){s=s!=null?s.concat([e]):null,Uc(4,4,d0.bind(null,i,e),s)}function dh(){}function m0(e,i){var s=fn();i=i===void 0?null:i;var o=s.memoizedState;return i!==null&&nh(i,o[1])?o[0]:(s.memoizedState=[e,i],e)}function g0(e,i){var s=fn();i=i===void 0?null:i;var o=s.memoizedState;if(i!==null&&nh(i,o[1]))return o[0];if(o=e(),Ks){Ft(!0);try{e()}finally{Ft(!1)}}return s.memoizedState=[o,i],o}function ph(e,i,s){return s===void 0||(Ra&1073741824)!==0&&(we&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=__(),de.lanes|=e,hs|=e,s)}function _0(e,i,s,o){return pi(s,i)?s:Br.current!==null?(e=ph(e,s,o),pi(e,i)||(vn=!0),e):(Ra&42)===0||(Ra&1073741824)!==0&&(we&261930)===0?(vn=!0,e.memoizedState=s):(e=__(),de.lanes|=e,hs|=e,i)}function v0(e,i,s,o,f){var h=H.p;H.p=h!==0&&8>h?h:8;var y=P.T,D={};P.T=D,_h(e,!1,i,s);try{var k=f(),at=P.S;if(at!==null&&at(D,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var mt=qS(k,o);sl(e,i,mt,yi(e))}else sl(e,i,o,yi(e))}catch(xt){sl(e,i,{then:function(){},status:"rejected",reason:xt},yi())}finally{H.p=h,y!==null&&D.types!==null&&(y.types=D.types),P.T=y}}function $S(){}function mh(e,i,s,o){if(e.tag!==5)throw Error(a(476));var f=x0(e).queue;v0(e,f,i,ct,s===null?$S:function(){return y0(e),s(o)})}function x0(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ct,baseState:ct,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:ct},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function y0(e){var i=x0(e);i.next===null&&(i=e.alternate.memoizedState),sl(e,i.next.queue,{},yi())}function gh(){return On(bl)}function S0(){return fn().memoizedState}function b0(){return fn().memoizedState}function tb(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=yi();e=rs(s);var o=os(i,e,s);o!==null&&(li(o,i,s),tl(o,i,s)),i={cache:jf()},e.payload=i;return}i=i.return}}function eb(e,i,s){var o=yi();s={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Nc(e)?E0(i,s):(s=Of(e,i,s,o),s!==null&&(li(s,e,o),T0(s,i,o)))}function M0(e,i,s){var o=yi();sl(e,i,s,o)}function sl(e,i,s,o){var f={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Nc(e))E0(i,f);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var y=i.lastRenderedState,D=h(y,s);if(f.hasEagerState=!0,f.eagerState=D,pi(D,y))return dc(e,i,f,0),Ze===null&&hc(),!1}catch{}if(s=Of(e,i,f,o),s!==null)return li(s,e,o),T0(s,i,o),!0}return!1}function _h(e,i,s,o){if(o={lane:2,revertLane:Zh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Nc(e)){if(i)throw Error(a(479))}else i=Of(e,s,o,2),i!==null&&li(i,e,2)}function Nc(e){var i=e.alternate;return e===de||i!==null&&i===de}function E0(e,i){Hr=Ac=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function T0(e,i,s){if((s&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,xr(e,s)}}var rl={readContext:On,use:Cc,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};rl.useEffectEvent=on;var A0={readContext:On,use:Cc,useCallback:function(e,i){return $n().memoizedState=[e,i===void 0?null:i],e},useContext:On,useEffect:c0,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,Lc(4194308,4,d0.bind(null,i,e),s)},useLayoutEffect:function(e,i){return Lc(4194308,4,e,i)},useInsertionEffect:function(e,i){Lc(4,2,e,i)},useMemo:function(e,i){var s=$n();i=i===void 0?null:i;var o=e();if(Ks){Ft(!0);try{e()}finally{Ft(!1)}}return s.memoizedState=[o,i],o},useReducer:function(e,i,s){var o=$n();if(s!==void 0){var f=s(i);if(Ks){Ft(!0);try{s(i)}finally{Ft(!1)}}}else f=i;return o.memoizedState=o.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},o.queue=e,e=e.dispatch=eb.bind(null,de,e),[o.memoizedState,e]},useRef:function(e){var i=$n();return e={current:e},i.memoizedState=e},useState:function(e){e=uh(e);var i=e.queue,s=M0.bind(null,de,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:dh,useDeferredValue:function(e,i){var s=$n();return ph(s,e,i)},useTransition:function(){var e=uh(!1);return e=v0.bind(null,de,e.queue,!0,!1),$n().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var o=de,f=$n();if(Ce){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Ze===null)throw Error(a(349));(we&127)!==0||qg(o,i,s)}f.memoizedState=s;var h={value:s,getSnapshot:i};return f.queue=h,c0(Zg.bind(null,o,h,e),[e]),o.flags|=2048,Vr(9,{destroy:void 0},Yg.bind(null,o,h,s,i),null),s},useId:function(){var e=$n(),i=Ze.identifierPrefix;if(Ce){var s=ia,o=na;s=(o&~(1<<32-zt(o)-1)).toString(32)+s,i="_"+i+"R_"+s,s=wc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=YS++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:gh,useFormState:a0,useActionState:a0,useOptimistic:function(e){var i=$n();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=_h.bind(null,de,!0,s),s.dispatch=i,[e,i]},useMemoCache:oh,useCacheRefresh:function(){return $n().memoizedState=tb.bind(null,de)},useEffectEvent:function(e){var i=$n(),s={impl:e};return i.memoizedState=s,function(){if((Fe&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},vh={readContext:On,use:Cc,useCallback:m0,useContext:On,useEffect:hh,useImperativeHandle:p0,useInsertionEffect:f0,useLayoutEffect:h0,useMemo:g0,useReducer:Dc,useRef:l0,useState:function(){return Dc(Ca)},useDebugValue:dh,useDeferredValue:function(e,i){var s=fn();return _0(s,je.memoizedState,e,i)},useTransition:function(){var e=Dc(Ca)[0],i=fn().memoizedState;return[typeof e=="boolean"?e:al(e),i]},useSyncExternalStore:Wg,useId:S0,useHostTransitionStatus:gh,useFormState:s0,useActionState:s0,useOptimistic:function(e,i){var s=fn();return Jg(s,je,e,i)},useMemoCache:oh,useCacheRefresh:b0};vh.useEffectEvent=u0;var w0={readContext:On,use:Cc,useCallback:m0,useContext:On,useEffect:hh,useImperativeHandle:p0,useInsertionEffect:f0,useLayoutEffect:h0,useMemo:g0,useReducer:ch,useRef:l0,useState:function(){return ch(Ca)},useDebugValue:dh,useDeferredValue:function(e,i){var s=fn();return je===null?ph(s,e,i):_0(s,je.memoizedState,e,i)},useTransition:function(){var e=ch(Ca)[0],i=fn().memoizedState;return[typeof e=="boolean"?e:al(e),i]},useSyncExternalStore:Wg,useId:S0,useHostTransitionStatus:gh,useFormState:o0,useActionState:o0,useOptimistic:function(e,i){var s=fn();return je!==null?Jg(s,je,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:oh,useCacheRefresh:b0};w0.useEffectEvent=u0;function xh(e,i,s,o){i=e.memoizedState,s=s(o,i),s=s==null?i:_({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var yh={enqueueSetState:function(e,i,s){e=e._reactInternals;var o=yi(),f=rs(o);f.payload=i,s!=null&&(f.callback=s),i=os(e,f,o),i!==null&&(li(i,e,o),tl(i,e,o))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var o=yi(),f=rs(o);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=os(e,f,o),i!==null&&(li(i,e,o),tl(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=yi(),o=rs(s);o.tag=2,i!=null&&(o.callback=i),i=os(e,o,s),i!==null&&(li(i,e,s),tl(i,e,s))}};function R0(e,i,s,o,f,h,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,y):i.prototype&&i.prototype.isPureReactComponent?!Wo(s,o)||!Wo(f,h):!0}function C0(e,i,s,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,o),i.state!==e&&yh.enqueueReplaceState(i,i.state,null)}function Qs(e,i){var s=i;if("ref"in i){s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}if(e=e.defaultProps){s===i&&(s=_({},s));for(var f in e)s[f]===void 0&&(s[f]=e[f])}return s}function D0(e){fc(e)}function L0(e){console.error(e)}function U0(e){fc(e)}function Oc(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function N0(e,i,s){try{var o=e.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Sh(e,i,s){return s=rs(s),s.tag=3,s.payload={element:null},s.callback=function(){Oc(e,i)},s}function O0(e){return e=rs(e),e.tag=3,e}function P0(e,i,s,o){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var h=o.value;e.payload=function(){return f(h)},e.callback=function(){N0(i,s,o)}}var y=s.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){N0(i,s,o),typeof f!="function"&&(ds===null?ds=new Set([this]):ds.add(this));var D=o.stack;this.componentDidCatch(o.value,{componentStack:D!==null?D:""})})}function nb(e,i,s,o,f){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=s.alternate,i!==null&&Or(i,s,f,!0),s=gi.current,s!==null){switch(s.tag){case 31:case 13:return Li===null?Wc():s.alternate===null&&ln===0&&(ln=3),s.flags&=-257,s.flags|=65536,s.lanes=f,o===Sc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([o]):i.add(o),Wh(e,o,f)),!1;case 22:return s.flags|=65536,o===Sc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([o]):s.add(o)),Wh(e,o,f)),!1}throw Error(a(435,s.tag))}return Wh(e,o,f),Wc(),!1}if(Ce)return i=gi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,o!==Hf&&(e=Error(a(422),{cause:o}),Zo(wi(e,s)))):(o!==Hf&&(i=Error(a(423),{cause:o}),Zo(wi(i,s))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,o=wi(o,s),f=Sh(e.stateNode,o,f),Qf(e,f),ln!==4&&(ln=2)),!1;var h=Error(a(520),{cause:o});if(h=wi(h,s),pl===null?pl=[h]:pl.push(h),ln!==4&&(ln=2),i===null)return!0;o=wi(o,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=f&-f,s.lanes|=e,e=Sh(s.stateNode,o,e),Qf(s,e),!1;case 1:if(i=s.type,h=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ds===null||!ds.has(h))))return s.flags|=65536,f&=-f,s.lanes|=f,f=O0(f),P0(f,e,s,o),Qf(s,f),!1}s=s.return}while(s!==null);return!1}var bh=Error(a(461)),vn=!1;function Pn(e,i,s,o){i.child=e===null?Bg(i,null,s,o):Zs(i,e.child,s,o)}function z0(e,i,s,o,f){s=s.render;var h=i.ref;if("ref"in o){var y={};for(var D in o)D!=="ref"&&(y[D]=o[D])}else y=o;return js(i),o=ih(e,i,s,y,h,f),D=ah(),e!==null&&!vn?(sh(e,i,f),Da(e,i,f)):(Ce&&D&&Ff(i),i.flags|=1,Pn(e,i,o,f),i.child)}function I0(e,i,s,o,f){if(e===null){var h=s.type;return typeof h=="function"&&!Pf(h)&&h.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=h,F0(e,i,h,o,f)):(e=mc(s.type,null,o,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(h=e.child,!Dh(e,f)){var y=h.memoizedProps;if(s=s.compare,s=s!==null?s:Wo,s(y,o)&&e.ref===i.ref)return Da(e,i,f)}return i.flags|=1,e=Ea(h,o),e.ref=i.ref,e.return=i,i.child=e}function F0(e,i,s,o,f){if(e!==null){var h=e.memoizedProps;if(Wo(h,o)&&e.ref===i.ref)if(vn=!1,i.pendingProps=o=h,Dh(e,f))(e.flags&131072)!==0&&(vn=!0);else return i.lanes=e.lanes,Da(e,i,f)}return Mh(e,i,s,o,f)}function B0(e,i,s,o){var f=o.children,h=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|s:s,e!==null){for(o=i.child=e.child,f=0;o!==null;)f=f|o.lanes|o.childLanes,o=o.sibling;o=f&~h}else o=0,i.child=null;return H0(e,i,h,s,o)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&xc(i,h!==null?h.cachePool:null),h!==null?Vg(i,h):$f(),kg(i);else return o=i.lanes=536870912,H0(e,i,h!==null?h.baseLanes|s:s,s,o)}else h!==null?(xc(i,h.cachePool),Vg(i,h),cs(),i.memoizedState=null):(e!==null&&xc(i,null),$f(),cs());return Pn(e,i,f,s),i.child}function ol(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function H0(e,i,s,o,f){var h=qf();return h=h===null?null:{parent:gn._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},e!==null&&xc(i,null),$f(),kg(i),e!==null&&Or(e,i,o,!0),i.childLanes=f,null}function Pc(e,i){return i=Ic({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function G0(e,i,s){return Zs(i,e.child,null,s),e=Pc(i,i.pendingProps),e.flags|=2,_i(i),i.memoizedState=null,e}function ib(e,i,s){var o=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Ce){if(o.mode==="hidden")return e=Pc(i,o),i.lanes=536870912,ol(null,e);if(eh(i),(e=Je)?(e=$_(e,Di),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:es!==null?{id:na,overflow:ia}:null,retryLane:536870912,hydrationErrors:null},s=Eg(e),s.return=i,i.child=s,Nn=i,Je=null)):e=null,e===null)throw is(i);return i.lanes=536870912,null}return Pc(i,o)}var h=e.memoizedState;if(h!==null){var y=h.dehydrated;if(eh(i),f)if(i.flags&256)i.flags&=-257,i=G0(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(vn||Or(e,i,s,!1),f=(s&e.childLanes)!==0,vn||f){if(o=Ze,o!==null&&(y=tc(o,s),y!==0&&y!==h.retryLane))throw h.retryLane=y,Gs(e,y),li(o,e,y),bh;Wc(),i=G0(e,i,s)}else e=h.treeContext,Je=Ui(y.nextSibling),Nn=i,Ce=!0,ns=null,Di=!1,e!==null&&wg(i,e),i=Pc(i,o),i.flags|=4096;return i}return e=Ea(e.child,{mode:o.mode,children:o.children}),e.ref=i.ref,i.child=e,e.return=i,e}function zc(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function Mh(e,i,s,o,f){return js(i),s=ih(e,i,s,o,void 0,f),o=ah(),e!==null&&!vn?(sh(e,i,f),Da(e,i,f)):(Ce&&o&&Ff(i),i.flags|=1,Pn(e,i,s,f),i.child)}function V0(e,i,s,o,f,h){return js(i),i.updateQueue=null,s=jg(i,o,s,f),Xg(e),o=ah(),e!==null&&!vn?(sh(e,i,h),Da(e,i,h)):(Ce&&o&&Ff(i),i.flags|=1,Pn(e,i,s,h),i.child)}function k0(e,i,s,o,f){if(js(i),i.stateNode===null){var h=Dr,y=s.contextType;typeof y=="object"&&y!==null&&(h=On(y)),h=new s(o,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=yh,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=o,h.state=i.memoizedState,h.refs={},Zf(i),y=s.contextType,h.context=typeof y=="object"&&y!==null?On(y):Dr,h.state=i.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(xh(i,s,y,o),h.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(y=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),y!==h.state&&yh.enqueueReplaceState(h,h.state,null),nl(i,o,h,f),el(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){h=i.stateNode;var D=i.memoizedProps,k=Qs(s,D);h.props=k;var at=h.context,mt=s.contextType;y=Dr,typeof mt=="object"&&mt!==null&&(y=On(mt));var xt=s.getDerivedStateFromProps;mt=typeof xt=="function"||typeof h.getSnapshotBeforeUpdate=="function",D=i.pendingProps!==D,mt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(D||at!==y)&&C0(i,h,o,y),ss=!1;var rt=i.memoizedState;h.state=rt,nl(i,o,h,f),el(),at=i.memoizedState,D||rt!==at||ss?(typeof xt=="function"&&(xh(i,s,xt,o),at=i.memoizedState),(k=ss||R0(i,s,k,o,rt,at,y))?(mt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=at),h.props=o,h.state=at,h.context=y,o=k):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{h=i.stateNode,Kf(e,i),y=i.memoizedProps,mt=Qs(s,y),h.props=mt,xt=i.pendingProps,rt=h.context,at=s.contextType,k=Dr,typeof at=="object"&&at!==null&&(k=On(at)),D=s.getDerivedStateFromProps,(at=typeof D=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==xt||rt!==k)&&C0(i,h,o,k),ss=!1,rt=i.memoizedState,h.state=rt,nl(i,o,h,f),el();var ut=i.memoizedState;y!==xt||rt!==ut||ss||e!==null&&e.dependencies!==null&&_c(e.dependencies)?(typeof D=="function"&&(xh(i,s,D,o),ut=i.memoizedState),(mt=ss||R0(i,s,mt,o,rt,ut,k)||e!==null&&e.dependencies!==null&&_c(e.dependencies))?(at||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ut,k),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ut,k)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&rt===e.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&rt===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=ut),h.props=o,h.state=ut,h.context=k,o=mt):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&rt===e.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&rt===e.memoizedState||(i.flags|=1024),o=!1)}return h=o,zc(e,i),o=(i.flags&128)!==0,h||o?(h=i.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,e!==null&&o?(i.child=Zs(i,e.child,null,f),i.child=Zs(i,null,s,f)):Pn(e,i,s,f),i.memoizedState=h.state,e=i.child):e=Da(e,i,f),e}function X0(e,i,s,o){return ks(),i.flags|=256,Pn(e,i,s,o),i.child}var Eh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Th(e){return{baseLanes:e,cachePool:Ng()}}function Ah(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=xi),e}function j0(e,i,s){var o=i.pendingProps,f=!1,h=(i.flags&128)!==0,y;if((y=h)||(y=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),y&&(f=!0,i.flags&=-129),y=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ce){if(f?ls(i):cs(),(e=Je)?(e=$_(e,Di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:es!==null?{id:na,overflow:ia}:null,retryLane:536870912,hydrationErrors:null},s=Eg(e),s.return=i,i.child=s,Nn=i,Je=null)):e=null,e===null)throw is(i);return ld(e)?i.lanes=32:i.lanes=536870912,null}var D=o.children;return o=o.fallback,f?(cs(),f=i.mode,D=Ic({mode:"hidden",children:D},f),o=Vs(o,f,s,null),D.return=i,o.return=i,D.sibling=o,i.child=D,o=i.child,o.memoizedState=Th(s),o.childLanes=Ah(e,y,s),i.memoizedState=Eh,ol(null,o)):(ls(i),wh(i,D))}var k=e.memoizedState;if(k!==null&&(D=k.dehydrated,D!==null)){if(h)i.flags&256?(ls(i),i.flags&=-257,i=Rh(e,i,s)):i.memoizedState!==null?(cs(),i.child=e.child,i.flags|=128,i=null):(cs(),D=o.fallback,f=i.mode,o=Ic({mode:"visible",children:o.children},f),D=Vs(D,f,s,null),D.flags|=2,o.return=i,D.return=i,o.sibling=D,i.child=o,Zs(i,e.child,null,s),o=i.child,o.memoizedState=Th(s),o.childLanes=Ah(e,y,s),i.memoizedState=Eh,i=ol(null,o));else if(ls(i),ld(D)){if(y=D.nextSibling&&D.nextSibling.dataset,y)var at=y.dgst;y=at,o=Error(a(419)),o.stack="",o.digest=y,Zo({value:o,source:null,stack:null}),i=Rh(e,i,s)}else if(vn||Or(e,i,s,!1),y=(s&e.childLanes)!==0,vn||y){if(y=Ze,y!==null&&(o=tc(y,s),o!==0&&o!==k.retryLane))throw k.retryLane=o,Gs(e,o),li(y,e,o),bh;od(D)||Wc(),i=Rh(e,i,s)}else od(D)?(i.flags|=192,i.child=e.child,i=null):(e=k.treeContext,Je=Ui(D.nextSibling),Nn=i,Ce=!0,ns=null,Di=!1,e!==null&&wg(i,e),i=wh(i,o.children),i.flags|=4096);return i}return f?(cs(),D=o.fallback,f=i.mode,k=e.child,at=k.sibling,o=Ea(k,{mode:"hidden",children:o.children}),o.subtreeFlags=k.subtreeFlags&65011712,at!==null?D=Ea(at,D):(D=Vs(D,f,s,null),D.flags|=2),D.return=i,o.return=i,o.sibling=D,i.child=o,ol(null,o),o=i.child,D=e.child.memoizedState,D===null?D=Th(s):(f=D.cachePool,f!==null?(k=gn._currentValue,f=f.parent!==k?{parent:k,pool:k}:f):f=Ng(),D={baseLanes:D.baseLanes|s,cachePool:f}),o.memoizedState=D,o.childLanes=Ah(e,y,s),i.memoizedState=Eh,ol(e.child,o)):(ls(i),s=e.child,e=s.sibling,s=Ea(s,{mode:"visible",children:o.children}),s.return=i,s.sibling=null,e!==null&&(y=i.deletions,y===null?(i.deletions=[e],i.flags|=16):y.push(e)),i.child=s,i.memoizedState=null,s)}function wh(e,i){return i=Ic({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Ic(e,i){return e=mi(22,e,null,i),e.lanes=0,e}function Rh(e,i,s){return Zs(i,e.child,null,s),e=wh(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function W0(e,i,s){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),kf(e.return,i,s)}function Ch(e,i,s,o,f,h){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:f,treeForkCount:h}:(y.isBackwards=i,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=s,y.tailMode=f,y.treeForkCount=h)}function q0(e,i,s){var o=i.pendingProps,f=o.revealOrder,h=o.tail;o=o.children;var y=un.current,D=(y&2)!==0;if(D?(y=y&1|2,i.flags|=128):y&=1,ft(un,y),Pn(e,i,o,s),o=Ce?Yo:0,!D&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&W0(e,s,i);else if(e.tag===19)W0(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)e=s.alternate,e!==null&&Tc(e)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Ch(i,!1,f,s,h,o);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&Tc(e)===null){i.child=f;break}e=f.sibling,f.sibling=s,s=f,f=e}Ch(i,!0,s,null,h,o);break;case"together":Ch(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function Da(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),hs|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(Or(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=Ea(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Ea(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function Dh(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&_c(e)))}function ab(e,i,s){switch(i.tag){case 3:Et(i,i.stateNode.containerInfo),as(i,gn,e.memoizedState.cache),ks();break;case 27:case 5:Qt(i);break;case 4:Et(i,i.stateNode.containerInfo);break;case 10:as(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,eh(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(ls(i),i.flags|=128,null):(s&i.child.childLanes)!==0?j0(e,i,s):(ls(i),e=Da(e,i,s),e!==null?e.sibling:null);ls(i);break;case 19:var f=(e.flags&128)!==0;if(o=(s&i.childLanes)!==0,o||(Or(e,i,s,!1),o=(s&i.childLanes)!==0),f){if(o)return q0(e,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ft(un,un.current),o)break;return null;case 22:return i.lanes=0,B0(e,i,s,i.pendingProps);case 24:as(i,gn,e.memoizedState.cache)}return Da(e,i,s)}function Y0(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)vn=!0;else{if(!Dh(e,s)&&(i.flags&128)===0)return vn=!1,ab(e,i,s);vn=(e.flags&131072)!==0}else vn=!1,Ce&&(i.flags&1048576)!==0&&Ag(i,Yo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var o=i.pendingProps;if(e=qs(i.elementType),i.type=e,typeof e=="function")Pf(e)?(o=Qs(e,o),i.tag=1,i=k0(null,i,e,o,s)):(i.tag=0,i=Mh(null,i,e,o,s));else{if(e!=null){var f=e.$$typeof;if(f===C){i.tag=11,i=z0(null,i,e,o,s);break t}else if(f===O){i.tag=14,i=I0(null,i,e,o,s);break t}}throw i=$(e)||e,Error(a(306,i,""))}}return i;case 0:return Mh(e,i,i.type,i.pendingProps,s);case 1:return o=i.type,f=Qs(o,i.pendingProps),k0(e,i,o,f,s);case 3:t:{if(Et(i,i.stateNode.containerInfo),e===null)throw Error(a(387));o=i.pendingProps;var h=i.memoizedState;f=h.element,Kf(e,i),nl(i,o,null,s);var y=i.memoizedState;if(o=y.cache,as(i,gn,o),o!==h.cache&&Xf(i,[gn],s,!0),el(),o=y.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:y.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=X0(e,i,o,s);break t}else if(o!==f){f=wi(Error(a(424)),i),Zo(f),i=X0(e,i,o,s);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Je=Ui(e.firstChild),Nn=i,Ce=!0,ns=null,Di=!0,s=Bg(i,null,o,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ks(),o===f){i=Da(e,i,s);break t}Pn(e,i,o,s)}i=i.child}return i;case 26:return zc(e,i),e===null?(s=sv(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ce||(s=i.type,e=i.pendingProps,o=$c(et.current).createElement(s),o[dn]=i,o[Sn]=e,zn(o,s,e),q(o),i.stateNode=o):i.memoizedState=sv(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Qt(i),e===null&&Ce&&(o=i.stateNode=nv(i.type,i.pendingProps,et.current),Nn=i,Di=!0,f=Je,_s(i.type)?(cd=f,Je=Ui(o.firstChild)):Je=f),Pn(e,i,i.pendingProps.children,s),zc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ce&&((f=o=Je)&&(o=Ob(o,i.type,i.pendingProps,Di),o!==null?(i.stateNode=o,Nn=i,Je=Ui(o.firstChild),Di=!1,f=!0):f=!1),f||is(i)),Qt(i),f=i.type,h=i.pendingProps,y=e!==null?e.memoizedProps:null,o=h.children,ad(f,h)?o=null:y!==null&&ad(f,y)&&(i.flags|=32),i.memoizedState!==null&&(f=ih(e,i,ZS,null,null,s),bl._currentValue=f),zc(e,i),Pn(e,i,o,s),i.child;case 6:return e===null&&Ce&&((e=s=Je)&&(s=Pb(s,i.pendingProps,Di),s!==null?(i.stateNode=s,Nn=i,Je=null,e=!0):e=!1),e||is(i)),null;case 13:return j0(e,i,s);case 4:return Et(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=Zs(i,null,o,s):Pn(e,i,o,s),i.child;case 11:return z0(e,i,i.type,i.pendingProps,s);case 7:return Pn(e,i,i.pendingProps,s),i.child;case 8:return Pn(e,i,i.pendingProps.children,s),i.child;case 12:return Pn(e,i,i.pendingProps.children,s),i.child;case 10:return o=i.pendingProps,as(i,i.type,o.value),Pn(e,i,o.children,s),i.child;case 9:return f=i.type._context,o=i.pendingProps.children,js(i),f=On(f),o=o(f),i.flags|=1,Pn(e,i,o,s),i.child;case 14:return I0(e,i,i.type,i.pendingProps,s);case 15:return F0(e,i,i.type,i.pendingProps,s);case 19:return q0(e,i,s);case 31:return ib(e,i,s);case 22:return B0(e,i,s,i.pendingProps);case 24:return js(i),o=On(gn),e===null?(f=qf(),f===null&&(f=Ze,h=jf(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=s),f=h),i.memoizedState={parent:o,cache:f},Zf(i),as(i,gn,f)):((e.lanes&s)!==0&&(Kf(e,i),nl(i,null,null,s),el()),f=e.memoizedState,h=i.memoizedState,f.parent!==o?(f={parent:o,cache:o},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),as(i,gn,o)):(o=h.cache,as(i,gn,o),o!==f.cache&&Xf(i,[gn],s,!0))),Pn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function La(e){e.flags|=4}function Lh(e,i,s,o,f){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(S_())e.flags|=8192;else throw Ys=Sc,Yf}else e.flags&=-16777217}function Z0(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!uv(i))if(S_())e.flags|=8192;else throw Ys=Sc,Yf}function Fc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?He():536870912,e.lanes|=i,Wr|=i)}function ll(e,i){if(!Ce)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function $e(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(i)for(var f=e.child;f!==null;)s|=f.lanes|f.childLanes,o|=f.subtreeFlags&65011712,o|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)s|=f.lanes|f.childLanes,o|=f.subtreeFlags,o|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=o,e.childLanes=s,i}function sb(e,i,s){var o=i.pendingProps;switch(Bf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(i),null;case 1:return $e(i),null;case 3:return s=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),wa(gn),kt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Nr(i)?La(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Gf())),$e(i),null;case 26:var f=i.type,h=i.memoizedState;return e===null?(La(i),h!==null?($e(i),Z0(i,h)):($e(i),Lh(i,f,null,o,s))):h?h!==e.memoizedState?(La(i),$e(i),Z0(i,h)):($e(i),i.flags&=-16777217):(e=e.memoizedProps,e!==o&&La(i),$e(i),Lh(i,f,e,o,s)),null;case 27:if(te(i),s=et.current,f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&La(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return $e(i),null}e=Mt.current,Nr(i)?Rg(i):(e=nv(f,o,s),i.stateNode=e,La(i))}return $e(i),null;case 5:if(te(i),f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&La(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return $e(i),null}if(h=Mt.current,Nr(i))Rg(i);else{var y=$c(et.current);switch(h){case 1:h=y.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:h=y.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":h=y.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":h=y.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":h=y.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?y.createElement(f,{is:o.is}):y.createElement(f)}}h[dn]=i,h[Sn]=o;t:for(y=i.child;y!==null;){if(y.tag===5||y.tag===6)h.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===i)break t;for(;y.sibling===null;){if(y.return===null||y.return===i)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}i.stateNode=h;t:switch(zn(h,f,o),f){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&La(i)}}return $e(i),Lh(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&La(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(a(166));if(e=et.current,Nr(i)){if(e=i.stateNode,s=i.memoizedProps,o=null,f=Nn,f!==null)switch(f.tag){case 27:case 5:o=f.memoizedProps}e[dn]=i,e=!!(e.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||j_(e.nodeValue,s)),e||is(i,!0)}else e=$c(e).createTextNode(o),e[dn]=i,i.stateNode=e}return $e(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(o=Nr(i),s!==null){if(e===null){if(!o)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[dn]=i}else ks(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$e(i),e=!1}else s=Gf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?(_i(i),i):(_i(i),null);if((i.flags&128)!==0)throw Error(a(558))}return $e(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Nr(i),o!==null&&o.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[dn]=i}else ks(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$e(i),f=!1}else f=Gf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(_i(i),i):(_i(i),null)}return _i(i),(i.flags&128)!==0?(i.lanes=s,i):(s=o!==null,e=e!==null&&e.memoizedState!==null,s&&(o=i.child,f=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(f=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==f&&(o.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),Fc(i,i.updateQueue),$e(i),null);case 4:return kt(),e===null&&$h(i.stateNode.containerInfo),$e(i),null;case 10:return wa(i.type),$e(i),null;case 19:if(V(un),o=i.memoizedState,o===null)return $e(i),null;if(f=(i.flags&128)!==0,h=o.rendering,h===null)if(f)ll(o,!1);else{if(ln!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(h=Tc(e),h!==null){for(i.flags|=128,ll(o,!1),e=h.updateQueue,i.updateQueue=e,Fc(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)Mg(s,e),s=s.sibling;return ft(un,un.current&1|2),Ce&&Ta(i,o.treeForkCount),i.child}e=e.sibling}o.tail!==null&&E()>kc&&(i.flags|=128,f=!0,ll(o,!1),i.lanes=4194304)}else{if(!f)if(e=Tc(h),e!==null){if(i.flags|=128,f=!0,e=e.updateQueue,i.updateQueue=e,Fc(i,e),ll(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Ce)return $e(i),null}else 2*E()-o.renderingStartTime>kc&&s!==536870912&&(i.flags|=128,f=!0,ll(o,!1),i.lanes=4194304);o.isBackwards?(h.sibling=i.child,i.child=h):(e=o.last,e!==null?e.sibling=h:i.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,s=un.current,ft(un,f?s&1|2:s&1),Ce&&Ta(i,o.treeForkCount),e):($e(i),null);case 22:case 23:return _i(i),th(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(s&536870912)!==0&&(i.flags&128)===0&&($e(i),i.subtreeFlags&6&&(i.flags|=8192)):$e(i),s=i.updateQueue,s!==null&&Fc(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==s&&(i.flags|=2048),e!==null&&V(Ws),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),wa(gn),$e(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function rb(e,i){switch(Bf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return wa(gn),kt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return te(i),null;case 31:if(i.memoizedState!==null){if(_i(i),i.alternate===null)throw Error(a(340));ks()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(_i(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));ks()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return V(un),null;case 4:return kt(),null;case 10:return wa(i.type),null;case 22:case 23:return _i(i),th(),e!==null&&V(Ws),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return wa(gn),null;case 25:return null;default:return null}}function K0(e,i){switch(Bf(i),i.tag){case 3:wa(gn),kt();break;case 26:case 27:case 5:te(i);break;case 4:kt();break;case 31:i.memoizedState!==null&&_i(i);break;case 13:_i(i);break;case 19:V(un);break;case 10:wa(i.type);break;case 22:case 23:_i(i),th(),e!==null&&V(Ws);break;case 24:wa(gn)}}function cl(e,i){try{var s=i.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var f=o.next;s=f;do{if((s.tag&e)===e){o=void 0;var h=s.create,y=s.inst;o=h(),y.destroy=o}s=s.next}while(s!==f)}}catch(D){Ve(i,i.return,D)}}function us(e,i,s){try{var o=i.updateQueue,f=o!==null?o.lastEffect:null;if(f!==null){var h=f.next;o=h;do{if((o.tag&e)===e){var y=o.inst,D=y.destroy;if(D!==void 0){y.destroy=void 0,f=i;var k=s,at=D;try{at()}catch(mt){Ve(f,k,mt)}}}o=o.next}while(o!==h)}}catch(mt){Ve(i,i.return,mt)}}function Q0(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{Gg(i,s)}catch(o){Ve(e,e.return,o)}}}function J0(e,i,s){s.props=Qs(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(o){Ve(e,i,o)}}function ul(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof s=="function"?e.refCleanup=s(o):s.current=o}}catch(f){Ve(e,i,f)}}function aa(e,i){var s=e.ref,o=e.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(f){Ve(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Ve(e,i,f)}else s.current=null}function $0(e){var i=e.type,s=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break t;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(f){Ve(e,e.return,f)}}function Uh(e,i,s){try{var o=e.stateNode;Rb(o,e.type,s,i),o[Sn]=i}catch(f){Ve(e,e.return,f)}}function t_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&_s(e.type)||e.tag===4}function Nh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||t_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&_s(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oh(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ba));else if(o!==4&&(o===27&&_s(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(Oh(e,i,s),e=e.sibling;e!==null;)Oh(e,i,s),e=e.sibling}function Bc(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(o!==4&&(o===27&&_s(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(Bc(e,i,s),e=e.sibling;e!==null;)Bc(e,i,s),e=e.sibling}function e_(e){var i=e.stateNode,s=e.memoizedProps;try{for(var o=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);zn(i,o,s),i[dn]=e,i[Sn]=s}catch(h){Ve(e,e.return,h)}}var Ua=!1,xn=!1,Ph=!1,n_=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function ob(e,i){if(e=e.containerInfo,nd=ru,e=pg(e),Rf(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var f=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break t}var y=0,D=-1,k=-1,at=0,mt=0,xt=e,rt=null;e:for(;;){for(var ut;xt!==s||f!==0&&xt.nodeType!==3||(D=y+f),xt!==h||o!==0&&xt.nodeType!==3||(k=y+o),xt.nodeType===3&&(y+=xt.nodeValue.length),(ut=xt.firstChild)!==null;)rt=xt,xt=ut;for(;;){if(xt===e)break e;if(rt===s&&++at===f&&(D=y),rt===h&&++mt===o&&(k=y),(ut=xt.nextSibling)!==null)break;xt=rt,rt=xt.parentNode}xt=ut}s=D===-1||k===-1?null:{start:D,end:k}}else s=null}s=s||{start:0,end:0}}else s=null;for(id={focusedElem:e,selectionRange:s},ru=!1,Rn=i;Rn!==null;)if(i=Rn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Rn=e;else for(;Rn!==null;){switch(i=Rn,h=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)f=e[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,s=i,f=h.memoizedProps,h=h.memoizedState,o=s.stateNode;try{var jt=Qs(s.type,f);e=o.getSnapshotBeforeUpdate(jt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Ve(s,s.return,ie)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)rd(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":rd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,Rn=e;break}Rn=i.return}}function i_(e,i,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:Oa(e,s),o&4&&cl(5,s);break;case 1:if(Oa(e,s),o&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(y){Ve(s,s.return,y)}else{var f=Qs(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Ve(s,s.return,y)}}o&64&&Q0(s),o&512&&ul(s,s.return);break;case 3:if(Oa(e,s),o&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Gg(e,i)}catch(y){Ve(s,s.return,y)}}break;case 27:i===null&&o&4&&e_(s);case 26:case 5:Oa(e,s),i===null&&o&4&&$0(s),o&512&&ul(s,s.return);break;case 12:Oa(e,s);break;case 31:Oa(e,s),o&4&&r_(e,s);break;case 13:Oa(e,s),o&4&&o_(e,s),o&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=gb.bind(null,s),zb(e,s))));break;case 22:if(o=s.memoizedState!==null||Ua,!o){i=i!==null&&i.memoizedState!==null||xn,f=Ua;var h=xn;Ua=o,(xn=i)&&!h?Pa(e,s,(s.subtreeFlags&8772)!==0):Oa(e,s),Ua=f,xn=h}break;case 30:break;default:Oa(e,s)}}function a_(e){var i=e.alternate;i!==null&&(e.alternate=null,a_(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Fo(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sn=null,ai=!1;function Na(e,i,s){for(s=s.child;s!==null;)s_(e,i,s),s=s.sibling}function s_(e,i,s){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(wt,s)}catch{}switch(s.tag){case 26:xn||aa(s,i),Na(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:xn||aa(s,i);var o=sn,f=ai;_s(s.type)&&(sn=s.stateNode,ai=!1),Na(e,i,s),xl(s.stateNode),sn=o,ai=f;break;case 5:xn||aa(s,i);case 6:if(o=sn,f=ai,sn=null,Na(e,i,s),sn=o,ai=f,sn!==null)if(ai)try{(sn.nodeType===9?sn.body:sn.nodeName==="HTML"?sn.ownerDocument.body:sn).removeChild(s.stateNode)}catch(h){Ve(s,i,h)}else try{sn.removeChild(s.stateNode)}catch(h){Ve(s,i,h)}break;case 18:sn!==null&&(ai?(e=sn,Q_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),to(e)):Q_(sn,s.stateNode));break;case 4:o=sn,f=ai,sn=s.stateNode.containerInfo,ai=!0,Na(e,i,s),sn=o,ai=f;break;case 0:case 11:case 14:case 15:us(2,s,i),xn||us(4,s,i),Na(e,i,s);break;case 1:xn||(aa(s,i),o=s.stateNode,typeof o.componentWillUnmount=="function"&&J0(s,i,o)),Na(e,i,s);break;case 21:Na(e,i,s);break;case 22:xn=(o=xn)||s.memoizedState!==null,Na(e,i,s),xn=o;break;default:Na(e,i,s)}}function r_(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{to(e)}catch(s){Ve(i,i.return,s)}}}function o_(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{to(e)}catch(s){Ve(i,i.return,s)}}function lb(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new n_),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new n_),i;default:throw Error(a(435,e.tag))}}function Hc(e,i){var s=lb(e);i.forEach(function(o){if(!s.has(o)){s.add(o);var f=_b.bind(null,e,o);o.then(f,f)}})}function si(e,i){var s=i.deletions;if(s!==null)for(var o=0;o<s.length;o++){var f=s[o],h=e,y=i,D=y;t:for(;D!==null;){switch(D.tag){case 27:if(_s(D.type)){sn=D.stateNode,ai=!1;break t}break;case 5:sn=D.stateNode,ai=!1;break t;case 3:case 4:sn=D.stateNode.containerInfo,ai=!0;break t}D=D.return}if(sn===null)throw Error(a(160));s_(h,y,f),sn=null,ai=!1,h=f.alternate,h!==null&&(h.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)l_(i,e),i=i.sibling}var Wi=null;function l_(e,i){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:si(i,e),ri(e),o&4&&(us(3,e,e.return),cl(3,e),us(5,e,e.return));break;case 1:si(i,e),ri(e),o&512&&(xn||s===null||aa(s,s.return)),o&64&&Ua&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var f=Wi;if(si(i,e),ri(e),o&512&&(xn||s===null||aa(s,s.return)),o&4){var h=s!==null?s.memoizedState:null;if(o=e.memoizedState,s===null)if(o===null)if(e.stateNode===null){t:{o=e.type,s=e.memoizedProps,f=f.ownerDocument||f;e:switch(o){case"title":h=f.getElementsByTagName("title")[0],(!h||h[zs]||h[dn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=f.createElement(o),f.head.insertBefore(h,f.querySelector("head > title"))),zn(h,o,s),h[dn]=e,q(h),o=h;break t;case"link":var y=lv("link","href",f).get(o+(s.href||""));if(y){for(var D=0;D<y.length;D++)if(h=y[D],h.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&h.getAttribute("rel")===(s.rel==null?null:s.rel)&&h.getAttribute("title")===(s.title==null?null:s.title)&&h.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){y.splice(D,1);break e}}h=f.createElement(o),zn(h,o,s),f.head.appendChild(h);break;case"meta":if(y=lv("meta","content",f).get(o+(s.content||""))){for(D=0;D<y.length;D++)if(h=y[D],h.getAttribute("content")===(s.content==null?null:""+s.content)&&h.getAttribute("name")===(s.name==null?null:s.name)&&h.getAttribute("property")===(s.property==null?null:s.property)&&h.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&h.getAttribute("charset")===(s.charSet==null?null:s.charSet)){y.splice(D,1);break e}}h=f.createElement(o),zn(h,o,s),f.head.appendChild(h);break;default:throw Error(a(468,o))}h[dn]=e,q(h),o=h}e.stateNode=o}else cv(f,e.type,e.stateNode);else e.stateNode=ov(f,o,e.memoizedProps);else h!==o?(h===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):h.count--,o===null?cv(f,e.type,e.stateNode):ov(f,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Uh(e,e.memoizedProps,s.memoizedProps)}break;case 27:si(i,e),ri(e),o&512&&(xn||s===null||aa(s,s.return)),s!==null&&o&4&&Uh(e,e.memoizedProps,s.memoizedProps);break;case 5:if(si(i,e),ri(e),o&512&&(xn||s===null||aa(s,s.return)),e.flags&32){f=e.stateNode;try{Jn(f,"")}catch(jt){Ve(e,e.return,jt)}}o&4&&e.stateNode!=null&&(f=e.memoizedProps,Uh(e,f,s!==null?s.memoizedProps:f)),o&1024&&(Ph=!0);break;case 6:if(si(i,e),ri(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,s=e.stateNode;try{s.nodeValue=o}catch(jt){Ve(e,e.return,jt)}}break;case 3:if(nu=null,f=Wi,Wi=tu(i.containerInfo),si(i,e),Wi=f,ri(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{to(i.containerInfo)}catch(jt){Ve(e,e.return,jt)}Ph&&(Ph=!1,c_(e));break;case 4:o=Wi,Wi=tu(e.stateNode.containerInfo),si(i,e),ri(e),Wi=o;break;case 12:si(i,e),ri(e);break;case 31:si(i,e),ri(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Hc(e,o)));break;case 13:si(i,e),ri(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Vc=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Hc(e,o)));break;case 22:f=e.memoizedState!==null;var k=s!==null&&s.memoizedState!==null,at=Ua,mt=xn;if(Ua=at||f,xn=mt||k,si(i,e),xn=mt,Ua=at,ri(e),o&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||k||Ua||xn||Js(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){k=s=i;try{if(h=k.stateNode,f)y=h.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{D=k.stateNode;var xt=k.memoizedProps.style,rt=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;D.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(jt){Ve(k,k.return,jt)}}}else if(i.tag===6){if(s===null){k=i;try{k.stateNode.nodeValue=f?"":k.memoizedProps}catch(jt){Ve(k,k.return,jt)}}}else if(i.tag===18){if(s===null){k=i;try{var ut=k.stateNode;f?J_(ut,!0):J_(k.stateNode,!1)}catch(jt){Ve(k,k.return,jt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,Hc(e,s))));break;case 19:si(i,e),ri(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Hc(e,o)));break;case 30:break;case 21:break;default:si(i,e),ri(e)}}function ri(e){var i=e.flags;if(i&2){try{for(var s,o=e.return;o!==null;){if(t_(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,h=Nh(e);Bc(e,h,f);break;case 5:var y=s.stateNode;s.flags&32&&(Jn(y,""),s.flags&=-33);var D=Nh(e);Bc(e,D,y);break;case 3:case 4:var k=s.stateNode.containerInfo,at=Nh(e);Oh(e,at,k);break;default:throw Error(a(161))}}catch(mt){Ve(e,e.return,mt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function c_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;c_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Oa(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)i_(e,i.alternate,i),i=i.sibling}function Js(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:us(4,i,i.return),Js(i);break;case 1:aa(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&J0(i,i.return,s),Js(i);break;case 27:xl(i.stateNode);case 26:case 5:aa(i,i.return),Js(i);break;case 22:i.memoizedState===null&&Js(i);break;case 30:Js(i);break;default:Js(i)}e=e.sibling}}function Pa(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,f=e,h=i,y=h.flags;switch(h.tag){case 0:case 11:case 15:Pa(f,h,s),cl(4,h);break;case 1:if(Pa(f,h,s),o=h,f=o.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(at){Ve(o,o.return,at)}if(o=h,f=o.updateQueue,f!==null){var D=o.stateNode;try{var k=f.shared.hiddenCallbacks;if(k!==null)for(f.shared.hiddenCallbacks=null,f=0;f<k.length;f++)Hg(k[f],D)}catch(at){Ve(o,o.return,at)}}s&&y&64&&Q0(h),ul(h,h.return);break;case 27:e_(h);case 26:case 5:Pa(f,h,s),s&&o===null&&y&4&&$0(h),ul(h,h.return);break;case 12:Pa(f,h,s);break;case 31:Pa(f,h,s),s&&y&4&&r_(f,h);break;case 13:Pa(f,h,s),s&&y&4&&o_(f,h);break;case 22:h.memoizedState===null&&Pa(f,h,s),ul(h,h.return);break;case 30:break;default:Pa(f,h,s)}i=i.sibling}}function zh(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Ko(s))}function Ih(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Ko(e))}function qi(e,i,s,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)u_(e,i,s,o),i=i.sibling}function u_(e,i,s,o){var f=i.flags;switch(i.tag){case 0:case 11:case 15:qi(e,i,s,o),f&2048&&cl(9,i);break;case 1:qi(e,i,s,o);break;case 3:qi(e,i,s,o),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Ko(e)));break;case 12:if(f&2048){qi(e,i,s,o),e=i.stateNode;try{var h=i.memoizedProps,y=h.id,D=h.onPostCommit;typeof D=="function"&&D(y,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){Ve(i,i.return,k)}}else qi(e,i,s,o);break;case 31:qi(e,i,s,o);break;case 13:qi(e,i,s,o);break;case 23:break;case 22:h=i.stateNode,y=i.alternate,i.memoizedState!==null?h._visibility&2?qi(e,i,s,o):fl(e,i):h._visibility&2?qi(e,i,s,o):(h._visibility|=2,kr(e,i,s,o,(i.subtreeFlags&10256)!==0||!1)),f&2048&&zh(y,i);break;case 24:qi(e,i,s,o),f&2048&&Ih(i.alternate,i);break;default:qi(e,i,s,o)}}function kr(e,i,s,o,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=e,y=i,D=s,k=o,at=y.flags;switch(y.tag){case 0:case 11:case 15:kr(h,y,D,k,f),cl(8,y);break;case 23:break;case 22:var mt=y.stateNode;y.memoizedState!==null?mt._visibility&2?kr(h,y,D,k,f):fl(h,y):(mt._visibility|=2,kr(h,y,D,k,f)),f&&at&2048&&zh(y.alternate,y);break;case 24:kr(h,y,D,k,f),f&&at&2048&&Ih(y.alternate,y);break;default:kr(h,y,D,k,f)}i=i.sibling}}function fl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,o=i,f=o.flags;switch(o.tag){case 22:fl(s,o),f&2048&&zh(o.alternate,o);break;case 24:fl(s,o),f&2048&&Ih(o.alternate,o);break;default:fl(s,o)}i=i.sibling}}var hl=8192;function Xr(e,i,s){if(e.subtreeFlags&hl)for(e=e.child;e!==null;)f_(e,i,s),e=e.sibling}function f_(e,i,s){switch(e.tag){case 26:Xr(e,i,s),e.flags&hl&&e.memoizedState!==null&&Yb(s,Wi,e.memoizedState,e.memoizedProps);break;case 5:Xr(e,i,s);break;case 3:case 4:var o=Wi;Wi=tu(e.stateNode.containerInfo),Xr(e,i,s),Wi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=hl,hl=16777216,Xr(e,i,s),hl=o):Xr(e,i,s));break;default:Xr(e,i,s)}}function h_(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function dl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];Rn=o,p_(o,e)}h_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)d_(e),e=e.sibling}function d_(e){switch(e.tag){case 0:case 11:case 15:dl(e),e.flags&2048&&us(9,e,e.return);break;case 3:dl(e);break;case 12:dl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Gc(e)):dl(e);break;default:dl(e)}}function Gc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];Rn=o,p_(o,e)}h_(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:us(8,i,i.return),Gc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Gc(i));break;default:Gc(i)}e=e.sibling}}function p_(e,i){for(;Rn!==null;){var s=Rn;switch(s.tag){case 0:case 11:case 15:us(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Ko(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,Rn=o;else t:for(s=e;Rn!==null;){o=Rn;var f=o.sibling,h=o.return;if(a_(o),o===s){Rn=null;break t}if(f!==null){f.return=h,Rn=f;break t}Rn=h}}}var cb={getCacheForType:function(e){var i=On(gn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return On(gn).controller.signal}},ub=typeof WeakMap=="function"?WeakMap:Map,Fe=0,Ze=null,Ee=null,we=0,Ge=0,vi=null,fs=!1,jr=!1,Fh=!1,za=0,ln=0,hs=0,$s=0,Bh=0,xi=0,Wr=0,pl=null,oi=null,Hh=!1,Vc=0,m_=0,kc=1/0,Xc=null,ds=null,Mn=0,ps=null,qr=null,Ia=0,Gh=0,Vh=null,g_=null,ml=0,kh=null;function yi(){return(Fe&2)!==0&&we!==0?we&-we:P.T!==null?Zh():ea()}function __(){if(xi===0)if((we&536870912)===0||Ce){var e=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),xi=e}else xi=536870912;return e=gi.current,e!==null&&(e.flags|=32),xi}function li(e,i,s){(e===Ze&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)&&(Yr(e,0),ms(e,we,xi,!1)),Zn(e,s),((Fe&2)===0||e!==Ze)&&(e===Ze&&((Fe&2)===0&&($s|=s),ln===4&&ms(e,we,xi,!1)),sa(e))}function v_(e,i,s){if((Fe&6)!==0)throw Error(a(327));var o=!s&&(i&127)===0&&(i&e.expiredLanes)===0||Vt(e,i),f=o?db(e,i):jh(e,i,!0),h=o;do{if(f===0){jr&&!o&&ms(e,i,0,!1);break}else{if(s=e.current.alternate,h&&!fb(s)){f=jh(e,i,!1),h=!1;continue}if(f===2){if(h=i,e.errorRecoveryDisabledLanes&h)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){i=y;t:{var D=e;f=pl;var k=D.current.memoizedState.isDehydrated;if(k&&(Yr(D,y).flags|=256),y=jh(D,y,!1),y!==2){if(Fh&&!k){D.errorRecoveryDisabledLanes|=h,$s|=h,f=4;break t}h=oi,oi=f,h!==null&&(oi===null?oi=h:oi.push.apply(oi,h))}f=y}if(h=!1,f!==2)continue}}if(f===1){Yr(e,0),ms(e,i,0,!0);break}t:{switch(o=e,h=f,h){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:ms(o,i,xi,!fs);break t;case 2:oi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Vc+300-E(),10<f)){if(ms(o,i,xi,!fs),ht(o,0,!0)!==0)break t;Ia=i,o.timeoutHandle=Z_(x_.bind(null,o,s,oi,Xc,Hh,i,xi,$s,Wr,fs,h,"Throttled",-0,0),f);break t}x_(o,s,oi,Xc,Hh,i,xi,$s,Wr,fs,h,null,-0,0)}}break}while(!0);sa(e)}function x_(e,i,s,o,f,h,y,D,k,at,mt,xt,rt,ut){if(e.timeoutHandle=-1,xt=i.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ba},f_(i,h,xt);var jt=(h&62914560)===h?Vc-E():(h&4194048)===h?m_-E():0;if(jt=Zb(xt,jt),jt!==null){Ia=h,e.cancelPendingCommit=jt(w_.bind(null,e,i,h,s,o,f,y,D,k,mt,xt,null,rt,ut)),ms(e,h,y,!at);return}}w_(e,i,h,s,o,f,y,D,k)}function fb(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var f=s[o],h=f.getSnapshot;f=f.value;try{if(!pi(h(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ms(e,i,s,o){i&=~Bh,i&=~$s,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var f=i;0<f;){var h=31-zt(f),y=1<<h;o[h]=-1,f&=~y}s!==0&&Io(e,s,i)}function jc(){return(Fe&6)===0?(gl(0),!1):!0}function Xh(){if(Ee!==null){if(Ge===0)var e=Ee.return;else e=Ee,Aa=Xs=null,rh(e),Fr=null,Jo=0,e=Ee;for(;e!==null;)K0(e.alternate,e),e=e.return;Ee=null}}function Yr(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,Lb(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Ia=0,Xh(),Ze=e,Ee=s=Ea(e.current,null),we=i,Ge=0,vi=null,fs=!1,jr=Vt(e,i),Fh=!1,Wr=xi=Bh=$s=hs=ln=0,oi=pl=null,Hh=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var f=31-zt(o),h=1<<f;i|=e[f],o&=~h}return za=i,hc(),s}function y_(e,i){de=null,P.H=rl,i===Ir||i===yc?(i=zg(),Ge=3):i===Yf?(i=zg(),Ge=4):Ge=i===bh?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,vi=i,Ee===null&&(ln=1,Oc(e,wi(i,e.current)))}function S_(){var e=gi.current;return e===null?!0:(we&4194048)===we?Li===null:(we&62914560)===we||(we&536870912)!==0?e===Li:!1}function b_(){var e=P.H;return P.H=rl,e===null?rl:e}function M_(){var e=P.A;return P.A=cb,e}function Wc(){ln=4,fs||(we&4194048)!==we&&gi.current!==null||(jr=!0),(hs&134217727)===0&&($s&134217727)===0||Ze===null||ms(Ze,we,xi,!1)}function jh(e,i,s){var o=Fe;Fe|=2;var f=b_(),h=M_();(Ze!==e||we!==i)&&(Xc=null,Yr(e,i)),i=!1;var y=ln;t:do try{if(Ge!==0&&Ee!==null){var D=Ee,k=vi;switch(Ge){case 8:Xh(),y=6;break t;case 3:case 2:case 9:case 6:gi.current===null&&(i=!0);var at=Ge;if(Ge=0,vi=null,Zr(e,D,k,at),s&&jr){y=0;break t}break;default:at=Ge,Ge=0,vi=null,Zr(e,D,k,at)}}hb(),y=ln;break}catch(mt){y_(e,mt)}while(!0);return i&&e.shellSuspendCounter++,Aa=Xs=null,Fe=o,P.H=f,P.A=h,Ee===null&&(Ze=null,we=0,hc()),y}function hb(){for(;Ee!==null;)E_(Ee)}function db(e,i){var s=Fe;Fe|=2;var o=b_(),f=M_();Ze!==e||we!==i?(Xc=null,kc=E()+500,Yr(e,i)):jr=Vt(e,i);t:do try{if(Ge!==0&&Ee!==null){i=Ee;var h=vi;e:switch(Ge){case 1:Ge=0,vi=null,Zr(e,i,h,1);break;case 2:case 9:if(Og(h)){Ge=0,vi=null,T_(i);break}i=function(){Ge!==2&&Ge!==9||Ze!==e||(Ge=7),sa(e)},h.then(i,i);break t;case 3:Ge=7;break t;case 4:Ge=5;break t;case 7:Og(h)?(Ge=0,vi=null,T_(i)):(Ge=0,vi=null,Zr(e,i,h,7));break;case 5:var y=null;switch(Ee.tag){case 26:y=Ee.memoizedState;case 5:case 27:var D=Ee;if(y?uv(y):D.stateNode.complete){Ge=0,vi=null;var k=D.sibling;if(k!==null)Ee=k;else{var at=D.return;at!==null?(Ee=at,qc(at)):Ee=null}break e}}Ge=0,vi=null,Zr(e,i,h,5);break;case 6:Ge=0,vi=null,Zr(e,i,h,6);break;case 8:Xh(),ln=6;break t;default:throw Error(a(462))}}pb();break}catch(mt){y_(e,mt)}while(!0);return Aa=Xs=null,P.H=o,P.A=f,Fe=s,Ee!==null?0:(Ze=null,we=0,hc(),ln)}function pb(){for(;Ee!==null&&!It();)E_(Ee)}function E_(e){var i=Y0(e.alternate,e,za);e.memoizedProps=e.pendingProps,i===null?qc(e):Ee=i}function T_(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=V0(s,i,i.pendingProps,i.type,void 0,we);break;case 11:i=V0(s,i,i.pendingProps,i.type.render,i.ref,we);break;case 5:rh(i);default:K0(s,i),i=Ee=Mg(i,za),i=Y0(s,i,za)}e.memoizedProps=e.pendingProps,i===null?qc(e):Ee=i}function Zr(e,i,s,o){Aa=Xs=null,rh(i),Fr=null,Jo=0;var f=i.return;try{if(nb(e,f,i,s,we)){ln=1,Oc(e,wi(s,e.current)),Ee=null;return}}catch(h){if(f!==null)throw Ee=f,h;ln=1,Oc(e,wi(s,e.current)),Ee=null;return}i.flags&32768?(Ce||o===1?e=!0:jr||(we&536870912)!==0?e=!1:(fs=e=!0,(o===2||o===9||o===3||o===6)&&(o=gi.current,o!==null&&o.tag===13&&(o.flags|=16384))),A_(i,e)):qc(i)}function qc(e){var i=e;do{if((i.flags&32768)!==0){A_(i,fs);return}e=i.return;var s=sb(i.alternate,i,za);if(s!==null){Ee=s;return}if(i=i.sibling,i!==null){Ee=i;return}Ee=i=e}while(i!==null);ln===0&&(ln=5)}function A_(e,i){do{var s=rb(e.alternate,e);if(s!==null){s.flags&=32767,Ee=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){Ee=e;return}Ee=e=s}while(e!==null);ln=6,Ee=null}function w_(e,i,s,o,f,h,y,D,k){e.cancelPendingCommit=null;do Yc();while(Mn!==0);if((Fe&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(h=i.lanes|i.childLanes,h|=Nf,Gi(e,s,h,y,D,k),e===Ze&&(Ee=Ze=null,we=0),qr=i,ps=e,Ia=s,Gh=h,Vh=f,g_=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,vb(dt,function(){return U_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,f=H.p,H.p=2,y=Fe,Fe|=4;try{ob(e,i,s)}finally{Fe=y,H.p=f,P.T=o}}Mn=1,R_(),C_(),D_()}}function R_(){if(Mn===1){Mn=0;var e=ps,i=qr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=P.T,P.T=null;var o=H.p;H.p=2;var f=Fe;Fe|=4;try{l_(i,e);var h=id,y=pg(e.containerInfo),D=h.focusedElem,k=h.selectionRange;if(y!==D&&D&&D.ownerDocument&&dg(D.ownerDocument.documentElement,D)){if(k!==null&&Rf(D)){var at=k.start,mt=k.end;if(mt===void 0&&(mt=at),"selectionStart"in D)D.selectionStart=at,D.selectionEnd=Math.min(mt,D.value.length);else{var xt=D.ownerDocument||document,rt=xt&&xt.defaultView||window;if(rt.getSelection){var ut=rt.getSelection(),jt=D.textContent.length,ie=Math.min(k.start,jt),qe=k.end===void 0?ie:Math.min(k.end,jt);!ut.extend&&ie>qe&&(y=qe,qe=ie,ie=y);var J=hg(D,ie),W=hg(D,qe);if(J&&W&&(ut.rangeCount!==1||ut.anchorNode!==J.node||ut.anchorOffset!==J.offset||ut.focusNode!==W.node||ut.focusOffset!==W.offset)){var it=xt.createRange();it.setStart(J.node,J.offset),ut.removeAllRanges(),ie>qe?(ut.addRange(it),ut.extend(W.node,W.offset)):(it.setEnd(W.node,W.offset),ut.addRange(it))}}}}for(xt=[],ut=D;ut=ut.parentNode;)ut.nodeType===1&&xt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<xt.length;D++){var _t=xt[D];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}ru=!!nd,id=nd=null}finally{Fe=f,H.p=o,P.T=s}}e.current=i,Mn=2}}function C_(){if(Mn===2){Mn=0;var e=ps,i=qr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=P.T,P.T=null;var o=H.p;H.p=2;var f=Fe;Fe|=4;try{i_(e,i.alternate,i)}finally{Fe=f,H.p=o,P.T=s}}Mn=3}}function D_(){if(Mn===4||Mn===3){Mn=0,z();var e=ps,i=qr,s=Ia,o=g_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Mn=5:(Mn=0,qr=ps=null,L_(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(ds=null),Sr(s),i=i.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(wt,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=P.T,f=H.p,H.p=2,P.T=null;try{for(var h=e.onRecoverableError,y=0;y<o.length;y++){var D=o[y];h(D.value,{componentStack:D.stack})}}finally{P.T=i,H.p=f}}(Ia&3)!==0&&Yc(),sa(e),f=e.pendingLanes,(s&261930)!==0&&(f&42)!==0?e===kh?ml++:(ml=0,kh=e):ml=0,gl(0)}}function L_(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Ko(i)))}function Yc(){return R_(),C_(),D_(),U_()}function U_(){if(Mn!==5)return!1;var e=ps,i=Gh;Gh=0;var s=Sr(Ia),o=P.T,f=H.p;try{H.p=32>s?32:s,P.T=null,s=Vh,Vh=null;var h=ps,y=Ia;if(Mn=0,qr=ps=null,Ia=0,(Fe&6)!==0)throw Error(a(331));var D=Fe;if(Fe|=4,d_(h.current),u_(h,h.current,y,s),Fe=D,gl(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(wt,h)}catch{}return!0}finally{H.p=f,P.T=o,L_(e,i)}}function N_(e,i,s){i=wi(s,i),i=Sh(e.stateNode,i,2),e=os(e,i,2),e!==null&&(Zn(e,2),sa(e))}function Ve(e,i,s){if(e.tag===3)N_(e,e,s);else for(;i!==null;){if(i.tag===3){N_(i,e,s);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ds===null||!ds.has(o))){e=wi(s,e),s=O0(2),o=os(i,s,2),o!==null&&(P0(s,o,i,e),Zn(o,2),sa(o));break}}i=i.return}}function Wh(e,i,s){var o=e.pingCache;if(o===null){o=e.pingCache=new ub;var f=new Set;o.set(i,f)}else f=o.get(i),f===void 0&&(f=new Set,o.set(i,f));f.has(s)||(Fh=!0,f.add(s),e=mb.bind(null,e,i,s),i.then(e,e))}function mb(e,i,s){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Ze===e&&(we&s)===s&&(ln===4||ln===3&&(we&62914560)===we&&300>E()-Vc?(Fe&2)===0&&Yr(e,0):Bh|=s,Wr===we&&(Wr=0)),sa(e)}function O_(e,i){i===0&&(i=He()),e=Gs(e,i),e!==null&&(Zn(e,i),sa(e))}function gb(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),O_(e,s)}function _b(e,i){var s=0;switch(e.tag){case 31:case 13:var o=e.stateNode,f=e.memoizedState;f!==null&&(s=f.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(i),O_(e,s)}function vb(e,i){return re(e,i)}var Zc=null,Kr=null,qh=!1,Kc=!1,Yh=!1,gs=0;function sa(e){e!==Kr&&e.next===null&&(Kr===null?Zc=Kr=e:Kr=Kr.next=e),Kc=!0,qh||(qh=!0,yb())}function gl(e,i){if(!Yh&&Kc){Yh=!0;do for(var s=!1,o=Zc;o!==null;){if(e!==0){var f=o.pendingLanes;if(f===0)var h=0;else{var y=o.suspendedLanes,D=o.pingedLanes;h=(1<<31-zt(42|e)+1)-1,h&=f&~(y&~D),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(s=!0,F_(o,h))}else h=we,h=ht(o,o===Ze?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Vt(o,h)||(s=!0,F_(o,h));o=o.next}while(s);Yh=!1}}function xb(){P_()}function P_(){Kc=qh=!1;var e=0;gs!==0&&Db()&&(e=gs);for(var i=E(),s=null,o=Zc;o!==null;){var f=o.next,h=z_(o,i);h===0?(o.next=null,s===null?Zc=f:s.next=f,f===null&&(Kr=s)):(s=o,(e!==0||(h&3)!==0)&&(Kc=!0)),o=f}Mn!==0&&Mn!==5||gl(e),gs!==0&&(gs=0)}function z_(e,i){for(var s=e.suspendedLanes,o=e.pingedLanes,f=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var y=31-zt(h),D=1<<y,k=f[y];k===-1?((D&s)===0||(D&o)!==0)&&(f[y]=oe(D,i)):k<=i&&(e.expiredLanes|=D),h&=~D}if(i=Ze,s=we,s=ht(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,s===0||e===i&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&De(o),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Vt(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(o!==null&&De(o),Sr(s)){case 2:case 8:s=St;break;case 32:s=dt;break;case 268435456:s=Dt;break;default:s=dt}return o=I_.bind(null,e),s=re(s,o),e.callbackPriority=i,e.callbackNode=s,i}return o!==null&&o!==null&&De(o),e.callbackPriority=2,e.callbackNode=null,2}function I_(e,i){if(Mn!==0&&Mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Yc()&&e.callbackNode!==s)return null;var o=we;return o=ht(e,e===Ze?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(v_(e,o,i),z_(e,E()),e.callbackNode!=null&&e.callbackNode===s?I_.bind(null,e):null)}function F_(e,i){if(Yc())return null;v_(e,i,!0)}function yb(){Ub(function(){(Fe&6)!==0?re(gt,xb):P_()})}function Zh(){if(gs===0){var e=Pr;e===0&&(e=Ct,Ct<<=1,(Ct&261888)===0&&(Ct=256)),gs=e}return gs}function B_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ac(""+e)}function H_(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function Sb(e,i,s,o,f){if(i==="submit"&&s&&s.stateNode===f){var h=B_((f[Sn]||null).action),y=o.submitter;y&&(i=(i=y[Sn]||null)?B_(i.formAction):y.getAttribute("formAction"),i!==null&&(h=i,y=null));var D=new lc("action","action",null,o,f);e.push({event:D,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(gs!==0){var k=y?H_(f,y):new FormData(f);mh(s,{pending:!0,data:k,method:f.method,action:h},null,k)}}else typeof h=="function"&&(D.preventDefault(),k=y?H_(f,y):new FormData(f),mh(s,{pending:!0,data:k,method:f.method,action:h},h,k))},currentTarget:f}]})}}for(var Kh=0;Kh<Uf.length;Kh++){var Qh=Uf[Kh],bb=Qh.toLowerCase(),Mb=Qh[0].toUpperCase()+Qh.slice(1);ji(bb,"on"+Mb)}ji(_g,"onAnimationEnd"),ji(vg,"onAnimationIteration"),ji(xg,"onAnimationStart"),ji("dblclick","onDoubleClick"),ji("focusin","onFocus"),ji("focusout","onBlur"),ji(BS,"onTransitionRun"),ji(HS,"onTransitionStart"),ji(GS,"onTransitionCancel"),ji(yg,"onTransitionEnd"),Lt("onMouseEnter",["mouseout","mouseover"]),Lt("onMouseLeave",["mouseout","mouseover"]),Lt("onPointerEnter",["pointerout","pointerover"]),Lt("onPointerLeave",["pointerout","pointerover"]),nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),nt("onBeforeInput",["compositionend","keypress","textInput","paste"]),nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _l="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Eb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_l));function G_(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],f=o.event;o=o.listeners;t:{var h=void 0;if(i)for(var y=o.length-1;0<=y;y--){var D=o[y],k=D.instance,at=D.currentTarget;if(D=D.listener,k!==h&&f.isPropagationStopped())break t;h=D,f.currentTarget=at;try{h(f)}catch(mt){fc(mt)}f.currentTarget=null,h=k}else for(y=0;y<o.length;y++){if(D=o[y],k=D.instance,at=D.currentTarget,D=D.listener,k!==h&&f.isPropagationStopped())break t;h=D,f.currentTarget=at;try{h(f)}catch(mt){fc(mt)}f.currentTarget=null,h=k}}}}function Te(e,i){var s=i[Qa];s===void 0&&(s=i[Qa]=new Set);var o=e+"__bubble";s.has(o)||(V_(i,e,2,!1),s.add(o))}function Jh(e,i,s){var o=0;i&&(o|=4),V_(s,e,o,i)}var Qc="_reactListening"+Math.random().toString(36).slice(2);function $h(e){if(!e[Qc]){e[Qc]=!0,lt.forEach(function(s){s!=="selectionchange"&&(Eb.has(s)||Jh(s,!1,e),Jh(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Qc]||(i[Qc]=!0,Jh("selectionchange",!1,i))}}function V_(e,i,s,o){switch(_v(i)){case 2:var f=Jb;break;case 8:f=$b;break;default:f=pd}s=f.bind(null,i,s,e),f=void 0,!xf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),o?f!==void 0?e.addEventListener(i,s,{capture:!0,passive:f}):e.addEventListener(i,s,!0):f!==void 0?e.addEventListener(i,s,{passive:f}):e.addEventListener(i,s,!1)}function td(e,i,s,o,f){var h=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var D=o.stateNode.containerInfo;if(D===f)break;if(y===4)for(y=o.return;y!==null;){var k=y.tag;if((k===3||k===4)&&y.stateNode.containerInfo===f)return;y=y.return}for(;D!==null;){if(y=Ja(D),y===null)return;if(k=y.tag,k===5||k===6||k===26||k===27){o=h=y;continue t}D=D.parentNode}}o=o.return}qm(function(){var at=h,mt=_f(s),xt=[];t:{var rt=Sg.get(e);if(rt!==void 0){var ut=lc,jt=e;switch(e){case"keypress":if(rc(s)===0)break t;case"keydown":case"keyup":ut=_S;break;case"focusin":jt="focus",ut=Mf;break;case"focusout":jt="blur",ut=Mf;break;case"beforeblur":case"afterblur":ut=Mf;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Km;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=sS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=yS;break;case _g:case vg:case xg:ut=lS;break;case yg:ut=bS;break;case"scroll":case"scrollend":ut=iS;break;case"wheel":ut=ES;break;case"copy":case"cut":case"paste":ut=uS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Jm;break;case"toggle":case"beforetoggle":ut=AS}var ie=(i&4)!==0,qe=!ie&&(e==="scroll"||e==="scrollend"),J=ie?rt!==null?rt+"Capture":null:rt;ie=[];for(var W=at,it;W!==null;){var _t=W;if(it=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||it===null||J===null||(_t=Bo(W,J),_t!=null&&ie.push(vl(W,_t,it))),qe)break;W=W.return}0<ie.length&&(rt=new ut(rt,jt,null,s,mt),xt.push({event:rt,listeners:ie}))}}if((i&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",rt&&s!==gf&&(jt=s.relatedTarget||s.fromElement)&&(Ja(jt)||jt[ya]))break t;if((ut||rt)&&(rt=mt.window===mt?mt:(rt=mt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ut?(jt=s.relatedTarget||s.toElement,ut=at,jt=jt?Ja(jt):null,jt!==null&&(qe=c(jt),ie=jt.tag,jt!==qe||ie!==5&&ie!==27&&ie!==6)&&(jt=null)):(ut=null,jt=at),ut!==jt)){if(ie=Km,_t="onMouseLeave",J="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(ie=Jm,_t="onPointerLeave",J="onPointerEnter",W="pointer"),qe=ut==null?rt:Is(ut),it=jt==null?rt:Is(jt),rt=new ie(_t,W+"leave",ut,s,mt),rt.target=qe,rt.relatedTarget=it,_t=null,Ja(mt)===at&&(ie=new ie(J,W+"enter",jt,s,mt),ie.target=it,ie.relatedTarget=qe,_t=ie),qe=_t,ut&&jt)e:{for(ie=Tb,J=ut,W=jt,it=0,_t=J;_t;_t=ie(_t))it++;_t=0;for(var $t=W;$t;$t=ie($t))_t++;for(;0<it-_t;)J=ie(J),it--;for(;0<_t-it;)W=ie(W),_t--;for(;it--;){if(J===W||W!==null&&J===W.alternate){ie=J;break e}J=ie(J),W=ie(W)}ie=null}else ie=null;ut!==null&&k_(xt,rt,ut,ie,!1),jt!==null&&qe!==null&&k_(xt,qe,jt,ie,!0)}}t:{if(rt=at?Is(at):window,ut=rt.nodeName&&rt.nodeName.toLowerCase(),ut==="select"||ut==="input"&&rt.type==="file")var ze=rg;else if(ag(rt))if(og)ze=zS;else{ze=OS;var Zt=NS}else ut=rt.nodeName,!ut||ut.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?at&&Mr(at.elementType)&&(ze=rg):ze=PS;if(ze&&(ze=ze(e,at))){sg(xt,ze,s,mt);break t}Zt&&Zt(e,rt,at),e==="focusout"&&at&&rt.type==="number"&&at.memoizedProps.value!=null&&ki(rt,"number",rt.value)}switch(Zt=at?Is(at):window,e){case"focusin":(ag(Zt)||Zt.contentEditable==="true")&&(wr=Zt,Cf=at,qo=null);break;case"focusout":qo=Cf=wr=null;break;case"mousedown":Df=!0;break;case"contextmenu":case"mouseup":case"dragend":Df=!1,mg(xt,s,mt);break;case"selectionchange":if(FS)break;case"keydown":case"keyup":mg(xt,s,mt)}var ge;if(Tf)t:{switch(e){case"compositionstart":var Re="onCompositionStart";break t;case"compositionend":Re="onCompositionEnd";break t;case"compositionupdate":Re="onCompositionUpdate";break t}Re=void 0}else Ar?ng(e,s)&&(Re="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Re="onCompositionStart");Re&&($m&&s.locale!=="ko"&&(Ar||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&Ar&&(ge=Ym()):(ts=mt,yf="value"in ts?ts.value:ts.textContent,Ar=!0)),Zt=Jc(at,Re),0<Zt.length&&(Re=new Qm(Re,e,null,s,mt),xt.push({event:Re,listeners:Zt}),ge?Re.data=ge:(ge=ig(s),ge!==null&&(Re.data=ge)))),(ge=RS?CS(e,s):DS(e,s))&&(Re=Jc(at,"onBeforeInput"),0<Re.length&&(Zt=new Qm("onBeforeInput","beforeinput",null,s,mt),xt.push({event:Zt,listeners:Re}),Zt.data=ge)),Sb(xt,e,at,s,mt)}G_(xt,i)})}function vl(e,i,s){return{instance:e,listener:i,currentTarget:s}}function Jc(e,i){for(var s=i+"Capture",o=[];e!==null;){var f=e,h=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||h===null||(f=Bo(e,s),f!=null&&o.unshift(vl(e,f,h)),f=Bo(e,i),f!=null&&o.push(vl(e,f,h))),e.tag===3)return o;e=e.return}return[]}function Tb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function k_(e,i,s,o,f){for(var h=i._reactName,y=[];s!==null&&s!==o;){var D=s,k=D.alternate,at=D.stateNode;if(D=D.tag,k!==null&&k===o)break;D!==5&&D!==26&&D!==27||at===null||(k=at,f?(at=Bo(s,h),at!=null&&y.unshift(vl(s,at,k))):f||(at=Bo(s,h),at!=null&&y.push(vl(s,at,k)))),s=s.return}y.length!==0&&e.push({event:i,listeners:y})}var Ab=/\r\n?/g,wb=/\u0000|\uFFFD/g;function X_(e){return(typeof e=="string"?e:""+e).replace(Ab,`
`).replace(wb,"")}function j_(e,i){return i=X_(i),X_(e)===i}function We(e,i,s,o,f,h){switch(s){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||Jn(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&Jn(e,""+o);break;case"className":ue(e,"class",o);break;case"tabIndex":ue(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ue(e,s,o);break;case"style":Sa(e,o,h);break;case"data":if(i!=="object"){ue(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=ac(""+o),e.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(s==="formAction"?(i!=="input"&&We(e,i,"name",f.name,f,null),We(e,i,"formEncType",f.formEncType,f,null),We(e,i,"formMethod",f.formMethod,f,null),We(e,i,"formTarget",f.formTarget,f,null)):(We(e,i,"encType",f.encType,f,null),We(e,i,"method",f.method,f,null),We(e,i,"target",f.target,f,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=ac(""+o),e.setAttribute(s,o);break;case"onClick":o!=null&&(e.onclick=ba);break;case"onScroll":o!=null&&Te("scroll",e);break;case"onScrollEnd":o!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}s=ac(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""+o):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":o===!0?e.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,o):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(s,o):e.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(s):e.setAttribute(s,o);break;case"popover":Te("beforetoggle",e),Te("toggle",e),se(e,"popover",o);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":se(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=eS.get(s)||s,se(e,s,o))}}function ed(e,i,s,o,f,h){switch(s){case"style":Sa(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof o=="string"?Jn(e,o):(typeof o=="number"||typeof o=="bigint")&&Jn(e,""+o);break;case"onScroll":o!=null&&Te("scroll",e);break;case"onScrollEnd":o!=null&&Te("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ba);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!st.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),h=e[Sn]||null,h=h!=null?h[s]:null,typeof h=="function"&&e.removeEventListener(i,h,f),typeof o=="function")){typeof h!="function"&&h!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,o,f);break t}s in e?e[s]=o:o===!0?e.setAttribute(s,""):se(e,s,o)}}}function zn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var o=!1,f=!1,h;for(h in s)if(s.hasOwnProperty(h)){var y=s[h];if(y!=null)switch(h){case"src":o=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:We(e,i,h,y,s,null)}}f&&We(e,i,"srcSet",s.srcSet,s,null),o&&We(e,i,"src",s.src,s,null);return;case"input":Te("invalid",e);var D=h=y=f=null,k=null,at=null;for(o in s)if(s.hasOwnProperty(o)){var mt=s[o];if(mt!=null)switch(o){case"name":f=mt;break;case"type":y=mt;break;case"checked":k=mt;break;case"defaultChecked":at=mt;break;case"value":h=mt;break;case"defaultValue":D=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(a(137,i));break;default:We(e,i,o,mt,s,null)}}hi(e,h,D,k,at,y,f,!1);return;case"select":Te("invalid",e),o=y=h=null;for(f in s)if(s.hasOwnProperty(f)&&(D=s[f],D!=null))switch(f){case"value":h=D;break;case"defaultValue":y=D;break;case"multiple":o=D;default:We(e,i,f,D,s,null)}i=h,s=y,e.multiple=!!o,i!=null?di(e,!!o,i,!1):s!=null&&di(e,!!o,s,!0);return;case"textarea":Te("invalid",e),h=f=o=null;for(y in s)if(s.hasOwnProperty(y)&&(D=s[y],D!=null))switch(y){case"value":o=D;break;case"defaultValue":f=D;break;case"children":h=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(a(91));break;default:We(e,i,y,D,s,null)}pn(e,o,f,h);return;case"option":for(k in s)s.hasOwnProperty(k)&&(o=s[k],o!=null)&&(k==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":We(e,i,k,o,s,null));return;case"dialog":Te("beforetoggle",e),Te("toggle",e),Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(o=0;o<_l.length;o++)Te(_l[o],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(at in s)if(s.hasOwnProperty(at)&&(o=s[at],o!=null))switch(at){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:We(e,i,at,o,s,null)}return;default:if(Mr(i)){for(mt in s)s.hasOwnProperty(mt)&&(o=s[mt],o!==void 0&&ed(e,i,mt,o,s,void 0));return}}for(D in s)s.hasOwnProperty(D)&&(o=s[D],o!=null&&We(e,i,D,o,s,null))}function Rb(e,i,s,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,h=null,y=null,D=null,k=null,at=null,mt=null;for(ut in s){var xt=s[ut];if(s.hasOwnProperty(ut)&&xt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":k=xt;default:o.hasOwnProperty(ut)||We(e,i,ut,null,o,xt)}}for(var rt in o){var ut=o[rt];if(xt=s[rt],o.hasOwnProperty(rt)&&(ut!=null||xt!=null))switch(rt){case"type":h=ut;break;case"name":f=ut;break;case"checked":at=ut;break;case"defaultChecked":mt=ut;break;case"value":y=ut;break;case"defaultValue":D=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(a(137,i));break;default:ut!==xt&&We(e,i,rt,ut,o,xt)}}Qn(e,y,D,k,at,mt,h,f);return;case"select":ut=y=D=rt=null;for(h in s)if(k=s[h],s.hasOwnProperty(h)&&k!=null)switch(h){case"value":break;case"multiple":ut=k;default:o.hasOwnProperty(h)||We(e,i,h,null,o,k)}for(f in o)if(h=o[f],k=s[f],o.hasOwnProperty(f)&&(h!=null||k!=null))switch(f){case"value":rt=h;break;case"defaultValue":D=h;break;case"multiple":y=h;default:h!==k&&We(e,i,f,h,o,k)}i=D,s=y,o=ut,rt!=null?di(e,!!s,rt,!1):!!o!=!!s&&(i!=null?di(e,!!s,i,!0):di(e,!!s,s?[]:"",!1));return;case"textarea":ut=rt=null;for(D in s)if(f=s[D],s.hasOwnProperty(D)&&f!=null&&!o.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:We(e,i,D,null,o,f)}for(y in o)if(f=o[y],h=s[y],o.hasOwnProperty(y)&&(f!=null||h!=null))switch(y){case"value":rt=f;break;case"defaultValue":ut=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==h&&We(e,i,y,f,o,h)}Be(e,rt,ut);return;case"option":for(var jt in s)rt=s[jt],s.hasOwnProperty(jt)&&rt!=null&&!o.hasOwnProperty(jt)&&(jt==="selected"?e.selected=!1:We(e,i,jt,null,o,rt));for(k in o)rt=o[k],ut=s[k],o.hasOwnProperty(k)&&rt!==ut&&(rt!=null||ut!=null)&&(k==="selected"?e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol":We(e,i,k,rt,o,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in s)rt=s[ie],s.hasOwnProperty(ie)&&rt!=null&&!o.hasOwnProperty(ie)&&We(e,i,ie,null,o,rt);for(at in o)if(rt=o[at],ut=s[at],o.hasOwnProperty(at)&&rt!==ut&&(rt!=null||ut!=null))switch(at){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(a(137,i));break;default:We(e,i,at,rt,o,ut)}return;default:if(Mr(i)){for(var qe in s)rt=s[qe],s.hasOwnProperty(qe)&&rt!==void 0&&!o.hasOwnProperty(qe)&&ed(e,i,qe,void 0,o,rt);for(mt in o)rt=o[mt],ut=s[mt],!o.hasOwnProperty(mt)||rt===ut||rt===void 0&&ut===void 0||ed(e,i,mt,rt,o,ut);return}}for(var J in s)rt=s[J],s.hasOwnProperty(J)&&rt!=null&&!o.hasOwnProperty(J)&&We(e,i,J,null,o,rt);for(xt in o)rt=o[xt],ut=s[xt],!o.hasOwnProperty(xt)||rt===ut||rt==null&&ut==null||We(e,i,xt,rt,o,ut)}function W_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Cb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),o=0;o<s.length;o++){var f=s[o],h=f.transferSize,y=f.initiatorType,D=f.duration;if(h&&D&&W_(y)){for(y=0,D=f.responseEnd,o+=1;o<s.length;o++){var k=s[o],at=k.startTime;if(at>D)break;var mt=k.transferSize,xt=k.initiatorType;mt&&W_(xt)&&(k=k.responseEnd,y+=mt*(k<D?1:(D-at)/(k-at)))}if(--o,i+=8*(h+y)/(f.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var nd=null,id=null;function $c(e){return e.nodeType===9?e:e.ownerDocument}function q_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Y_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function ad(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var sd=null;function Db(){var e=window.event;return e&&e.type==="popstate"?e===sd?!1:(sd=e,!0):(sd=null,!1)}var Z_=typeof setTimeout=="function"?setTimeout:void 0,Lb=typeof clearTimeout=="function"?clearTimeout:void 0,K_=typeof Promise=="function"?Promise:void 0,Ub=typeof queueMicrotask=="function"?queueMicrotask:typeof K_<"u"?function(e){return K_.resolve(null).then(e).catch(Nb)}:Z_;function Nb(e){setTimeout(function(){throw e})}function _s(e){return e==="head"}function Q_(e,i){var s=i,o=0;do{var f=s.nextSibling;if(e.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(o===0){e.removeChild(f),to(i);return}o--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")o++;else if(s==="html")xl(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,xl(s);for(var h=s.firstChild;h;){var y=h.nextSibling,D=h.nodeName;h[zs]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&h.rel.toLowerCase()==="stylesheet"||s.removeChild(h),h=y}}else s==="body"&&xl(e.ownerDocument.body);s=f}while(s);to(i)}function J_(e,i){var s=e;e=0;do{var o=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),o&&o.nodeType===8)if(s=o.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=o}while(s)}function rd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":rd(s),Fo(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function Ob(e,i,s,o){for(;e.nodeType===1;){var f=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[zs])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var h=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=Ui(e.nextSibling),e===null)break}return null}function Pb(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Ui(e.nextSibling),e===null))return null;return e}function $_(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Ui(e.nextSibling),e===null))return null;return e}function od(e){return e.data==="$?"||e.data==="$~"}function ld(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function zb(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var o=function(){i(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ui(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var cd=null;function tv(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return Ui(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function ev(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function nv(e,i,s){switch(i=$c(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function xl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Fo(e)}var Ni=new Map,iv=new Set;function tu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Fa=H.d;H.d={f:Ib,r:Fb,D:Bb,C:Hb,L:Gb,m:Vb,X:Xb,S:kb,M:jb};function Ib(){var e=Fa.f(),i=jc();return e||i}function Fb(e){var i=$a(e);i!==null&&i.tag===5&&i.type==="form"?y0(i):Fa.r(e)}var Qr=typeof document>"u"?null:document;function av(e,i,s){var o=Qr;if(o&&typeof i=="string"&&i){var f=ce(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),iv.has(f)||(iv.add(f),e={rel:e,crossOrigin:s,href:i},o.querySelector(f)===null&&(i=o.createElement("link"),zn(i,"link",e),q(i),o.head.appendChild(i)))}}function Bb(e){Fa.D(e),av("dns-prefetch",e,null)}function Hb(e,i){Fa.C(e,i),av("preconnect",e,i)}function Gb(e,i,s){Fa.L(e,i,s);var o=Qr;if(o&&e&&i){var f='link[rel="preload"][as="'+ce(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+ce(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+ce(s.imageSizes)+'"]')):f+='[href="'+ce(e)+'"]';var h=f;switch(i){case"style":h=Jr(e);break;case"script":h=$r(e)}Ni.has(h)||(e=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),Ni.set(h,e),o.querySelector(f)!==null||i==="style"&&o.querySelector(yl(h))||i==="script"&&o.querySelector(Sl(h))||(i=o.createElement("link"),zn(i,"link",e),q(i),o.head.appendChild(i)))}}function Vb(e,i){Fa.m(e,i);var s=Qr;if(s&&e){var o=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+ce(o)+'"][href="'+ce(e)+'"]',h=f;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=$r(e)}if(!Ni.has(h)&&(e=_({rel:"modulepreload",href:e},i),Ni.set(h,e),s.querySelector(f)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Sl(h)))return}o=s.createElement("link"),zn(o,"link",e),q(o),s.head.appendChild(o)}}}function kb(e,i,s){Fa.S(e,i,s);var o=Qr;if(o&&e){var f=L(o).hoistableStyles,h=Jr(e);i=i||"default";var y=f.get(h);if(!y){var D={loading:0,preload:null};if(y=o.querySelector(yl(h)))D.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":i},s),(s=Ni.get(h))&&ud(e,s);var k=y=o.createElement("link");q(k),zn(k,"link",e),k._p=new Promise(function(at,mt){k.onload=at,k.onerror=mt}),k.addEventListener("load",function(){D.loading|=1}),k.addEventListener("error",function(){D.loading|=2}),D.loading|=4,eu(y,i,o)}y={type:"stylesheet",instance:y,count:1,state:D},f.set(h,y)}}}function Xb(e,i){Fa.X(e,i);var s=Qr;if(s&&e){var o=L(s).hoistableScripts,f=$r(e),h=o.get(f);h||(h=s.querySelector(Sl(f)),h||(e=_({src:e,async:!0},i),(i=Ni.get(f))&&fd(e,i),h=s.createElement("script"),q(h),zn(h,"link",e),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(f,h))}}function jb(e,i){Fa.M(e,i);var s=Qr;if(s&&e){var o=L(s).hoistableScripts,f=$r(e),h=o.get(f);h||(h=s.querySelector(Sl(f)),h||(e=_({src:e,async:!0,type:"module"},i),(i=Ni.get(f))&&fd(e,i),h=s.createElement("script"),q(h),zn(h,"link",e),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(f,h))}}function sv(e,i,s,o){var f=(f=et.current)?tu(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Jr(s.href),s=L(f).hoistableStyles,o=s.get(i),o||(o={type:"style",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Jr(s.href);var h=L(f).hoistableStyles,y=h.get(e);if(y||(f=f.ownerDocument||f,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,y),(h=f.querySelector(yl(e)))&&!h._p&&(y.instance=h,y.state.loading=5),Ni.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ni.set(e,s),h||Wb(f,e,s,y.state))),i&&o===null)throw Error(a(528,""));return y}if(i&&o!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=$r(s),s=L(f).hoistableScripts,o=s.get(i),o||(o={type:"script",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Jr(e){return'href="'+ce(e)+'"'}function yl(e){return'link[rel="stylesheet"]['+e+"]"}function rv(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Wb(e,i,s,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),zn(i,"link",s),q(i),e.head.appendChild(i))}function $r(e){return'[src="'+ce(e)+'"]'}function Sl(e){return"script[async]"+e}function ov(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+ce(s.href)+'"]');if(o)return i.instance=o,q(o),o;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),q(o),zn(o,"style",f),eu(o,s.precedence,e),i.instance=o;case"stylesheet":f=Jr(s.href);var h=e.querySelector(yl(f));if(h)return i.state.loading|=4,i.instance=h,q(h),h;o=rv(s),(f=Ni.get(f))&&ud(o,f),h=(e.ownerDocument||e).createElement("link"),q(h);var y=h;return y._p=new Promise(function(D,k){y.onload=D,y.onerror=k}),zn(h,"link",o),i.state.loading|=4,eu(h,s.precedence,e),i.instance=h;case"script":return h=$r(s.src),(f=e.querySelector(Sl(h)))?(i.instance=f,q(f),f):(o=s,(f=Ni.get(h))&&(o=_({},s),fd(o,f)),e=e.ownerDocument||e,f=e.createElement("script"),q(f),zn(f,"link",o),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,eu(o,s.precedence,e));return i.instance}function eu(e,i,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=o.length?o[o.length-1]:null,h=f,y=0;y<o.length;y++){var D=o[y];if(D.dataset.precedence===i)h=D;else if(h!==f)break}h?h.parentNode.insertBefore(e,h.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function ud(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function fd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var nu=null;function lv(e,i,s){if(nu===null){var o=new Map,f=nu=new Map;f.set(s,o)}else f=nu,o=f.get(s),o||(o=new Map,f.set(s,o));if(o.has(e))return o;for(o.set(e,null),s=s.getElementsByTagName(e),f=0;f<s.length;f++){var h=s[f];if(!(h[zs]||h[dn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var y=h.getAttribute(i)||"";y=e+y;var D=o.get(y);D?D.push(h):o.set(y,[h])}}return o}function cv(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function qb(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function uv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Yb(e,i,s,o){if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Jr(o.href),h=i.querySelector(yl(f));if(h){i=h._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=iu.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=h,q(h);return}h=i.ownerDocument||i,o=rv(o),(f=Ni.get(f))&&ud(o,f),h=h.createElement("link"),q(h);var y=h;y._p=new Promise(function(D,k){y.onload=D,y.onerror=k}),zn(h,"link",o),s.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=iu.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var hd=0;function Zb(e,i){return e.stylesheets&&e.count===0&&su(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var o=setTimeout(function(){if(e.stylesheets&&su(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+i);0<e.imgBytes&&hd===0&&(hd=62500*Cb());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&su(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>hd?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(f)}}:null}function iu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)su(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var au=null;function su(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,au=new Map,i.forEach(Kb,e),au=null,iu.call(e))}function Kb(e,i){if(!(i.state.loading&4)){var s=au.get(e);if(s)var o=s.get(null);else{s=new Map,au.set(e,s);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<f.length;h++){var y=f[h];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(s.set(y.dataset.precedence,y),o=y)}o&&s.set(null,o)}f=i.instance,y=f.getAttribute("data-precedence"),h=s.get(y)||o,h===o&&s.set(null,f),s.set(y,f),this.count++,o=iu.bind(this),f.addEventListener("load",o),f.addEventListener("error",o),h?h.parentNode.insertBefore(f,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var bl={$$typeof:U,Provider:null,Consumer:null,_currentValue:ct,_currentValue2:ct,_threadCount:0};function Qb(e,i,s,o,f,h,y,D,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Le(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Le(0),this.hiddenUpdates=Le(null),this.identifierPrefix=o,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function fv(e,i,s,o,f,h,y,D,k,at,mt,xt){return e=new Qb(e,i,s,y,k,at,mt,xt,D),i=1,h===!0&&(i|=24),h=mi(3,null,null,i),e.current=h,h.stateNode=e,i=jf(),i.refCount++,e.pooledCache=i,i.refCount++,h.memoizedState={element:o,isDehydrated:s,cache:i},Zf(h),e}function hv(e){return e?(e=Dr,e):Dr}function dv(e,i,s,o,f,h){f=hv(f),o.context===null?o.context=f:o.pendingContext=f,o=rs(i),o.payload={element:s},h=h===void 0?null:h,h!==null&&(o.callback=h),s=os(e,o,i),s!==null&&(li(s,e,i),tl(s,e,i))}function pv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function dd(e,i){pv(e,i),(e=e.alternate)&&pv(e,i)}function mv(e){if(e.tag===13||e.tag===31){var i=Gs(e,67108864);i!==null&&li(i,e,67108864),dd(e,67108864)}}function gv(e){if(e.tag===13||e.tag===31){var i=yi();i=yr(i);var s=Gs(e,i);s!==null&&li(s,e,i),dd(e,i)}}var ru=!0;function Jb(e,i,s,o){var f=P.T;P.T=null;var h=H.p;try{H.p=2,pd(e,i,s,o)}finally{H.p=h,P.T=f}}function $b(e,i,s,o){var f=P.T;P.T=null;var h=H.p;try{H.p=8,pd(e,i,s,o)}finally{H.p=h,P.T=f}}function pd(e,i,s,o){if(ru){var f=md(o);if(f===null)td(e,i,o,ou,s),vv(e,o);else if(eM(f,e,i,s,o))o.stopPropagation();else if(vv(e,o),i&4&&-1<tM.indexOf(e)){for(;f!==null;){var h=$a(f);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var y=At(h.pendingLanes);if(y!==0){var D=h;for(D.pendingLanes|=2,D.entangledLanes|=2;y;){var k=1<<31-zt(y);D.entanglements[1]|=k,y&=~k}sa(h),(Fe&6)===0&&(kc=E()+500,gl(0))}}break;case 31:case 13:D=Gs(h,2),D!==null&&li(D,h,2),jc(),dd(h,2)}if(h=md(o),h===null&&td(e,i,o,ou,s),h===f)break;f=h}f!==null&&o.stopPropagation()}else td(e,i,o,null,s)}}function md(e){return e=_f(e),gd(e)}var ou=null;function gd(e){if(ou=null,e=Ja(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=u(i),e!==null)return e;e=null}else if(s===31){if(e=d(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return ou=e,null}function _v(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(K()){case gt:return 2;case St:return 8;case dt:case qt:return 32;case Dt:return 268435456;default:return 32}default:return 32}}var _d=!1,vs=null,xs=null,ys=null,Ml=new Map,El=new Map,Ss=[],tM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vv(e,i){switch(e){case"focusin":case"focusout":vs=null;break;case"dragenter":case"dragleave":xs=null;break;case"mouseover":case"mouseout":ys=null;break;case"pointerover":case"pointerout":Ml.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":El.delete(i.pointerId)}}function Tl(e,i,s,o,f,h){return e===null||e.nativeEvent!==h?(e={blockedOn:i,domEventName:s,eventSystemFlags:o,nativeEvent:h,targetContainers:[f]},i!==null&&(i=$a(i),i!==null&&mv(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function eM(e,i,s,o,f){switch(i){case"focusin":return vs=Tl(vs,e,i,s,o,f),!0;case"dragenter":return xs=Tl(xs,e,i,s,o,f),!0;case"mouseover":return ys=Tl(ys,e,i,s,o,f),!0;case"pointerover":var h=f.pointerId;return Ml.set(h,Tl(Ml.get(h)||null,e,i,s,o,f)),!0;case"gotpointercapture":return h=f.pointerId,El.set(h,Tl(El.get(h)||null,e,i,s,o,f)),!0}return!1}function xv(e){var i=Ja(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){e.blockedOn=i,br(e.priority,function(){gv(s)});return}}else if(i===31){if(i=d(s),i!==null){e.blockedOn=i,br(e.priority,function(){gv(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lu(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=md(e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);gf=o,s.target.dispatchEvent(o),gf=null}else return i=$a(s),i!==null&&mv(i),e.blockedOn=s,!1;i.shift()}return!0}function yv(e,i,s){lu(e)&&s.delete(i)}function nM(){_d=!1,vs!==null&&lu(vs)&&(vs=null),xs!==null&&lu(xs)&&(xs=null),ys!==null&&lu(ys)&&(ys=null),Ml.forEach(yv),El.forEach(yv)}function cu(e,i){e.blockedOn===i&&(e.blockedOn=null,_d||(_d=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,nM)))}var uu=null;function Sv(e){uu!==e&&(uu=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){uu===e&&(uu=null);for(var i=0;i<e.length;i+=3){var s=e[i],o=e[i+1],f=e[i+2];if(typeof o!="function"){if(gd(o||s)===null)continue;break}var h=$a(s);h!==null&&(e.splice(i,3),i-=3,mh(h,{pending:!0,data:f,method:s.method,action:o},o,f))}}))}function to(e){function i(k){return cu(k,e)}vs!==null&&cu(vs,e),xs!==null&&cu(xs,e),ys!==null&&cu(ys,e),Ml.forEach(i),El.forEach(i);for(var s=0;s<Ss.length;s++){var o=Ss[s];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ss.length&&(s=Ss[0],s.blockedOn===null);)xv(s),s.blockedOn===null&&Ss.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var f=s[o],h=s[o+1],y=f[Sn]||null;if(typeof h=="function")y||Sv(s);else if(y){var D=null;if(h&&h.hasAttribute("formAction")){if(f=h,y=h[Sn]||null)D=y.formAction;else if(gd(f)!==null)continue}else D=y.action;typeof D=="function"?s[o+1]=D:(s.splice(o,3),o-=3),Sv(s)}}}function bv(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(y){return f=y})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),o||setTimeout(s,20)}function s(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function vd(e){this._internalRoot=e}fu.prototype.render=vd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,o=yi();dv(s,o,e,i,null,null)},fu.prototype.unmount=vd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;dv(e.current,2,null,e,null,null),jc(),i[ya]=null}};function fu(e){this._internalRoot=e}fu.prototype.unstable_scheduleHydration=function(e){if(e){var i=ea();e={blockedOn:null,target:e,priority:i};for(var s=0;s<Ss.length&&i!==0&&i<Ss[s].priority;s++);Ss.splice(s,0,e),s===0&&xv(e)}};var Mv=t.version;if(Mv!=="19.2.4")throw Error(a(527,Mv,"19.2.4"));H.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var iM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hu.isDisabled&&hu.supportsFiber)try{wt=hu.inject(iM),Tt=hu}catch{}}return wl.createRoot=function(e,i){if(!l(e))throw Error(a(299));var s=!1,o="",f=D0,h=L0,y=U0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),i=fv(e,1,!1,null,null,s,o,null,f,h,y,bv),e[ya]=i.current,$h(e),new vd(i)},wl.hydrateRoot=function(e,i,s){if(!l(e))throw Error(a(299));var o=!1,f="",h=D0,y=L0,D=U0,k=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(h=s.onUncaughtError),s.onCaughtError!==void 0&&(y=s.onCaughtError),s.onRecoverableError!==void 0&&(D=s.onRecoverableError),s.formState!==void 0&&(k=s.formState)),i=fv(e,1,!0,i,s??null,o,f,k,h,y,D,bv),i.context=hv(null),s=i.current,o=yi(),o=yr(o),f=rs(o),f.callback=null,os(s,f,o),s=o,i.current.lanes=s,Zn(i,s),sa(i),e[ya]=i.current,$h(e),new fu(i)},wl.version="19.2.4",wl}var Nv;function dM(){if(Nv)return Sd.exports;Nv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Sd.exports=hM(),Sd.exports}var pM=dM();function cn(r,t,n){return Number.isNaN(r)?t:Math.min(n,Math.max(t,r))}function Dn(r,t){return Number(Number(r).toFixed(t))}function mr(r){return JSON.parse(JSON.stringify(r))}function ny(r,t){return JSON.stringify(r)===JSON.stringify(t)}function mM(){return F.jsx("svg",{viewBox:"0 0 24 24",className:"h-5 w-5",fill:"none",stroke:"currentColor",strokeWidth:"2",children:F.jsx("path",{strokeLinecap:"round",d:"M4 6h16M4 12h16M4 18h16"})})}function gM(){return F.jsxs("svg",{viewBox:"0 0 24 24",className:"h-5 w-5",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 14 4 9l5-5"}),F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 9h10a6 6 0 0 1 0 12h-3"})]})}function _M(){return F.jsxs("svg",{viewBox:"0 0 24 24",className:"h-5 w-5",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m15 14 5-5-5-5"}),F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20 9H10a6 6 0 0 0 0 12h3"})]})}function vM(){return F.jsx("svg",{viewBox:"0 0 24 24",className:"h-5 w-5",fill:"none",stroke:"currentColor",strokeWidth:"2",children:F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 6v12M16 6v12"})})}function xM(){return F.jsx("svg",{viewBox:"0 0 24 24",className:"h-5 w-5",fill:"none",stroke:"currentColor",strokeWidth:"2",children:F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 5v14l11-7z"})})}function yM(){return F.jsxs("svg",{viewBox:"0 0 24 24",className:"h-5 w-5",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 12a8 8 0 1 0 2.6-5.9"}),F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 4v5h5"})]})}function Ov(){return F.jsx("svg",{viewBox:"0 0 24 24",className:"h-5 w-5",fill:"none",stroke:"currentColor",strokeWidth:"2",children:F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 3h6v6M9 21H3v-6M21 9V3h-6M3 15v6h6"})})}function iy({className:r="h-5 w-5"}){return F.jsx("svg",{viewBox:"0 0 24 24",className:r,fill:"none",stroke:"currentColor",strokeWidth:"2",children:F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 5v14M5 12h14"})})}function tr({open:r,className:t=""}){return F.jsx("svg",{viewBox:"0 0 24 24",className:`h-4 w-4 transition-transform ${r?"rotate-180":"rotate-0"} ${t}`,fill:"none",stroke:"currentColor",strokeWidth:"2",children:F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 9l6 6 6-6"})})}function SM({className:r="h-4 w-4"}){return F.jsxs("svg",{viewBox:"0 0 24 24",className:r,fill:"none",stroke:"currentColor",strokeWidth:"2",children:[F.jsx("circle",{cx:"12",cy:"12",r:"9"}),F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.6 9.4a2.5 2.5 0 014.6 1.3c0 1.7-2 2-2 3.4"}),F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 17h.01"})]})}const bM=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function Pv(r){const t=Date.UTC(2e3,0,1,12),n=new Date(t+r*864e5),a=String(n.getUTCHours()).padStart(2,"0"),l=String(n.getUTCMinutes()).padStart(2,"0");return`${n.getUTCDate()} ${bM[n.getUTCMonth()]} ${a}:${l} UT`}function MM({open:r,title:t,body:n,confirmLabel:a="Confirm",cancelLabel:l="Cancel",onConfirm:c,onCancel:u}){return r?F.jsxs("div",{className:"fixed inset-0 z-[100] flex items-center justify-center",children:[F.jsx("button",{type:"button",className:"absolute inset-0 bg-black/50",onClick:u,"aria-label":"Close modal"}),F.jsxs("div",{className:"relative mx-6 w-full max-w-md rounded-2xl bg-slate-950/90 p-5 text-white shadow-2xl ring-1 ring-white/10 backdrop-blur",children:[F.jsx("div",{className:"text-sm font-semibold",children:t}),n?F.jsx("div",{className:"mt-2 text-sm text-white/80",children:n}):null,F.jsxs("div",{className:"mt-5 flex justify-end gap-2",children:[F.jsx("button",{type:"button",className:"rounded-lg bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/15",onClick:u,children:l}),F.jsx("button",{type:"button",className:"rounded-lg bg-rose-500 px-3 py-2 text-sm font-semibold text-white hover:bg-rose-500/90",onClick:c,children:a})]})]})]}):null}function EM({open:r,title:t,body:n,learnMoreLabel:a="Learn more",learnMoreUrl:l,onLearnMore:c,onClose:u}){if(!r)return null;const d=!!(c||l);return F.jsxs("div",{className:"fixed inset-0 z-[100] flex items-center justify-center",children:[F.jsx("button",{type:"button",className:"absolute inset-0 bg-black/50",onClick:u,"aria-label":"Close modal"}),F.jsxs("div",{className:"relative mx-6 w-full max-w-md rounded-2xl bg-slate-950/90 p-5 text-white shadow-2xl ring-1 ring-white/10 backdrop-blur",children:[F.jsx("div",{className:"text-sm font-semibold",children:t}),n?F.jsx("div",{className:"mt-2 select-text text-sm text-white/80",children:n}):null,F.jsxs("div",{className:"mt-5 flex justify-end gap-2",children:[F.jsx("button",{type:"button",className:"rounded-lg bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/15",onClick:u,children:"Close"}),F.jsx("button",{type:"button",className:`rounded-lg px-3 py-2 text-sm font-semibold text-white ${d?"bg-sky-500 hover:bg-sky-500/90":"bg-white/10 text-white/50"}`,onClick:()=>{c?c():l&&window.open(l,"_blank","noopener,noreferrer")},disabled:!d,children:a})]})]})]})}const gm="183",Ao={ROTATE:0,DOLLY:1,PAN:2},To={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},TM=0,zv=1,AM=2,Qu=1,wM=2,Fl=3,Ns=0,ni=1,Ji=2,Wa=0,wo=1,sf=2,Iv=3,Fv=4,RM=5,cr=100,CM=101,DM=102,LM=103,UM=104,NM=200,OM=201,PM=202,zM=203,gp=204,_p=205,IM=206,FM=207,BM=208,HM=209,GM=210,VM=211,kM=212,XM=213,jM=214,vp=0,xp=1,yp=2,Do=3,Sp=4,bp=5,Mp=6,Ep=7,_m=0,WM=1,qM=2,ma=0,ay=1,sy=2,ry=3,oy=4,ly=5,cy=6,uy=7,fy=300,gr=301,Lo=302,Td=303,Ad=304,ff=306,Tp=1e3,ja=1001,Ap=1002,Gn=1003,YM=1004,du=1005,Un=1006,wd=1007,fr=1008,Ti=1009,hy=1010,dy=1011,jl=1012,vm=1013,_a=1014,ha=1015,Za=1016,xm=1017,ym=1018,Wl=1020,py=35902,my=35899,gy=1021,_y=1022,ta=1023,Ka=1026,hr=1027,vy=1028,Sm=1029,Uo=1030,bm=1031,Mm=1033,Ju=33776,$u=33777,tf=33778,ef=33779,wp=35840,Rp=35841,Cp=35842,Dp=35843,Lp=36196,Up=37492,Np=37496,Op=37488,Pp=37489,zp=37490,Ip=37491,Fp=37808,Bp=37809,Hp=37810,Gp=37811,Vp=37812,kp=37813,Xp=37814,jp=37815,Wp=37816,qp=37817,Yp=37818,Zp=37819,Kp=37820,Qp=37821,Jp=36492,$p=36494,tm=36495,em=36283,nm=36284,im=36285,am=36286,ZM=3200,xy=0,KM=1,Ls="",Ln="srgb",No="srgb-linear",rf="linear",ke="srgb",eo=7680,Bv=519,QM=512,JM=513,$M=514,Em=515,tE=516,eE=517,Tm=518,nE=519,sm=35044,Hv="300 es",da=2e3,ql=2001;function iE(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Yl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function aE(){const r=Yl("canvas");return r.style.display="block",r}const Gv={};function of(...r){const t="THREE."+r.shift();console.log(t,...r)}function yy(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=r[1];n&&n.isStackTrace?r[0]+=" "+n.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function le(...r){r=yy(r);const t="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...r)}}function Ue(...r){r=yy(r);const t="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...r)}}function lf(...r){const t=r.join(" ");t in Gv||(Gv[t]=!0,le(...r))}function sE(r,t,n){return new Promise(function(a,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const rE={[vp]:xp,[yp]:Mp,[Sp]:Ep,[Do]:bp,[xp]:vp,[Mp]:yp,[Ep]:Sp,[bp]:Do};class _r{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const l=a[t];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const l=a.slice(0);for(let c=0,u=l.length;c<u;c++)l[c].call(this,t);t.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vv=1234567;const Vl=Math.PI/180,Zl=180/Math.PI;function qa(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Wn[r&255]+Wn[r>>8&255]+Wn[r>>16&255]+Wn[r>>24&255]+"-"+Wn[t&255]+Wn[t>>8&255]+"-"+Wn[t>>16&15|64]+Wn[t>>24&255]+"-"+Wn[n&63|128]+Wn[n>>8&255]+"-"+Wn[n>>16&255]+Wn[n>>24&255]+Wn[a&255]+Wn[a>>8&255]+Wn[a>>16&255]+Wn[a>>24&255]).toLowerCase()}function he(r,t,n){return Math.max(t,Math.min(n,r))}function Am(r,t){return(r%t+t)%t}function oE(r,t,n,a,l){return a+(r-t)*(l-a)/(n-t)}function lE(r,t,n){return r!==t?(n-r)/(t-r):0}function kl(r,t,n){return(1-n)*r+n*t}function cE(r,t,n,a){return kl(r,t,1-Math.exp(-n*a))}function uE(r,t=1){return t-Math.abs(Am(r,t*2)-t)}function fE(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*(3-2*r))}function hE(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*r*(r*(r*6-15)+10))}function dE(r,t){return r+Math.floor(Math.random()*(t-r+1))}function pE(r,t){return r+Math.random()*(t-r)}function mE(r){return r*(.5-Math.random())}function gE(r){r!==void 0&&(Vv=r);let t=Vv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _E(r){return r*Vl}function vE(r){return r*Zl}function xE(r){return(r&r-1)===0&&r!==0}function yE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function SE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function bE(r,t,n,a,l){const c=Math.cos,u=Math.sin,d=c(n/2),m=u(n/2),p=c((t+a)/2),g=u((t+a)/2),_=c((t-a)/2),v=u((t-a)/2),b=c((a-t)/2),M=u((a-t)/2);switch(l){case"XYX":r.set(d*g,m*_,m*v,d*p);break;case"YZY":r.set(m*v,d*g,m*_,d*p);break;case"ZXZ":r.set(m*_,m*v,d*g,d*p);break;case"XZX":r.set(d*g,m*M,m*b,d*p);break;case"YXY":r.set(m*b,d*g,m*M,d*p);break;case"ZYZ":r.set(m*M,m*b,d*g,d*p);break;default:le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function $i(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Xe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Sy={DEG2RAD:Vl,RAD2DEG:Zl,generateUUID:qa,clamp:he,euclideanModulo:Am,mapLinear:oE,inverseLerp:lE,lerp:kl,damp:cE,pingpong:uE,smoothstep:fE,smootherstep:hE,randInt:dE,randFloat:pE,randFloatSpread:mE,seededRandom:gE,degToRad:_E,radToDeg:vE,isPowerOfTwo:xE,ceilPowerOfTwo:yE,floorPowerOfTwo:SE,setQuaternionFromProperEuler:bE,normalize:Xe,denormalize:$i};class ne{constructor(t=0,n=0){ne.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6],this.y=l[1]*n+l[4]*a+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=he(this.x,t.x,n.x),this.y=he(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=he(this.x,t,n),this.y=he(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(he(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(he(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),l=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*a-u*l+t.x,this.y=c*l+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Os{constructor(t=0,n=0,a=0,l=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=l}static slerpFlat(t,n,a,l,c,u,d){let m=a[l+0],p=a[l+1],g=a[l+2],_=a[l+3],v=c[u+0],b=c[u+1],M=c[u+2],R=c[u+3];if(_!==R||m!==v||p!==b||g!==M){let S=m*v+p*b+g*M+_*R;S<0&&(v=-v,b=-b,M=-M,R=-R,S=-S);let x=1-d;if(S<.9995){const w=Math.acos(S),U=Math.sin(w);x=Math.sin(x*w)/U,d=Math.sin(d*w)/U,m=m*x+v*d,p=p*x+b*d,g=g*x+M*d,_=_*x+R*d}else{m=m*x+v*d,p=p*x+b*d,g=g*x+M*d,_=_*x+R*d;const w=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=w,p*=w,g*=w,_*=w}}t[n]=m,t[n+1]=p,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,l,c,u){const d=a[l],m=a[l+1],p=a[l+2],g=a[l+3],_=c[u],v=c[u+1],b=c[u+2],M=c[u+3];return t[n]=d*M+g*_+m*b-p*v,t[n+1]=m*M+g*v+p*_-d*b,t[n+2]=p*M+g*b+d*v-m*_,t[n+3]=g*M-d*_-m*v-p*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,l){return this._x=t,this._y=n,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,l=t._y,c=t._z,u=t._order,d=Math.cos,m=Math.sin,p=d(a/2),g=d(l/2),_=d(c/2),v=m(a/2),b=m(l/2),M=m(c/2);switch(u){case"XYZ":this._x=v*g*_+p*b*M,this._y=p*b*_-v*g*M,this._z=p*g*M+v*b*_,this._w=p*g*_-v*b*M;break;case"YXZ":this._x=v*g*_+p*b*M,this._y=p*b*_-v*g*M,this._z=p*g*M-v*b*_,this._w=p*g*_+v*b*M;break;case"ZXY":this._x=v*g*_-p*b*M,this._y=p*b*_+v*g*M,this._z=p*g*M+v*b*_,this._w=p*g*_-v*b*M;break;case"ZYX":this._x=v*g*_-p*b*M,this._y=p*b*_+v*g*M,this._z=p*g*M-v*b*_,this._w=p*g*_+v*b*M;break;case"YZX":this._x=v*g*_+p*b*M,this._y=p*b*_+v*g*M,this._z=p*g*M-v*b*_,this._w=p*g*_-v*b*M;break;case"XZY":this._x=v*g*_-p*b*M,this._y=p*b*_-v*g*M,this._z=p*g*M+v*b*_,this._w=p*g*_+v*b*M;break;default:le("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,l=Math.sin(a);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],l=n[4],c=n[8],u=n[1],d=n[5],m=n[9],p=n[2],g=n[6],_=n[10],v=a+d+_;if(v>0){const b=.5/Math.sqrt(v+1);this._w=.25/b,this._x=(g-m)*b,this._y=(c-p)*b,this._z=(u-l)*b}else if(a>d&&a>_){const b=2*Math.sqrt(1+a-d-_);this._w=(g-m)/b,this._x=.25*b,this._y=(l+u)/b,this._z=(c+p)/b}else if(d>_){const b=2*Math.sqrt(1+d-a-_);this._w=(c-p)/b,this._x=(l+u)/b,this._y=.25*b,this._z=(m+g)/b}else{const b=2*Math.sqrt(1+_-a-d);this._w=(u-l)/b,this._x=(c+p)/b,this._y=(m+g)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const l=Math.min(1,n/a);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,l=t._y,c=t._z,u=t._w,d=n._x,m=n._y,p=n._z,g=n._w;return this._x=a*g+u*d+l*p-c*m,this._y=l*g+u*m+c*d-a*p,this._z=c*g+u*p+a*m-l*d,this._w=u*g-a*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,n){let a=t._x,l=t._y,c=t._z,u=t._w,d=this.dot(t);d<0&&(a=-a,l=-l,c=-c,u=-u,d=-d);let m=1-n;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,n=Math.sin(n*p)/g,this._x=this._x*m+a*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,n=0,a=0){X.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(kv.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(kv.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*l,this.y=c[1]*n+c[4]*a+c[7]*l,this.z=c[2]*n+c[5]*a+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,l=this.z,c=t.elements,u=1/(c[3]*n+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*l+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*l+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*l+c[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,l=this.z,c=t.x,u=t.y,d=t.z,m=t.w,p=2*(u*l-d*a),g=2*(d*n-c*l),_=2*(c*a-u*n);return this.x=n+m*p+u*_-d*g,this.y=a+m*g+d*p-c*_,this.z=l+m*_+c*g-u*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*l,this.y=c[1]*n+c[5]*a+c[9]*l,this.z=c[2]*n+c[6]*a+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=he(this.x,t.x,n.x),this.y=he(this.y,t.y,n.y),this.z=he(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=he(this.x,t,n),this.y=he(this.y,t,n),this.z=he(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(he(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,l=t.y,c=t.z,u=n.x,d=n.y,m=n.z;return this.x=l*m-c*d,this.y=c*u-a*m,this.z=a*d-l*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Rd.copy(this).projectOnVector(t),this.sub(Rd)}reflect(t){return this.sub(Rd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(he(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,l=this.z-t.z;return n*n+a*a+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const l=Math.sin(n)*t;return this.x=l*Math.sin(a),this.y=Math.cos(n)*t,this.z=l*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=l,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rd=new X,kv=new Os;class ve{constructor(t,n,a,l,c,u,d,m,p){ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,l,c,u,d,m,p)}set(t,n,a,l,c,u,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=n,g[4]=c,g[5]=m,g[6]=a,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,l=n.elements,c=this.elements,u=a[0],d=a[3],m=a[6],p=a[1],g=a[4],_=a[7],v=a[2],b=a[5],M=a[8],R=l[0],S=l[3],x=l[6],w=l[1],U=l[4],C=l[7],I=l[2],B=l[5],O=l[8];return c[0]=u*R+d*w+m*I,c[3]=u*S+d*U+m*B,c[6]=u*x+d*C+m*O,c[1]=p*R+g*w+_*I,c[4]=p*S+g*U+_*B,c[7]=p*x+g*C+_*O,c[2]=v*R+b*w+M*I,c[5]=v*S+b*U+M*B,c[8]=v*x+b*C+M*O,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],l=t[2],c=t[3],u=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return n*u*g-n*d*p-a*c*g+a*d*m+l*c*p-l*u*m}invert(){const t=this.elements,n=t[0],a=t[1],l=t[2],c=t[3],u=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*u-d*p,v=d*m-g*c,b=p*c-u*m,M=n*_+a*v+l*b;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/M;return t[0]=_*R,t[1]=(l*p-g*a)*R,t[2]=(d*a-l*u)*R,t[3]=v*R,t[4]=(g*n-l*m)*R,t[5]=(l*c-d*n)*R,t[6]=b*R,t[7]=(a*m-p*n)*R,t[8]=(u*n-a*c)*R,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,l,c,u,d){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*u+p*d)+u+t,-l*p,l*m,-l*(-p*u+m*d)+d+n,0,0,1),this}scale(t,n){return this.premultiply(Cd.makeScale(t,n)),this}rotate(t){return this.premultiply(Cd.makeRotation(-t)),this}translate(t,n){return this.premultiply(Cd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let l=0;l<9;l++)if(n[l]!==a[l])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Cd=new ve,Xv=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jv=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ME(){const r={enabled:!0,workingColorSpace:No,spaces:{},convert:function(l,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===ke&&(l.r=Ya(l.r),l.g=Ya(l.g),l.b=Ya(l.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===ke&&(l.r=Ro(l.r),l.g=Ro(l.g),l.b=Ro(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ls?rf:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,u){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return lf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return lf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[No]:{primaries:t,whitePoint:a,transfer:rf,toXYZ:Xv,fromXYZ:jv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:t,whitePoint:a,transfer:ke,toXYZ:Xv,fromXYZ:jv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),r}const Ne=ME();function Ya(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ro(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let no;class EE{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{no===void 0&&(no=Yl("canvas")),no.width=t.width,no.height=t.height;const l=no.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),a=no}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Yl("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const l=a.getImageData(0,0,t.width,t.height),c=l.data;for(let u=0;u<c.length;u++)c[u]=Ya(c[u]/255)*255;return a.putImageData(l,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ya(n[a]/255)*255):n[a]=Ya(n[a]);return{data:n,width:t.width,height:t.height}}else return le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let TE=0;class wm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TE++}),this.uuid=qa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let u=0,d=l.length;u<d;u++)l[u].isDataTexture?c.push(Dd(l[u].image)):c.push(Dd(l[u]))}else c=Dd(l);a.url=c}return n||(t.images[this.uuid]=a),a}}function Dd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?EE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(le("Texture: Unable to serialize Texture."),{})}let AE=0;const Ld=new X;class Vn extends _r{constructor(t=Vn.DEFAULT_IMAGE,n=Vn.DEFAULT_MAPPING,a=ja,l=ja,c=Un,u=fr,d=ta,m=Ti,p=Vn.DEFAULT_ANISOTROPY,g=Ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=qa(),this.name="",this.source=new wm(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ld).x}get height(){return this.source.getSize(Ld).y}get depth(){return this.source.getSize(Ld).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){le(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){le(`Texture.setValues(): property '${n}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tp:t.x=t.x-Math.floor(t.x);break;case ja:t.x=t.x<0?0:1;break;case Ap:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tp:t.y=t.y-Math.floor(t.y);break;case ja:t.y=t.y<0?0:1;break;case Ap:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=fy;Vn.DEFAULT_ANISOTROPY=1;class Ke{constructor(t=0,n=0,a=0,l=1){Ke.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,l){return this.x=t,this.y=n,this.z=a,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,l=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*l+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*l+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*l+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*l+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],v=m[1],b=m[5],M=m[9],R=m[2],S=m[6],x=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-R)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+R)<.1&&Math.abs(M+S)<.1&&Math.abs(p+b+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(p+1)/2,C=(b+1)/2,I=(x+1)/2,B=(g+v)/4,O=(_+R)/4,T=(M+S)/4;return U>C&&U>I?U<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(U),l=B/a,c=O/a):C>I?C<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),a=B/l,c=T/l):I<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),a=O/c,l=T/c),this.set(a,l,c,n),this}let w=Math.sqrt((S-M)*(S-M)+(_-R)*(_-R)+(v-g)*(v-g));return Math.abs(w)<.001&&(w=1),this.x=(S-M)/w,this.y=(_-R)/w,this.z=(v-g)/w,this.w=Math.acos((p+b+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=he(this.x,t.x,n.x),this.y=he(this.y,t.y,n.y),this.z=he(this.z,t.z,n.z),this.w=he(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=he(this.x,t,n),this.y=he(this.y,t,n),this.z=he(this.z,t,n),this.w=he(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(he(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wE extends _r{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new Ke(0,0,t,n),this.scissorTest=!1,this.viewport=new Ke(0,0,t,n),this.textures=[];const l={width:t,height:n,depth:a.depth},c=new Vn(l),u=a.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=n,this.textures[l].image.depth=a,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},t.textures[n].image);this.textures[n].source=new wm(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ga extends wE{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class by extends Vn{constructor(t=null,n=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:l},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=ja,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class RE extends Vn{constructor(t=null,n=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:l},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=ja,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class en{constructor(t,n,a,l,c,u,d,m,p,g,_,v,b,M,R,S){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,l,c,u,d,m,p,g,_,v,b,M,R,S)}set(t,n,a,l,c,u,d,m,p,g,_,v,b,M,R,S){const x=this.elements;return x[0]=t,x[4]=n,x[8]=a,x[12]=l,x[1]=c,x[5]=u,x[9]=d,x[13]=m,x[2]=p,x[6]=g,x[10]=_,x[14]=v,x[3]=b,x[7]=M,x[11]=R,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,a=t.elements,l=1/io.setFromMatrixColumn(t,0).length(),c=1/io.setFromMatrixColumn(t,1).length(),u=1/io.setFromMatrixColumn(t,2).length();return n[0]=a[0]*l,n[1]=a[1]*l,n[2]=a[2]*l,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,l=t.y,c=t.z,u=Math.cos(a),d=Math.sin(a),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=u*g,b=u*_,M=d*g,R=d*_;n[0]=m*g,n[4]=-m*_,n[8]=p,n[1]=b+M*p,n[5]=v-R*p,n[9]=-d*m,n[2]=R-v*p,n[6]=M+b*p,n[10]=u*m}else if(t.order==="YXZ"){const v=m*g,b=m*_,M=p*g,R=p*_;n[0]=v+R*d,n[4]=M*d-b,n[8]=u*p,n[1]=u*_,n[5]=u*g,n[9]=-d,n[2]=b*d-M,n[6]=R+v*d,n[10]=u*m}else if(t.order==="ZXY"){const v=m*g,b=m*_,M=p*g,R=p*_;n[0]=v-R*d,n[4]=-u*_,n[8]=M+b*d,n[1]=b+M*d,n[5]=u*g,n[9]=R-v*d,n[2]=-u*p,n[6]=d,n[10]=u*m}else if(t.order==="ZYX"){const v=u*g,b=u*_,M=d*g,R=d*_;n[0]=m*g,n[4]=M*p-b,n[8]=v*p+R,n[1]=m*_,n[5]=R*p+v,n[9]=b*p-M,n[2]=-p,n[6]=d*m,n[10]=u*m}else if(t.order==="YZX"){const v=u*m,b=u*p,M=d*m,R=d*p;n[0]=m*g,n[4]=R-v*_,n[8]=M*_+b,n[1]=_,n[5]=u*g,n[9]=-d*g,n[2]=-p*g,n[6]=b*_+M,n[10]=v-R*_}else if(t.order==="XZY"){const v=u*m,b=u*p,M=d*m,R=d*p;n[0]=m*g,n[4]=-_,n[8]=p*g,n[1]=v*_+R,n[5]=u*g,n[9]=b*_-M,n[2]=M*_-b,n[6]=d*g,n[10]=R*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(CE,t,DE)}lookAt(t,n,a){const l=this.elements;return Si.subVectors(t,n),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),Ms.crossVectors(a,Si),Ms.lengthSq()===0&&(Math.abs(a.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),Ms.crossVectors(a,Si)),Ms.normalize(),pu.crossVectors(Si,Ms),l[0]=Ms.x,l[4]=pu.x,l[8]=Si.x,l[1]=Ms.y,l[5]=pu.y,l[9]=Si.y,l[2]=Ms.z,l[6]=pu.z,l[10]=Si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,l=n.elements,c=this.elements,u=a[0],d=a[4],m=a[8],p=a[12],g=a[1],_=a[5],v=a[9],b=a[13],M=a[2],R=a[6],S=a[10],x=a[14],w=a[3],U=a[7],C=a[11],I=a[15],B=l[0],O=l[4],T=l[8],N=l[12],ot=l[1],G=l[5],Y=l[9],tt=l[13],$=l[2],Q=l[6],P=l[10],H=l[14],ct=l[3],pt=l[7],bt=l[11],A=l[15];return c[0]=u*B+d*ot+m*$+p*ct,c[4]=u*O+d*G+m*Q+p*pt,c[8]=u*T+d*Y+m*P+p*bt,c[12]=u*N+d*tt+m*H+p*A,c[1]=g*B+_*ot+v*$+b*ct,c[5]=g*O+_*G+v*Q+b*pt,c[9]=g*T+_*Y+v*P+b*bt,c[13]=g*N+_*tt+v*H+b*A,c[2]=M*B+R*ot+S*$+x*ct,c[6]=M*O+R*G+S*Q+x*pt,c[10]=M*T+R*Y+S*P+x*bt,c[14]=M*N+R*tt+S*H+x*A,c[3]=w*B+U*ot+C*$+I*ct,c[7]=w*O+U*G+C*Q+I*pt,c[11]=w*T+U*Y+C*P+I*bt,c[15]=w*N+U*tt+C*H+I*A,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],l=t[8],c=t[12],u=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],v=t[10],b=t[14],M=t[3],R=t[7],S=t[11],x=t[15],w=m*b-p*v,U=d*b-p*_,C=d*v-m*_,I=u*b-p*g,B=u*v-m*g,O=u*_-d*g;return n*(R*w-S*U+x*C)-a*(M*w-S*I+x*B)+l*(M*U-R*I+x*O)-c*(M*C-R*B+S*O)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=n,l[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],l=t[2],c=t[3],u=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],v=t[10],b=t[11],M=t[12],R=t[13],S=t[14],x=t[15],w=n*d-a*u,U=n*m-l*u,C=n*p-c*u,I=a*m-l*d,B=a*p-c*d,O=l*p-c*m,T=g*R-_*M,N=g*S-v*M,ot=g*x-b*M,G=_*S-v*R,Y=_*x-b*R,tt=v*x-b*S,$=w*tt-U*Y+C*G+I*ot-B*N+O*T;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/$;return t[0]=(d*tt-m*Y+p*G)*Q,t[1]=(l*Y-a*tt-c*G)*Q,t[2]=(R*O-S*B+x*I)*Q,t[3]=(v*B-_*O-b*I)*Q,t[4]=(m*ot-u*tt-p*N)*Q,t[5]=(n*tt-l*ot+c*N)*Q,t[6]=(S*C-M*O-x*U)*Q,t[7]=(g*O-v*C+b*U)*Q,t[8]=(u*Y-d*ot+p*T)*Q,t[9]=(a*ot-n*Y-c*T)*Q,t[10]=(M*B-R*C+x*w)*Q,t[11]=(_*C-g*B-b*w)*Q,t[12]=(d*N-u*G-m*T)*Q,t[13]=(n*G-a*N+l*T)*Q,t[14]=(R*U-M*I-S*w)*Q,t[15]=(g*I-_*U+v*w)*Q,this}scale(t){const n=this.elements,a=t.x,l=t.y,c=t.z;return n[0]*=a,n[4]*=l,n[8]*=c,n[1]*=a,n[5]*=l,n[9]*=c,n[2]*=a,n[6]*=l,n[10]*=c,n[3]*=a,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,l))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),l=Math.sin(n),c=1-a,u=t.x,d=t.y,m=t.z,p=c*u,g=c*d;return this.set(p*u+a,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+a,g*m-l*u,0,p*m-l*d,g*m+l*u,c*m*m+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,l,c,u){return this.set(1,a,c,0,t,1,u,0,n,l,1,0,0,0,0,1),this}compose(t,n,a){const l=this.elements,c=n._x,u=n._y,d=n._z,m=n._w,p=c+c,g=u+u,_=d+d,v=c*p,b=c*g,M=c*_,R=u*g,S=u*_,x=d*_,w=m*p,U=m*g,C=m*_,I=a.x,B=a.y,O=a.z;return l[0]=(1-(R+x))*I,l[1]=(b+C)*I,l[2]=(M-U)*I,l[3]=0,l[4]=(b-C)*B,l[5]=(1-(v+x))*B,l[6]=(S+w)*B,l[7]=0,l[8]=(M+U)*O,l[9]=(S-w)*O,l[10]=(1-(v+R))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,n,a){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return a.set(1,1,1),n.identity(),this;let u=io.set(l[0],l[1],l[2]).length();const d=io.set(l[4],l[5],l[6]).length(),m=io.set(l[8],l[9],l[10]).length();c<0&&(u=-u),Yi.copy(this);const p=1/u,g=1/d,_=1/m;return Yi.elements[0]*=p,Yi.elements[1]*=p,Yi.elements[2]*=p,Yi.elements[4]*=g,Yi.elements[5]*=g,Yi.elements[6]*=g,Yi.elements[8]*=_,Yi.elements[9]*=_,Yi.elements[10]*=_,n.setFromRotationMatrix(Yi),a.x=u,a.y=d,a.z=m,this}makePerspective(t,n,a,l,c,u,d=da,m=!1){const p=this.elements,g=2*c/(n-t),_=2*c/(a-l),v=(n+t)/(n-t),b=(a+l)/(a-l);let M,R;if(m)M=c/(u-c),R=u*c/(u-c);else if(d===da)M=-(u+c)/(u-c),R=-2*u*c/(u-c);else if(d===ql)M=-u/(u-c),R=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,a,l,c,u,d=da,m=!1){const p=this.elements,g=2/(n-t),_=2/(a-l),v=-(n+t)/(n-t),b=-(a+l)/(a-l);let M,R;if(m)M=1/(u-c),R=u/(u-c);else if(d===da)M=-2/(u-c),R=-(u+c)/(u-c);else if(d===ql)M=-1/(u-c),R=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=_,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=M,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let l=0;l<16;l++)if(n[l]!==a[l])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const io=new X,Yi=new en,CE=new X(0,0,0),DE=new X(1,1,1),Ms=new X,pu=new X,Si=new X,Wv=new en,qv=new Os;class va{constructor(t=0,n=0,a=0,l=va.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,l=this._order){return this._x=t,this._y=n,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const l=t.elements,c=l[0],u=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],v=l[6],b=l[10];switch(n){case"XYZ":this._y=Math.asin(he(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,b),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-he(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(he(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,b),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-he(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(he(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,b));break;case"XZY":this._z=Math.asin(-he(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,b),this._y=0);break;default:le("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return Wv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wv,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return qv.setFromEuler(this),this.setFromQuaternion(qv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}va.DEFAULT_ORDER="XYZ";class My{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let LE=0;const Yv=new X,ao=new Os,Ba=new en,mu=new X,Rl=new X,UE=new X,NE=new Os,Zv=new X(1,0,0),Kv=new X(0,1,0),Qv=new X(0,0,1),Jv={type:"added"},OE={type:"removed"},so={type:"childadded",child:null},Ud={type:"childremoved",child:null};class Tn extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=qa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const t=new X,n=new va,a=new Os,l=new X(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new ve}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new My,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return ao.setFromAxisAngle(t,n),this.quaternion.multiply(ao),this}rotateOnWorldAxis(t,n){return ao.setFromAxisAngle(t,n),this.quaternion.premultiply(ao),this}rotateX(t){return this.rotateOnAxis(Zv,t)}rotateY(t){return this.rotateOnAxis(Kv,t)}rotateZ(t){return this.rotateOnAxis(Qv,t)}translateOnAxis(t,n){return Yv.copy(t).applyQuaternion(this.quaternion),this.position.add(Yv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Zv,t)}translateY(t){return this.translateOnAxis(Kv,t)}translateZ(t){return this.translateOnAxis(Qv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ba.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?mu.copy(t):mu.set(t,n,a);const l=this.parent;this.updateWorldMatrix(!0,!1),Rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ba.lookAt(Rl,mu,this.up):Ba.lookAt(mu,Rl,this.up),this.quaternion.setFromRotationMatrix(Ba),l&&(Ba.extractRotation(l.matrixWorld),ao.setFromRotationMatrix(Ba),this.quaternion.premultiply(ao.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jv),so.child=t,this.dispatchEvent(so),so.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(OE),Ud.child=t,this.dispatchEvent(Ud),Ud.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ba.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ba.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ba),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jv),so.child=t,this.dispatchEvent(so),so.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,l=this.children.length;a<l;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const l=this.children;for(let c=0,u=l.length;c<u;c++)l[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rl,t,UE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rl,NE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,a=t.y,l=t.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*a-c[8]*l,c[13]+=a-c[1]*n-c[5]*a-c[9]*l,c[14]+=l-c[2]*n-c[6]*a-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,u=l.length;c<u;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(n){const d=u(t.geometries),m=u(t.materials),p=u(t.textures),g=u(t.images),_=u(t.shapes),v=u(t.skeletons),b=u(t.animations),M=u(t.nodes);d.length>0&&(a.geometries=d),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),b.length>0&&(a.animations=b),M.length>0&&(a.nodes=M)}return a.object=l,a;function u(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const l=t.children[a];this.add(l.clone())}return this}}Tn.DEFAULT_UP=new X(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class tn extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PE={type:"move"};class Nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let l=null,c=null,u=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){u=!0;for(const R of t.hand.values()){const S=n.getJointPose(R,a),x=this._getHandJoint(p,R);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),b=.02,M=.005;p.inputState.pinching&&v>b+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=b-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=n.getPose(t.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(PE)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new tn;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}const Ey={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Es={h:0,s:0,l:0},gu={h:0,s:0,l:0};function Od(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class be{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ne.colorSpaceToWorking(this,n),this}setRGB(t,n,a,l=Ne.workingColorSpace){return this.r=t,this.g=n,this.b=a,Ne.colorSpaceToWorking(this,l),this}setHSL(t,n,a,l=Ne.workingColorSpace){if(t=Am(t,1),n=he(n,0,1),a=he(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=Od(u,c,t+1/3),this.g=Od(u,c,t),this.b=Od(u,c,t-1/3)}return Ne.colorSpaceToWorking(this,l),this}setStyle(t,n=Ln){function a(c){c!==void 0&&parseFloat(c)<1&&le("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=l[1],d=l[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:le("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);le("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Ln){const a=Ey[t.toLowerCase()];return a!==void 0?this.setHex(a,n):le("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ya(t.r),this.g=Ya(t.g),this.b=Ya(t.b),this}copyLinearToSRGB(t){return this.r=Ro(t.r),this.g=Ro(t.g),this.b=Ro(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ln){return Ne.workingToColorSpace(qn.copy(this),t),Math.round(he(qn.r*255,0,255))*65536+Math.round(he(qn.g*255,0,255))*256+Math.round(he(qn.b*255,0,255))}getHexString(t=Ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ne.workingColorSpace){Ne.workingToColorSpace(qn.copy(this),n);const a=qn.r,l=qn.g,c=qn.b,u=Math.max(a,l,c),d=Math.min(a,l,c);let m,p;const g=(d+u)/2;if(d===u)m=0,p=0;else{const _=u-d;switch(p=g<=.5?_/(u+d):_/(2-u-d),u){case a:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-a)/_+2;break;case c:m=(a-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,n=Ne.workingColorSpace){return Ne.workingToColorSpace(qn.copy(this),n),t.r=qn.r,t.g=qn.g,t.b=qn.b,t}getStyle(t=Ln){Ne.workingToColorSpace(qn.copy(this),t);const n=qn.r,a=qn.g,l=qn.b;return t!==Ln?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(t,n,a){return this.getHSL(Es),this.setHSL(Es.h+t,Es.s+n,Es.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Es),t.getHSL(gu);const a=kl(Es.h,gu.h,n),l=kl(Es.s,gu.s,n),c=kl(Es.l,gu.l,n);return this.setHSL(a,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,l=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*l,this.g=c[1]*n+c[4]*a+c[7]*l,this.b=c[2]*n+c[5]*a+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qn=new be;be.NAMES=Ey;class zE extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new va,this.environmentIntensity=1,this.environmentRotation=new va,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Zi=new X,Ha=new X,Pd=new X,Ga=new X,ro=new X,oo=new X,$v=new X,zd=new X,Id=new X,Fd=new X,Bd=new Ke,Hd=new Ke,Gd=new Ke;class Fi{constructor(t=new X,n=new X,a=new X){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,l){l.subVectors(a,n),Zi.subVectors(t,n),l.cross(Zi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,n,a,l,c){Zi.subVectors(l,n),Ha.subVectors(a,n),Pd.subVectors(t,n);const u=Zi.dot(Zi),d=Zi.dot(Ha),m=Zi.dot(Pd),p=Ha.dot(Ha),g=Ha.dot(Pd),_=u*p-d*d;if(_===0)return c.set(0,0,0),null;const v=1/_,b=(p*m-d*g)*v,M=(u*g-d*m)*v;return c.set(1-b-M,M,b)}static containsPoint(t,n,a,l){return this.getBarycoord(t,n,a,l,Ga)===null?!1:Ga.x>=0&&Ga.y>=0&&Ga.x+Ga.y<=1}static getInterpolation(t,n,a,l,c,u,d,m){return this.getBarycoord(t,n,a,l,Ga)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ga.x),m.addScaledVector(u,Ga.y),m.addScaledVector(d,Ga.z),m)}static getInterpolatedAttribute(t,n,a,l,c,u){return Bd.setScalar(0),Hd.setScalar(0),Gd.setScalar(0),Bd.fromBufferAttribute(t,n),Hd.fromBufferAttribute(t,a),Gd.fromBufferAttribute(t,l),u.setScalar(0),u.addScaledVector(Bd,c.x),u.addScaledVector(Hd,c.y),u.addScaledVector(Gd,c.z),u}static isFrontFacing(t,n,a,l){return Zi.subVectors(a,n),Ha.subVectors(t,n),Zi.cross(Ha).dot(l)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,l){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,n,a,l){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zi.subVectors(this.c,this.b),Ha.subVectors(this.a,this.b),Zi.cross(Ha).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Fi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,l,c){return Fi.getInterpolation(t,this.a,this.b,this.c,n,a,l,c)}containsPoint(t){return Fi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,l=this.b,c=this.c;let u,d;ro.subVectors(l,a),oo.subVectors(c,a),zd.subVectors(t,a);const m=ro.dot(zd),p=oo.dot(zd);if(m<=0&&p<=0)return n.copy(a);Id.subVectors(t,l);const g=ro.dot(Id),_=oo.dot(Id);if(g>=0&&_<=g)return n.copy(l);const v=m*_-g*p;if(v<=0&&m>=0&&g<=0)return u=m/(m-g),n.copy(a).addScaledVector(ro,u);Fd.subVectors(t,c);const b=ro.dot(Fd),M=oo.dot(Fd);if(M>=0&&b<=M)return n.copy(c);const R=b*p-m*M;if(R<=0&&p>=0&&M<=0)return d=p/(p-M),n.copy(a).addScaledVector(oo,d);const S=g*M-b*_;if(S<=0&&_-g>=0&&b-M>=0)return $v.subVectors(c,l),d=(_-g)/(_-g+(b-M)),n.copy(l).addScaledVector($v,d);const x=1/(S+R+v);return u=R*x,d=v*x,n.copy(a).addScaledVector(ro,u).addScaledVector(oo,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ps{constructor(t=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Ki.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Ki.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Ki.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)t.isMesh===!0?t.getVertexPosition(u,Ki):Ki.fromBufferAttribute(c,u),Ki.applyMatrix4(t.matrixWorld),this.expandByPoint(Ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_u.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),_u.copy(a.boundingBox)),_u.applyMatrix4(t.matrixWorld),this.union(_u)}const l=t.children;for(let c=0,u=l.length;c<u;c++)this.expandByObject(l[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ki),Ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cl),vu.subVectors(this.max,Cl),lo.subVectors(t.a,Cl),co.subVectors(t.b,Cl),uo.subVectors(t.c,Cl),Ts.subVectors(co,lo),As.subVectors(uo,co),er.subVectors(lo,uo);let n=[0,-Ts.z,Ts.y,0,-As.z,As.y,0,-er.z,er.y,Ts.z,0,-Ts.x,As.z,0,-As.x,er.z,0,-er.x,-Ts.y,Ts.x,0,-As.y,As.x,0,-er.y,er.x,0];return!Vd(n,lo,co,uo,vu)||(n=[1,0,0,0,1,0,0,0,1],!Vd(n,lo,co,uo,vu))?!1:(xu.crossVectors(Ts,As),n=[xu.x,xu.y,xu.z],Vd(n,lo,co,uo,vu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Va),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Va=[new X,new X,new X,new X,new X,new X,new X,new X],Ki=new X,_u=new Ps,lo=new X,co=new X,uo=new X,Ts=new X,As=new X,er=new X,Cl=new X,vu=new X,xu=new X,nr=new X;function Vd(r,t,n,a,l){for(let c=0,u=r.length-3;c<=u;c+=3){nr.fromArray(r,c);const d=l.x*Math.abs(nr.x)+l.y*Math.abs(nr.y)+l.z*Math.abs(nr.z),m=t.dot(nr),p=n.dot(nr),g=a.dot(nr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const yn=new X,yu=new ne;let IE=0;class Bi{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:IE++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=sm,this.updateRanges=[],this.gpuType=ha,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=n.array[a+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)yu.fromBufferAttribute(this,n),yu.applyMatrix3(t),this.setXY(n,yu.x,yu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)yn.fromBufferAttribute(this,n),yn.applyMatrix3(t),this.setXYZ(n,yn.x,yn.y,yn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)yn.fromBufferAttribute(this,n),yn.applyMatrix4(t),this.setXYZ(n,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)yn.fromBufferAttribute(this,n),yn.applyNormalMatrix(t),this.setXYZ(n,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)yn.fromBufferAttribute(this,n),yn.transformDirection(t),this.setXYZ(n,yn.x,yn.y,yn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=$i(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Xe(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=$i(n,this.array)),n}setX(t,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=$i(n,this.array)),n}setY(t,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=$i(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=$i(n,this.array)),n}setW(t,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Xe(n,this.array),a=Xe(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,l){return t*=this.itemSize,this.normalized&&(n=Xe(n,this.array),a=Xe(a,this.array),l=Xe(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=l,this}setXYZW(t,n,a,l,c){return t*=this.itemSize,this.normalized&&(n=Xe(n,this.array),a=Xe(a,this.array),l=Xe(l,this.array),c=Xe(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sm&&(t.usage=this.usage),t}}class Ty extends Bi{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class Ay extends Bi{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class hn extends Bi{constructor(t,n,a){super(new Float32Array(t),n,a)}}const FE=new Ps,Dl=new X,kd=new X;class Po{constructor(t=new X,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):FE.setFromPoints(t).getCenter(a);let l=0;for(let c=0,u=t.length;c<u;c++)l=Math.max(l,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Dl.subVectors(t,this.center);const n=Dl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),l=(a-this.radius)*.5;this.center.addScaledVector(Dl,l/a),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Dl.copy(t.center).add(kd)),this.expandByPoint(Dl.copy(t.center).sub(kd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let BE=0;const Oi=new en,Xd=new Tn,fo=new X,bi=new Ps,Ll=new Ps,Cn=new X;class Xn extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BE++}),this.uuid=qa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(iE(t)?Ay:Ty)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new ve().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Oi.makeRotationFromQuaternion(t),this.applyMatrix4(Oi),this}rotateX(t){return Oi.makeRotationX(t),this.applyMatrix4(Oi),this}rotateY(t){return Oi.makeRotationY(t),this.applyMatrix4(Oi),this}rotateZ(t){return Oi.makeRotationZ(t),this.applyMatrix4(Oi),this}translate(t,n,a){return Oi.makeTranslation(t,n,a),this.applyMatrix4(Oi),this}scale(t,n,a){return Oi.makeScale(t,n,a),this.applyMatrix4(Oi),this}lookAt(t){return Xd.lookAt(t),Xd.updateMatrix(),this.applyMatrix4(Xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let l=0,c=t.length;l<c;l++){const u=t[l];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new hn(a,3))}else{const a=Math.min(t.length,n.count);for(let l=0;l<a;l++){const c=t[l];n.setXYZ(l,c.x,c.y,c.z||0)}t.length>n.count&&le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ps);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,l=n.length;a<l;a++){const c=n[a];bi.setFromBufferAttribute(c),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,bi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,bi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(bi.min),this.boundingBox.expandByPoint(bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Po);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const a=this.boundingSphere.center;if(bi.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];Ll.setFromBufferAttribute(d),this.morphTargetsRelative?(Cn.addVectors(bi.min,Ll.min),bi.expandByPoint(Cn),Cn.addVectors(bi.max,Ll.max),bi.expandByPoint(Cn)):(bi.expandByPoint(Ll.min),bi.expandByPoint(Ll.max))}bi.getCenter(a);let l=0;for(let c=0,u=t.count;c<u;c++)Cn.fromBufferAttribute(t,c),l=Math.max(l,a.distanceToSquared(Cn));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Cn.fromBufferAttribute(d,p),m&&(fo.fromBufferAttribute(t,p),Cn.add(fo)),l=Math.max(l,a.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bi(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),d=[],m=[];for(let T=0;T<a.count;T++)d[T]=new X,m[T]=new X;const p=new X,g=new X,_=new X,v=new ne,b=new ne,M=new ne,R=new X,S=new X;function x(T,N,ot){p.fromBufferAttribute(a,T),g.fromBufferAttribute(a,N),_.fromBufferAttribute(a,ot),v.fromBufferAttribute(c,T),b.fromBufferAttribute(c,N),M.fromBufferAttribute(c,ot),g.sub(p),_.sub(p),b.sub(v),M.sub(v);const G=1/(b.x*M.y-M.x*b.y);isFinite(G)&&(R.copy(g).multiplyScalar(M.y).addScaledVector(_,-b.y).multiplyScalar(G),S.copy(_).multiplyScalar(b.x).addScaledVector(g,-M.x).multiplyScalar(G),d[T].add(R),d[N].add(R),d[ot].add(R),m[T].add(S),m[N].add(S),m[ot].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let T=0,N=w.length;T<N;++T){const ot=w[T],G=ot.start,Y=ot.count;for(let tt=G,$=G+Y;tt<$;tt+=3)x(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const U=new X,C=new X,I=new X,B=new X;function O(T){I.fromBufferAttribute(l,T),B.copy(I);const N=d[T];U.copy(N),U.sub(I.multiplyScalar(I.dot(N))).normalize(),C.crossVectors(B,N);const G=C.dot(m[T])<0?-1:1;u.setXYZW(T,U.x,U.y,U.z,G)}for(let T=0,N=w.length;T<N;++T){const ot=w[T],G=ot.start,Y=ot.count;for(let tt=G,$=G+Y;tt<$;tt+=3)O(t.getX(tt+0)),O(t.getX(tt+1)),O(t.getX(tt+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Bi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,b=a.count;v<b;v++)a.setXYZ(v,0,0,0);const l=new X,c=new X,u=new X,d=new X,m=new X,p=new X,g=new X,_=new X;if(t)for(let v=0,b=t.count;v<b;v+=3){const M=t.getX(v+0),R=t.getX(v+1),S=t.getX(v+2);l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),g.subVectors(u,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(a,M),m.fromBufferAttribute(a,R),p.fromBufferAttribute(a,S),d.add(g),m.add(g),p.add(g),a.setXYZ(M,d.x,d.y,d.z),a.setXYZ(R,m.x,m.y,m.z),a.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,b=n.count;v<b;v+=3)l.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),_.subVectors(l,c),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Cn.fromBufferAttribute(t,n),Cn.normalize(),t.setXYZ(n,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,v=new p.constructor(m.length*g);let b=0,M=0;for(let R=0,S=m.length;R<S;R++){d.isInterleavedBufferAttribute?b=m[R]*d.data.stride+d.offset:b=m[R]*g;for(let x=0;x<g;x++)v[M++]=p[b++]}return new Bi(v,g,_)}if(this.index===null)return le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Xn,a=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,a);n.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const v=p[g],b=t(v,a);m.push(b)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const p=u[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,v=p.length;_<v;_++){const b=p[_];g.push(b.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(n))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let v=0,b=_.length;v<b;v++)g.push(_[v].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let p=0,g=u.length;p<g;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wy{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=sm,this.updateRanges=[],this.version=0,this.uuid=qa()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,a){t*=this.stride,a*=n.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=n.array[a+l];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qa()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qa()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ti=new X;class pa{constructor(t,n,a,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=a,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,a=this.data.count;n<a;n++)ti.fromBufferAttribute(this,n),ti.applyMatrix4(t),this.setXYZ(n,ti.x,ti.y,ti.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)ti.fromBufferAttribute(this,n),ti.applyNormalMatrix(t),this.setXYZ(n,ti.x,ti.y,ti.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)ti.fromBufferAttribute(this,n),ti.transformDirection(t),this.setXYZ(n,ti.x,ti.y,ti.z);return this}getComponent(t,n){let a=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(a=$i(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Xe(a,this.array)),this.data.array[t*this.data.stride+this.offset+n]=a,this}setX(t,n){return this.normalized&&(n=Xe(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=Xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=Xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=Xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=$i(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=$i(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=$i(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=$i(n,this.array)),n}setXY(t,n,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=Xe(n,this.array),a=Xe(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this}setXYZ(t,n,a,l){return t=t*this.data.stride+this.offset,this.normalized&&(n=Xe(n,this.array),a=Xe(a,this.array),l=Xe(l,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=l,this}setXYZW(t,n,a,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(n=Xe(n,this.array),a=Xe(a,this.array),l=Xe(l,this.array),c=Xe(c,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){of("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const l=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[l+c])}return new Bi(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new pa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){of("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const l=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let HE=0;class vr extends _r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=qa(),this.name="",this.type="Material",this.blending=wo,this.side=Ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gp,this.blendDst=_p,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){le(`Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){le(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==wo&&(a.blending=this.blending),this.side!==Ns&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==gp&&(a.blendSrc=this.blendSrc),this.blendDst!==_p&&(a.blendDst=this.blendDst),this.blendEquation!==cr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Do&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==eo&&(a.stencilFail=this.stencilFail),this.stencilZFail!==eo&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==eo&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const u=[];for(const d in c){const m=c[d];delete m.metadata,u.push(m)}return u}if(n){const c=l(t.textures),u=l(t.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const l=n.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class cf extends vr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ho;const Ul=new X,po=new X,mo=new X,go=new ne,Nl=new ne,Ry=new en,Su=new X,Ol=new X,bu=new X,tx=new ne,jd=new ne,ex=new ne;class rm extends Tn{constructor(t=new cf){if(super(),this.isSprite=!0,this.type="Sprite",ho===void 0){ho=new Xn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new wy(n,5);ho.setIndex([0,1,2,0,2,3]),ho.setAttribute("position",new pa(a,3,0,!1)),ho.setAttribute("uv",new pa(a,2,3,!1))}this.geometry=ho,this.material=t,this.center=new ne(.5,.5),this.count=1}raycast(t,n){t.camera===null&&Ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),po.setFromMatrixScale(this.matrixWorld),Ry.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),mo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&po.multiplyScalar(-mo.z);const a=this.material.rotation;let l,c;a!==0&&(c=Math.cos(a),l=Math.sin(a));const u=this.center;Mu(Su.set(-.5,-.5,0),mo,u,po,l,c),Mu(Ol.set(.5,-.5,0),mo,u,po,l,c),Mu(bu.set(.5,.5,0),mo,u,po,l,c),tx.set(0,0),jd.set(1,0),ex.set(1,1);let d=t.ray.intersectTriangle(Su,Ol,bu,!1,Ul);if(d===null&&(Mu(Ol.set(-.5,.5,0),mo,u,po,l,c),jd.set(0,1),d=t.ray.intersectTriangle(Su,bu,Ol,!1,Ul),d===null))return;const m=t.ray.origin.distanceTo(Ul);m<t.near||m>t.far||n.push({distance:m,point:Ul.clone(),uv:Fi.getInterpolation(Ul,Su,Ol,bu,tx,jd,ex,new ne),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Mu(r,t,n,a,l,c){go.subVectors(r,n).addScalar(.5).multiply(a),l!==void 0?(Nl.x=c*go.x-l*go.y,Nl.y=l*go.x+c*go.y):Nl.copy(go),r.copy(t),r.x+=Nl.x,r.y+=Nl.y,r.applyMatrix4(Ry)}const ka=new X,Wd=new X,Eu=new X,ws=new X,qd=new X,Tu=new X,Yd=new X;class Rm{constructor(t=new X,n=new X(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ka)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ka.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ka.copy(this.origin).addScaledVector(this.direction,n),ka.distanceToSquared(t))}distanceSqToSegment(t,n,a,l){Wd.copy(t).add(n).multiplyScalar(.5),Eu.copy(n).sub(t).normalize(),ws.copy(this.origin).sub(Wd);const c=t.distanceTo(n)*.5,u=-this.direction.dot(Eu),d=ws.dot(this.direction),m=-ws.dot(Eu),p=ws.lengthSq(),g=Math.abs(1-u*u);let _,v,b,M;if(g>0)if(_=u*m-d,v=u*d-m,M=c*g,_>=0)if(v>=-M)if(v<=M){const R=1/g;_*=R,v*=R,b=_*(_+u*v+2*d)+v*(u*_+v+2*m)+p}else v=c,_=Math.max(0,-(u*v+d)),b=-_*_+v*(v+2*m)+p;else v=-c,_=Math.max(0,-(u*v+d)),b=-_*_+v*(v+2*m)+p;else v<=-M?(_=Math.max(0,-(-u*c+d)),v=_>0?-c:Math.min(Math.max(-c,-m),c),b=-_*_+v*(v+2*m)+p):v<=M?(_=0,v=Math.min(Math.max(-c,-m),c),b=v*(v+2*m)+p):(_=Math.max(0,-(u*c+d)),v=_>0?c:Math.min(Math.max(-c,-m),c),b=-_*_+v*(v+2*m)+p);else v=u>0?-c:c,_=Math.max(0,-(u*v+d)),b=-_*_+v*(v+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Wd).addScaledVector(Eu,v),b}intersectSphere(t,n){ka.subVectors(t.center,this.origin);const a=ka.dot(this.direction),l=ka.dot(ka)-a*a,c=t.radius*t.radius;if(l>c)return null;const u=Math.sqrt(c-l),d=a-u,m=a+u;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,l,c,u,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(a=(t.min.x-v.x)*p,l=(t.max.x-v.x)*p):(a=(t.max.x-v.x)*p,l=(t.min.x-v.x)*p),g>=0?(c=(t.min.y-v.y)*g,u=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,u=(t.min.y-v.y)*g),a>u||c>l||((c>a||isNaN(a))&&(a=c),(u<l||isNaN(l))&&(l=u),_>=0?(d=(t.min.z-v.z)*_,m=(t.max.z-v.z)*_):(d=(t.max.z-v.z)*_,m=(t.min.z-v.z)*_),a>m||d>l)||((d>a||a!==a)&&(a=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(a>=0?a:l,n)}intersectsBox(t){return this.intersectBox(t,ka)!==null}intersectTriangle(t,n,a,l,c){qd.subVectors(n,t),Tu.subVectors(a,t),Yd.crossVectors(qd,Tu);let u=this.direction.dot(Yd),d;if(u>0){if(l)return null;d=1}else if(u<0)d=-1,u=-u;else return null;ws.subVectors(this.origin,t);const m=d*this.direction.dot(Tu.crossVectors(ws,Tu));if(m<0)return null;const p=d*this.direction.dot(qd.cross(ws));if(p<0||m+p>u)return null;const g=-d*ws.dot(Yd);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mi extends vr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new va,this.combine=_m,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const nx=new en,ir=new Rm,Au=new Po,ix=new X,wu=new X,Ru=new X,Cu=new X,Zd=new X,Du=new X,ax=new X,Lu=new X;class rn extends Tn{constructor(t=new Xn,n=new Mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=l.length;c<u;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,n){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Du.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(Zd.fromBufferAttribute(_,t),u?Du.addScaledVector(Zd,g):Du.addScaledVector(Zd.sub(n),g))}n.add(Du)}return n}raycast(t,n){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Au.copy(a.boundingSphere),Au.applyMatrix4(c),ir.copy(t.ray).recast(t.near),!(Au.containsPoint(ir.origin)===!1&&(ir.intersectSphere(Au,ix)===null||ir.origin.distanceToSquared(ix)>(t.far-t.near)**2))&&(nx.copy(c).invert(),ir.copy(t.ray).applyMatrix4(nx),!(a.boundingBox!==null&&ir.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,ir)))}_computeIntersections(t,n,a){let l;const c=this.geometry,u=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,b=c.drawRange;if(d!==null)if(Array.isArray(u))for(let M=0,R=v.length;M<R;M++){const S=v[M],x=u[S.materialIndex],w=Math.max(S.start,b.start),U=Math.min(d.count,Math.min(S.start+S.count,b.start+b.count));for(let C=w,I=U;C<I;C+=3){const B=d.getX(C),O=d.getX(C+1),T=d.getX(C+2);l=Uu(this,x,t,a,p,g,_,B,O,T),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=S.materialIndex,n.push(l))}}else{const M=Math.max(0,b.start),R=Math.min(d.count,b.start+b.count);for(let S=M,x=R;S<x;S+=3){const w=d.getX(S),U=d.getX(S+1),C=d.getX(S+2);l=Uu(this,u,t,a,p,g,_,w,U,C),l&&(l.faceIndex=Math.floor(S/3),n.push(l))}}else if(m!==void 0)if(Array.isArray(u))for(let M=0,R=v.length;M<R;M++){const S=v[M],x=u[S.materialIndex],w=Math.max(S.start,b.start),U=Math.min(m.count,Math.min(S.start+S.count,b.start+b.count));for(let C=w,I=U;C<I;C+=3){const B=C,O=C+1,T=C+2;l=Uu(this,x,t,a,p,g,_,B,O,T),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=S.materialIndex,n.push(l))}}else{const M=Math.max(0,b.start),R=Math.min(m.count,b.start+b.count);for(let S=M,x=R;S<x;S+=3){const w=S,U=S+1,C=S+2;l=Uu(this,u,t,a,p,g,_,w,U,C),l&&(l.faceIndex=Math.floor(S/3),n.push(l))}}}}function GE(r,t,n,a,l,c,u,d){let m;if(t.side===ni?m=a.intersectTriangle(u,c,l,!0,d):m=a.intersectTriangle(l,c,u,t.side===Ns,d),m===null)return null;Lu.copy(d),Lu.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(Lu);return p<n.near||p>n.far?null:{distance:p,point:Lu.clone(),object:r}}function Uu(r,t,n,a,l,c,u,d,m,p){r.getVertexPosition(d,wu),r.getVertexPosition(m,Ru),r.getVertexPosition(p,Cu);const g=GE(r,t,n,a,wu,Ru,Cu,ax);if(g){const _=new X;Fi.getBarycoord(ax,wu,Ru,Cu,_),l&&(g.uv=Fi.getInterpolatedAttribute(l,d,m,p,_,new ne)),c&&(g.uv1=Fi.getInterpolatedAttribute(c,d,m,p,_,new ne)),u&&(g.normal=Fi.getInterpolatedAttribute(u,d,m,p,_,new X),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new X,materialIndex:0};Fi.getNormal(wu,Ru,Cu,v.normal),g.face=v,g.barycoord=_}return g}class VE extends Vn{constructor(t=null,n=1,a=1,l,c,u,d,m,p=Gn,g=Gn,_,v){super(null,u,d,m,p,g,l,c,_,v),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kd=new X,kE=new X,XE=new ve;class Ds{constructor(t=new X(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,l){return this.normal.set(t,n,a),this.constant=l,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const l=Kd.subVectors(a,n).cross(kE.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Kd),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||XE.getNormalMatrix(t),l=this.coplanarPoint(Kd).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new Po,jE=new ne(.5,.5),Nu=new X;class Cm{constructor(t=new Ds,n=new Ds,a=new Ds,l=new Ds,c=new Ds,u=new Ds){this.planes=[t,n,a,l,c,u]}set(t,n,a,l,c,u){const d=this.planes;return d[0].copy(t),d[1].copy(n),d[2].copy(a),d[3].copy(l),d[4].copy(c),d[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=da,a=!1){const l=this.planes,c=t.elements,u=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],v=c[6],b=c[7],M=c[8],R=c[9],S=c[10],x=c[11],w=c[12],U=c[13],C=c[14],I=c[15];if(l[0].setComponents(p-u,b-g,x-M,I-w).normalize(),l[1].setComponents(p+u,b+g,x+M,I+w).normalize(),l[2].setComponents(p+d,b+_,x+R,I+U).normalize(),l[3].setComponents(p-d,b-_,x-R,I-U).normalize(),a)l[4].setComponents(m,v,S,C).normalize(),l[5].setComponents(p-m,b-v,x-S,I-C).normalize();else if(l[4].setComponents(p-m,b-v,x-S,I-C).normalize(),n===da)l[5].setComponents(p+m,b+v,x+S,I+C).normalize();else if(n===ql)l[5].setComponents(m,v,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(t){ar.center.set(0,0,0);const n=jE.distanceTo(t.center);return ar.radius=.7071067811865476+n,ar.applyMatrix4(t.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(t){const n=this.planes,a=t.center,l=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const l=n[a];if(Nu.x=l.normal.x>0?t.max.x:t.min.x,Nu.y=l.normal.y>0?t.max.y:t.min.y,Nu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Nu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cy extends vr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const sx=new en,om=new Rm,Ou=new Po,Pu=new X;class WE extends Tn{constructor(t=new Xn,n=new Cy){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Ou.copy(a.boundingSphere),Ou.applyMatrix4(l),Ou.radius+=c,t.ray.intersectsSphere(Ou)===!1)return;sx.copy(l).invert(),om.copy(t.ray).applyMatrix4(sx);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=a.index,_=a.attributes.position;if(p!==null){const v=Math.max(0,u.start),b=Math.min(p.count,u.start+u.count);for(let M=v,R=b;M<R;M++){const S=p.getX(M);Pu.fromBufferAttribute(_,S),rx(Pu,S,m,l,t,n,this)}}else{const v=Math.max(0,u.start),b=Math.min(_.count,u.start+u.count);for(let M=v,R=b;M<R;M++)Pu.fromBufferAttribute(_,M),rx(Pu,M,m,l,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=l.length;c<u;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function rx(r,t,n,a,l,c,u){const d=om.distanceSqToPoint(r);if(d<n){const m=new X;om.closestPointToPoint(r,m),m.applyMatrix4(a);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:u})}}class Dy extends Vn{constructor(t=[],n=gr,a,l,c,u,d,m,p,g){super(t,n,a,l,c,u,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nf extends Vn{constructor(t,n,a,l,c,u,d,m,p){super(t,n,a,l,c,u,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Kl extends Vn{constructor(t,n,a=_a,l,c,u,d=Gn,m=Gn,p,g=Ka,_=1){if(g!==Ka&&g!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:_};super(v,l,c,u,d,m,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new wm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class qE extends Kl{constructor(t,n=_a,a=gr,l,c,u=Gn,d=Gn,m,p=Ka){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,n,a,l,c,u,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ly extends Vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Jl extends Xn{constructor(t=1,n=1,a=1,l=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:l,heightSegments:c,depthSegments:u};const d=this;l=Math.floor(l),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],g=[],_=[];let v=0,b=0;M("z","y","x",-1,-1,a,n,t,u,c,0),M("z","y","x",1,-1,a,n,-t,u,c,1),M("x","z","y",1,1,t,a,n,l,u,2),M("x","z","y",1,-1,t,a,-n,l,u,3),M("x","y","z",1,-1,t,n,a,l,c,4),M("x","y","z",-1,-1,t,n,-a,l,c,5),this.setIndex(m),this.setAttribute("position",new hn(p,3)),this.setAttribute("normal",new hn(g,3)),this.setAttribute("uv",new hn(_,2));function M(R,S,x,w,U,C,I,B,O,T,N){const ot=C/O,G=I/T,Y=C/2,tt=I/2,$=B/2,Q=O+1,P=T+1;let H=0,ct=0;const pt=new X;for(let bt=0;bt<P;bt++){const A=bt*G-tt;for(let V=0;V<Q;V++){const ft=V*ot-Y;pt[R]=ft*w,pt[S]=A*U,pt[x]=$,p.push(pt.x,pt.y,pt.z),pt[R]=0,pt[S]=0,pt[x]=B>0?1:-1,g.push(pt.x,pt.y,pt.z),_.push(V/O),_.push(1-bt/T),H+=1}}for(let bt=0;bt<T;bt++)for(let A=0;A<O;A++){const V=v+A+Q*bt,ft=v+A+Q*(bt+1),Mt=v+(A+1)+Q*(bt+1),Ot=v+(A+1)+Q*bt;m.push(V,ft,Ot),m.push(ft,Mt,Ot),ct+=6}d.addGroup(b,ct,N),b+=ct,v+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Dm extends Xn{constructor(t=1,n=1,a=1,l=32,c=1,u=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:l,heightSegments:c,openEnded:u,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],v=[],b=[];let M=0;const R=[],S=a/2;let x=0;w(),u===!1&&(t>0&&U(!0),n>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new hn(_,3)),this.setAttribute("normal",new hn(v,3)),this.setAttribute("uv",new hn(b,2));function w(){const C=new X,I=new X;let B=0;const O=(n-t)/a;for(let T=0;T<=c;T++){const N=[],ot=T/c,G=ot*(n-t)+t;for(let Y=0;Y<=l;Y++){const tt=Y/l,$=tt*m+d,Q=Math.sin($),P=Math.cos($);I.x=G*Q,I.y=-ot*a+S,I.z=G*P,_.push(I.x,I.y,I.z),C.set(Q,O,P).normalize(),v.push(C.x,C.y,C.z),b.push(tt,1-ot),N.push(M++)}R.push(N)}for(let T=0;T<l;T++)for(let N=0;N<c;N++){const ot=R[N][T],G=R[N+1][T],Y=R[N+1][T+1],tt=R[N][T+1];(t>0||N!==0)&&(g.push(ot,G,tt),B+=3),(n>0||N!==c-1)&&(g.push(G,Y,tt),B+=3)}p.addGroup(x,B,0),x+=B}function U(C){const I=M,B=new ne,O=new X;let T=0;const N=C===!0?t:n,ot=C===!0?1:-1;for(let Y=1;Y<=l;Y++)_.push(0,S*ot,0),v.push(0,ot,0),b.push(.5,.5),M++;const G=M;for(let Y=0;Y<=l;Y++){const $=Y/l*m+d,Q=Math.cos($),P=Math.sin($);O.x=N*P,O.y=S*ot,O.z=N*Q,_.push(O.x,O.y,O.z),v.push(0,ot,0),B.x=Q*.5+.5,B.y=P*.5*ot+.5,b.push(B.x,B.y),M++}for(let Y=0;Y<l;Y++){const tt=I+Y,$=G+Y;C===!0?g.push($,$+1,tt):g.push($+1,$,tt),T+=3}p.addGroup(x,T,C===!0?1:2),x+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dm(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Lm extends Dm{constructor(t=1,n=1,a=32,l=1,c=!1,u=0,d=Math.PI*2){super(0,t,n,a,l,c,u,d),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:a,heightSegments:l,openEnded:c,thetaStart:u,thetaLength:d}}static fromJSON(t){return new Lm(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $l extends Xn{constructor(t=1,n=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:l};const c=t/2,u=n/2,d=Math.floor(a),m=Math.floor(l),p=d+1,g=m+1,_=t/d,v=n/m,b=[],M=[],R=[],S=[];for(let x=0;x<g;x++){const w=x*v-u;for(let U=0;U<p;U++){const C=U*_-c;M.push(C,-w,0),R.push(0,0,1),S.push(U/d),S.push(1-x/m)}}for(let x=0;x<m;x++)for(let w=0;w<d;w++){const U=w+p*x,C=w+p*(x+1),I=w+1+p*(x+1),B=w+1+p*x;b.push(U,C,B),b.push(C,I,B)}this.setIndex(b),this.setAttribute("position",new hn(M,3)),this.setAttribute("normal",new hn(R,3)),this.setAttribute("uv",new hn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $l(t.width,t.height,t.widthSegments,t.heightSegments)}}class Um extends Xn{constructor(t=.5,n=1,a=32,l=1,c=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:a,phiSegments:l,thetaStart:c,thetaLength:u},a=Math.max(3,a),l=Math.max(1,l);const d=[],m=[],p=[],g=[];let _=t;const v=(n-t)/l,b=new X,M=new ne;for(let R=0;R<=l;R++){for(let S=0;S<=a;S++){const x=c+S/a*u;b.x=_*Math.cos(x),b.y=_*Math.sin(x),m.push(b.x,b.y,b.z),p.push(0,0,1),M.x=(b.x/n+1)/2,M.y=(b.y/n+1)/2,g.push(M.x,M.y)}_+=v}for(let R=0;R<l;R++){const S=R*(a+1);for(let x=0;x<a;x++){const w=x+S,U=w,C=w+a+1,I=w+a+2,B=w+1;d.push(U,C,B),d.push(C,I,B)}}this.setIndex(d),this.setAttribute("position",new hn(m,3)),this.setAttribute("normal",new hn(p,3)),this.setAttribute("uv",new hn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Um(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class zi extends Xn{constructor(t=1,n=32,a=16,l=0,c=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:l,phiLength:c,thetaStart:u,thetaLength:d},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const m=Math.min(u+d,Math.PI);let p=0;const g=[],_=new X,v=new X,b=[],M=[],R=[],S=[];for(let x=0;x<=a;x++){const w=[],U=x/a;let C=0;x===0&&u===0?C=.5/n:x===a&&m===Math.PI&&(C=-.5/n);for(let I=0;I<=n;I++){const B=I/n;_.x=-t*Math.cos(l+B*c)*Math.sin(u+U*d),_.y=t*Math.cos(u+U*d),_.z=t*Math.sin(l+B*c)*Math.sin(u+U*d),M.push(_.x,_.y,_.z),v.copy(_).normalize(),R.push(v.x,v.y,v.z),S.push(B+C,1-U),w.push(p++)}g.push(w)}for(let x=0;x<a;x++)for(let w=0;w<n;w++){const U=g[x][w+1],C=g[x][w],I=g[x+1][w],B=g[x+1][w+1];(x!==0||u>0)&&b.push(U,C,B),(x!==a-1||m<Math.PI)&&b.push(C,I,B)}this.setIndex(b),this.setAttribute("position",new hn(M,3)),this.setAttribute("normal",new hn(R,3)),this.setAttribute("uv",new hn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class YE extends Xn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const n=[],a=new Set,l=new X,c=new X;if(t.index!==null){const u=t.attributes.position,d=t.index;let m=t.groups;m.length===0&&(m=[{start:0,count:d.count,materialIndex:0}]);for(let p=0,g=m.length;p<g;++p){const _=m[p],v=_.start,b=_.count;for(let M=v,R=v+b;M<R;M+=3)for(let S=0;S<3;S++){const x=d.getX(M+S),w=d.getX(M+(S+1)%3);l.fromBufferAttribute(u,x),c.fromBufferAttribute(u,w),ox(l,c,a)===!0&&(n.push(l.x,l.y,l.z),n.push(c.x,c.y,c.z))}}}else{const u=t.attributes.position;for(let d=0,m=u.count/3;d<m;d++)for(let p=0;p<3;p++){const g=3*d+p,_=3*d+(p+1)%3;l.fromBufferAttribute(u,g),c.fromBufferAttribute(u,_),ox(l,c,a)===!0&&(n.push(l.x,l.y,l.z),n.push(c.x,c.y,c.z))}}this.setAttribute("position",new hn(n,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function ox(r,t,n){const a=`${r.x},${r.y},${r.z}-${t.x},${t.y},${t.z}`,l=`${t.x},${t.y},${t.z}-${r.x},${r.y},${r.z}`;return n.has(a)===!0||n.has(l)===!0?!1:(n.add(a),n.add(l),!0)}function Oo(r){const t={};for(const n in r){t[n]={};for(const a in r[n]){const l=r[n][a];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=l.clone():Array.isArray(l)?t[n][a]=l.slice():t[n][a]=l}}return t}function ei(r){const t={};for(let n=0;n<r.length;n++){const a=Oo(r[n]);for(const l in a)t[l]=a[l]}return t}function ZE(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function Uy(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ne.workingColorSpace}const Nm={clone:Oo,merge:ei};var KE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends vr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KE,this.fragmentShader=QE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Oo(t.uniforms),this.uniformsGroups=ZE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const u=this.uniforms[l].value;u&&u.isTexture?n.uniforms[l]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[l]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[l]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[l]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[l]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[l]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[l]={type:"m4",value:u.toArray()}:n.uniforms[l]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class JE extends Hi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $E extends vr{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new be(16777215),this.specular=new be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xy,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new va,this.combine=_m,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class t1 extends vr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ZM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class e1 extends vr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Qd={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(lx(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!lx(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function lx(r){try{const t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class n1{constructor(t,n,a){const l=this;let c=!1,u=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(g){d++,c===!1&&l.onStart!==void 0&&l.onStart(g,u,d),c=!0},this.itemEnd=function(g){u++,l.onProgress!==void 0&&l.onProgress(g,u,d),u===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=p.length;_<v;_+=2){const b=p[_],M=p[_+1];if(b.global&&(b.lastIndex=0),b.test(g))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const i1=new n1;class Om{constructor(t){this.manager=t!==void 0?t:i1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){const a=this;return new Promise(function(l,c){a.load(t,l,n,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Om.DEFAULT_MATERIAL_NAME="__DEFAULT";const _o=new WeakMap;class a1 extends Om{constructor(t){super(t)}load(t,n,a,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,u=Qd.get(`image:${t}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(t),setTimeout(function(){n&&n(u),c.manager.itemEnd(t)},0);else{let _=_o.get(u);_===void 0&&(_=[],_o.set(u,_)),_.push({onLoad:n,onError:l})}return u}const d=Yl("img");function m(){g(),n&&n(this);const _=_o.get(this)||[];for(let v=0;v<_.length;v++){const b=_[v];b.onLoad&&b.onLoad(this)}_o.delete(this),c.manager.itemEnd(t)}function p(_){g(),l&&l(_),Qd.remove(`image:${t}`);const v=_o.get(this)||[];for(let b=0;b<v.length;b++){const M=v[b];M.onError&&M.onError(_)}_o.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Qd.add(`image:${t}`,d),c.manager.itemStart(t),d.src=t,d}}class s1 extends Om{constructor(t){super(t)}load(t,n,a,l){const c=new Vn,u=new a1(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(t,function(d){c.image=d,c.needsUpdate=!0,n!==void 0&&n(c)},a,l),c}}class Pm extends Tn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new be(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class r1 extends Pm{constructor(t,n,a){super(t,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){const n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}}const Jd=new en,cx=new X,ux=new X;class o1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=Ti,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cm,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;cx.setFromMatrixPosition(t.matrixWorld),n.position.copy(cx),ux.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(ux),n.updateMatrixWorld(),Jd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jd,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===ql||n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Jd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const zu=new X,Iu=new Os,ra=new X;class Ny extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=da,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(zu,Iu,ra),ra.x===1&&ra.y===1&&ra.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zu,Iu,ra.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(zu,Iu,ra),ra.x===1&&ra.y===1&&ra.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zu,Iu,ra.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Rs=new X,fx=new ne,hx=new ne;class Ii extends Ny{constructor(t=50,n=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Zl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zl*2*Math.atan(Math.tan(Vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rs.x,Rs.y).multiplyScalar(-t/Rs.z),Rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Rs.x,Rs.y).multiplyScalar(-t/Rs.z)}getViewSize(t,n){return this.getViewBounds(t,fx,hx),n.subVectors(hx,fx)}setViewOffset(t,n,a,l,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Vl*.5*this.fov)/this.zoom,a=2*n,l=this.aspect*a,c=-.5*l;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*l/m,n-=u.offsetY*a/p,l*=u.width/m,a*=u.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class zm extends Ny{constructor(t=-1,n=1,a=1,l=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=l,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,l,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-t,u=a+t,d=l+n,m=l-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class l1 extends o1{constructor(){super(new zm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class c1 extends Pm{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new l1}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class u1 extends Pm{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class f1 extends Xn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}const vo=-90,xo=1;class h1 extends Tn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ii(vo,xo,t,n);l.layers=this.layers,this.add(l);const c=new Ii(vo,xo,t,n);c.layers=this.layers,this.add(c);const u=new Ii(vo,xo,t,n);u.layers=this.layers,this.add(u);const d=new Ii(vo,xo,t,n);d.layers=this.layers,this.add(d);const m=new Ii(vo,xo,t,n);m.layers=this.layers,this.add(m);const p=new Ii(vo,xo,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,l,c,u,d,m]=n;for(const p of n)this.remove(p);if(t===da)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===ql)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,m,p,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const R=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(a,0,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(a,1,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(a,2,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),t.setRenderTarget(a,3,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,m),t.setRenderTarget(a,4,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,p),a.texture.generateMipmaps=R,t.setRenderTarget(a,5,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,g),t.setRenderTarget(_,v,b),t.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class d1 extends Ii{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class lm extends wy{constructor(t,n,a=1){super(t,n),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=a}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const n=super.clone(t);return n.meshPerAttribute=this.meshPerAttribute,n}toJSON(t){const n=super.toJSON(t);return n.isInstancedInterleavedBuffer=!0,n.meshPerAttribute=this.meshPerAttribute,n}}class dx{constructor(t=1,n=0,a=0){this.radius=t,this.phi=n,this.theta=a}set(t,n,a){return this.radius=t,this.phi=n,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=he(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,a){return this.radius=Math.sqrt(t*t+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(he(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const px=new X,Fu=new X,yo=new X,So=new X,$d=new X,p1=new X,m1=new X;class g1{constructor(t=new X,n=new X){this.start=t,this.end=n}set(t,n){return this.start.copy(t),this.end.copy(n),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,n){return this.delta(n).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,n){px.subVectors(t,this.start),Fu.subVectors(this.end,this.start);const a=Fu.dot(Fu);let c=Fu.dot(px)/a;return n&&(c=he(c,0,1)),c}closestPointToPoint(t,n,a){const l=this.closestPointToPointParameter(t,n);return this.delta(a).multiplyScalar(l).add(this.start)}distanceSqToLine3(t,n=p1,a=m1){const l=10000000000000001e-32;let c,u;const d=this.start,m=t.start,p=this.end,g=t.end;yo.subVectors(p,d),So.subVectors(g,m),$d.subVectors(d,m);const _=yo.dot(yo),v=So.dot(So),b=So.dot($d);if(_<=l&&v<=l)return n.copy(d),a.copy(m),n.sub(a),n.dot(n);if(_<=l)c=0,u=b/v,u=he(u,0,1);else{const M=yo.dot($d);if(v<=l)u=0,c=he(-M/_,0,1);else{const R=yo.dot(So),S=_*v-R*R;S!==0?c=he((R*b-M*v)/S,0,1):c=0,u=(R*c+b)/v,u<0?(u=0,c=he(-M/_,0,1)):u>1&&(u=1,c=he((R-M)/_,0,1))}}return n.copy(d).addScaledVector(yo,c),a.copy(m).addScaledVector(So,u),n.distanceToSquared(a)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class _1 extends _r{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){le("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function mx(r,t,n,a){const l=v1(a);switch(n){case gy:return r*t;case vy:return r*t/l.components*l.byteLength;case Sm:return r*t/l.components*l.byteLength;case Uo:return r*t*2/l.components*l.byteLength;case bm:return r*t*2/l.components*l.byteLength;case _y:return r*t*3/l.components*l.byteLength;case ta:return r*t*4/l.components*l.byteLength;case Mm:return r*t*4/l.components*l.byteLength;case Ju:case $u:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case tf:case ef:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Rp:case Dp:return Math.max(r,16)*Math.max(t,8)/4;case wp:case Cp:return Math.max(r,8)*Math.max(t,8)/2;case Lp:case Up:case Op:case Pp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Np:case zp:case Ip:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Fp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Bp:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Hp:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Gp:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Vp:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case kp:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Xp:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case jp:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Wp:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case qp:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Yp:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Zp:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Kp:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Qp:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Jp:case $p:case tm:return Math.ceil(r/4)*Math.ceil(t/4)*16;case em:case nm:return Math.ceil(r/4)*Math.ceil(t/4)*8;case im:case am:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function v1(r){switch(r){case Ti:case hy:return{byteLength:1,components:1};case jl:case dy:case Za:return{byteLength:2,components:1};case xm:case ym:return{byteLength:2,components:4};case _a:case vm:case ha:return{byteLength:4,components:1};case py:case my:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gm}}));typeof window<"u"&&(window.__THREE__?le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gm);function Oy(){let r=null,t=!1,n=null,a=null;function l(c,u){n(c,u),a=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&n!==null&&(a=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function x1(r){const t=new WeakMap;function n(d,m){const p=d.array,g=d.usage,_=p.byteLength,v=r.createBuffer();r.bindBuffer(m,v),r.bufferData(m,p,g),d.onUploadCallback();let b;if(p instanceof Float32Array)b=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?b=r.HALF_FLOAT:b=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=r.SHORT;else if(p instanceof Uint32Array)b=r.UNSIGNED_INT;else if(p instanceof Int32Array)b=r.INT;else if(p instanceof Int8Array)b=r.BYTE;else if(p instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function a(d,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,g);else{_.sort((b,M)=>b.start-M.start);let v=0;for(let b=1;b<_.length;b++){const M=_[v],R=_[b];R.start<=M.start+M.count+1?M.count=Math.max(M.count,R.start+R.count-M.start):(++v,_[v]=R)}_.length=v+1;for(let b=0,M=_.length;b<M;b++){const R=_[b];r.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,n(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:u}}var y1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S1=`#ifdef USE_ALPHAHASH
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
#endif`,b1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,M1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,T1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A1=`#ifdef USE_AOMAP
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
#endif`,w1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,R1=`#ifdef USE_BATCHING
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
#endif`,C1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,D1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,L1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,N1=`#ifdef USE_IRIDESCENCE
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
#endif`,O1=`#ifdef USE_BUMPMAP
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
#endif`,P1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,H1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,G1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,V1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,k1=`#define PI 3.141592653589793
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
} // validated`,X1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,j1=`vec3 transformedNormal = objectNormal;
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
#endif`,W1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Y1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K1="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,J1=`#ifdef USE_ENVMAP
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
#endif`,$1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tT=`#ifdef USE_ENVMAP
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
#endif`,eT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nT=`#ifdef USE_ENVMAP
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
#endif`,iT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oT=`#ifdef USE_GRADIENTMAP
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
}`,lT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fT=`uniform bool receiveShadow;
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
#endif`,hT=`#ifdef USE_ENVMAP
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
#endif`,dT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_T=`PhysicalMaterial material;
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
#endif`,vT=`uniform sampler2D dfgLUT;
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
}`,xT=`
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
#endif`,yT=`#if defined( RE_IndirectDiffuse )
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
#endif`,ST=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ET=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CT=`#if defined( USE_POINTS_UV )
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
#endif`,DT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PT=`#ifdef USE_MORPHTARGETS
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
#endif`,zT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,FT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,BT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VT=`#ifdef USE_NORMALMAP
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
#endif`,kT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ZT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$T=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,aA=`float getShadowMask() {
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
}`,sA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rA=`#ifdef USE_SKINNING
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
#endif`,oA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lA=`#ifdef USE_SKINNING
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
#endif`,cA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dA=`#ifdef USE_TRANSMISSION
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
#endif`,pA=`#ifdef USE_TRANSMISSION
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
#endif`,mA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_A=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yA=`uniform sampler2D t2D;
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
}`,SA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,MA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TA=`#include <common>
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
}`,AA=`#if DEPTH_PACKING == 3200
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
}`,wA=`#define DISTANCE
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
}`,RA=`#define DISTANCE
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
}`,CA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LA=`uniform float scale;
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
}`,UA=`uniform vec3 diffuse;
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
}`,NA=`#include <common>
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
}`,OA=`uniform vec3 diffuse;
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
}`,PA=`#define LAMBERT
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
}`,zA=`#define LAMBERT
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
}`,IA=`#define MATCAP
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
}`,FA=`#define MATCAP
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
}`,BA=`#define NORMAL
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
}`,HA=`#define NORMAL
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
}`,GA=`#define PHONG
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
}`,VA=`#define PHONG
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
}`,kA=`#define STANDARD
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
}`,XA=`#define STANDARD
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
}`,jA=`#define TOON
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
}`,WA=`#define TOON
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
}`,qA=`uniform float size;
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
}`,YA=`uniform vec3 diffuse;
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
}`,ZA=`#include <common>
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
}`,KA=`uniform vec3 color;
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
}`,QA=`uniform float rotation;
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
}`,JA=`uniform vec3 diffuse;
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
}`,xe={alphahash_fragment:y1,alphahash_pars_fragment:S1,alphamap_fragment:b1,alphamap_pars_fragment:M1,alphatest_fragment:E1,alphatest_pars_fragment:T1,aomap_fragment:A1,aomap_pars_fragment:w1,batching_pars_vertex:R1,batching_vertex:C1,begin_vertex:D1,beginnormal_vertex:L1,bsdfs:U1,iridescence_fragment:N1,bumpmap_pars_fragment:O1,clipping_planes_fragment:P1,clipping_planes_pars_fragment:z1,clipping_planes_pars_vertex:I1,clipping_planes_vertex:F1,color_fragment:B1,color_pars_fragment:H1,color_pars_vertex:G1,color_vertex:V1,common:k1,cube_uv_reflection_fragment:X1,defaultnormal_vertex:j1,displacementmap_pars_vertex:W1,displacementmap_vertex:q1,emissivemap_fragment:Y1,emissivemap_pars_fragment:Z1,colorspace_fragment:K1,colorspace_pars_fragment:Q1,envmap_fragment:J1,envmap_common_pars_fragment:$1,envmap_pars_fragment:tT,envmap_pars_vertex:eT,envmap_physical_pars_fragment:hT,envmap_vertex:nT,fog_vertex:iT,fog_pars_vertex:aT,fog_fragment:sT,fog_pars_fragment:rT,gradientmap_pars_fragment:oT,lightmap_pars_fragment:lT,lights_lambert_fragment:cT,lights_lambert_pars_fragment:uT,lights_pars_begin:fT,lights_toon_fragment:dT,lights_toon_pars_fragment:pT,lights_phong_fragment:mT,lights_phong_pars_fragment:gT,lights_physical_fragment:_T,lights_physical_pars_fragment:vT,lights_fragment_begin:xT,lights_fragment_maps:yT,lights_fragment_end:ST,logdepthbuf_fragment:bT,logdepthbuf_pars_fragment:MT,logdepthbuf_pars_vertex:ET,logdepthbuf_vertex:TT,map_fragment:AT,map_pars_fragment:wT,map_particle_fragment:RT,map_particle_pars_fragment:CT,metalnessmap_fragment:DT,metalnessmap_pars_fragment:LT,morphinstance_vertex:UT,morphcolor_vertex:NT,morphnormal_vertex:OT,morphtarget_pars_vertex:PT,morphtarget_vertex:zT,normal_fragment_begin:IT,normal_fragment_maps:FT,normal_pars_fragment:BT,normal_pars_vertex:HT,normal_vertex:GT,normalmap_pars_fragment:VT,clearcoat_normal_fragment_begin:kT,clearcoat_normal_fragment_maps:XT,clearcoat_pars_fragment:jT,iridescence_pars_fragment:WT,opaque_fragment:qT,packing:YT,premultiplied_alpha_fragment:ZT,project_vertex:KT,dithering_fragment:QT,dithering_pars_fragment:JT,roughnessmap_fragment:$T,roughnessmap_pars_fragment:tA,shadowmap_pars_fragment:eA,shadowmap_pars_vertex:nA,shadowmap_vertex:iA,shadowmask_pars_fragment:aA,skinbase_vertex:sA,skinning_pars_vertex:rA,skinning_vertex:oA,skinnormal_vertex:lA,specularmap_fragment:cA,specularmap_pars_fragment:uA,tonemapping_fragment:fA,tonemapping_pars_fragment:hA,transmission_fragment:dA,transmission_pars_fragment:pA,uv_pars_fragment:mA,uv_pars_vertex:gA,uv_vertex:_A,worldpos_vertex:vA,background_vert:xA,background_frag:yA,backgroundCube_vert:SA,backgroundCube_frag:bA,cube_vert:MA,cube_frag:EA,depth_vert:TA,depth_frag:AA,distance_vert:wA,distance_frag:RA,equirect_vert:CA,equirect_frag:DA,linedashed_vert:LA,linedashed_frag:UA,meshbasic_vert:NA,meshbasic_frag:OA,meshlambert_vert:PA,meshlambert_frag:zA,meshmatcap_vert:IA,meshmatcap_frag:FA,meshnormal_vert:BA,meshnormal_frag:HA,meshphong_vert:GA,meshphong_frag:VA,meshphysical_vert:kA,meshphysical_frag:XA,meshtoon_vert:jA,meshtoon_frag:WA,points_vert:qA,points_frag:YA,shadow_vert:ZA,shadow_frag:KA,sprite_vert:QA,sprite_frag:JA},Nt={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},ui={basic:{uniforms:ei([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:ei([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:ei([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:ei([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:ei([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new be(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:ei([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:ei([Nt.points,Nt.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:ei([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:ei([Nt.common,Nt.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:ei([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:ei([Nt.sprite,Nt.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distance:{uniforms:ei([Nt.common,Nt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distance_vert,fragmentShader:xe.distance_frag},shadow:{uniforms:ei([Nt.lights,Nt.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};ui.physical={uniforms:ei([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};const Bu={r:0,b:0,g:0},sr=new va,$A=new en;function tw(r,t,n,a,l,c){const u=new be(0);let d=l===!0?0:1,m,p,g=null,_=0,v=null;function b(w){let U=w.isScene===!0?w.background:null;if(U&&U.isTexture){const C=w.backgroundBlurriness>0;U=t.get(U,C)}return U}function M(w){let U=!1;const C=b(w);C===null?S(u,d):C&&C.isColor&&(S(C,1),U=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(r.autoClear||U)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function R(w,U){const C=b(U);C&&(C.isCubeTexture||C.mapping===ff)?(p===void 0&&(p=new rn(new Jl(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:Oo(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,B,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),sr.copy(U.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),p.material.uniforms.envMap.value=C,p.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4($A.makeRotationFromEuler(sr)),p.material.toneMapped=Ne.getTransfer(C.colorSpace)!==ke,(g!==C||_!==C.version||v!==r.toneMapping)&&(p.material.needsUpdate=!0,g=C,_=C.version,v=r.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new rn(new $l(2,2),new Hi({name:"BackgroundMaterial",uniforms:Oo(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Ne.getTransfer(C.colorSpace)!==ke,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||_!==C.version||v!==r.toneMapping)&&(m.material.needsUpdate=!0,g=C,_=C.version,v=r.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function S(w,U){w.getRGB(Bu,Uy(r)),n.buffers.color.setClear(Bu.r,Bu.g,Bu.b,U,c)}function x(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(w,U=1){u.set(w),d=U,S(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(w){d=w,S(u,d)},render:M,addToRenderList:R,dispose:x}}function ew(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},l=v(null);let c=l,u=!1;function d(G,Y,tt,$,Q){let P=!1;const H=_(G,$,tt,Y);c!==H&&(c=H,p(c.object)),P=b(G,$,tt,Q),P&&M(G,$,tt,Q),Q!==null&&t.update(Q,r.ELEMENT_ARRAY_BUFFER),(P||u)&&(u=!1,C(G,Y,tt,$),Q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function m(){return r.createVertexArray()}function p(G){return r.bindVertexArray(G)}function g(G){return r.deleteVertexArray(G)}function _(G,Y,tt,$){const Q=$.wireframe===!0;let P=a[Y.id];P===void 0&&(P={},a[Y.id]=P);const H=G.isInstancedMesh===!0?G.id:0;let ct=P[H];ct===void 0&&(ct={},P[H]=ct);let pt=ct[tt.id];pt===void 0&&(pt={},ct[tt.id]=pt);let bt=pt[Q];return bt===void 0&&(bt=v(m()),pt[Q]=bt),bt}function v(G){const Y=[],tt=[],$=[];for(let Q=0;Q<n;Q++)Y[Q]=0,tt[Q]=0,$[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:tt,attributeDivisors:$,object:G,attributes:{},index:null}}function b(G,Y,tt,$){const Q=c.attributes,P=Y.attributes;let H=0;const ct=tt.getAttributes();for(const pt in ct)if(ct[pt].location>=0){const A=Q[pt];let V=P[pt];if(V===void 0&&(pt==="instanceMatrix"&&G.instanceMatrix&&(V=G.instanceMatrix),pt==="instanceColor"&&G.instanceColor&&(V=G.instanceColor)),A===void 0||A.attribute!==V||V&&A.data!==V.data)return!0;H++}return c.attributesNum!==H||c.index!==$}function M(G,Y,tt,$){const Q={},P=Y.attributes;let H=0;const ct=tt.getAttributes();for(const pt in ct)if(ct[pt].location>=0){let A=P[pt];A===void 0&&(pt==="instanceMatrix"&&G.instanceMatrix&&(A=G.instanceMatrix),pt==="instanceColor"&&G.instanceColor&&(A=G.instanceColor));const V={};V.attribute=A,A&&A.data&&(V.data=A.data),Q[pt]=V,H++}c.attributes=Q,c.attributesNum=H,c.index=$}function R(){const G=c.newAttributes;for(let Y=0,tt=G.length;Y<tt;Y++)G[Y]=0}function S(G){x(G,0)}function x(G,Y){const tt=c.newAttributes,$=c.enabledAttributes,Q=c.attributeDivisors;tt[G]=1,$[G]===0&&(r.enableVertexAttribArray(G),$[G]=1),Q[G]!==Y&&(r.vertexAttribDivisor(G,Y),Q[G]=Y)}function w(){const G=c.newAttributes,Y=c.enabledAttributes;for(let tt=0,$=Y.length;tt<$;tt++)Y[tt]!==G[tt]&&(r.disableVertexAttribArray(tt),Y[tt]=0)}function U(G,Y,tt,$,Q,P,H){H===!0?r.vertexAttribIPointer(G,Y,tt,Q,P):r.vertexAttribPointer(G,Y,tt,$,Q,P)}function C(G,Y,tt,$){R();const Q=$.attributes,P=tt.getAttributes(),H=Y.defaultAttributeValues;for(const ct in P){const pt=P[ct];if(pt.location>=0){let bt=Q[ct];if(bt===void 0&&(ct==="instanceMatrix"&&G.instanceMatrix&&(bt=G.instanceMatrix),ct==="instanceColor"&&G.instanceColor&&(bt=G.instanceColor)),bt!==void 0){const A=bt.normalized,V=bt.itemSize,ft=t.get(bt);if(ft===void 0)continue;const Mt=ft.buffer,Ot=ft.type,et=ft.bytesPerElement,vt=Ot===r.INT||Ot===r.UNSIGNED_INT||bt.gpuType===vm;if(bt.isInterleavedBufferAttribute){const Et=bt.data,kt=Et.stride,Qt=bt.offset;if(Et.isInstancedInterleavedBuffer){for(let te=0;te<pt.locationSize;te++)x(pt.location+te,Et.meshPerAttribute);G.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let te=0;te<pt.locationSize;te++)S(pt.location+te);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let te=0;te<pt.locationSize;te++)U(pt.location+te,V/pt.locationSize,Ot,A,kt*et,(Qt+V/pt.locationSize*te)*et,vt)}else{if(bt.isInstancedBufferAttribute){for(let Et=0;Et<pt.locationSize;Et++)x(pt.location+Et,bt.meshPerAttribute);G.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Et=0;Et<pt.locationSize;Et++)S(pt.location+Et);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let Et=0;Et<pt.locationSize;Et++)U(pt.location+Et,V/pt.locationSize,Ot,A,V*et,V/pt.locationSize*Et*et,vt)}}else if(H!==void 0){const A=H[ct];if(A!==void 0)switch(A.length){case 2:r.vertexAttrib2fv(pt.location,A);break;case 3:r.vertexAttrib3fv(pt.location,A);break;case 4:r.vertexAttrib4fv(pt.location,A);break;default:r.vertexAttrib1fv(pt.location,A)}}}}w()}function I(){N();for(const G in a){const Y=a[G];for(const tt in Y){const $=Y[tt];for(const Q in $){const P=$[Q];for(const H in P)g(P[H].object),delete P[H];delete $[Q]}}delete a[G]}}function B(G){if(a[G.id]===void 0)return;const Y=a[G.id];for(const tt in Y){const $=Y[tt];for(const Q in $){const P=$[Q];for(const H in P)g(P[H].object),delete P[H];delete $[Q]}}delete a[G.id]}function O(G){for(const Y in a){const tt=a[Y];for(const $ in tt){const Q=tt[$];if(Q[G.id]===void 0)continue;const P=Q[G.id];for(const H in P)g(P[H].object),delete P[H];delete Q[G.id]}}}function T(G){for(const Y in a){const tt=a[Y],$=G.isInstancedMesh===!0?G.id:0,Q=tt[$];if(Q!==void 0){for(const P in Q){const H=Q[P];for(const ct in H)g(H[ct].object),delete H[ct];delete Q[P]}delete tt[$],Object.keys(tt).length===0&&delete a[Y]}}}function N(){ot(),u=!0,c!==l&&(c=l,p(c.object))}function ot(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:N,resetDefaultState:ot,dispose:I,releaseStatesOfGeometry:B,releaseStatesOfObject:T,releaseStatesOfProgram:O,initAttributes:R,enableAttribute:S,disableUnusedAttributes:w}}function nw(r,t,n){let a;function l(p){a=p}function c(p,g){r.drawArrays(a,p,g),n.update(g,a,1)}function u(p,g,_){_!==0&&(r.drawArraysInstanced(a,p,g,_),n.update(g,a,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,_);let b=0;for(let M=0;M<_;M++)b+=g[M];n.update(b,a,1)}function m(p,g,_,v){if(_===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let M=0;M<p.length;M++)u(p[M],g[M],v[M]);else{b.multiDrawArraysInstancedWEBGL(a,p,0,g,0,v,0,_);let M=0;for(let R=0;R<_;R++)M+=g[R]*v[R];n.update(M,a,1)}}this.setMode=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function iw(r,t,n,a){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function u(O){return!(O!==ta&&a.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const T=O===Za&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Ti&&a.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ha&&!T)}function m(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(le("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),b=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),B=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:b,maxVertexTextures:M,maxTextureSize:R,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:w,maxVaryings:U,maxFragmentUniforms:C,maxSamples:I,samples:B}}function aw(r){const t=this;let n=null,a=0,l=!1,c=!1;const u=new Ds,d=new ve,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const b=_.length!==0||v||a!==0||l;return l=v,a=_.length,b},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,b){const M=_.clippingPlanes,R=_.clipIntersection,S=_.clipShadows,x=r.get(_);if(!l||M===null||M.length===0||c&&!S)c?g(null):p();else{const w=c?0:a,U=w*4;let C=x.clippingState||null;m.value=C,C=g(M,v,U,b);for(let I=0;I!==U;++I)C[I]=n[I];x.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,v,b,M){const R=_!==null?_.length:0;let S=null;if(R!==0){if(S=m.value,M!==!0||S===null){const x=b+R*4,w=v.matrixWorldInverse;d.getNormalMatrix(w),(S===null||S.length<x)&&(S=new Float32Array(x));for(let U=0,C=b;U!==R;++U,C+=4)u.copy(_[U]).applyMatrix4(w,d),u.normal.toArray(S,C),S[C+3]=u.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,S}}const Us=4,gx=[.125,.215,.35,.446,.526,.582],ur=20,sw=256,Pl=new zm,_x=new be;let tp=null,ep=0,np=0,ip=!1;const rw=new X;class vx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,l=100,c={}){const{size:u=256,position:d=rw}=c;tp=this._renderer.getRenderTarget(),ep=this._renderer.getActiveCubeFace(),np=this._renderer.getActiveMipmapLevel(),ip=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,a,l,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(tp,ep,np),this._renderer.xr.enabled=ip,t.scissorTest=!1,bo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===gr||t.mapping===Lo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tp=this._renderer.getRenderTarget(),ep=this._renderer.getActiveCubeFace(),np=this._renderer.getActiveMipmapLevel(),ip=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Za,format:ta,colorSpace:No,depthBuffer:!1},l=xx(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xx(t,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ow(c)),this._blurMaterial=cw(c,t,n),this._ggxMaterial=lw(c,t,n)}return l}_compileMaterial(t){const n=new rn(new Xn,t);this._renderer.compile(n,Pl)}_sceneToCubeUV(t,n,a,l,c){const m=new Ii(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,b=_.toneMapping;_.getClearColor(_x),_.toneMapping=ma,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rn(new Jl,new Mi({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,S=R.material;let x=!1;const w=t.background;w?w.isColor&&(S.color.copy(w),t.background=null,x=!0):(S.color.copy(_x),x=!0);for(let U=0;U<6;U++){const C=U%3;C===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[U],c.y,c.z)):C===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[U]));const I=this._cubeSize;bo(l,C*I,U>2?I:0,I,I),_.setRenderTarget(l),x&&_.render(R,m),_.render(t,m)}_.toneMapping=b,_.autoClear=v,t.background=w}_textureToCubeUV(t,n){const a=this._renderer,l=t.mapping===gr||t.mapping===Lo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yx());const c=l?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;bo(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(u,Pl)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=a}_applyGGXFilter(t,n,a){const l=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[a];d.material=u;const m=u.uniforms,p=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),v=0+p*1.25,b=_*v,{_lodMax:M}=this,R=this._sizeLods[a],S=3*R*(a>M-Us?a-M+Us:0),x=4*(this._cubeSize-R);m.envMap.value=t.texture,m.roughness.value=b,m.mipInt.value=M-n,bo(c,S,x,3*R,2*R),l.setRenderTarget(c),l.render(d,Pl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=M-a,bo(t,S,x,3*R,2*R),l.setRenderTarget(t),l.render(d,Pl)}_blur(t,n,a,l,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,l,"latitudinal",c),this._halfBlur(u,t,a,a,l,"longitudinal",c)}_halfBlur(t,n,a,l,c,u,d){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ue("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const v=p.uniforms,b=this._sizeLods[a]-1,M=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*ur-1),R=c/M,S=isFinite(c)?1+Math.floor(g*R):ur;S>ur&&le(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ur}`);const x=[];let w=0;for(let O=0;O<ur;++O){const T=O/R,N=Math.exp(-T*T/2);x.push(N),O===0?w+=N:O<S&&(w+=2*N)}for(let O=0;O<x.length;O++)x[O]=x[O]/w;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=u==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:U}=this;v.dTheta.value=M,v.mipInt.value=U-a;const C=this._sizeLods[l],I=3*C*(l>U-Us?l-U+Us:0),B=4*(this._cubeSize-C);bo(n,I,B,3*C,2*C),m.setRenderTarget(n),m.render(_,Pl)}}function ow(r){const t=[],n=[],a=[];let l=r;const c=r-Us+1+gx.length;for(let u=0;u<c;u++){const d=Math.pow(2,l);t.push(d);let m=1/d;u>r-Us?m=gx[u-r+Us-1]:u===0&&(m=0),n.push(m);const p=1/(d-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],b=6,M=6,R=3,S=2,x=1,w=new Float32Array(R*M*b),U=new Float32Array(S*M*b),C=new Float32Array(x*M*b);for(let B=0;B<b;B++){const O=B%3*2/3-1,T=B>2?0:-1,N=[O,T,0,O+2/3,T,0,O+2/3,T+1,0,O,T,0,O+2/3,T+1,0,O,T+1,0];w.set(N,R*M*B),U.set(v,S*M*B);const ot=[B,B,B,B,B,B];C.set(ot,x*M*B)}const I=new Xn;I.setAttribute("position",new Bi(w,R)),I.setAttribute("uv",new Bi(U,S)),I.setAttribute("faceIndex",new Bi(C,x)),a.push(new rn(I,null)),l>Us&&l--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function xx(r,t,n){const a=new ga(r,t,n);return a.texture.mapping=ff,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function bo(r,t,n,a,l){r.viewport.set(t,n,a,l),r.scissor.set(t,n,a,l)}function lw(r,t,n){return new Hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sw,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hf(),fragmentShader:`

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
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function cw(r,t,n){const a=new Float32Array(ur),l=new X(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:ur,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:hf(),fragmentShader:`

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
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function yx(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hf(),fragmentShader:`

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
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function Sx(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function hf(){return`

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
	`}class Py extends ga{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},l=[a,a,a,a,a,a];this.texture=new Dy(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Jl(5,5,5),c=new Hi({name:"CubemapFromEquirect",uniforms:Oo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ni,blending:Wa});c.uniforms.tEquirect.value=n;const u=new rn(l,c),d=n.minFilter;return n.minFilter===fr&&(n.minFilter=Un),new h1(1,10,this).update(t,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,l=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,l);t.setRenderTarget(c)}}function uw(r){let t=new WeakMap,n=new WeakMap,a=null;function l(v,b=!1){return v==null?null:b?u(v):c(v)}function c(v){if(v&&v.isTexture){const b=v.mapping;if(b===Td||b===Ad)if(t.has(v)){const M=t.get(v).texture;return d(M,v.mapping)}else{const M=v.image;if(M&&M.height>0){const R=new Py(M.height);return R.fromEquirectangularTexture(r,v),t.set(v,R),v.addEventListener("dispose",p),d(R.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const b=v.mapping,M=b===Td||b===Ad,R=b===gr||b===Lo;if(M||R){let S=n.get(v);const x=S!==void 0?S.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==x)return a===null&&(a=new vx(r)),S=M?a.fromEquirectangular(v,S):a.fromCubemap(v,S),S.texture.pmremVersion=v.pmremVersion,n.set(v,S),S.texture;if(S!==void 0)return S.texture;{const w=v.image;return M&&w&&w.height>0||R&&w&&m(w)?(a===null&&(a=new vx(r)),S=M?a.fromEquirectangular(v):a.fromCubemap(v),S.texture.pmremVersion=v.pmremVersion,n.set(v,S),v.addEventListener("dispose",g),S.texture):null}}}return v}function d(v,b){return b===Td?v.mapping=gr:b===Ad&&(v.mapping=Lo),v}function m(v){let b=0;const M=6;for(let R=0;R<M;R++)v[R]!==void 0&&b++;return b===M}function p(v){const b=v.target;b.removeEventListener("dispose",p);const M=t.get(b);M!==void 0&&(t.delete(b),M.dispose())}function g(v){const b=v.target;b.removeEventListener("dispose",g);const M=n.get(b);M!==void 0&&(n.delete(b),M.dispose())}function _(){t=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:l,dispose:_}}function fw(r){const t={};function n(a){if(t[a]!==void 0)return t[a];const l=r.getExtension(a);return t[a]=l,l}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const l=n(a);return l===null&&lf("WebGLRenderer: "+a+" extension not supported."),l}}}function hw(r,t,n,a){const l={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const M in v.attributes)t.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete l[v.id];const b=c.get(v);b&&(t.remove(b),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function d(_,v){return l[v.id]===!0||(v.addEventListener("dispose",u),l[v.id]=!0,n.memory.geometries++),v}function m(_){const v=_.attributes;for(const b in v)t.update(v[b],r.ARRAY_BUFFER)}function p(_){const v=[],b=_.index,M=_.attributes.position;let R=0;if(M===void 0)return;if(b!==null){const w=b.array;R=b.version;for(let U=0,C=w.length;U<C;U+=3){const I=w[U+0],B=w[U+1],O=w[U+2];v.push(I,B,B,O,O,I)}}else{const w=M.array;R=M.version;for(let U=0,C=w.length/3-1;U<C;U+=3){const I=U+0,B=U+1,O=U+2;v.push(I,B,B,O,O,I)}}const S=new(M.count>=65535?Ay:Ty)(v,1);S.version=R;const x=c.get(_);x&&t.remove(x),c.set(_,S)}function g(_){const v=c.get(_);if(v){const b=_.index;b!==null&&v.version<b.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function dw(r,t,n){let a;function l(v){a=v}let c,u;function d(v){c=v.type,u=v.bytesPerElement}function m(v,b){r.drawElements(a,b,c,v*u),n.update(b,a,1)}function p(v,b,M){M!==0&&(r.drawElementsInstanced(a,b,c,v*u,M),n.update(b,a,M))}function g(v,b,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,b,0,c,v,0,M);let S=0;for(let x=0;x<M;x++)S+=b[x];n.update(S,a,1)}function _(v,b,M,R){if(M===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)p(v[x]/u,b[x],R[x]);else{S.multiDrawElementsInstancedWEBGL(a,b,0,c,v,0,R,0,M);let x=0;for(let w=0;w<M;w++)x+=b[w]*R[w];n.update(x,a,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function pw(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,d){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=d*(c/3);break;case r.LINES:n.lines+=d*(c/2);break;case r.LINE_STRIP:n.lines+=d*(c-1);break;case r.LINE_LOOP:n.lines+=d*c;break;case r.POINTS:n.points+=d*c;break;default:Ue("WebGLInfo: Unknown draw mode:",u);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:l,update:a}}function mw(r,t,n){const a=new WeakMap,l=new Ke;function c(u,d,m){const p=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(d);if(v===void 0||v.count!==_){let ot=function(){T.dispose(),a.delete(d),d.removeEventListener("dispose",ot)};var b=ot;v!==void 0&&v.texture.dispose();const M=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let C=0;M===!0&&(C=1),R===!0&&(C=2),S===!0&&(C=3);let I=d.attributes.position.count*C,B=1;I>t.maxTextureSize&&(B=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const O=new Float32Array(I*B*4*_),T=new by(O,I,B,_);T.type=ha,T.needsUpdate=!0;const N=C*4;for(let G=0;G<_;G++){const Y=x[G],tt=w[G],$=U[G],Q=I*B*4*G;for(let P=0;P<Y.count;P++){const H=P*N;M===!0&&(l.fromBufferAttribute(Y,P),O[Q+H+0]=l.x,O[Q+H+1]=l.y,O[Q+H+2]=l.z,O[Q+H+3]=0),R===!0&&(l.fromBufferAttribute(tt,P),O[Q+H+4]=l.x,O[Q+H+5]=l.y,O[Q+H+6]=l.z,O[Q+H+7]=0),S===!0&&(l.fromBufferAttribute($,P),O[Q+H+8]=l.x,O[Q+H+9]=l.y,O[Q+H+10]=l.z,O[Q+H+11]=$.itemSize===4?l.w:1)}}v={count:_,texture:T,size:new ne(I,B)},a.set(d,v),d.addEventListener("dispose",ot)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let M=0;for(let S=0;S<p.length;S++)M+=p[S];const R=d.morphTargetsRelative?1:1-M;m.getUniforms().setValue(r,"morphTargetBaseInfluence",R),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",v.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function gw(r,t,n,a,l){let c=new WeakMap;function u(p){const g=l.render.frame,_=p.geometry,v=t.get(p,_);if(c.get(v)!==g&&(t.update(v),c.set(v,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==g&&(n.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,g))),p.isSkinnedMesh){const b=p.skeleton;c.get(b)!==g&&(b.update(),c.set(b,g))}return v}function d(){c=new WeakMap}function m(p){const g=p.target;g.removeEventListener("dispose",m),a.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:u,dispose:d}}const _w={[ay]:"LINEAR_TONE_MAPPING",[sy]:"REINHARD_TONE_MAPPING",[ry]:"CINEON_TONE_MAPPING",[oy]:"ACES_FILMIC_TONE_MAPPING",[cy]:"AGX_TONE_MAPPING",[uy]:"NEUTRAL_TONE_MAPPING",[ly]:"CUSTOM_TONE_MAPPING"};function vw(r,t,n,a,l){const c=new ga(t,n,{type:r,depthBuffer:a,stencilBuffer:l}),u=new ga(t,n,{type:Za,depthBuffer:!1,stencilBuffer:!1}),d=new Xn;d.setAttribute("position",new hn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new hn([0,2,0,0,2,0],2));const m=new JE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new rn(d,m),g=new zm(-1,1,1,-1,0,1);let _=null,v=null,b=!1,M,R=null,S=[],x=!1;this.setSize=function(w,U){c.setSize(w,U),u.setSize(w,U);for(let C=0;C<S.length;C++){const I=S[C];I.setSize&&I.setSize(w,U)}},this.setEffects=function(w){S=w,x=S.length>0&&S[0].isRenderPass===!0;const U=c.width,C=c.height;for(let I=0;I<S.length;I++){const B=S[I];B.setSize&&B.setSize(U,C)}},this.begin=function(w,U){if(b||w.toneMapping===ma&&S.length===0)return!1;if(R=U,U!==null){const C=U.width,I=U.height;(c.width!==C||c.height!==I)&&this.setSize(C,I)}return x===!1&&w.setRenderTarget(c),M=w.toneMapping,w.toneMapping=ma,!0},this.hasRenderPass=function(){return x},this.end=function(w,U){w.toneMapping=M,b=!0;let C=c,I=u;for(let B=0;B<S.length;B++){const O=S[B];if(O.enabled!==!1&&(O.render(w,I,C,U),O.needsSwap!==!1)){const T=C;C=I,I=T}}if(_!==w.outputColorSpace||v!==w.toneMapping){_=w.outputColorSpace,v=w.toneMapping,m.defines={},Ne.getTransfer(_)===ke&&(m.defines.SRGB_TRANSFER="");const B=_w[v];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=C.texture,w.setRenderTarget(R),w.render(p,g),R=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){c.dispose(),u.dispose(),d.dispose(),m.dispose()}}const zy=new Vn,cm=new Kl(1,1),Iy=new by,Fy=new RE,By=new Dy,bx=[],Mx=[],Ex=new Float32Array(16),Tx=new Float32Array(9),Ax=new Float32Array(4);function zo(r,t,n){const a=r[0];if(a<=0||a>0)return r;const l=t*n;let c=bx[l];if(c===void 0&&(c=new Float32Array(l),bx[l]=c),t!==0){a.toArray(c,0);for(let u=1,d=0;u!==t;++u)d+=n,r[u].toArray(c,d)}return c}function An(r,t){if(r.length!==t.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==t[n])return!1;return!0}function wn(r,t){for(let n=0,a=t.length;n<a;n++)r[n]=t[n]}function df(r,t){let n=Mx[t];n===void 0&&(n=new Int32Array(t),Mx[t]=n);for(let a=0;a!==t;++a)n[a]=r.allocateTextureUnit();return n}function xw(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function yw(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(An(n,t))return;r.uniform2fv(this.addr,t),wn(n,t)}}function Sw(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(An(n,t))return;r.uniform3fv(this.addr,t),wn(n,t)}}function bw(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(An(n,t))return;r.uniform4fv(this.addr,t),wn(n,t)}}function Mw(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(An(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),wn(n,t)}else{if(An(n,a))return;Ax.set(a),r.uniformMatrix2fv(this.addr,!1,Ax),wn(n,a)}}function Ew(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(An(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),wn(n,t)}else{if(An(n,a))return;Tx.set(a),r.uniformMatrix3fv(this.addr,!1,Tx),wn(n,a)}}function Tw(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(An(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),wn(n,t)}else{if(An(n,a))return;Ex.set(a),r.uniformMatrix4fv(this.addr,!1,Ex),wn(n,a)}}function Aw(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function ww(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(An(n,t))return;r.uniform2iv(this.addr,t),wn(n,t)}}function Rw(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(An(n,t))return;r.uniform3iv(this.addr,t),wn(n,t)}}function Cw(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(An(n,t))return;r.uniform4iv(this.addr,t),wn(n,t)}}function Dw(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function Lw(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(An(n,t))return;r.uniform2uiv(this.addr,t),wn(n,t)}}function Uw(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(An(n,t))return;r.uniform3uiv(this.addr,t),wn(n,t)}}function Nw(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(An(n,t))return;r.uniform4uiv(this.addr,t),wn(n,t)}}function Ow(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(cm.compareFunction=n.isReversedDepthBuffer()?Tm:Em,c=cm):c=zy,n.setTexture2D(t||c,l)}function Pw(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTexture3D(t||Fy,l)}function zw(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTextureCube(t||By,l)}function Iw(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTexture2DArray(t||Iy,l)}function Fw(r){switch(r){case 5126:return xw;case 35664:return yw;case 35665:return Sw;case 35666:return bw;case 35674:return Mw;case 35675:return Ew;case 35676:return Tw;case 5124:case 35670:return Aw;case 35667:case 35671:return ww;case 35668:case 35672:return Rw;case 35669:case 35673:return Cw;case 5125:return Dw;case 36294:return Lw;case 36295:return Uw;case 36296:return Nw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ow;case 35679:case 36299:case 36307:return Pw;case 35680:case 36300:case 36308:case 36293:return zw;case 36289:case 36303:case 36311:case 36292:return Iw}}function Bw(r,t){r.uniform1fv(this.addr,t)}function Hw(r,t){const n=zo(t,this.size,2);r.uniform2fv(this.addr,n)}function Gw(r,t){const n=zo(t,this.size,3);r.uniform3fv(this.addr,n)}function Vw(r,t){const n=zo(t,this.size,4);r.uniform4fv(this.addr,n)}function kw(r,t){const n=zo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function Xw(r,t){const n=zo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function jw(r,t){const n=zo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function Ww(r,t){r.uniform1iv(this.addr,t)}function qw(r,t){r.uniform2iv(this.addr,t)}function Yw(r,t){r.uniform3iv(this.addr,t)}function Zw(r,t){r.uniform4iv(this.addr,t)}function Kw(r,t){r.uniform1uiv(this.addr,t)}function Qw(r,t){r.uniform2uiv(this.addr,t)}function Jw(r,t){r.uniform3uiv(this.addr,t)}function $w(r,t){r.uniform4uiv(this.addr,t)}function t2(r,t,n){const a=this.cache,l=t.length,c=df(n,l);An(a,c)||(r.uniform1iv(this.addr,c),wn(a,c));let u;this.type===r.SAMPLER_2D_SHADOW?u=cm:u=zy;for(let d=0;d!==l;++d)n.setTexture2D(t[d]||u,c[d])}function e2(r,t,n){const a=this.cache,l=t.length,c=df(n,l);An(a,c)||(r.uniform1iv(this.addr,c),wn(a,c));for(let u=0;u!==l;++u)n.setTexture3D(t[u]||Fy,c[u])}function n2(r,t,n){const a=this.cache,l=t.length,c=df(n,l);An(a,c)||(r.uniform1iv(this.addr,c),wn(a,c));for(let u=0;u!==l;++u)n.setTextureCube(t[u]||By,c[u])}function i2(r,t,n){const a=this.cache,l=t.length,c=df(n,l);An(a,c)||(r.uniform1iv(this.addr,c),wn(a,c));for(let u=0;u!==l;++u)n.setTexture2DArray(t[u]||Iy,c[u])}function a2(r){switch(r){case 5126:return Bw;case 35664:return Hw;case 35665:return Gw;case 35666:return Vw;case 35674:return kw;case 35675:return Xw;case 35676:return jw;case 5124:case 35670:return Ww;case 35667:case 35671:return qw;case 35668:case 35672:return Yw;case 35669:case 35673:return Zw;case 5125:return Kw;case 36294:return Qw;case 36295:return Jw;case 36296:return $w;case 35678:case 36198:case 36298:case 36306:case 35682:return t2;case 35679:case 36299:case 36307:return e2;case 35680:case 36300:case 36308:case 36293:return n2;case 36289:case 36303:case 36311:case 36292:return i2}}class s2{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=Fw(n.type)}}class r2{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=a2(n.type)}}class o2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const l=this.seq;for(let c=0,u=l.length;c!==u;++c){const d=l[c];d.setValue(t,n[d.id],a)}}}const ap=/(\w+)(\])?(\[|\.)?/g;function wx(r,t){r.seq.push(t),r.map[t.id]=t}function l2(r,t,n){const a=r.name,l=a.length;for(ap.lastIndex=0;;){const c=ap.exec(a),u=ap.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&u+2===l){wx(n,p===void 0?new s2(d,r,t):new r2(d,r,t));break}else{let _=n.map[d];_===void 0&&(_=new o2(d),wx(n,_)),n=_}}}class af{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const d=t.getActiveUniform(n,u),m=t.getUniformLocation(n,d.name);l2(d,m,this)}const l=[],c=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(u):c.push(u);l.length>0&&(this.seq=l.concat(c))}setValue(t,n,a,l){const c=this.map[n];c!==void 0&&c.setValue(t,a,l)}setOptional(t,n,a){const l=n[a];l!==void 0&&this.setValue(t,a,l)}static upload(t,n,a,l){for(let c=0,u=n.length;c!==u;++c){const d=n[c],m=a[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,n){const a=[];for(let l=0,c=t.length;l!==c;++l){const u=t[l];u.id in n&&a.push(u)}return a}}function Rx(r,t,n){const a=r.createShader(t);return r.shaderSource(a,n),r.compileShader(a),a}const c2=37297;let u2=0;function f2(r,t){const n=r.split(`
`),a=[],l=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=l;u<c;u++){const d=u+1;a.push(`${d===t?">":" "} ${d}: ${n[u]}`)}return a.join(`
`)}const Cx=new ve;function h2(r){Ne._getMatrix(Cx,Ne.workingColorSpace,r);const t=`mat3( ${Cx.elements.map(n=>n.toFixed(4))} )`;switch(Ne.getTransfer(r)){case rf:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return le("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Dx(r,t,n){const a=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+f2(r.getShaderSource(t),d)}else return c}function d2(r,t){const n=h2(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const p2={[ay]:"Linear",[sy]:"Reinhard",[ry]:"Cineon",[oy]:"ACESFilmic",[cy]:"AgX",[uy]:"Neutral",[ly]:"Custom"};function m2(r,t){const n=p2[t];return n===void 0?(le("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Hu=new X;function g2(){Ne.getLuminanceCoefficients(Hu);const r=Hu.x.toFixed(4),t=Hu.y.toFixed(4),n=Hu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bl).join(`
`)}function v2(r){const t=[];for(const n in r){const a=r[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function x2(r,t){const n={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=r.getActiveAttrib(t,l),u=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:r.getAttribLocation(t,u),locationSize:d}}return n}function Bl(r){return r!==""}function Lx(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ux(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const y2=/^[ \t]*#include +<([\w\d./]+)>/gm;function um(r){return r.replace(y2,b2)}const S2=new Map;function b2(r,t){let n=xe[t];if(n===void 0){const a=S2.get(t);if(a!==void 0)n=xe[a],le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return um(n)}const M2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nx(r){return r.replace(M2,E2)}function E2(r,t,n,a){let l="";for(let c=parseInt(t);c<parseInt(n);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Ox(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const T2={[Qu]:"SHADOWMAP_TYPE_PCF",[Fl]:"SHADOWMAP_TYPE_VSM"};function A2(r){return T2[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const w2={[gr]:"ENVMAP_TYPE_CUBE",[Lo]:"ENVMAP_TYPE_CUBE",[ff]:"ENVMAP_TYPE_CUBE_UV"};function R2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":w2[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const C2={[Lo]:"ENVMAP_MODE_REFRACTION"};function D2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":C2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const L2={[_m]:"ENVMAP_BLENDING_MULTIPLY",[WM]:"ENVMAP_BLENDING_MIX",[qM]:"ENVMAP_BLENDING_ADD"};function U2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":L2[r.combine]||"ENVMAP_BLENDING_NONE"}function N2(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function O2(r,t,n,a){const l=r.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const m=A2(n),p=R2(n),g=D2(n),_=U2(n),v=N2(n),b=_2(n),M=v2(c),R=l.createProgram();let S,x,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Bl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Bl).join(`
`),x.length>0&&(x+=`
`)):(S=[Ox(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bl).join(`
`),x=[Ox(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ma?"#define TONE_MAPPING":"",n.toneMapping!==ma?xe.tonemapping_pars_fragment:"",n.toneMapping!==ma?m2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,d2("linearToOutputTexel",n.outputColorSpace),g2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Bl).join(`
`)),u=um(u),u=Lx(u,n),u=Ux(u,n),d=um(d),d=Lx(d,n),d=Ux(d,n),u=Nx(u),d=Nx(d),n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,S=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===Hv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Hv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=w+S+u,C=w+x+d,I=Rx(l,l.VERTEX_SHADER,U),B=Rx(l,l.FRAGMENT_SHADER,C);l.attachShader(R,I),l.attachShader(R,B),n.index0AttributeName!==void 0?l.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function O(G){if(r.debug.checkShaderErrors){const Y=l.getProgramInfoLog(R)||"",tt=l.getShaderInfoLog(I)||"",$=l.getShaderInfoLog(B)||"",Q=Y.trim(),P=tt.trim(),H=$.trim();let ct=!0,pt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(ct=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,R,I,B);else{const bt=Dx(l,I,"vertex"),A=Dx(l,B,"fragment");Ue("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Q+`
`+bt+`
`+A)}else Q!==""?le("WebGLProgram: Program Info Log:",Q):(P===""||H==="")&&(pt=!1);pt&&(G.diagnostics={runnable:ct,programLog:Q,vertexShader:{log:P,prefix:S},fragmentShader:{log:H,prefix:x}})}l.deleteShader(I),l.deleteShader(B),T=new af(l,R),N=x2(l,R)}let T;this.getUniforms=function(){return T===void 0&&O(this),T};let N;this.getAttributes=function(){return N===void 0&&O(this),N};let ot=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ot===!1&&(ot=l.getProgramParameter(R,c2)),ot},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=u2++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=I,this.fragmentShader=B,this}let P2=0;class z2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(l)===!1&&(u.add(l),l.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new I2(t),n.set(t,a)),a}}class I2{constructor(t){this.id=P2++,this.code=t,this.usedTimes=0}}function F2(r,t,n,a,l,c){const u=new My,d=new z2,m=new Set,p=[],g=new Map,_=a.logarithmicDepthBuffer;let v=a.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return m.add(T),T===0?"uv":`uv${T}`}function R(T,N,ot,G,Y){const tt=G.fog,$=Y.geometry,Q=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,P=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,H=t.get(T.envMap||Q,P),ct=H&&H.mapping===ff?H.image.height:null,pt=b[T.type];T.precision!==null&&(v=a.getMaxPrecision(T.precision),v!==T.precision&&le("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const bt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,A=bt!==void 0?bt.length:0;let V=0;$.morphAttributes.position!==void 0&&(V=1),$.morphAttributes.normal!==void 0&&(V=2),$.morphAttributes.color!==void 0&&(V=3);let ft,Mt,Ot,et;if(pt){const Le=ui[pt];ft=Le.vertexShader,Mt=Le.fragmentShader}else ft=T.vertexShader,Mt=T.fragmentShader,d.update(T),Ot=d.getVertexShaderID(T),et=d.getFragmentShaderID(T);const vt=r.getRenderTarget(),Et=r.state.buffers.depth.getReversed(),kt=Y.isInstancedMesh===!0,Qt=Y.isBatchedMesh===!0,te=!!T.map,Qe=!!T.matcap,Se=!!H,ye=!!T.aoMap,yt=!!T.lightMap,Ut=!!T.bumpMap,Me=!!T.normalMap,j=!!T.displacementMap,Oe=!!T.emissiveMap,re=!!T.metalnessMap,De=!!T.roughnessMap,It=T.anisotropy>0,z=T.clearcoat>0,E=T.dispersion>0,K=T.iridescence>0,gt=T.sheen>0,St=T.transmission>0,dt=It&&!!T.anisotropyMap,qt=z&&!!T.clearcoatMap,Dt=z&&!!T.clearcoatNormalMap,Jt=z&&!!T.clearcoatRoughnessMap,ae=K&&!!T.iridescenceMap,wt=K&&!!T.iridescenceThicknessMap,Tt=gt&&!!T.sheenColorMap,Ft=gt&&!!T.sheenRoughnessMap,zt=!!T.specularMap,Bt=!!T.specularColorMap,pe=!!T.specularIntensityMap,Z=St&&!!T.transmissionMap,Ct=St&&!!T.thicknessMap,Rt=!!T.gradientMap,Ht=!!T.alphaMap,At=T.alphaTest>0,ht=!!T.alphaHash,Vt=!!T.extensions;let oe=ma;T.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(oe=r.toneMapping);const He={shaderID:pt,shaderType:T.type,shaderName:T.name,vertexShader:ft,fragmentShader:Mt,defines:T.defines,customVertexShaderID:Ot,customFragmentShaderID:et,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:Qt,batchingColor:Qt&&Y._colorsTexture!==null,instancing:kt,instancingColor:kt&&Y.instanceColor!==null,instancingMorph:kt&&Y.morphTexture!==null,outputColorSpace:vt===null?r.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:No,alphaToCoverage:!!T.alphaToCoverage,map:te,matcap:Qe,envMap:Se,envMapMode:Se&&H.mapping,envMapCubeUVHeight:ct,aoMap:ye,lightMap:yt,bumpMap:Ut,normalMap:Me,displacementMap:j,emissiveMap:Oe,normalMapObjectSpace:Me&&T.normalMapType===KM,normalMapTangentSpace:Me&&T.normalMapType===xy,metalnessMap:re,roughnessMap:De,anisotropy:It,anisotropyMap:dt,clearcoat:z,clearcoatMap:qt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Jt,dispersion:E,iridescence:K,iridescenceMap:ae,iridescenceThicknessMap:wt,sheen:gt,sheenColorMap:Tt,sheenRoughnessMap:Ft,specularMap:zt,specularColorMap:Bt,specularIntensityMap:pe,transmission:St,transmissionMap:Z,thicknessMap:Ct,gradientMap:Rt,opaque:T.transparent===!1&&T.blending===wo&&T.alphaToCoverage===!1,alphaMap:Ht,alphaTest:At,alphaHash:ht,combine:T.combine,mapUv:te&&M(T.map.channel),aoMapUv:ye&&M(T.aoMap.channel),lightMapUv:yt&&M(T.lightMap.channel),bumpMapUv:Ut&&M(T.bumpMap.channel),normalMapUv:Me&&M(T.normalMap.channel),displacementMapUv:j&&M(T.displacementMap.channel),emissiveMapUv:Oe&&M(T.emissiveMap.channel),metalnessMapUv:re&&M(T.metalnessMap.channel),roughnessMapUv:De&&M(T.roughnessMap.channel),anisotropyMapUv:dt&&M(T.anisotropyMap.channel),clearcoatMapUv:qt&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Jt&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&M(T.sheenRoughnessMap.channel),specularMapUv:zt&&M(T.specularMap.channel),specularColorMapUv:Bt&&M(T.specularColorMap.channel),specularIntensityMapUv:pe&&M(T.specularIntensityMap.channel),transmissionMapUv:Z&&M(T.transmissionMap.channel),thicknessMapUv:Ct&&M(T.thicknessMap.channel),alphaMapUv:Ht&&M(T.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Me||It),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!$.attributes.uv&&(te||Ht),fog:!!tt,useFog:T.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||$.attributes.normal===void 0&&Me===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Et,skinning:Y.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:A,morphTextureStride:V,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&ot.length>0,shadowMapType:r.shadowMap.type,toneMapping:oe,decodeVideoTexture:te&&T.map.isVideoTexture===!0&&Ne.getTransfer(T.map.colorSpace)===ke,decodeVideoTextureEmissive:Oe&&T.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(T.emissiveMap.colorSpace)===ke,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ji,flipSided:T.side===ni,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Vt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&T.extensions.multiDraw===!0||Qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return He.vertexUv1s=m.has(1),He.vertexUv2s=m.has(2),He.vertexUv3s=m.has(3),m.clear(),He}function S(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ot in T.defines)N.push(ot),N.push(T.defines[ot]);return T.isRawShaderMaterial===!1&&(x(N,T),w(N,T),N.push(r.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function x(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function w(T,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),T.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),T.push(u.mask)}function U(T){const N=b[T.type];let ot;if(N){const G=ui[N];ot=Nm.clone(G.uniforms)}else ot=T.uniforms;return ot}function C(T,N){let ot=g.get(N);return ot!==void 0?++ot.usedTimes:(ot=new O2(r,N,T,l),p.push(ot),g.set(N,ot)),ot}function I(T){if(--T.usedTimes===0){const N=p.indexOf(T);p[N]=p[p.length-1],p.pop(),g.delete(T.cacheKey),T.destroy()}}function B(T){d.remove(T)}function O(){d.dispose()}return{getParameters:R,getProgramCacheKey:S,getUniforms:U,acquireProgram:C,releaseProgram:I,releaseShaderCache:B,programs:p,dispose:O}}function B2(){let r=new WeakMap;function t(u){return r.has(u)}function n(u){let d=r.get(u);return d===void 0&&(d={},r.set(u,d)),d}function a(u){r.delete(u)}function l(u,d,m){r.get(u)[d]=m}function c(){r=new WeakMap}return{has:t,get:n,remove:a,update:l,dispose:c}}function H2(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Px(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function zx(){const r=[];let t=0;const n=[],a=[],l=[];function c(){t=0,n.length=0,a.length=0,l.length=0}function u(v){let b=0;return v.isInstancedMesh&&(b+=2),v.isSkinnedMesh&&(b+=1),b}function d(v,b,M,R,S,x){let w=r[t];return w===void 0?(w={id:v.id,object:v,geometry:b,material:M,materialVariant:u(v),groupOrder:R,renderOrder:v.renderOrder,z:S,group:x},r[t]=w):(w.id=v.id,w.object=v,w.geometry=b,w.material=M,w.materialVariant=u(v),w.groupOrder=R,w.renderOrder=v.renderOrder,w.z=S,w.group=x),t++,w}function m(v,b,M,R,S,x){const w=d(v,b,M,R,S,x);M.transmission>0?a.push(w):M.transparent===!0?l.push(w):n.push(w)}function p(v,b,M,R,S,x){const w=d(v,b,M,R,S,x);M.transmission>0?a.unshift(w):M.transparent===!0?l.unshift(w):n.unshift(w)}function g(v,b){n.length>1&&n.sort(v||H2),a.length>1&&a.sort(b||Px),l.length>1&&l.sort(b||Px)}function _(){for(let v=t,b=r.length;v<b;v++){const M=r[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:a,transparent:l,init:c,push:m,unshift:p,finish:_,sort:g}}function G2(){let r=new WeakMap;function t(a,l){const c=r.get(a);let u;return c===void 0?(u=new zx,r.set(a,[u])):l>=c.length?(u=new zx,c.push(u)):u=c[l],u}function n(){r=new WeakMap}return{get:t,dispose:n}}function V2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new X,color:new be};break;case"SpotLight":n={position:new X,direction:new X,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new be,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new be,groundColor:new be};break;case"RectAreaLight":n={color:new be,position:new X,halfWidth:new X,halfHeight:new X};break}return r[t.id]=n,n}}}function k2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let X2=0;function j2(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function W2(r){const t=new V2,n=k2(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new X);const l=new X,c=new en,u=new en;function d(p){let g=0,_=0,v=0;for(let N=0;N<9;N++)a.probe[N].set(0,0,0);let b=0,M=0,R=0,S=0,x=0,w=0,U=0,C=0,I=0,B=0,O=0;p.sort(j2);for(let N=0,ot=p.length;N<ot;N++){const G=p[N],Y=G.color,tt=G.intensity,$=G.distance;let Q=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Uo?Q=G.shadow.map.texture:Q=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)g+=Y.r*tt,_+=Y.g*tt,v+=Y.b*tt;else if(G.isLightProbe){for(let P=0;P<9;P++)a.probe[P].addScaledVector(G.sh.coefficients[P],tt);O++}else if(G.isDirectionalLight){const P=t.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,ct=n.get(G);ct.shadowIntensity=H.intensity,ct.shadowBias=H.bias,ct.shadowNormalBias=H.normalBias,ct.shadowRadius=H.radius,ct.shadowMapSize=H.mapSize,a.directionalShadow[b]=ct,a.directionalShadowMap[b]=Q,a.directionalShadowMatrix[b]=G.shadow.matrix,w++}a.directional[b]=P,b++}else if(G.isSpotLight){const P=t.get(G);P.position.setFromMatrixPosition(G.matrixWorld),P.color.copy(Y).multiplyScalar(tt),P.distance=$,P.coneCos=Math.cos(G.angle),P.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),P.decay=G.decay,a.spot[R]=P;const H=G.shadow;if(G.map&&(a.spotLightMap[I]=G.map,I++,H.updateMatrices(G),G.castShadow&&B++),a.spotLightMatrix[R]=H.matrix,G.castShadow){const ct=n.get(G);ct.shadowIntensity=H.intensity,ct.shadowBias=H.bias,ct.shadowNormalBias=H.normalBias,ct.shadowRadius=H.radius,ct.shadowMapSize=H.mapSize,a.spotShadow[R]=ct,a.spotShadowMap[R]=Q,C++}R++}else if(G.isRectAreaLight){const P=t.get(G);P.color.copy(Y).multiplyScalar(tt),P.halfWidth.set(G.width*.5,0,0),P.halfHeight.set(0,G.height*.5,0),a.rectArea[S]=P,S++}else if(G.isPointLight){const P=t.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),P.distance=G.distance,P.decay=G.decay,G.castShadow){const H=G.shadow,ct=n.get(G);ct.shadowIntensity=H.intensity,ct.shadowBias=H.bias,ct.shadowNormalBias=H.normalBias,ct.shadowRadius=H.radius,ct.shadowMapSize=H.mapSize,ct.shadowCameraNear=H.camera.near,ct.shadowCameraFar=H.camera.far,a.pointShadow[M]=ct,a.pointShadowMap[M]=Q,a.pointShadowMatrix[M]=G.shadow.matrix,U++}a.point[M]=P,M++}else if(G.isHemisphereLight){const P=t.get(G);P.skyColor.copy(G.color).multiplyScalar(tt),P.groundColor.copy(G.groundColor).multiplyScalar(tt),a.hemi[x]=P,x++}}S>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Nt.LTC_FLOAT_1,a.rectAreaLTC2=Nt.LTC_FLOAT_2):(a.rectAreaLTC1=Nt.LTC_HALF_1,a.rectAreaLTC2=Nt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const T=a.hash;(T.directionalLength!==b||T.pointLength!==M||T.spotLength!==R||T.rectAreaLength!==S||T.hemiLength!==x||T.numDirectionalShadows!==w||T.numPointShadows!==U||T.numSpotShadows!==C||T.numSpotMaps!==I||T.numLightProbes!==O)&&(a.directional.length=b,a.spot.length=R,a.rectArea.length=S,a.point.length=M,a.hemi.length=x,a.directionalShadow.length=w,a.directionalShadowMap.length=w,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=C,a.spotShadowMap.length=C,a.directionalShadowMatrix.length=w,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=C+I-B,a.spotLightMap.length=I,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=O,T.directionalLength=b,T.pointLength=M,T.spotLength=R,T.rectAreaLength=S,T.hemiLength=x,T.numDirectionalShadows=w,T.numPointShadows=U,T.numSpotShadows=C,T.numSpotMaps=I,T.numLightProbes=O,a.version=X2++)}function m(p,g){let _=0,v=0,b=0,M=0,R=0;const S=g.matrixWorldInverse;for(let x=0,w=p.length;x<w;x++){const U=p[x];if(U.isDirectionalLight){const C=a.directional[_];C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(S),_++}else if(U.isSpotLight){const C=a.spot[b];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(S),b++}else if(U.isRectAreaLight){const C=a.rectArea[M];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(S),u.identity(),c.copy(U.matrixWorld),c.premultiply(S),u.extractRotation(c),C.halfWidth.set(U.width*.5,0,0),C.halfHeight.set(0,U.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),M++}else if(U.isPointLight){const C=a.point[v];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(S),v++}else if(U.isHemisphereLight){const C=a.hemi[R];C.direction.setFromMatrixPosition(U.matrixWorld),C.direction.transformDirection(S),R++}}}return{setup:d,setupView:m,state:a}}function Ix(r){const t=new W2(r),n=[],a=[];function l(g){p.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function d(){t.setup(n)}function m(g){t.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:u}}function q2(r){let t=new WeakMap;function n(l,c=0){const u=t.get(l);let d;return u===void 0?(d=new Ix(r),t.set(l,[d])):c>=u.length?(d=new Ix(r),u.push(d)):d=u[c],d}function a(){t=new WeakMap}return{get:n,dispose:a}}const Y2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z2=`uniform sampler2D shadow_pass;
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
}`,K2=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],Q2=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Fx=new en,zl=new X,sp=new X;function J2(r,t,n){let a=new Cm;const l=new ne,c=new ne,u=new Ke,d=new t1,m=new e1,p={},g=n.maxTextureSize,_={[Ns]:ni,[ni]:Ns,[Ji]:Ji},v=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:Y2,fragmentShader:Z2}),b=v.clone();b.defines.HORIZONTAL_PASS=1;const M=new Xn;M.setAttribute("position",new Bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new rn(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qu;let x=this.type;this.render=function(B,O,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;this.type===wM&&(le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Qu);const N=r.getRenderTarget(),ot=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(Wa),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const tt=x!==this.type;tt&&O.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(Q=>Q.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,Q=B.length;$<Q;$++){const P=B[$],H=P.shadow;if(H===void 0){le("WebGLShadowMap:",P,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const ct=H.getFrameExtents();l.multiply(ct),c.copy(H.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/ct.x),l.x=c.x*ct.x,H.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/ct.y),l.y=c.y*ct.y,H.mapSize.y=c.y));const pt=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=pt,H.map===null||tt===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Fl){if(P.isPointLight){le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ga(l.x,l.y,{format:Uo,type:Za,minFilter:Un,magFilter:Un,generateMipmaps:!1}),H.map.texture.name=P.name+".shadowMap",H.map.depthTexture=new Kl(l.x,l.y,ha),H.map.depthTexture.name=P.name+".shadowMapDepth",H.map.depthTexture.format=Ka,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Gn,H.map.depthTexture.magFilter=Gn}else P.isPointLight?(H.map=new Py(l.x),H.map.depthTexture=new qE(l.x,_a)):(H.map=new ga(l.x,l.y),H.map.depthTexture=new Kl(l.x,l.y,_a)),H.map.depthTexture.name=P.name+".shadowMap",H.map.depthTexture.format=Ka,this.type===Qu?(H.map.depthTexture.compareFunction=pt?Tm:Em,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Gn,H.map.depthTexture.magFilter=Gn);H.camera.updateProjectionMatrix()}const bt=H.map.isWebGLCubeRenderTarget?6:1;for(let A=0;A<bt;A++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,A),r.clear();else{A===0&&(r.setRenderTarget(H.map),r.clear());const V=H.getViewport(A);u.set(c.x*V.x,c.y*V.y,c.x*V.z,c.y*V.w),Y.viewport(u)}if(P.isPointLight){const V=H.camera,ft=H.matrix,Mt=P.distance||V.far;Mt!==V.far&&(V.far=Mt,V.updateProjectionMatrix()),zl.setFromMatrixPosition(P.matrixWorld),V.position.copy(zl),sp.copy(V.position),sp.add(K2[A]),V.up.copy(Q2[A]),V.lookAt(sp),V.updateMatrixWorld(),ft.makeTranslation(-zl.x,-zl.y,-zl.z),Fx.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Fx,V.coordinateSystem,V.reversedDepth)}else H.updateMatrices(P);a=H.getFrustum(),C(O,T,H.camera,P,this.type)}H.isPointLightShadow!==!0&&this.type===Fl&&w(H,T),H.needsUpdate=!1}x=this.type,S.needsUpdate=!1,r.setRenderTarget(N,ot,G)};function w(B,O){const T=t.update(R);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,b.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,b.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new ga(l.x,l.y,{format:Uo,type:Za})),v.uniforms.shadow_pass.value=B.map.depthTexture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(O,null,T,v,R,null),b.uniforms.shadow_pass.value=B.mapPass.texture,b.uniforms.resolution.value=B.mapSize,b.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(O,null,T,b,R,null)}function U(B,O,T,N){let ot=null;const G=T.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(G!==void 0)ot=G;else if(ot=T.isPointLight===!0?m:d,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Y=ot.uuid,tt=O.uuid;let $=p[Y];$===void 0&&($={},p[Y]=$);let Q=$[tt];Q===void 0&&(Q=ot.clone(),$[tt]=Q,O.addEventListener("dispose",I)),ot=Q}if(ot.visible=O.visible,ot.wireframe=O.wireframe,N===Fl?ot.side=O.shadowSide!==null?O.shadowSide:O.side:ot.side=O.shadowSide!==null?O.shadowSide:_[O.side],ot.alphaMap=O.alphaMap,ot.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,ot.map=O.map,ot.clipShadows=O.clipShadows,ot.clippingPlanes=O.clippingPlanes,ot.clipIntersection=O.clipIntersection,ot.displacementMap=O.displacementMap,ot.displacementScale=O.displacementScale,ot.displacementBias=O.displacementBias,ot.wireframeLinewidth=O.wireframeLinewidth,ot.linewidth=O.linewidth,T.isPointLight===!0&&ot.isMeshDistanceMaterial===!0){const Y=r.properties.get(ot);Y.light=T}return ot}function C(B,O,T,N,ot){if(B.visible===!1)return;if(B.layers.test(O.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&ot===Fl)&&(!B.frustumCulled||a.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,B.matrixWorld);const tt=t.update(B),$=B.material;if(Array.isArray($)){const Q=tt.groups;for(let P=0,H=Q.length;P<H;P++){const ct=Q[P],pt=$[ct.materialIndex];if(pt&&pt.visible){const bt=U(B,pt,N,ot);B.onBeforeShadow(r,B,O,T,tt,bt,ct),r.renderBufferDirect(T,null,tt,bt,B,ct),B.onAfterShadow(r,B,O,T,tt,bt,ct)}}}else if($.visible){const Q=U(B,$,N,ot);B.onBeforeShadow(r,B,O,T,tt,Q,null),r.renderBufferDirect(T,null,tt,Q,B,null),B.onAfterShadow(r,B,O,T,tt,Q,null)}}const Y=B.children;for(let tt=0,$=Y.length;tt<$;tt++)C(Y[tt],O,T,N,ot)}function I(B){B.target.removeEventListener("dispose",I);for(const T in p){const N=p[T],ot=B.target.uuid;ot in N&&(N[ot].dispose(),delete N[ot])}}}function $2(r,t){function n(){let Z=!1;const Ct=new Ke;let Rt=null;const Ht=new Ke(0,0,0,0);return{setMask:function(At){Rt!==At&&!Z&&(r.colorMask(At,At,At,At),Rt=At)},setLocked:function(At){Z=At},setClear:function(At,ht,Vt,oe,He){He===!0&&(At*=oe,ht*=oe,Vt*=oe),Ct.set(At,ht,Vt,oe),Ht.equals(Ct)===!1&&(r.clearColor(At,ht,Vt,oe),Ht.copy(Ct))},reset:function(){Z=!1,Rt=null,Ht.set(-1,0,0,0)}}}function a(){let Z=!1,Ct=!1,Rt=null,Ht=null,At=null;return{setReversed:function(ht){if(Ct!==ht){const Vt=t.get("EXT_clip_control");ht?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),Ct=ht;const oe=At;At=null,this.setClear(oe)}},getReversed:function(){return Ct},setTest:function(ht){ht?vt(r.DEPTH_TEST):Et(r.DEPTH_TEST)},setMask:function(ht){Rt!==ht&&!Z&&(r.depthMask(ht),Rt=ht)},setFunc:function(ht){if(Ct&&(ht=rE[ht]),Ht!==ht){switch(ht){case vp:r.depthFunc(r.NEVER);break;case xp:r.depthFunc(r.ALWAYS);break;case yp:r.depthFunc(r.LESS);break;case Do:r.depthFunc(r.LEQUAL);break;case Sp:r.depthFunc(r.EQUAL);break;case bp:r.depthFunc(r.GEQUAL);break;case Mp:r.depthFunc(r.GREATER);break;case Ep:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ht=ht}},setLocked:function(ht){Z=ht},setClear:function(ht){At!==ht&&(At=ht,Ct&&(ht=1-ht),r.clearDepth(ht))},reset:function(){Z=!1,Rt=null,Ht=null,At=null,Ct=!1}}}function l(){let Z=!1,Ct=null,Rt=null,Ht=null,At=null,ht=null,Vt=null,oe=null,He=null;return{setTest:function(Le){Z||(Le?vt(r.STENCIL_TEST):Et(r.STENCIL_TEST))},setMask:function(Le){Ct!==Le&&!Z&&(r.stencilMask(Le),Ct=Le)},setFunc:function(Le,Zn,Gi){(Rt!==Le||Ht!==Zn||At!==Gi)&&(r.stencilFunc(Le,Zn,Gi),Rt=Le,Ht=Zn,At=Gi)},setOp:function(Le,Zn,Gi){(ht!==Le||Vt!==Zn||oe!==Gi)&&(r.stencilOp(Le,Zn,Gi),ht=Le,Vt=Zn,oe=Gi)},setLocked:function(Le){Z=Le},setClear:function(Le){He!==Le&&(r.clearStencil(Le),He=Le)},reset:function(){Z=!1,Ct=null,Rt=null,Ht=null,At=null,ht=null,Vt=null,oe=null,He=null}}}const c=new n,u=new a,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},v=new WeakMap,b=[],M=null,R=!1,S=null,x=null,w=null,U=null,C=null,I=null,B=null,O=new be(0,0,0),T=0,N=!1,ot=null,G=null,Y=null,tt=null,$=null;const Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,H=0;const ct=r.getParameter(r.VERSION);ct.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ct)[1]),P=H>=1):ct.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ct)[1]),P=H>=2);let pt=null,bt={};const A=r.getParameter(r.SCISSOR_BOX),V=r.getParameter(r.VIEWPORT),ft=new Ke().fromArray(A),Mt=new Ke().fromArray(V);function Ot(Z,Ct,Rt,Ht){const At=new Uint8Array(4),ht=r.createTexture();r.bindTexture(Z,ht),r.texParameteri(Z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Vt=0;Vt<Rt;Vt++)Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?r.texImage3D(Ct,0,r.RGBA,1,1,Ht,0,r.RGBA,r.UNSIGNED_BYTE,At):r.texImage2D(Ct+Vt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,At);return ht}const et={};et[r.TEXTURE_2D]=Ot(r.TEXTURE_2D,r.TEXTURE_2D,1),et[r.TEXTURE_CUBE_MAP]=Ot(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[r.TEXTURE_2D_ARRAY]=Ot(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),et[r.TEXTURE_3D]=Ot(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),vt(r.DEPTH_TEST),u.setFunc(Do),Ut(!1),Me(zv),vt(r.CULL_FACE),ye(Wa);function vt(Z){g[Z]!==!0&&(r.enable(Z),g[Z]=!0)}function Et(Z){g[Z]!==!1&&(r.disable(Z),g[Z]=!1)}function kt(Z,Ct){return _[Z]!==Ct?(r.bindFramebuffer(Z,Ct),_[Z]=Ct,Z===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Ct),Z===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Qt(Z,Ct){let Rt=b,Ht=!1;if(Z){Rt=v.get(Ct),Rt===void 0&&(Rt=[],v.set(Ct,Rt));const At=Z.textures;if(Rt.length!==At.length||Rt[0]!==r.COLOR_ATTACHMENT0){for(let ht=0,Vt=At.length;ht<Vt;ht++)Rt[ht]=r.COLOR_ATTACHMENT0+ht;Rt.length=At.length,Ht=!0}}else Rt[0]!==r.BACK&&(Rt[0]=r.BACK,Ht=!0);Ht&&r.drawBuffers(Rt)}function te(Z){return M!==Z?(r.useProgram(Z),M=Z,!0):!1}const Qe={[cr]:r.FUNC_ADD,[CM]:r.FUNC_SUBTRACT,[DM]:r.FUNC_REVERSE_SUBTRACT};Qe[LM]=r.MIN,Qe[UM]=r.MAX;const Se={[NM]:r.ZERO,[OM]:r.ONE,[PM]:r.SRC_COLOR,[gp]:r.SRC_ALPHA,[GM]:r.SRC_ALPHA_SATURATE,[BM]:r.DST_COLOR,[IM]:r.DST_ALPHA,[zM]:r.ONE_MINUS_SRC_COLOR,[_p]:r.ONE_MINUS_SRC_ALPHA,[HM]:r.ONE_MINUS_DST_COLOR,[FM]:r.ONE_MINUS_DST_ALPHA,[VM]:r.CONSTANT_COLOR,[kM]:r.ONE_MINUS_CONSTANT_COLOR,[XM]:r.CONSTANT_ALPHA,[jM]:r.ONE_MINUS_CONSTANT_ALPHA};function ye(Z,Ct,Rt,Ht,At,ht,Vt,oe,He,Le){if(Z===Wa){R===!0&&(Et(r.BLEND),R=!1);return}if(R===!1&&(vt(r.BLEND),R=!0),Z!==RM){if(Z!==S||Le!==N){if((x!==cr||C!==cr)&&(r.blendEquation(r.FUNC_ADD),x=cr,C=cr),Le)switch(Z){case wo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sf:r.blendFunc(r.ONE,r.ONE);break;case Iv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ue("WebGLState: Invalid blending: ",Z);break}else switch(Z){case wo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sf:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Iv:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fv:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",Z);break}w=null,U=null,I=null,B=null,O.set(0,0,0),T=0,S=Z,N=Le}return}At=At||Ct,ht=ht||Rt,Vt=Vt||Ht,(Ct!==x||At!==C)&&(r.blendEquationSeparate(Qe[Ct],Qe[At]),x=Ct,C=At),(Rt!==w||Ht!==U||ht!==I||Vt!==B)&&(r.blendFuncSeparate(Se[Rt],Se[Ht],Se[ht],Se[Vt]),w=Rt,U=Ht,I=ht,B=Vt),(oe.equals(O)===!1||He!==T)&&(r.blendColor(oe.r,oe.g,oe.b,He),O.copy(oe),T=He),S=Z,N=!1}function yt(Z,Ct){Z.side===Ji?Et(r.CULL_FACE):vt(r.CULL_FACE);let Rt=Z.side===ni;Ct&&(Rt=!Rt),Ut(Rt),Z.blending===wo&&Z.transparent===!1?ye(Wa):ye(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),u.setFunc(Z.depthFunc),u.setTest(Z.depthTest),u.setMask(Z.depthWrite),c.setMask(Z.colorWrite);const Ht=Z.stencilWrite;d.setTest(Ht),Ht&&(d.setMask(Z.stencilWriteMask),d.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),d.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),Oe(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?vt(r.SAMPLE_ALPHA_TO_COVERAGE):Et(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(Z){ot!==Z&&(Z?r.frontFace(r.CW):r.frontFace(r.CCW),ot=Z)}function Me(Z){Z!==TM?(vt(r.CULL_FACE),Z!==G&&(Z===zv?r.cullFace(r.BACK):Z===AM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Et(r.CULL_FACE),G=Z}function j(Z){Z!==Y&&(P&&r.lineWidth(Z),Y=Z)}function Oe(Z,Ct,Rt){Z?(vt(r.POLYGON_OFFSET_FILL),(tt!==Ct||$!==Rt)&&(tt=Ct,$=Rt,u.getReversed()&&(Ct=-Ct),r.polygonOffset(Ct,Rt))):Et(r.POLYGON_OFFSET_FILL)}function re(Z){Z?vt(r.SCISSOR_TEST):Et(r.SCISSOR_TEST)}function De(Z){Z===void 0&&(Z=r.TEXTURE0+Q-1),pt!==Z&&(r.activeTexture(Z),pt=Z)}function It(Z,Ct,Rt){Rt===void 0&&(pt===null?Rt=r.TEXTURE0+Q-1:Rt=pt);let Ht=bt[Rt];Ht===void 0&&(Ht={type:void 0,texture:void 0},bt[Rt]=Ht),(Ht.type!==Z||Ht.texture!==Ct)&&(pt!==Rt&&(r.activeTexture(Rt),pt=Rt),r.bindTexture(Z,Ct||et[Z]),Ht.type=Z,Ht.texture=Ct)}function z(){const Z=bt[pt];Z!==void 0&&Z.type!==void 0&&(r.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(Z){Ue("WebGLState:",Z)}}function K(){try{r.compressedTexImage3D(...arguments)}catch(Z){Ue("WebGLState:",Z)}}function gt(){try{r.texSubImage2D(...arguments)}catch(Z){Ue("WebGLState:",Z)}}function St(){try{r.texSubImage3D(...arguments)}catch(Z){Ue("WebGLState:",Z)}}function dt(){try{r.compressedTexSubImage2D(...arguments)}catch(Z){Ue("WebGLState:",Z)}}function qt(){try{r.compressedTexSubImage3D(...arguments)}catch(Z){Ue("WebGLState:",Z)}}function Dt(){try{r.texStorage2D(...arguments)}catch(Z){Ue("WebGLState:",Z)}}function Jt(){try{r.texStorage3D(...arguments)}catch(Z){Ue("WebGLState:",Z)}}function ae(){try{r.texImage2D(...arguments)}catch(Z){Ue("WebGLState:",Z)}}function wt(){try{r.texImage3D(...arguments)}catch(Z){Ue("WebGLState:",Z)}}function Tt(Z){ft.equals(Z)===!1&&(r.scissor(Z.x,Z.y,Z.z,Z.w),ft.copy(Z))}function Ft(Z){Mt.equals(Z)===!1&&(r.viewport(Z.x,Z.y,Z.z,Z.w),Mt.copy(Z))}function zt(Z,Ct){let Rt=p.get(Ct);Rt===void 0&&(Rt=new WeakMap,p.set(Ct,Rt));let Ht=Rt.get(Z);Ht===void 0&&(Ht=r.getUniformBlockIndex(Ct,Z.name),Rt.set(Z,Ht))}function Bt(Z,Ct){const Ht=p.get(Ct).get(Z);m.get(Ct)!==Ht&&(r.uniformBlockBinding(Ct,Ht,Z.__bindingPointIndex),m.set(Ct,Ht))}function pe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},pt=null,bt={},_={},v=new WeakMap,b=[],M=null,R=!1,S=null,x=null,w=null,U=null,C=null,I=null,B=null,O=new be(0,0,0),T=0,N=!1,ot=null,G=null,Y=null,tt=null,$=null,ft.set(0,0,r.canvas.width,r.canvas.height),Mt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:vt,disable:Et,bindFramebuffer:kt,drawBuffers:Qt,useProgram:te,setBlending:ye,setMaterial:yt,setFlipSided:Ut,setCullFace:Me,setLineWidth:j,setPolygonOffset:Oe,setScissorTest:re,activeTexture:De,bindTexture:It,unbindTexture:z,compressedTexImage2D:E,compressedTexImage3D:K,texImage2D:ae,texImage3D:wt,updateUBOMapping:zt,uniformBlockBinding:Bt,texStorage2D:Dt,texStorage3D:Jt,texSubImage2D:gt,texSubImage3D:St,compressedTexSubImage2D:dt,compressedTexSubImage3D:qt,scissor:Tt,viewport:Ft,reset:pe}}function t3(r,t,n,a,l,c,u){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ne,g=new WeakMap;let _;const v=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(z,E){return b?new OffscreenCanvas(z,E):Yl("canvas")}function R(z,E,K){let gt=1;const St=It(z);if((St.width>K||St.height>K)&&(gt=K/Math.max(St.width,St.height)),gt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const dt=Math.floor(gt*St.width),qt=Math.floor(gt*St.height);_===void 0&&(_=M(dt,qt));const Dt=E?M(dt,qt):_;return Dt.width=dt,Dt.height=qt,Dt.getContext("2d").drawImage(z,0,0,dt,qt),le("WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+dt+"x"+qt+")."),Dt}else return"data"in z&&le("WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),z;return z}function S(z){return z.generateMipmaps}function x(z){r.generateMipmap(z)}function w(z){return z.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?r.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(z,E,K,gt,St=!1){if(z!==null){if(r[z]!==void 0)return r[z];le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let dt=E;if(E===r.RED&&(K===r.FLOAT&&(dt=r.R32F),K===r.HALF_FLOAT&&(dt=r.R16F),K===r.UNSIGNED_BYTE&&(dt=r.R8)),E===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(dt=r.R8UI),K===r.UNSIGNED_SHORT&&(dt=r.R16UI),K===r.UNSIGNED_INT&&(dt=r.R32UI),K===r.BYTE&&(dt=r.R8I),K===r.SHORT&&(dt=r.R16I),K===r.INT&&(dt=r.R32I)),E===r.RG&&(K===r.FLOAT&&(dt=r.RG32F),K===r.HALF_FLOAT&&(dt=r.RG16F),K===r.UNSIGNED_BYTE&&(dt=r.RG8)),E===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(dt=r.RG8UI),K===r.UNSIGNED_SHORT&&(dt=r.RG16UI),K===r.UNSIGNED_INT&&(dt=r.RG32UI),K===r.BYTE&&(dt=r.RG8I),K===r.SHORT&&(dt=r.RG16I),K===r.INT&&(dt=r.RG32I)),E===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(dt=r.RGB8UI),K===r.UNSIGNED_SHORT&&(dt=r.RGB16UI),K===r.UNSIGNED_INT&&(dt=r.RGB32UI),K===r.BYTE&&(dt=r.RGB8I),K===r.SHORT&&(dt=r.RGB16I),K===r.INT&&(dt=r.RGB32I)),E===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(dt=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(dt=r.RGBA16UI),K===r.UNSIGNED_INT&&(dt=r.RGBA32UI),K===r.BYTE&&(dt=r.RGBA8I),K===r.SHORT&&(dt=r.RGBA16I),K===r.INT&&(dt=r.RGBA32I)),E===r.RGB&&(K===r.UNSIGNED_INT_5_9_9_9_REV&&(dt=r.RGB9_E5),K===r.UNSIGNED_INT_10F_11F_11F_REV&&(dt=r.R11F_G11F_B10F)),E===r.RGBA){const qt=St?rf:Ne.getTransfer(gt);K===r.FLOAT&&(dt=r.RGBA32F),K===r.HALF_FLOAT&&(dt=r.RGBA16F),K===r.UNSIGNED_BYTE&&(dt=qt===ke?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(dt=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(dt=r.RGB5_A1)}return(dt===r.R16F||dt===r.R32F||dt===r.RG16F||dt===r.RG32F||dt===r.RGBA16F||dt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function C(z,E){let K;return z?E===null||E===_a||E===Wl?K=r.DEPTH24_STENCIL8:E===ha?K=r.DEPTH32F_STENCIL8:E===jl&&(K=r.DEPTH24_STENCIL8,le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===_a||E===Wl?K=r.DEPTH_COMPONENT24:E===ha?K=r.DEPTH_COMPONENT32F:E===jl&&(K=r.DEPTH_COMPONENT16),K}function I(z,E){return S(z)===!0||z.isFramebufferTexture&&z.minFilter!==Gn&&z.minFilter!==Un?Math.log2(Math.max(E.width,E.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?E.mipmaps.length:1}function B(z){const E=z.target;E.removeEventListener("dispose",B),T(E),E.isVideoTexture&&g.delete(E)}function O(z){const E=z.target;E.removeEventListener("dispose",O),ot(E)}function T(z){const E=a.get(z);if(E.__webglInit===void 0)return;const K=z.source,gt=v.get(K);if(gt){const St=gt[E.__cacheKey];St.usedTimes--,St.usedTimes===0&&N(z),Object.keys(gt).length===0&&v.delete(K)}a.remove(z)}function N(z){const E=a.get(z);r.deleteTexture(E.__webglTexture);const K=z.source,gt=v.get(K);delete gt[E.__cacheKey],u.memory.textures--}function ot(z){const E=a.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),a.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(E.__webglFramebuffer[gt]))for(let St=0;St<E.__webglFramebuffer[gt].length;St++)r.deleteFramebuffer(E.__webglFramebuffer[gt][St]);else r.deleteFramebuffer(E.__webglFramebuffer[gt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[gt])}else{if(Array.isArray(E.__webglFramebuffer))for(let gt=0;gt<E.__webglFramebuffer.length;gt++)r.deleteFramebuffer(E.__webglFramebuffer[gt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let gt=0;gt<E.__webglColorRenderbuffer.length;gt++)E.__webglColorRenderbuffer[gt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[gt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const K=z.textures;for(let gt=0,St=K.length;gt<St;gt++){const dt=a.get(K[gt]);dt.__webglTexture&&(r.deleteTexture(dt.__webglTexture),u.memory.textures--),a.remove(K[gt])}a.remove(z)}let G=0;function Y(){G=0}function tt(){const z=G;return z>=l.maxTextures&&le("WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),G+=1,z}function $(z){const E=[];return E.push(z.wrapS),E.push(z.wrapT),E.push(z.wrapR||0),E.push(z.magFilter),E.push(z.minFilter),E.push(z.anisotropy),E.push(z.internalFormat),E.push(z.format),E.push(z.type),E.push(z.generateMipmaps),E.push(z.premultiplyAlpha),E.push(z.flipY),E.push(z.unpackAlignment),E.push(z.colorSpace),E.join()}function Q(z,E){const K=a.get(z);if(z.isVideoTexture&&re(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&K.__version!==z.version){const gt=z.image;if(gt===null)le("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)le("WebGLRenderer: Texture marked for update but image is incomplete");else{et(K,z,E);return}}else z.isExternalTexture&&(K.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+E)}function P(z,E){const K=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&K.__version!==z.version){et(K,z,E);return}else z.isExternalTexture&&(K.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+E)}function H(z,E){const K=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&K.__version!==z.version){et(K,z,E);return}n.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+E)}function ct(z,E){const K=a.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&K.__version!==z.version){vt(K,z,E);return}n.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+E)}const pt={[Tp]:r.REPEAT,[ja]:r.CLAMP_TO_EDGE,[Ap]:r.MIRRORED_REPEAT},bt={[Gn]:r.NEAREST,[YM]:r.NEAREST_MIPMAP_NEAREST,[du]:r.NEAREST_MIPMAP_LINEAR,[Un]:r.LINEAR,[wd]:r.LINEAR_MIPMAP_NEAREST,[fr]:r.LINEAR_MIPMAP_LINEAR},A={[QM]:r.NEVER,[nE]:r.ALWAYS,[JM]:r.LESS,[Em]:r.LEQUAL,[$M]:r.EQUAL,[Tm]:r.GEQUAL,[tE]:r.GREATER,[eE]:r.NOTEQUAL};function V(z,E){if(E.type===ha&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Un||E.magFilter===wd||E.magFilter===du||E.magFilter===fr||E.minFilter===Un||E.minFilter===wd||E.minFilter===du||E.minFilter===fr)&&le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(z,r.TEXTURE_WRAP_S,pt[E.wrapS]),r.texParameteri(z,r.TEXTURE_WRAP_T,pt[E.wrapT]),(z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY)&&r.texParameteri(z,r.TEXTURE_WRAP_R,pt[E.wrapR]),r.texParameteri(z,r.TEXTURE_MAG_FILTER,bt[E.magFilter]),r.texParameteri(z,r.TEXTURE_MIN_FILTER,bt[E.minFilter]),E.compareFunction&&(r.texParameteri(z,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(z,r.TEXTURE_COMPARE_FUNC,A[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Gn||E.minFilter!==du&&E.minFilter!==fr||E.type===ha&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");r.texParameterf(z,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function ft(z,E){let K=!1;z.__webglInit===void 0&&(z.__webglInit=!0,E.addEventListener("dispose",B));const gt=E.source;let St=v.get(gt);St===void 0&&(St={},v.set(gt,St));const dt=$(E);if(dt!==z.__cacheKey){St[dt]===void 0&&(St[dt]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,K=!0),St[dt].usedTimes++;const qt=St[z.__cacheKey];qt!==void 0&&(St[z.__cacheKey].usedTimes--,qt.usedTimes===0&&N(E)),z.__cacheKey=dt,z.__webglTexture=St[dt].texture}return K}function Mt(z,E,K){return Math.floor(Math.floor(z/K)/E)}function Ot(z,E,K,gt){const dt=z.updateRanges;if(dt.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,K,gt,E.data);else{dt.sort((wt,Tt)=>wt.start-Tt.start);let qt=0;for(let wt=1;wt<dt.length;wt++){const Tt=dt[qt],Ft=dt[wt],zt=Tt.start+Tt.count,Bt=Mt(Ft.start,E.width,4),pe=Mt(Tt.start,E.width,4);Ft.start<=zt+1&&Bt===pe&&Mt(Ft.start+Ft.count-1,E.width,4)===Bt?Tt.count=Math.max(Tt.count,Ft.start+Ft.count-Tt.start):(++qt,dt[qt]=Ft)}dt.length=qt+1;const Dt=r.getParameter(r.UNPACK_ROW_LENGTH),Jt=r.getParameter(r.UNPACK_SKIP_PIXELS),ae=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let wt=0,Tt=dt.length;wt<Tt;wt++){const Ft=dt[wt],zt=Math.floor(Ft.start/4),Bt=Math.ceil(Ft.count/4),pe=zt%E.width,Z=Math.floor(zt/E.width),Ct=Bt,Rt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,pe),r.pixelStorei(r.UNPACK_SKIP_ROWS,Z),n.texSubImage2D(r.TEXTURE_2D,0,pe,Z,Ct,Rt,K,gt,E.data)}z.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Dt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Jt),r.pixelStorei(r.UNPACK_SKIP_ROWS,ae)}}function et(z,E,K){let gt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(gt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(gt=r.TEXTURE_3D);const St=ft(z,E),dt=E.source;n.bindTexture(gt,z.__webglTexture,r.TEXTURE0+K);const qt=a.get(dt);if(dt.version!==qt.__version||St===!0){n.activeTexture(r.TEXTURE0+K);const Dt=Ne.getPrimaries(Ne.workingColorSpace),Jt=E.colorSpace===Ls?null:Ne.getPrimaries(E.colorSpace),ae=E.colorSpace===Ls||Dt===Jt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let wt=R(E.image,!1,l.maxTextureSize);wt=De(E,wt);const Tt=c.convert(E.format,E.colorSpace),Ft=c.convert(E.type);let zt=U(E.internalFormat,Tt,Ft,E.colorSpace,E.isVideoTexture);V(gt,E);let Bt;const pe=E.mipmaps,Z=E.isVideoTexture!==!0,Ct=qt.__version===void 0||St===!0,Rt=dt.dataReady,Ht=I(E,wt);if(E.isDepthTexture)zt=C(E.format===hr,E.type),Ct&&(Z?n.texStorage2D(r.TEXTURE_2D,1,zt,wt.width,wt.height):n.texImage2D(r.TEXTURE_2D,0,zt,wt.width,wt.height,0,Tt,Ft,null));else if(E.isDataTexture)if(pe.length>0){Z&&Ct&&n.texStorage2D(r.TEXTURE_2D,Ht,zt,pe[0].width,pe[0].height);for(let At=0,ht=pe.length;At<ht;At++)Bt=pe[At],Z?Rt&&n.texSubImage2D(r.TEXTURE_2D,At,0,0,Bt.width,Bt.height,Tt,Ft,Bt.data):n.texImage2D(r.TEXTURE_2D,At,zt,Bt.width,Bt.height,0,Tt,Ft,Bt.data);E.generateMipmaps=!1}else Z?(Ct&&n.texStorage2D(r.TEXTURE_2D,Ht,zt,wt.width,wt.height),Rt&&Ot(E,wt,Tt,Ft)):n.texImage2D(r.TEXTURE_2D,0,zt,wt.width,wt.height,0,Tt,Ft,wt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Z&&Ct&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,zt,pe[0].width,pe[0].height,wt.depth);for(let At=0,ht=pe.length;At<ht;At++)if(Bt=pe[At],E.format!==ta)if(Tt!==null)if(Z){if(Rt)if(E.layerUpdates.size>0){const Vt=mx(Bt.width,Bt.height,E.format,E.type);for(const oe of E.layerUpdates){const He=Bt.data.subarray(oe*Vt/Bt.data.BYTES_PER_ELEMENT,(oe+1)*Vt/Bt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,oe,Bt.width,Bt.height,1,Tt,He)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,Bt.width,Bt.height,wt.depth,Tt,Bt.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,At,zt,Bt.width,Bt.height,wt.depth,0,Bt.data,0,0);else le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Z?Rt&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,Bt.width,Bt.height,wt.depth,Tt,Ft,Bt.data):n.texImage3D(r.TEXTURE_2D_ARRAY,At,zt,Bt.width,Bt.height,wt.depth,0,Tt,Ft,Bt.data)}else{Z&&Ct&&n.texStorage2D(r.TEXTURE_2D,Ht,zt,pe[0].width,pe[0].height);for(let At=0,ht=pe.length;At<ht;At++)Bt=pe[At],E.format!==ta?Tt!==null?Z?Rt&&n.compressedTexSubImage2D(r.TEXTURE_2D,At,0,0,Bt.width,Bt.height,Tt,Bt.data):n.compressedTexImage2D(r.TEXTURE_2D,At,zt,Bt.width,Bt.height,0,Bt.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?Rt&&n.texSubImage2D(r.TEXTURE_2D,At,0,0,Bt.width,Bt.height,Tt,Ft,Bt.data):n.texImage2D(r.TEXTURE_2D,At,zt,Bt.width,Bt.height,0,Tt,Ft,Bt.data)}else if(E.isDataArrayTexture)if(Z){if(Ct&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,zt,wt.width,wt.height,wt.depth),Rt)if(E.layerUpdates.size>0){const At=mx(wt.width,wt.height,E.format,E.type);for(const ht of E.layerUpdates){const Vt=wt.data.subarray(ht*At/wt.data.BYTES_PER_ELEMENT,(ht+1)*At/wt.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ht,wt.width,wt.height,1,Tt,Ft,Vt)}E.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Tt,Ft,wt.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,zt,wt.width,wt.height,wt.depth,0,Tt,Ft,wt.data);else if(E.isData3DTexture)Z?(Ct&&n.texStorage3D(r.TEXTURE_3D,Ht,zt,wt.width,wt.height,wt.depth),Rt&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Tt,Ft,wt.data)):n.texImage3D(r.TEXTURE_3D,0,zt,wt.width,wt.height,wt.depth,0,Tt,Ft,wt.data);else if(E.isFramebufferTexture){if(Ct)if(Z)n.texStorage2D(r.TEXTURE_2D,Ht,zt,wt.width,wt.height);else{let At=wt.width,ht=wt.height;for(let Vt=0;Vt<Ht;Vt++)n.texImage2D(r.TEXTURE_2D,Vt,zt,At,ht,0,Tt,Ft,null),At>>=1,ht>>=1}}else if(pe.length>0){if(Z&&Ct){const At=It(pe[0]);n.texStorage2D(r.TEXTURE_2D,Ht,zt,At.width,At.height)}for(let At=0,ht=pe.length;At<ht;At++)Bt=pe[At],Z?Rt&&n.texSubImage2D(r.TEXTURE_2D,At,0,0,Tt,Ft,Bt):n.texImage2D(r.TEXTURE_2D,At,zt,Tt,Ft,Bt);E.generateMipmaps=!1}else if(Z){if(Ct){const At=It(wt);n.texStorage2D(r.TEXTURE_2D,Ht,zt,At.width,At.height)}Rt&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Tt,Ft,wt)}else n.texImage2D(r.TEXTURE_2D,0,zt,Tt,Ft,wt);S(E)&&x(gt),qt.__version=dt.version,E.onUpdate&&E.onUpdate(E)}z.__version=E.version}function vt(z,E,K){if(E.image.length!==6)return;const gt=ft(z,E),St=E.source;n.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+K);const dt=a.get(St);if(St.version!==dt.__version||gt===!0){n.activeTexture(r.TEXTURE0+K);const qt=Ne.getPrimaries(Ne.workingColorSpace),Dt=E.colorSpace===Ls?null:Ne.getPrimaries(E.colorSpace),Jt=E.colorSpace===Ls||qt===Dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);const ae=E.isCompressedTexture||E.image[0].isCompressedTexture,wt=E.image[0]&&E.image[0].isDataTexture,Tt=[];for(let ht=0;ht<6;ht++)!ae&&!wt?Tt[ht]=R(E.image[ht],!0,l.maxCubemapSize):Tt[ht]=wt?E.image[ht].image:E.image[ht],Tt[ht]=De(E,Tt[ht]);const Ft=Tt[0],zt=c.convert(E.format,E.colorSpace),Bt=c.convert(E.type),pe=U(E.internalFormat,zt,Bt,E.colorSpace),Z=E.isVideoTexture!==!0,Ct=dt.__version===void 0||gt===!0,Rt=St.dataReady;let Ht=I(E,Ft);V(r.TEXTURE_CUBE_MAP,E);let At;if(ae){Z&&Ct&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,pe,Ft.width,Ft.height);for(let ht=0;ht<6;ht++){At=Tt[ht].mipmaps;for(let Vt=0;Vt<At.length;Vt++){const oe=At[Vt];E.format!==ta?zt!==null?Z?Rt&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Vt,0,0,oe.width,oe.height,zt,oe.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Vt,pe,oe.width,oe.height,0,oe.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?Rt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Vt,0,0,oe.width,oe.height,zt,Bt,oe.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Vt,pe,oe.width,oe.height,0,zt,Bt,oe.data)}}}else{if(At=E.mipmaps,Z&&Ct){At.length>0&&Ht++;const ht=It(Tt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,pe,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(wt){Z?Rt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Tt[ht].width,Tt[ht].height,zt,Bt,Tt[ht].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,pe,Tt[ht].width,Tt[ht].height,0,zt,Bt,Tt[ht].data);for(let Vt=0;Vt<At.length;Vt++){const He=At[Vt].image[ht].image;Z?Rt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Vt+1,0,0,He.width,He.height,zt,Bt,He.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Vt+1,pe,He.width,He.height,0,zt,Bt,He.data)}}else{Z?Rt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,zt,Bt,Tt[ht]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,pe,zt,Bt,Tt[ht]);for(let Vt=0;Vt<At.length;Vt++){const oe=At[Vt];Z?Rt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Vt+1,0,0,zt,Bt,oe.image[ht]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Vt+1,pe,zt,Bt,oe.image[ht])}}}S(E)&&x(r.TEXTURE_CUBE_MAP),dt.__version=St.version,E.onUpdate&&E.onUpdate(E)}z.__version=E.version}function Et(z,E,K,gt,St,dt){const qt=c.convert(K.format,K.colorSpace),Dt=c.convert(K.type),Jt=U(K.internalFormat,qt,Dt,K.colorSpace),ae=a.get(E),wt=a.get(K);if(wt.__renderTarget=E,!ae.__hasExternalTextures){const Tt=Math.max(1,E.width>>dt),Ft=Math.max(1,E.height>>dt);St===r.TEXTURE_3D||St===r.TEXTURE_2D_ARRAY?n.texImage3D(St,dt,Jt,Tt,Ft,E.depth,0,qt,Dt,null):n.texImage2D(St,dt,Jt,Tt,Ft,0,qt,Dt,null)}n.bindFramebuffer(r.FRAMEBUFFER,z),Oe(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,gt,St,wt.__webglTexture,0,j(E)):(St===r.TEXTURE_2D||St>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,gt,St,wt.__webglTexture,dt),n.bindFramebuffer(r.FRAMEBUFFER,null)}function kt(z,E,K){if(r.bindRenderbuffer(r.RENDERBUFFER,z),E.depthBuffer){const gt=E.depthTexture,St=gt&&gt.isDepthTexture?gt.type:null,dt=C(E.stencilBuffer,St),qt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Oe(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j(E),dt,E.width,E.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,j(E),dt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,dt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,qt,r.RENDERBUFFER,z)}else{const gt=E.textures;for(let St=0;St<gt.length;St++){const dt=gt[St],qt=c.convert(dt.format,dt.colorSpace),Dt=c.convert(dt.type),Jt=U(dt.internalFormat,qt,Dt,dt.colorSpace);Oe(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j(E),Jt,E.width,E.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,j(E),Jt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Jt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Qt(z,E,K){const gt=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,z),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const St=a.get(E.depthTexture);if(St.__renderTarget=E,(!St.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),gt){if(St.__webglInit===void 0&&(St.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),St.__webglTexture===void 0){St.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,St.__webglTexture),V(r.TEXTURE_CUBE_MAP,E.depthTexture);const ae=c.convert(E.depthTexture.format),wt=c.convert(E.depthTexture.type);let Tt;E.depthTexture.format===Ka?Tt=r.DEPTH_COMPONENT24:E.depthTexture.format===hr&&(Tt=r.DEPTH24_STENCIL8);for(let Ft=0;Ft<6;Ft++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,Tt,E.width,E.height,0,ae,wt,null)}}else Q(E.depthTexture,0);const dt=St.__webglTexture,qt=j(E),Dt=gt?r.TEXTURE_CUBE_MAP_POSITIVE_X+K:r.TEXTURE_2D,Jt=E.depthTexture.format===hr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ka)Oe(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Jt,Dt,dt,0,qt):r.framebufferTexture2D(r.FRAMEBUFFER,Jt,Dt,dt,0);else if(E.depthTexture.format===hr)Oe(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Jt,Dt,dt,0,qt):r.framebufferTexture2D(r.FRAMEBUFFER,Jt,Dt,dt,0);else throw new Error("Unknown depthTexture format")}function te(z){const E=a.get(z),K=z.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==z.depthTexture){const gt=z.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),gt){const St=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,gt.removeEventListener("dispose",St)};gt.addEventListener("dispose",St),E.__depthDisposeCallback=St}E.__boundDepthTexture=gt}if(z.depthTexture&&!E.__autoAllocateDepthBuffer)if(K)for(let gt=0;gt<6;gt++)Qt(E.__webglFramebuffer[gt],z,gt);else{const gt=z.texture.mipmaps;gt&&gt.length>0?Qt(E.__webglFramebuffer[0],z,0):Qt(E.__webglFramebuffer,z,0)}else if(K){E.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[gt]),E.__webglDepthbuffer[gt]===void 0)E.__webglDepthbuffer[gt]=r.createRenderbuffer(),kt(E.__webglDepthbuffer[gt],z,!1);else{const St=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer[gt];r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,dt)}}else{const gt=z.texture.mipmaps;if(gt&&gt.length>0?n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),kt(E.__webglDepthbuffer,z,!1);else{const St=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,dt)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Qe(z,E,K){const gt=a.get(z);E!==void 0&&Et(gt.__webglFramebuffer,z,z.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&te(z)}function Se(z){const E=z.texture,K=a.get(z),gt=a.get(E);z.addEventListener("dispose",O);const St=z.textures,dt=z.isWebGLCubeRenderTarget===!0,qt=St.length>1;if(qt||(gt.__webglTexture===void 0&&(gt.__webglTexture=r.createTexture()),gt.__version=E.version,u.memory.textures++),dt){K.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[Dt]=[];for(let Jt=0;Jt<E.mipmaps.length;Jt++)K.__webglFramebuffer[Dt][Jt]=r.createFramebuffer()}else K.__webglFramebuffer[Dt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let Dt=0;Dt<E.mipmaps.length;Dt++)K.__webglFramebuffer[Dt]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(qt)for(let Dt=0,Jt=St.length;Dt<Jt;Dt++){const ae=a.get(St[Dt]);ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture(),u.memory.textures++)}if(z.samples>0&&Oe(z)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Dt=0;Dt<St.length;Dt++){const Jt=St[Dt];K.__webglColorRenderbuffer[Dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[Dt]);const ae=c.convert(Jt.format,Jt.colorSpace),wt=c.convert(Jt.type),Tt=U(Jt.internalFormat,ae,wt,Jt.colorSpace,z.isXRRenderTarget===!0),Ft=j(z);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ft,Tt,z.width,z.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.RENDERBUFFER,K.__webglColorRenderbuffer[Dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),z.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),kt(K.__webglDepthRenderbuffer,z,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(dt){n.bindTexture(r.TEXTURE_CUBE_MAP,gt.__webglTexture),V(r.TEXTURE_CUBE_MAP,E);for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Jt=0;Jt<E.mipmaps.length;Jt++)Et(K.__webglFramebuffer[Dt][Jt],z,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Jt);else Et(K.__webglFramebuffer[Dt],z,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);S(E)&&x(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(qt){for(let Dt=0,Jt=St.length;Dt<Jt;Dt++){const ae=St[Dt],wt=a.get(ae);let Tt=r.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Tt=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Tt,wt.__webglTexture),V(Tt,ae),Et(K.__webglFramebuffer,z,ae,r.COLOR_ATTACHMENT0+Dt,Tt,0),S(ae)&&x(Tt)}n.unbindTexture()}else{let Dt=r.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Dt=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Dt,gt.__webglTexture),V(Dt,E),E.mipmaps&&E.mipmaps.length>0)for(let Jt=0;Jt<E.mipmaps.length;Jt++)Et(K.__webglFramebuffer[Jt],z,E,r.COLOR_ATTACHMENT0,Dt,Jt);else Et(K.__webglFramebuffer,z,E,r.COLOR_ATTACHMENT0,Dt,0);S(E)&&x(Dt),n.unbindTexture()}z.depthBuffer&&te(z)}function ye(z){const E=z.textures;for(let K=0,gt=E.length;K<gt;K++){const St=E[K];if(S(St)){const dt=w(z),qt=a.get(St).__webglTexture;n.bindTexture(dt,qt),x(dt),n.unbindTexture()}}}const yt=[],Ut=[];function Me(z){if(z.samples>0){if(Oe(z)===!1){const E=z.textures,K=z.width,gt=z.height;let St=r.COLOR_BUFFER_BIT;const dt=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,qt=a.get(z),Dt=E.length>1;if(Dt)for(let ae=0;ae<E.length;ae++)n.bindFramebuffer(r.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,qt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer);const Jt=z.texture.mipmaps;Jt&&Jt.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let ae=0;ae<E.length;ae++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(St|=r.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(St|=r.STENCIL_BUFFER_BIT)),Dt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,qt.__webglColorRenderbuffer[ae]);const wt=a.get(E[ae]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,wt,0)}r.blitFramebuffer(0,0,K,gt,0,0,K,gt,St,r.NEAREST),m===!0&&(yt.length=0,Ut.length=0,yt.push(r.COLOR_ATTACHMENT0+ae),z.depthBuffer&&z.resolveDepthBuffer===!1&&(yt.push(dt),Ut.push(dt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ut)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,yt))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Dt)for(let ae=0;ae<E.length;ae++){n.bindFramebuffer(r.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,qt.__webglColorRenderbuffer[ae]);const wt=a.get(E[ae]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,qt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,wt,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&m){const E=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function j(z){return Math.min(l.maxSamples,z.samples)}function Oe(z){const E=a.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function re(z){const E=u.render.frame;g.get(z)!==E&&(g.set(z,E),z.update())}function De(z,E){const K=z.colorSpace,gt=z.format,St=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||K!==No&&K!==Ls&&(Ne.getTransfer(K)===ke?(gt!==ta||St!==Ti)&&le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",K)),E}function It(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(p.width=z.naturalWidth||z.width,p.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(p.width=z.displayWidth,p.height=z.displayHeight):(p.width=z.width,p.height=z.height),p}this.allocateTextureUnit=tt,this.resetTextureUnits=Y,this.setTexture2D=Q,this.setTexture2DArray=P,this.setTexture3D=H,this.setTextureCube=ct,this.rebindTextures=Qe,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function e3(r,t){function n(a,l=Ls){let c;const u=Ne.getTransfer(l);if(a===Ti)return r.UNSIGNED_BYTE;if(a===xm)return r.UNSIGNED_SHORT_4_4_4_4;if(a===ym)return r.UNSIGNED_SHORT_5_5_5_1;if(a===py)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===my)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===hy)return r.BYTE;if(a===dy)return r.SHORT;if(a===jl)return r.UNSIGNED_SHORT;if(a===vm)return r.INT;if(a===_a)return r.UNSIGNED_INT;if(a===ha)return r.FLOAT;if(a===Za)return r.HALF_FLOAT;if(a===gy)return r.ALPHA;if(a===_y)return r.RGB;if(a===ta)return r.RGBA;if(a===Ka)return r.DEPTH_COMPONENT;if(a===hr)return r.DEPTH_STENCIL;if(a===vy)return r.RED;if(a===Sm)return r.RED_INTEGER;if(a===Uo)return r.RG;if(a===bm)return r.RG_INTEGER;if(a===Mm)return r.RGBA_INTEGER;if(a===Ju||a===$u||a===tf||a===ef)if(u===ke)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Ju)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===$u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===tf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ef)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Ju)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===$u)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===tf)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ef)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===wp||a===Rp||a===Cp||a===Dp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===wp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Rp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Cp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Dp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Lp||a===Up||a===Np||a===Op||a===Pp||a===zp||a===Ip)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Lp||a===Up)return u===ke?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Np)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===Op)return c.COMPRESSED_R11_EAC;if(a===Pp)return c.COMPRESSED_SIGNED_R11_EAC;if(a===zp)return c.COMPRESSED_RG11_EAC;if(a===Ip)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Fp||a===Bp||a===Hp||a===Gp||a===Vp||a===kp||a===Xp||a===jp||a===Wp||a===qp||a===Yp||a===Zp||a===Kp||a===Qp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Fp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Bp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Hp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Gp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Vp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===kp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Xp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===jp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Wp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===qp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Yp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Zp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Kp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Qp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Jp||a===$p||a===tm)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===Jp)return u===ke?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===$p)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===tm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===em||a===nm||a===im||a===am)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===em)return c.COMPRESSED_RED_RGTC1_EXT;if(a===nm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===im)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===am)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Wl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const n3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i3=`
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

}`;class a3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new Ly(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Hi({vertexShader:n3,fragmentShader:i3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new rn(new $l(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class s3 extends _r{constructor(t,n){super();const a=this;let l=null,c=1,u=null,d="local-floor",m=1,p=null,g=null,_=null,v=null,b=null,M=null;const R=typeof XRWebGLBinding<"u",S=new a3,x={},w=n.getContextAttributes();let U=null,C=null;const I=[],B=[],O=new ne;let T=null;const N=new Ii;N.viewport=new Ke;const ot=new Ii;ot.viewport=new Ke;const G=[N,ot],Y=new d1;let tt=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let vt=I[et];return vt===void 0&&(vt=new Nd,I[et]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(et){let vt=I[et];return vt===void 0&&(vt=new Nd,I[et]=vt),vt.getGripSpace()},this.getHand=function(et){let vt=I[et];return vt===void 0&&(vt=new Nd,I[et]=vt),vt.getHandSpace()};function Q(et){const vt=B.indexOf(et.inputSource);if(vt===-1)return;const Et=I[vt];Et!==void 0&&(Et.update(et.inputSource,et.frame,p||u),Et.dispatchEvent({type:et.type,data:et.inputSource}))}function P(){l.removeEventListener("select",Q),l.removeEventListener("selectstart",Q),l.removeEventListener("selectend",Q),l.removeEventListener("squeeze",Q),l.removeEventListener("squeezestart",Q),l.removeEventListener("squeezeend",Q),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",H);for(let et=0;et<I.length;et++){const vt=B[et];vt!==null&&(B[et]=null,I[et].disconnect(vt))}tt=null,$=null,S.reset();for(const et in x)delete x[et];t.setRenderTarget(U),b=null,v=null,_=null,l=null,C=null,Ot.stop(),a.isPresenting=!1,t.setPixelRatio(T),t.setSize(O.width,O.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){c=et,a.isPresenting===!0&&le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){d=et,a.isPresenting===!0&&le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return v!==null?v:b},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(l,n)),_},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",Q),l.addEventListener("selectstart",Q),l.addEventListener("selectend",Q),l.addEventListener("squeeze",Q),l.addEventListener("squeezestart",Q),l.addEventListener("squeezeend",Q),l.addEventListener("end",P),l.addEventListener("inputsourceschange",H),w.xrCompatible!==!0&&await n.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(O),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,kt=null,Qt=null;w.depth&&(Qt=w.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Et=w.stencil?hr:Ka,kt=w.stencil?Wl:_a);const te={colorFormat:n.RGBA8,depthFormat:Qt,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(te),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),C=new ga(v.textureWidth,v.textureHeight,{format:ta,type:Ti,depthTexture:new Kl(v.textureWidth,v.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Et={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,n,Et),l.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),C=new ga(b.framebufferWidth,b.framebufferHeight,{format:ta,type:Ti,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await l.requestReferenceSpace(d),Ot.setContext(l),Ot.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function H(et){for(let vt=0;vt<et.removed.length;vt++){const Et=et.removed[vt],kt=B.indexOf(Et);kt>=0&&(B[kt]=null,I[kt].disconnect(Et))}for(let vt=0;vt<et.added.length;vt++){const Et=et.added[vt];let kt=B.indexOf(Et);if(kt===-1){for(let te=0;te<I.length;te++)if(te>=B.length){B.push(Et),kt=te;break}else if(B[te]===null){B[te]=Et,kt=te;break}if(kt===-1)break}const Qt=I[kt];Qt&&Qt.connect(Et)}}const ct=new X,pt=new X;function bt(et,vt,Et){ct.setFromMatrixPosition(vt.matrixWorld),pt.setFromMatrixPosition(Et.matrixWorld);const kt=ct.distanceTo(pt),Qt=vt.projectionMatrix.elements,te=Et.projectionMatrix.elements,Qe=Qt[14]/(Qt[10]-1),Se=Qt[14]/(Qt[10]+1),ye=(Qt[9]+1)/Qt[5],yt=(Qt[9]-1)/Qt[5],Ut=(Qt[8]-1)/Qt[0],Me=(te[8]+1)/te[0],j=Qe*Ut,Oe=Qe*Me,re=kt/(-Ut+Me),De=re*-Ut;if(vt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(De),et.translateZ(re),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Qt[10]===-1)et.projectionMatrix.copy(vt.projectionMatrix),et.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const It=Qe+re,z=Se+re,E=j-De,K=Oe+(kt-De),gt=ye*Se/z*It,St=yt*Se/z*It;et.projectionMatrix.makePerspective(E,K,gt,St,It,z),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function A(et,vt){vt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(vt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let vt=et.near,Et=et.far;S.texture!==null&&(S.depthNear>0&&(vt=S.depthNear),S.depthFar>0&&(Et=S.depthFar)),Y.near=ot.near=N.near=vt,Y.far=ot.far=N.far=Et,(tt!==Y.near||$!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),tt=Y.near,$=Y.far),Y.layers.mask=et.layers.mask|6,N.layers.mask=Y.layers.mask&-5,ot.layers.mask=Y.layers.mask&-3;const kt=et.parent,Qt=Y.cameras;A(Y,kt);for(let te=0;te<Qt.length;te++)A(Qt[te],kt);Qt.length===2?bt(Y,N,ot):Y.projectionMatrix.copy(N.projectionMatrix),V(et,Y,kt)};function V(et,vt,Et){Et===null?et.matrix.copy(vt.matrixWorld):(et.matrix.copy(Et.matrixWorld),et.matrix.invert(),et.matrix.multiply(vt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(vt.projectionMatrix),et.projectionMatrixInverse.copy(vt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Zl*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(v===null&&b===null))return m},this.setFoveation=function(et){m=et,v!==null&&(v.fixedFoveation=et),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=et)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Y)},this.getCameraTexture=function(et){return x[et]};let ft=null;function Mt(et,vt){if(g=vt.getViewerPose(p||u),M=vt,g!==null){const Et=g.views;b!==null&&(t.setRenderTargetFramebuffer(C,b.framebuffer),t.setRenderTarget(C));let kt=!1;Et.length!==Y.cameras.length&&(Y.cameras.length=0,kt=!0);for(let Se=0;Se<Et.length;Se++){const ye=Et[Se];let yt=null;if(b!==null)yt=b.getViewport(ye);else{const Me=_.getViewSubImage(v,ye);yt=Me.viewport,Se===0&&(t.setRenderTargetTextures(C,Me.colorTexture,Me.depthStencilTexture),t.setRenderTarget(C))}let Ut=G[Se];Ut===void 0&&(Ut=new Ii,Ut.layers.enable(Se),Ut.viewport=new Ke,G[Se]=Ut),Ut.matrix.fromArray(ye.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(ye.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(yt.x,yt.y,yt.width,yt.height),Se===0&&(Y.matrix.copy(Ut.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),kt===!0&&Y.cameras.push(Ut)}const Qt=l.enabledFeatures;if(Qt&&Qt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){_=a.getBinding();const Se=_.getDepthInformation(Et[0]);Se&&Se.isValid&&Se.texture&&S.init(Se,l.renderState)}if(Qt&&Qt.includes("camera-access")&&R){t.state.unbindTexture(),_=a.getBinding();for(let Se=0;Se<Et.length;Se++){const ye=Et[Se].camera;if(ye){let yt=x[ye];yt||(yt=new Ly,x[ye]=yt);const Ut=_.getCameraImage(ye);yt.sourceTexture=Ut}}}}for(let Et=0;Et<I.length;Et++){const kt=B[Et],Qt=I[Et];kt!==null&&Qt!==void 0&&Qt.update(kt,vt,p||u)}ft&&ft(et,vt),vt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:vt}),M=null}const Ot=new Oy;Ot.setAnimationLoop(Mt),this.setAnimationLoop=function(et){ft=et},this.dispose=function(){}}}const rr=new va,r3=new en;function o3(r,t){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function a(S,x){x.color.getRGB(S.fogColor.value,Uy(r)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function l(S,x,w,U,C){x.isMeshBasicMaterial?c(S,x):x.isMeshLambertMaterial?(c(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(S,x),_(S,x)):x.isMeshPhongMaterial?(c(S,x),g(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(S,x),v(S,x),x.isMeshPhysicalMaterial&&b(S,x,C)):x.isMeshMatcapMaterial?(c(S,x),M(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),R(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&d(S,x)):x.isPointsMaterial?m(S,x,w,U):x.isSpriteMaterial?p(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===ni&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===ni&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const w=t.get(x),U=w.envMap,C=w.envMapRotation;U&&(S.envMap.value=U,rr.copy(C),rr.x*=-1,rr.y*=-1,rr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),S.envMapRotation.value.setFromMatrix4(r3.makeRotationFromEuler(rr)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function d(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function m(S,x,w,U){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*w,S.scale.value=U*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function b(S,x,w){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ni&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=w.texture,S.transmissionSamplerSize.value.set(w.width,w.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function R(S,x){const w=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(w.matrixWorld),S.nearDistance.value=w.shadow.camera.near,S.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function l3(r,t,n,a){let l={},c={},u=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,U){const C=U.program;a.uniformBlockBinding(w,C)}function p(w,U){let C=l[w.id];C===void 0&&(M(w),C=g(w),l[w.id]=C,w.addEventListener("dispose",S));const I=U.program;a.updateUBOMapping(w,I);const B=t.render.frame;c[w.id]!==B&&(v(w),c[w.id]=B)}function g(w){const U=_();w.__bindingPointIndex=U;const C=r.createBuffer(),I=w.__size,B=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,I,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,C),C}function _(){for(let w=0;w<d;w++)if(u.indexOf(w)===-1)return u.push(w),w;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(w){const U=l[w.id],C=w.uniforms,I=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let B=0,O=C.length;B<O;B++){const T=Array.isArray(C[B])?C[B]:[C[B]];for(let N=0,ot=T.length;N<ot;N++){const G=T[N];if(b(G,B,N,I)===!0){const Y=G.__offset,tt=Array.isArray(G.value)?G.value:[G.value];let $=0;for(let Q=0;Q<tt.length;Q++){const P=tt[Q],H=R(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,Y+$,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):(P.toArray(G.__data,$),$+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function b(w,U,C,I){const B=w.value,O=U+"_"+C;if(I[O]===void 0)return typeof B=="number"||typeof B=="boolean"?I[O]=B:I[O]=B.clone(),!0;{const T=I[O];if(typeof B=="number"||typeof B=="boolean"){if(T!==B)return I[O]=B,!0}else if(T.equals(B)===!1)return T.copy(B),!0}return!1}function M(w){const U=w.uniforms;let C=0;const I=16;for(let O=0,T=U.length;O<T;O++){const N=Array.isArray(U[O])?U[O]:[U[O]];for(let ot=0,G=N.length;ot<G;ot++){const Y=N[ot],tt=Array.isArray(Y.value)?Y.value:[Y.value];for(let $=0,Q=tt.length;$<Q;$++){const P=tt[$],H=R(P),ct=C%I,pt=ct%H.boundary,bt=ct+pt;C+=pt,bt!==0&&I-bt<H.storage&&(C+=I-bt),Y.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=C,C+=H.storage}}}const B=C%I;return B>0&&(C+=I-B),w.__size=C,w.__cache={},this}function R(w){const U={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(U.boundary=4,U.storage=4):w.isVector2?(U.boundary=8,U.storage=8):w.isVector3||w.isColor?(U.boundary=16,U.storage=12):w.isVector4?(U.boundary=16,U.storage=16):w.isMatrix3?(U.boundary=48,U.storage=48):w.isMatrix4?(U.boundary=64,U.storage=64):w.isTexture?le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):le("WebGLRenderer: Unsupported uniform value type.",w),U}function S(w){const U=w.target;U.removeEventListener("dispose",S);const C=u.indexOf(U.__bindingPointIndex);u.splice(C,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function x(){for(const w in l)r.deleteBuffer(l[w]);u=[],l={},c={}}return{bind:m,update:p,dispose:x}}const c3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oa=null;function u3(){return oa===null&&(oa=new VE(c3,16,16,Uo,Za),oa.name="DFG_LUT",oa.minFilter=Un,oa.magFilter=Un,oa.wrapS=ja,oa.wrapT=ja,oa.generateMipmaps=!1,oa.needsUpdate=!0),oa}class f3{constructor(t={}){const{canvas:n=aE(),context:a=null,depth:l=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:b=Ti}=t;this.isWebGLRenderer=!0;let M;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=a.getContextAttributes().alpha}else M=u;const R=b,S=new Set([Mm,bm,Sm]),x=new Set([Ti,_a,jl,Wl,xm,ym]),w=new Uint32Array(4),U=new Int32Array(4);let C=null,I=null;const B=[],O=[];let T=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ma,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let ot=!1;this._outputColorSpace=Ln;let G=0,Y=0,tt=null,$=-1,Q=null;const P=new Ke,H=new Ke;let ct=null;const pt=new be(0);let bt=0,A=n.width,V=n.height,ft=1,Mt=null,Ot=null;const et=new Ke(0,0,A,V),vt=new Ke(0,0,A,V);let Et=!1;const kt=new Cm;let Qt=!1,te=!1;const Qe=new en,Se=new X,ye=new Ke,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function Me(){return tt===null?ft:1}let j=a;function Oe(L,q){return n.getContext(L,q)}try{const L={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${gm}`),n.addEventListener("webglcontextlost",Vt,!1),n.addEventListener("webglcontextrestored",oe,!1),n.addEventListener("webglcontextcreationerror",He,!1),j===null){const q="webgl2";if(j=Oe(q,L),j===null)throw Oe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw Ue("WebGLRenderer: "+L.message),L}let re,De,It,z,E,K,gt,St,dt,qt,Dt,Jt,ae,wt,Tt,Ft,zt,Bt,pe,Z,Ct,Rt,Ht;function At(){re=new fw(j),re.init(),Ct=new e3(j,re),De=new iw(j,re,t,Ct),It=new $2(j,re),De.reversedDepthBuffer&&v&&It.buffers.depth.setReversed(!0),z=new pw(j),E=new B2,K=new t3(j,re,It,E,De,Ct,z),gt=new uw(N),St=new x1(j),Rt=new ew(j,St),dt=new hw(j,St,z,Rt),qt=new gw(j,dt,St,Rt,z),Bt=new mw(j,De,K),Tt=new aw(E),Dt=new F2(N,gt,re,De,Rt,Tt),Jt=new o3(N,E),ae=new G2,wt=new q2(re),zt=new tw(N,gt,It,qt,M,m),Ft=new J2(N,qt,De),Ht=new l3(j,z,De,It),pe=new nw(j,re,z),Z=new dw(j,re,z),z.programs=Dt.programs,N.capabilities=De,N.extensions=re,N.properties=E,N.renderLists=ae,N.shadowMap=Ft,N.state=It,N.info=z}At(),R!==Ti&&(T=new vw(R,n.width,n.height,l,c));const ht=new s3(N,j);this.xr=ht,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const L=re.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=re.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return ft},this.setPixelRatio=function(L){L!==void 0&&(ft=L,this.setSize(A,V,!1))},this.getSize=function(L){return L.set(A,V)},this.setSize=function(L,q,lt=!0){if(ht.isPresenting){le("WebGLRenderer: Can't change size while VR device is presenting.");return}A=L,V=q,n.width=Math.floor(L*ft),n.height=Math.floor(q*ft),lt===!0&&(n.style.width=L+"px",n.style.height=q+"px"),T!==null&&T.setSize(n.width,n.height),this.setViewport(0,0,L,q)},this.getDrawingBufferSize=function(L){return L.set(A*ft,V*ft).floor()},this.setDrawingBufferSize=function(L,q,lt){A=L,V=q,ft=lt,n.width=Math.floor(L*lt),n.height=Math.floor(q*lt),this.setViewport(0,0,L,q)},this.setEffects=function(L){if(R===Ti){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let q=0;q<L.length;q++)if(L[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(P)},this.getViewport=function(L){return L.copy(et)},this.setViewport=function(L,q,lt,st){L.isVector4?et.set(L.x,L.y,L.z,L.w):et.set(L,q,lt,st),It.viewport(P.copy(et).multiplyScalar(ft).round())},this.getScissor=function(L){return L.copy(vt)},this.setScissor=function(L,q,lt,st){L.isVector4?vt.set(L.x,L.y,L.z,L.w):vt.set(L,q,lt,st),It.scissor(H.copy(vt).multiplyScalar(ft).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(L){It.setScissorTest(Et=L)},this.setOpaqueSort=function(L){Mt=L},this.setTransparentSort=function(L){Ot=L},this.getClearColor=function(L){return L.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor(...arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha(...arguments)},this.clear=function(L=!0,q=!0,lt=!0){let st=0;if(L){let nt=!1;if(tt!==null){const Lt=tt.texture.format;nt=S.has(Lt)}if(nt){const Lt=tt.texture.type,Gt=x.has(Lt),Pt=zt.getClearColor(),Yt=zt.getClearAlpha(),Kt=Pt.r,se=Pt.g,ue=Pt.b;Gt?(w[0]=Kt,w[1]=se,w[2]=ue,w[3]=Yt,j.clearBufferuiv(j.COLOR,0,w)):(U[0]=Kt,U[1]=se,U[2]=ue,U[3]=Yt,j.clearBufferiv(j.COLOR,0,U))}else st|=j.COLOR_BUFFER_BIT}q&&(st|=j.DEPTH_BUFFER_BIT),lt&&(st|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&j.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Vt,!1),n.removeEventListener("webglcontextrestored",oe,!1),n.removeEventListener("webglcontextcreationerror",He,!1),zt.dispose(),ae.dispose(),wt.dispose(),E.dispose(),gt.dispose(),qt.dispose(),Rt.dispose(),Ht.dispose(),Dt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",yr),ht.removeEventListener("sessionend",Sr),ea.stop()};function Vt(L){L.preventDefault(),of("WebGLRenderer: Context Lost."),ot=!0}function oe(){of("WebGLRenderer: Context Restored."),ot=!1;const L=z.autoReset,q=Ft.enabled,lt=Ft.autoUpdate,st=Ft.needsUpdate,nt=Ft.type;At(),z.autoReset=L,Ft.enabled=q,Ft.autoUpdate=lt,Ft.needsUpdate=st,Ft.type=nt}function He(L){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Le(L){const q=L.target;q.removeEventListener("dispose",Le),Zn(q)}function Zn(L){Gi(L),E.remove(L)}function Gi(L){const q=E.get(L).programs;q!==void 0&&(q.forEach(function(lt){Dt.releaseProgram(lt)}),L.isShaderMaterial&&Dt.releaseShaderCache(L))}this.renderBufferDirect=function(L,q,lt,st,nt,Lt){q===null&&(q=yt);const Gt=nt.isMesh&&nt.matrixWorld.determinant()<0,Pt=ic(L,q,lt,st,nt);It.setMaterial(st,Gt);let Yt=lt.index,Kt=1;if(st.wireframe===!0){if(Yt=dt.getWireframeAttribute(lt),Yt===void 0)return;Kt=2}const se=lt.drawRange,ue=lt.attributes.position;let Xt=se.start*Kt,me=(se.start+se.count)*Kt;Lt!==null&&(Xt=Math.max(Xt,Lt.start*Kt),me=Math.min(me,(Lt.start+Lt.count)*Kt)),Yt!==null?(Xt=Math.max(Xt,0),me=Math.min(me,Yt.count)):ue!=null&&(Xt=Math.max(Xt,0),me=Math.min(me,ue.count));const nn=me-Xt;if(nn<0||nn===1/0)return;Rt.setup(nt,st,Pt,lt,Yt);let an,Pe=pe;if(Yt!==null&&(an=St.get(Yt),Pe=Z,Pe.setIndex(an)),nt.isMesh)st.wireframe===!0?(It.setLineWidth(st.wireframeLinewidth*Me()),Pe.setMode(j.LINES)):Pe.setMode(j.TRIANGLES);else if(nt.isLine){let bn=st.linewidth;bn===void 0&&(bn=1),It.setLineWidth(bn*Me()),nt.isLineSegments?Pe.setMode(j.LINES):nt.isLineLoop?Pe.setMode(j.LINE_LOOP):Pe.setMode(j.LINE_STRIP)}else nt.isPoints?Pe.setMode(j.POINTS):nt.isSprite&&Pe.setMode(j.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)lf("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pe.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))Pe.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const bn=nt._multiDrawStarts,Wt=nt._multiDrawCounts,Kn=nt._multiDrawCount,ce=Yt?St.get(Yt).bytesPerElement:1,Qn=E.get(st).currentProgram.getUniforms();for(let hi=0;hi<Kn;hi++)Qn.setValue(j,"_gl_DrawID",hi),Pe.render(bn[hi]/ce,Wt[hi])}else if(nt.isInstancedMesh)Pe.renderInstances(Xt,nn,nt.count);else if(lt.isInstancedBufferGeometry){const bn=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Wt=Math.min(lt.instanceCount,bn);Pe.renderInstances(Xt,nn,Wt)}else Pe.render(Xt,nn)};function Io(L,q,lt){L.transparent===!0&&L.side===Ji&&L.forceSinglePass===!1?(L.side=ni,L.needsUpdate=!0,Qa(L,q,lt),L.side=Ns,L.needsUpdate=!0,Qa(L,q,lt),L.side=Ji):Qa(L,q,lt)}this.compile=function(L,q,lt=null){lt===null&&(lt=L),I=wt.get(lt),I.init(q),O.push(I),lt.traverseVisible(function(nt){nt.isLight&&nt.layers.test(q.layers)&&(I.pushLight(nt),nt.castShadow&&I.pushShadow(nt))}),L!==lt&&L.traverseVisible(function(nt){nt.isLight&&nt.layers.test(q.layers)&&(I.pushLight(nt),nt.castShadow&&I.pushShadow(nt))}),I.setupLights();const st=new Set;return L.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const Lt=nt.material;if(Lt)if(Array.isArray(Lt))for(let Gt=0;Gt<Lt.length;Gt++){const Pt=Lt[Gt];Io(Pt,lt,nt),st.add(Pt)}else Io(Lt,lt,nt),st.add(Lt)}),I=O.pop(),st},this.compileAsync=function(L,q,lt=null){const st=this.compile(L,q,lt);return new Promise(nt=>{function Lt(){if(st.forEach(function(Gt){E.get(Gt).currentProgram.isReady()&&st.delete(Gt)}),st.size===0){nt(L);return}setTimeout(Lt,10)}re.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let xr=null;function tc(L){xr&&xr(L)}function yr(){ea.stop()}function Sr(){ea.start()}const ea=new Oy;ea.setAnimationLoop(tc),typeof self<"u"&&ea.setContext(self),this.setAnimationLoop=function(L){xr=L,ht.setAnimationLoop(L),L===null?ea.stop():ea.start()},ht.addEventListener("sessionstart",yr),ht.addEventListener("sessionend",Sr),this.render=function(L,q){if(q!==void 0&&q.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ot===!0)return;const lt=ht.enabled===!0&&ht.isPresenting===!0,st=T!==null&&(tt===null||lt)&&T.begin(N,tt);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(q),q=ht.getCamera()),L.isScene===!0&&L.onBeforeRender(N,L,q,tt),I=wt.get(L,O.length),I.init(q),O.push(I),Qe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),kt.setFromProjectionMatrix(Qe,da,q.reversedDepth),te=this.localClippingEnabled,Qt=Tt.init(this.clippingPlanes,te),C=ae.get(L,B.length),C.init(),B.push(C),ht.enabled===!0&&ht.isPresenting===!0){const Gt=N.xr.getDepthSensingMesh();Gt!==null&&br(Gt,q,-1/0,N.sortObjects)}br(L,q,0,N.sortObjects),C.finish(),N.sortObjects===!0&&C.sort(Mt,Ot),Ut=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,Ut&&zt.addToRenderList(C,L),this.info.render.frame++,Qt===!0&&Tt.beginShadows();const nt=I.state.shadowsArray;if(Ft.render(nt,L,q),Qt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(st&&T.hasRenderPass())===!1){const Gt=C.opaque,Pt=C.transmissive;if(I.setupLights(),q.isArrayCamera){const Yt=q.cameras;if(Pt.length>0)for(let Kt=0,se=Yt.length;Kt<se;Kt++){const ue=Yt[Kt];dn(Gt,Pt,L,ue)}Ut&&zt.render(L);for(let Kt=0,se=Yt.length;Kt<se;Kt++){const ue=Yt[Kt];Vi(C,L,ue,ue.viewport)}}else Pt.length>0&&dn(Gt,Pt,L,q),Ut&&zt.render(L),Vi(C,L,q)}tt!==null&&Y===0&&(K.updateMultisampleRenderTarget(tt),K.updateRenderTargetMipmap(tt)),st&&T.end(N),L.isScene===!0&&L.onAfterRender(N,L,q),Rt.resetDefaultState(),$=-1,Q=null,O.pop(),O.length>0?(I=O[O.length-1],Qt===!0&&Tt.setGlobalState(N.clippingPlanes,I.state.camera)):I=null,B.pop(),B.length>0?C=B[B.length-1]:C=null};function br(L,q,lt,st){if(L.visible===!1)return;if(L.layers.test(q.layers)){if(L.isGroup)lt=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(q);else if(L.isLight)I.pushLight(L),L.castShadow&&I.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||kt.intersectsSprite(L)){st&&ye.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Qe);const Gt=qt.update(L),Pt=L.material;Pt.visible&&C.push(L,Gt,Pt,lt,ye.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||kt.intersectsObject(L))){const Gt=qt.update(L),Pt=L.material;if(st&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),ye.copy(L.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),ye.copy(Gt.boundingSphere.center)),ye.applyMatrix4(L.matrixWorld).applyMatrix4(Qe)),Array.isArray(Pt)){const Yt=Gt.groups;for(let Kt=0,se=Yt.length;Kt<se;Kt++){const ue=Yt[Kt],Xt=Pt[ue.materialIndex];Xt&&Xt.visible&&C.push(L,Gt,Xt,lt,ye.z,ue)}}else Pt.visible&&C.push(L,Gt,Pt,lt,ye.z,null)}}const Lt=L.children;for(let Gt=0,Pt=Lt.length;Gt<Pt;Gt++)br(Lt[Gt],q,lt,st)}function Vi(L,q,lt,st){const{opaque:nt,transmissive:Lt,transparent:Gt}=L;I.setupLightsView(lt),Qt===!0&&Tt.setGlobalState(N.clippingPlanes,lt),st&&It.viewport(P.copy(st)),nt.length>0&&Sn(nt,q,lt),Lt.length>0&&Sn(Lt,q,lt),Gt.length>0&&Sn(Gt,q,lt),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function dn(L,q,lt,st){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[st.id]===void 0){const Xt=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[st.id]=new ga(1,1,{generateMipmaps:!0,type:Xt?Za:Ti,minFilter:fr,samples:De.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace})}const Lt=I.state.transmissionRenderTarget[st.id],Gt=st.viewport||P;Lt.setSize(Gt.z*N.transmissionResolutionScale,Gt.w*N.transmissionResolutionScale);const Pt=N.getRenderTarget(),Yt=N.getActiveCubeFace(),Kt=N.getActiveMipmapLevel();N.setRenderTarget(Lt),N.getClearColor(pt),bt=N.getClearAlpha(),bt<1&&N.setClearColor(16777215,.5),N.clear(),Ut&&zt.render(lt);const se=N.toneMapping;N.toneMapping=ma;const ue=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),I.setupLightsView(st),Qt===!0&&Tt.setGlobalState(N.clippingPlanes,st),Sn(L,lt,st),K.updateMultisampleRenderTarget(Lt),K.updateRenderTargetMipmap(Lt),re.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let me=0,nn=q.length;me<nn;me++){const an=q[me],{object:Pe,geometry:bn,material:Wt,group:Kn}=an;if(Wt.side===Ji&&Pe.layers.test(st.layers)){const ce=Wt.side;Wt.side=ni,Wt.needsUpdate=!0,ya(Pe,lt,st,bn,Wt,Kn),Wt.side=ce,Wt.needsUpdate=!0,Xt=!0}}Xt===!0&&(K.updateMultisampleRenderTarget(Lt),K.updateRenderTargetMipmap(Lt))}N.setRenderTarget(Pt,Yt,Kt),N.setClearColor(pt,bt),ue!==void 0&&(st.viewport=ue),N.toneMapping=se}function Sn(L,q,lt){const st=q.isScene===!0?q.overrideMaterial:null;for(let nt=0,Lt=L.length;nt<Lt;nt++){const Gt=L[nt],{object:Pt,geometry:Yt,group:Kt}=Gt;let se=Gt.material;se.allowOverride===!0&&st!==null&&(se=st),Pt.layers.test(lt.layers)&&ya(Pt,q,lt,Yt,se,Kt)}}function ya(L,q,lt,st,nt,Lt){L.onBeforeRender(N,q,lt,st,nt,Lt),L.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),nt.onBeforeRender(N,q,lt,st,L,Lt),nt.transparent===!0&&nt.side===Ji&&nt.forceSinglePass===!1?(nt.side=ni,nt.needsUpdate=!0,N.renderBufferDirect(lt,q,st,nt,L,Lt),nt.side=Ns,nt.needsUpdate=!0,N.renderBufferDirect(lt,q,st,nt,L,Lt),nt.side=Ji):N.renderBufferDirect(lt,q,st,nt,L,Lt),L.onAfterRender(N,q,lt,st,nt,Lt)}function Qa(L,q,lt){q.isScene!==!0&&(q=yt);const st=E.get(L),nt=I.state.lights,Lt=I.state.shadowsArray,Gt=nt.state.version,Pt=Dt.getParameters(L,nt.state,Lt,q,lt),Yt=Dt.getProgramCacheKey(Pt);let Kt=st.programs;st.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?q.environment:null,st.fog=q.fog;const se=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;st.envMap=gt.get(L.envMap||st.environment,se),st.envMapRotation=st.environment!==null&&L.envMap===null?q.environmentRotation:L.envMapRotation,Kt===void 0&&(L.addEventListener("dispose",Le),Kt=new Map,st.programs=Kt);let ue=Kt.get(Yt);if(ue!==void 0){if(st.currentProgram===ue&&st.lightsStateVersion===Gt)return nc(L,Pt),ue}else Pt.uniforms=Dt.getUniforms(L),L.onBeforeCompile(Pt,N),ue=Dt.acquireProgram(Pt,Yt),Kt.set(Yt,ue),st.uniforms=Pt.uniforms;const Xt=st.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Xt.clippingPlanes=Tt.uniform),nc(L,Pt),st.needsLights=Fo(L),st.lightsStateVersion=Gt,st.needsLights&&(Xt.ambientLightColor.value=nt.state.ambient,Xt.lightProbe.value=nt.state.probe,Xt.directionalLights.value=nt.state.directional,Xt.directionalLightShadows.value=nt.state.directionalShadow,Xt.spotLights.value=nt.state.spot,Xt.spotLightShadows.value=nt.state.spotShadow,Xt.rectAreaLights.value=nt.state.rectArea,Xt.ltc_1.value=nt.state.rectAreaLTC1,Xt.ltc_2.value=nt.state.rectAreaLTC2,Xt.pointLights.value=nt.state.point,Xt.pointLightShadows.value=nt.state.pointShadow,Xt.hemisphereLights.value=nt.state.hemi,Xt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Xt.spotLightMatrix.value=nt.state.spotLightMatrix,Xt.spotLightMap.value=nt.state.spotLightMap,Xt.pointShadowMatrix.value=nt.state.pointShadowMatrix),st.currentProgram=ue,st.uniformsList=null,ue}function ec(L){if(L.uniformsList===null){const q=L.currentProgram.getUniforms();L.uniformsList=af.seqWithValue(q.seq,L.uniforms)}return L.uniformsList}function nc(L,q){const lt=E.get(L);lt.outputColorSpace=q.outputColorSpace,lt.batching=q.batching,lt.batchingColor=q.batchingColor,lt.instancing=q.instancing,lt.instancingColor=q.instancingColor,lt.instancingMorph=q.instancingMorph,lt.skinning=q.skinning,lt.morphTargets=q.morphTargets,lt.morphNormals=q.morphNormals,lt.morphColors=q.morphColors,lt.morphTargetsCount=q.morphTargetsCount,lt.numClippingPlanes=q.numClippingPlanes,lt.numIntersection=q.numClipIntersection,lt.vertexAlphas=q.vertexAlphas,lt.vertexTangents=q.vertexTangents,lt.toneMapping=q.toneMapping}function ic(L,q,lt,st,nt){q.isScene!==!0&&(q=yt),K.resetTextureUnits();const Lt=q.fog,Gt=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?q.environment:null,Pt=tt===null?N.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:No,Yt=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,Kt=gt.get(st.envMap||Gt,Yt),se=st.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,ue=!!lt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Xt=!!lt.morphAttributes.position,me=!!lt.morphAttributes.normal,nn=!!lt.morphAttributes.color;let an=ma;st.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(an=N.toneMapping);const Pe=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,bn=Pe!==void 0?Pe.length:0,Wt=E.get(st),Kn=I.state.lights;if(Qt===!0&&(te===!0||L!==Q)){const mn=L===Q&&st.id===$;Tt.setState(st,L,mn)}let ce=!1;st.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Kn.state.version||Wt.outputColorSpace!==Pt||nt.isBatchedMesh&&Wt.batching===!1||!nt.isBatchedMesh&&Wt.batching===!0||nt.isBatchedMesh&&Wt.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&Wt.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&Wt.instancing===!1||!nt.isInstancedMesh&&Wt.instancing===!0||nt.isSkinnedMesh&&Wt.skinning===!1||!nt.isSkinnedMesh&&Wt.skinning===!0||nt.isInstancedMesh&&Wt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Wt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Wt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Wt.instancingMorph===!1&&nt.morphTexture!==null||Wt.envMap!==Kt||st.fog===!0&&Wt.fog!==Lt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Tt.numPlanes||Wt.numIntersection!==Tt.numIntersection)||Wt.vertexAlphas!==se||Wt.vertexTangents!==ue||Wt.morphTargets!==Xt||Wt.morphNormals!==me||Wt.morphColors!==nn||Wt.toneMapping!==an||Wt.morphTargetsCount!==bn)&&(ce=!0):(ce=!0,Wt.__version=st.version);let Qn=Wt.currentProgram;ce===!0&&(Qn=Qa(st,q,nt));let hi=!1,ki=!1,di=!1;const Be=Qn.getUniforms(),pn=Wt.uniforms;if(It.useProgram(Qn.program)&&(hi=!0,ki=!0,di=!0),st.id!==$&&($=st.id,ki=!0),hi||Q!==L){It.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Be.setValue(j,"projectionMatrix",L.projectionMatrix),Be.setValue(j,"viewMatrix",L.matrixWorldInverse);const Xi=Be.map.cameraPosition;Xi!==void 0&&Xi.setValue(j,Se.setFromMatrixPosition(L.matrixWorld)),De.logarithmicDepthBuffer&&Be.setValue(j,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Be.setValue(j,"isOrthographic",L.isOrthographicCamera===!0),Q!==L&&(Q=L,ki=!0,di=!0)}if(Wt.needsLights&&(Kn.state.directionalShadowMap.length>0&&Be.setValue(j,"directionalShadowMap",Kn.state.directionalShadowMap,K),Kn.state.spotShadowMap.length>0&&Be.setValue(j,"spotShadowMap",Kn.state.spotShadowMap,K),Kn.state.pointShadowMap.length>0&&Be.setValue(j,"pointShadowMap",Kn.state.pointShadowMap,K)),nt.isSkinnedMesh){Be.setOptional(j,nt,"bindMatrix"),Be.setOptional(j,nt,"bindMatrixInverse");const mn=nt.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Be.setValue(j,"boneTexture",mn.boneTexture,K))}nt.isBatchedMesh&&(Be.setOptional(j,nt,"batchingTexture"),Be.setValue(j,"batchingTexture",nt._matricesTexture,K),Be.setOptional(j,nt,"batchingIdTexture"),Be.setValue(j,"batchingIdTexture",nt._indirectTexture,K),Be.setOptional(j,nt,"batchingColorTexture"),nt._colorsTexture!==null&&Be.setValue(j,"batchingColorTexture",nt._colorsTexture,K));const Jn=lt.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&Bt.update(nt,lt,Qn),(ki||Wt.receiveShadow!==nt.receiveShadow)&&(Wt.receiveShadow=nt.receiveShadow,Be.setValue(j,"receiveShadow",nt.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&q.environment!==null&&(pn.envMapIntensity.value=q.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=u3()),ki&&(Be.setValue(j,"toneMappingExposure",N.toneMappingExposure),Wt.needsLights&&zs(pn,di),Lt&&st.fog===!0&&Jt.refreshFogUniforms(pn,Lt),Jt.refreshMaterialUniforms(pn,st,ft,V,I.state.transmissionRenderTarget[L.id]),af.upload(j,ec(Wt),pn,K)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(af.upload(j,ec(Wt),pn,K),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Be.setValue(j,"center",nt.center),Be.setValue(j,"modelViewMatrix",nt.modelViewMatrix),Be.setValue(j,"normalMatrix",nt.normalMatrix),Be.setValue(j,"modelMatrix",nt.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const mn=st.uniformsGroups;for(let Xi=0,Sa=mn.length;Xi<Sa;Xi++){const Mr=mn[Xi];Ht.update(Mr,Qn),Ht.bind(Mr,Qn)}}return Qn}function zs(L,q){L.ambientLightColor.needsUpdate=q,L.lightProbe.needsUpdate=q,L.directionalLights.needsUpdate=q,L.directionalLightShadows.needsUpdate=q,L.pointLights.needsUpdate=q,L.pointLightShadows.needsUpdate=q,L.spotLights.needsUpdate=q,L.spotLightShadows.needsUpdate=q,L.rectAreaLights.needsUpdate=q,L.hemisphereLights.needsUpdate=q}function Fo(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(L,q,lt){const st=E.get(L);st.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),E.get(L.texture).__webglTexture=q,E.get(L.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:lt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,q){const lt=E.get(L);lt.__webglFramebuffer=q,lt.__useDefaultFramebuffer=q===void 0};const Ja=j.createFramebuffer();this.setRenderTarget=function(L,q=0,lt=0){tt=L,G=q,Y=lt;let st=null,nt=!1,Lt=!1;if(L){const Pt=E.get(L);if(Pt.__useDefaultFramebuffer!==void 0){It.bindFramebuffer(j.FRAMEBUFFER,Pt.__webglFramebuffer),P.copy(L.viewport),H.copy(L.scissor),ct=L.scissorTest,It.viewport(P),It.scissor(H),It.setScissorTest(ct),$=-1;return}else if(Pt.__webglFramebuffer===void 0)K.setupRenderTarget(L);else if(Pt.__hasExternalTextures)K.rebindTextures(L,E.get(L.texture).__webglTexture,E.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const se=L.depthTexture;if(Pt.__boundDepthTexture!==se){if(se!==null&&E.has(se)&&(L.width!==se.image.width||L.height!==se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(L)}}const Yt=L.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Lt=!0);const Kt=E.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Kt[q])?st=Kt[q][lt]:st=Kt[q],nt=!0):L.samples>0&&K.useMultisampledRTT(L)===!1?st=E.get(L).__webglMultisampledFramebuffer:Array.isArray(Kt)?st=Kt[lt]:st=Kt,P.copy(L.viewport),H.copy(L.scissor),ct=L.scissorTest}else P.copy(et).multiplyScalar(ft).floor(),H.copy(vt).multiplyScalar(ft).floor(),ct=Et;if(lt!==0&&(st=Ja),It.bindFramebuffer(j.FRAMEBUFFER,st)&&It.drawBuffers(L,st),It.viewport(P),It.scissor(H),It.setScissorTest(ct),nt){const Pt=E.get(L.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+q,Pt.__webglTexture,lt)}else if(Lt){const Pt=q;for(let Yt=0;Yt<L.textures.length;Yt++){const Kt=E.get(L.textures[Yt]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Yt,Kt.__webglTexture,lt,Pt)}}else if(L!==null&&lt!==0){const Pt=E.get(L.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Pt.__webglTexture,lt)}$=-1},this.readRenderTargetPixels=function(L,q,lt,st,nt,Lt,Gt,Pt=0){if(!(L&&L.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=E.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Gt!==void 0&&(Yt=Yt[Gt]),Yt){It.bindFramebuffer(j.FRAMEBUFFER,Yt);try{const Kt=L.textures[Pt],se=Kt.format,ue=Kt.type;if(L.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Pt),!De.textureFormatReadable(se)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(ue)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=L.width-st&&lt>=0&&lt<=L.height-nt&&j.readPixels(q,lt,st,nt,Ct.convert(se),Ct.convert(ue),Lt)}finally{const Kt=tt!==null?E.get(tt).__webglFramebuffer:null;It.bindFramebuffer(j.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(L,q,lt,st,nt,Lt,Gt,Pt=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=E.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Gt!==void 0&&(Yt=Yt[Gt]),Yt)if(q>=0&&q<=L.width-st&&lt>=0&&lt<=L.height-nt){It.bindFramebuffer(j.FRAMEBUFFER,Yt);const Kt=L.textures[Pt],se=Kt.format,ue=Kt.type;if(L.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Pt),!De.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Xt),j.bufferData(j.PIXEL_PACK_BUFFER,Lt.byteLength,j.STREAM_READ),j.readPixels(q,lt,st,nt,Ct.convert(se),Ct.convert(ue),0);const me=tt!==null?E.get(tt).__webglFramebuffer:null;It.bindFramebuffer(j.FRAMEBUFFER,me);const nn=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await sE(j,nn,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Xt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Lt),j.deleteBuffer(Xt),j.deleteSync(nn),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,q=null,lt=0){const st=Math.pow(2,-lt),nt=Math.floor(L.image.width*st),Lt=Math.floor(L.image.height*st),Gt=q!==null?q.x:0,Pt=q!==null?q.y:0;K.setTexture2D(L,0),j.copyTexSubImage2D(j.TEXTURE_2D,lt,0,0,Gt,Pt,nt,Lt),It.unbindTexture()};const $a=j.createFramebuffer(),Is=j.createFramebuffer();this.copyTextureToTexture=function(L,q,lt=null,st=null,nt=0,Lt=0){let Gt,Pt,Yt,Kt,se,ue,Xt,me,nn;const an=L.isCompressedTexture?L.mipmaps[Lt]:L.image;if(lt!==null)Gt=lt.max.x-lt.min.x,Pt=lt.max.y-lt.min.y,Yt=lt.isBox3?lt.max.z-lt.min.z:1,Kt=lt.min.x,se=lt.min.y,ue=lt.isBox3?lt.min.z:0;else{const pn=Math.pow(2,-nt);Gt=Math.floor(an.width*pn),Pt=Math.floor(an.height*pn),L.isDataArrayTexture?Yt=an.depth:L.isData3DTexture?Yt=Math.floor(an.depth*pn):Yt=1,Kt=0,se=0,ue=0}st!==null?(Xt=st.x,me=st.y,nn=st.z):(Xt=0,me=0,nn=0);const Pe=Ct.convert(q.format),bn=Ct.convert(q.type);let Wt;q.isData3DTexture?(K.setTexture3D(q,0),Wt=j.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(K.setTexture2DArray(q,0),Wt=j.TEXTURE_2D_ARRAY):(K.setTexture2D(q,0),Wt=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,q.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,q.unpackAlignment);const Kn=j.getParameter(j.UNPACK_ROW_LENGTH),ce=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Qn=j.getParameter(j.UNPACK_SKIP_PIXELS),hi=j.getParameter(j.UNPACK_SKIP_ROWS),ki=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,an.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,an.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Kt),j.pixelStorei(j.UNPACK_SKIP_ROWS,se),j.pixelStorei(j.UNPACK_SKIP_IMAGES,ue);const di=L.isDataArrayTexture||L.isData3DTexture,Be=q.isDataArrayTexture||q.isData3DTexture;if(L.isDepthTexture){const pn=E.get(L),Jn=E.get(q),mn=E.get(pn.__renderTarget),Xi=E.get(Jn.__renderTarget);It.bindFramebuffer(j.READ_FRAMEBUFFER,mn.__webglFramebuffer),It.bindFramebuffer(j.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let Sa=0;Sa<Yt;Sa++)di&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,E.get(L).__webglTexture,nt,ue+Sa),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,E.get(q).__webglTexture,Lt,nn+Sa)),j.blitFramebuffer(Kt,se,Gt,Pt,Xt,me,Gt,Pt,j.DEPTH_BUFFER_BIT,j.NEAREST);It.bindFramebuffer(j.READ_FRAMEBUFFER,null),It.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(nt!==0||L.isRenderTargetTexture||E.has(L)){const pn=E.get(L),Jn=E.get(q);It.bindFramebuffer(j.READ_FRAMEBUFFER,$a),It.bindFramebuffer(j.DRAW_FRAMEBUFFER,Is);for(let mn=0;mn<Yt;mn++)di?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,pn.__webglTexture,nt,ue+mn):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,pn.__webglTexture,nt),Be?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Jn.__webglTexture,Lt,nn+mn):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Jn.__webglTexture,Lt),nt!==0?j.blitFramebuffer(Kt,se,Gt,Pt,Xt,me,Gt,Pt,j.COLOR_BUFFER_BIT,j.NEAREST):Be?j.copyTexSubImage3D(Wt,Lt,Xt,me,nn+mn,Kt,se,Gt,Pt):j.copyTexSubImage2D(Wt,Lt,Xt,me,Kt,se,Gt,Pt);It.bindFramebuffer(j.READ_FRAMEBUFFER,null),It.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Be?L.isDataTexture||L.isData3DTexture?j.texSubImage3D(Wt,Lt,Xt,me,nn,Gt,Pt,Yt,Pe,bn,an.data):q.isCompressedArrayTexture?j.compressedTexSubImage3D(Wt,Lt,Xt,me,nn,Gt,Pt,Yt,Pe,an.data):j.texSubImage3D(Wt,Lt,Xt,me,nn,Gt,Pt,Yt,Pe,bn,an):L.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Lt,Xt,me,Gt,Pt,Pe,bn,an.data):L.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Lt,Xt,me,an.width,an.height,Pe,an.data):j.texSubImage2D(j.TEXTURE_2D,Lt,Xt,me,Gt,Pt,Pe,bn,an);j.pixelStorei(j.UNPACK_ROW_LENGTH,Kn),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,ce),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Qn),j.pixelStorei(j.UNPACK_SKIP_ROWS,hi),j.pixelStorei(j.UNPACK_SKIP_IMAGES,ki),Lt===0&&q.generateMipmaps&&j.generateMipmap(Wt),It.unbindTexture()},this.initRenderTarget=function(L){E.get(L).__webglFramebuffer===void 0&&K.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?K.setTextureCube(L,0):L.isData3DTexture?K.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?K.setTexture2DArray(L,0):K.setTexture2D(L,0),It.unbindTexture()},this.resetState=function(){G=0,Y=0,tt=null,It.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return da}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ne._getUnpackColorSpace()}}const Bx={type:"change"},Im={type:"start"},Hy={type:"end"},Gu=new Rm,Hx=new Ds,h3=Math.cos(70*Sy.DEG2RAD),En=new X,ci=2*Math.PI,Ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},rp=1e-6;class d3 extends _1{constructor(t,n=null){super(t,n),this.state=Ye.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ao.ROTATE,MIDDLE:Ao.DOLLY,RIGHT:Ao.PAN},this.touches={ONE:To.ROTATE,TWO:To.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Os,this._lastTargetPosition=new X,this._quat=new Os().setFromUnitVectors(t.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new dx,this._sphericalDelta=new dx,this._scale=1,this._panOffset=new X,this._rotateStart=new ne,this._rotateEnd=new ne,this._rotateDelta=new ne,this._panStart=new ne,this._panEnd=new ne,this._panDelta=new ne,this._dollyStart=new ne,this._dollyEnd=new ne,this._dollyDelta=new ne,this._dollyDirection=new X,this._mouse=new ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=m3.bind(this),this._onPointerDown=p3.bind(this),this._onPointerUp=g3.bind(this),this._onContextMenu=M3.bind(this),this._onMouseWheel=x3.bind(this),this._onKeyDown=y3.bind(this),this._onTouchStart=S3.bind(this),this._onTouchMove=b3.bind(this),this._onMouseDown=_3.bind(this),this._onMouseMove=v3.bind(this),this._interceptControlDown=E3.bind(this),this._interceptControlUp=T3.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bx),this.update(),this.state=Ye.NONE}pan(t,n){this._pan(t,n),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const n=this.object.position;En.copy(n).sub(this.target),En.applyQuaternion(this._quat),this._spherical.setFromVector3(En),this.autoRotate&&this.state===Ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(a)&&isFinite(l)&&(a<-Math.PI?a+=ci:a>Math.PI&&(a-=ci),l<-Math.PI?l+=ci:l>Math.PI&&(l-=ci),a<=l?this._spherical.theta=Math.max(a,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+l)/2?Math.max(a,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=u!=this._spherical.radius}if(En.setFromSpherical(this._spherical),En.applyQuaternion(this._quatInverse),n.copy(this.target).add(En),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const d=En.length();u=this._clampDistance(d*this._scale);const m=d-u;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new X(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new X(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),u=En.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Gu.origin.copy(this.object.position),Gu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Gu.direction))<h3?this.object.lookAt(this.target):(Hx.setFromNormalAndCoplanarPoint(this.object.up,this.target),Gu.intersectPlane(Hx,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>rp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>rp||this._lastTargetPosition.distanceToSquared(this.target)>rp?(this.dispatchEvent(Bx),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ci/60*this.autoRotateSpeed*t:ci/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){En.setFromMatrixColumn(n,0),En.multiplyScalar(-t),this._panOffset.add(En)}_panUp(t,n){this.screenSpacePanning===!0?En.setFromMatrixColumn(n,1):(En.setFromMatrixColumn(n,0),En.crossVectors(this.object.up,En)),En.multiplyScalar(t),this._panOffset.add(En)}_pan(t,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;En.copy(l).sub(this.target);let c=En.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/a.clientHeight,this.object.matrix),this._panUp(2*n*c/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),l=t-a.left,c=n-a.top,u=a.width,d=a.height;this._mouse.x=l/u*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ci*this._rotateDelta.x/n.clientHeight),this._rotateUp(ci*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._rotateStart.set(a,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panStart.set(a,l)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,l=t.pageY-n.y,c=Math.sqrt(a*a+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const a=this._getSecondPointerPosition(t),l=.5*(t.pageX+a.x),c=.5*(t.pageY+a.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ci*this._rotateDelta.x/n.clientHeight),this._rotateUp(ci*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panEnd.set(a,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,l=t.pageY-n.y,c=Math.sqrt(a*a+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(t.pageX+n.x)*.5,d=(t.pageY+n.y)*.5;this._updateZoomParameters(u,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new ne,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,a={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function p3(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function m3(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function g3(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hy),this.state=Ye.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function _3(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ao.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ye.DOLLY;break;case Ao.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ye.ROTATE}break;case Ao.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ye.PAN}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(Im)}function v3(r){switch(this.state){case Ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function x3(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ye.NONE||(r.preventDefault(),this.dispatchEvent(Im),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Hy))}function y3(r){this.enabled!==!1&&this._handleKeyDown(r)}function S3(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case To.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ye.TOUCH_ROTATE;break;case To.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ye.TOUCH_PAN;break;default:this.state=Ye.NONE}break;case 2:switch(this.touches.TWO){case To.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ye.TOUCH_DOLLY_PAN;break;case To.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ye.TOUCH_DOLLY_ROTATE;break;default:this.state=Ye.NONE}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(Im)}function b3(r){switch(this._trackPointer(r),this.state){case Ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ye.NONE}}function M3(r){this.enabled!==!1&&r.preventDefault()}function E3(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function T3(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Gx=new Ps,Vu=new X;class Fm extends f1{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],n=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],a=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(a),this.setAttribute("position",new hn(t,3)),this.setAttribute("uv",new hn(n,2))}applyMatrix4(t){const n=this.attributes.instanceStart,a=this.attributes.instanceEnd;return n!==void 0&&(n.applyMatrix4(t),a.applyMatrix4(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let n;t instanceof Float32Array?n=t:Array.isArray(t)&&(n=new Float32Array(t));const a=new lm(n,6,1);return this.setAttribute("instanceStart",new pa(a,3,0)),this.setAttribute("instanceEnd",new pa(a,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let n;t instanceof Float32Array?n=t:Array.isArray(t)&&(n=new Float32Array(t));const a=new lm(n,6,1);return this.setAttribute("instanceColorStart",new pa(a,3,0)),this.setAttribute("instanceColorEnd",new pa(a,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new YE(t.geometry)),this}fromLineSegments(t){const n=t.geometry;return this.setPositions(n.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ps);const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;t!==void 0&&n!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Gx.setFromBufferAttribute(n),this.boundingBox.union(Gx))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Po),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;if(t!==void 0&&n!==void 0){const a=this.boundingSphere.center;this.boundingBox.getCenter(a);let l=0;for(let c=0,u=t.count;c<u;c++)Vu.fromBufferAttribute(t,c),l=Math.max(l,a.distanceToSquared(Vu)),Vu.fromBufferAttribute(n,c),l=Math.max(l,a.distanceToSquared(Vu));this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}Nt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ne(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ui.line={uniforms:Nm.merge([Nt.common,Nt.fog,Nt.line]),vertexShader:`
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
		`};class Bm extends Hi{constructor(t){super({type:"LineMaterial",uniforms:Nm.clone(ui.line.uniforms),vertexShader:ui.line.vertexShader,fragmentShader:ui.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const op=new Ke,Vx=new X,kx=new X,In=new Ke,Fn=new Ke,la=new Ke,lp=new X,cp=new en,Hn=new g1,Xx=new X,ku=new Ps,Xu=new Po,ca=new Ke;let fa,dr;function jx(r,t,n){return ca.set(0,0,-t,1).applyMatrix4(r.projectionMatrix),ca.multiplyScalar(1/ca.w),ca.x=dr/n.width,ca.y=dr/n.height,ca.applyMatrix4(r.projectionMatrixInverse),ca.multiplyScalar(1/ca.w),Math.abs(Math.max(ca.x,ca.y))}function A3(r,t){const n=r.matrixWorld,a=r.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count);for(let d=0,m=u;d<m;d++){Hn.start.fromBufferAttribute(l,d),Hn.end.fromBufferAttribute(c,d),Hn.applyMatrix4(n);const p=new X,g=new X;fa.distanceSqToSegment(Hn.start,Hn.end,g,p),g.distanceTo(p)<dr*.5&&t.push({point:g,pointOnLine:p,distance:fa.origin.distanceTo(g),object:r,face:null,faceIndex:d,uv:null,uv1:null})}}function w3(r,t,n){const a=t.projectionMatrix,c=r.material.resolution,u=r.matrixWorld,d=r.geometry,m=d.attributes.instanceStart,p=d.attributes.instanceEnd,g=Math.min(d.instanceCount,m.count),_=-t.near;fa.at(1,la),la.w=1,la.applyMatrix4(t.matrixWorldInverse),la.applyMatrix4(a),la.multiplyScalar(1/la.w),la.x*=c.x/2,la.y*=c.y/2,la.z=0,lp.copy(la),cp.multiplyMatrices(t.matrixWorldInverse,u);for(let v=0,b=g;v<b;v++){if(In.fromBufferAttribute(m,v),Fn.fromBufferAttribute(p,v),In.w=1,Fn.w=1,In.applyMatrix4(cp),Fn.applyMatrix4(cp),In.z>_&&Fn.z>_)continue;if(In.z>_){const U=In.z-Fn.z,C=(In.z-_)/U;In.lerp(Fn,C)}else if(Fn.z>_){const U=Fn.z-In.z,C=(Fn.z-_)/U;Fn.lerp(In,C)}In.applyMatrix4(a),Fn.applyMatrix4(a),In.multiplyScalar(1/In.w),Fn.multiplyScalar(1/Fn.w),In.x*=c.x/2,In.y*=c.y/2,Fn.x*=c.x/2,Fn.y*=c.y/2,Hn.start.copy(In),Hn.start.z=0,Hn.end.copy(Fn),Hn.end.z=0;const R=Hn.closestPointToPointParameter(lp,!0);Hn.at(R,Xx);const S=Sy.lerp(In.z,Fn.z,R),x=S>=-1&&S<=1,w=lp.distanceTo(Xx)<dr*.5;if(x&&w){Hn.start.fromBufferAttribute(m,v),Hn.end.fromBufferAttribute(p,v),Hn.start.applyMatrix4(u),Hn.end.applyMatrix4(u);const U=new X,C=new X;fa.distanceSqToSegment(Hn.start,Hn.end,C,U),n.push({point:C,pointOnLine:U,distance:fa.origin.distanceTo(C),object:r,face:null,faceIndex:v,uv:null,uv1:null})}}}class Gy extends rn{constructor(t=new Fm,n=new Bm({color:Math.random()*16777215})){super(t,n),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,n=t.attributes.instanceStart,a=t.attributes.instanceEnd,l=new Float32Array(2*n.count);for(let u=0,d=0,m=n.count;u<m;u++,d+=2)Vx.fromBufferAttribute(n,u),kx.fromBufferAttribute(a,u),l[d]=d===0?0:l[d-1],l[d+1]=l[d]+Vx.distanceTo(kx);const c=new lm(l,2,1);return t.setAttribute("instanceDistanceStart",new pa(c,1,0)),t.setAttribute("instanceDistanceEnd",new pa(c,1,1)),this}raycast(t,n){const a=this.material.worldUnits,l=t.camera;l===null&&!a&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const c=t.params.Line2!==void 0&&t.params.Line2.threshold||0;fa=t.ray;const u=this.matrixWorld,d=this.geometry,m=this.material;dr=m.linewidth+c,d.boundingSphere===null&&d.computeBoundingSphere(),Xu.copy(d.boundingSphere).applyMatrix4(u);let p;if(a)p=dr*.5;else{const _=Math.max(l.near,Xu.distanceToPoint(fa.origin));p=jx(l,_,m.resolution)}if(Xu.radius+=p,fa.intersectsSphere(Xu)===!1)return;d.boundingBox===null&&d.computeBoundingBox(),ku.copy(d.boundingBox).applyMatrix4(u);let g;if(a)g=dr*.5;else{const _=Math.max(l.near,ku.distanceToPoint(fa.origin));g=jx(l,_,m.resolution)}ku.expandByScalar(g),fa.intersectsBox(ku)!==!1&&(a?A3(this,n):w3(this,l,n))}onBeforeRender(t){const n=this.material.uniforms;n&&n.resolution&&(t.getViewport(op),this.material.uniforms.resolution.value.set(op.z,op.w))}}class Vy extends Fm{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const n=t.length-3,a=new Float32Array(2*n);for(let l=0;l<n;l+=3)a[2*l]=t[l],a[2*l+1]=t[l+1],a[2*l+2]=t[l+2],a[2*l+3]=t[l+3],a[2*l+4]=t[l+4],a[2*l+5]=t[l+5];return super.setPositions(a),this}setColors(t){const n=t.length-3,a=new Float32Array(2*n);for(let l=0;l<n;l+=3)a[2*l]=t[l],a[2*l+1]=t[l+1],a[2*l+2]=t[l+2],a[2*l+3]=t[l+3],a[2*l+4]=t[l+4],a[2*l+5]=t[l+5];return super.setColors(a),this}setFromPoints(t){const n=t.length-1,a=new Float32Array(6*n);for(let l=0;l<n;l++)a[6*l]=t[l].x,a[6*l+1]=t[l].y,a[6*l+2]=t[l].z||0,a[6*l+3]=t[l+1].x,a[6*l+4]=t[l+1].y,a[6*l+5]=t[l+1].z||0;return super.setPositions(a),this}fromLine(t){const n=t.geometry;return this.setPositions(n.attributes.position.array),this}}class R3 extends Gy{constructor(t=new Vy,n=new Bm({color:Math.random()*16777215})){super(t,n),this.isLine2=!0,this.type="Line2"}}const Ae=Math.PI/180,fi=2*Math.PI,ky=398600.4418,kn=6378.137,Xy=.00108262668,pf=86400,xa=365.2422,jy=.9856474,C3=jy*Ae/pf,D3=fi/(xa*pf),Hm=100,Gm=2e3;function fm(r){return((r+Math.PI)%fi+fi)%fi-Math.PI}function pr(r){return(r%fi+fi)%fi}function mf(r){return pr((280.46+jy*r)*Ae)}function Ql(r){const t=mf(r),n=pr((357.528+.9856003*r)*Ae),a=(1.915*Math.sin(n)+.02*Math.sin(2*n))*Ae,l=pr(t+a),c=(23.439-36e-8*r)*Ae,u=Math.cos(l),d=Math.sin(l)*Math.cos(c),m=Math.sin(l)*Math.sin(c),p=pr(Math.atan2(d,u)),g=Math.atan2(m,Math.hypot(u,d)),_=fm(t-p);return{L:t,g:n,C:a,lambda:l,eps:c,ra:p,dec:g,eot:_,vecECI:{x:u,y:d,z:m}}}function Vm(r){return Ql(r).vecECI}function Wy(r){const t=Ql(r),n=Math.cos(-t.L),a=Math.sin(-t.L),{x:l,y:c,z:u}=t.vecECI;return{x:n*l-a*c,y:a*l+n*c,z:u}}function L3(r=400){const t=[];for(let n=0;n<=r;n++){const a=n/r*xa,l=Wy(a);t.push({d:a,x:l.x,y:l.y,z:l.z,lat:Math.asin(l.z)/Ae,lng:Math.atan2(l.y,l.x)/Ae})}return t}function U3(r=360){const t=[];for(let n=0;n<=r;n++){const a=n/r*xa,l=Vm(a);t.push({d:a,x:l.x,y:l.y,z:l.z,lat:Math.asin(l.z)/Ae,lng:Math.atan2(l.y,l.x)/Ae})}return t}const up=.0167086;function hm(r){const t=Ql(r),n=t.g+t.C,a=(1-up*up)/(1+up*Math.cos(n)),l=t.lambda+Math.PI;return{x:a*Math.cos(l),y:a*Math.sin(l),z:0,r:a,eps:t.eps,lambdaSun:t.lambda}}function N3(r=360){const t=[];for(let n=0;n<=r;n++){const a=n/r*xa;t.push({d:a,...hm(a)})}return t}function O3(){const r=a=>{let l=a(0);for(let c=.05;c<=xa+.05;c+=.05){const u=a(c);if(l<0&&u>=0)return c;l=u}return NaN},t=a=>r(l=>fm(Ql(l).lambda-a)),n=a=>r(l=>fm(Ql(l).g-a));return[{key:"marchEquinox",label:"March equinox",d:t(0)},{key:"juneSolstice",label:"June solstice",d:t(Math.PI/2)},{key:"septemberEquinox",label:"September equinox",d:t(Math.PI)},{key:"decemberSolstice",label:"December solstice",d:t(1.5*Math.PI)},{key:"perihelion",label:"perihelion",d:n(0)},{key:"aphelion",label:"aphelion",d:n(Math.PI)}]}function P3(r,t){return r==="MSSI"?mf(t):0}function z3(r){return pr((280.46061837+360.98564736629*r)*Ae)}function I3(r,t){const n=Math.cos(t),a=Math.sin(t);return{x:n*r.x-a*r.y,y:a*r.x+n*r.y,z:r.z}}function F3(r){const t=kn+r;return fi*Math.sqrt(t*t*t/ky)}function km(r){const t=kn+r;return Math.sqrt(ky/(t*t*t))}function B3(r,t){const n=kn+r;return-1.5*km(r)*Xy*(kn/n)*(kn/n)*Math.cos(t*Ae)}function Co(r){const t=kn+r,n=km(r),a=1.5*Xy*n*(kn/t)*(kn/t),l=-D3/a;if(Math.abs(l)>1)return NaN;let c=Math.acos(l);return c<Math.PI/2&&(c=Math.PI-c),c/Ae}function H3(r){let t=Hm,n=Gm;if(r<=Co(t))return t;if(r>=Co(n))return n;for(let a=0;a<60;a++){const l=.5*(t+n);Co(l)<r?t=l:n=l}return .5*(t+n)}const or=Co(Hm),lr=Co(Gm),Xl=r=>Co(Math.min(Gm,Math.max(Hm,r))),Wx=r=>H3(r);function qy(r,t){const n=B3(r.altitudeKm,r.inclinationDeg)-C3;return pr(mf(t)+r.raanOffsetDeg*Ae+n*t*pf)}function G3(r,t){const n=km(r.altitudeKm);return pr(r.initialMeanAnomalyDeg*Ae+n*t*pf)}function V3(r,t){const n=qy(r,t),a=r.inclinationDeg*Ae;return{x:Math.sin(a)*Math.sin(n),y:-Math.sin(a)*Math.cos(n),z:Math.cos(a)}}function fp(r,t,n){const a=Math.cos(n),l=Math.sin(n),c=Math.cos(r),u=Math.sin(r),d=Math.cos(t),m=Math.sin(t);return{x:c*a-u*d*l,y:u*a+c*d*l,z:m*l}}function k3(r){return((12+r/15)%24+24)%24}function X3(r){const t=Math.floor(r),n=Math.round((r-t)*60),a=(n===60?t+1:t)%24,l=n===60?0:n;return`${String(a).padStart(2,"0")}:${String(l).padStart(2,"0")}`}function uf(r,t){const n=V3(r,t),a=Vm(t);return Math.asin(Math.max(-1,Math.min(1,n.x*a.x+n.y*a.y+n.z*a.z)))}function Yy(r,t){const n=kn/(kn+t),a=Math.cos(r),l=Math.sqrt(Math.max(0,1-n*n));return a<=l?0:Math.acos(l/a)/Math.PI}function Zy(r){return Math.asin(kn/(kn+r))/Ae}function Ky(r){return 90+Math.acos(kn/(kn+r))/Ae}function j3(r,t=366){let n=0,a=1/0,l=-1/0,c=0;for(let d=0;d<t;d++){const m=d/t*xa,p=uf(r,m),g=Yy(p,r.altitudeKm);n+=g,g>0&&c++;const _=p/Ae;_<a&&(a=_),_>l&&(l=_)}const u=n/t;return{eclipseFraction:u,sunExposure:1-u,betaMinDeg:a,betaMaxDeg:l,eclipseDays:c/t*xa}}const Qy=0,W3=1,Jy=2;function q3({width:r=721,height:t=361,sunSamples:n=366}={}){const a=new Float32Array(n),l=new Float32Array(n),c=new Float32Array(n);for(let g=0;g<n;g++){const _=Wy(g/n*xa);a[g]=_.x,l[g]=_.y,c[g]=_.z}const u=new Float32Array(r*t),d=new Float32Array(r*t),m=new Float32Array(r),p=new Float32Array(r);for(let g=0;g<r;g++){const _=(-180+360*g/(r-1))*Ae;m[g]=Math.cos(_),p[g]=Math.sin(_)}for(let g=0;g<t;g++){const _=(-90+180*g/(t-1))*Ae,v=Math.cos(_),b=Math.sin(_);for(let M=0;M<r;M++){const R=v*m[M],S=v*p[M];let x=-2,w=2;for(let C=0;C<n;C++){const I=R*a[C]+S*l[C]+b*c[C];I>x&&(x=I),I<w&&(w=I)}const U=g*r+M;u[U]=x,d[U]=w}}return{width:r,height:t,max:u,min:d}}function Y3(r,t){const n=Math.cos(t*Ae),{max:a,min:l}=r,c=new Uint8Array(a.length);for(let u=0;u<a.length;u++)c[u]=l[u]>=n?Jy:a[u]>=n?W3:Qy;return c}function qx(r,t,n,a){const l=w=>-180+360*w/(t-1),c=w=>-90+180*w/(n-1),u=(w,U)=>r[w*t+U],d=(w,U)=>2*(w*t+U),m=(w,U)=>2*(w*t+U)+1,p=new Map,g=new Map,_=(w,U)=>{const C=U-w,I=C===0?.5:(a-w)/C;return Math.min(1,Math.max(0,I))},v=(w,U,C,I)=>{if(!p.has(w))if(I){const B=_(u(U,C),u(U,C+1));p.set(w,{lat:c(U),lng:l(C+B)})}else{const B=_(u(U,C),u(U+1,C));p.set(w,{lat:c(U+B),lng:l(C)})}},b=(w,U)=>{g.has(w)||g.set(w,[]),g.has(U)||g.set(U,[]),g.get(w).push(U),g.get(U).push(w)};for(let w=0;w<n-1;w++)for(let U=0;U<t-1;U++){const C=u(w,U),I=u(w,U+1),B=u(w+1,U+1),O=u(w+1,U),T=(C>=a?1:0)|(I>=a?2:0)|(B>=a?4:0)|(O>=a?8:0);if(T===0||T===15)continue;const N=d(w,U),ot=d(w+1,U),G=m(w,U),Y=m(w,U+1),tt=Q=>{Q===N?v(Q,w,U,!0):Q===ot?v(Q,w+1,U,!0):Q===G?v(Q,w,U,!1):v(Q,w,U+1,!1)},$=(Q,P)=>{tt(Q),tt(P),b(Q,P)};switch(T){case 1:$(G,N);break;case 2:$(N,Y);break;case 3:$(G,Y);break;case 4:$(Y,ot);break;case 5:{.25*(C+I+B+O)>=a?($(G,ot),$(N,Y)):($(G,N),$(Y,ot));break}case 6:$(N,ot);break;case 7:$(G,ot);break;case 8:$(G,ot);break;case 9:$(N,ot);break;case 10:{.25*(C+I+B+O)>=a?($(G,N),$(Y,ot)):($(N,Y),$(G,ot));break}case 11:$(Y,ot);break;case 12:$(G,Y);break;case 13:$(N,Y);break;case 14:$(G,N);break}}const M=new Set,R=[],S=w=>{const U=[w];M.add(w);let C=null,I=w;for(;;){const B=g.get(I)||[];let O=null;for(const T of B)if(T!==C&&!M.has(T)){O=T;break}if(O==null){B.includes(w)&&U.length>2&&U.push(w);break}M.add(O),U.push(O),C=I,I=O}return U},x=[...g.keys()];for(const w of x)!M.has(w)&&(g.get(w)||[]).length===1&&R.push(S(w));for(const w of x)M.has(w)||R.push(S(w));return R.map(w=>w.map(U=>p.get(U))).filter(w=>w.length>=2)}function Z3(r,t){const n=Math.cos(t*Ae);return{dU:qx(r.max,r.width,r.height,n),dI:qx(r.min,r.width,r.height,n)}}const dm=[{hex:"#38bdf8",cls:"text-sky-400 border-sky-400",chip:"bg-sky-400/90"},{hex:"#34d399",cls:"text-emerald-400 border-emerald-400",chip:"bg-emerald-400/90"},{hex:"#fcd34d",cls:"text-amber-300 border-amber-300",chip:"bg-amber-300/90"},{hex:"#a78bfa",cls:"text-violet-400 border-violet-400",chip:"bg-violet-400/90"}],ju=r=>dm[r%dm.length],Ei={sun:"#fbbf24",analemma:"#fde68a",ecliptic:"#fde68a",terminator:"#cbd5e1",grid:"#ffffff",emiAxis:"#a5b4fc",mssiAxis:"#fde68a",eclipsed:"#f43f5e",regionAlways:[124,58,237],regionSome:[249,115,22],regionNever:[16,185,129],dU:"#8b5cf6",dI:"#fb923c"},Pi={analemma:"text-amber-200 border-amber-200",subSolarPoint:"text-amber-400 border-amber-400",sunDirectionLine:"text-amber-400 border-amber-400",terminator:"text-slate-300 border-slate-300",latLonGrid:"text-slate-400 border-slate-400",otherFrameAxes:"text-indigo-300 border-indigo-300",framePlanes:"text-amber-200 border-amber-200",labels:"text-slate-200 border-slate-200",eclipsed:"bg-rose-500",regionAlways:"bg-violet-600",regionSome:"bg-orange-500",regionNever:"bg-emerald-500"},Yx=dm.map(r=>r.hex),Bn={analemma:Ei.analemma,ecliptic:Ei.ecliptic,sun:Ei.sun,terminator:Ei.terminator,grid:Ei.grid,emiAxis:Ei.emiAxis,mssiAxis:Ei.mssiAxis,eclipsed:Ei.eclipsed,dU:Ei.dU,dI:Ei.dI},K3={[Qy]:[...Ei.regionAlways,150],1:[...Ei.regionSome,115],[Jy]:[...Ei.regionNever,50]},Wu=1.004,ua=1.008,Mo=1.014,Q3=1.012,hp=1.022,Cs=2.4,Yn=10,dp=.45,Zx=.5,Kx="./",Qx=typeof __BUILD_ID__<"u"?`?v=${__BUILD_ID__}`:"",_e=typeof window<"u"&&new URLSearchParams(window.location.search).has("paper"),Eo=typeof window<"u"&&new URLSearchParams(window.location.search).has("cover");let pp=null;function J3(){return pp||(pp=q3({width:721,height:361,sunSamples:366})),pp}const Hl=new Set;function Xa(r,t,{size:n=.05,tier:a=1,far:l=[1/0,9,6]}={}){_e&&(n*=1.2);const c=document.createElement("canvas");c.width=512,c.height=128;const u=c.getContext("2d");u.font='500 34px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',"letterSpacing"in u&&(u.letterSpacing="0.5px"),u.textAlign="center",u.textBaseline="middle";const d=Math.min(500,u.measureText(r).width+36),m=256-d/2;u.fillStyle=_e?"rgba(255, 255, 255, 0.92)":"rgba(6, 10, 24, 0.62)",u.beginPath(),u.roundRect(m,36,d,56,12),u.fill(),u.strokeStyle=_e?"rgba(15,23,42,0.25)":"rgba(255,255,255,0.10)",u.lineWidth=2,u.stroke(),u.fillStyle=_e?"#0f172a":t,u.fillText(r,256,65);const p=new nf(c);p.colorSpace=Ln,p.anisotropy=4;const g=new cf({map:p,transparent:!0,depthTest:!1,depthWrite:!1,sizeAttenuation:!1}),_=new rm(g);return _.scale.set(n*4,n,1),_.renderOrder=50,_.userData.label={tier:a,far:l,text:r},Hl.add(_),_}class Xm{constructor(t){this.container=t,this.lineMaterials=new Set,this.props=null,this.orbitVisuals=new Map,this.disposed=!1;const n=new f3({antialias:!0,alpha:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.setClearColor(0,0),n.outputColorSpace=Ln,t.appendChild(n.domElement),n.domElement.style.display="block",this.renderer=n,this.scene=new zE,this.camera=new Ii(38,1,.05,200),this.camera.up.set(0,0,1),this.camera.position.set(3,-1.4,1).normalize().multiplyScalar(4.2),this.camera.lookAt(0,0,0),this.controls=new d3(this.camera,n.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.enablePan=!1,this.controls.minDistance=1.3,this.controls.maxDistance=12,this.controls.rotateSpeed=.6,this.eciGroup=new tn,this.mssiGroup=new tn,this.earthGroup=new tn,this.displayGroup=new tn,this.earthAssembly=new tn,this.earthAssembly.add(this.eciGroup,this.mssiGroup,this.earthGroup,this.displayGroup),this.helioRoot=new tn,this.helioRoot.visible=!1,this.scene.add(this.earthAssembly,this.helioRoot),this.viewMode="geo",this.helioCamera="follow",this.lastEarthPos=new X,this.scene.add(new u1(16777215,_e?3.2:Eo?1.25:.8)),this.sunLight=new c1(16777215,_e?1.1:Eo?3:2.4),this.sunLight.position.set(1,0,0),this.eciGroup.add(this.sunLight),this.scene.add(new r1(14674175,2764613,_e?.8:Eo?.6:.35)),_e||this.#c(),this.#u(),_e||this.#f(),this.#h(),this.#d(),this.#p(),this.#g(),this.#_(),this.#m(),this.resize(),this.tick=()=>this.#T(),this.raf=requestAnimationFrame(this.tick)}#i(t){const n=new Bm({worldUnits:!1,transparent:!0,depthWrite:!1,...t});return n.resolution.set(this.width||1,this.height||1),this.lineMaterials.add(n),n}#t(t,n){const a=new Vy,l=new Float32Array(t.length*3);for(let d=0;d<t.length;d++)l[d*3]=t[d].x,l[d*3+1]=t[d].y,l[d*3+2]=t[d].z;a.setPositions(l);const c=this.#i(n),u=new R3(a,c);return n.dashed&&u.computeLineDistances(),u.renderOrder=10,u}#a(t){t&&(t.traverse(n=>{if(n.geometry&&n.geometry.dispose(),n.material){const a=Array.isArray(n.material)?n.material:[n.material];for(const l of a)l.map&&l.map.dispose(),this.lineMaterials.delete(l),l.dispose()}}),t.parent?.remove(t))}static#l(t,n,a){const l=[];for(let c=0;c<=n;c++){const u=c/n*fi;l.push(a(u,t))}return l}#c(){const n=new Float32Array(6600);let a=12345;const l=()=>((a=a*16807%2147483647)-1)/2147483646;for(let d=0;d<2200;d++){const m=l()*2-1,p=l()*fi,g=Math.sqrt(1-m*m);n[d*3]=60*g*Math.cos(p),n[d*3+1]=60*g*Math.sin(p),n[d*3+2]=60*m}const c=new Xn;c.setAttribute("position",new Bi(n,3));const u=new Cy({color:Eo?"#e2e8f0":"#cbd5e1",size:Eo?2.4:1.6,sizeAttenuation:!1,transparent:!0,opacity:Eo?.85:.45,depthWrite:!1});this.stars=new WE(c,u),this.eciGroup.add(this.stars)}#u(){const t=new tn;t.rotation.x=Math.PI/2;const n=new zi(1,128,96),a=new $E({color:16777215,specular:2236962,shininess:8,bumpScale:.012}),l=new s1;l.load(`${Kx}textures/earth-blue-marble.webp${Qx}`,c=>{c.colorSpace=Ln,c.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),a.map=c,a.needsUpdate=!0,this.texturesReady=!0}),l.load(`${Kx}textures/earth-topology.webp${Qx}`,c=>{a.bumpMap=c,a.needsUpdate=!0}),this.earthMesh=new rn(n,a),t.add(this.earthMesh),this.earthGroup.add(t),this.ghostEarth=new rn(new zi(.995,64,48),new Mi({color:_e?"#94a3b8":"#64748b",transparent:!0,opacity:_e?.08:.14,depthWrite:!1})),this.ghostEarth.visible=!1,this.displayGroup.add(this.ghostEarth)}#f(){const t=new Hi({uniforms:{glowColor:{value:new be("#5aa9ff")}},vertexShader:`
        varying vec3 vNormal;
        varying vec3 vView;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vView = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        #define GLOW ${_e?"0.45":"1.0"}
        uniform vec3 glowColor;
        varying vec3 vNormal;
        varying vec3 vView;
        void main() {
          float f = 1.0 - abs(dot(vNormal, vView));
          float a = pow(f, 6.0) * 0.32 * GLOW;
          gl_FragColor = vec4(glowColor, a);
        }`,transparent:!0,side:ni,blending:sf,depthWrite:!1}),n=new rn(new zi(1.05,64,48),t);n.renderOrder=-1,this.atmosphere=n,this.earthAssembly.add(n)}#h(){const t=(c,u,d)=>{const m=Math.cos(c*Ae);return{x:d*m*Math.cos(u*Ae),y:d*m*Math.sin(u*Ae),z:d*Math.sin(c*Ae)}},n=[],a=[];for(let c=-80;c<=80;c+=20){const u=c===0?a:n;for(let d=-180;d<180;d+=3){const m=t(c,d,Wu),p=t(c,d+3,Wu);u.push(m.x,m.y,m.z,p.x,p.y,p.z)}}for(let c=0;c<360;c+=30){const u=c===0||c===180?a:n;for(let d=-90;d<90;d+=3){const m=t(d,c,Wu),p=t(d+3,c,Wu);u.push(m.x,m.y,m.z,p.x,p.y,p.z)}}const l=(c,u,d)=>{const m=new Fm;m.setPositions(new Float32Array(c));const p=this.#i({color:_e?"#0f172a":Bn.grid,linewidth:d,opacity:_e?u*1.4:u}),g=new Gy(m,p);return g.renderOrder=5,g};this.grid=new tn,this.grid.add(l(n,.22,1),l(a,.5,1.3)),this.grid.visible=!1,this.displayGroup.add(this.grid)}#e(t,n,a,{dashed:l=!1,length:c=1.9,tier:u=1}={}){const d=new tn,m=this.#t([{x:0,y:0,z:0},{x:t.x*c,y:t.y*c,z:t.z*c}],{color:n,linewidth:1.6,opacity:.9,dashed:l,dashSize:.06,gapSize:.04}),p=new rn(new Lm(.022,.08,16),new Mi({color:n}));if(p.quaternion.setFromUnitVectors(new X(0,1,0),new X(t.x,t.y,t.z)),p.position.set(t.x*(c+.05),t.y*(c+.05),t.z*(c+.05)),d.add(m,p),a){const g=Xa(a,n,{tier:u});g.position.set(t.x*(c+.22),t.y*(c+.22),t.z*(c+.22)),d.add(g)}return d}#d(){const t={x:1,y:0,z:0},n={x:0,y:1,z:0},a={x:0,y:0,z:1},l=_e?"#4338ca":Bn.emiAxis,c=_e?"#b45309":Bn.mssiAxis;this.emiAxis=new tn,this.emiAxisSolid=new tn,this.emiAxisSolid.name="emiAxisSolid",this.emiAxisSolid.add(this.#e(t,l,"ECI x · vernal equinox"),this.#e(n,l,"ECI y",{tier:2})),this.emiAxisDashed=new tn,this.emiAxisDashed.name="emiAxisDashed",this.emiAxisDashed.add(this.#e(t,l,"ECI x · vernal equinox",{dashed:!0}),this.#e(n,l,"ECI y",{dashed:!0,tier:2})),this.emiAxis.add(this.emiAxisSolid,this.emiAxisDashed),this.emiAxis.visible=!1,this.eciGroup.add(this.emiAxis),this.mssiAxis=new tn,this.mssiAxisSolid=new tn,this.mssiAxisSolid.name="mssiAxisSolid",this.mssiAxisSolid.add(this.#e(t,c,"MSSI x · mean Sun"),this.#e(n,c,"MSSI y",{tier:2})),this.mssiAxisDashed=new tn,this.mssiAxisDashed.name="mssiAxisDashed",this.mssiAxisDashed.add(this.#e(t,c,"MSSI x · mean Sun",{dashed:!0}),this.#e(n,c,"MSSI y",{dashed:!0,tier:2})),this.mssiAxis.add(this.mssiAxisSolid,this.mssiAxisDashed),this.mssiAxis.visible=!1,this.mssiGroup.add(this.mssiAxis),this.zAxis=this.#e(a,_e?"#0f172a":"#e2e8f0","z · spin axis",{length:1.6,tier:2}),this.zAxis.visible=!1,this.displayGroup.add(this.zAxis);const u=this.#t([{x:0,y:0,z:-1.25},{x:0,y:0,z:1.25}],{color:_e?"#0f172a":"#ffffff",linewidth:1,opacity:_e?.5:.25});this.displayGroup.add(u)}#p(){const n=(d,m,p,g)=>{const _=new tn,v=new rn(new $l(2,2),new Mi({color:d,transparent:!0,opacity:_e?.14:.1,side:Ji,depthWrite:!1}));v.rotation.x=p.x,v.rotation.y=p.y,v.renderOrder=3;const b=[[-1,-1],[1,-1],[1,1],[-1,1],[-1,-1]].map(([x,w])=>{const U=new X(x,w,0).applyEuler(v.rotation);return{x:U.x,y:U.y,z:U.z}}),M=this.#t(b,{color:d,linewidth:1.2,opacity:_e?.85:.6}),R=this.#t(b,{color:d,linewidth:1.2,opacity:_e?.85:.6,dashed:!0,dashSize:.08,gapSize:.05}),S=Xa(m,d,{size:.045,tier:2});return S.position.set(g.x,g.y,g.z),_.add(v,M,R,S),_.userData={solid:M,dashed:R},_},a=_e?"#4338ca":Bn.emiAxis,l=_e?"#b45309":Bn.mssiAxis,c=_e?"#475569":"#cbd5e1";this.equatorPlane=n(c,"equatorial plane (xy)",{x:0,y:0},{x:1,y:-1*.92,z:.04}),this.equatorPlane.visible=!1,this.displayGroup.add(this.equatorPlane),this.emiPlanes=new tn,this.emiPlanes.add(n(a,"ECI xz-plane",{x:Math.PI/2,y:0},{x:1*.92,y:0,z:1}),n(a,"ECI yz-plane",{x:0,y:Math.PI/2},{x:0,y:1*.92,z:-1})),this.emiPlanes.visible=!1,this.eciGroup.add(this.emiPlanes),this.mssiPlanes=new tn,this.mssiPlanes.add(n(l,"MSSI xz-plane · noon–midnight",{x:Math.PI/2,y:0},{x:1*.92,y:0,z:-1}),n(l,"MSSI yz-plane · dawn–dusk",{x:0,y:Math.PI/2},{x:0,y:-1*.92,z:1})),this.mssiPlanes.visible=!1,this.mssiGroup.add(this.mssiPlanes);const u=(d,m,p)=>{const g=Xa(d,m,{size:.055,tier:0});return g.userData.label.helioOnly=!0,g.userData.label.helioAlways=!0,g.position.set(p.x,p.y,p.z),g};this.emiPlanes.add(u("ECI",a,{x:1,y:0,z:1+.16})),this.mssiPlanes.add(u("MSSI",l,{x:1,y:0,z:-1-.16})),this.framePlanes=new tn,this.framePlanes.visible=!1}#m(){const t=_e?"#d97706":"#fde68a",n=new rn(new zi(Zx,48,32),new Mi({color:t}));if(this.helioRoot.add(n),!_e){const _=document.createElement("canvas");_.width=_.height=256;const v=_.getContext("2d"),b=v.createRadialGradient(128,128,20,128,128,128);b.addColorStop(0,"rgba(255,244,200,0.95)"),b.addColorStop(.3,"rgba(251,191,36,0.55)"),b.addColorStop(1,"rgba(251,191,36,0)"),v.fillStyle=b,v.fillRect(0,0,256,256);const M=new nf(_);M.colorSpace=Ln;const R=new rm(new cf({map:M,transparent:!0,depthWrite:!1,blending:sf}));R.scale.set(4.5,4.5,1),this.helioRoot.add(R)}const a=Xa("Sun",t,{size:.045,tier:0});a.userData.label.helioAlways=!0,a.position.set(0,0,Zx+.35),this.helioRoot.add(a);const l=N3(720).map(_=>({x:_.x*Yn,y:_.y*Yn,z:0})),c=this.#t(l,{color:_e?"#475569":"#94a3b8",linewidth:1.4,opacity:.8,dashed:!0,dashSize:.18,gapSize:.12});this.helioRoot.add(c);const u=this.#t([{x:-Yn*1.25,y:0,z:0},{x:Yn*1.25,y:0,z:0}],{color:_e?"#4338ca":Bn.emiAxis,linewidth:1,opacity:.45,dashed:!0,dashSize:.12,gapSize:.1}),d=Xa("vernal equinox direction",_e?"#4338ca":Bn.emiAxis,{size:.04,tier:1,far:[1/0,60,60]});d.userData.label.helioAlways=!0,d.position.set(Yn*1.25,0,-.45),this.helioRoot.add(u,d);const m=(_,v,b,M,R=1.06,S=.18,x=2,w=!1)=>{const U=hm(_),C=new rn(new zi(b,12,8),new Mi({color:M}));if(C.position.set(U.x*Yn,U.y*Yn,0),this.helioRoot.add(C),v){const I=Xa(v,M,{size:.036,tier:x,far:[1/0,45,40]});I.userData.label.helioAlways=w,I.position.set(U.x*Yn*R,U.y*Yn*R,S),this.helioRoot.add(I)}},p=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],g=[-.5,30.5,59.5,90.5,120.5,151.5,181.5,212.5,243.5,273.5,304.5,334.5];p.forEach((_,v)=>m(g[v],_,.016,_e?"#64748b":"#94a3b8"));for(const _ of O3()){const v=_.key==="perihelion"||_.key==="aphelion";m(_.d,_.label,.026,_e?"#0f172a":"#e2e8f0",v?.9:1.14,v?-.3:.4,1,!v)}}#g(){this.sunLine=this.#t([{x:0,y:0,z:0},{x:Cs,y:0,z:0}],{color:_e?"#d97706":Bn.sun,linewidth:_e?2.4:1.8,opacity:.95}),this.sunLine.visible=!1,this.eciGroup.add(this.sunLine);const t=document.createElement("canvas");t.width=t.height=128;const n=t.getContext("2d"),a=n.createRadialGradient(64,64,4,64,64,64);a.addColorStop(0,"rgba(255,245,200,1)"),a.addColorStop(.35,"rgba(251,191,36,0.9)"),a.addColorStop(1,"rgba(251,191,36,0)"),n.fillStyle=a,n.fillRect(0,0,128,128);const l=new nf(t);l.colorSpace=Ln,this.sunSprite=new rm(new cf({map:l,transparent:!0,depthWrite:!1})),this.sunSprite.scale.set(.26,.26,1),this.sunSprite.visible=!1,this.eciGroup.add(this.sunSprite),this.sunSpriteLabel=Xa("Sun",Bn.sun,{size:.045,tier:0}),this.sunSpriteLabel.visible=!1,this.eciGroup.add(this.sunSpriteLabel),this.subSolar=new rn(new zi(.016,24,16),new Mi({color:Bn.sun})),this.subSolar.visible=!1,this.eciGroup.add(this.subSolar);const c=new rn(new Um(.024,.031,32),new Mi({color:Bn.sun,side:Ji,transparent:!0,opacity:.8}));this.subSolar.add(c),this.subSolarRing=c;const u=Xm.#l(ua,180,(d,m)=>({x:m*Math.cos(d),y:m*Math.sin(d),z:0}));this.terminator=this.#t(u,{color:_e?"#475569":Bn.terminator,linewidth:1.4,opacity:.9,dashed:!0,dashSize:.045,gapSize:.03}),this.terminator.visible=!1,this.eciGroup.add(this.terminator)}#_(){const t=L3(720).map(a=>({x:a.x*Mo,y:a.y*Mo,z:a.z*Mo}));this.analemma=this.#t(t,{color:_e?"#b45309":Bn.analemma,linewidth:_e?3:2.4,opacity:1}),this.analemma.visible=!1,this.mssiGroup.add(this.analemma);const n=U3(360).map(a=>({x:a.x*Mo,y:a.y*Mo,z:a.z*Mo}));this.ecliptic=this.#t(n,{color:_e?"#b45309":Bn.ecliptic,linewidth:1.4,opacity:.8,dashed:!0,dashSize:.05,gapSize:.035}),this.ecliptic.visible=!1,this.eciGroup.add(this.ecliptic)}#v(t,n,a){const l=Yx[n%Yx.length],c=t.inclinationDeg*Ae,u=1+t.altitudeKm/kn,d=240,m=[];for(let _=0;_<=d;_++)m.push(fp(0,c,_/d*fi));const p=new tn,g={orbit:t,color:l,idx:n,group:p,rr:u,unit:m,flags:a,mssiObjects:[]};if(a.orbitalPlaneRing){const _=!!a.eclipseSegments;g.ring=this.#t(m.map(v=>({x:v.x*u,y:v.y*u,z:v.z*u})),{color:_?"#ffffff":l,linewidth:2.4,opacity:1,vertexColors:_}),p.add(g.ring)}if(a.groundTrack){const _=!!a.eclipseSegments;g.track=this.#t(m.map(v=>({x:v.x*ua,y:v.y*ua,z:v.z*ua})),{color:_?"#ffffff":l,linewidth:1.5,opacity:.95,vertexColors:_}),p.add(g.track)}if(a.satelliteMarker&&(g.sat=new rn(new zi(.02,24,16),new Mi({color:l})),g.sat.renderOrder=20,g.subSat=new rn(new zi(.01,16,12),new Mi({color:l})),g.tether=this.#t([{x:0,y:0,z:1},{x:0,y:0,z:u}],{color:l,linewidth:1,opacity:.55}),g.label=Xa(t.name,l,{size:.045,tier:0}),g.sat.material.transparent=!0,p.add(g.sat,g.subSat,g.tether,g.label)),a.raanVector){g.raan=this.#t([{x:0,y:0,z:0},{x:u,y:0,z:0}],{color:l,linewidth:1.6,opacity:.9,dashed:!0,dashSize:.045,gapSize:.03});const _=new rn(new zi(.015,16,12),new Mi({color:l}));_.position.set(u,0,0);const v=Xa("Ω node",l,{size:.045,tier:1});v.position.set(u+.02,0,-.085),p.add(g.raan,_,v)}return this.eciGroup.add(p),a.eclipseRegions&&this.#x(g),g}#x(t){const n=J3(),a=Ky(t.orbit.altitudeKm),l=Y3(n,a),c=n.width-1,u=n.height,d=document.createElement("canvas");d.width=c,d.height=u;const m=d.getContext("2d"),p=m.createImageData(c,u);for(let S=0;S<u;S++){const x=u-1-S;for(let w=0;w<c;w++){const U=K3[l[S*n.width+w]],C=(x*c+w)*4;p.data[C]=U[0],p.data[C+1]=U[1],p.data[C+2]=U[2],p.data[C+3]=U[3]}}m.putImageData(p,0,0);const g=new nf(d);g.colorSpace=Ln,g.minFilter=Un,g.magFilter=Un;const _=new tn;_.rotation.x=Math.PI/2;const v=Q3+t.idx*.004,b=new rn(new zi(v,96,64),new Mi({map:g,transparent:!0,depthWrite:!1}));b.renderOrder=2,_.add(b),this.mssiGroup.add(_),t.mssiObjects.push(_),t.regionAlpha=a;const M=Z3(n,a),R=S=>S.map(x=>{const w=Math.cos(x.lat*Ae);return{x:hp*w*Math.cos(x.lng*Ae),y:hp*w*Math.sin(x.lng*Ae),z:hp*Math.sin(x.lat*Ae)}});for(const S of M.dU){if(S.length<2)continue;const x=this.#t(R(S),{color:Bn.dU,linewidth:2.4,opacity:1});this.mssiGroup.add(x),t.mssiObjects.push(x)}for(const S of M.dI){if(S.length<2)continue;const x=this.#t(R(S),{color:Bn.dI,linewidth:2.4,opacity:1});this.mssiGroup.add(x),t.mssiObjects.push(x)}}#s(t){this.#a(t.group);for(const n of t.mssiObjects)this.#a(n)}#y(t,n,a){const{orbit:l,group:c,rr:u,unit:d}=t,m=qy(l,n);if(c.rotation.z=m,t.sat){const p=G3(l,n),g=fp(0,l.inclinationDeg*Ae,p);t.sat.position.set(g.x*u,g.y*u,g.z*u),t.subSat.position.set(g.x*ua,g.y*ua,g.z*ua),t.tether.geometry.setPositions(new Float32Array([g.x*ua,g.y*ua,g.z*ua,g.x*u,g.y*u,g.z*u]));const _=fp(0,l.inclinationDeg*Ae,Math.PI/2);t.label.position.set(_.x*u,_.y*u,_.z*u+.09);const v=t.lastU==null?0:Math.abs(((p-t.lastU+Math.PI)%fi+fi)%fi-Math.PI);t.lastU=p,t.fastCount=v>.35?Math.min(6,(t.fastCount||0)+1):Math.max(0,(t.fastCount||0)-1);const b=t.fastCount>=2;t.sat.material.opacity=b?.35:1,t.tether.visible=!b,t.subSat.visible=!b}if(t.flags.eclipseSegments&&(t.ring||t.track)){const p=I3(a,-m),g=kn/(kn+l.altitudeKm),_=new be(t.color),v=new be(Bn.eclipsed),b=new Float32Array(d.length*3);for(let M=0;M<d.length;M++){const R=d[M],S=R.x*p.x+R.y*p.y+R.z*p.z,x=R.y*p.z-R.z*p.y,w=R.z*p.x-R.x*p.z,U=R.x*p.y-R.y*p.x,I=S<0&&Math.hypot(x,w,U)<g?v:_;b[M*3]=I.r,b[M*3+1]=I.g,b[M*3+2]=I.b}t.ring&&t.ring.geometry.setColors(b),t.track&&t.track.geometry.setColors(b)}}setProps(t){const n=this.props;this.props=t,(!n||n.orbits!==t.orbits||n.displayOrbits!==t.displayOrbits||n.coordinateFrame!==t.coordinateFrame)&&this.#S(t);const l=t.viewMode==="helio"?"helio":"geo";l!==this.viewMode&&(this.viewMode=l,this.#r(t),this.#M(l)),this.#b(t),this.#r(t)}#S({orbits:t,displayOrbits:n}){for(const a of this.orbitVisuals.values())this.#s(a);this.orbitVisuals.clear(),t.forEach((a,l)=>{const c=n[a.id]??{};Object.values(c).some(Boolean)&&this.orbitVisuals.set(a.id,this.#v(a,l,c))})}#b({vectors:t={},referenceOverlays:n={},coordinateFrame:a,earthTextureMode:l}){this.labelsEnabled=n.labels!==!1;const c=l==="hidden";this.earthMesh.visible=!c,this.atmosphere&&(this.atmosphere.visible=!c),this.ghostEarth.visible=c,this.analemma.visible=!!t.analemma,this.ecliptic.visible=!!t.analemma&&a==="ECI",this.subSolar.visible=!!t.subSolarPoint,this.sunLine.visible=!!t.sunDirectionLine,this.sunSprite.visible=!!t.sunDirectionLine,this.terminator.visible=!!t.terminator,this.grid.visible=!!n.latLonGrid;const u=!!n.otherFrameAxes;this.emiAxis.visible=u,this.mssiAxis.visible=u;const d=a==="ECI";this.emiAxisSolid.visible=d,this.emiAxisDashed.visible=!d,this.mssiAxisSolid.visible=!d,this.mssiAxisDashed.visible=d,this.zAxis.visible=u;const m=!!n.framePlanes;this.equatorPlane.visible=m,this.emiPlanes.visible=m,this.mssiPlanes.visible=m;for(const p of this.emiPlanes.children)p.userData.solid&&(p.userData.solid.visible=d,p.userData.dashed.visible=!d);for(const p of this.mssiPlanes.children)p.userData.solid&&(p.userData.solid.visible=!d,p.userData.dashed.visible=d);this.framePlanes.visible=m}#r({timeDays:t,coordinateFrame:n,earthTextureMode:a}){const l=this.viewMode==="helio",c=l?0:P3(n,t),u=mf(t);this.eciGroup.rotation.z=-c,this.mssiGroup.rotation.z=u-c,this.earthGroup.rotation.z=a==="still"?0:z3(t)-c;const d=Vm(t);this.sunLight.position.set(d.x*10,d.y*10,d.z*10);let m=Cs;if(l){const p=hm(t);this.assemblyTarget={pos:new X(p.x*Yn,p.y*Yn,0),rot:-p.eps},this.assemblyTween||(this.earthAssembly.position.copy(this.assemblyTarget.pos),this.earthAssembly.rotation.x=-p.eps),m=p.r*Yn/dp,this.currentEarthPos={x:p.x*Yn,y:p.y*Yn,z:0}}this.sunLine.geometry.setPositions(new Float32Array([0,0,0,d.x*m,d.y*m,d.z*m])),this.sunSprite.position.set(d.x*Cs,d.y*Cs,d.z*Cs),this.sunSprite.visible=this.sunSprite.visible&&!l,this.sunSpriteLabel.position.set(d.x*Cs,d.y*Cs,d.z*Cs+.22),this.sunSpriteLabel.userData.label.off=!this.sunSprite.visible,this.sunSpriteLabel.visible=this.sunSprite.visible,this.subSolar.position.set(d.x*1.006,d.y*1.006,d.z*1.006),this.subSolar.quaternion.setFromUnitVectors(new X(0,0,1),new X(d.x,d.y,d.z)),this.terminator.quaternion.setFromUnitVectors(new X(0,0,1),new X(d.x,d.y,d.z));for(const p of this.orbitVisuals.values())this.#y(p,t,d);this.currentSunECI=d}#M(t){this.viewMode=t;const n=t==="helio";this.helioRoot.visible=n;const a=n?dp:1;this.assemblyTween={t0:performance.now(),dur:1e3,fromScale:this.earthAssembly.scale.x,toScale:a,fromPos:this.earthAssembly.position.clone(),fromRot:this.earthAssembly.rotation.x},n||(this.currentEarthPos=null,this.assemblyTarget={pos:new X(0,0,0),rot:0});const l=n?2.4:1;for(const c of[this.emiAxis,this.mssiAxis,this.zAxis,this.equatorPlane,this.emiPlanes,this.mssiPlanes])c.scale.setScalar(l);this.stars&&(this.stars.parent?.remove(this.stars),(n?this.scene:this.eciGroup).add(this.stars)),this.controls.minDistance=n?.9:1.3,this.controls.maxDistance=n?60:12,n?this.setHelioCamera(this.helioCamera||"follow"):this.#n(new X(3,-1.4,1).normalize().multiplyScalar(4.2),new X(0,0,0))}#n(t,n,a=900){this.cameraTween={t0:performance.now(),dur:a,fromPos:this.camera.position.clone(),toPos:t.clone(),fromTarget:this.controls.target.clone(),toTarget:n.clone()}}setHelioCamera(t){this.helioCamera=t;const n=new X(this.currentEarthPos?.x??Yn,this.currentEarthPos?.y??0,0);if(t==="above")this.#n(new X(0,-8,26),new X(0,0,0));else if(t==="side")this.#n(new X(2,-28,4),new X(0,0,0));else{const a=n.clone().negate().normalize(),l=new X(0,0,1).cross(a).normalize(),c=n.clone().addScaledVector(a,-4.4).addScaledVector(l,2.6).add(new X(0,0,2.1));this.#n(c,n.clone().addScaledVector(a,1.4))}this.lastEarthPos.copy(n)}resize(){if(!this.container)return;const t=Math.max(1,Math.floor(this.container.clientWidth)),n=Math.max(1,Math.floor(this.container.clientHeight));this.width=t,this.height=n,this.renderer.setSize(t,n,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.camera.aspect=t/n,this.camera.updateProjectionMatrix();for(const a of this.lineMaterials)a.resolution.set(t,n)}#E(){this.camera.updateMatrixWorld(),this.camera.matrixWorldInverse.copy(this.camera.matrixWorld).invert();const t=this.viewMode==="helio"?1.7:1,n=this.camera.position,a=this.viewMode==="helio",l=a&&this.currentEarthPos&&n.distanceTo(new X(this.currentEarthPos.x,this.currentEarthPos.y,0))<3.6,c=this.#o||(this.#o=new X),u=this.width||1,d=this.height||1,m=[];for(const g of Hl){if(!g.parent)continue;let _=g.parent,v=!0;for(;_.parent;)_.visible||(v=!1),_=_.parent;if(_!==this.scene)continue;if(!this.labelsEnabled||!v||!_.visible||g.userData.label.off){g.visible=!1;continue}const b=g.userData.label;if(this.labelFilter&&!this.labelFilter(b.text)){g.visible=!1;continue}if(!a&&b.helioOnly){g.visible=!1;continue}if(a&&!l&&!b.helioAlways&&!this.labelFilter){g.visible=!1;continue}const{tier:M,far:R}=g.userData.label;g.getWorldPosition(c);const S=c.distanceTo(n);if(g.userData.label.dist=S,!_e&&M!==0&&S>(R[M]??1/0)*t){g.visible=!1,g.userData.label.why="far";continue}const x=c.clone().project(this.camera);if(g.userData.label.ndcz=x.z,x.z>1||x.z<-1){g.visible=!1,g.userData.label.why="ndc";continue}g.userData.label.why=null;const w=g.scale.x/2*u*.78,U=g.scale.y/2*d*.9,C=(x.x+1)/2*u,I=(1-x.y)/2*d;m.push({sp:g,tier:M,dist:S,rect:[C-w/2,I-U/2,C+w/2,I+U/2]})}m.sort((g,_)=>g.tier-_.tier||g.dist-_.dist);const p=_e?[]:[[0,0,560,84],[u-340,0,u,48]];for(const g of m){const[_,v,b,M]=g.rect,R=p.some(([S,x,w,U])=>_<w&&b>S&&v<U&&M>x);g.sp.visible=!R,R||p.push(g.rect)}}#o=null;#T(){if(this.disposed)return;const t=performance.now(),n=a=>a<.5?4*a*a*a:1-Math.pow(-2*a+2,3)/2;if(this.assemblyTween){const a=this.assemblyTween,l=n(Math.min(1,(t-a.t0)/a.dur)),c=this.assemblyTarget||{pos:new X,rot:0};this.earthAssembly.scale.setScalar(a.fromScale+(a.toScale-a.fromScale)*l),this.earthAssembly.position.lerpVectors(a.fromPos,c.pos,l),this.earthAssembly.rotation.x=a.fromRot+(c.rot-a.fromRot)*l,l>=1&&(this.assemblyTween=null)}if(this.cameraTween){const a=this.cameraTween,l=a.dur>0?n(Math.min(1,(t-a.t0)/a.dur)):1;if(this.viewMode==="helio"&&this.helioCamera==="follow"&&this.currentEarthPos){const c=new X(this.currentEarthPos.x,this.currentEarthPos.y,0),u=c.clone().sub(this.lastEarthPos);u.lengthSq()>0&&(a.toPos.add(u),a.toTarget.add(u),a.fromPos.add(u),a.fromTarget.add(u),this.lastEarthPos.copy(c))}this.camera.position.lerpVectors(a.fromPos,a.toPos,l),this.controls.target.lerpVectors(a.fromTarget,a.toTarget,l),l>=1&&(this.cameraTween=null)}if(!this.cameraTween&&this.viewMode==="helio"&&this.helioCamera==="follow"&&this.currentEarthPos){const a=new X(this.currentEarthPos.x,this.currentEarthPos.y,0),l=a.clone().sub(this.lastEarthPos);l.lengthSq()>0&&(this.camera.position.add(l),this.controls.target.copy(a),this.lastEarthPos.copy(a))}this.controls.update(),(this.frameCount||0)%3===0&&this.#E(),this.renderer.render(this.scene,this.camera),this.frameCount=(this.frameCount||0)+1,this.raf=requestAnimationFrame(this.tick)}detach(){cancelAnimationFrame(this.raf),this.raf=null,this.renderer.domElement.remove(),this.container=null}attach(t){this.container=t,t.appendChild(this.renderer.domElement),this.resize(),this.raf==null&&(this.raf=requestAnimationFrame(this.tick))}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf);for(const t of[...Hl]){let n=t;for(;n.parent;)n=n.parent;n===this.scene&&Hl.delete(t)}this.controls.dispose();for(const t of this.orbitVisuals.values())this.#s(t);this.scene.traverse(t=>{if(t.geometry&&t.geometry.dispose(),t.material){const n=Array.isArray(t.material)?t.material:[t.material];for(const a of n)a.map&&a.map.dispose(),a.dispose()}}),this.renderer.dispose(),this.renderer.domElement.remove()}debugState(){this.scene.updateMatrixWorld(!0);const t=(c,u)=>{const d=new X(u.x,u.y,u.z);return c.localToWorld(d),{x:d.x,y:d.y,z:d.z}},n={};for(const[c,u]of this.orbitVisuals){const d=u.sat?t(u.group,u.sat.position):null,m=u.ring?u.unit.filter((p,g)=>g%20===0).map(p=>t(u.group,{x:p.x*u.rr,y:p.y*u.rr,z:p.z*u.rr})):null;n[c]={sat:d,ring:m,rotationZ:u.group.rotation.z,rr:u.rr,regionAlpha:u.regionAlpha??null,flags:u.flags,hasRing:!!u.ring,hasTrack:!!u.track,mssiObjects:u.mssiObjects.length}}const a=[],l=this.analemma.geometry.attributes.instanceStart;if(l)for(let c=0;c<l.count;c+=6)a.push(t(this.analemma,{x:l.getX(c),y:l.getY(c),z:l.getZ(c)}));return{frameCount:this.frameCount||0,texturesReady:!!this.texturesReady,rotations:{eci:this.eciGroup.rotation.z,mssi:this.mssiGroup.rotation.z,earth:this.earthGroup.rotation.z},subSolar:t(this.eciGroup,this.subSolar.position),sunECI:this.currentSunECI,analemma:a,orbits:n,visible:{analemma:this.analemma.visible,ecliptic:this.ecliptic.visible,subSolar:this.subSolar.visible,sunLine:this.sunLine.visible,terminator:this.terminator.visible,grid:this.grid.visible,emiAxis:this.emiAxis.visible,mssiAxis:this.mssiAxis.visible,framePlanes:this.framePlanes.visible,labels:this.labelsEnabled!==!1},camera:{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z},viewMode:this.viewMode,earthPos:this.currentEarthPos??null,labels:[...Hl].filter(c=>{let u=c;for(;u.parent;)u=u.parent;return u===this.scene}).map(c=>{let u=c.parent,d=null;for(;u;)!u.visible&&!d&&(d=u.name||u.type),u=u.parent;return{text:c.userData.label.text,tier:c.userData.label.tier,visible:c.visible,dist:c.userData.label.dist??null,hiddenBy:d,off:!!c.userData.label.off,why:c.userData.label.why??null,ndcz:c.userData.label.ndcz??null}})}}setLabelFilter(t){this.labelFilter=t}project(t){const n=new X(t.x,t.y,t.z).project(this.camera);return{x:(n.x+1)/2*this.width,y:(1-n.y)/2*this.height,depth:n.z}}setCamera(t){if(t&&t.absolute){const{position:n,target:a}=t.absolute;this.helioCamera="manual",this.#n(new X(n.x,n.y,n.z),new X(a.x,a.y,a.z),0),this.currentEarthPos&&this.lastEarthPos.set(this.currentEarthPos.x,this.currentEarthPos.y,0);return}if(t&&t.helio){this.setHelioCamera(t.helio);return}if(this.viewMode==="helio"){const n=new X(this.currentEarthPos?.x??Yn,this.currentEarthPos?.y??0,0),a=new X(t.x,t.y,t.z).normalize().multiplyScalar(4.2*dp*1.8);this.helioCamera="manual",this.#n(n.clone().add(a),n),this.lastEarthPos.copy(n);return}this.#n(new X(t.x,t.y,t.z),new X(0,0,0))}}let Jx=null;const $3={analemma:!1,subSolarPoint:!1,sunDirectionLine:!1,terminator:!1},tR={latLonGrid:!1,otherFrameAxes:!1};function $x({coordinateFrame:r="MSSI",earthTextureMode:t="realistic",orbits:n=[],displayOrbits:a={},timeDays:l=0,vectors:c=$3,referenceOverlays:u=tR,cameraRequest:d=null,viewMode:m="geo"}){const p=ee.useRef(null),g=ee.useRef(null);return ee.useEffect(()=>{const _=p.current;if(!_)return;let v=Jx;v?v.attach(_):v=Jx=new Xm(_),g.current=v,window.__k0scene=v;const b=new ResizeObserver(()=>v.resize());return b.observe(_),()=>{b.disconnect(),v.detach(),g.current=null}},[]),ee.useEffect(()=>{g.current?.setProps({coordinateFrame:r,earthTextureMode:t,viewMode:m,orbits:n,displayOrbits:a,timeDays:l,vectors:c,referenceOverlays:u})},[r,t,m,n,a,l,c,u]),ee.useEffect(()=>{d&&g.current?.setCamera(d)},[d]),F.jsx("div",{ref:p,className:"h-full w-full"})}function Il({children:r,className:t=""}){return F.jsx("span",{className:`inline-flex h-10 w-10 items-center justify-center rounded-full ${t}`,children:r})}function eR({valueDays:r,onChangeDays:t}){const l="w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:h-0.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-white/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:mt-[-5px] [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow [&::-moz-range-track]:h-0.5 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-white/25 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-white",c=M=>Number(M).toFixed(2),u=c(r),[d,m]=ee.useState(u),[p,g]=ee.useState(u),[_,v]=ee.useState(!1);p!==u&&(g(u),m(u));const b=()=>{const M=Number.parseFloat(d);if(!Number.isFinite(M)){v(!0),m(c(r)),window.setTimeout(()=>v(!1),260);return}const R=Dn(cn(M,0,365.24),2);t(R),m(c(R))};return F.jsxs("div",{className:"flex w-full items-center gap-4",children:[F.jsx("input",{className:l,type:"range",min:0,max:365.24,step:.01,value:r,onChange:M=>t(Dn(Number(M.target.value),2))}),F.jsxs("div",{className:"flex items-center gap-2 text-[11px] text-white/80",children:[F.jsx("input",{className:`w-[84px] rounded-md bg-white/5 px-2 py-1 text-right font-semibold text-white/90 ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 ${_?"animate-shake":""}`,type:"text",inputMode:"decimal",value:d,onChange:M=>m(M.target.value),onKeyDown:M=>{M.key==="Enter"&&b()},onBlur:()=>m(c(r))}),F.jsx("span",{children:"days"})]})]})}function jm(r){return`${r}_${Math.random().toString(36).slice(2,10)}${Date.now().toString(36)}`}const nR={groundTrack:!1,satelliteMarker:!1,orbitalPlaneRing:!1,eclipseSegments:!1,raanVector:!1,eclipseRegions:!1},Gl={overview:{name:"Overview",coordinateFrame:"MSSI",earthTextureMode:"still",orbit:{satelliteMarker:!0,orbitalPlaneRing:!0},vectors:{analemma:!0,subSolarPoint:!0,sunDirectionLine:!0,terminator:!1},referenceOverlays:{latLonGrid:!0,otherFrameAxes:!1,framePlanes:!1}},eclipse:{name:"Eclipse",coordinateFrame:"MSSI",earthTextureMode:"still",orbit:{orbitalPlaneRing:!0,eclipseSegments:!0,eclipseRegions:!0,raanVector:!0},vectors:{analemma:!0,subSolarPoint:!0,sunDirectionLine:!0,terminator:!0},referenceOverlays:{latLonGrid:!1,otherFrameAxes:!1}},frames:{name:"Frames",coordinateFrame:"ECI",earthTextureMode:"still",orbit:{orbitalPlaneRing:!0,raanVector:!0,satelliteMarker:!0},vectors:{analemma:!0,subSolarPoint:!0,sunDirectionLine:!0,terminator:!1},referenceOverlays:{latLonGrid:!0,otherFrameAxes:!0,framePlanes:!0}},helio:{name:"Sun-centred",viewMode:"helio",coordinateFrame:"MSSI",earthTextureMode:"realistic",orbit:{orbitalPlaneRing:!0,raanVector:!0},vectors:{analemma:!1,subSolarPoint:!0,sunDirectionLine:!0,terminator:!1},referenceOverlays:{latLonGrid:!0,otherFrameAxes:!0,framePlanes:!0}},planes:{name:"Frame planes",coordinateFrame:"MSSI",earthTextureMode:"still",orbit:{orbitalPlaneRing:!0,satelliteMarker:!0},vectors:{sunDirectionLine:!0},referenceOverlays:{latLonGrid:!1,otherFrameAxes:!0,framePlanes:!0}},sun:{name:"Sun & analemma",coordinateFrame:"MSSI",earthTextureMode:"still",orbit:{groundTrack:!0},vectors:{analemma:!0,subSolarPoint:!0,sunDirectionLine:!0,terminator:!0},referenceOverlays:{latLonGrid:!0,otherFrameAxes:!1}}},ty=[{id:"noon",name:"Noon–midnight, 550 km",altitudeKm:550,raanOffsetDeg:0},{id:"dawn800",name:"Dawn–dusk, 800 km (LTAN 06:00)",altitudeKm:800,raanOffsetDeg:270},{id:"dusk800",name:"Dawn–dusk, 800 km (LTAN 18:00)",altitudeKm:800,raanOffsetDeg:90},{id:"kz1500",name:"Kelvin Zero, 1500 km (eclipse-free)",altitudeKm:1500,raanOffsetDeg:270},{id:"default",name:"Near dawn–dusk, 800 km (LTAN 05:20)",altitudeKm:800,raanOffsetDeg:260}],ey={follow:{label:"Follow Earth"},above:{label:"Above ecliptic"},side:{label:"Along ecliptic"}},pm={sun:{label:"Sun side",x:3,y:-1.4,z:1},antisun:{label:"Anti-Sun",x:-3.2,y:-1.2,z:.9},pole:{label:"North pole",x:.4,y:-.4,z:3.4},side:{label:"Dawn side",x:.2,y:-3.3,z:.8}};function iR(r,t){return{...r,activeViewId:t}}function aR(r){const n=r.views.filter(u=>!u.locked).length+1,a=jm("v"),l=r.views.find(u=>u.id===r.activeViewId)??r.views[0],c={id:a,name:`Custom View ${n}`,locked:!1,config:mr(l.config),savedConfig:mr(l.config)};return{...r,views:[c,...r.views],activeViewId:a}}function sR(r,t){const n=r.views.find(c=>c.id===t);if(!n||n.locked)return r;const a=r.views.filter(c=>c.id!==t),l=r.activeViewId===t?a[0]?.id??r.activeViewId:r.activeViewId;return{...r,views:a,activeViewId:l}}function rR(r,t){return{...r,views:r.views.map(n=>n.id===t&&n.savedConfig?{...n,config:mr(n.savedConfig)}:n)}}function oR(r,t){const n=r.orbits.find(u=>u.id===t);if(!n||n.locked)return r;const a=r.orbits.filter(u=>u.id!==t),l=r.activeOrbitId===t?a[0]?.id??r.activeOrbitId:r.activeOrbitId,c=r.views.map(u=>{const d={...u.config.display.orbits};delete d[t];const m=u.savedConfig?{...u.savedConfig.display.orbits}:null;return m&&delete m[t],{...u,config:{...u.config,display:{...u.config.display,orbits:d}},savedConfig:u.savedConfig?{...u.savedConfig,display:{...u.savedConfig.display,orbits:m}}:u.savedConfig}});return{...r,orbits:a,activeOrbitId:l,views:c}}function lR(r,t){return{...r,activeOrbitId:t}}function cR(r){const t=r.orbits.length+1,n=jm("o"),a=r.orbits[0],l={id:n,name:`Orbit ${t}`,locked:!1,altitudeKm:a.altitudeKm,inclinationDeg:a.inclinationDeg,raanOffsetDeg:a.raanOffsetDeg,initialMeanAnomalyDeg:a.initialMeanAnomalyDeg},c={groundTrack:!0,satelliteMarker:!0,orbitalPlaneRing:!1,eclipseSegments:!1,raanVector:!1,eclipseRegions:!1},u=r.views.map(d=>{const m={...d.config,display:{...d.config.display,orbits:{...d.config.display.orbits,[n]:{...c}}}},p=d.savedConfig?{...d.savedConfig,display:{...d.savedConfig.display,orbits:{...d.savedConfig.display.orbits,[n]:{...c}}}}:void 0;return{...d,config:m,savedConfig:p}});return{...r,orbits:[...r.orbits,l],activeOrbitId:n,views:u}}function $y(r,t,n){return{...r,orbits:r.orbits.map(a=>a.id===t?{...a,...n}:a)}}function uR(r,t){return{...r,views:r.views.map(n=>n.id===r.activeViewId?{...n,config:{...n.config,...t}}:n)}}function fR(r,t,n){const a=r.views.find(u=>u.id===r.activeViewId);if(!a)return r;const l=a.config.display.orbits[t];if(!l)return r;const c=!!l[n];return{...r,views:r.views.map(u=>u.id===r.activeViewId?{...u,config:{...u.config,display:{...u.config.display,orbits:{...u.config.display.orbits,[t]:{...u.config.display.orbits[t],[n]:!c}}}}}:u)}}function hR(r,t,n){const a=r.views.find(u=>u.id===r.activeViewId);if(!a)return r;const l=a.config.display[t][n],c=n==="labels"?l!==!1:!!l;return{...r,views:r.views.map(u=>u.id===r.activeViewId?{...u,config:{...u.config,display:{...u.config.display,[t]:{...u.config.display[t],[n]:!c}}}}:u)}}function tS(r,t){const n={};for(const a of r.orbits)n[a.id]={...nR,...t.orbit??{}};return{toggles:{coordinateFrame:t.coordinateFrame??"MSSI",earthTextureMode:t.earthTextureMode??"realistic",viewMode:t.viewMode??"geo"},display:{orbits:n,vectors:{analemma:!1,subSolarPoint:!1,sunDirectionLine:!1,terminator:!1,...t.vectors??{}},referenceOverlays:{latLonGrid:!1,otherFrameAxes:!1,framePlanes:!1,labels:!0,...t.referenceOverlays??{}}}}}function dR(r,t){const n=tS(r,t),a=r.views.find(u=>u.name===t.name);if(a)return{...r,activeViewId:a.id,views:r.views.map(u=>u.id===a.id?{...u,config:n,savedConfig:mr(n)}:u)};const l=jm("v"),c={id:l,name:t.name,locked:!1,config:n,savedConfig:mr(n)};return{...r,views:[c,...r.views],activeViewId:l}}function qu({label:r,min:t,max:n,step:a,value:l,unit:c,onChange:u,onChangeLive:d,onCommit:m,rightIcon:p,decimals:g}){const _="w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:h-0.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-white/20 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:mt-[-5px] [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow [&::-moz-range-track]:h-0.5 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-white/20 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-white",v=O=>Number(O).toFixed(g),b=v(l),[M,R]=ee.useState(b),[S,x]=ee.useState(b),[w,U]=ee.useState(!1);S!==b&&(x(b),R(b));const C=()=>{const O=Number.parseFloat(M);if(!Number.isFinite(O)){U(!0),R(v(l)),window.setTimeout(()=>U(!1),260);return}const T=cn(O,t,n),N=Number(Number(T).toFixed(g));u(N),R(Number(N).toFixed(g))},I=O=>{if(m){d?.(O);return}u(O)},B=O=>{if(!m)return;const T=cn(O,t,n),N=Number(Number(T).toFixed(g));m(N)};return F.jsxs("div",{children:[F.jsxs("div",{className:"flex items-center justify-between text-xs text-white/80",children:[F.jsx("span",{children:r}),F.jsx("div",{className:"flex items-center gap-2",children:p})]}),F.jsxs("div",{className:"mt-3 grid grid-cols-[1fr_auto] items-center gap-3",children:[F.jsx("input",{className:_,type:"range",min:t,max:n,step:a,value:l,onChange:O=>I(Number(O.target.value)),onPointerUp:O=>B(Number(O.currentTarget.value)),onKeyUp:O=>{O.key==="Enter"&&B(Number(O.currentTarget.value))}}),F.jsxs("div",{className:"flex items-center gap-2 text-[11px] text-white/80",children:[F.jsx("input",{className:`w-[84px] rounded-md bg-white/5 px-2 py-1 text-right font-semibold text-white/90 ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 ${w?"animate-shake":""}`,type:"text",inputMode:"decimal",value:M,onChange:O=>R(O.target.value),onKeyDown:O=>{O.key==="Enter"&&C()},onBlur:()=>R(v(l))}),F.jsx("span",{children:c})]})]})]})}function pR({orbit:r,timeDays:t=0,colorHex:n="#38bdf8"}){const p=ee.useMemo(()=>{const S=[];for(let x=0;x<=92;x++){const w=x/92*xa;S.push({d:w,b:uf(r,w)/Ae})}return{pts:S,thr:Zy(r.altitudeKm)}},[r]),g=R=>26+R/xa*268,_=R=>6+(90-R)/180*52,v=p.pts.map((R,S)=>`${S?"L":"M"}${g(R.d).toFixed(1)},${_(R.b).toFixed(1)}`).join(" "),b=uf(r,t)/Ae,M=[0,31,59,90,120,151,181,212,243,273,304,334];return F.jsxs("svg",{viewBox:"0 0 300 72",className:"mt-1 w-full",role:"img","aria-label":"Beta angle over the year",children:[F.jsx("rect",{x:26,y:_(p.thr),width:268,height:_(-p.thr)-_(p.thr),fill:"rgba(244,63,94,0.12)"}),F.jsx("line",{x1:26,x2:294,y1:_(p.thr),y2:_(p.thr),stroke:"rgba(244,63,94,0.5)",strokeDasharray:"3 3"}),F.jsx("line",{x1:26,x2:294,y1:_(-p.thr),y2:_(-p.thr),stroke:"rgba(244,63,94,0.5)",strokeDasharray:"3 3"}),F.jsx("line",{x1:26,x2:294,y1:_(0),y2:_(0),stroke:"rgba(255,255,255,0.12)"}),[90,0,-90].map(R=>F.jsxs("text",{x:22,y:_(R)+3,textAnchor:"end",fontSize:"8",fill:"rgba(255,255,255,0.45)",children:[R,"°"]},R)),M.map((R,S)=>F.jsx("text",{x:g(R+15),y:69,textAnchor:"middle",fontSize:"7.5",fill:"rgba(255,255,255,0.35)",children:"JFMAMJJASOND"[S]},R)),F.jsx("path",{d:v,fill:"none",stroke:n,strokeWidth:"1.6"}),F.jsx("line",{x1:g(t),x2:g(t),y1:6,y2:58,stroke:"rgba(255,255,255,0.35)"}),F.jsx("circle",{cx:g(t),cy:_(b),r:"2.6",fill:n,stroke:"rgba(0,0,0,0.6)"})]})}const mR=r=>{const t=((12+r/15)%24+24)%24;return`${String(Math.floor(t)).padStart(2,"0")}:${String(Math.round(t%1*60)%60).padStart(2,"0")}`};function mp({checked:r,colorClass:t}){return F.jsx("span",{className:`h-3.5 w-3.5 flex-none rounded-sm border-2 ${t} ${r?"bg-current":"bg-transparent"}`,"aria-hidden":"true"})}const Yu="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55",Zu="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45";function gR({items:r}){return F.jsx("div",{className:"ml-[26px] flex flex-wrap gap-x-3 gap-y-1 pb-1 text-[10px] text-white/55",children:r.map(([t,n])=>F.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[F.jsx("span",{className:`inline-block h-2 w-2 rounded-[2px] ${t}`,"aria-hidden":"true"}),n]},n))})}function Qi({helpId:r,onRequestHelp:t}){return r?F.jsx("button",{type:"button",className:"inline-flex h-5 w-5 flex-none items-center justify-center text-white/80 hover:text-white","aria-label":`Help: ${r}`,onClick:n=>{n.stopPropagation(),t?.(r)},children:F.jsx(SM,{className:"h-3.5 w-3.5"})}):null}function _R({open:r,model:t,setModel:n,timeDays:a=0,onRequestDeleteOrbit:l,onRequestHelp:c}){const[u,d]=ee.useState(!0),[m,p]=ee.useState(!0),[g,_]=ee.useState(!0),[v,b]=ee.useState(!0),[M,R]=ee.useState(!0),[S,x]=ee.useState(!0),[w,U]=ee.useState(!0),C=ee.useMemo(()=>t.orbits.find(A=>A.id===t.activeOrbitId)??t.orbits[0],[t]),I=ee.useMemo(()=>t.views.find(A=>A.id===t.activeViewId)??t.views[0],[t]),B=`${C.id}|${C.altitudeKm}|${C.inclinationDeg}|${C.raanOffsetDeg}|${C.initialMeanAnomalyDeg}`,[O,T]=ee.useState(()=>({key:B,altitudeKm:C.altitudeKm,inclinationDeg:C.inclinationDeg,raanOffsetDeg:C.raanOffsetDeg,initialMeanAnomalyDeg:C.initialMeanAnomalyDeg}));O.key!==B&&T({key:B,altitudeKm:C.altitudeKm,inclinationDeg:C.inclinationDeg,raanOffsetDeg:C.raanOffsetDeg,initialMeanAnomalyDeg:C.initialMeanAnomalyDeg});const N=ee.useMemo(()=>{const A=C,V=uf(A,a)/Ae;return{periodMin:F3(A.altitudeKm)/60,ltan:X3(k3(A.raanOffsetDeg)),alphaDeg:Ky(A.altitudeKm),betaDeg:V,eclipseNow:Yy(V*Ae,A.altitudeKm),betaFree:Zy(A.altitudeKm),yearly:j3(A,366)}},[C,a]),ot=A=>n(V=>lR(V,A)),G=()=>{n(A=>cR(A))},Y=(A,V)=>{n(ft=>$y(ft,A,V))},tt=A=>{n(V=>uR(V,A))},$=(A,V)=>{n(ft=>fR(ft,A,V))},Q=(A,V)=>{n(ft=>hR(ft,A,V))},P=I.config.toggles.coordinateFrame==="SCI"?"MSSI":I.config.toggles.coordinateFrame,H=A=>{const V=Dn(cn(A,100,2e3),1),ft=Dn(cn(Xl(V),or,lr),2);Y(C.id,{altitudeKm:V,inclinationDeg:ft})},ct=A=>{const V=Dn(cn(A,100,2e3),1),ft=Dn(cn(Xl(V),or,lr),2);T(Mt=>({...Mt,altitudeKm:V,inclinationDeg:ft}))},pt=A=>{const V=Dn(cn(A,or,lr),2),ft=Dn(cn(Wx(V),100,2e3),1);Y(C.id,{inclinationDeg:V,altitudeKm:ft})},bt=A=>{const V=Dn(cn(A,or,lr),2),ft=Dn(cn(Wx(V),100,2e3),1);T(Mt=>({...Mt,inclinationDeg:V,altitudeKm:ft}))};return F.jsx("aside",{className:`relative z-20 h-dvh flex-none overflow-hidden text-white transition-[width] duration-200 ease-out ${r?"w-[340px] bg-gradient-to-b from-indigo-950/90 via-black to-black shadow-2xl ring-1 ring-white/10":"w-0 bg-transparent shadow-none ring-0"}`,"aria-hidden":!r,children:F.jsxs("div",{className:`h-full w-[340px] transform overflow-y-auto px-4 py-6 transition-[transform,opacity] duration-200 ease-out [scrollbar-gutter:stable] [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.25)_transparent] [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb:hover]:bg-white/30 ${r?"translate-x-0 opacity-100":"-translate-x-full opacity-0"}`,children:[F.jsx("div",{className:"flex items-center justify-between",children:F.jsxs("button",{type:"button",className:"inline-flex items-center gap-2",onClick:()=>d(A=>!A),children:[F.jsx("span",{className:Yu,children:"Orbits"}),F.jsx(tr,{open:u})]})}),u?F.jsxs(F.Fragment,{children:[F.jsxs("div",{className:"mt-4 flex items-start gap-2",children:[F.jsx("div",{className:"flex flex-1 items-center gap-2 overflow-x-auto pb-3 [scrollbar-gutter:stable] [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.25)_transparent] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb:hover]:bg-white/30",children:t.orbits.map((A,V)=>{const ft=A.id===C.id,Mt=ju(V);return ft?F.jsxs("span",{className:`inline-flex flex-none items-center gap-2 rounded-full ${Mt.chip} px-3 py-1 text-xs font-semibold text-slate-950 ring-1 ring-inset ring-white/20`,children:[A.name,A.locked?null:F.jsx("button",{type:"button",className:"text-slate-900/60 hover:text-slate-900","aria-label":`Delete ${A.name}`,onClick:Ot=>{Ot.stopPropagation(),l(A.id)},children:"×"})]},A.id):F.jsxs("span",{className:"inline-flex flex-none items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 ring-1 ring-inset ring-white/10",children:[F.jsxs("button",{type:"button",className:"inline-flex items-center gap-1.5 hover:text-white",onClick:()=>ot(A.id),"aria-label":`Select ${A.name}`,children:[F.jsx("span",{className:`inline-block h-2 w-2 rounded-full border-2 ${Mt.cls} bg-current`,"aria-hidden":"true"}),A.name]}),A.locked?null:F.jsx("button",{type:"button",className:"text-white/60 hover:text-white/80","aria-label":`Delete ${A.name}`,onClick:Ot=>{Ot.stopPropagation(),l(A.id)},children:"×"})]},A.id)})}),F.jsx("button",{type:"button",className:"inline-flex h-6 w-6 flex-none items-center justify-center self-start rounded-full bg-white/10 text-white ring-1 ring-inset ring-white/10 hover:bg-white/15",onClick:G,"aria-label":"Add orbit",children:F.jsx(iy,{className:"h-3.5 w-3.5"})})]}),F.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[F.jsx("label",{className:`${Zu} flex-none`,htmlFor:"orbit-preset",children:"Preset"}),F.jsxs("select",{id:"orbit-preset",className:"min-w-0 flex-1 cursor-pointer appearance-none rounded-md bg-white/10 py-1.5 pl-3 pr-9 text-xs font-medium text-white/90 ring-1 ring-inset ring-white/10 [color-scheme:dark] hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-sky-400/60",style:{backgroundImage:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.7)' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><path d='m6 9 6 6 6-6'/></svg>")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 10px center"},value:"",onChange:A=>{const V=ty.find(Mt=>Mt.id===A.target.value);if(!V)return;const ft=Dn(cn(V.altitudeKm,100,2e3),1);Y(C.id,{altitudeKm:ft,inclinationDeg:Dn(cn(Xl(ft),or,lr),2),raanOffsetDeg:V.raanOffsetDeg})},children:[F.jsx("option",{value:"",children:"Load an orbit preset…"}),ty.map(A=>F.jsx("option",{value:A.id,children:A.name},A.id))]})]}),F.jsxs("div",{className:"mt-6 space-y-6",children:[F.jsx(qu,{label:"Altitude",min:100,max:2e3,step:.1,value:O.altitudeKm,unit:"km",rightIcon:F.jsx(Qi,{onRequestHelp:c,helpId:"altitudeKm"}),onChange:H,onChangeLive:ct,onCommit:H,decimals:1}),F.jsx(qu,{label:"Inclination",min:or,max:lr,step:.01,value:O.inclinationDeg,unit:"deg",rightIcon:F.jsx(Qi,{onRequestHelp:c,helpId:"inclinationDeg"}),onChange:pt,onChangeLive:bt,onCommit:pt,decimals:2}),F.jsx(qu,{label:`RAAN offset from mean Sun (Ω) · LTAN ${mR(O.raanOffsetDeg)}`,rightIcon:F.jsx(Qi,{onRequestHelp:c,helpId:"raanOffsetDeg"}),min:0,max:360,step:.01,value:O.raanOffsetDeg,unit:"deg",onChange:A=>Y(C.id,{raanOffsetDeg:cn(A,0,360)}),onChangeLive:A=>T(V=>({...V,raanOffsetDeg:cn(A,0,360)})),onCommit:A=>Y(C.id,{raanOffsetDeg:cn(A,0,360)}),decimals:2}),F.jsx(qu,{label:"Initial Mean Anomaly",rightIcon:F.jsx(Qi,{onRequestHelp:c,helpId:"initialMeanAnomalyDeg"}),min:0,max:360,step:.01,value:O.initialMeanAnomalyDeg,unit:"deg",onChange:A=>Y(C.id,{initialMeanAnomalyDeg:cn(A,0,360)}),onChangeLive:A=>T(V=>({...V,initialMeanAnomalyDeg:cn(A,0,360)})),onCommit:A=>Y(C.id,{initialMeanAnomalyDeg:cn(A,0,360)}),decimals:2})]})]}):null,F.jsxs("div",{className:"mt-9",children:[F.jsxs("button",{type:"button",className:"flex w-full items-center justify-between",onClick:()=>p(A=>!A),children:[F.jsx("span",{className:Yu,children:"Derived"}),F.jsx(tr,{open:m})]}),m?F.jsxs("div",{className:"mt-3 select-text space-y-1.5 rounded-lg bg-white/5 px-3 py-2.5 text-xs text-white/85 ring-1 ring-inset ring-white/5",children:[F.jsxs("div",{className:"flex items-center justify-between gap-3 pb-1",children:[F.jsx("span",{className:`text-xs font-semibold ${ju(t.orbits.findIndex(A=>A.id===C.id)).cls.split(" ")[0]}`,children:C.name}),F.jsx(Qi,{onRequestHelp:c,helpId:"calculate"})]}),[["Period",`${N.periodMin.toFixed(2)} min`],["LTAN",`${N.ltan}`],["β now (day "+a.toFixed(1)+")",`${N.betaDeg.toFixed(2)}°`],["Eclipse now",`${(N.eclipseNow*100).toFixed(1)}% of orbit`],["Eclipse-free if",`|β| ≥ ${N.betaFree.toFixed(2)}°`],["β range (year)",`${N.yearly.betaMinDeg.toFixed(1)}° … ${N.yearly.betaMaxDeg.toFixed(1)}°`],["Yearly sun exposure",`${(N.yearly.sunExposure*100).toFixed(2)}%`],["Days with eclipse",`${N.yearly.eclipseDays.toFixed(0)} / 365`],["Region cone α",`${N.alphaDeg.toFixed(2)}°`]].map(([A,V])=>F.jsxs("div",{className:"flex items-center justify-between gap-3",children:[F.jsx("span",{className:"text-white/55",children:A}),F.jsx("span",{className:"font-medium tabular-nums text-white/90",children:V})]},A)),F.jsxs("div",{className:"pt-2",children:[F.jsx("div",{className:"text-[10px] font-semibold tracking-[0.08em] text-white/45",children:"β over the year · shaded band = eclipse"}),F.jsx(pR,{orbit:C,timeDays:a,colorHex:ju(t.orbits.findIndex(A=>A.id===C.id)).hex})]})]}):null]}),F.jsxs("div",{className:"mt-9",children:[F.jsxs("button",{type:"button",className:"flex w-full items-center justify-between",onClick:()=>_(A=>!A),children:[F.jsx("span",{className:Yu,children:"Toggles"}),F.jsx(tr,{open:g})]}),g?F.jsxs(F.Fragment,{children:[F.jsxs("div",{className:"mt-4 flex items-center justify-between text-xs text-white/80",children:[F.jsx("span",{children:"Viewpoint"}),F.jsx(Qi,{onRequestHelp:c,helpId:"viewMode"})]}),F.jsx("div",{className:"mt-3 flex flex-wrap gap-2 text-xs",role:"radiogroup","aria-label":"Viewpoint",children:[{label:"Earth-centred",value:"geo"},{label:"Sun-centred",value:"helio"}].map(A=>{const V=(I.config.toggles.viewMode??"geo")===A.value;return F.jsx("button",{type:"button",role:"radio","aria-checked":V,className:`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold text-white/90 outline-none focus:outline-none active:outline-none ${V?"bg-sky-500":"bg-white/10 hover:bg-white/15"}`,onClick:()=>tt({toggles:{...I.config.toggles,viewMode:A.value}}),children:A.label},A.value)})}),F.jsxs("div",{className:"mt-6 flex items-center justify-between text-xs text-white/80",children:[F.jsx("span",{children:"Coordinate Frame"}),F.jsx(Qi,{onRequestHelp:c,helpId:"coordinateFrame"})]}),F.jsx("div",{className:"mt-3 flex flex-wrap gap-2 text-xs",role:"radiogroup","aria-label":"Coordinate Frame",children:["ECI","MSSI"].map(A=>{const V=P===A;return F.jsx("button",{type:"button",role:"radio","aria-checked":V,className:`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold text-white/90 outline-none focus:outline-none active:outline-none ${V?"bg-sky-500":"bg-white/10 hover:bg-white/15"}`,onClick:()=>tt({toggles:{...I.config.toggles,coordinateFrame:A}}),children:A},A)})}),F.jsxs("div",{className:"mt-6 flex items-center justify-between text-xs text-white/80",children:[F.jsx("span",{children:"Earth"}),F.jsx(Qi,{onRequestHelp:c,helpId:"earthTextureMode"})]}),F.jsx("div",{className:"mt-3 flex flex-wrap gap-2 text-xs",role:"radiogroup","aria-label":"Earth Texture Mode",children:[{label:"Realistic",value:"realistic"},{label:"Still",value:"still"},{label:"Hidden",value:"hidden"}].map(A=>{const V=(I.config.toggles.earthTextureMode??"realistic")===A.value;return F.jsx("button",{type:"button",role:"radio","aria-checked":V,className:`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold text-white/90 outline-none focus:outline-none active:outline-none ${V?"bg-sky-500":"bg-white/10 hover:bg-white/15"}`,onClick:()=>tt({toggles:{...I.config.toggles,earthTextureMode:A.value}}),children:A.label},A.value)})})]}):null]}),F.jsxs("div",{className:"mt-9",children:[F.jsxs("button",{type:"button",className:"flex w-full items-center justify-between",onClick:()=>b(A=>!A),children:[F.jsx("span",{className:Yu,children:"Display"}),F.jsx(tr,{open:v})]}),v?F.jsx(F.Fragment,{children:F.jsxs("div",{className:"mt-4 space-y-4 text-xs text-white/85",children:[F.jsxs("div",{children:[F.jsxs("button",{type:"button",className:"flex w-full items-center justify-between",onClick:()=>R(A=>!A),children:[F.jsx("div",{className:Zu,children:"Per-orbit"}),F.jsx(tr,{open:M,className:"h-3 w-3 text-white/60"})]}),M?F.jsx("div",{className:"mt-2 space-y-3",children:t.orbits.map((A,V)=>{const ft=ju(V).cls,Mt=I.config.display.orbits[A.id]??{},Ot=[{key:"groundTrack",label:"Ground Track",helpId:"groundTrack"},{key:"satelliteMarker",label:"Satellite Marker",helpId:"satelliteMarker"},{key:"orbitalPlaneRing",label:"Orbital Plane Ring",helpId:"orbitalPlaneRing"},{key:"eclipseSegments",label:"Eclipse Segments",helpId:"eclipseSegments",legend:[[`${ft.split(" ")[0]} bg-current`,"sunlit"],[Pi.eclipsed,"in shadow"]]},{key:"raanVector",label:"RAAN Vector",helpId:"raanVector"},{key:"eclipseRegions",label:"Eclipse Regions",helpId:"eclipseRegions",legend:[[Pi.regionAlways,"always eclipsed"],[Pi.regionSome,"sometimes"],[Pi.regionNever,"never"]]}];return F.jsxs("div",{className:"rounded-lg bg-white/5 px-3 py-2 ring-1 ring-inset ring-white/5",children:[F.jsx("div",{className:`text-xs font-semibold ${ft.split(" ")[0]}`,children:A.name}),F.jsx("div",{className:"mt-2 space-y-1.5",children:Ot.map(et=>F.jsxs("div",{children:[F.jsxs("div",{className:"flex w-full items-center justify-between gap-3",children:[F.jsxs("button",{type:"button",className:"flex flex-1 items-center gap-3 text-left",onClick:()=>$(A.id,et.key),children:[F.jsx(mp,{checked:!!Mt[et.key],colorClass:ft}),F.jsx("span",{children:et.label})]}),F.jsx(Qi,{onRequestHelp:c,helpId:et.helpId})]}),et.legend&&Mt[et.key]?F.jsx(gR,{items:et.legend}):null]},et.key))})]},A.id)})}):null]}),F.jsxs("div",{children:[F.jsxs("button",{type:"button",className:"flex w-full items-center justify-between",onClick:()=>x(A=>!A),children:[F.jsx("div",{className:Zu,children:"Sun & curves"}),F.jsx(tr,{open:S,className:"h-3 w-3 text-white/60"})]}),S?F.jsx("div",{className:"mt-2 space-y-2",children:[{key:"analemma",label:"Analemma",colorClass:Pi.analemma,helpId:"analemma"},{key:"subSolarPoint",label:"Sub-Solar Point",colorClass:Pi.subSolarPoint,helpId:"subSolarPoint"},{key:"sunDirectionLine",label:"Sun Direction Line",colorClass:Pi.sunDirectionLine,helpId:"sunDirectionLine"},{key:"terminator",label:"Terminator",colorClass:Pi.terminator,helpId:"terminator"}].map(A=>F.jsxs("div",{className:"flex w-full items-center justify-between gap-3",children:[F.jsxs("button",{type:"button",className:"flex flex-1 items-center gap-3 text-left",onClick:()=>Q("vectors",A.key),children:[F.jsx(mp,{checked:!!I.config.display.vectors[A.key],colorClass:A.colorClass}),F.jsx("span",{children:A.label})]}),F.jsx(Qi,{onRequestHelp:c,helpId:A.helpId})]},A.key))}):null]}),F.jsxs("div",{children:[F.jsxs("button",{type:"button",className:"flex w-full items-center justify-between",onClick:()=>U(A=>!A),children:[F.jsx("div",{className:Zu,children:"Reference"}),F.jsx(tr,{open:w,className:"h-3 w-3 text-white/60"})]}),w?F.jsx("div",{className:"mt-2 space-y-2",children:[{key:"latLonGrid",label:"Lat/Lon Grid",colorClass:Pi.latLonGrid,helpId:"latLonGrid"},{key:"otherFrameAxes",label:"Frame Axes",colorClass:Pi.otherFrameAxes,helpId:"otherFrameAxes"},{key:"framePlanes",label:"Frame Planes",colorClass:Pi.framePlanes,helpId:"framePlanes"},{key:"labels",label:"Labels",colorClass:Pi.labels,helpId:"labels"}].map(A=>F.jsxs("div",{className:"flex w-full items-center justify-between gap-3",children:[F.jsxs("button",{type:"button",className:"flex flex-1 items-center gap-3 text-left",onClick:()=>Q("referenceOverlays",A.key),children:[F.jsx(mp,{checked:A.key==="labels"?I.config.display.referenceOverlays.labels!==!1:!!I.config.display.referenceOverlays[A.key],colorClass:A.colorClass}),F.jsx("span",{children:A.label})]}),F.jsx(Qi,{onRequestHelp:c,helpId:A.helpId})]},A.key))}):null]})]})}):null]})]})})}const Ku={calculate:{title:"Derived quantities",body:"Live values for the active orbit: orbital period; local time of the ascending node (LTAN = 12:00 + Ω/15°); the β angle (elevation of the Sun above the orbit plane) at the current timeline day; the fraction of the current orbit spent in Earth’s cylindrical shadow; the |β| threshold above which no eclipse occurs (asin R/(R+h)); the β range and mean sun exposure over one year; and α, the sunlit-cone half-angle used by the eclipse-region map.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-eclipse"},altitudeKm:{title:"Altitude",body:"Height of the circular orbit above the WGS84 equatorial radius (6378.137 km). Altitude and inclination are linked by the sun-synchronous condition, so changing one updates the other. Altitude also sets the period, the eclipse-free β threshold and the eclipse-region cone α = 90° + acos(R/(R+h)).",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-sso"},inclinationDeg:{title:"Inclination",body:"Angle between the orbit plane and the equator. Sun-synchronous orbits are retrograde (i > 90°): the J2 nodal precession −(3/2) n J2 (R/a)² cos i must equal the mean Sun’s eastward rate of 0.9856°/day. The value shown is the exact closed-form solution for the current altitude.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-sso"},raanOffsetDeg:{title:"RAAN offset from the mean Sun (Ω)",body:"Right ascension of the ascending node measured in the MSSI frame, i.e. from the mean-Sun direction. Ω = 0° puts the ascending node at local noon (noon–midnight orbit, maximum eclipse); Ω = 90° or 270° gives a dawn–dusk orbit (LTAN 18:00 / 06:00, minimum eclipse). For an exact SSO this angle is constant all year.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-sso"},initialMeanAnomalyDeg:{title:"Initial mean anomaly",body:"Argument of latitude of the satellite at day 0 (circular orbit, so mean anomaly = true anomaly = angle from the ascending node). Only moves the satellite marker along the ring.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-sso"},coordinateFrame:{title:"Coordinate frame",body:"ECI (Earth-Centred Inertial, J2000): x toward the vernal equinox, nothing rotates with time; SSO planes visibly precess (0.9856°/day) and the Sun circles the sky once a year along the ecliptic. MSSI (Mean-Sun Synchronous Inertial): ECI rotated about the spin axis by the mean solar longitude, so x always points at the mean Sun. SSO planes are frozen, and the true Sun traces the analemma around +x.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-frames"},viewMode:{title:"Viewpoint",body:"Earth-centred: the usual view, drawn in the selected frame (ECI or MSSI). Sun-centred: the Sun sits at the origin and the Earth travels its real orbit (shape, orientation and timing from the same ephemeris; perihelion in early January) with month and season markers. The Earth, its frames and orbits are enlarged about 1000× and the Sun shrunk so everything is visible — the orbit itself is to scale. Watch the amber MSSI x axis keep pointing at the Sun while the indigo ECI axes stay parallel to the fixed vernal-equinox line, and a sun-synchronous ring keep its angle to the Sun all year.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-frames"},earthTextureMode:{title:"Earth",body:"Realistic: the globe spins with Greenwich sidereal time (GMST) — one turn per solar day in MSSI (365.24 per year), one per sidereal day in ECI (366.24); at day 0 (J2000 epoch, 12:00 UT) Greenwich sits under the mean Sun. At year-scale playback speeds that is many turns per second, so the spin strobes; use the “1 d / 6 s” playback speed to watch a rotation. Still: daily rotation is ignored and the texture stays fixed in the display frame. Hidden: the globe is replaced by a faint ghost sphere so the coordinate frames, planes and orbits can be seen through it.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-frames"},groundTrack:{title:"Ground track",body:"Projection of the orbit onto the sphere in the display frame (the sub-satellite great circle). In Still mode this is the path traced on the surface; with eclipse segments on, it is coloured by sunlight/shadow.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-sso"},satelliteMarker:{title:"Satellite marker",body:"Current satellite position at the orbit altitude, with a tether to the sub-satellite point. Moves with the timeline (one revolution per orbital period).",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-sso"},orbitalPlaneRing:{title:"Orbital plane ring",body:"The full circular orbit drawn in 3-D at radius R + h — the “SSO plane ring” of the notebooks. Frozen in MSSI, precessing in ECI.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-sso"},eclipseSegments:{title:"Eclipse segments",body:"Colours the ring and ground track by the cylindrical-shadow test at the current time: orbit colour = sunlit, red = in Earth’s shadow (night side and within one Earth radius of the Sun–Earth axis).",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-eclipse"},raanVector:{title:"RAAN vector",body:"Dashed line from Earth’s centre to the ascending node on the equatorial plane. In MSSI its angle from +x is the RAAN offset Ω; the LTAN is 12:00 + Ω/15°.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-sso"},eclipseRegions:{title:"Eclipse-time regions",body:"Classifies every direction on the sphere (in MSSI) by whether a point of this orbit’s shell in that direction is sunlit at some/all/no time of year: purple = always eclipsed, orange = sometimes, green = never. The cone half-angle α = 90° + acos(R/(R+h)) depends on altitude. ∂U (purple line) bounds the ever-sunlit set, ∂I (orange line) bounds the always-sunlit set. An orbit is eclipse-free all year iff its ring stays inside the green region.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-regions"},analemma:{title:"Analemma",body:"Locus of the sub-solar point over one year in the MSSI frame: a figure-8 of ±23.44° in latitude and ±4° in longitude (longitude = −Equation of Time), caused by Earth’s orbital eccentricity and axial tilt. In ECI the same locus is simply the ecliptic (dashed), while the figure-8 drawn is the MSSI curve carried along with the mean Sun.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-sun"},subSolarPoint:{title:"Sub-solar point",body:"Where the true Sun is directly overhead at the current timeline day. It always lies on the analemma.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-sun"},sunDirectionLine:{title:"Sun direction line",body:"Ray from Earth’s centre toward the true Sun (USNO low-precision ephemeris). The scene’s lighting comes from this direction.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-sun"},terminator:{title:"Terminator",body:"Day/night boundary: the great circle perpendicular to the Sun direction.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-eclipse"},latLonGrid:{title:"Lat/Lon grid",body:"Reference graticule fixed in the display frame (20° parallels, 30° meridians). The brighter meridian is the frame’s x axis: vernal equinox in ECI, mean Sun in MSSI.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-frames"},framePlanes:{title:"Frame planes",body:"Draws the coordinate planes through Earth’s centre, colour-coded by frame: the shared equatorial plane (xy) in grey, the ECI xz/yz planes in indigo and the MSSI xz/yz planes in amber (the MSSI xz-plane is the noon–midnight meridian plane, the yz-plane the dawn–dusk plane). Edges are solid for the displayed frame and dashed for the other. Hide the Earth to see them clearly.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-frames"},labels:{title:"Labels",body:"Shows or hides all text labels in the 3-D scene. Labels keep a constant size on screen, so when you zoom out the secondary ones (axis y/z, planes, nodes, calendar markers) hide automatically and only the essential ones (orbit names, Sun) remain; zoom in to see the rest.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-frames"},otherFrameAxes:{title:"Frame axes",body:"Shows the x and y axes of both frames and the shared z (spin) axis: solid for the displayed frame, dashed for the other one. In MSSI the vernal-equinox axis turns once a year; in ECI the mean-Sun axis does.",learnMoreLabel:"Whitepaper",learnMoreUrl:"#wp-frames"}};function vR(r,{limit:t=100}={}){const[n,a]=ee.useState(()=>({past:[],present:r(),future:[]})),l=n.present,c=ee.useCallback(g=>{a(_=>{const v=typeof g=="function"?g(_.present):g;if(ny(v,_.present))return _;const b=[..._.past,_.present];return{past:b.length>t?b.slice(b.length-t):b,present:v,future:[]}})},[t]),u=ee.useCallback(()=>{a(g=>{if(!g.past.length)return g;const _=g.past[g.past.length-1];return{past:g.past.slice(0,-1),present:_,future:[g.present,...g.future]}})},[]),d=ee.useCallback(()=>{a(g=>{if(!g.future.length)return g;const _=g.future[0];return{past:[...g.past,g.present],present:_,future:g.future.slice(1)}})},[]),m=n.past.length>0,p=n.future.length>0;return ee.useMemo(()=>({history:n,model:l,setModel:c,undo:u,redo:d,canUndo:m,canRedo:p}),[n,l,c,u,d,m,p])}function xR({playing:r,setPlaying:t,valueDays:n,setValueDays:a,durationMs:l=15e3,totalDays:c=365.24}){const u=ee.useRef(null),d=ee.useRef(0),m=ee.useRef(a),p=ee.useRef(t);m.current=a,p.current=t,ee.useEffect(()=>{if(!r){u.current=null;return}u.current=null,d.current=n;let g=0;const _=d.current,v=Math.max(1,l*(c-_)/c),b=M=>{u.current||(u.current=M);const R=M-u.current,S=Math.min(1,R/v),x=Dn(_+S*(c-_),2);if(m.current(x),S>=1){p.current(!1);return}g=window.requestAnimationFrame(b)};return g=window.requestAnimationFrame(b),()=>window.cancelAnimationFrame(g)},[r,l,c])}function yR({canUndo:r,canRedo:t,undo:n,redo:a}){ee.useEffect(()=>{const l=c=>{const u=c.target,d=u?.tagName;if(d==="INPUT"||d==="TEXTAREA"||d==="SELECT"||u?.isContentEditable)return;const p=String(c.key).toLowerCase();if(c.metaKey||c.ctrlKey){if(p==="z"&&c.shiftKey){t&&(c.preventDefault(),a());return}if(p==="z"){r&&(c.preventDefault(),n());return}p==="y"&&t&&(c.preventDefault(),a())}};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[r,t,n,a])}function SR(){const r={id:"o1",name:"Orbit 1",locked:!0,altitudeKm:800,inclinationDeg:Dn(cn(Xl(800),or,lr),2),raanOffsetDeg:260,initialMeanAnomalyDeg:3},t={id:"v_default",name:"Default View",locked:!0,config:{toggles:{coordinateFrame:"MSSI",earthTextureMode:"realistic",viewMode:"geo"},display:{orbits:{[r.id]:{groundTrack:!0,satelliteMarker:!0,orbitalPlaneRing:!1,eclipseSegments:!1,raanVector:!1,eclipseRegions:!1}},vectors:{analemma:!1,subSolarPoint:!0,sunDirectionLine:!1,terminator:!1},referenceOverlays:{latLonGrid:!1,otherFrameAxes:!1,framePlanes:!1,labels:!0}}},savedConfig:null};t.savedConfig=mr(t.config);const n={orbits:[r]},a=["overview","eclipse","frames","helio"].map(l=>{const c=Gl[l],u=tS(n,c);return{id:`v_${l}`,name:c.name,locked:!0,config:u,savedConfig:mr(u)}});return{orbits:[r],activeOrbitId:r.id,views:[...a,t],activeViewId:a[0].id}}function bR(r){const t=new URLSearchParams(r);if(!["view","alt","raan","day","cam","frame","mode"].some(g=>t.has(g)))return null;const n={},a=t.get("view"),l=t.get("frame")==="EMI"?"ECI":t.get("frame");a&&Gl[a]&&(n.preset={...Gl[a]},(l==="ECI"||l==="MSSI")&&(n.preset.coordinateFrame=l,l!==Gl[a].coordinateFrame&&(n.preset.name=`${Gl[a].name} (${l})`)));const c=Number.parseFloat(t.get("alt")),u=Number.parseFloat(t.get("raan"));(Number.isFinite(c)||Number.isFinite(u))&&(n.orbitParams={},Number.isFinite(c)&&(n.orbitParams.altitudeKm=Math.min(2e3,Math.max(100,c))),Number.isFinite(u)&&(n.orbitParams.raanOffsetDeg=(u%360+360)%360));const d=Number.parseFloat(t.get("day"));Number.isFinite(d)&&(n.timeDays=Math.min(365.24,Math.max(0,d)));const m=t.get("mode");n.preset&&(m==="helio"||m==="geo")&&(n.preset.viewMode=m);const p=t.get("cam");return(p&&pm[p]||p&&["follow","above","side"].includes(p))&&(n.camera=p),n}function MR(){const[r,t]=ee.useState(()=>typeof window<"u"&&window.location.hash.startsWith("#wp-")?"whitepaper":"visualizer"),[n,a]=ee.useState(!0),[l,c]=ee.useState(!1),[u,d]=ee.useState(0),[m,p]=ee.useState(!1),[g,_]=ee.useState(30),[v,b]=ee.useState(null),M=u>=365.24-1e-6,[R,S]=ee.useState(null),{model:x,setModel:w,undo:U,redo:C,canUndo:I,canRedo:B}=vR(SR,{limit:100}),O=ee.useMemo(()=>x.views.find(yt=>yt.id===x.activeViewId)??x.views[0],[x]),[T,N]=ee.useState({open:!1,kind:null,id:null}),ot=yt=>w(Ut=>iR(Ut,yt)),G=()=>{w(yt=>aR(yt))},Y=yt=>{w(Ut=>sR(Ut,yt))},tt=yt=>{w(Ut=>oR(Ut,yt))},$=yt=>{w(Ut=>rR(Ut,yt))},Q=yt=>{N({open:!0,kind:"view",id:yt})},P=yt=>{N({open:!0,kind:"orbit",id:yt})},H=()=>{!T.id||!T.kind||(T.kind==="view"&&Y(T.id),T.kind==="orbit"&&tt(T.id),N({open:!1,kind:null,id:null}))},ct=()=>{N({open:!1,kind:null,id:null})},pt=yt=>{S(yt)},bt=()=>{S(null)},A=r==="whitepaper",V=_e,ft=A?"bg-white":"bg-gradient-to-b from-indigo-950 via-black to-black";ee.useEffect(()=>(document.documentElement.classList.toggle("wp-light",A),()=>document.documentElement.classList.remove("wp-light")),[A]);const[Mt,Ot]=ee.useState(0),et=yt=>{yt!==r&&(r==="whitepaper"&&Ot(window.scrollY),t(yt))};ee.useEffect(()=>{window.scrollTo({top:r==="whitepaper"?Mt:0,behavior:"instant"})},[r]);const vt=yt=>{if(ey[yt]){b(Oe=>({helio:yt,nonce:(Oe?.nonce??0)+1}));return}const Ut=pm[yt];if(!Ut)return;const j=4.2/(Math.hypot(Ut.x,Ut.y,Ut.z)||1);b(Oe=>({x:Ut.x*j,y:Ut.y*j,z:Ut.z*j,nonce:(Oe?.nonce??0)+1}))},Et=(O.config.toggles.viewMode??"geo")==="helio",kt=ee.useRef(0),Qt=yt=>{const Ut=u,Me=performance.now(),j=++kt.current,Oe=1e3,re=De=>{if(kt.current!==j)return;const It=Math.min(1,(De-Me)/Oe),z=It<.5?4*It*It*It:1-Math.pow(-2*It+2,3)/2;d(Dn(Ut+(yt-Ut)*z,2)),It<1&&window.requestAnimationFrame(re)};window.requestAnimationFrame(re)},te=({preset:yt,timeDays:Ut,camera:Me,orbitParams:j})=>{w(Oe=>{let re=Oe;if(j){const De=re.orbits.find(z=>z.id===re.activeOrbitId)??re.orbits[0],It={...j};It.altitudeKm!=null&&(It.inclinationDeg=Dn(Xl(It.altitudeKm),2)),re=$y(re,De.id,It)}return yt&&(re=dR(re,yt)),re}),Ut!=null&&(p(!1),Qt(Dn(cn(Ut,0,365.24),2))),et("visualizer"),Me&&window.setTimeout(()=>vt(Me),60)};ee.useEffect(()=>{if(V)return window.__k0app={showInViewer:te,setModel:w,setTimelineDays:d,moveCamera:vt,setCameraRequest:b},()=>{delete window.__k0app}}),ee.useEffect(()=>{const yt=window.location.hash;yt.startsWith("#wp-")&&window.setTimeout(()=>document.getElementById(yt.slice(1))?.scrollIntoView({block:"start"}),150)},[]);const[Qe,Se]=ee.useState(!1);ee.useEffect(()=>{if(Qe||V)return;Se(!0);const yt=bR(window.location.search);yt&&window.setTimeout(()=>te(yt),0)},[Qe]);const ye=()=>{c(yt=>(yt||a(!1),!yt))};return ee.useEffect(()=>{if(!l)return;const yt=Ut=>{Ut.key==="Escape"&&c(!1)};return window.addEventListener("keydown",yt),()=>window.removeEventListener("keydown",yt)},[l]),yR({canUndo:I,canRedo:B,undo:U,redo:C}),xR({playing:m,setPlaying:p,valueDays:u,setValueDays:d,durationMs:g*1e3}),V?F.jsx("div",{className:"h-dvh w-full bg-white",children:F.jsx($x,{coordinateFrame:O.config.toggles.coordinateFrame??"MSSI",earthTextureMode:O.config.toggles.earthTextureMode??"realistic",viewMode:O.config.toggles.viewMode??"geo",orbits:x.orbits,displayOrbits:O.config.display.orbits,timeDays:u,vectors:O.config.display.vectors,referenceOverlays:O.config.display.referenceOverlays,cameraRequest:v})}):F.jsxs("div",{className:`flex min-h-dvh ${ft} ${A?"":"select-none"}`,children:[F.jsx(MM,{open:T.open,title:T.kind==="orbit"?"Delete orbit?":"Delete view?",body:(()=>{if(T.kind==="orbit"){const Ut=x.orbits.find(Me=>Me.id===T.id);return Ut?`This will permanently delete “${Ut.name}”.`:""}const yt=x.views.find(Ut=>Ut.id===T.id);return yt?`This will permanently delete “${yt.name}”.`:""})(),confirmLabel:"Delete",cancelLabel:"Cancel",onConfirm:H,onCancel:ct}),F.jsx(EM,{open:!!R,title:R&&Ku[R]?.title||"Help",body:R?Ku[R]?.body:"",learnMoreLabel:R&&Ku[R]?.learnMoreLabel||"Learn more",onLearnMore:()=>{const yt=R?Ku[R]?.learnMoreUrl:void 0;bt();{window.open(`https://k0webapp.web.app/${yt&&yt.startsWith("#")?yt:""}`,"_blank","noopener,noreferrer");return}},onClose:bt}),l||A?null:F.jsx(_R,{open:n,model:x,setModel:w,timeDays:u,onRequestDeleteOrbit:P,onRequestHelp:pt}),F.jsxs("div",{className:`relative flex min-h-dvh flex-1 flex-col ${A?"":"overflow-hidden"}`,children:[r==="visualizer"&&l?F.jsx("div",{className:"pointer-events-auto absolute right-4 top-4 z-40",children:F.jsx("button",{type:"button",className:"pointer-events-auto",onClick:()=>c(!1),"aria-label":"Exit fullscreen",children:F.jsx(Il,{className:"text-white/90 hover:bg-white/10",children:F.jsx(Ov,{})})})}):null,l?null:F.jsxs("header",{className:`z-30 flex items-center justify-between px-4 ${A?"sticky top-0 h-24 bg-white/80 pb-2 text-slate-900 backdrop-blur-md [-webkit-backdrop-filter:blur(12px)] [mask-image:linear-gradient(to_bottom,black_calc(100%-14px),transparent)]":"relative h-20 text-white"}`,children:[F.jsxs("div",{className:"flex items-center gap-2",children:[F.jsx("button",{type:"button",className:"pointer-events-auto",onClick:()=>a(yt=>!yt),children:F.jsx(Il,{className:A?"text-slate-800 hover:bg-black/5":"text-white/90 hover:bg-white/10",children:F.jsx(mM,{})})}),A?null:F.jsxs(F.Fragment,{children:[F.jsx("button",{type:"button",className:"pointer-events-auto disabled:cursor-default",onClick:U,disabled:!I,"aria-label":"Undo",title:"Undo (Ctrl/Cmd+Z)",children:F.jsx(Il,{className:`${A?"text-slate-800 hover:bg-black/5":"text-white/90 hover:bg-white/10"} ${I?"":"opacity-30 hover:bg-transparent"}`,children:F.jsx(gM,{})})}),F.jsx("button",{type:"button",className:"pointer-events-auto disabled:cursor-default",onClick:C,disabled:!B,"aria-label":"Redo",title:"Redo (Ctrl/Cmd+Shift+Z)",children:F.jsx(Il,{className:`${A?"text-slate-800 hover:bg-black/5":"text-white/90 hover:bg-white/10"} ${B?"":"opacity-30 hover:bg-transparent"}`,children:F.jsx(_M,{})})})]})]}),F.jsx("div",{className:"absolute left-1/2 -translate-x-1/2",children:F.jsx("div",{className:"rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white",children:"Kelvin Zero · Orbit Visualizer"})}),F.jsxs("div",{className:"flex items-center gap-2",children:[A?F.jsxs("a",{href:"/Kelvin-Zero-Whitepaper.pdf",target:"_blank",rel:"noopener noreferrer",className:`pointer-events-auto inline-flex h-9 items-center gap-1.5 rounded-full px-3 text-xs font-semibold ring-1 ring-inset ${A?"bg-slate-900/[0.06] text-slate-800 ring-slate-900/10 hover:bg-slate-900/10":"bg-white/10 text-white/90 ring-white/10 hover:bg-white/15"}`,title:"Download the whitepaper as a PDF",children:[F.jsxs("svg",{viewBox:"0 0 24 24",className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"}),F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14 3v5h5M9 13h6M9 17h6"})]}),"PDF"]}):null,A?null:F.jsx("button",{type:"button",className:"pointer-events-auto",onClick:ye,"aria-label":"Toggle fullscreen",children:F.jsx(Il,{className:"text-white/90 hover:bg-white/10",children:F.jsx(Ov,{})})})]})]}),r==="visualizer"?F.jsxs("main",{className:`relative z-10 flex flex-1 flex-col ${l?"pb-0":"pb-6"}`,children:[l?null:F.jsx("div",{className:"flex justify-end px-6 pt-2",children:F.jsxs("div",{className:"hidden max-w-full items-start gap-3 sm:flex",children:[F.jsx("div",{className:"flex flex-1 items-start gap-3 overflow-x-auto pb-3 [scrollbar-gutter:stable] [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.25)_transparent] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb:hover]:bg-white/30",children:x.views.map(yt=>{const Ut=yt.id===x.activeViewId,Me=yt.savedConfig?!ny(yt.config,yt.savedConfig):!1;return Ut?F.jsxs("span",{className:"inline-flex flex-none items-center gap-2 rounded-full bg-sky-500 px-3 py-1 text-xs font-semibold text-white ring-1 ring-inset ring-white/10",children:[yt.name,!yt.locked||Me?F.jsx("button",{type:"button",className:"text-white/70","aria-label":Me?`Reset ${yt.name}`:`Delete ${yt.name}`,onClick:()=>{if(Me){$(yt.id);return}Q(yt.id)},children:"×"}):null]},yt.id):F.jsxs("span",{className:"inline-flex flex-none items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 ring-1 ring-inset ring-white/10",children:[F.jsx("button",{type:"button",className:"hover:text-white",onClick:()=>ot(yt.id),"aria-label":`Select ${yt.name}`,children:yt.name}),yt.locked?null:F.jsx("button",{type:"button",className:"text-white/60 hover:text-white/80","aria-label":`Delete ${yt.name}`,onClick:j=>{j.stopPropagation(),Q(yt.id)},children:"×"})]},yt.id)})}),F.jsx("button",{type:"button",className:"inline-flex h-6 w-6 flex-none items-center justify-center self-start rounded-full bg-white/10 text-white ring-1 ring-inset ring-white/10 hover:bg-white/15",onClick:G,"aria-label":"Add view",children:F.jsx(iy,{className:"h-3.5 w-3.5"})})]})}),F.jsx("div",{className:`flex flex-1 flex-col ${l?"px-0 pt-0":"px-6 pt-6"}`,children:F.jsx("div",{className:"flex flex-1 flex-col",children:F.jsx("div",{className:"relative flex flex-1",children:F.jsx("div",{className:`absolute inset-0 flex items-center justify-center bg-white/5 ${l?"":"rounded-2xl ring-1 ring-inset ring-white/10"}`,children:F.jsxs("div",{className:`relative h-full w-full ${l?"":"overflow-hidden rounded-2xl"}`,children:[F.jsxs("div",{className:"pointer-events-none absolute left-4 top-4 z-10 flex flex-col items-start gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/60",children:[F.jsxs("div",{className:"flex items-center gap-1.5",children:[F.jsx("span",{className:"rounded-md bg-slate-950/50 px-2 py-1 text-white/85 ring-1 ring-inset ring-white/10",children:Et?"Sun-centred · ecliptic":O.config.toggles.coordinateFrame??"MSSI"}),F.jsx("span",{className:"rounded-md bg-slate-950/50 px-2 py-1 ring-1 ring-inset ring-white/10",children:{still:"Still Earth",hidden:"Earth hidden"}[O.config.toggles.earthTextureMode??"realistic"]??"Rotating Earth"}),F.jsx("span",{className:"rounded-md bg-slate-950/50 px-2 py-1 tabular-nums ring-1 ring-inset ring-white/10",children:Pv(u)})]}),Et?F.jsx("span",{className:"rounded-md bg-amber-400/10 px-2 py-1 normal-case tracking-normal text-amber-200/90 ring-1 ring-inset ring-amber-300/20",children:"Orbit shape, orientation and timing are real (e = 0.0167) · Earth ≈1000× enlarged · Sun not to scale"}):null]}),F.jsx($x,{coordinateFrame:O.config.toggles.coordinateFrame??"MSSI",earthTextureMode:O.config.toggles.earthTextureMode??"realistic",viewMode:O.config.toggles.viewMode??"geo",orbits:x.orbits,displayOrbits:O.config.display.orbits,timeDays:u,vectors:O.config.display.vectors,referenceOverlays:O.config.display.referenceOverlays,cameraRequest:v}),F.jsx("div",{className:`absolute top-4 z-10 flex items-center gap-1 rounded-md bg-slate-950/50 p-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] ring-1 ring-inset ring-white/10 ${l?"right-[4.25rem]":"right-4"}`,role:"group","aria-label":"Camera",children:Object.entries(Et?ey:pm).map(([yt,Ut])=>F.jsx("button",{type:"button",className:"rounded px-2 py-1 text-white/60 hover:bg-white/10 hover:text-white",onClick:()=>vt(yt),title:`Look from the ${Ut.label.toLowerCase()}`,children:Ut.label},yt))})]})})})})}),F.jsx("div",{className:`mt-auto ${l?"px-6 pb-4 pt-4":"px-6 pb-4 pt-6"}`,children:F.jsxs("div",{className:"flex w-full items-center gap-4 text-white/80",children:[F.jsxs("div",{className:"w-[168px] flex-none leading-tight",children:[F.jsxs("div",{className:"text-[11px] font-semibold tabular-nums text-white/90",children:["Day ",u.toFixed(2)]}),F.jsx("div",{className:"text-[11px] tabular-nums text-white/50",children:Pv(u)})]}),F.jsx("button",{type:"button",className:"inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 ring-1 ring-inset ring-white/10",onClick:()=>{if(!m&&M){d(0),p(!0);return}p(yt=>!yt)},"aria-label":m?"Pause timeline":M?"Restart timeline":"Play timeline",children:m?F.jsx(vM,{}):M?F.jsx(yM,{}):F.jsx(xM,{})}),F.jsx("div",{className:"flex-1",onPointerDown:()=>{m&&p(!1)},children:F.jsx(eR,{valueDays:u,onChangeDays:yt=>{m&&p(!1),d(Dn(cn(yt,0,365.24),2))}})}),F.jsx("div",{className:"hidden flex-none items-center gap-1 rounded-full bg-white/5 p-0.5 ring-1 ring-inset ring-white/10 sm:flex",role:"radiogroup","aria-label":"Playback speed",children:[[15,"24 d/s","Fast: one year in 15 s (Earth spins ~24× per second — rotation strobes)"],[30,"12 d/s","Normal: one year in 30 s"],[120,"3 d/s","Slow: one year in 2 min"],[2191,"1 d / 6 s","Day: one day every 6 s — watch the Earth rotate (a year takes ~36 min)"]].map(([yt,Ut,Me])=>F.jsx("button",{type:"button",role:"radio","aria-checked":g===yt,className:`rounded-full px-2.5 py-1 text-[11px] font-semibold tabular-nums ${g===yt?"bg-white/15 text-white":"text-white/55 hover:text-white/85"}`,onClick:()=>_(yt),title:Me,children:Ut},yt))})]})})]}):F.jsx("main",{className:"relative z-10 flex flex-1 flex-col",children:F.jsx(Whitepaper,{model:x,onShowInViewer:te})})]})]})}pM.createRoot(document.getElementById("root")).render(F.jsx(ee.StrictMode,{children:F.jsx(MR,{})}));
