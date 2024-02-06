import React from 'react';
import "./Carousel.css";

export const Carousel = () => {
    return (
      <>
        <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">
  <div className="carousel-inner ">
    <div className="carousel-item active">
      <img src="https://www.tourism-of-india.com/blog/wp-content/uploads/2017/06/Treks-in-india.jpg" className="" alt="..."/>
    </div>
    {/* <div className="carousel-item">
      <img src="https://www.treebo.com/blog/wp-content/uploads/2018/07/Trekking-Options-in-South-India.jpg" className="d-block" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.tourism-of-india.com/blog/wp-content/uploads/2017/06/Treks-in-india.jpg" className="d-block" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.treebo.com/blog/wp-content/uploads/2018/07/Trekking-Options-in-South-India.jpg" className="d-block" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.tourism-of-india.com/blog/wp-content/uploads/2017/06/Treks-in-india.jpg" className="d-block" alt="..."/>
    </div> */}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>
    )
}