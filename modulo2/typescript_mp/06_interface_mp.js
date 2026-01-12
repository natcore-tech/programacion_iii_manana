"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var usuario1 = {
    id: 12,
    nombre: "Cliente: Ramón Álvarez - Vehículo: VW Gol 2009"
};
var usuario2 = {
    id: 13,
    nombre: "Cliente: Laura Martínez - Vehículo: Renault Clio 2015",
    correo: "laura@tallernocturna.com"
};
console.log("Ficha de ingreso:", usuario1);
console.log("ID de ficha:", usuario1.id);
console.log("Titular del vehículo:", usuario1.nombre);
console.log("Correo de contacto:", (_a = usuario1.correo) !== null && _a !== void 0 ? _a : "No registrado");
console.log("Ficha de ingreso:", usuario2);
console.log("ID de ficha:", usuario2.id);
console.log("Titular del vehículo:", usuario2.nombre);
console.log("Correo de contacto:", (_b = usuario2.correo) !== null && _b !== void 0 ? _b : "No registrado");
