import React from 'react';
import './App.css';
import './Home.css';
import Navbar from './Navbar.js' ;
function Home() {
  return (
    <div>
      <Navbar />
    <div className='home-container'>
      <h1 className='greentext'>P-PHARMA</h1>
      <p className="line1">Elevate your well-being with our Supplements</p>
      <div className="line2">Care that never quits</div><br></br>
      <div className='home-btns'>
      </div>
    </div>
    </div>
  );
}
export default Home;
