import React from 'react';
import './Breadcrum.css'
import arrow from '../assets/breadcrum_arrow.png'
import { Link } from 'react-router-dom';

const Breadcrum = (props) => {
    const {product} = props ;
  return (
    <div className='breadcrum'>
        <Link style={{textDecoration:'none'}} to='/'>HOME</Link> <img src={arrow} alt="" /> SHOP <img src={arrow} alt="" /><Link style={{textDecoration:'none'}} > {product.category} </Link> <img src={arrow} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum