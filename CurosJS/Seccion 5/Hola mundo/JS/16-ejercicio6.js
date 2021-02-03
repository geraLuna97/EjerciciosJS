// Programa que no diga si es par o impar y tiene que tener 
// ventana promt y comprobar si un numero no es valido que nos pide de nuevo el numero
// y mostrar si es par o impar

var numero = parseInt(prompt("Ingresa el numero",0));
while(isNaN(numero) || numero>0)
{
    var numero = parseInt(prompt("Ingresa el numero",0));
}
    if(numero%2 == 0){
        console.log("Es par");
        
    }
    else{
        console.log("No lo es");
    }

