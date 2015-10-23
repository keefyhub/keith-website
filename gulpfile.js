// Include gulp
var gulp = require('gulp');
 // Include plugins
var autoprefixer = require('gulp-autoprefixer');
var cache = require('gulp-cache');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

var assets = "./build/"

// Gulp Test
gulp.task('test', function () {
    console.log("Gulp is working! Proceed with tasks...");
});

// Clear Cache
gulp.task('clear', function (done) {
    console.log("Cleared cache.");
    return cache.clearAll(done);
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    gulp.src('./js/*.js')
      //.pipe(concat('scripts.js')) add this back in if you want concatinated js files
        .pipe(uglify())
        .pipe(gulp.dest(assets +'js'));
});

// Sass & Autoprefix
gulp.task('sass', function() {
  gulp.src('./scss/style.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
            browsers: ["last 3 version", "> 1%", "ie 8"],
            cascade: false
        }))
    .pipe(gulp.dest(assets +'css'));
});

// Images (needs to be run separately but will watch for changes)
 gulp.task('images', function() {
  gulp.src('./images/**/*')
   .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
   .pipe(gulp.dest(assets +'images'));
});

// Watch
gulp.task('watch', function() {
   // Watch .js files
  gulp.watch('./js/*.js', ['scripts']);
   // Watch .scss files
  gulp.watch('./scss/**/*', ['sass']);
   // Watch image files
  gulp.watch('./images/**', ['images']);
});

// Default Task
gulp.task('default', ['scripts', 'sass', 'watch']);