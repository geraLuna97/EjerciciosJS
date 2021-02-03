// switch


var edad = 1;
var imprime = "";

switch(edad){
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
    break;
    case 25:
        imprime = "Ya eres adulto";
    case 40:
        imprime = "Crisis de los cuarenta";
    break;
    case 75:
        imprime = "Eres anciano";
    break; 
    default:
        imprime = "Tu eded es neutra";
    break;  
}
console.log(imprime);





