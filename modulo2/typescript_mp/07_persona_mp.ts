export class Persona{
    nombre: string;
    edad: number;
    constructor(
        nombre: string, 
        edad: number
    ) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(): void {
        console.log(
            `Hola, soy ${this.nombre}, mecánico del turno nocturno. Tengo ${this.edad} 
            años y me encargo del mantenimiento y reparación de vehículos en el taller.`
        )
    }
}