const path = require('path')
const { BannerPlugin } = require('webpack')

module.exports = {
    entry: './src/index.js',
    target: 'async-node',
    mode: 'production',
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [new BannerPlugin({ banner: '#!/usr/bin/env node', raw: true })],
    output: {
        path: path.join(__dirname, 'lib'),
        publicPath: '/',
        filename: 'index.js',
        clean: true,
    },
}
