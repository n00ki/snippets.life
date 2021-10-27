import { db } from '$lib/db.js';

// GET /snippets
export async function get() {
	let { data, error } = await db.from('snippets').select('*');

	return {
		body: {
			data,
			error
		}
	};
}

// POST /snippets
export async function post(request) {
	const formData = JSON.parse(request.body);

	let { data, error } = await db.from('snippets').insert([
		{
			title: formData.title,
			content: formData.content
		}
	]);

	return {
		data,
		error
	};
}
