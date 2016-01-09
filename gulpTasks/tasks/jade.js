var gulp = require('gulp');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var config = require('../config').jade;
var jade = require('gulp-jade');

gulp.task('jade', function () {
	return gulp.src(config.src)
		.pipe(plumber({
			errorHandler: function (err) {
				console.log(err);
			}
		}))
		.pipe(jade({
			pretty: false
		}))
		.pipe(gulp.dest(config.dest))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('jade-final', function () {
	return gulp.src(config.src)
		.pipe(jade({
			pretty: false,
			data: {
				final: true
			}
		}))
		.pipe(gulp.dest(config.dest));
});
