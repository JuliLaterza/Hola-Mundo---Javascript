import './Button.css'

const Button = (props) => {
    return (
        <button {...props} className="btn">Enviar</button>
    )
}
//Con el spread operator, se le pasan todas las propiedades que se le pasan al componente Button
// Por lo tanto funciona el "OnClic"
export default Button