import React from 'react'
import '../App.css'
import ReactStars from 'react-stars'

const MovieCard = ({ movie }) => { 
  return (
    <div className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 overflow-hidden	'>
        <img className=' titleCard rounded-md' src={movie.url} alt="" />
        <ReactStars 
          className='stars'
          edit={false}
          count={5}
          value={parseInt(movie.rating)}
          color2={'#ffd700'}/>
         
    </div>
  )
}

export default MovieCard