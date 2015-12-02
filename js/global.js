/**
 * Created by lvep on 2015/12/1.
 */
/**
 * 隐藏火箭
 */
function hideRocket(){
    $("#fly").hide();
}

/**
 * 显示火箭
 */
function showRocket(){
    $("#fly").show();
}

/**
 * 隐藏回复图标
 */
function hideCommentImg(){
    $("#comment-img").hide();
}
/**
 * 显示火箭
 */
function showCommentImg(){
    $("#comment-img").show();
}

function swicthPage(){
    if(isDetail){
        hideRocket();
        showCommentImg();
    } else {
        hideCommentImg();
        showRocket();
    }
    isDetail = true;
}