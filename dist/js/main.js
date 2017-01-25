$(document).ready(function() {

	$('.footer-menu').masonry({
	  itemSelector: 'li'
	});

	
	$('.menuItem[name="smart-1"').hover(
	  function() {
	  	$('.subMenu[name="smart-1"]').css('opacity', '1');  
	  }, function() {
	    $('.subMenu[name="smart-1"]').css('opacity', '0');  
	  }
	);

	$('.menuItem[name="smart-2"').hover(
	  function() {
	  	$('.subMenu[name="smart-2"]').css('opacity', '1');  
	  }, function() {
	    $('.subMenu[name="smart-2"]').css('opacity', '0');  
	  }
	);

	$('.menuItem[name="smart-3"').hover(
	  function() {
	  	$('.subMenu[name="smart-3"]').css('opacity', '1');  
	  }, function() {
	    $('.subMenu[name="smart-3"]').css('opacity', '0');  
	  }
	);

	$('.menuItem[name="smart-4"').hover(
	  function() {
	  	$('.subMenu[name="smart-4"]').css('opacity', '1');  
	  }, function() {
	    $('.subMenu[name="smart-4"]').css('opacity', '0');  
	  }
	);

	$('.menuItem[name="smart-5"').hover(
	  function() {
	  	$('.subMenu[name="smart-5"]').css('opacity', '1');  
	  }, function() {
	    $('.subMenu[name="smart-5"]').css('opacity', '0');  
	  }
	);				

});	