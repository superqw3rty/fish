'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber')
var csso = require('gulp-csso');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssMin = require('gulp-minify-css');
var server = require('browser-sync');

gulp.task("style", function() {
  gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
    //.pipe(csso())
    .pipe(cssMin())
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
  gulp.watch("source/sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("source/*.html").on("change", server.reload);
});