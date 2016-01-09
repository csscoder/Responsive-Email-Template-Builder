var requireDir = require('require-dir');
GLOBAL.pkg = require('./package.json');

requireDir('./gulpTasks', {recurse: true});
