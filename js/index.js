/**
 * Created by lvep on 2015/11/26.
 */
$(function(){
    $(document).ready(function(){
        $("#fly").hide();



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
            if(scrollHeight > windowHeight){
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
    });
});
