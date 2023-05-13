import './Cart.css'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import CartItem from "../CartiItem/CartItem"

const Cart = () => {
    const { carrito, vaciarCarrito } = useContext(CarritoContext);
    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0)
    const total = carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0)

    if (totalCantidad === 0) {
        return (
            <>
                <h2 className='contenederSinProductos'>No hay productos en el carrito</h2>
                <Link to="/" className='btnProductos'>Productos</Link>

            </>
        )
    }

    return (
        <div>
            <h2>MI CARRITO</h2>
            <div className='contenedorCart'>
                <div className='contenedorCartProducto'>
                    <div className='cartProducto'>
                        {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
                    </div>
                    <h3 className='cartProductoTotal'>Total: ${total}</h3>
                </div>
                <div className='contenedorCartBtns'>
                    <button onClick={() => vaciarCarrito()}> Vaciar Carrito</button>
                    <Link to={"/checkout"} className="btnFinalizarCompra"> Finalizar compra</Link>
                </div>
            </div>
        </div>
    )

}

export default Cart