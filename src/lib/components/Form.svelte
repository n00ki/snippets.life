<script>
	let title = '';
	let content = '';

	async function handleSubmit() {
		const submit = await fetch('/api/snippets', {
			method: 'POST',
			body: JSON.stringify({
				title,
				content
			})
		});

		title = '';
		content = '';
	}
</script>

<form class="flex flex-col">
	<label for="title" class="p-2">Title</label>
	<input
		type="text"
		name="title"
		placeholder="optional"
		bind:value={title}
		required="false"
		class="p-2"
	/>

	<label for="content" class="p-2">Content</label>
	<textarea name="content" rows="10" bind:value={content} class="p-2 resize-none" />
</form>

<button on:click={handleSubmit} class="p-2">new snippet</button>
