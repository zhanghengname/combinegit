var gulp = require("gulp");
var sass = require("gulp-sass");
var connect = require("gulp-connect");


gulp.task("copy-demo1",function(){
	gulp.src("demo1.html").pipe(gulp.dest("dist")).pipe(connect.reload());
	gulp.src("demo1.js").pipe(gulp.dest("dist/js")).pipe(connect.reload())
});
//gulp.task("copy-demo1",function(){
//	
//})
gulp.task("watch",function(){
	gulp.watch("demo1.html",["copy-demo1"]);
	gulp.watch("demo1.scss",["sass"]);
})
gulp.task("sass",function(){
	gulp.src("demo1.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("copy-image",function(){
	gulp.src("image/**").pipe(gulp.dest("dist/image")).pipe(connect.reload());
})
gulp.task("server",function(){
	connect.server({
		root:"dist",
		liverelaod:true
	});
})
gulp.task("default",["server","watch","sass","copy-image","copy-demo1"]);