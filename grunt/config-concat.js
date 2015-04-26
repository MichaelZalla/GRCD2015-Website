module.exports = {

	jquery: {
		files: {
			// jquery.min.js
			'dist/js/vendor/jquery/jquery.min.js':
				['bower_components/jquery/dist/jquery.min.js'],
			// jquery.min.map
			'dist/js/vendor/jquery/jquery.min.map':
				['bower_components/jquery/dist/jquery.min.map']
		}
	},

	waypoint: {
		files: {
			// jquery-waypoints.min.js
			'dist/js/vendor/waypoints/waypoints.min.js':
				['bower_components/waypoints/lib/noframework.waypoints.min.js']
		}
	},
	
	scrollit: {
		files: {
			// jquery-scrollIt.min.js
			'dist/js/vendor/jquery/plugins/jquery-scrollIt.min.js':
				['bower_components/ScrollIt/scrollIt.min.js']
		}
	},

	buggyfill: {
		files: {
			// viewport-units-buggyfill.js
			'dist/js/vendor/buggyfill/viewport-units-buggyfill.js':
				['bower_components/viewport-units-buggyfill/viewport-units-buggyfill.js']
		}
	},

	angular: {
		files: {
			// angular.js
			'dist/js/vendor/angular/angular.min.js':
				['bower_components/angular/angular.min.js'],
			'dist/js/vendor/angular/angular.min.map':
				['bower_components/angular/angular.map'],
			// angular-route.min.js
			'dist/js/vendor/angular/angular-route.min.js':
				['bower_components/angular-route/angular-route.min.js'],
			'dist/js/vendor/angular/angular-route.min.js.map':
				['bower_components/angular-route/angular-route.min.js.map']
		}
	},

	app: {
		files: {
			'dist/js/app.js': [
				'src/js/modules/module-services.js',
				'src/js/services/*',
				'src/js/modules/module-app.js',
				'src/js/controllers/*',
				'src/js/directives/*',
				'src/js/routes/*',
				'src/js/run.js'
			]
		}
	}
	
};
