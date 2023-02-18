const rest = (a,...argumentos) => {
    console.log(a)
    console.log(argumentos)
}

rest(1,2,3)

const obj = {
    a:1,
    b:1,
    c:1,
    d:1
}

const { a,b,...restobj } = obj

//console.log(a,b,restobj)


const useState = () => ['valor', ()=> {}]

const [valor, setValor] = useState()

console.log(valor, setValor)