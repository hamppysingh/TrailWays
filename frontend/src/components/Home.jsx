import React from 'react'
import { Navbar } from './Navbar'
import { Carousel } from './Carousel'
import "./Home.css";
export const Home = () => {
  return (
    <>
        <Navbar></Navbar>
        <Carousel></Carousel>
        <div className=' d-flex'>
          <img alt="Random" src="https://source.unsplash.com/random/1920×1080/?nature,mountains,forest"></img>
        </div>
    </>
  )
}
