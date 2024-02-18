import React from "react";
import { Navbar } from "./Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
export const Home = () => {
  return (
    <>
      <Navbar></Navbar>
       <div className=' d-flex'>
          <img alt="Random" src="https://source.unsplash.com/random/1920×1080/?nature,mountains,forest"></img>
        </div>
      </>
  );
};
