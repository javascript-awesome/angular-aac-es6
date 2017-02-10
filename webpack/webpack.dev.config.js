const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfiguration = require('./webpack.common.config.js');

module.exports = webpackMerge(commonConfiguration, {
    devtool: 'nline-eval-cheap-source-map',
    devServer: {
        historyApiFallBack: true,
        contentbase: './dist',
        compress: true,
        inline: true,
        port: 8080,
        proxy: {
            '/api/**': {
                target: 'http://185.76.104.110:8080',
                secure: false
            }
        }
    }
});
