//Clase (Molde)
var Coche = /** @class */ (function () {
    /*Aqui se le dan valores a las clases */
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.velocidad = 0;
        this.color = "blanco";
        if (modelo == null) {
            this.modelo = 'Honda';
        }
        else {
            this.modelo = modelo;
        }
    }
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return Coche;
}());
var coche = new Coche('Renault');
var coche_dos = new Coche();
var coche_tres = new Coche();
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.frenar();
coche.setColor('Rojo');
console.log("La velocidad del coche 1 es: " + coche.getVelocidad());
console.log("El color del coche es :" + coche.getColor());
console.log("El modelo del coche es :" + coche.getModelo());
// console.log('El color es  1'+ coche.getColor());
// console.log('El color es  2'+ coche_dos.getColor());
// console.log('El color es  3'+ coche_tres.getColor());
// coche_dos.setColor("Azul");
// coche_tres.setColor("verde");
