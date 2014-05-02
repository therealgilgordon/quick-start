montageDefine("a80bbf6","ui/video-control.reel/video-control",{dependencies:["montage","montage/ui/component","montage/ui/base/abstract-button"],factory:function(t,e){var i=t("montage").Montage,n=t("montage/ui/component").Component,s=t("montage/ui/base/abstract-button").AbstractButton;e.VideoControl=i.create(n,{constructor:{value:function(){n.constructor.call(this),this.addPathChangeListener("videoController.status",this,"handleControllerStatusChange"),this.defineBinding("_controlTrack.value",{"<->":"videoController.position",source:this}),this.defineBinding("_controlTrack.max",{"<-":"videoController.duration",source:this}),this.defineBinding("_controlTrack.time",{"<-":"videoController.position",source:this})}},handlePlayAction:{value:function(){this.videoController.status===this.videoController.PLAYING?this.videoController.pause():this.videoController.status===this.videoController.PAUSED?this.videoController.unpause():this.videoController.play()}},handleFullScreenAction:{value:function(){this.video.toggleFullScreen()}},videoController:{value:null},handleControllerStatusChange:{value:function(t){this.videoController&&(t===this.videoController.PLAYING?this.classList.add("digit-VideoControl--playing"):this.classList.remove("digit-VideoControl--playing"))}},_controlTrack:{value:null}}),e.Button=i.create(s,{hasTemplate:{value:!1}})}});