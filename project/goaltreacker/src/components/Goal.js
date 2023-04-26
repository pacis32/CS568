import { useContext ,useState} from 'react';
import { GoalContext } from './GoalContext';
import './goals.css';
import Moment from 'react-moment';
import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import {Modal, Button, } from 'react-bootstrap';

import EditGoal from './EditGoal';
import { useNavigate } from 'react-router-dom';

export default function Goal({goal}) {

  const {deleteGoal}= useContext(GoalContext);
  
  const navigate = useNavigate()
  const [show,setShow] = useState(false);

  const handleClose=()=>{
      setShow(false)
  }
  const handleShow=()=>{
    
      setShow(true)

  }

  const handleViewGoal=(goal)=>{

   navigate('/goaldetails', {state:goal})
    
  }
  
  const getProgress = () => {
    const goalLength = goal.steps.length 
    console.log("length",goalLength)
    const completed = goal.steps.filter(step=> step.status ==="Completed").length;
    console.log("completd",completed)
    const result = (Math.floor((completed * 100)/goalLength));
   return result;
  }
  return (
    <><td>{goal.title}</td>
      <td>{goal.description}</td>
      <td>
      <ProgressBar width='200px' completed={isNaN(getProgress()) ? 0 : getProgress()  } />
      </td>
      <td>
            <Moment format="D MMM YYYY" withTitle>
              {goal.deadline}
            </Moment>   
      </td>
      <td className='d-flex '>
        < button onClick={()=>handleViewGoal(goal)} className="btn  text-danger btn-act " data-toggle="modal"><i className="icons" data-toggle="tooltip" title="View"> <span className="material-symbols-outlined">

visibility
</span></i></button>
        <button onClick={handleShow}  className=" btn  text-warning btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"><span className="material-symbols-outlined">
          edit
          </span></i></button>
        < button onClick={()=>deleteGoal(goal._id)} className="btn  text-danger btn-act " data-toggle="modal"><i className="icons" data-toggle="tooltip" title="Delete"><span className="material-symbols-outlined">
          delete
        </span></i></button>
      </td>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
              AddGoal
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
            < EditGoal theGoal={goal} />

        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
        </Modal.Footer>
    </Modal>
    </>

  )
}
