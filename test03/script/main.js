$(function() {
	var 	open_menu   = $('#open-menu');
	close_menu 	= $('#close-menu');
	header		= $('#header-mob');
	main_menu  	= $('.main-menu-mob');
	menu_more	= $('.menu-more');
	parent_m_1	= $('#parent-1');
	sub_m_1		= $('#sub-1');
	prev_menu	= $('.previous-menu');

	$(open_menu).on('click', function() {
		$(header).hide();
		$(main_menu).show();  
	});

	$(close_menu).on('click', function() {
		$(header).show();
		$(main_menu).hide();
	});

	$(window).resize(function() {
		if ($(window).width() > 768) {
			$(header).hide();
			$(main_menu).hide();
		}
		else {
			$(header).show();
		}
	});

	$(parent_m_1).on('click', function() {
		$(main_menu).hide();
		$(sub_m_1).show();  
	});

	$(prev_menu).on('click', function() {
		$(main_menu).show();
		$(sub_m_1).hide();
	});
});