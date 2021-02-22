
//Clase (Molde)
class Coche{
    public color: string;
    public modelo: string;
    public velocidad:number;



    /*Aqui se le dan valores a las clases */
    constructor(modelo = null){
        this.velocidad = 0;
        
        this.color ="blanco";
        if(modelo == null){
            this.modelo = 'Honda';
        }else{
            this.modelo = modelo;
        }
    }

    public getModelo(){
        return this.modelo;
    }

    public setModelo(modelo: string){
        this.modelo = modelo;
    }

    public getColor(){
        return this.color;
    }

    public setColor(color: string){
        this.color = color;
    }

    public acelerar(){
        this.velocidad++;
    }

    public frenar(){
        this.velocidad--;
    }
    public getVelocidad():number{
        return this.velocidad
    }
}

var coche = new Coche('Renault');
var coche_dos = new Coche();
var coche_tres = new Coche();


coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.frenar();
coche.setColor('Rojo');



console.log("La velocidad del coche 1 es: "+ coche.getVelocidad())
console.log("El color del coche es :"+ coche.getColor())
console.log("El modelo del coche es :"+ coche.getModelo())
// console.log('El color es  1'+ coche.getColor());
// console.log('El color es  2'+ coche_dos.getColor());
// console.log('El color es  3'+ coche_tres.getColor());
// coche_dos.setColor("Azul");
// coche_tres.setColor("verde");

