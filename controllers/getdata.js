import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const api_key = process.env.API_KEY;

// GET /crypto/categories
const getGlobalData = async (req, res) => {
  try {
    const response = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": api_key, // Replace with your API key
        },
      }
    );
    const categories = response.data.data;

    // Set the CORS headers
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader(
    //   "Access-Control-Allow-Methods",
    //   "GET, POST, PUT, DELETE, OPTIONS"
    // );
    // res.setHeader(
    //   "Access-Control-Allow-Headers",
    //   "Content-Type, Authorization"
    // );
    // res.setHeader("Access-Control-Allow-Credentials", true);

    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export default getGlobalData;
