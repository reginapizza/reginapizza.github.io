/* Template Name: Cristino - Responsive Personal Template
   Author: Shreethemes
   Email: Shreethemes@gmail.com
   Website: http://www.shreethemes.in/
   Version: 1.1.0
   Created: August 2019
   File Description: Main JS file of the template
*/

/************************/
/*       INDEX          */
/*=======================
 *  01.  Menu           *
 *  02.  Scrollspy      *
 *  03.  Loader         *
 *  04.  Back to top    *
 =======================*/

! function($) {
    "use strict";
    //*********************/ 
    //         Menu       */
    //*********************/ 
    // Menu
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".sticky").addClass("nav-sticky");
        } else {
            $(".sticky").removeClass("nav-sticky");
        }
    });

    $('.navbar-nav a, .mouse-down').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    //*********************/ 
    //      Scrollspy     */
    //*********************/ 
    $(".navbar-nav").scrollspy({ offset: 70 });


    //*********************/ 
    //       Loader       */
    //*********************/ 
    $(window).on('load', function() {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    });


    //*********************/ 
    //    BACK TO TOP     */
    //*********************/ 
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    }); 

    $(".back-to-top").on("click", function() {
        $("html, body").animate({ scrollTop: 0 }, 3000);
        return false;
    });
}(jQuery)