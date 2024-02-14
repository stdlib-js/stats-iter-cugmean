// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).itercugmean=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function s(r){return"string"==typeof r}var u=Math.abs,p=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=f.call(n,b,"$1e"),n=f.call(n,v,"e"),n=f.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=f.call(n,g,"e+0$1"),n=f.call(n,d,"e-0$1"),r.alternate&&(n=f.call(n,h,"$1."),n=f.call(n,w,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):p.call(n)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function x(r,e,t){var n=e-r.length;return n<0?r:r=t?r+E(n):E(n)+r}var k=String.fromCharCode,S=isNaN,A=Array.isArray;function I(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function F(r){var e,t,n,a,o,u,p,l,f;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",p=1,l=0;l<r.length;l++)if(s(n=r[l]))u+=n;else{if(e=void 0!==n.precision,!(n=I(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(p=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[p],10),p+=1,S(n.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[p],10),p+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[p],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!S(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(o)?String(n.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=x(n.arg,n.width,n.padRight)),u+=n.arg||"",p+=1}return u}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function $(r){var e,t,n,i;for(t=[],i=0,n=T.exec(r);n;)(e=r.slice(i,T.lastIndex-n[0].length)).length&&t.push(e),t.push(V(n)),i=T.lastIndex,n=T.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function j(r){return"string"==typeof r}function _(r){var e,t;if(!j(r))throw new TypeError(_("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[$(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return F.apply(null,e)}var U,C=Object.prototype,R=C.toString,N=C.__defineGetter__,O=C.__defineSetter__,W=C.__lookupGetter__,Z=C.__lookupSetter__;U=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(_("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(_("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(W.call(r,e)||Z.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&N&&N.call(r,e,t.get),o&&O&&O.call(r,e,t.set),r};var L=U;function G(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var P=/./;function M(r){return"boolean"==typeof r}function X(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var H=X();function B(){return H&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function q(r,e){return null!=r&&Y.call(r,e)}var D="function"==typeof Symbol?Symbol:void 0,J="function"==typeof D?D.toStringTag:"";var K=B()?function(r){var e,t,n;if(null==r)return z.call(r);t=r[J],e=q(r,J);try{r[J]=void 0}catch(e){return z.call(r)}return n=z.call(r),e?r[J]=t:delete r[J],n}:function(r){return z.call(r)},Q=Boolean,rr=Boolean.prototype.toString;var er=B();function tr(r){return"object"==typeof r&&(r instanceof Q||(er?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===K(r)))}function nr(r){return M(r)||tr(r)}function ir(r){return"number"==typeof r}function ar(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function or(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+ar(i):ar(i)+r,n&&(r="-"+r)),r}G(nr,"isPrimitive",M),G(nr,"isObject",tr);var cr=String.prototype.toLowerCase,sr=String.prototype.toUpperCase;function ur(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!ir(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=or(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=or(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===sr.call(r.specifier)?sr.call(t):cr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function pr(r){return"string"==typeof r}var lr=Math.abs,fr=String.prototype.toLowerCase,gr=String.prototype.toUpperCase,dr=String.prototype.replace,hr=/e\+(\d)$/,wr=/e-(\d)$/,yr=/^(\d+)$/,vr=/^(\d+)e/,br=/\.0$/,mr=/\.0*e/,Er=/(\..*[^0])0*e/;function xr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!ir(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":lr(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=dr.call(t,Er,"$1e"),t=dr.call(t,mr,"e"),t=dr.call(t,br,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=dr.call(t,hr,"e+0$1"),t=dr.call(t,wr,"e-0$1"),r.alternate&&(t=dr.call(t,yr,"$1."),t=dr.call(t,vr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===gr.call(r.specifier)?gr.call(t):fr.call(t)}function kr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Sr(r,e,t){var n=e-r.length;return n<0?r:r=t?r+kr(n):kr(n)+r}var Ar=String.fromCharCode,Ir=isNaN,Fr=Array.isArray;function Tr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Vr(r){var e,t,n,i,a,o,c,s,u;if(!Fr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(pr(n=r[s]))o+=n;else{if(e=void 0!==n.precision,!(n=Tr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Ir(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Ir(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=ur(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Ir(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Ir(a)?String(n.arg):Ar(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=xr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=or(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Sr(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var $r=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function jr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function _r(r){var e,t,n,i;for(t=[],i=0,n=$r.exec(r);n;)(e=r.slice(i,$r.lastIndex-n[0].length)).length&&t.push(e),t.push(jr(n)),i=$r.lastIndex,n=$r.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Ur(r){return"string"==typeof r}function Cr(r){var e,t;if(!Ur(r))throw new TypeError(Cr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[_r(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Vr.apply(null,e)}function Rr(){return new Function("return this;")()}var Nr="object"==typeof self?self:null,Or="object"==typeof window?window:null,Wr="object"==typeof global?global:null,Zr="object"==typeof globalThis?globalThis:null;var Lr=function(r){if(arguments.length){if(!M(r))throw new TypeError(Cr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Rr()}if(Zr)return Zr;if(Nr)return Nr;if(Or)return Or;if(Wr)return Wr;throw new Error("unexpected error. Unable to resolve global object.")}(),Gr=Lr.document&&Lr.document.childNodes,Pr=Int8Array;var Mr=X();var Xr=Object.prototype.toString;var Hr="function"==typeof Symbol?Symbol:void 0,Br="function"==typeof Hr?Hr.toStringTag:"";var zr=Mr&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return Xr.call(r);t=r[Br],e=q(r,Br);try{r[Br]=void 0}catch(e){return Xr.call(r)}return n=Xr.call(r),e?r[Br]=t:delete r[Br],n}:function(r){return Xr.call(r)};function Yr(){return/^\s*function\s*([^(]*)/i}var qr=/^\s*function\s*([^(]*)/i;G(Yr,"REGEXP",qr);var Dr=Array.isArray?Array.isArray:function(r){return"[object Array]"===zr(r)};function Jr(r){return"number"==typeof r}function Kr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Qr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+Kr(i):Kr(i)+r,n&&(r="-"+r)),r}var re=String.prototype.toLowerCase,ee=String.prototype.toUpperCase;function te(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!Jr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Qr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Qr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===ee.call(r.specifier)?ee.call(t):re.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function ne(r){return"string"==typeof r}var ie=Math.abs,ae=String.prototype.toLowerCase,oe=String.prototype.toUpperCase,ce=String.prototype.replace,se=/e\+(\d)$/,ue=/e-(\d)$/,pe=/^(\d+)$/,le=/^(\d+)e/,fe=/\.0$/,ge=/\.0*e/,de=/(\..*[^0])0*e/;function he(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!Jr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":ie(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=ce.call(t,de,"$1e"),t=ce.call(t,ge,"e"),t=ce.call(t,fe,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=ce.call(t,se,"e+0$1"),t=ce.call(t,ue,"e-0$1"),r.alternate&&(t=ce.call(t,pe,"$1."),t=ce.call(t,le,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===oe.call(r.specifier)?oe.call(t):ae.call(t)}function we(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function ye(r,e,t){var n=e-r.length;return n<0?r:r=t?r+we(n):we(n)+r}var ve=String.fromCharCode,be=isNaN,me=Array.isArray;function Ee(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function xe(r){var e,t,n,i,a,o,c,s,u;if(!me(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(ne(n=r[s]))o+=n;else{if(e=void 0!==n.precision,!(n=Ee(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,be(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,be(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=te(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!be(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=be(a)?String(n.arg):ve(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=he(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Qr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=ye(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var ke=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Se(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Ae(r){var e,t,n,i;for(t=[],i=0,n=ke.exec(r);n;)(e=r.slice(i,ke.lastIndex-n[0].length)).length&&t.push(e),t.push(Se(n)),i=ke.lastIndex,n=ke.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Ie(r){return"string"==typeof r}function Fe(r){var e,t;if(!Ie(r))throw new TypeError(Fe("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Ae(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return xe.apply(null,e)}function Te(r){return null!==r&&"object"==typeof r}function Ve(r){var e,t,n,i;if(("Object"===(t=zr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=qr.exec(n.toString()))return e[1]}return Te(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}G(Te,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(Fe("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Dr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Te));var $e="function"==typeof P||"object"==typeof Pr||"function"==typeof Gr?function(r){return Ve(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Ve(r).toLowerCase():e};function je(r){return"function"===$e(r)}var _e="function"==typeof Symbol?Symbol:void 0;var Ue="function"==typeof _e&&"symbol"==typeof _e("foo")&&q(_e,"iterator")&&"symbol"==typeof _e.iterator?Symbol.iterator:null,Ce=X();var Re=Object.prototype.toString;var Ne="function"==typeof Symbol?Symbol:void 0,Oe="function"==typeof Ne?Ne.toStringTag:"";var We=Ce&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return Re.call(r);t=r[Oe],e=q(r,Oe);try{r[Oe]=void 0}catch(e){return Re.call(r)}return n=Re.call(r),e?r[Oe]=t:delete r[Oe],n}:function(r){return Re.call(r)},Ze="function"==typeof Uint32Array;var Le="function"==typeof Uint32Array?Uint32Array:null;var Ge,Pe="function"==typeof Uint32Array?Uint32Array:void 0;Ge=function(){var r,e,t;if("function"!=typeof Le)return!1;try{e=new Le(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Ze&&t instanceof Uint32Array||"[object Uint32Array]"===We(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Pe:function(){throw new Error("not implemented")};var Me=Ge,Xe="function"==typeof Float64Array;var He="function"==typeof Float64Array?Float64Array:null;var Be,ze="function"==typeof Float64Array?Float64Array:void 0;Be=function(){var r,e,t;if("function"!=typeof He)return!1;try{e=new He([1,3.14,-3.14,NaN]),t=e,r=(Xe&&t instanceof Float64Array||"[object Float64Array]"===We(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ze:function(){throw new Error("not implemented")};var Ye=Be,qe="function"==typeof Uint8Array;var De="function"==typeof Uint8Array?Uint8Array:null;var Je,Ke="function"==typeof Uint8Array?Uint8Array:void 0;Je=function(){var r,e,t;if("function"!=typeof De)return!1;try{e=new De(e=[1,3.14,-3.14,256,257]),t=e,r=(qe&&t instanceof Uint8Array||"[object Uint8Array]"===We(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ke:function(){throw new Error("not implemented")};var Qe=Je,rt="function"==typeof Uint16Array;var et="function"==typeof Uint16Array?Uint16Array:null;var tt,nt="function"==typeof Uint16Array?Uint16Array:void 0;tt=function(){var r,e,t;if("function"!=typeof et)return!1;try{e=new et(e=[1,3.14,-3.14,65536,65537]),t=e,r=(rt&&t instanceof Uint16Array||"[object Uint16Array]"===We(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?nt:function(){throw new Error("not implemented")};var it,at={uint16:tt,uint8:Qe};(it=new at.uint16(1))[0]=4660;var ot=52===new at.uint8(it.buffer)[0],ct=!0===ot?1:0,st=new Ye(1),ut=new Me(st.buffer);function pt(r){return st[0]=r,ut[ct]}var lt=!0===ot?1:0,ft=new Ye(1),gt=new Me(ft.buffer);function dt(r){return r!=r}var ht=1023,wt=Number.NEGATIVE_INFINITY;var yt=.6931471803691238,vt=1.9082149292705877e-10,bt=1048575;function mt(r){var e,t,n,i,a,o,c,s,u,p,l,f;return 0===r?wt:dt(r)||r<0?NaN:(a=0,(t=pt(r))<1048576&&(a-=54,t=pt(r*=0x40000000000000)),t>=2146435072?r+r:(a+=(t>>20)-ht|0,a+=(s=(t&=bt)+614244&1048576|0)>>20|0,c=(r=function(r,e){return ft[0]=r,gt[lt]=e>>>0,ft[0]}(r,t|1072693248^s))-1,(bt&2+t)<3?0===c?0===a?0:a*yt+a*vt:(o=c*c*(.5-.3333333333333333*c),0===a?c-o:a*yt-(o-a*vt-c)):(s=t-398458|0,u=440401-t|0,i=(l=(f=(p=c/(2+c))*p)*f)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),n=f*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=n+i,(s|=u)>0?(e=.5*c*c,0===a?c-(e-p*(e+o)):a*yt-(e-(p*(e+o)+a*vt)-c)):0===a?c-p*(c-o):a*yt-(p*(c-o)-a*vt-c))))}var Et=Math.floor,xt=Math.ceil;function kt(r){return r<0?xt(r):Et(r)}var St=Number.POSITIVE_INFINITY;function At(r){return r===St||r===wt}var It,Ft;!0===ot?(It=1,Ft=0):(It=0,Ft=1);var Tt,Vt,$t={HIGH:It,LOW:Ft},jt=new Ye(1),_t=new Me(jt.buffer),Ut=$t.HIGH,Ct=$t.LOW;function Rt(r,e,t,n){return jt[0]=r,e[n]=_t[Ut],e[n+t]=_t[Ct],e}function Nt(r){return Rt(r,[0,0],1,0)}G(Nt,"assign",Rt),!0===ot?(Tt=1,Vt=0):(Tt=0,Vt=1);var Ot={HIGH:Tt,LOW:Vt},Wt=new Ye(1),Zt=new Me(Wt.buffer),Lt=Ot.HIGH,Gt=Ot.LOW;function Pt(r,e){return Zt[Lt]=r,Zt[Gt]=e,Wt[0]}var Mt=[0,0];function Xt(r,e,t,n){return dt(r)||At(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}G((function(r){return Xt(r,[0,0],1,0)}),"assign",Xt);var Ht=[0,0],Bt=[0,0];function zt(r,e){var t,n,i,a,o,c;return 0===e||0===r||dt(r)||At(r)?r:(Xt(r,Ht,1,0),e+=Ht[1],e+=function(r){var e=pt(r);return(e=(2146435072&e)>>>20)-ht|0}(r=Ht[0]),e<-1074?(i=0,a=r,Nt.assign(i,Mt,1,0),o=Mt[0],o&=2147483647,c=pt(a),Pt(o|=c&=2147483648,Mt[1])):e>1023?r<0?wt:St:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,Nt.assign(r,Bt,1,0),t=Bt[0],t&=2148532223,n*Pt(t|=e+ht<<20,Bt[1])))}var Yt=1.4426950408889634,qt=1/(1<<28);function Dt(r){var e;return dt(r)||r===St?r:r===wt?0:r>709.782712893384?St:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<qt?1+r:function(r,e,t){var n,i,a,o;return zt(1-(e-(n=r-e)*(a=n-(i=n*n)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-.6931471803691238*(e=kt(r<0?Yt*r-.5:Yt*r+.5)),1.9082149292705877e-10*e,e)}function Jt(r){return"number"==typeof r}function Kt(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Qt(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+Kt(i):Kt(i)+r,n&&(r="-"+r)),r}var rn=String.prototype.toLowerCase,en=String.prototype.toUpperCase;function tn(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!Jt(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Qt(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Qt(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===en.call(r.specifier)?en.call(t):rn.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function nn(r){return"string"==typeof r}var an=Math.abs,on=String.prototype.toLowerCase,cn=String.prototype.toUpperCase,sn=String.prototype.replace,un=/e\+(\d)$/,pn=/e-(\d)$/,ln=/^(\d+)$/,fn=/^(\d+)e/,gn=/\.0$/,dn=/\.0*e/,hn=/(\..*[^0])0*e/;function wn(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!Jt(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":an(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=sn.call(t,hn,"$1e"),t=sn.call(t,dn,"e"),t=sn.call(t,gn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=sn.call(t,un,"e+0$1"),t=sn.call(t,pn,"e-0$1"),r.alternate&&(t=sn.call(t,ln,"$1."),t=sn.call(t,fn,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===cn.call(r.specifier)?cn.call(t):on.call(t)}function yn(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function vn(r,e,t){var n=e-r.length;return n<0?r:r=t?r+yn(n):yn(n)+r}var bn=String.fromCharCode,mn=isNaN,En=Array.isArray;function xn(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function kn(r){var e,t,n,i,a,o,c,s,u;if(!En(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(nn(n=r[s]))o+=n;else{if(e=void 0!==n.precision,!(n=xn(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,mn(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,mn(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=tn(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!mn(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=mn(a)?String(n.arg):bn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=wn(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Qt(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=vn(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var Sn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function An(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function In(r){var e,t,n,i;for(t=[],i=0,n=Sn.exec(r);n;)(e=r.slice(i,Sn.lastIndex-n[0].length)).length&&t.push(e),t.push(An(n)),i=Sn.lastIndex,n=Sn.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Fn(r){return"string"==typeof r}function Tn(r){var e,t,n;if(!Fn(r))throw new TypeError(Tn("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=In(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return kn.apply(null,t)}return function r(e){var t,n,i,a,o,c,s,u;if(o=typeof(a=e),null===a||"object"!==o&&"function"!==o||!je(a.next))throw new TypeError(Tn("invalid argument. Must provide an iterator. Value: `%s`.",e));return c=0,s=0,u=1,i=function(r){return 0===arguments.length?0===s?null:u:(s+=1,c+=mt(r),u=Dt(c/s))},G(t={},"next",(function(){var r;if(n)return{done:!0};if((r=e.next()).done)return n=!0,r;r="number"==typeof r.value?i(r.value):i(NaN);return{value:r,done:!1}})),G(t,"return",(function(r){if(n=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Ue&&je(e[Ue])&&G(t,Ue,(function(){return r(e[Ue]())})),t}}));
//# sourceMappingURL=index.js.map
