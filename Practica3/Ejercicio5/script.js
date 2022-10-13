function atributo() {
    let noAtributo = prompt('Dime el nombre del atributo');
    let elAtributo = prompt('Dime el atributo')
    var laCaja = document.getElementById('atributable')
    laCaja.setAttribute(noAtributo, elAtributo)
}