const caja = document.getElementById('caja')

caja.addEventListener('mouseover', () => {
    caja.style.background = 'blueviolet';
    console.log('Taller Mecánico Nocturna — Zona de trabajo iluminada (violeta): inspección de motor en curso.');
});
caja.addEventListener('mouseout', () => {
    caja.style.background = 'gray';
    console.log('Taller Mecánico Nocturna — Zona en reposo (gris): herramientas guardadas, estación segura.');
});
caja.addEventListener('click', () => {
    console.log('Taller Mecánico Nocturna — Clic recibido: solicitar revisión rápida de frenos y bujías.');
});

const areaTouch = document.getElementById('areaTouch')

areaTouch.addEventListener('touchstart', () => {
    caja.style.background = 'blue';
    console.log('Taller Mecánico Nocturna — Área táctil activada (azul): iniciar diagnóstico electrónico.');
});
areaTouch.addEventListener('touchend', () => {
    caja.style.background = 'green';
    console.log('Taller Mecánico Nocturna — Área táctil desactivada (verde): diagnóstico completado, listo para prueba de ruta.');
});
areaTouch.addEventListener('click', () => {
    console.log('Taller Mecánico Nocturna — Solicitud desde área táctil: generar orden de trabajo nocturna.');
});

