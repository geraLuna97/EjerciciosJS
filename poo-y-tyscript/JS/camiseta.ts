
//Interfaces 
// define que propiedades y que metodos obligatorios que tiene una clase

interface CamisetaBase{
    setColor(color);
    getColor();
}

// Decorador: patron de diseno que permite hacer una copia
// en base a metadatos que asignes
function estampar(logo : string){
    return function(target : Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de: "+logo);
        }

    }
}



// Clase (molde del objeto)
@estampar('Gucci Gang')
class Camiseta implements CamisetaBase{
    estampacion() {
        throw new Error("Method not implemented.");
    }
    //Propiedades (caracteristicas del objeto)
    private color:string; //Public es para cuando instancies vas a tener todoas las propiedades para modificarla
    private modelo:string; //private solo desde la clase que los define
    private marca:string; // Public desde cualquier lugar
    private talla:string;
    private precio:number;

    // Constructor (Metodo especial dentrod una clase para darle valor inicial a los atributos o propiedades del objeto)
    //Metodo qe se ejecuta siempre cuando creamos el objeto y se utliza para darle un valor principal a las propiedades de la clase
    constructor(color: string, modelo: string, marca: string, talla: string, precio: number){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }



    //Metodos (Funciones o acciones del objeto)
    public setColor(color: string){
        this.color = color;

    }

    public getColor(){
        return this.color;
    }

}

//Clase Hija (herencia)
class Sudadera extends Camiseta{
    public capucha : boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }

    getCapucha():boolean{
        return this.capucha;
    }
}



var camiseta = new Camiseta("rojo","manga larga","nike","1",14);
console.log(camiseta);
camiseta.estampacion(); // Adicionar una funcionalidad extra

var sudadera_nike = new Sudadera("azul y amarilla","manga larga","nike","1",14);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Gris");

console.log(sudadera_nike);






























// var camistea = new Camiseta("rojo","manga larga","nike","1",14);
// camistea.setColor("Rojo");
// // camistea.getColor();

// // camistea.color = "verde";
// // camistea.modelo = "Polo";
// // camistea.marca = "Adidas";
// // camistea.talla = "L";
// // camistea.precio = 15;

// // var playera = new Camiseta();
// // playera.setColor("Azul");
// // // playera.color = "Azul";
// // // playera.modelo = "Manga corta";
// // // playera.marca = "Adidas";
// // // playera.talla = "S";
// // // playera.precio = 250;

// // console.log(camistea.getColor(), playera);

// console.log(camistea);







