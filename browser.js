// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,b=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,b,"$1e"),n=s.call(n,h,"e"),n=s.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,g,"$1."),n=s.call(n,d,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var A=String.fromCharCode,E=Array.isArray;function j(r){return r!=r}function _(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,o,a,c,f,l,s,p,y,g,d;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if("string"==typeof(n=r[l]))c+=n;else{if(e=void 0!==n.precision,!(n=_(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,j(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!j(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(a)?String(n.arg):A(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,g=n.padRight,d=void 0,(d=y-p.length)<0?p:p=g?p+m(d):m(d)+p)),c+=n.arg||"",f+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,n,i;for(t=[],i=0,n=S.exec(r);n;)(e=r.slice(i,S.lastIndex-n[0].length)).length&&t.push(e),t.push(U(n)),i=S.lastIndex,n=S.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function T(r){var e,t;if("string"!=typeof r)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return x.apply(null,e)}var k,F=Object.prototype,O=F.toString,V=F.__defineGetter__,N=F.__defineSetter__,C=F.__lookupGetter__,G=F.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&V&&V.call(r,e,t.get),a&&N&&N.call(r,e,t.set),r};var L=k;function $(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var P=/./;function H(r){return"boolean"==typeof r}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return R&&"symbol"==typeof Symbol.toStringTag}var B=Object.prototype.toString,M=Object.prototype.hasOwnProperty;function Z(r,e){return null!=r&&M.call(r,e)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"",z=W()?function(r){var e,t,n;if(null==r)return B.call(r);t=r[Y],e=Z(r,Y);try{r[Y]=void 0}catch(e){return B.call(r)}return n=B.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return B.call(r)},K=Boolean,q=Boolean.prototype.toString,D=W();function J(r){return"object"==typeof r&&(r instanceof K||(D?function(r){try{return q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function Q(r){return H(r)||J(r)}$(Q,"isPrimitive",H),$(Q,"isObject",J);var rr="object"==typeof self?self:null,er="object"==typeof window?window:null,tr="object"==typeof globalThis?globalThis:null,nr=function(r){if(arguments.length){if(!H(r))throw new TypeError(T("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(tr)return tr;if(rr)return rr;if(er)return er;throw new Error("unexpected error. Unable to resolve global object.")}(),ir=nr.document&&nr.document.childNodes,or=Int8Array;function ar(){return/^\s*function\s*([^(]*)/i}var ur=/^\s*function\s*([^(]*)/i;$(ar,"REGEXP",ur);var cr=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};function fr(r){return null!==r&&"object"==typeof r}function lr(r){var e,t,n,i;if(("Object"===(t=z(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ur.exec(n.toString()))return e[1]}return fr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}$(fr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!cr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(fr));var sr="function"==typeof P||"object"==typeof or||"function"==typeof ir?function(r){return lr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?lr(r).toLowerCase():e};function pr(r){return"function"===sr(r)}var yr,gr="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null,dr="function"==typeof Uint32Array,vr="function"==typeof Uint32Array?Uint32Array:null,hr="function"==typeof Uint32Array?Uint32Array:void 0;yr=function(){var r,e,t;if("function"!=typeof vr)return!1;try{e=new vr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(dr&&t instanceof Uint32Array||"[object Uint32Array]"===z(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var br,wr=yr,mr="function"==typeof Float64Array,Ar="function"==typeof Float64Array?Float64Array:null,Er="function"==typeof Float64Array?Float64Array:void 0;br=function(){var r,e,t;if("function"!=typeof Ar)return!1;try{e=new Ar([1,3.14,-3.14,NaN]),t=e,r=(mr&&t instanceof Float64Array||"[object Float64Array]"===z(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var jr,_r=br,xr="function"==typeof Uint8Array,Sr="function"==typeof Uint8Array?Uint8Array:null,Ur="function"==typeof Uint8Array?Uint8Array:void 0;jr=function(){var r,e,t;if("function"!=typeof Sr)return!1;try{e=new Sr(e=[1,3.14,-3.14,256,257]),t=e,r=(xr&&t instanceof Uint8Array||"[object Uint8Array]"===z(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ur:function(){throw new Error("not implemented")};var Ir,Tr=jr,kr="function"==typeof Uint16Array,Fr="function"==typeof Uint16Array?Uint16Array:null,Or="function"==typeof Uint16Array?Uint16Array:void 0;Ir=function(){var r,e,t;if("function"!=typeof Fr)return!1;try{e=new Fr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(kr&&t instanceof Uint16Array||"[object Uint16Array]"===z(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Or:function(){throw new Error("not implemented")};var Vr,Nr={uint16:Ir,uint8:Tr};(Vr=new Nr.uint16(1))[0]=4660;var Cr=52===new Nr.uint8(Vr.buffer)[0],Gr=!0===Cr?1:0,Lr=new _r(1),$r=new wr(Lr.buffer);function Pr(r){return Lr[0]=r,$r[Gr]}var Hr=!0===Cr?1:0,Rr=new _r(1),Wr=new wr(Rr.buffer);function Br(r){return r!=r}var Mr=1023,Zr=Number.NEGATIVE_INFINITY,Xr=.6931471803691238,Yr=1.9082149292705877e-10,zr=0x40000000000000,Kr=.3333333333333333,qr=1048575,Dr=2146435072,Jr=1048576,Qr=1072693248;function re(r){var e,t,n,i,o,a,u,c,f,l,s,p;return 0===r?Zr:Br(r)||r<0?NaN:(o=0,(t=Pr(r))<Jr&&(o-=54,t=Pr(r*=zr)),t>=Dr?r+r:(o+=(t>>20)-Mr|0,o+=(c=614244+(t&=qr)&1048576|0)>>20|0,u=(r=function(r,e){return Rr[0]=r,Wr[Hr]=e>>>0,Rr[0]}(r,t|c^Qr))-1,(qr&2+t)<3?0===u?0===o?0:o*Xr+o*Yr:(a=u*u*(.5-Kr*u),0===o?u-a:o*Xr-(a-o*Yr-u)):(c=t-398458|0,f=440401-t|0,i=(s=(p=(l=u/(2+u))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),n=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=n+i,(c|=f)>0?(e=.5*u*u,0===o?u-(e-l*(e+a)):o*Xr-(e-(l*(e+a)+o*Yr)-u)):0===o?u-l*(u-a):o*Xr-(l*(u-a)-o*Yr-u))))}var ee=Math.floor,te=Math.ceil;function ne(r){return r<0?te(r):ee(r)}var ie=Number.POSITIVE_INFINITY,oe=1023,ae=-1023,ue=-1074;function ce(r){return r===ie||r===Zr}var fe,le,se=2147483648,pe=2147483647;!0===Cr?(fe=1,le=0):(fe=0,le=1);var ye,ge,de={HIGH:fe,LOW:le},ve=new _r(1),he=new wr(ve.buffer),be=de.HIGH,we=de.LOW;function me(r,e,t,n){return ve[0]=r,e[n]=he[be],e[n+t]=he[we],e}function Ae(r){return me(r,[0,0],1,0)}$(Ae,"assign",me),!0===Cr?(ye=1,ge=0):(ye=0,ge=1);var Ee={HIGH:ye,LOW:ge},je=new _r(1),_e=new wr(je.buffer),xe=Ee.HIGH,Se=Ee.LOW;function Ue(r,e){return _e[xe]=r,_e[Se]=e,je[0]}var Ie=[0,0],Te=22250738585072014e-324,ke=4503599627370496;function Fe(r,e,t,n){return Br(r)||ce(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<Te?(e[n]=r*ke,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}$((function(r){return Fe(r,[0,0],1,0)}),"assign",Fe);var Oe=2146435072,Ve=2220446049250313e-31,Ne=2148532223,Ce=[0,0],Ge=[0,0];function Le(r,e){var t,n,i,o,a,u;return 0===e||0===r||Br(r)||ce(r)?r:(Fe(r,Ce,1,0),r=Ce[0],e+=Ce[1],e+=function(r){var e=Pr(r);return(e=(e&Oe)>>>20)-Mr|0}(r),e<ue?(i=0,o=r,Ae.assign(i,Ie,1,0),a=Ie[0],a&=pe,u=Pr(o),Ue(a|=u&=se,Ie[1])):e>oe?r<0?Zr:ie:(e<=ae?(e+=52,n=Ve):n=1,Ae.assign(r,Ge,1,0),t=Ge[0],t&=Ne,n*Ue(t|=e+Mr<<20,Ge[1])))}var $e=.6931471803691238,Pe=1.9082149292705877e-10,He=1.4426950408889634,Re=709.782712893384,We=-745.1332191019411,Be=1/(1<<28),Me=-Be;function Ze(r){var e;return Br(r)||r===ie?r:r===Zr?0:r>Re?ie:r<We?0:r>Me&&r<Be?1+r:function(r,e,t){var n,i,o,a;return Le(1-(e-(n=r-e)*(o=n-(i=n*n)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-(e=ne(r<0?He*r-.5:He*r+.5))*$e,e*Pe,e)}return function r(e){var t,n,i,o,a,u,c,f;if(a=typeof(o=e),null===o||"object"!==a&&"function"!==a||!pr(o.next))throw new TypeError(function(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}("1K93w",e));return u=0,c=0,f=1,i=function(r){return 0===arguments.length?0===c?null:f:(c+=1,u+=re(r),f=Ze(u/c))},$(t={},"next",(function(){var r;return n?{done:!0}:(r=e.next()).done?(n=!0,r):{value:r="number"==typeof r.value?i(r.value):i(NaN),done:!1}})),$(t,"return",(function(r){return n=!0,arguments.length?{value:r,done:!0}:{done:!0}})),gr&&pr(e[gr])&&$(t,gr,(function(){return r(e[gr]())})),t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).itercugmean=e();
//# sourceMappingURL=browser.js.map