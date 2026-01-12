console.log("TALLER MECÁNICO NOCTURNO - FUNCIONES");

console.log("RECEPCIÓN - FORMA CLÁSICA");
function saludar(nombre){
    console.log("Vehículo ingresado: revisión inicial en recepción clásica");
}
saludar();

console.log("CÁLCULOS DE TALLER - PARÁMETROS Y RESULTADOS");
function sumar(a, b){
    return a + b;
}
let resultado = sumar(4, 9);
console.log("Costo total de repuestos:", resultado);

console.log("TAREA RÁPIDA (FLECHA)");
const resta = (a, b) => {
    return a - b;
}
let resultadoResta = resta(9, 5);
console.log("Diferencia de stock:", resultadoResta);

console.log("CÁLCULO DIRECTO - MEDICIÓN");
const cuadrado = x => x * x;
console.log("Estimación directa (valor cuadrado) de 5:", cuadrado(5));

console.log("SALUDO DEL TALLER (PARÁMETRO POR DEFECTO)");
function saludar(nombre, saludo = "Bienvenido al taller nocturno"){
    return saludo + " " + nombre;
}
let saludo1 = saludar("Francisco");
let saludo2 = saludar("Francisco", "Buen día, su vehículo está en diagnóstico");
console.log(saludo1);
console.log(saludo2);

console.log("CÁLCULO DE SUPERFICIE - PIEZA");
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

const area1 = areaTriangulo(4, 3);   
const area2 = areaTriangulo(10, 5);  
const area3 = areaTriangulo(6, 8);   

console.log("Superficie de chapa 4x3 =", area1);
console.log("Superficie de chapa 10x5 =", area2);
console.log("Superficie de chapa 6x8 =", area3);
