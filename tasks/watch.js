var gulp      = require('gulp');
var connect   = require('gulp-connect');
var gulpWatch = require('gulp-watch');

function watch() {
  gulpWatch('styles/**/*.scss').pipe(connect.reload());
  gulpWatch('templates/**/*.html').pipe(connect.reload());
  gulpWatch('scripts/**/*.js').pipe(connect.reload());
}

module.exports = watch;
