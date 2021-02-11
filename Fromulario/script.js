$(document).ready(function () {
    const usersURL = "http://localhost:3000/users";
    const tableContainer = $("#table_container");
    const usersForm = $('#formulario');
    let contaSubmit = 0;
    let allUsers = [];
    let editDataid 

    //GET
    getUsers()
        .then(response => response.json())
        .then(userData => userData.forEach(function (user) {
            allUsers = userData;
            tableContainer.append(`
    <tr id="${user.id}">
    <td>${user.name}</td>
    <td>${user.age}</td>
    <td>${user.sex}</td>
    <td><button class ="edit" data-id="${user.id}" id="edit-${user.id}" data-action="edit">Edit</button></td>
    <td><button class ="delete" data-id="${user.id}" id="delete-${user.id}" data-action="delete">Delete</button></td>
    </tr>`
            )

        })) // end  fetch

    //Boton de borrar
    $(".borrar").on('click', function () {
        resetForm($('#formulario'));
        contaSubmit = 0;
    });
    //Boton de borrar end


    //Boton guardar/Actualizar

    usersForm.submit(function (e) {
        e.preventDefault();
            if(contaSubmit != 1 ){
                var nameInput = $("input[name='name']").val();
                var ageInput = parseInt($("input[name='age']").val());
                var sexInput = $('#sex option:selected').text();
                console.log(!/[^a-zA-Z]/.test(nameInput))
                if(nameInput.trim() == null || nameInput.trim().length == 0 || !/[^a-zA-Z]/.test(nameInput) == false ){
                    alert("El nombre no existe")
                    return false;
                }
                if(ageInput == null || ageInput.length <= 0 || isNaN(ageInput) || ageInput <= 0  )
                {
                    alert("La edad no existe")
                    return false;
                }
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
                }).then(response => response.json())
                .then(user => {
                tableContainer.append(`
                <tr id="${user.id}">
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>${user.sex}</td>
                <td><button class ="edit" data-id="${user.id}" id="edit-${user.id}" data-action="edit">Edit</button></td>
                <td><button class ="delete" data-id="${user.id}" id="delete-${user.id}" data-action="delete">Delete</button></td>
                </tr>`)
                    })
                resetForm($('#formulario'));
                
            }else{
                console.log(editDataid);
                const userData = allUsers.find((user) => {
                    return user.id == editDataid
                })
                console.log(userData);
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
                }).then(response => response.json())
                    .then(user => {
                        console.log(editDataid)
                        $('#table_container tr#' + editDataid).html(`
                    <td>${user.name}</td>
                    <td>${user.age}</td>
                    <td>${user.sex}</td>
                    <td><button class ="edit" data-id="${user.id}" id="edit-${user.id}" data-action="edit">Edit</button></td>
                    <td><button class ="delete" data-id="${user.id}" id="delete-${user.id}" data-action="delete">Delete</button></td>
                    </tr>`)
                    })
            }
            })
    //Boton guardar/Actualizar end
    tableContainer.click(function (e) {
        e.preventDefault();
        // Update
        if (e.target.dataset.action == 'edit') {
            contaSubmit = 1;
    	    const userData = allUsers.find((user) => {
                return user.id == e.target.dataset.id
            })
            const editButton = $(`#edit-${editDataid}`);
            editButton.attr("disabled", "disabled");
            $("input[name='name']").val(userData.name);
            $("input[name='age']").val(userData.age);
            $("sex option:selected").text(userData.sex);
            editDataid = e.target.dataset.id;
            // Update end
            // Delate
        } else if (e.target.dataset.action == 'delete') {
            if (confirm("Estas seguro que quieres eliminarlo?")) {
                console.log(e.target.dataset.id)
                $('#table_container tr#' + e.target.dataset.id).remove();
                fetch(`${usersURL}/${e.target.dataset.id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(response => response.json())
            }
        }
    });
    // Delate end
    function getUsers() {
        return fetch(usersURL);
    }

    //Reset form
    function resetForm($form) {
        $form.find('input:text, number, select').val('');
        $('#formulario')[0].reset();
        return resetForm;
    }
});