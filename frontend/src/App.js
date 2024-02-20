import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home';
<<<<<<< HEAD
import {Price} from './components/Price';
import { Contact } from "./components/Contact";
import { Signup } from "./components/Signup";
import { Trekkersignup } from "./components/Trekkersignup";
import { Guidesignup } from "./components/Guidesignup";
import { Booking } from "./components/Booking";
import { TrekDetails } from "./components/TrekDetails";
// import { Card } from "./components/Card";

function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/price' element={<Price/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/signup/trekker' element={<Trekkersignup/>}/>
         <Route path='/signup/guide' element={<Guidesignup/>}/>
         <Route path='/booking/:id' element={<Booking/>}/>
         <Route path='/trekdetails/:id' element={<TrekDetails/>}/>
         {/* <Route path='/' element={<Card/>}/> */}
       </Routes>
     </BrowserRouter>

     
=======
import { Price } from './components/Price';
import { Contact } from './components/Contact';
import { Signup } from './components/Signup';
import { Trekkersignup } from './components/Trekkersignup';
import { Guidesignup } from './components/Guidesignup';
import { Guidesignin } from './components/Guidesignin';
import { Trekkersignin } from './components/Trekkersignin';
import { TrekDetails } from './components/TrekDetails';
import { AuthProvider } from './Hooks/AuthContext';
import { Booking } from './components/Booking';
import GuideDash from './components/GuideDash';
import TrekkerDash from './components/TrekkerDash';
import SignOut from './components/SignOut';
import { Adminsignin } from './components/Adminsignin';
import AdminDash from './components/AdminDash';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/price" element={<Price />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/trekker" element={<Trekkersignup />} />
          <Route path="/signup/guide" element={<Guidesignup />} />
          <Route path="/Trekkerlogin" element={<Trekkersignin />} />
          <Route path="/trekdetails/:id" element={<TrekDetails />} />
          <Route path="/trekdetails/booking/:id" element={<Booking />} />
          <Route path="/adminlogin" element={<Adminsignin/>}/>
          <Route path="/guidelogin" element={<Guidesignin />} />
          <Route path="/guidedash" element={<GuideDash/>} />
          <Route path="/Trekkerdash" element={<TrekkerDash/>} />
          <Route path="/signout" element={<SignOut/>}/>
          <Route path="/admindash" element={<AdminDash/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
>>>>>>> a133f228c2b1b91ff09427ac27c28f9f4c6f9cf3
  );
}
export default App;