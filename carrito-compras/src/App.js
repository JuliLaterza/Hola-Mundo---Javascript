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
    ]
  }

  render(){
    return (
      <div>
        <Navbar/>
        <Layout>
            <Title/>
            <Productos
            agregarAlCarrito={()=> console.log('agregando al carrito')}
            productos={this.state.productos}
            />
        </Layout>
      </div>
    )
  }
  
}


export default App;
