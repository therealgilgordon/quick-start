montageDefine("a80bbf6","ui/scroller.reel/scroll-bars.reel/scroll-bars",{dependencies:["montage/ui/component"],factory:function(t,e){var i=t("montage/ui/component").Component;e.ScrollBars=i.specialize({constructor:{value:function(){this.super()}},_verticalScroll:{value:0},_horizontalScroll:{value:0},_verticalLength:{value:0},_horizontalLength:{value:0},verticalScroll:{get:function(){return this._verticalScroll},set:function(t){this._verticalScroll=t,this.needsDraw=!0}},horizontalScroll:{get:function(){return this._horizontalScroll},set:function(t){this._horizontalScroll=t,this.needsDraw=!0}},verticalLength:{get:function(){return this._verticalLength},set:function(t){this._verticalLength=t,this.needsDraw=!0}},horizontalLength:{get:function(){return this._horizontalLength},set:function(t){this._horizontalLength=t,this.needsDraw=!0}},_opacity:{value:0},opacity:{get:function(){return this._opacity},set:function(t){this._opacity=t,this.needsDraw=!0}},_isDisplayUpdated:{value:!1},_displayVertical:{value:!1},displayVertical:{get:function(){return this._displayVertical},set:function(t){this._displayVertical!==t&&(this._displayVertical=t,this._isDisplayUpdated=!0,this.needsDraw=!0)}},_displayHorizontal:{value:!1},displayHorizontal:{get:function(){return this._displayHorizontal},set:function(t){this._displayHorizontal!==t&&(this._displayHorizontal=t,this._isDisplayUpdated=!0,this.needsDraw=!0)}},_top:{value:!1},_bottomClip:{value:!1},_bottom:{value:!1},_left:{value:!1},_rightClip:{value:!1},_right:{value:!1},_hasResizedHorizontal:{value:!1},_hasResizedVertical:{value:!1},willDraw:{value:function(){this._offsetWidth!==this._element.offsetWidth&&(this._offsetWidth=this._element.offsetWidth,this._hasResizedHorizontal=!0),this._offsetHeight!==this._element.offsetHeight&&(this._offsetHeight=this._element.offsetHeight,this._hasResizedVertical=!0)}},draw:{value:function(){var t,e,i,n;if(this._isDisplayUpdated){var s=this._displayVertical?"block":"none",o=this._displayHorizontal?"block":"none";this._top.style.display=this._bottomClip.style.display=s,this._left.style.display=this._rightClip.style.display=o,this._isDisplayUpdated=!1}if(this._hasResizedHorizontal&&this._displayHorizontal&&(this._rightClip.style.width=this._right.style.width=this._offsetWidth-4+"px",this._rightClip.style.clip="rect(-1px,"+(this._offsetWidth-3)+"px,6px,3px)",this._hasResizedHorizontal=!1),this._hasResizedVertical&&this._displayVertical&&(this._bottomClip.style.height=this._bottom.style.height=this._offsetHeight-4+"px",this._bottomClip.style.clip="rect(3px,6px,"+(this._offsetHeight-3)+"px,-1px)",this._hasResizedVertical=!1),this._opacity){if(this._displayHorizontal){i=this._offsetWidth-9-(this._displayVertical?6:0),t=Math.floor(i*this._horizontalLength),n=i-t,e=1-this._horizontalLength?Math.floor(n*this._horizontalScroll/(1-this._horizontalLength)):0,0>e&&(t+=e,0>t&&(t=0),e=0),e>n&&(t+=Math.floor(n-e),0>t&&(t=0),e=i-t);var a=t-this._offsetWidth+9+"px,0px",l=e+2+"px,0px";this._right.style.webkitTransform="translate3d("+a+",0)",this._right.style.MozTransform="translate("+a+")",this._right.style.transform="translate("+a+")",this._left.style.webkitTransform=this._rightClip.style.webkitTransform="translate3d("+l+",0)",this._left.style.MozTransform=this._rightClip.style.MozTransform="translate("+l+")",this._left.style.transform=this._rightClip.style.transform="translate("+l+")",this._left.style.webkitTransition=this._right.style.webkitTransition="none",this._left.style.MozTransition=this._right.style.MozTransition="none",this._left.style.transition=this._right.style.transition="none",this._left.style.opacity=this._right.style.opacity=this._opacity}if(this._displayVertical){i=this._offsetHeight-9-(this._displayHorizontal?6:0),t=Math.floor(i*this._verticalLength),n=i-t,e=1-this._verticalLength?Math.floor(n*this._verticalScroll/(1-this._verticalLength)):0,0>e&&(t+=e,0>t&&(t=0),e=0),e>n&&(t+=Math.floor(n-e),0>t&&(t=0),e=i-t);var r="0px,"+(t-this._offsetHeight+9)+"px",h="0px,"+(e+2)+"px";this._bottom.style.webkitTransform="translate3d("+r+",0)",this._bottom.style.MozTransform="translate("+r+")",this._bottom.style.transform="translate("+r+")",this._top.style.webkitTransform=this._bottomClip.style.webkitTransform="translate3d("+h+",0)",this._top.style.MozTransform=this._bottomClip.style.MozTransform="translate("+h+")",this._top.style.transform=this._bottomClip.style.transform="translate("+h+")",this._top.style.webkitTransition=this._bottom.style.webkitTransition="none",this._top.style.MozTransition=this._bottom.style.MozTransition="none",this._top.style.transition=this._bottom.style.transition="none",this._top.style.opacity=this._bottom.style.opacity=this._opacity}}else this._displayHorizontal&&(this._left.style.webkitTransition=this._right.style.webkitTransition="300ms opacity",this._left.style.opacity=this._right.style.opacity=0),this._displayVertical&&(this._top.style.webkitTransition=this._bottom.style.webkitTransition="300ms opacity",this._top.style.opacity=this._bottom.style.opacity=0)}}})}});