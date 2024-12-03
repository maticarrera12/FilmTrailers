import './Player.css'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';

const PlayerPage = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name:'',
    key:'',
    published_at:'',
    type:''
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTNkYTQ1NDM4MTcyYmRlYjUzMTE1OTc0ZjRlYWQ4MiIsIm5iZiI6MTczMDgyNDUyMC44Njk4NDUyLCJzdWIiOiI2Njg0ODRhYTQ1OTc3ODk2ZGExZjQ0YTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Xc6RARz2gEEPwIMuX2S6XsoqCL2FR5IHrRu6ibjD_Es'
    }
  };
  


    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err));
    }, [])
    
  return (
    <div className='player'>
      <ArrowCircleLeftOutlinedIcon  sx={{ fontSize: 40 }} className='arrow' alt="" onClick={()=>{navigate(-2)}}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen>
      </iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default PlayerPage