montageDefine("7a1ec3b","core/serialization/deserializer/unit-deserializer",{dependencies:["../../core","../../promise"],factory:function(t,e){var n=t("../../core").Montage;t("../../promise").Promise;var r=n.specialize({_context:{value:null},create:{value:function(){return new this}},initWithContext:{value:function(t){return this._context=t,this}},_templatePropertyRegExp:{value:/^([^:]+)(:.*)$/},isValidTemplatePropertyReference:{value:function(t){var e=this._templatePropertyRegExp.exec(t);if(e){var n=e[1];return this._context.hasObject(n)?!0:!1}return!1}},getObjectByLabel:{value:function(t){if(this._context.hasObject(t))return this._context.getObject(t);if(this.isValidTemplatePropertyReference(t))return null;throw Error("Object with label '"+t+"' was not found.")}}});e.UnitDeserializer=r}});