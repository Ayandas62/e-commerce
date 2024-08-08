import React, { useContext } from 'react'
import './CartItem.css';
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png';

const CartItem = () => {
    const {all_product,cartItem,removeFromCart} = useContext(ShopContext)
  return (
    <div className='CartItem'>
        <div className="cartitem-format-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div><hr/>
        {all_product.map((e)=>{
            if(cartItem[e.id]>0){
                return (
            <div className="">
                <div className="cartitem-format cartitem-format-main">
                    <img src={e.image} alt="" className='carticon-product-icon' />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitem-quantity'>{cartItem[e.id]}</button>
                    <p>${e.new_price*cartItem[e.id]}</p>
                    <img className='cartitem-remove' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                </div>
                <hr/>
            </div>
                )
            }return null;
        })}
        <div className="cartitem-down">
            <div className="cartitem-total">
                <h1>Carts Total</h1>
                <div className="">
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${0}</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <p>Shipping Charge</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${0}</h3>
                    </div>
                </div>
                <button>Proced to checkout</button>
            </div>
            <div className="cartitem-promocode">
                <p>If you have promo code, Enter it here</p>
                <div className="cartitem-promobox">
                    <input type="text" name="" placeholder='Promo code' id="" />
                    <button>Verify</button>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default CartItem