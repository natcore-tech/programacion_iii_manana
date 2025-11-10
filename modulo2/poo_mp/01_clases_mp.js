class Car{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
    start(){
        console.log(`Orden de ingreso: ${this.brand} ${this.model} - inicio de inspección en la bahía del taller.`);
    }
    run(){
        console.log(`Prueba de rodaje: ${this.brand} ${this.model} - comprobando motor, transmisión y suspensión.`);
    }
    stop(){
        console.log(`Detenido en la bahía: ${this.brand} ${this.model} - pendiente de ajustes y repuestos.`);
    }
}

const miCarro = new Car('Toyota', 'Corolla');
miCarro.start();
miCarro.run();
miCarro.stop();
console.log(`Ficha de ingreso - Marca: ${miCarro.brand}`);
console.log(`Ficha de ingreso - Modelo: ${miCarro.model}`);
