var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
var config  = require('../config').includeStyle;

gulp.task('include-style', function () {
	return gulp.src(config.src)
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(gulp.dest(config.dest));
});

gulp.task('include-style-html', function () {
	return gulp.src(config.src)
		.pipe(fileinclude({
			prefix: '##',
			basepath: '@file'
		}))
		.pipe(gulp.dest(config.dest));
});

