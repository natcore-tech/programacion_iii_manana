import { Vehiculo } from "./11_herencia_mp";

export class Camion extends Vehiculo{
    getCapacidadCarga():void{
        console.log('Cargas Pesadas');
    }
}
const miCamion: Camion = new Camion('Honda', 'Alta Cilindrada');
console.log(miCamion.marca);
console.log(miCamion.tipo);
miCamion.getCapacidadCarga();