function muestraDocumento() {
    document.write(window.location + '<br/>')
    document.write(window.location.pathname + '<br/>')
    document.write(window.location.protocol)
    document.write('<h1><button onclick="abrirGoogle()"> Abrir Google </button></h1>')
}
function abrirGoogle() {
    window.open('https://google.com')
}