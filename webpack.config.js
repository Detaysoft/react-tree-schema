var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    mode:'none',
    entry: [
        path.resolve(__dirname, 'src')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "main.js",
        libraryTarget: 'commonjs2',
        library: '',
    },
    devtool: 'sourcemap',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
        ]
    },
    externals: [nodeExternals()]
};