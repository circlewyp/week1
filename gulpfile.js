/**
 * Created by �������� on 2017/10/9.
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
        .pipe(uglify())// ѹ��js�ļ�
        .pipe(concat('main.js'))// �ϲ�
        .pipe(rename({sufffix: '.min'}))// ������
        .pipe(gulp.dest('js'))// ����ļ���
})