const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');


const {
	root
} = require('./helpers');



const config = {};



config.entry = [
	root('src/app/polyfills.ts'),
	root('src/app/app.ts')
];



config.output = {
	path: root('dist'),
	filename: 'js/[name].js',
	publicPath: '/',
	devtoolModuleFilenameTemplate: '[absolute-resource-path]',
	devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
};


config.resolve = {
	alias: {
		// vue: 'vue/dist/vue.js',
		components: root('src/js/components'),
		controls: root('src/js/controls'),
		'@': root('src/js'),
		api: root('src/js/store/api/api.js')
	},
	modules: [
		root('src/app'),
		'node_modules'
	],
	extensions: ['.vue', '.js', '.json', '.ts', '.tsx', '.pug', '.*']
};



config.module = {};



config.module.rules = [{
		test: /(\.ts|\.tsx)$/,
		use: ['babel-loader','awesome-typescript-loader'],
		exclude: /node_modules/,
	}
];



config.plugins = [
	new CopyWebpackPlugin([
		{ from : root('src/public/img'), to : 'img' },
		{ from : root('src/public/fonts'), to : 'fonts' }
	]),
	new HtmlWebpackPlugin({
		template: root('src/public/index.html')
	}),
	new webpack.DefinePlugin({
		'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
		'DEV': process.env.DEV,
		'DEBUG': process.env.DEBUG
	}),
	new webpack.ProvidePlugin({
		Vue: 'vue',
		Component: ['vue-class-component', 'default']
	}),
	new FriendlyErrorsWebpackPlugin(),
	new webpack.optimize.CommonsChunkPlugin({
		name: ['polyfills']
	})
]






module.exports = config;