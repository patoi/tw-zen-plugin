// example configuration
module.exports = {
	mode: 'jit',
	content: ['./index.html', './src/**/*.{js,ts}'],
	darkMode: 'media',
	plugins: [require('./plugin.cjs')],
	safelist: ['zen--suspend', 'zen--off', 'zen--reduced']
}
