const {src, dest, watch} = require('gulp');
var browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
        watch("./*.html").on('change', browserSync.reload);
        watch("./sass/**/*.sass").on('change', browserSync.reload);
        watch("./js/*.js").on('change', browserSync.reload);
});
gulp.task('autoprefixer', () => {
  const autoprefixer = require('autoprefixer')
  const sourcemaps = require('gulp-sourcemaps')
  const postcss = require('gulp-postcss')

  return gulp.src('./src/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dest'))
})
function serveSass() {
    return src("app/sass/*.sass")
        .pipe(sass())
        .pipe(dest(app/css))
        .pipe(browserSync.stream());
};

exports.serve = bs;