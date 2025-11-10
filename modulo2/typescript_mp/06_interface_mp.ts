import { Usuario } from "./05_interface_mp";

const usuario1: Usuario = {
    id: 12,
    nombre: "Cliente: Ramón Álvarez - Vehículo: VW Gol 2009"
}
const usuario2: Usuario = {
    id: 13,
    nombre: "Cliente: Laura Martínez - Vehículo: Renault Clio 2015",
    correo: "laura@tallernocturna.com"
}

console.log("Ficha de ingreso:", usuario1);
console.log("ID de ficha:", usuario1.id);
console.log("Titular del vehículo:", usuario1.nombre);
console.log("Correo de contacto:", usuario1.correo ?? "No registrado");

console.log("Ficha de ingreso:", usuario2);
console.log("ID de ficha:", usuario2.id);
console.log("Titular del vehículo:", usuario2.nombre);
console.log("Correo de contacto:", usuario2.correo ?? "No registrado");
