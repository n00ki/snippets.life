<script context="module">
	export async function load({ fetch, page }) {
		const { id } = page.params;
		const res = await fetch(`/api/snippets/${id}`);
		const data = await res.json();

		return {
			props: {
				snippet: data.data,
				error: data.error
			}
		};
	}
</script>

<script>
	export let snippet;
	export let error;
</script>

{#if error}
	{error.message}
{:else}
	{snippet.title}
{/if}
