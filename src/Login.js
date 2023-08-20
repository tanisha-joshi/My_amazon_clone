import React,{useState} from 'react'
import './Login.css'
import logo from './Amazon-logo-white.jpg'
import {Link} from 'react-router-dom'
import { auth,db  } from "./firebase.js"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"

function Login() {
    
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const signIn = e =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        console.log("hi")
        const user = userCredential.user;
        // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
        
    }
    const register = e =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
           
    }
    

  return (
    <div className="login">
        <Link to="/">
            <img src={logo} className="login_logo" />
        </Link>
        <div className="login_container">
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange = {e => setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type="password" value={password} onChange = {e => setPassword(e.target.value)} />
                <button className="login_signInButton" type='submit' onClick={signIn}>Sign-in</button>
            </form>
            <p>By signing in you agree to Amazon fake clone conditions of Use&Sale. </p>
            <button className="login_registerButton" onClick={register}>Create your Amazon account</button>
        </div>

    </div>
  )
}

export default Login