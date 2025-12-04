import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    tipo: String
});

const PetModel = mongoose.model("Mascota", petSchema);
export default PetModel;
