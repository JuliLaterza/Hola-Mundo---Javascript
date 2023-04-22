import logo from './logo.svg';
import { useRef } from 'react';


function App() {
  const input = useRef(); //Esto es un Hook, crear una referencia por cada campo que tiene nuestro formulario
  const file = useRef();
  
  const summit = (e) => {

    const data = new FormData();
    data.append('campo', input.current.value);
    data.append('file', file.current.files[0]);
    console.log(data.get('campo'));
    console.log(data.get('file'));
    console.log(data);
    fetch('/lala', {method: 'POST', body: data})
  }

  return (
    <div>
      <div>
        <span> Lala </span>
        <input type='text' name="nombre" ref={input}/>
        <input type='file' name="file" ref={file}/>

      </div>
      <input type='summit' value='Enviar' onClick={summit}/>
    </div>
  )
}

export default App;
