function añadirElemento() {
    const currentLi = document.getElementsByTagName("li")[0];
    const newLi = document.createElement('li')  
    const newContent = document.createTextNode("pablo");
    newLi.appendChild(newContent)  
    currentLi.parentNode.insertBefore(newLi, currentLi.nextSibling);
}
function insertarElemento() {
    const newLi = document.createElement("li");      
    const newContent = document.createTextNode("dinosaurio");  
    newLi.appendChild(newContent);
    const ul = document.getElementsByTagName("ul")[0];
    ul.appendChild(newLi)
}
function borrarElemento() {
    document.getElementsByTagName('li')[0].remove()
}
function reemplazarElemento() {
    let ul = document.getElementsByTagName('ul')[0]
    let elPrimerLi = ul.firstElementChild
    elPrimerLi.innerText="Parrafo reemplazado"
}
function clonarLista() {
    const ul = document.getElementsByTagName('ul')[0];
    let copiaUl = ul.cloneNode(true)
    document.body.insertAdjacentElement("afterend", copiaUl);
}
function funcionesDOM() {
    const newUl = document.createElement('ul')
    componentes.forEach(componente => {
        let newLi = document.createElement('li')
        let newContent = document.createTextNode(componente)
        newLi.appendChild(newContent)
        newUl.appendChild(newLi)
    } )
    let padre = document.getElementsByTagName('li')[0]
    padre.appendChild(newUl)
}
function listaInner() {
    const newUl = document.createElement('ul')
    n = (componentes.length);
    var kk="";
    for(i = 0; i <= (n-1); i++){
        var list = componentes[i];
        kk += "<li>"+list+"</li>"
    }
var lista = document.getElementsByTagName('li')[0]
newUl.innerHTML = kk;
lista.appendChild(newUl)        
}
let componentes = ["perro", "gato", "juan carlos"]