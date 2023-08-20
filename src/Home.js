import React from 'react'
import './Home.css'
import HomePageLogo from './amazon-homepage.png'
import Product from './Product.js'
import R from "./R.jpg"

function Home() {
  return (
    <div className="home">
        <div className="home_container">
            <img src = {HomePageLogo} className="home_image"></img>
            <div className="home_row">
                <Product id="1" title="Cat" image={R} price="11.6"  rating="3"/>
                <Product id="2" title="dog" image={R} price="12.6" rating="3"/>
                <Product id="3" title="cow" image={R} price ="18.6"/>

            </div>
            <div className="home_row">
                <Product id="4" title="rat" image={R} price="10.6" rating="3"/>
                <Product id="5" title="mat" image={R} price="17.6" rating="3"/>

            </div>
            <div className="home_row">
                <Product id="6" title="pat" image={R} price="14.6" rating="3"/>

            </div>
            
        </div>
    </div>
  )
}

export default Home