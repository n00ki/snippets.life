<script>
	// Components
	import Snippet from '$lib/components/Snippet.svelte';

	async function getData() {
		const res = await fetch('/api/snippets');
		const data = await res.json();

		if (data.error) throw new Error(data.error.message);

		return data.data;
	}
</script>

<section class="py-2">
	{#await getData()}
		<h2 class="text-center">Lodaing...</h2>
	{:then data}
		{#each data as snippet}
			{#if snippet.title}
				<Snippet title={snippet.title} code={snippet.content} />
			{:else}
				<Snippet code={snippet.content} />
			{/if}
		{/each}
	{:catch error}
		<pre>{error}</pre>
	{/await}
</section>
