$(document).ready(function () {

    reloadLinks();

    $('#add_button').removeAttr('disabled').click(function (e) { 
        // con el elemneto html puedo insertal valores html tal cual. pero ocupo el append para dejarlo abajo
        $('#menu').prepend('<li><a href="' + $("#add_link").val()+ '"></a> </li>'); // es val de valor que captura el valor 
        $("#add_link").val('');
        // metodo before a;ade anes y after a;ade despues
        reloadLinks();
        e.preventDefault();

    });



function reloadLinks ()
{
    $('a').each(function(index){
        console.log($('a').length);// Tama;o de la etiqueta
        console.log(this);
        var enlace = $(this).attr("href") //el attr obtiene lo que hay en el atributo href 
                                        // removeattr remueve atribvutos
        $(this).attr('target','_blank')



        $(this).text(enlace);
    });
}






});