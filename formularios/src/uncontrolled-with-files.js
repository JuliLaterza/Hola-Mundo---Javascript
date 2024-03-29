import logo from './logo.svg';
import './App.css';

function App() {
  
  const submit = (e) => {
    e.preventDefault();
    const data =Array.from(new FormData(e.target));
    console.log(Object.fromEntries(data));
  }

  return (
    <form onSubmit={submit}>
      <div>
        <span> Nombre </span>
        <input name='campo' />
      </div>
      <span>Años</span>
      <input name='campo-2' />
      <input type='file' name='archivo' />
      <input type='submit' value='Enviar'/>
    </form>
  )
}

export default App;
