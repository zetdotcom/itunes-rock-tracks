const CORS_ANYWHERE = 'https://cors-anywhere.herokuapp.com';
const tracksApi = 'https://itunes.apple.com/search?term=rock&media=music';

export async function getTracks() {
	const res = await fetch(`${CORS_ANYWHERE}/${tracksApi}`);
	const json = await res.json();
	const { results } = await json;
	return results;
}
