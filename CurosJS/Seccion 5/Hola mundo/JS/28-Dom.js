'use stric'

//Document object model

// getelemnet by id te trae lo que viene en el HTML y el .innerHTML te lo pone directamente textual

function cambiacolor(color){
    caja.style.background = color;
}
// conseguir elementos con un id unico
//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja"); // es lo mismo qu el getElementByID

caja.innerHTML = "Texto modificado en la caja desde el JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.className = "hola"


console.log(caja);

// conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');

var seccion = document.querySelector("#miseccion")
var hr = document.createElement("hr");



// var conetnidoEnTexto = todosLosDivs[2].innerHTML; // lo mismo que Text Content
// todosLosDivs[2].style.background = "red";

// Imprimir los divs de nuevo en la parte de abajo con un append


var valor;
for(valor in todosLosDivs){
    console.log(todosLosDivs[valor]);// checar si hace falla algo dentro de la consola

    if(typeof todosLosDivs[valor].textContent == 'string' ) {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.prepend(texto);
        //document.querySelector("#miseccion").prepend(parrafo);
        seccion.append(parrafo);
    }
}
seccion.append(hr);


//conseguir elementos por su clase css
var divsRojos = document.getElementsByClassName("rojo");
var divsAmarillos = document.getElementsByClassName("amarillo")
console.log(divsAmarillos);

for(var div in divsRojos){
    if(divsRojos[div].className == "rojo"){ // para solo agarrar los divs por que al traerlos viene muchas cosas
        divsRojos[div].style.background = "red";
    }
    
}
console.log(divsRojos);

// Query Selector

var id = document.querySelector("#h1") // solo recomendado para cosas peque;as como id, para grandes cosas el ClassName

// Multimples elemento con el querySelectorAll()