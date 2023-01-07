export default function init() {
	const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
	// init motion reduce
	reducedMotion(mediaQuery.matches)
	// handling change event
	mediaQuery.addEventListener('change', () => {
		reducedMotion(mediaQuery.matches)
	})

	/**
	 * Reduce motion mode handler.
	 * @param {boolean} isReduced
	 */
	function reducedMotion(isReduced) {
		const elements = document.querySelectorAll('[class*="zen-"]')
		elements.forEach(element => {
			if (isReduced) {
				element.classList.add('zen--reduced')
			} else {
				element.classList.remove('zen--reduced')
			}
		})
		// remove/add listener
		if (isReduced) {
			// Reduce motion mode enabled
			document.removeEventListener('DOMContentLoaded', intersectionObserverHandler)
		} else {
			if (document.readyState !== 'loading') {
				intersectionObserverHandler()
			} else {
				// Reduce motion mode disabled
				document.addEventListener('DOMContentLoaded', intersectionObserverHandler)
			}
		}
	}

	/**
	 * Handling IntersectionObserver
	 */
	function intersectionObserverHandler() {
		const elements = document.querySelectorAll('[class*="zen-"]')
		elements.forEach(
			element => {
				let observer = new IntersectionObserver(entries => {
					entries.forEach(entry => {
						// using isIntersecting, because zero bug: https://davidwalsh.name/intersection-observers
						if (element.classList.contains('zen-pause')) {
							// animation start, pause, cont.
							entry.isIntersecting
								? element.classList.remove('zen--suspend')
								: element.classList.add('zen--suspend')
						} else {
							// animation start, stop, restart
							entry.isIntersecting
								? element.classList.add('zen--off')
								: element.classList.remove('zen--off')
						}
						// one time animation, and never again
						if (element.classList.contains('zen-once') && entry.isIntersecting) {
							element.classList.add('zen--off')
							observer.disconnect()
						}
					})
				})
				observer.observe(element)
			},
			{ treshold: 0.2 }
		)
	}
}
