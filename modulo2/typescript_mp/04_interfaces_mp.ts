interface Usuario{
    id: number;
    nombre: string;
    correo?: string;
}

const usuario1: Usuario = {
    id: 12,
    nombre: "Roberto Gómez" // técnico del turno nocturno
}
const usuario2: Usuario = {
    id: 13,
    nombre: "Ana López", // jefa de taller
    correo: "ana@taller-nocturno.com"
}

console.log("Ficha de técnico (Taller Mecánico - turno nocturno):", usuario1);
console.log("ID del técnico asignado:", usuario1.id);
console.log("Nombre del técnico asignado:", usuario1.nombre);
console.log("Correo de contacto del técnico (si aplica):", usuario1.correo);

console.log("Ficha de responsable de taller:", usuario2);
console.log("ID del responsable de taller:", usuario2.id);
console.log("Nombre del responsable de taller:", usuario2.nombre);
console.log("Correo de contacto del taller:", usuario2.correo);
