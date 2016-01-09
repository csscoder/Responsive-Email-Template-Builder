var gulp = require('gulp');
var scss = require('gulp-sass');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var config = require('../config').scss;

gulp.task('scss', function () {
	gulp.src(config.src)
		.pipe(plumber({
			errorHandler: function (err) {
				console.log(err);
			}
		}))
		.pipe(scss())
		.pipe(gulp.dest(config.dest))
		.pipe(browserSync.reload({stream: true}));
});