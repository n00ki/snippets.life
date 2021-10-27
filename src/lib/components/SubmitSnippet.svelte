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

<form>
	<label for="title">Title</label>
	<input type="text" name="title" bind:value={title} />

	<label for="content">Content</label>
	<input type="text" name="content" bind:value={content} />
</form>

<button on:click={handleSubmit}>new snippet</button>
