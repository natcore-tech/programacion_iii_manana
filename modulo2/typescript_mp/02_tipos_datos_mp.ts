let edad: number = 30;
let nombre: string = "Maria";
let activo: boolean = true;
let valor: any = 6;

if (edad > 18 && activo) {
    console.log(`Mecánico disponible: ${nombre} (edad ${edad}) - Turno nocturno activo`);
} else {
    console.log('Mecánico no disponible - Taller cerrado o fuera de servicio');
}

let repuestos: string[] = ['filtro de aceite', 'bujía', 'pastillas de freno'];
for (let i = 0; i < repuestos.length; i++) {
    console.log(`Repuesto en stock: ${repuestos[i]}`);
}

enum EstadoServicio {
    Pendiente = "Pendiente",
    EnReparacion = "En reparación",
    ListoParaEntrega = "Listo para entrega",
    Cancelado = "Cancelado"
}

console.log('Estados del servicio:', EstadoServicio);
console.log('Estado actual:', EstadoServicio.ListoParaEntrega);
console.log('Estado ejemplo:', EstadoServicio.Cancelado);
