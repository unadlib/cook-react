## Optimize for React

1. Enable Tree Shaking and Minification

    Install babel-preset-es2015-native-modules
    ```base
    yarn add --dev babel-preset-es2015-native-modules
    ```

    Add babel config preset:
    ```node
    ["es2015", {modules: false}]
    ```

    Run webpack with argument "--optimize-minimize" or use UglifyJsPlugin.(bundle.js 1M->225K)
    ```node
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        sourceMap: true,
    })
    ```
    (It must install babel-preset-es2015-native-modules)

    Add plugin(bundle.js 225K->147K):
    ```node
    new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify("production")
    })
    ```
2. Enable sourceMap

    Add webpack config:
    ```node
    devtool: require('yargs').argv.env==="production"?"cheap-module-source-map":"cheap-module-eval-source-map"
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
        }),
    ]
    ```
    Run webpack build use `webpack --env production`

3. Enable the webpack3 of scope hoisting

    Add webpack config's plugin:
    ```node
    new webpack.optimize.ModuleConcatenationPlugin()
    ```

4. User Happypack

    ```node
    var HappyPack = require('happypack'),
        os = require('os'),
        happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

    modules: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'HappyPack/loader?id=Happypack',
                exclude: /node_modules/
            }
        ]
    }

    plugins: [
        new HappyPack({
            id: 'Happypack',
            cache: true,
            threadPool: happyThreadPool,
            loaders: [{
                path: 'babel',
                query: {
                    cacheDirectory: '.webpack_cache',
                    presets: [
                        ["es2015", {modules: false}],
                        'react'
                    ]
                }
            }]
        }),
    ]
    ```

5. Vendor and code splitting CommonsChunkPlugin