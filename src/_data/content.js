const EleventyFetch = require("@11ty/eleventy-fetch");
require('dotenv').config();

module.exports = async function () {

	const TRELLO_API_KEY = process.env.TRELLO_API_KEY;
	const TRELLO_TOKEN = process.env.TRELLO_TOKEN;

	const LIST = process.env.WAIT_LIST;

	const fetchURL = `https://api.trello.com/1/lists/${LIST}/cards?key=${TRELLO_API_KEY}&token=${TRELLO_TOKEN}`;
	console.log(fetchURL);

	let json = await EleventyFetch(fetchURL, {
		duration: "15m",
		type: "json",
		verbose: true,
		fetchOptions: {
			// method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}
	});

	const documents = await json;

	// console.log(json);

	return documents;

}