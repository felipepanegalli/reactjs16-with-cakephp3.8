const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'webroot/js/react/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'webroot/js'),
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin()
        ]
    }
}
