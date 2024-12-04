import NavbarComponent from '../../components/Navbar/NavbarComponent'
import './Home.css'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import TitleCardsComponent from '../../components/TitleCards/TitleCardsComponent'
import Footer from '../../components/Footer/Footer'

const HomePage = () => {
  return (
    <div className="home">
      <NavbarComponent/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>Discovering his ties to a secret ancient order, a young man living in modern Instanbul embarks on a quest to save the city from an inmortal enemy.</p>
          <div className="hero-btns">
            <button className='btn'><PlayArrowIcon alt="" />Ver</button> 
            <button className='btn dark-btn'><ErrorOutlineIcon sx={{ transform: 'rotate(180deg)'}} alt="" />Mas Informacion</button> 
          </div>
          <TitleCardsComponent/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCardsComponent title={"Peliculas BlockBuster"} category={"top_rated"}/>
        <TitleCardsComponent title={"Solo Aqui"} category={"popular"}/>
        <TitleCardsComponent title={"Proximamente"} category={"upcoming"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage