function Nf(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}function dh(a){if(a.__esModule)return a;var c=a.default;if(typeof c=="function"){var f=function h(){return this instanceof h?Reflect.construct(c,arguments,this.constructor):c.apply(this,arguments)};f.prototype=c.prototype}else f={};return Object.defineProperty(f,"__esModule",{value:!0}),Object.keys(a).forEach(function(h){var g=Object.getOwnPropertyDescriptor(a,h);Object.defineProperty(f,h,g.get?g:{enumerable:!0,get:function(){return a[h]}})}),f}var cf={exports:{}},xs={},ff={exports:{}},on={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yd;function ph(){if(yd)return on;yd=1;var a=Symbol.for("react.element"),c=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),w=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),R=Symbol.iterator;function b(x){return x===null||typeof x!="object"?null:(x=R&&x[R]||x["@@iterator"],typeof x=="function"?x:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,F={};function M(x,T,se){this.props=x,this.context=T,this.refs=F,this.updater=se||W}M.prototype.isReactComponent={},M.prototype.setState=function(x,T){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,T,"setState")},M.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function A(){}A.prototype=M.prototype;function j(x,T,se){this.props=x,this.context=T,this.refs=F,this.updater=se||W}var U=j.prototype=new A;U.constructor=j,L(U,M.prototype),U.isPureReactComponent=!0;var te=Array.isArray,oe=Object.prototype.hasOwnProperty,ge={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function Y(x,T,se){var re,ee={},le=null,ne=null;if(T!=null)for(re in T.ref!==void 0&&(ne=T.ref),T.key!==void 0&&(le=""+T.key),T)oe.call(T,re)&&!z.hasOwnProperty(re)&&(ee[re]=T[re]);var ue=arguments.length-2;if(ue===1)ee.children=se;else if(1<ue){for(var ye=Array(ue),je=0;je<ue;je++)ye[je]=arguments[je+2];ee.children=ye}if(x&&x.defaultProps)for(re in ue=x.defaultProps,ue)ee[re]===void 0&&(ee[re]=ue[re]);return{$$typeof:a,type:x,key:le,ref:ne,props:ee,_owner:ge.current}}function $(x,T){return{$$typeof:a,type:x.type,key:T,ref:x.ref,props:x.props,_owner:x._owner}}function Pe(x){return typeof x=="object"&&x!==null&&x.$$typeof===a}function tn(x){var T={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(se){return T[se]})}var Xe=/\/+/g;function Ze(x,T){return typeof x=="object"&&x!==null&&x.key!=null?tn(""+x.key):T.toString(36)}function cn(x,T,se,re,ee){var le=typeof x;(le==="undefined"||le==="boolean")&&(x=null);var ne=!1;if(x===null)ne=!0;else switch(le){case"string":case"number":ne=!0;break;case"object":switch(x.$$typeof){case a:case c:ne=!0}}if(ne)return ne=x,ee=ee(ne),x=re===""?"."+Ze(ne,0):re,te(ee)?(se="",x!=null&&(se=x.replace(Xe,"$&/")+"/"),cn(ee,T,se,"",function(je){return je})):ee!=null&&(Pe(ee)&&(ee=$(ee,se+(!ee.key||ne&&ne.key===ee.key?"":(""+ee.key).replace(Xe,"$&/")+"/")+x)),T.push(ee)),1;if(ne=0,re=re===""?".":re+":",te(x))for(var ue=0;ue<x.length;ue++){le=x[ue];var ye=re+Ze(le,ue);ne+=cn(le,T,se,ye,ee)}else if(ye=b(x),typeof ye=="function")for(x=ye.call(x),ue=0;!(le=x.next()).done;)le=le.value,ye=re+Ze(le,ue++),ne+=cn(le,T,se,ye,ee);else if(le==="object")throw T=String(x),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.");return ne}function Dn(x,T,se){if(x==null)return x;var re=[],ee=0;return cn(x,re,"","",function(le){return T.call(se,le,ee++)}),re}function dn(x){if(x._status===-1){var T=x._result;T=T(),T.then(function(se){(x._status===0||x._status===-1)&&(x._status=1,x._result=se)},function(se){(x._status===0||x._status===-1)&&(x._status=2,x._result=se)}),x._status===-1&&(x._status=0,x._result=T)}if(x._status===1)return x._result.default;throw x._result}var an={current:null},X={transition:null},V={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:X,ReactCurrentOwner:ge};function H(){throw Error("act(...) is not supported in production builds of React.")}return on.Children={map:Dn,forEach:function(x,T,se){Dn(x,function(){T.apply(this,arguments)},se)},count:function(x){var T=0;return Dn(x,function(){T++}),T},toArray:function(x){return Dn(x,function(T){return T})||[]},only:function(x){if(!Pe(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},on.Component=M,on.Fragment=f,on.Profiler=g,on.PureComponent=j,on.StrictMode=h,on.Suspense=k,on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,on.act=H,on.cloneElement=function(x,T,se){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var re=L({},x.props),ee=x.key,le=x.ref,ne=x._owner;if(T!=null){if(T.ref!==void 0&&(le=T.ref,ne=ge.current),T.key!==void 0&&(ee=""+T.key),x.type&&x.type.defaultProps)var ue=x.type.defaultProps;for(ye in T)oe.call(T,ye)&&!z.hasOwnProperty(ye)&&(re[ye]=T[ye]===void 0&&ue!==void 0?ue[ye]:T[ye])}var ye=arguments.length-2;if(ye===1)re.children=se;else if(1<ye){ue=Array(ye);for(var je=0;je<ye;je++)ue[je]=arguments[je+2];re.children=ue}return{$$typeof:a,type:x.type,key:ee,ref:le,props:re,_owner:ne}},on.createContext=function(x){return x={$$typeof:w,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:y,_context:x},x.Consumer=x},on.createElement=Y,on.createFactory=function(x){var T=Y.bind(null,x);return T.type=x,T},on.createRef=function(){return{current:null}},on.forwardRef=function(x){return{$$typeof:E,render:x}},on.isValidElement=Pe,on.lazy=function(x){return{$$typeof:O,_payload:{_status:-1,_result:x},_init:dn}},on.memo=function(x,T){return{$$typeof:_,type:x,compare:T===void 0?null:T}},on.startTransition=function(x){var T=X.transition;X.transition={};try{x()}finally{X.transition=T}},on.unstable_act=H,on.useCallback=function(x,T){return an.current.useCallback(x,T)},on.useContext=function(x){return an.current.useContext(x)},on.useDebugValue=function(){},on.useDeferredValue=function(x){return an.current.useDeferredValue(x)},on.useEffect=function(x,T){return an.current.useEffect(x,T)},on.useId=function(){return an.current.useId()},on.useImperativeHandle=function(x,T,se){return an.current.useImperativeHandle(x,T,se)},on.useInsertionEffect=function(x,T){return an.current.useInsertionEffect(x,T)},on.useLayoutEffect=function(x,T){return an.current.useLayoutEffect(x,T)},on.useMemo=function(x,T){return an.current.useMemo(x,T)},on.useReducer=function(x,T,se){return an.current.useReducer(x,T,se)},on.useRef=function(x){return an.current.useRef(x)},on.useState=function(x){return an.current.useState(x)},on.useSyncExternalStore=function(x,T,se){return an.current.useSyncExternalStore(x,T,se)},on.useTransition=function(){return an.current.useTransition()},on.version="18.3.1",on}var wd;function bu(){return wd||(wd=1,ff.exports=ph()),ff.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd;function hh(){if(xd)return xs;xd=1;var a=bu(),c=Symbol.for("react.element"),f=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,g=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function w(E,k,_){var O,R={},b=null,W=null;_!==void 0&&(b=""+_),k.key!==void 0&&(b=""+k.key),k.ref!==void 0&&(W=k.ref);for(O in k)h.call(k,O)&&!y.hasOwnProperty(O)&&(R[O]=k[O]);if(E&&E.defaultProps)for(O in k=E.defaultProps,k)R[O]===void 0&&(R[O]=k[O]);return{$$typeof:c,type:E,key:b,ref:W,props:R,_owner:g.current}}return xs.Fragment=f,xs.jsx=w,xs.jsxs=w,xs}var kd;function mh(){return kd||(kd=1,cf.exports=hh()),cf.exports}var Qg=mh(),K=bu();const vl=Nf(K);var Sc={},df={exports:{}},zr={},pf={exports:{}},hf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sd;function gh(){return Sd||(Sd=1,function(a){function c(X,V){var H=X.length;X.push(V);e:for(;0<H;){var x=H-1>>>1,T=X[x];if(0<g(T,V))X[x]=V,X[H]=T,H=x;else break e}}function f(X){return X.length===0?null:X[0]}function h(X){if(X.length===0)return null;var V=X[0],H=X.pop();if(H!==V){X[0]=H;e:for(var x=0,T=X.length,se=T>>>1;x<se;){var re=2*(x+1)-1,ee=X[re],le=re+1,ne=X[le];if(0>g(ee,H))le<T&&0>g(ne,ee)?(X[x]=ne,X[le]=H,x=le):(X[x]=ee,X[re]=H,x=re);else if(le<T&&0>g(ne,H))X[x]=ne,X[le]=H,x=le;else break e}}return V}function g(X,V){var H=X.sortIndex-V.sortIndex;return H!==0?H:X.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var y=performance;a.unstable_now=function(){return y.now()}}else{var w=Date,E=w.now();a.unstable_now=function(){return w.now()-E}}var k=[],_=[],O=1,R=null,b=3,W=!1,L=!1,F=!1,M=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U(X){for(var V=f(_);V!==null;){if(V.callback===null)h(_);else if(V.startTime<=X)h(_),V.sortIndex=V.expirationTime,c(k,V);else break;V=f(_)}}function te(X){if(F=!1,U(X),!L)if(f(k)!==null)L=!0,dn(oe);else{var V=f(_);V!==null&&an(te,V.startTime-X)}}function oe(X,V){L=!1,F&&(F=!1,A(Y),Y=-1),W=!0;var H=b;try{for(U(V),R=f(k);R!==null&&(!(R.expirationTime>V)||X&&!tn());){var x=R.callback;if(typeof x=="function"){R.callback=null,b=R.priorityLevel;var T=x(R.expirationTime<=V);V=a.unstable_now(),typeof T=="function"?R.callback=T:R===f(k)&&h(k),U(V)}else h(k);R=f(k)}if(R!==null)var se=!0;else{var re=f(_);re!==null&&an(te,re.startTime-V),se=!1}return se}finally{R=null,b=H,W=!1}}var ge=!1,z=null,Y=-1,$=5,Pe=-1;function tn(){return!(a.unstable_now()-Pe<$)}function Xe(){if(z!==null){var X=a.unstable_now();Pe=X;var V=!0;try{V=z(!0,X)}finally{V?Ze():(ge=!1,z=null)}}else ge=!1}var Ze;if(typeof j=="function")Ze=function(){j(Xe)};else if(typeof MessageChannel<"u"){var cn=new MessageChannel,Dn=cn.port2;cn.port1.onmessage=Xe,Ze=function(){Dn.postMessage(null)}}else Ze=function(){M(Xe,0)};function dn(X){z=X,ge||(ge=!0,Ze())}function an(X,V){Y=M(function(){X(a.unstable_now())},V)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(X){X.callback=null},a.unstable_continueExecution=function(){L||W||(L=!0,dn(oe))},a.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<X?Math.floor(1e3/X):5},a.unstable_getCurrentPriorityLevel=function(){return b},a.unstable_getFirstCallbackNode=function(){return f(k)},a.unstable_next=function(X){switch(b){case 1:case 2:case 3:var V=3;break;default:V=b}var H=b;b=V;try{return X()}finally{b=H}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(X,V){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var H=b;b=X;try{return V()}finally{b=H}},a.unstable_scheduleCallback=function(X,V,H){var x=a.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?x+H:x):H=x,X){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=H+T,X={id:O++,callback:V,priorityLevel:X,startTime:H,expirationTime:T,sortIndex:-1},H>x?(X.sortIndex=H,c(_,X),f(k)===null&&X===f(_)&&(F?(A(Y),Y=-1):F=!0,an(te,H-x))):(X.sortIndex=T,c(k,X),L||W||(L=!0,dn(oe))),X},a.unstable_shouldYield=tn,a.unstable_wrapCallback=function(X){var V=b;return function(){var H=b;b=V;try{return X.apply(this,arguments)}finally{b=H}}}}(hf)),hf}var Ed;function vh(){return Ed||(Ed=1,pf.exports=gh()),pf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pd;function yh(){if(Pd)return zr;Pd=1;var a=bu(),c=vh();function f(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h=new Set,g={};function y(e,n){w(e,n),w(e+"Capture",n)}function w(e,n){for(g[e]=n,e=0;e<n.length;e++)h.add(n[e])}var E=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),k=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,O={},R={};function b(e){return k.call(R,e)?!0:k.call(O,e)?!1:_.test(e)?R[e]=!0:(O[e]=!0,!1)}function W(e,n,o,i){if(o!==null&&o.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return i?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function L(e,n,o,i){if(n===null||typeof n>"u"||W(e,n,o,i))return!0;if(i)return!1;if(o!==null)switch(o.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function F(e,n,o,i,s,p,v){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=o,this.propertyName=e,this.type=n,this.sanitizeURL=p,this.removeEmptyString=v}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){M[e]=new F(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];M[n]=new F(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){M[e]=new F(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){M[e]=new F(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){M[e]=new F(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){M[e]=new F(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){M[e]=new F(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){M[e]=new F(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){M[e]=new F(e,5,!1,e.toLowerCase(),null,!1,!1)});var A=/[\-:]([a-z])/g;function j(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(A,j);M[n]=new F(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(A,j);M[n]=new F(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(A,j);M[n]=new F(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){M[e]=new F(e,1,!1,e.toLowerCase(),null,!1,!1)}),M.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){M[e]=new F(e,1,!1,e.toLowerCase(),null,!0,!0)});function U(e,n,o,i){var s=M.hasOwnProperty(n)?M[n]:null;(s!==null?s.type!==0:i||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(L(n,o,s,i)&&(o=null),i||s===null?b(n)&&(o===null?e.removeAttribute(n):e.setAttribute(n,""+o)):s.mustUseProperty?e[s.propertyName]=o===null?s.type===3?!1:"":o:(n=s.attributeName,i=s.attributeNamespace,o===null?e.removeAttribute(n):(s=s.type,o=s===3||s===4&&o===!0?"":""+o,i?e.setAttributeNS(i,n,o):e.setAttribute(n,o))))}var te=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oe=Symbol.for("react.element"),ge=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),Pe=Symbol.for("react.provider"),tn=Symbol.for("react.context"),Xe=Symbol.for("react.forward_ref"),Ze=Symbol.for("react.suspense"),cn=Symbol.for("react.suspense_list"),Dn=Symbol.for("react.memo"),dn=Symbol.for("react.lazy"),an=Symbol.for("react.offscreen"),X=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,x;function T(e){if(x===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);x=n&&n[1]||""}return`
`+x+e}var se=!1;function re(e,n){if(!e||se)return"";se=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(G){var i=G}Reflect.construct(e,[],n)}else{try{n.call()}catch(G){i=G}e.call(n.prototype)}else{try{throw Error()}catch(G){i=G}e()}}catch(G){if(G&&i&&typeof G.stack=="string"){for(var s=G.stack.split(`
`),p=i.stack.split(`
`),v=s.length-1,P=p.length-1;1<=v&&0<=P&&s[v]!==p[P];)P--;for(;1<=v&&0<=P;v--,P--)if(s[v]!==p[P]){if(v!==1||P!==1)do if(v--,P--,0>P||s[v]!==p[P]){var C=`
`+s[v].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C}while(1<=v&&0<=P);break}}}finally{se=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?T(e):""}function ee(e){switch(e.tag){case 5:return T(e.type);case 16:return T("Lazy");case 13:return T("Suspense");case 19:return T("SuspenseList");case 0:case 2:case 15:return e=re(e.type,!1),e;case 11:return e=re(e.type.render,!1),e;case 1:return e=re(e.type,!0),e;default:return""}}function le(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case ge:return"Portal";case $:return"Profiler";case Y:return"StrictMode";case Ze:return"Suspense";case cn:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case tn:return(e.displayName||"Context")+".Consumer";case Pe:return(e._context.displayName||"Context")+".Provider";case Xe:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Dn:return n=e.displayName||null,n!==null?n:le(e.type)||"Memo";case dn:n=e._payload,e=e._init;try{return le(e(n))}catch{}}return null}function ne(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(n);case 8:return n===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ue(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ye(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function je(e){var n=ye(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),i=""+e[n];if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var s=o.get,p=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return s.call(this)},set:function(v){i=""+v,p.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return i},setValue:function(v){i=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Qe(e){e._valueTracker||(e._valueTracker=je(e))}function xe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var o=n.getValue(),i="";return e&&(i=ye(e)?e.checked?"true":"false":e.value),e=i,e!==o?(n.setValue(e),!0):!1}function Je(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ln(e,n){var o=n.checked;return H({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function Ue(e,n){var o=n.defaultValue==null?"":n.defaultValue,i=n.checked!=null?n.checked:n.defaultChecked;o=ue(n.value!=null?n.value:o),e._wrapperState={initialChecked:i,initialValue:o,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function $e(e,n){n=n.checked,n!=null&&U(e,"checked",n,!1)}function en(e,n){$e(e,n);var o=ue(n.value),i=n.type;if(o!=null)i==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Le(e,n.type,o):n.hasOwnProperty("defaultValue")&&Le(e,n.type,ue(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function he(e,n,o){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var i=n.type;if(!(i!=="submit"&&i!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,o||n===e.value||(e.value=n),e.defaultValue=n}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function Le(e,n,o){(n!=="number"||Je(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var Re=Array.isArray;function fe(e,n,o,i){if(e=e.options,n){n={};for(var s=0;s<o.length;s++)n["$"+o[s]]=!0;for(o=0;o<e.length;o++)s=n.hasOwnProperty("$"+e[o].value),e[o].selected!==s&&(e[o].selected=s),s&&i&&(e[o].defaultSelected=!0)}else{for(o=""+ue(o),n=null,s=0;s<e.length;s++){if(e[s].value===o){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}n!==null||e[s].disabled||(n=e[s])}n!==null&&(n.selected=!0)}}function mn(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(f(91));return H({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ne(e,n){var o=n.value;if(o==null){if(o=n.children,n=n.defaultValue,o!=null){if(n!=null)throw Error(f(92));if(Re(o)){if(1<o.length)throw Error(f(93));o=o[0]}n=o}n==null&&(n=""),o=n}e._wrapperState={initialValue:ue(o)}}function Fe(e,n){var o=ue(n.value),i=ue(n.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),n.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),i!=null&&(e.defaultValue=""+i)}function De(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function vn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sn(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?vn(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qe,yn=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,o,i,s){MSApp.execUnsafeLocalFunction(function(){return e(n,o,i,s)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(qe=qe||document.createElement("div"),qe.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=qe.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function En(e,n){if(n){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=n;return}}e.textContent=n}var $t={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kr=["Webkit","ms","Moz","O"];Object.keys($t).forEach(function(e){Kr.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),$t[n]=$t[e]})});function Or(e,n,o){return n==null||typeof n=="boolean"||n===""?"":o||typeof n!="number"||n===0||$t.hasOwnProperty(e)&&$t[e]?(""+n).trim():n+"px"}function pn(e,n){e=e.style;for(var o in n)if(n.hasOwnProperty(o)){var i=o.indexOf("--")===0,s=Or(o,n[o],i);o==="float"&&(o="cssFloat"),i?e.setProperty(o,s):e[o]=s}}var On=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function er(e,n){if(n){if(On[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(f(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(f(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(f(61))}if(n.style!=null&&typeof n.style!="object")throw Error(f(62))}}function nr(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kl=null;function Hn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vn=null,fo=null,po=null;function Hi(e){if(e=zo(e)){if(typeof Vn!="function")throw Error(f(280));var n=e.stateNode;n&&(n=iu(n),Vn(e.stateNode,e.type,n))}}function Sl(e){fo?po?po.push(e):po=[e]:fo=e}function Zr(){if(fo){var e=fo,n=po;if(po=fo=null,Hi(e),n)for(e=0;e<n.length;e++)Hi(n[e])}}function tr(e,n){return e(n)}function Rr(){}var Qo=!1;function oi(e,n,o){if(Qo)return e(n,o);Qo=!0;try{return tr(e,n,o)}finally{Qo=!1,(fo!==null||po!==null)&&(Rr(),Zr())}}function qo(e,n){var o=e.stateNode;if(o===null)return null;var i=iu(o);if(i===null)return null;o=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(f(231,n,typeof o));return o}var Vi=!1;if(E)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){Vi=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{Vi=!1}function El(e,n,o,i,s,p,v,P,C){var G=Array.prototype.slice.call(arguments,3);try{n.apply(o,G)}catch(ae){this.onError(ae)}}var mr=!1,Yo=null,Tr=!1,Xo=null,Go={onError:function(e){mr=!0,Yo=e}};function Qi(e,n,o,i,s,p,v,P,C){mr=!1,Yo=null,El.apply(Go,arguments)}function Ta(e,n,o,i,s,p,v,P,C){if(Qi.apply(this,arguments),mr){if(mr){var G=Yo;mr=!1,Yo=null}else throw Error(f(198));Tr||(Tr=!0,Xo=G)}}function Nr(e){var n=e,o=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(o=n.return),e=n.return;while(e)}return n.tag===3?o:null}function Na(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function qi(e){if(Nr(e)!==e)throw Error(f(188))}function Pl(e){var n=e.alternate;if(!n){if(n=Nr(e),n===null)throw Error(f(188));return n!==e?null:e}for(var o=e,i=n;;){var s=o.return;if(s===null)break;var p=s.alternate;if(p===null){if(i=s.return,i!==null){o=i;continue}break}if(s.child===p.child){for(p=s.child;p;){if(p===o)return qi(s),e;if(p===i)return qi(s),n;p=p.sibling}throw Error(f(188))}if(o.return!==i.return)o=s,i=p;else{for(var v=!1,P=s.child;P;){if(P===o){v=!0,o=s,i=p;break}if(P===i){v=!0,i=s,o=p;break}P=P.sibling}if(!v){for(P=p.child;P;){if(P===o){v=!0,o=p,i=s;break}if(P===i){v=!0,i=p,o=s;break}P=P.sibling}if(!v)throw Error(f(189))}}if(o.alternate!==i)throw Error(f(190))}if(o.tag!==3)throw Error(f(188));return o.stateNode.current===o?e:n}function li(e){return e=Pl(e),e!==null?Da(e):null}function Da(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Da(e);if(n!==null)return n;e=e.sibling}return null}var Yi=c.unstable_scheduleCallback,_l=c.unstable_cancelCallback,Xi=c.unstable_shouldYield,Gi=c.unstable_requestPaint,ve=c.unstable_now,Dr=c.unstable_getCurrentPriorityLevel,bl=c.unstable_ImmediatePriority,Lr=c.unstable_UserBlockingPriority,mo=c.unstable_NormalPriority,ii=c.unstable_LowPriority,Mr=c.unstable_IdlePriority,bt=null,nn=null;function gn(e){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(bt,e,void 0,(e.current.flags&128)===128)}catch{}}var Mn=Math.clz32?Math.clz32:Jr,et=Math.log,it=Math.LN2;function Jr(e){return e>>>=0,e===0?32:31-(et(e)/it|0)|0}var Lt=64,Qn=4194304;function Mt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function go(e,n){var o=e.pendingLanes;if(o===0)return 0;var i=0,s=e.suspendedLanes,p=e.pingedLanes,v=o&268435455;if(v!==0){var P=v&~s;P!==0?i=Mt(P):(p&=v,p!==0&&(i=Mt(p)))}else v=o&~s,v!==0?i=Mt(v):p!==0&&(i=Mt(p));if(i===0)return 0;if(n!==0&&n!==i&&!(n&s)&&(s=i&-i,p=n&-n,s>=p||s===16&&(p&4194240)!==0))return n;if(i&4&&(i|=o&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=i;0<n;)o=31-Mn(n),s=1<<o,i|=e[o],n&=~s;return i}function ai(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ko(e,n){for(var o=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,p=e.pendingLanes;0<p;){var v=31-Mn(p),P=1<<v,C=s[v];C===-1?(!(P&o)||P&i)&&(s[v]=ai(P,n)):C<=n&&(e.expiredLanes|=P),p&=~P}}function Ft(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qt(){var e=Lt;return Lt<<=1,!(Lt&4194240)&&(Lt=64),e}function Zo(e){for(var n=[],o=0;31>o;o++)n.push(e);return n}function Fr(e,n,o){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Mn(n),e[n]=o}function La(e,n){var o=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<o;){var s=31-Mn(o),p=1<<s;n[s]=0,i[s]=-1,e[s]=-1,o&=~p}}function Ar(e,n){var o=e.entangledLanes|=n;for(e=e.entanglements;o;){var i=31-Mn(o),s=1<<i;s&n|e[i]&n&&(e[i]|=n),o&=~s}}var rn=0;function $r(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Jo,ui,si,eo,Cl,gr=!1,Ir=[],vt=null,Be=null,vr=null,rr=new Map,no=new Map,yr=[],Ma="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rn(e,n){switch(e){case"focusin":case"focusout":vt=null;break;case"dragenter":case"dragleave":Be=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":rr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(n.pointerId)}}function Ur(e,n,o,i,s,p){return e===null||e.nativeEvent!==p?(e={blockedOn:n,domEventName:o,eventSystemFlags:i,nativeEvent:p,targetContainers:[s]},n!==null&&(n=zo(n),n!==null&&ui(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,s!==null&&n.indexOf(s)===-1&&n.push(s),e)}function Fa(e,n,o,i,s){switch(n){case"focusin":return vt=Ur(vt,e,n,o,i,s),!0;case"dragenter":return Be=Ur(Be,e,n,o,i,s),!0;case"mouseover":return vr=Ur(vr,e,n,o,i,s),!0;case"pointerover":var p=s.pointerId;return rr.set(p,Ur(rr.get(p)||null,e,n,o,i,s)),!0;case"gotpointercapture":return p=s.pointerId,no.set(p,Ur(no.get(p)||null,e,n,o,i,s)),!0}return!1}function Ct(e){var n=cl(e.target);if(n!==null){var o=Nr(n);if(o!==null){if(n=o.tag,n===13){if(n=Na(o),n!==null){e.blockedOn=n,Cl(e.priority,function(){si(o)});return}}else if(n===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $o(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var o=zt(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var i=new o.constructor(o.type,o);kl=i,o.target.dispatchEvent(i),kl=null}else return n=zo(o),n!==null&&ui(n),e.blockedOn=o,!1;n.shift()}return!0}function el(e,n,o){$o(e)&&o.delete(n)}function or(){gr=!1,vt!==null&&$o(vt)&&(vt=null),Be!==null&&$o(Be)&&(Be=null),vr!==null&&$o(vr)&&(vr=null),rr.forEach(el),no.forEach(el)}function vo(e,n){e.blockedOn===n&&(e.blockedOn=null,gr||(gr=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,or)))}function nl(e){function n(s){return vo(s,e)}if(0<Ir.length){vo(Ir[0],e);for(var o=1;o<Ir.length;o++){var i=Ir[o];i.blockedOn===e&&(i.blockedOn=null)}}for(vt!==null&&vo(vt,e),Be!==null&&vo(Be,e),vr!==null&&vo(vr,e),rr.forEach(n),no.forEach(n),o=0;o<yr.length;o++)i=yr[o],i.blockedOn===e&&(i.blockedOn=null);for(;0<yr.length&&(o=yr[0],o.blockedOn===null);)Ct(o),o.blockedOn===null&&yr.shift()}var at=te.ReactCurrentBatchConfig,ut=!0;function to(e,n,o,i){var s=rn,p=at.transition;at.transition=null;try{rn=1,zl(e,n,o,i)}finally{rn=s,at.transition=p}}function wr(e,n,o,i){var s=rn,p=at.transition;at.transition=null;try{rn=4,zl(e,n,o,i)}finally{rn=s,at.transition=p}}function zl(e,n,o,i){if(ut){var s=zt(e,n,o,i);if(s===null)eu(e,n,i,tl,o),Rn(e,i);else if(Fa(s,e,n,o,i))i.stopPropagation();else if(Rn(e,i),n&4&&-1<Ma.indexOf(e)){for(;s!==null;){var p=zo(s);if(p!==null&&Jo(p),p=zt(e,n,o,i),p===null&&eu(e,n,i,tl,o),p===s)break;s=p}s!==null&&i.stopPropagation()}else eu(e,n,i,null,o)}}var tl=null;function zt(e,n,o,i){if(tl=null,e=Hn(i),e=cl(e),e!==null)if(n=Nr(e),n===null)e=null;else if(o=n.tag,o===13){if(e=Na(n),e!==null)return e;e=null}else if(o===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return tl=e,null}function rl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dr()){case bl:return 1;case Lr:return 4;case mo:case ii:return 16;case Mr:return 536870912;default:return 16}default:return 16}}var qt=null,yo=null,st=null;function nt(){if(st)return st;var e,n=yo,o=n.length,i,s="value"in qt?qt.value:qt.textContent,p=s.length;for(e=0;e<o&&n[e]===s[e];e++);var v=o-e;for(i=1;i<=v&&n[o-i]===s[p-i];i++);return st=s.slice(e,1<i?1-i:void 0)}function wo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Yt(){return!0}function xo(){return!1}function ct(e){function n(o,i,s,p,v){this._reactName=o,this._targetInst=s,this.type=i,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var P in e)e.hasOwnProperty(P)&&(o=e[P],this[P]=o?o(p):p[P]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Yt:xo,this.isPropagationStopped=xo,this}return H(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Yt)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Yt)},persist:function(){},isPersistent:Yt}),n}var ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kn=ct(ko),tt=H({},ko,{view:0,detail:0}),qn=ct(tt),Fn,At,xr,ci=H({},tt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ll,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xr&&(xr&&e.type==="mousemove"?(Fn=e.screenX-xr.screenX,At=e.screenY-xr.screenY):At=Fn=0,xr=e),Fn)},movementY:function(e){return"movementY"in e?e.movementY:At}}),Ou=ct(ci),So=H({},ci,{dataTransfer:0}),ol=ct(So),Aa=H({},tt,{relatedTarget:0}),Ia=ct(Aa),Ua=H({},ko,{animationName:0,elapsedTime:0,pseudoElement:0}),Ns=ct(Ua),Ds=H({},ko,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ru=ct(Ds),ja=H({},ko,{data:0}),Tu=ct(ja),Ls={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ms={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fi(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Nu[e])?!!n[e]:!1}function ll(){return fi}var Ba=H({},tt,{key:function(e){if(e.key){var n=Ls[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=wo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ms[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ll,charCode:function(e){return e.type==="keypress"?wo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wa=ct(Ba),kr=H({},ci,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lr=ct(kr),Ol=H({},tt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ll}),Eo=ct(Ol),Po=H({},ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rl=ct(Po),Fs=H({},ci,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Du=ct(Fs),Lu=[9,13,27,32],It=E&&"CompositionEvent"in window,yt=null;E&&"documentMode"in document&&(yt=document.documentMode);var Tn=E&&"TextEvent"in window&&!yt,di=E&&(!It||yt&&8<yt&&11>=yt),Sr=" ",Mu=!1;function Fu(e,n){switch(e){case"keyup":return Lu.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ha(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var il=!1;function As(e,n){switch(e){case"compositionend":return Ha(n);case"keypress":return n.which!==32?null:(Mu=!0,Sr);case"textInput":return e=n.data,e===Sr&&Mu?null:e;default:return null}}function Ki(e,n){if(il)return e==="compositionend"||!It&&Fu(e,n)?(e=nt(),st=yo=qt=null,il=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return di&&n.locale!=="ko"?null:n.data;default:return null}}var pi={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Va(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!pi[e.type]:n==="textarea"}function hi(e,n,o,i){Sl(i),n=nu(n,"onChange"),0<n.length&&(o=new Kn("onChange","change",null,o,i),e.push({event:o,listeners:n}))}var al=null,mi=null;function Is(e){wi(e,0)}function _o(e){var n=Yn(e);if(xe(n))return e}function Us(e,n){if(e==="change")return n}var gi=!1;if(E){var Xt;if(E){var Tl="oninput"in document;if(!Tl){var Nl=document.createElement("div");Nl.setAttribute("oninput","return;"),Tl=typeof Nl.oninput=="function"}Xt=Tl}else Xt=!1;gi=Xt&&(!document.documentMode||9<document.documentMode)}function jr(){al&&(al.detachEvent("onpropertychange",Qa),mi=al=null)}function Qa(e){if(e.propertyName==="value"&&_o(mi)){var n=[];hi(n,mi,e,Hn(e)),oi(Is,n)}}function vi(e,n,o){e==="focusin"?(jr(),al=n,mi=o,al.attachEvent("onpropertychange",Qa)):e==="focusout"&&jr()}function js(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _o(mi)}function Au(e,n){if(e==="click")return _o(n)}function An(e,n){if(e==="input"||e==="change")return _o(n)}function qa(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ir=typeof Object.is=="function"?Object.is:qa;function Dl(e,n){if(ir(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var o=Object.keys(e),i=Object.keys(n);if(o.length!==i.length)return!1;for(i=0;i<o.length;i++){var s=o[i];if(!k.call(n,s)||!ir(e[s],n[s]))return!1}return!0}function Zi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ar(e,n){var o=Zi(e);e=0;for(var i;o;){if(o.nodeType===3){if(i=e+o.textContent.length,e<=n&&i>=n)return{node:o,offset:n-e};e=i}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Zi(o)}}function Ll(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ll(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function In(){for(var e=window,n=Je();n instanceof e.HTMLIFrameElement;){try{var o=typeof n.contentWindow.location.href=="string"}catch{o=!1}if(o)e=n.contentWindow;else break;n=Je(e.document)}return n}function ft(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function dt(e){var n=In(),o=e.focusedElem,i=e.selectionRange;if(n!==o&&o&&o.ownerDocument&&Ll(o.ownerDocument.documentElement,o)){if(i!==null&&ft(o)){if(n=i.start,e=i.end,e===void 0&&(e=n),"selectionStart"in o)o.selectionStart=n,o.selectionEnd=Math.min(e,o.value.length);else if(e=(n=o.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var s=o.textContent.length,p=Math.min(i.start,s);i=i.end===void 0?p:Math.min(i.end,s),!e.extend&&p>i&&(s=i,i=p,p=s),s=ar(o,p);var v=ar(o,i);s&&v&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==v.node||e.focusOffset!==v.offset)&&(n=n.createRange(),n.setStart(s.node,s.offset),e.removeAllRanges(),p>i?(e.addRange(n),e.extend(v.node,v.offset)):(n.setEnd(v.node,v.offset),e.addRange(n)))}}for(n=[],e=o;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<n.length;o++)e=n[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ya=E&&"documentMode"in document&&11>=document.documentMode,ro=null,Ml=null,Ji=null,pt=!1;function Xa(e,n,o){var i=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;pt||ro==null||ro!==Je(i)||(i=ro,"selectionStart"in i&&ft(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ji&&Dl(Ji,i)||(Ji=i,i=nu(Ml,"onSelect"),0<i.length&&(n=new Kn("onSelect","select",null,n,o),e.push({event:n,listeners:i}),n.target=ro)))}function yi(e,n){var o={};return o[e.toLowerCase()]=n.toLowerCase(),o["Webkit"+e]="webkit"+n,o["Moz"+e]="moz"+n,o}var ul={animationend:yi("Animation","AnimationEnd"),animationiteration:yi("Animation","AnimationIteration"),animationstart:yi("Animation","AnimationStart"),transitionend:yi("Transition","TransitionEnd")},Br={},Wr={};E&&(Wr=document.createElement("div").style,"AnimationEvent"in window||(delete ul.animationend.animation,delete ul.animationiteration.animation,delete ul.animationstart.animation),"TransitionEvent"in window||delete ul.transitionend.transition);function oo(e){if(Br[e])return Br[e];if(!ul[e])return e;var n=ul[e],o;for(o in n)if(n.hasOwnProperty(o)&&o in Wr)return Br[e]=n[o];return e}var $i=oo("animationend"),ea=oo("animationiteration"),Iu=oo("animationstart"),Uu=oo("transitionend"),ju=new Map,Bu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bo(e,n){ju.set(e,n),y(n,[e])}for(var Ga=0;Ga<Bu.length;Ga++){var na=Bu[Ga],ta=na.toLowerCase(),Bs=na[0].toUpperCase()+na.slice(1);bo(ta,"on"+Bs)}bo($i,"onAnimationEnd"),bo(ea,"onAnimationIteration"),bo(Iu,"onAnimationStart"),bo("dblclick","onDoubleClick"),bo("focusin","onFocus"),bo("focusout","onBlur"),bo(Uu,"onTransitionEnd"),w("onMouseEnter",["mouseout","mouseover"]),w("onMouseLeave",["mouseout","mouseover"]),w("onPointerEnter",["pointerout","pointerover"]),w("onPointerLeave",["pointerout","pointerover"]),y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),y("onBeforeInput",["compositionend","keypress","textInput","paste"]),y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ka=new Set("cancel close invalid load scroll toggle".split(" ").concat(sl));function Za(e,n,o){var i=e.type||"unknown-event";e.currentTarget=o,Ta(i,n,void 0,e),e.currentTarget=null}function wi(e,n){n=(n&4)!==0;for(var o=0;o<e.length;o++){var i=e[o],s=i.event;i=i.listeners;e:{var p=void 0;if(n)for(var v=i.length-1;0<=v;v--){var P=i[v],C=P.instance,G=P.currentTarget;if(P=P.listener,C!==p&&s.isPropagationStopped())break e;Za(s,P,G),p=C}else for(v=0;v<i.length;v++){if(P=i[v],C=P.instance,G=P.currentTarget,P=P.listener,C!==p&&s.isPropagationStopped())break e;Za(s,P,G),p=C}}}if(Tr)throw e=Xo,Tr=!1,Xo=null,e}function Pn(e,n){var o=n[Il];o===void 0&&(o=n[Il]=new Set);var i=e+"__bubble";o.has(i)||($a(n,e,2,!1),o.add(i))}function Ja(e,n,o){var i=0;n&&(i|=4),$a(o,e,i,n)}var ra="_reactListening"+Math.random().toString(36).slice(2);function xi(e){if(!e[ra]){e[ra]=!0,h.forEach(function(o){o!=="selectionchange"&&(Ka.has(o)||Ja(o,!1,e),Ja(o,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ra]||(n[ra]=!0,Ja("selectionchange",!1,n))}}function $a(e,n,o,i){switch(rl(n)){case 1:var s=to;break;case 4:s=wr;break;default:s=zl}o=s.bind(null,n,o,e),s=void 0,!Vi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(n,o,{capture:!0,passive:s}):e.addEventListener(n,o,!0):s!==void 0?e.addEventListener(n,o,{passive:s}):e.addEventListener(n,o,!1)}function eu(e,n,o,i,s){var p=i;if(!(n&1)&&!(n&2)&&i!==null)e:for(;;){if(i===null)return;var v=i.tag;if(v===3||v===4){var P=i.stateNode.containerInfo;if(P===s||P.nodeType===8&&P.parentNode===s)break;if(v===4)for(v=i.return;v!==null;){var C=v.tag;if((C===3||C===4)&&(C=v.stateNode.containerInfo,C===s||C.nodeType===8&&C.parentNode===s))return;v=v.return}for(;P!==null;){if(v=cl(P),v===null)return;if(C=v.tag,C===5||C===6){i=p=v;continue e}P=P.parentNode}}i=i.return}oi(function(){var G=p,ae=Hn(o),ce=[];e:{var ie=ju.get(e);if(ie!==void 0){var Se=Kn,be=e;switch(e){case"keypress":if(wo(o)===0)break e;case"keydown":case"keyup":Se=Wa;break;case"focusin":be="focus",Se=Ia;break;case"focusout":be="blur",Se=Ia;break;case"beforeblur":case"afterblur":Se=Ia;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Se=Ou;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Se=ol;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Se=Eo;break;case $i:case ea:case Iu:Se=Ns;break;case Uu:Se=Rl;break;case"scroll":Se=qn;break;case"wheel":Se=Du;break;case"copy":case"cut":case"paste":Se=Ru;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Se=lr}var Ce=(n&4)!==0,ot=!Ce&&e==="scroll",B=Ce?ie!==null?ie+"Capture":null:ie;Ce=[];for(var N=G,Q;N!==null;){Q=N;var pe=Q.stateNode;if(Q.tag===5&&pe!==null&&(Q=pe,B!==null&&(pe=qo(N,B),pe!=null&&Ce.push(ki(N,pe,Q)))),ot)break;N=N.return}0<Ce.length&&(ie=new Se(ie,be,null,o,ae),ce.push({event:ie,listeners:Ce}))}}if(!(n&7)){e:{if(ie=e==="mouseover"||e==="pointerover",Se=e==="mouseout"||e==="pointerout",ie&&o!==kl&&(be=o.relatedTarget||o.fromElement)&&(cl(be)||be[ur]))break e;if((Se||ie)&&(ie=ae.window===ae?ae:(ie=ae.ownerDocument)?ie.defaultView||ie.parentWindow:window,Se?(be=o.relatedTarget||o.toElement,Se=G,be=be?cl(be):null,be!==null&&(ot=Nr(be),be!==ot||be.tag!==5&&be.tag!==6)&&(be=null)):(Se=null,be=G),Se!==be)){if(Ce=Ou,pe="onMouseLeave",B="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(Ce=lr,pe="onPointerLeave",B="onPointerEnter",N="pointer"),ot=Se==null?ie:Yn(Se),Q=be==null?ie:Yn(be),ie=new Ce(pe,N+"leave",Se,o,ae),ie.target=ot,ie.relatedTarget=Q,pe=null,cl(ae)===G&&(Ce=new Ce(B,N+"enter",be,o,ae),Ce.target=Q,Ce.relatedTarget=ot,pe=Ce),ot=pe,Se&&be)n:{for(Ce=Se,B=be,N=0,Q=Ce;Q;Q=Fl(Q))N++;for(Q=0,pe=B;pe;pe=Fl(pe))Q++;for(;0<N-Q;)Ce=Fl(Ce),N--;for(;0<Q-N;)B=Fl(B),Q--;for(;N--;){if(Ce===B||B!==null&&Ce===B.alternate)break n;Ce=Fl(Ce),B=Fl(B)}Ce=null}else Ce=null;Se!==null&&Ws(ce,ie,Se,Ce,!1),be!==null&&ot!==null&&Ws(ce,ot,be,Ce,!0)}}e:{if(ie=G?Yn(G):window,Se=ie.nodeName&&ie.nodeName.toLowerCase(),Se==="select"||Se==="input"&&ie.type==="file")var Oe=Us;else if(Va(ie))if(gi)Oe=An;else{Oe=js;var Ae=vi}else(Se=ie.nodeName)&&Se.toLowerCase()==="input"&&(ie.type==="checkbox"||ie.type==="radio")&&(Oe=Au);if(Oe&&(Oe=Oe(e,G))){hi(ce,Oe,o,ae);break e}Ae&&Ae(e,ie,G),e==="focusout"&&(Ae=ie._wrapperState)&&Ae.controlled&&ie.type==="number"&&Le(ie,"number",ie.value)}switch(Ae=G?Yn(G):window,e){case"focusin":(Va(Ae)||Ae.contentEditable==="true")&&(ro=Ae,Ml=G,Ji=null);break;case"focusout":Ji=Ml=ro=null;break;case"mousedown":pt=!0;break;case"contextmenu":case"mouseup":case"dragend":pt=!1,Xa(ce,o,ae);break;case"selectionchange":if(Ya)break;case"keydown":case"keyup":Xa(ce,o,ae)}var Ie;if(It)e:{switch(e){case"compositionstart":var We="onCompositionStart";break e;case"compositionend":We="onCompositionEnd";break e;case"compositionupdate":We="onCompositionUpdate";break e}We=void 0}else il?Fu(e,o)&&(We="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(We="onCompositionStart");We&&(di&&o.locale!=="ko"&&(il||We!=="onCompositionStart"?We==="onCompositionEnd"&&il&&(Ie=nt()):(qt=ae,yo="value"in qt?qt.value:qt.textContent,il=!0)),Ae=nu(G,We),0<Ae.length&&(We=new Tu(We,e,null,o,ae),ce.push({event:We,listeners:Ae}),Ie?We.data=Ie:(Ie=Ha(o),Ie!==null&&(We.data=Ie)))),(Ie=Tn?As(e,o):Ki(e,o))&&(G=nu(G,"onBeforeInput"),0<G.length&&(ae=new Tu("onBeforeInput","beforeinput",null,o,ae),ce.push({event:ae,listeners:G}),ae.data=Ie))}wi(ce,n)})}function ki(e,n,o){return{instance:e,listener:n,currentTarget:o}}function nu(e,n){for(var o=n+"Capture",i=[];e!==null;){var s=e,p=s.stateNode;s.tag===5&&p!==null&&(s=p,p=qo(e,o),p!=null&&i.unshift(ki(e,p,s)),p=qo(e,n),p!=null&&i.push(ki(e,p,s))),e=e.return}return i}function Fl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ws(e,n,o,i,s){for(var p=n._reactName,v=[];o!==null&&o!==i;){var P=o,C=P.alternate,G=P.stateNode;if(C!==null&&C===i)break;P.tag===5&&G!==null&&(P=G,s?(C=qo(o,p),C!=null&&v.unshift(ki(o,C,P))):s||(C=qo(o,p),C!=null&&v.push(ki(o,C,P)))),o=o.return}v.length!==0&&e.push({event:n,listeners:v})}var Fc=/\r\n?/g,Hs=/\u0000|\uFFFD/g;function Wu(e){return(typeof e=="string"?e:""+e).replace(Fc,`
`).replace(Hs,"")}function oa(e,n,o){if(n=Wu(n),Wu(e)!==n&&o)throw Error(f(425))}function la(){}var Si=null,Hu=null;function Vu(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Qu=typeof setTimeout=="function"?setTimeout:void 0,qu=typeof clearTimeout=="function"?clearTimeout:void 0,tu=typeof Promise=="function"?Promise:void 0,Ac=typeof queueMicrotask=="function"?queueMicrotask:typeof tu<"u"?function(e){return tu.resolve(null).then(e).catch(Vs)}:Qu;function Vs(e){setTimeout(function(){throw e})}function ru(e,n){var o=n,i=0;do{var s=o.nextSibling;if(e.removeChild(o),s&&s.nodeType===8)if(o=s.data,o==="/$"){if(i===0){e.removeChild(s),nl(n);return}i--}else o!=="$"&&o!=="$?"&&o!=="$!"||i++;o=s}while(o);nl(n)}function Co(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Yu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(n===0)return e;n--}else o==="/$"&&n++}e=e.previousSibling}return null}var Al=Math.random().toString(36).slice(2),rt="__reactFiber$"+Al,Ei="__reactProps$"+Al,ur="__reactContainer$"+Al,Il="__reactEvents$"+Al,ou="__reactListeners$"+Al,lu="__reactHandles$"+Al;function cl(e){var n=e[rt];if(n)return n;for(var o=e.parentNode;o;){if(n=o[ur]||o[rt]){if(o=n.alternate,n.child!==null||o!==null&&o.child!==null)for(e=Yu(e);e!==null;){if(o=e[rt])return o;e=Yu(e)}return n}e=o,o=e.parentNode}return null}function zo(e){return e=e[rt]||e[ur],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(f(33))}function iu(e){return e[Ei]||null}var Xu=[],ht=-1;function Un(e){return{current:e}}function _n(e){0>ht||(e.current=Xu[ht],Xu[ht]=null,ht--)}function kn(e,n){ht++,Xu[ht]=e.current,e.current=n}var Oo={},wt=Un(Oo),Ut=Un(!1),Ro=Oo;function Ul(e,n){var o=e.type.contextTypes;if(!o)return Oo;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===n)return i.__reactInternalMemoizedMaskedChildContext;var s={},p;for(p in o)s[p]=n[p];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=s),s}function Ot(e){return e=e.childContextTypes,e!=null}function ia(){_n(Ut),_n(wt)}function Gu(e,n,o){if(wt.current!==Oo)throw Error(f(168));kn(wt,n),kn(Ut,o)}function aa(e,n,o){var i=e.stateNode;if(n=n.childContextTypes,typeof i.getChildContext!="function")return o;i=i.getChildContext();for(var s in i)if(!(s in n))throw Error(f(108,ne(e)||"Unknown",s));return H({},o,i)}function jl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Oo,Ro=wt.current,kn(wt,e),kn(Ut,Ut.current),!0}function Ku(e,n,o){var i=e.stateNode;if(!i)throw Error(f(169));o?(e=aa(e,n,Ro),i.__reactInternalMemoizedMergedChildContext=e,_n(Ut),_n(wt),kn(wt,e)):_n(Ut),kn(Ut,o)}var Hr=null,ua=!1,au=!1;function sa(e){Hr===null?Hr=[e]:Hr.push(e)}function Qs(e){ua=!0,sa(e)}function lo(){if(!au&&Hr!==null){au=!0;var e=0,n=rn;try{var o=Hr;for(rn=1;e<o.length;e++){var i=o[e];do i=i(!0);while(i!==null)}Hr=null,ua=!1}catch(s){throw Hr!==null&&(Hr=Hr.slice(e+1)),Yi(bl,lo),s}finally{rn=n,au=!1}}return null}var Bl=[],Gt=0,uu=null,su=0,jt=[],mt=0,Wl=null,me=1,Er="";function To(e,n){Bl[Gt++]=su,Bl[Gt++]=uu,uu=e,su=n}function Zu(e,n,o){jt[mt++]=me,jt[mt++]=Er,jt[mt++]=Wl,Wl=e;var i=me;e=Er;var s=32-Mn(i)-1;i&=~(1<<s),o+=1;var p=32-Mn(n)+s;if(30<p){var v=s-s%5;p=(i&(1<<v)-1).toString(32),i>>=v,s-=v,me=1<<32-Mn(n)+s|o<<s|i,Er=p+e}else me=1<<p|o<<s|i,Er=e}function Ju(e){e.return!==null&&(To(e,1),Zu(e,1,0))}function No(e){for(;e===uu;)uu=Bl[--Gt],Bl[Gt]=null,su=Bl[--Gt],Bl[Gt]=null;for(;e===Wl;)Wl=jt[--mt],jt[mt]=null,Er=jt[--mt],jt[mt]=null,me=jt[--mt],jt[mt]=null}var xt=null,Bt=null,Cn=!1,Pr=null;function $u(e,n){var o=co(5,null,null,0);o.elementType="DELETED",o.stateNode=n,o.return=e,n=e.deletions,n===null?(e.deletions=[o],e.flags|=16):n.push(o)}function es(e,n){switch(e.tag){case 5:var o=e.type;return n=n.nodeType!==1||o.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,xt=e,Bt=Co(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,xt=e,Bt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(o=Wl!==null?{id:me,overflow:Er}:null,e.memoizedState={dehydrated:n,treeContext:o,retryLane:1073741824},o=co(18,null,null,0),o.stateNode=n,o.return=e,e.child=o,xt=e,Bt=null,!0):!1;default:return!1}}function cu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fu(e){if(Cn){var n=Bt;if(n){var o=n;if(!es(e,n)){if(cu(e))throw Error(f(418));n=Co(o.nextSibling);var i=xt;n&&es(e,n)?$u(i,o):(e.flags=e.flags&-4097|2,Cn=!1,xt=e)}}else{if(cu(e))throw Error(f(418));e.flags=e.flags&-4097|2,Cn=!1,xt=e}}}function du(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xt=e}function Pi(e){if(e!==xt)return!1;if(!Cn)return du(e),Cn=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Vu(e.type,e.memoizedProps)),n&&(n=Bt)){if(cu(e))throw ns(),Error(f(418));for(;n;)$u(e,n),n=Co(n.nextSibling)}if(du(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(n===0){Bt=Co(e.nextSibling);break e}n--}else o!=="$"&&o!=="$!"&&o!=="$?"||n++}e=e.nextSibling}Bt=null}}else Bt=xt?Co(e.stateNode.nextSibling):null;return!0}function ns(){for(var e=Bt;e;)e=Co(e.nextSibling)}function fl(){Bt=xt=null,Cn=!1}function _i(e){Pr===null?Pr=[e]:Pr.push(e)}var Ic=te.ReactCurrentBatchConfig;function ca(e,n,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(f(309));var i=o.stateNode}if(!i)throw Error(f(147,e));var s=i,p=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===p?n.ref:(n=function(v){var P=s.refs;v===null?delete P[p]:P[p]=v},n._stringRef=p,n)}if(typeof e!="string")throw Error(f(284));if(!o._owner)throw Error(f(290,e))}return e}function fa(e,n){throw e=Object.prototype.toString.call(n),Error(f(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ts(e){var n=e._init;return n(e._payload)}function rs(e){function n(B,N){if(e){var Q=B.deletions;Q===null?(B.deletions=[N],B.flags|=16):Q.push(N)}}function o(B,N){if(!e)return null;for(;N!==null;)n(B,N),N=N.sibling;return null}function i(B,N){for(B=new Map;N!==null;)N.key!==null?B.set(N.key,N):B.set(N.index,N),N=N.sibling;return B}function s(B,N){return B=Fi(B,N),B.index=0,B.sibling=null,B}function p(B,N,Q){return B.index=Q,e?(Q=B.alternate,Q!==null?(Q=Q.index,Q<N?(B.flags|=2,N):Q):(B.flags|=2,N)):(B.flags|=1048576,N)}function v(B){return e&&B.alternate===null&&(B.flags|=2),B}function P(B,N,Q,pe){return N===null||N.tag!==6?(N=rf(Q,B.mode,pe),N.return=B,N):(N=s(N,Q),N.return=B,N)}function C(B,N,Q,pe){var Oe=Q.type;return Oe===z?ae(B,N,Q.props.children,pe,Q.key):N!==null&&(N.elementType===Oe||typeof Oe=="object"&&Oe!==null&&Oe.$$typeof===dn&&ts(Oe)===N.type)?(pe=s(N,Q.props),pe.ref=ca(B,N,Q),pe.return=B,pe):(pe=hc(Q.type,Q.key,Q.props,null,B.mode,pe),pe.ref=ca(B,N,Q),pe.return=B,pe)}function G(B,N,Q,pe){return N===null||N.tag!==4||N.stateNode.containerInfo!==Q.containerInfo||N.stateNode.implementation!==Q.implementation?(N=of(Q,B.mode,pe),N.return=B,N):(N=s(N,Q.children||[]),N.return=B,N)}function ae(B,N,Q,pe,Oe){return N===null||N.tag!==7?(N=za(Q,B.mode,pe,Oe),N.return=B,N):(N=s(N,Q),N.return=B,N)}function ce(B,N,Q){if(typeof N=="string"&&N!==""||typeof N=="number")return N=rf(""+N,B.mode,Q),N.return=B,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case oe:return Q=hc(N.type,N.key,N.props,null,B.mode,Q),Q.ref=ca(B,null,N),Q.return=B,Q;case ge:return N=of(N,B.mode,Q),N.return=B,N;case dn:var pe=N._init;return ce(B,pe(N._payload),Q)}if(Re(N)||V(N))return N=za(N,B.mode,Q,null),N.return=B,N;fa(B,N)}return null}function ie(B,N,Q,pe){var Oe=N!==null?N.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Oe!==null?null:P(B,N,""+Q,pe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case oe:return Q.key===Oe?C(B,N,Q,pe):null;case ge:return Q.key===Oe?G(B,N,Q,pe):null;case dn:return Oe=Q._init,ie(B,N,Oe(Q._payload),pe)}if(Re(Q)||V(Q))return Oe!==null?null:ae(B,N,Q,pe,null);fa(B,Q)}return null}function Se(B,N,Q,pe,Oe){if(typeof pe=="string"&&pe!==""||typeof pe=="number")return B=B.get(Q)||null,P(N,B,""+pe,Oe);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case oe:return B=B.get(pe.key===null?Q:pe.key)||null,C(N,B,pe,Oe);case ge:return B=B.get(pe.key===null?Q:pe.key)||null,G(N,B,pe,Oe);case dn:var Ae=pe._init;return Se(B,N,Q,Ae(pe._payload),Oe)}if(Re(pe)||V(pe))return B=B.get(Q)||null,ae(N,B,pe,Oe,null);fa(N,pe)}return null}function be(B,N,Q,pe){for(var Oe=null,Ae=null,Ie=N,We=N=0,Dt=null;Ie!==null&&We<Q.length;We++){Ie.index>We?(Dt=Ie,Ie=null):Dt=Ie.sibling;var hn=ie(B,Ie,Q[We],pe);if(hn===null){Ie===null&&(Ie=Dt);break}e&&Ie&&hn.alternate===null&&n(B,Ie),N=p(hn,N,We),Ae===null?Oe=hn:Ae.sibling=hn,Ae=hn,Ie=Dt}if(We===Q.length)return o(B,Ie),Cn&&To(B,We),Oe;if(Ie===null){for(;We<Q.length;We++)Ie=ce(B,Q[We],pe),Ie!==null&&(N=p(Ie,N,We),Ae===null?Oe=Ie:Ae.sibling=Ie,Ae=Ie);return Cn&&To(B,We),Oe}for(Ie=i(B,Ie);We<Q.length;We++)Dt=Se(Ie,B,We,Q[We],pe),Dt!==null&&(e&&Dt.alternate!==null&&Ie.delete(Dt.key===null?We:Dt.key),N=p(Dt,N,We),Ae===null?Oe=Dt:Ae.sibling=Dt,Ae=Dt);return e&&Ie.forEach(function(Ai){return n(B,Ai)}),Cn&&To(B,We),Oe}function Ce(B,N,Q,pe){var Oe=V(Q);if(typeof Oe!="function")throw Error(f(150));if(Q=Oe.call(Q),Q==null)throw Error(f(151));for(var Ae=Oe=null,Ie=N,We=N=0,Dt=null,hn=Q.next();Ie!==null&&!hn.done;We++,hn=Q.next()){Ie.index>We?(Dt=Ie,Ie=null):Dt=Ie.sibling;var Ai=ie(B,Ie,hn.value,pe);if(Ai===null){Ie===null&&(Ie=Dt);break}e&&Ie&&Ai.alternate===null&&n(B,Ie),N=p(Ai,N,We),Ae===null?Oe=Ai:Ae.sibling=Ai,Ae=Ai,Ie=Dt}if(hn.done)return o(B,Ie),Cn&&To(B,We),Oe;if(Ie===null){for(;!hn.done;We++,hn=Q.next())hn=ce(B,hn.value,pe),hn!==null&&(N=p(hn,N,We),Ae===null?Oe=hn:Ae.sibling=hn,Ae=hn);return Cn&&To(B,We),Oe}for(Ie=i(B,Ie);!hn.done;We++,hn=Q.next())hn=Se(Ie,B,We,hn.value,pe),hn!==null&&(e&&hn.alternate!==null&&Ie.delete(hn.key===null?We:hn.key),N=p(hn,N,We),Ae===null?Oe=hn:Ae.sibling=hn,Ae=hn);return e&&Ie.forEach(function(fh){return n(B,fh)}),Cn&&To(B,We),Oe}function ot(B,N,Q,pe){if(typeof Q=="object"&&Q!==null&&Q.type===z&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case oe:e:{for(var Oe=Q.key,Ae=N;Ae!==null;){if(Ae.key===Oe){if(Oe=Q.type,Oe===z){if(Ae.tag===7){o(B,Ae.sibling),N=s(Ae,Q.props.children),N.return=B,B=N;break e}}else if(Ae.elementType===Oe||typeof Oe=="object"&&Oe!==null&&Oe.$$typeof===dn&&ts(Oe)===Ae.type){o(B,Ae.sibling),N=s(Ae,Q.props),N.ref=ca(B,Ae,Q),N.return=B,B=N;break e}o(B,Ae);break}else n(B,Ae);Ae=Ae.sibling}Q.type===z?(N=za(Q.props.children,B.mode,pe,Q.key),N.return=B,B=N):(pe=hc(Q.type,Q.key,Q.props,null,B.mode,pe),pe.ref=ca(B,N,Q),pe.return=B,B=pe)}return v(B);case ge:e:{for(Ae=Q.key;N!==null;){if(N.key===Ae)if(N.tag===4&&N.stateNode.containerInfo===Q.containerInfo&&N.stateNode.implementation===Q.implementation){o(B,N.sibling),N=s(N,Q.children||[]),N.return=B,B=N;break e}else{o(B,N);break}else n(B,N);N=N.sibling}N=of(Q,B.mode,pe),N.return=B,B=N}return v(B);case dn:return Ae=Q._init,ot(B,N,Ae(Q._payload),pe)}if(Re(Q))return be(B,N,Q,pe);if(V(Q))return Ce(B,N,Q,pe);fa(B,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,N!==null&&N.tag===6?(o(B,N.sibling),N=s(N,Q),N.return=B,B=N):(o(B,N),N=rf(Q,B.mode,pe),N.return=B,B=N),v(B)):o(B,N)}return ot}var Hl=rs(!0),da=rs(!1),Vl=Un(null),Ql=null,Do=null,bi=null;function ql(){bi=Do=Ql=null}function pa(e){var n=Vl.current;_n(Vl),e._currentValue=n}function ha(e,n,o){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===o)break;e=e.return}}function dl(e,n){Ql=e,bi=Do=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ke=!0),e.firstContext=null)}function sr(e){var n=e._currentValue;if(bi!==e)if(e={context:e,memoizedValue:n,next:null},Do===null){if(Ql===null)throw Error(f(308));Do=e,Ql.dependencies={lanes:0,firstContext:e}}else Do=Do.next=e;return n}var Lo=null;function os(e){Lo===null?Lo=[e]:Lo.push(e)}function ma(e,n,o,i){var s=n.interleaved;return s===null?(o.next=o,os(n)):(o.next=s.next,s.next=o),n.interleaved=o,Vr(e,i)}function Vr(e,n){e.lanes|=n;var o=e.alternate;for(o!==null&&(o.lanes|=n),o=e,e=e.return;e!==null;)e.childLanes|=n,o=e.alternate,o!==null&&(o.childLanes|=n),o=e,e=e.return;return o.tag===3?o.stateNode:null}var wn=!1;function Ge(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xn(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function xn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Nn(e,n,o){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,fn&2){var s=i.pending;return s===null?n.next=n:(n.next=s.next,s.next=n),i.pending=n,Vr(e,o)}return s=i.interleaved,s===null?(n.next=n,os(i)):(n.next=s.next,s.next=n),i.interleaved=n,Vr(e,o)}function Rt(e,n,o){if(n=n.updateQueue,n!==null&&(n=n.shared,(o&4194240)!==0)){var i=n.lanes;i&=e.pendingLanes,o|=i,n.lanes=o,Ar(e,o)}}function Yl(e,n){var o=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,o===i)){var s=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var v={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?s=p=v:p=p.next=v,o=o.next}while(o!==null);p===null?s=p=n:p=p.next=n}else s=p=n;o={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:p,shared:i.shared,effects:i.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=n:e.next=n,o.lastBaseUpdate=n}function jn(e,n,o,i){var s=e.updateQueue;wn=!1;var p=s.firstBaseUpdate,v=s.lastBaseUpdate,P=s.shared.pending;if(P!==null){s.shared.pending=null;var C=P,G=C.next;C.next=null,v===null?p=G:v.next=G,v=C;var ae=e.alternate;ae!==null&&(ae=ae.updateQueue,P=ae.lastBaseUpdate,P!==v&&(P===null?ae.firstBaseUpdate=G:P.next=G,ae.lastBaseUpdate=C))}if(p!==null){var ce=s.baseState;v=0,ae=G=C=null,P=p;do{var ie=P.lane,Se=P.eventTime;if((i&ie)===ie){ae!==null&&(ae=ae.next={eventTime:Se,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var be=e,Ce=P;switch(ie=n,Se=o,Ce.tag){case 1:if(be=Ce.payload,typeof be=="function"){ce=be.call(Se,ce,ie);break e}ce=be;break e;case 3:be.flags=be.flags&-65537|128;case 0:if(be=Ce.payload,ie=typeof be=="function"?be.call(Se,ce,ie):be,ie==null)break e;ce=H({},ce,ie);break e;case 2:wn=!0}}P.callback!==null&&P.lane!==0&&(e.flags|=64,ie=s.effects,ie===null?s.effects=[P]:ie.push(P))}else Se={eventTime:Se,lane:ie,tag:P.tag,payload:P.payload,callback:P.callback,next:null},ae===null?(G=ae=Se,C=ce):ae=ae.next=Se,v|=ie;if(P=P.next,P===null){if(P=s.shared.pending,P===null)break;ie=P,P=ie.next,ie.next=null,s.lastBaseUpdate=ie,s.shared.pending=null}}while(!0);if(ae===null&&(C=ce),s.baseState=C,s.firstBaseUpdate=G,s.lastBaseUpdate=ae,n=s.shared.interleaved,n!==null){s=n;do v|=s.lane,s=s.next;while(s!==n)}else p===null&&(s.shared.lanes=0);Pa|=v,e.lanes=v,e.memoizedState=ce}}function Ci(e,n,o){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var i=e[n],s=i.callback;if(s!==null){if(i.callback=null,i=o,typeof s!="function")throw Error(f(191,s));s.call(i)}}}var io={},cr=Un(io),Xl=Un(io),Mo=Un(io);function Zn(e){if(e===io)throw Error(f(174));return e}function ga(e,n){switch(kn(Mo,n),kn(Xl,e),kn(cr,io),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Sn(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Sn(n,e)}_n(cr),kn(cr,n)}function pl(){_n(cr),_n(Xl),_n(Mo)}function Gl(e){Zn(Mo.current);var n=Zn(cr.current),o=Sn(n,e.type);n!==o&&(kn(Xl,e),kn(cr,o))}function zi(e){Xl.current===e&&(_n(cr),_n(Xl))}var zn=Un(0);function Qr(e){for(var n=e;n!==null;){if(n.tag===13){var o=n.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Oi=[];function ao(){for(var e=0;e<Oi.length;e++)Oi[e]._workInProgressVersionPrimary=null;Oi.length=0}var Kl=te.ReactCurrentDispatcher,Zl=te.ReactCurrentBatchConfig,Fo=0,bn=null,Bn=null,sn=null,qr=!1,Tt=!1,hl=0,Kt=0;function kt(){throw Error(f(321))}function va(e,n){if(n===null)return!1;for(var o=0;o<n.length&&o<e.length;o++)if(!ir(e[o],n[o]))return!1;return!0}function ya(e,n,o,i,s,p){if(Fo=p,bn=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Kl.current=e===null||e.memoizedState===null?Js:$s,e=o(i,s),Tt){p=0;do{if(Tt=!1,hl=0,25<=p)throw Error(f(301));p+=1,sn=Bn=null,n.updateQueue=null,Kl.current=ec,e=o(i,s)}while(Tt)}if(Kl.current=wu,n=Bn!==null&&Bn.next!==null,Fo=0,sn=Bn=bn=null,qr=!1,n)throw Error(f(300));return e}function ls(){var e=hl!==0;return hl=0,e}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?bn.memoizedState=sn=e:sn=sn.next=e,sn}function fr(){if(Bn===null){var e=bn.alternate;e=e!==null?e.memoizedState:null}else e=Bn.next;var n=sn===null?bn.memoizedState:sn.next;if(n!==null)sn=n,Bn=e;else{if(e===null)throw Error(f(310));Bn=e,e={memoizedState:Bn.memoizedState,baseState:Bn.baseState,baseQueue:Bn.baseQueue,queue:Bn.queue,next:null},sn===null?bn.memoizedState=sn=e:sn=sn.next=e}return sn}function Ri(e,n){return typeof n=="function"?n(e):n}function wa(e){var n=fr(),o=n.queue;if(o===null)throw Error(f(311));o.lastRenderedReducer=e;var i=Bn,s=i.baseQueue,p=o.pending;if(p!==null){if(s!==null){var v=s.next;s.next=p.next,p.next=v}i.baseQueue=s=p,o.pending=null}if(s!==null){p=s.next,i=i.baseState;var P=v=null,C=null,G=p;do{var ae=G.lane;if((Fo&ae)===ae)C!==null&&(C=C.next={lane:0,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),i=G.hasEagerState?G.eagerState:e(i,G.action);else{var ce={lane:ae,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null};C===null?(P=C=ce,v=i):C=C.next=ce,bn.lanes|=ae,Pa|=ae}G=G.next}while(G!==null&&G!==p);C===null?v=i:C.next=P,ir(i,n.memoizedState)||(Ke=!0),n.memoizedState=i,n.baseState=v,n.baseQueue=C,o.lastRenderedState=i}if(e=o.interleaved,e!==null){s=e;do p=s.lane,bn.lanes|=p,Pa|=p,s=s.next;while(s!==e)}else s===null&&(o.lanes=0);return[n.memoizedState,o.dispatch]}function Ao(e){var n=fr(),o=n.queue;if(o===null)throw Error(f(311));o.lastRenderedReducer=e;var i=o.dispatch,s=o.pending,p=n.memoizedState;if(s!==null){o.pending=null;var v=s=s.next;do p=e(p,v.action),v=v.next;while(v!==s);ir(p,n.memoizedState)||(Ke=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),o.lastRenderedState=p}return[p,i]}function is(){}function as(e,n){var o=bn,i=fr(),s=n(),p=!ir(i.memoizedState,s);if(p&&(i.memoizedState=s,Ke=!0),i=i.queue,cs(qs.bind(null,o,i,e),[e]),i.getSnapshot!==n||p||sn!==null&&sn.memoizedState.tag&1){if(o.flags|=2048,Yr(9,xa.bind(null,o,i,s,n),void 0,null),Nt===null)throw Error(f(349));Fo&30||pu(o,n,s)}return s}function pu(e,n,o){e.flags|=16384,e={getSnapshot:n,value:o},n=bn.updateQueue,n===null?(n={lastEffect:null,stores:null},bn.updateQueue=n,n.stores=[e]):(o=n.stores,o===null?n.stores=[e]:o.push(e))}function xa(e,n,o,i){n.value=o,n.getSnapshot=i,Ys(n)&&us(e)}function qs(e,n,o){return o(function(){Ys(n)&&us(e)})}function Ys(e){var n=e.getSnapshot;e=e.value;try{var o=n();return!ir(e,o)}catch{return!0}}function us(e){var n=Vr(e,1);n!==null&&Wo(n,e,1,-1)}function ss(e){var n=St();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ri,lastRenderedState:e},n.queue=e,e=e.dispatch=Jl.bind(null,bn,e),[n.memoizedState,e]}function Yr(e,n,o,i){return e={tag:e,create:n,destroy:o,deps:i,next:null},n=bn.updateQueue,n===null?(n={lastEffect:null,stores:null},bn.updateQueue=n,n.lastEffect=e.next=e):(o=n.lastEffect,o===null?n.lastEffect=e.next=e:(i=o.next,o.next=e,e.next=i,n.lastEffect=e)),e}function Xs(){return fr().memoizedState}function uo(e,n,o,i){var s=St();bn.flags|=e,s.memoizedState=Yr(1|n,o,void 0,i===void 0?null:i)}function ka(e,n,o,i){var s=fr();i=i===void 0?null:i;var p=void 0;if(Bn!==null){var v=Bn.memoizedState;if(p=v.destroy,i!==null&&va(i,v.deps)){s.memoizedState=Yr(n,o,p,i);return}}bn.flags|=e,s.memoizedState=Yr(1|n,o,p,i)}function Wt(e,n){return uo(8390656,8,e,n)}function cs(e,n){return ka(2048,8,e,n)}function fs(e,n){return ka(4,2,e,n)}function Gs(e,n){return ka(4,4,e,n)}function Ks(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ds(e,n,o){return o=o!=null?o.concat([e]):null,ka(4,4,Ks.bind(null,n,e),o)}function hu(){}function Zs(e,n){var o=fr();n=n===void 0?null:n;var i=o.memoizedState;return i!==null&&n!==null&&va(n,i[1])?i[0]:(o.memoizedState=[e,n],e)}function dr(e,n){var o=fr();n=n===void 0?null:n;var i=o.memoizedState;return i!==null&&n!==null&&va(n,i[1])?i[0]:(e=e(),o.memoizedState=[e,n],e)}function mu(e,n,o){return Fo&21?(ir(o,n)||(o=Qt(),bn.lanes|=o,Pa|=o,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=o)}function Uc(e,n){var o=rn;rn=o!==0&&4>o?o:4,e(!0);var i=Zl.transition;Zl.transition={};try{e(!1),n()}finally{rn=o,Zl.transition=i}}function Io(){return fr().memoizedState}function gu(e,n,o){var i=Li(e);if(o={lane:i,action:o,hasEagerState:!1,eagerState:null,next:null},Sa(e))vu(n,o);else if(o=ma(e,n,o,i),o!==null){var s=hr();Wo(o,e,i,s),yu(o,n,i)}}function Jl(e,n,o){var i=Li(e),s={lane:i,action:o,hasEagerState:!1,eagerState:null,next:null};if(Sa(e))vu(n,s);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var v=n.lastRenderedState,P=p(v,o);if(s.hasEagerState=!0,s.eagerState=P,ir(P,v)){var C=n.interleaved;C===null?(s.next=s,os(n)):(s.next=C.next,C.next=s),n.interleaved=s;return}}catch{}finally{}o=ma(e,n,s,i),o!==null&&(s=hr(),Wo(o,e,i,s),yu(o,n,i))}}function Sa(e){var n=e.alternate;return e===bn||n!==null&&n===bn}function vu(e,n){Tt=qr=!0;var o=e.pending;o===null?n.next=n:(n.next=o.next,o.next=n),e.pending=n}function yu(e,n,o){if(o&4194240){var i=n.lanes;i&=e.pendingLanes,o|=i,n.lanes=o,Ar(e,o)}}var wu={readContext:sr,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},Js={readContext:sr,useCallback:function(e,n){return St().memoizedState=[e,n===void 0?null:n],e},useContext:sr,useEffect:Wt,useImperativeHandle:function(e,n,o){return o=o!=null?o.concat([e]):null,uo(4194308,4,Ks.bind(null,n,e),o)},useLayoutEffect:function(e,n){return uo(4194308,4,e,n)},useInsertionEffect:function(e,n){return uo(4,2,e,n)},useMemo:function(e,n){var o=St();return n=n===void 0?null:n,e=e(),o.memoizedState=[e,n],e},useReducer:function(e,n,o){var i=St();return n=o!==void 0?o(n):n,i.memoizedState=i.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=gu.bind(null,bn,e),[i.memoizedState,e]},useRef:function(e){var n=St();return e={current:e},n.memoizedState=e},useState:ss,useDebugValue:hu,useDeferredValue:function(e){return St().memoizedState=e},useTransition:function(){var e=ss(!1),n=e[0];return e=Uc.bind(null,e[1]),St().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,o){var i=bn,s=St();if(Cn){if(o===void 0)throw Error(f(407));o=o()}else{if(o=n(),Nt===null)throw Error(f(349));Fo&30||pu(i,n,o)}s.memoizedState=o;var p={value:o,getSnapshot:n};return s.queue=p,Wt(qs.bind(null,i,p,e),[e]),i.flags|=2048,Yr(9,xa.bind(null,i,p,o,n),void 0,null),o},useId:function(){var e=St(),n=Nt.identifierPrefix;if(Cn){var o=Er,i=me;o=(i&~(1<<32-Mn(i)-1)).toString(32)+o,n=":"+n+"R"+o,o=hl++,0<o&&(n+="H"+o.toString(32)),n+=":"}else o=Kt++,n=":"+n+"r"+o.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},$s={readContext:sr,useCallback:Zs,useContext:sr,useEffect:cs,useImperativeHandle:ds,useInsertionEffect:fs,useLayoutEffect:Gs,useMemo:dr,useReducer:wa,useRef:Xs,useState:function(){return wa(Ri)},useDebugValue:hu,useDeferredValue:function(e){var n=fr();return mu(n,Bn.memoizedState,e)},useTransition:function(){var e=wa(Ri)[0],n=fr().memoizedState;return[e,n]},useMutableSource:is,useSyncExternalStore:as,useId:Io,unstable_isNewReconciler:!1},ec={readContext:sr,useCallback:Zs,useContext:sr,useEffect:cs,useImperativeHandle:ds,useInsertionEffect:fs,useLayoutEffect:Gs,useMemo:dr,useReducer:Ao,useRef:Xs,useState:function(){return Ao(Ri)},useDebugValue:hu,useDeferredValue:function(e){var n=fr();return Bn===null?n.memoizedState=e:mu(n,Bn.memoizedState,e)},useTransition:function(){var e=Ao(Ri)[0],n=fr().memoizedState;return[e,n]},useMutableSource:is,useSyncExternalStore:as,useId:Io,unstable_isNewReconciler:!1};function _r(e,n){if(e&&e.defaultProps){n=H({},n),e=e.defaultProps;for(var o in e)n[o]===void 0&&(n[o]=e[o]);return n}return n}function Ea(e,n,o,i){n=e.memoizedState,o=o(i,n),o=o==null?n:H({},n,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var xu={isMounted:function(e){return(e=e._reactInternals)?Nr(e)===e:!1},enqueueSetState:function(e,n,o){e=e._reactInternals;var i=hr(),s=Li(e),p=xn(i,s);p.payload=n,o!=null&&(p.callback=o),n=Nn(e,p,s),n!==null&&(Wo(n,e,s,i),Rt(n,e,s))},enqueueReplaceState:function(e,n,o){e=e._reactInternals;var i=hr(),s=Li(e),p=xn(i,s);p.tag=1,p.payload=n,o!=null&&(p.callback=o),n=Nn(e,p,s),n!==null&&(Wo(n,e,s,i),Rt(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var o=hr(),i=Li(e),s=xn(o,i);s.tag=2,n!=null&&(s.callback=n),n=Nn(e,s,i),n!==null&&(Wo(n,e,i,o),Rt(n,e,i))}};function nc(e,n,o,i,s,p,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,p,v):n.prototype&&n.prototype.isPureReactComponent?!Dl(o,i)||!Dl(s,p):!0}function t(e,n,o){var i=!1,s=Oo,p=n.contextType;return typeof p=="object"&&p!==null?p=sr(p):(s=Ot(n)?Ro:wt.current,i=n.contextTypes,p=(i=i!=null)?Ul(e,s):Oo),n=new n(o,p),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=xu,e.stateNode=n,n._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=p),n}function r(e,n,o,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(o,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(o,i),n.state!==e&&xu.enqueueReplaceState(n,n.state,null)}function l(e,n,o,i){var s=e.stateNode;s.props=o,s.state=e.memoizedState,s.refs={},Ge(e);var p=n.contextType;typeof p=="object"&&p!==null?s.context=sr(p):(p=Ot(n)?Ro:wt.current,s.context=Ul(e,p)),s.state=e.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(Ea(e,n,p,o),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(n=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),n!==s.state&&xu.enqueueReplaceState(s,s.state,null),jn(e,o,s,i),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function u(e,n){try{var o="",i=n;do o+=ee(i),i=i.return;while(i);var s=o}catch(p){s=`
Error generating stack: `+p.message+`
`+p.stack}return{value:e,source:n,stack:s,digest:null}}function d(e,n,o){return{value:e,source:null,stack:o??null,digest:n??null}}function m(e,n){try{console.error(n.value)}catch(o){setTimeout(function(){throw o})}}var S=typeof WeakMap=="function"?WeakMap:Map;function D(e,n,o){o=xn(-1,o),o.tag=3,o.payload={element:null};var i=n.value;return o.callback=function(){uc||(uc=!0,Gc=i),m(e,n)},o}function J(e,n,o){o=xn(-1,o),o.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var s=n.value;o.payload=function(){return i(s)},o.callback=function(){m(e,n)}}var p=e.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){m(e,n),typeof i!="function"&&(Ni===null?Ni=new Set([this]):Ni.add(this));var v=n.stack;this.componentDidCatch(n.value,{componentStack:v!==null?v:""})}),o}function de(e,n,o){var i=e.pingCache;if(i===null){i=e.pingCache=new S;var s=new Set;i.set(n,s)}else s=i.get(n),s===void 0&&(s=new Set,i.set(n,s));s.has(o)||(s.add(o),e=nh.bind(null,e,n,o),n.then(e,e))}function Ee(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function He(e,n,o,i,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===n?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(n=xn(-1,1),n.tag=2,Nn(o,n,1))),o.lanes|=1),e)}var Me=te.ReactCurrentOwner,Ke=!1;function ke(e,n,o,i){n.child=e===null?da(n,null,o,i):Hl(n,e.child,o,i)}function Et(e,n,o,i,s){o=o.render;var p=n.ref;return dl(n,s),i=ya(e,n,o,i,p,s),o=ls(),e!==null&&!Ke?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,$l(e,n,s)):(Cn&&o&&Ju(n),n.flags|=1,ke(e,n,i,s),n.child)}function pr(e,n,o,i,s){if(e===null){var p=o.type;return typeof p=="function"&&!tf(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(n.tag=15,n.type=p,q(e,n,p,i,s)):(e=hc(o.type,null,i,n,n.mode,s),e.ref=n.ref,e.return=n,n.child=e)}if(p=e.child,!(e.lanes&s)){var v=p.memoizedProps;if(o=o.compare,o=o!==null?o:Dl,o(v,i)&&e.ref===n.ref)return $l(e,n,s)}return n.flags|=1,e=Fi(p,i),e.ref=n.ref,e.return=n,n.child=e}function q(e,n,o,i,s){if(e!==null){var p=e.memoizedProps;if(Dl(p,i)&&e.ref===n.ref)if(Ke=!1,n.pendingProps=i=p,(e.lanes&s)!==0)e.flags&131072&&(Ke=!0);else return n.lanes=e.lanes,$l(e,n,s)}return we(e,n,o,i,s)}function I(e,n,o){var i=n.pendingProps,s=i.children,p=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},kn(Su,Xr),Xr|=o;else{if(!(o&1073741824))return e=p!==null?p.baseLanes|o:o,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,kn(Su,Xr),Xr|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=p!==null?p.baseLanes:o,kn(Su,Xr),Xr|=i}else p!==null?(i=p.baseLanes|o,n.memoizedState=null):i=o,kn(Su,Xr),Xr|=i;return ke(e,n,s,o),n.child}function Z(e,n){var o=n.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(n.flags|=512,n.flags|=2097152)}function we(e,n,o,i,s){var p=Ot(o)?Ro:wt.current;return p=Ul(n,p),dl(n,s),o=ya(e,n,o,i,p,s),i=ls(),e!==null&&!Ke?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,$l(e,n,s)):(Cn&&i&&Ju(n),n.flags|=1,ke(e,n,o,s),n.child)}function ze(e,n,o,i,s){if(Ot(o)){var p=!0;jl(n)}else p=!1;if(dl(n,s),n.stateNode===null)rc(e,n),t(n,o,i),l(n,o,i,s),i=!0;else if(e===null){var v=n.stateNode,P=n.memoizedProps;v.props=P;var C=v.context,G=o.contextType;typeof G=="object"&&G!==null?G=sr(G):(G=Ot(o)?Ro:wt.current,G=Ul(n,G));var ae=o.getDerivedStateFromProps,ce=typeof ae=="function"||typeof v.getSnapshotBeforeUpdate=="function";ce||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(P!==i||C!==G)&&r(n,v,i,G),wn=!1;var ie=n.memoizedState;v.state=ie,jn(n,i,v,s),C=n.memoizedState,P!==i||ie!==C||Ut.current||wn?(typeof ae=="function"&&(Ea(n,o,ae,i),C=n.memoizedState),(P=wn||nc(n,o,P,i,ie,C,G))?(ce||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(n.flags|=4194308)):(typeof v.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=C),v.props=i,v.state=C,v.context=G,i=P):(typeof v.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{v=n.stateNode,Xn(e,n),P=n.memoizedProps,G=n.type===n.elementType?P:_r(n.type,P),v.props=G,ce=n.pendingProps,ie=v.context,C=o.contextType,typeof C=="object"&&C!==null?C=sr(C):(C=Ot(o)?Ro:wt.current,C=Ul(n,C));var Se=o.getDerivedStateFromProps;(ae=typeof Se=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(P!==ce||ie!==C)&&r(n,v,i,C),wn=!1,ie=n.memoizedState,v.state=ie,jn(n,i,v,s);var be=n.memoizedState;P!==ce||ie!==be||Ut.current||wn?(typeof Se=="function"&&(Ea(n,o,Se,i),be=n.memoizedState),(G=wn||nc(n,o,G,i,ie,be,C)||!1)?(ae||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(i,be,C),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(i,be,C)),typeof v.componentDidUpdate=="function"&&(n.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof v.componentDidUpdate!="function"||P===e.memoizedProps&&ie===e.memoizedState||(n.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||P===e.memoizedProps&&ie===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=be),v.props=i,v.state=be,v.context=C,i=G):(typeof v.componentDidUpdate!="function"||P===e.memoizedProps&&ie===e.memoizedState||(n.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||P===e.memoizedProps&&ie===e.memoizedState||(n.flags|=1024),i=!1)}return Ye(e,n,o,i,p,s)}function Ye(e,n,o,i,s,p){Z(e,n);var v=(n.flags&128)!==0;if(!i&&!v)return s&&Ku(n,o,!1),$l(e,n,p);i=n.stateNode,Me.current=n;var P=v&&typeof o.getDerivedStateFromError!="function"?null:i.render();return n.flags|=1,e!==null&&v?(n.child=Hl(n,e.child,null,p),n.child=Hl(n,null,P,p)):ke(e,n,P,p),n.memoizedState=i.state,s&&Ku(n,o,!0),n.child}function Ve(e){var n=e.stateNode;n.pendingContext?Gu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Gu(e,n.context,!1),ga(e,n.containerInfo)}function un(e,n,o,i,s){return fl(),_i(s),n.flags|=256,ke(e,n,o,i),n.child}var Jn={dehydrated:null,treeContext:null,retryLane:0};function ln(e){return{baseLanes:e,cachePool:null,transitions:null}}function Uo(e,n,o){var i=n.pendingProps,s=zn.current,p=!1,v=(n.flags&128)!==0,P;if((P=v)||(P=e!==null&&e.memoizedState===null?!1:(s&2)!==0),P?(p=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),kn(zn,s&1),e===null)return fu(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(v=i.children,e=i.fallback,p?(i=n.mode,p=n.child,v={mode:"hidden",children:v},!(i&1)&&p!==null?(p.childLanes=0,p.pendingProps=v):p=mc(v,i,0,null),e=za(e,i,o,null),p.return=n,e.return=n,p.sibling=e,n.child=p,n.child.memoizedState=ln(o),n.memoizedState=Jn,e):ps(n,v));if(s=e.memoizedState,s!==null&&(P=s.dehydrated,P!==null))return Hp(e,n,v,i,P,s,o);if(p){p=i.fallback,v=n.mode,s=e.child,P=s.sibling;var C={mode:"hidden",children:i.children};return!(v&1)&&n.child!==s?(i=n.child,i.childLanes=0,i.pendingProps=C,n.deletions=null):(i=Fi(s,C),i.subtreeFlags=s.subtreeFlags&14680064),P!==null?p=Fi(P,p):(p=za(p,v,o,null),p.flags|=2),p.return=n,i.return=n,i.sibling=p,n.child=i,i=p,p=n.child,v=e.child.memoizedState,v=v===null?ln(o):{baseLanes:v.baseLanes|o,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=e.childLanes&~o,n.memoizedState=Jn,i}return p=e.child,e=p.sibling,i=Fi(p,{mode:"visible",children:i.children}),!(n.mode&1)&&(i.lanes=o),i.return=n,i.sibling=null,e!==null&&(o=n.deletions,o===null?(n.deletions=[e],n.flags|=16):o.push(e)),n.child=i,n.memoizedState=null,i}function ps(e,n){return n=mc({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function tc(e,n,o,i){return i!==null&&_i(i),Hl(n,e.child,null,o),e=ps(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Hp(e,n,o,i,s,p,v){if(o)return n.flags&256?(n.flags&=-257,i=d(Error(f(422))),tc(e,n,v,i)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(p=i.fallback,s=n.mode,i=mc({mode:"visible",children:i.children},s,0,null),p=za(p,s,v,null),p.flags|=2,i.return=n,p.return=n,i.sibling=p,n.child=i,n.mode&1&&Hl(n,e.child,null,v),n.child.memoizedState=ln(v),n.memoizedState=Jn,p);if(!(n.mode&1))return tc(e,n,v,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var P=i.dgst;return i=P,p=Error(f(419)),i=d(p,i,void 0),tc(e,n,v,i)}if(P=(v&e.childLanes)!==0,Ke||P){if(i=Nt,i!==null){switch(v&-v){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(i.suspendedLanes|v)?0:s,s!==0&&s!==p.retryLane&&(p.retryLane=s,Vr(e,s),Wo(i,e,s,-1))}return nf(),i=d(Error(f(421))),tc(e,n,v,i)}return s.data==="$?"?(n.flags|=128,n.child=e.child,n=th.bind(null,e),s._reactRetry=n,null):(e=p.treeContext,Bt=Co(s.nextSibling),xt=n,Cn=!0,Pr=null,e!==null&&(jt[mt++]=me,jt[mt++]=Er,jt[mt++]=Wl,me=e.id,Er=e.overflow,Wl=n),n=ps(n,i.children),n.flags|=4096,n)}function Bf(e,n,o){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),ha(e.return,n,o)}function jc(e,n,o,i,s){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:o,tailMode:s}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=i,p.tail=o,p.tailMode=s)}function Wf(e,n,o){var i=n.pendingProps,s=i.revealOrder,p=i.tail;if(ke(e,n,i.children,o),i=zn.current,i&2)i=i&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bf(e,o,n);else if(e.tag===19)Bf(e,o,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(kn(zn,i),!(n.mode&1))n.memoizedState=null;else switch(s){case"forwards":for(o=n.child,s=null;o!==null;)e=o.alternate,e!==null&&Qr(e)===null&&(s=o),o=o.sibling;o=s,o===null?(s=n.child,n.child=null):(s=o.sibling,o.sibling=null),jc(n,!1,s,o,p);break;case"backwards":for(o=null,s=n.child,n.child=null;s!==null;){if(e=s.alternate,e!==null&&Qr(e)===null){n.child=s;break}e=s.sibling,s.sibling=o,o=s,s=e}jc(n,!0,o,null,p);break;case"together":jc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function rc(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function $l(e,n,o){if(e!==null&&(n.dependencies=e.dependencies),Pa|=n.lanes,!(o&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(f(153));if(n.child!==null){for(e=n.child,o=Fi(e,e.pendingProps),n.child=o,o.return=n;e.sibling!==null;)e=e.sibling,o=o.sibling=Fi(e,e.pendingProps),o.return=n;o.sibling=null}return n.child}function Vp(e,n,o){switch(n.tag){case 3:Ve(n),fl();break;case 5:Gl(n);break;case 1:Ot(n.type)&&jl(n);break;case 4:ga(n,n.stateNode.containerInfo);break;case 10:var i=n.type._context,s=n.memoizedProps.value;kn(Vl,i._currentValue),i._currentValue=s;break;case 13:if(i=n.memoizedState,i!==null)return i.dehydrated!==null?(kn(zn,zn.current&1),n.flags|=128,null):o&n.child.childLanes?Uo(e,n,o):(kn(zn,zn.current&1),e=$l(e,n,o),e!==null?e.sibling:null);kn(zn,zn.current&1);break;case 19:if(i=(o&n.childLanes)!==0,e.flags&128){if(i)return Wf(e,n,o);n.flags|=128}if(s=n.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),kn(zn,zn.current),i)break;return null;case 22:case 23:return n.lanes=0,I(e,n,o)}return $l(e,n,o)}var Hf,Bc,Vf,Qf;Hf=function(e,n){for(var o=n.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Bc=function(){},Vf=function(e,n,o,i){var s=e.memoizedProps;if(s!==i){e=n.stateNode,Zn(cr.current);var p=null;switch(o){case"input":s=Ln(e,s),i=Ln(e,i),p=[];break;case"select":s=H({},s,{value:void 0}),i=H({},i,{value:void 0}),p=[];break;case"textarea":s=mn(e,s),i=mn(e,i),p=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=la)}er(o,i);var v;o=null;for(G in s)if(!i.hasOwnProperty(G)&&s.hasOwnProperty(G)&&s[G]!=null)if(G==="style"){var P=s[G];for(v in P)P.hasOwnProperty(v)&&(o||(o={}),o[v]="")}else G!=="dangerouslySetInnerHTML"&&G!=="children"&&G!=="suppressContentEditableWarning"&&G!=="suppressHydrationWarning"&&G!=="autoFocus"&&(g.hasOwnProperty(G)?p||(p=[]):(p=p||[]).push(G,null));for(G in i){var C=i[G];if(P=s!=null?s[G]:void 0,i.hasOwnProperty(G)&&C!==P&&(C!=null||P!=null))if(G==="style")if(P){for(v in P)!P.hasOwnProperty(v)||C&&C.hasOwnProperty(v)||(o||(o={}),o[v]="");for(v in C)C.hasOwnProperty(v)&&P[v]!==C[v]&&(o||(o={}),o[v]=C[v])}else o||(p||(p=[]),p.push(G,o)),o=C;else G==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,P=P?P.__html:void 0,C!=null&&P!==C&&(p=p||[]).push(G,C)):G==="children"?typeof C!="string"&&typeof C!="number"||(p=p||[]).push(G,""+C):G!=="suppressContentEditableWarning"&&G!=="suppressHydrationWarning"&&(g.hasOwnProperty(G)?(C!=null&&G==="onScroll"&&Pn("scroll",e),p||P===C||(p=[])):(p=p||[]).push(G,C))}o&&(p=p||[]).push("style",o);var G=p;(n.updateQueue=G)&&(n.flags|=4)}},Qf=function(e,n,o,i){o!==i&&(n.flags|=4)};function hs(e,n){if(!Cn)switch(e.tailMode){case"hidden":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var i=null;o!==null;)o.alternate!==null&&(i=o),o=o.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Zt(e){var n=e.alternate!==null&&e.alternate.child===e.child,o=0,i=0;if(n)for(var s=e.child;s!==null;)o|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)o|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=o,n}function Qp(e,n,o){var i=n.pendingProps;switch(No(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(n),null;case 1:return Ot(n.type)&&ia(),Zt(n),null;case 3:return i=n.stateNode,pl(),_n(Ut),_n(wt),ao(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Pi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Pr!==null&&(Jc(Pr),Pr=null))),Bc(e,n),Zt(n),null;case 5:zi(n);var s=Zn(Mo.current);if(o=n.type,e!==null&&n.stateNode!=null)Vf(e,n,o,i,s),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!i){if(n.stateNode===null)throw Error(f(166));return Zt(n),null}if(e=Zn(cr.current),Pi(n)){i=n.stateNode,o=n.type;var p=n.memoizedProps;switch(i[rt]=n,i[Ei]=p,e=(n.mode&1)!==0,o){case"dialog":Pn("cancel",i),Pn("close",i);break;case"iframe":case"object":case"embed":Pn("load",i);break;case"video":case"audio":for(s=0;s<sl.length;s++)Pn(sl[s],i);break;case"source":Pn("error",i);break;case"img":case"image":case"link":Pn("error",i),Pn("load",i);break;case"details":Pn("toggle",i);break;case"input":Ue(i,p),Pn("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!p.multiple},Pn("invalid",i);break;case"textarea":Ne(i,p),Pn("invalid",i)}er(o,p),s=null;for(var v in p)if(p.hasOwnProperty(v)){var P=p[v];v==="children"?typeof P=="string"?i.textContent!==P&&(p.suppressHydrationWarning!==!0&&oa(i.textContent,P,e),s=["children",P]):typeof P=="number"&&i.textContent!==""+P&&(p.suppressHydrationWarning!==!0&&oa(i.textContent,P,e),s=["children",""+P]):g.hasOwnProperty(v)&&P!=null&&v==="onScroll"&&Pn("scroll",i)}switch(o){case"input":Qe(i),he(i,p,!0);break;case"textarea":Qe(i),De(i);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(i.onclick=la)}i=s,n.updateQueue=i,i!==null&&(n.flags|=4)}else{v=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vn(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=v.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=v.createElement(o,{is:i.is}):(e=v.createElement(o),o==="select"&&(v=e,i.multiple?v.multiple=!0:i.size&&(v.size=i.size))):e=v.createElementNS(e,o),e[rt]=n,e[Ei]=i,Hf(e,n,!1,!1),n.stateNode=e;e:{switch(v=nr(o,i),o){case"dialog":Pn("cancel",e),Pn("close",e),s=i;break;case"iframe":case"object":case"embed":Pn("load",e),s=i;break;case"video":case"audio":for(s=0;s<sl.length;s++)Pn(sl[s],e);s=i;break;case"source":Pn("error",e),s=i;break;case"img":case"image":case"link":Pn("error",e),Pn("load",e),s=i;break;case"details":Pn("toggle",e),s=i;break;case"input":Ue(e,i),s=Ln(e,i),Pn("invalid",e);break;case"option":s=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},s=H({},i,{value:void 0}),Pn("invalid",e);break;case"textarea":Ne(e,i),s=mn(e,i),Pn("invalid",e);break;default:s=i}er(o,s),P=s;for(p in P)if(P.hasOwnProperty(p)){var C=P[p];p==="style"?pn(e,C):p==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&yn(e,C)):p==="children"?typeof C=="string"?(o!=="textarea"||C!=="")&&En(e,C):typeof C=="number"&&En(e,""+C):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(g.hasOwnProperty(p)?C!=null&&p==="onScroll"&&Pn("scroll",e):C!=null&&U(e,p,C,v))}switch(o){case"input":Qe(e),he(e,i,!1);break;case"textarea":Qe(e),De(e);break;case"option":i.value!=null&&e.setAttribute("value",""+ue(i.value));break;case"select":e.multiple=!!i.multiple,p=i.value,p!=null?fe(e,!!i.multiple,p,!1):i.defaultValue!=null&&fe(e,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=la)}switch(o){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Zt(n),null;case 6:if(e&&n.stateNode!=null)Qf(e,n,e.memoizedProps,i);else{if(typeof i!="string"&&n.stateNode===null)throw Error(f(166));if(o=Zn(Mo.current),Zn(cr.current),Pi(n)){if(i=n.stateNode,o=n.memoizedProps,i[rt]=n,(p=i.nodeValue!==o)&&(e=xt,e!==null))switch(e.tag){case 3:oa(i.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&oa(i.nodeValue,o,(e.mode&1)!==0)}p&&(n.flags|=4)}else i=(o.nodeType===9?o:o.ownerDocument).createTextNode(i),i[rt]=n,n.stateNode=i}return Zt(n),null;case 13:if(_n(zn),i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Cn&&Bt!==null&&n.mode&1&&!(n.flags&128))ns(),fl(),n.flags|=98560,p=!1;else if(p=Pi(n),i!==null&&i.dehydrated!==null){if(e===null){if(!p)throw Error(f(318));if(p=n.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(f(317));p[rt]=n}else fl(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Zt(n),p=!1}else Pr!==null&&(Jc(Pr),Pr=null),p=!0;if(!p)return n.flags&65536?n:null}return n.flags&128?(n.lanes=o,n):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(n.child.flags|=8192,n.mode&1&&(e===null||zn.current&1?Pt===0&&(Pt=3):nf())),n.updateQueue!==null&&(n.flags|=4),Zt(n),null);case 4:return pl(),Bc(e,n),e===null&&xi(n.stateNode.containerInfo),Zt(n),null;case 10:return pa(n.type._context),Zt(n),null;case 17:return Ot(n.type)&&ia(),Zt(n),null;case 19:if(_n(zn),p=n.memoizedState,p===null)return Zt(n),null;if(i=(n.flags&128)!==0,v=p.rendering,v===null)if(i)hs(p,!1);else{if(Pt!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(v=Qr(e),v!==null){for(n.flags|=128,hs(p,!1),i=v.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),n.subtreeFlags=0,i=o,o=n.child;o!==null;)p=o,e=i,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=e,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,e=v.dependencies,p.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return kn(zn,zn.current&1|2),n.child}e=e.sibling}p.tail!==null&&ve()>Eu&&(n.flags|=128,i=!0,hs(p,!1),n.lanes=4194304)}else{if(!i)if(e=Qr(v),e!==null){if(n.flags|=128,i=!0,o=e.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),hs(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!Cn)return Zt(n),null}else 2*ve()-p.renderingStartTime>Eu&&o!==1073741824&&(n.flags|=128,i=!0,hs(p,!1),n.lanes=4194304);p.isBackwards?(v.sibling=n.child,n.child=v):(o=p.last,o!==null?o.sibling=v:n.child=v,p.last=v)}return p.tail!==null?(n=p.tail,p.rendering=n,p.tail=n.sibling,p.renderingStartTime=ve(),n.sibling=null,o=zn.current,kn(zn,i?o&1|2:o&1),n):(Zt(n),null);case 22:case 23:return ef(),i=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(n.flags|=8192),i&&n.mode&1?Xr&1073741824&&(Zt(n),n.subtreeFlags&6&&(n.flags|=8192)):Zt(n),null;case 24:return null;case 25:return null}throw Error(f(156,n.tag))}function qp(e,n){switch(No(n),n.tag){case 1:return Ot(n.type)&&ia(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return pl(),_n(Ut),_n(wt),ao(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return zi(n),null;case 13:if(_n(zn),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(f(340));fl()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return _n(zn),null;case 4:return pl(),null;case 10:return pa(n.type._context),null;case 22:case 23:return ef(),null;case 24:return null;default:return null}}var oc=!1,Jt=!1,Yp=typeof WeakSet=="function"?WeakSet:Set,_e=null;function ku(e,n){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(i){$n(e,n,i)}else o.current=null}function Wc(e,n,o){try{o()}catch(i){$n(e,n,i)}}var qf=!1;function Xp(e,n){if(Si=ut,e=In(),ft(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var i=o.getSelection&&o.getSelection();if(i&&i.rangeCount!==0){o=i.anchorNode;var s=i.anchorOffset,p=i.focusNode;i=i.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var v=0,P=-1,C=-1,G=0,ae=0,ce=e,ie=null;n:for(;;){for(var Se;ce!==o||s!==0&&ce.nodeType!==3||(P=v+s),ce!==p||i!==0&&ce.nodeType!==3||(C=v+i),ce.nodeType===3&&(v+=ce.nodeValue.length),(Se=ce.firstChild)!==null;)ie=ce,ce=Se;for(;;){if(ce===e)break n;if(ie===o&&++G===s&&(P=v),ie===p&&++ae===i&&(C=v),(Se=ce.nextSibling)!==null)break;ce=ie,ie=ce.parentNode}ce=Se}o=P===-1||C===-1?null:{start:P,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(Hu={focusedElem:e,selectionRange:o},ut=!1,_e=n;_e!==null;)if(n=_e,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_e=e;else for(;_e!==null;){n=_e;try{var be=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(be!==null){var Ce=be.memoizedProps,ot=be.memoizedState,B=n.stateNode,N=B.getSnapshotBeforeUpdate(n.elementType===n.type?Ce:_r(n.type,Ce),ot);B.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var Q=n.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(f(163))}}catch(pe){$n(n,n.return,pe)}if(e=n.sibling,e!==null){e.return=n.return,_e=e;break}_e=n.return}return be=qf,qf=!1,be}function ms(e,n,o){var i=n.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&e)===e){var p=s.destroy;s.destroy=void 0,p!==void 0&&Wc(n,o,p)}s=s.next}while(s!==i)}}function lc(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var i=o.create;o.destroy=i()}o=o.next}while(o!==n)}}function Hc(e){var n=e.ref;if(n!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof n=="function"?n(e):n.current=e}}function Yf(e){var n=e.alternate;n!==null&&(e.alternate=null,Yf(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[rt],delete n[Ei],delete n[Il],delete n[ou],delete n[lu])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xf(e){return e.tag===5||e.tag===3||e.tag===4}function Gf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vc(e,n,o){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?o.nodeType===8?o.parentNode.insertBefore(e,n):o.insertBefore(e,n):(o.nodeType===8?(n=o.parentNode,n.insertBefore(e,o)):(n=o,n.appendChild(e)),o=o._reactRootContainer,o!=null||n.onclick!==null||(n.onclick=la));else if(i!==4&&(e=e.child,e!==null))for(Vc(e,n,o),e=e.sibling;e!==null;)Vc(e,n,o),e=e.sibling}function Qc(e,n,o){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?o.insertBefore(e,n):o.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Qc(e,n,o),e=e.sibling;e!==null;)Qc(e,n,o),e=e.sibling}var Ht=null,jo=!1;function Ti(e,n,o){for(o=o.child;o!==null;)Kf(e,n,o),o=o.sibling}function Kf(e,n,o){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(bt,o)}catch{}switch(o.tag){case 5:Jt||ku(o,n);case 6:var i=Ht,s=jo;Ht=null,Ti(e,n,o),Ht=i,jo=s,Ht!==null&&(jo?(e=Ht,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):Ht.removeChild(o.stateNode));break;case 18:Ht!==null&&(jo?(e=Ht,o=o.stateNode,e.nodeType===8?ru(e.parentNode,o):e.nodeType===1&&ru(e,o),nl(e)):ru(Ht,o.stateNode));break;case 4:i=Ht,s=jo,Ht=o.stateNode.containerInfo,jo=!0,Ti(e,n,o),Ht=i,jo=s;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=o.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var p=s,v=p.destroy;p=p.tag,v!==void 0&&(p&2||p&4)&&Wc(o,n,v),s=s.next}while(s!==i)}Ti(e,n,o);break;case 1:if(!Jt&&(ku(o,n),i=o.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=o.memoizedProps,i.state=o.memoizedState,i.componentWillUnmount()}catch(P){$n(o,n,P)}Ti(e,n,o);break;case 21:Ti(e,n,o);break;case 22:o.mode&1?(Jt=(i=Jt)||o.memoizedState!==null,Ti(e,n,o),Jt=i):Ti(e,n,o);break;default:Ti(e,n,o)}}function Zf(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new Yp),n.forEach(function(i){var s=rh.bind(null,e,i);o.has(i)||(o.add(i),i.then(s,s))})}}function Bo(e,n){var o=n.deletions;if(o!==null)for(var i=0;i<o.length;i++){var s=o[i];try{var p=e,v=n,P=v;e:for(;P!==null;){switch(P.tag){case 5:Ht=P.stateNode,jo=!1;break e;case 3:Ht=P.stateNode.containerInfo,jo=!0;break e;case 4:Ht=P.stateNode.containerInfo,jo=!0;break e}P=P.return}if(Ht===null)throw Error(f(160));Kf(p,v,s),Ht=null,jo=!1;var C=s.alternate;C!==null&&(C.return=null),s.return=null}catch(G){$n(s,n,G)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Jf(n,e),n=n.sibling}function Jf(e,n){var o=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Bo(n,e),ml(e),i&4){try{ms(3,e,e.return),lc(3,e)}catch(Ce){$n(e,e.return,Ce)}try{ms(5,e,e.return)}catch(Ce){$n(e,e.return,Ce)}}break;case 1:Bo(n,e),ml(e),i&512&&o!==null&&ku(o,o.return);break;case 5:if(Bo(n,e),ml(e),i&512&&o!==null&&ku(o,o.return),e.flags&32){var s=e.stateNode;try{En(s,"")}catch(Ce){$n(e,e.return,Ce)}}if(i&4&&(s=e.stateNode,s!=null)){var p=e.memoizedProps,v=o!==null?o.memoizedProps:p,P=e.type,C=e.updateQueue;if(e.updateQueue=null,C!==null)try{P==="input"&&p.type==="radio"&&p.name!=null&&$e(s,p),nr(P,v);var G=nr(P,p);for(v=0;v<C.length;v+=2){var ae=C[v],ce=C[v+1];ae==="style"?pn(s,ce):ae==="dangerouslySetInnerHTML"?yn(s,ce):ae==="children"?En(s,ce):U(s,ae,ce,G)}switch(P){case"input":en(s,p);break;case"textarea":Fe(s,p);break;case"select":var ie=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!p.multiple;var Se=p.value;Se!=null?fe(s,!!p.multiple,Se,!1):ie!==!!p.multiple&&(p.defaultValue!=null?fe(s,!!p.multiple,p.defaultValue,!0):fe(s,!!p.multiple,p.multiple?[]:"",!1))}s[Ei]=p}catch(Ce){$n(e,e.return,Ce)}}break;case 6:if(Bo(n,e),ml(e),i&4){if(e.stateNode===null)throw Error(f(162));s=e.stateNode,p=e.memoizedProps;try{s.nodeValue=p}catch(Ce){$n(e,e.return,Ce)}}break;case 3:if(Bo(n,e),ml(e),i&4&&o!==null&&o.memoizedState.isDehydrated)try{nl(n.containerInfo)}catch(Ce){$n(e,e.return,Ce)}break;case 4:Bo(n,e),ml(e);break;case 13:Bo(n,e),ml(e),s=e.child,s.flags&8192&&(p=s.memoizedState!==null,s.stateNode.isHidden=p,!p||s.alternate!==null&&s.alternate.memoizedState!==null||(Xc=ve())),i&4&&Zf(e);break;case 22:if(ae=o!==null&&o.memoizedState!==null,e.mode&1?(Jt=(G=Jt)||ae,Bo(n,e),Jt=G):Bo(n,e),ml(e),i&8192){if(G=e.memoizedState!==null,(e.stateNode.isHidden=G)&&!ae&&e.mode&1)for(_e=e,ae=e.child;ae!==null;){for(ce=_e=ae;_e!==null;){switch(ie=_e,Se=ie.child,ie.tag){case 0:case 11:case 14:case 15:ms(4,ie,ie.return);break;case 1:ku(ie,ie.return);var be=ie.stateNode;if(typeof be.componentWillUnmount=="function"){i=ie,o=ie.return;try{n=i,be.props=n.memoizedProps,be.state=n.memoizedState,be.componentWillUnmount()}catch(Ce){$n(i,o,Ce)}}break;case 5:ku(ie,ie.return);break;case 22:if(ie.memoizedState!==null){nd(ce);continue}}Se!==null?(Se.return=ie,_e=Se):nd(ce)}ae=ae.sibling}e:for(ae=null,ce=e;;){if(ce.tag===5){if(ae===null){ae=ce;try{s=ce.stateNode,G?(p=s.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(P=ce.stateNode,C=ce.memoizedProps.style,v=C!=null&&C.hasOwnProperty("display")?C.display:null,P.style.display=Or("display",v))}catch(Ce){$n(e,e.return,Ce)}}}else if(ce.tag===6){if(ae===null)try{ce.stateNode.nodeValue=G?"":ce.memoizedProps}catch(Ce){$n(e,e.return,Ce)}}else if((ce.tag!==22&&ce.tag!==23||ce.memoizedState===null||ce===e)&&ce.child!==null){ce.child.return=ce,ce=ce.child;continue}if(ce===e)break e;for(;ce.sibling===null;){if(ce.return===null||ce.return===e)break e;ae===ce&&(ae=null),ce=ce.return}ae===ce&&(ae=null),ce.sibling.return=ce.return,ce=ce.sibling}}break;case 19:Bo(n,e),ml(e),i&4&&Zf(e);break;case 21:break;default:Bo(n,e),ml(e)}}function ml(e){var n=e.flags;if(n&2){try{e:{for(var o=e.return;o!==null;){if(Xf(o)){var i=o;break e}o=o.return}throw Error(f(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(En(s,""),i.flags&=-33);var p=Gf(e);Qc(e,p,s);break;case 3:case 4:var v=i.stateNode.containerInfo,P=Gf(e);Vc(e,P,v);break;default:throw Error(f(161))}}catch(C){$n(e,e.return,C)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Gp(e,n,o){_e=e,$f(e)}function $f(e,n,o){for(var i=(e.mode&1)!==0;_e!==null;){var s=_e,p=s.child;if(s.tag===22&&i){var v=s.memoizedState!==null||oc;if(!v){var P=s.alternate,C=P!==null&&P.memoizedState!==null||Jt;P=oc;var G=Jt;if(oc=v,(Jt=C)&&!G)for(_e=s;_e!==null;)v=_e,C=v.child,v.tag===22&&v.memoizedState!==null?td(s):C!==null?(C.return=v,_e=C):td(s);for(;p!==null;)_e=p,$f(p),p=p.sibling;_e=s,oc=P,Jt=G}ed(e)}else s.subtreeFlags&8772&&p!==null?(p.return=s,_e=p):ed(e)}}function ed(e){for(;_e!==null;){var n=_e;if(n.flags&8772){var o=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Jt||lc(5,n);break;case 1:var i=n.stateNode;if(n.flags&4&&!Jt)if(o===null)i.componentDidMount();else{var s=n.elementType===n.type?o.memoizedProps:_r(n.type,o.memoizedProps);i.componentDidUpdate(s,o.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var p=n.updateQueue;p!==null&&Ci(n,p,i);break;case 3:var v=n.updateQueue;if(v!==null){if(o=null,n.child!==null)switch(n.child.tag){case 5:o=n.child.stateNode;break;case 1:o=n.child.stateNode}Ci(n,v,o)}break;case 5:var P=n.stateNode;if(o===null&&n.flags&4){o=P;var C=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&o.focus();break;case"img":C.src&&(o.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var G=n.alternate;if(G!==null){var ae=G.memoizedState;if(ae!==null){var ce=ae.dehydrated;ce!==null&&nl(ce)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(f(163))}Jt||n.flags&512&&Hc(n)}catch(ie){$n(n,n.return,ie)}}if(n===e){_e=null;break}if(o=n.sibling,o!==null){o.return=n.return,_e=o;break}_e=n.return}}function nd(e){for(;_e!==null;){var n=_e;if(n===e){_e=null;break}var o=n.sibling;if(o!==null){o.return=n.return,_e=o;break}_e=n.return}}function td(e){for(;_e!==null;){var n=_e;try{switch(n.tag){case 0:case 11:case 15:var o=n.return;try{lc(4,n)}catch(C){$n(n,o,C)}break;case 1:var i=n.stateNode;if(typeof i.componentDidMount=="function"){var s=n.return;try{i.componentDidMount()}catch(C){$n(n,s,C)}}var p=n.return;try{Hc(n)}catch(C){$n(n,p,C)}break;case 5:var v=n.return;try{Hc(n)}catch(C){$n(n,v,C)}}}catch(C){$n(n,n.return,C)}if(n===e){_e=null;break}var P=n.sibling;if(P!==null){P.return=n.return,_e=P;break}_e=n.return}}var Kp=Math.ceil,ic=te.ReactCurrentDispatcher,qc=te.ReactCurrentOwner,so=te.ReactCurrentBatchConfig,fn=0,Nt=null,gt=null,Vt=0,Xr=0,Su=Un(0),Pt=0,gs=null,Pa=0,ac=0,Yc=0,vs=null,br=null,Xc=0,Eu=1/0,ei=null,uc=!1,Gc=null,Ni=null,sc=!1,Di=null,cc=0,ys=0,Kc=null,fc=-1,dc=0;function hr(){return fn&6?ve():fc!==-1?fc:fc=ve()}function Li(e){return e.mode&1?fn&2&&Vt!==0?Vt&-Vt:Ic.transition!==null?(dc===0&&(dc=Qt()),dc):(e=rn,e!==0||(e=window.event,e=e===void 0?16:rl(e.type)),e):1}function Wo(e,n,o,i){if(50<ys)throw ys=0,Kc=null,Error(f(185));Fr(e,o,i),(!(fn&2)||e!==Nt)&&(e===Nt&&(!(fn&2)&&(ac|=o),Pt===4&&Mi(e,Vt)),Cr(e,i),o===1&&fn===0&&!(n.mode&1)&&(Eu=ve()+500,ua&&lo()))}function Cr(e,n){var o=e.callbackNode;Ko(e,n);var i=go(e,e===Nt?Vt:0);if(i===0)o!==null&&_l(o),e.callbackNode=null,e.callbackPriority=0;else if(n=i&-i,e.callbackPriority!==n){if(o!=null&&_l(o),n===1)e.tag===0?Qs(od.bind(null,e)):sa(od.bind(null,e)),Ac(function(){!(fn&6)&&lo()}),o=null;else{switch($r(i)){case 1:o=bl;break;case 4:o=Lr;break;case 16:o=mo;break;case 536870912:o=Mr;break;default:o=mo}o=dd(o,rd.bind(null,e))}e.callbackPriority=n,e.callbackNode=o}}function rd(e,n){if(fc=-1,dc=0,fn&6)throw Error(f(327));var o=e.callbackNode;if(Pu()&&e.callbackNode!==o)return null;var i=go(e,e===Nt?Vt:0);if(i===0)return null;if(i&30||i&e.expiredLanes||n)n=pc(e,i);else{n=i;var s=fn;fn|=2;var p=id();(Nt!==e||Vt!==n)&&(ei=null,Eu=ve()+500,ba(e,n));do try{$p();break}catch(P){ld(e,P)}while(!0);ql(),ic.current=p,fn=s,gt!==null?n=0:(Nt=null,Vt=0,n=Pt)}if(n!==0){if(n===2&&(s=Ft(e),s!==0&&(i=s,n=Zc(e,s))),n===1)throw o=gs,ba(e,0),Mi(e,i),Cr(e,ve()),o;if(n===6)Mi(e,i);else{if(s=e.current.alternate,!(i&30)&&!Zp(s)&&(n=pc(e,i),n===2&&(p=Ft(e),p!==0&&(i=p,n=Zc(e,p))),n===1))throw o=gs,ba(e,0),Mi(e,i),Cr(e,ve()),o;switch(e.finishedWork=s,e.finishedLanes=i,n){case 0:case 1:throw Error(f(345));case 2:Ca(e,br,ei);break;case 3:if(Mi(e,i),(i&130023424)===i&&(n=Xc+500-ve(),10<n)){if(go(e,0)!==0)break;if(s=e.suspendedLanes,(s&i)!==i){hr(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Qu(Ca.bind(null,e,br,ei),n);break}Ca(e,br,ei);break;case 4:if(Mi(e,i),(i&4194240)===i)break;for(n=e.eventTimes,s=-1;0<i;){var v=31-Mn(i);p=1<<v,v=n[v],v>s&&(s=v),i&=~p}if(i=s,i=ve()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Kp(i/1960))-i,10<i){e.timeoutHandle=Qu(Ca.bind(null,e,br,ei),i);break}Ca(e,br,ei);break;case 5:Ca(e,br,ei);break;default:throw Error(f(329))}}}return Cr(e,ve()),e.callbackNode===o?rd.bind(null,e):null}function Zc(e,n){var o=vs;return e.current.memoizedState.isDehydrated&&(ba(e,n).flags|=256),e=pc(e,n),e!==2&&(n=br,br=o,n!==null&&Jc(n)),e}function Jc(e){br===null?br=e:br.push.apply(br,e)}function Zp(e){for(var n=e;;){if(n.flags&16384){var o=n.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var i=0;i<o.length;i++){var s=o[i],p=s.getSnapshot;s=s.value;try{if(!ir(p(),s))return!1}catch{return!1}}}if(o=n.child,n.subtreeFlags&16384&&o!==null)o.return=n,n=o;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Mi(e,n){for(n&=~Yc,n&=~ac,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var o=31-Mn(n),i=1<<o;e[o]=-1,n&=~i}}function od(e){if(fn&6)throw Error(f(327));Pu();var n=go(e,0);if(!(n&1))return Cr(e,ve()),null;var o=pc(e,n);if(e.tag!==0&&o===2){var i=Ft(e);i!==0&&(n=i,o=Zc(e,i))}if(o===1)throw o=gs,ba(e,0),Mi(e,n),Cr(e,ve()),o;if(o===6)throw Error(f(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Ca(e,br,ei),Cr(e,ve()),null}function $c(e,n){var o=fn;fn|=1;try{return e(n)}finally{fn=o,fn===0&&(Eu=ve()+500,ua&&lo())}}function _a(e){Di!==null&&Di.tag===0&&!(fn&6)&&Pu();var n=fn;fn|=1;var o=so.transition,i=rn;try{if(so.transition=null,rn=1,e)return e()}finally{rn=i,so.transition=o,fn=n,!(fn&6)&&lo()}}function ef(){Xr=Su.current,_n(Su)}function ba(e,n){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,qu(o)),gt!==null)for(o=gt.return;o!==null;){var i=o;switch(No(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ia();break;case 3:pl(),_n(Ut),_n(wt),ao();break;case 5:zi(i);break;case 4:pl();break;case 13:_n(zn);break;case 19:_n(zn);break;case 10:pa(i.type._context);break;case 22:case 23:ef()}o=o.return}if(Nt=e,gt=e=Fi(e.current,null),Vt=Xr=n,Pt=0,gs=null,Yc=ac=Pa=0,br=vs=null,Lo!==null){for(n=0;n<Lo.length;n++)if(o=Lo[n],i=o.interleaved,i!==null){o.interleaved=null;var s=i.next,p=o.pending;if(p!==null){var v=p.next;p.next=s,i.next=v}o.pending=i}Lo=null}return e}function ld(e,n){do{var o=gt;try{if(ql(),Kl.current=wu,qr){for(var i=bn.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}qr=!1}if(Fo=0,sn=Bn=bn=null,Tt=!1,hl=0,qc.current=null,o===null||o.return===null){Pt=1,gs=n,gt=null;break}e:{var p=e,v=o.return,P=o,C=n;if(n=Vt,P.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var G=C,ae=P,ce=ae.tag;if(!(ae.mode&1)&&(ce===0||ce===11||ce===15)){var ie=ae.alternate;ie?(ae.updateQueue=ie.updateQueue,ae.memoizedState=ie.memoizedState,ae.lanes=ie.lanes):(ae.updateQueue=null,ae.memoizedState=null)}var Se=Ee(v);if(Se!==null){Se.flags&=-257,He(Se,v,P,p,n),Se.mode&1&&de(p,G,n),n=Se,C=G;var be=n.updateQueue;if(be===null){var Ce=new Set;Ce.add(C),n.updateQueue=Ce}else be.add(C);break e}else{if(!(n&1)){de(p,G,n),nf();break e}C=Error(f(426))}}else if(Cn&&P.mode&1){var ot=Ee(v);if(ot!==null){!(ot.flags&65536)&&(ot.flags|=256),He(ot,v,P,p,n),_i(u(C,P));break e}}p=C=u(C,P),Pt!==4&&(Pt=2),vs===null?vs=[p]:vs.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,n&=-n,p.lanes|=n;var B=D(p,C,n);Yl(p,B);break e;case 1:P=C;var N=p.type,Q=p.stateNode;if(!(p.flags&128)&&(typeof N.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(Ni===null||!Ni.has(Q)))){p.flags|=65536,n&=-n,p.lanes|=n;var pe=J(p,P,n);Yl(p,pe);break e}}p=p.return}while(p!==null)}ud(o)}catch(Oe){n=Oe,gt===o&&o!==null&&(gt=o=o.return);continue}break}while(!0)}function id(){var e=ic.current;return ic.current=wu,e===null?wu:e}function nf(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Nt===null||!(Pa&268435455)&&!(ac&268435455)||Mi(Nt,Vt)}function pc(e,n){var o=fn;fn|=2;var i=id();(Nt!==e||Vt!==n)&&(ei=null,ba(e,n));do try{Jp();break}catch(s){ld(e,s)}while(!0);if(ql(),fn=o,ic.current=i,gt!==null)throw Error(f(261));return Nt=null,Vt=0,Pt}function Jp(){for(;gt!==null;)ad(gt)}function $p(){for(;gt!==null&&!Xi();)ad(gt)}function ad(e){var n=fd(e.alternate,e,Xr);e.memoizedProps=e.pendingProps,n===null?ud(e):gt=n,qc.current=null}function ud(e){var n=e;do{var o=n.alternate;if(e=n.return,n.flags&32768){if(o=qp(o,n),o!==null){o.flags&=32767,gt=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pt=6,gt=null;return}}else if(o=Qp(o,n,Xr),o!==null){gt=o;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=e}while(n!==null);Pt===0&&(Pt=5)}function Ca(e,n,o){var i=rn,s=so.transition;try{so.transition=null,rn=1,eh(e,n,o,i)}finally{so.transition=s,rn=i}return null}function eh(e,n,o,i){do Pu();while(Di!==null);if(fn&6)throw Error(f(327));o=e.finishedWork;var s=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(f(177));e.callbackNode=null,e.callbackPriority=0;var p=o.lanes|o.childLanes;if(La(e,p),e===Nt&&(gt=Nt=null,Vt=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||sc||(sc=!0,dd(mo,function(){return Pu(),null})),p=(o.flags&15990)!==0,o.subtreeFlags&15990||p){p=so.transition,so.transition=null;var v=rn;rn=1;var P=fn;fn|=4,qc.current=null,Xp(e,o),Jf(o,e),dt(Hu),ut=!!Si,Hu=Si=null,e.current=o,Gp(o),Gi(),fn=P,rn=v,so.transition=p}else e.current=o;if(sc&&(sc=!1,Di=e,cc=s),p=e.pendingLanes,p===0&&(Ni=null),gn(o.stateNode),Cr(e,ve()),n!==null)for(i=e.onRecoverableError,o=0;o<n.length;o++)s=n[o],i(s.value,{componentStack:s.stack,digest:s.digest});if(uc)throw uc=!1,e=Gc,Gc=null,e;return cc&1&&e.tag!==0&&Pu(),p=e.pendingLanes,p&1?e===Kc?ys++:(ys=0,Kc=e):ys=0,lo(),null}function Pu(){if(Di!==null){var e=$r(cc),n=so.transition,o=rn;try{if(so.transition=null,rn=16>e?16:e,Di===null)var i=!1;else{if(e=Di,Di=null,cc=0,fn&6)throw Error(f(331));var s=fn;for(fn|=4,_e=e.current;_e!==null;){var p=_e,v=p.child;if(_e.flags&16){var P=p.deletions;if(P!==null){for(var C=0;C<P.length;C++){var G=P[C];for(_e=G;_e!==null;){var ae=_e;switch(ae.tag){case 0:case 11:case 15:ms(8,ae,p)}var ce=ae.child;if(ce!==null)ce.return=ae,_e=ce;else for(;_e!==null;){ae=_e;var ie=ae.sibling,Se=ae.return;if(Yf(ae),ae===G){_e=null;break}if(ie!==null){ie.return=Se,_e=ie;break}_e=Se}}}var be=p.alternate;if(be!==null){var Ce=be.child;if(Ce!==null){be.child=null;do{var ot=Ce.sibling;Ce.sibling=null,Ce=ot}while(Ce!==null)}}_e=p}}if(p.subtreeFlags&2064&&v!==null)v.return=p,_e=v;else e:for(;_e!==null;){if(p=_e,p.flags&2048)switch(p.tag){case 0:case 11:case 15:ms(9,p,p.return)}var B=p.sibling;if(B!==null){B.return=p.return,_e=B;break e}_e=p.return}}var N=e.current;for(_e=N;_e!==null;){v=_e;var Q=v.child;if(v.subtreeFlags&2064&&Q!==null)Q.return=v,_e=Q;else e:for(v=N;_e!==null;){if(P=_e,P.flags&2048)try{switch(P.tag){case 0:case 11:case 15:lc(9,P)}}catch(Oe){$n(P,P.return,Oe)}if(P===v){_e=null;break e}var pe=P.sibling;if(pe!==null){pe.return=P.return,_e=pe;break e}_e=P.return}}if(fn=s,lo(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(bt,e)}catch{}i=!0}return i}finally{rn=o,so.transition=n}}return!1}function sd(e,n,o){n=u(o,n),n=D(e,n,1),e=Nn(e,n,1),n=hr(),e!==null&&(Fr(e,1,n),Cr(e,n))}function $n(e,n,o){if(e.tag===3)sd(e,e,o);else for(;n!==null;){if(n.tag===3){sd(n,e,o);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ni===null||!Ni.has(i))){e=u(o,e),e=J(n,e,1),n=Nn(n,e,1),e=hr(),n!==null&&(Fr(n,1,e),Cr(n,e));break}}n=n.return}}function nh(e,n,o){var i=e.pingCache;i!==null&&i.delete(n),n=hr(),e.pingedLanes|=e.suspendedLanes&o,Nt===e&&(Vt&o)===o&&(Pt===4||Pt===3&&(Vt&130023424)===Vt&&500>ve()-Xc?ba(e,0):Yc|=o),Cr(e,n)}function cd(e,n){n===0&&(e.mode&1?(n=Qn,Qn<<=1,!(Qn&130023424)&&(Qn=4194304)):n=1);var o=hr();e=Vr(e,n),e!==null&&(Fr(e,n,o),Cr(e,o))}function th(e){var n=e.memoizedState,o=0;n!==null&&(o=n.retryLane),cd(e,o)}function rh(e,n){var o=0;switch(e.tag){case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(o=s.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(f(314))}i!==null&&i.delete(n),cd(e,o)}var fd;fd=function(e,n,o){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ut.current)Ke=!0;else{if(!(e.lanes&o)&&!(n.flags&128))return Ke=!1,Vp(e,n,o);Ke=!!(e.flags&131072)}else Ke=!1,Cn&&n.flags&1048576&&Zu(n,su,n.index);switch(n.lanes=0,n.tag){case 2:var i=n.type;rc(e,n),e=n.pendingProps;var s=Ul(n,wt.current);dl(n,o),s=ya(null,n,i,e,s,o);var p=ls();return n.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ot(i)?(p=!0,jl(n)):p=!1,n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Ge(n),s.updater=xu,n.stateNode=s,s._reactInternals=n,l(n,i,e,o),n=Ye(null,n,i,!0,p,o)):(n.tag=0,Cn&&p&&Ju(n),ke(null,n,s,o),n=n.child),n;case 16:i=n.elementType;e:{switch(rc(e,n),e=n.pendingProps,s=i._init,i=s(i._payload),n.type=i,s=n.tag=lh(i),e=_r(i,e),s){case 0:n=we(null,n,i,e,o);break e;case 1:n=ze(null,n,i,e,o);break e;case 11:n=Et(null,n,i,e,o);break e;case 14:n=pr(null,n,i,_r(i.type,e),o);break e}throw Error(f(306,i,""))}return n;case 0:return i=n.type,s=n.pendingProps,s=n.elementType===i?s:_r(i,s),we(e,n,i,s,o);case 1:return i=n.type,s=n.pendingProps,s=n.elementType===i?s:_r(i,s),ze(e,n,i,s,o);case 3:e:{if(Ve(n),e===null)throw Error(f(387));i=n.pendingProps,p=n.memoizedState,s=p.element,Xn(e,n),jn(n,i,null,o);var v=n.memoizedState;if(i=v.element,p.isDehydrated)if(p={element:i,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){s=u(Error(f(423)),n),n=un(e,n,i,o,s);break e}else if(i!==s){s=u(Error(f(424)),n),n=un(e,n,i,o,s);break e}else for(Bt=Co(n.stateNode.containerInfo.firstChild),xt=n,Cn=!0,Pr=null,o=da(n,null,i,o),n.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(fl(),i===s){n=$l(e,n,o);break e}ke(e,n,i,o)}n=n.child}return n;case 5:return Gl(n),e===null&&fu(n),i=n.type,s=n.pendingProps,p=e!==null?e.memoizedProps:null,v=s.children,Vu(i,s)?v=null:p!==null&&Vu(i,p)&&(n.flags|=32),Z(e,n),ke(e,n,v,o),n.child;case 6:return e===null&&fu(n),null;case 13:return Uo(e,n,o);case 4:return ga(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=Hl(n,null,i,o):ke(e,n,i,o),n.child;case 11:return i=n.type,s=n.pendingProps,s=n.elementType===i?s:_r(i,s),Et(e,n,i,s,o);case 7:return ke(e,n,n.pendingProps,o),n.child;case 8:return ke(e,n,n.pendingProps.children,o),n.child;case 12:return ke(e,n,n.pendingProps.children,o),n.child;case 10:e:{if(i=n.type._context,s=n.pendingProps,p=n.memoizedProps,v=s.value,kn(Vl,i._currentValue),i._currentValue=v,p!==null)if(ir(p.value,v)){if(p.children===s.children&&!Ut.current){n=$l(e,n,o);break e}}else for(p=n.child,p!==null&&(p.return=n);p!==null;){var P=p.dependencies;if(P!==null){v=p.child;for(var C=P.firstContext;C!==null;){if(C.context===i){if(p.tag===1){C=xn(-1,o&-o),C.tag=2;var G=p.updateQueue;if(G!==null){G=G.shared;var ae=G.pending;ae===null?C.next=C:(C.next=ae.next,ae.next=C),G.pending=C}}p.lanes|=o,C=p.alternate,C!==null&&(C.lanes|=o),ha(p.return,o,n),P.lanes|=o;break}C=C.next}}else if(p.tag===10)v=p.type===n.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(f(341));v.lanes|=o,P=v.alternate,P!==null&&(P.lanes|=o),ha(v,o,n),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===n){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}ke(e,n,s.children,o),n=n.child}return n;case 9:return s=n.type,i=n.pendingProps.children,dl(n,o),s=sr(s),i=i(s),n.flags|=1,ke(e,n,i,o),n.child;case 14:return i=n.type,s=_r(i,n.pendingProps),s=_r(i.type,s),pr(e,n,i,s,o);case 15:return q(e,n,n.type,n.pendingProps,o);case 17:return i=n.type,s=n.pendingProps,s=n.elementType===i?s:_r(i,s),rc(e,n),n.tag=1,Ot(i)?(e=!0,jl(n)):e=!1,dl(n,o),t(n,i,s),l(n,i,s,o),Ye(null,n,i,!0,e,o);case 19:return Wf(e,n,o);case 22:return I(e,n,o)}throw Error(f(156,n.tag))};function dd(e,n){return Yi(e,n)}function oh(e,n,o,i){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function co(e,n,o,i){return new oh(e,n,o,i)}function tf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lh(e){if(typeof e=="function")return tf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xe)return 11;if(e===Dn)return 14}return 2}function Fi(e,n){var o=e.alternate;return o===null?(o=co(e.tag,n,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=n,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,n=e.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function hc(e,n,o,i,s,p){var v=2;if(i=e,typeof e=="function")tf(e)&&(v=1);else if(typeof e=="string")v=5;else e:switch(e){case z:return za(o.children,s,p,n);case Y:v=8,s|=8;break;case $:return e=co(12,o,n,s|2),e.elementType=$,e.lanes=p,e;case Ze:return e=co(13,o,n,s),e.elementType=Ze,e.lanes=p,e;case cn:return e=co(19,o,n,s),e.elementType=cn,e.lanes=p,e;case an:return mc(o,s,p,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pe:v=10;break e;case tn:v=9;break e;case Xe:v=11;break e;case Dn:v=14;break e;case dn:v=16,i=null;break e}throw Error(f(130,e==null?e:typeof e,""))}return n=co(v,o,n,s),n.elementType=e,n.type=i,n.lanes=p,n}function za(e,n,o,i){return e=co(7,e,i,n),e.lanes=o,e}function mc(e,n,o,i){return e=co(22,e,i,n),e.elementType=an,e.lanes=o,e.stateNode={isHidden:!1},e}function rf(e,n,o){return e=co(6,e,null,n),e.lanes=o,e}function of(e,n,o){return n=co(4,e.children!==null?e.children:[],e.key,n),n.lanes=o,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function ih(e,n,o,i,s){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zo(0),this.expirationTimes=Zo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zo(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function lf(e,n,o,i,s,p,v,P,C){return e=new ih(e,n,o,P,C),n===1?(n=1,p===!0&&(n|=8)):n=0,p=co(3,null,null,n),e.current=p,p.stateNode=e,p.memoizedState={element:i,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ge(p),e}function ah(e,n,o){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ge,key:i==null?null:""+i,children:e,containerInfo:n,implementation:o}}function pd(e){if(!e)return Oo;e=e._reactInternals;e:{if(Nr(e)!==e||e.tag!==1)throw Error(f(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ot(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(f(171))}if(e.tag===1){var o=e.type;if(Ot(o))return aa(e,o,n)}return n}function hd(e,n,o,i,s,p,v,P,C){return e=lf(o,i,!0,e,s,p,v,P,C),e.context=pd(null),o=e.current,i=hr(),s=Li(o),p=xn(i,s),p.callback=n??null,Nn(o,p,s),e.current.lanes=s,Fr(e,s,i),Cr(e,i),e}function gc(e,n,o,i){var s=n.current,p=hr(),v=Li(s);return o=pd(o),n.context===null?n.context=o:n.pendingContext=o,n=xn(p,v),n.payload={element:e},i=i===void 0?null:i,i!==null&&(n.callback=i),e=Nn(s,n,v),e!==null&&(Wo(e,s,v,p),Rt(e,s,v)),v}function vc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function md(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<n?o:n}}function af(e,n){md(e,n),(e=e.alternate)&&md(e,n)}var gd=typeof reportError=="function"?reportError:function(e){console.error(e)};function uf(e){this._internalRoot=e}yc.prototype.render=uf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(f(409));gc(e,n,null,null)},yc.prototype.unmount=uf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;_a(function(){gc(null,e,null,null)}),n[ur]=null}};function yc(e){this._internalRoot=e}yc.prototype.unstable_scheduleHydration=function(e){if(e){var n=eo();e={blockedOn:null,target:e,priority:n};for(var o=0;o<yr.length&&n!==0&&n<yr[o].priority;o++);yr.splice(o,0,e),o===0&&Ct(e)}};function sf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vd(){}function uh(e,n,o,i,s){if(s){if(typeof i=="function"){var p=i;i=function(){var G=vc(v);p.call(G)}}var v=hd(n,i,e,0,null,!1,!1,"",vd);return e._reactRootContainer=v,e[ur]=v.current,xi(e.nodeType===8?e.parentNode:e),_a(),v}for(;s=e.lastChild;)e.removeChild(s);if(typeof i=="function"){var P=i;i=function(){var G=vc(C);P.call(G)}}var C=lf(e,0,!1,null,null,!1,!1,"",vd);return e._reactRootContainer=C,e[ur]=C.current,xi(e.nodeType===8?e.parentNode:e),_a(function(){gc(n,C,o,i)}),C}function xc(e,n,o,i,s){var p=o._reactRootContainer;if(p){var v=p;if(typeof s=="function"){var P=s;s=function(){var C=vc(v);P.call(C)}}gc(n,v,e,s)}else v=uh(o,n,e,s,i);return vc(v)}Jo=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var o=Mt(n.pendingLanes);o!==0&&(Ar(n,o|1),Cr(n,ve()),!(fn&6)&&(Eu=ve()+500,lo()))}break;case 13:_a(function(){var i=Vr(e,1);if(i!==null){var s=hr();Wo(i,e,1,s)}}),af(e,1)}},ui=function(e){if(e.tag===13){var n=Vr(e,134217728);if(n!==null){var o=hr();Wo(n,e,134217728,o)}af(e,134217728)}},si=function(e){if(e.tag===13){var n=Li(e),o=Vr(e,n);if(o!==null){var i=hr();Wo(o,e,n,i)}af(e,n)}},eo=function(){return rn},Cl=function(e,n){var o=rn;try{return rn=e,n()}finally{rn=o}},Vn=function(e,n,o){switch(n){case"input":if(en(e,o),n=o.name,o.type==="radio"&&n!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<o.length;n++){var i=o[n];if(i!==e&&i.form===e.form){var s=iu(i);if(!s)throw Error(f(90));xe(i),en(i,s)}}}break;case"textarea":Fe(e,o);break;case"select":n=o.value,n!=null&&fe(e,!!o.multiple,n,!1)}},tr=$c,Rr=_a;var sh={usingClientEntryPoint:!1,Events:[zo,Yn,iu,Sl,Zr,$c]},ws={findFiberByHostInstance:cl,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ch={bundleType:ws.bundleType,version:ws.version,rendererPackageName:ws.rendererPackageName,rendererConfig:ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:te.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=li(e),e===null?null:e.stateNode},findFiberByHostInstance:ws.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kc.isDisabled&&kc.supportsFiber)try{bt=kc.inject(ch),nn=kc}catch{}}return zr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sh,zr.createPortal=function(e,n){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sf(n))throw Error(f(200));return ah(e,n,null,o)},zr.createRoot=function(e,n){if(!sf(e))throw Error(f(299));var o=!1,i="",s=gd;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=lf(e,1,!1,null,null,o,!1,i,s),e[ur]=n.current,xi(e.nodeType===8?e.parentNode:e),new uf(n)},zr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(f(188)):(e=Object.keys(e).join(","),Error(f(268,e)));return e=li(n),e=e===null?null:e.stateNode,e},zr.flushSync=function(e){return _a(e)},zr.hydrate=function(e,n,o){if(!wc(n))throw Error(f(200));return xc(null,e,n,!0,o)},zr.hydrateRoot=function(e,n,o){if(!sf(e))throw Error(f(405));var i=o!=null&&o.hydratedSources||null,s=!1,p="",v=gd;if(o!=null&&(o.unstable_strictMode===!0&&(s=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(v=o.onRecoverableError)),n=hd(n,null,e,1,o??null,s,!1,p,v),e[ur]=n.current,xi(e),i)for(e=0;e<i.length;e++)o=i[e],s=o._getVersion,s=s(o._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[o,s]:n.mutableSourceEagerHydrationData.push(o,s);return new yc(n)},zr.render=function(e,n,o){if(!wc(n))throw Error(f(200));return xc(null,e,n,!1,o)},zr.unmountComponentAtNode=function(e){if(!wc(e))throw Error(f(40));return e._reactRootContainer?(_a(function(){xc(null,null,e,!1,function(){e._reactRootContainer=null,e[ur]=null})}),!0):!1},zr.unstable_batchedUpdates=$c,zr.unstable_renderSubtreeIntoContainer=function(e,n,o,i){if(!wc(o))throw Error(f(200));if(e==null||e._reactInternals===void 0)throw Error(f(38));return xc(e,n,o,!1,i)},zr.version="18.3.1-next-f1338f8080-20240426",zr}var _d;function Df(){if(_d)return df.exports;_d=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(c){console.error(c)}}return a(),df.exports=yh(),df.exports}var bd;function wh(){if(bd)return Sc;bd=1;var a=Df();return Sc.createRoot=a.createRoot,Sc.hydrateRoot=a.hydrateRoot,Sc}var qg=wh(),ks={},Cd;function xh(){if(Cd)return ks;Cd=1,Object.defineProperty(ks,"__esModule",{value:!0}),ks.parse=w,ks.serialize=_;const a=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,c=/^[\u0021-\u003A\u003C-\u007E]*$/,f=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,h=/^[\u0020-\u003A\u003D-\u007E]*$/,g=Object.prototype.toString,y=(()=>{const b=function(){};return b.prototype=Object.create(null),b})();function w(b,W){const L=new y,F=b.length;if(F<2)return L;const M=(W==null?void 0:W.decode)||O;let A=0;do{const j=b.indexOf("=",A);if(j===-1)break;const U=b.indexOf(";",A),te=U===-1?F:U;if(j>te){A=b.lastIndexOf(";",j-1)+1;continue}const oe=E(b,A,j),ge=k(b,j,oe),z=b.slice(oe,ge);if(L[z]===void 0){let Y=E(b,j+1,te),$=k(b,te,Y);const Pe=M(b.slice(Y,$));L[z]=Pe}A=te+1}while(A<F);return L}function E(b,W,L){do{const F=b.charCodeAt(W);if(F!==32&&F!==9)return W}while(++W<L);return L}function k(b,W,L){for(;W>L;){const F=b.charCodeAt(--W);if(F!==32&&F!==9)return W+1}return L}function _(b,W,L){const F=(L==null?void 0:L.encode)||encodeURIComponent;if(!a.test(b))throw new TypeError(`argument name is invalid: ${b}`);const M=F(W);if(!c.test(M))throw new TypeError(`argument val is invalid: ${W}`);let A=b+"="+M;if(!L)return A;if(L.maxAge!==void 0){if(!Number.isInteger(L.maxAge))throw new TypeError(`option maxAge is invalid: ${L.maxAge}`);A+="; Max-Age="+L.maxAge}if(L.domain){if(!f.test(L.domain))throw new TypeError(`option domain is invalid: ${L.domain}`);A+="; Domain="+L.domain}if(L.path){if(!h.test(L.path))throw new TypeError(`option path is invalid: ${L.path}`);A+="; Path="+L.path}if(L.expires){if(!R(L.expires)||!Number.isFinite(L.expires.valueOf()))throw new TypeError(`option expires is invalid: ${L.expires}`);A+="; Expires="+L.expires.toUTCString()}if(L.httpOnly&&(A+="; HttpOnly"),L.secure&&(A+="; Secure"),L.partitioned&&(A+="; Partitioned"),L.priority)switch(typeof L.priority=="string"?L.priority.toLowerCase():void 0){case"low":A+="; Priority=Low";break;case"medium":A+="; Priority=Medium";break;case"high":A+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${L.priority}`)}if(L.sameSite)switch(typeof L.sameSite=="string"?L.sameSite.toLowerCase():L.sameSite){case!0:case"strict":A+="; SameSite=Strict";break;case"lax":A+="; SameSite=Lax";break;case"none":A+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${L.sameSite}`)}return A}function O(b){if(b.indexOf("%")===-1)return b;try{return decodeURIComponent(b)}catch{return b}}function R(b){return g.call(b)==="[object Date]"}return ks}xh();/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var zd="popstate";function kh(a={}){function c(h,g){let{pathname:y,search:w,hash:E}=h.location;return zf("",{pathname:y,search:w,hash:E},g.state&&g.state.usr||null,g.state&&g.state.key||"default")}function f(h,g){return typeof g=="string"?g:zs(g)}return Eh(c,f,null,a)}function Gn(a,c){if(a===!1||a===null||typeof a>"u")throw new Error(c)}function wl(a,c){if(!a){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function Sh(){return Math.random().toString(36).substring(2,10)}function Od(a,c){return{usr:a.state,key:a.key,idx:c}}function zf(a,c,f=null,h){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof c=="string"?Cu(c):c,state:f,key:c&&c.key||h||Sh()}}function zs({pathname:a="/",search:c="",hash:f=""}){return c&&c!=="?"&&(a+=c.charAt(0)==="?"?c:"?"+c),f&&f!=="#"&&(a+=f.charAt(0)==="#"?f:"#"+f),a}function Cu(a){let c={};if(a){let f=a.indexOf("#");f>=0&&(c.hash=a.substring(f),a=a.substring(0,f));let h=a.indexOf("?");h>=0&&(c.search=a.substring(h),a=a.substring(0,h)),a&&(c.pathname=a)}return c}function Eh(a,c,f,h={}){let{window:g=document.defaultView,v5Compat:y=!1}=h,w=g.history,E="POP",k=null,_=O();_==null&&(_=0,w.replaceState({...w.state,idx:_},""));function O(){return(w.state||{idx:null}).idx}function R(){E="POP";let M=O(),A=M==null?null:M-_;_=M,k&&k({action:E,location:F.location,delta:A})}function b(M,A){E="PUSH";let j=zf(F.location,M,A);_=O()+1;let U=Od(j,_),te=F.createHref(j);try{w.pushState(U,"",te)}catch(oe){if(oe instanceof DOMException&&oe.name==="DataCloneError")throw oe;g.location.assign(te)}y&&k&&k({action:E,location:F.location,delta:1})}function W(M,A){E="REPLACE";let j=zf(F.location,M,A);_=O();let U=Od(j,_),te=F.createHref(j);w.replaceState(U,"",te),y&&k&&k({action:E,location:F.location,delta:0})}function L(M){let A=g.location.origin!=="null"?g.location.origin:g.location.href,j=typeof M=="string"?M:zs(M);return j=j.replace(/ $/,"%20"),Gn(A,`No window.location.(origin|href) available to create URL for href: ${j}`),new URL(j,A)}let F={get action(){return E},get location(){return a(g,w)},listen(M){if(k)throw new Error("A history only accepts one active listener");return g.addEventListener(zd,R),k=M,()=>{g.removeEventListener(zd,R),k=null}},createHref(M){return c(g,M)},createURL:L,encodeLocation(M){let A=L(M);return{pathname:A.pathname,search:A.search,hash:A.hash}},push:b,replace:W,go(M){return w.go(M)}};return F}function pp(a,c,f="/"){return Ph(a,c,f,!1)}function Ph(a,c,f,h){let g=typeof c=="string"?Cu(c):c,y=Wi(g.pathname||"/",f);if(y==null)return null;let w=hp(a);_h(w);let E=null;for(let k=0;E==null&&k<w.length;++k){let _=Fh(y);E=Lh(w[k],_,h)}return E}function hp(a,c=[],f=[],h=""){let g=(y,w,E)=>{let k={relativePath:E===void 0?y.path||"":E,caseSensitive:y.caseSensitive===!0,childrenIndex:w,route:y};k.relativePath.startsWith("/")&&(Gn(k.relativePath.startsWith(h),`Absolute route path "${k.relativePath}" nested under path "${h}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),k.relativePath=k.relativePath.slice(h.length));let _=ti([h,k.relativePath]),O=f.concat(k);y.children&&y.children.length>0&&(Gn(y.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),hp(y.children,c,O,_)),!(y.path==null&&!y.index)&&c.push({path:_,score:Nh(_,y.index),routesMeta:O})};return a.forEach((y,w)=>{var E;if(y.path===""||!((E=y.path)!=null&&E.includes("?")))g(y,w);else for(let k of mp(y.path))g(y,w,k)}),c}function mp(a){let c=a.split("/");if(c.length===0)return[];let[f,...h]=c,g=f.endsWith("?"),y=f.replace(/\?$/,"");if(h.length===0)return g?[y,""]:[y];let w=mp(h.join("/")),E=[];return E.push(...w.map(k=>k===""?y:[y,k].join("/"))),g&&E.push(...w),E.map(k=>a.startsWith("/")&&k===""?"/":k)}function _h(a){a.sort((c,f)=>c.score!==f.score?f.score-c.score:Dh(c.routesMeta.map(h=>h.childrenIndex),f.routesMeta.map(h=>h.childrenIndex)))}var bh=/^:[\w-]+$/,Ch=3,zh=2,Oh=1,Rh=10,Th=-2,Rd=a=>a==="*";function Nh(a,c){let f=a.split("/"),h=f.length;return f.some(Rd)&&(h+=Th),c&&(h+=zh),f.filter(g=>!Rd(g)).reduce((g,y)=>g+(bh.test(y)?Ch:y===""?Oh:Rh),h)}function Dh(a,c){return a.length===c.length&&a.slice(0,-1).every((h,g)=>h===c[g])?a[a.length-1]-c[c.length-1]:0}function Lh(a,c,f=!1){let{routesMeta:h}=a,g={},y="/",w=[];for(let E=0;E<h.length;++E){let k=h[E],_=E===h.length-1,O=y==="/"?c:c.slice(y.length)||"/",R=Rc({path:k.relativePath,caseSensitive:k.caseSensitive,end:_},O),b=k.route;if(!R&&_&&f&&!h[h.length-1].route.index&&(R=Rc({path:k.relativePath,caseSensitive:k.caseSensitive,end:!1},O)),!R)return null;Object.assign(g,R.params),w.push({params:g,pathname:ti([y,R.pathname]),pathnameBase:jh(ti([y,R.pathnameBase])),route:b}),R.pathnameBase!=="/"&&(y=ti([y,R.pathnameBase]))}return w}function Rc(a,c){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[f,h]=Mh(a.path,a.caseSensitive,a.end),g=c.match(f);if(!g)return null;let y=g[0],w=y.replace(/(.)\/+$/,"$1"),E=g.slice(1);return{params:h.reduce((_,{paramName:O,isOptional:R},b)=>{if(O==="*"){let L=E[b]||"";w=y.slice(0,y.length-L.length).replace(/(.)\/+$/,"$1")}const W=E[b];return R&&!W?_[O]=void 0:_[O]=(W||"").replace(/%2F/g,"/"),_},{}),pathname:y,pathnameBase:w,pattern:a}}function Mh(a,c=!1,f=!0){wl(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let h=[],g="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(w,E,k)=>(h.push({paramName:E,isOptional:k!=null}),k?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(h.push({paramName:"*"}),g+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?g+="\\/*$":a!==""&&a!=="/"&&(g+="(?:(?=\\/|$))"),[new RegExp(g,c?void 0:"i"),h]}function Fh(a){try{return a.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return wl(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),a}}function Wi(a,c){if(c==="/")return a;if(!a.toLowerCase().startsWith(c.toLowerCase()))return null;let f=c.endsWith("/")?c.length-1:c.length,h=a.charAt(f);return h&&h!=="/"?null:a.slice(f)||"/"}function Ah(a,c="/"){let{pathname:f,search:h="",hash:g=""}=typeof a=="string"?Cu(a):a;return{pathname:f?f.startsWith("/")?f:Ih(f,c):c,search:Bh(h),hash:Wh(g)}}function Ih(a,c){let f=c.replace(/\/+$/,"").split("/");return a.split("/").forEach(g=>{g===".."?f.length>1&&f.pop():g!=="."&&f.push(g)}),f.length>1?f.join("/"):"/"}function mf(a,c,f,h){return`Cannot include a '${a}' character in a manually specified \`to.${c}\` field [${JSON.stringify(h)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Uh(a){return a.filter((c,f)=>f===0||c.route.path&&c.route.path.length>0)}function gp(a){let c=Uh(a);return c.map((f,h)=>h===c.length-1?f.pathname:f.pathnameBase)}function vp(a,c,f,h=!1){let g;typeof a=="string"?g=Cu(a):(g={...a},Gn(!g.pathname||!g.pathname.includes("?"),mf("?","pathname","search",g)),Gn(!g.pathname||!g.pathname.includes("#"),mf("#","pathname","hash",g)),Gn(!g.search||!g.search.includes("#"),mf("#","search","hash",g)));let y=a===""||g.pathname==="",w=y?"/":g.pathname,E;if(w==null)E=f;else{let R=c.length-1;if(!h&&w.startsWith("..")){let b=w.split("/");for(;b[0]==="..";)b.shift(),R-=1;g.pathname=b.join("/")}E=R>=0?c[R]:"/"}let k=Ah(g,E),_=w&&w!=="/"&&w.endsWith("/"),O=(y||w===".")&&f.endsWith("/");return!k.pathname.endsWith("/")&&(_||O)&&(k.pathname+="/"),k}var ti=a=>a.join("/").replace(/\/\/+/g,"/"),jh=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Bh=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Wh=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function Hh(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var yp=["POST","PUT","PATCH","DELETE"];new Set(yp);var Vh=["GET",...yp];new Set(Vh);var zu=K.createContext(null);zu.displayName="DataRouter";var Nc=K.createContext(null);Nc.displayName="DataRouterState";var wp=K.createContext({isTransitioning:!1});wp.displayName="ViewTransition";var Qh=K.createContext(new Map);Qh.displayName="Fetchers";var qh=K.createContext(null);qh.displayName="Await";var xl=K.createContext(null);xl.displayName="Navigation";var Os=K.createContext(null);Os.displayName="Location";var ri=K.createContext({outlet:null,matches:[],isDataRoute:!1});ri.displayName="Route";var Lf=K.createContext(null);Lf.displayName="RouteError";function Yh(a,{relative:c}={}){Gn(Rs(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:h}=K.useContext(xl),{hash:g,pathname:y,search:w}=Ts(a,{relative:c}),E=y;return f!=="/"&&(E=y==="/"?f:ti([f,y])),h.createHref({pathname:E,search:w,hash:g})}function Rs(){return K.useContext(Os)!=null}function Ra(){return Gn(Rs(),"useLocation() may be used only in the context of a <Router> component."),K.useContext(Os).location}var xp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function kp(a){K.useContext(xl).static||K.useLayoutEffect(a)}function Xh(){let{isDataRoute:a}=K.useContext(ri);return a?am():Gh()}function Gh(){Gn(Rs(),"useNavigate() may be used only in the context of a <Router> component.");let a=K.useContext(zu),{basename:c,navigator:f}=K.useContext(xl),{matches:h}=K.useContext(ri),{pathname:g}=Ra(),y=JSON.stringify(gp(h)),w=K.useRef(!1);return kp(()=>{w.current=!0}),K.useCallback((k,_={})=>{if(wl(w.current,xp),!w.current)return;if(typeof k=="number"){f.go(k);return}let O=vp(k,JSON.parse(y),g,_.relative==="path");a==null&&c!=="/"&&(O.pathname=O.pathname==="/"?c:ti([c,O.pathname])),(_.replace?f.replace:f.push)(O,_.state,_)},[c,f,y,g,a])}K.createContext(null);function Ts(a,{relative:c}={}){let{matches:f}=K.useContext(ri),{pathname:h}=Ra(),g=JSON.stringify(gp(f));return K.useMemo(()=>vp(a,JSON.parse(g),h,c==="path"),[a,g,h,c])}function Kh(a,c){return Sp(a,c)}function Sp(a,c,f,h){var j;Gn(Rs(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:g,static:y}=K.useContext(xl),{matches:w}=K.useContext(ri),E=w[w.length-1],k=E?E.params:{},_=E?E.pathname:"/",O=E?E.pathnameBase:"/",R=E&&E.route;{let U=R&&R.path||"";Ep(_,!R||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${_}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let b=Ra(),W;if(c){let U=typeof c=="string"?Cu(c):c;Gn(O==="/"||((j=U.pathname)==null?void 0:j.startsWith(O)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${O}" but pathname "${U.pathname}" was given in the \`location\` prop.`),W=U}else W=b;let L=W.pathname||"/",F=L;if(O!=="/"){let U=O.replace(/^\//,"").split("/");F="/"+L.replace(/^\//,"").split("/").slice(U.length).join("/")}let M=!y&&f&&f.matches&&f.matches.length>0?f.matches:pp(a,{pathname:F});wl(R||M!=null,`No routes matched location "${W.pathname}${W.search}${W.hash}" `),wl(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${W.pathname}${W.search}${W.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let A=nm(M&&M.map(U=>Object.assign({},U,{params:Object.assign({},k,U.params),pathname:ti([O,g.encodeLocation?g.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?O:ti([O,g.encodeLocation?g.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),w,f,h);return c&&A?K.createElement(Os.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...W},navigationType:"POP"}},A):A}function Zh(){let a=im(),c=Hh(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),f=a instanceof Error?a.stack:null,h="rgba(200,200,200, 0.5)",g={padding:"0.5rem",backgroundColor:h},y={padding:"2px 4px",backgroundColor:h},w=null;return console.error("Error handled by React Router default ErrorBoundary:",a),w=K.createElement(K.Fragment,null,K.createElement("p",null,"💿 Hey developer 👋"),K.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",K.createElement("code",{style:y},"ErrorBoundary")," or"," ",K.createElement("code",{style:y},"errorElement")," prop on your route.")),K.createElement(K.Fragment,null,K.createElement("h2",null,"Unexpected Application Error!"),K.createElement("h3",{style:{fontStyle:"italic"}},c),f?K.createElement("pre",{style:g},f):null,w)}var Jh=K.createElement(Zh,null),$h=class extends K.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,c){return c.location!==a.location||c.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:c.error,location:c.location,revalidation:a.revalidation||c.revalidation}}componentDidCatch(a,c){console.error("React Router caught the following error during render",a,c)}render(){return this.state.error!==void 0?K.createElement(ri.Provider,{value:this.props.routeContext},K.createElement(Lf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function em({routeContext:a,match:c,children:f}){let h=K.useContext(zu);return h&&h.static&&h.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(h.staticContext._deepestRenderedBoundaryId=c.route.id),K.createElement(ri.Provider,{value:a},f)}function nm(a,c=[],f=null,h=null){if(a==null){if(!f)return null;if(f.errors)a=f.matches;else if(c.length===0&&!f.initialized&&f.matches.length>0)a=f.matches;else return null}let g=a,y=f==null?void 0:f.errors;if(y!=null){let k=g.findIndex(_=>_.route.id&&(y==null?void 0:y[_.route.id])!==void 0);Gn(k>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(y).join(",")}`),g=g.slice(0,Math.min(g.length,k+1))}let w=!1,E=-1;if(f)for(let k=0;k<g.length;k++){let _=g[k];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(E=k),_.route.id){let{loaderData:O,errors:R}=f,b=_.route.loader&&!O.hasOwnProperty(_.route.id)&&(!R||R[_.route.id]===void 0);if(_.route.lazy||b){w=!0,E>=0?g=g.slice(0,E+1):g=[g[0]];break}}}return g.reduceRight((k,_,O)=>{let R,b=!1,W=null,L=null;f&&(R=y&&_.route.id?y[_.route.id]:void 0,W=_.route.errorElement||Jh,w&&(E<0&&O===0?(Ep("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,L=null):E===O&&(b=!0,L=_.route.hydrateFallbackElement||null)));let F=c.concat(g.slice(0,O+1)),M=()=>{let A;return R?A=W:b?A=L:_.route.Component?A=K.createElement(_.route.Component,null):_.route.element?A=_.route.element:A=k,K.createElement(em,{match:_,routeContext:{outlet:k,matches:F,isDataRoute:f!=null},children:A})};return f&&(_.route.ErrorBoundary||_.route.errorElement||O===0)?K.createElement($h,{location:f.location,revalidation:f.revalidation,component:W,error:R,children:M(),routeContext:{outlet:null,matches:F,isDataRoute:!0}}):M()},null)}function Mf(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tm(a){let c=K.useContext(zu);return Gn(c,Mf(a)),c}function rm(a){let c=K.useContext(Nc);return Gn(c,Mf(a)),c}function om(a){let c=K.useContext(ri);return Gn(c,Mf(a)),c}function Ff(a){let c=om(a),f=c.matches[c.matches.length-1];return Gn(f.route.id,`${a} can only be used on routes that contain a unique "id"`),f.route.id}function lm(){return Ff("useRouteId")}function im(){var h;let a=K.useContext(Lf),c=rm("useRouteError"),f=Ff("useRouteError");return a!==void 0?a:(h=c.errors)==null?void 0:h[f]}function am(){let{router:a}=tm("useNavigate"),c=Ff("useNavigate"),f=K.useRef(!1);return kp(()=>{f.current=!0}),K.useCallback(async(g,y={})=>{wl(f.current,xp),f.current&&(typeof g=="number"?a.navigate(g):await a.navigate(g,{fromRouteId:c,...y}))},[a,c])}var Td={};function Ep(a,c,f){!c&&!Td[a]&&(Td[a]=!0,wl(!1,f))}K.memo(um);function um({routes:a,future:c,state:f}){return Sp(a,void 0,f,c)}function sm(a){Gn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function cm({basename:a="/",children:c=null,location:f,navigationType:h="POP",navigator:g,static:y=!1}){Gn(!Rs(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let w=a.replace(/^\/*/,"/"),E=K.useMemo(()=>({basename:w,navigator:g,static:y,future:{}}),[w,g,y]);typeof f=="string"&&(f=Cu(f));let{pathname:k="/",search:_="",hash:O="",state:R=null,key:b="default"}=f,W=K.useMemo(()=>{let L=Wi(k,w);return L==null?null:{location:{pathname:L,search:_,hash:O,state:R,key:b},navigationType:h}},[w,k,_,O,R,b,h]);return wl(W!=null,`<Router basename="${w}"> is not able to match the URL "${k}${_}${O}" because it does not start with the basename, so the <Router> won't render anything.`),W==null?null:K.createElement(xl.Provider,{value:E},K.createElement(Os.Provider,{children:c,value:W}))}function Yg({children:a,location:c}){return Kh(Of(a),c)}function Of(a,c=[]){let f=[];return K.Children.forEach(a,(h,g)=>{if(!K.isValidElement(h))return;let y=[...c,g];if(h.type===K.Fragment){f.push.apply(f,Of(h.props.children,y));return}Gn(h.type===sm,`[${typeof h.type=="string"?h.type:h.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Gn(!h.props.index||!h.props.children,"An index route cannot have child routes.");let w={id:h.props.id||y.join("-"),caseSensitive:h.props.caseSensitive,element:h.props.element,Component:h.props.Component,index:h.props.index,path:h.props.path,loader:h.props.loader,action:h.props.action,hydrateFallbackElement:h.props.hydrateFallbackElement,HydrateFallback:h.props.HydrateFallback,errorElement:h.props.errorElement,ErrorBoundary:h.props.ErrorBoundary,hasErrorBoundary:h.props.hasErrorBoundary===!0||h.props.ErrorBoundary!=null||h.props.errorElement!=null,shouldRevalidate:h.props.shouldRevalidate,handle:h.props.handle,lazy:h.props.lazy};h.props.children&&(w.children=Of(h.props.children,y)),f.push(w)}),f}var Cc="get",zc="application/x-www-form-urlencoded";function Dc(a){return a!=null&&typeof a.tagName=="string"}function fm(a){return Dc(a)&&a.tagName.toLowerCase()==="button"}function dm(a){return Dc(a)&&a.tagName.toLowerCase()==="form"}function pm(a){return Dc(a)&&a.tagName.toLowerCase()==="input"}function hm(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function mm(a,c){return a.button===0&&(!c||c==="_self")&&!hm(a)}var Ec=null;function gm(){if(Ec===null)try{new FormData(document.createElement("form"),0),Ec=!1}catch{Ec=!0}return Ec}var vm=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function gf(a){return a!=null&&!vm.has(a)?(wl(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${zc}"`),null):a}function ym(a,c){let f,h,g,y,w;if(dm(a)){let E=a.getAttribute("action");h=E?Wi(E,c):null,f=a.getAttribute("method")||Cc,g=gf(a.getAttribute("enctype"))||zc,y=new FormData(a)}else if(fm(a)||pm(a)&&(a.type==="submit"||a.type==="image")){let E=a.form;if(E==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let k=a.getAttribute("formaction")||E.getAttribute("action");if(h=k?Wi(k,c):null,f=a.getAttribute("formmethod")||E.getAttribute("method")||Cc,g=gf(a.getAttribute("formenctype"))||gf(E.getAttribute("enctype"))||zc,y=new FormData(E,a),!gm()){let{name:_,type:O,value:R}=a;if(O==="image"){let b=_?`${_}.`:"";y.append(`${b}x`,"0"),y.append(`${b}y`,"0")}else _&&y.append(_,R)}}else{if(Dc(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=Cc,h=null,g=zc,w=a}return y&&g==="text/plain"&&(w=y,y=void 0),{action:h,method:f.toLowerCase(),encType:g,formData:y,body:w}}function Af(a,c){if(a===!1||a===null||typeof a>"u")throw new Error(c)}async function wm(a,c){if(a.id in c)return c[a.id];try{let f=await import(a.module);return c[a.id]=f,f}catch(f){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function xm(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function km(a,c,f){let h=await Promise.all(a.map(async g=>{let y=c.routes[g.route.id];if(y){let w=await wm(y,f);return w.links?w.links():[]}return[]}));return _m(h.flat(1).filter(xm).filter(g=>g.rel==="stylesheet"||g.rel==="preload").map(g=>g.rel==="stylesheet"?{...g,rel:"prefetch",as:"style"}:{...g,rel:"prefetch"}))}function Nd(a,c,f,h,g,y){let w=(k,_)=>f[_]?k.route.id!==f[_].route.id:!0,E=(k,_)=>{var O;return f[_].pathname!==k.pathname||((O=f[_].route.path)==null?void 0:O.endsWith("*"))&&f[_].params["*"]!==k.params["*"]};return y==="assets"?c.filter((k,_)=>w(k,_)||E(k,_)):y==="data"?c.filter((k,_)=>{var R;let O=h.routes[k.route.id];if(!O||!O.hasLoader)return!1;if(w(k,_)||E(k,_))return!0;if(k.route.shouldRevalidate){let b=k.route.shouldRevalidate({currentUrl:new URL(g.pathname+g.search+g.hash,window.origin),currentParams:((R=f[0])==null?void 0:R.params)||{},nextUrl:new URL(a,window.origin),nextParams:k.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function Sm(a,c){return Em(a.map(f=>{let h=c.routes[f.route.id];if(!h)return[];let g=[h.module];return h.imports&&(g=g.concat(h.imports)),g}).flat(1))}function Em(a){return[...new Set(a)]}function Pm(a){let c={},f=Object.keys(a).sort();for(let h of f)c[h]=a[h];return c}function _m(a,c){let f=new Set;return new Set(c),a.reduce((h,g)=>{let y=JSON.stringify(Pm(g));return f.has(y)||(f.add(y),h.push({key:y,link:g})),h},[])}function bm(a){let c=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return c.pathname==="/"?c.pathname="_root.data":c.pathname=`${c.pathname.replace(/\/$/,"")}.data`,c}function Cm(){let a=K.useContext(zu);return Af(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function zm(){let a=K.useContext(Nc);return Af(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var If=K.createContext(void 0);If.displayName="FrameworkContext";function Pp(){let a=K.useContext(If);return Af(a,"You must render this element inside a <HydratedRouter> element"),a}function Om(a,c){let f=K.useContext(If),[h,g]=K.useState(!1),[y,w]=K.useState(!1),{onFocus:E,onBlur:k,onMouseEnter:_,onMouseLeave:O,onTouchStart:R}=c,b=K.useRef(null);K.useEffect(()=>{if(a==="render"&&w(!0),a==="viewport"){let F=A=>{A.forEach(j=>{w(j.isIntersecting)})},M=new IntersectionObserver(F,{threshold:.5});return b.current&&M.observe(b.current),()=>{M.disconnect()}}},[a]),K.useEffect(()=>{if(h){let F=setTimeout(()=>{w(!0)},100);return()=>{clearTimeout(F)}}},[h]);let W=()=>{g(!0)},L=()=>{g(!1),w(!1)};return f?a!=="intent"?[y,b,{}]:[y,b,{onFocus:Ss(E,W),onBlur:Ss(k,L),onMouseEnter:Ss(_,W),onMouseLeave:Ss(O,L),onTouchStart:Ss(R,W)}]:[!1,b,{}]}function Ss(a,c){return f=>{a&&a(f),f.defaultPrevented||c(f)}}function Rm({page:a,...c}){let{router:f}=Cm(),h=K.useMemo(()=>pp(f.routes,a,f.basename),[f.routes,a,f.basename]);return h?K.createElement(Nm,{page:a,matches:h,...c}):null}function Tm(a){let{manifest:c,routeModules:f}=Pp(),[h,g]=K.useState([]);return K.useEffect(()=>{let y=!1;return km(a,c,f).then(w=>{y||g(w)}),()=>{y=!0}},[a,c,f]),h}function Nm({page:a,matches:c,...f}){let h=Ra(),{manifest:g,routeModules:y}=Pp(),{loaderData:w,matches:E}=zm(),k=K.useMemo(()=>Nd(a,c,E,g,h,"data"),[a,c,E,g,h]),_=K.useMemo(()=>Nd(a,c,E,g,h,"assets"),[a,c,E,g,h]),O=K.useMemo(()=>{if(a===h.pathname+h.search+h.hash)return[];let W=new Set,L=!1;if(c.forEach(M=>{var j;let A=g.routes[M.route.id];!A||!A.hasLoader||(!k.some(U=>U.route.id===M.route.id)&&M.route.id in w&&((j=y[M.route.id])!=null&&j.shouldRevalidate)||A.hasClientLoader?L=!0:W.add(M.route.id))}),W.size===0)return[];let F=bm(a);return L&&W.size>0&&F.searchParams.set("_routes",c.filter(M=>W.has(M.route.id)).map(M=>M.route.id).join(",")),[F.pathname+F.search]},[w,h,g,k,c,a,y]),R=K.useMemo(()=>Sm(_,g),[_,g]),b=Tm(_);return K.createElement(K.Fragment,null,O.map(W=>K.createElement("link",{key:W,rel:"prefetch",as:"fetch",href:W,...f})),R.map(W=>K.createElement("link",{key:W,rel:"modulepreload",href:W,...f})),b.map(({key:W,link:L})=>K.createElement("link",{key:W,...L})))}function Dm(...a){return c=>{a.forEach(f=>{typeof f=="function"?f(c):f!=null&&(f.current=c)})}}var _p=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{_p&&(window.__reactRouterVersion="7.1.5")}catch{}function Xg({basename:a,children:c,window:f}){let h=K.useRef();h.current==null&&(h.current=kh({window:f,v5Compat:!0}));let g=h.current,[y,w]=K.useState({action:g.action,location:g.location}),E=K.useCallback(k=>{K.startTransition(()=>w(k))},[w]);return K.useLayoutEffect(()=>g.listen(E),[g,E]),K.createElement(cm,{basename:a,children:c,location:y.location,navigationType:y.action,navigator:g})}var bp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cp=K.forwardRef(function({onClick:c,discover:f="render",prefetch:h="none",relative:g,reloadDocument:y,replace:w,state:E,target:k,to:_,preventScrollReset:O,viewTransition:R,...b},W){let{basename:L}=K.useContext(xl),F=typeof _=="string"&&bp.test(_),M,A=!1;if(typeof _=="string"&&F&&(M=_,_p))try{let $=new URL(window.location.href),Pe=_.startsWith("//")?new URL($.protocol+_):new URL(_),tn=Wi(Pe.pathname,L);Pe.origin===$.origin&&tn!=null?_=tn+Pe.search+Pe.hash:A=!0}catch{wl(!1,`<Link to="${_}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let j=Yh(_,{relative:g}),[U,te,oe]=Om(h,b),ge=Am(_,{replace:w,state:E,target:k,preventScrollReset:O,relative:g,viewTransition:R});function z($){c&&c($),$.defaultPrevented||ge($)}let Y=K.createElement("a",{...b,...oe,href:M||j,onClick:A||y?c:z,ref:Dm(W,te),target:k,"data-discover":!F&&f==="render"?"true":void 0});return U&&!F?K.createElement(K.Fragment,null,Y,K.createElement(Rm,{page:j})):Y});Cp.displayName="Link";var Lm=K.forwardRef(function({"aria-current":c="page",caseSensitive:f=!1,className:h="",end:g=!1,style:y,to:w,viewTransition:E,children:k,..._},O){let R=Ts(w,{relative:_.relative}),b=Ra(),W=K.useContext(Nc),{navigator:L,basename:F}=K.useContext(xl),M=W!=null&&Wm(R)&&E===!0,A=L.encodeLocation?L.encodeLocation(R).pathname:R.pathname,j=b.pathname,U=W&&W.navigation&&W.navigation.location?W.navigation.location.pathname:null;f||(j=j.toLowerCase(),U=U?U.toLowerCase():null,A=A.toLowerCase()),U&&F&&(U=Wi(U,F)||U);const te=A!=="/"&&A.endsWith("/")?A.length-1:A.length;let oe=j===A||!g&&j.startsWith(A)&&j.charAt(te)==="/",ge=U!=null&&(U===A||!g&&U.startsWith(A)&&U.charAt(A.length)==="/"),z={isActive:oe,isPending:ge,isTransitioning:M},Y=oe?c:void 0,$;typeof h=="function"?$=h(z):$=[h,oe?"active":null,ge?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let Pe=typeof y=="function"?y(z):y;return K.createElement(Cp,{..._,"aria-current":Y,className:$,ref:O,style:Pe,to:w,viewTransition:E},typeof k=="function"?k(z):k)});Lm.displayName="NavLink";var Mm=K.forwardRef(({discover:a="render",fetcherKey:c,navigate:f,reloadDocument:h,replace:g,state:y,method:w=Cc,action:E,onSubmit:k,relative:_,preventScrollReset:O,viewTransition:R,...b},W)=>{let L=jm(),F=Bm(E,{relative:_}),M=w.toLowerCase()==="get"?"get":"post",A=typeof E=="string"&&bp.test(E),j=U=>{if(k&&k(U),U.defaultPrevented)return;U.preventDefault();let te=U.nativeEvent.submitter,oe=(te==null?void 0:te.getAttribute("formmethod"))||w;L(te||U.currentTarget,{fetcherKey:c,method:oe,navigate:f,replace:g,state:y,relative:_,preventScrollReset:O,viewTransition:R})};return K.createElement("form",{ref:W,method:M,action:F,onSubmit:h?k:j,...b,"data-discover":!A&&a==="render"?"true":void 0})});Mm.displayName="Form";function Fm(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zp(a){let c=K.useContext(zu);return Gn(c,Fm(a)),c}function Am(a,{target:c,replace:f,state:h,preventScrollReset:g,relative:y,viewTransition:w}={}){let E=Xh(),k=Ra(),_=Ts(a,{relative:y});return K.useCallback(O=>{if(mm(O,c)){O.preventDefault();let R=f!==void 0?f:zs(k)===zs(_);E(a,{replace:R,state:h,preventScrollReset:g,relative:y,viewTransition:w})}},[k,E,_,f,h,c,a,g,y,w])}var Im=0,Um=()=>`__${String(++Im)}__`;function jm(){let{router:a}=zp("useSubmit"),{basename:c}=K.useContext(xl),f=lm();return K.useCallback(async(h,g={})=>{let{action:y,method:w,encType:E,formData:k,body:_}=ym(h,c);if(g.navigate===!1){let O=g.fetcherKey||Um();await a.fetch(O,f,g.action||y,{preventScrollReset:g.preventScrollReset,formData:k,body:_,formMethod:g.method||w,formEncType:g.encType||E,flushSync:g.flushSync})}else await a.navigate(g.action||y,{preventScrollReset:g.preventScrollReset,formData:k,body:_,formMethod:g.method||w,formEncType:g.encType||E,replace:g.replace,state:g.state,fromRouteId:f,flushSync:g.flushSync,viewTransition:g.viewTransition})},[a,c,f])}function Bm(a,{relative:c}={}){let{basename:f}=K.useContext(xl),h=K.useContext(ri);Gn(h,"useFormAction must be used inside a RouteContext");let[g]=h.matches.slice(-1),y={...Ts(a||".",{relative:c})},w=Ra();if(a==null){y.search=w.search;let E=new URLSearchParams(y.search),k=E.getAll("index");if(k.some(O=>O==="")){E.delete("index"),k.filter(R=>R).forEach(R=>E.append("index",R));let O=E.toString();y.search=O?`?${O}`:""}}return(!a||a===".")&&g.route.index&&(y.search=y.search?y.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(y.pathname=y.pathname==="/"?f:ti([f,y.pathname])),zs(y)}function Wm(a,c={}){let f=K.useContext(wp);Gn(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:h}=zp("useViewTransitionState"),g=Ts(a,{relative:c.relative});if(!f.isTransitioning)return!1;let y=Wi(f.currentLocation.pathname,h)||f.currentLocation.pathname,w=Wi(f.nextLocation.pathname,h)||f.nextLocation.pathname;return Rc(g.pathname,w)!=null||Rc(g.pathname,y)!=null}new TextEncoder;var vf={exports:{}},Ii={};/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd;function Hm(){return Dd||(Dd=1,Ii.ConcurrentRoot=1,Ii.ContinuousEventPriority=4,Ii.DefaultEventPriority=16,Ii.DiscreteEventPriority=1,Ii.IdleEventPriority=536870912,Ii.LegacyRoot=0),Ii}var Ld;function Vm(){return Ld||(Ld=1,vf.exports=Hm()),vf.exports}var Gg=Vm();function Qm(a){let c;const f=new Set,h=(_,O)=>{const R=typeof _=="function"?_(c):_;if(R!==c){const b=c;c=O?R:Object.assign({},c,R),f.forEach(W=>W(c,b))}},g=()=>c,y=(_,O=g,R=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let b=O(c);function W(){const L=O(c);if(!R(b,L)){const F=b;_(b=L,F)}}return f.add(W),()=>f.delete(W)},k={setState:h,getState:g,subscribe:(_,O,R)=>O||R?y(_,O,R):(f.add(_),()=>f.delete(_)),destroy:()=>f.clear()};return c=a(h,g,k),k}const qm=typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Md=qm?K.useEffect:K.useLayoutEffect;function Kg(a){const c=typeof a=="function"?Qm(a):a,f=(h=c.getState,g=Object.is)=>{const[,y]=K.useReducer(M=>M+1,0),w=c.getState(),E=K.useRef(w),k=K.useRef(h),_=K.useRef(g),O=K.useRef(!1),R=K.useRef();R.current===void 0&&(R.current=h(w));let b,W=!1;(E.current!==w||k.current!==h||_.current!==g||O.current)&&(b=h(w),W=!g(R.current,b)),Md(()=>{W&&(R.current=b),E.current=w,k.current=h,_.current=g,O.current=!1});const L=K.useRef(w);Md(()=>{const M=()=>{try{const j=c.getState(),U=k.current(j);_.current(R.current,U)||(E.current=j,R.current=U,y())}catch{O.current=!0,y()}},A=c.subscribe(M);return c.getState()!==L.current&&M(),A},[]);const F=W?b:R.current;return K.useDebugValue(F),F};return Object.assign(f,c),f[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const h=[f,c];return{next(){const g=h.length<=0;return{value:h.shift(),done:g}}}},f}const Ym=a=>typeof a=="object"&&typeof a.then=="function",Oa=[];function Op(a,c,f=(h,g)=>h===g){if(a===c)return!0;if(!a||!c)return!1;const h=a.length;if(c.length!==h)return!1;for(let g=0;g<h;g++)if(!f(a[g],c[g]))return!1;return!0}function Rp(a,c=null,f=!1,h={}){c===null&&(c=[a]);for(const y of Oa)if(Op(c,y.keys,y.equal)){if(f)return;if(Object.prototype.hasOwnProperty.call(y,"error"))throw y.error;if(Object.prototype.hasOwnProperty.call(y,"response"))return h.lifespan&&h.lifespan>0&&(y.timeout&&clearTimeout(y.timeout),y.timeout=setTimeout(y.remove,h.lifespan)),y.response;if(!f)throw y.promise}const g={keys:c,equal:h.equal,remove:()=>{const y=Oa.indexOf(g);y!==-1&&Oa.splice(y,1)},promise:(Ym(a)?a:a(...c)).then(y=>{g.response=y,h.lifespan&&h.lifespan>0&&(g.timeout=setTimeout(g.remove,h.lifespan))}).catch(y=>g.error=y)};if(Oa.push(g),!f)throw g.promise}const Zg=(a,c,f)=>Rp(a,c,!1,f),Jg=(a,c,f)=>void Rp(a,c,!0,f),$g=a=>{if(a===void 0||a.length===0)Oa.splice(0,Oa.length);else{const c=Oa.find(f=>Op(a,f.keys,f.equal));c&&c.remove()}};var yf={exports:{}},wf={exports:{}},xf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fd;function Xm(){return Fd||(Fd=1,function(a){function c(X,V){var H=X.length;X.push(V);e:for(;0<H;){var x=H-1>>>1,T=X[x];if(0<g(T,V))X[x]=V,X[H]=T,H=x;else break e}}function f(X){return X.length===0?null:X[0]}function h(X){if(X.length===0)return null;var V=X[0],H=X.pop();if(H!==V){X[0]=H;e:for(var x=0,T=X.length,se=T>>>1;x<se;){var re=2*(x+1)-1,ee=X[re],le=re+1,ne=X[le];if(0>g(ee,H))le<T&&0>g(ne,ee)?(X[x]=ne,X[le]=H,x=le):(X[x]=ee,X[re]=H,x=re);else if(le<T&&0>g(ne,H))X[x]=ne,X[le]=H,x=le;else break e}}return V}function g(X,V){var H=X.sortIndex-V.sortIndex;return H!==0?H:X.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var y=performance;a.unstable_now=function(){return y.now()}}else{var w=Date,E=w.now();a.unstable_now=function(){return w.now()-E}}var k=[],_=[],O=1,R=null,b=3,W=!1,L=!1,F=!1,M=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U(X){for(var V=f(_);V!==null;){if(V.callback===null)h(_);else if(V.startTime<=X)h(_),V.sortIndex=V.expirationTime,c(k,V);else break;V=f(_)}}function te(X){if(F=!1,U(X),!L)if(f(k)!==null)L=!0,dn(oe);else{var V=f(_);V!==null&&an(te,V.startTime-X)}}function oe(X,V){L=!1,F&&(F=!1,A(Y),Y=-1),W=!0;var H=b;try{for(U(V),R=f(k);R!==null&&(!(R.expirationTime>V)||X&&!tn());){var x=R.callback;if(typeof x=="function"){R.callback=null,b=R.priorityLevel;var T=x(R.expirationTime<=V);V=a.unstable_now(),typeof T=="function"?R.callback=T:R===f(k)&&h(k),U(V)}else h(k);R=f(k)}if(R!==null)var se=!0;else{var re=f(_);re!==null&&an(te,re.startTime-V),se=!1}return se}finally{R=null,b=H,W=!1}}var ge=!1,z=null,Y=-1,$=5,Pe=-1;function tn(){return!(a.unstable_now()-Pe<$)}function Xe(){if(z!==null){var X=a.unstable_now();Pe=X;var V=!0;try{V=z(!0,X)}finally{V?Ze():(ge=!1,z=null)}}else ge=!1}var Ze;if(typeof j=="function")Ze=function(){j(Xe)};else if(typeof MessageChannel<"u"){var cn=new MessageChannel,Dn=cn.port2;cn.port1.onmessage=Xe,Ze=function(){Dn.postMessage(null)}}else Ze=function(){M(Xe,0)};function dn(X){z=X,ge||(ge=!0,Ze())}function an(X,V){Y=M(function(){X(a.unstable_now())},V)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(X){X.callback=null},a.unstable_continueExecution=function(){L||W||(L=!0,dn(oe))},a.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<X?Math.floor(1e3/X):5},a.unstable_getCurrentPriorityLevel=function(){return b},a.unstable_getFirstCallbackNode=function(){return f(k)},a.unstable_next=function(X){switch(b){case 1:case 2:case 3:var V=3;break;default:V=b}var H=b;b=V;try{return X()}finally{b=H}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(X,V){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var H=b;b=X;try{return V()}finally{b=H}},a.unstable_scheduleCallback=function(X,V,H){var x=a.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?x+H:x):H=x,X){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=H+T,X={id:O++,callback:V,priorityLevel:X,startTime:H,expirationTime:T,sortIndex:-1},H>x?(X.sortIndex=H,c(_,X),f(k)===null&&X===f(_)&&(F?(A(Y),Y=-1):F=!0,an(te,H-x))):(X.sortIndex=T,c(k,X),L||W||(L=!0,dn(oe))),X},a.unstable_shouldYield=tn,a.unstable_wrapCallback=function(X){var V=b;return function(){var H=b;b=V;try{return X.apply(this,arguments)}finally{b=H}}}}(xf)),xf}var Ad;function Tp(){return Ad||(Ad=1,wf.exports=Xm()),wf.exports}/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kf,Id;function Gm(){return Id||(Id=1,kf=function(c){var f={},h=bu(),g=Tp(),y=Object.assign;function w(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var E=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),_=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),L=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),A=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),te=Symbol.for("react.offscreen"),oe=Symbol.iterator;function ge(t){return t===null||typeof t!="object"?null:(t=oe&&t[oe]||t["@@iterator"],typeof t=="function"?t:null)}function z(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case _:return"Portal";case b:return"Profiler";case R:return"StrictMode";case M:return"Suspense";case A:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case L:return(t.displayName||"Context")+".Consumer";case W:return(t._context.displayName||"Context")+".Provider";case F:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case j:return r=t.displayName||null,r!==null?r:z(t.type)||"Memo";case U:r=t._payload,t=t._init;try{return z(t(r))}catch{}}return null}function Y(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return z(r);case 8:return r===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function $(t){var r=t,l=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,r.flags&4098&&(l=r.return),t=r.return;while(t)}return r.tag===3?l:null}function Pe(t){if($(t)!==t)throw Error(w(188))}function tn(t){var r=t.alternate;if(!r){if(r=$(t),r===null)throw Error(w(188));return r!==t?null:t}for(var l=t,u=r;;){var d=l.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){l=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===l)return Pe(d),t;if(m===u)return Pe(d),r;m=m.sibling}throw Error(w(188))}if(l.return!==u.return)l=d,u=m;else{for(var S=!1,D=d.child;D;){if(D===l){S=!0,l=d,u=m;break}if(D===u){S=!0,u=d,l=m;break}D=D.sibling}if(!S){for(D=m.child;D;){if(D===l){S=!0,l=m,u=d;break}if(D===u){S=!0,u=m,l=d;break}D=D.sibling}if(!S)throw Error(w(189))}}if(l.alternate!==u)throw Error(w(190))}if(l.tag!==3)throw Error(w(188));return l.stateNode.current===l?t:r}function Xe(t){return t=tn(t),t!==null?Ze(t):null}function Ze(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=Ze(t);if(r!==null)return r;t=t.sibling}return null}function cn(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){if(t.tag!==4){var r=cn(t);if(r!==null)return r}t=t.sibling}return null}var Dn=Array.isArray,dn=c.getPublicInstance,an=c.getRootHostContext,X=c.getChildHostContext,V=c.prepareForCommit,H=c.resetAfterCommit,x=c.createInstance,T=c.appendInitialChild,se=c.finalizeInitialChildren,re=c.prepareUpdate,ee=c.shouldSetTextContent,le=c.createTextInstance,ne=c.scheduleTimeout,ue=c.cancelTimeout,ye=c.noTimeout,je=c.isPrimaryRenderer,Qe=c.supportsMutation,xe=c.supportsPersistence,Je=c.supportsHydration,Ln=c.getInstanceFromNode,Ue=c.preparePortalMount,$e=c.getCurrentEventPriority,en=c.detachDeletedInstance,he=c.supportsMicrotasks,Le=c.scheduleMicrotask,Re=c.supportsTestSelectors,fe=c.findFiberRoot,mn=c.getBoundingRect,Ne=c.getTextContent,Fe=c.isHiddenSubtree,De=c.matchAccessibilityRole,vn=c.setFocusIfFocusable,Sn=c.setupIntersectionObserver,qe=c.appendChild,yn=c.appendChildToContainer,En=c.commitTextUpdate,$t=c.commitMount,Kr=c.commitUpdate,Or=c.insertBefore,pn=c.insertInContainerBefore,On=c.removeChild,er=c.removeChildFromContainer,nr=c.resetTextContent,kl=c.hideInstance,Hn=c.hideTextInstance,Vn=c.unhideInstance,fo=c.unhideTextInstance,po=c.clearContainer,Hi=c.cloneInstance,Sl=c.createContainerChildSet,Zr=c.appendChildToContainerChildSet,tr=c.finalizeContainerChildren,Rr=c.replaceContainerChildren,Qo=c.cloneHiddenInstance,oi=c.cloneHiddenTextInstance,qo=c.canHydrateInstance,Vi=c.canHydrateTextInstance,ho=c.canHydrateSuspenseInstance,El=c.isSuspenseInstancePending,mr=c.isSuspenseInstanceFallback,Yo=c.registerSuspenseInstanceRetry,Tr=c.getNextHydratableSibling,Xo=c.getFirstHydratableChild,Go=c.getFirstHydratableChildWithinContainer,Qi=c.getFirstHydratableChildWithinSuspenseInstance,Ta=c.hydrateInstance,Nr=c.hydrateTextInstance,Na=c.hydrateSuspenseInstance,qi=c.getNextHydratableInstanceAfterSuspenseInstance,Pl=c.commitHydratedContainer,li=c.commitHydratedSuspenseInstance,Da=c.clearSuspenseBoundary,Yi=c.clearSuspenseBoundaryFromContainer,_l=c.shouldDeleteUnhydratedTailInstances,Xi=c.didNotMatchHydratedContainerTextInstance,Gi=c.didNotMatchHydratedTextInstance,ve;function Dr(t){if(ve===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);ve=r&&r[1]||""}return`
`+ve+t}var bl=!1;function Lr(t,r){if(!t||bl)return"";bl=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(de){var u=de}Reflect.construct(t,[],r)}else{try{r.call()}catch(de){u=de}t.call(r.prototype)}else{try{throw Error()}catch(de){u=de}t()}}catch(de){if(de&&u&&typeof de.stack=="string"){for(var d=de.stack.split(`
`),m=u.stack.split(`
`),S=d.length-1,D=m.length-1;1<=S&&0<=D&&d[S]!==m[D];)D--;for(;1<=S&&0<=D;S--,D--)if(d[S]!==m[D]){if(S!==1||D!==1)do if(S--,D--,0>D||d[S]!==m[D]){var J=`
`+d[S].replace(" at new "," at ");return t.displayName&&J.includes("<anonymous>")&&(J=J.replace("<anonymous>",t.displayName)),J}while(1<=S&&0<=D);break}}}finally{bl=!1,Error.prepareStackTrace=l}return(t=t?t.displayName||t.name:"")?Dr(t):""}var mo=Object.prototype.hasOwnProperty,ii=[],Mr=-1;function bt(t){return{current:t}}function nn(t){0>Mr||(t.current=ii[Mr],ii[Mr]=null,Mr--)}function gn(t,r){Mr++,ii[Mr]=t.current,t.current=r}var Mn={},et=bt(Mn),it=bt(!1),Jr=Mn;function Lt(t,r){var l=t.type.contextTypes;if(!l)return Mn;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in l)d[m]=r[m];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=d),d}function Qn(t){return t=t.childContextTypes,t!=null}function Mt(){nn(it),nn(et)}function go(t,r,l){if(et.current!==Mn)throw Error(w(168));gn(et,r),gn(it,l)}function ai(t,r,l){var u=t.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return l;u=u.getChildContext();for(var d in u)if(!(d in r))throw Error(w(108,Y(t)||"Unknown",d));return y({},l,u)}function Ko(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mn,Jr=et.current,gn(et,t),gn(it,it.current),!0}function Ft(t,r,l){var u=t.stateNode;if(!u)throw Error(w(169));l?(t=ai(t,r,Jr),u.__reactInternalMemoizedMergedChildContext=t,nn(it),nn(et),gn(et,t)):nn(it),gn(it,l)}var Qt=Math.clz32?Math.clz32:La,Zo=Math.log,Fr=Math.LN2;function La(t){return t>>>=0,t===0?32:31-(Zo(t)/Fr|0)|0}var Ar=64,rn=4194304;function $r(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jo(t,r){var l=t.pendingLanes;if(l===0)return 0;var u=0,d=t.suspendedLanes,m=t.pingedLanes,S=l&268435455;if(S!==0){var D=S&~d;D!==0?u=$r(D):(m&=S,m!==0&&(u=$r(m)))}else S=l&~d,S!==0?u=$r(S):m!==0&&(u=$r(m));if(u===0)return 0;if(r!==0&&r!==u&&!(r&d)&&(d=u&-u,m=r&-r,d>=m||d===16&&(m&4194240)!==0))return r;if(u&4&&(u|=l&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=u;0<r;)l=31-Qt(r),d=1<<l,u|=t[l],r&=~d;return u}function ui(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function si(t,r){for(var l=t.suspendedLanes,u=t.pingedLanes,d=t.expirationTimes,m=t.pendingLanes;0<m;){var S=31-Qt(m),D=1<<S,J=d[S];J===-1?(!(D&l)||D&u)&&(d[S]=ui(D,r)):J<=r&&(t.expiredLanes|=D),m&=~D}}function eo(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Cl(t){for(var r=[],l=0;31>l;l++)r.push(t);return r}function gr(t,r,l){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Qt(r),t[r]=l}function Ir(t,r){var l=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<l;){var d=31-Qt(l),m=1<<d;r[d]=0,u[d]=-1,t[d]=-1,l&=~m}}function vt(t,r){var l=t.entangledLanes|=r;for(t=t.entanglements;l;){var u=31-Qt(l),d=1<<u;d&r|t[u]&r&&(t[u]|=r),l&=~d}}var Be=0;function vr(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var rr=g.unstable_scheduleCallback,no=g.unstable_cancelCallback,yr=g.unstable_shouldYield,Ma=g.unstable_requestPaint,Rn=g.unstable_now,Ur=g.unstable_ImmediatePriority,Fa=g.unstable_UserBlockingPriority,Ct=g.unstable_NormalPriority,$o=g.unstable_IdlePriority,el=null,or=null;function vo(t){if(or&&typeof or.onCommitFiberRoot=="function")try{or.onCommitFiberRoot(el,t,void 0,(t.current.flags&128)===128)}catch{}}function nl(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var at=typeof Object.is=="function"?Object.is:nl,ut=null,to=!1,wr=!1;function zl(t){ut===null?ut=[t]:ut.push(t)}function tl(t){to=!0,zl(t)}function zt(){if(!wr&&ut!==null){wr=!0;var t=0,r=Be;try{var l=ut;for(Be=1;t<l.length;t++){var u=l[t];do u=u(!0);while(u!==null)}ut=null,to=!1}catch(d){throw ut!==null&&(ut=ut.slice(t+1)),rr(Ur,zt),d}finally{Be=r,wr=!1}}return null}var rl=E.ReactCurrentBatchConfig;function qt(t,r){if(at(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var l=Object.keys(t),u=Object.keys(r);if(l.length!==u.length)return!1;for(u=0;u<l.length;u++){var d=l[u];if(!mo.call(r,d)||!at(t[d],r[d]))return!1}return!0}function yo(t){switch(t.tag){case 5:return Dr(t.type);case 16:return Dr("Lazy");case 13:return Dr("Suspense");case 19:return Dr("SuspenseList");case 0:case 2:case 15:return t=Lr(t.type,!1),t;case 11:return t=Lr(t.type.render,!1),t;case 1:return t=Lr(t.type,!0),t;default:return""}}function st(t,r){if(t&&t.defaultProps){r=y({},r),t=t.defaultProps;for(var l in t)r[l]===void 0&&(r[l]=t[l]);return r}return r}var nt=bt(null),wo=null,Yt=null,xo=null;function ct(){xo=Yt=wo=null}function ko(t,r,l){je?(gn(nt,r._currentValue),r._currentValue=l):(gn(nt,r._currentValue2),r._currentValue2=l)}function Kn(t){var r=nt.current;nn(nt),je?t._currentValue=r:t._currentValue2=r}function tt(t,r,l){for(;t!==null;){var u=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),t===l)break;t=t.return}}function qn(t,r){wo=t,xo=Yt=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&r&&(ht=!0),t.firstContext=null)}function Fn(t){var r=je?t._currentValue:t._currentValue2;if(xo!==t)if(t={context:t,memoizedValue:r,next:null},Yt===null){if(wo===null)throw Error(w(308));Yt=t,wo.dependencies={lanes:0,firstContext:t}}else Yt=Yt.next=t;return r}var At=null,xr=!1;function ci(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ou(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function So(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function ol(t,r){var l=t.updateQueue;l!==null&&(l=l.shared,Xn!==null&&t.mode&1&&!(Ge&2)?(t=l.interleaved,t===null?(r.next=r,At===null?At=[l]:At.push(l)):(r.next=t.next,t.next=r),l.interleaved=r):(t=l.pending,t===null?r.next=r:(r.next=t.next,t.next=r),l.pending=r))}function Aa(t,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var u=r.lanes;u&=t.pendingLanes,l|=u,r.lanes=l,vt(t,l)}}function Ia(t,r){var l=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,l===u)){var d=null,m=null;if(l=l.firstBaseUpdate,l!==null){do{var S={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};m===null?d=m=S:m=m.next=S,l=l.next}while(l!==null);m===null?d=m=r:m=m.next=r}else d=m=r;l={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=r:t.next=r,l.lastBaseUpdate=r}function Ua(t,r,l,u){var d=t.updateQueue;xr=!1;var m=d.firstBaseUpdate,S=d.lastBaseUpdate,D=d.shared.pending;if(D!==null){d.shared.pending=null;var J=D,de=J.next;J.next=null,S===null?m=de:S.next=de,S=J;var Ee=t.alternate;Ee!==null&&(Ee=Ee.updateQueue,D=Ee.lastBaseUpdate,D!==S&&(D===null?Ee.firstBaseUpdate=de:D.next=de,Ee.lastBaseUpdate=J))}if(m!==null){var He=d.baseState;S=0,Ee=de=J=null,D=m;do{var Me=D.lane,Ke=D.eventTime;if((u&Me)===Me){Ee!==null&&(Ee=Ee.next={eventTime:Ke,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var ke=t,Et=D;switch(Me=r,Ke=l,Et.tag){case 1:if(ke=Et.payload,typeof ke=="function"){He=ke.call(Ke,He,Me);break e}He=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=Et.payload,Me=typeof ke=="function"?ke.call(Ke,He,Me):ke,Me==null)break e;He=y({},He,Me);break e;case 2:xr=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,Me=d.effects,Me===null?d.effects=[D]:Me.push(D))}else Ke={eventTime:Ke,lane:Me,tag:D.tag,payload:D.payload,callback:D.callback,next:null},Ee===null?(de=Ee=Ke,J=He):Ee=Ee.next=Ke,S|=Me;if(D=D.next,D===null){if(D=d.shared.pending,D===null)break;Me=D,D=Me.next,Me.next=null,d.lastBaseUpdate=Me,d.shared.pending=null}}while(!0);if(Ee===null&&(J=He),d.baseState=J,d.firstBaseUpdate=de,d.lastBaseUpdate=Ee,r=d.shared.interleaved,r!==null){d=r;do S|=d.lane,d=d.next;while(d!==r)}else m===null&&(d.shared.lanes=0);io|=S,t.lanes=S,t.memoizedState=He}}function Ns(t,r,l){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var u=t[r],d=u.callback;if(d!==null){if(u.callback=null,u=l,typeof d!="function")throw Error(w(191,d));d.call(u)}}}var Ds=new h.Component().refs;function Ru(t,r,l,u){r=t.memoizedState,l=l(u,r),l=l==null?r:y({},r,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var ja={isMounted:function(t){return(t=t._reactInternals)?$(t)===t:!1},enqueueSetState:function(t,r,l){t=t._reactInternals;var u=sn(),d=qr(t),m=So(u,d);m.payload=r,l!=null&&(m.callback=l),ol(t,m),r=Tt(t,d,u),r!==null&&Aa(r,t,d)},enqueueReplaceState:function(t,r,l){t=t._reactInternals;var u=sn(),d=qr(t),m=So(u,d);m.tag=1,m.payload=r,l!=null&&(m.callback=l),ol(t,m),r=Tt(t,d,u),r!==null&&Aa(r,t,d)},enqueueForceUpdate:function(t,r){t=t._reactInternals;var l=sn(),u=qr(t),d=So(l,u);d.tag=2,r!=null&&(d.callback=r),ol(t,d),r=Tt(t,u,l),r!==null&&Aa(r,t,u)}};function Tu(t,r,l,u,d,m,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,m,S):r.prototype&&r.prototype.isPureReactComponent?!qt(l,u)||!qt(d,m):!0}function Ls(t,r,l){var u=!1,d=Mn,m=r.contextType;return typeof m=="object"&&m!==null?m=Fn(m):(d=Qn(r)?Jr:et.current,u=r.contextTypes,m=(u=u!=null)?Lt(t,d):Mn),r=new r(l,m),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ja,t.stateNode=r,r._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=m),r}function Ms(t,r,l,u){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,u),r.state!==t&&ja.enqueueReplaceState(r,r.state,null)}function Nu(t,r,l,u){var d=t.stateNode;d.props=l,d.state=t.memoizedState,d.refs=Ds,ci(t);var m=r.contextType;typeof m=="object"&&m!==null?d.context=Fn(m):(m=Qn(r)?Jr:et.current,d.context=Lt(t,m)),d.state=t.memoizedState,m=r.getDerivedStateFromProps,typeof m=="function"&&(Ru(t,r,m,l),d.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&ja.enqueueReplaceState(d,d.state,null),Ua(t,l,d,u),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}var fi=[],ll=0,Ba=null,Wa=0,kr=[],lr=0,Ol=null,Eo=1,Po="";function Rl(t,r){fi[ll++]=Wa,fi[ll++]=Ba,Ba=t,Wa=r}function Fs(t,r,l){kr[lr++]=Eo,kr[lr++]=Po,kr[lr++]=Ol,Ol=t;var u=Eo;t=Po;var d=32-Qt(u)-1;u&=~(1<<d),l+=1;var m=32-Qt(r)+d;if(30<m){var S=d-d%5;m=(u&(1<<S)-1).toString(32),u>>=S,d-=S,Eo=1<<32-Qt(r)+d|l<<d|u,Po=m+t}else Eo=1<<m|l<<d|u,Po=t}function Du(t){t.return!==null&&(Rl(t,1),Fs(t,1,0))}function Lu(t){for(;t===Ba;)Ba=fi[--ll],fi[ll]=null,Wa=fi[--ll],fi[ll]=null;for(;t===Ol;)Ol=kr[--lr],kr[lr]=null,Po=kr[--lr],kr[lr]=null,Eo=kr[--lr],kr[lr]=null}var It=null,yt=null,Tn=!1,di=!1,Sr=null;function Mu(t,r){var l=dr(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=t,r=t.deletions,r===null?(t.deletions=[l],t.flags|=16):r.push(l)}function Fu(t,r){switch(t.tag){case 5:return r=qo(r,t.type,t.pendingProps),r!==null?(t.stateNode=r,It=t,yt=Xo(r),!0):!1;case 6:return r=Vi(r,t.pendingProps),r!==null?(t.stateNode=r,It=t,yt=null,!0):!1;case 13:if(r=ho(r),r!==null){var l=Ol!==null?{id:Eo,overflow:Po}:null;return t.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=dr(18,null,null,0),l.stateNode=r,l.return=t,t.child=l,It=t,yt=null,!0}return!1;default:return!1}}function Ha(t){return(t.mode&1)!==0&&(t.flags&128)===0}function il(t){if(Tn){var r=yt;if(r){var l=r;if(!Fu(t,r)){if(Ha(t))throw Error(w(418));r=Tr(l);var u=It;r&&Fu(t,r)?Mu(u,l):(t.flags=t.flags&-4097|2,Tn=!1,It=t)}}else{if(Ha(t))throw Error(w(418));t.flags=t.flags&-4097|2,Tn=!1,It=t}}}function As(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;It=t}function Ki(t){if(!Je||t!==It)return!1;if(!Tn)return As(t),Tn=!0,!1;if(t.tag!==3&&(t.tag!==5||_l(t.type)&&!ee(t.type,t.memoizedProps))){var r=yt;if(r){if(Ha(t)){for(t=yt;t;)t=Tr(t);throw Error(w(418))}for(;r;)Mu(t,r),r=Tr(r)}}if(As(t),t.tag===13){if(!Je)throw Error(w(316));if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));yt=qi(t)}else yt=It?Tr(t.stateNode):null;return!0}function pi(){Je&&(yt=It=null,di=Tn=!1)}function Va(t){Sr===null?Sr=[t]:Sr.push(t)}function hi(t,r,l){if(t=l.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(w(309));var u=l.stateNode}if(!u)throw Error(w(147,t));var d=u,m=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===m?r.ref:(r=function(S){var D=d.refs;D===Ds&&(D=d.refs={}),S===null?delete D[m]:D[m]=S},r._stringRef=m,r)}if(typeof t!="string")throw Error(w(284));if(!l._owner)throw Error(w(290,t))}return t}function al(t,r){throw t=Object.prototype.toString.call(r),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function mi(t){var r=t._init;return r(t._payload)}function Is(t){function r(q,I){if(t){var Z=q.deletions;Z===null?(q.deletions=[I],q.flags|=16):Z.push(I)}}function l(q,I){if(!t)return null;for(;I!==null;)r(q,I),I=I.sibling;return null}function u(q,I){for(q=new Map;I!==null;)I.key!==null?q.set(I.key,I):q.set(I.index,I),I=I.sibling;return q}function d(q,I){return q=Io(q,I),q.index=0,q.sibling=null,q}function m(q,I,Z){return q.index=Z,t?(Z=q.alternate,Z!==null?(Z=Z.index,Z<I?(q.flags|=2,I):Z):(q.flags|=2,I)):(q.flags|=1048576,I)}function S(q){return t&&q.alternate===null&&(q.flags|=2),q}function D(q,I,Z,we){return I===null||I.tag!==6?(I=vu(Z,q.mode,we),I.return=q,I):(I=d(I,Z),I.return=q,I)}function J(q,I,Z,we){var ze=Z.type;return ze===O?Ee(q,I,Z.props.children,we,Z.key):I!==null&&(I.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===U&&mi(ze)===I.type)?(we=d(I,Z.props),we.ref=hi(q,I,Z),we.return=q,we):(we=gu(Z.type,Z.key,Z.props,null,q.mode,we),we.ref=hi(q,I,Z),we.return=q,we)}function de(q,I,Z,we){return I===null||I.tag!==4||I.stateNode.containerInfo!==Z.containerInfo||I.stateNode.implementation!==Z.implementation?(I=yu(Z,q.mode,we),I.return=q,I):(I=d(I,Z.children||[]),I.return=q,I)}function Ee(q,I,Z,we,ze){return I===null||I.tag!==7?(I=Jl(Z,q.mode,we,ze),I.return=q,I):(I=d(I,Z),I.return=q,I)}function He(q,I,Z){if(typeof I=="string"&&I!==""||typeof I=="number")return I=vu(""+I,q.mode,Z),I.return=q,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case k:return Z=gu(I.type,I.key,I.props,null,q.mode,Z),Z.ref=hi(q,null,I),Z.return=q,Z;case _:return I=yu(I,q.mode,Z),I.return=q,I;case U:var we=I._init;return He(q,we(I._payload),Z)}if(Dn(I)||ge(I))return I=Jl(I,q.mode,Z,null),I.return=q,I;al(q,I)}return null}function Me(q,I,Z,we){var ze=I!==null?I.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return ze!==null?null:D(q,I,""+Z,we);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case k:return Z.key===ze?J(q,I,Z,we):null;case _:return Z.key===ze?de(q,I,Z,we):null;case U:return ze=Z._init,Me(q,I,ze(Z._payload),we)}if(Dn(Z)||ge(Z))return ze!==null?null:Ee(q,I,Z,we,null);al(q,Z)}return null}function Ke(q,I,Z,we,ze){if(typeof we=="string"&&we!==""||typeof we=="number")return q=q.get(Z)||null,D(I,q,""+we,ze);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case k:return q=q.get(we.key===null?Z:we.key)||null,J(I,q,we,ze);case _:return q=q.get(we.key===null?Z:we.key)||null,de(I,q,we,ze);case U:var Ye=we._init;return Ke(q,I,Z,Ye(we._payload),ze)}if(Dn(we)||ge(we))return q=q.get(Z)||null,Ee(I,q,we,ze,null);al(I,we)}return null}function ke(q,I,Z,we){for(var ze=null,Ye=null,Ve=I,un=I=0,Jn=null;Ve!==null&&un<Z.length;un++){Ve.index>un?(Jn=Ve,Ve=null):Jn=Ve.sibling;var ln=Me(q,Ve,Z[un],we);if(ln===null){Ve===null&&(Ve=Jn);break}t&&Ve&&ln.alternate===null&&r(q,Ve),I=m(ln,I,un),Ye===null?ze=ln:Ye.sibling=ln,Ye=ln,Ve=Jn}if(un===Z.length)return l(q,Ve),Tn&&Rl(q,un),ze;if(Ve===null){for(;un<Z.length;un++)Ve=He(q,Z[un],we),Ve!==null&&(I=m(Ve,I,un),Ye===null?ze=Ve:Ye.sibling=Ve,Ye=Ve);return Tn&&Rl(q,un),ze}for(Ve=u(q,Ve);un<Z.length;un++)Jn=Ke(Ve,q,un,Z[un],we),Jn!==null&&(t&&Jn.alternate!==null&&Ve.delete(Jn.key===null?un:Jn.key),I=m(Jn,I,un),Ye===null?ze=Jn:Ye.sibling=Jn,Ye=Jn);return t&&Ve.forEach(function(Uo){return r(q,Uo)}),Tn&&Rl(q,un),ze}function Et(q,I,Z,we){var ze=ge(Z);if(typeof ze!="function")throw Error(w(150));if(Z=ze.call(Z),Z==null)throw Error(w(151));for(var Ye=ze=null,Ve=I,un=I=0,Jn=null,ln=Z.next();Ve!==null&&!ln.done;un++,ln=Z.next()){Ve.index>un?(Jn=Ve,Ve=null):Jn=Ve.sibling;var Uo=Me(q,Ve,ln.value,we);if(Uo===null){Ve===null&&(Ve=Jn);break}t&&Ve&&Uo.alternate===null&&r(q,Ve),I=m(Uo,I,un),Ye===null?ze=Uo:Ye.sibling=Uo,Ye=Uo,Ve=Jn}if(ln.done)return l(q,Ve),Tn&&Rl(q,un),ze;if(Ve===null){for(;!ln.done;un++,ln=Z.next())ln=He(q,ln.value,we),ln!==null&&(I=m(ln,I,un),Ye===null?ze=ln:Ye.sibling=ln,Ye=ln);return Tn&&Rl(q,un),ze}for(Ve=u(q,Ve);!ln.done;un++,ln=Z.next())ln=Ke(Ve,q,un,ln.value,we),ln!==null&&(t&&ln.alternate!==null&&Ve.delete(ln.key===null?un:ln.key),I=m(ln,I,un),Ye===null?ze=ln:Ye.sibling=ln,Ye=ln);return t&&Ve.forEach(function(ps){return r(q,ps)}),Tn&&Rl(q,un),ze}function pr(q,I,Z,we){if(typeof Z=="object"&&Z!==null&&Z.type===O&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case k:e:{for(var ze=Z.key,Ye=I;Ye!==null;){if(Ye.key===ze){if(ze=Z.type,ze===O){if(Ye.tag===7){l(q,Ye.sibling),I=d(Ye,Z.props.children),I.return=q,q=I;break e}}else if(Ye.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===U&&mi(ze)===Ye.type){l(q,Ye.sibling),I=d(Ye,Z.props),I.ref=hi(q,Ye,Z),I.return=q,q=I;break e}l(q,Ye);break}else r(q,Ye);Ye=Ye.sibling}Z.type===O?(I=Jl(Z.props.children,q.mode,we,Z.key),I.return=q,q=I):(we=gu(Z.type,Z.key,Z.props,null,q.mode,we),we.ref=hi(q,I,Z),we.return=q,q=we)}return S(q);case _:e:{for(Ye=Z.key;I!==null;){if(I.key===Ye)if(I.tag===4&&I.stateNode.containerInfo===Z.containerInfo&&I.stateNode.implementation===Z.implementation){l(q,I.sibling),I=d(I,Z.children||[]),I.return=q,q=I;break e}else{l(q,I);break}else r(q,I);I=I.sibling}I=yu(Z,q.mode,we),I.return=q,q=I}return S(q);case U:return Ye=Z._init,pr(q,I,Ye(Z._payload),we)}if(Dn(Z))return ke(q,I,Z,we);if(ge(Z))return Et(q,I,Z,we);al(q,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,I!==null&&I.tag===6?(l(q,I.sibling),I=d(I,Z),I.return=q,q=I):(l(q,I),I=vu(Z,q.mode,we),I.return=q,q=I),S(q)):l(q,I)}return pr}var _o=Is(!0),Us=Is(!1),gi={},Xt=bt(gi),Tl=bt(gi),Nl=bt(gi);function jr(t){if(t===gi)throw Error(w(174));return t}function Qa(t,r){gn(Nl,r),gn(Tl,t),gn(Xt,gi),t=an(r),nn(Xt),gn(Xt,t)}function vi(){nn(Xt),nn(Tl),nn(Nl)}function js(t){var r=jr(Nl.current),l=jr(Xt.current);r=X(l,t.type,r),l!==r&&(gn(Tl,t),gn(Xt,r))}function Au(t){Tl.current===t&&(nn(Xt),nn(Tl))}var An=bt(0);function qa(t){for(var r=t;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||El(l)||mr(l)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var ir=[];function Dl(){for(var t=0;t<ir.length;t++){var r=ir[t];je?r._workInProgressVersionPrimary=null:r._workInProgressVersionSecondary=null}ir.length=0}var Zi=E.ReactCurrentDispatcher,ar=E.ReactCurrentBatchConfig,Ll=0,In=null,ft=null,dt=null,Ya=!1,ro=!1,Ml=0,Ji=0;function pt(){throw Error(w(321))}function Xa(t,r){if(r===null)return!1;for(var l=0;l<r.length&&l<t.length;l++)if(!at(t[l],r[l]))return!1;return!0}function yi(t,r,l,u,d,m){if(Ll=m,In=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Zi.current=t===null||t.memoizedState===null?Hu:Vu,t=l(u,d),ro){m=0;do{if(ro=!1,Ml=0,25<=m)throw Error(w(301));m+=1,dt=ft=null,r.updateQueue=null,Zi.current=Qu,t=l(u,d)}while(ro)}if(Zi.current=Si,r=ft!==null&&ft.next!==null,Ll=0,dt=ft=In=null,Ya=!1,r)throw Error(w(300));return t}function ul(){var t=Ml!==0;return Ml=0,t}function Br(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?In.memoizedState=dt=t:dt=dt.next=t,dt}function Wr(){if(ft===null){var t=In.alternate;t=t!==null?t.memoizedState:null}else t=ft.next;var r=dt===null?In.memoizedState:dt.next;if(r!==null)dt=r,ft=t;else{if(t===null)throw Error(w(310));ft=t,t={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},dt===null?In.memoizedState=dt=t:dt=dt.next=t}return dt}function oo(t,r){return typeof r=="function"?r(t):r}function $i(t){var r=Wr(),l=r.queue;if(l===null)throw Error(w(311));l.lastRenderedReducer=t;var u=ft,d=u.baseQueue,m=l.pending;if(m!==null){if(d!==null){var S=d.next;d.next=m.next,m.next=S}u.baseQueue=d=m,l.pending=null}if(d!==null){m=d.next,u=u.baseState;var D=S=null,J=null,de=m;do{var Ee=de.lane;if((Ll&Ee)===Ee)J!==null&&(J=J.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),u=de.hasEagerState?de.eagerState:t(u,de.action);else{var He={lane:Ee,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};J===null?(D=J=He,S=u):J=J.next=He,In.lanes|=Ee,io|=Ee}de=de.next}while(de!==null&&de!==m);J===null?S=u:J.next=D,at(u,r.memoizedState)||(ht=!0),r.memoizedState=u,r.baseState=S,r.baseQueue=J,l.lastRenderedState=u}if(t=l.interleaved,t!==null){d=t;do m=d.lane,In.lanes|=m,io|=m,d=d.next;while(d!==t)}else d===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function ea(t){var r=Wr(),l=r.queue;if(l===null)throw Error(w(311));l.lastRenderedReducer=t;var u=l.dispatch,d=l.pending,m=r.memoizedState;if(d!==null){l.pending=null;var S=d=d.next;do m=t(m,S.action),S=S.next;while(S!==d);at(m,r.memoizedState)||(ht=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),l.lastRenderedState=m}return[m,u]}function Iu(){}function Uu(t,r){var l=In,u=Wr(),d=r(),m=!at(u.memoizedState,d);if(m&&(u.memoizedState=d,ht=!0),u=u.queue,wi(bo.bind(null,l,u,t),[t]),u.getSnapshot!==r||m||dt!==null&&dt.memoizedState.tag&1){if(l.flags|=2048,ta(9,Bu.bind(null,l,u,d,r),void 0,null),Xn===null)throw Error(w(349));Ll&30||ju(l,r,d)}return d}function ju(t,r,l){t.flags|=16384,t={getSnapshot:r,value:l},r=In.updateQueue,r===null?(r={lastEffect:null,stores:null},In.updateQueue=r,r.stores=[t]):(l=r.stores,l===null?r.stores=[t]:l.push(t))}function Bu(t,r,l,u){r.value=l,r.getSnapshot=u,Ga(r)&&Tt(t,1,-1)}function bo(t,r,l){return l(function(){Ga(r)&&Tt(t,1,-1)})}function Ga(t){var r=t.getSnapshot;t=t.value;try{var l=r();return!at(t,l)}catch{return!0}}function na(t){var r=Br();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oo,lastRenderedState:t},r.queue=t,t=t.dispatch=Fc.bind(null,In,t),[r.memoizedState,t]}function ta(t,r,l,u){return t={tag:t,create:r,destroy:l,deps:u,next:null},r=In.updateQueue,r===null?(r={lastEffect:null,stores:null},In.updateQueue=r,r.lastEffect=t.next=t):(l=r.lastEffect,l===null?r.lastEffect=t.next=t:(u=l.next,l.next=t,t.next=u,r.lastEffect=t)),t}function Bs(){return Wr().memoizedState}function sl(t,r,l,u){var d=Br();In.flags|=t,d.memoizedState=ta(1|r,l,void 0,u===void 0?null:u)}function Ka(t,r,l,u){var d=Wr();u=u===void 0?null:u;var m=void 0;if(ft!==null){var S=ft.memoizedState;if(m=S.destroy,u!==null&&Xa(u,S.deps)){d.memoizedState=ta(r,l,m,u);return}}In.flags|=t,d.memoizedState=ta(1|r,l,m,u)}function Za(t,r){return sl(8390656,8,t,r)}function wi(t,r){return Ka(2048,8,t,r)}function Pn(t,r){return Ka(4,2,t,r)}function Ja(t,r){return Ka(4,4,t,r)}function ra(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function xi(t,r,l){return l=l!=null?l.concat([t]):null,Ka(4,4,ra.bind(null,r,t),l)}function $a(){}function eu(t,r){var l=Wr();r=r===void 0?null:r;var u=l.memoizedState;return u!==null&&r!==null&&Xa(r,u[1])?u[0]:(l.memoizedState=[t,r],t)}function ki(t,r){var l=Wr();r=r===void 0?null:r;var u=l.memoizedState;return u!==null&&r!==null&&Xa(r,u[1])?u[0]:(t=t(),l.memoizedState=[t,r],t)}function nu(t,r){var l=Be;Be=l!==0&&4>l?l:4,t(!0);var u=ar.transition;ar.transition={};try{t(!1),r()}finally{Be=l,ar.transition=u}}function Fl(){return Wr().memoizedState}function Ws(t,r,l){var u=qr(t);l={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null},Hs(t)?Wu(r,l):(oa(t,r,l),l=sn(),t=Tt(t,u,l),t!==null&&la(t,r,u))}function Fc(t,r,l){var u=qr(t),d={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null};if(Hs(t))Wu(r,d);else{oa(t,r,d);var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var S=r.lastRenderedState,D=m(S,l);if(d.hasEagerState=!0,d.eagerState=D,at(D,S))return}catch{}finally{}l=sn(),t=Tt(t,u,l),t!==null&&la(t,r,u)}}function Hs(t){var r=t.alternate;return t===In||r!==null&&r===In}function Wu(t,r){ro=Ya=!0;var l=t.pending;l===null?r.next=r:(r.next=l.next,l.next=r),t.pending=r}function oa(t,r,l){Xn!==null&&t.mode&1&&!(Ge&2)?(t=r.interleaved,t===null?(l.next=l,At===null?At=[r]:At.push(r)):(l.next=t.next,t.next=l),r.interleaved=l):(t=r.pending,t===null?l.next=l:(l.next=t.next,t.next=l),r.pending=l)}function la(t,r,l){if(l&4194240){var u=r.lanes;u&=t.pendingLanes,l|=u,r.lanes=l,vt(t,l)}}var Si={readContext:Fn,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},Hu={readContext:Fn,useCallback:function(t,r){return Br().memoizedState=[t,r===void 0?null:r],t},useContext:Fn,useEffect:Za,useImperativeHandle:function(t,r,l){return l=l!=null?l.concat([t]):null,sl(4194308,4,ra.bind(null,r,t),l)},useLayoutEffect:function(t,r){return sl(4194308,4,t,r)},useInsertionEffect:function(t,r){return sl(4,2,t,r)},useMemo:function(t,r){var l=Br();return r=r===void 0?null:r,t=t(),l.memoizedState=[t,r],t},useReducer:function(t,r,l){var u=Br();return r=l!==void 0?l(r):r,u.memoizedState=u.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},u.queue=t,t=t.dispatch=Ws.bind(null,In,t),[u.memoizedState,t]},useRef:function(t){var r=Br();return t={current:t},r.memoizedState=t},useState:na,useDebugValue:$a,useDeferredValue:function(t){var r=na(t),l=r[0],u=r[1];return Za(function(){var d=ar.transition;ar.transition={};try{u(t)}finally{ar.transition=d}},[t]),l},useTransition:function(){var t=na(!1),r=t[0];return t=nu.bind(null,t[1]),Br().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,l){var u=In,d=Br();if(Tn){if(l===void 0)throw Error(w(407));l=l()}else{if(l=r(),Xn===null)throw Error(w(349));Ll&30||ju(u,r,l)}d.memoizedState=l;var m={value:l,getSnapshot:r};return d.queue=m,Za(bo.bind(null,u,m,t),[t]),u.flags|=2048,ta(9,Bu.bind(null,u,m,l,r),void 0,null),l},useId:function(){var t=Br(),r=Xn.identifierPrefix;if(Tn){var l=Po,u=Eo;l=(u&~(1<<32-Qt(u)-1)).toString(32)+l,r=":"+r+"R"+l,l=Ml++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=Ji++,r=":"+r+"r"+l.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Vu={readContext:Fn,useCallback:eu,useContext:Fn,useEffect:wi,useImperativeHandle:xi,useInsertionEffect:Pn,useLayoutEffect:Ja,useMemo:ki,useReducer:$i,useRef:Bs,useState:function(){return $i(oo)},useDebugValue:$a,useDeferredValue:function(t){var r=$i(oo),l=r[0],u=r[1];return wi(function(){var d=ar.transition;ar.transition={};try{u(t)}finally{ar.transition=d}},[t]),l},useTransition:function(){var t=$i(oo)[0],r=Wr().memoizedState;return[t,r]},useMutableSource:Iu,useSyncExternalStore:Uu,useId:Fl,unstable_isNewReconciler:!1},Qu={readContext:Fn,useCallback:eu,useContext:Fn,useEffect:wi,useImperativeHandle:xi,useInsertionEffect:Pn,useLayoutEffect:Ja,useMemo:ki,useReducer:ea,useRef:Bs,useState:function(){return ea(oo)},useDebugValue:$a,useDeferredValue:function(t){var r=ea(oo),l=r[0],u=r[1];return wi(function(){var d=ar.transition;ar.transition={};try{u(t)}finally{ar.transition=d}},[t]),l},useTransition:function(){var t=ea(oo)[0],r=Wr().memoizedState;return[t,r]},useMutableSource:Iu,useSyncExternalStore:Uu,useId:Fl,unstable_isNewReconciler:!1};function qu(t,r){try{var l="",u=r;do l+=yo(u),u=u.return;while(u);var d=l}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:t,source:r,stack:d}}function tu(t,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var Ac=typeof WeakMap=="function"?WeakMap:Map;function Vs(t,r,l){l=So(-1,l),l.tag=3,l.payload={element:null};var u=r.value;return l.callback=function(){zi||(zi=!0,zn=u),tu(t,r)},l}function ru(t,r,l){l=So(-1,l),l.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var d=r.value;l.payload=function(){return u(d)},l.callback=function(){tu(t,r)}}var m=t.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(l.callback=function(){tu(t,r),typeof u!="function"&&(Qr===null?Qr=new Set([this]):Qr.add(this));var S=r.stack;this.componentDidCatch(r.value,{componentStack:S!==null?S:""})}),l}function Co(t,r,l){var u=t.pingCache;if(u===null){u=t.pingCache=new Ac;var d=new Set;u.set(r,d)}else d=u.get(r),d===void 0&&(d=new Set,u.set(r,d));d.has(l)||(d.add(l),t=cs.bind(null,t,r,l),r.then(t,t))}function Yu(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function Al(t,r,l,u,d){return t.mode&1?(t.flags|=65536,t.lanes=d,t):(t===r?t.flags|=65536:(t.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=So(-1,1),r.tag=2,ol(l,r))),l.lanes|=1),t)}function rt(t){t.flags|=4}function Ei(t,r){if(t!==null&&t.child===r.child)return!0;if(r.flags&16)return!1;for(t=r.child;t!==null;){if(t.flags&12854||t.subtreeFlags&12854)return!1;t=t.sibling}return!0}var ur,Il,ou,lu;if(Qe)ur=function(t,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)T(t,l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Il=function(){},ou=function(t,r,l,u,d){if(t=t.memoizedProps,t!==u){var m=r.stateNode,S=jr(Xt.current);l=re(m,l,t,u,d,S),(r.updateQueue=l)&&rt(r)}},lu=function(t,r,l,u){l!==u&&rt(r)};else if(xe){ur=function(t,r,l,u){for(var d=r.child;d!==null;){if(d.tag===5){var m=d.stateNode;l&&u&&(m=Qo(m,d.type,d.memoizedProps,d)),T(t,m)}else if(d.tag===6)m=d.stateNode,l&&u&&(m=oi(m,d.memoizedProps,d)),T(t,m);else if(d.tag!==4){if(d.tag===22&&d.memoizedState!==null)m=d.child,m!==null&&(m.return=d),ur(t,d,!0,!0);else if(d.child!==null){d.child.return=d,d=d.child;continue}}if(d===r)break;for(;d.sibling===null;){if(d.return===null||d.return===r)return;d=d.return}d.sibling.return=d.return,d=d.sibling}};var cl=function(t,r,l,u){for(var d=r.child;d!==null;){if(d.tag===5){var m=d.stateNode;l&&u&&(m=Qo(m,d.type,d.memoizedProps,d)),Zr(t,m)}else if(d.tag===6)m=d.stateNode,l&&u&&(m=oi(m,d.memoizedProps,d)),Zr(t,m);else if(d.tag!==4){if(d.tag===22&&d.memoizedState!==null)m=d.child,m!==null&&(m.return=d),cl(t,d,!0,!0);else if(d.child!==null){d.child.return=d,d=d.child;continue}}if(d===r)break;for(;d.sibling===null;){if(d.return===null||d.return===r)return;d=d.return}d.sibling.return=d.return,d=d.sibling}};Il=function(t,r){var l=r.stateNode;if(!Ei(t,r)){t=l.containerInfo;var u=Sl(t);cl(u,r,!1,!1),l.pendingChildren=u,rt(r),tr(t,u)}},ou=function(t,r,l,u,d){var m=t.stateNode,S=t.memoizedProps;if((t=Ei(t,r))&&S===u)r.stateNode=m;else{var D=r.stateNode,J=jr(Xt.current),de=null;S!==u&&(de=re(D,l,S,u,d,J)),t&&de===null?r.stateNode=m:(m=Hi(m,de,l,S,u,r,t,D),se(m,l,u,d,J)&&rt(r),r.stateNode=m,t?rt(r):ur(m,r,!1,!1))}},lu=function(t,r,l,u){l!==u?(t=jr(Nl.current),l=jr(Xt.current),r.stateNode=le(u,t,l,r),rt(r)):r.stateNode=t.stateNode}}else Il=function(){},ou=function(){},lu=function(){};function zo(t,r){if(!Tn)switch(t.tailMode){case"hidden":r=t.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function Yn(t){var r=t.alternate!==null&&t.alternate.child===t.child,l=0,u=0;if(r)for(var d=t.child;d!==null;)l|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)l|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=u,t.childLanes=l,r}function iu(t,r,l){var u=r.pendingProps;switch(Lu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yn(r),null;case 1:return Qn(r.type)&&Mt(),Yn(r),null;case 3:return u=r.stateNode,vi(),nn(it),nn(et),Dl(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(Ki(r)?rt(r):t===null||t.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Sr!==null&&(ya(Sr),Sr=null))),Il(t,r),Yn(r),null;case 5:Au(r),l=jr(Nl.current);var d=r.type;if(t!==null&&r.stateNode!=null)ou(t,r,d,u,l),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(w(166));return Yn(r),null}if(t=jr(Xt.current),Ki(r)){if(!Je)throw Error(w(175));t=Ta(r.stateNode,r.type,r.memoizedProps,l,t,r,!di),r.updateQueue=t,t!==null&&rt(r)}else{var m=x(d,u,l,t,r);ur(m,r,!1,!1),r.stateNode=m,se(m,d,u,l,t)&&rt(r)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Yn(r),null;case 6:if(t&&r.stateNode!=null)lu(t,r,t.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(w(166));if(t=jr(Nl.current),l=jr(Xt.current),Ki(r)){if(!Je)throw Error(w(176));if(t=r.stateNode,u=r.memoizedProps,(l=Nr(t,u,r,!di))&&(d=It,d!==null))switch(m=(d.mode&1)!==0,d.tag){case 3:Xi(d.stateNode.containerInfo,t,u,m);break;case 5:Gi(d.type,d.memoizedProps,d.stateNode,t,u,m)}l&&rt(r)}else r.stateNode=le(u,t,l,r)}return Yn(r),null;case 13:if(nn(An),u=r.memoizedState,Tn&&yt!==null&&r.mode&1&&!(r.flags&128)){for(t=yt;t;)t=Tr(t);return pi(),r.flags|=98560,r}if(u!==null&&u.dehydrated!==null){if(u=Ki(r),t===null){if(!u)throw Error(w(318));if(!Je)throw Error(w(344));if(t=r.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));Na(t,r)}else pi(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;return Yn(r),null}return Sr!==null&&(ya(Sr),Sr=null),r.flags&128?(r.lanes=l,r):(u=u!==null,l=!1,t===null?Ki(r):l=t.memoizedState!==null,u&&!l&&(r.child.flags|=8192,r.mode&1&&(t===null||An.current&1?jn===0&&(jn=3):pu())),r.updateQueue!==null&&(r.flags|=4),Yn(r),null);case 4:return vi(),Il(t,r),t===null&&Ue(r.stateNode.containerInfo),Yn(r),null;case 10:return Kn(r.type._context),Yn(r),null;case 17:return Qn(r.type)&&Mt(),Yn(r),null;case 19:if(nn(An),d=r.memoizedState,d===null)return Yn(r),null;if(u=(r.flags&128)!==0,m=d.rendering,m===null)if(u)zo(d,!1);else{if(jn!==0||t!==null&&t.flags&128)for(t=r.child;t!==null;){if(m=qa(t),m!==null){for(r.flags|=128,zo(d,!1),t=m.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),r.subtreeFlags=0,t=l,u=r.child;u!==null;)l=u,d=t,l.flags&=14680066,m=l.alternate,m===null?(l.childLanes=0,l.lanes=d,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=m.childLanes,l.lanes=m.lanes,l.child=m.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=m.memoizedProps,l.memoizedState=m.memoizedState,l.updateQueue=m.updateQueue,l.type=m.type,d=m.dependencies,l.dependencies=d===null?null:{lanes:d.lanes,firstContext:d.firstContext}),u=u.sibling;return gn(An,An.current&1|2),r.child}t=t.sibling}d.tail!==null&&Rn()>pl&&(r.flags|=128,u=!0,zo(d,!1),r.lanes=4194304)}else{if(!u)if(t=qa(m),t!==null){if(r.flags|=128,u=!0,t=t.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),zo(d,!0),d.tail===null&&d.tailMode==="hidden"&&!m.alternate&&!Tn)return Yn(r),null}else 2*Rn()-d.renderingStartTime>pl&&l!==1073741824&&(r.flags|=128,u=!0,zo(d,!1),r.lanes=4194304);d.isBackwards?(m.sibling=r.child,r.child=m):(t=d.last,t!==null?t.sibling=m:r.child=m,d.last=m)}return d.tail!==null?(r=d.tail,d.rendering=r,d.tail=r.sibling,d.renderingStartTime=Rn(),r.sibling=null,t=An.current,gn(An,u?t&1|2:t&1),r):(Yn(r),null);case 22:case 23:return wa(),u=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(r.flags|=8192),u&&r.mode&1?Rt&1073741824&&(Yn(r),Qe&&r.subtreeFlags&6&&(r.flags|=8192)):Yn(r),null;case 24:return null;case 25:return null}throw Error(w(156,r.tag))}var Xu=E.ReactCurrentOwner,ht=!1;function Un(t,r,l,u){r.child=t===null?Us(r,null,l,u):_o(r,t.child,l,u)}function _n(t,r,l,u,d){l=l.render;var m=r.ref;return qn(r,d),u=yi(t,r,l,u,m,d),l=ul(),t!==null&&!ht?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~d,Gt(t,r,d)):(Tn&&l&&Du(r),r.flags|=1,Un(t,r,u,d),r.child)}function kn(t,r,l,u,d){if(t===null){var m=l.type;return typeof m=="function"&&!mu(m)&&m.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=m,Oo(t,r,m,u,d)):(t=gu(l.type,null,u,r,r.mode,d),t.ref=r.ref,t.return=r,r.child=t)}if(m=t.child,!(t.lanes&d)){var S=m.memoizedProps;if(l=l.compare,l=l!==null?l:qt,l(S,u)&&t.ref===r.ref)return Gt(t,r,d)}return r.flags|=1,t=Io(m,u),t.ref=r.ref,t.return=r,r.child=t}function Oo(t,r,l,u,d){if(t!==null&&qt(t.memoizedProps,u)&&t.ref===r.ref)if(ht=!1,(t.lanes&d)!==0)t.flags&131072&&(ht=!0);else return r.lanes=t.lanes,Gt(t,r,d);return Ro(t,r,l,u,d)}function wt(t,r,l){var u=r.pendingProps,d=u.children,m=t!==null?t.memoizedState:null;if(u.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null},gn(Yl,Rt),Rt|=l;else if(l&1073741824)r.memoizedState={baseLanes:0,cachePool:null},u=m!==null?m.baseLanes:l,gn(Yl,Rt),Rt|=u;else return t=m!==null?m.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null},r.updateQueue=null,gn(Yl,Rt),Rt|=t,null;else m!==null?(u=m.baseLanes|l,r.memoizedState=null):u=l,gn(Yl,Rt),Rt|=u;return Un(t,r,d,l),r.child}function Ut(t,r){var l=r.ref;(t===null&&l!==null||t!==null&&t.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Ro(t,r,l,u,d){var m=Qn(l)?Jr:et.current;return m=Lt(r,m),qn(r,d),l=yi(t,r,l,u,m,d),u=ul(),t!==null&&!ht?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~d,Gt(t,r,d)):(Tn&&u&&Du(r),r.flags|=1,Un(t,r,l,d),r.child)}function Ul(t,r,l,u,d){if(Qn(l)){var m=!0;Ko(r)}else m=!1;if(qn(r,d),r.stateNode===null)t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2),Ls(r,l,u),Nu(r,l,u,d),u=!0;else if(t===null){var S=r.stateNode,D=r.memoizedProps;S.props=D;var J=S.context,de=l.contextType;typeof de=="object"&&de!==null?de=Fn(de):(de=Qn(l)?Jr:et.current,de=Lt(r,de));var Ee=l.getDerivedStateFromProps,He=typeof Ee=="function"||typeof S.getSnapshotBeforeUpdate=="function";He||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(D!==u||J!==de)&&Ms(r,S,u,de),xr=!1;var Me=r.memoizedState;S.state=Me,Ua(r,u,S,d),J=r.memoizedState,D!==u||Me!==J||it.current||xr?(typeof Ee=="function"&&(Ru(r,l,Ee,u),J=r.memoizedState),(D=xr||Tu(r,l,D,u,Me,J,de))?(He||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount()),typeof S.componentDidMount=="function"&&(r.flags|=4194308)):(typeof S.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=J),S.props=u,S.state=J,S.context=de,u=D):(typeof S.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{S=r.stateNode,Ou(t,r),D=r.memoizedProps,de=r.type===r.elementType?D:st(r.type,D),S.props=de,He=r.pendingProps,Me=S.context,J=l.contextType,typeof J=="object"&&J!==null?J=Fn(J):(J=Qn(l)?Jr:et.current,J=Lt(r,J));var Ke=l.getDerivedStateFromProps;(Ee=typeof Ke=="function"||typeof S.getSnapshotBeforeUpdate=="function")||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(D!==He||Me!==J)&&Ms(r,S,u,J),xr=!1,Me=r.memoizedState,S.state=Me,Ua(r,u,S,d);var ke=r.memoizedState;D!==He||Me!==ke||it.current||xr?(typeof Ke=="function"&&(Ru(r,l,Ke,u),ke=r.memoizedState),(de=xr||Tu(r,l,de,u,Me,ke,J)||!1)?(Ee||typeof S.UNSAFE_componentWillUpdate!="function"&&typeof S.componentWillUpdate!="function"||(typeof S.componentWillUpdate=="function"&&S.componentWillUpdate(u,ke,J),typeof S.UNSAFE_componentWillUpdate=="function"&&S.UNSAFE_componentWillUpdate(u,ke,J)),typeof S.componentDidUpdate=="function"&&(r.flags|=4),typeof S.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof S.componentDidUpdate!="function"||D===t.memoizedProps&&Me===t.memoizedState||(r.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&Me===t.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=ke),S.props=u,S.state=ke,S.context=J,u=de):(typeof S.componentDidUpdate!="function"||D===t.memoizedProps&&Me===t.memoizedState||(r.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&Me===t.memoizedState||(r.flags|=1024),u=!1)}return Ot(t,r,l,u,m,d)}function Ot(t,r,l,u,d,m){Ut(t,r);var S=(r.flags&128)!==0;if(!u&&!S)return d&&Ft(r,l,!1),Gt(t,r,m);u=r.stateNode,Xu.current=r;var D=S&&typeof l.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,t!==null&&S?(r.child=_o(r,t.child,null,m),r.child=_o(r,null,D,m)):Un(t,r,D,m),r.memoizedState=u.state,d&&Ft(r,l,!0),r.child}function ia(t){var r=t.stateNode;r.pendingContext?go(t,r.pendingContext,r.pendingContext!==r.context):r.context&&go(t,r.context,!1),Qa(t,r.containerInfo)}function Gu(t,r,l,u,d){return pi(),Va(d),r.flags|=256,Un(t,r,l,u),r.child}var aa={dehydrated:null,treeContext:null,retryLane:0};function jl(t){return{baseLanes:t,cachePool:null}}function Ku(t,r,l){var u=r.pendingProps,d=An.current,m=!1,S=(r.flags&128)!==0,D;if((D=S)||(D=t!==null&&t.memoizedState===null?!1:(d&2)!==0),D?(m=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),gn(An,d&1),t===null)return il(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(r.mode&1?mr(t)?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(d=u.children,t=u.fallback,m?(u=r.mode,m=r.child,d={mode:"hidden",children:d},!(u&1)&&m!==null?(m.childLanes=0,m.pendingProps=d):m=Sa(d,u,0,null),t=Jl(t,u,l,null),m.return=r,t.return=r,m.sibling=t,r.child=m,r.child.memoizedState=jl(l),r.memoizedState=aa,t):Hr(r,d));if(d=t.memoizedState,d!==null){if(D=d.dehydrated,D!==null){if(S)return r.flags&256?(r.flags&=-257,sa(t,r,l,Error(w(422)))):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(m=u.fallback,d=r.mode,u=Sa({mode:"visible",children:u.children},d,0,null),m=Jl(m,d,l,null),m.flags|=2,u.return=r,m.return=r,u.sibling=m,r.child=u,r.mode&1&&_o(r,t.child,null,l),r.child.memoizedState=jl(l),r.memoizedState=aa,m);if(!(r.mode&1))r=sa(t,r,l,null);else if(mr(D))r=sa(t,r,l,Error(w(419)));else if(u=(l&t.childLanes)!==0,ht||u){if(u=Xn,u!==null){switch(l&-l){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}u=m&(u.suspendedLanes|l)?0:m,u!==0&&u!==d.retryLane&&(d.retryLane=u,Tt(t,u,-1))}pu(),r=sa(t,r,l,Error(w(421)))}else El(D)?(r.flags|=128,r.child=t.child,r=Gs.bind(null,t),Yo(D,r),r=null):(l=d.treeContext,Je&&(yt=Qi(D),It=r,Tn=!0,Sr=null,di=!1,l!==null&&(kr[lr++]=Eo,kr[lr++]=Po,kr[lr++]=Ol,Eo=l.id,Po=l.overflow,Ol=r)),r=Hr(r,r.pendingProps.children),r.flags|=4096);return r}return m?(u=au(t,r,u.children,u.fallback,l),m=r.child,d=t.child.memoizedState,m.memoizedState=d===null?jl(l):{baseLanes:d.baseLanes|l,cachePool:null},m.childLanes=t.childLanes&~l,r.memoizedState=aa,u):(l=ua(t,r,u.children,l),r.memoizedState=null,l)}return m?(u=au(t,r,u.children,u.fallback,l),m=r.child,d=t.child.memoizedState,m.memoizedState=d===null?jl(l):{baseLanes:d.baseLanes|l,cachePool:null},m.childLanes=t.childLanes&~l,r.memoizedState=aa,u):(l=ua(t,r,u.children,l),r.memoizedState=null,l)}function Hr(t,r){return r=Sa({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function ua(t,r,l,u){var d=t.child;return t=d.sibling,l=Io(d,{mode:"visible",children:l}),!(r.mode&1)&&(l.lanes=u),l.return=r,l.sibling=null,t!==null&&(u=r.deletions,u===null?(r.deletions=[t],r.flags|=16):u.push(t)),r.child=l}function au(t,r,l,u,d){var m=r.mode;t=t.child;var S=t.sibling,D={mode:"hidden",children:l};return!(m&1)&&r.child!==t?(l=r.child,l.childLanes=0,l.pendingProps=D,r.deletions=null):(l=Io(t,D),l.subtreeFlags=t.subtreeFlags&14680064),S!==null?u=Io(S,u):(u=Jl(u,m,d,null),u.flags|=2),u.return=r,l.return=r,l.sibling=u,r.child=l,u}function sa(t,r,l,u){return u!==null&&Va(u),_o(r,t.child,null,l),t=Hr(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Qs(t,r,l){t.lanes|=r;var u=t.alternate;u!==null&&(u.lanes|=r),tt(t.return,r,l)}function lo(t,r,l,u,d){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:l,tailMode:d}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=l,m.tailMode=d)}function Bl(t,r,l){var u=r.pendingProps,d=u.revealOrder,m=u.tail;if(Un(t,r,u.children,l),u=An.current,u&2)u=u&1|2,r.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qs(t,l,r);else if(t.tag===19)Qs(t,l,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(gn(An,u),!(r.mode&1))r.memoizedState=null;else switch(d){case"forwards":for(l=r.child,d=null;l!==null;)t=l.alternate,t!==null&&qa(t)===null&&(d=l),l=l.sibling;l=d,l===null?(d=r.child,r.child=null):(d=l.sibling,l.sibling=null),lo(r,!1,d,l,m);break;case"backwards":for(l=null,d=r.child,r.child=null;d!==null;){if(t=d.alternate,t!==null&&qa(t)===null){r.child=d;break}t=d.sibling,d.sibling=l,l=d,d=t}lo(r,!0,l,null,m);break;case"together":lo(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Gt(t,r,l){if(t!==null&&(r.dependencies=t.dependencies),io|=r.lanes,!(l&r.childLanes))return null;if(t!==null&&r.child!==t.child)throw Error(w(153));if(r.child!==null){for(t=r.child,l=Io(t,t.pendingProps),r.child=l,l.return=r;t.sibling!==null;)t=t.sibling,l=l.sibling=Io(t,t.pendingProps),l.return=r;l.sibling=null}return r.child}function uu(t,r,l){switch(r.tag){case 3:ia(r),pi();break;case 5:js(r);break;case 1:Qn(r.type)&&Ko(r);break;case 4:Qa(r,r.stateNode.containerInfo);break;case 10:ko(r,r.type._context,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(gn(An,An.current&1),r.flags|=128,null):l&r.child.childLanes?Ku(t,r,l):(gn(An,An.current&1),t=Gt(t,r,l),t!==null?t.sibling:null);gn(An,An.current&1);break;case 19:if(u=(l&r.childLanes)!==0,t.flags&128){if(u)return Bl(t,r,l);r.flags|=128}var d=r.memoizedState;if(d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),gn(An,An.current),u)break;return null;case 22:case 23:return r.lanes=0,wt(t,r,l)}return Gt(t,r,l)}function su(t,r){switch(Lu(r),r.tag){case 1:return Qn(r.type)&&Mt(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return vi(),nn(it),nn(et),Dl(),t=r.flags,t&65536&&!(t&128)?(r.flags=t&-65537|128,r):null;case 5:return Au(r),null;case 13:if(nn(An),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(w(340));pi()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return nn(An),null;case 4:return vi(),null;case 10:return Kn(r.type._context),null;case 22:case 23:return wa(),null;case 24:return null;default:return null}}var jt=!1,mt=!1,Wl=typeof WeakSet=="function"?WeakSet:Set,me=null;function Er(t,r){var l=t.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(u){Wt(t,r,u)}else l.current=null}function To(t,r,l){try{l()}catch(u){Wt(t,r,u)}}var Zu=!1;function Ju(t,r){for(V(t.containerInfo),me=r;me!==null;)if(t=me,r=t.child,(t.subtreeFlags&1028)!==0&&r!==null)r.return=t,me=r;else for(;me!==null;){t=me;try{var l=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(l!==null){var u=l.memoizedProps,d=l.memoizedState,m=t.stateNode,S=m.getSnapshotBeforeUpdate(t.elementType===t.type?u:st(t.type,u),d);m.__reactInternalSnapshotBeforeUpdate=S}break;case 3:Qe&&po(t.stateNode.containerInfo);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(D){Wt(t,t.return,D)}if(r=t.sibling,r!==null){r.return=t.return,me=r;break}me=t.return}return l=Zu,Zu=!1,l}function No(t,r,l){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&t)===t){var m=d.destroy;d.destroy=void 0,m!==void 0&&To(r,l,m)}d=d.next}while(d!==u)}}function xt(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&t)===t){var u=l.create;l.destroy=u()}l=l.next}while(l!==r)}}function Bt(t){var r=t.ref;if(r!==null){var l=t.stateNode;switch(t.tag){case 5:t=dn(l);break;default:t=l}typeof r=="function"?r(t):r.current=t}}function Cn(t,r,l){if(or&&typeof or.onCommitFiberUnmount=="function")try{or.onCommitFiberUnmount(el,r)}catch{}switch(r.tag){case 0:case 11:case 14:case 15:if(t=r.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var u=t=t.next;do{var d=u,m=d.destroy;d=d.tag,m!==void 0&&(d&2||d&4)&&To(r,l,m),u=u.next}while(u!==t)}break;case 1:if(Er(r,l),t=r.stateNode,typeof t.componentWillUnmount=="function")try{t.props=r.memoizedProps,t.state=r.memoizedState,t.componentWillUnmount()}catch(S){Wt(r,l,S)}break;case 5:Er(r,l);break;case 4:Qe?ns(t,r,l):xe&&xe&&(r=r.stateNode.containerInfo,l=Sl(r),Rr(r,l))}}function Pr(t,r,l){for(var u=r;;)if(Cn(t,u,l),u.child===null||Qe&&u.tag===4){if(u===r)break;for(;u.sibling===null;){if(u.return===null||u.return===r)return;u=u.return}u.sibling.return=u.return,u=u.sibling}else u.child.return=u,u=u.child}function $u(t){var r=t.alternate;r!==null&&(t.alternate=null,$u(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&en(r)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function es(t){return t.tag===5||t.tag===3||t.tag===4}function cu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||es(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fu(t){if(Qe){e:{for(var r=t.return;r!==null;){if(es(r))break e;r=r.return}throw Error(w(160))}var l=r;switch(l.tag){case 5:r=l.stateNode,l.flags&32&&(nr(r),l.flags&=-33),l=cu(t),Pi(t,l,r);break;case 3:case 4:r=l.stateNode.containerInfo,l=cu(t),du(t,l,r);break;default:throw Error(w(161))}}}function du(t,r,l){var u=t.tag;if(u===5||u===6)t=t.stateNode,r?pn(l,t,r):yn(l,t);else if(u!==4&&(t=t.child,t!==null))for(du(t,r,l),t=t.sibling;t!==null;)du(t,r,l),t=t.sibling}function Pi(t,r,l){var u=t.tag;if(u===5||u===6)t=t.stateNode,r?Or(l,t,r):qe(l,t);else if(u!==4&&(t=t.child,t!==null))for(Pi(t,r,l),t=t.sibling;t!==null;)Pi(t,r,l),t=t.sibling}function ns(t,r,l){for(var u=r,d=!1,m,S;;){if(!d){d=u.return;e:for(;;){if(d===null)throw Error(w(160));switch(m=d.stateNode,d.tag){case 5:S=!1;break e;case 3:m=m.containerInfo,S=!0;break e;case 4:m=m.containerInfo,S=!0;break e}d=d.return}d=!0}if(u.tag===5||u.tag===6)Pr(t,u,l),S?er(m,u.stateNode):On(m,u.stateNode);else if(u.tag===18)S?Yi(m,u.stateNode):Da(m,u.stateNode);else if(u.tag===4){if(u.child!==null){m=u.stateNode.containerInfo,S=!0,u.child.return=u,u=u.child;continue}}else if(Cn(t,u,l),u.child!==null){u.child.return=u,u=u.child;continue}if(u===r)break;for(;u.sibling===null;){if(u.return===null||u.return===r)return;u=u.return,u.tag===4&&(d=!1)}u.sibling.return=u.return,u=u.sibling}}function fl(t,r){if(Qe){switch(r.tag){case 0:case 11:case 14:case 15:No(3,r,r.return),xt(3,r),No(5,r,r.return);return;case 1:return;case 5:var l=r.stateNode;if(l!=null){var u=r.memoizedProps;t=t!==null?t.memoizedProps:u;var d=r.type,m=r.updateQueue;r.updateQueue=null,m!==null&&Kr(l,m,d,t,u,r)}return;case 6:if(r.stateNode===null)throw Error(w(162));l=r.memoizedProps,En(r.stateNode,t!==null?t.memoizedProps:l,l);return;case 3:Je&&t!==null&&t.memoizedState.isDehydrated&&Pl(r.stateNode.containerInfo);return;case 12:return;case 13:_i(r);return;case 19:_i(r);return;case 17:return}throw Error(w(163))}switch(r.tag){case 0:case 11:case 14:case 15:No(3,r,r.return),xt(3,r),No(5,r,r.return);return;case 12:return;case 13:_i(r);return;case 19:_i(r);return;case 3:Je&&t!==null&&t.memoizedState.isDehydrated&&Pl(r.stateNode.containerInfo);break;case 22:case 23:return}e:if(xe){switch(r.tag){case 1:case 5:case 6:break e;case 3:case 4:r=r.stateNode,Rr(r.containerInfo,r.pendingChildren);break e}throw Error(w(163))}}function _i(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var l=t.stateNode;l===null&&(l=t.stateNode=new Wl),r.forEach(function(u){var d=Ks.bind(null,t,u);l.has(u)||(l.add(u),u.then(d,d))})}}function Ic(t,r){for(me=r;me!==null;){r=me;var l=r.deletions;if(l!==null)for(var u=0;u<l.length;u++){var d=l[u];try{var m=t;Qe?ns(m,d,r):Pr(m,d,r);var S=d.alternate;S!==null&&(S.return=null),d.return=null}catch(ze){Wt(d,r,ze)}}if(l=r.child,r.subtreeFlags&12854&&l!==null)l.return=r,me=l;else for(;me!==null;){r=me;try{var D=r.flags;if(D&32&&Qe&&nr(r.stateNode),D&512){var J=r.alternate;if(J!==null){var de=J.ref;de!==null&&(typeof de=="function"?de(null):de.current=null)}}if(D&8192)switch(r.tag){case 13:if(r.memoizedState!==null){var Ee=r.alternate;(Ee===null||Ee.memoizedState===null)&&(ga=Rn())}break;case 22:var He=r.memoizedState!==null,Me=r.alternate,Ke=Me!==null&&Me.memoizedState!==null;if(l=r,Qe){e:if(u=l,d=He,m=null,Qe)for(var ke=u;;){if(ke.tag===5){if(m===null){m=ke;var Et=ke.stateNode;d?kl(Et):Vn(ke.stateNode,ke.memoizedProps)}}else if(ke.tag===6){if(m===null){var pr=ke.stateNode;d?Hn(pr):fo(pr,ke.memoizedProps)}}else if((ke.tag!==22&&ke.tag!==23||ke.memoizedState===null||ke===u)&&ke.child!==null){ke.child.return=ke,ke=ke.child;continue}if(ke===u)break;for(;ke.sibling===null;){if(ke.return===null||ke.return===u)break e;m===ke&&(m=null),ke=ke.return}m===ke&&(m=null),ke.sibling.return=ke.return,ke=ke.sibling}}if(He&&!Ke&&l.mode&1){me=l;for(var q=l.child;q!==null;){for(l=me=q;me!==null;){u=me;var I=u.child;switch(u.tag){case 0:case 11:case 14:case 15:No(4,u,u.return);break;case 1:Er(u,u.return);var Z=u.stateNode;if(typeof Z.componentWillUnmount=="function"){var we=u.return;try{Z.props=u.memoizedProps,Z.state=u.memoizedState,Z.componentWillUnmount()}catch(ze){Wt(u,we,ze)}}break;case 5:Er(u,u.return);break;case 22:if(u.memoizedState!==null){rs(l);continue}}I!==null?(I.return=u,me=I):rs(l)}q=q.sibling}}}switch(D&4102){case 2:fu(r),r.flags&=-3;break;case 6:fu(r),r.flags&=-3,fl(r.alternate,r);break;case 4096:r.flags&=-4097;break;case 4100:r.flags&=-4097,fl(r.alternate,r);break;case 4:fl(r.alternate,r)}}catch(ze){Wt(r,r.return,ze)}if(l=r.sibling,l!==null){l.return=r.return,me=l;break}me=r.return}}}function ca(t,r,l){me=t,fa(t)}function fa(t,r,l){for(var u=(t.mode&1)!==0;me!==null;){var d=me,m=d.child;if(d.tag===22&&u){var S=d.memoizedState!==null||jt;if(!S){var D=d.alternate,J=D!==null&&D.memoizedState!==null||mt;D=jt;var de=mt;if(jt=S,(mt=J)&&!de)for(me=d;me!==null;)S=me,J=S.child,S.tag===22&&S.memoizedState!==null?Hl(d):J!==null?(J.return=S,me=J):Hl(d);for(;m!==null;)me=m,fa(m),m=m.sibling;me=d,jt=D,mt=de}ts(t)}else d.subtreeFlags&8772&&m!==null?(m.return=d,me=m):ts(t)}}function ts(t){for(;me!==null;){var r=me;if(r.flags&8772){var l=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:mt||xt(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!mt)if(l===null)u.componentDidMount();else{var d=r.elementType===r.type?l.memoizedProps:st(r.type,l.memoizedProps);u.componentDidUpdate(d,l.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=r.updateQueue;m!==null&&Ns(r,m,u);break;case 3:var S=r.updateQueue;if(S!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=dn(r.child.stateNode);break;case 1:l=r.child.stateNode}Ns(r,S,l)}break;case 5:var D=r.stateNode;l===null&&r.flags&4&&$t(D,r.type,r.memoizedProps,r);break;case 6:break;case 4:break;case 12:break;case 13:if(Je&&r.memoizedState===null){var J=r.alternate;if(J!==null){var de=J.memoizedState;if(de!==null){var Ee=de.dehydrated;Ee!==null&&li(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(w(163))}mt||r.flags&512&&Bt(r)}catch(He){Wt(r,r.return,He)}}if(r===t){me=null;break}if(l=r.sibling,l!==null){l.return=r.return,me=l;break}me=r.return}}function rs(t){for(;me!==null;){var r=me;if(r===t){me=null;break}var l=r.sibling;if(l!==null){l.return=r.return,me=l;break}me=r.return}}function Hl(t){for(;me!==null;){var r=me;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{xt(4,r)}catch(J){Wt(r,l,J)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var d=r.return;try{u.componentDidMount()}catch(J){Wt(r,d,J)}}var m=r.return;try{Bt(r)}catch(J){Wt(r,m,J)}break;case 5:var S=r.return;try{Bt(r)}catch(J){Wt(r,S,J)}}}catch(J){Wt(r,r.return,J)}if(r===t){me=null;break}var D=r.sibling;if(D!==null){D.return=r.return,me=D;break}me=r.return}}var da=0,Vl=1,Ql=2,Do=3,bi=4;if(typeof Symbol=="function"&&Symbol.for){var ql=Symbol.for;da=ql("selector.component"),Vl=ql("selector.has_pseudo_class"),Ql=ql("selector.role"),Do=ql("selector.test_id"),bi=ql("selector.text")}function pa(t){var r=Ln(t);if(r!=null){if(typeof r.memoizedProps["data-testname"]!="string")throw Error(w(364));return r}if(t=fe(t),t===null)throw Error(w(362));return t.stateNode.current}function ha(t,r){switch(r.$$typeof){case da:if(t.type===r.value)return!0;break;case Vl:e:{r=r.value,t=[t,0];for(var l=0;l<t.length;){var u=t[l++],d=t[l++],m=r[d];if(u.tag!==5||!Fe(u)){for(;m!=null&&ha(u,m);)d++,m=r[d];if(d===r.length){r=!0;break e}else for(u=u.child;u!==null;)t.push(u,d),u=u.sibling}}r=!1}return r;case Ql:if(t.tag===5&&De(t.stateNode,r.value))return!0;break;case bi:if((t.tag===5||t.tag===6)&&(t=Ne(t),t!==null&&0<=t.indexOf(r.value)))return!0;break;case Do:if(t.tag===5&&(t=t.memoizedProps["data-testname"],typeof t=="string"&&t.toLowerCase()===r.value.toLowerCase()))return!0;break;default:throw Error(w(365))}return!1}function dl(t){switch(t.$$typeof){case da:return"<"+(z(t.value)||"Unknown")+">";case Vl:return":has("+(dl(t)||"")+")";case Ql:return'[role="'+t.value+'"]';case bi:return'"'+t.value+'"';case Do:return'[data-testname="'+t.value+'"]';default:throw Error(w(365))}}function sr(t,r){var l=[];t=[t,0];for(var u=0;u<t.length;){var d=t[u++],m=t[u++],S=r[m];if(d.tag!==5||!Fe(d)){for(;S!=null&&ha(d,S);)m++,S=r[m];if(m===r.length)l.push(d);else for(d=d.child;d!==null;)t.push(d,m),d=d.sibling}}return l}function Lo(t,r){if(!Re)throw Error(w(363));t=pa(t),t=sr(t,r),r=[],t=Array.from(t);for(var l=0;l<t.length;){var u=t[l++];if(u.tag===5)Fe(u)||r.push(u.stateNode);else for(u=u.child;u!==null;)t.push(u),u=u.sibling}return r}var os=Math.ceil,ma=E.ReactCurrentDispatcher,Vr=E.ReactCurrentOwner,wn=E.ReactCurrentBatchConfig,Ge=0,Xn=null,xn=null,Nn=0,Rt=0,Yl=bt(0),jn=0,Ci=null,io=0,cr=0,Xl=0,Mo=null,Zn=null,ga=0,pl=1/0;function Gl(){pl=Rn()+500}var zi=!1,zn=null,Qr=null,Oi=!1,ao=null,Kl=0,Zl=0,Fo=null,bn=-1,Bn=0;function sn(){return Ge&6?Rn():bn!==-1?bn:bn=Rn()}function qr(t){return t.mode&1?Ge&2&&Nn!==0?Nn&-Nn:rl.transition!==null?(Bn===0&&(t=Ar,Ar<<=1,!(Ar&4194240)&&(Ar=64),Bn=t),Bn):(t=Be,t!==0?t:$e()):1}function Tt(t,r,l){if(50<Zl)throw Zl=0,Fo=null,Error(w(185));var u=hl(t,r);return u===null?null:(gr(u,r,l),(!(Ge&2)||u!==Xn)&&(u===Xn&&(!(Ge&2)&&(cr|=r),jn===4&&St(u,Nn)),Kt(u,l),r===1&&Ge===0&&!(t.mode&1)&&(Gl(),to&&zt())),u)}function hl(t,r){t.lanes|=r;var l=t.alternate;for(l!==null&&(l.lanes|=r),l=t,t=t.return;t!==null;)t.childLanes|=r,l=t.alternate,l!==null&&(l.childLanes|=r),l=t,t=t.return;return l.tag===3?l.stateNode:null}function Kt(t,r){var l=t.callbackNode;si(t,r);var u=Jo(t,t===Xn?Nn:0);if(u===0)l!==null&&no(l),t.callbackNode=null,t.callbackPriority=0;else if(r=u&-u,t.callbackPriority!==r){if(l!=null&&no(l),r===1)t.tag===0?tl(fr.bind(null,t)):zl(fr.bind(null,t)),he?Le(function(){Ge===0&&zt()}):rr(Ur,zt),l=null;else{switch(vr(u)){case 1:l=Ur;break;case 4:l=Fa;break;case 16:l=Ct;break;case 536870912:l=$o;break;default:l=Ct}l=hu(l,kt.bind(null,t))}t.callbackPriority=r,t.callbackNode=l}}function kt(t,r){if(bn=-1,Bn=0,Ge&6)throw Error(w(327));var l=t.callbackNode;if(uo()&&t.callbackNode!==l)return null;var u=Jo(t,t===Xn?Nn:0);if(u===0)return null;if(u&30||u&t.expiredLanes||r)r=xa(t,u);else{r=u;var d=Ge;Ge|=2;var m=as();(Xn!==t||Nn!==r)&&(Gl(),Ao(t,r));do try{Ys();break}catch(D){is(t,D)}while(!0);ct(),ma.current=m,Ge=d,xn!==null?r=0:(Xn=null,Nn=0,r=jn)}if(r!==0){if(r===2&&(d=eo(t),d!==0&&(u=d,r=va(t,d))),r===1)throw l=Ci,Ao(t,0),St(t,u),Kt(t,Rn()),l;if(r===6)St(t,u);else{if(d=t.current.alternate,!(u&30)&&!ls(d)&&(r=xa(t,u),r===2&&(m=eo(t),m!==0&&(u=m,r=va(t,m))),r===1))throw l=Ci,Ao(t,0),St(t,u),Kt(t,Rn()),l;switch(t.finishedWork=d,t.finishedLanes=u,r){case 0:case 1:throw Error(w(345));case 2:Yr(t,Zn);break;case 3:if(St(t,u),(u&130023424)===u&&(r=ga+500-Rn(),10<r)){if(Jo(t,0)!==0)break;if(d=t.suspendedLanes,(d&u)!==u){sn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=ne(Yr.bind(null,t,Zn),r);break}Yr(t,Zn);break;case 4:if(St(t,u),(u&4194240)===u)break;for(r=t.eventTimes,d=-1;0<u;){var S=31-Qt(u);m=1<<S,S=r[S],S>d&&(d=S),u&=~m}if(u=d,u=Rn()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*os(u/1960))-u,10<u){t.timeoutHandle=ne(Yr.bind(null,t,Zn),u);break}Yr(t,Zn);break;case 5:Yr(t,Zn);break;default:throw Error(w(329))}}}return Kt(t,Rn()),t.callbackNode===l?kt.bind(null,t):null}function va(t,r){var l=Mo;return t.current.memoizedState.isDehydrated&&(Ao(t,r).flags|=256),t=xa(t,r),t!==2&&(r=Zn,Zn=l,r!==null&&ya(r)),t}function ya(t){Zn===null?Zn=t:Zn.push.apply(Zn,t)}function ls(t){for(var r=t;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var u=0;u<l.length;u++){var d=l[u],m=d.getSnapshot;d=d.value;try{if(!at(m(),d))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function St(t,r){for(r&=~Xl,r&=~cr,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var l=31-Qt(r),u=1<<l;t[l]=-1,r&=~u}}function fr(t){if(Ge&6)throw Error(w(327));uo();var r=Jo(t,0);if(!(r&1))return Kt(t,Rn()),null;var l=xa(t,r);if(t.tag!==0&&l===2){var u=eo(t);u!==0&&(r=u,l=va(t,u))}if(l===1)throw l=Ci,Ao(t,0),St(t,r),Kt(t,Rn()),l;if(l===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,Yr(t,Zn),Kt(t,Rn()),null}function Ri(t){ao!==null&&ao.tag===0&&!(Ge&6)&&uo();var r=Ge;Ge|=1;var l=wn.transition,u=Be;try{if(wn.transition=null,Be=1,t)return t()}finally{Be=u,wn.transition=l,Ge=r,!(Ge&6)&&zt()}}function wa(){Rt=Yl.current,nn(Yl)}function Ao(t,r){t.finishedWork=null,t.finishedLanes=0;var l=t.timeoutHandle;if(l!==ye&&(t.timeoutHandle=ye,ue(l)),xn!==null)for(l=xn.return;l!==null;){var u=l;switch(Lu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Mt();break;case 3:vi(),nn(it),nn(et),Dl();break;case 5:Au(u);break;case 4:vi();break;case 13:nn(An);break;case 19:nn(An);break;case 10:Kn(u.type._context);break;case 22:case 23:wa()}l=l.return}if(Xn=t,xn=t=Io(t.current,null),Nn=Rt=r,jn=0,Ci=null,Xl=cr=io=0,Zn=Mo=null,At!==null){for(r=0;r<At.length;r++)if(l=At[r],u=l.interleaved,u!==null){l.interleaved=null;var d=u.next,m=l.pending;if(m!==null){var S=m.next;m.next=d,u.next=S}l.pending=u}At=null}return t}function is(t,r){do{var l=xn;try{if(ct(),Zi.current=Si,Ya){for(var u=In.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Ya=!1}if(Ll=0,dt=ft=In=null,ro=!1,Ml=0,Vr.current=null,l===null||l.return===null){jn=1,Ci=r,xn=null;break}e:{var m=t,S=l.return,D=l,J=r;if(r=Nn,D.flags|=32768,J!==null&&typeof J=="object"&&typeof J.then=="function"){var de=J,Ee=D,He=Ee.tag;if(!(Ee.mode&1)&&(He===0||He===11||He===15)){var Me=Ee.alternate;Me?(Ee.updateQueue=Me.updateQueue,Ee.memoizedState=Me.memoizedState,Ee.lanes=Me.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var Ke=Yu(S);if(Ke!==null){Ke.flags&=-257,Al(Ke,S,D,m,r),Ke.mode&1&&Co(m,de,r),r=Ke,J=de;var ke=r.updateQueue;if(ke===null){var Et=new Set;Et.add(J),r.updateQueue=Et}else ke.add(J);break e}else{if(!(r&1)){Co(m,de,r),pu();break e}J=Error(w(426))}}else if(Tn&&D.mode&1){var pr=Yu(S);if(pr!==null){!(pr.flags&65536)&&(pr.flags|=256),Al(pr,S,D,m,r),Va(J);break e}}m=J,jn!==4&&(jn=2),Mo===null?Mo=[m]:Mo.push(m),J=qu(J,D),D=S;do{switch(D.tag){case 3:D.flags|=65536,r&=-r,D.lanes|=r;var q=Vs(D,J,r);Ia(D,q);break e;case 1:m=J;var I=D.type,Z=D.stateNode;if(!(D.flags&128)&&(typeof I.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(Qr===null||!Qr.has(Z)))){D.flags|=65536,r&=-r,D.lanes|=r;var we=ru(D,m,r);Ia(D,we);break e}}D=D.return}while(D!==null)}ss(l)}catch(ze){r=ze,xn===l&&l!==null&&(xn=l=l.return);continue}break}while(!0)}function as(){var t=ma.current;return ma.current=Si,t===null?Si:t}function pu(){(jn===0||jn===3||jn===2)&&(jn=4),Xn===null||!(io&268435455)&&!(cr&268435455)||St(Xn,Nn)}function xa(t,r){var l=Ge;Ge|=2;var u=as();Xn===t&&Nn===r||Ao(t,r);do try{qs();break}catch(d){is(t,d)}while(!0);if(ct(),Ge=l,ma.current=u,xn!==null)throw Error(w(261));return Xn=null,Nn=0,jn}function qs(){for(;xn!==null;)us(xn)}function Ys(){for(;xn!==null&&!yr();)us(xn)}function us(t){var r=ds(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,r===null?ss(t):xn=r,Vr.current=null}function ss(t){var r=t;do{var l=r.alternate;if(t=r.return,r.flags&32768){if(l=su(l,r),l!==null){l.flags&=32767,xn=l;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{jn=6,xn=null;return}}else if(l=iu(l,r,Rt),l!==null){xn=l;return}if(r=r.sibling,r!==null){xn=r;return}xn=r=t}while(r!==null);jn===0&&(jn=5)}function Yr(t,r){var l=Be,u=wn.transition;try{wn.transition=null,Be=1,Xs(t,r,l)}finally{wn.transition=u,Be=l}return null}function Xs(t,r,l){do uo();while(ao!==null);if(Ge&6)throw Error(w(327));var u=t.finishedWork,d=t.finishedLanes;if(u===null)return null;if(t.finishedWork=null,t.finishedLanes=0,u===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var m=u.lanes|u.childLanes;if(Ir(t,m),t===Xn&&(xn=Xn=null,Nn=0),!(u.subtreeFlags&2064)&&!(u.flags&2064)||Oi||(Oi=!0,hu(Ct,function(){return uo(),null})),m=(u.flags&15990)!==0,u.subtreeFlags&15990||m){m=wn.transition,wn.transition=null;var S=Be;Be=1;var D=Ge;Ge|=4,Vr.current=null,Ju(t,u),Ic(t,u),H(t.containerInfo),t.current=u,ca(u),Ma(),Ge=D,Be=S,wn.transition=m}else t.current=u;if(Oi&&(Oi=!1,ao=t,Kl=d),m=t.pendingLanes,m===0&&(Qr=null),vo(u.stateNode),Kt(t,Rn()),r!==null)for(l=t.onRecoverableError,u=0;u<r.length;u++)l(r[u]);if(zi)throw zi=!1,t=zn,zn=null,t;return Kl&1&&t.tag!==0&&uo(),m=t.pendingLanes,m&1?t===Fo?Zl++:(Zl=0,Fo=t):Zl=0,zt(),null}function uo(){if(ao!==null){var t=vr(Kl),r=wn.transition,l=Be;try{if(wn.transition=null,Be=16>t?16:t,ao===null)var u=!1;else{if(t=ao,ao=null,Kl=0,Ge&6)throw Error(w(331));var d=Ge;for(Ge|=4,me=t.current;me!==null;){var m=me,S=m.child;if(me.flags&16){var D=m.deletions;if(D!==null){for(var J=0;J<D.length;J++){var de=D[J];for(me=de;me!==null;){var Ee=me;switch(Ee.tag){case 0:case 11:case 15:No(8,Ee,m)}var He=Ee.child;if(He!==null)He.return=Ee,me=He;else for(;me!==null;){Ee=me;var Me=Ee.sibling,Ke=Ee.return;if($u(Ee),Ee===de){me=null;break}if(Me!==null){Me.return=Ke,me=Me;break}me=Ke}}}var ke=m.alternate;if(ke!==null){var Et=ke.child;if(Et!==null){ke.child=null;do{var pr=Et.sibling;Et.sibling=null,Et=pr}while(Et!==null)}}me=m}}if(m.subtreeFlags&2064&&S!==null)S.return=m,me=S;else e:for(;me!==null;){if(m=me,m.flags&2048)switch(m.tag){case 0:case 11:case 15:No(9,m,m.return)}var q=m.sibling;if(q!==null){q.return=m.return,me=q;break e}me=m.return}}var I=t.current;for(me=I;me!==null;){S=me;var Z=S.child;if(S.subtreeFlags&2064&&Z!==null)Z.return=S,me=Z;else e:for(S=I;me!==null;){if(D=me,D.flags&2048)try{switch(D.tag){case 0:case 11:case 15:xt(9,D)}}catch(ze){Wt(D,D.return,ze)}if(D===S){me=null;break e}var we=D.sibling;if(we!==null){we.return=D.return,me=we;break e}me=D.return}}if(Ge=d,zt(),or&&typeof or.onPostCommitFiberRoot=="function")try{or.onPostCommitFiberRoot(el,t)}catch{}u=!0}return u}finally{Be=l,wn.transition=r}}return!1}function ka(t,r,l){r=qu(l,r),r=Vs(t,r,1),ol(t,r),r=sn(),t=hl(t,1),t!==null&&(gr(t,1,r),Kt(t,r))}function Wt(t,r,l){if(t.tag===3)ka(t,t,l);else for(;r!==null;){if(r.tag===3){ka(r,t,l);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Qr===null||!Qr.has(u))){t=qu(l,t),t=ru(r,t,1),ol(r,t),t=sn(),r=hl(r,1),r!==null&&(gr(r,1,t),Kt(r,t));break}}r=r.return}}function cs(t,r,l){var u=t.pingCache;u!==null&&u.delete(r),r=sn(),t.pingedLanes|=t.suspendedLanes&l,Xn===t&&(Nn&l)===l&&(jn===4||jn===3&&(Nn&130023424)===Nn&&500>Rn()-ga?Ao(t,0):Xl|=l),Kt(t,r)}function fs(t,r){r===0&&(t.mode&1?(r=rn,rn<<=1,!(rn&130023424)&&(rn=4194304)):r=1);var l=sn();t=hl(t,r),t!==null&&(gr(t,r,l),Kt(t,l))}function Gs(t){var r=t.memoizedState,l=0;r!==null&&(l=r.retryLane),fs(t,l)}function Ks(t,r){var l=0;switch(t.tag){case 13:var u=t.stateNode,d=t.memoizedState;d!==null&&(l=d.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(w(314))}u!==null&&u.delete(r),fs(t,l)}var ds;ds=function(t,r,l){if(t!==null)if(t.memoizedProps!==r.pendingProps||it.current)ht=!0;else{if(!(t.lanes&l)&&!(r.flags&128))return ht=!1,uu(t,r,l);ht=!!(t.flags&131072)}else ht=!1,Tn&&r.flags&1048576&&Fs(r,Wa,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2),t=r.pendingProps;var d=Lt(r,et.current);qn(r,l),d=yi(null,r,u,t,d,l);var m=ul();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Qn(u)?(m=!0,Ko(r)):m=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,ci(r),d.updater=ja,r.stateNode=d,d._reactInternals=r,Nu(r,u,t,l),r=Ot(null,r,u,!0,m,l)):(r.tag=0,Tn&&m&&Du(r),Un(null,r,d,l),r=r.child),r;case 16:u=r.elementType;e:{switch(t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2),t=r.pendingProps,d=u._init,u=d(u._payload),r.type=u,d=r.tag=Uc(u),t=st(u,t),d){case 0:r=Ro(null,r,u,t,l);break e;case 1:r=Ul(null,r,u,t,l);break e;case 11:r=_n(null,r,u,t,l);break e;case 14:r=kn(null,r,u,st(u.type,t),l);break e}throw Error(w(306,u,""))}return r;case 0:return u=r.type,d=r.pendingProps,d=r.elementType===u?d:st(u,d),Ro(t,r,u,d,l);case 1:return u=r.type,d=r.pendingProps,d=r.elementType===u?d:st(u,d),Ul(t,r,u,d,l);case 3:e:{if(ia(r),t===null)throw Error(w(387));u=r.pendingProps,m=r.memoizedState,d=m.element,Ou(t,r),Ua(r,u,null,l);var S=r.memoizedState;if(u=S.element,Je&&m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:S.cache,transitions:S.transitions},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){d=Error(w(423)),r=Gu(t,r,u,l,d);break e}else if(u!==d){d=Error(w(424)),r=Gu(t,r,u,l,d);break e}else for(Je&&(yt=Go(r.stateNode.containerInfo),It=r,Tn=!0,Sr=null,di=!1),l=Us(r,null,u,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(pi(),u===d){r=Gt(t,r,l);break e}Un(t,r,u,l)}r=r.child}return r;case 5:return js(r),t===null&&il(r),u=r.type,d=r.pendingProps,m=t!==null?t.memoizedProps:null,S=d.children,ee(u,d)?S=null:m!==null&&ee(u,m)&&(r.flags|=32),Ut(t,r),Un(t,r,S,l),r.child;case 6:return t===null&&il(r),null;case 13:return Ku(t,r,l);case 4:return Qa(r,r.stateNode.containerInfo),u=r.pendingProps,t===null?r.child=_o(r,null,u,l):Un(t,r,u,l),r.child;case 11:return u=r.type,d=r.pendingProps,d=r.elementType===u?d:st(u,d),_n(t,r,u,d,l);case 7:return Un(t,r,r.pendingProps,l),r.child;case 8:return Un(t,r,r.pendingProps.children,l),r.child;case 12:return Un(t,r,r.pendingProps.children,l),r.child;case 10:e:{if(u=r.type._context,d=r.pendingProps,m=r.memoizedProps,S=d.value,ko(r,u,S),m!==null)if(at(m.value,S)){if(m.children===d.children&&!it.current){r=Gt(t,r,l);break e}}else for(m=r.child,m!==null&&(m.return=r);m!==null;){var D=m.dependencies;if(D!==null){S=m.child;for(var J=D.firstContext;J!==null;){if(J.context===u){if(m.tag===1){J=So(-1,l&-l),J.tag=2;var de=m.updateQueue;if(de!==null){de=de.shared;var Ee=de.pending;Ee===null?J.next=J:(J.next=Ee.next,Ee.next=J),de.pending=J}}m.lanes|=l,J=m.alternate,J!==null&&(J.lanes|=l),tt(m.return,l,r),D.lanes|=l;break}J=J.next}}else if(m.tag===10)S=m.type===r.type?null:m.child;else if(m.tag===18){if(S=m.return,S===null)throw Error(w(341));S.lanes|=l,D=S.alternate,D!==null&&(D.lanes|=l),tt(S,l,r),S=m.sibling}else S=m.child;if(S!==null)S.return=m;else for(S=m;S!==null;){if(S===r){S=null;break}if(m=S.sibling,m!==null){m.return=S.return,S=m;break}S=S.return}m=S}Un(t,r,d.children,l),r=r.child}return r;case 9:return d=r.type,u=r.pendingProps.children,qn(r,l),d=Fn(d),u=u(d),r.flags|=1,Un(t,r,u,l),r.child;case 14:return u=r.type,d=st(u,r.pendingProps),d=st(u.type,d),kn(t,r,u,d,l);case 15:return Oo(t,r,r.type,r.pendingProps,l);case 17:return u=r.type,d=r.pendingProps,d=r.elementType===u?d:st(u,d),t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2),r.tag=1,Qn(u)?(t=!0,Ko(r)):t=!1,qn(r,l),Ls(r,u,d),Nu(r,u,d,l),Ot(null,r,u,!0,t,l);case 19:return Bl(t,r,l);case 22:return wt(t,r,l)}throw Error(w(156,r.tag))};function hu(t,r){return rr(t,r)}function Zs(t,r,l,u){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dr(t,r,l,u){return new Zs(t,r,l,u)}function mu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Uc(t){if(typeof t=="function")return mu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===F)return 11;if(t===j)return 14}return 2}function Io(t,r){var l=t.alternate;return l===null?(l=dr(t.tag,r,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=r,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&14680064,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,r=t.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l}function gu(t,r,l,u,d,m){var S=2;if(u=t,typeof t=="function")mu(t)&&(S=1);else if(typeof t=="string")S=5;else e:switch(t){case O:return Jl(l.children,d,m,r);case R:S=8,d|=8;break;case b:return t=dr(12,l,r,d|2),t.elementType=b,t.lanes=m,t;case M:return t=dr(13,l,r,d),t.elementType=M,t.lanes=m,t;case A:return t=dr(19,l,r,d),t.elementType=A,t.lanes=m,t;case te:return Sa(l,d,m,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case W:S=10;break e;case L:S=9;break e;case F:S=11;break e;case j:S=14;break e;case U:S=16,u=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return r=dr(S,l,r,d),r.elementType=t,r.type=u,r.lanes=m,r}function Jl(t,r,l,u){return t=dr(7,t,u,r),t.lanes=l,t}function Sa(t,r,l,u){return t=dr(22,t,u,r),t.elementType=te,t.lanes=l,t.stateNode={},t}function vu(t,r,l){return t=dr(6,t,null,r),t.lanes=l,t}function yu(t,r,l){return r=dr(4,t.children!==null?t.children:[],t.key,r),r.lanes=l,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function wu(t,r,l,u,d){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=ye,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cl(0),this.expirationTimes=Cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cl(0),this.identifierPrefix=u,this.onRecoverableError=d,Je&&(this.mutableSourceEagerHydrationData=null)}function Js(t,r,l,u,d,m,S,D,J){return t=new wu(t,r,l,D,J),r===1?(r=1,m===!0&&(r|=8)):r=0,m=dr(3,null,null,r),t.current=m,m.stateNode=t,m.memoizedState={element:u,isDehydrated:l,cache:null,transitions:null},ci(m),t}function $s(t){if(!t)return Mn;t=t._reactInternals;e:{if($(t)!==t||t.tag!==1)throw Error(w(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Qn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(w(171))}if(t.tag===1){var l=t.type;if(Qn(l))return ai(t,l,r)}return r}function ec(t){var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=Xe(r),t===null?null:t.stateNode}function _r(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<r?l:r}}function Ea(t,r){_r(t,r),(t=t.alternate)&&_r(t,r)}function xu(t){return t=Xe(t),t===null?null:t.stateNode}function nc(){return null}return f.attemptContinuousHydration=function(t){if(t.tag===13){var r=sn();Tt(t,134217728,r),Ea(t,134217728)}},f.attemptHydrationAtCurrentPriority=function(t){if(t.tag===13){var r=sn(),l=qr(t);Tt(t,l,r),Ea(t,l)}},f.attemptSynchronousHydration=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var l=$r(r.pendingLanes);l!==0&&(vt(r,l|1),Kt(r,Rn()),!(Ge&6)&&(Gl(),zt()))}break;case 13:var u=sn();Ri(function(){return Tt(t,1,u)}),Ea(t,1)}},f.batchedUpdates=function(t,r){var l=Ge;Ge|=1;try{return t(r)}finally{Ge=l,Ge===0&&(Gl(),to&&zt())}},f.createComponentSelector=function(t){return{$$typeof:da,value:t}},f.createContainer=function(t,r,l,u,d,m,S){return Js(t,r,!1,null,l,u,d,m,S)},f.createHasPseudoClassSelector=function(t){return{$$typeof:Vl,value:t}},f.createHydrationContainer=function(t,r,l,u,d,m,S,D,J){return t=Js(l,u,!0,t,d,m,S,D,J),t.context=$s(null),l=t.current,u=sn(),d=qr(l),m=So(u,d),m.callback=r??null,ol(l,m),t.current.lanes=d,gr(t,d,u),Kt(t,u),t},f.createPortal=function(t,r,l){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_,key:u==null?null:""+u,children:t,containerInfo:r,implementation:l}},f.createRoleSelector=function(t){return{$$typeof:Ql,value:t}},f.createTestNameSelector=function(t){return{$$typeof:Do,value:t}},f.createTextSelector=function(t){return{$$typeof:bi,value:t}},f.deferredUpdates=function(t){var r=Be,l=wn.transition;try{return wn.transition=null,Be=16,t()}finally{Be=r,wn.transition=l}},f.discreteUpdates=function(t,r,l,u,d){var m=Be,S=wn.transition;try{return wn.transition=null,Be=1,t(r,l,u,d)}finally{Be=m,wn.transition=S,Ge===0&&Gl()}},f.findAllNodes=Lo,f.findBoundingRects=function(t,r){if(!Re)throw Error(w(363));r=Lo(t,r),t=[];for(var l=0;l<r.length;l++)t.push(mn(r[l]));for(r=t.length-1;0<r;r--){l=t[r];for(var u=l.x,d=u+l.width,m=l.y,S=m+l.height,D=r-1;0<=D;D--)if(r!==D){var J=t[D],de=J.x,Ee=de+J.width,He=J.y,Me=He+J.height;if(u>=de&&m>=He&&d<=Ee&&S<=Me){t.splice(r,1);break}else if(u!==de||l.width!==J.width||Me<m||He>S){if(!(m!==He||l.height!==J.height||Ee<u||de>d)){de>u&&(J.width+=de-u,J.x=u),Ee<d&&(J.width=d-de),t.splice(r,1);break}}else{He>m&&(J.height+=He-m,J.y=m),Me<S&&(J.height=S-He),t.splice(r,1);break}}}return t},f.findHostInstance=ec,f.findHostInstanceWithNoPortals=function(t){return t=tn(t),t=t!==null?cn(t):null,t===null?null:t.stateNode},f.findHostInstanceWithWarning=function(t){return ec(t)},f.flushControlled=function(t){var r=Ge;Ge|=1;var l=wn.transition,u=Be;try{wn.transition=null,Be=1,t()}finally{Be=u,wn.transition=l,Ge=r,Ge===0&&(Gl(),zt())}},f.flushPassiveEffects=uo,f.flushSync=Ri,f.focusWithin=function(t,r){if(!Re)throw Error(w(363));for(t=pa(t),r=sr(t,r),r=Array.from(r),t=0;t<r.length;){var l=r[t++];if(!Fe(l)){if(l.tag===5&&vn(l.stateNode))return!0;for(l=l.child;l!==null;)r.push(l),l=l.sibling}}return!1},f.getCurrentUpdatePriority=function(){return Be},f.getFindAllNodesFailureDescription=function(t,r){if(!Re)throw Error(w(363));var l=0,u=[];t=[pa(t),0];for(var d=0;d<t.length;){var m=t[d++],S=t[d++],D=r[S];if((m.tag!==5||!Fe(m))&&(ha(m,D)&&(u.push(dl(D)),S++,S>l&&(l=S)),S<r.length))for(m=m.child;m!==null;)t.push(m,S),m=m.sibling}if(l<r.length){for(t=[];l<r.length;l++)t.push(dl(r[l]));return`findAllNodes was able to match part of the selector:
  `+(u.join(" > ")+`

No matching component was found for:
  `)+t.join(" > ")}return null},f.getPublicRootInstance=function(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return dn(t.child.stateNode);default:return t.child.stateNode}},f.injectIntoDevTools=function(t){if(t={bundleType:t.bundleType,version:t.version,rendererPackageName:t.rendererPackageName,rendererConfig:t.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:E.ReactCurrentDispatcher,findHostInstanceByFiber:xu,findFiberByHostInstance:t.findFiberByHostInstance||nc,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")t=!1;else{var r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(r.isDisabled||!r.supportsFiber)t=!0;else{try{el=r.inject(t),or=r}catch{}t=!!r.checkDCE}}return t},f.isAlreadyRendering=function(){return!1},f.observeVisibleRects=function(t,r,l,u){if(!Re)throw Error(w(363));t=Lo(t,r);var d=Sn(t,l,u).disconnect;return{disconnect:function(){d()}}},f.registerMutableSourceForHydration=function(t,r){var l=r._getVersion;l=l(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,l]:t.mutableSourceEagerHydrationData.push(r,l)},f.runWithPriority=function(t,r){var l=Be;try{return Be=t,r()}finally{Be=l}},f.shouldError=function(){return null},f.shouldSuspend=function(){return!1},f.updateContainer=function(t,r,l,u){var d=r.current,m=sn(),S=qr(d);return l=$s(l),r.context===null?r.context=l:r.pendingContext=l,r=So(m,S),r.payload={element:t},u=u===void 0?null:u,u!==null&&(r.callback=u),ol(d,r),t=Tt(d,S,m),t!==null&&Aa(t,d,S),S},f}),kf}var Ud;function Km(){return Ud||(Ud=1,yf.exports=Gm()),yf.exports}var Zm=Km();const ev=Nf(Zm);var nv=Tp();function jd(a,c){let f;return(...h)=>{window.clearTimeout(f),f=window.setTimeout(()=>a(...h),c)}}function tv({debounce:a,scroll:c,polyfill:f,offsetSize:h}={debounce:0,scroll:!1,offsetSize:!1}){const g=f||(typeof window>"u"?class{}:window.ResizeObserver);if(!g)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[y,w]=K.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),E=K.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:y,orientationHandler:null}),k=a?typeof a=="number"?a:a.scroll:null,_=a?typeof a=="number"?a:a.resize:null,O=K.useRef(!1);K.useEffect(()=>(O.current=!0,()=>void(O.current=!1)));const[R,b,W]=K.useMemo(()=>{const A=()=>{if(!E.current.element)return;const{left:j,top:U,width:te,height:oe,bottom:ge,right:z,x:Y,y:$}=E.current.element.getBoundingClientRect(),Pe={left:j,top:U,width:te,height:oe,bottom:ge,right:z,x:Y,y:$};E.current.element instanceof HTMLElement&&h&&(Pe.height=E.current.element.offsetHeight,Pe.width=E.current.element.offsetWidth),Object.freeze(Pe),O.current&&!ng(E.current.lastBounds,Pe)&&w(E.current.lastBounds=Pe)};return[A,_?jd(A,_):A,k?jd(A,k):A]},[w,h,k,_]);function L(){E.current.scrollContainers&&(E.current.scrollContainers.forEach(A=>A.removeEventListener("scroll",W,!0)),E.current.scrollContainers=null),E.current.resizeObserver&&(E.current.resizeObserver.disconnect(),E.current.resizeObserver=null),E.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",E.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",E.current.orientationHandler))}function F(){E.current.element&&(E.current.resizeObserver=new g(W),E.current.resizeObserver.observe(E.current.element),c&&E.current.scrollContainers&&E.current.scrollContainers.forEach(A=>A.addEventListener("scroll",W,{capture:!0,passive:!0})),E.current.orientationHandler=()=>{W()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",E.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",E.current.orientationHandler))}const M=A=>{!A||A===E.current.element||(L(),E.current.element=A,E.current.scrollContainers=Np(A),F())};return $m(W,!!c),Jm(b),K.useEffect(()=>{L(),F()},[c,W,b]),K.useEffect(()=>L,[]),[M,y,R]}function Jm(a){K.useEffect(()=>{const c=a;return window.addEventListener("resize",c),()=>void window.removeEventListener("resize",c)},[a])}function $m(a,c){K.useEffect(()=>{if(c){const f=a;return window.addEventListener("scroll",f,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",f,!0)}},[a,c])}function Np(a){const c=[];if(!a||a===document.body)return c;const{overflow:f,overflowX:h,overflowY:g}=window.getComputedStyle(a);return[f,h,g].some(y=>y==="auto"||y==="scroll")&&c.push(a),[...c,...Np(a.parentElement)]}const eg=["x","y","top","bottom","left","right","width","height"],ng=(a,c)=>eg.every(f=>a[f]===c[f]);var tg=Object.defineProperty,rg=Object.defineProperties,og=Object.getOwnPropertyDescriptors,Bd=Object.getOwnPropertySymbols,lg=Object.prototype.hasOwnProperty,ig=Object.prototype.propertyIsEnumerable,Wd=(a,c,f)=>c in a?tg(a,c,{enumerable:!0,configurable:!0,writable:!0,value:f}):a[c]=f,Hd=(a,c)=>{for(var f in c||(c={}))lg.call(c,f)&&Wd(a,f,c[f]);if(Bd)for(var f of Bd(c))ig.call(c,f)&&Wd(a,f,c[f]);return a},ag=(a,c)=>rg(a,og(c)),Vd,Qd;typeof window<"u"&&((Vd=window.document)!=null&&Vd.createElement||((Qd=window.navigator)==null?void 0:Qd.product)==="ReactNative")?K.useLayoutEffect:K.useEffect;function Dp(a,c,f){if(!a)return;if(f(a)===!0)return a;let h=a.child;for(;h;){const g=Dp(h,c,f);if(g)return g;h=h.sibling}}function Lp(a){try{return Object.defineProperties(a,{_currentRenderer:{get(){return null},set(){}},_currentRenderer2:{get(){return null},set(){}}})}catch{return a}}const qd=console.error;console.error=function(){const a=[...arguments].join("");if(a!=null&&a.startsWith("Warning:")&&a.includes("useContext")){console.error=qd;return}return qd.apply(this,arguments)};const Uf=Lp(K.createContext(null));class ug extends K.Component{render(){return K.createElement(Uf.Provider,{value:this._reactInternals},this.props.children)}}function sg(){const a=K.useContext(Uf);if(a===null)throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");const c=K.useId();return K.useMemo(()=>{for(const h of[a,a==null?void 0:a.alternate]){if(!h)continue;const g=Dp(h,!1,y=>{let w=y.memoizedState;for(;w;){if(w.memoizedState===c)return!0;w=w.next}});if(g)return g}},[a,c])}function cg(){const a=sg(),[c]=K.useState(()=>new Map);c.clear();let f=a;for(;f;){if(f.type&&typeof f.type=="object"){const g=f.type._context===void 0&&f.type.Provider===f.type?f.type:f.type._context;g&&g!==Uf&&!c.has(g)&&c.set(g,K.useContext(Lp(g)))}f=f.return}return c}function rv(){const a=cg();return K.useMemo(()=>Array.from(a.keys()).reduce((c,f)=>h=>K.createElement(c,null,K.createElement(f.Provider,ag(Hd({},h),{value:a.get(f)}))),c=>K.createElement(ug,Hd({},c))),[a])}function Yd(){return Yd=Object.assign?Object.assign.bind():function(a){for(var c=1;c<arguments.length;c++){var f=arguments[c];for(var h in f)({}).hasOwnProperty.call(f,h)&&(a[h]=f[h])}return a},Yd.apply(null,arguments)}function fg(){var a=Object.create(null);function c(g,y){var w=g.id,E=g.name,k=g.dependencies;k===void 0&&(k=[]);var _=g.init;_===void 0&&(_=function(){});var O=g.getTransferables;if(O===void 0&&(O=null),!a[w])try{k=k.map(function(b){return b&&b.isWorkerModule&&(c(b,function(W){if(W instanceof Error)throw W}),b=a[b.id].value),b}),_=h("<"+E+">.init",_),O&&(O=h("<"+E+">.getTransferables",O));var R=null;typeof _=="function"?R=_.apply(void 0,k):console.error("worker module init function failed to rehydrate"),a[w]={id:w,value:R,getTransferables:O},y(R)}catch(b){b&&b.noLog||console.error(b),y(b)}}function f(g,y){var w,E=g.id,k=g.args;(!a[E]||typeof a[E].value!="function")&&y(new Error("Worker module "+E+": not found or its 'init' did not return a function"));try{var _=(w=a[E]).value.apply(w,k);_&&typeof _.then=="function"?_.then(O,function(R){return y(R instanceof Error?R:new Error(""+R))}):O(_)}catch(R){y(R)}function O(R){try{var b=a[E].getTransferables&&a[E].getTransferables(R);(!b||!Array.isArray(b)||!b.length)&&(b=void 0),y(R,b)}catch(W){console.error(W),y(W)}}}function h(g,y){var w=void 0;self.troikaDefine=function(k){return w=k};var E=URL.createObjectURL(new Blob(["/** "+g.replace(/\*/g,"")+` **/

troikaDefine(
`+y+`
)`],{type:"application/javascript"}));try{importScripts(E)}catch(k){console.error(k)}return URL.revokeObjectURL(E),delete self.troikaDefine,w}self.addEventListener("message",function(g){var y=g.data,w=y.messageId,E=y.action,k=y.data;try{E==="registerModule"&&c(k,function(_){_ instanceof Error?postMessage({messageId:w,success:!1,error:_.message}):postMessage({messageId:w,success:!0,result:{isCallable:typeof _=="function"}})}),E==="callModule"&&f(k,function(_,O){_ instanceof Error?postMessage({messageId:w,success:!1,error:_.message}):postMessage({messageId:w,success:!0,result:_},O||void 0)})}catch(_){postMessage({messageId:w,success:!1,error:_.stack})}})}function dg(a){var c=function(){for(var f=[],h=arguments.length;h--;)f[h]=arguments[h];return c._getInitResult().then(function(g){if(typeof g=="function")return g.apply(void 0,f);throw new Error("Worker module function was called but `init` did not return a callable function")})};return c._getInitResult=function(){var f=a.dependencies,h=a.init;f=Array.isArray(f)?f.map(function(y){return y&&(y=y.onMainThread||y,y._getInitResult&&(y=y._getInitResult())),y}):[];var g=Promise.all(f).then(function(y){return h.apply(null,y)});return c._getInitResult=function(){return g},g},c}var Mp=function(){var a=!1;if(typeof window<"u"&&typeof window.document<"u")try{var c=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));c.terminate(),a=!0}catch(f){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+f.message+"]")}return Mp=function(){return a},a},pg=0,hg=0,Sf=!1,bs=Object.create(null),Cs=Object.create(null),Rf=Object.create(null);function mg(a){if((!a||typeof a.init!="function")&&!Sf)throw new Error("requires `options.init` function");var c=a.dependencies,f=a.init,h=a.getTransferables,g=a.workerId,y=dg(a);g==null&&(g="#default");var w="workerModule"+ ++pg,E=a.name||w,k=null;c=c&&c.map(function(O){return typeof O=="function"&&!O.workerModuleData&&(Sf=!0,O=mg({workerId:g,name:"<"+E+"> function dependency: "+O.name,init:`function(){return (
`+Oc(O)+`
)}`}),Sf=!1),O&&O.workerModuleData&&(O=O.workerModuleData),O});function _(){for(var O=[],R=arguments.length;R--;)O[R]=arguments[R];if(!Mp())return y.apply(void 0,O);if(!k){k=Xd(g,"registerModule",_.workerModuleData);var b=function(){k=null,Cs[g].delete(b)};(Cs[g]||(Cs[g]=new Set)).add(b)}return k.then(function(W){var L=W.isCallable;if(L)return Xd(g,"callModule",{id:w,args:O});throw new Error("Worker module function was called but `init` did not return a callable function")})}return _.workerModuleData={isWorkerModule:!0,id:w,name:E,dependencies:c,init:Oc(f),getTransferables:h&&Oc(h)},_.onMainThread=y,_}function ov(a){Cs[a]&&Cs[a].forEach(function(c){c()}),bs[a]&&(bs[a].terminate(),delete bs[a])}function Oc(a){var c=a.toString();return!/^function/.test(c)&&/^\w+\s*\(/.test(c)&&(c="function "+c),c}function gg(a){var c=bs[a];if(!c){var f=Oc(fg);c=bs[a]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+a.replace(/\*/g,"")+` **/

;(`+f+")()"],{type:"application/javascript"}))),c.onmessage=function(h){var g=h.data,y=g.messageId,w=Rf[y];if(!w)throw new Error("WorkerModule response with empty or unknown messageId");delete Rf[y],w(g)}}return c}function Xd(a,c,f){return new Promise(function(h,g){var y=++hg;Rf[y]=function(w){w.success?h(w.result):g(new Error("Error in worker "+c+" call: "+w.error))},gg(a).postMessage({messageId:y,action:c,data:f})})}function lv(){var a=function(c){function f(V,H,x,T,se,re,ee,le){var ne=1-ee;le.x=ne*ne*V+2*ne*ee*x+ee*ee*se,le.y=ne*ne*H+2*ne*ee*T+ee*ee*re}function h(V,H,x,T,se,re,ee,le,ne,ue){var ye=1-ne;ue.x=ye*ye*ye*V+3*ye*ye*ne*x+3*ye*ne*ne*se+ne*ne*ne*ee,ue.y=ye*ye*ye*H+3*ye*ye*ne*T+3*ye*ne*ne*re+ne*ne*ne*le}function g(V,H){for(var x=/([MLQCZ])([^MLQCZ]*)/g,T,se,re,ee,le;T=x.exec(V);){var ne=T[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(ue){return parseFloat(ue)});switch(T[1]){case"M":ee=se=ne[0],le=re=ne[1];break;case"L":(ne[0]!==ee||ne[1]!==le)&&H("L",ee,le,ee=ne[0],le=ne[1]);break;case"Q":{H("Q",ee,le,ee=ne[2],le=ne[3],ne[0],ne[1]);break}case"C":{H("C",ee,le,ee=ne[4],le=ne[5],ne[0],ne[1],ne[2],ne[3]);break}case"Z":(ee!==se||le!==re)&&H("L",ee,le,se,re);break}}}function y(V,H,x){x===void 0&&(x=16);var T={x:0,y:0};g(V,function(se,re,ee,le,ne,ue,ye,je,Qe){switch(se){case"L":H(re,ee,le,ne);break;case"Q":{for(var xe=re,Je=ee,Ln=1;Ln<x;Ln++)f(re,ee,ue,ye,le,ne,Ln/(x-1),T),H(xe,Je,T.x,T.y),xe=T.x,Je=T.y;break}case"C":{for(var Ue=re,$e=ee,en=1;en<x;en++)h(re,ee,ue,ye,je,Qe,le,ne,en/(x-1),T),H(Ue,$e,T.x,T.y),Ue=T.x,$e=T.y;break}}})}var w="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",E="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",k=new WeakMap,_={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function O(V,H){var x=V.getContext?V.getContext("webgl",_):V,T=k.get(x);if(!T){let ye=function(Ue){var $e=re[Ue];if(!$e&&($e=re[Ue]=x.getExtension(Ue),!$e))throw new Error(Ue+" not supported");return $e},je=function(Ue,$e){var en=x.createShader($e);return x.shaderSource(en,Ue),x.compileShader(en),en},Qe=function(Ue,$e,en,he){if(!ee[Ue]){var Le={},Re={},fe=x.createProgram();x.attachShader(fe,je($e,x.VERTEX_SHADER)),x.attachShader(fe,je(en,x.FRAGMENT_SHADER)),x.linkProgram(fe),ee[Ue]={program:fe,transaction:function(Ne){x.useProgram(fe),Ne({setUniform:function(De,vn){for(var Sn=[],qe=arguments.length-2;qe-- >0;)Sn[qe]=arguments[qe+2];var yn=Re[vn]||(Re[vn]=x.getUniformLocation(fe,vn));x["uniform"+De].apply(x,[yn].concat(Sn))},setAttribute:function(De,vn,Sn,qe,yn){var En=Le[De];En||(En=Le[De]={buf:x.createBuffer(),loc:x.getAttribLocation(fe,De),data:null}),x.bindBuffer(x.ARRAY_BUFFER,En.buf),x.vertexAttribPointer(En.loc,vn,x.FLOAT,!1,0,0),x.enableVertexAttribArray(En.loc),se?x.vertexAttribDivisor(En.loc,qe):ye("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(En.loc,qe),yn!==En.data&&(x.bufferData(x.ARRAY_BUFFER,yn,Sn),En.data=yn)}})}}}ee[Ue].transaction(he)},xe=function(Ue,$e){ne++;try{x.activeTexture(x.TEXTURE0+ne);var en=le[Ue];en||(en=le[Ue]=x.createTexture(),x.bindTexture(x.TEXTURE_2D,en),x.texParameteri(x.TEXTURE_2D,x.TEXTURE_MIN_FILTER,x.NEAREST),x.texParameteri(x.TEXTURE_2D,x.TEXTURE_MAG_FILTER,x.NEAREST)),x.bindTexture(x.TEXTURE_2D,en),$e(en,ne)}finally{ne--}},Je=function(Ue,$e,en){var he=x.createFramebuffer();ue.push(he),x.bindFramebuffer(x.FRAMEBUFFER,he),x.activeTexture(x.TEXTURE0+$e),x.bindTexture(x.TEXTURE_2D,Ue),x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Ue,0);try{en(he)}finally{x.deleteFramebuffer(he),x.bindFramebuffer(x.FRAMEBUFFER,ue[--ue.length-1]||null)}},Ln=function(){re={},ee={},le={},ne=-1,ue.length=0};var se=typeof WebGL2RenderingContext<"u"&&x instanceof WebGL2RenderingContext,re={},ee={},le={},ne=-1,ue=[];x.canvas.addEventListener("webglcontextlost",function(Ue){Ln(),Ue.preventDefault()},!1),k.set(x,T={gl:x,isWebGL2:se,getExtension:ye,withProgram:Qe,withTexture:xe,withTextureFramebuffer:Je,handleContextLoss:Ln})}H(T)}function R(V,H,x,T,se,re,ee,le){ee===void 0&&(ee=15),le===void 0&&(le=null),O(V,function(ne){var ue=ne.gl,ye=ne.withProgram,je=ne.withTexture;je("copy",function(Qe,xe){ue.texImage2D(ue.TEXTURE_2D,0,ue.RGBA,se,re,0,ue.RGBA,ue.UNSIGNED_BYTE,H),ye("copy",w,E,function(Je){var Ln=Je.setUniform,Ue=Je.setAttribute;Ue("aUV",2,ue.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),Ln("1i","image",xe),ue.bindFramebuffer(ue.FRAMEBUFFER,le||null),ue.disable(ue.BLEND),ue.colorMask(ee&8,ee&4,ee&2,ee&1),ue.viewport(x,T,se,re),ue.scissor(x,T,se,re),ue.drawArrays(ue.TRIANGLES,0,3)})})})}function b(V,H,x){var T=V.width,se=V.height;O(V,function(re){var ee=re.gl,le=new Uint8Array(T*se*4);ee.readPixels(0,0,T,se,ee.RGBA,ee.UNSIGNED_BYTE,le),V.width=H,V.height=x,R(ee,le,0,0,T,se)})}var W=Object.freeze({__proto__:null,withWebGLContext:O,renderImageData:R,resizeWebGLCanvasWithoutClearing:b});function L(V,H,x,T,se,re){re===void 0&&(re=1);var ee=new Uint8Array(V*H),le=T[2]-T[0],ne=T[3]-T[1],ue=[];y(x,function(Ue,$e,en,he){ue.push({x1:Ue,y1:$e,x2:en,y2:he,minX:Math.min(Ue,en),minY:Math.min($e,he),maxX:Math.max(Ue,en),maxY:Math.max($e,he)})}),ue.sort(function(Ue,$e){return Ue.maxX-$e.maxX});for(var ye=0;ye<V;ye++)for(var je=0;je<H;je++){var Qe=Je(T[0]+le*(ye+.5)/V,T[1]+ne*(je+.5)/H),xe=Math.pow(1-Math.abs(Qe)/se,re)/2;Qe<0&&(xe=1-xe),xe=Math.max(0,Math.min(255,Math.round(xe*255))),ee[je*V+ye]=xe}return ee;function Je(Ue,$e){for(var en=1/0,he=1/0,Le=ue.length;Le--;){var Re=ue[Le];if(Re.maxX+he<=Ue)break;if(Ue+he>Re.minX&&$e-he<Re.maxY&&$e+he>Re.minY){var fe=A(Ue,$e,Re.x1,Re.y1,Re.x2,Re.y2);fe<en&&(en=fe,he=Math.sqrt(en))}}return Ln(Ue,$e)&&(he=-he),he}function Ln(Ue,$e){for(var en=0,he=ue.length;he--;){var Le=ue[he];if(Le.maxX<=Ue)break;var Re=Le.y1>$e!=Le.y2>$e&&Ue<(Le.x2-Le.x1)*($e-Le.y1)/(Le.y2-Le.y1)+Le.x1;Re&&(en+=Le.y1<Le.y2?1:-1)}return en!==0}}function F(V,H,x,T,se,re,ee,le,ne,ue){re===void 0&&(re=1),le===void 0&&(le=0),ne===void 0&&(ne=0),ue===void 0&&(ue=0),M(V,H,x,T,se,re,ee,null,le,ne,ue)}function M(V,H,x,T,se,re,ee,le,ne,ue,ye){re===void 0&&(re=1),ne===void 0&&(ne=0),ue===void 0&&(ue=0),ye===void 0&&(ye=0);for(var je=L(V,H,x,T,se,re),Qe=new Uint8Array(je.length*4),xe=0;xe<je.length;xe++)Qe[xe*4+ye]=je[xe];R(ee,Qe,ne,ue,V,H,1<<3-ye,le)}function A(V,H,x,T,se,re){var ee=se-x,le=re-T,ne=ee*ee+le*le,ue=ne?Math.max(0,Math.min(1,((V-x)*ee+(H-T)*le)/ne)):0,ye=V-(x+ue*ee),je=H-(T+ue*le);return ye*ye+je*je}var j=Object.freeze({__proto__:null,generate:L,generateIntoCanvas:F,generateIntoFramebuffer:M}),U="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",te="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",oe="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",ge=new Float32Array([0,0,2,0,0,2]),z=null,Y=!1,$={},Pe=new WeakMap;function tn(V){if(!Y&&!Dn(V))throw new Error("WebGL generation not supported")}function Xe(V,H,x,T,se,re,ee){if(re===void 0&&(re=1),ee===void 0&&(ee=null),!ee&&(ee=z,!ee)){var le=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!le)throw new Error("OffscreenCanvas or DOM canvas not supported");ee=z=le.getContext("webgl",{depth:!1})}tn(ee);var ne=new Uint8Array(V*H*4);O(ee,function(Qe){var xe=Qe.gl,Je=Qe.withTexture,Ln=Qe.withTextureFramebuffer;Je("readable",function(Ue,$e){xe.texImage2D(xe.TEXTURE_2D,0,xe.RGBA,V,H,0,xe.RGBA,xe.UNSIGNED_BYTE,null),Ln(Ue,$e,function(en){cn(V,H,x,T,se,re,xe,en,0,0,0),xe.readPixels(0,0,V,H,xe.RGBA,xe.UNSIGNED_BYTE,ne)})})});for(var ue=new Uint8Array(V*H),ye=0,je=0;ye<ne.length;ye+=4)ue[je++]=ne[ye];return ue}function Ze(V,H,x,T,se,re,ee,le,ne,ue){re===void 0&&(re=1),le===void 0&&(le=0),ne===void 0&&(ne=0),ue===void 0&&(ue=0),cn(V,H,x,T,se,re,ee,null,le,ne,ue)}function cn(V,H,x,T,se,re,ee,le,ne,ue,ye){re===void 0&&(re=1),ne===void 0&&(ne=0),ue===void 0&&(ue=0),ye===void 0&&(ye=0),tn(ee);var je=[];y(x,function(Qe,xe,Je,Ln){je.push(Qe,xe,Je,Ln)}),je=new Float32Array(je),O(ee,function(Qe){var xe=Qe.gl,Je=Qe.isWebGL2,Ln=Qe.getExtension,Ue=Qe.withProgram,$e=Qe.withTexture,en=Qe.withTextureFramebuffer,he=Qe.handleContextLoss;if($e("rawDistances",function(Le,Re){(V!==Le._lastWidth||H!==Le._lastHeight)&&xe.texImage2D(xe.TEXTURE_2D,0,xe.RGBA,Le._lastWidth=V,Le._lastHeight=H,0,xe.RGBA,xe.UNSIGNED_BYTE,null),Ue("main",U,te,function(fe){var mn=fe.setAttribute,Ne=fe.setUniform,Fe=!Je&&Ln("ANGLE_instanced_arrays"),De=!Je&&Ln("EXT_blend_minmax");mn("aUV",2,xe.STATIC_DRAW,0,ge),mn("aLineSegment",4,xe.DYNAMIC_DRAW,1,je),Ne.apply(void 0,["4f","uGlyphBounds"].concat(T)),Ne("1f","uMaxDistance",se),Ne("1f","uExponent",re),en(Le,Re,function(vn){xe.enable(xe.BLEND),xe.colorMask(!0,!0,!0,!0),xe.viewport(0,0,V,H),xe.scissor(0,0,V,H),xe.blendFunc(xe.ONE,xe.ONE),xe.blendEquationSeparate(xe.FUNC_ADD,Je?xe.MAX:De.MAX_EXT),xe.clear(xe.COLOR_BUFFER_BIT),Je?xe.drawArraysInstanced(xe.TRIANGLES,0,3,je.length/4):Fe.drawArraysInstancedANGLE(xe.TRIANGLES,0,3,je.length/4)})}),Ue("post",w,oe,function(fe){fe.setAttribute("aUV",2,xe.STATIC_DRAW,0,ge),fe.setUniform("1i","tex",Re),xe.bindFramebuffer(xe.FRAMEBUFFER,le),xe.disable(xe.BLEND),xe.colorMask(ye===0,ye===1,ye===2,ye===3),xe.viewport(ne,ue,V,H),xe.scissor(ne,ue,V,H),xe.drawArrays(xe.TRIANGLES,0,3)})}),xe.isContextLost())throw he(),new Error("webgl context lost")})}function Dn(V){var H=!V||V===z?$:V.canvas||V,x=Pe.get(H);if(x===void 0){Y=!0;var T=null;try{var se=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],re=Xe(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,V);x=re&&se.length===re.length&&re.every(function(ee,le){return ee===se[le]}),x||(T="bad trial run results",console.info(se,re))}catch(ee){x=!1,T=ee.message}T&&console.warn("WebGL SDF generation not supported:",T),Y=!1,Pe.set(H,x)}return x}var dn=Object.freeze({__proto__:null,generate:Xe,generateIntoCanvas:Ze,generateIntoFramebuffer:cn,isSupported:Dn});function an(V,H,x,T,se,re){se===void 0&&(se=Math.max(T[2]-T[0],T[3]-T[1])/2),re===void 0&&(re=1);try{return Xe.apply(dn,arguments)}catch(ee){return console.info("WebGL SDF generation failed, falling back to JS",ee),L.apply(j,arguments)}}function X(V,H,x,T,se,re,ee,le,ne,ue){se===void 0&&(se=Math.max(T[2]-T[0],T[3]-T[1])/2),re===void 0&&(re=1),le===void 0&&(le=0),ne===void 0&&(ne=0),ue===void 0&&(ue=0);try{return Ze.apply(dn,arguments)}catch(ye){return console.info("WebGL SDF generation failed, falling back to JS",ye),F.apply(j,arguments)}}return c.forEachPathCommand=g,c.generate=an,c.generateIntoCanvas=X,c.javascript=j,c.pathToLineSegments=y,c.webgl=dn,c.webglUtils=W,Object.defineProperty(c,"__esModule",{value:!0}),c}({});return a}function iv(){var a=function(c){var f={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},h={},g={};h.L=1,g[1]="L",Object.keys(f).forEach(function(he,Le){h[he]=1<<Le+1,g[h[he]]=he}),Object.freeze(h);var y=h.LRI|h.RLI|h.FSI,w=h.L|h.R|h.AL,E=h.B|h.S|h.WS|h.ON|h.FSI|h.LRI|h.RLI|h.PDI,k=h.BN|h.RLE|h.LRE|h.RLO|h.LRO|h.PDF,_=h.S|h.WS|h.B|y|h.PDI|k,O=null;function R(){if(!O){O=new Map;var he=function(Re){if(f.hasOwnProperty(Re)){var fe=0;f[Re].split(",").forEach(function(mn){var Ne=mn.split("+"),Fe=Ne[0],De=Ne[1];Fe=parseInt(Fe,36),De=De?parseInt(De,36):0,O.set(fe+=Fe,h[Re]);for(var vn=0;vn<De;vn++)O.set(++fe,h[Re])})}};for(var Le in f)he(Le)}}function b(he){return R(),O.get(he.codePointAt(0))||h.L}function W(he){return g[b(he)]}var L={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function F(he,Le){var Re=36,fe=0,mn=new Map,Ne=Le&&new Map,Fe;return he.split(",").forEach(function De(vn){if(vn.indexOf("+")!==-1)for(var Sn=+vn;Sn--;)De(Fe);else{Fe=vn;var qe=vn.split(">"),yn=qe[0],En=qe[1];yn=String.fromCodePoint(fe+=parseInt(yn,Re)),En=String.fromCodePoint(fe+=parseInt(En,Re)),mn.set(yn,En),Le&&Ne.set(En,yn)}}),{map:mn,reverseMap:Ne}}var M,A,j;function U(){if(!M){var he=F(L.pairs,!0),Le=he.map,Re=he.reverseMap;M=Le,A=Re,j=F(L.canonical,!1).map}}function te(he){return U(),M.get(he)||null}function oe(he){return U(),A.get(he)||null}function ge(he){return U(),j.get(he)||null}var z=h.L,Y=h.R,$=h.EN,Pe=h.ES,tn=h.ET,Xe=h.AN,Ze=h.CS,cn=h.B,Dn=h.S,dn=h.ON,an=h.BN,X=h.NSM,V=h.AL,H=h.LRO,x=h.RLO,T=h.LRE,se=h.RLE,re=h.PDF,ee=h.LRI,le=h.RLI,ne=h.FSI,ue=h.PDI;function ye(he,Le){for(var Re=125,fe=new Uint32Array(he.length),mn=0;mn<he.length;mn++)fe[mn]=b(he[mn]);var Ne=new Map;function Fe(Kn,tt){var qn=fe[Kn];fe[Kn]=tt,Ne.set(qn,Ne.get(qn)-1),qn&E&&Ne.set(E,Ne.get(E)-1),Ne.set(tt,(Ne.get(tt)||0)+1),tt&E&&Ne.set(E,(Ne.get(E)||0)+1)}for(var De=new Uint8Array(he.length),vn=new Map,Sn=[],qe=null,yn=0;yn<he.length;yn++)qe||Sn.push(qe={start:yn,end:he.length-1,level:Le==="rtl"?1:Le==="ltr"?0:ct(yn,!1)}),fe[yn]&cn&&(qe.end=yn,qe=null);for(var En=se|T|x|H|y|ue|re|cn,$t=function(Kn){return Kn+(Kn&1?1:2)},Kr=function(Kn){return Kn+(Kn&1?2:1)},Or=0;Or<Sn.length;Or++){qe=Sn[Or];var pn=[{_level:qe.level,_override:0,_isolate:0}],On=void 0,er=0,nr=0,kl=0;Ne.clear();for(var Hn=qe.start;Hn<=qe.end;Hn++){var Vn=fe[Hn];if(On=pn[pn.length-1],Ne.set(Vn,(Ne.get(Vn)||0)+1),Vn&E&&Ne.set(E,(Ne.get(E)||0)+1),Vn&En)if(Vn&(se|T)){De[Hn]=On._level;var fo=(Vn===se?Kr:$t)(On._level);fo<=Re&&!er&&!nr?pn.push({_level:fo,_override:0,_isolate:0}):er||nr++}else if(Vn&(x|H)){De[Hn]=On._level;var po=(Vn===x?Kr:$t)(On._level);po<=Re&&!er&&!nr?pn.push({_level:po,_override:Vn&x?Y:z,_isolate:0}):er||nr++}else if(Vn&y){Vn&ne&&(Vn=ct(Hn+1,!0)===1?le:ee),De[Hn]=On._level,On._override&&Fe(Hn,On._override);var Hi=(Vn===le?Kr:$t)(On._level);Hi<=Re&&er===0&&nr===0?(kl++,pn.push({_level:Hi,_override:0,_isolate:1,_isolInitIndex:Hn})):er++}else if(Vn&ue){if(er>0)er--;else if(kl>0){for(nr=0;!pn[pn.length-1]._isolate;)pn.pop();var Sl=pn[pn.length-1]._isolInitIndex;Sl!=null&&(vn.set(Sl,Hn),vn.set(Hn,Sl)),pn.pop(),kl--}On=pn[pn.length-1],De[Hn]=On._level,On._override&&Fe(Hn,On._override)}else Vn&re?(er===0&&(nr>0?nr--:!On._isolate&&pn.length>1&&(pn.pop(),On=pn[pn.length-1])),De[Hn]=On._level):Vn&cn&&(De[Hn]=qe.level);else De[Hn]=On._level,On._override&&Vn!==an&&Fe(Hn,On._override)}for(var Zr=[],tr=null,Rr=qe.start;Rr<=qe.end;Rr++){var Qo=fe[Rr];if(!(Qo&k)){var oi=De[Rr],qo=Qo&y,Vi=Qo===ue;tr&&oi===tr._level?(tr._end=Rr,tr._endsWithIsolInit=qo):Zr.push(tr={_start:Rr,_end:Rr,_level:oi,_startsWithPDI:Vi,_endsWithIsolInit:qo})}}for(var ho=[],El=0;El<Zr.length;El++){var mr=Zr[El];if(!mr._startsWithPDI||mr._startsWithPDI&&!vn.has(mr._start)){for(var Yo=[tr=mr],Tr=void 0;tr&&tr._endsWithIsolInit&&(Tr=vn.get(tr._end))!=null;)for(var Xo=El+1;Xo<Zr.length;Xo++)if(Zr[Xo]._start===Tr){Yo.push(tr=Zr[Xo]);break}for(var Go=[],Qi=0;Qi<Yo.length;Qi++)for(var Ta=Yo[Qi],Nr=Ta._start;Nr<=Ta._end;Nr++)Go.push(Nr);for(var Na=De[Go[0]],qi=qe.level,Pl=Go[0]-1;Pl>=0;Pl--)if(!(fe[Pl]&k)){qi=De[Pl];break}var li=Go[Go.length-1],Da=De[li],Yi=qe.level;if(!(fe[li]&y)){for(var _l=li+1;_l<=qe.end;_l++)if(!(fe[_l]&k)){Yi=De[_l];break}}ho.push({_seqIndices:Go,_sosType:Math.max(qi,Na)%2?Y:z,_eosType:Math.max(Yi,Da)%2?Y:z})}}for(var Xi=0;Xi<ho.length;Xi++){var Gi=ho[Xi],ve=Gi._seqIndices,Dr=Gi._sosType,bl=Gi._eosType,Lr=De[ve[0]]&1?Y:z;if(Ne.get(X))for(var mo=0;mo<ve.length;mo++){var ii=ve[mo];if(fe[ii]&X){for(var Mr=Dr,bt=mo-1;bt>=0;bt--)if(!(fe[ve[bt]]&k)){Mr=fe[ve[bt]];break}Fe(ii,Mr&(y|ue)?dn:Mr)}}if(Ne.get($))for(var nn=0;nn<ve.length;nn++){var gn=ve[nn];if(fe[gn]&$)for(var Mn=nn-1;Mn>=-1;Mn--){var et=Mn===-1?Dr:fe[ve[Mn]];if(et&w){et===V&&Fe(gn,Xe);break}}}if(Ne.get(V))for(var it=0;it<ve.length;it++){var Jr=ve[it];fe[Jr]&V&&Fe(Jr,Y)}if(Ne.get(Pe)||Ne.get(Ze))for(var Lt=1;Lt<ve.length-1;Lt++){var Qn=ve[Lt];if(fe[Qn]&(Pe|Ze)){for(var Mt=0,go=0,ai=Lt-1;ai>=0&&(Mt=fe[ve[ai]],!!(Mt&k));ai--);for(var Ko=Lt+1;Ko<ve.length&&(go=fe[ve[Ko]],!!(go&k));Ko++);Mt===go&&(fe[Qn]===Pe?Mt===$:Mt&($|Xe))&&Fe(Qn,Mt)}}if(Ne.get($))for(var Ft=0;Ft<ve.length;Ft++){var Qt=ve[Ft];if(fe[Qt]&$){for(var Zo=Ft-1;Zo>=0&&fe[ve[Zo]]&(tn|k);Zo--)Fe(ve[Zo],$);for(Ft++;Ft<ve.length&&fe[ve[Ft]]&(tn|k|$);Ft++)fe[ve[Ft]]!==$&&Fe(ve[Ft],$)}}if(Ne.get(tn)||Ne.get(Pe)||Ne.get(Ze))for(var Fr=0;Fr<ve.length;Fr++){var La=ve[Fr];if(fe[La]&(tn|Pe|Ze)){Fe(La,dn);for(var Ar=Fr-1;Ar>=0&&fe[ve[Ar]]&k;Ar--)Fe(ve[Ar],dn);for(var rn=Fr+1;rn<ve.length&&fe[ve[rn]]&k;rn++)Fe(ve[rn],dn)}}if(Ne.get($))for(var $r=0,Jo=Dr;$r<ve.length;$r++){var ui=ve[$r],si=fe[ui];si&$?Jo===z&&Fe(ui,z):si&w&&(Jo=si)}if(Ne.get(E)){var eo=Y|$|Xe,Cl=eo|z,gr=[];{for(var Ir=[],vt=0;vt<ve.length;vt++)if(fe[ve[vt]]&E){var Be=he[ve[vt]],vr=void 0;if(te(Be)!==null)if(Ir.length<63)Ir.push({char:Be,seqIndex:vt});else break;else if((vr=oe(Be))!==null)for(var rr=Ir.length-1;rr>=0;rr--){var no=Ir[rr].char;if(no===vr||no===oe(ge(Be))||te(ge(no))===Be){gr.push([Ir[rr].seqIndex,vt]),Ir.length=rr;break}}}gr.sort(function(Kn,tt){return Kn[0]-tt[0]})}for(var yr=0;yr<gr.length;yr++){for(var Ma=gr[yr],Rn=Ma[0],Ur=Ma[1],Fa=!1,Ct=0,$o=Rn+1;$o<Ur;$o++){var el=ve[$o];if(fe[el]&Cl){Fa=!0;var or=fe[el]&eo?Y:z;if(or===Lr){Ct=or;break}}}if(Fa&&!Ct){Ct=Dr;for(var vo=Rn-1;vo>=0;vo--){var nl=ve[vo];if(fe[nl]&Cl){var at=fe[nl]&eo?Y:z;at!==Lr?Ct=at:Ct=Lr;break}}}if(Ct){if(fe[ve[Rn]]=fe[ve[Ur]]=Ct,Ct!==Lr){for(var ut=Rn+1;ut<ve.length;ut++)if(!(fe[ve[ut]]&k)){b(he[ve[ut]])&X&&(fe[ve[ut]]=Ct);break}}if(Ct!==Lr){for(var to=Ur+1;to<ve.length;to++)if(!(fe[ve[to]]&k)){b(he[ve[to]])&X&&(fe[ve[to]]=Ct);break}}}}for(var wr=0;wr<ve.length;wr++)if(fe[ve[wr]]&E){for(var zl=wr,tl=wr,zt=Dr,rl=wr-1;rl>=0;rl--)if(fe[ve[rl]]&k)zl=rl;else{zt=fe[ve[rl]]&eo?Y:z;break}for(var qt=bl,yo=wr+1;yo<ve.length;yo++)if(fe[ve[yo]]&(E|k))tl=yo;else{qt=fe[ve[yo]]&eo?Y:z;break}for(var st=zl;st<=tl;st++)fe[ve[st]]=zt===qt?zt:Lr;wr=tl}}}for(var nt=qe.start;nt<=qe.end;nt++){var wo=De[nt],Yt=fe[nt];if(wo&1?Yt&(z|$|Xe)&&De[nt]++:Yt&Y?De[nt]++:Yt&(Xe|$)&&(De[nt]+=2),Yt&k&&(De[nt]=nt===0?qe.level:De[nt-1]),nt===qe.end||b(he[nt])&(Dn|cn))for(var xo=nt;xo>=0&&b(he[xo])&_;xo--)De[xo]=qe.level}}return{levels:De,paragraphs:Sn};function ct(Kn,tt){for(var qn=Kn;qn<he.length;qn++){var Fn=fe[qn];if(Fn&(Y|V))return 1;if(Fn&(cn|z)||tt&&Fn===ue)return 0;if(Fn&y){var At=ko(qn);qn=At===-1?he.length:At}}return 0}function ko(Kn){for(var tt=1,qn=Kn+1;qn<he.length;qn++){var Fn=fe[qn];if(Fn&cn)break;if(Fn&ue){if(--tt===0)return qn}else Fn&y&&tt++}return-1}}var je="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",Qe;function xe(){if(!Qe){var he=F(je,!0),Le=he.map,Re=he.reverseMap;Re.forEach(function(fe,mn){Le.set(mn,fe)}),Qe=Le}}function Je(he){return xe(),Qe.get(he)||null}function Ln(he,Le,Re,fe){var mn=he.length;Re=Math.max(0,Re==null?0:+Re),fe=Math.min(mn-1,fe==null?mn-1:+fe);for(var Ne=new Map,Fe=Re;Fe<=fe;Fe++)if(Le[Fe]&1){var De=Je(he[Fe]);De!==null&&Ne.set(Fe,De)}return Ne}function Ue(he,Le,Re,fe){var mn=he.length;Re=Math.max(0,Re==null?0:+Re),fe=Math.min(mn-1,fe==null?mn-1:+fe);var Ne=[];return Le.paragraphs.forEach(function(Fe){var De=Math.max(Re,Fe.start),vn=Math.min(fe,Fe.end);if(De<vn){for(var Sn=Le.levels.slice(De,vn+1),qe=vn;qe>=De&&b(he[qe])&_;qe--)Sn[qe]=Fe.level;for(var yn=Fe.level,En=1/0,$t=0;$t<Sn.length;$t++){var Kr=Sn[$t];Kr>yn&&(yn=Kr),Kr<En&&(En=Kr|1)}for(var Or=yn;Or>=En;Or--)for(var pn=0;pn<Sn.length;pn++)if(Sn[pn]>=Or){for(var On=pn;pn+1<Sn.length&&Sn[pn+1]>=Or;)pn++;pn>On&&Ne.push([On+De,pn+De])}}}),Ne}function $e(he,Le,Re,fe){var mn=en(he,Le,Re,fe),Ne=[].concat(he);return mn.forEach(function(Fe,De){Ne[De]=(Le.levels[Fe]&1?Je(he[Fe]):null)||he[Fe]}),Ne.join("")}function en(he,Le,Re,fe){for(var mn=Ue(he,Le,Re,fe),Ne=[],Fe=0;Fe<he.length;Fe++)Ne[Fe]=Fe;return mn.forEach(function(De){for(var vn=De[0],Sn=De[1],qe=Ne.slice(vn,Sn+1),yn=qe.length;yn--;)Ne[Sn-yn]=qe[yn]}),Ne}return c.closingToOpeningBracket=oe,c.getBidiCharType=b,c.getBidiCharTypeName=W,c.getCanonicalBracket=ge,c.getEmbeddingLevels=ye,c.getMirroredCharacter=Je,c.getMirroredCharactersMap=Ln,c.getReorderSegments=Ue,c.getReorderedIndices=en,c.getReorderedString=$e,c.openingToClosingBracket=te,Object.defineProperty(c,"__esModule",{value:!0}),c}({});return a}var Ef={exports:{}},Pf,Gd;function vg(){if(Gd)return Pf;Gd=1;var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Pf=a,Pf}var _f,Kd;function yg(){if(Kd)return _f;Kd=1;var a=vg();function c(){}function f(){}return f.resetWarningCache=c,_f=function(){function h(w,E,k,_,O,R){if(R!==a){var b=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw b.name="Invariant Violation",b}}h.isRequired=h;function g(){return h}var y={array:h,bigint:h,bool:h,func:h,number:h,object:h,string:h,symbol:h,any:h,arrayOf:g,element:h,elementType:h,instanceOf:g,node:h,objectOf:g,oneOf:g,oneOfType:g,shape:g,exact:g,checkPropTypes:f,resetWarningCache:c};return y.PropTypes=y,y},_f}var Zd;function Fp(){return Zd||(Zd=1,Ef.exports=yg()()),Ef.exports}function _t(a,c){c===void 0&&(c={});var f=c.insertAt;if(a&&typeof document<"u"){var h=document.head||document.getElementsByTagName("head")[0],g=document.createElement("style");g.type="text/css",f==="top"&&h.firstChild?h.insertBefore(g,h.firstChild):h.appendChild(g),g.styleSheet?g.styleSheet.cssText=a:g.appendChild(document.createTextNode(a))}}_t(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var yl=function(){return yl=Object.assign||function(a){for(var c,f=1,h=arguments.length;f<h;f++)for(var g in c=arguments[f])Object.prototype.hasOwnProperty.call(c,g)&&(a[g]=c[g]);return a},yl.apply(this,arguments)};function Tc(a){return Tc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},Tc(a)}var wg=/^\s+/,xg=/\s+$/;function Te(a,c){if(c=c||{},(a=a||"")instanceof Te)return a;if(!(this instanceof Te))return new Te(a,c);var f=function(h){var g={r:0,g:0,b:0},y=1,w=null,E=null,k=null,_=!1,O=!1;typeof h=="string"&&(h=function(L){L=L.replace(wg,"").replace(xg,"").toLowerCase();var F,M=!1;if(Tf[L])L=Tf[L],M=!0;else if(L=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(F=Ho.rgb.exec(L))?{r:F[1],g:F[2],b:F[3]}:(F=Ho.rgba.exec(L))?{r:F[1],g:F[2],b:F[3],a:F[4]}:(F=Ho.hsl.exec(L))?{h:F[1],s:F[2],l:F[3]}:(F=Ho.hsla.exec(L))?{h:F[1],s:F[2],l:F[3],a:F[4]}:(F=Ho.hsv.exec(L))?{h:F[1],s:F[2],v:F[3]}:(F=Ho.hsva.exec(L))?{h:F[1],s:F[2],v:F[3],a:F[4]}:(F=Ho.hex8.exec(L))?{r:Gr(F[1]),g:Gr(F[2]),b:Gr(F[3]),a:rp(F[4]),format:M?"name":"hex8"}:(F=Ho.hex6.exec(L))?{r:Gr(F[1]),g:Gr(F[2]),b:Gr(F[3]),format:M?"name":"hex"}:(F=Ho.hex4.exec(L))?{r:Gr(F[1]+""+F[1]),g:Gr(F[2]+""+F[2]),b:Gr(F[3]+""+F[3]),a:rp(F[4]+""+F[4]),format:M?"name":"hex8"}:(F=Ho.hex3.exec(L))?{r:Gr(F[1]+""+F[1]),g:Gr(F[2]+""+F[2]),b:Gr(F[3]+""+F[3]),format:M?"name":"hex"}:!1}(h)),Tc(h)=="object"&&(ni(h.r)&&ni(h.g)&&ni(h.b)?(R=h.r,b=h.g,W=h.b,g={r:255*Wn(R,255),g:255*Wn(b,255),b:255*Wn(W,255)},_=!0,O=String(h.r).substr(-1)==="%"?"prgb":"rgb"):ni(h.h)&&ni(h.s)&&ni(h.v)?(w=_s(h.s),E=_s(h.v),g=function(L,F,M){L=6*Wn(L,360),F=Wn(F,100),M=Wn(M,100);var A=Math.floor(L),j=L-A,U=M*(1-F),te=M*(1-j*F),oe=M*(1-(1-j)*F),ge=A%6,z=[M,te,U,U,oe,M][ge],Y=[oe,M,M,te,U,U][ge],$=[U,U,oe,M,M,te][ge];return{r:255*z,g:255*Y,b:255*$}}(h.h,w,E),_=!0,O="hsv"):ni(h.h)&&ni(h.s)&&ni(h.l)&&(w=_s(h.s),k=_s(h.l),g=function(L,F,M){var A,j,U;function te(z,Y,$){return $<0&&($+=1),$>1&&($-=1),$<1/6?z+6*(Y-z)*$:$<.5?Y:$<2/3?z+(Y-z)*(2/3-$)*6:z}if(L=Wn(L,360),F=Wn(F,100),M=Wn(M,100),F===0)A=j=U=M;else{var oe=M<.5?M*(1+F):M+F-M*F,ge=2*M-oe;A=te(ge,oe,L+1/3),j=te(ge,oe,L),U=te(ge,oe,L-1/3)}return{r:255*A,g:255*j,b:255*U}}(h.h,w,k),_=!0,O="hsl"),h.hasOwnProperty("a")&&(y=h.a));var R,b,W;return y=Ap(y),{ok:_,format:h.format||O,r:Math.min(255,Math.max(g.r,0)),g:Math.min(255,Math.max(g.g,0)),b:Math.min(255,Math.max(g.b,0)),a:y}}(a);this._originalInput=a,this._r=f.r,this._g=f.g,this._b=f.b,this._a=f.a,this._roundA=Math.round(100*this._a)/100,this._format=c.format||f.format,this._gradientType=c.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=f.ok}function Jd(a,c,f){a=Wn(a,255),c=Wn(c,255),f=Wn(f,255);var h,g,y=Math.max(a,c,f),w=Math.min(a,c,f),E=(y+w)/2;if(y==w)h=g=0;else{var k=y-w;switch(g=E>.5?k/(2-y-w):k/(y+w),y){case a:h=(c-f)/k+(c<f?6:0);break;case c:h=(f-a)/k+2;break;case f:h=(a-c)/k+4}h/=6}return{h,s:g,l:E}}function $d(a,c,f){a=Wn(a,255),c=Wn(c,255),f=Wn(f,255);var h,g,y=Math.max(a,c,f),w=Math.min(a,c,f),E=y,k=y-w;if(g=y===0?0:k/y,y==w)h=0;else{switch(y){case a:h=(c-f)/k+(c<f?6:0);break;case c:h=(f-a)/k+2;break;case f:h=(a-c)/k+4}h/=6}return{h,s:g,v:E}}function ep(a,c,f,h){var g=[Vo(Math.round(a).toString(16)),Vo(Math.round(c).toString(16)),Vo(Math.round(f).toString(16))];return h&&g[0].charAt(0)==g[0].charAt(1)&&g[1].charAt(0)==g[1].charAt(1)&&g[2].charAt(0)==g[2].charAt(1)?g[0].charAt(0)+g[1].charAt(0)+g[2].charAt(0):g.join("")}function np(a,c,f,h){return[Vo(Ip(h)),Vo(Math.round(a).toString(16)),Vo(Math.round(c).toString(16)),Vo(Math.round(f).toString(16))].join("")}function kg(a,c){c=c===0?0:c||10;var f=Te(a).toHsl();return f.s-=c/100,f.s=Lc(f.s),Te(f)}function Sg(a,c){c=c===0?0:c||10;var f=Te(a).toHsl();return f.s+=c/100,f.s=Lc(f.s),Te(f)}function Eg(a){return Te(a).desaturate(100)}function Pg(a,c){c=c===0?0:c||10;var f=Te(a).toHsl();return f.l+=c/100,f.l=Lc(f.l),Te(f)}function _g(a,c){c=c===0?0:c||10;var f=Te(a).toRgb();return f.r=Math.max(0,Math.min(255,f.r-Math.round(-c/100*255))),f.g=Math.max(0,Math.min(255,f.g-Math.round(-c/100*255))),f.b=Math.max(0,Math.min(255,f.b-Math.round(-c/100*255))),Te(f)}function bg(a,c){c=c===0?0:c||10;var f=Te(a).toHsl();return f.l-=c/100,f.l=Lc(f.l),Te(f)}function Cg(a,c){var f=Te(a).toHsl(),h=(f.h+c)%360;return f.h=h<0?360+h:h,Te(f)}function zg(a){var c=Te(a).toHsl();return c.h=(c.h+180)%360,Te(c)}function tp(a,c){if(isNaN(c)||c<=0)throw new Error("Argument to polyad must be a positive number");for(var f=Te(a).toHsl(),h=[Te(a)],g=360/c,y=1;y<c;y++)h.push(Te({h:(f.h+y*g)%360,s:f.s,l:f.l}));return h}function Og(a){var c=Te(a).toHsl(),f=c.h;return[Te(a),Te({h:(f+72)%360,s:c.s,l:c.l}),Te({h:(f+216)%360,s:c.s,l:c.l})]}function Rg(a,c,f){c=c||6,f=f||30;var h=Te(a).toHsl(),g=360/f,y=[Te(a)];for(h.h=(h.h-(g*c>>1)+720)%360;--c;)h.h=(h.h+g)%360,y.push(Te(h));return y}function Tg(a,c){c=c||6;for(var f=Te(a).toHsv(),h=f.h,g=f.s,y=f.v,w=[],E=1/c;c--;)w.push(Te({h,s:g,v:y})),y=(y+E)%1;return w}Te.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var a=this.toRgb();return(299*a.r+587*a.g+114*a.b)/1e3},getLuminance:function(){var a,c,f,h=this.toRgb();return a=h.r/255,c=h.g/255,f=h.b/255,.2126*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))+.7152*(c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4))+.0722*(f<=.03928?f/12.92:Math.pow((f+.055)/1.055,2.4))},setAlpha:function(a){return this._a=Ap(a),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var a=$d(this._r,this._g,this._b);return{h:360*a.h,s:a.s,v:a.v,a:this._a}},toHsvString:function(){var a=$d(this._r,this._g,this._b),c=Math.round(360*a.h),f=Math.round(100*a.s),h=Math.round(100*a.v);return this._a==1?"hsv("+c+", "+f+"%, "+h+"%)":"hsva("+c+", "+f+"%, "+h+"%, "+this._roundA+")"},toHsl:function(){var a=Jd(this._r,this._g,this._b);return{h:360*a.h,s:a.s,l:a.l,a:this._a}},toHslString:function(){var a=Jd(this._r,this._g,this._b),c=Math.round(360*a.h),f=Math.round(100*a.s),h=Math.round(100*a.l);return this._a==1?"hsl("+c+", "+f+"%, "+h+"%)":"hsla("+c+", "+f+"%, "+h+"%, "+this._roundA+")"},toHex:function(a){return ep(this._r,this._g,this._b,a)},toHexString:function(a){return"#"+this.toHex(a)},toHex8:function(a){return function(c,f,h,g,y){var w=[Vo(Math.round(c).toString(16)),Vo(Math.round(f).toString(16)),Vo(Math.round(h).toString(16)),Vo(Ip(g))];return y&&w[0].charAt(0)==w[0].charAt(1)&&w[1].charAt(0)==w[1].charAt(1)&&w[2].charAt(0)==w[2].charAt(1)&&w[3].charAt(0)==w[3].charAt(1)?w[0].charAt(0)+w[1].charAt(0)+w[2].charAt(0)+w[3].charAt(0):w.join("")}(this._r,this._g,this._b,this._a,a)},toHex8String:function(a){return"#"+this.toHex8(a)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Wn(this._r,255))+"%",g:Math.round(100*Wn(this._g,255))+"%",b:Math.round(100*Wn(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Wn(this._r,255))+"%, "+Math.round(100*Wn(this._g,255))+"%, "+Math.round(100*Wn(this._b,255))+"%)":"rgba("+Math.round(100*Wn(this._r,255))+"%, "+Math.round(100*Wn(this._g,255))+"%, "+Math.round(100*Wn(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Ng[ep(this._r,this._g,this._b,!0)]||!1)},toFilter:function(a){var c="#"+np(this._r,this._g,this._b,this._a),f=c,h=this._gradientType?"GradientType = 1, ":"";if(a){var g=Te(a);f="#"+np(g._r,g._g,g._b,g._a)}return"progid:DXImageTransform.Microsoft.gradient("+h+"startColorstr="+c+",endColorstr="+f+")"},toString:function(a){var c=!!a;a=a||this._format;var f=!1,h=this._a<1&&this._a>=0;return c||!h||a!=="hex"&&a!=="hex6"&&a!=="hex3"&&a!=="hex4"&&a!=="hex8"&&a!=="name"?(a==="rgb"&&(f=this.toRgbString()),a==="prgb"&&(f=this.toPercentageRgbString()),a!=="hex"&&a!=="hex6"||(f=this.toHexString()),a==="hex3"&&(f=this.toHexString(!0)),a==="hex4"&&(f=this.toHex8String(!0)),a==="hex8"&&(f=this.toHex8String()),a==="name"&&(f=this.toName()),a==="hsl"&&(f=this.toHslString()),a==="hsv"&&(f=this.toHsvString()),f||this.toHexString()):a==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return Te(this.toString())},_applyModification:function(a,c){var f=a.apply(null,[this].concat([].slice.call(c)));return this._r=f._r,this._g=f._g,this._b=f._b,this.setAlpha(f._a),this},lighten:function(){return this._applyModification(Pg,arguments)},brighten:function(){return this._applyModification(_g,arguments)},darken:function(){return this._applyModification(bg,arguments)},desaturate:function(){return this._applyModification(kg,arguments)},saturate:function(){return this._applyModification(Sg,arguments)},greyscale:function(){return this._applyModification(Eg,arguments)},spin:function(){return this._applyModification(Cg,arguments)},_applyCombination:function(a,c){return a.apply(null,[this].concat([].slice.call(c)))},analogous:function(){return this._applyCombination(Rg,arguments)},complement:function(){return this._applyCombination(zg,arguments)},monochromatic:function(){return this._applyCombination(Tg,arguments)},splitcomplement:function(){return this._applyCombination(Og,arguments)},triad:function(){return this._applyCombination(tp,[3])},tetrad:function(){return this._applyCombination(tp,[4])}},Te.fromRatio=function(a,c){if(Tc(a)=="object"){var f={};for(var h in a)a.hasOwnProperty(h)&&(f[h]=h==="a"?a[h]:_s(a[h]));a=f}return Te(a,c)},Te.equals=function(a,c){return!(!a||!c)&&Te(a).toRgbString()==Te(c).toRgbString()},Te.random=function(){return Te.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},Te.mix=function(a,c,f){f=f===0?0:f||50;var h=Te(a).toRgb(),g=Te(c).toRgb(),y=f/100;return Te({r:(g.r-h.r)*y+h.r,g:(g.g-h.g)*y+h.g,b:(g.b-h.b)*y+h.b,a:(g.a-h.a)*y+h.a})},Te.readability=function(a,c){var f=Te(a),h=Te(c);return(Math.max(f.getLuminance(),h.getLuminance())+.05)/(Math.min(f.getLuminance(),h.getLuminance())+.05)},Te.isReadable=function(a,c,f){var h,g,y=Te.readability(a,c);switch(g=!1,(h=function(w){var E,k;return E=((w=w||{level:"AA",size:"small"}).level||"AA").toUpperCase(),k=(w.size||"small").toLowerCase(),E!=="AA"&&E!=="AAA"&&(E="AA"),k!=="small"&&k!=="large"&&(k="small"),{level:E,size:k}}(f)).level+h.size){case"AAsmall":case"AAAlarge":g=y>=4.5;break;case"AAlarge":g=y>=3;break;case"AAAsmall":g=y>=7}return g},Te.mostReadable=function(a,c,f){var h,g,y,w,E=null,k=0;g=(f=f||{}).includeFallbackColors,y=f.level,w=f.size;for(var _=0;_<c.length;_++)(h=Te.readability(a,c[_]))>k&&(k=h,E=Te(c[_]));return Te.isReadable(a,E,{level:y,size:w})||!g?E:(f.includeFallbackColors=!1,Te.mostReadable(a,["#fff","#000"],f))};var Tf=Te.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Ng=Te.hexNames=function(a){var c={};for(var f in a)a.hasOwnProperty(f)&&(c[a[f]]=f);return c}(Tf);function Ap(a){return a=parseFloat(a),(isNaN(a)||a<0||a>1)&&(a=1),a}function Wn(a,c){(function(h){return typeof h=="string"&&h.indexOf(".")!=-1&&parseFloat(h)===1})(a)&&(a="100%");var f=function(h){return typeof h=="string"&&h.indexOf("%")!=-1}(a);return a=Math.min(c,Math.max(0,parseFloat(a))),f&&(a=parseInt(a*c,10)/100),Math.abs(a-c)<1e-6?1:a%c/parseFloat(c)}function Lc(a){return Math.min(1,Math.max(0,a))}function Gr(a){return parseInt(a,16)}function Vo(a){return a.length==1?"0"+a:""+a}function _s(a){return a<=1&&(a=100*a+"%"),a}function Ip(a){return Math.round(255*parseFloat(a)).toString(16)}function rp(a){return Gr(a)/255}var Ui,Pc,_c,Ho=(Pc="[\\s|\\(]+("+(Ui="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Ui+")[,|\\s]+("+Ui+")\\s*\\)?",_c="[\\s|\\(]+("+Ui+")[,|\\s]+("+Ui+")[,|\\s]+("+Ui+")[,|\\s]+("+Ui+")\\s*\\)?",{CSS_UNIT:new RegExp(Ui),rgb:new RegExp("rgb"+Pc),rgba:new RegExp("rgba"+_c),hsl:new RegExp("hsl"+Pc),hsla:new RegExp("hsla"+_c),hsv:new RegExp("hsv"+Pc),hsva:new RegExp("hsva"+_c),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function ni(a){return!!Ho.CSS_UNIT.exec(a)}var Dg=function(a,c){var f=(typeof a=="string"?parseInt(a):a)||0;if(f>=-5&&f<=5){var h=f,g=parseFloat(c),y=g+h*(g/5)*-1;return(y==0||y<=Number.EPSILON)&&(y=.1),{animationPeriod:y+"s"}}return{animationPeriod:c}},Lg=function(a,c){var f=a||{},h="";switch(c){case"small":h="12px";break;case"medium":h="16px";break;case"large":h="20px";break;default:h=void 0}var g={};if(f.fontSize){var y=f.fontSize;g=function(w,E){var k={};for(var _ in w)Object.prototype.hasOwnProperty.call(w,_)&&E.indexOf(_)<0&&(k[_]=w[_]);if(w!=null&&typeof Object.getOwnPropertySymbols=="function"){var O=0;for(_=Object.getOwnPropertySymbols(w);O<_.length;O++)E.indexOf(_[O])<0&&Object.prototype.propertyIsEnumerable.call(w,_[O])&&(k[_[O]]=w[_[O]])}return k}(f,["fontSize"]),h=y}return{fontSize:h,styles:g}},Mg={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Fg=function(a){var c=a.className,f=a.text,h=a.textColor,g=a.staticText,y=a.style;return f?vl.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(c||"").trim(),style:yl(yl(yl({},g&&Mg),h&&{color:h,mixBlendMode:"unset"}),y&&y)},typeof f=="string"&&f.length?f:"loading"):null},Up="rgb(50, 205, 50)";function Ag(a,c){c===void 0&&(c=0);var f=[];return function h(g,y){return y===void 0&&(y=0),f.push.apply(f,g),f.length<y&&h(f,y),f.slice(0,y)}(a,c)}_t(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6de;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6ex, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6g6;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6h4;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6e7, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6ex {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes u1qz6e7 {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes u1qz6de {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes u1qz6fj {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes u1qz6g6 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes u1qz6h4 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);Te(Up).toRgb();Array.from({length:4},function(a,c){return"--atom-phase".concat(c+1,"-rgb")});_t(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite u1qz6k3;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: u1qz6j2 var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6j2 {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6k3 {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);var _u=Array.from({length:4},function(a,c){return"--commet-phase".concat(c+1,"-color")}),av=function(a){var c,f=Lg(a==null?void 0:a.style,a==null?void 0:a.size),h=f.styles,g=f.fontSize,y=a==null?void 0:a.easing,w=Dg(a==null?void 0:a.speedPlus,"1.2s").animationPeriod,E=function(k){var _={};if(k instanceof Array){for(var O=Ag(k,_u.length),R=0;R<O.length&&!(R>=4);R++)_[_u[R]]=O[R];return _}try{if(typeof k!="string")throw new Error("Color String expected");for(var b=0;b<_u.length;b++)_[_u[b]]=k}catch(W){for(W instanceof Error?console.warn("[".concat(W.message,']: Received "').concat(typeof k,'" instead with value, ').concat(JSON.stringify(k))):console.warn("".concat(JSON.stringify(k)," received in <Commet /> indicator cannot be processed. Using default instead!")),b=0;b<_u.length;b++)_[_u[b]]=Up}return _}((c=a==null?void 0:a.color)!==null&&c!==void 0?c:"");return vl.createElement("span",{className:"rli-d-i-b commet-rli-bounding-box",style:yl(yl(yl(yl(yl({},g&&{fontSize:g}),w&&{"--rli-animation-duration":w}),y&&{"--rli-animation-function":y}),E),h),role:"status","aria-live":"polite","aria-label":"Loading"},vl.createElement("span",{className:"rli-d-i-b commet-indicator"},vl.createElement("span",{className:"rli-d-i-b commet-box"},vl.createElement("span",{className:"rli-d-i-b commet-trail trail1"}),vl.createElement("span",{className:"rli-d-i-b  commetball-box"})),vl.createElement("span",{className:"rli-d-i-b commet-box"},vl.createElement("span",{className:"rli-d-i-b commet-trail trail2"}),vl.createElement("span",{className:"rli-d-i-b commetball-box"})),vl.createElement(Fg,{className:"commet-text",text:a==null?void 0:a.text,textColor:a==null?void 0:a.textColor})))};_t(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: u1qz6pz calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite u1qz6r6, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6sy;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6pz {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6r6 {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes u1qz6sy {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(a,c){return"--OP-annulus-phase".concat(c+1,"-color")});function bf(a){return a&&a.Math===Math&&a}_t(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite u1qz6qy, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6s0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6qy {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes u1qz6s0 {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);bf(typeof window=="object"&&window)||bf(typeof self=="object"&&self)||bf(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(a,c){return"--OP-dotted-phase".concat(c+1,"-color")});_t(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite u1qz6sz, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6t3;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6sz {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes u1qz6t3 {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(a,c){return"--OP-spokes-phase".concat(c+1,"-color")});_t(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite u1qz6t5, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite u1qz6uw;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6t5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6uw {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(a,c){return"--OP-annulus-dual-sectors-phase".concat(c+1,"-color")});_t(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6tq, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6v8;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6tq {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6v8 {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(a,c){return["--OP-annulus-track-phase".concat(c+1,"-color"),"--OP-annulus-sector-phase".concat(c+1,"-color")]});_t(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6cv, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6e3;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: u1qz6cr var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6cv {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes u1qz6cr {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes u1qz6e3 {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(a,c){return"--four-square-phase".concat(c+1,"-color")});_t(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: u1qz6bl, u1qz6c9;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6bl {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes u1qz6c9 {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(a,c){return"--mosaic-phase".concat(c+1,"-color")});_t(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6mm, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6og;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6mm {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes u1qz6og {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(a,c){return"--riple-phase".concat(c+1,"-color")});_t(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6uj, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6vi;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6uj {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes u1qz6vi {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(a,c){return"--TD-pulsate-phase".concat(c+1,"-color")});_t(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite u1qz6w1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite u1qz6x5;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6w1 {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes u1qz6x5 {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(a,c){return"--TD-brick-stack-phase".concat(c+1,"-color")});_t(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite u1qz6wd, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite u1qz6xx;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6wd {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes u1qz6xx {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(a,c){return"--TD-bob-phase".concat(c+1,"-color")});_t(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6yl, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite u1qz6zs;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6z4;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes u1qz6yl {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes u1qz6z4 {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes u1qz6zs {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(a,c){return"--TD-bounce-phase".concat(c+1,"-color")});_t(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: u1qz6i2, u1qz6js;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6i2 {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes u1qz6js {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(a,c){return"--shape-phase".concat(c+1,"-color")});_t(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: u1qz6nk var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, u1qz6op calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, u1qz6pg calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes u1qz6nk {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes u1qz6op {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes u1qz6pg {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(a,c){return"--trophySpin-phase".concat(c+1,"-color")});_t(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite u1qz6km, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite u1qz6lk;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes u1qz6km {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes u1qz6lk {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(a,c){return"--slab-phase".concat(c+1,"-color")});_t(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite u1qz6lr, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite u1qz6m8;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes u1qz6lr {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes u1qz6m8 {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(a,c){return"--life-line-phase".concat(c+1,"-color")});var Es={exports:{}},Cf={};function jp(a){var c,f,h="";if(typeof a=="string"||typeof a=="number")h+=a;else if(typeof a=="object")if(Array.isArray(a))for(c=0;c<a.length;c++)a[c]&&(f=jp(a[c]))&&(h&&(h+=" "),h+=f);else for(c in a)a[c]&&(h&&(h+=" "),h+=c);return h}function op(){for(var a,c,f=0,h="";f<arguments.length;)(a=arguments[f++])&&(c=jp(a))&&(h&&(h+=" "),h+=c);return h}const Ig=Object.freeze(Object.defineProperty({__proto__:null,clsx:op,default:op},Symbol.toStringTag,{value:"Module"})),Ug=dh(Ig);var lt={},ji={},lp;function Mc(){if(lp)return ji;lp=1,Object.defineProperty(ji,"__esModule",{value:!0}),ji.dontSetMe=g,ji.findInArray=a,ji.int=h,ji.isFunction=c,ji.isNum=f;function a(y,w){for(let E=0,k=y.length;E<k;E++)if(w.apply(w,[y[E],E,y]))return y[E]}function c(y){return typeof y=="function"||Object.prototype.toString.call(y)==="[object Function]"}function f(y){return typeof y=="number"&&!isNaN(y)}function h(y){return parseInt(y,10)}function g(y,w,E){if(y[w])return new Error("Invalid prop ".concat(w," passed to ").concat(E," - do not set this, set it on the child."))}return ji}var Bi={},ip;function jg(){if(ip)return Bi;ip=1,Object.defineProperty(Bi,"__esModule",{value:!0}),Bi.browserPrefixToKey=f,Bi.browserPrefixToStyle=h,Bi.default=void 0,Bi.getPrefix=c;const a=["Moz","Webkit","O","ms"];function c(){var y;let w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";const E=(y=window.document)===null||y===void 0||(y=y.documentElement)===null||y===void 0?void 0:y.style;if(!E||w in E)return"";for(let k=0;k<a.length;k++)if(f(w,a[k])in E)return a[k];return""}function f(y,w){return w?"".concat(w).concat(g(y)):y}function h(y,w){return w?"-".concat(w.toLowerCase(),"-").concat(y):y}function g(y){let w="",E=!0;for(let k=0;k<y.length;k++)E?(w+=y[k].toUpperCase(),E=!1):y[k]==="-"?E=!0:w+=y[k];return w}return Bi.default=c(),Bi}var ap;function jf(){if(ap)return lt;ap=1,Object.defineProperty(lt,"__esModule",{value:!0}),lt.addClassName=oe,lt.addEvent=E,lt.addUserSelectStyles=U,lt.createCSSTransform=L,lt.createSVGTransform=F,lt.getTouch=A,lt.getTouchIdentifier=j,lt.getTranslation=M,lt.innerHeight=R,lt.innerWidth=b,lt.matchesSelector=y,lt.matchesSelectorAndParentsTo=w,lt.offsetXYFromParent=W,lt.outerHeight=_,lt.outerWidth=O,lt.removeClassName=ge,lt.removeEvent=k,lt.removeUserSelectStyles=te;var a=Mc(),c=h(jg());function f(z){if(typeof WeakMap!="function")return null;var Y=new WeakMap,$=new WeakMap;return(f=function(Pe){return Pe?$:Y})(z)}function h(z,Y){if(z&&z.__esModule)return z;if(z===null||typeof z!="object"&&typeof z!="function")return{default:z};var $=f(Y);if($&&$.has(z))return $.get(z);var Pe={},tn=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Xe in z)if(Xe!=="default"&&Object.prototype.hasOwnProperty.call(z,Xe)){var Ze=tn?Object.getOwnPropertyDescriptor(z,Xe):null;Ze&&(Ze.get||Ze.set)?Object.defineProperty(Pe,Xe,Ze):Pe[Xe]=z[Xe]}return Pe.default=z,$&&$.set(z,Pe),Pe}let g="";function y(z,Y){return g||(g=(0,a.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function($){return(0,a.isFunction)(z[$])})),(0,a.isFunction)(z[g])?z[g](Y):!1}function w(z,Y,$){let Pe=z;do{if(y(Pe,Y))return!0;if(Pe===$)return!1;Pe=Pe.parentNode}while(Pe);return!1}function E(z,Y,$,Pe){if(!z)return;const tn={capture:!0,...Pe};z.addEventListener?z.addEventListener(Y,$,tn):z.attachEvent?z.attachEvent("on"+Y,$):z["on"+Y]=$}function k(z,Y,$,Pe){if(!z)return;const tn={capture:!0,...Pe};z.removeEventListener?z.removeEventListener(Y,$,tn):z.detachEvent?z.detachEvent("on"+Y,$):z["on"+Y]=null}function _(z){let Y=z.clientHeight;const $=z.ownerDocument.defaultView.getComputedStyle(z);return Y+=(0,a.int)($.borderTopWidth),Y+=(0,a.int)($.borderBottomWidth),Y}function O(z){let Y=z.clientWidth;const $=z.ownerDocument.defaultView.getComputedStyle(z);return Y+=(0,a.int)($.borderLeftWidth),Y+=(0,a.int)($.borderRightWidth),Y}function R(z){let Y=z.clientHeight;const $=z.ownerDocument.defaultView.getComputedStyle(z);return Y-=(0,a.int)($.paddingTop),Y-=(0,a.int)($.paddingBottom),Y}function b(z){let Y=z.clientWidth;const $=z.ownerDocument.defaultView.getComputedStyle(z);return Y-=(0,a.int)($.paddingLeft),Y-=(0,a.int)($.paddingRight),Y}function W(z,Y,$){const tn=Y===Y.ownerDocument.body?{left:0,top:0}:Y.getBoundingClientRect(),Xe=(z.clientX+Y.scrollLeft-tn.left)/$,Ze=(z.clientY+Y.scrollTop-tn.top)/$;return{x:Xe,y:Ze}}function L(z,Y){const $=M(z,Y,"px");return{[(0,c.browserPrefixToKey)("transform",c.default)]:$}}function F(z,Y){return M(z,Y,"")}function M(z,Y,$){let{x:Pe,y:tn}=z,Xe="translate(".concat(Pe).concat($,",").concat(tn).concat($,")");if(Y){const Ze="".concat(typeof Y.x=="string"?Y.x:Y.x+$),cn="".concat(typeof Y.y=="string"?Y.y:Y.y+$);Xe="translate(".concat(Ze,", ").concat(cn,")")+Xe}return Xe}function A(z,Y){return z.targetTouches&&(0,a.findInArray)(z.targetTouches,$=>Y===$.identifier)||z.changedTouches&&(0,a.findInArray)(z.changedTouches,$=>Y===$.identifier)}function j(z){if(z.targetTouches&&z.targetTouches[0])return z.targetTouches[0].identifier;if(z.changedTouches&&z.changedTouches[0])return z.changedTouches[0].identifier}function U(z){if(!z)return;let Y=z.getElementById("react-draggable-style-el");Y||(Y=z.createElement("style"),Y.type="text/css",Y.id="react-draggable-style-el",Y.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,Y.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,z.getElementsByTagName("head")[0].appendChild(Y)),z.body&&oe(z.body,"react-draggable-transparent-selection")}function te(z){if(z)try{if(z.body&&ge(z.body,"react-draggable-transparent-selection"),z.selection)z.selection.empty();else{const Y=(z.defaultView||window).getSelection();Y&&Y.type!=="Caret"&&Y.removeAllRanges()}}catch{}}function oe(z,Y){z.classList?z.classList.add(Y):z.className.match(new RegExp("(?:^|\\s)".concat(Y,"(?!\\S)")))||(z.className+=" ".concat(Y))}function ge(z,Y){z.classList?z.classList.remove(Y):z.className=z.className.replace(new RegExp("(?:^|\\s)".concat(Y,"(?!\\S)"),"g"),"")}return lt}var gl={},up;function Bp(){if(up)return gl;up=1,Object.defineProperty(gl,"__esModule",{value:!0}),gl.canDragX=g,gl.canDragY=y,gl.createCoreData=E,gl.createDraggableData=k,gl.getBoundPosition=f,gl.getControlPosition=w,gl.snapToGrid=h;var a=Mc(),c=jf();function f(R,b,W){if(!R.props.bounds)return[b,W];let{bounds:L}=R.props;L=typeof L=="string"?L:_(L);const F=O(R);if(typeof L=="string"){const{ownerDocument:M}=F,A=M.defaultView;let j;if(L==="parent"?j=F.parentNode:j=M.querySelector(L),!(j instanceof A.HTMLElement))throw new Error('Bounds selector "'+L+'" could not find an element.');const U=j,te=A.getComputedStyle(F),oe=A.getComputedStyle(U);L={left:-F.offsetLeft+(0,a.int)(oe.paddingLeft)+(0,a.int)(te.marginLeft),top:-F.offsetTop+(0,a.int)(oe.paddingTop)+(0,a.int)(te.marginTop),right:(0,c.innerWidth)(U)-(0,c.outerWidth)(F)-F.offsetLeft+(0,a.int)(oe.paddingRight)-(0,a.int)(te.marginRight),bottom:(0,c.innerHeight)(U)-(0,c.outerHeight)(F)-F.offsetTop+(0,a.int)(oe.paddingBottom)-(0,a.int)(te.marginBottom)}}return(0,a.isNum)(L.right)&&(b=Math.min(b,L.right)),(0,a.isNum)(L.bottom)&&(W=Math.min(W,L.bottom)),(0,a.isNum)(L.left)&&(b=Math.max(b,L.left)),(0,a.isNum)(L.top)&&(W=Math.max(W,L.top)),[b,W]}function h(R,b,W){const L=Math.round(b/R[0])*R[0],F=Math.round(W/R[1])*R[1];return[L,F]}function g(R){return R.props.axis==="both"||R.props.axis==="x"}function y(R){return R.props.axis==="both"||R.props.axis==="y"}function w(R,b,W){const L=typeof b=="number"?(0,c.getTouch)(R,b):null;if(typeof b=="number"&&!L)return null;const F=O(W),M=W.props.offsetParent||F.offsetParent||F.ownerDocument.body;return(0,c.offsetXYFromParent)(L||R,M,W.props.scale)}function E(R,b,W){const L=!(0,a.isNum)(R.lastX),F=O(R);return L?{node:F,deltaX:0,deltaY:0,lastX:b,lastY:W,x:b,y:W}:{node:F,deltaX:b-R.lastX,deltaY:W-R.lastY,lastX:R.lastX,lastY:R.lastY,x:b,y:W}}function k(R,b){const W=R.props.scale;return{node:b.node,x:R.state.x+b.deltaX/W,y:R.state.y+b.deltaY/W,deltaX:b.deltaX/W,deltaY:b.deltaY/W,lastX:R.state.x,lastY:R.state.y}}function _(R){return{left:R.left,top:R.top,right:R.right,bottom:R.bottom}}function O(R){const b=R.findDOMNode();if(!b)throw new Error("<DraggableCore>: Unmounted during event!");return b}return gl}var Ps={},bc={},sp;function Wp(){if(sp)return bc;sp=1,Object.defineProperty(bc,"__esModule",{value:!0}),bc.default=a;function a(){}return bc}var cp;function Bg(){if(cp)return Ps;cp=1,Object.defineProperty(Ps,"__esModule",{value:!0}),Ps.default=void 0;var a=_(bu()),c=E(Fp()),f=E(Df()),h=jf(),g=Bp(),y=Mc(),w=E(Wp());function E(M){return M&&M.__esModule?M:{default:M}}function k(M){if(typeof WeakMap!="function")return null;var A=new WeakMap,j=new WeakMap;return(k=function(U){return U?j:A})(M)}function _(M,A){if(M&&M.__esModule)return M;if(M===null||typeof M!="object"&&typeof M!="function")return{default:M};var j=k(A);if(j&&j.has(M))return j.get(M);var U={},te=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var oe in M)if(oe!=="default"&&Object.prototype.hasOwnProperty.call(M,oe)){var ge=te?Object.getOwnPropertyDescriptor(M,oe):null;ge&&(ge.get||ge.set)?Object.defineProperty(U,oe,ge):U[oe]=M[oe]}return U.default=M,j&&j.set(M,U),U}function O(M,A,j){return A=R(A),A in M?Object.defineProperty(M,A,{value:j,enumerable:!0,configurable:!0,writable:!0}):M[A]=j,M}function R(M){var A=b(M,"string");return typeof A=="symbol"?A:String(A)}function b(M,A){if(typeof M!="object"||M===null)return M;var j=M[Symbol.toPrimitive];if(j!==void 0){var U=j.call(M,A||"default");if(typeof U!="object")return U;throw new TypeError("@@toPrimitive must return a primitive value.")}return(A==="string"?String:Number)(M)}const W={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let L=W.mouse,F=class extends a.Component{constructor(){super(...arguments),O(this,"dragging",!1),O(this,"lastX",NaN),O(this,"lastY",NaN),O(this,"touchIdentifier",null),O(this,"mounted",!1),O(this,"handleDragStart",A=>{if(this.props.onMouseDown(A),!this.props.allowAnyClick&&typeof A.button=="number"&&A.button!==0)return!1;const j=this.findDOMNode();if(!j||!j.ownerDocument||!j.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:U}=j;if(this.props.disabled||!(A.target instanceof U.defaultView.Node)||this.props.handle&&!(0,h.matchesSelectorAndParentsTo)(A.target,this.props.handle,j)||this.props.cancel&&(0,h.matchesSelectorAndParentsTo)(A.target,this.props.cancel,j))return;A.type==="touchstart"&&A.preventDefault();const te=(0,h.getTouchIdentifier)(A);this.touchIdentifier=te;const oe=(0,g.getControlPosition)(A,te,this);if(oe==null)return;const{x:ge,y:z}=oe,Y=(0,g.createCoreData)(this,ge,z);(0,w.default)("DraggableCore: handleDragStart: %j",Y),(0,w.default)("calling",this.props.onStart),!(this.props.onStart(A,Y)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,h.addUserSelectStyles)(U),this.dragging=!0,this.lastX=ge,this.lastY=z,(0,h.addEvent)(U,L.move,this.handleDrag),(0,h.addEvent)(U,L.stop,this.handleDragStop))}),O(this,"handleDrag",A=>{const j=(0,g.getControlPosition)(A,this.touchIdentifier,this);if(j==null)return;let{x:U,y:te}=j;if(Array.isArray(this.props.grid)){let z=U-this.lastX,Y=te-this.lastY;if([z,Y]=(0,g.snapToGrid)(this.props.grid,z,Y),!z&&!Y)return;U=this.lastX+z,te=this.lastY+Y}const oe=(0,g.createCoreData)(this,U,te);if((0,w.default)("DraggableCore: handleDrag: %j",oe),this.props.onDrag(A,oe)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch{const Y=document.createEvent("MouseEvents");Y.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(Y)}return}this.lastX=U,this.lastY=te}),O(this,"handleDragStop",A=>{if(!this.dragging)return;const j=(0,g.getControlPosition)(A,this.touchIdentifier,this);if(j==null)return;let{x:U,y:te}=j;if(Array.isArray(this.props.grid)){let Y=U-this.lastX||0,$=te-this.lastY||0;[Y,$]=(0,g.snapToGrid)(this.props.grid,Y,$),U=this.lastX+Y,te=this.lastY+$}const oe=(0,g.createCoreData)(this,U,te);if(this.props.onStop(A,oe)===!1||this.mounted===!1)return!1;const z=this.findDOMNode();z&&this.props.enableUserSelectHack&&(0,h.removeUserSelectStyles)(z.ownerDocument),(0,w.default)("DraggableCore: handleDragStop: %j",oe),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,z&&((0,w.default)("DraggableCore: Removing handlers"),(0,h.removeEvent)(z.ownerDocument,L.move,this.handleDrag),(0,h.removeEvent)(z.ownerDocument,L.stop,this.handleDragStop))}),O(this,"onMouseDown",A=>(L=W.mouse,this.handleDragStart(A))),O(this,"onMouseUp",A=>(L=W.mouse,this.handleDragStop(A))),O(this,"onTouchStart",A=>(L=W.touch,this.handleDragStart(A))),O(this,"onTouchEnd",A=>(L=W.touch,this.handleDragStop(A)))}componentDidMount(){this.mounted=!0;const A=this.findDOMNode();A&&(0,h.addEvent)(A,W.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const A=this.findDOMNode();if(A){const{ownerDocument:j}=A;(0,h.removeEvent)(j,W.mouse.move,this.handleDrag),(0,h.removeEvent)(j,W.touch.move,this.handleDrag),(0,h.removeEvent)(j,W.mouse.stop,this.handleDragStop),(0,h.removeEvent)(j,W.touch.stop,this.handleDragStop),(0,h.removeEvent)(A,W.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,h.removeUserSelectStyles)(j)}}findDOMNode(){var A,j;return(A=this.props)!==null&&A!==void 0&&A.nodeRef?(j=this.props)===null||j===void 0||(j=j.nodeRef)===null||j===void 0?void 0:j.current:f.default.findDOMNode(this)}render(){return a.cloneElement(a.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};return Ps.default=F,O(F,"displayName","DraggableCore"),O(F,"propTypes",{allowAnyClick:c.default.bool,children:c.default.node.isRequired,disabled:c.default.bool,enableUserSelectHack:c.default.bool,offsetParent:function(M,A){if(M[A]&&M[A].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:c.default.arrayOf(c.default.number),handle:c.default.string,cancel:c.default.string,nodeRef:c.default.object,onStart:c.default.func,onDrag:c.default.func,onStop:c.default.func,onMouseDown:c.default.func,scale:c.default.number,className:y.dontSetMe,style:y.dontSetMe,transform:y.dontSetMe}),O(F,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1}),Ps}var fp;function Wg(){return fp||(fp=1,function(a){Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"DraggableCore",{enumerable:!0,get:function(){return k.default}}),a.default=void 0;var c=b(bu()),f=O(Fp()),h=O(Df()),g=O(Ug),y=jf(),w=Bp(),E=Mc(),k=O(Bg()),_=O(Wp());function O(j){return j&&j.__esModule?j:{default:j}}function R(j){if(typeof WeakMap!="function")return null;var U=new WeakMap,te=new WeakMap;return(R=function(oe){return oe?te:U})(j)}function b(j,U){if(j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var te=R(U);if(te&&te.has(j))return te.get(j);var oe={},ge=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var z in j)if(z!=="default"&&Object.prototype.hasOwnProperty.call(j,z)){var Y=ge?Object.getOwnPropertyDescriptor(j,z):null;Y&&(Y.get||Y.set)?Object.defineProperty(oe,z,Y):oe[z]=j[z]}return oe.default=j,te&&te.set(j,oe),oe}function W(){return W=Object.assign?Object.assign.bind():function(j){for(var U=1;U<arguments.length;U++){var te=arguments[U];for(var oe in te)Object.prototype.hasOwnProperty.call(te,oe)&&(j[oe]=te[oe])}return j},W.apply(this,arguments)}function L(j,U,te){return U=F(U),U in j?Object.defineProperty(j,U,{value:te,enumerable:!0,configurable:!0,writable:!0}):j[U]=te,j}function F(j){var U=M(j,"string");return typeof U=="symbol"?U:String(U)}function M(j,U){if(typeof j!="object"||j===null)return j;var te=j[Symbol.toPrimitive];if(te!==void 0){var oe=te.call(j,U||"default");if(typeof oe!="object")return oe;throw new TypeError("@@toPrimitive must return a primitive value.")}return(U==="string"?String:Number)(j)}class A extends c.Component{static getDerivedStateFromProps(U,te){let{position:oe}=U,{prevPropsPosition:ge}=te;return oe&&(!ge||oe.x!==ge.x||oe.y!==ge.y)?((0,_.default)("Draggable: getDerivedStateFromProps %j",{position:oe,prevPropsPosition:ge}),{x:oe.x,y:oe.y,prevPropsPosition:{...oe}}):null}constructor(U){super(U),L(this,"onDragStart",(te,oe)=>{if((0,_.default)("Draggable: onDragStart: %j",oe),this.props.onStart(te,(0,w.createDraggableData)(this,oe))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),L(this,"onDrag",(te,oe)=>{if(!this.state.dragging)return!1;(0,_.default)("Draggable: onDrag: %j",oe);const ge=(0,w.createDraggableData)(this,oe),z={x:ge.x,y:ge.y,slackX:0,slackY:0};if(this.props.bounds){const{x:$,y:Pe}=z;z.x+=this.state.slackX,z.y+=this.state.slackY;const[tn,Xe]=(0,w.getBoundPosition)(this,z.x,z.y);z.x=tn,z.y=Xe,z.slackX=this.state.slackX+($-z.x),z.slackY=this.state.slackY+(Pe-z.y),ge.x=z.x,ge.y=z.y,ge.deltaX=z.x-this.state.x,ge.deltaY=z.y-this.state.y}if(this.props.onDrag(te,ge)===!1)return!1;this.setState(z)}),L(this,"onDragStop",(te,oe)=>{if(!this.state.dragging||this.props.onStop(te,(0,w.createDraggableData)(this,oe))===!1)return!1;(0,_.default)("Draggable: onDragStop: %j",oe);const z={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:$,y:Pe}=this.props.position;z.x=$,z.y=Pe}this.setState(z)}),this.state={dragging:!1,dragged:!1,x:U.position?U.position.x:U.defaultPosition.x,y:U.position?U.position.y:U.defaultPosition.y,prevPropsPosition:{...U.position},slackX:0,slackY:0,isElementSVG:!1},U.position&&!(U.onDrag||U.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var U,te;return(U=(te=this.props)===null||te===void 0||(te=te.nodeRef)===null||te===void 0?void 0:te.current)!==null&&U!==void 0?U:h.default.findDOMNode(this)}render(){const{axis:U,bounds:te,children:oe,defaultPosition:ge,defaultClassName:z,defaultClassNameDragging:Y,defaultClassNameDragged:$,position:Pe,positionOffset:tn,scale:Xe,...Ze}=this.props;let cn={},Dn=null;const an=!!!Pe||this.state.dragging,X=Pe||ge,V={x:(0,w.canDragX)(this)&&an?this.state.x:X.x,y:(0,w.canDragY)(this)&&an?this.state.y:X.y};this.state.isElementSVG?Dn=(0,y.createSVGTransform)(V,tn):cn=(0,y.createCSSTransform)(V,tn);const H=(0,g.default)(oe.props.className||"",z,{[Y]:this.state.dragging,[$]:this.state.dragged});return c.createElement(k.default,W({},Ze,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),c.cloneElement(c.Children.only(oe),{className:H,style:{...oe.props.style,...cn},transform:Dn}))}}a.default=A,L(A,"displayName","Draggable"),L(A,"propTypes",{...k.default.propTypes,axis:f.default.oneOf(["both","x","y","none"]),bounds:f.default.oneOfType([f.default.shape({left:f.default.number,right:f.default.number,top:f.default.number,bottom:f.default.number}),f.default.string,f.default.oneOf([!1])]),defaultClassName:f.default.string,defaultClassNameDragging:f.default.string,defaultClassNameDragged:f.default.string,defaultPosition:f.default.shape({x:f.default.number,y:f.default.number}),positionOffset:f.default.shape({x:f.default.oneOfType([f.default.number,f.default.string]),y:f.default.oneOfType([f.default.number,f.default.string])}),position:f.default.shape({x:f.default.number,y:f.default.number}),className:E.dontSetMe,style:E.dontSetMe,transform:E.dontSetMe}),L(A,"defaultProps",{...k.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})}(Cf)),Cf}var dp;function Hg(){if(dp)return Es.exports;dp=1;const{default:a,DraggableCore:c}=Wg();return Es.exports=a,Es.exports.default=a,Es.exports.DraggableCore=c,Es.exports}var Vg=Hg();const sv=Nf(Vg);export{Xg as B,sv as D,ug as F,ev as R,lv as S,av as V,Yd as _,Gg as a,nv as b,$g as c,Kg as d,tv as e,qg as f,mg as g,iv as h,vl as i,Qg as j,Yg as k,sm as l,Jg as p,K as r,Zg as s,ov as t,rv as u};
