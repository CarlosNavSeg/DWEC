function validar() {
    Array.from(document.getElementsByTagName('input')).forEach(input => {
    if(input.value = "") {
       return false;
    }
    })
    return true
}