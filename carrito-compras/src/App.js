import { Component } from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Title from './components/Title';
import Navbar from './components/Navbar';


class App extends Component { 

  state = {
    productos: [
      {name: 'Tomate', price: 1000, img: '/productos/tomate.jpg'},
      {name: 'Lechuga', price: 2000, img: '/productos/lechuga.jpg'},
      {name: 'Arbeja', price: 150, img: '/productos/arbejas.jpg'},
    ],
    carro: [
      //{name: 'Tomate', price: 1000, img: '/productos/tomate.jpg', cantidad: 1}
    ],
    esCarroVisible: false
  }

  agregarAlCarrito = (producto) => {
    const { carro } = this.state
    if (carro.find((item) => item.name === producto.name)) {
      const newCarro = carro.map(item => item.name == producto.name
        ? ({
          ...item,
          cantidad: item.cantidad + 1
        })
        : item)
      return this.setState({ carro: newCarro})
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1
      })
    })
  }

  mostrarCarro = () => {
    this.setState({ esCarroVisible: !this.state.esCarroVisible })
  }

  render(){
    const {esCarroVisible} = this.state
    return (
      <div>
        <Navbar  
          carro={this.state.carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
            <Title/>
            <Productos
            agregarAlCarrito={this.agregarAlCarrito}
            productos={this.state.productos}
            />
        </Layout>
      </div>
    )
  }
  
}


export default App;
