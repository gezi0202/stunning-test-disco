const path =require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


//webpack 配置项
module.exports = { //配置的是如何输入，如何输出
    mode:'development',  // 开发模式'development' 为了方便调试 ；；；； 'production'生产模式 压缩代码越少越好
    
    //多入口  单出口  将多个入口文件合并成一个js文件 
    // entry:['./src/index.js','./src/details.js'], //默认只能找js 配置入口文件
    // output:{
    //     path:path.join(__dirname , 'build'), // 输出的文件夹，绝对路径
    //     filename:'index.js', //build里输出的文件名
    //     clean:true // 自动删/除之前打包的文件(每次输出的时候将上一次的文件清理掉)
    // },
    //多入口 多个出口
    entry:{
        app1:'./src/index/index.js',
        app2:'./src/details/details.js',
        app3:'./src/search/search.js'

    },
    devtool:'source-map',//添加源代码和打包后代码的映射关系
    output:{
        path:path.join(__dirname,'build'),//输出的文件夹，绝对路径
        //[name] //输出的文件名，根据入口配置的key输出对应的文件名
        //[hash:8] 根据文件内容生成ha xi zhi ,防止代码更新时用户读取缓存
        filename:'js/[name].[hash:8].js',
        clean:true,//自动删除之前打包的文件
        assetModuleFilename:'imgs/[name].[hash:8][ext]'//图片名称
    },
    module:{ 
        //可以添加很多种规则  配置各种loader， loader的作用就是解析除了js和json以外的文件
        rules:[
            {
                test: /\.(s?css|sass)$/,
                //MiniCssExtractPlugin.loader 抽离单独的css文件
                use:[ MiniCssExtractPlugin.loader,'css-loader','sass-loader' ], //从前往后写 从后往前解析  解析之后将它放在了行内样式里
                // sideEffects: true,
                // sideEffects: ['.cyles/*.css'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource', //使用webpack5 内置的资源管理模块处理图片
                // parser:{
                //     dataUrlCondition:{
                //         maxSize: 15*1024   //4kb
                //     }
                // }
            },
            {
            test: /\.html$/,
            use:'html-loader'
            },
            {
               test:/\.js$/,
               exclude:/node_modules/,
               use:'babel-loader'
            }
        ],
    },
    plugins:[//配置插件
        new HtmlWebpackPlugin({//复制HTML 文件，自动把生成的js引入到html
            template:'./src/index.html',
            filename:'index.html',
            chunks:['app1']//设置引入的js文件 (要引入的模块)
        }),
        new HtmlWebpackPlugin({//复制HTML 文件，自动把生成的js引入到html
            template:'./src/details.html',
            filename:'details.html', 
            chunks:['app2']//设置引入的js文件(要引入的模块)
        }),
        //配置抽离css文件
        new MiniCssExtractPlugin({
            filename:'css/[name].[hash:8].css'
            
        })
    ],
    devServer:{ //配置本地开发服务器
        port:12171,
        open:true, //自动打开浏览器
        // proxy:[  //旧的版本
        //     '/api':{
        //         targat:'http://ustbhuangyi.com',
        //         pathRewrite: { '^/api': '' },
        //         changeOrigin:true,
        //     }
        // ],
        proxy: [  //proxy的作用 用来处理跨域问题
            {
            //当请求/api/abc——————>然后会转发到 http://ustbhuangyi.com/abc
              context: ['/api'],
              target: 'http://ustbhuangyi.com',
              pathRewrite: { '^/api': '' },
              changeOrigin:true,
            },
          ],

    },
    resolve:{
        alias:{ //路径别名 配置常用目录别名
            '@':path.join(__dirname , 'src'),
            'utils':path.join(__dirname , 'src/utils')
        }
    }
}
//希望打包的时候起个服务 能自动将打包的文件引过来 webpack打包的时候将页面打包过来

