window.onload = function () {
    document.getElementById('color').onchange = elegirColorParrafo;
}
function elegirColorParrafo () {
    var indice = this.selectedIndex
    var valorOpcion = this[indice].value
    document.getElementById('parrafoColor').style.backgroundColor = valorOpcion
}