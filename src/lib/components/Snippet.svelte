<script>
	import { Highlight } from 'svelte-highlight';
	import javascript from 'svelte-highlight/src/languages/javascript';
	import 'svelte-highlight/src/styles/night-owl.css';

	import Animate from '$lib/components/Animate.svelte';

	export let title = '';
	export let code = '';
</script>

<Animate type="fadeIn">
	<div class="max-w-2xl mx-auto my-4 bg-gray-50 sm:rounded-xl overflow-hidden shadow-lg">
		{#if title}
			<h2 class="p-2">{title}</h2>
		{/if}

		<Highlight language={javascript} {code} />
	</div>
</Animate>
