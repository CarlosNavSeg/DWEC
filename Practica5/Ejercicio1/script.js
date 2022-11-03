window.onload = function () {
    document.getElementsByName('aficiones')[0].onchange = darInfo;
    document.getElementById('formulario').onsubmit = validaciones;
}

function darInfo() {
    var indiceSeleccionado = this.selectedIndex;
    var opcionSeleccionada = this.options[indiceSeleccionado].text;
    alert('Longitud de la lista: ' + this.children.length + ' indice seleccionado: '
    + indiceSeleccionado + ' opcion seleccionada: '+ opcionSeleccionada)
}
function validaciones(evento) {
    var elevento = evento
    if(this.observaciones.value.length > 150) {
        alert('no pases los 150 caracteres bro')
        elevento.preventDefault()
    }
    if(this.DNI.value == "") {
        alert('dni no puede estar vacio')
        elevento.preventDefault()
    }
    if( /^\d{9}$/.test(this.telefono.value) == false) {
        alert('formato incorrecto para telefono')
        elevento.preventDefault()
    }
}