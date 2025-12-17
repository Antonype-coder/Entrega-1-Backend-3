import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./src/app.js";

dotenv.config();

const PUERTO = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
    console.error("ERROR: MONGO_URL NO DEFINIDO EN .env");
    process.exit(1);
}

mongoose.connect(MONGO_URL)
    .then(() => console.log("Conectado a MongoDB"))
    .catch(err => console.error("Error en Mongo:", err));

app.listen(PUERTO, () => {
    console.log(`Servidor funcionando en el puerto ${PUERTO}`);
});
