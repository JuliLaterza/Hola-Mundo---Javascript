import { Component } from "react";
import Logo from "./Logo";


const styles = {
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px 50px',
        position: 'relative',
        boxShadow: '0 2px 3px rgba(0,0,0,0.1)',
    }
}

class Navbar extends Component {
    render() {
        return (
            <nav style={styles.navbar}>
                <Logo />
                <ul>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        )
    }
}

export default Navbar