//while 

var year = 2018;



while (year!=1991)
{
    //ejecuta esto
    console.log("Estamos en el año " + year);
   
        if(year == 2000)
        {
            break; // Break corta la ejecuccion del bucle
        }         
   
    year--;
    
    debugger;

}

// Do While

var years = 30;

do{

    alert("Solo cuando sea diferente a 20");
    years --;

}while (years > 25)