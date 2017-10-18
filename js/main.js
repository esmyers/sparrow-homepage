$(document).ready(function() {

	//Mobile nav control (760px or less)
    $("#mobile_nav_button").click(function(){
        $("#mobile_nav").stop().slideToggle();

        $("#mobile_nav_icon").toggleClass( "ion-navicon-round" );
        $("#mobile_nav_icon").toggleClass( "ion-close-round" );

    });


	//Sticky Nav Bar
	$(window).scroll(function(){
	  var sticky = $('.main_nav_bar'),
	  	  mobile = $('#mobile_nav'),
	      scroll = $(window).scrollTop();

	  if(scroll >= 80){
	  	sticky.addClass('nav_bar_fixed'),
	  	mobile.addClass('mobile_nav_fixed');
	  	mobile.removeClass('mobile_nav_top');
	  }else{
	  	sticky.removeClass('nav_bar_fixed');
	  	mobile.addClass('mobile_nav_top');
	  	mobile.removeClass('mobile_nav_fixed');
	  }

	  
	});

	//Vertical align team page bios
	$('#garyl').css({
        'margin-top' : -$("#garyl").height()/2
    });
    $('#bruced').css({
        'margin-top' : -$("#bruced").height()/2
    });
    $('#aarons').css({
        'margin-top' : -$("#aarons").height()/2
    });
    $('#blaked').css({
        'margin-top' : -$("#blaked").height()/2
    });
    $('#erikm').css({
        'margin-top' : -$("#erikm").height()/2
    });
    $('#jeffi').css({
        'margin-top' : -$("#jeffi").height()/2
    });
    $('#jeremyn').css({
        'margin-top' : -$("#jeremyn").height()/2
    });
     $('#martys').css({
        'margin-top' : -$("#martys").height()/2
    });
     $('#nicke').css({
        'margin-top' : -$("#nicke").height()/2
    });
    $('#mariep').css({
        'margin-top' : -$("#mariep").height()/2
    });
    $('#moonk').css({
        'margin-top' : -$("#moonk").height()/2
    });
    $('#toniar').css({
        'margin-top' : -$("#toniar").height()/2
    });
    $('#venik').css({
        'margin-top' : -$("#mitchs").height()/2
    });
    $('#mitchs').css({
        'margin-top' : -$("#venik").height()/2
    });
    $('#sydneyn').css({
        'margin-top' : -$("#sydneyn").height()/2
    });
    $('#scottm').css({
        'margin-top' : -$("#scottm").height()/2
    });


    //Hover Team images, change to fun.

    $('#gary_img').hover(function(){
	    if (!$(this).hasClass('fun_image')) {
	        $(this).attr('src', '../img/team/gary_f.jpg');
	        $(this).addClass('fun_image')
	    } else  {
	        $(this).attr('src', '../img/team/gary_p.jpg');
	        $(this).removeClass('fun_image')
	    }
	});
	$('#bruce_img').hover(function(){
	    if (!$(this).hasClass('fun_image')) {
	        $(this).attr('src', '../img/team/bruce_f.jpg');
	        $(this).addClass('fun_image')
	    } else  {
	        $(this).attr('src', '../img/team/bruce_p.jpg');
	        $(this).removeClass('fun_image')
	    }
	});
	$('#blake_img').hover(function(){
	    if (!$(this).hasClass('fun_image')) {
	        $(this).attr('src', '../img/team/blake_f.jpg');
	        $(this).addClass('fun_image')
	    } else  {
	        $(this).attr('src', '../img/team/blake_p.jpg');
	        $(this).removeClass('fun_image')
	    }
	});
	$('#erik_img').hover(function(){
	    if (!$(this).hasClass('fun_image')) {
	        $(this).attr('src', '../img/team/erik_f.jpg');
	        $(this).addClass('fun_image')
	    } else  {
	        $(this).attr('src', '../img/team/erik_p.jpg');
	        $(this).removeClass('fun_image')
	    }
	});
	$('#jeff_img').hover(function(){
	    if (!$(this).hasClass('fun_image')) {
	        $(this).attr('src', '../img/team/jeff_f.jpg');
	        $(this).addClass('fun_image')
	    } else  {
	        $(this).attr('src', '../img/team/jeff_p.jpg');
	        $(this).removeClass('fun_image')
	    }
	});
	$('#jeremy_img').hover(function(){
	    if (!$(this).hasClass('fun_image')) {
	        $(this).attr('src', '../img/team/jeremy_f.jpg');
	        $(this).addClass('fun_image')
	    } else  {
	        $(this).attr('src', '../img/team/jeremy_p.jpg');
	        $(this).removeClass('fun_image')
	    }
	});
	$('#marie_img').hover(function(){
	    if (!$(this).hasClass('fun_image')) {
	        $(this).attr('src', '../img/team/marie_f.jpg');
	        $(this).addClass('fun_image')
	    } else  {
	        $(this).attr('src', '../img/team/marie_p.jpg');
	        $(this).removeClass('fun_image')
	    }
	});
	$('#tonia_img').hover(function(){
	    if (!$(this).hasClass('fun_image')) {
	        $(this).attr('src', '../img/team/tonia_f.png');
	        $(this).addClass('fun_image')
	    } else  {
	        $(this).attr('src', '../img/team/tonia_p.jpg');
	        $(this).removeClass('fun_image')
	    }
	});
	$('#veni_img').hover(function(){
	    if (!$(this).hasClass('fun_image')) {
	        $(this).attr('src', '../img/team/veni_f.jpg');
	        $(this).addClass('fun_image')
	    } else  {
	        $(this).attr('src', '../img/team/veni_p.jpg');
	        $(this).removeClass('fun_image')
	    }
	});
	$('#mitch_img').hover(function(){
	    if (!$(this).hasClass('fun_image')) {
	        $(this).attr('src', '../img/team/mitch_f.jpg');
	        $(this).addClass('fun_image')
	    } else  {
	        $(this).attr('src', '../img/team/mitch_p.jpg');
	        $(this).removeClass('fun_image')
	    }
	});
	$('#sydney_img').hover(function(){
	    if (!$(this).hasClass('fun_image')) {
	        $(this).attr('src', '../img/team/sydney_f.jpg');
	        $(this).addClass('fun_image')
	    } else  {
	        $(this).attr('src', '../img/team/sydney_p.jpg');
	        $(this).removeClass('fun_image')
	    }
	});


	
  
	


// alert("JQuery Loaded");

  $("select#app_categories").change(function () {
	   if( $("option#viewall:selected").length )
	   {
	     $(".cat1").slideDown();
	     $(".cat2").slideDown();
	     $(".cat3").slideDown();
	     $(".cat4").slideDown();
	   } else if( $("option#opt1:selected").length )
	   {
	     $(".cat1").slideDown();
	     $(".cat2").slideUp();
	     $(".cat3").slideUp();
	     $(".cat4").slideUp();
	   } else if( $("option#opt2:selected").length )
	   {
	     $(".cat1").slideUp();
	     $(".cat2").slideDown();
	     $(".cat3").slideUp();
	     $(".cat4").slideUp();
	   } else if( $("option#opt3:selected").length )
	   {
	     $(".cat1").slideUp();
	     $(".cat2").slideUp();
	     $(".cat3").slideDown();
	     $(".cat4").slideUp();
	   } else if( $("option#opt4:selected").length )
	   {
	     $(".cat1").slideUp();
	     $(".cat2").slideUp();
	     $(".cat3").slideUp();
	     $(".cat4").slideDown();
	   }
	});


    // $("#cbra_change").click(function() {
    //   	$('#cbra_change').attr('src','../img/applications/cbra/cbra.gif');

    // })

    $('#cbra_change').click(function(){
	    if (!$(this).hasClass('currently_playing')) {
	        $(this).attr('src', '../img/applications/cbra/cbra.gif');
	        $(this).addClass('currently_playing')
	    } else  {
	        $(this).attr('src', '../img/applications/cbra/cbra.png');
	        $(this).removeClass('currently_playing')
	    }
	});

	$('#epasfbay_change').click(function(){
	    if (!$(this).hasClass('currently_playing')) {
	        $(this).attr('src', '../img/applications/epasfbay/epasfbay.gif');
	        $(this).addClass('currently_playing')
	    } else  {
	        $(this).attr('src', '../img/applications/epasfbay/epasfbay.png');
	        $(this).removeClass('currently_playing')
	    }
	});

	$('#fim_change').click(function(){
	    if (!$(this).hasClass('currently_playing')) {
	        $(this).attr('src', '../img/applications/fimpub/fimpub.gif');
	        $(this).addClass('currently_playing')
	    } else  {
	        $(this).attr('src', '../img/applications/fimpub/fimpub.png');
	        $(this).removeClass('currently_playing')
	    }
	});

	$('#fish_change').click(function(){
	    if (!$(this).hasClass('currently_playing')) {
	        $(this).attr('src', '../img/applications/fishvis/fishvis.gif');
	        $(this).addClass('currently_playing')
	    } else  {
	        $(this).attr('src', '../img/applications/fishvis/fishvis.png');
	        $(this).removeClass('currently_playing')
	    }
	});

	$('#njres_change').click(function(){
	    if (!$(this).hasClass('currently_playing')) {
	        $(this).attr('src', '../img/applications/njres/njres.gif');
	        $(this).addClass('currently_playing')
	    } else  {
	        $(this).attr('src', '../img/applications/njres/njres.png');
	        $(this).removeClass('currently_playing')
	    }
	});

	$('#noreast_change').click(function(){
	    if (!$(this).hasClass('currently_playing')) {
	        $(this).attr('src', '../img/applications/noreast/noreast.gif');
	        $(this).addClass('currently_playing')
	    } else  {
	        $(this).attr('src', '../img/applications/noreast/noreast.png');
	        $(this).removeClass('currently_playing')
	    }
	});

	$('#sigl_change').click(function(){
	    if (!$(this).hasClass('currently_playing')) {
	        $(this).attr('src', '../img/applications/sigl/sigl.gif');
	        $(this).addClass('currently_playing')
	    } else  {
	        $(this).attr('src', '../img/applications/sigl/sigl.png');
	        $(this).removeClass('currently_playing')
	    }
	});

	$('#sparrowgl_change').click(function(){
	    if (!$(this).hasClass('currently_playing')) {
	        $(this).attr('src', '../img/applications/sparrowgl/sparrowgl.gif');
	        $(this).addClass('currently_playing')
	    } else  {
	        $(this).attr('src', '../img/applications/sparrowgl/sparrowgl.png');
	        $(this).removeClass('currently_playing')
	    }
	});

	$('#stn_change').click(function(){
	    if (!$(this).hasClass('currently_playing')) {
	        $(this).attr('src', '../img/applications/stnpub/stnpub.gif');
	        $(this).addClass('currently_playing')
	    } else  {
	        $(this).attr('src', '../img/applications/stnpub/stnpub.png');
	        $(this).removeClass('currently_playing')
	    }
	});

	$('#fwswet_change').click(function(){
	    if (!$(this).hasClass('currently_playing')) {
	        $(this).attr('src', '../img/applications/wetlands/wetlands.gif');
	        $(this).addClass('currently_playing')
	    } else  {
	        $(this).attr('src', '../img/applications/wetlands/wetlands.png');
	        $(this).removeClass('currently_playing')
	    }
	});




})
