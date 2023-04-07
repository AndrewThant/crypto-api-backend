#Backend App for React Cryptocurrency App

This is the backend application for a cryptocurrency app built with Express.js. The app serves as an API server for fetching cryptocurrency news, prices, and data, which is consumed by a separate frontend application.

Features
Fetches cryptocurrency news, prices, and data from third-party APIs.
Provides APIs for retrieving cryptocurrency data.
Utilizes Helmet middleware for security best practices.
Uses Cors middleware for Cross-Origin Resource Sharing (CORS) management.
Prerequisites
Node.js and npm installed on your local machine.
Frontend application for consuming the API endpoints.
Installation
Clone the repository to your local machine.
Navigate to the project directory in the terminal.
Run npm install to install the dependencies.
Run npm start to start the Express.js server.
Usage
The backend app serves as an API server and does not have a user interface. It provides API endpoints for fetching cryptocurrency data, which can be consumed by a separate frontend application.

API Endpoints
The following API endpoints are available:

GET /api/v1/trending_news: Fetches cryptocurrency news from a bing-news rapid-api.
GET /api/trending_coins: Fetches trending cryptocurrency from a coingecko api.
GET /api/chart_data: Fetches price data for 7 days from coingecko api.
GET /api/coindetail: Fetches specific cryptocurrency data with id from coingecko api.
GET /api/search: Fetches searched cryptocurrency data from coingecko api.
GET /api/coin_list: Fetches sorted cryptocurrencies with market-cap rank from coingecko api.
GET /api/bitcoin_price: Fetches specific cryptocurrency price for btc from coingecko api.


You can use tools like Postman or curl to make API requests and test the functionality of the backend app.

Contributing
This is a personal portfolio project created for fun, and contributions are not currently accepted. However, you are welcome to use the code as per the provided license and customize it for your own needs.

License
This project is open-source and available. You are free to use, modify, and distribute the code as per the terms of the license.

Contact
If you have any questions or suggestions, feel free to contact me at myo111thant@gmail.com.
