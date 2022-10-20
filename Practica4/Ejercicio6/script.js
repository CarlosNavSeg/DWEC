function controlador() {
    alert(document.getElementsByTagName('button').length)
}
window.onload = function () {
    document.onclick = controlador;
}