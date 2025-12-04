import express from "express";
import UserModel from "../models/user.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const usuarios = await UserModel.find();
    res.json(usuarios);
});

export default router;
