import React from 'react'
import './Popular.css'
import data from '../assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular'>
        <h2>POPULAR IN WOMEN</h2><hr/>
        <div className="popular-items">
            {
                data.map((item,i)=>{
                    return <Item key={i} id={item.id} item={item} />
                })
            }
        </div>
    </div>
  )
}

export default Popular