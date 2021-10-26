import { db } from '$lib/db.js';

// GET /snippets
export async function get() {
	let { data, error } = await db.from('snippets').select();

	return {
		body: {
			data,
			error
		}
	};
}
