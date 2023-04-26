import React from 'react';
import { MdAccountBalance,MdLogout,MdAssignmentAdd,MdLogin,MdDataThresholding} from "react-icons/md";

export const SidebarData=[
    {
  
    title:'LogIn',
    icon:<MdLogin/>,
    link:'/login'
},

{
  
    title:'Home',
    icon:<MdAccountBalance/>,
    link:'/home'
},

{
  
    title:'Goals',
    icon:<MdAssignmentAdd/>,
    link:'/goals'
},

{
  
    title:'AddGoal',
    icon:<MdLogout/>,
    link:'/addGoal'
},

{
  
    title:'LogOut',
    icon:<MdDataThresholding/>,
    link:'/logout'
},

]
