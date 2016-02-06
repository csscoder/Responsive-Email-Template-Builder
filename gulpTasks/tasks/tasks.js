var gulp = require('gulp');
var runSequence = require('run-sequence');

// Default task
gulp.task('default', function (cb) {
	runSequence(
		['jade', 'images', 'scss', 'watch'],
		cb
	);
});

// Final task (ftp upload, inliner)
gulp.task('final', function (cb) {
	runSequence(
		['jade-final','images'],
		'postcss',
		'include-style',
		'inliner',
		'include-style-html',
		'ftp',
		cb
	);
});
