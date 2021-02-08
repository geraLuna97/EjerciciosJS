$(document).ready(function () {
    const usersContainer = $("#caja_formulario");
    const usersURL = "http://localhost:3000/users";
    const tableContainer =$("#table_container");
    const usersForm = $('#formulario');
    let allUsers = [];

//GET
getUsers()
    .then( response => response.json() )
    .then( userData => userData.forEach(function(user) {
    allUsers = userData;
    tableContainer.append( `
    <tr id="${user.id}">
    <td>${user.name}</td>
    <td>${user.age}</td>
    <td>${user.sex}</td>
    <td><button class ="edit" data-id="${user.id}" id="edit-${user.id}" data-action="edit">Edit</button></td>
    <td><button class ="delete" data-id="${user.id}" id="delete-${user.id}" data-action="delete">Delete</button></td>
    </tr>`
    )
    })) // end  fetch

    //POST
    usersForm.submit(function (e) {
        e.preventDefault();
        var nameInput = $("input[name='name']").val();
        var ageInput = $("input[name='age']").val();
        var sexInput = $('#sex option:selected').text();
    
        fetch(usersURL, {
            method: 'POST',
            body: JSON.stringify({
            name: nameInput,
            age: ageInput,
            sex: sexInput,
            }),
            headers: {
            'Content-Type': 'application/json'
            }
        }).then( response => response.json())
            .then( user => {
                tableContainer.append( `
                <tr id="${user.id}">
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>${user.sex}</td>
                <td><button class ="edit" data-id="${user.id}" id="edit-${user.id}" data-action="edit">Edit</button></td>
                <td><button class ="delete" data-id="${user.id}" id="delete-${user.id}" data-action="delete">Delete</button></td>
                </tr>`)
        })
        resetForm($('#formulario'));
    });
//Post end


    //Update
        $('.edit').on('click', function (e) {
            e.preventDefault();
            alert('Hola');
        });
    //Update fallido                  
    
    tableContainer.click(function (e) { 
        e.preventDefault();
        // Update
        if (e.target.dataset.action == 'edit'){
            const userData = allUsers.find((user) =>{
                return user.id == e.target.dataset.id
            })
            const editButton = $(`#edit-${e.target.dataset.id}`);
    	    editButton.attr("disabled", "disabled");
            $("input[name='name']").val(userData.name);
            $("input[name='age']").val(userData.age);
            $("sex option:selected").text(userData.sex);
            let editDataid = e.target.dataset.id;
            
            $(".actualizar").on('click', function (e) { 
                e.preventDefault();
                console.log(editDataid)
                var nameInput = $("input[name='name']").val();
                var ageInput = $("input[name='age']").val();
                var sexInput = $('#sex option:selected').text();
                
                fetch(`${usersURL}/${editDataid}`, {
                    method: 'PATCH',
                    body: JSON.stringify({
                        name: nameInput,
                        age: ageInput,
                        sex: sexInput,
                    }),
                    headers: {
                    'Content-Type': 'application/json'
                    }
                }).then( response => response.json() )
                .then( user => {
                    
                    console.log(editDataid)
                    $('#table_container tr#'+ editDataid ).html( `
                    <td>${user.name}</td>
                    <td>${user.age}</td>
                    <td>${user.sex}</td>
                    <td><button class ="edit" data-id="${user.id}" id="edit-${user.id}" data-action="edit">Edit</button></td>
                    <td><button class ="delete" data-id="${user.id}" id="delete-${user.id}" data-action="delete">Delete</button></td>
                    </tr>`)
            })
            });
        // Update end



        // Delate
        }else if(e.target.dataset.action == 'delete'){
            if (confirm("Estas seguro que quieres eliminarlo?")){
                console.log(e.target.dataset.id)
                $('#table_container tr#'+ e.target.dataset.id).remove();
                fetch(`${usersURL}/${e.target.dataset.id}`, {
                    method: 'DELETE',
                    headers: {
                    'Content-Type': 'application/json'
                    }
                }).then( response => response.json())
            }
        }
        
    });
        // Delate end
function getUsers(){
    return fetch(usersURL);
}

//Reset form
function resetForm($form) {
    $form.find('input:text, number, select').val('');
    $('#formulario')[0].reset();
    return resetForm;
}

});