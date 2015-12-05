/**
 * Created by lvep on 2015/11/26.
 */
var isDetail = false;   // 是否为文章具体内容页面
$(function(){
    $(document).ready(function(){
        init();

        /**
         * 菜单栏鼠标滑过
         */
        $("#menu div").hover(
            function(){
                $(this).children().css("color","#3098D5");
            },
            function(){
                $(this).children().css("color","#9f9f92");
            });
        /**
         * 个人信息大图滚动
         */
        var scrollY = 10;
        $("#personInfo").mousewheel(function(event) {
            if(event.deltaY > 0){    // 向上滑动
                $("#personInfo").children().hide();
                console.log("hide");
            } else {    // 向下滑动
                $("#personInfo").children().show();
            }
            console.log(event.deltaX, event.deltaY, event.deltaFactor);
        });

        /**
         * 浏览器滑条滚动
         */
        $(window).mousewheel(function(event) {

            if(event.deltaY > 0){    // 向上滑动
                //$("#personInfo").children().hide();
                console.log("hide");
            } else {    // 向下滑动
                //$("#personInfo").children().show();

            }
            console.log(event.deltaX, event.deltaY, event.deltaFactor);
        });

        /**
         * 搜索框动画
         */
        $("#search > input").focus(function(){
            $("#search > input").animate({
                width: "200px"
            },400);
        });
        $("#search > input").blur(function(){
            $("#search > input").animate({
                width: "100px"
            },200);
        });

        /**
         * 回到顶部
         */
        $("#rocket").hover(
            function(){
                $("#fly div").animate({
                    opacity:"1"
                },300);
                $("#fly").animate({
                    top:"40%"
                },300);
            },
            function(){
                $("#fly div").animate({
                    opacity:"0"
                },300);
                $("#fly").animate({
                    top:"50%"
                },300);
            }
        );
        $("#rocket").click(function(){
            $("body").scrollTop(0);
        });

        $(window).scroll(function(){
            // 获取滚过的高度
            var scrollHeight = $("body").scrollTop();
            var windowHeight = $(window).height();      // 窗口高度
            // 显示回到顶部按钮
            if(scrollHeight > windowHeight && !isDetail){
                $("#fly").show();
            } else {
                $("#fly").hide();
            }
        });



        /**
         * 菜单事件
         */
        $("#tech").click(function(){
            $("#article").empty();
            $("#article").load("html/header.html");
        });
        $("#about").click(function(){
            $("#article").empty();
            $("#article").load("html/about.html");
        });
        $("#life").click(function(){
            $("#article").empty();
            $("#article").load("html/doc.html");
            $('#temp').load("html/test.html", function(){
                var mdStr = $('#temp').html();

                var converter = new Showdown.converter();
                var html = converter.makeHtml(mdStr);
                //$("#article").html(html);
                $("#article-detail").html(html)
                //alert($("#article-detail").html());

            });



        });

        /**
         * 划过回复图标，显示回复内容
         */
        $("#comment-img").hover(
            function(){
                $(this).hide();
                $("aside#comment-bar").animate({
                    right:"0px",
                    opacity:"1"
                },500);
                $("#comment-form").animate({
                    right:"361px",
                    opacity:"1"
                },1000);
            },
            function(){

            }
        );
        /**
         * 关闭回复页面
         */
        $("#close-button").click(function(){
            $("#comment-img").show();
            $("aside#comment-bar").animate({
                right:"-300px",
                opacity:"0"
            },500);
            $("#comment-form").animate({
                right:"-361px",
                opacity:"0"
            },1000);
        });
    });

    /**
     * 初始化
     */
    function init(){
        $("#fly").hide();
        $("#article").load("html/header.html");
        hideCommentImg();
    }


});
