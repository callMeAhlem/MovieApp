import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom'
import '../App.css'

const MovieDetail = () => {
    const location =useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [location]);
    const movie=useLocation().state
  return (
<>
<div class="content">
    <div class="background">
      <div class="left"></div>
      <div class="right" style={{backgroundImage:`url(${movie.url})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}></div>
    </div>
    <div class="content-container"> 
    <h1 style={{margin:"20px"}}>{movie.name.toUpperCase()}</h1>
    
    <p style={{width:"500px"}}>{movie.about}</p>
    <ReactPlayer
                className="miniplayer"
                width={"40%"}
                height={"50%"}
                playing={true}
                loop={true}
                url={movie.trailer}
            />
    </div>
  </div>
</>
    )
}

export default MovieDetail