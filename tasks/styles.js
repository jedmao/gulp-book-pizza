var gulp    = require('gulp');
var compass = require('gulp-compass');

function styles() {
  return gulp.src('styles/**/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: '.tmp',
      sass: 'styles'
    }))
    .pipe(gulp.dest('dist'));
}

module.exports = styles;
