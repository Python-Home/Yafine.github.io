"use strict";function switchComment(){var t="切换为来必力"===$("#switch-comment").attr("title")?"切换为Gitalk":"切换为来必力",o=$("#switch-comment>i");"none"===$("#lv-container").css("display")?$("#gitalk-container").slideUp("normal",function(){$("#lv-container").slideDown("normal",function(){$("#switch-comment").attr("title",t),o.hasClass("fa-toggle-off")?o.removeClass("fa-toggle-off").addClass("fa-toggle-on"):o.removeClass("fa-toggle-on").addClass("fa-toggle-off")})}):$("#lv-container").slideUp("normal",function(){$("#gitalk-container").slideDown("normal",function(){$("#switch-comment").attr("title",t),o.hasClass("fa-toggle-off")?o.removeClass("fa-toggle-off").addClass("fa-toggle-on"):o.removeClass("fa-toggle-on").addClass("fa-toggle-off")})})}$("#switch-comment").click(function(){return switchComment(),!1});