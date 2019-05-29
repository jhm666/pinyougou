$(function() {
    var top = $(".canpin").offset().top;
    a();
    $(window).scroll(function() {
        a();
        if (flag) {
            $(".shangpin").each(function(i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $(".dingwei li").eq(i).addClass("diyi").siblings().removeClass()
                }
            })
        }
    })
    var flag = true;
    $(".dingwei li").click(function() {
        flag = false;
        var current = $(".jydq").eq($(this).index()).offset().top;
        $("html,body").stop().animate({
            scrollTop: current
        }, function() {
            setTimeout(function() {
                flag = true;
            }, 200)
        })
        $(this).addClass("diyi").siblings().removeClass("diyi")
    })

    function a() {
        if ($(document).scrollTop() >= top) {
            $(".dingwei").stop().fadeIn()
        } else {
            $(".dingwei").stop().fadeOut()
        }
    }
})