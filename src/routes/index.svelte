<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/api/snippets');
		const data = await res.json();

		return {
			props: {
				snippets: data.data,
				error: data.error
			}
		};
	}
</script>

<script>
	import Snippet from '$lib/components/Snippet.svelte';
	import Form from '$lib/components/Form.svelte';
	import Animate from '$lib/components/Animate.svelte';

	export let snippets;
	export let error;
</script>

<div>
	{#if error}
		{error.message}
	{:else}
		{#each snippets as snippet}
			{snippet.title}
			{snippet.content}
		{/each}
	{/if}
</div>

<Snippet />

<Form />
