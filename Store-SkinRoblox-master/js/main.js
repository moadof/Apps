/*==============================================================================

				  03.04.2018 - Script development started
					
			             Script by www.cpacodex.com
			       
================================================================================

................................................................................
	
	                   ** Fortnite Premium Landing Page **

===============================[ Variables ]===================================*/

var generatorStarted = 												       	   0;      
var timerStarted	 =														   0;                      

//===========================[ Global Script ]===================================

//------------------------------[ Document ]-------------------------------------

$( document ).ready( function( ) {

	//---------------------------[ Sound Effect ]--------------------------------

	ion.sound({
	sounds: [

		{

			name: "swash",
			path: "audio/",
			volume: 0.2
			
		},
		{

			name: "success",
			path: "audio/",
			volume: 0.2

		}

	],

		path: "sounds/",
		preload: true,
		multiplay: true

	});
	
	$( '.soundclick' ).click( function () {

		ion.sound.play( 'swash' );

	});

	//--------------------------[ Countdown Timer ]-------------------------------

	function startTimer( duration, display ) {

		if( timerStarted == 0 ) {

			timerStarted = 1;

		    var timer = duration, minutes, seconds;

		    setInterval( function() {

		        minutes = parseInt( timer / 60, 10 )
		        seconds = parseInt( timer % 60, 10 );

		        minutes = minutes < 10 ? "0" + minutes : minutes;
		        seconds = seconds < 10 ? "0" + seconds : seconds;

		        display.text( minutes + ":" + seconds );

		        if ( --timer < 0 ) {
		            timer = duration;
		        }

		    }, 1000 );

		}

	}

	//----------------------------[ Live Stats ]---------------------------------

    setInterval( newActivity, 2000 );


    function newActivity() {

        var flags   	= [ 'ad', 'ae', 'af', 'us', 'al', 'am', 'ar', 'au', 'gf', 'gb', 'ph', 'ba', 'us', 're', 'ro', 'pe', 'lv', 'mk', 'us', 'pt', 'europeanunion',
                        	'it', 'jp', 'ne', 'nl', 'no', 'ua', 'um'];
        var users   	= [ '441Binder','Johnny', 'Attacklord_bro', 'pewdiepie', "Marko", "PesaJajar", "Ivan", "xxMine", "9814Bind", "P!xel", "haxhack", "EarthHacker", "9/4gen", "ClashHacker", 'new_kid',
                  			'BloodMaster', 'lovegaming', 'Johnny', 'NaneK', 'Marko_991', 'JackHammer9999', 'fuzzzy', 'tester', 'yearboy1007', 'Ministar', 'Haxajmo', 'Pottato', 'GirlHackingxD', 'Alex',
                  			'Coder', 'Hillck23', 'Creeper', 'zaCk', 'only123', 'gunshaxer', 'MyNameIsShoost' ];
        var platforms 	= [ '<i class="fab fa-windows"></i>', '<i class="fab fa-apple"></i>', '<i class="fab fa-android"></i>' ];
        var items 		= [ '1000', '2500', '6000', '10000' ];

        var flag                 = flags[ Math.floor( Math.random() * flags.length ) ];
        var platform             = platforms[ Math.floor( Math.random() * platforms.length ) ];
        var item             	 = items[ Math.floor( Math.random() * items.length ) ];
        var user                 = users[ Math.floor( Math.random() * users.length ) ];


        $( '.activity' ).last().remove();

        $( '.activityContent' ).hide().prepend('<div class="activity">' +
           '<ul>' +
           		'<li><img class="avatar" src="img/avatar.png" alt="avatar" /><img class="flag" src="img/flags/' + flag + '.png" alt="flag" /></li>' +
           		'<li><span>Name</span><br />'+user+'</li>' +
                '<li><span>V-Bucks</span><br /><img class="item-icon" src="img/vb.png"> <b class="item-color">' + item + '</b></li>' +
                '<li><span>Platform</span><br />' + platform + '</li>' +
           '</ul>' +
        '</div>').fadeIn();
    }

	//----------------------------[ Progress Bar ]--------------------------------

    function progressBar() {

        var width            = 1;
        var intervalProgress = setInterval( frame, 0200 );

        function frame() {

        	if( width == 50 ) {

        		clearInterval( intervalProgress );

        		$( '.loader' ).fadeOut( function() {

        			$( '.card_hidden' ).fadeIn();

                        $( '.vbucks-amount' ).countTo({

                            from: 10,
                            to: 100,
                            speed: 1000,
                            refreshInterval: 1,
                            onComplete: function ( value ) {     

                            	$( '.console-txt' ).html( 'Successful' );
                            	$( '.vbucks-amount' ).addClass( 'color-green' );
                            	$( '.console-txt' ).addClass( 'color-green' );

                            	ion.sound.play( 'success' );

                            	setTimeout( function() {

                            		$( '.console-txt' ).html( 'Finishing<span class="blink">...</span>' );
	                            	$( '.console-txt' ).removeClass( 'color-green' );	

	                            	setInterval( frame, 0200 ); // Progress Bar Again

                            	}, 2000 );

                            }

                         });   			

        		} );

        	}


            if ( width == 100 ) {

                clearInterval( intervalProgress );

			    $( '.generator-console' ).removeClass( 'show' );

			    startTimer( 60 * 5, $( '.timeLeft' ) );

			    $( '.generator-offers' ).fadeIn();		

         
            } else {

                width++; 
                $( ".progress-bar" ).css( "width", width + '%' );

            }

        }

    }

	//------------------------[ Select Functions ]-------------------------------

	$( '.cars_main' ).click( function() {

		$( '.btnNext' ).fadeIn();

		$( '.cars_main' ).removeClass( 'card-active' );
	    $( this ).addClass( 'card-active' );

	});		

	$( '.platform' ).click( function() {

		$( '.platform' ).removeClass( 'platform-active' );
	    $( this ).addClass( 'platform-active' );

	});		

	//-----------------------------[ Btn Next ]----------------------------------



		$( '.vbucks-amount' ).html( $( '.card-active' ).attr( 'data-amount' ) );

		$( '.generator' ).addClass('show animated zoomIn');

		$( '.btnNext' ).fadeOut( function() {

			$( '.generator-title' ).html( 'Start Generator' );

			$( '.btnGenerate' ).fadeIn();

		});

	//-----------------------------[ Btn Final ]----------------------------------

	$( '.btnFinal' ).click( function() {

	    $( '.player-api' ).removeClass( 'show' );

	    $( '.generator-console' ).addClass('show animated zoomIn');		

	    $( '.btnFinal' ).fadeOut();		

	    progressBar(); // Progress Bar Starts Generator

	});

	//---------------------------[ Btn Generate ]---------------------------------

	$( '.btnGenerate' ).click( function() {

		var player_name = $( '.usernameInput' ).val();

    	if( player_name == "" || player_name.replace(/ /g,'').length < 2 ) {

    		$( ".usernameInput" ).css( { border: '1px solid #F00' } );

    	} else {

    		var platform = $( '.platform-active' ).attr( 'data-name' );

    		$( '.btnGenerate' ).addClass( 'disabled-btn' );
    		$( '.btnGenerate' ).html( '<i class="fas fa-spinner fa-spin" style="font-size:24px"></i> Checking Data' );

    		$( '.generator' ).addClass( 'disabled-btn' );

			setTimeout(function() {
				$( '.generator' ).removeClass( 'show' );
				$( '.generator-console' ).addClass('show animated zoomIn');		
				$( '.btnGenerate' ).fadeOut();		
				progressBar();
			 }, 3000);

    	}

	});

});