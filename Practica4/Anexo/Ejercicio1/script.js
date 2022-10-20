window.onload = function() {
    document.getElementById('formulario') = validar
}
function validar(evento) {
    var event = evento
    Array.from(document.getElementsByTagName).forEach(input => {
        if(input.value = "") {
            event.preventDefault()
        }
    })
}