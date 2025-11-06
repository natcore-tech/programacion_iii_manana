console.log("FUNCIONES");

console.log("FORMA CLASICA");
function saludar(nombre){
    console.log("Hola desde una funcion clasica");
}
saludar();

console.log("FORMA CON PARAMETROS Y RETORNO");
function sumar(a, b){
    return a+b;
}
let resultado=sumar(4,9);
console.log("La suma es:", resultado);

console.log("FUNCION FLECHA");
const resta=(a,b)=>{
    return a-b
}
let resultadoResta=resta(9,5);
console.log("la resta es:",resultadoResta);

console.log("FUNCION RETORNO DIRECTO");
const cuadrado = x => x*x;
console.log("cuadrado de 5:", cuadrado(5));

console.log("FUNCION CON PARAMETROS POR DEFECTO");
function saludar(nombre, saludo="Hola"){
    return saludo +" "+nombre;
}
let saludo1=saludar("Francisco");
let saludo2=saludar("Francisco","Buenos dias");
console.log(saludo1);
console.log(saludo2);

console.log("FUNCION AREA DE UN TRIANGULO");
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

const area1 = areaTriangulo(4, 3);   
const area2 = areaTriangulo(10, 5);  
const area3 = areaTriangulo(6, 8);   

console.log("Área triángulo 4x3 =", area1);
console.log("Área triángulo 10x5 =", area2);
console.log("Área triángulo 6x8 =", area3);
