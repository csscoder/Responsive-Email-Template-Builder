// pkg  - is GLOBAL
var gulp = require('gulp');
const sftp = require('gulp-sftp');
const access = require('../../access-ftp.json');
var config  = require('../config');
var pkg = require('../../package.json');

gulp.task('ftp', function () {
    return gulp.src('./build/**/*')
        .pipe(sftp({
            host: access.host,
            port: access.port,
            user: access.user,
            pass: access.pass,
            remotePath: access.rootPath + pkg.name
        }))
        .on('finish', function () {
            console.log(access.site + pkg.name + '/');
        });
});
