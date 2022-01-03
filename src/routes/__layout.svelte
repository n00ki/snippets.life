<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	// Components
	import SEO from '$lib/components/SEO.svelte';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';

	// Stores
	import { preferredTheme } from '$lib/stores';

	// Styles
	import '../styles.css';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<SEO />

<main class="container mx-auto sm:h-screen font-scp font-medium text-gray-800 dark:text-gray-100">
	{#if mounted}
		<ThemeSwitcher />
		<div transition:fade>
			<slot />
		</div>
	{/if}
</main>
