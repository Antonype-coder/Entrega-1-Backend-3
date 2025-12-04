import { faker } from "@faker-js/faker";

export function generarMascota() {
    return {
        nombre: faker.animal.dog(),
        edad: faker.number.int({ min: 1, max: 15 }),
        tipo: faker.animal.type()
    };
}
