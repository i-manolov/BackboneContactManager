var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	watch = require('gulp-watch'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect'),
	source = require('vinyl-source-stream'),
	wiredep = require('wiredep').stream,
	browserify = require('browserify');


/* 
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
*/


gulp.task('browserify', function() {
    // Single entry point to browserify 
    return browserify ('./app/js/app.js')
        .bundle ()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('app-bundle.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./app/js/'))
        .pipe(connect.reload());
})

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src('./app/styles/*.css')
    .pipe(connect.reload());
});

gulp.task('bower', function () {
  gulp.src('./app/index.html')
    .pipe(wiredep())
    .pipe(gulp.dest('./app'));
});

gulp.task('webserver', function() {
  connect.server({
  	root: 'app',
    livereload:true
  });
});

gulp.task('watch', function() {
    gulp.watch('/app/js/*/*.js', ['browserify']);
    gulp.watch('/app/styles/*.css', ['css']);
    gulp.watch('/app/*.html', ['html']);
    gulp.watch('bower.json', ['bower']);
});

gulp.task('default', ['bower', 'watch', 'webserver', 'browserify']);


