import React ,{useState, useContext}from 'react'
import {useLocation, useNavigate } from 'react-router-dom';
import { Form, Modal, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import GoalContext from './GoalContext'

axios.defaults.baseURL = 'http://localhost:4000'

export default function GoalDetails() {

    

    const navigate = useNavigate();
    const location = useLocation();
  
    
    const [newGoal, setNewGoal] = useState({
        Title: "", description: "",  deadline: ""
    });

    const onInputChange = (e) => {
        setNewGoal({ ...newGoal, [e.target.name]: e.target.value })
    }

 const [status, setStatus] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.patch(`/addStep/${location.state?._id}`, newGoal)
       navigate('/goals')
    }

    const updateStep = (goalId, stepId, updatedStep) => {
        axios.patch(`/updatestep/${goalId}/${stepId}`, { status: updatedStep })
            .then((res) => {
               navigate('/goals')
            })
            .catch((e) => console.log(e.message))
    }
    const handleStatus = (e, stepid) => {
    const status = e.target.value;
    updateStep(location.state?._id, stepid, status);
}


  return (
<> 
<div className='w-100'>
<h3 className='w-100 d-flex  justify-content-center'>GoalDetails</h3>

<div className='d-flex  w-100   container '>

 <div className=' w-25 '>
     <h4>{location.state?.title}</h4>
     <p>{location.state?.description}</p>
 </div>
 <div className=' '>
    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Steps</button>
 <table className="table table-striped">
 <thead>
    <tr>
      
      <th scope="col">Title</th>
      <th scope="col">description</th>
      <th scope="col">status</th>
      <th scope="col">status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

  {location.state.steps.map(step=>{
         return <tr key={step._id}>
         
         <td>{step.title}</td>
         <td>{step.description}</td>
         <td>{step.status}</td>
         <td>
         <Form.Select aria-label="Default select example"  name="status"
                         onChange={(e)=>handleStatus(e, step._id)} >
                        <option>Change Status</option>
                        <option value="Not-Started">Not-Started</option>
                        <option value="In-progress">In-progress</option>
                        <option value="Completed">Completed</option>
                        </Form.Select>
        </td>
         <td>
         <span className="material-symbols-outlined">edit</span>
         <span className="material-symbols-outlined">delete</span>
         </td>
       </tr>
     })}
    
   
    
  </tbody>
</table>
     
 </div>
</div>
</div>





<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add New Step</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        
      <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={newGoal.title}
                        onChange={(e) => onInputChange(e)}
                        required
                    />

                    <Form.Control
                        as="textarea"
                        placeholder="Description"
                        rows={2}
                        name="description"
                        value={newGoal.description}
                        onChange={(e) => onInputChange(e)}
                    />

                    <Form.Control
                        type="date"
                        placeholder="Deadline"
                        name="deadline"
                        value={newGoal.deadline}
                        onChange={(e) => onInputChange(e)}
                    />
                </Form.Group>
                <Button variant="success" data-bs-dismiss="modal" type="submit" >
                    Save
                </Button>
            </Form>



      </div>
      
    </div>
  </div>
</div>
</>
   
    
  )
}
