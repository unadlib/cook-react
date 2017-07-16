/**
 * Author   : unadlib
 * Date     : 2017/7/16
 * Time     : 下午11:47
 * Project [ cook-react ] Coded on WebStorm.
 */
var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: "./dist/",
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                loader: "babel-loader?cacheDirectory", // enable babel-loader cache.
                query: {
                    presets: [["es2015", {modules: false}], "react"]
                }
            }
        ]
    },
    // devtool: "cheap-module-source-map",
    plugins:[
        new webpack.optimize.ModuleConcatenationPlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     },
        //     sourceMap: true,
        // }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        })
    ],
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')] // resolve modules path, narrow modules search.
    }
};
 