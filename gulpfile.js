var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('uglify', function() {
	gulp.src('tint.js')
		.pipe(uglify())
		.pipe(rename('tint.min.js'))
		.pipe(gulp.dest('dist'));
});