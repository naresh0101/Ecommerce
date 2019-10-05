import React, { Component } from 'react';
import '../style.css';
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert'
import {reactLocalStorage} from 'reactjs-localstorage';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { show:false,redirect:'' ,show2:false}
    }

    login = ()=>{
        var email = document.getElementById('loginemail').value;
        var password = document.getElementById('loginpass').value;
        axios.post("http://localhost:8000/loginuser",{Email:email,Password:password})
        .then((data)=>{
            if (!data.data.result){
                // if pword willl wrong
                this.setState({
                    show:true
                })
                // console.log(data.data.token);

            }else{
                this.setState({
                    show2:true
                })
                reactLocalStorage.set('token',data.data.Token);
            }
        })  
        .catch((err)=>{
            console.log(err);
            
        })
    }
    // if  login will successfulll  then it will send to  login  page
    hideAlert=()=>{
        this.setState({
            show:!this.state.show,
            redirect:<Redirect to="/" />

        })
        
    }

    hideAlert2=()=>{
        this.setState({
            show2:!this.state.show,
            redirect:<Redirect to="/signup" />
        })
        
    }

    render() { 
        return ( 
            <div className="contain-signup">
                <SweetAlert show={this.state.show} title="😔" onConfirm={this.hideAlert2}>
                    Invalid Email/Password
                </SweetAlert>
                <SweetAlert show={this.state.show2} title="🙏" onConfirm={this.hideAlert}>
                    Welcome!
                </SweetAlert>
                {this.state.redirect}
                <center>
                    <img src="./logo.png" width='150px' />
                    <h1>Sign in</h1>
                    </center>
                <div> 
                    <p className="inp-dis">Email </p>
                    <input id="loginemail" type="email" className="userinput"/>
                    <p className="inp-dis">Password </p>
                    <input type="password" id="loginpass" className="userinput" />

                    <button className="subbtn" onClick={this.login}>Sign in</button>
                    <a href="/Signup">Create account</a>
                    
                </div>  
            </div>
         );
    }
}
 
export default Login;