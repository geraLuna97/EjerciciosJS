//Interfaces 
// define que propiedades y que metodos obligatorios que tiene una clase
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorador: patron de diseno que permite hacer una copia
// en base a metadatos que asignes
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de: " + logo);
        };
    };
}
// Clase (molde del objeto)
var Camiseta = /** @class */ (function () {
    // Constructor (Metodo especial dentrod una clase para darle valor inicial a los atributos o propiedades del objeto)
    //Metodo qe se ejecuta siempre cuando creamos el objeto y se utliza para darle un valor principal a las propiedades de la clase
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.estampacion = function () {
        throw new Error("Method not implemented.");
    };
    //Metodos (Funciones o acciones del objeto)
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta = __decorate([
        estampar('Gucci Gang')
    ], Camiseta);
    return Camiseta;
}());
//Clase Hija (herencia)
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var camiseta = new Camiseta("rojo", "manga larga", "nike", "1", 14);
console.log(camiseta);
camiseta.estampacion(); // Adicionar una funcionalidad extra
var sudadera_nike = new Sudadera("azul y amarilla", "manga larga", "nike", "1", 14);
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
