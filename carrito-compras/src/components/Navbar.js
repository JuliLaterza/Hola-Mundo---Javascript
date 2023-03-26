import { Component } from "react";
import Logo from "./Logo";
import Carro from "./Carro";

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
        const { carro, esCarroVisible, mostrarCarro } = this.props
        return (
            <nav style={styles.navbar}>
                <Logo />
                <Carro 
                    carro={carro}
                    esCarroVisible={esCarroVisible}
                    mostrarCarro={mostrarCarro}
                />
            </nav>
        )
    }
}

export default Navbar