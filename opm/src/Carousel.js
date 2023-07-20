import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Medicine from './logo.svg';
import meds from './meds.jpg' ;
function DemoCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{paddingTop:'50px'}}>
      <Carousel.Item>
        <img
        width={1000} height={450}
          className="d-block w-100"
          // src="https://i1.adis.ws/i/arnotts/cat-beauty-clarins-gift-2101?unsharp=0,1,1,8&qlt=100&$poi$&w=1440&sm=aspect&aspect=144:50"
          src="https://th.bing.com/th/id/R.824becb2662af03c95d635006eca8b5c?rik=FMxKYiKqKzaqmQ&riu=http%3a%2f%2fwww.legendcarepharmacy.com%2fassets%2fimg%2fcarousel-1.png&ehk=5lGa7IH90%2baKoctiu%2bBpWp7KFGHPto%2ff0iKhl%2bP%2bOvA%3d&risl=&pid=ImgRaw&r=0"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
        width={1000} height={450}
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.3b4c0e230522dccb3149973f1cfb2397?rik=fUzfSLC2Wd0RbA&riu=http%3a%2f%2frsparch.com%2fwp-content%2fuploads%2f2015%2f05%2fWalgreens_Pharmacy_Hero.jpg&ehk=DymjsEhdnjx9SBRr2XgILyFv3UDbZfaWcDmHBRtH%2fWU%3d&risl=&pid=ImgRaw&r=0"
          
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Various products</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
        width={1000} height={450}
          className="d-block w-100"
          src={meds}
          alt="Third slide"
        />

        {/* <Carousel.Caption>
          <h3>24/7 services</h3>
          <p>
            We offer 24/7 services to the customers
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default DemoCarousel;
