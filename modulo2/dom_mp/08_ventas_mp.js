const formulario = document.getElementById('formulario');
const contenedor = document.getElementById('contenedorCoches');
let coches = [];

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const direccion = document.getElementById('direccion').value.trim(); // aquí lo tratamos como "placa" o identificación del vehículo
  const descripcion = document.getElementById('descripcion').value.trim(); // aquí lo tratamos como "servicio" o reparación
  const precio = parseFloat(document.getElementById('precio').value.trim()); // costo del trabajo

  if (direccion && descripcion && !isNaN(precio)) {
    const nuevoCoche = { id: Date.now(), direccion, descripcion, precio };
    coches.push(nuevoCoche);
    renderizarCoche(nuevoCoche);
    formulario.reset();

    console.log(`[Taller Nocturna] Nueva orden ingresada — ID: ${nuevoCoche.id} | Vehículo/Placa: ${direccion} | Servicio: ${descripcion} | Costo: $${precio.toFixed(2)}`);
    console.log(`[Taller Nocturna] Órdenes en taller: ${coches.length}`);
  }
});

function renderizarCoche({ id, direccion, descripcion, precio }) {
  const div = document.createElement('div');
  div.className = 'coche';
  div.setAttribute('data-id', id);
  div.innerHTML = `
    <h3>${direccion}</h3>
    <p>${descripcion}</p>
    <p><strong>Precio: $${precio.toFixed(2)}</strong></p>
    <div class="acciones"><button class="eliminar">Eliminar</button></div>
  `;
  contenedor.appendChild(div);

  console.log(`[Taller Nocturna] Orden mostrada en tablero — ID: ${id} | Vehículo/Placa: ${direccion}`);
}

contenedor.addEventListener('click', (e) => {
  if (e.target.classList.contains('eliminar')) {
    const tarjeta = e.target.closest('.coche');
    const id = parseInt(tarjeta.getAttribute('data-id'));
    const orden = coches.find(c => c.id === id);

    coches = coches.filter(c => c.id !== id);
    tarjeta.remove();

    console.log(`[Taller Nocturna] Orden completada/entregada — ID: ${id} | Vehículo/Placa: ${orden ? orden.direccion : 'N/A'} | Servicio: ${orden ? orden.descripcion : 'N/A'} | Costo: $${orden ? orden.precio.toFixed(2) : '0.00'}`);
    console.log(`[Taller Nocturna] Órdenes restantes en taller: ${coches.length}`);
  }
});
