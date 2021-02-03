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
    });
    //Update
        $('#table_container button').click(function (e) { 
        e.preventDefault();
        alert("The paragraph was clicked.");
        });
    

    tableContainer.click(function (e) { 
        e.preventDefault();
        // Update
        if (e.target.dataset.action == 'edit'){
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
});