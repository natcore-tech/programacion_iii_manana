import { Libro } from "./09_acceso_mp";

const myLibro: Libro = new Libro('Takumi Fujiwara - Initial D');
console.log(myLibro.titulo);
console.log(myLibro.getCota());
console.log(myLibro.getAtributes());