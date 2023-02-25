import React from 'react'
import MovieCard from './MovieCard'
import MovieList from './MovieList'
import MovieSlider from './MovieSlider'
import '../App.css'

const Home = ({movieLib,Search}) => {
    
  return (
    <>
        <MovieSlider/>
    <h4 style={{color:'white',margin:"20px 0 10px 60px"}}>My List</h4>
    <MovieList Lib={movieLib} Search={Search}/>
    <h4 style={{color:'white',margin:"20px 0 10px 60px"}}>Trending</h4>
    <div className='trendContainer'>
    {movieLib.filter(el => el.name.toUpperCase().includes(Search.toUpperCase())).map((el) => <MovieCard movie={el} />)}
    </div>
    </>
  )
}

export default Home