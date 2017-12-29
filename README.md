# rollup-plugin-svelte-dts
Generate TypeScript definition files from Svelte JavaScript files

## Installation

```bash
npm install --save-dev rollup-plugin-svelte-dts
```

## Usage

Import rollup-plugin-svelte-dts in your rollup.config.js. Place it in your array of Rollup plugins before the main svelte plugin.
Place svelte type definition files from examples/typings to your application source folder.
Currently it will generate *.html.d.ts files only if same name of js file is present in same folder. 

## How to run example

```bash
npm run build:ts
npm run build:example
npm start
```

## Credits
- [Conduitry/rollup-plugin-svelte-combiner](https://github.com/Conduitry/rollup-plugin-svelte-combiner)
- [artem - How to convert a json to a typescript interface?](https://stackoverflow.com/questions/41070689/how-to-convert-a-json-to-a-typescript-interface )   