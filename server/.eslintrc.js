{
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"project": "tsconfig.json",
		"sourceType": "module"
	},
	"extends": [],
	"plugins": [
		"@typescript-eslint"
	],
	"root": true,
	"env": {
		"node": true,
		"jest": true
	},
	"settings": {
		"import/parsers": {
			"@typescript-eslint/parser": [
				".js",
				".ts"
			]
		},
		"import/resolver": {
			"typescript": {}
		}
	},
	"rules": {}
}
