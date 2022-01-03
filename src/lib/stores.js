import { writable } from 'svelte/store';
import { browser } from '$app/env';

export let preferredTheme = writable(getPreferredTheme());

function getPreferredTheme() {
	if (browser) {
		return localStorage.getItem('theme') || 'light';
	}
	return 'light';
}
