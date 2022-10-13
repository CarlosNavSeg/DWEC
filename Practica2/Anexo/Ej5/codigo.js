function esperandoCambio() {
    setTimeout(cambiar, 20000)
    document.write('Bienvenido')
}
function cambiar() {
    window.location.assign('https://google.com')
}