"use strict";

var gulp = require("gulp"),
	sass = require("gulp-sass"),
	browserSync = require("browser-sync");

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: '.'
        },
        notify: false
    });
});

gulp.task("sass", function () {
	return gulp.src("styles/**/*.scss")
	.pipe(sass())
	.pipe(browserSync.reload({stream: true}))
	.pipe(gulp.dest("build/"));
});

gulp.task("watch", ["browser-sync", "sass"], function () {
	gulp.watch("styles/**/*.scss", ["sass"]);
});

