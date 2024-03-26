import express from "express";
import productsRouter from "./routers/product";
const app = express();

// middleware
app.use(express.json());

// khi goi api se chuyen tiep sang routers
app.use("/api", productsRouter);

export const viteNodeApp = app;
