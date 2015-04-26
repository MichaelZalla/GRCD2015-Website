module.exports = function(grunt) {

	grunt.initConfig({

		// Allows for referencing the package property values
		pkg: grunt.file.readJSON('package.json'),

		bower: 	require('./grunt/config-bower.js'),
		copy: 	require('./grunt/config-copy.js'),
		concat: require('./grunt/config-concat.js'),
		uglify: require('./grunt/config-uglify.js'),
		sass: 	require('./grunt/config-sass.js'),
		watch: 	require('./grunt/config-watch.js')

	});

	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', ['bower:install', 'copy', 'concat', 'uglify', 'sass']);
	grunt.registerTask('default', ['watch']);

};
