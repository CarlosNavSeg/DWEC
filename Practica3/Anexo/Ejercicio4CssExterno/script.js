function refEnlaces() {
    var links=document.getElementsByTagName('a'), hrefs = [];
    for (var i = 0; i<links.length; i++)
    {   
        hrefs.push(links[i].href);
        alert(links[i].href)
    }
}
function contarEnlaces() {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i<links.length; i++)
    {   
    hrefs.push(links[i].href);
    }
    alert(hrefs.length)
}
function refEnlacesParrafos() {
    var parrafos = document.getElementById('1').children
    var parrafo1 = "Parrafo 1: "
    Array.from(parrafos).forEach(parrafo => {
        parrafo1 += parrafo.getAttribute('href') + " "
    })
    alert(parrafo1)
    var parrafos = document.getElementById('2').children
    var parrafo2 = "Parrafo 2: "
    Array.from(parrafos).forEach(parrafo => {
        parrafo2 += parrafo.getAttribute('href') + " "
    })
    alert(parrafo2)
    var parrafos = document.getElementById('3').children
    var parrafo3 = "Parrafo 3: "
    Array.from(parrafos).forEach(parrafo => {
        parrafo3 += parrafo.getAttribute('href') + " "
    })
    alert(parrafo3)
}
function parrafosVerdes() {
    var boton1 = document.getElementById('verde')
    boton1.addEventListener('click', function() {
        var parrafos = document.getElementsByTagName('p')
        Array.from(parrafos).forEach(parrafo => {
            //He modificado la propiedad ClassList para añadir la propiedad active a los párrafos
            parrafo.classList.add('active');
        })
    })
}

function desactivarColor() {
    var boton1 = document.getElementById('colorless')
    boton1.addEventListener('click', function() {
        var parrafos = document.getElementsByTagName('p')
        Array.from(parrafos).forEach(parrafo => {
            parrafo.classList.remove('active')
        })
    })
}