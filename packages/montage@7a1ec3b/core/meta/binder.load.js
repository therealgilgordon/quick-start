montageDefine("7a1ec3b","core/meta/binder",{dependencies:["../core","../promise","../serialization","./binder-manager","./blueprint","../deprecate","../logger"],factory:function(t,e){"use strict";var n=t("../core").Montage;t("../promise").Promise,t("../serialization").Deserializer;var a=t("./binder-manager").BinderManager,i=t("./blueprint"),r=t("../deprecate");t("../logger").logger("blueprint");var s=null,l=e.Binder=n.specialize({constructor:{value:function l(){return this.superForValue("constructor")(),this._name=null,this.binderModuleId=null,this.isDefault=!1,this._blueprintForPrototypeTable={},this}},initWithNameAndRequire:{value:function(t,e){if(!t)throw Error("name is required");if(!e)throw Error("require is required");return this._name=t,this._require=e,l.manager.addBinder(this),this}},serializeSelf:{value:function(t){t.setProperty("name",this.name),this.blueprints.length>0&&t.setProperty("blueprints",this.blueprints),t.setProperty("binderModuleId",this.binderInstanceModuleId)}},deserializeSelf:{value:function(t){this._name=t.getProperty("name");var e=t.getProperty("blueprints");e&&(this._blueprints=e),this.binderInstanceModuleId=t.getProperty("binderModuleId")}},_name:{value:null},name:{get:function(){return this._name}},_require:{value:null},require:{get:function(){return this._require}},_blueprintForPrototypeTable:{distinct:!0,value:{}},identifier:{get:function(){return["binder",this.name.toLowerCase()].join("_")}},binderInstanceModuleId:{serializable:!1,value:null},isDefault:{serializable:!1,value:!1},_blueprints:{distinct:!0,value:[]},blueprints:{get:function(){return this._blueprints}},addBlueprint:{value:function(t){if(null!==t){var e=this.blueprints.indexOf(t);0>e&&(null!==t.binder&&t.binder!==this&&t.binder.removeBlueprint(t),this.blueprints.push(t),t.binder=this)}return t}},removeBlueprint:{value:function(t){if(null!==t){var e=this.blueprints.indexOf(t);e>=0&&(this.blueprints.splice(e,1),t.binder=null)}return t}},addBlueprintNamed:{value:function(t){return this.addBlueprint((new i.Blueprint).initWithName(t))}},blueprintForPrototype:{value:r.deprecateMethod(void 0,function(t){return this.blueprintForName(t)},"blueprintForPrototype","blueprintForName")},blueprintForName:{value:function(t){for(var e=this.blueprints,n=e.length,a=0;n>a;a++)if(e[a].name===t)return e[a]}},_blueprintObjectProperty:{value:null},ObjectProperty:{get:function(){return this._blueprintObjectProperty||(this._blueprintObjectProperty=l.manager.defaultBlueprintObjectProperty),this._blueprintObjectProperty}},blueprintModuleId:t("../core")._blueprintModuleIdDescriptor,blueprint:t("../core")._blueprintDescriptor},{manager:{get:function(){return null===s&&(s=new a),s}}})}});