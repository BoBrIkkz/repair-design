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

function serveSass() {
    return src("app/sass/*.sass")
        .pipe(sass())
        .pipe(dest(app/css))
        .pipe(browserSync.stream());
};

exports.serve = bs;