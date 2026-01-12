class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    mayorEdad(){
        if (this.edad >= 18){
            console.log("Registro: cliente adulto. Autorizado para servicios y pruebas en turno nocturno del taller.");
        } else {
            console.log("Registro: cliente menor. Requiere autorización para trabajos y pruebas en el taller.");
        }
    }
    mostrar(){
        console.log(`Ficha: Cliente '${this.nombre}' | Edad: ${this.edad} años — Estado: a la espera de diagnóstico en el taller.`);
    }
}

const pedro = new Persona('Pedro',17);
pedro.mayorEdad();
pedro.mostrar();