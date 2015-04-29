var gulp = require('gulp'),
  browserify = require('browserify')
	watch = require('gulp-watch'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect'),
	source = require('vinyl-source-stream'),
  mocha = require('gulp-mocha'),
	wiredep = require('wiredep').stream,
  template = require('gulp-template-compile'),
  concat = require ('gulp-concat');


gulp.task('browserify', function() {
    // Single entry point to browserify 
    return browserify ('./js/ContactManager.js')
        .bundle ()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./js'))
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
  	root: __dirname,
    port:8080,
    livereload:true
  });
});

gulp.task('templates', function (){
  return gulp.src('./js/templates/*.tmpl')
    .pipe(template({namespace: 'ContactManager'}))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('./js/templates'))
});

gulp.task('watch', function() {
    gulp.watch('./js/*/*.js', ['browserify']);
    gulp.watch('./styles/*.css', ['css']);
    gulp.watch('./*.html', ['html']);
    gulp.watch('bower.json', ['bower']);
    gulp.watch('./js/templates/*.tmpl', ['templates'])
    //gulp.watch('./test/*/*.js', ['test']);
});

gulp.task('default', ['bower', 'watch', 'webserver', 'browserify', 'templates']);


