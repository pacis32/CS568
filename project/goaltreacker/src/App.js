
import './App.css';
import Register from './components/Register';
import Login from './components/Login'
import Home from './components/Home';
import AddGoal from './components/AddGoal';
import Goals from './components/Goals';
import RootLayout from './layout/RootLayout';
import GoalContextProvider from './components/GoalContext';
import {
  createBrowserRouter,
 
  Route,
 

   createRoutesFromElements,
   RouterProvider,
  
  } from 'react-router-dom';
import GoalDetails from './components/GoalDetails';




  const router= createBrowserRouter(
    createRoutesFromElements(
      
          <Route path='/' element={<RootLayout/>}>
            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/addGoal' element={<AddGoal/>}/>
            <Route path='/goaldetails' element={<GoalDetails/>}/>
            <Route path='/goals' element={<GoalContextProvider><Goals/></GoalContextProvider>}/>
          </Route>
    
    )
  )

function App() {

 

  return (
    <>
       <RouterProvider  router={router}>
        <RootLayout/>   
       </RouterProvider>
       
      
       
       
    </>
   
  );
}

export default App;
