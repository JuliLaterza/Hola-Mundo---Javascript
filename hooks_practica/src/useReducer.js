import './App.css';
import { useReducer, useState } from 'react';
import React from 'react';

const inicial = { contador: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case 'incrementar':
            return {contador: state.contador + 1};
        case 'decrementar':
            return {contador: state.contador - 1};
        case 'set':
            return {contador: action.payload};
        default:
            return state;
    }
}

const App = () => {
    const [state, dispatch]  = useReducer(reducer, inicial);
    const [valor, setValor] = useState(0);
    return (
        <div>
            contador: {state.contador}
            <input value={valor} onChange={e => setValor(e.target.value)} />
            <button onClick={() => dispatch({type:'incrementar'})} >Más</button>
            <button onClick={() => dispatch({type:'decrementar'})} >Menos</button>
            <button onClick={() => dispatch({type:'set', payload: valor})} >Reset</button>
        </div>
    )
}
