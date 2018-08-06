'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssimport = require("gulp-cssimport");
var rename = require("gulp-rename");
let cleanCSS = require('gulp-clean-css');
var options = {};

gulp.task('default', ['styles', 'styles-min']);

gulp.task('styles', function() {
    gulp.src('projects/components/src/styles/*.scss') // /**/ */
        .pipe(cssimport(options))
        .pipe(sass({includePaths: ['projects/components/src/assets']}).on('error', sass.logError))
        .pipe(rename("styles.bundle.css"))
        .pipe(gulp.dest('dist/components/assets/styles/'));
});

gulp.task('styles-min', function() {
    gulp.src('dist/components/assets/styles/*.css') // /**/ */
        .pipe(cleanCSS())
        .pipe(rename("styles.bundle.min.css"))
        .pipe(gulp.dest('dist/components/assets/styles/'));
});