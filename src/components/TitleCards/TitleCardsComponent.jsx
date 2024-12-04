import './TitleCards.css'
import { useRef, useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const TitleCardsComponent = ({title,category}) => {

  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTNkYTQ1NDM4MTcyYmRlYjUzMTE1OTc0ZjRlYWQ4MiIsIm5iZiI6MTczMDgyNDUyMC44Njk4NDUyLCJzdWIiOiI2Njg0ODRhYTQ1OTc3ODk2ZGExZjQ0YTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Xc6RARz2gEEPwIMuX2S6XsoqCL2FR5IHrRu6ibjD_Es'
    }
  };
  


const handleWheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=es-MX&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
  cardsRef.current.addEventListener('wheel', handleWheel)
},[])

  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular en FilmTrailer"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className='card'key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCardsComponent