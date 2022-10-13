/*function rojo() {
    document.body.style.backgroundColor = 'red'
}
function azul() {
    document.body.style.backgroundColor = 'blue'
}
function verde() {
    document.body.style.backgroundColor = 'green'
}*/

function cambiarColor() {
    var boton1 = document.getElementById('boton1')
    var boton2 = document.getElementById('boton2')
    var boton3 = document.getElementById('boton3')
    boton1.addEventListener("click", function () {document.body.style.backgroundColor = 'red'})
    boton2.addEventListener("click", function () {document.body.style.backgroundColor = 'green'})
    boton3.addEventListener("click", function () {document.body.style.backgroundColor = 'blue'})
}