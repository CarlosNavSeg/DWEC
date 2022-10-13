function añadirParrafo() {
    let currentDiv = document.getElementsByTagName("div")[0];
    let newP = document.createElement("p");        
    let newContent = document.createTextNode("Parrafo añadido");  
    newP.appendChild(newContent)
    currentDiv.appendChild(newP);
}
function insertarNuevo() {
    let newP = document.createElement("p");      
    let newContent = document.createTextNode("Parrafo insertado");
    let oldContent = document.getElementsByTagName("p")[1];
    newP.appendChild(newContent);
    let currentDiv = document.getElementsByTagName("div")[0];
    currentDiv.replaceChild(newP, oldContent)
    currentDiv.appendChild(oldContent);
}
function borrarParrafo() {
    document.getElementsByTagName('p')[1].remove()
}
function reemplazarParrafo() {
    let elPrimerDiv = document.getElementsByTagName('div')[0]
    let elPrimerP = document.getElementsByTagName('p')[1]
    let newP = document.createElement("p");      
    let newContent = document.createTextNode("Parrafo reempazado");
    newP.appendChild(newContent);
    elPrimerDiv.replaceChild(newP, elPrimerP)
}
function clonarDiv() {
    let divs = document.getElementsByTagName('div')[0];
    let divCopia = divs.cloneNode(true)
    document.body.insertAdjacentElement("afterend", divCopia)
}