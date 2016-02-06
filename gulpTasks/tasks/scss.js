var gulp = require('gulp');
var scss = require('gulp-sass');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var configSCSS = require('../config').scss;

gulp.task('scss', function () {
	gulp.src(configSCSS.src)
		.pipe(plumber({
			errorHandler: function (err) {
				console.log(err);
			}
		}))
		.pipe(scss())
		.pipe(gulp.dest(configSCSS.dest))
		.pipe(browserSync.reload({stream: true}));
});
