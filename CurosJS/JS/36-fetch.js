//  Fetch y peticiones a servicios / apis REST

var div_usuarios = document.querySelector("#usuarios");
var loading = document.querySelector('#loading');
var div_leanne = document.querySelector('#Leanne');
var div_profesor = document.querySelector('#profesor');
    
//Funciones promesa pueden recibir resultados ahorita,nunca o despues.
    getUsuarios()
    .then(data => data.json()) //Funcion promesa que va a recoger datos con una funcion de callback
    .then(data => {// Capturar datos que devuelve promesa
        listadoUsuarios(data); //Mostrar en pantalla
            
            return getInfo(); //llamar a otro metodo que es una promesa tambien 
        })
        .then(data => { //utilizar su promesa
            div_profesor.innerHTML = data; //Meterno dentro de una pagina web
            return getLeanne(); // Llamar metodo fetch ejecucion de promesa
        })
        .then(data => data.json())
        .then(leanne =>{
            mostrarLeanne(leanne)
        })
        
        .catch( error =>
            {
                alert("Error perro");
            })
        ;
        function getUsuarios(){
            return fetch('https://jsonplaceholder.typicode.com/users');
        }

        function getLeanne(){
            return fetch('https://jsonplaceholder.typicode.com/users/1');
        }
        // Crear una promesa desde 0

        function getInfo(){
            var profesor ={
                nombre: 'Gera',
                apellidos: 'Luna',
                url: 'https://google.com'
            };
        

            return new Promise ((resolve,reject) => {
                var profesor_string = "";
                    setTimeout(function(){
                        var profesor_string = JSON.stringify(profesor);
                        if(typeof profesor_string != 'string' || profesor_string == "") return reject("Error 1");
                        return resolve(profesor_string);
                    }, 3000);
        });
        }


        function listadoUsuarios(usuarios){
            usuarios.map((data,i) =>{
            let nombre = document.createElement('h2');
            nombre.innerHTML = i + "." + data.name +  " " + data.username;
            div_usuarios.appendChild(nombre);
            document.querySelector(".loading").style.display = 'none';
        });
        }

        function mostrarLeanne(leanne){
            console.log(leanne);
            let nombre = document.createElement('h3');
            nombre.innerHTML =  leanne.name +  " " + leanne.username + " " + leanne.address.city;
            div_leanne.appendChild(nombre);
            document.querySelector("#Leanne .loading").style.display = 'none';
            console.log(leanne.name);
        }
    
