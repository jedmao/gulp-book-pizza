var gulp       = require('gulp');
var browserify = require('browserify');
var buffer     = require('vinyl-buffer');
var source     = require('vinyl-source-stream');
var uglify     = require('gulp-uglify');

function scripts() {

  var bundler = browserify('./scripts/main.js');

  var bundle = function() {
    return bundler
      .bundle()
      .pipe(source('scripts.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest('dist'));
  };

  return bundle();
}

module.exports = scripts;
