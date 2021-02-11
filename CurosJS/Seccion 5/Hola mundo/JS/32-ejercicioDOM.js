'use stict'
window.addEventListener('load',() => {

    var formulario = document.querySelector("#formulario");
    var box_dash = document.querySelector("#box_dash");
    var mostrar = document.querySelector(".mostrar");
    box_dash.style.display = "none";


    formulario.addEventListener('submit',() =>{
        console.log("Evento submit capturado");
        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellido").value;
        var edad = parseInt(document.querySelector("#edad").value);
        //Todos los datos del formulario son string hasta que los evaluas

        if(nombre.trim() == null || nombre.trim().length == 0)
        {
            alert("El nombre no existe")
            return false;
        }
        if(apellido.trim() == null || apellido.trim().length == 0)
        {
            alert("El apellido no existe")
            return false;
        }
        if(edad == null || edad.length <= 0 || isNaN(edad) || edad <= 0) // !isNaN(edad) es lo mismo que == false
        {
            alert("La edad no existe")
            return false;
        }

        box_dash.style.display = "block";

        console.log(nombre,apellido,edad);

        var datos_usuario = [nombre,apellido,edad];
        
        for( var indice in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dash.append(parrafo);
    }
    });
});
