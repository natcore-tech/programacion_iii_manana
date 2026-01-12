const titulo = document.getElementById('titulo');
console.log('Taller Mecánico Nocturna - Registro de órdenes de trabajo');
const notas = document.getElementsByClassName('nota');
Array.from(notas).forEach(nota=>console.log('Nota de servicio: Cambio de aceite y revisión general'));
const items = document.getElementsByClassName('.item');
Array.from(items).forEach(item=>console.log('Ítem: Repuesto para suspensión - amortiguador'));
const usuario = document.getElementsByName('usuario');
Array.from(usuario).forEach(usuario=>console.log('Usuario técnico: Juan Pérez - Especialista en motores'));
