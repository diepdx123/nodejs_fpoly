import express from "express";
import productsRouter from "./routers/product";
import { connectDB } from "./config/db";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();
const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));
// connect db
connectDB(process.env.DB_URI);

// router (khi goi api se chuyen tiep sang routers)
app.use("/api", productsRouter);

export const viteNodeApp = app;
