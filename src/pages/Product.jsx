import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../component/Breadcrum/Breadcrum";
import { useContext } from "react";
import ProductItem from "../component/ProductItem/ProductItem";
import Description from "../component/Description/Description";
import RelatedProduct from "../component/RelatedProduct/RelatedProduct";

const Product = ()=>{
    const {all_product} = useContext(ShopContext)
    const{productId} = useParams();
    const product = all_product.find((e)=>e.id === Number(productId));
    return(
        <div>
            <Breadcrum product={product} /> 
            <ProductItem product={product}/>
            <Description />
            <RelatedProduct/>
        </div>
    )
};

export default Product;