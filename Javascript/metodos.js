const arr = [1,2,3,4,5,6]

const r = arr.filter((el,i) => {
    console.log(i)
    return el % 2 === 0
})

//console.log(r)

//const mapped = arr.map((el) =>  `<h1>${el}</h1>`)

//console.log(mapped)

const users = [
    {id:1, name: 'Jorge'},
    {id:2, name: 'Juan'},
    {id:3, name: 'Pedro'},
    {id:4, name: 'Maria'},
    {id:5, name: 'Jose'},
]

const mapped = users.map((el) => `<h1>${el.name}</h1>`)
//console.log(mapped)

//const r1 = arr.reduce((acc, el) => acc + el, 0)
//console.log(r1)

const r2 = users.reduce((acc, el) => {
    if (el.id < 2){
        return acc
    }
    return acc.concat(el)
}, [])

console.log(r2)