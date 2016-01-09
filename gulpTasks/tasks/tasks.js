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
		['jade-final','scss','images'],
		'postcss',
		'include-style',
		'inliner',
		'include-style-html',
		'ftp',
		cb
	);
});

//
//// Final task (send)
//gulp.task('send', function (cb) {
//	runSequence(
//		['jade-final','postcss','images'],
//		'include-style',
//		'inliner',
//		'include-style-html',
//		'send-mail',
//		cb
//	);
//});
//
//// Final task (sendWEB)
//gulp.task('send-web', function (cb) {
//	runSequence(
//		['jade-final','postcss','images'],
//		'include-style',
//		'inliner',
//		'include-style-html',
//		'send-mail-web',
//		cb
//	);
//});
