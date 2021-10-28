<script>
	let title = '';
	let content = '';
	let message = '';
	let error = '';

	let isFormVisible = false;

	async function handleSubmit() {
		if (!content) {
			error = 'Oops! Something went wrong...';
			return;
		}

		try {
			const submit = await fetch('/api/snippets', {
				method: 'POST',
				body: JSON.stringify({
					title,
					content
				})
			});

			title = '';
			content = '';
			isFormVisible = false;
			message = `Thanks! Your snippet has been submitted.`;

			setTimeout(() => {
				message = '';
				error = '';
			}, 3000);
		} catch (err) {
			error = err.message;
		}
	}
</script>

<a href="/">
	<h2
		class="mb-2 text-center"
		on:click={() => (isFormVisible = !isFormVisible) && (message = '') && (error = '')}
	>
		submit a snippet
	</h2>
</a>

{#if error}
	<h2 class="py-2 bg-white rounded-lg text-center">{error}</h2>
{:else if message}
	<h2 class="py-2 bg-white rounded-lg text-center">{message}</h2>
{/if}

{#if isFormVisible}
	<form class="flex flex-col">
		<label for="title" class="p-2">Title</label>
		<input
			type="text"
			name="title"
			bind:value={title}
			placeholder="optional"
			aria-required="false"
			class="p-2 mx-2 rounded-md sm:mx-0"
		/>

		<label for="content" class="p-2">Content</label>
		<textarea
			name="content"
			rows="10"
			bind:value={content}
			aria-required="true"
			class="p-2 mx-2 rounded-md resize-none sm:mx-0"
		/>
	</form>

	<button on:click={handleSubmit} class="p-2 w-full mx-auto font-medium">Submit</button>
{/if}
