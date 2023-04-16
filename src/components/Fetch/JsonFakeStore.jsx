// import { useState, useEffect } from "react"
// import './Fetch.css'

// const JsonFakeStore = () => {
//   const [productos, setProductos] = useState([]);

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(res => res.json())
//       .then(data => setProductos(data))
//       .catch(error => console.log(error))
//   }, [])


//   return (
//     <div>
//       <h2>Productos </h2>
//       <section className="products">
//         {
//           productos.map(producto => {
//             return (
//               <div className="product" key={producto.id}>
//                 <div className="product-item">Product N°: {producto.id}</div>
//                 <div className="product-item"> {producto.title}</div>
//                 <div className="product-item"> $ {producto.price}</div>
//                 <div className="product-item"> Category {producto.category}</div>
//                 <div className="product-item"> Detail: {producto.description}</div>
//                 <div className="product-item"><img src={producto.image} alt={producto.title} /></div>
//               </div>
//             )
//           })
//         }
//       </section>
//     </div>
//   )
// }

// export default JsonFakeStore