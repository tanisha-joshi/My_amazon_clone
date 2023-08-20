import React from 'react'
import './Header.css'
import logo from './Amazon-Logo-Black 1.jpg'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Link} from 'react-router-dom'
import {useStateValue} from './StateProvider'
import {auth} from "./firebase.js"
import {signOut} from "firebase/auth"


function Header() {
  const [{basket,user},dispatch]=useStateValue()
  const handleAuthentication=()=>{
    if(user)
    {
      signOut(auth,user)
    }

  }

  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={logo} />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text"></input>
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>
      <div className="header_nav">
        <div onClick={handleAuthentication}className="header_option">
          <span className="header_optionLineOne">Hello {user ? `${user.email}` : " "}  </span>
        <Link to={!user&&"/login"}>
          <span className="header_optionLineTwo">{user ? "Sign Out":"Sign In"}</span>
        </Link>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">&Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <AddShoppingCartIcon />
            <span className="header_optionLineTwo header_basketCount">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header