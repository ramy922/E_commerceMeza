import React from 'react'
import { useStateValue } from './StateProvider';
import './CheckoutProduct.css'
function CheckoutProduct( {id , image , title , price , rating} ) {
const [{basket},dispatch]  = useStateValue()
   const removeFromBasket = () =>{

   }

  return (
    <div className='CheckoutProduct'>
        <img className='CheckoutProduct_image' src={image}/>
    
        <div className='CheckoutProduct_info'>
            <p className='CheckoutProduct_title'>{title}
      <small>$</small>
      <strong>{price}</strong>
      </p> 
       <div className='CheckoutProduct_rating'>
           {Array(rating)
           .fill()
           .map((_,i)=>
           <p>*</p>)}
       </div>
       <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
        
        </div>
  )
}

export default CheckoutProduct