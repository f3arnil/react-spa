const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
            { from: 'src/resources/img/logo.jpg', to: 'img/' }
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
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'url-loader?limit=10000',
                    'img-loader'
                ]
            }
        ]
    }
};

module.exports = config;
