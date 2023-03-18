import { Component } from 'react';


class App extends Component { 

  state = {
    productos: [
      {name: 'tomate', price: 1000, img: '/productos/tomate.jpg'},
      {name: 'tomate', price: 2000, img: '/productos/lechuga.jpg'},
      {name: 'tomate', price: 150, img: '/productos/arbejas'},
    ]
  }

  render(){
    return (
      <div>
        <p>
          Hola mundo
        </p>
      </div>
    )
  }
  
}


export default App;
