function generar() {
    var valorCajaTexto = document.getElementById('valor').value;
    var numeroAleatorio = Math.random()
    numeroAleatorio = numeroAleatorio*10
    numeroAleatorio = Math.round(numeroAleatorio)
    if(numeroAleatorio == valorCajaTexto) {
        alert('felicidades que tengas un hermoso dia')
    }
    else if(numeroAleatorio !== valorCajaTexto){
        alert('has fallado')
    }
}