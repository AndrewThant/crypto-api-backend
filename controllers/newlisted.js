import axios from "axios";

const getNewListed = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
    );

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

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getNewListed;
