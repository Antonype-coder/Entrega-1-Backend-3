import express from "express";
import PetModel from "../models/pet.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const mascotas = await PetModel.find();
    res.json(mascotas);
});

export default router;
