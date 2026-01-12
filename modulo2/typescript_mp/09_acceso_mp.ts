export class Libro{
    public titulo: string;
    private cota: any;
    protected idGeneric: string = 'TMN-991828982988';
    constructor(
        titulo:string
    ) {
        this.titulo = titulo;
        this.generarCota();
    }
    generarCota(): void {
        // cota como fecha/hora de ingreso al taller
        this.cota = `Ingreso Taller Nocturna - ${(new Date()).toLocaleString()}`;
    }
    getCota(): any {
        return this.cota;
    }
    getAtributes(): any {
        return {
            titulo: this.titulo,
            cota: this.cota,
            id: this.idGeneric
        }
    }
}

// Uso de ejemplo: todas las salidas en consola están tematizadas al taller mecánico
const ficha = new Libro('Orden de Servicio: Cambio de aceite - Renault Clio');

console.log('--- Ficha de Taller Mecánico Nocturna ---');
console.log('Servicio registrado:', ficha.titulo);
console.log('Fecha/Hora de ingreso al taller:', ficha.getCota());
console.log('Código de ficha (ID taller):', ficha.getAtributes().id);
console.log('Resumen de la ficha:', ficha.getAtributes());