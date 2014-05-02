montageDefine("7a1ec3b","core/meta/module-blueprint",{dependencies:["../core","../promise","./blueprint","../serialization","../module-reference"],factory:function(t,e){function n(t,e){for(var n=t.resolve(e),a=t.getModuleDescriptor(n);a.redirect||a.mappingRedirect;)a.redirect?n=a.redirect:(t=a.mappingRequire,n=a.mappingRedirect),a=t.getModuleDescriptor(n);return a.require}var a=t("../core").Montage,r=t("../promise").Promise,i=t("./blueprint").Blueprint,s=t("../serialization").Deserializer,l=t("../module-reference").ModuleReference,o=Object.create(null),c=e.ModuleBlueprint=i.specialize({initWithModuleAndExportName:{value:function(t,e){var n=i.prototype.initWithName.call(this,e);return n.module=t,n.exportName=e,n}},initWithNameAndModuleId:{value:function(){throw Error("Use initWithModuleAndExportName")}},serializeSelf:{value:function(t){if(!this.module)throw Error("Cannot serialize blueprint without a module reference");if(!this.exportName)throw Error("Cannot serialize blueprint without an exportName");this.super(t),this._setPropertyWithDefaults(t,"module",this.module),this._setPropertyWithDefaults(t,"exportName",this.exportName)}},deserializeSelf:{value:function(t){if(this.super(t),this.module=t.getProperty("module"),this.exportName=t.getProperty("exportName"),!this.module)throw Error("Cannot deserialize blueprint without a module reference");if(!this.exportName)throw Error("Cannot deserialize blueprint without an exportName")}},module:{value:null},exportName:{value:null}},{getBlueprintWithModuleId:{value:function(t,e){if(-1===t.search(/\.meta$/))throw Error(t+" blueprint module id does not end in '.meta'");if(!e)throw Error("Require needed to get blueprint "+t);var a,r=e.location+"#"+t;return r in o?o[r]:o[r]=e.async(t).then(function(r){return a=n(e,t),(new s).init(JSON.stringify(r),a).deserializeObject()}).then(function(n){if(!c.prototype.isPrototypeOf(n))throw Error("Object in "+t+" is not a module-blueprint");return n.blueprintInstanceModule=(new l).initWithIdAndRequire(t,e),n._parentReference?n._parentReference.promise(a).then(function(t){return n._parent=t,n}):n})}},createDefaultBlueprintForObject:{value:function(t){var e=a.getInfoForObject(t).isInstance?Object.getPrototypeOf(t):t,n=a.getInfoForObject(e);return n.objectName&&n.moduleId?this.super(t).then(function(t){return t.module=(new l).initWithIdAndRequire(n.moduleId,n.require),t.exportName=n.objectName,t}):r.reject("Cannot create module-blueprint for an object that has no been loaded from a module")}}})}});