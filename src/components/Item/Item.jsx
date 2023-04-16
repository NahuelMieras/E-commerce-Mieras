import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img }) => {

    return (
        <div className='cardProducto'>
            <p className='productItem'>ID: {id} </p>
            <p className='productItem'>NOMBRE: {nombre} </p>
            <p className='productItem'>PRECIO: ${precio} </p>
            <img className='imgProducto' src={img} alt={nombre} />
            <Link to={`/item/${id}`} className='btnDetalles'> Ver Detalles </Link>
        </div>
    )
}

export default Item