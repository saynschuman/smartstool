$(document).ready(function() {

	$('.footer-menu').masonry({
	  itemSelector: 'li'
	});

	
	$('.menuItem[name="smart-1"').hover(
	  function() {
	  	$('.subMenu[name="smart-1"]').css('display', 'block');  
	  }, function() {
	    $('.subMenu[name="smart-1"]').css('display', 'none');  
	  }
	);

	$('.menuItem[name="smart-2"').hover(
	  function() {
	  	$('.subMenu[name="smart-2"]').css('display', 'block');  
	  }, function() {
	    $('.subMenu[name="smart-2"]').css('display', 'none');  
	  }
	);

	$('.menuItem[name="smart-3"').hover(
	  function() {
	  	$('.subMenu[name="smart-3"]').css('display', 'block');  
	  }, function() {
	    $('.subMenu[name="smart-3"]').css('display', 'none');  
	  }
	);

	$('.menuItem[name="smart-4"').hover(
	  function() {
	  	$('.subMenu[name="smart-4"]').css('display', 'block');  
	  }, function() {
	    $('.subMenu[name="smart-4"]').css('display', 'none');  
	  }
	);

	$('.menuItem[name="smart-5"').hover(
	  function() {
	  	$('.subMenu[name="smart-5"]').css('display', 'block');  
	  }, function() {
	    $('.subMenu[name="smart-5"]').css('display', 'none');  
	  }
	);	
	$('.subMenu[name="smart-1"]').hover(
	  function() {
	  	$(this).css('display', 'block');  
	  	$('.menuItem[name="smart-1"').addClass('active');
	  	$('.menuItem[name="smart-1"').css({
	  		'border-top': '3px solid #ff8301'
	  	});
	  }, function() {
	    $(this).css('display', 'none');  
	    $('.menuItem[name="smart-1"').removeClass('active');
	    $('.menuItem[name="smart-1"').css({
	  		'border-top': 'none'
	  	});	    
	  }
	);	
	$('.subMenu[name="smart-2"]').hover(
	  function() {
	  	$(this).css('display', 'block');  
	  	$('.menuItem[name="smart-2"').addClass('active');
	  }, function() {
	    $(this).css('display', 'none');
	    $('.menuItem[name="smart-2"').removeClass('active');  
	  }
	);	
	$('.subMenu[name="smart-3"]').hover(
	  function() {
	  	$(this).css('display', 'block');  
	  	$('.menuItem[name="smart-3"').addClass('active');
	  }, function() {
	    $(this).css('display', 'none'); 
	    $('.menuItem[name="smart-3"').removeClass('active'); 
	  }
	);	
	$('.subMenu[name="smart-4"]').hover(
	  function() {
	  	$(this).css('display', 'block'); 
	  	$('.menuItem[name="smart-4"').addClass('active'); 
	  }, function() {
	    $(this).css('display', 'none'); 
	    $('.menuItem[name="smart-4"').removeClass('active'); 
	  }
	);	
	$('.subMenu[name="smart-5"]').hover(
	  function() {
	  	$(this).css('display', 'block'); 
	  	$('.menuItem[name="smart-5"').addClass('active');
	  	$('.menuItem[name="smart-5"').css({
	  		'border-top': '3px solid #ff8301'
	  	});	  	
	  }, function() {
	    $(this).css('display', 'none'); 
	    $('.menuItem[name="smart-5"').removeClass('active'); 
	  	$('.menuItem[name="smart-5"').css({
	  		'border-top': 'none',
	  		'border-right': 'none'
	  	});	    
	  }
	);	
	// menu 
		$('.sandwich-wrapper').click(function(){
			$('.mobile-menu').show();
			$('body').css('overflow', 'hidden');
		})
		$('.close').click(function(){
			$('.mobile-menu').hide();
			$('body').css('overflow', 'auto');
		})	
		$('.mobile-menu button').click(function(){
			$('.mobile-menu').hide();
			$('body').css('overflow', 'auto');
		})	
	
	//compare 
	// $('main.compare section.categories .category').click(function(){
	// 	$(this).toggleClass('orange-border');
	// })
	
	$('header .headerTop .logIn').click(function() {
			$('#header-form').toggleClass('bl');
			$('#header-email').focus();

	  }
	);

	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $('#header-form');
		var div_2 = $('header .headerTop .logIn');
		if ($('#header-form').hasClass('bl')) {
			if (!div.is(e.target) // если клик был не по нашему блоку
			    && div.has(e.target).length === 0 
			    && !div_2.is(e.target)) { // и не по ссылке открытия
				$('#header-form').removeClass('bl');
			}
		}
	});

	$(document).keyup(function(e) {
	     if (e.keyCode == 27) { // escape key maps to keycode `27`
		     if ($('#header-form').hasClass('bl')) {
					$('#header-form').removeClass('bl');
			 }
	    }
	});	

	// owl-carousel

  $('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:0,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        768:{
	            items:2,
	            nav:false
	        },
	        1200:{
	            items:3,
	            nav:true,
	            loop:false
	        }
	    }
	})


  // scroll 

  smoothScroll.init();

  //wow 

	new WOW().init();
	
	wow_2 = new WOW({
		boxClass:     'wow_2',      // default
		animateClass: 'ov_h', // default
    })
	
	wow_2.init();


	// wripple 


	var ink, d, x, y;
	$(".ripplelink").mouseenter(function(e){
    if($(this).find(".ink").length === 0){
        $(this).prepend("<span class='ink'></span>");
    }
         
    ink = $(this).find(".ink");
    ink.removeClass("animate");
     
    if(!ink.height() && !ink.width()){
        d = Math.max($(this).outerWidth(), $(this).outerHeight());
        ink.css({height: d, width: d});
    }
     
    x = e.pageX - $(this).offset().left - ink.width()/2;
    y = e.pageY - $(this).offset().top - ink.height()/2;
     
    ink.css({top: y+'px', left: x+'px'}).addClass("animate");

	});
	
$( 'main.homepage section.for-all .under' ).hover(
  function() {
    $( this ).addClass( "opacity" );
  }, function() {
    $( this ).removeClass( "opacity" );
  }
);	

// styler

	

 var _dropdown;
 var settings = {
 	autoReinitialise: true
 };

 $('input').styler();
 $('select').styler({
	 selectSearch: true,
	 onFormStyled: function(){
		 _dropdown = $('.jq-selectbox__dropdown');
		 _dropdown.find('ul').wrap('<div class="scroll-pane" />');
	 },
	 onSelectOpened: function(){
		 var _ul = $(this).find('.jq-selectbox__dropdown ul');
		 var height = _ul.height();
		 var _srollPane = _dropdown.find('.scroll-pane');
		 _srollPane.height(height);
		 _ul.css('max-height', 'none');
		 _srollPane.jScrollPane(settings);
 	}
 });


    // Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {};
    
// cart 

	$('main.dealer .tabl table tr td .q a').click(function(){
		event.preventDefault();
		var minus = parseInt($(this).next().html());
		if ((Math.sign(minus) == 1)) {
			$(this).next().html(minus-1);
		}
	})
	$('main.dealer .tabl table tr td .q a').click(function(){
		event.preventDefault();
		var plus = parseInt($(this).prev().html());
		$(this).prev().html(plus+1);
	})

	$('main.cart table tr td .q a').click(function(){
		event.preventDefault();
		var minus = parseInt($(this).next().html());
		if ((Math.sign(minus) == 1 && (minus != 1))) {
			$(this).next().html(minus-1);
		}
	})
	$('main.cart table tr td .q a').click(function(){
		event.preventDefault();
		var plus = parseInt($(this).prev().html());
		$(this).prev().html(plus+1);
	})

 

});	