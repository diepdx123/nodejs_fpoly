import express from "express";
import { signup } from "../controller/auth";
const router = express.Router();

router.post("/signup", signup);

router.post("/singin", async (req, res) => {
  console.log("singin");
});

export default router;
