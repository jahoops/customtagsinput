const gulp = require('gulp'); 
const combine = require('gulp-scss-combine');
const concat = require('gulp-concat');

console.log('start compiling ...');  
gulp.src(['./assets/styles/**/*.scss'])
    .pipe(combine())
    .pipe(concat('all.scss'))
    .pipe(gulp.dest('.'))

console.log('stop compiling ...');
