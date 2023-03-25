import { Component } from "react";
import BubbleAlert from "./BubbleAlert";

const styles = {
    carro: {
        backgroundColor: '#52cf46',
        color: '#fff',
        border: 'none',
        borderRadius: '15px',
        cursor: 'pointer',
        padding: '10px 15px',
        fontWeight: '700',
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20,
    }
}


class Carro extends Component {
    render() {
        return (
            <div>
                <span style={styles.bubble} >
                    <BubbleAlert value = {1} />
                </span>
                <button style={styles.carro}>
                    Carro
                </button>
            </div>
        )
    }
}

export default Carro