import path from "path";
// 终端字符串样式
import chalk from "chalk";
// gulp是类似一个管道的方式执行，从入口开始到出口，中间一步步执行
// series就是用来依次执行任务的
// 一般利用.pipe方法将插件放置在src()和dest()之间，处理stream流。在输入和输出之间来处理文件
import { series, src, dest } from "gulp";
// sass
import gulpSass from "gulp-sass";
import dartSass from "sass";
// 添加样式前缀
import autoprefixer from "gulp-autoprefixer";
// 压缩css
import cleanCSS from "gulp-clean-css";
// console的升级版本,是一个功能更丰富，更漂亮的控制台日志输出控件。
import consola from "consola";

const distFolder = path.resolve(__dirname, "dist");

/**
 * 对sass文件做处理
 */
function buildThemeChalk() {
  const sass = gulpSass(dartSass);
  // 从src下的scss文件开始
  // =>编译成css=>添加前缀=>压缩
  // =>最终输出到当前目录下dist下的css目录
  return src(path.resolve(__dirname, "./src/*.scss"))
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(
      cleanCSS({}, (details) => {
        consola.success(
          `${chalk.cyan(details.name)}: ${chalk.yellow(
            details.stats.originalSize / 1000
          )} KB -> ${chalk.green(details.stats.minifiedSize / 1000)} KB`
        );
      })
    )
    .pipe(dest(distFolder));
}

/**
 * 把打包好的css输出到根目录的dist
 */
function copyfullstyle() {
  const rootDistPath = path.resolve(__dirname, "../../dist/theme-chalk");
  return src(path.resolve(__dirname, "./dist/**")).pipe(dest(rootDistPath));
}

export default series(buildThemeChalk, copyfullstyle);
