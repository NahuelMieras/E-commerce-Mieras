import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const IteamDetail = ({ id, nombre, precio, img, stock }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const handle = (cantidad) => {
        setAgregarCantidad(cantidad);
        console.log("Productos agregagos: " + cantidad);
    }
    return (
        <div className='contenedorItem'>
            <h2>Nombre: {nombre}</h2>
            <h3>Precio: {precio}</h3>
            <h3>ID: {id}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia numquam vitae nostrum quas assumenda accusamus quaerat optio debitis doloribus quasi dolorem, ipsa inventore dolore exercitationem, labore adipisci, fugiat in impedit?</p>
            <img src={img} alt={nombre} />
            {
                agregarCantidad > 0 ? (<Link to={"/cart"}> Terminar compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={handle} />)
            }
        </div>
    )
}

export default IteamDetail