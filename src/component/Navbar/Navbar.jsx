import './Navbar.css';
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';


const Navbar = ()=>{

    const [menu,setMenu] = useState("menu")
    const{cartCount} = useContext(ShopContext);

    return(
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='Nav-img'/>
                <p>Shopper</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu("menu")}}><Link style={{textDecoration:'none'}} to="/">Menu</Link>{menu==="menu"&&<hr/>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to="/mens">Men</Link>{menu==="mens"&&<hr/>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to="/womens">Women</Link>{menu==="womens"&&<hr/>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to="/kids">Kids</Link>{menu==="kids"&&<hr/>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'> <button className='btn'>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt='Cart-img'/></Link>
                <div className='nav-cart-count'>{cartCount}</div>
            </div>
        </div>
    )
};

export default Navbar