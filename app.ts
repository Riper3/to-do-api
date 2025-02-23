import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import routes from "./router/routes";

dotenv.config();
const app: Express = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

export default app;
