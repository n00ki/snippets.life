<script>
	// Components
	import SnippetsList from '$lib/components/SnippetsList.svelte';
	import Form from '$lib/components/Form.svelte';
	import Animate from '$lib/components/Animate.svelte';
</script>

<Animate type="swing">
	<section class="my-8 text-center bg-yellow-50">
		<h1 class="mb-2 text-3xl sm:text-4xl font-semibold">snippets.life</h1>
		<h1 class="text-xl font-medium">Life, Coded</h1>
	</section>
</Animate>

<section class="max-w-2xl mx-auto my-4">
	<Form />
</section>

<SnippetsList />
