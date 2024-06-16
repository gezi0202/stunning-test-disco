构建工具:grunt gulp、gulp、webpcak、vite
es6+ => es5
scss , sass , less => css
合并压缩文件：css , html , js
压缩文件 ， 转译小图

****之后跟项目相关的代码都写在webpack里面
****外面写的都是和配置相关的代码
****先起服务  先后将代码写在src里边
****上线的是打包之后的目录（build）


## webpack
    作用：根据入口文件开始查找所有依赖项，找到所有依赖项后打包成一个或者多个 js文件
     1、修改webpack 默认配置项需要创建配置文件(手动创建)：webpack.config.js 也就是说在运行webpack时默认找前边单词命名的这个文件 找不到就走默认走（src下的index.js）
## 安装
    1.npm install webpack webpack-cli --save-dev //安装
    2.npm install --save-dev html-webpack-plugin //配置插件
    3.npm install --save-dev webpack-dev-server  //启动服务插件


    4.npm i sass sass-loader css-loader style-loader -D  下四个包
           ⬇⬇⬇         ⬇⬇       ⬇⬇
解析sass语法的   解析sass文件  让js引入解析之后的css文件
                       ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇
             解析的时候会用到sass包里的方法
    5.npm install --save-dev html-loader   解析html                npm i html-loader
    6.npm install -Dbabel-loader @babel/core @babel/preset-env 解析函数
    //7. npm i @babel/plugin-transform-arrow-function -D babel配置
    8.npm install -D babel-loader @babel/core @babel/preset-env
    9.npm i axios 配置接口


    npm install --save-dev mini-css-extract-plugin 抽离css的插件
    npm install extract-text-webpack-plugin --save-dev
    10.devtool:'source-map'
        压缩后的代码对应关系(添加源代码和打包后代码的映射关系)
    11.CommonJS 规范
    const xx = require('xxx')引入
    module.expotrs = xxx 抛出
    es module 规范es6的引入和抛出



    const a = 'AAAAA'
    const b =[1,2,3,4]
    //默认抛出
    // export default[123,4]
    // export default{
    //     a,
    //     b
    // }

    //单独抛出 必须跟一个声明变量的语句
        //   引入单独抛出的变量 变量名和必须抛出的变量名字一样
    // 默认抛出 抛出一个值
    export default '默认值'  //名字随便起