// File: Gulpfile.js
'use strict';

var gulp				= require('gulp'),
	connect				= require('gulp-connect'),
	stylus				= require('gulp-stylus'),
	nib					= require('nib'),
	jshint				= require('gulp-jshint'),
	stylish				= require('jshint-stylish'),
	inject				= require('gulp-inject'),
	wiredep				= require('wiredep').stream;

// npm install --save-dev gulp gulp-connect gulp-stylus nib gulp-jshint jshint-stylish gulp-inject wiredep

// Busca errores en el JS y nos los muestra por pantalla
gulp.task('jshint', function() {
	return gulp.src('./public/scripts/**/*.js')
	.pipe(jshint('.jshintrc'))
	.pipe(jshint.reporter('jshint-stylish'))
	.pipe(jshint.reporter('fail'));
});

// Preprocesa archivos Stylus a CSS y recarga los cambios
gulp.task('css', function() {
	gulp.src('./public/stylus/main.styl')
	.pipe(stylus({
		use: nib(),
		compress: false }))
	.pipe(gulp.dest('./public/css/'))
	.pipe(connect.reload());
});

// Inyecta las librerias que instalemos vía Bower
gulp.task('bowerinject', function () {
	gulp.src('./app/views/layouts/default.jade')
	.pipe(wiredep({
		directory: './public/lib',
		ignorePath: '../../../public'
	}))
	.pipe(gulp.dest('./app/views/layouts'));
});

// Busca en las carpetas de estilos y javascript los archivos que hayamos creado
// para inyectarlos en el index.html
gulp.task('inject', function() {
	var sources = gulp.src(['./public/scripts/**/*.js','./public/css/**/*.css']);
	return gulp.src('./app/views/layouts/default.jade')
	.pipe(inject(sources, {
		read: false,
		ignorePath: '/public'
	}))
	.pipe(gulp.dest('./app/views/layouts'));
});

// Recarga el navegador cuando hay cambios en el HTML
gulp.task('jade', function() {
	gulp.src('./app/views/**/*.jade')
	.pipe(connect.reload());
});

// Vigila cambios que se produzcan en el código
// y lanza las tareas relacionadas
gulp.task('watch', function() {
	gulp.watch(['./app/views/**/*.jade'], ['jade']);
	gulp.watch(['./public/stylus/**/*.styl'], ['css', 'inject']);
	gulp.watch(['./public/scripts/**/*.js', './Gulpfile.js'], ['jshint', 'inject']);
	gulp.watch(['./bower.json'], ['bowerinject']);
});


gulp.task('default', ['bowerinject', 'inject', 'watch']);
