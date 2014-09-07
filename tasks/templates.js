var gulp = require('gulp');

function templates() {
  return gulp.src('templates/**/*.html')
    .pipe(gulp.dest('dist'));
}

module.exports = templates;
