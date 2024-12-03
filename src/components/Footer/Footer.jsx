import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <a href=""><GitHubIcon sx={{fontSize:40, color: 'inherit'}}/></a>
        <a href=""><LinkedInIcon sx={{fontSize:40}}/></a>
      </div>
      <ul>
        <li>Descripcion del Audio</li>
        <li>Centro de Ayuda</li>
        <li>Media Centre</li>
        <li>Trabajos</li>
        <li>Terminos de Uso</li>
        <li>Privacidad</li>
        <li>Preferencia de Cookies</li>
        <li>Informacion Corporativa</li>
        <li>Contactanos</li>
      </ul>
      <p className='copyright-text'>©2024 Matias Carrera.</p>
    </div>
  )
}

export default Footer