<script>
	let title = '';
	let content = '';
	let message = '';
	let error = '';

	let isFormVisible = false;

	async function handleSubmit() {
		if (content.length < 10) {
			content = 'Come on! you can do better than that...';
			setTimeout(() => {
				content = '';
			}, 2000);
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

<a href="/" on:click={() => (isFormVisible = true) && (message = '')}>
	<h2 class="mb-2 text-center">submit a snippet</h2>
</a>

{#if error}
	<h2 class="py-2 bg-white rounded-lg text-center">{error}</h2>
{:else if message}
	<h2 class="py-2 bg-white rounded-lg text-center">{message}</h2>
{/if}

{#if isFormVisible}
	<form class="flex flex-col">
		<div class="mx-auto">
			<button on:click={() => (isFormVisible = false)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</button>
		</div>

		<label for="title" class="p-2">Title</label>
		<input
			type="text"
			name="title"
			bind:value={title}
			placeholder="optional"
			class="p-2 mx-2 rounded-md sm:mx-0 text-gray-800"
		/>

		<label for="content" class="p-2">Content</label>
		<textarea
			name="content"
			rows="10"
			bind:value={content}
			class="p-2 mx-2 rounded-md resize-none sm:mx-0 text-gray-800"
		/>
	</form>

	<button on:click|preventDefault={handleSubmit} class="p-2 w-full mx-auto font-medium"
		>Submit</button
	>
{/if}
