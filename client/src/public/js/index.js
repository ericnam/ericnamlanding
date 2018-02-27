import $ from 'jquery';

$(document).ready(function() {
	$(window).scroll(function() {
		var menu_pos = $('.navbar').offset().top;
		var work_pos = $('.work').offset().top;

		if ((menu_pos + 67) > work_pos){
			$('.navbar').addClass('transparent');
		} else {
			$('.navbar').removeClass('transparent');
		}

		if (menu_pos + 50 > work_pos){
			$('.navbar').addClass('work-color');
		}else {
			$('.navbar').removeClass('work-color');
		}

		if (menu_pos - 10 > work_pos){
			$('.navbar').addClass('work-section');
		}else {
			$('.navbar').removeClass('work-section');
		}
	});

});