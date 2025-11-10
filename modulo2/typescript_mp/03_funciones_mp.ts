// funcion basica
function saludar(nombre?: string) {
    return `Buenas noches, ${nombre ?? 'técnico'}. Bienvenido al turno nocturno del taller.`;
}
console.log(saludar('Francisco'));

//funcion flecha
const sumar = (a: number, b: number): number =>{
    return a+b;
}
console.log(`Horas estimadas de reparación (5h + 5h): ${sumar(5,5)} horas`);

function saludarDeNuevo(): void{
    console.log('Hola, equipo del turno nocturno.');
    console.log('Comenzando inspección y mantenimiento de unidades.');
}
saludarDeNuevo();

function calcularAreaCirculo(radio:number): number{
    return Math.PI * radio * radio;
}
function calcularAreaCirculoVoid(radio:number): void{
    console.log(`Área del tambor/disco (radio ${radio} cm): ${ (Math.PI * radio * radio).toFixed(2) } cm²`);
}
console.log(`Área estimada del disco (radio 5 cm): ${calcularAreaCirculo(5).toFixed(2)} cm²`);
calcularAreaCirculoVoid(7);
//