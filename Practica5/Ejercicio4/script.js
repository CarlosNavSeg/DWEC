window.onload = function () {
    document.getElementById('formularioEjemplo').onchange = triggerOpcion
}
function triggerOpcion() {
    if(document.getElementsByName('tipoFuente')[0].checked) {
        document.getElementById('parrafoColor').style.fontWeight = 
        document.getElementsByName('tipoFuente')[0].value
    }
    else {
        document.getElementById('parrafoColor').style.fontWeight = 
        ""
    }
    if(document.getElementsByName('tipoFuente')[1].checked) {
        document.getElementById('parrafoColor').style.fontStyle = 
        document.getElementsByName('tipoFuente')[1].value
    }
    else {
        document.getElementById('parrafoColor').style.fontStyle = 
        ""
    }

}
