var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var nodemon = require('gulp-nodemon');

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

gulp.task('serve', function() {
	nodemon({
		script: 'server/app.js',
		ext: 'js jsx',
		ignore: 'client/bundle.js',
		env: {
			'NODE_ENV': 'development'
		},
		tasks: ['build']
	});
});

gulp.task('default', ['serve']);