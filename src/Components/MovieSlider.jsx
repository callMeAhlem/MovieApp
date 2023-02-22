import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import avatar from './img/avatar.jpg'
import got from './img/got.jpg'
import moana from './img/moana.jpg'
import ph from './img/purpleHearts.jpg'
import aoa from './img/age.jpg'

const MovieSlider = () => {
  return (
  <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel" >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={4} aria-label="Slide 5" />

  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
      <img style={{height:"100vh"}} src={got} className="d-block w-100" alt=""/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img style={{height:"100vh"}} src={avatar} className="d-block w-100" alt=""/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img style={{height:"100vh"}} src={aoa} className="d-block w-100" alt="" />
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img style={{height:"100vh"}} src={moana} className="d-block w-100" alt="" />
    </div>
    <div className="carousel-item" data-bs-interval="2000" >
      <img style={{height:"100vh"}} src={ph} className="d-block w-100" alt="" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

  );
};

export default MovieSlider;
