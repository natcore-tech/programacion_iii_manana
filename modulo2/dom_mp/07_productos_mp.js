const productos = [
  { nombre: "Filtro de aceite", descripcion: "Para motores 1.6 - 2.0", precio: 12, existencia: 12, ubicacion: "Banco 1" },
  { nombre: "Bujía", descripcion: "Iridio", precio: 8, existencia: 25, ubicacion: "Banco 2" },
  { nombre: "Pastillas de freno", descripcion: "Delanteras", precio: 40, existencia: 7, ubicacion: "Banco 3" },
  { nombre: "Batería 12V", descripcion: "Capacidad 60Ah", precio: 85, existencia: 5, ubicacion: "Almacén A" },
  { nombre: "Aceite sintético 5W-30", descripcion: "4L", precio: 30, existencia: 30, ubicacion: "Estante Aceites" },
  { nombre: "Correa de distribución", descripcion: "Vehículos livianos", precio: 55, existencia: 8, ubicacion: "Estante Repuestos" },
  { nombre: "Amortiguador", descripcion: "Delantero", precio: 65, existencia: 15, ubicacion: "Banco Suspensión" },
  { nombre: "Radiador", descripcion: "Aluminio", precio: 120, existencia: 3, ubicacion: "Almacén B" },
  { nombre: "Sensor de oxígeno", descripcion: "Universal", precio: 35, existencia: 18, ubicacion: "Estante Sensores" },
  { nombre: "Kit de embrague", descripcion: "Compacto", precio: 180, existencia: 14, ubicacion: "Caja Kits" }
];

console.log("Taller Mecánico Nocturna — Inventario cargado. Preparando listado de piezas y servicios...");

const tabla = document.getElementById('cuerpoTabla');
productos.forEach(p => {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${p.nombre}</td>
    <td>${p.descripcion}</td>
    <td>$${p.precio.toFixed(2)}</td>
    <td>${p.existencia}</td>
    <td>${p.ubicacion}</td>
  `;
  tabla.appendChild(fila);

  // Mensaje temático para consola: estilo "registro nocturno" del taller
  console.log(`Registro nocturno — Taller Nocturna | Artículo: ${p.nombre} | Descripción: ${p.descripcion} | Precio: $${p.precio.toFixed(2)} | Stock: ${p.existencia} | Ubicación: ${p.ubicacion}`);
});
