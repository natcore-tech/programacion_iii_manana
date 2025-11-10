"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(titulo) {
        this.idGeneric = 'TMN-991828982988';
        this.titulo = titulo;
        this.generarCota();
    }
    Libro.prototype.generarCota = function () {
        // cota como fecha/hora de ingreso al taller
        this.cota = "Ingreso Taller Nocturna - ".concat((new Date()).toLocaleString());
    };
    Libro.prototype.getCota = function () {
        return this.cota;
    };
    Libro.prototype.getAtributes = function () {
        return {
            titulo: this.titulo,
            cota: this.cota,
            id: this.idGeneric
        };
    };
    return Libro;
}());
exports.Libro = Libro;
// Uso de ejemplo: todas las salidas en consola están tematizadas al taller mecánico
var ficha = new Libro('Orden de Servicio: Cambio de aceite - Renault Clio');
console.log('--- Ficha de Taller Mecánico Nocturna ---');
console.log('Servicio registrado:', ficha.titulo);
console.log('Fecha/Hora de ingreso al taller:', ficha.getCota());
console.log('Código de ficha (ID taller):', ficha.getAtributes().id);
console.log('Resumen de la ficha:', ficha.getAtributes());
