import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
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