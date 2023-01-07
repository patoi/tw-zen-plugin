import esbuild from 'esbuild'

build({
	entryPoints: ['init.cdn.js'],
	outfile: 'init.min.js',
	platform: 'browser',
	define: { CDN: 'true' }
})

async function build(options) {
	options.define || (options.define = {})
	try {
		await esbuild.build({
			...options,
			minify: true,
			bundle: true
		})
	} catch (error) {
		console.log(error)
	}
}
