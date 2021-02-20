const sveltePreprocess = require('svelte-preprocess');
const production = !process.env.ROLLUP_WATCH;

module.exports = {
    preprocess: sveltePreprocess({
        sourceMap: !production,
        defaults: {
            script: 'typescript',
            style: 'scss',
        },
        scss: {
            // We can use a path relative to the root because
            // svelte-preprocess automatically adds it to `includePaths`
            // if none is defined.
            prependData: `@import 'src/styles/variables.scss';`,
        },
        dev: !production,
        // we'll extract any component CSS out into
        // a separate file — better for performance
        css: (css) => {
            css.write('public/bundle.css');
        },
    }), // ...other svelte options
};
