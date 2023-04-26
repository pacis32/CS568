
import './goals.css'


import { Modal, Button} from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { GoalContext } from './GoalContext';
import Goal from './Goal';
import AddForm from './AddForm';


export default function Goals() {
  
  const {goals, search, setSearchInput} =useContext(GoalContext);
  
 
  

  const [show ,setShow]= useState(false)
  const handleShow=()=>{ setShow(true)}
  const handleClose=()=>{ setShow(false)}
  
const handleSearch = (event) => {
  setSearchInput(event.target.value);
 search(event)
}

  return (

    <>
    <div className="container-xl">
	    <div className="table-responsive">
		<div className="table-wrapper">
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>Manage <b>Goals</b></h2>
          </div>
          <div className="col-sm-6">
            <Button  onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons"><span className="material-symbols-outlined">
add_task
</span></i> <span>Add New Goal</span></Button>
          </div>
        </div>
      </div>
      search : <input type='search'  onChange={handleSearch}/>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Progress</th>
            <th>Deadline</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>

          {goals && goals.map((goal, index) =>(
            <tr key={index} >
            <Goal goal={goal}  />
          </tr>
          ))
}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Add goal
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddForm />
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
        </Modal.Footer>
    </Modal>

      </div>
      </div>
      </div>
    </>



  )
}




