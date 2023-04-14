import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
      <Link to={'/'}><img src="/name-netflix.png" alt="netflix logo name" /></Link>
      <ul className='ul1'>
        <li><Link to={'/'}>Inicio</Link></li>
        <li><Link to={'/Series'}>Series</Link></li>
        <li><Link to={'/Peliculas'}>Peliculas</Link></li>
        <li><Link to={'/Novedades'}>Novedades populares</Link></li>
        <li><Link to={'/Lista'}>Mi lista</Link></li>
      </ul>
      <ul className='ul2'>
        <li>Buscar</li>
        <li>Notificaciones</li>
        <li>Perfil</li>
      </ul>

    </nav>
  )
}

export default Navbar;