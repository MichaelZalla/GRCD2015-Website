module.exports = {
	
	options: {
		// Helps Sass task resolve Foundation dependencies
		loadPath: 'bower_components/foundation/scss',
		style: 'compressed',
		quiet: true
	},

	dist: { files: {
		'dist/css/grcd.min.css': 'src/scss/main.scss'
	}}
	
};
