import React from 'react';
import './Offer.css';
import exclusive from '../assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className='offer'>
        <div className="offer-left">
            <h1>Exclusive offers for you</h1>
            <p>ONLY THE BEST SELLER PRODUCT</p>
            <button>Check Now</button>
        </div>
        <div className="offer-right">
            <img src={exclusive} alt="" />
        </div>
    </div>
  )
}

export default Offer