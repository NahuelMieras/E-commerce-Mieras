import React from 'react'
import { useRef } from 'react'
import './CartWidget.css'

const CartWidget = () => {

    const cartCount = useRef(0);

    function cartAdd() {
        cartCount.current = cartCount.current + 1;
        console.log(cartCount.current)
    }

    const imgCarrito = 'https://cdn-icons-png.flaticon.com/512/107/107831.png'
    return (
        <div className='carrito'>
            <img className='imgCarrito' src={imgCarrito} alt="carrito de compra" />
            <strong onClick={cartAdd}>{cartCount.current}</strong>
        </div>
    )
}

export default CartWidget