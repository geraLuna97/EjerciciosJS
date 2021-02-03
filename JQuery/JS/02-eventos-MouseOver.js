$(document).ready(function () {
    //MouseOver
    var caja = $('#caja'); //Buena practica acceder pocas veces al DOM

    // caja.mouseover(function () { 
    //     $(this).css("background","red");
    // });
    // caja.mouseout(function () { 
    //     $(this).css("background","green");
    // });

    //Hover
    caja.hover(function () {
        $(this).css("background","red");
            
        }, function () {
        $(this).css("background","green");
        }
    );
     // Clic doble clic
    caja.click(function (e) { 
        $(this).css("background","blue").css("color","white")
        e.preventDefault();
    });
    caja.dblclick(function (e) { 
        $(this).css("background","pink").css("color","yellow")
        e.preventDefault();
    });
    
    //Focus(cuando estas dentro de un campo de texto) y blur es cuando sales del campo de texto
    
    var datos = $('#datos')
    $("#nombre").focus(function (e) {
        $(this).css('border','2px solid red')
        e.preventDefault();
    });
    $("#nombre").blur(function (e) { 
        $(this).css('border','2px solid green')
        datos.text($(this).val()).show(); //val muestra el valor de un inputy show muestra la clase
        e.preventDefault();
        
    });

    //MOUSEDOWN Y MOUSEUP
    datos.mousedown(function () { 
        $(this).css("border-color","gray")
        
    });

    datos.mouseup(function () { 
        $(this).css("border-color","black")
    });

    //MouseMove captura las cordenadas
    $(document).mousemove(function (e) { 
        $('body').css("cursor","none");
        // console.log("en X " + event.clientX);
        // console.log("en Y " + event.clientY);
        $("#sigueme").css("left",event.clientX).css("top",event.clientY);
    });

});