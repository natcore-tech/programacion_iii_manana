"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.saludar = function () {
        console.log("Hola, soy ".concat(this.nombre, ", mec\u00E1nico del turno nocturno. Tengo ").concat(this.edad, " \n            a\u00F1os y me encargo del mantenimiento y reparaci\u00F3n de veh\u00EDculos en el taller."));
    };
    return Persona;
}());
exports.Persona = Persona;
