// const {useBabelRc, override, addWebpackModuleRule} = require('customize-cra');

// module.exports = override(
// 	addWebpackModuleRule({
// 		test: /\.(png|jpe?g|webp|tiff?)$/i,
// 		use: [
// 			'file-loader',
// 			{
// 				loader: 'webpack-image-resize-loader',
// 				options: {
// 					width: 1000,
// 				},
// 			},
// 		],
// 	}),
// );

const {useBabelRc, override} = require('customize-cra');

module.exports = override(
	useBabelRc()
);