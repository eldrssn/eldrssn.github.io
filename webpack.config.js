const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
    mode: 'production',
    entry: './app/js/modules/main.js',
    output: {
        filename: 'main.bundle.js'
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
}

module.exports = config;