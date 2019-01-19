// 这边使用 HtmlWebpackPlugin，将 bundle 好的 <script> 插入到 body。${__dirname} 为 ES6 语法对应到 __dirname
const HtmlWebpackPlugin = require('html-webpack-plugin')

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${__dirname}/app/index.html`,
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    // 档案起始点从 entry 进入，因为是阵列所以也可以是多个档案
    entry: ['./app/index.js'],
    mode: 'production', // mode模式
    // output 是放入产生出来的结果的相关参数
    output: {
        path: `${__dirname}/dist`,
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },

            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'px2rem-loader',
                        // options here
                        options: {
                            remUni: 75
                        }
                    }
                ]
            }
        ]
    },

    // devServer 则是 webpack-dev-server 设定
    devServer: {
        inline: true,
        port: 8008
    },

    // plugins 放置所使用的外挂
    plugins: [HTMLWebpackPluginConfig],
    // 加大文件允许体积，提升报错门栏
    performance: {
        hints: 'warning', // 枚举
        maxAssetSize: 600000, // 整数类型（以字节为单位）
        maxEntrypointSize: 800000, // 整数类型（以字节为单位）
        assetFilter: function(assetFilename) {
            // 提供资源文件名的断言函数
            return (
                assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
            )
        }
    }
}
