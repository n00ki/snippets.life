<script>
	import { browser } from '$app/env';
	import { fade } from 'svelte/transition';

	// Stores
	import { preferredTheme } from '$lib/stores';

	function setPrefferedTheme(theme) {
		$preferredTheme = theme;
		localStorage.setItem('theme', $preferredTheme);
		$preferredTheme === 'dark'
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}
</script>

<svelte:head>
	<script>
		if (
			localStorage.getItem('theme') === 'dark'
			// ||
			// (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>
</svelte:head>

{#if $preferredTheme}
	<div in:fade class="flex justify-center pt-4 sm:pt-0 text-gray-800">
		{#if $preferredTheme === 'dark'}
			<button
				class="flex justify-center align-middle bg-white p-2 rounded-md"
				on:click={() => setPrefferedTheme('light')}
			>
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
						d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
					/>
				</svg>
			</button>
		{:else}
			<button
				class="flex justify-center align-middle bg-white p-2 rounded-md"
				on:click={() => setPrefferedTheme('dark')}
			>
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
						d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
					/>
				</svg>
			</button>
		{/if}
	</div>
{/if}
