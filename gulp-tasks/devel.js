// Development tasks 
var gulp = require('gulp'),
	sass = require('gulp-sass'),
  beautify = require('gulp-beautify'),
	inject = require('gulp-inject'),
	concat = require('gulp-concat');

// Compile ssas files
// Concat all sass files in a customstyle.scss and compile on css
gulp.task('sass', function () {
  return gulp
    //.src(['./app/css/customstyle.scss'])
    .src(['./app/sass/__breakpoints.scss', './app/sass/__main.scss', './app/sass/*.scss'])
    .pipe(concat('customstyle.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});

// Inject css files into html file
gulp.task('inject', function () {
	return gulp
		.src('./app/index.html')
		.pipe(inject(gulp.src(['./app/css/*.css'], {read: false}), {starttag: '<!-- inject:app:{{ext}} -->', ignorePath: 'app'}))
    .pipe(inject(gulp.src(['./app/lib/*.js'], {read: false}), {starttag: '<!-- inject:lib:{{ext}} -->', ignorePath: 'app'}))    
		.pipe(inject(gulp.src(['./app/js/**/*.js', './app/shared/**/*.js', './app/components/**/*.js'], {read: false}), {starttag: '<!-- inject:app:{{ext}} -->', ignorePath: 'app'}))
		.pipe(gulp.dest('./app'));
});

// Beauty Code
gulp.task('beautify', function() {
  gulp.src(['./components/**/*.js', './js/*.js', './shared/**/*.js'], {base: './'})
    .pipe(beautify({indentSize: 4}))
    .pipe(gulp.dest('./'));
});

// Watch
gulp.task('watch', function(){
  gulp.watch('./app/sass/**/*.scss', ['sass']);
  gulp.watch('./app/css/*.css', ['inject']);
  gulp.watch('./app/lib/*.js', ['inject']);
  gulp.watch('./app/js/*.js', ['inject']);
  gulp.watch('./app/components/**/*.js', ['beautify']);
});