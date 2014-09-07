'use strict';

var gulp = require('gulp');

gulp.task('scripts',   require('./tasks/scripts'));
gulp.task('serve',     require('./tasks/serve'));
gulp.task('styles',    require('./tasks/styles'));
gulp.task('templates', require('./tasks/templates'));
gulp.task('watch',     require('./tasks/watch'));

gulp.task('build',   ['styles', 'scripts', 'templates']);
gulp.task('default', ['build', 'watch', 'serve']);
