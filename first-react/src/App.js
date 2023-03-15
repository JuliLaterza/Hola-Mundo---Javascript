import { Component } from "react" //Obligatorio


/*
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
*/

//Creamos otras clases para seguir con el ejercicio.

class Input extends Component {
    
    render() {
        return(
            <input
                value={this.props.value} //Acá se guardan los valores y con el OnChange se actualizan.
                onChange={this.props.onChange} //Acá obtenemos los valores del input.
            />
            
        )
    }
}


class App extends Component{

    state = {
        nombre: '',
        apellido: ''
    }

    updateValues = (props,values) =>{
        this.setState({[props]:values})
    }
    render() {
        return (
            <div>
                <p>Nombre completo: {`${this.state.nombre}`} {`${this.state.apellido}`}
                    <Input 
                        value={this.state.nombre}
                        onChange={e => this.updateValues('nombre',e.target.value)}
                    />
                    <Input 
                        value={this.state.apellido}
                        onChange={e => this.updateValues('apellido',e.target.value)}
                    />
                </p>
            </div>
            

        )
    }
}


export default App