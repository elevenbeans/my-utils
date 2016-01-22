var gulp = require('gulp');
var clean = require('gulp-clean');
var less = require('gulp-less');//处理less
var minifyCss = require('gulp-minify-css');//压缩css
var uglify = require('gulp-uglify');//压缩，混淆js
var autoprefixer = require('gulp-autoprefixer');//自动补全浏览器兼容css
var gulpif = require('gulp-if');
var path = require('path');

var isBuild = true;

var hasExtname = function(extname) {
  if(extname[0] !== '.'){
    extname = '.' + extname;
  }
  return function(file) {
    return path.extname(file.path) === extname;
  }
}

gulp.task('default',['clean','css','js','copy']);

gulp.task('clean', function() {
  return gulp.src('build', { read:false })
        .pipe(clean());
});

// gulp.task('clean', function(cb) {
//   isBuild ? del(['build'], cb) : cb();
// });

gulp.task('css', ['clean'],function() {
  return gulp.src(['src/**/*.css', 'src/**/*.less'])
    .pipe(minifyCss())
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true 
        }))

    .pipe(gulpif(hasExtname('less'), less()))
    .pipe(gulp.dest('build'));
});

gulp.task('js',['clean'], function() {
  return gulp.src('src/**/*.js') // 匹配 'client/js/somedir/somefile.js' 并且将 `base` 解析为 `client/js/`
  .pipe(uglify())
  .pipe(gulp.dest('build'))
  .pipe(gulp.dest('dist')); 
});

gulp.task("copy", ['clean'],function() {
  return gulp.src(["src/**/*.png", "src/**/*.jpg", "src/**/*.jpeg", "src/**/*.gif", "src/**/*.json",
      "src/**/*.html", "src/**/*.htm","src/**/*.woff", "src/**/*.ttf", "src/**/*.eot", "src/**/*.svg"
    ])
    .pipe(gulp.dest("build"));
});

gulp.task("watch", ["default"], function() {
  isBuild = false;
  gulp.watch(['src/**/*.js', '!src/seed.js', 'src/**/*.xtpl'], ["js", "seed2demo"]);
  gulp.watch(['src/**/*.css', 'src/**/*.less'], ["css"]);
});