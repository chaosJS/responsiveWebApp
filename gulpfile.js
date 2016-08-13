var gulp = require('gulp');
var rev = require('gulp-rev');//给每个文件添加版本号，保证版本更新后使用户本地缓存失效
var revReplace = require('gulp-rev-replace');//替换掉页面源代码中的路径
var useref = require('gulp-useref');//在html页面中添加逻辑注释代码，合并css或者js文件
var filter = require('gulp-filter');//从文件中筛选中一些文件
var uglify = require('gulp-uglify');//压缩js
var csso = require('gulp-csso');//压缩css

gulp.task('default' , function(){
    var jsFilter = filter('**/*.js' , {restore:true});
    var cssFilter = filter('**/*.css' , {restore:true});
    var indexHtmlFilter = filter(['**/*' ,'!**/index.html'], {restore:true});

    return gulp.src('src/index.html')//拿到index.html，放入流中
        .pipe(useref())//分析其中的注释标志，放入流中
        .pipe(jsFilter)//把js文件筛选出来
        .pipe(uglify())//做一些压缩
        .pipe(jsFilter.restore)//把压缩之后的js放到流中
        .pipe(cssFilter)//筛选css
        .pipe(csso())//压缩css
        .pipe(cssFilter.restore)//把压缩后的css放入流中
        .pipe(indexHtmlFilter)//进行indexhtml的过滤，在上面吧index.html主页排除了
        .pipe(rev())//打版本号
        .pipe(indexHtmlFilter.restore)//放回流中
        .pipe(revReplace())//更新index中文件路径的更新
        .pipe(gulp.dest('dist'));//流结束，放到dist目录中

});

