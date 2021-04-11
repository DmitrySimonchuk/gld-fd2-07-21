const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
        // new BundleAnalyzerPlugin()    - for analize
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

// Combined 'module.exports'
module.exports = [frontConfig];