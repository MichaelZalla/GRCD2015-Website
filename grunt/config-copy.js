module.exports = {
	dist: {
		files: [

			// Make all targets in 'src' directory copy to a location in
			// 'dist' relative to own directory
								
			{	// html
				expand: true,
				flatten: false,
				cwd: 'src/',
				src: ['**/*.html'],
				dest: 'dist'
			},
			{	// favicon
				expand: true,
				flatten: false,
				cwd: 'src/',
				src: ['*.png', '*.ico'],
				dest: 'dist'
			},
			{	// first-party scripts
				expand: true,
				flatten: false,
				cwd: 'src/js/',
				// certain angular dependencies should be uniquely
				// addressable as files inside of 'dist' (don't concat)
				src: ['data/*', 'templates/*', ],
				dest: 'dist/js'
			},
			{	// images
				expand: true,
				flatten: false,
				cwd: 'src/images/',
				src: ['**/*'],
				dest: 'dist/images'
			},
			{
				// fonts
				expand: true,
				flatten: false,
				cwd: 'src/fonts/',
				src: ['**'],
				dest: 'dist/fonts'
			}
		]
	}
};
