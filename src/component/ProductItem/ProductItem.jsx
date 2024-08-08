import React, { useContext } from 'react';
import './ProductItem.css';
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png'; 
import { ShopContext } from '../../context/ShopContext';


const ProductItem = (props) => {
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productitem'>
        {console.log(props.product)}
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={props.product.image} alt="imgs" />
                <img src={props.product.image} alt="imgs" />
                <img src={props.product.image} alt="imgs" />
                <img src={props.product.image} alt="imgs" />
            </div>
            <div className="productdisplay-image">
            <img className='productdisplay-main-img' src={props.product.image} alt="imgs" /> 
            </div>
        </div>
        <div className='productdisplay-right'>
            <h1>{props.product.name}</h1>
            <div className="productdisplay-right-start">
                <img src={star_icon} alt="star" />
                <img src={star_icon} alt="star" />
                <img src={star_icon} alt="star" />
                <img src={star_icon} alt="star" />
                <img src={star_dull_icon} alt="star" />
                <p>(152)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className='price-old'>
                    ${props.product.old_price}
                </div>
                <div className="price-new">
                    ${props.product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam accusantium sunt cupiditate voluptatibus nam earum placeat perferendis! Ea, commodi vitae facilis dignissimos architecto vel aperiam consequuntur dolorum autem ipsam? Sequi!
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-size-list">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(props.product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'>
                <span>Category :</span>Woman, T-shirt, Crop Top
            </p>
            <p className='productdisplay-right-category'>
                <span>Tags :</span>Morden, Latest
            </p>
        </div>
    </div>
  )
}

export default ProductItem