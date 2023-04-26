import React, { Component } from 'react'
import './login.css';
export default class Register extends Component {

    constructor(props){
        super(props)
        this.state={
            fname:'',
            lname:'',
            email:'',
            password:''
        };
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const {fname,lname,email,password}= this.state;
        console.log(fname,lname,email,password);
     fetch("http://localhost:4000/register",{
        method:"POST",
        crossDomain:true,
        headers:
        {
            "Content-type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
        },
        body:JSON.stringify({
            fname,
            lname,
            email,
            password
        })

        
     }).then((res)=>res.json())
        .then((data)=>{
            console.log(data,"userRegister" );
        })
    }

    
  render() {
   
    return (
      
      <>
        <div className='d-flex justify-content-center align-items-center  loginContainer'>

      <div className="card">
      <h4 className="title">Register</h4>
      <form onSubmit={this.handleSubmit}>
      <div className="field">
          <input className="input-field" type='text'  id="logemail" placeholder="FirstName"  name="logemail"  onChange={e=>this.setState({email:e.target.value})}/>
        </div>
        <div className="field">
          <input className="input-field" type='text'  id="logemail" placeholder="LastName"  name="logemail" onChange={e=>this.setState({email:e.target.value})}/>
        </div>
        <div className="field">
          <input className="input-field" type='email' id="logemail" placeholder="Email"  name="logemail" onChange={e=>this.setState({email:e.target.value})}/>
        </div>
        <div className="field">
          
          <input className="input-field" type='password' id="logpass" placeholder="Password"  name="logpass"  onChange={e=>this.setState({password:e.target.value})}/>
        </div>
        <button className="btn" type="submit" >Register</button>
        <a href="/login" className="btn-link">Have an Account?</a>
      </form>
    </div>
    </div>
    </>
    )
  }
}