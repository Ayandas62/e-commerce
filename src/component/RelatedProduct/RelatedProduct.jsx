import React from 'react';
import './RelatedProduct.css';
import data from '../assets/data'
import Item from '../Item/Item';

const RelatedProduct = () => {
  return (
    <div className='RelatedProduct'>
        <h1>Related Product</h1><hr/>
        <div className="relatedproduct-item">
            {
                data.map((item,i)=>{
                    return <Item item={item} key={i}/>
                })
            }
        </div>
    </div>
  )
}

export default RelatedProduct