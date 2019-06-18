// gulpfile based on React/Sass tutorial at https://youtu.be/nusgoj74a3Y
// by Simpletut
'use strict';

// dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

// SCSS

var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css/';

// compile scss
// 1.convert files 2.minify 3.add suffix
// 4.change only the files that are changed
// 5.output the files to the destination
gulp.task('compile_scss', function(){

	gulp.src(SCSS_SRC)
	.pipe(sass().on('error', sass.logError))
	.pipe(minifyCSS())
	.pipe(rename({suffix: '.min'}))
	.pipe(changed(SCSS_DEST))
	.pipe(gulp.dest(SCSS_DEST));

});

// detect changes to SCSS and run compile_scss task
gulp.task('watch_scss', function(){
	gulp.watch(SCSS_SRC, gulp.series('compile_scss'));
});

// run tasks
// if you write only 'gulp' in terminal it will run this task
// this task then runs the above task - watch_scss
gulp.task('default', gulp.series('watch_scss'));
