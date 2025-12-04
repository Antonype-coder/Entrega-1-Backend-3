import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nombre: String,
    correo: String,
    contraseña: String,
    rol: String,
    mascotas: Array
});

const UserModel = mongoose.model("Usuario", userSchema);
export default UserModel;
