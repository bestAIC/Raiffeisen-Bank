var gulp = require('gulp');

var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var path = require('path');

gulp.task('less', function () {
	return gulp.src('template_styles.less')
			.pipe(less({
				paths: [ path.join(__dirname, 'less', 'includes') ]
			}))
			.pipe(autoprefixer({
				browsers: ['last 2 versions'],
				cascade: false
			}))
			.pipe(gulp.dest(''));
});

gulp.task('watch', function(){
	gulp.watch('less/**/*.less', ['less']);
});

gulp.task('default', ['less', 'watch'], function() {
	// place code for your default task here
});