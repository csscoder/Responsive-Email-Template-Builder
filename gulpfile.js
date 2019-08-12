const { src, dest, parallel, watch, series } = require('gulp');
const gulpif = require('gulp-if');
const fileinclude = require('gulp-file-include');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const inliner = require('gulp-inline-css');
const replace = require('gulp-replace');
const mqpacker = require('css-mqpacker');
const gulpSCSS = require('gulp-sass');
const postcssGulp = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const beautify = require('gulp-jsbeautifier');
const del = require('del');
const pug = require('gulp-pug');
const clearingHTML = require('gulp-email-remove-unused-css');
const vftp = require('vinyl-ftp');
const fs = require('fs');

const PRODUCTION = process.env.NODE_ENV === 'production';
const config = require('./src/config');
const pkg = require('./package.json');

const Browser = require('browser-sync');
const browser = Browser.create();

// Start SCSS
// ******************************************
{
  function scss() {
    return src(['./src/scss/styles.scss'])
      .pipe(gulpSCSS())
      .pipe(postcssGulp([autoprefixer(), mqpacker()]))
      .pipe(dest('./build'))
      .pipe(gulpif(!PRODUCTION, browser.stream()));
  }

  exports.scss = scss;
  // END SCSS
  // ******************************************
}

// Start server
// ******************************************
{
  function server() {
    let config = {
      server: {
        ghostMode: false,
        baseDir: './build',
        serveStaticOptions: {
          extensions: ['html']
        }
      },
      injectChanges: true,
      serveStatic: ['build'],
      port: 7777,
      browser: 'google chrome'
    };
    browser.init(config);
  }

  exports.server = server;
}
// End server
// ******************************************

// Copy static
// ******************************************
{
  function copyStatic() {
    return src('./src/static/**/*').pipe(dest('./build'));
  }

  exports.copyStatic = copyStatic;
}
// End Copy static
// ******************************************

// Start HTML
// ******************************************
{
  function html() {
    return src('./src/template/*.pug')
      .pipe(
        gulpif(
          !PRODUCTION,
          pug(),
          pug({
            data: {
              final: true
            }
          })
        )
      )
      .pipe(dest('./build'));
  }

  exports.html = html;
}
// End HTML
// ******************************************

// Start inline styles
// ******************************************
{
  function inlineStyle() {
    return src(['./build/*.html'])
      .pipe(
        fileinclude({
          prefix: '@@',
          basepath: '@file'
        })
      )
      .pipe(
        inliner({
          preserveMediaQueries: true
        })
      )
      .pipe(
        clearingHTML({
          whitelist: [
            '.ExternalClass',
            '.ReadMsgBody',
            '.yshortcuts',
            '.Mso*',
            '.maxwidth-apple-mail-fix',
            '#outlook',
            '.module-*'
          ]
        })
      )
      .pipe(
        gulpif(
          config.minifyResultHtml,
          htmlmin({ collapseWhitespace: true, minifyCSS: true }),
          beautify({
            indent_char: '\t',
            indent_size: 1,
            max_preserve_newlines: 0
          })
        )
      )
      .pipe(
        gulpif(!!config.urlImageHost, replace(/img\//g, config.urlImageHost))
      )
      .pipe(
        fileinclude({
          prefix: '##',
          basepath: '@file'
        })
      )
      .pipe(
        rename({
          suffix: '-inline'
        })
      )
      .pipe(dest('./build'));
  }

  exports.inlineStyle = inlineStyle;
}
// End inline styles
// ******************************************

// Watch
// ******************************************
{
  if (!PRODUCTION) {
    watch(
      ['./src/scss/**/*.scss'],
      { events: ['change', 'add'], delay: 100 },
      scss
    );

    watch(['./src/**/*.pug'], { events: ['change', 'add'], delay: 100 }, html);

    watch(['./build/*.html']).on('change', () => browser.reload());
  }
}
// End Watch
// ******************************************

// Start clear directory
// ******************************************
{
  function clearBuildDir() {
    return del(['./build/**/*']);
  }

  exports.clearBuildDir = clearBuildDir;

  function clearTempFiles() {
    const arrayDel = [
      './build/*.html',
      '!./build/*-inline.html',
      './build/*.css'
    ];
    return del(arrayDel);
  }

  exports.clearTempFiles = clearTempFiles;
}
// End clear directory
// ******************************************

// Upload images to ftp server
// ******************************************
{
  function ftp(cb) {
    fs.access('./.ftppass.json', function(error) {
      const ftpPass = error
        ? require('./.ftppass-temp.json')
        : require('./.ftppass.json');

      const configFTP = {
        host: ftpPass.host,
        user: ftpPass.auth.user,
        pass: ftpPass.auth.pass,
        port: ftpPass.port,
        parallel: 1,
        remotePath: `${ftpPass.remotePath}/${pkg.name}/`
      };
      const gulpFTP = vftp.create(configFTP);
      src('./build/**', { buffer: false })
        .pipe(gulpFTP.dest(configFTP.remotePath))
        .on('end', function() {
          console.log(`Upload done - ${config.urlImageHost}`);
          cb();
        });
    });
  }

  exports.ftp = ftp;
}
// End Upload images to ftp server
// ******************************************

// Complex tasks
// ******************************************
exports.default = series(parallel(html, scss, copyStatic), server);
exports.build = series(
  clearBuildDir,
  parallel(html, scss, copyStatic),
  inlineStyle,
  clearTempFiles
);
