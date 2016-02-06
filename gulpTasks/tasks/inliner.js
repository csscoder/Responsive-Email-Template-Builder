// pkg GLOBAL
var gulp = require('gulp');
var config  = require('../config').inliner;
var replace = require('gulp-replace');
var inlineCss = require('gulp-inline-css');
var access = require('../../.access.json').ftp;

var linkSite = access.site + '/emails/' + pkg.name + '/img/';

gulp.task('inliner', function () {
	return gulp.src(config.src)
		.pipe(inlineCss({
			preserveMediaQueries: true
		}))
		.pipe(replace(/(st-[a-zA-Z-]*\d*\s?)|(p\S?\d\d?\d?\s?)/g, ''))
		.pipe(replace(/\s(class="")/g, ''))
		.pipe(replace(/img\//g, linkSite))
		.pipe(gulp.dest(config.dest));
});
