(function(window, $, undefined) {

	$(function() {
				
		// Set up an event listener for menu screen transitions
		// Parent element wraps the hamburger menu's pseudo-elements
		$('.ss-nav-menu-toggle').parent().on('mouseup', function(e) {
			$('.ss-nav-menu').toggleClass('expanded');
		});

		// ScrollIt
		$.scrollIt({
			easing: 'swing',
			scrollTime: 1095,
			activeClass: 'active'
			// ,topOffset: -68
		});

		// Letter-grid (dynamic position)

		var logo = $('#branding').find('.logo');
		var grid = $('#branding').find('.letter-grid');

		function onResizeWindow(e) {

			var o = logo.offset();

			grid.css({
				'left': o.left - 274,
				'top': o.top - 210
				// 'left': o.left - 220,
				// 'top': o.top - 240
			});

		}


		$(window).on('resize', onResizeWindow);

		onResizeWindow();

	});

})(window, jQuery);
