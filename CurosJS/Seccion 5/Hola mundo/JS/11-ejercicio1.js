
// Programa que pida 2 numero 
// y que nos diga cual es meyor cual es menor y si son iguales
// PLUS si los numeros no son menores o son iguales a cero, vuelvan a pedir
// Si los numeros no son un numero

var numero1 = parseInt(prompt("Ingresa el primer numero",0));
var numero2 = parseInt(prompt("Ingresa el segundo numero",0));


while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    var numero1 = parseInt(prompt("Ingresa el primer numero",0));
    var numero2 = parseInt(prompt("Ingresa el segundo numero",0));
}
if(numero1>numero2)
{
    alert("El numero " + numero1 + " Es mas grande ");
} 
else if(numero1<numero2)
{
    alert("El numero " + numero2 + " Es mas grande ");
}
else if(numero1 == numero2)
{
    alert("Los numeros que ingresaste son iguales");
}

else
{
    alert("Los Numeros no son correctos");
}


