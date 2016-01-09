var gulp = require('gulp');
var del = require('del');
var config  = require('../config');

gulp.task('clear', function (cb) {
	del([config.build], cb);
});
