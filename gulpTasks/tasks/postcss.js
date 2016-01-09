var gulp = require('gulp');
var postcss = require('gulp-postcss');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var config  = require('../config').css;
var mqpacker = require('css-mqpacker');

gulp.task('postcss', function () {
	return gulp.src(config.src)
		.pipe(plumber({errorHandler: function (err) { console.log(err); }}))
		.pipe(postcss([
			mqpacker()
			]))
		.pipe(gulp.dest(config.dest));
});
