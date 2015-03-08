(function(window, $, undefined) {

	$(function() {
				
		// Set up an event listener for menu screen transitions
		// Parent element wraps the hamburger menu's pseudo-elements
		$('.ss-nav-menu-toggle').parent().on('mouseup', function(e) {
			$('.ss-nav-menu').toggleClass('expanded');
		});

		// ScrollIt
		$.scrollIt({
			easing: 'linear',
			scrollTime: 500,
			activeClass: 'active',
			topOffset: -68
		});

		// Letter-grid (dynamic position)

		var logo = $('#logo');
		var grid = $('section#branding').find('.letter-grid');

		function onResizeWindow(e) {

			var o = logo.offset();

			grid.css({
				'left': o.left - 242,
				'top': o.top - 187
			});

		}


		$(window).on('resize', onResizeWindow);

		onResizeWindow();

	});

})(window, jQuery);
