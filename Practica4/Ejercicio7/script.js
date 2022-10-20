window.onload = function () {
  document.getElementById("reloj").innerHTML += new Date()
  window.onunload = mostrarMensajeSalida
  mostrarMensaje()
}

function mostrarMensajeSalida() {
  window.addEventListener('unload', function() {
    this.alert('Pagina cancelada')
  })
  window.addEventListener('beforeunload', function() {
    this.alert('Pagina cancelada')
  })
}

function mostrarMensaje() {
  alert('Estas en una pagina con un reloj digital')
}