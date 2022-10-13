function showDate() {
const days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
const d = new Date();
let day = days[d.getDay()];
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
const e = new Date();
let month = months[d.getMonth()];
document.write(day + ", " + d.getDate() + " de " + month + " de " + d.getFullYear() )
}