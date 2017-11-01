var gulp = require('gulp');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var config = require('../config').pug;
var pug = require('gulp-pug');

gulp.task('pug', function () {
	return gulp.src(config.src)
		.pipe(plumber({
			errorHandler: function (err) {
				console.log(err);
			}
		}))
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest(config.dest))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('pug-final', function () {
	return gulp.src(config.src)
		.pipe(pug({
			pretty: true,
			data: {
				final: true
			}
		}))
		.pipe(gulp.dest(config.dest));
});
