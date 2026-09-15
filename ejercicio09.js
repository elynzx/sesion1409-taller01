let carrito = [
  { producto: "Laptop", precio: 2500000, cantidad: 1 },
  { producto: "Mouse", precio: 80000, cantidad: 2 },
  { producto: "Teclado", precio: 150000, cantidad: 1 },
];

console.log("Carrito completo: ", carrito);
console.log("Primer producto: ", carrito[0].producto);
console.log("Precio del segundo producto: ", carrito[1].precio);
console.log("Cantidad del tercer producto: ", carrito[2].cantidad);

carrito.push({ producto: "Monitor", precio: 800000, cantidad: 1 });

let ultimoProducto = carrito.length - 1;
console.log("Nuevo producto agregado: ", carrito[ultimoProducto].producto);

let totalPago =
  carrito[0].precio * carrito[0].cantidad +
  carrito[1].precio * carrito[1].cantidad +
  carrito[2].precio * carrito[2].cantidad +
  carrito[3].precio * carrito[3].cantidad;

console.log("Total a pagar: $", totalPago);
