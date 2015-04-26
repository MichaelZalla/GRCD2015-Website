module.exports = {
	
	grunt: { files: ['Gruntfile.js'] },
	
	copy: {
		files: ['src/**'],
		tasks: ['concat', /*'uglify',*/ 'copy']
	},
	
	sass: {
		files: 'src/scss/**/*.scss',
		tasks: ['sass'],
		livereload: true
	},

};
