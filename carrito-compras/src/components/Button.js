import { Component } from "react";


const styles = {
    button: {
        backgroundColor: '#1ABC9C',
        color: '#fff',
        border: 'none',
        padding: '10px 15px',
        borderRadius: '5px',
        cursor: 'pointer',
    }
}


class Button extends Component {
    render() {
        return (
            <button {...this.props} style={styles.button}/>
        )
    }
}

export default Button