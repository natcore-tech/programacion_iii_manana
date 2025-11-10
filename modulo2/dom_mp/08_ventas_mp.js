const formulario = document.getElementById('formulario');
const contenedor = document.getElementById('contenedorCasas');
let casas = [];

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const direccion = document.getElementById('direccion').value.trim(); // aquí lo tratamos como "placa" o identificación del vehículo
  const descripcion = document.getElementById('descripcion').value.trim(); // aquí lo tratamos como "servicio" o reparación
  const precio = parseFloat(document.getElementById('precio').value.trim()); // costo del trabajo

  if (direccion && descripcion && !isNaN(precio)) {
    const nuevaCasa = { id: Date.now(), direccion, descripcion, precio };
    casas.push(nuevaCasa);
    renderizarCasa(nuevaCasa);
    formulario.reset();

    console.log(`[Taller Nocturna] Nueva orden ingresada — ID: ${nuevaCasa.id} | Vehículo/Placa: ${direccion} | Servicio: ${descripcion} | Costo: $${precio.toFixed(2)}`);
    console.log(`[Taller Nocturna] Órdenes en taller: ${casas.length}`);
  }
});

function renderizarCasa({ id, direccion, descripcion, precio }) {
  const div = document.createElement('div');
  div.className = 'casa';
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
    const tarjeta = e.target.closest('.casa');
    const id = parseInt(tarjeta.getAttribute('data-id'));
    const orden = casas.find(c => c.id === id);

    casas = casas.filter(c => c.id !== id);
    tarjeta.remove();

    console.log(`[Taller Nocturna] Orden completada/entregada — ID: ${id} | Vehículo/Placa: ${orden ? orden.direccion : 'N/A'} | Servicio: ${orden ? orden.descripcion : 'N/A'} | Costo: $${orden ? orden.precio.toFixed(2) : '0.00'}`);
    console.log(`[Taller Nocturna] Órdenes restantes en taller: ${casas.length}`);
  }
});
