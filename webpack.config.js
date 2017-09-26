const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const isDevelopment = process.env.NODE_ENV === 'development';

const config = {
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Blog',
            template: 'public/index.html'
        }),
        new ExtractTextPlugin('style.css'),
        new CopyWebpackPlugin([
            { from: 'src/resources/data.json' },
            { from: 'src/resources/img/logo.jpg', to: 'img/' },
            { from: 'node_modules/font-awesome/fonts', to: 'fonts' },
            { from: 'node_modules/font-awesome/css/font-awesome.min.css' },
        ])
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            actions: path.resolve(__dirname, 'src/actions'),
            containers: path.resolve(__dirname, 'src/containers'),
            views: path.resolve(__dirname, 'src/views'),
            reducers: path.resolve(__dirname, 'src/reducers'),
            styles: path.resolve(__dirname, 'src/resources/styles')
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015', 'stage-0', 'stage-1'],
                        plugins: [
                            'react-hot-loader/babel'
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                                require('autoprefixer')()
                            ]
                        }
                    }]
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    }, {
                        loader: 'sass-loader'
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                                require('autoprefixer')()
                            ]
                        }
                    }],
                    fallback: 'style-loader'
                })
            },
            {
                test: /.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                use: [
                    'url-loader?limit=10000',
                    'img-loader'
                ]
            }
        ]
    },
    node: {
        fs: 'empty'
    }
};

if (isDevelopment) {
    config.output.publicPath = '/';

    config.devtool = 'inline-source-map';

    config.plugins.push(new webpack.HotModuleReplacementPlugin());
} else {
    config.devtool = 'source-map';
    config.plugins.push(new CleanWebpackPlugin(['dist']));
    config.plugins.push(new UglifyJSPlugin({ sourceMap: true }));
}

module.exports = config;
