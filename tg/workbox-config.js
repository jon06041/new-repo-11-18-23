module.exports = {
	globDirectory: 'web-build/',
	globPatterns: [
		'**/*.{json,png,ico,html,js,txt,ttf,jpg}'
	],
	swDest: 'web-build/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};