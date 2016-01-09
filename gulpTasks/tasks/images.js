var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var newer = require('gulp-newer');
var config = require('../config').images;


gulp.task('images', function () {
	return gulp.src(config.src)
		.pipe(newer(config.dest))
		.pipe(imagemin({progressive: true}))
		.pipe(gulp.dest(config.dest));
});
