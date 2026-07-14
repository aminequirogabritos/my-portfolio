import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');

export default {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({

            fallback: '404.html',
        }),
		paths: {
			base: dev ? '' : '/my-portfolio'
		},
		outDir: '.svelte-kit/output'
	}
};
