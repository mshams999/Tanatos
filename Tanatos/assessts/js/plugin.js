/*global $,alert,console */

$(function () {
	
	'use strict';
	/* trigger nice scroll */
	
	$("html").niceScroll();
	
	/* resize */
	
	var header = $(".header"),
		
		leftArrow = $(".testim .fa-chevron-left"),
		
		rightArrow = $(".testim .fa-chevron-right");
		
		
		
		
	
	header.height($(window).height());
	
	$(window).resize(function () {
		
		header.height($(window).height());
		
		$(".intro").each(function () {
		
			$(this).css('padding-top', ($(window).height() - $(".intro").height()) / 2);
		
		});
		
		
		
	});
	

		
	/* centering an intro */
	
	$(".intro").each(function () {
		
		$(this).css('padding-top', ($(window).height() - $(".intro").height()) / 2 - 20);
		
	});
	
	/* smooth scroll to features */
	
	$(".header .arrow i").click(function () {
		
		$("html,body").animate({
			
			scrollTop: $(".features").offset().top
			
		}, 600);
		
	});
	
	/* scroll top*/
	
	
	
	$(window).scroll(function () {
		
		if ($(this).scrollTop() >= $(".subscripe").offset().top) {
			
			$(".scroll-btn").show();
			
		} else {
			
			$(".scroll-btn").hide();
			
		}
		
	});
	
	$(".scroll-btn").click(function () {
		
		$("html,body").animate({
			
			scrollTop: 0
			
		});
		
	});

	/* show more button */
	
	$(".show-more").click(function () {
		
		$(".hidden").fadeIn(1000);
		
		$(this).hide();
		
		$(".items-box").css('margin-bottom', '0');
		
		
		 
	});
	
	/* testim */
	/* check function for the buttons */
	
	function checkClients() {
		
		$(".client:first").hasClass('active') ? leftArrow.fadeOut(1) : leftArrow.fadeIn();
		
		$(".client:last").hasClass('active') ? rightArrow.fadeOut(1) : rightArrow.fadeIn();
		
	}
	
	checkClients();
	
	/* the core */
	
	$(".testim i").click(function () {
		
		if ($(this).hasClass('fa-chevron-right')) {
			
			$(".testim .active").fadeOut(600, function () {
				$(this).removeClass('active').next('.client').fadeIn(600).addClass('active');
				
				checkClients();
				
			});
			
		} else {
			
			$(".testim .active").fadeOut(600, function () {
				$(this).removeClass('active').prev('.client').addClass('active').fadeIn(600);
				
				checkClients();
				
			});
			
		}

	});
	
	/* maxtext for textarea */

	var maxText = $("textarea").attr("maxLength");

	$("textarea").keyup(function () {
		
		var textLength = $("textarea").val().length,
			
			remainingCharacters = maxText - textLength;
				
		$(".message").html('<span>' + remainingCharacters + ' remaining characters</span>');
		
	});
	
	/* spinner */
	
	$(window).on('load', function () {
		
		$(".spinner").fadeOut(1000);
		
	});

});