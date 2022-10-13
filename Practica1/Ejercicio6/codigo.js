var cadena = prompt("Introduce una cadena")
document.write("La longitud de la cadena es: " + cadena.length + "<br/>")
var palabras = []
palabras = cadena.split(" ")
palabras.forEach(palabra => {
    document.write(palabra + "<br/>")
});
document.write("<br/>")
for (let index = palabras.length -1 ; index >= 0 ; index--) {
    document.write(palabras[index] + "<br/>")
}