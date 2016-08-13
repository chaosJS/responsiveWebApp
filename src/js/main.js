/**
 * Created by Administrator on 2016/8/12 0012.
 */
/*图片轮播js*/
$(document).ready(
    function(){
        $('.owl-carousel').owlCarousel({
            items:1,//
            loops:true,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            });
    }
);
