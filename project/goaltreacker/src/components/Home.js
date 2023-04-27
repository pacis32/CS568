
import React  from 'react';
 import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
function Home() {
  axios.defaults.baseURL = 'http://localhost:4000';
  const response= useLoaderData()

  return (
    <>
    <table>
      <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Status</th>
        <th>change status</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>

      {Array.isArray(response) && response.map((goal, index) => (
  <tr key={index}>
    <td>{goal.title}</td>
    <td>{goal.description}</td>
    <td>{goal.status}</td>
  </tr>
))}
In this code, we use the Array.isArray() method to check if response is an array before calling the map() method. If it is not an array, the map() method won't be called, and the error will be avoided.








</tbody>
    </table>
    </>
  );
}

export default Home;

export const loadingData= async()=>{
 const response =await  axios.get('/allgoals');
 
return response;
  
}








