module.exports = {
	options: {
    	// banner: '/*! app <%= grunt.template.today("dd-mm-yyyy") %> */\n'
  	},
  	app: {
    	files: {
      		'dist/js/app.min.js': ['dist/js/app.js']
    	}
  	}
};
