const gulp = require("gulp");
const gulpClean = require("gulp-clean");

function copyRoot() {
  return gulp
    .src(["index.html", "favicon.ico", "styles.css", "script.js"])
    .pipe(gulp.dest("dist"));
}

function copyImages() {
  return gulp
    .src(["images/**/*"])
    .pipe(gulp.dest("dist/images"));
}

function copyLightGallery() {
  return gulp
    .src(["./node_modules/lightgallery/**/*"])
    .pipe(gulp.dest("dist/node_modules/lightgallery"));
}

function copyMasonry() {
  return gulp
    .src(["./node_modules/masonry-layout/dist/**/*"])
    .pipe(gulp.dest("dist/node_modules/masonry-layout/dist"));
}

function clear() {
  return gulp.src("dist", { read: false, allowEmpty: true }).pipe(gulpClean());
}

exports.build = gulp.series([
  clear,
  gulp.parallel([copyRoot, copyLightGallery, copyMasonry, copyImages]),
]);
