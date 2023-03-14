import { Component } from "react" //Obligatorio

class Button extends Component {
    constructor(props) {
        super(props) //Super hace referencia al componente de Components
        console.log('Constructor',props)
    }

    componentDidMount() {
        console.log('ComponentDidMount')
    }

    componentDidUpdate(prevProps,prevState) {
        console.log('componentDidUpdate',prevProps,prevState)
    } //Solo se ejecuta cuando actualizamos un estado.

    componentWillUnmount() {
        console.log('desmontando el componente', this.props,this.state)
    }

    render () {
        console.log('Ejecutando método render de Button')
        return (
            <button onClick={()=> this.setState({ prop:1 })}>
                Enviar 2.0
            </button>
        )
    }
}



class App extends Component {

    state = {
        valor:3
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <p>Hola Mundo!</p>
                {this.state.valor ===3 ?<Button chanchito='feliz'/>: null}
                <button
                className={`${this.state.valor}`} 
                onClick={()=> this.setState({ valor:2 })} >
                    Enviar
                </button>
            </div>
        )
    }
}



export default App