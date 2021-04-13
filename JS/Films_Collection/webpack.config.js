const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const nodeExternals = require('webpack-node-externals');

const frontConfig = {
    // Stuff the entire webpack-front.config.js
    // without the require and module.exports lines
    entry: ['./src/frontend/main.js'],
    mode: 'production',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'Movie App',
            template: path.resolve(__dirname, 'src/frontend/index.html')
        }),
        new MiniCssExtractPlugin(),
        // new BundleAnalyzerPlugin(),    - for analize
        /*new ProvidePlugin({
            $: 'node_modules/jquery-confirm/dist/jquery-confirm.min.js'
        })*/
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                exclude: /\.module.s[ac]ss$/i,           
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.module.s[ac]ss$/i,               
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                compileType: 'module',
                                localIdentName: '[local]_[hash:base64:5]',
                                exportLocalsConvention: 'camelCaseOnly'
                            }                            
                        }
                    },
                    'sass-loader'
                ],
            },
        ],
    },
};

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
module.exports = [frontConfig, backConfig];