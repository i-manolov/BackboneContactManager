var gulp = require('gulp'),
  browserify = require('browserify')
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	watch = require('gulp-watch'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect'),
	source = require('vinyl-source-stream'),
  mocha = require('gulp-mocha'),
	wiredep = require('wiredep').stream;


/* 
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
*/


gulp.task('browserify', function() {
    // Single entry point to browserify 
    return browserify ('./js/ContactManager.js')
        .bundle ()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./'))
        .pipe(connect.reload());
})

gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src('./styles/*.css')
    .pipe(connect.reload());
});

gulp.task('bower', function () {
  gulp.src('./index.html')
    .pipe(wiredep())
    .pipe(gulp.dest('./'));
});

gulp.task('test', function() {
  return gulp
    .src('./test/*/*.js')
    .pipe(mocha());
});

gulp.task('webserver', function() {
  connect.server({
  	root: '.',
    livereload:true
  });
});

gulp.task('watch', function() {
    gulp.watch('./js/*/*.js', ['browserify']);
    gulp.watch('./styles/*.css', ['css']);
    gulp.watch('./*.html', ['html']);
    gulp.watch('bower.json', ['bower']);
    //gulp.watch('./test/*/*.js', ['test']);
});

gulp.task('default', ['bower', 'watch', 'webserver', 'browserify']);


