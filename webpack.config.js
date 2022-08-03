const path = require('path');
const ShebangPlugin = require('webpack-shebang-plugin');

module.exports = {
    entry: './src/index.js',
    target: 'async-node',
    mode: "production",
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [new ShebangPlugin()],
    output: {
        path: path.join(__dirname, 'lib'),
        publicPath: "/",
        filename: "index.js",
        clean: true
    }
}
