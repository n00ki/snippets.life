<script>
	import { HighlightAuto } from 'svelte-highlight';
	import 'svelte-highlight/src/styles/atom-one-dark.css';

	let code = `export function Something() {
		return 'something'
	}`;
</script>

<div class="border-2 rounded-lg overflow-hidden">
	<HighlightAuto {code} />
</div>
