# TrelloToReport

TrelloToReport is a project that allows you to get data from Trello and create a static page for a clients portal.
Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
Prerequisites

- Node.js and npm: You can download the latest version from the official website (https://nodejs.org/).
- A Trello API Key and Token: (https://trello.com/app-key)
- Create a .env file in the root of the project with the following : 

    TRELLO_KEY=YOUR_TRELLO_KEY
    TRELLO_TOKEN=YOUR_TRELLO_TOKEN

## Installing

Clone the repository:

    git clone https://github.com/Krokee/TrelloToReport.git

Install the dependencies:

    npm install

Run the build script to generate the static site

    npm run build

## Running the tests

This project doesn't have test implemented yet

## Deployment

After building the project you will have a dist folder, you can use this folder to deploy the project on a web server.
Built With

- [11ty](https://www.11ty.dev/) - Static site generator
- [Trello](https://developers.trello.com/) - Trello API is used to fetch the data

## Authors

- Romain Koenig - [Krokee](https://github.com/Krokee)
- Based on an original idea by Charly Maillefaud
- ChatGPT gives a hand when in doubt

## License

This project is licensed under the MIT License