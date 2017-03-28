// Build tasks
var gulp = require('gulp'),
  useref = require('gulp-useref'),
  gulpif = require('gulp-if'),
  uglify = require('gulp-uglify'),
  cleanCss = require('gulp-clean-css'),
  clean = require('gulp-clean'),
  htmlmin = require('gulp-htmlmin'),  
  mainBowerFiles = require('main-bower-files'),
  replace = require('gulp-replace');
  manifest = require('gulp-manifest');

var destinationdirectory;

// Launch task
gulp.task('set-directory', function(){
  destinationdirectory = process.argv[3];
});


//
// Clean public directory
// 
gulp.task('clean', ['set-directory'], function(){
  return gulp
    .src('./' + destinationdirectory + '/*', {read: false})
    .pipe(clean());
});

//
// Generate html file. Minify and uglify js files and minify css
// 
gulp.task('html', ['clean'], function () {
    return gulp.src('./app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.css', cleanCss()))
        .pipe(gulp.dest('./' + destinationdirectory));
});


//
// Copy bower files to public folder
// 
gulp.task('bower-files', ['html'], function() {
    return gulp.src(mainBowerFiles(), { base: './app/bower_components' })
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulp.dest('./' + destinationdirectory + '/bower_components'));
});

//
// Add project components and minify html files
// 
gulp.task('project_components', ['bower-files'], function () {
  return gulp.src('./app/components/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./' + destinationdirectory + '/components'));
});

//
// Add shared components and minify html files
// 
gulp.task('shared_components', ['project_components'], function () {
  return gulp.src('./app/shared/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))  
    .pipe(gulp.dest('./' + destinationdirectory + '/shared'));
});

//
// Copy fonts to public foldes
// 
gulp.task('fonts', ['shared_components'], function () {
  return gulp.src(['./app/fonts/*.{eot,svg,ttf,woff,woff2}', './app/bower_components/bootstrap/fonts/*.{eot,svg,ttf,woff,woff2}'])
    .pipe(gulp.dest('./' + destinationdirectory + '/fonts'));
});

//
// Copy images to public foldes
// 
gulp.task('images', ['fonts'], function () {
  return gulp.src('./app/images/*')
    .pipe(gulp.dest('./' + destinationdirectory + '/images'));
});

//
// Build test app
// 
gulp.task('test', ['images'], function(){
  // Js
  gulp.src(['./' + destinationdirectory + '/js/app.js'])
    // Constants
    .pipe(replace('"BUILDTYPE", "development"', '"BUILDTYPE", "test"'))
    .pipe(replace('"APIROUTE", "http://localhost:9090/"', '"APIROUTE", "http://192.168.0.220/api/test/"'))
    .pipe(replace('"APIROUTE", "http://localhost:51387/"', '"APIROUTE", "http://192.168.0.220/api/test/"'))
    .pipe(replace('"BASEHREF", "/"' , '"BASEHREF", "/test-godesk/"'))
    .pipe(gulp.dest('./' + destinationdirectory + '/js'));
    // Base
    gulp.src(['./' + destinationdirectory + '/index.html'])
    .pipe(replace('<base href="/">', '<base href="/test-godesk/">'))
    .pipe(gulp.dest('./' + destinationdirectory ));  
});


