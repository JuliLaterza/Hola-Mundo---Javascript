// Las funciones en JAVASCRIPT también pueden ser CLASES ya que pueden utilizar la palabra THIS dentro. (clases basadas en prototipos)

function fn(){
    return 'Chanchito Feliz'
}

const r = fn();

console.log(r);


// fat arrow function --> Funciones con =>

// A gran diferencia de FT arrow function con function es que no pueden usar la palabra NEW delante.
// Ya que no son CONSTRUCTORES.

const funA = () => { // NO EXISTEN LOS THIS
    return 'Esto es una arrow function';
}
const a = funA();
console.log(a);


// Las FT arrow function también tienen un Return Implícito y depende el  contexto, no hace falta agregar llaves. EJEMPLO:

const funB = () => 3

console.log(funB()); // el Output es 3.