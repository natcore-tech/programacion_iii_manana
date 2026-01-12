// funcion basica
function saludar(nombre) {
    return "Buenas noches, ".concat(nombre !== null && nombre !== void 0 ? nombre : 'técnico', ". Bienvenido al turno nocturno del taller.");
}
console.log(saludar('Francisco'));
//funcion flecha
var sumar = function (a, b) {
    return a + b;
};
console.log("Horas estimadas de reparaci\u00F3n (5h + 5h): ".concat(sumar(5, 5), " horas"));
function saludarDeNuevo() {
    console.log('Hola, equipo del turno nocturno.');
    console.log('Comenzando inspección y mantenimiento de unidades.');
}
saludarDeNuevo();
function calcularAreaCirculo(radio) {
    return Math.PI * radio * radio;
}
function calcularAreaCirculoVoid(radio) {
    console.log("\u00C1rea del tambor/disco (radio ".concat(radio, " cm): ").concat((Math.PI * radio * radio).toFixed(2), " cm\u00B2"));
}
console.log("\u00C1rea estimada del disco (radio 5 cm): ".concat(calcularAreaCirculo(5).toFixed(2), " cm\u00B2"));
calcularAreaCirculoVoid(7);
//
