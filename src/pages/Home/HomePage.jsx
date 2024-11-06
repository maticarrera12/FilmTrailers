import NavbarComponent from '../../components/Navbar/NavbarComponent'
import './Home.css'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
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
            <button className='btn'><img src={play_icon} alt="" />Ver</button> 
            <button className='btn dark-btn'><img src={info_icon} alt="" />Mas Informacion</button> 
          </div>
          <TitleCardsComponent/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCardsComponent title={"Peliculas BlockBuster"} category={"top_rated"}/>
        <TitleCardsComponent title={"Solo en Netflix"} category={"popular"}/>
        <TitleCardsComponent title={"Proximamente"} category={"upcoming"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage