import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({ productos }) => {
    return (
        <div className="wrapperProductos">
            <div className="wrapProductos">
                {
                    productos.map(prod => {
                        return <Item key={prod.id}  {...prod} />
                    })
                }
            </div>
        </div>

    )
}

export default ItemList