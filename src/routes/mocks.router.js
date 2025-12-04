import express from "express";
import { generarUsuario } from "../mocking/mockingUsers.js";
import { generarMascota } from "../mocking/mockingPets.js";
import UserModel from "../models/user.model.js";
import PetModel from "../models/pet.model.js";

const router = express.Router();

router.get("/mockingusers", (req, res) => {
    const usuarios = Array.from({ length: 50 }, generarUsuario);
    res.json({ estado: "éxito", usuarios });
});

router.get("/mockingpets", (req, res) => {
    const mascotas = Array.from({ length: 20 }, generarMascota);
    res.json({ estado: "éxito", mascotas });
});

router.post("/generateData", async (req, res) => {
    const { usuarios = 0, mascotas = 0 } = req.body;

    const usuariosGenerados = Array.from({ length: usuarios }, generarUsuario);
    const mascotasGeneradas = Array.from({ length: mascotas }, generarMascota);

    await UserModel.insertMany(usuariosGenerados);
    await PetModel.insertMany(mascotasGeneradas);

    res.json({
        estado: "éxito",
        mensaje: "Datos insertados correctamente",
        usuariosInsertados: usuarios,
        mascotasInsertadas: mascotas
    });
});

export default router;
