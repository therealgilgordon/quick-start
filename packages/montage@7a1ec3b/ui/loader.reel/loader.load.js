montageDefine("7a1ec3b","ui/loader.reel/loader",{dependencies:["../../core/core","../component","../../core/logger","../../core/event/event-manager"],factory:function(e,t){var n=(e("../../core/core").Montage,e("../component").Component),i=e("../../core/logger").logger("loader"),r=e("../../core/event/event-manager").defaultEventManager,a="_montageStartBootstrappingTimeout",s="montage-app-loader",o="montage-app-bootstrapping",l="montage-app-loading",c="montage-app-loaded",u=0,h=1,d=2,p=3;t.Loader=n.specialize({constructor:{value:function(){this.super()}},mainModule:{value:"ui/main.reel"},mainName:{value:"Main"},includeFrameworkModules:{value:!1},minimumBootstrappingDuration:{value:1500},minimumLoadingDuration:{value:2e3},_initializedModules:{value:null},initializedModules:{dependencies:["includeFrameworkModules"],enumerable:!1,get:function(){return!this._initializedModules||this.includeFrameworkModules?this._initializedModules:this._initializedModules.slice(this._frameworkModuleCount-1)},set:function(e){this._initializedModules=e}},_requiredModules:{value:null},requiredModules:{dependencies:["includeFrameworkModules"],enumerable:!1,get:function(){return!this._requiredModules||this.includeFrameworkModules?this._requiredModules:this._requiredModules.slice(this._frameworkModuleCount-1)},set:function(e){this._requiredModules=e}},_currentStage:{value:u},currentStage:{get:function(){return this._currentStage},set:function(e){e!==this._currentStage&&(i.isDebug&&i.debug(this,"CURRENT STAGE: "+e),this._currentStage=e,this.needsDraw=!0)}},_readyToShowLoader:{value:!1},isLoadingMainComponent:{value:null},readyToShowLoader:{get:function(){return this._readyToShowLoader},set:function(e){e===this._readyToShowLoader&&(this._readyToShowLoader=e,this.needsDraw=!0)}},readyToShowMainComponent:{get:function(){return!!this._mainComponent}},_frameworkModuleCount:{enumerable:!1,value:null},hasTemplate:{enumerable:!1,value:!1},_mainComponent:{value:null},_mainComponentEnterDocument:{value:null},_showLoadingTimeout:{enumerable:!1,value:null},_showMainComponentTimeout:{enumerable:!1,value:null},templateDidLoad:{value:function(){i.isDebug&&i.debug(this,"templateDidLoad"),this.element||(this.element=document.documentElement,this.attachToParentComponent()),this.readyToShowLoader=!0;var e,t=document._montageTiming,n=this;t.bootstrappingStartTime?(i.isDebug&&i.debug(this,"had already started bootstrapping"),this.currentStage=h,t.bootstrappingEndTime=Date.now(),e=this.minimumBootstrappingDuration-(t.bootstrappingEndTime-t.bootstrappingStartTime),e>0?(i.isDebug&&i.debug(this,"still need to show bootstrapper for another "+e+"ms"),this._showLoadingTimeout=setTimeout(function(){n._revealLoader()},e)):this._revealLoader()):(i.isDebug&&i.debug(this,"bootstrapping has not started yet…"),this._loadMainComponent())}},_revealLoader:{value:function(){i.isDebug&&i.debug(this,"_revealLoader"),this.currentStage=d,document._montageTiming.loadingStartTime=Date.now();var e,t,n,r,a=document.getElementById(s);if(a)for(t=a.children,e=0;n=t[e];e++)(r=n.component)&&(r.attachToParentComponent(),r.needsDraw=!0)}},_revealMainComponent:{value:function(){i.isDebug&&i.debug(this,"_revealMainComponent"),this.currentStage=p}},_loadMainComponent:{value:function(){i.isDebug&&i.debug(this,"_loadMainComponent"),this.isLoadingMainComponent=!0;var e=this;window.require.async(this.mainModule).then(function(t){if(!(e.mainName in t))throw Error(e.mainName+" was not found in "+e.mainModule);return e._mainLoadedCallback(t)}).done()}},_mainLoadedCallback:{value:function(e){i.isDebug&&i.debug(this,"_mainLoadedCallback"),this._mainComponent=e[this.mainName].create(),this._mainComponentEnterDocument=this._mainComponent.enterDocument,this._mainComponent.enterDocument=this.mainComponentEnterDocument.bind(this),this._mainComponent.setElementWithParentComponent(document.createElement("div"),this),this._mainComponent.attachToParentComponent(),this._mainComponent._canDrawOutsideDocument=!0,this._mainComponent.needsDraw=!0}},mainComponentEnterDocument:{value:function(){var e,t=this;i.isDebug&&i.debug(this,"main preparing to draw"),this.isLoadingMainComponent=!1,this._contentToRemove=document.createRange(),e=this.element===document.documentElement?document.body:this.element,this._contentToRemove.selectNodeContents(e),this.childComponents=[this._mainComponent],e.appendChild(this._mainComponent.element);var n,s,o=document[a],l=document._montageTiming;l.bootstrappingStartTime?l.bootstrappingStartTime&&!l.loadingStartTime?(clearTimeout(this._showLoadingTimeout),this._showLoadingTimeout=null,l.bootstrappingEndTime=Date.now(),(n=this.minimumBootstrappingDuration-(l.bootstrappingEndTime-l.bootstrappingStartTime))>0?(i.isDebug&&i.debug(this,"show bootstrapper for another "+n+"ms"),this._showMainComponentTimeout=setTimeout(function(){i.isDebug&&i.debug(this,"ok, shown bootstrapper long enough"),t._revealMainComponent()},n)):setTimeout(function(){i.isDebug&&i.debug(this,"ok, showing bootstrapper now"),t._revealMainComponent()},0)):l.loadingStartTime&&(l.loadingEndTime=Date.now(),(s=this.minimumLoadingDuration-(l.loadingEndTime-l.loadingStartTime))>0?(i.isDebug&&i.debug(this,"show loader for another "+s+"ms"),this._showMainComponentTimeout=setTimeout(function(){i.isDebug&&i.debug(this,"ok, shown loader long enough"),t._revealMainComponent()},s)):this._revealMainComponent()):(i.isDebug&&i.debug(this,"bootstrapper never shown"),clearTimeout(o),o=null,this._revealMainComponent());var c=this._mainComponent;return r.unregisterEventHandlerForElement(this.element),c.attachToParentComponent(),p>this.currentStage&&(this.currentStage=p),c.enterDocument=this._mainComponentEnterDocument,c.enterDocument?c.enterDocument.apply(c,arguments):void 0}},removeContentOnLoad:{value:!0},_forceContentRemoval:{enumerable:!1,value:!1},_contentToRemove:{enumerable:!1,value:null},removeContent:{value:function(){this._forceContentRemoval=!0,this.needsDraw=!0}},draw:{value:function(){if(this.readyToShowMainComponent||this.isLoadingMainComponent||(i.isDebug&&i.debug(this,"draw; start loading main component"),this._loadMainComponent()),d===this.currentStage)this.element.classList.remove(o),this.element.classList.add(l);else if(p===this.currentStage&&this._contentToRemove){this.element.classList.remove(o),this.element.classList.remove(l),(this.removeContentOnLoad||this._forceContentRemoval)&&(this._contentToRemove.extractContents(),this._contentToRemove.detach(),this._contentToRemove=null),this.element.classList.add(c);var e=document.createEvent("CustomEvent");e.initCustomEvent("componentLoaded",!0,!0,this._mainComponent),this.dispatchEvent(e,!0,!0),this.detachFromParentComponent()}}}})}});