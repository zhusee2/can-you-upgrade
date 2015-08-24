/* ========================================================================
 * Bootstrap: transition.js v3.3.5
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function n(){var t=document.createElement("bootstrap"),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var e in n)if(void 0!==t.style[e])return{end:n[e]};return!1}t.fn.emulateTransitionEnd=function(n){var e=!1,i=this;t(this).one("bsTransitionEnd",function(){e=!0});var o=function(){e||t(i).trigger(t.support.transition.end)};return setTimeout(o,n),this},t(function(){t.support.transition=n(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(n){return t(n.target).is(this)?n.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),function(t){"use strict";function n(t){for(var n,e,i=t.length;0!==i;)e=Math.floor(Math.random()*i),i-=1,n=t[i],t[i]=t[e],t[e]=n;return t}t.knuthShuffle=n}("undefined"!=typeof exports&&exports||"undefined"!=typeof window&&window||global),window.AppData={},function(){window.AppData.screens=[{type:"gaomei",title:"Gaomei Wetlands",subtitle:"\u53e3\u8aa4\uff0c\u9020\u5c31\u4e00\u5834\u7f8e\u597d\u7684\u8aa4\u6703\u3002",attr:"Photo by Yuchin Chou, CC-BY-NC-ND",link:"http://flic.kr/p/f7qSMu"},{type:"taroko",title:"Taroko",subtitle:"\u53e3\u8aa4\uff0c\u9020\u5c31\u4e00\u5834\u7f8e\u597d\u7684\u8aa4\u6703\u3002",attr:"Photo by chialinshih, CC-BY-NC",link:"http://flic.kr/p/9mKdan"},{type:"jiufen",title:"Jiufen",subtitle:"\u53e3\u8aa4\uff0c\u9020\u5c31\u4e00\u5834\u7f8e\u597d\u7684\u8aa4\u6703\u3002",attr:"Photo by mi..chael, CC-BY-NC",link:"http://flic.kr/p/dwGxwk"},{type:"thousand",title:"Thousand Island",subtitle:"\u53e3\u8aa4\uff0c\u9020\u5c31\u4e00\u5834\u7f8e\u597d\u7684\u8aa4\u6703\u3002",attr:"Photo by chialinshih, CC-BY-NC",link:"http://flic.kr/p/n2EdSY"},{type:"jade",title:"Jade Mountain",subtitle:"\u53e3\u8aa4\uff0c\u9020\u5c31\u4e00\u5834\u7f8e\u597d\u7684\u8aa4\u6703\u3002",attr:"Photo by YU-WEN LIN, CC-BY-NC-ND",link:"http://flic.kr/p/2VzBwV"},{type:"snow",title:"Snow Mountain",subtitle:"\u53e3\u8aa4\uff0c\u9020\u5c31\u4e00\u5834\u7f8e\u597d\u7684\u8aa4\u6703\u3002",attr:"Photo by Devon Chang, CC-BY-NC-ND",link:"http://flic.kr/p/9DakA5"},{type:"shimenshan",title:"Shimenshan",subtitle:"\u53e3\u8aa4\uff0c\u9020\u5c31\u4e00\u5834\u7f8e\u597d\u7684\u8aa4\u6703\u3002",attr:"Photo by Alonso Sun, CC-BY-NC-ND",link:"http://flic.kr/p/dNm6P6"},{type:"hehuanshan",title:"Hehuanshan",subtitle:"\u53e3\u8aa4\uff0c\u9020\u5c31\u4e00\u5834\u7f8e\u597d\u7684\u8aa4\u6703\u3002",attr:"Photo by gamemall104, CC-BY-SA",link:"http://flic.kr/p/posKmE"},{type:"turtle",title:"Turtle Island",subtitle:"\u53e3\u8aa4\uff0c\u9020\u5c31\u4e00\u5834\u7f8e\u597d\u7684\u8aa4\u6703\u3002",attr:"Photo by Nomad Cavalier, Hark, CC-BY-NC",link:"http://flic.kr/p/8zZf1b"}]}.call(this),function(){var t,n,e,i;e="screen-next",t="screen-active",n="screen-leaving",i=function(){function i(t,n){this.node=t,this.settings=n,this.node.length&&this.settings&&(this.node.attr("class","hero-screen screen-next"),this.updateContent())}return i._setTemplate=function(t){return t.length?this._$template=t.clone():void 0},i._createFromTemplate=function(t){return null==t&&(t={}),new i(this._$template.clone(),t)},i.prototype.updateContent=function(){return this.node.addClass("type-"+this.settings.type),this.node.find(".hero-title").text("OS X "+this.settings.title),this.node.find(".hero-subtitle").text(this.settings.subtitle),this.node.find(".hero-attribution > a").text(this.settings.attr),this.node.find(".hero-attribution > a").attr("href",this.settings.link)},i.prototype.getType=function(){return this.settings.type},i.prototype.isType=function(t){return this.node.hasClass("type-"+t)},i.prototype.enter=function(){return this.node.removeClass(e).addClass(t)},i.prototype.leave=function(e){return this.node.removeClass(t).addClass(n),this.node.one($.support.transition.end,function(){return"function"==typeof e?e():void 0}),this.node.emulateTransitionEnd(600)},i.prototype.destroy=function(){return this.node.remove()},i}(),window.AppData.Screen=i}.call(this),function(){var t,n;t=window.AppData.Screen,n=function(){function n(){this.initRandomArray()}return n.prototype.initRandomArray=function(){var t;return t=window.AppData.screens.slice(0),window.knuthShuffle(t),this.screensArray=t},n.prototype.pop=function(){var n;return(n=this.screensArray.pop())?t._createFromTemplate(n):(this.initRandomArray(),this.pop())},n}(),window.AppData.ScreenSet=n}.call(this),function(){var t,n,e,i;i=window.AppData,e=i.ScreenSet,t=i.Screen,n=function(){function n(n){var i;this.node=n,this.node.length&&(i=this.node.find(".screen-default"),t._setTemplate(i),i.addClass("screen-active"),this.screenSet=new e,this.activeScreen=new t(i),this.getNextScreen(),this.bindEvents())}return n.prototype.swapScreen=function(){return this.activeScreen.leave(function(t){return function(){return t.activeScreen.destroy(),t.nextScreen.enter(),t.activeScreen=t.nextScreen,t.getNextScreen()}}(this))},n.prototype.getNextScreen=function(){var t;return t=this.screenSet.pop(),this.activeScreen.isType(t.getType())&&(t=this.screenSet.pop()),this.nextScreen=t,this.node.append(t.node)},n.prototype.bindEvents=function(){return this.node.on("click",".random-button",function(t){return function(){return t.swapScreen()}}(this))},n}(),window.AppData.manager=new n($(".hero-section"))}.call(this);