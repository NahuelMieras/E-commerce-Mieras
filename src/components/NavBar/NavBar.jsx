import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'


const NavBar = () => {
  const imgBadalu = "https://babalufashion.com/pub/media/logo/stores/1/logo-babalu-com-co.png"

  return (
    <header>
      <Link to={"/"}>
        <img className='imgBadalu' src={imgBadalu} alt='Logo Badalú' />
      </Link>

      <ul>
        <li> <NavLink to={`/categoria/1`}>Remeras</NavLink></li>
        <li> <NavLink to={`/categoria/2`}>Pantalones</NavLink></li>
        <li> <NavLink to={`/categoria/3`}>Accesorios</NavLink></li>
      </ul>

      <CartWidget />

    </header>
  )
}

export default NavBar