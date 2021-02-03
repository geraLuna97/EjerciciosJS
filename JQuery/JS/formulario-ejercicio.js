$(document).ready(function () {
    table_container = $("#table_container");
    table_container.hide();
    
    $("#guardar").click(function(e) { 
        e.preventDefault();
        var Nombre = $("input[name='name']").val();
        var Age = $("input[name='age']").val();
        var Sex = $('#sex option:selected').text();
        var Users = [Nombre, Age, Sex];
        mostrarTabla(Nombre,Age,Sex);
        table_container.show();
        resetForm($('#formulario'));
    });


    function dalateButton(){

    }

    function mostrarTabla(Nombre,Age,Sex)
    {
        table_container.append( `<tr>
        <td>${Nombre}</td>
        <td>${Age}</td>
        <td>${Sex}</td>
        </tr>`);
    }
    
});

function resetForm($form) {
    $form.find('input:text, number, select').val('');
    $('#formulario')[0].reset();
}