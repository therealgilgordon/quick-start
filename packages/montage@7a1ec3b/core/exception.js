var Montage=require("./core").Montage,logger=require("./logger").logger("exception"),Exception=exports.Exception=Montage.specialize({message:{value:null},target:{value:null},method:{value:null},constructor:{value:function(){this.super()}},initWithMessage:{enumerable:!0,value:function(t){return this.initWithMessageTargetAndMethod(t,null,null)}},initWithMessageAndTarget:{enumerable:!0,value:function(t,e){return this.initWithMessageTargetAndMethod(t,e,null)}},initWithMessageTargetAndMethod:{enumerable:!0,value:function(t,e,n){return this.message=t!==void 0?t:null,Object.defineProperty(this,"message",{writable:!1}),this.target=e!==void 0?e:null,Object.defineProperty(this,"target",{writable:!1}),this.method=n!==void 0?n:null,Object.defineProperty(this,"method",{writable:!1}),this}},toString:{enumerable:!1,value:function(){return"Exception: "+(null!==this.message?this.message+" ":null)+(null!==this.target?this.target+" ":null)+(null!==this.method?this.method+" ":null)}}});