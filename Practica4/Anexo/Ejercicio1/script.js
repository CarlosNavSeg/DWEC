window.onload = function () {
    document.getElementById('formulario').onsubmit = validar
}

function validar(evento) {
    var elEvento = evento
    if(this.nombre.value == '' || this.apellidos.value == '') {
        elEvento.preventDefault()
        alert('campos vacios')    
    }
}