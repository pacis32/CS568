
import './HeaderTop.css';
import React, { Component } from 'react'
import { Context } from './login/loginContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


export default function HeaderTop(){
  const {user, dispatch} = useContext(Context);
   const navigate = useNavigate()
function logout(){

  dispatch({type:"LOGOUT"});
  navigate('/login')
}
    return (
      <div className="headerTop d-flex justify-content-between p-3">

        <div className='fw-bolder fs-1'>Goal Tracker</div>
        <div className='d-flex align-items-center fw-bolder mr-4 user'>
          {user?.user.fname} 
          <span className="material-symbols-outlined">
          account_circle
        </span><div onClick={logout}>logout</div></div>
        
      </div>
    )

}





