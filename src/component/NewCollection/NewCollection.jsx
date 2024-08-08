import React from 'react'
import collection from '../assets/new_collections'
import Item from '../Item/Item'
import './NewCollection.css'

const NewCollection = () => {
  return (
    <div className='newcollection'>
        <h1>NEW COLLECTION</h1><hr/>
        <div className="collection">
            {
                collection.map((item,i)=>{
                    return <Item item={item} key={i}/>
                })
            }
        </div>
    </div>
  )
}

export default NewCollection