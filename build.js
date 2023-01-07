import fs from 'node:fs/promises'
import esbuild from 'esbuild'

try {
	await fs.access('./dist')
} catch (error) {
	await fs.mkdir('./dist', { mode: '0744' })
}

await fs.copyFile('./init.d.ts', './dist/init.d.ts')
await fs.copyFile('./init.js', './dist/init.js')
await fs.copyFile('./plugin.cjs', './dist/plugin.cjs')

build({
	entryPoints: ['init.cdn.js'],
	outfile: 'dist/init.min.js',
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
