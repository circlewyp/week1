/**
 * Created by 啦啦啦啦 on 2017/10/9.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');
var rename = require('gulp-rename');
gulp.task("uglify", function () {
    // 1. src
    gulp.src(['js/*.js'])
        .pipe(uglify())// 压缩js文件
        .pipe(concat('main.js'))// 合并
        .pipe(rename({sufffix: '.min'}))// 重命名
        .pipe(gulp.dest('js'))// 输出文件夹
})