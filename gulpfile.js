const gulp = require('gulp')
const minify = require('gulp-minify')
 
gulp.task('compress', () => {
  gulp.src('js/*.js')
    .pipe(minify({
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('js/dist'))
});