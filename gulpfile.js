// Include gulp/plugins
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    cache = require('gulp-cache'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    moduleImporter = require('sass-module-importer'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');

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
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest(assets +'js'));
});

// Sass & Autoprefix
gulp.task('sass', function() {
  gulp.src('./scss/style.scss')
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sass({importer: moduleImporter()}))
    .on('error', function(error) {
      console.log('Error : ' + error.message);
    })

    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./'))
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
