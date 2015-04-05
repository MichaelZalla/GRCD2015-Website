(function(window, $, undefined) {

	$(function() {
				
		// Set up an event listener for menu screen transitions
		// Parent element wraps the hamburger menu's pseudo-elements
		$('.ss-header-navigation-toggle').parent().on('mouseup', function(e) {
			$('.ss-header-navigation').toggleClass('expanded');
		});

		// ScrollIt
		$.scrollIt({
			easing: 'swing',
			scrollTime: 850,
			activeClass: 'active',
			topOffset: -1 * $('#header').outerHeight()
		});

		// Letter-grid (dynamic position)

		var logo = $('#branding').find('.logo');
		var grid = $('#branding').find('.letter-grid');

		function onResizeWindow(e) {

			var lo = logo.offset();

			grid.css({
				'left': lo.left - 245,
				'top': lo.top - 240
			});

		}

		$(window).on('resize', onResizeWindow);
		
		onResizeWindow();

	});

})(window, jQuery);
