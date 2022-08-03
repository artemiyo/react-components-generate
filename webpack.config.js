const path = require('path');

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
    output: {
        path: path.join(__dirname, 'lib'),
        publicPath: "/",
        filename: "index.js",
        clean: true
    }
}
