const gulp = require("gulp")
const sass = require("node-sass")

// Compile SCSS => CSS
function style() {
  return gulp.src("./src/scss/**/*.scss").pipe(sass()).pipe(gulp.dest("./src/css/"))
}

exports.style = style
