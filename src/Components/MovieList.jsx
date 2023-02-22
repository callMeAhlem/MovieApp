import React from 'react'
import MovieCard from './MovieCard'
import '../App.css'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';


const MovieList = ({ Lib, Search }) => {
  const slideLeft = () => {
    var slider = document.getElementById('horSlider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('horSlider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div className='relative flex items-center'>
      <MdChevronLeft className='opacity-50 cursor-pointer hover:fill-red-700	' onClick={slideLeft} size={60} />
      <div id='horSlider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
        {Lib.map((el) => <MovieCard movie={el} />)}
      </div>
      <MdChevronRight className='opacity-50 cursor-pointer hover:fill-red-700' onClick={slideRight} size={60} />
    </div>
  )
}

export default MovieList