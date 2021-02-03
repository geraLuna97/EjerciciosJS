$(document).ready(function () {

    $('#mostrar').hide()

    $("#ocultar").click(function (e) { 
        $('#caja').hide(); // oculta
        $('#mostrar').show('normal')
        // $('#ocultar').fadeIn('slow')
        e.preventDefault();
    });

    $("#mostrar").click(function (e) { 
        $('#caja').show(); // muestra
        $('#ocultar').show('normal')

        // $('#mostrar').fadeOut('slow') // muestra mejor
        e.preventDefault();
    });

    $("#todoenuno").click(function (e) { 
        $("#caja").toggle('fast'); //Efecto toggle hace que se abra y cierra (slidetoggle,)
        e.preventDefault();
        
    });

    $('#animame').click(function (e) { 
        $("#caja").animate({marginLeft: '500px',
                            fontSize: '40px',
                            height: '110px',
                            borderRadius: '0px'
                            },'slow')
                    .animate({
                        borderRadius :'900px',
                        marginTop: '120px'
                    },'slow') //Hace cualquier tipo de funcion CSS agregar mas funciones para hacer la animacion


        e.preventDefault();
        
    });
    
});