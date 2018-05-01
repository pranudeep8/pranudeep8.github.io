		$(window).scroll(function() {
	  if ($(document).scrollTop() > 150) {
		$('nav').addClass('shrink4');
		$('nav').removeClass('shrink1');
		$('nav').removeClass('shrink2');
		$('nav').removeClass('shrink3');
	  } else if ($(document).scrollTop() > 100){
		$('nav').addClass('shrink3');
		$('nav').removeClass('shrink1');
		$('nav').removeClass('shrink2');
		$('nav').removeClass('shrink4');
	  }else if ($(document).scrollTop() > 50){
		$('nav').addClass('shrink2');
		$('nav').removeClass('shrink1');
		$('nav').removeClass('shrink4');
		$('nav').removeClass('shrink3');
	  }else if ($(document).scrollTop() > 25){
		$('nav').addClass('shrink1');
		$('nav').removeClass('shrink4');
		$('nav').removeClass('shrink2');
		$('nav').removeClass('shrink3');
	  }else {
		$('nav').removeClass('shrink1');
		$('nav').removeClass('shrink2');
		$('nav').removeClass('shrink3');
		$('nav').removeClass('shrink4');
	  }
	});