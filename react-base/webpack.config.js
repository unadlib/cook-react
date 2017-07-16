/**
 * Author   : unadlib
 * Date     : 2017/7/16
 * Time     : 下午11:47
 * Project [ cook-react ] Coded on WebStorm.
 */

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: require('path').resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: "./dist/",
    },
    module: {
        loaders: [
            {
                test: /\.js|\.jsx/,
                exclude: /node_modules/,
                loader: "babel-loader",
            }
        ]
    }
};
 