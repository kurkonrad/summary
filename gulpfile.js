var gulp = require('gulp'),
    minifyCss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect');

gulp.task('minify-css', function () {
    gulp.src('assets/css/style.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('minify-js', function () {
    gulp.src('assets/js/summary.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('build', ['minify-css', 'minify-js']);

gulp.task('runserver', function() {
    connect.server();
});
