import React, { Component } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert'
import '../style.css';
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import {reactLocalStorage} from 'reactjs-localstorage';



class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {show:false,redirect:'',
        welcomeuser:''}
    }

    newuser = ()=>{
        let fname = document.getElementById('fname').value;
        let lname = document.getElementById('Lname').value;
        let email = document.getElementById('Email').value;
        let pword = document.getElementById('pword').value;
        axios.post("http://localhost:8000/registration",{Firstname:fname,Lastname:lname,Email:email,Password:pword})
        .then((data)=>{
            if (data.data.result){
                reactLocalStorage.set('token',data.data.Token);
                this.setState({
                    show:true,
                    welcomeuser:fname
                })
            }else{
                console.log("false");  
            }
        })  
        .catch((err)=>{
            console.log(err);
            
        })
    }
    hideAlert=()=>{
        this.setState({
            show:!this.state.show,

            redirect:<Redirect to="/" />
        })
        
    }
    render() {
        return ( 
            <div className="contain-signup">
                <SweetAlert show={this.state.show} success title="Success!" onConfirm={this.hideAlert}>
                    Welcome {this.state.welcomeuser}!
                </SweetAlert>
                {this.state.redirect}
                <center>
                    <img src="./logo.png" width='150px' />
                    <h1>Sign up</h1>
                    </center>
                <div>  
                    <p className="inp-dis">First name  </p>
                    <input id='fname' text="type" className="userinput" required />
                    <p className="inp-dis">Last name  </p>
                    <input id='Lname' text="type" className="userinput" required/>
                    <p className="inp-dis">Email </p>
                    <input id='Email' type="email" className="userinput" required/>
                    <p className="inp-dis">Password </p>
                    <input id='pword' type="password" className="userinput" required/>
                    <button className="subbtn" onClick = { this.newuser }>Sign up</button> 
                    <a href="/login">already have account</a>
                </div>
            </div>
         );
    }
}

 
export default Signup;