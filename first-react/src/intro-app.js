import logo from './logo.svg';
//import './App.css';
import './main.css'

const estilo = {
  backgroundColor: '#456',
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px',
}


const Li = ( {children} ) =>{
  return (
    <li className='clase-li' >{ children }</li>
  )
}


const App = () => {
  const valor = 'triste'
  return (
    <ul className='clase-css'>
      <Li estado = "feliz"> valor de li</Li>

    </ul>
  );
}

export default App;
