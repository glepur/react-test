var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');

gulp.task('client:build', function() {
	browserify({
			entries: 'client/app/app.jsx',
			debug: true,
			extensions: ['.js', '.jsx']
		})
		.transform(babelify, {
			presets: ['es2015', 'react']
		})
		.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('client'))
		.pipe(livereload());
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('client/**/*.jsx', ['client:build']);
});

gulp.task('serve', function() {
	nodemon({
		script: 'server/app.js',
		ext: 'js jsx',
		watch: 'server',
		env: {
			'NODE_ENV': 'development'
		}
	}).on('restart', function() {
		livereload.reload();
	});
});

gulp.task('open', function() {
	require('open')('http://localhost:9000');
});

gulp.task('default', ['watch', 'serve', 'open']);