import React from "react";
<<<<<<< HEAD
import { Navbar } from "./Navbar";
import "bootstrap/dist/css/bootstrap.css";
=======
>>>>>>> c8d35bdc674547a27292108cebb0fb481c9a36f5
import "./Home.css";
// import axios from "axios";
import { useState, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import basecamp from "../images/basecamp.jpg";
import basecamp2 from "../images/basecamp2.jpg";
import kalbhairav from "../images/Kalbhairav.jpg";
import { Navbar } from "./Navbar";

export const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("images.json")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.log("Error fetching images: ", error));
  }, []);

  return (
    <>
      <Navbar></Navbar>
<<<<<<< HEAD
       <div className=' d-flex'>
=======
      {/* <Carousel></Carousel> */}
      {/* <div className=' d-flex'>
>>>>>>> c8d35bdc674547a27292108cebb0fb481c9a36f5
          <img alt="Random" src="https://source.unsplash.com/random/1920×1080/?nature,mountains,forest"></img>
        </div> */}
      <div style={{ width: 1518 }}>
        <Carousel>
          <Carousel.Item interval={5000}>
            <img width={"1546"} height={"600"} src={basecamp} alt="Image One" />
            <Carousel.Caption>
              <h1>Winter Special Himalayan Trek</h1>
              <p>Explore the best of North</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              width={"1546"}
              height={"600"}
              src="https://www.treebo.com/blog/wp-content/uploads/2018/07/Trekking-Options-in-South-India.jpg"
              alt="Image Two"
            />
            <Carousel.Caption>
              <h3>Best of Kerala Backpacking</h3>
              <p>Dive into the Bliss of South</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              width={"1546"}
              height={"600"}
              src={basecamp2}
              alt="Image One"
            />
            <Carousel.Caption>
              <h3>Winter Special Himalayan Trek</h3>
              <p>Explore the best of North</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              width={"1546"}
              height={"600"}
              src={kalbhairav}
              alt="Image One"
            />
            <Carousel.Caption>
              <h3>Winter Special Himalayan Trek</h3>
              <p>Explore the best of North</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <h2
        className="section-title-embellishment-star"
        style={{ color: "#333333", margin: "50px 0 50px 500px" }}
      >
        Top Selling Weekend Experiences
        <span className="decor-line">
          <em className="star" style={{ backgroundColor: "#333333" }}>
            <i></i>
          </em>
        </span>
      </h2>
      {/* <Card className="row" style={{ width: "18rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginLeft: "50px"}}>
        <Card.Img variant="top" src={kalbhairav} style={{width: "500px", marginLeft: "-5px"}}/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="success">Go somewhere</Button>
        </Card.Body>
      </Card> */}
      <div className="container">
    <div className="row">
      {images.map(image => (
        <div className="col-md-4" key={image.id}>
          <div className="card">
            <img src={image.imageUrl} className="card-img-top" alt={image.title} />
            <div className="card-body">
              <h5 className="card-title">{image.title}</h5>
              <p className="card-text">{image.description}</p>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </>
=======
      ))}
    </div>
  </div>
    </>
>>>>>>> c8d35bdc674547a27292108cebb0fb481c9a36f5
  );
};
