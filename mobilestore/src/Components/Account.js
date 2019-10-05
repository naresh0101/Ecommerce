import React, { Component } from 'react';
import '../style.css';


class Account extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hide:'none'
         }
    }

    render() {  
        return ( 
        <div class="container" style={{boxShadow: '0 2px 4px 0 rgb(168, 165, 165)',marginTop:'80px'}}>
            <div class="fb-profile">
                <img align="left" className="fb-image-lg" src="./header.png" alt="Profile header"/>
                <img align="left" style={{background:'mintcream'}} className="fb-image-profile thumbnail" src="./user.png" alt="Profile image example"/>
                <div class="fb-profile-text">
                    <h1> Naresh Kumar Gautam</h1>
                </div>
            </div>
            <table>
                <tr>
                    <td className="wtext" style={{fontWeight:'bolder'}}>User name:</td>
                    <td>naresh18</td>
                </tr>
                <tr>
                    <td className="wtext" style={{fontWeight:'bolder'}}>Email:</td>
                    <td><span id="emailnone">naresh18@gmail.com </span><button style={{border:'none',outline:'none',marginLeft:'15px',width:'100px',float:'right'}}>Edit</button></td>

                </tr>
                <tr>
                    <td className="wtext" style={{fontWeight:'bolder'}}>Phone number:</td>
                    <td>7065510968<button style={{border:'none',outline:'none',marginLeft:'15px',width:'100px',float:'right'}}>Edit</button></td>
                </tr>
                <tr>
                    <td className="wtext" style={{fontWeight:'bolder'}}>Password:</td>
                    <td>98765432@naresh18<button style={{border:'none',outline:'none',marginLeft:'15px',width:'100px',float:'right'}}>Edit</button></td>
                </tr>
                <tr>
                    <td className="wtext" style={{fontWeight:'bolder'}}>Address:</td>
                    <td>Here is you address,3298</td>
                </tr>
        
            </table>    
            <h1>
                Address
            </h1>
            <div className="saveaccountedit ">
                <textarea className="editaddress" placeholder="Type your full Address......." />
                <button ><h3>Save edit</h3></button>
            </div>
            
        </div>
         );
    }
}
 
export default Account;