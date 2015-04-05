module.exports = {
	
	grunt: { files: ['Gruntfile.js'] },
	
	copy: {
		files: ['src/**'],
		tasks: ['concat', 'copy']
	},
	
	sass: {
		files: 'src/scss/**/*.scss',
		tasks: ['sass'],
		livereload: true
	},

};
