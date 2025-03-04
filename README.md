# Currency Exchanger User

## Description

A simple currency exchange rate viewer that fetches the latest exchange rates using the Currency Freaks API.

## Installation

1. **Clone the repository**

   ```sh
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Run the application**
   ```sh
   npm run dev
   ```

## API Setup

This project uses the [Currency Freaks API](https://currencyfreaks.com/) to fetch exchange rates.

1. Create an account at [Currency Freaks](https://currencyfreaks.com/)
2. Get your API key
3. Set up an environment variable by adding the following in a `.env` file:
   ```sh
   VITE_API_KEY=your_api_key_here
   ```

## API Configuration

The app fetches exchange rates using:

```js
const BASE_URL = "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=";
const API_KEY = import.meta.env.VITE_API_KEY;
```

## License

This project is open-source and free to use.
