import React, { useEffect } from 'react'
import './payment.css';
import {getBasketTotal} from './reducer'
import {useStateValue} from './StateProvider'
import CurrencyFormat from 'react-currency-format';
import {CardElement , useStripe , useElements} from 'stripe/react-stripe-js';



function Payment() {
    const [{basket}, dispatch] = useStateValue();
    const stripe= useStrip();
    const elements = useElements();
    const [succeeded , setSucceeded] = useState(false);
    const [processing,setProcessing] = useState('');
    const [error, setError] = useState(null);
    const [disable, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() =>{
    
        const getClientSecret = async ()=>{
            const response = await axios({
                method : 'post',
                //Stripe expects the total in a currencies  subunits
                url : `/payment/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
         getClientSecret();
    },[basket])

    const handleSubmit = async(event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret,{
        payment_method : {
            card : elements.getElement(CardElement)
        }
    }).then(({paymentIntent}) =>{
    //paymentIntent = payment confirmation
    setSucceeded(true);
    setError(null);
    setProcessing(false)

    history.replaceState('/orders')
    })
    }
    const handleChange = event => {
    
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '')
    }
  return (
    <div className='payment'>
    <div className='payment_container'>
        <h1>
            Checkout (
                <Link to='/checkout'>{basket?.length}items</Link>
            )
        </h1>
    <div className='payment_section'>
    <div className='payment_title'>
        <h3>Delivery Address</h3>
        </div> 
        <div className='payment_address'>
            <p>{user?.email}</p>
        </div>
    </div>
    <div className='payment_section'></div>
    <div className='payment_title'>
       <h3>Review Item and delivery</h3>
    </div>
    <div className='payment_items'>
        {basket.map(item =>{
        <CheckoutProduct
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating}
        />
        })}
    </div>
    <div className='payment_section'>
        <div className='payment_title'>
            <h3>Payment Method</h3>
        </div>
        <div className='payment_details'>
            <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange}/>

                <div className='payment_priceContainer'>
                <CurrencyFormat
    
    renderText={(value) => ( 
     <h3>Order Total : {value}</h3>
    )}
     decimalScale={2}
     value={getBasketTotal(basket)}
     displayType={'text'}
     thousandSeparatpr={true}
     prefix={'$'}
    />
    <button disabled={processing || disabled || 
    succeeded}>
        <span>{processing? <p>processing</p> :
        'Buy Now'}</span>
    </button>
                </div>
            </form>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Payment