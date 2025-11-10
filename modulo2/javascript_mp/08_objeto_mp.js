console.log("TALLER MECÁNICO - EJEMPLOS DE OBJETOS");
let persona = {
    nombre: "Carlos",
    edad: 40,
    ciudad: "Quito",
    puesto: "Mecánico - Turno Nocturno"
};

console.log("Datos del trabajador:", persona);
console.log("Nombre del mecánico:", persona.nombre);
console.log("Sede del taller:", persona.ciudad);

console.log("Edad (accedida por clave):", persona["edad"]);
console.log("Modificación de datos del trabajador")
persona.nombre = "Luis";
console.log("Datos actualizados del trabajador:", persona);
console.log("Incluir nueva clave (dirección del taller)")
persona.direccion = "Av. Talleres 123";
console.log("Datos con dirección incluida:", persona);
console.log("Eliminar clave (dirección del taller)")
delete persona.direccion;
console.log("Datos luego de eliminar dirección:", persona);

console.log("Recorrer propiedades del trabajador")
for (let clave in persona){
    console.log("Propiedad:", clave, "=>", persona[clave]);
}
console.log("Mostrar claves con Object.keys");
console.log(Object.keys(persona));
console.log("Mostrar valores con Object.values");
console.log(Object.values(persona));
console.log("Registro de vehículo y servicios del taller")
let vehiculo = {
    propietario: "Pedro",
    placa: "ABC-1234",
    contacto: {
        correo: "pedro@cliente.com",
        telefono: "025162323",
        celular: "098580996"
    },
    servicios: [
        {
            nombre: "Cambio de aceite",
            precio: 25
        },
        {
            nombre: "Revisión de frenos",
            precio: 40
        },
    ] 
};
console.log("Registro de vehículo:", vehiculo);
