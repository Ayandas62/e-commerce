import { Link } from 'react-router-dom';
import './Item.css'

const Item = (props)=>{
    return(
            <div className='item'>
                <Link to={`/product/${props.item.id}`}><img onClick={window.scrollTo(0,0)} src={props.item.image} alt="" /></Link>
                <p>{props.item.name}</p>
                <div className='item-price'>
                    <div className='item-price-old'>{props.item.new_price}</div>
                    <div className='item-price-new'><del>{props.item.old_price}</del></div>
                </div>
            </div>
        
    )
};

export default Item