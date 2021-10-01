$(document).ready(function(){
    "use strict";

    //sticky menu
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
        if (scroll < 152) {
         $(".sticky").removeClass("scroll-header");
        }else{
         $(".sticky").addClass("scroll-header");
        }
    });

    //counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // venobox video
    $('.video_btn').venobox(); 

})(jQuery);