window.onload = function () {
    document.getElementById('linkEjemplo').onclick = prevenirComportamiento;
}
function prevenirComportamiento(evento) {
    evento.preventDefault()
}