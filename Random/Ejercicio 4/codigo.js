var valores = [true, 5, false, "hola", "adios", 2];
alert("Hola mundo!")
if (valores[3].length > valores[4].length) {
    alert(valores[3] + " es mas largo que " + valores[4])
}
else {
    alert(valores[4] + " es mas largo que " + valores[3])
}
var resultadoVerdadero = valores[0] || valores[2]
alert(resultadoVerdadero)
var resultadoFalso = valores[2] || valores[2]
alert(resultadoFalso)
alert("Suma " + (valores[1] + valores[5]) + " Resta " + (valores[1] - valores[5]) + " Multiplicacion " + valores[1]*valores[5] + " Division " + valores[1]/valores[5] + " Resto " + valores[1]%valores[5])