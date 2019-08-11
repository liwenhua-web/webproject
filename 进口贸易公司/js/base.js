//轮播图动画
$(function(){
    $(".carousel").carousel();
});
//index_part1悬停背景放大
$(function(){
    $(".index_part1_bg")
        .mouseover(function(){$(this).css({height:"220px"})})
        .mouseout(function(){$(this).css({height:""})})
});
//index_part2
$(function(){
    $(".index_part2 a")
        .mouseover(function(){$(this).find(".index_part2_block").stop(true,true).animate({marginLeft:"10px",marginTop:"-10px"}) })
        .mouseout(function(){$(this).find(".index_part2_block").stop(true,true).animate({marginLeft:"",marginTop:""}) })
});
$(function(){
    $(".index_part3 a")
        .mouseover(function(){$(this).find(".index_part3_logo").stop(true,true).animate({marginLeft:"80%"},1000)})
        .mouseout(function(){$(this).find(".index_part3_logo").stop(true,true).animate({marginLeft:""},1000)})
});
$(function(){
    $(".xwzx_part3 a")
        .mouseover(function(){$(this).find(".xwzx_font").stop(true,true).slideDown(500)})
        .mouseout(function(){$(this).find(".xwzx_font").stop(true,true).slideUp(500)})
});





