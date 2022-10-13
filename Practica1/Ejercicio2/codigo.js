var numeros = [7, 8, 2, 9, 10]
var resultado = 0
numeros.forEach(numero => {
    if(numero > 8) {
        resultado = resultado + numero
    }
})
alert(resultado)