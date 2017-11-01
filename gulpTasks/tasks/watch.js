var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['scss','pug','browserSync'], function () {
	gulp.watch(config.scss.watch, ['scss']);
	gulp.watch(config.pug.watch, ['pug']);
});
