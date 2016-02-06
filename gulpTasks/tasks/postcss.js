var gulp = require('gulp');
var postcss = require('gulp-postcss');
var plumber = require('gulp-plumber');
var configCSS  = require('../config').css;
var mqpacker = require('css-mqpacker');
var scss = require('gulp-sass');
var configSCSS = require('../config').scss;

gulp.task('postcss', function () {
	return gulp.src(configSCSS.src)
		.pipe(plumber({errorHandler: function (err) { console.log(err); }}))
		.pipe(scss())
		.pipe(postcss([
				mqpacker({
					to: 'to.css'
				})
			]))
		.pipe(gulp.dest(configCSS.dest));
});

