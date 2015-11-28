/**
 * Created by lvep on 2015/11/28.
 */
/**
 * 查看每一篇文章
 */
$(function(){
    $(document).ready(function(){
        $(".header").click(function(){
            $("#article").empty();
            $("#article").load("html/article.html");
        });
    });
});
