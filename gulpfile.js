const browser  = require("browser-sync");
const cleanCSS = require("gulp-clean-css");
const gulp     = require("gulp");
const sass     = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const rename = require ("gulp-rename");
const fileinclude = require("gulp-file-include");




function minCss(){
  return gulp.src("./style.css")
    .pipe(cleanCSS())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("./"));
}




function watch(){
  browser.init({
    server: {
      baseDir : "./"
    }
  });
  gulp.watch("style.css", minCss);
  gulp.watch("*.*").on("change", browser.reload);
}


exports.minCss = minCss;
exports.watch = watch; 