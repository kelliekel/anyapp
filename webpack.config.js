// const glob = require('glob')

// module.exports = {
// 	//entry: [
// 	//	"./projects/components/src/lib/styles.scss"
// 	//].concat(glob.sync("./projects/components/src/assets/*.js")), // ['./projects/components/src/assets/*.js'],
// 	entry: {
// 		scripts: [
// 			"./node_modules/material-design-lite/material.min.js",
// 			"./node_modules/moment/min/moment.min.js",
// 			"./node_modules/hammerjs/hammer.min.js"
// 		],
// 		material: [
// 			"./node_modules/material-design-lite/material.min.js",
// 		],
// 		moment: [
// 			"./node_modules/moment/min/moment.min.js",
// 		],
// 		hammerjs: [
// 			"./node_modules/hammerjs/hammer.min.js"
// 		]
// 	},
// 	output: {
// 		//path: "components/material/", //The provided value "components/material/" is not an absolute path!
// 		filename: "components/assets/scripts/[name].bundle.js"
// 		//filename: 'components/material/material.bundle.js'
// 	}
// };

var config = {
	// TODO: Add common Configuration
	module: {},
};

var scriptsConfig = Object.assign({}, config, {
	name: "scripts",
	entry: {
		scripts: [
			"./node_modules/material-design-lite/material.min.js",
			"./node_modules/moment/min/moment.min.js",
			"./node_modules/hammerjs/hammer.min.js"
		]
	},
	output: {
		filename: "components/assets/scripts/[name].bundle.js"
	},
});
var materialConfig = Object.assign({}, config, {
	name: "material",
	entry: {
		material: [
			"./node_modules/material-design-lite/material.min.js"
		]
	},
	output: {
		filename: "components/assets/scripts/individual/[name].js"
	},
});
var momentConfig = Object.assign({}, config, {
	name: "moment",
	entry: {
		moment: [
			"./node_modules/moment/min/moment.min.js"
		]
	},
	output: {
		filename: "components/assets/scripts/individual/[name].js"
	},
});
var hammerjsConfig = Object.assign({}, config, {
	name: "hammerjs",
	entry: {
		hammerjs: [
			"./node_modules/hammerjs/hammer.min.js",
		]
	},
	output: {
		filename: "components/assets/scripts/individual/[name].js"
	},
});

// Return Array of Configurations
module.exports = [
	scriptsConfig, materialConfig, momentConfig, hammerjsConfig
];