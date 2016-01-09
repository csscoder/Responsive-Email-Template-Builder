var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['scss','jade','browserSync'], function () {
	gulp.watch(config.scss.watch, ['scss']);
	gulp.watch(config.jade.watch, ['jade']);
});
