function cambiarColor() {
    var boton1 = document.getElementById('boton1')
    var boton2 = document.getElementById('boton2')
    var boton3 = document.getElementById('boton3')
    boton1.addEventListener("click", function () {document.getElementById('div').style.backgroundColor = 'red'})
    boton2.addEventListener("click", function () {document.getElementById('div').style.backgroundColor = 'green'})
    boton3.addEventListener("click", function () {document.getElementById('div').style.backgroundColor = 'blue'})
}