const webpack = require('webpack');
const config = require('./webpack.base');
const merge = require('webpack-merge');

const devConfig = {
	devtool: '#cheap-module-eval-source-map',
	module: {

		rules: [{
			test: /(\.css|\.scss)/,
			exclude: /node_modules/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						sourceMap: true,
						minimize: false
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
		}]
	}
};








module.exports = merge(config, devConfig);