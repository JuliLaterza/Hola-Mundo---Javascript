import { useRef } from 'react'

const App = () => {
    const ref = useRef();
    const inputRef = useRef();
    const click = () => {
        console.log(ref.current)
        ref.current.style.color = 'red';
        ref.current.innerHTML = 'hola';
    }

    const focus = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <input ref={inputRef} />
            <button onClick={focus} >Focus</button>
            <div onClick={click} ref={ref} >
                pruebita
            </div>
        </div>
    )
}

export default App;