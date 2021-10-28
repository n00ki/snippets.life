const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				scp: ['Source Code Pro', 'serif']
			}
		}
	},

	plugins: []
};

module.exports = config;
