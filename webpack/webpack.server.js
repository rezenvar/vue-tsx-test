const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const merge = require('webpack-merge');
const config = require('./webpack.dev');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const {
	root
} = require('./helpers');




const serverConfig = {
	devServer: {
		inline: true,
		quiet: true,
		hot: true,
		host: 'localhost',
		port: process.env.PORT,
		contentBase: root('dist'),
		publicPath: '/',
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new OpenBrowserPlugin({url: `http://localhost:${process.env.PORT}` })
	]
	
}


module.exports = merge(config, serverConfig);