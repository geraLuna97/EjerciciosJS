$(document).ready(function () {

    //Selector de ID
    var rojo = $("#rojo").css("background","red").css("color","white"); // cambia cualquier propiedad de CSS

    var amarillo = $("#amarillo").css("background","yellow").css("color","black")

 $("#verde").css("background","green").css("color","white"); // cambia cualquier propiedad de CSS

    //No hace falta inicializar una variable 
//Selectores por clase
var mi_clase = $(".zebra").css("padding","5px");

$(".sin_borde").click(function(){
    console.log("Clic")
    $(this).addClass('zebra');
})

//Selectores por Clase
var parrafo = $('p').css("cursor","pointer");

parrafo.click(function () { 
    var that = $(this);
    if(!that.hasClass('grande')){ //! esto significa que no
        that.addClass('grande');
    }else{
        that.removeClass('grande');
    }
});
// Selectores de Atrubuto
$('[title="Google"]').css('background','#ccc');
$('[title="Facebook"]').css('background','blue');

//Otros
// $('p,a').addClass('margen-superior'); // de esta manera seleccionas ambos atributos/etiquetas

var busqueda = $('#caja .resaltado').eq(0).parent().parent().find('[title="Google"]'); //Busca elementos en una clase 
//parent salta de un directorio a otro

});