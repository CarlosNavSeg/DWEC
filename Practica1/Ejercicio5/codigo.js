var precio = prompt("Precio del articulo:")
precio = parseInt(precio)
var iva = 0.21*precio
alert("El precio del articulo es " + (precio+iva).toFixed(2))