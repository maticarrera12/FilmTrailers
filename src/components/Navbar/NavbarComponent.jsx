import './Navbar.css';

import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import profile_img from '../../assets/profile_img.png';
import { useAuth } from '../../context/AuthContext';
import { useEffect, useRef } from 'react';

const NavbarComponent = () => {
  const { user, logOut } = useAuth();

  const navRef = useRef();

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 100){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
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
        <SearchIcon sx={{ fontSize: 25 }}  alt="Search" className='icons' />
        {user && <p>{user.name}</p>}
        <NotificationsNoneOutlinedIcon alt="Notifications" className='icons' />
        <div className="navbar-profile">
          <img src={profile_img} alt="Profile" className='profile' />
          <ArrowDropDownOutlinedIcon alt="Caret" />
          <div className="dropdown">
            <p onClick={logOut}>Cerrar sesión</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;

