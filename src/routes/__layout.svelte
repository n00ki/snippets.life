<script>
	// Components
	import SEO from '$lib/components/SEO.svelte';

	// Styles
	import '../styles.css';
</script>

<SEO />

<main class="container mx-auto sm:h-screen font-scp font-medium">
	<div class="h-2/5" />
	<slot />
</main>
