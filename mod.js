// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,v=/^(\d+)e/,d=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,b,"e"),n=s.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,g,"$1."),n=s.call(n,v,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var A=String.fromCharCode,E=Array.isArray;function j(r){return r!=r}function _(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,o,a,c,f,l,s,p,y,g,v;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)c+=n;else{if(e=void 0!==n.precision,!(n=_(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,j(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!j(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(a)?String(n.arg):A(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,g=n.padRight,v=void 0,(v=y-p.length)<0?p:p=g?p+m(v):m(v)+p)),c+=n.arg||"",f+=1}return c}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,n,i;for(t=[],i=0,n=U.exec(r);n;)(e=r.slice(i,U.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),i=U.lastIndex,n=U.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function k(r){var e,t;if("string"!=typeof r)throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var F,T=Object.prototype,O=T.toString,V=T.__defineGetter__,N=T.__defineSetter__,C=T.__lookupGetter__,G=T.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=T,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&V&&V.call(r,e,t.get),a&&N&&N.call(r,e,t.set),r};var L=F;function $(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var P=/./;function H(r){return"boolean"==typeof r}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return R&&"symbol"==typeof Symbol.toStringTag}var B=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;function Z(r,e){return null!=r&&M.call(r,e)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var z=W()?function(r){var e,t,n;if(null==r)return B.call(r);t=r[Y],e=Z(r,Y);try{r[Y]=void 0}catch(e){return B.call(r)}return n=B.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return B.call(r)},K=Boolean,q=Boolean.prototype.toString;var D=W();function J(r){return"object"==typeof r&&(r instanceof K||(D?function(r){try{return q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function Q(r){return H(r)||J(r)}$(Q,"isPrimitive",H),$(Q,"isObject",J);var rr="object"==typeof self?self:null,er="object"==typeof window?window:null,tr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},nr="object"==typeof tr?tr:null,ir="object"==typeof globalThis?globalThis:null;var or=function(r){if(arguments.length){if(!H(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(ir)return ir;if(rr)return rr;if(er)return er;if(nr)return nr;throw new Error("unexpected error. Unable to resolve global object.")}(),ar=or.document&&or.document.childNodes,ur=Int8Array;function cr(){return/^\s*function\s*([^(]*)/i}var fr=/^\s*function\s*([^(]*)/i;$(cr,"REGEXP",fr);var lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};function sr(r){return null!==r&&"object"==typeof r}function pr(r){var e,t,n,i;if(("Object"===(t=z(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=fr.exec(n.toString()))return e[1]}return sr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}$(sr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!lr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(sr));var yr="function"==typeof P||"object"==typeof ur||"function"==typeof ar?function(r){return pr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?pr(r).toLowerCase():e};function gr(r){return"function"===yr(r)}var vr="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null,dr="function"==typeof Uint32Array;var br="function"==typeof Uint32Array?Uint32Array:null;var hr,wr="function"==typeof Uint32Array?Uint32Array:void 0;hr=function(){var r,e,t;if("function"!=typeof br)return!1;try{e=new br(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(dr&&t instanceof Uint32Array||"[object Uint32Array]"===z(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var mr=hr,Ar="function"==typeof Float64Array;var Er="function"==typeof Float64Array?Float64Array:null;var jr,_r="function"==typeof Float64Array?Float64Array:void 0;jr=function(){var r,e,t;if("function"!=typeof Er)return!1;try{e=new Er([1,3.14,-3.14,NaN]),t=e,r=(Ar&&t instanceof Float64Array||"[object Float64Array]"===z(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Sr=jr,Ur="function"==typeof Uint8Array;var xr="function"==typeof Uint8Array?Uint8Array:null;var Ir,kr="function"==typeof Uint8Array?Uint8Array:void 0;Ir=function(){var r,e,t;if("function"!=typeof xr)return!1;try{e=new xr(e=[1,3.14,-3.14,256,257]),t=e,r=(Ur&&t instanceof Uint8Array||"[object Uint8Array]"===z(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?kr:function(){throw new Error("not implemented")};var Fr=Ir,Tr="function"==typeof Uint16Array;var Or="function"==typeof Uint16Array?Uint16Array:null;var Vr,Nr="function"==typeof Uint16Array?Uint16Array:void 0;Vr=function(){var r,e,t;if("function"!=typeof Or)return!1;try{e=new Or(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Tr&&t instanceof Uint16Array||"[object Uint16Array]"===z(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var Cr,Gr={uint16:Vr,uint8:Fr};(Cr=new Gr.uint16(1))[0]=4660;var Lr=52===new Gr.uint8(Cr.buffer)[0],$r=!0===Lr?1:0,Pr=new Sr(1),Hr=new mr(Pr.buffer);function Rr(r){return Pr[0]=r,Hr[$r]}var Wr=!0===Lr?1:0,Br=new Sr(1),Mr=new mr(Br.buffer);function Zr(r){return r!=r}var Xr=1023,Yr=Number.NEGATIVE_INFINITY;var zr=.6931471803691238,Kr=1.9082149292705877e-10,qr=0x40000000000000,Dr=.3333333333333333,Jr=1048575,Qr=2146435072,re=1048576,ee=1072693248;function te(r){var e,t,n,i,o,a,u,c,f,l,s,p;return 0===r?Yr:Zr(r)||r<0?NaN:(o=0,(t=Rr(r))<re&&(o-=54,t=Rr(r*=qr)),t>=Qr?r+r:(o+=(t>>20)-Xr|0,o+=(c=(t&=Jr)+614244&1048576|0)>>20|0,u=(r=function(r,e){return Br[0]=r,Mr[Wr]=e>>>0,Br[0]}(r,t|c^ee))-1,(Jr&2+t)<3?0===u?0===o?0:o*zr+o*Kr:(a=u*u*(.5-Dr*u),0===o?u-a:o*zr-(a-o*Kr-u)):(c=t-398458|0,f=440401-t|0,i=(s=(p=(l=u/(2+u))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),n=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=n+i,(c|=f)>0?(e=.5*u*u,0===o?u-(e-l*(e+a)):o*zr-(e-(l*(e+a)+o*Kr)-u)):0===o?u-l*(u-a):o*zr-(l*(u-a)-o*Kr-u))))}var ne=Math.floor,ie=Math.ceil;function oe(r){return r<0?ie(r):ne(r)}var ae=Number.POSITIVE_INFINITY,ue=1023,ce=-1023,fe=-1074;function le(r){return r===ae||r===Yr}var se,pe,ye=2147483648,ge=2147483647;!0===Lr?(se=1,pe=0):(se=0,pe=1);var ve,de,be={HIGH:se,LOW:pe},he=new Sr(1),we=new mr(he.buffer),me=be.HIGH,Ae=be.LOW;function Ee(r,e,t,n){return he[0]=r,e[n]=we[me],e[n+t]=we[Ae],e}function je(r){return Ee(r,[0,0],1,0)}$(je,"assign",Ee),!0===Lr?(ve=1,de=0):(ve=0,de=1);var _e={HIGH:ve,LOW:de},Se=new Sr(1),Ue=new mr(Se.buffer),xe=_e.HIGH,Ie=_e.LOW;function ke(r,e){return Ue[xe]=r,Ue[Ie]=e,Se[0]}var Fe=[0,0];var Te=22250738585072014e-324;var Oe=4503599627370496;function Ve(r,e,t,n){return Zr(r)||le(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<Te?(e[n]=r*Oe,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}$((function(r){return Ve(r,[0,0],1,0)}),"assign",Ve);var Ne=2146435072;var Ce=2220446049250313e-31,Ge=2148532223,Le=[0,0],$e=[0,0];function Pe(r,e){var t,n,i,o,a,u;return 0===e||0===r||Zr(r)||le(r)?r:(Ve(r,Le,1,0),r=Le[0],e+=Le[1],e+=function(r){var e=Rr(r);return(e=(e&Ne)>>>20)-Xr|0}(r),e<fe?(i=0,o=r,je.assign(i,Fe,1,0),a=Fe[0],a&=ge,u=Rr(o),ke(a|=u&=ye,Fe[1])):e>ue?r<0?Yr:ae:(e<=ce?(e+=52,n=Ce):n=1,je.assign(r,$e,1,0),t=$e[0],t&=Ge,n*ke(t|=e+Xr<<20,$e[1])))}var He=.6931471803691238,Re=1.9082149292705877e-10,We=1.4426950408889634,Be=709.782712893384,Me=-745.1332191019411,Ze=1/(1<<28),Xe=-Ze;function Ye(r){var e;return Zr(r)||r===ae?r:r===Yr?0:r>Be?ae:r<Me?0:r>Xe&&r<Ze?1+r:function(r,e,t){var n,i,o,a;return Pe(1-(e-(n=r-e)*(o=n-(i=n*n)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-(e=oe(r<0?We*r-.5:We*r+.5))*He,e*Re,e)}function ze(r){var e,t,n,i,o,a,u,c;if(o=typeof(i=r),null===i||"object"!==o&&"function"!==o||!gr(i.next))throw new TypeError(function(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}("1K93w",r));return a=0,u=0,c=1,n=function(r){return 0===arguments.length?0===u?null:c:(u+=1,a+=te(r),c=Ye(a/u))},$(e={},"next",(function(){var e;if(t)return{done:!0};if(e=r.next(),e.done)return t=!0,e;e="number"==typeof e.value?n(e.value):n(NaN);return{value:e,done:!1}})),$(e,"return",(function(r){if(t=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),vr&&gr(r[vr])&&$(e,vr,(function(){return ze(r[vr]())})),e}export{ze as default};
//# sourceMappingURL=mod.js.map
