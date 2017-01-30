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
	  }, function() {
	    $(this).css('display', 'none');  
	    $('.menuItem[name="smart-1"').removeClass('active');
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
	  }, function() {
	    $(this).css('display', 'none'); 
	    $('.menuItem[name="smart-5"').removeClass('active'); 
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
	$('main.compare section.categories .category').click(function(){
		$(this).toggleClass('orange-border');
	})
	
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
});	