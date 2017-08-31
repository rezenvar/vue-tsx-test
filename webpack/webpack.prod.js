const webpack = require('webpack');
const config = require('./webpack.base');
const merge = require('webpack-merge');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');



const prodConfig = {
	devtool: false,
	module: {
		rules: [{
			test: /(\.css|\.scss)/,
			exclude: /node_modules/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: [{
						loader: 'css-loader',
						options: {
							sourceMap: false,
							minimize: true
						}
					},
					{
						loader: 'autoprefixer-loader',
						options: {
							browsers: ['last 5 versions']
						}
					},
					'sass-loader'
				]
			})
		}]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			output: {
				comments: false
			},
			minimize: true,
			sourceMap: false,
			exclude: [/node_modules/]
		}),
		new ExtractTextPlugin('style.css'),
		new CleanWebpackPlugin(['dist'], {
			root: process.cwd()
		})
	]
}






module.exports = merge(config, prodConfig);