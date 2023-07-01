// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).itercugmean=r()}(this,(function(){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;r=function(){try{return n({},"x",{}),!0}catch(n){return!1}}()?t:function(n,r,t){var c,l,y,p;if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. First argument must be an object. Value: `"+n+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(n,r)||a.call(n,r)?(c=n.__proto__,n.__proto__=e,delete n[r],n[r]=t.value,n.__proto__=c):n[r]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(n,r,t.get),p&&i&&i.call(n,r,t.set),n};var c=r;function l(n,r,t){c(n,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y=/./;function p(n){return"boolean"==typeof n}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return v&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function w(n,r){return null!=n&&d.call(n,r)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var A=b()?function(n){var r,t,e;if(null==n)return s.call(n);t=n[m],r=w(n,m);try{n[m]=void 0}catch(r){return s.call(n)}return e=s.call(n),r?n[m]=t:delete n[m],e}:function(n){return s.call(n)},g=Boolean.prototype.toString;var h=b();function j(n){return"object"==typeof n&&(n instanceof Boolean||(h?function(n){try{return g.call(n),!0}catch(n){return!1}}(n):"[object Boolean]"===A(n)))}function _(n){return p(n)||j(n)}function U(){return new Function("return this;")()}l(_,"isPrimitive",p),l(_,"isObject",j);var S="object"==typeof self?self:null,E="object"==typeof window?window:null,I="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},O="object"==typeof I?I:null;var N=function(n){if(arguments.length){if(!p(n))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+n+"`.");if(n)return U()}if(S)return S;if(E)return E;if(O)return O;throw new Error("unexpected error. Unable to resolve global object.")}(),T=N.document&&N.document.childNodes,F=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var G=/^\s*function\s*([^(]*)/i;l(x,"REGEXP",G);var H=Array.isArray?Array.isArray:function(n){return"[object Array]"===A(n)};function P(n){return null!==n&&"object"==typeof n}function B(n){var r,t,e,o;if(("Object"===(t=A(n).slice(8,-1))||"Error"===t)&&n.constructor){if("string"==typeof(e=n.constructor).name)return e.name;if(r=G.exec(e.toString()))return r[1]}return P(o=n)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}l(P,"isObjectLikeArray",function(n){if("function"!=typeof n)throw new TypeError("invalid argument. Must provide a function. Value: `"+n+"`.");return function(r){var t,e;if(!H(r))return!1;if(0===(t=r.length))return!1;for(e=0;e<t;e++)if(!1===n(r[e]))return!1;return!0}}(P));var L="function"==typeof y||"object"==typeof F||"function"==typeof T?function(n){return B(n).toLowerCase()}:function(n){var r;return null===n?"null":"object"===(r=typeof n)?B(n).toLowerCase():r};function V(n){return"function"===L(n)}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&w(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null,C="function"==typeof Uint32Array;var W="function"==typeof Uint32Array?Uint32Array:null;var k,R="function"==typeof Uint32Array?Uint32Array:void 0;k=function(){var n,r,t;if("function"!=typeof W)return!1;try{r=new W(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,n=(C&&t instanceof Uint32Array||"[object Uint32Array]"===A(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?R:function(){throw new Error("not implemented")};var Y=k,X="function"==typeof Float64Array;var q="function"==typeof Float64Array?Float64Array:null;var z,D="function"==typeof Float64Array?Float64Array:void 0;z=function(){var n,r,t;if("function"!=typeof q)return!1;try{r=new q([1,3.14,-3.14,NaN]),t=r,n=(X&&t instanceof Float64Array||"[object Float64Array]"===A(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n}()?D:function(){throw new Error("not implemented")};var J=z,K="function"==typeof Uint8Array;var Q="function"==typeof Uint8Array?Uint8Array:null;var Z,$="function"==typeof Uint8Array?Uint8Array:void 0;Z=function(){var n,r,t;if("function"!=typeof Q)return!1;try{r=new Q(r=[1,3.14,-3.14,256,257]),t=r,n=(K&&t instanceof Uint8Array||"[object Uint8Array]"===A(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?$:function(){throw new Error("not implemented")};var nn=Z,rn="function"==typeof Uint16Array;var tn="function"==typeof Uint16Array?Uint16Array:null;var en,on="function"==typeof Uint16Array?Uint16Array:void 0;en=function(){var n,r,t;if("function"!=typeof tn)return!1;try{r=new tn(r=[1,3.14,-3.14,65536,65537]),t=r,n=(rn&&t instanceof Uint16Array||"[object Uint16Array]"===A(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?on:function(){throw new Error("not implemented")};var un,fn={uint16:en,uint8:nn};(un=new fn.uint16(1))[0]=4660;var an=52===new fn.uint8(un.buffer)[0],cn=!0===an?1:0,ln=new J(1),yn=new Y(ln.buffer);function pn(n){return ln[0]=n,yn[cn]}var vn=!0===an?1:0,bn=new J(1),sn=new Y(bn.buffer);function dn(n){return n!=n}var wn=1023,mn=Number.NEGATIVE_INFINITY;var An=.6931471803691238,gn=1.9082149292705877e-10,hn=1048575;function jn(n){var r,t,e,o,u,i,f,a,c,l,y,p;return 0===n?mn:dn(n)||n<0?NaN:(u=0,(t=pn(n))<1048576&&(u-=54,t=pn(n*=0x40000000000000)),t>=2146435072?n+n:(u+=(t>>20)-wn|0,u+=(a=(t&=hn)+614244&1048576|0)>>20|0,f=(n=function(n,r){return bn[0]=n,sn[vn]=r>>>0,bn[0]}(n,t|1072693248^a))-1,(hn&2+t)<3?0===f?0===u?0:u*An+u*gn:(i=f*f*(.5-.3333333333333333*f),0===u?f-i:u*An-(i-u*gn-f)):(a=t-398458|0,c=440401-t|0,o=(y=(p=(l=f/(2+f))*l)*p)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(y),e=p*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(y),i=e+o,(a|=c)>0?(r=.5*f*f,0===u?f-(r-l*(r+i)):u*An-(r-(l*(r+i)+u*gn)-f)):0===u?f-l*(f-i):u*An-(l*(f-i)-u*gn-f))))}var _n=Math.floor,Un=Math.ceil;function Sn(n){return n<0?Un(n):_n(n)}var En=Number.POSITIVE_INFINITY;function In(n){return n===En||n===mn}var On,Nn;!0===an?(On=1,Nn=0):(On=0,Nn=1);var Tn,Fn,xn={HIGH:On,LOW:Nn},Gn=new J(1),Hn=new Y(Gn.buffer),Pn=xn.HIGH,Bn=xn.LOW;function Ln(n,r,t,e){return Gn[0]=n,r[e]=Hn[Pn],r[e+t]=Hn[Bn],r}function Vn(n){return Ln(n,[0,0],1,0)}l(Vn,"assign",Ln),!0===an?(Tn=1,Fn=0):(Tn=0,Fn=1);var Mn={HIGH:Tn,LOW:Fn},Cn=new J(1),Wn=new Y(Cn.buffer),kn=Mn.HIGH,Rn=Mn.LOW;function Yn(n,r){return Wn[kn]=n,Wn[Rn]=r,Cn[0]}var Xn=[0,0];function qn(n,r,t,e){return dn(n)||In(n)?(r[e]=n,r[e+t]=0,r):0!==n&&function(n){return Math.abs(n)}(n)<22250738585072014e-324?(r[e]=4503599627370496*n,r[e+t]=-52,r):(r[e]=n,r[e+t]=0,r)}l((function(n){return qn(n,[0,0],1,0)}),"assign",qn);var zn=[0,0],Dn=[0,0];function Jn(n,r){var t,e,o,u,i,f;return 0===r||0===n||dn(n)||In(n)?n:(qn(n,zn,1,0),r+=zn[1],r+=function(n){var r=pn(n);return(r=(2146435072&r)>>>20)-wn|0}(n=zn[0]),r<-1074?(o=0,u=n,Vn.assign(o,Xn,1,0),i=Xn[0],i&=2147483647,f=pn(u),Yn(i|=f&=2147483648,Xn[1])):r>1023?n<0?mn:En:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,Vn.assign(n,Dn,1,0),t=Dn[0],t&=2148532223,e*Yn(t|=r+wn<<20,Dn[1])))}var Kn=1.4426950408889634,Qn=1/(1<<28);function Zn(n){var r;return dn(n)||n===En?n:n===mn?0:n>709.782712893384?En:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<Qn?1+n:function(n,r,t){var e,o,u,i;return Jn(1-(r-(e=n-r)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-n),t)}(n-.6931471803691238*(r=Sn(n<0?Kn*n-.5:Kn*n+.5)),1.9082149292705877e-10*r,r)}return function n(r){var t,e,o,u,i,f,a,c;if(i=typeof(u=r),null===u||"object"!==i&&"function"!==i||!V(u.next))throw new TypeError(function(){var n,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(n=1;n<r.length;n++)t+="&arg[]="+encodeURIComponent(r[n]);return t}("0ey49",r));return f=0,a=0,c=1,o=function(n){return 0===arguments.length?0===a?null:c:(a+=1,f+=jn(n),c=Zn(f/a))},l(t={},"next",(function(){var n;if(e)return{done:!0};if((n=r.next()).done)return e=!0,n;n="number"==typeof n.value?o(n.value):o(NaN);return{value:n,done:!1}})),l(t,"return",(function(n){if(e=!0,arguments.length)return{value:n,done:!0};return{done:!0}})),M&&V(r[M])&&l(t,M,(function(){return n(r[M]())})),t}}));
//# sourceMappingURL=browser.js.map
