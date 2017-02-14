
var webpackConfig = require('./webpack.common.config');
webpackConfig.entry = {};

module.exports = function(config) {
    config.set({
        // ... normal karma configuration
        basePath: '../',

        files: [
            // all files ending in '_test'
            './src/**/*.js',
            './src/**/*.spec.js'
        ],

        preprocessors: {
            // add webpack as preprocessor
            './src/**/*.js': ['babel'],      
            './src/**/*.spec.js': ['babel']
        },
        browsers: ['PhantomJS'],

        webpack: webpackConfig,

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i.e.
            noInfo: true,
            // and use stats to turn off verbose output
            stats: {
                // options i.e. 
                chunks: false
            }
        },

        plugins: [
            require('karma-webpack'),
            require('karma-babel-preprocessor'),
            require('karma-phantomjs-launcher'),
            require('karma-jasmine')
        ]
    });
};