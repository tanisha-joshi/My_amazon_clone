import './App.css';
import Header from './Header.js'
import Home from './Home.js'
import Checkout from './Checkout.js'
import Login from './Login.js'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {useEffect} from "react"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js"
import {useStateValue} from "./StateProvider.js"
function App() {
  const [{user},dispatch]=useStateValue()
  useEffect(() =>{
    onAuthStateChanged(auth, (user) => {
      console.log("The user is",user)
    if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    dispatch({
      type: 'SET_USER',
      user: user,
    })
    const uid = user.uid;
    // ...
    } else {
    // User is signed out
    // ...
    dispatch({
      type: 'SET_USER',
      user: user,
    }) 
  }
});

  },[])
  return (
    <Router>
      <div className="app">
        <Routes>
        <Route path="/login" element = {<Login />} />
        <Route path="/" element={<div><Header /><Home /></div>} />
        <Route path="/checkout" element={<div><Header /><Checkout /></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
