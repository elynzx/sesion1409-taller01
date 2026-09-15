let precioProducto = 50000;
let porcentajeIVA = 19;

let valorIVA = (precioProducto * porcentajeIVA) / 100;
let precioTotal = precioProducto + valorIVA;

console.log("Precio del producto: $" + precioProducto);
console.log("IVA (19%): $" + valorIVA);
console.log("Precio total con IVA: $" + precioTotal);