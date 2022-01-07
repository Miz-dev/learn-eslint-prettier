module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: "true",
	},
	plugins: [],
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:jsx-a11y/recommended",
		"prettier",
	],
	parserOptions: {
		sourceType: "module",
	},
	rules: {
		quotes: "error",
		"no-undef": "error",
		"react/prop-types": "off",
		"react/jsx-props-no-spreading": "off",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
