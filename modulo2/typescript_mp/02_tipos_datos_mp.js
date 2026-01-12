var edad = 30;
var nombre = "Maria";
var activo = true;
var valor = 6;
if (edad > 18 && activo) {
    console.log("Mec\u00E1nico disponible: ".concat(nombre, " (edad ").concat(edad, ") - Turno nocturno activo"));
}
else {
    console.log('Mecánico no disponible - Taller cerrado o fuera de servicio');
}
var repuestos = ['filtro de aceite', 'bujía', 'pastillas de freno'];
for (var i = 0; i < repuestos.length; i++) {
    console.log("Repuesto en stock: ".concat(repuestos[i]));
}
var EstadoServicio;
(function (EstadoServicio) {
    EstadoServicio["Pendiente"] = "Pendiente";
    EstadoServicio["EnReparacion"] = "En reparaci\u00F3n";
    EstadoServicio["ListoParaEntrega"] = "Listo para entrega";
    EstadoServicio["Cancelado"] = "Cancelado";
})(EstadoServicio || (EstadoServicio = {}));
console.log('Estados del servicio:', EstadoServicio);
console.log('Estado actual:', EstadoServicio.ListoParaEntrega);
console.log('Estado ejemplo:', EstadoServicio.Cancelado);
