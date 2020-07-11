// подключаю path к конфигу вебпак
const path = require('path');
// подключил к проекту плагин CSS
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// подключил к проекту плагин HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');
// подключил к проекту хеш-плагин
const WebpackMd5Hash = require('webpack-md5-hash');
// подключил environment variables
const webpack = require('webpack');
// и дополнительную оптимизацию CSS
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
// константа для указания директории файлов
const filename = ext => isDev ? `[name].${ext}` : `[name].[chunkhash].${ext}`;

module.exports = {
    entry: { // делаю несколько точек входа
        index: './src/index.js',
        about: './src/about/about.js',
        analytics: './src/analytics/analytics.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // переписали точку выхода, используя утилиту path
        filename: `JS/${filename('js')}`
    },
    resolve: {
        alias: {
          images: path.resolve(__dirname, '.src/images'),
          vendor: path.resolve(__dirname, '.src/vendor')
        },
      },
    module: {
        rules: [{ // тут описываются правила
            test: /\.js$/, // регулярное выражение, которое ищет все js файлы
            exclude: /node_modules/, // исключает папку node_modules       // вот это бюло нужно для swiper но щас и так работает --> \/(?!(dom7|ssr-window|swiper)\/).*
            use: { loader: "babel-loader" } // весь JS обрабатывается пакетом babel-loader
            },
            {
            test: /\.css$/, // применять это правило только к CSS-файлам
            use: [(isDev ? 'style-loader' : {
                loader: MiniCssExtractPlugin.loader,
                options: { publicPath: '../'}
              }),
                    'css-loader',
                    'postcss-loader'
                 ]
            },
            {
            test: /\.(png|jpg|gif|ico|svg)$/i,
            use: [
                {
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]',
                    esModule: false,
                    }
                },
                {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true,
                        disable: true,
                    }
                },
                 ]
            },
            {
            test: /\.(ttf|woff2?|eot)$/,
            use: {
                    loader: "file-loader",
                    options: {
                        name: "vendor/fonts/[name].[ext]",
                    }
                }
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `./pages/${filename('css')}`
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                    preset: ['default'],
            },
            canPrint: true
        }),
        new HtmlWebpackPlugin({
            // Означает, что:
            inject: false, // стили НЕ нужно прописывать внутри тегов
            template: './src/index.html', // откуда брать образец для сравнения с текущим видом проекта
            filename: 'index.html', // имя выходного файла, то есть того, что окажется в папке dist после сборки
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/about.html',
            filename: 'about.html',
            chunks: ['about']
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/analytics.html',
            filename: 'analytics.html',
            chunks: ['analytics']
        }),
        new WebpackMd5Hash(),
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
};