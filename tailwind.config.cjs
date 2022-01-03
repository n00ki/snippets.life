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
	darkMode: 'class',
	plugins: []
};

module.exports = config;
