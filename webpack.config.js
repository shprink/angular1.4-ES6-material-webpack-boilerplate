var path = require('path'),
    webpack = require("webpack"),
    libPath = path.join(__dirname, 'lib'),
    wwwPath = path.join(__dirname, 'www'),
    pkg = require('./package.json'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(libPath, 'index.js'),
    output: {
        path: path.join(wwwPath),
        filename: 'bundle-[hash:6].js'
    },
    module: {
        loaders: [{
            test: /\.html$/,
            loader: 'file?name=templates/[name]-[hash:6].html'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'file?name=img/[name].[ext]' // inline base64 URLs for <=10kb images, direct URLs for the rest
        }, {
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.scss$/,
            loader: "style!css!autoprefixer!sass"
        }, {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: "ng-annotate?add=true!babel"
        }, {
            test: [/fontawesome-webfont\.svg/, /fontawesome-webfont\.eot/, /fontawesome-webfont\.ttf/, /fontawesome-webfont\.woff/, /fontawesome-webfont\.woff2/],
            loader: 'file?name=fonts/[name].[ext]'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            pkg: pkg,
            template: path.join(libPath, 'index.html')
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
    ]
};
