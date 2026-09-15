let primerNombre = "Carlos";
let primerApellido = "Gómez";
let añoNacimiento = 1998;

let nombreUsuario =
  primerNombre[0] + primerApellido + String(añoNacimiento).slice(-2);

console.log(`Nombre de usuario generado: ${nombreUsuario.toLowerCase()}`);
