const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfiguration = require('./webpack.common.config.js');

module.exports = webpackMerge(commonConfiguration, {
    devtool: 'inline-eval-cheap-source-map',
    devServer: {
        contentbase: './dist',
        devtool: 'eval',
        hot: true,        //Live-reload
        inline: true,
        port: 8080,        //Port Number
        host: 'localhost',
        proxy: {
            '/api/**': {
                target: 'http://185.76.104.110:8080',
                secure: false,
                bypass: function(req, res, proxyOptions) {
                    if (req.headers.accept.indexOf('html') !== -1) {
                        console.log('Skipping proxy for browser request.');
                        return '/index.html';
                    }
                }
            }
        },
        historyApiFallBack: true,
        compress: true
    }
});
