function controlador(event) {
    var evento = event
    if(parseInt(String.fromCharCode(evento.charCode))>0 && parseInt(String.fromCharCode(evento.charCode))<9) {
        
    }
    else {
        evento.preventDefault()
    }
}
window.onload = function () {
    document.getElementById('textInput').onkeypress = controlador;
}