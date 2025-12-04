import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

export function generarUsuario() {
    const contraseñaEncriptada = bcrypt.hashSync("coder123", 10);

    return {
        nombre: faker.person.fullName(),
        correo: faker.internet.email(),
        contraseña: contraseñaEncriptada,
        rol: faker.helpers.arrayElement(["usuario", "administrador"]),
        mascotas: []
    };
}
