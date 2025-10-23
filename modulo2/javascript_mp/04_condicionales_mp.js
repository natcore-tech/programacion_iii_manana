let temperatura=35;

if (temperatura>30) {
    console.log("Temperatura");
}


let password="pass123";

if (password==="pass123") {
    console.log("Acceso logueado");
} else {
    console.log("Acceso denegado");
}

let nota=7;
if(nota>=9){
    console.log("Sobresaliente");
}else if(nota>=7){
    console.log("Aprobado");
}else{
    console.log("Reprobado");
}

let edad=20;
let tiene_licencia=true;
if(edad>=18 && tiene_licencia){
        console.log("Puede Conducir");
}else if (edad>=18){
    console.log("Necesita licencia para conducir");
}else{
    console.log("Es menor de edad");
}

//Estructura Switch
let dia="lunes";

switch(dia){
    case "lunes":
        console.log("Inicio de semana");
        break;
    case "viernes":
        console.log("Ultimo dia laboral");
        break;
    default:
        console.log("Dia normal");
}

//Estructura Switch
let var1=31;
let var2=15;
let var3=22;

switch(var1){
    case var2:
        console.log("Menor");
        break;
    case var1:
        console.log("Mayor");
        break;
    default:
        console.log("Normal");
}

let a=30;
let b=20;
let c=10;
mayor=0;
if (a>b){
    mayor=a;
}if (c>mayor){
    mayor=c;
}
console.log("El numero mayor es:",mayor);

let a1=prompt("Incluye el primer numero");
let b1=input("Incluye el segundo numero");
let c1=input("Incluye el tercer numero");
mayor=0;
if (a>b){
    mayor=a;
}if (c>mayor){
    mayor=c;
}
console.log("El numero mayor es:",mayor);