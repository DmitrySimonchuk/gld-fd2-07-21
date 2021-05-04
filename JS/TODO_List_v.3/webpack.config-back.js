const path = require('path');
const nodeExternals = require('webpack-node-externals');

const backConfig = {
    // Stuff the entire webpack-back.config.js
    // without the require and module.exports lines
    target: 'node',
    mode: 'production',
    entry: {
        app: ['./src/backend/index.js']
    },
    output: {
        filename: 'bundle-back.js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: [nodeExternals()],
};

// Combined 'module.exports'
module.exports = [backConfig];