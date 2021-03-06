const gulp = require('gulp');
const babel = require('gulp-babel');
const minify = require('gulp-babel-minify');
const concat = require('gulp-concat');

gulp.task('default', () =>
  gulp.src('src/morsify.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'))
    .pipe(minify())
    .pipe(concat('morsify.min.js'))
    .pipe(gulp.dest('dist'))
);
