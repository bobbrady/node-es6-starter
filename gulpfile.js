const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('default', () => {
  gulp.src('src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

// Uncomment this if you want hot transpilation while you develop code.
// You will need to keep the terminal where you run `gulp` open while you code.
// gulp.watch(['src/**/*.js'], ['default']);
