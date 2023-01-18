const EleventyFetch = require("@11ty/eleventy-fetch");
require('dotenv').config();

module.exports = async function () {

	const TRELLO_API_KEY = process.env.TRELLO_API_KEY;
	const TRELLO_TOKEN = process.env.TRELLO_TOKEN;

	const LIST = process.env.WAIT_LIST;

	const listFetchURL = `https://api.trello.com/1/lists/${LIST}/cards?key=${TRELLO_API_KEY}&token=${TRELLO_TOKEN}`;
	console.log(listFetchURL);

	const documents = [];

	try {
		// Envoi de la requête pour récupérer les cartes de la liste
		const response = await fetch(listFetchURL);
		const cards = await response.json();

		// Boucle sur les cartes pour afficher le descriptif et le dernier commentaire
		for (const card of cards) {
			// Descriptif de la carte
			console.log(`Descriptif de la carte: ${card.desc}`);
			// Envoi de la requête pour récupérer les actions de la carte
			const response = await fetch(`https://api.trello.com/1/cards/${card.id}/actions?filter=commentCard&key=${TRELLO_API_KEY}&token=${TRELLO_TOKEN}`);
			const actions = await response.json();


			let lastComment = "Aucun commentaire trouvé sur la carte";

			if (actions.length > 0) {
				// Récupère le dernier commentaire
				lastComment = actions[0].data.text;
				console.log(`Dernier commentaire: ${lastComment}`);
			} else {
				console.log('Aucun commentaire trouvé sur la carte');
			}

			let document = {
				name: card.name,
				descriptif: card.desc,
				lastComment: lastComment
			}
			documents.push(document)
		}
	} catch (error) {
		console.error(error);
	}



	return documents;

}