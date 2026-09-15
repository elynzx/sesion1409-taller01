let inventario = ["laptop", "mouse", "teclado", "monitor", "cable HDMI"];
let ultimoElemento = inventario.length - 1;

console.log("Inventario completo: " + inventario);
console.log("Primer elemento: " + inventario[0]);
console.log("Último elemento: " + inventario[ultimoElemento]);
inventario.push("webcam");
console.log("Después de push('webcam'): " + inventario);

let elementoEliminado = inventario.pop();
console.log("Elemento eliminado: " + elementoEliminado);
console.log("Después de pop(): " + inventario);
inventario.unshift("audífonos");
console.log("Después de unshift('audífonos'): " + inventario);
let primerElemento = inventario.shift();
console.log("Elemento eliminado: " + primerElemento);
console.log("Después de shift(): " + inventario);
console.log("Total de elementos " + inventario.length);
