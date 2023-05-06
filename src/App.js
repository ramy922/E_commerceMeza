import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router ,  Routes , Route } from 'react-router-dom' ; 
// import { Routes ,Route ,Router } from 'react-router-dom';
import Login from './Login';
import { useEffect } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import {auth , } from './firebase';
import { useStateValue } from './StateProvider';




// const promise = loadStripe
//'({API-KEYS-(PUPLICK)})'
function App() {
  const [state,dispatch] =useStateValue();
  useEffect(()=>{
  auth.onAuthStateChanged(authUser =>{
    console.log ('the user is logged in ', authUser);
    if(authUser){
    // the user loged in 
    dispatch ({
    type : 'SET_USER',
    user : authUser
    })}
    else{
      //the user logged out
      dispatch({
        type: 'SET_USER' ,
        user: null
      })
    }
  })
  },[])
  return (
    <Router> 
      
    <div className="App"> 
    <Header/> 
    < Routes>
     <Header/>
      <Route path ='/login'  element={<Login/>} >
      
      </Route>
      <Header/>
      <Route path='/checkout' element={ <Checkout/>} >
     
  
      </Route>
      <Route path='/payment'  element={ <Home/>} >
      <Header/>
      {/* <Elements stripe={promise}>
     <Payment/>
     </Elements> */}
     <h1>welcome to payment page </h1>
     </Route>
    <Route path='/'  element={ <Home/> }>
 
    
     </Route>
     </ Routes>
    </div>
    
    </Router>
  );
}

export default App;
