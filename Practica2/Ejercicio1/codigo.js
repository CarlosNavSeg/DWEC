var precioTotal = 0
function calculaPrecio() {
    var precio = document.getElementById("precio").value;
    precio = parseInt(precio)
    precioTotal = (precio + 0.21*precio)
    precioTotal.toFixed(2)
    document.getElementById('name').value = precioTotal;
}