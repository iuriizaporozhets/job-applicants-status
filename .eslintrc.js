module.exports = {
	'env': {
		'browser': true
	},
	'extends': 'eslint:recommended',
	'parser': 'babel-eslint',
	'parserOptions': {
		'sourceType': 'module',
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 2018
	},
	'plugins': ['react'],
	'rules': {
		'no-unused-vars': 0,
		'indent': ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'always'],
		'no-console': ['error', { allow: ['warn', 'error'] }]
	}
};
