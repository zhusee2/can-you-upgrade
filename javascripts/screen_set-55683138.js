(function(){window.AppData.screens=[{type:"gaomei",title:"Gaomei Wetlands",subtitle:"\u53e3\u8aa4\uff0c\u9020\u5c31\u4e00\u5834\u7f8e\u597d\u7684\u8aa4\u6703\u3002",attr:"Photo by Yuchin Chou, CC-BY-NC-ND",link:"http://flic.kr/p/f7qSMu"},{type:"taroko",title:"Taroko",subtitle:"\u4ee4\u4eba\u8b9a\u5606\u4e0d\u5df2\u7684\u9a5a\u5947\u3002",attr:"Photo by chialinshih, CC-BY-NC",link:"http://flic.kr/p/9mKdan"},{type:"jiufen",title:"Jiufen",subtitle:"\u873f\u8712\u66f2\u6298\uff0c\u537b\u76ea\u6c23\u8ff4\u8178\u3002",attr:"Photo by mi..chael, CC-BY-NC",link:"http://flic.kr/p/dwGxwk"},{type:"thousand",title:"Thousand Island",subtitle:"\u65e5\u5e38\uff0c\u539f\u4f86\u9019\u9ebc\u7f8e\u597d\u3002",attr:"Photo by chialinshih, CC-BY-NC",link:"http://flic.kr/p/n2EdSY"},{type:"jade",title:"Jade Mountain",subtitle:"\u518d\u4e00\u6b21\uff0c\u767b\u4e0a\u6700\u9ad8\u3002",attr:"Photo by YU-WEN LIN, CC-BY-NC-ND",link:"http://flic.kr/p/2VzBwV"},{type:"snow",title:"Snow Mountain",subtitle:"\u767b\u5cf0\u9020\u6975\u7684\u985b\u5cf0\u4e4b\u4f5c\u3002",attr:"Photo by Devon Chang, CC-BY-NC-ND",link:"http://flic.kr/p/9DakA5"},{type:"shimenshan",title:"Shimenshan",subtitle:"\u711a\u818f\u7e7c\u6677\u7684\u5614\u5fc3\u4e4b\u4f5c\u3002",attr:"Photo by Alonso Sun, CC-BY-NC-ND",link:"http://flic.kr/p/dNm6P6"},{type:"hehuanshan",title:"Hehuanshan",subtitle:"\u8996\u91ce\uff0c\u5f9e\u4f86\u6c92\u6709\u9019\u9ebc\u958b\u95ca\u3002",attr:"Photo by gamemall104, CC-BY-SA",link:"http://flic.kr/p/posKmE"},{type:"turtle",title:"Turtle Island",subtitle:"\u5e36\u8457\u96fb\u8166\u5728\u6d77\u4e0a\u6602\u9996\u95ca\u6b65\u3002",attr:"Photo by Nomad Cavalier, Hark, CC-BY-NC",link:"http://flic.kr/p/8zZf1b"}]}).call(this),function(){var t,e,n,i;n="screen-next",t="screen-active",e="screen-leaving",i=function(){function i(t,e){this.node=t,this.settings=e,this.node.length&&this.settings&&(this.node.attr("class","hero-screen screen-next"),this.updateContent())}return i._setTemplate=function(t){return t.length?this._$template=t.clone():void 0},i._createFromTemplate=function(t){return null==t&&(t={}),new i(this._$template.clone(),t)},i.prototype.updateContent=function(){return this.node.addClass("type-"+this.settings.type),this.node.find(".hero-title").text("OS X "+this.settings.title),this.node.find(".hero-subtitle").text(this.settings.subtitle),this.node.find(".hero-attribution > a").text(this.settings.attr),this.node.find(".hero-attribution > a").attr("href",this.settings.link)},i.prototype.getType=function(){return this.settings.type},i.prototype.isType=function(t){return this.node.hasClass("type-"+t)},i.prototype.enter=function(){return this.node.removeClass(n).addClass(t)},i.prototype.leave=function(n){return this.node.removeClass(t).addClass(e),this.node.one($.support.transition.end,function(){return"function"==typeof n?n():void 0}),this.node.emulateTransitionEnd(600)},i.prototype.destroy=function(){return this.node.remove()},i}(),window.AppData.Screen=i}.call(this),function(){var t,e;t=window.AppData.Screen,e=function(){function e(){this.initRandomArray()}return e.prototype.initRandomArray=function(){var t;return t=window.AppData.screens.slice(0),window.knuthShuffle(t),this.screensArray=t},e.prototype.pop=function(){var e;return(e=this.screensArray.pop())?t._createFromTemplate(e):(this.initRandomArray(),this.pop())},e}(),window.AppData.ScreenSet=e}.call(this);