import './Navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';
import { useAuth } from '../../context/AuthContext';

const NavbarComponent = () => {
  const { user, logOut } = useAuth();

  console.log(user);

  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>TV</li>
          <li>Movies</li>
          <li>Nuevos</li>
          <li>Mi Lista</li>
          <li>Por Idioma</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="Search" className='icons' />
        {user && <p>{user.name}</p>}
        <img src={bell_icon} alt="Notifications" className='icons' />
        <div className="navbar-profile">
          <img src={profile_img} alt="Profile" className='profile' />
          <img src={caret_icon} alt="Caret" />
          <div className="dropdown">
            <p onClick={logOut}>Cerrar sesión</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;

