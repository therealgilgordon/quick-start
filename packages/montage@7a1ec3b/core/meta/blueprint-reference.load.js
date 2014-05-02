montageDefine("7a1ec3b","core/meta/blueprint-reference",{dependencies:["../core","../promise","./blueprint","./binder","./remote-reference","./binder-reference","../logger","./module-blueprint"],factory:function(t,e){"use strict";t("../core").Montage;var n=t("../promise").Promise,a=t("./blueprint"),i=t("./binder"),r=t("./remote-reference").RemoteReference,s=t("./binder-reference").BinderReference;t("../logger").logger("blueprint"),e.BlueprintReference=r.specialize({constructor:{value:function(){this.superForValue("constructor")()}},identifier:{get:function(){return this._reference||(this._reference=this.referenceFromValue(this._value)),["blueprint",(this._reference.blueprintName||"unnamed").toLowerCase(),"reference"].join("_")}},valueFromReference:{value:function(e){e.blueprintName;var r=e.blueprintModule;e.prototypeName,e.moduleId;var l=e.binderReference,o=n.resolve(i.Binder.manager.defaultBinder);return l&&(o=s.valueFromReference(l,t)),o.then(function(e){if(e){var n=t("./module-blueprint");return n.ModuleBlueprint.getBlueprintWithModuleId(r.id,r.require).then(function(t){if(t)return e.addBlueprint(t),t;throw Error("Error cannot find Blueprint "+r)})}return a.Blueprint.getBlueprintWithModuleId(r,t)})}},referenceFromValue:{value:function(t){var e={};return e.blueprintName=t.name,e.blueprintModule=t.blueprintInstanceModule,t.binder&&!t.binder.isDefault&&(e.binderReference=s.referenceFromValue(t.binder)),e}}})}});