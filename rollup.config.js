import buble from 'rollup-plugin-buble'

const pack = require('./package.json')
const YEAR = new Date().getFullYear()

export default {
	input: 'plugin/index.js',	
	output:[
		{	
			format: 'cjs',
			file: pack.main,
			name: 'rollup-plugin-svelte-dts',	
		}, {
			format: "es",
			file: pack.jsnext,
			name: 'rollup-plugin-svelte-dts',
		}
	], 	
	plugins: [
		buble()
	],
	banner   () {
		return `/*!
* ${pack.name} v${pack.version}
* (c) ${YEAR} ${pack.author}
* Release under the ${pack.license} License.
*/`
	},

	// Cleaner console
	onwarn (warning) {
		warning = warning && warning.message || warning || ''
		if (warning.startsWith('Treating')) {
			return
		}
	}
}