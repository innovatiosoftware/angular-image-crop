/**
 * Created by Edxe on 8/18/14.
 */
var gulp = require('gulp'),
    uglify = require('gulp-uglify');
concat = require('gulp-concat'),
htmlmin = require('gulp-htmlmin'),
cssmin = require('gulp-cssmin');

var paths = {
    scripts: ['*.js', '!gulpfile.js'],
    styles: ['*.css'],
    html: ['*.html','!index.html']
};


gulp.task('default', ['scripts', 'styles','other']);

gulp.task('scripts', function () {
    console.log('processing scripts...');
    gulp.src(paths.scripts)
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
});

gulp.task('styles', function () {
    console.log('processing styles...');
    gulp.src(paths.styles)
        .pipe(cssmin())
        .pipe(gulp.dest('dist'))

});

gulp.task('other', function () {
    console.log('processing other...');
    gulp.src(paths.html)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'))
});


