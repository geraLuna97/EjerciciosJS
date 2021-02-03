// Eventos es un a funcion que se ejecuta cuando sucede algo

//Eventos del raton

window.addEventListener('load',() => {
    var boton = document.querySelector("#boton");

    function cambiarColor(){
        var bg = boton.style.background;

        if(bg == "green"){
            boton.style.background = "red";
        }else{
            boton.style.background = "green";
        }
        return true;

    }
    // Evento clic que caputra como un onClick
    boton.addEventListener('click',function(){
        cambiarColor();
        this.style.border = "10px solid black"; // Operator this selecciona con lo que estas trabajando
    });

    // Mouse Over 

    boton.addEventListener('mouseover',function()
    {
        boton.style.background = "#ccc";
    });

    //Mouseout
    boton.addEventListener('mouseout',function()
    {
        boton.style.background = "black";
    });

    //focus es cuando entras a un lugar por ejemplo en campo de texto
    var input = document.querySelector("#campo_nombre");
        input.addEventListener('focus',function(){
        console.log('[Focus]Estas dentro del input');
    });

    //Blur
        input.addEventListener('blur',function(){
        console.log('[Blur]Estas fuera');
    });
    //keydown
        input.addEventListener('keydown',function(event){
        console.log('[keydown]Pulsando esta tecla', String.fromCharCode(event.keyCode));
    });

    //keypress
        input.addEventListener('keypress',function(event){
        console.log('[keypress]Tecla presionada', String.fromCharCode(event.keyCode));
    })

    //keyup
        input.addEventListener('keyup',function(event){
        console.log('[keyup]Tecla presionada', String.fromCharCode(event.keyCode));
        })
    });
