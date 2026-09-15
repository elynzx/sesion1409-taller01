let texto = "  JavaScript es Genial  ";
let textoSinEspacios = texto.trim();
console.log("Original: '" + texto + "'");
console.log("Sin espacios: '" + textoSinEspacios + "'");
console.log("Mayúsculas: " + textoSinEspacios.toUpperCase());
console.log("Minúsculas: " + textoSinEspacios.toLowerCase());
console.log("Longitud: " + texto.length);
console.log("¿Incluye 'Genial'? " + texto.includes("Genial"));
