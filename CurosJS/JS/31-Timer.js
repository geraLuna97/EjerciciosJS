'use strict'

window.addEventListener('load',()=>{

    function intervalo()
    {    //Timer
        var tiempo = setInterval(function(){ //Eespo es para que cada sierto tiempo ejecuite SetInterval solo se ejecuta una vez
            console.log("Hola");
            var encabezado = document.querySelector("h1");
            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "20px";
            }else{
                encabezado.style.fontSize = "50px";
            }
        },1000);
        return tiempo;
    }
    var tiempo = intervalo();

    var stop = document.querySelector("#stop");
        stop.addEventListener('click',() =>{
        alert("Haz parado el tiempo");
        clearInterval(tiempo);
    });

    var start = document.querySelector("#start");
        start.addEventListener('click',() =>{
        alert("Haz iniciado el tiempo");
        intervalo();
    });

})              