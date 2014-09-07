var gulp       = require('gulp');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');

function scripts() {
  return browserify('./scripts/main.js', { debug: true })
    .bundle()
    .pipe(source('scripts.js'))
    .pipe(gulp.dest('dist'));
}

module.exports = scripts;
