// Control version tasks

var gulp = require('gulp'),
	rename = require('gulp-rename'),
	bump = require('gulp-bump'),
	ngConstant = require('gulp-ng-constant');


gulp.task('bump', function(){
	return gulp
		.src(['./config.json','./package.json'])
		.pipe(bump())
		.pipe(gulp.dest('./'));
});

gulp.task('bump:minor', function(){
	return gulp
		.src(['./config.json','./package.json'])
		.pipe(bump({type:'minor'})) 
		.pipe(gulp.dest('./'));
});

gulp.task('bump:major', function(){
	return gulp
		.src(['./config.json','./package.json'])
		.pipe(bump({type:'minor'})) 
		.pipe(gulp.dest('./'));
});


gulp.task('updateVersion', ['bump'], function() {
    var configJson = require('./../config.json');
    return ngConstant({
            constants: configJson,
            stream: true,
            name: 'CoparkGodesk.Constant'
        })
     	.pipe(rename('app.Constant.js'))
		.pipe(gulp.dest('./app/js'));
});

gulp.task('updateVersion:minor', ['bump:minor'], function() {
    var configJson = require('./../config.json');
    return ngConstant({
            constants: configJson,
            stream: true,
            name: 'CoparkGodesk.Constant'
        })
     	.pipe(rename('app.Constant.js'))
		.pipe(gulp.dest('./app/js'));
});

gulp.task('updateVersion:major', ['bump:major'], function() {
    var configJson = require('./../config.json');
    return ngConstant({
            constants: configJson,
            stream: true,
            name: 'CoparkGodesk.Constant'
        })
     	.pipe(rename('app.Constant.js'))
		.pipe(gulp.dest('./app/js'));
});

