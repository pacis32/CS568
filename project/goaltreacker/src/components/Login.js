
import './login.css';
import React, { useState } from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {Context} from './login/loginContext'
export default function Login(){

  const {user, dispatch, isFetching} = useContext(Context)
const [input, setInput] = useState({
  email: '',
  password: ''
})
const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    fetch("http://localhost:4000/login-user", {
      method: "POST",
      crossDomain: true,
      headers:
      {
        "Content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(input)


    }).then((res) => res.json())
      .then((data) => {
        localStorage.setItem('user', JSON.stringify({user:data._doc, token:data.token}) )
        dispatch({type:"LOGIN_SUCCESS", payload: {user:data._doc, token:data.token}});
        navigate('/goals')
      }).catch((e)=>dispatch({type:"LOGIN_FAILURE"}))
      
  }


  
    
    return (
      <>
        <div className='loginContainer'>
          <div className="card ">
            <h4 className="title">Log In!</h4>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <input className="input-field" id="logemail" placeholder="Email" name="email" type="email" value={input.email} onChange={(e)=> setInput({...input, [e.target.name]:e.target.value})} />
              </div>
              <div className="field">

                <input className="input-field" id="logpass" placeholder="Password" value={input.password} name="password" type="password" onChange={(e)=> setInput({...input, [e.target.name]:e.target.value})} />
              </div>
              <button className="btn" type="submit" >Login</button>
              <a href="/register" className="btn-link">Don't have an Account?</a>
            </form>
          </div>
        </div>

      </>

    )
  
}