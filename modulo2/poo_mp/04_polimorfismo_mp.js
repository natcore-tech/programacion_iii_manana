class Empleado{
    constructor(nombre,salario){
        this.nombre = nombre;
        this.salario = salario;
    }
    trabajar(){
        console.log(`${this.nombre} atendiendo vehículos en el taller mecánico nocturno...`);
    }
    calcularVacaciones(){
        return this.salario * 0.15;
    }
    horasExtra(horas){
        return ((this.salario/30)/8)*horas*2;
    }
}

class Programador extends Empleado{
    calcularVacaciones(){
        return this.salario*0.20;
    }
    horasExtra(horas){
        return ((this.salario/30)/8)*horas*3;
    }
}
class Diseñador extends Empleado{
    calcularVacaciones(){
        return this.salario*0.10;
    }
}

const progPedro = new Programador('Firulais', 2000);
const diseJuan = new Diseñador('Lucero', 1500);

progPedro.trabajar();
diseJuan.trabajar();

console.log(`${progPedro.nombre} - Vacaciones calculadas: $${progPedro.calcularVacaciones().toFixed(2)} (tiempo para mantenimiento y descanso del mecánico).`);
console.log(`${diseJuan.nombre} - Vacaciones calculadas: $${diseJuan.calcularVacaciones().toFixed(2)} (tiempo para revisiones y capacitación técnica).`);

console.log(`${progPedro.nombre} - Pago por horas extra (reparaciones nocturnas, 5 h): $${progPedro.horasExtra(5).toFixed(2)}.`);
console.log(`${diseJuan.nombre} - Pago por horas extra (turno de taller, 4 h): $${diseJuan.horasExtra(4).toFixed(2)}.`);
