var build = './build';
var src = './source';

module.exports = {

	build: build,
	src: src,

	scss: {
		src: [src + '/scss/styles.scss'],
		watch: [src + '/scss/**/*.scss'],
		dest: build
	},

	css: {
		src: [build + '/styles.css'],
		dest: build
	},

	browserSync: {
		server: {
			baseDir: build
		},
		port: 7777,
		browser: 'google chrome'
	},

	inliner: {
		src: build + '/index.html',
		dest: build
	},

	includeStyle: {
		src: build + '/index.html',
		dest: build
	},

	images: {
		src: src + '/img/**/*',
		dest: build + '/img'
	},

	jade: {
		src: [
			src + '/jade/*.jade',
			'!' + src + '/jade/**/_*.jade'
		],
		watch: [src + '/jade/*.jade'],
		dest: build
	},

	tests: {
		html: [build + '/*.html'],
		css: [build + '/*.css'],
		img: [build + '/img/**/*']
	}

};
