
`Use stict`

// Programa que me pida dos numeros y que muestre los numeros que hay entre dichos numeros

var numero1 = parseInt(prompt("Ingresa el primer numero",0));
var numero2 = parseInt(prompt("Ingresa el segundo numero",0));
// el document.write es para imprimir en html
document.write("<h1>De " +numero1 + " a " +numero2+ " estan estos numeros</h1>")
for(var i=numero1 +1; i <= numero2 -1; i++)
{
    
    document.write(i+"<br>")
    debugger;
}



