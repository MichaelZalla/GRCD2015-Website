(function(window, $, undefined) {

	var students = {
		"abc": {
			"firstName": "Christopher",
			"lastName": "Wells"
		},
		"def": {
			"firstName": "Audrey",
			"lastName": "Koopman"
		},
		"ghi": {
			"firstName": "Elizabeth",
			"lastName": "Freeman"
		},
		"jkl": {
			"firstName": "Ayan",
			"lastName": "Daniels"
		}
	};

	var projects = {
		"abc": {
			"title": "No One At The Wheel",
			"subtitle": "Google Scroogle in Me Mums",
			"detail": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque."
		},
		"def": {
			"title": "Ringer",
			"subtitle": "Learn About Sports, Ya Jabroni",
			"detail": "Aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae."
		},
		"ghi": {
			"title": "Postshare Project",
			"subtitle": "Something Something Anonymous",
			"detail": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."
		}
	};

	$(function() {

		var container = $('.project-preview');

		var previewUI = {
			title: 		container.find('.project-title'),
			subtitle: 	container.find('.project-subtitle'),
			detail: 	container.find('.project-detail'),
			students: 	container.find('.project-students'),
			headshot: 	container.find('.project-headshot')
		};

		var fadeSpeed = 400;

		function onStudentHover(e) {

			var id = $($(e.target)).attr('data-sixPlusTwo');

			container.animate({ 'opacity': 0 }, fadeSpeed, function() {

				var wallpaper = new Image();
					wallpaper.addEventListener('load', function(e) {
						updatePreview(id);
						container.animate({ 'opacity': 1 }, fadeSpeed);
					});
				
				wallpaper.src = 'images/preview/' + id + '.png';

			});

		}

		function updatePreview(id) {
			
			container.css({ 'background-image': 'url(\'images/preview/' + id + '.png\')' });

			previewUI.title.html(projects[id].title);
			previewUI.subtitle.html(projects[id].subtitle);
			previewUI.detail.html(projects[id].detail);

			var s 			= students[id];
			var studentName = s.firstName + " " + s.lastName;
			var studentItem = $('<li>').append($('<span class="label large">').html(studentName));

			previewUI.students.empty().append(studentItem);

			var src = "images/headshot/" + id + ".png";

			previewUI.headshot.attr("src", src);

		}

		$('.project-select').find('.student a').on('mouseover', onStudentHover);

	});

})(window, jQuery);
