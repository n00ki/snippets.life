<script>
	let title = 'snippets.life';
	let description = 'Life, Coded';
</script>

<svelte:head>
	<!-- Primary tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://snippets.life/" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary" />
	<meta property="twitter:url" content="https://snippets.life/" />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
</svelte:head>
