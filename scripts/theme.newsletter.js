( function( $ ) {

    'use strict';

    $( '#newsletter-signup' ).submit( function( event ) {

        $( '#newsletter-success' ).fadeOut();
        $( '#newsletter-error' ).fadeOut();

        event.preventDefault();

        var dataJson = $( this ).serialize();

        $.ajax( {
            type: 'POST',
            url: 'newsletter/signup.php',
            data: dataJson,
            dataType: 'json',
            success: function( newsletter ) {

                if( newsletter.successMsg ) {

                    $( '#newsletter-success > span' ).html( newsletter.successMsg );
                    $( '#newsletter-success' ).fadeIn();
                    $( '#newsletter-signup' ).fadeOut();

                } else if( newsletter.errorMsg ) {

                    $( '#newsletter-error > span' ).html( newsletter.errorMsg );
                    $( '#newsletter-error' ).fadeIn();
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log("Status: " + xhr.status);
                console.log("Message: " + thrownError);
            }
        } );

    } );

} ) ( jQuery );