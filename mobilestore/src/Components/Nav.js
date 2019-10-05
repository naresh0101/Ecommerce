import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import '../style.css';
import {reactLocalStorage} from 'reactjs-localstorage';

import axios from 'axios'


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {username:"Account"}
    }
   
    render() { 
        return (
            <div style={{background:'#80d8ff',borderBottom:"solid 1px white"}}>
            <div className="container"> 
            <Navbar collapseOnSelect expand="lg" className="" style={{background:'#80d8ff'}} >
                <Navbar.Brand href="/"><img src="./logo.png" width="50px" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/" >Home</Nav.Link>

                    {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    <NavDropdown title="Products" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Apple</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Vivo</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Samsung</NavDropdown.Item>
                    </NavDropdown>  
                    </Nav>
                    <form className="d-flex flex-row">
                        <input className="productsearch" type="text" placeholder="Search for brand of Mobile.."/>
                        <button type='submit' className="search"><i className="fa fa-search" style={{color:'gray'}}></i></button>
                    </form>     
                    <Nav>
                    <NavDropdown title={this.state.username} id="collasible-nav-dropdown">
                        <NavDropdown.Item href='/Login'>Login</NavDropdown.Item>
                        <NavDropdown.Item>Logout</NavDropdown.Item>
                        <NavDropdown.Item href='/signup'>New user</NavDropdown.Item>
                        <NavDropdown.Item href="/Account">Settings</NavDropdown.Item>

                    </NavDropdown>
                    {/* <Nav.Link eventKey={2} href="#memes">
                        <div className="accountlogo"><h3>N</h3></div>
                    </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
            </div>
         );
    }
}
 
export default  Menu;