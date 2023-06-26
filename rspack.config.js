/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
	context: __dirname,
	entry: {
		main: "./src/main.tsx"
	},
	mode: 'production',
	optimization: {
		moduleIds: 'named',
		minimize: false
	},
	builtins: {
		treeShaking: true,
		html: [
			{
				template: "./index.html"
			}
		],
	},
	module: {
		rules: [
			{
				test: /\.svg$/,
				type: "asset"
			}
		]
	}
};
