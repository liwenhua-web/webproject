/**
 * Created by DELL on 2019/7/30.
 */
$(function(){
    //首页二级菜单
    $(".sy .nav>ul>li").hover(
        function(){
            $(this).css({backgroundColor:"#999"});
            $(this).children("ul").css({display:"block"});
            $(this).children("ul").children("a").css({color:"write"});

            $(".sy .nav>ul>li>ul li").hover(
                function(){
                    $(this).css({backgroundColor:"#222"})
                },function(){
                    $(".sy .nav>ul>li>ul li").css({backgroundColor:""})
                }
            )
        },
        function(){
            $(".sy .nav>ul>li").css({opacity:"",backgroundColor:"",color:""});
            $(".sy .nav>ul>li").children("ul").css({display:""});
            $(".sy .nav>ul>li").children("ul").children("a").css({color:"write"});
        }
    );
    //首页轮播图
    setInterval("sy_fun()",2000);

    /*校企合作第一部分大的轮播图*/
    $(".xqhz_main_img_right").hover(function(){
        $(this).css({cursor:"pointer"});
        $(this).click(function(){
            var w=$(".xqhz_main_img img").eq(0).width();
            var l=$(".xqhz_main_img_item").scrollLeft();
            $(".xqhz_main_img_item").scrollLeft(l+w);
        });
    },function(){
        }
    );
    $(".xqhz_main_img_left").hover(function() {
        $(this).css({cursor:"pointer"});
        $(this).click(function () {
            var w = $(".xqhz_main_img img").eq(0).width();
            var l = $(".xqhz_main_img_item").scrollLeft();
            $(".xqhz_main_img_item").scrollLeft(l - w);
        });
    },function(){
    });


    //校企合作内容二的轮播图
    setInterval("xqhz_main2_fun()",2000);
    //学团工作页，二级菜单
    $(function(){
        $(".xtgz .xqhz_nav>ul>li").hover(
            function(){
                $(this).css({backgroundColor:"rgba(222,222,222,0.5)"});
                $(this).children("ul").slideDown(500,function(){
                    $(".xtgz .xqhz_nav .xtgz_two li span").hover(
                        function(){
                            $(this).css({color:"#fff"})
                        },
                        function(){
                            $(".xtgz .xqhz_nav .xtgz_two li span").css({color:""})
                        }
                    )
                })
            },
            function(){
                $(".xtgz .xqhz_nav>ul>li").children("ul").slideUp(500);
                $(".xtgz .xqhz_nav>ul>li").css({backgroundColor:""});
            }
        )
    });
    //学团工作轮播图
    setInterval("xtgz_main1_fun()",2000);
});

//首页轮播图的函数
    function sy_fun(){
        var v1=$(".sy .rotate_img .rotate_img_content .sy_test");
        var v2;
        //var i=v1.next().length;
        if(v1.next().length==0){
            v2=$(".sy .rotate_img .rotate_img_content img:first");
        }else{
            v2= v1.next();
        }
        var i=v2.index();
        v1.animate({opacity:"0"},1000,function(){
            v1.removeClass("sy_test")
        });
        v2.animate({opacity:"1"},1000,function(){
            v2.addClass("sy_test")
        });
        $(".sy .rotate_img ul li").css({backgroundColor:"#ffffff",borderColor:"transparent"});
        $(".sy .rotate_img ul li").eq(i).css({backgroundColor:"transparent",borderColor:"#00544C",borderWidth :"5px",borderStyle:"solid"});
    }
//校企合作内容二的轮播图的函数
    function xqhz_main2_fun(){
        var v1=$(".xqhz_main2_list_lb .xqhz_main2_list_one");
        var v2;
        if(v1.next().length==0){
            v2=$(".xqhz_main2_list_lb div img:first");
        }else{
            v2=v1.next();
        }
        var i=v2.index();
        v1.animate({opacity:"0"},1000,function(){
            v1.removeClass("xqhz_main2_list_one");
        });
        v2.animate({opacity:"1"},1000,function(){
           v2.addClass("xqhz_main2_list_one")
        });
        $(".xqhz_main2_list_lb .xqhz_main2_list_button li").css({backgroundColor:"rgba(102,102,102,0.5)"});
        $(".xqhz_main2_list_lb .xqhz_main2_list_button li").eq(i).css({backgroundColor:"orange"});
    }
//学团工作main1轮播图
    function xtgz_main1_fun(){
        var v1=$(".xtgz_main1_lb .xtgz_main1_lb_one");
        var v2;
        if(v1.next().length==0){
            v2=$(".xtgz_main1_lb img:first");
        }else{
        v2=v1.next();
        }
        var i=v2.index();
        v1.animate({opacity:"0"},1000,function(){
            v1.removeClass("xtgz_main1_lb_one");
        });
        v2.animate({opacity:"1"},1000,function(){
            v2.addClass("xtgz_main1_lb_one");
        });
        $(".xtgz_main1_lb_btn li").css({backgroundColor:"rgba(102,102,102,0.5)"});
        $(".xtgz_main1_lb_btn li").eq(i).css({backgroundColor:"orange"});

    }


//二级学院，农牧，招生就业
$(function(){
    $("#menu1>li").hover(
        function(){
            $(this).children("ul").stop(true,true).show(200)
        },
        function(){
            $(this).children("ul").stop(true,true).hide(200)
        }
    );
    $("#menu2>li").hover(
        function(){
            $(this).css({backgroundColor:"#22303C"});
            $(this).children("ul").stop(true,true).show(200)
        },
        function(){
            $(this).css({backgroundColor:""});
            $(this).children("ul").stop(true,true).hide(200)
        });
    setInterval("funzsjy()",2000)
});
function funzsjy(){
    var v1 = $(".box .text");
    var v2;
    if(v1.next().length == 0){
        v2=$(".box img:first");
    }
    else {
        v2=v1.next()
    }
    var i = v2.index();
    v1.animate({opacity:0},500,function(){
        v1.removeClass("text")
    });
    v2.animate({opacity:1},500,function(){
        v2.addClass("text")
    });
    $(".zsjy_part1_center ul li").css({backgroundColor:"rgba(0,0,0,0.6)"})
    $(".zsjy_part1_center ul li").eq(i).css({backgroundColor:"#F17B0A"})
}

$(function(){
    setInterval("funnmgcxy()",2000)
})
function funnmgcxy(){
    var v1 = $(".nmgcxy_part2_left .box1 .nmgcxy_part2_leftimg");
    var v2;
    if(v1.next().length == 0){
        v2=$(".nmgcxy_part2_left .box1 div:first");
    }
    else {
        v2=v1.next()
    }
    var i = v2.index();
    v1.animate({opacity:0},500,function(){
        v1.removeClass("nmgcxy_part2_leftimg")
    })
    v2.animate({opacity:1},500,function(){
        v2.addClass("nmgcxy_part2_leftimg")
    })
    $(".nmgcxy_part2_leftlunbo ul li").css({backgroundColor:"rgba(0,0,0,0.7)"})
    $(".nmgcxy_part2_leftlunbo ul li").eq(i).css({backgroundColor:"#9FCF25"})
    $(".nmgcxy_header_nav>ul>li").hover(
        function(){
            var i=$(this).index();
            $(this).css({backgroundColor:"rgba(0,0,0,0.5)"})
            $(this).children("ul").stop(true,true).show(500)},
        function(){
            $(this).css({backgroundColor:""})
            $(this).children("ul").stop(true,true).hide(500)
        }
    )
    $(".nmgcxy_header_list ul li a").hover(
        function(){
            $(this).css({backgroundColor:"#9FCF25"})
        },
        function(){
            $(this).css({backgroundColor:""})
        }
    )
}

//工商管理学院 继续教育 林薛

function datetime() {
    //创建日期时间对象
    var datetime = new Date();
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1;
    var day = datetime.getDate();
    var week = datetime.getDay();

    switch (week) {
        case 0:
            var week = '星期日';
            break;
        case 1:
            var week = '星期一';
            break;
        case 2:
            var week = '星期二';
            break;
        case 3:
            var week = '星期三';
            break;
        case 4:
            var week = '星期四';
            break;
        case 5:
            var week = '星期五';
            break;
        case 6:
            var week = '星期六';
            break;
    }
    var now =  year + "年" + month + "月" + day + "日" + " " + week;
    $(".gsgl-head-left p").text(now);//这里是往p标签中添加
}
setInterval(datetime, 1000);

$(function(){
    a=$(".gsglxy .gsgl .gsgl-nav .menu li");
    $(a).hover(function (){
        $(this).css({backgroundColor:"blue"})
    });
    $(a).mouseleave (function(){
        $(this).css({backgroundColor:""})
    })
});
$(function(){
    //detInterval(function(){},1000)
    setInterval("fun_pic()",2500)
    setInterval("fun_link()",2500)
});
function fun_pic() {
    var v1 = $(".gsglxy .gsgl .gsgl-content .gsgl-content-left .wrap .box .text");//要隐藏的图片
    var v2;//要显示的图片
    if (v1.next().length == 0) {
        v2 = $(".gsglxy .gsgl .gsgl-content .gsgl-content-left .wrap .box img:first");
    }
    else{
        v2=v1.next();
    }
    var i=v2.index();
    v1.animate({opacity: "0"}, 1000,function(){
        v1.removeClass("text")
    });
    v2.animate({opacity: "1"}, 1000, function(){
        v2.addClass("text")
    });
    $(".gsglxy .gsgl .gsgl-content .gsgl-content-left .wrap ul li").css({backgroundColor:"gainsboro"});
    $(".gsglxy .gsgl .gsgl-content .gsgl-content-left .wrap ul li").eq(i).css({backgroundColor:"orange"}
    )
}
function fun_link(){
    var v3 = $(".link .link1");//要隐藏的链接
    var v4;//要显示的链接
    if (v3.next().length == 0) {
        v4 = $(".link p:first");
    }
    else{
        v4=v3.next();
    }
    var i=v4.index();
    v3.animate({opacity: "0"}, 1000,function(){
        v3.removeClass("link1")
    });
    v4.animate({opacity: "1"}, 1000, function(){
        v4.addClass("link1")
    });

}


//继续教育
$(function(){
    c=$(".jxjyxy .jxjy-header .jxjy-nav .menu li");
    $(c).hover(function (){
        $(this).css({backgroundColor:"#680034"})
    });
    $(c).mouseleave (function(){
        $(this).css({backgroundColor:""})
    })
})


$(function(){
    var a=$(".jxjyxy .jxjy .jxjy-content .jxjy-content-footer .wrap .item .box");
    var b=$(".jxjyxy .jxjy .jxjy-content .jxjy-content-footer .wrap .left");
    var c=$(".jxjyxy .jxjy .jxjy-content .jxjy-content-footer .wrap .right");
    $(".jxjyxy .jxjy .jxjy-content .jxjy-content-footer .wrap .item .box ul li img").hover(function(){
        $(this).css({border:"2px solid #680034"})
    });
    $(".jxjyxy .jxjy .jxjy-content .jxjy-content-footer .wrap .item .box ul li img").mouseleave (function(){
        $(this).css({border:"2px solid white"})
    });
    b.click(function(){
        var w=$(".jxjyxy .jxjy .jxjy-content .jxjy-content-footer .wrap .item .box ul li img").eq(0).width();
        var l=$(".jxjyxy .jxjy .jxjy-content .jxjy-content-footer .wrap .item").scrollLeft();
        $(".jxjyxy .jxjy .jxjy-content .jxjy-content-footer .wrap .item").scrollLeft(l-w-20)
    })
    c.click(function(){
        var w=$(".jxjyxy .jxjy .jxjy-content .jxjy-content-footer .wrap .item .box ul li img").eq(0).width();
        var l=$(".jxjyxy .jxjy .jxjy-content .jxjy-content-footer .wrap .item").scrollLeft();
        $(".jxjyxy .jxjy .jxjy-content .jxjy-content-footer .wrap .item").scrollLeft(l+w+20)
    })
});
//学院概况
$(function(){
    $(".jxjyxy-xygk-content ul li").click(function(){
        $(this).css({backgroundColor:"white",color:"black"}).addClass("jxjyxy-xygk-content-text").siblings().css({backgroundColor:"",color:""}).removeClass("jxjyxy-xygk-content-text");
        var i = $(this).index();
        $(".jxjyxy-xygk-content .right div").eq(i).css('display','block').addClass('show').siblings().css('display','none');

        $(".jxjy-nav .cxygk").click(function(){
            $(".jxjyxy-xygk-content .control1").css({display:"block"}).siblings('.right').find('.show').eq(i).hide();
            $(".jxjyxy-xygk-content .right div").css({display:"none"})
        })
    });
    $(".jxjy-nav .menu li ul .con1").click(function(){
        $(".jxjyxy-xygk-content .control1").css({display:"none"})
        $(".jxjyxy-xygk-content .right .con11").css({display:"block"}).siblings('.right').find('.show').eq(i).hide();
        $(".jxjyxy-xygk-content .right div").css({display:"none"})
    })
});

//会计金融学院 餐饮行业 宋秀莹
/**
 * Created by Dell on 2019/7/31.
 */
$("#cyfw_nav").hover(
    function(){
        $(this).children("ul").stop(true,true).show(500)
    },
    function(){
        $(this).children("ul").stop(true,true).hide(500)
    }
)
$(function(){
    setInterval("jrxy_fun()",4000)
})
function jrxy_fun(){
    var v1=$(".jrxy_main .jrxy_img_one");
    var v2;
    if(v1.next().length==0){
        v2=$(".jrxy_main img:first");}
    else{v2=v1.next()}
    var i=v2.index();
    v1.animate({opacity: 0},1000,function(){v1.removeClass("jrxy_img_one")})
    v2.animate({opacity: 1},1000,function(){v2.addClass("jrxy_img_one")})
    $(".jrxy_list_four li").css({backgroundColor:"rgba(0,0,0,0.1)"})
    $(".jrxy_list_four li").eq(i).css({backgroundColor:"orange"})

}

//孙赵妍 教育教学
$(document).ready(function(){
    $(".jy-hh li").hover(function(){
        $(this).find("ul").slideDown("slow");
    },function(){
        $(this).find("ul").slideUp("fast");
    });
});

//旅游人文学院 孙赵妍
// 定时器
function show_jnkc()
{
    var date_f=new Date();

    var date_w="星期"+"日一二三四五六".charAt(date_f.getDay());
    var date_y=date_f.getFullYear();
    var date_M=(date_f.getMonth()+1)<10?"0"+(date_f.getMonth()+1):date_f.getMonth()+1;
    var date_d=date_f.getDate()<10?"0"+date_f.getDate():date_f.getDate();
    var tzo=(new Date().getTimezoneOffset()/60)*(-1);
    jnkc.innerHTML=date_y+"年"+date_M+"月"+date_d+"日"+"&nbsp;&nbsp;"+date_w;
}
setInterval("show_jnkc();",1000);
// 菜单
$(document).ready(function(){
    $("#ly-nav li").hover(function(){
        $(this).find("ul").slideDown("slow");
    },function(){
        $(this).find("ul").slideUp("fast");
    });
});
// 轮播
$(function(){
    setInterval("ly_fun()",2000)
})
function ly_fun(){
    var v1= $(".ly-left-box .ly-text");//要隐藏的图片
    var v2;///要显示的图片
    if(v1.next().length==0){v2=$(".ly-left-box img:first");}
    else{v2=v1.next()}
    var i=v2.index();
    v1.animate({opacity: 0},1000,function(){v1.removeClass("ly-text")})
    v2.animate({opacity: 1},1000,function(){v2.addClass("ly-text")})
    $(".ly-ff li").css({backgroundColor:"white",color:"black"})
    $(".ly-ff li").eq(i).css({backgroundColor:"#e97a26",color:"white"})
}











