const { resolve } = require('path')
const { CleanWebpackPlugin }  = require('clean-webpack-plugin')
const { VueLoaderPlugin }  = require('vue-loader')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name]-[hash:10].js',
        path: resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.(jpg|png|jpeg|svg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8 * 1024,
                            name: '[hash:10].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'vue3项目搭建'
        }),
        /**
         * element-plus按需加载
         *
        */
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin()
    ],
    mode: 'development',
    devServer: {
        static: {
            directory: resolve(__dirname, "dist")
        },
        compress: true,
        port: 9000
    }
}