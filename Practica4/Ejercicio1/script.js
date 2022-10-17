function agrandar() {
    this.style.fontSize = '16pt';
}
function empequeñecer() {
    this.style.fontSize = '12pt'
}
window.onload = function () {
    document.getElementById('resizeable').onmouseover = agrandar;
    document.getElementById('resizeable').onmouseout = empequeñecer;
}