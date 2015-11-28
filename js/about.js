/**
 * Created by lvep on 2015/11/28.
 */
$(function(){
    $(document).ready(function(){
        /**
         * 菜单栏鼠标滑过
         */
        $(".img-hover").hover(
            function(){
                $(this).children("a.infoText").animate({
                    opacity: "1",
                    top: "10px"
                },400);
            },
            function(){
                $(this).children("a.infoText").animate({
                    opacity: "0",
                    top: "-20px"
                },400);
            });
    });
});

