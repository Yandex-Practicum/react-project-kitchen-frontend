module.exports = {
	parser: "@typescript-eslint/parser",
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint"],
	rules: {
		"react/react-in-jsx-scope": "off",
		"react/prop-types": "off",
		//Правило для того что убрать ошибку на устаревшие компоненты в новой версии реакта
		"react/no-deprecated": "off",
		//Правило для того чтобы убрать лексическое объявление в switch
		"no-case-declarations": "off",
	},
};
