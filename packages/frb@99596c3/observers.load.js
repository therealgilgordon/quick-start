montageDefine("99596c3","observers",{dependencies:["collections/shim","collections/listen/property-changes","collections/listen/array-changes","collections/sorted-array","collections/sorted-set","collections/map","collections/set","collections/heap","./scope","./operators","./parse","./compile-observer","./merge"],factory:function(e,t){function n(e){return function(t){return t(e)||Function.noop}}function i(e,t){return e(t.value)||Function.noop}function r(e,t){return e(t.parameters)||Function.noop}function a(e){return function(t,n){return t(n.document.getElementById(e))||Function.noop}}function s(e,t){return function(n,i){var r=i.components,a=r.getObjectByLabel||r.getComponentByLabel,s=a.call(r,e);return t.component=s,n(s)||Function.noop}}function o(e,t,n,i){function r(e,t,i){a(),a=n(e,t,i)||Function.noop}if(null==e)return n();var a=Function.noop;return xt.addOwnPropertyChangeListener(e,t,r,i.beforeChange),r(e[t],t,e),wt(function(){a(),xt.removeOwnPropertyChangeListener(e,t,r,i.beforeChange)})}function l(e,t){return function(n,i){return t(Lt(function(t){return"string"!=typeof t&&"number"!=typeof t?n():e(Lt(function(e){return null==e?n():e.observeProperty?e.observeProperty(t,n,i):Ot(e,t,n,i)}),i)}),i)}}function c(e,t,n,i){function r(e,i,r){s(t,i)&&(a(),a=n(e,t,r)||Function.noop)}var a=Function.noop,s=e.contentEquals||Object.equals;return r(e.get(t),t,e),e.addMapChangeListener(r,i.beforeChange),wt(function(){a(),e.removeMapChangeListener(r)})}function u(e,t){return function(n,i){return e(Lt(function(e){return e?t(Lt(function(t){return null==t?n():e.observeGet?e.observeGet(t,n,i):Pt(e,t,n,i)}),i):n()}),i)}}function h(e,t){return function(n,i){return n=yt(n),t(Lt(function(t){return e(Lt(function(e){return e?J(e,function(){return n((e.has||e.contains).call(e,t))},i):n()}),i)}),i)}}function d(e){return function(t,n){for(var i=Array(e.length),r=0;e.length>r;r++)i[r]=void 0;var a=e.map(function(e,t){return e(function(e){i.set(t,e)},n)}),s=t(i)||Function.noop;return wt(function(){s(),Ct(a)})}}function p(e){return function(t,n){var i={},r={};for(var a in e)(function(e,t){i[e]=t(function(t){r[e]=t},n)})(a,e[a]);var s=t(r)||Function.noop;return function(){s();for(var e in i)i[e]()}}}function f(){return d(Array.prototype.slice.call(arguments))}function g(e){return function(){var t=d(Array.prototype.slice.call(arguments)),n=rt(t);return function(t,i){return n(Lt(function(n){return n.every(Tt.defined)?t(e.apply(void 0,n)):t()}),i)}}}function m(e){var t=e.slice(0,1).toUpperCase()+e.slice(1),n="make"+t+"Observer",i="observe"+t;return function(){var t=arguments[0],r=Array.prototype.slice.call(arguments,1),a=r.map(function(e){return function(t,n){return e(Lt(t),n)}}),s=d(r),o=rt(s);return function(r,s){return t(Lt(function(t){return t?t[n]?t[n].apply(t,a)(r,s):t[i]?t[i](r,s):o(Lt(function(n){return n.every(Tt.defined)?"function"==typeof t[e]?r(t[e].apply(t,n)):r():r()}),s):r()}),s)}}}function v(e){return function(t,n){return e(Lt(function(e){return t(!e)}),n)}}function _(e,t){return function(n,i){return e(Lt(function(e){return e?t(n,i):n(e)}),i)}}function b(e,t){return function(n,i){return e(Lt(function(e){return e?n(e):t(n,i)}),i)}}function y(e,t,n){return function(i,r){return e(Lt(function(e){return null==e?i():e?t(i,r):n(i,r)}),r)}}function C(e){return function(t,n){return e(Lt(function(e){return t(null!=e)}),n)}}function L(e,t){return function(n,i){return e(Lt(function(e){return null==e?t(n,i):n(e)}),i)}}function w(e,t){return function(n,i){return e(Lt(function(e){function r(t){for(;e.length>t;t++)o[t].index=t}function a(e,n,a){o.swap(a,n.length,e.map(function(e,t){return{index:a+t}})),r(a+e.length);var c,u=[];Ct(l.swap(a,n.length,e.map(function(e,n){var r=o[a+n];return t(Lt(function(e){c?s.set(r.index,e):u[n]=e}),i.nest(e))}))),c=!0,s.swap(a,n.length,u)}if(!e)return n();var s=[],o=[],l=[],c=J(e,a,i),u=n(s,e)||Function.noop;return wt(function(){u(),Ct(l),c()})}),i)}}function x(e,t){var n=w(e,t);return function(e,t){return n(Lt(function(n,i){function r(e){for(;n.length>e;e++)l[e+1]=l[e]+!!n[e]}function a(e,t,n){var a=i.slice(n,n+e.length),o=t.map(Boolean).sum(),c=a.filter(function(t,n){return e[n]}),u=l[n],h=s.slice(u,u+o);(h.length!==c.length||h.some(function(e,t){return e!==c[t]}))&&s.swap(u,o,c),r(u)}if(!i)return e();var s=[],o=[],l=[0],c=J(n,a,t),u=e(s)||Function.noop;return wt(function(){u(),Ct(o),c()})}),t)}}function M(e,t){var n=z(t),i=w(e,n),r=function(e,t){return i(Lt(function(n){function i(e,t){a.addEach(e),a.deleteEach(t)}if(!n)return e();var r=[],a=Mt(r,E,S),s=J(n,i,t),o=e(r)||Function.noop;return function(){o(),s()}}),t)};return Dt(r,ut)}function E(e,t){return Object.equals(e[1],t[1])}function S(e,t){return Object.compare(e[1],t[1])}function z(e){return function(t,n){return e(Lt(function(e){return t([n.value,e])||Function.noop}),n)}}function T(e,t){var n=z(t),i=w(e,n),r=B(i,dt),a=w(r,$(dt));return function(e,t){function n(e,t){return e=o.get(e),t=o.get(t),Object.compare(e,t)}function i(e,t){return e=o.get(e),t=o.get(t),Object.equals(e,t)}function r(e,t){t.forEach(function(e){l["delete"](e[0]),o["delete"](e[0])}),e.forEach(function(e){o.set(e[0],e[1]),l.add(e[0])})}function s(e){return l.clear(),J(e,r,t)}var o=new St,l=new Et(null,i,n),c=e(l)||Function.noop,u=a(s,t);return function(){c(),u()}}}function O(e){return function(t,n){return e(Lt(function(e){function i(e,t,n){var i=r.length-n-t.length;r.swap(i,t.length,e.reversed())}if(!e)return t();var r=[],a=J(e,i,n),s=t(r);return wt(function(){s(),a()})}),n)}}function P(e){return function(t,n){return e(Lt(function(e){function i(t){for(var n=t;e.length>n;n++)l[n].index=n,o[n+1]=e[n]?o[n]+e[n].length:o[n]}function r(e,t,r){var c=o[r],u=o[r+t.length],h=u-c;a.swap(c,h,[]),l.swap(r,t.length,e.map(function(){return{index:null}})),i(r),Ct(s.swap(r,t.length,e.map(function(e,t){function s(e,t,n){i(c.index);var r=o[c.index]+n,s=o[c.index]+n+t.length,l=s-r;a.swap(r,l,e)}var c=l[r+t];return J(e,s,n)})))}if(!e)return t();var a=[],s=[],o=[0],l=[],c=J(e,r,n),u=t(a)||Function.noop;return wt(function(){u(),Ct(s),c()})}),n)}}function D(){return At(d(Array.prototype.slice.call(arguments)))}function k(e,t){var n=kt(e,t),i=l(n,Bt);return gt(i,Boolean)}function A(e,t){var n=gt(t,Tt.not),i=kt(e,n),r=l(i,Bt);return gt(r,Tt.not)}function B(e,t){var n=j(e,t);return Nt(n)}function j(e,t){var n=z(t),i=w(e,n);return function(e,t){return i(Lt(function(n,i){function r(e,t){t.forEach(function(e){var t=a.get(e[1]);1===t.length?a["delete"](e[1]):t["delete"](e[0])}),e.forEach(function(e){var t,n=!a.has(e[1]);t=n?i.constructClone():a.get(e[1]),t.add(e[0]),n&&a.set(e[1],t)})}if(!n)return e();var a=St(),s=J(n,r,t),o=e(a)||Function.noop;return function(){s(),o()}}),t)}}function I(e,t,n){function i(e,t){return Object.compare(e[1],t[1])*n}var r=z(t),a=w(e,r);return function(e,t){return a(Lt(function(n){function r(e,t){s.addEach(e),s.deleteEach(t)}function a(t,n){return 0===n?t?e(t[0]):e():void 0}if(!n)return e();var s=new zt(null,E,i),o=J(n,r,t),l=st(s,a,t);return function(){o(),l()}}),t)}}function R(e,t){return I(e,t,1)}function N(e,t){return I(e,t,-1)}function F(e){return I(e,i,1)}function q(e){return I(e,i,-1)}function V(e){return function(t){return function(n,i){return n=yt(n),t(Lt(function(t){if(!t)return n();var r=e(t,n);return J(t,function(e,t,i){return n(r(e,t,i))},i)}),i)}}}function W(e){return"number"==typeof e&&!isNaN(e)}function U(e,t,n){return n||(n=t,t=jt),function(i,r){return e(Lt(function(e){function a(t,n,i){if(h){var r=t.length-n.length;o>=i?r>0?(u.swap(0,0,e.slice(o,o+r)),u.splice(s,u.length-s)):(u.splice(0,-r),u.swap(u.length,0,e.slice(o+u.length,o+s))):o+s>i&&(u.swap(i-o,n.length,t),r>0?u.splice(s,u.length-s):u.swap(u.length,0,e.slice(o+u.length,o+s)))}}if(!e)return i();var s,o,l,c,u=[],h=!1,d=J(e,a,r),p=n(function(t){t=+t,isNaN(t)&&(t=void 0);var n="number"==typeof t&&"number"==typeof o,i=Math.max(0,t);"number"==typeof c&&(i=Math.min(i,e.length-c)),h!==n?(n?u.swap(0,0,e.slice(c,c+i)):u.clear(),h=n):h&&l!==i&&(l>i?u.splice(t,l-i):u.swap(l,0,e.slice(c+l,c+i))),s=t,l=i},r),f=t(function(t){t=+t,isNaN(t)&&(t=void 0);var n="number"==typeof s&&"number"==typeof t,i=Math.max(0,t);"number"==typeof s&&(i=Math.min(i,e.length));var r=Math.max(0,s);if("number"==typeof i&&(r=Math.min(r,e.length-i)),h!==n)n?u.swap(0,u.length,e.slice(i,i+r)):u.clear(),h=n;else if(h&&c!==i){var a=Math.abs(i-c);l>a&&c>i?(u.swap(0,0,e.slice(i,c)),u.splice(r,u.length-r)):l>a&&i>c?(u.swap(u.length,0,e.slice(c+l,i+r)),u.splice(0,u.length-r)):u.swap(0,u.length,e.slice(i,i+r))}o=t,c=i,l=r},r),g=i(u)||Function.noop;return function(){g(),p(),f(),d()}}),r)}}function H(e){return function(t,n){return e(Lt(function(e){function i(e){for(;a.length>e;e++)a[e].set(0,e)}function r(e,t,n){a.swap(n,t.length,e.map(function(e,t){return[n+t,e]})),i(n+e.length)}if(!e)return t();var a=[],s=J(e,r,n),o=t(a)||Function.noop;return function(){o(),s()}}),n)}}function Y(e){return function(t,n){var i=[],r=t(i)||Function.noop,a=e(function(e){if(e>>>=0,null==e)i.clear();else if(e>i.length){for(var t=[],n=i.length;e>n;n++)t.push(n);i.swap(i.length,0,t)}else i.length>e&&i.splice(e,i.length)},n);return function(){r(),a()}}}function G(e,t){return function(n,i){return t(function(t){var r=RegExp("^"+RegExp.escape(t));return e(function(e){return n(r.test(e))||Function.noop},i)},i)}}function X(e,t){return function(n,i){return t(function(t){var r=RegExp(RegExp.escape(t)+"$");return e(function(e){return n(r.test(e))||Function.noop},i)},i)}}function K(e,t){return function(n,i){return t(function(t){var r=RegExp(RegExp.escape(t));return e(function(e){return n(r.test(e))||Function.noop},i)},i)}}function Z(e,t){return t=t||It,function(n,i){return e(Lt(function(e){return e?t(Lt(function(t){function r(){a=n(e.join(t))||Function.noop}if("string"!=typeof t)return n()||Function.noop;var a=Function.noop,s=J(e,r,i);return function(){s(),a()}}),i):n()||Function.noop}),i)}}function J(e,t,n){function i(e,n,i){r(),r=t(e,n,i)||Function.noop}if(!e)return Function.noop;var r=Function.noop;if(!e.toArray)return Function.noop;if(!e.addRangeChangeListener)return Function.noop;i(e.toArray(),[],0);var a=e.addRangeChangeListener(i,null,n.beforeChange);return function(){r(),a()}}function $(e){return function(t,n){return e(Lt(function(e){return Rt(e,t,n)}),n)}}function Q(e,t,n){function i(n,i,o){if(r+=n.length-i.length,!(r>o+i.length&&r>o+n.length)){var l=0>r?null:e.get(r);a(),a=t(l)||Function.noop,s=l}}var r=-1,a=Function.noop,s=null,o=J(e,i,n);return function(){a(),o()}}function et(e){return function(t,n){return e(Lt(yt(function(e){return tt(e,t,n)})),n)}}function tt(e,t,n){function i(n,i){return r+=n.length-i.length,1===r?t(e.only()):t()}var r=0;return J(e,i,n)}function nt(e){return function(t,n){return e(Lt(yt(function(e){return it(e,t,n)})),n)}}function it(e,t,n){function i(n,i){return r+=n.length-i.length,r>0?t(e.one()):t()}var r=0;return J(e,i,n)}function rt(e){return function(t,n){return e(Lt(function(e){return e&&e.addRangeChangeListener?J(e,function(){return t(e)},n):t(e)}),n)}}function at(e){return function(t,n){return e(Lt(function(e){return e&&e.addMapChangeListener?st(e,function(){return t(e)},n):t(e)}),n)}}function st(e,t,n){function i(e,n,i){var a=r.get(n)||Function.noop;r["delete"](n),a(),a=t(e,n,i)||Function.noop,void 0===e?a():r.set(n,a)}if(e.addMapChangeListener){var r=new St;e.forEach(i);var a=e.addMapChangeListener(i,n.beforeChange);return wt(function(){r.forEach(function(e){e()}),a()})}}function ot(e){return function(t,n){return e(Lt(function(e){return e?lt(e,t,n):t()}),n)}}function lt(e,t,n){function i(e,t){var n,i;a.has(t)?null==e?(n=a.get(t),a["delete"](t),i=r.indexOf(n),r.splice(i,1)):(n=a.get(t),n.set(1,e)):(n=[t,e],a.set(t,n),r.push(n))}var r=[],a=St(),s=t(r)||Function.noop,o=st(e,i,n)||Function.noop;return wt(function(){s(),o()})}function ct(e){var t=Nt(e);return Dt(t,ut)}function ut(e,t){return t.value?e(t.value[0])||Function.noop:e()}function ht(e){var t=Nt(e);return Dt(t,dt)}function dt(e,t){return t.value?e(t.value[1])||Function.noop:e()}function pt(e){return function(t,n){var i=new St,r=t(i)||Function.noop,a=e(Lt(function(e){function t(e,t){void 0===e?i["delete"](t):i.set(t,e)}if(i.clear(),e&&"object"==typeof e){if(e.addRangeChangeListener)return Ft(Lt(function(e){function t(e,t){t.forEach(function(e){i["delete"](e[0])}),e.forEach(function(e){i.set(e[0],e[1])})}return J(e,t,n)}),n.nest(e));if(e.addMapChangeListener)return st(e,t,n);var r=Object.keys(e).map(function(t){return Ot(e,t,Lt(function(e){void 0===e?i["delete"](t):i.set(t,e)}),n)});return function(){Ct(r)}}}),n);return function(){r(),a()}}}function ft(e){return function(t,n){return e(t,n.parent||n.nest())}}function gt(e,t,n){return function(i,r){return i=yt(i),e(Lt(function(e){return i(t.call(n,e))}),r)}}function mt(e,t,n){return function(i,r){return i=yt(i),e(Lt(function(e){return e&&e.every(Tt.defined)?i(t.apply(n,e)):void 0}),r)}}function vt(t,n){var i=e("./parse"),r=e("./compile-observer");return function(e,a){return e=yt(e),n(Lt(function(n){if(null==n)return e();var s,o;try{s=i(n),o=r(s)}catch(l){return e()}return t(Lt(function(t){return o(e,a.nest(t))}),a)}),a)}}function _t(e,t){return function(n,i){return e(Lt(function(e){return t(Lt(function(e){return n(e)}),i.nest(e))}),i)}}function bt(e){return function(){var t=e.apply(this,arguments);return function(e,n){var i=[],r=t(Lt(function(e){function t(e,t,n){i.swap(n,t.length,e)}if(e){qt(i,e);var r=e.addRangeChangeListener(t,null,n.beforeChange);return wt(r)}i.clear()}),n),a=e(i)||Function.noop;return wt(function(){r(),a()})}}}function yt(e){var t;return function(n){if(n!==t){var i=e.apply(this,arguments);return t=n,i}}}function Ct(e){e.forEach(function(e){e&&e()})}function Lt(e){var t=Function.noop;return function(){return t(),t=e.apply(this,arguments)||Function.noop,function(){t()}}}function wt(e){var t;return function(){return t?Function.noop:(t=!0,e.apply(this,arguments))}}e("collections/shim");var xt=e("collections/listen/property-changes");e("collections/listen/array-changes");var Mt=e("collections/sorted-array"),Et=e("collections/sorted-set"),St=e("collections/map");e("collections/set");var zt=e("collections/heap");e("./scope");var Tt=e("./operators");t.makeLiteralObserver=n,t.observeValue=i,t.observeParameters=r,t.makeElementObserver=a,t.makeComponentObserver=s,t.observeProperty=o;var Ot=o;t.makePropertyObserver=l,t.observeKey=c,t.observeGet=c;var Pt=c;t.makeGetObserver=u,t.makeHasObserver=h,t.makeObserversObserver=d,t.makeRecordObserver=p,t.makeObjectObserver=p,t.makeTupleObserver=f,t.makeArrayObserver=f,t.makeOperatorObserverMaker=g,t.makeMethodObserverMaker=m,t.makeNotObserver=v,t.makeAndObserver=_,t.makeOrObserver=b,t.makeConditionalObserver=y,t.makeDefinedObserver=C,t.makeDefaultObserver=L;var Dt=t.makeMapBlockObserver=bt(w),kt=t.makeFilterBlockObserver=bt(x);t.makeSortedBlockObserver=M,t.makeSortedSetBlockObserver=T,t.makeReversedObserver=bt(O);var At=t.makeFlattenObserver=bt(P);t.makeConcatObserver=D,t.makeSomeBlockObserver=k,t.makeEveryBlockObserver=A,t.makeGroupBlockObserver=B,t.makeGroupMapBlockObserver=j,t.makeMaxBlockObserver=R,t.makeMinBlockObserver=N,t.makeMaxObserver=F,t.makeMinObserver=q;var Bt=n("length");t.makeSumObserver=V(function(){var e=0;return function(t,n){return t=t.filter(W),n=n.filter(W),e+=t.sum()-n.sum()}}),t.makeAverageObserver=V(function(){var e=0,t=0;return function(n,i){return n=n.filter(W),i=i.filter(W),e+=n.sum()-i.sum(),t+=n.length-i.length,e/t}}),t.makeViewObserver=bt(U);var jt=n(0);t.makeEnumerateObserver=bt(H),t.makeEnumerationObserver=t.makeEnumerateObserver,t.makeRangeObserver=Y,t.makeStartsWithObserver=G,t.makeEndsWithObserver=X,t.makeContainsObserver=K,t.makeJoinObserver=Z;var It=n("");t.observeRangeChange=J,t.makeLastObserver=$,t.observeLast=Q;var Rt=Q;t.makeOnlyObserver=et,t.observeOnly=tt,t.makeOneObserver=nt,t.observeOne=it,t.makeRangeContentObserver=rt,t.makeMapContentObserver=at,t.observeMapChange=st;var Nt=t.makeEntriesObserver=bt(ot);t.observeEntries=lt,t.makeKeysObserver=ct,t.observeEntryKey=ut,t.makeValuesObserver=ht,t.observeEntryValue=dt,t.makeToMapObserver=pt;var Ft=Dt(B(i,ut),$(dt));t.makeParentObserver=ft,t.makeConverterObserver=gt,t.makeComputerObserver=mt,t.makePathObserver=vt,t.makeExpressionObserver=vt,t.makeWithObserver=_t,t.makeToArrayObserver=bt(Function.identity),t.makeAsArrayObserver=t.makeToArrayObserver;var qt=e("./merge").merge;t.makeUniq=yt,t.cancelEach=Ct,t.autoCancelPrevious=Lt,t.once=wt}});