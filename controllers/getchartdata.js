import axios from "axios";

const getChartData = async (req, res) => {
  try {
    const { id, time } = req.query;

    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${time}`
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

export default getChartData;
