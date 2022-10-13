function showDate() {
var timeShow = new Date()
if(timeShow.getHours().valueOf >= 20) {
    if(timeShow.getMinutes()<10) {
        document.write('Buenas noches, son las ' + timeShow.getHours() + ':0' + timeShow.getMinutes() + ' horas.')
    }
    document.write('Buenas noches, son las ' + timeShow.getHours() + ':' + timeShow.getMinutes() + ' horas.')
}
else if(timeShow.getHours().valueOf < 20 && timeShow.getHours().valueOf >= 14) {
    if(timeShow.getMinutes()<10) {
        document.write('Buenas tardes, son las ' + timeShow.getHours() + ':0' + timeShow.getMinutes() + ' horas.')
    }
    document.write('Buenas tardes, son las ' + timeShow.getHours() + ':' + timeShow.getMinutes() + ' horas.')
}
else {
    if(timeShow.getMinutes()<10) {
        document.write('Buenos dias, son las ' + timeShow.getHours() + ':0' + timeShow.getMinutes() + ' horas.')
    }
    document.write('Buenos dias, son las ' + timeShow.getHours() + ':' + timeShow.getMinutes() + ' horas.')
}
}