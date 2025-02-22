import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";

dotenv.config();
const app: Express = express();

app.use(cors());
app.use(express.json());

export default app;
