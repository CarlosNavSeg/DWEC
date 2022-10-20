function resizeText() {
    this.addEventListener('mouseenter', function() {
        this.style.fontSize = '16pt'
    })
    this.addEventListener('mouseout', function() {
        this.style.fontSize = '12pt'
    })
}
window.onload = function () {
    document.getElementById('resizeable').onmouseover = resizeText;
}