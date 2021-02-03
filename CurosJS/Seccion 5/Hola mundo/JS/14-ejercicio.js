// Mostrar todos los numeros impares que esten entre 2 numeros introduccidos por el usuario


// var numero2 = parseInt(prompt("Ingresa el segundo numero",0));
// var numero1 = parseInt(prompt("Ingresa el primer numero",0));
// // el document.write es para imprimir en html
// document.write("<h1>De " +numero1 + " a " +numero2+ " estan estos numeros</h1>")
// for(var i=numero1 +1; i <= numero2 -1; i++)
// {
//     if(i  % 2 != 0)
//     {
//         document.write(i+"<br>")
//     }    
//     // debugger;
// }


var numero2 = parseInt(prompt("Ingresa el segundo numero",0));
var numero1 = parseInt(prompt("Ingresa el primer numero",0));

document.write("<h1>De " +numero1 + " a " +numero2+ " estan estos numeros</h1>")

while(numero1 < numero2){
    numero1++;
    if(numero1 % 2 != 0)
     {
         document.write(numero1+"<br>");
     }   


}
