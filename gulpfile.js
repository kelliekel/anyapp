'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssimport = require("gulp-cssimport");
var rename = require("gulp-rename");
let cleanCSS = require('gulp-clean-css');
var options = {};

gulp.task('default', [
    'styles-deeppurple-amber', 
    'styles-indigo-pink', 
    'styles-pink-bluegrey', 
    'styles-purple-green', 
    'styles-min'
]);

//
// colors
//
gulp.task('styles-deeppurple-amber', function() {
    gulp.src('projects/components/src/styles/deeppurple-amber/*.scss') // /**/ */
        .pipe(cssimport(options))
        .pipe(sass({includePaths: ['projects/components/src/assets']}).on('error', sass.logError))
        .pipe(rename("deeppurple-amber.bundle.css"))
        .pipe(gulp.dest('dist/components/assets/styles/'));
});
gulp.task('styles-indigo-pink', function() {
    gulp.src('projects/components/src/styles/indigo-pink/*.scss') // /**/ */
        .pipe(cssimport(options))
        .pipe(sass({includePaths: ['projects/components/src/assets']}).on('error', sass.logError))
        .pipe(rename("indigo-pink.bundle.css"))
        .pipe(gulp.dest('dist/components/assets/styles/'));
});
gulp.task('styles-pink-bluegrey', function() {
    gulp.src('projects/components/src/styles/pink-bluegrey/*.scss') // /**/ */
        .pipe(cssimport(options))
        .pipe(sass({includePaths: ['projects/components/src/assets']}).on('error', sass.logError))
        .pipe(rename("pink-bluegrey.bundle.css"))
        .pipe(gulp.dest('dist/components/assets/styles/'));
});
gulp.task('styles-purple-green', function() {
    gulp.src('projects/components/src/styles/purple-green/*.scss') // /**/ */
        .pipe(cssimport(options))
        .pipe(sass({includePaths: ['projects/components/src/assets']}).on('error', sass.logError))
        .pipe(rename("purple-green.bundle.css"))
        .pipe(gulp.dest('dist/components/assets/styles/'));
});

//
// minify
//
gulp.task('styles-min', function() {
    gulp.src('dist/components/assets/styles/*.css') // /**/ */
        .pipe(cleanCSS())
        //.pipe(rename("styles.bundle.min.css"))
        .pipe(rename(function (path) {
            //path.dirname += "/ciao";
            path.basename += ".min";
            //path.extname = ".md";
        }))
        .pipe(gulp.dest('dist/components/assets/styles/'));
});