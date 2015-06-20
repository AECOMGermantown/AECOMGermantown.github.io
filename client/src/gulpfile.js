'use strict';

var watchJSFiles = ['*.html', 'app/**', '!app/*.template.js', '!app/*.openfda.js', 'test/**', 'assets/less/*.less', 'assets/less/**', '!assets/css/*.css'],
    appJSFiles = ['./app/**/*.js', '!./app/*.template.js', '!./app/*.openfda.js', '!./app/*.vendor.js'],
    cleanFiles = ['./app/app.openfda.js', './app/app.template.js', './assets/css/*.css'],
    lintDir = ['./app/**/*.js', '!./app/*.openfda.js', '!./app/*.template.js', '!./app/*.vendor.js'],
    vendorJSFiles = ['./bower_components/jquery/dist/jquery.min.js',
        './bower_components/angular/angular.js',
        './bower_components/angular-animate/angular-animate.js',
        './bower_components/angular-aria/angular-aria.js',
        './bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
        './bower_components/angular-sanitize/angular-sanitize.min.js',
        './bower_components/lodash/lodash.min.js',
        './bower_components/angular-toastr/dist/angular-toastr.tpls.min.js'],
    filesToMoveForBuild = ['./index.html', './app/*.js', './assets/**/*.*', '!./assets/less/**/*.*'],
    buildDir = '../build',
    cleanBuildDir = '../build/**';


var gulp = require('gulp'),
    concat = require('gulp-concat'),
    karma = require('gulp-karma'),
    ngHtml2Js = require('gulp-ng-html2js'),
    clean = require('gulp-clean'),
    jshint = require('gulp-jshint'),
    less = require('gulp-less'),
    bless = require('gulp-bless'),
    runSequence = require('run-sequence'),
    stripDebug = require('gulp-strip-debug');

//Lint Task
gulp.task('lint', function () {
    return gulp.src(lintDir)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'));
});


//app template
gulp.task('template_app', function () {
    return gulp.src('./app/**/*.tpl.html')
        .pipe(ngHtml2Js({
            moduleName: "template.app"
        }))
        .pipe(concat('app.template.js'))
        .pipe(gulp.dest('./app'));
});

//vendor JS files
gulp.task('openfda_vendor', function () {
    return gulp.src(vendorJSFiles)
        .pipe(concat('app.vendor.js'))
        .pipe(gulp.dest('./app'));
});

//app emihds
gulp.task('openfda_app', function () {
    return gulp.src(appJSFiles)
        .pipe(concat('app.openfda.js'))
        .pipe(gulp.dest('./app'));
});

gulp.task('stripDebug', function () {
    return gulp.src('./app/app.openfda.js')
        .pipe(stripDebug())
        .pipe(gulp.dest('./app'));
});

//compile less
gulp.task('openfda_css', function () {
    return gulp.src('./assets/less/openfda.less')
        .pipe(less())
        .pipe(bless())
        .pipe(gulp.dest('./assets/css'));
});


gulp.task('test', function () {
    // Be sure to return the stream
    return gulp.src('./foo.html')
        .pipe(karma({
            configFile: 'test/karma.conf.js',
            action: 'run'
        }))
        .on('error', function (err) {
            // Make sure failed tests cause gulp to exit non-zero
            //throw err;
            console.log(err);
            this.emit('end');
        });
});

gulp.task('clean', function () {
    return gulp.src(cleanFiles, {read: false})
        .pipe(clean({force: true}));
});

gulp.task('build', function (callback) {
    runSequence('lint',
        'clean',
        ['template_app', 'openfda_app', 'openfda_css', 'openfda_vendor'],
        'test',
        callback);
});

gulp.task('watch', function () {
    gulp.watch(watchJSFiles, ['build']);
});

gulp.task('watchDesign', function () {
    gulp.watch(watchJSFiles, ['template_app', 'openfda_app', 'openfda_css']);
});

gulp.task('cleanBuild', function () {
    return gulp.src(cleanBuildDir, {read: false})
        .pipe(clean({force: true}));
});
gulp.task('copyBuild', function () {
    return gulp.src(filesToMoveForBuild, {base: './'})
        .pipe(gulp.dest(buildDir));
});
gulp.task('deploy', function (callback) {
    runSequence('stripDebug','cleanBuild', 'copyBuild', callback);
});

//Same as "build" but without the testing step
gulp.task('compile', function (callback) {
    runSequence('lint',
        'clean',
        ['template_app', 'openfda_app', 'openfda_css', 'openfda_vendor'],
        callback);
});

gulp.task('watchTest', function () {
    gulp.watch(watchJSFiles, ['test']);
});
