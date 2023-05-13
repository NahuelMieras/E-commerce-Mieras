import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const { agregarProducto } = useContext(CarritoContext);

    const handle = (cantidad) => {
        setAgregarCantidad(cantidad);

        const item = { id, nombre, precio };
        agregarProducto(item, cantidad);
    }
    return (
        <>
            <div className='contenedorItem'>
                <h2 className='prdocutItemDetailTitle'>{nombre}</h2>
                <h3 className='prdocutItemDetailPrice'>${precio}</h3>
                <img src={img} alt={nombre} />
                <div className='contenedorBtnTerminarCompra'>
                    {
                        agregarCantidad > 0 ? (<Link to="/cart" className='btnTerminarCompra'> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={handle} />)
                    }
                </div>
            </div>
        </>
    )
}

export default ItemDetail