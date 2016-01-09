//var gulp = require('gulp');
//var config  = require('../config');
//var sendmail = require('gulp-mailgun');
//var access = require('../../.access.json').mailGun;
//
//gulp.task('send-mail', function () {
//	return gulp.src(config.build + '/index.html')
//		.pipe(
//				sendmail({
//					key: access.key,
//					sender: access.sender,
//					recipient: access.senderMail,
//					subject: 'Test mail'
//				})
//		);
//});
//
//gulp.task('send-mail-web', function () {
//	return gulp.src(config.build + '/index.html')
//		.pipe(
//				sendmail({
//					key: access.key,
//					sender: access.sender,
//					recipient: access.senderMailWeb,
//					subject: 'Test mail'
//				})
//		);
//});
