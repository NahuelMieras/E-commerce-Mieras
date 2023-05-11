import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img }) => {

    return (
        <div className='cardProducto'>
            <p className='productItem'>{nombre} </p>
            <p className='productItem'>${precio} </p>
            <img className='imgProducto' src={img} alt={nombre} />
            <Link to={`/item/${id}`} className='btnDetalles'> Ver Detalles </Link>
        </div>
    )
}

export default Item