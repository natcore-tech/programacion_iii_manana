try {
    console.log("Taller Mecánico Nocturna - Iniciando diagnóstico del vehículo, buscando repuesto:", variableNoDeclarada);
} catch (error) {
    console.log("Diagnóstico fallido: pieza no localizada -", error.message);
}

try {
    console.log("Intentando abrir la ficha del vehículo en el taller...");
    throw new Error("Ficha del vehículo no encontrada");
} catch (error) {
    console.log("Error en taller:", error.message);
} finally {
    console.log("Finalizando intento de apertura de ficha y cerrando estación de trabajo");
}
