var gulp = require('gulp'); 
var jshint = require('gulp-jshint');
var markdown = require('gulp-markdown');

gulp.task('default', async function() {
  await gulp.src('./*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));

  await gulp.src('./*.md')
    .pipe(markdown())
    .pipe(gulp.dest('./build/markdown'));
});

gulp.task('watch', async function() {
    await gulp.watch('./*.js', ['default']);
    await gulp.watch('./*.md', ['default']);
});
