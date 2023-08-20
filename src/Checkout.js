import React from 'react'
import './Checkout.css'
import CheckoutImage from './CheckoutImage.jpg'
import Subtotal from './Subtotal.js' 
import CheckoutProduct from './CheckoutProduct.js'
import R from './R.jpg'
import {useStateValue} from './StateProvider.js'
function Checkout() {
  const [{basket,user},dispatch]=useStateValue()
  
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src={CheckoutImage} className="checkout_ad"></img>
        <div>
        <h2 className="checkout_title"> Your Shopping Basket</h2>
        <h3>{user && `Hello, ${user.email}`}</h3>
        </div>
        {basket.map(item => (
          <CheckoutProduct id ={item.id} title = {item.title} image={item.image} price={item.price} rating = {item.rating} />
      
        ))}
      </div>
    
      <div className="checkout__right">
        <Subtotal />

      </div>
    </div>
  )
}

export default Checkout