import svelte from 'rollup-plugin-svelte';
import typescript from 'rollup-plugin-typescript2';
import tscompile from 'typescript';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

import sveltedts from '../plugin/index';

const production = !process.env.ROLLUP_WATCH;

console.log('production', production);

export default {
	input: 'examples/main.ts',	
	output: {
		sourcemap: true,	
		format: 'iife',
		file: 'public/app.js',
		name: 'app',
	},
	plugins: [
		commonjs(),
		sveltedts(),
		typescript({typescript: tscompile}),
		svelte({
			dev: !production,
			css: css => {
				css.write('public/app.css');
			},
			cascade: true
		}),
		resolve({
			jsnext: true,
			main: true,
			browser: true
		}),
		production && buble({ exclude: 'node_modules/**' }),
		production && uglify()
	]
};