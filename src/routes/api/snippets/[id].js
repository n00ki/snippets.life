import { db } from '$lib/db.js';

// GET /snippet
export async function get({ params }) {
	const { id } = params;
	let { data, error } = await db.from('snippets').select('*').eq('id', id).single();

	return {
		body: {
			data,
			error
		}
	};
}
