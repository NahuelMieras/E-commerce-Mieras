const productos = [
    { id: "6", idCat:"1", nombre: "Remera roja Nike", precio: 350, stock: 8, img: "../img/remera-roja-nike.png" },
    { id: "5", idCat:"1", nombre: "Remera blanca Nike", precio: 350, stock: 15, img: "../img/remera-blanca-nike.png" },
    { id: "3", idCat:"2", nombre: "Pantalon gris Adidas", precio: 350, stock: 2, img: "../img/pantalon-gris-adidas.png" },
    { id: "4", idCat:"2", nombre: "Pantalon negro Adidas", precio: 350, stock: 10, img: "../img/pantalon-negro-adidas.png" },
    { id: "1", idCat:"3", nombre: "Gorra Adidas", precio: 350, stock: 3, img: "../img/gorra-negra-adidas.png" },
    { id: "2", idCat:"3", nombre: "Gorra negra", precio: 350, stock: 5, img: "../img/gorra-negra-sin-estampa.png" },

]

export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve(productos)  
        }, 100);
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto)
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve (productosCategoria);
        }, 100);
    })
}