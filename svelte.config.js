import adapter from '@sveltejs/adapter-node';

export default {
	kit: {
		adapter: adapter({
			out: 'build',
      precompress: true,
      envPrefix: 'PRODUCTION_',
      polyfill: true,
      //preprocess: preprocess({sass: true}),
		})
	}
};
