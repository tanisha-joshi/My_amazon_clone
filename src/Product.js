import React from 'react'
import './Product.css'
import {useStateValue} from './StateProvider'

function Product({id,title,image,price,rating}) {  
  const [{basket},dispatch]=useStateValue();
  const addToBasket=() =>{
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:"2",
      }

    });
  };

  return (
    <div className="product">
        <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
                {Array(rating)
                .fill()
                .map(() => (
                  <p>*</p>
                ))}
            </div>
        </div>
        <img src={image} className="product_image"></img>
        <button className="addToCart_btn" onClick={addToBasket}>Add to cart</button>
    </div>
  )
}

export default Product