var requireDir = require('require-dir');
global.pkg = require('./package.json');

requireDir('./gulpTasks', {recurse: true});
