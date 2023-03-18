import { Component } from "react"
import Producto from "./Productos"
import Button from "./Button"

const styles = {
    productos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    producto: {
        border: '1px solid #eee',
        boxShadow: '0 5px 5px rgba(0,0,0,0.1)',
        width: '30%',
        padding: '10px 15px',
        borderRadius: '5px',
    },
    img:{
        width: '80%',
    }

}

class Productos extends Component { //Con este componente se renderizan los productos 1 x 1 en un DIV.
    render() {
        const { productos, agregarAlCarrito } = this.props
        
        return (
            <div style={styles.productos}>
                {productos.map((product) => (
                    <div key={product.name} style={styles.producto}>
                        <img src={product.img} alt={product.name} style={styles.img}/>
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                        <Button
                            onClick={() => agregarAlCarrito(product)}
                        >
                            Agregar al carrito
                        </Button>
                    </div>
                ))}
            </div>
        )
    }
}

export default Productos