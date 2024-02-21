const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");

module.exports = {
	mode: "development",
	entry: "./index.js",
	output: {
		filename: "bundle.js",
		path: "C:\\Users\\Ammar Massoud\\Desktop\\learning-react\\day-02\\",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/i,
				use: ["babel-loader"],
			},
		],
	},
};
