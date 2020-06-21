const path = require('path');
const webpack = require('webpack');
const CWD = process.cwd();

module.exports = {
    name: "browser",
    mode: "development",
    devtool: "eval-source-map",
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(CWD, 'client/main.js')
    ],
    output: {
        path: path.join(CWD, '/dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    }
};