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
		
		// Project preview wallapper (dynamic position)

		var projectPreview = $('.project-preview')
		var projectPreviewImage = projectPreview.find('.preview-image');

		function onResizeWindow(e) {

			var lo = logo.offset(),
				po = projectPreviewImage.offset();

			grid.css({
				'left': lo.left - 274,
				'top': lo.top - 210
			});

			projectPreview.css({
				'background-position-x': po.left
			});

		}

		$(window).on('resize', onResizeWindow);
		
		onResizeWindow();

	});

})(window, jQuery);
