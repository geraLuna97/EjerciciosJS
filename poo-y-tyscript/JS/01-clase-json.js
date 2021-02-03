var bicicleta = {
    color: 'Rojo',
    modelos: 'BMX',
    frenos: 'De disco',
    VelocidadMax: '60km',
        cambiarColor: function(nuevo_color){ // tambien fuincona como una propiedad
            //bicicleta.color = nuevo_color
            this.color = nuevo_color;
            console.log(this);

            }
        };
        
bicicleta.cambiarColor("Azul");