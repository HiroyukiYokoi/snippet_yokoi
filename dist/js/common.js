$(function(){function i(){var i,e=!1,t=$(".l-gNav");$(".javascriptPage.spMenu.iframe .l-gNav__btn a").bind("click",function(a){return e===!1&&(i=$(window).scrollTop(),$("body.javascriptPage.spMenu.iframe").addClass("fixed").css({top:-i}),t.addClass("is-open"),t.removeClass("is-close"),e=!0),!1}),$(".javascriptPage.spMenu.iframe .l-gNav__close a").bind("click",function(a){return setTimeout(function(){$("body.javascriptPage.spMenu.iframe").removeClass("fixed").css({top:0}),window.scrollTo(0,i),t.removeClass("is-open"),t.addClass("is-close"),e=!1},0),!1})}function e(){s.isSmall&&$(".l-pagetop a").hover(function(){navIconUrl="/img/svg/toppage.svg?"+(new Date).getTime(),$(this).animate({width:80,height:80},200),$(this).css("background-image","url("+navIconUrl+")")},function(){$(this).animate({width:60,height:60},200)})}$(".js-matchHeight1").matchHeight(),$(".js-matchHeight2").matchHeight(),$(".js-matchHeight3").matchHeight(),$(".js-matchHeight4").matchHeight(),$(".js-matchHeight5").matchHeight(),$(function(){$("#resizable01").resizable({handles:"e, s",alsoResize:"#exam02",start:function(i,e){$("iframe").each(function(){var i=this.offsetWidth,e=this.offsetHeight;$('<div class="ui-resizable-iframeFix" style="background: #fff;"></div>').css({width:i+"px",height:e+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css($(this).offset()).appendTo("body").data("resizable",{width:i,height:e})})},resize:function(i,e){var t=$("#resizable01").data("resizable"),a=(t.options,t.originalSize),s=t.originalPosition,o={height:t.size.height-a.height||0,width:t.size.width-a.width||0,top:t.position.top-s.top||0,left:t.position.left-s.left||0},n=function(i,e){$(i).each(function(){var i=$(this),a=$(this).data("resizable"),s={},n=e&&e.length?e:["width","height","top","left"];$.each(n||["width","height","top","left"],function(i,e){var t=(a[e]||0)+(o[e]||0)+5;t&&t>=0&&(s[e]=t||null)}),/relative/.test(i.css("position"))&&$.browser.opera&&(t._revertToRelativePosition=!0,i.css({position:"absolute",top:"auto",left:"auto"})),i.css(s)})};n("div.ui-resizable-iframeFix",["width","height"])},stop:function(i,e){$("div.ui-resizable-iframeFix").removeData("resizable").each(function(){this.parentNode.removeChild(this)})}})}),$(function(){$("#resizable02").resizable({handles:"e, s",alsoResize:"#exam03",start:function(i,e){$("iframe").each(function(){var i=this.offsetWidth,e=this.offsetHeight;$('<div class="ui-resizable-iframeFix" style="background: #fff;"></div>').css({width:i+"px",height:e+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css($(this).offset()).appendTo("body").data("resizable",{width:i,height:e})})},resize:function(i,e){var t=$("#resizable02").data("resizable"),a=(t.options,t.originalSize),s=t.originalPosition,o={height:t.size.height-a.height||0,width:t.size.width-a.width||0,top:t.position.top-s.top||0,left:t.position.left-s.left||0},n=function(i,e){$(i).each(function(){var i=$(this),a=$(this).data("resizable"),s={},n=e&&e.length?e:["width","height","top","left"];$.each(n||["width","height","top","left"],function(i,e){var t=(a[e]||0)+(o[e]||0)+5;t&&t>=0&&(s[e]=t||null)}),/relative/.test(i.css("position"))&&$.browser.opera&&(t._revertToRelativePosition=!0,i.css({position:"absolute",top:"auto",left:"auto"})),i.css(s)})};n("div.ui-resizable-iframeFix",["width","height"])},stop:function(i,e){$("div.ui-resizable-iframeFix").removeData("resizable").each(function(){this.parentNode.removeChild(this)})}})});var t=function(){this.initialize.apply(this,arguments)};t.prototype={initialize:function(i,e){var t=$(window),a=this;this.isSmall=t.width()<e,this.$element=i,this.breakpoint=e,t.bind("resize",function(i){t.width()>=a.breakpoint?a.isSmall&&(a.isSmall=!1,a.$element.triggerHandler("resizeManage")):a.isSmall||(a.isSmall=!0,a.$element.triggerHandler("resizeManage")),i.stopPropagation()})}};var a=$(".javascriptPage.spMenu.iframe .l-gNav"),s=new t(a,768);s.isSmall&&a.addClass("transition"),s.$element.bind("resizeManage",function(i){s.isSmall?setTimeout(function(){a.addClass("transition")},100):a.removeClass("transition"),i.stopPropagation()}),$(".l-pagetop a").click(function(){$("html, body").animate({scrollTop:0},400)}),$('a[href="#"]').bind("click",function(){return!1}),e(),i()});