var gulp = require('gulp');
var jshint = require('gulp-jshint');
var markdown = require('gulp-markdown');

gulp.task('default', function () {
  let promise = new Promise(function (resolve, reject) {
    resolve(gulp.src('./*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default')));
    resolve(
      gulp.src('./*.md')
        .pipe(markdown())
        .pipe(gulp.dest('./build/markdown')));
  });
  promise
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      return error
    })
});

gulp.task('watch', function () {
  gulp.watch('./*.js', ['default']);
  gulp.watch('./*.md', ['default']);
});
