<script>
	// Components
	import SEO from '$lib/components/SEO.svelte';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';

	// Stores
	import { preferredTheme } from '$lib/stores';

	// Styles
	import '../styles.css';
</script>

<SEO />

<main class="container mx-auto sm:h-screen font-scp font-medium text-gray-800 dark:text-gray-100">
	<div class="h-2/5" />
	<ThemeSwitcher />
	<slot />
</main>
