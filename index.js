import express from "express";
import dotenv from "dotenv";
import globaldata from "./routes/route.js";
import cors from "cors";
import helmet from "helmet";
import xss from "xss-clean";
import { rateLimit } from "express-rate-limit";
const app = express();
const port = process.env.PORT || 8000;
dotenv.config();

app.set("trust proxy", 1);
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

app.get("/", (req, res) => {
  res.send("Home page is working");
});
app.use("/api/v1/", globaldata);

const start = async () => {
  try {
    app.listen(port, () => console.log(`App is running at port: ${port}`));
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
};

start();
