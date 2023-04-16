import './ItemCount.css'
import { useState } from "react"

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial)

    const aumentarStock = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };
    const disminuirStock = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    };

    return (
        <div>
            <div className='btnContainer'>
                <button onClick={disminuirStock}>-</button>
                <p> {contador} </p>
                <button onClick={aumentarStock}>+</button>
            </div>
            <button onClick={() => funcionAgregar(contador)}> Agregar al Carrito </button>
        </div>
    )
}

export default ItemCount