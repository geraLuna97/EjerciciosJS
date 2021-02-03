'use strict'
// BOM - Browser objet Model
function getBom(){
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location);
}

function abiriVentana(url){
    window.open(url,"","width=400, height=300"); // abre una nueva pesa;a con la url que le asignes
}

getBom();
