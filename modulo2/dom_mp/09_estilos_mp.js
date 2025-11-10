const cuadro = document.getElementById('cuadro');

function cambiarColor() {
  const colores = ['#58a6ff', '#ff7b72', '#00ff00', '#ff00ff', '#ffff00'];
  const randomColor = colores[Math.floor(Math.random() * colores.length)];
  cuadro.style.backgroundColor = randomColor;
  console.log(`Pintura aplicada en el bay: color ${randomColor}. Preparando vehículo para la revisión nocturna.`);
}

function aumentarTamano() {
  let width = parseInt(cuadro.style.width);
  let height = parseInt(cuadro.style.height);
  if (isNaN(width)) width = 100;
  if (isNaN(height)) height = 100;
  cuadro.style.width = (width + 20) + 'px';
  cuadro.style.height = (height + 20) + 'px';
  console.log(`Elevador ajustado: ${width}px×${height}px → ${(width + 20)}px×${(height + 20)}px. Más espacio para trabajar en el vehículo.`);
}

function reiniciar() {
  cuadro.style.width = '100px';
  cuadro.style.height = '100px';
  cuadro.style.backgroundColor = '#58a6ff';
  console.log('Bay reiniciado a valores estándar: 100px×100px y pintura base aplicada. Listo para el próximo servicio del taller.');
}
