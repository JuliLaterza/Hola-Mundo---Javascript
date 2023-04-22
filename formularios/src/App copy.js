import logo from './logo.svg';
import './App.css';

function App() {

  const summit = (e) => {
    e.preventDefault();
    const data = Array.from(new FormData(e.target));
    console.log(Object.fromEntries(data));
  }

  return (
    <form onSubmit={summit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" />
        <label htmlFor='lastName' >Apellido: </label>
        <input type="text" id="lastName" name="lastName" />
        <br/>
        <input type='submit' value='Enviar' />
      </div>
    </form>
  );
}

export default App;
