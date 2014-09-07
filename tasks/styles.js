var gulp      = require('gulp');
var compass   = require('gulp-compass');
var concat    = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');

function styles() {
  return gulp.src('styles/**/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: '.tmp',
      sass: 'styles'
    }))
    .pipe(concat('styles.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist'));
}

module.exports = styles;
