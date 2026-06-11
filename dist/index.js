"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=v(function(F,p){
var R=require('@stdlib/strided-base-reinterpret-complex64/dist'),_=require('@stdlib/complex-float32-real/dist'),g=require('@stdlib/complex-float32-imag/dist');function w(e,r,i,a,x){var n,q,o,u,t;if(e<=0)return i;for(q=_(r),o=g(r),n=R(i,0),u=x*2,a*=2,t=0;t<e;t++)n[u]=q+t,n[u+1]=o,u+=a;return i}p.exports=w
});var m=v(function(G,f){
var E=require('@stdlib/strided-base-stride2offset/dist'),O=s();function b(e,r,i,a){return O(e,r,i,a,E(e,a))}f.exports=b
});var j=v(function(H,d){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=m(),k=s();h(y,"ndarray",k);d.exports=y
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=j(),c,l=A(z(__dirname,"./native.js"));B(l)?c=C:c=l;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
