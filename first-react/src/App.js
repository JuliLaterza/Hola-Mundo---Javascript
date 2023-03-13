import Button from "./Button"

const App = () => {
    const miVariable = true

    if (miVariable){
        return (
            <p>Mi variable es true</p>
        )
    }

    return (
        <div>
            <h1 onClick={(e) => console.log('clic',e)}>Hola mundo</h1>
            <Button onClick={() => console.log('Se le hizo click')} >Enviar</Button>
            
        </div>
    )
}

export default App