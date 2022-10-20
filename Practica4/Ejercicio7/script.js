document.getElementById("reloj").onload = mostrarReloj;
window.onunload = mostrarMensaje2;

function mostrarMensaje() {
    alert('Pagina que contiene un reloj digital')
}

function mostrarMensaje2() {
    alert('Pagina cancelada')
}

var fechaHora = new Date();
function mostrarReloj() {
    mostrarMensaje()
    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
    var segundos = fechaHora.getSeconds();
    this.innerHTML = horas+':'+minutos+':'+segundos;
}