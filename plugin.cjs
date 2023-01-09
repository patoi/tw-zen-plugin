const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addBase }) => {
	addBase({
		'.zen-fade': {
			'@apply delay-300 duration-[3000ms] opacity-0 transition-all transform-gpu': {}
		},
		'.zen-pop-up': {
			'@apply delay-500 duration-[1800ms] origin-bottom opacity-0 translate-y-16 transition-all transform-gpu':
				{}
		},
		'.zen-from-left': {
			'@apply delay-700 duration-[1800ms] opacity-0 -translate-x-1/3 transition-all transform-gpu':
				{}
		},
		'.zen-from-right': {
			'@apply delay-700 duration-[1800ms] opacity-0 translate-x-1/3 transition-all transform-gpu':
				{}
		},
		'.zen-spin-forever': {
			'@apply animate-[spin_30s_linear_infinite]': {}
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
