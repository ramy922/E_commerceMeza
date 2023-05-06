import './Product.css';


import React from 'react'


export default function Product({title , image , price , rating}) {

const [{basket},dispatch] =useStateValue();

console.log(basket)
  const addToBasket = () => {
      //dispatch the item into the data layer
      dispatch({
        type: 'ADD_TO_BASKET',
        item:{
          id:id,
          title : title,
          image : image,
          price:price,
          rating: rating,
        },

      });
  };

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

  return (
    <div className='product'>
        <div className='product_info'>
            <p>{title}</p>
            <div className='product_price'>

                <small>$</small>
                <strong>{price}</strong>

                <div className='product_rating'>
                  {Array(rating)
                  .fill()
                  .map((_,i)=>(
                      <p><span class="fa fa-star checked"></span></p>
                  ))}
                </div>
            </div>
        </div>
        <image>

        </image>
        <button onClick={addToBasket}>add to basket</button>
        Product</div>
  )
}
