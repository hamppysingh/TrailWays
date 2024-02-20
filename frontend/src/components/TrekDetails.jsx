import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from './Navbar';
import Button from "react-bootstrap/Button";
// import { FetchCardDetails } from './FetchCardDetails';
import data from '../images/images.json';
// import data from '../jsonfiles/trekdetails.json';

export const TrekDetails = () => {
    // const [paragraph, setParagraph] = useState("");
    const { id } = useParams();
    const [cardDetails, setCardDetails] = useState(null);

    useEffect(() => {
        // async function fetchDetails() {
        //   try {
        //     const details = await FetchCardDetails(id);
        //     setCardDetails(details);
        //   } catch (error) {
        //     console.error('Error fetching card details:', error);
        //   }
        // }
    
        // fetchDetails();
        const details = data.find(card => card.id === parseInt(id));
        setCardDetails(details);
      }, [id]);

      if (!cardDetails) {
        return <div>Loading...</div>;
      }

  return (
    <>
        <Navbar/>
        <div>
            <h1 style={{color: "green"}}>Overview</h1>
            <p>{cardDetails.description}</p>
<<<<<<< HEAD
            <Button variant="success"><a href={"/booking/${cardDetails.id}"} style={{color: "white", textDecoration: "none", width:"50px"}}>Book Now</a></Button>
=======
            <Button variant="success">
            <a href={`/trekdetails/booking/${id}`} style={{color: "white", textDecoration: "none", width:"50px"}}>
              Book Now
            </a>
            </Button>
>>>>>>> a133f228c2b1b91ff09427ac27c28f9f4c6f9cf3
        </div>
    </>
  )
}
