class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    hacerSonido() {
        console.log(`${this.nombre}: Arranque de motor, chirridos de freno y martillazos de llave — ambiente típico de un taller mecánico.`)
    }
}

class Perro extends Animal {
    hacerSonido() {
        console.log(`${this.nombre}: Ladrido entre cajas de herramientas y olor a aceite, como guardián del taller.`)
    }
}

const miPerro = new Perro('Firulais');
const miAnimal = new Animal('Lucero');
miPerro.hacerSonido();
miAnimal.hacerSonido();