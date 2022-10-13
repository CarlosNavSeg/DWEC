var resultado = 0
var contadorDeGigantes = 0
for (var i = 0; i < 5; i++) {
    numeroEnCuestion = prompt("Introduce un numero")
    numeroEnCuestion = parseInt(numeroEnCuestion)
    if(numeroEnCuestion > 100) {
        contadorDeGigantes++
    }
    resultado = numeroEnCuestion + resultado
}
alert(resultado)
alert("Hay " + contadorDeGigantes + " numeros que son mayores que 100.")

