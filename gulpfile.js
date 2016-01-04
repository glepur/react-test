var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function() {
	browserify({
			entries: 'client/js/main.jsx',
			debug: true
		})
		.transform(babelify, {
			presets: ['es2015', 'react']
		})
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('client'));
});

gulp.task('default', function() {
	console.log('soooon!');
});