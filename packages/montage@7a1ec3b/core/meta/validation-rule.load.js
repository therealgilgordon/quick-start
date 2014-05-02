montageDefine("7a1ec3b","core/meta/validation-rule",{dependencies:["../core","../selector","./validation-semantics","../logger"],factory:function(t,e){"use strict";var n=t("../core").Montage,a=t("../selector").Selector,r=t("./validation-semantics").PropertyValidationSemantics;t("../logger").logger("blueprint"),e.PropertyValidationRule=n.specialize({constructor:{value:function(){this.superForValue("constructor")()}},initWithNameAndBlueprint:{value:function(t,e){return this._name=t,this._owner=e,this}},serializeSelf:{value:function(t){t.setProperty("name",this.name),t.setProperty("blueprint",this.owner,"reference"),t.setProperty("messageKey",this.messageKey),t.setAllProperties()}},deserializeSelf:{value:function(t){this._name=t.getProperty("name"),this._owner=t.getProperty("blueprint"),this._messageKey=t.getProperty("messageKey");for(var e=n.getSerializablePropertyNames(this),a=0,r=e.length;r>a;a++){var i=e[a];this[i]=t.getProperty(i)}}},_owner:{value:null},owner:{get:function(){return this._owner}},identifier:{get:function(){return[this.blueprint.identifier,"rule",this.name].join("_")}},_name:{value:""},name:{get:function(){return this._name}},_validationSelector:{value:null},validationSelector:{serializable:!1,get:function(){return this._validationSelector||(this._validationSelector=a["false"]),this._validationSelector},set:function(t){this._validationSelector=t}},_messageKey:{value:""},messageKey:{serializable:!1,get:function(){return this._messageKey&&0!==this._messageKey.length?this._messageKey:this._name},set:function(t){this._messageKey=t}},_propertyValidationEvaluator:{value:null},evaluateRule:{value:function(t){if(null===this._propertyValidationEvaluator){var e=(new r).initWithBlueprint(this.blueprint);this._propertyValidationEvaluator=e.compile(this.selector.syntax)}return this._propertyValidationEvaluator(t)}},blueprintModuleId:t("../core")._blueprintModuleIdDescriptor,blueprint:t("../core")._blueprintDescriptor})}});