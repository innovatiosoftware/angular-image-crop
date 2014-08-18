/**
 * Created by Edxe on 8/18/14.
 */
var gulp = require('gulp'),
    uglify = require('gulp-uglify')
concat = require('gulp-concat')

;

gulp.task('default', function () {
    console.log('building...');
    gulp.src(['*.js','!gulpfile.js'])
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
});


