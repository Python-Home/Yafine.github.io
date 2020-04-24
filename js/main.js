"use strict";$(function(){var i=void 0!==GLOBAL_CONFIG.Snackbar,s=$("#page-header"),o=$("#rightside"),e=$("body"),a=$("#blog_name").width(),n=$(".menus").width(),r=$("#sidebar").width();function t(e){var t;1===e?t=a+n>s.width()-r-20:2===e&&(t=a+n>s.width()-20),t?c():(s.find(".toggle-menu").removeClass("is-visible-inline"),s.find(".menus_items").removeClass("is_invisible"),s.find("#search_button span").removeClass("is_invisible"))}function c(){s.find(".toggle-menu").addClass("is-visible-inline"),s.find(".menus_items").addClass("is_invisible"),s.find("#search_button span").addClass("is_invisible")}function d(){window.innerWidth<768?c():t(2)}d(),$("#page-header").css({opacity:"1",animation:"headerNoOpacity 1s"}),$(window).on("resize",function(){$("#sidebar").hasClass("tocOpenPc")&&s.hasClass("fixed")?t(1):d()}),GLOBAL_CONFIG_SITE.isHome&&(/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)||!isDesktop()||$("#nav").css("background-attachment","fixed"));function l(){$("#sidebar").removeClass("tocOpenPc"),$(".menus").animate({paddingRight:0},400),$("#body-wrap").animate({paddingLeft:0},400),$("#sidebar").animate({left:"-300px"},400),$("#toggle-sidebar").css({transform:"rotateZ(0deg)",color:"#1F2D3D",opacity:"1"}),setTimeout(function(){t(2)},400)}function h(){$("#sidebar").addClass("tocOpenPc"),$(".menus").animate({paddingRight:300},400),$("#body-wrap").animate({paddingLeft:300},400),$("#sidebar").animate({left:0},400),$("#toggle-sidebar").css({transform:"rotateZ(180deg)",color:"#99a9bf",opacity:"1"});var e=window.setInterval(function(){s.hasClass("fixed")?t(1):t(2)},100);setTimeout(function(){clearInterval(e)},400)}GLOBAL_CONFIG_SITE.isPost&&1024<window.innerWidth&&$("#toggle-sidebar").hasClass("on")&&setTimeout(function(){h()},400),$("#toggle-sidebar").on("click",function(){var e=$(this).hasClass("on");e?$(this).removeClass("on"):$(this).addClass("on"),(e?l:h)()});var m=$(".toggle-menu"),u=$("#mobile-sidebar-menus"),f=$("#mobile-toc-button"),p=$("#menu_mask");function g(e){if(sidebarPaddingR(),$("body").css("overflow","hidden"),p.fadeIn(),"menu"===e){m.removeClass("close").addClass("open"),u.css("transform","translate3d(-100%,0,0)");for(var t=u.children(),i=0;i<=t.length;i++){var a=i/5+.2;t.eq(i).css("animation","sidebarItem "+a+"s")}}"toc"===e&&(f.removeClass("close").addClass("open"),$("#sidebar").addClass("tocOpenMobile"),$("#sidebar").css({transform:"translate3d(-100%,0,0)",left:""}))}function v(e){$("body").css({overflow:"","padding-right":""}),p.fadeOut(),"menu"===e&&(m.removeClass("open").addClass("close"),u.css("transform",""),$("#mobile-sidebar-menus > div,#mobile-sidebar-menus > hr").css("animation","")),"toc"===e&&(f.removeClass("open").addClass("close"),$("#sidebar").removeClass("tocOpenMobile"),$("#sidebar").css({transform:""}))}m.on("click",function(){g("menu")}),f.on("click",function(){g("toc")}),p.on("click touchstart",function(e){m.hasClass("open")&&v("menu"),f.hasClass("open")&&v("toc")}),$(window).on("resize",function(e){m.is(":visible")||m.hasClass("open")&&v("menu")}),window.matchMedia("(max-width: 1024px)").addListener(function(e){e.matches?$("#sidebar").hasClass("tocOpenPc")&&l():($("#toggle-sidebar").hasClass("on")&&h(),f.hasClass("open")&&v("toc"))}),$("#scroll_down").on("click",function(){scrollTo("#content-inner")}),$("#bookmark-it").on("click",function(){if(window.sidebar&&window.sidebar.addPanel)window.sidebar.addPanel(document.title,window.location.href,"");else if(window.external&&"AddFavorite"in window.external)window.external.AddFavorite(location.href,document.title);else{if(window.opera&&window.print)return this.title=document.title,!0;if(i){var e=GLOBAL_CONFIG.Snackbar.bookmark.message_prev+" "+(-1!==navigator.userAgent.toLowerCase().indexOf("mac")?"Command/Cmd":"CTRL")+"+ D "+GLOBAL_CONFIG.Snackbar.bookmark.message_next+".";snackbarShow(e)}else alert(GLOBAL_CONFIG.bookmark.message_prev+" "+(-1!==navigator.userAgent.toLowerCase().indexOf("mac")?"Command/Cmd":"CTRL")+"+ D "+GLOBAL_CONFIG.bookmark.message_next+".")}});var b=GLOBAL_CONFIG.highlightCopy,C=GLOBAL_CONFIG.highlightLang,w=GLOBAL_CONFIG.highlightShrink,_=$("figure.highlight");(b||C||"none"!==w)&&_.wrap('<div class="code-area-wrap"></div>').before('<div class="highlight-tools"></div>');var y,O=$(".highlight-tools");"true"===w?O.append('<i class="fa fa-angle-down code-expand code-closed" aria-hidden="true"></i>'):"false"===w&&O.append('<i class="fa fa-angle-down code-expand" aria-hidden="true"></i>'),$(document).on("click",".highlight-tools >.code-expand",function(){var e=$(this).parent().next();$(this).hasClass("code-closed")?(e.css("display","block"),$(this).removeClass("code-closed")):(e.css("display","none"),$(this).addClass("code-closed"))}),C&&_.each(function(){"plain"===(y=$(this).attr("class").split(" ")[1])&&(y="Code"),$(this).prev().append('<div class="code-lang">'+y+"</div>")});if(b){O.append('<div class="copy-notice"></div><i class="fa fa-clipboard" aria-hidden="true"></i>');$(document).on("click",".highlight-tools>.fa-clipboard",function(){var e=window.getSelection(),t=document.createRange();t.selectNodeContents($(this).parent().next().find(".code pre")[0]),e.removeAllRanges(),e.addRange(t);e.toString();!function(t){if(document.queryCommandSupported&&document.queryCommandSupported("copy"))try{document.execCommand("copy"),i?snackbarShow(GLOBAL_CONFIG.copy.success):$(t).prev(".copy-notice").text(GLOBAL_CONFIG.copy.success).animate({opacity:1,right:30},450,function(){setTimeout(function(){$(t).prev(".copy-notice").animate({opacity:0,right:0},650)},400)})}catch(e){if(!i)return $(t).prev(".copy-notice").text(GLOBAL_CONFIG.copy.error).animate({opacity:1,right:30},650,function(){setTimeout(function(){$(t).prev(".copy-notice").animate({opacity:0,right:0},650)},400)});snackbarShow(GLOBAL_CONFIG.copy.success)}else i?snackbarShow(GLOBAL_CONFIG.copy.noSupport):$(t).prev(".copy-notice").text(GLOBAL_CONFIG.copy.noSupport)}(this),e.removeAllRanges()})}var L=$(".justified-gallery");if(L.length){var k=L.find("img");k.unwrap(),k.length&&k.each(function(e,t){$(t).attr("data-src")&&$(t).attr("src",$(t).attr("data-src")),$(t).wrap("<div></div>")}),$("head").append('<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/justifiedGallery/dist/css/justifiedGallery.min.css">'),loadScript("https://cdn.jsdelivr.net/npm/justifiedGallery/dist/js/jquery.justifiedGallery.min.js",function(){L.not($(".hide-content .justified-gallery")).justifiedGallery({rowHeight:220,margins:4})})}var G=GLOBAL_CONFIG.medium_zoom;if(GLOBAL_CONFIG.fancybox)$("#article-container img:not(.gallery-group-img)").not($("a>img")).each(function(e,t){var i=$(t).attr("data-src")?$(t).attr("data-src"):$(t).attr("src");$(t).wrap('<a href="'+i+'" data-fancybox="group" data-caption="'+$(t).attr("alt")+'" class="fancybox"></a>')}),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"]});else if(G){var A=mediumZoom(document.querySelectorAll("#article-container :not(a)>img"));A.on("open",function(e){var t="dark"===$(document.documentElement).attr("data-theme")?"#121212":"#fff";A.update({background:t})})}var x=0;if($(window).scroll(function(e){var t,i,a=$(this).scrollTop(),n=(i=x<(t=a),x=t,i);56<a?(n?s.hasClass("visible")&&s.removeClass("visible"):s.hasClass("visible")||s.addClass("visible"),s.addClass("fixed"),"0"===o.css("opacity")&&o.css({opacity:"1",transform:"translateX(-38px)"})):(0===a&&s.removeClass("fixed").removeClass("visible"),o.css({opacity:"",transform:""}))}),$("#go-up").on("click",function(){scrollTo("body")}),GLOBAL_CONFIG_SITE.isPost&&GLOBAL_CONFIG_SITE.isSidebar){$(".toc-child").hide(),$(window).scroll(throttle(function(e){var t=$(this).scrollTop();I(t),F(t),N(t)},100)),$(".toc-link").on("click",function(e){window.innerWidth<=1024?v("toc"):(e.preventDefault(),scrollTo($(this).attr("href")))});var I=function(e){var t=$("#article-container").height(),i=$(window).height(),a=e/(i<t?t-i:$(document).height()-i),n=Math.round(100*a),s=100<n?100:n<=0?0:n;$(".progress-num").text(s),$(".sidebar-toc__progress-bar").animate({width:s+"%"},100)},F=function(t){if(0===$(".toc-link").length)return!1;var e=$("#article-container").find("h1,h2,h3,h4,h5,h6"),i="";e.each(function(){var e=$(this);t>e.offset().top-25&&(i="#"+$(this).attr("id"))}),""===i&&($(".toc-link").removeClass("active"),$(".toc-child").hide());var a,n,s=$(".toc-link.active");if(i&&s.attr("href")!==i){n=i,window.history.replaceState&&n!==window.location.hash&&window.history.replaceState(void 0,void 0,n),$(".toc-link").removeClass("active");var o=$('.toc-link[href="'+i+'"]');o.addClass("active");var r=o.parents(".toc-child"),c=0<r.length?r.last():o;(a=c.closest(".toc-item").find(".toc-child")).is(":visible")||a.fadeIn(400),c.closest(".toc-item").siblings(".toc-item").find(".toc-child").hide()}},N=function(e){if($(".toc-link").hasClass("active")){var t=$(".active").offset().top,i=$("#sidebar .sidebar-toc__content").scrollTop();t>e+$(window).height()-100&&$("#sidebar .sidebar-toc__content").scrollTop(i+100),t<e+100&&$("#sidebar .sidebar-toc__content").scrollTop(i-100)}}}$("#readmode").click(function(){$("body").toggleClass("read-mode")}),$("#font_plus").click(function(){e.css("font-size",parseFloat(e.css("font-size"))+1)}),$("#font_minus").click(function(){e.css("font-size",parseFloat(e.css("font-size"))-1)}),$("#mobile-sidebar-menus .menus-expand").on("click",function(){$(this).hasClass("menus-closed")?($(this).parents(".menus_item").find(".menus_item_child").slideDown(),$(this).removeClass("menus-closed")):($(this).parents(".menus_item").find(".menus_item_child").slideUp(),$(this).addClass("menus-closed"))}),$(window).on("touchmove",function(e){var t=$("#page-header .menus_item_child");t.is(":visible")&&t.css("display","none")}),$("#rightside_config").on("click",function(){$("#rightside-config-hide").hasClass("rightside-in")?$("#rightside-config-hide").removeClass("rightside-in").addClass("rightside-out"):$("#rightside-config-hide").removeClass("rightside-out").addClass("rightside-in")});var S=GLOBAL_CONFIG.copyright;void 0!==S&&(document.body.oncopy=function(e){e.preventDefault();var t=void 0,i=window.getSelection(0).toString();return t=45<i.length?i+"\n\n\n"+S.languages.author+"\n"+S.languages.link+window.location.href+"\n"+S.languages.source+"\n"+S.languages.info:i,e.clipboardData?e.clipboardData.setData("text",t):window.clipboardData.setData("text",t)});var B=GLOBAL_CONFIG.isFontAwesomeV5,T=$("#darkmode");function D(){B?T.removeClass("fa-moon").addClass("fa-sun"):T.removeClass("fa-moon-o").addClass("fa-sun-o")}function j(){B?T.removeClass("fa-sun").addClass("fa-moon"):T.removeClass("fa-sun-o").addClass("fa-moon-o")}if("undefined"!=typeof autoChangeMode&&("dark"===document.documentElement.getAttribute("data-theme")?D:j)(),T.click(function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(D(),activateDarkMode(),Cookies.set("theme","dark",{expires:2}),i&&snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(j(),activateLightMode(),Cookies.set("theme","light",{expires:2}),i&&snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day));try{utterancesTheme()}catch(e){return!1}}),GLOBAL_CONFIG.runtime){var z,P=$("#webinfo-runtime-count"),E=P.attr("start_date"),R=function(){var e=new Date(E),t=(new Date).getTime()-e.getTime(),i=Math.floor(t/864e5);P.text(i+" "+GLOBAL_CONFIG.runtime_unit)};R(),clearInterval(z),z=setInterval(R,1e4)}GLOBAL_CONFIG.baiduPush&&function(){var e=document.createElement("script"),t=window.location.protocol.split(":")[0];e.src="https"===t?"https://zz.bdstatic.com/linksubmit/push.js":"http://push.zhanzhang.baidu.com/push.js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(e,i)}(),$(".hide-button").on("click",function(e){e.preventDefault(),$(this).hide();var t=$(this).next(".hide-content");t.show(),t.find(".justified-gallery").justifiedGallery({rowHeight:220,margins:4})}),GLOBAL_CONFIG.isPhotoFigcaption&&$("#article-container img").each(function(e,t){var i=$(t);if(i.attr("alt")){var a=$('<div class="img-alt is-center">'+i.attr("alt")+"</div>");i.after(a)}})});