// Hay distintas formas de llamar a una clase:
// Esto es uan EXPRESIÓN De clases
//const R = class Nombre_clase {
//    constructor(){
//        console.log("Hola");
//    }
//};
//const r = new R();
//console.log(r); Si yo pido que haga un console.log de la constante me va a mostrar el nombre de la class.


//  O la siguiente forma. Esta forma es una DEFINICIÓN de clase
// A gran diferencia de las EXPRESIONES es que las class no tienen HOISTING (agregar al principio del código las VAR o CONST)

class Pepe {
    estado = 'feliz'
    idioma = 'Español'
    constructor(estado = 'feliz'){
        console.log(`Es una persona ${estado}`);
    }

    hablar(){
        console.log(`Esta persona habla ${this.idioma}`)
    }
};

// para ejecutar o crear una instancia de la clase hay que realizar lo siguiente.

const humano = new Pepe("feliz");
humano.hablar();
console.log(humano);
//console.log(humano.__proto__);