$(document).ready(function () {
    // Load es como un get
    // $("#datos").load("https://reqres.in/");

    // GET y post
    $.get("https://reqres.in/api/users",{page:2},function(response){
        response.data.forEach((element , index) => {
            $("#datos").append("<p>" + element.first_name + " " + element.last_name + "</p>")
            
        });
    });


    $("#formulario").submit(function (e) { 
        e.preventDefault();
        var usuario = {
            name: $('input[name = "name"]').val(),
            last_name: $('input[name = "last_name"]').val()
        }
        // console.log(usuario);
        // $.post($(this).attr("action"),usuario,function(response){
        //     console.log(response);
        // }).done(function(){ // para cuando se agrega correctamente
        //     alert("Anadido correctamente");
        // });
        

        // juncion ajax mas cool
        $.ajax({
            type: "POST",
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function (){
                console.log("Enviado usuario...")
            },
            success: function(response){
                console.log(response)
            },
            error: function(){
                console.log("A ocurrido un error");
            },
            timeout: 2000
        });
        return false;
    });

});