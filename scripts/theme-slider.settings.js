/*

	1. WORK PREVIEW HOVERDIR
	2. PARALLAX BACKGROUNDS
	3. SLIDER
	  3.0 FULLSCREEN HEADER IMAGE SLIDER
	  3.1 MACBOOK DEVICE SLIDER
	  3.2 IPHONE DEVICE SLIDER
	  3.3 COMMENT SLIDER
	4. CAROUSEL
	  4.1 CLIENT CAROUSEL

*/

(function ($) {

    'use strict';

    /* ----------------------------------------- */
    /* 1. WORK PREVIEW HOVERDIR
    /* ----------------------------------------- */

    $(function() {
        $(' #intro-preview > li ').each( function() { $(this).hoverdir(); } );
    });


    $(function(){
        $('#intro-preview').mixitup();
    });
   

 $(function() {
        $(' #movie-preview > li ').each( function() { $(this).hoverdir(); } );
    });


    $(function(){
        $('#movie-preview').mixitup();
    });

    /* ----------------------------------------- */
    /* 1777. DOZ PREVIEW HOVERDIR
    /* ----------------------------------------- */

    $(function() {
        $(' #doz-preview > li ').each( function() { $(this).hoverdir(); } );
    });


    $(function(){
        $('#doz-preview').mixitup();
    });




    /* ----------------------------------------- */
    /* 2. PARALLAX BACKGROUNDS
    /* ----------------------------------------- */

    $('.paralax-content').parallax({
        speed :	0.25
    });



    /* ----------------------------------------- */
    /* 3. SLIDER
    /* ----------------------------------------- */
	
    /* ==== 3.0 FULLSCREEN HEADER IMAGE SLIDER  ==== */
	
    $('#maximage-slider').maximage({
        cycleOptions: {
            fx: 'fade',
            speed: 1000, 
            timeout: 3000,
            prev: '.maximage-prev',
            next: '.maximage-next',
            pause: 1
        }
    });

    /* ==== 3.1 MACBOOK DEVICE SLIDER  ==== */

    $('#macbook-01').bxSlider({
        slideWidth: 1200,
        minSlides: 1,
        maxSlides: 1,
        controls: false,
        auto: true
    });

    /* ==== 3.2 IPHONE DEVICE SLIDER  ==== */

    $('#iphone-01').bxSlider({
        slideWidth: 1200,
        minSlides: 1,
        maxSlides: 1,
        controls: false,
        auto: true,
        autoDelay: 500
    });

    /* ==== 3.3 COMMENT SLIDER  ==== */

    $('#schirm-slider').bxSlider({
        slideWidth: 1200,
        minSlides: 1,
        maxSlides: 1,
        controls: true,
		touchEnabled: true,
        auto: true,
        pause: 8000,
        autoDelay: 700,
    });
	
	$('.gallery-slider').bxSlider({
        slideWidth: 300,
        minSlides: 2,
        maxSlides: 9,
		moveSlides: 1,
        controls: false,
		touchEnabled: true,
        auto: true,
        pause: 3000,
        autoDelay: 700,
    });



    $(window).load(function(){
		
	    /* ----------------------------------------- */
	    /* 4. CAROUSEL
	    /* ----------------------------------------- */

	    /* ==== 4.1 CLIENT CAROUSEL  ==== */

	    $('#client-carousel').carouFredSel({
	        responsive: true,
	        width: '100%',
	        scroll: 1,
	        items: {
	            width: 300,
	            visible: {
	                min: 1,
	                max: 4
	            }
	        }
	    });
		
    });
	


})(jQuery);

