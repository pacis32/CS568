import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { SidebarData } from './SidebarData';


export default function Sideb() {
  const navigate = useNavigate();
  return (
    <div className='Sidebar'>
      <div className='logo logoWrapper d-flex justify-content-center align-items-center text-light'>
      <span className="material-symbols-outlined ">
speed
</span>
      </div>
      <ul className='SidebarList'>

     {
      SidebarData.map((item,index)=>{
        return(
          <li key={index} className='row' onClick={()=>{navigate(item.link)}}>   
          <div id='icon'>
            {item.icon}
          </div>
          
          <div id='title'> 
            {item.title}
          </div> 
          </li>
        );
      })
     }
     </ul>
    </div>
  )
}
