'use strict'

// Parametros REST y Spread

function listadoFrutas(fruta1, fruta2, ...resto_de_Frutas){ // los 3 puntos ... se utilizan para adjuntar todas las variables no decalras

    console.log("Fruta 1: ",fruta1);
    console.log("Fruta 2: ",fruta2);
    console.log("otras frutas: ",resto_de_Frutas);

}

listadoFrutas("Naranja", "Manzana","Sandia","Pera","Melon","Coco");