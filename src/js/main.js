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

	
});	