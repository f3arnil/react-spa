const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const port = 3000;
const DIST_DIR = path.resolve(__dirname, 'dist');
const HTML_FILE = path.resolve(DIST_DIR, 'index.html');
const isDevelopment = process.env.NODE_ENV === 'development';
const config = require('./webpack.config.js');
const compiler = webpack(config);

if (isDevelopment) {
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }));

    app.use(webpackHotMiddleware(compiler));

    app.use(express.static(DIST_DIR));

    app.get('*', (req, res, next) => {
        compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
            if (err) {
                return next(err);
            }

            res.set('content-type', 'text/html');
            res.send(result);
            res.end();
        });
    });
} else {
    app.use(express.static(DIST_DIR));

    app.get('*', (req, res) => res.sendFile(HTML_FILE));
}

app.listen(port, () => console.log(`App listening on port ${port}`));
