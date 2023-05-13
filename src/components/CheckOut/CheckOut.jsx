import { useState, useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { db } from '../../services/firebase/config'
import { collection, addDoc } from 'firebase/firestore'
import "./Checkout.css"

const Checkout = () => {
    const { carrito, vaciarCarrito } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!nombre || !telefono || !email || !emailConfirmacion) {
            setError("¡Por favor complete todos los campos!");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("¡Los campos del email no coinciden!");
            return;
        }

        const orden = {
            items: carrito.map((producto) => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
            })),
            total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            telefono,
            email
        };

        addDoc(collection(db, "ordenes"), orden)
            .then((docRef) => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch((error) => {
                console.error("¡Error al crear la órden!", error);
                setError("¡Error al crear la órden, vuelva a intentarlo más tarde!");
            })
    }

    return (
        <div>
            <h2>CHECKOUT</h2>
            <form onSubmit={handleSubmit}>
                {carrito.map((producto) => (
                    <div key={producto.item.id}>
                        <p className='productoCheckout'>
                            {producto.item.nombre} x {producto.cantidad}
                        </p>
                        <p className='precioCheckout'>Precio $: {producto.item.precio} </p>
                        <hr />
                    </div>
                ))
                }
                <hr />
                <div className='contenedorDatosCheckout'>
                    <div className='datosCheckout'>
                        <label htmlFor="">Nombre y Apellido</label>
                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div className='datosCheckout'>
                        <label htmlFor="">Email </label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='datosCheckout'>
                        <label htmlFor="">Confirmar Email</label>
                        <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                    </div>
                    <div className='datosCheckout'>
                        <label htmlFor="">Teléfono</label>
                        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    </div>
                    {error && <p style={{ color: "red" }}> {error} </p>}
                    <button type='submit' className='btnFinalizarCompraCheckout'>Finalizar Compra</button>
                </div>


            </form>
            {
                ordenId && (
                    <strong>¡Gracias por tu compra! Tu número de orden es {ordenId} </strong>
                )
            }

        </div>
    )
}

export default Checkout