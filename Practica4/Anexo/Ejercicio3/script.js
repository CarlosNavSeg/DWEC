window.onload = function () {
    document.getElementById('caja').onclick= alerta
    document.getElementById('lol').onclick = redminensiuon
}
function alerta(evento) {
    var elevento = evento
    alert('x: '.concat(elevento.clientX - this.offsetLeft, '\ny: ', elevento.clientY - this.offsetTop));
}
function redminensiuon(eveneto) {
    var elevento = eveneto
    this.parentNode.style["height"] = Math.round(Math.random() * screen.height) + 'px'
    this.parentNode.style["width"] = Math.round(Math.random() * screen.width) + 'px'
    elevento.stopPropagation();
}