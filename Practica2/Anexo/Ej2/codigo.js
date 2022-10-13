function refValidate() {
    var checker = document.getElementsByName('dni')[0].value
    if(checker == '') {
        alert('no puedes enviar un dni vacio')
    }
}