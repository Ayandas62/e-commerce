import { createContext, useState } from "react";
import all_product from '../component/assets/all_product'


export const ShopContext = createContext(null);

getDefaultCart()
console.log(all_product.length)

function getDefaultCart(){
    const cart={}
    for(let i = 0; i<all_product.length; i++){
        cart[i]=0;
    }
    return cart
}
let cartCount = 0;


const ShopContextProvider = (props)=>{

    const [cartItem,setCartItem] = useState(getDefaultCart())
    console.log(cartItem)
    

    const addToCart = (itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        cartCount += 1;
        console.log(cartCount);
    }
    const removeFromCart = (itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        cartCount -= 1;
    }


    const contextValue = {all_product,cartItem,addToCart,removeFromCart,cartCount}

    return<ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
}

export default ShopContextProvider;