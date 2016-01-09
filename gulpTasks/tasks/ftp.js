// pkg  - is GLOBAL
var gulp = require('gulp');
var ftp = require('gulp-ftp');
var access = require('../../.access.json').ftp;
var config  = require('../config');

gulp.task('ftp', function (cb) {
	return gulp.src(['./build/**/*'])
		.pipe(ftp({
			host: access.host,
			user: access.user,
			pass: access.pass,
			remotePath: '/emails/' + pkg.name + '_' + pkg.version + '/'
		}))
		.on('finish', function () {
			console.log(access.site + '/emails/' + pkg.name + '_' + pkg.version + '/index.html');
		});
});
