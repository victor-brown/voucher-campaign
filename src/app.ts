import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import config from "./config/config";
import { errorHandler } from "./utils/errorHandler";
import { createError } from "./errors/ErrorFactory";
import bodyParser from "body-parser";
import campaignRouter from "./routes/campaign.router";

const app = express();
const port = config.port;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(config.cors));
app.use(helmet());
app.use(morgan(config.morgan));
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});
app.use("/campaigns", campaignRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
