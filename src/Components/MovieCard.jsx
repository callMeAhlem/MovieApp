import React from 'react'
import '../App.css'
import ReactStars from 'react-stars'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => { 
  return (
    <Link to="/movie/detail" state={movie}>
    <div className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 overflow-hidden	'>
        <img className=' titleCard rounded-md' src={movie.url} alt="" />
        <ReactStars 
          className='stars'
          edit={false}
          count={5}
          value={parseFloat(movie.rating)}
          color2={'#ffd700'}/>
         
    </div>
    </Link>
  )
}

export default MovieCard