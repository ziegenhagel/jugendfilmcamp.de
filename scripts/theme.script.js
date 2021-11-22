/*

	0. PAGE PRELOADER
	1. HEADER
	2. NAVIGATION
	4. WORK
	5. BLOG
	6. TOGGLE BOX (SHORTCODES)
	7. SKILLBAR (SHORTCODES)
    8. TAB CONTENT (SHORTCODES)
	9. ALERT BOX (SHORTCODES)
	10. CLEAR INPUNT

*/

    function funcCoronaInfos() {
    window.open("https://www.jugendfilmcamp.de/corona.html", "_blank");
    }

(function ($) {

    'use strict';
	
	
    /* --------------------------------------------------------------------- */
    /* 0. CORONA HEADER
    /* --------------------------------------------------------------------- */

    $("#corona-exit").click(function(){
        $("#corona").fadeOut(1000);
    });
	
	

    /* --------------------------------------------------------------------- */
    /* 1. HEADER
    /* --------------------------------------------------------------------- */

// Sticky Header


// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});


    /* --------------------------------------------------------------------- */
    /* 2. NAVIGATION
    /* --------------------------------------------------------------------- */

    $("#main-navigation li a.page").click(function(){
        var topoffset = 50;
        $('html, body').clearQueue().animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - topoffset
        }, 1800,'swing');
        return false;
    });
	

    var mainNav = $("#main-navigation"),
        mainItems = mainNav.find("a.page"),
        scrollTo = mainItems.map(function(){
            var item = $( $( this ).attr( "href" ) );
            if (item.length) { return item; }
        });

    $( window ).scroll( function () {

        var mainHeight = mainNav.height();
        var offsetTop = $( this ).scrollTop() + mainHeight + 200;

        var current = scrollTo.map( function() {
            if( $( this ).offset().top < offsetTop )
                return this;
        } );

        if( current.length ) {
            current = current[ current.length -1 ];
            var id = current.attr( "id" );

        } else {
            var id = "";
        }

        mainItems
            .removeClass( "active" )
            .filter( "[href=#"+id+"]" )
            .addClass( "active" );
    });




    /* --------------------------------------------------------------------- */
    /* 3. BANNER
    /* --------------------------------------------------------------------- */

	function sizeBanner()
	{
		var windowHeight = $(window).height();
		$("#banner").css("height",windowHeight+"px");
	}
	$(window).resize(function(){
		sizeBanner();
	});
	
	$(".scrollto, a.logo").click(function(){
        var topoffset = 50;
        $('html, body').clearQueue().animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - topoffset
        }, 1800,'swing');
        return false;
    });




    /* --------------------------------------------------------------------- */
    /* 6. TOGGLE BOX (SHORTCODES)
    /* --------------------------------------------------------------------- */
	
	$(".toggle-box .toggle .header").click(function(){
		if($(this).parent(".toggle").children(".content").is(":hidden"))
		{
			$(".toggle").children(".header").removeClass("active");
			$(".toggle").children(".header").children(".icon").removeClass("minus");
			$(".toggle").children(".content").slideUp();
            $(this).addClass("active");
			$(this).parent(".toggle").children(".content").slideDown();
			$(this).parent(".toggle").children(".header").children(".icon").addClass("minus");
		} else {
            $(this).removeClass("active");
			$(this).parent(".toggle").children(".content").slideUp();
			$(this).parent(".toggle").children(".header").children(".icon").removeClass("minus");
		}
	});
	
	
	
	
    /* --------------------------------------------------------------------- */
    /* 7. SKILLBAR (SHORTCODES)
    /* --------------------------------------------------------------------- */
	
	$(".skillbar").each(function(){
		var percent = $(this).attr("data-percent");
		$(this).children(".percent-bg").css("width",percent+"%");
	});




   
	
	
	
    /* --------------------------------------------------------------------- */
    /* 9. ALERT BOX
    /* --------------------------------------------------------------------- */
	
	$(".alert-box .close").click(function(){
		$(this).parent(".alert-box ").fadeOut(350);
	});




    /* --------------------------------------------------------------------- */
    /* 10. CLEAR INPUNT
    /* --------------------------------------------------------------------- */

    var defaultvalue;
    $(".cleartext").focusin(function() {
        defaultvalue = this.defaultValue;
        if(this.value == this.defaultValue) {
            this.value = '';
        }
    }).focusout(function(){
        if($(this).val() == '')
        {
            this.value = defaultvalue;
        }
    });


})(jQuery);



/* --------------------------------------------------------------------- */
    /* 6. TOGGLE BOX (SHORTCODES)
    /* --------------------------------------------------------------------- */
	
	$(".info-button").click(function(){
		
		if($(".info-content").is(":hidden"))
		{
            $(".infos").removeClass("active");
			$(".infos").slideUp();
			$(".infos-pfeil").removeClass("minus");
			$(".info-header").addClass("active");
			$(".info-content").slideDown(3500);
			$(".info-button").children(".icon").addClass("minus");
			$(function () {
    var pos = [52.891176, 11.504000];
    $('#test2')
      .gmap3({
        center: pos,
        zoom: 13,
        mapTypeId : google.maps.MapTypeId.HYBRID,
		scrollwheel: false,
        gestureHandling: 'cooperative'
      })
      .marker([
		{position: [52.895031, 11.502323]}
	
	
	])
      .overlay([
		{
		position: [52.895031, 11.502323],
        content:  '<div style="background-color: #27333d; width:170px; line-height: 1.5em; height: 6em; text-align:center; padding-top:0.5em;">' +
                    'Jugendfilmcamp <br> Lindenstra&szlig;e 42 <br> 39619 Arendsee(Altmark)' +
                  '</div>',
        x:0,
        y:-110
		}
	]);
  });
		} else {
            $(".infos").removeClass("active");
			$(".infos").slideUp();
			$(".info-button").children(".icon").removeClass("minus");
		}
	});


	$(".faq-button").click(function(){
		
		if($(".faq-content").is(":hidden"))
		{
            $(".infos").removeClass("active");
			$(".infos").slideUp();
			$(".infos-pfeil").removeClass("minus");
			$(".faq-header").addClass("active");
			$(".faq-content").slideDown(3500);
			$(".faq-button").children(".icon").addClass("minus");
		} else {
            $(".infos").removeClass("active");
			$(".infos").slideUp();
			$(".faq-button").children(".icon").removeClass("minus");
		}
	});


/* --------------------------------------------------------------------- */
    /* 6. TOGGLE BOX (SHORTCODES)
    /* --------------------------------------------------------------------- */
	
	$(".info-titel").click(function(){
		if($(this).parent("div").children(".info-text").is(":hidden"))
		{
			$(".info-titel").children(".icon").removeClass("minus");
			$(".info-block").children(".info-text").slideUp();
			$(this).parent("div").children(".info-text").slideDown();
			$(this).children(".icon").addClass("minus");
		} else {
            /*$(this).removeClass("active");*/
			$(this).parent("div").children(".info-text").slideUp();
			$(this).children(".icon").removeClass("minus");
		}
	});

$(".subinfo-titel").click(function(){
		if($(this).parent("div").children(".subinfo-text").is(":hidden"))
		{
			$(".subinfo-titel").children(".icon").removeClass("minus");
			$(".subinfo-block").children(".subinfo-text").slideUp();
			$(this).parent("div").children(".subinfo-text").slideDown();
			$(this).children(".icon").addClass("minus");
		} else {
            /*$(this).removeClass("active");*/
			$(this).parent("div").children(".subinfo-text").slideUp();
			$(this).children(".icon").removeClass("minus");
		}
	});
