var gulp = require("gulp");
var watch = require("gulp-watch");
var rename = require('gulp-rename');

var srcs = {scope: 'scope.js', objects: 'objects.js', async: 'async.js'}
gulp.task('default', ['scopes']);

gulp.task('scopes', function() {
  return watchAndCompile(srcs.scope);
});

gulp.task('objects', function() {
  return watchAndCompile(srcs.objects);
})

gulp.task('async', function() {
  return watchAndCompile(srcs.async);
})



function watchAndCompile(file) {
  return gulp.src('src/' + file)
    .pipe(watch('src/' + file))
    .pipe(rename('code.js'))
    .pipe(gulp.dest('./dist'));
}
