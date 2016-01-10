var gulp = require('gulp');
var concat = require('gulp-concat');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var babelify = require('babelify');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');
var sass = require('gulp-sass');

gulp.task('build:jsx', function() {
	browserify({
			entries: './client/app/app.jsx',
			debug: true,
			extensions: ['.js', '.jsx']
		})
		.transform(babelify, {
			presets: ['es2015', 'react']
		})
		.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('./client'))
		.pipe(livereload());
});

gulp.task('build:sass', function() {
	gulp.src('./client/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('main.css'))
		.pipe(gulp.dest('./client'))
		.pipe(livereload());
});

gulp.task('build', ['build:jsx', 'build:sass'])

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('./client/**/*.jsx', ['build:jsx']);
	gulp.watch('./client/**/*.scss', ['build:sass']);
});

gulp.task('serve', function() {
	nodemon({
		script: './server/app.js',
		ext: 'js jsx',
		watch: './server',
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

gulp.task('default', ['build', 'watch', 'serve', 'open']);