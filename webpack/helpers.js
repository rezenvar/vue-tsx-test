
const path = require('path');

exports.root = (pathname) => path.join(__dirname, '../' + pathname);

// ,
	// "files": [
	// 	"./src/**/*",
	// 	"./typings/**/*",
	// 	"./node_modules/@types/**/*"
	// ]