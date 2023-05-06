import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{basket, user},dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout_left'>
          <img className='checkout_ad '/>
      </div>
       <div className='checkout_title'>
        <h3> youre checkout basket</h3>
       </div>
       {/* <div className='checkout_right'>
       </div> */}<h3>hello , {user?.email}</h3>
       <h2 className='checkout_title'>the subtoutale will be here</h2>
    {basket.map(item => (
      <CheckoutProduct
      id={item.id}
      title={item.title}
      image = {item.image}
      price={item.price}
      rating={item.rating}
      />
    ))}
    </div>
  )
}

export default Checkout