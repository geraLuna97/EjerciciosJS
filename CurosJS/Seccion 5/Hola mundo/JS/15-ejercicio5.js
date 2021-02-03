// Todos los numeros divisores de un numero introducido en pantalla 

var numero = parseInt(prompt("Mete el numero",1));

for(i = 1; i<= numero; i++)
{
    if(numero%i == 0)
    {
        console.log("Divisor:",i);
    }
    
}

