import express from "express";
import getGlobalData from "../controllers/getdata.js";
import getTrendingCoins from "../controllers/gettrendingcoins.js";
import getChartData from "../controllers/getchartdata.js";
import getCoinDetail from "../controllers/getcoindetail.js";
import getNewListed from "../controllers/newlisted.js";
import getLogo from "../controllers/getlogo.js";
import { getSearchList, getBitcoinPrice } from "../controllers/searchCoin.js";
import getTrendingNews from "../controllers/getTrendingNews.js";
const router = express.Router();

router.get("/global_data", getGlobalData);
router.get("/trending_coins", getTrendingCoins);
router.get("/chart_data", getChartData);
router.get("/coindetail", getCoinDetail);
router.get("/coin_list", getNewListed);
router.get("/logo", getLogo);
router.get("/search", getSearchList);
router.get("/bitcoin_price", getBitcoinPrice);
router.get("/trending_news", getTrendingNews);

export default router;
