var gulp = require('gulp');
var jade = require('gulp-jade');
var less = require('gulp-less');
var del = require('del');

gulp.task('jade', function() {
	gulp.src('src/jade/*.jade')
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('less', function() {
	gulp.src('src/less/**/*.less')
		.pipe(less())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('static', function() {
	gulp.src('src/static/**')
		.pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
	return del ([
		'dist'
	]);
});

gulp.task('default', ['clean'], function() {
	gulp.start('jade');
	gulp.start('less');
	gulp.start('static');
	gulp.watch('src/jade/**/*.jade', ['jade']);
	gulp.watch('src/less/**/*.less', ['less']);
	gulp.watch('src/static/**', ['static']);
});