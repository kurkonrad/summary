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

gulp.task('minify-js', function () {
    gulp.src('assets/js/summary.js')
    .pipe(rename('summary.min.css'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('clean', function () {
  return gulp.src('build', {read: false})
    .pipe(clean());
});

gulp.task('runserver', function() {
    connect.server();
});

gulp.task('build', ['clean', 'minify-css', 'minify-js']);
gulp.task('dev', ['clean', 'build', 'runserver']);
