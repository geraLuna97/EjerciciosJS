var fecha = new Date();

var year = fecha.getFullYear();
var month = [];
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[fecha.getMonth()];
var dia = fecha.getDay();
//$es Interpolaion de datos
var textoHora = `
El ano es: ${year} 
El mes es :${n}
El dia es: ${dia}
`;
console.log(textoHora);

//Metodos Matematicos

console.log(Math.ceil(Math.random()*10));