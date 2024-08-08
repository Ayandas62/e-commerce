import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from '../component/assets/dropdown_icon.png'
import Item from "../component/Item/Item";
import './Css/ShopCategory.css'

const ShopCategory = (props)=>{
    const {all_product} = useContext(ShopContext);
    return(
        <div className="shop-category">
            <img className="shop-banner" src={props.banner} alt="" />
            <div className="shop-category-indexshort">
                <p>
                    <span>Showing 1-12</span>out of 36 product
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-product">
                {all_product.map((product,i)=>{
                    if(product.category === props.category){
                       return <Item key={i} item={product} />
                    }else{
                        return null
                    }
                })}
            </div>
                <div className="load-more">Explore More</div>
        </div>
    )
};

export default ShopCategory