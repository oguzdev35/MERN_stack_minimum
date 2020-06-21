const path = require('path');
const CWD = process.cwd();

module.exports = {
    name: "production",
    entry: [
        path.join(CWD, "client/main.js")
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
    }

};

