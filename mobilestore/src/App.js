import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './Components/signup';
import Login from './Components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Components/Nav';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Buyproduct from './Components/Productshop';
import Account from './Components/Account';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'




function App() {  
  return (
    <div className="App">
    <Router>
          <Route exact path='/'>
            <Menu/>
            <Header/>
            <Home/>
            <Footer/>
          </Route>
          <Route path='/Account'>
            <Menu/>
            <Account/>
          </Route>
          <Route path='/signup'>
            <Signup/>
          </Route>
          <Route path='/Login'>
            <Login/>
          </Route>
          <Route path='/Productshop'>
            <Menu/> 
            <Buyproduct/>
            <Footer/> 
          </Route>
    </Router>
    </div>
  );
}     

export default App;
