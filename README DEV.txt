npm install --save-dev customize-cra react-app-rewired

then 
 "scripts": {
        "start": "react-app-rewired start",
        "build": "react-app-rewired build",
        "test": "react-app-rewired test",
        "eject": "react-scripts eject"
    },

then do the babel file 
{
    "plugins": ["react-optimized-image/plugin"]
}


then config 

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