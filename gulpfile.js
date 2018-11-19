const gulp = require('gulp')
const minify = require('gulp-minify')
var sass = require('gulp-sass')
sass.compiler = require('node-sass')
let cleanCSS = require('gulp-clean-css')
var rename = require('gulp-rename');
 
gulp.task('sass', function () {
  return gulp.src('./scss/freelancer.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./css'))
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});


gulp.task('compress', () => {
  gulp.src('js/*.js')
    .pipe(minify({
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('js/dist'))
});