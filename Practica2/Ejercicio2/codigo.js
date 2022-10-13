function diMes() {
    var mes = document.getElementById("mes").value;
    switch(mes) {
        case "enero":
        case "febrero":
        case "diciembre": 
        document.getElementById('resultado').value = 'Estamos en invierno';
        break; 
        case "marzo":
        case "abril":
        case "mayo":
        document.getElementById('resultado').value = 'Estamos en primavera'
        break;
        case "junio":
        case "julio":
        case "agosto": 
        document.getElementById('resultado').value = 'Estamos en verano'
        break;
        case "septiembre":
        case "octubre":
        case "noviembre": document.getElementById('resultado').value = 'Estamos en otoño'
        break;
        default:
            document.getElementById('resultado').value = 'No es un mes bro'
            break;
    }
}