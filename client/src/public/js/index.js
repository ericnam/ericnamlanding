import $ from 'jquery';

$(document).ready(function() {
	$('.main-button').on('click', function() {
		if ($('.left-bar').hasClass('collapsed')){
			$('.left-bar').removeClass('collapsed');
		}else {
			$('.left-bar').addClass('collapsed');
		}

	});

	// $(window).scroll(function() {
	// 	var menu_pos = $('.navbar').offset().top;
	// 	var work_pos = $('.work').offset().top;

	// 	if ((menu_pos + 77) > work_pos){
	// 		$('.navbar-bar').addClass('transparent');
	// 		$('.navbar').addClass('transparent');
	// 	} else {
	// 		$('.navbar-bar').removeClass('transparent');
	// 		$('.navbar').removeClass('transparent');
	// 	}

	// 	if (menu_pos + 50 > work_pos){
	// 		$('.navbar').addClass('work-color');
	// 		//$('.navbar .title .work-title').addClass('visible');
	// 	}else {
	// 		$('.navbar').removeClass('work-color');
	// 		//$('.navbar .title .work-title').removeClass('visible');
	// 	}

	// 	if (menu_pos - 10 > work_pos){
	// 		$('.navbar-bar').addClass('work-section');
	// 		$('.navbar').addClass('work-section');
	// 	}else {
	// 		$('.navbar-bar').removeClass('work-section');
	// 		$('.navbar').removeClass('work-section');
	// 	}
	// });

});
