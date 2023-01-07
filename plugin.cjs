const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addBase }) => {
	addBase({
		'.zen-fade': {
			'@apply delay-300 duration-[3000ms] opacity-0 transition-all transform-gpu': {}
		},
		'.zen-pop-up': {
			'@apply duration-700 origin-bottom opacity-0 translate-y-8 transition-all transform-gpu': {}
		},
		'.zen-from-left': {
			'@apply duration-[1500ms] opacity-0 -translate-x-1/3 transition-all transform-gpu': {}
		},
		'.zen-from-right': {
			'@apply duration-[1500ms] opacity-0 translate-x-1/3 transition-all transform-gpu': {}
		},
		'.zen-spin-forever': {
			animation: 'linear spin-360 40s infinite'
		},
		'@keyframes spin-360': {
			'0%': {
				transform: 'rotate(0deg)'
			},
			'100%': {
				transform: 'rotate(360deg)'
			}
		},
		'.zen--suspend': {
			'animation-play-state': 'paused'
		},
		'.zen--off': {
			'@apply ease-out opacity-100 translate-x-0 translate-y-0 rotate-0': {}
		},
		'.zen--reduced': {
			'@apply ease-out opacity-100 translate-x-0 translate-y-0 rotate-0': {}
		}
	})
})
