const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const { src, series, parallel, dest, watch } = require("gulp");

// Compile SASS
function scssTsk() {
  return gulp
    .src(["node_modules/bootstrap/scss/bootstrap.scss", "src/scss/*.scss"])
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
}

// Move JS Files to SRC
function jsTsk() {
  return gulp
    .src([
      "node_modules/bootstrap/dist/js/bootstrap.min.js",
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/tether/dist/js/tether.min.js"
    ])
    .pipe(gulp.dest("src/js"))
    .pipe(browserSync.stream());
}

// Watch SASS & Serve
function serveTsk() {
  browserSync.init({
    port: process.env.PORT || 5004,
    server: {
      baseDir: "./src/",
      
    },
  });
  gulp.watch(["node_modules/bootstrap/scss/bootstrap.scss", "src/scss/*.scss"], scssTsk);
  gulp.watch("src/*.html").on("change", browserSync.reload);
}

// Move Font Awesome Fonts folder to src
function fontsTsk() {
  return gulp
    .src("node_modules/font-awesome/fonts/*")
    .pipe(gulp.dest("src/fonts"));
}

// Move font awesome css file
function faTsk() {
  return gulp
    .src("node_modules/font-awesome/css/font-awesome.min.css")
    .pipe(gulp.dest("src/css"));
}

exports.default = series(
  parallel(scssTsk, jsTsk),
  fontsTsk, 
  faTsk,
  serveTsk
);
