import { Component } from 'react';
import Productos from './components/Productos';

class App extends Component { 

  state = {
    productos: [
      {name: 'tomate', price: 1000, img: '/productos/tomate.jpg'},
      {name: 'lechuga', price: 2000, img: '/productos/lechuga.jpg'},
      {name: 'arbeja', price: 150, img: '/productos/arbejas.jpg'},
    ]
  }

  render(){
    return (
      <div>
        <Productos
        agregarAlCarrito={()=> console.log('agregando al carrito')}
        productos={this.state.productos}
        />
      </div>
    )
  }
  
}


export default App;
