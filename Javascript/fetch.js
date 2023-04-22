const url = 'https://pokeapi.co/api/v2/pokemon/pikachu'


// Esta funcion recibe 2 parámetros, el primero es la URL y el segundo una función.
// fetch(url, {
//     method: 'POST', //También existe GET, POST, PUT, PATCH, DELETE
//     headers: { //En el header está la información de que es lo que vamos a cargar
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer acasedebeingresarElTokenDeAutorizacion'
//     },
//     body: JSON.stringify({ //Toda la información de JSON a String
//         name: 'Juli',
//         website: 'google.com'
//     })
// }).then((response) => response.json()).then(data => console.log(data))  // Se le debe agregar la función then(data => console.log(data) para visualizar


const fn = async () => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await response.json()
    console.log(data)
    
}

fn()