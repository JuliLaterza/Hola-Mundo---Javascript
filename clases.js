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
    static banco = 42
    constructor(estado = 'feliz'){
        console.log(`Es una persona ${estado}`);
    }

    hablar(){
        console.log(`Esta persona habla ${this.idioma}`)
    }
    static banco(){
        console.log(this.banco);
    }
};

// para ejecutar o crear una instancia de la clase hay que realizar lo siguiente.

//const humano = new Pepe("feliz");
//humano.hablar();
//Pepe.banco();
//console.log(humano);
//console.log(humano.__proto__);


class Chancho {
    propiedad = 'Sólido'
    #hambre //Propiedad PRIVADA
    static estatico = 42

    constructor(estado = 'feliz', hambre = false) {
        this.estado = estado
        this.#hambre = hambre

    }
    hablar () {
        console.log(`Soy chancho ${this.estado} ${this.#hambre ? 'con mucha hambre' : 'satisfecho'}`);
    }

    static comer() {
        console.log(this.estatico,'comiendo')
    }
}

Chancho.comer()
const feliz = new Chancho('feliz');