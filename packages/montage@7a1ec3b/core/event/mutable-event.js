var Montage=require("../core").Montage;if("undefined"!=typeof window)var _eventConstructorsByType={},nullDescriptor={value:null},wrapProperty=function(t,e){var n="_"+e;Montage.defineProperty(t,n,{value:void 0}),Montage.defineProperty(t,e,{get:function(t,e){return function(){return this.hasOwnProperty(e)?this[e]:this._event?this._event[t]:void 0}}(e,n),set:function(t){return function(e){this[t]=e}}(n)})},MutableEvent=exports.MutableEvent=Montage.specialize({_initPrototypeWithEvent:{value:function(t){var e;for(e in t)this[e]||wrapProperty(this,e);return wrapProperty(this,"replayed"),this}},_initWithEvent:{value:function(t){return this._event=t,this}},preventDefault:{value:function(){this._event.preventDefault()}},getPreventDefault:{value:function(){return this._event.getPreventDefault?this._event.getPreventDefault():this._event.defaultPrevented}},stopImmediatePropagation:{value:function(){this._event.stopImmediatePropagation(),this.propagationStopped=!0,this.immediatePropagationStopped=!0}},propagationStopped:{value:!1},immediatePropagationStopped:{value:!1},mutable:{value:!0},target:{value:null},stopPropagation:{value:function(){this._event.stopPropagation(),this.propagationStopped=!0}},stop:{value:function(){this.preventDefault(),this.stopPropagation()}}},{fromEvent:{value:function(t){var e,n=t.type,a=_eventConstructorsByType[n];return a||(a=function(){},a.prototype=(new exports.MutableEvent)._initPrototypeWithEvent(t),_eventConstructorsByType[n]=a),e=new a,e._initWithEvent(t),e}},fromType:{value:function(t,e,n,a){var i=document.createEvent("CustomEvent");return i.initCustomEvent(t,e,n,a),this.fromEvent(i)}}});