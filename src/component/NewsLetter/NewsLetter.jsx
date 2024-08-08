import React from 'react'
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get exclusive offer on your Email</h1>
        <p>Subscribe to our newsletter  and stay updated</p>
        <div>
            <input type="email" placeholder='xyz@gmail.com' name="" id="" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter