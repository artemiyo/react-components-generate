const path = require('path')
const ShebangPlugin = require('webpack-shebang-plugin')

module.exports = {
    entry: './src/index.js',
    target: 'async-node',
    mode: 'production',
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [new ShebangPlugin()],
    output: {
        path: path.join(__dirname, 'lib'),
        publicPath: '/',
        filename: 'index.js',
        clean: true,
    },
}
