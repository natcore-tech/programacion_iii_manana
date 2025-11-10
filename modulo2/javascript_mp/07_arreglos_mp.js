console.log("INVENTARIO - TALLER MECÁNICO NOCTURNA");
let numeros=[10,5,25,9];
let arrayVacio=new Array();
let arrayVacio2=[];
console.log("ESTANTES VACÍOS:", arrayVacio);
console.log("CAJÓN DE REPUESTOS VACÍO:", arrayVacio2);
console.log("ACCESO A PIEZAS DEL INVENTARIO");
console.log("Repuesto en posición 0:", numeros[0]);
console.log("Repuesto en posición 3:", numeros[3]);

console.log("ACTUALIZAR PIEZA EN INVENTARIO");
numeros[0]=100;
console.log("INVENTARIO ACTUALIZADO:", numeros);
console.log("AGREGAR PIEZA AL FINAL DEL ESTANTE");
numeros.push(500);
console.log("INVENTARIO CON PIEZA AGREGADA:", numeros);
console.log("AGREGAR PIEZA AL INICIO DEL ESTANTE");
numeros.unshift(888);
console.log("INVENTARIO TRAS AGREGADO AL INICIO:", numeros)
console.log("RETIRAR ÚLTIMA PIEZA (ENTREGADA) DEL INVENTARIO");
numeros.pop();
console.log("INVENTARIO TRAS RETIRO:", numeros);
console.log("RETIRAR PRIMERA PIEZA (USADA) DEL INVENTARIO");
numeros.shift();
console.log("INVENTARIO TRAS RETIRO INICIO:", numeros);

console.log("RECORRER INVENTARIO DE PIEZAS");
let indice=0
console.log("LISTADO - BUCLE WHILE (REVISIÓN DE PIEZAS)");
while(indice<numeros.length){
    console.log("Estante", indice, "-> pieza:", numeros[indice]);
    indice++;
}
console.log("LISTADO - BUCLE FOR (REVISIÓN DE PIEZAS)");
for (let i=0; i < numeros.length; i++){
    console.log("pieza", i, ":", numeros[i]);
}
console.log("LISTADO - FOR..OF (VER PIEZAS)");
for (let valor of numeros){
    console.log("pieza detectada:", valor);
}
console.log("LISTADO - forEach (INSPECCIÓN DE INVENTARIO)");
numeros.forEach(function(valor, indice){
    console.log("posición", indice, "- pieza:", valor);
});