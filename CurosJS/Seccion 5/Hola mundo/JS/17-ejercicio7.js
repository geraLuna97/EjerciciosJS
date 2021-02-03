// Tabla de multiplica de un numero introducuido por el usuario

var numero = parseInt(prompt("Ingresa el numero en el que quieras ver la tabla",1));

document.write("<h1>Tabla del " +numero+"</h1>");
for(var i=1 ; i <=10; i++)
{
 document.write(i +" x "+numero+ " = "+ (i*numero) +"<br>");
 
}


