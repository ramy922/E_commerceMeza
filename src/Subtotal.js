import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import useHistory from 'react-router-dom';
import { getBasketTotal } from './reducer';
function Subtotal() {
    
   const [{basket},dispatch] = useStateValue();
   const history = useHistory();

  return (
    <div className='subtotal'>
    <CurrencyFormat
    
    renderText={(value) => ( 
     <>
       <p>
           {/* Subtotal ({basket.length} items):
           <strong>{`${value}`}</strong> */}
           Subtotal ({basket.length}items):<strong>{value}</strong>
       </p>
       <small className='subtotal_gift'>
           <input type='checkbox' /> this order
           containts a gift
       </small>
     </>
     )}
     decimalScale={2}
     value={getBasketTotal(basket)}
     displayType={'text'}
     thousandSeparatpr={true}
     prefix={'$'}
    />
               <button onClick={e =>history.push('/payment')}> Procced to checkout</button>
    </div>
  )
}

export default Subtotal