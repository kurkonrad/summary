var gulp = require('gulp'),
    minifyCss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect'),
    clean = require('gulp-clean'),
    rename = require('gulp-rename');

gulp.task('minify-css', function () {
    gulp.src('assets/css/style.css')
    .pipe(rename('style.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('clean', function () {
  return gulp.src('build', {read: false})
    .pipe(clean());
});

gulp.task('runserver', function() {
    connect.server();
});

gulp.task('build', ['clean', 'minify-css']);
gulp.task('dev', ['clean', 'build', 'runserver']);
