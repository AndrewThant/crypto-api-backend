import axios from "axios";

const getTrendingNews = async (req, res) => {
  try {
    const response = await axios.get(
      "https://bing-news-search1.p.rapidapi.com/news/search",
      {
        params: {
          q: "crypto",
          freshness: "Day",
          textFormat: "Raw",
          safeSearch: "Off",
        },
        headers: {
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key":
            "89c0ac8383msha2666bc1fb53d5cp16d7a4jsn6a7da5e61cd7",
          "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        },
      }
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
    res.status(500).json({ msg: error.message });
  }
};

export default getTrendingNews;
